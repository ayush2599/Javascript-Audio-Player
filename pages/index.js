import Head from 'next/head'
import Image from 'next/image'
import AudioPlayer from '../components/AudioPlayer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>React Audio Player</title>
      </Head>

      <main className={styles.main}>
        <AudioPlayer/>
      </main>
    </div>
  )
}
