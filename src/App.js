import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import ShipmentList from "./pages/ShipmentList";
import TruckList from "./pages/TruckList";
import DriverList from "./pages/DriverList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/shipment" element={<ShipmentList />} />
        <Route path="/transporter" element={<DriverList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
