import { test, expect } from "@jest/globals";
import helloWorld, { Label } from "./helloWorld";

test("helloWorld", (): void => {
  const value: string = helloWorld();
  expect(value).toBe("helloWorldaaa");
});

test("reactComponent", (): void => {
  const element = (<Label />);
});