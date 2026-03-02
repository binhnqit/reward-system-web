import { CameraView, useCameraPermissions } from 'expo-camera';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, Vibration, View } from 'react-native';
import { useRewardStore } from '../../store/useRewardStore';

export const ScannerScreen = () => {
  // --- 1. TẤT CẢ HOOKS PHẢI ĐẶT Ở ĐÂY (TRÊN CÙNG) ---
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const router = useRouter();
  // Hook Zustand đã được đưa lên trên các lệnh if return
  const addReward = useRewardStore((state) => state.addReward);

  // --- 2. CÁC LỆNH KIỂM TRA ĐIỀU KIỆN (EARLY RETURNS) ---
  if (!permission) {
    return <View style={styles.container} />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.textCenter}>Chúng mình cần quyền dùng Camera để quét mã QR</Text>
        <View style={{ paddingHorizontal: 50 }}>
          <Button onPress={requestPermission} title="Cho phép Camera" />
        </View>
      </View>
    );
  }

  // --- 3. LOGIC XỬ LÝ QUÉT MÃ ---
  const handleBarCodeScanned = ({ data }: { data: string }) => {
    // Chặn quét liên tục khi đang xử lý
    if (scanned) return; 
    
    setScanned(true);
    Vibration.vibrate(100); // Rung phản hồi
    
    // Lưu số tiền vào kho dữ liệu toàn cục (Zustand)
    addReward(10000, data); 
    
    Alert.alert(
      "Thành công 🎉", 
      `Bạn đã nhận được 10.000đ!\nMã QR: ${data}`, 
      [
        { 
          text: "Xem ví", 
          onPress: () => router.replace('/(tabs)') 
        },
        {
          text: "Quét tiếp",
          onPress: () => setScanned(false)
        }
      ]
    );
  };

  // --- 4. GIAO DIỆN ---
  return (
    <View style={styles.container}>
      <CameraView
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
        style={StyleSheet.absoluteFillObject}
      />
      
      {/* Lớp phủ khung quét (Overlay) giúp người dùng căn chỉnh mã QR */}
      <View style={styles.overlay}>
        <View style={styles.unfocusedContainer} />
        <View style={styles.middleContainer}>
          <View style={styles.unfocusedContainer} />
          <View style={styles.focusedContainer} />
          <View style={styles.unfocusedContainer} />
        </View>
        <View style={styles.unfocusedContainer}>
          <Text style={styles.scanText}>Đặt mã QR vào khung để quét</Text>
        </View>
      </View>

      {scanned && (
        <View style={styles.scanAgainBtn}>
          <Button title={'Chạm để quét lại'} onPress={() => setScanned(false)} color="#007AFF" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', justifyContent: 'center' },
  textCenter: { textAlign: 'center', marginBottom: 20, color: '#fff', fontSize: 16 },
  overlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },
  unfocusedContainer: { flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center', alignItems: 'center' },
  middleContainer: { flexDirection: 'row', height: 260 },
  focusedContainer: { 
    width: 260, 
    borderWidth: 2, 
    borderColor: '#00FF00', 
    backgroundColor: 'transparent',
    borderRadius: 15,
  },
  scanText: { color: '#fff', marginTop: 20, fontSize: 16, fontWeight: '500', backgroundColor: 'rgba(0,0,0,0.5)', padding: 10, borderRadius: 10 },
  scanAgainBtn: { 
    position: 'absolute', 
    bottom: 60, 
    alignSelf: 'center', 
    backgroundColor: '#fff', 
    borderRadius: 12,
    paddingHorizontal: 10,
    elevation: 5
  }
});