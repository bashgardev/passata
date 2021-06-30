import {View, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import { styles } from './styles';

export const AppButton = ({ title, style, onPress, width }) => {
  return (
    <View style={{ width: width }}>
      <TouchableOpacity onPress={onPress} style={style}>
        <Text style={styles.buttonText}> {title} </Text>
      </TouchableOpacity>
    </View>
  );
};
