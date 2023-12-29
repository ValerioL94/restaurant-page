(()=>{"use strict";var n,e,t,o,r,a,i,c,s,A,d,l,u,p,m={28:(n,e,t)=>{t.d(e,{Z:()=>u});var o=t(537),r=t.n(o),a=t(645),i=t.n(a),c=t(667),s=t.n(c),A=new URL(t(514),t.b),d=i()(r()),l=s()(A);d.push([n.id,`html,\nbody {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    background-image: url(${l});\n    background-attachment: fixed;\n    background-position: 50%;\n    background-size: cover;\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 100vh;\n}\n\nheader {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: white;\n    background-color: black;\n    opacity: 70%;\n    box-sizing: border-box;\n    padding-bottom: 15px;\n    font-size: 2rem;\n    font-weight: 900;\n}\n\nnav {\n    display: flex;\n    gap: 50px;\n}\n\nnav>button {\n    height: 40px;\n    width: 100px;\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n    font-size: 1.5rem;\n    font-weight: 900;\n    color: white;\n    background-color: darkgreen;\n    border-radius: 10px;\n}\n\nnav>button:hover,\nnav>button:focus {\n    cursor: pointer;\n    transition: all .2s ease-in-out;\n    transform: scale(1.1);\n}\n\nmain {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-sizing: border-box;\n    padding: 50px;\n}\n\nmain>.display {\n    min-height: 500px;\n    width: 800px;\n    background-color: black;\n    opacity: 70%;\n    padding: 0 50px;\n    box-sizing: border-box;\n    color: white;\n}\n\nmain.display>h1 {\n    text-align: center;\n    font-size: 3rem;\n    margin: 15px 0;\n}\n\nmain.display>p {\n    font-size: 2rem;\n    margin: 10px 0;\n}\n\nmain.display>.note {\n    font-size: 1rem;\n    font-weight: 900;\n    text-decoration: underline;\n    margin-top: 40px;\n}\n\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: black;\n    opacity: 70%;\n    color: white;\n    font-size: 1.5rem;\n    font-weight: 900;\n    height: 50px;\n}\n\nfooter>p>a {\n    color: green;\n}`,"",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;;IAEI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,yDAAwD;IACxD,4BAA4B;IAC5B,wBAAwB;IACxB,sBAAsB;IACtB,sEAAsE;AAC1E;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;IACZ,uBAAuB;IACvB,YAAY;IACZ,sBAAsB;IACtB,oBAAoB;IACpB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,sEAAsE;IACtE,iBAAiB;IACjB,gBAAgB;IAChB,YAAY;IACZ,2BAA2B;IAC3B,mBAAmB;AACvB;;AAEA;;IAEI,eAAe;IACf,+BAA+B;IAC/B,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,uBAAuB;IACvB,YAAY;IACZ,eAAe;IACf,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,0BAA0B;IAC1B,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,uBAAuB;IACvB,YAAY;IACZ,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB",sourcesContent:["html,\nbody {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    background-image: url(/src/images/forest-restaurant.jpg);\n    background-attachment: fixed;\n    background-position: 50%;\n    background-size: cover;\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 100vh;\n}\n\nheader {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: white;\n    background-color: black;\n    opacity: 70%;\n    box-sizing: border-box;\n    padding-bottom: 15px;\n    font-size: 2rem;\n    font-weight: 900;\n}\n\nnav {\n    display: flex;\n    gap: 50px;\n}\n\nnav>button {\n    height: 40px;\n    width: 100px;\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n    font-size: 1.5rem;\n    font-weight: 900;\n    color: white;\n    background-color: darkgreen;\n    border-radius: 10px;\n}\n\nnav>button:hover,\nnav>button:focus {\n    cursor: pointer;\n    transition: all .2s ease-in-out;\n    transform: scale(1.1);\n}\n\nmain {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-sizing: border-box;\n    padding: 50px;\n}\n\nmain>.display {\n    min-height: 500px;\n    width: 800px;\n    background-color: black;\n    opacity: 70%;\n    padding: 0 50px;\n    box-sizing: border-box;\n    color: white;\n}\n\nmain.display>h1 {\n    text-align: center;\n    font-size: 3rem;\n    margin: 15px 0;\n}\n\nmain.display>p {\n    font-size: 2rem;\n    margin: 10px 0;\n}\n\nmain.display>.note {\n    font-size: 1rem;\n    font-weight: 900;\n    text-decoration: underline;\n    margin-top: 40px;\n}\n\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: black;\n    opacity: 70%;\n    color: white;\n    font-size: 1.5rem;\n    font-weight: 900;\n    height: 50px;\n}\n\nfooter>p>a {\n    color: green;\n}"],sourceRoot:""}]);const u=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var A=0;A<n.length;A++){var d=[].concat(n[A]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(r," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],A=o.base?s[0]+o.base:s[0],d=a[A]||0,l="".concat(A," ").concat(d);a[A]=d+1;var u=t(l),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(p);else{var m=r(p,o);o.byIndex=c,e.splice(c,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=o(n,r),A=0;A<a.length;A++){var d=t(a[A]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},514:(n,e,t)=>{n.exports=t.p+"9dab1ebb753038b40afb.jpg"}},f={};function h(n){var e=f[n];if(void 0!==e)return e.exports;var t=f[n]={id:n,exports:{}};return m[n](t,t.exports,h),t.exports}h.m=m,h.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return h.d(e,{a:e}),e},h.d=(n,e)=>{for(var t in e)h.o(e,t)&&!h.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},h.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),h.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;h.g.importScripts&&(n=h.g.location+"");var e=h.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&!n;)n=t[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),h.p=n})(),h.b=document.baseURI||self.location.href,h.nc=void 0,n=h(379),e=h.n(n),t=h(795),o=h.n(t),r=h(569),a=h.n(r),i=h(565),c=h.n(i),s=h(216),A=h.n(s),d=h(589),l=h.n(d),u=h(28),(p={}).styleTagTransform=l(),p.setAttributes=c(),p.insert=a().bind(null,"head"),p.domAPI=o(),p.insertStyleElement=A(),e()(u.Z,p),u.Z&&u.Z.locals&&u.Z.locals,function(){const n=document.querySelector("body"),e=document.createElement("div");e.setAttribute("id","content"),n.appendChild(e),e.append(function(){const n=document.createElement("header"),e=document.createElement("h1");e.textContent="Forest Hut";const t=document.createElement("nav"),o=document.createElement("button");o.classList.add("home"),o.textContent="Home";const r=document.createElement("button");r.classList.add("menu"),r.textContent="Menu";const a=document.createElement("button");return a.classList.add("contact"),a.textContent="Contact",n.appendChild(e),n.appendChild(t),t.append(o,r,a),n}(),function(){const n=document.createElement("main"),e=document.createElement("div");return e.classList.add("display"),n.appendChild(e),n}(),function(){const n=document.createElement("footer"),e=document.createElement("p");e.classList.add("copyright"),e.textContent="Copyright © 2023 ";const t=document.createElement("a");t.href="https://github.com/ValerioL94";const o=document.createElement("span");return o.textContent="ValerioL94",n.appendChild(e),e.appendChild(t),t.appendChild(o),n}())}(),function(){const n=document.querySelector(".display"),e=document.createElement("h1");e.textContent="Home";const t=document.createElement("p");t.textContent="Welcome to Forest Hut, a small piece of paradise in the middle of the forest!";const o=document.createElement("p");o.textContent="City life is stressing you? You miss the smell of fresh air and contact with nature? Say no more!";const r=document.createElement("p");r.textContent="Here at Forest Hut you can relax and taste our fabulous home-made dishes while enjoying the beautiful view of the lake.";const a=document.createElement("p");a.textContent="What are you waiting for? Come visit us anytime!";const i=document.createElement("p");i.textContent="Swimming and bathing in the lake are strictly prohibited",i.classList.add("note"),n.append(e,t,o,r,a,i)}()})();
//# sourceMappingURL=bundle.js.map