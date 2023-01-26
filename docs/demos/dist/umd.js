(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.simpleDatatables = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global,Buffer){(function (){
"use strict";var t=function(){return t=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var s in e=arguments[n])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t},t.apply(this,arguments)};function e(t,e){return function(){return t.apply(e,arguments)}}const{toString:n}=Object.prototype,{getPrototypeOf:i}=Object,s=(o=Object.create(null),t=>{const e=n.call(t);return o[e]||(o[e]=e.slice(8,-1).toLowerCase())});var o;const r=t=>(t=t.toLowerCase(),e=>s(e)===t),a=t=>e=>typeof e===t,{isArray:c}=Array,l=a("undefined");const d=r("ArrayBuffer");const u=a("string"),h=a("function"),f=a("number"),p=t=>null!==t&&"object"==typeof t,m=t=>{if("object"!==s(t))return!1;const e=i(t);return!(null!==e&&e!==Object.prototype&&null!==Object.getPrototypeOf(e)||Symbol.toStringTag in t||Symbol.iterator in t)},g=r("Date"),v=r("File"),b=r("Blob"),y=r("FileList"),w=r("URLSearchParams");function E(t,e,{allOwnKeys:n=!1}={}){if(null==t)return;let i,s;if("object"!=typeof t&&(t=[t]),c(t))for(i=0,s=t.length;i<s;i++)e.call(null,t[i],i,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let r;for(i=0;i<o;i++)r=s[i],e.call(null,t[r],r,t)}}function _(t,e){e=e.toLowerCase();const n=Object.keys(t);let i,s=n.length;for(;s-- >0;)if(i=n[s],e===i.toLowerCase())return i;return null}const N="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,x=t=>!l(t)&&t!==N;const O=(S="undefined"!=typeof Uint8Array&&i(Uint8Array),t=>S&&t instanceof S);var S;const D=r("HTMLFormElement"),T=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),V=r("RegExp"),A=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};E(n,((n,s)=>{!1!==e(n,s,t)&&(i[s]=n)})),Object.defineProperties(t,i)};var C={isArray:c,isArrayBuffer:d,isBuffer:function(t){return null!==t&&!l(t)&&null!==t.constructor&&!l(t.constructor)&&h(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{const e="[object FormData]";return t&&("function"==typeof FormData&&t instanceof FormData||n.call(t)===e||h(t.toString)&&t.toString()===e)},isArrayBufferView:function(t){let e;return e="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&d(t.buffer),e},isString:u,isNumber:f,isBoolean:t=>!0===t||!1===t,isObject:p,isPlainObject:m,isUndefined:l,isDate:g,isFile:v,isBlob:b,isRegExp:V,isFunction:h,isStream:t=>p(t)&&h(t.pipe),isURLSearchParams:w,isTypedArray:O,isFileList:y,forEach:E,merge:function t(){const{caseless:e}=x(this)&&this||{},n={},i=(i,s)=>{const o=e&&_(n,s)||s;m(n[o])&&m(i)?n[o]=t(n[o],i):m(i)?n[o]=t({},i):c(i)?n[o]=i.slice():n[o]=i};for(let t=0,e=arguments.length;t<e;t++)arguments[t]&&E(arguments[t],i);return n},extend:(t,n,i,{allOwnKeys:s}={})=>(E(n,((n,s)=>{i&&h(n)?t[s]=e(n,i):t[s]=n}),{allOwnKeys:s}),t),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},toFlatObject:(t,e,n,s)=>{let o,r,a;const c={};if(e=e||{},null==t)return e;do{for(o=Object.getOwnPropertyNames(t),r=o.length;r-- >0;)a=o[r],s&&!s(a,t,e)||c[a]||(e[a]=t[a],c[a]=!0);t=!1!==n&&i(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},kindOf:s,kindOfTest:r,endsWith:(t,e,n)=>{t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return-1!==i&&i===n},toArray:t=>{if(!t)return null;if(c(t))return t;let e=t.length;if(!f(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},forEachEntry:(t,e)=>{const n=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=n.next())&&!i.done;){const n=i.value;e.call(t,n[0],n[1])}},matchAll:(t,e)=>{let n;const i=[];for(;null!==(n=t.exec(e));)i.push(n);return i},isHTMLForm:D,hasOwnProperty:T,hasOwnProp:T,reduceDescriptors:A,freezeMethods:t=>{A(t,((e,n)=>{if(h(t)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const i=t[n];h(i)&&(e.enumerable=!1,"writable"in e?e.writable=!1:e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(t,e)=>{const n={},i=t=>{t.forEach((t=>{n[t]=!0}))};return c(t)?i(t):i(String(t).split(e)),n},toCamelCase:t=>t.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(t,e,n){return e.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(t,e)=>(t=+t,Number.isFinite(t)?t:e),findKey:_,global:N,isContextDefined:x,toJSONObject:t=>{const e=new Array(10),n=(t,i)=>{if(p(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[i]=t;const s=c(t)?[]:{};return E(t,((t,e)=>{const o=n(t,i+1);!l(o)&&(s[e]=o)})),e[i]=void 0,s}}return t};return n(t,0)}};function M(t,e,n,i,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),s&&(this.response=s)}C.inherits(M,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:C.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const R=M.prototype,k={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((t=>{k[t]={value:t}})),Object.defineProperties(M,k),Object.defineProperty(R,"isAxiosError",{value:!0}),M.from=(t,e,n,i,s,o)=>{const r=Object.create(R);return C.toFlatObject(t,r,(function(t){return t!==Error.prototype}),(t=>"isAxiosError"!==t)),M.call(r,t.message,e,n,i,s),r.cause=t,r.name=t.name,o&&Object.assign(r,o),r};"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var L="object"==typeof self?self.FormData:window.FormData;function P(t){return C.isPlainObject(t)||C.isArray(t)}function j(t){return C.endsWith(t,"[]")?t.slice(0,-2):t}function H(t,e,n){return t?t.concat(e).map((function(t,e){return t=j(t),!n&&e?"["+t+"]":t})).join(n?".":""):e}const $=C.toFlatObject(C,{},null,(function(t){return/^is[A-Z]/.test(t)}));function I(t,e,n){if(!C.isObject(t))throw new TypeError("target must be an object");e=e||new(L||FormData);const i=(n=C.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(t,e){return!C.isUndefined(e[t])}))).metaTokens,s=n.visitor||d,o=n.dots,r=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&((c=e)&&C.isFunction(c.append)&&"FormData"===c[Symbol.toStringTag]&&c[Symbol.iterator]);var c;if(!C.isFunction(s))throw new TypeError("visitor must be a function");function l(t){if(null===t)return"";if(C.isDate(t))return t.toISOString();if(!a&&C.isBlob(t))throw new M("Blob is not supported. Use a Buffer instead.");return C.isArrayBuffer(t)||C.isTypedArray(t)?a&&"function"==typeof Blob?new Blob([t]):Buffer.from(t):t}function d(t,n,s){let a=t;if(t&&!s&&"object"==typeof t)if(C.endsWith(n,"{}"))n=i?n:n.slice(0,-2),t=JSON.stringify(t);else if(C.isArray(t)&&function(t){return C.isArray(t)&&!t.some(P)}(t)||C.isFileList(t)||C.endsWith(n,"[]")&&(a=C.toArray(t)))return n=j(n),a.forEach((function(t,i){!C.isUndefined(t)&&null!==t&&e.append(!0===r?H([n],i,o):null===r?n:n+"[]",l(t))})),!1;return!!P(t)||(e.append(H(s,n,o),l(t)),!1)}const u=[],h=Object.assign($,{defaultVisitor:d,convertValue:l,isVisitable:P});if(!C.isObject(t))throw new TypeError("data must be an object");return function t(n,i){if(!C.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+i.join("."));u.push(n),C.forEach(n,(function(n,o){!0===(!(C.isUndefined(n)||null===n)&&s.call(e,n,C.isString(o)?o.trim():o,i,h))&&t(n,i?i.concat(o):[o])})),u.pop()}}(t),e}function B(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,(function(t){return e[t]}))}function U(t,e){this._pairs=[],t&&I(t,this,e)}const F=U.prototype;function Y(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function q(t,e,n){if(!e)return t;const i=n&&n.encode||Y,s=n&&n.serialize;let o;if(o=s?s(e,n):C.isURLSearchParams(e)?e.toString():new U(e,n).toString(i),o){const e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+o}return t}F.append=function(t,e){this._pairs.push([t,e])},F.toString=function(t){const e=t?function(e){return t.call(this,e,B)}:B;return this._pairs.map((function(t){return e(t[0])+"="+e(t[1])}),"").join("&")};var z=class{constructor(){this.handlers=[]}use(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){C.forEach(this.handlers,(function(e){null!==e&&t(e)}))}},J={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},W="undefined"!=typeof URLSearchParams?URLSearchParams:U,Z=FormData;const G=(()=>{let t;return("undefined"==typeof navigator||"ReactNative"!==(t=navigator.product)&&"NativeScript"!==t&&"NS"!==t)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),K="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var X={isBrowser:!0,classes:{URLSearchParams:W,FormData:Z,Blob:Blob},isStandardBrowserEnv:G,isStandardBrowserWebWorkerEnv:K,protocols:["http","https","file","blob","url","data"]};function Q(t){function e(t,n,i,s){let o=t[s++];const r=Number.isFinite(+o),a=s>=t.length;if(o=!o&&C.isArray(i)?i.length:o,a)return C.hasOwnProp(i,o)?i[o]=[i[o],n]:i[o]=n,!r;i[o]&&C.isObject(i[o])||(i[o]=[]);return e(t,n,i[o],s)&&C.isArray(i[o])&&(i[o]=function(t){const e={},n=Object.keys(t);let i;const s=n.length;let o;for(i=0;i<s;i++)o=n[i],e[o]=t[o];return e}(i[o])),!r}if(C.isFormData(t)&&C.isFunction(t.entries)){const n={};return C.forEachEntry(t,((t,i)=>{e(function(t){return C.matchAll(/\w+|\[(\w*)]/g,t).map((t=>"[]"===t[0]?"":t[1]||t[0]))}(t),i,n,0)})),n}return null}const tt={"Content-Type":void 0};const et={transitional:J,adapter:["xhr","http"],transformRequest:[function(t,e){const n=e.getContentType()||"",i=n.indexOf("application/json")>-1,s=C.isObject(t);s&&C.isHTMLForm(t)&&(t=new FormData(t));if(C.isFormData(t))return i&&i?JSON.stringify(Q(t)):t;if(C.isArrayBuffer(t)||C.isBuffer(t)||C.isStream(t)||C.isFile(t)||C.isBlob(t))return t;if(C.isArrayBufferView(t))return t.buffer;if(C.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let o;if(s){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(t,e){return I(t,new X.classes.URLSearchParams,Object.assign({visitor:function(t,e,n,i){return X.isNode&&C.isBuffer(t)?(this.append(e,t.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}(t,this.formSerializer).toString();if((o=C.isFileList(t))||n.indexOf("multipart/form-data")>-1){const e=this.env&&this.env.FormData;return I(o?{"files[]":t}:t,e&&new e,this.formSerializer)}}return s||i?(e.setContentType("application/json",!1),function(t,e,n){if(C.isString(t))try{return(e||JSON.parse)(t),C.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(n||JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){const e=this.transitional||et.transitional,n=e&&e.forcedJSONParsing,i="json"===this.responseType;if(t&&C.isString(t)&&(n&&!this.responseType||i)){const n=!(e&&e.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(t){if(n){if("SyntaxError"===t.name)throw M.from(t,M.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:X.classes.FormData,Blob:X.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};C.forEach(["delete","get","head"],(function(t){et.headers[t]={}})),C.forEach(["post","put","patch"],(function(t){et.headers[t]=C.merge(tt)}));var nt=et;const it=C.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);const st=Symbol("internals");function ot(t){return t&&String(t).trim().toLowerCase()}function rt(t){return!1===t||null==t?t:C.isArray(t)?t.map(rt):String(t)}function at(t,e,n,i){return C.isFunction(i)?i.call(this,e,n):C.isString(e)?C.isString(i)?-1!==e.indexOf(i):C.isRegExp(i)?i.test(e):void 0:void 0}class ct{constructor(t){t&&this.set(t)}set(t,e,n){const i=this;function s(t,e,n){const s=ot(e);if(!s)throw new Error("header name must be a non-empty string");const o=C.findKey(i,s);(!o||void 0===i[o]||!0===n||void 0===n&&!1!==i[o])&&(i[o||e]=rt(t))}const o=(t,e)=>C.forEach(t,((t,n)=>s(t,n,e)));return C.isPlainObject(t)||t instanceof this.constructor?o(t,e):C.isString(t)&&(t=t.trim())&&!/^[-_a-zA-Z]+$/.test(t.trim())?o((t=>{const e={};let n,i,s;return t&&t.split("\n").forEach((function(t){s=t.indexOf(":"),n=t.substring(0,s).trim().toLowerCase(),i=t.substring(s+1).trim(),!n||e[n]&&it[n]||("set-cookie"===n?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)})),e})(t),e):null!=t&&s(e,t,n),this}get(t,e){if(t=ot(t)){const n=C.findKey(this,t);if(n){const t=this[n];if(!e)return t;if(!0===e)return function(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}(t);if(C.isFunction(e))return e.call(this,t,n);if(C.isRegExp(e))return e.exec(t);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=ot(t)){const n=C.findKey(this,t);return!(!n||e&&!at(0,this[n],n,e))}return!1}delete(t,e){const n=this;let i=!1;function s(t){if(t=ot(t)){const s=C.findKey(n,t);!s||e&&!at(0,n[s],s,e)||(delete n[s],i=!0)}}return C.isArray(t)?t.forEach(s):s(t),i}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(t){const e=this,n={};return C.forEach(this,((i,s)=>{const o=C.findKey(n,s);if(o)return e[o]=rt(i),void delete e[s];const r=t?function(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((t,e,n)=>e.toUpperCase()+n))}(s):String(s).trim();r!==s&&delete e[s],e[r]=rt(i),n[r]=!0})),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return C.forEach(this,((n,i)=>{null!=n&&!1!==n&&(e[i]=t&&C.isArray(n)?n.join(", "):n)})),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([t,e])=>t+": "+e)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const n=new this(t);return e.forEach((t=>n.set(t))),n}static accessor(t){const e=(this[st]=this[st]={accessors:{}}).accessors,n=this.prototype;function i(t){const i=ot(t);e[i]||(!function(t,e){const n=C.toCamelCase(" "+e);["get","set","has"].forEach((i=>{Object.defineProperty(t,i+n,{value:function(t,n,s){return this[i].call(this,e,t,n,s)},configurable:!0})}))}(n,t),e[i]=!0)}return C.isArray(t)?t.forEach(i):i(t),this}}ct.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),C.freezeMethods(ct.prototype),C.freezeMethods(ct);var lt=ct;function dt(t,e){const n=this||nt,i=e||n,s=lt.from(i.headers);let o=i.data;return C.forEach(t,(function(t){o=t.call(n,o,s.normalize(),e?e.status:void 0)})),s.normalize(),o}function ut(t){return!(!t||!t.__CANCEL__)}function ht(t,e,n){M.call(this,null==t?"canceled":t,M.ERR_CANCELED,e,n),this.name="CanceledError"}C.inherits(ht,M,{__CANCEL__:!0});var ft=X.isStandardBrowserEnv?{write:function(t,e,n,i,s,o){const r=[];r.push(t+"="+encodeURIComponent(e)),C.isNumber(n)&&r.push("expires="+new Date(n).toGMTString()),C.isString(i)&&r.push("path="+i),C.isString(s)&&r.push("domain="+s),!0===o&&r.push("secure"),document.cookie=r.join("; ")},read:function(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function pt(t,e){return t&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)?function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}(t,e):e}var mt=X.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");let n;function i(n){let i=n;return t&&(e.setAttribute("href",i),i=e.href),e.setAttribute("href",i),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname}}return n=i(window.location.href),function(t){const e=C.isString(t)?i(t):t;return e.protocol===n.protocol&&e.host===n.host}}():function(){return!0};function gt(t,e){let n=0;const i=function(t,e){t=t||10;const n=new Array(t),i=new Array(t);let s,o=0,r=0;return e=void 0!==e?e:1e3,function(a){const c=Date.now(),l=i[r];s||(s=c),n[o]=a,i[o]=c;let d=r,u=0;for(;d!==o;)u+=n[d++],d%=t;if(o=(o+1)%t,o===r&&(r=(r+1)%t),c-s<e)return;const h=l&&c-l;return h?Math.round(1e3*u/h):void 0}}(50,250);return s=>{const o=s.loaded,r=s.lengthComputable?s.total:void 0,a=o-n,c=i(a);n=o;const l={loaded:o,total:r,progress:r?o/r:void 0,bytes:a,rate:c||void 0,estimated:c&&r&&o<=r?(r-o)/c:void 0,event:s};l[e?"download":"upload"]=!0,t(l)}}const vt={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(t){return new Promise((function(e,n){let i=t.data;const s=lt.from(t.headers).normalize(),o=t.responseType;let r;function a(){t.cancelToken&&t.cancelToken.unsubscribe(r),t.signal&&t.signal.removeEventListener("abort",r)}C.isFormData(i)&&(X.isStandardBrowserEnv||X.isStandardBrowserWebWorkerEnv)&&s.setContentType(!1);let c=new XMLHttpRequest;if(t.auth){const e=t.auth.username||"",n=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";s.set("Authorization","Basic "+btoa(e+":"+n))}const l=pt(t.baseURL,t.url);function d(){if(!c)return;const i=lt.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());!function(t,e,n){const i=n.config.validateStatus;n.status&&i&&!i(n.status)?e(new M("Request failed with status code "+n.status,[M.ERR_BAD_REQUEST,M.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):t(n)}((function(t){e(t),a()}),(function(t){n(t),a()}),{data:o&&"text"!==o&&"json"!==o?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:i,config:t,request:c}),c=null}if(c.open(t.method.toUpperCase(),q(l,t.params,t.paramsSerializer),!0),c.timeout=t.timeout,"onloadend"in c?c.onloadend=d:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(d)},c.onabort=function(){c&&(n(new M("Request aborted",M.ECONNABORTED,t,c)),c=null)},c.onerror=function(){n(new M("Network Error",M.ERR_NETWORK,t,c)),c=null},c.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const i=t.transitional||J;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(new M(e,i.clarifyTimeoutError?M.ETIMEDOUT:M.ECONNABORTED,t,c)),c=null},X.isStandardBrowserEnv){const e=(t.withCredentials||mt(l))&&t.xsrfCookieName&&ft.read(t.xsrfCookieName);e&&s.set(t.xsrfHeaderName,e)}void 0===i&&s.setContentType(null),"setRequestHeader"in c&&C.forEach(s.toJSON(),(function(t,e){c.setRequestHeader(e,t)})),C.isUndefined(t.withCredentials)||(c.withCredentials=!!t.withCredentials),o&&"json"!==o&&(c.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&c.addEventListener("progress",gt(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",gt(t.onUploadProgress)),(t.cancelToken||t.signal)&&(r=e=>{c&&(n(!e||e.type?new ht(null,t,c):e),c.abort(),c=null)},t.cancelToken&&t.cancelToken.subscribe(r),t.signal&&(t.signal.aborted?r():t.signal.addEventListener("abort",r)));const u=function(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}(l);u&&-1===X.protocols.indexOf(u)?n(new M("Unsupported protocol "+u+":",M.ERR_BAD_REQUEST,t)):c.send(i||null)}))}};C.forEach(vt,((t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(t){}Object.defineProperty(t,"adapterName",{value:e})}}));var bt=t=>{t=C.isArray(t)?t:[t];const{length:e}=t;let n,i;for(let s=0;s<e&&(n=t[s],!(i=C.isString(n)?vt[n.toLowerCase()]:n));s++);if(!i){if(!1===i)throw new M(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(C.hasOwnProp(vt,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!C.isFunction(i))throw new TypeError("adapter is not a function");return i};function yt(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new ht(null,t)}function wt(t){yt(t),t.headers=lt.from(t.headers),t.data=dt.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);return bt(t.adapter||nt.adapter)(t).then((function(e){return yt(t),e.data=dt.call(t,t.transformResponse,e),e.headers=lt.from(e.headers),e}),(function(e){return ut(e)||(yt(t),e&&e.response&&(e.response.data=dt.call(t,t.transformResponse,e.response),e.response.headers=lt.from(e.response.headers))),Promise.reject(e)}))}const Et=t=>t instanceof lt?t.toJSON():t;function _t(t,e){e=e||{};const n={};function i(t,e,n){return C.isPlainObject(t)&&C.isPlainObject(e)?C.merge.call({caseless:n},t,e):C.isPlainObject(e)?C.merge({},e):C.isArray(e)?e.slice():e}function s(t,e,n){return C.isUndefined(e)?C.isUndefined(t)?void 0:i(void 0,t,n):i(t,e,n)}function o(t,e){if(!C.isUndefined(e))return i(void 0,e)}function r(t,e){return C.isUndefined(e)?C.isUndefined(t)?void 0:i(void 0,t):i(void 0,e)}function a(n,s,o){return o in e?i(n,s):o in t?i(void 0,n):void 0}const c={url:o,method:o,data:o,baseURL:r,transformRequest:r,transformResponse:r,paramsSerializer:r,timeout:r,timeoutMessage:r,withCredentials:r,adapter:r,responseType:r,xsrfCookieName:r,xsrfHeaderName:r,onUploadProgress:r,onDownloadProgress:r,decompress:r,maxContentLength:r,maxBodyLength:r,beforeRedirect:r,transport:r,httpAgent:r,httpsAgent:r,cancelToken:r,socketPath:r,responseEncoding:r,validateStatus:a,headers:(t,e)=>s(Et(t),Et(e),!0)};return C.forEach(Object.keys(t).concat(Object.keys(e)),(function(i){const o=c[i]||s,r=o(t[i],e[i],i);C.isUndefined(r)&&o!==a||(n[i]=r)})),n}const Nt="1.2.3",xt={};["object","boolean","number","function","string","symbol"].forEach(((t,e)=>{xt[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));const Ot={};xt.transitional=function(t,e,n){function i(t,e){return"[Axios v1.2.3] Transitional option '"+t+"'"+e+(n?". "+n:"")}return(n,s,o)=>{if(!1===t)throw new M(i(s," has been removed"+(e?" in "+e:"")),M.ERR_DEPRECATED);return e&&!Ot[s]&&(Ot[s]=!0,console.warn(i(s," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,s,o)}};var St={assertOptions:function(t,e,n){if("object"!=typeof t)throw new M("options must be an object",M.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let s=i.length;for(;s-- >0;){const o=i[s],r=e[o];if(r){const e=t[o],n=void 0===e||r(e,o,t);if(!0!==n)throw new M("option "+o+" must be "+n,M.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new M("Unknown option "+o,M.ERR_BAD_OPTION)}},validators:xt};const Dt=St.validators;class Tt{constructor(t){this.defaults=t,this.interceptors={request:new z,response:new z}}request(t,e){"string"==typeof t?(e=e||{}).url=t:e=t||{},e=_t(this.defaults,e);const{transitional:n,paramsSerializer:i,headers:s}=e;let o;void 0!==n&&St.assertOptions(n,{silentJSONParsing:Dt.transitional(Dt.boolean),forcedJSONParsing:Dt.transitional(Dt.boolean),clarifyTimeoutError:Dt.transitional(Dt.boolean)},!1),void 0!==i&&St.assertOptions(i,{encode:Dt.function,serialize:Dt.function},!0),e.method=(e.method||this.defaults.method||"get").toLowerCase(),o=s&&C.merge(s.common,s[e.method]),o&&C.forEach(["delete","get","head","post","put","patch","common"],(t=>{delete s[t]})),e.headers=lt.concat(o,s);const r=[];let a=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(a=a&&t.synchronous,r.unshift(t.fulfilled,t.rejected))}));const c=[];let l;this.interceptors.response.forEach((function(t){c.push(t.fulfilled,t.rejected)}));let d,u=0;if(!a){const t=[wt.bind(this),void 0];for(t.unshift.apply(t,r),t.push.apply(t,c),d=t.length,l=Promise.resolve(e);u<d;)l=l.then(t[u++],t[u++]);return l}d=r.length;let h=e;for(u=0;u<d;){const t=r[u++],e=r[u++];try{h=t(h)}catch(t){e.call(this,t);break}}try{l=wt.call(this,h)}catch(t){return Promise.reject(t)}for(u=0,d=c.length;u<d;)l=l.then(c[u++],c[u++]);return l}getUri(t){return q(pt((t=_t(this.defaults,t)).baseURL,t.url),t.params,t.paramsSerializer)}}C.forEach(["delete","get","head","options"],(function(t){Tt.prototype[t]=function(e,n){return this.request(_t(n||{},{method:t,url:e,data:(n||{}).data}))}})),C.forEach(["post","put","patch"],(function(t){function e(e){return function(n,i,s){return this.request(_t(s||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:n,data:i}))}}Tt.prototype[t]=e(),Tt.prototype[t+"Form"]=e(!0)}));var Vt=Tt;class At{constructor(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");let e;this.promise=new Promise((function(t){e=t}));const n=this;this.promise.then((t=>{if(!n._listeners)return;let e=n._listeners.length;for(;e-- >0;)n._listeners[e](t);n._listeners=null})),this.promise.then=t=>{let e;const i=new Promise((t=>{n.subscribe(t),e=t})).then(t);return i.cancel=function(){n.unsubscribe(e)},i},t((function(t,i,s){n.reason||(n.reason=new ht(t,i,s),e(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}static source(){let t;const e=new At((function(e){t=e}));return{token:e,cancel:t}}}var Ct=At;const Mt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Mt).forEach((([t,e])=>{Mt[e]=t}));var Rt=Mt;const kt=function t(n){const i=new Vt(n),s=e(Vt.prototype.request,i);return C.extend(s,Vt.prototype,i,{allOwnKeys:!0}),C.extend(s,i,null,{allOwnKeys:!0}),s.create=function(e){return t(_t(n,e))},s}(nt);kt.Axios=Vt,kt.CanceledError=ht,kt.CancelToken=Ct,kt.isCancel=ut,kt.VERSION=Nt,kt.toFormData=I,kt.AxiosError=M,kt.Cancel=kt.CanceledError,kt.all=function(t){return Promise.all(t)},kt.spread=function(t){return function(e){return t.apply(null,e)}},kt.isAxiosError=function(t){return C.isObject(t)&&!0===t.isAxiosError},kt.mergeConfig=_t,kt.AxiosHeaders=lt,kt.formToJSON=t=>Q(C.isHTMLForm(t)?new FormData(t):t),kt.HttpStatusCode=Rt,kt.default=kt;var Lt=kt;function Pt(t,e,n){var i;return"#text"===t.nodeName?i=n.document.createTextNode(t.data):"#comment"===t.nodeName?i=n.document.createComment(t.data):(e?i=n.document.createElementNS("http://www.w3.org/2000/svg",t.nodeName):"svg"===t.nodeName.toLowerCase()?(i=n.document.createElementNS("http://www.w3.org/2000/svg","svg"),e=!0):i=n.document.createElement(t.nodeName),t.attributes&&Object.entries(t.attributes).forEach((function(t){var e=t[0],n=t[1];return i.setAttribute(e,n)})),t.childNodes&&t.childNodes.forEach((function(t){return i.appendChild(Pt(t,e,n))})),n.valueDiffing&&(t.value&&(i instanceof HTMLButtonElement||i instanceof HTMLDataElement||i instanceof HTMLInputElement||i instanceof HTMLLIElement||i instanceof HTMLMeterElement||i instanceof HTMLOptionElement||i instanceof HTMLProgressElement||i instanceof HTMLParamElement)&&(i.value=t.value),t.checked&&i instanceof HTMLInputElement&&(i.checked=t.checked),t.selected&&i instanceof HTMLOptionElement&&(i.selected=t.selected))),i}var jt=function(t,e){for(e=e.slice();e.length>0;){var n=e.splice(0,1)[0];t=t.childNodes[n]}return t};function Ht(t,e,n){var i,s,o,r=e[n._const.action],a=e[n._const.route];[n._const.addElement,n._const.addTextElement].includes(r)||(i=jt(t,a));var c={diff:e,node:i};if(n.preDiffApply(c))return!0;switch(r){case n._const.addAttribute:if(!(i&&i instanceof Element))return!1;i.setAttribute(e[n._const.name],e[n._const.value]);break;case n._const.modifyAttribute:if(!(i&&i instanceof Element))return!1;i.setAttribute(e[n._const.name],e[n._const.newValue]),i instanceof HTMLInputElement&&"value"===e[n._const.name]&&(i.value=e[n._const.newValue]);break;case n._const.removeAttribute:if(!(i&&i instanceof Element))return!1;i.removeAttribute(e[n._const.name]);break;case n._const.modifyTextElement:if(!(i&&i instanceof Text))return!1;n.textDiff(i,i.data,e[n._const.oldValue],e[n._const.newValue]);break;case n._const.modifyValue:if(!i||void 0===i.value)return!1;i.value=e[n._const.newValue];break;case n._const.modifyComment:if(!(i&&i instanceof Comment))return!1;n.textDiff(i,i.data,e[n._const.oldValue],e[n._const.newValue]);break;case n._const.modifyChecked:if(!i||void 0===i.checked)return!1;i.checked=e[n._const.newValue];break;case n._const.modifySelected:if(!i||void 0===i.selected)return!1;i.selected=e[n._const.newValue];break;case n._const.replaceElement:i.parentNode.replaceChild(Pt(e[n._const.newValue],"svg"===e[n._const.newValue].nodeName.toLowerCase(),n),i);break;case n._const.relocateGroup:Array.apply(void 0,new Array(e[n._const.groupLength])).map((function(){return i.removeChild(i.childNodes[e[n._const.from]])})).forEach((function(t,s){0===s&&(o=i.childNodes[e[n._const.to]]),i.insertBefore(t,o||null)}));break;case n._const.removeElement:i.parentNode.removeChild(i);break;case n._const.addElement:var l=(d=a.slice()).splice(d.length-1,1)[0];if(!((i=jt(t,d))instanceof Element))return!1;i.insertBefore(Pt(e[n._const.element],"http://www.w3.org/2000/svg"===i.namespaceURI,n),i.childNodes[l]||null);break;case n._const.removeTextElement:if(!i||3!==i.nodeType)return!1;i.parentNode.removeChild(i);break;case n._const.addTextElement:var d;if(l=(d=a.slice()).splice(d.length-1,1)[0],s=n.document.createTextNode(e[n._const.value]),!(i=jt(t,d)).childNodes)return!1;i.insertBefore(s,i.childNodes[l]||null);break;default:console.log("unknown action")}return n.postDiffApply({diff:c.diff,node:c.node,newNode:s}),!0}function $t(t,e,n){var i=t[e];t[e]=t[n],t[n]=i}var It=function(t){var e=[];return e.push(t.nodeName),"#text"!==t.nodeName&&"#comment"!==t.nodeName&&t.attributes&&(t.attributes.class&&e.push("".concat(t.nodeName,".").concat(t.attributes.class.replace(/ /g,"."))),t.attributes.id&&e.push("".concat(t.nodeName,"#").concat(t.attributes.id))),e},Bt=function(t){var e={},n={};return t.forEach((function(t){It(t).forEach((function(t){var i=t in e;i||t in n?i&&(delete e[t],n[t]=!0):e[t]=!0}))})),e},Ut=function(t,e){var n=Bt(t),i=Bt(e),s={};return Object.keys(n).forEach((function(t){i[t]&&(s[t]=!0)})),s},Ft=function(t){return delete t.outerDone,delete t.innerDone,delete t.valueDone,!t.childNodes||t.childNodes.every(Ft)},Yt=function(t){if(Object.prototype.hasOwnProperty.call(t,"data"))return{nodeName:"#text"===t.nodeName?"#text":"#comment",data:t.data};var e={nodeName:t.nodeName};return Object.prototype.hasOwnProperty.call(t,"attributes")&&(e.attributes=t.attributes),Object.prototype.hasOwnProperty.call(t,"checked")&&(e.checked=t.checked),Object.prototype.hasOwnProperty.call(t,"value")&&(e.value=t.value),Object.prototype.hasOwnProperty.call(t,"selected")&&(e.selected=t.selected),Object.prototype.hasOwnProperty.call(t,"childNodes")&&(e.childNodes=t.childNodes.map((function(t){return Yt(t)}))),e},qt=function(t,e){if(!["nodeName","value","checked","selected","data"].every((function(n){return t[n]===e[n]})))return!1;if(Object.prototype.hasOwnProperty.call(t,"data"))return!0;if(Boolean(t.attributes)!==Boolean(e.attributes))return!1;if(Boolean(t.childNodes)!==Boolean(e.childNodes))return!1;if(t.attributes){var n=Object.keys(t.attributes),i=Object.keys(e.attributes);if(n.length!==i.length)return!1;if(!n.every((function(n){return t.attributes[n]===e.attributes[n]})))return!1}if(t.childNodes){if(t.childNodes.length!==e.childNodes.length)return!1;if(!t.childNodes.every((function(t,n){return qt(t,e.childNodes[n])})))return!1}return!0},zt=function(t,e,n,i,s){if(void 0===s&&(s=!1),!t||!e)return!1;if(t.nodeName!==e.nodeName)return!1;if(["#text","#comment"].includes(t.nodeName))return!!s||t.data===e.data;if(t.nodeName in n)return!0;if(t.attributes&&e.attributes){if(t.attributes.id){if(t.attributes.id!==e.attributes.id)return!1;if("".concat(t.nodeName,"#").concat(t.attributes.id)in n)return!0}if(t.attributes.class&&t.attributes.class===e.attributes.class&&"".concat(t.nodeName,".").concat(t.attributes.class.replace(/ /g,"."))in n)return!0}if(i)return!0;var o=t.childNodes?t.childNodes.slice().reverse():[],r=e.childNodes?e.childNodes.slice().reverse():[];if(o.length!==r.length)return!1;if(s)return o.every((function(t,e){return t.nodeName===r[e].nodeName}));var a=Ut(o,r);return o.every((function(t,e){return zt(t,r[e],a,!0,!0)}))},Jt=function(t,e){return Array.apply(void 0,new Array(t)).map((function(){return e}))},Wt=function(t,e){for(var n=t.childNodes?t.childNodes:[],i=e.childNodes?e.childNodes:[],s=Jt(n.length,!1),o=Jt(i.length,!1),r=[],a=function(){return arguments[1]},c=!1,l=function(){var t=function(t,e,n,i){var s=0,o=[],r=t.length,a=e.length,c=Array.apply(void 0,new Array(r+1)).map((function(){return[]})),l=Ut(t,e),d=r===a;d&&t.some((function(t,n){var i=It(t),s=It(e[n]);return i.length!==s.length?(d=!1,!0):(i.some((function(t,e){if(t!==s[e])return d=!1,!0})),!d||void 0)}));for(var u=0;u<r;u++)for(var h=t[u],f=0;f<a;f++){var p=e[f];n[u]||i[f]||!zt(h,p,l,d)?c[u+1][f+1]=0:(c[u+1][f+1]=c[u][f]?c[u][f]+1:1,c[u+1][f+1]>=s&&(s=c[u+1][f+1],o=[u+1,f+1]))}return 0!==s&&{oldValue:o[0]-s,newValue:o[1]-s,length:s}}(n,i,s,o);t?(r.push(t),Array.apply(void 0,new Array(t.length)).map(a).forEach((function(e){return function(t,e,n,i){t[n.oldValue+i]=!0,e[n.newValue+i]=!0}(s,o,t,e)}))):c=!0};!c;)l();return t.subsets=r,t.subsetsAge=100,r},Zt=function(){function t(){this.list=[]}return t.prototype.add=function(t){var e;(e=this.list).push.apply(e,t)},t.prototype.forEach=function(t){this.list.forEach((function(e){return t(e)}))},t}(),Gt=function(){function t(t){void 0===t&&(t={});var e=this;Object.entries(t).forEach((function(t){var n=t[0],i=t[1];return e[n]=i}))}return t.prototype.toString=function(){return JSON.stringify(this)},t.prototype.setValue=function(t,e){return this[t]=e,this},t}();function Kt(t,e){var n,i,s=t;for(e=e.slice();e.length>0;)i=e.splice(0,1)[0],n=s,s=s.childNodes?s.childNodes[i]:void 0;return{node:s,parentNode:n,nodeIndex:i}}function Xt(t,e,n){return e.forEach((function(e){!function(t,e,n){var i,s,o,r;if(![n._const.addElement,n._const.addTextElement].includes(e[n._const.action])){var a=Kt(t,e[n._const.route]);s=a.node,o=a.parentNode,r=a.nodeIndex}var c,l,d=[],u={diff:e,node:s};if(n.preVirtualDiffApply(u))return!0;switch(e[n._const.action]){case n._const.addAttribute:s.attributes||(s.attributes={}),s.attributes[e[n._const.name]]=e[n._const.value],"checked"===e[n._const.name]?s.checked=!0:"selected"===e[n._const.name]?s.selected=!0:"INPUT"===s.nodeName&&"value"===e[n._const.name]&&(s.value=e[n._const.value]);break;case n._const.modifyAttribute:s.attributes[e[n._const.name]]=e[n._const.newValue];break;case n._const.removeAttribute:delete s.attributes[e[n._const.name]],0===Object.keys(s.attributes).length&&delete s.attributes,"checked"===e[n._const.name]?s.checked=!1:"selected"===e[n._const.name]?delete s.selected:"INPUT"===s.nodeName&&"value"===e[n._const.name]&&delete s.value;break;case n._const.modifyTextElement:s.data=e[n._const.newValue];break;case n._const.modifyValue:s.value=e[n._const.newValue];break;case n._const.modifyComment:s.data=e[n._const.newValue];break;case n._const.modifyChecked:s.checked=e[n._const.newValue];break;case n._const.modifySelected:s.selected=e[n._const.newValue];break;case n._const.replaceElement:c=e[n._const.newValue],o.childNodes[r]=c;break;case n._const.relocateGroup:s.childNodes.splice(e[n._const.from],e[n._const.groupLength]).reverse().forEach((function(t){return s.childNodes.splice(e[n._const.to],0,t)})),s.subsets&&s.subsets.forEach((function(t){if(e[n._const.from]<e[n._const.to]&&t.oldValue<=e[n._const.to]&&t.oldValue>e[n._const.from])t.oldValue-=e[n._const.groupLength],(i=t.oldValue+t.length-e[n._const.to])>0&&(d.push({oldValue:e[n._const.to]+e[n._const.groupLength],newValue:t.newValue+t.length-i,length:i}),t.length-=i);else if(e[n._const.from]>e[n._const.to]&&t.oldValue>e[n._const.to]&&t.oldValue<e[n._const.from]){var i;t.oldValue+=e[n._const.groupLength],(i=t.oldValue+t.length-e[n._const.to])>0&&(d.push({oldValue:e[n._const.to]+e[n._const.groupLength],newValue:t.newValue+t.length-i,length:i}),t.length-=i)}else t.oldValue===e[n._const.from]&&(t.oldValue=e[n._const.to])}));break;case n._const.removeElement:o.childNodes.splice(r,1),o.subsets&&o.subsets.forEach((function(t){t.oldValue>r?t.oldValue-=1:t.oldValue===r?t.delete=!0:t.oldValue<r&&t.oldValue+t.length>r&&(t.oldValue+t.length-1===r?t.length--:(d.push({newValue:t.newValue+r-t.oldValue,oldValue:r,length:t.length-r+t.oldValue-1}),t.length=r-t.oldValue))})),s=o;break;case n._const.addElement:var h=(l=e[n._const.route].slice()).splice(l.length-1,1)[0];s=null===(i=Kt(t,l))||void 0===i?void 0:i.node,c=e[n._const.element],s.childNodes||(s.childNodes=[]),h>=s.childNodes.length?s.childNodes.push(c):s.childNodes.splice(h,0,c),s.subsets&&s.subsets.forEach((function(t){if(t.oldValue>=h)t.oldValue+=1;else if(t.oldValue<h&&t.oldValue+t.length>h){var e=t.oldValue+t.length-h;d.push({newValue:t.newValue+t.length-e,oldValue:h+1,length:e}),t.length-=e}}));break;case n._const.removeTextElement:o.childNodes.splice(r,1),"TEXTAREA"===o.nodeName&&delete o.value,o.subsets&&o.subsets.forEach((function(t){t.oldValue>r?t.oldValue-=1:t.oldValue===r?t.delete=!0:t.oldValue<r&&t.oldValue+t.length>r&&(t.oldValue+t.length-1===r?t.length--:(d.push({newValue:t.newValue+r-t.oldValue,oldValue:r,length:t.length-r+t.oldValue-1}),t.length=r-t.oldValue))})),s=o;break;case n._const.addTextElement:var f=(l=e[n._const.route].slice()).splice(l.length-1,1)[0];(c={}).nodeName="#text",c.data=e[n._const.value],(s=Kt(t,l).node).childNodes||(s.childNodes=[]),f>=s.childNodes.length?s.childNodes.push(c):s.childNodes.splice(f,0,c),"TEXTAREA"===s.nodeName&&(s.value=e[n._const.newValue]),s.subsets&&s.subsets.forEach((function(t){if(t.oldValue>=f&&(t.oldValue+=1),t.oldValue<f&&t.oldValue+t.length>f){var e=t.oldValue+t.length-f;d.push({newValue:t.newValue+t.length-e,oldValue:f+1,length:e}),t.length-=e}}));break;default:console.log("unknown action")}s.subsets&&(s.subsets=s.subsets.filter((function(t){return!t.delete&&t.oldValue!==t.newValue})),d.length&&(s.subsets=s.subsets.concat(d))),n.postVirtualDiffApply({node:u.node,diff:u.diff,newNode:c})}(t,e,n)})),!0}function Qt(t,e){void 0===e&&(e={});var n={nodeName:t.nodeName};return t instanceof Text||t instanceof Comment?n.data=t.data:(t.attributes&&t.attributes.length>0&&(n.attributes={},Array.prototype.slice.call(t.attributes).forEach((function(t){return n.attributes[t.name]=t.value}))),t instanceof HTMLTextAreaElement?n.value=t.value:t.childNodes&&t.childNodes.length>0&&(n.childNodes=[],Array.prototype.slice.call(t.childNodes).forEach((function(t){return n.childNodes.push(Qt(t,e))}))),e.valueDiffing&&(t instanceof HTMLInputElement&&["radio","checkbox"].includes(t.type.toLowerCase())&&void 0!==t.checked?n.checked=t.checked:(t instanceof HTMLButtonElement||t instanceof HTMLDataElement||t instanceof HTMLInputElement||t instanceof HTMLLIElement||t instanceof HTMLMeterElement||t instanceof HTMLOptionElement||t instanceof HTMLProgressElement||t instanceof HTMLParamElement)&&(n.value=t.value),t instanceof HTMLOptionElement&&(n.selected=t.selected))),n}var te=/<\s*\/*[a-zA-Z:_][a-zA-Z0-9:_\-.]*\s*(?:"[^"]*"['"]*|'[^']*'['"]*|[^'"/>])*\/*\s*>|<!--(?:.|\n|\r)*?-->/g,ee=Object.create?Object.create(null):{},ne=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function ie(t){return t.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")}var se={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuItem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},oe=function(t){var e={nodeName:"",attributes:{}},n=!1,i=t.match(/<\/?([^\s]+?)[/\s>]/);if(i&&(e.nodeName=i[1].toUpperCase(),(se[i[1]]||"/"===t.charAt(t.length-2))&&(n=!0),e.nodeName.startsWith("!--"))){var s=t.indexOf("--\x3e");return{type:"comment",node:{nodeName:"#comment",data:-1!==s?t.slice(4,s):""},voidElement:n}}for(var o=new RegExp(ne),r=null,a=!1;!a;)if(null===(r=o.exec(t)))a=!0;else if(r[0].trim())if(r[1]){var c=r[1].trim(),l=[c,""];c.indexOf("=")>-1&&(l=c.split("=")),e.attributes[l[0]]=l[1],o.lastIndex--}else r[2]&&(e.attributes[r[2]]=r[3].trim().substring(1,r[3].length-1));return{type:"tag",node:e,voidElement:n}},re=function(t,e){void 0===e&&(e={components:ee});var n,i=[],s=-1,o=[],r=!1;if(0!==t.indexOf("<")){var a=t.indexOf("<");i.push({nodeName:"#text",data:-1===a?t:t.substring(0,a)})}return t.replace(te,(function(a,c){if(r){if(a!=="</".concat(n.node.nodeName,">"))return"";r=!1}var l="/"!==a.charAt(1),d=a.startsWith("\x3c!--"),u=c+a.length,h=t.charAt(u);if(d){var f=oe(a).node;if(s<0)return i.push(f),"";var p=o[s];return p&&f.nodeName&&(p.node.childNodes||(p.node.childNodes=[]),p.node.childNodes.push(f)),""}if(l){n=oe(a),s++,"tag"===n.type&&e.components[n.node.nodeName]&&(n.type="component",r=!0),n.voidElement||r||!h||"<"===h||(n.node.childNodes||(n.node.childNodes=[]),n.node.childNodes.push({nodeName:"#text",data:ie(t.slice(u,t.indexOf("<",u)))})),0===s&&n.node.nodeName&&i.push(n.node);var m=o[s-1];m&&n.node.nodeName&&(m.node.childNodes||(m.node.childNodes=[]),m.node.childNodes.push(n.node)),o[s]=n}if((!l||n.voidElement)&&(s>-1&&(n.voidElement||n.node.nodeName===a.slice(2,-1).toUpperCase())&&--s>-1&&(n=o[s]),!r&&"<"!==h&&h)){var g=-1===s?i:o[s].node.childNodes||[],v=t.indexOf("<",u),b=ie(t.slice(u,-1===v?void 0:v));g.push({nodeName:"#text",data:b})}return""})),i[0]},ae=function(){function t(t,e,n){this.options=n,this.t1="undefined"!=typeof Element&&t instanceof Element?Qt(t,this.options):"string"==typeof t?re(t,this.options):JSON.parse(JSON.stringify(t)),this.t2="undefined"!=typeof Element&&e instanceof Element?Qt(e,this.options):"string"==typeof e?re(e,this.options):JSON.parse(JSON.stringify(e)),this.diffcount=0,this.foundAll=!1,this.debug&&(this.t1Orig="undefined"!=typeof Element&&t instanceof Element?Qt(t,this.options):"string"==typeof t?re(t,this.options):JSON.parse(JSON.stringify(t)),this.t2Orig="undefined"!=typeof Element&&e instanceof Element?Qt(e,this.options):"string"==typeof e?re(e,this.options):JSON.parse(JSON.stringify(e))),this.tracker=new Zt}return t.prototype.init=function(){return this.findDiffs(this.t1,this.t2)},t.prototype.findDiffs=function(t,e){var n;do{if(this.options.debug&&(this.diffcount+=1,this.diffcount>this.options.diffcap))throw new Error("surpassed diffcap:".concat(JSON.stringify(this.t1Orig)," -> ").concat(JSON.stringify(this.t2Orig)));0===(n=this.findNextDiff(t,e,[])).length&&(qt(t,e)||(this.foundAll?console.error("Could not find remaining diffs!"):(this.foundAll=!0,Ft(t),n=this.findNextDiff(t,e,[])))),n.length>0&&(this.foundAll=!1,this.tracker.add(n),Xt(t,n,this.options))}while(n.length>0);return this.tracker.list},t.prototype.findNextDiff=function(t,e,n){var i,s;if(this.options.maxDepth&&n.length>this.options.maxDepth)return[];if(!t.outerDone){if(i=this.findOuterDiff(t,e,n),this.options.filterOuterDiff&&(s=this.options.filterOuterDiff(t,e,i))&&(i=s),i.length>0)return t.outerDone=!0,i;t.outerDone=!0}if(Object.prototype.hasOwnProperty.call(t,"data"))return[];if(!t.innerDone){if((i=this.findInnerDiff(t,e,n)).length>0)return i;t.innerDone=!0}if(this.options.valueDiffing&&!t.valueDone){if((i=this.findValueDiff(t,e,n)).length>0)return t.valueDone=!0,i;t.valueDone=!0}return[]},t.prototype.findOuterDiff=function(t,e,n){var i,s,o,r,a,c,l=[];if(t.nodeName!==e.nodeName){if(!n.length)throw new Error("Top level nodes have to be of the same kind.");return[(new Gt).setValue(this.options._const.action,this.options._const.replaceElement).setValue(this.options._const.oldValue,Yt(t)).setValue(this.options._const.newValue,Yt(e)).setValue(this.options._const.route,n)]}if(n.length&&this.options.diffcap<Math.abs((t.childNodes||[]).length-(e.childNodes||[]).length))return[(new Gt).setValue(this.options._const.action,this.options._const.replaceElement).setValue(this.options._const.oldValue,Yt(t)).setValue(this.options._const.newValue,Yt(e)).setValue(this.options._const.route,n)];if(Object.prototype.hasOwnProperty.call(t,"data")&&t.data!==e.data)return"#text"===t.nodeName?[(new Gt).setValue(this.options._const.action,this.options._const.modifyTextElement).setValue(this.options._const.route,n).setValue(this.options._const.oldValue,t.data).setValue(this.options._const.newValue,e.data)]:[(new Gt).setValue(this.options._const.action,this.options._const.modifyComment).setValue(this.options._const.route,n).setValue(this.options._const.oldValue,t.data).setValue(this.options._const.newValue,e.data)];for(s=t.attributes?Object.keys(t.attributes).sort():[],o=e.attributes?Object.keys(e.attributes).sort():[],r=s.length,c=0;c<r;c++)i=s[c],-1===(a=o.indexOf(i))?l.push((new Gt).setValue(this.options._const.action,this.options._const.removeAttribute).setValue(this.options._const.route,n).setValue(this.options._const.name,i).setValue(this.options._const.value,t.attributes[i])):(o.splice(a,1),t.attributes[i]!==e.attributes[i]&&l.push((new Gt).setValue(this.options._const.action,this.options._const.modifyAttribute).setValue(this.options._const.route,n).setValue(this.options._const.name,i).setValue(this.options._const.oldValue,t.attributes[i]).setValue(this.options._const.newValue,e.attributes[i])));for(r=o.length,c=0;c<r;c++)i=o[c],l.push((new Gt).setValue(this.options._const.action,this.options._const.addAttribute).setValue(this.options._const.route,n).setValue(this.options._const.name,i).setValue(this.options._const.value,e.attributes[i]));return l},t.prototype.findInnerDiff=function(t,e,n){var i=t.childNodes?t.childNodes.slice():[],s=e.childNodes?e.childNodes.slice():[],o=Math.max(i.length,s.length),r=Math.abs(i.length-s.length),a=[],c=0;if(!this.options.maxChildCount||o<this.options.maxChildCount){var l=Boolean(t.subsets&&t.subsetsAge--),d=l?t.subsets:t.childNodes&&e.childNodes?Wt(t,e):[];if(d.length>0&&(a=this.attemptGroupRelocation(t,e,d,n,l)).length>0)return a}for(var u=0;u<o;u+=1){var h=i[u],f=s[u];if(r&&(h&&!f?"#text"===h.nodeName?(a.push((new Gt).setValue(this.options._const.action,this.options._const.removeTextElement).setValue(this.options._const.route,n.concat(c)).setValue(this.options._const.value,h.data)),c-=1):(a.push((new Gt).setValue(this.options._const.action,this.options._const.removeElement).setValue(this.options._const.route,n.concat(c)).setValue(this.options._const.element,Yt(h))),c-=1):f&&!h&&("#text"===f.nodeName?a.push((new Gt).setValue(this.options._const.action,this.options._const.addTextElement).setValue(this.options._const.route,n.concat(c)).setValue(this.options._const.value,f.data)):a.push((new Gt).setValue(this.options._const.action,this.options._const.addElement).setValue(this.options._const.route,n.concat(c)).setValue(this.options._const.element,Yt(f))))),h&&f)if(!this.options.maxChildCount||o<this.options.maxChildCount)a=a.concat(this.findNextDiff(h,f,n.concat(c)));else if(!qt(h,f))if(i.length>s.length)"#text"===h.nodeName?a.push((new Gt).setValue(this.options._const.action,this.options._const.removeTextElement).setValue(this.options._const.route,n.concat(c)).setValue(this.options._const.value,h.data)):a.push((new Gt).setValue(this.options._const.action,this.options._const.removeElement).setValue(this.options._const.element,Yt(h)).setValue(this.options._const.route,n.concat(c))),i.splice(u,1),u-=1,c-=1,r-=1;else if(i.length<s.length){var p=Yt(f);a=a.concat([(new Gt).setValue(this.options._const.action,this.options._const.addElement).setValue(this.options._const.element,p).setValue(this.options._const.route,n.concat(c))]),i.splice(u,0,p),r-=1}else a=a.concat([(new Gt).setValue(this.options._const.action,this.options._const.replaceElement).setValue(this.options._const.oldValue,Yt(h)).setValue(this.options._const.newValue,Yt(f)).setValue(this.options._const.route,n.concat(c))]);c+=1}return t.innerDone=!0,a},t.prototype.attemptGroupRelocation=function(t,e,n,i,s){for(var o,r,a,c,l,d,u=function(t,e,n){var i=t.childNodes?Jt(t.childNodes.length,!0):[],s=e.childNodes?Jt(e.childNodes.length,!0):[],o=0;return n.forEach((function(t){for(var e=t.oldValue+t.length,n=t.newValue+t.length,r=t.oldValue;r<e;r+=1)i[r]=o;for(r=t.newValue;r<n;r+=1)s[r]=o;o+=1})),{gaps1:i,gaps2:s}}(t,e,n),h=u.gaps1,f=u.gaps2,p=Math.min(h.length,f.length),m=[],g=0,v=0;g<p;v+=1,g+=1)if(!s||!0!==h[g]&&!0!==f[g])if(!0===h[g])if("#text"===(c=t.childNodes[v]).nodeName)if("#text"===e.childNodes[g].nodeName){if(c.data!==e.childNodes[g].data){for(d=v;t.childNodes.length>d+1&&"#text"===t.childNodes[d+1].nodeName;)if(d+=1,e.childNodes[g].data===t.childNodes[d].data){l=!0;break}if(!l)return m.push((new Gt).setValue(this.options._const.action,this.options._const.modifyTextElement).setValue(this.options._const.route,i.concat(g)).setValue(this.options._const.oldValue,c.data).setValue(this.options._const.newValue,e.childNodes[g].data)),m}}else m.push((new Gt).setValue(this.options._const.action,this.options._const.removeTextElement).setValue(this.options._const.route,i.concat(g)).setValue(this.options._const.value,c.data)),h.splice(g,1),p=Math.min(h.length,f.length),g-=1;else m.push((new Gt).setValue(this.options._const.action,this.options._const.removeElement).setValue(this.options._const.route,i.concat(g)).setValue(this.options._const.element,Yt(c))),h.splice(g,1),p=Math.min(h.length,f.length),g-=1;else if(!0===f[g])"#text"===(c=e.childNodes[g]).nodeName?(m.push((new Gt).setValue(this.options._const.action,this.options._const.addTextElement).setValue(this.options._const.route,i.concat(g)).setValue(this.options._const.value,c.data)),h.splice(g,0,!0),p=Math.min(h.length,f.length),v-=1):(m.push((new Gt).setValue(this.options._const.action,this.options._const.addElement).setValue(this.options._const.route,i.concat(g)).setValue(this.options._const.element,Yt(c))),h.splice(g,0,!0),p=Math.min(h.length,f.length),v-=1);else if(h[g]!==f[g]){if(m.length>0)return m;if(a=n[h[g]],(r=Math.min(a.newValue,t.childNodes.length-a.length))!==a.oldValue){o=!1;for(var b=0;b<a.length;b+=1)zt(t.childNodes[r+b],t.childNodes[a.oldValue+b],{},!1,!0)||(o=!0);if(o)return[(new Gt).setValue(this.options._const.action,this.options._const.relocateGroup).setValue(this.options._const.groupLength,a.length).setValue(this.options._const.from,a.oldValue).setValue(this.options._const.to,r).setValue(this.options._const.route,i)]}}return m},t.prototype.findValueDiff=function(t,e,n){var i=[];return t.selected!==e.selected&&i.push((new Gt).setValue(this.options._const.action,this.options._const.modifySelected).setValue(this.options._const.oldValue,t.selected).setValue(this.options._const.newValue,e.selected).setValue(this.options._const.route,n)),(t.value||e.value)&&t.value!==e.value&&"OPTION"!==t.nodeName&&i.push((new Gt).setValue(this.options._const.action,this.options._const.modifyValue).setValue(this.options._const.oldValue,t.value||"").setValue(this.options._const.newValue,e.value||"").setValue(this.options._const.route,n)),t.checked!==e.checked&&i.push((new Gt).setValue(this.options._const.action,this.options._const.modifyChecked).setValue(this.options._const.oldValue,t.checked).setValue(this.options._const.newValue,e.checked).setValue(this.options._const.route,n)),i},t}(),ce={debug:!1,diffcap:10,maxDepth:!1,maxChildCount:50,valueDiffing:!0,textDiff:function(t,e,n,i){t.data=i},preVirtualDiffApply:function(){},postVirtualDiffApply:function(){},preDiffApply:function(){},postDiffApply:function(){},filterOuterDiff:null,compress:!1,_const:!1,document:!("undefined"==typeof window||!window.document)&&window.document,components:[]},le=function(){function t(t){if(void 0===t&&(t={}),Object.entries(ce).forEach((function(e){var n=e[0],i=e[1];Object.prototype.hasOwnProperty.call(t,n)||(t[n]=i)})),!t._const){var e=["addAttribute","modifyAttribute","removeAttribute","modifyTextElement","relocateGroup","removeElement","addElement","removeTextElement","addTextElement","replaceElement","modifyValue","modifyChecked","modifySelected","modifyComment","action","route","oldValue","newValue","element","group","groupLength","from","to","name","value","data","attributes","nodeName","childNodes","checked","selected"],n={};t.compress?e.forEach((function(t,e){return n[t]=e})):e.forEach((function(t){return n[t]=t})),t._const=n}this.options=t}return t.prototype.apply=function(t,e){return function(t,e,n){return e.every((function(e){return Ht(t,e,n)}))}(t,e,this.options)},t.prototype.undo=function(t,e){return function(t,e,n){(e=e.slice()).reverse(),e.forEach((function(e){!function(t,e,n){switch(e[n._const.action]){case n._const.addAttribute:e[n._const.action]=n._const.removeAttribute,Ht(t,e,n);break;case n._const.modifyAttribute:$t(e,n._const.oldValue,n._const.newValue),Ht(t,e,n);break;case n._const.removeAttribute:e[n._const.action]=n._const.addAttribute,Ht(t,e,n);break;case n._const.modifyTextElement:case n._const.modifyValue:case n._const.modifyComment:case n._const.modifyChecked:case n._const.modifySelected:case n._const.replaceElement:$t(e,n._const.oldValue,n._const.newValue),Ht(t,e,n);break;case n._const.relocateGroup:$t(e,n._const.from,n._const.to),Ht(t,e,n);break;case n._const.removeElement:e[n._const.action]=n._const.addElement,Ht(t,e,n);break;case n._const.addElement:e[n._const.action]=n._const.removeElement,Ht(t,e,n);break;case n._const.removeTextElement:e[n._const.action]=n._const.addTextElement,Ht(t,e,n);break;case n._const.addTextElement:e[n._const.action]=n._const.removeTextElement,Ht(t,e,n);break;default:console.log("unknown action")}}(t,e,n)}))}(t,e,this.options)},t.prototype.diff=function(t,e){return new ae(t,e,this.options).init()},t}(),de=function(t,e,n,i,s){var o=i.classes,r=i.hiddenHeader,a=i.sortable,c=i.scrollY,l=s.noColumnWidths,d=s.unhideHeader;return{nodeName:"TR",childNodes:t.map((function(t,i){var s,u,h=e.columns[i]||{};if(!h.hidden){var f={};h.notSortable||!a||c.length&&!d||(f["data-sortable"]="true"),(null===(s=e.sort)||void 0===s?void 0:s.column)===i&&(f.class=e.sort.dir,f["aria-sort"]="asc"===e.sort.dir?"ascending":"descending");var p="";n[i]&&!l&&(p+="width: ".concat(n[i],"%;")),c.length&&!d&&(p+="padding-bottom: 0;padding-top: 0;border: 0;"),p.length&&(f.style=p);var m="node"===t.type?t.data:[{nodeName:"#text",data:null!==(u=t.text)&&void 0!==u?u:String(t.data)}];return{nodeName:"TH",attributes:f,childNodes:!r&&!c.length||d?h.notSortable||!a?m:[{nodeName:"a",attributes:{href:"#",class:o.sorter},childNodes:m}]:[{nodeName:"#text",data:""}]}}})).filter((function(t){return t}))}},ue=function(t,e,n,i,s,o,r,a){var c=r.classes,l=r.hiddenHeader,d=r.header,u=r.footer,h=r.sortable,f=r.scrollY,p=r.rowRender,m=r.tabIndex,g=a.noColumnWidths,v=a.unhideHeader,b=a.renderHeader,y={nodeName:"TABLE",attributes:{class:c.table},childNodes:[{nodeName:"TBODY",childNodes:n.map((function(t){var e=t.row,n=t.index,r={nodeName:"TR",attributes:{"data-index":String(n)},childNodes:e.map((function(t,e){var o,r=i.columns[e]||{};if(!r.hidden){var a="node"===t.type?{nodeName:"TD",childNodes:t.data}:{nodeName:"TD",childNodes:[{nodeName:"#text",data:null!==(o=t.text)&&void 0!==o?o:String(t.data)}]};if(d||u||!s[e]||g||(a.attributes={style:"width: ".concat(s[e],"%;")}),r.render){var c=r.render(t.data,a,n,e);if(c){if("string"!=typeof c)return c;var l=re("<td>".concat(c,"</td>"));1===l.childNodes.length&&["#text","#comment"].includes(l.childNodes[0].nodeName)?a.childNodes[0].data=c:a.childNodes=l.childNodes}}return a}})).filter((function(t){return t}))};if(n===o&&(r.attributes.class=c.cursor),p){var a=p(e,r,n);if(a){if("string"!=typeof a)return a;var l=re("<tr>".concat(a,"</tr>"));!l.childNodes||1===l.childNodes.length&&["#text","#comment"].includes(l.childNodes[0].nodeName)?r.childNodes[0].data=a:r.childNodes=l.childNodes}}return r}))}]};if(t.length&&(y.attributes.id=t),d||u||b){var w=de(e,i,s,{classes:c,hiddenHeader:l,sortable:h,scrollY:f},{noColumnWidths:g,unhideHeader:v});if(d||b){var E={nodeName:"THEAD",childNodes:[w]};!f.length&&!l||v||(E.attributes={style:"height: 0px;"}),y.childNodes.unshift(E)}if(u){var _={nodeName:"TFOOT",childNodes:[d?structuredClone(w):w]};!f.length&&!l||v||(_.attributes={style:"height: 0px;"}),y.childNodes.push(_)}}return!1!==m&&(y.attributes.tabindex=String(m)),y},he={},fe={get exports(){return he},set exports(t){he=t}};fe.exports=function(){var t=1e3,e=6e4,n=36e5,i="millisecond",s="second",o="minute",r="hour",a="day",c="week",l="month",d="quarter",u="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},v=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},b={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+v(i,2,"0")+":"+v(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(i,l),o=n-s<0,r=e.clone().add(i+(o?-1:1),l);return+(-(i+(n-s)/(o?s-r:r-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:u,w:c,d:a,D:h,h:r,m:o,s:s,ms:i,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",w={};w[y]=g;var E=function(t){return t instanceof O},_=function t(e,n,i){var s;if(!e)return y;if("string"==typeof e){var o=e.toLowerCase();w[o]&&(s=o),n&&(w[o]=n,s=o);var r=e.split("-");if(!s&&r.length>1)return t(r[0])}else{var a=e.name;w[a]=e,s=a}return!i&&s&&(y=s),s||!i&&y},N=function(t,e){if(E(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new O(n)},x=b;x.l=_,x.i=E,x.w=function(t,e){return N(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var O=function(){function g(t){this.$L=_(t.locale,null,!0),this.parse(t)}var v=g.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(x.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(p);if(i){var s=i[2]-1||0,o=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,o)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,o)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return x},v.isValid=function(){return!(this.$d.toString()===f)},v.isSame=function(t,e){var n=N(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return N(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<N(t)},v.$g=function(t,e,n){return x.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,i=!!x.u(e)||e,d=x.p(t),f=function(t,e){var s=x.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return i?s:s.endOf(a)},p=function(t,e){return x.w(n.toDate()[t].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,g=this.$M,v=this.$D,b="set"+(this.$u?"UTC":"");switch(d){case u:return i?f(1,0):f(31,11);case l:return i?f(1,g):f(0,g+1);case c:var y=this.$locale().weekStart||0,w=(m<y?m+7:m)-y;return f(i?v-w:v+(6-w),g);case a:case h:return p(b+"Hours",0);case r:return p(b+"Minutes",1);case o:return p(b+"Seconds",2);case s:return p(b+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var n,c=x.p(t),d="set"+(this.$u?"UTC":""),f=(n={},n[a]=d+"Date",n[h]=d+"Date",n[l]=d+"Month",n[u]=d+"FullYear",n[r]=d+"Hours",n[o]=d+"Minutes",n[s]=d+"Seconds",n[i]=d+"Milliseconds",n)[c],p=c===a?this.$D+(e-this.$W):e;if(c===l||c===u){var m=this.clone().set(h,1);m.$d[f](p),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[x.p(t)]()},v.add=function(i,d){var h,f=this;i=Number(i);var p=x.p(d),m=function(t){var e=N(f);return x.w(e.date(e.date()+Math.round(t*i)),f)};if(p===l)return this.set(l,this.$M+i);if(p===u)return this.set(u,this.$y+i);if(p===a)return m(1);if(p===c)return m(7);var g=(h={},h[o]=e,h[r]=n,h[s]=t,h)[p]||1,v=this.$d.getTime()+i*g;return x.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var i=t||"YYYY-MM-DDTHH:mm:ssZ",s=x.z(this),o=this.$H,r=this.$m,a=this.$M,c=n.weekdays,l=n.months,d=function(t,n,s,o){return t&&(t[n]||t(e,i))||s[n].slice(0,o)},u=function(t){return x.s(o%12||12,t,"0")},h=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:x.s(a+1,2,"0"),MMM:d(n.monthsShort,a,l,3),MMMM:d(l,a),D:this.$D,DD:x.s(this.$D,2,"0"),d:String(this.$W),dd:d(n.weekdaysMin,this.$W,c,2),ddd:d(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(o),HH:x.s(o,2,"0"),h:u(1),hh:u(2),a:h(o,r,!0),A:h(o,r,!1),m:String(r),mm:x.s(r,2,"0"),s:String(this.$s),ss:x.s(this.$s,2,"0"),SSS:x.s(this.$ms,3,"0"),Z:s};return i.replace(m,(function(t,e){return e||p[t]||s.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(i,h,f){var p,m=x.p(h),g=N(i),v=(g.utcOffset()-this.utcOffset())*e,b=this-g,y=x.m(this,g);return y=(p={},p[u]=y/12,p[l]=y,p[d]=y/3,p[c]=(b-v)/6048e5,p[a]=(b-v)/864e5,p[r]=b/n,p[o]=b/e,p[s]=b/t,p)[m]||b,f?y:x.a(y)},v.daysInMonth=function(){return this.endOf(l).$D},v.$locale=function(){return w[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=_(t,e,!0);return i&&(n.$L=i),n},v.clone=function(){return x.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},g}(),S=O.prototype;return N.prototype=S,[["$ms",i],["$s",s],["$m",o],["$H",r],["$W",a],["$M",l],["$y",u],["$D",h]].forEach((function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),N.extend=function(t,e){return t.$i||(t(e,O,N),t.$i=!0),N},N.locale=_,N.isDayjs=E,N.unix=function(t){return N(1e3*t)},N.en=w[y],N.Ls=w,N.p={},N}();var pe=he,me={},ge={get exports(){return me},set exports(t){me=t}};ge.exports=function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,i=/\d\d?/,s=/\d*[^-_:/,()\s\d]+/,o={},r=function(t){return(t=+t)+(t>68?1900:2e3)},a=function(t){return function(e){this[t]=+e}},c=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t)return 0;if("Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),n=60*e[1]+(+e[2]||0);return 0===n?0:"+"===e[0]?-n:n}(t)}],l=function(t){var e=o[t];return e&&(e.indexOf?e:e.s.concat(e.f))},d=function(t,e){var n,i=o.meridiem;if(i){for(var s=1;s<=24;s+=1)if(t.indexOf(i(s,0,e))>-1){n=s>12;break}}else n=t===(e?"pm":"PM");return n},u={A:[s,function(t){this.afternoon=d(t,!1)}],a:[s,function(t){this.afternoon=d(t,!0)}],S:[/\d/,function(t){this.milliseconds=100*+t}],SS:[n,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[i,a("seconds")],ss:[i,a("seconds")],m:[i,a("minutes")],mm:[i,a("minutes")],H:[i,a("hours")],h:[i,a("hours")],HH:[i,a("hours")],hh:[i,a("hours")],D:[i,a("day")],DD:[n,a("day")],Do:[s,function(t){var e=o.ordinal,n=t.match(/\d+/);if(this.day=n[0],e)for(var i=1;i<=31;i+=1)e(i).replace(/\[|\]/g,"")===t&&(this.day=i)}],M:[i,a("month")],MM:[n,a("month")],MMM:[s,function(t){var e=l("months"),n=(l("monthsShort")||e.map((function(t){return t.slice(0,3)}))).indexOf(t)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[s,function(t){var e=l("months").indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e}],Y:[/[+-]?\d+/,a("year")],YY:[n,function(t){this.year=r(t)}],YYYY:[/\d{4}/,a("year")],Z:c,ZZ:c};function h(n){var i,s;i=n,s=o&&o.formats;for(var r=(n=i.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,n,i){var o=i&&i.toUpperCase();return n||s[i]||t[i]||s[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,n){return e||n.slice(1)}))}))).match(e),a=r.length,c=0;c<a;c+=1){var l=r[c],d=u[l],h=d&&d[0],f=d&&d[1];r[c]=f?{regex:h,parser:f}:l.replace(/^\[|\]$/g,"")}return function(t){for(var e={},n=0,i=0;n<a;n+=1){var s=r[n];if("string"==typeof s)i+=s.length;else{var o=s.regex,c=s.parser,l=t.slice(i),d=o.exec(l)[0];c.call(e,d),t=t.replace(d,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var n=t.hours;e?n<12&&(t.hours+=12):12===n&&(t.hours=0),delete t.afternoon}}(e),e}}return function(t,e,n){n.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(r=t.parseTwoDigitYear);var i=e.prototype,s=i.parse;i.parse=function(t){var e=t.date,i=t.utc,r=t.args;this.$u=i;var a=r[1];if("string"==typeof a){var c=!0===r[2],l=!0===r[3],d=c||l,u=r[2];l&&(u=r[2]),o=this.$locale(),!c&&u&&(o=n.Ls[u]),this.$d=function(t,e,n){try{if(["x","X"].indexOf(e)>-1)return new Date(("X"===e?1e3:1)*t);var i=h(e)(t),s=i.year,o=i.month,r=i.day,a=i.hours,c=i.minutes,l=i.seconds,d=i.milliseconds,u=i.zone,f=new Date,p=r||(s||o?1:f.getDate()),m=s||f.getFullYear(),g=0;s&&!o||(g=o>0?o-1:f.getMonth());var v=a||0,b=c||0,y=l||0,w=d||0;return u?new Date(Date.UTC(m,g,p,v,b,y,w+60*u.offset*1e3)):n?new Date(Date.UTC(m,g,p,v,b,y,w)):new Date(m,g,p,v,b,y,w)}catch(t){return new Date("")}}(e,a,i),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&e!=this.format(a)&&(this.$d=new Date("")),o={}}else if(a instanceof Array)for(var f=a.length,p=1;p<=f;p+=1){r[1]=a[p-1];var m=n.apply(this,r);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}p===f&&(this.$d=new Date(""))}else s.call(this,t)}}}();var ve=me;pe.extend(ve);var be=function(t){return"[object Object]"===Object.prototype.toString.call(t)},ye=function(t){var e=!1;try{e=JSON.parse(t)}catch(t){return!1}return!(null===e||!Array.isArray(e)&&!be(e))&&e},we=function(t,e){var n=document.createElement(t);if(e&&"object"==typeof e)for(var i in e)"html"===i?n.innerHTML=e[i]:n.setAttribute(i,e[i]);return n},Ee=function(t){Array.isArray(t)?t.forEach((function(t){return Ee(t)})):t.innerHTML=""},_e=function(t,e,n){return we("li",{class:t,html:'<a href="#" data-page="'.concat(String(e),'">').concat(n,"</a>")})},Ne=function(t){return["#text","#comment"].includes(t.nodeName)?t.data:t.childNodes?t.childNodes.map((function(t){return Ne(t)})).join(""):""},xe=function(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},Oe=function(t,e){for(var n=0,i=0;n<t+1;){(e[i]||{}).hidden||(n+=1),i+=1}return i-1},Se=function(t,e){if(void 0===e&&(e={}),t instanceof Object&&t.constructor===Object&&t.hasOwnProperty("data")&&("string"==typeof t.text||"string"==typeof t.data))return t;var n={data:t};if("string"==typeof t){if(t.length){var i=re("<td>".concat(t,"</td>"));if(i.childNodes&&(1!==i.childNodes.length||"#text"!==i.childNodes[0].nodeName)){n.data=i.childNodes,n.type="node";var s=Ne(i);n.text=s,n.order=s}}}else[null,void 0].includes(t)?(n.text="",n.order=0):n.text=JSON.stringify(t);return"date"===e.type&&e.format&&(n.order=function(t,e){var n;if(e)switch(e){case"ISO_8601":n=t;break;case"RFC_2822":n=pe(t.slice(5),"DD MMM YYYY HH:mm:ss ZZ").unix();break;case"MYSQL":n=pe(t,"YYYY-MM-DD hh:mm:ss").unix();break;case"UNIX":n=pe(t).unix();break;default:n=pe(t,e,!0).valueOf()}return n}(String(t),e.format)),n},De=function(t){if(t instanceof Object&&t.constructor===Object&&t.hasOwnProperty("data")&&("string"==typeof t.text||"string"==typeof t.data))return t;var e={data:t};if("string"==typeof t){if(t.length){var n=re("<th>".concat(t,"</th>"));if(n.childNodes&&(1!==n.childNodes.length||"#text"!==n.childNodes[0].nodeName)){e.data=n.childNodes,e.type="node";var i=Ne(n);e.text=i}}}else[null,void 0].includes(t)?e.text="":e.text=JSON.stringify(t);return e},Te=function(e,n,i,s){var o,r;void 0===i&&(i=void 0);var a={data:[],headings:[]};if(!e&&n.headings?a.headings=n.headings:n.headings?a.headings=n.headings.map((function(t){return De(t)})):(null==i?void 0:i.tHead)?a.headings=Array.from(i.tHead.querySelectorAll("th")).map((function(e,n){var i=De(e.innerHTML),o={};return"false"!==e.dataset.sortable&&"false"!==e.dataset.sort||(o.notSortable=!0),"true"!==e.dataset.hidden&&"true"!==e.getAttribute("hidden")||(o.hidden=!0),"date"===e.dataset.type&&(o.type="date",e.dataset.format&&(o.format=e.dataset.format)),Object.keys(o).length&&(s.columns[n]||(s.columns[n]={}),s.columns[n]=t(t({},s.columns[n]),o)),i})):(null===(o=n.data)||void 0===o?void 0:o.length)?a.headings=n.data[0].map((function(t){return De("")})):(null==i?void 0:i.tBodies.length)&&(a.headings=Array.from(i.tBodies[0].rows[0].cells).map((function(t){return De("")}))),!e&&n.data?a.data=n.data:n.data?a.data=n.data.map((function(t){return t.map((function(t,e){return Se(t,s.columns[e])}))})):(null===(r=null==i?void 0:i.tBodies)||void 0===r?void 0:r.length)&&(a.data=Array.from(i.tBodies[0].rows).map((function(t){return Array.from(t.cells).map((function(t,e){return Se(t.dataset.content||t.innerHTML,s.columns[e])}))}))),a.data.length&&a.data[0].length!==a.headings.length)throw new Error("Data heading length mismatch.");return a},Ve=function(){function t(t){this.dt=t,this.cursor=!1}return t.prototype.setCursor=function(t){if(void 0===t&&(t=!1),t!==this.cursor){var e=this.cursor;if(this.cursor=t,this.dt._renderTable(),!1!==t&&this.dt.options.scrollY){var n=this.dt.dom.querySelector("tr.".concat(this.dt.options.classes.cursor));n&&n.scrollIntoView({block:"nearest"})}this.dt.emit("datatable.cursormove",this.cursor,e)}},t.prototype.add=function(t){var e=this,n=this.dt.options.dataConvert?t.map((function(t,n){var i=e.dt.columns.settings.columns[n]||{};return Se(t,i)})):t;this.dt.data.data.push(n),this.dt.data.data.length&&(this.dt.hasRows=!0),this.dt.update(!0)},t.prototype.remove=function(t){if(!Array.isArray(t))return this.remove([t]);this.dt.data.data=this.dt.data.data.filter((function(e,n){return!t.includes(n)})),this.dt.data.data.length||(this.dt.hasRows=!1),this.dt.update(!0)},t.prototype.findRowIndex=function(t,e){return this.dt.data.data.findIndex((function(n){var i;return(null!==(i=n[t].text)&&void 0!==i?i:String(n[t].data)).toLowerCase().includes(String(e).toLowerCase())}))},t.prototype.findRow=function(t,e){var n=this.findRowIndex(t,e);if(n<0)return{index:-1,row:null,cols:[]};var i=this.dt.data.data[n],s=i.map((function(t){return t.data}));return{index:n,row:i,cols:s}},t.prototype.updateRow=function(t,e){var n=this,i=this.dt.options.dataConvert?e.map((function(t,e){var i=n.dt.columns.settings.columns[e]||{};return Se(t,i)})):e;this.dt.data.data.splice(t,1,i),this.dt.update(!0)},t}(),Ae=function(){function t(t){this.dt=t,this.widths=[],this.init()}return t.prototype.init=function(){this.settings=function(t){void 0===t&&(t=[]);var e=[],n=!1;return t.forEach((function(t){(Array.isArray(t.select)?t.select:[t.select]).forEach((function(i){e[i]||(e[i]={});var s=e[i];t.render&&(s.render=t.render),t.type&&(s.type=t.type),t.format&&(s.format=t.format),!1===t.sortable&&(s.notSortable=!0),t.hidden&&(s.hidden=!0),t.filter&&(s.filter=t.filter),t.sortSequence&&(s.sortSequence=t.sortSequence),t.sort&&(n={column:i,dir:t.sort})}))})),{columns:e,sort:n}}(this.dt.options.columns)},t.prototype.swap=function(t){if(2===t.length){var e=this.dt.data.headings.map((function(t,e){return e})),n=t[0],i=t[1],s=e[i];return e[i]=e[n],e[n]=s,this.order(e)}},t.prototype.order=function(t){var e=this;this.dt.data.headings=t.map((function(t){return e.dt.data.headings[t]})),this.dt.data.data=this.dt.data.data.map((function(e){return t.map((function(t){return e[t]}))})),this.settings.columns=t.map((function(t){return e.settings.columns[t]})),this.dt.update()},t.prototype.hide=function(t){var e=this;t.length&&(t.forEach((function(t){e.settings.columns[t]||(e.settings.columns[t]={}),e.settings.columns[t].hidden=!0})),this.dt.update())},t.prototype.show=function(t){var e=this;t.length&&(t.forEach((function(t){e.settings.columns[t]||(e.settings.columns[t]={}),delete e.settings.columns[t].hidden})),this.dt.update())},t.prototype.visible=function(t){var e,n=this;return Array.isArray(t)?t.map((function(t){var e;return!(null===(e=n.settings.columns[t])||void 0===e?void 0:e.hidden)})):!(null===(e=this.settings.columns[t])||void 0===e?void 0:e.hidden)},t.prototype.add=function(t){var e=this.dt.data.headings.length;if(this.dt.data.headings=this.dt.options.dataConvert?this.dt.data.headings.concat([De(t.heading)]):this.dt.data.headings.concat([t.heading]),this.dt.data.data=this.dt.options.dataConvert?this.dt.data.data.map((function(e,n){return e.concat([Se(t.data[n],t)])})):this.dt.data.data.map((function(e,n){return e.concat([t.data[n]])})),t.type||t.format||t.sortable||t.render||t.filter){this.settings.columns[e]||(this.settings.columns[e]={});var n=this.settings.columns[e];t.type&&(n.type=t.type),t.format&&(n.format=t.format),t.sortable&&(n.notSortable=!t.sortable),t.filter&&(n.filter=t.filter),t.type&&(n.type=t.type),t.render&&(n.render=t.render)}this.dt.update(!0)},t.prototype.remove=function(t){if(!Array.isArray(t))return this.remove([t]);this.dt.data.headings=this.dt.data.headings.filter((function(e,n){return!t.includes(n)})),this.dt.data.data=this.dt.data.data.map((function(e){return e.filter((function(e,n){return!t.includes(n)}))})),this.dt.update(!0)},t.prototype.filter=function(t,e){var n,i;if(void 0===e&&(e=!1),null===(i=null===(n=this.settings.columns[t])||void 0===n?void 0:n.filter)||void 0===i?void 0:i.length){var s,o=this.dt.filterStates.find((function(e){return e.column===t}));if(o){var r=!1;s=this.settings.columns[t].filter.find((function(t){return!!r||(t===o.state&&(r=!0),!1)}))}else s=this.settings.columns[t].filter[0];o&&s?o.state=s:o?this.dt.filterStates=this.dt.filterStates.filter((function(e){return e.column!==t})):this.dt.filterStates.push({column:t,state:s}),this.dt.update(),e||this.dt.emit("datatable.filter",t,s)}},t.prototype.sort=function(t,e,n){var i,s;void 0===e&&(e=void 0),void 0===n&&(n=!1);var o=this.settings.columns[t];if(null===(i=null==o?void 0:o.filter)||void 0===i?void 0:i.length)return this.filter(t,n);if(n||this.dt.emit("datatable.sorting",t,e),!e){var r=!!this.settings.sort&&(null===(s=this.settings.sort)||void 0===s?void 0:s.dir),a=(null==o?void 0:o.sortSequence)||["asc","desc"];if(r){var c=a.indexOf(r);e=-1===c?"asc":c===a.length-1?a[0]:a[c+1]}else e=a.length?a[0]:"asc"}this.dt.data.data.sort((function(n,i){var s=n[t].order||n[t].data,o=i[t].order||i[t].data;if("desc"===e){var r=s;s=o,o=r}return s<o?-1:s>o?1:0})),this.settings.sort={column:t,dir:e},this.dt.searching?(this.dt.search(this.dt.searching),this.dt.emit("datatable.sort",t,e)):n||(this.dt.update(),this.dt.emit("datatable.sort",t,e))},t.prototype._measureWidths=function(){var t,e,n,i,s=this,o=this.dt.data.headings.filter((function(t,e){var n;return!(null===(n=s.settings.columns[e])||void 0===n?void 0:n.hidden)}));if((this.dt.options.scrollY.length||this.dt.options.fixedColumns)&&(null==o?void 0:o.length)){this.widths=[];var r={noPaging:!0};if(this.dt.options.header||this.dt.options.footer){this.dt.options.scrollY.length&&(r.unhideHeader=!0),this.dt.headerDOM&&this.dt.headerDOM.parentElement.removeChild(this.dt.headerDOM),r.noColumnWidths=!0,this.dt._renderTable(r);var a=Array.from((null===(e=null===(t=this.dt.dom.querySelector("thead, tfoot"))||void 0===t?void 0:t.firstElementChild)||void 0===e?void 0:e.querySelectorAll("th"))||[]),c=0,l=this.dt.data.headings.map((function(t,e){var n;if(null===(n=s.settings.columns[e])||void 0===n?void 0:n.hidden)return 0;var i=a[c].offsetWidth;return c+=1,i})),d=l.reduce((function(t,e){return t+e}),0);this.widths=l.map((function(t){return t/d*100}))}else{r.renderHeader=!0,this.dt._renderTable(r);var u=Array.from((null===(i=null===(n=this.dt.dom.querySelector("thead, tfoot"))||void 0===n?void 0:n.firstElementChild)||void 0===i?void 0:i.querySelectorAll("th"))||[]),h=0,f=(l=this.dt.data.headings.map((function(t,e){var n;if(null===(n=s.settings.columns[e])||void 0===n?void 0:n.hidden)return 0;var i=u[h].offsetWidth;return h+=1,i})),l.reduce((function(t,e){return t+e}),0));this.widths=l.map((function(t){return t/f*100}))}this.dt._renderTable()}},t}(),Ce={sortable:!0,searchable:!0,destroyable:!0,dataConvert:!0,data:{},paging:!0,perPage:10,perPageSelect:[5,10,15,20,25,50,100],nextPrev:!0,firstLast:!1,prevText:"&lsaquo;",nextText:"&rsaquo;",firstText:"&laquo;",lastText:"&raquo;",ellipsisText:"&hellip;",ascText:"▴",descText:"▾",truncatePager:!0,pagerDelta:2,scrollY:"",fixedColumns:!0,fixedHeight:!1,header:!0,hiddenHeader:!1,footer:!1,tabIndex:!1,rowNavigation:!1,rowRender:!1,labels:{placeholder:"Search...",perPage:"{select} entries per page",noRows:"No entries found",noResults:"No results match your search query",info:"Showing {start} to {end} of {rows} entries"},layout:{top:"{select}{search}",bottom:"{info}{pager}"},classes:{active:"active",bottom:"datatable-bottom",container:"datatable-container",cursor:"datatable-cursor",dropdown:"datatable-dropdown",ellipsis:"ellipsis",empty:"datatable-empty",headercontainer:"datatable-headercontainer",info:"datatable-info",input:"datatable-input",loading:"datatable-loading",pagination:"datatable-pagination",paginationList:"datatable-pagination-list",search:"datatable-search",selector:"datatable-selector",sorter:"datatable-sorter",table:"datatable-table",top:"datatable-top",wrapper:"datatable-wrapper"},remote:{url:"",method:"GET",token:"",resultsData:new function(){}}},Me=function(){function e(e,n){void 0===n&&(n={});var i=this;this.dom="string"==typeof e?document.querySelector(e):e,this.id=this.dom.id,this.options=t(t(t({},Ce),n),{layout:t(t({},Ce.layout),n.layout),labels:t(t({},Ce.labels),n.labels),classes:t(t({},Ce.classes),n.classes),remote:t(t({},Ce.remote),n.remote)}),this.initialInnerHTML=this.options.destroyable?this.dom.innerHTML:"",this.options.tabIndex?this.dom.tabIndex=this.options.tabIndex:this.options.rowNavigation&&-1===this.dom.tabIndex&&(this.dom.tabIndex=0),this.listeners={onResize:function(){return i._onResize()}},this.dd=new le,this.initialized=!1,this.events={},this.currentPage=0,this.onFirstPage=!0,this.hasHeadings=!1,this.hasRows=!1,this.filterStates=[],this.hasRemote=void 0!==n.remote,this.hasRemote?this._remote():this.init()}return e.prototype.init=function(){var t=this;if(this.initialized||this.dom.classList.contains(this.options.classes.table))return!1;this.virtualDOM=Qt(this.dom),this.rows=new Ve(this),this.columns=new Ae(this),this.data=Te(this.options.dataConvert,this.options.data,this.dom,this.columns.settings),this.hasRows=Boolean(this.data.data.length),this.hasHeadings=Boolean(this.data.headings.length),this._render(),setTimeout((function(){t.emit("datatable.init"),t.initialized=!0}),10)},e.prototype._remote=function(){var t=this,e=this.options.remote;switch(e.method){case"GET":Lt.get(e.url).then((function(t){console.log(t)})).catch((function(t){console.log(t)})).finally((function(){console.log("FINISHFETCH")}));break;case"POST":Lt.post(e.url,{limit:this.options.perPage,offset:this.options.perPage*this.currentPage},{headers:{"X-CSRF-Token":e.token,Accept:"application/json","Content-Type":"application/json;charset=UTF-8"}}).then((function(e){for(var n={headings:Object.keys(e.data.data[0]),data:[]},i=0;i<e.data.data.length;i++)for(var s in n.data[i]=[],e.data.data[i])e.data.data[i].hasOwnProperty(s)&&n.data[i].push(e.data.data[i][s]);t.options.data=n,t.options.remote.resultsData.totalRecords=e.data.total,t.init()})).catch((function(t){console.log(t)})).finally((function(){}))}},e.prototype._render=function(){var t=this;this.wrapper=we("div",{class:"".concat(this.options.classes.wrapper," ").concat(this.options.classes.loading)});var e="";if(e+="<div class='".concat(this.options.classes.top,"'>"),e+=this.options.layout.top,e+="</div>",this.options.scrollY.length?e+="<div class='".concat(this.options.classes.container,"' style='height: ").concat(this.options.scrollY,"; overflow-Y: auto;'></div>"):e+="<div class='".concat(this.options.classes.container,"'></div>"),e+="<div class='".concat(this.options.classes.bottom,"'>"),e+=this.options.layout.bottom,e=(e+="</div>").replace("{info}",this.options.paging?"<div class='".concat(this.options.classes.info,"'></div>"):""),this.options.paging&&this.options.perPageSelect){var n="<div class='".concat(this.options.classes.dropdown,"'><label>");n+=this.options.labels.perPage,n+="</label></div>";var i=we("select",{class:this.options.classes.selector});this.options.perPageSelect.forEach((function(e){var n=Array.isArray(e)?[e[0],e[1]]:[String(e),e],s=n[0],o=n[1],r=o===t.options.perPage,a=new Option(s,String(o),r,r);i.appendChild(a)})),n=n.replace("{select}",i.outerHTML),e=e.replace("{select}",n)}else e=e.replace("{select}","");if(this.options.searchable){var s="<div class='".concat(this.options.classes.search,"'><input class='").concat(this.options.classes.input,"' placeholder='").concat(this.options.labels.placeholder,"' type='text'></div>");e=e.replace("{search}",s)}else e=e.replace("{search}","");var o=we("nav",{class:this.options.classes.pagination}),r=we("ul",{class:this.options.classes.paginationList});o.appendChild(r),e=e.replace(/\{pager\}/g,o.outerHTML),this.wrapper.innerHTML=e,this.container=this.wrapper.querySelector(".".concat(this.options.classes.container)),this.pagers=Array.from(this.wrapper.querySelectorAll("ul.".concat(this.options.classes.paginationList))),this.label=this.wrapper.querySelector(".".concat(this.options.classes.info)),this.dom.parentElement.replaceChild(this.wrapper,this.dom),this.container.appendChild(this.dom),this.rect=this.dom.getBoundingClientRect(),this._fixHeight(),this.options.header||this.wrapper.classList.add("no-header"),this.options.footer||this.wrapper.classList.add("no-footer"),this.options.sortable&&this.wrapper.classList.add("sortable"),this.options.searchable&&this.wrapper.classList.add("searchable"),this.options.fixedHeight&&this.wrapper.classList.add("fixed-height"),this.options.fixedColumns&&this.wrapper.classList.add("fixed-columns"),this._bindEvents(),this.columns.settings.sort&&this.columns.sort(this.columns.settings.sort.column,this.columns.settings.sort.dir,!0),this.update(!0)},e.prototype._renderTable=function(t){void 0===t&&(t={}),console.log((this.options.paging||this.searching)&&this.currentPage&&this.pages.length&&!t.noPaging);var e=ue(this.id,this.data.headings,(this.options.paging||this.searching)&&this.currentPage&&this.pages.length&&!t.noPaging?this.pages[this.currentPage-1]:this.data.data.map((function(t,e){return{row:t,index:e}})),this.columns.settings,this.columns.widths,this.rows.cursor,this.options,t),n=this.dd.diff(this.virtualDOM,e);this.dd.apply(this.dom,n),this.virtualDOM=e},e.prototype._renderPage=function(t){var e=this;void 0===t&&(t=!1),this.hasRows&&this.totalPages?(this.currentPage>this.totalPages&&(this.currentPage=1),this._renderTable(),this.onFirstPage=1===this.currentPage,this.onLastPage=this.currentPage===this.lastPage):this.setMessage(this.options.labels.noRows);var n,i=0,s=0,o=0;if(this.totalPages&&(o=(s=(i=this.currentPage-1)*this.options.perPage)+this.pages[i].length,s+=1,n=this.searching?this.searchData.length:this.hasRemote?this.options.remote.resultsData.totalRecords:this.data.data.length),this.label&&this.options.labels.info.length){var r=this.options.labels.info.replace("{start}",String(s)).replace("{end}",String(o)).replace("{page}",String(this.currentPage)).replace("{pages}",String(this.totalPages)).replace("{rows}",String(n));this.label.innerHTML=n?r:""}if(1==this.currentPage&&this._fixHeight(),this.options.rowNavigation&&this.currentPage&&(!this.rows.cursor||!this.pages[this.currentPage-1].find((function(t){return t.index===e.rows.cursor})))){var a=this.pages[this.currentPage-1];a.length&&(t?this.rows.setCursor(a[a.length-1].index):this.rows.setCursor(a[0].index))}},e.prototype._renderPager=function(){var t=this;if(Ee(this.pagers),this.totalPages>1){var e="pager",n=document.createDocumentFragment(),i=this.onFirstPage?1:this.currentPage-1,s=this.onLastPage?this.totalPages:this.currentPage+1;this.options.firstLast&&n.appendChild(_e(e,1,this.options.firstText)),this.options.nextPrev&&!this.onFirstPage&&n.appendChild(_e(e,i,this.options.prevText));var o=this.links;this.options.truncatePager&&(o=function(t,e,n,i){var s=i.pagerDelta||2,o=i.classes||{ellipsis:"datatable-ellipsis",active:"datatable-active"},r=i.ellipsisText||"&hellip;",a=2*s,c=e-s,l=e+s;e<4-s+a?l=3+a:e>n-(3-s+a)&&(c=n-(2+a));for(var d,u=[],h=1;h<=n;h++)if(1==h||h==n||h>=c&&h<=l){var f=t[h-1];f.classList.remove(o.active),u.push(f)}var p=[];return u.forEach((function(e){var n=parseInt(e.children[0].getAttribute("data-page"),10);if(d){var i=parseInt(d.children[0].getAttribute("data-page"),10);if(n-i==2)p.push(t[i]);else if(n-i!=1){var s=we("li",{class:o.ellipsis,html:r});p.push(s)}}p.push(e),d=e})),p}(this.links,this.currentPage,this.pages.length,this.options)),this.links[this.currentPage-1].classList.add(this.options.classes.active),o.forEach((function(e){e.classList.remove(t.options.classes.active),n.appendChild(e)})),this.links[this.currentPage-1].classList.add(this.options.classes.active),this.options.nextPrev&&!this.onLastPage&&n.appendChild(_e(e,s,this.options.nextText)),this.options.firstLast&&n.appendChild(_e(e,this.totalPages,this.options.lastText)),this.pagers.forEach((function(t){t.appendChild(n.cloneNode(!0))}))}},e.prototype._renderSeparateHeader=function(){var t=this.dom.parentElement;this.headerDOM||(this.headerDOM=document.createElement("div"),this.virtualHeaderDOM={nodeName:"DIV"}),t.parentElement.insertBefore(this.headerDOM,t);var e={nodeName:"DIV",attributes:{class:this.options.classes.headercontainer},childNodes:[{nodeName:"TABLE",attributes:{class:this.options.classes.table},childNodes:[{nodeName:"THEAD",childNodes:[de(this.data.headings,this.columns.settings,this.columns.widths,this.options,{unhideHeader:!0})]}]}]},n=this.dd.diff(this.virtualHeaderDOM,e);this.dd.apply(this.headerDOM,n),this.virtualHeaderDOM=e;var i=this.headerDOM.firstElementChild.clientWidth-this.dom.clientWidth;if(i){var s=structuredClone(this.virtualHeaderDOM);s.attributes.style="padding-right: ".concat(i,"px;");var o=this.dd.diff(this.virtualHeaderDOM,s);this.dd.apply(this.headerDOM,o),this.virtualHeaderDOM=s}t.scrollHeight>t.clientHeight&&(t.style.overflowY="scroll")},e.prototype._bindEvents=function(){var t=this;if(this.options.perPageSelect){var e=this.wrapper.querySelector("select.".concat(this.options.classes.selector));e&&e instanceof HTMLSelectElement&&e.addEventListener("change",(function(){t.options.perPage=parseInt(e.value,10),t.update(),t._fixHeight(),t.emit("datatable.perpage",t.options.perPage)}),!1)}this.options.searchable&&(this.input=this.wrapper.querySelector(".".concat(this.options.classes.input)),this.input&&this.input.addEventListener("keyup",(function(){return t.search(t.input.value)}),!1)),this.wrapper.addEventListener("click",(function(e){var n=e.target.closest("a");if(n)if(n.hasAttribute("data-page"))t.page(parseInt(n.getAttribute("data-page"),10)),e.preventDefault();else if(t.options.sortable&&n.classList.contains(t.options.classes.sorter)&&"false"!=n.parentElement.getAttribute("data-sortable")){var i=Array.from(n.parentElement.parentElement.children).indexOf(n.parentElement),s=Oe(i,t.columns.settings.columns);t.columns.sort(s),e.preventDefault()}}),!1),this.options.rowNavigation?(this.dom.addEventListener("keydown",(function(e){var n;if("ArrowUp"===e.key)e.preventDefault(),e.stopPropagation(),t.pages[t.currentPage-1].find((function(e){return e.index===t.rows.cursor||(n=e,!1)})),n?t.rows.setCursor(n.index):t.onFirstPage||t.page(t.currentPage-1,!0);else if("ArrowDown"===e.key){var i;e.preventDefault(),e.stopPropagation();var s=t.pages[t.currentPage-1].find((function(e){return!!i||(e.index===t.rows.cursor&&(i=!0),!1)}));s?t.rows.setCursor(s.index):t.onLastPage||t.page(t.currentPage+1)}else["Enter"," "].includes(e.key)&&t.emit("datatable.selectrow",t.rows.cursor,e)})),this.dom.addEventListener("mousedown",(function(e){var n=e.target;if(n instanceof Element&&t.dom.matches(":focus")){var i=Array.from(t.dom.querySelectorAll("body tr")).find((function(t){return t.contains(n)}));i&&i instanceof HTMLElement&&t.emit("datatable.selectrow",parseInt(i.dataset.index,10),e)}}))):this.dom.addEventListener("mousedown",(function(e){var n=e.target;if(n instanceof Element){var i=Array.from(t.dom.querySelectorAll("body tr")).find((function(t){return t.contains(n)}));i&&i instanceof HTMLElement&&t.emit("datatable.selectrow",parseInt(i.dataset.index,10),e)}})),window.addEventListener("resize",this.listeners.onResize)},e.prototype._onResize=function(){this.rect=this.container.getBoundingClientRect(),this.rect.width&&this.update(!0)},e.prototype.destroy=function(){this.options.destroyable&&(this.dom.innerHTML=this.initialInnerHTML,this.dom.classList.remove(this.options.classes.table),this.wrapper.parentElement&&this.wrapper.parentElement.replaceChild(this.dom,this.wrapper),this.initialized=!1,window.removeEventListener("resize",this.listeners.onResize))},e.prototype.update=function(t){void 0===t&&(t=!1),t&&this.columns._measureWidths(),this.wrapper.classList.remove(this.options.classes.empty),this._paginate(),this._renderPage(),this.links=[];for(var e=this.pages.length;e--;){var n=e+1;this.links[e]=_e(0===e?this.options.classes.active:"",n,String(n))}this._renderPager(),this.options.scrollY.length&&this._renderSeparateHeader(),this.emit("datatable.update")},e.prototype._paginate=function(){var t=this,e=this.data.data.map((function(t,e){return{row:t,index:e}}));if(this.searching&&(e=[],this.searchData.forEach((function(n){return e.push({index:n,row:t.data.data[n]})}))),this.filterStates.length&&this.filterStates.forEach((function(t){e=e.filter((function(e){return"function"==typeof t.state?t.state(e.row[t.column].data):e.row[t.column].data===t.state}))})),this.options.paging&&this.options.perPage>0&&!this.hasRemote)this.pages=e.map((function(n,i){return i%t.options.perPage==0?e.slice(i,i+t.options.perPage):null})).filter((function(t){return t}));else if(this.hasRemote){this.pages=e.map((function(n,i){return i%t.options.perPage==0?e.slice(i,i+t.options.perPage):null})).filter((function(t){return t}));for(var n=1;n<this.options.remote.resultsData.totalRecords/this.options.perPage;n++){for(var i=[],s=0;s<this.options.perPage;s++)i.push(new Ve(this));this.pages.push(i)}}else this.pages=[e];return this.totalPages=this.lastPage=this.pages.length,this.currentPage=1,this.totalPages},e.prototype._fixHeight=function(){this.options.fixedHeight&&(this.container.style.height=null,this.rect=this.container.getBoundingClientRect(),this.container.style.height="".concat(this.rect.height,"px"))},e.prototype.search=function(t){var e=this;return!!this.hasRows&&(t=t.toLowerCase(),this.currentPage=1,this.searching=t,this.searchData=[],t.length?(this.data.data.forEach((function(n,i){var s=e.searchData.includes(i),o=t.split(" ").reduce((function(t,i){for(var s=!1,o=null,r=null,a=0;a<n.length;a++)if(r=(o=n[a]).text||String(o.data),e.columns.visible(a)&&r.toLowerCase().includes(i)){s=!0;break}return t&&s}),!0);o&&!s&&e.searchData.push(i)})),this.wrapper.classList.add("search-results"),this.searchData.length?this.update():(this.wrapper.classList.remove("search-results"),this.setMessage(this.options.labels.noResults)),void this.emit("datatable.search",t,this.searchData)):(this.update(),this.emit("datatable.search",t,this.searchData),this.wrapper.classList.remove("search-results"),!1))},e.prototype.page=function(t,e){return void 0===e&&(e=!1),t!==this.currentPage&&(isNaN(t)||(this.currentPage=t),!(t>this.pages.length||t<0)&&(this._renderPage(e),this._renderPager(),void this.emit("datatable.page",t)))},e.prototype.insert=function(t){var e=this,n=[];if(Array.isArray(t)){var i=this.data.headings.map((function(t){var e;return null!==(e=t.text)&&void 0!==e?e:String(t.data)}));t.forEach((function(t,s){var o=[];Object.entries(t).forEach((function(t){var n=t[0],r=t[1],a=i.indexOf(n);a>-1?o[a]=Se(r,e.columns.settings.columns[a]):e.hasHeadings||e.hasRows||0!==s||(o[i.length]=Se(r,e.columns.settings.columns[i.length]),i.push(n),e.data.headings.push(De(n)))})),n.push(o)}))}else be(t)&&(!t.headings||this.hasHeadings||this.hasRows?t.data&&Array.isArray(t.data)&&(n=t.data.map((function(t){return t.map((function(t,n){return Se(t,e.columns.settings.columns[n])}))}))):(this.data=Te(this.options.dataConvert,t,void 0,this.columns.settings),this.hasRows=Boolean(this.data.data.length),this.hasHeadings=Boolean(this.data.headings.length)));n.length&&(n.forEach((function(t){return e.data.data.push(t)})),this.hasRows=!0),this.hasHeadings=Boolean(this.data.headings.length),this.columns.settings.sort&&this.columns.sort(this.columns.settings.sort.column,this.columns.settings.sort.dir,!0),this.update(!0)},e.prototype.refresh=function(){this.options.searchable&&(this.input.value="",this.searching=""),this.currentPage=1,this.onFirstPage=!0,this.update(!0),this.emit("datatable.refresh")},e.prototype.print=function(){var t=we("table"),e=ue(this.id,this.data.headings,this.data.data.map((function(t,e){return{row:t,index:e}})),this.columns.settings,this.columns.widths,!1,this.options,{noColumnWidths:!0,unhideHeader:!0}),n=this.dd.diff({nodeName:"TABLE"},e);this.dd.apply(t,n);var i=window.open();i.document.body.appendChild(t),i.print()},e.prototype.setMessage=function(t){var e,n=this,i=this.data.headings.filter((function(t,e){var i;return!(null===(i=n.columns.settings.columns[e])||void 0===i?void 0:i.hidden)})),s=i.length||1;this.wrapper.classList.add(this.options.classes.empty),this.label&&(this.label.innerHTML=""),this.totalPages=0,this._renderPager();var o=structuredClone(this.virtualDOM),r=null===(e=o.childNodes)||void 0===e?void 0:e.find((function(t){return"TBODY"===t.nodeName}));r||(r={nodeName:"TBODY"},o.childNodes=[r]),r.childNodes=[{nodeName:"TR",childNodes:[{nodeName:"TD",attributes:{class:this.options.classes.empty,colspan:String(s)},childNodes:[{nodeName:"#text",data:t}]}]}];var a=this.dd.diff(this.virtualDOM,o);this.dd.apply(this.dom,a),this.virtualDOM=o},e.prototype.on=function(t,e){this.events[t]=this.events[t]||[],this.events[t].push(e)},e.prototype.off=function(t,e){t in this.events!=!1&&this.events[t].splice(this.events[t].indexOf(e),1)},e.prototype.emit=function(t){for(var e,n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];if(t in this.events!=!1)for(var s=0;s<this.events[t].length;s++)(e=this.events[t])[s].apply(e,n)},e}(),Re={classes:{row:"datatable-editor-row",form:"datatable-editor-form",item:"datatable-editor-item",menu:"datatable-editor-menu",save:"datatable-editor-save",block:"datatable-editor-block",close:"datatable-editor-close",inner:"datatable-editor-inner",input:"datatable-editor-input",label:"datatable-editor-label",modal:"datatable-editor-modal",action:"datatable-editor-action",header:"datatable-editor-header",wrapper:"datatable-editor-wrapper",editable:"datatable-editor-editable",container:"datatable-editor-container",separator:"datatable-editor-separator"},labels:{editCell:"Edit Cell",editRow:"Edit Row",removeRow:"Remove Row",reallyRemove:"Are you sure?"},hiddenColumns:!1,contextMenu:!0,clickEvent:"dblclick",excludeColumns:[],menuItems:[{text:function(t){return t.options.labels.editCell},action:function(t,e){if(t.event.target instanceof Element){var n=t.event.target.closest("td");return t.editCell(n)}}},{text:function(t){return t.options.labels.editRow},action:function(t,e){if(t.event.target instanceof Element){var n=t.event.target.closest("tr");return t.editRow(n)}}},{separator:!0},{text:function(t){return t.options.labels.removeRow},action:function(t,e){if(t.event.target instanceof Element&&confirm(t.options.labels.reallyRemove)){var n=t.event.target.closest("tr");t.removeRow(n)}}}]},ke=function(){function e(e,n){void 0===n&&(n={}),this.dt=e,this.options=t(t({},Re),n)}return e.prototype.init=function(){var t=this;this.initialized||(this.dt.wrapper.classList.add(this.options.classes.editable),this.options.contextMenu&&(this.container=we("div",{id:this.options.classes.container}),this.wrapper=we("div",{class:this.options.classes.wrapper}),this.menu=we("ul",{class:this.options.classes.menu}),this.options.menuItems&&this.options.menuItems.length&&this.options.menuItems.forEach((function(e){var n=we("li",{class:e.separator?t.options.classes.separator:t.options.classes.item});if(!e.separator){var i=we("a",{class:t.options.classes.action,href:e.url||"#",html:"function"==typeof e.text?e.text(t):e.text});n.appendChild(i),e.action&&"function"==typeof e.action&&i.addEventListener("click",(function(n){n.preventDefault(),e.action(t,n)}))}t.menu.appendChild(n)})),this.wrapper.appendChild(this.menu),this.container.appendChild(this.wrapper),this.update()),this.data={},this.closed=!0,this.editing=!1,this.editingRow=!1,this.editingCell=!1,this.bindEvents(),setTimeout((function(){t.initialized=!0,t.dt.emit("editable.init")}),10))},e.prototype.bindEvents=function(){var t,e,n,i=this;this.events={context:this.context.bind(this),update:this.update.bind(this),dismiss:this.dismiss.bind(this),keydown:this.keydown.bind(this),click:this.click.bind(this)},this.dt.dom.addEventListener(this.options.clickEvent,this.events.click),document.addEventListener("click",this.events.dismiss),document.addEventListener("keydown",this.events.keydown),this.options.contextMenu&&(this.dt.dom.addEventListener("contextmenu",this.events.context),this.events.reset=(t=function(){return i.events.update()},void 0===(e=50)&&(e=300),function(){clearTimeout(n),n=window.setTimeout((function(){return t()}),e)}),window.addEventListener("resize",this.events.reset),window.addEventListener("scroll",this.events.reset))},e.prototype.context=function(t){var e=t.target;if(e instanceof Element){this.event=t;var n=e.closest("tbody td");if(this.options.contextMenu&&!this.disabled&&n){t.preventDefault();var i=t.pageX,s=t.pageY;i>this.limits.x&&(i-=this.rect.width),s>this.limits.y&&(s-=this.rect.height),this.wrapper.style.top="".concat(s,"px"),this.wrapper.style.left="".concat(i,"px"),this.openMenu(),this.update()}}},e.prototype.click=function(t){var e=t.target;if(e instanceof Element)if(this.editing&&this.data&&this.editingCell)this.saveCell(this.data.input.value);else if(!this.editing){var n=e.closest("tbody td");n&&(this.editCell(n),t.preventDefault())}},e.prototype.keydown=function(t){this.modal?"Escape"===t.key?this.closeModal():"Enter"===t.key&&this.saveRow(this.data.inputs.map((function(t){return t.value.trim()})),this.data.row):this.editing&&this.data&&("Enter"===t.key?this.editingCell?this.saveCell(this.data.input.value):this.editingRow&&this.saveRow(this.data.inputs.map((function(t){return t.value.trim()})),this.data.row):"Escape"===t.key&&this.saveCell(this.data.content))},e.prototype.editCell=function(t){var e=this,n=Oe(t.cellIndex,this.dt.columns.settings.columns);if(this.options.excludeColumns.includes(n))this.closeMenu();else{var i=parseInt(t.parentElement.dataset.index,10),s=this.dt.data.data[i][n];this.data={cell:s,rowIndex:i,columnIndex:n,content:s.text||String(s.data)};var o=this.dt.data.headings[n].text||String(this.dt.data.headings[n].data),r=["<div class='".concat(this.options.classes.inner,"'>"),"<div class='".concat(this.options.classes.header,"'>"),"<h4>Editing cell</h4>","<button class='".concat(this.options.classes.close,"' type='button' data-editor-close>×</button>")," </div>","<div class='".concat(this.options.classes.block,"'>"),"<form class='".concat(this.options.classes.form,"'>"),"<div class='".concat(this.options.classes.row,"'>"),"<label class='".concat(this.options.classes.label,"'>").concat(xe(o),"</label>"),"<input class='".concat(this.options.classes.input,"' value='").concat(xe(s.text||String(s.data)||""),"' type='text'>"),"</div>","<div class='".concat(this.options.classes.row,"'>"),"<button class='".concat(this.options.classes.save,"' type='button' data-editor-save>Save</button>"),"</div>","</form>","</div>","</div>"].join(""),a=we("div",{class:this.options.classes.modal,html:r});this.modal=a,this.openModal(),this.editing=!0,this.editingCell=!0,this.data.input=a.querySelector("input[type=text]"),this.data.input.focus(),this.data.input.selectionStart=this.data.input.selectionEnd=this.data.input.value.length,a.addEventListener("click",(function(t){var n=t.target;n instanceof Element&&(n.hasAttribute("data-editor-close")?e.closeModal():n.hasAttribute("data-editor-save")&&e.saveCell(e.data.input.value))})),this.closeMenu()}},e.prototype.saveCell=function(t){var e=this.data.content;this.dt.data.data[this.data.rowIndex][this.data.columnIndex]={data:t.trim()},this.closeModal(),this.dt.update(!0),this.dt.emit("editable.save.cell",t,e,this.data.rowIndex,this.data.columnIndex),this.data={}},e.prototype.editRow=function(t){var e,n=this;if(t&&"TR"===t.nodeName&&!this.editing){var i=parseInt(t.dataset.index,10),s=this.dt.data.data[i],o=["<div class='".concat(this.options.classes.inner,"'>"),"<div class='".concat(this.options.classes.header,"'>"),"<h4>Editing row</h4>","<button class='".concat(this.options.classes.close,"' type='button' data-editor-close>×</button>")," </div>","<div class='".concat(this.options.classes.block,"'>"),"<form class='".concat(this.options.classes.form,"'>"),"<div class='".concat(this.options.classes.row,"'>"),"<button class='".concat(this.options.classes.save,"' type='button' data-editor-save>Save</button>"),"</div>","</form>","</div>","</div>"].join(""),r=we("div",{class:this.options.classes.modal,html:o}),a=r.firstElementChild;if(a){var c=null===(e=a.lastElementChild)||void 0===e?void 0:e.firstElementChild;if(c){s.forEach((function(t,e){var i=n.dt.columns.settings.columns[e]||{};if((!i.hidden||i.hidden&&n.options.hiddenColumns)&&!n.options.excludeColumns.includes(e)){var s=n.dt.data.headings[e].text||String(n.dt.data.headings[e].data);c.insertBefore(we("div",{class:n.options.classes.row,html:["<div class='".concat(n.options.classes.row,"'>"),"<label class='".concat(n.options.classes.label,"'>").concat(xe(s),"</label>"),"<input class='".concat(n.options.classes.input,"' value='").concat(xe(t.text||String(t.data)||""),"' type='text'>"),"</div>"].join("")}),c.lastElementChild)}})),this.modal=r,this.openModal();var l=Array.from(c.querySelectorAll("input[type=text]"));l.pop(),this.data={row:s,inputs:l,rowIndex:i},this.editing=!0,this.editingRow=!0,r.addEventListener("click",(function(t){var e=t.target;e instanceof Element&&(e.hasAttribute("data-editor-close")?n.closeModal():e.hasAttribute("data-editor-save")&&n.saveRow(n.data.inputs.map((function(t){return t.value.trim()})),n.data.row))})),this.closeMenu()}}}},e.prototype.saveRow=function(t,e){var n=e.map((function(t){var e;return null!==(e=t.text)&&void 0!==e?e:String(t.data)}));this.dt.data.data[this.data.rowIndex]=t.map((function(t){return{data:t}})),this.dt.update(!0),this.data={},this.closeModal(),this.dt.emit("editable.save.row",t,n,e)},e.prototype.openModal=function(){!this.editing&&this.modal&&document.body.appendChild(this.modal)},e.prototype.closeModal=function(){this.editing&&this.modal&&(document.body.removeChild(this.modal),this.modal=this.editing=this.editingRow=this.editingCell=!1)},e.prototype.removeRow=function(t){if(t&&"TR"===t.nodeName&&!this.editing){var e=parseInt(t.dataset.index,10);this.dt.rows.remove(e),this.closeMenu()}},e.prototype.update=function(){var t=window.scrollX||window.pageXOffset,e=window.scrollY||window.pageYOffset;this.rect=this.wrapper.getBoundingClientRect(),this.limits={x:window.innerWidth+t-this.rect.width,y:window.innerHeight+e-this.rect.height}},e.prototype.dismiss=function(t){var e=t.target;if(e instanceof Element){var n=!0;this.options.contextMenu&&(n=!this.wrapper.contains(e),this.editing&&(n=!this.wrapper.contains(e)&&e!==this.data.input)),n&&(this.editingCell&&this.saveCell(this.data.content),this.closeMenu())}},e.prototype.openMenu=function(){this.editing&&this.data&&this.editingCell&&this.saveCell(this.data.input.value),this.options.contextMenu&&(document.body.appendChild(this.container),this.closed=!1,this.dt.emit("editable.context.open"))},e.prototype.closeMenu=function(){this.options.contextMenu&&!this.closed&&(this.closed=!0,document.body.removeChild(this.container),this.dt.emit("editable.context.close"))},e.prototype.destroy=function(){this.dt.dom.removeEventListener(this.options.clickEvent,this.events.click),this.dt.dom.removeEventListener("contextmenu",this.events.context),document.removeEventListener("click",this.events.dismiss),document.removeEventListener("keydown",this.events.keydown),window.removeEventListener("resize",this.events.reset),window.removeEventListener("scroll",this.events.reset),document.body.contains(this.container)&&document.body.removeChild(this.container),this.initialized=!1},e}();exports.DataTable=Me,exports.convertCSV=function(e){var n;if(!be(e))return!1;var i=t(t({},{lineDelimiter:"\n",columnDelimiter:",",removeDoubleQuotes:!1}),e);if(i.data.length){n={data:[]};var s=i.data.split(i.lineDelimiter);if(s.length&&(i.headings&&(n.headings=s[0].split(i.columnDelimiter),i.removeDoubleQuotes&&(n.headings=n.headings.map((function(t){return t.trim().replace(/(^"|"$)/g,"")}))),s.shift()),s.forEach((function(t,e){n.data[e]=[];var s=t.split(i.columnDelimiter);s.length&&s.forEach((function(t){i.removeDoubleQuotes&&(t=t.trim().replace(/(^"|"$)/g,"")),n.data[e].push({data:t})}))}))),n)return n}return!1},exports.convertJSON=function(e){var n;if(!be(e))return!1;var i=t(t({},{data:""}),e);if(i.data.length||be(i.data)){var s=!!ye(i.data)&&JSON.parse(i.data);if(s?(n={headings:[],data:[]},s.forEach((function(t,e){n.data[e]=[],Object.entries(t).forEach((function(t){var i=t[0],s=t[1];n.headings.includes(i)||n.headings.push(i),(null==s?void 0:s.constructor)==Object?n.data[e].push(s):n.data[e].push({data:s})}))}))):console.warn("That's not valid JSON!"),n)return n}return!1},exports.createElement=we,exports.exportCSV=function(e,n){if(void 0===n&&(n={}),!e.hasHeadings&&!e.hasRows)return!1;if(!be(n))return!1;var i=t(t({},{download:!0,skipColumn:[],lineDelimiter:"\n",columnDelimiter:","}),n),s=function(t){var n;return!i.skipColumn.includes(t)&&!(null===(n=e.columns.settings.columns[t])||void 0===n?void 0:n.hidden)},o=[],r=e.data.headings.filter((function(t,e){return s(e)})).map((function(t){var e;return null!==(e=t.text)&&void 0!==e?e:t.data}));if(o[0]=r,i.selection)if(Array.isArray(i.selection))for(var a=0;a<i.selection.length;a++)o=o.concat(e.pages[i.selection[a]-1].map((function(t){return t.row.filter((function(t,e){return s(e)})).map((function(t){var e;return null!==(e=t.text)&&void 0!==e?e:t.data}))})));else o=o.concat(e.pages[i.selection-1].map((function(t){return t.row.filter((function(t,e){return s(e)})).map((function(t){var e;return null!==(e=t.text)&&void 0!==e?e:t.data}))})));else o=o.concat(e.data.data.map((function(t){return t.filter((function(t,e){return s(e)})).map((function(t){var e;return null!==(e=t.text)&&void 0!==e?e:t.data}))})));if(o.length){var c="";if(o.forEach((function(t){t.forEach((function(t){"string"==typeof t&&(t=(t=(t=(t=(t=t.trim()).replace(/\s{2,}/g," ")).replace(/\n/g,"  ")).replace(/"/g,'""')).replace(/#/g,"%23")).includes(",")&&(t='"'.concat(t,'"')),c+=t+i.columnDelimiter})),c=c.trim().substring(0,c.length-1),c+=i.lineDelimiter})),c=c.trim().substring(0,c.length-1),i.download){var l=document.createElement("a");l.href=encodeURI("data:text/csv;charset=utf-8,".concat(c)),l.download="".concat(i.filename||"datatable_export",".csv"),document.body.appendChild(l),l.click(),document.body.removeChild(l)}return c}return!1},exports.exportJSON=function(e,n){if(void 0===n&&(n={}),!e.hasHeadings&&!e.hasRows)return!1;if(!be(n))return!1;var i=t(t({},{download:!0,skipColumn:[],replacer:null,space:4}),n),s=function(t){var n;return!i.skipColumn.includes(t)&&!(null===(n=e.columns.settings.columns[t])||void 0===n?void 0:n.hidden)},o=[];if(i.selection)if(Array.isArray(i.selection))for(var r=0;r<i.selection.length;r++)o=o.concat(e.pages[i.selection[r]-1].map((function(t){return t.row.filter((function(t,e){return s(e)})).map((function(t){return"node"===t.type?t:t.data}))})));else o=o.concat(e.pages[i.selection-1].map((function(t){return t.row.filter((function(t,e){return s(e)})).map((function(t){return"node"===t.type?t:t.data}))})));else o=o.concat(e.data.data.map((function(t){return t.filter((function(t,e){return s(e)})).map((function(t){return"node"===t.type?t:t.data}))})));var a=e.data.headings.filter((function(t,e){return s(e)})).map((function(t){var e;return null!==(e=t.text)&&void 0!==e?e:String(t.data)}));if(o.length){var c=[];o.forEach((function(t,e){c[e]=c[e]||{},t.forEach((function(t,n){c[e][a[n]]=t}))}));var l=JSON.stringify(c,i.replacer,i.space);if(i.download){var d=new Blob([l],{type:"data:application/json;charset=utf-8"}),u=URL.createObjectURL(d),h=document.createElement("a");h.href=u,h.download="".concat(i.filename||"datatable_export",".json"),document.body.appendChild(h),h.click(),document.body.removeChild(h),URL.revokeObjectURL(u)}return l}return!1},exports.exportSQL=function(e,n){if(void 0===n&&(n={}),!e.hasHeadings&&!e.hasRows)return!1;if(!be(n))return!1;var i=t(t({},{download:!0,skipColumn:[],tableName:"myTable"}),n),s=function(t){var n;return!i.skipColumn.includes(t)&&!(null===(n=e.columns.settings.columns[t])||void 0===n?void 0:n.hidden)},o=[];if(i.selection)if(Array.isArray(i.selection))for(var r=0;r<i.selection.length;r++)o=o.concat(e.pages[i.selection[r]-1].map((function(t){return t.row.filter((function(t,e){return s(e)})).map((function(t){var e;return null!==(e=t.text)&&void 0!==e?e:t.data}))})));else o=o.concat(e.pages[i.selection-1].map((function(t){return t.row.filter((function(t,e){return s(e)})).map((function(t){var e;return null!==(e=t.text)&&void 0!==e?e:t.data}))})));else o=o.concat(e.data.data.map((function(t){return t.filter((function(t,e){return s(e)})).map((function(t){return t.data}))})));var a=e.data.headings.filter((function(t,e){return s(e)})).map((function(t){var e;return null!==(e=t.text)&&void 0!==e?e:String(t.data)}));if(o.length){var c="INSERT INTO `".concat(i.tableName,"` (");if(a.forEach((function(t){c+="`".concat(t,"`,")})),c=c.trim().substring(0,c.length-1),c+=") VALUES ",o.forEach((function(t){c+="(",t.forEach((function(t){c+="string"==typeof t?'"'.concat(t,'",'):"".concat(t,",")})),c=c.trim().substring(0,c.length-1),c+="),"})),c=c.trim().substring(0,c.length-1),c+=";",i.download&&(c="data:application/sql;charset=utf-8,".concat(c)),i.download){var l=document.createElement("a");l.href=encodeURI(c),l.download="".concat(i.filename||"datatable_export",".sql"),document.body.appendChild(l),l.click(),document.body.removeChild(l)}return c}return!1},exports.exportTXT=function(e,n){if(void 0===n&&(n={}),!e.hasHeadings&&!e.hasRows)return!1;if(!be(n))return!1;var i=t(t({},{download:!0,skipColumn:[],lineDelimiter:"\n",columnDelimiter:","}),n),s=function(t){var n;return!i.skipColumn.includes(t)&&!(null===(n=e.columns.settings.columns[t])||void 0===n?void 0:n.hidden)},o=[],r=e.data.headings.filter((function(t,e){return s(e)})).map((function(t){var e;return null!==(e=t.text)&&void 0!==e?e:t.data}));if(o[0]=r,i.selection)if(Array.isArray(i.selection))for(var a=0;a<i.selection.length;a++)o=o.concat(e.pages[i.selection[a]-1].map((function(t){return t.row.filter((function(t,e){return s(e)})).map((function(t){return t.data}))})));else o=o.concat(e.pages[i.selection-1].map((function(t){return t.row.filter((function(t,e){return s(e)})).map((function(t){return t.data}))})));else o=o.concat(e.data.data.map((function(t){return t.filter((function(t,e){return s(e)})).map((function(t){return t.data}))})));if(o.length){var c="";if(o.forEach((function(t){t.forEach((function(t){"string"==typeof t&&(t=(t=(t=(t=(t=t.trim()).replace(/\s{2,}/g," ")).replace(/\n/g,"  ")).replace(/"/g,'""')).replace(/#/g,"%23")).includes(",")&&(t='"'.concat(t,'"')),c+=t+i.columnDelimiter})),c=c.trim().substring(0,c.length-1),c+=i.lineDelimiter})),c=c.trim().substring(0,c.length-1),i.download&&(c="data:text/csv;charset=utf-8,".concat(c)),i.download){var l=document.createElement("a");l.href=encodeURI(c),l.download="".concat(i.filename||"datatable_export",".txt"),document.body.appendChild(l),l.click(),document.body.removeChild(l)}return c}return!1},exports.isJson=ye,exports.isObject=be,exports.makeEditable=function(t,e){void 0===e&&(e={});var n=new ke(t,e);return t.initialized?n.init():t.on("datatable.init",(function(){return n.init()})),n};


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
