import { IPost } from "@/models/IPost";
import { getPosts, writePosts } from "@/services/postService";
import { NextRequest, NextResponse } from "next/server";
import slugify from "slugify";
import { v4 as uuidv4 } from 'uuid';

export async function GET() {
    try {
        const posts = getPosts();
        return NextResponse.json(posts);
    } catch (error) {
        console.error("Error att ladda inlägg -", error);
        return NextResponse.json(
            { message: "Failed att ladda posterna" },
            { status: 500 }
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { title, content } = body;

        if (!title || !content) {
            return NextResponse.json(
                { message: "Add title and content, required!" },
                { status: 400 }
            );
        }

        const newPost: IPost = {
            id: uuidv4(),
            title, content, likes: 0, slug: slugify(title, { lower: true }),
        };
        const posts = getPosts();
        posts.push(newPost);
        writePosts(posts);
        return NextResponse.json(newPost, { status: 201 });
    } catch (error) {
        console.error("Error att skapa post -", error);
        return NextResponse.json(
            { message: "Failed att skapa post" },
            { status: 500 }
        );
    }
}

