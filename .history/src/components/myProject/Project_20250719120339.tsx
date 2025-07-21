import styles from "./Project.module.scss"
import Card from "../components/"
export default function Projects() {
    return (
        <div className={styles.containerProject}>
            <h2>Meus Projetos</h2>
            <div className={styles.contentProject}>

                <Card>
                <div>
                    Projeto 2
                </div>
                <div>
                    Projeto 3
                </div>
                <div>
                    Projeto 4
                </div>
                <div>
                    Projeto 5
                </div>
                <div>
                    Projeto 6
                </div>
            </div>

        </div>
    )
}