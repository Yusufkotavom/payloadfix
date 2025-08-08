# 🚀 Quick Git Guide - KOTACOM AGENCY CMS

## 📋 Panduan Cepat Git Workflow

### 🔍 **Cek Status Git**

```bash
# Cek status repository
git status

# Lihat perubahan detail
git diff

# Lihat commits terakhir
git log --oneline -5
```

### 📤 **Upload ke Git (Workflow Lengkap)**

```bash
# 1. Cek status terlebih dahulu
git status

# 2. Tambahkan semua perubahan
git add .

# 3. Commit dengan message yang jelas
git commit -m "feat: update CMS configuration and documentation"

# 4. Push ke repository
git push origin main
```

### ⚡ **Quick Commands**

```bash
# Setup awal (jika belum ada repository)
git init
git remote add origin https://github.com/username/kotacom-cms.git
git add .
git commit -m "initial commit: KOTACOM AGENCY CMS"
git push -u origin main

# Workflow harian
git pull origin main
# ... kerja ...
git add .
git commit -m "feat: description"
git push origin main

# Cek status cepat
git status
git log --oneline -3
```

### 🛠️ **Menggunakan Git Helper Script**

```bash
# Jalankan Git Helper
pnpm git:helper

# Atau langsung
./scripts/git-helper.sh
```

**Fitur Git Helper:**
- ✅ Menu interaktif
- ✅ Cek status otomatis
- ✅ Add & commit dengan prompt
- ✅ Push dengan konfirmasi
- ✅ Full workflow (add + commit + push)
- ✅ Setup repository baru

### 📝 **Commit Message Convention**

```bash
# Format yang baik
git commit -m "type: description"

# Contoh:
git commit -m "feat: add CMS setup script"
git commit -m "fix: resolve MongoDB connection issues"
git commit -m "docs: update CMS documentation"
git commit -m "style: format code"
git commit -m "refactor: improve database handling"
```

**Type yang umum:**
- `feat`: Fitur baru
- `fix`: Bug fix
- `docs`: Dokumentasi
- `style`: Formatting
- `refactor`: Refactoring
- `test`: Tests
- `chore`: Maintenance

### 🔄 **Branch Management**

```bash
# Lihat semua branch
git branch -a

# Buat branch baru
git checkout -b feature/new-feature

# Pindah ke branch lain
git checkout main

# Merge branch
git merge feature/new-feature
```

### 💾 **Stash (Simpan Sementara)**

```bash
# Simpan perubahan sementara
git stash

# Lihat stash
git stash list

# Terapkan stash
git stash pop
```

### 🔧 **Troubleshooting**

```bash
# Undo commit terakhir (simpan perubahan)
git reset --soft HEAD~1

# Undo commit terakhir (hapus perubahan)
git reset --hard HEAD~1

# Cek remote repository
git remote -v

# Force push (hati-hati!)
git push --force origin main
```

### 📋 **Checklist Upload**

#### Sebelum Upload:
- [ ] `git status` - cek status
- [ ] `git diff` - review perubahan
- [ ] Test aplikasi berjalan
- [ ] Cek tidak ada file sensitif

#### Saat Upload:
- [ ] `git add .` - add perubahan
- [ ] `git commit -m "message"` - commit
- [ ] `git push origin main` - push

#### Setelah Upload:
- [ ] Cek di GitHub/GitLab
- [ ] Cek deployment otomatis
- [ ] Test aplikasi production

### 🎯 **Best Practices**

1. **Commit Regular**: Jangan menumpuk perubahan
2. **Message Jelas**: Gunakan format yang konsisten
3. **Pull Sebelum Push**: Selalu pull dulu
4. **Test Sebelum Push**: Pastikan aplikasi berjalan
5. **Backup Regular**: Commit dan push secara berkala

### 🚀 **Quick Start Commands**

```bash
# Setup project baru
git init
git remote add origin <repository-url>
git add .
git commit -m "initial commit: KOTACOM AGENCY CMS"
git push -u origin main

# Workflow harian
git pull origin main
# ... kerja ...
git add .
git commit -m "feat: update CMS"
git push origin main

# Cek status
git status
git log --oneline -5
```

---

**💡 Tips:** Gunakan Git Helper script untuk workflow yang lebih mudah! Jalankan `pnpm git:helper` untuk menu interaktif. 🚀
