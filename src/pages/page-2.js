// i18next-extract-mark-ns-start page-2

import { graphql } from 'gatsby';
import React, { useState } from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { Link, useTranslation, Trans } from 'gatsby-plugin-react-i18next';

const SecondPage = (props) => {
  const { t } = useTranslation();
  const [count, setCounter] = useState(0);
  return (
    <Layout>
      <Seo title={t('title')} />
      <h1>
        <Trans i18nKey="title">Page two</Trans>
      </h1>
      <p>
        <Trans i18nKey="welcome">Welcome to page 2</Trans> ({props.path})
      </p>
      <p>
        <button onClick={() => {
          setCounter(count + 1);
        }}>{
          t('counter', { count })
        }</button>
      </p>
      {/* <p>
        <Trans i18nKey="newKey">this will be added automatically after "extract" and "syncLocales"</Trans>
      </p> */}
      <Link to="/">
        <Trans i18nKey="back">Go back to the homepage</Trans>
      </Link>
    </Layout>
  );
};

export default SecondPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["common", "page-2"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
