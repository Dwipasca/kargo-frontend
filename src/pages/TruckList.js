import * as React from "react";
import { useState } from "react";

import { Container, Button, Grid, Paper, TextField } from "@mui/material";

// components
import Header from "../components/Header";
import Copyright from "../components/Copyright";
import TruckTable from "../components/Table Trucks/TruckTable";
import AddTruck from "../components/AddTruck/AddTruck";

const TruckList = () => {
  const [changeFlag, setChangeFlag] = useState(0)
  const [truckForm, setTruckForm] = useState(false)
  const openHandler = () => {
    setTruckForm(true)
  }

  const closeHandler = () => {
    setChangeFlag(prev => prev + 1);
    setTruckForm(false)
  }

  return (
    <>
      <Header />
      <AddTruck formOpen={truckForm} closeForm={closeHandler} />
      {/* Body */}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* header content */}
          <Grid item container xs={12}>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                marginBottom: 2,
              }}
            >
              <Button onClick={openHandler} variant="contained">Add Truck</Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-search"
                label="Search field"
                type="search"
                size="small"
              />
              <Button variant="contained">Go!</Button>
            </Grid>
          </Grid>

          {/* Recent TableShipment */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <TruckTable changeFlag={changeFlag} />
            </Paper>
          </Grid>
        </Grid>

        <Copyright sx={{ pt: 4 }} />
      </Container>
      {/* end body */}
    </>
  );
};
export default TruckList;
