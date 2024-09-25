import React from "react";

const Spread = ({ user1, user2 }) => {
  const combinedUser = { ...user1, ...user2 };

  return (
    <div>
      <p>Name: {combinedUser.name}</p>
      <p>Age: {combinedUser.age}</p>
    </div>
  );
};

export default Spread;
