"use client";
import Link from "next/link";
import { IProduct } from "../models/IProducts";
import Image from "next/image";
import { useState } from "react";

export default function DisplayAllProducts({ products }: { products: IProduct[] }) {
    const [category, setCategory] = useState<string>("");

    const categories = [...new Set(products.map(p => p.category.name))]

    const productDisplay = category === "" ? products : products.filter(p => p.category.name === category)


    return (
        <section>
            <h2>Alla våra produkter</h2>
            <label>Kategorier</label>
            <select onChange={(e) => setCategory(e.target.value)}>
                <option value="">Alla produkter</option>
                {categories.map(c => (
                    <option key={c} value={c}>{c}</option>
                ))}

            </select>
            <ul>
                {productDisplay.map((item) =>
                    <Link href={`/product/${item.slug}`} key={item.id}>
                        <li>
                            <h5>{item.title}</h5>
                            <img src={item.images[0]} alt={item.description} height={200} width={200} />
                        </li>
                    </Link>)}
            </ul>
        </section>
    )
}