# @dctxf/hooks

自用的一些hooks

## 使用

```bash
npm i @dctxf/hooks
pnpm i @dctxf/hooks
```

## hooks

### useBark
bark 通知

```tsx
import { useBark } from '@dctxf/hooks'

const App = () => {
  const {push,loading,error} = useBark({apiUrl:'xxxx'})
  return (
    <button onClick={() => {
      push({title:'hello',body:'world'})
    }}>bark</button>
  )
}
```
