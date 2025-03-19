# My App Express

## Giới thiệu

Đây là một ứng dụng Express đơn giản.

## Yêu cầu

- Node.js
- npm (hoặc yarn)
- MySQL

## Cài đặt

1. Clone repository về máy của bạn:
    ```sh
    git clone https://github.com/phamquach/My-App-Express-.git
    cd My-App-Express-
    ```

2. Cài đặt các dependencies:
    ```sh
    npm install
    ```

3. Tạo file `.env` trong thư mục gốc của dự án và cấu hình các biến môi trường cần thiết (ví dụ: thông tin kết nối database).

4. Chạy các migrations để tạo bảng trong database:
    ```sh
    npm run table
    ```

5. Chạy các seeders để thêm dữ liệu mẫu vào database:
    ```sh
    npm run seeders
    ```

## Chạy ứng dụng

1. Khởi động server:
    ```sh
    npm start
    ```

2. Mở trình duyệt và truy cập `http://localhost:3000` để xem ứng dụng.

## Scripts

- `npm start`: Khởi động server với `nodemon`.
- `npm run table`: Chạy các migrations để tạo bảng trong database.
- `npm run seeders`: Chạy các seeders để thêm dữ liệu mẫu vào database.

## Tác giả

Pham Quach

## Giấy phép

ISC
