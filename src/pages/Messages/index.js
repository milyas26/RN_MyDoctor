import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ChatItem from '../../components/molecules/ChatItem';
import {Doctor1, Doctor2, Doctor3} from '../../assets';
import {colors, fonts} from '../../utils';

const Messages = () => {
  const [doctors] = useState([
    {
      id: 1,
      profile: Doctor1,
      name: 'Alexander Jannie',
      desc: 'Baik ibu, terima kasih banyak atas wakt...',
    },
    {
      id: 2,
      profile: Doctor2,
      name: 'Nairobi Putri Hayza',
      desc: 'Oh tentu saja tidak karena jeruk it...',
    },
    {
      id: 3,
      profile: Doctor3,
      name: 'John McParker Steve',
      desc: 'Oke menurut pak dokter bagaimana unt...',
    },
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Messages</Text>
        {doctors.map((doctor) => {
          return (
            <ChatItem
              key={doctor.id}
              pic={doctor.profile}
              name={doctor.name}
              desc={doctor.desc}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.text.primary,
    flex: 1,
  },
  main: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    paddingHorizontal: 16,
    paddingTop: 30,
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.text.primary,
  },
});
