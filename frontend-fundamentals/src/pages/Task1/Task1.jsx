import { useState } from "react";
import { Container, Card, CardContent, Typography, Button, Stack } from "@mui/material";
import "./Task1.scss";

function Task1() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  const reset = () => setCount(0);

  return (
    <Container className="task1">
      <Card className="task1-card">
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Counter Application
          </Typography>

          <Typography variant="h2" className="count">
            {count}
          </Typography>

          <Stack spacing={2}>
            <Button variant="contained" onClick={increment}>
              Increment
            </Button>

            <Button variant="outlined" color="error" onClick={decrement}>
              Decrement
            </Button>

            <Button variant="contained" color="secondary" onClick={reset}>
              Reset
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Task1;