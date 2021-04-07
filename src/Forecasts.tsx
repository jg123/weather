import {
  Window,
  WindowHeader,
  Button,
  List,
  ListItem
  // @ts-ignore
} from "react95";
import styled from "styled-components";

const Wrapper = styled.div`
  .window-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .close-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: -1px;
    margin-top: -1px;
    transform: rotateZ(45deg);
    position: relative;
    &:before,
    &:after {
      content: "";
      position: absolute;
      background: rgb(10, 10, 10);
    }
    &:before {
      height: 100%;
      width: 3px;
      left: 50%;
      transform: translateX(-50%);
    }
    &:after {
      height: 3px;
      width: 100%;
      left: 0px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .window {
    display: block;
    min-height: 200px;
    margin-top: 1rem;
  }
`;

export type Forecast = {
  name: string;
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
  };
  weather: [{ description: string; icon: string }];
};

const Forecasts = ({ forecasts, removeForecast }: { forecasts: Forecast[], removeForecast: (name: string, dt: number) => void }) => {
  return (
    <Wrapper>
      {forecasts.map(
        ({
          name,
          dt,
          main: { temp, feels_like, temp_min, temp_max },
          weather: [{ description, icon }]
        }: Forecast) => (
          <Window className="window" key={name + dt}>
            <WindowHeader className="window-header">
              <span>{name}</span>
              <Button onClick={() => removeForecast(name, dt)}>
                <span className="close-icon" />
              </Button>
            </WindowHeader>
            <List shadow={false} fullWidth>
              <ListItem>{description}</ListItem>
              <ListItem>
                <img
                  src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                  alt=""
                />
              </ListItem>
              <ListItem>Current temperature: {temp}°F</ListItem>
              <ListItem>Feels like: {feels_like}°F</ListItem>
              <ListItem>
                Today - min: {temp_min}°F max: {temp_max}°F
              </ListItem>
            </List>
          </Window>
        )
      )}
    </Wrapper>
  );
};

export default Forecasts;
