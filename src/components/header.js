import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import PropTypes from 'prop-types';
import './header.css';
import React from 'react';

const Header = ({ siteTitle }) => {
  const { languages, originalPath, t, i18n } = useI18next();
  return (
    <header className="main-header">
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {t('header', { siteTitle })}
        </Link>
      </h1>
      <ul className="languages">
        {languages.map((lng) => (
          <li key={lng}>
            <Link to={originalPath} language={lng} style={{ textDecoration: i18n.resolvedLanguage === lng ? 'underline' : 'none' }}>
              {lng}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
