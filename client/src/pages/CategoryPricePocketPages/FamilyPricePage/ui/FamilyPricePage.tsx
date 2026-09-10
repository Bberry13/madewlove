import React from "react";
import { familyData } from "../model/familyData";
import { CommonPricePage } from "../../shared/components/CommonPricePage";

export function FamilyPricePage(): React.JSX.Element {
  return (
    <CommonPricePage
      title={familyData.title}
      introText={familyData.introText}
      faqData={familyData.faqData}
      priceGroupIndex={familyData.priceGroupIndex}
      photos={familyData.photos}
    />
  );
}
