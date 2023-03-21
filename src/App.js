import { Grid } from "@mui/material";
import React from "react";

// Import Components
import Card from "./components/Card";
import Apps from "./components/component/App";
import MuiCard from "./components/coreComponentd/MuiCard";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import masterProduct from "./masterProduct.json";

const App = () => {
  return (
    <>
      {/* className="w-full h-screen bg-[#c9cbbe] flex items-center justify-center" */}
      {/* <div className="w-full h-screen bg-[#c9cbbe] flex items-center justify-center">
        <Card />


      </div> */}

      <>
        <Apps />
      </>
    </>
  );
};

export default App;
