import { act, renderHook } from '@testing-library/react';
import { useBark } from '../useBark';

const apiUrl = 'https://api.dctxf.com/mGTPVYeE3gFFknswfemUHC'

describe('test useBark', () => {
  it('should be defined', async () => {
    const { result } = renderHook(() => useBark({ apiUrl }))
    await act(async () => {
      const res = await result.current.push({ title: 'test useBark', body: 'test', group: 'mihooks' })
      console.log('res', res)
      expect(res).not.toBeUndefined()
    })
  });
})
