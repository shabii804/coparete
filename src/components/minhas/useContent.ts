'use client';

import { useState, useEffect } from 'react';

interface UseContentOptions {
  activeOnly?: boolean;
}

export function useContent<T = any>(type: string, options: UseContentOptions = {}) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const fetchData = async () => {
      try {
        setLoading(true);
        const params = options.activeOnly === false ? '?active=false' : '';
        const res = await fetch(`/api/${type}${params}`);
        if (!res.ok) throw new Error(`Failed to fetch ${type}`);
        const json = await res.json();
        if (!cancelled) {
          setData(json);
          setError(null);
        }
      } catch (e: any) {
        if (!cancelled) setError(e.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    fetchData();
    return () => { cancelled = true; };
  }, [type, options.activeOnly]);

  return { data, loading, error };
}
