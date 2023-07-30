// import Image from "next/image";
// import Link from "next/link";

// const AllProducts = ({ allProducts }) => {
//   if (!allProducts || !allProducts.data || allProducts.data.length === 0) {
//     return <p>No products found.</p>;
//   }

//   const products = allProducts.data; // Destructure the array of products

//   return (
//     <section className="text-gray-600 body-font">
//       <div className="container px-5 mx-auto">
//         <div className="flex flex-wrap -m-4">
//           {products.map(
//             ({
//               _id,
//               image,
//               productName,
//               category,
//               status,
//               price,
//               description,
//               keyFeatures,
//               individualRating,
//               averageRating,
//               reviews,
//             }) => (
//               <div className="p-4 md:w-1/3" key={_id}>
//                 <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex">
//                   {/* Product Image (Left Side) */}
//                   <div className="w-1/3">
//                     <Image
//                       src={image}
//                       alt={productName}
//                       width={250}
//                       height={250}
//                       layout="responsive"
//                     />
//                   </div>

//                   {/* Product Details (Right Side) */}
//                   <div className="p-6 flex flex-col justify-between w-2/3">
//                     <div>
//                       <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
//                         {category}
//                       </h2>
//                       <div className="flex justify-between">
//                         <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
//                           {productName}
//                         </h1>
//                         <p className="text-lg font-bold text-gray-900">
//                           ${price.toFixed(2)}
//                         </p>
//                       </div>
//                       <div className="flex items-center mb-4">
//                         <span className="text-indigo-500 inline-flex items-center mr-3">
//                           Individual Rating: {individualRating}
//                         </span>
//                         {/* Average Rating */}
//                         <span className="text-gray-400 inline-flex items-center">
//                           Average Rating: {averageRating}
//                         </span>
//                       </div>

//                       {/* Key Features */}
//                       <div className="mb-4">
//                         <h3 className="text-gray-600 font-medium mb-2">Key Features:</h3>
//                         <ul className="list-disc pl-6">
//                           {Object.entries(keyFeatures).map(([key, value]) => (
//                             <li key={key}>
//                               {key}: {value}
//                             </li>
//                           ))}
//                         </ul>
//                       </div>

//                       {/* Description */}
//                       <p className="leading-relaxed mb-3">
//                         {description}
//                       </p>

//                       {/* Reviews */}
//                       <h3 className="text-gray-600 font-medium mb-2">Reviews:</h3>
//                       {reviews.map((review, index) => (
//                         <div key={index} className="mb-4">
//                           <p className="text-gray-800">
//                             Username: {review.username}
//                           </p>
//                           <p className="text-gray-800">
//                             Rating: {review.rating} out of 5 stars
//                           </p>
//                           <p className="text-gray-800">Comment: {review.comment}</p>
//                         </div>
//                       ))}
//                     </div>
//                     <p
//                       className={`text-sm ${
//                         status === "In Stock"
//                           ? "text-green-500"
//                           : "text-red-500"
//                       }`}
//                     >
//                       {status}
//                     </p>
//                     <Link href={`/products/${_id}`}>
//                       <button className="mt-4 border-2 border-indigo-500 text-indigo-500 bg-transparent py-1 px-2 rounded-lg flex items-center justify-center transition-all hover:bg-indigo-500 hover:text-white">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                           className="w-6 h-6 mr-1"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M12 4v16m8-8H4"
//                           />
//                         </svg>
//                         Details
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AllProducts;




