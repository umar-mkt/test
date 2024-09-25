import React from "react";

const Destructuring = ({ user }) => {
  const { name, age, location } = user;

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
};

export default Destructuring;
