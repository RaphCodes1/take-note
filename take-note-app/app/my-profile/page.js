'use client'
import { supabase } from '../../lib/supabase';
import styles from './page.module.css'
import { useRouter } from 'next/navigation';

export default function SearchPage(){

    const router = useRouter();
    const signOut = async() =>{
        const { error } =  await supabase.auth.signOut();
        if(error)
            console.log(error);
        else
        {
            console.log("signed out");
            router.push('/login');
        }
    }
    return (
        <>
            <main className={styles.searchMain}>
                <button onClick={signOut}>sign out</button>
            </main>
        </>
    );
}