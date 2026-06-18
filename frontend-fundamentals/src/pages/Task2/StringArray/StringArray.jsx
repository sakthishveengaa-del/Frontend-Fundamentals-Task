import { useState } from "react";
import { TextField, Button, Typography, Stack } from "@mui/material";

function StringArray() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [result, setResult] = useState("");

  const addItem = () => {
    const regex = /^[A-Za-z]+$/;

    if (!regex.test(input)) {
      setResult("Only alphabets allowed");
      return;
    }

    setList([...list, input]);
    setInput("");
    setResult("");
  };

  // ORIGINAL DISPLAY
  const showOriginal = () => {
    setResult(list.join(", "));
  };

  // A-Z
  const sortAZ = () => {
    setResult([...list].sort().join(", "));
  };

  // Z-A
  const sortZA = () => {
    setResult([...list].sort().reverse().join(", "));
  };

  // REVERSE
  const reverseList = () => {
    setResult([...list].slice().reverse().join(", "));
  };

  // FIRST
  const showFirst = () => {
    setResult("First: " + list[0]);
  };

  // LAST
  const showLast = () => {
    setResult("Last: " + list[list.length - 1]);
  };

  // 🔥 FORMAT RESULT DISPLAY
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
        String Array Operations
      </Typography>

      {/* INPUT */}
      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
        <TextField
          label="Enter String"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <Button variant="contained" onClick={addItem}>
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
        <Button onClick={sortAZ}>A-Z</Button>
        <Button onClick={sortZA}>Z-A</Button>
        <Button onClick={reverseList}>Reverse</Button>
        <Button onClick={showFirst}>First</Button>
        <Button onClick={showLast}>Last</Button>
      </Stack>

      {/* OUTPUT (FIXED FORMAT) */}
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

export default StringArray;