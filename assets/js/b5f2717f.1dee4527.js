"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9288],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,b=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5345:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={id:"architecture",title:"Architecture",sidebar_position:0},i=void 0,s={unversionedId:"Kubernetes/architecture",id:"Kubernetes/architecture",title:"Architecture",description:"kubernetes server \u67b6\u69cb\u5206\u5169\u7fa4",source:"@site/studynotes/Kubernetes/architecture.md",sourceDirName:"Kubernetes",slug:"/Kubernetes/architecture",permalink:"/studynotes/Kubernetes/architecture",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"architecture",title:"Architecture",sidebar_position:0},sidebar:"defaultSidebar",previous:{title:"Kubernetes",permalink:"/studynotes/category/kubernetes"},next:{title:"cronjob helm template",permalink:"/studynotes/Kubernetes/cronjob-helm"}},l={},c=[{value:"worker node",id:"worker-node",level:2},{value:"master node",id:"master-node",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"kubernetes server \u67b6\u69cb\u5206\u5169\u7fa4"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"master node"),(0,o.kt)("li",{parentName:"ul"},"worker node")),(0,o.kt)("h2",{id:"worker-node"},"worker node"),(0,o.kt)("p",null,"kubernetes \u6700\u5c0f\u5de5\u4f5c\u55ae\u4f4d\uff0c\u6703\u6709\u591a\u500b pod \u904b\u884c\u5728\u591a\u500b worker node \u4e0a\uff0c\u6709\u4e09\u7a2e processes \u5fc5\u5b9a\u904b\u884c\u5728\u6bcf\u500b node \u4e0a\u9762"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"kubectl"),(0,o.kt)("li",{parentName:"ul"},"container runtime"),(0,o.kt)("li",{parentName:"ul"},"kube proxy\n",(0,o.kt)("img",{alt:"img",src:r(7971).Z,width:"1194",height:"826"}))),(0,o.kt)("h2",{id:"master-node"},"master node"),(0,o.kt)("p",null,"kubernetes \u4e3b\u8981\u63a7\u5236\u5927\u8166\uff0c\u6709\u56db\u7a2e processes \u904b\u884c\u5728\u6bcf\u4e00\u500b master node \u4e0a\u9762"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Api Server: api request -> validate request -> forward to other processes."),(0,o.kt)("li",{parentName:"ul"},"Scheduler: new pod -> api server -> schedule -> which node pod should be scheduled."),(0,o.kt)("li",{parentName:"ul"},"Controller Manager: detects cluster state change, eg: \u627e\u51fa resource \u8f03\u5145\u8db3\u7684 node."),(0,o.kt)("li",{parentName:"ul"},"etcd: the brain of cluster, store the status of cluster change.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:r(3482).Z,width:"1964",height:"1054"})))}d.isMDXComponent=!0},3482:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/MasterNode-7ad88af7a8c8bb08299ce27132b124da.png"},7971:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/workerNode-296b2f6a2e772c8745f0d837b07b7965.png"}}]);