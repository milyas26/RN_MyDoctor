import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../components';
import {colors} from '../../utils';

const Register = ({navigation}) => {
  return (
    <View>
      <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <Input title="Full Name" />
        <Gap height={24} />
        <Input title="Pekerjaan" />
        <Gap height={24} />
        <Input title="Email Address" />
        <Gap height={24} />
        <Input title="Password" />
        <Gap height={40} />
        <Button onPress={() => navigation.navigate('UploadPhoto')}>
          Continue
        </Button>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  content: {
    padding: 40,
    paddingTop: 0,
    backgroundColor: colors.white,
    paddingTop: 40,
  },
});
