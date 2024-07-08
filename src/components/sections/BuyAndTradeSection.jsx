import React, { useState, useEffect } from "react";
import { Fade } from "react-reveal";

import buyIcon from "@/images/illustrations/buy.png";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import Select from "@/components/Select";

export default function BuyAndTradeSection() {
  const [amount, setAmount] = useState("5000");
  const [currency, setCurrency] = useState("0.00");
  const [currencySign, setCurrencySign] = useState("USD");
  const [currencyPrice, setCurrencyPrice] = useState(0);

  useEffect(() => {
    const fetchCurrencyPrice = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currencySign.toLowerCase()}`
        );
        const data = await response.json();
        setCurrencyPrice(data.bitcoin[currencySign.toLowerCase()]);
      } catch (error) {
        console.error("Error fetching currency price:", error);
      }
    };

    fetchCurrencyPrice();
  }, [currencySign]);

  useEffect(() => {
    if (currencyPrice > 0) {
      calculateAmount(amount);
    }
  }, [amount, currencyPrice]);

  const calculateAmount = (amount) => {
    const finalAmount = (parseFloat(amount) / currencyPrice).toFixed(6);
    setCurrency(finalAmount);
  };

  const formHandler = (e) => {
    e.preventDefault();
  };

  const inputChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  const inputCurrencyChangeHandler = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <section className="container mx-auto py-32">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="flex items-center">
          <div className="max-w-xl">
            <h2 className="font-bold text-4xl mb-6 leading-normal">
              Buy & trade your coin with a trusted <br />& verified vendor.
            </h2>
            <p className="text-gray mb-6">
              99.99% success transaction rate guaranteed, 24/7. We accept
              Credit, Paypal, Bank and Wire Transfers etc payment methods.
            </p>

            <form onSubmit={formHandler}>
              <div className="flex justify-between gap-4 md:gap-6 mb-6">
                <div className="border border-primary rounded-2xl py-3 md:py-4 px-4 md:px-6 flex items-center">
                  <div className="border-r border-primary pr-4 md:pr-6">
                    <small className="text-primary">Amount</small>
                  </div>
                  <input
                    type="text"
                    value={amount}
                    onChange={inputChangeHandler}
                    className="text-right outline-none w-full"
                  />
                </div>
                <Select
                  value={currencySign}
                  onChange={(e) => setCurrencySign(e.target.value)}
                />
              </div>

              <div className="flex justify-between gap-4 md:gap-6 mb-6">
                <div className="border border-primary rounded-2xl py-3 md:py-4 px-4 md:px-6 flex items-center w-full">
                  <div className="border-r border-primary pr-4 md:pr-6">
                    <small className="text-primary">Amount</small>
                  </div>
                  <input
                    type="text"
                    value={currency}
                    onChange={inputCurrencyChangeHandler}
                    className="text-right outline-none w-full"
                    readOnly
                  />
                </div>
                <Select value="BTC" />
              </div>
            </form>

            <PrimaryButton className="w-full">
              <a
                href="https://wa.me/+22897747549"
                target="_blank"
                rel="noreferrer"
              >
                Buy Now
              </a>
            </PrimaryButton>
          </div>
        </div>
        <div className="row-start-1 md:col-start-2">
          <Fade up>
            <img src={buyIcon} alt="Buy Cryptocurrency" />
          </Fade>
        </div>
      </div>
    </section>
  );
}
