import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ILGetStarted, ILLogo} from '../../assets';
import {Button, Gap} from '../../components';
import {colors, fonts} from '../../utils';
import {useSelector} from 'react-redux';

export default function GetStarted({navigation}) {
  const stateGlobal = useSelector((state) => state);
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View style={styles.buttons}>
        <Button onPress={() => navigation.navigate('Register')}>
          Get Started
        </Button>
        <Gap height={16} />
        <Button type="secondary" onPress={() => navigation.replace('Login')}>
          Sign In
        </Button>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 28,
    color: colors.white,
    marginTop: 91,
    fontFamily: fonts.primary[600],
  },
});
