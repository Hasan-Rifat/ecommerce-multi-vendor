import Banner from "@/components/ui/Home/Banner";
import Category from "@/components/ui/Home/Category";
import FeaturedProduct from "@/components/ui/Home/FeaturedProduct";
import FlashDeals from "@/components/ui/Home/FlashDeals";
import { Metadata } from "next";
import { Poppins } from "next/font/google";

type pageProps = {};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};

const page: React.FC<pageProps> = () => {
  return (
    <main className={poppins.className}>
      <Banner />
      <Category />
      <FlashDeals />
      <FeaturedProduct />
    </main>
  );
};
export default page;
