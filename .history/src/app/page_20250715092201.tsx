import styles from "./page.module.scss";
import Header from "@/components/header/Header"
import Banner from "@/components/banner/Banner";
import Projects from "@/components/myProject/Project";
import Stacks from "@/components/myStacks/MyStacks";

export default function Home() {
  return (
    <main>
      <Header/>
      <Banner/>
      <Projects/>
      <Stacks/>
      
      
    </main>
  )
}
