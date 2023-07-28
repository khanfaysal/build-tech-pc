import RootLayout from "@/components/Layout/RootLayout";
import AllProducts from "@/components/UI/AllProducts";

const HomePage = ({allProducts}) => {
  console.log("data from home", allProducts)
  return (
    <div>
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