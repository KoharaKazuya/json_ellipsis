!function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=20)}([function(t,e,i){"use strict";i.d(e,"d",(function(){return N})),i.d(e,"b",(function(){return _})),i.d(e,"a",(function(){return f})),i.d(e,"c",(function(){return s}));var s,n,r,a,o,l={},d=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;function h(t,e){for(var i in e)t[i]=e[i];return t}function u(t){var e=t.parentNode;e&&e.removeChild(t)}function _(t,e,i){var s,n,r,a,o=arguments;if(e=h({},e),arguments.length>3)for(i=[i],s=3;s<arguments.length;s++)i.push(o[s]);if(null!=i&&(e.children=i),null!=t&&null!=t.defaultProps)for(n in t.defaultProps)void 0===e[n]&&(e[n]=t.defaultProps[n]);return a=e.key,null!=(r=e.ref)&&delete e.ref,null!=a&&delete e.key,p(t,e,a,r)}function p(t,e,i,n){var r={type:t,props:e,key:i,ref:n,__k:null,__p:null,__b:0,__e:null,l:null,__c:null,constructor:void 0};return s.vnode&&s.vnode(r),r}function m(t){return t.children}function f(t,e){this.props=t,this.context=e}function g(t,e){if(null==e)return t.__p?g(t.__p,t.__p.__k.indexOf(t)+1):null;for(var i;e<t.__k.length;e++)if(null!=(i=t.__k[e])&&null!=i.__e)return i.__e;return"function"==typeof t.type?g(t):null}function v(t){var e,i;if(null!=(t=t.__p)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(i=t.__k[e])&&null!=i.__e){t.__e=t.__c.base=i.__e;break}return v(t)}}function b(t){(!t.__d&&(t.__d=!0)&&1===n.push(t)||a!==s.debounceRendering)&&(a=s.debounceRendering,(s.debounceRendering||r)(C))}function C(){var t,e,i,s,r,a,o;for(n.sort((function(t,e){return e.__v.__b-t.__v.__b}));t=n.pop();)t.__d&&(i=void 0,s=void 0,a=(r=(e=t).__v).__e,(o=e.__P)&&(i=[],s=O(o,r,h({},r),e.__n,void 0!==o.ownerSVGElement,null,i,null==a?g(r):a),S(i,r),s!=a&&v(r)))}function A(t,e,i,s,n,r,a,o,c){var h,_,p,m,f,v,b,C=i&&i.__k||d,A=C.length;if(o==l&&(o=null!=r?r[0]:A?g(i,0):null),h=0,e.__k=E(e.__k,(function(i){if(null!=i){if(i.__p=e,i.__b=e.__b+1,null===(p=C[h])||p&&i.key==p.key&&i.type===p.type)C[h]=void 0;else for(_=0;_<A;_++){if((p=C[_])&&i.key==p.key&&i.type===p.type){C[_]=void 0;break}p=null}if(m=O(t,i,p=p||l,s,n,r,a,o,c),(_=i.ref)&&p.ref!=_&&(b||(b=[])).push(_,i.__c||m,i),null!=m){if(null==v&&(v=m),null!=i.l)m=i.l,i.l=null;else if(r==p||m!=o||null==m.parentNode){t:if(null==o||o.parentNode!==t)t.appendChild(m);else{for(f=o,_=0;(f=f.nextSibling)&&_<A;_+=2)if(f==m)break t;t.insertBefore(m,o)}"option"==e.type&&(t.value="")}o=m.nextSibling,"function"==typeof e.type&&(e.l=m)}}return h++,i})),e.__e=v,null!=r&&"function"!=typeof e.type)for(h=r.length;h--;)null!=r[h]&&u(r[h]);for(h=A;h--;)null!=C[h]&&H(C[h],C[h]);if(b)for(h=0;h<b.length;h++)L(b[h],b[++h],b[++h])}function E(t,e,i){if(null==i&&(i=[]),null==t||"boolean"==typeof t)e&&i.push(e(null));else if(Array.isArray(t))for(var s=0;s<t.length;s++)E(t[s],e,i);else i.push(e?e(function(t){if(null==t||"boolean"==typeof t)return null;if("string"==typeof t||"number"==typeof t)return p(null,t,null,null);if(null!=t.__e||null!=t.__c){var e=p(t.type,t.props,t.key,null);return e.__e=t.__e,e}return t}(t)):t);return i}function T(t,e,i){"-"===e[0]?t.setProperty(e,i):t[e]="number"==typeof i&&!1===c.test(e)?i+"px":null==i?"":i}function I(t,e,i,s,n){var r,a,o,l,d;if("key"===(e=n?"className"===e?"class":e:"class"===e?"className":e)||"children"===e);else if("style"===e)if(r=t.style,"string"==typeof i)r.cssText=i;else{if("string"==typeof s&&(r.cssText="",s=null),s)for(a in s)i&&a in i||T(r,a,"");if(i)for(o in i)s&&i[o]===s[o]||T(r,o,i[o])}else"o"===e[0]&&"n"===e[1]?(l=e!==(e=e.replace(/Capture$/,"")),d=e.toLowerCase(),e=(d in t?d:e).slice(2),i?(s||t.addEventListener(e,y,l),(t.u||(t.u={}))[e]=i):t.removeEventListener(e,y,l)):"list"!==e&&"tagName"!==e&&"form"!==e&&!n&&e in t?t[e]=null==i?"":i:"function"!=typeof i&&"dangerouslySetInnerHTML"!==e&&(e!==(e=e.replace(/^xlink:?/,""))?null==i||!1===i?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),i):null==i||!1===i?t.removeAttribute(e):t.setAttribute(e,i))}function y(t){return this.u[t.type](s.event?s.event(t):t)}function O(t,e,i,n,r,a,o,l,d){var c,u,_,p,g,v,b,C,T,I,y=e.type;if(void 0!==e.constructor)return null;(c=s.__b)&&c(e);try{t:if("function"==typeof y){if(C=e.props,T=(c=y.contextType)&&n[c.__c],I=c?T?T.props.value:c.__p:n,i.__c?b=(u=e.__c=i.__c).__p=u.__E:("prototype"in y&&y.prototype.render?e.__c=u=new y(C,I):(e.__c=u=new f(C,I),u.constructor=y,u.render=D),T&&T.sub(u),u.props=C,u.state||(u.state={}),u.context=I,u.__n=n,_=u.__d=!0,u.__h=[]),null==u.__s&&(u.__s=u.state),null!=y.getDerivedStateFromProps&&h(u.__s==u.state?u.__s=h({},u.__s):u.__s,y.getDerivedStateFromProps(C,u.__s)),_)null==y.getDerivedStateFromProps&&null!=u.componentWillMount&&u.componentWillMount(),null!=u.componentDidMount&&o.push(u);else{if(null==y.getDerivedStateFromProps&&null==u.t&&null!=u.componentWillReceiveProps&&u.componentWillReceiveProps(C,I),!u.t&&null!=u.shouldComponentUpdate&&!1===u.shouldComponentUpdate(C,u.__s,I)){for(u.props=C,u.state=u.__s,u.__d=!1,u.__v=e,e.__e=i.__e,e.__k=i.__k,c=0;c<e.__k.length;c++)e.__k[c]&&(e.__k[c].__p=e);break t}null!=u.componentWillUpdate&&u.componentWillUpdate(C,u.__s,I)}p=u.props,g=u.state,u.context=I,u.props=C,u.state=u.__s,(c=s.__r)&&c(e),u.__d=!1,u.__v=e,u.__P=t,c=u.render(u.props,u.state,u.context),e.__k=E(null!=c&&c.type==m&&null==c.key?c.props.children:c),null!=u.getChildContext&&(n=h(h({},n),u.getChildContext())),_||null==u.getSnapshotBeforeUpdate||(v=u.getSnapshotBeforeUpdate(p,g)),A(t,e,i,n,r,a,o,l,d),u.base=e.__e,c=u.__h,u.__h=[],c.some((function(t){t.call(u)})),_||null==p||null==u.componentDidUpdate||u.componentDidUpdate(p,g,v),b&&(u.__E=u.__p=null),u.t=null}else e.__e=R(i.__e,e,i,n,r,a,o,d);(c=s.diffed)&&c(e)}catch(t){s.__e(t,e,i)}return e.__e}function S(t,e){for(var i;i=t.pop();)try{i.componentDidMount()}catch(t){s.__e(t,i.__v)}s.__c&&s.__c(e)}function R(t,e,i,s,n,r,a,o){var c,h,u,_,p,m=i.props,f=e.props;if(n="svg"===e.type||n,null==t&&null!=r)for(c=0;c<r.length;c++)if(null!=(h=r[c])&&(null===e.type?3===h.nodeType:h.localName===e.type)){t=h,r[c]=null;break}if(null==t){if(null===e.type)return document.createTextNode(f);t=n?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type),r=null}if(null===e.type)null!=r&&(r[r.indexOf(t)]=null),m!==f&&(t.data=f);else if(e!==i){if(null!=r&&(r=d.slice.call(t.childNodes)),u=(m=i.props||l).dangerouslySetInnerHTML,_=f.dangerouslySetInnerHTML,!o){if(m===l)for(m={},p=0;p<t.attributes.length;p++)m[t.attributes[p].name]=t.attributes[p].value;(_||u)&&(_&&u&&_.__html==u.__html||(t.innerHTML=_&&_.__html||""))}(function(t,e,i,s,n){var r;for(r in i)r in e||I(t,r,null,i[r],s);for(r in e)n&&"function"!=typeof e[r]||"value"===r||"checked"===r||i[r]===e[r]||I(t,r,e[r],i[r],s)})(t,f,m,n,o),e.__k=e.props.children,_||A(t,e,i,s,"foreignObject"!==e.type&&n,r,a,l,o),o||("value"in f&&void 0!==f.value&&f.value!==t.value&&(t.value=null==f.value?"":f.value),"checked"in f&&void 0!==f.checked&&f.checked!==t.checked&&(t.checked=f.checked))}return t}function L(t,e,i){try{"function"==typeof t?t(e):t.current=e}catch(t){s.__e(t,i)}}function H(t,e,i){var n,r,a;if(s.unmount&&s.unmount(t),(n=t.ref)&&L(n,null,e),i||"function"==typeof t.type||(i=null!=(r=t.__e)),t.__e=t.l=null,null!=(n=t.__c)){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(t){s.__e(t,e)}n.base=n.__P=null}if(n=t.__k)for(a=0;a<n.length;a++)n[a]&&H(n[a],e,i);null!=r&&u(r)}function D(t,e,i){return this.constructor(t,i)}function N(t,e,i){var n,r,a;s.__p&&s.__p(t,e),r=(n=i===o)?null:i&&i.__k||e.__k,t=_(m,null,[t]),a=[],O(e,n?e.__k=t:(i||e).__k=t,r||l,l,void 0!==e.ownerSVGElement,i&&!n?[i]:r?null:d.slice.call(e.childNodes),a,i||l,n),S(a,t)}s={},f.prototype.setState=function(t,e){var i=this.__s!==this.state&&this.__s||(this.__s=h({},this.state));("function"!=typeof t||(t=t(i,this.props)))&&h(i,t),null!=t&&this.__v&&(this.t=!1,e&&this.__h.push(e),b(this))},f.prototype.forceUpdate=function(t){this.__v&&(this.t=!0,t&&this.__h.push(t),b(this))},f.prototype.render=m,n=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,a=s.debounceRendering,s.__e=function(t,e,i){for(var s;e=e.__p;)if((s=e.__c)&&!s.__p)try{if(s.constructor&&null!=s.constructor.getDerivedStateFromError)s.setState(s.constructor.getDerivedStateFromError(t));else{if(null==s.componentDidCatch)continue;s.componentDidCatch(t)}return b(s.__E=s)}catch(e){t=e}throw t},o=l},function(t,e,i){"use strict";i.d(e,"c",(function(){return h})),i.d(e,"a",(function(){return u})),i.d(e,"b",(function(){return _}));var s,n,r=i(0),a=[],o=r.c.__r;r.c.__r=function(t){o&&o(t),s=0,(n=t.__c).__H&&(n.__H.t=v(n.__H.t))};var l=r.c.diffed;r.c.diffed=function(t){l&&l(t);var e=t.__c;if(e){var i=e.__H;i&&(i.u=(i.u.some((function(t){t.ref&&(t.ref.current=t.createHandle())})),[]),i.i=v(i.i))}};var d=r.c.unmount;function c(t){r.c.__h&&r.c.__h(n);var e=n.__H||(n.__H={o:[],t:[],i:[],u:[]});return t>=e.o.length&&e.o.push({}),e.o[t]}function h(t){return function(t,e,i){var r=c(s++);return r.__c||(r.__c=n,r.v=[i?i(e):E(void 0,e),function(e){var i=t(r.v[0],e);r.v[0]!==i&&(r.v[0]=i,r.__c.setState({}))}]),r.v}(E,t)}function u(t,e){var i=c(s++);A(i.m,e)&&(i.v=t,i.m=e,n.__H.t.push(i),m(n))}function _(t){return p((function(){return{current:t}}),[])}function p(t,e){var i=c(s++);return A(i.m,e)?(i.m=e,i.p=t,i.v=t()):i.v}r.c.unmount=function(t){d&&d(t);var e=t.__c;if(e){var i=e.__H;i&&i.o.forEach((function(t){return t.l&&t.l()}))}};var m=function(){};function f(){a.some((function(t){t.s=!1,t.__P&&(t.__H.t=v(t.__H.t))})),a=[]}if("undefined"!=typeof window){var g=r.c.requestAnimationFrame;m=function(t){(!t.s&&(t.s=!0)&&1===a.push(t)||g!==r.c.requestAnimationFrame)&&(g=r.c.requestAnimationFrame,(r.c.requestAnimationFrame||function(t){var e=function(){clearTimeout(i),cancelAnimationFrame(s),setTimeout(t)},i=setTimeout(e,100),s=requestAnimationFrame(e)})(f))}}function v(t){return t.forEach(b),t.forEach(C),[]}function b(t){t.l&&t.l()}function C(t){var e=t.v();"function"==typeof e&&(t.l=e)}function A(t,e){return!t||e.some((function(e,i){return e!==t[i]}))}function E(t,e){return"function"==typeof e?e(t):e}},function(t,e,i){"use strict";var s;function n(t,e,i){if(!i||typeof i.value!==s.typeOfFunction)throw new TypeError("Only methods can be decorated with @bind. <"+e+"> is not a method!");return{configurable:s.boolTrue,get:function(){var t=i.value.bind(this);return Object.defineProperty(this,e,{value:t,configurable:s.boolTrue,writable:s.boolTrue}),t}}}Object.defineProperty(e,"__esModule",{value:!0}),function(t){t.typeOfFunction="function",t.boolTrue=!0}(s||(s={})),e.bind=n,e.default=n},function(t,e,i){t.exports={container:"_1tslGMlQwTtmG0WWS1dgsB",text:"WgttpigNYIU8jRioyq8eX",slider:"arAiZkaKcE6M3BNRsR8Cn"}},function(t,e,i){t.exports={viewArea:"_2ySBFxD_jH64mDfokn1vyo",pending:"_2D7a58Q2bD_w6shZSBj87z",resolved:"_6TKcDYCcRtB4Yy88B5pno",error:"_4KLbGjGafEEA8zOH-ryhj",code:"iXwQvfU9IYYYwijDBMwKx"}},function(t,e,i){},function(t,e,i){t.exports={container:"_1T-h7jr-jjZZi8nU03b9zI",sign:"UGZ4j9IAXo4JnG1aI3bG0"}},function(t,e,i){"use strict";(function(t){i.d(e,"a",(function(){return n}));var s=i(8);function n(e,i,n){return Object(s.a)(async s=>{const r=new Worker(t,{name:"background-json-ellipsis-worker"});return s.addEventListener("abort",()=>{r.terminate()}),await function(t,e){return new Promise((i,s)=>{t.addEventListener("message",t=>{"run success"===t.data.type&&i(t.data.payload),"run error"===t.data.type&&s(t.data.error)}),t.addEventListener("error",s),t.postMessage({type:"run",payload:e})})}(r,{text:e,maxBytes:i,ellipsis:n})},[e,i,n])}}).call(this,i(13))},function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var s=i(1);function n(t,e){const[i,n]=Object(s.c)({state:"pending"}),r=Object(s.b)(null);return Object(s.a)(()=>{null!==r.current&&r.current[1]();const e=[],i=t({addEventListener(t,i){"abort"===t&&e.push(i)}}),s=()=>{e.forEach(t=>t())};n({state:"pending"});const a=r.current=[i,s];return i.then(t=>{r.current===a&&n({state:"resolved",result:t})}).catch(t=>{r.current===a&&n({state:"error",error:t})}),s},e),i}},function(t,e,i){t.exports={title:"_3hbgTndjIQUyWfJTKXqthJ"}},function(t,e,i){t.exports={field:"UPXpsFPILlZKJUVJe1Nz8"}},function(t,e,i){t.exports={mdc:"_2Llqcnh7O1SYmNnGe9d-x"}},function(t,e,i){t.exports={formGroups:"_3WR1gZu7tsg_1nixrF0xue"}},function(t,e,i){t.exports=i.p+"background-json-ellipsis-worker.chunk.d97fc.worker.js"},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){"use strict";i.r(e);var s=i(0),n=i(1),r=i(7);i(14);var a=
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class{static get cssClasses(){return{}}static get strings(){return{}}static get numbers(){return{}}static get defaultAdapter(){return{}}constructor(t={}){this.adapter_=t}init(){}destroy(){}};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class o{static attachTo(t){return new o(t,new a)}constructor(t,e,...i){this.root_=t,this.initialize(...i),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}initialize(){}getDefaultFoundation(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")}initialSyncWithDOM(){}destroy(){this.foundation_.destroy()}listen(t,e){this.root_.addEventListener(t,e)}unlisten(t,e){this.root_.removeEventListener(t,e)}emit(t,e,i=!1){let s;"function"==typeof CustomEvent?s=new CustomEvent(t,{detail:e,bubbles:i}):(s=document.createEvent("CustomEvent")).initCustomEvent(t,i,!1,e),this.root_.dispatchEvent(s)}}var l=o;
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const d={ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded",BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation"},c={VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end"},h={PADDING:10,INITIAL_ORIGIN_SCALE:.6,DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,TAP_DELAY_MS:300};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
let u,_;function p(t=window,e=!1){if(void 0===_||e){let e=!1;try{t.document.addEventListener("test",null,{get passive(){e=!0}})}catch(t){}_=e}return!!_&&{passive:!0}}function m(t){return["webkitMatchesSelector","msMatchesSelector","matches"].filter(e=>e in t).pop()}const f=["touchstart","pointerdown","mousedown","keydown"],g=["touchend","pointerup","mouseup"];let v=[];class b extends a{static get cssClasses(){return d}static get strings(){return c}static get numbers(){return h}static get defaultAdapter(){return{browserSupportsCssVars:()=>{},isUnbounded:()=>{},isSurfaceActive:()=>{},isSurfaceDisabled:()=>{},addClass:()=>{},removeClass:()=>{},containsEventTarget:()=>{},registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerDocumentInteractionHandler:()=>{},deregisterDocumentInteractionHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},updateCssVariable:()=>{},computeBoundingRect:()=>{},getWindowPageOffset:()=>{}}}constructor(t){super(Object.assign(b.defaultAdapter,t)),this.layoutFrame_=0,this.frame_={width:0,height:0},this.activationState_=this.defaultActivationState_(),this.initialSize_=0,this.maxRadius_=0,this.activateHandler_=t=>this.activate_(t),this.deactivateHandler_=t=>this.deactivate_(t),this.focusHandler_=()=>this.handleFocus(),this.blurHandler_=()=>this.handleBlur(),this.resizeHandler_=()=>this.layout(),this.unboundedCoords_={left:0,top:0},this.fgScale_=0,this.activationTimer_=0,this.fgDeactivationRemovalTimer_=0,this.activationAnimationHasEnded_=!1,this.activationTimerCallback_=()=>{this.activationAnimationHasEnded_=!0,this.runDeactivationUXLogicIfReady_()},this.previousActivationEvent_=null}supportsPressRipple_(){return this.adapter_.browserSupportsCssVars()}defaultActivationState_(){return{isActivated:!1,hasDeactivationUXRun:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1,activationEvent:null,isProgrammatic:!1}}init(){const t=this.supportsPressRipple_();if(this.registerRootHandlers_(t),t){const{ROOT:t,UNBOUNDED:e}=b.cssClasses;requestAnimationFrame(()=>{this.adapter_.addClass(t),this.adapter_.isUnbounded()&&(this.adapter_.addClass(e),this.layoutInternal_())})}}destroy(){if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(b.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(b.cssClasses.FG_DEACTIVATION));const{ROOT:t,UNBOUNDED:e}=b.cssClasses;requestAnimationFrame(()=>{this.adapter_.removeClass(t),this.adapter_.removeClass(e),this.removeCssVars_()})}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()}registerRootHandlers_(t){t&&(f.forEach(t=>{this.adapter_.registerInteractionHandler(t,this.activateHandler_)}),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)}registerDeactivationHandlers_(t){"keydown"===t.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):g.forEach(t=>{this.adapter_.registerDocumentInteractionHandler(t,this.deactivateHandler_)})}deregisterRootHandlers_(){f.forEach(t=>{this.adapter_.deregisterInteractionHandler(t,this.activateHandler_)}),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)}deregisterDeactivationHandlers_(){this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),g.forEach(t=>{this.adapter_.deregisterDocumentInteractionHandler(t,this.deactivateHandler_)})}removeCssVars_(){const{strings:t}=b;Object.keys(t).forEach(e=>{0===e.indexOf("VAR_")&&this.adapter_.updateCssVariable(t[e],null)})}activate_(t){if(this.adapter_.isSurfaceDisabled())return;const e=this.activationState_;if(e.isActivated)return;const i=this.previousActivationEvent_;i&&t&&i.type!==t.type||(e.isActivated=!0,e.isProgrammatic=null===t,e.activationEvent=t,e.wasActivatedByPointer=!e.isProgrammatic&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type),t&&v.length>0&&v.some(t=>this.adapter_.containsEventTarget(t))?this.resetActivationState_():(t&&(v.push(t.target),this.registerDeactivationHandlers_(t)),e.wasElementMadeActive=this.checkElementMadeActive_(t),e.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame(()=>{v=[],e.wasElementMadeActive||" "!==t.key&&32!==t.keyCode||(e.wasElementMadeActive=this.checkElementMadeActive_(t),e.wasElementMadeActive&&this.animateActivation_()),e.wasElementMadeActive||(this.activationState_=this.defaultActivationState_())})))}checkElementMadeActive_(t){return!t||"keydown"!==t.type||this.adapter_.isSurfaceActive()}activate(t=null){this.activate_(t)}animateActivation_(){const{VAR_FG_TRANSLATE_START:t,VAR_FG_TRANSLATE_END:e}=b.strings,{FG_DEACTIVATION:i,FG_ACTIVATION:s}=b.cssClasses,{DEACTIVATION_TIMEOUT_MS:n}=b.numbers;this.layoutInternal_();let r="",a="";if(!this.adapter_.isUnbounded()){const{startPoint:t,endPoint:e}=this.getFgTranslationCoordinates_();r=`${t.x}px, ${t.y}px`,a=`${e.x}px, ${e.y}px`}this.adapter_.updateCssVariable(t,r),this.adapter_.updateCssVariable(e,a),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(i),this.adapter_.computeBoundingRect(),this.adapter_.addClass(s),this.activationTimer_=setTimeout(()=>this.activationTimerCallback_(),n)}getFgTranslationCoordinates_(){const{activationEvent:t,wasActivatedByPointer:e}=this.activationState_;let i;return{startPoint:i={x:(i=e?function(t,e,i){const{x:s,y:n}=e,r=s+i.left,a=n+i.top;let o,l;return"touchstart"===t.type?(o=t.changedTouches[0].pageX-r,l=t.changedTouches[0].pageY-a):(o=t.pageX-r,l=t.pageY-a),{x:o,y:l}}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(t,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:i.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}}runDeactivationUXLogicIfReady_(){const{FG_DEACTIVATION:t}=b.cssClasses,{hasDeactivationUXRun:e,isActivated:i}=this.activationState_;(e||!i)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(t),this.fgDeactivationRemovalTimer_=setTimeout(()=>{this.adapter_.removeClass(t)},h.FG_DEACTIVATION_MS))}rmBoundedActivationClasses_(){const{FG_ACTIVATION:t}=b.cssClasses;this.adapter_.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()}resetActivationState_(){this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout(()=>this.previousActivationEvent_=null,b.numbers.TAP_DELAY_MS)}deactivate_(t){const e=this.activationState_;if(!e.isActivated)return;const i=Object.assign({},e);if(e.isProgrammatic){const t=null;requestAnimationFrame(()=>this.animateDeactivation_(t,i)),this.resetActivationState_()}else this.deregisterDeactivationHandlers_(),requestAnimationFrame(()=>{this.activationState_.hasDeactivationUXRun=!0,this.animateDeactivation_(t,i),this.resetActivationState_()})}deactivate(t=null){this.deactivate_(t)}animateDeactivation_(t,{wasActivatedByPointer:e,wasElementMadeActive:i}){(e||i)&&this.runDeactivationUXLogicIfReady_()}layout(){this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(()=>{this.layoutInternal_(),this.layoutFrame_=0})}layoutInternal_(){this.frame_=this.adapter_.computeBoundingRect();const t=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?t:(()=>{return Math.sqrt(Math.pow(this.frame_.width,2)+Math.pow(this.frame_.height,2))+b.numbers.PADDING})(),this.initialSize_=t*b.numbers.INITIAL_ORIGIN_SCALE,this.fgScale_=this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()}updateLayoutCssVars_(){const{VAR_FG_SIZE:t,VAR_LEFT:e,VAR_TOP:i,VAR_FG_SCALE:s}=b.strings;this.adapter_.updateCssVariable(t,`${this.initialSize_}px`),this.adapter_.updateCssVariable(s,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(e,`${this.unboundedCoords_.left}px`),this.adapter_.updateCssVariable(i,`${this.unboundedCoords_.top}px`))}setUnbounded(t){const{UNBOUNDED:e}=b.cssClasses;t?this.adapter_.addClass(e):this.adapter_.removeClass(e)}handleFocus(){requestAnimationFrame(()=>this.adapter_.addClass(b.cssClasses.BG_FOCUSED))}handleBlur(){requestAnimationFrame(()=>this.adapter_.removeClass(b.cssClasses.BG_FOCUSED))}}var C=b;
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class A extends l{constructor(...t){super(...t),this.disabled=!1,this.unbounded_}static attachTo(t,{isUnbounded:e}={}){const i=new A(t);return void 0!==e&&(i.unbounded=e),i}static createAdapter(t){const e=m(HTMLElement.prototype);return{browserSupportsCssVars:()=>(function(t,e=!1){let i=u;if("boolean"==typeof u&&!e)return i;if(!(t.CSS&&"function"==typeof t.CSS.supports))return;const s=t.CSS.supports("--css-vars","yes"),n=t.CSS.supports("(--css-vars: yes)")&&t.CSS.supports("color","#00000000");return i=!(!s&&!n)&&!function(t){const e=t.document,i=e.createElement("div");i.className="mdc-ripple-surface--test-edge-var-bug",e.body.appendChild(i);const s=t.getComputedStyle(i),n=null!==s&&"solid"===s.borderTopStyle;return i.remove(),n}(t),e||(u=i),i})(window),isUnbounded:()=>t.unbounded,isSurfaceActive:()=>t.root_[e](":active"),isSurfaceDisabled:()=>t.disabled,addClass:e=>t.root_.classList.add(e),removeClass:e=>t.root_.classList.remove(e),containsEventTarget:e=>t.root_.contains(e),registerInteractionHandler:(e,i)=>t.root_.addEventListener(e,i,p()),deregisterInteractionHandler:(e,i)=>t.root_.removeEventListener(e,i,p()),registerDocumentInteractionHandler:(t,e)=>document.documentElement.addEventListener(t,e,p()),deregisterDocumentInteractionHandler:(t,e)=>document.documentElement.removeEventListener(t,e,p()),registerResizeHandler:t=>window.addEventListener("resize",t),deregisterResizeHandler:t=>window.removeEventListener("resize",t),updateCssVariable:(e,i)=>t.root_.style.setProperty(e,i),computeBoundingRect:()=>t.root_.getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})}}get unbounded(){return this.unbounded_}set unbounded(t){this.unbounded_=Boolean(t),this.setUnbounded_()}setUnbounded_(){this.foundation_.setUnbounded(this.unbounded_)}activate(){this.foundation_.activate()}deactivate(){this.foundation_.deactivate()}layout(){this.foundation_.layout()}getDefaultFoundation(){return new C(A.createAdapter(this))}initialSyncWithDOM(){this.unbounded="mdcRippleIsUnbounded"in this.root_.dataset}}class E{}E.prototype.root_,E.prototype.unbounded,E.prototype.disabled;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const T={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed"},I={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},y={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class O extends a{static get strings(){return y}static get cssClasses(){return T}static get numbers(){return I}static get defaultAdapter(){return{hasClass:()=>{},addClass:()=>{},removeClass:()=>{},setStyle:()=>{},getTopAppBarHeight:()=>{},registerNavigationIconInteractionHandler:()=>{},deregisterNavigationIconInteractionHandler:()=>{},notifyNavigationIconClicked:()=>{},registerScrollHandler:()=>{},deregisterScrollHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},getViewportScrollY:()=>0,getTotalActionItems:()=>0}}constructor(t){super(Object.assign(O.defaultAdapter,t)),this.navClickHandler_=()=>this.adapter_.notifyNavigationIconClicked(),this.scrollHandler_=()=>{}}init(){this.adapter_.registerNavigationIconInteractionHandler("click",this.navClickHandler_)}destroy(){this.adapter_.deregisterNavigationIconInteractionHandler("click",this.navClickHandler_)}initScrollHandler(){this.adapter_.registerScrollHandler(this.scrollHandler_)}destroyScrollHandler(){this.adapter_.deregisterScrollHandler(this.scrollHandler_)}}var S=O;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var R=class extends S{constructor(t){super(t),this.wasScrolled_=!1,this.scrollHandler_=()=>this.fixedScrollHandler_()}init(){super.init(),this.adapter_.registerScrollHandler(this.scrollHandler_)}destroy(){super.destroy(),this.adapter_.deregisterScrollHandler(this.scrollHandler_)}fixedScrollHandler_(){this.adapter_.getViewportScrollY()<=0?this.wasScrolled_&&(this.adapter_.removeClass(T.FIXED_SCROLLED_CLASS),this.wasScrolled_=!1):this.wasScrolled_||(this.adapter_.addClass(T.FIXED_SCROLLED_CLASS),this.wasScrolled_=!0)}};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var L=class extends S{constructor(t){super(t),this.isCollapsed=!1,this.scrollHandler_=()=>this.shortAppBarScrollHandler_()}init(){super.init();const t=this.adapter_.hasClass(T.SHORT_COLLAPSED_CLASS);this.adapter_.getTotalActionItems()>0&&this.adapter_.addClass(T.SHORT_HAS_ACTION_ITEM_CLASS),t||(this.adapter_.registerScrollHandler(this.scrollHandler_),this.shortAppBarScrollHandler_())}destroy(){super.destroy(),this.adapter_.deregisterScrollHandler(this.scrollHandler_)}shortAppBarScrollHandler_(){this.adapter_.getViewportScrollY()<=0?this.isCollapsed&&(this.adapter_.removeClass(T.SHORT_COLLAPSED_CLASS),this.isCollapsed=!1):this.isCollapsed||(this.adapter_.addClass(T.SHORT_COLLAPSED_CLASS),this.isCollapsed=!0)}};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */const H=0;var D=class extends S{constructor(t){super(t),this.lastScrollPosition_=this.adapter_.getViewportScrollY(),this.topAppBarHeight_=this.adapter_.getTopAppBarHeight(),this.wasDocked_=!0,this.isDockedShowing_=!0,this.currentAppBarOffsetTop_=0,this.isCurrentlyBeingResized_=!1,this.resizeThrottleId_=H,this.resizeDebounceId_=H,this.scrollHandler_=()=>this.topAppBarScrollHandler_(),this.resizeHandler_=()=>this.topAppBarResizeHandler_()}init(){super.init(),this.adapter_.registerScrollHandler(this.scrollHandler_),this.adapter_.registerResizeHandler(this.resizeHandler_)}destroy(){super.destroy(),this.adapter_.deregisterScrollHandler(this.scrollHandler_),this.adapter_.deregisterResizeHandler(this.resizeHandler_),this.adapter_.setStyle("top","")}checkForUpdate_(){const t=-this.topAppBarHeight_,e=this.currentAppBarOffsetTop_<0,i=this.currentAppBarOffsetTop_>t,s=e&&i;if(s)this.wasDocked_=!1;else{if(!this.wasDocked_)return this.wasDocked_=!0,!0;if(this.isDockedShowing_!==i)return this.isDockedShowing_=i,!0}return s}moveTopAppBar_(){if(this.checkForUpdate_()){let t=this.currentAppBarOffsetTop_;Math.abs(t)>=this.topAppBarHeight_&&(t=-I.MAX_TOP_APP_BAR_HEIGHT),this.adapter_.setStyle("top",t+"px")}}topAppBarScrollHandler_(){const t=Math.max(this.adapter_.getViewportScrollY(),0),e=t-this.lastScrollPosition_;this.lastScrollPosition_=t,this.isCurrentlyBeingResized_||(this.currentAppBarOffsetTop_-=e,this.currentAppBarOffsetTop_>0?this.currentAppBarOffsetTop_=0:Math.abs(this.currentAppBarOffsetTop_)>this.topAppBarHeight_&&(this.currentAppBarOffsetTop_=-this.topAppBarHeight_),this.moveTopAppBar_())}topAppBarResizeHandler_(){this.resizeThrottleId_||(this.resizeThrottleId_=setTimeout(()=>{this.resizeThrottleId_=H,this.throttledResizeHandler_()},I.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized_=!0,this.resizeDebounceId_&&clearTimeout(this.resizeDebounceId_),this.resizeDebounceId_=setTimeout(()=>{this.topAppBarScrollHandler_(),this.isCurrentlyBeingResized_=!1,this.resizeDebounceId_=H},I.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)}throttledResizeHandler_(){const t=this.adapter_.getTopAppBarHeight();this.topAppBarHeight_!==t&&(this.wasDocked_=!1,this.currentAppBarOffsetTop_-=this.topAppBarHeight_-t,this.topAppBarHeight_=t),this.topAppBarScrollHandler_()}};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class N extends l{constructor(...t){super(...t),this.navIcon_,this.iconRipples_,this.scrollTarget_}initialize(t=(t=>A.attachTo(t))){this.navIcon_=this.root_.querySelector(y.NAVIGATION_ICON_SELECTOR);const e=[].slice.call(this.root_.querySelectorAll(y.ACTION_ITEM_SELECTOR));this.navIcon_&&e.push(this.navIcon_),this.iconRipples_=e.map(e=>{const i=t(e);return i.unbounded=!0,i})}destroy(){this.iconRipples_.forEach(t=>t.destroy()),super.destroy()}setScrollTarget(t){this.foundation_.destroyScrollHandler(),this.scrollTarget_=t,this.foundation_.initScrollHandler()}static attachTo(t){return new N(t)}getDefaultFoundation(){const t=Object.assign({hasClass:t=>this.root_.classList.contains(t),addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),setStyle:(t,e)=>this.root_.style.setProperty(t,e),getTopAppBarHeight:()=>this.root_.clientHeight,registerNavigationIconInteractionHandler:(t,e)=>{this.navIcon_&&this.navIcon_.addEventListener(t,e)},deregisterNavigationIconInteractionHandler:(t,e)=>{this.navIcon_&&this.navIcon_.removeEventListener(t,e)},notifyNavigationIconClicked:()=>{this.emit(y.NAVIGATION_EVENT,{})},registerScrollHandler:t=>this.scrollTarget_.addEventListener("scroll",t),deregisterScrollHandler:t=>this.scrollTarget_.removeEventListener("scroll",t),registerResizeHandler:t=>window.addEventListener("resize",t),deregisterResizeHandler:t=>window.removeEventListener("resize",t),getViewportScrollY:()=>this.scrollTarget_[this.scrollTarget_===window?"pageYOffset":"scrollTop"],getTotalActionItems:()=>this.root_.querySelectorAll(y.ACTION_ITEM_SELECTOR).length});let e;return this.scrollTarget_=window,e=this.root_.classList.contains(T.SHORT_CLASS)?new L(t):this.root_.classList.contains(T.FIXED_CLASS)?new R(t):new D(t)}}var x=i(2);const w=["disabled"];class k extends s.a{render(t){this.classText||(this.classText=this.buildClassName(t));const e=t,i=e.className||e.class||"";e.class&&delete e.class,e.className&&delete e.className;const s=this.materialDom(e);let n="attributes";return"props"in s?(n="props",s.props=s.props||{}):s.attributes=s.attributes||{},s[n].className=`${i} ${this.getClassName(s)}`.split(" ").filter((t,e,i)=>i.indexOf(t)===e&&""!==t).join(" "),this.mdcProps.forEach(t=>{t in w||delete s[n][t]}),s}componentDidMount(){this.props.ripple&&this.control&&(this.ripple=new A(this.control))}componentWillReceiveProps(t){if(this.MDComponent&&this.mdcNotifyProps)for(const e of this.mdcNotifyProps)this.props[e]!==t[e]&&(this.MDComponent[e]=t[e]);for(const e of this.mdcProps)if(this.props[e]!==t[e]){this.classText=this.buildClassName(t);break}}componentWillUnmount(){this.ripple&&this.ripple.destroy()}afterComponentDidMount(){if(this.MDComponent&&this.mdcNotifyProps)for(const t of this.mdcNotifyProps)this.MDComponent[t]=this.props[t]}setControlRef(t){this.control=t}buildClassName(t){let e="mdc-"+this.componentName;for(const i in t)if(t.hasOwnProperty(i)){const s=t[i];"boolean"==typeof s&&s&&-1!==this.mdcProps.indexOf(i)&&(e+=` mdc-${this.componentName}--${i}`)}return e}getClassName(t){if(!t)return"";let e="attributes";"props"in t?(e="props",t.props=t.props||{}):t.attributes=t.attributes||{};const i=t[e]=t[e]||{};let s=this.classText;return i.class&&(s+=" "+i.class),i.className&&i.className!==i.class&&(s+=" "+i.className),s}}(function(t,e,i,s){var n,r=arguments.length,a=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);r>3&&a&&Object.defineProperty(e,i,a)})([x.bind],k.prototype,"setControlRef",null);var P=k;class M extends P{constructor(){super(...arguments),this.componentName="top-app-bar",this.mdcProps=["short","short-collapsed","fixed","prominent"]}componentDidMount(){if(super.componentDidMount(),this.control){const t=new N(this.control);t.listen("MDCTopAppBar:nav",this.onNav),this.MDComponent=t}}componentWillUnmount(){super.componentWillUnmount(),this.MDComponent&&(this.MDComponent.unlisten("MDCTopAppBar:nav",this.onNav),this.MDComponent.destroy())}onNav(t){this.props.onNav&&this.props.onNav(t)}materialDom(t){return Object(s.b)("header",Object.assign({ref:this.setControlRef},t),t.children)}}(function(t,e,i,s){var n,r=arguments.length,a=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);r>3&&a&&Object.defineProperty(e,i,a)})([x.bind],M.prototype,"onNav",null);class V extends M{}function F({}){return Object(s.b)(V,{onNav:()=>{},style:{position:"static"}},Object(s.b)(V.Row,null,Object(s.b)(V.Section,null,Object(s.b)(V.Title,null,"json-ellipsis"))))}V.Section=class extends P{constructor(){super(...arguments),this.componentName="top-app-bar__section",this.mdcProps=["align-start","align-end"]}materialDom(t){return Object(s.b)("section",Object.assign({},t),t.children)}},V.Icon=class extends P{constructor(){super(...arguments),this.componentName="top-app-bar__icon",this.mdcProps=[]}materialDom(t){const e=t.navigation?"material-icons mdc-top-app-bar__navigation-icon":"material-icons";return Object(s.b)("a",Object.assign({className:e},t),t.children)}},V.Title=class extends P{constructor(){super(...arguments),this.componentName="top-app-bar__title",this.mdcProps=[]}materialDom(t){return Object(s.b)("span",Object.assign({},t),t.children)}},V.Row=class extends P{constructor(){super(...arguments),this.componentName="top-app-bar__row",this.mdcProps=[]}materialDom(t){return Object(s.b)("div",Object.assign({},t),this.props.children)}};i(15);class j extends P{constructor(){super(...arguments),this.componentName="layout-grid__cell",this.mdcProps=[]}static createClassName(t){const e="mdc-layout-grid__cell--",i=[];return t[j.propsDict.cols]&&i.push(`${e}span-${t[j.propsDict.cols]}`),t[j.propsDict.desktop]&&i.push(`${e}span-${t[j.propsDict.desktop]}-desktop`),t[j.propsDict.tablet]&&i.push(`${e}span-${t[j.propsDict.tablet]}-tablet`),t[j.propsDict.phone]&&i.push(`${e}span-${t[j.propsDict.phone]}-phone`),t[j.propsDict.order]&&i.push(`${e}order-${t[j.propsDict.order]}`),t[j.propsDict.align]&&i.push(`${e}align-${t[j.propsDict.align]}`),i.join(" ")}render(t){const e=super.render(t);return Object.keys(j.propsDict).forEach(t=>delete(e.props||e.attributes)[j.propsDict[t]]),e}materialDom(t){return Object(s.b)("div",Object.assign({},t,{className:j.createClassName(t),ref:this.setControlRef}),t.children)}}j.propsDict={align:"align",cols:"cols",desktop:"desktopCols",order:"order",phone:"phoneCols",tablet:"tabletCols"};class B extends P{constructor(){super(...arguments),this.componentName="layout-grid",this.mdcProps=[]}materialDom(t){return Object(s.b)("div",Object.assign({ref:this.setControlRef},t),t.children)}}class U extends B{}U.Cell=j,U.Inner=class extends P{constructor(){super(...arguments),this.componentName="layout-grid__inner",this.mdcProps=[]}materialDom(t){return Object(s.b)("div",Object.assign({ref:this.setControlRef},t),t.children)}};var z=i(6),W=i.n(z);function G({}){return Object(s.b)("div",{className:W.a.container},Object(s.b)("span",{className:W.a.sign},">>"))}function X({header:t,left:e,right:i}){return Object(s.b)("div",null,t,Object(s.b)(U,null,Object(s.b)(U.Inner,null,Object(s.b)(U.Cell,{cols:5},e),Object(s.b)(U.Cell,{cols:2},Object(s.b)(G,null)),Object(s.b)(U.Cell,{cols:5},i))))}var q=class extends P{constructor(){super(...arguments),this.componentName="typography",this.mdcProps=["headline1","headline2","headline3","headline4","headline5","headline6","subtitle1","subtitle2","body1","body2","button","caption","overline","title"]}materialDom(t){const{tag:e,...i}=t,n=e||"span";return Object(s.b)(n,Object.assign({},i,{ref:this.setControlRef}),i.children)}},K=(i(16),i(9)),$=i.n(K);function Y({children:t}){return Object(s.b)("div",{className:$.a.title},Object(s.b)(q,{headline3:!0},t))}i(5);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */const Z={ARIA_CONTROLS:"aria-controls",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",ICON_SELECTOR:".mdc-text-field__icon",OUTLINE_SELECTOR:".mdc-notched-outline",LINE_RIPPLE_SELECTOR:".mdc-line-ripple"},J={ROOT:"mdc-text-field",DISABLED:"mdc-text-field--disabled",DENSE:"mdc-text-field--dense",FOCUSED:"mdc-text-field--focused",INVALID:"mdc-text-field--invalid",TEXTAREA:"mdc-text-field--textarea",OUTLINED:"mdc-text-field--outlined"},Q={LABEL_SCALE:.75,DENSE_LABEL_SCALE:.923},tt=["pattern","min","max","required","step","minlength","maxlength"],et=["color","date","datetime-local","month","range","time","week"];
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const it={ARIA_HIDDEN:"aria-hidden",ROLE:"role"},st={HELPER_TEXT_PERSISTENT:"mdc-text-field-helper-text--persistent",HELPER_TEXT_VALIDATION_MSG:"mdc-text-field-helper-text--validation-msg"};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class nt extends a{static get cssClasses(){return st}static get strings(){return it}static get defaultAdapter(){return{addClass:()=>{},removeClass:()=>{},hasClass:()=>{},setAttr:()=>{},removeAttr:()=>{},setContent:()=>{}}}constructor(t){super(Object.assign(nt.defaultAdapter,t))}setContent(t){this.adapter_.setContent(t)}setPersistent(t){t?this.adapter_.addClass(st.HELPER_TEXT_PERSISTENT):this.adapter_.removeClass(st.HELPER_TEXT_PERSISTENT)}setValidation(t){t?this.adapter_.addClass(st.HELPER_TEXT_VALIDATION_MSG):this.adapter_.removeClass(st.HELPER_TEXT_VALIDATION_MSG)}showToScreenReader(){this.adapter_.removeAttr(it.ARIA_HIDDEN)}setValidity(t){const e=this.adapter_.hasClass(st.HELPER_TEXT_PERSISTENT),i=this.adapter_.hasClass(st.HELPER_TEXT_VALIDATION_MSG)&&!t;i?this.adapter_.setAttr(it.ROLE,"alert"):this.adapter_.removeAttr(it.ROLE),e||i||this.hide_()}hide_(){this.adapter_.setAttr(it.ARIA_HIDDEN,"true")}}var rt=nt;
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const at={ICON_EVENT:"MDCTextField:icon",ICON_ROLE:"button"};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class ot extends a{static get strings(){return at}static get defaultAdapter(){return{getAttr:()=>{},setAttr:()=>{},removeAttr:()=>{},setContent:()=>{},registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},notifyIconAction:()=>{}}}constructor(t){super(Object.assign(ot.defaultAdapter,t)),this.savedTabIndex_=null,this.interactionHandler_=t=>this.handleInteraction(t)}init(){this.savedTabIndex_=this.adapter_.getAttr("tabindex"),["click","keydown"].forEach(t=>{this.adapter_.registerInteractionHandler(t,this.interactionHandler_)})}destroy(){["click","keydown"].forEach(t=>{this.adapter_.deregisterInteractionHandler(t,this.interactionHandler_)})}setDisabled(t){this.savedTabIndex_&&(t?(this.adapter_.setAttr("tabindex","-1"),this.adapter_.removeAttr("role")):(this.adapter_.setAttr("tabindex",this.savedTabIndex_),this.adapter_.setAttr("role",at.ICON_ROLE)))}setAriaLabel(t){this.adapter_.setAttr("aria-label",t)}setContent(t){this.adapter_.setContent(t)}handleInteraction(t){"click"!==t.type&&"Enter"!==t.key&&13!==t.keyCode||this.adapter_.notifyIconAction()}}var lt=ot;
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class dt extends a{static get cssClasses(){return J}static get strings(){return Z}static get numbers(){return Q}get shouldShake(){return!this.isValid()&&!this.isFocused_&&!!this.getValue()}get shouldAlwaysFloat_(){const t=this.getNativeInput_().type;return et.indexOf(t)>=0}get shouldFloat(){return this.shouldAlwaysFloat_||this.isFocused_||!!this.getValue()||this.isBadInput_()}static get defaultAdapter(){return{addClass:()=>{},removeClass:()=>{},hasClass:()=>{},registerTextFieldInteractionHandler:()=>{},deregisterTextFieldInteractionHandler:()=>{},registerInputInteractionHandler:()=>{},deregisterInputInteractionHandler:()=>{},registerValidationAttributeChangeHandler:()=>{},deregisterValidationAttributeChangeHandler:()=>{},getNativeInput:()=>{},isFocused:()=>{},isRtl:()=>{},activateLineRipple:()=>{},deactivateLineRipple:()=>{},setLineRippleTransformOrigin:()=>{},shakeLabel:()=>{},floatLabel:()=>{},hasLabel:()=>{},getLabelWidth:()=>{},hasOutline:()=>{},notchOutline:()=>{},closeOutline:()=>{}}}constructor(t,e={}){super(Object.assign(dt.defaultAdapter,t)),this.helperText_=e.helperText,this.icon_=e.icon,this.isFocused_=!1,this.receivedUserInput_=!1,this.useCustomValidityChecking_=!1,this.isValid_=!0,this.useNativeValidation_=!0,this.inputFocusHandler_=()=>this.activateFocus(),this.inputBlurHandler_=()=>this.deactivateFocus(),this.inputInputHandler_=()=>this.autoCompleteFocus(),this.setPointerXOffset_=t=>this.setTransformOrigin(t),this.textFieldInteractionHandler_=()=>this.handleTextFieldInteraction(),this.validationAttributeChangeHandler_=t=>this.handleValidationAttributeChange(t),this.validationObserver_}init(){this.adapter_.isFocused()?this.inputFocusHandler_():this.adapter_.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter_.floatLabel(!0)),this.adapter_.registerInputInteractionHandler("focus",this.inputFocusHandler_),this.adapter_.registerInputInteractionHandler("blur",this.inputBlurHandler_),this.adapter_.registerInputInteractionHandler("input",this.inputInputHandler_),["mousedown","touchstart"].forEach(t=>{this.adapter_.registerInputInteractionHandler(t,this.setPointerXOffset_)}),["click","keydown"].forEach(t=>{this.adapter_.registerTextFieldInteractionHandler(t,this.textFieldInteractionHandler_)}),this.validationObserver_=this.adapter_.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_)}destroy(){this.adapter_.deregisterInputInteractionHandler("focus",this.inputFocusHandler_),this.adapter_.deregisterInputInteractionHandler("blur",this.inputBlurHandler_),this.adapter_.deregisterInputInteractionHandler("input",this.inputInputHandler_),["mousedown","touchstart"].forEach(t=>{this.adapter_.deregisterInputInteractionHandler(t,this.setPointerXOffset_)}),["click","keydown"].forEach(t=>{this.adapter_.deregisterTextFieldInteractionHandler(t,this.textFieldInteractionHandler_)}),this.adapter_.deregisterValidationAttributeChangeHandler(this.validationObserver_)}handleTextFieldInteraction(){this.adapter_.getNativeInput().disabled||(this.receivedUserInput_=!0)}handleValidationAttributeChange(t){t.some(t=>{if(tt.indexOf(t)>-1)return this.styleValidity_(!0),!0})}notchOutline(t){if(this.adapter_.hasOutline())if(t){const t=this.adapter_.hasClass(J.DENSE)?Q.DENSE_LABEL_SCALE:Q.LABEL_SCALE,e=this.adapter_.getLabelWidth()*t,i=this.adapter_.isRtl();this.adapter_.notchOutline(e,i)}else this.adapter_.closeOutline()}activateFocus(){this.isFocused_=!0,this.styleFocused_(this.isFocused_),this.adapter_.activateLineRipple(),this.adapter_.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter_.floatLabel(this.shouldFloat),this.adapter_.shakeLabel(this.shouldShake)),this.helperText_&&this.helperText_.showToScreenReader()}setTransformOrigin(t){const e=t.target.getBoundingClientRect(),i=t.clientX,s=(t.clientY,i-e.left);this.adapter_.setLineRippleTransformOrigin(s)}autoCompleteFocus(){this.receivedUserInput_||this.activateFocus()}deactivateFocus(){this.isFocused_=!1,this.adapter_.deactivateLineRipple();const t=this.isValid();this.styleValidity_(t),this.styleFocused_(this.isFocused_),this.adapter_.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter_.floatLabel(this.shouldFloat),this.adapter_.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput_=!1)}getValue(){return this.getNativeInput_().value}setValue(t){this.getNativeInput_().value=t;const e=this.isValid();this.styleValidity_(e),this.adapter_.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter_.floatLabel(this.shouldFloat),this.adapter_.shakeLabel(this.shouldShake))}isValid(){return this.useNativeValidation_?this.isNativeInputValid_():this.isValid_}setValid(t){this.isValid_=t,this.styleValidity_(t);const e=!t&&!this.isFocused_;this.adapter_.hasLabel()&&this.adapter_.shakeLabel(e)}setUseNativeValidation(t){this.useNativeValidation_=t}isDisabled(){return this.getNativeInput_().disabled}setDisabled(t){this.getNativeInput_().disabled=t,this.styleDisabled_(t)}setHelperTextContent(t){this.helperText_&&this.helperText_.setContent(t)}setIconAriaLabel(t){this.icon_&&this.icon_.setAriaLabel(t)}setIconContent(t){this.icon_&&this.icon_.setContent(t)}isBadInput_(){return this.getNativeInput_().validity.badInput}isNativeInputValid_(){return this.getNativeInput_().validity.valid}styleValidity_(t){const{INVALID:e}=dt.cssClasses;t?this.adapter_.removeClass(e):this.adapter_.addClass(e),this.helperText_&&this.helperText_.setValidity(t)}styleFocused_(t){const{FOCUSED:e}=dt.cssClasses;t?this.adapter_.addClass(e):this.adapter_.removeClass(e)}styleDisabled_(t){const{DISABLED:e,INVALID:i}=dt.cssClasses;t?(this.adapter_.addClass(e),this.adapter_.removeClass(i)):this.adapter_.removeClass(e),this.icon_&&this.icon_.setDisabled(t)}getNativeInput_(){return this.adapter_.getNativeInput()||{value:"",disabled:!1,validity:{badInput:!1,valid:!0}}}}var ct=dt;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const ht={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class ut extends a{static get cssClasses(){return ht}static get defaultAdapter(){return{addClass:()=>{},removeClass:()=>{},hasClass:()=>{},setStyle:()=>{},registerEventHandler:()=>{},deregisterEventHandler:()=>{}}}constructor(t){super(Object.assign(ut.defaultAdapter,t)),this.transitionEndHandler_=t=>this.handleTransitionEnd(t)}init(){this.adapter_.registerEventHandler("transitionend",this.transitionEndHandler_)}destroy(){this.adapter_.deregisterEventHandler("transitionend",this.transitionEndHandler_)}activate(){this.adapter_.removeClass(ht.LINE_RIPPLE_DEACTIVATING),this.adapter_.addClass(ht.LINE_RIPPLE_ACTIVE)}setRippleCenter(t){this.adapter_.setStyle("transform-origin",`${t}px center`)}deactivate(){this.adapter_.addClass(ht.LINE_RIPPLE_DEACTIVATING)}handleTransitionEnd(t){const e=this.adapter_.hasClass(ht.LINE_RIPPLE_DEACTIVATING);"opacity"===t.propertyName&&e&&(this.adapter_.removeClass(ht.LINE_RIPPLE_ACTIVE),this.adapter_.removeClass(ht.LINE_RIPPLE_DEACTIVATING))}}var _t=ut;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class pt extends l{static attachTo(t){return new pt(t)}activate(){this.foundation_.activate()}deactivate(){this.foundation_.deactivate()}setRippleCenter(t){this.foundation_.setRippleCenter(t)}getDefaultFoundation(){return new _t(Object.assign({addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),hasClass:t=>this.root_.classList.contains(t),setStyle:(t,e)=>this.root_.style[t]=e,registerEventHandler:(t,e)=>this.root_.addEventListener(t,e),deregisterEventHandler:(t,e)=>this.root_.removeEventListener(t,e)}))}}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class mt extends l{static attachTo(t){return new mt(t)}get foundation(){return this.foundation_}getDefaultFoundation(){return new rt(Object.assign({addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),hasClass:t=>this.root_.classList.contains(t),setAttr:(t,e)=>this.root_.setAttribute(t,e),removeAttr:t=>this.root_.removeAttribute(t),setContent:t=>{this.root_.textContent=t}}))}}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class ft extends l{static attachTo(t){return new ft(t)}get foundation(){return this.foundation_}getDefaultFoundation(){return new lt(Object.assign({getAttr:t=>this.root_.getAttribute(t),setAttr:(t,e)=>this.root_.setAttribute(t,e),removeAttr:t=>this.root_.removeAttribute(t),setContent:t=>{this.root_.textContent=t},registerInteractionHandler:(t,e)=>this.root_.addEventListener(t,e),deregisterInteractionHandler:(t,e)=>this.root_.removeEventListener(t,e),notifyIconAction:()=>this.emit(lt.strings.ICON_EVENT,{},!0)}))}}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const gt={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_SHAKE:"mdc-floating-label--shake"};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class vt extends a{static get cssClasses(){return gt}static get defaultAdapter(){return{addClass:()=>{},removeClass:()=>{},getWidth:()=>{},registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{}}}constructor(t){super(Object.assign(vt.defaultAdapter,t)),this.shakeAnimationEndHandler_=()=>this.handleShakeAnimationEnd_()}init(){this.adapter_.registerInteractionHandler("animationend",this.shakeAnimationEndHandler_)}destroy(){this.adapter_.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler_)}getWidth(){return this.adapter_.getWidth()}shake(t){const{LABEL_SHAKE:e}=vt.cssClasses;t?this.adapter_.addClass(e):this.adapter_.removeClass(e)}float(t){const{LABEL_FLOAT_ABOVE:e,LABEL_SHAKE:i}=vt.cssClasses;t?this.adapter_.addClass(e):(this.adapter_.removeClass(e),this.adapter_.removeClass(i))}handleShakeAnimationEnd_(){const{LABEL_SHAKE:t}=vt.cssClasses;this.adapter_.removeClass(t)}}var bt=vt;
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class Ct extends l{static attachTo(t){return new Ct(t)}shake(t){this.foundation_.shake(t)}float(t){this.foundation_.float(t)}getWidth(){return this.foundation_.getWidth()}getDefaultFoundation(){return new bt({addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),getWidth:()=>this.root_.offsetWidth,registerInteractionHandler:(t,e)=>this.root_.addEventListener(t,e),deregisterInteractionHandler:(t,e)=>this.root_.removeEventListener(t,e)})}}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const At={PATH_SELECTOR:".mdc-notched-outline__path",IDLE_OUTLINE_SELECTOR:".mdc-notched-outline__idle"},Et={OUTLINE_NOTCHED:"mdc-notched-outline--notched"};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class Tt extends a{static get strings(){return At}static get cssClasses(){return Et}static get defaultAdapter(){return{getWidth:()=>{},getHeight:()=>{},addClass:()=>{},removeClass:()=>{},setOutlinePathAttr:()=>{},getIdleOutlineStyleValue:()=>{}}}constructor(t){super(Object.assign(Tt.defaultAdapter,t))}notch(t,e=!1){const{OUTLINE_NOTCHED:i}=Tt.cssClasses;this.adapter_.addClass(i),this.updateSvgPath_(t,e)}closeNotch(){const{OUTLINE_NOTCHED:t}=Tt.cssClasses;this.adapter_.removeClass(t)}updateSvgPath_(t,e){const i=this.adapter_.getIdleOutlineStyleValue("border-radius")||this.adapter_.getIdleOutlineStyleValue("border-top-left-radius"),s=parseFloat(i),n=this.adapter_.getWidth(),r=this.adapter_.getHeight(),a=s+1.2,o=Math.abs(12-a);let l=0;t>0&&(l=t+8);const d="a"+s+","+s+" 0 0 1 "+s+","+s+"v"+(r-2*a)+"a"+s+","+s+" 0 0 1 "+-s+","+s+"h"+(2*a-n)+"a"+s+","+s+" 0 0 1 "+-s+","+-s+"v"+(2*a-r)+"a"+s+","+s+" 0 0 1 "+s+","+-s;let c;c=e?"M"+(n-a-o)+",1h"+o+d+"h"+(n-2*a-l-o):"M"+(a+o+l)+",1h"+(n-2*a-l-o)+d+"h"+o,this.adapter_.setOutlinePathAttr(c)}}var It=Tt;
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class yt extends l{static attachTo(t){return new yt(t)}notch(t,e){this.foundation_.notch(t,e)}closeNotch(){this.foundation_.closeNotch()}getDefaultFoundation(){return new It({getWidth:()=>this.root_.offsetWidth,getHeight:()=>this.root_.offsetHeight,addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),setOutlinePathAttr:t=>{this.root_.querySelector(At.PATH_SELECTOR).setAttribute("d",t)},getIdleOutlineStyleValue:t=>{const e=this.root_.parentNode.querySelector(At.IDLE_OUTLINE_SELECTOR);return window.getComputedStyle(e).getPropertyValue(t)}})}}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class Ot extends l{constructor(...t){super(...t),this.input_,this.ripple,this.lineRipple_,this.helperText_,this.icon_,this.label_,this.outline_}static attachTo(t){return new Ot(t)}initialize(t=((t,e)=>new A(t,e)),e=(t=>new pt(t)),i=(t=>new mt(t)),s=(t=>new ft(t)),n=(t=>new Ct(t)),r=(t=>new yt(t))){this.input_=this.root_.querySelector(Z.INPUT_SELECTOR);const a=this.root_.querySelector(Z.LABEL_SELECTOR);a&&(this.label_=n(a));const o=this.root_.querySelector(Z.LINE_RIPPLE_SELECTOR);o&&(this.lineRipple_=e(o));const l=this.root_.querySelector(Z.OUTLINE_SELECTOR);if(l&&(this.outline_=r(l)),this.input_.hasAttribute(Z.ARIA_CONTROLS)){const t=document.getElementById(this.input_.getAttribute(Z.ARIA_CONTROLS));t&&(this.helperText_=i(t))}const d=this.root_.querySelector(Z.ICON_SELECTOR);if(d&&(this.icon_=s(d)),this.ripple=null,!this.root_.classList.contains(J.TEXTAREA)&&!this.root_.classList.contains(J.OUTLINED)){const e=m(HTMLElement.prototype),i=Object.assign(A.createAdapter(this),{isSurfaceActive:()=>this.input_[e](":active"),registerInteractionHandler:(t,e)=>this.input_.addEventListener(t,e),deregisterInteractionHandler:(t,e)=>this.input_.removeEventListener(t,e)}),s=new C(i);this.ripple=t(this.root_,s)}}destroy(){this.ripple&&this.ripple.destroy(),this.lineRipple_&&this.lineRipple_.destroy(),this.helperText_&&this.helperText_.destroy(),this.icon_&&this.icon_.destroy(),this.label_&&this.label_.destroy(),this.outline_&&this.outline_.destroy(),super.destroy()}initialSyncWithDom(){this.disabled=this.input_.disabled}get value(){return this.foundation_.getValue()}set value(t){this.foundation_.setValue(t)}get disabled(){return this.foundation_.isDisabled()}set disabled(t){this.foundation_.setDisabled(t)}get valid(){return this.foundation_.isValid()}set valid(t){this.foundation_.setValid(t)}get required(){return this.input_.required}set required(t){this.input_.required=t}get pattern(){return this.input_.pattern}set pattern(t){this.input_.pattern=t}get minLength(){return this.input_.minLength}set minLength(t){this.input_.minLength=t}get maxLength(){return this.input_.maxLength}set maxLength(t){t<0?this.input_.removeAttribute("maxLength"):this.input_.maxLength=t}get min(){return this.input_.min}set min(t){this.input_.min=t}get max(){return this.input_.max}set max(t){this.input_.max=t}get step(){return this.input_.step}set step(t){this.input_.step=t}set helperTextContent(t){this.foundation_.setHelperTextContent(t)}set iconAriaLabel(t){this.foundation_.setIconAriaLabel(t)}set iconContent(t){this.foundation_.setIconContent(t)}set useNativeValidation(t){this.foundation_.setUseNativeValidation(t)}layout(){const t=this.foundation_.shouldFloat;this.foundation_.notchOutline(t)}getDefaultFoundation(){return new ct(Object.assign({addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),hasClass:t=>this.root_.classList.contains(t),registerTextFieldInteractionHandler:(t,e)=>this.root_.addEventListener(t,e),deregisterTextFieldInteractionHandler:(t,e)=>this.root_.removeEventListener(t,e),registerValidationAttributeChangeHandler:t=>{const e=new MutationObserver(e=>t((t=>t.map(t=>t.attributeName))(e))),i=this.root_.querySelector(Z.INPUT_SELECTOR);return e.observe(i,{attributes:!0}),e},deregisterValidationAttributeChangeHandler:t=>t.disconnect(),isFocused:()=>document.activeElement===this.root_.querySelector(Z.INPUT_SELECTOR),isRtl:()=>"rtl"===window.getComputedStyle(this.root_).getPropertyValue("direction")},this.getInputAdapterMethods_(),this.getLabelAdapterMethods_(),this.getLineRippleAdapterMethods_(),this.getOutlineAdapterMethods_()),this.getFoundationMap_())}getLabelAdapterMethods_(){return{shakeLabel:t=>this.label_.shake(t),floatLabel:t=>this.label_.float(t),hasLabel:()=>!!this.label_,getLabelWidth:()=>this.label_.getWidth()}}getLineRippleAdapterMethods_(){return{activateLineRipple:()=>{this.lineRipple_&&this.lineRipple_.activate()},deactivateLineRipple:()=>{this.lineRipple_&&this.lineRipple_.deactivate()},setLineRippleTransformOrigin:t=>{this.lineRipple_&&this.lineRipple_.setRippleCenter(t)}}}getOutlineAdapterMethods_(){return{notchOutline:(t,e)=>this.outline_.notch(t,e),closeOutline:()=>this.outline_.closeNotch(),hasOutline:()=>!!this.outline_}}getInputAdapterMethods_(){return{registerInputInteractionHandler:(t,e)=>this.input_.addEventListener(t,e),deregisterInputInteractionHandler:(t,e)=>this.input_.removeEventListener(t,e),getNativeInput:()=>this.input_}}getFoundationMap_(){return{helperText:this.helperText_?this.helperText_.foundation:void 0,icon:this.icon_?this.icon_.foundation:void 0}}}var St=class extends P{constructor(){super(...arguments),this.componentName="icon",this.mdcProps=[]}materialDom(t){const e=["material-icons"];return t.className&&e.push(t.className),Object(s.b)("i",Object.assign({},t,{className:e.join(" ")}),t.children)}};class Rt extends P{constructor(){super(...arguments),this.componentName="text-field-helper-text",this.mdcProps=["persistent","validation-msg"]}materialDom(t){return Object(s.b)("p",Object.assign({},t,{"aria-hidden":"true"}),t.children)}}class Lt extends P{constructor(){super(...arguments),this.componentName="floating-label",this.mdcProps=[]}materialDom(t){return Object(s.b)("label",Object.assign({},t),t.children)}}class Ht extends P{constructor(){super(...arguments),this.state={jsComponentAttached:!1},this.componentName="text-field",this.mdcProps=["fullwidth","textarea","dense","disabled","box","outlined"],this.mdcNotifyProps=["valid","disabled"]}componentDidMount(){super.componentDidMount(),this.setState({jsComponentAttached:!0},()=>{this.control&&(this.MDComponent=new Ot(this.control),this.props.onInit&&this.props.onInit(this.MDComponent),this.props.value&&(this.MDComponent.value=this.props.value)),this.afterComponentDidMount()})}componentWillReceiveProps(t){super.componentWillReceiveProps(t),this.MDComponent&&t.value&&this.props.value!==t.value&&this.MDComponent.value!==t.value&&(this.MDComponent.value=t.value)}componentWillUnmount(){super.componentWillUnmount(),this.MDComponent&&this.MDComponent.destroy()}getValue(){return this.MDComponent?this.MDComponent.value:null}materialDom(t){let{className:e,outerStyle:i,outlined:n,...r}=t;return e=e||"","leadingIcon"in r&&(e+=" mdc-text-field--box mdc-text-field--with-leading-icon"),"trailingIcon"in r&&(e+=" mdc-text-field--box mdc-text-field--with-trailing-icon"),"value"in r&&this.state.jsComponentAttached&&(e=[e,"mdc-text-field--upgraded"].join(" ")),r.label&&r.fullwidth&&console.log('Passing a "label" prop is not supported when using a "fullwidth" text field.'),Object(s.b)("div",{className:e,ref:this.setControlRef,style:i},r.leadingIcon?Object(s.b)(St,{className:"mdc-text-field__icon"},r.leadingIcon):null,r.textarea?Object(s.b)("textarea",Object.assign({className:"mdc-text-field__input"},r)):Object(s.b)("input",Object.assign({type:r.type||"text",className:"mdc-text-field__input",placeholder:this.state.jsComponentAttached?void 0:r.label+this.props.required?"*":""},r)),r.label&&this.state.jsComponentAttached&&Object(s.b)(Lt,{for:r.id},r.label),r.trailingIcon?Object(s.b)(St,{className:"mdc-text-field__icon"},r.trailingIcon):null,r.textarea||n?null:Object(s.b)("div",{class:"mdc-line-ripple"}),n?Object(s.b)("div",{class:"mdc-notched-outline"},Object(s.b)("svg",null,Object(s.b)("path",{className:"mdc-notched-outline__path"}))):null,n?Object(s.b)("div",{className:"mdc-notched-outline__idle"}):null)}buildClassName(t){let e=super.buildClassName(t);return this.MDComponent&&(e+=" mdc-text-field--upgraded"),e}}Ht.defaultProps={valid:!0};class Dt extends s.a{constructor(){super(...arguments),this.id=Dt.uid()}static uid(){return++this.uidCounter}componentDidMount(){this.setState({jsComponentAttached:!0})}render(t){const{className:e,outerStyle:i,helperTextPersistent:n,helperTextValidationMsg:r,...a}=t,o=a.helperText;!a.helperText&&!a.label||a.id||(a.id=`tf-${this.id}`);const l={persistent:n,"validation-msg":r};return o?Object(s.b)("div",{className:e,style:i},Object(s.b)(Ht,Object.assign({},a,{onInit:t=>{this.MDComponent=t},"aria-controls":a.helperText&&`${a.id}-helper-text`})),a.helperText&&Object(s.b)(Rt,Object.assign({id:`${a.id}-helper-text`},l),a.helperText)):Object(s.b)(Ht,Object.assign({},a,{className:e,outerStyle:i,onInit:t=>{this.MDComponent=t}}))}}Dt.uidCounter=0;class Nt extends Dt{}Nt.HelperText=Rt;var xt=i(10),wt=i.n(xt);function kt({value:t,onChange:e=(()=>{})}){return Object(s.b)(Nt,{className:wt.a.field,label:"Ellipsis",value:t,onInput:t=>e(t.currentTarget.value)})}var Pt=i(11),Mt=i.n(Pt);function Vt({value:t,onChange:e=(()=>{})}){return Object(s.b)(Nt,{className:Mt.a.mdc,label:"JSON",textarea:!0,value:t,onInput:t=>e(t.currentTarget.value)})}var Ft=i(12),jt=i.n(Ft);i(17);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const Bt={ACTIVE:"mdc-slider--active",DISABLED:"mdc-slider--disabled",DISCRETE:"mdc-slider--discrete",FOCUS:"mdc-slider--focus",IN_TRANSIT:"mdc-slider--in-transit",IS_DISCRETE:"mdc-slider--discrete",HAS_TRACK_MARKER:"mdc-slider--display-markers"},Ut={TRACK_SELECTOR:".mdc-slider__track",TRACK_MARKER_CONTAINER_SELECTOR:".mdc-slider__track-marker-container",LAST_TRACK_MARKER_SELECTOR:".mdc-slider__track-marker:last-child",THUMB_CONTAINER_SELECTOR:".mdc-slider__thumb-container",PIN_VALUE_MARKER_SELECTOR:".mdc-slider__pin-value-marker",ARIA_VALUEMIN:"aria-valuemin",ARIA_VALUEMAX:"aria-valuemax",ARIA_VALUENOW:"aria-valuenow",ARIA_DISABLED:"aria-disabled",STEP_DATA_ATTR:"data-step",CHANGE_EVENT:"MDCSlider:change",INPUT_EVENT:"MDCSlider:input"},zt={PAGE_FACTOR:4};const Wt={animationstart:{noPrefix:"animationstart",webkitPrefix:"webkitAnimationStart",styleProperty:"animation"},animationend:{noPrefix:"animationend",webkitPrefix:"webkitAnimationEnd",styleProperty:"animation"},animationiteration:{noPrefix:"animationiteration",webkitPrefix:"webkitAnimationIteration",styleProperty:"animation"},transitionend:{noPrefix:"transitionend",webkitPrefix:"webkitTransitionEnd",styleProperty:"transition"}},Gt={animation:{noPrefix:"animation",webkitPrefix:"-webkit-animation"},transform:{noPrefix:"transform",webkitPrefix:"-webkit-transform"},transition:{noPrefix:"transition",webkitPrefix:"-webkit-transition"}};function Xt(t,e){if(!function(t){return void 0!==t.document&&"function"==typeof t.document.createElement}(t)||!function(t){return t in Wt||t in Gt}(e))return e;const i=e in Wt?Wt:Gt,s=t.document.createElement("div");let n="";return n=i===Wt?function(t,e,i){return e[t].styleProperty in i.style?e[t].noPrefix:e[t].webkitPrefix}(e,i,s):i[e].noPrefix in s.style?i[e].noPrefix:i[e].webkitPrefix}function qt(t,e){return Xt(t,e)}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */const Kt={ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",ARROW_DOWN:"ArrowDown",HOME:"Home",END:"End",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown"},$t={mousedown:"mousemove",touchstart:"touchmove",pointerdown:"pointermove"},Yt=["mousedown","pointerdown","touchstart"],Zt=["mouseup","pointerup","touchend"];class Jt extends a{static get cssClasses(){return Bt}static get strings(){return Ut}static get numbers(){return zt}static get defaultAdapter(){return{hasClass:()=>!1,addClass:()=>{},removeClass:()=>{},getAttribute:()=>null,setAttribute:()=>{},removeAttribute:()=>{},computeBoundingRect:()=>({top:0,right:0,bottom:0,left:0,width:0,height:0}),getTabIndex:()=>0,registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerThumbContainerInteractionHandler:()=>{},deregisterThumbContainerInteractionHandler:()=>{},registerBodyInteractionHandler:()=>{},deregisterBodyInteractionHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},notifyInput:()=>{},notifyChange:()=>{},setThumbContainerStyleProperty:()=>{},setTrackStyleProperty:()=>{},setMarkerValue:()=>{},appendTrackMarkers:()=>{},removeTrackMarkers:()=>{},setLastTrackMarkersStyleProperty:()=>{},isRTL:()=>!1}}constructor(t){super(Object.assign(Jt.defaultAdapter,t)),this.rect_=null,this.savedTabIndex_=NaN,this.active_=!1,this.inTransit_=!1,this.isDiscrete_=!1,this.hasTrackMarker_=!1,this.handlingThumbTargetEvt_=!1,this.min_=0,this.max_=100,this.step_=0,this.value_=0,this.disabled_=!1,this.preventFocusState_=!1,this.updateUIFrame_=0,this.thumbContainerPointerHandler_=()=>{this.handlingThumbTargetEvt_=!0},this.interactionStartHandler_=t=>this.handleDown_(t),this.keydownHandler_=t=>this.handleKeydown_(t),this.focusHandler_=()=>this.handleFocus_(),this.blurHandler_=()=>this.handleBlur_(),this.resizeHandler_=()=>this.layout()}init(){this.isDiscrete_=this.adapter_.hasClass(Bt.IS_DISCRETE),this.hasTrackMarker_=this.adapter_.hasClass(Bt.HAS_TRACK_MARKER),Yt.forEach(t=>this.adapter_.registerInteractionHandler(t,this.interactionStartHandler_)),this.adapter_.registerInteractionHandler("keydown",this.keydownHandler_),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_),Yt.forEach(t=>{this.adapter_.registerThumbContainerInteractionHandler(t,this.thumbContainerPointerHandler_)}),this.adapter_.registerResizeHandler(this.resizeHandler_),this.layout(),this.isDiscrete_&&0==this.getStep()&&(this.step_=1)}destroy(){Yt.forEach(t=>{this.adapter_.deregisterInteractionHandler(t,this.interactionStartHandler_)}),this.adapter_.deregisterInteractionHandler("keydown",this.keydownHandler_),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),Yt.forEach(t=>{this.adapter_.deregisterThumbContainerInteractionHandler(t,this.thumbContainerPointerHandler_)}),this.adapter_.deregisterResizeHandler(this.resizeHandler_)}setupTrackMarker(){if(this.isDiscrete_&&this.hasTrackMarker_&&0!=this.getStep()){const t=this.getMin(),e=this.getMax(),i=this.getStep();let s=(e-t)/i;const n=Math.ceil(s)!==s;if(n&&(s=Math.ceil(s)),this.adapter_.removeTrackMarkers(),this.adapter_.appendTrackMarkers(s),n){const t=(e-s*i)/i+1,n=qt(window,"flex");this.adapter_.setLastTrackMarkersStyleProperty(n,String(t))}}}layout(){this.rect_=this.adapter_.computeBoundingRect(),this.updateUIForCurrentValue_()}getValue(){return this.value_}setValue(t){this.setValue_(t,!1)}getMax(){return this.max_}setMax(t){if(t<this.min_)throw new Error("Cannot set max to be less than the slider's minimum value");this.max_=t,this.setValue_(this.value_,!1,!0),this.adapter_.setAttribute(Ut.ARIA_VALUEMAX,String(this.max_)),this.setupTrackMarker()}getMin(){return this.min_}setMin(t){if(t>this.max_)throw new Error("Cannot set min to be greater than the slider's maximum value");this.min_=t,this.setValue_(this.value_,!1,!0),this.adapter_.setAttribute(Ut.ARIA_VALUEMIN,String(this.min_)),this.setupTrackMarker()}getStep(){return this.step_}setStep(t){if(t<0)throw new Error("Step cannot be set to a negative number");this.isDiscrete_&&("number"!=typeof t||t<1)&&(t=1),this.step_=t,this.setValue_(this.value_,!1,!0),this.setupTrackMarker()}isDisabled(){return this.disabled_}setDisabled(t){this.disabled_=t,this.toggleClass_(Bt.DISABLED,this.disabled_),this.disabled_?(this.savedTabIndex_=this.adapter_.getTabIndex(),this.adapter_.setAttribute(Ut.ARIA_DISABLED,"true"),this.adapter_.removeAttribute("tabindex")):(this.adapter_.removeAttribute(Ut.ARIA_DISABLED),isNaN(this.savedTabIndex_)||this.adapter_.setAttribute("tabindex",String(this.savedTabIndex_)))}handleDown_(t){if(this.disabled_)return;this.preventFocusState_=!0,this.setInTransit_(!this.handlingThumbTargetEvt_),this.handlingThumbTargetEvt_=!1,this.setActive_(!0);const e=t=>{this.handleMove_(t)},i=()=>{this.handleUp_(),this.adapter_.deregisterBodyInteractionHandler($t[t.type],e),Zt.forEach(t=>this.adapter_.deregisterBodyInteractionHandler(t,i))};this.adapter_.registerBodyInteractionHandler($t[t.type],e),Zt.forEach(t=>this.adapter_.registerBodyInteractionHandler(t,i)),this.setValueFromEvt_(t)}handleMove_(t){t.preventDefault(),this.setValueFromEvt_(t)}handleUp_(){this.setActive_(!1),this.adapter_.notifyChange()}getPageX_(t){return t.targetTouches&&t.targetTouches.length>0?t.targetTouches[0].pageX:t.pageX}setValueFromEvt_(t){const e=this.getPageX_(t),i=this.computeValueFromPageX_(e);this.setValue_(i,!0)}computeValueFromPageX_(t){const{max_:e,min_:i}=this;let s=(t-this.rect_.left)/this.rect_.width;return this.adapter_.isRTL()&&(s=1-s),i+s*(e-i)}handleKeydown_(t){const e=this.getKeyId_(t),i=this.getValueForKeyId_(e);isNaN(i)||(t.preventDefault(),this.adapter_.addClass(Bt.FOCUS),this.setValue_(i,!0),this.adapter_.notifyChange())}getKeyId_(t){return t.key===Kt.ARROW_LEFT||37===t.keyCode?Kt.ARROW_LEFT:t.key===Kt.ARROW_RIGHT||39===t.keyCode?Kt.ARROW_RIGHT:t.key===Kt.ARROW_UP||38===t.keyCode?Kt.ARROW_UP:t.key===Kt.ARROW_DOWN||40===t.keyCode?Kt.ARROW_DOWN:t.key===Kt.HOME||36===t.keyCode?Kt.HOME:t.key===Kt.END||35===t.keyCode?Kt.END:t.key===Kt.PAGE_UP||33===t.keyCode?Kt.PAGE_UP:t.key===Kt.PAGE_DOWN||34===t.keyCode?Kt.PAGE_DOWN:""}getValueForKeyId_(t){const{max_:e,min_:i,step_:s}=this;let n=s||(e-i)/100;switch(this.adapter_.isRTL()&&(t===Kt.ARROW_LEFT||t===Kt.ARROW_RIGHT)&&(n=-n),t){case Kt.ARROW_LEFT:case Kt.ARROW_DOWN:return this.value_-n;case Kt.ARROW_RIGHT:case Kt.ARROW_UP:return this.value_+n;case Kt.HOME:return this.min_;case Kt.END:return this.max_;case Kt.PAGE_UP:return this.value_+n*zt.PAGE_FACTOR;case Kt.PAGE_DOWN:return this.value_-n*zt.PAGE_FACTOR;default:return NaN}}handleFocus_(){this.preventFocusState_||this.adapter_.addClass(Bt.FOCUS)}handleBlur_(){this.preventFocusState_=!1,this.adapter_.removeClass(Bt.FOCUS)}setValue_(t,e,i=!1){if(t===this.value_&&!i)return;const{min_:s,max_:n}=this,r=t===s||t===n;this.step_&&!r&&(t=this.quantize_(t)),t<s?t=s:t>n&&(t=n),this.value_=t,this.adapter_.setAttribute(Ut.ARIA_VALUENOW,String(this.value_)),this.updateUIForCurrentValue_(),e&&(this.adapter_.notifyInput(),this.isDiscrete_&&this.adapter_.setMarkerValue(t))}quantize_(t){return Math.round(t/this.step_)*this.step_}updateUIForCurrentValue_(){const{max_:t,min_:e,value_:i}=this,s=(i-e)/(t-e);let n=s*this.rect_.width;this.adapter_.isRTL()&&(n=this.rect_.width-n);const r=qt(window,"transform"),a=Xt(window,"transitionend");if(this.inTransit_){const t=()=>{this.setInTransit_(!1),this.adapter_.deregisterThumbContainerInteractionHandler(a,t)};this.adapter_.registerThumbContainerInteractionHandler(a,t)}this.updateUIFrame_=requestAnimationFrame(()=>{this.adapter_.setThumbContainerStyleProperty(r,`translateX(${n}px) translateX(-50%)`),this.adapter_.setTrackStyleProperty(r,`scaleX(${s})`)})}setActive_(t){this.active_=t,this.toggleClass_(Bt.ACTIVE,this.active_)}setInTransit_(t){this.inTransit_=t,this.toggleClass_(Bt.IN_TRANSIT,this.inTransit_)}toggleClass_(t,e){e?this.adapter_.addClass(t):this.adapter_.removeClass(t)}}var Qt=Jt;
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class te extends l{static attachTo(t){return new te(t)}constructor(...t){super(...t),this.thumbContainer_,this.track_,this.pinValueMarker_,this.trackMarkerContainer_}get value(){return this.foundation_.getValue()}set value(t){this.foundation_.setValue(t)}get min(){return this.foundation_.getMin()}set min(t){this.foundation_.setMin(t)}get max(){return this.foundation_.getMax()}set max(t){this.foundation_.setMax(t)}get step(){return this.foundation_.getStep()}set step(t){this.foundation_.setStep(t)}get disabled(){return this.foundation_.isDisabled()}set disabled(t){this.foundation_.setDisabled(t)}initialize(){this.thumbContainer_=this.root_.querySelector(Ut.THUMB_CONTAINER_SELECTOR),this.track_=this.root_.querySelector(Ut.TRACK_SELECTOR),this.pinValueMarker_=this.root_.querySelector(Ut.PIN_VALUE_MARKER_SELECTOR),this.trackMarkerContainer_=this.root_.querySelector(Ut.TRACK_MARKER_CONTAINER_SELECTOR)}getDefaultFoundation(){return new Qt({hasClass:t=>this.root_.classList.contains(t),addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),getAttribute:t=>this.root_.getAttribute(t),setAttribute:(t,e)=>this.root_.setAttribute(t,e),removeAttribute:t=>this.root_.removeAttribute(t),computeBoundingRect:()=>this.root_.getBoundingClientRect(),getTabIndex:()=>this.root_.tabIndex,registerInteractionHandler:(t,e)=>{this.root_.addEventListener(t,e)},deregisterInteractionHandler:(t,e)=>{this.root_.removeEventListener(t,e)},registerThumbContainerInteractionHandler:(t,e)=>{this.thumbContainer_.addEventListener(t,e)},deregisterThumbContainerInteractionHandler:(t,e)=>{this.thumbContainer_.removeEventListener(t,e)},registerBodyInteractionHandler:(t,e)=>{document.body.addEventListener(t,e)},deregisterBodyInteractionHandler:(t,e)=>{document.body.removeEventListener(t,e)},registerResizeHandler:t=>{window.addEventListener("resize",t)},deregisterResizeHandler:t=>{window.removeEventListener("resize",t)},notifyInput:()=>{this.emit(Ut.INPUT_EVENT,this)},notifyChange:()=>{this.emit(Ut.CHANGE_EVENT,this)},setThumbContainerStyleProperty:(t,e)=>{this.thumbContainer_.style.setProperty(t,e)},setTrackStyleProperty:(t,e)=>{this.track_.style.setProperty(t,e)},setMarkerValue:t=>{this.pinValueMarker_.innerText=t},appendTrackMarkers:t=>{const e=document.createDocumentFragment();for(let i=0;i<t;i++){const t=document.createElement("div");t.classList.add("mdc-slider__track-marker"),e.appendChild(t)}this.trackMarkerContainer_.appendChild(e)},removeTrackMarkers:()=>{for(;this.trackMarkerContainer_.firstChild;)this.trackMarkerContainer_.removeChild(this.trackMarkerContainer_.firstChild)},setLastTrackMarkersStyleProperty:(t,e)=>{this.root_.querySelector(Ut.LAST_TRACK_MARKER_SELECTOR).style.setProperty(t,e)},isRTL:()=>"rtl"===getComputedStyle(this.root_).direction})}initialSyncWithDOM(){const t=parseFloat(this.root_.getAttribute(Ut.ARIA_VALUENOW));this.min=parseFloat(this.root_.getAttribute(Ut.ARIA_VALUEMIN))||this.min,this.max=parseFloat(this.root_.getAttribute(Ut.ARIA_VALUEMAX))||this.max,this.step=parseFloat(this.root_.getAttribute(Ut.STEP_DATA_ATTR))||this.step,this.value=t||this.value,this.disabled=this.root_.hasAttribute(Ut.ARIA_DISABLED)&&"false"!==this.root_.getAttribute(Ut.ARIA_DISABLED),this.foundation_.setupTrackMarker()}layout(){this.foundation_.layout()}stepUp(t=this.step||1){this.value+=t}stepDown(t=this.step||1){this.value-=t}}var ee=function(t,e,i,s){var n,r=arguments.length,a=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};class ie extends P{constructor(){super(...arguments),this.componentName="slider",this.mdcProps=["discrete"]}componentDidMount(){super.componentDidMount(),this.control&&(this.MDComponent=new te(this.control),this.MDComponent.listen("MDCSlider:change",this.onChange),this.MDComponent.listen("MDCSlider:input",this.onInput)),this.setValue(this.props.value)}componentWillUnmount(){super.componentWillUnmount(),this.MDComponent&&(this.MDComponent.unlisten("MDCSlider:change",this.onChange),this.MDComponent.unlisten("MDCSlider:input",this.onInput),this.MDComponent.destroy())}getValue(){if(this.MDComponent)return this.MDComponent.value}setValue(t){const{disabled:e=!1,min:i=0,max:s=100,step:n}=this.props;this.MDComponent&&(i>this.MDComponent.max?(this.MDComponent.max=s,this.MDComponent.min=i):(this.MDComponent.min=i,this.MDComponent.max=s),t&&(this.MDComponent.value=t),this.MDComponent.disabled=e,n&&(this.MDComponent.step=n))}onChange(t){this.props.onChange&&this.props.onChange(t)}onInput(t){this.props.onInput&&this.props.onInput(t)}materialDom(t){const{tabindex:e=0,...i}=t;return this.setValue(t),Object(s.b)("div",Object.assign({tabIndex:e,role:"slider","aria-label":"Select Value",ref:this.setControlRef},i),Object(s.b)("div",{class:"mdc-slider__track-container"},Object(s.b)("div",{class:"mdc-slider__track"})),Object(s.b)("div",{class:"mdc-slider__thumb-container"},i.discrete&&Object(s.b)("div",{class:"mdc-slider__pin"},Object(s.b)("span",{class:"mdc-slider__pin-value-marker"})),Object(s.b)("svg",{class:"mdc-slider__thumb",width:"21",height:"21"},Object(s.b)("circle",{cx:"10.5",cy:"10.5",r:"7.875"})),Object(s.b)("div",{class:"mdc-slider__focus-ring"})))}}ee([x.bind],ie.prototype,"onChange",null),ee([x.bind],ie.prototype,"onInput",null);var se=ie,ne=i(3),re=i.n(ne);function ae({value:t,onChange:e=(()=>{})}){return Object(s.b)("div",{className:re.a.container},Object(s.b)(Nt,{className:re.a.text,label:"Max Bytes",type:"number",value:String(t),onInput:t=>{const i=Number(t.target.value);console.log(i),Number.isNaN(i)||e(i)}}),Object(s.b)(se,{className:re.a.slider,min:0,max:30,step:1,value:Math.round(Math.log(t)/Math.log(2)),onInput:t=>e(2**t.detail.value)}))}function oe({ellipsis:t,onEllipsisChange:e=(()=>{}),value:i,onChange:n=(()=>{}),maxBytes:r,onMaxBytesChange:a=(()=>{})}){return Object(s.b)("div",{className:jt.a.formGroups},Object(s.b)(Y,null,"Input"),Object(s.b)(kt,{value:t,onChange:e}),Object(s.b)(ae,{value:r,onChange:a}),Object(s.b)(Vt,{value:i,onChange:n}))}i(18),i(19);const le=[];for(let t=0;t<25;t++)le.push("z"+t);var de=class extends P{constructor(){super(...arguments),this.componentName="elevation",this.mdcProps=le}materialDom(t){let e;return t.z&&(e="mdc-elevation--z"+t.z),Object(s.b)("p",Object.assign({className:e},t,{ref:this.setControlRef}),t.children)}},ce=i(4),he=i.n(ce);function ue({value:t}){const e="pending"===t.state?"Loading...":"resolved"===t.state?t.result:`Error!\n${t.error}`;return Object(s.b)("div",null,Object(s.b)(Y,null,"Output"),Object(s.b)(de,{className:[he.a.viewArea,he.a[t.state]].join(" "),z:4},Object(s.b)("pre",{class:he.a.code},Object(s.b)("code",{dangerouslySetInnerHTML:{__html:e}}))))}const _e=JSON.stringify({id:1,author:"KoharaKazuya <reflect.results@gmail.com>",title:"json-ellipsis",repository:"https://github.com/KoharaKazuya/json_ellipsis",tags:["json",{type:"technology",items:["typescript","rust","wasm-bidngen","webworkers","preact"]}]}),pe=128,me=JSON.stringify("...");const fe=document.querySelector("#app");Object(s.d)(Object(s.b)((function(){const[t,e]=Object(n.c)(_e),[i,a]=Object(n.c)(pe),[o,l]=Object(n.c)(me),d=Object(r.a)(t,i,o);return Object(s.b)(X,{header:Object(s.b)(F,null),left:Object(s.b)(oe,{ellipsis:o,onEllipsisChange:l,value:t,onChange:e,maxBytes:i,onMaxBytesChange:a}),right:Object(s.b)(ue,{value:d})})})),fe,fe.firstElementChild)}]);