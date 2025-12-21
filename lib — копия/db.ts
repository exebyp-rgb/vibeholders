import { Creator, Env } from './types';

// Helper to query D1 from Next.js Edge Runtime (App Router)
// Note: In Cloudflare Pages, bindings are available on the request context or process.env depending on adapter.
// For Next.js on Pages, we often use `getRequestContext().env.DB`.

export class D1Client {
    private db: any;

    constructor(env: Env) {
        this.db = env.DB;
    }

    async getActiveCreators(): Promise<Creator[]> {
        if (!this.db) return [];
        try {
            const stmt = this.db.prepare(
                "SELECT * FROM creators WHERE is_active = 1 ORDER BY priority DESC, created_at DESC"
            );
            const { results } = await stmt.all();
            return results as Creator[];
        } catch (e) {
            console.error("D1 Error:", e);
            return [];
        }
    }

    async getCreatorBySlug(slug: string): Promise<Creator | null> {
        if (!this.db) return null;
        const stmt = this.db.prepare("SELECT * FROM creators WHERE slug = ?").bind(slug);
        const result = await stmt.first();
        return result as Creator | null;
    }
}
