import styles from "./page.module.scss";
import HamburgerMenu from "@/components/header/HamburgerMenu"
import Banner from "@/components/banner/Banner";
import Projects from "@/components/myProject/Project";
import Stacks from "@/components/myStacks/MyStacks";
import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main cals>
      <HamburgerMenu/>
      <Banner/>
      <Projects/>
      <Stacks/>
      <About/>
      <Footer/>
      
      
    </main>
  )
}
