export interface IUser {
  id?: number,
  username: string,
  classe: string,
  level: number,
  password?: string,
}

export interface IProduct {
  id?: number,
  name: string,
  amount: string,
  orderid?: number,
}

export interface ILogin {
  username: string,
  password: string,
}

export interface IOrder {
  id?: number,
  userId: number,
  productsIds: number[],
}