import { personal } from '../data'
import styles from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <a href="#hero" className={styles.logo}>{personal.name}</a>
      <ul className={styles.links}>
        {['About', 'Skills', 'Projects', 'Experience'].map(s => (
          <li key={s}>
            <a href={`#${s.toLowerCase()}`}>{s}</a>
          </li>
        ))}
        <li>
          <a href="#contact" className={styles.cta}>Contact</a>
        </li>
      </ul>
    </nav>
  )
}
