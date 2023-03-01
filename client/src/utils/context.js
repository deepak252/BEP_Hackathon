import { createContext, useEffect, useState } from "react";
const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAlreadyVoted, setIsAlreadyVoted] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const loginHandler = (token) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <UserContext.Provider
      value={{
        isAlreadyVoted: isAlreadyVoted,
        setIsAlreadyVoted: setIsAlreadyVoted,
        isAuthenticated: isAuthenticated,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
