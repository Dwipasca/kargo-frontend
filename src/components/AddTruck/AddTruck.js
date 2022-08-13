import { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import classes from './Addtruck.module.css';
import axios from "axios";

const AddTruck = (props) => {
  const [license, setLicense] = useState('');
  const [productionYear, setProductionYear] = useState('');
  const [plateType, setPlateType] = useState("Yellow");
  const [truckType, setTruckType] = useState("Tronton");
  const plateList = ["Yellow", "Black"];
  const truckList = ["Tronton", "Container", "CDE"]

  const plateHandler = (event) => {
    setPlateType(event.target.value);
  };
  const truckHandler = (event) => {
    setTruckType(event.target.value);
  };

  const handleClose = () => {
    props.closeForm()
  };

  const submitHandler = (e) => {
    const data = new FormData();
    data.append('license_number', license);
    data.append('license_type', plateType);
    data.append('truck_type', truckType);
    data.append('production_year', productionYear);

    axios.post("http://127.0.0.1:8000/api/add-truck", data)
      .then((response) => {
        console.log(response.data.message);
        handleClose();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <form onSubmit={submitHandler}>
      <Modal
        open={props.formOpen}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <div className={classes['modal-card']}>
          <h2>Add New Truck</h2>
          <TextField
            required
            id="license-number"
            label="License Number"
            value={license}
            onChange={(e) => setLicense(e.target.value)}
            style={{ margin: '1rem 0' }}
          />
          <TextField
            id="plate-type"
            select
            label="Plate Type"
            value={plateType}
            onChange={plateHandler}
            style={{ margin: '1rem 0' }}
          >
            {plateList.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="truck-type"
            select
            label="Truck Type"
            value={truckType}
            onChange={truckHandler}
            style={{ margin: '1rem 0' }}
          >
            {truckList.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            required
            id="production-year"
            label="Production year"
            value={productionYear}
            onChange={(e) => setProductionYear(e.target.value)}
            style={{ margin: '1rem 0' }}
          />
          <Button onClick={submitHandler} variant="contained" style={{ width: "10rem", marginLeft: "auto" }} type="submit">Save Unit</Button>
        </div>
      </Modal>
    </form>
  );
};

export default AddTruck;
