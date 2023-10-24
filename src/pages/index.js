import AboutMe from "@/Components/HomePage/AboutMe";
import Hero from "@/Components/HomePage/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>MIRAJ HOSSEN PORTFOLIO | WEB DEVELOPER</title>
      </Head>

      <Hero />
      <AboutMe/>
    </>
  );
}
