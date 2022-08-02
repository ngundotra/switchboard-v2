"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7541],{5318:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>d});var n=t(7378);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||s;return t?n.createElement(h,o(o({ref:a},p),{},{components:t})):n.createElement(h,o({ref:a},p))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=u;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},106:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=t(5773),r=(t(7378),t(5318));const s={sidebar_position:15,title:"Feed Operator"},o=void 0,i={unversionedId:"feed/operator",id:"feed/operator",title:"Feed Operator",description:"This page gives an overview on how to configure and operate a Switchboard feed.",source:"@site/docs/feed/operator.mdx",sourceDirName:"feed",slug:"/feed/operator",permalink:"/feed/operator",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15,title:"Feed Operator"},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/feed/"},next:{title:"Directory",permalink:"/feed/directory"}},l={},c=[{value:"Job Consensus",id:"job-consensus",level:2},{value:"Oracle Consensus",id:"oracle-consensus",level:2},{value:"Feed Maintenance",id:"feed-maintenance",level:2}],p={toc:c};function m(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page gives an overview on how to configure and operate a Switchboard feed."),(0,r.kt)("h2",{id:"job-consensus"},"Job Consensus"),(0,r.kt)("p",null,"Job consensus refers to how individual oracles calculate their result from a feeds assigned job accounts."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Job Diversity"))),(0,r.kt)("p",null,"Data feeds should source data from a variety of sources when applicable. A feed relying on a single source is at the mercy of that sources uptime and responsiveness."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Job Weights"))),(0,r.kt)("p",null,"Data feeds should use job weights to calculate the weighted median, which is what the oracle submits on-chain as its final result. A data source that has the majority of an assets price action should be weighted higher than a dead exchange with questionable volume metrics."),(0,r.kt)("h2",{id:"oracle-consensus"},"Oracle Consensus"),(0,r.kt)("p",null,"Oracle consensus refers to how the final on-chain result is calculated from a batch of oracle responses. A feed's ",(0,r.kt)("inlineCode",{parentName:"p"},"aggregator.oracleRequestBatchSize")," is the number of oracles assigned to a request, while ",(0,r.kt)("inlineCode",{parentName:"p"},"aggregator.minOracleResults")," is the number of responses needed to accept a result."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Increase oracleRequestBatchSize"))),(0,r.kt)("p",null,"The quickest way to increase feed security is to request more oracles each update round because this requires a higher degree of oracle collusion in order to affect the accepted result. In reality, this increases the overall cost of a feed so its a careful consideration for feed operators when configuring a feed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"}," oracleRequestBatchSize ",(0,r.kt)("span",{parentName:"em",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2260")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\neq")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},(0,r.kt)("span",{parentName:"span",className:"mrel"},(0,r.kt)("span",{parentName:"span",className:"mord vbox"},(0,r.kt)("span",{parentName:"span",className:"thinbox"},(0,r.kt)("span",{parentName:"span",className:"rlap"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"inner"},(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mrel"},"\ue020"))),(0,r.kt)("span",{parentName:"span",className:"fix"}))))),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="))))))," minOracleResults "))),(0,r.kt)("p",null,"The number of oracles assigned to an update request should always be less than the number of oracles required to respond. There are a variety of reasons that may cause an oracle response to fail, such as Solana network degradation, individual oracle network issues, or transaction spamming. Your feed's lease is only deducted when an oracle successfully responds and there is no penalty for an oracle who has timed out."),(0,r.kt)("h2",{id:"feed-maintenance"},"Feed Maintenance"),(0,r.kt)("p",null,"The primary maintenance for a feed is ensuring the lease contract has sufficient funds. The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/switchboard-v2/tree/main/packages/lease-observer"},"@switchboard-xyz/lease-observer")," demonstrates how to emit PagerDuty events when a lease is low on funds."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When a data feed's lease contract does not have enough funds, it will be automatically removed from its crank. When extending a feed's lease, make sure to also repush the feed back onto any cranks for updates to continue."))),(0,r.kt)("p",null,"You should also monitor the feed for staleness in case of downstream changes to a data sources endpoint."))}m.isMDXComponent=!0}}]);