import React from "react";
import compass from "./../assets/compass.jpg";

const Error404 = () => {
  return (
    <div className="container">
      <h1>404 Page</h1>
      <img src={compass} alt="compass" />
      <h3>
        Maybe you have lost your way. Use above Navigations links to get on
        track.
      </h3>
    </div>
  );
};

export default Error404;
