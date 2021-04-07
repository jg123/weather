import axios from "axios";
import { useState } from "react";
// @ts-ignore
import { Window } from "react95";
import EnterLocation from "./EnterLocation";
import Forecasts, { Forecast } from "./Forecasts";

const ForecastContainer = () => {
  const [forecasts, setForecasts] = useState<Forecast[]>([]);

  const addForecast = async (location: string) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?zip=${location}&appid=***REMOVED***&units=imperial`
    );
    if (
      forecasts.find(({ name, dt }) => data.name === name && data.dt === dt)
    ) {
      return;
    }
    setForecasts([...forecasts, data]);
  };

  return (
    <Window>
      <EnterLocation addLocation={addForecast} />
      <Forecasts forecasts={forecasts} />
    </Window>
  );
};

export default ForecastContainer;
