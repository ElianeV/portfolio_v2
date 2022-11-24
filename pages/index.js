import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex">
        <div className="w-2/3 h-[600px] relative overflow-hidden rounded-2xl">
          <Image
            src="/bg-orbs.png"
            alt="yellow and green orbs"
            width={2000}
            height={2000}
            className="blur-3xl opacity-70"
          />
          <p className="absolute top-0 p-12 text-5xl tracking-tight">
            Hey, I'm Eliane, a web developer
          </p>
        </div>
        <div className="relative w-1/3 rounded-2xl overflow-hidden">
          <Image
            src="/portrait.jpg"
            fill
            className="rounded-2xl object-cover"
          />
        </div>
      </main>
    </div>
  );
}
