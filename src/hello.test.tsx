import { test, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/jest-globals';
import userEvent from '@testing-library/user-event';
import { Hello } from "./hello";

test("default button text is 'Say hello'", () => {
  render(<Hello />);
  expect(screen.getByRole("button")).toHaveTextContent("Say hello");
});

test("textbox is initially empty", () => {
  render(<Hello />);
  expect(screen.getByRole("textbox")).toHaveTextContent("");
});

test("heading is initially absent", () => {
  render(<Hello />);
  expect(screen.queryByRole("heading")).toBeNull();
});

test("the greeting is reflected in the button text", () => {
  render(<Hello greeting="hola" />);
  expect(screen.getByRole("button")).toHaveTextContent("Say hola");
});

test("the button is initially disabled", () => {
  render(<Hello greeting="hola" />);
  expect(screen.getByRole("button")).toBeDisabled();
});

test("the button becomes enabled when a name is entered", async () => {
  const user = userEvent.setup();
  render(<Hello />);

  await user.type(screen.getByRole("textbox"), "world");

  expect(screen.getByRole("button")).toBeEnabled();
});

test("the user is greeted after clicking the button", async () => {
  const user = userEvent.setup();
  render(<Hello />);

  await user.type(screen.getByRole("textbox"), "world");
  await user.click(screen.getByRole("button"));

  expect(screen.getByRole("heading")).toHaveTextContent("hello world");
});

test("Hola Speedy Gonzalez", async () => {
  const greeting = "Hola";
  const name = "Speedy Gonzalez";
  const user = userEvent.setup();
  render(<Hello greeting={greeting} />);

  await user.type(screen.getByRole("textbox"), name);
  await user.click(screen.getByRole("button"));

  expect(screen.getByRole("heading")).toHaveTextContent(`${greeting} ${name}`);
});