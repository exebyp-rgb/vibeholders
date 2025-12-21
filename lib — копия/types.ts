export interface Creator {
    id: string; // TEXT
    slug: string; // TEXT
    display_name: string; // TEXT
    archetype: string; // TEXT
    city_bucket: string; // TEXT
    hero_video_path: string; // TEXT
    poster_path: string; // TEXT
    tags: string; // JSON string
    out_url: string; // TEXT
    owner_type: 'admin' | 'creator'; // TEXT
    owner_id: string; // TEXT
    is_active: number; // INTEGER (0 | 1)
    priority: number; // INTEGER
    created_at: number; // INTEGER (Unix timestamp)
    updated_at: number; // INTEGER
}

export interface CreatorAuth {
    id: string;
    email: string;
    provider: string; // 'google'
    provider_id: string;
    created_at: number;
}

export interface Env {
    DB: any; // D1Database binding
    R2: any; // R2Bucket binding
}
