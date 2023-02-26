"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3168],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},l=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=p(n),l=r,f=m["".concat(i,".").concat(l)]||m[l]||u[l]||o;return n?a.createElement(f,s(s({ref:t},d),{},{components:n})):a.createElement(f,s({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=l;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[m]="string"==typeof e?e:r,s[1]=c;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}l.displayName="MDXCreateElement"},676:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={title:"\u4fee\u6539\u5c42\u7ea7\u5f88\u6df1\u7684\u5185\u90e8\u72b6\u6001 \uff1f",description:"zustand-vue\u3001zustand \u66f4\u65b0\u72b6\u6001\u3001\u66f4\u65b0\u5bf9\u8c61"},s=void 0,c={unversionedId:"advanced/sickof-changing-nested-state",id:"advanced/sickof-changing-nested-state",title:"\u4fee\u6539\u5c42\u7ea7\u5f88\u6df1\u7684\u5185\u90e8\u72b6\u6001 \uff1f",description:"zustand-vue\u3001zustand \u66f4\u65b0\u72b6\u6001\u3001\u66f4\u65b0\u5bf9\u8c61",source:"@site/docs/advanced/sickof-changing-nested-state.md",sourceDirName:"advanced",slug:"/advanced/sickof-changing-nested-state",permalink:"/zustand-vue/docs/advanced/sickof-changing-nested-state",draft:!1,editUrl:"https://github.com/AwesomeDevin/zustand-vue/tree/main/docs/docs/advanced/sickof-changing-nested-state.md",tags:[],version:"current",frontMatter:{title:"\u4fee\u6539\u5c42\u7ea7\u5f88\u6df1\u7684\u5185\u90e8\u72b6\u6001 \uff1f",description:"zustand-vue\u3001zustand \u66f4\u65b0\u72b6\u6001\u3001\u66f4\u65b0\u5bf9\u8c61"},sidebar:"tutorialSidebar",previous:{title:"\u4e2d\u95f4\u4ef6",permalink:"/zustand-vue/docs/basic/middleware"},next:{title:"\u9700\u8981\u50cf Redux \u4e00\u6837\u7684 Reducers \u4ee5\u53ca ActionTypes?",permalink:"/zustand-vue/docs/advanced/no-reducer-action"}},i={},p=[{value:"\u6b63\u5e38\u64cd\u4f5c",id:"\u6b63\u5e38\u64cd\u4f5c",level:2},{value:"immer",id:"immer",level:2},{value:"optics-ts",id:"optics-ts",level:2},{value:"Ramda",id:"ramda",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"object \u5c42\u7ea7\u8fc7\u6df1\uff0c\u538c\u5026\u4e86\u624b\u52a8\u8fdb\u884c\u72b6\u6001\u4e0d\u53ef\u53d8\u66f4\u65b0(immutably)\u6765\u4fee\u6539\u5185\u90e8\u72b6\u6001\uff1f"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u6709\u4e00\u4e2a\u5c42\u7ea7\u5f88\u6df1\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"object")," ,\u5c31\u50cf\u8fd9\u6837\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"type State = {\n  deep: {\n    nested: {\n      obj: { count: number },\n      ...{} // more\n    }\n  }\n}\n")),(0,r.kt)("p",null,"\u66f4\u65b0\u8be5\u5d4c\u5957\u72b6\u6001\u9700\u8981\u8d39\u4e00\u4e9b\u529b\uff0c\u4ee5\u786e\u4fdd\u8be5\u72b6\u6001\u4fee\u6539\u8fc7\u7a0b\u4e3a\u4e0d\u53ef\u53d8\u66f4\u65b0(immutably)\u3002"),(0,r.kt)("h2",{id:"\u6b63\u5e38\u64cd\u4f5c"},"\u6b63\u5e38\u64cd\u4f5c"),(0,r.kt)("p",null,"\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"React")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"Redux")," \u7c7b\u4f3c\uff0c\u6b63\u5e38\u7684\u65b9\u6cd5\u662f\u590d\u5236\u72b6\u6001\u5bf9\u8c61\u7684\u6bcf\u4e00\u5c42\u3002\u8fd9\u662f\u901a\u8fc7\u6269\u5c55\u8fd0\u7b97\u7b26\u5b8c\u6210\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"..."),"\uff0c\u5e76\u624b\u52a8\u5c06\u5176\u5408\u5e76\u5230\u65b0\u7684\u72b6\u6001\u503c\u4e2d\u3002\u50cf\u8fd9\u6837:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  normalInc: () =>\n    set((state) => ({\n      deep: {\n        ...state.deep,\n        nested: {\n          ...state.deep.nested,\n          obj: {\n            ...state.deep.nested.obj,\n            count: state.deep.nested.obj.count + 1\n          }\n        }\n      }\n    })),\n")),(0,r.kt)("p",null,"\u8fd9\u592a\u7e41\u7410\u4e86!\u8ba9\u6211\u4eec\u6765\u63a2\u7d22\u4e00\u4e9b\u53ef\u4ee5\u8ba9\u4f60\u7684\u7f16\u7801\u751f\u6d3b\u66f4\u7f8e\u597d\uff0c\u4e14\u5c11\u6389\u4e00\u4e9b\u5934\u53d1\u7684\u65b9\u6cd5\u3002"),(0,r.kt)("h2",{id:"immer"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/immerjs/immer"},"immer")),(0,r.kt)("p",null,"\u8bb8\u591a\u4eba\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/immerjs/immer"},"Immer")," \u6765\u66f4\u65b0\u5d4c\u5957\u503c\u3002Immer \u53ef\u4ee5\u968f\u65f6\u4f7f\u7528\uff0c\u4f60\u9700\u8981\u66f4\u65b0\u5d4c\u5957\u72b6\u6001\uff0c\u5982\u5728React, Redux\uff0c\u5f53\u7136\uff0c\u8fd8\u6709 Zustand!"),(0,r.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 Immer \u7f29\u77ed\u5d4c\u5957\u6df1\u5ea6\u5bf9\u8c61\u7684\u72b6\u6001\u66f4\u65b0\u3002\u8ba9\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u4f8b\u5b50:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import produce from 'immer'\n\nconst useStore = create((set) => ({\n  deep: {\n    nested: {\n      obj: { count: 0 },\n    }\n  },\n  immerInc: () =>\n    set(\n      produce((state: State) => {\n        ++state.deep.nested.obj.count\n      })\n    ),\n}))\n\nconst immerInc = useStore((state) => state.immerInc)\nimmerInc()\n")),(0,r.kt)("p",null,"\u591a\u7b80\u5355\u554a\uff01\u662f\u4e0d\u662f\u4fdd\u4f4f\u4e86\u4f60\u7684\u5934\u53d1\uff0c\u8bf7\u6ce8\u610f\u8fd9\u91cc\u5217\u51fa\u7684",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pmndrs/zustand/blob/main/docs/integrations/immer-middleware.md"},"\u9677\u9631"),"\u3002"),(0,r.kt)("h2",{id:"optics-ts"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/akheron/optics-ts/"},"optics-ts")),(0,r.kt)("p",null,"\u53e6\u4e00\u79cd\u65b9\u5f0f\u662f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/akheron/optics-ts/"},"optics-ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import * as O from 'optics-ts'\n\nconst useStore = create((set) => ({\n  deep: {\n    nested: {\n      obj: { count: 0 },\n    }\n  },\n  opticsInc: () =>\n    set(\n      O.modify(O.optic<State>().path(\"deep.nested.obj.count\"))((c) => c + 1)\n    ),\n}))\n\nconst opticsInc = useStore((state) => state.opticsInc)\nopticsInc()\n")),(0,r.kt)("h2",{id:"ramda"},(0,r.kt)("a",{parentName:"h2",href:"https://ramdajs.com/"},"Ramda")),(0,r.kt)("p",null,"\u8fd8\u6709 ",(0,r.kt)("a",{parentName:"p",href:"https://ramdajs.com/"},"Ramda")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import * as O from \'optics-ts\'\n\nconst useStore = create((set) => ({\n  deep: {\n    nested: {\n      obj: { count: 0 },\n    }\n  },\n  ramdaInc: () =>\n    set(\n      R.over(R.lensPath(["deep", "nested", "obj", "count"]), (c) => c + 1)\n    ),\n}))\n\nconst ramdaInc = useStore((state) => state.ramdaInc)\nramdaInc()\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/zustand-normal-immer-optics-ramda-updating-ynn3o?file=/src/App.tsx"},"Code Demo")))}m.isMDXComponent=!0}}]);