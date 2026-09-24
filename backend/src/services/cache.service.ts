import { getRedisClient } from "../config/redis";

const inMemoryStore = new Map<string, { value: string; expiresAt: number }>();

export class CacheService {
  async get(key: string): Promise<string | null> {
    const client = await getRedisClient();
    if (client) {
      try {
        return await client.get(key);
      } catch (e) {}
    }
    // In-memory fallback
    const entry = inMemoryStore.get(key);
    if (!entry) return null;
    if (Date.now() > entry.expiresAt) {
      inMemoryStore.delete(key);
      return null;
    }
    return entry.value;
  }

  async set(key: string, value: string, ttlSeconds = 60): Promise<void> {
    const client = await getRedisClient();
    if (client) {
      try {
        await client.set(key, value, { EX: ttlSeconds });
        return;
      } catch (e) {}
    }
    // In-memory fallback
    inMemoryStore.set(key, { value, expiresAt: Date.now() + ttlSeconds * 1000 });
  }

  async del(key: string): Promise<void> {
    const client = await getRedisClient();
    if (client) {
      try {
        await client.del(key);
      } catch (e) {}
    }
    inMemoryStore.delete(key);
  }
}

export const cacheService = new CacheService();
