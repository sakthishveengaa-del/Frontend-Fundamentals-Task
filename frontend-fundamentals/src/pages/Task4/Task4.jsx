import { useState } from "react";
import { TextField, Button, Typography, Stack, MenuItem, Dialog } from "@mui/material";

function Task4() {
  const [emp, setEmp] = useState({
    id: 101,
    name: "John",
    department: "IT",
    salary: 50000,
  });

  const [add, setAdd] = useState({ k: "", v: "" });
  const [edit, setEdit] = useState({ k: "", v: "" });
  const [del, setDel] = useState("");
  const [open, setOpen] = useState(false);


  const addProp = () =>
    add.k && add.v && setEmp({ ...emp, [add.k]: add.v }, setAdd({ k: "", v: "" }));

  const updateProp = () =>
    edit.k && edit.v && setEmp({ ...emp, [edit.k]: edit.v }, setEdit({ k: "", v: "" }));

  const deleteProp = () => {
    const x = { ...emp };
    delete x[del];
    setEmp(x);
    setDel("");
    setOpen(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h6">Object</Typography>

      <pre>{Object.entries(emp).map(([k,v]) => `${k}: ${v}`).join("\n")}</pre>

      <Typography>Keys: {Object.keys(emp).join(", ")}</Typography>
      <Typography>Values: {Object.values(emp).join(", ")}</Typography>

      {/* ADD */}
      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
        <TextField label="Key" value={add.k} onChange={(e)=>setAdd({...add,k:e.target.value})}/>
        <TextField label="Value" value={add.v} onChange={(e)=>setAdd({...add,v:e.target.value})}/>
        <Button onClick={addProp}>Add</Button>
      </Stack>

      {/* UPDATE */}
      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
        <TextField select label="Property" value={edit.k} onChange={(e)=>setEdit({...edit,k:e.target.value})} sx={{ width:200 }}>
          <MenuItem value="">-- Select --</MenuItem>
          {Object.keys(emp).map(k=><MenuItem key={k} value={k}>{k}</MenuItem>)}
        </TextField>

        <TextField label="Value" value={edit.v} onChange={(e)=>setEdit({...edit,v:e.target.value})}/>
        <Button onClick={updateProp}>Update</Button>
      </Stack>

      {/* DELETE */}
      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
        <TextField select label="Property" value={del} onChange={(e)=>setDel(e.target.value)} sx={{ width:200 }}>
          <MenuItem value="">-- Select --</MenuItem>
          {Object.keys(emp).map(k=><MenuItem key={k} value={k}>{k}</MenuItem>)}
        </TextField>
        

        <Button color="error" onClick={()=>setOpen(true)}>Delete</Button>
      </Stack>

      {/* CONFIRM */}
      <Dialog open={open} onClose={()=>setOpen(false)}>
        <div style={{ padding: 20 }}>
          <p>Delete "{del}" ?</p>
          <Button onClick={()=>setOpen(false)}>Cancel</Button>
          <Button color="error" onClick={deleteProp}>Delete</Button>
        </div>
      </Dialog>
    </div>
  );
}

export default Task4;