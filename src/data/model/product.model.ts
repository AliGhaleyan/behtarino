export interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: Rate
}

export interface Rate {
    rate: number,
    count: number
}