export interface IProduct {
    id:string
    productName:string
    productDescription:string
    price:number
    image:string
}

export interface ICartItem extends IProduct {
    quantity:number
}