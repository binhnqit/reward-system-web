import { useRouter } from 'expo-router';
import { CreatePasswordScreen } from '../../src/modules/auth/screens/CreatePasswordScreen';

export default function Page() {
  const router = useRouter();

  const handleDone = (password: string) => {
    console.log("Mật khẩu đã tạo:", password);
    // Sau khi xong, chuyển sang màn hình Nhập thông tin cá nhân (Bước 4)
    router.push('/auth/personal-info'); 
  };

  return <CreatePasswordScreen onComplete={handleDone} />;
}