import React from "react";
import { Navigate } from "react-router-dom";
import Home from "./Home";

function CheckOut() {
  const isCheckout = true;
  return isCheckout ? <Home /> : <Navigate to="/login" />;
}

export default CheckOut;
