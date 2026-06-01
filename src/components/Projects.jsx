import { projects, miniProjects } from '../data'
import styles from './Projects.module.css'

const PlaceholderWatch = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="#9C9C96" strokeWidth="1.2" width="40" height="40">
    <circle cx="24" cy="24" r="18" /><circle cx="24" cy="24" r="12" /><circle cx="24" cy="24" r="4" />
    <line x1="24" y1="6" x2="24" y2="12" /><line x1="24" y1="36" x2="24" y2="42" />
    <line x1="6" y1="24" x2="12" y2="24" /><line x1="36" y1="24" x2="42" y2="24" />
    <line x1="24" y1="20" x2="24" y2="24" strokeWidth="2" />
    <line x1="24" y1="24" x2="28" y2="24" strokeWidth="1.5" />
  </svg>
)

const PlaceholderReport = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="#9C9C96" strokeWidth="1.2" width="40" height="40">
    <rect x="8" y="6" width="32" height="36" rx="2" />
    <line x1="14" y1="16" x2="34" y2="16" /><line x1="14" y1="22" x2="28" y2="22" />
    <line x1="14" y1="28" x2="30" y2="28" />
    <rect x="20" y="34" width="8" height="4" rx="1" />
  </svg>
)

const PlaceholderChart = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="#9C9C96" strokeWidth="1.2" width="40" height="40">
    <rect x="6" y="30" width="8" height="12" rx="1" /><rect x="16" y="22" width="8" height="20" rx="1" />
    <rect x="26" y="16" width="8" height="26" rx="1" /><rect x="36" y="10" width="8" height="32" rx="1" />
    <path d="M8 20 L18 14 L28 18 L38 8" strokeWidth="1.5" />
  </svg>
)

const placeholders = {
  pvw: PlaceholderWatch,
  'report-gen': PlaceholderReport,
  sephora: PlaceholderChart,
}

function BtnPrimary({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={styles.btnPrimary}>
      {children}
    </a>
  )
}

function BtnSecondary({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={styles.btnSecondary}>
      {children}
    </a>
  )
}

function HeroCard({ project, onCaseStudy }) {
  const Placeholder = placeholders[project.id]
  return (
    <div className={`${styles.card} ${styles.heroCard}`}>
      <div className={`${styles.img} ${styles.imgTall}`} style={{ background: '#F0EDE5' }}>
        {project.image
          ? <img src={project.image} alt={project.name} className={styles.imgPhoto} />
          : <><Placeholder /><span>Site screenshot goes here</span></>
        }
      </div>
      <div className={`${styles.body} ${styles.heroBody}`}>
        <div className={styles.liveBadge}><span className={styles.dot} /> Live · Hero project</div>
        <p className={styles.type}>{project.type}</p>
        <h3 className={`${styles.name} ${styles.nameLarge}`}>{project.name}</h3>
        <p className={styles.desc}>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
        </div>
        <div className={styles.links}>
          {project.liveUrl && <BtnPrimary href={project.liveUrl}>Live site ↗</BtnPrimary>}
          {project.hero && (
            <button
              onClick={() => onCaseStudy(project.id)}
              className={styles.btnSecondary}
              style={{ cursor: 'pointer', background: 'transparent', fontFamily: 'inherit' }}
            >
              Case study →
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

function RegularCard({ project }) {
  const Placeholder = placeholders[project.id]
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        {project.image
          ? <img src={project.image} alt={project.name} className={styles.imgPhoto} />
          : <><Placeholder /><span>Screenshot</span></>
        }
      </div>
      <div className={styles.body}>
        {project.status === 'coming-soon' && (
          <span className={styles.statusBadge} style={{ background: '#F3F1EC', color:'#FF4D4F'}}>
            Coming soon
          </span>
        )}
        <p className={styles.type}>{project.type}</p>
        <h3 className={styles.name}>{project.name}</h3>
        <p className={styles.desc}>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
        </div>
        <div className={styles.links} style={{ marginTop: 4 }}>
          {project.githubUrl && <BtnSecondary href={project.githubUrl}>GitHub ↗</BtnSecondary>}
        </div>
      </div>
    </div>
  )
}

export default function Projects({ onCaseStudy }) {
  const heroProject = projects.find(p => p.hero)
  const regularProjects = projects.filter(p => !p.hero)

  return (
    <section id="projects" className={styles.section}>
      <p className={styles.label}>Projects</p>
      <div className={styles.grid}>
        {heroProject && <HeroCard project={heroProject} onCaseStudy={onCaseStudy} />}
        {regularProjects.map(p => <RegularCard key={p.id} project={p} />)}

        <div className={styles.miniRow}>
          {miniProjects.map((mp, i) => (
            <div
              key={mp.id}
              className={styles.mini}
              style={i < miniProjects.length - 1 ? { borderRight: '0.5px solid var(--border)' } : {}}
            >
              <p className={styles.type} style={{ marginBottom: 6 }}>{mp.type}</p>
              <h3 className={styles.name} style={{ fontSize: 15, marginBottom: 6 }}>{mp.name}</h3>
              <p className={styles.desc} style={{ fontSize: 12, marginBottom: 10 }}>{mp.description}</p>
              <a href={mp.url} className={styles.btnSecondary} style={{ fontSize: 11, padding: '5px 12px' }}>
                {mp.linkLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
