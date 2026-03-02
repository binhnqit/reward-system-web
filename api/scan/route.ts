import { sql } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { phoneNumber, qrCode } = await req.json();

    if (!phoneNumber || !qrCode) {
      return NextResponse.json({ error: 'Thiếu thông tin!' }, { status: 400 });
    }

    // 1. Kiểm tra mã QR đã quét chưa
    const existing = await sql`SELECT id FROM scan_history WHERE qr_code = ${qrCode}`;
    if (existing.length > 0) {
      return NextResponse.json({ error: 'Mã này đã quét rồi!' }, { status: 400 });
    }

    // 2. Cập nhật ví hoặc tạo user mới (Sử dụng Transaction nếu có thể)
    // Ở đây dùng upsert để đảm bảo tính duy nhất của số điện thoại
    await sql`
      INSERT INTO profiles (phone_number, balance)
      VALUES (${phoneNumber}, 10000)
      ON CONFLICT (phone_number) 
      DO UPDATE SET balance = profiles.balance + 10000
    `;

    // 3. Lưu lịch sử quét
    await sql`
      INSERT INTO scan_history (user_id, qr_code) 
      SELECT id, ${qrCode} FROM profiles WHERE phone_number = ${phoneNumber}
    `;

    return NextResponse.json({ success: true, message: 'Nhận thưởng thành công!' });

  } catch (err: any) {
    console.error('Scan Error:', err);
    return NextResponse.json(
      { error: 'Lỗi hệ thống', details: err.message }, 
      { status: 500 }
    );
  }
}
