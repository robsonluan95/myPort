import styles from "./Footer.module.scss"

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.conectMeContent}>
                <h1>Conecte-me aqui</h1>

                <button>Aqui</button>
            </div>

            <div className={styles.content}>
                <div>
                    <p>Se você precisa de alguém para desenvolver um aplicativo, site pessoal, comercial ou até mesmo uma simples landing page você está no lugar certo! </p>
                    <p>Realizo as entregas dos projetos através do Github em um repositório privado ou público, com o intuito de manter o código sempre versionado, facilitando o processo de controle de histórico.</p>
                </div>

                <div className={styles.contentNavigation}>
                    <div>
                        <p>
                            <span>Navegação</span>
                        </p>
                        <div>
                            <p>Sobre mim</p>
                            <p>Projetos</p>
                            <p>Tecnologias</p>
                            <p>Contatos</p>
                        </div>
                    </div>

                    <div>
                        <p>
                            <span>Contatos</span>
                            Contatos
                        </p>
                        <div>
                            <p>+87 9 9947-3365</p>
                            <p>rluan9@hotmail.com</p>
                        </div>
                    </div>

                    <div>
                        <p>
                            Obtenha as informações mais recentes
                        </p>
                        <div>
                            <input type="text" placeholder="seu email" />
                        </div>
                    </div>
                </div>
            </div>


            <div className={styles.contentData}>
                <p>Todos os direitos resevados - Robson Luan</p>
                <p>User Terms & Conditions | Privacy Policy</p>
            </div>
        </div>
    )
}