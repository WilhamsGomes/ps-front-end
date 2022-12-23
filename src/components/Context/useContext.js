import React, { createContext, useState } from "react";

export const MyContext = createContext();

export const UserProvider = ({ children }) => {

  const [idConta, setIdConta] = useState();

  return (
    <MyContext.Provider
      value={{
        idConta,
        setIdConta
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
