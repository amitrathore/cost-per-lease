const metricLayers = [
  {
    number: "01",
    name: "Media CPL",
    formula: "Paid media spend ÷ attributable leases",
    detail: "The cleanest view of channel-level acquisition efficiency.",
  },
  {
    number: "02",
    name: "Acquisition CPL",
    formula: "Demand-generation costs ÷ incremental leases",
    detail: "A complete view of what it takes to create new demand.",
  },
  {
    number: "03",
    name: "Fully Loaded CPL",
    formula: "Acquisition + tech + labor + concessions ÷ leases",
    detail: "The operating reality behind every signed agreement.",
  },
  {
    number: "04",
    name: "Economic CPL",
    formula: "Marginal economic cost ÷ new + renewed leases",
    detail: "The truest measure of profitable, durable occupancy.",
  },
];

const bookParts = [
  {
    part: "Part I",
    title: "The Occupancy Fallacy",
    copy: "Why occupancy alone is incomplete—and how the pursuit of more leads, bigger concessions, and isolated targets can quietly destroy value.",
  },
  {
    part: "Part II",
    title: "The Economics of a Lease",
    copy: "A practical vocabulary for Media CPL, Acquisition CPL, Fully Loaded CPL, Economic CPL, and the marginal cost of occupancy.",
  },
  {
    part: "Part III",
    title: "The Occupancy System",
    copy: "A map from influence and demand through prospect, tour, lease, resident, renewal, revenue, and NOI.",
  },
  {
    part: "Part IV",
    title: "The Intelligent Operator",
    copy: "How Occupancy Intelligence helps teams observe, understand, predict, decide, act, and learn as one operating system.",
  },
  {
    part: "Part V",
    title: "The Autonomous Asset",
    copy: "A forward look at agentic operations, decision memory, digital twins, portfolio intelligence, and autonomous capital allocation.",
  },
];

