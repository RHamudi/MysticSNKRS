export interface APIecommerceResponse<T> {
  status: number;
  data: T;
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
