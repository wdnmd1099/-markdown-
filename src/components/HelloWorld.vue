<template>
   <article class="markdown-body"  >
    <pre v-html="x"></pre>
   </article>
  <hr>
   <showCode path="../markdown/second.md"></showCode>
</template>

<script>
import md from '../markdown/first.md'
import 'prismjs'
import 'prismjs/themes/prism.css'
import showCode from './showCode.vue';
export default {
  components:{
     showCode
  },
  setup(){
    let x = md
    const Prism = window.Prism
    x = Prism.highlight(x,Prism.languages.html,'html')
   
    return {x}
  }
}
</script>
