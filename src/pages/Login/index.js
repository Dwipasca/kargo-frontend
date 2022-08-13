import { useState } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./Login.module.css";
import Button from "@mui/material/Button";

const Login = () => {
  const navigate = useNavigate();

  const [role, setRole] = useState("");
  const roleTransHandler = () => {
    setRole("transporter");
  };

  const roleShippHandler = () => {
    setRole("shipper");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (role === "shipper") {
      navigate(`/shipment`);
    } else {
      navigate(`/transporter`);
    }
  };

  return (
    <div className={classes.login}>
      <div className={classes["login-card"]}>
        <h1>Choose Your Role to Login</h1>
        <div className={classes["login-choose"]}>
          <button
            className={
              role === "transporter"
                ? classes["login-role_clicked"]
                : classes["login-role"]
            }
            onClick={roleTransHandler}
          >
            Transporter
          </button>
          <button
            className={
              role === "shipper"
                ? classes["login-role_clicked"]
                : classes["login-role"]
            }
            onClick={roleShippHandler}
          >
            Shipper
          </button>
        </div>
        <Button
          disabled={role === ""}
          variant="contained"
          type="submit"
          onClick={handleLogin}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
