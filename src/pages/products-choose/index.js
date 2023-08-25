import RootLayout from "@/components/Layout/RootLayout";
import { addToBuilder, setProductChoose } from "@/redux/features/products/productSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";

const ProductCategoryChoose = ({ allProducts }) => {

  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const dispatch = useDispatch();
  const chooseCategory = router.query.category;
  const selectedChooseCategory = chooseCategory;

  useEffect(() => {
    if (allProducts) {
      setLoading(false);
    }
  }, [allProducts]);
  

  const chooseProducts = allProducts?.data?.filter(
    (product) => product.category === selectedChooseCategory
  );


  const handleAddToBuilder = (selectedProduct) => {
    dispatch(setProductChoose(selectedProduct));
    router.push({
    pathname: "/pc_builder",
  });
  };

 

  return (
    <section className="text-gray-600 body-font py-10">
      <div className="container px-5 mx-auto">
        {loading ? (
          <p className="text-lg text-gray-500">Loading...</p>
        ): (
          <div className="flex flex-wrap -m-4">
          {chooseProducts.map(
            ({
              _id,
              image,
              productName,
              category,
              status,
              price,
              individualRating,
              averageRating,
            }) => (
              <div className="p-4 md:w-1/3" key={_id}>
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col">
                  <div className="h-48 md:h-64 relative overflow-hidden">
                    <Image
                      src={image}
                      alt={productName}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      {category}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {productName}
                    </h1>
                    <p className="text-lg font-bold text-gray-900">
                      ${price.toFixed(2)}
                    </p>

                    <div className="flex items-center mb-4">
                      <span className="text-indigo-500 inline-flex items-center mr-3">
                        Individual Rating: {individualRating}
                      </span>
                      <span className="text-gray-400 inline-flex items-center">
                        Average Rating: {averageRating}
                      </span>
                    </div>

                    <p
                      className={`text-sm pb-4 ${
                        status === "In Stock"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {status}
                    </p>
                    {
                      status !== "Out of Stock" && 
                      <button
                      onClick={() => handleAddToBuilder({
                        _id,
                        image,
                        productName,
                        category,
                        status,
                        price,
                        individualRating,
                        averageRating,
                      })}
                      className=" flex-shrink-0 text-[#6d90e9] border border-[#6d90e9] py-1 px-5 focus:outline-none hover:bg-indigo-400 hover:text-white rounded text-base mt-10 sm:mt-0 transition-all duration-200"
                    >
                      Add To Builder
                    </button>
                    }
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        )}
      </div>
    </section>
  );
};

export default ProductCategoryChoose;

ProductCategoryChoose.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  try {
    const res = await fetch("https://build-tech-pc-server.vercel.app/products");
    const data = await res.json();
    return {
      props: {
        allProducts: data,
      },
      // revalidate: 10,
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      props: {
        allProducts: null,
      },
    };
  }
};

