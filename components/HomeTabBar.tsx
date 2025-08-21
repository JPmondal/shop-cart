import { productType } from "@/constants/data";
import Link from "next/link";
import React from "react";

interface Props {
  selectedTab: string;
  onTabSelect: (tab: string) => void;
}

const HomeTabBar = ({ selectedTab, onTabSelect }: Props) => {
  return (
    <div className="flex justify-between items-center flex-wrap gap-5">
      <div className="flex items-center gap-3 text-sm font-semibold">
        {productType?.map((item, index) => (
          <button
            onClick={() => onTabSelect(item?.title)}
            className={`border border-shop_btn_dark_green/20 px-4 py-1.5 rounded-full hover:bg-shop_light_green hoverEffect hover:text-white ${selectedTab == item?.title ? "bg-shop_light_green text-white" : "bg-shop_btn_dark_green/20"}`}
            key={item.title}
          >
            {item?.title}
          </button>
        ))}
      </div>
      <Link
        className={`border border-shop_btn_dark_green px-4 py-1.5 rounded-full hover:bg-shop_light_green hoverEffect hover:text-white`}
        href={"/shop"}
      >
        See all
      </Link>
    </div>
  );
};

export default HomeTabBar;
