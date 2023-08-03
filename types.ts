import { StaticImageData } from "next/image";

export interface ICards {
    carts: {}[];
}

export interface ICard {
    id: number;
    title: string;
    price: string;
}

export interface IInfo {
    image: string; 
    title: string; 
    description: string;
}

export interface IPage {
    title: string;
    infoText: string;
    infoValue: number;
}

export interface IWalletCard {
    image: StaticImageData;
    name: string;
    account: 'usd' | 'coin';
}

export interface IModal {
    children: React.ReactNode;
    active: boolean;
}