type RateLimitBucket = {
  count: number;
  windowStartedAt: number;
};

type RateLimitResult = {
  allowed: boolean;
  retryAfterSeconds: number;
};

const buckets = new Map<string, RateLimitBucket>();

export function enforceRateLimit(
  key: string,
  maxRequests: number,
  windowMs: number,
): RateLimitResult {
  const now = Date.now();
  const existing = buckets.get(key);

  if (!existing || now - existing.windowStartedAt >= windowMs) {
    buckets.set(key, {
      count: 1,
      windowStartedAt: now,
    });

    pruneExpiredBuckets(now, windowMs);

    return {
      allowed: true,
      retryAfterSeconds: 0,
    };
  }

  if (existing.count >= maxRequests) {
    return {
      allowed: false,
      retryAfterSeconds: Math.ceil(
        (existing.windowStartedAt + windowMs - now) / 1000,
      ),
    };
  }

  existing.count += 1;
  buckets.set(key, existing);

  return {
    allowed: true,
    retryAfterSeconds: 0,
  };
}

function pruneExpiredBuckets(now: number, windowMs: number) {
  for (const [key, bucket] of buckets.entries()) {
    if (now - bucket.windowStartedAt >= windowMs) {
      buckets.delete(key);
    }
  }
}
