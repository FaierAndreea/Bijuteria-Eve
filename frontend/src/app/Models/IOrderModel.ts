import { IAddressModel } from "./addressModel";

export interface IOrderModel {
    cartId: string;
    deliveryMethodId: number;
    shipToAddress: IAddressModel;
}
export interface OrderItem {
    id: number;
    name: string;
    picture: string;
    price: number;
    quantity: number;
}

export interface IOrderExtended {
    id: number;
    buyerEmail: string;
    orderDate: Date;
    shipToAddress: IAddressModel;
    deliveryMethod: string;
    shippingPrice: number;
    orderItems: OrderItem[];
    subtotal: number;
    total: number;
    status: string;
}