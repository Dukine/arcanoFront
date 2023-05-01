import { createContext, useEffect, useState } from "react";
import { ReactNode } from "react";

import { Api } from "../../services";
import { iUser } from "../../interfaces/user";

interface iProvidersProps {
  children: ReactNode;
}

interface iUserContext {
  user: iUser | null;
  loading: boolean;
}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iProvidersProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  async function getUser(id?: number) {
    try {
      const { data } = await Api.get<iUser>(
        `cart-history${id ? `?id=${id}` : ``}`
      );
      setUser(data);
    } catch (error) {
      setUser(null);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  );
};
