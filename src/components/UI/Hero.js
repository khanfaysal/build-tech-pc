import HeroImg from "@/images/hero.jpg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Hero = () => {
  
  const router = useRouter();
  const HandlePcBuilderRedirect = () => {
    router.push("/pc_builder");
  };

  return (
    <section className="text-gray-600">
      <div className="container mx-auto flex px-5 pb-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Your Ultimate PC Experience
          </h1>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <button
              onClick={HandlePcBuilderRedirect}
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Pc Builder
            </button>
            <Link href="https://www.startech.com.bd/" target="_blank">
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Learn more
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            src={HeroImg}
            alt="next js alt"
            classNameName="rounded-md"
            width={250}
            height={100}
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
