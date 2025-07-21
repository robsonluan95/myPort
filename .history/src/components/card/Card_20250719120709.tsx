import styles from "./Card.module.scss"
import Image from "next/image"

export default function Card(){
    return (
        <div className={styles.container}>
            <Image alt="" src={}/>
            <div className={styles.content}>
                <h3>Draco Suplemento</h3>
                <div>
                    <p>2024 - 2024 |</p>
                    <p>Full-Stack |</p>
                    <p>Mobile</p>
                </div>
                
            </div>
        </div>
    )
}