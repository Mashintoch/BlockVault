import React, { useEffect, useState } from "react";
import ListCoin from "@/components/ListCoin";

export default function CryptocurrencySection() {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [gainerCoins, setGainerCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/search/trending`
      );
      const data = await response.json();
      const coins = data.coins.map((coin) => ({
        image: coin.item.thumb,
        name: coin.item.name,
        price: formatPrice(coin.item.data.price),
        uptrend: coin.item.data.price_change_percentage_24h.usd > 0,
      }));
      setTrendingCoins(coins);
    };

    const fetchGainerCoins = async () => {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=percent_change_24h_desc&per_page=15&page=1&sparkline=false`
      );
      const data = await response.json();
      const coins = data.map((coin) => ({
        image: coin.image,
        name: coin.name,
        price: formatPrice(coin.current_price),
        uptrend: coin.price_change_percentage_24h > 0,
      }));
      setGainerCoins(coins);
    };

    fetchTrendingCoins();
    fetchGainerCoins();
  }, []);

  const formatPrice = (price) => {
    return `$${parseFloat(price).toFixed(2)}`;
  };

  return (
    <section className="relative md:-mt-10">
      <div className="mx-auto rounded-3xl lg:mx-8 bg-white py-8 px-4 shadow-lg">
        <div className="grid md:grid-cols-2 xl:grid-cols-3">
          <div className="px-4 mb-6 lg:mb-0">
            <ListCoin title="🔥 Trending" more="#" data={trendingCoins} />
          </div>
          <div className="px-4 mb-6 lg:mb-0">
            <ListCoin title="🚀 Top Gainers" data={gainerCoins} more="#" />
          </div>
        </div>
      </div>
    </section>
  );
}
