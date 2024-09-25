import React from "react";

const Notification = () => {

    
  let unreadMessages = null;

  return (
    <div>
      {unreadMessages > 0 && <p>You have {unreadMessages} unread messages.</p>}
    </div>
  );
};

export default Notification;
