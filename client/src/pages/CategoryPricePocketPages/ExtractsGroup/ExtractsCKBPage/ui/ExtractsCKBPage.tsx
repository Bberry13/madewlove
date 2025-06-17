import React from "react";
import { ckbData } from "../model/ckbData";
import { CommonPricePage } from "../../../shared/components/CommonPricePage";

export function CKBPricePage(): React.JSX.Element {
  return (
    <CommonPricePage
      title={ckbData.title}
      introText={ckbData.introText}
      faqData={ckbData.faqData}
      priceGroupIndex={ckbData.priceGroupIndex}
      photos={ckbData.photos}
    />
  );
}