import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>AI Music NFT marketplace</title>
        <meta name="description" content="AI Music NFT marketplace - where you can create amazing music NFT with AI and trade your NFT with music lovers around the world!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started with AI
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/aimusicnft.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={40}
                height={40}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <div className={styles.thirteen}>
            <Image
              src="/logo.svg"
              alt="13"
              width={187}
              height={57}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Create Now <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly create your own music NFT with AI and trade now!
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              About <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about AI Music NFT in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Team <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and know more about our team.
            </p>
          </a>

          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              How it works? <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about AI Music NFT Marketplace features.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
