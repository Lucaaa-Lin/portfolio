import { personal } from '../data'
import styles from './Hero.module.css'

const heroTechBadges = [
  'React', 'TypeScript', 'HTML / CSS', 'Vite',
  'Sanity CMS', 'Python', 'FastAPI', 'Figma',
]

export default function Hero() {
  // Split tagline so the italic word renders correctly
  const tagline = personal.tagline
  const italicWord = personal.taglineItalic
  const parts = tagline.split(italicWord)

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.tag}>
        <span className={styles.dot} />
        {personal.available ? 'Open to work' : 'Not available'} · {personal.location}
      </div>

      <h1 className={styles.h1}>
        {parts[0]}
        <em>{italicWord}</em>
        {parts[1]}
      </h1>

      <p className={styles.sub}>
        I build thoughtful web experiences — from real vintage watch platforms to full-stack desktop apps.
        React, CSS, and genuine product thinking.
      </p>

      <div className={styles.btnRow}>
        <a href="#projects" className={styles.btnPrimary}>
          View projects
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
        <a href="#contact" className={styles.btnSecondary}>Get in touch</a>
        <a href={personal.resume} className={styles.btnSecondary} target="_blank" rel="noreferrer">
          Resume
          <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
          </svg>
        </a>
      </div>

      <div className={styles.badges}>
        {heroTechBadges.map(b => (
          <span key={b} className={styles.badge}>{b}</span>
        ))}
      </div>
    </section>
  )
}
