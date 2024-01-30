import { BagContent, ImageBag } from "./styles";

interface ProductsInBag {
  name: string;
  price: number;
  image: string;
}

export default function BagItens(props: ProductsInBag) {
  return (
    <BagContent>
      <ImageBag src={props.image} alt={props.name} />
      <div>
        <span>{props.name}</span>
        <span>{props.price}</span>
      </div>
      {/* <ButtonAddBag>
        <span>+</span>Adicionar à sacola
      </ButtonAddBag> */}
    </BagContent>
  );
}
