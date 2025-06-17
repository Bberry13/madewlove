import React from "react";
import { PriceCards } from "@/features/PriceCards/ui/PriceCards";
import { extractsCardsData } from "../model/extractsCardsData";

export function ExtractsGroupPage(): React.JSX.Element {
  return <PriceCards cards={extractsCardsData} />;
}
