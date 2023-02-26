"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9854],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>y});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),f=a,y=p["".concat(i,".").concat(f)]||p[f]||d[f]||o;return t?r.createElement(y,s(s({ref:n},u),{},{components:t})):r.createElement(y,s({ref:n},u))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=f;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[p]="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7198:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const o={title:"Async Actions"},s=void 0,c={unversionedId:"basic/async",id:"basic/async",title:"Async Actions",description:"Call set in async actions when you have data ready, zustand/zustand-vue doesn't care if your action is asynchronous or not.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/basic/async.md",sourceDirName:"basic",slug:"/basic/async",permalink:"/zustand-vue/en/docs/basic/async",draft:!1,editUrl:"https://github.com/AwesomeDevin/zustand-vue/tree/main/docs/docs/basic/async.md",tags:[],version:"current",frontMatter:{title:"Async Actions"},sidebar:"tutorialSidebar",previous:{title:"Set",permalink:"/zustand-vue/en/docs/basic/overwriting"},next:{title:"Middleware",permalink:"/zustand-vue/en/docs/basic/middleware"}},i={},l=[],u={toc:l};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Call ",(0,a.kt)("inlineCode",{parentName:"p"},"set")," in async actions when you have data ready, ",(0,a.kt)("inlineCode",{parentName:"p"},"zustand/zustand-vue")," doesn't care if your action is asynchronous or not."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const useFishStore = create((set) => ({\n  fishies: {},\n  fetch: async (pond) => {\n    const response = await fetch(pond)\n    set({ fishies: await response.json() })\n  },\n}))\n")),(0,a.kt)("p",null,"There are two ways to get ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," in async actions\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Method 1: based on fn-function: ",(0,a.kt)("inlineCode",{parentName:"li"},"set(state => result)"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const useFishStore = create((set) => ({\n  fishies: {},\n  fetch: async (pond) => {\n    const response = await fetch(pond)\n    set((state)=>{\n      console.log(state.fishies)\n    })\n  },\n}))\n")),(0,a.kt)("p",null,"Method 2: based on ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," function"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const useFishStore = create((set, get) => ({\n  fishies: {},\n  fetch: async (pond) => {\n    const response = await fetch(pond)\n    set(()=>{\n      console.log(get().fishies)\n    })\n  },\n}))\n")))}p.isMDXComponent=!0}}]);