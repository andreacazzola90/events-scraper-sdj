"use client";

import React, { createContext, useState } from "react";

interface IGlobalContextProps {
  urlPath: string;
  setUrlPath: (urlPath: string) => void;
  user: any;
  loading: boolean;
  setUser: (user: any) => void;
  setLoading: (loading: boolean) => void;
}

export const GlobalContext = React.createContext<IGlobalContextProps>({
  urlPath: "",
  setUrlPath: () => {},
  user: {},
  loading: true,
  setUser: () => {},
  setLoading: () => {},
});

const GlobalProvider = (props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | React.PromiseLikeOfReactNode
    | null
    | undefined;
}) => {
  const [currentUrlPath, setCurrentUrlPath] = useState("CIAO");
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  return (
    <GlobalContext.Provider
      value={{
        urlPath: currentUrlPath,
        setUrlPath: setCurrentUrlPath,
        user: currentUser,
        loading: isLoading,
        setUser: setCurrentUser,
        setLoading: setIsLoading,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
