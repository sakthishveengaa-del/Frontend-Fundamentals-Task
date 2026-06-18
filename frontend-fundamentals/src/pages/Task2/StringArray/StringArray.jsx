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

  // 🔥 ORIGINAL DISPLAY
  const showOriginal = () => {
    setResult(list.join(", "));
  };

  // 🔥 A-Z (sorted display only)
  const sortAZ = () => {
    setResult([...list].sort().join(", "));
  };

  // 🔥 Z-A (reverse sort display only)
  const sortZA = () => {
    setResult([...list].sort().reverse().join(", "));
  };

  // 🔥 Reverse order display only
  const reverseList = () => {
    setResult([...list].slice().reverse().join(", "));
  };

  // 🔥 First item
  const showFirst = () => {
    setResult("First: " + list[0]);
  };

  // 🔥 Last item
  const showLast = () => {
    setResult("Last: " + list[list.length - 1]);
  };

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h6">String Array Operations</Typography>

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
      <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: "wrap" }}>
        <Button onClick={showOriginal}>Original</Button>
        <Button onClick={sortAZ}>A-Z</Button>
        <Button onClick={sortZA}>Z-A</Button>
        <Button onClick={reverseList}>Reverse</Button>
        <Button onClick={showFirst}>First</Button>
        <Button onClick={showLast}>Last</Button>
      </Stack>

      {/* OUTPUT */}
      {result && (
        <Typography sx={{ mt: 3, fontWeight: "bold" }}>
          {result}
        </Typography>
      )}

      {/* ORIGINAL ARRAY ALWAYS SAFE */}
      <Typography sx={{ mt: 2 }}>
        Original Array: {list.join(", ")}
      </Typography>
    </div>
  );
}

export default StringArray;