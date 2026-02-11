import { IProduct, ProductCardProps } from "@/models/IProducts"
import Link from "next/link"



export default function ProductCard({ item }: ProductCardProps) {
    return (
        <li key={item.id} >
            <Link href={`/product/${item.slug}`}>

                <h5>{item.title}</h5>
                <span>${item.price}</span>
                <img src={item.images[0]} height={200} width={200} />

            </Link>
        </li>
    )
}