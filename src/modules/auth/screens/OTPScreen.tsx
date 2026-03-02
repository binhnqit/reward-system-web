import { useLocalSearchParams, useRouter } from 'expo-router'; // Dùng hook của Expo Router
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
// Chỉ dùng 4 lần thoát thư mục: screens -> auth -> modules -> src -> gốc
import { MyButton } from '../../../../components/MyButton';

export const OTPScreen = () => {
  const router = useRouter();
  const params = useLocalSearchParams(); // Lấy dữ liệu truyền qua URL
  const phoneNumber = params.phoneNumber || 'người dùng'; // Mặc định nếu chưa có số
  const [otp, setOtp] = useState('');

  const handleVerify = () => {
    // Giả lập kiểm tra OTP
    if (otp === '123456') { 
      // Chuyển sang màn hình tạo mật khẩu
      router.push('/auth/create-password'); 
    } else {
      Alert.alert('Lỗi', 'Mã OTP không chính xác (Mẹo: 123456)');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Xác thực OTP</Text>
      <Text style={styles.subtitle}>Mã đã được gửi đến số {phoneNumber}</Text>
      
      <TextInput 
        style={styles.input}
        placeholder="------"
        keyboardType="number-pad"
        maxLength={6}
        onChangeText={setOtp}
        autoFocus={true}
      />

      <MyButton title="Xác nhận" onPress={handleVerify} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center' },
  subtitle: { textAlign: 'center', color: 'gray', marginBottom: 30, marginTop: 10 },
  input: { 
    letterSpacing: 10, 
    fontSize: 30, 
    textAlign: 'center', 
    borderBottomWidth: 2, 
    borderBottomColor: '#007AFF',
    marginBottom: 40,
    marginHorizontal: 40
  }
});