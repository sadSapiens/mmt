export interface IOrderState {
  orderCart: IOrderProductsCart | null;
}
export interface IOrderProductsCart {
  items: [
    {
      id: number;
      price: number;
      quantity: number;
      amount: number;
      product: IOrderProduct;
    }
  ];
  total_amount: number;
}

export interface IOrderProduct {
  article: number;
  id: number;
  name: string;
  images: {
    big: string;
    small: string;
    superbig: string;
  };
  sizes: {
    id: number;
    quantity: number;
    size: string | null;
  };
}
