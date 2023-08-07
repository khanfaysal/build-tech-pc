

import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import RAM from "@/images/ram.png";
import Processor from "@/images/processor.png";
import Motherboard from "@/images/motherboard.png";
import PowerSupply from "@/images/power-supply.png";
import StorageDevice from "@/images/hdd.png";
import Monitor from "@/images/monitor.png";
import RootLayout from "@/components/Layout/RootLayout";
import { useRouter } from "next/router";
import { removeProductChoose } from "@/redux/features/products/productSlice";
// import { useDispatch} from "react-redux";

const PcBuilderPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  
  const chooseProductCategory = [
    { image: Processor, name: "Processor", price: 199.99 },
    { image: Motherboard, name: "Motherboard", price: 129.99 },
    { image: RAM, name: "RAM", price: 79.99 },
    { image: PowerSupply, name: "Power Supply", price: 89.99 },
    { image: StorageDevice, name: "Storage Device", price: 149.99 },
    { image: Monitor, name: "Monitor", price: 249.99 },
  ];
  

  const state = useSelector((state) => state.product.productChoose);
  console.log(state, "state")

  const handleChooseCategory = (categoryName) => {
    router.push(`/products-choose?category=${categoryName}`);
  };

  // Replace default product data with selected product data, if available
  const updatedChooseProductCategory = chooseProductCategory.map(
    (category) =>
      state.find((selectedProduct) => selectedProduct.category === category.name) ||
      category
  );

  const handleRemoveToBuilder = (_id) => {
    dispatch(removeProductChoose(_id));
  };


   // Calculate the total price based on the selected products
   const totalPrice = useSelector((state) => {
    return state.product.productChoose.reduce((total, product) => {
      return total + (product.price || 0);
    }, 0);
  });

  const handleCreatePC = () => {
   alert("Successfully build your new computer");
   router.push({
    pathname: "/",
  });
  };

  return (
    <section className="py-10">
      <div className="container mx-auto">
      <div className="flex justify-end align-center">
        <p className="text-xl font-semibold">Total Price: ${totalPrice.toFixed(2)}</p>
        {state.length >= 5 && (
            <button
              onClick={handleCreatePC}
              className="flex-shrink-0 bg-green-500 text-white py-1 px-3 ml-2 rounded-lg"
            >
              Complete Build
            </button>
          )}
      </div>
        {updatedChooseProductCategory.map((category, index) => (
          <div
            key={index}
            className="lg:w-10/12 flex justify-between lg:items-center sm:flex-row sm:items-center items-start mx-auto mt-5"
          >
            <div className="flex gap-5 sm:pr-16">
              <Image
                src={category.image}
                alt={`Image for ${category.name ? category.name : category.productName}}`}
                width={120}
                height={60}
                className="border p-4 bg-blue-50"
              />
             <div className="d-flex flex-col">
                <p className="text-base">{category.name ? category.name : category.productName}</p>
                <p className="text-base">${category.price ? category.price : category.price}</p>
             </div>
             
            </div>

            <div>
              {
                category.name ? <button
                onClick={() => handleChooseCategory(category.name)}
                className="flex-shrink-0 text-[#6d90e9] border border-[#6d90e9] py-1 px-5 focus:outline-none hover:bg-indigo-400 hover:text-white rounded text-base mt-10 sm:mt-0 transition-all duration-200"
              >
                Choose
              </button> : <button
                onClick={() => handleRemoveToBuilder(category._id)}
                className="flex-shrink-0 text-[#ff0000] border border-[#ff0000] py-1 px-5 focus:outline-none hover:bg-[#ff0000] hover:text-white rounded text-base mt-10 sm:mt-0 transition-all duration-200"
              >
                Remove
              </button>
              }
              
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default PcBuilderPage;

export const getServerSideProps = async ({ query }) => {
  const selectedProductFromQuery = query.product || null;

  return {
    props: {
      selectedProductFromQuery,
    },
  };
};
