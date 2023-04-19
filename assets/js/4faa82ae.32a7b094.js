"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8650],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(i,".").concat(f)]||d[f]||l[f]||c;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<c;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3829:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const c={title:"\u77ac\u65f6\u66f4\u65b0",description:"React \u7ec4\u4ef6\u6027\u80fd\u4f18\u5316"},o=void 0,s={unversionedId:"advanced/transiend-updates",id:"advanced/transiend-updates",title:"\u77ac\u65f6\u66f4\u65b0",description:"React \u7ec4\u4ef6\u6027\u80fd\u4f18\u5316",source:"@site/docs/advanced/transiend-updates.md",sourceDirName:"advanced",slug:"/advanced/transiend-updates",permalink:"/zustand-vue/docs/advanced/transiend-updates",draft:!1,editUrl:"https://github.com/AwesomeDevin/zustand-vue/tree/main/docs/docs/advanced/transiend-updates.md",tags:[],version:"current",frontMatter:{title:"\u77ac\u65f6\u66f4\u65b0",description:"React \u7ec4\u4ef6\u6027\u80fd\u4f18\u5316"},sidebar:"tutorialSidebar",previous:{title:"\u5c06 Store \u4e0e React Context \u7ed1\u5b9a",permalink:"/zustand-vue/docs/advanced/react-context"},next:{title:"\u5b8c\u5907\u7684 Typescript \u652f\u6301",permalink:"/zustand-vue/docs/advanced/typescript"}},i={},p=[],u={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u77ac\u65f6\u66f4\u65b0\u7ecf\u5e38\u53d1\u751f\u5728\u72b6\u6001\u53d8\u5316\u65f6"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"subscribe")," \u51fd\u6570\u5141\u8bb8\u7ec4\u4ef6\u7ed1\u5b9a\u5230\u72b6\u6001\u90e8\u5206\uff0c\u800c\u4e0d\u5fc5\u5f3a\u5236\u5728\u66f4\u6539\u65f6\u91cd\u65b0\u5448\u73b0\u3002\u6700\u597d\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect")," \u7ed3\u5408\u4f7f\u7528\uff0c\u4ee5\u4fbf\u5728\u5378\u8f7d\u65f6\u81ea\u52a8\u53d6\u6d88\u8ba2\u9605\u3002\u5f53\u5141\u8bb8\u60a8\u76f4\u63a5\u66f4\u6539\u89c6\u56fe\u65f6\uff0c\u8fd9\u79cd\u65b9\u5f0f\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"\u6781\u5927\u5730\u4f18\u5316"),"\u4f60\u7684\u5e94\u7528\u6027\u80fd\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const useScratchStore = create(set => ({ scratches: 0, ... }))\n\nconst Component = () => {\n  // \u83b7\u53d6\u521d\u59cb\u72b6\u6001\n  const scratchRef = useRef(useScratchStore.getState().scratches)\n  // \u6302\u8f7d\u65f6\u8fde\u63a5\u5230 store \uff0c\u5378\u8f7d\u65f6\u65ad\u5f00\u8fde\u63a5\uff0c\u6355\u83b7\u5f15\u7528\u4e2d\u7684\u72b6\u6001\u53d8\u5316\n  useEffect(() => useScratchStore.subscribe(\n    state => (scratchRef.current = state.scratches)\n  ), [])\n  ...\n")))}d.isMDXComponent=!0}}]);