const systemSteps = [
  "Influence",
  "Demand",
  "Prospect",
  "Tour",
  "Application",
  "Lease",
  "Resident",
  "Renewal",
  "Revenue",
  "NOI",
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Cost Per Lease home">
          <span className="brand-mark" aria-hidden="true">
            C<span>÷</span>L
          </span>
          <span className="brand-name">Cost Per Lease</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#framework">Framework</a>
          <a href="#intelligence">Intelligence</a>
          <a href="#book">Book</a>
          <a href="#standard">The Standard</a>
        </nav>
        <a className="header-cta" href="#briefing">
          Join the briefing <ArrowIcon />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow light">An open initiative for profitable occupancy</p>
          <h1>
            Measure what
            <br />
            occupancy <em>costs.</em>
            <br />
            Optimize what it <em>earns.</em>
          </h1>
          <p className="hero-dek">
            Cost Per Lease is a new economic framework for connecting demand,
            leasing, retention, revenue, and NOI—built for the people who own
            and operate occupied assets.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#framework">
              Explore the framework <ArrowIcon />
            </a>
            <a className="text-link light-link" href="#book">
              Preview the book <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Cost Per Lease economic model">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <div className="hero-stat">
            <span className="stat-label">The question</span>
            <strong>What did occupancy actually cost?</strong>
          </div>
          <div className="signal signal-a">Demand</div>
          <div className="signal signal-b">Lease</div>
          <div className="signal signal-c">NOI</div>
          <div className="signal signal-d">Renewal</div>
        </div>

        <div className="hero-foot">
          <span>For asset owners</span>
          <span>For operators</span>
          <span>For the next generation of real estate leaders</span>
        </div>
      </section>

      <section className="manifesto section-pad">
        <div>
          <p className="eyebrow">The defining idea</p>
          <p className="section-index">01 / The thesis</p>
        </div>
        <div className="manifesto-copy">
          <h2>
            Occupancy is not the goal.
            <br />
            <span>Profitable occupancy is.</span>
          </h2>
          <p>
            Multifamily has spent decades measuring occupancy while failing to
            fully measure the economic system required to create it. A property
            can be 95% occupied and still underperform one at 94%.
          </p>
          <p>
            The better question is not simply, “Are we full?” It is: “What did
            it cost to create each occupied unit, how durable is that occupancy,
            and how much cash flow did it produce?”
          </p>
        </div>
      </section>

      <section className="framework section-pad" id="framework">
        <div className="section-heading">
          <div>
            <p className="eyebrow accent">A shared economic language</p>
            <h2>One metric.<br />Four layers of truth.</h2>
          </div>
          <p>
            Marketing spend divided by leases is a useful start. It is not the
            whole system. The Cost Per Lease framework moves from channel
            performance to asset economics.
          </p>
        </div>
        <div className="metric-list">
          {metricLayers.map((metric) => (
            <article className="metric-row" key={metric.name}>
              <span className="metric-number">{metric.number}</span>
              <h3>{metric.name}</h3>
              <p className="metric-formula">{metric.formula}</p>
              <p className="metric-detail">{metric.detail}</p>
            </article>
          ))}
        </div>
        <div className="framework-note">
          <span>Related measure</span>
          <strong>Cost Per Occupied Unit</strong>
          <p>
            The cost of maintaining revenue-producing occupancy over a defined
            period—so renewals and retention receive the weight they deserve.
          </p>
        </div>
      </section>

      <section className="system section-pad" id="intelligence">
        <div className="system-intro">
          <p className="eyebrow">The connected system</p>
          <h2>From influence to income.</h2>
          <p>
            Occupancy Intelligence reveals the causal chain behind performance,
            giving operators and owners a decision system—not another dashboard.
          </p>
        </div>
        <div className="system-flow" aria-label="The occupancy system">
          {systemSteps.map((step, index) => (
            <div className="system-step" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
        <div className="intelligence-loop">
          <div className="loop-center">
            <span>Occupancy</span>
            <strong>Intelligence</strong>
          </div>
          {[
            "Observe",
            "Understand",
            "Predict",
            "Decide",
            "Act",
            "Learn",
          ].map((item, index) => (
            <div className={`loop-item loop-item-${index + 1}`} key={item}>
              <span>{index + 1}</span> {item}
            </div>
          ))}
        </div>
      </section>

      <section className="book section-pad" id="book">
        <div className="book-cover-wrap">
          <div className="book-shadow" />
          <div className="book-cover">
            <div className="cover-top">The new economics of occupancy</div>
            <div className="cover-mark">C÷L</div>
            <h2>Cost<br />Per<br />Lease</h2>
            <div className="cover-bottom">Coming soon</div>
          </div>
        </div>
        <div className="book-content">
          <p className="eyebrow accent">The open book</p>
          <h2>A new operating system for profitable occupancy.</h2>
          <p className="book-dek">
            <em>Cost Per Lease: The New Economics of Occupancy</em> gives the
            industry a sharper way to understand acquisition, retention, and
            asset performance. The book will be published openly, chapter by
            chapter.
          </p>
          <div className="book-outline">
            {bookParts.map((item) => (
              <details key={item.part}>
                <summary>
                  <span>{item.part}</span>
                  <strong>{item.title}</strong>
                  <i aria-hidden="true">+</i>
                </summary>
                <p>{item.copy}</p>
              </details>
            ))}
          </div>
          <a className="button button-dark" href="#briefing">
            Get the first chapter <ArrowIcon />
          </a>
        </div>
      </section>

      <section className="standard section-pad" id="standard">
        <div className="standard-lead">
          <p className="eyebrow light">More than a book</p>
          <h2>Building the open standard for occupancy economics.</h2>
          <p>
            A neutral home for the definitions, tools, benchmarks, research,
            and operating practices that move the industry forward.
          </p>
        </div>
        <div className="standard-grid">
          {[
            ["The CPL Standard", "Formal definitions, formulas, and reporting rules."],
            ["CPL Calculator", "A practical model for measuring true leasing economics."],
            ["CPL Benchmark", "Anonymous comparisons by market and asset class."],
            ["CPL Index", "A recurring signal of industry-wide leasing efficiency."],
            ["CPL Research", "Original studies on demand, retention, revenue, and NOI."],
            ["CPL Playbooks", "Templates that turn the framework into operating practice."],
          ].map(([title, copy], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <small>{index < 2 ? "In development" : "On the roadmap"}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="briefing section-pad" id="briefing">
        <div className="briefing-copy">
          <p className="eyebrow">Early access</p>
          <h2>Help define the economics of profitable occupancy.</h2>
          <p>
            Join owners, operators, and industry builders receiving the first
            chapters, framework updates, research releases, and invitations to
            contribute to the CPL Standard.
          </p>
          <div className="briefing-points">
            <span>First chapter</span>
            <span>Benchmark research</span>
            <span>CPL tools</span>
          </div>
        </div>
        <div className="form-shell">
          <iframe
            title="Join the Cost Per Lease briefing"
            src="https://tally.so/embed/Zjbee0?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
          />
          <a
            className="form-fallback"
            href="https://tally.so/r/Zjbee0"
            target="_blank"
            rel="noreferrer"
          >
            Open the signup form <ArrowIcon />
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <span className="brand-mark footer-mark" aria-hidden="true">
            C<span>÷</span>L
          </span>
          <p>
            An open research initiative advancing the economics of profitable
            occupancy.
          </p>
        </div>
        <div className="footer-links">
          <a href="#framework">Framework</a>
          <a href="#book">Book</a>
          <a href="#standard">Standard</a>
          <a href="#briefing">Briefing</a>
        </div>
        <div className="footer-meta">
          <span>© 2026 Cost Per Lease</span>
          <span>Built for better occupancy.</span>
        </div>
      </footer>
    </main>
  );
}
