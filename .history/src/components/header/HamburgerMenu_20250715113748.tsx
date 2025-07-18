"use client"
import {useState} from "react"
import styles from "./HamburgerMenu.module.scss"
import { FiAlignRight } from "react-icons/fi";



export default function HamburgerMenu(){
    const [isOpen,setIsOpen]=useState(false)
    return(
        <nav className={styles.navbar}>
            <div>
                <a>Robson Luan</a>
            </div>
            <div>
                <button className={styles.hamburger} onClick={()=>setIsOpen(!isOpen)} aria-label="Toggle Menu" >
                    <FiAlignRight size={30} color="#fdfdfdff"/>
                </button>
            </div>
            
            <ul>
                <li><a</li>
            </ul>
          
        </nav>
    )
}