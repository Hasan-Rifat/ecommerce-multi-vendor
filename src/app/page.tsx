import Banner from "@/components/ui/Home/Banner";
import Category from "@/components/ui/Home/Category";
import FeaturedProduct from "@/components/ui/Home/FeaturedProduct";
import FlashDeals from "@/components/ui/Home/FlashDeals";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <>
      <Banner />
      <Category />
      <FlashDeals />
      <FeaturedProduct />
    </>
  );
};
export default page;
