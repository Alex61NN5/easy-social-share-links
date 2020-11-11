import { ExtraOptions } from "./models/extra-options.class";
import { Providers } from "./models/providers";

/**
 * This method will return a ready made share link to the specified provider
 * @param provider Options: 'facebook' | 'twitter' | 'linkedin' | 'reddit' | 'email'
 * @param link Link to share
 * @param extraOptions Extra Options eg. email body
 */
function shareLink(
  provider: Providers,
  link: string,
  extraOptions?: ExtraOptions
): string {
  switch (provider) {
    case Providers.Facebook:
      return `https://www.facebook.com/sharer/sharer.php?u=${link}`;
    case Providers.Twitter:
      return `https://twitter.com/intent/tweet?url=${link}${
        extraOptions?.text ? "&text=" + extraOptions?.text : ""
      }`;
    case Providers.LinkedIn:
      return `https://www.linkedin.com/sharing/share-offsite/?url=${link}${
        extraOptions?.text ? "/&summary=" + extraOptions?.text : ""
      }`;
    case Providers.Reddit:
      return `https://www.reddit.com/submit?title=${
        extraOptions?.title ? extraOptions?.title : ""
      }&url=${link}`;
    case Providers.Email:
      return `mailto:${
        extraOptions?.emailSubject
          ? "?subject=" + extraOptions?.emailSubject
          : ""
      }${extraOptions?.emailBody ? "&body=" : "?body="}${
        extraOptions?.emailBody ? extraOptions?.emailBody : ""
      } ${link}`;
    default:
      return `#`;
  }
}

export default shareLink;
