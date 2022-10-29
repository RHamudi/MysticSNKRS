export interface APIecommerceResponse<T> {
  data: T;
  id: string | string[] | undefined;
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

export interface Login {
  msg: string;
  username: string;
  id: string;
  token: string;
}
