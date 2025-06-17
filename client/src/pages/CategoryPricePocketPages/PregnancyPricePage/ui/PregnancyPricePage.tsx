import React from "react";
import { pregnancyData } from "../model/pregnancyData";
import { CommonPricePage } from "../../shared/components/CommonPricePage";

export function PregnancyPricePage(): React.JSX.Element {
  return (
    <CommonPricePage
      title={pregnancyData.title}
      introText={pregnancyData.introText}
      faqData={pregnancyData.faqData}
      priceGroupIndex={pregnancyData.priceGroupIndex}
      photos={pregnancyData.photos}
      additionalInfo={pregnancyData.additionalInfo}
    />
  );
}

