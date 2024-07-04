import React from "react";

import DropdownMenu from "./DropdownMenu";

export default function Menus() {
  return (
    <>
      <DropdownMenu label="Cryptocurrency">
        <div className="w-full">
          <a href="/" className="hover:text-primary py-2 block">
            Buy Crypto
          </a>
        </div>
        <div className="w-full">
          <a href="/" className="hover:text-primary py-2 block">
            Sell Crypto
          </a>
        </div>
      </DropdownMenu>
      <DropdownMenu label="Exchanges">
        <div className="w-full">
          <a href="/" className="hover:text-primary py-2 block">
            Binance
          </a>
        </div>
        <div className="w-full">
          <a href="/" className="hover:text-primary py-2 block">
            Oklex
          </a>
        </div>
        <div className="w-full">
          <a href="/" className="hover:text-primary py-2 block">
            Buybit
          </a>
        </div>
      </DropdownMenu>
      <div className="w-full flex">
        <a href="/" className="hover:text-primary py-2 flex">
          Telegram Bot
        </a>
      </div>
    </>
  );
}
