import { personal } from '../data'
import styles from './About.module.css'

const IconPin = () => (
  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
)
const IconMail = () => (
  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
)
const IconLink = () => (
  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
  </svg>
)
const IconDownload = () => (
  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
)

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <p className={styles.label}>About me</p>
      <div className={styles.grid}>
        <div className={styles.text}>
          {personal.bio.map((para, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
          ))}
        </div>
        <div className={styles.card}>
          <div className={styles.row}>
            <IconPin />{personal.location}
          </div>
          <div className={styles.row}>
            <IconMail /><a href={`mailto:${personal.email}`}>{personal.email}</a>
          </div>
          <div className={styles.row}>
            <IconLink /><a href={personal.github} target="_blank" rel="noreferrer">{personal.github.replace('https://', '')}</a>
          </div>
          <div className={styles.row}>
            <IconLink /><a href={personal.linkedin} target="_blank" rel="noreferrer">{personal.linkedin.replace('https://', '')}</a>
          </div>
          <div className={styles.row}>
            <IconDownload /><a href={personal.resume} target="_blank" rel="noreferrer">Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  )
}
