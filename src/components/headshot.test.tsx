import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeadshotComponent from "./headshot";

const originalMatchMedia = window.matchMedia;

afterEach(() => {
  window.matchMedia = originalMatchMedia;
});

const createMatchMedia = (matches: boolean) => {
  return (query: string) => {
    return {
      matches,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      addListener: jest.fn(),
      removeListener: jest.fn(),
      dispatchEvent: jest.fn()
    } as MediaQueryList;
  };
};

describe("HeadshotComponent", () => {
  test("renders mobile styles when media query matches mobile criteria", () => {
    window.matchMedia = createMatchMedia(true);

    render(<HeadshotComponent />);

    const img = screen.getByAltText("A photo of me");
    expect(img).toBeInTheDocument();

    expect(img).toHaveStyle({
      width: "7.5rem",
      height: "7.5rem",
      borderRadius: "50%",
      padding: "10px",
      display: "inline-block",
      marginLeft: "auto",
      marginRight: "auto",
    });
  });

  test("renders desktop styles when media query does not match mobile criteria", () => {
    window.matchMedia = createMatchMedia(false);

    render(<HeadshotComponent />);

    const img = screen.getByAltText("A photo of me");
    expect(img).toBeInTheDocument();

    expect(img).toHaveStyle({
      width: "10rem",
      height: "10rem",
      borderRadius: "50%",
      float: "right",
      padding: "20px",
    });
  });
});
