import { PushByBarkParams, pushByBark } from '@dctxf/service';
import { useCallback, useState } from 'react';

export type UserBarkOptions = { apiUrl: string }

export const useBark = (options: UserBarkOptions) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const push = useCallback(
    async (params: Omit<PushByBarkParams, 'apiUrl'>) => {
      setLoading(true)
      try {
        const res = await pushByBark({ ...params, apiUrl: options.apiUrl })
        return res
      } catch (error) {
        console.error(error)
        setError(error)
        return Promise.reject(error)
      } finally {
        setLoading(false)
      }
    }, [options.apiUrl])

  return { push, loading, error };
};
