import { getPosts, writePosts } from "@/services/postService";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
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

// Add a like/dislike to post
export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const body = await request.json();
        const posts = getPosts();
        const singlePosts = posts.findIndex((p) => p.id === id);

        if (singlePosts === -1) {
            return NextResponse.json(
                { message: 'Post NOT found :(' },
                { status: 404 }
            );
        }

        const post = posts[singlePosts];
        const { like, dislike } = body;

        if (like === 1) {
            post.likes = (post.likes || 0) + 1;
        } else if (dislike === 1) {
            post.likes = Math.max((post.likes || 0) - 1, 0);
        }

        writePosts(posts);
        return NextResponse.json(post);

    } catch (error) {
        console.error('Error updating likes: ', error);
        return NextResponse.json(
            { message: ' Failed to update LIKES!' },
            { status: 500 }
        );
    }
}

// Delete a single post 
export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const posts = getPosts();

        // Update the list without the deleted post
        const updatedPosts = posts.filter((p) => p.id !== id);

        if (updatedPosts.length === posts.length) {
            return NextResponse.json(
                { message: "Post not found or unable to delete" },
                { status: 404 }
            );
        }

        writePosts(updatedPosts);
        return NextResponse.json({ message: "Post was successfully deleted" });

    } catch (error) {

        console.error('Error when deleteing post, ', error);
        return NextResponse.json(
            { message: "Failed to DELETE single post" },
            { status: 500 }
        )

    }
}