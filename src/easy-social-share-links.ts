import { EmailOptions } from "./models/email-options.class";
import { LinkedInOptions } from "./models/linkedin-options.class";
import { RedditOptions } from "./models/reddit-options.class";
import { TwitterOptions } from "./models/twitter-options.class";

export default class ShareLinks {
  /**
   * Returns a facebook share link
   * @param link The link you wish to share
   * @example
   * ```
   * const shareLinks = new ShareLinks();
   * shareLinks.facebook('https://www.github.com');
   * ```
   */
  public facebook(link: string): string {
    if (link) {
      return `https://www.facebook.com/sharer/sharer.php?u=${link}`;
    } else {
      this.shareLinksError();
    }
  }

  /**
   * Returns a twitter share link
   * @param link The link you wish to share
   * @param twitterOptions
   * @example
   * ```
   * const shareLinks = new ShareLinks();
   * shareLinks.twitter('https://www.github.com');
   * ```
   * @example
   * ```
   * const shareLinks = new ShareLinks();
   * const twitterOptions = {
   *    text: 'Check out this awesome link!',
   * }
   * shareLinks.twitter('https://www.github.com', twitterOptions);
   * ```
   */
  public twitter(link: string, twitterOptions?: TwitterOptions): string {
    if (link) {
      if (twitterOptions?.text) {
        return `https://twitter.com/intent/tweet?url=${link}&text=${twitterOptions?.text}`;
      } else {
        return `https://twitter.com/intent/tweet?url=${link}`;
      }
    } else {
      this.shareLinksError();
    }
  }

  /**
   * Returns a linkedIn share link
   * @param link The link you wish to share
   * @param linkedInOptions
   * @example
   * ```
   * const shareLinks = new ShareLinks();
   * shareLinks.linkedIn('https://www.github.com');
   * ```
   * @example
   * ```
   * const shareLinks = new ShareLinks();
   * const linkedInOptions = {
   *    summary: 'Check out this awesome link!',
   * }
   * shareLinks.linkedIn('https://www.github.com', linkedInOptions);
   * ```
   */
  public linkedIn(link: string, linkedInOptions?: LinkedInOptions) {
    if (link) {
      if (linkedInOptions?.summary) {
        return `https://www.linkedin.com/sharing/share-offsite/?url=${link}/&summary=${linkedInOptions.summary}`;
      } else {
        return `https://www.linkedin.com/sharing/share-offsite/?url=${link}`;
      }
    } else {
      this.shareLinksError();
    }
  }

  /**
   * Returns a reddit share link
   * @param link The link you wish to share
   * @param redditOptions
   * @example
   * ```
   * const shareLinks = new ShareLinks();
   * shareLinks.reddit('https://www.github.com');
   * ```
   * @example
   * ```
   * const shareLinks = new ShareLinks();
   * const redditOptions = {
   *    title: 'Check out this awesome link!',
   * }
   * shareLinks.reddit('https://www.github.com', redditOptions);
   * ```
   */
  public reddit(link: string, redditOptions?: RedditOptions) {
    if (link) {
      if (redditOptions?.title) {
        return `https://www.reddit.com/submit?title=${redditOptions?.title}&url=${link}`;
      } else {
        return `https://www.reddit.com/submit?title=&url=${link}`;
      }
    } else {
      this.shareLinksError();
    }
  }

  /**
   * Returns an email share link
   * @param link The link you wish to share
   * @param redditOptions
   * @example
   * ```
   * const shareLinks = new ShareLinks();
   * shareLinks.email('https://www.github.com');
   * ```
   * @example
   * ```
   * const shareLinks = new ShareLinks();
   * const emailOptions = {
   *    subject: 'Awesome Link',
   *    body: 'Hey!, Check out this awesome link!'
   * }
   * shareLinks.email('https://www.github.com', emailOptions);
   * ```
   */
  public email(link: string, emailOptions?: EmailOptions) {
    if (link) {
      if (emailOptions) {
        if (emailOptions?.subject) {
          if (emailOptions?.body) {
            return `mailto:?subject=${emailOptions?.subject}&body=${emailOptions?.body} ${link}`;
          } else {
            return `mailto:?subject=${emailOptions?.subject}&body=${link}`;
          }
        } else if (emailOptions?.body) {
          if (emailOptions?.subject) {
            return `mailto:?subject=${emailOptions?.subject}&body=${emailOptions?.body} ${link}`;
          } else {
            return `mailto:?body=${emailOptions?.body} ${link}`;
          }
        } else {
          return `mailto:?body=${link}`;
        }
      } else {
        return `mailto:?body=${link}`;
      }
    } else {
      return this.shareLinksError();
    }
  }

  private shareLinksError(error?: string) {
    if (error) {
      throw new Error(`ShareLinks: ${error}`);
    } else {
      throw new Error(`ShareLinks: link is undefined!`);
    }
  }
}
