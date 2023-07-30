// // import Image from "next/image";
// // import Link from "next/link";

// // const AllProducts = ({ allProducts }) => {
// //   if (!allProducts || !allProducts.data || allProducts.data.length === 0) {
// //     return <p>No products found.</p>;
// //   }

// //   const products = allProducts.data; // Destructure the array of products

// //   return (
// //     <section className="text-gray-600 body-font">
// //       <div className="container px-5 mx-auto">
// //         <div className="flex flex-wrap -m-4">
// //           {products.map(
// //             ({
// //               _id,
// //               image,
// //               productName,
// //               category,
// //               status,
// //               price,
// //               description,
// //               keyFeatures,
// //               individualRating,
// //               averageRating,
// //               reviews,
// //             }) => (
// //               <div className="p-4 md:w-1/3" key={_id}>
// //                 <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex">
// //                   {/* Product Image (Left Side) */}
// //                   <div className="w-1/3">
// //                     <Image
// //                       src={image}
// //                       alt={productName}
// //                       width={250}
// //                       height={250}
// //                       layout="responsive"
// //                     />
// //                   </div>

// //                   {/* Product Details (Right Side) */}
// //                   <div className="p-6 flex flex-col justify-between w-2/3">
// //                     <div>
// //                       <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
// //                         {category}
// //                       </h2>
// //                       <div className="flex justify-between">
// //                         <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
// //                           {productName}
// //                         </h1>
// //                         <p className="text-lg font-bold text-gray-900">
// //                           ${price.toFixed(2)}
// //                         </p>
// //                       </div>
// //                       <div className="flex items-center mb-4">
// //                         <span className="text-indigo-500 inline-flex items-center mr-3">
// //                           Individual Rating: {individualRating}
// //                         </span>
// //                         {/* Average Rating */}
// //                         <span className="text-gray-400 inline-flex items-center">
// //                           Average Rating: {averageRating}
// //                         </span>
// //                       </div>

// //                       {/* Key Features */}
// //                       <div className="mb-4">
// //                         <h3 className="text-gray-600 font-medium mb-2">Key Features:</h3>
// //                         <ul className="list-disc pl-6">
// //                           {Object.entries(keyFeatures).map(([key, value]) => (
// //                             <li key={key}>
// //                               {key}: {value}
// //                             </li>
// //                           ))}
// //                         </ul>
// //                       </div>

// //                       {/* Description */}
// //                       <p className="leading-relaxed mb-3">
// //                         {description}
// //                       </p>

// //                       {/* Reviews */}
// //                       <h3 className="text-gray-600 font-medium mb-2">Reviews:</h3>
// //                       {reviews.map((review, index) => (
// //                         <div key={index} className="mb-4">
// //                           <p className="text-gray-800">
// //                             Username: {review.username}
// //                           </p>
// //                           <p className="text-gray-800">
// //                             Rating: {review.rating} out of 5 stars
// //                           </p>
// //                           <p className="text-gray-800">Comment: {review.comment}</p>
// //                         </div>
// //                       ))}
// //                     </div>
// //                     <p
// //                       className={`text-sm ${
// //                         status === "In Stock"
// //                           ? "text-green-500"
// //                           : "text-red-500"
// //                       }`}
// //                     >
// //                       {status}
// //                     </p>
// //                     <Link href={`/products/${_id}`}>
// //                       <button className="mt-4 border-2 border-indigo-500 text-indigo-500 bg-transparent py-1 px-2 rounded-lg flex items-center justify-center transition-all hover:bg-indigo-500 hover:text-white">
// //                         <svg
// //                           xmlns="http://www.w3.org/2000/svg"
// //                           fill="none"
// //                           viewBox="0 0 24 24"
// //                           stroke="currentColor"
// //                           className="w-6 h-6 mr-1"
// //                         >
// //                           <path
// //                             strokeLinecap="round"
// //                             strokeLinejoin="round"
// //                             strokeWidth={2}
// //                             d="M12 4v16m8-8H4"
// //                           />
// //                         </svg>
// //                         Details
// //                       </button>
// //                     </Link>
// //                   </div>
// //                 </div>
// //               </div>
// //             )
// //           )}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default AllProducts;




// const motherboardData = [
//     // Motherboard object 1 with reviews
//     {
//       "_id": { "$oid": "64c393fbdfde08a1c25f8933" },
//       "image": "https://example.com/motherboard1-image.jpg",
//       "productName": "Motherboard Model X",
//       "category": "Motherboard",
//       "status": "In Stock",
//       "price": 189.99,
//       "description": "High-performance motherboard for gaming builds.",
//       "keyFeatures": {
//         "brand": "Brand M",
//         "model": "Model M123",
//         "socket": "AM4",
//         "chipset": "B550",
//         "memorySlots": "4",
//         "maxMemory": "128GB",
//         "formFactor": "ATX",
//         "USBPorts": "6",
//         "PCIeSlots": "2",
//         "SATAPorts": "6",
//         "M2Slots": "2",
//         "RGB": "Yes"
//       },
//       "individualRating": 4.7,
//       "averageRating": 4.8,
//       "reviews": [
//         {
//           "username": "User123",
//           "rating": 4.5,
//           "comment": "Great motherboard for gaming enthusiasts."
//         },
//         {
//           "username": "Gamer456",
//           "rating": 5,
//           "comment": "Superb performance and overclocking capabilities."
//         },
//         {
//           "username": "TechGeek",
//           "rating": 4,
//           "comment": "Solid build quality and feature-rich."
//         }
//       ]
//     },
//     // Motherboard object 2 without reviews
//     {
//       "_id": { "$oid": "64c393fbdfde08a1c25f8934" },
//       "image": "https://example.com/motherboard2-image.jpg",
//       "productName": "Motherboard Model Y",
//       "category": "Motherboard",
//       "status": "Out of Stock",
//       "price": 249.99,
//       "description": "High-end motherboard for professional workstations.",
//       "keyFeatures": {
//         "brand": "Brand N",
//         "model": "Model N789",
//         "socket": "LGA1200",
//         "chipset": "Z590",
//         "memorySlots": "8",
//         "maxMemory": "256GB",
//         "formFactor": "EATX",
//         "USBPorts": "8",
//         "PCIeSlots": "4",
//         "SATAPorts": "8",
//         "M2Slots": "3",
//         "RGB": "No"
//       },
//       "individualRating": 4.9,
//       "averageRating": 4.9,
//       "reviews": []
//     }
//   ];
  
