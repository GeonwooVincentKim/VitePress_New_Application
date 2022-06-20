import Layout from './Layout.vue';
import Theme from 'awesome-vitepress-theme';

export default {
    Layout,
    Theme,
    NotFound: () => 'custom 404',

    ehhanceApp({ app, router, siteDate }) {},
};
