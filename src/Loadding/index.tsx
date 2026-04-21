import { useState, useEffect } from "react";
import styles from "./index.module.css";

interface LoadingProps {
	state?: boolean; // 外部传入的加载状态
	fullScreen?: boolean; // 是否全屏显示,默认显示相对于 Layout 的 Content 区域
	delay?: number; // 多少（毫秒）后才显示Loading组件
}

const Loading: React.FC<LoadingProps> = ({
	state = false,
	fullScreen = false,
	delay = 2000, // 默认 2 秒
}) => {
	const [shouldRender, setShouldRender] = useState(false);

	useEffect(() => {
		let timer: ReturnType<typeof setTimeout>;

		if (state) {
			// 如果状态变为 loading，启动定时器
			timer = setTimeout(() => {
				setShouldRender(true);
			}, delay);
		} else {
			// 如果状态变为非 loading，立即取消定时器并隐藏
			setShouldRender(false);
		}

		// 清理函数：防止组件卸载或 state 快速切换导致的内存泄露或逻辑错误
		return () => {
			if (timer) clearTimeout(timer);
		};
	}, [state, delay]);

	// 只有当 state 为真 且 经过了延迟时间后才渲染
	if (!state || !shouldRender) return null;

	return (
		<div className={`${styles.loadingMask} ${fullScreen ? styles.isFullScreen : ""}`}>
			<div className={styles.loading}>
				{Array.from({ length: 36 }).map((_, index) => (
					<div key={index} className={styles.dot} />
				))}
			</div>
		</div>
	);
};

export default Loading;
