import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import { lightTheme } from '../styles/theme';

const SEO = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            image
            keywords
            author
            social {
              twitter
            }
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content:
            'Data, Stats, Product Manager, Product Development, Product Owner, Product Management, Product Marketing, Project Management, Scrum, Agile',
        },
        {
          'http-equiv': `content-language`,
          content: `en-us`,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: site.siteMetadata.siteUrl,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:site_name`,
          content: title,
        },
        {
          property: `og:image:alt`,
          content: `An image of an open notebook with a drawn graph.`,
        },
        {
          property: `og:locale`,
          content: `en_US`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: 'og:image',
          content: site.siteMetadata.image,
        },
        {
          name: 'twitter:image',
          content: site.siteMetadata.image,
        },
        {
          property: `twitter:image:alt`,
          content: `An image of an open notebook with a drawn graph.`,
        },
        {
          property: `twitter:url`,
          content: site.siteMetadata.siteUrl,
        },
      ].concat(meta)}
      link={[
        {
          rel: `canonical`,
          href: site.siteMetadata.siteUrl,
        },
      ]}
    />
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  meta: PropTypes.array,
  lang: PropTypes.string,
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

export default SEO;
