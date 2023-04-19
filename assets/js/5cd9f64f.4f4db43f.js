"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2055],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),l=p(r),m=a,b=l["".concat(i,".").concat(m)]||l[m]||d[m]||s;return r?n.createElement(b,o(o({ref:t},c),{},{components:r})):n.createElement(b,o({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[l]="string"==typeof e?e:a,o[1]=u;for(var p=2;p<s;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9859:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const s={title:"zustand (React)",description:"\u8f7b\u91cf\uff0c\u6613\u4e0a\u624b\uff0c\u6269\u5c55\u6027\u5f3a\u7684\u517c\u5bb9 react \u7684\u524d\u7aef\u72b6\u6001\u7ba1\u7406\u65b9\u6848 zustand",keywords:["zustand","zustand-vue","zustand-pub","react","vue","components","ts","typescript","\u8de8\u6846\u67b6","\u524d\u7aef\u72b6\u6001\u7ba1\u7406","share state","share data","js","javascript"],tags:["zustand","react"]},o=void 0,u={unversionedId:"introduce/start/zustand",id:"introduce/start/zustand",title:"zustand (React)",description:"\u8f7b\u91cf\uff0c\u6613\u4e0a\u624b\uff0c\u6269\u5c55\u6027\u5f3a\u7684\u517c\u5bb9 react \u7684\u524d\u7aef\u72b6\u6001\u7ba1\u7406\u65b9\u6848 zustand",source:"@site/docs/introduce/start/zustand.md",sourceDirName:"introduce/start",slug:"/introduce/start/zustand",permalink:"/zustand-vue/docs/introduce/start/zustand",draft:!1,editUrl:"https://github.com/AwesomeDevin/zustand-vue/tree/main/docs/docs/introduce/start/zustand.md",tags:[{label:"zustand",permalink:"/zustand-vue/docs/tags/zustand"},{label:"react",permalink:"/zustand-vue/docs/tags/react"}],version:"current",frontMatter:{title:"zustand (React)",description:"\u8f7b\u91cf\uff0c\u6613\u4e0a\u624b\uff0c\u6269\u5c55\u6027\u5f3a\u7684\u517c\u5bb9 react \u7684\u524d\u7aef\u72b6\u6001\u7ba1\u7406\u65b9\u6848 zustand",keywords:["zustand","zustand-vue","zustand-pub","react","vue","components","ts","typescript","\u8de8\u6846\u67b6","\u524d\u7aef\u72b6\u6001\u7ba1\u7406","share state","share data","js","javascript"],tags:["zustand","react"]},sidebar:"tutorialSidebar",previous:{title:"\u5bf9\u6bd4\u5176\u4ed6\u72b6\u6001\u7ba1\u7406\u6846\u67b6",permalink:"/zustand-vue/docs/introduce/compare"},next:{title:"zustand-vue (Vue)",permalink:"/zustand-vue/docs/introduce/start/zustand-vue"}},i={},p=[{value:"Step 1: \u5b89\u88c5",id:"step-1-\u5b89\u88c5",level:3},{value:"Step 2: Store \u521d\u59cb\u5316",id:"step-2-store-\u521d\u59cb\u5316",level:3},{value:"Step 3: Store \u7ed1\u5b9a\u7ec4\u4ef6\uff0c\u5c31\u5b8c\u6210\u4e86!",id:"step-3-store-\u7ed1\u5b9a\u7ec4\u4ef6\u5c31\u5b8c\u6210\u4e86",level:3},{value:"\u9009\u62e9\u76ee\u6807\u72b6\u6001\uff1abears",id:"\u9009\u62e9\u76ee\u6807\u72b6\u6001bears",level:5},{value:"\u66f4\u65b0\u76ee\u6807\u72b6\u6001\uff1abears",id:"\u66f4\u65b0\u76ee\u6807\u72b6\u6001bears",level:5}],c={toc:p};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://bundlephobia.com/result?p=zustand"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/bundlephobia/minzip/zustand?label=bundle%20size",alt:"Build Size"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/zustand"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/zustand?style=flat",alt:"Version"}))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("h3",{parentName:"admonition",id:"react-live-demo"},(0,a.kt)("a",{parentName:"h3",href:"https://codesandbox.io/s/github/pmndrs/zustand/tree/main/examples/demo?file=/src/App.js"},"React Live Demo"))),(0,a.kt)("h3",{id:"step-1-\u5b89\u88c5"},"Step 1: \u5b89\u88c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install zustand # or yarn add zustand\n")),(0,a.kt)("h3",{id:"step-2-store-\u521d\u59cb\u5316"},"Step 2: Store \u521d\u59cb\u5316"),(0,a.kt)("p",null,"\u521b\u5efa\u7684 store \u662f\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"hook"),"\uff0c\u4f60\u53ef\u4ee5\u653e\u4efb\u4f55\u4e1c\u897f\u5230\u91cc\u9762\uff1a\u57fa\u7840\u53d8\u91cf\uff0c\u5bf9\u8c61\u3001\u51fd\u6570\uff0c\u72b6\u6001\u5fc5\u987b\u4e0d\u53ef\u6539\u53d8\u5730\u66f4\u65b0\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"set")," \u51fd\u6570\u5408\u5e76\u72b6\u6001\u4ee5\u5b9e\u73b0\u72b6\u6001\u66f4\u65b0\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { create } from 'zustand'\n\nconst useBearStore = create((set) => ({\n  bears: 0,\n  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),\n  removeAllBears: () => set({ bears: 0 }),\n}))\n")),(0,a.kt)("h3",{id:"step-3-store-\u7ed1\u5b9a\u7ec4\u4ef6\u5c31\u5b8c\u6210\u4e86"},"Step 3: Store \u7ed1\u5b9a\u7ec4\u4ef6\uff0c\u5c31\u5b8c\u6210\u4e86!"),(0,a.kt)("p",null,"\u53ef\u4ee5\u5728\u4efb\u4f55\u5730\u65b9\u4f7f\u7528\u94a9\u5b50\uff0c\u4e0d\u9700\u8981\u63d0\u4f9b ",(0,a.kt)("inlineCode",{parentName:"p"},"provider"),"\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u57fa\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"selector")," \u83b7\u53d6\u60a8\u7684\u76ee\u6807\u72b6\u6001\uff0c\u7ec4\u4ef6\u5c06\u5728\u72b6\u6001\u66f4\u6539\u65f6\u91cd\u65b0\u6e32\u67d3\u3002"),(0,a.kt)("h5",{id:"\u9009\u62e9\u76ee\u6807\u72b6\u6001bears"},"\u9009\u62e9\u76ee\u6807\u72b6\u6001\uff1abears"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function BearCounter() {\n  const bears = useBearStore((state) => state.bears)\n  return <h1>{bears} around here ...</h1>\n}\n")),(0,a.kt)("h5",{id:"\u66f4\u65b0\u76ee\u6807\u72b6\u6001bears"},"\u66f4\u65b0\u76ee\u6807\u72b6\u6001\uff1abears"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function Controls() {\n  const increasePopulation = useBearStore((state) => state.increasePopulation)\n  return <button onClick={increasePopulation}>one up</button>\n}\n")))}l.isMDXComponent=!0}}]);