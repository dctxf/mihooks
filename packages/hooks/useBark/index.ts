import { pushByBark } from '@dctxf/service';
import { useState } from 'react';

export const useBark = () => {
  const [loading, setLoading] = useState(false)
  return { pushByBark, loading };
};
