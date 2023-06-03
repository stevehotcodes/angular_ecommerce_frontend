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
    price:number
    quantity:number
    imageURL:string
    userID:string
    productID:string
}


export interface Iimage {
    id:number
    imageURL:string
    isMain:boolean
    productID:string
}


export interface IflashMessage {
    type: 'error' | 'success' | 'info'
    message:string
}

export interface IloggedUser {
    email:string
    token:string
}

export interface InewUserData {
    firstname:string
    lastname:string
    email:string
    password:string
}

export interface IuserCredentials {
    email:string
    password:string
}

export interface IuserData extends InewUserData {
    role:string
}

export interface IorderSuccessResponse {
    message:string
    orderTotal:number
    itemsCount:number
    orderID:string
}

export interface Iorder {
    id:string
    orderStatus:string
    orderDate:string
    userID:string
}

export interface IorderWithInfo {
    id:string
    userID:string
    status: Tstatus
    orderDate:string
    items:IorderItemInfo[]
}

export interface IorderItemInfo {
    productID:string
    quantity:number
    productName:string
    price:number
    imageURL:string
}

export type Tstatus = 'processing' | 'shipping' | 'shipped' | 'canceled'