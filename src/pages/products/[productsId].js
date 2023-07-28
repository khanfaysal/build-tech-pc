import RootLayout from "@/components/Layout/RootLayout";

const ProductsDetailsPage = ({products}) => {
    
    console.log(products, "producttts")
    return (
        <div>
            <h1>{products?.productName}</h1>
            <p>{products?._id}</p>
        </div>
    );
};

export default ProductsDetailsPage;

ProductsDetailsPage.getLayout = function getLayout(page) {
    return (
      <RootLayout>
        {page}
      </RootLayout>
    )
  }

export const getStaticPaths = async () => {
    const res = await fetch("http://localhost:5000/products");
    const products = await res.json();
    console.log(typeof products, "prooooooooo")

    const paths = products?.data?.map((product) => ({
    params: { productsId: product._id },
  }))

     return { paths, fallback: false }
}  

export const getStaticProps = async(context) => {
    const {params} = context;
    const res = await fetch(`http://localhost:5000/products/${params.productsId}`);
    const data = await res.json();
    console.log("data details", data)
    return {
        props: {
            products: data
        }
    }
}


