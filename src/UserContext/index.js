import React from "react";

// set the defaults
const UserContext = React.createContext({
  userInfo: {},
  setUserInfo: () => {}
});

export default UserContext;
