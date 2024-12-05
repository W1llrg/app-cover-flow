import{_ as st,J as ot,r as be,i as it,o as at,t as z,v as te,x as P,K as ct,L as lt,M as we,y as Ee,N as ut,O as ft,d as dt,P as pt}from"./Cf5Yq7cy.js";function De(e,t){return function(){return e.apply(t,arguments)}}const{toString:ht}=Object.prototype,{getPrototypeOf:de}=Object,X=(e=>t=>{const n=ht.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),x=e=>(e=e.toLowerCase(),t=>X(t)===e),G=e=>t=>typeof t===e,{isArray:U}=Array,v=G("undefined");function mt(e){return e!==null&&!v(e)&&e.constructor!==null&&!v(e.constructor)&&_(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ke=x("ArrayBuffer");function yt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ke(e.buffer),t}const bt=G("string"),_=G("function"),Ue=G("number"),Z=e=>e!==null&&typeof e=="object",wt=e=>e===!0||e===!1,J=e=>{if(X(e)!=="object")return!1;const t=de(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Et=x("Date"),gt=x("File"),Rt=x("Blob"),St=x("FileList"),Ot=e=>Z(e)&&_(e.pipe),Tt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||_(e.append)&&((t=X(e))==="formdata"||t==="object"&&_(e.toString)&&e.toString()==="[object FormData]"))},At=x("URLSearchParams"),[_t,xt,Ct,Nt]=["ReadableStream","Request","Response","Headers"].map(x),Pt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function I(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),U(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function je(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const B=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,qe=e=>!v(e)&&e!==B;function ie(){const{caseless:e}=qe(this)&&this||{},t={},n=(r,s)=>{const o=e&&je(t,s)||s;J(t[o])&&J(r)?t[o]=ie(t[o],r):J(r)?t[o]=ie({},r):U(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&I(arguments[r],n);return t}const Ft=(e,t,n,{allOwnKeys:r}={})=>(I(t,(s,o)=>{n&&_(s)?e[o]=De(s,n):e[o]=s},{allOwnKeys:r}),e),Lt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Bt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Dt=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&de(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Ut=e=>{if(!e)return null;if(U(e))return e;let t=e.length;if(!Ue(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},jt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&de(Uint8Array)),qt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},vt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},It=x("HTMLFormElement"),Mt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),ge=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Ht=x("RegExp"),ve=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};I(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},zt=e=>{ve(e,(t,n)=>{if(_(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(_(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Jt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return U(e)?r(e):r(String(e).split(t)),n},$t=()=>{},Vt=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,ne="abcdefghijklmnopqrstuvwxyz",Re="0123456789",Ie={DIGIT:Re,ALPHA:ne,ALPHA_DIGIT:ne+ne.toUpperCase()+Re},Kt=(e=16,t=Ie.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Wt(e){return!!(e&&_(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Xt=e=>{const t=new Array(10),n=(r,s)=>{if(Z(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=U(r)?[]:{};return I(r,(i,c)=>{const f=n(i,s+1);!v(f)&&(o[c]=f)}),t[s]=void 0,o}}return r};return n(e,0)},Gt=x("AsyncFunction"),Zt=e=>e&&(Z(e)||_(e))&&_(e.then)&&_(e.catch),Me=((e,t)=>e?setImmediate:t?((n,r)=>(B.addEventListener("message",({source:s,data:o})=>{s===B&&o===n&&r.length&&r.shift()()},!1),s=>{r.push(s),B.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",_(B.postMessage)),Qt=typeof queueMicrotask<"u"?queueMicrotask.bind(B):typeof process<"u"&&process.nextTick||Me,a={isArray:U,isArrayBuffer:ke,isBuffer:mt,isFormData:Tt,isArrayBufferView:yt,isString:bt,isNumber:Ue,isBoolean:wt,isObject:Z,isPlainObject:J,isReadableStream:_t,isRequest:xt,isResponse:Ct,isHeaders:Nt,isUndefined:v,isDate:Et,isFile:gt,isBlob:Rt,isRegExp:Ht,isFunction:_,isStream:Ot,isURLSearchParams:At,isTypedArray:jt,isFileList:St,forEach:I,merge:ie,extend:Ft,trim:Pt,stripBOM:Lt,inherits:Bt,toFlatObject:Dt,kindOf:X,kindOfTest:x,endsWith:kt,toArray:Ut,forEachEntry:qt,matchAll:vt,isHTMLForm:It,hasOwnProperty:ge,hasOwnProp:ge,reduceDescriptors:ve,freezeMethods:zt,toObjectSet:Jt,toCamelCase:Mt,noop:$t,toFiniteNumber:Vt,findKey:je,global:B,isContextDefined:qe,ALPHABET:Ie,generateString:Kt,isSpecCompliantForm:Wt,toJSONObject:Xt,isAsyncFn:Gt,isThenable:Zt,setImmediate:Me,asap:Qt};function y(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}a.inherits(y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.status}}});const He=y.prototype,ze={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ze[e]={value:e}});Object.defineProperties(y,ze);Object.defineProperty(He,"isAxiosError",{value:!0});y.from=(e,t,n,r,s,o)=>{const i=Object.create(He);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},c=>c!=="isAxiosError"),y.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Yt=null;function ae(e){return a.isPlainObject(e)||a.isArray(e)}function Je(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Se(e,t,n){return e?e.concat(t).map(function(s,o){return s=Je(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function en(e){return a.isArray(e)&&!e.some(ae)}const tn=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function Q(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,h){return!a.isUndefined(h[m])});const r=n.metaTokens,s=n.visitor||u,o=n.dots,i=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function l(d){if(d===null)return"";if(a.isDate(d))return d.toISOString();if(!f&&a.isBlob(d))throw new y("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(d)||a.isTypedArray(d)?f&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function u(d,m,h){let E=d;if(d&&!h&&typeof d=="object"){if(a.endsWith(m,"{}"))m=r?m:m.slice(0,-2),d=JSON.stringify(d);else if(a.isArray(d)&&en(d)||(a.isFileList(d)||a.endsWith(m,"[]"))&&(E=a.toArray(d)))return m=Je(m),E.forEach(function(S,N){!(a.isUndefined(S)||S===null)&&t.append(i===!0?Se([m],N,o):i===null?m:m+"[]",l(S))}),!1}return ae(d)?!0:(t.append(Se(h,m,o),l(d)),!1)}const p=[],b=Object.assign(tn,{defaultVisitor:u,convertValue:l,isVisitable:ae});function w(d,m){if(!a.isUndefined(d)){if(p.indexOf(d)!==-1)throw Error("Circular reference detected in "+m.join("."));p.push(d),a.forEach(d,function(E,R){(!(a.isUndefined(E)||E===null)&&s.call(t,E,a.isString(R)?R.trim():R,m,b))===!0&&w(E,m?m.concat(R):[R])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return w(e),t}function Oe(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function pe(e,t){this._pairs=[],e&&Q(e,this,t)}const $e=pe.prototype;$e.append=function(t,n){this._pairs.push([t,n])};$e.toString=function(t){const n=t?function(r){return t.call(this,r,Oe)}:Oe;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function nn(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ve(e,t,n){if(!t)return e;const r=n&&n.encode||nn;a.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new pe(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Te{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Ke={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},rn=typeof URLSearchParams<"u"?URLSearchParams:pe,sn=typeof FormData<"u"?FormData:null,on=typeof Blob<"u"?Blob:null,an={isBrowser:!0,classes:{URLSearchParams:rn,FormData:sn,Blob:on},protocols:["http","https","file","blob","url","data"]},he=typeof window<"u"&&typeof document<"u",ce=typeof navigator=="object"&&navigator||void 0,cn=he&&(!ce||["ReactNative","NativeScript","NS"].indexOf(ce.product)<0),ln=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",un=he&&window.location.href||"http://localhost",fn=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:he,hasStandardBrowserEnv:cn,hasStandardBrowserWebWorkerEnv:ln,navigator:ce,origin:un},Symbol.toStringTag,{value:"Module"})),O={...fn,...an};function dn(e,t){return Q(e,new O.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return O.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function pn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function hn(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function We(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),f=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,f?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=hn(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(pn(r),s,n,0)}),n}return null}function mn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const M={transitional:Ke,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(We(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return dn(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return Q(c?{"files[]":t}:t,f&&new f,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),mn(t)):t}],transformResponse:[function(t){const n=this.transitional||M.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?y.from(c,y.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{M.headers[e]={}});const yn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),bn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&yn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Ae=Symbol("internals");function q(e){return e&&String(e).trim().toLowerCase()}function $(e){return e===!1||e==null?e:a.isArray(e)?e.map($):String(e)}function wn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const En=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function re(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function gn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Rn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class A{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,f,l){const u=q(f);if(!u)throw new Error("header name must be a non-empty string");const p=a.findKey(s,u);(!p||s[p]===void 0||l===!0||l===void 0&&s[p]!==!1)&&(s[p||f]=$(c))}const i=(c,f)=>a.forEach(c,(l,u)=>o(l,u,f));if(a.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(a.isString(t)&&(t=t.trim())&&!En(t))i(bn(t),n);else if(a.isHeaders(t))for(const[c,f]of t.entries())o(f,c,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=q(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return wn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=q(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||re(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=q(i),i){const c=a.findKey(r,i);c&&(!n||re(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||re(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=$(s),delete n[o];return}const c=t?gn(o):String(o).trim();c!==o&&delete n[o],n[c]=$(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Ae]=this[Ae]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=q(i);r[c]||(Rn(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}A.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(A.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(A);function se(e,t){const n=this||M,r=t||n,s=A.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Xe(e){return!!(e&&e.__CANCEL__)}function j(e,t,n){y.call(this,e??"canceled",y.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(j,y,{__CANCEL__:!0});function Ge(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new y("Request failed with status code "+n.status,[y.ERR_BAD_REQUEST,y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Sn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function On(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(f){const l=Date.now(),u=r[o];i||(i=l),n[s]=f,r[s]=l;let p=o,b=0;for(;p!==s;)b+=n[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-i<t)return;const w=u&&l-u;return w?Math.round(b*1e3/w):void 0}}function Tn(e,t){let n=0,r=1e3/t,s,o;const i=(l,u=Date.now())=>{n=u,s=null,o&&(clearTimeout(o),o=null),e.apply(null,l)};return[(...l)=>{const u=Date.now(),p=u-n;p>=r?i(l,u):(s=l,o||(o=setTimeout(()=>{o=null,i(s)},r-p)))},()=>s&&i(s)]}const K=(e,t,n=3)=>{let r=0;const s=On(50,250);return Tn(o=>{const i=o.loaded,c=o.lengthComputable?o.total:void 0,f=i-r,l=s(f),u=i<=c;r=i;const p={loaded:i,total:c,progress:c?i/c:void 0,bytes:f,rate:l||void 0,estimated:l&&c&&u?(c-i)/l:void 0,event:o,lengthComputable:c!=null,[t?"download":"upload"]:!0};e(p)},n)},_e=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},xe=e=>(...t)=>a.asap(()=>e(...t)),An=O.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,O.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(O.origin),O.navigator&&/(msie|trident)/i.test(O.navigator.userAgent)):()=>!0,_n=O.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function xn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Cn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Ze(e,t){return e&&!xn(t)?Cn(e,t):t}const Ce=e=>e instanceof A?{...e}:e;function k(e,t){t=t||{};const n={};function r(l,u,p,b){return a.isPlainObject(l)&&a.isPlainObject(u)?a.merge.call({caseless:b},l,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(l,u,p,b){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l,p,b)}else return r(l,u,p,b)}function o(l,u){if(!a.isUndefined(u))return r(void 0,u)}function i(l,u){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function c(l,u,p){if(p in t)return r(l,u);if(p in e)return r(void 0,l)}const f={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(l,u,p)=>s(Ce(l),Ce(u),p,!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const p=f[u]||s,b=p(e[u],t[u],u);a.isUndefined(b)&&p!==c||(n[u]=b)}),n}const Qe=e=>{const t=k({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:o,headers:i,auth:c}=t;t.headers=i=A.from(i),t.url=Ve(Ze(t.baseURL,t.url),e.params,e.paramsSerializer),c&&i.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let f;if(a.isFormData(n)){if(O.hasStandardBrowserEnv||O.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((f=i.getContentType())!==!1){const[l,...u]=f?f.split(";").map(p=>p.trim()).filter(Boolean):[];i.setContentType([l||"multipart/form-data",...u].join("; "))}}if(O.hasStandardBrowserEnv&&(r&&a.isFunction(r)&&(r=r(t)),r||r!==!1&&An(t.url))){const l=s&&o&&_n.read(o);l&&i.set(s,l)}return t},Nn=typeof XMLHttpRequest<"u",Pn=Nn&&function(e){return new Promise(function(n,r){const s=Qe(e);let o=s.data;const i=A.from(s.headers).normalize();let{responseType:c,onUploadProgress:f,onDownloadProgress:l}=s,u,p,b,w,d;function m(){w&&w(),d&&d(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let h=new XMLHttpRequest;h.open(s.method.toUpperCase(),s.url,!0),h.timeout=s.timeout;function E(){if(!h)return;const S=A.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),T={data:!c||c==="text"||c==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:S,config:e,request:h};Ge(function(L){n(L),m()},function(L){r(L),m()},T),h=null}"onloadend"in h?h.onloadend=E:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(E)},h.onabort=function(){h&&(r(new y("Request aborted",y.ECONNABORTED,e,h)),h=null)},h.onerror=function(){r(new y("Network Error",y.ERR_NETWORK,e,h)),h=null},h.ontimeout=function(){let N=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const T=s.transitional||Ke;s.timeoutErrorMessage&&(N=s.timeoutErrorMessage),r(new y(N,T.clarifyTimeoutError?y.ETIMEDOUT:y.ECONNABORTED,e,h)),h=null},o===void 0&&i.setContentType(null),"setRequestHeader"in h&&a.forEach(i.toJSON(),function(N,T){h.setRequestHeader(T,N)}),a.isUndefined(s.withCredentials)||(h.withCredentials=!!s.withCredentials),c&&c!=="json"&&(h.responseType=s.responseType),l&&([b,d]=K(l,!0),h.addEventListener("progress",b)),f&&h.upload&&([p,w]=K(f),h.upload.addEventListener("progress",p),h.upload.addEventListener("loadend",w)),(s.cancelToken||s.signal)&&(u=S=>{h&&(r(!S||S.type?new j(null,e,h):S),h.abort(),h=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const R=Sn(s.url);if(R&&O.protocols.indexOf(R)===-1){r(new y("Unsupported protocol "+R+":",y.ERR_BAD_REQUEST,e));return}h.send(o||null)})},Fn=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,s;const o=function(l){if(!s){s=!0,c();const u=l instanceof Error?l:this.reason;r.abort(u instanceof y?u:new j(u instanceof Error?u.message:u))}};let i=t&&setTimeout(()=>{i=null,o(new y(`timeout ${t} of ms exceeded`,y.ETIMEDOUT))},t);const c=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(l=>{l.unsubscribe?l.unsubscribe(o):l.removeEventListener("abort",o)}),e=null)};e.forEach(l=>l.addEventListener("abort",o));const{signal:f}=r;return f.unsubscribe=()=>a.asap(c),f}},Ln=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},Bn=async function*(e,t){for await(const n of Dn(e))yield*Ln(n,t)},Dn=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Ne=(e,t,n,r)=>{const s=Bn(e,t);let o=0,i,c=f=>{i||(i=!0,r&&r(f))};return new ReadableStream({async pull(f){try{const{done:l,value:u}=await s.next();if(l){c(),f.close();return}let p=u.byteLength;if(n){let b=o+=p;n(b)}f.enqueue(new Uint8Array(u))}catch(l){throw c(l),l}},cancel(f){return c(f),s.return()}},{highWaterMark:2})},Y=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Ye=Y&&typeof ReadableStream=="function",kn=Y&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),et=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Un=Ye&&et(()=>{let e=!1;const t=new Request(O.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),Pe=64*1024,le=Ye&&et(()=>a.isReadableStream(new Response("").body)),W={stream:le&&(e=>e.body)};Y&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!W[t]&&(W[t]=a.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new y(`Response type '${t}' is not supported`,y.ERR_NOT_SUPPORT,r)})})})(new Response);const jn=async e=>{if(e==null)return 0;if(a.isBlob(e))return e.size;if(a.isSpecCompliantForm(e))return(await new Request(O.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(a.isArrayBufferView(e)||a.isArrayBuffer(e))return e.byteLength;if(a.isURLSearchParams(e)&&(e=e+""),a.isString(e))return(await kn(e)).byteLength},qn=async(e,t)=>{const n=a.toFiniteNumber(e.getContentLength());return n??jn(t)},vn=Y&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:o,timeout:i,onDownloadProgress:c,onUploadProgress:f,responseType:l,headers:u,withCredentials:p="same-origin",fetchOptions:b}=Qe(e);l=l?(l+"").toLowerCase():"text";let w=Fn([s,o&&o.toAbortSignal()],i),d;const m=w&&w.unsubscribe&&(()=>{w.unsubscribe()});let h;try{if(f&&Un&&n!=="get"&&n!=="head"&&(h=await qn(u,r))!==0){let T=new Request(t,{method:"POST",body:r,duplex:"half"}),F;if(a.isFormData(r)&&(F=T.headers.get("content-type"))&&u.setContentType(F),T.body){const[L,H]=_e(h,K(xe(f)));r=Ne(T.body,Pe,L,H)}}a.isString(p)||(p=p?"include":"omit");const E="credentials"in Request.prototype;d=new Request(t,{...b,signal:w,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:E?p:void 0});let R=await fetch(d);const S=le&&(l==="stream"||l==="response");if(le&&(c||S&&m)){const T={};["status","statusText","headers"].forEach(ye=>{T[ye]=R[ye]});const F=a.toFiniteNumber(R.headers.get("content-length")),[L,H]=c&&_e(F,K(xe(c),!0))||[];R=new Response(Ne(R.body,Pe,L,()=>{H&&H(),m&&m()}),T)}l=l||"text";let N=await W[a.findKey(W,l)||"text"](R,e);return!S&&m&&m(),await new Promise((T,F)=>{Ge(T,F,{data:N,headers:A.from(R.headers),status:R.status,statusText:R.statusText,config:e,request:d})})}catch(E){throw m&&m(),E&&E.name==="TypeError"&&/fetch/i.test(E.message)?Object.assign(new y("Network Error",y.ERR_NETWORK,e,d),{cause:E.cause||E}):y.from(E,E&&E.code,e,d)}}),ue={http:Yt,xhr:Pn,fetch:vn};a.forEach(ue,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Fe=e=>`- ${e}`,In=e=>a.isFunction(e)||e===null||e===!1,tt={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!In(n)&&(r=ue[(i=String(n)).toLowerCase()],r===void 0))throw new y(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,f])=>`adapter ${c} `+(f===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Fe).join(`
`):" "+Fe(o[0]):"as no adapter specified";throw new y("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:ue};function oe(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new j(null,e)}function Le(e){return oe(e),e.headers=A.from(e.headers),e.data=se.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),tt.getAdapter(e.adapter||M.adapter)(e).then(function(r){return oe(e),r.data=se.call(e,e.transformResponse,r),r.headers=A.from(r.headers),r},function(r){return Xe(r)||(oe(e),r&&r.response&&(r.response.data=se.call(e,e.transformResponse,r.response),r.response.headers=A.from(r.response.headers))),Promise.reject(r)})}const nt="1.7.9",ee={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ee[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Be={};ee.transitional=function(t,n,r){function s(o,i){return"[Axios v"+nt+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new y(s(i," has been removed"+(n?" in "+n:"")),y.ERR_DEPRECATED);return n&&!Be[i]&&(Be[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};ee.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function Mn(e,t,n){if(typeof e!="object")throw new y("options must be an object",y.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],f=c===void 0||i(c,o,e);if(f!==!0)throw new y("option "+o+" must be "+f,y.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new y("Unknown option "+o,y.ERR_BAD_OPTION)}}const V={assertOptions:Mn,validators:ee},C=V.validators;class D{constructor(t){this.defaults=t,this.interceptors={request:new Te,response:new Te}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=k(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&V.assertOptions(r,{silentJSONParsing:C.transitional(C.boolean),forcedJSONParsing:C.transitional(C.boolean),clarifyTimeoutError:C.transitional(C.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:V.assertOptions(s,{encode:C.function,serialize:C.function},!0)),V.assertOptions(n,{baseUrl:C.spelling("baseURL"),withXsrfToken:C.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],d=>{delete o[d]}),n.headers=A.concat(i,o);const c=[];let f=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(f=f&&m.synchronous,c.unshift(m.fulfilled,m.rejected))});const l=[];this.interceptors.response.forEach(function(m){l.push(m.fulfilled,m.rejected)});let u,p=0,b;if(!f){const d=[Le.bind(this),void 0];for(d.unshift.apply(d,c),d.push.apply(d,l),b=d.length,u=Promise.resolve(n);p<b;)u=u.then(d[p++],d[p++]);return u}b=c.length;let w=n;for(p=0;p<b;){const d=c[p++],m=c[p++];try{w=d(w)}catch(h){m.call(this,h);break}}try{u=Le.call(this,w)}catch(d){return Promise.reject(d)}for(p=0,b=l.length;p<b;)u=u.then(l[p++],l[p++]);return u}getUri(t){t=k(this.defaults,t);const n=Ze(t.baseURL,t.url);return Ve(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){D.prototype[t]=function(n,r){return this.request(k(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(k(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}D.prototype[t]=n(),D.prototype[t+"Form"]=n(!0)});class me{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new j(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new me(function(s){t=s}),cancel:t}}}function Hn(e){return function(n){return e.apply(null,n)}}function zn(e){return a.isObject(e)&&e.isAxiosError===!0}const fe={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(fe).forEach(([e,t])=>{fe[t]=e});function rt(e){const t=new D(e),n=De(D.prototype.request,t);return a.extend(n,D.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return rt(k(e,s))},n}const g=rt(M);g.Axios=D;g.CanceledError=j;g.CancelToken=me;g.isCancel=Xe;g.VERSION=nt;g.toFormData=Q;g.AxiosError=y;g.Cancel=g.CanceledError;g.all=function(t){return Promise.all(t)};g.spread=Hn;g.isAxiosError=zn;g.mergeConfig=k;g.AxiosHeaders=A;g.formToJSON=e=>We(a.isHTMLForm(e)?new FormData(e):e);g.getAdapter=tt.getAdapter;g.HttpStatusCode=fe;g.default=g;const Jn={class:"coverflow-container"},$n=["src","alt"],Vn={class:"controls"},Kn=["disabled"],Wn=["disabled"],Xn={class:"album-info"},Gn={__name:"CoverFlow",async setup(e){let t,n,r;[t,n]=ot(()=>g.get("http://localhost:3000/api/song/getAll").then(b=>{r=b.data.songs,console.log(r)})),await t,n();let s=[];for(let b of r){const w={title:b.name,artist:b.artist,image:b.cover};s.push(w)}const o=be(0),i=be(null),c=it(()=>s[o.value]),f=b=>{const w=b-o.value,d=w*45,m=Math.abs(w)*50,h=1-Math.abs(w)*.3;return{transform:`translateX(${w*50}%) rotateY(${d}deg) translateZ(${-m}px)`,opacity:h,zIndex:s.length-Math.abs(w)}},l=()=>{o.value<s.length-1&&o.value++},u=()=>{o.value>0&&o.value--},p=b=>{b.key==="ArrowRight"?l():b.key==="ArrowLeft"&&u()};return at(()=>{i.value.focus()}),(b,w)=>(z(),te("div",Jn,[P("div",{class:"coverflow",ref_key:"coverflowRef",ref:i,tabindex:"0",onKeydown:p},[(z(!0),te(ct,null,lt(we(s),(d,m)=>(z(),te("div",{key:m,class:ut(["cover",{center:m===o.value}]),style:ft(f(m))},[P("img",{src:d.image,alt:d.title},null,8,$n),w[0]||(w[0]=P("div",{class:"reflection"},null,-1))],6))),128))],544),P("div",Vn,[P("button",{onClick:u,disabled:o.value===0},"< Previous",8,Kn),P("button",{onClick:l,disabled:o.value===we(s).length-1},"Next >",8,Wn)]),P("div",Xn,[P("h2",null,Ee(c.value.title),1),P("p",null,Ee(c.value.artist),1)])]))}},Zn=st(Gn,[["__scopeId","data-v-dea944ec"]]),Yn=dt({__name:"index",setup(e){return(t,n)=>(z(),pt(Zn))}});export{Yn as default};