import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Meto() {
  const endpoint = "https://api.ipma.pt/open-data/distrits-islands.json";

  const [cities, setCities] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await axios(endpoint);
      setCities(result.data.data);
      console.log(result);
    };

    getData();
  }, []);

  console.log({ cities });

  return (
    <>
      <h1>Meteo</h1>
      <div>
        {cities.map((city) => {
          return (
            <div key={city.globalIdLocal}>
              <Link>{city.local}</Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
