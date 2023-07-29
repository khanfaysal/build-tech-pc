import RootLayout from "@/components/Layout/RootLayout";

const ProductsDetailsPage = ({ products }) => {
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
      {/* <h1>{products?.productName}</h1>
            <p>{products?._id.toString()}</p> */}

      <div className="p-4 md:w-full">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex">
          {/* Product Image (Left Side) */}
          <div className="w-1/3">
            {/* <Image
                      src={image}
                      alt={productName}
                      width={250}
                      height={250}
                      layout="responsive"
                    /> */}
            <h2>fdfdsf</h2>
          </div>

          {/* Product Details (Right Side) */}
          <div className="p-6 flex flex-col justify-between w-2/3">
            <div>
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                {category}
              </h2>
              <div className="flex justify-between">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  {productName}
                </h1>
                <p className="text-lg font-bold text-gray-900">
                  ${price.toFixed(2)}
                </p>
              </div>
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

// export const getStaticPaths = async () => {
//     const res = await fetch("http://localhost:5000/products");
//     const products = await res.json();
//     console.log(typeof products, "prooooooooo")

//     const paths = products?.data?.map((product) => ({
//     params: { productsId: product._id.toString() },
//   }))

//      return { paths, fallback: false }
// }

export const getStaticPaths = async () => {
  try {
    const res = await fetch("http://localhost:5000/products");
    const products = await res.json();
    console.log(typeof products, "prooooooooo");

    const paths = products?.data?.map((product) => ({
      params: { productsId: product._id.toString() },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.error("Error fetching static paths:", error);
    return { paths: [], fallback: false };
  }
};

// export const getStaticProps = async(context) => {
//     const {params} = context;
//     const res = await fetch(`http://localhost:5000/products/${params.productsId}`);
//     const data = await res.json();
//     console.log("data details", data)
//     return {
//         props: {
//             products: data
//         }
//     }
// }
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
