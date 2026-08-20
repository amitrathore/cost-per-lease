import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Cost Per Lease home">
        <span className="brand-mark" aria-hidden="true">
          C<span>÷</span>L
        </span>
        <span className="brand-name">Cost Per Lease</span>
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <Link href="/#framework">Framework</Link>
        <Link href="/#intelligence">Intelligence</Link>
        <Link href="/#book">Book</Link>
        <Link href="/#standard">The Standard</Link>
        <Link href="/author/">Author</Link>
      </nav>
      <Link className="header-cta" href="/#briefing">
        Join the briefing <span aria-hidden="true">↗</span>
      </Link>
    </header>
  );
}
