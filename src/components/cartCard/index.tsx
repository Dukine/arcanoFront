import { useState } from "react";
import { iCart } from "../../interfaces/user";
import { ProductCard } from "../productCard";
import { StyledCartCard } from "./style";
import { Button } from "../button/styles";

interface iCartProps {
  cart: iCart;
}

export const CartCard = ({ cart }: iCartProps) => {
  const [showItens, setShowItens] = useState<boolean>(false);

  const handleClick = () => {
    setShowItens(!showItens);
  };

  return (
    <StyledCartCard show={showItens}>
      <div className="cart--info">
        <p>ID: {cart.id}</p>
        <p>Data: {cart.date.split("T")[0]}</p>
        <p>
          Valor Total: R$
          {cart.products
            .reduce(
              (total, product) =>
                total + product.product.price * product.quantity,
              0
            )
            .toFixed(2)}
        </p>
        <Button onClick={handleClick}>ver mais</Button>
      </div>

      <ul className="cart--itens">
        {cart.products.map((product) => (
          <ProductCard key={product.product.id} cartProduct={product} />
        ))}
      </ul>
    </StyledCartCard>
  );
};
