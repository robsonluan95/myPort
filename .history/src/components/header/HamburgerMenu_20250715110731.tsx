"use client"
import {useState} from "react"
import styles from "./HamburgerMenu.module.scss"


export default function HamburgerMenu(){
    const [isOpen,setIsOpen]=useState(false)
    return(
        <nav className={styles.nav}>
            <div>
                <a>Robson Luan</a>
                
            </div>
            
            <div>
                <a>Sobre Mim</a>
                <a>Projetos</a>
                <a>Tecnologias</a>
                <a>Contatos</a>
            </div>
        </nav>
    )
}