# Post Preview Guide

## Overview

Post preview telah diperbarui dengan tampilan yang lebih simple dan sederhana, menampilkan semua informasi penting dalam layout yang minimalis dan mudah dibaca.

## Fitur Utama

### 1. Simple Post Preview (`SimplePostPreview`)
- **Layout**: List view yang rapi dan terorganisir
- **Informasi yang ditampilkan**:
  - Judul post
  - Deskripsi (jika ada)
  - Kategori
  - Tanggal publikasi
  - Link "Read More"

### 2. Simple Post Detail (`SimplePostDetail`)
- **Layout**: Card layout dengan header dan content yang jelas
- **Informasi yang ditampilkan**:
  - Judul post
  - Deskripsi
  - Tanggal publikasi dan update
  - Kategori
  - Author (jika ada)
  - Content lengkap dengan RichText
  - Navigation back to posts

## Penggunaan

### Menggunakan Simple Layout

Untuk menggunakan tampilan simple, tambahkan environment variable:

```bash
# .env
USE_SIMPLE_POST_LAYOUT=true
```

### Default Layout

Tanpa environment variable, akan menggunakan layout default dengan:
- PostHero component
- RelatedPosts (jika ada)
- Layout yang lebih kompleks

## Komponen yang Diperbarui

### 1. `src/components/SimplePostPreview.tsx`
- Layout list yang simple
- Menampilkan semua informasi penting
- Responsive design
- Hover effects yang subtle

### 2. `src/components/SimplePostDetail.tsx`
- Card layout yang clean
- Header dengan meta information
- Content area yang luas
- Navigation yang jelas

### 3. `src/app/(frontend)/posts/page.tsx`
- Updated untuk mengambil `publishedAt` dan `updatedAt`
- Menggunakan SimplePostPreview component

### 4. `src/app/(frontend)/posts/[slug]/page.tsx`
- Support untuk simple layout via environment variable
- Fallback ke layout default jika diperlukan

## Keunggulan Simple Layout

1. **Clean & Minimalist**: Tampilan yang bersih dan tidak berlebihan
2. **Fokus pada Content**: Semua informasi penting ditampilkan dengan jelas
3. **Responsive**: Bekerja dengan baik di semua device
4. **Fast Loading**: Layout yang ringan dan cepat
5. **Easy to Read**: Typography dan spacing yang optimal

## Customization

### Mengubah Warna
Edit class Tailwind di component:
```tsx
// Contoh mengubah warna primary
className="text-blue-600" // Ganti dengan warna yang diinginkan
```

### Mengubah Layout
Edit struktur JSX di component untuk mengubah layout sesuai kebutuhan.

### Menambah Informasi
Tambahkan field baru di interface dan tampilkan di component:
```tsx
interface Post {
  // ... existing fields
  newField?: string
}
```

## Best Practices

1. **Gunakan Simple Layout untuk CMS**: Lebih cocok untuk content management
2. **Test Responsiveness**: Pastikan tampilan bagus di mobile
3. **Optimize Images**: Gunakan lazy loading untuk gambar
4. **Accessibility**: Pastikan kontras warna dan keyboard navigation

## Troubleshooting

### Post tidak muncul
- Cek apakah post sudah published
- Cek database connection
- Cek environment variables

### Layout tidak berubah
- Pastikan environment variable `USE_SIMPLE_POST_LAYOUT=true` sudah diset
- Restart development server
- Clear cache browser

### Styling issues
- Cek Tailwind CSS sudah terinstall
- Cek custom CSS tidak konflik
- Cek responsive breakpoints
