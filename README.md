This is the example app used in [this blog post](https://www.locize.com/blog/gatsby-i18n/).

# synchronize with locize
Here, you basically keep the existing setup but are synchronizing the translation files with locize.
This can be done on-demand or on the CI-Server or before deploying the app.

## What to do to reach this step:
1. in locize: signup at https://locize.com/register and [login](https://docs.locize.com/integration/getting-started/create-a-user-account)
2. in locize: [create a new project](https://docs.locize.com/integration/getting-started/add-a-new-project)
3. in locize: add "de" as additional language (this can also be done via [API](https://docs.locize.com/integration/api#add-new-language))
4. install the [locize-cli](https://github.com/locize/locize-cli)

## use the [locize-cli](https://github.com/locize/locize-cli)
Use the `npm run syncLocales` script to synchronize your [local repository](https://github.com/locize/locize-gatsby-example/tree/main/locales) with what is published on locize.

Alternatively, you can also use the `npm run downloadLocales` script to always download the published locize translations to your [local repository](https://github.com/locize/locize-gatsby-example/tree/main/locales) before bundling your app.

---

<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby minimal starter
</h1>

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal starter.

    ```shell
    # create a new Gatsby site using the minimal starter
    npm init gatsby
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.js` to see your site update in real-time!

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

## 🚀 Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-minimal)
