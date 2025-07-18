"use client"
import { useState } from "react"
import styles from "./HamburgerMenu.module.scss"
import { FiAlignRight } from "react-icons/fi";



export default function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false)
    const isMobile = window.innerWidth <= 786
    useEffect(()=>{
        
    },[isMobile])
    return (
        <nav className={`${styles.navbar} ${isOpen ? styles.open : ""}`}>
            <div className={`${styles.navMenu}`}>
                <div>
                    <a>Robson Luan</a>
                </div>
                <div>
                    <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu" >
                        <FiAlignRight size={30} color="rgba(253, 253, 253, 1)" />
                    </button>
                </div>
            </div>


            <ul className={`${styles.menu} ${isOpen ? styles.show : ""}`}>
                <li><a>Sobre Mim</a></li>
                <li><a>Projetos</a></li>
                <li><a>Tecnologias</a></li>
                <li><a>Contatos</a></li>
            </ul>

        </nav>
    )
}