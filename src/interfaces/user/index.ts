export interface iUser {
  id: number;
  name: string;
  username: string;
  email: string;
  history: iCart[];
}

export interface iCart {
  id: number;
  date: string;
  products: iCartProduct[];
}

export interface iCartProduct {
  quantity: number;
  product: iProduct;
}

export interface iProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
