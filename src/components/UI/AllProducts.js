import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const AllProducts = ({ allProducts }) => {
  // State to hold the shuffled products
  const [shuffledProducts, setShuffledProducts] = useState([]);

  // Shuffle the products after the component mounts (client-side)
  useEffect(() => {
    const shuffleProducts = () => {
      const shuffled = allProducts.data.sort(() => 0.5 - Math.random());
      const products = shuffled.slice(0, 6);
      setShuffledProducts(products);
    };
    shuffleProducts();
  }, [allProducts]);

  // Check if allProducts is valid and has data
  if (!allProducts || !allProducts.data || allProducts.data.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 mx-auto">
        <div className="flex flex-wrap -m-4">
          {shuffledProducts.map(
            ({
              _id,
              image,
              productName,
              category,
              status,
              price,

              individualRating,
            }) => (
              <div className="p-4 md:w-1/3" key={_id}>
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  {/* Render product image */}
                  <div className="h-48 md:h-64 relative overflow-hidden">
                    <Image
                      src={image}
                      alt={productName}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
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
