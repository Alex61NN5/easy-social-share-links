import ShareLinks from "../src/easy-social-share-links";
import { EmailOptions } from "../src/models/email-options.class";

describe("Facebook Share Links", () => {
  test("Should correctly return facebook link", () => {
    const sl = new ShareLinks();
    expect(sl.facebook("https://github.com")).toEqual(
      "https://www.facebook.com/sharer/sharer.php?u=https://github.com"
    );
  });
  test("Should throw error if link is undefined", () => {
    const sl = new ShareLinks();
    expect(() => {
      sl.facebook(undefined);
    }).toThrow(Error);
  });
});

describe("Twitter Share Links", () => {
  const sl = new ShareLinks();
  test("Should correctly return twitter link", () => {
    expect(sl.twitter("https://github.com")).toEqual(
      "https://twitter.com/intent/tweet?url=https://github.com"
    );
  });
  test("Should correctly return twitter link with text option set", () => {
    expect(
      sl.twitter("https://github.com", {
        text: "Check out this awesome site!",
      })
    ).toEqual(
      "https://twitter.com/intent/tweet?url=https://github.com&text=Check out this awesome site!"
    );
  });
  test("Should throw error if link is undefined", () => {
    expect(() => {
      sl.twitter(undefined);
    }).toThrow(Error);
    expect(() => {
      sl.twitter(undefined, {
        text: "Check out this awesome site!",
      });
    }).toThrow(Error);
  });
});

describe("LinkedIn Share Links", () => {
  const sl = new ShareLinks();
  test("Should correctly return linkedIn link", () => {
    expect(sl.linkedIn("https://github.com")).toEqual(
      "https://www.linkedin.com/sharing/share-offsite/?url=https://github.com"
    );
  });
  test("Should correctly return twitter link with summary option set", () => {
    expect(
      sl.linkedIn("https://github.com", {
        summary: "Check out this awesome site!",
      })
    ).toEqual(
      "https://www.linkedin.com/sharing/share-offsite/?url=https://github.com/&summary=Check out this awesome site!"
    );
  });
  test("Should throw error if link is undefined", () => {
    expect(() => {
      sl.linkedIn(undefined);
    }).toThrow(Error);
    expect(() => {
      sl.linkedIn(undefined, {
        summary: "Check out this awesome site!",
      });
    }).toThrow(Error);
  });
});

describe("Reddit Share Links", () => {
  const sl = new ShareLinks();
  test("Should correctly return reddit link", () => {
    expect(sl.reddit("https://github.com")).toEqual(
      "https://www.reddit.com/submit?title=&url=https://github.com"
    );
  });
  test("Should correctly return twitter link with summary option set", () => {
    expect(
      sl.reddit("https://github.com", {
        title: "Check out this awesome site!",
      })
    ).toEqual(
      "https://www.reddit.com/submit?title=Check out this awesome site!&url=https://github.com"
    );
  });
  test("Should throw error if link is undefined", () => {
    expect(() => {
      sl.reddit(undefined);
    }).toThrow(Error);
    expect(() => {
      sl.reddit(undefined, {
        title: "Check out this awesome site!",
      });
    }).toThrow(Error);
  });
});

describe("Email Share Links", () => {
  const sl = new ShareLinks();
  test("Should correctly return email mailto:", () => {
    expect(sl.email("https://github.com")).toEqual(
      "mailto:?body=https://github.com"
    );
  });
  test("Should correctly return email mailto: with emailOptions set", () => {
    const emailOptions: EmailOptions = {
      subject: "Awesome Link",
      body: "Check out this awesome link!",
    };
    expect(sl.email("https://github.com", emailOptions)).toEqual(
      "mailto:?subject=Awesome Link&body=Check out this awesome link! https://github.com"
    );
  });
  test("Should correctly return email mailto: with subject set and body undefined", () => {
    const emailOptions: EmailOptions = {
      subject: "Awesome Link",
    };
    expect(sl.email("https://github.com", emailOptions)).toEqual(
      "mailto:?subject=Awesome Link&body=https://github.com"
    );
  });
  test("Should correctly return email mailto: with body set and subject undefined", () => {
    const emailOptions: EmailOptions = {
      body: "Check out this awesome link!",
    };
    expect(sl.email("https://github.com", emailOptions)).toEqual(
      "mailto:?body=Check out this awesome link! https://github.com"
    );
  });
  test("Should throw error if link is undefined", () => {
    const emailOptions: EmailOptions = {
      subject: "Awesome Link",
      body: "Check out this awesome link!",
    };
    expect(() => {
      sl.email(undefined);
    }).toThrow(Error);
    expect(() => {
      sl.email(undefined, emailOptions);
    }).toThrow(Error);
  });
});
