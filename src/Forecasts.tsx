// @ts-ignore
import { WindowContent, Fieldset, List, ListItem } from "react95";

export interface Forecast {
  name: string;
  main: { temp: number; feels_like: number };
  weather: [{ description: string; icon: string }];
}

const Forecasts = ({ forecasts }: { forecasts: Forecast[] }) => {
  return (
    <WindowContent>
      {forecasts.map(
        ({
          name,
          main: { temp, feels_like },
          weather: [{ description, icon }]
        }: Forecast) => (
          <Fieldset label={name}>
            <List>
              <ListItem>{description}</ListItem>
              <ListItem>
                <img
                  src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
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
