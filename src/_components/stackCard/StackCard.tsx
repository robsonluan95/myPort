import React from 'react'
import Image from "next/image"
import styles from "./StackCard.module.scss"
import figma from "@/assets/mask.png"

export default function stackCard(){
  return (
    <div className={styles.container}>
        <Image src={figma} alt="Image da stack" />
        <p>{"FIGMA"}</p>
    </div>
  )
}
