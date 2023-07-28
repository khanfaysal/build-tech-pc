import RootLayout from "@/components/Layout/RootLayout";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-6xl flex items-center justify-center h-full">Home Page</h1>
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