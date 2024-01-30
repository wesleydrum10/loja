import { CardContainer, ImageCard, CardContent, ButtonAddBag } from "./styles";

interface Products {
  name: string;
  price: number;
  inclusionDate: string;
  image: string;
}

export default function CardProducts(props: Products) {

  return (
    <CardContainer>
      <CardContent>
        <ImageCard src={props.image} alt={props.name} />
        <p>{props.name}</p>
        <p>{props.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
        <ButtonAddBag>
          <span>+</span>Adicionar à sacola
        </ButtonAddBag>
      </CardContent>
    </CardContainer>
  );
}
