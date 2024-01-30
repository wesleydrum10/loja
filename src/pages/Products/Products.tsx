import Header from "../../components/Header/Header";
import { CardList, MainContainer } from "./styles";
import { ProductsList } from "../../database/products";
import CardProducts from "../../components/CardProducts/CardProducts";

export default function Products() {

  return (
    <>
      <Header />
      <MainContainer>
        <CardList>
          {ProductsList.map((element, index) => 
            <CardProducts
              key={index}
              name={element.name}
              price={element.price}
              inclusionDate={element.inclusion_date}
              image={element.image}
            />
          )}
        </CardList>
      </MainContainer>
    </>
  );
}
