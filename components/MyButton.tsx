import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';

// Lấy chiều rộng màn hình để nút bấm luôn cân đối
const { width } = Dimensions.get('window');

interface Props {
  title: string;
  onPress: () => void;
  color?: string;
}

export const MyButton = ({ title, onPress, color = '#007AFF' }: Props) => {
  return (
    <TouchableOpacity 
      style={[styles.button, { backgroundColor: color }]} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: width - 50, // Cách mép màn hình một chút
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    // Đổ bóng cho nút trông xịn hơn
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});