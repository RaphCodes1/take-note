'use client'
import styles from './page.module.css'
import { supabase } from '../../lib/supabase'
import { useState } from 'react'
import { useRouter } from 'next/navigation';

export default function LoginPage(){
    const [userData, setData] = useState({
        email: '',
        password: '',
    });

    const router = useRouter();

    const login = async (e) => {
        e.preventDefault();
        try{
            let { data, error } = await supabase
            .auth
            .signInWithPassword({
                email: userData.email,
                password: userData.password
            })
            if(data){
                router.push('/');
            }
            else
                console.log(error);
        }catch(error){
            console.log("the error msg");
            console.log(error);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
          ...prev,
          [name]: value,
        }));
    };

    return (
        <main className={styles.loginMain}>
                <h1>Login</h1>
                <form onSubmit={login}>
                    <div className={styles.title}>
                        <label htmlFor="email">Email</label>
                        <input name="email" 
                            type="email"
                            value={userData.email} 
                            onChange={handleChange}
                            placeholder="Enter email" 
                            />
                    </div>
                    <div className={styles.body}>
                        <label htmlFor="password">Password</label>
                        <input name="password" 
                            type="password" 
                            value={userData.password}
                            onChange={handleChange}
                            placeholder="Enter password" 
                            />
                    </div>
                    <div className={styles.signUpArea} onClick={() =>{router.push('/signup')}}>
                        <h3>Create account</h3>
                    </div>
                    <div className={styles.actions}>
                        <button type="submit">Login</button>
                    </div>
                </form>
        </main>
    );
}