import styles from "@/styles/Home.module.css";
import { Button, Link } from "@nextui-org/react";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nota - An AI Music NFT marketplace</title>
        <meta
          name="description"
          content="Nota - An AI Music NFT marketplace where you can create amazing music NFT with AI and trade your NFT with music lovers around the world!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <Link href="/" rel="noopener noreferrer" className="flex gap-2">
            <Image
              src="/logo.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={40}
              height={40}
              priority
            />
            <p className="text-black">Nota</p>
          </Link>
          <Button color="primary">Connect Wallet</Button>
        </div>

        <Button className={`${styles.thirteen} mb-10`}>
          <p>Mint Music NFT</p>
        </Button>
      </main>
    </>
  );
}
