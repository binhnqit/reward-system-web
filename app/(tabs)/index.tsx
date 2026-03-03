import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Platform } from 'react-native';
import { MyButton } from '../../components/MyButton';

export default function HomeScreen() {
  const router = useRouter();
  // Sau này bạn có thể dùng Zustand hoặc React Query để fetch balance thực từ Neon DB
  const balance = "10.000"; 

  return (
    <SafeAreaView style={styles.safeArea}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f5f5f5' },
  container: { 
    flex: 1, 
    padding: 20, 
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? 40 : 0 
  },
  welcomeText: { fontSize: 18, color: '#666', marginBottom: 10, textAlign: 'center' },
  balanceCard: { 
    backgroundColor: '#007AFF', 
    padding: 30, 
    borderRadius: 24, 
    alignItems: 'center', 
    marginBottom: 40,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  balanceLabel: { color: 'rgba(255,255,255,0.8)', fontSize: 16 },
  balanceAmount: { color: '#fff', fontSize: 38, fontWeight: 'bold', marginTop: 5 },
  buttonContainer: { width: '100%', gap: 15 },
  secondaryBtn: { marginTop: 10, padding: 15 },
  secondaryBtnText: { color: '#007AFF', textAlign: 'center', fontSize: 16, fontWeight: '500' }
});
