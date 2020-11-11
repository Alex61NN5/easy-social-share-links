import shareLink from "../src/index";

describe("Facebook Share Links", () => {
  test("Should correctly return facebook link", () => {
    expect(shareLink("facebook", "https://github.com")).toEqual(
      "https://www.facebook.com/sharer/sharer.php?u=https://github.com"
    );
  });
});

describe("Twitter Share Links", () => {
  test("Should correctly return twitter link", () => {
    expect(shareLink("twitter", "https://github.com")).toEqual(
      "https://twitter.com/intent/tweet?url=https://github.com"
    );
  });
  test("Should correctly return twitter link with body text", () => {
    expect(
      shareLink("twitter", "https://github.com", {
        text: "Check out this awesome site!",
      })
    ).toEqual(
      "https://twitter.com/intent/tweet?url=https://github.com&text=Check out this awesome site!"
    );
  });
});
