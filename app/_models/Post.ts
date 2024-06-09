import {Author} from "@/app/_models/Author";
import {Discussion} from "@/app/_models/Discussion";
import {Terms} from "@/app/_models/Terms";
import {Metadata} from "next";
import {Capabilities} from "@/app/_models/Capabilities";
import {MetaLinks} from "@/app/_models/MetaLinks";

export interface Post {
    "id": number,
    "user_created": string,
    "date_created": string,
    "user_updated": string | null,
    "date_updated": string | null,
    "title": string
    
    // ID: number;
    // site_ID: number;
    // author: Author;
    // date: string;
    // modified: string;
    // title: string;
    // URL: string;
    // short_URL: string;
    // content: string;
    // excerpt: string;
    // slug: string;
    // guid: string;
    // status: string;
    // sticky: boolean;
    // password: string;
    // parent: boolean | number;
    // type: string;
    // discussion: Discussion;
    // likes_enabled: boolean;
    // sharing_enabled: boolean;
    // like_count: number;
    // i_like: boolean;
    // is_reblogged: boolean;
    // is_following: boolean;
    // global_ID: string;
    // featured_image: string;
    // post_thumbnail: {
    //     "ID": number,
    //     "URL": string,
    //     "guid": string,
    //     "mime_type": string,
    //     "width": number,
    //     "height": number
    // } | null;
    // format: string;
    // geo: boolean;
    // menu_order: number;
    // page_template: string;
    // publicize_URLs: string[];
    // terms: Terms;
    // tags: Record<string, unknown>;
    // categories: Terms['category'];
    // attachments: Record<string, unknown>;
    // attachment_count: number;
    // metadata: Metadata[];
    // meta: {
    //     links: MetaLinks;
    // };
    // capabilities: Capabilities;
    // other_URLs: Record<string, unknown>;
}