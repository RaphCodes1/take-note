'use client';
import styles from './post.module.css'
import { MdDelete } from "react-icons/md";
import { supabase } from '../../lib/supabase';
import Modal from '../modal/modal';
import { useState } from 'react';
export default function Post({id,title,content,triggerReload}){

    const deleteNote = async ()=>{
        const { error } = await supabase
        .from('notes')
        .delete()
        .eq('id', id)
        if(error)
            console.log(error);
        else
        {
            console.log("row succesfully deleted");
            triggerReload();
        }
    }

    const truncateContent = (text) =>{
        if(text.length > 80)
            return text.substring(0,140) + '.';
        return text;
    }

    const truncateTitle = (text) =>{
        if(text.length > 19)
            return text.substring(0,19) + '.';
        return text;
    }
    const setVisible = () =>{
        console.log("I am clicked");
    }
    const [visible,changeVisible] = useState(false);
    return(
        <>
        <Modal title={title} content={content} setVisible={changeVisible} visible={visible}>
            <div className={styles.mainContainer}>
                <main className={styles.post}>
                    <div onClick={() => changeVisible(true)}>
                        <div className={styles.title}>
                            <h1>{truncateTitle(title)}</h1>
                        </div>
                        <div className={styles.paragraph}>
                            <p>{truncateContent(content)}</p>
                        </div>
                    </div>
                </main>
                <div className={styles.deleteBtn}>
                    <button onClick={deleteNote}> <MdDelete size={23}/></button>
                </div>
            </div>
        </Modal>
        </>
    );
}