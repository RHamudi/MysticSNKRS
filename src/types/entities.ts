export interface APIecommerceResponse<T> {
  data: T;
  id: string | string[] | undefined;
}

export interface UpdateProduct {
  productName: string | undefined;
  productDescription: string | undefined;
  productPrice: number | undefined;
  productQuantity: number | undefined;
  productImage: string | undefined;
}

export interface Products {
  _id: string;
  productName: string;
  productDescription: string;
  productPrice: number;
  productQuantity: number;
  productImage: string;
  username: string;
  __v: number;
}

export interface ProductsUser {
  _id: string;
  productName: string;
  productDescription: string;
  productPrice: number;
  productQuantity: number;
  productImage: string;
  username: string;
  __v: number;
}

export interface Login {
  msg: string;
  username: string;
  id: string;
  token: string;
}

export interface CreateUser {
  msg: string;
}
