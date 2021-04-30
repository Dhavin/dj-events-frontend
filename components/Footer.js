import styles from '../styles/Footer.module.css';
import Link from 'next/link'
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Copyright &copy; DJ Events 2021 | Dhavin.Inc</p>
            <Link href='/about'>About this Project</Link>
        </footer>
    )
}
