import { FormEvent, useState } from "react";
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

  const addZipCode = async (event: FormEvent) => {
    event.preventDefault();
    if (zipCode.length < 1) {
      return;
    }
    window.localStorage.setItem("zipcode", zipCode);
    addLocation(zipCode);
  };

  return (
    <Window style={{ minWidth: "400px" }}>
      <WindowHeader className="window-header">
        <span>Weather</span>
      </WindowHeader>
      <WindowContent>
        <Fieldset label="Add a location">
          <form onSubmit={addZipCode}>
            <label htmlFor="enter-location">Enter a zipcode:</label>
            <div>
              <div style={{ display: "flex" }}>
                <TextField
                  id="enter-location"
                  value={zipCode}
                  placeholder="Type here..."
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setZipCode(event.target.value)
                  }
                  fullWidth
                />
                <Button type="submit" style={{ marginLeft: 4 }}>
                  Add
                </Button>
              </div>
            </div>
          </form>
        </Fieldset>
      </WindowContent>
    </Window>
  );
};

export default EnterLocation;
