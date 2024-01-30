interface Product {
  id: number;
  name: string;
  price: number;
  inclusion_date: string;
  image: string;
  description: string;
  discounted_product: boolean;
}

export const ProductsList: Product[] = [
  {
    id: 1,
    name: "Smartphone XYZ",
    price: 899.99,
    inclusion_date: "2024-02-01",
    image: "https://imgs.casasbahia.com.br/55058201/1g.jpg?imwidth=1000",
    description: "Um smartphone poderoso com recursos avançados.",
    discounted_product: true,
  },
  {
    id: 2,
    name: "Notebook ABC",
    price: 1499.99,
    inclusion_date: "2024-02-02",
    image: "https://imgs.casasbahia.com.br/55065262/1g.jpg?imwidth=1000",
    description: "Notebook de alto desempenho para trabalho e entretenimento.",
    discounted_product: false,
  },
  {
    id: 3,
    name: "Fones de Ouvido Sem Fio Pro",
    price: 129.99,
    inclusion_date: "2024-02-03",
    image: "https://imgs.casasbahia.com.br/1560549447/1xg.jpg?imwidth=1000",
    description: "Fones de ouvido sem fio premium com cancelamento de ruído.",
    discounted_product: true,
  },
  {
    id: 4,
    name: "Smart TV 4K XYZ",
    price: 1999.99,
    inclusion_date: "2024-02-04",
    image: "https://imgs.casasbahia.com.br/55060824/1g.jpg?imwidth=1000",
    description: "Mergulhe em imagens deslumbrantes em 4K com esta smart TV.",
    discounted_product: false,
  },
  {
    id: 5,
    name: "Console de Jogos Pro",
    price: 3499.99,
    inclusion_date: "2024-02-05",
    image: "https://imgs.casasbahia.com.br/55065289/1g.jpg?imwidth=1000",
    description: "Console de jogos de próxima geração para uma experiência de jogo incomparável.",
    discounted_product: true,
  }
]
