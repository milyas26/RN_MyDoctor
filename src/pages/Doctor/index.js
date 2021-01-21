import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  DoctorCategory,
  Gap,
  HomeProfile,
  NewsItem,
  RatedDoctor,
} from '../../components';
import {colors, fonts, showError} from '../../utils';
import {Firebase} from '../../config';

const Doctor = ({navigation}) => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState([]);
  const [topRated, setTopRated] = useState([]);

  const getNews = () => {
    // NEWS ITEM
    Firebase.database()
      .ref('news/')
      .once('value')
      .then((res) => {
        if (res.val()) {
          const data = res.val();
          const dataFilter = data.filter((el) => el !== null);
          setNews(dataFilter);
        }
      })
      .catch((err) => {
        showError(err.message);
      });
  };

  const getCategoryDoctors = () => {
    // Category Doctor
    Firebase.database()
      .ref('category_doctor/')
      .once('value')
      .then((res) => {
        if (res.val()) {
          const data = res.val();
          const dataFilter = data.filter((el) => el !== null);
          setCategory(dataFilter);
        }
      })
      .catch((err) => {
        showError(err.message);
      });
  };

  const getTopRatedDoctor = () => {
    // Top Rated Doctor
    Firebase.database()
      .ref('doctors/')
      .orderByChild('rate')
      .limitToLast(3)
      .once('value')
      .then((res) => {
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map((key) => {
            data.push({
              id: key,
              data: oldData[key],
            });
          });
          setTopRated(data);
        }
      })
      .catch((err) => {
        showError(err.message);
      });
  };

  useEffect(() => {
    getTopRatedDoctor();
    getCategoryDoctors();
    getNews();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.sectionWrapper}>
            <View style={styles.profile}>
              <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
            </View>
            <Text style={styles.tagline}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView
              horizontal
              style={styles.doctorCategory}
              showsHorizontalScrollIndicator={false}>
              <Gap width={32} />
              {category.map((item) => {
                return (
                  <DoctorCategory
                    key={item.id}
                    category={item.category}
                    onPress={() => navigation.navigate('ChooseDoctor', item)}
                  />
                );
              })}
              <Gap width={20} />
            </ScrollView>
          </View>
          <View style={styles.sectionWrapper}>
            <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
            {topRated.map((doctor) => {
              return (
                <RatedDoctor
                  key={doctor.id}
                  rate={doctor.rate}
                  name={doctor.data.fullName}
                  desc={doctor.data.profession}
                  avatar={{uri: doctor.data.photo}}
                  onPress={() => navigation.navigate('DoctorProfile', doctor)}
                />
              );
            })}
            <Text style={styles.sectionLabel}>Good News</Text>
          </View>

          {news.map((item) => {
            return (
              <NewsItem
                key={item.id}
                title={item.title}
                date={item.date}
                image={item.image}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    paddingVertical: 30,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  profile: {
    paddingBottom: 30,
  },
  tagline: {
    width: 209,
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginBottom: 16,
  },
  doctorCategory: {
    flexDirection: 'row',
  },
  wrapperScroll: {
    marginHorizontal: -16,
  },
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[700],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
  sectionWrapper: {
    paddingHorizontal: 16,
  },
});
