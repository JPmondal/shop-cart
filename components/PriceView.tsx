import React from "react";
import PriceFormatter from "./PriceFormatter";

const PriceView = ({
  price,
  discount,
  className,
}: {
  price: number | undefined;
  discount?: number | undefined;
  className?: string;
}) => {
  return (<div>
    <div className="flex items-center gap-2
    ">
      <PriceFormatter className="shadow-shop_dark_green" amount={price} />
      {price && discount && <PriceFormatter amount={price + (discount * price)/100} className="line-through text-xs font-normal text-shop_light_text"/>}
    </div>
  </div>);
};

export default PriceView;
