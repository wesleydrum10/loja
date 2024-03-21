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
  ContentHeader,
} from "./styles";
import BagItens from "../BagItens/BagItens";
import { useBag } from "../../context/useBag";
import { formatPrice } from "../../util/formatPrice";
import { useListing } from "../../context/useListing";
import { useNavigate } from "react-router-dom";

interface OriginPage {
  origin: string;
}

export default function Header({ origin }: OriginPage) {
  const [showContentCart, setShowContentCart] = useState(false);
  const { bag } = useBag();
  const { searchProducts, listingProducts, textParams, setTextParams } = useListing();
  const navigate = useNavigate();

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
    }, 1000);
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
      <ContentHeader onClick={() => navigate("/")}>
        <ImageContainer src={Logo} alt="logo" $origin/>
      </ContentHeader>
      {origin !== "checkout" && (
        <>
          <ContentHeader>
            <InputContainer
              type="search"
              placeholder="Olá, o que você procura?"
              onChange={(e) => handleInputSearch(e)}
            />
          </ContentHeader>
          <ContentHeader>
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
          </ContentHeader>
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
          {!!bagFormatted.length && (
            <a onClick={() => navigate("/checkout")}>
              <BtnCheckout>Ir para Checkout</BtnCheckout>
            </a>
          )}
          {!bagFormatted.length && <p>Sacola vazia</p>}
        </ContentCart>
      )}
    </HeaderContainer>
  );
}
