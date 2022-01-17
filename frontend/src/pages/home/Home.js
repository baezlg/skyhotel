import React from "react";
import Experience from "../../components/experience/Experience";
import Services from "../../components/services/Services";
import Featured from "./../../components/featured/Featured";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <Services />
      <div className="home__para">para</div>
      <Experience />
    </div>
  );
};

export default Home;
