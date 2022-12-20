import Head from "next/head";
import Navbar from "../components/navbar";
import Script from "next/script";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Project from "../components/project";
import TopProject from "../components/topProject";
import BottomProject from "../components/bottomProject";
import ContactForm from "../components/contactForm";

export default function Home() {
  return (
    <div className="bg-slate-100">
      <div id="Home" className="">
        <Head>
          <title>ELIANE.CODES - Web development</title>
          <meta
            name="eliane.codes - web development"
            content="Web development portfolio"
          />
          <link rel="icon" href="/favicon.ico" />
          <Script
            src="https://kit.fontawesome.com/ab73892e4f.js"
            crossorigin="anonymous"
          ></Script>
        </Head>
        <Navbar />
        <main className="w-full max-w-7xl mx-auto h-auto pt-14 mb-4 flex">
          <div className="w-full md:w-2/3 mx-4 h-auto rounded-2xl bg-[url('/bg-orbs.png')] bg-cover shadow-lg text-slate-700">
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
                    detail. Making websites look good is half the fun, hence why
                    I love everything CSS related. I have experience using HTML,
                    JavaScript, React, Next, Tailwind CSS, Sanity and other web
                    technologies.
                  </p>
                </div>
                <div>
                  <Link href="#Contact">
                    <button className="align-top px-3 py-2 mr-2 text-xs sm:text-base sm:py-3 sm:px-6 text-gray-200 bg-slate-700 rounded-full">
                      Contact me
                    </button>
                  </Link>
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
          <div className="hidden md:block md:w-1/3 min-h-[450px] mr-4 rounded-2xl overflow-hidden bg-[url('/portrait.jpg')] bg-cover shadow-lg"></div>
        </main>
        <section id="MyWork" className="pt-14 max-w-7xl mx-auto">
          <div className="w-full flex flex-wrap">
            <article className="mx-4 mb-4 w-full md:w-[calc(50%-1.5rem)] rounded-2xl bg-white shadow-lg flex flex-col justify-between">
              <TopProject
                title="MAUSOLEUM"
                type="freelance"
                url="/"
                style="w-full px-8 xs:px-12 pt-4 rounded-t-2xl bg-[#0e395c] relative text-white shadow-[inset_0_3px_0px_hsl(211,68%,40%)]"
              />
              <Project
                description="My client needed a new website for their mouse colony management software. They wanted a more modern feel and required the ability to update the website's contents. I chose Sanity.io as the headless CMS and connected it to a React front-end using Next.js."
                image="/mausoleumMockup.png"
              />
              <BottomProject
                technologies={["Sanity.io Next.js TailwindCSS"]}
                style="w-full px-12 py-4 rounded-b-2xl font-bold text-cyan-500 text-center word-spacing bg-slate-50"
              />
            </article>
            <article className="mx-4 md:ml-0 mb-4 w-full md:w-[calc(50%-1.5rem)] rounded-2xl bg-white shadow-lg flex flex-col justify-between">
              <TopProject
                title="WDYFL"
                type="personal project"
                url="https://whatdoyoufeellike.vercel.app"
                style="w-full px-8 xs:px-12 pt-4 rounded-t-2xl bg-[#8e0050] relative text-white shadow-[inset_0_3px_0px_hsl(329,100%,37%)]"
              />
              <Project
                description="What do you feel like... Pasta? Something spicy? Dessert? Browse through your favorite recipes using this digital cookbook. Uploading and modifying recipies is quick and simple, you can add your own images, filter through different categories, etc."
                image="/recipesMockup.png"
                reference="https://jgillan.com"
              />
              <BottomProject
                technologies={["PostgreSQL Prisma Next.js TailwindCSS"]}
                style="w-full px-12 py-4 rounded-b-2xl font-bold text-pink-500 text-center word-spacing bg-slate-50"
              />
            </article>
            <article className="mx-4 mb-4 w-full md:w-[calc(50%-1.5rem)] rounded-2xl bg-white shadow-lg flex flex-col justify-between">
              <TopProject
                title="BENDY CANDLE"
                type="personal project"
                url="https://www.bendycandle.com/"
                style="w-full px-8 xs:px-12 pt-4 rounded-t-2xl bg-[#fc6464] relative text-white shadow-[inset_0_3px_0px_hsl(359,96%,78%)]"
              />
              <Project
                description="Bendy Candle allows you to create a custom flexibility routine. Edit individual exercises and their duration to make stretching more or less challenging. Once you are satisfied with your routine you can start the automatic countdown. Follow the visual and auditory cues to switch positions. It's completely hands-free!"
                image="/bendycandleMockup.png"
              />
              <BottomProject
                technologies={["React JavaScript Sass"]}
                style="w-full px-12 py-4 rounded-b-2xl font-bold text-[#fd8f90] text-center word-spacing bg-slate-50"
              />
            </article>
            <article className="mx-4 md:ml-0 mb-4 w-full md:w-[calc(50%-1.5rem)] rounded-2xl bg-white shadow-lg flex flex-col justify-between">
              <TopProject
                title="OUT BOULDERING"
                type="personal project"
                url="https://outbouldering.netlify.app/"
                style="w-full px-8 sm:px-12 md:px-10 lg:px-12 pt-4 rounded-t-2xl bg-[#234a47] relative text-white shadow-[inset_0_3px_0px_hsl(179,59%,37%)]"
              />
              <Project
                description="The weather in Ireland is changeable and it often rains which is not ideal if you want to go outdoor bouldering. Using the OpenWeatherMap API we provide the 4 day weather forecast for the most popular bouldering locations in the country. Get a swift overview and plan your perfect climbing trip."
                image="/outboulderingMockup.png"
              />
              <BottomProject
                technologies={["React JavaScript Sass"]}
                style="w-full px-12 py-4 rounded-b-2xl font-bold text-[#279694] text-center word-spacing bg-slate-50"
              />
            </article>
          </div>
        </section>
        <section id="Contact" className="pt-14 flex max-w-7xl mx-auto">
          <div className="w-full mx-4 mb-4 rounded-2xl bg-[url('/bg-blobs.png')] bg-cover text-slate-700">
            <div className="w-full h-full p-8 lg:p-12 backdrop-blur-3xl rounded-2xl flex lg:flex-row flex-col justify-evenly">
              <h1 className="w-full mb-8 lg:mb-2 lg:w-1/3 text-2xl font-semibold xs:text-4xl sm:text-6xl">
                Contact me.
              </h1>
              <div className="w-full lg:w-2/3 rounded-2xl sm:p-8 sm:bg-white sm:bg-opacity-20">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
