import React from "react";
import { act, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  RevealTitleText,
  DelayedParagraph,
  DelayedFooter,
  DelayedHeadshot,
  sentence,
  letter,
} from "./motion-reveal";

describe("RevealTitleText", () => {
  test("renders title text and description text split into individual spans", () => {
    const title = "Title";
    const description = "Desc";

    const { container } = render(
      <RevealTitleText
        titleText={title}
        descriptionText={description}
        titleStyle={{ color: "purple" }}
        descriptionStyle={{ color: "green" }}
      />
    );

    const heading = container.querySelector("h1.load-screen--message");
    expect(heading).toBeInTheDocument();

    const spans = container.querySelectorAll("span");
    expect(spans.length).toBe(title.length + description.length);

    expect(heading).toHaveTextContent(title);
    expect(heading).toHaveTextContent(description);

    expect(sentence).toHaveProperty("hidden");
    expect(letter).toHaveProperty("hidden");
  });
});

describe("DelayedParagraph", () => {
  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  test("renders paragraph content only after delay has elapsed", () => {
    jest.useFakeTimers();
    const text = "Hello, delayed text!";
    const style = { color: "red" };
    const additionalSpan = <span>👋</span>;

    render(
      <DelayedParagraph delay={1000} text={text} style={style} additionalSpan={additionalSpan} />
    );

    expect(screen.queryByText(/Hello, delayed text!/)).toBeNull();

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.getByText(/Hello, delayed text!/)).toBeInTheDocument();
    expect(screen.getByText("👋")).toBeInTheDocument();
  });
});

describe("DelayedFooter", () => {
  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  test("renders footer with social link icons after delay", () => {
    jest.useFakeTimers();
    const footerStyle = { backgroundColor: "blue" };
    const imageStyle = { border: "1px solid black" };

    render(<DelayedFooter delay={1000} footerStyle={footerStyle} imageStyle={imageStyle} />);

    expect(screen.queryByAltText("LinkedIn icon")).toBeNull();
    expect(screen.queryByAltText("Email icon")).toBeNull();
    expect(screen.queryByAltText("GitHub icon")).toBeNull();

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.getByAltText("LinkedIn icon")).toBeInTheDocument();
    expect(screen.getByAltText("Email icon")).toBeInTheDocument();
    expect(screen.getByAltText("GitHub icon")).toBeInTheDocument();
  });
});

describe("DelayedHeadshot", () => {
  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
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
        dispatchEvent: jest.fn(),
      } as MediaQueryList;
    };
  };

  test("renders HeadshotComponent after delay", () => {
    window.matchMedia = createMatchMedia(true);
    jest.useFakeTimers();

    render(<DelayedHeadshot delay={1000} />);

    expect(screen.queryByAltText("A photo of me")).toBeNull();

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.getByAltText("A photo of me")).toBeInTheDocument();
  });
});


