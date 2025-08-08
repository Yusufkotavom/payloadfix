# KOTACOM AGENCY CMS - Panduan Lengkap

## 🎯 Tujuan Utama

CMS ini dirancang untuk menjadi **wadah konten yang fleksibel** yang dapat digunakan untuk:
- **Manajemen konten website** dengan interface yang mudah
- **Multi-platform access** - bisa diakses lokal maupun web dengan database yang sama
- **Real-time content preview** untuk melihat perubahan secara langsung
- **SEO optimization** built-in untuk performa website yang baik

## 🚀 Quick Setup

### 1. Setup Awal
```bash
# Clone repository
git clone <your-repo>
cd payload-cms

# Setup environment
pnpm setup

# Install dependencies
pnpm install

# Start development
pnpm cms:dev
```

### 2. Akses CMS Admin
- Buka: http://localhost:3000/admin
- Buat user admin pertama
- Mulai mengelola konten!

## 📝 Content Management

### Pages (Halaman Website)
**Lokasi**: Admin → Pages

**Fitur**:
- ✅ Flexible layout dengan content blocks
- ✅ Live preview untuk melihat perubahan
- ✅ SEO optimization (meta tags, descriptions)
- ✅ Draft system untuk review sebelum publish
- ✅ URL customization dengan slug

**Cara Membuat Halaman**:
1. Klik "Create New" di halaman Pages
2. Isi title dan slug
3. Tambahkan content blocks sesuai kebutuhan
4. Gunakan live preview untuk melihat hasil
5. Publish atau save sebagai draft

### Posts (Artikel Blog)
**Lokasi**: Admin → Posts

**Fitur**:
- ✅ Rich text editor dengan Lexical
- ✅ Categories dan tags untuk organisasi
- ✅ Featured images
- ✅ SEO optimization
- ✅ Related posts

**Cara Membuat Artikel**:
1. Klik "Create New" di halaman Posts
2. Isi title dan content
3. Pilih categories dan tags
4. Upload featured image
5. Preview dan publish

### Media Management
**Lokasi**: Admin → Media

**Fitur**:
- ✅ Upload berbagai format file (images, videos, documents)
- ✅ Automatic image optimization
- ✅ Folder organization
- ✅ Reusable across content

## 🎨 Content Blocks

### Available Blocks
1. **Hero Block** - Header section dengan gambar dan text
2. **Rich Text Block** - Text content dengan formatting
3. **Media Block** - Gambar, video, atau file
4. **Call-to-Action Block** - Buttons dan links
5. **Form Block** - Contact forms
6. **Archive Block** - List of posts/pages
7. **HTML Block** - Custom HTML code
8. **MDX Block** - Markdown content

### Cara Menggunakan Blocks
1. Pilih "Add Block" saat edit halaman
2. Pilih jenis block yang diinginkan
3. Konfigurasi content sesuai kebutuhan
4. Drag & drop untuk mengatur urutan
5. Preview untuk melihat hasil

## 🔧 Advanced Features

### Live Preview
- **Desktop Preview**: Lihat tampilan desktop
- **Tablet Preview**: Lihat tampilan tablet
- **Mobile Preview**: Lihat tampilan mobile
- **Real-time updates**: Perubahan langsung terlihat

### SEO Tools
- **Meta Title**: Judul halaman di search engine
- **Meta Description**: Deskripsi halaman
- **Open Graph**: Preview di social media
- **Sitemap**: Otomatis generate sitemap.xml

### User Management
- **Admin Users**: Full access ke semua fitur
- **Editor Users**: Bisa edit content tapi tidak bisa manage users
- **Author Users**: Bisa buat content tapi tidak bisa publish

## 🌐 Deployment

### Local Development
```bash
pnpm cms:dev
```

### Production Build
```bash
pnpm cms:build
pnpm cms:start
```

### Vercel Deployment
1. Push ke GitHub
2. Connect ke Vercel
3. Set environment variables
4. Deploy otomatis

## 📊 Database Management

### Local MongoDB
```bash
# Install MongoDB
brew install mongodb-community

# Start MongoDB
brew services start mongodb-community
```

### MongoDB Atlas (Recommended)
1. Buat account di MongoDB Atlas
2. Create cluster baru
3. Get connection string
4. Update DATABASE_URI di environment

### Database Collections
- **pages**: Halaman website
- **posts**: Artikel blog
- **media**: File uploads
- **categories**: Kategori konten
- **tags**: Tags untuk organisasi
- **users**: User management

## 🔍 Troubleshooting

### Common Issues

**1. Database Connection Error**
```bash
# Check MongoDB status
brew services list | grep mongodb

# Restart MongoDB
brew services restart mongodb-community
```

**2. Build Error**
```bash
# Clear cache
rm -rf .next
pnpm cms:build
```

**3. Environment Variables**
```bash
# Check .env file exists
ls -la .env

# Regenerate .env
pnpm setup
```

### Performance Tips
- **Image Optimization**: Gunakan format WebP untuk gambar
- **Content Caching**: Enable caching untuk performa lebih baik
- **Database Indexing**: Index fields yang sering di-query
- **CDN**: Gunakan CDN untuk static assets

## 📚 Best Practices

### Content Management
1. **Use Drafts**: Selalu buat draft sebelum publish
2. **SEO Optimization**: Isi meta descriptions dan titles
3. **Image Optimization**: Compress images sebelum upload
4. **Content Organization**: Gunakan categories dan tags
5. **Regular Backups**: Backup database secara regular

### Development
1. **Version Control**: Commit changes secara regular
2. **Environment Separation**: Pisahkan dev dan production
3. **Testing**: Test fitur baru sebelum deploy
4. **Documentation**: Update dokumentasi saat ada perubahan

## 🆘 Support

### Resources
- [Payload CMS Documentation](https://payloadcms.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [MongoDB Documentation](https://docs.mongodb.com)

### Getting Help
1. Check documentation di atas
2. Review error logs di console
3. Check environment variables
4. Create issue di repository

---

**KOTACOM AGENCY CMS** - Powerful Content Management System untuk website modern! 🚀
