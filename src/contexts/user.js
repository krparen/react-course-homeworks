import React from "react";

export const UserContext = React.createContext({
    currentUser: {name: "", password: ""},
    setCurrentUser: () => {}
});
