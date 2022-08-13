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
  import DriverData from "./DriverData";
  
  const DriverTable = () => {
    return (
      <>
        <Title>Driver</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Driver Name</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {DriverData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.driverName}</TableCell>
                <TableCell>{row.phoneNum}</TableCell>
                <TableCell>{row.createdDate}</TableCell>
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
  
  export default DriverTable;
  