import { useState } from "react";
// @ts-ignore
import { WindowContent, Fieldset, TextField, Button } from "react95";

const EnterLocation = ({ addLocation }: { addLocation: (location: string) => void }) => {
  const [zipCode, setZipCode] = useState("");

  const addZipCode = async () => {
    if (zipCode.length < 1) {
      return;
    }
    window.localStorage.setItem("zipcode", zipCode);
    addLocation(zipCode);
  };

  return (
    <WindowContent>
      <Fieldset label="Add a location">
        Enter a zipcode:
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
  );
};

export default EnterLocation;
