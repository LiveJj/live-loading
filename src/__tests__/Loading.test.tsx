import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Loading from "../Loadding/index";

describe("Loading Component", () => {
	it("不显示当 state 为 false", () => {
		render(<Loading state={false} />);
		expect(screen.queryByTestId("loading-mask")).not.toBeInTheDocument();
	});

	it("延迟后显示当 state 为 true", async () => {
		render(<Loading state={true} delay={100} />);
		expect(screen.queryByTestId("loading-mask")).not.toBeInTheDocument();

		await waitFor(() => {
			expect(screen.getByTestId("loading-mask")).toBeInTheDocument();
		});
	});

	it("有正确的全屏类名当 fullScreen 为 true", async () => {
		render(<Loading state={true} fullScreen={true} delay={100} />);

		await waitFor(() => {
			const mask = screen.getByTestId("loading-mask");
			expect(mask.className).toContain("isFullScreen");
		});
	});

	it("没有全屏类名当 fullScreen 为 false", async () => {
		render(<Loading state={true} fullScreen={false} delay={100} />);

		await waitFor(() => {
			const mask = screen.getByTestId("loading-mask");
			expect(mask.className).not.toContain("isFullScreen");
		});
	});

	it("隐藏当 state 变为 false", async () => {
		const { rerender } = render(<Loading state={true} delay={100} />);

		await waitFor(() => {
			expect(screen.getByTestId("loading-mask")).toBeInTheDocument();
		});

		rerender(<Loading state={false} />);
		expect(screen.queryByTestId("loading-mask")).not.toBeInTheDocument();
	});

	it("使用默认延迟 2000ms", async () => {
		render(<Loading state={true} />);

		// 1000ms 后不应该显示
		await new Promise((resolve) => setTimeout(resolve, 1000));
		expect(screen.queryByTestId("loading-mask")).not.toBeInTheDocument();

		// 2500ms 后应该显示
		await waitFor(
			() => {
				expect(screen.getByTestId("loading-mask")).toBeInTheDocument();
			},
			{ timeout: 3000 },
		);
	});
});
