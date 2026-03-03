import React from "react";

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-5 md:px-10 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function Hairline({ className = "" }: { className?: string }) {
  return <div className={`h-px w-full bg-hairline ${className}`} />;
}

export function GlassPanel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[18px] border border-[rgba(255,255,255,0.22)] bg-[rgba(246,243,238,0.78)] backdrop-blur-[20px] ${className}`}
    >
      {children}
    </div>
  );
}

export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-[rgba(255,255,255,0.22)] bg-[rgba(246,243,238,0.78)] px-4 py-1.5 font-mono text-xs tracking-wider text-gold uppercase backdrop-blur-[20px]">
      {children}
    </span>
  );
}

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const base =
    "inline-flex items-center justify-center px-7 py-3 text-sm font-medium tracking-wide transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer";

  const variants = {
    primary:
      "rounded-full bg-cognac text-surface hover:opacity-90 hover:-translate-y-px focus-visible:outline-cognac",
    secondary:
      "rounded-full border border-[rgba(255,255,255,0.22)] bg-[rgba(246,243,238,0.78)] backdrop-blur-[20px] hover:opacity-90 hover:-translate-y-px focus-visible:outline-emerald",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  variant = "primary",
  className = "",
  href,
  ...props
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const base =
    "inline-flex items-center justify-center px-7 py-3 text-sm font-medium tracking-wide transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";

  const variants = {
    primary:
      "rounded-full bg-cognac text-surface hover:opacity-90 hover:-translate-y-px focus-visible:outline-cognac",
    secondary:
      "rounded-full border border-[rgba(255,255,255,0.22)] bg-[rgba(246,243,238,0.78)] text-ink backdrop-blur-[20px] hover:opacity-90 hover:-translate-y-px focus-visible:outline-emerald",
  };

  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}

export function ImagePlaceholder({
  alt,
  className = "",
  aspect = "3/2",
}: {
  alt: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-[18px] bg-[#E8E4DD] text-muted text-xs font-mono ${className}`}
      style={{ aspectRatio: aspect }}
      role="img"
      aria-label={alt}
    >
      {alt}
    </div>
  );
}
