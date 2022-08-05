import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { Link } from 'gatsby-plugin-react-i18next';

const IgnoredPage = (props) => {
  return (
    <Layout>
      <Seo title="Ignored page" />
      <h1>Ignored page</h1>
      <p>This page does not have language prefix</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export default IgnoredPage;
