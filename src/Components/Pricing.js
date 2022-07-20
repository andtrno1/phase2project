import React from "react";

import { PricingTable, PricingSlot, PricingDetail } from "react-pricing-table";

function Pricing() {
  return (
    <>
      <PricingTable highlightColor="#1976D2">
        <PricingSlot
          onClick={this.submit}
          buttonText="TRY IT FREE"
          title="FREE"
          priceText="$0/month"
        >
          <PricingDetail>
            {" "}
            <b>15</b> projects
          </PricingDetail>
          <PricingDetail>
            {" "}
            <b>5 GB</b> storage
          </PricingDetail>
          <PricingDetail>
            {" "}
            <b>5</b> users
          </PricingDetail>
          <PricingDetail strikethrough>
            {" "}
            <b>Time tracking</b>
          </PricingDetail>
        </PricingSlot>
        <PricingSlot
          highlighted
          onClick={this.submit}
          buttonText="SIGN UP"
          title="BASIC"
          priceText="$11.99/month"
        >
          <PricingDetail>
            {" "}
            <b>35</b> projects
          </PricingDetail>
          <PricingDetail>
            {" "}
            <b>15 GB</b> storage
          </PricingDetail>
          <PricingDetail>
            {" "}
            <b>Unlimited</b> users
          </PricingDetail>
          <PricingDetail>
            {" "}
            <b>Time tracking</b>
          </PricingDetail>
        </PricingSlot>
        <PricingSlot
          onClick={this.submit}
          buttonText="SIGN UP"
          title="PREMIUM"
          priceText="$49.99/month"
        >
          <PricingDetail>
            {" "}
            <b>100</b> projects
          </PricingDetail>
          <PricingDetail>
            {" "}
            <b>30 GB</b> storage
          </PricingDetail>
          <PricingDetail>
            {" "}
            <b>Unlimited</b> users
          </PricingDetail>
          <PricingDetail>
            {" "}
            <b>Time tracking</b>
          </PricingDetail>
        </PricingSlot>
        <PricingSlot
          onClick={this.submit}
          buttonText="SIGN UP"
          title="EXPERT"
          priceText="$99.99/month"
        >
          <PricingDetail>
            {" "}
            <b>Unlimited</b> projects
          </PricingDetail>
          <PricingDetail>
            {" "}
            <b>75 GB</b> storage
          </PricingDetail>
          <PricingDetail>
            {" "}
            <b>Unlimited</b> users
          </PricingDetail>
          <PricingDetail>
            {" "}
            <b>Time tracking</b>
          </PricingDetail>
        </PricingSlot>
      </PricingTable>
    </>
  );
}

export default Pricing;
