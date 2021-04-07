import axios from "axios";
import { useCallback, useState } from "react";
// @ts-ignore
import { Window } from "react95";
import EnterLocation from "./EnterLocation";
import Forecasts, { Forecast } from "./Forecasts";

const ForecastContainer = () => {
  const [forecasts, setForecasts] = useState<Forecast[]>([]);

  const addForecast = useCallback(
    async (location: string) => {
      const { data } = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?zip=${location}&appid=ea4304b1c266b2705e860ad3f9db7c89&units=imperial`
      );
      setForecasts([...forecasts, data]);
    },
    [forecasts]
  );

  return (
    <Window>
      <EnterLocation addLocation={addForecast} />
      <Forecasts forecasts={forecasts} />
    </Window>
  );
};

export default ForecastContainer;
