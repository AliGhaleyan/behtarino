export interface Product {
    id: 1,
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