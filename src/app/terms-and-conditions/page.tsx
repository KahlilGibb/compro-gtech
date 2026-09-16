import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Syarat dan Ketentuan / Terms and Conditions — G Tech Auditor",
  description:
    "Syarat dan ketentuan bilingual untuk aplikasi G Tech Auditor dari Gynetra Tech Solutions.",
  alternates: {
    canonical: "https://www.gynetratechsolutions.com/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPage
      title="Syarat dan Ketentuan / Terms and Conditions"
      effectiveDate="Berlaku sejak 16 September 2026 · Effective from 16 September 2026 · Terakhir diperbarui / Last updated 16 September 2026"
    >
      <nav aria-label="Pilihan bahasa / Language selection" className="flex gap-3 rounded-xl bg-slate-100 p-2 text-sm font-semibold">
        <a href="#bahasa-indonesia" className="rounded-lg bg-white px-3 py-2 text-blue-900 shadow-sm">Bahasa Indonesia</a>
        <a href="#english" className="rounded-lg px-3 py-2 text-blue-900 hover:bg-white">English</a>
      </nav>

      <section id="bahasa-indonesia" lang="id">
        <h2>Bahasa Indonesia</h2>
        <p>Syarat dan Ketentuan ini mengatur penggunaan aplikasi G Tech Auditor yang disediakan oleh Gynetra Tech Solutions. Dengan masuk atau memakai aplikasi, pengguna menyatakan telah memahami dan menyetujui ketentuan berikut serta kebijakan internal organisasi yang memberikan akses.</p>

        <h2>Hak menggunakan layanan</h2>
        <p>G Tech Auditor ditujukan bagi personel yang diberi akses oleh organisasi pelanggan. Hak penggunaan bersifat terbatas, tidak eksklusif, tidak dapat dialihkan, dan hanya berlaku selama akun pengguna aktif serta hubungan layanan dengan organisasi terkait masih berlaku.</p>

        <h2>Akun dan keamanan</h2>
        <ul>
          <li>Pengguna wajib memberikan informasi akun yang benar dan terkini.</li>
          <li>Kredensial tidak boleh dibagikan. Aktivitas melalui akun dianggap dilakukan oleh pemilik akun sampai dilaporkan sebagai akses yang tidak sah.</li>
          <li>Pengguna wajib segera memberi tahu administrator organisasi apabila mencurigai kehilangan perangkat atau penyalahgunaan akun.</li>
        </ul>

        <h2>Penggunaan yang diperbolehkan</h2>
        <p>Pengguna hanya boleh memakai layanan untuk kegiatan inspeksi, pelaporan, tindak lanjut, dan kebutuhan operasional lain yang disetujui organisasi. Pengguna dilarang mencoba melewati hak akses, mengganggu layanan, mengambil data tanpa kewenangan, memasukkan materi melanggar hukum, atau merekayasa balik aplikasi sejauh dilarang oleh hukum.</p>

        <h2>Konten dan data inspeksi</h2>
        <p>Organisasi dan pengguna bertanggung jawab atas ketepatan, legalitas, dan kewenangan atas jawaban, foto, lokasi, catatan, serta materi lain yang dimasukkan. Pengguna harus menghindari pengambilan data pribadi atau materi rahasia yang tidak diperlukan untuk inspeksi. Hak atas data milik organisasi tetap berada pada organisasi sesuai perjanjian layanan yang berlaku.</p>

        <h2>Ketersediaan dan perubahan layanan</h2>
        <p>Kami berupaya menjaga layanan tetap aman dan tersedia, namun tidak menjamin layanan selalu bebas gangguan. Pemeliharaan, peningkatan, gangguan jaringan, atau keadaan di luar kendali dapat memengaruhi akses. Fitur dapat diperbarui untuk keamanan, kepatuhan, dan kebutuhan operasional tanpa mengurangi hak yang wajib diberikan oleh hukum.</p>

        <h2>Penangguhan dan penghentian</h2>
        <p>Akses dapat ditangguhkan atau dihentikan atas permintaan organisasi, setelah hubungan layanan berakhir, demi keamanan, atau apabila terjadi pelanggaran ketentuan. Penghapusan dan retensi data mengikuti Kebijakan Privasi serta perjanjian dengan organisasi pelanggan.</p>

        <h2>Batas tanggung jawab</h2>
        <p>Sepanjang diizinkan hukum, aplikasi merupakan alat bantu pencatatan dan tidak menggantikan penilaian profesional, prosedur keselamatan, atau kewajiban hukum organisasi. Tanggung jawab para pihak tunduk pada perjanjian layanan yang berlaku dan ketentuan hukum Indonesia.</p>

        <h2>Privasi</h2>
        <p>Pemrosesan data pribadi dijelaskan dalam <Link href="/privacy-policy">Kebijakan Privasi G Tech Auditor</Link>, yang menjadi bagian dari ketentuan ini.</p>

        <h2>Hukum dan perubahan ketentuan</h2>
        <p>Ketentuan ini diatur oleh hukum Republik Indonesia. Kami dapat memperbaruinya ketika layanan atau kewajiban hukum berubah. Tanggal pembaruan terbaru ditampilkan pada halaman ini; penggunaan setelah perubahan berlaku merupakan penerimaan atas versi terbaru.</p>

        <h2>Kontak</h2>
        <p className="legal-note">Pertanyaan tentang ketentuan ini dapat dikirim ke <a href="mailto:gynetratechsolutions@gmail.com">gynetratechsolutions@gmail.com</a> atau melalui <Link href="/#contact">halaman kontak resmi</Link>.</p>
      </section>

      <section id="english" lang="en" className="scroll-mt-6 border-t border-slate-200 pt-10">
        <h2>English</h2>
        <p>These Terms and Conditions govern use of the G Tech Auditor application provided by Gynetra Tech Solutions. By signing in to or using the application, users confirm that they understand and accept these terms and the internal policies of the organization that granted access.</p>

        <h2>Right to use the service</h2>
        <p>G Tech Auditor is intended for personnel authorized by a customer organization. The right to use it is limited, non-exclusive, non-transferable, and valid only while the user account is active and the service relationship with the relevant organization remains in effect.</p>

        <h2>Accounts and security</h2>
        <ul>
          <li>Users must provide accurate and current account information.</li>
          <li>Credentials must not be shared. Activity through an account is treated as activity of its owner until unauthorized access is reported.</li>
          <li>Users must promptly notify their organization administrator if they suspect a lost device or account misuse.</li>
        </ul>

        <h2>Permitted use</h2>
        <p>Users may use the service only for inspections, reporting, follow-up actions, and other operational purposes approved by their organization. Users must not attempt to bypass access controls, disrupt the service, access data without authorization, submit unlawful material, or reverse-engineer the application where prohibited by law.</p>

        <h2>Inspection content and data</h2>
        <p>Organizations and users are responsible for the accuracy, legality, and authority to submit responses, photos, locations, notes, and other material. Users should avoid collecting personal data or confidential material that is not needed for an inspection. Ownership of organizational data remains with the organization under the applicable service agreement.</p>

        <h2>Availability and service changes</h2>
        <p>We work to keep the service secure and available, but do not guarantee uninterrupted operation. Maintenance, improvements, network disruption, or circumstances outside our control may affect access. Features may be updated for security, compliance, and operational needs without reducing rights required by law.</p>

        <h2>Suspension and termination</h2>
        <p>Access may be suspended or terminated at an organization&apos;s request, when the service relationship ends, for security reasons, or following a breach of these terms. Data deletion and retention follow the Privacy Policy and the agreement with the customer organization.</p>

        <h2>Limitation of liability</h2>
        <p>To the extent permitted by law, the application is a record-keeping tool and does not replace professional judgment, safety procedures, or an organization&apos;s legal obligations. The parties&apos; responsibilities are governed by the applicable service agreement and Indonesian law.</p>

        <h2>Privacy</h2>
        <p>Personal-data processing is described in the <Link href="/privacy-policy">G Tech Auditor Privacy Policy</Link>, which forms part of these terms.</p>

        <h2>Governing law and changes</h2>
        <p>These terms are governed by the laws of the Republic of Indonesia. We may update them when the service or legal requirements change. The latest revision date is displayed on this page; use after an update takes effect constitutes acceptance of the current version.</p>

        <h2>Contact</h2>
        <p className="legal-note">Questions about these terms may be sent to <a href="mailto:gynetratechsolutions@gmail.com">gynetratechsolutions@gmail.com</a> or through the <Link href="/#contact">official contact page</Link>.</p>
      </section>
    </LegalPage>
  );
}