//   const powerSupplyData = [
//     // Power supply object 1 without reviews
//     {
//       "_id": { "$oid": "64c393fbdfde08a1c25f8935" },
//       "image": "https://example.com/powersupply1-image.jpg",
//       "productName": "Power Supply Model X",
//       "category": "Power Supply",
//       "status": "In Stock",
//       "price": 99.99,
//       "description": "Reliable power supply for mid-range systems.",
//       "keyFeatures": {
//         "brand": "Brand P",
//         "model": "Model P123",
//         "wattage": "650W",
//         "efficiency": "80 Plus Bronze",
//         "modular": "Semi",
//         "fanSize": "120mm",
//         "outputVoltage": "12V",
//         "protections": "Overvoltage, Overcurrent, Short Circuit",
//         "connectors": "ATX, PCIe, SATA, Molex",
//         "RGB": "No"
//       },
//       "individualRating": 4.4,
//       "averageRating": 4.3,
//       "reviews": []
//     },
//     // Power supply object 2 with reviews
//     {
//       "_id": { "$oid": "64c393fbdfde08a1c25f8936" },
//       "image": "https://example.com/powersupply2-image.jpg",
//       "productName": "Power Supply Model Y",
//       "category": "Power Supply",
//       "status": "In Stock",
//       "price": 159.99,
//       "description": "High-wattage power supply for enthusiast systems.",
//       "keyFeatures": {
//         "brand": "Brand Q",
//         "model": "Model Q789",
//         "wattage": "850W",
//         "efficiency": "80 Plus Gold",
//         "modular": "Full",
//         "fanSize": "140mm",
//         "outputVoltage": "12V",
//         "protections": "Overvoltage, Overcurrent, Short Circuit, Overtemperature",
//         "connectors": "ATX, EPS, PCIe, SATA, Molex",
//         "RGB": "Yes"
//       },
//       "individualRating": 4.8,
//       "averageRating": 4.7,
//       "reviews": [
//         {
//           "username": "User789",
//           "rating": 4.5,
//           "comment": "Delivers stable power for high-end systems."
//         },
//         {
//           "username": "PCEnthusiast",
//           "rating": 5,
//           "comment": "Great choice for extreme gaming setups."
//         }
//       ]
//     }
//   ];
  
//   const storageDeviceData = [
//     // Storage device object 1 with reviews
//     {
//       "_id": { "$oid": "64c393fbdfde08a1c25f8937" },
//       "image": "https://example.com/storage1-image.jpg",
//       "productName": "Storage Device Model X",
//       "category": "Storage Device",
//       "status": "In Stock",
//       "price": 89.99,
//       "description": "High-speed SSD for faster data access.",
//       "keyFeatures": {
//         "brand": "Brand S",
//         "model": "Model S123",
//         "capacity": "500GB",
//         "interface": "NVMe M.2",
//         "readSpeed": "3500 MB/s",
//         "writeSpeed": "2500 MB/s",
//         "formFactor": "M.2 2280",
//         "MTBF": "1.5 million hours",
//         "endurance": "400 TBW",
//         "encryption": "AES 256",
//         "RGB": "No"
//       },
//       "individualRating": 4.5,
//       "averageRating": 4.4,
//       "reviews": [
//         {
//           "username": "User456",
//           "rating": 4.8,
//           "comment": "Fast and reliable SSD for my OS and applications."
//         }
//       ]
//     },
//     // Storage device object 2 without reviews
//     {
//       "_id": { "$oid": "64c393fbdfde08a1c25f8938" },
//       "image": "https://example.com/storage2-image.jpg",
//       "productName": "Storage Device Model Y",
//       "category": "Storage Device",
//       "status": "In Stock",
//       "price": 119.99,
//       "description": "High-capacity HDD for mass storage.",
//       "keyFeatures": {
//         "brand": "Brand T",
//         "model": "Model T789",
//         "capacity": "2TB",
//         "interface": "SATA 6Gb/s",
//         "speed": "7200 RPM",
//         "cache": "64MB",
//         "formFactor": "3.5-inch",
//         "MTBF": "1 million hours",
//         "endurance": "240 TBW",
//         "encryption": "None",
//         "RGB": "No"
//       },
//       "individualRating": 4.2,
//       "averageRating": 4.1,
//       "reviews": []
//     }
//   ];
  
//   const otherData = [
//     // Other component object 1 without reviews
//     {
//       "_id": { "$oid": "64c393fbdfde08a1c25f8939" },
//       "image": "https://example.com/other1-image.jpg",
//       "productName": "Other Component Model X",
//       "category": "Other Component",
//       "status": "In Stock",
//       "price": 49.99,
//       "description": "Generic component for system builds.",
//       "keyFeatures": {
//         "brand": "Brand O",
//         "model": "Model O123",
//         "feature1": "Feature X",
//         "feature2": "Feature Y",
//         "feature3": "Feature Z",
//         "RGB": "No"
//       },
//       "individualRating": 3.8,
//       "averageRating": 3.7,
//       "reviews": []
//     }
//   ];
  