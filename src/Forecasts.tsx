// @ts-ignore
import { WindowContent, Fieldset, List, ListItem } from "react95";

export type Forecast = {
  name: string;
  dt: number;
  main: { temp: number; feels_like: number };
  weather: [{ description: string; icon: string }];
}

const Forecasts = ({ forecasts }: { forecasts: Forecast[] }) => {
  return (
    <WindowContent>
      {forecasts.map(
        ({
          name,
          dt,
          main: { temp, feels_like },
          weather: [{ description, icon }]
        }: Forecast) => (
          <Fieldset label={name} key={name + dt}>
            <List>
              <ListItem>{description}</ListItem>
              <ListItem>
                <img
                  src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                  alt=""
                />
              </ListItem>
              <ListItem>Current temperature: {temp}°F</ListItem>
              <ListItem>Feels like: {feels_like}°F</ListItem>
            </List>
          </Fieldset>
        )
      )}
    </WindowContent>
  );
};

export default Forecasts;
