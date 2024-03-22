import { BagItemsAmount, Products } from "../../@types/types";
import { useBag } from "../../context/useBag";
import { useListing } from "../../context/useListing";
import { formatPrice } from "../../util/formatPrice";
import {
  CardContainer,
  ImageCard,
  CardContent,
  CardContainerSkeleton,
} from "./styles";
import { IoBagAddOutline } from "react-icons/io5";

export default function CardProducts(product: Products) {
  const { bag, addProduct } = useBag();
  const { loading } = useListing();

  const bagItemsAmount = bag.reduce((sumAmount, product) => {
    if (sumAmount[product.id]) {
      sumAmount[product.id] += product.amount;
    } else {
      sumAmount[product.id] = product.amount;
    }

    return sumAmount;
  }, {} as BagItemsAmount);

  function handleProduct(id: number) {
    addProduct(id);
  }

  return (
    <>
      {loading ? (
        <CardContainerSkeleton className="loading" />
      ) : (
        <CardContainer>
          <CardContent key={product.id}>
            <ImageCard src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <div>
              <p>
                {product.discounted_product
                  ? formatPrice(
                      product.price - (product.price * product.discounted) / 100
                    )
                  : formatPrice(product.price)}
              </p>
              {product.discounted_product && (
                <strong>{product.discounted}%</strong>
              )}{" "}
            </div>
            {product.discounted_product && <s>{formatPrice(product.price)}</s>}
            <p className="description">{product.description}</p>
            <button
              onClick={() => handleProduct(product.id)}
              disabled={bagItemsAmount[product.id] == product.amount}
            >
              <IoBagAddOutline fontSize={20} />
              <span>{bagItemsAmount[product.id] || 0}</span>Adicionar à sacola
            </button>
          </CardContent>
        </CardContainer>
      )}
    </>
  );
}
