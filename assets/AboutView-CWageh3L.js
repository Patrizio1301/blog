import{_ as r,o as a,c,a as s,r as _,b as m}from"./index-CvY-qW1z.js";const p={name:"BlogSection",data(){return{content:`
# Introduction to Machine Learning

Machine learning is a field of artificial intelligence that uses statistical techniques to give computer systems the ability to "learn" from data, without being explicitly programmed.

## Example Formula

Here is an example of a mathematical formula:

$$
E = mc^2
$$
      `}},computed:{renderedContent(){const e=new marked.Renderer;return e.code=(t,n)=>n==="math"?katex.renderToString(t,{throwOnError:!1}):`<pre><code>${t}</code></pre>`,marked(this.content,{renderer:e})}}},u={class:"blog-section"},h=["innerHTML"];function f(e,t,n,i,d,o){return a(),c("div",u,[s("div",{innerHTML:o.renderedContent},null,8,h)])}const $=r(p,[["render",f],["__scopeId","data-v-307390b1"]]),g={name:"App",components:{BlogSection:$}},b={class:"about"},x=s("h1",null,"This is an about page",-1);function B(e,t,n,i,d,o){const l=_("BlogSection");return a(),c("div",b,[x,m(l)])}const k=r(g,[["render",B]]);export{k as default};
