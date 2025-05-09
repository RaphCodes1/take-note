'use client';
import styles from './page.module.css'
import Post from "../components/posting/post"
import { supabase } from "../lib/supabase";
import { useEffect, useState } from 'react';
export default function Home() {
  const [notes,setNotes] = useState([]);
  const [loading,setLoading] = useState(true);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect (()=>{
    const fetchNotes = async ()=>{
      const { data,error } = await supabase
      .from('notes')
      .select('*');
      if(error)
        console.log(error);
      else
        setNotes(data);
      setLoading(false);
    }
    fetchNotes();
  },[reloadKey])
  if(loading) return(
    <>
      <main className={styles.MainSection}>
        <p>loading data</p>
      </main>
    </>
  ) 
  return (
    <>
      <main className={styles.MainSection}>
        {notes.length === 0 && <p>no notes so far....</p>}
        {notes && notes.map((note)=>(
          <Post key={note.id} id={note.id} title={note.title} content={note.content} 
          triggerReload={() => setReloadKey(prev => prev + 1)}/> 
        ))}
      </main>
    </>
  );
}
