import { Container, ButtonLink } from "../components/ui";

export const metadata = {
  title: "Confirmed — Marbella Mastermind",
};

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;

  return (
    <main className="flex min-h-screen items-center justify-center">
      <Container className="flex flex-col items-center text-center py-24 md:py-32">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold mb-4">
          Confirmed
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-emerald leading-tight mb-5">
          You&rsquo;re in.
        </h1>
        <p className="text-base text-muted max-w-md leading-relaxed mb-3">
          We&rsquo;ve received your reservation. You&rsquo;ll get a confirmation
          email shortly with everything you need to know before May.
        </p>
        {session_id && (
          <p className="font-mono text-xs text-muted mt-1 mb-8">
            Reference: {session_id}
          </p>
        )}
        {!session_id && <div className="mb-8" />}
        <ButtonLink href="/" variant="secondary">
          Back to home
        </ButtonLink>
      </Container>
    </main>
  );
}
