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