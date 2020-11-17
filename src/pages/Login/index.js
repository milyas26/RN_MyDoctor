import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';
import {colors, fonts} from '../../utils';

const Login = () => {
  return (
    <View style={styles.main}>
      <ILLogo />
      <Text style={styles.title}>Masuk dan Mulai Konsultasi</Text>
      <Input title="Email Address" />
      <Gap height={24} />
      <Input title="Password" />
      <Gap height={10} />
      <Link title="Forgot My Password" size={12} />
      <Gap height={40} />
      <Button>Sign In</Button>
      <Gap height={30} />
      <Link title="Create a New Account" size={16} isCenter />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    padding: 40,
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginVertical: 40,
    maxWidth: 153,
  },
});
