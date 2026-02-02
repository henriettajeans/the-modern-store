import Link from "next/link";
import { IProduct } from "../models/IProducts";
import Image from "next/image";

export default async function DisplayAllProducts({ products }: { products: IProduct[] }) {
    return (
        <section>
            <h2>Alla våra produkter</h2>
            <ul>
                {products.map((item) =>
                    <Link href="" key={item.id}>
                        <li>
                            <h5>{item.title}</h5>
                            <Image src={item.images[0]} alt={item.description} height={200} width={200} />
                        </li>
                    </Link>)}
            </ul>
        </section>
    )
}