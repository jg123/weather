import axios from "axios";
import { useState } from "react";
import EnterLocation from "./EnterLocation";
import Forecasts, { Forecast } from "./Forecasts";

const ForecastContainer = () => {
  const [forecasts, setForecasts] = useState<Forecast[]>([]);

  const addForecast = async (location: string) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?zip=${location}&appid=ea4304b1c266b2705e860ad3f9db7c89&units=imperial`
    );
    if (
      forecasts.find(({ name, dt }) => data.name === name && data.dt === dt)
    ) {
      return;
    }
    setForecasts([...forecasts, { ...data, zipCode: location }]);
  };

  const removeForecast = (name: string, dt: number) => {
    setForecasts(forecasts.filter((forecast) => forecast.name !== name && forecast.dt !== dt));
  }

  return (
    <>
      <EnterLocation addLocation={addForecast} />
      <Forecasts forecasts={forecasts} removeForecast={removeForecast} />
    </>
  );
};

export default ForecastContainer;
