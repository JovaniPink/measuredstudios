/** @jsx jsx */
import qs from 'querystring';
import { jsx } from 'theme-ui';

export default ({ text, url, via = 'measuredstudios' }) => {
  const search = qs.stringify({
    text,
    url,
    via,
  });
  const href = `https://twitter.com/intent/tweet?${search}`;

  return (
    <a
      className="twitter-share-button"
      sx={{
        width: 55,
        height: 20,
      }}
      href={href}
    >
      Tweet
    </a>
  );
};
