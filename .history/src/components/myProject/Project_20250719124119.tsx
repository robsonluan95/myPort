import styles from "./Project.module.scss"
import Card from "@/components/card/Card"
export default function Projects() {
    return (
        <div className={styles.containerProject}>
            <h2>Meus Projetos</h2>
            <div className={styles.contentProject}>

                <Card>
                </Card>
                
            </div>

        </div>
    )
}