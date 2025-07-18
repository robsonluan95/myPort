import Image from "next/image"
import ImageLog from "@/public/android-chrome-512x512.png"

export default function Banner(){
    return (
        <>
            <div>
                <div>
                    <p>Olá,eu sou</p>
                    <h2>Robson Luan</h2>
                    <h3>Desenvolvedor Full-Stack</h3>
                </div>

                <div>
                    <button>Linkedin</button>
                    <button>GitHub</button>
                </div>
                
            </div>
            <div>
                <Image src="@/public/android-chrome-512x512.png" alt="Arte minha " width={300} height={300}/>
            </div>
        </>
    )
}