import Layout from './Layout.vue';
import Theme from 'awesome-vitepress-theme';

import DefaultTheme from 'vitepress/theme';

export default {
    // Root component to wrap each page
    Layout,
    Theme,
    ...DefaultTheme,

    // This is a Vue 3 functional Component
    NotFound: () => 'custom 404',

    /* 
        app -> Vue 3 app instance from `createApp()`
        router -> VitePress custom router
        siteDate -> A `ref` of current site-level metadata
    */
    ehhanceApp({ app, router, siteDate }) {
        app.compoonent('MyGlobalComponent');
    },
};
