import { Link } from 'react-router-dom';
import styles from './Header.module.scss'

export default function Header() {
    const logo = require("../../assets/images/logo.png") as string;
    const logout = require("../../assets/images/logout.png") as string;
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt="Logo" className={styles.img} />
                <div>
                    <p className={styles.title}>Biblioteca</p>
                    <p className={styles.subtitle}>Virtual</p>
                </div>
            </div>
            <Link to='/'>
                <img src={logout} alt="Livros" className={styles.logout} />
            </Link>
        </header>
    )
}
