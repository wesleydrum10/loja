import { useState } from "react";
import Logo from "../../assets/logo.png";
import {
  HeaderContainer,
  ImageContainer,
  InputContainer,
  BagContainer,
  CountBag,
  ContentCart,
} from "./styles";
import BagIcon from "../../icons/bagIcon";
import BagItens from "../BagItens/BagItens";
import { ProductsList } from "../../database/products";

export default function Header() {
  const [showContentCart, setShowContentCart] = useState(false);

  return (
    <HeaderContainer>
      <ImageContainer src={Logo} alt="logo" />
      <InputContainer type="text" placeholder="Olá, o que você procura?" />
      <BagContainer onClick={() => setShowContentCart(!showContentCart)}>
        <CountBag>1</CountBag>
        <BagIcon />
      </BagContainer>
        {showContentCart && (
          <ContentCart>
            <BagItens name={ProductsList[0].name} image={ProductsList[0].image} price={ProductsList[0].price} key={ProductsList[0].id}/>
            <BagItens name={ProductsList[1].name} image={ProductsList[1].image} price={ProductsList[1].price} key={ProductsList[1].id}/>
            <BagItens name={ProductsList[2].name} image={ProductsList[2].image} price={ProductsList[2].price} key={ProductsList[2].id}/>
          </ContentCart>
        )}
    </HeaderContainer>
  );
}
