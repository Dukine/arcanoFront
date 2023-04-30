import { useContext } from "react";

import { UserContext } from "../../contexts/userContext";
import { StyledUserPage } from "./style";
import { UserSection } from "../../components/userSection";
import { UserHistory } from "../../components/userHistory";

export const UserPage = () => {
  const { user } = useContext(UserContext);

  return (
    user && (
      <StyledUserPage>
        <UserSection />
        <UserHistory />
      </StyledUserPage>
    )
  );
};
