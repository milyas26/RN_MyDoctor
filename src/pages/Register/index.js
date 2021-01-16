import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../components';
import {colors, useForm} from '../../utils';

const Register = ({navigation}) => {
  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });

  const onContinue = () => {
    console.log(form);
    // navigation.navigate('UploadPhoto');
  };

  return (
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
