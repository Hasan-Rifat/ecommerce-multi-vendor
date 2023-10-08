import Banner from "@/components/ui/Home/Banner";
import Category from "@/components/ui/Home/Category";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <>
      <Banner />
      <Category />
    </>
  );
};
export default page;
