# BabelLib - Screens

> Danh sách tất cả các màn hình trong hệ thống

---

## 📱 Public Pages (Không yêu cầu đăng nhập)

### 1. **Home Page** (`/`)
- Trang chủ hiển thị sách nổi bật, mới nhất
- Search bar và category navigation
- Hero section với featured books
- CTA buttons (Login, Sign Up)

### 2. **Book Detail** (`/book/[id]`)
- Thông tin chi tiết sách (cover, title, author, description)
- Nút Download/Read
- Reviews và ratings
- Related books suggestions

### 3. **Series Detail** (`/series/[id]`)
- Thông tin series
- Danh sách tất cả books trong series
- Author information
- Follow/Subscribe button

### 4. **Author Page** (`/author/[id]`)
- Thông tin tác giả (bio, avatar)
- Danh sách tất cả sách của tác giả
- Statistics (total books, followers)

### 5. **Browse/Search** (`/browse`, `/search`)
- Filter by genre, author, language
- Sort options (newest, popular, rating)
- Grid/List view toggle
- Pagination

---

## 🔐 User Pages (Yêu cầu đăng nhập)

### 6. **Login Page** (`/login`)
- Email/Password form
- Social login options (optional)
- "Forgot password" link
- Link to Register

### 7. **Register Page** (`/register`)
- Sign up form (email, password, name)
- Terms & conditions checkbox
- Link to Login

### 8. **User Profile** (`/profile` hoặc `/user/[id]`)
- Personal information
- Uploaded books list
- Theme preference settings
- Account settings

### 9. **My Library** (`/library`)
- User's collection of books
- Reading progress tracking
- Bookmarks
- Filter by status (reading, completed, want to read)

### 10. **Upload Page** (`/upload`)
- Upload form (file, cover, title, author, series)
- Drag & drop file upload
- Progress indicator
- Metadata input fields

### 11. **Reader** (`/read/[bookId]`)
- Fullscreen reading interface
- Navigation controls (prev/next page)
- Theme/font customization
- Bookmark functionality
- Progress indicator

---

## 👨‍💼 Manager Pages

### 12. **Manager Dashboard** (`/dashboard/manager`)
- Content moderation overview
- Pending reports list
- Quick actions (approve, hide)
- Statistics

### 13. **Report Management** (`/dashboard/manager/reports`)
- List of all reports
- Filter by status (pending, approved, rejected)
- Report details modal
- Moderation actions

### 14. **Ticket Management** (`/dashboard/manager/tickets`)
- List of user tickets/appeals
- Filter by status (open, in review, closed)
- Communication thread
- Approve/Reject actions

---

## 👨‍💻 Admin Pages

### 15. **Admin Dashboard** (`/dashboard/admin`)
- System overview
- User statistics
- Content statistics
- Recent activities

### 16. **User Management** (`/dashboard/admin/users`)
- List all users
- Edit user roles (User, Manager, Admin)
- Ban/Unban users
- User details view

### 17. **Content Management** (`/dashboard/admin/content`)
- Manage all books
- Bulk actions (delete, hide, approve)
- Edit book metadata
- Author management

### 18. **System Settings** (`/dashboard/admin/settings`)
- General settings
- Storage configuration (R2)
- Email settings
- Security settings

---

## 🔔 Utility Pages

### 19. **Notifications** (`/notifications`)
- User notifications feed
- Report status updates
- Ticket responses
- System announcements

### 20. **Settings** (`/settings`)
- Account settings
- Privacy settings
- Theme preferences
- Notification preferences

### 21. **404 Error Page** (`/404`)
- Custom not found page
- Navigation links back to home

### 22. **403 Forbidden** (`/403`)
- Access denied page
- Role-based message

---

**Navigation Structure:**
- Header: Logo, Search, Theme Switcher, User Menu
- Footer: About, Terms, Privacy, Contact
- Sidebar (Dashboard): Navigation for Admin/Manager sections
