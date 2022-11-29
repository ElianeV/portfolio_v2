import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import Script from "next/script";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <Script
          src="https://kit.fontawesome.com/ab73892e4f.js"
          crossorigin="anonymous"
        ></Script>
      </Head>
      <Navbar />
      <main className="w-full h-auto pt-14 flex">
        <div className="w-full md:w-2/3 mx-4 h-auto rounded-2xl bg-[url('/bg-orbs.png')] bg-cover">
          <div className="w-full h-full backdrop-blur-3xl rounded-2xl">
            <div className="p-4 xs:p-8 w-full h-full lg:w-3/4 sm:p-12 flex flex-col justify-between ">
              <div>
                <h1 className="mb-2 text-2xl font-semibold xs:text-4xl sm:text-6xl">
                  Hey, I'm Eliane.
                </h1>
                <h2 className="mb-2 uppercase text-sm sm:text-base tracking-widest">
                  Frontend developer
                </h2>
                <p className="mb-4 xs:mb-8 sm:mb-20">
                  I am a creative web developer with a keen eye for design and
                  detail. Making websites look good is half the fun, hence why I
                  love everything CSS related. I have experience using HTML,
                  JavaScript, React, Next, Tailwind CSS, Sanity an other web
                  technologies.
                </p>
              </div>
              <div>
                <button className="align-top px-3 py-2 mr-2 text-xs sm:text-base sm:py-3 sm:px-6 text-white bg-black rounded-full">
                  Contact me
                </button>
                <button className="w-7 sm:w-10 sm:h-10 mr-2">
                  <Link href="https://github.com/ElianeV" target="_blank">
                    <FontAwesomeIcon icon={faGithubSquare} size="xs" />
                  </Link>
                </button>
                <button className="w-7 sm:w-10 sm:h-10 mr-2">
                  <Link
                    href="https://www.linkedin.com/in/eliane-vdc/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block md:w-1/3 min-h-[450px] mr-5 rounded-2xl overflow-hidden bg-[url('/portrait.jpg')] bg-cover"></div>
      </main>
      <section>
        <div className="flex flex-wrap">
          <article className="square basis-full md:basis-[calc(50%-30px)] bg-[#0e395c]">
            <div className="content flex flex-col items-center justify-between lg:py-10 text-white">
              <div>
                <button className="w-12 h-12 rounded-full bg-white absolute top-10 right-12 text-black text-center text-2xl">
                  ↗
                </button>
                <h2 className="lg:px-12 tracking-[0.3rem] text-2xl">
                  MAUSOLEUM
                </h2>
                <h3 className="lg:px-12 mb-2">freelance</h3>
                <p className="lg:px-12 text-justify font-thin">
                  Software for mouse colony management. My client needed a
                  modern website and required the ability to update its
                  contents.
                </p>
                <ul className="ml-4 lg:px-12 list-disc mb-2">
                  <li className="font-thin">
                    Sanity.io headless CMS connected to a React front-end using
                    Next.js.
                  </li>
                </ul>
              </div>
              <div className="w-10/12">
                <img src="/mausoleumMockup.png" alt="bg" />
              </div>
            </div>
          </article>
          <article className="square basis-full md:basis-[calc(50%-30px)] bg-[#ecd386]">
            <div className="content">
              <h2>ZENDAY</h2>
              <h3>freelance</h3>
              <p>This is where the description would go</p>
            </div>
          </article>
          <article className="square basis-full md:basis-[calc(50%-30px)] bg-[#8e0050]">
            <div className="content">
              <h2>Mausoleum</h2>
              <h3>freelance</h3>
              <p>This is where the description would go</p>
            </div>
          </article>
          <article className="square basis-full md:basis-[calc(50%-30px)] bg-[#f7bdbf]">
            <div className="content">
              <h2>Mausoleum</h2>
              <h3>freelance</h3>
              <p>This is where the description would go</p>
            </div>
          </article>
          <article className="square basis-full md:basis-[calc(50%-30px)] bg-[#234a47]">
            <div className="content">
              <h2>Mausoleum</h2>
              <h3>freelance</h3>
              <p>This is where the description would go</p>
            </div>
          </article>
          <article className="square basis-full md:basis-[calc(50%-30px)] bg-[#9e8dfa]">
            <div className="content">
              <h2>Mausoleum</h2>
              <h3>freelance</h3>
              <p>This is where the description would go</p>
            </div>
          </article>
        </div>
      </section>
      <section className="flex">
        <div className="w-full mx-4 mb-4 h-96 relative overflow-hidden rounded-2xl">
          <Image
            src="/bg-blobs.png"
            alt="blobs"
            width={2000}
            height={2000}
            className="blur-3xl opacity-70"
          />
          <div className="w-full absolute top-0 p-12 ">
            <h1 className="text-5xl tracking-tight">Contact</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus
              ultricies tristique nulla aliquet. Congue mauris rhoncus aenean
              vel elit scelerisque mauris pellentesque. Egestas pretium aenean
              pharetra magna ac placerat vestibulum lectus.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
