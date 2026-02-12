"use client";

import { useEffect, useState } from "react";

interface LikeButtonProps {
    productTitle: string;
}

export default function LikeButton({ productTitle }: LikeButtonProps) {
    const [likes, setLikes] = useState(0);



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
                action: "like"
            })
        })
        const data = await res.json();
        setLikes(data.likes);
    }

    return (
        <button type="button" onClick={toggleLikeButton}>
            {likes > 0 && <span>Antal likes: {likes}</span>}
        </button>
    )
}