import * as React from "react";
import { useState } from "react";
import { BarChartComponent } from "../components/BarChart";
import { GRAPH_DATA, TYPES_OF_GRAPHS } from "../data/WIKIPEDIA_DATA";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(12),
    textAlign: "center",
    lineHeight: "0px",
    
  }));

export function GraphHOC(props) {
    const [types,] = useState(TYPES_OF_GRAPHS);

    return (
        <Grid container  display="flex" alignItems="center" justifyContent="center" spacing={4} > 

          {types.map((element) => {
            return (
            <Grid xs={8} key={element + "_grid"}>
              <Item key={element + "_item"} >
                <BarChartComponent key={element + "_graph"} data={GRAPH_DATA} title={element} years={props.years} />
              </Item>
              </Grid>
              
            );
          })}

      </Grid>
    )
}