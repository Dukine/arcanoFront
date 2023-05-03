import { iCartProduct } from "../../interfaces/user";
import { StyledProductCard } from "./style";

interface iCartProps {
  cartProduct: iCartProduct;
}

export const ProductCard = ({ cartProduct }: iCartProps) => {
  return (
    <StyledProductCard>
      <div className="product--img">
        <img src={cartProduct.product.image} alt={cartProduct.product.title} />
      </div>
      <div className="product--description">
        <h3 className="product--title">{cartProduct.product.title}</h3>
        <p className="product--info">
          <span>Qntd: {cartProduct.quantity}</span>{" "}
          <span>
            Valor: R$
            {cartProduct.product.price.toFixed(2)}
          </span>
        </p>
      </div>
    </StyledProductCard>
  );
};
