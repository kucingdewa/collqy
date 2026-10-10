# Collqy — Landing Page

Landing page untuk **Collqy**, forum diskusi ilmiah antar mahasiswa dalam satu universitas:
penjelasan kenapa Collqy dibuat (privasi & anonimitas), daftar fitur, alur kerja (workflow),
dan kartu contributor, ditutup dengan footer.

Dibangun dengan **Vite + React + TypeScript + React Compiler + React Bootstrap**.
Palet: `#4B638E`, `#1e3c72`, dan putih.

## Teknologi

- Vite 8 + TanStack Start (React 19, SSR/SSG)
- TypeScript, React Compiler (`babel-plugin-react-compiler`)
- React Bootstrap (modal login, kontrol interaktif)
- Tailwind CSS v4 (diaktifkan lewat `src/styles.css`)

## Struktur penting

```
src/
  routes/
    __root.tsx   layout root + <Toaster /> + <head> metadata
    index.tsx    seluruh isi landing page
  components/    komponen UI (shadcn) — tidak wajib dipakai
  assets/        foto profil contributor
  styles.css     token warna & gaya global
vite.config.ts   konfigurasi Vite (React Compiler + TanStack Start)
```

## Menjalankan di mesin sendiri

```sh
npm install        # atau: bun install
npm run dev        # http://localhost:5173 (atau port yang ditampilkan)
```

## Build & deploy

```sh
npm run build      # hasil build masuk ke folder output
npm run preview    # cek hasil build secara lokal
```

Hasil build di-serve oleh Nitro dengan target Cloudflare secara default
(karena itu `vite.config.ts` memakai `@lovable.dev/vite-tanstack-config`).
Untuk deploy:

- **Cloudflare Pages / Workers** — upload hasil build, atau sambungkan repo GitHub dan
  pilih framework preset "TanStack Start".
- **Vercel / Netlify** — build command `npm run build`, output diarahkan ke folder
  hasil build (mis. `dist/client` untuk bagian statis).
- **VPS sendiri** — jalankan `npm run build` lalu `npm run preview`, atau deploy
  folder output ke server Node/Cloudflare yang sesuai.

> Catatan: `npm install` memakai `bun.lock` sebagai acuan versi. Kalau kamu ingin
> memastikan versi identik dengan yang dipakai di Lovable, jalankan `bun install`.

## Catatan login

Tombol di navbar dan CTA membuka **modal login React Bootstrap**. Modal ini masih
tampilan saja — belum terhubung ke sistem akun. Kalau nanti mau login sungguhan,
tinggal tambahkan backend (mis. Lovable Cloud / Supabase) dan sambungkan dari
`src/routes/index.tsx`.

## Perintah lain

```sh
npm run lint      # ESLint
npm run format    # Prettier
npm run test      # Vitest
```
