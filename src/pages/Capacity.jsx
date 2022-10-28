import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import ShopCapacity from "../components/ShopCapacity";
import { SHOPS } from "../data/DUMMY_DATA";
import { PieGraph } from "../components/PieGraph";
import Time from "../components/Time";
import { Divider, Typography } from "@mui/material";
import NewShop from "../components/NewShop";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const initSum = () => {
  let sum = 0;
  SHOPS.forEach((element) => (sum += element["value"]));
  return sum;
};

export default function Capacity() {
  const [sumPeople, setSumPeople] = useState(initSum);
  const [shops, setShops] = useState(SHOPS);
  const [isClosed, setIsClosed] = useState(false);
  let shopInd = 0;

  const incrementShop = (shopIndex) => {
    shops[shopIndex].value = shops[shopIndex].value + 1;
    setShops(shops);
    setSumPeople(sumPeople + 1);
  };

  const manageStore = (order) => {
    setIsClosed(order);
  };

  const addStore = (data) => {
    setShops((oldShops) => [...oldShops, data]);
  };

  return (
    <Box>
      <Grid container spacing={5} display="flex" style={{ paddingInline: 50 }}>
        <Grid
          xs={3}
          display="flex"
          sx={{ flexDirection: "column", alignContent: "space-between" }}
        >
          <Item>
            <Time manageStore={manageStore} isClosed={isClosed} />
          </Item>
          <Item>
            <ShopCapacity
              count={sumPeople}
              title={"Celkový počet nakupujících"}
            />
          </Item>

          <Divider>
            <Typography variant="h3">Shops</Typography>
          </Divider>

          {shops.map((element) => {
            return (
              <Item key={element.name + "_item"}>
                <ShopCapacity
                  shopIndex={shopInd++}
                  key={element.name}
                  title={element.name}
                  count={element.value}
                  maxValue={element.maxValue}
                  incrementShop={incrementShop}
                  isClosed={isClosed}
                />
              </Item>
            );
          })}

          <Divider>
            <Typography variant="h3">Add shop</Typography>
          </Divider>
          <Item>
            <NewShop addStore={addStore} />
          </Item>
        </Grid>
        <Grid xs={9}>
          <Item>
            <PieGraph shops={shops} />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
