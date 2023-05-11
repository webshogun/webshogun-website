import Link from 'next/link';
import styles from './../styles/header.module.css';

const Header = () => {
  return ( 
    <header>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <nav className={styles.menu}>
            <Link className={styles.logo} href='/'>webshogun</Link>
            <Link className={styles.link} href='/works'>Works</Link>
            <Link className={styles.link} href='/blog'>Blog</Link>
          </nav>
          <button className={styles.theme}>
            <img className={styles.icon} src='/images/sun.svg' alt='Sun' />
          </button>
        </div>
      </div>
    </header>
   );
}

export default Header;