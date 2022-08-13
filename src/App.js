import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import ShipmentList from "./pages/ShipmentList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/shipment" element={<ShipmentList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
