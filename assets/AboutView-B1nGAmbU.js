import{_ as r,o as a,c,a as _,b as s,r as m,d as p}from"./index-CmjGjCEd.js";const u={name:"BlogSection",data(){return{content:`
# Introduction to Machine Learning

Machine learning is a field of artificial intelligence that uses statistical techniques to give computer systems the ability to "learn" from data, without being explicitly programmed.

## Example Formula

Here is an example of a mathematical formula:

$$
E = mc^2
$$
      `}},computed:{renderedContent(){const e=new marked.Renderer;return e.code=(t,n)=>n==="math"?katex.renderToString(t,{throwOnError:!1}):`<pre><code>${t}</code></pre>`,marked(this.content,{renderer:e})}}},h={class:"blog-section"},f=["innerHTML"];function $(e,t,n,i,d,o){return a(),c("div",h,[_(" Hello "),s("div",{innerHTML:o.renderedContent},null,8,f)])}const g=r(u,[["render",$],["__scopeId","data-v-7822e3a0"]]),x={name:"App",components:{BlogSection:g}},b={class:"about"},B=s("h1",null,"This is an about page",-1);function v(e,t,n,i,d,o){const l=m("BlogSection");return a(),c("div",b,[B,p(l)])}const S=r(x,[["render",v]]);export{S as default};
