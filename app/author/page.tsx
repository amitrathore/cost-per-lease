import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "About Amit Rathore — Cost Per Lease",
  description:
    "Meet Amit Rathore, founder of Cost Per Lease and co-founder and CTO of Leaser AI. His work connects AI, multifamily operations, occupancy, and asset performance.",
  alternates: { canonical: "/author/" },
};

const background = [
  {
    year: "Today",
    title: "Leaser AI + Cost Per Lease",
    copy: "Building Occupancy Intelligence for occupancy-driven businesses while developing an open economic framework for the broader multifamily industry.",
  },
  {
    year: "Media",
    title: "Quintype",
    copy: "Founded a digital media platform spanning content management, distribution, engagement, and monetization.",
  },
  {
    year: "Commerce",
    title: "Runa + Staples",
    copy: "Co-founded Runa, an AI-driven commerce optimization company later acquired by Staples, then served as VP of Global e-Commerce.",
  },
  {
    year: "Writing",
    title: "Clojure in Action",
    copy: "Authored one of the earliest books on Clojure, grounded in experience building large-scale production systems.",
  },
];

export default function AuthorPage() {
  return (
    <main>
      <SiteHeader />

      <section className="author-hero">
        <div className="author-hero-copy">
          <p className="eyebrow light">Founder / Author</p>
          <h1>About<br /><em>Amit.</em></h1>
          <p>
            Engineer, entrepreneur, and category builder working at the
            intersection of artificial intelligence, economic systems, and
            occupied assets.
          </p>
        </div>
        <div className="author-portrait">
          <div className="portrait-frame">
            <Image
              src="/amit-rathore.jpg"
              alt="Amit Rathore"
              width={1929}
              height={1929}
              priority
            />
          </div>
          <span>San Francisco Bay Area</span>
        </div>
      </section>

      <section className="author-intro section-pad">
        <div>
          <p className="eyebrow">Who I am</p>
          <span className="author-index">01</span>
        </div>
        <div className="author-prose author-prose-large">
          <p>
            Amit Rathore is the co-founder and CTO of <strong>Leaser AI</strong>,
            an Occupancy Intelligence platform for occupancy-driven businesses.
            His work focuses on the intersection of AI, multifamily operations,
            demand economics, occupancy, and asset performance.
          </p>
          <p>
            Across more than 25 years, he has built real-time, data-intensive
            products spanning e-commerce, digital media, machine learning, and
            AI. The thread through that work is a fascination with systems:
            what they measure, what they miss, and how intelligence changes the
            decisions people can make.
          </p>
        </div>
      </section>

      <section className="author-thesis section-pad">
        <div className="author-thesis-main">
          <p className="eyebrow light">Why Cost Per Lease exists</p>
          <blockquote>
            “Multifamily measures occupancy. It rarely measures the full
            economic system required to produce it.”
          </blockquote>
        </div>
        <div className="author-prose inverse-prose">
          <p>
            Cost Per Lease began with a simple frustration: leads, tours,
            leases, occupancy, concessions, labor, and NOI are managed as
            separate metrics even though they belong to one connected economic
            system.
          </p>
          <p>
            The initiative exists to make that system visible—and to create an
            open vocabulary owners, operators, researchers, and technology
            partners can use together.
          </p>
        </div>
      </section>

      <section className="author-work section-pad">
        <div className="work-heading">
          <p className="eyebrow accent">What I’m working on</p>
          <h2>Ideas in public.<br />Intelligence in practice.</h2>
        </div>
        <div className="work-columns">
          <article>
            <span>Open initiative</span>
            <h3>Cost Per Lease</h3>
            <p>
              An open research and education project developing the metrics,
              methods, benchmarks, and language of profitable occupancy.
            </p>
            <Link href="/#standard">Explore the standard <i>↗</i></Link>
          </article>
          <article>
            <span>Commercial platform</span>
            <h3>Leaser AI</h3>
            <p>
              An Occupancy Intelligence platform designed to help
              occupancy-driven businesses observe, understand, predict, decide,
              act, and learn.
            </p>
            <a href="https://seekeragency.ai/" target="_blank" rel="noreferrer">
              Visit Leaser AI <i>↗</i>
            </a>
          </article>
        </div>
      </section>

      <section className="background section-pad">
        <div className="background-heading">
          <p className="eyebrow">Selected background</p>
          <h2>Built across<br />systems and industries.</h2>
        </div>
        <div className="background-list">
          {background.map((item) => (
            <article key={item.title}>
              <span>{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="author-disclosure section-pad">
        <p className="eyebrow">Editorial independence</p>
        <div>
          <h2>Open ideas need a clear boundary.</h2>
          <p>
            Cost Per Lease is an independent open-source research and education
            initiative. Amit&apos;s work building Leaser AI informs some of the
            ideas explored here, but the frameworks and resources are intended
            for the broader multifamily industry.
          </p>
          <Link className="text-arrow" href="/disclosure/">
            Read the full disclosure <span>↗</span>
          </Link>
        </div>
      </section>

      <section className="connect-strip section-pad">
        <p className="eyebrow light">Connect</p>
        <h2>Continue the conversation.</h2>
        <div className="connect-links">
          <a href="https://linkedin.com/in/amitrathore" target="_blank" rel="noreferrer">
            LinkedIn <span>↗</span>
          </a>
          <a href="https://amitrathore.com" target="_blank" rel="noreferrer">
            Personal site <span>↗</span>
          </a>
          <a href="https://seekeragency.ai/" target="_blank" rel="noreferrer">
            Leaser AI <span>↗</span>
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
