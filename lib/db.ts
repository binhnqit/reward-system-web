// admin-reward-web/lib/db.ts
import { neon } from '@neondatabase/serverless';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL chưa được khai báo trong .env.local');
}

export const sql = neon(process.env.DATABASE_URL);