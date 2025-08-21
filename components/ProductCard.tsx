import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { Flame, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AddToWishList from "./AddToWishList";
import { scale } from "motion/react";
import { Title } from "./ui/text";
import PriceView from "./PriceView";
import AddtoCartButton from "./AddtoCartButton";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group text-sm border-[1px] border-dark_blue/20 rounded-md bg-white group">
      <div className="relative group overflow-hidden bg-shop_light_bg">
        {product?.images && (
          <Image
            src={urlFor(product?.images[0]).url()}
            alt="ProductImage"
            loading="lazy"
            width={700}
            height={700}
            className={`w-full h-64 object-contain overflow-hidden transition-transform hoverEffect ${product?.stock !== 0 ? "group-hover:scale-105" : "opacity-50"}`}
          />
        )}
        <AddToWishList product={product} />
        {product?.status === "sale" && (
          <p className="absolute z-10 top-2 left-2 rounded-full text-xs border border-darkColor/50 px-2 group-hover:border-shop_light_green group-hover:text-shop_light_green hoverEffect">
            Sale!
          </p>
        )}
        {product?.status === "hot" && (
          <Link
            href={"/deal"}
            className="absolute left-2 top-2 z-10 rounded-full text-xs p-1 border-shop_orange/50 border group-hover:border-shop_orange hover:text-shop_dark_green hovereffect"
          >
            <Flame
              className="text-shop_orange/50 group-hover:text-shop_orange hoverEffect"
              fill="#fb6c08"
              size={18}
            />
          </Link>
        )}
        {product?.status === "new" && (
          <p className="absolute z-10 top-2 left-2 rounded-full text-xs border border-darkColor/50 px-2 group-hover:border-shop_light_green group-hover:text-shop_light_green hoverEffect">
            New!
          </p>
        )}
      </div>
      <div className="p-3 flex flex-col gap-2">
        {product?.categories && (
          <p className="uppercase line-clamp-1 text-xs text-shop_light_text">
            {product.categories.map((cat) => cat).join(", ")}
          </p>
        )}
        <Title className="text-sm line-clamp-1 ">{product?.name}</Title>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, index) => (
              <StarIcon
                size={13}
                key={index}
                className={
                  index < 4
                    ? "text-shop_lighter_green"
                    : "text-shop_lighter_text"
                }
                fill={index < 4 ? "#93D991" : "#ababab"}
              />
            ))}
          </div>
          <p className="text-shop_light_text text-xs tracking-wide">
            5 Reviews
          </p>
        </div>
        <div className="flex items-center gap-2.5 ">
          <p
            className={`font-semibold ${product?.stock === 0 ? "text-red-600" : "text-shop_light_green/80"}`}
          >
            In Stock
          </p>
          <p>
            {(product?.stock as number) > 0 ? product?.stock : "Out of Stock"}
          </p>
        </div>
        <PriceView price={product?.price} discount={product?.discount} className="text-sm"/>
        <AddtoCartButton product={product} className="w-36 rounded-full"/>
      </div>
    </div>
  );
};

export default ProductCard;
