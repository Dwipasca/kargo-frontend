import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import classes from "./AddShipment.module.css";

const AddShipment = (props) => {

  const handleClose = () => {
    props.closeForm();
  };

  return (
    <div>
      <Modal
        open={props.formOpen}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className={classes["modal-card"]}>
          <h2>Add New Truck</h2>
          <TextField
            required
            id="shipment-origin"
            label="Origin"
            defaultValue="Search District"
            style={{ margin: "1rem 0" }}
          />
          <TextField
            required
            id="destination"
            label="Destination"
            defaultValue="Search District"
            style={{ margin: "1rem 0" }}
          />
          <Button onClick={handleClose} variant="contained" style={{width: "10rem", marginLeft: "auto"}}>Save Unit</Button>
        </div>
      </Modal>
    </div>
  );
};

export default AddShipment;
