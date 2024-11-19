import AboutMe from "@/Components/HomePage/AboutMe";
import Experience from "@/Components/HomePage/Experience";
import Hero from "@/Components/HomePage/Hero";
import Projects from "@/Components/HomePage/Projects";
import Contact from "@/Components/HomePage/contact";
import HireMeOnUpwork from "@/Components/HomePage/hireMeOnUpwork";
import SkillSet from "@/Components/HomePage/skillSet";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        {" "}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Miraj Hossen</title>
        <meta
          name="description"
          content="Welcome to my portfolio! I'm Miraj Hossen, a full-stack developer from Bangladesh, passionate about creating web applications  that stand out."
        />
        <meta
          name="keywords"
          content="Miraj Hossen, full-stack developer, web development, portfolio, web applications, digital experiences, Bangladesh, coding, web developer, programming, innovative websites, user-friendly, tech enthusiast"
        />
        <meta property="og:site_name" content="Miraj Hossen" />
        <meta property="og:title" content="Miraj Hossen | Portfolio" />
        <meta
          property="og:description"
          content="Welcome to my portfolio! I'm Miraj Hossen, a full-stack developer from Bangladesh, passionate about creating web applications  that stand out."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dicnezd6a/image/upload/v1698160819/images/miraj-hero-omg_q9jah4.webp"
        />
        <meta property="og:url" content="https://mirajhossen.vercel.app/" />
        <meta
          name="google-site-verification"
          content="01JMCDAiWgBjv7QWqWk2v2Tg-DbZo3SWxq3uYzIf9kc"
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://mirajhossen.vercel.app/" />
      </Head>
      <Hero />
      <AboutMe />
      <Projects />
      <Experience />
      <SkillSet />
      <HireMeOnUpwork />
      <Contact />
    </>
  );
}
