"use client"
import {useState} from "react"
import styles from "./HamburgerMenu.module.scss"


export default function HamburgerMenu(){
    return(
        <>
            <div>
                <a></a>
                Robson Luan
            </div>
            
            <div>
                <a>Sobre Mim</a>
                <a>Projetos</a>
                <a>Tecnologias</a>
                <a>Contatos</a>
            </div>
        </>
    )
}