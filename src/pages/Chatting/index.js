import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BubbleChat, Header, InputChat} from '../../components';
import {colors, fonts} from '../../utils';

const Chatting = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        type="dark-profile"
        title="Nairoby Putri Hayza"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.chat}>
        <Text style={styles.chatDate}>Senin, 12 November 2020</Text>
        <BubbleChat isMe />
        <BubbleChat />
        <BubbleChat isMe />
      </View>
      <InputChat />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  chatDate: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    textAlign: 'center',
    marginVertical: 20,
  },
  chat: {
    flex: 1,
  },
});
