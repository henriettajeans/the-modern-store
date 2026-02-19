import { IPost } from "@/models/IPost";
import fs from "fs";
import path from "path";
import slugify from "slugify";

const filePath = path.join(process.cwd(), "src", "data", "posts.json");

export const getPosts = (): IPost[] => {
    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    return data.map((post: IPost) => ({
        ...post,
        slug: post.slug || slugify(post.title, { lower: true }),
    }));
};

export const writePosts = (posts: IPost[]): void => {
    fs.writeFileSync(filePath, JSON.stringify(posts, null, 2));
};