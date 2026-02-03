import { IProduct } from "@/models/IProducts";


export default async function getSingleProduct(slug: string): Promise<IProduct> {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/slug/${slug}`)


    if (!res.ok) {
        throw new Error("Produkt hittades ej")
    }
    return res.json();
}