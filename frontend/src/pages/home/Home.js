import React from "react";
import Services from "../../components/services/Services";
import Featured from "./../../components/featured/Featured";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <Services />
    </div>
  );
};

export default Home;
