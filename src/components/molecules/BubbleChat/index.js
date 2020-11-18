import React from 'react';
import {StyleSheet} from 'react-native';

import IsMe from './IsMe';
import Other from './Other';

const BubbleChat = ({isMe}) => {
  if (isMe) {
    return <IsMe />;
  }
  return <Other />;
};

export default BubbleChat;

const styles = StyleSheet.create({});
