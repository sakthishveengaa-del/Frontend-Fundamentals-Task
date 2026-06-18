import { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stack,
} from "@mui/material";

import "./Task5.scss";

function Task5() {
  const empty = {
    id: "",
    name: "",
    department: "",
    designation: "",
    salary: "",
  };

  const [employees, setEmployees] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [form, setForm] = useState(empty);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  // INPUT
  const handleChange = (e) => {
    if (e.target.name === "salary" && isNaN(e.target.value)) return;
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ADD
  const addEmployee = () => {
    if (Object.values(form).includes("")) {
      setError("All fields are mandatory");
      return;
    }

    if (employees.some((e) => e.id === form.id)) {
      alert("ID must be unique");
      return;
    }

    const data = [...employees, form];
    setEmployees(data);
    setFiltered(data);
    setForm(empty);
    setError("");
  };

  // OPEN EDIT
  const openEdit = (emp) => {
    setForm(emp);
    setEditOpen(true);
  };

  // CLOSE EDIT (🔥 FIX)
  const closeEdit = () => {
    setEditOpen(false);
    setForm(empty);
  };

  // UPDATE
  const updateEmployee = () => {
    const data = employees.map((e) =>
      e.id === form.id ? form : e
    );

    setEmployees(data);
    setFiltered(data);
    setEditOpen(false);
    setForm(empty);
  };

  // DELETE
  const openDelete = (emp) => {
    setSelected(emp);
    setDeleteOpen(true);
  };

  const deleteEmployee = () => {
    const data = employees.filter((e) => e.id !== selected.id);
    setEmployees(data);
    setFiltered(data);
    setDeleteOpen(false);
    setSelected(null);
  };

  // SEARCH
  const searchEmployee = () => {
    setFiltered(
      employees.filter((e) =>
        e.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  return (
    <div className="task5-container">
      <Typography className="title">
        Employee Management System
      </Typography>

      {/* ERROR */}
      {error && <p className="error">{error}</p>}

      {/* FORM */}
      <div className="form-box">
        {Object.keys(empty).map((key) => (
          <div key={key} className="field">
            <label>{key.toUpperCase()} *</label>
            <TextField
              name={key}
              value={form[key]}
              onChange={handleChange}
            />
          </div>
        ))}

        <Button variant="contained" onClick={addEmployee}>
          Add
        </Button>
      </div>

      {/* SEARCH */}
      <div className="search-box">
        <TextField
          label="Search Employee"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="outlined" onClick={searchEmployee}>
          Search
        </Button>
      </div>

      {/* TABLE */}
      <Table sx={{ mt: 3 }}>
        <TableHead>
          <TableRow>
            {Object.keys(empty).map((h) => (
              <TableCell key={h}>{h.toUpperCase()}</TableCell>
            ))}
            <TableCell>ACTION</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {filtered.map((emp) => (
            <TableRow key={emp.id}>
              {Object.values(emp).map((v, i) => (
                <TableCell key={i}>{v}</TableCell>
              ))}

              <TableCell>
                <Button onClick={() => openEdit(emp)}>Edit</Button>
                <Button color="error" onClick={() => openDelete(emp)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* EDIT DIALOG */}
      <Dialog open={editOpen} onClose={closeEdit}>
        <DialogTitle>Edit Employee</DialogTitle>

        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            {Object.keys(empty).map((k) => (
              <TextField
                key={k}
                name={k}
                value={form[k]}
                onChange={handleChange}
                disabled={k === "id"}
              />
            ))}
          </Stack>
        </DialogContent>

        <DialogActions>
          <Button onClick={closeEdit}>Cancel</Button>
          <Button variant="contained" onClick={updateEmployee}>
            Update
          </Button>
        </DialogActions>
      </Dialog>

      {/* DELETE DIALOG */}
      <Dialog open={deleteOpen} onClose={() => setDeleteOpen(false)}>
        <DialogTitle>Employee Details</DialogTitle>

        <DialogContent>
          {selected &&
            Object.entries(selected).map(([k, v]) => (
              <p key={k}>
                {k}: {v}
              </p>
            ))}

          <p style={{ color: "red" }}>Are you sure to delete?</p>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setDeleteOpen(false)}>Cancel</Button>
          <Button color="error" onClick={deleteEmployee}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Task5;