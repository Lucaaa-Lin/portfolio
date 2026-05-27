import { personal } from '../data'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>{personal.name} · {new Date().getFullYear()}</p>
      <p>Built with React + Vite</p>
    </footer>
  )
}
