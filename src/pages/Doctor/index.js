import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  DoctorCategory,
  Gap,
  HomeProfile,
  NewsItem,
  RatedDoctor,
} from '../../components';
import {colors, fonts} from '../../utils';
import {JSONCategoryDoctor} from '../../assets';

const Doctor = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.sectionWrapper}>
            <View style={styles.profile}>
              <HomeProfile />
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
              {JSONCategoryDoctor.data.map((item) => {
                return (
                  <DoctorCategory
                    key={item.id}
                    category={item.category}
                    onPress={() => navigation.navigate('ChooseDoctor')}
                  />
                );
              })}
              <Gap width={20} />
            </ScrollView>
          </View>
          <View style={styles.sectionWrapper}>
            <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
            <RatedDoctor />
            <RatedDoctor />
            <RatedDoctor />
            <Text style={styles.sectionLabel}>Good News</Text>
          </View>
          <NewsItem />
          <NewsItem />
          <NewsItem />
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
