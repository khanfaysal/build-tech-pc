import RootLayout from "@/components/Layout/RootLayout";
import Image from "next/image";
import RAM from "@/images/ram.png";
import Processor from "@/images/processor.png";
import Motherboard from "@/images/motherboard.png";
import PowerSupply from "@/images/power-supply.png";
import StorageDevice from "@/images/hdd.png";
import Monitor from "@/images/monitor.png";
import OtherComponent from "@/images/other.png";
import { useRouter } from "next/router";


const PcBuilderPage = () => {


  const router = useRouter();

  const chooseProductCategory = [
    { image: Processor, name: "Processor" },
    { image: Motherboard, name: "Motherboard" },
    { image: RAM, name: "RAM" },
    { image: PowerSupply, name: "Power Supply" },
    { image: StorageDevice, name: "Storage Device" },
    { image: Monitor, name: "Monitor" },
    
  ];

  const handleChooseCategory = (categoryName) => {
    router.push(`/products-choose?category=${categoryName}`);
  };

  return (
    <section className="py-10">
      <div className="container mx-auto">
        {chooseProductCategory.map((category, index) => (
          <div
            key={index}
            className="lg:w-10/12 flex justify-between lg:items-center sm:flex-row sm:items-center items-start mx-auto mt-5"
          >
            <div className="flex gap-5 sm:pr-16">
              <Image
                src={category.image}
                alt={`Image for ${category.name}`}
                width={120}
                height={60}
                className="border p-4 bg-blue-50"
              />
              <p className="text-base">{category.name}</p>
            </div>
            <button onClick={() => handleChooseCategory(category.name)} className="flex-shrink-0 text-[#6d90e9] border border-[#6d90e9] py-1 px-5 focus:outline-none hover:bg-indigo-400 hover:text-white rounded text-base mt-10 sm:mt-0 transition-all duration-200">
              Choose
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

