'use client';

import { useRouter } from 'next/navigation';
import styles from './modal.module.css'

export default function Modal({children}){
    const router = useRouter();
    return (
        <>
            <div className={styles.backdrop} onClick={() => router.push('/')}></div>
            <dialog open className={styles.modal}>
                <div className={styles.exit}>
                    <button onClick={() => {router.push('/')}}> X </button>
                </div>
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat fermentum urna, ut sollicitudin massa. Cras fermentum volutpat dignissim. Duis mattis purus eget placerat egestas. Nulla pharetra iaculis suscipit. Duis mattis ullamcorper nisi, sit amet euismod dui maximus ut. Curabitur commodo volutpat dui, at luctus dolor feugiat vitae. Quisque sagittis, metus eu fringilla efficitur, orci libero porta nisl, a congue turpis quam sit amet arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla pellentesque libero in magna accumsan accumsan. Curabitur laoreet imperdiet nibh sit amet maximus. Praesent semper faucibus ante vestibulum vulputate. Aenean eget fringilla ante.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat fermentum urna, ut sollicitudin massa. Cras fermentum volutpat dignissim. Duis mattis purus eget placerat egestas. Nulla pharetra iaculis suscipit. Duis mattis ullamcorper nisi, sit amet euismod dui maximus ut. Curabitur commodo volutpat dui, at luctus dolor feugiat vitae. Quisque sagittis, metus eu fringilla efficitur, orci libero porta nisl, a congue turpis quam sit amet arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla pellentesque libero in magna accumsan accumsan. Curabitur laoreet imperdiet nibh sit amet maximus. Praesent semper faucibus ante vestibulum vulputate. Aenean eget fringilla ante.
                </p>
            </dialog>
            {children}
        </>
    );
}