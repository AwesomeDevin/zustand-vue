"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7225],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=i(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:a,s[1]=c;for(var i=2;i<o;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8141:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={title:"Select State"},s=void 0,c={unversionedId:"basic/fetch",id:"basic/fetch",title:"Select State",description:"Do not use selectors data Fetching everything",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/basic/fetch.md",sourceDirName:"basic",slug:"/basic/fetch",permalink:"/zustand-vue/en/docs/basic/fetch",draft:!1,editUrl:"https://github.com/AwesomeDevin/zustand-vue/tree/main/docs/docs/basic/fetch.md",tags:[],version:"current",frontMatter:{title:"Select State"},sidebar:"tutorialSidebar",previous:{title:"zustand-pub (Cross-Application/Cross-Framework State Management And Sharing)",permalink:"/zustand-vue/en/docs/introduce/start/zustand-pub"},next:{title:"Set",permalink:"/zustand-vue/en/docs/basic/overwriting"}},l={},i=[{value:"Do not use <code>selector</code>s data Fetching everything",id:"do-not-use-selectors-data-fetching-everything",level:2},{value:"Select state based on <code>selector</code>",id:"select-state-based-on-selector",level:2}],u={toc:i};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"do-not-use-selectors-data-fetching-everything"},"Do not use ",(0,a.kt)("inlineCode",{parentName:"h2"},"selector"),"s data Fetching everything"),(0,a.kt)("p",null,"You can do this, but keep in mind that this will cause the component to update on every state change!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"...\nconst state = useBearStore()\n")),(0,a.kt)("h2",{id:"select-state-based-on-selector"},"Select state based on ",(0,a.kt)("inlineCode",{parentName:"h2"},"selector")),(0,a.kt)("p",null,"By default, it detects strict equality changes (",(0,a.kt)("inlineCode",{parentName:"p"},"old === new")," i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"new value is exactly equal to old value"),")\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const nuts = useBearStore((state) => state.nuts)\nconst honey = useBearStore((state) => state.honey)\n")),(0,a.kt)("p",null,"If you want to construct a single object with multiple state-picks inside, similar to redux's mapStateToProps, you can tell zustand that you want the object to be diffed shallowly by passing the shallow equality function.\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { shallow } from 'zustand/shallow'\n\n// Object pick, re-renders the component when either state.nuts or state.honey change\nconst { nuts, honey } = useBearStore(\n  (state) => ({ nuts: state.nuts, honey: state.honey }),\n  shallow\n)\n\n// Array pick, re-renders the component when either state.nuts or state.honey change\nconst [nuts, honey] = useBearStore(\n  (state) => [state.nuts, state.honey],\n  shallow\n)\n\n// Mapped picks, re-renders the component when state.treats changes in order, count or keys\nconst treats = useBearStore((state) => Object.keys(state.treats), shallow)\n")),(0,a.kt)("p",null,"For more control over re-rendering, you may provide any custom equality function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const treats = useBearStore(\n  (state) => state.treats,\n  (oldTreats, newTreats) => compare(oldTreats, newTreats)\n)\n")))}p.isMDXComponent=!0}}]);