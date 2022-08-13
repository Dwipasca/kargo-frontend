import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import classes from "./AddDriver.module.css";

const AddDriver = (props) => {
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
            id="driver-name"
            label="Driver Name"
            defaultValue="Driver Name"
            style={{ margin: "1rem 0" }}
          />
          <TextField
            required
            id="phone-number"
            label="Phone Number"
            defaultValue="Phone Number"
            style={{ margin: "1rem 0" }}
          />

          <Button
            onClick={handleClose}
            variant="contained"
            style={{ width: "10rem", marginLeft: "auto" }}
          >
            Save Unit
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default AddDriver;
