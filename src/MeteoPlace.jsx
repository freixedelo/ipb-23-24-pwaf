import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function MeteoPlace() {
  let { globalId } = useParams();
  const endpoint = `https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/${globalId}.json`;
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const getForecast = async () => {
      const result = await axios(endpoint);
      setForecast(result.data.data);
    };
    getForecast();
  }, [globalId]);

  return (
    <>
      <h1>Localidade</h1>
      <div>
        {forecast?.map((dailyForecast) => {
          return (
            <div
              key={dailyForecast.forecastDate}
            >{`${dailyForecast.forecastDate}: min(${dailyForecast.tMin}) e max(${dailyForecast.tMax})`}</div>
          );
        })}
      </div>
    </>
  );
}
