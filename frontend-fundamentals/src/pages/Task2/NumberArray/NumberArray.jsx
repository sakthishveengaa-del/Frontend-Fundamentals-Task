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

  // ASC
  const sortAsc = () => {
    setResult([...list].sort((a, b) => a - b).join(", "));
  };

  // DESC
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

  // 🔥 FORMAT RESULT (ONLY DISPLAY FIX)
  const formatResult = (value) => {
    if (!value) return "";

    if (value.includes(":")) {
      const parts = value.split(":");
      return `${parts[0]} [${parts[1].trim()}]`;
    }

    return `[${value}]`;
  };

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h6">
        Number Array Operations
      </Typography>

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
      <Stack
        direction="row"
        spacing={1}
        sx={{ mt: 2, flexWrap: "wrap" }}
      >
        <Button onClick={showOriginal}>Original</Button>
        <Button onClick={sortAsc}>Asc</Button>
        <Button onClick={sortDesc}>Desc</Button>
        <Button onClick={reverseList}>Reverse</Button>
        <Button onClick={showMax}>Max</Button>
        <Button onClick={showMin}>Min</Button>
      </Stack>

      {/* OUTPUT (FIXED FORMAT ONLY) */}
      {result && (
        <Typography sx={{ mt: 3, fontWeight: "bold" }}>
          Result: {formatResult(result)}
        </Typography>
      )}

      {/* ORIGINAL ARRAY */}
      <Typography sx={{ mt: 2 }}>
        Original Array: [{list.join(", ")}]
      </Typography>
    </div>
  );
}

export default NumberArray;