# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

### Other setup steps

- To set up ESLint for linting, run `npx expo lint`, or follow our guide on ["Using ESLint and Prettier"](https://docs.expo.dev/guides/using-eslint/)
- If you'd like to set up unit testing, follow our guide on ["Unit Testing with Jest"](https://docs.expo.dev/develop/unit-testing/)
- Learn more about the TypeScript setup in this template in our guide on ["Using TypeScript"](https://docs.expo.dev/guides/typescript/)

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

1. Penjelasan Konsep: di README, 300–500 kata. Jelaskan cara kerja React Native, minimal 3 keunggulannya untuk aplikasi hybrid, serta komponen, props, state, dan navigasi dengan contoh kode sendiri. 
React Native adalah program, aplikasi, metode atau teknik iOS tingkat lanjut yang digunakan oleh developer dan programmer pemula dan menengah untuk belajar membangun atau membuat project awal-awal atau aplikasi demo pertama mereka dengan bantuan documen-documen yang ada sebagai tutorial dan langkah-langkah pembelajaran.
Keunggulannya untuk app hybrid :
- Satu basis kode untuk dua platform (Code Reusability); dalam hal efisiensi waktu pengembang atau pengelola cukup menulis kode satu kali menggunakan javascript atau React untuk menghasilkan aplikasi di Android sekaligus iOS, sehingga 90% penggunaan ulang sebagian besar logika dan komponen kode dapat di pakai bersamaan di kedua platform tanpa harus membuat tim merasa atau bekerja secara terpisah.
- Performa Mendekati Asli (Near - Native Performance); Rendering komponen asli di mana berbeda dari aplikasi hybrid tradisional yang mengandalkan webview berbasis HTML atau CSS, React Native merender antarmuka pengguna (UI) menggunakan komponen asli bawaan masing-masing platform (native UI components), dan lebih responsif sehingga hasilnya memberikan animasi dan pengalaman pengguna (User Experience / UX) yang jauh lebih lancar dan cepat diibandingkan hybrid konvensional.
- Fitur Hot Reloading; Uji coba instan yang memungkinkan pengembang atau pengelola untuk melihat perubahan kode secara real-time pada aplikasi yang sedang berjalan tanpa perlu melakukan proses compile ulang dari awal, dan mempercepat debugging proses perbaikan dan iterasi tampilan menjadi jauh lebih cepat. 
- Ekosistem dan Komunitas yang Besar; Pustaka pihak ketiga yng didukung oleh komunitas global yang sangat aktif serta ketersediaan plugin dan library yang berlimpah atau melimpah dari Meta (Facebook) maupun pihak ketiga, dan kemudahan mencari solusi yaitu masalah atau bug lebih mudah dipecahkan karena banyaknya dokumentasi serta tutorial di internet. 
Komponen di dalamnya meliputi UI, tiga jenis animated-icon, dua app-tabs, external-link, hint-row, themed-text, themed-view, web-badge. Komponen di luar itu meliputi (.claude), (.expo), (.vscode), android, assets, dist, example, node_modules, src, dan lain sebagainya. 
Cara menavigasikannya lumayan rumit pertama buka vscode dan pilih folder react native yang sudah di download dan di copy, jika belum di download download dulu lalu copy paste foldernya biar yang pertama jadi original, lalu di vscodenya klik src klik app pencet (index.tsx), di dalamnya ada code panjang yang awalannya seperti ini :
import * as Device from 'expo-device';
import { Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AnimatedIcon } from '@/components/animated-icon';
import { HintRow } from '@/components/hint-row';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
Kalau di index mau bikin home page atau login page bisa ganti codenya jadi seperti ini :
import { Redirect } from 'expo-router';

export default function Index() {
  return <Redirect href="/login" />;
}
Ganti codenya sesuai keperluan dan kebutuhan masing-masing.

Analisis Kebutuhan: di README. Tuliskan masalah, target pengguna, minimal 5 kebutuhan pengguna, tabel pemetaan kebutuhan ke layar dan komponen, serta alasan keputusan desain dan rencana pengembangan.
Penjelasan App:
1. Membantu dan menolong siswa siswi dan mahasiswa mahasiswi Sekolah Menengah Pertama (SMP), Sekolah Menengah Atas (SMA), dan Universitas dengan tugas sekolah dan kampus mereka
2. Menolong para murid murid dengan tugas individu dan tugas kelompok yang belum dikerjakan, yang akan datang, dan yang sedang menuju deadline pengumpulan.
3. Dalam halaman schedule para murid dapat melihat kelas apa aja yang akan datang atau hari itu dan minggu tersebut dan murid-murid dapat menambahkan rencana pribadi mereka didalamnya saat waktu luang seperti study grup atau pengingat akan tugas yang perlu dikerjakan.
4. Para murid dapat mengetahui tugas-tugas mata pelajaran atau mata kuliah apa yang deadlinenya minggu itu dan mana aja yang belum dikerjakan, belum selesai dan sudah selesai dikerjakan dan dikumpulkan untuk tugas yang onlinenya kalau untuk tugas offline atau onsitenya tinggal bawa buku atau hasil jadi tugas ke kelas saat hari-h nya.
5. Aplikasinya untuk saat ini baru bersifat demo dan untuk mahasiswa kampus dan masih dalam tahap pengembangan, dan mungkin akan menambahkan fitur tambahan lainnya kedepannya tapi tidak tau. 