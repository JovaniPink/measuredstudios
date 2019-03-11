import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Banner from '../components/Banner';

import pic01 from '../assets/images/pic01.jpg';
import pic02 from '../assets/images/pic02.jpg';
import pic03 from '../assets/images/pic03.jpg';
import pic04 from '../assets/images/pic04.jpg';
import pic05 from '../assets/images/pic05.jpg';
import pic06 from '../assets/images/pic06.jpg';

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Measured Studios"
          meta={[
            {
              name: 'description',
              content:
                'A web based product development tool to guide people through the biggest challenges with design, technology, and marketing.',
            },
            {
              name: 'keywords',
              content:
                'product development web app, product development design web app, product development, product development design, product owner, product management, project management, scrum, agile, marketing, product marketing​',
            },
          ]}
        >
          <html lang="en" />
          <meta
            name="google-site-verification"
            content="lsVzqwWFygoBXZvBOB7zQInHEBL1VrAK1Djg02BJbK8"
          />
          <meta
            name="msvalidate.01"
            content="DB6D40F5ADF954CF7A904C6A2A5700AA"
          />
          <meta property="og:title" content="Measured Studios" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.measuredstudios.com/" />
          <meta property="og:site_name" content="Measured Studios" />
          <meta
            property="og:description"
            content="A web based product development tool to guide people through the biggest challenges with design, technology, and marketing.​"
          />
          <meta property="fb:app_id" content="316837708958469" />
          <meta property="og:image" content="" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1079" />
          <meta property="og:image:height" content="719" />
          <meta property="og:image:alt" content="Measured Studios Logo" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:site" content="@MeasuredStudios" />
          <meta property="twitter:title" content="Measured Studios" />
          <meta
            property="twitter:description"
            content="A web based product development tool to guide people through the biggest challenges with design, technology, and marketing.​"
          />
          <meta property="twitter:creator" content="@MeasuredStudios" />
          <meta property="twitter:image:src" content="" />
        </Helmet>

        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3>Aliquam</h3>
                <p>Ipsum dolor sit amet</p>
              </header>
              <Link to="/features" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className="major">
                <h3>Tempus</h3>
                <p>feugiat amet tempus</p>
              </header>
              <Link to="/features" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic03})` }}>
              <header className="major">
                <h3>Magna</h3>
                <p>Lorem etiam nullam</p>
              </header>
              <Link to="/features" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic04})` }}>
              <header className="major">
                <h3>Ipsum</h3>
                <p>Nisl sed aliquam</p>
              </header>
              <Link to="/features" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic05})` }}>
              <header className="major">
                <h3>Consequat</h3>
                <p>Ipsum dolor sit amet</p>
              </header>
              <Link to="/features" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic06})` }}>
              <header className="major">
                <h3>Etiam</h3>
                <p>Feugiat amet tempus</p>
              </header>
              <Link to="/features" className="link primary" />
            </article>
          </section>
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>Agency</h2>
              </header>
              <p>
                Apart from the Measured Studios Product Tool... we offer full
                stack development consulting.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/agency" className="button special next">
                    Work With US!
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

export default HomeIndex;
