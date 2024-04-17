import styles from './Header.module.css';

import labLogo from '../assets/lab-logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={labLogo} alt="logo da lab2dev" ></img>
        </header>
    );
}