import styles from './CaseStudyPVW.module.css'
import pvwHero from '../assets/hero.png'
import pvwHome from '../assets/pvw-home.mov'
import pvwMenu from '../assets/pvw-menu.mov'
import pvwPurchase from '../assets/pvw-purchase.mov'

const goals = [
  { icon: '🎯', title: 'Real user need', desc: 'Built for a friend whose Facebook watch business was getting requests for a proper website.' },
  { icon: '🎨', title: 'Brand experience over listing', desc: 'Replace cluttered marketplace UX with a refined, editorial product experience.' },
  { icon: '📱', title: 'Responsive & refined', desc: 'A vintage aesthetic that holds up across every screen size and device.' },
  { icon: '🗄️', title: 'Scalable CMS pipeline', desc: 'Structured Sanity schemas for watches, images, specs, and metadata.' },
]

const features = [
  {
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
      </svg>
    ),
    title: 'Filter, sort & search',
    desc: 'Real-time filtering by brand, gender, and movement type. Sort by newest or price. Global search across the full catalogue.',
  },
  {
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 21h18M4.5 10.5h.008v.008H4.5V10.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    title: 'Multi-image gallery',
    desc: 'Each product page features a switchable image gallery pulled from Sanity, with thumbnail navigation and condition detail shots.',
  },
  {
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    title: 'Dynamic routing',
    desc: 'Every watch has its own URL generated from the Sanity slug field — clean, shareable, and SEO-friendly.',
  },
  {
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    title: 'Inquiry flow',
    desc: 'Message-to-purchase model via Formspree — with the watch reference automatically passed through the form, replacing a traditional checkout.',
  },
]

const stack = ['React + Vite', 'React Router', 'Sanity CMS', 'Formspree', 'Vercel']

const outcomes = [
  { num: '$0', label: 'Monthly SaaS cost' },
  { num: '100%', label: 'Code ownership' },
  { num: 'Live', label: 'precisionvintage.com.au' },
]

function ImgPlaceholder({ label, tall }) {
  return (
    <div className={`${styles.imgPlaceholder} ${tall ? styles.tall : ''}`}>
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 21h18M4.5 10.5h.008v.008H4.5V10.5z" />
      </svg>
      <span>{label}</span>
    </div>
  )
}

