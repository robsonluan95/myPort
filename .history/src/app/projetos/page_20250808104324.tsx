import Footer from "@/_components/footer/Footer";
import Image from "next/image";
import styles from "./page.module.scss";
import banner from "@/assets/banner.jpg"
import StackCard from "@/_components/stackCard/StackCard";
import CustomButton from "@/_components/button/CustomButton";


export default function projetos() {
    return (
        <div className={styles.container}>

            <div className={styles.bannerProject}>

                <Image src={banner} alt="Capa do Porjeto" fill objectFit="cover" />

                <div className={styles.overlayContent}>
                    <div className={styles.dateContent}>
                        <p> 2024 -2024 | Full-Stack | Mobile</p>
                        <h1>DRACO SUPLEMENTOS</h1>
                        <h3>E-commerce | São José do Belmonte - PE</h3>
                    </div>

                    <div className={styles.linkContent}>
                        <CustomButton name={"Github"} variant={'gradient'}/>
                        <CustomButton name={"Acesso ao site"} variant={'black'}/>
                        <CustomButton name={"Figma"}/>
                    </div>

                </div>
            </div>


            <div className={styles.contentStack}>
                <h3>Tecnologias Usadas</h3>
                <div className={styles.imageStack}>
                    <StackCard />
                    <StackCard />
                    <StackCard />
                    <StackCard />
                    <StackCard />
                    <StackCard />
                    
                </div>
            </div>
            <div className={styles.contentText}>
                <h3>Descrição</h3>
                <div>

                </div>
            </div>
            <Footer />
        </div>
    )
}