// const ramData = [
//   {
//     "_id": { "$oid": "64c393fbdfde08a1c25f8927" },
//     "image": "https://example.com/ram1-image.jpg",
//     "productName": "RAM Model X",
//     "category": "RAM",
//     "status": "In Stock",
//     "price": 79.99,
//     "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget...",
//     "keyFeatures": {
//       "brand": "Brand R",
//       "model": "Model R123",
//       "specification": "High-performance RAM",
//       "capacity": "8GB",
//       "type": "DDR4",
//       "speed": "2400 MHz",
//       "CASLatency": "16",
//       "color": "Black",
//       "RGB": "No"
//     },
//     "individualRating": 4.5,
//     "averageRating": 4.6,
//     "reviews": [
//       {
//         "username": "RAMMaster",
//         "rating": 5,
//         "comment": "Fast and reliable RAM for gaming."
//       },
//       {
//         "username": "TechEnthusiast",
//         "rating": 4,
//         "comment": "Good value for money."
//       }
//     ]
//   },
//   {
//     "_id": { "$oid": "64c393fbdfde08a1c25f8928" },
//     "image": "https://example.com/ram2-image.jpg",
//     "productName": "RAM Model Y",
//     "category": "RAM",
//     "status": "In Stock",
//     "price": 129.99,
//     "description": "Top-of-the-line RAM with impressive speeds.",
//     "keyFeatures": {
//       "brand": "Brand S",
//       "model": "Model S789",
//       "specification": "High-performance RAM",
//       "capacity": "16GB",
//       "type": "DDR4",
//       "speed": "3200 MHz",
//       "CASLatency": "18",
//       "color": "White",
//       "RGB": "Yes"
//     },
//     "individualRating": 4.8,
//     "averageRating": 4.9,
//     "reviews": [
//       {
//         "username": "RAMExpert",
//         "rating": 5,
//         "comment": "Impressive speeds and low latency make this RAM a great choice."
//       },
//       {
//         "username": "TechReviewer",
//         "rating": 4.5,
//         "comment": "Beautiful design with RGB lighting."
//       }
//     ]
//   },
//   {
//     "_id": { "$oid": "64c393fbdfde08a1c25f8929" },
//     "image": "https://example.com/ram3-image.jpg",
//     "productName": "RAM Model Z",
//     "category": "RAM",
//     "status": "Out of Stock",
//     "price": 189.99,
//     "description": "High-capacity RAM for demanding applications.",
//     "keyFeatures": {
//       "brand": "Brand T",
//       "model": "Model T456",
//       "specification": "High-performance RAM",
//       "capacity": "32GB",
//       "type": "DDR4",
//       "speed": "3600 MHz",
//       "CASLatency": "16",
//       "color": "Black",
//       "RGB": "Yes"
//     },
//     "individualRating": 4.2,
//     "averageRating": 4.1,
//     "reviews": [
//       {
//         "username": "RAMUser123",
//         "rating": 4,
//         "comment": "Good performance, but a bit expensive."
//       },
//       {
//         "username": "CasualRAMUser",
//         "rating": 4.5,
//         "comment": "Nice aesthetics with RGB lighting."
//       }
//     ]
//   },
//   {
//     "_id": { "$oid": "64c393fbdfde08a1c25f8930" },
//     "image": "https://example.com/ram4-image.jpg",
//     "productName": "RAM Model A",
//     "category": "RAM",
//     "status": "In Stock",
//     "price": 59.99,
//     "description": "Budget-friendly RAM for basic computing needs.",
//     "keyFeatures": {
//       "brand": "Brand U",
//       "model": "Model A123",
//       "specification": "Standard RAM",
//       "capacity": "4GB",
//       "type": "DDR3",
//       "speed": "1600 MHz",
//       "CASLatency": "11",
//       "color": "Green",
//       "RGB": "No"
//     },
//     "individualRating": 3.5,
//     "averageRating": 3.2,
//     "reviews": [
//       {
//         "username": "RAMBeginner",
//         "rating": 3,
//         "comment": "Decent RAM for everyday tasks."
//       },
//       {
//         "username": "CasualUser321",
//         "rating": 3.5,
//         "comment": "Affordable option but limited capacity."
//       }
//     ]
//   },
//   {
//     "_id": { "$oid": "64c393fbdfde08a1c25f8931" },
//     "image": "https://example.com/ram5-image.jpg",
//     "productName": "RAM Model B",
//     "category": "RAM",
//     "status": "In Stock",
//     "price": 99.99,
//     "description": "Performance-oriented RAM with RGB lighting.",
//     "keyFeatures": {
//       "brand": "Brand V",
//       "model": "Model B789",
//       "specification": "High-performance RAM",
//       "capacity": "16GB",
//       "type": "DDR4",
//       "speed": "3000 MHz",
//       "CASLatency": "15",
//       "color": "Black",
//       "RGB": "Yes"
//     },
//     "individualRating": 4.6,
//     "averageRating": 4.7,
//     "reviews": [
//       {
//         "username": "RAMGuru",
//         "rating": 5,
//         "comment": "Exceptional performance and stunning RGB effects."
//       },
//       {
//         "username": "TechGeek123",
//         "rating": 4.5,
//         "comment": "Great RAM, but a bit pricey."
//       }
//     ]
//   },
//   {
//     "_id": { "$oid": "64c393fbdfde08a1c25f8932" },
//     "image": "https://example.com/ram6-image.jpg",
//     "productName": "RAM Model C",
//     "category": "RAM",
//     "status": "In Stock",
//     "price": 149.99,
//     "description": "High-capacity RAM with overclocking capabilities.",
//     "keyFeatures": {
//       "brand": "Brand W",
//       "model": "Model C456",
//       "specification": "High-performance RAM",
//       "capacity": "32GB",
//       "type": "DDR4",
//       "speed": "3200 MHz",
//       "CASLatency": "14",
//       "color": "White",
//       "RGB": "Yes"
//     },
//     "individualRating": 4.8,
//     "averageRating": 4.9,
//     "reviews": [
//       {
//         "username": "RAMExpert456",
//         "rating": 5,
//         "comment": "Excellent RAM for overclocking and heavy tasks."
//       },
//       {
//         "username": "TechSavvy789",
//         "rating": 4.5,
//         "comment": "Beautiful design with high-speed performance."
//       }
//     ]
//   }
// ];
