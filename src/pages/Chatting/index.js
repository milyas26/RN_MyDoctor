import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BubbleChat, Header, InputChat} from '../../components';
import {colors, fonts} from '../../utils';

const Chatting = ({navigation, route}) => {
  const dataDoctor = route.params;
  return (
    <View style={styles.container}>
      <Header
        type="dark-profile"
        desc={dataDoctor.data.category}
        title={dataDoctor.data.fullName}
        photo={{uri: dataDoctor.data.photo}}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.chat}>
        <Text style={styles.chatDate}>Senin, 12 November 2020</Text>
        <BubbleChat isMe />
        <BubbleChat />
        <BubbleChat isMe />
      </View>
      <InputChat
        value="Hello"
        onChangeText={() => alert('Text Clicked')}
        onPress={() => alert('Button Pressed')}
      />
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
