# BabelLib - Roadmap

> Lộ trình phát triển nền tảng quản lý và đọc sách chuyên nghiệp

---

## Giai đoạn 1: Nền tảng ✅

- [x] **1.1** Khởi tạo dự án Next.js (App Router)
- [x] **1.2** Cấu hình Prisma 7 + MySQL (babeldb)
- [x] **1.3** Thiết kế Schema (User, Book, Author, Series, Report, Ticket)
- [x] **1.4** Tạo Prisma Client Singleton (lib/prisma.ts)

---

## Giai đoạn 2: Hệ thống Theme & Layout 🚧

- [x] **2.1** Cài đặt và cấu hình next-themes
- [x] **2.2** Tạo ThemeProvider component
- [x] **2.3** Định nghĩa 4 theme: Light, Dark, Sepia, Midnight
- [x] **2.4** Cập nhật globals.css với CSS Variables
- [x] **2.5** Tạo ThemeSwitcher component
- [x] **2.6** Thiết kế Layout chính (Header, Navigation, Footer)
- [x] **2.7** Responsive Design cho mobile/tablet

---

## Giai đoạn 3: Xác thực & Phân quyền

- [ ] **3.1** Cài đặt NextAuth.js (v5/Auth.js)
- [ ] **3.2** Tạo API routes cho authentication
- [ ] **3.3** Xây dựng Login/Register UI
- [ ] **3.4** Implement RBAC (Admin, Manager, User)
- [ ] **3.5** Protected routes & middleware
- [ ] **3.6** Session management

---

## Giai đoạn 4: Kho lưu trữ R2 & Upload

- [ ] **4.1** Cấu hình Cloudflare R2 SDK
- [ ] **4.2** Tạo API upload file (PDF/EPUB)
- [ ] **4.3** Generate presigned URLs
- [ ] **4.4** Upload UI với progress bar
- [ ] **4.5** Xử lý metadata (cover, file type)
- [ ] **4.6** Validation & security

---

## Giai đoạn 5: Trình đọc sách

- [ ] **5.1** Tích hợp Epub.js cho file EPUB
- [ ] **5.2** Tích hợp PDF.js cho file PDF
- [ ] **5.3** Reader UI (fullscreen, navigation)
- [ ] **5.4** Bookmark & reading progress
- [ ] **5.5** Theme support trong reader
- [ ] **5.6** Font customization

---

## Giai đoạn 6: Trang cá nhân & Tương tác

- [ ] **6.1** User Profile page
- [ ] **6.2** Library/Collection management
- [ ] **6.3** Author page
- [ ] **6.4** Series detail page
- [ ] **6.5** Search & filter
- [ ] **6.6** Comments & ratings (optional)

---

## Giai đoạn 7: Hệ thống quản trị

- [ ] **7.1** Admin Dashboard (Overview)
- [ ] **7.2** Manager Dashboard (Content moderation)
- [ ] **7.3** Report management system
- [ ] **7.4** Ticket system (User appeals)
- [ ] **7.5** Content moderation tools
- [ ] **7.6** Analytics & statistics

---

## Giai đoạn 8: Hoàn thiện & Deployment

- [ ] **8.1** Testing (Unit, Integration, E2E)
- [ ] **8.2** Performance optimization
- [ ] **8.3** SEO optimization
- [ ] **8.4** Docker setup
- [ ] **8.5** CI/CD pipeline
- [ ] **8.6** Production deployment

---

**Ghi chú:**
- ✅ = Hoàn thành
- 🚧 = Đang thực hiện
- Ưu tiên: Hoàn thành từng giai đoạn trước khi chuyển sang giai đoạn tiếp theo
