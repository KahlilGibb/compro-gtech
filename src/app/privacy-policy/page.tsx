import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Kebijakan Privasi G Tech Auditor",
  description:
    "Kebijakan privasi aplikasi G Tech Auditor dari Gynetra Tech Solutions.",
  alternates: {
    canonical: "https://www.gynetratechsolutions.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Kebijakan Privasi"
      effectiveDate="Berlaku sejak 15 September 2026 · Terakhir diperbarui 16 September 2026"
    >
      <p>
        G Tech Auditor adalah aplikasi inspeksi operasional yang dikelola oleh
        Gynetra Tech Solutions untuk organisasi pelanggan. Kebijakan ini
        menjelaskan data yang diproses ketika pengguna yang telah didaftarkan
        oleh organisasinya memakai aplikasi.
      </p>

      <h2>Data yang kami proses</h2>
      <ul>
        <li>
          <strong>Data akun dan organisasi:</strong> nama, nama pengguna, alamat
          email, organisasi, grup, peran, dan foto profil apabila dipilih.
        </li>
        <li>
          <strong>Data inspeksi:</strong> template, jawaban, catatan, skor,
          tindakan perbaikan, lokasi atau cabang yang diperiksa, serta waktu
          pembuatan dan pengiriman.
        </li>
        <li>
          <strong>Foto dan lokasi:</strong> foto yang dipilih atau diambil untuk
          bukti inspeksi dan, setelah izin diberikan, perkiraan atau lokasi
          presisi saat foto inspeksi diambil. Lokasi hanya diminta saat fitur
          terkait digunakan, bukan terus-menerus di latar belakang.
        </li>
        <li>
          <strong>Data teknis dan keamanan:</strong> token serta pengenal sesi,
          versi aplikasi, alamat IP, waktu akses, dan log permintaan yang
          diperlukan untuk keamanan, pencegahan penyalahgunaan, dan pemecahan
          masalah.
        </li>
        <li>
          <strong>Data lokal:</strong> preferensi aplikasi, profil lokal, sesi
          masuk, serta draf inspeksi dapat disimpan pada perangkat agar aplikasi
          tetap dapat digunakan dengan andal.
        </li>
      </ul>

      <h2>Cara kami menggunakan data</h2>
      <p>
        Data digunakan untuk mengautentikasi pengguna, menjalankan dan menyimpan
        inspeksi, menampilkan laporan dan tindakan perbaikan, mendukung kerja
        organisasi, menjaga keamanan layanan, serta memperbaiki keandalan
        aplikasi. Kami tidak menjual data pribadi dan tidak menggunakannya untuk
        iklan.
      </p>

      <h2>Izin perangkat</h2>
      <p>
        Aplikasi dapat meminta izin kamera untuk mengambil bukti foto dan izin
        lokasi saat pengguna memilih fitur yang mencatat lokasi. Pemilihan foto
        menggunakan pemilih media sistem sehingga aplikasi hanya menerima file
        yang dipilih pengguna. Izin dapat ditolak atau dicabut melalui pengaturan
        perangkat; fitur yang memerlukan izin tersebut mungkin menjadi terbatas.
      </p>

      <h2>Penyimpanan dan pembagian data</h2>
      <p>
        Data dapat dilihat oleh organisasi pengguna sesuai peran dan hak
        aksesnya. Kami dapat memakai penyedia infrastruktur, penyimpanan objek,
        dan layanan teknis lain hanya untuk mengoperasikan aplikasi. Penyedia
        tersebut memproses data untuk kami dan tidak boleh menggunakannya untuk
        tujuan sendiri. Data ditransmisikan melalui koneksi HTTPS.
      </p>

      <h2>Retensi dan penghapusan</h2>
      <p>
        Data akun disimpan selama akun masih diperlukan oleh organisasi. Data
        inspeksi disimpan sesuai kebutuhan operasional, kontrak pelanggan,
        keamanan, dan kewajiban hukum yang berlaku. Pengguna dapat meminta akses,
        koreksi, atau penghapusan data melalui administrator organisasinya atau
        melalui kontak di bawah. Data yang wajib dipertahankan karena alasan
        hukum atau keamanan akan dijelaskan saat permintaan diproses.
      </p>

      <h2>Anak-anak</h2>
      <p>
        G Tech Auditor ditujukan untuk pengguna profesional yang diberi akses
        oleh organisasi dan tidak ditujukan kepada anak-anak.
      </p>

      <h2>Perubahan kebijakan</h2>
      <p>
        Kami dapat memperbarui kebijakan ini saat layanan atau kewajiban hukum
        berubah. Tanggal pembaruan terbaru akan selalu ditampilkan pada halaman
        ini.
      </p>

      <h2>Kontak</h2>
      <p className="legal-note">
        Untuk pertanyaan privasi atau permintaan terkait data, hubungi Gynetra
        Tech Solutions melalui{" "}
        <a href="mailto:gynetratechsolutions@gmail.com">
          gynetratechsolutions@gmail.com
        </a>{" "}
        atau <Link href="/#contact">halaman kontak resmi</Link>. Sertakan nama
        organisasi dan nama pengguna agar permintaan dapat diverifikasi.
      </p>
    </LegalPage>
  );
}
