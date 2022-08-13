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
// import TruckData from "./TruckData";

// custom hooks
import useFetch from "../hooks/useFetch";

const TableTrucks = () => {
  const { data, loading, error } = useFetch("http://127.0.0.1:8000/api/trucks");

  if (error) {
    console.log(error);
  }

  if (loading) {
    return <p>Fetching Data...</p>;
  }

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
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.data?.length > 0 &&
            data?.data?.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.license_number}</TableCell>
                <TableCell>{row.truck_type}</TableCell>
                <TableCell>{row.license_type}</TableCell>
                <TableCell>{row.production_year}</TableCell>
                <TableCell>{row.is_active ? "Active" : "Innactive"}</TableCell>
                <TableCell>
                  <Button variant="contained">Edit</Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
};

export default TableTrucks;
