export interface Iproduct {
    id:string
    productName:string
    productDescription:string
    price:number
    images:Iimage[]
}

export interface IcartItem {
    id:string
    productName:string
    productDescription:string
    price:number
    quantity:number
    image:string
}

export interface Iimage {
    id:number
    imageURL:string
    isMain:boolean
    productID:string
}