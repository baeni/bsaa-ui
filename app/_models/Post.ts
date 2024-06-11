export interface Post {
    "id": string,
    "status": Status,
    "user_created": string,
    "date_created": string,
    "user_updated": string | null,
    "date_updated": string | null,
    "title": string,
    "content": string,
    "thumbnail": string | null,
    "featured_image": string | null,
    "slug": string
}

export enum Status {
    Draft,
    Published,
    Archived
}