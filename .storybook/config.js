import { addParameters, addDecorator, configure } from '@storybook/react';
import i18n from './i18n';
import { withI18next } from 'storybook-addon-i18next';

addParameters({
  options: {
    isFullscreen: false,
    showPanel: true
  },
  viewport: { // Based on this stats: https://gs.statcounter.com/screen-resolution-stats/desktop/europe
    viewports: {
      '22pc': {
        name: '22% browser market EU',
        styles: {
          width: '1920px',
          height: '1080px'
        },
        type: 'laptop'
      },
      '19pc': {
        name: '19% browser market EU',
        styles: {
          width: '1366px',
          height: '768px'
        },
        type: 'laptop'
      },
      '8pc': {
        name: '8% browser market EU',
        styles: {
          width: '1536px',
          height: '864px'
        },
        type: 'laptop'
      },
      '6pc': {
        name: '6% browser market EU',
        styles: {
          width: '1440px',
          height: '900px'
        },
        type: 'laptop'
      },
      '5pc': {
        name: '5% browser market EU',
        styles: {
          width: '1600px',
          height: '900px'
        },
        type: 'laptop'
      },
      '4pc': {
        name: '4% browser market EU',
        styles: {
          width: '1280px',
          height: '1024px'
        },
        type: 'laptop'
      }
    }
  }
});

function loadStories(r) {
    r.keys().sort().forEach(filename => r(filename));
}

addDecorator(
  withI18next({
    i18n,
    languages: {
      en: 'English',
      fr: 'French'
    }
  })
);

configure(() => {
    loadStories(require.context('../stories/components', true, /\.js$/));
    loadStories(require.context('../stories/pages', true, /\.js$/));
}, module);
