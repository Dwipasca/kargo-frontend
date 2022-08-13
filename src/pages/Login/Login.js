import { useState } from "react";
import classes from "./Login.module.css";
import Button from "@mui/material/Button";

const Login = () => {
  const [role, setRole] = useState("");
  const roleTransHandler = () => {
    setRole("trans");
  };

  const roleShippHandler = () => {
    setRole("shipp");
  };



  return (
    <div className={classes.login}>
    <div className={classes["login-card"]}>
      <h1>Choose Your Role to Login</h1>
      <div className={classes["login-choose"]}>
        <button
          className={
            role === "trans"
              ? classes["login-role_clicked"]
              : classes["login-role"]
          }
          onClick={roleTransHandler}
        >
          Transporter
        </button>
        <button
          className={
            role === "shipp"
              ? classes["login-role_clicked"]
              : classes["login-role"]
          }
          onClick={roleShippHandler}
        >
          Shipper
        </button>
      </div>
      <Button disabled={role ===  ""} variant="contained">Contained</Button>
    </div>
    </div>
  );
};

export default Login;
