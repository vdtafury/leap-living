import { createElement, type ImgHTMLAttributes } from "react";
import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

vi.mock("next/image", () => ({
  default: (props: ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean; priority?: boolean; sizes?: string }) => {
    const { fill: _fill, priority: _priority, sizes: _sizes, ...imageProps } = props;
    return createElement("img", imageProps);
  },
}));

afterEach(() => cleanup());
