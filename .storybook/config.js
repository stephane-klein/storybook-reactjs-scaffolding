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
      'desktop-22pc': {
        name: '22% desktop browser market EU',
        styles: {
          width: '1920px',
          height: '1080px'
        },
        type: 'laptop'
      },
      'desktop-19pc': {
        name: '19% desktop browser market EU',
        styles: {
          width: '1366px',
          height: '768px'
        },
        type: 'laptop'
      },
      'desktop-8pc': {
        name: '8% desktop browser market EU',
        styles: {
          width: '1536px',
          height: '864px'
        },
        type: 'laptop'
      },
      'desktop-6pc': {
        name: '6% desktop browser market EU',
        styles: {
          width: '1440px',
          height: '900px'
        },
        type: 'laptop'
      },
      'desktop-5pc': {
        name: '5% desktop browser market EU',
        styles: {
          width: '1600px',
          height: '900px'
        },
        type: 'laptop'
      },
      'desktop-4pc': {
        name: '4% desktop browser market EU',
        styles: {
          width: '1280px',
          height: '1024px'
        },
        type: 'laptop'
      }, // Based on this stats: https://gs.statcounter.com/screen-resolution-stats/mobile/europe
      'mobile-30pc': {
        name: '30% mobile browser market EU',
        styles: {
          width: '360px',
          height: '640px'
        },
        type: 'mobile'
      },
      'mobile-11pc': {
        name: '11% mobile browser market EU',
        styles: {
          width: '375px',
          height: '667px'
        },
        type: 'mobile'
      },
      'mobile-6pc': {
        name: '6% mobile browser market EU',
        styles: {
          width: '360px',
          height: '720px'
        },
        type: 'mobile'
      },
      'mobile-5pc': {
        name: '5% mobile browser market EU',
        styles: {
          width: '412px',
          height: '846px'
        },
        type: 'mobile'
      },
      'mobile-3pc': {
        name: '3% mobile browser market EU',
        styles: {
          width: '360px',
          height: '760px'
        },
        type: 'mobile'
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
