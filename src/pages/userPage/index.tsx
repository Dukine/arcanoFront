import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

export const UserPage = () => {
  const { user } = useContext(UserContext);
  return (
    user && (
      <div>
        <section>
          {user.name}
          {user.email}
        </section>
        <section>
          <ul>
            {user.history.map((cart: any) => (
              <li>
                {cart.id} {cart.date}
              </li>
            ))}
          </ul>
        </section>
      </div>
    )
  );
};
