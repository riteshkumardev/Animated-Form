import React from "react";

// Import Components
import Card from "./components/Card";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      {/* className="w-full h-screen bg-[#c9cbbe] flex items-center justify-center" */}
      <div className="w-full h-screen bg-[#c9cbbe] flex items-center justify-center">
        <Card />

        {/* <Loader /> */}
      </div>
    </>
  );
};

export default App;