export default function CaseStudyPVW({ onBack }) {
  return (
    <article className={styles.page}>

      {/* Back */}
      <button className={styles.back} onClick={onBack} aria-label="Back to projects">
        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 12H5M12 5l-7 7 7 7" />
        </svg>
        Back to projects
      </button>

      {/* ── HEADER ── */}
      <header className={styles.header}>
        <div className={styles.pills}>
          <span className={`${styles.pill} ${styles.pillGreen}`}>● Live</span>
          <span className={styles.pill}>Web Development</span>
          <span className={styles.pill}>UX / UI</span>
          <span className={styles.pill}>CMS</span>
          <span className={styles.pill}>2026 – Present</span>
        </div>
        <h1 className={styles.h1}>Precision Vintage<br />Watches</h1>
        <p className={styles.lead}>
          A refined online platform for vintage watch collectors — built from a real friend's business need,
          designed to replace the cluttered marketplace experience with something that actually feels like the product deserves.
        </p>
        <a
          href="https://www.precisionvintage.com.au/"
          target="_blank"
          rel="noreferrer"
          className={styles.btnPrimary}
        >
          Live site
          <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </header>

      {/* ── HERO IMAGE ── */}
      <section className={styles.section}>
        <img src={pvwHero} alt="PVW homepage" className={styles.heroImg} />
      </section>

      {/* ── OVERVIEW ── */}
      <section className={styles.section}>
        <p className={styles.sectionLabel}>Overview</p>
        <h2 className={styles.h2}>A real business, a real problem</h2>
        <p className={styles.body}>
          This project started with a genuine user need. A friend had been selling vintage watches on Facebook Marketplace,
          and as his business grew, more and more customers started asking whether he had a proper website.
          When I heard about it, I offered to take it on — designing and building the platform from scratch.
        </p>
        <p className={styles.body} style={{ marginTop: 10 }}>
          The goal was to create something that felt like the watches deserved: clean, editorial, and immersive —
          a real alternative to the noise of marketplace platforms, built for collectors who care about presentation as much as the product itself.
        </p>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className={styles.section}>
        <p className={styles.sectionLabel}>The problem</p>
        <h2 className={styles.h2}>Marketplaces sell listings. This needed to sell trust.</h2>
        <p className={styles.body}>
          Most second-hand watch platforms optimise for volume, not experience. For someone browsing a high-value vintage piece,
          that creates a real problem:
        </p>
        <div className={styles.goalGrid} style={{ marginTop: 16 }}>
          {goals.map(g => (
            <div key={g.title} className={styles.goalCard}>
              <span className={styles.goalIcon} aria-hidden="true">{g.icon}</span>
              <h3 className={styles.h3}>{g.title}</h3>
              <p className={styles.cardBody}>{g.desc}</p>
            </div>
          ))}
        </div>
        <p className={styles.body} style={{ marginTop: 16 }}>
          For vintage watch buyers, the purchase is never purely functional — it involves collecting, aesthetics, and brand culture.
          The platform needed to reflect that.
        </p>
      </section>

      {/* ── DESIGN ── */}
      <section className={styles.section}>
        <p className={styles.sectionLabel}>Design direction & UX thinking</p>
        <h2 className={styles.h2}>Minimal, editorial, focused on the object</h2>
        <p className={styles.body}>
          The visual language was built around one idea: get out of the way of the watch.
          Low-saturation neutrals, generous white space, EB Garamond as the primary typeface, and large product photography —
          all designed to keep the user's attention on dial details, aging textures, and the story of each piece.
        </p>
        <p className={styles.body} style={{ marginTop: 10 }}>
          UX decisions followed the same principle:
        </p>
        <div className={styles.featureList} style={{ marginTop: 16 }}>
          {[
            { title: 'Sticky navigation', desc: 'Keeps filtering accessible during long catalogue browsing without interrupting the visual flow.' },
            { title: 'Drawer menu and filter on mobile', desc: 'Brand, gender, movement, and sort controls in a slide-in drawer — less clutter, same power.' },
            { title: 'Product detail page', desc: 'Full-width hero image, thumbnail gallery with left/right switching, and a clean information hierarchy.' },
            { title: 'Inquiry flow over checkout', desc: 'An enquiry form replaces a traditional cart — more appropriate for high-value, one-of-a-kind vintage pieces.' },
          ].map(f => (
            <div key={f.title} className={styles.featureItem}>
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true" style={{ color: 'var(--text-tertiary)', flexShrink: 0, paddingTop: 2 }}>
                <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className={styles.h3}>{f.title}</h3>
                <p className={styles.body}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TECH & BUILD ── */}
      <section className={styles.section}>
        <p className={styles.sectionLabel}>Tech & build process</p>
        <h2 className={styles.h2}>From Webflow MVP to React rebuild</h2>

        <p className={styles.body} style={{ marginBottom: 16 }}>The project was built in two distinct phases:</p>

        <div className={styles.goalCard} style={{ marginBottom: 12 }}>
          <h3 className={styles.h3} style={{ marginBottom: 6 }}>Phase 1 — Webflow MVP</h3>
          <p className={styles.cardBody}>
            Started with Webflow to validate the concept quickly and get the site live.
            Used Webflow CMS for product management, Jetboost for brand/gender/movement filtering and sorting,
            and custom JavaScript for image switching, thumbnail sync, modal interactions, scroll locking, and overlay control.
          </p>
        </div>

        <div className={styles.goalCard}>
          <h3 className={styles.h3} style={{ marginBottom: 6 }}>Phase 2 — React rebuild</h3>
          <p className={styles.cardBody}>
            As the project grew, Webflow's limitations became clear: ongoing subscription costs, constraints on complex interactions,
            and limited scalability. I migrated the entire platform to React + Vite + Sanity CMS.
            The rebuild added dynamic routing, global search, state-based filter logic, improved component reuse,
            and a significantly more maintainable codebase.
          </p>
        </div>

        <div className={styles.flow} style={{ marginTop: 20 }}>
          {stack.map((s, i) => (
            <span key={s} className={styles.flowWrap}>
              <span className={styles.flowStep}>{s}</span>
              {i < stack.length - 1 && <span className={styles.flowArr} aria-hidden="true">→</span>}
            </span>
          ))}
        </div>
      </section>
      {/* ── SCREENSHOTS ── */}
      <section className={styles.section}>
        <p className={styles.sectionLabel}>Screens</p>
        <div className={styles.videoGrid}>
          <div className={styles.videoCard}>
            <video autoPlay loop muted playsInline className={styles.video}>
              <source src={pvwHome} type="video/mp4" />
            </video>
            <p className={styles.videoLabel}>Homepage</p>
          </div>
          <div className={styles.videoCard}>
            <video autoPlay loop muted playsInline className={styles.video}>
              <source src={pvwMenu} type="video/mp4" />
            </video>
            <p className={styles.videoLabel}>Navigation & menu</p>
          </div>
          <div className={styles.videoCard}>
            <video autoPlay loop muted playsInline className={styles.video}>
              <source src={pvwPurchase} type="video/mp4" />
            </video>
            <p className={styles.videoLabel}>Inquiry flow</p>
          </div>
        </div>
      </section>

      {/* ── KEY FEATURES ── */}
      <section className={styles.section}>
        <p className={styles.sectionLabel}>Key features</p>
        <h2 className={styles.h2}>What was built</h2>
        <div className={styles.featureList}>
          {features.map(f => (
            <div key={f.title} className={styles.featureItem}>
              <span className={styles.featureIcon} aria-hidden="true">{f.icon}</span>
              <div>
                <h3 className={styles.h3}>{f.title}</h3>
                <p className={styles.body}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── contrast ── */}
      <section className={styles.section}>
        <p className={styles.sectionLabel}>Before & After</p>
        <div className={styles.contrastGrid}>

          {/* 左列标题 */}
          <p className={styles.contrastLabel}>Webflow</p>
          <p className={styles.contrastLabel}>React</p>

          {/* 第一组 */}
          <ImgPlaceholder label="Webflow — Homepage" />
          <ImgPlaceholder label="React — Homepage" />

          {/* 第二组 */}
          <ImgPlaceholder label="Webflow — Catalogue" />
          <ImgPlaceholder label="React — Catalogue" />

          {/* 第三组 */}
          <ImgPlaceholder label="Webflow — Product detail" />
          <ImgPlaceholder label="React — Product detail" />

          {/* 第四组 */}
          <ImgPlaceholder label="Webflow — Mobile" />
          <ImgPlaceholder label="React — Mobile" />

        </div>
      </section>

      {/* ── CHALLENGES ── */}
      <section className={styles.section}>
        <p className={styles.sectionLabel}>Challenges</p>
        <h2 className={styles.h2}>Real problems from a real deployment</h2>

        <div className={styles.featureList}>

          <div className={styles.challengeItem}>
            <h3 className={styles.h3}>1. Page refresh 404 after Vercel deployment</h3>
            <p className={styles.body}>
              After launch, users switching to Desktop Site mode on mobile would get a 404 when refreshing
              or navigating directly to routes like <code className={styles.code}>/products/xxx</code>.
              The root cause: React Router handles routing entirely on the client side —
              these paths don't exist as real files on the server, so Vercel couldn't find them and returned 404.
              The homepage worked fine because <code className={styles.code}>/</code> is the real entry point.
            </p>
            <p className={styles.body} style={{ marginTop: 8 }}>
              The fix was a single <code className={styles.code}>vercel.json</code> file at the project root,
              redirecting all routes back to <code className={styles.code}>index.html</code> and letting React Router take over:
            </p>
            <pre className={styles.codeBlock}>{`{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}`}</pre>
            <p className={styles.body} style={{ marginTop: 8 }}>
              After pushing the change, direct links, page refreshes, and mobile Desktop Mode all worked correctly.
            </p>
          </div>

          <div className={styles.challengeItem}>
            <h3 className={styles.h3}>2. CSS inconsistencies between desktop preview and real devices</h3>
            <p className={styles.body}>
              Pages looked correct in the browser's mobile simulator, but on real iPhones and Android devices,
              elements would render differently — iOS Safari adding border-radius to form inputs,
              tap highlight overlays appearing on click, fonts auto-scaling in certain contexts.
            </p>
            <p className={styles.body} style={{ marginTop: 8 }}>
              I resolved each issue by testing across real devices and overriding platform defaults directly in CSS —
              using <code className={styles.code}>-webkit-appearance: none</code> to strip iOS form styles,
              <code className={styles.code}>-webkit-tap-highlight-color: transparent</code> to remove tap highlights,
              and <code className={styles.code}>-webkit-text-size-adjust: 100%</code> to prevent font scaling.
            </p>
            <p className={styles.body} style={{ marginTop: 8 }}>
              This process made clear that a proper CSS reset at the start of a project — resetting all platform defaults before writing any styles — is far more systematic than patching issues one by one. That's a lesson I've since applied to every new project.
            </p>
          </div>

          <div className={styles.challengeItem}>
            <h3 className={styles.h3}>3. Fixed header creating z-index conflicts with overlays</h3>
            <p className={styles.body}>
              Using <code className={styles.code}>position: fixed</code> on the header caused overlay and lightbox components
              to appear behind it on certain pages. The underlying issue was that fixed positioning creates a new stacking context,
              which can cause child z-index values to behave unexpectedly relative to other layers.
              Resolved by auditing the full component hierarchy, restructuring stacking contexts,
              and establishing a clear z-index scale across the UI.
            </p>
          </div>

        </div>
      </section>

      {/* ── OUTCOME ── */}
      <section className={styles.section}>
        <p className={styles.sectionLabel}>Outcome</p>
        <h2 className={styles.h2}>Results & reflections</h2>
        <div className={styles.stats}>
          {outcomes.map(o => (
            <div key={o.label} className={styles.stat}>
              <div className={styles.statNum}>{o.num}</div>
              <div className={styles.statLabel}>{o.label}</div>
            </div>
          ))}
        </div>
        <p className={styles.body}>
          The platform launched successfully with full desktop and mobile responsive design,
          a CMS-driven product pipeline, dynamic product pages, filtering, sorting, global search,
          and an inquiry workflow. Migrating from Webflow to React eliminated ongoing subscription costs
          and gave complete ownership of the codebase.
        </p>
        <p className={styles.body} style={{ marginTop: 10 }}>
          Future plans include a user system, favourites functionality, payment integration,
          and a more complete e-commerce backend.
        </p>
      </section>

      {/* ── REFLECTION ── */}
      <section className={styles.section}>
        <p className={styles.sectionLabel}>Reflection</p>
        <h2 className={styles.h2}>What this project actually taught me</h2>
        <p className={styles.body}>
          The value of this project isn't the tech stack — it's that every decision was made in response to something real.
          A friend needed a website. Customers wanted to trust the product. The Webflow subscription was costing money.
          The mobile experience was broken. Each problem had a consequence, which made solving it feel like it actually mattered.
        </p>
        <p className={styles.body} style={{ marginTop: 10 }}>
          More than anything, it taught me how to think about trade-offs: when to ship fast with the wrong tool,
          and when to slow down and rebuild properly. That kind of judgment — knowing which technical debt is acceptable
          and which isn't — is something you can only develop by working on something real.
        </p>
      </section>

      {/* ── NEXT PROJECT ── */}
      <section className={`${styles.section} ${styles.last}`}>
        <p className={styles.sectionLabel}>Next project</p>
        <div className={styles.nextProject}>
          <div>
            <p className={styles.nextType}>Full Stack · Desktop App</p>
            <p className={styles.nextName}>Automated Report Generator →</p>
          </div>
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </section>

    </article>
  )
}
