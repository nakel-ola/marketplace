import { Footer, Header } from "@/app/features";
import React, { Fragment } from "react";
import { RouteCard } from "../features";
import {
  BannerCard,
  ProductDetails,
  ProductInfo,
  RelatedProducts,
} from "./features";

type Props = {
  params: { slug: string };
};

export default function Produc(props: Props) {
  return (
    <Fragment>
      <Header />

      <main className="w-[calc(100%-10px)] lg:w-[calc(100%-80px)] page-center">
        <RouteCard />
        <ProductDetails />
        <ProductInfo />

        <RelatedProducts />
        <BannerCard />
      </main>

      <Footer />
    </Fragment>
  );
}
