'use client'
import styles from './page.module.css'
import { supabase } from '../../lib/supabase'
import { useState } from 'react'
import { useRouter } from 'next/navigation';

export default function SignUpPage(){
    const [userData, setData] = useState({
        email: '',
        password: '',
    });

    const router = useRouter();

    const signUp = async (e) => {
        e.preventDefault();
        
        let { data, error } = await supabase
        .auth
        .signUp({
            email: userData.email,
            password: userData.password
        })
        if(error){
            console.log(error);
        }
        console.log("user signed up");
        console.log(data);
        if (data?.user && !data.user.confirmed_at) {
            alert("A confirmation email has been sent. Please check your inbox.");
        }
        router.push('/login');

        
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
                <h1>Sign Up</h1>
                <form onSubmit={signUp}>
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
                    <div className={styles.signUpArea} onClick={() =>{router.push('/login')}}>
                        <h3>Already have an account?</h3>
                    </div>
                    <div className={styles.actions}>
                        <button type="submit">Sign Up</button>
                    </div>
                </form>
        </main>
    );
}