"use client";
import { IProduct } from "@/models/IProducts";
import { useEffect, useState } from "react";

export default function WishListButton({ product }: { product: IProduct }) {
    console.log("WishListButton received item:", product);
    const [inWishlist, setInWishlist] = useState(false);

    useEffect(() => {

        let wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
        wishlist = wishlist.filter((product: IProduct) => product !== null && product !== undefined)
        const exists = wishlist.find((p: IProduct) => p.slug === product.slug);
        setInWishlist(!!exists);
    }, [product])

    const toggleWishButton = async () => {
        let wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

        // If list is empty, or no product was found, dont try to do anything
        wishlist = wishlist.filter((product: IProduct) => product !== null && product !== undefined)

        if (inWishlist) {
            // Filtering if the product was already added to wishlist, don't add again
            wishlist = wishlist.filter((p: IProduct) => p.slug !== product.slug)

        } else {
            wishlist.push(product);
        }

        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        setInWishlist(!inWishlist);
    }

    return (
        <button type="button" onClick={toggleWishButton}>
            {inWishlist ? <span>I önskelistan</span> : <span>Lägg till</span>}
        </button>
    )
}