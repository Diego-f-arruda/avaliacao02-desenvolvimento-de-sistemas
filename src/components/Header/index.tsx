import { useState } from "react";
import styles from './styles.module.css';

export default function Header(){
    const [openModal, setOpenModal] = useState<boolean>(false);

    function handleClose(){
        setOpenModal(false)
    }

    function handleOpen(){
        setOpenModal(true)
    }

    return(
        <div className={styles.container}>
            
        </div>
    )
}