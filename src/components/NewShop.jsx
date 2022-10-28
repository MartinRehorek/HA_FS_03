import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { TextField } from "@mui/material";
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function NewShop(props) {
  const [name, setName] = useState();
  const [value, setValue] = useState();

  return (
    <Card variant="outlined" >
      <CardContent>
        <Grid container style={{ justifyContent: "center" }}>
          <Grid>
            <Item >
              <TextField
                required
                id="outlined-required"
                label="Název obchodu"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(val) => setName(val.target.value)}
              />
            </Item>
            -
            <Item>
              <TextField
                id="outlined-number"
                label="Kapacita"
                type="number"
                required
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(val) => setValue(val.target.value)}
              />
            </Item>
          </Grid>
        </Grid>
      </CardContent>

      <CardActions style={{ justifyContent: "center" }}>
        <Button
          size="large"
          variant="outlined"
          style={{ textAlign: "center" }}
          onClick={(event) =>
            props.addStore({ name: name, maxValue: Number(value), value: 0 })
          }
        >
          Vytvořit
        </Button>
      </CardActions>
    </Card>
  );
}
