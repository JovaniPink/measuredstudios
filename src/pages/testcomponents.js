import React from 'react';

import Layout from '@narative/gatsby-theme-novela/src/components/Layout';
import Section from '@narative/gatsby-theme-novela/src/components/Section';
import SEO from '@narative/gatsby-theme-novela/src/components/SEO';
import Headings from '@narative/gatsby-theme-novela/src/components/Headings';
import BioGroup from '../@narative/gatsby-theme-novela/components/BioGroup';

function Testing() {
  return (
    <Layout>
      <SEO />
      <Section>
        <div style={{ marginTop: '100px' }}>
          <Headings.h1>Testing Components</Headings.h1>
          <BioGroup></BioGroup>
        </div>
      </Section>
    </Layout>
  );
}

export default Testing;
