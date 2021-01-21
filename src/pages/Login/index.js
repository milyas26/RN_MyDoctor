import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';
import {Firebase} from '../../config';
import {colors, fonts, useForm, storeData, showError} from '../../utils';
import {useDispatch} from 'react-redux';

const Login = ({navigation}) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const showLoading = () => {
    dispatch({
      type: 'SET_LOADING',
      value: true,
    });
  };

  const hideLoading = () => {
    dispatch({
      type: 'SET_LOADING',
      value: false,
    });
  };

  const login = () => {
    showLoading();
    Firebase.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((res) => {
        hideLoading();
        Firebase.database()
          .ref(`users/${res.user.uid}/`)
          .once('value')
          .then((res) => {
            const data = res.val();
            if (data) {
              storeData('user', data);
              navigation.replace('MainApp', data);
            }
          });
      })
      .catch((err) => {
        hideLoading();
        showError(err.message);
      });
  };

  return (
    <>
      <View style={styles.main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ILLogo />
          <Text style={styles.title}>Masuk dan Mulai Konsultasi</Text>
          <Input
            title="Email Address"
            value={form.email}
            onChangeText={(value) => setForm('email', value)}
          />
          <Gap height={24} />
          <Input
            title="Password"
            value={form.password}
            onChangeText={(value) => setForm('password', value)}
            secureTextEntry
          />
          <Gap height={10} />
          <Link title="Forgot My Password" size={12} />
          <Gap height={40} />
          <Button onPress={login}>Sign In</Button>
          <Gap height={30} />
          <Link
            title="Create a New Account"
            size={16}
            isCenter
            onPress={() => navigation.navigate('Register')}
          />
        </ScrollView>
      </View>
    </>
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
