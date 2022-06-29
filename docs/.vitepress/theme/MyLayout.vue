<template>
    <Layout>
        <template #aside-outline-before>
            My Custom sidebar top content
        </template>
    </Layout>
</template>
<script setup>
/*
*   Layout Slots
*   -> .vitepress/theme/index.js
*   -> script setup = First way
*   -> script = Second way
*/

/*
*   First way
*   -> Component into the before outline
*/
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme

// export default {
//     name: 'MyLayout',
//     data () {
//         return {
            
//         }    
//     },
// }
</script>