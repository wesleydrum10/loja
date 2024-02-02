import { BagItemsAmount, Products } from "../../@types/types";
import { useBag } from "../../context/useBag";
import { formatPrice } from "../../util/formatPrice";
import { CardContainer, ImageCard, CardContent } from "./styles";
import { IoBagAddOutline } from "react-icons/io5";

export default function CardProducts(product: Products) {
  const { bag, addProduct } = useBag()

  const bagItemsAmount = bag.reduce((sumAmount, product) => {
    if (sumAmount[product.id]) {
      sumAmount[product.id] += product.amount
    } else {
      sumAmount[product.id] = product.amount
    }

    return sumAmount
  }, {} as BagItemsAmount)

  function handleProduct(id: number) {
    addProduct(id)
  }

  console.log('items', bagItemsAmount[product.id])
  console.log('quantity', product.amount)

  return (
    <CardContainer>
      <CardContent key={product.id}>
        <ImageCard src={product.image} alt={product.name} />
        <p>{product.name}</p>
        <p>{formatPrice(product.price)}</p>
        <p>{product.description}</p>
        <button onClick={() => handleProduct(product.id)} disabled={bagItemsAmount[product.id] == product.amount}>
          <IoBagAddOutline fontSize={20}/>
          <span>{bagItemsAmount[product.id] || 0}</span>Adicionar à sacola
        </button>
      </CardContent>
    </CardContainer>
  );
}
