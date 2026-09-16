import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type LegalPageProps = {
  title: string;
  effectiveDate: string;
  children: ReactNode;
};

export default function LegalPage({
  title,
  effectiveDate,
  children,
}: LegalPageProps) {
  return (
    <main className="min-h-screen bg-slate-50 px-5 py-10 text-slate-700 md:py-16">
      <article className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white px-6 py-8 shadow-xl shadow-slate-900/5 md:px-12 md:py-12">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-3 text-slate-900 transition-opacity hover:opacity-75"
        >
          <span className="relative h-10 w-10 overflow-hidden rounded-lg bg-white ring-1 ring-slate-200">
            <Image
              src="/high-resolution-color-logo (2).png"
              alt="Logo Gynetra Tech Solutions"
              fill
              className="object-contain p-1"
            />
          </span>
          <span className="font-heading font-bold">Gynetra Tech Solutions</span>
        </Link>

        <header className="border-b border-slate-200 pb-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-900">
            G Tech Auditor
          </p>
          <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-sm text-slate-500">{effectiveDate}</p>
        </header>

        <div className="legal-content pt-8">{children}</div>

        <footer className="mt-12 border-t border-slate-200 pt-6 text-sm text-slate-500">
          <Link href="/" className="font-semibold text-blue-900 hover:underline">
            Kembali ke situs Gynetra Tech Solutions
          </Link>
        </footer>
      </article>
    </main>
  );
}
