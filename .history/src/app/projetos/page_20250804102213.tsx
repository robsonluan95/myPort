import Footer from "@/_components/footer/Footer";
import Image from "next/image";
import styles from "./page.module.scss";

export default function projetos() {
    return (
        <div className={styles.container}>
       
            <div className={styles.bannerProject}>

                <Image src="./assets/banner.jpg" alt="Capa do Porjeto" width={}/>
            </div>
            <div>
                <p> 2024 -2024 | Full-Stack | Mobile</p>
                <h1>DRACO SUPLEMENTOS</h1>
                <h3>E-commerce | São José do Belmonte - PE</h3>
            </div>

            <div>
                <button>GitHub</button>
                <button>Acesso ao site</button>
                <button>Figma</button>
            </div>
            <div>
                <h3>Tecnologias Usadas</h3>
                <div>
                    {"Imagens das tecnologias usadas"}
                    <div>
                        <Image src="" alt="Figma Icone" />
                        <p>FIGMA</p>
                    </div>
                </div>
            </div>
            <div>
                <h3>Descrição</h3>
                <p>A Draco Suplementos foi desenvolvida com um forte enfoque na qualidade e na experiência do usuário, utilizando tecnologias modernas que garantem eficiência e robustez. O front-end foi construído com Next.js, um framework React que permite a renderização tanto do lado do cliente quanto do servidor, proporcionando uma experiência rápida e fluida. A aplicação é enriquecida com bibliotecas como React Toastify para notificações e Swiper para um controle de carrosséis de produtos, melhorando a interação do usuário.</p>
                <p>No que diz respeito ao estilo, optei por Sass, que facilita a escrita de estilos mais organizados e reutilizáveis. O uso de Axios para chamadas de API e jwt-decode para decodificação de tokens JWT assegura que a comunicação com o back-end seja segura e eficiente.</p>
                <p>No back-end, utilizei Node.js com Express para construir uma API robusta. A integração com o Prisma como ORM facilita o gerenciamento do banco de dados, enquanto bcryptjs é utilizado para a segurança das senhas. A configuração de variáveis de ambiente é feita com dotenv, garantindo que informações sensíveis permaneçam seguras.</p>
                <p>A estrutura do projeto é sustentada por TypeScript, que oferece tipagem estática e ajuda a prevenir erros durante o desenvolvimento. Com ferramentas como ts-node-dev, o desenvolvimento se torna ágil, permitindo um fluxo de trabalho eficiente e produtivo.</p>
                <p>Com dedicação e esforço, transformei a Draco Suplementos em uma plataforma completa e confiável, oferecendo aos nossos clientes a melhor experiência na busca por suplementos de qualidade. Estamos comprometidos em continuar inovando e superando as expectativas de nossos usuários.</p>
            </div>
            <Footer/>
        </div>
    )
}