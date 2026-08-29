import Link from "next/link";

/**
 * Pill CTA with a sliding arrow, matching the source's primary button.
 */
export function ArrowButton({
  href,
  children,
  variant = "solid",
  className,
  target,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
  /** Set to "_blank" for off-site destinations; rel is applied automatically. */
  target?: "_blank";
}) {
  const base =
    "group inline-flex items-center gap-3 rounded-full px-7 py-4 text-xs font-medium uppercase tracking-wider transition-colors duration-300 ease-framer";
  const styles =
    variant === "solid"
      ? "bg-accent text-paper hover:bg-accent-dark"
      : "border border-line text-paper hover:border-accent hover:text-accent";

  return (
    <Link
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`${base} ${styles} ${className ?? ""}`}
    >
      {children}
      <span
        aria-hidden
        className="inline-block transition-transform duration-300 ease-framer group-hover:translate-x-1"
      >
        &rarr;
      </span>
    </Link>
  );
}
