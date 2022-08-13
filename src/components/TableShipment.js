import {
  Button,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";

// components
import Title from "./Title";

// custom hooks
import useFetch from "../hooks/useFetch";

function TableShipment() {
  const { data, loading, error } = useFetch(
    "http://127.0.0.1:8000/api/shipments/list"
  );

  if (error) {
    console.log(error);
  }

  if (loading) {
    return <p>Fetching Data...</p>;
  }

  console.log(data);

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
          {data.length > 0 &&
            data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.shipment_number}</TableCell>
                <TableCell>{row.license}</TableCell>
                <TableCell>{row.driver?.name}</TableCell>
                <TableCell>{row.origin?.name}</TableCell>
                <TableCell>{row.destination?.name}</TableCell>
                <TableCell>{row.loading_date}</TableCell>
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
