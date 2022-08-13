import { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import classes from './Addtruck.module.css';

const AddTruck = (props) => {
  const [plateType, setPlateType] = useState("Yellow");
  const [truckType, setTruckType] = useState("Tronton");
  const plateList = ["Yellow", "Black", "White", "Red"];
  const truckList = ["Tronton", "Band Van"]

  const plateHandler = (event) => {
    setPlateType(event.target.value);
  };
  const truckHandler = (event) => {
    setTruckType(event.target.value);
  };

  const handleClose = () => {
    props.closeForm()
  };

  return (
    <div>
      <Modal
        open={props.formOpen}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        style={{display:'flex',alignItems:'center',justifyContent:'center'}}
      >
        <div className={classes['modal-card']}>
          <h2>Add New Truck</h2>
          <TextField
            required
            id="license-number"
            label="License Number"
            defaultValue="B xxxx AEF"
            style={{margin: '1rem 0'}}
          />
          <TextField
            id="plate-type"
            select
            label="Plate Type"
            value={plateType}
            onChange={plateHandler}
            style={{margin: '1rem 0'}}
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
            style={{margin: '1rem 0'}}
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
            defaultValue="2022"
            style={{margin: '1rem 0'}}
          />
          <Button onClick={handleClose} variant="contained" style={{width: "10rem", marginLeft: "auto"}}>Save Unit</Button>
        </div>
      </Modal>
    </div>
  );
};

export default AddTruck;
