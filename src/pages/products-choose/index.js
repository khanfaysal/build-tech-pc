import RootLayout from "@/components/Layout/RootLayout";
import Image from "next/image";
import { useRouter } from "next/router";

const ProductCategoryChoose = ({ allProducts }) => {
  console.log(allProducts, "all products from choose");

  const router = useRouter();
  const chooseCategory = router.query.category;
  console.log(chooseCategory, "choose category");
  const selectedChooseCategory = chooseCategory;

  const chooseProducts = allProducts?.data?.filter(
    (product) => product.category === selectedChooseCategory
  );

  return (
    <section className="text-gray-600 body-font py-10">
      <div className="container px-5 mx-auto">
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
                      className={`text-sm ${
                        status === "In Stock"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {status}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductCategoryChoose;

ProductCategoryChoose.getLayout = function getLayout(page) {
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
