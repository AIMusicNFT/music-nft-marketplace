import { denoisings } from "@/data/denoising";
import { seedImages } from "@/data/seedImages";
import styles from "@/styles/Home.module.css";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Progress,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
//import * as tezosCrypto from "@tezos-core-tools/crypto-utils";
import { Image } from "@nextui-org/react";
import { Web3Auth } from "@web3auth/modal";
import Head from "next/head";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [web3auth, setWeb3Auth] = useState<Web3Auth>();
  const [loggedIn, setLoggedIn] = useState(false);
  //const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(null);
  const [value, setValue] = React.useState();
  const [musicProgress, setMusicProgress] = React.useState(0);

  const initModal = async () => {
    //Initialize within your constructor
    const web3auth = new Web3Auth({
      clientId:
        "BLnYrwNLJ03ZJBCCY3EqNGcp-b2Zm57ErhRWQGEnvbN5vIBM9ckWqSt0YatHI7EO5OSV2NVedFN4sDj4l4ahMMI", // Get your Client ID from Web3Auth Dashboard
      chainConfig: {
        chainNamespace: "eip155",
        chainId: "0x89", // Use 0x13881 for Mumbai Testnet
        rpcTarget: "https://rpc.ankr.com/eth",
      },
      web3AuthNetwork: "cyan",
    });

    setWeb3Auth(web3auth);

    await web3auth?.initModal();
  };

  const playMusic = async () => {
    const interval = setInterval(() => {
      setMusicProgress((v) => (v >= 100 ? 0 : v + 10));
    }, 500);

    return () => clearInterval(interval);
  };

  useEffect(() => {
    initModal();
  }, []);

  React.useEffect(() => {
    playMusic();
  }, []);

  const handleWeb3Modal = async () => {
    await web3auth?.connect();
    try {
      if (web3auth?.connected) {
        /* const web3authProvider = await web3auth.connect();
      setProvider(web3authProvider);*/
        const privateKey = await web3auth?.provider?.request({
          method: "eth_private_key",
        });
        console.log(privateKey);
        setLoggedIn(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const loggedInView = (
    <>
      <div className="text-small font-bold">logged in</div>
    </>
  );

  const unloggedInView = (
    <>
      <div className="text-small font-bold">Not loggedIn</div>
    </>
  );

  /* const getAccounts = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const address = await rpc.getAccounts();
    console.log(address);
  };

  const getTezosKeyPair = async () => {
    try {
      const privateKey = await provider.request({ method: "private_key" }) as string;
      const keyPair = tezosCrypto.utils.seedToKeyPair(hex2buf(privateKey));
      return keyPair;
    } catch (error) {
      console.error(error);
      return null;
    }
  }*/

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
          <Button color="primary" onClick={handleWeb3Modal}>
            Connect Wallet
          </Button>
        </div>
        <div className="container mt-10">
          <p className="text-2xl">Create an AI Music NFT</p>
          <div className="container mt-5 flex gap-16">
            <div className="container mx-auto flex-1">
              <p className="text-sm mb-2">Cover</p>
              <Image
                width={300}
                alt="NextUI hero Image"
                src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
              />
              <p className="text-lg mt-5">Details</p>
              <p className="text-sm mt-5">Name</p>
              <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <Input
                  className="mt-2"
                  type="name"
                  placeholder="e.g. Rock Star"
                />
              </div>
              <p className="text-sm mt-5">Description</p>
              <Textarea
                maxRows={3}
                className="mt-1"
                labelPlacement="outside"
                placeholder="e.g. Like a rock star in the summer day"
              />
              <p className="text-sm mt-5">Music Genre</p>
              <RadioGroup orientation="horizontal" className="mt-2">
                <Radio value="Pop">Pop</Radio>
                <Radio value="Country">Country</Radio>
                <Radio value="R&B">R&B</Radio>
                <Radio value="london">Rock</Radio>
              </RadioGroup>
              <p className="text-lg mt-8">Settings</p>
              <p className="text-sm mt-1">
                Nota generates music from text prompts. Try your favorite
                styles, instruments like saxophone or violin, modifiers like
                arabic or jamaican, genres like jazz or gospel, sounds like
                church bells or rain, or any combination. Play with the settings
                below to explore the latent space of sound.
              </p>
              <p className="text-sm mt-5">Seed Image</p>
              <Select
                description="Used as the base for img2img diffusion. This keeps your riff on beat and impacts melodic patterns."
                defaultSelectedKeys={["OG Beat"]}
                className="max-w-xs mt-2"
              >
                {seedImages.map((seedImage) => (
                  <SelectItem key={seedImage.value} value={seedImage.value}>
                    {seedImage.label}
                  </SelectItem>
                ))}
              </Select>
              <p className="text-sm mt-5">Denoising</p>
              <Select
                description="The higher the denoising, the more creative the output, and the more likely you are to get off beat."
                defaultSelectedKeys={["Keep it on beat(0.75)"]}
                className="max-w-xs mt-2"
              >
                {denoisings.map((denoising) => (
                  <SelectItem key={denoising.value} value={denoising.value}>
                    {denoising.label}
                  </SelectItem>
                ))}
              </Select>
              <div className="mt-5">
                <Popover placement="right">
                  <PopoverTrigger>
                    <Button className={`${styles.thirteen} mb-10`}>
                      Mint Music NFT
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="px-1 py-2">
                      {loggedIn ? loggedInView : unloggedInView}
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <Card className="w-96 h-fit">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-lg mt-5 py-4">Preview</p>
                <div className="bg-orange-50 w-full flex items-center justify-center">
                  <Image
                    width="100%"
                    alt="NextUI hero Image"
                    src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                  />
                </div>
                <p className="text-sm py-3">
                  Rock Star
                  <span className="text-xs"> / pop</span>
                </p>
                {/* <ReactPlayer url="/the-wires.mp3" /> */}
                <Progress
                  aria-label="Downloading..."
                  size="md"
                  value={musicProgress}
                  color="success"
                  showValueLabel={false}
                  className="max-w-md"
                />
              </CardHeader>
              <CardBody className="overflow-visible py-2"></CardBody>
            </Card>
          </div>
        </div>
        <footer className="flex flex-col items-center justify-center">
          <div>Copyright © Nota</div>
          <div>Powered by Jomosis & Chacha</div>
        </footer>
      </main>
    </>
  );
}
