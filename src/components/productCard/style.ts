import styled from "styled-components";

export const StyledProductCard = styled.li`
  width: 100%;
  display: flex;
  padding: 0.25rem;
  max-height: 10rem;
  border-bottom: 1px solid var(--grey-3);

  .product--img {
    width: 5rem;
    height: 5rem;
    padding: 1rem;
    background-color: var(--grey-0);
    border: 1px solid var(--grey-3);
    border-radius: 8px;

    img {
      width: 100%;
      max-height: 90%;
      object-fit: contain;
    }
  }

  .product--description {
    padding: 0.25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;

    p {
      display: flex;
      justify-content: space-around;
      width: 100%;
    }

    .product--title {
      display: flex;
      justify-content: space-around;
      width: 100%;
    }

    .product--info {
    }
  }
`;
