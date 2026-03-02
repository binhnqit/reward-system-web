import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { MyButton } from '../../../../components/MyButton';
import { BANK_LIST } from '../constants/bankData';

export const BankInfoScreen = ({ onComplete }) => {
  const [selectedBank, setSelectedBank] = useState(BANK_LIST[0]);
  const [accNumber, setAccNumber] = useState('');
  const [accName, setAccName] = useState(''); // Tên lấy từ Lookup IBFT

  // Giả lập Bước 5.3: Lookup IBFT
  const handleLookup = (text: string) => {
    setAccNumber(text);
    if (text.length >= 10) {
      // Giả sử gọi API xong trả về tên chủ tài khoản
      setAccName("NGUYEN VAN A"); 
    } else {
      setAccName("");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Liên kết ngân hàng</Text>
      <Text style={styles.subtitle}>Nhập thông tin để nhận tiền thưởng trực tiếp</Text>

      <Text style={styles.label}>Chọn ngân hàng</Text>
      <View style={styles.pickerFake}>
         <Text>{selectedBank.name}</Text>
      </View>

      <Text style={styles.label}>Số tài khoản</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập số tài khoản"
        keyboardType="number-pad"
        onChangeText={handleLookup}
      />

      {accName ? (
        <View style={styles.resultBox}>
          <Text style={styles.resultLabel}>Tên chủ tài khoản:</Text>
          <Text style={styles.resultName}>{accName}</Text>
        </View>
      ) : null}

      <View style={{ marginTop: 20 }}>
        <MyButton 
          title="Xác nhận & Hoàn tất" 
          onPress={() => onComplete({ bank: selectedBank.id, accNumber, accName })} 
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 25, backgroundColor: '#fff', flexGrow: 1 },
  title: { fontSize: 22, fontWeight: 'bold' },
  subtitle: { color: 'gray', marginBottom: 20 },
  label: { fontWeight: '600', marginTop: 15, marginBottom: 5 },
  input: { borderBottomWidth: 1, borderColor: '#007AFF', padding: 10, fontSize: 16 },
  pickerFake: { padding: 15, backgroundColor: '#f0f0f0', borderRadius: 8 },
  resultBox: { marginTop: 20, padding: 15, backgroundColor: '#e6f7ff', borderRadius: 8 },
  resultLabel: { fontSize: 12, color: '#0050b3' },
  resultName: { fontSize: 18, fontWeight: 'bold', color: '#0050b3' }
});
