# Portofolio — Struktur Proyek VS Code

## Struktur folder
```
portofolio-vscode/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
```

## Cara menjalankan
1. Extract folder ini, lalu buka lewat VS Code (`File > Open Folder`).
2. Install extension **Live Server** (oleh Ritwick Dey) kalau belum ada.
3. Klik kanan pada `index.html`, pilih **Open with Live Server**.
4. Browser otomatis kebuka dan halaman akan reload sendiri tiap ada perubahan file.

Alternatif tanpa extension: tinggal klik dua kali `index.html`, langsung kebuka di browser. Bedanya cuma gak ada auto-reload aja.

## Yang perlu diganti manual
- Nama, email, dan link sosial media di section Contact — masih placeholder.
- Link `onclick="window.open('#','_blank')"` di tiap kartu Portfolio — arahkan ke GitHub repo atau demo project masing-masing.
- Form Contact sekarang cuma simulasi (`alert()`). Untuk kirim email beneran, bisa dihubungkan ke Formspree, EmailJS, atau backend sendiri.

## Struktur kode
- `css/style.css` — semua styling, termasuk custom property warna di bagian `:root`.
- `js/script.js` — logic untuk nav aktif saat scroll, animasi reveal, toggle menu mobile, dan handler form.
