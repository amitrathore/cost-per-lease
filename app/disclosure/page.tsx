import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Disclosure — Cost Per Lease",
  description:
    "Editorial independence, commercial relationships, and research attribution policies for Cost Per Lease.",
  alternates: { canonical: "/disclosure/" },
};

export default function DisclosurePage() {
  return (
    <main>
      <SiteHeader />
      <section className="disclosure-hero">
        <p className="eyebrow light">Editorial policy</p>
        <h1>Disclosure.</h1>
        <p>
          A clear boundary between an open industry initiative and the
          commercial work that helps inform it.
        </p>
      </section>

      <section className="policy section-pad">
        <aside>
          <span>Last updated</span>
          <strong>August 20, 2026</strong>
        </aside>
        <div className="policy-body">
          <section>
            <span>01</span>
            <h2>The relationship</h2>
            <p>
              Cost Per Lease is an independent open research and education
              initiative founded by Amit Rathore, co-founder and CTO of Leaser
              AI. Leaser AI is a commercial company developing Occupancy
              Intelligence technology for occupancy-driven businesses.
            </p>
          </section>
          <section>
            <span>02</span>
            <h2>Editorial independence</h2>
            <p>
              The ideas, definitions, calculators, research, and educational
              resources published here are intended to be useful regardless of
              whether a reader uses Leaser AI or any other technology platform.
              Cost Per Lease is not presented as a Leaser AI publication or
              product property.
            </p>
          </section>
          <section>
            <span>03</span>
            <h2>Research and data</h2>
            <p>
              Where research, data, examples, or technology originate from
              Leaser AI, that relationship will be identified explicitly.
              Methodology, sample limitations, attribution assumptions, and
              material commercial interests will be disclosed alongside the
              relevant work whenever practical.
            </p>
          </section>
          <section>
            <span>04</span>
            <h2>Commercial references</h2>
            <p>
              Leaser AI may be referenced when its work is genuinely relevant
              to the subject being discussed. Those references will be made
              plainly and will not substitute for evidence, methodology, or
              broader industry applicability.
            </p>
          </section>
          <section>
            <span>05</span>
            <h2>Corrections and questions</h2>
            <p>
              Cost Per Lease aims to make its reasoning inspectable and its
              definitions useful. Questions, corrections, and methodological
              challenges are welcome.
            </p>
            <a
              className="text-arrow"
              href="https://linkedin.com/in/amitrathore"
              target="_blank"
              rel="noreferrer"
            >
              Contact Amit on LinkedIn <span>↗</span>
            </a>
          </section>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
