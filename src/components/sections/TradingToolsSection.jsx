import React from "react";

import tradingTools from "@/images/illustrations/tradingtools.png";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import { Fade} from "react-reveal";

export default function TradingToolsSection() {
  return (
    <section className="px-6">
      <div className="rounded-3xl bg-gradient-to-b from-[#FFFFFF] to-[#F4F9FF] py-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="lg:row-start-1 max-w-lg">
              <h2 className="font-bold text-4xl mb-6 leading-normal">
                Advanced Trading{" "}
                <span className="text-blue-gradient">Tools</span>
              </h2>
              <div className="mb-6">
                <h3 className="font-bold text-xl mb-4">
                  Professional Access, Non-stop Availability With BlockBot
                </h3>
                <p className="text-gray">
                  We provide premium access to crypto and fx trading bots for
                  both individuals and institutions through high liquidity,
                  reliable order execution and constant uptime.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="font-bold text-xl mb-4">
                  Build ontop of our Powerful Apis
                </h3>
                <p className="text-gray">
                  Set up your own trading interface or deploy your algorithmic
                  strategy with our high-performance GraphQL & RESTful APIs.
                  Connect to our WebSocket for real-time data streaming.
                </p>
              </div>
              <SecondaryButton><a href="/waitlist">Join Waitlist</a></SecondaryButton>
            </div>
            <div className="row-start-1 mb-8">
              <Fade up delay={500}>
                <img src={tradingTools} alt="" />
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
