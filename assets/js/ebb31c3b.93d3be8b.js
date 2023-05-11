"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2838],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4595:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={},l=void 0,o={unversionedId:"git/git-basic-command",id:"git/git-basic-command",title:"git-basic-command",description:"\u7248\u672c\u56de\u9000",source:"@site/studynotes/git/git-basic-command.md",sourceDirName:"git",slug:"/git/git-basic-command",permalink:"/studynotes/git/git-basic-command",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"git",permalink:"/studynotes/category/git"}},c={},s=[{value:"\u7248\u672c\u56de\u9000",id:"\u7248\u672c\u56de\u9000",level:2},{value:"Git stash",id:"git-stash",level:2},{value:"Reference",id:"reference",level:3}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u7248\u672c\u56de\u9000"},"\u7248\u672c\u56de\u9000"),(0,i.kt)("p",null,"HEAD \u6307\u5411\u7684\u7248\u672c\u5c31\u662f\u7576\u524d\u7248\u672c\uff0c\u56e0\u6b64\uff0cGit \u5141\u8a31\u6211\u5011\u5728\u7248\u672c\u7684\u6b77\u53f2\u4e4b\u9593\u7a7f\u68ad\uff0c\u4f7f\u7528\u547d\u4ee4"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git reset --hard commit_id\u3002\n")),(0,i.kt)("p",null,"\u7a7f\u68ad\u524d\uff0c\u7528 git log \u53ef\u4ee5\u67e5\u770b\u63d0\u4ea4\u6b77\u53f2\uff0c\u4ee5\u4fbf\u78ba\u5b9a\u8981\u56de\u9000\u5230\u54ea\u500b\u7248\u672c\u3002"),(0,i.kt)("p",null,"\u8981\u91cd\u8fd4\u672a\u4f86\uff0c\u7528 git reflog \u67e5\u770b\u547d\u4ee4\u6b77\u53f2\uff0c\u4ee5\u4fbf\u78ba\u5b9a\u8981\u56de\u5230\u672a\u4f86\u7684\u54ea\u500b\u7248\u672c\u3002"),(0,i.kt)("p",null,"\u64a4\u92b7\u4fee\u6539"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"git checkout -- file")," \u56de\u6b78\u7576\u524d\u9801\u9762\u7684\u4fee\u6539"),(0,i.kt)("li",{parentName:"ol"},"\u5df2\u7d93 add \u5230 temp \u5340\u4e4b\u5f8c\u60f3\u8981\u4e1f\u68c4\u4fee\u6539 ",(0,i.kt)("inlineCode",{parentName:"li"},"git reset HEAD <file>")," \u5c31\u6703\u56de\u5230 step 1")),(0,i.kt)("h2",{id:"git-stash"},"Git stash"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"git stash")," \u4f86\u5132\u5b58\u76ee\u524d\u4fee\u6539"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"git stash list")," \u5217\u51fa\u6240\u6709\u5132\u5b58\u7684 stash"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"git stash apply")," \u6062\u5fa9\u5132\u5b58\u7684 stash \u4f46\u662f stash \u7684\u5167\u5bb9\u4e26\u6c92\u6709\u88ab\u522a\u9664"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"git stash drop")," \u522a\u9664 stash"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"git stash pop")," \u6062\u5fa9\u5132\u5b58\u7684 stash \u4e26\u522a\u9664"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"git cherry-pick <hash id>")," \u8907\u88fd\u4e00\u500b commit \u5230\u7576\u524d\u7684 branch")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"reference"},"Reference"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.liaoxuefeng.com/wiki/896043488029600"},"Git \u6559\u7a0b")))}m.isMDXComponent=!0}}]);