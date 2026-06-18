import { useState } from "react";
import { Button, Stack } from "@mui/material";

import NumberArray from "./NumberArray/NumberArray";
import StringArray from "./StringArray/StringArray";

function Task2() {
  const [view, setView] = useState("number");

  return (
    <div style={{ padding: "20px" }}>

      <Stack direction="row" spacing={2}>

        <Button
          variant={view === "number" ? "contained" : "outlined"}
          onClick={() => setView("number")}
        >
          Number Array
        </Button>

        <Button
          variant={view === "string" ? "contained" : "outlined"}
          onClick={() => setView("string")}
        >
          String Array
        </Button>

      </Stack>

      <div style={{ marginTop: "20px" }}>
        {view === "number"
          ? <NumberArray />
          : <StringArray />
        }
      </div>

    </div>
  );
}

export default Task2;