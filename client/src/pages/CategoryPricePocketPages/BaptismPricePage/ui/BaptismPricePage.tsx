import React from "react";
import { baptismData } from "../model/baptismData";
import { CommonPricePage } from "../../shared/components/CommonPricePage";

export function BaptismPricePage(): React.JSX.Element {
  return (
    <CommonPricePage
      title={baptismData.title}
      introText={baptismData.introText}
      faqData={baptismData.faqData}
      priceGroupIndex={baptismData.priceGroupIndex}
      photos={baptismData.photos}
    />
  );
}