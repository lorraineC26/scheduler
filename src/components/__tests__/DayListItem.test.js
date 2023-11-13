import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import DayListItem from "components/DayListItem";

afterEach(cleanup);

describe("DayListItem", () => {

  it("renders without crashing", () => {
    render(<DayListItem />);
  });
});