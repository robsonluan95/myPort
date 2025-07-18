import Image from "next/image"
export default function projetos() {
    return (
        <>
            <div>
                {"Icone para voltar para a Home - tem que ser sobre posto"}
                <Image src="" alt="Icone" />
            </div>
            <div>
                
                {"Colocar Capa com degrade"}
                <Image src="" alt="Capa do Porjeto" />
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
            
            
            </div>
        </>
    )
}