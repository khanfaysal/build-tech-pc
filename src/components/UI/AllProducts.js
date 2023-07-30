import Image from "next/image";
import Link from "next/link";

const AllProducts = ({ allProducts }) => {
  // Function to get 6 random products from the array
  const getRandomProducts = (arr, num) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  // Check if allProducts is valid and has data
  if (!allProducts || !allProducts.data || allProducts.data.length === 0) {
    return <p>No products found.</p>;
  }

  const products = getRandomProducts(allProducts.data, 6); // Get 6 random products

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map(
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
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  {/* <Image
                  src={image}
                  alt={productName}
                  width={250}
                  height={250}
                  layout="responsive"
                /> */}
                  <div className="p-6">
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
                    <Link href={`/products/${_id}`}>
                      <button className="mt-4 border-2 border-indigo-500 text-indigo-500 bg-transparent py-1 px-2 rounded-lg flex items-center justify-center transition-all hover:bg-indigo-500 hover:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-6 h-6 mr-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                        Details
                      </button>
                    </Link>
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

export default AllProducts;
