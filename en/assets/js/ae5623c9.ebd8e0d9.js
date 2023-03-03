"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7381],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,v=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(v,i(i({ref:t},c),{},{components:n})):r.createElement(v,i({ref:t},c))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[p]="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7035:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={title:"Compare With Other State Management Frameworks",tags:["compare"]},i=void 0,u={unversionedId:"introduce/compare",id:"introduce/compare",title:"Compare With Other State Management Frameworks",description:"Why zustand over redux?",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/introduce/compare.md",sourceDirName:"introduce",slug:"/introduce/compare",permalink:"/zustand-vue/en/docs/introduce/compare",draft:!1,editUrl:"https://github.com/AwesomeDevin/zustand-vue/tree/main/docs/docs/introduce/compare.md",tags:[{label:"compare",permalink:"/zustand-vue/en/docs/tags/compare"}],version:"current",frontMatter:{title:"Compare With Other State Management Frameworks",tags:["compare"]},sidebar:"tutorialSidebar",previous:{title:"What Is Zustand / Zustand-Vue / Zustand-Pub ?",permalink:"/zustand-vue/en/docs/introduce/what-is-zustand"},next:{title:"zustand (React)",permalink:"/zustand-vue/en/docs/introduce/start/zustand"}},s={},l=[{value:"Why zustand over redux?",id:"why-zustand-over-redux",level:3},{value:"Why zustand over context?",id:"why-zustand-over-context",level:3},{value:"Why zustand-vue over pinia?",id:"why-zustand-vue-over-pinia",level:3},{value:"More",id:"more",level:3}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"why-zustand-over-redux"},"Why zustand over redux?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Simple and un-opinionated"),(0,a.kt)("li",{parentName:"ul"},"Makes hooks the primary means of consuming state"),(0,a.kt)("li",{parentName:"ul"},"Doesn't wrap your app in context providers"),(0,a.kt)("li",{parentName:"ul"},"Can inform components transiently (without causing render)")),(0,a.kt)("h3",{id:"why-zustand-over-context"},"Why zustand over context?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Less boilerplate"),(0,a.kt)("li",{parentName:"ul"},"Renders components only on changes"),(0,a.kt)("li",{parentName:"ul"},"Centralized, action-based state management")),(0,a.kt)("h3",{id:"why-zustand-vue-over-pinia"},"Why zustand-vue over pinia?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Update based on immutable state, ",(0,a.kt)("inlineCode",{parentName:"li"},"store update operation is relatively more controlled")),(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"composition api")," as the primary means of consuming state rather than ",(0,a.kt)("inlineCode",{parentName:"li"},"Vue.use")," global injection")),(0,a.kt)("h3",{id:"more"},"More"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/AwesomeDevin/blog/issues/80"},"React state management tools comparison\uff0creact hooks context / redux / mobx / zustand / jotai / valtio vs each other")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/pmndrs/zustand/blob/main/docs/getting-started/comparison.md"},"Pmnd's Comparison"))))}p.isMDXComponent=!0}}]);