<template>
    <article class="markdown-body">
        <pre v-html="x"></pre>
    </article>
</template>
 
<script>
import 'prismjs'
import 'prismjs/themes/prism.css'
import { ref } from 'vue';
export default {
    props:{
        path: { type: String, required: true },
    },
    setup(props,context) {
        const Prism = window.Prism
        let x = ref('');
        
        if (props.path) {
            import(/* @vite-ignore */props.path).then((a) => { 
                // import 加入 /* @vite-ignore */ 
                // 消除终端警告 https://blog.csdn.net/qq_29733191/article/details/123858460
                x.value = Prism.highlight(a.default,Prism.languages.html,'html')
                })
        }

        return { x }
    }
}
</script>
 