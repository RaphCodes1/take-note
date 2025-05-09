'use client';
import styles from './newNote.module.css'
import Link from 'next/link';
import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useRouter } from 'next/navigation';

export default function NewNote(){
    const [noteContent, setContent ] = useState({
        title:'',
        content:'',
    });

    const router = useRouter();

    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log("i am clicked");
        const { data, error } = await supabase
        .from('notes')
        .insert([{
            title: noteContent.title,
            content: noteContent.content,
        },])
        if(error)
            console.log(error);
        else
        {
            console.log("Saved\n",data);
            router.push('/');
        }
    }
    return (
        <>
        <main className={styles.newNoteMain}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.title}>
                        <label htmlFor="title">Title</label>
                        <input id="title" 
                            name="title" 
                            type="text" 
                            placeholder="Enter here" 
                            value={noteContent.title}
                            onChange={(e)=>setContent((prev) => ({
                                ...prev, title: e.target.value
                            }))}
                            required />
                    </div>
                    <div className={styles.body}>
                        <textarea id="content" 
                            name="content" 
                            required 
                            value={noteContent.content}
                            onChange={(e)=>setContent((prev) => ({
                                ...prev, content: e.target.value
                            }))}
                            rows={3} />
                    </div>
                    <div className={styles.actions}>
                        <Link href='/'>Cancel</Link>
                        <button type="submit">Submit</button>
                    </div>
                </form>
        </main>
        </>
    );
}