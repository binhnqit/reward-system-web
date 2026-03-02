import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MyButton } from '../../components/MyButton';

export default function HomeScreen() {
  const router = useRouter();
  // Giả lập số dư, sau này sẽ dùng State hoặc lấy từ API
  const balance = "10.000"; 

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Chào mừng bạn trở lại!</Text>
      
      {/* Thẻ hiển thị số dư */}
      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Số dư khả dụng</Text>
        <Text style={styles.balanceAmount}>{balance} đ</Text>
      </View>

      <View style={styles.buttonContainer}>
        <MyButton 
          title="Quét Mã Nhận Quà" 
          onPress={() => router.push('/main/scanner')} 
        />
        
        <TouchableOpacity 
           style={styles.secondaryBtn}
           onPress={() => router.push('/auth/phone-input')}
        >
           <Text style={styles.secondaryBtnText}>Đăng ký tài khoản mới</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 20, justifyContent: 'center' },
  welcomeText: { fontSize: 18, color: '#666', marginBottom: 10, textAlign: 'center' },
  balanceCard: { 
    backgroundColor: '#007AFF', 
    padding: 30, 
    borderRadius: 20, 
    alignItems: 'center', 
    marginBottom: 40,
    elevation: 5, // Đổ bóng cho Android
    shadowColor: '#000', // Đổ bóng cho iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
  },
  balanceLabel: { color: 'rgba(255,255,255,0.8)', fontSize: 16 },
  balanceAmount: { color: '#fff', fontSize: 36, fontWeight: 'bold', marginTop: 5 },
  buttonContainer: { width: '100%', gap: 15 },
  secondaryBtn: { marginTop: 15, padding: 10 },
  secondaryBtnText: { color: '#007AFF', textAlign: 'center', fontSize: 16 }
});