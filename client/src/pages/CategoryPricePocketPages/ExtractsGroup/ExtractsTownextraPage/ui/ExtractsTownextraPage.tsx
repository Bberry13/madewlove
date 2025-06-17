import React from "react";
import { townExtraData } from "../model/townExtraData";
import { CommonPricePage } from "../../../shared/components/CommonPricePage";

export function TownExtraPricePage(): React.JSX.Element {
  return (
    <CommonPricePage
      title={townExtraData.title}
      introText={townExtraData.introText}
      faqData={townExtraData.faqData}
      priceGroupIndex={townExtraData.priceGroupIndex}
      photos={townExtraData.photos}
    />
  );
}
