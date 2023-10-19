import {
  BannerSection,
  CTASection,
  DiscountSection,
  ExtraServiceSection,
  Footer,
  GroupCategorySection,
  Header,
  InquirySection,
  RecommendedSection,
  RegionSection,
} from "@/app/features";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Header />

      <main className="w-[calc(100%-10px)] lg:w-[calc(100%-80px)] page-center">
        <BannerSection />
        <DiscountSection />

        {group_categories.map((item, index) => (
          <GroupCategorySection key={index} {...item} />
        ))}

        <InquirySection />
        <RecommendedSection />
        <ExtraServiceSection />
        <RegionSection />
        <CTASection />
      </main>
      <Footer />
    </Fragment>
  );
}

const group_categories = [
  {
    image: "/images/44be4cfea24366cb3d27cb335105ed84.jpeg",
    title: "Home and outdoor",
    bgColor: "#FFE8BA66",
    items: [
      {
        name: "Soft chairs",
        price: "19",
        image: "/images/9324f0c42ef6175c1e8fd94fcdaea111.png",
      },
      {
        name: "Sofa & chair",
        price: "19",
        image: "/images/afe3483e736054358d53f2f8797b4546.png",
      },
      {
        name: "Kitchen dishes",
        price: "19",
        image: "/images/da0ec19b2f735896bd129bb83cae628f.png",
      },
      {
        name: "Smart watches",
        price: "19",
        image: "/images/1ebac249f8cba9ff49b0a3c5c89dfbc7.png",
      },
      {
        name: "Kitchen mixer",
        price: "100",
        image: "/images/d628afe6f0f52ecee5cf9460f0d0d69d.png",
      },
      {
        name: "Blenders",
        price: "39",
        image: "/images/0c25ac335a1e2cc7d8d3584a3592fbbf.png",
      },
      {
        name: "Home appliance",
        price: "19",
        image: "/images/ff34eb5b476f6a97fc3fde243beb9597.jpeg",
      },
      {
        name: "Coffee maker",
        price: "10",
        image: "/images/e17c636fb7cc35743a81e426e6e52604.png",
      },
    ],
  },
  {
    image: "/images/4c8412945ece65003461e7d1b12857d0.png",
    title: "Consumer electronics and gadgets",
    bgColor: "#FFFFFF4D",
    items: [
      {
        name: "Smart watches",
        price: "19",
        image: "/images/e4b654e7de1ac596c31da4b9f1994793.png",
      },
      {
        name: "Cameras",
        price: "89",
        image: "/images/2c0a4a3071479d3ea04dbef308c19301.png",
      },
      {
        name: "Headphones",
        price: "10",
        image: "/images/db935c4b51e951193ddd1064f61e7b77.png",
      },
      {
        name: "Smart watches",
        price: "90",
        image: "/images/b66e289400004efec8d3c212c576efd7.png",
      },
      {
        name: "Gaming set",
        price: "35",
        image: "/images/7844418a11051c24070081697c1e9a58.png",
      },
      {
        name: "Laptops & PC",
        price: "340",
        image: "/images/67d46067797d63f72c5d238bab2c834f.png",
      },
      {
        name: "Smartphones",
        price: "19",
        image: "/images/5b845d5b649289426578b53ebaef4c65.png",
      },
      {
        name: "Electric kattle",
        price: "240",
        image: "/images/a2d288ce5bd52ddfac2945120df5102b.png",
      },
    ],
  },
];
