import React from "react";
import { mdData } from "../model/mdData";
import { CommonPricePage } from "../../../shared/components/CommonPricePage";

export function MDPricePage(): React.JSX.Element {
  return (
    <CommonPricePage
      title={mdData.title}
      introText={mdData.introText}
      faqData={mdData.faqData}
      priceGroupIndex={mdData.priceGroupIndex}
      photos={mdData.photos}
    />
  );
}
