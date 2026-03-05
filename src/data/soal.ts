import type { BoxData } from '../components/Box';

export interface Soal {
  id: number;
  kunci: string;
  pembahasan: string[];
  boxes: BoxData[];
  options: {
    label: string;
    center: { t: string; f: boolean; dots?: number; inT?: string; inF?: boolean };
    tl: { t: string; f: boolean };
    tr: { t: string; f: boolean };
    bl: { t: string; f: boolean };
    br: { t: string; f: boolean };
  }[];
}

export const soalData: Soal[] = [
  {
    id: 1,
    kunci: 'D',
    pembahasan: [
      "1. Bangun Tengah: Jumlah sisi bertambah satu setiap kotak berurutan (Segi-3, Segi-4, Segi-5, Segi-6). Pada kotak 5 berubah menjadi Segi-7.",
      "2. Warna Bangun Tengah: Berganti warna secara bergantian setiap kotak (Putih, Hitam, Putih, Hitam). Pada kotak 5 berubah menjadi Putih.",
      "3. Rotasi Elemen Sudut: Seluruh elemen di keempat sudut berputar searah jarum jam sebanyak satu posisi (90 derajat) setiap berpindah kotak.",
      "4. Warna Elemen Sudut: Elemen apa pun yang masuk menempati posisi Kiri Atas akan selalu mengalami pembalikan warna (Hitam menjadi Putih, atau Putih menjadi Hitam). Posisi lainnya mempertahankan warna yang dibawa.",
      "5. Hasil Akhir Kotak 5: Dari kotak 4, Segitiga Hitam berputar ke Kiri Atas dan warnanya terbalik menjadi Segitiga Putih. Lingkaran Hitam berputar ke Kanan Atas. Persegi Putih berputar ke Kanan Bawah. Bintang Hitam berputar ke Kiri Bawah."
    ],
    boxes: [
      { center: { t: 'segi3', f: false }, tl: { t: 'segi3', f: true }, tr: { t: 'circle', f: false }, bl: { t: 'star', f: false }, br: { t: 'square', f: true } },
      { center: { t: 'segi4', f: true }, tl: { t: 'star', f: true }, tr: { t: 'segi3', f: true }, bl: { t: 'square', f: true }, br: { t: 'circle', f: false } },
      { center: { t: 'segi5', f: false }, tl: { t: 'square', f: false }, tr: { t: 'star', f: true }, bl: { t: 'circle', f: false }, br: { t: 'segi3', f: true } },
      { center: { t: 'segi6', f: true }, tl: { t: 'circle', f: true }, tr: { t: 'square', f: false }, bl: { t: 'segi3', f: true }, br: { t: 'star', f: true } },
    ],
    options: [
      { label: 'A', center: { t: 'segi7', f: true }, tl: { t: 'segi3', f: true }, tr: { t: 'circle', f: true }, bl: { t: 'star', f: true }, br: { t: 'square', f: false } },
      { label: 'B', center: { t: 'segi7', f: false }, tl: { t: 'segi3', f: false }, tr: { t: 'circle', f: false }, bl: { t: 'star', f: true }, br: { t: 'square', f: true } },
      { label: 'C', center: { t: 'segi7', f: false }, tl: { t: 'segi3', f: true }, tr: { t: 'circle', f: false }, bl: { t: 'star', f: false }, br: { t: 'square', f: false } },
      { label: 'D', center: { t: 'segi7', f: false }, tl: { t: 'segi3', f: false }, tr: { t: 'circle', f: true }, bl: { t: 'star', f: true }, br: { t: 'square', f: false } },
      { label: 'E', center: { t: 'segi8', f: true }, tl: { t: 'segi3', f: false }, tr: { t: 'circle', f: true }, bl: { t: 'star', f: false }, br: { t: 'square', f: true } },
    ]
  },
  {
    id: 2,
    kunci: 'B',
    pembahasan: [
      "1. Bangun Tengah (Luar): Jumlah sisi berkurang satu setiap kotak berurutan (Segi-8, Segi-7, Segi-6, Segi-5). Pada kotak 5 berubah menjadi Segi-4.",
      "2. Bangun Tengah (Dalam): Jumlah titik bertambah satu setiap kotak (1, 2, 3, 4). Pada kotak 5 berubah menjadi 5 titik.",
      "3. Pergeseran Elemen Sudut: Posisi keempat elemen sudut bergeser berlawanan arah jarum jam dengan lompatan yang bertambah. Kotak 1 ke 2 bergeser 1 posisi. Kotak 2 ke 3 bergeser 2 posisi. Kotak 3 ke 4 bergeser 3 posisi. Kotak 4 ke 5 bergeser 4 posisi (kembali ke tempat semula seperti di Kotak 4).",
      "4. Warna Elemen Sudut: Berlaku aturan statis ruang. Elemen apa pun yang sedang berada di posisi Kanan Bawah otomatis diarsir Hitam, sedangkan elemen di tiga posisi lainnya otomatis menjadi Putih.",
      "5. Hasil Akhir Kotak 5: Karena pergeseran sejauh empat posisi, tata letak bangun kembali sama persis dengan kotak 4. Warnanya mengikuti aturan statis ruang tersebut."
    ],
    boxes: [
      { center: { t: 'segi8', f: false, dots: 1 }, tl: { t: 'circle', f: false }, tr: { t: 'segi3', f: false }, bl: { t: 'star', f: false }, br: { t: 'square', f: true } },
      { center: { t: 'segi7', f: false, dots: 2 }, tl: { t: 'segi3', f: false }, tr: { t: 'square', f: false }, bl: { t: 'circle', f: false }, br: { t: 'star', f: true } },
      { center: { t: 'segi6', f: false, dots: 3 }, tl: { t: 'star', f: false }, tr: { t: 'circle', f: false }, bl: { t: 'square', f: false }, br: { t: 'segi3', f: true } },
      { center: { t: 'segi5', f: false, dots: 4 }, tl: { t: 'square', f: false }, tr: { t: 'segi3', f: false }, bl: { t: 'star', f: false }, br: { t: 'circle', f: true } },
    ],
    options: [
      { label: 'A', center: { t: 'segi4', f: false, dots: 4 }, tl: { t: 'circle', f: false }, tr: { t: 'square', f: false }, bl: { t: 'segi3', f: false }, br: { t: 'star', f: true } },
      { label: 'B', center: { t: 'segi4', f: false, dots: 5 }, tl: { t: 'square', f: false }, tr: { t: 'segi3', f: false }, bl: { t: 'star', f: false }, br: { t: 'circle', f: true } },
      { label: 'C', center: { t: 'segi4', f: false, dots: 5 }, tl: { t: 'segi3', f: false }, tr: { t: 'circle', f: false }, bl: { t: 'star', f: false }, br: { t: 'square', f: true } },
      { label: 'D', center: { t: 'segi3', f: false, dots: 5 }, tl: { t: 'square', f: false }, tr: { t: 'segi3', f: true }, bl: { t: 'star', f: true }, br: { t: 'circle', f: false } },
      { label: 'E', center: { t: 'segi4', f: false, dots: 5 }, tl: { t: 'circle', f: false }, tr: { t: 'star', f: false }, bl: { t: 'square', f: false }, br: { t: 'segi3', f: true } },
    ]
  },
  {
    id: 3,
    kunci: 'E',
    pembahasan: [
      "1. Bangun Tengah Luar: Bangun terluar berwarna hitam terus berkurang satu sisi setiap kotak (Segi-7, Segi-6, Segi-5, Segi-4). Pada kotak 5 berubah menjadi Segi-3 Hitam.",
      "2. Bangun Tengah Dalam: Bangun bagian dalam berwarna putih terus bertambah satu sisi setiap kotak (Segi-3, Segi-4, Segi-5, Segi-6). Pada kotak 5 berubah menjadi Segi-7 Putih.",
      "3. Pertukaran Posisi Sudut: Elemen diagonal Kiri Atas bertukar tempat dengan Kanan Bawah SELALU pada setiap perpindahan kotak. Elemen diagonal Kanan Atas bertukar dengan Kiri Bawah SECARA BERGANTIAN (tukar, diam, tukar, diam). Untuk menuju kotak 5, posisi Kanan Atas dan Kiri Bawah diam/tidak saling bertukar.",
      "4. Perubahan Bentuk Sudut: Seluruh elemen mengalami evolusi bentuk ke tahap selanjutnya setiap berpindah kotak mengikuti siklus pasti: Lingkaran menjadi Persegi, Persegi menjadi Segitiga, Segitiga menjadi Bintang, Bintang menjadi Belah Ketupat, dan Belah Ketupat kembali menjadi Lingkaran.",
      "5. Hasil Akhir Kotak 5: Terapkan pertukaran posisi dari kotak 4 lalu ubah masing-masing bentuknya 1 tahap sesuai siklus di atas."
    ],
    boxes: [
      { center: { t: 'segi7', f: true, inT: 'segi3', inF: false }, tl: { t: 'circle', f: false }, tr: { t: 'square', f: false }, bl: { t: 'segi3', f: false }, br: { t: 'star', f: false } },
      { center: { t: 'segi6', f: true, inT: 'segi4', inF: false }, tl: { t: 'diamond', f: false }, tr: { t: 'star', f: false }, bl: { t: 'segi3', f: false }, br: { t: 'square', f: false } },
      { center: { t: 'segi5', f: true, inT: 'segi5', inF: false }, tl: { t: 'segi3', f: false }, tr: { t: 'diamond', f: false }, bl: { t: 'star', f: false }, br: { t: 'circle', f: false } },
      { center: { t: 'segi4', f: true, inT: 'segi6', inF: false }, tl: { t: 'square', f: false }, tr: { t: 'diamond', f: false }, bl: { t: 'circle', f: false }, br: { t: 'star', f: false } },
    ],
    options: [
      { label: 'A', center: { t: 'segi3', f: true, inT: 'segi7', inF: false }, tl: { t: 'circle', f: false }, tr: { t: 'diamond', f: false }, bl: { t: 'segi3', f: false }, br: { t: 'square', f: false } },
      { label: 'B', center: { t: 'segi5', f: true, inT: 'segi7', inF: false }, tl: { t: 'diamond', f: false }, tr: { t: 'square', f: false }, bl: { t: 'circle', f: false }, br: { t: 'segi3', f: false } },
      { label: 'C', center: { t: 'segi3', f: true, inT: 'segi8', inF: false }, tl: { t: 'segi3', f: false }, tr: { t: 'circle', f: false }, bl: { t: 'square', f: false }, br: { t: 'diamond', f: false } },
      { label: 'D', center: { t: 'segi3', f: true, inT: 'segi7', inF: false }, tl: { t: 'diamond', f: false }, tr: { t: 'circle', f: false }, bl: { t: 'square', f: false }, br: { t: 'star', f: false } },
      { label: 'E', center: { t: 'segi3', f: true, inT: 'segi7', inF: false }, tl: { t: 'diamond', f: false }, tr: { t: 'circle', f: false }, bl: { t: 'square', f: false }, br: { t: 'segi3', f: false } },
    ]
  },
  {
    id: 4,
    kunci: 'C',
    pembahasan: [
      "1. Bangun Tengah (Sisi): Jumlah sisi bertambah satu setiap kotak berurutan (Segi-4, Segi-5, Segi-6, Segi-7). Pada kotak 5 berubah menjadi Segi-8.",
      "2. Bangun Tengah (Warna): Warnanya selang-seling setiap berpindah kotak (Putih, Hitam, Putih, Hitam). Pada kotak 5 menjadi Putih.",
      "3. Lintasan Posisi Sudut (Bergantian): Perpindahan elemen sudut menggunakan pola lintasan yang bergantian. Dari Ganjil ke Genap (1->2, 3->4) elemen bertukar secara DIAGONAL (Kiri Atas <-> Kanan Bawah, Kanan Atas <-> Kiri Bawah). Dari Genap ke Ganjil (2->3, 4->5) elemen bertukar secara SEJAJAR HORIZONTAL (Kiri Atas <-> Kanan Atas, Kiri Bawah <-> Kanan Bawah). Untuk Kotak 4 ke 5, gunakan pertukaran sejajar.",
      "4. Evolusi Bentuk Sudut: Setiap kali elemen berpindah posisi, bentuknya berevolusi maju 1 tahap sesuai siklus berulang: Lingkaran -> Segitiga -> Persegi -> Bintang -> Belah Ketupat -> kembali ke Lingkaran.",
      "5. Aturan Statis Warna Sudut: Posisi menentukan warna. Jika elemen berada di sisi Kiri (Kiri Atas / Kiri Bawah), otomatis berwarna Putih. Jika berada di sisi Kanan (Kanan Atas / Kanan Bawah), otomatis berwarna Hitam."
    ],
    boxes: [
      { center: { t: 'segi4', f: false }, tl: { t: 'circle', f: false }, tr: { t: 'segi3', f: true }, bl: { t: 'star', f: false }, br: { t: 'diamond', f: true } },
      { center: { t: 'segi5', f: true }, tl: { t: 'circle', f: false }, tr: { t: 'diamond', f: true }, bl: { t: 'square', f: false }, br: { t: 'segi3', f: true } },
      { center: { t: 'segi6', f: false }, tl: { t: 'circle', f: false }, tr: { t: 'segi3', f: true }, bl: { t: 'square', f: false }, br: { t: 'star', f: true } },
      { center: { t: 'segi7', f: true }, tl: { t: 'diamond', f: false }, tr: { t: 'star', f: true }, bl: { t: 'square', f: false }, br: { t: 'segi3', f: true } },
    ],
    options: [
      { label: 'A', center: { t: 'segi8', f: true }, tl: { t: 'diamond', f: false }, tr: { t: 'circle', f: true }, bl: { t: 'square', f: false }, br: { t: 'star', f: true } },
      { label: 'B', center: { t: 'segi7', f: false }, tl: { t: 'diamond', f: false }, tr: { t: 'circle', f: true }, bl: { t: 'square', f: false }, br: { t: 'star', f: true } },
      { label: 'C', center: { t: 'segi8', f: false }, tl: { t: 'diamond', f: false }, tr: { t: 'circle', f: true }, bl: { t: 'square', f: false }, br: { t: 'star', f: true } },
      { label: 'D', center: { t: 'segi8', f: false }, tl: { t: 'circle', f: false }, tr: { t: 'diamond', f: true }, bl: { t: 'square', f: false }, br: { t: 'star', f: true } },
      { label: 'E', center: { t: 'segi8', f: false }, tl: { t: 'diamond', f: true }, tr: { t: 'circle', f: false }, bl: { t: 'square', f: true }, br: { t: 'star', f: false } },
    ]
  },
  {
    id: 5,
    kunci: 'A',
    pembahasan: [
      "1. Bangun Tengah (Luar): Sisinya berosilasi (naik turun) dengan pola Segi-8 -> Segi-6 -> Segi-4 -> Segi-6. Pada kotak 5 kembali menjadi Segi-8.",
      "2. Titik Pusat (Memori Rotasi): Jumlah titik bertambah konstan (1, 2, 3, 4, 5). Yang krusial, jumlah titik di kotak SEBELUMNYA menentukan seberapa jauh elemen sudut berputar searah jarum jam pada langkah berikutnya. (Dari K1 ke K2 berputar 1 langkah, K2 ke K3 berputar 2 langkah, K3 ke K4 berputar 3 langkah, dan K4 ke K5 berputar 4 langkah yang artinya kembali ke titik awal rotasi kotak 4).",
      "3. Evolusi Bentuk Sudut: Di setiap langkah perpindahan, semua bangun di sudut berevolusi satu tahap mengikuti siklus: Lingkaran -> Persegi -> Belah Ketupat -> Bintang -> kembali ke Lingkaran.",
      "4. Aturan Statis Warna Sudut: Hanya posisi 'Kanan Atas' yang selalu diarsir Hitam. Tiga posisi lainnya selalu Putih.",
      "5. Hasil Akhir Kotak 5: Dari Kotak 4, elemen berputar 4 langkah (kembali ke posisi semula). Elemen di Kiri Atas kotak 4 (Lingkaran) tetap di Kiri Atas namun berevolusi menjadi Persegi Putih. Kanan Atas (Persegi) menjadi Belah Ketupat Hitam. Kanan Bawah (Bintang) menjadi Lingkaran Putih. Kiri Bawah (Bintang) menjadi Lingkaran Putih."
    ],
    boxes: [
      { center: { t: 'segi8', f: false, dots: 1 }, tl: { t: 'circle', f: false }, tr: { t: 'circle', f: true }, bl: { t: 'diamond', f: false }, br: { t: 'square', f: false } },
      { center: { t: 'segi6', f: false, dots: 2 }, tl: { t: 'star', f: false }, tr: { t: 'square', f: true }, bl: { t: 'diamond', f: false }, br: { t: 'square', f: false } },
      { center: { t: 'segi4', f: false, dots: 3 }, tl: { t: 'diamond', f: false }, tr: { t: 'star', f: true }, bl: { t: 'diamond', f: false }, br: { t: 'circle', f: false } },
      { center: { t: 'segi6', f: false, dots: 4 }, tl: { t: 'circle', f: false }, tr: { t: 'square', f: true }, bl: { t: 'star', f: false }, br: { t: 'star', f: false } },
    ],
    options: [
      { label: 'A', center: { t: 'segi8', f: false, dots: 5 }, tl: { t: 'square', f: false }, tr: { t: 'diamond', f: true }, bl: { t: 'circle', f: false }, br: { t: 'circle', f: false } },
      { label: 'B', center: { t: 'segi8', f: false, dots: 4 }, tl: { t: 'square', f: false }, tr: { t: 'diamond', f: true }, bl: { t: 'circle', f: false }, br: { t: 'circle', f: false } },
      { label: 'C', center: { t: 'segi6', f: false, dots: 5 }, tl: { t: 'square', f: false }, tr: { t: 'diamond', f: true }, bl: { t: 'circle', f: false }, br: { t: 'circle', f: false } },
      { label: 'D', center: { t: 'segi8', f: false, dots: 5 }, tl: { t: 'diamond', f: false }, tr: { t: 'square', f: true }, bl: { t: 'circle', f: false }, br: { t: 'circle', f: false } },
      { label: 'E', center: { t: 'segi8', f: false, dots: 5 }, tl: { t: 'square', f: false }, tr: { t: 'diamond', f: false }, bl: { t: 'circle', f: false }, br: { t: 'circle', f: false } },
    ]
  },
  {
    id: 6,
    kunci: 'E',
    pembahasan: [
      "1. Bangun Tengah Luar: Secara konstan bertambah satu sisi dan selalu Hitam (Segi-3, Segi-4, Segi-5, Segi-6). Pada kotak 5 menjadi Segi-7 Hitam.",
      "2. Bangun Tengah Dalam: Berevolusi bentuk mengikuti siklus (Bintang -> Lingkaran -> Persegi -> Belah Ketupat -> Bintang) dan selalu Putih.",
      "3. Lintasan Figure-8 (Angka 8): Posisi elemen berpindah meniru goresan angka 8. Kanan Bawah pindah ke Kiri Atas. Kiri Atas pindah ke Kanan Atas. Kanan Atas pindah ke Kiri Bawah. Kiri Bawah pindah ke Kanan Bawah.",
      "4. Aritmatika Bentuk Sudut: Ada aturan kondisional! Jika elemen tiba di BARIS ATAS (Kiri Atas / Kanan Atas), maka sisinya BERTAMBAH SATU. Jika elemen tiba di BARIS BAWAH (Kiri Bawah / Kanan Bawah), maka sisinya BERKURANG SATU. (Lingkaran dalam deret ini dianggap mewakili Segi-2).",
      "5. Aturan Statis Warna: Posisi Kiri Atas = Putih, Kanan Atas = Hitam, Kiri Bawah = Hitam, Kanan Bawah = Putih. "
    ],
    boxes: [
      { center: { t: 'segi3', f: true, inT: 'star', inF: false }, tl: { t: 'segi3', f: false }, tr: { t: 'square', f: true }, bl: { t: 'segi5', f: true }, br: { t: 'segi6', f: false } },
      { center: { t: 'segi4', f: true, inT: 'circle', inF: false }, tl: { t: 'segi7', f: false }, tr: { t: 'square', f: true }, bl: { t: 'segi3', f: true }, br: { t: 'square', f: false } },
      { center: { t: 'segi5', f: true, inT: 'square', inF: false }, tl: { t: 'segi5', f: false }, tr: { t: 'segi8', f: true }, bl: { t: 'segi3', f: true }, br: { t: 'circle', f: false } },
      { center: { t: 'segi6', f: true, inT: 'diamond', inF: false }, tl: { t: 'segi3', f: false }, tr: { t: 'segi6', f: true }, bl: { t: 'segi7', f: true }, br: { t: 'circle', f: false } },
    ],
    options: [
      { label: 'A', center: { t: 'segi7', f: false, inT: 'star', inF: true }, tl: { t: 'segi3', f: false }, tr: { t: 'square', f: true }, bl: { t: 'segi5', f: true }, br: { t: 'segi6', f: false } },
      { label: 'B', center: { t: 'segi6', f: true, inT: 'star', inF: false }, tl: { t: 'segi3', f: false }, tr: { t: 'square', f: true }, bl: { t: 'segi5', f: true }, br: { t: 'segi6', f: false } },
      { label: 'C', center: { t: 'segi7', f: true, inT: 'circle', inF: false }, tl: { t: 'segi3', f: false }, tr: { t: 'square', f: true }, bl: { t: 'segi5', f: true }, br: { t: 'segi6', f: false } },
      { label: 'D', center: { t: 'segi7', f: true, inT: 'star', inF: false }, tl: { t: 'square', f: false }, tr: { t: 'segi3', f: true }, bl: { t: 'segi6', f: true }, br: { t: 'segi5', f: false } },
      { label: 'E', center: { t: 'segi7', f: true, inT: 'star', inF: false }, tl: { t: 'segi3', f: false }, tr: { t: 'square', f: true }, bl: { t: 'segi5', f: true }, br: { t: 'segi6', f: false } },
    ]
  },
  {
    id: 7,
    kunci: 'A',
    pembahasan: [
      "1. Bangun Tengah: Sisinya bertambah secara berurutan setiap kotak (Segi-4, 5, 6, 7). Di kotak 5 berubah menjadi Segi-8. Warnanya selang-seling (Putih, Hitam, Putih, Hitam). Di kotak 5 menjadi Putih.",
      "2. Lintasan Silang: Setiap langkah, elemen bertukar posisi secara menyilang atau diagonal (Kiri Atas saling bertukar dengan Kanan Bawah, Kanan Atas saling bertukar dengan Kiri Bawah).",
      "3. Aturan Menurun (Kondisi 1): Elemen yang terlempar ke bawah (dari baris Atas menuju baris Bawah), bentuknya BEREVOLUSI 1 tahap (siklus: Lingkaran->Segi3->Persegi->Segi5->Segi6->Segi7->Segi8), sedangkan warnanya TETAP (sama seperti sebelumnya).",
      "4. Aturan Menaik (Kondisi 2): Elemen yang terlempar ke atas (dari baris Bawah menuju baris Atas), bentuknya TETAP, namun warnanya DIBALIK (Hitam menjadi Putih, atau Putih menjadi Hitam).",
      "5. Eksekusi Kotak 5: Terapkan lintasan dari kotak 4. Kiri Atas (Segi-6 Putih) turun ke Kanan Bawah, maka berevolusi menjadi Segi-7 dan warnanya tetap Putih. Kanan Bawah (Persegi Hitam) naik ke Kiri Atas, maka bentuk tetap Persegi, namun warna dibalik menjadi Putih. Lakukan analisa yang sama pada dua elemen diagonal lainnya."
    ],
    boxes: [
      { center: { t: 'segi4', f: false }, tl: { t: 'circle', f: false }, tr: { t: 'square', f: true }, bl: { t: 'segi3', f: false }, br: { t: 'segi5', f: true } },
      { center: { t: 'segi5', f: true }, tl: { t: 'segi5', f: false }, tr: { t: 'segi3', f: true }, bl: { t: 'segi5', f: true }, br: { t: 'segi3', f: false } },
      { center: { t: 'segi6', f: false }, tl: { t: 'segi3', f: true }, tr: { t: 'segi5', f: false }, bl: { t: 'square', f: true }, br: { t: 'segi6', f: false } },
      { center: { t: 'segi7', f: true }, tl: { t: 'segi6', f: true }, tr: { t: 'square', f: false }, bl: { t: 'segi6', f: false }, br: { t: 'square', f: true } },
    ],
    options: [
      { label: 'A', center: { t: 'segi8', f: false }, tl: { t: 'square', f: false }, tr: { t: 'segi6', f: true }, bl: { t: 'segi5', f: false }, br: { t: 'segi7', f: true } },
      { label: 'B', center: { t: 'segi8', f: false }, tl: { t: 'square', f: false }, tr: { t: 'segi7', f: true }, bl: { t: 'segi5', f: false }, br: { t: 'segi7', f: true } },
      { label: 'C', center: { t: 'segi8', f: false }, tl: { t: 'square', f: true }, tr: { t: 'segi6', f: true }, bl: { t: 'segi5', f: false }, br: { t: 'segi7', f: true } },
      { label: 'D', center: { t: 'segi7', f: false }, tl: { t: 'square', f: false }, tr: { t: 'segi6', f: true }, bl: { t: 'segi5', f: false }, br: { t: 'segi7', f: true } },
      { label: 'E', center: { t: 'segi8', f: false }, tl: { t: 'segi6', f: false }, tr: { t: 'square', f: true }, bl: { t: 'segi7', f: false }, br: { t: 'segi5', f: true } },
    ]
  },
  {
    id: 8,
    kunci: 'B',
    pembahasan: [
      "1. Bangun Tengah Luar: Berkurang sisi perlahan (Segi-8 -> 7 -> 6 -> 5 -> 4) dan selalu diarsir Hitam.",
      "2. Bangun Tengah Dalam: Bertambah sisi perlahan (Segi-3 -> 4 -> 5 -> 6 -> 7) dan selalu berwarna Putih.",
      "3. Lintasan U-Shape: Semua elemen sudut bergeser berlawanan arah jarum jam dengan rute 'U' memutar: Kiri Atas -> Kiri Bawah -> Kanan Bawah -> Kanan Atas -> lalu kembali melompat ke Kiri Atas.",
      "4. Evolusi Terus Menerus: Setiap kali elemen berpindah posisi ke arah manapun, ia WAJIB berevolusi 1 tahap (Lingkaran -> Segitiga -> Persegi -> Segi-5 -> Segi-6 -> Segi-7 -> Segi-8 -> Belah Ketupat -> Bintang).",
      "5. Pertukaran Warna: Warna seluruh elemen terus berubah selang-seling setiap berpindah kotak (Putih jadi Hitam, Hitam jadi Putih). Terapkan geseran lintasan U, evolusi +1, dan balikkan warna untuk mendapatkan Kotak 5."
    ],
    boxes: [
      { center: { t: 'segi8', f: true, inT: 'segi3', inF: false }, tl: { t: 'circle', f: false }, tr: { t: 'diamond', f: true }, bl: { t: 'square', f: true }, br: { t: 'segi6', f: false } },
      { center: { t: 'segi7', f: true, inT: 'square', inF: false }, tl: { t: 'star', f: false }, tr: { t: 'segi7', f: true }, bl: { t: 'segi3', f: true }, br: { t: 'segi5', f: false } },
      { center: { t: 'segi6', f: true, inT: 'segi5', inF: false }, tl: { t: 'segi8', f: false }, tr: { t: 'segi6', f: true }, bl: { t: 'circle', f: true }, br: { t: 'square', f: false } },
      { center: { t: 'segi5', f: true, inT: 'segi6', inF: false }, tl: { t: 'segi7', f: false }, tr: { t: 'segi5', f: true }, bl: { t: 'diamond', f: true }, br: { t: 'segi3', f: false } },
    ],
    options: [
      { label: 'A', center: { t: 'segi4', f: true, inT: 'segi7', inF: false }, tl: { t: 'segi6', f: true }, tr: { t: 'square', f: false }, bl: { t: 'segi8', f: false }, br: { t: 'star', f: true } },
      { label: 'B', center: { t: 'segi4', f: true, inT: 'segi7', inF: false }, tl: { t: 'segi6', f: false }, tr: { t: 'square', f: true }, bl: { t: 'segi8', f: true }, br: { t: 'star', f: false } },
      { label: 'C', center: { t: 'segi5', f: true, inT: 'segi6', inF: false }, tl: { t: 'segi6', f: false }, tr: { t: 'square', f: true }, bl: { t: 'segi8', f: true }, br: { t: 'star', f: false } },
      { label: 'D', center: { t: 'segi4', f: true, inT: 'segi7', inF: false }, tl: { t: 'segi5', f: false }, tr: { t: 'segi3', f: true }, bl: { t: 'segi7', f: true }, br: { t: 'diamond', f: false } },
      { label: 'E', center: { t: 'segi4', f: true, inT: 'segi7', inF: false }, tl: { t: 'segi6', f: false }, tr: { t: 'square', f: true }, bl: { t: 'star', f: false }, br: { t: 'segi8', f: true } },
    ]
  },
  {
    id: 9,
    kunci: 'C',
    pembahasan: [
      "1. Bangun Tengah: Bangun luar berosilasi (bergantian) antara Persegi dan Belah Ketupat. Warna berganti (Putih->Hitam->Putih). Kotak 5 menjadi Persegi Putih. Jumlah titik berkurang stabil (5, 4, 3, 2). Kotak 5 tersisa 1 titik.",
      "2. Pertukaran Vertikal Bergantian: Posisi sudut tidak berputar, melainkan bertukar vertikal! Antara K1 ke K2, elemen di Kolom KIRI (Kiri Atas & Kiri Bawah) bertukar tempat. Antara K2 ke K3, giliran Kolom KANAN bertukar. K3 ke K4 Kolom Kiri lagi. Maka untuk menuju K5, giliran elemen di KOLOM KANAN yang bertukar tempat. Kolom Kiri diam.",
      "3. Aturan Elemen Diam (Kondisi 1): Elemen yang TIDAK mendapat giliran bertukar posisi, warnanya akan TETAP, namun bentuknya BEREVOLUSI 1 tahap.",
      "4. Aturan Elemen Bertukar (Kondisi 2): Elemen yang MENDAPAT giliran bertukar posisi, bentuknya akan TETAP, namun warnanya akan DIBALIK (Hitam <-> Putih).",
      "5. Eksekusi Kotak 5: Dari kotak 4, Kolom Kiri (Persegi Putih & Segi-6 Hitam) sedang giliran diam, sehingga berubah bentuk jadi Segi-5 Putih dan Segi-7 Hitam (ralat: pada kotak 4 Kolom Kiri berevolusi menjadi Persegi dan Segi-6). Kolom Kanan (Segi-7 Putih & Segi-3 Hitam) bertukar posisi silang dan warnanya dibalik."
    ],
    boxes: [
      { center: { t: 'segi4', f: false, dots: 5 }, tl: { t: 'circle', f: false }, tr: { t: 'segi5', f: false }, bl: { t: 'square', f: true }, br: { t: 'star', f: true } },
      { center: { t: 'diamond', f: true, dots: 4 }, tl: { t: 'square', f: false }, tr: { t: 'segi6', f: false }, bl: { t: 'circle', f: true }, br: { t: 'circle', f: true } },
      { center: { t: 'segi4', f: false, dots: 3 }, tl: { t: 'segi5', f: false }, tr: { t: 'circle', f: false }, bl: { t: 'segi3', f: true }, br: { t: 'segi6', f: true } },
      { center: { t: 'diamond', f: true, dots: 2 }, tl: { t: 'segi3', f: false }, tr: { t: 'segi3', f: false }, bl: { t: 'segi5', f: true }, br: { t: 'segi7', f: true } },
    ],
    options: [
      { label: 'A', center: { t: 'segi4', f: false, dots: 1 }, tl: { t: 'segi5', f: false }, tr: { t: 'segi7', f: false }, bl: { t: 'segi3', f: true }, br: { t: 'segi3', f: true } },
      { label: 'B', center: { t: 'segi4', f: false, dots: 1 }, tl: { t: 'square', f: true }, tr: { t: 'segi7', f: true }, bl: { t: 'segi6', f: false }, br: { t: 'segi3', f: false } },
      { label: 'C', center: { t: 'segi4', f: false, dots: 1 }, tl: { t: 'square', f: false }, tr: { t: 'segi7', f: false }, bl: { t: 'segi6', f: true }, br: { t: 'segi3', f: true } },
      { label: 'D', center: { t: 'segi4', f: false, dots: 2 }, tl: { t: 'square', f: false }, tr: { t: 'segi7', f: false }, bl: { t: 'segi6', f: true }, br: { t: 'segi3', f: true } },
      { label: 'E', center: { t: 'segi4', f: false, dots: 1 }, tl: { t: 'square', f: false }, tr: { t: 'segi3', f: false }, bl: { t: 'segi6', f: true }, br: { t: 'segi7', f: true } },
    ]
  },
  {
    id: 10,
    kunci: 'D',
    pembahasan: [
      "1. Bangun Tengah: Bentuknya berosilasi (Lingkaran Hitam -> Bintang Hitam, berulang terus). Kotak 5 kembali menjadi Lingkaran Hitam. Jumlah titik berosilasi stabil (1 -> 2 -> 1 -> 2). Kotak 5 kembali menjadi 1 titik.",
      "2. Rotasi Pendulum: Arah putaran semua elemen berubah 180 derajat (berbalik) setiap melangkah! K1->K2 (Searah Jarum Jam). K2->K3 (Berlawanan Arah). K3->K4 (Searah Jarum Jam). Maka dari Kotak 4 ke 5, elemen berputar BERLAWANAN ARAH JARUM JAM sejauh 1 posisi.",
      "3. Evolusi Bentuk Konstan: Tanpa mempedulikan arah putaran pendulum, SETIAP elemen selalu bertambah 1 sisi (berevolusi 1 tahap) di setiap langkahnya.",
      "4. Aturan Warna Posisi (Statis Baris): Warna tidak mengikuti elemen, tapi ditentukan oleh mendarat di baris mana elemen tersebut. Baris ATAS = Otomatis Hitam. Baris BAWAH = Otomatis Putih.",
      "5. Eksekusi Kotak 5: Ambil elemen dari kotak 4, putar Berlawanan Arah Jarum Jam 1 posisi. Tambahkan 1 tahap evolusi bentuk pada semuanya, lalu sesuaikan arsirannya berdasarkan apakah mereka berakhir di baris Atas atau Bawah."
    ],
    boxes: [
      { center: { t: 'circle', f: true, dots: 1 }, tl: { t: 'circle', f: true }, tr: { t: 'square', f: true }, bl: { t: 'diamond', f: false }, br: { t: 'segi6', f: false } },
      { center: { t: 'star', f: true, dots: 2 }, tl: { t: 'star', f: true }, tr: { t: 'segi3', f: true }, bl: { t: 'segi7', f: false }, br: { t: 'segi5', f: false } },
      { center: { t: 'circle', f: true, dots: 1 }, tl: { t: 'square', f: true }, tr: { t: 'segi6', f: true }, bl: { t: 'circle', f: false }, br: { t: 'segi8', f: false } },
      { center: { t: 'star', f: true, dots: 2 }, tl: { t: 'segi3', f: true }, tr: { t: 'segi5', f: true }, bl: { t: 'diamond', f: false }, br: { t: 'segi7', f: false } },
    ],
    options: [
      { label: 'A', center: { t: 'circle', f: true, dots: 1 }, tl: { t: 'segi6', f: false }, tr: { t: 'segi8', f: false }, bl: { t: 'square', f: true }, br: { t: 'star', f: true } },
      { label: 'B', center: { t: 'circle', f: true, dots: 1 }, tl: { t: 'segi5', f: true }, tr: { t: 'segi7', f: true }, bl: { t: 'segi3', f: false }, br: { t: 'diamond', f: false } },
      { label: 'C', center: { t: 'star', f: true, dots: 1 }, tl: { t: 'segi6', f: true }, tr: { t: 'segi8', f: true }, bl: { t: 'square', f: false }, br: { t: 'star', f: false } },
      { label: 'D', center: { t: 'circle', f: true, dots: 1 }, tl: { t: 'segi6', f: true }, tr: { t: 'segi8', f: true }, bl: { t: 'square', f: false }, br: { t: 'star', f: false } },
      { label: 'E', center: { t: 'circle', f: true, dots: 1 }, tl: { t: 'star', f: true }, tr: { t: 'square', f: true }, bl: { t: 'segi8', f: false }, br: { t: 'segi6', f: false } },
    ]
  }
];

export default soalData;
