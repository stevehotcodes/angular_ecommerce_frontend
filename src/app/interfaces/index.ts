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