import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { MyButton } from '../../../../components/MyButton';

export const PhoneInputScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const router = useRouter();

  // Trong handleContinue của PhoneInputScreen.tsx
const handleContinue = () => {
  if (phoneNumber.length < 10) {
    Alert.alert('Lỗi', 'Vui lòng nhập số điện thoại hợp lệ.');
    return;
  }

  // Truyền số điện thoại sang màn hình OTP dưới dạng tham số (query param)
  router.push({
    pathname: '/auth/otp',
    params: { phoneNumber: phoneNumber }
  });
};

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.inner}>
        <Text style={styles.header}>Xác nhận số điện thoại</Text>
        <Text style={styles.subHeader}>
          Vui lòng nhập số điện thoại để bắt đầu nhận thưởng.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Số điện thoại (ví dụ: 0912...)"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          maxLength={11}
          autoFocus={true}
        />

        <MyButton 
          title="Tiếp tục" 
          onPress={handleContinue} 
        />
        
        <Text style={styles.footerText}>
          Bằng cách tiếp tục, bạn đồng ý với Điều khoản của chúng tôi.
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  subHeader: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 32,
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 55,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 18,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
  },
  footerText: {
    marginTop: 20,
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
  },
});