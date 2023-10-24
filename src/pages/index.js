import AboutMe from "@/Components/HomePage/AboutMe";
import Experience from "@/Components/HomePage/Experience";
import Hero from "@/Components/HomePage/Hero";
import Projects from "@/Components/HomePage/Projects";
import Contact from "@/Components/HomePage/contact";
import SkillSet from "@/Components/HomePage/skillSet";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>MIRAJ HOSSEN PORTFOLIO | WEB DEVELOPER</title>
      </Head>

       <Hero />
     <AboutMe />
     <Projects />
    <Experience />
         <SkillSet />
      <Contact/> 
    </>
  );
}
