import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Syarat dan Ketentuan G Tech Auditor",
  description:
    "Syarat dan ketentuan penggunaan aplikasi G Tech Auditor dari Gynetra Tech Solutions.",
  alternates: {
    canonical: "https://www.gynetratechsolutions.com/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPage
      title="Syarat dan Ketentuan"
      effectiveDate="Berlaku sejak 16 September 2026 · Terakhir diperbarui 16 September 2026"
    >
      <p>
        Syarat dan Ketentuan ini mengatur penggunaan aplikasi G Tech Auditor
        yang disediakan oleh Gynetra Tech Solutions. Dengan masuk atau memakai
        aplikasi, pengguna menyatakan telah memahami dan menyetujui ketentuan
        berikut serta kebijakan internal organisasi yang memberikan akses.
      </p>

      <h2>Hak menggunakan layanan</h2>
      <p>
        G Tech Auditor ditujukan bagi personel yang diberi akses oleh organisasi
        pelanggan. Hak penggunaan bersifat terbatas, tidak eksklusif, tidak dapat
        dialihkan, dan hanya berlaku selama akun pengguna aktif serta hubungan
        layanan dengan organisasi terkait masih berlaku.
      </p>

      <h2>Akun dan keamanan</h2>
      <ul>
        <li>Pengguna wajib memberikan informasi akun yang benar dan terkini.</li>
        <li>
          Kredensial tidak boleh dibagikan. Aktivitas melalui akun dianggap
          dilakukan oleh pemilik akun sampai dilaporkan sebagai akses yang tidak
          sah.
        </li>
        <li>
          Pengguna wajib segera memberi tahu administrator organisasi apabila
          mencurigai kehilangan perangkat atau penyalahgunaan akun.
        </li>
      </ul>

      <h2>Penggunaan yang diperbolehkan</h2>
      <p>
        Pengguna hanya boleh memakai layanan untuk kegiatan inspeksi, pelaporan,
        tindak lanjut, dan kebutuhan operasional lain yang disetujui organisasi.
        Pengguna dilarang mencoba melewati hak akses, mengganggu layanan,
        mengambil data tanpa kewenangan, memasukkan materi melanggar hukum, atau
        merekayasa balik aplikasi sejauh dilarang oleh hukum.
      </p>

      <h2>Konten dan data inspeksi</h2>
      <p>
        Organisasi dan pengguna bertanggung jawab atas ketepatan, legalitas, dan
        kewenangan atas jawaban, foto, lokasi, catatan, serta materi lain yang
        dimasukkan. Pengguna harus menghindari pengambilan data pribadi atau
        materi rahasia yang tidak diperlukan untuk inspeksi. Hak atas data milik
        organisasi tetap berada pada organisasi sesuai perjanjian layanan yang
        berlaku.
      </p>

      <h2>Ketersediaan dan perubahan layanan</h2>
      <p>
        Kami berupaya menjaga layanan tetap aman dan tersedia, namun tidak
        menjamin layanan selalu bebas gangguan. Pemeliharaan, peningkatan,
        gangguan jaringan, atau keadaan di luar kendali dapat memengaruhi akses.
        Fitur dapat diperbarui untuk keamanan, kepatuhan, dan kebutuhan
        operasional tanpa mengurangi hak yang wajib diberikan oleh hukum.
      </p>

      <h2>Penangguhan dan penghentian</h2>
      <p>
        Akses dapat ditangguhkan atau dihentikan atas permintaan organisasi,
        setelah hubungan layanan berakhir, demi keamanan, atau apabila terjadi
        pelanggaran ketentuan. Penghapusan dan retensi data mengikuti Kebijakan
        Privasi serta perjanjian dengan organisasi pelanggan.
      </p>

      <h2>Batas tanggung jawab</h2>
      <p>
        Sepanjang diizinkan hukum, aplikasi merupakan alat bantu pencatatan dan
        tidak menggantikan penilaian profesional, prosedur keselamatan, atau
        kewajiban hukum organisasi. Tanggung jawab para pihak tunduk pada
        perjanjian layanan yang berlaku dan ketentuan hukum Indonesia.
      </p>

      <h2>Privasi</h2>
      <p>
        Pemrosesan data pribadi dijelaskan dalam{" "}
        <Link href="/privacy-policy">Kebijakan Privasi G Tech Auditor</Link>, yang
        menjadi bagian dari ketentuan ini.
      </p>

      <h2>Hukum dan perubahan ketentuan</h2>
      <p>
        Ketentuan ini diatur oleh hukum Republik Indonesia. Kami dapat
        memperbaruinya ketika layanan atau kewajiban hukum berubah. Tanggal
        pembaruan terbaru ditampilkan pada halaman ini; penggunaan setelah
        perubahan berlaku merupakan penerimaan atas versi terbaru.
      </p>

      <h2>Kontak</h2>
      <p className="legal-note">
        Pertanyaan tentang ketentuan ini dapat dikirim ke{" "}
        <a href="mailto:gynetratechsolutions@gmail.com">
          gynetratechsolutions@gmail.com
        </a>{" "}
        atau melalui <Link href="/#contact">halaman kontak resmi</Link>.
      </p>
    </LegalPage>
  );
}
