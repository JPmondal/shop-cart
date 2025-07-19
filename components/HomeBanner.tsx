import React from "react";
import { Title } from "./ui/text";
import Link from "next/link";
import { banner_1 } from "@/images";
import Image from "next/image";

const HomeBanner = () => {
  return (
    <div
      className="py-16 md:py-0 bg-shop_light_pink rounded-lg px-10 lg:px-24
     flex items-center justify-between"
    >
      <div className="space-y-5">
        <Title>
          Grab upto 50% off <br />
          on selected headphones
        </Title>
        <Link
          className="bg-shop_btn_dark_green/90 text-white/90 px-5 py-2 rounded-md text-sm font-semibold hover:bg-shop_dark_green hoverEffect"
          href={"/shop"}
        >
          Buy Now
        </Link>
      </div>
      <div>
        <Image
          src={banner_1}
          alt="banner_1"
          className="hidden md:inline-flex w-90"
        />
      </div>
    </div>
  );
};

export default HomeBanner;
