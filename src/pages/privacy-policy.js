import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';

const PrivacyPolicy = () => (
  <Layout>
    <Helmet>
      <html lang="en" />
      <title>Privacy Policy</title>
      <meta name="description" content="Privacy Policy Page" />
    </Helmet>

    <div>
      <section>
        <article>
          <header>
            <h1>Privacy Policy</h1>
          </header>
          <p />
        </article>
      </section>
    </div>
  </Layout>
);

export default PrivacyPolicy;
