import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { StyledUserHistory } from "./styles";
import { iCart } from "../../interfaces/user";
import { CartCard } from "../cartCard";

export const UserHistory = () => {
  const { user } = useContext(UserContext);

  return (
    user && (
      <StyledUserHistory className="section--history">
        <ul>
          {user.history.map((cart: iCart) => (
            <CartCard key={cart.id} cart={cart} />
          ))}
        </ul>
      </StyledUserHistory>
    )
  );
};
