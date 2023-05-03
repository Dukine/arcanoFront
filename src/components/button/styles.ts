import styled from "styled-components";

export const Button = styled.button`
  border-radius: 8px;
  border: 1px solid var(--color-primary);
  text-align: center;
  color: var(--grey-0);
  padding: 0.25rem;
  background-color: var(--color-primary);

  &:hover {
    background-color: var(--color-primary-focus);
    border-color: var(--color-primary-focus);
  }
`;
