import { Navigate, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/Home";

const Routers = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default Routers;
