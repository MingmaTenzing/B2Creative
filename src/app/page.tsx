import Head from "next/head";
import Image from "next/image";
import Nav from "../../components/Nav";
import marketingimg from "../../assests/marketing.png";
import wave from "../../assests/wave.svg";
import Hero from "../../components/Hero";
import SEOServices from "../../components/SEOServices";
export default function Home() {
  return (
    <>
      <Head>
        <title>B2Creative</title>
      </Head>

      <Nav />

      <main>
        <Hero />
        <SEOServices />
        
      </main>
    </>
  );
}
