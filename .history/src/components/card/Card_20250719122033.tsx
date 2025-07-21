import styles from "./Card.module.scss"
import Image from "next/image"
import dracoImage from "@/assets/Draco.png"

export default function Card(){
    return (
        <div className={styles.container}>
            <Image alt="Banner do Porjeto" src={dracoImage} width/>
            <div className={styles.content}>
                <h3>Draco Suplemento</h3>
                <div className={styles.contentData}>
                    <p>2024 - 2024 |</p>
                    <p>Full-Stack |</p>
                    <p>Mobile</p>
                </div>
                
            </div>
        </div>
    )
}