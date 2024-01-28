interface Products {
  name: string;
  price: number;
  inclusionDate: Date;
  image: string;
}

export default function CardProducts(props: Products) {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.price}</p>
      <p>{props.inclusionDate.toDateString()}</p>
      <img src={props.image} alt={props.name} />
    </div>
  );
}
