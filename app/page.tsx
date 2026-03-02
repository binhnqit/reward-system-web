import { sql } from '@/lib/db';

export default async function AdminDashboard() {
  // Lấy dữ liệu từ Neon
  const users = await sql`
    SELECT id, phone_number, balance, created_at 
    FROM profiles 
    ORDER BY created_at DESC
  `;

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">🛠️ Admin Reward System</h1>
        
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr className="bg-blue-600 text-white text-left text-xs uppercase font-semibold tracking-wider">
                <th className="px-5 py-3">ID</th>
                <th className="px-5 py-3">Số Điện Thoại</th>
                <th className="px-5 py-3">Số Dư (VNĐ)</th>
                <th className="px-5 py-3">Ngày Gia Nhập</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {users.map((user: any) => (
                <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-5 py-5 text-sm">#{user.id}</td>
                  <td className="px-5 py-5 text-sm font-medium">{user.phone_number}</td>
                  <td className="px-5 py-5 text-sm text-green-600 font-bold">
                    {user.balance.toLocaleString()}đ
                  </td>
                  <td className="px-5 py-5 text-sm">
                    {new Date(user.created_at).toLocaleDateString('vi-VN')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {users.length === 0 && (
            <div className="p-10 text-center text-gray-500">Chưa có "con mồi" nào quét mã cả... 💸</div>
          )}
        </div>
      </div>
    </main>
  );
}