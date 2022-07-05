"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3720],{5318:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var a=t(7378);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,a,l=function(e,r){if(null==e)return{};var t,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),i=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=i(e.components);return a.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=i(t),f=l,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||n;return t?a.createElement(m,o(o({ref:r},c),{},{components:t})):a.createElement(m,o({ref:r},c))}));function f(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var n=t.length,o=new Array(n);o[0]=d;var u={};for(var s in r)hasOwnProperty.call(r,s)&&(u[s]=r[s]);u.originalType=e,u.mdxType="string"==typeof e?e:l,o[1]=u;for(var i=2;i<n;i++)o[i]=t[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},517:(e,r,t)=>{t.d(r,{Z:()=>l});var a=t(7378);function l(e){let{children:r,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",hidden:t,className:l},r)}},637:(e,r,t)=>{t.d(r,{Z:()=>c});var a=t(2685),l=t(7378),n=t(6457),o=t(6769),u=t(8944);const s="tabItem_WhCL";function i(e){var r,t,n;const{lazy:i,block:c,defaultValue:p,values:d,groupId:f,className:m}=e,b=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=d?d:b.map((e=>{let{props:{value:r,label:t,attributes:a}}=e;return{value:r,label:t,attributes:a}})),v=(0,o.lx)(y,((e,r)=>e.value===r.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===p?p:null!=(r=null!=p?p:null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)?r:null==(n=b[0])?void 0:n.props.value;if(null!==k&&!y.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:h,setTabGroupChoices:T}=(0,o.UB)(),[g,N]=(0,l.useState)(k),O=[],{blockElementScrollPositionUntilNextRender:w}=(0,o.o5)();if(null!=f){const e=h[f];null!=e&&e!==g&&y.some((r=>r.value===e))&&N(e)}const x=e=>{const r=e.currentTarget,t=O.indexOf(r),a=y[t].value;a!==g&&(w(r),N(a),null!=f&&T(f,a))},C=e=>{var r;let t=null;switch(e.key){case"ArrowRight":{const r=O.indexOf(e.currentTarget)+1;t=O[r]||O[0];break}case"ArrowLeft":{const r=O.indexOf(e.currentTarget)-1;t=O[r]||O[O.length-1];break}}null==(r=t)||r.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":c},m)},y.map((e=>{let{value:r,label:t,attributes:n}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:g===r?0:-1,"aria-selected":g===r,key:r,ref:e=>O.push(e),onKeyDown:C,onFocus:x,onClick:x},n,{className:(0,u.Z)("tabs__item",s,null==n?void 0:n.className,{"tabs__item--active":g===r})}),null!=t?t:r)}))),i?(0,l.cloneElement)(b.filter((e=>e.props.value===g))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},b.map(((e,r)=>(0,l.cloneElement)(e,{key:r,hidden:e.props.value!==g})))))}function c(e){const r=(0,n.Z)();return l.createElement(i,(0,a.Z)({key:String(r)},e))}},5280:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>u,metadata:()=>i,toc:()=>p});var a=t(2685),l=(t(7378),t(5318)),n=t(637),o=t(517);const u={sidebar_position:50,title:"Buffer Relayers"},s=void 0,i={unversionedId:"developers/buffer-relayer",id:"developers/buffer-relayer",title:"Buffer Relayers",description:"Read a Buffer Relayer",source:"@site/docs/developers/buffer-relayer.mdx",sourceDirName:"developers",slug:"/developers/buffer-relayer",permalink:"/developers/buffer-relayer",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50,title:"Buffer Relayers"},sidebar:"tutorialSidebar",previous:{title:"Randomness",permalink:"/developers/randomness"},next:{title:"Switchboard DAO",permalink:"/dao"}},c={},p=[{value:"Read a Buffer Relayer",id:"read-a-buffer-relayer",level:2},{value:"Create a Buffer Relayer",id:"create-a-buffer-relayer",level:2},{value:"Request a Buffer Relayer Update",id:"request-a-buffer-relayer-update",level:2}],d={toc:p};function f(e){let{components:r,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"read-a-buffer-relayer"},"Read a Buffer Relayer"),(0,l.kt)(n.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Rust",label:"Rust",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"// Rust code\n"))),(0,l.kt)(o.Z,{value:"Typescript",label:"Typescript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// Typescript code\n"))),(0,l.kt)(o.Z,{value:"CLI",label:"CLI",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# CLI command\n")))),(0,l.kt)("h2",{id:"create-a-buffer-relayer"},"Create a Buffer Relayer"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bufferRelayerInit"))),(0,l.kt)(n.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Typescript",label:"Typescript",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// Typescript code\n"))),(0,l.kt)(o.Z,{value:"CLI",label:"CLI",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# CLI command\n")))),(0,l.kt)("h2",{id:"request-a-buffer-relayer-update"},"Request a Buffer Relayer Update"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bufferRelayerOpenRound"))),(0,l.kt)(n.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Typescript",label:"Typescript",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// Typescript code\n"))),(0,l.kt)(o.Z,{value:"CLI",label:"CLI",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# CLI command\n")))))}f.isMDXComponent=!0}}]);