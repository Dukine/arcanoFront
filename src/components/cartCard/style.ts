import styled, { keyframes } from "styled-components";

const showItens = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
  `;

const hideItens = keyframes`
0% {
    opacity: 1;
  transform: translateY(0px);
}
100% {
    opacity: 0;
  transform: translateY(-50px);
}
`;

interface iStyledCartCardProps {
  show: boolean;
}

export const StyledCartCard = styled.li<iStyledCartCardProps>`
  .cart--info {
    background-color: var(--grey-3);
    display: flex;
    justify-content: space-around;
    padding: 0.5rem;
    border-bottom: 1px solid var(--grey-2);
  }

  .cart--itens {
    width: 100%;

    animation: ${({ show }) => (show ? showItens : hideItens)} 500ms;
    animation-fill-mode: forwards;
    display: ${({ show }) => (show ? "block" : "none")};

    overflow: hidden;
  }
`;
