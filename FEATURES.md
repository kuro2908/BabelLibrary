# BabelLib - Features

> Danh sách tất cả chức năng hệ thống với trạng thái theo dõi

---

## 📚 Core Reading Features

- [x] Theme System (Light, Dark, Sepia, Coffee)
- [ ] Book Reader
  - [ ] EPUB.js integration for EPUB files
  - [ ] PDF.js integration for PDF files
  - [ ] Fullscreen reading mode
  - [ ] Page navigation (prev/next)
  - [ ] Chapter/TOC navigation
  - [ ] Font size adjustment
  - [ ] Font family selection
  - [ ] Line height control
  - [ ] Theme switching in reader
- [ ] Reading Progress
  - [ ] Auto-save current page/position
  - [ ] Progress percentage display
  - [ ] Resume reading from last position
  - [ ] Bookmark pages
  - [ ] Multiple bookmarks per book
  - [ ] Bookmark notes
- [ ] Library Management
  - [ ] Add books to personal library
  - [ ] Remove from library
  - [ ] Mark as "Reading", "Completed", "Want to Read"
  - [ ] Sort library (date added, title, author)
  - [ ] Filter library by status

---

## 🔍 Discovery & Search

- [x] Homepage
  - [x] Featured books carousel
  - [x] New releases section
  - [x] Popular books section
  - [ ] Recommended books (based on user)
- [ ] Search
  - [ ] Full-text search by title
  - [ ] Search by author
  - [ ] Search by series
  - [ ] Advanced filters (genre, language, year)
- [ ] Browse
  - [ ] Browse by category/genre
  - [ ] Browse by author
  - [ ] Browse by series
  - [ ] Sort options (newest, popular, rating, alphabetical)
  - [ ] Pagination
  - [ ] Grid/List view toggle

---

## 📤 Content Management System (CMS)

- [ ] Upload System
  - [ ] Upload PDF files
  - [ ] Upload EPUB files
  - [ ] Upload cover image
  - [ ] Drag & drop file upload
  - [ ] File validation (size, type)
  - [ ] Upload progress indicator
  - [ ] Multiple file upload (batch)
- [ ] Book Metadata
  - [ ] Title input
  - [ ] Description/Summary
  - [ ] Author selection/creation
  - [ ] Series selection/creation
  - [ ] Genre/Category tags
  - [ ] Language selection
  - [ ] Publication year
  - [ ] ISBN (optional)
- [ ] Content Status
  - [ ] PUBLIC (visible to all)
  - [ ] HIDDEN_BY_USER (uploader hides)
  - [ ] HIDDEN_BY_STAFF (moderation hide)
  - [ ] Status change tracking
- [ ] Edit/Update
  - [ ] Edit book metadata
  - [ ] Update cover image
  - [ ] Replace file (new version)
  - [ ] Delete book (soft or hard delete)

---

## 👤 User Management & Authentication

- [ ] Authentication
  - [ ] Email/Password registration
  - [ ] Email/Password login
  - [ ] Password reset/recovery
  - [ ] Email verification
  - [ ] Session management
  - [ ] Remember me option
  - [ ] Logout
- [ ] User Profile
  - [ ] View own profile
  - [ ] Edit profile (name, bio, avatar)
  - [ ] Change password
  - [ ] Theme preference
  - [ ] View uploaded books
  - [ ] View reading history
- [ ] Public Profile
  - [ ] View other users' profiles
  - [ ] View their uploaded books
  - [ ] User statistics (total uploads, joined date)

---

## 🛡️ Role-Based Access Control (RBAC)

- [ ] User Role System
  - [x] Database schema for roles (USER, MANAGER, ADMIN)
  - [ ] Role assignment/change (Admin only)
  - [ ] Permission checking middleware
  - [ ] Protected routes
- [ ] USER Role
  - [ ] Upload books
  - [ ] Manage own books
  - [ ] Read all public books
  - [ ] Submit reports
  - [ ] Create tickets
