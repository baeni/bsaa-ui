import { User } from "@/application/models/User";

export interface Post {
    id: string,
    status: PostStatus,
    user_created: User,
    date_created: string,
    user_updated: User | null,
    date_updated: string | null,
    title: string,
    content: string,
    excerpt: string,
    featured_image: string | null,
    slug: string
}

export enum PostStatus {
    Draft,
    Published,
    Archived
}