import {
    Button,
    Table,
    TableHead,
    TableBody,
    TableCell,
    TableRow,
  } from "@mui/material";
  
  // components
  import Title from "../Title";
  import TruckData from "./TruckData";
  
  const TruckTable = () => {
    return (
      <>
        <Title>Truck</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>License Number</TableCell>
              <TableCell>Truck Type</TableCell>
              <TableCell>Plate Type</TableCell>
              <TableCell>Production Year</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {TruckData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.license}</TableCell>
                <TableCell>{row.truckType}</TableCell>
                <TableCell>{row.plateType}</TableCell>
                <TableCell>{row.productionYear}</TableCell>
                <TableCell>{row.status ? "Active" : "Innactive"}</TableCell>
                <TableCell>
                  <Button variant="contained">Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </>
    );
  }
  
  export default TruckTable;
  