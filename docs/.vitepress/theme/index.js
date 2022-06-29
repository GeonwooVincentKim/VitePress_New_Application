// import Layout from './Layout.vue';
// import Theme from 'awesome-vitepress-theme';
import MyLayout from './MyLayout.vue';

import DefaultTheme from 'vitepress/theme';
import './custom.css';

export default {
    ...DefaultTheme,

    // Root component to wrap each page
    Layout: MyLayout,
    // Theme,
    // Theme: DefaultTheme,

    // This is a Vue 3 functional Component
    NotFound: () => 'custom 404',

    /* 
        app -> Vue 3 app instance from `createApp()`
        router -> VitePress custom router
        siteDate -> A `ref` of current site-level metadata
    */
    ehhanceApp({ app, router, siteDate }) {
        console.log('Check is work -> ');
        app.compoonent('MyGlobalComponent');
    },

    /*
        Second way
        -> Render Function
    */
    // Layout() {
    //     return h(DefaultTheme.Layout, null, {
    //         'aside-outline-before': () => h(MyComponent),
    //     });
    // },
};
