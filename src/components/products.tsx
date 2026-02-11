"use client";
import Link from "next/link";
import { IProduct } from "../models/IProducts";
import p_img from "../../public/placeholder.png";

import Image from "next/image";
import { useState } from "react";
import ProductCard from "./productCard";

export default function DisplayAllProducts({ products }: { products: IProduct[] }) {
    const [category, setCategory] = useState<string>("");

    const categories = [...new Set(products.map(p => p.category.name))]

    const productDisplay = category === "" ? products : products.filter(p => p.category.name === category)


    return (
        <section className="product-display">
            <h2>Alla våra produkter</h2>
            <label>Kategorier</label>
            <select onChange={(e) => setCategory(e.target.value)}>
                <option value="">Alla produkter</option>
                {categories.map(c => (
                    <option key={c} value={c}>{c}</option>
                ))}

            </select>
            <ul className="product-display-grid">

                {/* Products in grid display are from a component using props, which is mapping the product array */}
                {productDisplay.map((item) =>
                    <ProductCard key={item.title} item={item} />
                )}
            </ul>
        </section>
    )
}