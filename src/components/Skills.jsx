import { skills } from '../data'
import styles from './Skills.module.css'

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <p className={styles.label}>Skills</p>
      <div className={styles.grid}>
        {skills.map(group => (
          <div key={group.label} className={styles.group}>
            <p className={styles.groupLabel}>{group.label}</p>
            <div className={styles.tags}>
              {group.items.map(item => (
                <span key={item} className={styles.tag}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
