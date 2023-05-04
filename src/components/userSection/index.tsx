import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { StyledUserSection } from "./styles";

export const UserSection = () => {
  const { user, loading } = useContext(UserContext);

  return (
    <StyledUserSection className="section--user">
      {user ? (
        <>
          <p>Nome: {user.name}</p>
          <p>Email: {user.email}</p>
        </>
      ) : loading ? (
        <p>Aguarde...</p>
      ) : (
        <p>Usuário não encontrado</p>
      )}
    </StyledUserSection>
  );
};
