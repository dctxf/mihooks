# @dctxf/service

一些接口封装的方法

## 安装

```bash
npm install @dctxf/service
pnpm install @dctxf/service
```

## services

### bark
bark 通知服务

- pushByBark 通过 bark 推送通知

```ts
import { pushByBark } from '@dctxf/service'

pushByBark({title:'hello',body:'world',apiUrl:'xxxx'})
```
