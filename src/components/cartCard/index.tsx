import { iCart } from "../../interfaces/user";
import { ProductCard } from "../productCard";
import { StyledCartCard } from "./style";

interface iCartProps {
  cart: iCart;
}

export const CartCard = ({ cart }: iCartProps) => {
  return (
    <StyledCartCard>
      <div>
        <p>ID: {cart.id}</p>
        <p>Data do pedido: {cart.date.split("T")[0]}</p>
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
      </div>
      <ul>
        {cart.products.map((product) => (
          <ProductCard cartProduct={product} />
        ))}
      </ul>
    </StyledCartCard>
  );
};
