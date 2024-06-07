import {Post} from "@/app/_models/Post";

export interface ApiResponse {
    found: number;
    posts: Post[];
    meta: {
        links: {
            counts: string;
        };
        wpcom: boolean;
    };
}