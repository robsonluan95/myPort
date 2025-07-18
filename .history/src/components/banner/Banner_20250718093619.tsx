import Image from "next/image"
import ImageLog from "@/assets/android-chrome-512x512.png"
import styles from "./Banner.module.scss"
import { CgPlayButtonO } from "react-icons/cg";


export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.aboutMe} >
                <div>
                    <p>Olá,eu sou</p>
                    <h2>Robson Luan</h2>
                    <h3>Desenvolvedor Full-Stack</h3>
                </div>

                <div className={styles.containerButtons}>
                    <button>
                        <CgPlayButtonO size={16} color={green}/>
                        <p>Linkedin</p>
                    </button>
                    <button>
                        <CgPlayButtonO size={16} />
                        <p>GitHub</p>
                    </button>
                </div>

            </div>
            <div>
                <Image src={ImageLog} alt="Arte minha" width={300} height={300} />
            </div>
        </div>
    )
}