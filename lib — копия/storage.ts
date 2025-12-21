import { Env } from './types';

export class R2Client {
    private bucket: any;

    constructor(env: Env) {
        this.bucket = env.R2;
    }

    async getFile(key: string) {
        if (!this.bucket) return null;
        const object = await this.bucket.get(key);
        return object;
    }

    async uploadFile(key: string, stream: ReadableStream, contentType: string) {
        if (!this.bucket) return null;
        await this.bucket.put(key, stream, {
            httpMetadata: { contentType },
        });
        return key;
    }
}
