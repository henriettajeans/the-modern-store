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
    }, [productTitle]);

    const toggleLikeButton = async () => {
        const newHasLiked = !hasLiked;
        setHasLiked(newHasLiked);

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
    }

    return (
        <button type="button" onClick={toggleLikeButton}>
            {hasLiked ? <FaHeart /> : <FaRegHeart />}
            {likes > 0 && <span>{likes}</span>}
        </button>
    )
}