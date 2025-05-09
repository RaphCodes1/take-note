'use client'
import styles from './main-header.module.css'
import Image from 'next/image';
import logoImg from '../../app/favicon.ico'
import Link from 'next/link';
export default function MainHeader(){
    return(
        <header className={styles.HeaderMain}>
            <Link href='/' className={styles.logo}>
                <Image src={logoImg} alt="take note" width={120} height={120}></Image>
                <h1>Take Note</h1>
            </Link>
            <nav className={styles.navBar}>
                <ul>
                    <li>
                        <Link href='/my-profile'>My profile</Link>
                    </li>
                </ul>
                <Link href='/new-note'>
                    <button>New Note</button>
                </Link>
            </nav>
        </header>
    );
}