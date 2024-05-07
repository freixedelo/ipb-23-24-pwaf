import axios from "axios";
import { useEffect, useState } from "react";

export default function Coins() {
  const endpoint = "https://api.coincap.io/v2/assets";

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    async function getCoins() {
      const result = await axios(endpoint);
      setCoins(result.data);
    }

    getCoins();
  }, []);

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
