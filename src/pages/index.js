import RootLayout from "@/components/Layout/RootLayout";
import AllProducts from "@/components/UI/AllProducts";
import Hero from "@/components/UI/Hero";

const HomePage = ({allProducts}) => {
  console.log("data from home", allProducts)
  return (
    <div>
      <Hero />
       <div className="flex flex-col justify-center items-center pb-4">
          <p className="text-2xl font-bold">Featured Products</p>
          <p className="text-xs">Discover Your Perfect Product!</p>
       </div>
      
      <AllProducts allProducts = {allProducts} />
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}

export const getStaticProps = async () => {

  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();
  
  return {
    props: {
      allProducts: data,
    }
  }
}


