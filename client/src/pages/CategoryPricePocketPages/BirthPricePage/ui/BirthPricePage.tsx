import React from "react";
import { birthData } from "../model/birthData";
import { CommonPricePage } from "../../shared/components/CommonPricePage";

export function BirthPricePage(): React.JSX.Element {
  return (
    <CommonPricePage
      title={birthData.title}
      introText={birthData.introText}
      faqData={birthData.faqData}
      priceGroupIndex={birthData.priceGroupIndex}
      photos={birthData.photos}
    />
  );
}

