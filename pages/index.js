import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>CHELIVERY</title>
        <meta name="description" content="Best Pizza order app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      HomePage
      
    </div>
  )
}
