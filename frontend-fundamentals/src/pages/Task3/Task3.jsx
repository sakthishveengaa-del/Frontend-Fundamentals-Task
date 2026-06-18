import { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Stack,
  Card,
  CardContent,
  Alert,
} from "@mui/material";

import "./Task3.scss";

function Task3() {
  const [input, setInput] = useState("");
  const [stored, setStored] = useState("");
  const [error, setError] = useState("");

  const [result, setResult] = useState([]);

  // SUBMIT
  const handleSubmit = () => {
    const regex = /^[A-Za-z]+$/;

    if (!regex.test(input.trim())) {
      setError("Please enter alphabetic characters only.");
      setStored("");
      setResult([]);
      return;
    }

    setError("");
    setStored(input);

    // FIRST show original
    setResult([input]);

    setInput("");
  };

  // REVERSE
  const handleReverse = () => {
    if (!stored) return;

    const reversed = stored.split("").reverse().join("");

    setResult((prev) => {
      const updated = [...prev];
      updated[1] = reversed;
      return updated;
    });
  };

  // COUNT
  const handleCount = () => {
    if (!stored) return;

    setResult((prev) => {
      const updated = [...prev];
      updated[2] = `Character Count: ${stored.length}`;
      return updated;
    });
  };

  return (
    <div className="task3-container">

      <Card>
        <CardContent>

          <Typography variant="h5">
            Task 3: String Operations
          </Typography>

          {/* INPUT */}
          <Stack direction="row" spacing={2} className="input-box">
            <TextField
              label="Enter String"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              fullWidth
            />

            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </Stack>

          {/* ERROR */}
          {error && <Alert severity="error">{error}</Alert>}

          {/* BUTTONS */}
          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
            <Button variant="outlined" onClick={handleReverse}>
              Reverse
            </Button>

            <Button variant="outlined" onClick={handleCount}>
              Count
            </Button>
          </Stack>

          {/* DISPLAY STACK */}
          <div style={{ marginTop: "20px" }}>
            {result[0] && (
              <Typography><b>Original:</b> {result[0]}</Typography>
            )}

            {result[1] && (
              <Typography sx={{ mt: 1 }}>
                <b>Reverse:</b> {result[1]}
              </Typography>
            )}

            {result[2] && (
              <Typography sx={{ mt: 1 }}>
                <b>Count:</b> {result[2]}</Typography>
            )}
          </div>

        </CardContent>
      </Card>

    </div>
  );
}

export default Task3;