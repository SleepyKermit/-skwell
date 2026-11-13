import { renderToStaticMarkup } from "react-dom/server";
import { expect, test } from "vitest";
import { APP_NAME } from "@askwell/shared";
import Home from "./page";

test("home renders its heading and setup message", () => {
  const html = renderToStaticMarkup(<Home />);
  expect(html).toContain(APP_NAME);
  expect(html).toContain("Application setup is underway.");
  expect(html).toContain("<main");
});
