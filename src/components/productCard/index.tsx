import { iCartProduct } from "../../interfaces/user";
import { StyledProductCard } from "./style";

interface iCartProps {
  cartProduct: iCartProduct;
}

export const ProductCard = ({ cartProduct }: iCartProps) => {
  return (
    <StyledProductCard>
      <p>
        Qntd: {cartProduct.quantity} Valor: {cartProduct.product.price}
      </p>
      <p>Produto: {cartProduct.product.title}</p>
    </StyledProductCard>
  );
};
