"use client";

import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";



interface LikeButtonProps {
    productTitle: string;
}

export default function LikeButton({ productTitle }: LikeButtonProps) {
    const [likes, setLikes] = useState(0);
    const [hasLiked, setHasLiked] = useState(false);


    useEffect(() => {
        const fetchLikes = async () => {
            const res = await fetch(`/api/like?productTitle=${productTitle}`);
            const data = await res.json();
            setLikes(data.likes);
        };
        fetchLikes();
    }, [productTitle])

    const toggleLikeButton = async () => {
        const res = await fetch("/api/like", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                productTitle,
                action: hasLiked ? "inlike" : "like"
            })
        })
        const data = await res.json();
        setLikes(data.likes);
        setHasLiked(!hasLiked)
    }

    return (
        <button type="button" onClick={toggleLikeButton}>
            {likes > 0 ? <FaHeart /> : <FaRegHeart />}
            {likes > 0 && <span>{likes}</span>}
        </button>
    )
}