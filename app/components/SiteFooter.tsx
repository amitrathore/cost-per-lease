import Link from "next/link";

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-brand">
        <span className="brand-mark footer-mark" aria-hidden="true">
          C<span>÷</span>L
        </span>
        <p>
          An independent, open research initiative advancing the economics of
          profitable occupancy.
        </p>
      </div>
      <div className="footer-links">
          <Link href="/#framework">Framework</Link>
          <Link href="/#book">Book</Link>
          <Link href="/#standard">Standard</Link>
          <Link href="/author/">Author</Link>
          <Link href="/disclosure/">Disclosure</Link>
      </div>
      <div className="footer-meta">
        <span>© 2026 Cost Per Lease</span>
        <span>Occupancy Intelligence by Amit Rathore.</span>
      </div>
    </footer>
  );
}
