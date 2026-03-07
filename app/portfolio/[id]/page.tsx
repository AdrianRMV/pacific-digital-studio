import Link from "next/link";

type Props = { params: Promise<{ id: string }> };

export default async function PortfolioProjectPage({ params }: Props) {
  const { id } = await params;
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5">
      <p className="text-accent-muted">Project: {id}</p>
      <p className="mt-2 text-sm text-accent-subtle">
        Replace this page with your project case study when ready.
      </p>
      <Link
        href="/#portfolio"
        className="mt-6 text-sm font-medium text-accent underline-offset-4 hover:underline"
      >
        ← Back to portfolio
      </Link>
    </div>
  );
}
