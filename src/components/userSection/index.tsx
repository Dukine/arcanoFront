import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { StyledUserSection } from "./styles";

export const UserSection = () => {
  const { user } = useContext(UserContext);

  return (
    user && (
      <StyledUserSection>
        <p>Nome: {user.name}</p>
        <p>Email: {user.email}</p>
      </StyledUserSection>
    )
  );
};
