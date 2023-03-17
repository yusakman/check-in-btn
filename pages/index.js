import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Container from "@/components/Container";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Tenggara Hackanton Mantle</title>
        <meta name="description" content="Tenggara Hackanton Mantle" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container></Container>
    </>
  );
}
