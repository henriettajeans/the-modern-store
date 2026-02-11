import { NextResponse } from "next/server";

// Minne på servern
// Map sparar namn -> antal likes
const likesStore = new Map<string, number>();


// This function is called when user clicks on like, and unlike
export async function POST(request: Request) {
    const { productTitle, action } = await request.json();

    // Get current like for individual product
    const currentLikes = likesStore.get(productTitle) || 0;

    const newLikes = action === "like" ? currentLikes + 1 : Math.max(currentLikes - 1, 0)

    // Save new value of array to Map (server memory)
    likesStore.set(productTitle, newLikes)

    // Send a json response BACK to client
    return NextResponse.json({
        productTitle,
        likes: newLikes
    })

}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const productTitle = searchParams.get("product");

    if (!productTitle) {
        return NextResponse.json(
            { error: "Product name required" },
            { status: 400 }
        )
    }

    // Get likes from Map, if none, return 0n
    const likes = likesStore.get(productTitle) || 0;
    return NextResponse.json({ productTitle, likes })
}