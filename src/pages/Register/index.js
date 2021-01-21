import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input, Loading} from '../../components';
import {
  colors,
  getData,
  showError,
  showSuccess,
  storeData,
  useForm,
} from '../../utils';
import {Firebase} from '../../config';
import {useDispatch} from 'react-redux';

const Register = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
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

  const onContinue = () => {
    showLoading();
    Firebase.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((success) => {
        const data = {
          fullName: form.fullName,
          profession: form.profession,
          email: form.email,
          uid: success.user.uid,
        };
        Firebase.database()
          .ref('users/' + success.user.uid + '/')
          .set(data);

        storeData('user', data);
        setForm('reset');
        hideLoading();
        showSuccess('Registration Success');
        navigation.navigate('UploadPhoto', data);
      })
      .catch((error) => {
        hideLoading();
        showError(error.message);
      });
  };

  return (
    <>
      <View style={styles.container}>
        <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Input
              title="Full Name"
              onChangeText={(value) => setForm('fullName', value)}
              value={form.fullName}
            />
            <Gap height={24} />
            <Input
              title="Pekerjaan"
              onChangeText={(value) => setForm('profession', value)}
              value={form.profession}
            />
            <Gap height={24} />
            <Input
              title="Email Address"
              onChangeText={(value) => setForm('email', value)}
              value={form.email}
            />
            <Gap height={24} />
            <Input
              title="Password"
              onChangeText={(value) => setForm('password', value)}
              value={form.password}
              secureTextEntry
            />
            <Gap height={40} />
            <Button onPress={onContinue}>Continue</Button>
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    padding: 40,
    paddingTop: 0,
    backgroundColor: colors.white,
    paddingTop: 40,
  },
});
