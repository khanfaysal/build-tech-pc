// components/RootLayout.js

import Footer from "./Footer";
import Navbar from "./Navbar";



const RootLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-4">{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
