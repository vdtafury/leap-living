import { createElement, type ImgHTMLAttributes } from "react";
import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

vi.mock("next/navigation", () => {
  const searchParams = new URLSearchParams();
  return {
    useRouter: () => ({ push: vi.fn(), replace: vi.fn() }),
    usePathname: () => "/buy",
    useSearchParams: () => searchParams,
  };
});

vi.mock("next/image", () => ({
  default: (props: ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean; priority?: boolean; sizes?: string }) => {
    const imageProps = { ...props };
    delete imageProps.fill;
    delete imageProps.priority;
    delete imageProps.sizes;
    return createElement("img", imageProps);
  },
}));

afterEach(() => cleanup());
