import HeroImg from "@/images/hero.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();

  const HandlePcBuilderRedirect = () => {
    router.push("/pc_builder");
  };

  return (
    <section className="text-gray-600 pb-16 pt-10">
      <div className="container mx-auto flex gap-10 flex-col-reverse px-5 md:flex-row items-center">
        {/* Content (4 Portions) */}
        <div className="lg:w-6/12 md:w-6/12 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Your Ultimate PC Experience
          </h1>
          <p className="mb-8 leading-relaxed w-10/12">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <button
              onClick={HandlePcBuilderRedirect}
              className="inline-flex text-white bg-[#6d90e9] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-400 rounded text-lg"
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

        {/* Image (8 Portions) */}
        <div className="lg:w-6/12 md:w-6/12 mb-10 md:mb-0">
          <div className="relative w-full h-0 md:h-full pb-[56.25%] md:pb-0">
            <Image
              src={HeroImg}
              alt="hero image"
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
