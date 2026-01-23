import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import WorkEducationEnhanced from "../WorkEducationEnhanced";

describe("WorkEducationEnhanced", () => {
  it("switches between work and education tabs", async () => {
    render(<WorkEducationEnhanced />);

    expect(
      screen.getByText("Software Engineer / Configuration Engineer"),
    ).toBeInTheDocument();

    await userEvent.click(screen.getByRole("tab", { name: "Education" }));

    expect(
      screen.getByText("B.Sc. Software Engineering"),
    ).toBeInTheDocument();
  });
});
