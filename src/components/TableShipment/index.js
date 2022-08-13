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
import rowsData from "./rowsData";

function TableShipment() {
  return (
    <>
      <Title>Shipment</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Shipment</TableCell>
            <TableCell>License</TableCell>
            <TableCell>Driver's Name</TableCell>
            <TableCell>Origin</TableCell>
            <TableCell>Destination</TableCell>
            <TableCell>Loading Date</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.shipment}</TableCell>
              <TableCell>{row.license}</TableCell>
              <TableCell>{row.driversName}</TableCell>
              <TableCell>{row.origin}</TableCell>
              <TableCell>{row.destination}</TableCell>
              <TableCell>{row.loadingDate}</TableCell>
              <TableCell>{row.status}</TableCell>
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

export default TableShipment;
