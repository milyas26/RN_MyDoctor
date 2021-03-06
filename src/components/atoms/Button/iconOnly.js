import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ICArrow, ICArrow_Light} from '../../../assets';

const IconOnly = ({onPress, icon}) => {
  const Icon = () => {
    if (icon === 'back-dark') {
      return <ICArrow />;
    }
    if (icon === 'back-light') {
      return <ICArrow_Light />;
    }
    return <ICArrow />;
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconOnly;
