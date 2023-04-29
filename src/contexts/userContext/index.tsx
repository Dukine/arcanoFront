import { createContext, useEffect, useState } from "react";
import { ReactNode } from "react";

import { Api } from "../../services";

interface iProvidersProps {
  children: ReactNode;
}

interface iUserContext {
  user: any;
}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iProvidersProps) => {
  const [user, setUser] = useState<any>(null);

  async function getUser() {
    try {
      const { data } = await Api.get("cart-history");
      setUser(data);
    } catch (error) {
      setUser(null);
      console.log(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
