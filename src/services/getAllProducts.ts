import { IProduct } from "../models/IProducts";

const productsURL = "https://api.escuelajs.co/api/v1/products?offset=0&limit=10";

export default async function getAllProducts(): Promise<IProduct[]> {
    const res = await fetch(productsURL, { cache: "no-store" });

    if (!res.ok) {
        throw new Error("Gick inte att ladda produkter")
    }
    const data: IProduct[] = await res.json();
    // console.log(data);
    return data;
}