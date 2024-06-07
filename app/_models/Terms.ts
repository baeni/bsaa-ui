export interface Terms {
    category: {
        [key: string]: {
            ID: number;
            name: string;
            slug: string;
            description: string;
            post_count: number;
            parent: number;
            meta: {
                links: {
                    self: string;
                    help: string;
                    site: string;
                };
            };
        };
    };
    post_tag: Record<string, unknown>;
    post_format: Record<string, unknown>;
    mentions: Record<string, unknown>;
}