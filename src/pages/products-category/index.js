import RootLayout from "@/components/Layout/RootLayout";
import Image from "next/image";
import { useRouter } from "next/router";

const ProductCategory = ({ allProducts }) => {
  const router = useRouter();
  const category = router.query.category;

  const selectedCategory = category;
  const filteredProducts = allProducts?.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <section className="text-gray-600 body-font py-10">
      <div className="container px-5 mx-auto">
        <div className="flex flex-wrap -m-4">
          {filteredProducts.map(
            ({
              _id,
              image,
              productName,
              category,
              status,
              price,
              description,
              keyFeatures,
              individualRating,
              averageRating,
              reviews,
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
                    <p className="leading-relaxed mb-3">{description}</p>
                    <div className="mb-4">
                      <h3 className="text-gray-600 font-medium mb-2">
                        Key Features:
                      </h3>
                      <ul className="list-disc pl-6">
                        {Object.entries(keyFeatures).map(([key, value]) => (
                          <li key={key}>
                            {key}: {value}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center mb-4">
                      <span className="text-indigo-500 inline-flex items-center mr-3">
                        Individual Rating: {individualRating}
                      </span>
                      <span className="text-gray-400 inline-flex items-center">
                        Average Rating: {averageRating}
                      </span>
                    </div>
                    <h3 className="text-gray-600 font-medium mb-2">Reviews:</h3>
                    {reviews.map((review, index) => (
                      <div key={index} className="mb-4">
                        <p className="text-gray-800">
                          Username: {review.username}
                        </p>
                        <p className="text-gray-800">
                          Rating: {review.rating} out of 5 stars
                        </p>
                        <p className="text-gray-800">
                          Comment: {review.comment}
                        </p>
                      </div>
                    ))}
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

export default ProductCategory;

ProductCategory.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {

    const res = await fetch("https://build-tech-pc-server.vercel.app/products");
    const {data }= await res.json();

    return {
      props: {
        allProducts: data,
      },
    };
};
