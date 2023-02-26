"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[782],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>b});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=i(n),m=o,b=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(b,s(s({ref:t},l),{},{components:n})):r.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[p]="string"==typeof e?e:o,s[1]=u;for(var i=2;i<a;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},586:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>i});var r=n(7462),o=(n(7294),n(3905));const a={title:"React/Vue \u7ec4\u4ef6\u5916\u90e8\u8bfb\u53d6/\u5199\u5165\u72b6\u6001\u5e76\u505a\u51fa\u54cd\u5e94",description:"React/Vue\u7ec4\u4ef6\u5916\u90e8\u5982\u4f55\u4f7f\u7528 zustand-vue\u3001zustand"},s=void 0,u={unversionedId:"advanced/read-set-state-outside-of-component",id:"advanced/read-set-state-outside-of-component",title:"React/Vue \u7ec4\u4ef6\u5916\u90e8\u8bfb\u53d6/\u5199\u5165\u72b6\u6001\u5e76\u505a\u51fa\u54cd\u5e94",description:"React/Vue\u7ec4\u4ef6\u5916\u90e8\u5982\u4f55\u4f7f\u7528 zustand-vue\u3001zustand",source:"@site/docs/advanced/read-set-state-outside-of-component.md",sourceDirName:"advanced",slug:"/advanced/read-set-state-outside-of-component",permalink:"/zustand-vue/docs/advanced/read-set-state-outside-of-component",draft:!1,editUrl:"https://github.com/AwesomeDevin/zustand-vue/tree/main/docs/docs/advanced/read-set-state-outside-of-component.md",tags:[],version:"current",frontMatter:{title:"React/Vue \u7ec4\u4ef6\u5916\u90e8\u8bfb\u53d6/\u5199\u5165\u72b6\u6001\u5e76\u505a\u51fa\u54cd\u5e94",description:"React/Vue\u7ec4\u4ef6\u5916\u90e8\u5982\u4f55\u4f7f\u7528 zustand-vue\u3001zustand"},sidebar:"tutorialSidebar",previous:{title:"\u9700\u8981\u50cf Redux \u4e00\u6837\u7684 Reducers \u4ee5\u53ca ActionTypes?",permalink:"/zustand-vue/docs/advanced/no-reducer-action"},next:{title:"\u8131\u79bb React/Vue \u60c5\u51b5\u4e0b\u4f7f\u7528 Zustand/Zustand-vue",permalink:"/zustand-vue/docs/advanced/using-zustand-without-react"}},c={},i=[{value:"\u57fa\u7840\u5199\u6cd5",id:"\u57fa\u7840\u5199\u6cd5",level:2},{value:"\u8ba2\u9605 <code>selector</code>",id:"\u8ba2\u9605-selector",level:2}],l={toc:i};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6709\u65f6\u9700\u8981\u4ee5\u975e\u54cd\u5e94\u5f0f\u7684\u65b9\u5f0f\u8bbf\u95ee\u72b6\u6001\uff0c\u6216\u8005\u5bf9\u5b58\u50a8\u8fdb\u884c\u64cd\u4f5c\u3002\u5bf9\u4e8e\u8fd9\u4e9b\u60c5\u51b5\uff0c\u751f\u6210\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"hook")," \u5177\u6709\u9644\u52a0\u5728\u5176\u539f\u578b\u4e0a\u7684\u5b9e\u7528\u51fd\u6570\u3002"),(0,o.kt)("h2",{id:"\u57fa\u7840\u5199\u6cd5"},"\u57fa\u7840\u5199\u6cd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const useDogStore = create(() => ({ paw: true, snout: true, fur: true }))\n\n// \u83b7\u53d6\u975e\u53cd\u5e94\u6027\u6700\u65b0\u72b6\u6001\nconst paw = useDogStore.getState().paw\n// \u76d1\u542c\u6240\u6709\u66f4\u6539\uff0c\u5bf9\u6bcf\u4e2a\u66f4\u6539\u540c\u6b65\u89e6\u53d1\nconst unsub1 = useDogStore.subscribe(console.log)\n// \u66f4\u65b0\u72b6\u6001\uff0c\u5c06\u89e6\u53d1\u76d1\u542c\u5668\nuseDogStore.setState({ paw: false })\n// \u53d6\u6d88\u76d1\u542c\nunsub1()\n\n// \u5f53\u7136\uff0c\u4f60\u53ef\u4ee5\u50cf\u5f80\u5e38\u4e00\u6837\u4f7f\u7528\u94a9\u5b50\nconst Component = () => {\n  const paw = useDogStore((state) => state.paw)\n  ...\n")),(0,o.kt)("h2",{id:"\u8ba2\u9605-selector"},"\u8ba2\u9605 ",(0,o.kt)("inlineCode",{parentName:"h2"},"selector")),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u7528\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"subscribeWithSelector")," \u4e2d\u95f4\u4ef6\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528\u8fd9\u4e2a\u4e2d\u95f4\u4ef6, ",(0,o.kt)("inlineCode",{parentName:"p"},"subscribe")," \u65b0\u589e\u4e86\u4e00\u4e9b\u989d\u5916\u7684\u529f\u80fd\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"subscribe(selector, callback, options?: { equalityFn, fireImmediately }): Unsubscribe\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { subscribeWithSelector } from 'zustand/middleware'\nconst useDogStore = create(\n  subscribeWithSelector(() => ({ paw: true, snout: true, fur: true }))\n)\n\n// \u4ec5\u9650 `paw` \u4fee\u6539\u65f6\uff0c\u89e6\u53d1\u76d1\u542c\nconst unsub2 = useDogStore.subscribe((state) => state.paw, console.log)\n// subscribe \u8fd8\u53ef\u4ee5\u76d1\u542c\u5230\u65e7\u503c\nconst unsub3 = useDogStore.subscribe(\n  (state) => state.paw,\n  (paw, previousPaw) => console.log(paw, previousPaw)\n)\n// subscribe \u4e5f\u652f\u6301\u81ea\u5b9a\u4e49\u76f8\u7b49\u51fd\u6570\nconst unsub4 = useDogStore.subscribe(\n  (state) => [state.paw, state.fur],\n  console.log,\n  { equalityFn: shallow }\n)\n// \u7acb\u5373\u8ba2\u9605\u5e76\u89e6\u53d1\nconst unsub5 = useDogStore.subscribe((state) => state.paw, console.log, {\n  fireImmediately: true,\n})\n")))}p.isMDXComponent=!0}}]);