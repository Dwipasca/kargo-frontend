import * as React from "react";
import { useState } from "react";

import { Container, Button, Grid, Paper, TextField } from "@mui/material";

// components
import Header from "../components/Header";
import Copyright from "../components/Copyright";
import DriverTable from "../components/TableDriver/DriverTable";
import AddDriver from "../components/AddDriver/AddDriver";

const DriverList = () => {
const [truckForm, setTruckForm] = useState(false)
const openHandler = () => {
    setTruckForm(true)
}

const closeHandler = () => {
    setTruckForm(false)
}

  return (
    <>
      <Header />
        <AddDriver formOpen={truckForm} closeForm={closeHandler}/>
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
              <Button onClick={openHandler} variant="contained">Add Driver</Button>
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
              <DriverTable />
            </Paper>
          </Grid>
        </Grid>

        <Copyright sx={{ pt: 4 }} />
      </Container>
      {/* end body */}
    </>
  );
};
export default DriverList;
