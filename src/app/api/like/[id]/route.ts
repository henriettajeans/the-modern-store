import { getPosts } from "@/services/postService";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = params;
        const posts = getPosts();
        const post = posts.find((p) => p.id === id);

        if (!post) {
            return NextResponse.json(
                { message: 'Post not found... 404' },
                { status: 404 }
            );
        }
        // Return Response json as the post
        return NextResponse.json(post);
    } catch (error) {
        console.error('Error when loading post! ', error);
        // Return Response json as an error message
        return NextResponse.json(
            { message: 'Failed to load post...' },
            { status: 500 }
        );
    }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    try {

    } catch { }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    try {

    } catch {

    }
}