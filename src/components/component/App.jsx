import { margin } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar";
import Product from "./Product";

function Apps() {
  return (
    <>
      <div style={{ border: "1px solid white" }}>
        <Navbar />
        <div style={{ marginTop: "5%" }}>
          <Product />
        </div>
      </div>
    </>
  );
}

export default Apps;
