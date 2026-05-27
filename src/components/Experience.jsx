import { experience } from '../data'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <p className={styles.label}>Experience</p>
      <div>
        {experience.map((item, i) => (
          <div key={i} className={styles.item}>
            <div className={styles.date}>{item.date}</div>
            <div>
              <p className={styles.company}>{item.company}</p>
              <p className={styles.role}>{item.role}</p>
              <p className={styles.desc}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
