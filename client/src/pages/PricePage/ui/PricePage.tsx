import React from "react";
import { PriceCards } from "@/features/PriceCards/ui/PriceCards";
import { priceCardsData } from "../model/priceCardsData";

export function PricePage(): React.JSX.Element {
  return <PriceCards cards={priceCardsData} />;
}

