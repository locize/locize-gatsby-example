/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { DateTime } from 'luxon';
import { useI18next } from 'gatsby-plugin-react-i18next';
import Header from './header';
import './layout.css';
import { locizePlugin, setEditorLng } from 'locize';

const getGreetingTime = (d = DateTime.now()) => {
	const split_afternoon = 12; // 24hr time to split the afternoon
	const split_evening = 17; // 24hr time to split the evening
	const currentHour = parseFloat(d.toFormat('hh'));
	
	if (currentHour >= split_afternoon && currentHour <= split_evening) {
		return 'afternoon';
	} else if (currentHour >= split_evening) {
		return 'evening';
  }
	return 'morning';
}

const Layout = ({ children }) => {
  const { t, i18n } = useI18next();
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  // defining custom formatters is normally done immediately after the i18next.init call, but with gatsby-plugin-react-i18next is not possible, so let's add it here
  if (!i18n.services.formatter.date_huge) {
    i18n.services.formatter.add('date_huge', (value, lng, options) => {
      return DateTime.fromJSDate(value).setLocale(lng).toLocaleString(DateTime.DATE_HUGE)
    });
    // also the locize plugin normally is automatically configured, but here we need to do it that way
    locizePlugin.init(i18n);
    setEditorLng(i18n.resolvedLanguage);
  }

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0 1.0875rem 1.45rem',
        }}
      >
        <main>{children}</main>
        <footer style={{ marginTop: 50 }}>
          <i>
            {
              // i18next-extract-mark-context-next-line ["", "morning", "afternoon", "evening"]
              t('footer', { date: new Date(), context: getGreetingTime() })
            }
          </i>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
