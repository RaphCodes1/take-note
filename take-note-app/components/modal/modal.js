'use client';
import styles from './modal.module.css';


export default function Modal({children,title,content,setVisible,visible}){
    return (
        <>
            <div className={`${visible ? '': styles.visible}${styles.backdrop}`} onClick={() => setVisible(false)}></div>
            {visible && (
            <dialog open className={styles.modal}>
                <div className={styles.exit}>
                <button onClick={() => setVisible(false)}>X</button>
                </div>
                <h1>{title}</h1>
                <p>{content}</p>
            </dialog>
            )}
            {children}
        </>
    );
}