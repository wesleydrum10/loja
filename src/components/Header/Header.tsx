import { useEffect, useState } from "react";
import Logo from "../../assets/shopping.png";
import Bag from "../../assets/bag.png";
import {
  HeaderContainer,
  ImageContainer,
  InputContainer,
  BagContainer,
  CountBag,
  ContentCart,
  BtnCheckout,
  ImageBag,
} from "./styles";
import BagItens from "../BagItens/BagItens";
import { useBag } from "../../context/useBag";
import { formatPrice } from "../../util/formatPrice";
import { useListing } from "../../context/useListing";
import {useNavigate} from 'react-router-dom'

interface OriginPage {
  origin: string;
}

export default function Header({ origin }: OriginPage) {
  const [showContentCart, setShowContentCart] = useState(false);
  const [textParams, setTextParams] = useState<string>();
  const { bag } = useBag();
  const { searchProducts, listingProducts } = useListing();
  const navigate = useNavigate()

  const itensBag = bag?.length;

  const bagFormatted = bag.map((product) => ({
    ...product,
    priceFormatted: formatPrice(product.price),
    totalFormattedPrice: formatPrice(product.amount * product.price),
  }));

  const handleInputSearch = (e: any) => {
    let valueParams = `name_like=${e.target.value}`;
    setTimeout(() => {
      setTextParams(valueParams);
    }, 2000);
  };

  useEffect(() => {
    if (textParams) {
      searchProducts(textParams as string);
    } else {
      listingProducts();
    }
  }, [textParams]);

  return (
    <HeaderContainer>
      <a onClick={() => navigate('/')}>
        <ImageContainer src={Logo} alt="logo" />
      </a>
      {origin !== "checkout" && (
        <>
          <InputContainer
            type="text"
            placeholder="Olá, o que você procura?"
            onChange={(e) => handleInputSearch(e)}
          />
          <BagContainer
            onClick={() => {
              origin !== "checkout" && setShowContentCart(!showContentCart);
            }}
          >
            <CountBag>
              <span>{itensBag}</span>
            </CountBag>
            <ImageBag src={Bag} alt="Sacola" />
          </BagContainer>
        </>
      )}
      {showContentCart && (
        <ContentCart>
          {!!bagFormatted.length && <p>Resumo da sacola</p>}
          {bagFormatted.map((product) => (
            <BagItens
              id={product.id}
              amount={product.amount}
              name={product.name}
              image={product.image}
              price={product.price}
              key={product.id}
            />
          ))}
          {!!bagFormatted.length ? (
            <a href="/checkout">
              <BtnCheckout>Ir para Checkout</BtnCheckout>
            </a>
          ) : (
            <p>Sem itens na sacola.</p>
          )}
        </ContentCart>
      )}
    </HeaderContainer>
  );
}
