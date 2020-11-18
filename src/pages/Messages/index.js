import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ChatItem from '../../components/molecules/ChatItem';
import {colors, fonts} from '../../utils';

const Messages = () => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Messages</Text>
        <ChatItem />
        <ChatItem isUnread />
        <ChatItem />
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.text.primary,
    flex: 1,
  },
  main: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    paddingHorizontal: 16,
    paddingTop: 30,
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.text.primary,
  },
});
