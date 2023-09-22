import { test, expect } from "@jest/globals";
import helloWorld, { Label } from "./helloWorld";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/jest-globals';
import userEvent from '@testing-library/user-event';

test("helloWorld", (): void => {
  const value: string = helloWorld();
  expect(value).toBe("helloWorldaaa");
});

test("jsxComponent", (): void => {
  const labelValue = "labelValue";
  render(<Label value={labelValue} />);
  expect(screen.getByRole("button")).toHaveTextContent(labelValue);
});

test("useState onClick", async () => {
  const labelValue = "labelValue";
  const user = userEvent.setup();
  render(<Label value={labelValue} />);
  expect(screen.getByRole("button")).toHaveTextContent(labelValue);

  await user.click(screen.getByRole("button"));
  expect(screen.getByRole("button")).toHaveTextContent(labelValue + "a");
});