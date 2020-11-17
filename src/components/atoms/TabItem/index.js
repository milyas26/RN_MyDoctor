import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  ICDoctor,
  ICDoctorActive,
  ICHospitals,
  ICHospitalsActive,
  ICMessages,
  ICMessagesActive,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Doctor') {
      return active ? <ICDoctorActive /> : <ICDoctor />;
    }
    if (title === 'Messages') {
      return active ? <ICMessagesActive /> : <ICMessages />;
    }
    if (title === 'Hospitals') {
      return active ? <ICHospitalsActive /> : <ICHospitals />;
    }
    return <ICDoctor />;
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.title(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: (active) => ({
    color: active ? colors.text.menuActive : colors.text.menuInactive,
    fontSize: 10,
    fontFamily: fonts.primary[600],
  }),
});
