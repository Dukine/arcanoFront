import { StyledUserPage } from "./style";
import { UserSection } from "../../components/userSection";
import { UserHistory } from "../../components/userHistory";

export const UserPage = () => {
  return (
    <StyledUserPage>
      <UserSection />
      <UserHistory />
    </StyledUserPage>
  );
};
