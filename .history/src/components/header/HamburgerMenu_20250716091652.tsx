"use client"
import {useState} from "react"
import styles from "./HamburgerMenu.module.scss"
import { FiAlignRight } from "react-icons/fi";



export default function HamburgerMenu(){
    const [isOpen,setIsOpen]=useState(false)
    return(
        <nav className={styles.navbar}>
            <div>

            </div>
           
            
            <ul className={`${styles.menu} ${isOpen? styles.show : ""}`}>
                <li><a>Sobre Mim</a></li>
                <li><a>Projetos</a></li>
                <li><a>Tecnologias</a></li>
                <li><a>Contatos</a></li>
            </ul>
          
        </nav>
    )
}