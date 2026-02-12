"use client";

import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";



interface LikeButtonProps {
    productTitle: string;
    initialLikes: number;
}

export default function LikeButton({ productTitle, initialLikes }: LikeButtonProps) {

    const [likes, setLikes] = useState(initialLikes);
    const [hasLiked, setHasLiked] = useState(false);

    useEffect(() => {
        // Fetch actual likes when component mounts
        const fetchLikes = async () => {
            const res = await fetch(`/api/like?productTitle=${productTitle}`);
            const data = await res.json();
            setLikes(data.likes);
        };
        fetchLikes();

        // Add to local storage, so a like is set to "user" and works across different pages and components
        const likedProducts = JSON.parse(localStorage.getItem("likedProducts") || "[]");
        setHasLiked(likedProducts.includes(productTitle));

    }, [productTitle]);

    const toggleLikeButton = async () => {
        const newHasLiked = !hasLiked;

        const res = await fetch("/api/like", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                productTitle,
                action: newHasLiked ? "like" : "unlike",
            })
        })
        const data = await res.json();
        setLikes(data.likes);
        setHasLiked(newHasLiked);

        // Set user action Like to local storage
        const likedProducts = JSON.parse(localStorage.getItem("likedProducts") || "[]");

        if (newHasLiked) {
            // User just liked it - ADD to array
            likedProducts.push(productTitle);
        } else {
            // User just unliked it - REMOVE from array
            const index = likedProducts.indexOf(productTitle);
            if (index > -1) likedProducts.splice(index, 1);
        }

        localStorage.setItem("likedProducts", JSON.stringify(likedProducts));
    }

    return (
        <button type="button" onClick={toggleLikeButton}>
            {hasLiked ? <FaHeart /> : <FaRegHeart />}
            {likes > 0 && <span>{likes}</span>}
        </button>
    )
}