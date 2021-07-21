import { v4 as uuidv4 } from 'uuid';

export interface ICartModel {
    id: string;
    items: ICartItem[];
}
export interface ICartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    picture: string;
}

export class Cart implements ICartModel{
    id = uuidv4();
    items: ICartItem[] = [];
}

export interface ICartTotal {
    subtotal: number;
    shipping: number;
    total: number;
}