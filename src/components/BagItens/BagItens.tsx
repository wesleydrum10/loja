import { BagItemsAmount, ProductsInBag } from "../../@types/types";
import { useBag } from "../../context/useBag";
import { formatPrice } from "../../util/formatPrice";
import { BagContent, ImageBag } from "./styles";
import { CgRemove, CgAdd, CgTrash } from "react-icons/cg";

export default function BagItens(product: ProductsInBag) {
  const { bag, removeProduct, updateProductAmount } = useBag();

  const bagItemsAmount = bag.reduce((sumAmount, product) => {
    if (sumAmount[product.id]) {
      sumAmount[product.id] += product.amount;
    } else {
      sumAmount[product.id] = product.amount;
    }

    return sumAmount;
  }, {} as BagItemsAmount);

  function handleProductIncrement(product: ProductsInBag) {
    const { id, amount } = product;

    updateProductAmount({ productId: id, amount: amount + 1 });
  }

  function handleProductDecrement(product: ProductsInBag) {
    const { id, amount } = product;

    updateProductAmount({ productId: id, amount: amount - 1 });
  }

  function handleRemoveProduct(productId: number) {
    removeProduct(productId);
  }

  return (
    <BagContent>
      <ImageBag src={product.image} alt={product.name} />
      <div>
        <p>{product.name}</p>
        <div>
          <CgRemove
            fontSize={20}
            color="#FF0000"
            opacity={bagItemsAmount[product.id] > 1 ? 1 : 0.3}
            cursor={bagItemsAmount[product.id] > 1 ? "pointer" : "not-allowed"}
            onClick={() => {
              bagItemsAmount[product.id] > 1 && handleProductDecrement(product);
            }}
          />
          <p>{bagItemsAmount[product.id]}x</p>
          <CgAdd
            fontSize={20}
            color="#07bc0c"
            cursor="pointer"
            onClick={() => {
              handleProductIncrement(product);
            }}
          />
        </div>
        <p>{formatPrice(product.price * product.amount)}</p>
        <span>
          <CgTrash
            fontSize={22}
            onClick={() => handleRemoveProduct(product.id)}
          />
        </span>
      </div>
    </BagContent>
  );
}
