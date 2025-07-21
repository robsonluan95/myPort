import styles from "./page.module.scss";
import HamburgerMenu from "@/_components/header/HamburgerMenu"
import Banner from "@/_components/banner/Banner";
import Projects from "@/_components/myProject/Project";
import Stacks from "@/_components/myStacks/MyStacks";
import About from "@/_components/about/About";
import Footer from "@/_components/footer/Footer";

export default function Home() {
  return (
    <main className={styles.mainStyle}>
      <HamburgerMenu/>
      <Banner/>
      <Projects/>
      <Stacks/>
      <About/>
      <Footer/>
      
      
    </main>
  )
}
