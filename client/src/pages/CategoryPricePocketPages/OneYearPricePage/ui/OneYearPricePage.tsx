import React from "react";
import { oneyearData } from "../model/oneyearData";
import { CommonPricePage } from "../../shared/components/CommonPricePage";

export function OneYearPricePage(): React.JSX.Element {
  return (
    <CommonPricePage
      title={oneyearData.title}
      introText={oneyearData.introText}
      faqData={oneyearData.faqData}
      priceGroupIndex={oneyearData.priceGroupIndex}
      photos={oneyearData.photos}
    />
  );
}