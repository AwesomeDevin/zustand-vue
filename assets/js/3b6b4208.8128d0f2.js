"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[461],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,y=p["".concat(i,".").concat(m)]||p[m]||l[m]||o;return n?r.createElement(y,c(c({ref:t},d),{},{components:n})):r.createElement(y,c({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,c[1]=s;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8349:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={title:"\u9700\u8981\u50cf Redux \u4e00\u6837\u7684 Reducers \u4ee5\u53ca ActionTypes?",description:"zustand / zustand-vue \u4e0e Reducers\u3001ActionTypes"},c=void 0,s={unversionedId:"advanced/no-reducer-action",id:"advanced/no-reducer-action",title:"\u9700\u8981\u50cf Redux \u4e00\u6837\u7684 Reducers \u4ee5\u53ca ActionTypes?",description:"zustand / zustand-vue \u4e0e Reducers\u3001ActionTypes",source:"@site/docs/advanced/no-reducer-action.md",sourceDirName:"advanced",slug:"/advanced/no-reducer-action",permalink:"/zustand-vue/docs/advanced/no-reducer-action",draft:!1,editUrl:"https://github.com/AwesomeDevin/zustand-vue/tree/main/docs/docs/advanced/no-reducer-action.md",tags:[],version:"current",frontMatter:{title:"\u9700\u8981\u50cf Redux \u4e00\u6837\u7684 Reducers \u4ee5\u53ca ActionTypes?",description:"zustand / zustand-vue \u4e0e Reducers\u3001ActionTypes"},sidebar:"tutorialSidebar",previous:{title:"\u4fee\u6539\u5c42\u7ea7\u5f88\u6df1\u7684\u5185\u90e8\u72b6\u6001 \uff1f",permalink:"/zustand-vue/docs/advanced/sickof-changing-nested-state"},next:{title:"React/Vue \u7ec4\u4ef6\u5916\u90e8\u8bfb\u53d6/\u5199\u5165\u72b6\u6001\u5e76\u505a\u51fa\u54cd\u5e94",permalink:"/zustand-vue/docs/advanced/read-set-state-outside-of-component"}},i={},u=[],d={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u60f3\u6dfb\u52a0\u50cf redux \u4e00\u6837\u7684 reducers \u4ee5\u53ca action types ?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const types = { increase: 'INCREASE', decrease: 'DECREASE' }\n\nconst reducer = (state, { type, by = 1 }) => {\n  switch (type) {\n    case types.increase:\n      return { grumpiness: state.grumpiness + by }\n    case types.decrease:\n      return { grumpiness: state.grumpiness - by }\n  }\n}\n\nconst useGrumpyStore = create((set) => ({\n  grumpiness: 0,\n  dispatch: (args) => set((state) => reducer(state, args)),\n}))\n\nconst dispatch = useGrumpyStore((state) => state.dispatch)\ndispatch({ type: types.increase, by: 2 })\n")),(0,a.kt)("p",null,"\u6216\u8005\uff0c\u4f7f\u7528\u4e2d\u95f4\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"redux-middleware")," \u3002\u5b83\u8fde\u63a5\u4f60\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"reducer"),"\uff0c\u8bbe\u7f6e\u521d\u59cb\u72b6\u6001\uff0c\u5e76\u5411 ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," \u672c\u8eab \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"Store")," API \u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"dispatch")," \u51fd\u6570` \u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { redux } from 'zustand/middleware'\n\nconst useReduxStore = create(redux(reducer, initialState))\n")),(0,a.kt)("p",null,"\u66f4\u65b0\u5b58\u50a8\u7684\u53e6\u4e00\u79cd\u65b9\u6cd5\u662f\u901a\u8fc7\u5c01\u88c5\u4e86\u72b6\u6001\u51fd\u6570\u7684\u51fd\u6570\u3002\u8fd9\u4e9b\u4e5f\u53ef\u4ee5\u5904\u7406\u52a8\u4f5c\u7684\u526f\u4f5c\u7528\u3002\u4f8b\u5982\uff0c\u5728 http \u8bf7\u6c42\u4e2d\u8c03\u7528\u3002\u8981\u4ee5\u975e hooks \u7684\u65b9\u5f0f\u4f7f\u7528\u8bf7",(0,a.kt)("a",{parentName:"p",href:"https://awesomedevin.github.io/zustand-vue/docs/advanced/read-set-state-outside-of-component"},"\u67e5\u770b")))}p.isMDXComponent=!0}}]);