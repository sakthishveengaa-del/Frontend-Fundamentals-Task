import { AppBar, Toolbar, Button, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>

        <Stack direction="row" spacing={2}>

          <Button component={NavLink} to="/task1" style={{ color: "white" }}>
            Task 1
          </Button>

          <Button component={NavLink} to="/task2" style={{ color: "white" }}>
            Task 2
          </Button>

          <Button component={NavLink} to="/task3" style={{ color: "white" }}>
            Task 3
          </Button>

          <Button component={NavLink} to="/task4" style={{ color: "white" }}>
            Task 4
          </Button>

          <Button component={NavLink} to="/task5" style={{ color: "white" }}>
            Task 5
          </Button>

        </Stack>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;