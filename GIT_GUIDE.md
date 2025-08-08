# Git Guide - KOTACOM AGENCY CMS

## 🚀 Panduan Lengkap Git untuk CMS Project

### 📋 Daftar Isi
1. [Setup Git Repository](#setup-git-repository)
2. [Cek Status Git](#cek-status-git)
3. [Upload ke Git](#upload-ke-git)
4. [Workflow Harian](#workflow-harian)
5. [Troubleshooting](#troubleshooting)

---

## 🔧 Setup Git Repository

### 1. Inisialisasi Git (jika belum)
```bash
# Cek apakah sudah ada Git repository
git status

# Jika belum ada, inisialisasi
git init

# Tambahkan remote repository (ganti dengan URL repo Anda)
git remote add origin https://github.com/username/kotacom-cms.git
```

### 2. Setup Git Config
```bash
# Set username dan email
git config user.name "Your Name"
git config user.email "your.email@example.com"

# Cek konfigurasi
git config --list
```

---

## 🔍 Cek Status Git

### 1. Status Dasar
```bash
# Cek status repository
git status


# Output akan menunjukkan:
# - Files yang modified
# - Files yang untracked
# - Files yang staged
```

### 2. Cek Perubahan Detail
```bash
# Lihat perubahan di file tertentu
git diff

# Lihat perubahan yang sudah staged
git diff --staged

# Lihat history commits
git log --oneline

# Lihat branch yang ada
git branch -a
```

### 3. Cek Remote Repository
```bash
# Lihat remote repositories
git remote -v

# Cek status remote
git remote show origin
```

---

## 📤 Upload ke Git

### 1. Workflow Upload Dasar

```bash
# 1. Cek status terlebih dahulu
git status

# 2. Tambahkan semua file yang berubah
git add .

# Atau tambahkan file tertentu
git add src/payload.config.ts
git add README.md

# 3. Commit perubahan
git commit -m "feat: update CMS configuration and documentation"

# 4. Push ke remote repository
git push origin main
```

### 2. Workflow untuk Feature Baru

```bash
# 1. Buat branch baru
git checkout -b feature/cms-enhancement

# 2. Lakukan perubahan
# ... edit files ...

# 3. Cek status
git status

# 4. Add dan commit
git add .
git commit -m "feat: add new CMS features"

# 5. Push branch baru
git push origin feature/cms-enhancement

# 6. Merge ke main (di GitHub atau local)
git checkout main
git merge feature/cms-enhancement
git push origin main
```

### 3. Commit Message Convention

```bash
# Format commit message yang baik
git commit -m "type: description"

# Contoh:
git commit -m "feat: add CMS setup script"
git commit -m "fix: resolve MongoDB connection issues"
git commit -m "docs: update CMS documentation"
git commit -m "style: format code according to standards"
git commit -m "refactor: improve database connection handling"
```

**Type yang umum digunakan:**
- `feat`: Fitur baru
- `fix`: Bug fix
- `docs`: Dokumentasi
- `style`: Formatting, missing semicolons, etc
- `refactor`: Refactoring code
- `test`: Adding tests
- `chore`: Maintenance tasks

---

## 🔄 Workflow Harian

### 1. Sebelum Mulai Kerja
```bash
# Pull perubahan terbaru
git pull origin main

# Cek status
git status
```

### 2. Saat Bekerja
```bash
# Cek perubahan secara berkala
git status
git diff

# Add perubahan secara bertahap
git add src/components/NewComponent.tsx
git commit -m "feat: add new component"
```

### 3. Setelah Selesai Kerja
```bash
# Add semua perubahan
git add .

# Commit dengan message yang jelas
git commit -m "feat: implement CMS content management features"

# Push ke repository
git push origin main
```

---

## 🛠️ Perintah Git Penting

### 1. Branch Management
```bash
# Lihat semua branch
git branch -a

# Buat branch baru
git checkout -b feature/new-feature

# Pindah ke branch lain
git checkout main

# Hapus branch (setelah merge)
git branch -d feature/old-feature
```

### 2. Stash (Simpan Perubahan Sementara)
```bash
# Simpan perubahan sementara
git stash

# Lihat stash yang ada
git stash list

# Terapkan stash terbaru
git stash pop

# Terapkan stash tertentu
git stash apply stash@{0}
```

### 3. Reset dan Revert
```bash
# Reset file ke commit terakhir
git reset --hard HEAD

# Reset file tertentu
git checkout -- src/file.ts

# Revert commit tertentu
git revert <commit-hash>
```

---

## 🔍 Troubleshooting

### 1. Merge Conflicts
```bash
# Jika ada conflict saat pull
git pull origin main

# Edit file yang conflict
# ... resolve conflicts ...

# Add file yang sudah di-resolve
git add .

# Commit
git commit -m "fix: resolve merge conflicts"
```

### 2. Undo Last Commit
```bash
# Undo commit terakhir (tetap simpan perubahan)
git reset --soft HEAD~1

# Undo commit terakhir (hapus perubahan)
git reset --hard HEAD~1
```

### 3. Force Push (Hati-hati!)
```bash
# Hanya gunakan jika benar-benar perlu
git push --force origin main
```

### 4. Cek File yang Di-ignore
```bash
# Lihat file yang di-ignore
git status --ignored

# Cek .gitignore
cat .gitignore
```

---

## 📋 Checklist Upload

### Sebelum Upload
- [ ] `git status` - cek status repository
- [ ] `git diff` - review perubahan
- [ ] Test aplikasi berjalan dengan baik
- [ ] Cek tidak ada file sensitif yang ter-commit

### Saat Upload
- [ ] `git add .` - add semua perubahan
- [ ] `git commit -m "message"` - commit dengan message yang jelas
- [ ] `git push origin main` - push ke repository

### Setelah Upload
- [ ] Cek di GitHub/GitLab bahwa perubahan sudah ter-upload
- [ ] Cek deployment otomatis (jika ada)
- [ ] Test aplikasi di production

---

## 🎯 Best Practices

### 1. Commit Message
```bash
# ✅ Baik
git commit -m "feat: add CMS setup script for easy installation"

# ❌ Buruk
git commit -m "update"
git commit -m "fix"
```

### 2. Branch Naming
```bash
# ✅ Baik
feature/cms-enhancement
fix/mongodb-connection
docs/update-readme

# ❌ Buruk
new-feature
fix
update
```

### 3. Regular Commits
```bash
# Commit secara regular, jangan menumpuk perubahan
git add .
git commit -m "feat: add user authentication"
git push origin main
```

### 4. Pull Before Push
```bash
# Selalu pull sebelum push
git pull origin main
git push origin main
```

---

## 🚀 Quick Commands

### Setup Awal
```bash
git init
git remote add origin <repository-url>
git add .
git commit -m "initial commit: KOTACOM AGENCY CMS"
git push origin main
```

### Workflow Harian
```bash
git pull origin main
# ... kerja ...
git add .
git commit -m "feat: description"
git push origin main
```

### Cek Status
```bash
git status
git log --oneline -5
git branch -a
```

---

**💡 Tips:** Selalu commit dan push secara regular untuk menghindari kehilangan kode dan memudahkan collaboration dengan tim! 🚀
