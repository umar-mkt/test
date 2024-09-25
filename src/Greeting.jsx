import React from "react";

const Greeting = () => {
  const currentTime = new Date().getHours();

  return (
    <div>
      {currentTime < 12
        ? "Good Morning!"
        : currentTime < 18
        ? "Good Afternoon!"
        : "Good Evening!"}
    </div>
  );
};

export default Greeting;
