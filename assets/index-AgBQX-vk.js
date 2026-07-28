function wh(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const a=Object.getOwnPropertyDescriptor(r,o);a&&Object.defineProperty(e,o,a.get?a:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();var ll=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Dc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $c={exports:{}},ii={},Bc={exports:{}},P={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wr=Symbol.for("react.element"),bh=Symbol.for("react.portal"),kh=Symbol.for("react.fragment"),qh=Symbol.for("react.strict_mode"),Sh=Symbol.for("react.profiler"),jh=Symbol.for("react.provider"),_h=Symbol.for("react.context"),Ah=Symbol.for("react.forward_ref"),Ch=Symbol.for("react.suspense"),Eh=Symbol.for("react.memo"),Th=Symbol.for("react.lazy"),cl=Symbol.iterator;function Mh(e){return e===null||typeof e!="object"?null:(e=cl&&e[cl]||e["@@iterator"],typeof e=="function"?e:null)}var Wc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Uc=Object.assign,Hc={};function Qn(e,t,n){this.props=e,this.context=t,this.refs=Hc,this.updater=n||Wc}Qn.prototype.isReactComponent={};Qn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Qn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Vc(){}Vc.prototype=Qn.prototype;function es(e,t,n){this.props=e,this.context=t,this.refs=Hc,this.updater=n||Wc}var ts=es.prototype=new Vc;ts.constructor=es;Uc(ts,Qn.prototype);ts.isPureReactComponent=!0;var ul=Array.isArray,Gc=Object.prototype.hasOwnProperty,ns={current:null},Kc={key:!0,ref:!0,__self:!0,__source:!0};function Qc(e,t,n){var r,o={},a=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(a=""+t.key),t)Gc.call(t,r)&&!Kc.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:Wr,type:e,key:a,ref:s,props:o,_owner:ns.current}}function Ih(e,t){return{$$typeof:Wr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function rs(e){return typeof e=="object"&&e!==null&&e.$$typeof===Wr}function Nh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var dl=/\/+/g;function Ei(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Nh(""+e.key):t.toString(36)}function yo(e,t,n,r,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Wr:case bh:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+Ei(s,0):r,ul(o)?(n="",e!=null&&(n=e.replace(dl,"$&/")+"/"),yo(o,t,n,"",function(u){return u})):o!=null&&(rs(o)&&(o=Ih(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(dl,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",ul(e))for(var l=0;l<e.length;l++){a=e[l];var c=r+Ei(a,l);s+=yo(a,t,n,c,o)}else if(c=Mh(e),typeof c=="function")for(e=c.call(e),l=0;!(a=e.next()).done;)a=a.value,c=r+Ei(a,l++),s+=yo(a,t,n,c,o);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Jr(e,t,n){if(e==null)return e;var r=[],o=0;return yo(e,r,"","",function(a){return t.call(n,a,o++)}),r}function Oh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ce={current:null},vo={transition:null},Lh={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:vo,ReactCurrentOwner:ns};function Jc(){throw Error("act(...) is not supported in production builds of React.")}P.Children={map:Jr,forEach:function(e,t,n){Jr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Jr(e,function(){t++}),t},toArray:function(e){return Jr(e,function(t){return t})||[]},only:function(e){if(!rs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};P.Component=Qn;P.Fragment=kh;P.Profiler=Sh;P.PureComponent=es;P.StrictMode=qh;P.Suspense=Ch;P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lh;P.act=Jc;P.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Uc({},e.props),o=e.key,a=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,s=ns.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Gc.call(t,c)&&!Kc.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Wr,type:e.type,key:o,ref:a,props:r,_owner:s}};P.createContext=function(e){return e={$$typeof:_h,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:jh,_context:e},e.Consumer=e};P.createElement=Qc;P.createFactory=function(e){var t=Qc.bind(null,e);return t.type=e,t};P.createRef=function(){return{current:null}};P.forwardRef=function(e){return{$$typeof:Ah,render:e}};P.isValidElement=rs;P.lazy=function(e){return{$$typeof:Th,_payload:{_status:-1,_result:e},_init:Oh}};P.memo=function(e,t){return{$$typeof:Eh,type:e,compare:t===void 0?null:t}};P.startTransition=function(e){var t=vo.transition;vo.transition={};try{e()}finally{vo.transition=t}};P.unstable_act=Jc;P.useCallback=function(e,t){return Ce.current.useCallback(e,t)};P.useContext=function(e){return Ce.current.useContext(e)};P.useDebugValue=function(){};P.useDeferredValue=function(e){return Ce.current.useDeferredValue(e)};P.useEffect=function(e,t){return Ce.current.useEffect(e,t)};P.useId=function(){return Ce.current.useId()};P.useImperativeHandle=function(e,t,n){return Ce.current.useImperativeHandle(e,t,n)};P.useInsertionEffect=function(e,t){return Ce.current.useInsertionEffect(e,t)};P.useLayoutEffect=function(e,t){return Ce.current.useLayoutEffect(e,t)};P.useMemo=function(e,t){return Ce.current.useMemo(e,t)};P.useReducer=function(e,t,n){return Ce.current.useReducer(e,t,n)};P.useRef=function(e){return Ce.current.useRef(e)};P.useState=function(e){return Ce.current.useState(e)};P.useSyncExternalStore=function(e,t,n){return Ce.current.useSyncExternalStore(e,t,n)};P.useTransition=function(){return Ce.current.useTransition()};P.version="18.3.1";Bc.exports=P;var q=Bc.exports;const wt=Dc(q),Fh=wh({__proto__:null,default:wt},[q]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ph=q,Rh=Symbol.for("react.element"),zh=Symbol.for("react.fragment"),Dh=Object.prototype.hasOwnProperty,$h=Ph.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bh={key:!0,ref:!0,__self:!0,__source:!0};function Yc(e,t,n){var r,o={},a=null,s=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Dh.call(t,r)&&!Bh.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Rh,type:e,key:a,ref:s,props:o,_owner:$h.current}}ii.Fragment=zh;ii.jsx=Yc;ii.jsxs=Yc;$c.exports=ii;var i=$c.exports,ra={},Zc={exports:{}},De={},Xc={exports:{}},eu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,O){var L=C.length;C.push(O);e:for(;0<L;){var U=L-1>>>1,$=C[U];if(0<o($,O))C[U]=O,C[L]=$,L=U;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var O=C[0],L=C.pop();if(L!==O){C[0]=L;e:for(var U=0,$=C.length,wn=$>>>1;U<wn;){var xe=2*(U+1)-1,ht=C[xe],We=xe+1,pt=C[We];if(0>o(ht,L))We<$&&0>o(pt,ht)?(C[U]=pt,C[We]=L,U=We):(C[U]=ht,C[xe]=L,U=xe);else if(We<$&&0>o(pt,L))C[U]=pt,C[We]=L,U=We;else break e}}return O}function o(C,O){var L=C.sortIndex-O.sortIndex;return L!==0?L:C.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var c=[],u=[],p=1,f=null,g=3,x=!1,k=!1,b=!1,j=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(C){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=C)r(u),O.sortIndex=O.expirationTime,t(c,O);else break;O=n(u)}}function y(C){if(b=!1,h(C),!k)if(n(c)!==null)k=!0,tr(v);else{var O=n(u);O!==null&&xn(y,O.startTime-C)}}function v(C,O){k=!1,b&&(b=!1,m(A),A=-1),x=!0;var L=g;try{for(h(O),f=n(c);f!==null&&(!(f.expirationTime>O)||C&&!W());){var U=f.callback;if(typeof U=="function"){f.callback=null,g=f.priorityLevel;var $=U(f.expirationTime<=O);O=e.unstable_now(),typeof $=="function"?f.callback=$:f===n(c)&&r(c),h(O)}else r(c);f=n(c)}if(f!==null)var wn=!0;else{var xe=n(u);xe!==null&&xn(y,xe.startTime-O),wn=!1}return wn}finally{f=null,g=L,x=!1}}var w=!1,S=null,A=-1,E=5,M=-1;function W(){return!(e.unstable_now()-M<E)}function Te(){if(S!==null){var C=e.unstable_now();M=C;var O=!0;try{O=S(!0,C)}finally{O?Ct():(w=!1,S=null)}}else w=!1}var Ct;if(typeof d=="function")Ct=function(){d(Te)};else if(typeof MessageChannel<"u"){var er=new MessageChannel,ji=er.port2;er.port1.onmessage=Te,Ct=function(){ji.postMessage(null)}}else Ct=function(){j(Te,0)};function tr(C){S=C,w||(w=!0,Ct())}function xn(C,O){A=j(function(){C(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){k||x||(k=!0,tr(v))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(C){switch(g){case 1:case 2:case 3:var O=3;break;default:O=g}var L=g;g=O;try{return C()}finally{g=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,O){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var L=g;g=C;try{return O()}finally{g=L}},e.unstable_scheduleCallback=function(C,O,L){var U=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?U+L:U):L=U,C){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=L+$,C={id:p++,callback:O,priorityLevel:C,startTime:L,expirationTime:$,sortIndex:-1},L>U?(C.sortIndex=L,t(u,C),n(c)===null&&C===n(u)&&(b?(m(A),A=-1):b=!0,xn(y,L-U))):(C.sortIndex=$,t(c,C),k||x||(k=!0,tr(v))),C},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(C){var O=g;return function(){var L=g;g=O;try{return C.apply(this,arguments)}finally{g=L}}}})(eu);Xc.exports=eu;var Wh=Xc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uh=q,ze=Wh;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tu=new Set,Sr={};function yn(e,t){$n(e,t),$n(e+"Capture",t)}function $n(e,t){for(Sr[e]=t,e=0;e<t.length;e++)tu.add(t[e])}var kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),oa=Object.prototype.hasOwnProperty,Hh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hl={},pl={};function Vh(e){return oa.call(pl,e)?!0:oa.call(hl,e)?!1:Hh.test(e)?pl[e]=!0:(hl[e]=!0,!1)}function Gh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Kh(e,t,n,r){if(t===null||typeof t>"u"||Gh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ee(e,t,n,r,o,a,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=s}var ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ve[e]=new Ee(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ve[t]=new Ee(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ve[e]=new Ee(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ve[e]=new Ee(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ve[e]=new Ee(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ve[e]=new Ee(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ve[e]=new Ee(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ve[e]=new Ee(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ve[e]=new Ee(e,5,!1,e.toLowerCase(),null,!1,!1)});var os=/[\-:]([a-z])/g;function is(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(os,is);ve[t]=new Ee(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(os,is);ve[t]=new Ee(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(os,is);ve[t]=new Ee(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ve[e]=new Ee(e,1,!1,e.toLowerCase(),null,!1,!1)});ve.xlinkHref=new Ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ve[e]=new Ee(e,1,!1,e.toLowerCase(),null,!0,!0)});function as(e,t,n,r){var o=ve.hasOwnProperty(t)?ve[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Kh(t,n,o,r)&&(n=null),r||o===null?Vh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var _t=Uh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yr=Symbol.for("react.element"),qn=Symbol.for("react.portal"),Sn=Symbol.for("react.fragment"),ss=Symbol.for("react.strict_mode"),ia=Symbol.for("react.profiler"),nu=Symbol.for("react.provider"),ru=Symbol.for("react.context"),ls=Symbol.for("react.forward_ref"),aa=Symbol.for("react.suspense"),sa=Symbol.for("react.suspense_list"),cs=Symbol.for("react.memo"),Mt=Symbol.for("react.lazy"),ou=Symbol.for("react.offscreen"),fl=Symbol.iterator;function nr(e){return e===null||typeof e!="object"?null:(e=fl&&e[fl]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,Ti;function dr(e){if(Ti===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ti=t&&t[1]||""}return`
`+Ti+e}var Mi=!1;function Ii(e,t){if(!e||Mi)return"";Mi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),a=r.stack.split(`
`),s=o.length-1,l=a.length-1;1<=s&&0<=l&&o[s]!==a[l];)l--;for(;1<=s&&0<=l;s--,l--)if(o[s]!==a[l]){if(s!==1||l!==1)do if(s--,l--,0>l||o[s]!==a[l]){var c=`
`+o[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=l);break}}}finally{Mi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?dr(e):""}function Qh(e){switch(e.tag){case 5:return dr(e.type);case 16:return dr("Lazy");case 13:return dr("Suspense");case 19:return dr("SuspenseList");case 0:case 2:case 15:return e=Ii(e.type,!1),e;case 11:return e=Ii(e.type.render,!1),e;case 1:return e=Ii(e.type,!0),e;default:return""}}function la(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Sn:return"Fragment";case qn:return"Portal";case ia:return"Profiler";case ss:return"StrictMode";case aa:return"Suspense";case sa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ru:return(e.displayName||"Context")+".Consumer";case nu:return(e._context.displayName||"Context")+".Provider";case ls:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case cs:return t=e.displayName||null,t!==null?t:la(e.type)||"Memo";case Mt:t=e._payload,e=e._init;try{return la(e(t))}catch{}}return null}function Jh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return la(t);case 8:return t===ss?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Qt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function iu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Yh(e){var t=iu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,a.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Zr(e){e._valueTracker||(e._valueTracker=Yh(e))}function au(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=iu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function To(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ca(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function gl(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Qt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function su(e,t){t=t.checked,t!=null&&as(e,"checked",t,!1)}function ua(e,t){su(e,t);var n=Qt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?da(e,t.type,n):t.hasOwnProperty("defaultValue")&&da(e,t.type,Qt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ml(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function da(e,t,n){(t!=="number"||To(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var hr=Array.isArray;function Ln(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Qt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ha(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function yl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(hr(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Qt(n)}}function lu(e,t){var n=Qt(t.value),r=Qt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function vl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function cu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?cu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Xr,uu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Xr=Xr||document.createElement("div"),Xr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Xr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function jr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var gr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Zh=["Webkit","ms","Moz","O"];Object.keys(gr).forEach(function(e){Zh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),gr[t]=gr[e]})});function du(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||gr.hasOwnProperty(e)&&gr[e]?(""+t).trim():t+"px"}function hu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=du(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Xh=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fa(e,t){if(t){if(Xh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function ga(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ma=null;function us(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ya=null,Fn=null,Pn=null;function xl(e){if(e=Vr(e)){if(typeof ya!="function")throw Error(_(280));var t=e.stateNode;t&&(t=ui(t),ya(e.stateNode,e.type,t))}}function pu(e){Fn?Pn?Pn.push(e):Pn=[e]:Fn=e}function fu(){if(Fn){var e=Fn,t=Pn;if(Pn=Fn=null,xl(e),t)for(e=0;e<t.length;e++)xl(t[e])}}function gu(e,t){return e(t)}function mu(){}var Ni=!1;function yu(e,t,n){if(Ni)return e(t,n);Ni=!0;try{return gu(e,t,n)}finally{Ni=!1,(Fn!==null||Pn!==null)&&(mu(),fu())}}function _r(e,t){var n=e.stateNode;if(n===null)return null;var r=ui(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var va=!1;if(kt)try{var rr={};Object.defineProperty(rr,"passive",{get:function(){va=!0}}),window.addEventListener("test",rr,rr),window.removeEventListener("test",rr,rr)}catch{va=!1}function ep(e,t,n,r,o,a,s,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var mr=!1,Mo=null,Io=!1,xa=null,tp={onError:function(e){mr=!0,Mo=e}};function np(e,t,n,r,o,a,s,l,c){mr=!1,Mo=null,ep.apply(tp,arguments)}function rp(e,t,n,r,o,a,s,l,c){if(np.apply(this,arguments),mr){if(mr){var u=Mo;mr=!1,Mo=null}else throw Error(_(198));Io||(Io=!0,xa=u)}}function vn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function vu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function wl(e){if(vn(e)!==e)throw Error(_(188))}function op(e){var t=e.alternate;if(!t){if(t=vn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return wl(o),e;if(a===r)return wl(o),t;a=a.sibling}throw Error(_(188))}if(n.return!==r.return)n=o,r=a;else{for(var s=!1,l=o.child;l;){if(l===n){s=!0,n=o,r=a;break}if(l===r){s=!0,r=o,n=a;break}l=l.sibling}if(!s){for(l=a.child;l;){if(l===n){s=!0,n=a,r=o;break}if(l===r){s=!0,r=a,n=o;break}l=l.sibling}if(!s)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function xu(e){return e=op(e),e!==null?wu(e):null}function wu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=wu(e);if(t!==null)return t;e=e.sibling}return null}var bu=ze.unstable_scheduleCallback,bl=ze.unstable_cancelCallback,ip=ze.unstable_shouldYield,ap=ze.unstable_requestPaint,ne=ze.unstable_now,sp=ze.unstable_getCurrentPriorityLevel,ds=ze.unstable_ImmediatePriority,ku=ze.unstable_UserBlockingPriority,No=ze.unstable_NormalPriority,lp=ze.unstable_LowPriority,qu=ze.unstable_IdlePriority,ai=null,ct=null;function cp(e){if(ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(ai,e,void 0,(e.current.flags&128)===128)}catch{}}var rt=Math.clz32?Math.clz32:hp,up=Math.log,dp=Math.LN2;function hp(e){return e>>>=0,e===0?32:31-(up(e)/dp|0)|0}var eo=64,to=4194304;function pr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Oo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~o;l!==0?r=pr(l):(a&=s,a!==0&&(r=pr(a)))}else s=n&~o,s!==0?r=pr(s):a!==0&&(r=pr(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-rt(t),o=1<<n,r|=e[n],t&=~o;return r}function pp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var s=31-rt(a),l=1<<s,c=o[s];c===-1?(!(l&n)||l&r)&&(o[s]=pp(l,t)):c<=t&&(e.expiredLanes|=l),a&=~l}}function wa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Su(){var e=eo;return eo<<=1,!(eo&4194240)&&(eo=64),e}function Oi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ur(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-rt(t),e[t]=n}function gp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-rt(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}function hs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-rt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var B=0;function ju(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var _u,ps,Au,Cu,Eu,ba=!1,no=[],Dt=null,$t=null,Bt=null,Ar=new Map,Cr=new Map,Ot=[],mp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kl(e,t){switch(e){case"focusin":case"focusout":Dt=null;break;case"dragenter":case"dragleave":$t=null;break;case"mouseover":case"mouseout":Bt=null;break;case"pointerover":case"pointerout":Ar.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cr.delete(t.pointerId)}}function or(e,t,n,r,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},t!==null&&(t=Vr(t),t!==null&&ps(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function yp(e,t,n,r,o){switch(t){case"focusin":return Dt=or(Dt,e,t,n,r,o),!0;case"dragenter":return $t=or($t,e,t,n,r,o),!0;case"mouseover":return Bt=or(Bt,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return Ar.set(a,or(Ar.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,Cr.set(a,or(Cr.get(a)||null,e,t,n,r,o)),!0}return!1}function Tu(e){var t=an(e.target);if(t!==null){var n=vn(t);if(n!==null){if(t=n.tag,t===13){if(t=vu(n),t!==null){e.blockedOn=t,Eu(e.priority,function(){Au(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ka(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ma=r,n.target.dispatchEvent(r),ma=null}else return t=Vr(n),t!==null&&ps(t),e.blockedOn=n,!1;t.shift()}return!0}function ql(e,t,n){xo(e)&&n.delete(t)}function vp(){ba=!1,Dt!==null&&xo(Dt)&&(Dt=null),$t!==null&&xo($t)&&($t=null),Bt!==null&&xo(Bt)&&(Bt=null),Ar.forEach(ql),Cr.forEach(ql)}function ir(e,t){e.blockedOn===t&&(e.blockedOn=null,ba||(ba=!0,ze.unstable_scheduleCallback(ze.unstable_NormalPriority,vp)))}function Er(e){function t(o){return ir(o,e)}if(0<no.length){ir(no[0],e);for(var n=1;n<no.length;n++){var r=no[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Dt!==null&&ir(Dt,e),$t!==null&&ir($t,e),Bt!==null&&ir(Bt,e),Ar.forEach(t),Cr.forEach(t),n=0;n<Ot.length;n++)r=Ot[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ot.length&&(n=Ot[0],n.blockedOn===null);)Tu(n),n.blockedOn===null&&Ot.shift()}var Rn=_t.ReactCurrentBatchConfig,Lo=!0;function xp(e,t,n,r){var o=B,a=Rn.transition;Rn.transition=null;try{B=1,fs(e,t,n,r)}finally{B=o,Rn.transition=a}}function wp(e,t,n,r){var o=B,a=Rn.transition;Rn.transition=null;try{B=4,fs(e,t,n,r)}finally{B=o,Rn.transition=a}}function fs(e,t,n,r){if(Lo){var o=ka(e,t,n,r);if(o===null)Ui(e,t,r,Fo,n),kl(e,r);else if(yp(o,e,t,n,r))r.stopPropagation();else if(kl(e,r),t&4&&-1<mp.indexOf(e)){for(;o!==null;){var a=Vr(o);if(a!==null&&_u(a),a=ka(e,t,n,r),a===null&&Ui(e,t,r,Fo,n),a===o)break;o=a}o!==null&&r.stopPropagation()}else Ui(e,t,r,null,n)}}var Fo=null;function ka(e,t,n,r){if(Fo=null,e=us(r),e=an(e),e!==null)if(t=vn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=vu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fo=e,null}function Mu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sp()){case ds:return 1;case ku:return 4;case No:case lp:return 16;case qu:return 536870912;default:return 16}default:return 16}}var Pt=null,gs=null,wo=null;function Iu(){if(wo)return wo;var e,t=gs,n=t.length,r,o="value"in Pt?Pt.value:Pt.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[a-r];r++);return wo=o.slice(e,1<r?1-r:void 0)}function bo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ro(){return!0}function Sl(){return!1}function $e(e){function t(n,r,o,a,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ro:Sl,this.isPropagationStopped=Sl,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ro)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ro)},persist:function(){},isPersistent:ro}),t}var Jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ms=$e(Jn),Hr=Z({},Jn,{view:0,detail:0}),bp=$e(Hr),Li,Fi,ar,si=Z({},Hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ys,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ar&&(ar&&e.type==="mousemove"?(Li=e.screenX-ar.screenX,Fi=e.screenY-ar.screenY):Fi=Li=0,ar=e),Li)},movementY:function(e){return"movementY"in e?e.movementY:Fi}}),jl=$e(si),kp=Z({},si,{dataTransfer:0}),qp=$e(kp),Sp=Z({},Hr,{relatedTarget:0}),Pi=$e(Sp),jp=Z({},Jn,{animationName:0,elapsedTime:0,pseudoElement:0}),_p=$e(jp),Ap=Z({},Jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cp=$e(Ap),Ep=Z({},Jn,{data:0}),_l=$e(Ep),Tp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ip={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Np(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ip[e])?!!t[e]:!1}function ys(){return Np}var Op=Z({},Hr,{key:function(e){if(e.key){var t=Tp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=bo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ys,charCode:function(e){return e.type==="keypress"?bo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?bo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Lp=$e(Op),Fp=Z({},si,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Al=$e(Fp),Pp=Z({},Hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ys}),Rp=$e(Pp),zp=Z({},Jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dp=$e(zp),$p=Z({},si,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bp=$e($p),Wp=[9,13,27,32],vs=kt&&"CompositionEvent"in window,yr=null;kt&&"documentMode"in document&&(yr=document.documentMode);var Up=kt&&"TextEvent"in window&&!yr,Nu=kt&&(!vs||yr&&8<yr&&11>=yr),Cl=" ",El=!1;function Ou(e,t){switch(e){case"keyup":return Wp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jn=!1;function Hp(e,t){switch(e){case"compositionend":return Lu(t);case"keypress":return t.which!==32?null:(El=!0,Cl);case"textInput":return e=t.data,e===Cl&&El?null:e;default:return null}}function Vp(e,t){if(jn)return e==="compositionend"||!vs&&Ou(e,t)?(e=Iu(),wo=gs=Pt=null,jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Nu&&t.locale!=="ko"?null:t.data;default:return null}}var Gp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Gp[e.type]:t==="textarea"}function Fu(e,t,n,r){pu(r),t=Po(t,"onChange"),0<t.length&&(n=new ms("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var vr=null,Tr=null;function Kp(e){Gu(e,0)}function li(e){var t=Cn(e);if(au(t))return e}function Qp(e,t){if(e==="change")return t}var Pu=!1;if(kt){var Ri;if(kt){var zi="oninput"in document;if(!zi){var Ml=document.createElement("div");Ml.setAttribute("oninput","return;"),zi=typeof Ml.oninput=="function"}Ri=zi}else Ri=!1;Pu=Ri&&(!document.documentMode||9<document.documentMode)}function Il(){vr&&(vr.detachEvent("onpropertychange",Ru),Tr=vr=null)}function Ru(e){if(e.propertyName==="value"&&li(Tr)){var t=[];Fu(t,Tr,e,us(e)),yu(Kp,t)}}function Jp(e,t,n){e==="focusin"?(Il(),vr=t,Tr=n,vr.attachEvent("onpropertychange",Ru)):e==="focusout"&&Il()}function Yp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return li(Tr)}function Zp(e,t){if(e==="click")return li(t)}function Xp(e,t){if(e==="input"||e==="change")return li(t)}function ef(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var it=typeof Object.is=="function"?Object.is:ef;function Mr(e,t){if(it(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!oa.call(t,o)||!it(e[o],t[o]))return!1}return!0}function Nl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ol(e,t){var n=Nl(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Nl(n)}}function zu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?zu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Du(){for(var e=window,t=To();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=To(e.document)}return t}function xs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function tf(e){var t=Du(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&zu(n.ownerDocument.documentElement,n)){if(r!==null&&xs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=r.end===void 0?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=Ol(n,a);var s=Ol(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var nf=kt&&"documentMode"in document&&11>=document.documentMode,_n=null,qa=null,xr=null,Sa=!1;function Ll(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sa||_n==null||_n!==To(r)||(r=_n,"selectionStart"in r&&xs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xr&&Mr(xr,r)||(xr=r,r=Po(qa,"onSelect"),0<r.length&&(t=new ms("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=_n)))}function oo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var An={animationend:oo("Animation","AnimationEnd"),animationiteration:oo("Animation","AnimationIteration"),animationstart:oo("Animation","AnimationStart"),transitionend:oo("Transition","TransitionEnd")},Di={},$u={};kt&&($u=document.createElement("div").style,"AnimationEvent"in window||(delete An.animationend.animation,delete An.animationiteration.animation,delete An.animationstart.animation),"TransitionEvent"in window||delete An.transitionend.transition);function ci(e){if(Di[e])return Di[e];if(!An[e])return e;var t=An[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $u)return Di[e]=t[n];return e}var Bu=ci("animationend"),Wu=ci("animationiteration"),Uu=ci("animationstart"),Hu=ci("transitionend"),Vu=new Map,Fl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yt(e,t){Vu.set(e,t),yn(t,[e])}for(var $i=0;$i<Fl.length;$i++){var Bi=Fl[$i],rf=Bi.toLowerCase(),of=Bi[0].toUpperCase()+Bi.slice(1);Yt(rf,"on"+of)}Yt(Bu,"onAnimationEnd");Yt(Wu,"onAnimationIteration");Yt(Uu,"onAnimationStart");Yt("dblclick","onDoubleClick");Yt("focusin","onFocus");Yt("focusout","onBlur");Yt(Hu,"onTransitionEnd");$n("onMouseEnter",["mouseout","mouseover"]);$n("onMouseLeave",["mouseout","mouseover"]);$n("onPointerEnter",["pointerout","pointerover"]);$n("onPointerLeave",["pointerout","pointerover"]);yn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yn("onBeforeInput",["compositionend","keypress","textInput","paste"]);yn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),af=new Set("cancel close invalid load scroll toggle".split(" ").concat(fr));function Pl(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,rp(r,t,void 0,e),e.currentTarget=null}function Gu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==a&&o.isPropagationStopped())break e;Pl(o,l,u),a=c}else for(s=0;s<r.length;s++){if(l=r[s],c=l.instance,u=l.currentTarget,l=l.listener,c!==a&&o.isPropagationStopped())break e;Pl(o,l,u),a=c}}}if(Io)throw e=xa,Io=!1,xa=null,e}function V(e,t){var n=t[Ea];n===void 0&&(n=t[Ea]=new Set);var r=e+"__bubble";n.has(r)||(Ku(t,e,2,!1),n.add(r))}function Wi(e,t,n){var r=0;t&&(r|=4),Ku(n,e,r,t)}var io="_reactListening"+Math.random().toString(36).slice(2);function Ir(e){if(!e[io]){e[io]=!0,tu.forEach(function(n){n!=="selectionchange"&&(af.has(n)||Wi(n,!1,e),Wi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[io]||(t[io]=!0,Wi("selectionchange",!1,t))}}function Ku(e,t,n,r){switch(Mu(t)){case 1:var o=xp;break;case 4:o=wp;break;default:o=fs}n=o.bind(null,t,n,e),o=void 0,!va||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ui(e,t,n,r,o){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;s=s.return}for(;l!==null;){if(s=an(l),s===null)return;if(c=s.tag,c===5||c===6){r=a=s;continue e}l=l.parentNode}}r=r.return}yu(function(){var u=a,p=us(n),f=[];e:{var g=Vu.get(e);if(g!==void 0){var x=ms,k=e;switch(e){case"keypress":if(bo(n)===0)break e;case"keydown":case"keyup":x=Lp;break;case"focusin":k="focus",x=Pi;break;case"focusout":k="blur",x=Pi;break;case"beforeblur":case"afterblur":x=Pi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=jl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=qp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Rp;break;case Bu:case Wu:case Uu:x=_p;break;case Hu:x=Dp;break;case"scroll":x=bp;break;case"wheel":x=Bp;break;case"copy":case"cut":case"paste":x=Cp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Al}var b=(t&4)!==0,j=!b&&e==="scroll",m=b?g!==null?g+"Capture":null:g;b=[];for(var d=u,h;d!==null;){h=d;var y=h.stateNode;if(h.tag===5&&y!==null&&(h=y,m!==null&&(y=_r(d,m),y!=null&&b.push(Nr(d,y,h)))),j)break;d=d.return}0<b.length&&(g=new x(g,k,null,n,p),f.push({event:g,listeners:b}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&n!==ma&&(k=n.relatedTarget||n.fromElement)&&(an(k)||k[qt]))break e;if((x||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,x?(k=n.relatedTarget||n.toElement,x=u,k=k?an(k):null,k!==null&&(j=vn(k),k!==j||k.tag!==5&&k.tag!==6)&&(k=null)):(x=null,k=u),x!==k)){if(b=jl,y="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(b=Al,y="onPointerLeave",m="onPointerEnter",d="pointer"),j=x==null?g:Cn(x),h=k==null?g:Cn(k),g=new b(y,d+"leave",x,n,p),g.target=j,g.relatedTarget=h,y=null,an(p)===u&&(b=new b(m,d+"enter",k,n,p),b.target=h,b.relatedTarget=j,y=b),j=y,x&&k)t:{for(b=x,m=k,d=0,h=b;h;h=bn(h))d++;for(h=0,y=m;y;y=bn(y))h++;for(;0<d-h;)b=bn(b),d--;for(;0<h-d;)m=bn(m),h--;for(;d--;){if(b===m||m!==null&&b===m.alternate)break t;b=bn(b),m=bn(m)}b=null}else b=null;x!==null&&Rl(f,g,x,b,!1),k!==null&&j!==null&&Rl(f,j,k,b,!0)}}e:{if(g=u?Cn(u):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var v=Qp;else if(Tl(g))if(Pu)v=Xp;else{v=Yp;var w=Jp}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(v=Zp);if(v&&(v=v(e,u))){Fu(f,v,n,p);break e}w&&w(e,g,u),e==="focusout"&&(w=g._wrapperState)&&w.controlled&&g.type==="number"&&da(g,"number",g.value)}switch(w=u?Cn(u):window,e){case"focusin":(Tl(w)||w.contentEditable==="true")&&(_n=w,qa=u,xr=null);break;case"focusout":xr=qa=_n=null;break;case"mousedown":Sa=!0;break;case"contextmenu":case"mouseup":case"dragend":Sa=!1,Ll(f,n,p);break;case"selectionchange":if(nf)break;case"keydown":case"keyup":Ll(f,n,p)}var S;if(vs)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else jn?Ou(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(Nu&&n.locale!=="ko"&&(jn||A!=="onCompositionStart"?A==="onCompositionEnd"&&jn&&(S=Iu()):(Pt=p,gs="value"in Pt?Pt.value:Pt.textContent,jn=!0)),w=Po(u,A),0<w.length&&(A=new _l(A,e,null,n,p),f.push({event:A,listeners:w}),S?A.data=S:(S=Lu(n),S!==null&&(A.data=S)))),(S=Up?Hp(e,n):Vp(e,n))&&(u=Po(u,"onBeforeInput"),0<u.length&&(p=new _l("onBeforeInput","beforeinput",null,n,p),f.push({event:p,listeners:u}),p.data=S))}Gu(f,t)})}function Nr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Po(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=_r(e,n),a!=null&&r.unshift(Nr(e,a,o)),a=_r(e,t),a!=null&&r.push(Nr(e,a,o))),e=e.return}return r}function bn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Rl(e,t,n,r,o){for(var a=t._reactName,s=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,o?(c=_r(n,a),c!=null&&s.unshift(Nr(n,c,l))):o||(c=_r(n,a),c!=null&&s.push(Nr(n,c,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var sf=/\r\n?/g,lf=/\u0000|\uFFFD/g;function zl(e){return(typeof e=="string"?e:""+e).replace(sf,`
`).replace(lf,"")}function ao(e,t,n){if(t=zl(t),zl(e)!==t&&n)throw Error(_(425))}function Ro(){}var ja=null,_a=null;function Aa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ca=typeof setTimeout=="function"?setTimeout:void 0,cf=typeof clearTimeout=="function"?clearTimeout:void 0,Dl=typeof Promise=="function"?Promise:void 0,uf=typeof queueMicrotask=="function"?queueMicrotask:typeof Dl<"u"?function(e){return Dl.resolve(null).then(e).catch(df)}:Ca;function df(e){setTimeout(function(){throw e})}function Hi(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Er(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Er(t)}function Wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $l(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Yn=Math.random().toString(36).slice(2),lt="__reactFiber$"+Yn,Or="__reactProps$"+Yn,qt="__reactContainer$"+Yn,Ea="__reactEvents$"+Yn,hf="__reactListeners$"+Yn,pf="__reactHandles$"+Yn;function an(e){var t=e[lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[qt]||n[lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$l(e);e!==null;){if(n=e[lt])return n;e=$l(e)}return t}e=n,n=e.parentNode}return null}function Vr(e){return e=e[lt]||e[qt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Cn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function ui(e){return e[Or]||null}var Ta=[],En=-1;function Zt(e){return{current:e}}function K(e){0>En||(e.current=Ta[En],Ta[En]=null,En--)}function H(e,t){En++,Ta[En]=e.current,e.current=t}var Jt={},Se=Zt(Jt),Ne=Zt(!1),dn=Jt;function Bn(e,t){var n=e.type.contextTypes;if(!n)return Jt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in n)o[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Oe(e){return e=e.childContextTypes,e!=null}function zo(){K(Ne),K(Se)}function Bl(e,t,n){if(Se.current!==Jt)throw Error(_(168));H(Se,t),H(Ne,n)}function Qu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(_(108,Jh(e)||"Unknown",o));return Z({},n,r)}function Do(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Jt,dn=Se.current,H(Se,e),H(Ne,Ne.current),!0}function Wl(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=Qu(e,t,dn),r.__reactInternalMemoizedMergedChildContext=e,K(Ne),K(Se),H(Se,e)):K(Ne),H(Ne,n)}var gt=null,di=!1,Vi=!1;function Ju(e){gt===null?gt=[e]:gt.push(e)}function ff(e){di=!0,Ju(e)}function Xt(){if(!Vi&&gt!==null){Vi=!0;var e=0,t=B;try{var n=gt;for(B=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}gt=null,di=!1}catch(o){throw gt!==null&&(gt=gt.slice(e+1)),bu(ds,Xt),o}finally{B=t,Vi=!1}}return null}var Tn=[],Mn=0,$o=null,Bo=0,Ue=[],He=0,hn=null,vt=1,xt="";function rn(e,t){Tn[Mn++]=Bo,Tn[Mn++]=$o,$o=e,Bo=t}function Yu(e,t,n){Ue[He++]=vt,Ue[He++]=xt,Ue[He++]=hn,hn=e;var r=vt;e=xt;var o=32-rt(r)-1;r&=~(1<<o),n+=1;var a=32-rt(t)+o;if(30<a){var s=o-o%5;a=(r&(1<<s)-1).toString(32),r>>=s,o-=s,vt=1<<32-rt(t)+o|n<<o|r,xt=a+e}else vt=1<<a|n<<o|r,xt=e}function ws(e){e.return!==null&&(rn(e,1),Yu(e,1,0))}function bs(e){for(;e===$o;)$o=Tn[--Mn],Tn[Mn]=null,Bo=Tn[--Mn],Tn[Mn]=null;for(;e===hn;)hn=Ue[--He],Ue[He]=null,xt=Ue[--He],Ue[He]=null,vt=Ue[--He],Ue[He]=null}var Re=null,Pe=null,Q=!1,tt=null;function Zu(e,t){var n=Ve(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ul(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Re=e,Pe=Wt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Re=e,Pe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=hn!==null?{id:vt,overflow:xt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ve(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Re=e,Pe=null,!0):!1;default:return!1}}function Ma(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ia(e){if(Q){var t=Pe;if(t){var n=t;if(!Ul(e,t)){if(Ma(e))throw Error(_(418));t=Wt(n.nextSibling);var r=Re;t&&Ul(e,t)?Zu(r,n):(e.flags=e.flags&-4097|2,Q=!1,Re=e)}}else{if(Ma(e))throw Error(_(418));e.flags=e.flags&-4097|2,Q=!1,Re=e}}}function Hl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Re=e}function so(e){if(e!==Re)return!1;if(!Q)return Hl(e),Q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Aa(e.type,e.memoizedProps)),t&&(t=Pe)){if(Ma(e))throw Xu(),Error(_(418));for(;t;)Zu(e,t),t=Wt(t.nextSibling)}if(Hl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Pe=Wt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Pe=null}}else Pe=Re?Wt(e.stateNode.nextSibling):null;return!0}function Xu(){for(var e=Pe;e;)e=Wt(e.nextSibling)}function Wn(){Pe=Re=null,Q=!1}function ks(e){tt===null?tt=[e]:tt.push(e)}var gf=_t.ReactCurrentBatchConfig;function sr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var o=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(s){var l=o.refs;s===null?delete l[a]:l[a]=s},t._stringRef=a,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function lo(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Vl(e){var t=e._init;return t(e._payload)}function ed(e){function t(m,d){if(e){var h=m.deletions;h===null?(m.deletions=[d],m.flags|=16):h.push(d)}}function n(m,d){if(!e)return null;for(;d!==null;)t(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function o(m,d){return m=Gt(m,d),m.index=0,m.sibling=null,m}function a(m,d,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<d?(m.flags|=2,d):h):(m.flags|=2,d)):(m.flags|=1048576,d)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,d,h,y){return d===null||d.tag!==6?(d=Xi(h,m.mode,y),d.return=m,d):(d=o(d,h),d.return=m,d)}function c(m,d,h,y){var v=h.type;return v===Sn?p(m,d,h.props.children,y,h.key):d!==null&&(d.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===Mt&&Vl(v)===d.type)?(y=o(d,h.props),y.ref=sr(m,d,h),y.return=m,y):(y=Co(h.type,h.key,h.props,null,m.mode,y),y.ref=sr(m,d,h),y.return=m,y)}function u(m,d,h,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=ea(h,m.mode,y),d.return=m,d):(d=o(d,h.children||[]),d.return=m,d)}function p(m,d,h,y,v){return d===null||d.tag!==7?(d=un(h,m.mode,y,v),d.return=m,d):(d=o(d,h),d.return=m,d)}function f(m,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Xi(""+d,m.mode,h),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Yr:return h=Co(d.type,d.key,d.props,null,m.mode,h),h.ref=sr(m,null,d),h.return=m,h;case qn:return d=ea(d,m.mode,h),d.return=m,d;case Mt:var y=d._init;return f(m,y(d._payload),h)}if(hr(d)||nr(d))return d=un(d,m.mode,h,null),d.return=m,d;lo(m,d)}return null}function g(m,d,h,y){var v=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return v!==null?null:l(m,d,""+h,y);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Yr:return h.key===v?c(m,d,h,y):null;case qn:return h.key===v?u(m,d,h,y):null;case Mt:return v=h._init,g(m,d,v(h._payload),y)}if(hr(h)||nr(h))return v!==null?null:p(m,d,h,y,null);lo(m,h)}return null}function x(m,d,h,y,v){if(typeof y=="string"&&y!==""||typeof y=="number")return m=m.get(h)||null,l(d,m,""+y,v);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Yr:return m=m.get(y.key===null?h:y.key)||null,c(d,m,y,v);case qn:return m=m.get(y.key===null?h:y.key)||null,u(d,m,y,v);case Mt:var w=y._init;return x(m,d,h,w(y._payload),v)}if(hr(y)||nr(y))return m=m.get(h)||null,p(d,m,y,v,null);lo(d,y)}return null}function k(m,d,h,y){for(var v=null,w=null,S=d,A=d=0,E=null;S!==null&&A<h.length;A++){S.index>A?(E=S,S=null):E=S.sibling;var M=g(m,S,h[A],y);if(M===null){S===null&&(S=E);break}e&&S&&M.alternate===null&&t(m,S),d=a(M,d,A),w===null?v=M:w.sibling=M,w=M,S=E}if(A===h.length)return n(m,S),Q&&rn(m,A),v;if(S===null){for(;A<h.length;A++)S=f(m,h[A],y),S!==null&&(d=a(S,d,A),w===null?v=S:w.sibling=S,w=S);return Q&&rn(m,A),v}for(S=r(m,S);A<h.length;A++)E=x(S,m,A,h[A],y),E!==null&&(e&&E.alternate!==null&&S.delete(E.key===null?A:E.key),d=a(E,d,A),w===null?v=E:w.sibling=E,w=E);return e&&S.forEach(function(W){return t(m,W)}),Q&&rn(m,A),v}function b(m,d,h,y){var v=nr(h);if(typeof v!="function")throw Error(_(150));if(h=v.call(h),h==null)throw Error(_(151));for(var w=v=null,S=d,A=d=0,E=null,M=h.next();S!==null&&!M.done;A++,M=h.next()){S.index>A?(E=S,S=null):E=S.sibling;var W=g(m,S,M.value,y);if(W===null){S===null&&(S=E);break}e&&S&&W.alternate===null&&t(m,S),d=a(W,d,A),w===null?v=W:w.sibling=W,w=W,S=E}if(M.done)return n(m,S),Q&&rn(m,A),v;if(S===null){for(;!M.done;A++,M=h.next())M=f(m,M.value,y),M!==null&&(d=a(M,d,A),w===null?v=M:w.sibling=M,w=M);return Q&&rn(m,A),v}for(S=r(m,S);!M.done;A++,M=h.next())M=x(S,m,A,M.value,y),M!==null&&(e&&M.alternate!==null&&S.delete(M.key===null?A:M.key),d=a(M,d,A),w===null?v=M:w.sibling=M,w=M);return e&&S.forEach(function(Te){return t(m,Te)}),Q&&rn(m,A),v}function j(m,d,h,y){if(typeof h=="object"&&h!==null&&h.type===Sn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Yr:e:{for(var v=h.key,w=d;w!==null;){if(w.key===v){if(v=h.type,v===Sn){if(w.tag===7){n(m,w.sibling),d=o(w,h.props.children),d.return=m,m=d;break e}}else if(w.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===Mt&&Vl(v)===w.type){n(m,w.sibling),d=o(w,h.props),d.ref=sr(m,w,h),d.return=m,m=d;break e}n(m,w);break}else t(m,w);w=w.sibling}h.type===Sn?(d=un(h.props.children,m.mode,y,h.key),d.return=m,m=d):(y=Co(h.type,h.key,h.props,null,m.mode,y),y.ref=sr(m,d,h),y.return=m,m=y)}return s(m);case qn:e:{for(w=h.key;d!==null;){if(d.key===w)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(m,d.sibling),d=o(d,h.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else t(m,d);d=d.sibling}d=ea(h,m.mode,y),d.return=m,m=d}return s(m);case Mt:return w=h._init,j(m,d,w(h._payload),y)}if(hr(h))return k(m,d,h,y);if(nr(h))return b(m,d,h,y);lo(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(m,d.sibling),d=o(d,h),d.return=m,m=d):(n(m,d),d=Xi(h,m.mode,y),d.return=m,m=d),s(m)):n(m,d)}return j}var Un=ed(!0),td=ed(!1),Wo=Zt(null),Uo=null,In=null,qs=null;function Ss(){qs=In=Uo=null}function js(e){var t=Wo.current;K(Wo),e._currentValue=t}function Na(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zn(e,t){Uo=e,qs=In=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ie=!0),e.firstContext=null)}function Ke(e){var t=e._currentValue;if(qs!==e)if(e={context:e,memoizedValue:t,next:null},In===null){if(Uo===null)throw Error(_(308));In=e,Uo.dependencies={lanes:0,firstContext:e}}else In=In.next=e;return t}var sn=null;function _s(e){sn===null?sn=[e]:sn.push(e)}function nd(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,_s(t)):(n.next=o.next,o.next=n),t.interleaved=n,St(e,r)}function St(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var It=!1;function As(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ut(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,St(e,n)}return o=r.interleaved,o===null?(t.next=t,_s(r)):(t.next=o.next,o.next=t),r.interleaved=t,St(e,n)}function ko(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,hs(e,n)}}function Gl(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?o=a=s:a=a.next=s,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ho(e,t,n,r){var o=e.updateQueue;It=!1;var a=o.firstBaseUpdate,s=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var c=l,u=c.next;c.next=null,s===null?a=u:s.next=u,s=c;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==s&&(l===null?p.firstBaseUpdate=u:l.next=u,p.lastBaseUpdate=c))}if(a!==null){var f=o.baseState;s=0,p=u=c=null,l=a;do{var g=l.lane,x=l.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=e,b=l;switch(g=t,x=n,b.tag){case 1:if(k=b.payload,typeof k=="function"){f=k.call(x,f,g);break e}f=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=b.payload,g=typeof k=="function"?k.call(x,f,g):k,g==null)break e;f=Z({},f,g);break e;case 2:It=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[l]:g.push(l))}else x={eventTime:x,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(u=p=x,c=f):p=p.next=x,s|=g;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;g=l,l=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(p===null&&(c=f),o.baseState=c,o.firstBaseUpdate=u,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);fn|=s,e.lanes=s,e.memoizedState=f}}function Kl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(_(191,o));o.call(r)}}}var Gr={},ut=Zt(Gr),Lr=Zt(Gr),Fr=Zt(Gr);function ln(e){if(e===Gr)throw Error(_(174));return e}function Cs(e,t){switch(H(Fr,t),H(Lr,e),H(ut,Gr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:pa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=pa(t,e)}K(ut),H(ut,t)}function Hn(){K(ut),K(Lr),K(Fr)}function od(e){ln(Fr.current);var t=ln(ut.current),n=pa(t,e.type);t!==n&&(H(Lr,e),H(ut,n))}function Es(e){Lr.current===e&&(K(ut),K(Lr))}var J=Zt(0);function Vo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Gi=[];function Ts(){for(var e=0;e<Gi.length;e++)Gi[e]._workInProgressVersionPrimary=null;Gi.length=0}var qo=_t.ReactCurrentDispatcher,Ki=_t.ReactCurrentBatchConfig,pn=0,Y=null,ae=null,ue=null,Go=!1,wr=!1,Pr=0,mf=0;function we(){throw Error(_(321))}function Ms(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!it(e[n],t[n]))return!1;return!0}function Is(e,t,n,r,o,a){if(pn=a,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qo.current=e===null||e.memoizedState===null?wf:bf,e=n(r,o),wr){a=0;do{if(wr=!1,Pr=0,25<=a)throw Error(_(301));a+=1,ue=ae=null,t.updateQueue=null,qo.current=kf,e=n(r,o)}while(wr)}if(qo.current=Ko,t=ae!==null&&ae.next!==null,pn=0,ue=ae=Y=null,Go=!1,t)throw Error(_(300));return e}function Ns(){var e=Pr!==0;return Pr=0,e}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?Y.memoizedState=ue=e:ue=ue.next=e,ue}function Qe(){if(ae===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=ue===null?Y.memoizedState:ue.next;if(t!==null)ue=t,ae=e;else{if(e===null)throw Error(_(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},ue===null?Y.memoizedState=ue=e:ue=ue.next=e}return ue}function Rr(e,t){return typeof t=="function"?t(e):t}function Qi(e){var t=Qe(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=ae,o=r.baseQueue,a=n.pending;if(a!==null){if(o!==null){var s=o.next;o.next=a.next,a.next=s}r.baseQueue=o=a,n.pending=null}if(o!==null){a=o.next,r=r.baseState;var l=s=null,c=null,u=a;do{var p=u.lane;if((pn&p)===p)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=f,s=r):c=c.next=f,Y.lanes|=p,fn|=p}u=u.next}while(u!==null&&u!==a);c===null?s=r:c.next=l,it(r,t.memoizedState)||(Ie=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do a=o.lane,Y.lanes|=a,fn|=a,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ji(e){var t=Qe(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do a=e(a,s.action),s=s.next;while(s!==o);it(a,t.memoizedState)||(Ie=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function id(){}function ad(e,t){var n=Y,r=Qe(),o=t(),a=!it(r.memoizedState,o);if(a&&(r.memoizedState=o,Ie=!0),r=r.queue,Os(cd.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,zr(9,ld.bind(null,n,r,o,t),void 0,null),he===null)throw Error(_(349));pn&30||sd(n,t,o)}return o}function sd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ld(e,t,n,r){t.value=n,t.getSnapshot=r,ud(t)&&dd(e)}function cd(e,t,n){return n(function(){ud(t)&&dd(e)})}function ud(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!it(e,n)}catch{return!0}}function dd(e){var t=St(e,1);t!==null&&ot(t,e,1,-1)}function Ql(e){var t=st();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Rr,lastRenderedState:e},t.queue=e,e=e.dispatch=xf.bind(null,Y,e),[t.memoizedState,e]}function zr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function hd(){return Qe().memoizedState}function So(e,t,n,r){var o=st();Y.flags|=e,o.memoizedState=zr(1|t,n,void 0,r===void 0?null:r)}function hi(e,t,n,r){var o=Qe();r=r===void 0?null:r;var a=void 0;if(ae!==null){var s=ae.memoizedState;if(a=s.destroy,r!==null&&Ms(r,s.deps)){o.memoizedState=zr(t,n,a,r);return}}Y.flags|=e,o.memoizedState=zr(1|t,n,a,r)}function Jl(e,t){return So(8390656,8,e,t)}function Os(e,t){return hi(2048,8,e,t)}function pd(e,t){return hi(4,2,e,t)}function fd(e,t){return hi(4,4,e,t)}function gd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function md(e,t,n){return n=n!=null?n.concat([e]):null,hi(4,4,gd.bind(null,t,e),n)}function Ls(){}function yd(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ms(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function vd(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ms(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function xd(e,t,n){return pn&21?(it(n,t)||(n=Su(),Y.lanes|=n,fn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ie=!0),e.memoizedState=n)}function yf(e,t){var n=B;B=n!==0&&4>n?n:4,e(!0);var r=Ki.transition;Ki.transition={};try{e(!1),t()}finally{B=n,Ki.transition=r}}function wd(){return Qe().memoizedState}function vf(e,t,n){var r=Vt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},bd(e))kd(t,n);else if(n=nd(e,t,n,r),n!==null){var o=Ae();ot(n,e,r,o),qd(n,t,r)}}function xf(e,t,n){var r=Vt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(bd(e))kd(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var s=t.lastRenderedState,l=a(s,n);if(o.hasEagerState=!0,o.eagerState=l,it(l,s)){var c=t.interleaved;c===null?(o.next=o,_s(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}n=nd(e,t,o,r),n!==null&&(o=Ae(),ot(n,e,r,o),qd(n,t,r))}}function bd(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function kd(e,t){wr=Go=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function qd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,hs(e,n)}}var Ko={readContext:Ke,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useInsertionEffect:we,useLayoutEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useMutableSource:we,useSyncExternalStore:we,useId:we,unstable_isNewReconciler:!1},wf={readContext:Ke,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:Ke,useEffect:Jl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,So(4194308,4,gd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return So(4194308,4,e,t)},useInsertionEffect:function(e,t){return So(4,2,e,t)},useMemo:function(e,t){var n=st();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=st();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=vf.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:Ql,useDebugValue:Ls,useDeferredValue:function(e){return st().memoizedState=e},useTransition:function(){var e=Ql(!1),t=e[0];return e=yf.bind(null,e[1]),st().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,o=st();if(Q){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),he===null)throw Error(_(349));pn&30||sd(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,Jl(cd.bind(null,r,a,e),[e]),r.flags|=2048,zr(9,ld.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=st(),t=he.identifierPrefix;if(Q){var n=xt,r=vt;n=(r&~(1<<32-rt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Pr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=mf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},bf={readContext:Ke,useCallback:yd,useContext:Ke,useEffect:Os,useImperativeHandle:md,useInsertionEffect:pd,useLayoutEffect:fd,useMemo:vd,useReducer:Qi,useRef:hd,useState:function(){return Qi(Rr)},useDebugValue:Ls,useDeferredValue:function(e){var t=Qe();return xd(t,ae.memoizedState,e)},useTransition:function(){var e=Qi(Rr)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:id,useSyncExternalStore:ad,useId:wd,unstable_isNewReconciler:!1},kf={readContext:Ke,useCallback:yd,useContext:Ke,useEffect:Os,useImperativeHandle:md,useInsertionEffect:pd,useLayoutEffect:fd,useMemo:vd,useReducer:Ji,useRef:hd,useState:function(){return Ji(Rr)},useDebugValue:Ls,useDeferredValue:function(e){var t=Qe();return ae===null?t.memoizedState=e:xd(t,ae.memoizedState,e)},useTransition:function(){var e=Ji(Rr)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:id,useSyncExternalStore:ad,useId:wd,unstable_isNewReconciler:!1};function Xe(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Oa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var pi={isMounted:function(e){return(e=e._reactInternals)?vn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ae(),o=Vt(e),a=bt(r,o);a.payload=t,n!=null&&(a.callback=n),t=Ut(e,a,o),t!==null&&(ot(t,e,o,r),ko(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ae(),o=Vt(e),a=bt(r,o);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Ut(e,a,o),t!==null&&(ot(t,e,o,r),ko(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ae(),r=Vt(e),o=bt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Ut(e,o,r),t!==null&&(ot(t,e,r,n),ko(t,e,r))}};function Yl(e,t,n,r,o,a,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,s):t.prototype&&t.prototype.isPureReactComponent?!Mr(n,r)||!Mr(o,a):!0}function Sd(e,t,n){var r=!1,o=Jt,a=t.contextType;return typeof a=="object"&&a!==null?a=Ke(a):(o=Oe(t)?dn:Se.current,r=t.contextTypes,a=(r=r!=null)?Bn(e,o):Jt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=pi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function Zl(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&pi.enqueueReplaceState(t,t.state,null)}function La(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},As(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=Ke(a):(a=Oe(t)?dn:Se.current,o.context=Bn(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Oa(e,t,a,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&pi.enqueueReplaceState(o,o.state,null),Ho(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Vn(e,t){try{var n="",r=t;do n+=Qh(r),r=r.return;while(r);var o=n}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function Yi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Fa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var qf=typeof WeakMap=="function"?WeakMap:Map;function jd(e,t,n){n=bt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Jo||(Jo=!0,Va=r),Fa(e,t)},n}function _d(e,t,n){n=bt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Fa(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Fa(e,t),typeof r!="function"&&(Ht===null?Ht=new Set([this]):Ht.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Xl(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new qf;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Pf.bind(null,e,t,n),t.then(e,e))}function ec(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function tc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=bt(-1,1),t.tag=2,Ut(n,t,1))),n.lanes|=1),e)}var Sf=_t.ReactCurrentOwner,Ie=!1;function je(e,t,n,r){t.child=e===null?td(t,null,n,r):Un(t,e.child,n,r)}function nc(e,t,n,r,o){n=n.render;var a=t.ref;return zn(t,o),r=Is(e,t,n,r,a,o),n=Ns(),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,jt(e,t,o)):(Q&&n&&ws(t),t.flags|=1,je(e,t,r,o),t.child)}function rc(e,t,n,r,o){if(e===null){var a=n.type;return typeof a=="function"&&!Ws(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Ad(e,t,a,r,o)):(e=Co(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&o)){var s=a.memoizedProps;if(n=n.compare,n=n!==null?n:Mr,n(s,r)&&e.ref===t.ref)return jt(e,t,o)}return t.flags|=1,e=Gt(a,r),e.ref=t.ref,e.return=t,t.child=e}function Ad(e,t,n,r,o){if(e!==null){var a=e.memoizedProps;if(Mr(a,r)&&e.ref===t.ref)if(Ie=!1,t.pendingProps=r=a,(e.lanes&o)!==0)e.flags&131072&&(Ie=!0);else return t.lanes=e.lanes,jt(e,t,o)}return Pa(e,t,n,r,o)}function Cd(e,t,n){var r=t.pendingProps,o=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(On,Fe),Fe|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(On,Fe),Fe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,H(On,Fe),Fe|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,H(On,Fe),Fe|=r;return je(e,t,o,n),t.child}function Ed(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Pa(e,t,n,r,o){var a=Oe(n)?dn:Se.current;return a=Bn(t,a),zn(t,o),n=Is(e,t,n,r,a,o),r=Ns(),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,jt(e,t,o)):(Q&&r&&ws(t),t.flags|=1,je(e,t,n,o),t.child)}function oc(e,t,n,r,o){if(Oe(n)){var a=!0;Do(t)}else a=!1;if(zn(t,o),t.stateNode===null)jo(e,t),Sd(t,n,r),La(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var c=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ke(u):(u=Oe(n)?dn:Se.current,u=Bn(t,u));var p=n.getDerivedStateFromProps,f=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||c!==u)&&Zl(t,s,r,u),It=!1;var g=t.memoizedState;s.state=g,Ho(t,r,s,o),c=t.memoizedState,l!==r||g!==c||Ne.current||It?(typeof p=="function"&&(Oa(t,n,p,r),c=t.memoizedState),(l=It||Yl(t,n,l,r,g,c,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,rd(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Xe(t.type,l),s.props=u,f=t.pendingProps,g=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ke(c):(c=Oe(n)?dn:Se.current,c=Bn(t,c));var x=n.getDerivedStateFromProps;(p=typeof x=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==f||g!==c)&&Zl(t,s,r,c),It=!1,g=t.memoizedState,s.state=g,Ho(t,r,s,o);var k=t.memoizedState;l!==f||g!==k||Ne.current||It?(typeof x=="function"&&(Oa(t,n,x,r),k=t.memoizedState),(u=It||Yl(t,n,u,r,g,k,c)||!1)?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,k,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,k,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),s.props=r,s.state=k,s.context=c,r=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Ra(e,t,n,r,a,o)}function Ra(e,t,n,r,o,a){Ed(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&Wl(t,n,!1),jt(e,t,a);r=t.stateNode,Sf.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Un(t,e.child,null,a),t.child=Un(t,null,l,a)):je(e,t,l,a),t.memoizedState=r.state,o&&Wl(t,n,!0),t.child}function Td(e){var t=e.stateNode;t.pendingContext?Bl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Bl(e,t.context,!1),Cs(e,t.containerInfo)}function ic(e,t,n,r,o){return Wn(),ks(o),t.flags|=256,je(e,t,n,r),t.child}var za={dehydrated:null,treeContext:null,retryLane:0};function Da(e){return{baseLanes:e,cachePool:null,transitions:null}}function Md(e,t,n){var r=t.pendingProps,o=J.current,a=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),H(J,o&1),e===null)return Ia(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,a?(r=t.mode,a=t.child,s={mode:"hidden",children:s},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=mi(s,r,0,null),e=un(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Da(n),t.memoizedState=za,e):Fs(t,s));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return jf(e,t,s,r,l,o,n);if(a){a=r.fallback,s=t.mode,o=e.child,l=o.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Gt(o,c),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?a=Gt(l,a):(a=un(a,s,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,s=e.child.memoizedState,s=s===null?Da(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=e.childLanes&~n,t.memoizedState=za,r}return a=e.child,e=a.sibling,r=Gt(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Fs(e,t){return t=mi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function co(e,t,n,r){return r!==null&&ks(r),Un(t,e.child,null,n),e=Fs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function jf(e,t,n,r,o,a,s){if(n)return t.flags&256?(t.flags&=-257,r=Yi(Error(_(422))),co(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=mi({mode:"visible",children:r.children},o,0,null),a=un(a,o,s,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Un(t,e.child,null,s),t.child.memoizedState=Da(s),t.memoizedState=za,a);if(!(t.mode&1))return co(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(_(419)),r=Yi(a,r,void 0),co(e,t,s,r)}if(l=(s&e.childLanes)!==0,Ie||l){if(r=he,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,St(e,o),ot(r,e,o,-1))}return Bs(),r=Yi(Error(_(421))),co(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Rf.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,Pe=Wt(o.nextSibling),Re=t,Q=!0,tt=null,e!==null&&(Ue[He++]=vt,Ue[He++]=xt,Ue[He++]=hn,vt=e.id,xt=e.overflow,hn=t),t=Fs(t,r.children),t.flags|=4096,t)}function ac(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Na(e.return,t,n)}function Zi(e,t,n,r,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function Id(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(je(e,t,r.children,n),r=J.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ac(e,n,t);else if(e.tag===19)ac(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(J,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Vo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Zi(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Vo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Zi(t,!0,n,null,a);break;case"together":Zi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function jo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function jt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),fn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=Gt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Gt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function _f(e,t,n){switch(t.tag){case 3:Td(t),Wn();break;case 5:od(t);break;case 1:Oe(t.type)&&Do(t);break;case 4:Cs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;H(Wo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(H(J,J.current&1),t.flags|=128,null):n&t.child.childLanes?Md(e,t,n):(H(J,J.current&1),e=jt(e,t,n),e!==null?e.sibling:null);H(J,J.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Id(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),H(J,J.current),r)break;return null;case 22:case 23:return t.lanes=0,Cd(e,t,n)}return jt(e,t,n)}var Nd,$a,Od,Ld;Nd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$a=function(){};Od=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,ln(ut.current);var a=null;switch(n){case"input":o=ca(e,o),r=ca(e,r),a=[];break;case"select":o=Z({},o,{value:void 0}),r=Z({},r,{value:void 0}),a=[];break;case"textarea":o=ha(e,o),r=ha(e,r),a=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ro)}fa(n,r);var s;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Sr.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var c=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(a||(a=[]),a.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(a=a||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Sr.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&V("scroll",e),a||l===c||(a=[])):(a=a||[]).push(u,c))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};Ld=function(e,t,n,r){n!==r&&(t.flags|=4)};function lr(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Af(e,t,n){var r=t.pendingProps;switch(bs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return Oe(t.type)&&zo(),be(t),null;case 3:return r=t.stateNode,Hn(),K(Ne),K(Se),Ts(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(so(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,tt!==null&&(Qa(tt),tt=null))),$a(e,t),be(t),null;case 5:Es(t);var o=ln(Fr.current);if(n=t.type,e!==null&&t.stateNode!=null)Od(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return be(t),null}if(e=ln(ut.current),so(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[lt]=t,r[Or]=a,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(o=0;o<fr.length;o++)V(fr[o],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":gl(r,a),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},V("invalid",r);break;case"textarea":yl(r,a),V("invalid",r)}fa(n,a),o=null;for(var s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&ao(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&ao(r.textContent,l,e),o=["children",""+l]):Sr.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&V("scroll",r)}switch(n){case"input":Zr(r),ml(r,a,!0);break;case"textarea":Zr(r),vl(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Ro)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=cu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[lt]=t,e[Or]=r,Nd(e,t,!1,!1),t.stateNode=e;e:{switch(s=ga(n,r),n){case"dialog":V("cancel",e),V("close",e),o=r;break;case"iframe":case"object":case"embed":V("load",e),o=r;break;case"video":case"audio":for(o=0;o<fr.length;o++)V(fr[o],e);o=r;break;case"source":V("error",e),o=r;break;case"img":case"image":case"link":V("error",e),V("load",e),o=r;break;case"details":V("toggle",e),o=r;break;case"input":gl(e,r),o=ca(e,r),V("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Z({},r,{value:void 0}),V("invalid",e);break;case"textarea":yl(e,r),o=ha(e,r),V("invalid",e);break;default:o=r}fa(n,o),l=o;for(a in l)if(l.hasOwnProperty(a)){var c=l[a];a==="style"?hu(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&uu(e,c)):a==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&jr(e,c):typeof c=="number"&&jr(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Sr.hasOwnProperty(a)?c!=null&&a==="onScroll"&&V("scroll",e):c!=null&&as(e,a,c,s))}switch(n){case"input":Zr(e),ml(e,r,!1);break;case"textarea":Zr(e),vl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Qt(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Ln(e,!!r.multiple,a,!1):r.defaultValue!=null&&Ln(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ro)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return be(t),null;case 6:if(e&&t.stateNode!=null)Ld(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=ln(Fr.current),ln(ut.current),so(t)){if(r=t.stateNode,n=t.memoizedProps,r[lt]=t,(a=r.nodeValue!==n)&&(e=Re,e!==null))switch(e.tag){case 3:ao(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ao(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[lt]=t,t.stateNode=r}return be(t),null;case 13:if(K(J),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&Pe!==null&&t.mode&1&&!(t.flags&128))Xu(),Wn(),t.flags|=98560,a=!1;else if(a=so(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(_(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(_(317));a[lt]=t}else Wn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;be(t),a=!1}else tt!==null&&(Qa(tt),tt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||J.current&1?le===0&&(le=3):Bs())),t.updateQueue!==null&&(t.flags|=4),be(t),null);case 4:return Hn(),$a(e,t),e===null&&Ir(t.stateNode.containerInfo),be(t),null;case 10:return js(t.type._context),be(t),null;case 17:return Oe(t.type)&&zo(),be(t),null;case 19:if(K(J),a=t.memoizedState,a===null)return be(t),null;if(r=(t.flags&128)!==0,s=a.rendering,s===null)if(r)lr(a,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Vo(e),s!==null){for(t.flags|=128,lr(a,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(J,J.current&1|2),t.child}e=e.sibling}a.tail!==null&&ne()>Gn&&(t.flags|=128,r=!0,lr(a,!1),t.lanes=4194304)}else{if(!r)if(e=Vo(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),lr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!Q)return be(t),null}else 2*ne()-a.renderingStartTime>Gn&&n!==1073741824&&(t.flags|=128,r=!0,lr(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(n=a.last,n!==null?n.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ne(),t.sibling=null,n=J.current,H(J,r?n&1|2:n&1),t):(be(t),null);case 22:case 23:return $s(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Fe&1073741824&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function Cf(e,t){switch(bs(t),t.tag){case 1:return Oe(t.type)&&zo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Hn(),K(Ne),K(Se),Ts(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Es(t),null;case 13:if(K(J),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));Wn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(J),null;case 4:return Hn(),null;case 10:return js(t.type._context),null;case 22:case 23:return $s(),null;case 24:return null;default:return null}}var uo=!1,qe=!1,Ef=typeof WeakSet=="function"?WeakSet:Set,T=null;function Nn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function Ba(e,t,n){try{n()}catch(r){ee(e,t,r)}}var sc=!1;function Tf(e,t){if(ja=Lo,e=Du(),xs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var s=0,l=-1,c=-1,u=0,p=0,f=e,g=null;t:for(;;){for(var x;f!==n||o!==0&&f.nodeType!==3||(l=s+o),f!==a||r!==0&&f.nodeType!==3||(c=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(x=f.firstChild)!==null;)g=f,f=x;for(;;){if(f===e)break t;if(g===n&&++u===o&&(l=s),g===a&&++p===r&&(c=s),(x=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=x}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(_a={focusedElem:e,selectionRange:n},Lo=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var b=k.memoizedProps,j=k.memoizedState,m=t.stateNode,d=m.getSnapshotBeforeUpdate(t.elementType===t.type?b:Xe(t.type,b),j);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(y){ee(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return k=sc,sc=!1,k}function br(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&Ba(t,n,a)}o=o.next}while(o!==r)}}function fi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Wa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Fd(e){var t=e.alternate;t!==null&&(e.alternate=null,Fd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[lt],delete t[Or],delete t[Ea],delete t[hf],delete t[pf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Pd(e){return e.tag===5||e.tag===3||e.tag===4}function lc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Pd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ua(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ro));else if(r!==4&&(e=e.child,e!==null))for(Ua(e,t,n),e=e.sibling;e!==null;)Ua(e,t,n),e=e.sibling}function Ha(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ha(e,t,n),e=e.sibling;e!==null;)Ha(e,t,n),e=e.sibling}var ge=null,et=!1;function Et(e,t,n){for(n=n.child;n!==null;)Rd(e,t,n),n=n.sibling}function Rd(e,t,n){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(ai,n)}catch{}switch(n.tag){case 5:qe||Nn(n,t);case 6:var r=ge,o=et;ge=null,Et(e,t,n),ge=r,et=o,ge!==null&&(et?(e=ge,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ge.removeChild(n.stateNode));break;case 18:ge!==null&&(et?(e=ge,n=n.stateNode,e.nodeType===8?Hi(e.parentNode,n):e.nodeType===1&&Hi(e,n),Er(e)):Hi(ge,n.stateNode));break;case 4:r=ge,o=et,ge=n.stateNode.containerInfo,et=!0,Et(e,t,n),ge=r,et=o;break;case 0:case 11:case 14:case 15:if(!qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var a=o,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&Ba(n,t,s),o=o.next}while(o!==r)}Et(e,t,n);break;case 1:if(!qe&&(Nn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ee(n,t,l)}Et(e,t,n);break;case 21:Et(e,t,n);break;case 22:n.mode&1?(qe=(r=qe)||n.memoizedState!==null,Et(e,t,n),qe=r):Et(e,t,n);break;default:Et(e,t,n)}}function cc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ef),t.forEach(function(r){var o=zf.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Je(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:ge=l.stateNode,et=!1;break e;case 3:ge=l.stateNode.containerInfo,et=!0;break e;case 4:ge=l.stateNode.containerInfo,et=!0;break e}l=l.return}if(ge===null)throw Error(_(160));Rd(a,s,o),ge=null,et=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(u){ee(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)zd(t,e),t=t.sibling}function zd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Je(t,e),at(e),r&4){try{br(3,e,e.return),fi(3,e)}catch(b){ee(e,e.return,b)}try{br(5,e,e.return)}catch(b){ee(e,e.return,b)}}break;case 1:Je(t,e),at(e),r&512&&n!==null&&Nn(n,n.return);break;case 5:if(Je(t,e),at(e),r&512&&n!==null&&Nn(n,n.return),e.flags&32){var o=e.stateNode;try{jr(o,"")}catch(b){ee(e,e.return,b)}}if(r&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,s=n!==null?n.memoizedProps:a,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&su(o,a),ga(l,s);var u=ga(l,a);for(s=0;s<c.length;s+=2){var p=c[s],f=c[s+1];p==="style"?hu(o,f):p==="dangerouslySetInnerHTML"?uu(o,f):p==="children"?jr(o,f):as(o,p,f,u)}switch(l){case"input":ua(o,a);break;case"textarea":lu(o,a);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var x=a.value;x!=null?Ln(o,!!a.multiple,x,!1):g!==!!a.multiple&&(a.defaultValue!=null?Ln(o,!!a.multiple,a.defaultValue,!0):Ln(o,!!a.multiple,a.multiple?[]:"",!1))}o[Or]=a}catch(b){ee(e,e.return,b)}}break;case 6:if(Je(t,e),at(e),r&4){if(e.stateNode===null)throw Error(_(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(b){ee(e,e.return,b)}}break;case 3:if(Je(t,e),at(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Er(t.containerInfo)}catch(b){ee(e,e.return,b)}break;case 4:Je(t,e),at(e);break;case 13:Je(t,e),at(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(zs=ne())),r&4&&cc(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(qe=(u=qe)||p,Je(t,e),qe=u):Je(t,e),at(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(T=e,p=e.child;p!==null;){for(f=T=p;T!==null;){switch(g=T,x=g.child,g.tag){case 0:case 11:case 14:case 15:br(4,g,g.return);break;case 1:Nn(g,g.return);var k=g.stateNode;if(typeof k.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(b){ee(r,n,b)}}break;case 5:Nn(g,g.return);break;case 22:if(g.memoizedState!==null){dc(f);continue}}x!==null?(x.return=g,T=x):dc(f)}p=p.sibling}e:for(p=null,f=e;;){if(f.tag===5){if(p===null){p=f;try{o=f.stateNode,u?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=f.stateNode,c=f.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=du("display",s))}catch(b){ee(e,e.return,b)}}}else if(f.tag===6){if(p===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(b){ee(e,e.return,b)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;p===f&&(p=null),f=f.return}p===f&&(p=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Je(t,e),at(e),r&4&&cc(e);break;case 21:break;default:Je(t,e),at(e)}}function at(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Pd(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(jr(o,""),r.flags&=-33);var a=lc(e);Ha(e,a,o);break;case 3:case 4:var s=r.stateNode.containerInfo,l=lc(e);Ua(e,l,s);break;default:throw Error(_(161))}}catch(c){ee(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Mf(e,t,n){T=e,Dd(e)}function Dd(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var o=T,a=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||uo;if(!s){var l=o.alternate,c=l!==null&&l.memoizedState!==null||qe;l=uo;var u=qe;if(uo=s,(qe=c)&&!u)for(T=o;T!==null;)s=T,c=s.child,s.tag===22&&s.memoizedState!==null?hc(o):c!==null?(c.return=s,T=c):hc(o);for(;a!==null;)T=a,Dd(a),a=a.sibling;T=o,uo=l,qe=u}uc(e)}else o.subtreeFlags&8772&&a!==null?(a.return=o,T=a):uc(e)}}function uc(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:qe||fi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!qe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Xe(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Kl(t,a,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Kl(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var f=p.dehydrated;f!==null&&Er(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}qe||t.flags&512&&Wa(t)}catch(g){ee(t,t.return,g)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function dc(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function hc(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{fi(4,t)}catch(c){ee(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(c){ee(t,o,c)}}var a=t.return;try{Wa(t)}catch(c){ee(t,a,c)}break;case 5:var s=t.return;try{Wa(t)}catch(c){ee(t,s,c)}}}catch(c){ee(t,t.return,c)}if(t===e){T=null;break}var l=t.sibling;if(l!==null){l.return=t.return,T=l;break}T=t.return}}var If=Math.ceil,Qo=_t.ReactCurrentDispatcher,Ps=_t.ReactCurrentOwner,Ge=_t.ReactCurrentBatchConfig,z=0,he=null,oe=null,ye=0,Fe=0,On=Zt(0),le=0,Dr=null,fn=0,gi=0,Rs=0,kr=null,Me=null,zs=0,Gn=1/0,ft=null,Jo=!1,Va=null,Ht=null,ho=!1,Rt=null,Yo=0,qr=0,Ga=null,_o=-1,Ao=0;function Ae(){return z&6?ne():_o!==-1?_o:_o=ne()}function Vt(e){return e.mode&1?z&2&&ye!==0?ye&-ye:gf.transition!==null?(Ao===0&&(Ao=Su()),Ao):(e=B,e!==0||(e=window.event,e=e===void 0?16:Mu(e.type)),e):1}function ot(e,t,n,r){if(50<qr)throw qr=0,Ga=null,Error(_(185));Ur(e,n,r),(!(z&2)||e!==he)&&(e===he&&(!(z&2)&&(gi|=n),le===4&&Lt(e,ye)),Le(e,r),n===1&&z===0&&!(t.mode&1)&&(Gn=ne()+500,di&&Xt()))}function Le(e,t){var n=e.callbackNode;fp(e,t);var r=Oo(e,e===he?ye:0);if(r===0)n!==null&&bl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&bl(n),t===1)e.tag===0?ff(pc.bind(null,e)):Ju(pc.bind(null,e)),uf(function(){!(z&6)&&Xt()}),n=null;else{switch(ju(r)){case 1:n=ds;break;case 4:n=ku;break;case 16:n=No;break;case 536870912:n=qu;break;default:n=No}n=Kd(n,$d.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function $d(e,t){if(_o=-1,Ao=0,z&6)throw Error(_(327));var n=e.callbackNode;if(Dn()&&e.callbackNode!==n)return null;var r=Oo(e,e===he?ye:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Zo(e,r);else{t=r;var o=z;z|=2;var a=Wd();(he!==e||ye!==t)&&(ft=null,Gn=ne()+500,cn(e,t));do try{Lf();break}catch(l){Bd(e,l)}while(!0);Ss(),Qo.current=a,z=o,oe!==null?t=0:(he=null,ye=0,t=le)}if(t!==0){if(t===2&&(o=wa(e),o!==0&&(r=o,t=Ka(e,o))),t===1)throw n=Dr,cn(e,0),Lt(e,r),Le(e,ne()),n;if(t===6)Lt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Nf(o)&&(t=Zo(e,r),t===2&&(a=wa(e),a!==0&&(r=a,t=Ka(e,a))),t===1))throw n=Dr,cn(e,0),Lt(e,r),Le(e,ne()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:on(e,Me,ft);break;case 3:if(Lt(e,r),(r&130023424)===r&&(t=zs+500-ne(),10<t)){if(Oo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ae(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ca(on.bind(null,e,Me,ft),t);break}on(e,Me,ft);break;case 4:if(Lt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-rt(r);a=1<<s,s=t[s],s>o&&(o=s),r&=~a}if(r=o,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*If(r/1960))-r,10<r){e.timeoutHandle=Ca(on.bind(null,e,Me,ft),r);break}on(e,Me,ft);break;case 5:on(e,Me,ft);break;default:throw Error(_(329))}}}return Le(e,ne()),e.callbackNode===n?$d.bind(null,e):null}function Ka(e,t){var n=kr;return e.current.memoizedState.isDehydrated&&(cn(e,t).flags|=256),e=Zo(e,t),e!==2&&(t=Me,Me=n,t!==null&&Qa(t)),e}function Qa(e){Me===null?Me=e:Me.push.apply(Me,e)}function Nf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!it(a(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Lt(e,t){for(t&=~Rs,t&=~gi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-rt(t),r=1<<n;e[n]=-1,t&=~r}}function pc(e){if(z&6)throw Error(_(327));Dn();var t=Oo(e,0);if(!(t&1))return Le(e,ne()),null;var n=Zo(e,t);if(e.tag!==0&&n===2){var r=wa(e);r!==0&&(t=r,n=Ka(e,r))}if(n===1)throw n=Dr,cn(e,0),Lt(e,t),Le(e,ne()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,on(e,Me,ft),Le(e,ne()),null}function Ds(e,t){var n=z;z|=1;try{return e(t)}finally{z=n,z===0&&(Gn=ne()+500,di&&Xt())}}function gn(e){Rt!==null&&Rt.tag===0&&!(z&6)&&Dn();var t=z;z|=1;var n=Ge.transition,r=B;try{if(Ge.transition=null,B=1,e)return e()}finally{B=r,Ge.transition=n,z=t,!(z&6)&&Xt()}}function $s(){Fe=On.current,K(On)}function cn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,cf(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(bs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&zo();break;case 3:Hn(),K(Ne),K(Se),Ts();break;case 5:Es(r);break;case 4:Hn();break;case 13:K(J);break;case 19:K(J);break;case 10:js(r.type._context);break;case 22:case 23:$s()}n=n.return}if(he=e,oe=e=Gt(e.current,null),ye=Fe=t,le=0,Dr=null,Rs=gi=fn=0,Me=kr=null,sn!==null){for(t=0;t<sn.length;t++)if(n=sn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,a=n.pending;if(a!==null){var s=a.next;a.next=o,r.next=s}n.pending=r}sn=null}return e}function Bd(e,t){do{var n=oe;try{if(Ss(),qo.current=Ko,Go){for(var r=Y.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Go=!1}if(pn=0,ue=ae=Y=null,wr=!1,Pr=0,Ps.current=null,n===null||n.return===null){le=1,Dr=t,oe=null;break}e:{var a=e,s=n.return,l=n,c=t;if(t=ye,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,p=l,f=p.tag;if(!(p.mode&1)&&(f===0||f===11||f===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var x=ec(s);if(x!==null){x.flags&=-257,tc(x,s,l,a,t),x.mode&1&&Xl(a,u,t),t=x,c=u;var k=t.updateQueue;if(k===null){var b=new Set;b.add(c),t.updateQueue=b}else k.add(c);break e}else{if(!(t&1)){Xl(a,u,t),Bs();break e}c=Error(_(426))}}else if(Q&&l.mode&1){var j=ec(s);if(j!==null){!(j.flags&65536)&&(j.flags|=256),tc(j,s,l,a,t),ks(Vn(c,l));break e}}a=c=Vn(c,l),le!==4&&(le=2),kr===null?kr=[a]:kr.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var m=jd(a,c,t);Gl(a,m);break e;case 1:l=c;var d=a.type,h=a.stateNode;if(!(a.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ht===null||!Ht.has(h)))){a.flags|=65536,t&=-t,a.lanes|=t;var y=_d(a,l,t);Gl(a,y);break e}}a=a.return}while(a!==null)}Hd(n)}catch(v){t=v,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(!0)}function Wd(){var e=Qo.current;return Qo.current=Ko,e===null?Ko:e}function Bs(){(le===0||le===3||le===2)&&(le=4),he===null||!(fn&268435455)&&!(gi&268435455)||Lt(he,ye)}function Zo(e,t){var n=z;z|=2;var r=Wd();(he!==e||ye!==t)&&(ft=null,cn(e,t));do try{Of();break}catch(o){Bd(e,o)}while(!0);if(Ss(),z=n,Qo.current=r,oe!==null)throw Error(_(261));return he=null,ye=0,le}function Of(){for(;oe!==null;)Ud(oe)}function Lf(){for(;oe!==null&&!ip();)Ud(oe)}function Ud(e){var t=Gd(e.alternate,e,Fe);e.memoizedProps=e.pendingProps,t===null?Hd(e):oe=t,Ps.current=null}function Hd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Cf(n,t),n!==null){n.flags&=32767,oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,oe=null;return}}else if(n=Af(n,t,Fe),n!==null){oe=n;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);le===0&&(le=5)}function on(e,t,n){var r=B,o=Ge.transition;try{Ge.transition=null,B=1,Ff(e,t,n,r)}finally{Ge.transition=o,B=r}return null}function Ff(e,t,n,r){do Dn();while(Rt!==null);if(z&6)throw Error(_(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(gp(e,a),e===he&&(oe=he=null,ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ho||(ho=!0,Kd(No,function(){return Dn(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Ge.transition,Ge.transition=null;var s=B;B=1;var l=z;z|=4,Ps.current=null,Tf(e,n),zd(n,e),tf(_a),Lo=!!ja,_a=ja=null,e.current=n,Mf(n),ap(),z=l,B=s,Ge.transition=a}else e.current=n;if(ho&&(ho=!1,Rt=e,Yo=o),a=e.pendingLanes,a===0&&(Ht=null),cp(n.stateNode),Le(e,ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Jo)throw Jo=!1,e=Va,Va=null,e;return Yo&1&&e.tag!==0&&Dn(),a=e.pendingLanes,a&1?e===Ga?qr++:(qr=0,Ga=e):qr=0,Xt(),null}function Dn(){if(Rt!==null){var e=ju(Yo),t=Ge.transition,n=B;try{if(Ge.transition=null,B=16>e?16:e,Rt===null)var r=!1;else{if(e=Rt,Rt=null,Yo=0,z&6)throw Error(_(331));var o=z;for(z|=4,T=e.current;T!==null;){var a=T,s=a.child;if(T.flags&16){var l=a.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(T=u;T!==null;){var p=T;switch(p.tag){case 0:case 11:case 15:br(8,p,a)}var f=p.child;if(f!==null)f.return=p,T=f;else for(;T!==null;){p=T;var g=p.sibling,x=p.return;if(Fd(p),p===u){T=null;break}if(g!==null){g.return=x,T=g;break}T=x}}}var k=a.alternate;if(k!==null){var b=k.child;if(b!==null){k.child=null;do{var j=b.sibling;b.sibling=null,b=j}while(b!==null)}}T=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,T=s;else e:for(;T!==null;){if(a=T,a.flags&2048)switch(a.tag){case 0:case 11:case 15:br(9,a,a.return)}var m=a.sibling;if(m!==null){m.return=a.return,T=m;break e}T=a.return}}var d=e.current;for(T=d;T!==null;){s=T;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,T=h;else e:for(s=d;T!==null;){if(l=T,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:fi(9,l)}}catch(v){ee(l,l.return,v)}if(l===s){T=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,T=y;break e}T=l.return}}if(z=o,Xt(),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(ai,e)}catch{}r=!0}return r}finally{B=n,Ge.transition=t}}return!1}function fc(e,t,n){t=Vn(n,t),t=jd(e,t,1),e=Ut(e,t,1),t=Ae(),e!==null&&(Ur(e,1,t),Le(e,t))}function ee(e,t,n){if(e.tag===3)fc(e,e,n);else for(;t!==null;){if(t.tag===3){fc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ht===null||!Ht.has(r))){e=Vn(n,e),e=_d(t,e,1),t=Ut(t,e,1),e=Ae(),t!==null&&(Ur(t,1,e),Le(t,e));break}}t=t.return}}function Pf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ae(),e.pingedLanes|=e.suspendedLanes&n,he===e&&(ye&n)===n&&(le===4||le===3&&(ye&130023424)===ye&&500>ne()-zs?cn(e,0):Rs|=n),Le(e,t)}function Vd(e,t){t===0&&(e.mode&1?(t=to,to<<=1,!(to&130023424)&&(to=4194304)):t=1);var n=Ae();e=St(e,t),e!==null&&(Ur(e,t,n),Le(e,n))}function Rf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Vd(e,n)}function zf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),Vd(e,n)}var Gd;Gd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ne.current)Ie=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ie=!1,_f(e,t,n);Ie=!!(e.flags&131072)}else Ie=!1,Q&&t.flags&1048576&&Yu(t,Bo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;jo(e,t),e=t.pendingProps;var o=Bn(t,Se.current);zn(t,n),o=Is(null,t,r,e,o,n);var a=Ns();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Oe(r)?(a=!0,Do(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,As(t),o.updater=pi,t.stateNode=o,o._reactInternals=t,La(t,r,e,n),t=Ra(null,t,r,!0,a,n)):(t.tag=0,Q&&a&&ws(t),je(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(jo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=$f(r),e=Xe(r,e),o){case 0:t=Pa(null,t,r,e,n);break e;case 1:t=oc(null,t,r,e,n);break e;case 11:t=nc(null,t,r,e,n);break e;case 14:t=rc(null,t,r,Xe(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Xe(r,o),Pa(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Xe(r,o),oc(e,t,r,o,n);case 3:e:{if(Td(t),e===null)throw Error(_(387));r=t.pendingProps,a=t.memoizedState,o=a.element,rd(e,t),Ho(t,r,null,n);var s=t.memoizedState;if(r=s.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=Vn(Error(_(423)),t),t=ic(e,t,r,n,o);break e}else if(r!==o){o=Vn(Error(_(424)),t),t=ic(e,t,r,n,o);break e}else for(Pe=Wt(t.stateNode.containerInfo.firstChild),Re=t,Q=!0,tt=null,n=td(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wn(),r===o){t=jt(e,t,n);break e}je(e,t,r,n)}t=t.child}return t;case 5:return od(t),e===null&&Ia(t),r=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,s=o.children,Aa(r,o)?s=null:a!==null&&Aa(r,a)&&(t.flags|=32),Ed(e,t),je(e,t,s,n),t.child;case 6:return e===null&&Ia(t),null;case 13:return Md(e,t,n);case 4:return Cs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Un(t,null,r,n):je(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Xe(r,o),nc(e,t,r,o,n);case 7:return je(e,t,t.pendingProps,n),t.child;case 8:return je(e,t,t.pendingProps.children,n),t.child;case 12:return je(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,s=o.value,H(Wo,r._currentValue),r._currentValue=s,a!==null)if(it(a.value,s)){if(a.children===o.children&&!Ne.current){t=jt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){s=a.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(a.tag===1){c=bt(-1,n&-n),c.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?c.next=c:(c.next=p.next,p.next=c),u.pending=c}}a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),Na(a.return,n,t),l.lanes|=n;break}c=c.next}}else if(a.tag===10)s=a.type===t.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(_(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Na(s,n,t),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}je(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,zn(t,n),o=Ke(o),r=r(o),t.flags|=1,je(e,t,r,n),t.child;case 14:return r=t.type,o=Xe(r,t.pendingProps),o=Xe(r.type,o),rc(e,t,r,o,n);case 15:return Ad(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Xe(r,o),jo(e,t),t.tag=1,Oe(r)?(e=!0,Do(t)):e=!1,zn(t,n),Sd(t,r,o),La(t,r,o,n),Ra(null,t,r,!0,e,n);case 19:return Id(e,t,n);case 22:return Cd(e,t,n)}throw Error(_(156,t.tag))};function Kd(e,t){return bu(e,t)}function Df(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ve(e,t,n,r){return new Df(e,t,n,r)}function Ws(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $f(e){if(typeof e=="function")return Ws(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ls)return 11;if(e===cs)return 14}return 2}function Gt(e,t){var n=e.alternate;return n===null?(n=Ve(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Co(e,t,n,r,o,a){var s=2;if(r=e,typeof e=="function")Ws(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Sn:return un(n.children,o,a,t);case ss:s=8,o|=8;break;case ia:return e=Ve(12,n,t,o|2),e.elementType=ia,e.lanes=a,e;case aa:return e=Ve(13,n,t,o),e.elementType=aa,e.lanes=a,e;case sa:return e=Ve(19,n,t,o),e.elementType=sa,e.lanes=a,e;case ou:return mi(n,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case nu:s=10;break e;case ru:s=9;break e;case ls:s=11;break e;case cs:s=14;break e;case Mt:s=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=Ve(s,n,t,o),t.elementType=e,t.type=r,t.lanes=a,t}function un(e,t,n,r){return e=Ve(7,e,r,t),e.lanes=n,e}function mi(e,t,n,r){return e=Ve(22,e,r,t),e.elementType=ou,e.lanes=n,e.stateNode={isHidden:!1},e}function Xi(e,t,n){return e=Ve(6,e,null,t),e.lanes=n,e}function ea(e,t,n){return t=Ve(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Bf(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oi(0),this.expirationTimes=Oi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Us(e,t,n,r,o,a,s,l,c){return e=new Bf(e,t,n,l,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Ve(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},As(a),e}function Wf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Qd(e){if(!e)return Jt;e=e._reactInternals;e:{if(vn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Oe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Oe(n))return Qu(e,n,t)}return t}function Jd(e,t,n,r,o,a,s,l,c){return e=Us(n,r,!0,e,o,a,s,l,c),e.context=Qd(null),n=e.current,r=Ae(),o=Vt(n),a=bt(r,o),a.callback=t??null,Ut(n,a,o),e.current.lanes=o,Ur(e,o,r),Le(e,r),e}function yi(e,t,n,r){var o=t.current,a=Ae(),s=Vt(o);return n=Qd(n),t.context===null?t.context=n:t.pendingContext=n,t=bt(a,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ut(o,t,s),e!==null&&(ot(e,o,s,a),ko(e,o,s)),s}function Xo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function gc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Hs(e,t){gc(e,t),(e=e.alternate)&&gc(e,t)}function Uf(){return null}var Yd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Vs(e){this._internalRoot=e}vi.prototype.render=Vs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));yi(e,t,null,null)};vi.prototype.unmount=Vs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;gn(function(){yi(null,e,null,null)}),t[qt]=null}};function vi(e){this._internalRoot=e}vi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Cu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ot.length&&t!==0&&t<Ot[n].priority;n++);Ot.splice(n,0,e),n===0&&Tu(e)}};function Gs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function mc(){}function Hf(e,t,n,r,o){if(o){if(typeof r=="function"){var a=r;r=function(){var u=Xo(s);a.call(u)}}var s=Jd(t,r,e,0,null,!1,!1,"",mc);return e._reactRootContainer=s,e[qt]=s.current,Ir(e.nodeType===8?e.parentNode:e),gn(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=Xo(c);l.call(u)}}var c=Us(e,0,!1,null,null,!1,!1,"",mc);return e._reactRootContainer=c,e[qt]=c.current,Ir(e.nodeType===8?e.parentNode:e),gn(function(){yi(t,c,n,r)}),c}function wi(e,t,n,r,o){var a=n._reactRootContainer;if(a){var s=a;if(typeof o=="function"){var l=o;o=function(){var c=Xo(s);l.call(c)}}yi(t,s,e,o)}else s=Hf(n,t,e,o,r);return Xo(s)}_u=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=pr(t.pendingLanes);n!==0&&(hs(t,n|1),Le(t,ne()),!(z&6)&&(Gn=ne()+500,Xt()))}break;case 13:gn(function(){var r=St(e,1);if(r!==null){var o=Ae();ot(r,e,1,o)}}),Hs(e,1)}};ps=function(e){if(e.tag===13){var t=St(e,134217728);if(t!==null){var n=Ae();ot(t,e,134217728,n)}Hs(e,134217728)}};Au=function(e){if(e.tag===13){var t=Vt(e),n=St(e,t);if(n!==null){var r=Ae();ot(n,e,t,r)}Hs(e,t)}};Cu=function(){return B};Eu=function(e,t){var n=B;try{return B=e,t()}finally{B=n}};ya=function(e,t,n){switch(t){case"input":if(ua(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ui(r);if(!o)throw Error(_(90));au(r),ua(r,o)}}}break;case"textarea":lu(e,n);break;case"select":t=n.value,t!=null&&Ln(e,!!n.multiple,t,!1)}};gu=Ds;mu=gn;var Vf={usingClientEntryPoint:!1,Events:[Vr,Cn,ui,pu,fu,Ds]},cr={findFiberByHostInstance:an,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gf={bundleType:cr.bundleType,version:cr.version,rendererPackageName:cr.rendererPackageName,rendererConfig:cr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_t.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=xu(e),e===null?null:e.stateNode},findFiberByHostInstance:cr.findFiberByHostInstance||Uf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var po=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!po.isDisabled&&po.supportsFiber)try{ai=po.inject(Gf),ct=po}catch{}}De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vf;De.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gs(t))throw Error(_(200));return Wf(e,t,null,n)};De.createRoot=function(e,t){if(!Gs(e))throw Error(_(299));var n=!1,r="",o=Yd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Us(e,1,!1,null,null,n,!1,r,o),e[qt]=t.current,Ir(e.nodeType===8?e.parentNode:e),new Vs(t)};De.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=xu(t),e=e===null?null:e.stateNode,e};De.flushSync=function(e){return gn(e)};De.hydrate=function(e,t,n){if(!xi(t))throw Error(_(200));return wi(null,e,t,!0,n)};De.hydrateRoot=function(e,t,n){if(!Gs(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,o=!1,a="",s=Yd;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Jd(t,null,e,1,n??null,o,!1,a,s),e[qt]=t.current,Ir(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new vi(t)};De.render=function(e,t,n){if(!xi(t))throw Error(_(200));return wi(null,e,t,!1,n)};De.unmountComponentAtNode=function(e){if(!xi(e))throw Error(_(40));return e._reactRootContainer?(gn(function(){wi(null,null,e,!1,function(){e._reactRootContainer=null,e[qt]=null})}),!0):!1};De.unstable_batchedUpdates=Ds;De.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!xi(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return wi(e,t,n,!1,r)};De.version="18.3.1-next-f1338f8080-20240426";function Zd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zd)}catch(e){console.error(e)}}Zd(),Zc.exports=De;var Kf=Zc.exports,yc=Kf;ra.createRoot=yc.createRoot,ra.hydrateRoot=yc.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $r(){return $r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$r.apply(this,arguments)}var zt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(zt||(zt={}));const vc="popstate";function Qf(e){e===void 0&&(e={});function t(r,o){let{pathname:a,search:s,hash:l}=r.location;return Ja("",{pathname:a,search:s,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:ei(o)}return Yf(t,n,null,e)}function re(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ks(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Jf(){return Math.random().toString(36).substr(2,8)}function xc(e,t){return{usr:e.state,key:e.key,idx:t}}function Ja(e,t,n,r){return n===void 0&&(n=null),$r({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Zn(t):t,{state:n,key:t&&t.key||r||Jf()})}function ei(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Zn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Yf(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:a=!1}=r,s=o.history,l=zt.Pop,c=null,u=p();u==null&&(u=0,s.replaceState($r({},s.state,{idx:u}),""));function p(){return(s.state||{idx:null}).idx}function f(){l=zt.Pop;let j=p(),m=j==null?null:j-u;u=j,c&&c({action:l,location:b.location,delta:m})}function g(j,m){l=zt.Push;let d=Ja(b.location,j,m);u=p()+1;let h=xc(d,u),y=b.createHref(d);try{s.pushState(h,"",y)}catch(v){if(v instanceof DOMException&&v.name==="DataCloneError")throw v;o.location.assign(y)}a&&c&&c({action:l,location:b.location,delta:1})}function x(j,m){l=zt.Replace;let d=Ja(b.location,j,m);u=p();let h=xc(d,u),y=b.createHref(d);s.replaceState(h,"",y),a&&c&&c({action:l,location:b.location,delta:0})}function k(j){let m=o.location.origin!=="null"?o.location.origin:o.location.href,d=typeof j=="string"?j:ei(j);return d=d.replace(/ $/,"%20"),re(m,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,m)}let b={get action(){return l},get location(){return e(o,s)},listen(j){if(c)throw new Error("A history only accepts one active listener");return o.addEventListener(vc,f),c=j,()=>{o.removeEventListener(vc,f),c=null}},createHref(j){return t(o,j)},createURL:k,encodeLocation(j){let m=k(j);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:g,replace:x,go(j){return s.go(j)}};return b}var wc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(wc||(wc={}));function Zf(e,t,n){return n===void 0&&(n="/"),Xf(e,t,n)}function Xf(e,t,n,r){let o=typeof t=="string"?Zn(t):t,a=Qs(o.pathname||"/",n);if(a==null)return null;let s=Xd(e);eg(s);let l=null;for(let c=0;l==null&&c<s.length;++c){let u=hg(a);l=cg(s[c],u)}return l}function Xd(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(a,s,l)=>{let c={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:s,route:a};c.relativePath.startsWith("/")&&(re(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Kt([r,c.relativePath]),p=n.concat(c);a.children&&a.children.length>0&&(re(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Xd(a.children,t,p,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:sg(u,a.index),routesMeta:p})};return e.forEach((a,s)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))o(a,s);else for(let c of eh(a.path))o(a,s,c)}),t}function eh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return o?[a,""]:[a];let s=eh(r.join("/")),l=[];return l.push(...s.map(c=>c===""?a:[a,c].join("/"))),o&&l.push(...s),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function eg(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:lg(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const tg=/^:[\w-]+$/,ng=3,rg=2,og=1,ig=10,ag=-2,bc=e=>e==="*";function sg(e,t){let n=e.split("/"),r=n.length;return n.some(bc)&&(r+=ag),t&&(r+=rg),n.filter(o=>!bc(o)).reduce((o,a)=>o+(tg.test(a)?ng:a===""?og:ig),r)}function lg(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function cg(e,t,n){let{routesMeta:r}=e,o={},a="/",s=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,p=a==="/"?t:t.slice(a.length)||"/",f=ug({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},p),g=c.route;if(!f)return null;Object.assign(o,f.params),s.push({params:o,pathname:Kt([a,f.pathname]),pathnameBase:yg(Kt([a,f.pathnameBase])),route:g}),f.pathnameBase!=="/"&&(a=Kt([a,f.pathnameBase]))}return s}function ug(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=dg(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let a=o[0],s=a.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((u,p,f)=>{let{paramName:g,isOptional:x}=p;if(g==="*"){let b=l[f]||"";s=a.slice(0,a.length-b.length).replace(/(.)\/+$/,"$1")}const k=l[f];return x&&!k?u[g]=void 0:u[g]=(k||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:s,pattern:e}}function dg(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ks(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function hg(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ks(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Qs(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const pg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fg=e=>pg.test(e);function gg(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Zn(e):e,a;if(n)if(fg(n))a=n;else{if(n.includes("//")){let s=n;n=n.replace(/\/\/+/g,"/"),Ks(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?a=kc(n.substring(1),"/"):a=kc(n,t)}else a=t;return{pathname:a,search:vg(r),hash:xg(o)}}function kc(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function ta(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function mg(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Js(e,t){let n=mg(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Ys(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Zn(e):(o=$r({},e),re(!o.pathname||!o.pathname.includes("?"),ta("?","pathname","search",o)),re(!o.pathname||!o.pathname.includes("#"),ta("#","pathname","hash",o)),re(!o.search||!o.search.includes("#"),ta("#","search","hash",o)));let a=e===""||o.pathname==="",s=a?"/":o.pathname,l;if(s==null)l=n;else{let f=t.length-1;if(!r&&s.startsWith("..")){let g=s.split("/");for(;g[0]==="..";)g.shift(),f-=1;o.pathname=g.join("/")}l=f>=0?t[f]:"/"}let c=gg(o,l),u=s&&s!=="/"&&s.endsWith("/"),p=(a||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||p)&&(c.pathname+="/"),c}const Kt=e=>e.join("/").replace(/\/\/+/g,"/"),yg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),vg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,xg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function wg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const th=["post","put","patch","delete"];new Set(th);const bg=["get",...th];new Set(bg);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Br(){return Br=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Br.apply(this,arguments)}const Zs=q.createContext(null),kg=q.createContext(null),en=q.createContext(null),bi=q.createContext(null),At=q.createContext({outlet:null,matches:[],isDataRoute:!1}),nh=q.createContext(null);function qg(e,t){let{relative:n}=t===void 0?{}:t;Xn()||re(!1);let{basename:r,navigator:o}=q.useContext(en),{hash:a,pathname:s,search:l}=oh(e,{relative:n}),c=s;return r!=="/"&&(c=s==="/"?r:Kt([r,s])),o.createHref({pathname:c,search:l,hash:a})}function Xn(){return q.useContext(bi)!=null}function tn(){return Xn()||re(!1),q.useContext(bi).location}function rh(e){q.useContext(en).static||q.useLayoutEffect(e)}function Xs(){let{isDataRoute:e}=q.useContext(At);return e?Pg():Sg()}function Sg(){Xn()||re(!1);let e=q.useContext(Zs),{basename:t,future:n,navigator:r}=q.useContext(en),{matches:o}=q.useContext(At),{pathname:a}=tn(),s=JSON.stringify(Js(o,n.v7_relativeSplatPath)),l=q.useRef(!1);return rh(()=>{l.current=!0}),q.useCallback(function(u,p){if(p===void 0&&(p={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let f=Ys(u,JSON.parse(s),a,p.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Kt([t,f.pathname])),(p.replace?r.replace:r.push)(f,p.state,p)},[t,r,s,a,e])}function jg(){let{matches:e}=q.useContext(At),t=e[e.length-1];return t?t.params:{}}function oh(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=q.useContext(en),{matches:o}=q.useContext(At),{pathname:a}=tn(),s=JSON.stringify(Js(o,r.v7_relativeSplatPath));return q.useMemo(()=>Ys(e,JSON.parse(s),a,n==="path"),[e,s,a,n])}function _g(e,t){return Ag(e,t)}function Ag(e,t,n,r){Xn()||re(!1);let{navigator:o}=q.useContext(en),{matches:a}=q.useContext(At),s=a[a.length-1],l=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let u=tn(),p;if(t){var f;let j=typeof t=="string"?Zn(t):t;c==="/"||(f=j.pathname)!=null&&f.startsWith(c)||re(!1),p=j}else p=u;let g=p.pathname||"/",x=g;if(c!=="/"){let j=c.replace(/^\//,"").split("/");x="/"+g.replace(/^\//,"").split("/").slice(j.length).join("/")}let k=Zf(e,{pathname:x}),b=Ig(k&&k.map(j=>Object.assign({},j,{params:Object.assign({},l,j.params),pathname:Kt([c,o.encodeLocation?o.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?c:Kt([c,o.encodeLocation?o.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),a,n,r);return t&&b?q.createElement(bi.Provider,{value:{location:Br({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:zt.Pop}},b):b}function Cg(){let e=Fg(),t=wg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return q.createElement(q.Fragment,null,q.createElement("h2",null,"Unexpected Application Error!"),q.createElement("h3",{style:{fontStyle:"italic"}},t),n?q.createElement("pre",{style:o},n):null,null)}const Eg=q.createElement(Cg,null);class Tg extends q.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?q.createElement(At.Provider,{value:this.props.routeContext},q.createElement(nh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Mg(e){let{routeContext:t,match:n,children:r}=e,o=q.useContext(Zs);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),q.createElement(At.Provider,{value:t},r)}function Ig(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var a;if(!n)return null;if(n.errors)e=n.matches;else if((a=r)!=null&&a.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,l=(o=n)==null?void 0:o.errors;if(l!=null){let p=s.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);p>=0||re(!1),s=s.slice(0,Math.min(s.length,p+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<s.length;p++){let f=s[p];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=p),f.route.id){let{loaderData:g,errors:x}=n,k=f.route.loader&&g[f.route.id]===void 0&&(!x||x[f.route.id]===void 0);if(f.route.lazy||k){c=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((p,f,g)=>{let x,k=!1,b=null,j=null;n&&(x=l&&f.route.id?l[f.route.id]:void 0,b=f.route.errorElement||Eg,c&&(u<0&&g===0?(Rg("route-fallback"),k=!0,j=null):u===g&&(k=!0,j=f.route.hydrateFallbackElement||null)));let m=t.concat(s.slice(0,g+1)),d=()=>{let h;return x?h=b:k?h=j:f.route.Component?h=q.createElement(f.route.Component,null):f.route.element?h=f.route.element:h=p,q.createElement(Mg,{match:f,routeContext:{outlet:p,matches:m,isDataRoute:n!=null},children:h})};return n&&(f.route.ErrorBoundary||f.route.errorElement||g===0)?q.createElement(Tg,{location:n.location,revalidation:n.revalidation,component:b,error:x,children:d(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):d()},null)}var ih=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ih||{}),ah=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ah||{});function Ng(e){let t=q.useContext(Zs);return t||re(!1),t}function Og(e){let t=q.useContext(kg);return t||re(!1),t}function Lg(e){let t=q.useContext(At);return t||re(!1),t}function sh(e){let t=Lg(),n=t.matches[t.matches.length-1];return n.route.id||re(!1),n.route.id}function Fg(){var e;let t=q.useContext(nh),n=Og(),r=sh();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Pg(){let{router:e}=Ng(ih.UseNavigateStable),t=sh(ah.UseNavigateStable),n=q.useRef(!1);return rh(()=>{n.current=!0}),q.useCallback(function(o,a){a===void 0&&(a={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Br({fromRouteId:t},a)))},[e,t])}const qc={};function Rg(e,t,n){qc[e]||(qc[e]=!0)}function zg(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Dg(e){let{to:t,replace:n,state:r,relative:o}=e;Xn()||re(!1);let{future:a,static:s}=q.useContext(en),{matches:l}=q.useContext(At),{pathname:c}=tn(),u=Xs(),p=Ys(t,Js(l,a.v7_relativeSplatPath),c,o==="path"),f=JSON.stringify(p);return q.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:o}),[u,f,o,n,r]),null}function Tt(e){re(!1)}function $g(e){let{basename:t="/",children:n=null,location:r,navigationType:o=zt.Pop,navigator:a,static:s=!1,future:l}=e;Xn()&&re(!1);let c=t.replace(/^\/*/,"/"),u=q.useMemo(()=>({basename:c,navigator:a,static:s,future:Br({v7_relativeSplatPath:!1},l)}),[c,l,a,s]);typeof r=="string"&&(r=Zn(r));let{pathname:p="/",search:f="",hash:g="",state:x=null,key:k="default"}=r,b=q.useMemo(()=>{let j=Qs(p,c);return j==null?null:{location:{pathname:j,search:f,hash:g,state:x,key:k},navigationType:o}},[c,p,f,g,x,k,o]);return b==null?null:q.createElement(en.Provider,{value:u},q.createElement(bi.Provider,{children:n,value:b}))}function Bg(e){let{children:t,location:n}=e;return _g(Ya(t),n)}new Promise(()=>{});function Ya(e,t){t===void 0&&(t=[]);let n=[];return q.Children.forEach(e,(r,o)=>{if(!q.isValidElement(r))return;let a=[...t,o];if(r.type===q.Fragment){n.push.apply(n,Ya(r.props.children,a));return}r.type!==Tt&&re(!1),!r.props.index||!r.props.children||re(!1);let s={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Ya(r.props.children,a)),n.push(s)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Za(){return Za=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Za.apply(this,arguments)}function Wg(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Ug(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Hg(e,t){return e.button===0&&(!t||t==="_self")&&!Ug(e)}const Vg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Gg="6";try{window.__reactRouterVersion=Gg}catch{}const Kg="startTransition",Sc=Fh[Kg];function Qg(e){let{basename:t,children:n,future:r,window:o}=e,a=q.useRef();a.current==null&&(a.current=Qf({window:o,v5Compat:!0}));let s=a.current,[l,c]=q.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},p=q.useCallback(f=>{u&&Sc?Sc(()=>c(f)):c(f)},[c,u]);return q.useLayoutEffect(()=>s.listen(p),[s,p]),q.useEffect(()=>zg(r),[r]),q.createElement($g,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}const Jg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Yg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_e=q.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:a,replace:s,state:l,target:c,to:u,preventScrollReset:p,viewTransition:f}=t,g=Wg(t,Vg),{basename:x}=q.useContext(en),k,b=!1;if(typeof u=="string"&&Yg.test(u)&&(k=u,Jg))try{let h=new URL(window.location.href),y=u.startsWith("//")?new URL(h.protocol+u):new URL(u),v=Qs(y.pathname,x);y.origin===h.origin&&v!=null?u=v+y.search+y.hash:b=!0}catch{}let j=qg(u,{relative:o}),m=Zg(u,{replace:s,state:l,target:c,preventScrollReset:p,relative:o,viewTransition:f});function d(h){r&&r(h),h.defaultPrevented||m(h)}return q.createElement("a",Za({},g,{href:k||j,onClick:b||a?r:d,ref:n,target:c}))});var jc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(jc||(jc={}));var _c;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(_c||(_c={}));function Zg(e,t){let{target:n,replace:r,state:o,preventScrollReset:a,relative:s,viewTransition:l}=t===void 0?{}:t,c=Xs(),u=tn(),p=oh(e,{relative:s});return q.useCallback(f=>{if(Hg(f,n)){f.preventDefault();let g=r!==void 0?r:ei(u)===ei(p);c(e,{replace:g,state:o,preventScrollReset:a,relative:s,viewTransition:l})}},[u,c,p,r,o,n,e,a,s,l])}/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Xg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=(e,t)=>{const n=q.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:a=2,absoluteStrokeWidth:s,className:l="",children:c,...u},p)=>q.createElement("svg",{ref:p,...Xg,width:o,height:o,stroke:r,strokeWidth:s?Number(a)*24/Number(o):a,className:["lucide",`lucide-${em(e)}`,l].join(" "),...u},[...t.map(([f,g])=>q.createElement(f,g)),...Array.isArray(c)?c:[c]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=Be("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=Be("FlaskConical",[["path",{d:"M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2",key:"pzvekw"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M7 16h10",key:"wp8him"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=Be("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=Be("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=Be("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=Be("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=Be("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=Be("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=Be("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=Be("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=Be("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=Be("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=Be("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),el="M50 12 C56 24 56 34 50 44 C44 34 44 24 50 12 Z",pm="M50 28 C54 35 54 41 50 46 C46 41 46 35 50 28 Z",Ac=e=>e*Math.PI/180,tl=(e,t)=>[50+e*Math.cos(Ac(t)),50+e*Math.sin(Ac(t))];function fm(){return i.jsxs(i.Fragment,{children:[i.jsx("circle",{cx:"50",cy:"50",r:"47.5",strokeOpacity:"0.22",strokeWidth:"0.6",strokeDasharray:"2 3"}),i.jsx("circle",{cx:"50",cy:"50",r:"40",strokeOpacity:"0.45",strokeWidth:"0.7"}),Array.from({length:8},(e,t)=>i.jsx("path",{d:el,transform:`rotate(${t*45} 50 50)`,strokeOpacity:"0.85"},`o${t}`)),Array.from({length:8},(e,t)=>{const[n,r]=tl(33,t*45+22.5);return i.jsx("circle",{cx:n,cy:r,r:"1.3",fill:"currentColor",stroke:"none",fillOpacity:"0.55"},`d${t}`)}),Array.from({length:8},(e,t)=>i.jsx("path",{d:pm,transform:`rotate(${t*45+22.5} 50 50)`,strokeOpacity:"0.7"},`i${t}`)),i.jsx("circle",{cx:"50",cy:"50",r:"8",strokeOpacity:"0.85"}),i.jsx("circle",{cx:"50",cy:"50",r:"3",fill:"currentColor",stroke:"none",fillOpacity:"0.8"})]})}function gm(){return i.jsxs(i.Fragment,{children:[i.jsx("rect",{x:"10",y:"10",width:"80",height:"80",strokeOpacity:"0.25",strokeWidth:"0.7",strokeDasharray:"3 3"}),Array.from({length:4},(e,t)=>i.jsx("path",{d:el,transform:`rotate(${t*90} 50 50)`,strokeOpacity:"0.85"},`q${t}`)),Array.from({length:4},(e,t)=>{const[n,r]=tl(33,t*90+45);return i.jsx("path",{d:"M0 -4.5 L4.5 0 0 4.5 -4.5 0 Z",transform:`translate(${n} ${r})`,strokeOpacity:"0.6"},`s${t}`)}),i.jsx("circle",{cx:"50",cy:"50",r:"7",strokeOpacity:"0.85"}),i.jsx("circle",{cx:"50",cy:"50",r:"2.5",fill:"currentColor",stroke:"none",fillOpacity:"0.8"})]})}function mm(){return i.jsxs(i.Fragment,{children:[i.jsx("circle",{cx:"50",cy:"50",r:"47.5",strokeOpacity:"0.22",strokeWidth:"0.6",strokeDasharray:"2 3"}),i.jsx("circle",{cx:"50",cy:"50",r:"41",strokeOpacity:"0.5",strokeWidth:"0.7"}),Array.from({length:12},(e,t)=>i.jsx("path",{d:el,transform:`rotate(${t*30} 50 50)`,strokeOpacity:"0.8"},`r${t}`)),i.jsx("circle",{cx:"50",cy:"50",r:"22",strokeOpacity:"0.6"}),i.jsx("circle",{cx:"50",cy:"50",r:"8",strokeOpacity:"0.8"}),i.jsx("circle",{cx:"50",cy:"50",r:"2.5",fill:"currentColor",stroke:"none",fillOpacity:"0.75"})]})}function ym(){const e=Array.from({length:6},(t,n)=>tl(27,-90+n*60));return i.jsxs(i.Fragment,{children:[i.jsx("circle",{cx:"50",cy:"50",r:"46",strokeOpacity:"0.5",strokeWidth:"0.8"}),i.jsx("circle",{cx:"50",cy:"50",r:"47.5",strokeOpacity:"0.2",strokeWidth:"0.6",strokeDasharray:"2 3"}),e.map((t,n)=>{const r=e[(n+2)%6];return i.jsx("line",{x1:t[0],y1:t[1],x2:r[0],y2:r[1],strokeOpacity:"0.85"},`a${n}`)}),i.jsx("circle",{cx:"50",cy:"50",r:"6",strokeOpacity:"0.7"})]})}function ti({variant:e="rosette",className:t="",spin:n=!1}){return i.jsx("svg",{viewBox:"0 0 100 100","aria-hidden":!0,className:`${n?"rosette-spin ":""}${t}`,children:i.jsx("g",{fill:"none",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round",children:e==="quad"?i.jsx(gm,{}):e==="ring"?i.jsx(mm,{}):e==="aperture"?i.jsx(ym,{}):i.jsx(fm,{})})})}var ch={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Cc=wt.createContext&&wt.createContext(ch),vm=["attr","size","title"];function xm(e,t){if(e==null)return{};var n=wm(e,t),r,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function wm(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function ni(){return ni=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ni.apply(this,arguments)}function Ec(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function ri(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ec(Object(n),!0).forEach(function(r){bm(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ec(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function bm(e,t,n){return t=km(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function km(e){var t=qm(e,"string");return typeof t=="symbol"?t:t+""}function qm(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function uh(e){return e&&e.map((t,n)=>wt.createElement(t.tag,ri({key:n},t.attr),uh(t.child)))}function nl(e){return t=>wt.createElement(Sm,ni({attr:ri({},e.attr)},t),uh(e.child))}function Sm(e){var t=n=>{var{attr:r,size:o,title:a}=e,s=xm(e,vm),l=o||n.size||"1em",c;return n.className&&(c=n.className),e.className&&(c=(c?c+" ":"")+e.className),wt.createElement("svg",ni({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:c,style:ri(ri({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),a&&wt.createElement("title",null,a),e.children)};return Cc!==void 0?wt.createElement(Cc.Consumer,null,n=>t(n)):t(ch)}function jm(e){return nl({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"},child:[]}]})(e)}function _m(e){return nl({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function Am(e){return nl({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M564.7 230.1V803h60l25.2 71.4L756.3 803h131.5V230.1H564.7zm247.7 497h-59.9l-75.1 50.4-17.8-50.4h-18V308.3h170.7v418.8zM526.1 486.9H393.3c2.1-44.9 4.3-104.3 6.6-172.9h130.9l-.1-8.1c0-.6-.2-14.7-2.3-29.1-2.1-15-6.6-34.9-21-34.9H287.8c4.4-20.6 15.7-69.7 29.4-93.8l6.4-11.2-12.9-.7c-.8 0-19.6-.9-41.4 10.6-35.7 19-51.7 56.4-58.7 84.4-18.4 73.1-44.6 123.9-55.7 145.6-3.3 6.4-5.3 10.2-6.2 12.8-1.8 4.9-.8 9.8 2.8 13 10.5 9.5 38.2-2.9 38.5-3 .6-.3 1.3-.6 2.2-1 13.9-6.3 55.1-25 69.8-84.5h56.7c.7 32.2 3.1 138.4 2.9 172.9h-141l-2.1 1.5c-23.1 16.9-30.5 63.2-30.8 65.2l-1.4 9.2h167c-12.3 78.3-26.5 113.4-34 127.4-3.7 7-7.3 14-10.7 20.8-21.3 42.2-43.4 85.8-126.3 153.6-3.6 2.8-7 8-4.8 13.7 2.4 6.3 9.3 9.1 24.6 9.1 5.4 0 11.8-.3 19.4-1 49.9-4.4 100.8-18 135.1-87.6 17-35.1 31.7-71.7 43.9-108.9L497 850l5-12c.8-1.9 19-46.3 5.1-95.9l-.5-1.8-108.1-123-22 16.6c6.4-26.1 10.6-49.9 12.5-71.1h158.7v-8c0-40.1-18.5-63.9-19.2-64.9l-2.4-3z"},child:[]}]})(e)}const Cm="/assets/avatar-edinburgh-Cx24FfGO.jpg",me={name:"Levi Wang",headline:{en:"Levi Wang",zh:"Levi Wang"},status:{en:"Founding engineer @ HUMANLAYA AI",zh:"HUMANLAYA AI 创始工程师"},description:{en:"AI algorithm & infra engineer and project manager: focused on building high-quality training and evaluation data, designing data-synthesis algorithms around an Expert-in-the-Loop philosophy, and building enterprise AI infrastructure — evaluation, data-synthesis, and data-delivery platforms. Off the clock: photography, cycling, and trekking.",zh:"AI 算法 & Infra 工程师 & 项目经理：主攻高质量训练与评测数据构建，以 Expert-in-Loop 为理念设计数据合成算法，同时负责企业 AI Infra 设施搭建，包括评测平台、数据合成平台、数据交付平台等；闲暇时间热爱摄影、骑行与徒步。"},bio:{en:"AI algorithm engineer working on evaluation science, synthetic/RL data, and agentic systems, with the infrastructure background to run them at scale. Founding engineer @ HUMANLAYA AI; previously @ Fintopia, ByteDance (Doubao VLM evals), and PwC.",zh:"AI 算法工程师，方向为评测科学、合成/RL 数据与智能体系统，也有把它们跑在生产规模上的基础设施功底。现任 HUMANLAYA AI 创始工程师；此前在 Fintopia、字节跳动（豆包 VLM 评测）与普华永道。"},location:{en:"Beijing, China",zh:"中国 · 北京"},resumeEmail:"wang.z.levi@gmail.com",phone:"+86 156 6648 4812",startDate:"2026-01-01",avatar:Cm,social:[{name:"GitHub",url:"https://github.com/levizwang",icon:_m,size:20},{name:"LinkedIn",url:"https://www.linkedin.com/in/levizwang",icon:am,size:20},{name:"X",url:"https://x.com/Levi2Crypto",icon:jm,size:16},{name:"Zhihu",url:"https://www.zhihu.com/people/levi.eth",icon:Am,size:20},{name:"Email",url:"mailto:wang.z.levi@gmail.com",icon:sm,size:20}],nav:[{name:{en:"Home",zh:"首页"},path:"/"},{name:{en:"Projects",zh:"项目"},path:"/projects"},{name:{en:"Writing",zh:"文章"},path:"/posts"},{name:{en:"Optics",zh:"光影"},path:"/optics"}]};function Em(e,t){return t==null?"":typeof t=="string"?t:t[e]}const dh=q.createContext({lang:"en",setLang:()=>{},toggle:()=>{}});function Tm(){var e;try{const t=new URLSearchParams(window.location.search).get("lang");if(t==="en"||t==="zh")return t;const n=localStorage.getItem("lang");if(n==="en"||n==="zh")return n}catch{}return typeof navigator<"u"&&((e=navigator.language)!=null&&e.toLowerCase().startsWith("zh"))?"zh":"en"}function Mm({children:e}){const[t,n]=q.useState(Tm);q.useEffect(()=>{try{localStorage.setItem("lang",t)}catch{}document.documentElement.lang=t==="zh"?"zh-CN":"en"},[t]);const r=()=>n(o=>o==="en"?"zh":"en");return i.jsx(dh.Provider,{value:{lang:t,setLang:n,toggle:r},children:e})}function ki(){return q.useContext(dh)}function ie(){const{lang:e}=ki();return t=>Em(e,t)}function rl(e,t){return e[t]??{en:t,zh:t}}const F={viewWork:{en:"Selected work",zh:"精选项目"},readWriting:{en:"Read writing",zh:"阅读文章"},readDeepDive:{en:"Read the deep dive",zh:"阅读深度文章"},atScale:{en:"At scale",zh:"规模"},buildEyebrow:{en:"What I build",zh:"我做什么"},buildTitle:{en:"Four problems I keep coming back to.",zh:"长期投入的四类问题。"},expEyebrow:{en:"Career",zh:"履历"},workEyebrow:{en:"Work",zh:"项目"},writingEyebrow:{en:"Writing",zh:"文章"},eduEyebrow:{en:"Background",zh:"背景"},experience:{en:"Experience",zh:"工作经历"},experienceSub:{en:"Evaluation science · synthetic data · agents.",zh:"评测科学 · 合成数据 · Agent"},selectedWork:{en:"Selected Work",zh:"精选项目"},viewAllProjects:{en:"View All Projects",zh:"查看全部项目"},writing:{en:"Writing",zh:"文章"},viewAllArticles:{en:"View All Articles",zh:"查看全部文章"},noArticles:{en:"No matching articles",zh:"没有符合条件的文章"},education:{en:"Education",zh:"教育经历"},skillsInterests:{en:"Skills & Interests",zh:"技能与兴趣"},beyondWork:{en:"Beyond Work",zh:"工作之外"},runningFor:{en:"Running for",zh:"已运行"},days:{en:"days",zh:"天"},projectsTitle:{en:"Projects",zh:"项目"},opticsTitle:{en:"Optics",zh:"光影"},opticsSub:{en:"Capturing light in the Dark Forest. 35mm & Digital.",zh:"在黑暗森林中捕捉光。35mm 与数码。"},articleNotFound:{en:"Article Not Found",zh:"文章未找到"},toc:{en:"Contents",zh:"目录"},tocEmpty:{en:"No headings",zh:"暂无目录"},loadMore:{en:"Load More",zh:"加载更多"},closeLightbox:{en:"Close",zh:"关闭"},techSpecs:{en:"Technical Specifications",zh:"技术参数"},story:{en:"The Story",zh:"拍摄手记"},camera:{en:"Camera",zh:"机身"},lens:{en:"Lens",zh:"镜头"},iso:{en:"ISO",zh:"ISO"},aperture:{en:"Aperture",zh:"光圈"},shutter:{en:"Shutter",zh:"快门"}},hh={"AI Evaluation":{en:"AI Evaluation",zh:"AI 评测"},Web3:{en:"Web3",zh:"Web3"}},Im={All:{en:"All",zh:"全部"},Street:{en:"Street",zh:"街拍"},Urban:{en:"Urban",zh:"城市"},Nature:{en:"Nature",zh:"自然"}},Tc=["rosette","quad","ring","aperture"];function Nm(){const{lang:e,toggle:t}=ki(),n=ie(),{pathname:r}=tn(),[o,a]=q.useState(!1),[s,l]=q.useState(!1),[c,u]=q.useState(()=>typeof window<"u"&&document.documentElement.classList.contains("dark"));q.useEffect(()=>{const g=()=>l(window.scrollY>12);return g(),window.addEventListener("scroll",g,{passive:!0}),()=>window.removeEventListener("scroll",g)},[]),q.useEffect(()=>{document.documentElement.classList.toggle("dark",c);try{localStorage.setItem("theme",c?"dark":"light")}catch{}},[c]),q.useEffect(()=>a(!1),[r]);const p=g=>g==="/"?r==="/":r.startsWith(g),f="inline-flex h-9 items-center justify-center border border-line bg-surface/70 text-muted-foreground backdrop-blur transition-colors hover:text-foreground hover:border-foreground/50";return i.jsxs("header",{className:"fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3",children:[i.jsxs("div",{className:`flex w-full max-w-content items-center justify-between px-3 py-2 pl-5 transition-all duration-300 ${s||o?"glass border border-line shadow-soft":"border border-transparent"}`,children:[i.jsxs(_e,{to:"/",className:"flex items-baseline gap-2.5",children:[i.jsx("span",{className:"text-[15px] font-semibold tracking-tight",children:"Levi Wang"}),i.jsx("span",{className:"hidden font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground md:inline",children:"Field Notes 001"})]}),i.jsxs("div",{className:"flex items-center gap-1.5",children:[i.jsx("nav",{className:"mr-1 hidden items-center gap-0.5 sm:flex",children:me.nav.map((g,x)=>i.jsxs(_e,{to:g.path,className:`inline-flex items-center px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors ${p(g.path)?"text-foreground":"text-muted-foreground hover:text-foreground"}`,children:[i.jsx(ti,{variant:Tc[x],className:"mr-1.5 h-4 w-4"}),n(g.name)]},g.path))}),i.jsxs("button",{type:"button","aria-label":e==="en"?"切换到中文":"Switch to English",onClick:t,className:`${f} gap-1 px-2.5 font-mono text-xs font-medium`,children:[i.jsx(om,{className:"h-3.5 w-3.5"}),e==="en"?"中":"EN"]}),i.jsx("button",{type:"button","aria-label":c?"Light mode":"Dark mode",onClick:()=>u(g=>!g),className:`${f} w-9`,children:c?i.jsx(dm,{className:"h-4 w-4"}):i.jsx(um,{className:"h-4 w-4"})}),i.jsx("button",{type:"button","aria-label":"Menu",onClick:()=>a(g=>!g),className:`${f} w-9 sm:hidden`,children:o?i.jsx(lh,{className:"h-4 w-4"}):i.jsx(cm,{className:"h-4 w-4"})})]})]}),o&&i.jsx("div",{className:"glass absolute inset-x-4 top-[4.5rem] border border-line p-2 shadow-float sm:hidden",children:me.nav.map((g,x)=>i.jsxs(_e,{to:g.path,className:`flex items-center px-4 py-3 font-mono text-[13px] uppercase tracking-[0.12em] ${p(g.path)?"bg-secondary text-foreground":"text-muted-foreground"}`,children:[i.jsx(ti,{variant:Tc[x],className:"mr-2.5 h-4 w-4"}),n(g.name)]},g.path))})]})}const Om="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";function Lm(e){const[t,n]=q.useState(!1),r=()=>{n(!0)},{src:o,alt:a,className:s,...l}=e;return t?i.jsx("div",{className:`inline-block bg-gray-100 text-center align-middle ${s??""}`,children:i.jsx("div",{className:"flex items-center justify-center w-full h-full",children:i.jsx("img",{src:Om,alt:"Error loading image",...l,"data-original-url":o})})}):i.jsx("img",{src:o,alt:a,className:s,...l,onError:r})}function ph({className:e=""}){return i.jsx("div",{className:`flex items-center gap-5 ${e}`,children:me.social.map(t=>i.jsx("a",{href:t.url,target:"_blank",rel:"noopener noreferrer","aria-label":t.name,className:"text-muted-foreground transition-colors hover:text-foreground",children:i.jsx(t.icon,{size:t.size})},t.name))})}function fo({className:e}){return i.jsx("svg",{"aria-hidden":!0,viewBox:"0 0 12 12",className:`pointer-events-none absolute z-10 h-3 w-3 text-foreground/45 ${e}`,children:i.jsx("path",{d:"M6 0.5V11.5M0.5 6H11.5",stroke:"currentColor",strokeWidth:"1"})})}function oi({className:e="",marks:t=!0,interactive:n=!1,children:r}){return i.jsxs("div",{className:`relative ${n?"plate-interactive ":""}${e}`,children:[t&&i.jsxs(i.Fragment,{children:[i.jsx(fo,{className:"-left-2 -top-2"}),i.jsx(fo,{className:"-right-2 -top-2"}),i.jsx(fo,{className:"-bottom-2 -left-2"}),i.jsx(fo,{className:"-bottom-2 -right-2"})]}),i.jsx("div",{className:"surface h-full overflow-hidden",children:r})]})}function Kn({left:e,right:t}){return i.jsxs("div",{className:"strip",children:[i.jsx("span",{className:"truncate",children:e}),t!=null&&i.jsx("span",{className:"shrink-0 text-right",children:t})]})}const R="SF Mono, JetBrains Mono, ui-monospace, Menlo, monospace";function Fm(e){let t=e>>>0;return()=>{t|=0,t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function fh({x:e,y:t,text:n}){return i.jsxs("g",{stroke:"currentColor",fill:"none",children:[i.jsx("text",{x:e,y:t,fontFamily:R,fontSize:"11",letterSpacing:"2",fill:"currentColor",stroke:"none",fillOpacity:"0.85",children:n}),i.jsx("path",{d:`M${e},${t+6}H${e+n.length*8.6}`,strokeOpacity:"0.6",strokeWidth:"1"})]})}function gh({x:e,y:t,deg:n,opacity:r=.85}){return i.jsx("path",{d:"M0,0 L-7,3 L-7,-3 Z",fill:"currentColor",stroke:"none",fillOpacity:r,transform:`translate(${e},${t}) rotate(${n})`})}function Nt({x1:e,y1:t,x2:n,y2:r,dashed:o=!1,opacity:a=.8}){const s=Math.atan2(r-t,n-e)*180/Math.PI,l=Math.hypot(n-e,r-t),c=(l-6)/l,u=e+(n-e)*c,p=t+(r-t)*c;return i.jsxs("g",{stroke:"currentColor",fill:"none",strokeOpacity:a,children:[i.jsx("path",{d:`M${e},${t}L${u},${p}`,strokeWidth:"1",strokeDasharray:o?"4 4":void 0}),i.jsx(gh,{x:n,y:r,deg:s,opacity:a})]})}const Pm=[["SUBJECT:","LLM-JUDGED BENCHMARK"],["MEDIUM:","134 LEGAL ITEMS"],["UNITS:","SCORE 0–1"],["ANALYST:","L. WANG"],["REV:","A1"],["FILE:","EB01"]];function Rm(){return i.jsxs("g",{stroke:"currentColor",fill:"none",children:[i.jsx("rect",{x:856,y:26,width:318,height:138,className:"fill-surface",strokeOpacity:"0.7",strokeWidth:"1"}),Pm.map(([e,t],n)=>i.jsxs("g",{children:[i.jsx("text",{x:868,y:50+n*20.5,fontFamily:R,fontSize:"10.5",fill:"currentColor",stroke:"none",fillOpacity:"0.6",children:e}),i.jsx("text",{x:1e3,y:50+n*20.5,fontFamily:R,fontSize:"10.5",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.9",children:t})]},e))]})}function zm(){return i.jsxs("g",{stroke:"currentColor",fill:"none",children:[i.jsx("text",{x:28,y:130,fontFamily:R,fontSize:"10",letterSpacing:"2",fill:"currentColor",stroke:"none",fillOpacity:"0.85",children:"NOTES"}),i.jsx("path",{d:"M28,136H76",strokeOpacity:"0.6",strokeWidth:"1"}),["** 132 / 134 ITEMS TRACK RUBRIC HITS","** 2 ITEMS ZEROED BY JUDGE MISREAD","** SEE FATAL-ZERO CALLOUT, LOWER RIGHT"].map((e,t)=>i.jsx("text",{x:28,y:156+t*16,fontFamily:R,fontSize:"8.5",letterSpacing:"0.5",fill:"currentColor",stroke:"none",fillOpacity:"0.7",children:e},e))]})}const N={x0:320,y0:480,w:480,h:360},Ze=e=>N.x0+e*N.w,pe=e=>N.y0-e*N.h;function Dm(){const e=Fm(134),t=[];for(let n=0;n<132;n++){const r=.05+.9*((e()+e())/2),o=Math.min(.985,Math.max(.03,r+(e()+e()-1)*.15));t.push({x:Ze(r),y:pe(o),o:.35+e()*.35})}return i.jsx("g",{fill:"currentColor",stroke:"none",children:t.map((n,r)=>i.jsx("circle",{cx:n.x.toFixed(1),cy:n.y.toFixed(1),r:"1.8",fillOpacity:n.o.toFixed(2)},r))})}function $m(){const e=[[.91,.04],[.93,.02]];return i.jsxs("g",{stroke:"currentColor",fill:"none",children:[[.2,.4,.6,.8].map(t=>i.jsx("path",{d:`M${Ze(t)},${N.y0}V${N.y0-N.h}M${N.x0},${pe(t)}H${N.x0+N.w}`,strokeOpacity:"0.14",strokeWidth:"0.7",strokeDasharray:"2 4"},`g${t}`)),i.jsx("rect",{x:N.x0,y:pe(.7),width:N.w,height:pe(.5)-pe(.7),fill:"url(#ff-band)",stroke:"none"}),i.jsx("path",{d:`M${N.x0},${pe(.5)}H${N.x0+N.w}M${N.x0},${pe(.7)}H${N.x0+N.w}`,strokeOpacity:"0.5",strokeWidth:"1",strokeDasharray:"4 4"}),i.jsx("text",{x:N.x0+8,y:pe(.7)-8,fontFamily:R,fontSize:"8",letterSpacing:"1.5",fill:"currentColor",stroke:"none",fillOpacity:"0.7",children:"ACCEPTANCE BAND 0.5–0.7"}),i.jsx("path",{d:`M${N.x0},${N.y0}L${N.x0+N.w},${N.y0-N.h}`,strokeOpacity:"0.5",strokeWidth:"1",strokeDasharray:"5 5"}),i.jsx("text",{x:0,y:0,textAnchor:"middle",fontFamily:R,fontSize:"8.5",letterSpacing:"1.5",fill:"currentColor",stroke:"none",fillOpacity:"0.65",transform:"translate(553,287) rotate(-36.87)",children:"EXPECTED AGREEMENT"}),i.jsx(Dm,{}),i.jsx("path",{d:`M${Ze(.648)-10},${pe(.648)}H${Ze(.648)+10}M${Ze(.648)},${pe(.648)-10}V${pe(.648)+10}`,strokeOpacity:"0.9",strokeWidth:"1.2"}),i.jsx("circle",{cx:Ze(.648),cy:pe(.648),r:"2.2",fill:"currentColor",stroke:"none",fillOpacity:"0.9"}),i.jsx("text",{x:Ze(.648)+14,y:pe(.648)+18,fontFamily:R,fontSize:"8.5",letterSpacing:"1.5",fill:"currentColor",stroke:"none",fillOpacity:"0.85",children:"FINAL MEAN 0.648"}),e.map(([t,n])=>i.jsxs("g",{children:[i.jsx("circle",{cx:Ze(t),cy:pe(n),r:"6.5",strokeOpacity:"0.9",strokeWidth:"1"}),i.jsx("text",{x:Ze(t),y:pe(n)+3.5,textAnchor:"middle",fontFamily:R,fontSize:"9",fill:"currentColor",stroke:"none",fillOpacity:"0.9",children:"✗"})]},t)),i.jsx("path",{d:"M749,461 L586,429",strokeOpacity:"0.55",strokeWidth:"0.7"}),i.jsx("circle",{cx:749,cy:461,r:"1.6",fill:"currentColor",stroke:"none",fillOpacity:"0.7"}),i.jsx("text",{x:340,y:420,fontFamily:R,fontSize:"8.5",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.85",children:"FATAL ZERO ×2 —"}),i.jsx("text",{x:340,y:433,fontFamily:R,fontSize:"8.5",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.85",children:"IN-MATERIAL CITATION MISREAD AS LEAKAGE"}),i.jsx("path",{d:`M${N.x0},${N.y0}H${N.x0+N.w}M${N.x0},${N.y0}V${N.y0-N.h}`,strokeOpacity:"0.85",strokeWidth:"1.2"}),[0,.2,.4,.6,.8,1].map(t=>i.jsxs("g",{children:[i.jsx("path",{d:`M${Ze(t)},${N.y0}V${N.y0+5}`,strokeOpacity:"0.7",strokeWidth:"1"}),i.jsx("path",{d:`M${N.x0-5},${pe(t)}H${N.x0}`,strokeOpacity:"0.7",strokeWidth:"1"}),i.jsx("text",{x:Ze(t),y:N.y0+16,textAnchor:"middle",fontFamily:R,fontSize:"8.5",fill:"currentColor",stroke:"none",fillOpacity:"0.65",children:t.toFixed(1)}),i.jsx("text",{x:N.x0-9,y:pe(t)+3,textAnchor:"end",fontFamily:R,fontSize:"8.5",fill:"currentColor",stroke:"none",fillOpacity:"0.65",children:t.toFixed(1)})]},`a${t}`)),i.jsx("text",{x:N.x0+N.w/2,y:N.y0+34,textAnchor:"middle",fontFamily:R,fontSize:"9",letterSpacing:"2",fill:"currentColor",stroke:"none",fillOpacity:"0.75",children:"RUBRIC POSITIVE-HIT RATE"}),i.jsx("text",{x:284,y:N.y0-N.h/2,textAnchor:"middle",fontFamily:R,fontSize:"9",letterSpacing:"2",fill:"currentColor",stroke:"none",fillOpacity:"0.75",transform:`rotate(-90 284 ${N.y0-N.h/2})`,children:"JUDGE SCORE"})]})}const te={x0:860,x1:1160,base:300,top:215},Ye=e=>te.base-(e-.4)*((te.base-te.top)/.5),nn=[{x:890,v:.821,label:"ROUND 0"},{x:1010,v:.73,label:"ROUND 1"},{x:1130,v:.648,label:"ROUND 2"}];function Bm(){return i.jsxs("g",{stroke:"currentColor",fill:"none",children:[i.jsx(fh,{x:840,y:200,text:"REWORK TRAJECTORY"}),i.jsx("path",{d:`M${te.x0},${Ye(.5)}H${te.x1}M${te.x0},${Ye(.7)}H${te.x1}`,strokeOpacity:"0.5",strokeWidth:"1",strokeDasharray:"4 4"}),i.jsx("text",{x:te.x0+2,y:Ye(.7)-4,fontFamily:R,fontSize:"7",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.6",children:"ACCEPTANCE BAND"}),i.jsx("text",{x:te.x0-4,y:Ye(.5)+3,textAnchor:"end",fontFamily:R,fontSize:"7",fill:"currentColor",stroke:"none",fillOpacity:"0.55",children:"0.5"}),i.jsx("text",{x:te.x0-4,y:Ye(.7)+3,textAnchor:"end",fontFamily:R,fontSize:"7",fill:"currentColor",stroke:"none",fillOpacity:"0.55",children:"0.7"}),i.jsx("path",{d:`M${te.x0},${te.base}H${te.x1}M${te.x0},${te.base}V${te.top}`,strokeOpacity:"0.85",strokeWidth:"1.2"}),i.jsx("path",{d:`M${nn[0].x},${Ye(nn[0].v)} L${nn[1].x},${Ye(nn[1].v)} L${nn[2].x},${Ye(nn[2].v)}`,strokeOpacity:"0.9",strokeWidth:"1.4"}),nn.map((e,t)=>i.jsxs("g",{children:[i.jsx("circle",{cx:e.x,cy:Ye(e.v),r:"3",fill:"currentColor",stroke:"none",fillOpacity:"0.9"}),i.jsx("path",{d:`M${e.x},${te.base}V${te.base+4}`,strokeOpacity:"0.7",strokeWidth:"1"}),i.jsx("text",{x:e.x,y:te.base+14,textAnchor:"middle",fontFamily:R,fontSize:"7.5",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.65",children:e.label}),i.jsx("text",{x:e.x,y:t===2?Ye(e.v)+14:Ye(e.v)-9,textAnchor:"middle",fontFamily:R,fontSize:"8.5",fill:"currentColor",stroke:"none",fillOpacity:"0.85",children:e.v.toFixed(3)})]},e.label)),i.jsx(Nt,{x1:1150,y1:232,x2:1150,y2:254,opacity:.7}),i.jsx(Nt,{x1:868,y1:254,x2:868,y2:232,opacity:.7}),i.jsx("text",{x:te.x0,y:330,fontFamily:R,fontSize:"8.5",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.75",children:"▼ −0.139 REWORK / ROUND"}),i.jsx("text",{x:te.x0,y:346,fontFamily:R,fontSize:"8.5",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.75",children:"▲ +0.159 EFFORT (CONTROL)"})]})}const Wm=[{x:850,y:420,label:"READ"},{x:930,y:420,label:"QUOTE"},{x:1010,y:420,label:"CALC"},{x:1090,y:420,label:"FINAL"},{x:950,y:466,label:"REASON"},{x:850,y:466,label:"HURDLE",gate:!0}];function Um(){return i.jsxs("g",{stroke:"currentColor",fill:"none",children:[i.jsx(fh,{x:840,y:395,text:"RUBRIC DAG — PROCESS-AWARE"}),Wm.map(e=>i.jsxs("g",{children:[i.jsx("rect",{x:e.x,y:e.y,width:60,height:20,className:"fill-surface",strokeOpacity:"0.8",strokeWidth:"1"}),e.gate&&i.jsx("rect",{x:e.x+2.5,y:e.y+2.5,width:55,height:15,strokeOpacity:"0.55",strokeWidth:"0.8"}),i.jsx("text",{x:e.x+30,y:e.y+13.5,textAnchor:"middle",fontFamily:R,fontSize:"7",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.9",children:e.label})]},e.label)),i.jsx(Nt,{x1:912,y1:430,x2:928,y2:430}),i.jsx(Nt,{x1:992,y1:430,x2:1008,y2:430}),i.jsx(Nt,{x1:1072,y1:430,x2:1088,y2:430}),i.jsx(Nt,{x1:962,y1:442,x2:968,y2:464}),i.jsx(Nt,{x1:1012,y1:470,x2:1098,y2:444}),i.jsx(Nt,{x1:880,y1:442,x2:880,y2:464}),i.jsx("path",{d:"M880,486 V502",strokeOpacity:"0.6",strokeWidth:"1",strokeDasharray:"4 4"}),i.jsx("text",{x:880,y:514,textAnchor:"middle",fontFamily:R,fontSize:"9",fill:"currentColor",stroke:"none",fillOpacity:"0.8",children:"✗"}),i.jsx("text",{x:892,y:514,fontFamily:R,fontSize:"7",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.7",children:"FAIL"}),i.jsx("text",{x:918,y:530,fontFamily:R,fontSize:"7",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.6",children:"HURDLE — MUST PASS"})]})}const Hm=[{sym:"dots",label:"BENCHMARK ITEM (N=134)"},{sym:"text",symText:"⊗",label:"FATAL ZERO (JUDGE DEFECT)"},{sym:"dash",label:"ACCEPTANCE BAND 0.5–0.7"},{sym:"arrow",label:"REWORK TRAJECTORY"},{sym:"text",symText:"▲",label:"CONTROL-GROUP CONFOUND"}];function Vm(){return i.jsxs("g",{stroke:"currentColor",fill:"none",children:[i.jsx("rect",{x:28,y:350,width:252,height:150,className:"fill-surface",strokeOpacity:"0.7",strokeWidth:"1"}),i.jsx("text",{x:40,y:370,fontFamily:R,fontSize:"10",letterSpacing:"2",fill:"currentColor",stroke:"none",fillOpacity:"0.85",children:"LEGEND"}),i.jsx("path",{d:"M40,376H104",strokeOpacity:"0.6",strokeWidth:"1"}),Hm.map((r,o)=>{const a=394+o*17;return i.jsxs("g",{children:[r.sym==="dots"&&i.jsx("g",{fill:"currentColor",fillOpacity:"0.6",stroke:"none",children:[0,1,2,3,4,5,6,7].map(s=>i.jsx("circle",{cx:42+s*5.4,cy:a-3-s%2*2,r:"1"},s))}),r.sym==="text"&&i.jsx("text",{x:40,y:a,fontFamily:R,fontSize:"10",fill:"currentColor",stroke:"none",fillOpacity:"0.8",children:r.symText}),r.sym==="dash"&&i.jsx("path",{d:`M40,${a-3}H80`,strokeOpacity:"0.6",strokeWidth:"1",strokeDasharray:"4 4"}),r.sym==="arrow"&&i.jsxs("g",{children:[i.jsx("path",{d:`M40,${a-3}H73`,strokeOpacity:"0.8",strokeWidth:"1"}),i.jsx(gh,{x:80,y:a-3,deg:0,opacity:.8})]}),i.jsx("text",{x:92,y:a,fontFamily:R,fontSize:"8.5",letterSpacing:"0.5",fill:"currentColor",stroke:"none",fillOpacity:"0.75",children:r.label})]},r.label)})]})}function Gm(){const e=[];for(let t=N.x0;t<=N.x0+N.w;t+=24){const n=(t-N.x0)%96===0;e.push(i.jsx("path",{d:`M${t},550V${n?540:545}`,strokeOpacity:n?.6:.35,strokeWidth:"1"},t))}return i.jsxs("g",{stroke:"currentColor",fill:"none",children:[e,[0,.2,.4,.6,.8,1].map((t,n)=>i.jsx("text",{x:N.x0+n*96,y:534,textAnchor:"middle",fontFamily:R,fontSize:"8.5",fill:"currentColor",stroke:"none",fillOpacity:"0.65",children:t.toFixed(1)},t)),i.jsx("text",{x:N.x0+N.w+12,y:534,fontFamily:R,fontSize:"8.5",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.65",children:"SCORE"})]})}function Mc({className:e="",viewBox:t="0 0 1200 560"}){return i.jsxs("svg",{"aria-hidden":!0,viewBox:t,className:`block h-auto w-full text-foreground ${e}`,preserveAspectRatio:"xMidYMid meet",children:[i.jsxs("defs",{children:[i.jsx("pattern",{id:"fs-grid",width:"40",height:"40",patternUnits:"userSpaceOnUse",children:i.jsx("path",{d:"M0 0.5H40M0.5 0V40",fill:"none",stroke:"currentColor",strokeOpacity:"0.14",strokeDasharray:"2 4",strokeWidth:"0.7"})}),i.jsx("pattern",{id:"ff-band",width:"9",height:"9",patternUnits:"userSpaceOnUse",children:i.jsx("circle",{cx:"4.5",cy:"4.5",r:"1",fill:"currentColor",fillOpacity:"0.12"})})]}),i.jsx("rect",{x:"11",y:"11",width:"1178",height:"538",fill:"url(#fs-grid)"}),i.jsxs("g",{fill:"currentColor",stroke:"none",children:[i.jsx("text",{x:30,y:58,fontFamily:R,fontSize:"25",fontWeight:"600",letterSpacing:"6",fillOpacity:"0.9",children:"FIELD STUDY 01"}),i.jsx("text",{x:30,y:80,fontFamily:R,fontSize:"11.5",letterSpacing:"3",fillOpacity:"0.65",children:"JUDGE AUDIT & DIFFICULTY CALIBRATION 001"})]}),i.jsx(Rm,{}),i.jsx(zm,{}),i.jsx($m,{}),i.jsx(Bm,{}),i.jsx(Um,{}),i.jsx(Vm,{}),i.jsx(Gm,{}),i.jsx("rect",{x:"10",y:"10",width:"1180",height:"540",fill:"none",stroke:"currentColor",strokeOpacity:"0.8",strokeWidth:"1.4"})]})}const Ic=["0","20","40","60","80","100","120","140","mm"];function Km({className:e=""}){return i.jsx("div",{"aria-hidden":!0,className:`ruler ${e}`,children:Ic.map((t,n)=>i.jsx("span",{style:{left:`${n/(Ic.length-1)*100}%`},children:t},t))})}function Qm(){const e=ie(),t=e(me.headline),n=new RegExp("\\p{Script=Han}","u").test(t);return i.jsxs("section",{className:"relative z-10 mx-auto max-w-content px-6 pt-10 md:pt-16",children:[i.jsxs("div",{className:"reveal is-visible flex items-end justify-between gap-4",children:[i.jsxs("p",{className:"eyebrow",children:["Field Study 01 — ",e({en:"Evaluation Science",zh:"评测科学"})]}),i.jsx("p",{className:"hidden font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:block",children:"File: LW01 · Rev A1"})]}),i.jsx(Km,{className:"mt-3"}),i.jsxs("div",{className:"mt-10 grid items-center gap-12 md:grid-cols-[1.35fr_1fr] md:gap-16",children:[i.jsxs("div",{className:"reveal is-visible",children:[i.jsxs("a",{href:"https://www.linkedin.com/in/levizwang",target:"_blank",rel:"noopener noreferrer",className:"group inline-flex items-center gap-2 border border-line bg-surface/70 py-1.5 pl-2 pr-3 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground backdrop-blur transition-colors hover:text-foreground",children:[i.jsxs("span",{className:"relative flex h-2 w-2",children:[i.jsx("span",{className:"absolute inline-flex h-full w-full animate-ping bg-brand opacity-60"}),i.jsx("span",{className:"relative inline-flex h-2 w-2 bg-brand"})]}),e(me.status),i.jsx("span",{className:"translate-x-0 text-muted-foreground/60 transition-transform group-hover:translate-x-0.5",children:"↗"})]}),i.jsx("h1",{className:`mt-7 font-semibold text-balance ${n?"leading-[1.15] tracking-tightest text-[2.15rem] sm:text-5xl md:text-[3.8rem]":"font-mono leading-[1.18] tracking-tight text-[1.65rem] sm:text-4xl md:text-[2.7rem]"}`,children:t.split(`
`).map((r,o)=>i.jsx("span",{className:"block",children:r},o))}),i.jsx("p",{className:"mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground",children:e(me.description)}),i.jsxs("div",{className:"mt-9 flex flex-wrap items-center gap-3",children:[i.jsxs(_e,{to:"/projects",className:"inline-flex items-center gap-2 border border-foreground bg-foreground px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-background transition-colors hover:bg-background hover:text-foreground",children:[e(F.viewWork),i.jsx("span",{"aria-hidden":!0,children:"→"})]}),i.jsx(_e,{to:"/posts",className:"inline-flex items-center gap-2 border border-line px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-foreground transition-colors hover:border-foreground/60",children:e(F.readWriting)}),i.jsxs(_e,{to:"/cv",className:"inline-flex items-center gap-2 px-1 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground",children:[e({en:"Export CV",zh:"导出简历"})," ",i.jsx("span",{"aria-hidden":!0,children:"↓"})]})]}),i.jsx(ph,{className:"mt-9"})]}),i.jsxs("div",{className:"reveal reveal-delay-120 is-visible order-first md:order-none",children:[i.jsxs(oi,{className:"mx-auto w-48 sm:w-64 md:ml-auto md:mr-0 md:w-full md:max-w-[280px]",children:[i.jsx(Kn,{left:"Subject: Levi Wang",right:"No. 001"}),i.jsxs("div",{className:"relative",children:[i.jsx(Lm,{src:me.avatar,alt:me.name,className:"h-auto w-full grayscale-[0.25] brightness-[1.06] contrast-[1.02]"}),i.jsx("div",{"aria-hidden":!0,className:"absolute inset-0 bg-brand/10 mix-blend-multiply dark:mix-blend-screen"})]}),i.jsxs("div",{className:"strip border-b-0 border-t",children:[i.jsx("span",{className:"truncate",children:e(me.location)}),i.jsx("span",{className:"shrink-0",children:"Scale 1:1"})]})]}),i.jsx("p",{className:"mt-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground md:text-right",children:me.resumeEmail})]})]}),i.jsx("div",{className:"reveal is-visible mt-14",children:i.jsxs(oi,{interactive:!0,children:[i.jsx(Kn,{left:"Fig. 01 — Evaluation Science",right:"Units: score"}),i.jsx(Mc,{className:"hidden md:block"}),i.jsx(Mc,{className:"md:hidden",viewBox:"270 80 580 470"})]})})]})}function se({children:e,delay:t=0,className:n="",as:r="div"}){const o=q.useRef(null),[a,s]=q.useState(!1);q.useEffect(()=>{const u=o.current;if(!u)return;if(typeof IntersectionObserver>"u"){s(!0);return}const p=new IntersectionObserver(f=>{for(const g of f)g.isIntersecting&&(s(!0),p.unobserve(g.target))},{rootMargin:"0px 0px -10% 0px",threshold:.08});return p.observe(u),()=>p.disconnect()},[]);const l=r,c=t?`reveal-delay-${t}`:"";return i.jsx(l,{ref:o,className:`reveal ${c} ${a?"is-visible":""} ${n}`,children:e})}const I="SF Mono, JetBrains Mono, ui-monospace, Menlo, monospace";function ol(e){let t=e>>>0;return()=>{t|=0,t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function Jm(e){if(e.length<=10||!e.includes(" "))return[e];const t=e.split(" ");let n=1,r=1/0;for(let o=1;o<t.length;o++){const a=t.slice(0,o).join(" ").length,s=t.slice(o).join(" ").length,l=Math.abs(a-s);l<r&&(r=l,n=o)}return[t.slice(0,n).join(" "),t.slice(n).join(" ")]}function dt({text:e,x:t=30,y:n=34}){return i.jsxs("g",{stroke:"currentColor",fill:"none",children:[i.jsx("text",{x:t,y:n,fontFamily:I,fontSize:"12",letterSpacing:"2",fill:"currentColor",stroke:"none",fillOpacity:"0.85",children:e}),i.jsx("path",{d:`M${t},${n+7}H${t+e.length*9.4}`,strokeOpacity:"0.6",strokeWidth:"1"})]})}function mn({x:e,y:t,deg:n,opacity:r=.85}){return i.jsx("path",{d:"M0,0 L-7,3 L-7,-3 Z",fill:"currentColor",stroke:"none",fillOpacity:r,transform:`translate(${e},${t}) rotate(${n})`})}function ke({x1:e,y1:t,x2:n,y2:r,dashed:o=!1,opacity:a=.8}){const s=Math.atan2(r-t,n-e)*180/Math.PI,l=Math.hypot(n-e,r-t),c=(l-6)/l,u=e+(n-e)*c,p=t+(r-t)*c;return i.jsxs("g",{stroke:"currentColor",fill:"none",strokeOpacity:a,children:[i.jsx("path",{d:`M${e},${t}L${u},${p}`,strokeWidth:"1",strokeDasharray:o?"4 4":void 0}),i.jsx(mn,{x:n,y:r,deg:s,opacity:a})]})}function de({x:e,y:t,w:n,h:r,label:o,sub:a,double:s=!1,fontSize:l=9}){const c=Jm(o),u=c.length*11+(a?10:0),p=t+r/2-u/2+8;return i.jsxs("g",{stroke:"currentColor",fill:"none",children:[i.jsx("rect",{x:e,y:t,width:n,height:r,className:"fill-surface",strokeOpacity:"0.8",strokeWidth:"1.1"}),s&&i.jsx("rect",{x:e+3,y:t+3,width:n-6,height:r-6,strokeOpacity:"0.55",strokeWidth:"0.8"}),c.map((f,g)=>i.jsx("text",{x:e+n/2,y:p+g*11,textAnchor:"middle",fontFamily:I,fontSize:l,letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.9",children:f},f)),a&&i.jsx("text",{x:e+n/2,y:p+c.length*11+1,textAnchor:"middle",fontFamily:I,fontSize:"7",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.6",children:a})]})}const G={x0:90,x1:690,base:228,top:64},fe=e=>G.x0+e*(G.x1-G.x0);function Ym(){const e=ol(134648),t=new Map,n=[];for(let r=0;r<134;r++){const o=(e()+e()+e()+e()-2)/2,a=Math.min(.985,Math.max(.03,.66+o*.17)),s=Math.round(fe(a)/9),l=t.get(s)??0;t.set(s,l+1),n.push({x:s*9+(e()-.5)*4,y:G.base-5-l*6.2,o:.45+e()*.4})}return i.jsx("g",{fill:"currentColor",stroke:"none",children:n.map((r,o)=>i.jsx("circle",{cx:r.x.toFixed(1),cy:r.y.toFixed(1),r:"1.9",fillOpacity:r.o.toFixed(2)},o))})}function Zm({className:e=""}){return i.jsxs("svg",{"aria-hidden":!0,viewBox:"0 0 800 300",className:`block h-auto w-full text-foreground ${e}`,preserveAspectRatio:"xMidYMid meet",children:[i.jsx("defs",{children:i.jsx("pattern",{id:"figdist-dots",width:"9",height:"9",patternUnits:"userSpaceOnUse",children:i.jsx("circle",{cx:"4.5",cy:"4.5",r:"1",fill:"currentColor",fillOpacity:"0.16"})})}),i.jsxs("g",{stroke:"currentColor",fill:"none",children:[i.jsx(dt,{text:"DIFFICULTY DISTRIBUTION — 134-TASK LEGAL BENCHMARK"}),i.jsx("rect",{x:fe(.5),y:G.top,width:fe(.7)-fe(.5),height:G.base-G.top,fill:"url(#figdist-dots)",stroke:"none"}),i.jsx("path",{d:`M${fe(.5)},${G.top}V${G.base}M${fe(.7)},${G.top}V${G.base}`,strokeOpacity:"0.55",strokeWidth:"1",strokeDasharray:"4 4"}),i.jsx("text",{x:(fe(.5)+fe(.7))/2,y:G.top-8,textAnchor:"middle",fontFamily:I,fontSize:"9",letterSpacing:"1.5",fill:"currentColor",stroke:"none",fillOpacity:"0.75",children:"ACCEPTANCE BAND 0.5–0.7"}),i.jsx("path",{d:`M${fe(.648)},${G.top}V${G.base}`,strokeOpacity:"0.9",strokeWidth:"1.4"}),i.jsx("text",{x:fe(.648)-6,y:120,textAnchor:"middle",fontFamily:I,fontSize:"8.5",letterSpacing:"1.5",fill:"currentColor",stroke:"none",fillOpacity:"0.85",transform:`rotate(-90 ${fe(.648)-6} 120)`,children:"FINAL MEAN 0.648"}),i.jsx("path",{d:`M${fe(.648)},${G.base} l-4,7 h8 Z`,fill:"currentColor",stroke:"none",fillOpacity:"0.85"}),i.jsx(Ym,{}),i.jsx("circle",{cx:fe(.821),cy:"60",r:"3.5",fill:"currentColor",stroke:"none",fillOpacity:"0.9"}),i.jsx("text",{x:fe(.821)+10,y:56,fontFamily:I,fontSize:"9",letterSpacing:"1.5",fill:"currentColor",stroke:"none",fillOpacity:"0.85",children:"INITIAL MEAN 0.821"}),i.jsx("path",{d:`M${fe(.821)-7},67 C556,86 534,92 514,96`,strokeOpacity:"0.8",strokeWidth:"1"}),i.jsx(mn,{x:514,y:96,deg:169}),i.jsx("text",{x:544,y:116,textAnchor:"middle",fontFamily:I,fontSize:"8.5",letterSpacing:"1.5",fill:"currentColor",stroke:"none",fillOpacity:"0.7",children:"2 REWORK ROUNDS"}),i.jsx("path",{d:`M${G.x0},${G.base}H${G.x1}`,strokeOpacity:"0.9",strokeWidth:"1.2"}),Array.from({length:11},(t,n)=>n).map(t=>i.jsx("path",{d:`M${fe(t/10)},${G.base}V${G.base+(t%2===0?7:4)}`,strokeOpacity:"0.7",strokeWidth:"1"},t)),[0,.2,.4,.6,.8,1].map(t=>i.jsx("text",{x:fe(t),y:G.base+20,textAnchor:"middle",fontFamily:I,fontSize:"8.5",fill:"currentColor",stroke:"none",fillOpacity:"0.65",children:t.toFixed(1)},t)),i.jsx("text",{x:(G.x0+G.x1)/2,y:G.base+40,textAnchor:"middle",fontFamily:I,fontSize:"9",letterSpacing:"2",fill:"currentColor",stroke:"none",fillOpacity:"0.75",children:"SOLVER SCORE"}),i.jsx("text",{x:775,y:G.base+40,textAnchor:"end",fontFamily:I,fontSize:"8.5",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.6",children:"EFFORT CONFOUND +0.159 / REWORK −0.139 PER ROUND"})]})]})}const D={x0:120,x1:680,y:150},ce=e=>D.x0+e*(D.x1-D.x0);function Xm({className:e=""}){return i.jsxs("svg",{"aria-hidden":!0,viewBox:"0 0 800 300",className:`block h-auto w-full text-foreground ${e}`,preserveAspectRatio:"xMidYMid meet",children:[i.jsx("defs",{children:i.jsx("pattern",{id:"figcal-hatch",width:"7",height:"7",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:i.jsx("path",{d:"M0,0V7",stroke:"currentColor",strokeOpacity:"0.16",strokeWidth:"1.6",fill:"none"})})}),i.jsxs("g",{stroke:"currentColor",fill:"none",children:[i.jsx(dt,{text:"DIFFICULTY CALIBRATION"}),i.jsx("rect",{x:ce(.5),y:D.y-32,width:ce(.7)-ce(.5),height:"64",fill:"url(#figcal-hatch)",stroke:"none"}),i.jsx("path",{d:`M${ce(.5)},${D.y-38}V${D.y+38}M${ce(.7)},${D.y-38}V${D.y+38}`,strokeOpacity:"0.55",strokeWidth:"1",strokeDasharray:"4 4"}),i.jsx("text",{x:(ce(.5)+ce(.7))/2,y:D.y-46,textAnchor:"middle",fontFamily:I,fontSize:"9",letterSpacing:"1.5",fill:"currentColor",stroke:"none",fillOpacity:"0.75",children:"ACCEPTANCE BAND 0.5–0.7"}),i.jsx("path",{d:`M${D.x0},${D.y}H${D.x1-6}`,strokeOpacity:"0.9",strokeWidth:"1.2"}),i.jsx(mn,{x:D.x1,y:D.y,deg:0,opacity:.9}),Array.from({length:11},(t,n)=>n).map(t=>i.jsx("path",{d:`M${ce(t/10)},${D.y}V${D.y+(t%2===0?7:4)}`,strokeOpacity:"0.7",strokeWidth:"1"},t)),[0,.2,.4,.6,.8,1].map(t=>i.jsx("text",{x:ce(t),y:D.y+20,textAnchor:"middle",fontFamily:I,fontSize:"8.5",fill:"currentColor",stroke:"none",fillOpacity:"0.65",children:t.toFixed(1)},t)),i.jsx("text",{x:(D.x0+D.x1)/2,y:D.y+42,textAnchor:"middle",fontFamily:I,fontSize:"9",letterSpacing:"2",fill:"currentColor",stroke:"none",fillOpacity:"0.75",children:"SOLVER SCORE"}),i.jsx("path",{d:`M${ce(.821)-8},${D.y-10} L${ce(.73)},${D.y-52} L${ce(.665)},${D.y-10}`,strokeOpacity:"0.85",strokeWidth:"1.2"}),i.jsx(mn,{x:ce(.665),y:D.y-10,deg:131}),i.jsx("text",{x:ce(.745),y:D.y-60,textAnchor:"middle",fontFamily:I,fontSize:"8.5",letterSpacing:"1.5",fill:"currentColor",stroke:"none",fillOpacity:"0.75",children:"2 REWORK ROUNDS"}),i.jsx("circle",{cx:ce(.821),cy:D.y,r:"5",fill:"currentColor",stroke:"none",fillOpacity:"0.9"}),i.jsx("text",{x:ce(.821)+12,y:D.y-12,fontFamily:I,fontSize:"8.5",letterSpacing:"1.5",fill:"currentColor",stroke:"none",fillOpacity:"0.85",children:"START 0.821"}),i.jsx("circle",{cx:ce(.648),cy:D.y,r:"5",fill:"currentColor",stroke:"none",fillOpacity:"0.9"}),i.jsx("text",{x:ce(.648),y:D.y+58,textAnchor:"middle",fontFamily:I,fontSize:"8.5",letterSpacing:"1.5",fill:"currentColor",stroke:"none",fillOpacity:"0.85",children:"FINAL 0.648"}),i.jsx("text",{x:D.x0,y:246,fontFamily:I,fontSize:"8.5",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.65",children:"CONTROL: EFFORT +0.159"}),i.jsx("text",{x:D.x1,y:246,textAnchor:"end",fontFamily:I,fontSize:"8.5",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.65",children:"REWORK EFFECT −0.139/ROUND"})]})]})}function Nc({steps:e=["SOURCE FILES","EVIDENCE LEDGER","DRAFT","CRITIQUE","VERIFY","PACKAGE"],gates:t=["QUOTE GATE","CROSS-MODEL","LEAK CHECK","ANTI-GUESS"],className:n=""}){const c=(748-(e.length-1)*26)/e.length,u=p=>36+p*(c+26);return i.jsx("svg",{"aria-hidden":!0,viewBox:"0 0 800 300",className:`block h-auto w-full text-foreground ${n}`,preserveAspectRatio:"xMidYMid meet",children:i.jsxs("g",{stroke:"currentColor",fill:"none",children:[i.jsx(dt,{text:"SYNTHESIS PIPELINE"}),[0,1,2].map(p=>i.jsx("rect",{x:44+p*5,y:92-p*5,width:"26",height:"16",className:"fill-surface",strokeOpacity:"0.75",strokeWidth:"0.9"},p)),i.jsx("path",{d:"M74,82 l6,6",strokeOpacity:"0.6",strokeWidth:"0.8"}),i.jsx("path",{d:"M58,88 h12 M58,92 h9",strokeOpacity:"0.45",strokeWidth:"0.8"}),e.map((p,f)=>i.jsx(de,{x:u(f),y:118,w:c,h:44,label:p},`${p}-${f}`)),e.slice(0,-1).map((p,f)=>i.jsxs("g",{children:[i.jsx(ke,{x1:u(f)+c+2,y1:118+44/2,x2:u(f+1)-2,y2:118+44/2}),i.jsx("text",{x:u(f)+c+26/2,y:182,textAnchor:"middle",fontFamily:I,fontSize:"7",letterSpacing:"0.5",fill:"currentColor",stroke:"none",fillOpacity:"0.6",children:t[f%t.length]})]},`gate-${f}`)),e.length>1&&i.jsx("g",{fill:"currentColor",stroke:"none",fillOpacity:"0.5",children:Array.from({length:Math.floor((c-14)/7)},(p,f)=>i.jsx("circle",{cx:u(1)+7+f*7,cy:171,r:"1.1"},f))})]})})}const ey={2:"CITATION MISREAD AS LEAKAGE",5:"DAG DEPENDENCY FIELDS DROPPED"};function ty({className:e=""}){const t=ol(88),n=Array.from({length:8},()=>.88+t()*.07),r=100,o=440,a=68,s=22;return i.jsx("svg",{"aria-hidden":!0,viewBox:"0 0 800 300",className:`block h-auto w-full text-foreground ${e}`,preserveAspectRatio:"xMidYMid meet",children:i.jsxs("g",{stroke:"currentColor",fill:"none",children:[i.jsx(dt,{text:"JUDGE AUDIT — FATAL-ZERO REVIEW"}),[0,.5,1].map(l=>i.jsx("text",{x:r+l*o,y:52,textAnchor:"middle",fontFamily:I,fontSize:"7.5",fill:"currentColor",stroke:"none",fillOpacity:"0.55",children:l*100},l)),[.5,1].map(l=>i.jsx("path",{d:`M${r+l*o},58 V230`,strokeOpacity:"0.22",strokeWidth:"0.8",strokeDasharray:"3 4"},l)),n.map((l,c)=>{const u=a+c*s,p=r+l*o,f=ey[c];return i.jsxs("g",{children:[i.jsx("text",{x:36,y:u+3.5,fontFamily:I,fontSize:"9",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.8",children:`Q-0${c+1}`}),i.jsx("path",{d:`M${r},${u}H${r+o}`,strokeOpacity:"0.3",strokeWidth:"1"}),i.jsx("rect",{x:r,y:u-3,width:l*o,height:"6",fill:"currentColor",stroke:"none",fillOpacity:"0.28"}),f?i.jsxs("g",{children:[i.jsx("text",{x:p,y:u+4,textAnchor:"middle",fontFamily:I,fontSize:"11",fill:"currentColor",stroke:"none",fillOpacity:"0.9",children:"✗"}),i.jsx("text",{x:556,y:u-6,fontFamily:I,fontSize:"8",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.85",children:"FATAL ZERO"}),i.jsx("path",{d:`M614,${u}H632`,strokeOpacity:"0.55",strokeWidth:"0.8"}),i.jsx("circle",{cx:614,cy:u,r:"1.4",fill:"currentColor",stroke:"none",fillOpacity:"0.7"}),i.jsx("rect",{x:636,y:u-10,width:"150",height:"20",className:"fill-surface",strokeOpacity:"0.7",strokeWidth:"0.9"}),i.jsx("text",{x:711,y:u+3,textAnchor:"middle",fontFamily:I,fontSize:"7",letterSpacing:"0.5",fill:"currentColor",stroke:"none",fillOpacity:"0.85",children:f})]}):i.jsxs("g",{children:[i.jsx("circle",{cx:p,cy:u,r:"3",fill:"currentColor",stroke:"none",fillOpacity:"0.85"}),i.jsx("text",{x:556,y:u+3,fontFamily:I,fontSize:"8.5",fill:"currentColor",stroke:"none",fillOpacity:"0.75",children:`${Math.round(l*100)}%`})]})]},c)}),i.jsx("path",{d:`M36,${a+8*s+6}H764`,strokeOpacity:"0.5",strokeWidth:"1"}),i.jsx("text",{x:36,y:a+8*s+28,fontFamily:I,fontSize:"8.5",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.75",children:"DEFENSES: SCHEMA ROUND-TRIP · ORACLE FULL-MARK · LINE-BY-LINE RE-CHECK"})]})})}function ny({className:e=""}){const t=[46,84,122,160,198,236],n=[96,140,184];return i.jsx("svg",{"aria-hidden":!0,viewBox:"0 0 800 300",className:`block h-auto w-full text-foreground ${e}`,preserveAspectRatio:"xMidYMid meet",children:i.jsxs("g",{stroke:"currentColor",fill:"none",children:[i.jsx(dt,{text:"51-AGENT ADVERSARIAL REVIEW"}),i.jsx("text",{x:776,y:30,textAnchor:"end",fontFamily:I,fontSize:"8.5",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.6",children:"~59 MIN WALL-CLOCK"}),i.jsx(de,{x:24,y:130,w:110,h:44,label:"DIFF · 216 FILES",sub:"17 COMMITS"}),t.map(r=>i.jsx("path",{d:`M134,152 C172,152 178,${r+12} 215,${r+12}`,strokeOpacity:"0.55",strokeWidth:"0.9"},r)),t.map((r,o)=>i.jsx(de,{x:215,y:r,w:88,h:24,label:`FINDER 0${o+1}`,fontSize:8.5},r)),t.map(r=>i.jsx("path",{d:`M303,${r+12} C340,${r+12} 352,152 392,152`,strokeOpacity:"0.55",strokeWidth:"0.9"},r)),i.jsx("path",{d:"M392,118V186",strokeOpacity:"0.8",strokeWidth:"1.4"}),i.jsx("circle",{cx:392,cy:152,r:"3",fill:"currentColor",stroke:"none",fillOpacity:"0.85"}),i.jsx("text",{x:392,y:106,textAnchor:"middle",fontFamily:I,fontSize:"8",letterSpacing:"1.5",fill:"currentColor",stroke:"none",fillOpacity:"0.75",children:"45 CANDIDATES"}),n.map((r,o)=>i.jsxs("g",{children:[i.jsx(ke,{x1:398,y1:152,x2:466,y2:r+12,opacity:.7}),i.jsx(de,{x:470,y:r,w:112,h:24,label:`EXEC VERIFIER ${o+1}`,fontSize:8})]},r)),n.map(r=>i.jsx(ke,{x1:586,y1:r+12,x2:644,y2:152,opacity:.7},r)),i.jsx(de,{x:648,y:130,w:132,h:44,label:"40 CONFIRMED",sub:"git log -S"})]})})}function ry({rows:e=["GPT","CLAUDE","GEMINI","QWEN","DEEPSEEK","LLAMA"],cols:t=["HARNESS A","HARNESS B","HARNESS C","HARNESS D","HARNESS E"],title:n="MODEL × HARNESS MATRIX",className:r=""}){const o=ol(42),a=e.map(()=>t.map(()=>o()<.85)),s=84,l=28,c=150,u=84,p=t.length*s,f=e.length*l;return i.jsx("svg",{"aria-hidden":!0,viewBox:"0 0 800 300",className:`block h-auto w-full text-foreground ${r}`,preserveAspectRatio:"xMidYMid meet",children:i.jsxs("g",{stroke:"currentColor",fill:"none",children:[i.jsx(dt,{text:n}),i.jsx("rect",{x:c,y:u,width:p,height:f,strokeOpacity:"0.8",strokeWidth:"1.1"}),t.slice(1).map((g,x)=>i.jsx("path",{d:`M${c+(x+1)*s},${u}V${u+f}`,strokeOpacity:"0.3",strokeWidth:"0.8"},x)),e.slice(1).map((g,x)=>i.jsx("path",{d:`M${c},${u+(x+1)*l}H${c+p}`,strokeOpacity:"0.3",strokeWidth:"0.8"},x)),t.map((g,x)=>i.jsx("text",{x:c+x*s+s/2,y:u-10,textAnchor:"middle",fontFamily:I,fontSize:"8",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.7",children:g},g)),e.map((g,x)=>i.jsx("text",{x:c-10,y:u+x*l+l/2+3,textAnchor:"end",fontFamily:I,fontSize:"8.5",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.7",children:g},g)),a.map((g,x)=>g.map((k,b)=>i.jsx("text",{x:c+b*s+s/2,y:u+x*l+l/2+4,textAnchor:"middle",fontFamily:I,fontSize:k?"11":"13",fill:"currentColor",stroke:"none",fillOpacity:k?.8:.45,children:k?"✓":"·"},`${x}-${b}`))),i.jsx("text",{x:c+p+40,y:u+32,fontFamily:I,fontSize:"9",fill:"currentColor",stroke:"none",fillOpacity:"0.8",children:"✓"}),i.jsx("text",{x:c+p+56,y:u+32,fontFamily:I,fontSize:"8",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.7",children:"PASS"}),i.jsx("text",{x:c+p+40,y:u+50,fontFamily:I,fontSize:"11",fill:"currentColor",stroke:"none",fillOpacity:"0.5",children:"·"}),i.jsx("text",{x:c+p+56,y:u+50,fontFamily:I,fontSize:"8",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.7",children:"SKIP"}),i.jsx("text",{x:c+p,y:u+f+24,textAnchor:"end",fontFamily:I,fontSize:"8.5",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.6",children:`${e.length*t.length} CONTAINERIZED COMBOS`})]})})}function oy({className:e=""}){return i.jsx("svg",{"aria-hidden":!0,viewBox:"0 0 800 300",className:`block h-auto w-full text-foreground ${e}`,preserveAspectRatio:"xMidYMid meet",children:i.jsxs("g",{stroke:"currentColor",fill:"none",children:[i.jsx(dt,{text:"ADVERSARIAL QC LOOP"}),i.jsx(de,{x:340,y:58,w:120,h:44,label:"ACTOR",sub:"GENERATE"}),i.jsx(de,{x:120,y:194,w:120,h:44,label:"CRITIC",sub:"FINDINGS"}),i.jsx(de,{x:560,y:194,w:120,h:44,label:"MONITOR",sub:"ARBITRATE"}),i.jsx(ke,{x1:352,y1:106,x2:212,y2:190}),i.jsx("text",{x:248,y:140,textAnchor:"middle",fontFamily:I,fontSize:"8",letterSpacing:"1.5",fill:"currentColor",stroke:"none",fillOpacity:"0.7",children:"CASE"}),i.jsx(ke,{x1:246,y1:216,x2:554,y2:216}),i.jsx("text",{x:400,y:206,textAnchor:"middle",fontFamily:I,fontSize:"8",letterSpacing:"1.5",fill:"currentColor",stroke:"none",fillOpacity:"0.7",children:"STRUCTURED FINDINGS"}),i.jsx(ke,{x1:592,y1:190,x2:452,y2:106}),i.jsx("text",{x:556,y:140,textAnchor:"middle",fontFamily:I,fontSize:"8",letterSpacing:"1.5",fill:"currentColor",stroke:"none",fillOpacity:"0.7",children:"REVISE / REWORK"}),i.jsx(ke,{x1:686,y1:216,x2:768,y2:216}),i.jsx("text",{x:727,y:204,textAnchor:"middle",fontFamily:I,fontSize:"8",letterSpacing:"1.5",fill:"currentColor",stroke:"none",fillOpacity:"0.7",children:"PASS → DELIVERY"}),i.jsx(de,{x:345,y:256,w:110,h:28,label:"MEMORY"}),i.jsx("path",{d:"M180,238 V270 H341",strokeOpacity:"0.6",strokeWidth:"1",strokeDasharray:"4 4"}),i.jsx("text",{x:258,y:262,textAnchor:"middle",fontFamily:I,fontSize:"7.5",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.6",children:"BAD-PATTERN DETECTORS"})]})})}const mt={cx:300,cy:172,r:104},ur=[{name:"FAITHFULNESS",value:.87},{name:"ANSWER REL.",value:.82},{name:"CONTEXT PREC.",value:.85},{name:"CONTEXT RECALL",value:.78},{name:"HALLUCINATION †",value:.93}];function kn(e,t){const n=(-90+t*72)*Math.PI/180;return[mt.cx+e*mt.r*Math.cos(n),mt.cy+e*mt.r*Math.sin(n)]}function iy({className:e=""}){const t=["middle","start","start","end","end"],n=r=>ur.map((o,a)=>kn(r,a).join(",")).join(" ");return i.jsx("svg",{"aria-hidden":!0,viewBox:"0 0 800 300",className:`block h-auto w-full text-foreground ${e}`,preserveAspectRatio:"xMidYMid meet",children:i.jsxs("g",{stroke:"currentColor",fill:"none",children:[i.jsx(dt,{text:"RAG EVALUATION PROFILE"}),[.33,.66,1].map(r=>i.jsx("polygon",{points:n(r),strokeOpacity:r===1?.45:.28,strokeWidth:"0.9",strokeDasharray:"3 4"},r)),ur.map((r,o)=>{const[a,s]=kn(1,o);return i.jsx("path",{d:`M${mt.cx},${mt.cy}L${a},${s}`,strokeOpacity:"0.4",strokeWidth:"0.8"},r.name)}),[.33,.66,1].map(r=>i.jsx("text",{x:mt.cx+6,y:mt.cy-r*mt.r+3,fontFamily:I,fontSize:"7",fill:"currentColor",stroke:"none",fillOpacity:"0.5",children:r.toFixed(2)},r)),ur.map((r,o)=>{const[a,s]=kn(1.22,o);return i.jsx("text",{x:a,y:s+3,textAnchor:t[o],fontFamily:I,fontSize:"8.5",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.75",children:r.name},r.name)}),i.jsx("polygon",{points:ur.map((r,o)=>kn(r.value,o).join(",")).join(" "),fill:"currentColor",fillOpacity:"0.08",strokeOpacity:"0.9",strokeWidth:"1.4"}),ur.map((r,o)=>{const[a,s]=kn(r.value,o),[l,c]=kn(r.value+.15,o);return i.jsxs("g",{children:[i.jsx("circle",{cx:a,cy:s,r:"2.6",fill:"currentColor",stroke:"none",fillOpacity:"0.9"}),i.jsx("text",{x:l,y:c+3,textAnchor:"middle",fontFamily:I,fontSize:"8.5",fill:"currentColor",stroke:"none",fillOpacity:"0.85",children:r.value.toFixed(2)})]},r.name)}),i.jsx("rect",{x:520,y:110,width:248,height:104,className:"fill-surface",strokeOpacity:"0.7",strokeWidth:"1"}),i.jsx("text",{x:536,y:134,fontFamily:I,fontSize:"8.5",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.75",children:"SCALE 0.0–1.0"}),i.jsx("text",{x:536,y:152,fontFamily:I,fontSize:"8.5",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.75",children:"GRID 0.33 / 0.66 / 1.00"}),i.jsx("text",{x:536,y:170,fontFamily:I,fontSize:"8.5",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.75",children:"MEAN 0.85"}),i.jsx("text",{x:536,y:194,fontFamily:I,fontSize:"8.5",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.6",children:"† HALLUCINATION INVERTED"})]})})}const Oc=[{label:"SCOUT",sub:"(SUB-MS)",param:"MEMPOOL + LANDED TX",above:!1},{label:"PRICING",sub:"(AMM)",param:"xy = k REQUOTE",above:!0},{label:"CROSS-DEX ARB",param:"ΔP > FEES + TIP",above:!1},{label:"JITO BUNDLE",param:"TIP AUCTION · 1 SLOT",above:!0}];function ay({className:e=""}){const s=l=>36+l*172;return i.jsx("svg",{"aria-hidden":!0,viewBox:"0 0 800 300",className:`block h-auto w-full text-foreground ${e}`,preserveAspectRatio:"xMidYMid meet",children:i.jsxs("g",{stroke:"currentColor",fill:"none",children:[i.jsx(dt,{text:"MEV SEARCHER PIPELINE"}),Oc.map((l,c)=>i.jsxs("g",{children:[i.jsx(de,{x:s(c),y:104,w:140,h:44,label:l.label,sub:l.sub}),i.jsx("text",{x:s(c)+140/2,y:l.above?94:164,textAnchor:"middle",fontFamily:I,fontSize:"7.5",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.6",children:l.param}),c<Oc.length-1&&i.jsx(ke,{x1:s(c)+140+2,y1:104+44/2,x2:s(c+1)-2,y2:104+44/2})]},l.label)),i.jsx(ke,{x1:s(3)+140+2,y1:104+44/2,x2:722,y2:104+44/2}),i.jsx("rect",{x:724,y:108,width:"52",height:"36",className:"fill-surface",strokeOpacity:"0.8",strokeWidth:"1.1"}),i.jsx("text",{x:750,y:131,textAnchor:"middle",fontFamily:I,fontSize:"15",fill:"currentColor",stroke:"none",fillOpacity:"0.9",children:"$"}),i.jsx("text",{x:750,y:164,textAnchor:"middle",fontFamily:I,fontSize:"8",letterSpacing:"1.5",fill:"currentColor",stroke:"none",fillOpacity:"0.7",children:"PROFIT"}),i.jsx("path",{d:"M36,210 H770",strokeOpacity:"0.55",strokeWidth:"1",strokeDasharray:"4 4"}),i.jsx(mn,{x:776,y:210,deg:0,opacity:.7}),[0,1,2,3].map(l=>i.jsx("path",{d:`M${s(l)+140/2},206 V214`,strokeOpacity:"0.55",strokeWidth:"1"},l)),i.jsx("path",{d:"M750,206V214",strokeOpacity:"0.55",strokeWidth:"1"}),i.jsx("text",{x:36,y:232,fontFamily:I,fontSize:"8.5",letterSpacing:"1.5",fill:"currentColor",stroke:"none",fillOpacity:"0.65",children:"SLOT TIME"})]})})}function sy({className:e=""}){return i.jsx("svg",{"aria-hidden":!0,viewBox:"0 0 800 300",className:`block h-auto w-full text-foreground ${e}`,preserveAspectRatio:"xMidYMid meet",children:i.jsxs("g",{stroke:"currentColor",fill:"none",children:[i.jsx(dt,{text:"RUBRIC AS DAG"}),i.jsx(de,{x:36,y:56,w:132,h:28,label:"READ FILE"}),i.jsx(de,{x:206,y:56,w:132,h:28,label:"QUOTE EVIDENCE",fontSize:8.5}),i.jsx(de,{x:376,y:56,w:132,h:28,label:"CALC VALUE"}),i.jsx(de,{x:546,y:56,w:132,h:28,label:"FINAL ANSWER"}),i.jsx(ke,{x1:170,y1:70,x2:204,y2:70}),i.jsx(ke,{x1:340,y1:70,x2:374,y2:70}),i.jsx(ke,{x1:510,y1:70,x2:544,y2:70}),i.jsx(de,{x:291,y:124,w:132,h:28,label:"REASON STEP"}),i.jsx(ke,{x1:292,y1:86,x2:334,y2:122}),i.jsx(ke,{x1:423,y1:132,x2:566,y2:90}),i.jsx(de,{x:546,y:124,w:132,h:28,label:"FORMAT"}),i.jsx(ke,{x1:612,y1:86,x2:612,y2:122}),i.jsx(de,{x:36,y:124,w:132,h:28,label:"NO LEAK"}),i.jsx(ke,{x1:102,y1:86,x2:102,y2:122}),i.jsx(de,{x:206,y:196,w:132,h:28,label:"HURDLE",double:!0}),i.jsx("text",{x:348,y:208,fontFamily:I,fontSize:"8",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.7",children:"HURDLE — MUST PASS"}),i.jsx("path",{d:"M612,152 V214 H344",strokeOpacity:"0.8",strokeWidth:"1"}),i.jsx(mn,{x:340,y:214,deg:180}),i.jsx("path",{d:"M102,152 V210 H198",strokeOpacity:"0.8",strokeWidth:"1"}),i.jsx(mn,{x:202,y:210,deg:0}),i.jsx("path",{d:"M60,152 V186",strokeOpacity:"0.6",strokeWidth:"1",strokeDasharray:"4 4"}),i.jsx("text",{x:60,y:200,textAnchor:"middle",fontFamily:I,fontSize:"10",fill:"currentColor",stroke:"none",fillOpacity:"0.8",children:"✗"}),i.jsx("text",{x:72,y:200,fontFamily:I,fontSize:"8",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.7",children:"FAIL"}),i.jsx("path",{d:"M272,224 V252",strokeOpacity:"0.6",strokeWidth:"1",strokeDasharray:"4 4"}),i.jsx("text",{x:272,y:266,textAnchor:"middle",fontFamily:I,fontSize:"10",fill:"currentColor",stroke:"none",fillOpacity:"0.8",children:"✗"}),i.jsx("text",{x:284,y:266,fontFamily:I,fontSize:"8",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.7",children:"FAIL → REWORK"})]})})}function qi({id:e,className:t=""}){switch(e){case"benchmark-synthesis":return i.jsx(Nc,{steps:["WORKSPACE","EVIDENCE","DRAFT","TRIAL-SOLVER","REVIEW","EXPORT"],gates:["QUOTE GATE","EMBEDDING ROUTE","BLIND→HINT","QA GATE"],className:t});case"difficulty-calibration":case"benchmark-difficulty":return i.jsx(Xm,{className:t});case"eval-platform":case"office-harnesses":case"judge-reliability":case"agent-as-judge":case"eval-validity":return i.jsx(ty,{className:t});case"adversarial-verification":case"adversarial-code-review":case"nvwa":return i.jsx(ny,{className:t});case"harbor-eval":case"eval-plumbing":return i.jsx(ry,{className:t});case"medical-acm":case"adversarial-qc":return i.jsx(oy,{className:t});case"rag-eval":return i.jsx(iy,{className:t});case"solana-mev":case"solana-mev-guide":case"9":return i.jsx(ay,{className:t});case"rubric-dags":return i.jsx(sy,{className:t});case"syndata-pipeline":case"toolathlon-mcp":case"evidence-ledger":default:return i.jsx(Nc,{className:t})}}const ly={tesseract:"Fig. G1 — Tesseract",armillary:"Fig. M1 — Armillary sphere",staircase:"Fig. S1 — Spiral stair",gears:"Fig. W1 — Gear train",compass:"Fig. D1 — Dividers",moon:"Fig. L1 — Luna"},yt=e=>e*Math.PI/180,nt=(e,t,n,r)=>[e+n*Math.cos(yt(r)),t+n*Math.sin(yt(r))];function cy(){return i.jsxs(i.Fragment,{children:[i.jsx("ellipse",{cx:"100",cy:"178",rx:"42",ry:"7",strokeOpacity:"0.7"}),i.jsx("path",{d:"M88 170v8M112 170v8",strokeOpacity:"0.5"}),i.jsx("path",{d:"M96 176l-14-12M104 176l14-12",strokeOpacity:"0.45"}),i.jsx("circle",{cx:100,cy:92,r:"82",strokeOpacity:"0.9",strokeWidth:"1.3"}),i.jsx("circle",{cx:100,cy:92,r:"75",strokeOpacity:"0.55",strokeWidth:"0.7"}),Array.from({length:72},(n,r)=>{const o=r%6===0,[a,s]=nt(100,92,75,r*5),[l,c]=nt(100,92,o?82:79,r*5);return i.jsx("line",{x1:a,y1:s,x2:l,y2:c,strokeOpacity:o?.75:.4,strokeWidth:o?.8:.5},`m${r}`)}),i.jsx("ellipse",{cx:100,cy:92,rx:"82",ry:"24",strokeOpacity:"0.75"}),i.jsx("ellipse",{cx:100,cy:92,rx:"82",ry:"17.5",strokeOpacity:"0.4",strokeWidth:"0.7"}),Array.from({length:24},(n,r)=>{const[o,a]=[100+82*Math.cos(yt(r*15)),92+24*Math.sin(yt(r*15))],[s,l]=[100+82*Math.cos(yt(r*15)),92+17.5*Math.sin(yt(r*15))];return i.jsx("line",{x1:o,y1:a,x2:s,y2:l,strokeOpacity:"0.4",strokeWidth:"0.5"},`e${r}`)}),i.jsx("ellipse",{cx:100,cy:92,rx:"20",ry:"78",strokeOpacity:"0.45"}),i.jsx("ellipse",{cx:100,cy:92,rx:"78",ry:"14",strokeOpacity:"0.3",strokeDasharray:"3 4"}),i.jsx("g",{className:"spin-ccw",style:{"--dur":"90s"},children:i.jsxs("g",{transform:"rotate(-23.5 100 92)",children:[i.jsx("ellipse",{cx:100,cy:92,rx:"70",ry:"19",strokeOpacity:"0.65"}),i.jsx("ellipse",{cx:100,cy:92,rx:"70",ry:"14",strokeOpacity:"0.35",strokeWidth:"0.7"}),Array.from({length:12},(n,r)=>{const o=yt(r*30);return i.jsx("line",{x1:100+70*Math.cos(o),y1:92+19*Math.sin(o),x2:100+70*Math.cos(o),y2:92+14*Math.sin(o),strokeOpacity:"0.4",strokeWidth:"0.5"},`z${r}`)})]})}),i.jsxs("g",{className:"spin-cw",style:{"--dur":"70s"},children:[i.jsx("circle",{cx:100,cy:92,r:"20",strokeOpacity:"0.85"}),i.jsx("ellipse",{cx:100,cy:83,rx:"16",ry:"5",strokeOpacity:"0.4",strokeWidth:"0.7"}),i.jsx("ellipse",{cx:100,cy:92,rx:"20",ry:"6",strokeOpacity:"0.5",strokeWidth:"0.7"}),i.jsx("ellipse",{cx:100,cy:101,rx:"16",ry:"5",strokeOpacity:"0.4",strokeWidth:"0.7"}),i.jsx("ellipse",{cx:100,cy:92,rx:"7",ry:"20",strokeOpacity:"0.4",strokeWidth:"0.7"}),i.jsx("ellipse",{cx:100,cy:92,rx:"14",ry:"20",strokeOpacity:"0.3",strokeWidth:"0.6"})]}),i.jsx("line",{x1:76,y1:158,x2:124,y2:26,strokeOpacity:"0.7"}),i.jsx("circle",{cx:124,cy:26,r:"2.4",strokeOpacity:"0.8"}),i.jsx("circle",{cx:76,cy:158,r:"2.4",strokeOpacity:"0.8"})]})}function uy(e,t,n,r,o){const a=Math.PI*2/r;let s="";for(let l=0;l<r;l++){const c=l*a,u=n+o,p=(f,g)=>`${(e+f*Math.cos(c+g)).toFixed(2)},${(t+f*Math.sin(c+g)).toFixed(2)}`;s+=`${l===0?"M":"L"}${p(n,0)} `,s+=`L${p(n,a*.28)} `,s+=`L${p(u,a*.36)} `,s+=`L${p(u,a*.64)} `,s+=`L${p(n,a*.72)} `}return s+"Z"}function Lc({cx:e,cy:t,rRoot:n,teeth:r,toothH:o,spokes:a,dur:s,rev:l=!1}){return i.jsxs("g",{className:l?"spin-ccw":"spin-cw",style:{"--dur":s},children:[i.jsx("path",{d:uy(e,t,n,r,o),strokeOpacity:"0.9",strokeWidth:"1.2"}),i.jsx("circle",{cx:e,cy:t,r:n*.68,strokeOpacity:"0.5",strokeWidth:"0.8"}),Array.from({length:a},(c,u)=>{const p=u*Math.PI*2/a;return i.jsx("line",{x1:e+n*.22*Math.cos(p),y1:t+n*.22*Math.sin(p),x2:e+n*.68*Math.cos(p),y2:t+n*.68*Math.sin(p),strokeOpacity:"0.55"},u)}),i.jsx("circle",{cx:e,cy:t,r:n*.22,strokeOpacity:"0.75"}),i.jsx("circle",{cx:e,cy:t,r:n*.07,fill:"currentColor",stroke:"none",fillOpacity:"0.7"}),Array.from({length:a},(c,u)=>{const p=u*Math.PI*2/a+Math.PI/a;return i.jsx("circle",{cx:e+n*.45*Math.cos(p),cy:t+n*.45*Math.sin(p),r:n*.045,strokeOpacity:"0.5",strokeWidth:"0.7"},`b${u}`)})]})}function dy(){const e={x:74,y:108,r:42,t:18,h:8},t={x:74+74*Math.cos(yt(-38)),y:108+74*Math.sin(yt(-38)),r:26,t:12,h:7};return i.jsxs(i.Fragment,{children:[i.jsx("circle",{cx:e.x,cy:e.y,r:e.r+e.h/2,strokeOpacity:"0.25",strokeDasharray:"3 4",strokeWidth:"0.7"}),i.jsx("circle",{cx:t.x,cy:t.y,r:t.r+t.h/2,strokeOpacity:"0.25",strokeDasharray:"3 4",strokeWidth:"0.7"}),i.jsx("line",{x1:e.x,y1:e.y,x2:t.x,y2:t.y,strokeOpacity:"0.3",strokeDasharray:"2 3",strokeWidth:"0.7"}),i.jsx(Lc,{cx:e.x,cy:e.y,rRoot:e.r,teeth:e.t,toothH:e.h,spokes:5,dur:"36s"}),i.jsx(Lc,{cx:t.x,cy:t.y,rRoot:t.r,teeth:t.t,toothH:t.h,spokes:4,dur:"24s",rev:!0}),i.jsx("circle",{cx:e.x,cy:e.y,r:"2.2",strokeOpacity:"0.8"}),i.jsx("circle",{cx:t.x,cy:t.y,r:"2.2",strokeOpacity:"0.8"})]})}function hy(){return i.jsxs(i.Fragment,{children:[i.jsx("circle",{cx:80,cy:80,r:"76",strokeOpacity:"0.55"}),i.jsx("circle",{cx:80,cy:80,r:"71.5",strokeOpacity:"0.3",strokeWidth:"0.7"}),Array.from({length:24},(r,o)=>{const[a,s]=nt(80,80,71.5,o*15),[l,c]=nt(80,80,76,o*15);return i.jsx("line",{x1:a,y1:s,x2:l,y2:c,strokeOpacity:"0.3",strokeWidth:"0.6"},`p${o}`)}),i.jsxs("g",{className:"spin-cw",style:{"--dur":"140s"},children:[Array.from({length:18},(r,o)=>{const a=o*24,s=12+o*3.4,[l,c]=nt(80,80,s,a),[u,p]=nt(80,80,s,a+24),[f,g]=nt(80,80,s+3.4,a+24);return i.jsx("path",{d:`M${l.toFixed(1)},${c.toFixed(1)} A${s},${s} 0 0 1 ${u.toFixed(1)},${p.toFixed(1)} L${f.toFixed(1)},${g.toFixed(1)}`,strokeOpacity:"0.8"},o)}),i.jsx("circle",{cx:80,cy:80,r:"7",strokeOpacity:"0.8"}),i.jsx("circle",{cx:80,cy:80,r:"3.5",strokeOpacity:"0.5",strokeWidth:"0.7"})]})]})}function py(){return i.jsxs(i.Fragment,{children:[i.jsx("circle",{cx:"80",cy:"26",r:"9",strokeOpacity:"0.85",strokeWidth:"1.2"}),i.jsx("circle",{cx:"80",cy:"26",r:"3.5",strokeOpacity:"0.55",strokeWidth:"0.8"}),i.jsx("path",{d:"M77 26h6M80 23v6",strokeOpacity:"0.55",strokeWidth:"0.7"}),i.jsx("circle",{cx:"80",cy:"46",r:"5",strokeOpacity:"0.7"}),Array.from({length:10},(e,t)=>{const[n,r]=nt(80,46,5,t*36),[o,a]=nt(80,46,7,t*36);return i.jsx("line",{x1:n,y1:r,x2:o,y2:a,strokeOpacity:"0.6",strokeWidth:"0.6"},`k${t}`)}),i.jsx("path",{d:"M76 34L56 132M74.5 33.5L57.5 132",strokeOpacity:"0.85"}),i.jsx("path",{d:"M84 34l20 98M85.5 33.5L102.5 132",strokeOpacity:"0.85"}),i.jsx("path",{d:"M56 132l-1.5 8M104 132l1.5 8",strokeOpacity:"0.9"}),i.jsx("path",{d:"M54 140a62 62 0 0 0 52 0",strokeOpacity:"0.45",strokeDasharray:"2 3"}),Array.from({length:7},(e,t)=>{const[n,r]=nt(80,78,60,215+t*18.3),[o,a]=nt(80,78,55,215+t*18.3);return i.jsx("line",{x1:n,y1:r,x2:o,y2:a,strokeOpacity:"0.4",strokeWidth:"0.6"},`s${t}`)})]})}function fy(){return i.jsxs(i.Fragment,{children:[i.jsx("circle",{cx:"80",cy:"80",r:"66",strokeOpacity:"0.85",strokeWidth:"1.2"}),i.jsx("path",{d:"M52 58q14-12 30-6q10 4 4 16q-8 12-24 8q-14-4-10-18Z",fill:"currentColor",stroke:"none",fillOpacity:"0.07"}),i.jsx("path",{d:"M88 96q16-4 24 6q6 10-6 18q-14 8-24-2q-6-12 6-22Z",fill:"currentColor",stroke:"none",fillOpacity:"0.06"}),[[60,70,8],[96,60,6],[78,100,10],[104,88,5],[70,46,4.5]].map(([e,t,n],r)=>i.jsxs("g",{children:[i.jsx("circle",{cx:e,cy:t,r:n,strokeOpacity:"0.5",strokeWidth:"0.8"}),i.jsx("circle",{cx:e,cy:t,r:n*.55,strokeOpacity:"0.3",strokeWidth:"0.6"})]},r)),i.jsx("path",{d:"M80 14a66 66 0 0 0 0 132",strokeOpacity:"0.5"}),Array.from({length:9},(e,t)=>i.jsx("line",{x1:76-t*5.5,y1:32+t*12,x2:66-t*5.5,y2:38+t*12,strokeOpacity:"0.22",strokeWidth:"0.6"},`h${t}`))]})}function gy(){return i.jsxs(i.Fragment,{children:[i.jsx("rect",{x:"8",y:"8",width:"84",height:"84",strokeOpacity:"0.85"}),i.jsx("rect",{x:"30",y:"30",width:"40",height:"40",strokeOpacity:"0.6"}),i.jsx("path",{d:"M8 8l22 22M92 8L70 30M8 92l22-22M92 92L70 70",strokeOpacity:"0.6"}),i.jsx("path",{d:"M30 30h40M30 70h40",strokeOpacity:"0.25",strokeDasharray:"2 3"})]})}const my={armillary:"0 0 200 200",gears:"0 0 200 200",staircase:"0 0 160 160",compass:"0 0 160 160",moon:"0 0 160 160",tesseract:"0 0 100 100"};function Si({kind:e,className:t="",caption:n=!0}){return i.jsxs("figure",{"aria-hidden":!0,className:`pointer-events-none select-none ${t}`,children:[i.jsx("svg",{viewBox:my[e],fill:"none",stroke:"currentColor",strokeWidth:"1",className:"w-full",children:e==="tesseract"?i.jsx(gy,{}):e==="armillary"?i.jsx(cy,{}):e==="staircase"?i.jsx(hy,{}):e==="gears"?i.jsx(dy,{}):e==="compass"?i.jsx(py,{}):i.jsx(fy,{})}),n&&i.jsx("figcaption",{className:"mt-2 text-center font-mono text-[9px] uppercase tracking-[0.16em]",children:ly[e]})]})}const yy=[{value:3e3,suffix:"+",label:{en:"expert data produced across finance × legal × medical domains",zh:"金融 × 法律 × 医疗领域高质量专家数据生产"}},{value:10,suffix:"+",label:{en:"top-tier AI labs that procured and accepted the data",zh:"顶级 AI Lab 采购并验收的数据"}},{value:20,suffix:"+",label:{en:"data production lines owned end-to-end to delivery gating",zh:"条数据产线端到端负责准出交付"}},{value:1e4,suffix:"+",label:{en:"data points evaluated across harnesses × base models, with pattern analysis",zh:"条数据在不同 Harness 与基模上评测 + Pattern 分析"}}],go=["Difficulty Calibration","Judge Reliability","DAG Rubrics","Evidence Ledger","Adversarial QC","Verifier","Agent-as-Judge","Anti-Guessing Probes","RL Data","Agent Harnesses","GDPval","Toolathlon","MCP","RAGAS","Cloud Fan-out","OpenHands","Stirrup","Codex","OpenRouter","Oracle Validation","Rubric Design"];function vy(e,t,n=1100){const[r,o]=q.useState(0);return q.useEffect(()=>{var c;if(!t)return;if(typeof window<"u"&&((c=window.matchMedia)!=null&&c.call(window,"(prefers-reduced-motion: reduce)").matches)){o(e);return}let a=0;const s=performance.now(),l=u=>{const p=Math.min(1,(u-s)/n),f=1-Math.pow(1-p,3);o(Math.round(f*e)),p<1&&(a=requestAnimationFrame(l))};return a=requestAnimationFrame(l),()=>cancelAnimationFrame(a)},[e,t,n]),r}function xy({stat:e,active:t,index:n}){const r=ie(),o=vy(e.value,t);return i.jsxs("div",{children:[i.jsx("div",{className:"font-mono text-[11px] tracking-[0.18em] text-muted-foreground/70",children:String(n+1).padStart(2,"0")}),i.jsxs("div",{className:"mt-1.5 font-mono text-5xl font-semibold tracking-tight tabular-nums sm:text-6xl",children:[o,e.suffix?i.jsx("span",{className:"text-brand",children:e.suffix}):null]}),i.jsx("div",{className:"mt-2 text-sm text-muted-foreground",children:r(e.label)})]})}function wy(){const e=ie(),t=q.useRef(null),[n,r]=q.useState(!1);return q.useEffect(()=>{const o=t.current;if(!o||typeof IntersectionObserver>"u"){r(!0);return}const a=new IntersectionObserver(s=>s.forEach(l=>l.isIntersecting&&(r(!0),a.disconnect())),{threshold:.3});return a.observe(o),()=>a.disconnect()},[]),i.jsxs("section",{className:"relative mx-auto mt-12 max-w-content px-6 md:mt-16",children:[i.jsx(Si,{kind:"armillary",className:"absolute -right-44 top-0 hidden w-40 text-foreground/30 min-[1450px]:block"}),i.jsx(se,{children:i.jsx("p",{className:"eyebrow",children:e(F.atScale)})}),i.jsx(se,{delay:80,children:i.jsxs(oi,{className:"mt-12",children:[i.jsx(Kn,{left:"Measured values",right:"Units: count"}),i.jsx("div",{ref:t,className:"grid grid-cols-2 gap-x-6 gap-y-12 p-7 md:grid-cols-4 md:p-9",children:yy.map((o,a)=>i.jsx(xy,{stat:o,active:n,index:a},a))})]})}),i.jsxs("div",{className:"mt-6 grid gap-6 md:grid-cols-2",children:[i.jsx(se,{delay:120,children:i.jsxs(oi,{interactive:!0,className:"h-full",children:[i.jsx(Kn,{left:"Fig. 02 — Difficulty distribution",right:"134 items"}),i.jsx(Zm,{className:"w-full p-4"})]})}),i.jsx(se,{delay:160,children:i.jsxs("div",{className:"relative flex h-full flex-col justify-center gap-3 overflow-hidden py-8 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",children:[i.jsx("div",{className:"flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]",children:[...go,...go].map((o,a)=>i.jsx("span",{className:"chip whitespace-nowrap",children:o},a))}),i.jsx("div",{className:"flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]",style:{animationDirection:"reverse",animationDuration:"44s"},children:[...go].reverse().concat(go.slice().reverse()).map((o,a)=>i.jsx("span",{className:"chip whitespace-nowrap",children:o},a))})]})})]})]})}function Kr({eyebrow:e,title:t,sub:n,size:r="section",narrow:o=!1}){const a=ie(),{lang:s}=ki();return i.jsxs(i.Fragment,{children:[i.jsx("p",{className:"eyebrow",children:a(e)}),i.jsx("h2",{className:`mt-3 font-semibold ${s==="en"?`font-mono uppercase tracking-wide text-xl ${r==="page"?"sm:text-3xl":"sm:text-2xl"}`:`tracking-tight text-3xl ${r==="page"?"sm:text-5xl":"sm:text-4xl"}`}${o?" max-w-2xl":""}`,children:a(t)}),n&&i.jsx("p",{className:"mt-3 text-muted-foreground",children:a(n)})]})}function il({children:e}){return i.jsx("span",{className:"chip",children:e})}const by=[{icon:"gauge",title:{en:"Evaluation science",zh:"评测科学"},body:{en:"Difficulty calibration with control-group experiments, anti-guessing probes, leakage control, and systematic testing of the LLM judge itself.",zh:"带对照组的难度校准、防蒙探针、泄漏控制，以及对 LLM Judge 本身的系统性测试。"},tags:["Difficulty calibration","Judge reliability","Anti-guessing gates"]},{icon:"flask",title:{en:"Synthetic & RL data",zh:"合成与 RL 数据"},body:{en:"Evidence-grounded task synthesis in expert domains: dual-model fact confirmation, adversarial QC, and DAG rubrics that score the reasoning process as well as the outcome.",zh:"专家领域的证据约束任务合成：双模型事实互证、对抗式 QC，以及过程与结果都打分的 DAG Rubric。"},tags:["Evidence ledger","DAG rubrics","Adversarial QC"]},{icon:"workflow",title:{en:"Agentic systems",zh:"智能体系统"},body:{en:"Multi-agent pipelines built and operated as production software: role-isolated model routing, blind-then-hinted solver protocols, and verification agents that reproduce findings by execution.",zh:"按生产软件标准搭建并维护 Multi-Agent Pipeline：角色隔离的模型路由、先盲解后提示的试做协议、必须执行复现才算数的验证 Agent。"},tags:["Multi-agent pipelines","Verification fleets","MCP"]},{icon:"layers",title:{en:"Eval infrastructure",zh:"评测基础设施"},body:{en:"Containerized eval execution across model families and harnesses, with cloud fan-out, cost governance, and delivery-grade QA gates.",zh:"跨模型族、跨 Harness 的容器化评测执行，含云端 fan-out、成本治理与交付级 QA 门控。"},tags:["Model×harness matrices","Cloud fan-out","Delivery QA"]}],ky={workflow:hm,gauge:rm,flask:nm,layers:im};function qy(){const e=ie();return i.jsxs("section",{className:"relative mx-auto mt-12 max-w-content px-6 md:mt-16",children:[i.jsx(Si,{kind:"gears",className:"absolute -left-44 top-2 hidden w-36 text-foreground/30 min-[1450px]:block"}),i.jsx(se,{children:i.jsx(Kr,{eyebrow:F.buildEyebrow,title:F.buildTitle,narrow:!0})}),i.jsx("div",{className:"mt-12 grid gap-5 sm:grid-cols-2",children:by.map((t,n)=>{const r=ky[t.icon];return i.jsx(se,{delay:n*70,children:i.jsxs("article",{className:"surface lift group h-full p-7 md:p-8",children:[i.jsxs("div",{className:"flex items-start justify-between",children:[i.jsx("span",{className:"inline-flex h-11 w-11 items-center justify-center border border-line bg-background text-foreground transition-colors group-hover:border-brand/60",children:i.jsx(r,{className:"h-5 w-5",strokeWidth:1.6})}),i.jsx("span",{className:"font-mono text-[11px] tracking-[0.18em] text-muted-foreground/70",children:String(n+1).padStart(2,"0")})]}),i.jsx("h3",{className:"mt-5 text-xl font-semibold tracking-tight",children:e(t.title)}),i.jsx("p",{className:"mt-2.5 leading-relaxed text-muted-foreground",children:e(t.body)}),i.jsx("div",{className:"mt-5 flex flex-wrap gap-2",children:t.tags.map(o=>i.jsx(il,{children:o},o))})]})},n)})})]})}function Sy(e){const[t,n]=e.split(" – "),r=new Date(t),o=!n||/present/i.test(n)?new Date:new Date(n);if(Number.isNaN(r.getTime())||Number.isNaN(o.getTime()))return 1;const a=(o.getFullYear()-r.getFullYear())*12+(o.getMonth()-r.getMonth());return Math.max(1,a)}function jy(e){if(e<12)return`${e} MO`;const t=Math.floor(e/12),n=e%12;return n?`${t} YR ${n} MO`:`${t} YR`}function _y({items:e}){return i.jsx("div",{className:"overflow-x-auto pb-1",children:i.jsx("div",{className:"flex min-w-[640px]",children:e.map((t,n)=>{const r=Sy(t.period);return i.jsxs("div",{className:"flex-1 text-center",style:{flexGrow:r,flexBasis:0},children:[i.jsx("div",{className:"px-1 font-mono text-[9px] tracking-[0.14em] text-brand",children:jy(r)}),i.jsxs("div",{className:"relative mt-1 h-3 text-foreground/45",children:[i.jsx("div",{className:"absolute inset-x-0 top-1/2 h-px bg-foreground/45"}),i.jsx("div",{className:"absolute left-0 top-0 h-full w-px bg-foreground/45"}),n===0&&i.jsx("span",{className:"absolute left-0 top-1/2 -translate-y-1/2",style:{borderTop:"3px solid transparent",borderBottom:"3px solid transparent",borderRight:"5px solid currentColor"}}),n===e.length-1&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"absolute right-0 top-0 h-full w-px bg-foreground/45"}),i.jsx("span",{className:"absolute right-0 top-1/2 -translate-y-1/2",style:{borderTop:"3px solid transparent",borderBottom:"3px solid transparent",borderLeft:"5px solid currentColor"}})]})]}),i.jsx("div",{className:"mt-1 truncate px-1 font-mono text-[8.5px] uppercase tracking-[0.12em] text-muted-foreground",children:t.label})]},n)})})})}const Xa=[{company:"HUMANLAYA AI",role:{en:"AI Algorithm Engineer · Infra Engineer · Project Manager",zh:"AI 算法工程师 · Infra 工程师 · 项目经理"},location:{en:"Beijing, China",zh:"中国 · 北京"},period:"Apr 2026 – Present",summary:{en:"One of the founding engineers — owning capability evaluation and benchmark design for leading US and Chinese models, leading HIL data-synthesis and Agent-as-a-Judge evaluation algorithms as algorithm lead, and building the company's evaluation, synthesis, and delivery platforms.",zh:"作为创始工程师之一，负责中美前沿模型能力评测与高质量 Benchmark 设计；作为算法负责人，设计 HIL 数据合成与 Agent-as-Judger 评测算法；并搭建评测、合成、交付三大 AI Infra 平台。"},highlights:[{title:{en:"High-quality benchmark design & expert training-data construction",zh:"高质量 Benchmark 设计与专家训练数据构造"},items:[{en:"Foundation-model evaluation: run reproducible benchmarks for the leading US and Chinese models on a unified containerized harness — spanning public benchmarks such as GDPval and office-productivity tasks — reporting score, cost, and latency to map each model’s capability gaps, including full-precision vs. quantized comparisons.",zh:"基模能力评测：在统一容器化 harness 上对中美领先模型执行可复现的基准评测，覆盖 GDPval 等公开基准与 Office 生产力任务，从分数、成本、时延三个维度绘制各家模型的能力缺口图谱，并延伸到全精度 vs 量化等部署变量的对比。"},{en:"Agentic capability evaluation: drive models through long-horizon real-world tasks under harnesses including Claude Code, Codex, OpenHands, Stirrup, OpenCode, and Gemini CLI, with per-rubric-row grading; diagnose LLM–harness compatibility defects (e.g., reasoning models silently ending tasks early) and deliver per-model capability findings to enterprise clients.",zh:"Agentic 能力评测：以 Claude Code、Codex、Openhands、Stirrup、Opencode、Gemini Cli 等 harness 驱动被测模型完成长程真实任务并逐条 rubric 判分；诊断 llm 与 harness 之间的兼容性缺陷（如推理模型静默提前结束任务），向企业客户输出分模型能力结论。"},{en:"VLM capability evaluation: build evaluation paths for multimodal document tasks — charts, scanned files, screenshots — and audit vendors’ real visual capability side by side.",zh:"VLM 能力评测：面向 Chart、扫描件、截图等多模态文档任务构建评测路径，横向审计各厂商模型的真实视觉能力。"},{en:"Professional post-train / SFT data: construct high-quality post-training and SFT data in expert domains — finance, law, medicine, and industry — targeting the capability gaps surfaced by evaluation to precisely strengthen each model’s weaknesses; ranked No. 1 in China for GDPval-style productivity tasks and long-horizon agentic training / eval data.",zh:"专业 Post-train / SFT 数据构造：针对评测暴露的能力缺口，构造金融、法律、医疗、工业等专家领域的高质量 Post-train 与 SFT 数据，精确补强各家模型的短板能力；在 GDPval 类生产力任务与 Long-Horizon Agentic 训练/ eval 数据方向做到国内第一。"},{en:"Data commercialization: datasets procured as high-quality SFT data by Tencent, Alibaba, Ant Group, ByteDance, MiniMax, GLM (Zhipu), DeepSeek, Meituan, and Xiaohongshu, supporting stronger next-generation model releases across these vendors.",zh:"数据商业化：数据被腾讯、阿里、蚂蚁、字节、MiniMax、GLM、DeepSeek、美团、小红书等厂商采购为高质量 SFT 数据，助力各家发布更优的新一代模型。"}]},{title:{en:"Algorithm design",zh:"算法设计"},items:[{en:"HIL high-quality data synthesis: design expert-in-the-loop multi-agent synthesis algorithms that turn experts’ real workspaces into hard, evidence-grounded agentic training data across investment banking (primary and secondary markets), management consulting, corporate law, clinical medicine, and bioinformatics — with validity enforced by cross-vendor model independence, locator-bound evidence ledgers, Actor-Critic-Monitor adversarial QC, and expert review panels.",zh:"HIL 高质量数据合成算法：设计 Expert-in-Loop 的 Multi-Agent 合成算法，将专家真实 Workspace 转化为投行金融（一级市场、二级市场等）、管理咨询、公司法、临床医学、生物信息学等领域中以证据为依据的高难度 Agent 训练数据；以跨厂商模型独立性、带定位符的证据账本与 Actor-Critic-Monitor 对抗式质检、专家评审团等手段保证数据有效性。"},{en:"DAG rubrics: design DAG-structured rubric systems that restructure traditional “flat” rubrics into three row types — Process, Result, and Hurdle — enabling narrative grading of each task item that precisely measures the correctness of a model’s checkpoints and intermediate steps, improving RL effectiveness.",zh:"DAG Rubric：设计 DAG 结构的 rubric 体系，将传统“平铺”式 Rubrics 重构为 Process-Result-Hurdle 三类型 Rubrics ，实现题目“叙事性”判分，能精确衡量模型完成任务的 ckp、steps 的正确性，提高 RL 效果"},{en:"LLM/Agent-as-a-Judge evaluation algorithms: design fine-grained LLM judging metrics for stable, efficient grading of model responses, output files, and trajectories; abstract the core metric methods into function calls / skills, leveraging Agent-as-a-Judge flexibility to deliver a large lift in accuracy, recall, and precision on complex agentic-task evaluation.",zh:"LLM/Agent-as-Judger 评测算法：设计精细化 llm 评测 metric，实现稳定且高效模型 response/output_files/trajectory 评判，同时将 llm metric 中核心方法抽象为 function-call/skills，借助 Agent-as-Judge 的灵活性，实现复杂 Agentic Task 评估 Acc/Recall/Precision 大幅上升。"}]},{title:{en:"AI infrastructure",zh:"AI Infra"},items:[{en:"Evaluation platform: adopted the open-source Harbor framework as the unified data format and built batch-evaluation orchestration on Daytona cloud sandboxes — normalizing heterogeneous tasks into a standard eval format with high-concurrency fan-out, smoke-test gating, and in-place failure reruns — supporting free combination of model families (Anthropic, OpenAI, Gemini, Qwen, HY, Seed, GLM, Kimi, etc.) × agent harnesses (Claude Code, Codex, Stirrup, etc.).",zh:"评测平台搭建：基于开源 Harbor 框架作为统一数据格式，并通过 Daytona 云沙箱搭建批量评测编排系统，将异构任务统一为标准评测格式，支持高并发扇出、冒烟门控与失败原地重跑，覆盖 Anthropic、OpenAI、Gemini、Qwen、HY、seed、GLM、KIMI 等多个模型族 × Claude Code、Codex、Stirrup 等多种 agent harness 的自由组合评测。"},{en:"Data-synthesis platform: productionized the multi-agent synthesis pipeline — per-node cross-vendor model swapping, gate monitoring, resumable runs, and human-review windows — plus MCP operations tooling and a visual console, covering the full path from seed data to finished items.",zh:"数据合成平台搭建：将多智能体合成 pipeline 产品化，提供每个 Agents 节点跨厂商替换、门控监控、断点续跑、人工复核窗口等能力，同时配套 MCP 运维工具与可视化控制台，支撑从种子数据到成题的全链路生产。"},{en:"Data-delivery platform: manage delivered data as versioned assets — SKUs and version lineage across the full delivery chain — with pre-delivery audits of data structure and per-component QA over prompts, rubrics, reference answers, and judge prompts, emitting agent-readable issue codes for automated repair to guarantee the correctness and consistency of every delivery.",zh:"数据交付平台搭建：把交付数据资产化，利用 SKU、版本血缘等方式全链路管理数据交付，并在交付前自动审计数据结构、对Prompt、Rubrics、Ref、judge prompt 等组件分别进行 qa，输出 Agent 可读的问题码供自动修复，保证交付数据正确性、一致性。"}]},{title:{en:"Data delivery",zh:"数据交付"},items:[{en:"Delivery gating: harden constraints such as “oracle runs must score full marks” and conflict-free prompt–rubrics–reference alignment into delivery invariants; run full pre-delivery checks with production-identical judges and block any batch that misses the red lines; refine failures under a minimal-change rule and re-judge until every delivery requirement is met, retaining full meta information so each delivery is reproducible and auditable.",zh:"交付准出：把 Oracle 实验必须满分、prompt & rubrics & reference 无冲突等约束固化为交付不变量，交付前以生产同配置的裁判做全量预检，未过红线的批次一律不出库；失败项按最小改动原则 Refine 后重判，直至满足所有交付要求，同时会保留所有相关 meta 信息，保证每次交付可复现、可审计。"},{en:"Feedback loop: own the enterprise-client feedback loop — reproduce every reported issue, triage it P0–P3, separate real defects from version drift and spec-alignment gaps, and close each one with a fix and a client-facing response.",zh:"反馈闭环：负责企业客户反馈闭环，对上报问题逐条复现并按 P0–P3 分级，区分真实缺陷、版本漂移与口径对齐三类问题，逐一完成修复与对客回复。"},{en:"Client relationships & institutionalization: serve as the R&D-side technical interface to enterprise clients and maintain long-term relationships; distill client feedback into delivery red lines and SOPs that teammates and automated agents alike execute against, feeding back into data quality and platform iteration.",zh:"客户关系与沉淀：作为研发侧对客技术接口，长期维护企业客户关系；将客户反馈沉淀为交付红线与 SOP，让团队成员与自动化 Agent 都按同一套标准执行交付检查，反哺数据质量与平台迭代。"}]}],tags:["Evaluation Science","Benchmark Design","Expert SFT / RL Data","Agent-as-a-Judge","DAG Rubrics","Multi-Agent Systems","Data Delivery"]},{company:"Fintopia",role:{en:"Machine Learning Engineer (AI R&D)",zh:"Machine Learning Engineer（AI 研发）"},location:{en:"Beijing, China",zh:"中国 · 北京"},period:"Nov 2025 – Apr 2026",summary:{en:"Led end-to-end development, observability, and evaluation of AI infrastructure for the cross-border lending business across China, Indonesia, Mexico, and the Philippines.",zh:"负责跨境借贷业务（中国、印尼、墨西哥、菲律宾）AI 基础设施的端到端开发、可观测性与评测。"},highlights:[{en:"Enterprise agentic ecosystem: architected a scalable agent ecosystem on Volcengine AgentKit and VeADK, integrating Anthropic Agent Skills, MCP, and advanced tool-use; achieved deep binding between agents and corporate data warehouses for real-time, data-driven decisions.",zh:"企业级 Agent 生态：基于火山引擎 AgentKit、VeADK 搭建可扩展 Agent 体系，集成 Anthropic Agent Skills、MCP 与 Tool-use 能力，并打通企业数仓，支撑实时数据驱动决策。"},{en:"Unified AI evaluation infrastructure: built a platform supporting rule-based (code) and LLM-as-a-judge scoring, with specialized metric suites for regression, classification, RAG, and agents (e.g., trajectory quality, tool precision) — powering QA and release gating for all internal AI products.",zh:"统一评测平台：搭建同时支持 Rule-based（代码）与 LLM-as-a-Judge 的评分平台，针对回归、分类、RAG、Agent 分别设计 Metric 套件（Trajectory 质量、工具调用准确率等），承载公司内部 AI 产品的 QA 与准出。"},{en:"Agent observability: instrumented OpenTelemetry spans with Kafka and ClickHouse for near-real-time aggregation of enterprise agent traces and real-time behavioral diagnostics.",zh:"Agent 可观测：基于 OpenTelemetry 接入 Span 埋点，通过 Kafka + ClickHouse 实现企业 Agent Trace 准实时聚合与实时行为诊断。"},{en:"Enterprise RAG system: built a highly available internal RAG system on the open-source Haystack framework, ingesting Lark sheets and offline PDF/DOCX/XLSX/PPTX files into the knowledge base with high-quality reranking over recalled passages; wired in RAGAS for fine-grained quality evaluation, serving as the release-gate baseline before every launch.",zh:"企业级 RAG 系统：基于 Haystack 开源框架搭建企业内部高可用 RAG 系统，打通飞书表格与线下 PDF/DOCX/XLSX/PPTX 等多种数据格式上传为知识库，并对召回结果做高质量精排；接入 RAGAS 对 RAG 效果做精细化评测，作为每次上线前的准出基准。"},{en:"Multilingual voice bots: fine-tuned Whisper into an ASR model on precisely labeled data in business-market languages such as Indonesian and Spanish, fine-tuned Qwen-14B for semantic understanding, and sourced premium third-party TTS voices — assembling the full ASR + NLU + TTS voice-bot stack, deployed across pre-loan customer acquisition, post-loan customer service, and collections scenarios.",zh:"多语种语音机器人：基于印尼语、西班牙语等业务国家的精标数据微调 Whisper 得到 ASR 模型，微调 Qwen 14B 承担语义识别，并外采高质量音色厂商的 TTS，组装出 ASR + 语义识别 + TTS 的完整语音机器人链路，用于贷前引流、贷后客服、贷后催收等场景。"},{en:"Risk AI: deployed SLMs in the Mexican and Philippine markets for risk-feature mining and fraud-pattern detection, distilling model-ready risk features from unstructured data such as call dialogues; collected features at the face-recognition step to build customer profiles on fully de-identified data; and correlated voice-bot dialogue features with recovery rates to quantify the business impact of speech strategies.",zh:"AI 风控：面向墨西哥、菲律宾等市场部署 SLM 做风控特征挖掘与欺诈模式识别，从通话对话等非结构化数据中提炼可入模的风险特征；在人脸识别环节采集相关特征，在脱敏前提下构建客户画像；并将语音机器人的对话特征与回收率做关联分析，量化语音策略对业务指标的影响。"}],tags:["Agents · AgentKit","MCP","RAG / RAGAS","OTel · Kafka · ClickHouse","Voice AI · Whisper","Risk AI / SLM","FinTech"]},{company:"ByteDance",role:{en:"Algorithm Engineer · Doubao (VLM) Evaluation",zh:"算法工程师 · 豆包（VLM）评测"},location:{en:"Beijing, China",zh:"中国 · 北京"},period:"Mar 2025 – Nov 2025",summary:{en:"Owned evaluation-algorithm design and evaluation-platform infrastructure for the Doubao vision-language model.",zh:"负责豆包 VLM 评测算法设计及模型评测平台 Infra 工作"},highlights:[{en:"Framework architecture: contributed to building the Merlin evaluation platform, standardizing the “evals” workflow into 5 modular components — Datacard, Exercise, PE Template, Arena, and Insight — enabling one-click benchmarking and visualization for proprietary and open-source models.",zh:"评测框架：参与评测平台 Merlin 构建，把 Evals 流程标准化为 5 个模块（Datacard、Exercise、PE Template、Arena、Insight），支持自研与开源模型一键执行 Benchmark 并输出可视化。"},{en:"Metric system: built a hybrid scoring system combining rule-based (RegEx) and LLM-as-a-judge metrics — spanning CoT-pattern analysis, grounding, and complex-instruction evaluation — and integrated/aligned 20+ public VLM benchmarks (ChartQA, HRBench, SciAssess, FinMME, etc.) via automated pipelines that cut evaluation deployment time by 95%.",zh:"Metric 体系：设计 Rule-based（RegEx）+ LLM-as-a-Judge 混合判分体系，覆盖 CoT 模式分析、Grounding、复杂指令等评估类型；接入并对齐 ChartQA、HRBench、SciAssess、FinMME 等 20+ 公开VLM Benchmark，自动化流水线将评测部署时间缩短 95%。"},{en:"Eval-set construction: led LLM-to-VLM evaluation sets that convert long-document benchmarks into images to probe models in many-image, multi-turn scenarios, unifying understanding and generation in a single pipeline; produced multilingual versions of the eval suite to measure cross-lingual performance drift.",zh:"评测集建设：主导 LLM 转 VLM 专项评测集，通过长文 benchmark 转图片考察模型超多图、多轮交互场景下的综合能力，将理解与生成统一进同一条评测流程；并完成评测集多语种化，度量模型跨语种的性能波动。"},{en:"Team engineering efficiency: automated large-scale evaluation via platform APIs and MCP tools, and built custom Lark productivity suites that significantly raised team throughput.",zh:"团队工程提效：通过平台 API 与 MCP 工具实现大规模评测自动化，并自研多款飞书效率工具，提升团队吞吐。"},{en:"Leadership & honors: led a 30-member cross-functional team to curate a “Visual Hard Problems” dataset — 1,000+ cases across expert domains such as art history, medical anatomy, and geology — surfacing critical multimodal failure cases and benchmarking 20+ frontier LLMs with 92% subjective-scoring agreement. Awarded a quarterly individual SPOT Bonus (Top 1% departmental honor) and an M+ performance rating (Top 10%).",zh:"团队与荣誉：带领 30 人跨职能团队构建「Visual Hard Problems」数据集，在艺术史、医学解剖、地质学等专家领域设计 1000+ 高难用例，定位前沿模型的多模态 Failure Case，对 20+ 前沿模型完成大规模基准测试，主观评分一致性达 92%；获季度个人 SPOT Bonus 奖项（部门前 1%）与 M+ 绩效（前 10%）。"}],tags:["VLM Eval","Benchmark Design","LLM-as-a-Judge","Eval Platform Infra","MCP","Team Lead"]},{company:"PwC China",role:{en:"Risk Assurance Associate",zh:"Risk Assurance Associate（风险与鉴证服务）"},location:{en:"Beijing, China",zh:"中国 · 北京"},period:"Nov 2024 – Mar 2025",summary:{en:"Served TMT and pre-IPO clients at the intersection of professional audit standards and AI, delivering IT audit, IT consulting, IT due diligence, and business-risk-analysis services.",zh:"面向 TMT 与 pre-IPO 客户，结合专业审计标准与 AI 技术，负责给客户提供专业 IT Audit、IT Consulting、IT Due Diligence、Business Risk Analysis等服务。"},highlights:[{en:"AI-driven audit: as tech lead of the PwC–Baidu AICA program, developed a RAG-based financial-audit assistant on Baidu ERNIE to automate retrieval and insight extraction from massive financial datasets, earning the Baidu Chief AI Architect certification.",zh:"AI 审计：作为普华永道-百度 AICA 技术负责人，基于百度文心（ERNIE）开发 RAG 财务审计助手，实现海量财务数据的自动检索与洞察抽取，获得百度首席 AI 架构师认证。"},{en:"Audit-standards agent: built an agent assistant for the engagement partner grounded in PwC internal and ISA auditing standards — DeepSeek R1 as the base model, with document vectorization and retrieval tuning — targeted for deployment inside the PwC network.",zh:"审计准则 Agent：对接主管合伙人需求，以 DeepSeek R1 为基座构建基于普华永道内部审计准则与 ISA 准则的 Agent 智能助手，完成文档向量化嵌入与检索调优，面向普华永道网络内部署。"},{en:"IT general controls (ITGC): led ITGC audits for US- and HK-listed internet companies such as Meituan and Weibo, across six control domains — control environment, access management, computer operations, program changes, program development, and cybersecurity — running interviews, walkthroughs, and control testing through to full workpapers; reviewed the OS and database layers spanning Linux/Windows, MySQL/TiDB/SQL Server, HBase/MongoDB, data warehouses, and distributed components.",zh:"ITGC 审计：负责美团、微博等多家美股、港股上市互联网公司的 IT 一般控制审计，覆盖控制环境、访问管理、计算机运行、程序变更、程序开发与网络安全六大控制域，完成访谈、穿行测试、控制测试到底稿编写的全流程；并执行操作系统与数据库层审查，涵盖 Linux/Windows、MySQL/TiDB/SQL Server、HBase/MongoDB、数据仓库与各类分布式组件。"},{en:"IT application controls (ITAC): owned ITAC across multiple TMT business lines — mapping business processes and data flows, identifying key automated-control points, drafting PBC lists, and executing walkthroughs and control tests to verify system integrity — including end-to-end security testing over complex capital flows for financial institutions.",zh:"ITAC 审计：负责多家 TMT 公司多条业务线的 IT 应用控制，包括绘制业务流程图与数据流转图、识别关键自动化控制点、起草 PBC 清单、执行穿行测试与控制测试以验证系统完整性；含对金融机构复杂资金流的端到端安全测试。"},{en:"Risk analytics & due diligence: ran business-risk analysis (BRA) and IT due diligence (ITDD) for TMT and pre-IPO clients, applying machine-learning, deep-learning, and econometric methods (Python, Power BI, Stata) to anti-fraud data and anomaly detection for risk insights.",zh:"风险分析与尽调：为 TMT 与拟 IPO 企业执行业务风险分析（BRA）与 IT 尽职调查（ITDD），应用机器学习、深度学习与计量经济学方法（Python、Power BI、Stata）分析反欺诈数据与异常情况，输出业务风险洞察。"},{en:"Digital & AI consulting: advised enterprises across construction, environmental, and internet sectors on AI-transformation roadmaps — designing digitalization scenario cards from real business needs and delivering end-to-end implementation plans with IT cost optimization and infrastructure scaling.",zh:"数字化与 AI 咨询：为建筑、环保、互联网等行业企业提供 AI 转型咨询——根据实际业务需求设计数字化场景卡片，制定端到端落地方案，并覆盖 IT 成本优化与基础设施扩容。"}],tags:["ITGC / ITAC","ITDD / BRA","RAG · Agent","CyberSecurity","IT/AI Consulting"]},{company:"PwC China",role:{en:"Global Technology Support Engineer (Internship)",zh:"Global Technology Support Engineer（实习）"},location:{en:"Beijing, China",zh:"中国 · 北京"},period:"Jul 2023 – Oct 2023",highlights:[{en:"Firmwide Corporate Services: provided infrastructure support (server maintenance, VPN, internal network protocols) and managed enterprise IT asset lifecycle to corporate security and scalability standards.",zh:"企业服务：维护全所基础设施（服务器、VPN、内网协议），按企业安全与扩展性标准管理 IT 资产全生命周期。"},{en:"Process automation: built automated workflows for employee offboarding, streamlining data backup and migration to improve data security and operational efficiency.",zh:"流程自动化：将员工离职流程自动化，规范数据备份与迁移，提升数据安全与运营效率。"},{en:"Security operations: took part in employee-device security reviews and firmwide anti-phishing drills, helping enforce endpoint-compliance baselines and raise security awareness across the firm.",zh:"安全运营：参与公司员工设备安全审查与防钓鱼演练等安全治理工作，协助落实终端安全合规基线，提升全员安全意识。"}],tags:["IT Infrastructure","Automation","Enterprise Security"]},{company:"National University of Singapore",role:{en:"Machine Learning Intern (Academic Exchange)",zh:"Machine Learning Intern（学术交流）"},location:{en:"Singapore",zh:"新加坡"},period:"Nov 2021 – Mar 2022",highlights:[{en:"Selected through competitive admission into the NUS machine-learning academic-exchange program; studied classical ML algorithms in depth — regression, SVM, decision trees, ensemble methods, clustering, and dimensionality reduction — down to their mathematical foundations.",zh:"入选 NUS 机器学习学术交流项目，系统深入学习回归、SVM、决策树、集成学习、聚类、降维等经典机器学习算法及其数学原理。"},{en:"Completed algorithm experiments by hand-writing implementations from scratch rather than calling libraries, validating each against real datasets — building a rigorous foundation in algorithm engineering.",zh:"以“不调库 + 手写实现”的方式完成各类机器学习算法实验，从零实现核心算法并在真实数据集上验证效果，打下扎实的算法工程基本功。"},{en:"Built an LSTM time-series temperature-prediction model end-to-end — from preprocessing and feature engineering of climate data through training and evaluation — completed independently.",zh:"端到端独立实现 LSTM 气温时间序列预测模型，覆盖气候数据清洗、特征工程、模型训练与评估全流程。"},{en:"Final research project graded with Distinction; ranked first in GPA among program participants.",zh:"结题项目获 Distinction 荣誉结项，个人 GPA 位列项目第一。"}],tags:["Classical ML","From-scratch Implementations","LSTM · Deep Learning"]}],mh=[{school:{en:"Ocean University of China",zh:"中国海洋大学"},degree:{en:"B.S. in Computer Science (GPA 3.2/4.0)",zh:"计算机科学与技术 学士（GPA 3.2/4.0）"},location:{en:"Qingdao, China",zh:"中国 · 青岛"},period:"Sep 2020 – Jul 2024",details:[{en:"Selected coursework: Machine Learning, Computer Vision, Data Analysis & Data Mining, Parallel & Distributed Computing, Scientific Computing in Python, Numerical Analysis, Linear Algebra, Operating Systems, Data Visualization, and Big Data Technologies.",zh:"主修课程：机器学习、计算机视觉、数据分析与数据挖掘、并行与分布式计算、Python 科学计算、数值分析、线性代数、操作系统、可视化技术、大数据技术原理与应用等。"},{en:"Honors: Academic Excellence Scholarship (Top 5%), Innovation & Entrepreneurship Scholarship, Excellent Graduation Thesis (Top 1%).",zh:"荣誉：学业优秀奖学金（前 5%）、创新创业奖学金、优秀毕业论文（前 1%）。"},{en:"Leadership: served four consecutive years as class monitor, organizing academic and extracurricular activities; named “Outstanding Student” and “Outstanding Student Leader”.",zh:"领导力：连续四年担任班长，组织学术与课外活动增强班级凝聚力；获「优秀学生」「优秀干部」称号。"},{en:"Thesis: “Blockchain-based Encrypted Cross-modal Retrieval Framework” — built a cross-modal neural network mapping text and image features into a shared hash space; implemented triple-hash encryption combining image/text MD5 digests with hybrid hashing; and enabled encrypted storage with privacy-preserving retrieval via Solidity smart contracts (PyTorch + Solidity).",zh:"毕业论文：《基于区块链的加密跨模态检索框架》——构建跨模态神经网络，将文本与图像特征映射至共享哈希空间；实现三重哈希加密，将图像/文本的 MD5 摘要与混合哈希结合；基于 Solidity 智能合约实现加密存储与隐私保护检索（PyTorch + Solidity）。"}]}],Eo=[{label:{en:"AI / ML",zh:"AI / ML"},items:[{en:"Benchmark design · model capability-gap mapping (foundation / agentic / VLM)",zh:"Benchmark 设计 · 模型能力缺口图谱（基模 / Agentic / VLM）"},{en:"Expert SFT / post-train / RL data construction · evidence-grounded multi-agent synthesis",zh:"专家 SFT / Post-train / RL 数据构造 · 证据依据的多智能体合成"},{en:"LLM / Agent-as-a-Judge · fine-grained judging metrics (response / files / trajectory)",zh:"LLM / Agent-as-a-Judge · 精细化判分 Metric（response / files / trajectory）"},{en:"DAG rubrics (Process / Result / Hurdle · narrative grading)",zh:"DAG Rubric（Process / Result / Hurdle · 叙事性判分）"},{en:"Adversarial QC (Actor-Critic-Monitor) · expert review loops",zh:"对抗式质检（Actor-Critic-Monitor）· 专家评审闭环"},{en:"Agent systems & harnesses (Claude Code, Codex, OpenHands…) · MCP",zh:"Agent 系统与 Harness（Claude Code、Codex、OpenHands 等）· MCP"},{en:"RAG architecture · model fine-tuning & deployment (Whisper, Qwen)",zh:"RAG 架构 · 模型微调与部署（Whisper、Qwen）"}]},{label:{en:"Infrastructure",zh:"基础设施"},items:[{en:"Eval orchestration & cloud-sandbox fan-out (Harbor · Daytona)",zh:"评测编排与云沙箱扇出（Harbor · Daytona）"},{en:"Data-delivery engineering: SKU / version lineage · QA gating & automated repair",zh:"数据交付工程：SKU / 版本血缘 · QA 门控与自动修复"},"OpenTelemetry · Kafka · ClickHouse","Elasticsearch · Haystack","Docker · Linux · Git"]},{label:{en:"Languages",zh:"编程语言"},items:["Python","Rust","C / C++","TypeScript / React"],columns:2},{label:{en:"Certifications",zh:"证书"},items:[{en:"PCAP — Certified Associate Python Programmer (Python Institute)",zh:"PCAP — Python Institute 认证 Python 工程师"},{en:"Alibaba Cloud Certified Professional — LLM (ACP)",zh:"阿里云 ACP 认证专业工程师 — 大模型（LLM）"}]},{label:{en:"Spoken",zh:"语言"},items:[{en:"Mandarin (native)",zh:"中文（母语）"},{en:"English (CEFR B2)",zh:"English（CEFR B2）"},{en:"Japanese (JLPT N2 · CEFR B2)",zh:"日语（JLPT N2 · CEFR B2）"},{en:"German (B1, learning)",zh:"德语（B1，在学）"}],columns:2}],yh=[{en:"Web3 security & MEV research (see Writing)",zh:"Web3 安全与 MEV 研究（见文章）"},{en:"ZK-ML research",zh:"ZK-ML 研究"},{en:"High-altitude trekking (5000 m+)",zh:"高海拔徒步（5000 米+）"},{en:"Alpine skiing",zh:"高山滑雪"},{en:"Cycling",zh:"骑行"},{en:"Landscape photography (see Optics)",zh:"风光摄影（见光影）"}],Ay=["HUMANLAYA","FINTOPIA","BYTEDANCE","PWC","PWC INT.","NUS"];function Cy(){const e=ie();return i.jsxs("section",{id:"experience",className:"relative mx-auto mt-12 max-w-content px-6 md:mt-16",children:[i.jsx(Si,{kind:"staircase",className:"absolute -left-40 top-12 hidden w-32 text-foreground/30 min-[1450px]:block"}),i.jsx(se,{children:i.jsx(Kr,{eyebrow:F.expEyebrow,title:F.experience,sub:F.experienceSub})}),i.jsx(se,{delay:60,children:i.jsx("div",{className:"mt-8",children:i.jsx(_y,{items:Xa.map((t,n)=>({label:Ay[n]??t.company.toUpperCase(),period:t.period})).reverse()})})}),i.jsx("div",{className:"mt-10 space-y-5",children:Xa.map((t,n)=>i.jsx(se,{delay:Math.min(n,3)*60,children:i.jsxs("article",{className:"surface lift",children:[i.jsx(Kn,{left:`File: EXP-${String(n+1).padStart(2,"0")}`,right:`${t.period} · ${e(t.location)}`}),i.jsxs("div",{className:"p-7 md:p-9",children:[i.jsxs("div",{className:"flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between",children:[i.jsxs("h3",{className:"text-xl tracking-tight",children:[i.jsx("span",{className:"font-semibold",children:t.company}),i.jsxs("span",{className:"text-muted-foreground",children:[" · ",e(t.role)]})]}),i.jsx("p",{className:"shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-brand sm:text-right",children:"Rev A1"})]}),t.summary&&i.jsx("p",{className:"mt-4 leading-relaxed text-muted-foreground [text-wrap:pretty]",children:e(t.summary)}),i.jsx("div",{className:"mt-4 md:columns-2 md:gap-10",children:t.highlights.map((r,o)=>typeof r=="object"&&"items"in r?i.jsxs("section",{className:"mb-5 break-inside-avoid",children:[i.jsxs("h4",{className:"font-mono text-xs font-semibold tracking-[0.08em] text-brand",children:[i.jsx("span",{className:"mr-1.5 opacity-60",children:"//"}),e(r.title)]}),i.jsx("ul",{className:"mt-2.5 space-y-2.5",children:r.items.map((a,s)=>i.jsx("li",{className:"relative pl-5 text-[0.95rem] leading-relaxed text-foreground/85 before:absolute before:left-0 before:top-[0.62em] before:h-1.5 before:w-1.5 before:bg-brand/80",children:e(a)},s))})]},o):i.jsx("div",{className:"relative mb-2.5 max-w-3xl pl-5 text-[0.95rem] leading-relaxed text-foreground/85 before:absolute before:left-0 before:top-[0.62em] before:h-1.5 before:w-1.5 before:bg-brand/80",children:e(r)},o))}),i.jsx("div",{className:"mt-6 flex flex-wrap gap-2",children:t.tags.map(r=>i.jsx(il,{children:r},r))})]})]})},`${t.company}-${t.period}`))})]})}function Ey(){const e=ie(),{lang:t}=ki();return i.jsxs("section",{id:"education",className:"mx-auto mt-12 max-w-content px-6 md:mt-16",children:[i.jsx(se,{children:i.jsx(Kr,{eyebrow:F.eduEyebrow,title:F.education})}),i.jsx("div",{className:"mt-12 space-y-5",children:mh.map((n,r)=>i.jsx(se,{children:i.jsxs("article",{className:"surface",children:[i.jsx(Kn,{left:`File: EDU-${String(r+1).padStart(2,"0")}`,right:`${n.period} · ${e(n.location)}`}),i.jsxs("div",{className:"p-7 md:p-9",children:[i.jsx("h3",{className:"text-xl font-semibold tracking-tight",children:e(n.school)}),i.jsx("p",{className:"mt-1.5 text-muted-foreground",children:e(n.degree)}),i.jsx("div",{className:"mt-4 grid gap-x-10 gap-y-2.5 md:grid-cols-2",children:[n.details.slice(0,Math.ceil(n.details.length/2)),n.details.slice(Math.ceil(n.details.length/2))].map((o,a)=>i.jsx("ul",{className:"space-y-2.5",children:o.map((s,l)=>i.jsx("li",{className:"relative pl-5 text-[0.95rem] leading-relaxed text-foreground/80 before:absolute before:left-0 before:top-[0.62em] before:h-1.5 before:w-1.5 before:bg-brand/80",children:e(s)},l))},a))})]})]})},r))}),i.jsx(se,{children:i.jsx("h2",{className:`mt-16 font-semibold ${t==="en"?"font-mono uppercase tracking-wide text-xl sm:text-2xl":"tracking-tight text-3xl sm:text-4xl"}`,children:e(F.skillsInterests)})}),i.jsxs("div",{className:"mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2",children:[Eo.map((n,r)=>i.jsx(se,{delay:r%2*60,children:i.jsxs("div",{className:"surface h-full p-7",children:[i.jsxs("h3",{className:"font-mono text-xs uppercase tracking-[0.18em] text-brand",children:[String(r+1).padStart(2,"0")," · ",e(n.label)]}),i.jsx("ul",{className:n.columns===2?"mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2":"mt-4 space-y-2",children:n.items.map((o,a)=>i.jsx("li",{className:"text-[0.95rem] text-foreground/85",children:e(o)},a))})]})},r)),i.jsx(se,{delay:Eo.length%2*60,children:i.jsxs("div",{className:"surface h-full p-7",children:[i.jsxs("h3",{className:"font-mono text-xs uppercase tracking-[0.18em] text-brand",children:[String(Eo.length+1).padStart(2,"0")," · ",e(F.beyondWork)]}),i.jsx("div",{className:"mt-4 flex flex-wrap gap-2",children:yh.map((n,r)=>i.jsx("span",{className:"chip",children:e(n)},r))})]})})]})]})}function Ty(){const e=ie(),t=new Date().getFullYear(),n=new Date(me.startDate),r=Math.floor((Date.now()-n.getTime())/864e5);return i.jsxs("footer",{className:"relative mx-auto mt-32 max-w-content px-6 pb-16 md:mt-40",children:[i.jsx(Si,{kind:"compass",className:"absolute -left-40 bottom-8 hidden w-24 text-foreground/30 min-[1450px]:block"}),i.jsx("div",{className:"hr-line"}),i.jsxs("div",{className:"flex flex-col items-start gap-8 pt-12 sm:flex-row sm:items-center sm:justify-between",children:[i.jsxs("div",{children:[i.jsx(_e,{to:"/",className:"text-lg font-semibold tracking-tight",children:"Levi Wang"}),i.jsx("p",{className:"mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground",children:e(me.bio)})]}),i.jsx(ph,{})]}),i.jsxs("div",{className:"mt-10 flex items-center justify-between gap-4",children:[i.jsxs("div",{className:"flex flex-col gap-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground sm:flex-row sm:items-center sm:gap-4",children:[i.jsxs("span",{children:["© ",t," Levi Wang"]}),i.jsx("span",{className:"hidden sm:inline opacity-40",children:"·"}),i.jsxs("span",{children:[e(F.runningFor)," ",r," ",e(F.days)]})]}),i.jsx(ti,{spin:!0,className:"h-10 w-10 shrink-0 text-brand/60"})]})]})}function My(){return i.jsxs("div",{"aria-hidden":!0,className:"pointer-events-none fixed inset-0 -z-10 overflow-hidden",children:[i.jsx("div",{className:"ref-grid tech-grid absolute inset-0"}),i.jsxs("svg",{className:"absolute -bottom-40 -right-40 h-[36rem] w-[36rem] text-foreground",viewBox:"0 0 600 600",fill:"none",children:[[280,220,160,100].map(e=>i.jsx("circle",{cx:"300",cy:"300",r:e,stroke:"currentColor",strokeOpacity:"0.08",strokeDasharray:"4 6"},e)),i.jsx("path",{d:"M20 300H580M300 20V580",stroke:"currentColor",strokeOpacity:"0.06"})]}),i.jsx("div",{className:"grain-overlay absolute inset-0 opacity-[0.035] dark:opacity-[0.05] mix-blend-overlay"})]})}function mo({n:e}){return i.jsx("div",{"aria-hidden":!0,className:"mx-auto mt-16 max-w-content px-6 md:mt-20",children:i.jsxs("div",{className:"flex items-center gap-4 text-muted-foreground/45",children:[i.jsxs("svg",{viewBox:"0 0 12 12",className:"h-3 w-3 shrink-0",fill:"none",stroke:"currentColor",strokeWidth:"0.8",children:[i.jsx("circle",{cx:"6",cy:"6",r:"4"}),i.jsx("path",{d:"M6 0.5V11.5M0.5 6H11.5"})]}),i.jsx("div",{className:"h-px flex-1 bg-line/60"}),i.jsxs("span",{className:"font-mono text-[9px] uppercase tracking-[0.22em]",children:["SHT. ",e]}),i.jsx("div",{className:"h-px flex-1 bg-line/60"}),i.jsxs("svg",{viewBox:"0 0 12 12",className:"h-3 w-3 shrink-0",fill:"none",stroke:"currentColor",strokeWidth:"0.8",children:[i.jsx("circle",{cx:"6",cy:"6",r:"4"}),i.jsx("path",{d:"M6 0.5V11.5M0.5 6H11.5"})]})]})})}function Iy(){const{pathname:e}=tn();return q.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[e]),null}const Ny=`<h1>Benchmark Difficulty Is a Measurable Property</h1>
<p>I build pipelines that synthesize document-grounded exam items for frontier models. Every team doing this work eventually gets the same two pieces of review feedback: the benchmark is too easy, and it is too templated. In my experience both complaints are usually accurate. The problem is what teams do about them.</p>
<h2>Why &quot;make it harder&quot; doesn't work</h2>
<p>The default response is to tell the authoring stage to &quot;be more difficult and less formulaic,&quot; regenerate, and ask the reviewer whether the new version feels better. This fails for three reasons.</p>
<p>First, authors respond to &quot;harder&quot; with surface complexity: longer prompts, more files, more jargon. That changes how a question looks to the reviewer who complained, while the solvable core stays the same. The reviewer signs off and the score doesn't move.</p>
<p>Second, the claim is unfalsifiable. If difficulty was never measured before the rework, &quot;we made it harder&quot; is just an assertion, and the next reviewer is free to feel otherwise.</p>
<p>Third, and this is the one almost nobody controls for: difficulty is always measured through a solver and a judge, and both of them drift. If anything about the measurement setup changes between the before and the after, the comparison is contaminated. On our calibration campaign, the contamination turned out to be larger than the treatment effect.</p>
<p>So we stopped arguing about feel and treated difficulty as a measurable property of the benchmark, with a target, an instrument, and error bars.</p>
<h2>An acceptance band and a closed loop</h2>
<p>The target: a fixed reference solver should land a mean score between <strong>0.5 and 0.7</strong>. Above 0.7 the benchmark stops discriminating at the frontier; capable models saturate it and score differences are mostly noise. Below 0.5 you are usually measuring mis-keyed items and impossible questions rather than ability. The exact band is debatable. The point is that the target is a number at all.</p>
<p>With a band, difficulty engineering becomes a closed loop:</p>
<ol>
<li><strong>Eval</strong>: score every pack with the fixed solver in an isolated harness.</li>
<li><strong>Diagnose</strong>: bucket packs by score; read the high scorers' transcripts to see why they were easy.</li>
<li><strong>Rework</strong>: apply named difficulty recipes (below) to the packs above the band.</li>
<li><strong>Re-eval</strong>: same solver, same harness, same judge. Repeat until the mean lands in the band.</li>
</ol>
<p>No step in the loop depends on anyone's impression of difficulty.</p>
<h2>Keeping the harness leak-proof</h2>
<p>The loop is only as good as its measurement, and the most common way the measurement goes wrong is leakage. A synthesis pipeline is full of answer-adjacent artifacts: the rubric, the reference answer, verification tests, provenance metadata. If any of them can reach the solver, you are measuring leakage instead of difficulty, and rework will chase numbers that were never real.</p>
<p>Instead of trying to scrub leaks out of an existing environment, we built the sandbox so that leaks have no path in:</p>
<pre><code class="language-python">def build_sandbox(pack):
    sb = fresh_dir()                       # new empty directory, every run
    for f in pack.input_files:             # only what a real candidate would get
        copy(f, sb / &quot;input&quot; / f.name)
    (sb / &quot;output&quot;).mkdir()                # an empty output dir, nothing else
    # rubric, reference answer, tests, provenance: never copied in
    assert inventory(sb) == expected_inventory(pack)
    return sb

def measure(pack, solver, judge):
    sb = build_sandbox(pack)
    solver.run(prompt=pack.instruction, cwd=sb)
    answer = read_dir(sb / &quot;output&quot;)
    return judge.score(answer, pack.rubric)   # same reward math as production
</code></pre>
<p>Two properties matter here. The sandbox is built by inclusion rather than exclusion, so there is no denylist to keep current and nothing to forget. And the harness re-implements the exact production reward math, so a calibration score and a delivery score mean the same thing: the number the campaign reports is the number the delivery-time eval will report.</p>
<h2>The control group</h2>
<p>Mid-campaign, the solver's effort setting changed. To find out what that change alone was worth, we kept a small control group of packs that were never reworked and scored them under both settings. The effort setting alone moved the control group's mean by <strong>+0.159</strong>.</p>
<p>That is larger than the effect of most rework. A team that reworks questions while also upgrading the solver, the harness, or the judge, and then reports that the rework made the benchmark harder, is most likely reporting the confound.</p>
<pre><code class="language-python"># A held-out set of untouched packs, scored under both effort settings.
control = load_packs(CONTROL_IDS)              # never reworked
effort_effect = mean(
    measure(p, solver_high, judge) - measure(p, solver_low, judge)
    for p in control
)                                              # measured: +0.159

# A difficulty claim has to subtract this out:
net_rework_effect = observed_delta - effort_effect
# Our round 1: net -0.139. The confound (+0.159) was larger
# than the treatment (-0.139) and pointed the other way.
</code></pre>
<p>With the confound isolated, round-one rework had a net effect of <strong>−0.139</strong>. Having both numbers on the table changed how the team talked about difficulty: nobody claimed &quot;harder&quot; anymore without saying relative to which solver configuration.</p>
<h2>The trajectory</h2>
<p>The benchmark under calibration was roughly 130 legal questions synthesized from real multi-document workspaces.</p>
<ul>
<li>First full measurement: mean <strong>0.783</strong>. Too easy.</li>
<li>Re-baselined under a stronger solver configuration: <strong>0.821</strong>. The questions hadn't changed; the solver configuration had.</li>
<li>After two rework rounds covering most of the benchmark: final mean <strong>0.648</strong>, median 0.693, std 0.226. Inside the band, so we closed the campaign.</li>
</ul>
<p>One thing in these numbers doesn't line up: the re-baseline moved the full set by far less than the control group's +0.159. We noticed, and we can't fully reconcile it. The full-set runs were operational snapshots from different points in a live campaign, and a small control group estimates drift with wide error bars. For the subtraction we still trust the controlled number, because it is the only measurement where a single variable changed. But the disagreement is worth stating rather than smoothing over; two measurements that disagree are at least something you can go and investigate.</p>
<p>The standard deviation is part of the result, not a caveat. A useful benchmark has a spread of difficulty, with a few packs near saturation, a few very hard, and most in between; a flat benchmark measures a single threshold instead of a curve. We shipped the score distribution alongside the mean, bucketed by band, so expert reviewers could spend their attention on the tails.</p>
<h2>What actually made questions harder (and what didn't)</h2>
<p>Reworked packs were tagged with the names of the recipes applied to them, so after re-eval we could compare recipes by measured effect instead of by how plausible they sounded.</p>
<table>
<thead>
<tr>
<th>Recipe</th>
<th>Measured effect</th>
<th>Notes</th>
</tr>
</thead>
<tbody>
<tr>
<td>Exhaustive regulatory-element coverage + precise consequence boundaries + restrained conclusions</td>
<td>Strongest</td>
<td>Discussed below</td>
</tr>
<tr>
<td>Deep cross-document chains with dependency cascades</td>
<td>Strong on rich-material packs (≥8 files)</td>
<td>Needs enough cross-document material to build on</td>
</tr>
<tr>
<td>Restraint traps alone</td>
<td>~None on careful models</td>
<td>Discussed below</td>
</tr>
</tbody>
</table>
<p>The strongest recipe makes three demands at once. Coverage: enumerate every applicable regulatory element, not just the obvious ones. Precision: state consequences with exact boundaries, including thresholds, scopes, and effective dates. Restraint: don't conclude past what the material supports. A model has to satisfy all three at the same time, and most models manage at most two.</p>
<p>The failure case was restraint traps alone: questions whose only trick is that some conclusions can't be confirmed from the material. On careful models they didn't discriminate at all. Our reading is that a careful model can escape by hedging everything; if it marks every conclusion as unconfirmable, the trap never triggers, and hedging costs nothing unless the rubric also pays for exhaustive, precise positive findings. Restraint only discriminates when it is in tension with coverage, which is why the strongest recipe bundles the two.</p>
<p>Structure also interacts with material: rich-material packs (≥8 files) respond best to deep-chain integration. A dependency cascade needs enough cross-document surface to build on; on thin packs the same recipe has nothing to work with.</p>
<h2>Two judge bugs the campaign surfaced</h2>
<p>A calibration campaign re-scores the same items again and again, which makes it an ongoing stress test of the judge. Two real bugs surfaced during ours, neither as a crash. One showed up as impossible numbers in the score data; the other was found by a deliberate adversarial audit.</p>
<p><strong>Fatal-zeroing legitimate citations.</strong> Items with 91–93% positive rubric hits were coming out at zero total. The judge's anti-leakage check saw the solver quoting the provided materials, which is what the assignment asks for, and classified the quotes as reference-answer leakage, triggering the fatal one-vote-veto rule. A near-perfect row-level profile plus a zero total is a contradiction, but you only see it if you look at row-level hits instead of totals. We confirmed the bug by re-running the suspect items through a model family not otherwise in the loop (Qwen) as a cross-check judge.</p>
<p><strong>Silently dropping the rubric DAG.</strong> Our rubrics are dependency graphs: an outcome row only counts if the process rows it depends on were hit, so a model can't score by guessing the final number. The judge harness had been silently dropping the <code>depends_on</code> field during parsing, so the gating never executed. Nothing crashed, and nothing looked impossible either; flat-rubric scores are plausible scores, and re-scoring alone would never have flagged them. This one came out of a separate adversarial self-verification pass, an audit in which every behavior we claimed for the system had to be demonstrated against the running code rather than assumed. &quot;Outcome rows are gated on process rows&quot; was one of the claims, and the attempt to demonstrate it produced the bug report.</p>
<p>Both fixes landed with regression tests, since bugs like these are easy to reintroduce later:</p>
<pre><code class="language-python">def test_citing_provided_material_is_not_leakage():
    # Quoting the input files is the assignment, not a leak.
    answer = answer_quoting(pack.input_files)
    assert judge.leak_verdict(answer, pack) == &quot;clean&quot;

def test_high_positive_profile_cannot_silently_fatal_zero():
    # 90%+ positive hits plus a fatal zero is contradictory:
    # require arbitration with a written justification.
    verdict = judge.score(strong_answer, pack.rubric)
    if verdict.positive_hit_rate &gt; 0.9:
        assert verdict.fatal_zeroed is False or verdict.arbitration_note

def test_depends_on_survives_the_round_trip():
    rubric = rubric_with(process=[&quot;p1&quot;], outcome=[row(&quot;o1&quot;, depends_on=[&quot;p1&quot;])])
    parsed = judge.load_rubric(serialize(rubric))
    assert parsed[&quot;o1&quot;].depends_on == [&quot;p1&quot;]   # this field was dropped once

def test_outcome_row_gated_by_missed_dependency():
    verdict = judge.score(right_number_wrong_reasoning, rubric)
    assert not verdict[&quot;p1&quot;].hit and not verdict[&quot;o1&quot;].hit
</code></pre>
<p>The general lesson: in an LLM-judged eval, the judge is part of the system under test. A difficulty campaign that doesn't audit its judge is measuring with an instrument nobody has calibrated.</p>
<h2>Treat difficulty like latency</h2>
<p>No engineering team would accept &quot;the service feels slow&quot; answered by &quot;we made it feel faster.&quot; Latency gets a target (a p99 threshold), a load harness, a control for environmental drift, and regression tests. Benchmark difficulty deserves the same machinery:</p>
<ul>
<li>a <strong>target band</strong>: solver mean 0.5–0.7, agreed before rework starts;</li>
<li>a <strong>leak-proof harness</strong>: trustworthy by construction, not by cleanup;</li>
<li>a <strong>control group</strong>: because the measurement setup drifts, in our case by +0.159, sometimes more than the rework itself (−0.139);</li>
<li><strong>regression tests on the judge</strong>: because instrument bugs don't crash, they mismeasure.</li>
</ul>
<p>&quot;Harder&quot; is a claim about a measurement. Without a control group, there is no way to separate the rework effect from drift, and the claim doesn't hold up.</p>
`,Oy=`<h1>基准难度是一个可测量的属性</h1>
<p>我的工作是搭建合成流水线，把真实文档变成给前沿模型做的考题。做这类工作的团队，迟早都会收到同样的两条评审意见：太简单，太模板化。按我的经验，这两条意见通常没说错，问题出在收到意见之后的做法上。</p>
<h2>为什么“出难一点”行不通</h2>
<p>最常见的应对是凭感觉返修：给出题环节加一句“更难一些、别太套路”，重新生成，然后问评审感觉好点没有。这个做法有三个问题。</p>
<p>第一，出题者对“更难”的响应往往是表面复杂度：更长的题面、更多的文件、更多的术语。题目在提意见那个人眼里的观感变了，可解的内核没变。评审签了字，分数一点没动。</p>
<p>第二，这种主张无法证伪。返修之前从来没测过难度，“我们把它改难了”就只是一句断言，下一个评审完全可以有相反的感觉。</p>
<p>第三，也是几乎没人控制的一点：难度永远是通过一个求解模型和一个裁判测出来的，而这两样都会漂移。如果返修前后测量环境变了，比较就被污染了。在我们这轮校准里，污染比返修本身的效应还大。</p>
<p>所以我们不再争论感觉，把难度当成基准的一个可测属性来处理：有目标值，有测量工具，有误差范围。</p>
<h2>验收区间和闭环</h2>
<p>目标：固定一个参照求解模型，它在整套基准上的均分应落在 <strong>0.5 到 0.7</strong> 之间。高于 0.7，基准在前沿模型上失去区分度，强模型接近满分，分差基本是噪声。低于 0.5，测到的多半是答案标错的题和根本做不出来的题，而不是能力差异。区间的具体位置可以讨论，但目标必须是一个数字，这才是重点。</p>
<p>有了区间，难度工程就变成一个闭环：</p>
<ol>
<li><strong>评测</strong>：固定求解模型在隔离的评测环境（harness）里给每个题包打分。</li>
<li><strong>诊断</strong>：按分数分桶，读高分题包的解题过程，弄清它们为什么容易。</li>
<li><strong>返修</strong>：对区间上方的题包套用有名字的加难配方（见下文）。</li>
<li><strong>重评</strong>：同一求解模型、同一环境、同一裁判，循环到均分进区间为止。</li>
</ol>
<p>循环里没有任何一步依赖任何人对难度的主观印象。</p>
<h2>防泄漏的评测环境</h2>
<p>闭环的质量取决于测量本身，而测量最常见的失效方式是泄漏。合成流水线里到处都是和答案相邻的产物：rubric、参考答案、校验测试、溯源元数据。只要其中任何一样能被求解模型看到，测出来的就是泄漏而不是难度，返修修的就是一批本来就不真实的数字。</p>
<p>我们没有在现成的评测环境里做泄漏清理，而是把沙箱造成泄漏进不来的结构：</p>
<pre><code class="language-python">def build_sandbox(pack):
    sb = fresh_dir()                       # 每次运行都是全新的空目录
    for f in pack.input_files:             # 只放真实考生会拿到的东西
        copy(f, sb / &quot;input&quot; / f.name)
    (sb / &quot;output&quot;).mkdir()                # 一个空的输出目录，没有别的
    # rubric、参考答案、测试、溯源元数据：从不拷入
    assert inventory(sb) == expected_inventory(pack)
    return sb

def measure(pack, solver, judge):
    sb = build_sandbox(pack)
    solver.run(prompt=pack.instruction, cwd=sb)
    answer = read_dir(sb / &quot;output&quot;)
    return judge.score(answer, pack.rubric)   # 和生产完全一致的打分逻辑
</code></pre>
<p>这里有两个关键性质。一是沙箱靠白名单构造，只拷入允许的文件，而不是靠黑名单排除，所以没有需要维护的排除清单，也就没有会被遗漏的条目。二是 harness 复用了和生产完全一致的打分逻辑，校准分和交付分是同一个口径：校准报出来的数字，就是交付评测会报出来的数字。</p>
<h2>对照组</h2>
<p>校准进行到一半，求解模型的推理档位变了。为了知道这一件事单独值多少分，我们留了一小组从未返修过的题包做对照，在两个档位下各测一遍。仅档位这一项变化，就让对照组的均分上升了 <strong>+0.159</strong>。</p>
<p>这个数比大多数返修的效应都大。如果一个团队一边返修题目，一边升级求解模型、评测环境或裁判，然后汇报说返修让基准变难了，那它汇报的很可能就是这个混淆变量。</p>
<pre><code class="language-python"># 一组留出的、从未返修的题包，在两个求解档位下分别打分。
control = load_packs(CONTROL_IDS)              # 从未返修
effort_effect = mean(
    measure(p, solver_high, judge) - measure(p, solver_low, judge)
    for p in control
)                                              # 实测：+0.159

# 难度主张必须先扣掉这一项：
net_rework_effect = observed_delta - effort_effect
# 我们的第一轮：净效应 -0.139。混淆变量（+0.159）比处理效应
# （-0.139）更大，方向还相反。
</code></pre>
<p>把混淆变量剥离之后，第一轮返修的净效应是 <strong>−0.139</strong>。这两个数摆出来之后，团队讨论的方式变了：再没有人脱离具体的求解配置去说“更难”。</p>
<h2>完整轨迹</h2>
<p>被校准的基准是约 130 道法律题，从真实的多文档工作区合成。</p>
<ul>
<li>第一次全量测量：均分 <strong>0.783</strong>，太容易。</li>
<li>换更强的求解配置重新定基线：<strong>0.821</strong>。题目没变，变的是求解配置。</li>
<li>两轮返修覆盖大部分题包之后：最终均分 <strong>0.648</strong>，中位数 0.693，标准差 0.226。进了区间，校准收尾。</li>
</ul>
<p>这些数字里有一处对不上：重定基线对全量集的推动，远小于对照组测到的 +0.159。我们注意到了，也没能完全解释。两次全量测量是校准进行中不同时间点的运行快照，而小对照组对漂移的估计本身误差就很宽。做减法的时候我们仍然用受控的那个数，因为只有它是在单变量变化下测出来的。但这个矛盾值得写出来而不是抹掉：两个互相矛盾的测量，至少是一个可以往下查的问题。</p>
<p>标准差是结果的一部分，不是需要解释掉的瑕疵。有用的基准应该有难度的分布：少数题包接近满分，少数很难，大多数在中间。难度平坦的基准只能测出一个阈值，测不出曲线。我们把按分带分桶的分数分布和均分一起交付，让专家评审把精力放在两端。</p>
<h2>什么真的让题变难了（什么没有）</h2>
<p>返修过的题包都记录了所用配方的名字，重评之后就可以按实测效果比较配方，而不是按听起来是否高明。</p>
<table>
<thead>
<tr>
<th>配方</th>
<th>实测效果</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>法规要素穷尽覆盖 + 后果精确边界 + 克制结论</td>
<td>最强</td>
<td>见下文</td>
</tr>
<tr>
<td>深跨文档链 + 依赖级联</td>
<td>在富材料包（≥8 个文件）上效果强</td>
<td>需要足够的跨文档材料</td>
</tr>
<tr>
<td>单纯的克制陷阱</td>
<td>对谨慎模型几乎无效</td>
<td>见下文</td>
</tr>
</tbody>
</table>
<p>效果最强的配方同时提出三个要求。覆盖：把每一个适用的法规要素都列出来，而不只是最显眼的那几个。精确：后果要给出明确边界，包括阈值、适用范围、生效日期。克制：材料支撑不了的结论不能下。模型要同时满足这三条，多数模型最多做到两条。</p>
<p>失败的是单纯的克制陷阱：整道题唯一的考点就是有些结论无法从材料确认。这种题在谨慎的模型面前完全没有区分度。我们的解释是，谨慎的模型可以靠全面对冲绕过去：把每个结论都标成无法确认，陷阱就不会触发，而对冲没有代价，除非 rubric 同时为穷尽而精确的正向结论给分。克制只有在和覆盖形成张力时才有区分度，这也是最强配方把它们绑在一起的原因。</p>
<p>结构还和材料量有关：富材料包（≥8 个文件）对深链整合的响应最好。依赖级联需要足够的跨文档材料才搭得起来，材料薄的题包上同一个配方没有施展空间。</p>
<h2>校准中发现的两个裁判 bug</h2>
<p>校准会把同一批题反复打分，等于对裁判做持续的压力测试。这个过程中发现了两个真实的 bug，都不是以崩溃的形式出现的。一个表现为分数数据里出现不可能的数字，另一个是在一次刻意安排的对抗式审计里发现的。</p>
<p><strong>把正当引用误判成泄漏。</strong> 正向 rubric 命中率 91–93% 的题，总分却是零。裁判的防泄漏检查看到求解模型在引用给定材料（这正是题目的要求），把这些引用判成了参考答案泄漏，触发了一票否决。行级命中接近满分而总分为零，这是个矛盾，但只看总分是看不到的，必须看行级命中。我们把可疑的题目交给一个不在评测环节里的模型族（Qwen）做交叉裁判，确认了这个 bug。</p>
<p><strong>静默丢弃 rubric 的依赖图。</strong> 我们的 rubric 是依赖图：结果行只有在它依赖的过程行命中时才计分，模型没法靠猜中最终数字得分。裁判 harness 在解析时一直在静默丢弃 <code>depends_on</code> 字段，整个门控从来没有执行过。没有任何东西崩溃，也没有任何数字显得不可能：平铺 rubric 打出来的分数看上去完全正常，单靠反复打分永远发现不了。这个 bug 是在另一次对抗式自查里发现的。那次审计的要求是，我们对系统声称的每一条行为，都要在运行中的代码上演示出来，而不是默认成立。“结果行由过程行门控”正是其中一条声称，演示它的过程直接变成了 bug 报告。</p>
<p>两个修复都带着回归测试落地，因为这类 bug 修过一次之后很容易再被引入：</p>
<pre><code class="language-python">def test_citing_provided_material_is_not_leakage():
    # 引用输入文件是题目要求，不是泄漏。
    answer = answer_quoting(pack.input_files)
    assert judge.leak_verdict(answer, pack) == &quot;clean&quot;

def test_high_positive_profile_cannot_silently_fatal_zero():
    # 90% 以上的正向命中加一票归零是矛盾的：
    # 必须走带书面理由的仲裁，不允许静默归零。
    verdict = judge.score(strong_answer, pack.rubric)
    if verdict.positive_hit_rate &gt; 0.9:
        assert verdict.fatal_zeroed is False or verdict.arbitration_note

def test_depends_on_survives_the_round_trip():
    rubric = rubric_with(process=[&quot;p1&quot;], outcome=[row(&quot;o1&quot;, depends_on=[&quot;p1&quot;])])
    parsed = judge.load_rubric(serialize(rubric))
    assert parsed[&quot;o1&quot;].depends_on == [&quot;p1&quot;]   # 这个字段曾被静默丢弃

def test_outcome_row_gated_by_missed_dependency():
    verdict = judge.score(right_number_wrong_reasoning, rubric)
    assert not verdict[&quot;p1&quot;].hit and not verdict[&quot;o1&quot;].hit
</code></pre>
<p>通用的教训：在用 LLM 判分的评测里，裁判本身就是被测系统的一部分。难度校准如果不审计自己的裁判，用的就是一台没有人校准过的仪器。</p>
<h2>像对待时延一样对待难度</h2>
<p>没有哪个工程团队会接受用“我们让它感觉快了”来回应“服务感觉很慢”。时延有目标值（p99 低于多少毫秒）、有压测环境、有对环境漂移的控制、有回归测试。基准难度需要同样一套东西：</p>
<ul>
<li><strong>目标区间</strong>：求解均分 0.5–0.7，在返修开始前定好；</li>
<li><strong>防泄漏的评测环境</strong>：靠构造保证，不靠事后清理；</li>
<li><strong>对照组</strong>：因为测量环境的漂移（我们这里是 +0.159）有时比返修本身的效应（−0.139）还大；</li>
<li><strong>裁判的回归测试</strong>：因为测量工具的 bug 不会崩溃，只会测错。</li>
</ul>
<p>“更难”是一个关于测量的主张。没有对照组，就分不清返修效应和漂移，这个主张也就立不住。</p>
`,Ly=`<h1>Your Judge Is Part of the System Under Test</h1>
<p>Every LLM-judged eval produces its scores with two models: the one being tested and the one doing the grading, plus the harness wiring them together. The number that comes out is a joint product of all three. Unless you actively separate them, judge defects are indistinguishable from model defects. A zero can mean the model failed or the judge misfired, and the score file looks the same in both cases.</p>
<p>I run LLM-judged evaluations for a living: a benchmark-synthesis pipeline with DAG-structured rubrics, a difficulty-calibration pass on a hundred-plus-question legal benchmark, and multi-model deliveries for enterprise clients at hundreds of tasks per run. Within a few weeks, four separate incidents that looked like model behavior turned out to be the judge or its harness. None of them crashed anything, and all of them produced plausible numbers. Here are the mechanisms and the fixes.</p>
<h2>Incident 1: false zeros from the leakage hurdle</h2>
<p>Our rubrics are DAGs rather than flat lists: positive rows carry weight, negative rows deduct, and weight-0 <strong>hurdle</strong> rows act as a one-vote veto for disqualifying behavior. The canonical hurdle is answer leakage: a deliverable that reproduces the reference answer instead of doing the work gets zero, no matter what else it got right.</p>
<p>During the calibration pass, a batch of items came back at exactly zero. The row-level scorecards contradicted that: those items had 91–93% of their positive rubric rows hit. The judge had agreed, row by row, that the work was nearly complete, then fired the leakage hurdle and vetoed the whole item. Its stated reason was that the deliverable &quot;reproduced reference content.&quot; What it was actually looking at was in-material citation: a legal memo quoting the statutes and case files it was handed, which is exactly what the genre requires.</p>
<p>Nothing crashed; the distribution was wrong. A cluster at exactly zero sitting under near-complete scorecards is a contradiction worth investigating. Re-running two of the zeroed items through an off-family judge model (Qwen, which I keep around for second opinions) settled it: the second judge read the same passages as citation that the first read as leakage.</p>
<p>The fix has two parts. First, an arbitration clause for fatal vetoes: a one-vote veto is not allowed to stand on its own when it contradicts the rest of the scorecard.</p>
<pre><code class="language-python">def apply_hurdles(rows, hurdle_hits):
    positives = positive_hit_rate(rows)
    for h in hurdle_hits:
        # A veto that contradicts a near-complete scorecard
        # must pass arbitration before it can zero the item.
        if positives &gt;= 0.85:
            verdict = arbitrate(
                claim=h.reason,
                required_evidence=&quot;verbatim quote of the leaked answer text&quot;,
                distinguish=&quot;citing provided source material is not leakage&quot;,
            )
            if verdict != &quot;confirmed_leak&quot;:
                continue          # false kill: veto rejected, score stands
        return 0.0                # confirmed: the veto applies
    return weighted_score(rows)
</code></pre>
<p>Second, regression tests in both directions: a fixture with a genuine verbatim answer leak must still be zeroed, and a citation-heavy legitimate deliverable must survive. A patch that fixes false kills by quietly weakening the veto just trades one bug for another.</p>
<h2>Incident 2: silent schema loss</h2>
<p>The rubric schema has a <code>depends_on</code> field: an outcome row only counts if the process rows it depends on were also hit. That field is what stops &quot;guessed the final number&quot; from scoring; it is the whole point of process/outcome typing.</p>
<p>The judge-side prompt assembly never rendered that field, and the gap went unnoticed for days. Nothing crashed, because <code>depends_on</code> is data, not code: the judge never saw it, scored every rubric as a flat list, and returned well-formed, plausible numbers. Silent schema loss has no visible failure signature at all.</p>
<p>What caught it was a self-verification checklist I run before adopting any judging path. One item on it reads: for every field in the rubric schema, prove with an observable output difference that the judge actually consumes it. &quot;The code passes it in&quot; does not count as proof. <code>depends_on</code> failed that check.</p>
<p>The durable fix is a <strong>schema round-trip test</strong>: a canary rubric in which the field under test deterministically flips the score.</p>
<pre><code class="language-python">def test_depends_on_reaches_the_judge():
    # Canary: the outcome row is satisfied,
    # but the process row it depends on is not.
    rubric = make_rubric(
        process=[row(&quot;locate the controlling clause&quot;, satisfied=False)],
        outcome=[row(&quot;state the conclusion&quot;, satisfied=True,
                     depends_on=[&quot;locate the controlling clause&quot;])],
    )
    scored = judge(canary_deliverable, rubric)
    # With dependency gating the outcome must not count.
    # If it counts, the judge never saw depends_on.
    assert scored.outcome_hits == 0, &quot;judge is ignoring depends_on&quot;
</code></pre>
<p>One canary per schema field belongs in CI. A prompt template is not a parser and it fails open by default, so any field the judge can silently ignore will eventually get ignored.</p>
<h2>Incident 3: hallucinated evidence</h2>
<p>A judge scoring a rubric row is supposed to justify the score with evidence from the deliverable. On a delivery of a few hundred tasks across three models for an enterprise client, with GPT-5.5 judging every rubric row across roughly 70 concurrent cloud sandboxes, spot checks found scored rows whose cited evidence did not exist in the deliverable. The judge quoted paragraphs the model never wrote. Sometimes that manufactured credit, sometimes deductions; either way the score had no basis in the artifact, with a confident-sounding justification attached.</p>
<p>The countermeasure was a line-by-line re-check pass: 16 workers whose only job was to take every scored row and re-verify the cited evidence against the actual artifact on disk. Rows that failed re-check went into a rejudge pipeline. One rule mattered as much as the machinery: rejudging is triggered by evidence failure, never by an unwelcome score. If low scores get retried and high scores don't, the re-check pass itself introduces a systematic bias.</p>
<p>The strongest form of this defense is a delivery invariant: <strong>reference answers must score full marks.</strong> If the gold answer can't max its own rubric, then the rubric, the answer, or the judge is wrong, and you want to know which before the client does. On a separate legal delivery, I oracle-judged every reference answer with production-equivalent judges, then ran a 207-worker minimal-change repair pipeline (11.3M tokens, 83 minutes end to end), with every deduction classified into a four-way taxonomy before anyone touched anything:</p>
<table>
<thead>
<tr>
<th>Deduction type</th>
<th>What it means</th>
<th>What gets repaired</th>
</tr>
</thead>
<tbody>
<tr>
<td>Direct miss</td>
<td>the answer genuinely lacks required content</td>
<td>the reference answer</td>
</tr>
<tr>
<td>Dependency cascade</td>
<td>a satisfied outcome row was gated off by a missed process row</td>
<td>the upstream dependency, never the satisfied row</td>
</tr>
<tr>
<td>Negative hit</td>
<td>the answer tripped a penalty row</td>
<td>the specific offending passage</td>
</tr>
<tr>
<td>Hurdle</td>
<td>a weight-0 fatal veto fired</td>
<td>arbitration first; this is where false kills live</td>
</tr>
</tbody>
</table>
<p>&quot;Minimal-change&quot; is the important constraint. The failure mode it guards against is rewriting the answer until the judge is happy, which is Goodharting your own gold data. The last few holdouts resisted repair entirely, and the root cause was in neither the answers nor the judge: contradictory injected noise files, distractor documents planted for difficulty that flatly contradicted the gold answer. The fix was paragraph-level editing, removing the contradictory designations inside a long procedural document without disturbing its structure, so the difficulty was preserved and the contradiction was gone.</p>
<h2>Incident 4: harness coupling</h2>
<p>A re-evaluation against a quantized build of a frontier model. Before spending any compute, an exhaustive audit of all ~300 packs, with no sampling, found more than a quarter of them unrunnable: Docker images that never install the judge CLI, so scoring fails silently, and a pinned dependency version that doesn't exist on the package index, so builds fail loudly. Plus one global judge-backend misconfiguration. Run naively, every one of those would have been booked as model failure.</p>
<p>Then the subtle one. The quantized model made zero tool calls on tasks the full-precision build handled fine. The obvious conclusion is that quantization broke tool calling. Before writing that down, I ran an isolated ablation matrix: one probe task, one variable per axis.</p>
<pre><code class="language-python">MATRIX = itertools.product(
    [&quot;full_precision&quot;, &quot;quantized&quot;],      # model build
    [&quot;harness_A&quot;, &quot;harness_B&quot;],           # judge/driver harness
    [&quot;json_schema&quot;, &quot;plain_text&quot;],        # response-format config
)
for build, harness, fmt in MATRIX:
    r = run_probe_task(build, harness, fmt)
    log(build, harness, fmt, tool_calls=r.tool_calls)

# Result: tool_calls == 0 only in the (quantized, json_schema) cells,
# under either harness label. This is an interaction effect. The
# variable we control is the harness config, not the model.
</code></pre>
<p>The quantized model stopped making tool calls whenever a <code>json_schema</code> response format was present in the request, and the judge harness was injecting that format. &quot;The model is broken&quot; and &quot;the harness is broken&quot; are both inaccurate; the defect is in the interaction. The ship decision followed from the ablation: reconfigure the judge harness to drop the <code>json_schema</code> response format, keep the model, and report the incompatibility as a finding instead of a score.</p>
<h2>Reading the symptoms</h2>
<p>The four incidents share a structure: a score anomaly that has both a model explanation and a judge explanation, and nothing in the score file to tell them apart. What separates them is the same move each time: hold one component fixed and vary the other. Rejudge the same deliverable with an off-family judge; feed the same judge a canary rubric; check the same scored row against the raw artifact; run the same model under a different harness. Each is a one-variable experiment, and each is cheap compared to shipping the wrong conclusion.</p>
<table>
<thead>
<tr>
<th>Symptom in the scores</th>
<th>Model explanation</th>
<th>Judge/harness explanation</th>
<th>Separator experiment</th>
</tr>
</thead>
<tbody>
<tr>
<td>Spike at exactly zero under strong row-level hits</td>
<td>catastrophic failures</td>
<td>fatal veto misfiring</td>
<td>false-kill audit + off-family rejudge</td>
</tr>
<tr>
<td>Dependency-heavy and flat rubrics score alike</td>
<td>models ignore process</td>
<td>schema field silently dropped</td>
<td>round-trip canary</td>
</tr>
<tr>
<td>Evidence quotes you can't locate</td>
<td>model wrote it elsewhere</td>
<td>judge hallucination</td>
<td>line-by-line re-check vs. artifact</td>
</tr>
<tr>
<td>A capability vanishes on one build</td>
<td>quantization regression</td>
<td>request-format interaction</td>
<td>isolated ablation matrix</td>
</tr>
</tbody>
</table>
<p>All four judge-side defects fail open. A dropped schema field doesn't raise an error; it flattens the rubric. A hallucinated quote doesn't error out; it fills the evidence field. A misapplied veto doesn't warn; it writes a zero. A harness incompatibility doesn't crash; it produces a model that appears to have chosen not to use tools. The judge stack has no ground truth of its own, so nothing inside it can report that it is wrong. The separation has to come from outside.</p>
<h2>Treat judge changes like deployments</h2>
<p>Every fix above added an edit to the judge: an arbitration clause, a re-rendered schema field, an evidence-verification pass, a harness reconfiguration. That creates the next problem. Judge prompts and configs now change as often as pipeline code, and every edit can quietly reintroduce any of the four defects. A judge edit that ships unversioned and untested will eventually cause another incident like the schema loss above.</p>
<p>So the judge needs a regression suite of its own, and a judge version bump should run it before touching production scores:</p>
<ul>
<li>a genuine-leak fixture that must still score zero, so the veto keeps catching real leaks;</li>
<li>a citation-heavy legitimate fixture that must survive, so the veto doesn't over-fire;</li>
<li>one round-trip canary per schema field, so a dropped field fails a test instead of failing silently;</li>
<li>a frozen set of (deliverable, rubric, expected scorecard) triples, so judge drift shows up as a concrete diff;</li>
<li>and the standing oracle: reference answers re-judged at full marks on every judge version.</li>
</ul>
<p>That last one is the cheapest continuous judge monitor I know of. The reference answers never change; the judge does. If a judge version moves their scores, that movement is a judge finding by construction, because there is no model in the loop to argue about.</p>
<h2>The judge-reliability checklist</h2>
<p>Four incidents, four standing checks. I no longer sign off on an LLM-judged eval without them:</p>
<ol>
<li><strong>False-kill audit.</strong> Pull every fatal-zeroed item and cross it against its positive hit rate. High positives plus a fatal veto goes to arbitration, and the veto only survives with verbatim evidence.</li>
<li><strong>Schema round-trip test.</strong> One canary per rubric schema field, where the field deterministically flips the score. In CI, not in a doc.</li>
<li><strong>Hallucination re-check.</strong> Re-verify scored rows' cited evidence against the actual artifact, sampled continuously and exhaustively before delivery. Oracle-judge every reference answer: full marks, or a root cause.</li>
<li><strong>Harness ablation.</strong> Before attributing any behavior change to the model, hold the model fixed and vary the harness. Without that matrix, &quot;the model regressed&quot; is a guess.</li>
</ol>
<h2>Takeaway</h2>
<p>A benchmark score is a measurement, and in an LLM-judged eval the instrument is itself a model, wrapped in a harness, reading a schema. All four defects above returned well-formed, plausible numbers, and none of them crashed. If you only test the model, every judge bug you have will eventually get published as a model finding, so the judge needs to be in the test scope along with the model.</p>
`,Fy=`<h1>裁判也是被测系统的一部分</h1>
<p>每个用 LLM 判分的评测，分数都来自两个模型：被测的那个和打分的那个，再加上把两者接在一起的 harness。最终落盘的数字是三者的联合产物。所以除非主动做分离，裁判缺陷和模型缺陷在分数上是区分不开的。一个零分，可能是模型没做出来，也可能是裁判判错了，score 文件里两种情况看起来完全一样。</p>
<p>跑 LLM 判分的评测是我的日常工作：一条带 DAG 结构 rubric 的评测题目合成流水线、一个百余题法律基准的难度校准项目、以及给企业客户做的单次数百题多模型交付评测。最近几周里有四起事故，起初看着都像模型的问题，最后都查到了裁判或它的 harness 头上。没有一起崩溃，每一起都产出了看起来合理的数字。下面记录每一起的机理和修法。</p>
<h2>案例一：泄漏 hurdle 误判出的零分</h2>
<p>我们的 rubric 是 DAG 而不是平铺列表：正向条目带权重，负向条目扣分，权重为 0 的 <strong>hurdle</strong> 条目对&quot;资格取消级&quot;的行为做一票否决。最典型的 hurdle 是答案泄漏：交付物直接照抄参考答案而不是自己完成任务，无论其它部分做得多好都应得零分。</p>
<p>难度校准期间，一批题回来的分数正好是零。逐行 scorecard 却和这个结论矛盾：这些题正向 rubric 条目的命中率有 91–93%。也就是说，裁判逐行确认了这份工作接近完成，然后触发泄漏 hurdle，把整题否决了。它给的理由是交付物&quot;复现了参考内容&quot;，但它实际看到的是对给定材料的引用：一份法律意见书引用它拿到的法条和案卷，这本来就是这类文书的要求。</p>
<p>这里没有任何报错，是分数分布不对。一批分数正好落在零上，底下压着接近满命中的 scorecard，这个矛盾值得查。把其中两道零分题交给一个异族裁判模型重判（Qwen，我专门留着做第二意见），结论就清楚了：同样的段落，第二个裁判认定是引用，第一个裁判认定是泄漏。</p>
<p>修复分两步。第一步，给一票否决加仲裁：当否决和 scorecard 的其余部分矛盾时，不允许它单独生效。</p>
<pre><code class="language-python">def apply_hurdles(rows, hurdle_hits):
    positives = positive_hit_rate(rows)
    for h in hurdle_hits:
        # 与近乎满命中的 scorecard 矛盾的否决，
        # 必须先通过仲裁才能把整题归零。
        if positives &gt;= 0.85:
            verdict = arbitrate(
                claim=h.reason,
                required_evidence=&quot;被泄漏答案文本的逐字引用&quot;,
                distinguish=&quot;引用题目提供的源材料不算泄漏&quot;,
            )
            if verdict != &quot;confirmed_leak&quot;:
                continue          # 误杀：否决被驳回，分数保留
        return 0.0                # 确认泄漏：否决生效
    return weighted_score(rows)
</code></pre>
<p>第二步，双向回归测试：一个真的逐字抄了答案的 fixture 必须仍然得零分；一个大量引用材料的正当交付物必须通过。如果补丁靠悄悄削弱否决来&quot;修复&quot;误杀，那只是用一个 bug 换了另一个 bug。</p>
<h2>案例二：schema 字段静默丢失</h2>
<p>rubric schema 里有个 <code>depends_on</code> 字段：结果类条目只有在它依赖的过程类条目也命中时才计分。这个字段就是为了挡住&quot;蒙对最终数字也得分&quot;，是过程/结果分型的核心。</p>
<p>裁判侧的 prompt 组装从来没有渲染过这个字段，这个问题持续了好几天才被发现。没有任何报错，因为 <code>depends_on</code> 是数据不是代码：裁判从没见过它，把每份 rubric 都当平铺列表来判，返回格式正确、数值合理的分数。schema 静默丢失没有任何可见的故障特征。</p>
<p>发现它的是我在采用任何判分链路之前都会过一遍的自验清单，其中一条是：对 rubric schema 的每个字段，用可观察的输出差异证明裁判确实用到了它。&quot;代码里传进去了&quot;不算证明。<code>depends_on</code> 没有通过这条检查。</p>
<p>长期修复是一个 <strong>schema 往返测试</strong>：构造一份金丝雀 rubric，让被测字段确定性地改变分数。</p>
<pre><code class="language-python">def test_depends_on_reaches_the_judge():
    # 金丝雀：结果条目被满足，
    # 但它依赖的过程条目没有被满足。
    rubric = make_rubric(
        process=[row(&quot;定位起支配作用的条款&quot;, satisfied=False)],
        outcome=[row(&quot;给出结论&quot;, satisfied=True,
                     depends_on=[&quot;定位起支配作用的条款&quot;])],
    )
    scored = judge(canary_deliverable, rubric)
    # 依赖门控生效时，结果条目不应计分。
    # 如果它计了分，说明裁判从没见过 depends_on。
    assert scored.outcome_hits == 0, &quot;裁判正在忽略 depends_on&quot;
</code></pre>
<p>每个 schema 字段都应该有一只金丝雀，放在 CI 里。prompt 模板不是 parser，它默认 fail-open，裁判能静默忽略的字段早晚会被忽略。</p>
<h2>案例三：引用不存在的证据</h2>
<p>裁判给 rubric 条目打分时，应当引用交付物里的证据来支撑分数。在一次给企业客户的交付评测里（数百道题、三个模型，GPT-5.5 逐条 rubric 判分，约 70 个云沙箱并发），抽查发现一些已打分条目引用的证据在交付物里并不存在。裁判引用了模型从没写过的段落。有时因此多给了分，有时多扣了分，无论哪种，分数都和实际产物对不上，还附着一段看起来很确定的论证。</p>
<p>对策很直接：一个逐行复核环节，16 个 worker，唯一的工作是把每条已打分条目引用的证据拿去和磁盘上的真实产物核对。没通过复核的条目进入重判流水线。有一条纪律和机制本身同样重要：重判只由证据核验失败触发，绝不由&quot;分数不好看&quot;触发。如果只重试低分不重试高分，复核环节本身就会引入系统性偏差。</p>
<p>这类防御最强的形式是一条交付不变量：<strong>参考答案必须拿满分。</strong> 如果金标准答案在自己的 rubric 上都拿不了满分，那 rubric、答案、裁判三者至少有一个是错的，而且你需要赶在客户之前弄清楚是哪个。在另一批法律交付里，我用与生产等价的裁判对全部参考答案做了 oracle 判分，然后跑了一条 207 个 worker 的最小改动修复流水线（1,130 万 token，端到端 83 分钟），每处扣分在动手之前先归入四类：</p>
<table>
<thead>
<tr>
<th>扣分类型</th>
<th>含义</th>
<th>修复对象</th>
</tr>
</thead>
<tbody>
<tr>
<td>直接缺失</td>
<td>答案确实缺少必需内容</td>
<td>参考答案本身</td>
</tr>
<tr>
<td>依赖级联</td>
<td>已满足的结果条目被未命中的过程条目门控掉</td>
<td>上游依赖，绝不动那条已满足的条目</td>
</tr>
<tr>
<td>负向命中</td>
<td>答案踩中了扣分条目</td>
<td>具体的问题段落</td>
</tr>
<tr>
<td>Hurdle</td>
<td>权重为 0 的一票否决被触发</td>
<td>先仲裁，误杀多出在这里</td>
</tr>
</tbody>
</table>
<p>&quot;最小改动&quot;是这里的关键约束。它防的失效模式是把答案改写到裁判满意为止，也就是对自己的金标准数据做 Goodhart 优化。最后几个疑难项完全修不动，根因既不在答案也不在裁判：是互相矛盾的注入噪声文件，为了制造难度埋进去的干扰文档和金标准答案直接冲突。修法是段落级的修改，在一份很长的程序性文书内部删掉矛盾的表述，同时不动它的结构，这样难度保留下来，矛盾被去掉。</p>
<h2>案例四：harness 耦合</h2>
<p>一次针对某前沿模型量化版本的重评。在花任何算力之前，先对全部约 300 个任务包做了穷举审计，不抽样，结果查出超过四分之一不可运行：有的 Docker 镜像没装 judge CLI，判分会静默失败；有的锁定了包索引上不存在的依赖版本，构建会直接报错；另有一处全局的裁判后端配置错误。如果直接开跑，这些每一个都会被记成模型失败。</p>
<p>然后是隐蔽的那个。量化模型在全精度版本处理正常的任务上一次工具调用都没有。最顺手的结论是量化把工具调用搞坏了。在写下这个结论之前，我跑了一个隔离消融矩阵：一个探针任务，每根轴只变一个变量。</p>
<pre><code class="language-python">MATRIX = itertools.product(
    [&quot;full_precision&quot;, &quot;quantized&quot;],      # 模型版本
    [&quot;harness_A&quot;, &quot;harness_B&quot;],           # 裁判/驱动 harness
    [&quot;json_schema&quot;, &quot;plain_text&quot;],        # response format 配置
)
for build, harness, fmt in MATRIX:
    r = run_probe_task(build, harness, fmt)
    log(build, harness, fmt, tool_calls=r.tool_calls)

# 结果：只有 (quantized, json_schema) 的格子里 tool_calls == 0，
# 与 harness 标签无关。这是交互效应。我们能控制的变量
# 是 harness 配置，不是模型。
</code></pre>
<p>只要请求里带 <code>json_schema</code> 的 response format，量化模型就不再做任何工具调用，而这个 format 正是裁判 harness 注入的。&quot;模型坏了&quot;和&quot;harness 坏了&quot;都不准确，缺陷在两者的交互上。上线决策直接由消融结果给出：修改裁判 harness 配置，去掉 <code>json_schema</code> response format，保留模型，并把这处不兼容作为发现写进报告，而不是写成分数。</p>
<h2>读懂症状</h2>
<p>四个案例结构相同：一个分数异常，同时存在模型解释和裁判解释，而 score 文件里没有任何信息能区分二者。区分它们的每次都是同一个动作：固定一个组件，只变另一个。同一份交付物，换异族裁判；同一个裁判，喂金丝雀 rubric；同一条打分记录，对照原始产物；同一个模型，换 harness。每一个都是单变量实验，成本都远低于交付一个错误结论。</p>
<table>
<thead>
<tr>
<th>分数上的症状</th>
<th>模型解释</th>
<th>裁判/harness 解释</th>
<th>分离实验</th>
</tr>
</thead>
<tbody>
<tr>
<td>逐行命中很高却在零分处扎堆</td>
<td>灾难性失败</td>
<td>一票否决误触发</td>
<td>误杀审计 + 异族重判</td>
</tr>
<tr>
<td>重依赖 rubric 和平铺 rubric 得分无差</td>
<td>模型不管过程</td>
<td>schema 字段被静默丢弃</td>
<td>往返金丝雀</td>
</tr>
<tr>
<td>引用的证据找不到出处</td>
<td>模型写到别处了</td>
<td>裁判幻觉</td>
<td>对产物逐行复核</td>
</tr>
<tr>
<td>某项能力只在某个版本上消失</td>
<td>量化退化</td>
<td>request format 交互效应</td>
<td>隔离消融矩阵</td>
</tr>
</tbody>
</table>
<p>四个裁判侧缺陷有一个共性：全部 fail-open。schema 字段丢了不报错，rubric 被当成平铺列表；引用是幻觉也不报错，证据字段照样被填满；否决误触发没有告警，直接写下一个零；harness 不兼容不崩溃，产出的是一个看起来&quot;自己选择&quot;不用工具的模型。裁判栈内部没有自己的 ground truth，它没有任何机制能告诉你它错了，分离只能从外部做。</p>
<h2>把裁判变更当成上线来对待</h2>
<p>上面每个修复都改动了裁判：仲裁条款、重新渲染的 schema 字段、证据核验环节、harness 配置修正。这带来下一个问题：裁判的 prompt 和配置现在改得和流水线代码一样频繁，而每次改动都可能悄悄把四类缺陷中的任何一类带回来。不带版本、不带测试就上线的裁判改动，迟早会造成下一次类似 schema 丢失的事故。</p>
<p>所以裁判需要一套自己的回归套件，每次裁判版本升级都应先跑完它，再允许接触生产分数：</p>
<ul>
<li>一个真泄漏 fixture，必须仍然得零分，保证否决还能抓住真泄漏；</li>
<li>一个大量引用材料的正当 fixture，必须通过，保证否决不会误伤；</li>
<li>每个 schema 字段一只往返金丝雀，字段被丢弃时测试会失败，而不是静默通过；</li>
<li>一组冻结的（交付物、rubric、期望 scorecard）三元组，裁判漂移会以具体的 diff 出现；</li>
<li>以及常驻的 oracle：每个裁判版本都重判一遍参考答案，必须满分。</li>
</ul>
<p>最后这条是我知道的最便宜的持续裁判监控。参考答案从不变化，变的只有裁判。如果某个裁判版本让参考答案的分数动了，这个变动从构造上就只能是裁判问题，因为环路里根本没有模型。</p>
<h2>裁判可靠性检查清单</h2>
<p>四起事故对应四条常设检查，现在没有这些我不会在任何 LLM 判分的评测上签字：</p>
<ol>
<li><strong>误杀审计。</strong> 把每个被一票否决归零的题拉出来，对照它的正向命中率。高命中加致命否决一律送仲裁，否决必须拿出逐字证据才能维持。</li>
<li><strong>schema 往返测试。</strong> 每个 rubric schema 字段一只金丝雀，让字段确定性地改变分数。放在 CI 里，不是写在文档里。</li>
<li><strong>幻觉复核。</strong> 把已打分条目引用的证据和真实产物核对，平时持续抽样，交付前穷举。同时对每份参考答案做 oracle 判分：要么满分，要么查出根因。</li>
<li><strong>harness 消融。</strong> 把任何行为变化归因给模型之前，固定模型、只变 harness。跑不了这个矩阵，&quot;模型退化了&quot;就只是猜测。</li>
</ol>
<h2>结语</h2>
<p>benchmark 分数是一次测量，而在 LLM 判分的评测里，测量仪器本身就是一个模型，外面包着一层 harness，读着一份 schema。上面四个缺陷全都返回了格式正确、看起来合理的数字，没有一个崩溃。如果只测模型，手里的每个裁判 bug 最终都会变成一个对外发布的&quot;模型发现&quot;。裁判需要和模型一起纳入被测范围。</p>
`,Py=`<h1>The 51-Agent Code Review</h1>
<p>A teammate forked my benchmark-synthesis pipeline to specialize it for a new domain, and landed a 17-commit series on the fork. The commits were themed as hardening: fail-closed guards, stricter validation, defensive error handling. The merged diff touched 216 files. Some of that work was going to flow toward a client delivery, so I needed to know what was actually in it, not just what the commit messages said.</p>
<p>To be clear, I trusted my teammate's intent. The question was whether the code did what the commit messages claimed.</p>
<p>The honest problem with a 216-file diff is that no human reviews all of it. You read the first thirty files carefully, skim the next fifty, and then start pattern-matching on shapes. Past a certain size, the review degrades into an approval step. So I did what I now do for any merge with a high failure cost: adversarial verification at scale. I ran 51 agents over the diff, which took about 59 minutes of wall-clock time and produced one report.</p>
<h2>The architecture: finders propose, verifiers execute</h2>
<p>The design has two roles, and it only works if they stay strictly separated.</p>
<p>Six independent finders each review the same diff through a different lens. For an eval pipeline the lenses were roughly: error handling and fail-open paths; shared state and concurrency; eval-integrity surfaces (can any answer artifact reach the solver?); schema and contract drift between stages; silent behavior changes hiding in refactors; input handling at the trust boundary. Each finder reads the full diff through its one lens and emits candidate defects with a file, a line, and a claimed failure scenario. No finder sees another finder's output.</p>
<p>The six lenses produced a pool of 45 candidates. That's what the fan-out buys: no single reviewer holds six different failure framings in mind at once across 216 files.</p>
<p>The rule that makes the output trustworthy: every deduplicated candidate gets its own independent verifier (42 verifiers over the 45-candidate pool), each in a fresh context, given the claim and the location but none of the finder's reasoning. The verifier's job is not to judge whether the finding sounds right. It has to reproduce the defect by actually running something: a failing pytest, a real traceback, an observed wrong value. If it can't, the finding doesn't make the report.</p>
<pre><code class="language-python"># a representative lens set for this kind of pipeline
LENSES = [
    &quot;error handling / fail-open paths&quot;,
    &quot;shared state &amp; concurrency&quot;,
    &quot;eval-integrity: answer artifacts reaching the solver&quot;,
    &quot;schema &amp; contract drift&quot;,
    &quot;silent behavior changes in refactors&quot;,
    &quot;trust-boundary input handling&quot;,
]

candidates = merge(finder(diff, lens) for lens in LENSES)   # 45 candidates

for c in dedupe(candidates):   # 42 verifiers over the 45-candidate pool
    v = fresh_verifier(c.claim, c.file, c.line)   # no finder reasoning shared
    repro = v.attempt_execution()                  # write a test, run the code
    if repro.executed and repro.demonstrates(c.claim):
        c.verdict = &quot;CONFIRMED&quot;                    # report includes the repro command
    elif repro.blocked_by_environment:
        c.verdict = &quot;PLAUSIBLE&quot;                    # repro blocked by the environment
    else:
        c.verdict = &quot;REFUTED&quot;                      # dropped from the report
</code></pre>
<p>The pool resolved to <strong>40 confirmed, 2 plausible, 3 refuted</strong>. The two plausibles needed conditions the review environment couldn't stage, so they were reported as plausible rather than promoted to confirmed. The whole run took about 59 minutes.</p>
<h2>Why the separation matters</h2>
<p>If the same agent finds and confirms, confirmation is a formality. A model asked to check a finding it just produced will mostly agree with itself. The verifier has to be a fresh context with no investment in the claim.</p>
<p>The three refuted candidates show why this is worth the cost. All three were convincing on paper: a code path that looked reachable, a value that looked unguarded. Running the code showed otherwise. Without independent verification, those three would have gone into the report next to the forty real ones, indistinguishable from them, and if the first finding the fork's author checks turns out to be wrong, they stop trusting the rest. A plausible-but-wrong finding costs more than no finding: it wastes the author's time and undermines the credibility of every other entry.</p>
<p>There is a second payoff. Because every confirmed finding was established by execution, the report ships with its repro, which means each defect has a ready-made regression test before anyone starts fixing it.</p>
<h2>Report engineering: attribution, distribution, triage</h2>
<p>Forty confirmed defects is raw material, not a deliverable. Three processing steps turned it into one.</p>
<p><strong>Introducing-commit attribution.</strong> For each defect, the verifier located the commit that introduced the defective line:</p>
<pre><code class="language-bash"># which commit first introduced this exact string?
git log -S 'layer = &quot;process&quot; if x else &quot;process&quot;' \\
    --reverse --format='%h %s' -- pipeline/rubric_loader.py | head -1
</code></pre>
<p>This changes the tone of the conversation. &quot;Your fork has bugs&quot; is vague and reads as an accusation; &quot;defect 7 was introduced by commit <code>abc123</code>, here is the failing test&quot; is a work item someone can schedule.</p>
<p><strong>Per-commit defect distribution.</strong> Rolling the attribution up gives a table of which commits in the 17-commit series were clean and which carried most of the defects. Most were fine. A handful were not, so the rework scope became those few commits instead of all seventeen. That settles the discussion in favor of a fix plan rather than an argument about rewriting.</p>
<p><strong>A 5-tier fix plan triaged by delivery impact</strong>, not abstract severity. The table below compresses the triage logic (it is not the report's tiers verbatim). The principle: in an eval pipeline, a quiet defect is more dangerous than a loud one.</p>
<table>
<thead>
<tr>
<th>Tier</th>
<th>Class</th>
<th>Why this order</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Answer/rubric leakage into exported task packs</td>
<td>Contaminates every downstream measurement</td>
</tr>
<tr>
<td>2</td>
<td>Silent misgrading (fail-open gates, defaulted fields)</td>
<td>Wrong scores that look like real scores</td>
</tr>
<tr>
<td>3</td>
<td>Crashes on common inputs</td>
<td>Noisy, so at least it gets noticed</td>
</tr>
<tr>
<td>4</td>
<td>Concurrency races destroying another run's work</td>
<td>Real, intermittent, schedulable</td>
</tr>
<tr>
<td>5</td>
<td>Dead lints, hygiene</td>
<td>After everything above</td>
</tr>
</tbody>
</table>
<p>Crashes get noticed and fixed quickly. Leakage and misgrading produce plausible-looking numbers that end up in a delivery.</p>
<h2>The meta-finding: hardening commits that introduced fail-open bugs</h2>
<p>This was the most useful result of the run. The series' theme was fail-closed hardening, and the confirmed defects included fail-open regressions and eval-answer leakage. The commits introduced the same defect classes they were written to eliminate.</p>
<p>The concrete cases:</p>
<ul>
<li>
<p>A rubric-layer field assigned through a dead ternary (both branches produced the same default), so every rubric row was typed as &quot;process&quot; and the outcome-gating logic never fired. Result: solvers that guess the final number without doing the work can score again, which reopened an old, known hole in the rubric design.</p>
</li>
<li>
<p>Rubric dependency metadata that the loader fabricated instead of failing closed: when it couldn't parse the dependency field, it invented a value and continued. That is exactly the behavior fail-closed handling exists to prevent, and it arrived in a commit about failing closed.</p>
</li>
<li>
<p>Reference answers and rubrics leaking into exported task packs, so the solver's sandbox could read the reference answers. For an eval pipeline this is the worst defect class; every score downstream of it is meaningless.</p>
</li>
<li>
<p>A leak-detection lint whose regex quantifier was swallowed by an f-string:</p>
<pre><code class="language-python"># intended: a bounded-window regex for detecting answer text near markers
pattern = f&quot;reference.{{0,160}}answer&quot;    # what the author meant
pattern = f&quot;reference.{0,160}answer&quot;      # what shipped: the f-string
                                          # evaluates {0,160} as a tuple -&gt;
                                          # &quot;reference.(0, 160)answer&quot;
                                          # -&gt; matches nothing, lint disabled
</code></pre>
<p>The lint still existed, ran, and passed. It just no longer checked anything.</p>
</li>
<li>
<p>A <code>NameError</code> that crashed the ingest stage on any <code>.msg</code> or <code>.zip</code> input, both common input types for this pipeline.</p>
</li>
<li>
<p>A race in which one run deletes a concurrent run's freshly installed work.</p>
</li>
</ul>
<p>I don't think this inversion is bad luck. Hardening changes tend to get written in a defensive mode: wrap it in try/except, add a default, keep the pipeline moving. Broad exception handling plus permissive defaults is precisely how you get fail-open behavior. Meanwhile the commit message says &quot;harden&quot;, and reviewers give the diff the trust the label suggests. My conclusion is that hardening-themed diffs need more adversarial review than feature diffs, not less.</p>
<p>One control is needed before believing any of this: maybe the review only rediscovered bugs the author had already found and fixed. Nine days after the review, I re-verified against the fork's HEAD, and two of the headline defects still reproduced. The review was finding live bugs, not stale ones.</p>
<h2>Where the pattern pays, and where it wastes tokens</h2>
<p>This setup is not a default. It pays when:</p>
<ul>
<li>The merge is high-stakes: a large diff entering a delivery path, where one silent defect ends up in a client artifact.</li>
<li>The code is unfamiliar: you didn't write it, so you have no mental model to review against. Six finders build six partial models in parallel, faster than you build one.</li>
<li>The surface is eval integrity: leakage and misgrading defects are silent by construction. Reading rarely finds them; execution does.</li>
<li>A missed defect costs more than the run: 51 agents for an hour is cheap compared to one contaminated benchmark delivery.</li>
</ul>
<p>It wastes tokens when:</p>
<ul>
<li>The diff is small: a 40-line change doesn't need six lenses. Read it yourself.</li>
<li>The findings would be matters of taste: style, naming, architecture preferences. You can't write a failing test for an aesthetic disagreement, so the confirm/refute step has nothing to check.</li>
<li>There is no harness to execute against: if the verifiers can't run anything, you get 45 unverified opinions and zero verdicts. Fix the test harness first; it's the better investment anyway.</li>
<li>Nobody will act on the report: a review that nobody triages isn't worth running at any scale.</li>
</ul>
<h2>Operating notes</h2>
<p>Details that decided whether the run produced signal or noise:</p>
<ol>
<li>Review the merged diff, attribute per commit afterwards. Defects span commits (for example, a variable renamed in commit 4 breaks a guard added in commit 11), so finders read the merged 216-file diff, and <code>git log -S</code> reconstructed per-commit responsibility after confirmation. Reviewing commit-by-commit would have missed the interactions.</li>
<li>Keep the lens list short. I could state each of the six lenses in one line. A seventh vague lens like &quot;general quality&quot; produces candidates no verifier can execute against.</li>
<li>Dedupe before verifying. Independent finders converge on the most obvious defects. Merge candidates by file, line, and failure class first, or you pay for the same reproduction several times.</li>
<li>Give the verifier a claim, not an argument. The verifier receives the file, the line, and the claimed failure scenario, never the finder's reasoning. Shared reasoning is shared bias.</li>
<li>Make PLAUSIBLE a first-class verdict. Some real defects need conditions a review sandbox can't stage, such as a live concurrent run or a production credential path. Forcing those to CONFIRMED weakens the standard; forcing them to REFUTED discards real risk. Two of my forty-five landed there and were labeled as such.</li>
<li>Drop refuted findings entirely. They don't appear in the report at all. The report's credibility comes from every entry being executable, and one speculative entry makes readers doubt the other forty.</li>
</ol>
<p>Before running something like this on your own diff, four questions decide whether it's worth it:</p>
<ul>
<li>Is there a test harness the verifiers can actually run?</li>
<li>Can you state each finder's lens in one sentence?</li>
<li>Is the failure cost of this merge higher than an hour of agent time?</li>
<li>Will someone triage the report within a day?</li>
</ul>
<p>If all four answers are yes, run it. If any answer is no, fix that first; the review only amplifies whatever process discipline already exists.</p>
<h2>Takeaway</h2>
<p>The number in the title matters less than the rule: the agent that proposes a defect never confirms it, and confirmation means execution. Fan out cheap adversarial readers, require every claim to survive a fresh-context reproduction (a failing test, a real traceback) before it goes in the report, and attribute each confirmed defect to its introducing commit so the output is a set of schedulable work items. And apply the most scrutiny to the diffs whose commit messages promise safety, because that label is where reviewers tend to relax.</p>
`,Ry=`<h1>51 个 Agent 的代码审查</h1>
<p>一位同事 fork 了我的评测题目合成流水线，去做一个新领域的特化版本，并在 fork 上落了一个 17 个 commit 的系列。这批提交的主题是加固（hardening）：fail-closed 守卫、更严格的校验、防御式错误处理。合并后的 diff 覆盖 216 个文件。其中一部分工作会流向客户交付，所以我必须搞清楚里面实际改了什么，不能只看 commit message 怎么写。</p>
<p>先说清楚：我信任同事的意图。问题在于代码是否真的做到了 commit message 声称的事。</p>
<p>一个 216 文件的 diff，实话说没有人会完整看完。前三十个文件认真读，接下来五十个略读，之后就开始靠代码形状做模式匹配。规模到了这个程度，review 基本退化成走流程的批准。所以我做了现在对任何失败代价高的合并都会做的事：规模化的对抗式验证。我对这份 diff 跑了 51 个 agent，约 59 分钟 wall-clock，产出一份报告。</p>
<h2>架构：finder 提出，verifier 执行</h2>
<p>这个设计只有两个角色，而且只有把两者严格分开才有效。</p>
<p>六个独立的 finder，各自带一个不同的视角扫同一份 diff。对评测流水线来说，视角大致是这几类：错误处理与 fail-open 路径；共享状态与并发；评测完整性（有没有任何答案产物能到达解题方）；阶段之间的 schema 与契约漂移；藏在重构里的静默行为变化；信任边界上的输入处理。每个 finder 用自己的视角通读全量 diff，产出候选缺陷：文件、行号、声称的触发场景。finder 之间互相看不到对方的输出。</p>
<p>六个视角总共产出 45 条候选。这就是 fan-out 换来的东西：没有哪个 reviewer 能对 216 个文件同时保持六种不同的失效视角。</p>
<p>让结果可信的关键规则是：去重后的每条候选各配一个独立的 verifier（45 条候选池对应 42 个 verifier），每个都是全新上下文，只拿到主张和位置，拿不到 finder 的推理过程。verifier 的工作不是判断这条发现听起来对不对，而是必须实际跑点东西来复现缺陷：一个失败的 pytest、一条真实的 traceback、一个观测到的错误值。复现不出来，这条发现就进不了报告。</p>
<pre><code class="language-python"># 一组有代表性的视角（针对这类流水线）
LENSES = [
    &quot;错误处理 / fail-open 路径&quot;,
    &quot;共享状态与并发&quot;,
    &quot;评测完整性：答案产物是否能到达解题方&quot;,
    &quot;schema 与契约漂移&quot;,
    &quot;重构中的静默行为变化&quot;,
    &quot;信任边界上的输入处理&quot;,
]

candidates = merge(finder(diff, lens) for lens in LENSES)   # 45 条候选

for c in dedupe(candidates):   # 45 条候选池，42 个 verifier
    v = fresh_verifier(c.claim, c.file, c.line)   # 不共享 finder 的推理
    repro = v.attempt_execution()                  # 写测试、跑代码
    if repro.executed and repro.demonstrates(c.claim):
        c.verdict = &quot;CONFIRMED&quot;                    # 报告附带复现命令
    elif repro.blocked_by_environment:
        c.verdict = &quot;PLAUSIBLE&quot;                    # 复现被环境条件挡住
    else:
        c.verdict = &quot;REFUTED&quot;                      # 从报告中剔除
</code></pre>
<p>候选池最终收敛为 <strong>40 确认、2 存疑、3 驳回</strong>。两条存疑是因为复现条件超出了审查环境能搭建的范围，所以按 plausible 如实标注，没有硬提成确认。整轮跑了约 59 分钟。</p>
<h2>为什么必须分离</h2>
<p>如果同一个 agent 既负责发现又负责确认，确认就是走过场。让模型检查自己刚提出的发现，它大概率会同意自己。verifier 必须是对这条主张没有任何投入的全新上下文。</p>
<p>三条被驳回的候选说明了这样做的价值。它们在纸面上都很有说服力：一条看起来可达的代码路径，一个看起来没有守卫的值。实际跑起来发现不成立。如果没有独立验证，这三条会和四十条真缺陷并排出现在报告里，无从分辨；fork 作者核对的第一条如果恰好是错的，剩下的他也不会再信。一条看似成立、实则错误的发现比没有发现代价更高：既浪费作者的时间，也拖累报告里其他所有条目的可信度。</p>
<p>分离还有第二个好处。每条确认的发现都是靠执行确立的，报告自带复现方式，等于在有人动手修之前，每个缺陷已经有了现成的回归测试。</p>
<h2>报告工程：定位、分布、分级</h2>
<p>四十条确认缺陷只是原始材料，还不是交付物。三步加工把它变成了交付物。</p>
<p><strong>引入 commit 定位。</strong> 对每个缺陷，verifier 定位到引入缺陷行的那个 commit：</p>
<pre><code class="language-bash"># 这行代码最早是哪个 commit 引入的？
git log -S 'layer = &quot;process&quot; if x else &quot;process&quot;' \\
    --reverse --format='%h %s' -- pipeline/rubric_loader.py | head -1
</code></pre>
<p>这会改变沟通的性质。&quot;你的 fork 有 bug&quot;含糊而且像指控；&quot;缺陷 7 由 commit <code>abc123</code> 引入，附失败测试&quot;是一条可以直接排期的工作项。</p>
<p><strong>按 commit 的缺陷分布。</strong> 把定位结果汇总成一张表：17 个 commit 里哪些干净、哪些集中了大部分缺陷。大多数没问题，有问题的是少数几个，于是返工范围从十七个 commit 缩小到这几个。这让讨论落在怎么修上，而不是要不要重写上。</p>
<p><strong>按交付影响分级的五级修复计划</strong>，而不是按抽象的严重程度。下表是分级逻辑的压缩版，不是报告原文。原则是：在评测流水线里，安静的缺陷比响亮的更危险。</p>
<table>
<thead>
<tr>
<th>层级</th>
<th>类别</th>
<th>为什么是这个顺序</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>答案/rubric 泄漏进导出的任务包</td>
<td>污染下游全部测量</td>
</tr>
<tr>
<td>2</td>
<td>静默错判（fail-open 的门、被默认值吞掉的字段）</td>
<td>错误的分数看起来和真分数一样</td>
</tr>
<tr>
<td>3</td>
<td>常见输入直接崩溃</td>
<td>吵，但至少会被发现</td>
</tr>
<tr>
<td>4</td>
<td>并发竞态毁掉另一个运行的产物</td>
<td>真实、间歇性、可排期</td>
</tr>
<tr>
<td>5</td>
<td>失效的 lint、代码卫生</td>
<td>排在以上全部之后</td>
</tr>
</tbody>
</table>
<p>崩溃会很快被发现并修掉。泄漏和错判产出的是看起来正常、最终被交付出去的数字。</p>
<h2>元发现：加固提交引入了 fail-open 缺陷</h2>
<p>这是整次运行最有价值的结果。这个系列的主题是 fail-closed 加固，而确认的缺陷里就包括 fail-open 回归和评测答案泄漏。这批提交引入的，正是它们本来要消灭的缺陷类别。</p>
<p>具体案例：</p>
<ul>
<li>
<p>一个 rubric 层级字段通过死三元表达式赋值（两个分支产出同一个默认值），导致所有 rubric 行都被标成 &quot;process&quot;，结果门控逻辑从未触发。后果是不做过程、直接猜终值的解题方又能得分了，这重新打开了 rubric 设计里一个早已知晓的老洞。</p>
</li>
<li>
<p>rubric 依赖元数据在解析失败时被 loader 捏造而不是 fail-close：解析不出依赖字段时，它编一个值继续跑。这正是 fail-closed 处理要防止的行为，却出现在一个以 fail-closed 为主题的 commit 里。</p>
</li>
<li>
<p>参考答案和 rubric 泄漏进导出的任务包，解题方的沙箱可以直接读到参考答案。对评测流水线来说这是最严重的一类缺陷，它下游的所有分数都失去意义。</p>
</li>
<li>
<p>一个泄漏检测 lint 的正则量词被 f-string 吞掉了：</p>
<pre><code class="language-python"># 本意：一个带窗口上限的正则，检测标记附近的答案文本
pattern = f&quot;reference.{{0,160}}answer&quot;    # 作者想写的
pattern = f&quot;reference.{0,160}answer&quot;      # 实际交付的：f-string 把 {0,160}
                                          # 当元组求值 -&gt;
                                          # &quot;reference.(0, 160)answer&quot;
                                          # -&gt; 什么都匹配不到，lint 已失效
</code></pre>
<p>这个 lint 依然存在、依然运行、依然通过，只是不再检查任何东西。</p>
</li>
<li>
<p>一个 <code>NameError</code>：任何 <code>.msg</code> 或 <code>.zip</code> 输入都会让摄取阶段崩溃，而这两种都是这条流水线的常见输入类型。</p>
</li>
<li>
<p>一个并发竞态：一个实例会删掉另一个并发实例刚装好的产物。</p>
</li>
</ul>
<p>我不认为这种反转是运气差。加固类改动通常是在防御心态下写的：包一层 try/except，给个默认值，让流水线继续跑。宽泛的异常捕获加宽容的默认值，恰好就是产生 fail-open 行为的配方。同时 commit message 写着&quot;加固&quot;，reviewer 也就顺着这个标签给了更多信任。我的结论是：以加固为主题的 diff 需要比功能 diff 更多的对抗式审查，而不是更少。</p>
<p>在相信以上结论之前还需要一个对照：这次 review 找到的会不会只是作者早已发现并修掉的 bug？审查九天之后，我对 fork 的 HEAD 重新验证，其中两个最突出的缺陷仍然可以复现。所以这次找到的是活着的 bug，不是过期的。</p>
<h2>这套模式什么时候值得，什么时候浪费 token</h2>
<p>这套做法不是默认选项。以下情况值得跑：</p>
<ul>
<li>合并风险高：一个进入交付路径的大 diff，一个静默缺陷就可能出现在客户产物里。</li>
<li>代码陌生：不是你写的，你没有可对照的心智模型。六个 finder 并行建六个局部模型，比你自己建一个快。</li>
<li>审查对象是评测完整性：泄漏和错判类缺陷天生静默，靠读很难发现，靠执行可以。</li>
<li>漏掉一个缺陷的代价高于这次运行：51 个 agent 跑一小时，比一次被污染的基准交付便宜得多。</li>
</ul>
<p>以下情况是浪费 token：</p>
<ul>
<li>diff 很小：40 行的改动不需要六个视角，自己读就行。</li>
<li>发现注定是品味问题：风格、命名、架构偏好。审美分歧写不出失败测试，确认/驳回这一步就没有东西可查。</li>
<li>没有可执行的 harness：verifier 什么都跑不起来的话，你得到的是 45 条未经验证的观点和 0 条判定。先修测试 harness，那本来就是更划算的投资。</li>
<li>没人会对报告采取行动：没人 triage 的 review，跑多大规模都没有意义。</li>
</ul>
<h2>实操笔记</h2>
<p>以下细节决定了这次运行产出的是信号还是噪声：</p>
<ol>
<li>审合并后的 diff，事后再按 commit 定位。缺陷会跨 commit（比如第 4 个 commit 改的变量名弄坏了第 11 个 commit 加的守卫），所以 finder 读的是合并后的 216 文件 diff，确认之后再用 <code>git log -S</code> 重建每个 commit 的责任。逐 commit 审会漏掉这类交互。</li>
<li>视角清单要短。六个视角每个我都能用一句话说清。第七个含糊的视角（比如&quot;总体质量&quot;）只会产出 verifier 无法执行验证的候选。</li>
<li>验证之前先去重。独立的 finder 会在最明显的缺陷上撞车。先按文件、行号、失效类别合并候选，否则同一次复现要付好几遍钱。</li>
<li>给 verifier 主张，不给论证。verifier 拿到文件、行号和声称的触发场景，不给 finder 的推理过程。共享了推理就共享了偏见。</li>
<li>让 PLAUSIBLE 成为正式判定。有些真缺陷需要审查沙箱搭不出来的条件，比如一次真实的并发运行、一条生产凭证路径。硬提成 CONFIRMED 会破坏标准，硬打成 REFUTED 会丢掉真实风险。我这四十五条里有两条落在这里，如实标注。</li>
<li>被驳回的发现直接剔除。它们完全不出现在报告里。报告的可信度来自每一条都可执行，混进一条没验证过的，读者就会开始怀疑其余四十条。</li>
</ol>
<p>在对自己的 diff 上这套流程之前，先回答四个问题：</p>
<ul>
<li>有没有 verifier 真能跑起来的测试 harness？</li>
<li>每个 finder 的视角能不能用一句话说清？</li>
<li>这次合并的失败代价是否高于一小时的 agent 时间？</li>
<li>有没有人会在一天之内 triage 这份报告？</li>
</ul>
<p>四个都是&quot;是&quot;，就跑。有任何一个&quot;否&quot;，先解决它；这套流程只会放大已有的流程纪律。</p>
<h2>结语</h2>
<p>标题里的数字不重要，关键是那条规则：提出缺陷的 agent 不参与确认，确认必须靠执行。扇出便宜的对抗式读者，要求每条主张先在全新上下文里通过一次可执行的复现（失败的测试、真实的 traceback）才进报告，再给每条确认的缺陷定位引入 commit，让产出是一组可排期的工作项。另外，对 commit message 承诺了安全性的 diff 要投入最多的审查，因为那恰恰是 reviewer 最容易放松的地方。</p>
`,zy=`<h1>Rubrics as DAGs: Scoring Process, Not Just Outcomes</h1>
<p>I build benchmark-synthesis pipelines that turn a domain expert's real files into agentic exam items, scored row-by-row by an LLM judge against a rubric. Most of the review effort tends to go into the judge: which model, what prompt, how well it aligns with human graders. The rubric gets treated as a text field. In practice the rubric deserves at least as much scrutiny, because it behaves like a program that the judge interprets, and a program with no types, no control flow, and no tests fails silently.</p>
<p>This post describes the rubric schema our pipeline converged on after shipping flat rubrics and paying for it, along with a judge bug we shipped anyway, the tests that would have caught it, and the repair rules that keep the system consistent.</p>
<h2>Where flat rubrics fail</h2>
<p>A flat rubric is a weighted checklist: &quot;concludes X, 4 points; mentions Y, 2 points.&quot; Every row is scored independently, and that independence produces two failure modes.</p>
<p>The first is guessed conclusions. An item asks for a damages figure, a filing deadline, or a compliance verdict. A model can land on the right conclusion without doing the work, from a good prior, a lucky rounding, or leakage in the prompt. A flat rubric pays full outcome credit either way, because it has no way to check how the number was reached. The score then measures how guessable the answer key is, not whether the reasoning was grounded in the evidence.</p>
<p>The second is partial credit for hallucinated steps. A model writes confident intermediate analysis, citing clauses that don't exist or a timeline it invented, gets the conclusion wrong, and still collects a respectable partial score, because each plausible-sounding step matches some row's wording. The rubric pays for writing that looks like the work, without checking that the work happened.</p>
<p>Both defects have the same root: the rubric knows nothing about the structure of the reasoning it scores. Rows are independent by construction, but the steps in real work are not.</p>
<h2>The schema: typed rows and dependency edges</h2>
<p>Our fix is to type every row and to wire outcome rows to the process rows that must precede them:</p>
<pre><code class="language-yaml">item: breach_notice_review_017
rows:
  - id: P3
    type: process
    weight: 2
    text: &quot;Locates the 45-day cure period in §8.2 of the supply agreement and quotes it.&quot;
  - id: P4
    type: process
    weight: 2
    text: &quot;Establishes from the email thread that notice was received on March 3, not March 1.&quot;
  - id: O2
    type: outcome
    weight: 4
    depends_on: [P3, P4]
    text: &quot;Concludes the cure window expired on April 17.&quot;
  - id: N1
    type: negative
    weight: -2      # bounded: negatives can erase credit, never take the item below zero
    text: &quot;Cites a clause number that does not exist in any provided document.&quot;
  - id: H1
    type: hurdle
    weight: 0       # no points either way; a hit vetoes the whole item
    text: &quot;Deliverable invents a settlement figure not present in any source file.&quot;
</code></pre>
<p>Four row kinds plus one mandatory field:</p>
<ul>
<li><strong>Process</strong> rows score the steps: locate the evidence, establish the fact, reconcile the two sources that disagree. They make up most of the rubric by design.</li>
<li><strong>Outcome</strong> rows score conclusions, but an outcome row can only hit if all of its <code>depends_on</code> process rows hit. A correct April 17 with no located cure period and no established receipt date is scored as a guess. This one rule removes the guessed-conclusion problem.</li>
<li><strong>Negative</strong> rows deduct for specific, named misbehavior, not general &quot;quality&quot; penalties. They are bounded: a stack of negatives can zero the item but never drive it negative, so one bad habit can't dominate the measurement.</li>
<li><strong>Hurdle</strong> rows carry weight 0 and exist only to veto. Fabricating a figure, leaking the reference answer's phrasing, or ignoring a mandatory refusal: if a hurdle fires, the item scores zero regardless of everything else. They are deliberately worth no points, so there is nothing to gain by satisfying one.</li>
<li>Per-row justification is mandatory: the judge must quote the place in the deliverable where each hit is satisfied. A hit without an evidence quote counts as an audit failure. Those quotes are also what later lets you catch a judge citing evidence that isn't in the deliverable at all.</li>
</ul>
<h2>Enforcing coverage floors in code</h2>
<p>There is a second, quieter way rubrics degrade: coverage collapse. Ask an LLM author for &quot;a thorough rubric, mostly process rows&quot; and you get 12 rows one day and 40 the next, with the process/outcome ratio drifting with the item's phrasing. Numeric instructions in prompts are not followed reliably, so we enforce floors in a validator:</p>
<pre><code class="language-python">def validate(rubric):
    # coverage floors, enforced here rather than in the authoring prompt
    assert len(rubric.rows) &gt;= 25
    assert n_rows(rubric, &quot;process&quot;) &gt;= 15 and n_rows(rubric, &quot;outcome&quot;) &gt;= 10
    for row in rubric.rows:
        # edges may only point at process rows, and must form a DAG
        assert all(rubric[d].type == &quot;process&quot; for d in row.depends_on)
    assert is_acyclic(rubric)

def score(rubric, verdicts):
    hit = {r.id: verdicts[r.id].hit for r in rubric.rows}
    if any(hit[r.id] for r in rubric.rows if r.type == &quot;hurdle&quot;):
        return 0.0                                   # one-vote veto
    total = 0.0
    for r in rubric.rows:
        if r.type == &quot;outcome&quot; and not all(hit[d] for d in r.depends_on):
            continue                                 # right answer, missing work: a guess
        if hit[r.id]:
            total += r.weight
    return max(total, 0.0) / max_positive(rubric)    # negatives are bounded
</code></pre>
<p>Our floors are at least 25 rows per item, with at least 15 process and 10 outcome rows. The exact numbers matter less than where they are enforced: a generation that misses a floor fails that stage before a judge ever sees it. The same validator checks the graph constraints, outcomes depend only on process rows and the graph is acyclic, so the scoring function never has to handle a malformed graph at judge time.</p>
<h2>We shipped a judge that dropped the edges</h2>
<p>None of this helps if the judge ignores the schema, and for two days ours did: the production judge silently dropped the <code>depends_on</code> field. It parsed the rows, scored the rows, and wrote fluent per-row justifications, so nothing crashed and the score distributions looked plausible. Meanwhile every outcome row was effectively flat again, and guessed conclusions were earning full credit while the schema on disk said they couldn't.</p>
<p>No dashboard caught it. What caught it was an adoption checklist that required demonstrating, on a live item, that each schema field observably changes judge behavior. The <code>depends_on</code> demonstration failed, and following up on that one failure surfaced the whole class of bug. The same habit of manually running real items through the judge and reading the verdicts, rather than watching dashboards, later caught the judge fatal-zeroing items with 91-93% positive hits because it misread in-material citations as answer leakage.</p>
<p>Two tests would have caught the dropped edges on day one:</p>
<pre><code class="language-python">def test_dependency_cascade_fires():
    item = load_reference_item()                     # scores full marks, by invariant
    sabotaged = delete_step(item.reference, &quot;P4&quot;)    # remove exactly one grounded step
    v = judge(sabotaged, item.rubric)
    assert v[&quot;P4&quot;].hit is False                      # the deleted step is missed
    assert v[&quot;O2&quot;].hit is False                      # and the cascade must fire
    assert &quot;P4&quot; in v[&quot;O2&quot;].justification             # the judge must say why

def test_judge_echoes_the_graph():
    v = judge(any_deliverable, item.rubric)
    # a judge that cannot repeat the edges back did not use them
    assert v.resolved_edges == item.rubric.edges
</code></pre>
<p>The round-trip test makes the judge echo the dependency graph it resolved, then diffs it against the rubric's. The sabotage test starts from a known full-marks answer, deletes exactly one depended-on step, and requires the cascade to fire with the right attribution. Neither test needs a second model or human labels. We just hadn't written them, because the judge appeared to be working.</p>
<h2>Repairing deductions on reference answers</h2>
<p>DAG rubrics come with an invariant that makes them maintainable: <strong>reference answers must score full marks.</strong> If the gold answer can't max its own rubric, either the rubric or the answer is wrong. We enforce this by oracle-judging every reference answer with production-equivalent judges and repairing every deduction.</p>
<p>Under a flat rubric, &quot;the reference lost points&quot; is one undifferentiated problem. Under a DAG rubric, every deduction falls into one of four classes, and each class has a different correct repair:</p>
<table>
<thead>
<tr>
<th>Deduction class</th>
<th>What the judge saw</th>
<th>Correct repair</th>
</tr>
</thead>
<tbody>
<tr>
<td>Direct miss</td>
<td>a row genuinely unsatisfied by the reference</td>
<td>fix the answer (missing step) or the row (unsatisfiable ask)</td>
</tr>
<tr>
<td><code>depends_on</code> cascade</td>
<td>outcome satisfied, but an upstream process row missed</td>
<td>repair upstream: the missed step or a wrong edge, never the satisfied outcome row</td>
</tr>
<tr>
<td>Negative hit</td>
<td>the reference did something a negative row forbids</td>
<td>one of the two is wrong; decide which, change exactly that one</td>
</tr>
<tr>
<td>Hurdle</td>
<td>a veto fired on the gold answer</td>
<td>almost always a rubric bug or contaminated source material; stop and root-cause</td>
</tr>
</tbody>
</table>
<p>The cascade class is the one that gets repaired incorrectly most often. When a reference answer loses an outcome through a dependency cascade, the outcome row itself was satisfied; the judge's verdict says so. The defect is upstream: either the answer really skipped a step (fix the answer), or the process row asks for something the materials can't support (fix the row), or the edge encodes a dependency that isn't real (fix the edge). Deleting or loosening the satisfied outcome row does recover the score, but it also removes the discrimination the schema was added to provide. Repairs are minimal-change by policy: change the diagnosed cause, re-judge blind, and confirm no other row moved. The most stubborn deductions in our last round were not rubric bugs at all; they traced back to internally contradictory injected noise files, and were fixed by editing specific paragraphs in the source materials rather than by weakening any row.</p>
<h2>Checking process rows against actual solving</h2>
<p>One question remains: do the process rows correspond to steps a real solver has to perform, or are they a plausible-sounding decomposition the author wrote down after seeing the answer?</p>
<p>We check this empirically with a two-pass trial-solve stage. A solver model first attempts the item blind, in an isolated sandbox containing only the input files: no rubric, no reference, no tests. Then it re-solves hinted, with the reference answer available and its own blind attempt carried into context, roughly the situation of a student reading the reference answer right after the exam.</p>
<p>We then diff the two transcripts. A load-bearing process row shows up as a place where the blind attempt stalled and the hinted attempt got through. A process row that never appears in the diff is probably decorative, usually the outcome paraphrased into step-shaped language, and that is the row to rewrite or cut. The same pair of transcripts also checks the edges: if the blind solve hits an outcome without hitting its depended-on process rows, either the edge is wrong or the item is guessable, and both are things to know before delivery.</p>
<h2>Takeaway</h2>
<p>Treat the rubric as the program the judge executes:</p>
<ul>
<li>Give rows types (process, outcome, negative, hurdle), because &quot;4 points if X&quot; carries no semantics on its own.</li>
<li>Give the rubric control flow: outcomes gated on <code>depends_on</code>, bounded negatives, weight-0 vetoes, so a right answer without the work scores as a guess.</li>
<li>Put static checks in code: row-count and type floors, edges only into process rows, acyclicity. Prompt instructions don't hold these on their own.</li>
<li>Test the judge against the schema: round-trip the graph, sabotage a full-marks answer. A judge can drop fields without anything crashing.</li>
<li>Follow the repair rules: fix the diagnosed cause, never the satisfied row, anchored on the invariant that reference answers score full marks.</li>
</ul>
<p>A flat rubric gives the judge a list of independent booleans and hopes they add up to a measurement. The typed, tested version costs more to build, but every part of it can be checked before an item reaches production.</p>
`,Dy=`<h1>把 Rubric 做成 DAG：给过程打分，而不只是结果</h1>
<p>我做评测题目合成流水线：把领域专家的真实文件变成智能体考题，由 LLM judge 按 rubric 逐条判分。审查精力大多花在 judge 上，比如用哪个模型、prompt 怎么写、和人工判分对不对得上，rubric 则被当成一个普通的文本字段。实际上 rubric 至少同样值得审查，因为它的行为更像一段由 judge 解释执行的程序，而一段没有类型、没有控制流、没有测试的程序，出了问题不会报错，只会静默给出错误的结果。</p>
<p>本文写的是我们在平铺 rubric 上吃过亏之后收敛出来的 schema，以及一个照样上了线的 judge bug、本可以第一天就抓住它的测试，和保持系统自洽的修复规则。</p>
<h2>平铺 rubric 在哪里失效</h2>
<p>平铺 rubric 就是一张加权检查表：&quot;得出结论 X，4 分；提到 Y，2 分。&quot;每一行独立判分，这个独立性带来两类失效。</p>
<p>第一类是蒙对结论。一道题问赔偿金额、申报截止日或合规结论，模型完全可能没做任何分析就落在正确答案上：先验合适、取整凑巧，或者题面里有泄漏。平铺 rubric 无从检查这个数字是怎么得出的，两种情况都照给全额结论分。这样测出来的其实是答案有多好蒙，而不是推理有没有证据支撑。</p>
<p>第二类是给幻觉步骤发部分分。模型写出一段自信的中间分析，引用不存在的条款、编造一条时间线，结论错了，仍然能拿到不低的部分分，因为每一步看起来像样的分析都能对上某一行的措辞。rubric 奖励的是看起来像做了工作的文字，却不核对工作有没有真的发生。</p>
<p>两个缺陷的根源相同：rubric 不了解它所评判的推理的结构。行与行天生独立，但真实工作里的步骤并不独立。</p>
<h2>Schema：带类型的行和依赖边</h2>
<p>我们的做法是给每一行标类型，并把结论行接到它必须依赖的过程行上：</p>
<pre><code class="language-yaml">item: breach_notice_review_017
rows:
  - id: P3
    type: process
    weight: 2
    text: &quot;定位到供货协议 §8.2 中的 45 天补救期条款并原文引用。&quot;
  - id: P4
    type: process
    weight: 2
    text: &quot;从邮件往来中确认通知的送达日是 3 月 3 日而非 3 月 1 日。&quot;
  - id: O2
    type: outcome
    weight: 4
    depends_on: [P3, P4]
    text: &quot;得出补救窗口于 4 月 17 日届满的结论。&quot;
  - id: N1
    type: negative
    weight: -2      # 有界：负分可以清零得分，但不会把整题扣成负数
    text: &quot;引用了任何给定文档中都不存在的条款编号。&quot;
  - id: H1
    type: hurdle
    weight: 0       # 不加分也不减分；一旦命中，整题记零分
    text: &quot;交付物凭空捏造了源文件中不存在的和解金额。&quot;
</code></pre>
<p>四种行类型加一个强制字段：</p>
<ul>
<li><strong>process</strong> 行给步骤打分：定位证据、确认事实、调和两个互相矛盾的来源。按设计它们占 rubric 的大部分。</li>
<li><strong>outcome</strong> 行给结论打分，但只有它 <code>depends_on</code> 的全部 process 行都命中时才能命中。没有定位补救期、也没有确认送达日的&quot;4 月 17 日&quot;，按蒙对处理。这一条规则就消除了蒙对结论的得分。</li>
<li><strong>negative</strong> 行只为具体、点名的错误行为扣分，而不是笼统的&quot;质量&quot;罚分。它有界：多条负分可以把整题清零，但不会扣成负数，避免单一坏习惯主导整个测量。</li>
<li><strong>hurdle</strong> 行权重为 0，只用于否决。捏造数字、泄漏参考答案的措辞、无视强制拒答要求，只要命中一条 hurdle，整题记零分。它刻意不带分值，所以满足它得不到任何好处。</li>
<li>逐行判分理由是强制的：judge 必须引用交付物中满足该行的原文位置。命中却给不出证据引用，按审计失败处理。后来能发现 judge 引用了交付物里根本不存在的证据，靠的也是这些引用。</li>
</ul>
<h2>覆盖度下限写在代码里</h2>
<p>rubric 还有一种更不显眼的退化方式：覆盖度坍塌。在 prompt 里要求 LLM 作者写&quot;一份详尽的、以过程行为主的 rubric&quot;，今天可能拿到 12 行，明天拿到 40 行，process 和 outcome 的比例也随题面措辞漂移。prompt 里的数字要求执行得并不可靠，所以我们把下限放进校验器：</p>
<pre><code class="language-python">def validate(rubric):
    # 覆盖度下限，在这里强制执行，而不是写进出题 prompt
    assert len(rubric.rows) &gt;= 25
    assert n_rows(rubric, &quot;process&quot;) &gt;= 15 and n_rows(rubric, &quot;outcome&quot;) &gt;= 10
    for row in rubric.rows:
        # 依赖边只允许指向 process 行，且整体必须构成 DAG
        assert all(rubric[d].type == &quot;process&quot; for d in row.depends_on)
    assert is_acyclic(rubric)

def score(rubric, verdicts):
    hit = {r.id: verdicts[r.id].hit for r in rubric.rows}
    if any(hit[r.id] for r in rubric.rows if r.type == &quot;hurdle&quot;):
        return 0.0                                   # 一票否决
    total = 0.0
    for r in rubric.rows:
        if r.type == &quot;outcome&quot; and not all(hit[d] for d in r.depends_on):
            continue                                 # 答案对但过程缺失，按蒙对计
        if hit[r.id]:
            total += r.weight
    return max(total, 0.0) / max_positive(rubric)    # 负分有界
</code></pre>
<p>我们的下限是每题至少 25 行，其中 process 至少 15 行、outcome 至少 10 行。具体数字不如执行位置重要：没达到下限的生成会在这个阶段直接失败，走不到 judge 面前。同一个校验器也检查图的约束，即 outcome 只能依赖 process 行、整体无环，所以计分函数在判分时不需要处理畸形的图。</p>
<h2>我们上线了一个丢掉依赖边的 judge</h2>
<p>如果 judge 不理会 schema，前面这些都没有用。我们就遇到过：有两天时间，生产 judge 一直在静默丢弃 <code>depends_on</code> 字段。它照常解析每一行、照常判分、照常写出流畅的逐行理由，没有任何报错，分数分布看起来也正常。但每一条 outcome 行实际上退化回了平铺，蒙对的结论在拿满分，而磁盘上的 schema 写着这不可能。</p>
<p>看板没有抓到这个问题。抓到它的是一份采纳清单：对每个 schema 字段，都要在一道真实题目上演示这个字段确实改变了 judge 的行为。<code>depends_on</code> 的演示失败了，顺着这一次失败查下去，整类 bug 都暴露了出来。同样的习惯，也就是手动拿真实题目过一遍 judge、逐条读判词而不是只看看板，后来还发现 judge 把正向命中率 91-93% 的题目一票判零，原因是它把材料内引用误判成了答案泄漏。</p>
<p>有两个测试本可以在第一天就抓住丢边问题：</p>
<pre><code class="language-python">def test_dependency_cascade_fires():
    item = load_reference_item()                     # 按不变量，参考答案应拿满分
    sabotaged = delete_step(item.reference, &quot;P4&quot;)    # 只删掉一个有依据的步骤
    v = judge(sabotaged, item.rubric)
    assert v[&quot;P4&quot;].hit is False                      # 被删的步骤应判未命中
    assert v[&quot;O2&quot;].hit is False                      # 级联应当触发
    assert &quot;P4&quot; in v[&quot;O2&quot;].justification             # judge 需要说明扣分原因

def test_judge_echoes_the_graph():
    v = judge(any_deliverable, item.rubric)
    # 复述不出依赖边，说明 judge 没有用到它们
    assert v.resolved_edges == item.rubric.edges
</code></pre>
<p>往返测试要求 judge 回显它实际解析出的依赖图，再与 rubric 里的图做 diff。破坏测试从一份已知满分的答案出发，只删掉一个被依赖的步骤，然后要求级联触发且归因正确。两个测试都不需要第二个模型，也不需要人工标注。我们只是没写，因为 judge 看起来一直正常。</p>
<h2>参考答案扣分的修复规则</h2>
<p>DAG rubric 自带一条让它可维护的不变量：<strong>参考答案必须拿满分。</strong> 如果标准答案在自己的 rubric 上都拿不到满分，那么 rubric 和答案至少有一个是错的。我们的做法是用与生产等价的 judge 对每份参考答案做 oracle 判分，并修复每一处扣分。</p>
<p>在平铺 rubric 下，&quot;参考答案丢分&quot;是一个无差别的问题。在 DAG rubric 下，每处扣分都能归入四类之一，每类对应不同的修法：</p>
<table>
<thead>
<tr>
<th>扣分类型</th>
<th>judge 看到了什么</th>
<th>正确修法</th>
</tr>
</thead>
<tbody>
<tr>
<td>直接未命中</td>
<td>参考答案确实没满足某一行</td>
<td>修答案（缺了一步）或修该行（要求本身不可满足）</td>
</tr>
<tr>
<td><code>depends_on</code> 级联</td>
<td>outcome 本身满足，但上游某条 process 行未命中</td>
<td>修上游：缺失的步骤或错误的边，不动已满足的 outcome 行</td>
</tr>
<tr>
<td>negative 命中</td>
<td>参考答案做了某条负分行禁止的事</td>
<td>两者必有一错；判定是哪个，只改那一个</td>
</tr>
<tr>
<td>hurdle</td>
<td>否决行在标准答案上触发</td>
<td>几乎都是 rubric bug 或被污染的源材料，需要停下来查根因</td>
</tr>
</tbody>
</table>
<p>级联这一类最容易修错。参考答案因为依赖级联丢掉一条 outcome 时，这条 outcome 行本身是满足的，judge 的判词里写得很清楚。缺陷在上游：要么答案确实跳了一步（修答案），要么这条 process 行要求了材料支撑不了的东西（修该行），要么这条边描述的依赖并不真实存在（修边）。删掉或放宽那条已满足的 outcome 行确实能把分数修回来，但也去掉了这套 schema 本来要提供的区分度。修复按规定必须最小改动：只改诊断出的原因，然后盲重判，确认其他行的判定没有变化。上一轮交付里最难修的几处扣分根本不是 rubric 的问题，根因是注入的噪声文件内部自相矛盾，最后靠修改材料里的具体段落解决，没有弱化任何一行。</p>
<h2>用盲解和带提示重解检验 process 行</h2>
<p>还剩一个问题：这些 process 行对应的是真实解题者必须执行的步骤，还是作者看过答案之后倒推出来的一套像样的分解？</p>
<p>我们用一个两遍的试做阶段来做经验检验。先让一个解题模型盲解：隔离沙箱里只有输入文件，没有 rubric、没有参考答案、没有测试。然后带提示重解：给它参考答案，并把它自己的盲解尝试带进上下文，大致相当于学生考完试马上读参考答案。</p>
<p>然后对两份 transcript 做 diff。真正承重的 process 行，会表现为盲解在该处卡住、带提示后在该处通过。从不出现在 diff 里的 process 行多半是装饰，通常只是把结论改写成了步骤的形式，需要重写或删掉的正是这类行。同一对 transcript 也可以用来检查依赖边：如果盲解没有命中依赖的 process 行就命中了某条 outcome，要么这条边是错的，要么这道题可以蒙对，两种情况都需要在交付前弄清楚。</p>
<h2>结语</h2>
<p>把 rubric 当作 judge 要执行的程序来对待：</p>
<ul>
<li>给行加类型（process、outcome、negative、hurdle），因为&quot;满足 X 得 4 分&quot;本身没有语义。</li>
<li>给 rubric 加控制流：outcome 由 <code>depends_on</code> 门控、负分有界、权重为 0 的否决行，让没有过程的正确答案按蒙对计分。</li>
<li>静态检查写在代码里：行数和类型下限、依赖边只指向 process 行、无环。只靠 prompt 约束不住这些。</li>
<li>针对 judge 写测试：回显依赖图、破坏一份满分答案。judge 可能丢掉字段而不产生任何报错。</li>
<li>遵守修复规则：修诊断出的原因，不动已满足的行，基准是&quot;参考答案必须拿满分&quot;这条不变量。</li>
</ul>
<p>平铺 rubric 交给 judge 的是一串互相独立的布尔值，指望它们加起来就是一次测量。带类型、带测试的版本成本更高，但每一部分都可以在题目进入生产之前检查到。</p>
`,$y=`<h1>The Evidence Ledger: Making an LLM Write Questions It Can't Fabricate</h1>
<p>Most people worry about LLMs hallucinating <em>answers</em>. If you build evaluation data, the scarier failure is an LLM hallucinating <em>questions</em>.</p>
<p>I generate hard, document-grounded exam items for frontier models — tasks where a model is handed a folder of real spreadsheets, filings, and memos and asked to reason across them. The whole point is that a model can't score without genuinely reading the files. But there's a quiet way the pipeline betrays itself: the <em>author</em> model invents a number that merely <em>looks</em> like it came from the documents. Now your benchmark has a question keyed to a fact that doesn't exist. It's unanswerable — or worse, answerable only by hallucinating the same way the author did. One bad item like this doesn't crash anything. It silently rots your measurement.</p>
<p>You cannot prompt your way out of this. &quot;Don't make up numbers&quot; is a wish, not a constraint. The fix has to be <strong>structural</strong>, and the structure I keep coming back to is an <em>evidence ledger</em>.</p>
<h2>A ledger sits between the documents and the question</h2>
<p>The ledger is an intermediate artifact. Before any question is written, the pipeline reads the source files and produces a list of <strong>facts</strong>, and the author is allowed to reference <em>only</em> facts in the ledger. Anything not in the ledger does not exist for the purpose of writing a question.</p>
<p>Concretely, every fact is a row with a value, a locator, and a caveat:</p>
<pre><code class="language-json">{
  &quot;fact_id&quot;: &quot;f_0142&quot;,
  &quot;value&quot;: &quot;EBITDA margin = 18.4%&quot;,
  &quot;locator&quot;: { &quot;file&quot;: &quot;Model_v3.xlsx&quot;, &quot;sheet&quot;: &quot;Summary&quot;, &quot;cell&quot;: &quot;C27&quot; },
  &quot;unit&quot;: &quot;percent&quot;,
  &quot;caveat&quot;: &quot;Model tab is in USD millions; the Deck (p.11) restates this at 17.9% pre-synergy.&quot;,
  &quot;verdict&quot;: &quot;confirm&quot;
}
</code></pre>
<p>The <strong>locator</strong> is the load-bearing field. A value without a locator is just the model's word for it. A value with a locator can be re-opened, re-read, and disputed — by another model, by a human reviewer, by the grader who later has to verify the reference answer. Everything downstream that needs to be trustworthy hangs off that one field. The <strong>caveat</strong> is where the difficulty lives: a unit that switches between thousands and millions across two tabs, a figure that conflicts between a deck and the underlying model, a footnote that quietly restricts the number's scope.</p>
<h2>The author can only spend facts it's been given</h2>
<p>Once the ledger exists, generation changes character. The author isn't &quot;reading documents and writing a question&quot; — a process with infinite room to drift. It's <em>spending facts from a fixed budget</em>. If a question needs a number, that number has to be a ledger entry, which means it has a locator, which means it was really in the file.</p>
<p>You can enforce this mechanically. Before an item is accepted, every number it cites is matched back to a <code>fact_id</code>:</p>
<pre><code class="language-python">def validate_item(item, ledger):
    cited = extract_quantities(item.question + item.reference_answer)
    ledger_values = {normalize(f.value) for f in ledger.facts}
    orphans = [c for c in cited if normalize(c) not in ledger_values]
    if orphans:
        raise OverLedgerError(f&quot;cites facts not in ledger: {orphans}&quot;)
</code></pre>
<p>Hallucination doesn't get prompted away; it gets <strong>designed out of the reachable space</strong>. This is the same instinct as compiling against a type system instead of hoping your strings line up at runtime. You move the guarantee from &quot;the model was careful&quot; to &quot;the model couldn't have done otherwise.&quot;</p>
<h2>One model extracts; a <em>different</em> model verifies</h2>
<p>Here's the part people skip: the ledger itself can be hallucinated. The extractor is also an LLM, and it can confidently log a fact that isn't there. So the ledger is not built by one model in one pass.</p>
<p>A second model — a <em>different</em> family, deliberately — independently verifies each fact against the source and returns a verdict with <em>its own</em> observed locator:</p>
<pre><code class="language-python">VERDICTS = {&quot;confirm&quot;, &quot;refute&quot;, &quot;uncertain&quot;}

def cross_verify(fact, source_docs, verifier):
    &quot;&quot;&quot;Verifier is a different vendor than the extractor.&quot;&quot;&quot;
    out = verifier.check(
        claim=fact.value,
        expected_at=fact.locator,
        documents=source_docs,
    )
    assert out.verdict in VERDICTS
    if out.verdict == &quot;refute&quot;:
        ledger.drop(fact.fact_id)            # never reaches an author
    elif out.verdict == &quot;uncertain&quot;:
        ledger.flag_for_human(fact.fact_id)  # escalate, don't average
    else:
        fact.observed_locator = out.locator  # second witness agrees
    return out
</code></pre>
<p>Crucially, disagreements are not averaged into a confidence score and waved through. A <code>refute</code> removes the fact; an <code>uncertain</code> escalates to a human. The point of using a different vendor is the same reason you don't let one model both write and grade an exam: a model is far better at catching another model's mistakes than its own. Cross-vendor verification is cheap relative to shipping a benchmark built on a fact that was never on the page.</p>
<h2>Aliases and redactions: the entity that wears three names</h2>
<p>Real documents refer to the same thing many ways — a company and its ticker, a counterparty and its redacted codename, a subsidiary named in full on page 2 and by initials on page 40. If the ledger treats those as three different entities, two bad things happen. You can write a question whose &quot;correct&quot; answer depends on a mapping the documents never actually establish (undecidable), or you can accidentally <em>leak</em> the mapping and make a hard question trivial.</p>
<p>So there's an explicit <strong>alias-merge</strong> step that canonicalizes entities and checks redactions are consistent across files:</p>
<pre><code class="language-json">{
  &quot;canonical&quot;: &quot;Project Atlas (Target)&quot;,
  &quot;surface_forms&quot;: [&quot;Atlas&quot;, &quot;the Target&quot;, &quot;PA Holdings&quot;, &quot;[REDACTED-A]&quot;],
  &quot;redaction_consistent&quot;: true
}
</code></pre>
<p>If a name is masked in one document, it must not sit in plaintext in another. This is unglamorous bookkeeping that quietly determines whether a multi-document question is fair.</p>
<h2>Must-hit points, and the hardest question type of all</h2>
<p>For each question, the ledger pins <strong>3–5 must-hit points</strong> — the specific facts a correct answer is required to use:</p>
<pre><code class="language-json">{
  &quot;question_id&quot;: &quot;q_07&quot;,
  &quot;must_hit&quot;: [&quot;f_0142&quot;, &quot;f_0090&quot;, &quot;f_0211&quot;],
  &quot;spans_files&quot;: [&quot;Model_v3.xlsx&quot;, &quot;CIM.pdf&quot;, &quot;Credit_Agreement.pdf&quot;]
}
</code></pre>
<p>This does double duty. It's a <em>difficulty lever</em>: force a question to touch facts that live in three different files and the model can no longer succeed by skimming one. And it's a <em>gradeable spec</em>: the rubric later checks for exactly those must-hits, so &quot;did the model actually do the work&quot; becomes a concrete, checkable property rather than a vibe.</p>
<p>The ledger also records the inverse — <strong>uncertain boundaries</strong>, the things the documents do <em>not</em> let you conclude. That unlocks the question type I find most revealing: items whose correct answer is <strong>&quot;this cannot be uniquely determined from the materials.&quot;</strong> A capable model recognizes the boundary and says so; a model that pattern-matches its way to a confident number fails.</p>
<pre><code class="language-json">{
  &quot;question_id&quot;: &quot;q_11&quot;,
  &quot;type&quot;: &quot;undecidable&quot;,
  &quot;expected&quot;: &quot;Cannot be determined: the synergy phasing is only given as a 3-year total (Deck p.14); the annual split required to compute Year-1 accretion is never disclosed.&quot;,
  &quot;trap_fact&quot;: &quot;f_0233&quot;
}
</code></pre>
<p>You can only write these <em>safely</em> if you've mapped the boundary first — and mapping the boundary is exactly what the ledger's caveats and uncertain-fields are for. Without a ledger, an &quot;insufficient information&quot; question is just a trap you might have set on yourself.</p>
<h2>What a useful ledger produces</h2>
<p>The ledger is not only a guardrail for generation. If it is designed well, it becomes a review package that several different people can use for different jobs:</p>
<table>
<thead>
<tr>
<th>Consumer</th>
<th>What they need from the ledger</th>
</tr>
</thead>
<tbody>
<tr>
<td>Question author</td>
<td>Which facts can be used, which facts conflict, and which boundaries must not be crossed</td>
</tr>
<tr>
<td>Rubric author</td>
<td>The must-hit facts that define a complete answer</td>
</tr>
<tr>
<td>Judge / verifier</td>
<td>The evidence locations needed to confirm or refute a model response</td>
</tr>
<tr>
<td>Domain reviewer</td>
<td>A short path from disputed claim → source file → page/sheet/cell</td>
</tr>
<tr>
<td>Dataset owner</td>
<td>A record of why the item is answerable, hard, and not leaking the answer</td>
</tr>
</tbody>
</table>
<p>That last line matters. A benchmark item should not ship with only a prompt and an answer. It should ship with an <em>audit trail</em>. If an evaluator later asks why the answer is correct, why a near-miss should lose points, or why the task is not guessable, the evidence ledger should already contain the argument.</p>
<p>The minimum useful artifact looks like this:</p>
<pre><code class="language-json">{
  &quot;item_id&quot;: &quot;public_item_042&quot;,
  &quot;source_files&quot;: [&quot;deck.pdf&quot;, &quot;model.xlsx&quot;, &quot;memo.docx&quot;],
  &quot;facts&quot;: [
    {
      &quot;fact_id&quot;: &quot;f_001&quot;,
      &quot;claim&quot;: &quot;The margin used in the model is 18.4%.&quot;,
      &quot;locator&quot;: &quot;model.xlsx::Summary!C27&quot;,
      &quot;verified_by&quot;: &quot;independent_reader&quot;,
      &quot;status&quot;: &quot;confirmed&quot;
    }
  ],
  &quot;must_hit&quot;: [&quot;f_001&quot;, &quot;f_009&quot;, &quot;f_014&quot;],
  &quot;known_traps&quot;: [
    &quot;deck and model use different units&quot;,
    &quot;memo gives a range, not a point estimate&quot;
  ],
  &quot;undecidable_boundaries&quot;: [
    &quot;annual phasing is not disclosed&quot;
  ]
}
</code></pre>
<p>Notice what is <em>not</em> in the artifact: vendor-specific prompts, private file paths, internal stage names, or implementation details that would let a future model fingerprint the data-generation pipeline. Publicly, the useful idea is the contract. Privately, the implementation can evolve.</p>
<h2>Implementation checklist</h2>
<p>If I were adding an evidence ledger to a generation pipeline from scratch, I would start with this checklist:</p>
<ol>
<li><strong>Normalize the files before extraction.</strong> Convert PDFs, spreadsheets, docs, and images into stable text/table views, but keep a pointer back to the original source. A normalized table without a way back to the source is not evidence.</li>
<li><strong>Extract claims, not paragraphs.</strong> A ledger row should be a claim that can be confirmed or refuted. &quot;The deck discusses revenue growth&quot; is too soft; &quot;2025E revenue is shown as $42.1m on page 12&quot; is useful.</li>
<li><strong>Require locators at write time.</strong> Do not let the author cite a number and find its evidence later. Evidence first, question second.</li>
<li><strong>Separate extractor and verifier.</strong> The verifier should have no incentive to agree with the extractor. If possible, use a different model family or at least a different prompt and role.</li>
<li><strong>Track contradictions explicitly.</strong> A conflict between two files is not noise; it is often the most interesting part of the task. Record it as a caveat rather than smoothing it away.</li>
<li><strong>Make unsupported claims fail closed.</strong> If a claim cannot be traced, the item should not ship. Do not downgrade this to a warning because the text &quot;sounds right.&quot;</li>
<li><strong>Preserve negative evidence.</strong> The fact that a document <em>does not</em> disclose something is also evidence, especially for insufficient-information questions.</li>
</ol>
<p>The ledger is successful when an author can write a hard question without inventing, a reviewer can challenge it without guessing, and a grader can score it without doing a full forensic investigation every time.</p>
<h2>Failure modes to watch</h2>
<p>The ledger can fail too. These are the ones I would audit first:</p>
<ul>
<li><strong>Locator drift.</strong> The extracted text points to the right sentence, but the locator points to the wrong page or cell after a file conversion step. The cure is rendering or opening the source during verification, not trusting the normalized copy.</li>
<li><strong>Fact granularity mismatch.</strong> A single ledger row contains three claims, one of which is unsupported. Split rows until each can be independently judged.</li>
<li><strong>Alias leakage.</strong> The ledger silently merges two entity names that the candidate should have had to reconcile. Make alias decisions visible.</li>
<li><strong>Over-cleaning.</strong> The pipeline &quot;fixes&quot; conflicting source material into one neat value. That destroys exactly the ambiguity the task may be meant to test.</li>
<li><strong>Rubric drift.</strong> The final rubric rewards facts that are not in <code>must_hit</code>. That means the item and the ledger have diverged.</li>
</ul>
<p>The review question is simple: if I delete the author model's prose and keep only the ledger, can a competent person reconstruct why the item is valid? If not, the ledger is not doing enough work.</p>
<h2>The unsexy artifact that makes everything else defensible</h2>
<p>None of this is flashy. The ledger is a JSON file full of values and locators that no one will ever see in the final benchmark. But it's the difference between <em>&quot;a model wrote some questions&quot;</em> and <em>&quot;a benchmark where every number is traceable to a page and was verified by an independent model.&quot;</em> When a domain expert disputes an item, you don't argue — you open the locator. When a question's answer is challenged, the chain from answer to evidence is already written down.</p>
<p>In generation, as in answering, the dangerous hallucination is the confident one. The evidence ledger is how you make confidence earn its place: nothing enters a question until it has an address in the source and a second model has gone and looked.</p>
`,By=`<h1>证据账本：让 LLM 写出它无法编造的题目</h1>
<p>大多数人担心 LLM 编造<strong>答案</strong>。但如果你做评测数据，更可怕的失效是 LLM 编造<strong>题目</strong>。</p>
<p>我的工作是给前沿模型生成高难度、以文档为依据的考题——把一堆真实的表格、财报、备忘录扔给模型，让它跨文件推理。整件事的前提就是：模型不真读文件就答不出来。可流水线有一种很安静的自我背叛：<strong>出题的模型</strong>编了一个&quot;看起来像是来自文档&quot;的数字。于是你的 benchmark 里出现了一道题，它锚定的事实根本不存在——这道题要么无解，要么只能靠和出题模型一样的幻觉去解。这种坏题不会让任何东西崩溃，它只是悄悄地烂掉你的测量。</p>
<p>你没法靠 prompt 绕过它。&quot;不要编数字&quot;是一种祈愿，不是一种约束。解法必须是<strong>结构性的</strong>，而我反复回到的那个结构，叫<strong>证据账本（evidence ledger）</strong>。</p>
<h2>账本横在文档与题目之间</h2>
<p>账本是一个中间产物。在写任何题目之前，流水线先读源文件，产出一份<strong>事实清单</strong>；而出题者<strong>只被允许引用账本里的事实</strong>。任何不在账本里的东西，对出题这件事来说就等于不存在。</p>
<p>具体地，每条事实是一行，带 value、locator、caveat：</p>
<pre><code class="language-json">{
  &quot;fact_id&quot;: &quot;f_0142&quot;,
  &quot;value&quot;: &quot;EBITDA margin = 18.4%&quot;,
  &quot;locator&quot;: { &quot;file&quot;: &quot;Model_v3.xlsx&quot;, &quot;sheet&quot;: &quot;Summary&quot;, &quot;cell&quot;: &quot;C27&quot; },
  &quot;unit&quot;: &quot;percent&quot;,
  &quot;caveat&quot;: &quot;Model tab 以美元百万为单位；Deck（p.11）把它在协同前重述为 17.9%。&quot;,
  &quot;verdict&quot;: &quot;confirm&quot;
}
</code></pre>
<p><strong>locator</strong> 是最承重的字段。没有 locator 的值，只是模型的一面之词；有 locator 的值，可以被重新打开、重新读、被质疑——被另一个模型、被人工 reviewer、被之后必须核对参考答案的 grader。所有下游需要&quot;可信&quot;的东西，都挂在这一个字段上。而<strong>caveat</strong> 正是难度所在：某个数字在两个 tab 之间从&quot;千&quot;切到&quot;百万&quot;、deck 和底层 model 对不上、脚注里悄悄限定了这个数的口径。</p>
<h2>出题者只能花它被发的那些事实</h2>
<p>账本一旦存在，生成的性质就变了。出题者不再是&quot;读文档、写题目&quot;——那是一个有无限漂移空间的过程；它变成了<strong>从一个固定预算里花事实</strong>。如果一道题需要一个数字，这个数字必须是一条账本条目，也就意味着它有 locator，也就意味着它真的在文件里。</p>
<p>这一点可以机械地强制。一道题被接受之前，它引用的每个数字都要匹配回某个 <code>fact_id</code>：</p>
<pre><code class="language-python">def validate_item(item, ledger):
    cited = extract_quantities(item.question + item.reference_answer)
    ledger_values = {normalize(f.value) for f in ledger.facts}
    orphans = [c for c in cited if normalize(c) not in ledger_values]
    if orphans:
        raise OverLedgerError(f&quot;引用了账本外的事实: {orphans}&quot;)
</code></pre>
<p>幻觉不是被 prompt 劝退的，而是<strong>从可达空间里被设计掉的</strong>。这和&quot;用类型系统去编译、而不是祈祷运行时字符串能对上&quot;是同一个直觉。你把保证从&quot;模型很小心&quot;挪到了&quot;模型根本没法不这样做&quot;。</p>
<h2>一个模型抽取，另一个<strong>不同的</strong>模型核验</h2>
<p>接下来是大多数人会跳过的部分：账本本身也可能是幻觉。抽取器也是个 LLM，它完全可能自信地记下一条根本不存在的事实。所以账本不是一个模型一遍跑出来的。</p>
<p>第二个模型——刻意选<strong>不同的厂商</strong>——独立地对照源文件核验每条事实，返回一个带<strong>它自己</strong>观测到的 locator 的 verdict：</p>
<pre><code class="language-python">VERDICTS = {&quot;confirm&quot;, &quot;refute&quot;, &quot;uncertain&quot;}

def cross_verify(fact, source_docs, verifier):
    &quot;&quot;&quot;verifier 与抽取器是不同厂商。&quot;&quot;&quot;
    out = verifier.check(
        claim=fact.value,
        expected_at=fact.locator,
        documents=source_docs,
    )
    assert out.verdict in VERDICTS
    if out.verdict == &quot;refute&quot;:
        ledger.drop(fact.fact_id)            # 永远到不了出题者手里
    elif out.verdict == &quot;uncertain&quot;:
        ledger.flag_for_human(fact.fact_id)  # 升级人工，而不是平均掉
    else:
        fact.observed_locator = out.locator  # 第二个证人也指向同一处
    return out
</code></pre>
<p>关键在于：分歧不会被平均成一个 confidence 分然后放行。<code>refute</code> 直接删掉这条事实；<code>uncertain</code> 升级给人看。用不同厂商的理由，和&quot;不让同一个模型既出题又判分&quot;是一样的：一个模型挑另一个模型的错，远比挑自己的错在行。相比交付一个建立在&quot;根本不在页面上的事实&quot;之上的 benchmark，cross-vendor 核验便宜得多。</p>
<h2>别名与脱敏：那个有三个名字的实体</h2>
<p>真实文档会用很多种方式指代同一个东西——公司和它的股票代码、交易对手和它脱敏后的代号、第 2 页写全称、第 40 页只写缩写的子公司。如果账本把它们当成三个不同实体，两件坏事就会发生：你可能写出一道&quot;正确答案依赖于文档从未真正建立的某个映射&quot;的题（不可判定），或者你不小心<strong>泄漏</strong>了这个映射，把一道难题变成送分题。</p>
<p>所以有一个显式的 <strong>alias-merge</strong> 步骤，把实体归一化，并检查脱敏在文件之间一致：</p>
<pre><code class="language-json">{
  &quot;canonical&quot;: &quot;Project Atlas (Target)&quot;,
  &quot;surface_forms&quot;: [&quot;Atlas&quot;, &quot;the Target&quot;, &quot;PA Holdings&quot;, &quot;[REDACTED-A]&quot;],
  &quot;redaction_consistent&quot;: true
}
</code></pre>
<p>一个名字若在一处被遮蔽，就不该在另一处以明文躺着。这是不起眼的记账，却悄悄决定了一道多文档题公不公平。</p>
<h2>must-hit points，以及最难的那一类题</h2>
<p>对每道题，账本会钉住 <strong>3–5 个 must-hit points</strong>——正确答案被要求用到的那几条具体事实：</p>
<pre><code class="language-json">{
  &quot;question_id&quot;: &quot;q_07&quot;,
  &quot;must_hit&quot;: [&quot;f_0142&quot;, &quot;f_0090&quot;, &quot;f_0211&quot;],
  &quot;spans_files&quot;: [&quot;Model_v3.xlsx&quot;, &quot;CIM.pdf&quot;, &quot;Credit_Agreement.pdf&quot;]
}
</code></pre>
<p>这一手身兼两职。它是<strong>难度杠杆</strong>：逼一道题去触碰分散在三个文件里的事实，模型就再也没法靠扫一个文件蒙混过关。它也是<strong>可评分的 spec</strong>：之后 rubric 正好检查这几个 must-hit，于是&quot;模型到底有没有真的去做这件事&quot;就成了一个具体、可核验的属性，而不是凭感觉。</p>
<p>账本还记录它的反面——<strong>uncertain boundaries</strong>，也就是文档<strong>不</strong>让你得出的那些结论。这解锁了我觉得最能照出真本事的题型：正确答案是**&quot;凭现有材料无法唯一确定&quot;**的题。有能力的模型会识别出这个边界并明说；靠模式匹配硬凑出一个自信数字的模型则会翻车。</p>
<pre><code class="language-json">{
  &quot;question_id&quot;: &quot;q_11&quot;,
  &quot;type&quot;: &quot;undecidable&quot;,
  &quot;expected&quot;: &quot;无法确定：协同效应的分年节奏只给了 3 年总额（Deck p.14），计算 Year-1 增厚所需的逐年拆分从未披露。&quot;,
  &quot;trap_fact&quot;: &quot;f_0233&quot;
}
</code></pre>
<p>而你只有先把这个边界画出来，才能<strong>安全地</strong>写这种题——画边界，正是账本的 caveat 和 uncertain 字段在干的事。没有账本，一道&quot;资料不足&quot;题只是你可能给自己挖的坑。</p>
<h2>一个有用的账本应该产出什么</h2>
<p>证据账本不只是生成阶段的护栏。设计得足够好时，它会变成一份多人都能复用的审查包：</p>
<table>
<thead>
<tr>
<th>使用者</th>
<th>他需要账本提供什么</th>
</tr>
</thead>
<tbody>
<tr>
<td>出题者</td>
<td>哪些事实可用，哪些事实冲突，哪些边界不能跨</td>
</tr>
<tr>
<td>Rubric 作者</td>
<td>定义完整答案的 must-hit facts</td>
</tr>
<tr>
<td>Judge / verifier</td>
<td>核验模型回答所需的证据位置</td>
</tr>
<tr>
<td>领域 reviewer</td>
<td>从被质疑断言到源文件、页码、sheet/cell 的短路径</td>
</tr>
<tr>
<td>数据集 owner</td>
<td>证明这道题可回答、有难度、不泄漏答案的审计记录</td>
</tr>
</tbody>
</table>
<p>最后一行很重要。一个 benchmark item 不应该只带着题面和答案交付，它应该带着一条<strong>审计链</strong>交付。之后如果有人问&quot;为什么这个答案正确&quot;、&quot;为什么这个近似回答要扣分&quot;、&quot;为什么这题不能靠蒙&quot;，证据账本里应该已经写好了理由。</p>
<p>一份最小可用的产物大概长这样：</p>
<pre><code class="language-json">{
  &quot;item_id&quot;: &quot;public_item_042&quot;,
  &quot;source_files&quot;: [&quot;deck.pdf&quot;, &quot;model.xlsx&quot;, &quot;memo.docx&quot;],
  &quot;facts&quot;: [
    {
      &quot;fact_id&quot;: &quot;f_001&quot;,
      &quot;claim&quot;: &quot;模型中使用的 margin 是 18.4%。&quot;,
      &quot;locator&quot;: &quot;model.xlsx::Summary!C27&quot;,
      &quot;verified_by&quot;: &quot;independent_reader&quot;,
      &quot;status&quot;: &quot;confirmed&quot;
    }
  ],
  &quot;must_hit&quot;: [&quot;f_001&quot;, &quot;f_009&quot;, &quot;f_014&quot;],
  &quot;known_traps&quot;: [
    &quot;deck 和 model 使用的单位不同&quot;,
    &quot;memo 给的是范围，不是点估计&quot;
  ],
  &quot;undecidable_boundaries&quot;: [
    &quot;分年节奏没有披露&quot;
  ]
}
</code></pre>
<p>注意这份产物里<strong>不该</strong>出现什么：具体厂商 prompt、私有文件路径、内部阶段名、会让未来模型识别生成流水线的实现细节。公开层面有价值的是契约；私下实现可以继续演进。</p>
<h2>落地检查清单</h2>
<p>如果从零给一条生成流水线加证据账本，我会按这张清单做：</p>
<ol>
<li><strong>先标准化文件，再抽取。</strong> 把 PDF、表格、文档、图片转成稳定的文本/表格视图，但必须保留回到原文件的指针。没有回源能力的表格视图不是证据。</li>
<li><strong>抽 claim，不抽段落。</strong> 账本的一行应该是能被 confirm/refute 的断言。&quot;deck 讨论了收入增长&quot;太软；&quot;第 12 页显示 2025E revenue 为 $42.1m&quot;才有用。</li>
<li><strong>写题前就要求 locator。</strong> 不要先让作者引用数字，再事后找证据。先证据，后题面。</li>
<li><strong>分离 extractor 和 verifier。</strong> verifier 不应该有动机同意 extractor。最好换模型族，至少也要换 role 和 prompt。</li>
<li><strong>显式记录矛盾。</strong> 两个文件冲突不是噪声，往往正是题目的难点。把它写成 caveat，而不是平均掉。</li>
<li><strong>无证据断言 fail closed。</strong> 追不到源的 claim 不该交付。不要因为&quot;听起来对&quot;就降级成 warning。</li>
<li><strong>保留负证据。</strong> 文档没有披露某件事，本身也是证据，尤其对&quot;资料不足&quot;题型很关键。</li>
</ol>
<p>账本成功的标志是：出题者能写难题但不编造，reviewer 能挑战题目但不靠猜，grader 能判分但不用每次重新做取证。</p>
<h2>账本自身也会失效</h2>
<p>我会优先审计这些失效模式：</p>
<ul>
<li><strong>Locator 漂移。</strong> 抽取文本指向了正确句子，但文件转换后 locator 指到了错误页或单元格。解决办法是在核验时真实打开/渲染源文件，而不是信任中间文本。</li>
<li><strong>事实粒度过粗。</strong> 一行账本里塞了三个 claim，其中一个无证据。拆到每行都能独立判断。</li>
<li><strong>别名泄漏。</strong> 账本悄悄合并了候选模型本该自己推理出的两个实体名。alias 决策必须可见。</li>
<li><strong>过度清洗。</strong> 流水线把源材料里的冲突&quot;修正&quot;成一个整洁值。这会毁掉题目本来要测试的歧义。</li>
<li><strong>Rubric 漂移。</strong> 最终 rubric 奖励了不在 <code>must_hit</code> 里的事实，说明题目和账本已经分叉。</li>
</ul>
<p>审查问题很简单：如果删掉作者模型写的 prose，只保留账本，一个懂行的人还能不能重建这道题为什么有效？如果不能，账本还没承担足够多的工作。</p>
<h2>那个不起眼、却让一切站得住脚的产物</h2>
<p>这一切都不炫。账本是一个塞满 value 和 locator 的 JSON，最终 benchmark 里没人会看到它。但它就是**&quot;一个模型写了几道题&quot;<strong>和</strong>&quot;一个每个数字都能追溯到某一页、且被一个独立模型核验过的 benchmark&quot;**之间的区别。当领域专家质疑某道题，你不用争——你打开 locator。当一道题的答案被挑战，从答案到证据的链条早就写好了。</p>
<p>无论是生成还是答题，危险的幻觉都是那个自信的幻觉。证据账本，就是让&quot;自信&quot;必须先挣得它的位置：在一条信息拿到源文件里的地址、并且有第二个模型真的去看过之前，它进不了任何一道题。</p>
`,Wy=`<h1>Don't Trust Data You Generated Yourself: Adversarial QC for Synthetic Data</h1>
<p>Here's the uncomfortable thing about synthetic data: it is <em>plausible by construction</em>. The model that generated it is the same kind of model that will later be fooled by it. Plausibility isn't a sign of quality — it's the exact shape of the failure.</p>
<p>I've built pipelines that fabricate realistic, document-grounded cases — including synthetic medical records, each shipped as a bundle of <code>.docx</code> and <code>.xlsx</code> files with a grading rubric. A generated patient record can read perfectly: right disease, right tone, sensible labs. And it can still contain a hemoglobin that quietly contradicts its own hematocrit. A human skimming it nods. A model skimming it nods. The error survives precisely <em>because</em> everything looks right.</p>
<p>So the rule I work by: <strong>don't review your own data. Attack it.</strong></p>
<h2>Three roles, deliberately separated</h2>
<p>The architecture I keep returning to is Actor → Critic → Monitor (ACM), and the separation is the whole point.</p>
<ul>
<li><strong>Actor</strong> generates the case — the documents and the rubric.</li>
<li><strong>Critic</strong> is an adversary whose only job is to find what's <em>wrong</em>. It does not write prose praise. It emits <strong>structured findings</strong>.</li>
<li><strong>Monitor</strong> is the arbiter. It reads the findings and decides the next action, enforcing hard constraints rather than negotiating with the Actor.</li>
</ul>
<p>The Critic's output is structured on purpose — findings you can count, sort, and route are findings you can act on; a paragraph of &quot;looks mostly good&quot; is not:</p>
<pre><code class="language-json">{
  &quot;case_id&quot;: &quot;onc_4471&quot;,
  &quot;severity_counts&quot;: { &quot;critical&quot;: 1, &quot;major&quot;: 2, &quot;minor&quot;: 3 },
  &quot;findings&quot;: [
    {
      &quot;id&quot;: &quot;F1&quot;,
      &quot;severity&quot;: &quot;critical&quot;,
      &quot;category&quot;: &quot;derived_value_inconsistency&quot;,
      &quot;file&quot;: &quot;labs.xlsx&quot;,
      &quot;location&quot;: &quot;CBC!D8&quot;,
      &quot;detail&quot;: &quot;MCV 102 fL is inconsistent with HCT 0.31 / RBC 4.6 (implies ~67 fL).&quot;
    }
  ]
}
</code></pre>
<p>The Monitor consumes that and arbitrates — and notice it can only <em>revise</em>, <em>rework</em>, <em>resynthesize</em>, or <em>ship</em>; it cannot rationalize a critical away:</p>
<pre><code class="language-python">def monitor(findings):
    sev = findings[&quot;severity_counts&quot;]
    if sev[&quot;critical&quot;] &gt; 0:
        return &quot;rework&quot;            # must be fixed and re-reviewed
    if sev[&quot;major&quot;] &gt;= 3:
        return &quot;resynthesize&quot;      # too broken to patch; regenerate
    if sev[&quot;major&quot;] &gt; 0:
        return &quot;revise&quot;            # targeted edits, then re-review
    return &quot;ship&quot;
</code></pre>
<p>The reason the generator must not grade itself is the same reason you don't let a student mark their own exam. A model is unreservedly good at justifying what it just produced. You need a role whose incentive is to <em>disbelieve</em>.</p>
<h2>The payoff isn't the loop — it's the taxonomy</h2>
<p>Anyone can wire up a generate-then-check loop. What you actually get from running one at scale is something more valuable: a <strong>taxonomy of the specific ways self-generated data lies.</strong> Single-pass generators produce these defects relentlessly, and a human reviewer almost never catches them all by hand. Naming them is what lets QC become systematic.</p>
<p>The recurring offenders, roughly in order of how often they bite:</p>
<ul>
<li><strong>Derived-value inconsistency.</strong> Dependent quantities that don't reconcile. A computed ratio that contradicts the components it's built from; a lab value that doesn't fit the diagnosis it's supposed to support. The generator emits each number locally and never checks the arithmetic that ties them together. This is the number-one defect, and it's invisible to anyone reading casually. The good news: once you've named it, it's often <em>deterministically checkable</em>:</li>
</ul>
<pre><code class="language-python">def check_cbc(row):
    # MCV (fL) ≈ HCT / RBC × 1000, with RBC in 10^12/L
    implied_mcv = (row.hct / row.rbc) * 1000
    if abs(implied_mcv - row.mcv) &gt; 5:
        yield Finding(&quot;critical&quot;, &quot;derived_value_inconsistency&quot;,
                      f&quot;MCV {row.mcv} vs implied {implied_mcv:.0f}&quot;)
</code></pre>
<ul>
<li><strong>Cross-file consistency locks.</strong> The same fact has to agree <em>everywhere it appears</em> — a date in the <code>.docx</code> and the <code>.xlsx</code>, a patient ID across three files, a total versus the rows it sums. Generators write each file in its own little context and drift; treat shared facts as a lock every file must satisfy:</li>
</ul>
<pre><code class="language-python">def check_locks(files, locked_fields=(&quot;patient_id&quot;, &quot;admit_date&quot;, &quot;dob&quot;)):
    for field in locked_fields:
        values = {f.name: f.get(field) for f in files if f.has(field)}
        if len(set(values.values())) &gt; 1:
            yield Finding(&quot;critical&quot;, &quot;cross_file_conflict&quot;,
                          f&quot;{field} disagrees across files: {values}&quot;)
</code></pre>
<ul>
<li><strong>Timeline coherence.</strong> Events, report dates, and even file-modified timestamps that can't physically co-exist — a result dated before the test that produced it, a discharge before an admission, or the tell-tale sign of synthesis: <em>everything</em> dated today.</li>
<li><strong>Template / cross-category contamination.</strong> A case wearing the wrong document's skeleton — an oncology workup built from a cardiology template, lab results sitting in a prose document instead of the spreadsheet they belong in. It's the structural fingerprint of &quot;generated, not lived.&quot;</li>
<li><strong>Provenance &amp; watermark leakage.</strong> Authorship metadata, generator fingerprints, absolute file paths, internal benchmark markers — anything that lets a <em>trained</em> model recognize &quot;this is synthetic&quot; or &quot;this came from dataset X&quot; and pattern-match instead of reasoning. Leakage doesn't fail the case; it fails the entire benchmark by making it gameable.</li>
<li><strong>File integrity.</strong> The boring, fatal one: files that won't even open because of write-library residue, or tables that overflow the page. An unopenable <code>.xlsx</code> is a zero no matter how good the content is.</li>
</ul>
<p>If your QC isn't explicitly hunting each of these, it's not doing QC — it's doing a vibe check.</p>
<h2>Make the QC compound</h2>
<p>The trick that turns this from expensive into <em>valuable</em> is simple: every defect the Critic catches becomes a reusable, named <strong>bad-pattern detector</strong>. The cheap, deterministic ones run as code before you ever spend a token on a model; the judgment calls go to the Critic with the named pattern attached.</p>
<pre><code class="language-python">BAD_PATTERNS = []

def detector(category, severity):
    def register(fn):
        BAD_PATTERNS.append((category, severity, fn))
        return fn
    return register

@detector(&quot;file_integrity&quot;, &quot;critical&quot;)
def opens_cleanly(case):
    for f in case.office_files:
        if not can_open(f):           # openpyxl / python-docx round-trip
            yield f&quot;{f.name} fails to open&quot;

def run_cheap_checks(case):
    return [(cat, sev, msg)
            for cat, sev, fn in BAD_PATTERNS
            for msg in fn(case)]
</code></pre>
<p>That changes the economics. A model's freelance judgment doesn't accumulate; a growing library of named failure modes does. Your QC gets measurably smarter every week, and — just as important — you can <em>tell a new team member exactly what &quot;good&quot; means</em>, because it's a checklist, not a feeling.</p>
<h2>Spend your expensive model where judgment lives</h2>
<p>Not every role needs your best model. Finding a corrupted spreadsheet or a leaked path is cheap, mechanical work — run it as code, or use a small, fast model. Adjudicating whether a borderline clinical presentation is realistic enough to ship is genuine judgment — that's where the expensive arbiter earns its cost. Matching model strength to the difficulty of the call is most of how you keep an adversarial loop affordable at scale.</p>
<h2>The same pressure belongs on the rubric</h2>
<p>One more place the adversary has to look: the rubric itself. A rubric that any reader could satisfy isn't testing anything. So the same loop rebalances it — enough positive checks to discriminate, negative checks that are capped so a single penalty can't dominate, and <em>no leakage in the rubric text</em>:</p>
<pre><code class="language-python">def rubric_is_healthy(rubric):
    pos = [c for c in rubric if c.weight &gt; 0]
    neg = [c for c in rubric if c.weight &lt; 0]
    assert len(pos) &gt;= 2 * len(neg), &quot;not enough positive signal&quot;
    assert all(abs(c.weight) &lt;= 0.5 * sum(p.weight for p in pos) for c in neg), \\
        &quot;a single penalty can dominate the score&quot;
    assert not any(leaks_path_or_answer(c.text) for c in rubric), \\
        &quot;rubric text leaks the answer&quot;
</code></pre>
<p>A case is only as good as the rubric that grades it, and rubrics drift toward &quot;easy to pass&quot; unless something actively pushes back.</p>
<h2>The practical runbook</h2>
<p>An ACM loop becomes useful when it is boring enough to run repeatedly. The runbook I would hand to another team looks like this:</p>
<ol>
<li><strong>Define the contract before generation.</strong> What files must exist? Which fields must be consistent across files? Which rubric constraints are non-negotiable?</li>
<li><strong>Generate with explicit locked facts.</strong> IDs, dates, totals, names, and derived quantities should be declared once and then reused, not re-invented per file.</li>
<li><strong>Run cheap deterministic checks first.</strong> File openability, table dimensions, date ordering, required fields, checksum-like consistency locks, and simple arithmetic should not wait for an LLM.</li>
<li><strong>Send the case to a Critic with named failure modes.</strong> Do not ask &quot;is this good?&quot; Ask it to find derived-value errors, timeline errors, rubric leakage, and template contamination.</li>
<li><strong>Let the Monitor decide the route.</strong> The generator should not get to argue that a critical finding is acceptable. The monitor returns revise, rework, resynthesize, or pass.</li>
<li><strong>Patch only when the defect is local.</strong> If the same case has multiple structural conflicts, regenerate. Local editing often creates a second-order inconsistency.</li>
<li><strong>Archive the findings.</strong> The defects are training data for your QC system. If you do not store them, the loop does not learn.</li>
</ol>
<p>The operational principle is simple: use code for things that can be calculated, use a cheap reviewer for things that can be spotted, and reserve the strongest model for calls that require judgment.</p>
<h2>What the output should look like</h2>
<p>The final delivery should include more than files and a rubric. A reviewable synthetic case needs an accompanying QC record:</p>
<pre><code class="language-yaml">case_id: public_case_118
files:
  - clinical_note.docx
  - labs.xlsx
  - scoring_rubric.json
deterministic_checks:
  file_integrity: pass
  cross_file_locks: pass
  derived_values: pass
critic_findings:
  critical: 0
  major: 1
  minor: 2
monitor_decision: revise_then_pass
rubric_checks:
  answerable_from_files: pass
  no_path_or_metadata_leakage: pass
  penalties_capped: pass
release_notes:
  - &quot;minor date-format inconsistency normalized&quot;
  - &quot;rubric criterion split into two atomic criteria&quot;
</code></pre>
<p>This record is not bureaucracy. It lets you debug the dataset later. If a model fails an item, you can distinguish &quot;the model missed the evidence&quot; from &quot;the synthetic case was internally inconsistent.&quot; If a reviewer challenges a rubric, you can show the pass/fail logic instead of re-litigating the whole case.</p>
<h2>Definition of done</h2>
<p>For self-generated data, &quot;done&quot; cannot mean &quot;the files look realistic.&quot; My threshold is stricter:</p>
<ul>
<li>Every file opens cleanly with the tools the evaluator will actually use.</li>
<li>Shared facts agree across all files where they appear.</li>
<li>Derived quantities reconcile within a domain-appropriate tolerance.</li>
<li>Timelines are physically possible and not suspiciously uniform.</li>
<li>The rubric is answerable from the files and does not leak the answer.</li>
<li>Negative criteria are capped so one penalty cannot dominate the score.</li>
<li>Metadata, paths, and generation fingerprints are scrubbed.</li>
<li>The Critic's findings are either fixed or explicitly accepted by the Monitor.</li>
</ul>
<p>If any of those are missing, the case may still be plausible, but it is not delivery-grade.</p>
<h2>The lesson generalizes</h2>
<p>Generation is easy now; it's commoditized. <strong>Adversarial verification at scale is the moat.</strong> And the lesson isn't about medical data — it's about any dataset you generated yourself. It will lie to you in plausible-looking ways, and no amount of careful prompting fixes that, because the thing producing the data and the thing reviewing it share the same blind spots. The only durable defense is to build something whose entire job is to disbelieve — and then to remember everything it catches.</p>
`,Uy=`<h1>别信你自己生成的数据：合成数据的对抗式质检</h1>
<p>合成数据有一件让人不安的事：它<strong>天生就显得合理</strong>。生成它的那个模型，和之后会被它骗到的那个模型，是同一类模型。&quot;显得合理&quot;不是质量的信号——它恰恰就是失效的形状。</p>
<p>我搭过一些流水线，专门生成逼真、以文档为依据的 case——包括合成病历，每份都打包成一组 <code>.docx</code> 和 <code>.xlsx</code>，配一份评分 rubric。一份生成的病历可以读起来天衣无缝：病种对、语气对、化验值也合理。但它仍然可能藏着一个和自己 hematocrit 悄悄矛盾的 hemoglobin。人扫一眼，点头；模型扫一眼，也点头。这个错误能活下来，<strong>正是因为</strong>一切都看起来对。</p>
<p>所以我奉行的规则是：<strong>不要 review 你自己的数据，去攻击它。</strong></p>
<h2>三个角色，刻意分开</h2>
<p>我反复回到的架构是 Actor → Critic → Monitor（ACM），而&quot;分开&quot;本身就是重点。</p>
<ul>
<li><strong>Actor</strong> 生成 case——文档和 rubric。</li>
<li><strong>Critic</strong> 是个对手，唯一的工作就是找出哪里<strong>错了</strong>。它不写赞美的散文，它产出<strong>结构化的 findings</strong>。</li>
<li><strong>Monitor</strong> 是仲裁者。它读 findings，裁决下一步动作，强制硬性约束，而不是和 Actor 讨价还价。</li>
</ul>
<p>Critic 的输出刻意做成结构化——能数、能排序、能路由的 finding 才是能行动的 finding；一段&quot;整体看着还行&quot;什么都不是：</p>
<pre><code class="language-json">{
  &quot;case_id&quot;: &quot;onc_4471&quot;,
  &quot;severity_counts&quot;: { &quot;critical&quot;: 1, &quot;major&quot;: 2, &quot;minor&quot;: 3 },
  &quot;findings&quot;: [
    {
      &quot;id&quot;: &quot;F1&quot;,
      &quot;severity&quot;: &quot;critical&quot;,
      &quot;category&quot;: &quot;derived_value_inconsistency&quot;,
      &quot;file&quot;: &quot;labs.xlsx&quot;,
      &quot;location&quot;: &quot;CBC!D8&quot;,
      &quot;detail&quot;: &quot;MCV 102 fL 与 HCT 0.31 / RBC 4.6 矛盾（推得约 67 fL）。&quot;
    }
  ]
}
</code></pre>
<p>Monitor 消费它并仲裁——注意它只能 <em>revise / rework / resynthesize / ship</em>，没法把一个 critical 辩解掉：</p>
<pre><code class="language-python">def monitor(findings):
    sev = findings[&quot;severity_counts&quot;]
    if sev[&quot;critical&quot;] &gt; 0:
        return &quot;rework&quot;            # 必须修复并重新 review
    if sev[&quot;major&quot;] &gt;= 3:
        return &quot;resynthesize&quot;      # 烂到没法补，重新生成
    if sev[&quot;major&quot;] &gt; 0:
        return &quot;revise&quot;            # 定点修改后再 review
    return &quot;ship&quot;
</code></pre>
<p>生成者不能给自己判分，理由和&quot;不让学生批自己的卷子&quot;一样：一个模型为它刚产出的东西辩护起来毫无保留。你需要一个<strong>激励是去怀疑</strong>的角色。</p>
<h2>真正的收获不是那个 loop，而是一张分类学</h2>
<p>把&quot;生成—检查&quot; loop 接起来，谁都会。真正从大规模跑这个 loop 里拿到的，是更值钱的东西：一张<strong>关于&quot;自生成数据会以哪些具体方式撒谎&quot;的分类学</strong>。单轮生成器会不知疲倦地制造这些缺陷，而人工 reviewer 几乎永远没法靠手全抓住。给它们命名，才是让 QC 变得系统化的关键。</p>
<p>那些反复出现的惯犯，大致按咬人频率排序：</p>
<ul>
<li><strong>派生值不一致（Derived-value inconsistency）。</strong> 相互依赖的量对不上。一个算出来的比率和它所基于的分量矛盾；一个化验值撑不起它本该支持的诊断。生成器局部地吐出每个数字，从不检查把它们绑在一起的那套算术。这是头号缺陷，对随便看看的人完全隐形。好消息是：一旦命名，它往往是<strong>确定性可检查的</strong>：</li>
</ul>
<pre><code class="language-python">def check_cbc(row):
    # MCV (fL) ≈ HCT / RBC × 1000，RBC 单位 10^12/L
    implied_mcv = (row.hct / row.rbc) * 1000
    if abs(implied_mcv - row.mcv) &gt; 5:
        yield Finding(&quot;critical&quot;, &quot;derived_value_inconsistency&quot;,
                      f&quot;MCV {row.mcv} vs 推得 {implied_mcv:.0f}&quot;)
</code></pre>
<ul>
<li><strong>跨文件一致性锁（Cross-file consistency locks）。</strong> 同一个事实，在它出现的<strong>每一处</strong>都必须一致——<code>.docx</code> 和 <code>.xlsx</code> 里的日期、三个文件里的患者 ID、汇总和它求和的那些行。生成器在各自的小上下文里写每个文件，于是漂移；把共享事实当成一把每个文件都必须满足的锁：</li>
</ul>
<pre><code class="language-python">def check_locks(files, locked_fields=(&quot;patient_id&quot;, &quot;admit_date&quot;, &quot;dob&quot;)):
    for field in locked_fields:
        values = {f.name: f.get(field) for f in files if f.has(field)}
        if len(set(values.values())) &gt; 1:
            yield Finding(&quot;critical&quot;, &quot;cross_file_conflict&quot;,
                          f&quot;{field} 在文件间不一致: {values}&quot;)
</code></pre>
<ul>
<li><strong>时间线自洽（Timeline coherence）。</strong> 事件、报告日期、甚至文件修改时间戳，物理上不可能共存——结果的日期早于产生它的那次检查、出院早于入院，或者那个最典型的合成痕迹：<strong>所有东西</strong>都是今天的日期。</li>
<li><strong>模板 / 跨类污染（Template / cross-category contamination）。</strong> 一份 case 套着错误文档的骨架——拿心内科模板搭出来的肿瘤 workup、化验结果躺在散文文档里而不是它本该在的表格里。这是&quot;被生成、而非被经历&quot;的结构性指纹。</li>
<li><strong>来源 / 水印泄漏（Provenance &amp; watermark leakage）。</strong> 作者元数据、生成器指纹、绝对路径、内部 benchmark 标记——任何能让一个<strong>被训练过的</strong>模型认出&quot;这是合成的&quot;或&quot;这来自数据集 X&quot;、从而去模式匹配而不是推理的东西。泄漏不会让单个 case 失败，它会让<strong>整个 benchmark</strong> 失败，因为它变得可以被刷。</li>
<li><strong>文件完整性（File integrity）。</strong> 那个无聊却致命的：因为写库残留而根本打不开的文件，或撑爆页面的表格。一个打不开的 <code>.xlsx</code>，内容再好也是零分。</li>
</ul>
<p>如果你的 QC 没有在显式地猎杀上面每一项，它就不是在做 QC，而是在凭感觉点头。</p>
<h2>让 QC 会复利</h2>
<p>把这件事从&quot;昂贵&quot;变成&quot;<strong>值钱</strong>&quot;的诀窍很简单：Critic 抓到的每一个缺陷，都变成一个可复用、有名字的 <strong>bad-pattern detector</strong>。廉价、确定性的那些直接作为代码跑，在你给模型花任何一个 token 之前就跑掉；需要判断的那些，则带着具名 pattern 交给 Critic。</p>
<pre><code class="language-python">BAD_PATTERNS = []

def detector(category, severity):
    def register(fn):
        BAD_PATTERNS.append((category, severity, fn))
        return fn
    return register

@detector(&quot;file_integrity&quot;, &quot;critical&quot;)
def opens_cleanly(case):
    for f in case.office_files:
        if not can_open(f):           # openpyxl / python-docx 往返
            yield f&quot;{f.name} 打不开&quot;

def run_cheap_checks(case):
    return [(cat, sev, msg)
            for cat, sev, fn in BAD_PATTERNS
            for msg in fn(case)]
</code></pre>
<p>这改变了经济账。模型的临场判断不会累积，一个不断变长的&quot;具名失效模式&quot;库会累积。你的 QC 每周都肉眼可见地变聪明；而且同样重要的是，你能<strong>准确地告诉一个新同事&quot;好&quot;到底是什么意思</strong>——因为那是一张清单，不是一种感觉。</p>
<h2>把你昂贵的模型用在判断真正发生的地方</h2>
<p>不是每个角色都需要你最强的模型。找出一个损坏的表格、一条泄漏的路径，是廉价、机械的活——直接用代码跑，或用一个又小又快的模型。裁决一个临界的临床表现&quot;是否真实到可以交付&quot;，才是真正的判断——那才是昂贵的仲裁者挣回它成本的地方。把模型强度匹配到这次裁决的难度，基本上就是你如何让一个对抗式 loop 在规模上还付得起钱。</p>
<h2>同样的压力也该压在 rubric 上</h2>
<p>对手还有一个必须看的地方：rubric 本身。一份任何读者都能满足的 rubric，什么都没测到。所以同一个 loop 也会去重新平衡它——足够多的正向检查以保证区分度、被 cap 住的负向检查以免单个惩罚一手遮天、以及 rubric 文本里不能有泄漏：</p>
<pre><code class="language-python">def rubric_is_healthy(rubric):
    pos = [c for c in rubric if c.weight &gt; 0]
    neg = [c for c in rubric if c.weight &lt; 0]
    assert len(pos) &gt;= 2 * len(neg), &quot;正向信号不足&quot;
    assert all(abs(c.weight) &lt;= 0.5 * sum(p.weight for p in pos) for c in neg), \\
        &quot;单个惩罚能一手遮天&quot;
    assert not any(leaks_path_or_answer(c.text) for c in rubric), \\
        &quot;rubric 文本泄漏了答案&quot;
</code></pre>
<p>一份 case 的上限，就是给它判分的那份 rubric；而 rubric 会朝着&quot;容易通过&quot;漂移，除非有东西在主动顶回去。</p>
<h2>实操 runbook</h2>
<p>ACM loop 只有在足够无聊、能反复跑时才有价值。我会把这份 runbook 交给另一个团队：</p>
<ol>
<li><strong>生成前先定义契约。</strong> 必须有哪些文件？哪些字段必须跨文件一致？哪些 rubric 约束不可谈判？</li>
<li><strong>用 locked facts 生成。</strong> ID、日期、总额、姓名、派生量应该先声明一次，再被复用；不要让每个文件各自重新发明。</li>
<li><strong>先跑廉价确定性检查。</strong> 文件能否打开、表格尺寸、日期顺序、必填字段、一致性锁、简单算术，不该等 LLM 来看。</li>
<li><strong>把 case 交给带具名失效模式的 Critic。</strong> 不要问&quot;这好不好&quot;；要让它找派生值错误、时间线错误、rubric 泄漏、模板污染。</li>
<li><strong>让 Monitor 决定路径。</strong> 生成器不该有权辩称 critical finding 可以接受。Monitor 只能返回 revise、rework、resynthesize、pass。</li>
<li><strong>只有局部缺陷才 patch。</strong> 如果同一 case 有多个结构性冲突，重生成。局部编辑很容易制造二阶不一致。</li>
<li><strong>归档 findings。</strong> 这些缺陷是 QC 系统自己的训练数据。不存下来，loop 就不会学习。</li>
</ol>
<p>操作原则很简单：能算的交给代码，能看出来的交给便宜 reviewer，真正需要判断的裁决才交给最强模型。</p>
<h2>最终产物应该长什么样</h2>
<p>交付不应该只有文件和 rubric。一份可审查的合成 case，应该附带 QC record：</p>
<pre><code class="language-yaml">case_id: public_case_118
files:
  - clinical_note.docx
  - labs.xlsx
  - scoring_rubric.json
deterministic_checks:
  file_integrity: pass
  cross_file_locks: pass
  derived_values: pass
critic_findings:
  critical: 0
  major: 1
  minor: 2
monitor_decision: revise_then_pass
rubric_checks:
  answerable_from_files: pass
  no_path_or_metadata_leakage: pass
  penalties_capped: pass
release_notes:
  - &quot;轻微日期格式不一致已归一&quot;
  - &quot;rubric criterion 已拆成两个原子标准&quot;
</code></pre>
<p>这不是官僚流程。它让你之后能 debug 数据集。如果某个模型在一道题上失败，你能区分&quot;模型没读到证据&quot;和&quot;合成 case 内部本来就矛盾&quot;。如果 reviewer 质疑 rubric，你能拿出通过/失败逻辑，而不是重新争论整份 case。</p>
<h2>Definition of done</h2>
<p>对自生成数据来说，&quot;完成&quot;不能等于&quot;文件看起来真实&quot;。我的门槛更严格：</p>
<ul>
<li>每个文件都能被评测器实际使用的工具正常打开。</li>
<li>共享事实在所有出现位置保持一致。</li>
<li>派生量在领域允许误差内能对上。</li>
<li>时间线物理上可能，且没有可疑的统一日期痕迹。</li>
<li>rubric 能从文件回答，且不泄漏答案。</li>
<li>负向 criteria 被 cap 住，单个惩罚不能统治总分。</li>
<li>metadata、路径、生成指纹被清理。</li>
<li>Critic findings 要么被修复，要么被 Monitor 明确接受。</li>
</ul>
<p>缺少其中任何一项，case 可能仍然&quot;像真的&quot;，但还不是交付级。</p>
<h2>这个教训会泛化</h2>
<p>如今生成很容易，已经被商品化了。<strong>规模化的对抗式核验，才是护城河。</strong> 而这个教训和医疗数据无关——它关于任何你自己生成的数据集。它会以&quot;看起来很合理&quot;的方式对你撒谎，再多小心翼翼的 prompt 也修不好，因为产生数据的东西和审查数据的东西共享同一套盲点。唯一持久的防御，是去造一个<strong>整个工作就是怀疑</strong>的东西——然后，把它抓到的一切都记下来。</p>
`,Hy=`<h1>Your Benchmark Is Lying to You: Validity Failure Modes in Agentic Eval Data</h1>
<p>Everyone is racing to <em>train</em> better agents. Far fewer people are building the thing that tells you whether your agent is actually any good: <strong>hard, honest eval data.</strong></p>
<p>I build multi-agent pipelines that turn a domain expert's real files into agentic exam items — questions a model <em>cannot</em> answer correctly without genuinely reading the documents. The interesting engineering isn't the generation. Generation is easy. The interesting engineering is <strong>validity</strong> — and the bugs that destroy validity are quiet. They don't crash. They produce a benchmark that <em>looks</em> hard and discriminating while measuring almost nothing.</p>
<p>Here are the three failure modes I keep finding, and how the pipeline defends against each.</p>
<h2>1. Guessability</h2>
<p>The most dangerous question is the one that looks hard but can be guessed. A model scores well, you conclude it's capable, and you ship a benchmark that rewards a good prior instead of real work.</p>
<p>The fix is an <strong>answer-removed &quot;anti-guessing&quot; probe</strong>. I grade every item under three conditions:</p>
<pre><code class="language-python">def probe(item, model, judge):
    # E1: files + reference answer  -&gt; oracle upper bound
    e1 = judge(model.solve(item.files, answer=item.reference), item.rubric)
    # E2: files only                -&gt; realistic ability
    e2 = judge(model.solve(item.files), item.rubric)
    # E3: NO files, prompt alone    -&gt; pure guessing
    e3 = judge(model.solve(files=None), item.rubric)
    return e1, e2, e3

def is_valid(e1, e2, e3, floor=0.15):
    # A good item collapses when the files are taken away.
    return (e3 &lt; floor) and (e2 &lt; e1)
</code></pre>
<p>If E3 doesn't collapse toward zero, the item was leaking information into the prompt, or it was guessable from world knowledge. Either way it wasn't testing what you thought. And if E2 ever comes out <em>higher</em> than E1 — which is impossible if the answer helps — you've found judge noise, not ability. E3 is the cheapest, most ruthless validity check I know.</p>
<h2>2. Prompt ↔ rubric leakage</h2>
<p>The second failure mode is subtler: the <em>question</em> or the <em>rubric</em> quietly contains the answer. An over-specified prompt that says &quot;pull the EBITDA from sheet <code>Model!C14</code>&quot; has already done the hard part — locating the evidence — for the model. Real work doesn't come with a cell reference.</p>
<p>So the pipeline scrubs leakage as a first-class step. Some of it is boring and mechanical — internal tokens that should never reach a candidate:</p>
<pre><code class="language-python">LEAK_PATTERNS = [
    r&quot;/Users/\\S+&quot;, r&quot;[A-Za-z]:\\\\\\\\\\S+&quot;,     # absolute paths
    r&quot;\\b[a-f0-9]{32,}\\b&quot;,                     # cache hashes
    r&quot;\\b(D[1-8]|difficulty[_-]?\\d)\\b&quot;,       # internal difficulty knobs
    r&quot;sheet=\\w+![A-Z]\\d+&quot;,                    # pre-located evidence anchors
    r&quot;&lt;answer&gt;.*?&lt;/answer&gt;&quot;,                   # the answer itself
]

def scrub(text):
    hits = [p for p in LEAK_PATTERNS if re.search(p, text, re.S)]
    if hits:
        raise LeakageError(f&quot;prompt/rubric leaks: {hits}&quot;)
</code></pre>
<p>But the deeper test is semantic: <em>if a human grader could solve the item just by reading the rubric, the rubric is broken.</em> A separate reviewer reads only the rubric (never the files) and tries to answer; if they can, the rubric has handed the test away.</p>
<h2>3. Judge noise</h2>
<p>If you grade with an LLM judge, the judge is part of your measurement instrument — and a noisy instrument manufactures fake signal. The fixes are unglamorous: standardize and align the judge model, give it atomic rubric criteria instead of vibes, and — the highest-leverage one — <strong>gate its reasoning</strong> when there's nothing to reason about:</p>
<pre><code class="language-python">def judge_one(criterion, response, evidence):
    # When the input is empty/unreadable/off-task, an ungated judge will
    # hallucinate a confident &quot;reason&quot; and a score. Refuse to let it.
    if not evidence or is_unreadable(response):
        return Score(hit=False, reason=&quot;insufficient evidence to judge&quot;)
    return llm_judge(criterion, response, evidence)
</code></pre>
<p>That one guard removed a whole class of false positives — cases where the model produced nothing usable but the judge, asked to fill in a <code>reason</code> field, obligingly invented a plausible justification and a passing score.</p>
<h2>The principle that ties it together: cross-vendor independence</h2>
<p>Underneath all three fixes is one design rule: <strong>the model that writes a question never verifies or grades it.</strong> Generation, verification, and judging run on different model families. The moment the same model both authors and solves an item, you get &quot;author-and-grade-yourself&quot; hallucination — the model confidently agreeing with its own mistakes.</p>
<pre><code class="language-python">assert author.vendor != verifier.vendor != judge.vendor
</code></pre>
<p>Making every node swappable across vendors — and <em>forcing</em> different vendors across stages — isn't an infra nicety. It's what keeps the eval honest.</p>
<h2>Reading the three numbers</h2>
<p>Once you have E1/E2/E3 per item, the <em>shape</em> tells you more than any single score:</p>
<table>
<thead>
<tr>
<th>E1</th>
<th>E2</th>
<th>E3</th>
<th>Diagnosis</th>
</tr>
</thead>
<tbody>
<tr>
<td>high</td>
<td>high</td>
<td><strong>high</strong></td>
<td>Guessable / leaking — <strong>kill the item</strong></td>
</tr>
<tr>
<td>high</td>
<td>~E1</td>
<td>low</td>
<td>Reference answer isn't helping — judge noise or trivial item</td>
</tr>
<tr>
<td>high</td>
<td>mid</td>
<td>low</td>
<td>Healthy: discriminating, file-grounded</td>
</tr>
<tr>
<td>low</td>
<td>low</td>
<td>low</td>
<td>Too hard or mis-keyed — review the ledger</td>
</tr>
</tbody>
</table>
<h2>Ship a validity report, not just an item</h2>
<p>The practical mistake is treating validity as an internal feeling. &quot;This looks hard&quot; is not an artifact. &quot;The author thinks this is grounded&quot; is not an artifact. A useful eval item should ship with a small validity report that explains why the item deserves to be in the benchmark.</p>
<p>The report does not need to expose private prompts or internal stage names. It only needs to make the item auditable:</p>
<pre><code class="language-yaml">item_id: office_reasoning_042
claim: &quot;Requires reconciling model assumptions against a memo and a spreadsheet.&quot;
files_required:
  - model.xlsx
  - memo.pdf
ability_target:
  - locate relevant evidence
  - reconcile conflicting values
  - refuse unsupported inference
validity_checks:
  anti_guessing: pass
  leakage_scan: pass
  rubric_only_solver: fail_to_solve
  judge_reason_guard: pass
known_traps:
  - &quot;units differ across files&quot;
  - &quot;one source gives a range, not a point estimate&quot;
review_decision: ship
</code></pre>
<p>That report changes the conversation. If a model later scores unexpectedly high, you know which assumption to attack first. If a reviewer says the item is unfair, you can inspect the exact evidence and trap design. If the item fails in production, you can decide whether the problem was the prompt, the rubric, the source files, or the judge.</p>
<h2>A review workflow that actually catches problems</h2>
<p>The workflow I trust looks like this:</p>
<ol>
<li><strong>Author the item from evidence, not from intuition.</strong> The writer should be constrained by a ledger or equivalent evidence artifact.</li>
<li><strong>Run the three-condition probe.</strong> Files + answer, files only, prompt only. Do not accept items whose file-removed score remains high.</li>
<li><strong>Have a rubric-only reviewer attempt the task.</strong> If the reviewer can solve without source files, the rubric or prompt leaks too much.</li>
<li><strong>Run the judge on known bad responses.</strong> Include empty outputs, off-task outputs, and plausible hallucinations. A judge that passes these is not ready.</li>
<li><strong>Inspect disagreements manually.</strong> The most valuable cases are where the metric, judge, or human reviewer diverge.</li>
<li><strong>Write the diagnosis down.</strong> If an item survives review, the reason should be durable enough that someone else can audit it next month.</li>
</ol>
<p>The important part is not that every step is automated. The important part is that every step creates evidence. A manual reviewer saying &quot;looks fine&quot; is less useful than a short note saying &quot;rubric-only attempt failed because the evidence location is not disclosed in the prompt.&quot;</p>
<h2>What to do with failed items</h2>
<p>Failed validity checks are not all the same. Treating every failure as &quot;regenerate&quot; wastes useful material. I use four buckets:</p>
<table>
<thead>
<tr>
<th>Failure</th>
<th>Usual action</th>
</tr>
</thead>
<tbody>
<tr>
<td>Guessable because the question is too generic</td>
<td>Rewrite the question around a more specific cross-file dependency</td>
</tr>
<tr>
<td>Guessable because the prompt leaks the answer</td>
<td>Scrub prompt/rubric and rerun the probe</td>
</tr>
<tr>
<td>Judge passes empty or off-task outputs</td>
<td>Fix judge guardrails before touching the item</td>
</tr>
<tr>
<td>Source evidence is missing or contradictory</td>
<td>Convert into an insufficient-information item, or kill it</td>
</tr>
</tbody>
</table>
<p>The fourth bucket is the most interesting. Sometimes a &quot;bad&quot; item is not bad because it is impossible; it is bad because the intended answer is impossible, while a boundary-recognition answer would be valid. Those are exactly the tasks that expose whether a model can say &quot;not enough information&quot; rather than inventing a number.</p>
<h2>A reader's checklist for benchmark claims</h2>
<p>When someone shows me an agent benchmark result, I want answers to these questions before I trust it:</p>
<ul>
<li>What happens when the files are removed?</li>
<li>Can a reviewer solve the task by reading only the rubric?</li>
<li>Are source locators recorded for every load-bearing fact?</li>
<li>Does the judge fail known-bad outputs?</li>
<li>Are generation, verification, and judging separated?</li>
<li>Are &quot;insufficient information&quot; cases represented, or does every task force a numeric answer?</li>
<li>Are failures rerun and diagnosed, or silently dropped?</li>
</ul>
<p>If those questions are hard to answer, the reported score may still be interesting, but it is not yet a measurement instrument.</p>
<h2>Takeaway</h2>
<p>In evaluation, the bug that hurts you isn't the crash. It's the question that looks hard. Most benchmarks fail silently, and the only way to catch it is to attack your own data: remove the answer, scrub the leakage, distrust the judge, and never let one model close the loop on itself.</p>
`,Vy=`<h1>Agent-as-Judge vs. a Metric You Wrote by Hand</h1>
<p>&quot;Just use an LLM as the judge.&quot; It's the default answer now for any grading problem. But is an LLM judge actually <em>better</em> than a deterministic metric you wrote yourself — and at what cost?</p>
<p>I stopped guessing and ran the experiment.</p>
<h2>The setup</h2>
<p>On a set of office-document agent tasks (Word and Excel), I graded the same model responses two ways, against the same rubric, and measured both against human-labeled ground truth on five axes: <strong>precision, recall, agreement, cost, and latency.</strong></p>
<p>The two graders share an interface so the comparison is about <em>method</em>, not plumbing:</p>
<pre><code class="language-python">class Grader(Protocol):
    def score(self, response: Response, rubric: Rubric) -&gt; Result: ...

class MetricGrader:      # deterministic: exact-match cells, structured field checks
    def score(self, response, rubric): ...

class JudgeGrader:       # Claude Code / Codex driving an aligned judge model
    def score(self, response, rubric): ...
</code></pre>
<p>The judge models were deliberately <em>aligned</em> (same family, same rubric contract) so I wasn't secretly measuring &quot;one vendor's model is stronger.&quot;</p>
<h2>What the comparison actually shows</h2>
<p>The honest result is the one most &quot;just use a judge&quot; takes skip: <strong>it depends, and you have to measure it.</strong></p>
<ul>
<li>The <strong>deterministic metric</strong> is nearly free, instant, and perfectly reproducible — but brittle. It can't reward a correct answer expressed in an unexpected format, and writing it is expensive engineering up front.</li>
<li>The <strong>LLM judge</strong> generalizes across phrasing and handles fuzzy criteria the metric can't encode — but it costs real money and latency per item, and it carries <em>variance</em>. Run it twice, get two scores. That variance is a tax on every conclusion you draw.</li>
</ul>
<p>Illustrative shape of what comes out (numbers depend entirely on task and rubric — measure your own):</p>
<table>
<thead>
<tr>
<th>Grader</th>
<th>Precision</th>
<th>Recall</th>
<th>Agreement w/ human</th>
<th>Cost / 100</th>
<th>p50 latency</th>
</tr>
</thead>
<tbody>
<tr>
<td>Metric (exact-match)</td>
<td>very high</td>
<td>low–mid</td>
<td>high <em>on structured</em></td>
<td>~$0</td>
<td>ms</td>
</tr>
<tr>
<td>LLM judge (aligned)</td>
<td>high</td>
<td>high</td>
<td>high <em>on open-ended</em></td>
<td>$</td>
<td>seconds</td>
</tr>
</tbody>
</table>
<p>For tight, structured outputs (a spreadsheet cell is right or wrong) the metric is often better <em>and</em> cheaper. For open-ended outputs where format varies, the judge earns its cost.</p>
<h2>A decision framework I actually use</h2>
<p>The choice is less &quot;metric or judge&quot; and more &quot;which parts of the rubric belong to which grader.&quot; A single task often needs both:</p>
<table>
<thead>
<tr>
<th>Rubric criterion type</th>
<th>Better first choice</th>
<th>Why</th>
</tr>
</thead>
<tbody>
<tr>
<td>Exact value, cell, field, filename</td>
<td>Metric</td>
<td>Deterministic, cheap, reproducible</td>
</tr>
<tr>
<td>Formatting that can be rendered and inspected</td>
<td>Metric + visual check</td>
<td>Screenshots catch layout regressions better than prose</td>
</tr>
<tr>
<td>Semantic explanation or business reasoning</td>
<td>Judge</td>
<td>Correct answers can be phrased many ways</td>
</tr>
<tr>
<td>Multi-step evidence use</td>
<td>Agent judge</td>
<td>It can inspect files and gather support before scoring</td>
</tr>
<tr>
<td>Safety / refusal / insufficient information</td>
<td>Judge with strict reason guard</td>
<td>Needs interpretation, but must not hallucinate evidence</td>
</tr>
<tr>
<td>Fatal compliance failure</td>
<td>Metric or explicit gate</td>
<td>Should not depend on judge taste</td>
</tr>
</tbody>
</table>
<p>This hybrid approach avoids two common mistakes. The first is replacing a good exact-match metric with a slower, noisier judge because &quot;LLMs are smarter.&quot; The second is forcing a deterministic metric to judge semantics it cannot see. The right system routes each criterion to the cheapest reliable evaluator.</p>
<h2>Designing the comparison</h2>
<p>A useful judge-vs-metric experiment has to be deliberately boring. If the two graders see different inputs, use different rubric wording, or aggregate scores differently, the comparison becomes meaningless. My minimum experiment design:</p>
<pre><code class="language-yaml">cases:
  sampling: stratified
  include:
    - easy structured outputs
    - open-ended reasoning outputs
    - empty / corrupt / off-task outputs
rubric:
  criteria: atomic
  fatal_errors: explicit
graders:
  metric: same rubric, deterministic implementation
  judge: same rubric, pinned model, fixed prompt contract
ground_truth:
  source: human labels or adjudicated gold labels
metrics:
  - precision
  - recall
  - agreement
  - latency
  - cost
analysis:
  compare_disagreements: true
</code></pre>
<p>The most useful table is not the leaderboard. It is the disagreement table:</p>
<table>
<thead>
<tr>
<th>Case</th>
<th>Metric</th>
<th>Judge</th>
<th>Human</th>
<th>Diagnosis</th>
</tr>
</thead>
<tbody>
<tr>
<td>A</td>
<td>pass</td>
<td>fail</td>
<td>fail</td>
<td>metric missed semantic contradiction</td>
</tr>
<tr>
<td>B</td>
<td>fail</td>
<td>pass</td>
<td>fail</td>
<td>judge over-trusted fluent prose</td>
</tr>
<tr>
<td>C</td>
<td>pass</td>
<td>pass</td>
<td>fail</td>
<td>rubric criterion is under-specified</td>
</tr>
</tbody>
</table>
<p>That table tells you what to fix. Sometimes the judge is wrong. Sometimes the metric is blind. Sometimes both reveal that the rubric itself is ambiguous.</p>
<h2>Two things that quietly decide the outcome</h2>
<p>A couple of details mattered more than the headline method choice.</p>
<p><strong>Hurdle / fatal criteria.</strong> A rubric where a fatal error zeroes the whole score behaves very differently from a flat weighted sum. Get the gating wrong and <em>both</em> methods disagree with humans for the same reason:</p>
<pre><code class="language-python">def aggregate(results, rubric):
    if any(r.hit and c.is_fatal for r, c in zip(results, rubric)):
        return 0.0                       # a single fatal error voids the score
    earned = sum(c.weight for r, c in zip(results, rubric) if r.hit)
    total  = sum(c.weight for c in rubric if c.weight &gt; 0)
    return max(0.0, earned / total)      # normalize; clamp negatives at 0
</code></pre>
<p><strong>Judge reason-gating.</strong> When the evidence is missing or the input is empty/unreadable, an ungated judge hallucinates a confident <code>reason</code> and a score. Constraining it to flag &quot;insufficient evidence&quot; instead removed a whole class of false signal — and, notably, <em>narrowed the gap</em> between judge and metric, because a lot of the judge's apparent unreliability was actually this one failure mode.</p>
<h2>The practical guidance</h2>
<p>Don't adopt an LLM judge because it's fashionable, and don't cling to a hand-written metric because you already have it. Pick per task type:</p>
<ul>
<li>Structured, verifiable output → <strong>metric</strong> (cheaper, reproducible).</li>
<li>Open-ended or format-variable output → <strong>judge</strong> (worth the cost), but pin the model, give it atomic criteria, and budget for variance.</li>
<li>High-stakes → run both and look at the <em>disagreements</em>. They are where your benchmark is weakest, and the cheapest place to learn something:</li>
</ul>
<pre><code class="language-python">disagreements = [
    (case, m, j) for case, m, j in zip(cases, metric_scores, judge_scores)
    if abs(m - j) &gt; 0.2
]
# triage these by hand; each one is either a metric blind spot
# or a judge hallucination, and both are worth fixing.
</code></pre>
<h2>Production guardrails</h2>
<p>If I were shipping an LLM judge in production, I would not treat it as a black box. I would require:</p>
<ul>
<li><strong>Pinned model and prompt version.</strong> A judge upgrade is a measurement change, not a harmless dependency bump.</li>
<li><strong>Atomic criteria.</strong> One criterion should ask one thing. Multi-part criteria invite inconsistent partial credit.</li>
<li><strong>Evidence requirement.</strong> The judge must cite or reference the evidence it used, even if that reference is internal and not shown to end users.</li>
<li><strong>Reason guard.</strong> Empty, unreadable, unsupported, or off-task inputs should return &quot;insufficient evidence&quot; rather than a creative explanation.</li>
<li><strong>Calibration set.</strong> Keep a small frozen set of human-labeled cases and run it before every judge release.</li>
<li><strong>Disagreement review.</strong> Sample metric/judge/human disagreements routinely; that is where silent drift shows up first.</li>
<li><strong>Cost budget.</strong> Track judge cost per accepted decision, not only cost per call. A cheap judge that triggers many manual reviews may be expensive.</li>
</ul>
<p>The operational posture is the same as any measurement instrument: version it, calibrate it, monitor it, and know where it fails.</p>
<h2>The useful output</h2>
<p>The experiment should not end with &quot;judge wins&quot; or &quot;metric wins.&quot; It should end with a routing policy:</p>
<pre><code class="language-python">def choose_grader(criterion):
    if criterion.is_fatal:
        return &quot;gate&quot;
    if criterion.exact_matchable:
        return &quot;metric&quot;
    if criterion.needs_artifact_inspection:
        return &quot;agent_judge&quot;
    if criterion.semantic:
        return &quot;llm_judge&quot;
    return &quot;manual_review&quot;
</code></pre>
<p>That policy is the product. It lets you add new tasks without re-litigating the philosophy every time. More importantly, it makes the grading system explainable to the people who will depend on its numbers.</p>
<p>An LLM judge isn't free and isn't automatically better. It's a tool with a cost curve. Measure the curve before you commit to it.</p>
`,Gy=`<h1>The Plumbing of LLM Evaluation: Running Six Model Families on One Harness</h1>
<p>&quot;Just run the benchmark.&quot; That sentence hides a surprising amount of infrastructure.</p>
<p>Over the past few months I've run office-document agent tasks across <strong>six model families</strong> — Claude, GPT, Gemini, Qwen, Kimi, GLM — and <strong>five agent harnesses</strong> — Claude Code, OpenHands, Codex, Stirrup, and OpenRouter — on a containerized eval framework that fans out onto cloud sandboxes. Here's what the &quot;just run it&quot; framing leaves out.</p>
<h2>One interface, many backends</h2>
<p>The only way to stay sane across this many models and harnesses is a thin adapter contract, and then a lot of careful per-backend implementation behind it:</p>
<pre><code class="language-python">class Harness(Protocol):
    def run(self, task: Task, model: str) -&gt; Trajectory: ...

@dataclass
class Trajectory:
    response: str
    files_out: list[Path]
    steps: int
    usage: Usage          # input / output / cached tokens
    error: str | None
</code></pre>
<p>That <code>Trajectory</code> looks clean. Almost everything below is about the ways real backends refuse to fill it in cleanly.</p>
<h2>The bugs live in the gaps between models</h2>
<p><strong>Some models don't support file <em>output</em> at all.</strong> Kimi, GLM, and Qwen wouldn't emit a real <code>.xlsx</code>. So you constrain them by prompt to return structured text, then reconstruct the file downstream — and you'd better verify the reconstruction is faithful, or you've silently changed the task:</p>
<pre><code class="language-python">def materialize(traj, task):
    if task.expects_file and not traj.files_out:
        payload = parse_fenced_block(traj.response, lang=&quot;json&quot;)
        path = build_xlsx(payload)          # rebuild from constrained text
        if not opens_cleanly(path):
            raise OutputError(&quot;reconstructed file is corrupt&quot;)
        traj.files_out = [path]
    return traj
</code></pre>
<p><strong>A &quot;reasoning-only&quot; turn can silently end a task.</strong> Some reasoning models emit a turn with no tool call. A naive driver treats that as &quot;done&quot; and ends the run after one outer loop. The fix is an <em>idle nudge</em> — and you have to extend it to every family that exhibits the behavior, not just the one you first noticed:</p>
<pre><code class="language-python">def drive(agent, task, max_steps=40):
    for step in range(max_steps):
        turn = agent.step()
        if turn.done:
            return turn
        if not turn.tool_calls and not turn.final_answer:
            agent.inject(&quot;You haven't called a tool or answered. Continue.&quot;)  # nudge
    return agent.force_finish()
</code></pre>
<p><strong>A judge that hallucinates a reason is worse than no judge.</strong> When the evidence is actually missing, an ungated judge invents a plausible justification and a score; gating the reasoning on empty/unreadable/off-task inputs removed a real source of fake signal.</p>
<h2>Scale and cost are part of correctness</h2>
<p>Running this at volume means containerized execution on cloud sandboxes with multi-key concurrency, snapshots to pre-install harnesses, and a smoke-test-before-batch discipline so a bad config doesn't burn a thousand runs. And it means <em>accounting</em> — a benchmark you can't afford to run twice isn't a benchmark you can trust:</p>
<pre><code class="language-python">PRICES = {  # $ per 1M tokens (input, output)
    &quot;opus&quot;:  (15.0, 75.0),
    &quot;gpt&quot;:   (...),
    &quot;qwen&quot;:  (...),
}

def cost(usage, model):
    pin, pout = PRICES[model]
    billable_in = usage.input - usage.cached          # don't pay full for cache hits
    return (billable_in * pin + usage.output * pout) / 1_000_000

# per-run we log: agent_time vs eval_time, tokens in/out/cached, $ — so
# &quot;which model is cheapest per passing task&quot; is a number, not a guess.
</code></pre>
<p>Most of the engineering is in the error paths: evaluator hangs, missing prompt/reference paths, max-step cutoffs, non-closed JSON from a model crashing the runner. So failures don't tank a whole batch, you rerun <em>only</em> the failed tasks in place:</p>
<pre><code class="language-python">def rerun_failed(batch):
    failed = [t for t in batch if t.result.error or t.result.score is None]
    log.info(f&quot;rerunning {len(failed)}/{len(batch)} in place&quot;)
    for t in failed:
        t.result = run_one(t)
</code></pre>
<h2>The operational runbook</h2>
<p>The real work of an eval harness is turning a messy run into a repeatable run. The runbook I trust is:</p>
<ol>
<li><strong>Normalize every task into one job contract.</strong> Prompt, files, expected outputs, timeout, scoring config, and artifact paths should be explicit before a model sees anything.</li>
<li><strong>Smoke one task per harness before batching.</strong> A full batch should never be the first time a model/harness pair sees the task format.</li>
<li><strong>Record the full trajectory.</strong> Final answers are not enough. You need tool calls, files created, timestamps, token usage, errors, and stdout/stderr when available.</li>
<li><strong>Separate run failure from score failure.</strong> &quot;The model got zero&quot; and &quot;the runner crashed&quot; are different events and should never share the same field.</li>
<li><strong>Rerun narrowly.</strong> Failed tasks should be reproducible and rerunnable without touching passed tasks.</li>
<li><strong>Package for review.</strong> A downstream reviewer should be able to open one folder and see prompt, response, files-out, logs, score, and judge rationale.</li>
<li><strong>Keep cost visible.</strong> Cost is not a finance afterthought; it decides whether the benchmark can be repeated, debugged, and trusted.</li>
</ol>
<p>The output of this runbook is not just a CSV score table. It is an evidence bundle for each model/harness pair.</p>
<h2>What good run artifacts look like</h2>
<p>I want every completed task to leave behind a folder shaped roughly like this:</p>
<pre><code class="language-text">run/
  task.json                 # normalized task contract
  input_files/
  trajectory.json            # steps, tool calls, timestamps
  response.md
  files_out/
  usage.json                 # input/output/cache tokens, wall time
  score.json                 # rubric scores and aggregate
  judge_evidence/
  logs/
  error.json                 # present only if the run failed
</code></pre>
<p>That structure pays for itself the first time someone asks, &quot;why did this model lose?&quot; Without trajectory and artifacts, all you can say is &quot;the score was lower.&quot; With them, you can say &quot;the model found the right sheet, wrote the right formula, but failed to save the workbook,&quot; or &quot;the harness ended after a reasoning-only turn.&quot; Those are very different product decisions.</p>
<h2>The abstraction boundary</h2>
<p>The adapter contract should hide provider weirdness from the benchmark, but it should not hide it from the operator. The benchmark wants a common <code>Trajectory</code>; the operator needs the raw failure reason. That means adapter code should return normalized fields while preserving raw diagnostics:</p>
<pre><code class="language-python">@dataclass
class RunResult:
    status: Literal[&quot;passed&quot;, &quot;scored_zero&quot;, &quot;runner_error&quot;, &quot;timeout&quot;]
    trajectory: Trajectory | None
    normalized_error: str | None
    raw_error: dict | None
    artifacts: list[Path]
</code></pre>
<p>This distinction prevents a common anti-pattern: flattening all failures into a score of zero. A timeout, a missing file, a provider API failure, and a genuine wrong answer all create different work for the team.</p>
<h2>What to publish internally</h2>
<p>A useful benchmark report should answer more than &quot;who won.&quot; I would publish:</p>
<ul>
<li>Score distribution by task type, not only a mean.</li>
<li>Pass rate after excluding runner errors, plus runner-error rate separately.</li>
<li>Median and tail latency.</li>
<li>Cost per completed task and cost per passing task.</li>
<li>File-output success rate.</li>
<li>Judge disagreement or manual-review rate.</li>
<li>Top recurring failure modes with examples.</li>
</ul>
<p>That report changes model selection. The best model is not always the one with the highest mean score; it may be the one that passes slightly fewer tasks but produces valid files, costs half as much, and fails in ways you can debug.</p>
<h2>Giving back</h2>
<p>While integrating the <strong>Stirrup</strong> agent I cleaned it up enough to make it <strong>upstream-ready for the open-source Harbor framework</strong> — isolating the reusable agent adapter from all the environment-specific glue, on a clean fork. That's the real test of whether an integration is any good: can you separate the part that helps everyone from the part that only helps you?</p>
<h2>Takeaway</h2>
<p>Evaluation isn't a script. It's infrastructure — and the bugs live in the gaps between models, in the error paths between harnesses, and in the cost column you forgot to add up. Treat it like infra and the numbers start meaning something.</p>
`,Ky=`<h1>你的基准在骗你：智能体评测数据的有效性失效模式</h1>
<p>所有人都在卷怎么把智能体<strong>训</strong>得更强。但真正稀缺的是另一件事：能告诉你智能体到底强不强的——<strong>高难度、不掺水的评测数据。</strong></p>
<p>我搭多智能体流水线，把领域专家的真实文件变成智能体考题——模型不真读文档就答不出来的题。有意思的工程不在&quot;生成&quot;，生成很容易。有意思的工程在<strong>有效性</strong>——而毁掉有效性的 bug 往往很安静。它们不崩溃，只是产出一个<strong>看着难、其实几乎什么都没测到</strong>的 benchmark。</p>
<p>下面是我反复遇到的三类失效，以及流水线对每一类的防御。</p>
<h2>一、可蒙性（Guessability）</h2>
<p>最危险的题，是那种看着难、其实能蒙的题。模型拿了高分，你以为它有能力，于是发布了一个奖励&quot;好先验&quot;而非&quot;真功夫&quot;的 benchmark。</p>
<p>对策是一个<strong>去答案的&quot;防蒙&quot;探针</strong>。我在三种条件下评每道题：</p>
<pre><code class="language-python">def probe(item, model, judge):
    # E1: 文件 + 参考答案  -&gt; 理论上限
    e1 = judge(model.solve(item.files, answer=item.reference), item.rubric)
    # E2: 只给文件          -&gt; 真实能力
    e2 = judge(model.solve(item.files), item.rubric)
    # E3: 不给文件，只有题面 -&gt; 纯蒙
    e3 = judge(model.solve(files=None), item.rubric)
    return e1, e2, e3

def is_valid(e1, e2, e3, floor=0.15):
    # 一道好题，在文件被抽走后会坍塌。
    return (e3 &lt; floor) and (e2 &lt; e1)
</code></pre>
<p>如果 E3 不向 0 坍塌，说明题面在泄漏信息，或者题目靠常识就能蒙。无论哪种，它都没在测你以为的东西。而如果 E2 居然比 E1 还高——这在&quot;答案有用&quot;的前提下是不可能的——那你抓到的是 judge 噪声，不是能力。E3 是我知道的最便宜、也最无情的有效性检查。</p>
<h2>二、题面 ↔ rubric 泄漏</h2>
<p>第二类更隐蔽：<strong>题目</strong>或 <strong>rubric</strong> 里悄悄藏了答案。一个过度具体的题面，写着&quot;从 <code>Model!C14</code> 取 EBITDA&quot;，其实已经替模型做完了最难的部分——定位证据。真实工作可不会附上单元格坐标。</p>
<p>所以流水线把&quot;去泄漏&quot;当成一等公民。一部分是无聊、机械的——那些永远不该到达候选者手里的内部 token：</p>
<pre><code class="language-python">LEAK_PATTERNS = [
    r&quot;/Users/\\S+&quot;, r&quot;[A-Za-z]:\\\\\\\\\\S+&quot;,     # 绝对路径
    r&quot;\\b[a-f0-9]{32,}\\b&quot;,                     # cache hash
    r&quot;\\b(D[1-8]|difficulty[_-]?\\d)\\b&quot;,       # 内部难度旋钮
    r&quot;sheet=\\w+![A-Z]\\d+&quot;,                    # 预先定位证据的锚点
    r&quot;&lt;answer&gt;.*?&lt;/answer&gt;&quot;,                   # 答案本身
]

def scrub(text):
    hits = [p for p in LEAK_PATTERNS if re.search(p, text, re.S)]
    if hits:
        raise LeakageError(f&quot;题面/rubric 泄漏: {hits}&quot;)
</code></pre>
<p>但更深的检验是语义层面的：<strong>如果一个人光读 rubric 就能把题做出来，那这条 rubric 就是坏的。</strong> 一个独立 reviewer 只读 rubric（绝不看文件）去尝试作答；如果他能答出来，rubric 就把考试拱手送人了。</p>
<h2>三、judge 噪声</h2>
<p>如果你用 LLM 当裁判，那 judge 就是你测量仪器的一部分——而一个有噪声的仪器会制造假信号。对策都不性感：固定并对齐裁判模型；给它<strong>原子化</strong>的 rubric 条目而不是&quot;凭感觉&quot;；以及收益最高的一招——在&quot;根本没东西可推理&quot;时，<strong>给它的推理上闸</strong>：</p>
<pre><code class="language-python">def judge_one(criterion, response, evidence):
    # 当输入为空/不可读/跑题时，不上闸的 judge 会幻觉出一个
    # 自信的 &quot;reason&quot; 和一个分数。拒绝让它这么干。
    if not evidence or is_unreadable(response):
        return Score(hit=False, reason=&quot;证据不足，无法判定&quot;)
    return llm_judge(criterion, response, evidence)
</code></pre>
<p>这一个 guard 消掉了一整类假阳性——模型其实什么可用的东西都没产出，但 judge 被要求填一个 <code>reason</code> 字段，就顺从地编出一个听起来合理的理由和一个及格分。</p>
<h2>把三者串起来的原则：跨厂商独立性</h2>
<p>三个对策底下是同一条设计铁律：<strong>出题的模型，绝不去核验或评判它自己出的题。</strong> 生成、核验、判分跑在不同的模型族上。一旦同一个模型既出题又解题，你就会得到&quot;自己出题自己判&quot;的幻觉——模型自信地认可自己的错误。</p>
<pre><code class="language-python">assert author.vendor != verifier.vendor != judge.vendor
</code></pre>
<p>让每个节点都能在厂商间替换（并<strong>强制</strong>各阶段使用不同厂商），不是基础设施上的小讲究，而是让评测保持诚实的关键。</p>
<h2>读这三个数字</h2>
<p>一旦你有了每道题的 E1/E2/E3，它们的<strong>形状</strong>比任何单一分数都说明问题：</p>
<table>
<thead>
<tr>
<th>E1</th>
<th>E2</th>
<th>E3</th>
<th>诊断</th>
</tr>
</thead>
<tbody>
<tr>
<td>高</td>
<td>高</td>
<td><strong>高</strong></td>
<td>能蒙 / 泄漏——<strong>删掉这道题</strong></td>
</tr>
<tr>
<td>高</td>
<td>~E1</td>
<td>低</td>
<td>参考答案没起作用——judge 噪声或题太水</td>
</tr>
<tr>
<td>高</td>
<td>中</td>
<td>低</td>
<td>健康：有区分度、依赖文件</td>
</tr>
<tr>
<td>低</td>
<td>低</td>
<td>低</td>
<td>太难或 key 错了——回去查账本</td>
</tr>
</tbody>
</table>
<h2>交付的应该是 validity report，而不只是题目</h2>
<p>最常见的错误，是把有效性当成一种内部感觉。&quot;这题看着挺难&quot;不是产物。&quot;出题者觉得它有证据&quot;也不是产物。一个可用的 eval item 应该随附一份小的 validity report，解释它为什么配进入 benchmark。</p>
<p>这份 report 不需要暴露私有 prompt 或内部阶段名，只需要让题目可审计：</p>
<pre><code class="language-yaml">item_id: office_reasoning_042
claim: &quot;需要把模型假设与 memo、spreadsheet 交叉核对。&quot;
files_required:
  - model.xlsx
  - memo.pdf
ability_target:
  - 定位相关证据
  - 核对冲突数值
  - 拒绝无证据推断
validity_checks:
  anti_guessing: pass
  leakage_scan: pass
  rubric_only_solver: fail_to_solve
  judge_reason_guard: pass
known_traps:
  - &quot;不同文件单位不同&quot;
  - &quot;某个来源给的是范围，不是点估计&quot;
review_decision: ship
</code></pre>
<p>这份 report 会改变讨论方式。如果之后某个模型异常高分，你知道先攻击哪条假设。如果 reviewer 说题不公平，你可以直接检查证据和 trap 设计。如果线上失败，你能判断问题出在题面、rubric、源文件，还是 judge。</p>
<h2>真能抓问题的 review workflow</h2>
<p>我更信任这样的流程：</p>
<ol>
<li><strong>从证据写题，不从直觉写题。</strong> 作者应该被 evidence ledger 或等价证据产物约束。</li>
<li><strong>跑三条件探针。</strong> 文件+答案、只给文件、只给题面。抽走文件还高分的题不该放行。</li>
<li><strong>让 rubric-only reviewer 尝试作答。</strong> 如果只读 rubric 就能答出来，题面或 rubric 泄漏太多。</li>
<li><strong>用已知坏回答测试 judge。</strong> 包括空输出、跑题输出、看似合理的幻觉输出。能放过这些的 judge 还不能上线。</li>
<li><strong>人工看 disagreement。</strong> metric、judge、人类 reviewer 不一致的地方，最有信息量。</li>
<li><strong>把诊断写下来。</strong> 一道题通过 review 的理由，应该 durable 到下个月别人还能审计。</li>
</ol>
<p>关键不在于每一步都自动化，而在于每一步都产出证据。一个 reviewer 说&quot;看起来可以&quot;不如一句短 note 有用：&quot;rubric-only 尝试失败，因为题面没有披露证据位置。&quot;</p>
<h2>失效题目怎么处理</h2>
<p>validity check 失败不都等于重生成。把所有失败都当成 regenerate，会浪费很多有价值材料。我通常分四类：</p>
<table>
<thead>
<tr>
<th>失效</th>
<th>常见处理</th>
</tr>
</thead>
<tbody>
<tr>
<td>题太泛，靠常识能蒙</td>
<td>围绕更具体的跨文件依赖重写问题</td>
</tr>
<tr>
<td>题面泄漏答案</td>
<td>清洗题面/rubric 后重跑探针</td>
</tr>
<tr>
<td>judge 放过空输出或跑题输出</td>
<td>先修 judge guardrail，不动题目</td>
</tr>
<tr>
<td>源证据缺失或冲突</td>
<td>改成资料不足题，或直接删除</td>
</tr>
</tbody>
</table>
<p>第四类最有意思。有时一道&quot;坏题&quot;不是因为它不可做，而是因为原计划的答案不可得；如果改成识别边界的题，它反而很有价值。这类题最能照出模型能不能说&quot;信息不足&quot;，而不是硬编一个数字。</p>
<h2>判断 benchmark claim 是否可信的清单</h2>
<p>别人给我看一个 agent benchmark 结果时，我会先问：</p>
<ul>
<li>抽走文件后模型表现怎样？</li>
<li>reviewer 只读 rubric 能不能做出来？</li>
<li>每个 load-bearing fact 有没有源文件 locator？</li>
<li>judge 有没有在已知坏输出上失败？</li>
<li>生成、核验、判分是否分离？</li>
<li>有没有&quot;资料不足&quot;题，还是每题都强迫给数值答案？</li>
<li>失败样本是被诊断和重跑，还是被静默丢掉？</li>
</ul>
<p>如果这些问题很难回答，分数也许仍然有参考价值，但它还不是一个可信的测量仪器。</p>
<h2>结语</h2>
<p>在评测里，真正伤到你的 bug 不是崩溃，而是那道&quot;看着难&quot;的题。大多数 benchmark 都在静默失效，唯一的破解之道是去攻击你自己的数据：抽掉答案、洗掉泄漏、怀疑 judge，并且永远不要让一个模型把环闭合在自己身上。</p>
`,Qy=`<h1>Agent-as-Judge 还是你手写的 Metric？一次诚实的对比</h1>
<p>&quot;用 LLM 当裁判就好了。&quot; 如今碰到任何打分问题，这都是默认答案。可它真的比你自己写的确定性 metric 更好吗？代价又是多少？</p>
<p>我没有猜，而是直接做了实验。</p>
<h2>实验设置</h2>
<p>在一批 Office 文档智能体任务（Word 和 Excel）上，我用两种方式给同一批模型回答打分，对着同一份 rubric，并对齐人工标注的 GT，从五个维度衡量：<strong>准确率、召回率、一致率、成本、时延。</strong></p>
<p>两个 grader 共享一个接口，这样比的是<strong>方法</strong>，不是管道：</p>
<pre><code class="language-python">class Grader(Protocol):
    def score(self, response: Response, rubric: Rubric) -&gt; Result: ...

class MetricGrader:      # 确定性：单元格精确匹配、结构化字段检查
    def score(self, response, rubric): ...

class JudgeGrader:       # Claude Code / Codex 驱动对齐过的裁判模型
    def score(self, response, rubric): ...
</code></pre>
<p>裁判模型是刻意<strong>对齐</strong>的（同模型族、同 rubric 契约），这样我才不是偷偷在测&quot;某家模型更强&quot;。</p>
<h2>对比真正揭示的东西</h2>
<p>最诚实的结论，恰恰是&quot;用裁判就好了&quot;这一派会跳过的：<strong>看情况，而且你必须去测。</strong></p>
<ul>
<li><strong>确定性 metric</strong> 几乎免费、即时、完全可复现——但很脆。它没法奖励一个用意外格式表达的正确答案，而且把它写出来本身就是昂贵的前期工程。</li>
<li><strong>LLM 裁判</strong> 能泛化各种表述、能处理 metric 编码不了的模糊标准——但它每道题都要花真金白银和时延，还自带<strong>方差</strong>。同一道题跑两遍，得两个分。这份方差，是你每条结论都要交的税。</li>
</ul>
<p>跑出来大致是这个形状（具体数字完全取决于任务和 rubric，要测你自己的）：</p>
<table>
<thead>
<tr>
<th>Grader</th>
<th>准确率</th>
<th>召回</th>
<th>与人一致率</th>
<th>每 100 条成本</th>
<th>p50 时延</th>
</tr>
</thead>
<tbody>
<tr>
<td>Metric（精确匹配）</td>
<td>很高</td>
<td>中低</td>
<td>结构化任务上高</td>
<td>~$0</td>
<td>毫秒</td>
</tr>
<tr>
<td>LLM 裁判（对齐）</td>
<td>高</td>
<td>高</td>
<td>开放式任务上高</td>
<td>$</td>
<td>秒级</td>
</tr>
</tbody>
</table>
<p>对于紧结构的输出（一个单元格非对即错），metric 往往<strong>又好又便宜</strong>；对于格式多变的开放式输出，裁判才配得上它的成本。</p>
<h2>我实际会用的决策框架</h2>
<p>真正的问题不是&quot;metric 还是 judge&quot;，而是&quot;rubric 的哪一部分应该交给哪个 grader&quot;。同一个任务往往需要两者共存：</p>
<table>
<thead>
<tr>
<th>Rubric criterion 类型</th>
<th>优先选择</th>
<th>原因</th>
</tr>
</thead>
<tbody>
<tr>
<td>精确值、单元格、字段、文件名</td>
<td>Metric</td>
<td>确定、便宜、可复现</td>
</tr>
<tr>
<td>可渲染检查的格式</td>
<td>Metric + visual check</td>
<td>截图比文字更容易抓布局退化</td>
</tr>
<tr>
<td>语义解释或商业推理</td>
<td>Judge</td>
<td>正确答案可能有很多表达方式</td>
</tr>
<tr>
<td>多步证据使用</td>
<td>Agent judge</td>
<td>它能打开文件、采证后再判</td>
</tr>
<tr>
<td>安全/拒答/资料不足</td>
<td>带严格 reason guard 的 judge</td>
<td>需要解释，但不能幻觉证据</td>
</tr>
<tr>
<td>致命合规错误</td>
<td>Metric 或显式 gate</td>
<td>不应该依赖 judge 品味</td>
</tr>
</tbody>
</table>
<p>这种混合路线避免两个常见错误。第一，不要因为&quot;LLM 更聪明&quot;就把一个好用的 exact-match metric 换成更慢、更有噪声的 judge。第二，也不要强迫确定性 metric 去判断它看不见的语义。正确系统会把每个 criterion 路由给最便宜且可靠的 evaluator。</p>
<h2>如何设计这个对比实验</h2>
<p>一个有用的 judge-vs-metric 实验，必须刻意无聊。如果两个 grader 看到的输入不同、rubric 表述不同、聚合方式不同，比较就失效了。我的最小实验设计是：</p>
<pre><code class="language-yaml">cases:
  sampling: stratified
  include:
    - 简单结构化输出
    - 开放式推理输出
    - 空 / 损坏 / 跑题输出
rubric:
  criteria: atomic
  fatal_errors: explicit
graders:
  metric: 同一份 rubric，确定性实现
  judge: 同一份 rubric，固定模型，固定 prompt contract
ground_truth:
  source: 人工标签或仲裁后的 gold labels
metrics:
  - precision
  - recall
  - agreement
  - latency
  - cost
analysis:
  compare_disagreements: true
</code></pre>
<p>最有用的表不是排行榜，而是 disagreement table：</p>
<table>
<thead>
<tr>
<th>Case</th>
<th>Metric</th>
<th>Judge</th>
<th>Human</th>
<th>Diagnosis</th>
</tr>
</thead>
<tbody>
<tr>
<td>A</td>
<td>pass</td>
<td>fail</td>
<td>fail</td>
<td>metric 漏掉了语义矛盾</td>
</tr>
<tr>
<td>B</td>
<td>fail</td>
<td>pass</td>
<td>fail</td>
<td>judge 过度信任流畅 prose</td>
</tr>
<tr>
<td>C</td>
<td>pass</td>
<td>pass</td>
<td>fail</td>
<td>rubric criterion 写得不够明确</td>
</tr>
</tbody>
</table>
<p>这张表告诉你该修什么。有时 judge 错了，有时 metric 瞎了，有时两者一起暴露出 rubric 本身含糊。</p>
<h2>两个悄悄决定结果的细节</h2>
<p>有几个细节，比&quot;方法选哪个&quot;这个大问题更关键。</p>
<p><strong>硬门槛 / 致命项。</strong> 一个&quot;致命错误直接清零总分&quot;的 rubric，和一个&quot;加权求和&quot;的 rubric，行为天差地别。门控写错，两种方法都会和人打分不一致——而且是同一个原因：</p>
<pre><code class="language-python">def aggregate(results, rubric):
    if any(r.hit and c.is_fatal for r, c in zip(results, rubric)):
        return 0.0                       # 单个致命错误清零
    earned = sum(c.weight for r, c in zip(results, rubric) if r.hit)
    total  = sum(c.weight for c in rubric if c.weight &gt; 0)
    return max(0.0, earned / total)      # 归一化；负分 clamp 到 0
</code></pre>
<p><strong>裁判推理上闸。</strong> 当证据缺失、或输入为空/不可读时，不上闸的裁判会幻觉出一个自信的 <code>reason</code> 和一个分数。约束它改报&quot;证据不足&quot;，直接消掉了一整类假信号——而且值得注意的是，它<strong>缩小了</strong>裁判和 metric 之间的差距，因为裁判看上去的&quot;不靠谱&quot;，很大一部分其实就是这一个失效模式。</p>
<h2>实用建议</h2>
<p>别因为时髦就上 LLM 裁判，也别因为&quot;已经有了&quot;就死守手写 metric。按任务类型来选：</p>
<ul>
<li>结构化、可验证的输出 → <strong>metric</strong>（更便宜、可复现）。</li>
<li>开放式或格式多变的输出 → <strong>裁判</strong>（值这个钱），但要固定模型、给原子化标准、为方差留预算。</li>
<li>高风险 → 两个都跑，盯着它们<strong>不一致</strong>的地方。那正是你 benchmark 最薄弱之处，也是最便宜的学习场：</li>
</ul>
<pre><code class="language-python">disagreements = [
    (case, m, j) for case, m, j in zip(cases, metric_scores, judge_scores)
    if abs(m - j) &gt; 0.2
]
# 手工分诊这些；每一条要么是 metric 的盲点，
# 要么是裁判的幻觉，两者都值得修。
</code></pre>
<h2>生产环境 guardrails</h2>
<p>如果要把 LLM judge 真正上线，我不会把它当黑盒。我会要求：</p>
<ul>
<li><strong>固定模型和 prompt 版本。</strong> 升级 judge 是测量方式变化，不是普通依赖升级。</li>
<li><strong>原子化 criteria。</strong> 一条 criterion 只问一件事。多部分 criteria 会制造不一致的 partial credit。</li>
<li><strong>证据要求。</strong> judge 必须引用或记录它用到的证据，即使这些引用只在内部可见。</li>
<li><strong>Reason guard。</strong> 空、不可读、无证据、跑题输入应该返回&quot;证据不足&quot;，而不是编一个解释。</li>
<li><strong>校准集。</strong> 保留一小批冻结的人工标注样本，每次 judge release 前都跑。</li>
<li><strong>Disagreement review。</strong> 定期抽查 metric/judge/human 不一致的样本；静默漂移通常先在那里出现。</li>
<li><strong>成本预算。</strong> 关注每个 accepted decision 的成本，而不只是每次调用成本。一个便宜但触发大量人工复核的 judge 可能反而贵。</li>
</ul>
<p>姿态和任何测量仪器一样：版本化、校准、监控，并且知道它在哪里会失效。</p>
<h2>真正有用的产出</h2>
<p>实验不应该止步于&quot;judge 赢了&quot;或&quot;metric 赢了&quot;。它应该产出一条 routing policy：</p>
<pre><code class="language-python">def choose_grader(criterion):
    if criterion.is_fatal:
        return &quot;gate&quot;
    if criterion.exact_matchable:
        return &quot;metric&quot;
    if criterion.needs_artifact_inspection:
        return &quot;agent_judge&quot;
    if criterion.semantic:
        return &quot;llm_judge&quot;
    return &quot;manual_review&quot;
</code></pre>
<p>这条 policy 才是产品。它让你之后添加新任务时，不必每次重新争论哲学。更重要的是，它让评分系统能向依赖这些数字的人解释清楚。</p>
<p>LLM 裁判既不免费，也不天然更好。它是一个带成本曲线的工具。先把曲线测出来，再决定要不要押上去。</p>
`,Jy=`<h1>大模型评测的「管道工程」：在一个 harness 上跑六个模型族</h1>
<p>&quot;把基准跑一下就行。&quot; 这句话藏了大量基础设施工作。</p>
<p>过去几个月，我在一个会扇出到云沙箱的容器化评测框架上，把 Office 文档智能体任务跑遍了<strong>六个模型族</strong>——Claude、GPT、Gemini、Qwen、Kimi、GLM——和<strong>五种 agent harness</strong>——Claude Code、OpenHands、Codex、Stirrup、OpenRouter。下面是&quot;跑一下就行&quot;这个说法漏掉的东西。</p>
<h2>一个接口，多个后端</h2>
<p>要在这么多模型和 harness 之间保持理智，唯一的办法是一层薄薄的适配契约，然后在它背后做大量小心的、按后端来的实现：</p>
<pre><code class="language-python">class Harness(Protocol):
    def run(self, task: Task, model: str) -&gt; Trajectory: ...

@dataclass
class Trajectory:
    response: str
    files_out: list[Path]
    steps: int
    usage: Usage          # input / output / cached tokens
    error: str | None
</code></pre>
<p>这个 <code>Trajectory</code> 看着很干净。下面几乎所有内容，都是关于真实后端如何拒绝把它干净地填上。</p>
<h2>bug 就住在&quot;模型与模型之间的缝隙&quot;里</h2>
<p><strong>有的模型根本不支持文件<em>输出</em>。</strong> Kimi、GLM、Qwen 吐不出真正的 <code>.xlsx</code>。于是你只能用提示约束它返回结构化文本，再在下游把文件重建出来——而且你最好验证重建是忠实的，否则你已经悄悄改了这道题：</p>
<pre><code class="language-python">def materialize(traj, task):
    if task.expects_file and not traj.files_out:
        payload = parse_fenced_block(traj.response, lang=&quot;json&quot;)
        path = build_xlsx(payload)          # 从约束文本重建
        if not opens_cleanly(path):
            raise OutputError(&quot;重建出来的文件损坏了&quot;)
        traj.files_out = [path]
    return traj
</code></pre>
<p><strong>一个&quot;只推理&quot;的回合会静默地结束任务。</strong> 有些推理模型会发出一个不带工具调用的回合。一个朴素的 driver 会把它当成&quot;做完了&quot;，跑完一轮外循环就结束。对策是 <em>idle nudge</em>——而且你得把它扩展到所有有这种行为的模型族，而不只是你最先发现的那个：</p>
<pre><code class="language-python">def drive(agent, task, max_steps=40):
    for step in range(max_steps):
        turn = agent.step()
        if turn.done:
            return turn
        if not turn.tool_calls and not turn.final_answer:
            agent.inject(&quot;你既没调工具也没给答案，继续。&quot;)  # nudge
    return agent.force_finish()
</code></pre>
<p><strong>一个会幻觉理由的裁判，比没有裁判更糟。</strong> 当证据其实缺失时，不上闸的裁判会编出一个听起来合理的理由和一个分数；对&quot;输入为空/不可读/明显跑题&quot;的情况给推理上闸，消掉了一个真实的假信号来源。</p>
<h2>规模与成本也是&quot;正确性&quot;的一部分</h2>
<p>要把它跑到量，就意味着在云沙箱上做容器化执行、多 key 并发、用快照预装 harness，以及&quot;批量前先冒烟&quot;的纪律，免得一个坏配置烧掉上千次运行。还意味着<strong>算账</strong>——一个你跑不起第二遍的 benchmark，不是你能信任的 benchmark：</p>
<pre><code class="language-python">PRICES = {  # 每 1M token 的美元价 (input, output)
    &quot;opus&quot;:  (15.0, 75.0),
    &quot;gpt&quot;:   (...),
    &quot;qwen&quot;:  (...),
}

def cost(usage, model):
    pin, pout = PRICES[model]
    billable_in = usage.input - usage.cached          # 命中缓存的别按全价付
    return (billable_in * pin + usage.output * pout) / 1_000_000

# 每次运行我们都记：agent_time vs eval_time、token 进/出/缓存、$——这样
# &quot;哪个模型每道通过题最便宜&quot;就是一个数字，而不是一句猜测。
</code></pre>
<p>大部分工程都在错误路径上：评测器卡死、缺失的 prompt/参考路径、最大步数截断、模型返回的非闭合 JSON 把 runner 搞崩。为了让失败不拖垮整批，你只<strong>原地重跑失败的任务</strong>：</p>
<pre><code class="language-python">def rerun_failed(batch):
    failed = [t for t in batch if t.result.error or t.result.score is None]
    log.info(f&quot;原地重跑 {len(failed)}/{len(batch)}&quot;)
    for t in failed:
        t.result = run_one(t)
</code></pre>
<h2>运维 runbook</h2>
<p>一个 eval harness 真正的工作，是把混乱的一次运行变成可重复的一次运行。我信任的 runbook 是：</p>
<ol>
<li><strong>把每个任务归一成同一个 job contract。</strong> Prompt、文件、期望输出、timeout、评分配置、artifact 路径，在模型看到任务前就应该明确。</li>
<li><strong>批量前每个 harness 先冒烟一题。</strong> 一个完整 batch 不应该是某个 model/harness 第一次见到任务格式。</li>
<li><strong>记录完整轨迹。</strong> 只有最终答案不够。需要 tool calls、创建的文件、时间戳、token 用量、错误，以及能拿到的 stdout/stderr。</li>
<li><strong>区分运行失败和得分失败。</strong> &quot;模型得了 0 分&quot;和&quot;runner 崩了&quot;是两件事，绝不能共用一个字段。</li>
<li><strong>窄范围重跑。</strong> 失败任务应该能被复现，并且能在不碰通过任务的前提下重跑。</li>
<li><strong>为 review 打包。</strong> 下游 reviewer 打开一个文件夹，就应该能看到 prompt、response、files-out、logs、score 和 judge rationale。</li>
<li><strong>让成本可见。</strong> 成本不是财务附属项；它决定 benchmark 能不能被重复、debug 和信任。</li>
</ol>
<p>这套 runbook 的产出不只是一个 CSV 分数表，而是每个 model/harness pair 的证据包。</p>
<h2>好的 run artifact 应该长这样</h2>
<p>我希望每个完成任务都留下大致这样的目录：</p>
<pre><code class="language-text">run/
  task.json                 # 归一后的任务契约
  input_files/
  trajectory.json            # steps, tool calls, timestamps
  response.md
  files_out/
  usage.json                 # input/output/cache tokens, wall time
  score.json                 # rubric scores and aggregate
  judge_evidence/
  logs/
  error.json                 # 只有运行失败时存在
</code></pre>
<p>这套结构第一次有人问&quot;为什么这个模型输了&quot;时就会回本。没有 trajectory 和 artifacts，你只能说&quot;分数比较低&quot;。有了它们，你可以说&quot;模型找到了正确 sheet、写了正确公式，但没有保存 workbook&quot;，或者&quot;这个 harness 在 reasoning-only turn 后提前结束了任务&quot;。这对应完全不同的产品决策。</p>
<h2>抽象边界</h2>
<p>adapter contract 应该向 benchmark 隐藏 provider 差异，但不应该向 operator 隐藏。benchmark 想要统一的 <code>Trajectory</code>；operator 需要原始失败原因。所以 adapter 应该返回归一字段，同时保留 raw diagnostics：</p>
<pre><code class="language-python">@dataclass
class RunResult:
    status: Literal[&quot;passed&quot;, &quot;scored_zero&quot;, &quot;runner_error&quot;, &quot;timeout&quot;]
    trajectory: Trajectory | None
    normalized_error: str | None
    raw_error: dict | None
    artifacts: list[Path]
</code></pre>
<p>这个区分能避免一个常见反模式：把所有失败都拍平成 0 分。timeout、缺文件、provider API 失败、真正答错，对团队意味着完全不同的工作。</p>
<h2>内部报告应该发布什么</h2>
<p>一个有用的 benchmark report 不该只回答&quot;谁赢了&quot;。我会发布：</p>
<ul>
<li>按任务类型拆分的分数分布，而不只是均值。</li>
<li>排除 runner error 后的通过率，以及单独的 runner-error rate。</li>
<li>中位数与尾部时延。</li>
<li>每个完成任务成本，以及每个通过任务成本。</li>
<li>文件输出成功率。</li>
<li>judge disagreement 或人工复核率。</li>
<li>最高频 failure modes 和样例。</li>
</ul>
<p>这会改变模型选型。最好的模型不一定是均分最高的模型；它可能是那个少过几道题，但文件输出有效、成本低一半、失败方式更容易 debug 的模型。</p>
<h2>回馈社区</h2>
<p>在集成 <strong>Stirrup</strong> agent 时，我把它清理得足够干净，做成了<strong>面向开源 Harbor 框架、可直接上游</strong>的集成——把可复用的 agent 适配器从所有环境相关的胶水代码里剥离出来，放在一个干净的 fork 上。这恰恰是检验一个集成好不好的真正标准：你能不能把&quot;对所有人都有用的部分&quot;和&quot;只对你有用的部分&quot;分开？</p>
<h2>结语</h2>
<p>评测不是一个脚本，而是基础设施——bug 住在模型之间的缝隙里、住在 harness 之间的错误路径里、也住在你忘了加总的那一列成本里。把它当成 infra 来对待，数字才开始有意义。</p>
`,Yy=`<p>This is a consolidated, eight-part deep dive into building a <strong>Solana MEV searcher</strong> — from the &quot;Dark Forest&quot; laws of the chain down to a working architecture. It walks through the control plane, the network-wide inventory, sub-millisecond monitoring (scout), AMM pricing models, the cross-DEX arbitrage strategy, Jito bundles, and risk control. Each part below began as a standalone article; they're collected here as a single guide.</p>
<h2>How to read this guide</h2>
<p>This is not meant to be read as a list of isolated tricks. A working searcher is a pipeline, and every layer constrains the next one:</p>
<ol>
<li><strong>Market structure.</strong> Understand why Solana MEV is not Ethereum MEV with faster blocks. The absence of a classic public mempool, account-level parallelism, and leader scheduling change what is observable and what is executable.</li>
<li><strong>State acquisition.</strong> Decide how the system learns about pool changes quickly enough to matter. A slow or noisy feed turns every later optimization into theater.</li>
<li><strong>Local pricing.</strong> Reconstruct pool state locally and price routes without asking RPC for every decision.</li>
<li><strong>Opportunity selection.</strong> Filter theoretical spreads through fees, slippage, liquidity, transaction size, and inclusion probability.</li>
<li><strong>Execution.</strong> Build transactions or bundles that can land atomically, with realistic priority fees and failure handling.</li>
<li><strong>Risk control.</strong> Reject assets and routes that are profitable in simulation but unsafe in reality.</li>
</ol>
<p>The useful output of this guide is not &quot;copy this bot.&quot; It is a mental model and a build checklist. If you can explain where your searcher gets state, how it prices a route, how it decides not to trade, and how it proves a landed trade was expected to be profitable before fees, you have the foundation of a real system.</p>
<h2>Reference architecture at a glance</h2>
<p>Before the details, the whole system can be summarized as four loops:</p>
<table>
<thead>
<tr>
<th>Loop</th>
<th>Goal</th>
<th>Failure if missing</th>
</tr>
</thead>
<tbody>
<tr>
<td>Inventory loop</td>
<td>Maintain the list of pools, mints, and route candidates worth watching</td>
<td>The system wastes bandwidth on dead pools or misses real opportunities</td>
</tr>
<tr>
<td>State loop</td>
<td>Keep an in-memory mirror of pool state fresh</td>
<td>Pricing uses stale reserves and creates false positives</td>
</tr>
<tr>
<td>Strategy loop</td>
<td>Convert state changes into executable route candidates</td>
<td>The bot sees spreads but cannot decide size, fee, or direction</td>
</tr>
<tr>
<td>Execution loop</td>
<td>Submit, confirm, and attribute bundles/transactions</td>
<td>Profitable simulations never land, or losses cannot be diagnosed</td>
</tr>
</tbody>
</table>
<p>Most beginner searchers over-focus on the strategy loop because it looks like the &quot;alpha.&quot; In practice, the inventory and state loops decide whether the strategy is even looking at reality, and the execution loop decides whether the alpha can be captured by you rather than by someone else.</p>
<hr>
<h2>Dark Forest Laws: Solana Market Structure for MEV</h2>
<p>Solana MEV is not Ethereum MEV with faster blocks. Parallel execution, sub-400ms slots, and the absence of a classic public mempool change what a searcher can observe and what it can execute. This part covers the ground rules: core concepts, the transaction pipeline, and what they imply for architecture.</p>
<hr>
<h3>1. Redefining MEV: Gaming in the Context of Solana</h3>
<h4>1.1 What is MEV?</h4>
<p>MEV refers to the additional value that block producers (called Leaders in Solana) can obtain by <strong>including, excluding, or reordering</strong> transactions within the blocks they produce.</p>
<p>In Solana's high-performance environment, MEV is not just about &quot;front-running&quot;, it embodies more of an <strong>extreme latency competition and capital efficiency game</strong>:</p>
<ul>
<li><strong>Front-running:</strong> Executing before a target transaction.</li>
<li><strong>Sandwich Attack:</strong> Inserting buy and sell orders before and after a transaction with loose slippage control.</li>
<li><strong>Back-running:</strong> Following up immediately with arbitrage execution after a large trade causes price impact.</li>
<li><strong>Spatial Arbitrage:</strong> Capturing price differences between different liquidity pools like Raydium, Orca, Meteora, etc.</li>
<li><strong>Liquidation:</strong> Snatching liquidation rewards the moment a lending protocol triggers liquidation due to price fluctuations.</li>
</ul>
<h4>1.2 &quot;Significant Differences&quot; Between Solana and Ethereum</h4>
<p>Solana's mechanism determines that it does not have the &quot;classic public Mempool&quot; of Ethereum.</p>
<ol>
<li><strong>No Global Public Mempool:</strong> Transactions are sent directly to the Leader via QUIC protocol. It is difficult for ordinary users to execute sandwich attacks precisely by observing the Mempool as on Ethereum.</li>
<li><strong>Deterministic Scheduling:</strong> Solana uses the parallel processing engine Sealevel. If two transactions involve non-overlapping accounts, they will be executed in parallel, weakening the significance of ordering in a parallel environment.</li>
<li><strong>Extremely Low Latency:</strong> The 400ms block time requires Searcher's strategy logic to be completed within milliseconds: Sense State -&gt; Calculate Spread -&gt; Construct Transaction -&gt; Send.</li>
</ol>
<hr>
<h3>2. Overview of Solana Transaction Pipeline: Insertion Points for MEV</h3>
<p>To capture MEV, one must understand how a transaction &quot;flows&quot; in the Solana network:</p>
<ol>
<li><strong>Transaction Construction:</strong> The client specifies Instructions, account mappings, and signatures.</li>
<li><strong>TPU Reception:</strong> The transaction reaches the current Leader (TPU unit) via QUIC protocol.</li>
<li><strong>Pipeline Ordering:</strong> The Leader orders transactions within its Slot. At this point, <strong>Priority Fee</strong> and <strong>Jito Tip</strong> are key to determining the order.</li>
<li><strong>Banking Stage:</strong> Execute transactions, modify account states.</li>
<li><strong>Final Confirmation:</strong> Go through three confirmation stages (Processed -&gt; Confirmed -&gt; Finalized).</li>
</ol>
<p><strong>Key Points for MEV Capture:</strong></p>
<ul>
<li><strong>Perception Speed:</strong> The faster you get Account Updates, the earlier you can discover opportunities.</li>
<li><strong>Inclusion Determinism:</strong> How to ensure your arbitrage transaction is not discarded? This gave birth to third-party Bundle mechanisms like Jito.</li>
</ul>
<hr>
<h3>3. Technical Framework: Core Components of a Searcher</h3>
<p>In engineering implementation, a mature Solana MEV system usually includes the following modules:</p>
<pre><code class="language-mermaid">flowchart TD
  S[Data Source: Geyser/gRPC] --&gt;|Real-time State Update| U[Searcher Core]
  U --&gt;|Calc Spread/Trigger Strategy| P[Pricing Engine: CPMM/CLMM]
  P --&gt;|Generate Instructions| T[Transaction Construction]
  T --&gt;|Bundle/Transaction| B[Jito Block Engine / RPC]
  B --&gt; L[Leader/Validator]
</code></pre>
<ul>
<li><strong>State Feed (State Perception):</strong> Deprecating traditional WebSocket <code>logsSubscribe</code>, high-performance systems typically connect to <strong>Geyser Plugins</strong> or gRPC streams to obtain microsecond-level account change pushes.</li>
<li><strong>Searcher (Strategy Brain):</strong> Responsible for parsing data streams, identifying pool changes, and executing risk control models.</li>
<li><strong>Block Engine (Inclusion Mechanism):</strong> Similar to Flashbots on Ethereum. On Solana, <strong>Jito-Solana</strong> is mainstream, allowing Searchers to pack multiple transactions into a <strong>Bundle</strong> and pay Tips to Validators, ensuring atomic execution (all succeed or all fail).</li>
</ul>
<hr>
<h3>4. Engineering Implementation: Layered Architecture Design</h3>
<p>To balance development efficiency and execution performance, mainstream architectures tend to adopt a <strong>&quot;Control Plane + Data Plane&quot;</strong> layered design.</p>
<h4>4.1 Layered Logic</h4>
<ul>
<li><strong>Control Plane:</strong> Usually written in <strong>Python</strong> or Go. Responsible for high-level logic, strategy scheduling, configuration file management, API interaction, and monitoring dashboards.</li>
<li><strong>Data Plane:</strong> Must use <strong>Rust</strong>. Responsible for extremely fast data parsing (such as parsing complex Raydium/Orca states), local pricing calculation, signature construction, and Jito-based transaction sending.</li>
</ul>
<h4>4.2 Core Algorithm: Inventory-Driven Monitoring</h4>
<p>Blindly listening to all pools on the network leads to severe network congestion and computational waste. Efficient systems will:</p>
<ol>
<li><strong>Cold Start Scan:</strong> Fetch all liquidity pools from Raydium and Orca APIs, filtering out potential arbitrage pairs based on asset quality and TVL.</li>
<li><strong>Whitelist Generation:</strong> Only subscribe to the screened pool accounts.</li>
<li><strong>Local State Mirror:</strong> Maintain a lightweight mirror of these pools (Reserves, SqrtPrice, etc.) in memory, without frequent RPC requests.</li>
</ol>
<hr>
<h3>5. Core Code Logic Demonstration (Pseudocode)</h3>
<h4>5.1 Cross-Protocol Pricing Difference Calculation</h4>
<p>Pricing logic varies by protocol. For example, Raydium's CPMM vs. Orca's CLMM:</p>
<pre><code class="language-python"># Constant Product Market Maker (CPMM) Simulation Output Calculation
def calculate_cpmm_out(amount_in, res_in, res_out, fee_rate=0.0025):
    amount_with_fee = amount_in * (1 - fee_rate)
    return (amount_with_fee * res_out) / (res_in + amount_with_fee)

# Concentrated Liquidity (CLMM) Price Parsing (Q64.64 Format)
def sqrt_price_x64_to_price(sqrt_price_x64):
    price = (sqrt_price_x64 / (2**64)) ** 2
    return price
</code></pre>
<h4>5.2 Monitoring and Trigger Logic</h4>
<p>In the Rust Data Plane, the system listens for specific account changes:</p>
<pre><code class="language-rust">// Pseudocode: Core processing flow after hearing account update
match account_update {
    RaydiumUpdate(data) =&gt; {
        let new_price = parse_raydium_reserves(data);
        inventory.update_price(&quot;SOL/USDC&quot;, Protocol::Raydium, new_price);
        check_arbitrage_opportunity(&quot;SOL/USDC&quot;);
    },
    OrcaUpdate(data) =&gt; {
        let new_price = parse_orca_sqrt_price(data);
        inventory.update_price(&quot;SOL/USDC&quot;, Protocol::Orca, new_price);
        check_arbitrage_opportunity(&quot;SOL/USDC&quot;);
    }
}
</code></pre>
<hr>
<h3>6. Summary: Future High Ground of Competition</h3>
<p>Solana MEV has evolved from early &quot;simple scripting&quot; to an &quot;all-around engineering race&quot;:</p>
<ol>
<li><strong>Network Optimization:</strong> Whose server is closer to the Leader, whose QUIC connection configuration is better.</li>
<li><strong>Algorithm Precision:</strong> Instantaneous pricing precision for complex CLMM (Concentrated Liquidity) pools.</li>
<li><strong>Capital Efficiency:</strong> Ability to find the optimal path among multiple paths and combine Jito Bundles to avoid fee losses caused by failed transactions.</li>
</ol>
<p>In the upcoming series of articles, we will delve into <strong>How to Build a Network-Wide Token Index (Inventory)</strong>, <strong>How to Optimize gRPC Data Parsing Speed</strong>, and <strong>Jito Bundle Atomic Combat</strong>.</p>
<p>Welcome to the Dark Forest of Solana, may your Bundles always be included.</p>
<hr>
<h2>Control Plane vs. Data Plane: Splitting the Strategy Engine</h2>
<p>Building a Solana MEV system forces a classic trade-off: <strong>Rust's speed</strong> vs. <strong>Python's flexibility</strong>. The resolution here is a two-tier design — a <strong>Control Plane</strong> in Python for strategy orchestration and configuration management, and a <strong>Data Plane</strong> in Rust for high-concurrency data processing.</p>
<hr>
<h3>1. Why Do We Need a &quot;Control Plane&quot;?</h3>
<p>If we compare an MEV bot to a race car, the Rust execution engine is the V12 engine capable of withstanding high RPMs, while the Python control plane is the dashboard and gear stick in the cockpit.</p>
<h4>1.1 Decoupling Configuration and Logic</h4>
<p>MEV strategies (such as arbitrage, sniping, liquidation) involve a large number of parameters: RPC node addresses, Jito Tip limits, whitelist tokens, maximum slippage controls, etc.</p>
<ul>
<li><strong>Pain Point:</strong> If these configurations are hardcoded in Rust, every fine-tuning of parameters requires recompilation. In a rapidly changing market, tens of seconds of compilation time are enough to let opportunities slip away.</li>
<li><strong>Solution:</strong> Python is responsible for reading YAML/JSON configurations, preprocessing logic, and injecting them into the Rust process as command-line arguments or environment variables.</li>
</ul>
<h4>1.2 Unified Entry and Multi-Strategy Management</h4>
<p>A mature system often runs multiple strategies simultaneously.</p>
<ul>
<li><strong>Arb (Arbitrage):</strong> Long-running, monitoring mainstream pools.</li>
<li><strong>Sniper:</strong> Started temporarily, targeting newly issued tokens.</li>
<li><strong>Control Plane:</strong> Acts as a unified scheduler (Commander) that can launch different strategy instances with one click based on market conditions, realizing &quot;Strategy as a Plugin&quot;.</li>
</ul>
<hr>
<h3>2. Architecture Overview: Cross-Language Boundaries and Interfaces</h3>
<p>The core interaction of the system follows the principle of <strong>&quot;Unidirectional Derivation, Process Isolation&quot;</strong>:</p>
<pre><code class="language-mermaid">sequenceDiagram
  participant Dev as Developer
  participant CP as Python Control Plane (Commander)
  participant RS as Rust Execution Plane (Scavenger)
  participant Node as Solana Node/Jito

  Dev-&gt;&gt;CP: Execute run command (e.g., --strategy arb)
  CP-&gt;&gt;CP: 1. Automatically locate corresponding config file (arb.yaml)
  CP-&gt;&gt;CP: 2. Check Rust compilation artifact (Release Binary)
  CP-&gt;&gt;RS: 3. Start Rust process (Args: --config &lt;path&gt;)
  RS-&gt;&gt;Node: 4. Establish WebSocket listening &amp; gRPC connection
  Note over RS,Node: High-concurrency data stream processing
</code></pre>
<ul>
<li><strong>Control Plane Responsibilities:</strong> Environment check, automatic path derivation, process lifecycle management, Graceful Shutdown.</li>
<li><strong>Execution Plane Responsibilities:</strong> Account state parsing, local pricing calculation, transaction construction, Bundle submission.</li>
</ul>
<hr>
<h3>3. Technical Implementation Details</h3>
<h4>3.1 Path Adaptation and Compilation Fallback</h4>
<p>In a production environment, we run pre-compiled Rust Release binaries directly for the fastest startup speed. However, during the development and debugging phase, we want it to detect automatically.</p>
<p><strong>Scheduling Logic Pseudocode:</strong></p>
<ol>
<li>Check if binary exists under <code>target/release/</code>.</li>
<li>If it exists, run directly via <code>subprocess.spawn</code>.</li>
<li>If not, fallback to <code>cargo run --release</code>.</li>
</ol>
<h4>3.2 Environment Isolation and Working Directory Constraints</h4>
<p>MEV bots usually need to read local wallets (Keypairs) and cache files. To ensure security and consistency, the control plane must strictly constrain the <strong>Current Working Directory (CWD)</strong> of the Rust process. This effectively prevents path drift in different environments (Docker vs. Physical Machine).</p>
<hr>
<h3>4. Industrial-Grade Scheduler Code Example</h3>
<p>Below is a simplified Python control plane implementation example. It demonstrates how to manage subprocesses and dynamically inject configurations.</p>
<pre><code class="language-python">import argparse
import os
import subprocess
import sys
from pathlib import Path

class BotCommander:
    def __init__(self, strategy: str, config_name: str):
        self.strategy = strategy
        self.config_path = Path(f&quot;configs/{config_name}.yaml&quot;).absolute()
        self.root_dir = Path(__file__).parent.parent  # Project root directory
        self.engine_dir = self.root_dir / &quot;engine_rust&quot; # Rust source directory

    def _find_binary(self) -&gt; list:
        &quot;&quot;&quot;Select execution command: prioritize release binary, otherwise fallback to cargo run&quot;&quot;&quot;
        release_bin = self.engine_dir / &quot;target&quot; / &quot;release&quot; / &quot;mev_engine&quot;
        
        if release_bin.exists():
            print(f&quot;[*] Using pre-compiled binary: {release_bin}&quot;)
            return [str(release_bin)]
        
        print(&quot;[!] Release binary not found, attempting to start via cargo run...&quot;)
        return [&quot;cargo&quot;, &quot;run&quot;, &quot;--release&quot;, &quot;--bin&quot;, &quot;mev_engine&quot;, &quot;--&quot;]

    def run(self):
        # Assemble full execution command
        base_cmd = self._find_binary()
        args = [
            &quot;--strategy&quot;, self.strategy,
            &quot;--config&quot;, str(self.config_path)
        ]
        full_cmd = base_cmd + args

        print(f&quot;[*] Starting strategy [{self.strategy}]...&quot;)
        try:
            # Start execution plane using subprocess and lock working directory
            subprocess.run(full_cmd, cwd=self.engine_dir, check=True)
        except KeyboardInterrupt:
            print(&quot;\\n[!] Stop signal received, shutting down bot...&quot;)
        except subprocess.CalledProcessError as e:
            print(f&quot;[X] Execution engine crashed, exit code: {e.returncode}&quot;)

if __name__ == &quot;__main__&quot;:
    parser = argparse.ArgumentParser(description=&quot;Solana MEV Control Plane&quot;)
    parser.add_argument(&quot;--strategy&quot;, default=&quot;arbitrage&quot;, help=&quot;Select strategy to run&quot;)
    parser.add_argument(&quot;--config&quot;, default=&quot;mainnet_alpha&quot;, help=&quot;Config file name&quot;)
    
    cmd_args = parser.parse_args()
    commander = BotCommander(cmd_args.strategy, cmd_args.config)
    commander.run()
</code></pre>
<hr>
<h3>5. Performance Optimization and DevOps Thoughts</h3>
<p>In actual production, the design of the control plane also needs to consider the following points:</p>
<ol>
<li><strong>Warm-up:</strong> Before officially starting arbitrage monitoring, the control plane can run a simple Python script to check RPC node latency and wallet balance, ensuring &quot;nothing goes wrong&quot; before passing the baton to Rust.</li>
<li><strong>Log Triage:</strong> The Rust side outputs structured JSON logs, and the Python side is responsible for collecting and pushing them to remote monitoring (such as Loki or Telegram Bot).</li>
<li><strong>Hot Update Strategy:</strong> For &quot;blacklist tokens&quot; that do not require code logic modification, file watcher mechanisms can be used. When Python modifies the configuration file, the Rust side reloads in real-time via the <code>notify</code> library without restarting the process.</li>
</ol>
<hr>
<h2>Efficient Reconnaissance: &quot;Inventory-Driven Monitoring&quot; in Solana MEV and Network-Wide Index Construction</h2>
<p>On the Solana track, where thousands of transactions are generated every second, if you try to listen to all account updates across the entire network, your bot will quickly be drowned in massive data noise. RPC node bandwidth limits, CPU parsing pressure, and network latency will instantly destroy arbitrage opportunities.</p>
<p>Efficient Searchers never &quot;listen blindly&quot;. They use a strategy called <strong>&quot;Inventory-Driven Monitoring&quot;</strong>: first building a global index of network-wide liquidity pools offline, filtering out high-value &quot;arbitrage candidate pools&quot;, and then subscribing precisely.</p>
<hr>
<h3>1. Core Concept: Shrinking the Battlefield, Locking onto Winning Points</h3>
<h4>1.1 Why Build an Inventory?</h4>
<p>DEXs (Decentralized Exchanges) on Solana, such as Raydium and Orca, have tens of thousands of liquidity pools. But for arbitrage strategies, only those trading pairs that <strong>exist simultaneously in multiple protocols</strong> (e.g., SOL/USDC has a pool in Raydium and also in Orca) have atomic arbitrage space.</p>
<p>The tasks of the Inventory are:</p>
<ul>
<li><strong>Cold Start Aggregation:</strong> Fetch full pool lists from various DEX APIs.</li>
<li><strong>Intersection Calculation:</strong> Find overlapping Token trading pairs.</li>
<li><strong>Whitelist Filtering:</strong> Eliminate zombie pools and low liquidity pools, generating a &quot;monitoring whitelist&quot;.</li>
</ul>
<h4>1.2 Inventory-Driven vs. Full-Volume Driven</h4>
<ul>
<li><strong>Full-Volume Driven:</strong> Subscribe to all logs, check tables upon discovering opportunities. The advantage is broad coverage, but the disadvantage is extremely high latency and processing of redundant data.</li>
<li><strong>Inventory-Driven:</strong> Only subscribe to account updates within the whitelist. The advantage is extremely fast response and saving RPC resources, making it the top choice for high-frequency arbitrage.</li>
</ul>
<hr>
<h3>2. Technical Architecture: High-Concurrency State Machine Supported by Rust</h3>
<p>In the Rust execution engine, the Inventory module is designed as a <strong>high-concurrency, thread-safe</strong> singleton shared by multiple strategy modules.</p>
<h4>2.1 Key Data Structures: DashMap and Arc</h4>
<p>Since data processing on Solana is multi-threaded and parallel, Inventory must handle extremely high read/write frequencies:</p>
<ul>
<li><strong>DashMap:</strong> A high-performance concurrent hash map. Compared to standard <code>HashMap + Mutex</code>, it refines locking granularity to the Shard level, avoiding global lock contention during high-frequency state parsing.</li>
<li><strong>Arc (Atomic Reference Counted):</strong> Used to safely share the memory address of Inventory between different Tokio tasks (such as monitoring tasks, pricing tasks, execution tasks), achieving zero-copy data access.</li>
</ul>
<h4>2.2 Index Layering Logic</h4>
<p>The system internally maintains two layers of indexes:</p>
<ol>
<li><strong>Global Pool Index:</strong> Maps pool addresses to token metadata (Mint, Decimals, Vault).</li>
<li><strong>Arbitrage Pair Map:</strong> Records &quot;candidate arbitrage pairs&quot;. For example, inputting the Mint address of SOL immediately returns its associated information in Raydium Pool A and Orca Pool B.</li>
</ol>
<hr>
<h3>3. Algorithm Implementation: Fast Intersection in $O(N+M)$</h3>
<p>The core of building an arbitrage whitelist is &quot;finding intersections&quot;.</p>
<ol>
<li><strong>Scan Protocol A (Raydium):</strong> Store all pools into a temporary hash table as <code>Token_A -&gt; Pool_Address</code>.</li>
<li><strong>Scan Protocol B (Orca):</strong> Traverse its pool list. If the same <code>Token_A</code> is found in Protocol A's hash table, a potential arbitrage opportunity is hit.</li>
<li><strong>Generate Watchlist:</strong> Add both hit pool addresses to the &quot;Watchlist&quot; simultaneously.</li>
</ol>
<p><strong>Time Complexity:</strong> Only two linear scans are needed. Even with tens of thousands of pools, cold start can be completed within milliseconds.</p>
<hr>
<h3>4. Performance Optimization Points: Speed from Engineering Details</h3>
<h4>4.1 API Caching and Fault Tolerance</h4>
<p>Official APIs of protocols like Raydium are often unstable. We added <strong>local persistent caching</strong> in the engineering implementation.</p>
<ul>
<li>Prioritize reading local <code>pools_cache.json</code> during cold start.</li>
<li>Asynchronously request API updates for caching in the background.</li>
<li>This ensures that the bot can recover work immediately even in extreme network conditions.</li>
</ul>
<h4>4.2 Subscription Limits and Sharding</h4>
<p>Most RPC nodes have limits on the number of <code>accountSubscribe</code> per single connection (e.g., 50-100).
Inventory automatically sorts the Watchlist based on &quot;Pool Heat (Volume/TVL)&quot;, prioritizing subscription to the Top N pools with the greatest profit potential, or dispersing subscriptions to multiple RPC nodes through <strong>load balancing</strong>.</p>
<hr>
<h3>5. Algorithm Prototype Demonstration (Python Logic Implementation)</h3>
<p>Although we use Rust in the production environment, its underlying logic can be clearly expressed through the following Python example:</p>
<pre><code class="language-python">from dataclasses import dataclass
from typing import Dict, List, Set

@dataclass(frozen=True)
class PoolMetadata:
    address: str
    token_mint: str

def build_arbitrage_radar(ray_pools: List[PoolMetadata], orca_pools: List[PoolMetadata]):
    # 1. Build Raydium Index (Token -&gt; Pool)
    ray_index = {p.token_mint: p.address for p in ray_pools}
    
    arbitrage_watchlist = []
    
    # 2. Scan Orca for Intersections
    for o_pool in orca_pools:
        if o_pool.token_mint in ray_index:
            # Overlap found: This token has liquidity in both DEXs
            arbitrage_watchlist.append({
                &quot;token&quot;: o_pool.token_mint,
                &quot;raydium_pool&quot;: ray_index[o_pool.token_mint],
                &quot;orca_pool&quot;: o_pool.address
            })
            
    return arbitrage_watchlist

# Mock Data Display
ray_list = [PoolMetadata(&quot;RAY_SOL_POOL&quot;, &quot;SOL_MINT&quot;), PoolMetadata(&quot;RAY_BONK_POOL&quot;, &quot;BONK_MINT&quot;)]
orca_list = [PoolMetadata(&quot;ORCA_SOL_POOL&quot;, &quot;SOL_MINT&quot;), PoolMetadata(&quot;ORCA_WIF_POOL&quot;, &quot;WIF_MINT&quot;)]

watchlist = build_arbitrage_radar(ray_list, orca_list)
print(f&quot;[*] Found {len(watchlist)} potential arbitrage paths&quot;)
# Output will include the SOL path because both DEXs have SOL pools
</code></pre>
<hr>
<h3>6. Summary: Radar Activated</h3>
<p>The Inventory module is the &quot;filter&quot; of the entire MEV system. It filters out network-wide noise, leaving only targets shining with profit potential.</p>
<ul>
<li><strong>Without Inventory:</strong> Your bot aimlessly processes thousands of invalid messages.</li>
<li><strong>With Inventory:</strong> Your bot stares only at those dozens of high-frequency changing pools, ready to pull the trigger at any moment.</li>
</ul>
<hr>
<h2>Sub-millisecond Vision: Scout Monitoring and Extreme Parsing in Solana MEV</h2>
<p>If the Inventory module is the bot's &quot;memory&quot;, then the Scout module is its &quot;eyes&quot;. In the turbulence of Solana generating tens of thousands of state changes per second, Scout's task is to filter, filter again, and decode signals that are truly meaningful for arbitrage strategies at extreme speeds.</p>
<p>In MEV, <strong>speed isn't everything, but without speed, there is nothing</strong>. What follows is the design of a low-latency, high-concurrency transaction monitoring and parsing system.</p>
<hr>
<h3>1. Monitoring Philosophy: Scalpel vs. Dragnet</h3>
<p>On Solana, we typically face two distinct monitoring needs, corresponding to different technical paths:</p>
<h4>1.1 <code>accountSubscribe</code>: The Precise Scalpel (Arb Mode)</h4>
<p>For cross-protocol arbitrage (Arbitrage), we have already locked onto specific pools through Inventory. At this point, we don't need to observe the entire network, we just need to stare at the changes in the <strong>Data field</strong> of these pool accounts.</p>
<ul>
<li><strong>Mechanism:</strong> Once the token balance or price in the pool changes, the RPC node will immediately push the latest account data.</li>
<li><strong>Advantage:</strong> The signal is extremely direct, skipping tedious transaction parsing, making it the fastest path for high-frequency arbitrage.</li>
</ul>
<h4>1.2 <code>logsSubscribe</code>: The Network-Wide Dragnet (Sniper Mode)</h4>
<p>For sniping new pools (Sniping), we cannot foresee the pool address, so we can only capture signals of &quot;new pool creation&quot; or &quot;initial liquidity injection&quot; instructions by listening to <strong>Program Logs</strong> of specific protocols (such as Raydium or Orca).</p>
<ul>
<li><strong>Mechanism:</strong> Scan for specific keywords (like <code>initialize2</code>) in logs.</li>
<li><strong>Challenge:</strong> The noise is huge, and after a hit, a &quot;slow path&quot; process (such as requesting <code>getTransaction</code>) is usually needed to supplement the parsing of pool token information.</li>
</ul>
<hr>
<h3>2. Core Architecture: Stream Multiplexing</h3>
<p>In a mature system, you may need to subscribe to updates for hundreds of pools simultaneously. If you open a thread for each subscription, system overhead will explode instantly.</p>
<h4>2.1 Asynchronous Stream Merging (Select All)</h4>
<p>We use Rust's asynchronous ecosystem (Tokio + Futures), utilizing <code>select_all</code> to merge hundreds or thousands of WebSocket subscription streams into a single event stream. This is like aggregating feeds from hundreds of surveillance cameras onto a single video wall, uniformly distributed and processed by a core loop (Event Loop).</p>
<h4>2.2 Thread Model and &quot;Slow Path&quot; Detachment</h4>
<p>The response speed of the monitoring main loop determines the system's latency upper limit.</p>
<ul>
<li><strong>Fast Path (Hot Path):</strong> Receive data -&gt; Memory decode -&gt; Trigger calculation.</li>
<li><strong>Slow Path (Long Path):</strong> If extra RPC requests are needed to complete information (like in Sniper mode), use <code>tokio::spawn</code> to immediately detach it to a background task execution, strictly prohibiting blocking the monitoring main loop.</li>
</ul>
<hr>
<h3>3. Extreme Parsing: Skipping Useless Information</h3>
<p>Solana's Account Data is usually a binary Buffer. An inefficient approach is to deserialize it into a complete object, while the extreme approach is <strong>&quot;On-Demand Parsing&quot;</strong>.</p>
<h4>3.1 Zero-Copy and Offset Positioning</h4>
<p>For example, when monitoring Orca Whirlpool, we might only need <code>sqrt_price</code> and <code>tick_current_index</code>.</p>
<ul>
<li>We don't need to parse the entire pool state (hundreds of bytes), just directly read the 16 bytes at a specific Offset in the data stream.</li>
<li>In Rust, by cooperating with <code>bytemuck</code> or simple pointer offsets, key pricing parameter extraction can be completed in microseconds.</li>
</ul>
<h4>3.2 The Art of Filters</h4>
<p>In the <code>logsSubscribe</code> stage, utilizing the <code>mentions</code> filter provided by RPC can filter out 90% of irrelevant logs on the node side, greatly reducing network IO pressure on the Searcher end.</p>
<hr>
<h3>4. Performance Optimization Points: Milliseconds from Engineering Implementation</h3>
<ol>
<li><strong>Sharding:</strong> Addressing connection limits of public RPC nodes, Scout automatically shards whitelist pools, receiving concurrently via multiple WebSocket connections to avoid Backpressure on a single connection.</li>
<li><strong>Noise Reduction Mechanism:</strong> For high-frequency changing pools, implement simple packet loss or coalescing logic. If multiple updates occur for the same pool within 1ms, only process the last state to save computing resources in the strategy layer.</li>
<li><strong>Pre-reading Index:</strong> When parsing logs, pre-load Decimals information of common tokens to avoid secondary requests when calculating spreads.</li>
</ol>
<hr>
<h3>5. Technical Demo: Multi-Stream Event Merging Logic (Python Simulation)</h3>
<p>Although the high-performance core is in Rust, its &quot;many-to-one&quot; merging and distribution logic can be perfectly expressed using asyncio:</p>
<pre><code class="language-python">import asyncio
import random

async def pool_monitor(pool_id: str):
    &quot;&quot;&quot;Simulate a subscription stream for an independent account&quot;&quot;&quot;
    while True:
        await asyncio.sleep(random.uniform(0.01, 0.1)) # Simulate random push
        yield {&quot;pool&quot;: pool_id, &quot;data&quot;: random.random()}

async def main_scout_loop():
    # Simulate monitoring list obtained from Inventory
    watchlist = [&quot;Pool_A&quot;, &quot;Pool_B&quot;, &quot;Pool_C&quot;]
    
    # Aggregate all streams into a queue
    queue = asyncio.Queue()

    async def producer(pool_id):
        async for update in pool_monitor(pool_id):
            await queue.put(update)

    # Start all producer tasks
    for p in watchlist:
        asyncio.create_task(producer(p))

    print(&quot;[*] Scout engine started, listening to multi-channel signals...&quot;)
    
    # Core consumption loop: Strategy distribution processing
    while True:
        event = await queue.get()
        # Immediately trigger asynchronous calculation in strategy layer
        asyncio.create_task(execute_strategy(event))

async def execute_strategy(event):
    print(f&quot;⚡️ Signal captured: {event['pool']} -&gt; Triggering pricing model calculation&quot;)

if __name__ == &quot;__main__&quot;:
    asyncio.run(main_scout_loop())
</code></pre>
<hr>
<h3>6. Summary: The Sharpest Radar</h3>
<p>The design level of the Scout module directly determines the bot's &quot;starting speed&quot;. An excellent Scout should be:</p>
<ul>
<li><strong>Broad enough:</strong> Capable of capturing new opportunities via logs.</li>
<li><strong>Accurate enough:</strong> Capable of locking onto price fluctuations via account subscriptions.</li>
<li><strong>Fast enough:</strong> Adopting asynchronous architecture and binary parsing to suppress latency to the microsecond level.</li>
</ul>
<hr>
<h2>AMM: Pricing and Mathematical Models</h2>
<p>This project aims to perform &quot;pricing&quot; locally as much as possible: even with only the raw data of pool accounts, it can quickly calculate prices/quotes locally, reducing reliance on RPC simulations and lowering latency.</p>
<h3>1. Module Functionality Overview</h3>
<ul>
<li><strong>CPMM (Raydium):</strong> Constant Product pricing and quote calculation (<code>x*y=k</code>).</li>
<li><strong>CLMM (Orca Whirlpool):</strong> Deriving price from <code>sqrt_price(Q64.64)</code> and supporting tick/liquidity field reading (currently only for price reading; full swap requires tick arrays).</li>
<li><strong>Quote:</strong> Calculating <code>amount_out</code> locally by fetching necessary account data (AMM state + vault balance) via RPC.</li>
</ul>
<p>Corresponding Source Code:</p>
<ul>
<li>CPMM: <code>../../scavenger/src/amm/math.rs</code></li>
<li>Raydium AMM State: <code>../../scavenger/src/amm/raydium_v4.rs</code></li>
<li>Orca Whirlpool Price Parsing: <code>../../scavenger/src/amm/orca_whirlpool.rs</code></li>
<li>Raydium Quote: <code>../../scavenger/src/core/quote.rs</code></li>
</ul>
<pre><code class="language-mermaid">flowchart LR
  D[Pool Account Data] --&gt;|Raydium| CPMM[CPMM Pricing/Quote]
  D --&gt;|Orca| Q64[Q64.64 sqrtPrice Parsing]
  CPMM --&gt; QUOTE[amount_out]
  Q64 --&gt; PRICE[price]
</code></pre>
<h3>2. Technical Implementation Details</h3>
<h4>2.1 Raydium (CPMM) Core</h4>
<p>Common integer formulas for CPMM (including fees):</p>
<ul>
<li><code>amount_in_with_fee = amount_in * (fee_den - fee_num)</code></li>
<li><code>amount_out = (amount_in_with_fee * reserve_out) / (reserve_in * fee_den + amount_in_with_fee)</code></li>
</ul>
<p>This project uses <code>U256</code> to avoid u128 overflow, see <code>amm/math.rs</code>.</p>
<h4>2.2 Orca Whirlpool (CLMM) Core</h4>
<p>Orca Whirlpool's <code>sqrt_price</code> is represented in Q64.64 (fixed-point number):</p>
<ul>
<li><code>price = (sqrt_price / 2^64)^2</code></li>
</ul>
<p>To avoid defining the full Whirlpool account structure (which involves large fields and reward infos), this project uses an &quot;offset slicing&quot; approach to read key fields from account data:</p>
<ul>
<li>liquidity: <code>data[49..65]</code></li>
<li>sqrt_price: <code>data[65..81]</code></li>
<li>tick: <code>data[81..85]</code></li>
</ul>
<p>See <code>decode_current_price</code> in <code>amm/orca_whirlpool.rs</code>.</p>
<h3>3. Key Algorithms and Data Structures</h3>
<ul>
<li><strong>High-Precision Integers:</strong> <code>U256</code> (generated by Rust <code>uint</code> macro)</li>
<li><strong>Local Quoting:</strong> <code>core/quote.rs</code> calls <code>amm/math.rs</code> after fetching vault balances.</li>
</ul>
<h3>4. Performance Optimization Points</h3>
<ul>
<li><strong>Local Pricing First:</strong> Calculate prices directly using account data to avoid heavy RPC calls like <code>simulateTransaction</code>.</li>
<li><strong>Caching and Batch Reading (Future Improvements):</strong>
<ul>
<li>Short TTL caching for frequently used vault balances.</li>
<li>Batch RPC (<code>getMultipleAccounts</code>) for multiple quotes within the same slot.</li>
</ul>
</li>
</ul>
<h3>5. Runnable Example (CPMM Quote + Q64.64 Price Conversion)</h3>
<pre><code class="language-python">def get_amount_out(amount_in: int, reserve_in: int, reserve_out: int, fee_num: int, fee_den: int) -&gt; int:
    # CPMM (with fee) integer implementation: suitable for quick quotes/estimations
    amount_in_with_fee = amount_in * (fee_den - fee_num)
    numerator = amount_in_with_fee * reserve_out
    denominator = reserve_in * fee_den + amount_in_with_fee
    return numerator // denominator

def sqrt_price_x64_to_price(sqrt_price_x64: int) -&gt; float:
    # Orca Whirlpool: price = (sqrt_price / 2^64)^2
    q64 = float(1 &lt;&lt; 64)
    p = float(sqrt_price_x64) / q64
    return p * p

def demo():
    out = get_amount_out(amount_in=100, reserve_in=1000, reserve_out=1000, fee_num=25, fee_den=10000)
    print(&quot;cpmm amount_out:&quot;, out)
    print(&quot;price(sqrt=2^64):&quot;, sqrt_price_x64_to_price(1 &lt;&lt; 64))

if __name__ == &quot;__main__&quot;:
    demo()
</code></pre>
<hr>
<h2>Strategy: Cross-DEX Arbitrage Strategy (arb)</h2>
<p>The arb strategy is embodied in this project as a closed loop of &quot;Discover Spread → Decide Direction → Construct Atomic Transaction → Send Bundle&quot;. The current implementation uses &quot;Price Difference between Raydium vs Orca&quot; as the trigger condition, and constructs a Raydium swap + tip bundle when an opportunity is found (Orca swap construction currently lacks tick array dependency, which is a to-do item).</p>
<h3>1. Module Functionality Overview</h3>
<ul>
<li>Receive pool account updates (Raydium or Orca).</li>
<li>Parse Price:
<ul>
<li>Orca: Calculate price directly from <code>sqrt_price</code>.</li>
<li>Raydium: Read cached fields from AMM state and calculate price (or read vault balance via quote module for more realistic quoting).</li>
</ul>
</li>
<li>Calculate Spread: Trigger when spread exceeds threshold.</li>
<li>Generate Transaction Instructions: Construct swap instruction, append tip instruction.</li>
<li>Send Execution: Serialize transaction to base58, call Jito bundle interface to send.</li>
</ul>
<pre><code class="language-mermaid">flowchart TD
  U[Pool Update] --&gt; P[Parse Price]
  P --&gt; S[Spread Check]
  S --&gt;|hit| D[Direction]
  D --&gt; IX[Build Instructions]
  IX --&gt; B[Send Bundle]
  S --&gt;|miss| X[Discard]
</code></pre>
<p>Corresponding Source Code:</p>
<ul>
<li><code>../../scavenger/src/strategies/arb.rs</code></li>
</ul>
<h3>2. Technical Implementation Details</h3>
<h4>2.1 Trigger and Direction</h4>
<ul>
<li>Spread Calculation: <code>spread = abs(price_a - price_b) / min(price_a, price_b)</code></li>
<li>Direction Selection: Buy Low Sell High (If A &lt; B, buy A sell B, otherwise vice versa)</li>
</ul>
<h4>2.2 Instruction Construction and Limitations</h4>
<p>Current Implementation:</p>
<ul>
<li>Raydium swap: Constructible (see <code>build_raydium_swap_ix</code> in <code>arb.rs</code>)</li>
<li>Orca swap: Logic is clear but lacks account completion like tick array/oracle, temporarily returns directly (see warning in <code>arb.rs</code>)</li>
</ul>
<p>Therefore, at this stage, the &quot;real executable arbitrage closed loop&quot; still needs to complete the account derivation and tick array selection logic for Orca swap.</p>
<h3>3. Key Algorithms and Data Structures</h3>
<ul>
<li>Spread determination and direction selection</li>
<li>Atomic Transaction Instruction List: <code>Vec&lt;Instruction&gt;</code> (Swap first, then Tip)</li>
<li>Transaction serialization and bundle payload (see execution module)</li>
</ul>
<h3>4. Performance Optimization Points</h3>
<p>Key bottlenecks in arbitrage strategy performance are usually not in mathematical calculations, but in:</p>
<ul>
<li>Quoting Acquisition (RPC/Account Reading): Cache as much as possible or use accountSubscribe to get data directly.</li>
<li>Account Derivation Required for Instruction Construction: Pre-calculation and caching (e.g., ATA, PDA, tick arrays).</li>
<li>Transaction Inclusion Probability: Dynamic adjustment of tip/priority fee (refer to profit/tip model in <code>core/pricing.rs</code>).</li>
</ul>
<h3>5. Runnable Example (Spread Determination + Direction Selection + Tip Calculation)</h3>
<p>The following example demonstrates a &quot;runnable minimal arbitrage decider&quot;: inputs prices on both sides and configuration, outputs direction and tip (does not depend on Solana SDK).</p>
<pre><code class="language-python">from dataclasses import dataclass
from typing import Optional, Tuple

@dataclass(frozen=True)
class ProfitConfig:
    min_profit_sol: float = 0.01
    max_tip_sol: float = 0.1
    gas_cost_sol: float = 0.000005
    dynamic_tip_ratio: float = 0.5

def decide_arbitrage(
    price_a: float,
    price_b: float,
    input_sol: float,
    cfg: ProfitConfig,
) -&gt; Optional[Tuple[str, float]]:
    # Input: Prices on both sides and invested capital; Output: Direction and tip (if net profit threshold is met)
    if price_a &lt;= 0 or price_b &lt;= 0:
        return None

    buy_on = &quot;A&quot; if price_a &lt; price_b else &quot;B&quot;
    sell_on = &quot;B&quot; if buy_on == &quot;A&quot; else &quot;A&quot;

    gross_profit = input_sol * (abs(price_a - price_b) / min(price_a, price_b))
    potential_tip = gross_profit * cfg.dynamic_tip_ratio
    tip = min(potential_tip, cfg.max_tip_sol)
    net_profit = gross_profit - cfg.gas_cost_sol - tip

    if net_profit &gt;= cfg.min_profit_sol:
        return (f&quot;buy {buy_on} -&gt; sell {sell_on}&quot;, tip)
    return None

if __name__ == &quot;__main__&quot;:
    cfg = ProfitConfig()
    decision = decide_arbitrage(price_a=1.00, price_b=1.02, input_sol=1.0, cfg=cfg)
    print(&quot;decision:&quot;, decision)
</code></pre>
<hr>
<h2>Landing the Trade: Jito Bundles and Solana's PBS</h2>
<p>Scout finds the opportunity and AMM prices it, but that is only half the battle — the other half is getting your transaction <strong>included in a block before your competitors</strong>. On Solana that runs through one piece of infrastructure: <strong>Jito</strong>.</p>
<hr>
<h3>1. What is Jito? Solana's &quot;Order Maker&quot;</h3>
<p>Before Jito, arbitrageurs on Solana mainly competed for ordering through &quot;Spamming&quot;, which led to severe network congestion. Jito's emergence mimicked the idea of Flashbots on Ethereum, introducing the concept of <strong>Proposer-Builder Separation (PBS)</strong> to Solana.</p>
<h4>1.1 Three Core Components of Jito</h4>
<ol>
<li><strong>Jito-Solana Client:</strong> This is a modified version of the Solana validator software. Currently, about 80% of validators on the network run it.</li>
<li><strong>Jito Block Engine:</strong> This is an off-chain sealed auction house. Searchers pack transactions into a <strong>Bundle</strong> and submit it to the engine along with a <strong>Tip</strong>.</li>
<li><strong>Bundle Mechanism:</strong> Ensures that a group of transactions either all execute or none execute. This perfectly solves the risk of &quot;broken legs&quot; (one side executes while the other fails) in arbitrage.</li>
</ol>
<hr>
<h3>2. Jito's Profit Loop: From Searchers to Token Holders</h3>
<p>Jito has established an ingenious profit distribution chain, which is also the basis of its yield farming logic:</p>
<ol>
<li><strong>Searcher:</strong> Discovers arbitrage opportunities, constructs Bundles, and pays <strong>Tips</strong> to Jito nodes.</li>
<li><strong>Validator:</strong> Runs Jito nodes, collects Tips, and distributes them to stakers.</li>
<li><strong>JitoSOL (Liquid Staking Protocol):</strong> Automatically selects high-quality validators running Jito nodes for staking and captures these MEV revenues.</li>
</ol>
<hr>
<h3>3. Advanced: &quot;MEV Yield Farming&quot; Solutions Based on Jito</h3>
<p>Ordinary users don't need to write code to run bots to share the MEV dividends through the following ways:</p>
<h4>Solution A: Basic Yield — Holding JitoSOL (LST)</h4>
<p>JitoSOL is the largest Liquid Staking Token (LST) on Solana. Compared to ordinary SOL staking, JitoSOL's yield composition is:</p>
<ul>
<li><strong>Staking Rewards + MEV Tips Share.</strong></li>
<li><strong>Advantage:</strong> Auto-compounding, yield is usually 1%-2% higher than native staking.</li>
</ul>
<h4>Solution B: Leveraged Yield — Looping</h4>
<p>In lending protocols like <strong>Kamino</strong> or <strong>Marginfi</strong>:</p>
<ol>
<li>Deposit JitoSOL as collateral.</li>
<li>Borrow SOL.</li>
<li>Swap borrowed SOL back to JitoSOL and deposit again.</li>
</ol>
<ul>
<li><strong>Principle:</strong> Through looping leverage, you are essentially longing the difference between &quot;MEV yield and borrowing rate&quot;.</li>
</ul>
<h4>Solution C: Liquidity Mining (LPing)</h4>
<p>Provide liquidity for the <strong>JitoSOL/SOL</strong> pair in Concentrated Liquidity Market Maker (CLMM) pools on <strong>Orca</strong> or <strong>Raydium</strong>.</p>
<ul>
<li><strong>Advantage:</strong> Since JitoSOL and SOL are highly correlated, there is almost no Impermanent Loss (IL), while earning trading fees + staking rewards + MEV share.</li>
</ul>
<hr>
<h3>4. Developer Perspective: How to Send Transactions Using Jito?</h3>
<p>For MEV developers, Jito provides gRPC and HTTP interfaces. A typical Bundle construction logic is as follows:</p>
<ol>
<li><strong>Construct Transaction Stream:</strong> Contains your arbitrage instructions (e.g., Swap A -&gt; Swap B).</li>
<li><strong>Insert Tip Instruction:</strong> In the last transaction of the Bundle, add a transfer instruction to transfer a certain amount of SOL to the <strong>Tip Account</strong> specified by Jito.</li>
<li><strong>Submit Request:</strong> Send the packed Bundle to the Block Engine.</li>
</ol>
<p><strong>Note:</strong> Jito ranks all received Bundles based on the Tip amount, and the highest bidder wins.</p>
<hr>
<h3>5. Summary: Democratization of MEV Revenue</h3>
<p>Jito's success lies in making MEV revenue, which was originally a &quot;black box&quot;, transparent and market-oriented.</p>
<ul>
<li>For the <strong>Network</strong>, it reduces spam transactions and improves stability.</li>
<li>For <strong>Developers</strong>, it provides atomicity guarantees and deterministic ordering.</li>
<li>For <strong>Ordinary Users</strong>, through products like JitoSOL, it allows everyone to share the prey revenue in the &quot;Dark Forest&quot; with a low threshold.</li>
</ul>
<p>In a Solana investment portfolio, understanding and making good use of Jito's yield engine is a necessary path for you to advance from an &quot;Ordinary Player&quot; to an &quot;Advanced Player&quot;.</p>
<hr>
<h2>Risk: Risk Control and Safety Checks</h2>
<p>MEV strategy risks come not only from &quot;price fluctuations&quot; but also from &quot;asset permissions and tradability&quot;. For example, if a new token has a Freeze Authority, it may cause assets to be unable to be transferred out, turning arbitrage/sniping directly into a capital black hole.</p>
<h3>1. Module Functionality Overview</h3>
<ul>
<li><strong>Security Checks on Target Token Mint:</strong>
<ul>
<li>Whether Freeze Authority is None</li>
<li>Whether Mint Authority has been discarded (strict strategy may require it to be None)</li>
<li>Read supply/decimals as risk references</li>
</ul>
</li>
</ul>
<pre><code class="language-mermaid">flowchart TD
  M[Mint Pubkey] --&gt; RPC[get_account]
  RPC --&gt; PARSE[Mint::unpack]
  PARSE --&gt; DECIDE{Authority checks}
  DECIDE --&gt; SAFE[Allow / warn]
  DECIDE --&gt; BLOCK[Reject]
</code></pre>
<p>Corresponding Source Code:</p>
<ul>
<li><code>../../scavenger/src/core/risk.rs</code></li>
</ul>
<h3>2. Technical Implementation Details</h3>
<p>Execution steps of <code>check_token_risk</code>:</p>
<ol>
<li>RPC fetch mint account: <code>get_account(mint)</code></li>
<li>Parse data using SPL Token's <code>Mint::unpack</code></li>
<li>Judge risk based on authority fields and output <code>RiskReport</code></li>
</ol>
<p>Common extended checks in strategies include:</p>
<ul>
<li>Whether transfer is possible (transfer hook, blacklist mechanisms, etc.)</li>
<li>Whether LP is locked, whether liquidity can be removed</li>
<li>Whether the contract is upgradable (upgrade authority)</li>
<li>Transaction tax/Anti-MEV mechanisms (some tokens deduct tax during transfer/swap)</li>
</ul>
<h3>3. Key Algorithms and Data Structures</h3>
<ul>
<li><code>RiskReport</code>: Unifies check results, facilitating the strategy layer to make &quot;hard rejection/soft warning&quot; decisions.</li>
</ul>
<h3>4. Performance Optimization Points</h3>
<ul>
<li><strong>Caching:</strong> Cache risk reports for the same mint (TTL e.g., 10~60 minutes) to avoid high-frequency repetitive RPC calls.</li>
<li><strong>Batching:</strong> Use <code>getMultipleAccounts</code> to batch fetch a group of mints.</li>
</ul>
<h3>5. Runnable Example (Minimal Risk Checker)</h3>
<p>This example simulates mint permission check logic using pure Python data structures and can be run directly:</p>
<pre><code class="language-python">from dataclasses import dataclass
from typing import List, Optional

@dataclass(frozen=True)
class MintMeta:
    mint_authority: Optional[str]
    freeze_authority: Optional[str]
    supply: int
    decimals: int

@dataclass(frozen=True)
class RiskReport:
    is_safe: bool
    reasons: List[str]

def check_mint_risk(m: MintMeta, strict: bool = False) -&gt; RiskReport:
    # When strict=True, mint_authority is also treated as a hard risk
    reasons: List[str] = []
    safe = True
    if m.freeze_authority is not None:
        safe = False
        reasons.append(&quot;freeze_authority is set&quot;)
    if strict and m.mint_authority is not None:
        safe = False
        reasons.append(&quot;mint_authority is set (strict)&quot;)
    if m.decimals &gt; 12:
        reasons.append(&quot;unusual decimals&quot;)
    return RiskReport(is_safe=safe, reasons=reasons)

if __name__ == &quot;__main__&quot;:
    demo = MintMeta(mint_authority=&quot;AUTH&quot;, freeze_authority=None, supply=10_000_000, decimals=6)
    print(check_mint_risk(demo, strict=False))
    print(check_mint_risk(demo, strict=True))
</code></pre>
<h2>Final build checklist</h2>
<p>If I were reviewing a Solana MEV searcher before letting it trade real capital, I would ask for these artifacts:</p>
<ul>
<li><strong>Pool inventory snapshot.</strong> Which pools are watched, why they were selected, when they were last refreshed, and which routes they support.</li>
<li><strong>State freshness metrics.</strong> Median and tail delay from account update to local state update.</li>
<li><strong>Pricing parity tests.</strong> Local CPMM/CLMM calculations compared against known swaps or simulation outputs.</li>
<li><strong>Route simulation record.</strong> Expected in/out, slippage, fees, priority fee, Jito tip, and minimum acceptable profit.</li>
<li><strong>Execution attribution.</strong> For every submitted transaction or bundle: landed/not landed, slot, error, realized PnL, and reason for failure.</li>
<li><strong>Risk report.</strong> Mint authority, freeze authority, transfer restrictions, upgradeability, liquidity lock status, and any blacklist/tax behavior.</li>
<li><strong>Kill switches.</strong> Max loss per trade, max notional per route, stale-state cutoff, RPC/feed degradation cutoff, and asset-level blocklist.</li>
<li><strong>Post-trade reconciliation.</strong> Compare predicted vs. realized amounts. If the gap exceeds tolerance, stop the route until investigated.</li>
</ul>
<p>The difference between a toy searcher and a production searcher is not the arbitrage formula. It is the ability to prove that every trade was made with fresh state, valid pricing, bounded downside, and a clear reason for execution.</p>
<h2>What to build first</h2>
<p>For a personal project, I would build in this order:</p>
<ol>
<li><strong>Read-only inventory and state mirror.</strong> No trading, just maintain live pool state and measure freshness.</li>
<li><strong>Pricing parity harness.</strong> Feed historical or sampled pool states into local pricing functions and compare against simulation.</li>
<li><strong>Paper-trading route detector.</strong> Log opportunities with estimated fees and tips, but do not submit.</li>
<li><strong>Risk gate.</strong> Reject unsafe mints and routes before execution exists.</li>
<li><strong>Tiny notional execution.</strong> Only after the first four layers produce stable logs.</li>
<li><strong>Bundle and priority-fee optimization.</strong> Optimize landing only after the strategy is demonstrably sane.</li>
</ol>
<p>Skipping to execution first is how searchers lose money while feeling technically impressive. The safer path is to make the system explain itself before it is allowed to act.</p>
`,Zy=`<h1>Detailed Explanation of Blockchain</h1>
<p>One question organizes this whole guide: in a Web3 stack, which layer owns <strong>ownership</strong>, which owns <strong>execution</strong>, which owns <strong>data access</strong> — and which parts should never be on-chain at all. Get that split right and the terminology takes care of itself.</p>
<h2>How to read this guide</h2>
<ol>
<li><strong>Trust and consensus.</strong> Why a blockchain can replace institutional trust with public verification.</li>
<li><strong>Accounts and wallets.</strong> Why the private key is not a password but the source of authority.</li>
<li><strong>Smart contracts.</strong> How code becomes a shared execution environment.</li>
<li><strong>Tokens and stablecoins.</strong> How ownership and settlement become programmable.</li>
<li><strong>DeFi application design.</strong> How lending, collateral, liquidation, and oracle prices fit together.</li>
<li><strong>Front-end and indexing.</strong> Why a real dApp still needs off-chain infrastructure.</li>
<li><strong>AI and blockchain.</strong> Where the combination is useful, and where it is just narrative.</li>
</ol>
<p>The test at the end: sketch a lending dApp and say which data belongs on-chain, which belongs in an indexer, and which should stay in a traditional database. If you can do that, the stack has clicked.</p>
<h2>What is blockchain?</h2>
<h3>Blockchain and Smart Contracts</h3>
<p>Before delving into code, we need to understand the core essence of Web3: <strong>the shift from &quot;trusting people/institutions&quot; to &quot;trusting code/math&quot;</strong>.</p>
<ul>
<li><strong>Blockchain:</strong> A decentralized append-only database (ledger). Its core features are <strong>immutability</strong> and <strong>transparency</strong>, demo website https://blockchaindemo.io/.</li>
</ul>
<p>Sources of trust in blockchain networks:</p>
<table><tbody>
<tr>
<td>
<p><strong>Feature</strong></p>
</td>
<td>
<p><strong>Bitcoin (BTC)</strong></p>
</td>
<td>
<p><strong>Ethereum (ETH)</strong></p>
</td>
<td>
<p><strong>Solana (SOL)</strong></p>
</td>
</tr>
<tr>
<td>
<p><strong>Packer Identity</strong></p>
</td>
<td>
<p>Miner (winner of the computing power competition)</p>
</td>
<td>
<p>Verifier (randomly assigned by the system)</p>
</td>
<td>
<p>Leader (rotating according to the schedule)</p>
</td>
</tr>
<tr>
<td>
<p><strong>Verify Engagement</strong></p>
</td>
<td>
<p>All nodes across the network independently verify</p>
</td>
<td>
<p>Random Committee + Final Network-wide Confirmation</p>
</td>
<td>
<p>Real-time voting of all network validators</p>
</td>
</tr>
<tr>
<td>
<p><strong>Consensus Threshold</strong></p>
</td>
<td>
<p>51% honest computing power ensures security</p>
</td>
<td>
<p>2/3 (66.7%) stake confirmed</p>
</td>
<td>
<p>2/3 (66.7%) stake confirmed</p>
</td>
</tr>
<tr>
<td>
<p><strong>Main risk points</strong></p>
</td>
<td>
<p>51% hashrate attack</p>
</td>
<td>
<p>1/3 of the staked amount leads to downtime/forking</p>
</td>
<td>
<p>1/3 of the staked amount leads to downtime</p>
</td>
</tr>
</tbody></table>
<ul>
<li><strong>Smart Contract:</strong> &quot;Automatically executable code&quot; deployed on the blockchain. It is like a vending machine: as long as you insert the correct tokens and meet the conditions, it will surely execute the pre-set result, and no one can interfere.</li>
</ul>
<pre><code class="language-Solidity">// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SimpleBank {
    address public owner = msg.sender; // 部署者即管理员

    // 只有管理员能执行的权限锁
    modifier onlyOwner() {
        require(msg.sender == owner, &quot;Not owner&quot;);
        _;
    }

    // 存款：只要标记 payable，转账进来的钱就自动存入合约余额
    function deposit() public payable {}

    // 提现：将合约里的钱转给管理员
    function withdraw(uint256 amount) public onlyOwner {
        require(address(this).balance &gt;= amount, &quot;Balance low&quot;);
        (bool success, ) = owner.call{value: amount}(&quot;&quot;);
        require(success, &quot;Failed&quot;);
    }

    // 查询：查看合约现在存了多少钱
    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    // 快捷存款：直接往合约地址转账也能收钱
    receive() external payable { deposit(); }
}
</code></pre>
<p>Details can be learned through https://ethereum.org/zh/</p>
<h3>Web3 Hierarchy and Track Classification</h3>
<ul>
<li>
<p><strong>L1/L2 (Infrastructure):</strong> Settlement layer (Ethereum, Arbitrum, Base).</p>
</li>
<li>
<p><strong>RPC (Communication Layer):</strong> Gateway for front-end to communicate with the chain (Alchemy, Infura).</p>
</li>
<li>
<p><strong>Wallet (Identity Layer):</strong> User's private key management and signature tools (Metamask, WalletConnect).</p>
</li>
</ul>
<table><tbody>
<tr>
<td>
<p><strong>Track Classification</strong></p>
</td>
<td>
<p><strong>Project Name</strong></p>
</td>
<td>
<p><strong>Project Introduction</strong></p>
</td>
<td>
<p><strong>Official Website</strong></p>
</td>
</tr>
<tr>
<td rowspan="2">
<p><strong>Layer 1 (Underlying Public Blockchain)</strong></p>
</td>
<td>
<p><strong>Ethereum</strong></p>
</td>
<td>
<p>The world's largest smart contract platform, the settlement layer and security cornerstone of Web3.</p>
</td>
<td>
<p><a href="https://www.google.com/url?sa=E&amp;q=https%3A%2F%2Fethereum.org">ethereum.org</a></p>
</td>
</tr>
<tr>
<td>
<p><strong>Solana</strong></p>
</td>
<td>
<p>Renowned for high performance and low latency, it supports high-frequency trading and large-scale applications.</p>
</td>
<td>
<p><a href="https://www.google.com/url?sa=E&amp;q=https%3A%2F%2Fsolana.com">solana.com</a></p>
</td>
</tr>
<tr>
<td rowspan="2">
<p><strong>Layer 2 (Scaling Network)</strong></p>
</td>
<td>
<p><strong>Arbitrum / Optimism</strong></p>
</td>
<td>
<p>The mainstream scaling solution for Ethereum significantly reduces Gas fees while maintaining security.</p>
</td>
<td>
<p><a href="https://www.google.com/url?sa=E&amp;q=https%3A%2F%2Farbitrum.io">arbitrum.io</a></p>
</td>
</tr>
<tr>
<td>
<p><strong>Base</strong></p>
</td>
<td>
<p>The L2 launched by Coinbase has extremely rapid ecosystem growth and is highly suitable for social and consumer applications.</p>
</td>
<td>
<p><a href="https://www.google.com/url?sa=E&amp;q=https%3A%2F%2Fbase.org">base.org</a></p>
</td>
</tr>
<tr>
<td rowspan="5">
<p><strong>DeFi (Lending and Collateral)</strong></p>
</td>
<td>
<p><strong>Aave</strong></p>
</td>
<td>
<p>The world's largest decentralized lending protocol, supporting the collateralization and borrowing of multiple tokens.</p>
</td>
<td>
<p><a href="https://www.google.com/url?sa=E&amp;q=https%3A%2F%2Faave.com">aave.com</a></p>
</td>
</tr>
<tr>
<td>
<p><strong>Sky (原 MakerDAO)</strong></p>
</td>
<td>
<p>The issuer of lending and decentralized stablecoins (USDS/DAI), the central bank of DeFi.</p>
</td>
<td>
<p><a href="https://www.google.com/url?sa=E&amp;q=https%3A%2F%2Fsky.money">sky.money</a></p>
</td>
</tr>
<tr>
<td>
<p><strong>Lido</strong></p>
</td>
<td>
<p>The largest liquid staking protocol (LSD), enabling staked ETH to maintain liquidity.</p>
</td>
<td>
<p><a href="https://www.google.com/url?sa=E&amp;q=https%3A%2F%2Flido.fi">lido.fi</a></p>
</td>
</tr>
<tr>
<td>
<p><strong>Ondo Finance</strong></p>
</td>
<td>
<p>Tokenize real-world assets (such as US Treasury bonds, real estate, and gold) and introduce them into the blockchain</p>
</td>
<td>
<p><a href="https://www.google.com/url?sa=E&amp;q=https%3A%2F%2Fondo.finance%2F">ondo.finance</a></p>
</td>
</tr>
<tr>
<td>
<p><strong>Yearn Finance</strong></p>
</td>
<td>
<p>Automatically searches for the highest-yielding strategies in each lending or trading pool for users</p>
</td>
<td>
<p><a href="https://www.google.com/url?sa=E&amp;q=https%3A%2F%2Fyearn.fi%2F">yearn.fi</a></p>
</td>
</tr>
<tr>
<td rowspan="2">
<p><strong>DEX (Decentralized Exchange)</strong></p>
</td>
<td>
<p><strong>Uniswap</strong></p>
</td>
<td>
<p>The pioneer of Automated Market Makers (AMM) and the DEX with the largest on-chain trading volume.</p>
</td>
<td>
<p><a href="https://www.google.com/url?sa=E&amp;q=https%3A%2F%2Funiswap.org">uniswap.org</a></p>
</td>
</tr>
<tr>
<td>
<p><strong>Curve</strong></p>
</td>
<td>
<p>A DEX specializing in stablecoin trading, renowned for its extremely low slippage and efficient algorithms.</p>
</td>
<td>
<p><a href="https://www.google.com/url?sa=E&amp;q=https%3A%2F%2Fcurve.fi">curve.fi</a></p>
</td>
</tr>
<tr>
<td rowspan="2">
<p><strong>Oracle &amp; Index (Infrastructure)</strong></p>
</td>
<td>
<p><strong>Chainlink</strong></p>
</td>
<td>
<p>Decentralized oracle securely inputs real-world data (such as prices) onto the blockchain.</p>
</td>
<td>
<p><a href="https://www.google.com/url?sa=E&amp;q=https%3A%2F%2Fchain.link">chain.link</a></p>
</td>
</tr>
<tr>
<td>
<p><strong>The Graph</strong></p>
</td>
<td>
<p>A Web3 search engine that provides query and indexing services for on-chain data.</p>
</td>
<td>
<p><a href="https://www.google.com/url?sa=E&amp;q=https%3A%2F%2Fthegraph.com">thegraph.com</a></p>
</td>
</tr>
<tr>
<td rowspan="2">
<p><strong>NFT &amp; Marketplace (Market)</strong></p>
</td>
<td>
<p><strong>OpenSea</strong></p>
</td>
<td>
<p>The world's most well-known comprehensive NFT trading market.</p>
</td>
<td>
<p><a href="https://www.google.com/url?sa=E&amp;q=https%3A%2F%2Fopensea.io">opensea.io</a></p>
</td>
</tr>
<tr>
<td>
<p><strong>Blur</strong></p>
</td>
<td>
<p>An NFT marketplace designed specifically for professional traders, featuring extremely high operational efficiency and an Incentive Mechanism.</p>
</td>
<td>
<p><a href="https://www.google.com/url?sa=E&amp;q=https%3A%2F%2Fblur.io">blur.io</a></p>
</td>
</tr>
<tr>
<td rowspan="2">
<p><strong>Social &amp; Identity (Social)</strong></p>
</td>
<td>
<p><strong>Farcaster</strong></p>
</td>
<td>
<p>Decentralized Social Protocol, currently the Web3 social network with the most vibrant developer community.</p>
</td>
<td>
<p><a href="https://www.google.com/url?sa=E&amp;q=https%3A%2F%2Ffarcaster.xyz">farcaster.xyz</a></p>
</td>
</tr>
<tr>
<td>
<p><strong>ENS</strong></p>
</td>
<td>
<p>Ethereum Name Service simplifies complex addresses into <code>name.eth</code>.</p>
</td>
<td>
<p><a href="https://www.google.com/url?sa=E&amp;q=https%3A%2F%2Fens.domains">ens.domains</a></p>
</td>
</tr>
<tr>
<td rowspan="2">
<p><strong>DePIN &amp; Storage (Storage)</strong></p>
</td>
<td>
<p><strong>Filecoin</strong></p>
</td>
<td>
<p>Decentralized storage network, which transforms idle hard drive space into secure storage services.</p>
</td>
<td>
<p><a href="https://www.google.com/url?sa=E&amp;q=https%3A%2F%2Ffilecoin.io">filecoin.io</a></p>
</td>
</tr>
<tr>
<td>
<p><strong>Arweave</strong></p>
</td>
<td>
<p>Permanent Storage Protocol, one-time payment, data permanently stored on the blockchain.</p>
</td>
<td>
<p><a href="https://www.google.com/url?sa=E&amp;q=https%3A%2F%2Farweave.org">arweave.org</a></p>
</td>
</tr>
</tbody></table>
<h3>DeFI and AI</h3>
<p><strong>DeFi</strong> is an abbreviation for <strong>Decentralized Finance</strong> (decentralized finance). It refers to an ecosystem of financial services built on blockchain networks (primarily Ethereum).</p>
<p>Simply put, the goal of DeFi is to replace traditional financial intermediaries such as banks and brokerages through <strong>smart contracts</strong> (Smart Contracts), enabling users to directly engage in activities such as lending, trading, and investing, with <strong>decentralized, permissionless, transparent, and open-source</strong> characteristics.</p>
<p>Currently, the most cutting-edge track is AI + DeFi, where AI addresses the issues of &quot;decision-making efficiency&quot; and &quot;automation&quot;, and DeFi provides the systems of &quot;decentralized clearing&quot; and &quot;value transfer&quot;.</p>
<table><tbody>
<tr>
<td>
<p><strong>Track/Direction</strong></p>
</td>
<td>
<p><strong>represents the project</strong></p>
</td>
<td>
<p><strong>Core Functions and Integration Points</strong></p>
</td>
<td>
<p><strong>Official Link</strong></p>
</td>
</tr>
<tr>
<td>
<p><strong>AI Agents and Automated Trading</strong></p>
</td>
<td>
<p><strong>Fetch.ai (ASI)</strong></p>
</td>
<td>
<p>Use AI agents to automate complex financial strategies (such as cross-chain arbitrage, automatic stop-loss).</p>
</td>
<td>
<p><a href="https://www.google.com/url?sa=E&amp;q=https%3A%2F%2Ffetch.ai%2F">https://fetch.ai/</a></p>
</td>
</tr>
<tr>
<td>
<p><strong>AI-driven hedge fund</strong></p>
</td>
<td>
<p><strong>Numerai</strong></p>
</td>
<td>
<p>The world's first AI-driven decentralized hedge fund predicts the stock market through AI models submitted by data scientists.</p>
</td>
<td>
<p><a href="https://www.google.com/url?sa=E&amp;q=https%3A%2F%2Fnumer.ai%2F">https://numer.ai/</a></p>
</td>
</tr>
<tr>
<td>
<p><strong>Smart Contract Security Scan</strong></p>
</td>
<td>
<p><strong>0x0.ai</strong></p>
</td>
<td>
<p>Utilize AI to audit smart contract vulnerabilities in real-time, preventing DeFi projects from being hacked or becoming Ponzi schemes.</p>
</td>
<td>
<p><a href="https://www.google.com/url?sa=E&amp;q=https%3A%2F%2F0x0.ai%2F">https://0x0.ai/</a></p>
</td>
</tr>
<tr>
<td>
<p><strong>AI Intelligent Agent Trading</strong></p>
</td>
<td>
<p><strong>Spectral</strong></p>
</td>
<td>
<p>Allows users to create or use AI agents to conduct automated trading, credit scoring, and risk management on-chain.</p>
</td>
<td>
<p><a href="https://www.google.com/url?sa=E&amp;q=https%3A%2F%2Fwww.spectral.finance%2F">https://www.spectral.finance/</a></p>
</td>
</tr>
<tr>
<td>
<p><strong>Forecast Market and Data</strong></p>
</td>
<td>
<p><strong>Ocean Protocol</strong></p>
</td>
<td>
<p>Provide data desensitization and trading required for AI training, and offer high-quality data support for DeFi prediction models.</p>
</td>
<td>
<p><a href="https://www.google.com/url?sa=E&amp;q=https%3A%2F%2Foceanprotocol.com%2F">https://oceanprotocol.com/</a></p>
</td>
</tr>
<tr>
<td>
<p><strong>Decentralized computing power finance</strong></p>
</td>
<td>
<p><strong>Bittensor (TAO)</strong></p>
</td>
<td>
<p>Although it is the basic layer, its financial subnet (Subnet) uses AI for price prediction and quantitative trading analysis.</p>
</td>
<td>
<p><a href="https://www.google.com/url?sa=E&amp;q=https%3A%2F%2Fbittensor.com%2F">https://bittensor.com/</a></p>
</td>
</tr>
<tr>
<td>
<p><strong>Tokenization of AI Resources</strong></p>
</td>
<td>
<p><strong>SAHARA</strong></p>
</td>
<td>
<p>Encapsulate the resources involved in the entire AI process, with providers profiting and users paying.</p>
</td>
<td>
<p>https://saharaai.com/zh/</p>
</td>
</tr>
</tbody></table>
<hr>
<h2>What is currency?</h2>
<p>In the world of Web3, &quot;coins&quot; are not only currency but also <strong>shares of protocols, fuel for systems, and even carriers of culture</strong>.</p>
<h3>What is &quot;Crypto&quot;? (What is Crypto?)</h3>
<p>From a technical perspective, a &quot;coin&quot; (cryptocurrency/token) is a <strong>digital entry</strong> on a blockchain ledger.</p>
<ul>
<li>
<p><strong>Native Coins (Coins):</strong> The essential &quot;fuel&quot; for the underlying operation of the blockchain. For example: <strong>ETH</strong> is the gas fee of the Ethereum network, without which the network cannot operate.</p>
</li>
<li>
<p><strong>Tokens:</strong> Application assets built on existing chains. For example, a token issued by a lending protocol, holding which allows participation in voting (governance rights) or receiving dividends.<strong>Essentially, cryptocurrency is the digitalization of &quot;ownership&quot;.</strong> Previously, ownership was stored in the company's database, but now it is stored in your private key.</p>
</li>
</ul>
<h3>What is &quot;cryptocurrency trading&quot;? (What is Trading?)</h3>
<p>&quot;Cryptocurrency trading&quot; is essentially <strong>a game of speculation on future expectations</strong>. Due to the 24/7 non-stop trading, lack of price limits, and cross-border flow in the cryptocurrency market, it has become the most sensitive and volatile speculative market in terms of global liquidity.</p>
<table><tbody>
<tr>
<td>
</td>
<td>
</td>
</tr>
</tbody></table>
<ul>
<li>
<p><strong>Bullish Logic:</strong> Believes that technology will change the world, or that there will be more people to take over.</p>
</li>
<li>
<p><strong>Short Logic:</strong> Believes that the bubble is too large or the project itself has no value.</p>
</li>
</ul>
<h3>Where to trade cryptocurrency</h3>
<ul>
<li>CEX (Centralized Exchanges) —— Centralized Exchange</li>
</ul>
<p><strong>Features:</strong> Similar to a stock exchange, it is operated by a specialized company, requires Know Your Customer (KYC) verification, has funds held in custody by the platform, and has a low operational threshold.</p>
<table><tbody>
<tr>
<td>
<p><strong>Platform Name</strong></p>
</td>
<td>
<p><strong>Industry Status</strong></p>
</td>
<td>
<p><strong>Features</strong></p>
</td>
<td>
<p><strong>Official Website Address</strong></p>
</td>
</tr>
<tr>
<td>
<p><strong>Binance (币安)</strong></p>
</td>
<td>
<p>Number One in the World</p>
</td>
<td>
<p>It has the largest trading volume, the most comprehensive range of asset types, and an extremely strong ecosystem (BSC).</p>
</td>
<td>
<p><a href="https://www.google.com/url?sa=E&amp;q=https%3A%2F%2Fwww.binance.com">binance.com</a></p>
</td>
</tr>
<tr>
<td>
<p><strong>Coinbase</strong></p>
</td>
<td>
<p>Compliance Benchmark</p>
</td>
<td>
<p>US listed companies, with the highest level of compliance, are the main channel for institutional funds to enter the market.</p>
</td>
<td>
<p><a href="https://www.google.com/url?sa=E&amp;q=https%3A%2F%2Fwww.coinbase.com">coinbase.com</a></p>
</td>
</tr>
<tr>
<td>
<p><strong>OKX (Ouyi)</strong></p>
</td>
<td>
<p>Technological Leadership</p>
</td>
<td>
<p>Web3 wallet is the best, and derivatives trading (contracts) is very smooth.</p>
</td>
<td>
<p><a href="https://www.google.com/url?sa=E&amp;q=https%3A%2F%2Fwww.okx.com">okx.com</a></p>
</td>
</tr>
<tr>
<td>
<p><strong>Bybit</strong></p>
</td>
<td>
<p>Derivatives Giant</p>
</td>
<td>
<p>Focuses on contract trading and copy trading, with excellent user experience.</p>
</td>
<td>
<p><a href="https://www.google.com/url?sa=E&amp;q=https%3A%2F%2Fwww.bybit.com">bybit.com</a></p>
</td>
</tr>
</tbody></table>
<ul>
<li>DEX (Decentralized Exchanges) —— Decentralized Exchange</li>
</ul>
<p><strong>Features:</strong> Based on smart contracts, no registration is required, and assets are stored in users' own wallets. They are the cornerstone of DeFi.</p>
<table><tbody>
<tr>
<td>
<p><strong>Platform Name</strong></p>
</td>
<td>
<p><strong>Core Network</strong></p>
</td>
<td>
<p><strong>Features</strong></p>
</td>
<td>
<p><strong>Official Website Address</strong></p>
</td>
</tr>
<tr>
<td>
<p><strong>Uniswap</strong></p>
</td>
<td>
<p>Ethereum / L2</p>
</td>
<td>
<p>Industry standard, invented the AMM (Automated Market Maker) mechanism.</p>
</td>
<td>
<p><a href="https://www.google.com/url?sa=E&amp;q=https%3A%2F%2Fapp.uniswap.org">app.uniswap.org</a></p>
</td>
</tr>
<tr>
<td>
<p><strong>Jupiter</strong></p>
</td>
<td>
<p><strong>Solana</strong></p>
</td>
<td>
<p>An aggregator in the Solana ecosystem, offering an excellent experience and extremely low transaction costs.</p>
</td>
<td>
<p><a href="https://www.google.com/url?sa=E&amp;q=https%3A%2F%2Fjup.ag">jup.ag</a></p>
</td>
</tr>
<tr>
<td>
<p><strong>PancakeSwap</strong></p>
</td>
<td>
<p>BSC (Binance Chain)</p>
</td>
<td>
<p>With low transaction fees, it is the largest trading platform on the BSC chain.</p>
</td>
<td>
<p><a href="https://www.google.com/url?sa=E&amp;q=https%3A%2F%2Fpancakeswap.finance">pancakeswap.finance</a></p>
</td>
</tr>
<tr>
<td>
<p><strong>Aerodrome</strong></p>
</td>
<td>
<p><strong>Base</strong></p>
</td>
<td>
<p>Currently the fastest-growing liquidity hub on L2 (Base).</p>
</td>
<td>
<p><a href="https://www.google.com/url?sa=E&amp;q=https%3A%2F%2Faerodrome.finance">aerodrome.finance</a></p>
</td>
</tr>
<tr>
<td>
<p><strong>Curve</strong></p>
</td>
<td>
<p>Multi-chain</p>
</td>
<td>
<p>Focused on stablecoin trading with extremely low slippage, it is the top choice for DeFi deep players.</p>
</td>
<td>
<p><a href="https://www.google.com/url?sa=E&amp;q=https%3A%2F%2Fcurve.fi">curve.fi</a></p>
</td>
</tr>
</tbody></table>
<h3>Market Hierarchy: Primary Market vs Secondary Market</h3>
<ul>
<li>
<p>Primary Market (Primary Market) —— &quot;Original Shares and Seed Round&quot;</p>
<ul>
<li>
<p><strong>Definition:</strong> The stage before the token is officially listed on major exchanges (such as Binance, OKX).</p>
</li>
<li>
<p><strong>Form:</strong> ICO (Initial Coin Offering), IDO (Initial DEX Offering), or a newly deployed contract on-chain (e.g., Uniswap/Pump.fun).</p>
</li>
<li>
<p><strong>Features:</strong> High threshold (requires the ability to operate wallets and read on-chain data), extremely high risk (could potentially go to zero instantly), and extremely large return potential (opportunities for 100-fold or 1000-fold returns often arise here).</p>
</li>
<li>
<p><strong>Commonly known as:</strong> &quot;Chongtu Dog&quot;, &quot;Wanlianshang&quot;.</p>
</li>
</ul>
</li>
<li>
<p>Secondary Market (Secondary Market) —— &quot;Stock Market Trading&quot;</p>
<ul>
<li>
<p><strong>Definition:</strong> The token has been listed on large centralized exchanges (CEX), and ordinary users can directly purchase it with stablecoins (such as USDT).</p>
</li>
<li>
<p><strong>Features:</strong> Good liquidity, relatively high security (the exchange has already screened projects for you), and relatively smaller fluctuations compared to the primary market.</p>
</li>
</ul>
</li>
</ul>
<h3>Token Classification and Hype Logic (Why do they pump?)</h3>
<h4>A. Value Coins / Mainstream Coins (Value Coins)</h4>
<ul>
<li>
<p><strong>Represents:</strong> BTC (Bitcoin), ETH (Ethereum), SOL.</p>
</li>
<li>
<p>**What to invest in:**<strong>Macro narrative and consensus</strong>.</p>
<ul>
<li>
<p>What is hyped about BTC are &quot;digital gold&quot;, &quot;inflation resistance&quot;, and &quot;institutional asset allocation&quot;.</p>
</li>
<li>
<p>ETH/SOL is speculated on &quot;the prosperity of the public chain ecosystem&quot;, &quot;the number of developers&quot;, and &quot;network transaction fee revenue&quot;.</p>
</li>
</ul>
</li>
<li>
<p><strong>Driving Forces:</strong> Entry of large institutions such as BlackRock, Fed rate cuts, and major technological upgrades.</p>
</li>
</ul>
<h4>B. Track Coins / Utility Coins</h4>
<ul>
<li>
<p><strong>Represents:</strong> LINK (Oracle), AAVE (Lending), ARB (L2 Scaling).</p>
</li>
<li>
<p>**What to focus on:**<strong>Project Quality and Business Data</strong>.</p>
<ul>
<li>Look at TVL (Total Value Locked), look at protocol revenue, look at partnerships (e.g., LINK's collaboration with SWIFT).</li>
</ul>
</li>
<li>
<p><strong>Driving Forces:</strong> Business growth, fundamental improvement, and inelastic demand in the industry.</p>
</li>
</ul>
<h4>C. Meme Coins —— &quot;Emotional Coins&quot;</h4>
<ul>
<li>
<p><strong>Represents:</strong> DOGE (Dogecoin), PEPE, SHIB, and various recently popular meme coins.</p>
</li>
<li>
<p><strong>What to invest in:****Attention and Emotion (Attention Economy)</strong>.</p>
<ul>
<li>This type of coin usually <strong>has no actual technical value</strong>, relying entirely on community consensus, cultural resonance, and viral spread.</li>
</ul>
</li>
<li>
<p><strong>Driving Forces:</strong> Musk's tweets, the outbreak of a certain social hot topic, and the promotion by the community's &quot;spiritual leader&quot;.</p>
</li>
<li>
<p><strong>Logic:</strong> As long as there are enough buyers, it has value. What is being hyped is &quot;communication studies&quot; rather than &quot;finance&quot;.</p>
</li>
</ul>
<table><tbody>
<tr>
<td>
<p>Category</p>
</td>
<td>
<p>Core Logic</p>
</td>
<td>
<p>Risk Level</p>
</td>
<td>
<p>Key to Success</p>
</td>
</tr>
<tr>
<td>
<p><strong>Mainstream Coins</strong></p>
</td>
<td>
<p>Macro cycle, consensus</p>
</td>
<td>
<p>Medium</p>
</td>
<td>
<p>Patience, judgment of cycles</p>
</td>
</tr>
<tr>
<td>
<p><strong>Value Coin</strong></p>
</td>
<td>
<p>Technological innovation, project quality</p>
</td>
<td>
<p>Medium-high</p>
</td>
<td>
<p>Industry in-depth research, fundamental analysis</p>
</td>
</tr>
<tr>
<td>
<p><strong>Meme Coin</strong></p>
</td>
<td>
<p>Emotion, popularity, traffic</p>
</td>
<td>
<p>Extremely High</p>
</td>
<td>
<p>Social media sensitivity, luck</p>
</td>
</tr>
</tbody></table>
<blockquote>
<p>Risk Warning and Disclaimer:</p>
<ol>
<li>
<p><strong>Survivorship bias:</strong> All you hear are the myths of &quot;100x coins,&quot; but in reality, 99% of projects in the primary market will go to zero within 48 hours.</p>
</li>
<li>
<p><strong>Attention is a scarce resource:</strong> Meme coins rise quickly because they capture the attention of the entire network, and once the hype shifts, the decline is astonishingly rapid.</p>
</li>
<li>
<p><strong>Technology vs. Emotion:</strong> Web3 is both the frontier of technology and a laboratory of human nature. Before getting involved, figure out which part of the money you're making - is it the money from <strong>industry growth</strong>, or the money from <strong>others' emotional fluctuations</strong>?</p>
</li>
</ol>
</blockquote>
<hr>
<h2>What is DAO?</h2>
<h3>Core Definition: From &quot;Algorithmic Autocracy&quot; to &quot;Protocol Co-governance&quot;</h3>
<p>Among traditional social media giants (such as X or Facebook), the platform's rules (such as traffic distribution, content moderation standards, profit-sharing) are determined by the company's senior management, and users are merely passive &quot;data producers&quot;.</p>
<p>In <strong>decentralized social DAO (Decentralized autonomous organization)</strong>, the platform is a set of <strong>open-source protocols</strong> running on the blockchain. All rules are written in smart contracts, and any major logical changes must be approved through community voting.</p>
<h3>Multi-Role Collaboration Model in DAO</h3>
<p>In a social DAO, participants are assigned different governance weights based on their contribution types:</p>
<h4>A. Content Contributors (Creators): The Source of Value</h4>
<ul>
<li>
<p><strong>Traditional Model:</strong> Creators are subject to the platform's algorithms, facing the risk of demotion or account suspension at any time, and the platform takes the lion's share of the revenue.</p>
</li>
<li>
<p><strong>DAO Model:</strong> Creators earn <strong>governance tokens</strong> rewards by publishing high-quality content.</p>
<ul>
<li>
<p><strong>Rights:</strong> They not only own the content (stored in IPFS in the form of NFTs), but also have voting rights.</p>
</li>
<li>
<p><strong>Example:</strong> Creators can initiate proposals to request changes to the &quot;reward algorithm for high-quality content&quot; to ensure that long-form authors receive higher returns than sensationalist headline clickbait.</p>
</li>
</ul>
</li>
</ul>
<h4>B. Content Moderators: Guardians of the Community</h4>
<ul>
<li>
<p><strong>Traditional model:</strong> The moderation criteria are black-boxed, relying on outsourced teams or AI for forced deletion.</p>
</li>
<li>
<p><strong>DAO Model:</strong> The right to moderate is crowdsourced by the community.</p>
<ul>
<li>
<p><strong>Mechanism:</strong> Auditors are members who hold tokens. If a piece of content is reported for violation, the DAO will initiate a mini-arbitration, where multiple auditors will vote according to the Community Charter.</p>
</li>
<li>
<p><strong>Incentives:</strong> Auditors who accurately enforce the rules will receive token rewards; if an auditor abuses their power, the tokens they have staked will be deducted. This &quot;economic incentive + game theory&quot; replaces administrative orders.</p>
</li>
</ul>
</li>
</ul>
<h4>C. Content Consumers: Shareowners of the platform</h4>
<ul>
<li>
<p><strong>Traditional Model:</strong> Users are the &quot;product,&quot; and their attention is sold to advertisers.</p>
</li>
<li>
<p><strong>DAO Model:</strong> Users are &quot;sovereign individuals&quot;.</p>
<ul>
<li>
<p><strong>Data Sovereignty:</strong> When users log in via wallets such as <strong>MetaMask</strong>, their follower lists and interaction data follow the user, not the platform.</p>
</li>
<li>
<p><strong>Decision-making Power:</strong> Users can vote on whether the platform should introduce advertisements, or decide whether advertising revenue should go into the public Treasury or be distributed to all active users.</p>
</li>
</ul>
</li>
</ul>
<h3>DAO's Closed-loop Operation: Proposals, Voting, and Automatic Execution</h3>
<p>When this social platform needs to be upgraded (for example: planning to introduce a new video encoding format), the process is as follows:</p>
<ol>
<li>
<p><strong>Initiate a Proposal:</strong> Any member holding the minimum threshold of tokens submits a proposal on the governance dashboard (e.g., Snapshot).</p>
</li>
<li>
<p><strong>Community Debate:</strong> Members discuss the impact of the proposal on system Gas fees and storage costs (IPFS) in a decentralized forum.</p>
</li>
<li>
<p><strong>On-chain Voting (Voting):</strong> Members use tokens to vote. This process is transparent and immutable, with data recorded on <strong>Base</strong> and other blockchains.</p>
</li>
<li>
<p><strong>Automatic Execution (Execution):</strong> If the vote passes, <strong>the smart contract (Smart Contract)</strong> will automatically trigger code updates after a preset time, or allocate R&amp;D funds from <strong>the treasury</strong>. The entire process does not require anyone's &quot;signature approval&quot;.</p>
</li>
</ol>
<hr>
<h2>Project Development Case</h2>
<p>The above has covered what blockchain is, what a cryptocurrency is, how to trade cryptocurrencies, and what a DAO is, but it still remains at the &quot;greenhorn&quot; stage. As those with a technical background, the following is a tutorial on how to &quot;manipulate the market,&quot; taking a decentralized lending project as an example.</p>
<h3>Backend and Contract Layer</h3>
<p>In Web3, the backend is split into <strong>on-chain logic (smart contracts)</strong>, <strong>off-chain data (database) and middleware (indexer)</strong>.</p>
<h4>Step 1: Configure the environment</h4>
<ul>
<li>
<p><strong>Introduction:</strong> Foundry is a smart contract development toolchain written in Rust (similar to gcc), which uses <code>forge</code> for compilation, testing, and deployment. Its biggest feature is that it uses Solidity to write all test scripts without the need to switch to JS/TS.<a href="https://fintopia.feishu.cn/wiki/JIfuwhQxSiqMGZkx87WcjLQunmc">Web3 开发极速引擎Foundry</a></p>
</li>
<li>
<p><strong>Core Code:</strong></p>
</li>
</ul>
<pre><code class="language-Bash"># 初始化并运行模糊测试 (Fuzz Testing)
forge init lending_pool
forge test --match-test testFuzz_Deposit -vvvv
</code></pre>
<h4>Step 2: Write a contract</h4>
<p>The core of the lending protocol is asset security. To avoid rewriting complex transfer logic, we directly inherit from <strong>OpenZeppelin</strong> library. It is like a bulletproof-tested template that ensures the security of token handling (ERC20) and prevents hackers from repeatedly withdrawing funds (ReentrancyGuard).</p>
<pre><code class="language-JavaScript">import &quot;@openzeppelin/contracts/utils/ReentrancyGuard.sol&quot;;

function deposit(uint256 amount) external nonReentrant {
    // 使用 OpenZeppelin 标准接口安全转账
    IERC20(usdc).transferFrom(msg.sender, address(this), amount);
    userBalances[msg.sender] += amount; // 更新账本
}
</code></pre>
<h4>Step 3: Deploy the contract</h4>
<p>Once the code is written, it needs to be &quot;mounted&quot; somewhere. We choose <strong>Base</strong> Chain, which is currently the most active Ethereum L2. Deploying here, the gas fee for a user to deposit a sum of money may be less than a dime, while the security level is on par with Ethereum.</p>
<pre><code class="language-Bash">forge create --rpc-url base_sepolia --private-key $KEY SimpleLending
</code></pre>
<p>Here we will introduce the deployment of contracts, which is crucial for understanding the operation of on-chain contracts!</p>
<ol>
<li>
<p>What does it look like after deployment? (From code to bytecode)</p>
<p>Solidity code (human-readable text) is processed by a compiler before deployment and becomes a string of hexadecimal <strong>bytecode (Bytecode)</strong>.</p>
<ul>
<li>
<p><strong>On-chain process:</strong> When you click &quot;Deploy&quot;, you are actually sending a special transaction, and the <code>data</code> field of the transaction packages these bytecodes.</p>
</li>
<li>
<p><strong>Storage Status:</strong> After successful deployment, the blockchain will allocate a <strong>specific address</strong> (e.g., <code>0x123... </code>) on the ledger for your contract. This address does not store the <code>.sol </code>source file, but only stores this <strong>binary code</strong>.</p>
</li>
</ul>
</li>
<li>
<p>Why can it be called? (Execution logic of EVM)</p>
<p>Blockchain is like a distributed supercomputer (Ethereum Virtual Machine, EVM). When you call a contract, the underlying logic is as follows:</p>
<ul>
<li>
<p><strong>Instruction Set:</strong> Every two characters in the binary code (such as <code>60</code> representing PUSH1, <code>01</code> representing ADD) are instructions for the EVM.</p>
</li>
<li>
<p><strong>Entry Identification:</strong> Each function generates a unique <strong>&quot;Function Selector&quot; (Selector)</strong> (e.g., <code>deposit() </code>corresponds to <code>0xd0e30db0 </code>).</p>
</li>
</ul>
</li>
<li>
<p>ABI: The &quot;Translator&quot; between the Frontend and the Blockchain</p>
<p>ABI (Application Binary Interface) is the <strong>specification of the contract</strong>.</p>
<ul>
<li>
<p><strong>Why do we need ABI?</strong> Because the blockchain is full of <code>0xaf32...</code> machine code like this, and the front end has no idea which ByteDance corresponds to which function.</p>
</li>
<li>
<p><strong>Interaction process:</strong> 1.<strong>Explanation:</strong> The front-end library (such as Viem) reads the ABI and knows that the <code>deposit</code> function requires a <code>uint256</code> parameter.</p>
<ol start="2">
<li>
<p><strong>Encoding:</strong> It encodes <code>deposit(100)</code> into a hexadecimal <code>data</code> according to the standard format.</p>
</li>
<li>
<p><strong>Submit:</strong> Wallet (MetaMask) sends this <code>data</code> to the contract address.</p>
</li>
<li>
<p><strong>Execution:</strong> After the contract is received, it is matched to the corresponding function instruction and executed.</p>
</li>
</ol>
</li>
</ul>
</li>
</ol>
<h3>Frontend and Interaction Layer</h3>
<h4>Step 4: Identity Verification</h4>
<p>Web3 has no account passwords, <strong>MetaMask</strong> is the user's pass. It is the guardian of the user's private key and the only tool for signing transfer authorization.</p>
<pre><code class="language-Plain">const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
// 用户点击同意，前端拿到钱包地址
</code></pre>
<h4>Step 5: Contract Interaction</h4>
<p>After connecting the wallet, the front end needs to communicate with the contract. You can use <strong>Wagmi &amp; Viem</strong>. This combination is like a &quot;translator&quot; between the web page and the blockchain, converting React click events into on-chain transaction requests.</p>
<pre><code class="language-JavaScript">const { writeContract } = useWriteContract();
// 绑定按钮：点击即调用 Base 链上的 deposit 函数
&lt;button onClick={() =&gt; writeContract({ address: CONTRACT_ADDR, abi: ABI, functionName: 'deposit', args: [100] })}&gt;
  存入 100 USDC
&lt;/button&gt;
</code></pre>
<h4>Step 6: Decentralization of static assets</h4>
<p>To fully decentralize the project, the project's icons, legal documents, and even front-end code packages will be uploaded to <strong>IPFS</strong>. It ensures that once files are published, no one can delete them like deleting a database; its differences from traditional storage are as follows:</p>
<ul>
<li>
<p><strong>HTTP (Addressing and Finding Path):</strong> Tells the computer which server (IP Address) to find the file on. If the server is shut down or the file is deleted, the link becomes invalid (404).</p>
</li>
<li>
<p><strong>IPFS (addressing to find content):</strong> Tells the computer that I'm looking for a file with content hash <code>Qm...</code>. As long as any node in the network stores this file, you can obtain it. (Address such as <code>ipfs://QmProtocolRules...</code>, addressed via hash and also tamper-proof)</p>
</li>
</ul>
<blockquote>
<p>Who pays for IPFS? (Economic Model)</p>
<p><strong>The IPFS protocol itself does not include a &quot;payment&quot; function.</strong> This means it does not, like blockchain, mandate paying nodes.</p>
<p>A. The party storing the data pays (the current common practice)</p>
<p>In your lending project, <strong>you as the developer are the payer</strong>.</p>
<ul>
<li>
<p><strong>Logic:</strong> You want your front-end code and metadata to be always online, so you will pay a commercial company (such as Pinata).</p>
</li>
<li>
<p><strong>Cost:</strong> Usually billed based on storage capacity and data volume (similar to SaaS services). For example, 1GB of data costs a few dollars per month.</p>
</li>
</ul>
<p>B. Those who use data contribute resources (bandwidth payment)</p>
<p>If a file is extremely popular (such as the image of a popular NFT) and has been downloaded by 1 million people worldwide, and all 1 million people have this cache on their computers, then when the 1,000,001st person downloads it, they will download it in segments from the computers of these 1 million people.</p>
<ul>
<li><strong>Cost:</strong> These users pay for their own ** electricity bills, internet fees, and hard drive wear and tear**.</li>
</ul>
</blockquote>
<h3>Efficiency Optimization</h3>
<p>Reading data directly from the chain is very slow, and we need a &quot;caching and indexing&quot; mechanism.</p>
<h4>Step 7: Query Speed Optimization</h4>
<p>When users want to view &quot;all my borrowing records in the past month&quot;, directly querying the blockchain will cause it to freeze. We deployed a <strong>Subgraph</strong>, which acts like a clerk, constantly monitoring the <code>Borrow</code> events thrown by the contract and organizing them into an efficient GraphQL database.</p>
<ul>
<li>
<p><strong>Implementation:</strong> Define the data model and listen for on-chain events.</p>
</li>
<li>
<p><strong>Code (Mapping):</strong></p>
</li>
</ul>
<pre><code class="language-TypeScript">export function handleBorrow(event: BorrowEvent): void {
  let record = new BorrowRecord(event.transaction.hash.toHex());
  record.amount = event.params.amount;
  record.save(); // 存入索引库，前端秒开
}
</code></pre>
<h4>Step 8: Project Speed Optimization</h4>
<p>Not all data in the project needs to be put on the blockchain (it's too expensive and slow), so we can adopt <strong>a hybrid on-chain strategy</strong>: asset changes (money) are stored on the Base chain; while users' personalized settings (such as avatars, risk reminder switches) are stored in <strong>Supabase</strong>.</p>
<pre><code class="language-TypeScript">await supabase.from('settings').update({ notify_on_liquidation: true }).eq('address', userAddr);
// 无需支付 Gas，即刻保存用户配置
</code></pre>
<h2>Blockchain + AI's Ultimate Form: Metaverse</h2>
<p>If <strong>AI</strong> is the industrial revolution of productivity, <strong>blockchain</strong> is the social transformation of relations of production, then <strong>the metaverse</strong> is the <strong>ultimate physical space (3D Internet)</strong> resulting from the combination of the two.</p>
<h3>Redefining the Metaverse: It's Not Just VR Glasses</h3>
<p>The Metaverse is not a game (such as Genshin Impact), nor is it a hardware (such as Apple Vision Pro). It is <strong>the form of the next generation of the Internet</strong>: a persistent, shared, three-dimensional virtual world with an independent economic system. In this space:</p>
<ul>
<li>
<p><strong>AI provides &quot;life&quot;:</strong> Filling with endless content and intelligent interaction.</p>
</li>
<li>
<p><strong>Blockchain provides &quot;order&quot;:</strong> Ensures asset ownership, identity uniqueness, and economic settlement.</p>
</li>
</ul>
<hr>
<h3>The &quot;Chemical Reaction&quot; of Blockchain and AI in the Metaverse</h3>
<h4>A. AI: Infinite Content Producer (Generative Power)</h4>
<p>The metaverse requires massive amounts of data and scenarios. If relying on manual modeling, the cost is extremely high and the update is slow.</p>
<ul>
<li>
<p><strong>Role of AI:</strong> Through generative AI (AIGC), the metaverse can achieve &quot;speak and it shall be done.&quot; You simply say &quot;I need a Cyberpunk-style coffee shop,&quot; and AI will generate 3D architecture, background music, and NPCs in real time.</p>
</li>
<li>
<p><strong>Intelligent NPC:</strong> The inhabitants of the virtual world are no longer rigid dialogue scripts, but AI agents (AI Agents) connected to large models, who have their own personalities, memories, and goals.</p>
</li>
</ul>
<h4>B. Blockchain: The Steel Armor of Digital Assets (Value Carrier)</h4>
<p>Without blockchain, the metaverse is just a large-scale centralized game.</p>
<ul>
<li>
<p><strong>Asset Ownership Confirmation (NFT):</strong> The ownership of clothes, land, or artworks you purchase in the metaverse is recorded on <strong>blockchains</strong> such as Base, rather than in a company's database. Even if the platform shuts down, your assets will still exist.</p>
</li>
<li>
<p><strong>Interoperability:</strong> Relying on blockchain standards, the sword you purchased in Space A can be brought into Space B for use. This &quot;cross-border transfer&quot; is the key to the metaverse becoming &quot;one world&quot;.</p>
</li>
<li>
<p><strong>Economic Settlement:</strong> All transactions are settled instantly through smart contracts, without the need for real-world bank intervention.</p>
</li>
</ul>
<hr>
<h3>The Final Form of the Metaverse: The Collapse of Digital and Reality</h3>
<p>The ultimate form of the metaverse is not to make humans &quot;completely abandon reality&quot;, but <strong>the deep integration of the real world and the digital world (Hyper-Reality)</strong>.</p>
<h4>Form 1: Complete equivalence of economic value</h4>
<p>In its final form, professions in the metaverse (such as digital architects, virtual auditors, DAO governance officers) will become mainstream occupations. Tokens earned in the virtual world can seamlessly purchase real-world bread, and the valuation of digital assets will surpass that of physical assets.</p>
<h4>Form 2: Sovereign Individuals and Self-Organizing Societies (the Pinnacle of DAO)</h4>
<p>The metaverse is no longer dominated by any single tech giant (such as Meta or Google). It is a federation composed of countless <strong>DAOs</strong>.</p>
<ul>
<li>
<p>The rules of each region are jointly determined by the residents of that region through voting.</p>
</li>
<li>
<p>AI is responsible for performing tedious administrative tasks (automatic taxation, automatic facility maintenance), while humans are responsible for creativity, social interaction, and decision-making.</p>
</li>
</ul>
<h4>Form III: Digital Immortality and Memory Blockchainization</h4>
<p>Through AI, one can learn a person's behavioral habits and, in combination with blockchain, store their key life data (SBT/Soulbound Token). Even after the physical body disappears, the person's &quot;digital avatar&quot; can still continue to exist in the metaverse and participate in family decision-making based on the &quot;will agreement&quot; they left behind.</p>
<h2>Practical architecture summary</h2>
<p>For a real Web3 product, the clean architecture is usually hybrid:</p>
<table>
<thead>
<tr>
<th>Layer</th>
<th>What belongs there</th>
<th>What should not be there</th>
</tr>
</thead>
<tbody>
<tr>
<td>Smart contract</td>
<td>Asset custody, settlement, permissions, critical state transitions</td>
<td>Large files, private user preferences, high-frequency analytics</td>
</tr>
<tr>
<td>Wallet</td>
<td>User identity, signatures, transaction authorization</td>
<td>Password recovery logic that assumes a centralized account model</td>
</tr>
<tr>
<td>Indexer / Subgraph</td>
<td>Query-friendly views of on-chain events</td>
<td>Source of truth for balances or ownership</td>
</tr>
<tr>
<td>IPFS / decentralized storage</td>
<td>Public static assets and metadata that should be content-addressed</td>
<td>Secrets, personal data, mutable operational configs</td>
</tr>
<tr>
<td>Traditional backend</td>
<td>Notifications, personalization, risk dashboards, customer support workflows</td>
<td>Anything that must remain trustless and self-custodial</td>
</tr>
<tr>
<td>AI service</td>
<td>Search, summarization, agent assistance, risk explanation</td>
<td>Final authority over ownership or irreversible settlement</td>
</tr>
</tbody>
</table>
<p>The core design question is always: <strong>what needs trustlessness, and what only needs convenience?</strong> Put the first category on-chain. Put the second category where it is cheaper, faster, and easier to operate.</p>
<h2>Builder checklist</h2>
<p>Before building or evaluating a blockchain application, I would check:</p>
<ul>
<li><strong>Threat model.</strong> Who can steal funds, freeze assets, censor transactions, or upgrade contracts?</li>
<li><strong>Key management.</strong> What happens when a user loses a key? What happens when an admin key is compromised?</li>
<li><strong>Upgrade path.</strong> Is the contract immutable, proxy-upgradable, or governed? Who controls upgrades?</li>
<li><strong>Oracle dependency.</strong> If prices matter, what oracle is used, how often does it update, and how can it fail?</li>
<li><strong>Liquidity and liquidation.</strong> Can positions be liquidated reliably during volatility?</li>
<li><strong>Event indexing.</strong> Are events designed so the UI and analytics layer can reconstruct state efficiently?</li>
<li><strong>Gas and UX.</strong> Which actions require signatures, which require gas, and which can be batched or abstracted?</li>
<li><strong>Data placement.</strong> Which data is on-chain, in IPFS, in an indexer, or in a centralized database?</li>
<li><strong>Compliance and privacy.</strong> Are personal data and regulated workflows kept out of public immutable storage?</li>
</ul>
<p>This checklist is less exciting than a token launch, but it is what separates a demo from a system people can use with real value.</p>
<h2>Closing thought</h2>
<p>Blockchain is not &quot;a database, but decentralized.&quot; It is a coordination machine for ownership and execution under adversarial conditions. AI can make that machine easier to use, and traditional infrastructure can make it faster to query, but neither replaces the core question: which parts of the product must be verifiable by everyone, and which parts merely need to work well?</p>
`,Ft=[{id:"benchmark-difficulty",title:{en:"Benchmark Difficulty Is a Measurable Property",zh:"基准难度是可以测出来的"},excerpt:{en:"How we calibrated a legal benchmark into a 0.5–0.7 acceptance band: an isolated leak-proof eval harness, control-group experiments that separate rework effects from solver-effort confounds, and the judge bugs found on the way.",zh:"将 134 题法律基准校准进 0.5–0.7 验收带的全过程：隔离防泄漏评测 Harness、对照实验分离返修效应与解题档位混淆，以及途中发现的两个 Judge 缺陷。"},content:{en:Ny,zh:Oy},date:"Jul 10, 2026",category:"AI Evaluation",tags:["LLM Eval","Evaluation Science","Benchmarks"]},{id:"judge-reliability",title:{en:"Your Judge Is Part of the System Under Test",zh:"裁判也是被测系统的一部分"},excerpt:{en:"Four judge failures from production: fatal false-kills on legitimate citations, silently dropped rubric fields, scores citing evidence that does not exist, and a harness configuration that changed model behavior. Plus the checks we now run for each.",zh:"生产中的四类 Judge 失效：合法引用被误杀归零、Rubric 字段被静默丢弃、引用不存在的证据判分、一处改变模型行为的 Harness 配置；以及对应的常驻检查。"},content:{en:Ly,zh:Fy},date:"Jul 06, 2026",category:"AI Evaluation",tags:["LLM-as-judge","LLM Eval","Reliability"]},{id:"adversarial-code-review",title:{en:"The 51-Agent Code Review",zh:"51 个 Agent 的代码审查"},excerpt:{en:"How I reviewed a teammate's 17-commit series with a 51-agent workflow: six finders proposed 45 candidate defects, independent verifiers reproduced each one by execution, and 40 were confirmed with introducing-commit attribution.",zh:"用 51 个 Agent 审查同事的 17 个 commit：6 个 finder 提出 45 个候选缺陷，独立 verifier 逐个执行复现，确认 40 个并定位引入 commit。"},content:{en:Py,zh:Ry},date:"Jul 02, 2026",category:"AI Evaluation",tags:["Multi-Agent","Code Review","Verification"]},{id:"rubric-dags",title:{en:"Rubrics as DAGs: Scoring Process, Not Just Outcomes",zh:"把 Rubric 做成 DAG：给过程打分，而不只是结果"},excerpt:{en:"Flat rubrics give points to guessed numbers and hallucinated steps. A schema with process/outcome typing, dependency gating, hurdle rows, and code-enforced floors fixes most of that. This post walks through the design and the repair semantics.",zh:"平铺 Rubric 会给蒙对的数字和幻觉步骤发分。过程/结果分型、依赖门控、Hurdle 行与代码强制下限能解决大部分问题；本文讲这套 Schema 的设计与修复语义。"},content:{en:zy,zh:Dy},date:"Jun 30, 2026",category:"AI Evaluation",tags:["Rubric Design","LLM Eval","LLM-as-judge"]},{id:"evidence-ledger",title:{en:"The Evidence Ledger: Making an LLM Write Questions It Can't Fabricate",zh:"证据账本：让 LLM 写出它编不了的题目"},excerpt:{en:"Hallucinating answers is bad; hallucinating questions silently rots your benchmark. How a locator-bound, cross-vendor-verified evidence ledger makes anti-hallucination structural instead of hopeful.",zh:"答案编错能查出来，题目编错会让 Benchmark 悄悄失效。证据账本将每条证据绑定 Locator 并跨厂商核验，把防幻觉变成结构保证。"},content:{en:$y,zh:By},date:"Jun 13, 2026",category:"AI Evaluation",tags:["LLM Eval","Synthetic Data","Anti-Hallucination"]},{id:"eval-validity",title:{en:"Your Benchmark Is Lying to You: Validity Failure Modes in Agentic Eval Data",zh:"你的基准在骗你：智能体评测数据的有效性失效模式"},excerpt:{en:"Generation is easy; validity is hard. The three quiet failure modes — guessability, prompt↔rubric leakage, judge noise — and how to defend against each.",zh:"生成容易，有效难。三种静默失效模式：可蒙对、题面与 Rubric 互相泄漏、Judge 噪声，以及各自的防法。"},content:{en:Hy,zh:Ky},date:"Jun 12, 2026",category:"AI Evaluation",tags:["LLM Eval","Agents","Synthetic Data"]},{id:"adversarial-qc",title:{en:"Don't Trust Data You Generated Yourself: Adversarial QC for Synthetic Data",zh:"别信你自己生成的数据：合成数据的对抗式质检"},excerpt:{en:"Synthetic data is plausible by construction — which is exactly the failure. The Actor-Critic-Monitor loop, and the concrete taxonomy of lies self-generated data tells: derived-value drift, cross-file conflicts, impossible timelines, template contamination, provenance leakage.",zh:"合成数据的问题在于看起来总是合理。本文讲 Actor-Critic-Monitor 闭环，以及自生成数据的缺陷分类：派生值漂移、跨文件冲突、时间线不可能、模板污染、来源泄漏。"},content:{en:Wy,zh:Uy},date:"Jun 09, 2026",category:"AI Evaluation",tags:["Synthetic Data","Adversarial QC","Agents"]},{id:"agent-as-judge",title:{en:"Agent-as-Judge vs. a Metric You Wrote by Hand",zh:"Agent-as-Judge 还是手写的 Metric？一次摆数据的对比"},excerpt:{en:"A measured comparison: LLM judge vs. a deterministic metric on precision, recall, agreement, cost, and latency — and how to choose per task.",zh:"LLM Judge 对比手写确定性 Metric：准确率、召回、一致率、成本、时延的实测对比，以及按任务选型的结论。"},content:{en:Vy,zh:Qy},date:"Jun 06, 2026",category:"AI Evaluation",tags:["LLM Eval","LLM-as-judge"]},{id:"eval-plumbing",title:{en:"The Plumbing of LLM Evaluation: Six Model Families on One Harness",zh:"大模型评测的「管道工程」：在一个 harness 上跑六个模型族"},excerpt:{en:"Eval is infrastructure, not a script. File-output gaps, reasoning-only turns, judge hallucination, harness diversity, cost accounting — and an upstream OSS contribution.",zh:"评测是基础设施，不是一次性脚本：文件输出缺口、纯推理回合、Judge 幻觉、Harness 多样性、成本核算，以及一次上游开源贡献。"},content:{en:Gy,zh:Jy},date:"May 28, 2026",category:"AI Evaluation",tags:["LLM Eval","Infrastructure","Open Source"]},{id:"9",title:{en:"Detailed Explanation of Blockchain",zh:"区块链详解"},excerpt:{en:"From the trust model to a working dApp: accounts, contracts, stablecoins, lending, indexing — and which parts of the stack belong off-chain.",zh:"从信任模型到一个能跑的 dApp：账户、合约、稳定币、借贷、索引，以及哪些部分本就该留在链下。"},content:Zy,date:"Feb 04, 2026",category:"Web3",tags:["Web3","Blockchain"]},{id:"solana-mev-guide",title:{en:"Building a Solana MEV Searcher: A Complete Technical Guide",zh:"Solana MEV Searcher 完整技术指南"},excerpt:{en:"An eight-part deep dive — Dark Forest rules, searcher architecture, the control plane, network-wide inventory, sub-millisecond scout, AMM pricing models, cross-DEX arbitrage, Jito bundles, and risk control.",zh:"共八篇：暗黑森林生存法则、Searcher 架构、Control Plane、全网 Inventory、亚毫秒 Scout、AMM 定价模型、跨 DEX 套利、Jito Bundle 与风控。"},content:Yy,date:"Jan 20, 2026",category:"Web3",tags:["MEV","Solana","Rust"]}],Xy="Levi Wang — Evaluation science & agentic systems for frontier AI";var zc;const ev=typeof document<"u"?((zc=document.querySelector('meta[name="description"]'))==null?void 0:zc.getAttribute("content"))??"":"";function tv(){const{pathname:e}=tn(),t=ie();return q.useEffect(()=>{let n=Xy,r=ev;if(e.startsWith("/projects"))n=`${t({en:"Projects",zh:"项目"})} — Levi Wang`;else if(e==="/posts")n=`${t({en:"Writing",zh:"文章"})} — Levi Wang`;else if(e.startsWith("/post/")){const a=Ft.find(s=>s.id===e.slice(6));a&&(n=`${t(a.title)} — Levi Wang`,r=t(a.excerpt))}else e.startsWith("/optics")?n=`${t({en:"Optics",zh:"光影"})} — Levi Wang`:e.startsWith("/cv")&&(n=`${t({en:"CV",zh:"简历"})} — Levi Wang`);document.title=n;const o=document.querySelector('meta[name="description"]');o&&o.setAttribute("content",r)},[e,t]),null}function nv(){const[e,t]=q.useState(!1),[n,r]=q.useState(!1),[o,a]=q.useState(!1),s=q.useRef(null);return q.useEffect(()=>{if(!window.matchMedia("(pointer: fine)").matches)return;t(!0);let l=0;const c=p=>{cancelAnimationFrame(l),l=requestAnimationFrame(()=>{var f;(f=s.current)==null||f.style.setProperty("transform",`translate(${p.clientX}px, ${p.clientY}px)`)})},u=p=>{var g,x;const f=p.target;a(!!((g=f==null?void 0:f.closest)!=null&&g.call(f,'input, textarea, [contenteditable="true"]'))),r(!!((x=f==null?void 0:f.closest)!=null&&x.call(f,'a, button, [role="button"], select, label')))};return window.addEventListener("pointermove",c,{passive:!0}),window.addEventListener("mouseover",u,{passive:!0}),()=>{cancelAnimationFrame(l),window.removeEventListener("pointermove",c),window.removeEventListener("mouseover",u)}},[]),!e||o?null:i.jsx("div",{ref:s,"aria-hidden":!0,className:"pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference",style:{transform:"translate(-100px, -100px)"},children:i.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 22 22",className:"-translate-x-1/2 -translate-y-1/2 text-white",fill:"none",stroke:"currentColor",strokeWidth:"1",children:[i.jsx("path",{d:"M11 1v6.5M11 14.5V21M1 11h6.5M14.5 11H21"}),n?i.jsx("path",{d:"M8.5 5H5v3.5M13.5 5H17v3.5M8.5 17H5v-3.5M13.5 17h3.5v-3.5",strokeWidth:"1.2"}):i.jsx("circle",{cx:"11",cy:"11",r:"1.6"})]})})}function al({to:e,children:t}){return i.jsx(_e,{to:e,className:"inline-flex items-center gap-2 border border-line px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] transition-colors hover:border-foreground/60 hover:bg-surface",children:t})}const Fc=[{id:"benchmark-synthesis",name:{en:"Benchmark-Synthesis Pipeline (18 Stages)",zh:"基准合成流水线（18 阶段）"},description:{en:"Solo-architected, greenfield 18-stage pipeline that turns expert workspaces into hard agentic benchmark items: dual-model evidence extraction with intersection confirmation and a deterministic quote gate, an embedding-routed 76-pack/5-domain skill corpus, DAG rubrics, a blind-then-hinted trial-solver stage, human review windows, and QA-gated export — end-to-end closed ~27 hours after git init, 362 passing unit tests.",zh:"独立搭建 18 阶段合成流水线，将专家 Workspace 转为高难度 Agentic 考题：双模型证据抽取取交集、确定性引用门、Embedding 路由的 76 包/5 领域技能语料、DAG Rubric、先盲解后提示重解、人工复核窗口与 QA 门控导出。git init 后约 27 小时端到端跑通，362 个单测全绿。"},tag:{en:"Flagship · Synthesis",zh:"旗舰 · 合成"}},{id:"difficulty-calibration",name:{en:"Benchmark Difficulty Calibration",zh:"基准难度校准"},description:{en:"A closed calibration loop for benchmark difficulty: a leak-proof isolated eval harness, a 0.5–0.7 acceptance band, and controlled experiments (solver-effort confound +0.159 on a control group; rework effect −0.139 per round) steered a 134-question legal benchmark from a mean of 0.821 to 0.648. Two judge bugs were found and fixed during the campaign.",zh:"难度校准闭环：隔离防泄漏评测 Harness、0.5–0.7 验收带、对照实验（对照组分离解题档位混淆 +0.159、单轮返修净效应 −0.139），将 134 题法律基准均分从 0.821 校准至 0.648；过程中修复两个 Judge 缺陷。"},tag:{en:"Evaluation Science",zh:"评测科学"}},{id:"eval-platform",name:{en:"Verifier System & Agent-as-Judge Research",zh:"Verifier 系统与 Agent-as-Judge 研究"},description:{en:"Rubric-based grading infrastructure for office-document agent tasks. Combined deterministic metrics, visual evidence collection, and LLM/agent judges; ran a controlled judge-vs-metric study on precision, recall, agreement, cost, and latency before product delivery.",zh:"面向 Office 文档 Agent 任务的 Rubric 评分基础设施：组合确定性 Metric、视觉证据采集与 LLM/Agent Judge；交付前完成 Judge vs Metric 对照实验，比较准确率、召回率、一致率、成本与时延。"},link:"/Agentkit.html",tag:{en:"Verifier · Evaluation",zh:"Verifier · 评测"}},{id:"adversarial-verification",name:{en:"Adversarial Verification at Scale",zh:"规模化对抗式验证"},description:{en:"Reusable multi-agent verification workflows: a 51-agent code review (6 independent finders, 45 candidates, execution-backed verification, 40 confirmed defects with introducing-commit attribution), and a 207-worker repair pipeline that checks reference answers score full marks against their own rubrics.",zh:"可复用的 Multi-Agent 验证流程：51 个 Agent 的代码审查（6 个独立 finder、45 个候选缺陷、执行复现确认 40 个并定位引入 commit），以及 207-worker 修复流水线，强制「参考答案在自身 Rubric 上必须满分」的不变量。"},tag:{en:"Multi-Agent Systems",zh:"多智能体系统"}},{id:"syndata-pipeline",name:{en:"Synthetic Eval-Data Pipeline (Gen 1)",zh:"合成评测数据流水线（第一代）"},description:{en:"The first-generation multi-agent synthesis system that converts expert workspaces into hard, evidence-grounded agentic exam items across finance, consulting, and legal domains — evidence ledgers, cross-model separation, anti-leakage review, and delivery gates. Later superseded by the 18-stage rewrite above.",zh:"第一代 Multi-Agent 合成系统：将专家 Workspace 转为金融、咨询、法律领域的高难度证据约束考题，含证据账本、跨模型隔离、防泄漏审查与交付门控；后被 18 阶段重写版取代。"},tag:{en:"Synthetic Data",zh:"合成数据"}},{id:"harbor-eval",name:{en:"Harbor — Eval Execution Framework",zh:"Harbor — 评测执行框架"},description:{en:"Operated and extended a containerized eval framework across six model families and five agent harnesses, with cloud fan-out, smoke-test gates, rerun-in-place handling, and cost/latency accounting. A reusable agent integration was re-landed cleanly on upstream v0.17.0 — one 766-insertion commit, 12 unit tests, touching upstream code in exactly 2 registry lines.",zh:"维护并扩展容器化评测框架：覆盖六个模型族 × 五种 Agent Harness，支持云端 fan-out、冒烟门控、失败原地重跑与成本/时延核算；一个可复用 Agent 集成干净落回上游 v0.17.0（单 commit 766 行插入、12 个单测、仅改 2 行注册代码）。"},link:"https://github.com/levizwang/harbor",tag:{en:"Open Source",zh:"开源"}},{id:"medical-acm",name:{en:"Adversarial QC for Synthetic Clinical Data",zh:"合成临床数据的对抗式质检"},description:{en:"Designed an Actor-Critic-Monitor loop for synthetic medical-record cases: generator, adversarial reviewer, and arbiter. The durable output is the defect taxonomy: derived-value drift, cross-file conflict, timeline impossibility, template contamination, metadata leakage, and rubric answerability.",zh:"设计合成病历的 Actor-Critic-Monitor 闭环：生成、对抗审查、仲裁；沉淀缺陷分类体系——派生值漂移、跨文件冲突、时间线不可能、模板污染、元数据泄漏与 Rubric 可回答性。"},tag:{en:"Adversarial QC",zh:"对抗式质检"}},{id:"office-harnesses",name:{en:"Multi-modal Office Evaluation Harnesses",zh:"多模态 Office 评测 Harness"},description:{en:"Built per-modality evaluation paths for Excel, Word, PPT, and PDF tasks with multi-vendor judge backends, screenshot/evidence collection, output reconstruction for models without native files-out, and reason guards for missing or unreadable evidence.",zh:"为 Excel、Word、PPT、PDF 四类任务分别搭建评测路径：多厂商 Judge 后端、截图与证据采集、无原生 files-out 模型的输出重建、证据缺失时的 Reason Guard 兜底。"},tag:{en:"Office Agents",zh:"Office 智能体"}},{id:"toolathlon-mcp",name:{en:"MCP Tool Mocking for RL Agents",zh:"面向 RL Agent 的 MCP 工具 Mock"},description:{en:"Adapted a tool-use benchmark for large-scale RL by replacing credential-heavy live MCP services with realistic mocks. The design goal was trajectory-level parity: enough behavioral fidelity for training and evaluation without exposing accounts or live systems.",zh:"将 Tool-use Benchmark 改造为可跑大规模 RL 的版本：以高保真 Mock 替代需真实凭据的在线 MCP 服务，目标轨迹级一致——训练与评测照常运行，不接触真实账号与线上系统。"},tag:{en:"RL Infrastructure",zh:"RL 基础设施"}},{id:"rag-eval",name:{en:"RAG Evaluation (RAGAS)",zh:"RAG 评测（RAGAS）"},description:{en:"Cross-border RAG systems with an automated RAGAS evaluation loop keeping faithfulness and retrieval precision honest in production; includes a visualization report of the evaluation run.",zh:"跨境业务 RAG 系统，配 RAGAS 自动评测闭环，监控线上忠实度与检索精度；附评测项目可视化报告。"},link:"/ragas.html",tag:{en:"RAG",zh:"RAG"}},{id:"nvwa",name:{en:"Office-Document Synthesis Framework",zh:"Office 文档合成框架"},description:{en:"A layered “1 seed → N tasks” office-document synthesis framework with automated checkers, LLM QC/repair, and seed-provenance tracing, built to beat the low-diversity failure mode of single-shot generation.",zh:"分层「1 种子 → N 题」Office 文档合成框架：自动 Checker、LLM 质检/修复与种子溯源，解决单轮生成的低多样性失效。"},tag:{en:"Synthetic Data",zh:"合成数据"}},{id:"solana-mev",name:{en:"Solana MEV Bot",zh:"Solana MEV 机器人"},description:{en:"A personal Web3 side-project: a Solana MEV searcher (scout → pricing → cross-DEX arbitrage → Jito bundles). Written up as an 8-part technical series — see Writing.",zh:"业余 Web3 项目：Solana MEV Searcher（监听 → 定价 → 跨 DEX 套利 → Jito Bundle）；复盘为 8 篇技术系列，见文章。"},link:"https://github.com/levizwang/Solana-MEV",tag:{en:"Web3 · interest",zh:"Web3 · 兴趣"}}];function rv({project:e}){return i.jsx("div",{className:"aspect-[16/10] w-full overflow-hidden rounded-[2px] border border-line bg-surface",children:i.jsx(qi,{id:e.id,className:"h-full w-full"})})}function ov({project:e,expanded:t=!1}){var l;const n=ie(),r=n(e.name),o=(l=e.link)==null?void 0:l.startsWith("http"),a=i.jsxs(i.Fragment,{children:[i.jsx(rv,{project:e}),i.jsxs("div",{className:"mt-5 flex items-baseline justify-between gap-3",children:[i.jsx("h3",{className:"text-lg font-semibold tracking-tight",children:r}),e.link&&i.jsx("span",{className:"shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5",children:"↗"})]}),e.tag&&i.jsx("span",{className:"mt-1 block font-mono text-[11px] text-brand",children:n(e.tag)}),i.jsx("p",{className:`mt-2 text-sm leading-relaxed text-muted-foreground ${t?"":"line-clamp-4"}`,children:n(e.description)})]}),s="surface lift group flex h-full flex-col p-5";return e.link?i.jsx("a",{href:e.link,target:o?"_blank":void 0,rel:o?"noopener noreferrer":void 0,className:s,children:a}):i.jsx("div",{className:s,children:a})}function iv({limit:e,showViewAll:t=!0}){const n=ie(),r=e?Fc.slice(0,e):Fc;return i.jsxs("section",{id:"projects",className:`mx-auto max-w-content px-6 ${t?"mt-28 md:mt-36":"mt-8 md:mt-12"}`,children:[i.jsx(se,{children:i.jsx(Kr,{eyebrow:F.workEyebrow,title:t?F.selectedWork:F.projectsTitle,size:"page"})}),i.jsx("div",{className:"mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",children:r.map((o,a)=>i.jsx(se,{delay:a%3*70,children:i.jsx(ov,{project:o,expanded:!t})},o.id))}),t&&i.jsx("div",{className:"mt-12 flex justify-center",children:i.jsxs(al,{to:"/projects",children:[n(F.viewAllProjects)," ",i.jsx("span",{"aria-hidden":!0,children:"→"})]})})]})}function av(){return i.jsx(iv,{showViewAll:!1})}const sv=[{eyebrow:{en:"Evaluation science",zh:"评测科学"},title:{en:"Calibrating benchmark difficulty with controlled experiments.",zh:"用对照实验校准 Benchmark 难度。"},body:{en:"Every synthesis team gets told its output is too easy and too templated, and reworking on feel rarely converges. I set a quantitative acceptance band (solver mean 0.5–0.7), built an isolated eval harness that keeps rubrics and reference answers out of the sandbox by construction, and used a control group of untouched packs to separate real difficulty changes from measurement drift: the solver effort setting alone moved scores by +0.159, while one rework round contributed −0.139. After two rounds, a 134-question legal benchmark finished at a mean of 0.648, inside the band. The judge bugs found during the campaign were fixed with regression tests.",zh:"将验收标准量化为解题均分 0.5–0.7 的验收带，搭建从构造上隔离 Rubric 与参考答案的评测 Harness，并以不返修的题包作对照组，分离真实难度变化与测量漂移：解题档位混淆 +0.159，单轮返修净效应 −0.139。两轮返修后，134 题法律基准均分 0.648 落入带内；过程中发现的两处 Judge 缺陷均修复并补回归测试。"},specs:[{k:"0.5–0.7",v:{en:"the acceptance band difficulty must land in",zh:"难度必须落进的验收带"}},{k:"+0.159",v:{en:"solver-effort confound measured on a control group",zh:"对照组测出的解题档位混淆"}},{k:"−0.139",v:{en:"isolated net effect of one rework round",zh:"单轮返修的隔离净效应"}},{k:"0.648",v:{en:"final mean of the 134-question benchmark",zh:"134 题基准的最终均分"}}],figure:"difficulty-calibration",figRight:"n = 134 · units: score",article:"benchmark-difficulty",tags:["Difficulty calibration","Controlled experiments","Leak-proof harness"]},{eyebrow:{en:"Judge reliability",zh:"Judge 可靠性"},title:{en:"Testing the judge before trusting its scores.",zh:"先测 Judge，再信分数。"},body:{en:"In an LLM-judged eval, a judge defect looks exactly like a model defect in the score data. Two cases from production: the judge zeroed items whose rubrics were 91–93% satisfied because it read legitimate in-material citations as answer leakage, and for a stretch it silently dropped rubric dependency fields without anything crashing. The standing defenses now include false-kill arbitration, schema round-trip tests, line-by-line re-checks of scores against the actual artifact, and an oracle check that reference answers score full marks against their own rubrics.",zh:"LLM 判分的评测里，Judge 缺陷在分数数据上与模型缺陷无法区分。生产中发现并修复两类缺陷：Rubric 正向命中 91–93% 的题被误判为答案泄漏而归零；Rubric DAG 依赖字段被静默丢弃且无任何报错。现行防线包括防误杀仲裁、Schema 往返测试、对照产物逐行复核判分，以及「参考答案必须满分」的 Oracle 检查。"},specs:[{k:"False-kill",v:{en:"audit fatal zeroes before trusting them",zh:"归零分数先经仲裁再采信"}},{k:"Round-trip",v:{en:"test that the judge sees every rubric field",zh:"确认 Judge 读到每个 Rubric 字段"}},{k:"Re-check",v:{en:"re-verify scored rows against the artifact",zh:"对照产物逐行复核判分"}},{k:"Oracle",v:{en:"reference answers must score full marks",zh:"参考答案必须满分"}}],figure:"judge-reliability",figRight:"Units: rubric hits",article:"judge-reliability",tags:["Judge debugging","Hallucination re-check","Oracle validation"]},{eyebrow:{en:"Evidence-grounded synthesis",zh:"证据约束合成"},title:{en:"Turning expert files into eval tasks that cannot be guessed.",zh:"基于证据约束生成无法蒙对的评测任务。"},body:{en:"The core idea: the generator is not trusted. Source files are first converted into locator-bound evidence, then independent roles draft, critique, verify, and package the task. Before delivery, the task is checked for answer leakage, unsupported claims, and guessability. The contract is what matters: every answerable claim must point back to source evidence, and removing the files should make the task fail.",zh:"核心原则是不信任生成器：源文件先抽取为绑定 Locator 的证据，再由相互独立的角色分别出题、挑刺、核验与打包；交付前过答案泄漏、无证据断言、可蒙性三道检查。内部节点结构与 prompt 配方不公开，对外重要的是契约：每个可回答的断言必须能指回源证据，抽走文件则任务必然失败。"},specs:[{k:"Evidence first",v:{en:"locator-bound facts before prompt drafting",zh:"先绑定证据，再写题面"}},{k:"Role separation",v:{en:"author, verifier, judge, and QC kept independent",zh:"出题、核验、判分、质检角色隔离"}},{k:"Anti-guessing",v:{en:"tasks must depend on reading the files",zh:"题目必须依赖真实读文件"}},{k:"Delivery gate",v:{en:"leakage, unsupported-claim, and rubric checks",zh:"泄漏、无证据断言与 Rubric 门控"}}],figure:"evidence-ledger",figRight:"Units: claims",article:"evidence-ledger",tags:["Evidence ledger","Anti-leakage","Synthetic eval data"]},{eyebrow:{en:"Multi-agent verification",zh:"Multi-Agent 验证"},title:{en:"Reviewing 17 commits with 51 agents.",zh:"用 51 个 Agent 审 17 个 commit。"},body:{en:"A teammate landed a 17-commit hardening series on a fork of my pipeline. Instead of reading the 216-file diff by hand, I ran a review workflow: six finders with different focuses proposed 45 candidate defects, and each candidate went to an independent verifier that had to reproduce it by execution (a failing test or a real exception) before it counted. 40 were confirmed, and each was attributed to its introducing commit with git log -S. The most useful finding was that the hardening commits themselves had introduced fail-open regressions and answer leakage, the defect classes they were meant to remove.",zh:"同事在我的 Pipeline fork 上提交 17 个加固 commit，审查不走人工通读：6 个关注点不同的 finder 提出 45 个候选缺陷，每个候选由独立 verifier 执行复现（失败测试或真实异常）才计数，最终确认 40 个，并用 git log -S 定位到引入 commit。最有价值的发现是这批加固 commit 自身引入了 fail-open 回归与答案泄漏——正是它要消除的那类缺陷。"},specs:[{k:"6 finders",v:{en:"independent lenses over the same diff",zh:"同一份 diff 的 6 个独立审查视角"}},{k:"45 → 40",v:{en:"candidates confirmed by execution, not plausibility",zh:"候选缺陷以执行复现确认"}},{k:"git log -S",v:{en:"every defect attributed to its introducing commit",zh:"每个缺陷定位到引入 commit"}},{k:"~59 min",v:{en:"wall-clock for the full review",zh:"整个审查的墙钟时间"}}],figure:"adversarial-code-review",figRight:"n = 51 agents",article:"adversarial-code-review",tags:["Finder/verifier split","Execution-backed repro","Adversarial review"]},{eyebrow:{en:"Adversarial QC",zh:"对抗式 QC"},title:{en:"Adversarial QC for self-generated data.",zh:"对自生成数据做对抗式 QC。"},body:{en:"For synthetic clinical and office-document data, I used an adversarial loop rather than trusting one generator pass. A generator creates the case, a critic turns defects into structured findings, and an arbiter decides whether to revise, rework, or pass. The durable part is not the medical content itself; it is the defect taxonomy and the feedback loop: derived-value drift, cross-file contradictions, impossible timelines, template contamination, metadata leakage, and rubrics that cannot be answered from the files.",zh:"合成临床与 Office 文档数据不信任单次生成：Actor 产出病例或任务，Critic 将缺陷转为结构化 findings，Monitor 裁定修订、返工或放行。可复用的产出是缺陷分类与反馈闭环：派生值漂移、跨文件矛盾、时间线不可能、模板污染、元数据泄漏，以及无法从文件回答的 Rubric。"},specs:[{k:"Actor",v:{en:"generate realistic document cases",zh:"生成真实感文档案例"}},{k:"Critic",v:{en:"convert defects into structured findings",zh:"把缺陷转成结构化 findings"}},{k:"Monitor",v:{en:"decide revise, rework, or pass",zh:"裁定修订、返工或放行"}},{k:"Memory",v:{en:"turn repeated failures into reusable detectors",zh:"将高频缺陷固化为检测器"}}],figure:"adversarial-qc",figRight:"Loop: Actor · Critic · Monitor",article:"adversarial-qc",tags:["Actor-Critic-Monitor","Bad-pattern detectors","Synthetic data"]}];function lv(){const e=ie();return i.jsx("section",{className:"mx-auto mt-28 max-w-content px-6 md:mt-40",children:i.jsx("div",{className:"space-y-6",children:sv.map((t,n)=>i.jsx(se,{children:i.jsxs("article",{className:"surface overflow-hidden",children:[i.jsxs("div",{className:"strip",children:[i.jsxs("span",{className:"truncate",children:["Fig. ",String(n+3).padStart(2,"0")," — ",e(t.eyebrow)]}),i.jsx("span",{className:"shrink-0",children:t.figRight})]}),i.jsx("div",{className:"ref-grid flex justify-center border-b border-line px-6 py-7 md:py-9",children:i.jsx(qi,{id:t.figure,className:"max-h-[300px] w-full max-w-[52rem] md:max-h-[340px]"})}),i.jsxs("div",{className:"grid gap-px md:grid-cols-[1.35fr_1fr]",children:[i.jsxs("div",{className:"p-8 md:p-11",children:[i.jsx("p",{className:"eyebrow",children:e(t.eyebrow)}),i.jsx("h3",{className:"mt-3 text-2xl font-semibold leading-tight tracking-tight text-balance sm:text-[1.7rem]",children:e(t.title)}),i.jsx("p",{className:"mt-4 leading-relaxed text-muted-foreground",children:e(t.body)}),i.jsx("div",{className:"mt-6 flex flex-wrap items-center gap-2",children:t.tags.map(r=>i.jsx(il,{children:r},r))}),i.jsxs("div",{className:"mt-6 flex flex-wrap items-center gap-x-6 gap-y-2",children:[t.article&&i.jsxs(_e,{to:`/post/${t.article}`,className:"group/link inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-foreground",children:[e(F.readDeepDive),i.jsx("span",{"aria-hidden":!0,className:"transition-transform group-hover/link:translate-x-0.5",children:"→"})]}),t.link&&i.jsxs("a",{href:t.link.href,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-foreground",children:[e(t.link.label)," ",i.jsx("span",{"aria-hidden":!0,children:"↗"})]})]})]}),i.jsxs("div",{className:"border-t border-line bg-background/40 md:border-l md:border-t-0",children:[i.jsxs("div",{className:"strip",children:[i.jsx("span",{children:"Spec sheet"}),i.jsx("span",{children:"Rev A1"})]}),i.jsx("dl",{className:"space-y-6 p-8 md:p-9",children:t.specs.map((r,o)=>i.jsxs("div",{children:[i.jsx("dt",{className:"font-mono text-xl font-semibold tracking-tight tabular-nums",children:r.k}),i.jsx("dd",{className:"mt-1 text-sm text-muted-foreground",children:e(r.v)})]},o))})]})]})]})},n))})})}function cv({limit:e,showViewAll:t=!0}){const n=ie(),r=p=>n(rl(hh,p)),o=Xs(),[a,s]=q.useState(null),l=q.useMemo(()=>{const p={};return Ft.forEach(f=>p[f.category]=(p[f.category]||0)+1),Object.entries(p).sort((f,g)=>g[1]-f[1])},[]),c=q.useMemo(()=>Ft.filter(p=>!a||p.category===a),[a]),u=e?c.slice(0,e):c;return i.jsxs("section",{id:"articles",className:`mx-auto max-w-content px-6 ${t?"mt-28 md:mt-36":"mt-8 md:mt-12"}`,children:[i.jsx(se,{children:i.jsxs("div",{className:"flex flex-wrap items-end justify-between gap-4",children:[i.jsx("div",{children:i.jsx(Kr,{eyebrow:F.writingEyebrow,title:F.writing,size:t?"section":"page"})}),!t&&i.jsxs("div",{className:"flex flex-wrap gap-2",children:[i.jsx("button",{onClick:()=>s(null),className:`border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] transition-colors ${a===null?"border-foreground bg-foreground text-background":"border-line text-muted-foreground hover:text-foreground"}`,children:n({en:"All",zh:"全部"})}),l.map(([p,f])=>i.jsxs("button",{onClick:()=>s(g=>g===p?null:p),className:`border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] transition-colors ${a===p?"border-foreground bg-foreground text-background":"border-line text-muted-foreground hover:text-foreground"}`,children:[r(p)," ",i.jsx("span",{className:"opacity-50",children:f})]},p))]})]})}),i.jsxs("div",{className:"mt-12 space-y-4",children:[u.map((p,f)=>i.jsx(se,{delay:Math.min(f,4)*55,children:i.jsxs("article",{onClick:()=>o(`/post/${p.id}`),className:"surface lift group flex cursor-pointer items-center gap-6 p-5 md:p-6",children:[i.jsxs("div",{className:"min-w-0 flex-1",children:[i.jsxs("div",{className:"flex items-center gap-2.5 font-mono text-[11px] text-muted-foreground",children:[i.jsx("span",{children:p.date}),i.jsx("span",{className:"h-1 w-1 rounded-full bg-muted-foreground/50"}),i.jsx("span",{className:"text-brand",children:r(p.category)})]}),i.jsx("h3",{className:"mt-2 text-lg font-semibold leading-snug tracking-tight transition-colors group-hover:text-foreground",children:i.jsx(_e,{to:`/post/${p.id}`,onClick:g=>g.stopPropagation(),children:n(p.title)})}),i.jsx("p",{className:"mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground",children:n(p.excerpt)})]}),i.jsx("div",{className:"hidden size-24 shrink-0 items-center justify-center overflow-hidden rounded-[2px] border border-line bg-surface md:flex",children:i.jsx(qi,{id:p.id,className:"h-full w-auto max-w-none"})}),i.jsx("span",{className:"hidden shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 sm:block",children:"→"})]})},p.id)),u.length===0&&i.jsx("div",{className:"py-10 text-center text-muted-foreground",children:n(F.noArticles)})]}),t&&i.jsx("div",{className:"mt-12 flex justify-center",children:i.jsxs(al,{to:"/posts",children:[n(F.viewAllArticles)," ",i.jsx("span",{"aria-hidden":!0,children:"→"})]})})]})}function uv(){return i.jsxs(i.Fragment,{children:[i.jsx(lv,{}),i.jsx(cv,{showViewAll:!1})]})}const dv="repeating-linear-gradient(to right, hsl(var(--foreground) / 0.4) 0 1px, transparent 1px 80px)",hv="repeating-linear-gradient(to right, hsl(var(--foreground) / 0.2) 0 1px, transparent 1px 16px)",pv="linear-gradient(to right, transparent 4px, hsl(var(--muted-foreground) / 0.9) 4px 5px, transparent 5px 8px, hsl(var(--muted-foreground) / 0.9) 8px 9px, transparent 9px)";function fv(){const[e,t]=q.useState(0);q.useEffect(()=>{let o=0;const a=()=>{const l=document.documentElement,c=l.scrollHeight-l.clientHeight;t(c>0?Math.min(1,Math.max(0,l.scrollTop/c)):0)},s=()=>{cancelAnimationFrame(o),o=requestAnimationFrame(a)};return a(),window.addEventListener("scroll",s,{passive:!0}),window.addEventListener("resize",s),()=>{cancelAnimationFrame(o),window.removeEventListener("scroll",s),window.removeEventListener("resize",s)}},[]);const n=Math.round(e*100),r=`clamp(7px, ${e*100}%, calc(100% - 7px))`;return i.jsxs("div",{"aria-hidden":!0,className:"pointer-events-none fixed inset-x-0 top-0 z-[60]",children:[i.jsx("div",{className:"h-2 w-full border-b border-line bg-background/85 backdrop-blur-sm",style:{backgroundImage:`${dv}, ${hv}`,backgroundSize:"100% 5px, 100% 3px",backgroundRepeat:"no-repeat",backgroundPosition:"bottom left, bottom left"}}),i.jsx("div",{className:"absolute top-0 h-2 w-[14px] border border-line bg-surface",style:{left:r,transform:"translateX(-50%)",backgroundImage:pv}}),i.jsxs("div",{className:"absolute top-2 hidden -translate-x-1/2 flex-col items-center sm:flex",style:{left:r},children:[i.jsx("span",{className:"h-1.5 w-px bg-line"}),i.jsxs("span",{className:"bg-background/85 px-0.5 font-mono text-[8px] tracking-[0.08em] text-muted-foreground backdrop-blur-sm",children:[String(n).padStart(3,"0"),"%"]})]})]})}function Pc({children:e,className:t="",width:n="max-w-content"}){return i.jsx("div",{className:`relative z-10 mx-auto w-full ${n} px-6 pt-6 md:pt-10 ${t}`,children:e})}var vh={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(r){var o=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,a=0,s={},l={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function d(h){return h instanceof c?new c(h.type,d(h.content),h.alias):Array.isArray(h)?h.map(d):h.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(d){return Object.prototype.toString.call(d).slice(8,-1)},objId:function(d){return d.__id||Object.defineProperty(d,"__id",{value:++a}),d.__id},clone:function d(h,y){y=y||{};var v,w;switch(l.util.type(h)){case"Object":if(w=l.util.objId(h),y[w])return y[w];v={},y[w]=v;for(var S in h)h.hasOwnProperty(S)&&(v[S]=d(h[S],y));return v;case"Array":return w=l.util.objId(h),y[w]?y[w]:(v=[],y[w]=v,h.forEach(function(A,E){v[E]=d(A,y)}),v);default:return h}},getLanguage:function(d){for(;d;){var h=o.exec(d.className);if(h)return h[1].toLowerCase();d=d.parentElement}return"none"},setLanguage:function(d,h){d.className=d.className.replace(RegExp(o,"gi"),""),d.classList.add("language-"+h)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(v){var d=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(v.stack)||[])[1];if(d){var h=document.getElementsByTagName("script");for(var y in h)if(h[y].src==d)return h[y]}return null}},isActive:function(d,h,y){for(var v="no-"+h;d;){var w=d.classList;if(w.contains(h))return!0;if(w.contains(v))return!1;d=d.parentElement}return!!y}},languages:{plain:s,plaintext:s,text:s,txt:s,extend:function(d,h){var y=l.util.clone(l.languages[d]);for(var v in h)y[v]=h[v];return y},insertBefore:function(d,h,y,v){v=v||l.languages;var w=v[d],S={};for(var A in w)if(w.hasOwnProperty(A)){if(A==h)for(var E in y)y.hasOwnProperty(E)&&(S[E]=y[E]);y.hasOwnProperty(A)||(S[A]=w[A])}var M=v[d];return v[d]=S,l.languages.DFS(l.languages,function(W,Te){Te===M&&W!=d&&(this[W]=S)}),S},DFS:function d(h,y,v,w){w=w||{};var S=l.util.objId;for(var A in h)if(h.hasOwnProperty(A)){y.call(h,A,h[A],v||A);var E=h[A],M=l.util.type(E);M==="Object"&&!w[S(E)]?(w[S(E)]=!0,d(E,y,null,w)):M==="Array"&&!w[S(E)]&&(w[S(E)]=!0,d(E,y,A,w))}}},plugins:{},highlightAll:function(d,h){l.highlightAllUnder(document,d,h)},highlightAllUnder:function(d,h,y){var v={callback:y,container:d,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};l.hooks.run("before-highlightall",v),v.elements=Array.prototype.slice.apply(v.container.querySelectorAll(v.selector)),l.hooks.run("before-all-elements-highlight",v);for(var w=0,S;S=v.elements[w++];)l.highlightElement(S,h===!0,v.callback)},highlightElement:function(d,h,y){var v=l.util.getLanguage(d),w=l.languages[v];l.util.setLanguage(d,v);var S=d.parentElement;S&&S.nodeName.toLowerCase()==="pre"&&l.util.setLanguage(S,v);var A=d.textContent,E={element:d,language:v,grammar:w,code:A};function M(Te){E.highlightedCode=Te,l.hooks.run("before-insert",E),E.element.innerHTML=E.highlightedCode,l.hooks.run("after-highlight",E),l.hooks.run("complete",E),y&&y.call(E.element)}if(l.hooks.run("before-sanity-check",E),S=E.element.parentElement,S&&S.nodeName.toLowerCase()==="pre"&&!S.hasAttribute("tabindex")&&S.setAttribute("tabindex","0"),!E.code){l.hooks.run("complete",E),y&&y.call(E.element);return}if(l.hooks.run("before-highlight",E),!E.grammar){M(l.util.encode(E.code));return}if(h&&r.Worker){var W=new Worker(l.filename);W.onmessage=function(Te){M(Te.data)},W.postMessage(JSON.stringify({language:E.language,code:E.code,immediateClose:!0}))}else M(l.highlight(E.code,E.grammar,E.language))},highlight:function(d,h,y){var v={code:d,grammar:h,language:y};if(l.hooks.run("before-tokenize",v),!v.grammar)throw new Error('The language "'+v.language+'" has no grammar.');return v.tokens=l.tokenize(v.code,v.grammar),l.hooks.run("after-tokenize",v),c.stringify(l.util.encode(v.tokens),v.language)},tokenize:function(d,h){var y=h.rest;if(y){for(var v in y)h[v]=y[v];delete h.rest}var w=new f;return g(w,w.head,d),p(d,w,h,w.head,0),k(w)},hooks:{all:{},add:function(d,h){var y=l.hooks.all;y[d]=y[d]||[],y[d].push(h)},run:function(d,h){var y=l.hooks.all[d];if(!(!y||!y.length))for(var v=0,w;w=y[v++];)w(h)}},Token:c};r.Prism=l;function c(d,h,y,v){this.type=d,this.content=h,this.alias=y,this.length=(v||"").length|0}c.stringify=function d(h,y){if(typeof h=="string")return h;if(Array.isArray(h)){var v="";return h.forEach(function(M){v+=d(M,y)}),v}var w={type:h.type,content:d(h.content,y),tag:"span",classes:["token",h.type],attributes:{},language:y},S=h.alias;S&&(Array.isArray(S)?Array.prototype.push.apply(w.classes,S):w.classes.push(S)),l.hooks.run("wrap",w);var A="";for(var E in w.attributes)A+=" "+E+'="'+(w.attributes[E]||"").replace(/"/g,"&quot;")+'"';return"<"+w.tag+' class="'+w.classes.join(" ")+'"'+A+">"+w.content+"</"+w.tag+">"};function u(d,h,y,v){d.lastIndex=h;var w=d.exec(y);if(w&&v&&w[1]){var S=w[1].length;w.index+=S,w[0]=w[0].slice(S)}return w}function p(d,h,y,v,w,S){for(var A in y)if(!(!y.hasOwnProperty(A)||!y[A])){var E=y[A];E=Array.isArray(E)?E:[E];for(var M=0;M<E.length;++M){if(S&&S.cause==A+","+M)return;var W=E[M],Te=W.inside,Ct=!!W.lookbehind,er=!!W.greedy,ji=W.alias;if(er&&!W.pattern.global){var tr=W.pattern.toString().match(/[imsuy]*$/)[0];W.pattern=RegExp(W.pattern.source,tr+"g")}for(var xn=W.pattern||W,C=v.next,O=w;C!==h.tail&&!(S&&O>=S.reach);O+=C.value.length,C=C.next){var L=C.value;if(h.length>d.length)return;if(!(L instanceof c)){var U=1,$;if(er){if($=u(xn,O,d,Ct),!$||$.index>=d.length)break;var We=$.index,wn=$.index+$[0].length,xe=O;for(xe+=C.value.length;We>=xe;)C=C.next,xe+=C.value.length;if(xe-=C.value.length,O=xe,C.value instanceof c)continue;for(var ht=C;ht!==h.tail&&(xe<wn||typeof ht.value=="string");ht=ht.next)U++,xe+=ht.value.length;U--,L=d.slice(O,xe),$.index-=O}else if($=u(xn,0,L,Ct),!$)continue;var We=$.index,pt=$[0],_i=L.slice(0,We),sl=L.slice(We+pt.length),Ai=O+L.length;S&&Ai>S.reach&&(S.reach=Ai);var Qr=C.prev;_i&&(Qr=g(h,Qr,_i),O+=_i.length),x(h,Qr,U);var xh=new c(A,Te?l.tokenize(pt,Te):pt,ji,pt);if(C=g(h,Qr,xh),sl&&g(h,C,sl),U>1){var Ci={cause:A+","+M,reach:Ai};p(d,h,y,C.prev,O,Ci),S&&Ci.reach>S.reach&&(S.reach=Ci.reach)}}}}}}function f(){var d={value:null,prev:null,next:null},h={value:null,prev:d,next:null};d.next=h,this.head=d,this.tail=h,this.length=0}function g(d,h,y){var v=h.next,w={value:y,prev:h,next:v};return h.next=w,v.prev=w,d.length++,w}function x(d,h,y){for(var v=h.next,w=0;w<y&&v!==d.tail;w++)v=v.next;h.next=v,v.prev=h,d.length-=w}function k(d){for(var h=[],y=d.head.next;y!==d.tail;)h.push(y.value),y=y.next;return h}if(!r.document)return r.addEventListener&&(l.disableWorkerMessageHandler||r.addEventListener("message",function(d){var h=JSON.parse(d.data),y=h.language,v=h.code,w=h.immediateClose;r.postMessage(l.highlight(v,l.languages[y],y)),w&&r.close()},!1)),l;var b=l.util.currentScript();b&&(l.filename=b.src,b.hasAttribute("data-manual")&&(l.manual=!0));function j(){l.manual||l.highlightAll()}if(!l.manual){var m=document.readyState;m==="loading"||m==="interactive"&&b&&b.defer?document.addEventListener("DOMContentLoaded",j):window.requestAnimationFrame?window.requestAnimationFrame(j):window.setTimeout(j,16)}return l}(t);e.exports&&(e.exports=n),typeof ll<"u"&&(ll.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(o,a){var s={};s["language-"+a]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[a]},s.cdata=/^<!\[CDATA\[|\]\]>$/i;var l={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:s}};l["language-"+a]={pattern:/[\s\S]+/,inside:n.languages[a]};var c={};c[o]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return o}),"i"),lookbehind:!0,greedy:!0,inside:l},n.languages.insertBefore("markup","cdata",c)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(r,o){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+r+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[o,"language-"+o],inside:n.languages[o]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(r){var o=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+o.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+o.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+o.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+o.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:o,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;var a=r.languages.markup;a&&(a.tag.addInlined("style","css"),a.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var r="Loading…",o=function(b,j){return"✖ Error "+b+" while fetching file: "+j},a="✖ Error: File does not exist or is empty",s={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},l="data-src-status",c="loading",u="loaded",p="failed",f="pre[data-src]:not(["+l+'="'+u+'"]):not(['+l+'="'+c+'"])';function g(b,j,m){var d=new XMLHttpRequest;d.open("GET",b,!0),d.onreadystatechange=function(){d.readyState==4&&(d.status<400&&d.responseText?j(d.responseText):d.status>=400?m(o(d.status,d.statusText)):m(a))},d.send(null)}function x(b){var j=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(b||"");if(j){var m=Number(j[1]),d=j[2],h=j[3];return d?h?[m,Number(h)]:[m,void 0]:[m,m]}}n.hooks.add("before-highlightall",function(b){b.selector+=", "+f}),n.hooks.add("before-sanity-check",function(b){var j=b.element;if(j.matches(f)){b.code="",j.setAttribute(l,c);var m=j.appendChild(document.createElement("CODE"));m.textContent=r;var d=j.getAttribute("data-src"),h=b.language;if(h==="none"){var y=(/\.(\w+)$/.exec(d)||[,"none"])[1];h=s[y]||y}n.util.setLanguage(m,h),n.util.setLanguage(j,h);var v=n.plugins.autoloader;v&&v.loadLanguages(h),g(d,function(w){j.setAttribute(l,u);var S=x(j.getAttribute("data-range"));if(S){var A=w.split(/\r\n?|\n/g),E=S[0],M=S[1]==null?A.length:S[1];E<0&&(E+=A.length),E=Math.max(0,Math.min(E-1,A.length)),M<0&&(M+=A.length),M=Math.max(0,Math.min(M,A.length)),w=A.slice(E,M).join(`
`),j.hasAttribute("data-start")||j.setAttribute("data-start",String(E+1))}m.textContent=w,n.highlightElement(m)},function(w){j.setAttribute(l,p),m.textContent=w})}}),n.plugins.fileHighlight={highlight:function(j){for(var m=(j||document).querySelectorAll(f),d=0,h;h=m[d++];)n.highlightElement(h)}};var k=!1;n.fileHighlight=function(){k||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),k=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(vh);var gv=vh.exports;const mv=Dc(gv);(function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},r={bash:n,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:r},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:r},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:r.entity}}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:r.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=e.languages.bash;for(var o=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],a=r.variable[1].inside,s=0;s<o.length;s++)a[o[s]]=e.languages.bash[o[s]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash})(Prism);Prism.languages.go=Prism.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/});Prism.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}});delete Prism.languages.go["class-name"];Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;(function(e){var t=e.util.clone(e.languages.javascript),n=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,r=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,o=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function a(c,u){return c=c.replace(/<S>/g,function(){return n}).replace(/<BRACES>/g,function(){return r}).replace(/<SPREAD>/g,function(){return o}),RegExp(c,u)}o=a(o).source,e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=a(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=t.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:a(/<SPREAD>/.source),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:a(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var s=function(c){return c?typeof c=="string"?c:typeof c.content=="string"?c.content:c.content.map(s).join(""):""},l=function(c){for(var u=[],p=0;p<c.length;p++){var f=c[p],g=!1;if(typeof f!="string"&&(f.type==="tag"&&f.content[0]&&f.content[0].type==="tag"?f.content[0].content[0].content==="</"?u.length>0&&u[u.length-1].tagName===s(f.content[0].content[1])&&u.pop():f.content[f.content.length-1].content==="/>"||u.push({tagName:s(f.content[0].content[1]),openedBraces:0}):u.length>0&&f.type==="punctuation"&&f.content==="{"?u[u.length-1].openedBraces++:u.length>0&&u[u.length-1].openedBraces>0&&f.type==="punctuation"&&f.content==="}"?u[u.length-1].openedBraces--:g=!0),(g||typeof f=="string")&&u.length>0&&u[u.length-1].openedBraces===0){var x=s(f);p<c.length-1&&(typeof c[p+1]=="string"||c[p+1].type==="plain-text")&&(x+=s(c[p+1]),c.splice(p+1,1)),p>0&&(typeof c[p-1]=="string"||c[p-1].type==="plain-text")&&(x=s(c[p-1])+x,c.splice(p-1,1),p--),c[p]=new e.Token("plain-text",x,null,x)}f.content&&typeof f.content!="string"&&l(f.content)}};e.hooks.add("after-tokenize",function(c){c.language!=="jsx"&&c.language!=="tsx"||l(c.tokens)})})(Prism);Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}};Prism.languages.webmanifest=Prism.languages.json;Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/};Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python;Prism.languages.py=Prism.languages.python;(function(e){for(var t=/\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source,n=0;n<2;n++)t=t.replace(/<self>/g,function(){return t});t=t.replace(/<self>/g,function(){return/[^\s\S]/.source}),e.languages.rust={comment:[{pattern:RegExp(/(^|[^\\])/.source+t),lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,greedy:!0},char:{pattern:/b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,greedy:!0},attribute:{pattern:/#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,greedy:!0,alias:"attr-name",inside:{string:null}},"closure-params":{pattern:/([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,lookbehind:!0,greedy:!0,inside:{"closure-punctuation":{pattern:/^\||\|$/,alias:"punctuation"},rest:null}},"lifetime-annotation":{pattern:/'\w+/,alias:"symbol"},"fragment-specifier":{pattern:/(\$\w+:)[a-z]+/,lookbehind:!0,alias:"punctuation"},variable:/\$\w+/,"function-definition":{pattern:/(\bfn\s+)\w+/,lookbehind:!0,alias:"function"},"type-definition":{pattern:/(\b(?:enum|struct|trait|type|union)\s+)\w+/,lookbehind:!0,alias:"class-name"},"module-declaration":[{pattern:/(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,lookbehind:!0,alias:"namespace"},{pattern:/(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,lookbehind:!0,alias:"namespace",inside:{punctuation:/::/}}],keyword:[/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,/\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,macro:{pattern:/\b\w+!/,alias:"property"},constant:/\b[A-Z_][A-Z_\d]+\b/,"class-name":/\b[A-Z]\w*\b/,namespace:{pattern:/(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,inside:{punctuation:/::/}},number:/\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,boolean:/\b(?:false|true)\b/,punctuation:/->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,operator:/[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/},e.languages.rust["closure-params"].inside.rest=e.languages.rust,e.languages.rust.attribute.inside.string=e.languages.rust.string})(Prism);(function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var t=e.languages.extend("typescript",{});delete t["class-name"],e.languages.typescript["class-name"].inside=t,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),e.languages.ts=e.languages.typescript})(Prism);(function(e){var t=e.util.clone(e.languages.typescript);e.languages.tsx=e.languages.extend("jsx",t),delete e.languages.tsx.parameter,delete e.languages.tsx["literal-property"];var n=e.languages.tsx.tag;n.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+n.pattern.source+")",n.pattern.flags),n.lookbehind=!0})(Prism);(function(e){var t=/[*&][^\s[\]{},]+/,n=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,r="(?:"+n.source+"(?:[ 	]+"+t.source+")?|"+t.source+"(?:[ 	]+"+n.source+")?)",o=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),a=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function s(l,c){c=(c||"").replace(/m/g,"")+"m";var u=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return r}).replace(/<<value>>/g,function(){return l});return RegExp(u,c)}e.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return r})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return r}).replace(/<<key>>/g,function(){return"(?:"+o+"|"+a+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:s(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:s(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:s(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:s(a),lookbehind:!0,greedy:!0},number:{pattern:s(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:n,important:t,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},e.languages.yml=e.languages.yaml})(Prism);function yv(){const e=ie(),t=x=>e(rl(hh,x)),{id:n}=jg(),r=Ft.find(x=>x.id===n),o=Ft.findIndex(x=>x.id===n),a=o>0?Ft[o-1]:void 0,s=o>=0&&o<Ft.length-1?Ft[o+1]:void 0,l=r!=null&&r.content?e(r.content):"",{contentHtml:c,tocItems:u}=q.useMemo(()=>{if(!l||typeof window>"u")return{contentHtml:l,tocItems:[]};const k=new DOMParser().parseFromString(l,"text/html"),b=k.body.querySelector("h1");b&&b.remove();const j=Array.from(k.querySelectorAll("h2, h3")),m=new Map,d=y=>y.trim().toLowerCase().replace(/[^\w一-鿿\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").replace(/^-+|-+$/g,""),h=j.map((y,v)=>{var M;const w=((M=y.textContent)==null?void 0:M.trim())??"",S=d(w)||`section-${v}`,A=m.get(S)??0;m.set(S,A+1);const E=A===0?S:`${S}-${A}`;return y.id=E,{id:E,text:w,level:y.tagName==="H2"?2:3}}).filter(y=>y.text.length>0);return{contentHtml:k.body.innerHTML,tocItems:h}},[l]);q.useEffect(()=>{mv.highlightAll()},[c]);const p=x=>{const k=document.getElementById(x);k&&k.scrollIntoView({behavior:"smooth",block:"start"})},[f,g]=q.useState("");return q.useEffect(()=>{if(u.length===0)return;let x=0;const k=()=>{cancelAnimationFrame(x),x=requestAnimationFrame(()=>{let b="";for(const j of u){const m=document.getElementById(j.id);m&&m.getBoundingClientRect().top<=120&&(b=j.id)}g(b)})};return k(),window.addEventListener("scroll",k,{passive:!0}),()=>{cancelAnimationFrame(x),window.removeEventListener("scroll",k)}},[u]),r?i.jsxs(Pc,{width:"max-w-[1280px]",children:[i.jsx(fv,{}),i.jsxs(_e,{to:"/posts",className:"inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground",children:[i.jsx("span",{"aria-hidden":!0,children:"←"})," ",e(F.writing)]}),i.jsxs("div",{className:"mt-8 grid gap-10 lg:grid-cols-[190px_minmax(0,52rem)] lg:justify-center xl:grid-cols-[200px_minmax(0,54rem)] xl:gap-12",children:[i.jsx("aside",{className:"hidden lg:block",children:i.jsxs("div",{className:"sticky top-28",children:[i.jsx("div",{className:"eyebrow mb-4",children:e(F.toc)}),i.jsx("nav",{className:"space-y-2.5 text-sm",children:u.length>0?u.map(x=>{const k=x.id===f;return i.jsxs("button",{type:"button",onClick:()=>p(x.id),className:`relative block w-full pl-3.5 text-left leading-snug transition-colors hover:text-foreground ${k?"text-foreground":"text-muted-foreground"} ${x.level===3?"pl-6 text-[0.8rem]":""}`,children:[i.jsx("span",{"aria-hidden":!0,className:`absolute left-0 top-[0.5em] h-1.5 w-1.5 transition-opacity ${k?"bg-brand opacity-100":"opacity-0"}`}),x.text]},x.id)}):i.jsx("div",{className:"text-muted-foreground",children:e(F.tocEmpty)})})]})}),i.jsxs("div",{className:"min-w-0",children:[i.jsxs("header",{className:"mb-9",children:[i.jsxs("div",{className:"flex items-center gap-2.5 font-mono text-xs text-muted-foreground",children:[i.jsx("span",{className:"text-brand",children:t(r.category)}),i.jsx("span",{className:"h-1 w-1 rounded-full bg-muted-foreground/50"}),i.jsx("span",{children:r.date})]}),i.jsx("h1",{className:"mt-4 text-3xl font-semibold leading-[1.1] tracking-tight text-balance md:text-[2.55rem]",children:e(r.title)}),i.jsx("p",{className:"mt-5 text-lg leading-relaxed text-muted-foreground",children:e(r.excerpt)})]}),i.jsx("div",{className:"mx-auto mb-10 max-w-[46rem] overflow-hidden rounded-[2px] border border-line bg-surface",children:i.jsx(qi,{id:r.id,className:"h-auto w-full"})}),i.jsx("article",{className:`prose prose-neutral dark:prose-invert lg:prose-lg mb-16 max-w-none
              prose-headings:tracking-tight prose-headings:font-semibold
              prose-a:text-foreground prose-a:underline prose-a:decoration-brand prose-a:underline-offset-4
              prose-code:font-mono prose-code:text-[0.85em] prose-pre:rounded prose-pre:border prose-pre:border-line
              prose-img:rounded prose-th:text-left`,children:c?i.jsx("div",{dangerouslySetInnerHTML:{__html:c}}):i.jsx("p",{className:"text-muted-foreground",children:"…"})}),(a||s)&&i.jsxs("nav",{className:"mb-14 grid gap-px overflow-hidden rounded-[2px] border border-line bg-line sm:grid-cols-2",children:[a?i.jsxs(_e,{to:`/post/${a.id}`,className:"group bg-background p-5 transition-colors hover:bg-surface",children:[i.jsxs("span",{className:"font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground",children:["← ",e({en:"Newer",zh:"更新一篇"})]}),i.jsx("span",{className:"mt-1.5 block font-semibold leading-snug tracking-tight transition-colors group-hover:text-foreground",children:e(a.title)})]}):i.jsx("div",{className:"bg-background"}),s?i.jsxs(_e,{to:`/post/${s.id}`,className:"group bg-background p-5 text-right transition-colors hover:bg-surface",children:[i.jsxs("span",{className:"font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground",children:[e({en:"Older",zh:"更早一篇"})," →"]}),i.jsx("span",{className:"mt-1.5 block font-semibold leading-snug tracking-tight transition-colors group-hover:text-foreground",children:e(s.title)})]}):i.jsx("div",{className:"bg-background"})]}),i.jsx("div",{className:"hr-line"}),i.jsxs("div",{className:"mt-10 flex flex-col items-center gap-5",children:[i.jsx(ti,{spin:!0,className:"h-11 w-11 text-muted-foreground/50"}),i.jsxs(al,{to:"/posts",children:[e(F.viewAllArticles)," ",i.jsx("span",{"aria-hidden":!0,children:"→"})]})]})]})]})]}):i.jsx(Pc,{children:i.jsxs("div",{className:"min-h-[50vh] flex flex-col items-center justify-center",children:[i.jsx("h1",{className:"text-2xl font-bold mb-4 dark:text-neutral-100",children:e(F.articleNotFound)}),i.jsx(_e,{to:"/posts",className:"text-blue-500 hover:underline",children:e(F.viewAllArticles)})]})})}function vv(){const e=ie();return i.jsxs("section",{className:"mx-auto max-w-content px-6 pb-10 pt-8 md:pt-12",children:[i.jsx("p",{className:"eyebrow",children:"Optics"}),i.jsx("h1",{className:"mt-3 text-4xl font-semibold tracking-tight sm:text-5xl",children:e(F.opticsTitle)}),i.jsx("p",{className:"mt-3 max-w-prose text-muted-foreground",children:e(F.opticsSub)})]})}const xv=["All","Nature","Urban","Street"];function wv({selectedFilter:e,onFilterChange:t}){const n=ie();return i.jsx("div",{className:"px-6 pb-10",children:i.jsx("div",{className:"max-w-content mx-auto flex gap-2.5 flex-wrap",children:xv.map(r=>i.jsx("button",{onClick:()=>t(r),className:`border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] transition-colors ${e===r?"border-foreground bg-foreground text-background":"border-line text-muted-foreground hover:text-foreground"}`,children:n(rl(Im,r))},r))})})}function bv({photo:e,onClick:t}){const[n,r]=q.useState(!1),o=q.useRef(null);return q.useEffect(()=>{var a;(a=o.current)!=null&&a.complete&&r(!0)},[]),i.jsxs("div",{className:"lift group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-[2px] border border-line",onClick:t,children:[!n&&i.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 dark:from-[#0A0A0A] dark:via-[#1A1A1A] dark:to-[#0A0A0A] animate-pulse"}),i.jsx("img",{ref:o,src:e.url,alt:e.title,loading:"lazy",decoding:"async",className:`w-full h-full object-cover transition-all duration-500 ${n?"opacity-100 scale-100":"opacity-0 scale-95"}`,onLoad:()=>r(!0)}),i.jsx("div",{className:"absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6",children:i.jsxs("div",{className:"space-y-2",children:[i.jsx("h3",{className:"text-white font-semibold text-lg",children:e.title}),i.jsxs("div",{className:"font-mono text-xs text-[#CCFF00] space-y-1",children:[i.jsxs("div",{children:[e.camera," | ",e.lens]}),i.jsxs("div",{children:[e.iso," | ",e.aperture," | ",e.shutter]})]})]})})]})}const kv={"Yuanbao_In_Bed.webp":{camera:"NIKON Z 6_2",lens:"NIKKOR Z 50mm f/1.8 S",iso:"1000",aperture:"f/1.8",shutter:"1/13s",focalLength:"50mm"},"Snow_Plow.webp":{camera:"NIKON Z 6_2",lens:"NIKKOR Z 50mm f/1.8 S",iso:"100",aperture:"f/1.8",shutter:"1/3200s",focalLength:"50mm"},"Snow_Amusement_Park.webp":{camera:"NIKON Z 6_2",lens:"NIKKOR Z 50mm f/1.8 S",iso:"100",aperture:"f/1.8",shutter:"1/8000s",focalLength:"50mm"},"Olympic_Tower.webp":{camera:"NIKON Z 6_2",lens:"NIKKOR Z 50mm f/1.8 S",iso:"100",aperture:"f/1.8",shutter:"1/4000s",focalLength:"50mm"},"Olympic_Forest_White_Flower_1.webp":{camera:"NIKON Z 6_2",lens:"NIKKOR Z 50mm f/1.8 S",iso:"100",aperture:"f/1.8",shutter:"1/640s",focalLength:"50mm"},"Olympic_Forest_Sunflower_2.webp":{camera:"NIKON Z 6_2",lens:"NIKKOR Z 50mm f/1.8 S",iso:"100",aperture:"f/1.8",shutter:"1/2500s",focalLength:"50mm"},"Olympic_Forest_Sunflower_1.webp":{camera:"NIKON Z 6_2",lens:"NIKKOR Z 50mm f/1.8 S",iso:"100",aperture:"f/1.8",shutter:"1/2000s",focalLength:"50mm"},"Olympic_Forest_Pink_Grass_1.webp":{camera:"NIKON Z 6_2",lens:"NIKKOR Z 50mm f/1.8 S",iso:"100",aperture:"f/1.8",shutter:"1/1600s",focalLength:"50mm"},"Olympic_Forest_Ginkgo.webp":{camera:"NIKON Z 6_2",lens:"NIKKOR Z 50mm f/1.8 S",iso:"100",aperture:"f/1.8",shutter:"1/3200s",focalLength:"50mm"},"Olympic_Forest_Autumn_Leaves_2.webp":{camera:"NIKON Z 6_2",lens:"NIKKOR Z 50mm f/1.8 S",iso:"100",aperture:"f/1.8",shutter:"1/3200s",focalLength:"50mm"},"Olympic_Forest_Autumn_Leaves.webp":{camera:"NIKON Z 6_2",lens:"NIKKOR Z 50mm f/1.8 S",iso:"100",aperture:"f/1.8",shutter:"1/800s",focalLength:"50mm"},"Longma_Mountain_Windmill.webp":{camera:"NIKON Z 6_2",lens:"NIKKOR Z 50mm f/1.8 S",iso:"100",aperture:"f/2.5",shutter:"1/640s",focalLength:"50mm"},"Longma_Mountain_Moss_1.webp":{camera:"NIKON Z 6_2",lens:"NIKKOR Z 50mm f/1.8 S",iso:"100",aperture:"f/1.8",shutter:"1/50s",focalLength:"50mm"},"Longma_Mountain_Hydrangea_1.webp":{camera:"NIKON Z 6_2",lens:"NIKKOR Z 50mm f/1.8 S",iso:"100",aperture:"f/1.8",shutter:"1/800s",focalLength:"50mm"},"Horohira_Bridge.webp":{camera:"NIKON Z 6_2",lens:"NIKKOR Z 50mm f/1.8 S",iso:"100",aperture:"f/1.8",shutter:"1/250s",focalLength:"50mm"},"Fountain.webp":{camera:"NIKON Z 6_2",lens:"NIKKOR Z 24-200mm f/4-6.3 VR",iso:"2500",aperture:"f/6.3",shutter:"1/13s",focalLength:"34.5mm"},"Chengjiang_Lakeside_2.webp":{camera:"NIKON Z 6_2",lens:"NIKKOR Z 50mm f/1.8 S",iso:"100",aperture:"f/1.8",shutter:"1/8000s",focalLength:"50mm"},"Chengjiang_Lakeside.webp":{camera:"NIKON Z 6_2",lens:"NIKKOR Z 50mm f/1.8 S",iso:"100",aperture:"f/1.8",shutter:"1/3200s",focalLength:"50mm"},"Chengjiang_Lake_1.webp":{camera:"NIKON Z 6_2",lens:"NIKKOR Z 50mm f/1.8 S",iso:"100",aperture:"f/2.8",shutter:"1/6400s",focalLength:"50mm"},"Cat_In_Snow.webp":{camera:"NIKON Z 6_2",lens:"NIKKOR Z 50mm f/1.8 S",iso:"100",aperture:"f/1.8",shutter:"1/8000s",focalLength:"50mm"},"Baiwang_Mountain_Night.webp":{camera:"NIKON Z 6_2",lens:"NIKKOR Z 24-200mm f/4-6.3 VR",iso:"640",aperture:"f/6.3",shutter:"1/20s",focalLength:"200mm"},"Baiwang_Mountain.webp":{camera:"NIKON Z 6_2",lens:"NIKKOR Z 24-200mm f/4-6.3 VR",iso:"900",aperture:"f/6.3",shutter:"1/100s",focalLength:"82mm"}},qv="/assets/Yuanbao_In_Bed-D00iVsSv.webp",Sv="/assets/Fountain-BnHHTAuA.webp",jv="/assets/Olympic_Tower-DvXJg9Vg.webp",_v="/assets/Olympic_Forest_Sunflower_1-dlJ3grwZ.webp",Av="/assets/Olympic_Forest_Sunflower_2-DBuMLQgI.webp",Cv="/assets/Olympic_Forest_White_Flower_1-Hr2Ux-Wj.webp",Ev="/assets/Olympic_Forest_Autumn_Leaves-CQgS0oew.webp",Tv="/assets/Olympic_Forest_Autumn_Leaves_2-xTN1As1V.webp",Mv="/assets/Olympic_Forest_Pink_Grass_1-f25VsoTN.webp",Iv="/assets/Olympic_Forest_Ginkgo-coubr25Q.webp",Nv="/assets/Horohira_Bridge-FIHXvUJP.webp",Ov="/assets/Chengjiang_Lake_1-RgzUQbM3.webp",Lv="/assets/Chengjiang_Lakeside-DWlk8BNT.webp",Fv="/assets/Chengjiang_Lakeside_2-Bf8MeW2D.webp",Pv="/assets/Baiwang_Mountain-FLZhYxFQ.webp",Rv="/assets/Baiwang_Mountain_Night-nwWH10PD.webp",zv="/assets/Snow_Plow-D1ubAYzk.webp",Dv="/assets/Snow_Amusement_Park-B8AWg3iX.webp",$v="/assets/Cat_In_Snow-BGY4AZ18.webp",Bv="/assets/Longma_Mountain_Hydrangea_1-CsoiXulp.webp",Wv="/assets/Longma_Mountain_Moss_1-D-_2cbWU.webp",Uv="/assets/Longma_Mountain_Windmill-ChF6YyPs.webp",X=kv,Rc=[{id:"1",url:qv,...X["Yuanbao_In_Bed.webp"],category:"Nature",location:"Home",title:"Yuanbao In Bed",story:"A cozy moment captured at home."},{id:"2",url:Sv,...X["Fountain.webp"],category:"Urban",location:"City Park",title:"Fountain",story:"Water dancing in the city light."},{id:"3",url:jv,...X["Olympic_Tower.webp"],category:"Urban",location:"Olympic Park",title:"Olympic Tower",story:"A towering structure against the sky."},{id:"4",url:_v,...X["Olympic_Forest_Sunflower_1.webp"],category:"Nature",location:"Olympic Forest Park",title:"Sunflower Bloom",story:"Bright yellow petals facing the sun."},{id:"5",url:Av,...X["Olympic_Forest_Sunflower_2.webp"],category:"Nature",location:"Olympic Forest Park",title:"Sunflower Field",story:"A field of golden sunflowers."},{id:"6",url:Cv,...X["Olympic_Forest_White_Flower_1.webp"],category:"Nature",location:"Olympic Forest Park",title:"White Blossom",story:"Delicate white flowers in bloom."},{id:"7",url:Ev,...X["Olympic_Forest_Autumn_Leaves.webp"],category:"Nature",location:"Olympic Forest Park",title:"Autumn Leaves",story:"The colors of fall."},{id:"8",url:Tv,...X["Olympic_Forest_Autumn_Leaves_2.webp"],category:"Nature",location:"Olympic Forest Park",title:"Golden Canopy",story:"Sunlight filtering through autumn leaves."},{id:"9",url:Mv,...X["Olympic_Forest_Pink_Grass_1.webp"],category:"Nature",location:"Olympic Forest Park",title:"Pink Muhly Grass",story:"Soft pink waves in the breeze."},{id:"10",url:Iv,...X["Olympic_Forest_Ginkgo.webp"],category:"Nature",location:"Olympic Forest Park",title:"Ginkgo Avenue",story:"Golden ginkgo leaves covering the path."},{id:"11",url:Nv,...X["Horohira_Bridge.webp"],category:"Urban",location:"Sapporo",title:"Horohira Bridge",story:"Architecture spanning the water."},{id:"12",url:Ov,...X["Chengjiang_Lake_1.webp"],category:"Nature",location:"Chengjiang",title:"Chengjiang Lake",story:"Serene waters and distant mountains."},{id:"13",url:Lv,...X["Chengjiang_Lakeside.webp"],category:"Nature",location:"Chengjiang",title:"Lakeside View",story:"Peaceful moments by the lake."},{id:"14",url:Fv,...X["Chengjiang_Lakeside_2.webp"],category:"Nature",location:"Chengjiang",title:"Water's Edge",story:"Where the water meets the land."},{id:"15",url:Pv,...X["Baiwang_Mountain.webp"],category:"Nature",location:"Baiwang Mountain",title:"Baiwang Mountain",story:"A view from the top."},{id:"16",url:Rv,...X["Baiwang_Mountain_Night.webp"],category:"Urban",location:"Baiwang Mountain",title:"Baiwang Night",story:"City lights seen from the mountain."},{id:"17",url:zv,...X["Snow_Plow.webp"],category:"Street",location:"City Streets",title:"Snow Plow",story:"Clearing the way in winter."},{id:"18",url:Dv,...X["Snow_Amusement_Park.webp"],category:"Urban",location:"Amusement Park",title:"Snowy Park",story:"A winter wonderland in the amusement park."},{id:"19",url:$v,...X["Cat_In_Snow.webp"],category:"Nature",location:"Outdoors",title:"Cat in Snow",story:"A cat exploring the snowy landscape."},{id:"20",url:Bv,...X["Longma_Mountain_Hydrangea_1.webp"],category:"Nature",location:"Longma Mountain",title:"Hydrangea",story:"Vibrant hydrangeas in bloom."},{id:"21",url:Wv,...X["Longma_Mountain_Moss_1.webp"],category:"Nature",location:"Longma Mountain",title:"Mountain Moss",story:"Detailed texture of moss."},{id:"22",url:Uv,...X["Longma_Mountain_Windmill.webp"],category:"Nature",location:"Longma Mountain",title:"Windmill",story:"Windmill turning in the mountain breeze."}];function Hv({filter:e,onPhotoClick:t}){const n=ie(),[r,o]=q.useState(9);q.useEffect(()=>{o(9)},[e]);const a=e==="All"?Rc:Rc.filter(c=>c.category===e),s=a.slice(0,r),l=r<a.length;return i.jsx("div",{className:"px-6 pb-16",children:i.jsxs("div",{className:"max-w-content mx-auto",children:[i.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:s.map(c=>i.jsx(bv,{photo:c,onClick:()=>t(c)},c.id))}),l&&i.jsx("div",{className:"flex justify-center mt-12",children:i.jsx("button",{onClick:()=>o(c=>c+6),className:"border border-line px-6 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",children:n(F.loadMore)})})]})})}function Vv({photo:e,onClose:t}){const n=ie(),r=q.useRef(null);return q.useEffect(()=>{var l;const o=document.activeElement,a=()=>{var c;return Array.from(((c=r.current)==null?void 0:c.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])'))??[])};(l=a()[0])==null||l.focus();const s=c=>{if(c.key==="Escape"){t();return}if(c.key==="Tab"){const u=a();if(u.length===0){c.preventDefault();return}const p=u[0],f=u[u.length-1];c.shiftKey&&document.activeElement===p?(c.preventDefault(),f.focus()):!c.shiftKey&&document.activeElement===f&&(c.preventDefault(),p.focus())}};return window.addEventListener("keydown",s),document.body.classList.add("scroll-locked"),()=>{var c;window.removeEventListener("keydown",s),document.body.classList.remove("scroll-locked"),(c=o==null?void 0:o.focus)==null||c.call(o)}},[t]),i.jsxs("div",{ref:r,role:"dialog","aria-modal":"true","aria-label":e.title,className:"fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4 backdrop-blur-sm animate-fadeIn",children:[i.jsx("button",{onClick:t,className:"absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-[2px] border border-line bg-surface text-muted-foreground transition-colors hover:border-foreground/50 hover:text-foreground","aria-label":n(F.closeLightbox),children:i.jsx(lh,{className:"h-5 w-5"})}),i.jsxs("div",{className:"grid max-h-[90vh] w-full max-w-7xl gap-8 md:grid-cols-[1fr_400px]",children:[i.jsx("div",{className:"flex items-center justify-center",children:i.jsx("img",{src:e.url,alt:e.title,className:"max-h-[85vh] w-auto rounded-[2px] border border-line shadow-2xl"})}),i.jsxs("div",{className:"flex flex-col gap-6 overflow-y-auto pr-4",children:[i.jsxs("div",{children:[i.jsx("h2",{className:"mb-2 text-3xl font-semibold tracking-tight text-foreground",children:e.title}),i.jsxs("div",{className:"flex items-center gap-2 text-sm text-muted-foreground",children:[i.jsx(lm,{className:"h-4 w-4"}),i.jsx("span",{children:e.location})]})]}),i.jsxs("div",{className:"rounded-[2px] border border-line bg-surface p-4",children:[i.jsxs("div",{className:"mb-3 flex items-center gap-2",children:[i.jsx(tm,{className:"h-4 w-4 text-brand"}),i.jsx("h3",{className:"font-mono text-xs font-semibold uppercase tracking-[0.14em] text-foreground",children:n(F.techSpecs)})]}),i.jsxs("div",{className:"space-y-2 font-mono text-xs text-foreground/85",children:[i.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[i.jsx("span",{className:"text-muted-foreground/70",children:n(F.camera)}),i.jsx("span",{children:e.camera})]}),i.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[i.jsx("span",{className:"text-muted-foreground/70",children:n(F.lens)}),i.jsx("span",{children:e.lens})]}),i.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[i.jsx("span",{className:"text-muted-foreground/70",children:n(F.iso)}),i.jsx("span",{children:e.iso})]}),i.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[i.jsx("span",{className:"text-muted-foreground/70",children:n(F.aperture)}),i.jsx("span",{children:e.aperture})]}),i.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[i.jsx("span",{className:"text-muted-foreground/70",children:n(F.shutter)}),i.jsx("span",{children:e.shutter})]})]})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"mb-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-foreground",children:n(F.story)}),i.jsx("p",{className:"text-sm leading-relaxed text-muted-foreground",children:e.story})]})]})]})]})}function Gv(){const[e,t]=q.useState("All"),[n,r]=q.useState(null);return i.jsxs("div",{className:"relative min-h-screen bg-background text-foreground transition-colors duration-300",children:[i.jsx(vv,{}),i.jsx(wv,{selectedFilter:e,onFilterChange:t}),i.jsx(Hv,{filter:e,onPhotoClick:r}),n&&i.jsx(Vv,{photo:n,onClose:()=>r(null)})]})}function na({children:e}){return i.jsx("h2",{className:"mt-5 border-b border-neutral-700 pb-0.5 font-serif text-[11pt] font-bold uppercase tracking-[0.08em] first:mt-0",children:e})}function Kv(){var o,a;const e=ie(),t=(o=me.social.find(s=>s.name==="GitHub"))==null?void 0:o.url.replace("https://",""),n=(a=me.social.find(s=>s.name==="LinkedIn"))==null?void 0:a.url.replace("https://www.",""),r=[e(me.location),me.resumeEmail,me.phone,t,n,"levi.run"].filter(Boolean);return i.jsxs("div",{className:"mx-auto max-w-[220mm] px-4 py-8 md:py-12",children:[i.jsxs("div",{className:"mb-6 flex items-center justify-between print:hidden",children:[i.jsxs(_e,{to:"/",className:"inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground",children:[i.jsx("span",{"aria-hidden":!0,children:"←"})," ",e({en:"Back",zh:"返回"})]}),i.jsxs("button",{type:"button",onClick:()=>window.print(),className:"inline-flex items-center gap-2 border border-foreground bg-foreground px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-background transition-colors hover:bg-background hover:text-foreground",children:[e({en:"Print / Save PDF",zh:"打印 / 存为 PDF"})," ",i.jsx("span",{"aria-hidden":!0,children:"↓"})]})]}),i.jsxs("article",{id:"cv-sheet",className:"border border-line bg-white px-[14mm] py-[12mm] font-serif text-[9.6pt] leading-[1.42] text-neutral-900 shadow-soft",children:[i.jsxs("header",{className:"text-center",children:[i.jsx("h1",{className:"font-serif text-[22pt] font-bold tracking-wide",children:"Levi Wang"}),i.jsx("p",{className:"mt-1.5 text-[8.6pt] text-neutral-700",children:r.join("  |  ")})]}),i.jsx(na,{children:e({en:"Education",zh:"教育经历"})}),mh.map((s,l)=>i.jsxs("div",{className:"mt-2",children:[i.jsxs("div",{className:"flex items-baseline justify-between gap-4",children:[i.jsx("span",{className:"font-bold",children:e(s.school)}),i.jsx("span",{className:"shrink-0",children:e(s.location)})]}),i.jsxs("div",{className:"flex items-baseline justify-between gap-4",children:[i.jsx("span",{children:e(s.degree)}),i.jsx("span",{className:"shrink-0 italic",children:s.period})]}),i.jsx("ul",{className:"mt-0.5 list-disc space-y-0.5 pl-5 marker:text-neutral-500",children:s.details.map((c,u)=>i.jsx("li",{children:e(c)},u))})]},l)),i.jsx(na,{children:e({en:"Experience",zh:"工作经历"})}),Xa.map((s,l)=>i.jsxs("div",{className:"mt-2.5",children:[i.jsxs("div",{className:"flex items-baseline justify-between gap-4",children:[i.jsx("span",{className:"font-bold",children:s.company}),i.jsx("span",{className:"shrink-0",children:e(s.location)})]}),i.jsxs("div",{className:"flex items-baseline justify-between gap-4",children:[i.jsx("span",{className:"font-semibold",children:e(s.role)}),i.jsx("span",{className:"shrink-0 italic",children:s.period})]}),s.summary&&i.jsx("p",{className:"mt-0.5",children:e(s.summary)}),i.jsx("ul",{className:"mt-0.5 list-disc space-y-0.5 pl-5 marker:text-neutral-500",children:s.highlights.map((c,u)=>typeof c=="object"&&"items"in c?i.jsxs("li",{className:"list-none -ml-5",children:[i.jsx("p",{className:"mt-1 font-semibold",children:e(c.title)}),i.jsx("ul",{className:"mt-0.5 list-disc space-y-0.5 pl-5 marker:text-neutral-500",children:c.items.map((p,f)=>i.jsx("li",{children:e(p)},f))})]},u):i.jsx("li",{children:e(c)},u))})]},l)),i.jsx(na,{children:e({en:"Skills & Interests",zh:"技能与兴趣"})}),i.jsxs("ul",{className:"mt-1.5 list-disc space-y-0.5 pl-5 marker:text-neutral-500",children:[Eo.map((s,l)=>i.jsxs("li",{children:[i.jsxs("span",{className:"font-semibold",children:[e(s.label),":"]})," ",s.items.map(c=>e(c)).join(", "),"."]},l)),i.jsxs("li",{children:[i.jsxs("span",{className:"font-semibold",children:[e({en:"Interests",zh:"兴趣"}),":"]})," ",yh.map(s=>e(s)).join(", "),"."]})]})]})]})}function Qv(){return i.jsxs(i.Fragment,{children:[i.jsx(Qm,{}),i.jsx(mo,{n:"02"}),i.jsx(wy,{}),i.jsx(mo,{n:"03"}),i.jsx(Cy,{}),i.jsx(mo,{n:"04"}),i.jsx(Ey,{}),i.jsx(mo,{n:"05"}),i.jsx(qy,{})]})}function Jv(){return i.jsxs(Qg,{children:[i.jsx(Iy,{}),i.jsx(tv,{}),i.jsx(nv,{}),i.jsxs("div",{className:"relative min-h-screen bg-background text-foreground antialiased",children:[i.jsx(My,{}),i.jsx(Nm,{}),i.jsx("div",{className:"h-16 sm:h-20"}),i.jsxs(Bg,{children:[i.jsx(Tt,{path:"/",element:i.jsx(Qv,{})}),i.jsx(Tt,{path:"/projects",element:i.jsx(av,{})}),i.jsx(Tt,{path:"/posts",element:i.jsx(uv,{})}),i.jsx(Tt,{path:"/post/:id",element:i.jsx(yv,{})}),i.jsx(Tt,{path:"/optics",element:i.jsx(Gv,{})}),i.jsx(Tt,{path:"/cv",element:i.jsx(Kv,{})}),i.jsx(Tt,{path:"*",element:i.jsx(Dg,{to:"/",replace:!0})})]}),i.jsx(Ty,{})]})]})}ra.createRoot(document.getElementById("root")).render(i.jsx(wt.StrictMode,{children:i.jsx(Mm,{children:i.jsx(Jv,{})})}));
