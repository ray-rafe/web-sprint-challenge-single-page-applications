import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Home = (props) => {
  const history = useHistory();

  const routeToOrder = () => {
    history.push("/pizza");
  };

  return (
    <div className="home-wrapper">
      <button
        onClick={routeToOrder}
        id="order-now"
        name="order-button"
        className="md-button order-button"
      >
        Order Now!
      </button>
    </div>
  );
};

export default Home;
