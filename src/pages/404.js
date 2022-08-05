// i18next-extract-mark-ns-start 404

import { graphql } from 'gatsby';
import React from 'react';
import { useTranslation, Trans } from 'gatsby-plugin-react-i18next';
import Layout from '../components/layout';
import Seo from '../components/seo';

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Seo title={t('seo')} />
      <h1>
        <Trans i18nKey="title">NOT FOUND</Trans>
      </h1>
      <p>
        <Trans i18nKey="message">
          You just hit a route that doesn&#39;t exist... the sadness.
        </Trans>
      </p>
    </Layout>
  );
};

export default NotFoundPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["common", "404"] }, language: { eq: $language } }
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
