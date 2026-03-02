import { useRouter } from 'expo-router';
import { PersonalInfoScreen } from '../../src/modules/auth/screens/PersonalInfoScreen';

export default function Page() {
  const router = useRouter();

  const handleDone = (data: { fullName: string }) => {
    console.log("Thông tin cá nhân:", data);
    // Lưu thông tin vào bộ nhớ tạm (State) và chuyển sang Bước 5: Ngân hàng
    router.push('/auth/bank-info'); 
  };
const handleFinish = (bankData: any) => {
  // In ra tất cả để kiểm tra
  console.log("Dữ liệu gom được cuối cùng:", bankData);
  alert(`Thành công! Chào ${bankData.accName}, số tài khoản ${bankData.accNumber}`);
};
  return <PersonalInfoScreen onComplete={handleDone} />;
}