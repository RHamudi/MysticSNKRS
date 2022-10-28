export interface APIecommerceResponse<T> {
  status: number;
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
