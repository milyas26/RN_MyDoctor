import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Doctor2} from '../../assets';
import {List, Header} from '../../components';
import {Firebase} from '../../config';
import {colors} from '../../utils';

const ChooseDoctor = ({navigation, route}) => {
  const categoryName = route.params;

  const [listDoctor, setListDoctor] = useState([]);

  const callDoctorByCategory = (category) => {
    Firebase.database()
      .ref('doctors/')
      .orderByChild('category')
      .equalTo(category)
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
          setListDoctor(data);
        }
      });
  };

  useEffect(() => {
    callDoctorByCategory(categoryName.category);
  }, []);

  return (
    <View style={styles.container}>
      <Header
        type="dark"
        title={categoryName.category}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.item}>
        {listDoctor.map((doctor) => {
          return (
            <List
              key={doctor.id}
              onPress={() => navigation.navigate('DoctorProfile', doctor)}
              type="next"
              pic={{uri: doctor.data.photo}}
              name={doctor.data.fullName}
              desc={doctor.data.gender}
            />
          );
        })}
      </View>
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
