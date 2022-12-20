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

export default function Home() {
  return (
    <div className="bg-slate-100">
      <div id="Home" className="max-w-7xl mx-auto">
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
        <main className="w-full h-auto pt-14 mb-4 flex">
          <div className="w-full md:w-2/3 mx-4 h-auto rounded-2xl bg-[url('/bg-orbs.png')] bg-cover shadow-lg">
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
                    <button className="align-top px-3 py-2 mr-2 text-xs sm:text-base sm:py-3 sm:px-6 text-gray-200 bg-neutral-800 rounded-full">
                      Contact me
                    </button>
                  </Link>
                  <button className="w-7 sm:w-10 sm:h-10 mr-2">
                    <Link href="https://github.com/ElianeV" target="_blank">
                      <FontAwesomeIcon icon={faGithubSquare} size="xs" />
                    </Link>
                  </button>
                  <button id="MyWork" className="w-7 sm:w-10 sm:h-10 mr-2">
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

        <section>
          <div className="w-full flex flex-wrap">
            <article className="mx-4 mb-4 w-full md:w-[calc(50%-1.5rem)] rounded-2xl bg-white shadow-lg">
              <TopProject
                title="MAUSOLEUM"
                type="freelance"
                url="/"
                style="w-full px-12 pt-4 rounded-t-2xl bg-[#0e395c] relative text-white shadow-[inset_0_3px_0px_hsl(211,68%,40%)]"
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
            <article className="mx-4 md:ml-0 mb-4 w-full md:w-[calc(50%-1.5rem)] bg-[#8e0050] rounded-2xl text-white">
              <Project
                title="WHAT DO YOU FEEL LIKE"
                type="personal project"
                description="What do you feel like... Pasta? Something spicy? Dessert? Save your recipes in this digital cookbook. Upload your own images, filter through different categories, modify recipes on the spot, etc."
                technologies={["Created using???"]}
                image="/recipesMockup.png"
                url="https://whatdoyoufeellike.vercel.app"
                reference="https://jgillan.com"
              />
            </article>
            <article className="mx-4 mb-4 w-full md:w-[calc(50%-1.5rem)] bg-[#f7bdbf] first: rounded-2xl ">
              {" "}
              <Project
                title="BENDY CANDLE"
                type="personal project"
                description="Bendy Candle allows you to create a custom flexibility routine. Edit individual exercises and their duration to make stretching more or less challenging. Once you are satisfied with your routine you can start the automatic countdown. Follow the visual and auditory cues to switch positions. It's completely hands-free!"
                technologies={["Created using Sass, JavaScript and React"]}
                image="/bendycandleMockup.png"
                url="https://www.bendycandle.com/"
              />
            </article>
            <article className="mx-4 md:ml-0 mb-4 w-full md:w-[calc(50%-1.5rem)] bg-[#234a47] rounded-2xl text-white">
              {" "}
              <Project
                title="OUT BOULDERING"
                type="personal project"
                description="The weather in Ireland is changeable and it often rains which is not ideal if you want to go outdoor bouldering. Using the OpenWeatherMap API we provide the 4 day weather forecast for the most popular bouldering locations in the country. Get a swift overview and plan your perfect climbing trip."
                technologies={["Created using Sass, JavaScript and React"]}
                image="/outboulderingMockup.png"
                url="https://outbouldering.netlify.app/"
              />
            </article>
          </div>
        </section>
        <section id="Contact" className="flex">
          <div className="w-full mx-4 mb-4 rounded-2xl bg-[url('/bg-blobs.png')] bg-cover">
            <div className="w-full h-full p-12 backdrop-blur-3xl rounded-2xl">
              <h1 className="text-5xl tracking-tight">Contact</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Risus ultricies tristique nulla aliquet. Congue mauris rhoncus
                aenean vel elit scelerisque mauris pellentesque. Egestas pretium
                aenean pharetra magna ac placerat vestibulum lectus.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
