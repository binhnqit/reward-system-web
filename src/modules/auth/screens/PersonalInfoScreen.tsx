import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import { MyButton } from '../../../../components/MyButton';

export const PersonalInfoScreen = ({ onComplete }) => {
  const [fullName, setFullName] = useState('');

  const handleNext = () => {
    if (fullName.trim().length < 2) {
      Alert.alert('Thông báo', 'Vui lòng nhập họ tên hợp lệ');
      return;
    }
    // Gửi dữ liệu về trang chính để xử lý chuyển sang bước 5
    onComplete({ fullName });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thông tin cá nhân</Text>
      <Text style={styles.subtitle}>Vui lòng nhập họ tên chính xác để nhận thưởng</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Họ và tên</Text>
        <TextInput
          style={styles.input}
          placeholder="Ví dụ: NGUYEN VAN A"
          autoCapitalize="characters" // Tự động viết hoa để giống tên trên thẻ ngân hàng
          value={fullName}
          onChangeText={setFullName}
        />
      </View>

      <MyButton title="Tiếp tục" onPress={handleNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 25, justifyContent: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 8 },
  subtitle: { fontSize: 14, color: '#666', marginBottom: 30 },
  inputGroup: { marginBottom: 40 },
  label: { fontSize: 14, fontWeight: '600', color: '#555', marginBottom: 8 },
  input: { 
    borderBottomWidth: 1.5, 
    borderColor: '#007AFF', 
    paddingVertical: 10, 
    fontSize: 18,
    color: '#000'
  }
});