- [ ] MANAGER Role
  - [ ] All USER permissions
  - [ ] View all reports
  - [ ] Approve/Reject reports
  - [ ] Hide inappropriate content (HIDDEN_BY_STAFF)
  - [ ] View and respond to tickets
  - [ ] Moderate comments (if implemented)
- [ ] ADMIN Role
  - [ ] All MANAGER permissions
  - [ ] User management (ban, role change)
  - [ ] Global content management
  - [ ] System settings
  - [ ] View analytics/statistics
  - [ ] Bulk operations

---

## 🚨 Moderation & Reporting

- [ ] Report System
  - [ ] Report a book
  - [ ] Report reason/description
  - [ ] Report status (PENDING, REVIEWED, RESOLVED)
  - [ ] Email notification to uploader
  - [ ] Email notification to reporter
  - [ ] Report history/logs
- [ ] Ticket System
  - [ ] Create ticket (appeal for HIDDEN_BY_STAFF)
  - [ ] Ticket message/description
  - [ ] Ticket status (OPEN, APPROVED, REJECTED)
  - [ ] Manager can view all tickets
  - [ ] Manager can respond to tickets
  - [ ] Assign ticket to specific manager (handlerId)
  - [ ] Email notification on status change
  - [ ] Ticket conversation thread
- [ ] Moderation Actions
  - [ ] Hide book (change status to HIDDEN_BY_STAFF)
  - [ ] Unhide book (restore to PUBLIC)
  - [ ] Delete book permanently
  - [ ] Ban user
  - [ ] Unban user
  - [ ] Action audit log

---

## 💾 Storage & Infrastructure

- [ ] Cloudflare R2 Integration
  - [ ] R2 bucket configuration
  - [ ] Upload to R2
  - [ ] Generate presigned URLs for downloads
  - [ ] File deletion from R2
  - [ ] File metadata storage (r2Key in database)
- [ ] Database
  - [x] Prisma schema defined
  - [x] Prisma Client generated
  - [ ] Database migrations
  - [ ] Seed data for development
  - [ ] Backup strategy

---

## 🎨 UI/UX Features

- [x] Theme Switching
  - [x] Light theme
  - [x] Dark theme
  - [x] Sepia theme
  - [x] Coffee theme
  - [x] Smooth transitions
  - [x] Persistent theme preference
- [x] Responsive Design
  - [x] Mobile-friendly layouts
  - [x] Tablet optimization
  - [x] Desktop optimization
  - [x] Touch-friendly controls
- [ ] Accessibility
  - [ ] Keyboard navigation
  - [ ] Screen reader support
  - [ ] ARIA labels
  - [ ] High contrast support
- [ ] Components
  - [x] ThemeProvider
  - [x] ThemeSwitcher
  - [x] Header/Navigation
  - [ ] Footer
  - [ ] Book Card
  - [ ] Search Bar
  - [ ] Modal dialogs
  - [ ] Toast notifications
  - [ ] Loading states
  - [ ] Error states

---

## 📊 Analytics & Statistics (Optional)

- [ ] User Analytics
  - [ ] Most read books
  - [ ] Reading time tracking
  - [ ] User engagement metrics
- [ ] Content Analytics
  - [ ] Total books count
  - [ ] Total downloads
  - [ ] Popular authors
  - [ ] Popular series
- [ ] Admin Dashboard Stats
  - [ ] New users per month
  - [ ] New uploads per month
  - [ ] Reports overview
  - [ ] Tickets overview

---

## 🔔 Notifications (Future)

- [ ] In-app notifications
- [ ] Email notifications
  - [ ] Welcome email
  - [ ] Report status update
  - [ ] Ticket response
  - [ ] Book moderation notice
- [ ] Push notifications (optional)

---

## 🚀 Performance & Optimization

- [ ] Image optimization
  - [ ] Next.js Image component
  - [ ] Lazy loading
  - [ ] Cover image compression
- [ ] Code splitting
- [ ] Server-side rendering (SSR)
- [ ] Static site generation (SSG) where applicable
- [ ] API route optimization
- [ ] Database query optimization
- [ ] Caching strategy

---

**Tracking Legend:**
- [x] = Completed
- [ ] = Not started / In progress
