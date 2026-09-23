import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";

const deletionEmail = "gynetratechsolutions@gmail.com";
const deletionSubject = "G Tech Auditor Account Deletion Request";
const deletionMailto = `mailto:${deletionEmail}?subject=${encodeURIComponent(deletionSubject)}`;
const deletionGmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  deletionEmail,
)}&su=${encodeURIComponent(deletionSubject)}`;

export const metadata: Metadata = {
  title: "Penghapusan Akun / Account Deletion — G Tech Auditor",
  description:
    "Cara mengajukan penghapusan akun dan data terkait untuk aplikasi G Tech Auditor oleh Gynetra Tech Solutions.",
  alternates: {
    canonical: "https://www.gynetratechsolutions.com/account-deletion",
  },
};

export default function AccountDeletionPage() {
  return (
    <LegalPage
      title="Penghapusan Akun / Account Deletion"
      effectiveDate="Berlaku sejak 23 September 2026 · Effective from 23 September 2026"
    >
      <nav
        aria-label="Pilihan bahasa / Language selection"
        className="flex gap-3 rounded-xl bg-slate-100 p-2 text-sm font-semibold"
      >
        <a
          href="#bahasa-indonesia"
          className="rounded-lg bg-white px-3 py-2 text-blue-900 shadow-sm"
        >
          Bahasa Indonesia
        </a>
        <a href="#english" className="rounded-lg px-3 py-2 text-blue-900 hover:bg-white">
          English
        </a>
      </nav>

      <section id="bahasa-indonesia" lang="id">
        <h2>Minta penghapusan akun G Tech Auditor</h2>
        <p>
          G Tech Auditor adalah aplikasi inspeksi operasional yang dikelola oleh
          Gynetra Tech Solutions. Akun aplikasi dibuat dan dikelola oleh organisasi
          pelanggan. Pengguna yang ingin menghapus akun atau data pribadinya dapat
          mengajukan permintaan melalui jalur berikut, termasuk setelah aplikasi
          dihapus dari perangkat.
        </p>

        <div className="my-6 rounded-2xl border border-blue-200 bg-blue-50 p-5 text-slate-800">
          <h3 className="mt-0">Mulai permintaan penghapusan</h3>
          <p>
            Kirim email ke{" "}
            <a href={deletionMailto}>{deletionEmail}</a> dengan subjek{" "}
            <strong>{deletionSubject}</strong>.
          </p>
          <p>
            <a
              href={deletionGmailCompose}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg bg-blue-900 px-4 py-2 font-semibold text-white no-underline hover:bg-blue-800"
            >
              Kirim permintaan melalui email
            </a>
          </p>
        </div>

        <h2>Informasi yang perlu disertakan</h2>
        <ol>
          <li>nama pengguna atau alamat email yang terdaftar pada G Tech Auditor;</li>
          <li>nama organisasi atau cabang/dealer Anda;</li>
          <li>pernyataan bahwa Anda meminta penghapusan akun dan data terkait; dan</li>
          <li>alamat email yang dapat kami gunakan untuk mengonfirmasi permintaan.</li>
        </ol>
        <p>
          Kami dapat meminta verifikasi tambahan untuk melindungi akun dan data
          organisasi dari permintaan yang tidak sah. Anda juga dapat menghubungi
          administrator organisasi Anda untuk membantu mengajukan atau memverifikasi
          permintaan.
        </p>

        <h2>Data yang dihapus</h2>
        <p>
          Setelah permintaan diverifikasi dan dapat dipenuhi, kami menghapus atau
          menganonimkan data akun yang terkait dengan pengguna, termasuk nama,
          nama pengguna, alamat email, foto profil, sesi masuk aktif, dan token
          notifikasi perangkat yang masih aktif.
        </p>

        <h2>Data yang mungkin dipertahankan</h2>
        <p>
          G Tech Auditor dipakai oleh organisasi untuk mencatat kegiatan bisnis.
          Catatan inspeksi, jawaban checklist, skor, tindakan perbaikan, komentar,
          foto bukti, lokasi inspeksi, dan jejak audit dapat dipertahankan sebagai
          catatan organisasi apabila diperlukan untuk pelaksanaan kontrak,
          keamanan, pencegahan penyalahgunaan, penyelesaian sengketa, atau kewajiban
          hukum. Data tersebut tidak digunakan untuk iklan.
        </p>
        <p>
          Data yang wajib dipertahankan hanya disimpan selama periode yang diperlukan
          oleh tujuan tersebut atau ketentuan hukum/perjanjian yang berlaku. Bila
          ada data yang harus dipertahankan, kami akan menjelaskan kategori data dan
          periode retensi yang berlaku saat permintaan diproses.
        </p>

        <h2>Waktu pemrosesan</h2>
        <p>
          Kami akan mengonfirmasi penerimaan permintaan dan berupaya menyelesaikan
          penghapusan secepatnya, paling lambat 30 hari setelah identitas serta ruang
          lingkup permintaan berhasil diverifikasi, kecuali retensi diperlukan oleh
          alasan yang dijelaskan di atas.
        </p>

        <p className="legal-note">
          Lihat juga <Link href="/privacy-policy">Kebijakan Privasi G Tech Auditor</Link>{" "}
          untuk penjelasan lengkap mengenai pemrosesan data.
        </p>
      </section>

      <section id="english" lang="en" className="scroll-mt-6 border-t border-slate-200 pt-10">
        <h2>Request deletion of your G Tech Auditor account</h2>
        <p>
          G Tech Auditor is an operational inspection application operated by
          Gynetra Tech Solutions. App accounts are provisioned and managed by
          customer organizations. A user may request deletion of their account or
          personal data through the pathway below, including after uninstalling the app.
        </p>

        <div className="my-6 rounded-2xl border border-blue-200 bg-blue-50 p-5 text-slate-800">
          <h3 className="mt-0">Start an account-deletion request</h3>
          <p>
            Email{" "}
            <a href={deletionMailto}>{deletionEmail}</a> with the subject{" "}
            <strong>{deletionSubject}</strong>.
          </p>
          <p>
            <a
              href={deletionGmailCompose}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg bg-blue-900 px-4 py-2 font-semibold text-white no-underline hover:bg-blue-800"
            >
              Send a request by email
            </a>
          </p>
        </div>

        <h2>What to include</h2>
        <ol>
          <li>the username or email address registered with G Tech Auditor;</li>
          <li>the name of your organization or dealer/branch;</li>
          <li>a statement that you are requesting deletion of your account and associated data; and</li>
          <li>an email address that we can use to confirm the request.</li>
        </ol>
        <p>
          We may request additional verification to protect the account and
          organizational data from unauthorized requests. You may also contact your
          organization administrator for help initiating or verifying a request.
        </p>

        <h2>Data we delete</h2>
        <p>
          Once a request is verified and can be fulfilled, we delete or anonymize
          account data associated with the user, including name, username, email
          address, profile photo, active sign-in sessions, and active device-notification tokens.
        </p>

        <h2>Data that may be retained</h2>
        <p>
          G Tech Auditor is used by organizations to maintain business records.
          Inspection submissions, checklist responses, scores, corrective actions,
          comments, evidence photos, inspection locations, and audit trails may be
          retained as organizational records when required to perform a contract,
          protect security, prevent abuse, resolve disputes, or meet legal obligations.
          This data is not used for advertising.
        </p>
        <p>
          Data that must be retained is kept only for the period required by those
          purposes or by applicable law or contract. If data must be retained, we
          will explain the relevant categories and retention period when the request
          is processed.
        </p>

        <h2>Processing time</h2>
        <p>
          We will acknowledge the request and aim to complete deletion as soon as
          possible, no later than 30 days after the requester&apos;s identity and scope
          have been verified, except where retention is required for the reasons above.
        </p>

        <p className="legal-note">
          Please also review the <Link href="/privacy-policy">G Tech Auditor Privacy Policy</Link>{" "}
          for more information about our data practices.
        </p>
      </section>
    </LegalPage>
  );
}
