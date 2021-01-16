import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Doctor2} from '../../assets';
import {List, Header} from '../../components';
import {colors} from '../../utils';

const ChooseDoctor = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        type="dark"
        title="Pilih Dokter Anak"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.item}>
        <List
          onPress={() => navigation.navigate('Chatting')}
          type="next"
          pic={Doctor2}
          name="Alexander Jannie"
          desc="Wanita"
        />
        <List
          onPress={() => navigation.navigate('Chatting')}
          type="next"
          pic={Doctor2}
          name="Alexander Jannie"
          desc="Wanita"
        />
        <List
          onPress={() => navigation.navigate('Chatting')}
          type="next"
          pic={Doctor2}
          name="Alexander Jannie"
          desc="Wanita"
        />
        <List
          onPress={() => navigation.navigate('Chatting')}
          type="next"
          pic={Doctor2}
          name="Alexander Jannie"
          desc="Wanita"
        />
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
