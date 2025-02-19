!function(){"use strict";class e{constructor(e){this.init(e)}init(e){this.menuToggle=e.querySelector(".nav-primary__menu-toggle"),this.searchToggle=e.querySelector(".nav-primary__search-toggle"),this.searchLabel=e.querySelector(".search-toggle__label"),this.searchBlock=e.querySelector(".uq-header__search"),this.searchInput=e.querySelector(".uq-header__search-query-input"),this.menuToggle.addEventListener("click",(()=>{document.body.classList.toggle("no-scroll"),this.menuToggle.classList.toggle("nav-primary__menu-toggle--is-open"),this.searchToggle.classList.remove("nav-primary__search-toggle--is-open"),this.searchBlock.classList.remove("uq-header__search--is-open"),this.searchLabel.innerHTML="Search"})),this.searchToggle.addEventListener("click",(e=>{document.body.classList.remove("no-scroll"),this.searchToggle.classList.toggle("nav-primary__search-toggle--is-open"),this.searchBlock.classList.toggle("uq-header__search--is-open"),this.menuToggle.classList.remove("nav-primary__menu-toggle--is-open"),this.searchBlock.classList.contains("uq-header__search--is-open")?this.searchInput.focus():(this.searchInput.blur(),this.searchToggle.blur()),"Search"===this.searchLabel.innerHTML?this.searchLabel.innerHTML="Close":this.searchLabel.innerHTML="Search",e.preventDefault()}));document.querySelectorAll(".uq-header__nav-primary-item").forEach((e=>{e.addEventListener("mouseenter",this.handleToggle),e.addEventListener("mouseleave",this.handleToggle)}))}handleToggle(e){let t=e.target;"LI"!==t.tagName&&(t=t.parentElement),t.eventType=e.type,window.setTimeout((function(){("mouseenter"!==e.type&&"mouseleave"!==e.type||!window.matchMedia("(max-width: 1024px)").matches)&&("mouseenter"===t.eventType?t.classList.add("uq-header__nav-primary-item--is-open"):t.classList.remove("uq-header__nav-primary-item--is-open"))}),250)}}!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=59)}([function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||Function("return this")()}).call(this,n(32))},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){var r=n(1);e.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){var r=n(3),i=n(18),o=n(13);e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var r=n(4);e.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e}},function(e,t,n){var r=n(14),i=n(8);e.exports=function(e){return r(i(e))}},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},function(e,t,n){var r=n(0),i=n(5);e.exports=function(e,t){try{i(r,e,t)}catch(n){r[e]=t}return t}},function(e,t,n){var r=n(0),i=n(11).f,o=n(5),s=n(19),a=n(9),l=n(38),c=n(46);e.exports=function(e,t){var n,u,h,f,d,p=e.target,v=e.global,g=e.stat;if(n=v?r:g?r[p]||a(p,{}):(r[p]||{}).prototype)for(u in t){if(f=t[u],h=e.noTargetGet?(d=i(n,u))&&d.value:n[u],!c(v?u:p+(g?".":"#")+u,e.forced)&&void 0!==h){if(typeof f==typeof h)continue;l(f,h)}(e.sham||h&&h.sham)&&o(f,"sham",!0),s(n,u,f,e)}}},function(e,t,n){var r=n(3),i=n(12),o=n(13),s=n(7),a=n(16),l=n(2),c=n(17),u=Object.getOwnPropertyDescriptor;t.f=r?u:function(e,t){if(e=s(e),t=a(t,!0),c)try{return u(e,t)}catch(e){}if(l(e,t))return o(!i.f.call(e,t),e[t])}},function(e,t,n){var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);t.f=o?function(e){var t=i(this,e);return!!t&&t.enumerable}:r},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){var r=n(1),i=n(15),o="".split;e.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==i(e)?o.call(e,""):Object(e)}:Object},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){var r=n(4);e.exports=function(e,t){if(!r(e))return e;var n,i;if(t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;if("function"==typeof(n=e.valueOf)&&!r(i=n.call(e)))return i;if(!t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},function(e,t,n){var r=n(3),i=n(1),o=n(33);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},function(e,t,n){var r=n(3),i=n(17),o=n(6),s=n(16),a=Object.defineProperty;t.f=r?a:function(e,t,n){if(o(e),t=s(t,!0),o(n),i)try{return a(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var r=n(0),i=n(5),o=n(2),s=n(9),a=n(20),l=n(34),c=l.get,u=l.enforce,h=String(String).split("String");(e.exports=function(e,t,n,a){var l=!!a&&!!a.unsafe,c=!!a&&!!a.enumerable,f=!!a&&!!a.noTargetGet;"function"==typeof n&&("string"!=typeof t||o(n,"name")||i(n,"name",t),u(n).source=h.join("string"==typeof t?t:"")),e!==r?(l?!f&&e[t]&&(c=!0):delete e[t],c?e[t]=n:i(e,t,n)):c?e[t]=n:s(t,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&c(this).source||a(this)}))},function(e,t,n){var r=n(21),i=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(e){return i.call(e)}),e.exports=r.inspectSource},function(e,t,n){var r=n(0),i=n(9),o=r["__core-js_shared__"]||i("__core-js_shared__",{});e.exports=o},function(e,t,n){var r=n(37),i=n(21);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.1",mode:r?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++n+r).toString(36)}},function(e,t){e.exports={}},function(e,t,n){var r=n(2),i=n(7),o=n(43).indexOf,s=n(24);e.exports=function(e,t){var n,a=i(e),l=0,c=[];for(n in a)!r(s,n)&&r(a,n)&&c.push(n);for(;t.length>l;)r(a,n=t[l++])&&(~o(c,n)||c.push(n));return c}},function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t,n){var r=n(0),i=n(22),o=n(2),s=n(23),a=n(30),l=n(55),c=i("wks"),u=r.Symbol,h=l?u:u&&u.withoutSetter||s;e.exports=function(e){return o(c,e)||(a&&o(u,e)?c[e]=u[e]:c[e]=h("Symbol."+e)),c[e]}},function(e,t,n){var r=n(1);e.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(e,t,n){var r=n(10),i=n(47);r({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){var r=n(0),i=n(4),o=r.document,s=i(o)&&i(o.createElement);e.exports=function(e){return s?o.createElement(e):{}}},function(e,t,n){var r,i,o,s=n(35),a=n(0),l=n(4),c=n(5),u=n(2),h=n(36),f=n(24),d=a.WeakMap;if(s){var p=new d,v=p.get,g=p.has,m=p.set;r=function(e,t){return m.call(p,e,t),t},i=function(e){return v.call(p,e)||{}},o=function(e){return g.call(p,e)}}else{var y=h("state");f[y]=!0,r=function(e,t){return c(e,y,t),t},i=function(e){return u(e,y)?e[y]:{}},o=function(e){return u(e,y)}}e.exports={set:r,get:i,has:o,enforce:function(e){return o(e)?i(e):r(e,{})},getterFor:function(e){return function(t){var n;if(!l(t)||(n=i(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}}},function(e,t,n){var r=n(0),i=n(20),o=r.WeakMap;e.exports="function"==typeof o&&/native code/.test(i(o))},function(e,t,n){var r=n(22),i=n(23),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},function(e,t){e.exports=!1},function(e,t,n){var r=n(2),i=n(39),o=n(11),s=n(18);e.exports=function(e,t){for(var n=i(t),a=s.f,l=o.f,c=0;c<n.length;c++){var u=n[c];r(e,u)||a(e,u,l(t,u))}}},function(e,t,n){var r=n(40),i=n(42),o=n(28),s=n(6);e.exports=r("Reflect","ownKeys")||function(e){var t=i.f(s(e)),n=o.f;return n?t.concat(n(e)):t}},function(e,t,n){var r=n(41),i=n(0),o=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e])||o(i[e]):r[e]&&r[e][t]||i[e]&&i[e][t]}},function(e,t,n){var r=n(0);e.exports=r},function(e,t,n){var r=n(25),i=n(27).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,i)}},function(e,t,n){var r=n(7),i=n(44),o=n(45),s=function(e){return function(t,n,s){var a,l=r(t),c=i(l.length),u=o(s,c);if(e&&n!=n){for(;c>u;)if((a=l[u++])!=a)return!0}else for(;c>u;u++)if((e||u in l)&&l[u]===n)return e||u||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},function(e,t,n){var r=n(26),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},function(e,t,n){var r=n(26),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},function(e,t,n){var r=n(1),i=/#|\.prototype\./,o=function(e,t){var n=a[s(e)];return n==c||n!=l&&("function"==typeof t?r(t):!!t)},s=o.normalize=function(e){return String(e).replace(i,".").toLowerCase()},a=o.data={},l=o.NATIVE="N",c=o.POLYFILL="P";e.exports=o},function(e,t,n){var r=n(3),i=n(1),o=n(48),s=n(28),a=n(12),l=n(49),c=n(14),u=Object.assign,h=Object.defineProperty;e.exports=!u||i((function(){if(r&&1!==u({b:1},u(h({},"a",{enumerable:!0,get:function(){h(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol();return e[n]=7,"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),7!=u({},e)[n]||"abcdefghijklmnopqrst"!=o(u({},t)).join("")}))?function(e,t){for(var n=l(e),i=arguments.length,u=1,h=s.f,f=a.f;i>u;)for(var d,p=c(arguments[u++]),v=h?o(p).concat(h(p)):o(p),g=v.length,m=0;g>m;)d=v[m++],r&&!f.call(p,d)||(n[d]=p[d]);return n}:u},function(e,t,n){var r=n(25),i=n(27);e.exports=Object.keys||function(e){return r(e,i)}},function(e,t,n){var r=n(8);e.exports=function(e){return Object(r(e))}},function(e,t,n){var r=n(19),i=n(6),o=n(1),s=n(51),a=RegExp.prototype,l=a.toString,c=o((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),u="toString"!=l.name;(c||u)&&r(RegExp.prototype,"toString",(function(){var e=i(this),t=String(e.source),n=e.flags;return"/"+t+"/"+String(void 0===n&&e instanceof RegExp&&!("flags"in a)?s.call(e):n)}),{unsafe:!0})},function(e,t,n){var r=n(6);e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},function(e,t,n){var r=n(10),i=n(53),o=n(8);r({target:"String",proto:!0,forced:!n(56)("includes")},{includes:function(e){return!!~String(o(this)).indexOf(i(e),arguments.length>1?arguments[1]:void 0)}})},function(e,t,n){var r=n(54);e.exports=function(e){if(r(e))throw TypeError("The method doesn't accept regular expressions");return e}},function(e,t,n){var r=n(4),i=n(15),o=n(29)("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==i(e))}},function(e,t,n){var r=n(30);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(e,t,n){var r=n(29)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,"/./"[e](t)}catch(e){}}return!1}},function(e,t,n){},,function(e,t,n){var r,i,o;function s(e,t,n){const r=[];for(;e&&null!==e.parentElement&&(void 0===n||r.length<n);)e instanceof HTMLElement&&e.matches(t)&&r.push(e),e=e.parentElement;return r}function a(e,t){const n=s(e,t,1);return n.length?n[0]:null}n.r(t),n(31),n(50),n(52),n(57),function(e){e[e.Backward=-1]="Backward",e[e.Forward=1]="Forward"}(r||(r={})),function(e){e.Left="left",e.Right="right"}(i||(i={})),function(e){e.Back="back",e.Close="close",e.Forward="forward",e.Navigate="navigate",e.Open="open"}(o||(o={}));const l={backLinkAfter:"",backLinkBefore:"",keyClose:"",keyOpen:"",position:"right",showBackLink:!0,submenuLinkAfter:"",submenuLinkBefore:""};class c{constructor(e,t){if(this.level=0,this.isOpen=!1,this.isAnimating=!1,this.lastAction=null,null===e)throw new Error("Argument `elem` must be a valid HTML node");this.options=Object.assign({},l,t),this.menuElem=e,this.wrapperElem=document.createElement("div"),this.wrapperElem.classList.add(c.CLASS_NAMES.wrapper);const n=this.menuElem.querySelector("ul");n&&function(e,t){if(null===e.parentElement)throw Error("`elem` has no parentElement");e.parentElement.insertBefore(t,e),t.appendChild(e)}(n,this.wrapperElem),this.initMenu(),this.initSubmenus(),this.initEventHandlers(),this.menuElem._slideMenu=this}toggle(e){let t,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(void 0===e)return this.isOpen?this.close(n):this.open(n);if(t=e?0:this.options.position===i.Left?"-100%":"100%",this.isOpen=e,n)this.moveSlider(this.menuElem,t);else{const e=this.moveSlider.bind(this,this.menuElem,t);this.runWithoutAnimation(e)}}open(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.triggerEvent(o.Open),this.toggle(!0,e)}close(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.triggerEvent(o.Close),this.toggle(!1,e)}back(){this.navigate(r.Backward)}destroy(){const{submenuLinkAfter:e,submenuLinkBefore:t,showBackLink:n}=this.options;(e||t)&&Array.from(this.wrapperElem.querySelectorAll(".".concat(c.CLASS_NAMES.decorator))).forEach((e=>{e.parentElement&&e.parentElement.removeChild(e)})),n&&Array.from(this.wrapperElem.querySelectorAll(".".concat(c.CLASS_NAMES.control))).forEach((e=>{const t=a(e,"li");t&&t.parentElement&&t.parentElement.removeChild(t)})),function(e){const t=e.parentElement;if(null===t)throw Error("`elem` has no parentElement");for(;e.firstChild;)t.insertBefore(e.firstChild,e);t.removeChild(e)}(this.wrapperElem),this.menuElem.style.cssText="",this.menuElem.querySelectorAll("ul").forEach((e=>e.style.cssText="")),delete this.menuElem._slideMenu}navigateTo(e){if(this.triggerEvent(o.Navigate),"string"==typeof e){const t=document.querySelector(e);if(!(t instanceof HTMLElement))throw new Error("Invalid parameter `target`. A valid query selector is required.");e=t}Array.from(this.wrapperElem.querySelectorAll(".".concat(c.CLASS_NAMES.active))).forEach((e=>{e.style.display="none",e.classList.remove(c.CLASS_NAMES.active)}));const t=s(e,"ul"),n=t.length-1;n>=0&&n!==this.level&&(this.level=n,this.moveSlider(this.wrapperElem,100*-this.level)),t.forEach((e=>{e.style.display="block",e.classList.add(c.CLASS_NAMES.active)}))}initEventHandlers(){Array.from(this.menuElem.querySelectorAll("a")).forEach((e=>e.addEventListener("click",(e=>{const t=e.target,n=t.matches("a")?t:a(t,"a");n&&this.navigate(r.Forward,n)})))),this.menuElem.addEventListener("transitionend",this.onTransitionEnd.bind(this)),this.wrapperElem.addEventListener("transitionend",this.onTransitionEnd.bind(this)),this.initKeybindings(),this.initSubmenuVisibility()}onTransitionEnd(e){e.target!==this.menuElem&&e.target!==this.wrapperElem||(this.isAnimating=!1,this.lastAction&&(this.triggerEvent(this.lastAction,!0),this.lastAction=null))}initKeybindings(){document.addEventListener("keydown",(e=>{switch(e.key){case this.options.keyClose:this.close();break;case this.options.keyOpen:this.open();break;default:return}e.preventDefault()}))}initSubmenuVisibility(){this.menuElem.addEventListener("sm.back-after",(()=>{const e=".".concat(c.CLASS_NAMES.active," ").repeat(this.level+1),t=this.menuElem.querySelector("ul ".concat(e));t&&(t.style.display="none",t.classList.remove(c.CLASS_NAMES.active))}))}triggerEvent(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.lastAction=e;const n="sm.".concat(e).concat(t?"-after":""),r=new CustomEvent(n);this.menuElem.dispatchEvent(r)}navigate(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.Forward,t=arguments.length>1?arguments[1]:void 0;if(this.isAnimating||e===r.Backward&&0===this.level)return;const n=-100*(this.level+e);if(t&&null!==t.parentElement&&e===r.Forward){const e=t.parentElement.querySelector("ul");if(!e)return;e.classList.add(c.CLASS_NAMES.active),e.style.display="block"}const i=e===r.Forward?o.Forward:o.Back;this.triggerEvent(i),this.level=this.level+e,this.moveSlider(this.wrapperElem,n)}moveSlider(e,t){t.toString().includes("%")||(t+="%"),e.style.transform="translateX(".concat(t,")"),this.isAnimating=!0}initMenu(){this.runWithoutAnimation((()=>{if(this.options.position===i.Left)Object.assign(this.menuElem.style,{left:0,right:"auto",transform:"translateX(-100%)"});else Object.assign(this.menuElem.style,{left:"auto",right:0});this.menuElem.style.display="block"}))}runWithoutAnimation(e){const t=[this.menuElem,this.wrapperElem];t.forEach((e=>e.style.transition="none")),e(),this.menuElem.offsetHeight,t.forEach((e=>e.style.removeProperty("transition"))),this.isAnimating=!1}initSubmenus(){this.menuElem.querySelectorAll("a").forEach((e=>{if(null===e.parentElement)return;const t=e.parentElement.querySelector("ul");if(!t)return;e.addEventListener("click",(e=>{e.preventDefault()}));const n=e.textContent;if(this.addLinkDecorators(e),this.options.showBackLink){const{backLinkBefore:e,backLinkAfter:r}=this.options,i=document.createElement("a");i.innerHTML=e+n+r,i.classList.add(c.CLASS_NAMES.backlink,c.CLASS_NAMES.control),i.setAttribute("data-action",o.Back);const s=document.createElement("li");s.appendChild(i),t.insertBefore(s,t.firstChild)}}))}addLinkDecorators(e){const{submenuLinkBefore:t,submenuLinkAfter:n}=this.options;if(t){const n=document.createElement("span");n.classList.add(c.CLASS_NAMES.decorator),n.innerHTML=t,e.insertBefore(n,e.firstChild)}if(n){const t=document.createElement("span");t.classList.add(c.CLASS_NAMES.decorator),t.innerHTML=n,e.appendChild(t)}return e}}c.NAMESPACE="slide-menu",c.CLASS_NAMES={active:"".concat(c.NAMESPACE,"__submenu--active"),backlink:"".concat(c.NAMESPACE,"__backlink"),control:"".concat(c.NAMESPACE,"__control"),decorator:"".concat(c.NAMESPACE,"__decorator"),wrapper:"".concat(c.NAMESPACE,"__slider")},document.addEventListener("click",(e=>{if(!(e.target instanceof HTMLElement))return;const t=e.target.className.includes(c.CLASS_NAMES.control)?e.target:a(e.target,".".concat(c.CLASS_NAMES.control));if(!t||!t.className.includes(c.CLASS_NAMES.control))return;const n=t.getAttribute("data-target"),r=n&&"this"!==n?document.getElementById(n):a(t,".".concat(c.NAMESPACE));if(!r)throw new Error("Unable to find menu ".concat(n));const i=r._slideMenu,o=t.getAttribute("data-action"),s=t.getAttribute("data-arg");i&&o&&"function"==typeof i[o]&&(s?i[o](s):i[o]())})),window.SlideMenu=c}]);class t{constructor(e,t){this.nav=e,this.navClass=t,this.toggleClass="jsNavToggle",this.openModifier="".concat(this.navClass,"__list--open"),this.levelOpenModifier="".concat(this.navClass,"__list-item--open"),this.level1Class="".concat(this.navClass,"__list--level-1"),this.level2Class="".concat(this.navClass,"__list--level-2"),this.reverseClass="".concat(this.navClass,"__list--reverse"),this.subNavClass="".concat(this.navClass,"__list-item--has-subnav"),this.subToggleClass="".concat(this.navClass,"__sub-toggle"),this.init=this.init.bind(this),this.handleToggle=this.handleToggle.bind(this),this.handleMobileToggle=this.handleMobileToggle.bind(this),this.setOrientation=this.setOrientation.bind(this),this.handleKeyPress=this.handleKeyPress.bind(this),this.init()}init(){const e=document.querySelector(".".concat(this.toggleClass)),t=this.nav.querySelectorAll(".".concat(this.subNavClass)),n=this.nav.querySelectorAll(".".concat(this.subNavClass," > a")),r=this.nav.querySelectorAll(".".concat(this.level2Class," .").concat(this.subNavClass)),i=this.nav.querySelectorAll(".".concat(this.level2Class," .").concat(this.subNavClass," > a")),o=this.nav.querySelectorAll("li > a"),s=this.nav.querySelectorAll(".".concat(this.subToggleClass));e.addEventListener("click",this.handleMobileToggle),t.forEach((e=>{this.setOrientation(e),e.addEventListener("mouseenter",this.handleToggle),e.addEventListener("mouseleave",this.handleToggle)})),n.forEach((e=>{window.matchMedia("(min-width: 1024px)").matches&&e.addEventListener("touchend",this.handleToggle)})),r.forEach((e=>{this.setOrientation(e),e.addEventListener("mouseenter",this.handleToggle),e.addEventListener("mouseleave",this.handleToggle)})),i.forEach((e=>{e.addEventListener("touchend",this.handleToggle)})),o.forEach((e=>{e.addEventListener("keydown",this.handleKeyPress)})),s.forEach((e=>{e.addEventListener("click",this.handleToggle)}))}handleMobileToggle(e){const t=e.target,n=this.nav.querySelectorAll(".".concat(this.level1Class)),r="true"===t.getAttribute("aria-expanded"),i="true"===t.getAttribute("aria-pressed");t.classList.toggle("".concat(this.navClass,"-toggle--close")),t.setAttribute("aria-expanded",!r),t.setAttribute("aria-pressed",!i),n.forEach((e=>{e.classList.toggle(this.openModifier),e.setAttribute("aria-expanded",!r),e.setAttribute("aria-pressed",!i)}))}handleToggle(e){if(("mouseenter"===e.type||"mouseleave"===e.type)&&window.matchMedia("(max-width: 1024px)").matches)return;let t=e.target;"LI"!==t.tagName&&(t=t.parentElement);const n=t.querySelector("ul");n.classList.contains(this.openModifier)?this.closeLevel(n,t):("touchend"===e.type&&e.preventDefault(),this.closeAllLevels(),this.openLevel(n,t))}openLevel(e,t){e.classList.add(this.openModifier),t.classList.add(this.levelOpenModifier),t.querySelector("a").setAttribute("aria-expanded","true"),t.querySelector("button").setAttribute("aria-expanded","true"),t.querySelector("button").setAttribute("aria-pressed","true")}closeLevel(e,t){e.classList.remove(this.openModifier),this.setOrientation(t),t.classList.remove(this.levelOpenModifier),t.querySelector("a").setAttribute("aria-expanded","false"),t.querySelector("button").setAttribute("aria-expanded","false"),t.querySelector("button").setAttribute("aria-pressed","false"),t.parentNode.querySelector("ul").setAttribute("aria-expanded","false"),t.parentNode.querySelector("ul").setAttribute("aria-pressed","false")}closeNav(e){e.classList.remove(this.openModifier),e.parentNode.querySelector("ul").setAttribute("aria-expanded","false"),e.parentNode.querySelector("ul").setAttribute("aria-pressed","false")}closeAllLevels(){this.nav.querySelectorAll(".".concat(this.subNavClass)).forEach((e=>{const t=e.querySelector(".".concat(this.level2Class));this.closeLevel(t,e)}))}setOrientation(e){const t=e.querySelector(".".concat(this.level2Class)),{reverseClass:n}=this;let r=0;t&&t.getBoundingClientRect()&&(r=t.getBoundingClientRect().right),window.innerWidth<r&&t.classList.add(n)}handleKeyPress(e){const t=e.currentTarget.parentNode,n=t.parentNode,r=document.querySelector(".".concat(this.toggleClass));switch(t===n.firstElementChild?"Tab"===e.key&&!0===e.shiftKey&&(n.classList.contains(this.level2Class)?(this.closeLevel(n,n.parentNode,subNav),n.parentNode.classList.remove(this.levelOpenModifier)):(this.closeNav(n),r.classList.toggle("".concat(this.navClass,"-toggle--close")),r.setAttribute("aria-expanded","false"),r.setAttribute("aria-pressed","false"))):t===n.lastElementChild&&"Tab"===e.key&&!1===e.shiftKey&&(n.classList.contains(this.level2Class)?(this.closeLevel(n,n.parentNode),n.parentNode.classList.remove(this.levelOpenModifier)):(this.closeNav(n),r.classList.toggle("".concat(this.navClass,"-toggle--close")),r.setAttribute("aria-expanded","false"),r.setAttribute("aria-pressed","false"))),e.keyCode){case 32:case 37:case 38:case 39:case 40:e.preventDefault(),this.handleToggle(e)}}}((n,r)=>{let{SlideMenu:i}=r;n.behaviors.newHeader={attach:n=>{(t=>{t.querySelector(".nav-primary__menu-toggle")&&t.querySelector(".nav-primary__search-toggle")&&t.querySelector(".search-toggle__label")&&t.querySelector(".uq-header__search")&&t.querySelector(".uq-header__search-query-input")&&new e(t.querySelector(".uq-header"))})(n),(e=>{const t=document.getElementById("global-mobile-nav");if(e.querySelector("#global-mobile-nav")){const e=new i(t,{position:"left",submenuLinkAfter:" ",backLinkBefore:" "});document.querySelector(".nav-primary__search-toggle").addEventListener("click",(()=>{e.close()}))}document.querySelectorAll(".slide-menu__backlink, .global-mobile-nav__audience-link").forEach((e=>{e.addEventListener("click",(()=>{document.querySelector(".global-mobile-nav").scrollTop=0}))}))})(n),(e=>{const n=e.querySelector("#jsNav");n&&new t(n,"uq-site-header__navigation")})(n);const r=()=>{document.documentElement.style.setProperty("--app-height","".concat(window.innerHeight,"px"))};window.addEventListener("resize",r),r()}}})(Drupal,window)}();
