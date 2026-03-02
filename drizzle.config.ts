import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './db/schema.ts', // Đường dẫn tới file định nghĩa bảng của bạn
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!, // Biến môi trường chứa link Neon DB
  },
});
