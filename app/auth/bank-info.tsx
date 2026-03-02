import { useRouter } from 'expo-router';
import { BankInfoScreen } from '../../src/modules/auth/screens/BankInfoScreen';

export default function Page() {
  const router = useRouter();

  const handleFinish = (bankData: any) => {
    console.log("Dữ liệu cuối cùng:", bankData);
    // Bước 5.4: Gửi toàn bộ dữ liệu lên Server để tạo Account
    alert("Đăng ký thành công!");
    router.replace('/'); // Đưa người dùng về trang chủ (Home)
  };

  return <BankInfoScreen onComplete={handleFinish} />;
}