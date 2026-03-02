# Sử dụng Node làm nền tảng
FROM node:20-alpine

WORKDIR /app

# Cài đặt các công cụ cần thiết cho Expo
RUN npm install -g expo-cli serve

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

# Build ứng dụng sang dạng Web tĩnh (vì Cloud chỉ chạy được bản Web)
RUN npx expo export --platform web

# Mở cổng 8080 (Cổng mặc định của Google Cloud)
EXPOSE 8080

# Chạy server để phục vụ file tĩnh
CMD ["serve", "-s", "dist", "-l", "8080"]
