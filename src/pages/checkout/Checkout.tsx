import BagItens from "../../components/BagItens/BagItens";
import Header from "../../components/Header/Header";
import { useBag } from "../../context/useBag";
import { formatPrice } from "../../util/formatPrice";
import { BtnFinished, ChekoutContainer, FinalizePurchaseContent } from "./styles";

export default function Checkout() {
  const { bag, clearBag } = useBag()

  const bagFormatted = bag.map(product => ({
    ...product,
    priceFormatted: formatPrice(product.price),
    totalFormattedPrice: formatPrice(product.amount * product.price)
  }))

  const total =
    formatPrice(
      bag.reduce((sumTotal, product) => {
        sumTotal += product.amount * product.price

        return sumTotal
      }, 0)
    )

  return (
    <>
      <Header origin="checkout" />
      <ChekoutContainer>
        {bagFormatted.map(product =>
          <BagItens
            id={product.id}
            amount={product.amount}
            name={product.name}
            image={product.image}
            price={product.price}
            key={product.id}
          />
        )}
        {!!bagFormatted.length ? (
          <FinalizePurchaseContent>
            <h2>Total: {total}</h2>
            <BtnFinished onClick={() => clearBag()}>Finalizar compra</BtnFinished>
          </FinalizePurchaseContent>
        ) : (
          <h2>Sacola vazia!</h2>
        )}
      </ChekoutContainer>
    </>
  )
}