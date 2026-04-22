import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import RootHydrateFallback from "../HydrateFallback/Skeleton";

describe("RootHydrateFallback Component", () => {
	it("正确渲染 Layout 结构", () => {
		render(<RootHydrateFallback />);

		// 检查主 Layout
		const layout = screen.getByRole("complementary");
		expect(layout).toBeInTheDocument();
	});

	it("渲染侧边栏 Sider", () => {
		render(<RootHydrateFallback />);

		// 检查侧边栏（通过样式或其他方式识别）
		const sider = document.querySelector(".ant-layout-sider");
		expect(sider).toBeInTheDocument();
	});

	it("渲染头部 Header", () => {
		render(<RootHydrateFallback />);

		// 检查头部
		const header = document.querySelector(".ant-layout-header");
		expect(header).toBeInTheDocument();
	});

	it("渲染内容区 Content", () => {
		render(<RootHydrateFallback />);

		// 检查内容区
		const content = document.querySelector(".ant-layout-content");
		expect(content).toBeInTheDocument();
	});

	it("渲染多个 Skeleton 组件", () => {
		render(<RootHydrateFallback />);

		// 检查是否有多个 Skeleton 组件
		const skeletons = document.querySelectorAll(".ant-skeleton");
		expect(skeletons.length).toBeGreaterThan(0);
	});

	it("渲染 Skeleton Avatar", () => {
		render(<RootHydrateFallback />);

		// 检查是否有 Avatar
		const avatar = document.querySelector(".ant-skeleton-avatar");
		expect(avatar).toBeInTheDocument();
	});

	it("渲染 Skeleton Button", () => {
		render(<RootHydrateFallback />);

		// 检查是否有 Button
		const buttons = document.querySelectorAll(".ant-skeleton-button");
		expect(buttons.length).toBeGreaterThan(0);
	});

	it("渲染 Skeleton Input", () => {
		render(<RootHydrateFallback />);

		// 检查是否有 Input
		const inputs = document.querySelectorAll(".ant-skeleton-input");
		expect(inputs.length).toBeGreaterThan(0);
	});

	it("渲染 Divider", () => {
		render(<RootHydrateFallback />);

		// 检查是否有 Divider
		const divider = document.querySelector(".ant-divider");
		expect(divider).toBeInTheDocument();
	});
});
