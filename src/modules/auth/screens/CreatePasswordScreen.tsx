import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { MyButton } from '../../../../components/MyButton';

export const CreatePasswordScreen = ({ onComplete }) => {
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true); // Trạng thái ẩn/hiện mật khẩu

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thiết lập mật khẩu</Text>
      <Text style={styles.subtitle}>Mật khẩu dùng để đăng nhập cho các lần sau</Text>

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nhập mật khẩu mới"
          secureTextEntry={secure} // Dòng này giúp ẩn mật khẩu thành dấu chấm
          value={password}
          onChangeText={setPassword}
        />
        {/* Nút bấm để xem mật khẩu */}
        <TouchableOpacity onPress={() => setSecure(!secure)}>
          <Text style={{color: '#007AFF'}}>{secure ? "Hiện" : "Ẩn"}</Text>
        </TouchableOpacity>
      </View>

      <MyButton title="Hoàn tất thiết lập" onPress={() => onComplete(password)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { color: 'gray', marginBottom: 30 },
  passwordContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    borderBottomWidth: 1, 
    borderColor: '#ccc',
    marginBottom: 40 
  },
  input: { flex: 1, padding: 10, fontSize: 16 }
});