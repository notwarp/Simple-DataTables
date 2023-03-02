(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.simpleDatatables = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global,Buffer){(function (){
"use strict";const t=t=>"[object Object]"===Object.prototype.toString.call(t),e=e=>{let s=!1;try{s=JSON.parse(e)}catch(t){return!1}return!(null===s||!Array.isArray(s)&&!t(s))&&s},s=(t,e)=>{const s=document.createElement(t);if(e&&"object"==typeof e)for(const t in e)"html"===t?s.innerHTML=e[t]:s.setAttribute(t,e[t]);return s},n=t=>["#text","#comment"].includes(t.nodeName)?t.data:t.childNodes?t.childNodes.map((t=>n(t))).join(""):"",i=function(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},o=function(t,e){let s=0,n=0;for(;s<t+1;){e[n].hidden||(s+=1),n+=1}return n-1},a=function(t,e){let s=t,n=0;for(;n<t;){e[t].hidden&&(s-=1),n++}return s};class r{}function l(t,e){return function(){return t.apply(e,arguments)}}const{toString:c}=Object.prototype,{getPrototypeOf:d}=Object,h=(u=Object.create(null),t=>{const e=c.call(t);return u[e]||(u[e]=e.slice(8,-1).toLowerCase())});var u;const p=t=>(t=t.toLowerCase(),e=>h(e)===t),f=t=>e=>typeof e===t,{isArray:m}=Array,g=f("undefined");const b=p("ArrayBuffer");const y=f("string"),v=f("function"),w=f("number"),_=t=>null!==t&&"object"==typeof t,E=t=>{if("object"!==h(t))return!1;const e=d(t);return!(null!==e&&e!==Object.prototype&&null!==Object.getPrototypeOf(e)||Symbol.toStringTag in t||Symbol.iterator in t)},x=p("Date"),N=p("File"),O=p("Blob"),D=p("FileList"),M=p("URLSearchParams");function S(t,e,{allOwnKeys:s=!1}={}){if(null==t)return;let n,i;if("object"!=typeof t&&(t=[t]),m(t))for(n=0,i=t.length;n<i;n++)e.call(null,t[n],n,t);else{const i=s?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(n=0;n<o;n++)a=i[n],e.call(null,t[a],a,t)}}function C(t,e){e=e.toLowerCase();const s=Object.keys(t);let n,i=s.length;for(;i-- >0;)if(n=s[i],e===n.toLowerCase())return n;return null}const T="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,A=t=>!g(t)&&t!==T;const V=(R="undefined"!=typeof Uint8Array&&d(Uint8Array),t=>R&&t instanceof R);var R;const L=p("HTMLFormElement"),k=(({hasOwnProperty:t})=>(e,s)=>t.call(e,s))(Object.prototype),P=p("RegExp"),$=(t,e)=>{const s=Object.getOwnPropertyDescriptors(t),n={};S(s,((s,i)=>{!1!==e(s,i,t)&&(n[i]=s)})),Object.defineProperties(t,n)};var j={isArray:m,isArrayBuffer:b,isBuffer:function(t){return null!==t&&!g(t)&&null!==t.constructor&&!g(t.constructor)&&v(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{const e="[object FormData]";return t&&("function"==typeof FormData&&t instanceof FormData||c.call(t)===e||v(t.toString)&&t.toString()===e)},isArrayBufferView:function(t){let e;return e="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&b(t.buffer),e},isString:y,isNumber:w,isBoolean:t=>!0===t||!1===t,isObject:_,isPlainObject:E,isUndefined:g,isDate:x,isFile:N,isBlob:O,isRegExp:P,isFunction:v,isStream:t=>_(t)&&v(t.pipe),isURLSearchParams:M,isTypedArray:V,isFileList:D,forEach:S,merge:function t(){const{caseless:e}=A(this)&&this||{},s={},n=(n,i)=>{const o=e&&C(s,i)||i;E(s[o])&&E(n)?s[o]=t(s[o],n):E(n)?s[o]=t({},n):m(n)?s[o]=n.slice():s[o]=n};for(let t=0,e=arguments.length;t<e;t++)arguments[t]&&S(arguments[t],n);return s},extend:(t,e,s,{allOwnKeys:n}={})=>(S(e,((e,n)=>{s&&v(e)?t[n]=l(e,s):t[n]=e}),{allOwnKeys:n}),t),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,e,s,n)=>{t.prototype=Object.create(e.prototype,n),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),s&&Object.assign(t.prototype,s)},toFlatObject:(t,e,s,n)=>{let i,o,a;const r={};if(e=e||{},null==t)return e;do{for(i=Object.getOwnPropertyNames(t),o=i.length;o-- >0;)a=i[o],n&&!n(a,t,e)||r[a]||(e[a]=t[a],r[a]=!0);t=!1!==s&&d(t)}while(t&&(!s||s(t,e))&&t!==Object.prototype);return e},kindOf:h,kindOfTest:p,endsWith:(t,e,s)=>{t=String(t),(void 0===s||s>t.length)&&(s=t.length),s-=e.length;const n=t.indexOf(e,s);return-1!==n&&n===s},toArray:t=>{if(!t)return null;if(m(t))return t;let e=t.length;if(!w(e))return null;const s=new Array(e);for(;e-- >0;)s[e]=t[e];return s},forEachEntry:(t,e)=>{const s=(t&&t[Symbol.iterator]).call(t);let n;for(;(n=s.next())&&!n.done;){const s=n.value;e.call(t,s[0],s[1])}},matchAll:(t,e)=>{let s;const n=[];for(;null!==(s=t.exec(e));)n.push(s);return n},isHTMLForm:L,hasOwnProperty:k,hasOwnProp:k,reduceDescriptors:$,freezeMethods:t=>{$(t,((e,s)=>{if(v(t)&&-1!==["arguments","caller","callee"].indexOf(s))return!1;const n=t[s];v(n)&&(e.enumerable=!1,"writable"in e?e.writable=!1:e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+s+"'")}))}))},toObjectSet:(t,e)=>{const s={},n=t=>{t.forEach((t=>{s[t]=!0}))};return m(t)?n(t):n(String(t).split(e)),s},toCamelCase:t=>t.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(t,e,s){return e.toUpperCase()+s})),noop:()=>{},toFiniteNumber:(t,e)=>(t=+t,Number.isFinite(t)?t:e),findKey:C,global:T,isContextDefined:A,toJSONObject:t=>{const e=new Array(10),s=(t,n)=>{if(_(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[n]=t;const i=m(t)?[]:{};return S(t,((t,e)=>{const o=s(t,n+1);!g(o)&&(i[e]=o)})),e[n]=void 0,i}}return t};return s(t,0)}};function H(t,e,s,n,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=t,this.name="AxiosError",e&&(this.code=e),s&&(this.config=s),n&&(this.request=n),i&&(this.response=i)}j.inherits(H,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:j.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const I=H.prototype,F={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((t=>{F[t]={value:t}})),Object.defineProperties(H,F),Object.defineProperty(I,"isAxiosError",{value:!0}),H.from=(t,e,s,n,i,o)=>{const a=Object.create(I);return j.toFlatObject(t,a,(function(t){return t!==Error.prototype}),(t=>"isAxiosError"!==t)),H.call(a,t.message,e,s,n,i),a.cause=t,a.name=t.name,o&&Object.assign(a,o),a};"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var U="object"==typeof self?self.FormData:window.FormData;function B(t){return j.isPlainObject(t)||j.isArray(t)}function Y(t){return j.endsWith(t,"[]")?t.slice(0,-2):t}function q(t,e,s){return t?t.concat(e).map((function(t,e){return t=Y(t),!s&&e?"["+t+"]":t})).join(s?".":""):e}const z=j.toFlatObject(j,{},null,(function(t){return/^is[A-Z]/.test(t)}));function J(t,e,s){if(!j.isObject(t))throw new TypeError("target must be an object");e=e||new(U||FormData);const n=(s=j.toFlatObject(s,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(t,e){return!j.isUndefined(e[t])}))).metaTokens,i=s.visitor||d,o=s.dots,a=s.indexes,r=(s.Blob||"undefined"!=typeof Blob&&Blob)&&((l=e)&&j.isFunction(l.append)&&"FormData"===l[Symbol.toStringTag]&&l[Symbol.iterator]);var l;if(!j.isFunction(i))throw new TypeError("visitor must be a function");function c(t){if(null===t)return"";if(j.isDate(t))return t.toISOString();if(!r&&j.isBlob(t))throw new H("Blob is not supported. Use a Buffer instead.");return j.isArrayBuffer(t)||j.isTypedArray(t)?r&&"function"==typeof Blob?new Blob([t]):Buffer.from(t):t}function d(t,s,i){let r=t;if(t&&!i&&"object"==typeof t)if(j.endsWith(s,"{}"))s=n?s:s.slice(0,-2),t=JSON.stringify(t);else if(j.isArray(t)&&function(t){return j.isArray(t)&&!t.some(B)}(t)||j.isFileList(t)||j.endsWith(s,"[]")&&(r=j.toArray(t)))return s=Y(s),r.forEach((function(t,n){!j.isUndefined(t)&&null!==t&&e.append(!0===a?q([s],n,o):null===a?s:s+"[]",c(t))})),!1;return!!B(t)||(e.append(q(i,s,o),c(t)),!1)}const h=[],u=Object.assign(z,{defaultVisitor:d,convertValue:c,isVisitable:B});if(!j.isObject(t))throw new TypeError("data must be an object");return function t(s,n){if(!j.isUndefined(s)){if(-1!==h.indexOf(s))throw Error("Circular reference detected in "+n.join("."));h.push(s),j.forEach(s,(function(s,o){!0===(!(j.isUndefined(s)||null===s)&&i.call(e,s,j.isString(o)?o.trim():o,n,u))&&t(s,n?n.concat(o):[o])})),h.pop()}}(t),e}function W(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,(function(t){return e[t]}))}function Z(t,e){this._pairs=[],t&&J(t,this,e)}const Q=Z.prototype;function K(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function X(t,e,s){if(!e)return t;const n=s&&s.encode||K,i=s&&s.serialize;let o;if(o=i?i(e,s):j.isURLSearchParams(e)?e.toString():new Z(e,s).toString(n),o){const e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+o}return t}Q.append=function(t,e){this._pairs.push([t,e])},Q.toString=function(t){const e=t?function(e){return t.call(this,e,W)}:W;return this._pairs.map((function(t){return e(t[0])+"="+e(t[1])}),"").join("&")};var G=class{constructor(){this.handlers=[]}use(t,e,s){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!s&&s.synchronous,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){j.forEach(this.handlers,(function(e){null!==e&&t(e)}))}},tt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},et="undefined"!=typeof URLSearchParams?URLSearchParams:Z,st=FormData;const nt=(()=>{let t;return("undefined"==typeof navigator||"ReactNative"!==(t=navigator.product)&&"NativeScript"!==t&&"NS"!==t)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),it="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var ot={isBrowser:!0,classes:{URLSearchParams:et,FormData:st,Blob:Blob},isStandardBrowserEnv:nt,isStandardBrowserWebWorkerEnv:it,protocols:["http","https","file","blob","url","data"]};function at(t){function e(t,s,n,i){let o=t[i++];const a=Number.isFinite(+o),r=i>=t.length;if(o=!o&&j.isArray(n)?n.length:o,r)return j.hasOwnProp(n,o)?n[o]=[n[o],s]:n[o]=s,!a;n[o]&&j.isObject(n[o])||(n[o]=[]);return e(t,s,n[o],i)&&j.isArray(n[o])&&(n[o]=function(t){const e={},s=Object.keys(t);let n;const i=s.length;let o;for(n=0;n<i;n++)o=s[n],e[o]=t[o];return e}(n[o])),!a}if(j.isFormData(t)&&j.isFunction(t.entries)){const s={};return j.forEachEntry(t,((t,n)=>{e(function(t){return j.matchAll(/\w+|\[(\w*)]/g,t).map((t=>"[]"===t[0]?"":t[1]||t[0]))}(t),n,s,0)})),s}return null}const rt={"Content-Type":void 0};const lt={transitional:tt,adapter:["xhr","http"],transformRequest:[function(t,e){const s=e.getContentType()||"",n=s.indexOf("application/json")>-1,i=j.isObject(t);i&&j.isHTMLForm(t)&&(t=new FormData(t));if(j.isFormData(t))return n&&n?JSON.stringify(at(t)):t;if(j.isArrayBuffer(t)||j.isBuffer(t)||j.isStream(t)||j.isFile(t)||j.isBlob(t))return t;if(j.isArrayBufferView(t))return t.buffer;if(j.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let o;if(i){if(s.indexOf("application/x-www-form-urlencoded")>-1)return function(t,e){return J(t,new ot.classes.URLSearchParams,Object.assign({visitor:function(t,e,s,n){return ot.isNode&&j.isBuffer(t)?(this.append(e,t.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},e))}(t,this.formSerializer).toString();if((o=j.isFileList(t))||s.indexOf("multipart/form-data")>-1){const e=this.env&&this.env.FormData;return J(o?{"files[]":t}:t,e&&new e,this.formSerializer)}}return i||n?(e.setContentType("application/json",!1),function(t,e,s){if(j.isString(t))try{return(e||JSON.parse)(t),j.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(s||JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){const e=this.transitional||lt.transitional,s=e&&e.forcedJSONParsing,n="json"===this.responseType;if(t&&j.isString(t)&&(s&&!this.responseType||n)){const s=!(e&&e.silentJSONParsing)&&n;try{return JSON.parse(t)}catch(t){if(s){if("SyntaxError"===t.name)throw H.from(t,H.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ot.classes.FormData,Blob:ot.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};j.forEach(["delete","get","head"],(function(t){lt.headers[t]={}})),j.forEach(["post","put","patch"],(function(t){lt.headers[t]=j.merge(rt)}));var ct=lt;const dt=j.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);const ht=Symbol("internals");function ut(t){return t&&String(t).trim().toLowerCase()}function pt(t){return!1===t||null==t?t:j.isArray(t)?t.map(pt):String(t)}function ft(t,e,s,n){return j.isFunction(n)?n.call(this,e,s):j.isString(e)?j.isString(n)?-1!==e.indexOf(n):j.isRegExp(n)?n.test(e):void 0:void 0}class mt{constructor(t){t&&this.set(t)}set(t,e,s){const n=this;function i(t,e,s){const i=ut(e);if(!i)throw new Error("header name must be a non-empty string");const o=j.findKey(n,i);(!o||void 0===n[o]||!0===s||void 0===s&&!1!==n[o])&&(n[o||e]=pt(t))}const o=(t,e)=>j.forEach(t,((t,s)=>i(t,s,e)));return j.isPlainObject(t)||t instanceof this.constructor?o(t,e):j.isString(t)&&(t=t.trim())&&!/^[-_a-zA-Z]+$/.test(t.trim())?o((t=>{const e={};let s,n,i;return t&&t.split("\n").forEach((function(t){i=t.indexOf(":"),s=t.substring(0,i).trim().toLowerCase(),n=t.substring(i+1).trim(),!s||e[s]&&dt[s]||("set-cookie"===s?e[s]?e[s].push(n):e[s]=[n]:e[s]=e[s]?e[s]+", "+n:n)})),e})(t),e):null!=t&&i(e,t,s),this}get(t,e){if(t=ut(t)){const s=j.findKey(this,t);if(s){const t=this[s];if(!e)return t;if(!0===e)return function(t){const e=Object.create(null),s=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=s.exec(t);)e[n[1]]=n[2];return e}(t);if(j.isFunction(e))return e.call(this,t,s);if(j.isRegExp(e))return e.exec(t);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=ut(t)){const s=j.findKey(this,t);return!(!s||e&&!ft(0,this[s],s,e))}return!1}delete(t,e){const s=this;let n=!1;function i(t){if(t=ut(t)){const i=j.findKey(s,t);!i||e&&!ft(0,s[i],i,e)||(delete s[i],n=!0)}}return j.isArray(t)?t.forEach(i):i(t),n}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(t){const e=this,s={};return j.forEach(this,((n,i)=>{const o=j.findKey(s,i);if(o)return e[o]=pt(n),void delete e[i];const a=t?function(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((t,e,s)=>e.toUpperCase()+s))}(i):String(i).trim();a!==i&&delete e[i],e[a]=pt(n),s[a]=!0})),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return j.forEach(this,((s,n)=>{null!=s&&!1!==s&&(e[n]=t&&j.isArray(s)?s.join(", "):s)})),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([t,e])=>t+": "+e)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const s=new this(t);return e.forEach((t=>s.set(t))),s}static accessor(t){const e=(this[ht]=this[ht]={accessors:{}}).accessors,s=this.prototype;function n(t){const n=ut(t);e[n]||(!function(t,e){const s=j.toCamelCase(" "+e);["get","set","has"].forEach((n=>{Object.defineProperty(t,n+s,{value:function(t,s,i){return this[n].call(this,e,t,s,i)},configurable:!0})}))}(s,t),e[n]=!0)}return j.isArray(t)?t.forEach(n):n(t),this}}mt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),j.freezeMethods(mt.prototype),j.freezeMethods(mt);var gt=mt;function bt(t,e){const s=this||ct,n=e||s,i=gt.from(n.headers);let o=n.data;return j.forEach(t,(function(t){o=t.call(s,o,i.normalize(),e?e.status:void 0)})),i.normalize(),o}function yt(t){return!(!t||!t.__CANCEL__)}function vt(t,e,s){H.call(this,null==t?"canceled":t,H.ERR_CANCELED,e,s),this.name="CanceledError"}j.inherits(vt,H,{__CANCEL__:!0});var wt=ot.isStandardBrowserEnv?{write:function(t,e,s,n,i,o){const a=[];a.push(t+"="+encodeURIComponent(e)),j.isNumber(s)&&a.push("expires="+new Date(s).toGMTString()),j.isString(n)&&a.push("path="+n),j.isString(i)&&a.push("domain="+i),!0===o&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function _t(t,e){return t&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)?function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}(t,e):e}var Et=ot.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");let s;function n(s){let n=s;return t&&(e.setAttribute("href",n),n=e.href),e.setAttribute("href",n),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname}}return s=n(window.location.href),function(t){const e=j.isString(t)?n(t):t;return e.protocol===s.protocol&&e.host===s.host}}():function(){return!0};function xt(t,e){let s=0;const n=function(t,e){t=t||10;const s=new Array(t),n=new Array(t);let i,o=0,a=0;return e=void 0!==e?e:1e3,function(r){const l=Date.now(),c=n[a];i||(i=l),s[o]=r,n[o]=l;let d=a,h=0;for(;d!==o;)h+=s[d++],d%=t;if(o=(o+1)%t,o===a&&(a=(a+1)%t),l-i<e)return;const u=c&&l-c;return u?Math.round(1e3*h/u):void 0}}(50,250);return i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,r=o-s,l=n(r);s=o;const c={loaded:o,total:a,progress:a?o/a:void 0,bytes:r,rate:l||void 0,estimated:l&&a&&o<=a?(a-o)/l:void 0,event:i};c[e?"download":"upload"]=!0,t(c)}}const Nt={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(t){return new Promise((function(e,s){let n=t.data;const i=gt.from(t.headers).normalize(),o=t.responseType;let a;function r(){t.cancelToken&&t.cancelToken.unsubscribe(a),t.signal&&t.signal.removeEventListener("abort",a)}j.isFormData(n)&&(ot.isStandardBrowserEnv||ot.isStandardBrowserWebWorkerEnv)&&i.setContentType(!1);let l=new XMLHttpRequest;if(t.auth){const e=t.auth.username||"",s=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";i.set("Authorization","Basic "+btoa(e+":"+s))}const c=_t(t.baseURL,t.url);function d(){if(!l)return;const n=gt.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders());!function(t,e,s){const n=s.config.validateStatus;s.status&&n&&!n(s.status)?e(new H("Request failed with status code "+s.status,[H.ERR_BAD_REQUEST,H.ERR_BAD_RESPONSE][Math.floor(s.status/100)-4],s.config,s.request,s)):t(s)}((function(t){e(t),r()}),(function(t){s(t),r()}),{data:o&&"text"!==o&&"json"!==o?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:n,config:t,request:l}),l=null}if(l.open(t.method.toUpperCase(),X(c,t.params,t.paramsSerializer),!0),l.timeout=t.timeout,"onloadend"in l?l.onloadend=d:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&setTimeout(d)},l.onabort=function(){l&&(s(new H("Request aborted",H.ECONNABORTED,t,l)),l=null)},l.onerror=function(){s(new H("Network Error",H.ERR_NETWORK,t,l)),l=null},l.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const n=t.transitional||tt;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),s(new H(e,n.clarifyTimeoutError?H.ETIMEDOUT:H.ECONNABORTED,t,l)),l=null},ot.isStandardBrowserEnv){const e=(t.withCredentials||Et(c))&&t.xsrfCookieName&&wt.read(t.xsrfCookieName);e&&i.set(t.xsrfHeaderName,e)}void 0===n&&i.setContentType(null),"setRequestHeader"in l&&j.forEach(i.toJSON(),(function(t,e){l.setRequestHeader(e,t)})),j.isUndefined(t.withCredentials)||(l.withCredentials=!!t.withCredentials),o&&"json"!==o&&(l.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&l.addEventListener("progress",xt(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",xt(t.onUploadProgress)),(t.cancelToken||t.signal)&&(a=e=>{l&&(s(!e||e.type?new vt(null,t,l):e),l.abort(),l=null)},t.cancelToken&&t.cancelToken.subscribe(a),t.signal&&(t.signal.aborted?a():t.signal.addEventListener("abort",a)));const h=function(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}(c);h&&-1===ot.protocols.indexOf(h)?s(new H("Unsupported protocol "+h+":",H.ERR_BAD_REQUEST,t)):l.send(n||null)}))}};j.forEach(Nt,((t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(t){}Object.defineProperty(t,"adapterName",{value:e})}}));var Ot=t=>{t=j.isArray(t)?t:[t];const{length:e}=t;let s,n;for(let i=0;i<e&&(s=t[i],!(n=j.isString(s)?Nt[s.toLowerCase()]:s));i++);if(!n){if(!1===n)throw new H(`Adapter ${s} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(j.hasOwnProp(Nt,s)?`Adapter '${s}' is not available in the build`:`Unknown adapter '${s}'`)}if(!j.isFunction(n))throw new TypeError("adapter is not a function");return n};function Dt(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new vt(null,t)}function Mt(t){Dt(t),t.headers=gt.from(t.headers),t.data=bt.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);return Ot(t.adapter||ct.adapter)(t).then((function(e){return Dt(t),e.data=bt.call(t,t.transformResponse,e),e.headers=gt.from(e.headers),e}),(function(e){return yt(e)||(Dt(t),e&&e.response&&(e.response.data=bt.call(t,t.transformResponse,e.response),e.response.headers=gt.from(e.response.headers))),Promise.reject(e)}))}const St=t=>t instanceof gt?t.toJSON():t;function Ct(t,e){e=e||{};const s={};function n(t,e,s){return j.isPlainObject(t)&&j.isPlainObject(e)?j.merge.call({caseless:s},t,e):j.isPlainObject(e)?j.merge({},e):j.isArray(e)?e.slice():e}function i(t,e,s){return j.isUndefined(e)?j.isUndefined(t)?void 0:n(void 0,t,s):n(t,e,s)}function o(t,e){if(!j.isUndefined(e))return n(void 0,e)}function a(t,e){return j.isUndefined(e)?j.isUndefined(t)?void 0:n(void 0,t):n(void 0,e)}function r(s,i,o){return o in e?n(s,i):o in t?n(void 0,s):void 0}const l={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:r,headers:(t,e)=>i(St(t),St(e),!0)};return j.forEach(Object.keys(t).concat(Object.keys(e)),(function(n){const o=l[n]||i,a=o(t[n],e[n],n);j.isUndefined(a)&&o!==r||(s[n]=a)})),s}const Tt="1.2.3",At={};["object","boolean","number","function","string","symbol"].forEach(((t,e)=>{At[t]=function(s){return typeof s===t||"a"+(e<1?"n ":" ")+t}}));const Vt={};At.transitional=function(t,e,s){function n(t,e){return"[Axios v1.2.3] Transitional option '"+t+"'"+e+(s?". "+s:"")}return(s,i,o)=>{if(!1===t)throw new H(n(i," has been removed"+(e?" in "+e:"")),H.ERR_DEPRECATED);return e&&!Vt[i]&&(Vt[i]=!0,console.warn(n(i," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(s,i,o)}};var Rt={assertOptions:function(t,e,s){if("object"!=typeof t)throw new H("options must be an object",H.ERR_BAD_OPTION_VALUE);const n=Object.keys(t);let i=n.length;for(;i-- >0;){const o=n[i],a=e[o];if(a){const e=t[o],s=void 0===e||a(e,o,t);if(!0!==s)throw new H("option "+o+" must be "+s,H.ERR_BAD_OPTION_VALUE)}else if(!0!==s)throw new H("Unknown option "+o,H.ERR_BAD_OPTION)}},validators:At};const Lt=Rt.validators;class kt{constructor(t){this.defaults=t,this.interceptors={request:new G,response:new G}}request(t,e){"string"==typeof t?(e=e||{}).url=t:e=t||{},e=Ct(this.defaults,e);const{transitional:s,paramsSerializer:n,headers:i}=e;let o;void 0!==s&&Rt.assertOptions(s,{silentJSONParsing:Lt.transitional(Lt.boolean),forcedJSONParsing:Lt.transitional(Lt.boolean),clarifyTimeoutError:Lt.transitional(Lt.boolean)},!1),void 0!==n&&Rt.assertOptions(n,{encode:Lt.function,serialize:Lt.function},!0),e.method=(e.method||this.defaults.method||"get").toLowerCase(),o=i&&j.merge(i.common,i[e.method]),o&&j.forEach(["delete","get","head","post","put","patch","common"],(t=>{delete i[t]})),e.headers=gt.concat(o,i);const a=[];let r=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(r=r&&t.synchronous,a.unshift(t.fulfilled,t.rejected))}));const l=[];let c;this.interceptors.response.forEach((function(t){l.push(t.fulfilled,t.rejected)}));let d,h=0;if(!r){const t=[Mt.bind(this),void 0];for(t.unshift.apply(t,a),t.push.apply(t,l),d=t.length,c=Promise.resolve(e);h<d;)c=c.then(t[h++],t[h++]);return c}d=a.length;let u=e;for(h=0;h<d;){const t=a[h++],e=a[h++];try{u=t(u)}catch(t){e.call(this,t);break}}try{c=Mt.call(this,u)}catch(t){return Promise.reject(t)}for(h=0,d=l.length;h<d;)c=c.then(l[h++],l[h++]);return c}getUri(t){return X(_t((t=Ct(this.defaults,t)).baseURL,t.url),t.params,t.paramsSerializer)}}j.forEach(["delete","get","head","options"],(function(t){kt.prototype[t]=function(e,s){return this.request(Ct(s||{},{method:t,url:e,data:(s||{}).data}))}})),j.forEach(["post","put","patch"],(function(t){function e(e){return function(s,n,i){return this.request(Ct(i||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:s,data:n}))}}kt.prototype[t]=e(),kt.prototype[t+"Form"]=e(!0)}));var Pt=kt;class $t{constructor(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");let e;this.promise=new Promise((function(t){e=t}));const s=this;this.promise.then((t=>{if(!s._listeners)return;let e=s._listeners.length;for(;e-- >0;)s._listeners[e](t);s._listeners=null})),this.promise.then=t=>{let e;const n=new Promise((t=>{s.subscribe(t),e=t})).then(t);return n.cancel=function(){s.unsubscribe(e)},n},t((function(t,n,i){s.reason||(s.reason=new vt(t,n,i),e(s.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}static source(){let t;const e=new $t((function(e){t=e}));return{token:e,cancel:t}}}var jt=$t;const Ht={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ht).forEach((([t,e])=>{Ht[e]=t}));var It=Ht;const Ft=function t(e){const s=new Pt(e),n=l(Pt.prototype.request,s);return j.extend(n,Pt.prototype,s,{allOwnKeys:!0}),j.extend(n,s,null,{allOwnKeys:!0}),n.create=function(s){return t(Ct(e,s))},n}(ct);Ft.Axios=Pt,Ft.CanceledError=vt,Ft.CancelToken=jt,Ft.isCancel=yt,Ft.VERSION=Tt,Ft.toFormData=J,Ft.AxiosError=H,Ft.Cancel=Ft.CanceledError,Ft.all=function(t){return Promise.all(t)},Ft.spread=function(t){return function(e){return t.apply(null,e)}},Ft.isAxiosError=function(t){return j.isObject(t)&&!0===t.isAxiosError},Ft.mergeConfig=Ct,Ft.AxiosHeaders=gt,Ft.formToJSON=t=>at(j.isHTMLForm(t)?new FormData(t):t),Ft.HttpStatusCode=It,Ft.default=Ft;var Ut=Ft;function Bt(t,e,s){var n;return"#text"===t.nodeName?n=s.document.createTextNode(t.data):"#comment"===t.nodeName?n=s.document.createComment(t.data):(e?n=s.document.createElementNS("http://www.w3.org/2000/svg",t.nodeName):"svg"===t.nodeName.toLowerCase()?(n=s.document.createElementNS("http://www.w3.org/2000/svg","svg"),e=!0):n=s.document.createElement(t.nodeName),t.attributes&&Object.entries(t.attributes).forEach((function(t){var e=t[0],s=t[1];return n.setAttribute(e,s)})),t.childNodes&&t.childNodes.forEach((function(t){return n.appendChild(Bt(t,e,s))})),s.valueDiffing&&(t.value&&(n instanceof HTMLButtonElement||n instanceof HTMLDataElement||n instanceof HTMLInputElement||n instanceof HTMLLIElement||n instanceof HTMLMeterElement||n instanceof HTMLOptionElement||n instanceof HTMLProgressElement||n instanceof HTMLParamElement)&&(n.value=t.value),t.checked&&n instanceof HTMLInputElement&&(n.checked=t.checked),t.selected&&n instanceof HTMLOptionElement&&(n.selected=t.selected))),n}var Yt=function(t,e){for(e=e.slice();e.length>0;){var s=e.splice(0,1)[0];t=t.childNodes[s]}return t};function qt(t,e,s){var n,i,o,a=e[s._const.action],r=e[s._const.route];[s._const.addElement,s._const.addTextElement].includes(a)||(n=Yt(t,r));var l={diff:e,node:n};if(s.preDiffApply(l))return!0;switch(a){case s._const.addAttribute:if(!(n&&n instanceof Element))return!1;n.setAttribute(e[s._const.name],e[s._const.value]);break;case s._const.modifyAttribute:if(!(n&&n instanceof Element))return!1;n.setAttribute(e[s._const.name],e[s._const.newValue]),n instanceof HTMLInputElement&&"value"===e[s._const.name]&&(n.value=e[s._const.newValue]);break;case s._const.removeAttribute:if(!(n&&n instanceof Element))return!1;n.removeAttribute(e[s._const.name]);break;case s._const.modifyTextElement:if(!(n&&n instanceof Text))return!1;s.textDiff(n,n.data,e[s._const.oldValue],e[s._const.newValue]);break;case s._const.modifyValue:if(!n||void 0===n.value)return!1;n.value=e[s._const.newValue];break;case s._const.modifyComment:if(!(n&&n instanceof Comment))return!1;s.textDiff(n,n.data,e[s._const.oldValue],e[s._const.newValue]);break;case s._const.modifyChecked:if(!n||void 0===n.checked)return!1;n.checked=e[s._const.newValue];break;case s._const.modifySelected:if(!n||void 0===n.selected)return!1;n.selected=e[s._const.newValue];break;case s._const.replaceElement:n.parentNode.replaceChild(Bt(e[s._const.newValue],"svg"===e[s._const.newValue].nodeName.toLowerCase(),s),n);break;case s._const.relocateGroup:Array.apply(void 0,new Array(e[s._const.groupLength])).map((function(){return n.removeChild(n.childNodes[e[s._const.from]])})).forEach((function(t,i){0===i&&(o=n.childNodes[e[s._const.to]]),n.insertBefore(t,o||null)}));break;case s._const.removeElement:n.parentNode.removeChild(n);break;case s._const.addElement:var c=(d=r.slice()).splice(d.length-1,1)[0];if(!((n=Yt(t,d))instanceof Element))return!1;n.insertBefore(Bt(e[s._const.element],"http://www.w3.org/2000/svg"===n.namespaceURI,s),n.childNodes[c]||null);break;case s._const.removeTextElement:if(!n||3!==n.nodeType)return!1;n.parentNode.removeChild(n);break;case s._const.addTextElement:var d;if(c=(d=r.slice()).splice(d.length-1,1)[0],i=s.document.createTextNode(e[s._const.value]),!(n=Yt(t,d)).childNodes)return!1;n.insertBefore(i,n.childNodes[c]||null);break;default:console.log("unknown action")}return s.postDiffApply({diff:l.diff,node:l.node,newNode:i}),!0}function zt(t,e,s){var n=t[e];t[e]=t[s],t[s]=n}var Jt=function(t){var e=[];return e.push(t.nodeName),"#text"!==t.nodeName&&"#comment"!==t.nodeName&&t.attributes&&(t.attributes.class&&e.push("".concat(t.nodeName,".").concat(t.attributes.class.replace(/ /g,"."))),t.attributes.id&&e.push("".concat(t.nodeName,"#").concat(t.attributes.id))),e},Wt=function(t){var e={},s={};return t.forEach((function(t){Jt(t).forEach((function(t){var n=t in e;n||t in s?n&&(delete e[t],s[t]=!0):e[t]=!0}))})),e},Zt=function(t,e){var s=Wt(t),n=Wt(e),i={};return Object.keys(s).forEach((function(t){n[t]&&(i[t]=!0)})),i},Qt=function(t){return delete t.outerDone,delete t.innerDone,delete t.valueDone,!t.childNodes||t.childNodes.every(Qt)},Kt=function(t){if(Object.prototype.hasOwnProperty.call(t,"data"))return{nodeName:"#text"===t.nodeName?"#text":"#comment",data:t.data};var e={nodeName:t.nodeName};return Object.prototype.hasOwnProperty.call(t,"attributes")&&(e.attributes=t.attributes),Object.prototype.hasOwnProperty.call(t,"checked")&&(e.checked=t.checked),Object.prototype.hasOwnProperty.call(t,"value")&&(e.value=t.value),Object.prototype.hasOwnProperty.call(t,"selected")&&(e.selected=t.selected),Object.prototype.hasOwnProperty.call(t,"childNodes")&&(e.childNodes=t.childNodes.map((function(t){return Kt(t)}))),e},Xt=function(t,e){if(!["nodeName","value","checked","selected","data"].every((function(s){return t[s]===e[s]})))return!1;if(Object.prototype.hasOwnProperty.call(t,"data"))return!0;if(Boolean(t.attributes)!==Boolean(e.attributes))return!1;if(Boolean(t.childNodes)!==Boolean(e.childNodes))return!1;if(t.attributes){var s=Object.keys(t.attributes),n=Object.keys(e.attributes);if(s.length!==n.length)return!1;if(!s.every((function(s){return t.attributes[s]===e.attributes[s]})))return!1}if(t.childNodes){if(t.childNodes.length!==e.childNodes.length)return!1;if(!t.childNodes.every((function(t,s){return Xt(t,e.childNodes[s])})))return!1}return!0},Gt=function(t,e,s,n,i){if(void 0===i&&(i=!1),!t||!e)return!1;if(t.nodeName!==e.nodeName)return!1;if(["#text","#comment"].includes(t.nodeName))return!!i||t.data===e.data;if(t.nodeName in s)return!0;if(t.attributes&&e.attributes){if(t.attributes.id){if(t.attributes.id!==e.attributes.id)return!1;if("".concat(t.nodeName,"#").concat(t.attributes.id)in s)return!0}if(t.attributes.class&&t.attributes.class===e.attributes.class&&"".concat(t.nodeName,".").concat(t.attributes.class.replace(/ /g,"."))in s)return!0}if(n)return!0;var o=t.childNodes?t.childNodes.slice().reverse():[],a=e.childNodes?e.childNodes.slice().reverse():[];if(o.length!==a.length)return!1;if(i)return o.every((function(t,e){return t.nodeName===a[e].nodeName}));var r=Zt(o,a);return o.every((function(t,e){return Gt(t,a[e],r,!0,!0)}))},te=function(t,e){return Array.apply(void 0,new Array(t)).map((function(){return e}))},ee=function(t,e){for(var s=t.childNodes?t.childNodes:[],n=e.childNodes?e.childNodes:[],i=te(s.length,!1),o=te(n.length,!1),a=[],r=function(){return arguments[1]},l=!1,c=function(){var t=function(t,e,s,n){var i=0,o=[],a=t.length,r=e.length,l=Array.apply(void 0,new Array(a+1)).map((function(){return[]})),c=Zt(t,e),d=a===r;d&&t.some((function(t,s){var n=Jt(t),i=Jt(e[s]);return n.length!==i.length?(d=!1,!0):(n.some((function(t,e){if(t!==i[e])return d=!1,!0})),!d||void 0)}));for(var h=0;h<a;h++)for(var u=t[h],p=0;p<r;p++){var f=e[p];s[h]||n[p]||!Gt(u,f,c,d)?l[h+1][p+1]=0:(l[h+1][p+1]=l[h][p]?l[h][p]+1:1,l[h+1][p+1]>=i&&(i=l[h+1][p+1],o=[h+1,p+1]))}return 0!==i&&{oldValue:o[0]-i,newValue:o[1]-i,length:i}}(s,n,i,o);t?(a.push(t),Array.apply(void 0,new Array(t.length)).map(r).forEach((function(e){return function(t,e,s,n){t[s.oldValue+n]=!0,e[s.newValue+n]=!0}(i,o,t,e)}))):l=!0};!l;)c();return t.subsets=a,t.subsetsAge=100,a},se=function(){function t(){this.list=[]}return t.prototype.add=function(t){var e;(e=this.list).push.apply(e,t)},t.prototype.forEach=function(t){this.list.forEach((function(e){return t(e)}))},t}(),ne=function(){function t(t){void 0===t&&(t={});var e=this;Object.entries(t).forEach((function(t){var s=t[0],n=t[1];return e[s]=n}))}return t.prototype.toString=function(){return JSON.stringify(this)},t.prototype.setValue=function(t,e){return this[t]=e,this},t}();function ie(t,e){var s,n,i=t;for(e=e.slice();e.length>0;)n=e.splice(0,1)[0],s=i,i=i.childNodes?i.childNodes[n]:void 0;return{node:i,parentNode:s,nodeIndex:n}}function oe(t,e,s){return e.forEach((function(e){!function(t,e,s){var n,i,o,a;if(![s._const.addElement,s._const.addTextElement].includes(e[s._const.action])){var r=ie(t,e[s._const.route]);i=r.node,o=r.parentNode,a=r.nodeIndex}var l,c,d=[],h={diff:e,node:i};if(s.preVirtualDiffApply(h))return!0;switch(e[s._const.action]){case s._const.addAttribute:i.attributes||(i.attributes={}),i.attributes[e[s._const.name]]=e[s._const.value],"checked"===e[s._const.name]?i.checked=!0:"selected"===e[s._const.name]?i.selected=!0:"INPUT"===i.nodeName&&"value"===e[s._const.name]&&(i.value=e[s._const.value]);break;case s._const.modifyAttribute:i.attributes[e[s._const.name]]=e[s._const.newValue];break;case s._const.removeAttribute:delete i.attributes[e[s._const.name]],0===Object.keys(i.attributes).length&&delete i.attributes,"checked"===e[s._const.name]?i.checked=!1:"selected"===e[s._const.name]?delete i.selected:"INPUT"===i.nodeName&&"value"===e[s._const.name]&&delete i.value;break;case s._const.modifyTextElement:i.data=e[s._const.newValue];break;case s._const.modifyValue:i.value=e[s._const.newValue];break;case s._const.modifyComment:i.data=e[s._const.newValue];break;case s._const.modifyChecked:i.checked=e[s._const.newValue];break;case s._const.modifySelected:i.selected=e[s._const.newValue];break;case s._const.replaceElement:l=e[s._const.newValue],o.childNodes[a]=l;break;case s._const.relocateGroup:i.childNodes.splice(e[s._const.from],e[s._const.groupLength]).reverse().forEach((function(t){return i.childNodes.splice(e[s._const.to],0,t)})),i.subsets&&i.subsets.forEach((function(t){if(e[s._const.from]<e[s._const.to]&&t.oldValue<=e[s._const.to]&&t.oldValue>e[s._const.from])t.oldValue-=e[s._const.groupLength],(n=t.oldValue+t.length-e[s._const.to])>0&&(d.push({oldValue:e[s._const.to]+e[s._const.groupLength],newValue:t.newValue+t.length-n,length:n}),t.length-=n);else if(e[s._const.from]>e[s._const.to]&&t.oldValue>e[s._const.to]&&t.oldValue<e[s._const.from]){var n;t.oldValue+=e[s._const.groupLength],(n=t.oldValue+t.length-e[s._const.to])>0&&(d.push({oldValue:e[s._const.to]+e[s._const.groupLength],newValue:t.newValue+t.length-n,length:n}),t.length-=n)}else t.oldValue===e[s._const.from]&&(t.oldValue=e[s._const.to])}));break;case s._const.removeElement:o.childNodes.splice(a,1),o.subsets&&o.subsets.forEach((function(t){t.oldValue>a?t.oldValue-=1:t.oldValue===a?t.delete=!0:t.oldValue<a&&t.oldValue+t.length>a&&(t.oldValue+t.length-1===a?t.length--:(d.push({newValue:t.newValue+a-t.oldValue,oldValue:a,length:t.length-a+t.oldValue-1}),t.length=a-t.oldValue))})),i=o;break;case s._const.addElement:var u=(c=e[s._const.route].slice()).splice(c.length-1,1)[0];i=null===(n=ie(t,c))||void 0===n?void 0:n.node,l=e[s._const.element],i.childNodes||(i.childNodes=[]),u>=i.childNodes.length?i.childNodes.push(l):i.childNodes.splice(u,0,l),i.subsets&&i.subsets.forEach((function(t){if(t.oldValue>=u)t.oldValue+=1;else if(t.oldValue<u&&t.oldValue+t.length>u){var e=t.oldValue+t.length-u;d.push({newValue:t.newValue+t.length-e,oldValue:u+1,length:e}),t.length-=e}}));break;case s._const.removeTextElement:o.childNodes.splice(a,1),"TEXTAREA"===o.nodeName&&delete o.value,o.subsets&&o.subsets.forEach((function(t){t.oldValue>a?t.oldValue-=1:t.oldValue===a?t.delete=!0:t.oldValue<a&&t.oldValue+t.length>a&&(t.oldValue+t.length-1===a?t.length--:(d.push({newValue:t.newValue+a-t.oldValue,oldValue:a,length:t.length-a+t.oldValue-1}),t.length=a-t.oldValue))})),i=o;break;case s._const.addTextElement:var p=(c=e[s._const.route].slice()).splice(c.length-1,1)[0];(l={}).nodeName="#text",l.data=e[s._const.value],(i=ie(t,c).node).childNodes||(i.childNodes=[]),p>=i.childNodes.length?i.childNodes.push(l):i.childNodes.splice(p,0,l),"TEXTAREA"===i.nodeName&&(i.value=e[s._const.newValue]),i.subsets&&i.subsets.forEach((function(t){if(t.oldValue>=p&&(t.oldValue+=1),t.oldValue<p&&t.oldValue+t.length>p){var e=t.oldValue+t.length-p;d.push({newValue:t.newValue+t.length-e,oldValue:p+1,length:e}),t.length-=e}}));break;default:console.log("unknown action")}i.subsets&&(i.subsets=i.subsets.filter((function(t){return!t.delete&&t.oldValue!==t.newValue})),d.length&&(i.subsets=i.subsets.concat(d))),s.postVirtualDiffApply({node:h.node,diff:h.diff,newNode:l})}(t,e,s)})),!0}function ae(t,e){void 0===e&&(e={});var s={nodeName:t.nodeName};return t instanceof Text||t instanceof Comment?s.data=t.data:(t.attributes&&t.attributes.length>0&&(s.attributes={},Array.prototype.slice.call(t.attributes).forEach((function(t){return s.attributes[t.name]=t.value}))),t instanceof HTMLTextAreaElement?s.value=t.value:t.childNodes&&t.childNodes.length>0&&(s.childNodes=[],Array.prototype.slice.call(t.childNodes).forEach((function(t){return s.childNodes.push(ae(t,e))}))),e.valueDiffing&&(t instanceof HTMLInputElement&&["radio","checkbox"].includes(t.type.toLowerCase())&&void 0!==t.checked?s.checked=t.checked:(t instanceof HTMLButtonElement||t instanceof HTMLDataElement||t instanceof HTMLInputElement||t instanceof HTMLLIElement||t instanceof HTMLMeterElement||t instanceof HTMLOptionElement||t instanceof HTMLProgressElement||t instanceof HTMLParamElement)&&(s.value=t.value),t instanceof HTMLOptionElement&&(s.selected=t.selected))),s}var re=/<\s*\/*[a-zA-Z:_][a-zA-Z0-9:_\-.]*\s*(?:"[^"]*"['"]*|'[^']*'['"]*|[^'"/>])*\/*\s*>|<!--(?:.|\n|\r)*?-->/g,le=Object.create?Object.create(null):{},ce=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function de(t){return t.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")}var he={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuItem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},ue=function(t){var e={nodeName:"",attributes:{}},s=!1,n=t.match(/<\/?([^\s]+?)[/\s>]/);if(n&&(e.nodeName=n[1].toUpperCase(),(he[n[1]]||"/"===t.charAt(t.length-2))&&(s=!0),e.nodeName.startsWith("!--"))){var i=t.indexOf("--\x3e");return{type:"comment",node:{nodeName:"#comment",data:-1!==i?t.slice(4,i):""},voidElement:s}}for(var o=new RegExp(ce),a=null,r=!1;!r;)if(null===(a=o.exec(t)))r=!0;else if(a[0].trim())if(a[1]){var l=a[1].trim(),c=[l,""];l.indexOf("=")>-1&&(c=l.split("=")),e.attributes[c[0]]=c[1],o.lastIndex--}else a[2]&&(e.attributes[a[2]]=a[3].trim().substring(1,a[3].length-1));return{type:"tag",node:e,voidElement:s}},pe=function(t,e){void 0===e&&(e={components:le});var s,n=[],i=-1,o=[],a=!1;if(0!==t.indexOf("<")){var r=t.indexOf("<");n.push({nodeName:"#text",data:-1===r?t:t.substring(0,r)})}return t.replace(re,(function(r,l){if(a){if(r!=="</".concat(s.node.nodeName,">"))return"";a=!1}var c="/"!==r.charAt(1),d=r.startsWith("\x3c!--"),h=l+r.length,u=t.charAt(h);if(d){var p=ue(r).node;if(i<0)return n.push(p),"";var f=o[i];return f&&p.nodeName&&(f.node.childNodes||(f.node.childNodes=[]),f.node.childNodes.push(p)),""}if(c){s=ue(r),i++,"tag"===s.type&&e.components[s.node.nodeName]&&(s.type="component",a=!0),s.voidElement||a||!u||"<"===u||(s.node.childNodes||(s.node.childNodes=[]),s.node.childNodes.push({nodeName:"#text",data:de(t.slice(h,t.indexOf("<",h)))})),0===i&&s.node.nodeName&&n.push(s.node);var m=o[i-1];m&&s.node.nodeName&&(m.node.childNodes||(m.node.childNodes=[]),m.node.childNodes.push(s.node)),o[i]=s}if((!c||s.voidElement)&&(i>-1&&(s.voidElement||s.node.nodeName===r.slice(2,-1).toUpperCase())&&--i>-1&&(s=o[i]),!a&&"<"!==u&&u)){var g=-1===i?n:o[i].node.childNodes||[],b=t.indexOf("<",h),y=de(t.slice(h,-1===b?void 0:b));g.push({nodeName:"#text",data:y})}return""})),n[0]},fe=function(){function t(t,e,s){this.options=s,this.t1="undefined"!=typeof Element&&t instanceof Element?ae(t,this.options):"string"==typeof t?pe(t,this.options):JSON.parse(JSON.stringify(t)),this.t2="undefined"!=typeof Element&&e instanceof Element?ae(e,this.options):"string"==typeof e?pe(e,this.options):JSON.parse(JSON.stringify(e)),this.diffcount=0,this.foundAll=!1,this.debug&&(this.t1Orig="undefined"!=typeof Element&&t instanceof Element?ae(t,this.options):"string"==typeof t?pe(t,this.options):JSON.parse(JSON.stringify(t)),this.t2Orig="undefined"!=typeof Element&&e instanceof Element?ae(e,this.options):"string"==typeof e?pe(e,this.options):JSON.parse(JSON.stringify(e))),this.tracker=new se}return t.prototype.init=function(){return this.findDiffs(this.t1,this.t2)},t.prototype.findDiffs=function(t,e){var s;do{if(this.options.debug&&(this.diffcount+=1,this.diffcount>this.options.diffcap))throw new Error("surpassed diffcap:".concat(JSON.stringify(this.t1Orig)," -> ").concat(JSON.stringify(this.t2Orig)));0===(s=this.findNextDiff(t,e,[])).length&&(Xt(t,e)||(this.foundAll?console.error("Could not find remaining diffs!"):(this.foundAll=!0,Qt(t),s=this.findNextDiff(t,e,[])))),s.length>0&&(this.foundAll=!1,this.tracker.add(s),oe(t,s,this.options))}while(s.length>0);return this.tracker.list},t.prototype.findNextDiff=function(t,e,s){var n,i;if(this.options.maxDepth&&s.length>this.options.maxDepth)return[];if(!t.outerDone){if(n=this.findOuterDiff(t,e,s),this.options.filterOuterDiff&&(i=this.options.filterOuterDiff(t,e,n))&&(n=i),n.length>0)return t.outerDone=!0,n;t.outerDone=!0}if(Object.prototype.hasOwnProperty.call(t,"data"))return[];if(!t.innerDone){if((n=this.findInnerDiff(t,e,s)).length>0)return n;t.innerDone=!0}if(this.options.valueDiffing&&!t.valueDone){if((n=this.findValueDiff(t,e,s)).length>0)return t.valueDone=!0,n;t.valueDone=!0}return[]},t.prototype.findOuterDiff=function(t,e,s){var n,i,o,a,r,l,c=[];if(t.nodeName!==e.nodeName){if(!s.length)throw new Error("Top level nodes have to be of the same kind.");return[(new ne).setValue(this.options._const.action,this.options._const.replaceElement).setValue(this.options._const.oldValue,Kt(t)).setValue(this.options._const.newValue,Kt(e)).setValue(this.options._const.route,s)]}if(s.length&&this.options.diffcap<Math.abs((t.childNodes||[]).length-(e.childNodes||[]).length))return[(new ne).setValue(this.options._const.action,this.options._const.replaceElement).setValue(this.options._const.oldValue,Kt(t)).setValue(this.options._const.newValue,Kt(e)).setValue(this.options._const.route,s)];if(Object.prototype.hasOwnProperty.call(t,"data")&&t.data!==e.data)return"#text"===t.nodeName?[(new ne).setValue(this.options._const.action,this.options._const.modifyTextElement).setValue(this.options._const.route,s).setValue(this.options._const.oldValue,t.data).setValue(this.options._const.newValue,e.data)]:[(new ne).setValue(this.options._const.action,this.options._const.modifyComment).setValue(this.options._const.route,s).setValue(this.options._const.oldValue,t.data).setValue(this.options._const.newValue,e.data)];for(i=t.attributes?Object.keys(t.attributes).sort():[],o=e.attributes?Object.keys(e.attributes).sort():[],a=i.length,l=0;l<a;l++)n=i[l],-1===(r=o.indexOf(n))?c.push((new ne).setValue(this.options._const.action,this.options._const.removeAttribute).setValue(this.options._const.route,s).setValue(this.options._const.name,n).setValue(this.options._const.value,t.attributes[n])):(o.splice(r,1),t.attributes[n]!==e.attributes[n]&&c.push((new ne).setValue(this.options._const.action,this.options._const.modifyAttribute).setValue(this.options._const.route,s).setValue(this.options._const.name,n).setValue(this.options._const.oldValue,t.attributes[n]).setValue(this.options._const.newValue,e.attributes[n])));for(a=o.length,l=0;l<a;l++)n=o[l],c.push((new ne).setValue(this.options._const.action,this.options._const.addAttribute).setValue(this.options._const.route,s).setValue(this.options._const.name,n).setValue(this.options._const.value,e.attributes[n]));return c},t.prototype.findInnerDiff=function(t,e,s){var n=t.childNodes?t.childNodes.slice():[],i=e.childNodes?e.childNodes.slice():[],o=Math.max(n.length,i.length),a=Math.abs(n.length-i.length),r=[],l=0;if(!this.options.maxChildCount||o<this.options.maxChildCount){var c=Boolean(t.subsets&&t.subsetsAge--),d=c?t.subsets:t.childNodes&&e.childNodes?ee(t,e):[];if(d.length>0&&(r=this.attemptGroupRelocation(t,e,d,s,c)).length>0)return r}for(var h=0;h<o;h+=1){var u=n[h],p=i[h];if(a&&(u&&!p?"#text"===u.nodeName?(r.push((new ne).setValue(this.options._const.action,this.options._const.removeTextElement).setValue(this.options._const.route,s.concat(l)).setValue(this.options._const.value,u.data)),l-=1):(r.push((new ne).setValue(this.options._const.action,this.options._const.removeElement).setValue(this.options._const.route,s.concat(l)).setValue(this.options._const.element,Kt(u))),l-=1):p&&!u&&("#text"===p.nodeName?r.push((new ne).setValue(this.options._const.action,this.options._const.addTextElement).setValue(this.options._const.route,s.concat(l)).setValue(this.options._const.value,p.data)):r.push((new ne).setValue(this.options._const.action,this.options._const.addElement).setValue(this.options._const.route,s.concat(l)).setValue(this.options._const.element,Kt(p))))),u&&p)if(!this.options.maxChildCount||o<this.options.maxChildCount)r=r.concat(this.findNextDiff(u,p,s.concat(l)));else if(!Xt(u,p))if(n.length>i.length)"#text"===u.nodeName?r.push((new ne).setValue(this.options._const.action,this.options._const.removeTextElement).setValue(this.options._const.route,s.concat(l)).setValue(this.options._const.value,u.data)):r.push((new ne).setValue(this.options._const.action,this.options._const.removeElement).setValue(this.options._const.element,Kt(u)).setValue(this.options._const.route,s.concat(l))),n.splice(h,1),h-=1,l-=1,a-=1;else if(n.length<i.length){var f=Kt(p);r=r.concat([(new ne).setValue(this.options._const.action,this.options._const.addElement).setValue(this.options._const.element,f).setValue(this.options._const.route,s.concat(l))]),n.splice(h,0,f),a-=1}else r=r.concat([(new ne).setValue(this.options._const.action,this.options._const.replaceElement).setValue(this.options._const.oldValue,Kt(u)).setValue(this.options._const.newValue,Kt(p)).setValue(this.options._const.route,s.concat(l))]);l+=1}return t.innerDone=!0,r},t.prototype.attemptGroupRelocation=function(t,e,s,n,i){for(var o,a,r,l,c,d,h=function(t,e,s){var n=t.childNodes?te(t.childNodes.length,!0):[],i=e.childNodes?te(e.childNodes.length,!0):[],o=0;return s.forEach((function(t){for(var e=t.oldValue+t.length,s=t.newValue+t.length,a=t.oldValue;a<e;a+=1)n[a]=o;for(a=t.newValue;a<s;a+=1)i[a]=o;o+=1})),{gaps1:n,gaps2:i}}(t,e,s),u=h.gaps1,p=h.gaps2,f=Math.min(u.length,p.length),m=[],g=0,b=0;g<f;b+=1,g+=1)if(!i||!0!==u[g]&&!0!==p[g])if(!0===u[g])if("#text"===(l=t.childNodes[b]).nodeName)if("#text"===e.childNodes[g].nodeName){if(l.data!==e.childNodes[g].data){for(d=b;t.childNodes.length>d+1&&"#text"===t.childNodes[d+1].nodeName;)if(d+=1,e.childNodes[g].data===t.childNodes[d].data){c=!0;break}if(!c)return m.push((new ne).setValue(this.options._const.action,this.options._const.modifyTextElement).setValue(this.options._const.route,n.concat(g)).setValue(this.options._const.oldValue,l.data).setValue(this.options._const.newValue,e.childNodes[g].data)),m}}else m.push((new ne).setValue(this.options._const.action,this.options._const.removeTextElement).setValue(this.options._const.route,n.concat(g)).setValue(this.options._const.value,l.data)),u.splice(g,1),f=Math.min(u.length,p.length),g-=1;else m.push((new ne).setValue(this.options._const.action,this.options._const.removeElement).setValue(this.options._const.route,n.concat(g)).setValue(this.options._const.element,Kt(l))),u.splice(g,1),f=Math.min(u.length,p.length),g-=1;else if(!0===p[g])"#text"===(l=e.childNodes[g]).nodeName?(m.push((new ne).setValue(this.options._const.action,this.options._const.addTextElement).setValue(this.options._const.route,n.concat(g)).setValue(this.options._const.value,l.data)),u.splice(g,0,!0),f=Math.min(u.length,p.length),b-=1):(m.push((new ne).setValue(this.options._const.action,this.options._const.addElement).setValue(this.options._const.route,n.concat(g)).setValue(this.options._const.element,Kt(l))),u.splice(g,0,!0),f=Math.min(u.length,p.length),b-=1);else if(u[g]!==p[g]){if(m.length>0)return m;if(r=s[u[g]],(a=Math.min(r.newValue,t.childNodes.length-r.length))!==r.oldValue){o=!1;for(var y=0;y<r.length;y+=1)Gt(t.childNodes[a+y],t.childNodes[r.oldValue+y],{},!1,!0)||(o=!0);if(o)return[(new ne).setValue(this.options._const.action,this.options._const.relocateGroup).setValue(this.options._const.groupLength,r.length).setValue(this.options._const.from,r.oldValue).setValue(this.options._const.to,a).setValue(this.options._const.route,n)]}}return m},t.prototype.findValueDiff=function(t,e,s){var n=[];return t.selected!==e.selected&&n.push((new ne).setValue(this.options._const.action,this.options._const.modifySelected).setValue(this.options._const.oldValue,t.selected).setValue(this.options._const.newValue,e.selected).setValue(this.options._const.route,s)),(t.value||e.value)&&t.value!==e.value&&"OPTION"!==t.nodeName&&n.push((new ne).setValue(this.options._const.action,this.options._const.modifyValue).setValue(this.options._const.oldValue,t.value||"").setValue(this.options._const.newValue,e.value||"").setValue(this.options._const.route,s)),t.checked!==e.checked&&n.push((new ne).setValue(this.options._const.action,this.options._const.modifyChecked).setValue(this.options._const.oldValue,t.checked).setValue(this.options._const.newValue,e.checked).setValue(this.options._const.route,s)),n},t}(),me={debug:!1,diffcap:10,maxDepth:!1,maxChildCount:50,valueDiffing:!0,textDiff:function(t,e,s,n){t.data=n},preVirtualDiffApply:function(){},postVirtualDiffApply:function(){},preDiffApply:function(){},postDiffApply:function(){},filterOuterDiff:null,compress:!1,_const:!1,document:!("undefined"==typeof window||!window.document)&&window.document,components:[]},ge=function(){function t(t){if(void 0===t&&(t={}),Object.entries(me).forEach((function(e){var s=e[0],n=e[1];Object.prototype.hasOwnProperty.call(t,s)||(t[s]=n)})),!t._const){var e=["addAttribute","modifyAttribute","removeAttribute","modifyTextElement","relocateGroup","removeElement","addElement","removeTextElement","addTextElement","replaceElement","modifyValue","modifyChecked","modifySelected","modifyComment","action","route","oldValue","newValue","element","group","groupLength","from","to","name","value","data","attributes","nodeName","childNodes","checked","selected"],s={};t.compress?e.forEach((function(t,e){return s[t]=e})):e.forEach((function(t){return s[t]=t})),t._const=s}this.options=t}return t.prototype.apply=function(t,e){return function(t,e,s){return e.every((function(e){return qt(t,e,s)}))}(t,e,this.options)},t.prototype.undo=function(t,e){return function(t,e,s){(e=e.slice()).reverse(),e.forEach((function(e){!function(t,e,s){switch(e[s._const.action]){case s._const.addAttribute:e[s._const.action]=s._const.removeAttribute,qt(t,e,s);break;case s._const.modifyAttribute:zt(e,s._const.oldValue,s._const.newValue),qt(t,e,s);break;case s._const.removeAttribute:e[s._const.action]=s._const.addAttribute,qt(t,e,s);break;case s._const.modifyTextElement:case s._const.modifyValue:case s._const.modifyComment:case s._const.modifyChecked:case s._const.modifySelected:case s._const.replaceElement:zt(e,s._const.oldValue,s._const.newValue),qt(t,e,s);break;case s._const.relocateGroup:zt(e,s._const.from,s._const.to),qt(t,e,s);break;case s._const.removeElement:e[s._const.action]=s._const.addElement,qt(t,e,s);break;case s._const.addElement:e[s._const.action]=s._const.removeElement,qt(t,e,s);break;case s._const.removeTextElement:e[s._const.action]=s._const.addTextElement,qt(t,e,s);break;case s._const.addTextElement:e[s._const.action]=s._const.removeTextElement,qt(t,e,s);break;default:console.log("unknown action")}}(t,e,s)}))}(t,e,this.options)},t.prototype.diff=function(t,e){return new fe(t,e,this.options).init()},t}();const be=(t,e,s,{classes:n,format:i,hiddenHeader:o,sortable:a,scrollY:r,type:l},{noColumnWidths:c,unhideHeader:d})=>({nodeName:"TR",childNodes:t.map(((t,h)=>{const u=e[h]||{type:l,format:i,sortable:!0,searchable:!0};if(u.hidden)return;const p={};if(u.sortable&&a&&(!r.length||d)&&(u.filter?p["data-filterable"]="true":p["data-sortable"]="true"),u.headerClass&&(p.class=u.headerClass),s.sort&&s.sort.column===h){const t="asc"===s.sort.dir?n.ascending:n.descending;p.class=p.class?`${p.class} ${t}`:t,p["aria-sort"]="asc"===s.sort.dir?"ascending":"descending"}else s.filters[h]&&(p.class=p.class?`${p.class} ${n.filterActive}`:n.filterActive);let f="";s.widths[h]&&!c&&(f+=`width: ${s.widths[h]}%;`),r.length&&!d&&(f+="padding-bottom: 0;padding-top: 0;border: 0;"),f.length&&(p.style=f),u.headerClass&&(p.class=u.headerClass);const m="html"===t.type?t.data:[{nodeName:"#text",data:t.text??String(t.data)}];return{nodeName:"TH",attributes:p,childNodes:!o&&!r.length||d?u.sortable&&a?[{nodeName:"a",attributes:{href:"#",class:u.filter?n.filter:n.sorter},childNodes:m}]:m:[{nodeName:"#text",data:""}]}})).filter((t=>t))}),ye=(t,e,s,n,i,o,{classes:a,hiddenHeader:r,header:l,footer:c,format:d,sortable:h,scrollY:u,type:p,rowRender:f,tabIndex:m},{noColumnWidths:g,unhideHeader:b,renderHeader:y})=>{const v={nodeName:"TABLE",attributes:{...t},childNodes:[{nodeName:"TBODY",childNodes:s.map((({row:t,index:e})=>{const s={nodeName:"TR",attributes:{"data-index":String(e)},childNodes:t.map(((t,s)=>{const o=n[s]||{type:p,format:d,sortable:!0,searchable:!0};if(o.hidden)return;const a="html"===o.type?{nodeName:"TD",childNodes:t.data}:{nodeName:"TD",childNodes:[{nodeName:"#text",data:t.text??String(t.data)}]};if(l||c||!i.widths[s]||g||(a.attributes={style:`width: ${i.widths[s]}%;`}),o.cellClass&&(a.attributes||(a.attributes={}),a.attributes.class=o.cellClass),o.render){const n=o.render(t.data,a,e,s);if(n){if("string"!=typeof n)return n;{const t=pe(`<td>${n}</td>`);1===t.childNodes.length&&["#text","#comment"].includes(t.childNodes[0].nodeName)?a.childNodes[0].data=n:a.childNodes=t.childNodes}}}return a})).filter((t=>t))};if(e===o&&(s.attributes.class=a.cursor),f){const n=f(t,s,e);if(n){if("string"!=typeof n)return n;{const t=pe(`<tr>${n}</tr>`);!t.childNodes||1===t.childNodes.length&&["#text","#comment"].includes(t.childNodes[0].nodeName)?s.childNodes[0].data=n:s.childNodes=t.childNodes}}}return s}))}]};if(v.attributes.class=v.attributes.class?`${v.attributes.class} ${a.table}`:a.table,l||c||y){const t=be(e,n,i,{classes:a,hiddenHeader:r,sortable:h,scrollY:u},{noColumnWidths:g,unhideHeader:b});if(l||y){const e={nodeName:"THEAD",childNodes:[t]};!u.length&&!r||b||(e.attributes={style:"height: 0px;"}),v.childNodes.unshift(e)}if(c){const e={nodeName:"TFOOT",childNodes:[l?structuredClone(t):t]};!u.length&&!r||b||(e.attributes={style:"height: 0px;"}),v.childNodes.push(e)}}return!1!==m&&(v.attributes.tabindex=String(m)),v};var ve={},we={get exports(){return ve},set exports(t){ve=t}};we.exports=function(){var t=1e3,e=6e4,s=36e5,n="millisecond",i="second",o="minute",a="hour",r="day",l="week",c="month",d="quarter",h="year",u="date",p="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],s=t%100;return"["+t+(e[(s-20)%10]||e[s]||e[0])+"]"}},b=function(t,e,s){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(s)+t},y={s:b,z:function(t){var e=-t.utcOffset(),s=Math.abs(e),n=Math.floor(s/60),i=s%60;return(e<=0?"+":"-")+b(n,2,"0")+":"+b(i,2,"0")},m:function t(e,s){if(e.date()<s.date())return-t(s,e);var n=12*(s.year()-e.year())+(s.month()-e.month()),i=e.clone().add(n,c),o=s-i<0,a=e.clone().add(n+(o?-1:1),c);return+(-(n+(s-i)/(o?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:l,d:r,D:u,h:a,m:o,s:i,ms:n,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",w={};w[v]=g;var _=function(t){return t instanceof O},E=function t(e,s,n){var i;if(!e)return v;if("string"==typeof e){var o=e.toLowerCase();w[o]&&(i=o),s&&(w[o]=s,i=o);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var r=e.name;w[r]=e,i=r}return!n&&i&&(v=i),i||!n&&v},x=function(t,e){if(_(t))return t.clone();var s="object"==typeof e?e:{};return s.date=t,s.args=arguments,new O(s)},N=y;N.l=E,N.i=_,N.w=function(t,e){return x(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var O=function(){function g(t){this.$L=E(t.locale,null,!0),this.parse(t)}var b=g.prototype;return b.parse=function(t){this.$d=function(t){var e=t.date,s=t.utc;if(null===e)return new Date(NaN);if(N.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(f);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return s?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},b.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},b.$utils=function(){return N},b.isValid=function(){return!(this.$d.toString()===p)},b.isSame=function(t,e){var s=x(t);return this.startOf(e)<=s&&s<=this.endOf(e)},b.isAfter=function(t,e){return x(t)<this.startOf(e)},b.isBefore=function(t,e){return this.endOf(e)<x(t)},b.$g=function(t,e,s){return N.u(t)?this[e]:this.set(s,t)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(t,e){var s=this,n=!!N.u(e)||e,d=N.p(t),p=function(t,e){var i=N.w(s.$u?Date.UTC(s.$y,e,t):new Date(s.$y,e,t),s);return n?i:i.endOf(r)},f=function(t,e){return N.w(s.toDate()[t].apply(s.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),s)},m=this.$W,g=this.$M,b=this.$D,y="set"+(this.$u?"UTC":"");switch(d){case h:return n?p(1,0):p(31,11);case c:return n?p(1,g):p(0,g+1);case l:var v=this.$locale().weekStart||0,w=(m<v?m+7:m)-v;return p(n?b-w:b+(6-w),g);case r:case u:return f(y+"Hours",0);case a:return f(y+"Minutes",1);case o:return f(y+"Seconds",2);case i:return f(y+"Milliseconds",3);default:return this.clone()}},b.endOf=function(t){return this.startOf(t,!1)},b.$set=function(t,e){var s,l=N.p(t),d="set"+(this.$u?"UTC":""),p=(s={},s[r]=d+"Date",s[u]=d+"Date",s[c]=d+"Month",s[h]=d+"FullYear",s[a]=d+"Hours",s[o]=d+"Minutes",s[i]=d+"Seconds",s[n]=d+"Milliseconds",s)[l],f=l===r?this.$D+(e-this.$W):e;if(l===c||l===h){var m=this.clone().set(u,1);m.$d[p](f),m.init(),this.$d=m.set(u,Math.min(this.$D,m.daysInMonth())).$d}else p&&this.$d[p](f);return this.init(),this},b.set=function(t,e){return this.clone().$set(t,e)},b.get=function(t){return this[N.p(t)]()},b.add=function(n,d){var u,p=this;n=Number(n);var f=N.p(d),m=function(t){var e=x(p);return N.w(e.date(e.date()+Math.round(t*n)),p)};if(f===c)return this.set(c,this.$M+n);if(f===h)return this.set(h,this.$y+n);if(f===r)return m(1);if(f===l)return m(7);var g=(u={},u[o]=e,u[a]=s,u[i]=t,u)[f]||1,b=this.$d.getTime()+n*g;return N.w(b,this)},b.subtract=function(t,e){return this.add(-1*t,e)},b.format=function(t){var e=this,s=this.$locale();if(!this.isValid())return s.invalidDate||p;var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=N.z(this),o=this.$H,a=this.$m,r=this.$M,l=s.weekdays,c=s.months,d=function(t,s,i,o){return t&&(t[s]||t(e,n))||i[s].slice(0,o)},h=function(t){return N.s(o%12||12,t,"0")},u=s.meridiem||function(t,e,s){var n=t<12?"AM":"PM";return s?n.toLowerCase():n},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:r+1,MM:N.s(r+1,2,"0"),MMM:d(s.monthsShort,r,c,3),MMMM:d(c,r),D:this.$D,DD:N.s(this.$D,2,"0"),d:String(this.$W),dd:d(s.weekdaysMin,this.$W,l,2),ddd:d(s.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(o),HH:N.s(o,2,"0"),h:h(1),hh:h(2),a:u(o,a,!0),A:u(o,a,!1),m:String(a),mm:N.s(a,2,"0"),s:String(this.$s),ss:N.s(this.$s,2,"0"),SSS:N.s(this.$ms,3,"0"),Z:i};return n.replace(m,(function(t,e){return e||f[t]||i.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,u,p){var f,m=N.p(u),g=x(n),b=(g.utcOffset()-this.utcOffset())*e,y=this-g,v=N.m(this,g);return v=(f={},f[h]=v/12,f[c]=v,f[d]=v/3,f[l]=(y-b)/6048e5,f[r]=(y-b)/864e5,f[a]=y/s,f[o]=y/e,f[i]=y/t,f)[m]||y,p?v:N.a(v)},b.daysInMonth=function(){return this.endOf(c).$D},b.$locale=function(){return w[this.$L]},b.locale=function(t,e){if(!t)return this.$L;var s=this.clone(),n=E(t,e,!0);return n&&(s.$L=n),s},b.clone=function(){return N.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},g}(),D=O.prototype;return x.prototype=D,[["$ms",n],["$s",i],["$m",o],["$H",a],["$W",r],["$M",c],["$y",h],["$D",u]].forEach((function(t){D[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),x.extend=function(t,e){return t.$i||(t(e,O,x),t.$i=!0),x},x.locale=E,x.isDayjs=_,x.unix=function(t){return x(1e3*t)},x.en=w[v],x.Ls=w,x.p={},x}();var _e=ve,Ee={},xe={get exports(){return Ee},set exports(t){Ee=t}};xe.exports=function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,s=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(t){return(t=+t)+(t>68?1900:2e3)},r=function(t){return function(e){this[t]=+e}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t)return 0;if("Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),s=60*e[1]+(+e[2]||0);return 0===s?0:"+"===e[0]?-s:s}(t)}],c=function(t){var e=o[t];return e&&(e.indexOf?e:e.s.concat(e.f))},d=function(t,e){var s,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(t.indexOf(n(i,0,e))>-1){s=i>12;break}}else s=t===(e?"pm":"PM");return s},h={A:[i,function(t){this.afternoon=d(t,!1)}],a:[i,function(t){this.afternoon=d(t,!0)}],S:[/\d/,function(t){this.milliseconds=100*+t}],SS:[s,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[n,r("seconds")],ss:[n,r("seconds")],m:[n,r("minutes")],mm:[n,r("minutes")],H:[n,r("hours")],h:[n,r("hours")],HH:[n,r("hours")],hh:[n,r("hours")],D:[n,r("day")],DD:[s,r("day")],Do:[i,function(t){var e=o.ordinal,s=t.match(/\d+/);if(this.day=s[0],e)for(var n=1;n<=31;n+=1)e(n).replace(/\[|\]/g,"")===t&&(this.day=n)}],M:[n,r("month")],MM:[s,r("month")],MMM:[i,function(t){var e=c("months"),s=(c("monthsShort")||e.map((function(t){return t.slice(0,3)}))).indexOf(t)+1;if(s<1)throw new Error;this.month=s%12||s}],MMMM:[i,function(t){var e=c("months").indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e}],Y:[/[+-]?\d+/,r("year")],YY:[s,function(t){this.year=a(t)}],YYYY:[/\d{4}/,r("year")],Z:l,ZZ:l};function u(s){var n,i;n=s,i=o&&o.formats;for(var a=(s=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,s,n){var o=n&&n.toUpperCase();return s||i[n]||t[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,s){return e||s.slice(1)}))}))).match(e),r=a.length,l=0;l<r;l+=1){var c=a[l],d=h[c],u=d&&d[0],p=d&&d[1];a[l]=p?{regex:u,parser:p}:c.replace(/^\[|\]$/g,"")}return function(t){for(var e={},s=0,n=0;s<r;s+=1){var i=a[s];if("string"==typeof i)n+=i.length;else{var o=i.regex,l=i.parser,c=t.slice(n),d=o.exec(c)[0];l.call(e,d),t=t.replace(d,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var s=t.hours;e?s<12&&(t.hours+=12):12===s&&(t.hours=0),delete t.afternoon}}(e),e}}return function(t,e,s){s.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(a=t.parseTwoDigitYear);var n=e.prototype,i=n.parse;n.parse=function(t){var e=t.date,n=t.utc,a=t.args;this.$u=n;var r=a[1];if("string"==typeof r){var l=!0===a[2],c=!0===a[3],d=l||c,h=a[2];c&&(h=a[2]),o=this.$locale(),!l&&h&&(o=s.Ls[h]),this.$d=function(t,e,s){try{if(["x","X"].indexOf(e)>-1)return new Date(("X"===e?1e3:1)*t);var n=u(e)(t),i=n.year,o=n.month,a=n.day,r=n.hours,l=n.minutes,c=n.seconds,d=n.milliseconds,h=n.zone,p=new Date,f=a||(i||o?1:p.getDate()),m=i||p.getFullYear(),g=0;i&&!o||(g=o>0?o-1:p.getMonth());var b=r||0,y=l||0,v=c||0,w=d||0;return h?new Date(Date.UTC(m,g,f,b,y,v,w+60*h.offset*1e3)):s?new Date(Date.UTC(m,g,f,b,y,v,w)):new Date(m,g,f,b,y,v,w)}catch(t){return new Date("")}}(e,r,n),this.init(),h&&!0!==h&&(this.$L=this.locale(h).$L),d&&e!=this.format(r)&&(this.$d=new Date("")),o={}}else if(r instanceof Array)for(var p=r.length,f=1;f<=p;f+=1){a[1]=r[f-1];var m=s.apply(this,a);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}f===p&&(this.$d=new Date(""))}else i.call(this,t)}}}();var Ne=Ee;_e.extend(Ne);const Oe=(t,e)=>{let s;if(e)switch(e){case"ISO_8601":s=t;break;case"RFC_2822":s=_e(t.slice(5),"DD MMM YYYY HH:mm:ss ZZ").unix();break;case"MYSQL":s=_e(t,"YYYY-MM-DD hh:mm:ss").unix();break;case"UNIX":s=_e(t).unix();break;default:s=_e(t,e,!0).valueOf()}return s},De=(t,e)=>{if(t?.constructor===Object&&Object.prototype.hasOwnProperty.call(t,"data")&&!Object.keys(t).find((t=>!["text","order","data"].includes(t))))return t;const s={data:t};switch(e.type){case"string":"string"!=typeof t&&(s.text=String(t),s.order=s.text);break;case"date":e.format&&(s.order=Oe(String(t),e.format));break;case"number":s.text=String(t),s.data=parseInt(t,10);break;case"html":{const e=Array.isArray(t)?{nodeName:"TD",childNodes:t}:pe(`<td>${String(t)}</td>`);s.data=e.childNodes||[];const i=n(e);s.text=i,s.order=i;break}case"boolean":"string"==typeof t&&(t=t.toLowerCase().trim()),s.data=!["false",!1,null,void 0,0].includes(t),s.order=s.data?1:0,s.text=String(s.data);break;case"other":s.text="",s.order=0;break;default:s.text=JSON.stringify(t)}return s},Me=t=>{if(t instanceof Object&&t.constructor===Object&&t.hasOwnProperty("data")&&("string"==typeof t.text||"string"==typeof t.data))return t;const e={data:t};if("string"==typeof t){if(t.length){const s=pe(`<th>${t}</th>`);if(s.childNodes&&(1!==s.childNodes.length||"#text"!==s.childNodes[0].nodeName)){e.data=s.childNodes,e.type="html";const t=n(s);e.text=t}}}else[null,void 0].includes(t)?e.text="":e.text=JSON.stringify(t);return e},Se=(t,e,s,n,i)=>{const o={data:[],headings:[]};t.headings?o.headings=t.headings.map((t=>Me(t))):e?.tHead?o.headings=Array.from(e.tHead.querySelectorAll("th")).map(((t,e)=>{const o=Me(t.innerHTML);s[e]||(s[e]={type:n,format:i,searchable:!0,sortable:!0});const a=s[e];return"false"!==t.dataset.sortable?.trim().toLowerCase()&&"false"!==t.dataset.sort?.trim().toLowerCase()||(a.sortable=!1),"false"===t.dataset.searchable?.trim().toLowerCase()&&(a.searchable=!1),"true"!==t.dataset.hidden?.trim().toLowerCase()&&"true"!==t.getAttribute("hidden")?.trim().toLowerCase()||(a.hidden=!0),["number","string","html","date","boolean","other"].includes(t.dataset.type)&&(a.type=t.dataset.type,"date"===a.type&&t.dataset.format&&(a.format=t.dataset.format)),o})):t.data?.length?o.headings=t.data[0].map((t=>Me(""))):e?.tBodies.length&&(o.headings=Array.from(e.tBodies[0].rows[0].cells).map((t=>Me(""))));for(let t=0;t<o.headings.length;t++)s[t]||(s[t]={type:n,format:i,sortable:!0,searchable:!0});if(t.data?o.data=t.data.map((t=>t.map(((t,e)=>De(t,s[e]))))):e?.tBodies?.length&&(o.data=Array.from(e.tBodies[0].rows).map((t=>Array.from(t.cells).map(((t,e)=>De(t.dataset.content||t.innerHTML,s[e])))))),o.data.length&&o.data[0].length!==o.headings.length)throw new Error("Data heading length mismatch.");return o};class Ce{constructor(t){this.dt=t,this.cursor=!1}setCursor(t=!1){if(t===this.cursor)return;const e=this.cursor;if(this.cursor=t,this.dt._renderTable(),!1!==t&&this.dt.options.scrollY){const t=this.dt.dom.querySelector(`tr.${this.dt.options.classes.cursor}`);t&&t.scrollIntoView({block:"nearest"})}this.dt.emit("datatable.cursormove",this.cursor,e)}add(t){const e=t.map(((t,e)=>{const s=this.dt.columns.settings[e];return De(t,s)}));this.dt.data.data.push(e),this.dt.data.data.length&&(this.dt.hasRows=!0),this.dt.update(!0)}remove(t){if(!Array.isArray(t))return this.remove([t]);this.dt.data.data=this.dt.data.data.filter(((e,s)=>!t.includes(s))),this.dt.data.data.length||(this.dt.hasRows=!1),this.dt.update(!0)}findRowIndex(t,e){return this.dt.data.data.findIndex((s=>(s[t].text??String(s[t].data)).toLowerCase().includes(String(e).toLowerCase())))}findRow(t,e){const s=this.findRowIndex(t,e);if(s<0)return{index:-1,row:null,cols:[]};const n=this.dt.data.data[s],i=n.map((t=>t.data));return{index:s,row:n,cols:i}}updateRow(t,e){const s=e.map(((t,e)=>{const s=this.dt.columns.settings[e];return De(t,s)}));this.dt.data.data.splice(t,1,s),this.dt.update(!0)}}class Te{constructor(t){this.dt=t,this.init()}init(){[this.settings,this._state]=((t=[],e,s)=>{let n=[],i=!1;const o=[];return t.forEach((t=>{(Array.isArray(t.select)?t.select:[t.select]).forEach((a=>{n[a]||(n[a]={type:t.type||e,sortable:!0,searchable:!0});const r=n[a];t.render&&(r.render=t.render),t.format?r.format=t.format:"date"===t.type&&(r.format=s),t.cellClass&&(r.cellClass=t.cellClass),t.headerClass&&(r.headerClass=t.headerClass),t.locale&&(r.locale=t.locale),!1===t.sortable?r.sortable=!1:(t.numeric&&(r.numeric=t.numeric),t.caseFirst&&(r.caseFirst=t.caseFirst)),!1===t.searchable?r.searchable=!1:t.sensitivity&&(r.sensitivity=t.sensitivity),(r.searchable||r.sortable)&&t.ignorePunctuation&&(r.ignorePunctuation=t.ignorePunctuation),t.hidden&&(r.hidden=!0),t.filter&&(r.filter=t.filter),t.sortSequence&&(r.sortSequence=t.sortSequence),t.sort&&(t.filter?o[a]=t.sort:i={column:a,dir:t.sort})}))})),n=n.map((t=>t||{type:e,format:"date"===e?s:void 0,sortable:!0,searchable:!0})),[n,{filters:o,sort:i,widths:[]}]})(this.dt.options.columns,this.dt.options.type,this.dt.options.format)}swap(t){if(2===t.length){const e=this.dt.data.headings.map(((t,e)=>e)),s=t[0],n=t[1],i=e[n];return e[n]=e[s],e[s]=i,this.order(e)}}order(t){this.dt.data.headings=t.map((t=>this.dt.data.headings[t])),this.dt.data.data=this.dt.data.data.map((e=>t.map((t=>e[t])))),this.settings=t.map((t=>this.settings[t])),this.dt.update()}hide(t){t.length&&(t.forEach((t=>{this.settings[t]||(this.settings[t]={type:"string"});this.settings[t].hidden=!0})),this.dt.update())}show(t){t.length&&(t.forEach((t=>{this.settings[t]||(this.settings[t]={type:"string",sortable:!0});delete this.settings[t].hidden})),this.dt.update())}visible(t){return Array.isArray(t)?t.map((t=>!this.settings[t]?.hidden)):!this.settings[t]?.hidden}add(t){const e=this.dt.data.headings.length;if(this.dt.data.headings=this.dt.data.headings.concat([Me(t.heading)]),this.dt.data.data=this.dt.data.data.map(((e,s)=>e.concat([De(t.data[s],t)]))),this.settings[e]={type:t.type||"string",sortable:!0,searchable:!0},t.type||t.format||t.sortable||t.render||t.filter){const s=this.settings[e];t.render&&(s.render=t.render),t.format&&(s.format=t.format),t.cellClass&&(s.cellClass=t.cellClass),t.headerClass&&(s.headerClass=t.headerClass),t.locale&&(s.locale=t.locale),!1===t.sortable?s.sortable=!1:(t.numeric&&(s.numeric=t.numeric),t.caseFirst&&(s.caseFirst=t.caseFirst)),!1===t.searchable?s.searchable=!1:t.sensitivity&&(s.sensitivity=t.sensitivity),(s.searchable||s.sortable)&&t.ignorePunctuation&&(s.ignorePunctuation=t.ignorePunctuation),t.hidden&&(s.hidden=!0),t.filter&&(s.filter=t.filter),t.sortSequence&&(s.sortSequence=t.sortSequence)}this.dt.update(!0)}remove(t){if(!Array.isArray(t))return this.remove([t]);this.dt.data.headings=this.dt.data.headings.filter(((e,s)=>!t.includes(s))),this.dt.data.data=this.dt.data.data.map((e=>e.filter(((e,s)=>!t.includes(s))))),this.dt.update(!0)}filter(t,e=!1){if(!this.settings[t]?.filter?.length)return;const s=this._state.filters[t];let n;if(s){let e=!1;n=this.settings[t].filter.find((t=>!!e||(t===s&&(e=!0),!1)))}else{const e=this.settings[t].filter;n=e?e[0]:void 0}n?this._state.filters[t]=n:s&&(this._state.filters[t]=void 0),this.dt._currentPage=1,this.dt.update(),e||this.dt.emit("datatable.filter",t,n)}sort(t,e,s=!1){const n=this.settings[t];if(s||this.dt.emit("datatable.sorting",t,e),!e){const t=!!this._state.sort&&this._state.sort?.dir,s=n?.sortSequence||["asc","desc"];if(t){const n=s.indexOf(t);e=-1===n?"asc":n===s.length-1?s[0]:s[n+1]}else e=s.length?s[0]:"asc"}const i=!!["string","html"].includes(n.type)&&new Intl.Collator(n.locale||this.dt.options.locale,{usage:"sort",numeric:n.numeric||this.dt.options.numeric,caseFirst:n.caseFirst||this.dt.options.caseFirst,ignorePunctuation:n.ignorePunctuation||this.dt.options.ignorePunctuation});this.dt.data.data.sort(((s,n)=>{let o=s[t].order||s[t].data,a=n[t].order||n[t].data;if("desc"===e){const t=o;o=a,a=t}return i?i.compare(String(o),String(a)):o<a?-1:o>a?1:0})),this._state.sort={column:t,dir:e},this.dt._searchQuery?(this.dt.search(this.dt._searchQuery),this.dt.emit("datatable.sort",t,e)):s||(this.dt._currentPage=1,this.dt.update(),this.dt.emit("datatable.sort",t,e))}_measureWidths(){const t=this.dt.data.headings.filter(((t,e)=>!this.settings[e]?.hidden));if((this.dt.options.scrollY.length||this.dt.options.fixedColumns)&&t?.length){this._state.widths=[];const t={noPaging:!0};if(this.dt.options.header||this.dt.options.footer){this.dt.options.scrollY.length&&(t.unhideHeader=!0),this.dt.headerDOM&&this.dt.headerDOM.parentElement.removeChild(this.dt.headerDOM),t.noColumnWidths=!0,this.dt._renderTable(t);const e=Array.from(this.dt.dom.querySelector("thead, tfoot")?.firstElementChild?.querySelectorAll("th")||[]);let s=0;const n=this.dt.data.headings.map(((t,n)=>{if(this.settings[n]?.hidden)return 0;const i=e[s].offsetWidth;return s+=1,i})),i=n.reduce(((t,e)=>t+e),0);this._state.widths=n.map((t=>t/i*100))}else{t.renderHeader=!0,this.dt._renderTable(t);const e=Array.from(this.dt.dom.querySelector("thead, tfoot")?.firstElementChild?.querySelectorAll("th")||[]);let s=0;const n=this.dt.data.headings.map(((t,n)=>{if(this.settings[n]?.hidden)return 0;const i=e[s].offsetWidth;return s+=1,i})),i=n.reduce(((t,e)=>t+e),0);this._state.widths=n.map((t=>t/i*100))}this.dt._renderTable()}}}const Ae={sortable:!0,locale:"en",numeric:!0,caseFirst:"false",searchable:!0,sensitivity:"base",ignorePunctuation:!0,destroyable:!0,data:{},type:"html",format:"YYYY-MM-DD",columns:[],paging:!0,perPage:10,perPageSelect:[5,10,15,20,25,50,100],nextPrev:!0,firstLast:!1,prevText:"‹",nextText:"›",firstText:"«",lastText:"»",ellipsisText:"…",truncatePager:!0,pagerDelta:2,scrollY:"",fixedColumns:!0,fixedHeight:!1,footer:!1,header:!0,hiddenHeader:!1,rowNavigation:!1,tabIndex:!1,pagerRender:!1,rowRender:!1,tableRender:!1,labels:{placeholder:"Search...",perPage:"entries per page",noRows:"No entries found",noResults:"No results match your search query",info:"Showing {start} to {end} of {rows} entries"},template:t=>`<div class='${t.classes.top}'>\n    ${t.paging&&t.perPageSelect?`<div class='${t.classes.dropdown}'>\n            <label>\n                <select class='${t.classes.selector}'></select> ${t.labels.perPage}\n            </label>\n        </div>`:""}\n    ${t.searchable?`<div class='${t.classes.search}'>\n            <input class='${t.classes.input}' placeholder='${t.labels.placeholder}' type='text'>\n        </div>`:""}\n</div>\n<div class='${t.classes.container}'${t.scrollY.length?` style='height: ${t.scrollY}; overflow-Y: auto;'`:""}></div>\n<div class='${t.classes.bottom}'>\n    ${t.paging?`<div class='${t.classes.info}'></div>`:""}\n    <nav class='${t.classes.pagination}'></nav>\n</div>`,classes:{active:"datatable-active",ascending:"datatable-ascending",bottom:"datatable-bottom",container:"datatable-container",cursor:"datatable-cursor",descending:"datatable-descending",disabled:"datatable-disabled",dropdown:"datatable-dropdown",ellipsis:"datatable-ellipsis",filter:"datatable-filter",filterActive:"datatable-filter-active",empty:"datatable-empty",headercontainer:"datatable-headercontainer",hidden:"datatable-hidden",info:"datatable-info",input:"datatable-input",loading:"datatable-loading",pagination:"datatable-pagination",paginationList:"datatable-pagination-list",paginationListItem:"datatable-pagination-list-item",paginationListItemLink:"datatable-pagination-list-item-link",search:"datatable-search",selector:"datatable-selector",sorter:"datatable-sorter",table:"datatable-table",top:"datatable-top",wrapper:"datatable-wrapper"},remote:void 0},Ve=(t,e,s,n={})=>({nodeName:"LI",attributes:{class:n.active&&!n.hidden?`${s.classes.paginationListItem} ${s.classes.active}`:n.hidden?`${s.classes.paginationListItem} ${s.classes.hidden} ${s.classes.disabled}`:s.classes.paginationListItem},childNodes:[{nodeName:"A",attributes:{"data-page":String(t),class:s.classes.paginationListItemLink},childNodes:[{nodeName:"#text",data:e}]}]}),Re=(t,e,s,n,i)=>{let o=[];if(i.firstLast&&o.push(Ve(1,i.firstText,i)),i.nextPrev){const e=t?1:s-1;o.push(Ve(e,i.prevText,i,{hidden:t}))}let a=[...Array(n).keys()].map((t=>Ve(t+1,String(t+1),i,{active:t===s-1})));if(i.truncatePager&&(a=((t,e,s,n)=>{const i=n.pagerDelta,o=n.classes,a=n.ellipsisText,r=2*i;let l=e-i,c=e+i;e<4-i+r?c=3+r:e>s-(3-i+r)&&(l=s-(2+r));const d=[];for(let e=1;e<=s;e++)if(1==e||e==s||e>=l&&e<=c){const s=t[e-1];d.push(s)}let h;const u=[];return d.forEach((e=>{const s=parseInt(e.childNodes[0].attributes["data-page"],10);if(h){const e=parseInt(h.childNodes[0].attributes["data-page"],10);if(s-e==2)u.push(t[e]);else if(s-e!=1){const t={nodeName:"LI",attributes:{class:`${o.paginationListItem} ${o.ellipsis} ${o.disabled}`},childNodes:[{nodeName:"A",attributes:{class:o.paginationListItemLink},childNodes:[{nodeName:"#text",data:a}]}]};u.push(t)}}u.push(e),h=e})),u})(a,s,n,i)),o=o.concat(a),i.nextPrev){const t=e?n:s+1;o.push(Ve(t,i.nextText,i,{hidden:e}))}i.firstLast&&o.push(Ve(n,i.lastText,i));return{nodeName:"UL",attributes:{class:i.classes.paginationList},childNodes:a.length>1?o:[]}};const Le={classes:{row:"datatable-editor-row",form:"datatable-editor-form",item:"datatable-editor-item",menu:"datatable-editor-menu",save:"datatable-editor-save",block:"datatable-editor-block",close:"datatable-editor-close",inner:"datatable-editor-inner",input:"datatable-editor-input",label:"datatable-editor-label",modal:"datatable-editor-modal",action:"datatable-editor-action",header:"datatable-editor-header",wrapper:"datatable-editor-wrapper",editable:"datatable-editor-editable",container:"datatable-editor-container",separator:"datatable-editor-separator"},labels:{editCell:"Edit Cell",editRow:"Edit Row",removeRow:"Remove Row",reallyRemove:"Are you sure?"},inline:!0,hiddenColumns:!1,contextMenu:!0,clickEvent:"dblclick",excludeColumns:[],menuItems:[{text:t=>t.options.labels.editCell,action:(t,e)=>{if(!(t.event.target instanceof Element))return;const s=t.event.target.closest("td");return t.editCell(s)}},{text:t=>t.options.labels.editRow,action:(t,e)=>{if(!(t.event.target instanceof Element))return;const s=t.event.target.closest("tr");return t.editRow(s)}},{separator:!0},{text:t=>t.options.labels.removeRow,action:(t,e)=>{if(t.event.target instanceof Element&&confirm(t.options.labels.reallyRemove)){const e=t.event.target.closest("tr");t.removeRow(e)}}}]};class ke{constructor(t,e={}){this.dt=t,this.options={...Le,...e}}init(){this.initialized||(this.dt.wrapperDOM.classList.add(this.options.classes.editable),this.options.inline&&(this.originalRowRender=this.dt.options.rowRender,this.dt.options.rowRender=(t,e,s)=>{let n=this.rowRender(t,e,s);return this.originalRowRender&&(n=this.originalRowRender(t,n,s)),n}),this.options.contextMenu&&(this.containerDOM=s("div",{id:this.options.classes.container}),this.wrapperDOM=s("div",{class:this.options.classes.wrapper}),this.menuDOM=s("ul",{class:this.options.classes.menu}),this.options.menuItems&&this.options.menuItems.length&&this.options.menuItems.forEach((t=>{const e=s("li",{class:t.separator?this.options.classes.separator:this.options.classes.item});if(!t.separator){const n=s("a",{class:this.options.classes.action,href:t.url||"#",html:"function"==typeof t.text?t.text(this):t.text});e.appendChild(n),t.action&&"function"==typeof t.action&&n.addEventListener("click",(e=>{e.preventDefault(),t.action(this,e)}))}this.menuDOM.appendChild(e)})),this.wrapperDOM.appendChild(this.menuDOM),this.containerDOM.appendChild(this.wrapperDOM),this.update()),this.data={},this.closed=!0,this.editing=!1,this.editingRow=!1,this.editingCell=!1,this.bindEvents(),setTimeout((()=>{this.initialized=!0,this.dt.emit("editable.init")}),10))}bindEvents(){this.events={context:this.context.bind(this),update:this.update.bind(this),dismiss:this.dismiss.bind(this),keydown:this.keydown.bind(this),click:this.click.bind(this)},this.dt.dom.addEventListener(this.options.clickEvent,this.events.click),document.addEventListener("click",this.events.dismiss),document.addEventListener("keydown",this.events.keydown),this.options.contextMenu&&(this.dt.dom.addEventListener("contextmenu",this.events.context),this.events.reset=function(t,e=300){let s;return(...n)=>{clearTimeout(s),s=window.setTimeout((()=>t()),e)}}((()=>this.events.update()),50),window.addEventListener("resize",this.events.reset),window.addEventListener("scroll",this.events.reset))}context(t){const e=t.target;if(!(e instanceof Element))return;this.event=t;const s=e.closest("tbody td");if(this.options.contextMenu&&!this.disabled&&s){t.preventDefault();let e=t.pageX,s=t.pageY;e>this.limits.x&&(e-=this.rect.width),s>this.limits.y&&(s-=this.rect.height),this.wrapperDOM.style.top=`${s}px`,this.wrapperDOM.style.left=`${e}px`,this.openMenu(),this.update()}}click(t){const e=t.target;if(e instanceof Element)if(this.editing&&this.data&&this.editingCell){const t=this.modalDOM?this.modalDOM.querySelector(`input.${this.options.classes.input}[type=text]`):this.dt.wrapperDOM.querySelector(`input.${this.options.classes.input}[type=text]`);this.saveCell(t.value)}else if(!this.editing){const s=e.closest("tbody td");s&&(this.editCell(s),t.preventDefault())}}keydown(t){if(this.modalDOM){if("Escape"===t.key)this.closeModal();else if("Enter"===t.key)if(this.editingCell){const t=this.modalDOM.querySelector(`input.${this.options.classes.input}[type=text]`);this.saveCell(t.value)}else{const t=Array.from(this.modalDOM.querySelectorAll(`input.${this.options.classes.input}[type=text]`));this.saveRow(t.map((t=>t.value.trim())),this.data.row)}}else if(this.editing&&this.data)if("Enter"===t.key){if(this.editingCell){const t=this.dt.wrapperDOM.querySelector(`input.${this.options.classes.input}[type=text]`);this.saveCell(t.value)}else if(this.editingRow){const t=Array.from(this.dt.wrapperDOM.querySelectorAll(`input.${this.options.classes.input}[type=text]`));this.saveRow(t.map((t=>t.value.trim())),this.data.row)}}else"Escape"===t.key&&this.saveCell(this.data.content)}editCell(t){const e=o(t.cellIndex,this.dt.columns.settings);if(this.options.excludeColumns.includes(e))return void this.closeMenu();const s=parseInt(t.parentElement.dataset.index,10),n=this.dt.data.data[s][e];this.data={cell:n,rowIndex:s,columnIndex:e,content:n.text||String(n.data)},this.editing=!0,this.editingCell=!0,this.options.inline?this.dt.update():this.editCellModal(),this.closeMenu()}editCellModal(){const t=this.data.cell,e=this.data.columnIndex,n=this.dt.data.headings[e].text||String(this.dt.data.headings[e].data),o=[`<div class='${this.options.classes.inner}'>`,`<div class='${this.options.classes.header}'>`,"<h4>Editing cell</h4>",`<button class='${this.options.classes.close}' type='button' data-editor-close>×</button>`," </div>",`<div class='${this.options.classes.block}'>`,`<form class='${this.options.classes.form}'>`,`<div class='${this.options.classes.row}'>`,`<label class='${this.options.classes.label}'>${i(n)}</label>`,`<input class='${this.options.classes.input}' value='${i(t.text||String(t.data)||"")}' type='text'>`,"</div>",`<div class='${this.options.classes.row}'>`,`<button class='${this.options.classes.save}' type='button' data-editor-save>Save</button>`,"</div>","</form>","</div>","</div>"].join(""),a=s("div",{class:this.options.classes.modal,html:o});this.modalDOM=a,this.openModal();const r=a.querySelector(`input.${this.options.classes.input}[type=text]`);r.focus(),r.selectionStart=r.selectionEnd=r.value.length,a.addEventListener("click",(t=>{const e=t.target;e instanceof Element&&(e.hasAttribute("data-editor-close")?this.closeModal():e.hasAttribute("data-editor-save")&&this.saveCell(r.value))}))}saveCell(t){const e=this.data.content,s=this.dt.columns.settings[this.data.columnIndex].type||this.dt.options.type,n=t.trim();let i;if("number"===s)i={data:parseFloat(n)};else if("boolean"===s)i=["","false","0"].includes(n)?{data:!1,text:"false",order:0}:{data:!0,text:"true",order:1};else if("html"===s)i={data:[{nodeName:"#text",data:t}],text:t,order:t};else if("string"===s)i={data:t};else if("date"===s){const e=this.dt.columns.settings[this.data.columnIndex].format||this.dt.options.format;i={data:t,order:Oe(String(t),e)}}else i={data:t};this.dt.data.data[this.data.rowIndex][this.data.columnIndex]=i,this.closeModal();const o=this.data.rowIndex,a=this.data.columnIndex;this.data={},this.dt.update(!0),this.editing=!1,this.editingCell=!1,this.dt.emit("editable.save.cell",t,e,o,a)}editRow(t){if(!t||"TR"!==t.nodeName||this.editing)return;const e=parseInt(t.dataset.index,10),s=this.dt.data.data[e];this.data={row:s,rowIndex:e},this.editing=!0,this.editingRow=!0,this.options.inline?this.dt.update():this.editRowModal(),this.closeMenu()}editRowModal(){const t=this.data.row,e=[`<div class='${this.options.classes.inner}'>`,`<div class='${this.options.classes.header}'>`,"<h4>Editing row</h4>",`<button class='${this.options.classes.close}' type='button' data-editor-close>×</button>`," </div>",`<div class='${this.options.classes.block}'>`,`<form class='${this.options.classes.form}'>`,`<div class='${this.options.classes.row}'>`,`<button class='${this.options.classes.save}' type='button' data-editor-save>Save</button>`,"</div>","</form>","</div>","</div>"].join(""),n=s("div",{class:this.options.classes.modal,html:e}),o=n.firstElementChild;if(!o)return;const a=o.lastElementChild?.firstElementChild;if(!a)return;t.forEach(((t,e)=>{const n=this.dt.columns.settings[e];if((!n.hidden||n.hidden&&this.options.hiddenColumns)&&!this.options.excludeColumns.includes(e)){const n=this.dt.data.headings[e].text||String(this.dt.data.headings[e].data);a.insertBefore(s("div",{class:this.options.classes.row,html:[`<div class='${this.options.classes.row}'>`,`<label class='${this.options.classes.label}'>${i(n)}</label>`,`<input class='${this.options.classes.input}' value='${i(t.text||String(t.data)||"")}' type='text'>`,"</div>"].join("")}),a.lastElementChild)}})),this.modalDOM=n,this.openModal();const r=Array.from(a.querySelectorAll(`input.${this.options.classes.input}[type=text]`));r.pop(),n.addEventListener("click",(t=>{const e=t.target;e instanceof Element&&(e.hasAttribute("data-editor-close")?this.closeModal():e.hasAttribute("data-editor-save")&&this.saveRow(r.map((t=>t.value.trim())),this.data.row))}))}saveRow(t,e){const s=e.map((t=>t.text??String(t.data)));this.dt.data.data[this.data.rowIndex]=this.dt.data.data[this.data.rowIndex].map(((e,s)=>{if(this.dt.columns.settings[s].hidden||this.options.excludeColumns.includes(s))return e;const n=this.dt.columns.settings[s].type||this.dt.options.type,i=t[a(s,this.dt.columns.settings)],o=i.trim();let r;if("number"===n)r={data:parseFloat(o)};else if("boolean"===n)r=["","false","0"].includes(o)?{data:!1,text:"false",order:0}:{data:!0,text:"true",order:1};else if("html"===n)r={data:[{nodeName:"#text",data:i}],text:i,order:i};else if("string"===n)r={data:i};else if("date"===n){const t=this.dt.columns.settings[s].format||this.dt.options.format;r={data:i,order:Oe(String(i),t)}}else r={data:i};return r})),this.data={},this.dt.update(!0),this.closeModal(),this.dt.emit("editable.save.row",t,s,e)}openModal(){this.modalDOM&&document.body.appendChild(this.modalDOM)}closeModal(){this.editing&&this.modalDOM&&(document.body.removeChild(this.modalDOM),this.modalDOM=this.editing=this.editingRow=this.editingCell=!1)}removeRow(t){if(!t||"TR"!==t.nodeName||this.editing)return;const e=parseInt(t.dataset.index,10);this.dt.rows.remove(e),this.closeMenu()}update(){const t=window.scrollX||window.pageXOffset,e=window.scrollY||window.pageYOffset;this.rect=this.wrapperDOM.getBoundingClientRect(),this.limits={x:window.innerWidth+t-this.rect.width,y:window.innerHeight+e-this.rect.height}}dismiss(t){const e=t.target;if(!(e instanceof Element))return;let s=!0;this.options.contextMenu&&(s=!this.wrapperDOM.contains(e),this.editing&&(s=!this.wrapperDOM.contains(e)&&!e.matches(`input.${this.options.classes.input}[type=text]`))),s&&(this.editingCell&&this.saveCell(this.data.content),this.closeMenu())}openMenu(){if(this.editing&&this.data&&this.editingCell){const t=this.modalDOM?this.modalDOM.querySelector(`input.${this.options.classes.input}[type=text]`):this.dt.wrapperDOM.querySelector(`input.${this.options.classes.input}[type=text]`);this.saveCell(t.value)}this.options.contextMenu&&(document.body.appendChild(this.containerDOM),this.closed=!1,this.dt.emit("editable.context.open"))}closeMenu(){this.options.contextMenu&&!this.closed&&(this.closed=!0,document.body.removeChild(this.containerDOM),this.dt.emit("editable.context.close"))}destroy(){this.dt.dom.removeEventListener(this.options.clickEvent,this.events.click),this.dt.dom.removeEventListener("contextmenu",this.events.context),document.removeEventListener("click",this.events.dismiss),document.removeEventListener("keydown",this.events.keydown),window.removeEventListener("resize",this.events.reset),window.removeEventListener("scroll",this.events.reset),document.body.contains(this.containerDOM)&&document.body.removeChild(this.containerDOM),this.options.inline&&(this.dt.options.rowRender=this.originalRowRender),this.initialized=!1}rowRender(t,e,s){if(!this.data||this.data.rowIndex!==s)return e;if(this.editingCell){e.childNodes[a(this.data.columnIndex,this.dt.columns.settings)].childNodes=[{nodeName:"INPUT",attributes:{type:"text",value:this.data.content,class:this.options.classes.input}}]}else e.childNodes.forEach(((s,n)=>{const a=o(n,this.dt.columns.settings),r=t[a];if(!this.options.excludeColumns.includes(a)){e.childNodes[n].childNodes=[{nodeName:"INPUT",attributes:{type:"text",value:i(r.text||String(r.data)||""),class:this.options.classes.input}}]}}));return e}}exports.DataTable=class{constructor(t,e={}){const s="string"==typeof t?document.querySelector(t):t;s instanceof HTMLTableElement?this.dom=s:(this.dom=document.createElement("table"),s.appendChild(this.dom));const n={...Ae.labels,...e.labels},i={...Ae.classes,...e.classes},o={...e.remote};this.options={...Ae,...e,labels:n,classes:i,remote:o},this._initialInnerHTML=this.options.destroyable?this.dom.innerHTML:"",this.hasRemote=0!==Object.keys(this.options.remote).length,this.options.tabIndex?this.dom.tabIndex=this.options.tabIndex:this.options.rowNavigation&&-1===this.dom.tabIndex&&(this.dom.tabIndex=0),this._listeners={onResize:()=>this._onResize()},this._dd=new ge,this.initialized=!1,this._events={},this._currentPage=0,this.onFirstPage=!0,this.hasHeadings=!1,this.hasRows=!1,this.init().catch((()=>{this.setMessage("Something went wrong during fetching remote data.")}))}async init(){if(this.initialized||this.dom.classList.contains(this.options.classes.table))return!1;this._virtualDOM=ae(this.dom),this._tableAttributes={...this._virtualDOM.attributes},this.rows=new Ce(this),this.columns=new Te(this),this.hasRemote&&await this._remoteFetch(),this.data=Se(this.options.data,this.dom,this.columns.settings,this.options.type,this.options.format),this._render(),setTimeout((()=>{this.emit("datatable.init"),this.initialized=!0}),10)}_remoteFetch(t){const e=this.options.remote,s={limit:this.options.perPage,offset:this.options.perPage*this._currentPage,sort:null};switch(t&&(console.log(this.columns._state.sort),s.sort=t),e.method){case"GET":return Ut.get(e.url).then((t=>{console.log(t)})).catch((t=>{console.log(t)})).finally((()=>{console.log("FINISHFETCH")}));case"POST":return Ut.post(e.url,s,{headers:{"X-CSRF-Token":e.token,Accept:"application/json","Content-Type":"application/json;charset=UTF-8"}}).then((t=>{const e={headings:Object.keys(t.data.data[0]),data:[]};for(let s=0;s<t.data.data.length;s++){e.data[s]=[];for(const n in t.data.data[s])t.data.data[s].hasOwnProperty(n)&&e.data[s].push(t.data.data[s][n])}this.options.data=e,this.options.remote.resultsData=new r,this.options.remote.resultsData.totalRecords=t.data.total})).catch((t=>{console.log(t)})).finally((()=>{console.log("FINISHFETCH")}))}}_render(){this.wrapperDOM=s("div",{class:`${this.options.classes.wrapper} ${this.options.classes.loading}`}),this.wrapperDOM.innerHTML=this.options.template(this.options);const t=this.wrapperDOM.querySelector(`select.${this.options.classes.selector}`);t&&this.options.paging&&this.options.perPageSelect?this.options.perPageSelect.forEach((e=>{const[s,n]=Array.isArray(e)?[e[0],e[1]]:[String(e),e],i=n===this.options.perPage,o=new Option(s,String(n),i,i);t.appendChild(o)})):t&&t.parentElement.removeChild(t),this.containerDOM=this.wrapperDOM.querySelector(`.${this.options.classes.container}`),this._pagerDOMs=[],Array.from(this.wrapperDOM.querySelectorAll(`.${this.options.classes.pagination}`)).forEach((t=>{t instanceof HTMLElement&&(t.innerHTML=`<ul class="${this.options.classes.paginationList}"></ul>`,this._pagerDOMs.push(t.firstElementChild))})),this._virtualPagerDOM={nodeName:"UL",attributes:{class:this.options.classes.paginationList}},this._label=this.wrapperDOM.querySelector(`.${this.options.classes.info}`),this.dom.parentElement.replaceChild(this.wrapperDOM,this.dom),this.containerDOM.appendChild(this.dom),this._rect=this.dom.getBoundingClientRect(),this._fixHeight(),this.options.header||this.wrapperDOM.classList.add("no-header"),this.options.footer||this.wrapperDOM.classList.add("no-footer"),this.options.sortable&&this.wrapperDOM.classList.add("sortable"),this.options.searchable&&this.wrapperDOM.classList.add("searchable"),this.options.fixedHeight&&this.wrapperDOM.classList.add("fixed-height"),this.options.fixedColumns&&this.wrapperDOM.classList.add("fixed-columns"),this._bindEvents(),this.columns._state.sort&&(console.log("SORT RENDER"),this.columns.sort(this.columns._state.sort.column,this.columns._state.sort.dir,!0)),this.update(!0)}_renderTable(t={}){let e=ye(this._tableAttributes,this.data.headings,(this.options.paging||this._searchQuery)&&this._currentPage&&this.pages.length&&!t.noPaging?this.pages[this._currentPage-1]:this.data.data.map(((t,e)=>({row:t,index:e}))),this.columns.settings,this.columns._state,this.rows.cursor,this.options,t);if(this.options.tableRender){const t=this.options.tableRender(this.data,e,"main");t&&(e=t)}const s=this._dd.diff(this._virtualDOM,e);this._dd.apply(this.dom,s),this._virtualDOM=e}_renderPage(t=!1){this.hasRows&&this.totalPages?(this._currentPage>this.totalPages&&(this._currentPage=1),this._renderTable(),this.onFirstPage=1===this._currentPage,this.onLastPage=this._currentPage===this.lastPage):this.setMessage(this.options.labels.noRows);let e,s=0,n=0,i=0;if(this.totalPages&&(s=this._currentPage-1,n=s*this.options.perPage,i=n+this.pages[s].length,n+=1,e=this._searchQuery?this._searchData.length:this.hasRemote?this.options.remote.resultsData.totalRecords:this.data.data.length),this._label&&this.options.labels.info.length){const t=this.options.labels.info.replace("{start}",String(n)).replace("{end}",String(i)).replace("{page}",String(this._currentPage)).replace("{pages}",String(this.totalPages)).replace("{rows}",String(e));this._label.innerHTML=e?t:""}if(1==this._currentPage&&this._fixHeight(),this.options.rowNavigation&&this._currentPage&&(!this.rows.cursor||!this.pages[this._currentPage-1].find((t=>t.index===this.rows.cursor)))){const e=this.pages[this._currentPage-1];e.length&&(t?this.rows.setCursor(e[e.length-1].index):this.rows.setCursor(e[0].index))}}_renderPagers(){if(!this.options.paging)return;let t=Re(this.onFirstPage,this.onLastPage,this._currentPage,this.totalPages,this.options);if(this.options.pagerRender){const e=this.options.pagerRender([this.onFirstPage,this.onLastPage,this._currentPage,this.totalPages],t);e&&(t=e)}const e=this._dd.diff(this._virtualPagerDOM,t);this._pagerDOMs.forEach((t=>{this._dd.apply(t,e)})),this._virtualPagerDOM=t}_renderSeparateHeader(){const t=this.dom.parentElement;this.headerDOM||(this.headerDOM=document.createElement("div"),this._virtualHeaderDOM={nodeName:"DIV"}),t.parentElement.insertBefore(this.headerDOM,t);let e={nodeName:"TABLE",attributes:{class:this.options.classes.table},childNodes:[{nodeName:"THEAD",childNodes:[be(this.data.headings,this.columns.settings,this.columns._state,this.options,{unhideHeader:!0})]}]};if(this.options.tableRender){const t=this.options.tableRender(this.data,e,"header");t&&(e=t)}const s={nodeName:"DIV",attributes:{class:this.options.classes.headercontainer},childNodes:[e]},n=this._dd.diff(this._virtualHeaderDOM,s);this._dd.apply(this.headerDOM,n),this._virtualHeaderDOM=s;const i=this.headerDOM.firstElementChild.clientWidth-this.dom.clientWidth;if(i){const t=structuredClone(this._virtualHeaderDOM);t.attributes.style=`padding-right: ${i}px;`;const e=this._dd.diff(this._virtualHeaderDOM,t);this._dd.apply(this.headerDOM,e),this._virtualHeaderDOM=t}t.scrollHeight>t.clientHeight&&(t.style.overflowY="scroll")}_bindEvents(){if(this.options.perPageSelect){const t=this.wrapperDOM.querySelector(`select.${this.options.classes.selector}`);t&&t instanceof HTMLSelectElement&&t.addEventListener("change",(()=>{this.options.perPage=parseInt(t.value,10),this.update(),this._fixHeight(),this.emit("datatable.perpage",this.options.perPage)}),!1)}this.options.searchable&&(this._input=this.wrapperDOM.querySelector(`.${this.options.classes.input}`),this._input&&this._input.addEventListener("keyup",(()=>this.search(this._input.value)),!1)),this.wrapperDOM.addEventListener("click",(async t=>{const e=t.target.closest("a");if(e)if(e.hasAttribute("data-page"))this.page(parseInt(e.getAttribute("data-page"),10)),t.preventDefault();else if(e.classList.contains(this.options.classes.sorter)){const s=Array.from(e.parentElement.parentElement.children).indexOf(e.parentElement),n=o(s,this.columns.settings);this.hasRemote&&await this._remoteFetch(this.columns._state.sort).catch((()=>this.setMessage("Something went wrong during sorting remote data"))),this.columns.sort(n),t.preventDefault()}else if(e.classList.contains(this.options.classes.filter)){const s=Array.from(e.parentElement.parentElement.children).indexOf(e.parentElement),n=o(s,this.columns.settings);this.columns.filter(n),t.preventDefault()}}),!1),this.options.rowNavigation?(this.dom.addEventListener("keydown",(t=>{if("ArrowUp"===t.key){let e;t.preventDefault(),t.stopPropagation(),this.pages[this._currentPage-1].find((t=>t.index===this.rows.cursor||(e=t,!1))),e?this.rows.setCursor(e.index):this.onFirstPage||this.page(this._currentPage-1,!0)}else if("ArrowDown"===t.key){let e;t.preventDefault(),t.stopPropagation();const s=this.pages[this._currentPage-1].find((t=>!!e||(t.index===this.rows.cursor&&(e=!0),!1)));s?this.rows.setCursor(s.index):this.onLastPage||this.page(this._currentPage+1)}else["Enter"," "].includes(t.key)&&this.emit("datatable.selectrow",this.rows.cursor,t)})),this.dom.addEventListener("mousedown",(t=>{const e=t.target;if(e instanceof Element&&this.dom.matches(":focus")){const s=Array.from(this.dom.querySelectorAll("body tr")).find((t=>t.contains(e)));s&&s instanceof HTMLElement&&this.emit("datatable.selectrow",parseInt(s.dataset.index,10),t)}}))):this.dom.addEventListener("mousedown",(t=>{const e=t.target;if(!(e instanceof Element))return;const s=Array.from(this.dom.querySelectorAll("body tr")).find((t=>t.contains(e)));s&&s instanceof HTMLElement&&this.emit("datatable.selectrow",parseInt(s.dataset.index,10),t)})),window.addEventListener("resize",this._listeners.onResize)}_onResize(){this._rect=this.containerDOM.getBoundingClientRect(),this._rect.width&&this.update(!0)}destroy(){this.options.destroyable&&(this.dom.innerHTML=this._initialInnerHTML,this.dom.classList.remove(this.options.classes.table),this.wrapperDOM.parentElement&&this.wrapperDOM.parentElement.replaceChild(this.dom,this.wrapperDOM),this.initialized=!1,window.removeEventListener("resize",this._listeners.onResize))}update(t=!1){t&&(this.columns._measureWidths(),this.hasRows=Boolean(this.data.data.length),this.hasHeadings=Boolean(this.data.headings.length)),this.wrapperDOM.classList.remove(this.options.classes.empty),this._paginate(),this._renderPage(),this._renderPagers(),this.options.scrollY.length&&this._renderSeparateHeader(),this.emit("datatable.update")}_paginate(){let t=this.data.data.map(((t,e)=>({row:t,index:e})));if(this._searchQuery&&(t=[],this._searchData.forEach((e=>t.push({index:e,row:this.data.data[e]})))),this.columns._state.filters.length&&this.columns._state.filters.forEach(((e,s)=>{e&&(t=t.filter((t=>"function"==typeof e?e(t.row[s].data):(t.row[s].text??t.row[s].data)===e)))})),this.options.paging&&this.options.perPage>0){if(this.pages=t.map(((e,s)=>s%this.options.perPage==0?t.slice(s,s+this.options.perPage):null)).filter((t=>t)),this.hasRemote)for(let t=1;t<this.options.remote.resultsData.totalRecords/this.options.perPage;t++)this.pages.push([])}else this.pages=[t];return this.totalPages=this.lastPage=this.pages.length,this._currentPage||(this._currentPage=1),this.totalPages}_fixHeight(){this.options.fixedHeight&&(this.containerDOM.style.height=null,this._rect=this.containerDOM.getBoundingClientRect(),this.containerDOM.style.height=`${this._rect.height}px`)}search(t){if(!this.hasRows)return!1;if(this._currentPage=1,this._searchQuery=t,this._searchData=[],!t.length)return this.update(),this.emit("datatable.search",t,this._searchData),this.wrapperDOM.classList.remove("search-results"),!1;const e=this.columns.settings.map((e=>{if(e.hidden||!e.searchable)return!1;let s=t;const n=e.sensitivity||this.options.sensitivity;["base","accent"].includes(n)&&(s=s.toLowerCase()),["base","case"].includes(n)&&(s=s.normalize("NFD").replace(/\p{Diacritic}/gu,""));return(e.ignorePunctuation||this.options.ignorePunctuation)&&(s=s.replace(/[.,/#!$%^&*;:{}=-_`~()]/g,"")),s}));this.data.data.forEach(((t,s)=>{for(let n=0;n<t.length;n++){const i=e[n];if(i){const e=t[n];let o=(e.text||String(e.data)).trim();if(o.length){const t=this.columns.settings[n],e=t.sensitivity||this.options.sensitivity;["base","accent"].includes(e)&&(o=o.toLowerCase()),["base","case"].includes(e)&&(o=o.normalize("NFD").replace(/\p{Diacritic}/gu,""));if((t.ignorePunctuation||this.options.ignorePunctuation)&&(o=o.replace(/[.,/#!$%^&*;:{}=-_`~()]/g,"")),i.split(" ").find((t=>o.includes(t)))){this._searchData.push(s);break}}}}})),this.wrapperDOM.classList.add("search-results"),this._searchData.length?this.update():(this.wrapperDOM.classList.remove("search-results"),this.setMessage(this.options.labels.noResults)),this.emit("datatable.search",t,this._searchData)}page(t,e=!1){return t!==this._currentPage&&(isNaN(t)||(this._currentPage=t),!(t>this.pages.length||t<0)&&(this._renderPage(e),this._renderPagers(),void this.emit("datatable.page",t)))}insert(e){let s=[];if(Array.isArray(e)){const t=this.data.headings.map((t=>t.text??String(t.data)));e.forEach(((e,n)=>{const i=[];Object.entries(e).forEach((([e,s])=>{const o=t.indexOf(e);o>-1?i[o]=De(s,this.columns.settings[o]):this.hasHeadings||this.hasRows||0!==n||(i[t.length]=De(s,this.columns.settings[t.length]),t.push(e),this.data.headings.push(Me(e)))})),s.push(i)}))}else t(e)&&(!e.headings||this.hasHeadings||this.hasRows?e.data&&Array.isArray(e.data)&&(s=e.data.map((t=>t.map(((t,e)=>De(t,this.columns.settings[e])))))):this.data=Se(e,void 0,this.columns.settings,this.options.type,this.options.format));s.length&&s.forEach((t=>this.data.data.push(t))),this.hasHeadings=Boolean(this.data.headings.length),this.columns._state.sort&&this.columns.sort(this.columns._state.sort.column,this.columns._state.sort.dir,!0),this.update(!0)}refresh(){this.options.searchable&&(this._input.value="",this._searchQuery=""),this._currentPage=1,this.onFirstPage=!0,this.update(!0),this.emit("datatable.refresh")}print(){const t=s("table");let e=ye(this._tableAttributes,this.data.headings,this.data.data.map(((t,e)=>({row:t,index:e}))),this.columns.settings,this.columns._state,!1,this.options,{noColumnWidths:!0,unhideHeader:!0});if(this.options.tableRender){const t=this.options.tableRender(this.data,e,"print");t&&(e=t)}const n=this._dd.diff({nodeName:"TABLE"},e);this._dd.apply(t,n);const i=window.open();i.document.body.appendChild(t),i.print()}setMessage(t){const e=this.data.headings.filter(((t,e)=>!this.columns.settings[e]?.hidden)).length||1;this.wrapperDOM.classList.add(this.options.classes.empty),this._label&&(this._label.innerHTML=""),this.totalPages=0,this._renderPagers();let s=structuredClone(this._virtualDOM),n=s.childNodes?.find((t=>"TBODY"===t.nodeName));if(n||(n={nodeName:"TBODY"},s.childNodes=[n]),n.childNodes=[{nodeName:"TR",childNodes:[{nodeName:"TD",attributes:{class:this.options.classes.empty,colspan:String(e)},childNodes:[{nodeName:"#text",data:t}]}]}],this.options.tableRender){const t=this.options.tableRender(this.data,s,"message");t&&(s=t)}const i=this._dd.diff(this._virtualDOM,s);this._dd.apply(this.dom,i),this._virtualDOM=s}on(t,e){this._events[t]=this._events[t]||[],this._events[t].push(e)}off(t,e){t in this._events!=!1&&this._events[t].splice(this._events[t].indexOf(e),1)}emit(t,...e){if(t in this._events!=!1)for(let s=0;s<this._events[t].length;s++)this._events[t][s](...e)}},exports.convertCSV=function(e){let s;if(!t(e))return!1;const n={lineDelimiter:"\n",columnDelimiter:",",removeDoubleQuotes:!1,...e};if(n.data.length){s={data:[]};const t=n.data.split(n.lineDelimiter);if(t.length&&(n.headings&&(s.headings=t[0].split(n.columnDelimiter),n.removeDoubleQuotes&&(s.headings=s.headings.map((t=>t.trim().replace(/(^"|"$)/g,"")))),t.shift()),t.forEach(((t,e)=>{s.data[e]=[];const i=t.split(n.columnDelimiter);i.length&&i.forEach((t=>{n.removeDoubleQuotes&&(t=t.trim().replace(/(^"|"$)/g,"")),s.data[e].push(t)}))}))),s)return s}return!1},exports.convertJSON=function(s){let n;if(!t(s))return!1;const i={data:"",...s};if(i.data.length||t(i.data)){const t=!!e(i.data)&&JSON.parse(i.data);if(t?(n={headings:[],data:[]},t.forEach(((t,e)=>{n.data[e]=[],Object.entries(t).forEach((([t,s])=>{n.headings.includes(t)||n.headings.push(t),n.data[e].push(s)}))}))):console.warn("That's not valid JSON!"),n)return n}return!1},exports.createElement=s,exports.exportCSV=function(e,s={}){if(!e.hasHeadings&&!e.hasRows)return!1;if(!t(s))return!1;const n={download:!0,skipColumn:[],lineDelimiter:"\n",columnDelimiter:",",...s},i=t=>!n.skipColumn.includes(t)&&!e.columns.settings[t]?.hidden;let o=[];const a=e.data.headings.filter(((t,e)=>i(e))).map((t=>t.text??t.data));if(o[0]=a,n.selection)if(Array.isArray(n.selection))for(let t=0;t<n.selection.length;t++)o=o.concat(e.pages[n.selection[t]-1].map((t=>t.row.filter(((t,e)=>i(e))).map((t=>t.text??t.data)))));else o=o.concat(e.pages[n.selection-1].map((t=>t.row.filter(((t,e)=>i(e))).map((t=>t.text??t.data)))));else o=o.concat(e.data.data.map((t=>t.filter(((t,e)=>i(e))).map((t=>t.text??t.data)))));if(o.length){let t="";if(o.forEach((e=>{e.forEach((e=>{"string"==typeof e&&(e=(e=(e=(e=(e=e.trim()).replace(/\s{2,}/g," ")).replace(/\n/g,"  ")).replace(/"/g,'""')).replace(/#/g,"%23")).includes(",")&&(e=`"${e}"`),t+=e+n.columnDelimiter})),t=t.trim().substring(0,t.length-1),t+=n.lineDelimiter})),t=t.trim().substring(0,t.length-1),n.download){const e=document.createElement("a");e.href=encodeURI(`data:text/csv;charset=utf-8,${t}`),e.download=`${n.filename||"datatable_export"}.csv`,document.body.appendChild(e),e.click(),document.body.removeChild(e)}return t}return!1},exports.exportJSON=function(e,s={}){if(!e.hasHeadings&&!e.hasRows)return!1;if(!t(s))return!1;const n={download:!0,skipColumn:[],replacer:null,space:4,...s},i=t=>!n.skipColumn.includes(t)&&!e.columns.settings[t]?.hidden;let o=[];if(n.selection)if(Array.isArray(n.selection))for(let t=0;t<n.selection.length;t++)o=o.concat(e.pages[n.selection[t]-1].map((t=>t.row.filter(((t,e)=>i(e))).map((t=>t.data)))));else o=o.concat(e.pages[n.selection-1].map((t=>t.row.filter(((t,e)=>i(e))).map((t=>t.data)))));else o=o.concat(e.data.data.map((t=>t.filter(((t,e)=>i(e))).map((t=>t.data)))));const a=e.data.headings.filter(((t,e)=>i(e))).map((t=>t.text??String(t.data)));if(o.length){const t=[];o.forEach(((e,s)=>{t[s]=t[s]||{},e.forEach(((e,n)=>{t[s][a[n]]=e}))}));const e=JSON.stringify(t,n.replacer,n.space);if(n.download){const t=new Blob([e],{type:"data:application/json;charset=utf-8"}),s=URL.createObjectURL(t),i=document.createElement("a");i.href=s,i.download=`${n.filename||"datatable_export"}.json`,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(s)}return e}return!1},exports.exportSQL=function(e,s={}){if(!e.hasHeadings&&!e.hasRows)return!1;if(!t(s))return!1;const n={download:!0,skipColumn:[],tableName:"myTable",...s},i=t=>!n.skipColumn.includes(t)&&!e.columns.settings[t]?.hidden;let o=[];if(n.selection)if(Array.isArray(n.selection))for(let t=0;t<n.selection.length;t++)o=o.concat(e.pages[n.selection[t]-1].map((t=>t.row.filter(((t,e)=>i(e))).map((t=>t.text??t.data)))));else o=o.concat(e.pages[n.selection-1].map((t=>t.row.filter(((t,e)=>i(e))).map((t=>t.text??t.data)))));else o=o.concat(e.data.data.map((t=>t.filter(((t,e)=>i(e))).map((t=>t.data)))));const a=e.data.headings.filter(((t,e)=>i(e))).map((t=>t.text??String(t.data)));if(o.length){let t=`INSERT INTO \`${n.tableName}\` (`;if(a.forEach((e=>{t+=`\`${e}\`,`})),t=t.trim().substring(0,t.length-1),t+=") VALUES ",o.forEach((e=>{t+="(",e.forEach((e=>{t+="string"==typeof e?`"${e}",`:`${e},`})),t=t.trim().substring(0,t.length-1),t+="),"})),t=t.trim().substring(0,t.length-1),t+=";",n.download&&(t=`data:application/sql;charset=utf-8,${t}`),n.download){const e=document.createElement("a");e.href=encodeURI(t),e.download=`${n.filename||"datatable_export"}.sql`,document.body.appendChild(e),e.click(),document.body.removeChild(e)}return t}return!1},exports.exportTXT=function(e,s={}){if(!e.hasHeadings&&!e.hasRows)return!1;if(!t(s))return!1;const n={download:!0,skipColumn:[],lineDelimiter:"\n",columnDelimiter:",",...s},i=t=>!n.skipColumn.includes(t)&&!e.columns.settings[t]?.hidden;let o=[];const a=e.data.headings.filter(((t,e)=>i(e))).map((t=>t.text??t.data));if(o[0]=a,n.selection)if(Array.isArray(n.selection))for(let t=0;t<n.selection.length;t++)o=o.concat(e.pages[n.selection[t]-1].map((t=>t.row.filter(((t,e)=>i(e))).map((t=>t.data)))));else o=o.concat(e.pages[n.selection-1].map((t=>t.row.filter(((t,e)=>i(e))).map((t=>t.data)))));else o=o.concat(e.data.data.map((t=>t.filter(((t,e)=>i(e))).map((t=>t.data)))));if(o.length){let t="";if(o.forEach((e=>{e.forEach((e=>{"string"==typeof e&&(e=(e=(e=(e=(e=e.trim()).replace(/\s{2,}/g," ")).replace(/\n/g,"  ")).replace(/"/g,'""')).replace(/#/g,"%23")).includes(",")&&(e=`"${e}"`),t+=e+n.columnDelimiter})),t=t.trim().substring(0,t.length-1),t+=n.lineDelimiter})),t=t.trim().substring(0,t.length-1),n.download&&(t=`data:text/csv;charset=utf-8,${t}`),n.download){const e=document.createElement("a");e.href=encodeURI(t),e.download=`${n.filename||"datatable_export"}.txt`,document.body.appendChild(e),e.click(),document.body.removeChild(e)}return t}return!1},exports.isJson=e,exports.isObject=t,exports.makeEditable=function(t,e={}){const s=new ke(t,e);return t.initialized?s.init():t.on("datatable.init",(()=>s.init())),s};


}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer)
},{"buffer":3}],2:[function(require,module,exports){
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}

},{}],3:[function(require,module,exports){
(function (Buffer){(function (){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

var K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function () { return 42 } }
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  var buf = new Uint8Array(length)
  buf.__proto__ = Buffer.prototype
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
if (typeof Symbol !== 'undefined' && Symbol.species != null &&
    Buffer[Symbol.species] === Buffer) {
  Object.defineProperty(Buffer, Symbol.species, {
    value: null,
    configurable: true,
    enumerable: false,
    writable: false
  })
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayLike(value)
  }

  if (value == null) {
    throw TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  var valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  var b = fromObject(value)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(
      value[Symbol.toPrimitive]('string'), encodingOrOffset, length
    )
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Buffer.prototype.__proto__ = Uint8Array.prototype
Buffer.__proto__ = Uint8Array

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  var length = byteLength(string, encoding) | 0
  var buf = createBuffer(length)

  var actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  buf.__proto__ = Buffer.prototype
  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      buf = Buffer.from(buf)
    }
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  var len = string.length
  var mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  var strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
        : (firstByte > 0xBF) ? 2
          : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  newBuf.__proto__ = Buffer.prototype
  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end)
  } else if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (var i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    var len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable-line no-self-compare
}

}).call(this)}).call(this,require("buffer").Buffer)
},{"base64-js":2,"buffer":3,"ieee754":4}],4:[function(require,module,exports){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}]},{},[1])(1)
});
