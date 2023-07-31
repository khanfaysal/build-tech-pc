import RootLayout from "@/components/Layout/RootLayout";
import Image from "next/image";
import demo from "@/images/ram.png";

const PcBuilderPage = ({ allProducts }) => {
  console.log(allProducts, "allproducts in server side");
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="lg:w-10/12 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
          <div className="flex-grow sm:pr-16">
            <Image src={demo} alt="next js alt" width={150} height={80} className="border p-4 bg-blue-50" />
          </div>
          <button className="flex-shrink-0 text-[#6d90e9] outline  outline-[#6d90e9] py-2 px-8 focus:outline-none hover:bg-indigo-400 hover:text-white rounded text-lg mt-10 sm:mt-0 transition-all duration-200">
            Button
          </button>
        </div>
      </div>
    </section>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();
  return {
    props: {
      allProducts: data,
    },
    // revalidate: 10,
  };
};
