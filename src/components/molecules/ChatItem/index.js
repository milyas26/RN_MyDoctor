import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Doctor1} from '../../../assets';
import {colors, fonts} from '../../../utils';

const ChatItem = ({isUnread}) => {
  return (
    <View style={styles.container}>
      <Image source={Doctor1} style={styles.image} />
      <View>
        <Text style={styles.nama}>Alexander Jennie</Text>
        <Text style={styles.chat(isUnread)}>
          Baik bu terimakasih banyak atas waktu...
        </Text>
      </View>
    </View>
  );
};

export default ChatItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  image: {
    width: 46,
    height: 46,
    borderRadius: 50,
    marginRight: 12,
  },
  nama: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  chat: (isUnread) => ({
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: isUnread ? colors.text.primary : colors.text.secondary,
  }),
});
