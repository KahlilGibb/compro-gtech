import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Kebijakan Privasi / Privacy Policy — G Tech Auditor",
  description:
    "Kebijakan privasi bilingual untuk aplikasi G Tech Auditor dari Gynetra Tech Solutions.",
  alternates: {
    canonical: "https://www.gynetratechsolutions.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Kebijakan Privasi / Privacy Policy"
      effectiveDate="Berlaku sejak 15 September 2026 · Effective from 15 September 2026 · Terakhir diperbarui / Last updated 16 September 2026"
    >
      <nav
        aria-label="Pilihan bahasa / Language selection"
        className="flex gap-3 rounded-xl bg-slate-100 p-2 text-sm font-semibold"
      >
        <a href="#bahasa-indonesia" className="rounded-lg bg-white px-3 py-2 text-blue-900 shadow-sm">
          Bahasa Indonesia
        </a>
        <a href="#english" className="rounded-lg px-3 py-2 text-blue-900 hover:bg-white">
          English
        </a>
      </nav>

      <section id="bahasa-indonesia" lang="id">
        <h2>Bahasa Indonesia</h2>
        <p>
          G Tech Auditor adalah aplikasi inspeksi operasional yang dikelola oleh
          Gynetra Tech Solutions untuk organisasi pelanggan. Kebijakan ini
          menjelaskan data yang diproses ketika pengguna yang telah didaftarkan
          oleh organisasinya memakai aplikasi.
        </p>

        <h2>Data yang kami proses</h2>
        <ul>
          <li><strong>Data akun dan organisasi:</strong> nama, nama pengguna, alamat email, organisasi, grup, peran, dan foto profil apabila dipilih.</li>
          <li><strong>Data inspeksi:</strong> template, jawaban, catatan, skor, tindakan perbaikan, lokasi atau cabang yang diperiksa, serta waktu pembuatan dan pengiriman.</li>
          <li><strong>Foto dan lokasi:</strong> foto yang dipilih atau diambil untuk bukti inspeksi dan, setelah izin diberikan, perkiraan atau lokasi presisi saat foto inspeksi diambil. Lokasi hanya diminta saat fitur terkait digunakan, bukan terus-menerus di latar belakang.</li>
          <li><strong>Data teknis dan keamanan:</strong> token serta pengenal sesi, versi aplikasi, alamat IP, waktu akses, dan log permintaan yang diperlukan untuk keamanan, pencegahan penyalahgunaan, dan pemecahan masalah.</li>
          <li><strong>Data lokal:</strong> preferensi aplikasi, profil lokal, sesi masuk, serta draf inspeksi dapat disimpan pada perangkat agar aplikasi tetap dapat digunakan dengan andal.</li>
        </ul>

        <h2>Cara kami menggunakan data</h2>
        <p>Data digunakan untuk mengautentikasi pengguna, menjalankan dan menyimpan inspeksi, menampilkan laporan dan tindakan perbaikan, mendukung kerja organisasi, menjaga keamanan layanan, serta memperbaiki keandalan aplikasi. Kami tidak menjual data pribadi dan tidak menggunakannya untuk iklan.</p>

        <h2>Izin perangkat</h2>
        <p>Aplikasi dapat meminta izin kamera untuk mengambil bukti foto dan izin lokasi saat pengguna memilih fitur yang mencatat lokasi. Pemilihan foto menggunakan pemilih media sistem sehingga aplikasi hanya menerima file yang dipilih pengguna. Izin dapat ditolak atau dicabut melalui pengaturan perangkat; fitur yang memerlukan izin tersebut mungkin menjadi terbatas.</p>

        <h2>Penyimpanan dan pembagian data</h2>
        <p>Data dapat dilihat oleh organisasi pengguna sesuai peran dan hak aksesnya. Kami dapat memakai penyedia infrastruktur, penyimpanan objek, dan layanan teknis lain hanya untuk mengoperasikan aplikasi. Penyedia tersebut memproses data untuk kami dan tidak boleh menggunakannya untuk tujuan sendiri. Data ditransmisikan melalui koneksi HTTPS.</p>

        <h2>Retensi dan penghapusan</h2>
        <p>Data akun disimpan selama akun masih diperlukan oleh organisasi. Data inspeksi disimpan sesuai kebutuhan operasional, kontrak pelanggan, keamanan, dan kewajiban hukum yang berlaku. Pengguna dapat meminta akses, koreksi, atau penghapusan data melalui administrator organisasinya atau melalui kontak di bawah. Data yang wajib dipertahankan karena alasan hukum atau keamanan akan dijelaskan saat permintaan diproses.</p>

        <h2>Anak-anak</h2>
        <p>G Tech Auditor ditujukan untuk pengguna profesional yang diberi akses oleh organisasi dan tidak ditujukan kepada anak-anak.</p>

        <h2>Perubahan kebijakan</h2>
        <p>Kami dapat memperbarui kebijakan ini saat layanan atau kewajiban hukum berubah. Tanggal pembaruan terbaru akan selalu ditampilkan pada halaman ini.</p>

        <h2>Kontak</h2>
        <p className="legal-note">Untuk pertanyaan privasi atau permintaan terkait data, hubungi Gynetra Tech Solutions melalui <a href="mailto:gynetratechsolutions@gmail.com">gynetratechsolutions@gmail.com</a> atau <Link href="/#contact">halaman kontak resmi</Link>. Sertakan nama organisasi dan nama pengguna agar permintaan dapat diverifikasi.</p>
      </section>

      <section id="english" lang="en" className="scroll-mt-6 border-t border-slate-200 pt-10">
        <h2>English</h2>
        <p>G Tech Auditor is an operational inspection application operated by Gynetra Tech Solutions for customer organizations. This policy explains the data processed when a user registered by their organization uses the application.</p>

        <h2>Data we process</h2>
        <ul>
          <li><strong>Account and organization data:</strong> name, username, email address, organization, group, role, and profile photo when selected.</li>
          <li><strong>Inspection data:</strong> templates, responses, notes, scores, corrective actions, inspected locations or branches, and creation and submission timestamps.</li>
          <li><strong>Photos and location:</strong> photos selected or captured as inspection evidence and, after permission is granted, approximate or precise location when an inspection photo is taken. Location is requested only when the related feature is used and is not collected continuously in the background.</li>
          <li><strong>Technical and security data:</strong> tokens and session identifiers, application version, IP address, access time, and request logs needed for security, abuse prevention, and troubleshooting.</li>
          <li><strong>Local data:</strong> application preferences, local profile data, signed-in sessions, and inspection drafts may be stored on the device so the application can operate reliably.</li>
        </ul>

        <h2>How we use data</h2>
        <p>We use data to authenticate users, run and store inspections, display reports and corrective actions, support organizational work, protect the service, and improve application reliability. We do not sell personal data or use it for advertising.</p>

        <h2>Device permissions</h2>
        <p>The application may request camera permission to capture photo evidence and location permission when a user chooses a feature that records location. Photo selection uses the system media picker, so the application receives only files selected by the user. Permissions may be declined or revoked in device settings; related features may then be limited.</p>

        <h2>Storage and sharing</h2>
        <p>Data may be viewed by a user&apos;s organization according to its roles and access rights. We may use infrastructure, object-storage, and other technical providers only to operate the application. Those providers process data for us and may not use it for their own purposes. Data is transmitted over HTTPS.</p>

        <h2>Retention and deletion</h2>
        <p>Account data is retained while the account is needed by the organization. Inspection data is retained according to operational needs, customer contracts, security, and applicable legal obligations. Users may request access, correction, or deletion through their organization administrator or the contact details below. Data that must be retained for legal or security reasons will be explained when a request is handled.</p>

        <h2>Children</h2>
        <p>G Tech Auditor is intended for professional users authorized by their organization and is not directed to children.</p>

        <h2>Changes to this policy</h2>
        <p>We may update this policy when the service or legal requirements change. The latest revision date will always be displayed on this page.</p>

        <h2>Contact</h2>
        <p className="legal-note">For privacy questions or data-related requests, contact Gynetra Tech Solutions at <a href="mailto:gynetratechsolutions@gmail.com">gynetratechsolutions@gmail.com</a> or through the <Link href="/#contact">official contact page</Link>. Please include your organization and username so we can verify the request.</p>
      </section>
    </LegalPage>
  );
}
