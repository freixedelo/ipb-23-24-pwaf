import axios from "axios";
import { useEffect, useState } from "react";

export default function Coins() {
  const endpoint = "https://api.coincap.io/v2/assets";

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    async function getData() {
      const coinsResult = await axios(endpoint);
      setCoins(coinsResult.data);
    }

    getData();
  }, []);
  console.log(coins);
  return (
    <div>
      <h1>Coins</h1>
      <div>
        {coins.data.map((coin) => (
          <div>{` ${coin.name} - ${coin.priceUsd}`}</div>
        ))}
      </div>
    </div>
  );
}
