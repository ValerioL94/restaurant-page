(()=>{var e={28:(e,n,t)=>{"use strict";t.d(n,{Z:()=>m});var o=t(537),a=t.n(o),r=t(645),c=t.n(r),i=t(667),s=t.n(i),A=new URL(t(105),t.b),d=c()(a()),l=s()(A);d.push([e.id,`html,\nbody {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    background-image: url(${l});\n    background-attachment: fixed;\n    background-position: 50%;\n    background-size: cover;\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 100vh;\n}\n\nheader {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: white;\n    background-color: black;\n    opacity: 80%;\n    box-sizing: border-box;\n    padding-bottom: 10px;\n    font-size: 2rem;\n}\n\nnav {\n    display: flex;\n    gap: 50px;\n}\n\nnav>button {\n    height: 40px;\n    width: 100px;\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n    font-size: 1.5rem;\n    font-weight: 900;\n    color: white;\n    background-color: darkgreen;\n    border-radius: 10px;\n}\n\n.clickable:hover,\n.clickable:focus {\n    cursor: pointer;\n    transition: all .2s ease-in-out;\n    transform: scale(1.1);\n}\n\nmain {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-sizing: border-box;\n    padding: 50px;\n}\n\n#display {\n    min-height: 500px;\n    width: 800px;\n    background-color: black;\n    opacity: 70%;\n    padding: 0 50px;\n    box-sizing: border-box;\n    color: white;\n}\n\n/* home tab */\n\n.home>h1 {\n    text-align: center;\n    font-size: 3rem;\n    margin: 15px 0;\n}\n\n.home>p {\n    font-size: 2rem;\n    font-weight: 600;\n    margin: 10px 0;\n}\n\n.home>.note {\n    font-size: 1rem;\n    text-decoration: underline;\n    margin-top: 40px;\n}\n\n/* menu tab */\n\n#display.menu {\n    opacity: 80%;\n}\n\n.menu>h1 {\n    text-align: center;\n    font-size: 3rem;\n    font-weight: 600;\n}\n\n.menu>.container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    box-sizing: border-box;\n    padding-bottom: 50px;\n    gap: 50px;\n}\n\n.menu>.container>.dish {\n    height: 360px;\n    width: 250px;\n    text-align: center;\n    padding: 5px;\n    background-color: white;\n    color: black;\n    font-size: 1.1rem;\n    font-weight: 600;\n    position: sticky;\n    opacity: 100%;\n}\n\n.menu>.container>.dish>img {\n    height: 200px;\n    width: 250px;\n}\n\n/* contact tab */\n\n#display.contact {\n    opacity: 90%;\n}\n\n.contact>h1 {\n    text-align: center;\n    font-size: 3rem;\n}\n\n.contact>.container {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    box-sizing: border-box;\n    padding: 15px;\n    gap: 30px;\n}\n\n.contact>.container>.info {\n    display: flex;\n    flex-direction: column;\n    font-size: 1.1rem;\n}\n\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: black;\n    opacity: 70%;\n    color: white;\n    font-size: 1.5rem;\n    font-weight: 900;\n    height: 50px;\n}\n\nfooter>p>a {\n    color: green;\n}`,"",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;;IAEI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,yDAAwD;IACxD,4BAA4B;IAC5B,wBAAwB;IACxB,sBAAsB;IACtB,sEAAsE;AAC1E;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;IACZ,uBAAuB;IACvB,YAAY;IACZ,sBAAsB;IACtB,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,sEAAsE;IACtE,iBAAiB;IACjB,gBAAgB;IAChB,YAAY;IACZ,2BAA2B;IAC3B,mBAAmB;AACvB;;AAEA;;IAEI,eAAe;IACf,+BAA+B;IAC/B,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,uBAAuB;IACvB,YAAY;IACZ,eAAe;IACf,sBAAsB;IACtB,YAAY;AAChB;;AAEA,aAAa;;AAEb;IACI,kBAAkB;IAClB,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,0BAA0B;IAC1B,gBAAgB;AACpB;;AAEA,aAAa;;AAEb;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,sBAAsB;IACtB,oBAAoB;IACpB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,uBAAuB;IACvB,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;IAChB,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA,gBAAgB;;AAEhB;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,mBAAmB;IACnB,uBAAuB;IACvB,sBAAsB;IACtB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,uBAAuB;IACvB,YAAY;IACZ,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB",sourcesContent:["html,\nbody {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    background-image: url(/src/images/forest_restaurant.jpg);\n    background-attachment: fixed;\n    background-position: 50%;\n    background-size: cover;\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 100vh;\n}\n\nheader {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: white;\n    background-color: black;\n    opacity: 80%;\n    box-sizing: border-box;\n    padding-bottom: 10px;\n    font-size: 2rem;\n}\n\nnav {\n    display: flex;\n    gap: 50px;\n}\n\nnav>button {\n    height: 40px;\n    width: 100px;\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n    font-size: 1.5rem;\n    font-weight: 900;\n    color: white;\n    background-color: darkgreen;\n    border-radius: 10px;\n}\n\n.clickable:hover,\n.clickable:focus {\n    cursor: pointer;\n    transition: all .2s ease-in-out;\n    transform: scale(1.1);\n}\n\nmain {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-sizing: border-box;\n    padding: 50px;\n}\n\n#display {\n    min-height: 500px;\n    width: 800px;\n    background-color: black;\n    opacity: 70%;\n    padding: 0 50px;\n    box-sizing: border-box;\n    color: white;\n}\n\n/* home tab */\n\n.home>h1 {\n    text-align: center;\n    font-size: 3rem;\n    margin: 15px 0;\n}\n\n.home>p {\n    font-size: 2rem;\n    font-weight: 600;\n    margin: 10px 0;\n}\n\n.home>.note {\n    font-size: 1rem;\n    text-decoration: underline;\n    margin-top: 40px;\n}\n\n/* menu tab */\n\n#display.menu {\n    opacity: 80%;\n}\n\n.menu>h1 {\n    text-align: center;\n    font-size: 3rem;\n    font-weight: 600;\n}\n\n.menu>.container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    box-sizing: border-box;\n    padding-bottom: 50px;\n    gap: 50px;\n}\n\n.menu>.container>.dish {\n    height: 360px;\n    width: 250px;\n    text-align: center;\n    padding: 5px;\n    background-color: white;\n    color: black;\n    font-size: 1.1rem;\n    font-weight: 600;\n    position: sticky;\n    opacity: 100%;\n}\n\n.menu>.container>.dish>img {\n    height: 200px;\n    width: 250px;\n}\n\n/* contact tab */\n\n#display.contact {\n    opacity: 90%;\n}\n\n.contact>h1 {\n    text-align: center;\n    font-size: 3rem;\n}\n\n.contact>.container {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    box-sizing: border-box;\n    padding: 15px;\n    gap: 30px;\n}\n\n.contact>.container>.info {\n    display: flex;\n    flex-direction: column;\n    font-size: 1.1rem;\n}\n\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: black;\n    opacity: 70%;\n    color: white;\n    font-size: 1.5rem;\n    font-weight: 900;\n    height: 50px;\n}\n\nfooter>p>a {\n    color: green;\n}"],sourceRoot:""}]);const m=d},645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var A=0;A<e.length;A++){var d=[].concat(e[A]);o&&c[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),n.push(d))}},n}},667:e=>{"use strict";e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},537:e=>{"use strict";e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),r="/*# ".concat(a," */");return[n].concat([r]).join("\n")}return[n].join("\n")}},379:e=>{"use strict";var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var r={},c=[],i=0;i<e.length;i++){var s=e[i],A=o.base?s[0]+o.base:s[0],d=r[A]||0,l="".concat(A," ").concat(d);r[A]=d+1;var m=t(l),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)n[m].references++,n[m].updater(p);else{var u=a(p,o);o.byIndex=i,n.splice(i,0,{identifier:l,updater:u,references:1})}c.push(l)}return c}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var r=o(e=e||[],a=a||{});return function(e){e=e||[];for(var c=0;c<r.length;c++){var i=t(r[c]);n[i].references--}for(var s=o(e,a),A=0;A<r.length;A++){var d=t(r[A]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}r=s}}},569:e=>{"use strict";var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{"use strict";e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{"use strict";e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{"use strict";e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},977:(e,n,t)=>{var o={"./forest_restaurant.jpg":105,"./fruit_cake.jpg":78,"./hamburger_with_fries.jpg":626,"./pesto_pasta.jpg":847,"./salad.jpg":169,"./salmon.jpg":430,"./steak.jpg":540};function a(e){var n=r(e);return t(n)}function r(e){if(!t.o(o,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=r,e.exports=a,a.id=977},105:(e,n,t)=>{"use strict";e.exports=t.p+"images/forest_restaurant.jpg"},78:(e,n,t)=>{"use strict";e.exports=t.p+"images/fruit_cake.jpg"},626:(e,n,t)=>{"use strict";e.exports=t.p+"images/hamburger_with_fries.jpg"},847:(e,n,t)=>{"use strict";e.exports=t.p+"images/pesto_pasta.jpg"},169:(e,n,t)=>{"use strict";e.exports=t.p+"images/salad.jpg"},430:(e,n,t)=>{"use strict";e.exports=t.p+"images/salmon.jpg"},540:(e,n,t)=>{"use strict";e.exports=t.p+"images/steak.jpg"}},n={};function t(o){var a=n[o];if(void 0!==a)return a.exports;var r=n[o]={id:o,exports:{}};return e[o](r,r.exports,t),r.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&!e;)e=o[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{"use strict";const e=function(){const e=document.getElementById("display");if(""==e.className||"menu"==e.className||"contact"==e.classList){e.innerHTML="",e.className="home";const n=document.createElement("h1");n.textContent="HOME";const t=document.createElement("p");t.textContent="Welcome to Forest Hut, a small piece of paradise in the middle of the forest!";const o=document.createElement("p");o.textContent="City life is stressing you? You miss the smell of fresh air and contact with nature? Say no more!";const a=document.createElement("p");a.textContent="Here at Forest Hut you can relax and taste our fabulous home-made dishes while enjoying the beautiful view of the lake.";const r=document.createElement("p");r.textContent="What are you waiting for? Come visit us anytime!";const c=document.createElement("p");c.textContent="Swimming and bathing in the lake are strictly prohibited",c.classList.add("note"),e.append(n,t,o,a,r,c)}},n=function(){const e=document.getElementById("display");if("home"==e.className||"contact"==e.className){e.innerHTML="",e.className="menu";const n=document.createElement("h1");n.textContent="MENU";const t=document.createElement("div");t.classList.add("container");const o=document.createElement("div");o.classList.add("dish","clickable");const a=document.createElement("img");a.src="images/pesto_pasta.jpg",a.alt="pasta with pesto sauce";const r=document.createElement("h2");r.textContent="PESTO PASTA";const c=document.createElement("p");c.textContent="Delicious pasta with home-made pesto sauce";const i=document.createElement("div");i.classList.add("dish","clickable");const s=document.createElement("img");s.src="/images/salad.jpg",s.alt="fruit salad";const A=document.createElement("h2");A.textContent="FRUIT SALAD";const d=document.createElement("p");d.textContent="Fresh salad with fruits of your choice";const l=document.createElement("div");l.classList.add("dish","clickable");const m=document.createElement("img");m.src="/images/steak.jpg",m.alt="cooked beef steak";const p=document.createElement("h2");p.textContent="BEEF STEAK";const u=document.createElement("p");u.textContent="Beef steak, local meat only!";const f=document.createElement("div");f.classList.add("dish","clickable");const g=document.createElement("img");g.src="/images/salmon.jpg",g.alt="grilled salmon";const h=document.createElement("h2");h.textContent="GRILLED SALMON";const C=document.createElement("p");C.textContent="Fresh salmon, straight from the lake!";const b=document.createElement("div");b.classList.add("dish","clickable");const B=document.createElement("img");B.src="/images/fruit_cake.jpg",B.alt="fruit cake";const x=document.createElement("h2");x.textContent="FRUIT CAKE";const I=document.createElement("p");I.textContent="Home-made fruit cake";const y=document.createElement("div");y.classList.add("dish","clickable");const E=document.createElement("img");E.src="/images/hamburger_with_fries.jpg",E.alt="hamburger with french fries";const v=document.createElement("h2");v.textContent="HAMBURGER & FRIES";const w=document.createElement("p");w.textContent="Hamburger with french fries, perfect for kids!",e.append(n,t),t.append(o,i,l,f,b,y),o.append(a,r,c),i.append(s,A,d),l.append(m,p,u),f.append(g,h,C),b.append(B,x,I),y.append(E,v,w)}},o=function(){const e=document.getElementById("display");if("home"==e.className||"menu"==e.className){e.innerHTML="",e.className="contact";const n=document.createElement("h1");n.textContent="CONTACT INFO";const t=document.createElement("div");t.classList.add("container");const o=document.createElement("div");o.classList.add("info");const a=document.createElement("div"),r=document.createElement("h3");r.textContent="Telephone number";const c=document.createElement("p");c.textContent="555-8888-555";const i=document.createElement("div"),s=document.createElement("h3");s.textContent="Address";const A=document.createElement("p");A.textContent="Isle Royale, Michigan, USA";const d=document.createElement("div"),l=document.createElement("h3");l.textContent="Opening Hours";const m=document.createElement("p");m.textContent="Mon-Thurs: 8am-8pm";const p=document.createElement("p");p.textContent="Fri-Sun: 8am-11pm";const u=document.createElement("p");u.textContent="*Sundays by reservation only",u.style.fontWeight="600";const f=document.createElement("div"),g=document.createElement("iframe");g.src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d49775.798691976066!2d-88.82850838807937!3d48.003275526775724!3m2!1i1024!2i768!4f13.1!2m1!1sAmerica%2C%20forest!5e1!3m2!1sen!2sit!4v1703927932381!5m2!1sen!2sit",g.width="400",g.height="300",g.style="border:0;",g.allowfullscreen="",g.loading="lazy",g.referrerpolicy="no-referrer-when-downgrade",e.append(n,t),t.append(o,f),o.append(a,i,d),a.append(r,c),i.append(s,A),d.append(l,m,p,u),f.appendChild(g)}};var a,r=t(379),c=t.n(r),i=t(795),s=t.n(i),A=t(569),d=t.n(A),l=t(565),m=t.n(l),p=t(216),u=t.n(p),f=t(589),g=t.n(f),h=t(28),C={};C.styleTagTransform=g(),C.setAttributes=m(),C.insert=d().bind(null,"head"),C.domAPI=s(),C.insertStyleElement=u(),c()(h.Z,C),h.Z&&h.Z.locals&&h.Z.locals,(a=t(977)).keys().forEach(a),function(){const e=document.querySelector("body"),n=document.createElement("div");n.setAttribute("id","content"),e.appendChild(n),n.append(function(){const e=document.createElement("header"),n=document.createElement("h1");n.textContent="Forest Hut";const t=document.createElement("nav"),o=document.createElement("button");o.setAttribute("id","home"),o.classList.add("clickable"),o.textContent="Home";const a=document.createElement("button");a.setAttribute("id","menu"),a.classList.add("clickable"),a.textContent="Menu";const r=document.createElement("button");return r.setAttribute("id","contact"),r.classList.add("clickable"),r.textContent="Contact",e.appendChild(n),e.appendChild(t),t.append(o,a,r),e}(),function(){const e=document.createElement("main"),n=document.createElement("div");return n.setAttribute("id","display"),e.appendChild(n),e}(),function(){const e=document.createElement("footer"),n=document.createElement("p");n.classList.add("copyright"),n.textContent="Copyright © 2023 ";const t=document.createElement("a");t.href="https://github.com/ValerioL94";const o=document.createElement("span");return o.textContent="ValerioL94",e.appendChild(n),n.appendChild(t),t.appendChild(o),e}())}(),e(),function(){const t=document.getElementById("home"),a=document.getElementById("menu"),r=document.getElementById("contact");t.addEventListener("click",e),a.addEventListener("click",n),r.addEventListener("click",o)}()})()})();
//# sourceMappingURL=bundle.js.map