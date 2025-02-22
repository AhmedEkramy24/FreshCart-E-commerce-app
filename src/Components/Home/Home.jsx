import { useContext, useEffect } from "react";
import RecentProducts from "./RecentProduct/RecentProducts";
import CategorySlider from "./CategorySlider/CategorySlider";
import MainSlider from "./MainSlider/MainSlider";
import { WishListContext } from "../../Context/WishListContext";
import { Helmet } from "react-helmet";

export default function Home() {
  let { getAllWishList } = useContext(WishListContext);

  useEffect(() => {
    getAllWishList();
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home page</title>
      </Helmet>
      <MainSlider />
      <CategorySlider />
      <RecentProducts />
    </>
  );
}
