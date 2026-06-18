import { useState } from "react";
import { TextField, Button, Typography, Stack } from "@mui/material";

function NumberArray() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [result, setResult] = useState("");

  const addNumber = () => {
    if (input === "" || isNaN(input)) {
      setResult("Only numbers allowed");
      return;
    }

    setList([...list, Number(input)]);
    setInput("");
    setResult("");
  };

  // ORIGINAL
  const showOriginal = () => {
    setResult(list.join(", "));
  };

  // ASC (A-Z style)
  const sortAsc = () => {
    setResult([...list].sort((a, b) => a - b).join(", "));
  };

  // DESC (Z-A style)
  const sortDesc = () => {
    setResult([...list].sort((a, b) => b - a).join(", "));
  };

  // REVERSE
  const reverseList = () => {
    setResult([...list].slice().reverse().join(", "));
  };

  // MAX
  const showMax = () => {
    setResult("Max: " + Math.max(...list));
  };

  // MIN
  const showMin = () => {
    setResult("Min: " + Math.min(...list));
  };

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h6">Number Array Operations</Typography>

      {/* INPUT */}
      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
        <TextField
          label="Enter Number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <Button variant="contained" onClick={addNumber}>
          Add
        </Button>
      </Stack>

      {/* BUTTONS */}
      <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: "wrap" }}>
        <Button onClick={showOriginal}>Original</Button>
        <Button onClick={sortAsc}>Asc</Button>
        <Button onClick={sortDesc}>Des</Button>
        <Button onClick={reverseList}>Reverse</Button>
        <Button onClick={showMax}>Max</Button>
        <Button onClick={showMin}>Min</Button>
      </Stack>

      {/* OUTPUT */}
      {result && (
        <Typography sx={{ mt: 3, fontWeight: "bold" }}>
          {result}
        </Typography>
      )}

      {/* ORIGINAL ARRAY */}
      <Typography sx={{ mt: 2 }}>
        Original Array: {list.join(", ")}
      </Typography>
    </div>
  );
}

export default NumberArray;