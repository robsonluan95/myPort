import styles from "./Card.module.scss"

export default function Card(){
    return (
        <div className={styles.container}>
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