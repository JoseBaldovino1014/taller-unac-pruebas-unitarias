import { monthsUnac } from "../src/months-unac";
test("Conts array contains Jan", () => {
    expect(monthsUnac()).toContain("Jan");
    });