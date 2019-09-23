# Storybook + ReactJS Scaffolding

See live example: https://stephane-klein.github.io/storybook-reactjs-scaffolding/

More informations in French [« How I use storybook »](https://github.com/stephane-klein/personnal-notebook/blob/master/016-comment-j-utilise-storybook-pour-creer-des-apps-react-ou-sites-statiques.md)

Next in the roadmap:

- [x] viewport
- [x] storybook-react-router 
- [x] i18n
- [ ] [apollo-storybook-react](https://github.com/abhiaiyer91/apollo-storybook-decorator)

Scaffolding Content:

- [storybook](https://storybooks-official.netlify.com/) `5.2.1` with some addons enabled:
  - [`@storybook/addon-actions`](https://github.com/storybookjs/storybook/tree/master/addons/actions)
  - [`@storybook/addon-links`](https://github.com/storybookjs/storybook/tree/master/addons/links)
  - [`@storybook/addon-storysource`](https://github.com/storybookjs/storybook/tree/master/addons/storysource)
  - [`@storybook/addon-viewport`](https://github.com/storybookjs/storybook/tree/master/addons/viewport) (configuration: [viewport](.storybook/config.js) ( [based on browser market europe](https://gs.statcounter.com/screen-resolution-stats/desktop/europe) ))
  - [`storybook-addon-i18next`](https://github.com/fynncfchen/storybook-addon-i18next#readme)
  - [`storybook-react-router`](https://github.com/gvaldambrini/storybook-router) ([read this](stories/pages/README.md))
- eslint
- [i18next](https://github.com/i18next/i18next)
- react-router


## Install and launch storybook

```
$ npm install
$ npm run storybook
```

http://localhost:6006


## Note about i18n

Extract i18n strings:

```
$ npm run i18n
```

Update translation files:

- [`src/translations/en/translation.json`](src/translations/en/translation.json)
- [`src/translations/fr/translation.json`](src/translations/fr/translation.json)


## Start React app (without Storybook)

```
$ npm run start
```

Open http://localhost:3000/
