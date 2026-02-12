"use client";

import { IProduct } from "@/models/IProducts";
import { useState } from "react";
import ProductCard from "./productCard";

export default function ProductFilter({ products }: { products: IProduct[] }) {
    const [category, setCategory] = useState<string>("");

    const categories = [...new Set(products.map(p => p.category.name))]

    const productDisplay = category === "" ? products : products.filter(p => p.category.name === category)

    return (
        <>
            <label>Kategori</label>
            <select onChange={(e) => setCategory(e.target.value)}>
                <option value="">Alla produkter</option>
                {categories.map(c => (
                    <option key={c} value={c}>{c}</option>
                ))}
            </select>
            <ul className="product-display-grid">
                {productDisplay.map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </ul>
        </>
    )

}