import Link from "next/link";
import { BRAND, NAV_LINKS, RESUME, SOCIALS } from "@/lib/data";

export function Footer() {
  return (
    <footer data-name="Footer" className="border-t border-line pt-20">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              {BRAND.footerNote}
            </p>
            <Link
              href={`mailto:${BRAND.email}`}
              className="mt-6 inline-block text-sm text-paper transition-colors duration-300 hover:text-accent"
            >
              {BRAND.email}
            </Link>
            <p className="mt-2 text-sm text-muted">
              {BRAND.location} &middot; {BRAND.timezone}
            </p>

            {/* Availability, with a live-status dot. */}
            <p className="mt-6 flex items-start gap-2.5 text-xs leading-relaxed text-muted-light">
              <span
                aria-hidden
                className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent shadow-glow"
              />
              {BRAND.availability}
            </p>
          </div>

          <nav aria-label="Sections">
            <h2 className="eyebrow">Navigate</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-light transition-colors duration-300 hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Social">
            <h2 className="eyebrow">Elsewhere</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {SOCIALS.map((social) => {
                const external = social.href.startsWith("http");

                return (
                  <li key={social.label}>
                    <Link
                      href={social.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="text-sm text-muted-light transition-colors duration-300 hover:text-accent"
                    >
                      {social.label}
                    </Link>
                  </li>
                );
              })}

              {/* The CV sits with the outbound links, where people look for it. */}
              <li>
                <a
                  href={RESUME.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-light transition-colors duration-300 hover:text-accent"
                >
                  CV (PDF)
                  <span className="sr-only">, opens in a new tab</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Oversized wordmark with logo icon */}
        <div className="mt-24 overflow-hidden">
          <div
            aria-hidden
            className="translate-y-[0.12em] whitespace-nowrap text-center font-display text-display-xl uppercase leading-none tracking-display text-paper flex items-center justify-center gap-4 sm:gap-6"
          >
            <svg
              aria-hidden="true"
              className="h-[0.75em] w-[0.75em] text-accent shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            <span>
              {BRAND.name}
              <span className="text-accent">.</span>
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-line py-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted">
            &copy; {BRAND.year} {BRAND.fullName}. All rights reserved.
          </p>
          <p className="text-xs tracking-wider text-muted">{BRAND.credit}</p>
        </div>
      </div>
    </footer>
  );
}
