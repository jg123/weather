import { useState } from "react";
import {
  Window,
  WindowContent,
  WindowHeader,
  Fieldset,
  TextField,
  Button
  // @ts-ignore
} from "react95";

const EnterLocation = ({
  addLocation
}: {
  addLocation: (location: string) => void;
}) => {
  const [zipCode, setZipCode] = useState("");

  const addZipCode = async () => {
    if (zipCode.length < 1) {
      return;
    }
    window.localStorage.setItem("zipcode", zipCode);
    addLocation(zipCode);
  };

  return (
    <Window style={{ "min-width": "400px" }}>
      <WindowHeader className="window-header">
        <span>Weather</span>
      </WindowHeader>
      <WindowContent>
        <Fieldset label="Add a location">
          <span>Enter a zipcode:</span>
          <div>
            <div style={{ display: "flex" }}>
              <TextField
                value={zipCode}
                placeholder="Type here..."
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setZipCode(event.target.value)
                }
                fullWidth
              />
              <Button onClick={addZipCode} style={{ marginLeft: 4 }}>
                Add
              </Button>
            </div>
          </div>
        </Fieldset>
      </WindowContent>
    </Window>
  );
};

export default EnterLocation;
