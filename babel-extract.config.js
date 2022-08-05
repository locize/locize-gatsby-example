const { defaultLanguage } = require('./languages');

process.env.NODE_ENV = 'test';

module.exports = {
  presets: ['babel-preset-gatsby'],
  plugins: [
    [
      'i18next-extract',
      {
        keyAsDefaultValue: [defaultLanguage],
        useI18nextDefaultValue: [defaultLanguage],
        // discardOldKeys: true,
        defaultNS: 'common',
        outputPath: 'locales/{{locale}}/{{ns}}.json',
        customTransComponents: [['gatsby-plugin-react-i18next', 'Trans']],
        compatibilityJSON: 'v4',
      },
    ],
  ],
};
