import { Layout, Skeleton, Space, Divider } from "antd";

const { Header, Content, Sider } = Layout;
/**
 * 根组件加载时的骨架屏
 * 用于在页面首次加载时或网络速度慢时显示占位符，提升用户体验
 */
const RootHydrateFallback: React.FC<{}> = () => {
	return (
		<Layout style={{ minHeight: "100vh" }}>
			{/* 1. 模拟侧边栏 Sider */}
			<Sider width={200} theme="dark" style={{ padding: "16px" }}>
				<div style={{ marginBottom: 24, textAlign: "center" }}>
					<Skeleton.Avatar active size="large" shape="circle" />
				</div>
				<Space orientation="vertical" size="middle" style={{ width: "100%" }}>
					{[1, 2, 3, 4, 5, 6].map((i) => (
						<Skeleton.Button
							key={i}
							active
							block
							style={{
								height: 40,
								borderRadius: 4,
								background: "rgba(255,255,255,0.1)",
							}}
						/>
					))}
				</Space>
			</Sider>

			<Layout>
				{/* 2. 模拟头部 Header */}
				<Header
					style={{
						background: "#fff",
						padding: "0 24px",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<Skeleton.Button active size="small" style={{ width: 120 }} />
					<Space size="large">
						<Skeleton.Input active size="small" style={{ width: 100 }} />
						<Skeleton.Avatar active size="small" />
					</Space>
				</Header>

				{/* 3. 模拟内容区 Content */}
				<Content
					style={{
						margin: "24px 16px",
						padding: 24,
						background: "#fff",
						borderRadius: 8,
					}}
				>
					{/* 模拟面包屑 */}
					<Skeleton.Button active size="small" style={{ width: 150, marginBottom: 20 }} />

					{/* 模拟主体内容：标题 + 段落 */}
					<Skeleton active title={{ width: "30%" }} paragraph={{ rows: 4 }} />
					<Divider />
					<Skeleton active title={{ width: "20%" }} paragraph={{ rows: 6 }} />

					{/* 模拟底部按钮或操作区 */}
					<Space style={{ marginTop: 20 }}>
						<Skeleton.Button active style={{ width: 100 }} />
						<Skeleton.Button active style={{ width: 100 }} />
					</Space>
				</Content>
			</Layout>
		</Layout>
	);
};

export default RootHydrateFallback;
