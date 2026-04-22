# rc-jh-component

React 组件库，提供 Loading 和 Skeleton 组件，基于 Ant Design 构建。

## 安装

```bash
npm install rc-jh-component
```

## 使用

```tsx
import { Loading, RootHydrateFallback } from "rc-jh-component";

function App() {
	return (
		<div>
			<Loading />
			<RootHydrateFallback />
		</div>
	);
}
```

## API

### Loading

| 属性  | 类型     | 默认值 | 说明                 |
| ----- | -------- | ------ | -------------------- |
| delay | `number` | `2000` | 延迟显示时间（毫秒） |

### RootHydrateFallback

无 props，直接使用即可。

## 开发

```bash
npm install
npm run build
npm run test
```

## License

MIT
