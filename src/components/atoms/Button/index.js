import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Button({type, children}) {
  return (
    <View style={styles.container(type)}>
      <Text style={styles.text(type)}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor: type === 'secondary' ? 'white' : '#0bcad4',
    borderRadius: 5,
    paddingVertical: 10,
  }),
  text: (type) => ({
    fontSize: 16,
    fontWeight: '600',
    color: type === 'secondary' ? 'black' : 'white',
    textAlign: 'center',
  }),
});
