
import styles from "./page.module.scss";
import Header from "@/components/header/Header"
import Banner from "@/components/banner/banner";

export default function Home() {
  return (
    <main>
      <Header/>
      <Banner/>
      <h1 className={styles.teste}>Teste</h1>
      
    </main>
  )
}
