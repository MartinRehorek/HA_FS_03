import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { TextField } from "@mui/material";
import { useState } from "react";
import { GraphHOC } from "../components/GraphHOC";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: "center",
  lineHeight: "0px",
  spacing: 1,
}));

export default function Dashboard() {
  const [years, setYears] = useState(5);

  return (
    <Box sx={{ flexGrow: 1 }}>
      
      <Item>
        <Typography variant="h2" gutterBottom>
          Dashboard
        </Typography>
      </Item>
      <Item sx={{ m: 2 }}>
        <TextField
          error={!(years >= 1 && years < 6)}
          id="outlined-required"
          name="years"
          label="Horizont let"
          type="number"
          helperText="Zadejte 1-5 let"
          defaultValue='5'
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(val) => setYears(val.target.value)}
        />
      </Item>
        <GraphHOC years={years}/ >
    </Box>
  );
}
