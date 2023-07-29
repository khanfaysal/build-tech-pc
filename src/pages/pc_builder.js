import RootLayout from "@/components/Layout/RootLayout";

const PcBuilderPage = () => {
    return (
        <div>
            <h2>Pc builder page</h2>
        </div>
    );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
    return (
      <RootLayout>
        {page}
      </RootLayout>
    )
  }