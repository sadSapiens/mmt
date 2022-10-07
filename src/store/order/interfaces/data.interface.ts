import { ReactNode } from "react";

export interface IOrderState {
  orderCart: IOrderProductsCart | null;
  historyOrder: IHistoryOrder[] | null;
}
export interface IOrderProductsCart {
  [index: number]: any;
  items: [
    {
      costoms: any;
      id: number;
      price: number;
      quantity: number;
      amount: number;
      product: IOrderProduct;
    }
  ];
  total_amount: number;
}
export interface IHistoryOrder {
  item: any;
  order_item: {
    id: number;
    product: IHistoryOrderItemProduct;
    costoms: [];
    quantity: number;
    amount: number;
  };
  created_at: string;
  delivery_status: string;
  payment_status: string;
}

export interface IHistoryOrderItemProduct {
  article: string;
  id: string;
  name: string;
  color: string;
  images: {
    big: string;
    small: string;
    superbig: string;
  };
}

export interface IOrderProduct {
  color: ReactNode;
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
