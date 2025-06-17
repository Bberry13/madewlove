import React from "react";
import { pbData } from "../model/pbData";
import { CommonPricePage } from "../../shared/components/CommonPricePage";

export function PhotoBookPricePage(): React.JSX.Element {
  return (
    <CommonPricePage
      title={pbData.title}
      priceGroupIndex={pbData.priceGroupIndex}
      photos={pbData.photos}
    />
  );
}