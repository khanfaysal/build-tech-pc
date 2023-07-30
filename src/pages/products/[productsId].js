import RootLayout from "@/components/Layout/RootLayout";
import Image from "next/image";

const ProductsDetailsPage = ({ products }) => {
  console.log("products", products)
  const {
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
  } = products;
  return (
    <div>
      <div className="p-4 md:w-10/12 mx-auto">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col md:flex-row">
          {/* Product Image (Left Side) */}
          <div className="md:w-6/12 flex items-center justify-center">
            <div className="relative w-full h-0 md:h-full pb-[100%] md:pb-0">
              <Image
                src={image}
                alt={productName}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          {/* Product Details (Right Side) */}
          <div className="p-6 flex flex-col justify-between md:w-6/12">
            <div>
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
                {/* Average Rating */}
                <span className="text-gray-400 inline-flex items-center">
                  Average Rating: {averageRating}
                </span>
              </div>

              {/* Key Features */}
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

              {/* Description */}
              <p className="leading-relaxed mb-3">{description}</p>

              {/* Reviews */}
              <h3 className="text-gray-600 font-medium mb-2">Reviews:</h3>
              {reviews.map((review, index) => (
                <div key={index} className="mb-4">
                  <p className="text-gray-800">Username: {review.username}</p>
                  <p className="text-gray-800">
                    Rating: {review.rating} out of 5 stars
                  </p>
                  <p className="text-gray-800">Comment: {review.comment}</p>
                </div>
              ))}
            </div>
            <p
              className={`text-sm ${
                status === "In Stock" ? "text-green-500" : "text-red-500"
              }`}
            >
              {status}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetailsPage;

ProductsDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  try {
    const res = await fetch("http://localhost:5000/products");
    const products = await res.json();
   

    const paths = products?.data?.map((product) => ({
      params: { productsId: product._id.toString() },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.error("Error fetching static paths:", error);
    return { paths: [], fallback: false };
  }
};

export const getStaticProps = async (context) => {
  try {
    const { params } = context;
    const res = await fetch(
      `http://localhost:5000/product/${params.productsId}`
    );
    const data = await res.json();
    console.log("data details", data);

    return {
      props: {
        products: data,
      },
    };
  } catch (error) {
    console.error("Error fetching static props:", error);
    return {
      props: {
        products: null,
      },
    };
  }
};
