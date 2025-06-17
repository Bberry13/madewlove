import React from "react";
import { lapinoData } from "../model/lapinoData";
import { CommonPricePage } from "../../../shared/components/CommonPricePage";

export function LapinoPricePage(): React.JSX.Element {
  return (
    <CommonPricePage
      title={lapinoData.title}
      introText={lapinoData.introText}
      faqData={lapinoData.faqData}
      priceGroupIndex={lapinoData.priceGroupIndex}
      photos={lapinoData.photos}
      
    />
  );
}
