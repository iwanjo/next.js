import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from './Nav';
import ScrollToTop from "react-scroll-to-top";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Ian Wanjohi</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <ScrollToTop smooth color="#6f00ff"  />



      <Nav />
    </>

    
      
  )
}
