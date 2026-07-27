function ch(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var tl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Mu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Nu={exports:{}},ei={},Lu={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dr=Symbol.for("react.element"),dh=Symbol.for("react.portal"),hh=Symbol.for("react.fragment"),ph=Symbol.for("react.strict_mode"),fh=Symbol.for("react.profiler"),gh=Symbol.for("react.provider"),mh=Symbol.for("react.context"),yh=Symbol.for("react.forward_ref"),vh=Symbol.for("react.suspense"),wh=Symbol.for("react.memo"),xh=Symbol.for("react.lazy"),nl=Symbol.iterator;function bh(e){return e===null||typeof e!="object"?null:(e=nl&&e[nl]||e["@@iterator"],typeof e=="function"?e:null)}var Ou={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pu=Object.assign,Fu={};function Gn(e,t,n){this.props=e,this.context=t,this.refs=Fu,this.updater=n||Ou}Gn.prototype.isReactComponent={};Gn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Gn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ru(){}Ru.prototype=Gn.prototype;function Ka(e,t,n){this.props=e,this.context=t,this.refs=Fu,this.updater=n||Ou}var Qa=Ka.prototype=new Ru;Qa.constructor=Ka;Pu(Qa,Gn.prototype);Qa.isPureReactComponent=!0;var rl=Array.isArray,zu=Object.prototype.hasOwnProperty,Ja={current:null},Du={key:!0,ref:!0,__self:!0,__source:!0};function $u(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)zu.call(t,r)&&!Du.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];o.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:Dr,type:e,key:i,ref:s,props:o,_owner:Ja.current}}function kh(e,t){return{$$typeof:Dr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ya(e){return typeof e=="object"&&e!==null&&e.$$typeof===Dr}function qh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ol=/\/+/g;function qi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?qh(""+e.key):t.toString(36)}function po(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Dr:case dh:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+qi(s,0):r,rl(o)?(n="",e!=null&&(n=e.replace(ol,"$&/")+"/"),po(o,t,n,"",function(d){return d})):o!=null&&(Ya(o)&&(o=kh(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(ol,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",rl(e))for(var l=0;l<e.length;l++){i=e[l];var u=r+qi(i,l);s+=po(i,t,n,u,o)}else if(u=bh(e),typeof u=="function")for(e=u.call(e),l=0;!(i=e.next()).done;)i=i.value,u=r+qi(i,l++),s+=po(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Kr(e,t,n){if(e==null)return e;var r=[],o=0;return po(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Sh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var je={current:null},fo={transition:null},_h={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:fo,ReactCurrentOwner:Ja};function Bu(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:Kr,forEach:function(e,t,n){Kr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Kr(e,function(){t++}),t},toArray:function(e){return Kr(e,function(t){return t})||[]},only:function(e){if(!Ya(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=Gn;F.Fragment=hh;F.Profiler=fh;F.PureComponent=Ka;F.StrictMode=ph;F.Suspense=vh;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_h;F.act=Bu;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Pu({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=Ja.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)zu.call(t,u)&&!Du.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:Dr,type:e.type,key:o,ref:i,props:r,_owner:s}};F.createContext=function(e){return e={$$typeof:mh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:gh,_context:e},e.Consumer=e};F.createElement=$u;F.createFactory=function(e){var t=$u.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:yh,render:e}};F.isValidElement=Ya;F.lazy=function(e){return{$$typeof:xh,_payload:{_status:-1,_result:e},_init:Sh}};F.memo=function(e,t){return{$$typeof:wh,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=fo.transition;fo.transition={};try{e()}finally{fo.transition=t}};F.unstable_act=Bu;F.useCallback=function(e,t){return je.current.useCallback(e,t)};F.useContext=function(e){return je.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return je.current.useDeferredValue(e)};F.useEffect=function(e,t){return je.current.useEffect(e,t)};F.useId=function(){return je.current.useId()};F.useImperativeHandle=function(e,t,n){return je.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return je.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return je.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return je.current.useMemo(e,t)};F.useReducer=function(e,t,n){return je.current.useReducer(e,t,n)};F.useRef=function(e){return je.current.useRef(e)};F.useState=function(e){return je.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return je.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return je.current.useTransition()};F.version="18.3.1";Lu.exports=F;var q=Lu.exports;const vt=Mu(q),jh=ch({__proto__:null,default:vt},[q]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ah=q,Ch=Symbol.for("react.element"),Eh=Symbol.for("react.fragment"),Th=Object.prototype.hasOwnProperty,Ih=Ah.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Mh={key:!0,ref:!0,__self:!0,__source:!0};function Wu(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Th.call(t,r)&&!Mh.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Ch,type:e,key:i,ref:s,props:o,_owner:Ih.current}}ei.Fragment=Eh;ei.jsx=Wu;ei.jsxs=Wu;Nu.exports=ei;var a=Nu.exports,Yi={},Uu={exports:{}},Re={},Hu={exports:{}},Vu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,L){var O=C.length;C.push(L);e:for(;0<O;){var U=O-1>>>1,$=C[U];if(0<o($,L))C[U]=L,C[O]=$,O=U;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var L=C[0],O=C.pop();if(O!==L){C[0]=O;e:for(var U=0,$=C.length,vn=$>>>1;U<vn;){var ve=2*(U+1)-1,dt=C[ve],$e=ve+1,ht=C[$e];if(0>o(dt,O))$e<$&&0>o(ht,dt)?(C[U]=ht,C[$e]=O,U=$e):(C[U]=dt,C[ve]=O,U=ve);else if($e<$&&0>o(ht,O))C[U]=ht,C[$e]=O,U=$e;else break e}}return L}function o(C,L){var O=C.sortIndex-L.sortIndex;return O!==0?O:C.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var u=[],d=[],p=1,f=null,m=3,x=!1,S=!1,b=!1,_=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(C){for(var L=n(d);L!==null;){if(L.callback===null)r(d);else if(L.startTime<=C)r(d),L.sortIndex=L.expirationTime,t(u,L);else break;L=n(d)}}function y(C){if(b=!1,h(C),!S)if(n(u)!==null)S=!0,Zn(v);else{var L=n(d);L!==null&&yn(y,L.startTime-C)}}function v(C,L){S=!1,b&&(b=!1,g(A),A=-1),x=!0;var O=m;try{for(h(L),f=n(u);f!==null&&(!(f.expirationTime>L)||C&&!W());){var U=f.callback;if(typeof U=="function"){f.callback=null,m=f.priorityLevel;var $=U(f.expirationTime<=L);L=e.unstable_now(),typeof $=="function"?f.callback=$:f===n(u)&&r(u),h(L)}else r(u);f=n(u)}if(f!==null)var vn=!0;else{var ve=n(d);ve!==null&&yn(y,ve.startTime-L),vn=!1}return vn}finally{f=null,m=O,x=!1}}var w=!1,k=null,A=-1,E=5,I=-1;function W(){return!(e.unstable_now()-I<E)}function Ce(){if(k!==null){var C=e.unstable_now();I=C;var L=!0;try{L=k(!0,C)}finally{L?jt():(w=!1,k=null)}}else w=!1}var jt;if(typeof c=="function")jt=function(){c(Ce)};else if(typeof MessageChannel<"u"){var Yn=new MessageChannel,wi=Yn.port2;Yn.port1.onmessage=Ce,jt=function(){wi.postMessage(null)}}else jt=function(){_(Ce,0)};function Zn(C){k=C,w||(w=!0,jt())}function yn(C,L){A=_(function(){C(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){S||x||(S=!0,Zn(v))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(C){switch(m){case 1:case 2:case 3:var L=3;break;default:L=m}var O=m;m=L;try{return C()}finally{m=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,L){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var O=m;m=C;try{return L()}finally{m=O}},e.unstable_scheduleCallback=function(C,L,O){var U=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?U+O:U):O=U,C){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=O+$,C={id:p++,callback:L,priorityLevel:C,startTime:O,expirationTime:$,sortIndex:-1},O>U?(C.sortIndex=O,t(d,C),n(u)===null&&C===n(d)&&(b?(g(A),A=-1):b=!0,yn(y,O-U))):(C.sortIndex=$,t(u,C),S||x||(S=!0,Zn(v))),C},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(C){var L=m;return function(){var O=m;m=L;try{return C.apply(this,arguments)}finally{m=O}}}})(Vu);Hu.exports=Vu;var Nh=Hu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lh=q,Fe=Nh;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gu=new Set,br={};function pn(e,t){zn(e,t),zn(e+"Capture",t)}function zn(e,t){for(br[e]=t,e=0;e<t.length;e++)Gu.add(t[e])}var xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zi=Object.prototype.hasOwnProperty,Oh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,il={},al={};function Ph(e){return Zi.call(al,e)?!0:Zi.call(il,e)?!1:Oh.test(e)?al[e]=!0:(il[e]=!0,!1)}function Fh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Rh(e,t,n,r){if(t===null||typeof t>"u"||Fh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ae(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ye[e]=new Ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ye[t]=new Ae(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ye[e]=new Ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ye[e]=new Ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ye[e]=new Ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ye[e]=new Ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ye[e]=new Ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ye[e]=new Ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ye[e]=new Ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var Za=/[\-:]([a-z])/g;function Xa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Za,Xa);ye[t]=new Ae(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Za,Xa);ye[t]=new Ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Za,Xa);ye[t]=new Ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ye[e]=new Ae(e,1,!1,e.toLowerCase(),null,!1,!1)});ye.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ye[e]=new Ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function es(e,t,n,r){var o=ye.hasOwnProperty(t)?ye[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Rh(t,n,o,r)&&(n=null),r||o===null?Ph(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var St=Lh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qr=Symbol.for("react.element"),bn=Symbol.for("react.portal"),kn=Symbol.for("react.fragment"),ts=Symbol.for("react.strict_mode"),Xi=Symbol.for("react.profiler"),Ku=Symbol.for("react.provider"),Qu=Symbol.for("react.context"),ns=Symbol.for("react.forward_ref"),ea=Symbol.for("react.suspense"),ta=Symbol.for("react.suspense_list"),rs=Symbol.for("react.memo"),Ct=Symbol.for("react.lazy"),Ju=Symbol.for("react.offscreen"),sl=Symbol.iterator;function Xn(e){return e===null||typeof e!="object"?null:(e=sl&&e[sl]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,Si;function lr(e){if(Si===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Si=t&&t[1]||""}return`
`+Si+e}var _i=!1;function ji(e,t){if(!e||_i)return"";_i=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,l=i.length-1;1<=s&&0<=l&&o[s]!==i[l];)l--;for(;1<=s&&0<=l;s--,l--)if(o[s]!==i[l]){if(s!==1||l!==1)do if(s--,l--,0>l||o[s]!==i[l]){var u=`
`+o[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=l);break}}}finally{_i=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?lr(e):""}function zh(e){switch(e.tag){case 5:return lr(e.type);case 16:return lr("Lazy");case 13:return lr("Suspense");case 19:return lr("SuspenseList");case 0:case 2:case 15:return e=ji(e.type,!1),e;case 11:return e=ji(e.type.render,!1),e;case 1:return e=ji(e.type,!0),e;default:return""}}function na(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case kn:return"Fragment";case bn:return"Portal";case Xi:return"Profiler";case ts:return"StrictMode";case ea:return"Suspense";case ta:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Qu:return(e.displayName||"Context")+".Consumer";case Ku:return(e._context.displayName||"Context")+".Provider";case ns:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case rs:return t=e.displayName||null,t!==null?t:na(e.type)||"Memo";case Ct:t=e._payload,e=e._init;try{return na(e(t))}catch{}}return null}function Dh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return na(t);case 8:return t===ts?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ht(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Yu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $h(e){var t=Yu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Jr(e){e._valueTracker||(e._valueTracker=$h(e))}function Zu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Yu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function _o(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ra(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ll(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ht(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Xu(e,t){t=t.checked,t!=null&&es(e,"checked",t,!1)}function oa(e,t){Xu(e,t);var n=Ht(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ia(e,t.type,n):t.hasOwnProperty("defaultValue")&&ia(e,t.type,Ht(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ul(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ia(e,t,n){(t!=="number"||_o(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ur=Array.isArray;function Nn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ht(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function aa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function cl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(ur(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ht(n)}}function ec(e,t){var n=Ht(t.value),r=Ht(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function dl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function tc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?tc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Yr,nc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Yr=Yr||document.createElement("div"),Yr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Yr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function kr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var hr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bh=["Webkit","ms","Moz","O"];Object.keys(hr).forEach(function(e){Bh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),hr[t]=hr[e]})});function rc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||hr.hasOwnProperty(e)&&hr[e]?(""+t).trim():t+"px"}function oc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=rc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Wh=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function la(e,t){if(t){if(Wh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function ua(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ca=null;function os(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var da=null,Ln=null,On=null;function hl(e){if(e=Wr(e)){if(typeof da!="function")throw Error(j(280));var t=e.stateNode;t&&(t=ii(t),da(e.stateNode,e.type,t))}}function ic(e){Ln?On?On.push(e):On=[e]:Ln=e}function ac(){if(Ln){var e=Ln,t=On;if(On=Ln=null,hl(e),t)for(e=0;e<t.length;e++)hl(t[e])}}function sc(e,t){return e(t)}function lc(){}var Ai=!1;function uc(e,t,n){if(Ai)return e(t,n);Ai=!0;try{return sc(e,t,n)}finally{Ai=!1,(Ln!==null||On!==null)&&(lc(),ac())}}function qr(e,t){var n=e.stateNode;if(n===null)return null;var r=ii(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var ha=!1;if(xt)try{var er={};Object.defineProperty(er,"passive",{get:function(){ha=!0}}),window.addEventListener("test",er,er),window.removeEventListener("test",er,er)}catch{ha=!1}function Uh(e,t,n,r,o,i,s,l,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(p){this.onError(p)}}var pr=!1,jo=null,Ao=!1,pa=null,Hh={onError:function(e){pr=!0,jo=e}};function Vh(e,t,n,r,o,i,s,l,u){pr=!1,jo=null,Uh.apply(Hh,arguments)}function Gh(e,t,n,r,o,i,s,l,u){if(Vh.apply(this,arguments),pr){if(pr){var d=jo;pr=!1,jo=null}else throw Error(j(198));Ao||(Ao=!0,pa=d)}}function fn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function cc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function pl(e){if(fn(e)!==e)throw Error(j(188))}function Kh(e){var t=e.alternate;if(!t){if(t=fn(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return pl(o),e;if(i===r)return pl(o),t;i=i.sibling}throw Error(j(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s){for(l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function dc(e){return e=Kh(e),e!==null?hc(e):null}function hc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=hc(e);if(t!==null)return t;e=e.sibling}return null}var pc=Fe.unstable_scheduleCallback,fl=Fe.unstable_cancelCallback,Qh=Fe.unstable_shouldYield,Jh=Fe.unstable_requestPaint,ne=Fe.unstable_now,Yh=Fe.unstable_getCurrentPriorityLevel,is=Fe.unstable_ImmediatePriority,fc=Fe.unstable_UserBlockingPriority,Co=Fe.unstable_NormalPriority,Zh=Fe.unstable_LowPriority,gc=Fe.unstable_IdlePriority,ti=null,lt=null;function Xh(e){if(lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(ti,e,void 0,(e.current.flags&128)===128)}catch{}}var tt=Math.clz32?Math.clz32:np,ep=Math.log,tp=Math.LN2;function np(e){return e>>>=0,e===0?32:31-(ep(e)/tp|0)|0}var Zr=64,Xr=4194304;function cr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Eo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~o;l!==0?r=cr(l):(i&=s,i!==0&&(r=cr(i)))}else s=n&~o,s!==0?r=cr(s):i!==0&&(r=cr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-tt(t),o=1<<n,r|=e[n],t&=~o;return r}function rp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function op(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-tt(i),l=1<<s,u=o[s];u===-1?(!(l&n)||l&r)&&(o[s]=rp(l,t)):u<=t&&(e.expiredLanes|=l),i&=~l}}function fa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function mc(){var e=Zr;return Zr<<=1,!(Zr&4194240)&&(Zr=64),e}function Ci(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function $r(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-tt(t),e[t]=n}function ip(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-tt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function as(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-tt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var B=0;function yc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var vc,ss,wc,xc,bc,ga=!1,eo=[],Pt=null,Ft=null,Rt=null,Sr=new Map,_r=new Map,It=[],ap="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gl(e,t){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":Ft=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":Sr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_r.delete(t.pointerId)}}function tr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Wr(t),t!==null&&ss(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function sp(e,t,n,r,o){switch(t){case"focusin":return Pt=tr(Pt,e,t,n,r,o),!0;case"dragenter":return Ft=tr(Ft,e,t,n,r,o),!0;case"mouseover":return Rt=tr(Rt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Sr.set(i,tr(Sr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,_r.set(i,tr(_r.get(i)||null,e,t,n,r,o)),!0}return!1}function kc(e){var t=tn(e.target);if(t!==null){var n=fn(t);if(n!==null){if(t=n.tag,t===13){if(t=cc(n),t!==null){e.blockedOn=t,bc(e.priority,function(){wc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function go(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ma(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ca=r,n.target.dispatchEvent(r),ca=null}else return t=Wr(n),t!==null&&ss(t),e.blockedOn=n,!1;t.shift()}return!0}function ml(e,t,n){go(e)&&n.delete(t)}function lp(){ga=!1,Pt!==null&&go(Pt)&&(Pt=null),Ft!==null&&go(Ft)&&(Ft=null),Rt!==null&&go(Rt)&&(Rt=null),Sr.forEach(ml),_r.forEach(ml)}function nr(e,t){e.blockedOn===t&&(e.blockedOn=null,ga||(ga=!0,Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority,lp)))}function jr(e){function t(o){return nr(o,e)}if(0<eo.length){nr(eo[0],e);for(var n=1;n<eo.length;n++){var r=eo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Pt!==null&&nr(Pt,e),Ft!==null&&nr(Ft,e),Rt!==null&&nr(Rt,e),Sr.forEach(t),_r.forEach(t),n=0;n<It.length;n++)r=It[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<It.length&&(n=It[0],n.blockedOn===null);)kc(n),n.blockedOn===null&&It.shift()}var Pn=St.ReactCurrentBatchConfig,To=!0;function up(e,t,n,r){var o=B,i=Pn.transition;Pn.transition=null;try{B=1,ls(e,t,n,r)}finally{B=o,Pn.transition=i}}function cp(e,t,n,r){var o=B,i=Pn.transition;Pn.transition=null;try{B=4,ls(e,t,n,r)}finally{B=o,Pn.transition=i}}function ls(e,t,n,r){if(To){var o=ma(e,t,n,r);if(o===null)Ri(e,t,r,Io,n),gl(e,r);else if(sp(o,e,t,n,r))r.stopPropagation();else if(gl(e,r),t&4&&-1<ap.indexOf(e)){for(;o!==null;){var i=Wr(o);if(i!==null&&vc(i),i=ma(e,t,n,r),i===null&&Ri(e,t,r,Io,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ri(e,t,r,null,n)}}var Io=null;function ma(e,t,n,r){if(Io=null,e=os(r),e=tn(e),e!==null)if(t=fn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=cc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Io=e,null}function qc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yh()){case is:return 1;case fc:return 4;case Co:case Zh:return 16;case gc:return 536870912;default:return 16}default:return 16}}var Nt=null,us=null,mo=null;function Sc(){if(mo)return mo;var e,t=us,n=t.length,r,o="value"in Nt?Nt.value:Nt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return mo=o.slice(e,1<r?1-r:void 0)}function yo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function to(){return!0}function yl(){return!1}function ze(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?to:yl,this.isPropagationStopped=yl,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=to)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=to)},persist:function(){},isPersistent:to}),t}var Kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cs=ze(Kn),Br=Z({},Kn,{view:0,detail:0}),dp=ze(Br),Ei,Ti,rr,ni=Z({},Br,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ds,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rr&&(rr&&e.type==="mousemove"?(Ei=e.screenX-rr.screenX,Ti=e.screenY-rr.screenY):Ti=Ei=0,rr=e),Ei)},movementY:function(e){return"movementY"in e?e.movementY:Ti}}),vl=ze(ni),hp=Z({},ni,{dataTransfer:0}),pp=ze(hp),fp=Z({},Br,{relatedTarget:0}),Ii=ze(fp),gp=Z({},Kn,{animationName:0,elapsedTime:0,pseudoElement:0}),mp=ze(gp),yp=Z({},Kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vp=ze(yp),wp=Z({},Kn,{data:0}),wl=ze(wp),xp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=kp[e])?!!t[e]:!1}function ds(){return qp}var Sp=Z({},Br,{key:function(e){if(e.key){var t=xp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=yo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ds,charCode:function(e){return e.type==="keypress"?yo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_p=ze(Sp),jp=Z({},ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xl=ze(jp),Ap=Z({},Br,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ds}),Cp=ze(Ap),Ep=Z({},Kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tp=ze(Ep),Ip=Z({},ni,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mp=ze(Ip),Np=[9,13,27,32],hs=xt&&"CompositionEvent"in window,fr=null;xt&&"documentMode"in document&&(fr=document.documentMode);var Lp=xt&&"TextEvent"in window&&!fr,_c=xt&&(!hs||fr&&8<fr&&11>=fr),bl=" ",kl=!1;function jc(e,t){switch(e){case"keyup":return Np.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ac(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qn=!1;function Op(e,t){switch(e){case"compositionend":return Ac(t);case"keypress":return t.which!==32?null:(kl=!0,bl);case"textInput":return e=t.data,e===bl&&kl?null:e;default:return null}}function Pp(e,t){if(qn)return e==="compositionend"||!hs&&jc(e,t)?(e=Sc(),mo=us=Nt=null,qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _c&&t.locale!=="ko"?null:t.data;default:return null}}var Fp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ql(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Fp[e.type]:t==="textarea"}function Cc(e,t,n,r){ic(r),t=Mo(t,"onChange"),0<t.length&&(n=new cs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var gr=null,Ar=null;function Rp(e){zc(e,0)}function ri(e){var t=jn(e);if(Zu(t))return e}function zp(e,t){if(e==="change")return t}var Ec=!1;if(xt){var Mi;if(xt){var Ni="oninput"in document;if(!Ni){var Sl=document.createElement("div");Sl.setAttribute("oninput","return;"),Ni=typeof Sl.oninput=="function"}Mi=Ni}else Mi=!1;Ec=Mi&&(!document.documentMode||9<document.documentMode)}function _l(){gr&&(gr.detachEvent("onpropertychange",Tc),Ar=gr=null)}function Tc(e){if(e.propertyName==="value"&&ri(Ar)){var t=[];Cc(t,Ar,e,os(e)),uc(Rp,t)}}function Dp(e,t,n){e==="focusin"?(_l(),gr=t,Ar=n,gr.attachEvent("onpropertychange",Tc)):e==="focusout"&&_l()}function $p(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ri(Ar)}function Bp(e,t){if(e==="click")return ri(t)}function Wp(e,t){if(e==="input"||e==="change")return ri(t)}function Up(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ot=typeof Object.is=="function"?Object.is:Up;function Cr(e,t){if(ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Zi.call(t,o)||!ot(e[o],t[o]))return!1}return!0}function jl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Al(e,t){var n=jl(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jl(n)}}function Ic(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ic(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mc(){for(var e=window,t=_o();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=_o(e.document)}return t}function ps(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Hp(e){var t=Mc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ic(n.ownerDocument.documentElement,n)){if(r!==null&&ps(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Al(n,i);var s=Al(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vp=xt&&"documentMode"in document&&11>=document.documentMode,Sn=null,ya=null,mr=null,va=!1;function Cl(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;va||Sn==null||Sn!==_o(r)||(r=Sn,"selectionStart"in r&&ps(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),mr&&Cr(mr,r)||(mr=r,r=Mo(ya,"onSelect"),0<r.length&&(t=new cs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Sn)))}function no(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var _n={animationend:no("Animation","AnimationEnd"),animationiteration:no("Animation","AnimationIteration"),animationstart:no("Animation","AnimationStart"),transitionend:no("Transition","TransitionEnd")},Li={},Nc={};xt&&(Nc=document.createElement("div").style,"AnimationEvent"in window||(delete _n.animationend.animation,delete _n.animationiteration.animation,delete _n.animationstart.animation),"TransitionEvent"in window||delete _n.transitionend.transition);function oi(e){if(Li[e])return Li[e];if(!_n[e])return e;var t=_n[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Nc)return Li[e]=t[n];return e}var Lc=oi("animationend"),Oc=oi("animationiteration"),Pc=oi("animationstart"),Fc=oi("transitionend"),Rc=new Map,El="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gt(e,t){Rc.set(e,t),pn(t,[e])}for(var Oi=0;Oi<El.length;Oi++){var Pi=El[Oi],Gp=Pi.toLowerCase(),Kp=Pi[0].toUpperCase()+Pi.slice(1);Gt(Gp,"on"+Kp)}Gt(Lc,"onAnimationEnd");Gt(Oc,"onAnimationIteration");Gt(Pc,"onAnimationStart");Gt("dblclick","onDoubleClick");Gt("focusin","onFocus");Gt("focusout","onBlur");Gt(Fc,"onTransitionEnd");zn("onMouseEnter",["mouseout","mouseover"]);zn("onMouseLeave",["mouseout","mouseover"]);zn("onPointerEnter",["pointerout","pointerover"]);zn("onPointerLeave",["pointerout","pointerover"]);pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pn("onBeforeInput",["compositionend","keypress","textInput","paste"]);pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qp=new Set("cancel close invalid load scroll toggle".split(" ").concat(dr));function Tl(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Gh(r,t,void 0,e),e.currentTarget=null}function zc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==i&&o.isPropagationStopped())break e;Tl(o,l,d),i=u}else for(s=0;s<r.length;s++){if(l=r[s],u=l.instance,d=l.currentTarget,l=l.listener,u!==i&&o.isPropagationStopped())break e;Tl(o,l,d),i=u}}}if(Ao)throw e=pa,Ao=!1,pa=null,e}function V(e,t){var n=t[qa];n===void 0&&(n=t[qa]=new Set);var r=e+"__bubble";n.has(r)||(Dc(t,e,2,!1),n.add(r))}function Fi(e,t,n){var r=0;t&&(r|=4),Dc(n,e,r,t)}var ro="_reactListening"+Math.random().toString(36).slice(2);function Er(e){if(!e[ro]){e[ro]=!0,Gu.forEach(function(n){n!=="selectionchange"&&(Qp.has(n)||Fi(n,!1,e),Fi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ro]||(t[ro]=!0,Fi("selectionchange",!1,t))}}function Dc(e,t,n,r){switch(qc(t)){case 1:var o=up;break;case 4:o=cp;break;default:o=ls}n=o.bind(null,t,n,e),o=void 0,!ha||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ri(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;s=s.return}for(;l!==null;){if(s=tn(l),s===null)return;if(u=s.tag,u===5||u===6){r=i=s;continue e}l=l.parentNode}}r=r.return}uc(function(){var d=i,p=os(n),f=[];e:{var m=Rc.get(e);if(m!==void 0){var x=cs,S=e;switch(e){case"keypress":if(yo(n)===0)break e;case"keydown":case"keyup":x=_p;break;case"focusin":S="focus",x=Ii;break;case"focusout":S="blur",x=Ii;break;case"beforeblur":case"afterblur":x=Ii;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=vl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=pp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Cp;break;case Lc:case Oc:case Pc:x=mp;break;case Fc:x=Tp;break;case"scroll":x=dp;break;case"wheel":x=Mp;break;case"copy":case"cut":case"paste":x=vp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=xl}var b=(t&4)!==0,_=!b&&e==="scroll",g=b?m!==null?m+"Capture":null:m;b=[];for(var c=d,h;c!==null;){h=c;var y=h.stateNode;if(h.tag===5&&y!==null&&(h=y,g!==null&&(y=qr(c,g),y!=null&&b.push(Tr(c,y,h)))),_)break;c=c.return}0<b.length&&(m=new x(m,S,null,n,p),f.push({event:m,listeners:b}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==ca&&(S=n.relatedTarget||n.fromElement)&&(tn(S)||S[bt]))break e;if((x||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,x?(S=n.relatedTarget||n.toElement,x=d,S=S?tn(S):null,S!==null&&(_=fn(S),S!==_||S.tag!==5&&S.tag!==6)&&(S=null)):(x=null,S=d),x!==S)){if(b=vl,y="onMouseLeave",g="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(b=xl,y="onPointerLeave",g="onPointerEnter",c="pointer"),_=x==null?m:jn(x),h=S==null?m:jn(S),m=new b(y,c+"leave",x,n,p),m.target=_,m.relatedTarget=h,y=null,tn(p)===d&&(b=new b(g,c+"enter",S,n,p),b.target=h,b.relatedTarget=_,y=b),_=y,x&&S)t:{for(b=x,g=S,c=0,h=b;h;h=wn(h))c++;for(h=0,y=g;y;y=wn(y))h++;for(;0<c-h;)b=wn(b),c--;for(;0<h-c;)g=wn(g),h--;for(;c--;){if(b===g||g!==null&&b===g.alternate)break t;b=wn(b),g=wn(g)}b=null}else b=null;x!==null&&Il(f,m,x,b,!1),S!==null&&_!==null&&Il(f,_,S,b,!0)}}e:{if(m=d?jn(d):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var v=zp;else if(ql(m))if(Ec)v=Wp;else{v=$p;var w=Dp}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(v=Bp);if(v&&(v=v(e,d))){Cc(f,v,n,p);break e}w&&w(e,m,d),e==="focusout"&&(w=m._wrapperState)&&w.controlled&&m.type==="number"&&ia(m,"number",m.value)}switch(w=d?jn(d):window,e){case"focusin":(ql(w)||w.contentEditable==="true")&&(Sn=w,ya=d,mr=null);break;case"focusout":mr=ya=Sn=null;break;case"mousedown":va=!0;break;case"contextmenu":case"mouseup":case"dragend":va=!1,Cl(f,n,p);break;case"selectionchange":if(Vp)break;case"keydown":case"keyup":Cl(f,n,p)}var k;if(hs)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else qn?jc(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(_c&&n.locale!=="ko"&&(qn||A!=="onCompositionStart"?A==="onCompositionEnd"&&qn&&(k=Sc()):(Nt=p,us="value"in Nt?Nt.value:Nt.textContent,qn=!0)),w=Mo(d,A),0<w.length&&(A=new wl(A,e,null,n,p),f.push({event:A,listeners:w}),k?A.data=k:(k=Ac(n),k!==null&&(A.data=k)))),(k=Lp?Op(e,n):Pp(e,n))&&(d=Mo(d,"onBeforeInput"),0<d.length&&(p=new wl("onBeforeInput","beforeinput",null,n,p),f.push({event:p,listeners:d}),p.data=k))}zc(f,t)})}function Tr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Mo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=qr(e,n),i!=null&&r.unshift(Tr(e,i,o)),i=qr(e,t),i!=null&&r.push(Tr(e,i,o))),e=e.return}return r}function wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Il(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,o?(u=qr(n,i),u!=null&&s.unshift(Tr(n,u,l))):o||(u=qr(n,i),u!=null&&s.push(Tr(n,u,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Jp=/\r\n?/g,Yp=/\u0000|\uFFFD/g;function Ml(e){return(typeof e=="string"?e:""+e).replace(Jp,`
`).replace(Yp,"")}function oo(e,t,n){if(t=Ml(t),Ml(e)!==t&&n)throw Error(j(425))}function No(){}var wa=null,xa=null;function ba(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ka=typeof setTimeout=="function"?setTimeout:void 0,Zp=typeof clearTimeout=="function"?clearTimeout:void 0,Nl=typeof Promise=="function"?Promise:void 0,Xp=typeof queueMicrotask=="function"?queueMicrotask:typeof Nl<"u"?function(e){return Nl.resolve(null).then(e).catch(ef)}:ka;function ef(e){setTimeout(function(){throw e})}function zi(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),jr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);jr(t)}function zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ll(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Qn=Math.random().toString(36).slice(2),st="__reactFiber$"+Qn,Ir="__reactProps$"+Qn,bt="__reactContainer$"+Qn,qa="__reactEvents$"+Qn,tf="__reactListeners$"+Qn,nf="__reactHandles$"+Qn;function tn(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[bt]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ll(e);e!==null;){if(n=e[st])return n;e=Ll(e)}return t}e=n,n=e.parentNode}return null}function Wr(e){return e=e[st]||e[bt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function jn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function ii(e){return e[Ir]||null}var Sa=[],An=-1;function Kt(e){return{current:e}}function K(e){0>An||(e.current=Sa[An],Sa[An]=null,An--)}function H(e,t){An++,Sa[An]=e.current,e.current=t}var Vt={},qe=Kt(Vt),Ie=Kt(!1),sn=Vt;function Dn(e,t){var n=e.type.contextTypes;if(!n)return Vt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Me(e){return e=e.childContextTypes,e!=null}function Lo(){K(Ie),K(qe)}function Ol(e,t,n){if(qe.current!==Vt)throw Error(j(168));H(qe,t),H(Ie,n)}function $c(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(j(108,Dh(e)||"Unknown",o));return Z({},n,r)}function Oo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Vt,sn=qe.current,H(qe,e),H(Ie,Ie.current),!0}function Pl(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=$c(e,t,sn),r.__reactInternalMemoizedMergedChildContext=e,K(Ie),K(qe),H(qe,e)):K(Ie),H(Ie,n)}var ft=null,ai=!1,Di=!1;function Bc(e){ft===null?ft=[e]:ft.push(e)}function rf(e){ai=!0,Bc(e)}function Qt(){if(!Di&&ft!==null){Di=!0;var e=0,t=B;try{var n=ft;for(B=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ft=null,ai=!1}catch(o){throw ft!==null&&(ft=ft.slice(e+1)),pc(is,Qt),o}finally{B=t,Di=!1}}return null}var Cn=[],En=0,Po=null,Fo=0,We=[],Ue=0,ln=null,mt=1,yt="";function Zt(e,t){Cn[En++]=Fo,Cn[En++]=Po,Po=e,Fo=t}function Wc(e,t,n){We[Ue++]=mt,We[Ue++]=yt,We[Ue++]=ln,ln=e;var r=mt;e=yt;var o=32-tt(r)-1;r&=~(1<<o),n+=1;var i=32-tt(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,mt=1<<32-tt(t)+o|n<<o|r,yt=i+e}else mt=1<<i|n<<o|r,yt=e}function fs(e){e.return!==null&&(Zt(e,1),Wc(e,1,0))}function gs(e){for(;e===Po;)Po=Cn[--En],Cn[En]=null,Fo=Cn[--En],Cn[En]=null;for(;e===ln;)ln=We[--Ue],We[Ue]=null,yt=We[--Ue],We[Ue]=null,mt=We[--Ue],We[Ue]=null}var Pe=null,Oe=null,Q=!1,et=null;function Uc(e,t){var n=He(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Fl(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Pe=e,Oe=zt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Pe=e,Oe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ln!==null?{id:mt,overflow:yt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=He(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Pe=e,Oe=null,!0):!1;default:return!1}}function _a(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ja(e){if(Q){var t=Oe;if(t){var n=t;if(!Fl(e,t)){if(_a(e))throw Error(j(418));t=zt(n.nextSibling);var r=Pe;t&&Fl(e,t)?Uc(r,n):(e.flags=e.flags&-4097|2,Q=!1,Pe=e)}}else{if(_a(e))throw Error(j(418));e.flags=e.flags&-4097|2,Q=!1,Pe=e}}}function Rl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Pe=e}function io(e){if(e!==Pe)return!1;if(!Q)return Rl(e),Q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ba(e.type,e.memoizedProps)),t&&(t=Oe)){if(_a(e))throw Hc(),Error(j(418));for(;t;)Uc(e,t),t=zt(t.nextSibling)}if(Rl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Oe=zt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Oe=null}}else Oe=Pe?zt(e.stateNode.nextSibling):null;return!0}function Hc(){for(var e=Oe;e;)e=zt(e.nextSibling)}function $n(){Oe=Pe=null,Q=!1}function ms(e){et===null?et=[e]:et.push(e)}var of=St.ReactCurrentBatchConfig;function or(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var l=o.refs;s===null?delete l[i]:l[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function ao(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function zl(e){var t=e._init;return t(e._payload)}function Vc(e){function t(g,c){if(e){var h=g.deletions;h===null?(g.deletions=[c],g.flags|=16):h.push(c)}}function n(g,c){if(!e)return null;for(;c!==null;)t(g,c),c=c.sibling;return null}function r(g,c){for(g=new Map;c!==null;)c.key!==null?g.set(c.key,c):g.set(c.index,c),c=c.sibling;return g}function o(g,c){return g=Wt(g,c),g.index=0,g.sibling=null,g}function i(g,c,h){return g.index=h,e?(h=g.alternate,h!==null?(h=h.index,h<c?(g.flags|=2,c):h):(g.flags|=2,c)):(g.flags|=1048576,c)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,c,h,y){return c===null||c.tag!==6?(c=Gi(h,g.mode,y),c.return=g,c):(c=o(c,h),c.return=g,c)}function u(g,c,h,y){var v=h.type;return v===kn?p(g,c,h.props.children,y,h.key):c!==null&&(c.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===Ct&&zl(v)===c.type)?(y=o(c,h.props),y.ref=or(g,c,h),y.return=g,y):(y=So(h.type,h.key,h.props,null,g.mode,y),y.ref=or(g,c,h),y.return=g,y)}function d(g,c,h,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=Ki(h,g.mode,y),c.return=g,c):(c=o(c,h.children||[]),c.return=g,c)}function p(g,c,h,y,v){return c===null||c.tag!==7?(c=an(h,g.mode,y,v),c.return=g,c):(c=o(c,h),c.return=g,c)}function f(g,c,h){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Gi(""+c,g.mode,h),c.return=g,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Qr:return h=So(c.type,c.key,c.props,null,g.mode,h),h.ref=or(g,null,c),h.return=g,h;case bn:return c=Ki(c,g.mode,h),c.return=g,c;case Ct:var y=c._init;return f(g,y(c._payload),h)}if(ur(c)||Xn(c))return c=an(c,g.mode,h,null),c.return=g,c;ao(g,c)}return null}function m(g,c,h,y){var v=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return v!==null?null:l(g,c,""+h,y);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Qr:return h.key===v?u(g,c,h,y):null;case bn:return h.key===v?d(g,c,h,y):null;case Ct:return v=h._init,m(g,c,v(h._payload),y)}if(ur(h)||Xn(h))return v!==null?null:p(g,c,h,y,null);ao(g,h)}return null}function x(g,c,h,y,v){if(typeof y=="string"&&y!==""||typeof y=="number")return g=g.get(h)||null,l(c,g,""+y,v);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Qr:return g=g.get(y.key===null?h:y.key)||null,u(c,g,y,v);case bn:return g=g.get(y.key===null?h:y.key)||null,d(c,g,y,v);case Ct:var w=y._init;return x(g,c,h,w(y._payload),v)}if(ur(y)||Xn(y))return g=g.get(h)||null,p(c,g,y,v,null);ao(c,y)}return null}function S(g,c,h,y){for(var v=null,w=null,k=c,A=c=0,E=null;k!==null&&A<h.length;A++){k.index>A?(E=k,k=null):E=k.sibling;var I=m(g,k,h[A],y);if(I===null){k===null&&(k=E);break}e&&k&&I.alternate===null&&t(g,k),c=i(I,c,A),w===null?v=I:w.sibling=I,w=I,k=E}if(A===h.length)return n(g,k),Q&&Zt(g,A),v;if(k===null){for(;A<h.length;A++)k=f(g,h[A],y),k!==null&&(c=i(k,c,A),w===null?v=k:w.sibling=k,w=k);return Q&&Zt(g,A),v}for(k=r(g,k);A<h.length;A++)E=x(k,g,A,h[A],y),E!==null&&(e&&E.alternate!==null&&k.delete(E.key===null?A:E.key),c=i(E,c,A),w===null?v=E:w.sibling=E,w=E);return e&&k.forEach(function(W){return t(g,W)}),Q&&Zt(g,A),v}function b(g,c,h,y){var v=Xn(h);if(typeof v!="function")throw Error(j(150));if(h=v.call(h),h==null)throw Error(j(151));for(var w=v=null,k=c,A=c=0,E=null,I=h.next();k!==null&&!I.done;A++,I=h.next()){k.index>A?(E=k,k=null):E=k.sibling;var W=m(g,k,I.value,y);if(W===null){k===null&&(k=E);break}e&&k&&W.alternate===null&&t(g,k),c=i(W,c,A),w===null?v=W:w.sibling=W,w=W,k=E}if(I.done)return n(g,k),Q&&Zt(g,A),v;if(k===null){for(;!I.done;A++,I=h.next())I=f(g,I.value,y),I!==null&&(c=i(I,c,A),w===null?v=I:w.sibling=I,w=I);return Q&&Zt(g,A),v}for(k=r(g,k);!I.done;A++,I=h.next())I=x(k,g,A,I.value,y),I!==null&&(e&&I.alternate!==null&&k.delete(I.key===null?A:I.key),c=i(I,c,A),w===null?v=I:w.sibling=I,w=I);return e&&k.forEach(function(Ce){return t(g,Ce)}),Q&&Zt(g,A),v}function _(g,c,h,y){if(typeof h=="object"&&h!==null&&h.type===kn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Qr:e:{for(var v=h.key,w=c;w!==null;){if(w.key===v){if(v=h.type,v===kn){if(w.tag===7){n(g,w.sibling),c=o(w,h.props.children),c.return=g,g=c;break e}}else if(w.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===Ct&&zl(v)===w.type){n(g,w.sibling),c=o(w,h.props),c.ref=or(g,w,h),c.return=g,g=c;break e}n(g,w);break}else t(g,w);w=w.sibling}h.type===kn?(c=an(h.props.children,g.mode,y,h.key),c.return=g,g=c):(y=So(h.type,h.key,h.props,null,g.mode,y),y.ref=or(g,c,h),y.return=g,g=y)}return s(g);case bn:e:{for(w=h.key;c!==null;){if(c.key===w)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){n(g,c.sibling),c=o(c,h.children||[]),c.return=g,g=c;break e}else{n(g,c);break}else t(g,c);c=c.sibling}c=Ki(h,g.mode,y),c.return=g,g=c}return s(g);case Ct:return w=h._init,_(g,c,w(h._payload),y)}if(ur(h))return S(g,c,h,y);if(Xn(h))return b(g,c,h,y);ao(g,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,c!==null&&c.tag===6?(n(g,c.sibling),c=o(c,h),c.return=g,g=c):(n(g,c),c=Gi(h,g.mode,y),c.return=g,g=c),s(g)):n(g,c)}return _}var Bn=Vc(!0),Gc=Vc(!1),Ro=Kt(null),zo=null,Tn=null,ys=null;function vs(){ys=Tn=zo=null}function ws(e){var t=Ro.current;K(Ro),e._currentValue=t}function Aa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Fn(e,t){zo=e,ys=Tn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Te=!0),e.firstContext=null)}function Ge(e){var t=e._currentValue;if(ys!==e)if(e={context:e,memoizedValue:t,next:null},Tn===null){if(zo===null)throw Error(j(308));Tn=e,zo.dependencies={lanes:0,firstContext:e}}else Tn=Tn.next=e;return t}var nn=null;function xs(e){nn===null?nn=[e]:nn.push(e)}function Kc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,xs(t)):(n.next=o.next,o.next=n),t.interleaved=n,kt(e,r)}function kt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Et=!1;function bs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,kt(e,n)}return o=r.interleaved,o===null?(t.next=t,xs(r)):(t.next=o.next,o.next=t),r.interleaved=t,kt(e,n)}function vo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,as(e,n)}}function Dl(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Do(e,t,n,r){var o=e.updateQueue;Et=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var u=l,d=u.next;u.next=null,s===null?i=d:s.next=d,s=u;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==s&&(l===null?p.firstBaseUpdate=d:l.next=d,p.lastBaseUpdate=u))}if(i!==null){var f=o.baseState;s=0,p=d=u=null,l=i;do{var m=l.lane,x=l.eventTime;if((r&m)===m){p!==null&&(p=p.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var S=e,b=l;switch(m=t,x=n,b.tag){case 1:if(S=b.payload,typeof S=="function"){f=S.call(x,f,m);break e}f=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=b.payload,m=typeof S=="function"?S.call(x,f,m):S,m==null)break e;f=Z({},f,m);break e;case 2:Et=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[l]:m.push(l))}else x={eventTime:x,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(d=p=x,u=f):p=p.next=x,s|=m;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;m=l,l=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(p===null&&(u=f),o.baseState=u,o.firstBaseUpdate=d,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);cn|=s,e.lanes=s,e.memoizedState=f}}function $l(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(j(191,o));o.call(r)}}}var Ur={},ut=Kt(Ur),Mr=Kt(Ur),Nr=Kt(Ur);function rn(e){if(e===Ur)throw Error(j(174));return e}function ks(e,t){switch(H(Nr,t),H(Mr,e),H(ut,Ur),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:sa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=sa(t,e)}K(ut),H(ut,t)}function Wn(){K(ut),K(Mr),K(Nr)}function Jc(e){rn(Nr.current);var t=rn(ut.current),n=sa(t,e.type);t!==n&&(H(Mr,e),H(ut,n))}function qs(e){Mr.current===e&&(K(ut),K(Mr))}var J=Kt(0);function $o(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $i=[];function Ss(){for(var e=0;e<$i.length;e++)$i[e]._workInProgressVersionPrimary=null;$i.length=0}var wo=St.ReactCurrentDispatcher,Bi=St.ReactCurrentBatchConfig,un=0,Y=null,ie=null,ue=null,Bo=!1,yr=!1,Lr=0,af=0;function we(){throw Error(j(321))}function _s(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ot(e[n],t[n]))return!1;return!0}function js(e,t,n,r,o,i){if(un=i,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,wo.current=e===null||e.memoizedState===null?cf:df,e=n(r,o),yr){i=0;do{if(yr=!1,Lr=0,25<=i)throw Error(j(301));i+=1,ue=ie=null,t.updateQueue=null,wo.current=hf,e=n(r,o)}while(yr)}if(wo.current=Wo,t=ie!==null&&ie.next!==null,un=0,ue=ie=Y=null,Bo=!1,t)throw Error(j(300));return e}function As(){var e=Lr!==0;return Lr=0,e}function at(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?Y.memoizedState=ue=e:ue=ue.next=e,ue}function Ke(){if(ie===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var t=ue===null?Y.memoizedState:ue.next;if(t!==null)ue=t,ie=e;else{if(e===null)throw Error(j(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},ue===null?Y.memoizedState=ue=e:ue=ue.next=e}return ue}function Or(e,t){return typeof t=="function"?t(e):t}function Wi(e){var t=Ke(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=ie,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=s=null,u=null,d=i;do{var p=d.lane;if((un&p)===p)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var f={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=f,s=r):u=u.next=f,Y.lanes|=p,cn|=p}d=d.next}while(d!==null&&d!==i);u===null?s=r:u.next=l,ot(r,t.memoizedState)||(Te=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Y.lanes|=i,cn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ui(e){var t=Ke(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);ot(i,t.memoizedState)||(Te=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Yc(){}function Zc(e,t){var n=Y,r=Ke(),o=t(),i=!ot(r.memoizedState,o);if(i&&(r.memoizedState=o,Te=!0),r=r.queue,Cs(td.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,Pr(9,ed.bind(null,n,r,o,t),void 0,null),de===null)throw Error(j(349));un&30||Xc(n,t,o)}return o}function Xc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ed(e,t,n,r){t.value=n,t.getSnapshot=r,nd(t)&&rd(e)}function td(e,t,n){return n(function(){nd(t)&&rd(e)})}function nd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ot(e,n)}catch{return!0}}function rd(e){var t=kt(e,1);t!==null&&nt(t,e,1,-1)}function Bl(e){var t=at();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Or,lastRenderedState:e},t.queue=e,e=e.dispatch=uf.bind(null,Y,e),[t.memoizedState,e]}function Pr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function od(){return Ke().memoizedState}function xo(e,t,n,r){var o=at();Y.flags|=e,o.memoizedState=Pr(1|t,n,void 0,r===void 0?null:r)}function si(e,t,n,r){var o=Ke();r=r===void 0?null:r;var i=void 0;if(ie!==null){var s=ie.memoizedState;if(i=s.destroy,r!==null&&_s(r,s.deps)){o.memoizedState=Pr(t,n,i,r);return}}Y.flags|=e,o.memoizedState=Pr(1|t,n,i,r)}function Wl(e,t){return xo(8390656,8,e,t)}function Cs(e,t){return si(2048,8,e,t)}function id(e,t){return si(4,2,e,t)}function ad(e,t){return si(4,4,e,t)}function sd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ld(e,t,n){return n=n!=null?n.concat([e]):null,si(4,4,sd.bind(null,t,e),n)}function Es(){}function ud(e,t){var n=Ke();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_s(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function cd(e,t){var n=Ke();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_s(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function dd(e,t,n){return un&21?(ot(n,t)||(n=mc(),Y.lanes|=n,cn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Te=!0),e.memoizedState=n)}function sf(e,t){var n=B;B=n!==0&&4>n?n:4,e(!0);var r=Bi.transition;Bi.transition={};try{e(!1),t()}finally{B=n,Bi.transition=r}}function hd(){return Ke().memoizedState}function lf(e,t,n){var r=Bt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},pd(e))fd(t,n);else if(n=Kc(e,t,n,r),n!==null){var o=_e();nt(n,e,r,o),gd(n,t,r)}}function uf(e,t,n){var r=Bt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(pd(e))fd(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,l=i(s,n);if(o.hasEagerState=!0,o.eagerState=l,ot(l,s)){var u=t.interleaved;u===null?(o.next=o,xs(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=Kc(e,t,o,r),n!==null&&(o=_e(),nt(n,e,r,o),gd(n,t,r))}}function pd(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function fd(e,t){yr=Bo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function gd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,as(e,n)}}var Wo={readContext:Ge,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useInsertionEffect:we,useLayoutEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useMutableSource:we,useSyncExternalStore:we,useId:we,unstable_isNewReconciler:!1},cf={readContext:Ge,useCallback:function(e,t){return at().memoizedState=[e,t===void 0?null:t],e},useContext:Ge,useEffect:Wl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,xo(4194308,4,sd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return xo(4194308,4,e,t)},useInsertionEffect:function(e,t){return xo(4,2,e,t)},useMemo:function(e,t){var n=at();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=at();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=lf.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=at();return e={current:e},t.memoizedState=e},useState:Bl,useDebugValue:Es,useDeferredValue:function(e){return at().memoizedState=e},useTransition:function(){var e=Bl(!1),t=e[0];return e=sf.bind(null,e[1]),at().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,o=at();if(Q){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),de===null)throw Error(j(349));un&30||Xc(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Wl(td.bind(null,r,i,e),[e]),r.flags|=2048,Pr(9,ed.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=at(),t=de.identifierPrefix;if(Q){var n=yt,r=mt;n=(r&~(1<<32-tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Lr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=af++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},df={readContext:Ge,useCallback:ud,useContext:Ge,useEffect:Cs,useImperativeHandle:ld,useInsertionEffect:id,useLayoutEffect:ad,useMemo:cd,useReducer:Wi,useRef:od,useState:function(){return Wi(Or)},useDebugValue:Es,useDeferredValue:function(e){var t=Ke();return dd(t,ie.memoizedState,e)},useTransition:function(){var e=Wi(Or)[0],t=Ke().memoizedState;return[e,t]},useMutableSource:Yc,useSyncExternalStore:Zc,useId:hd,unstable_isNewReconciler:!1},hf={readContext:Ge,useCallback:ud,useContext:Ge,useEffect:Cs,useImperativeHandle:ld,useInsertionEffect:id,useLayoutEffect:ad,useMemo:cd,useReducer:Ui,useRef:od,useState:function(){return Ui(Or)},useDebugValue:Es,useDeferredValue:function(e){var t=Ke();return ie===null?t.memoizedState=e:dd(t,ie.memoizedState,e)},useTransition:function(){var e=Ui(Or)[0],t=Ke().memoizedState;return[e,t]},useMutableSource:Yc,useSyncExternalStore:Zc,useId:hd,unstable_isNewReconciler:!1};function Ze(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ca(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var li={isMounted:function(e){return(e=e._reactInternals)?fn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=_e(),o=Bt(e),i=wt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Dt(e,i,o),t!==null&&(nt(t,e,o,r),vo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=_e(),o=Bt(e),i=wt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Dt(e,i,o),t!==null&&(nt(t,e,o,r),vo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=_e(),r=Bt(e),o=wt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Dt(e,o,r),t!==null&&(nt(t,e,r,n),vo(t,e,r))}};function Ul(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!Cr(n,r)||!Cr(o,i):!0}function md(e,t,n){var r=!1,o=Vt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ge(i):(o=Me(t)?sn:qe.current,r=t.contextTypes,i=(r=r!=null)?Dn(e,o):Vt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=li,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Hl(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&li.enqueueReplaceState(t,t.state,null)}function Ea(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},bs(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ge(i):(i=Me(t)?sn:qe.current,o.context=Dn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ca(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&li.enqueueReplaceState(o,o.state,null),Do(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Un(e,t){try{var n="",r=t;do n+=zh(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Hi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ta(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var pf=typeof WeakMap=="function"?WeakMap:Map;function yd(e,t,n){n=wt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ho||(Ho=!0,Da=r),Ta(e,t)},n}function vd(e,t,n){n=wt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ta(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ta(e,t),typeof r!="function"&&($t===null?$t=new Set([this]):$t.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Vl(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new pf;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Af.bind(null,e,t,n),t.then(e,e))}function Gl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Kl(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=wt(-1,1),t.tag=2,Dt(n,t,1))),n.lanes|=1),e)}var ff=St.ReactCurrentOwner,Te=!1;function Se(e,t,n,r){t.child=e===null?Gc(t,null,n,r):Bn(t,e.child,n,r)}function Ql(e,t,n,r,o){n=n.render;var i=t.ref;return Fn(t,o),r=js(e,t,n,r,i,o),n=As(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,qt(e,t,o)):(Q&&n&&fs(t),t.flags|=1,Se(e,t,r,o),t.child)}function Jl(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Fs(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,wd(e,t,i,r,o)):(e=So(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:Cr,n(s,r)&&e.ref===t.ref)return qt(e,t,o)}return t.flags|=1,e=Wt(i,r),e.ref=t.ref,e.return=t,t.child=e}function wd(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Cr(i,r)&&e.ref===t.ref)if(Te=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Te=!0);else return t.lanes=e.lanes,qt(e,t,o)}return Ia(e,t,n,r,o)}function xd(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(Mn,Le),Le|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(Mn,Le),Le|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,H(Mn,Le),Le|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,H(Mn,Le),Le|=r;return Se(e,t,o,n),t.child}function bd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ia(e,t,n,r,o){var i=Me(n)?sn:qe.current;return i=Dn(t,i),Fn(t,o),n=js(e,t,n,r,i,o),r=As(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,qt(e,t,o)):(Q&&r&&fs(t),t.flags|=1,Se(e,t,n,o),t.child)}function Yl(e,t,n,r,o){if(Me(n)){var i=!0;Oo(t)}else i=!1;if(Fn(t,o),t.stateNode===null)bo(e,t),md(t,n,r),Ea(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var u=s.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ge(d):(d=Me(n)?sn:qe.current,d=Dn(t,d));var p=n.getDerivedStateFromProps,f=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||u!==d)&&Hl(t,s,r,d),Et=!1;var m=t.memoizedState;s.state=m,Do(t,r,s,o),u=t.memoizedState,l!==r||m!==u||Ie.current||Et?(typeof p=="function"&&(Ca(t,n,p,r),u=t.memoizedState),(l=Et||Ul(t,n,l,r,m,u,d))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),s.props=r,s.state=u,s.context=d,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Qc(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:Ze(t.type,l),s.props=d,f=t.pendingProps,m=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ge(u):(u=Me(n)?sn:qe.current,u=Dn(t,u));var x=n.getDerivedStateFromProps;(p=typeof x=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==f||m!==u)&&Hl(t,s,r,u),Et=!1,m=t.memoizedState,s.state=m,Do(t,r,s,o);var S=t.memoizedState;l!==f||m!==S||Ie.current||Et?(typeof x=="function"&&(Ca(t,n,x,r),S=t.memoizedState),(d=Et||Ul(t,n,d,r,m,S,u)||!1)?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,S,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,S,u)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),s.props=r,s.state=S,s.context=u,r=d):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Ma(e,t,n,r,i,o)}function Ma(e,t,n,r,o,i){bd(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&Pl(t,n,!1),qt(e,t,i);r=t.stateNode,ff.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Bn(t,e.child,null,i),t.child=Bn(t,null,l,i)):Se(e,t,l,i),t.memoizedState=r.state,o&&Pl(t,n,!0),t.child}function kd(e){var t=e.stateNode;t.pendingContext?Ol(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ol(e,t.context,!1),ks(e,t.containerInfo)}function Zl(e,t,n,r,o){return $n(),ms(o),t.flags|=256,Se(e,t,n,r),t.child}var Na={dehydrated:null,treeContext:null,retryLane:0};function La(e){return{baseLanes:e,cachePool:null,transitions:null}}function qd(e,t,n){var r=t.pendingProps,o=J.current,i=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),H(J,o&1),e===null)return ja(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=di(s,r,0,null),e=an(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=La(n),t.memoizedState=Na,e):Ts(t,s));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return gf(e,t,s,r,l,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,l=o.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Wt(o,u),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=Wt(l,i):(i=an(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?La(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=Na,r}return i=e.child,e=i.sibling,r=Wt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ts(e,t){return t=di({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function so(e,t,n,r){return r!==null&&ms(r),Bn(t,e.child,null,n),e=Ts(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gf(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=Hi(Error(j(422))),so(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=di({mode:"visible",children:r.children},o,0,null),i=an(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Bn(t,e.child,null,s),t.child.memoizedState=La(s),t.memoizedState=Na,i);if(!(t.mode&1))return so(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(j(419)),r=Hi(i,r,void 0),so(e,t,s,r)}if(l=(s&e.childLanes)!==0,Te||l){if(r=de,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,kt(e,o),nt(r,e,o,-1))}return Ps(),r=Hi(Error(j(421))),so(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Cf.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Oe=zt(o.nextSibling),Pe=t,Q=!0,et=null,e!==null&&(We[Ue++]=mt,We[Ue++]=yt,We[Ue++]=ln,mt=e.id,yt=e.overflow,ln=t),t=Ts(t,r.children),t.flags|=4096,t)}function Xl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Aa(e.return,t,n)}function Vi(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Sd(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Se(e,t,r.children,n),r=J.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xl(e,n,t);else if(e.tag===19)Xl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(J,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&$o(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Vi(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&$o(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Vi(t,!0,n,null,i);break;case"together":Vi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function bo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),cn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=Wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function mf(e,t,n){switch(t.tag){case 3:kd(t),$n();break;case 5:Jc(t);break;case 1:Me(t.type)&&Oo(t);break;case 4:ks(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;H(Ro,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(H(J,J.current&1),t.flags|=128,null):n&t.child.childLanes?qd(e,t,n):(H(J,J.current&1),e=qt(e,t,n),e!==null?e.sibling:null);H(J,J.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Sd(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),H(J,J.current),r)break;return null;case 22:case 23:return t.lanes=0,xd(e,t,n)}return qt(e,t,n)}var _d,Oa,jd,Ad;_d=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Oa=function(){};jd=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,rn(ut.current);var i=null;switch(n){case"input":o=ra(e,o),r=ra(e,r),i=[];break;case"select":o=Z({},o,{value:void 0}),r=Z({},r,{value:void 0}),i=[];break;case"textarea":o=aa(e,o),r=aa(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=No)}la(n,r);var s;n=null;for(d in o)if(!r.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var l=o[d];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(br.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(l=o!=null?o[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(s in l)!l.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&l[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(i||(i=[]),i.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(br.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&V("scroll",e),i||l===u||(i=[])):(i=i||[]).push(d,u))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};Ad=function(e,t,n,r){n!==r&&(t.flags|=4)};function ir(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function yf(e,t,n){var r=t.pendingProps;switch(gs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(t),null;case 1:return Me(t.type)&&Lo(),xe(t),null;case 3:return r=t.stateNode,Wn(),K(Ie),K(qe),Ss(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(io(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,et!==null&&(Wa(et),et=null))),Oa(e,t),xe(t),null;case 5:qs(t);var o=rn(Nr.current);if(n=t.type,e!==null&&t.stateNode!=null)jd(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return xe(t),null}if(e=rn(ut.current),io(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[st]=t,r[Ir]=i,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(o=0;o<dr.length;o++)V(dr[o],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":ll(r,i),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},V("invalid",r);break;case"textarea":cl(r,i),V("invalid",r)}la(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var l=i[s];s==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&oo(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&oo(r.textContent,l,e),o=["children",""+l]):br.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&V("scroll",r)}switch(n){case"input":Jr(r),ul(r,i,!0);break;case"textarea":Jr(r),dl(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=No)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=tc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[st]=t,e[Ir]=r,_d(e,t,!1,!1),t.stateNode=e;e:{switch(s=ua(n,r),n){case"dialog":V("cancel",e),V("close",e),o=r;break;case"iframe":case"object":case"embed":V("load",e),o=r;break;case"video":case"audio":for(o=0;o<dr.length;o++)V(dr[o],e);o=r;break;case"source":V("error",e),o=r;break;case"img":case"image":case"link":V("error",e),V("load",e),o=r;break;case"details":V("toggle",e),o=r;break;case"input":ll(e,r),o=ra(e,r),V("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Z({},r,{value:void 0}),V("invalid",e);break;case"textarea":cl(e,r),o=aa(e,r),V("invalid",e);break;default:o=r}la(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?oc(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&nc(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&kr(e,u):typeof u=="number"&&kr(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(br.hasOwnProperty(i)?u!=null&&i==="onScroll"&&V("scroll",e):u!=null&&es(e,i,u,s))}switch(n){case"input":Jr(e),ul(e,r,!1);break;case"textarea":Jr(e),dl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ht(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Nn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Nn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=No)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return xe(t),null;case 6:if(e&&t.stateNode!=null)Ad(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=rn(Nr.current),rn(ut.current),io(t)){if(r=t.stateNode,n=t.memoizedProps,r[st]=t,(i=r.nodeValue!==n)&&(e=Pe,e!==null))switch(e.tag){case 3:oo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&oo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[st]=t,t.stateNode=r}return xe(t),null;case 13:if(K(J),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&Oe!==null&&t.mode&1&&!(t.flags&128))Hc(),$n(),t.flags|=98560,i=!1;else if(i=io(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(j(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[st]=t}else $n(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;xe(t),i=!1}else et!==null&&(Wa(et),et=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||J.current&1?se===0&&(se=3):Ps())),t.updateQueue!==null&&(t.flags|=4),xe(t),null);case 4:return Wn(),Oa(e,t),e===null&&Er(t.stateNode.containerInfo),xe(t),null;case 10:return ws(t.type._context),xe(t),null;case 17:return Me(t.type)&&Lo(),xe(t),null;case 19:if(K(J),i=t.memoizedState,i===null)return xe(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)ir(i,!1);else{if(se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=$o(e),s!==null){for(t.flags|=128,ir(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(J,J.current&1|2),t.child}e=e.sibling}i.tail!==null&&ne()>Hn&&(t.flags|=128,r=!0,ir(i,!1),t.lanes=4194304)}else{if(!r)if(e=$o(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ir(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Q)return xe(t),null}else 2*ne()-i.renderingStartTime>Hn&&n!==1073741824&&(t.flags|=128,r=!0,ir(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ne(),t.sibling=null,n=J.current,H(J,r?n&1|2:n&1),t):(xe(t),null);case 22:case 23:return Os(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Le&1073741824&&(xe(t),t.subtreeFlags&6&&(t.flags|=8192)):xe(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function vf(e,t){switch(gs(t),t.tag){case 1:return Me(t.type)&&Lo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wn(),K(Ie),K(qe),Ss(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return qs(t),null;case 13:if(K(J),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));$n()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(J),null;case 4:return Wn(),null;case 10:return ws(t.type._context),null;case 22:case 23:return Os(),null;case 24:return null;default:return null}}var lo=!1,ke=!1,wf=typeof WeakSet=="function"?WeakSet:Set,T=null;function In(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function Pa(e,t,n){try{n()}catch(r){ee(e,t,r)}}var eu=!1;function xf(e,t){if(wa=To,e=Mc(),ps(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,l=-1,u=-1,d=0,p=0,f=e,m=null;t:for(;;){for(var x;f!==n||o!==0&&f.nodeType!==3||(l=s+o),f!==i||r!==0&&f.nodeType!==3||(u=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(x=f.firstChild)!==null;)m=f,f=x;for(;;){if(f===e)break t;if(m===n&&++d===o&&(l=s),m===i&&++p===r&&(u=s),(x=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=x}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(xa={focusedElem:e,selectionRange:n},To=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var b=S.memoizedProps,_=S.memoizedState,g=t.stateNode,c=g.getSnapshotBeforeUpdate(t.elementType===t.type?b:Ze(t.type,b),_);g.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(y){ee(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return S=eu,eu=!1,S}function vr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Pa(t,n,i)}o=o.next}while(o!==r)}}function ui(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Fa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Cd(e){var t=e.alternate;t!==null&&(e.alternate=null,Cd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[st],delete t[Ir],delete t[qa],delete t[tf],delete t[nf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ed(e){return e.tag===5||e.tag===3||e.tag===4}function tu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ed(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ra(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=No));else if(r!==4&&(e=e.child,e!==null))for(Ra(e,t,n),e=e.sibling;e!==null;)Ra(e,t,n),e=e.sibling}function za(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(za(e,t,n),e=e.sibling;e!==null;)za(e,t,n),e=e.sibling}var ge=null,Xe=!1;function At(e,t,n){for(n=n.child;n!==null;)Td(e,t,n),n=n.sibling}function Td(e,t,n){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(ti,n)}catch{}switch(n.tag){case 5:ke||In(n,t);case 6:var r=ge,o=Xe;ge=null,At(e,t,n),ge=r,Xe=o,ge!==null&&(Xe?(e=ge,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ge.removeChild(n.stateNode));break;case 18:ge!==null&&(Xe?(e=ge,n=n.stateNode,e.nodeType===8?zi(e.parentNode,n):e.nodeType===1&&zi(e,n),jr(e)):zi(ge,n.stateNode));break;case 4:r=ge,o=Xe,ge=n.stateNode.containerInfo,Xe=!0,At(e,t,n),ge=r,Xe=o;break;case 0:case 11:case 14:case 15:if(!ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&Pa(n,t,s),o=o.next}while(o!==r)}At(e,t,n);break;case 1:if(!ke&&(In(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ee(n,t,l)}At(e,t,n);break;case 21:At(e,t,n);break;case 22:n.mode&1?(ke=(r=ke)||n.memoizedState!==null,At(e,t,n),ke=r):At(e,t,n);break;default:At(e,t,n)}}function nu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new wf),t.forEach(function(r){var o=Ef.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Qe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:ge=l.stateNode,Xe=!1;break e;case 3:ge=l.stateNode.containerInfo,Xe=!0;break e;case 4:ge=l.stateNode.containerInfo,Xe=!0;break e}l=l.return}if(ge===null)throw Error(j(160));Td(i,s,o),ge=null,Xe=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(d){ee(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Id(t,e),t=t.sibling}function Id(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Qe(t,e),it(e),r&4){try{vr(3,e,e.return),ui(3,e)}catch(b){ee(e,e.return,b)}try{vr(5,e,e.return)}catch(b){ee(e,e.return,b)}}break;case 1:Qe(t,e),it(e),r&512&&n!==null&&In(n,n.return);break;case 5:if(Qe(t,e),it(e),r&512&&n!==null&&In(n,n.return),e.flags&32){var o=e.stateNode;try{kr(o,"")}catch(b){ee(e,e.return,b)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Xu(o,i),ua(l,s);var d=ua(l,i);for(s=0;s<u.length;s+=2){var p=u[s],f=u[s+1];p==="style"?oc(o,f):p==="dangerouslySetInnerHTML"?nc(o,f):p==="children"?kr(o,f):es(o,p,f,d)}switch(l){case"input":oa(o,i);break;case"textarea":ec(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?Nn(o,!!i.multiple,x,!1):m!==!!i.multiple&&(i.defaultValue!=null?Nn(o,!!i.multiple,i.defaultValue,!0):Nn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Ir]=i}catch(b){ee(e,e.return,b)}}break;case 6:if(Qe(t,e),it(e),r&4){if(e.stateNode===null)throw Error(j(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(b){ee(e,e.return,b)}}break;case 3:if(Qe(t,e),it(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{jr(t.containerInfo)}catch(b){ee(e,e.return,b)}break;case 4:Qe(t,e),it(e);break;case 13:Qe(t,e),it(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ns=ne())),r&4&&nu(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(ke=(d=ke)||p,Qe(t,e),ke=d):Qe(t,e),it(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!p&&e.mode&1)for(T=e,p=e.child;p!==null;){for(f=T=p;T!==null;){switch(m=T,x=m.child,m.tag){case 0:case 11:case 14:case 15:vr(4,m,m.return);break;case 1:In(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(b){ee(r,n,b)}}break;case 5:In(m,m.return);break;case 22:if(m.memoizedState!==null){ou(f);continue}}x!==null?(x.return=m,T=x):ou(f)}p=p.sibling}e:for(p=null,f=e;;){if(f.tag===5){if(p===null){p=f;try{o=f.stateNode,d?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=f.stateNode,u=f.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=rc("display",s))}catch(b){ee(e,e.return,b)}}}else if(f.tag===6){if(p===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(b){ee(e,e.return,b)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;p===f&&(p=null),f=f.return}p===f&&(p=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Qe(t,e),it(e),r&4&&nu(e);break;case 21:break;default:Qe(t,e),it(e)}}function it(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ed(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(kr(o,""),r.flags&=-33);var i=tu(e);za(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,l=tu(e);Ra(e,l,s);break;default:throw Error(j(161))}}catch(u){ee(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bf(e,t,n){T=e,Md(e)}function Md(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var o=T,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||lo;if(!s){var l=o.alternate,u=l!==null&&l.memoizedState!==null||ke;l=lo;var d=ke;if(lo=s,(ke=u)&&!d)for(T=o;T!==null;)s=T,u=s.child,s.tag===22&&s.memoizedState!==null?iu(o):u!==null?(u.return=s,T=u):iu(o);for(;i!==null;)T=i,Md(i),i=i.sibling;T=o,lo=l,ke=d}ru(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,T=i):ru(e)}}function ru(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ke||ui(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ke)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ze(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&$l(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}$l(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var f=p.dehydrated;f!==null&&jr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}ke||t.flags&512&&Fa(t)}catch(m){ee(t,t.return,m)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function ou(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function iu(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ui(4,t)}catch(u){ee(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){ee(t,o,u)}}var i=t.return;try{Fa(t)}catch(u){ee(t,i,u)}break;case 5:var s=t.return;try{Fa(t)}catch(u){ee(t,s,u)}}}catch(u){ee(t,t.return,u)}if(t===e){T=null;break}var l=t.sibling;if(l!==null){l.return=t.return,T=l;break}T=t.return}}var kf=Math.ceil,Uo=St.ReactCurrentDispatcher,Is=St.ReactCurrentOwner,Ve=St.ReactCurrentBatchConfig,z=0,de=null,oe=null,me=0,Le=0,Mn=Kt(0),se=0,Fr=null,cn=0,ci=0,Ms=0,wr=null,Ee=null,Ns=0,Hn=1/0,pt=null,Ho=!1,Da=null,$t=null,uo=!1,Lt=null,Vo=0,xr=0,$a=null,ko=-1,qo=0;function _e(){return z&6?ne():ko!==-1?ko:ko=ne()}function Bt(e){return e.mode&1?z&2&&me!==0?me&-me:of.transition!==null?(qo===0&&(qo=mc()),qo):(e=B,e!==0||(e=window.event,e=e===void 0?16:qc(e.type)),e):1}function nt(e,t,n,r){if(50<xr)throw xr=0,$a=null,Error(j(185));$r(e,n,r),(!(z&2)||e!==de)&&(e===de&&(!(z&2)&&(ci|=n),se===4&&Mt(e,me)),Ne(e,r),n===1&&z===0&&!(t.mode&1)&&(Hn=ne()+500,ai&&Qt()))}function Ne(e,t){var n=e.callbackNode;op(e,t);var r=Eo(e,e===de?me:0);if(r===0)n!==null&&fl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&fl(n),t===1)e.tag===0?rf(au.bind(null,e)):Bc(au.bind(null,e)),Xp(function(){!(z&6)&&Qt()}),n=null;else{switch(yc(r)){case 1:n=is;break;case 4:n=fc;break;case 16:n=Co;break;case 536870912:n=gc;break;default:n=Co}n=Dd(n,Nd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Nd(e,t){if(ko=-1,qo=0,z&6)throw Error(j(327));var n=e.callbackNode;if(Rn()&&e.callbackNode!==n)return null;var r=Eo(e,e===de?me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Go(e,r);else{t=r;var o=z;z|=2;var i=Od();(de!==e||me!==t)&&(pt=null,Hn=ne()+500,on(e,t));do try{_f();break}catch(l){Ld(e,l)}while(!0);vs(),Uo.current=i,z=o,oe!==null?t=0:(de=null,me=0,t=se)}if(t!==0){if(t===2&&(o=fa(e),o!==0&&(r=o,t=Ba(e,o))),t===1)throw n=Fr,on(e,0),Mt(e,r),Ne(e,ne()),n;if(t===6)Mt(e,r);else{if(o=e.current.alternate,!(r&30)&&!qf(o)&&(t=Go(e,r),t===2&&(i=fa(e),i!==0&&(r=i,t=Ba(e,i))),t===1))throw n=Fr,on(e,0),Mt(e,r),Ne(e,ne()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:Xt(e,Ee,pt);break;case 3:if(Mt(e,r),(r&130023424)===r&&(t=Ns+500-ne(),10<t)){if(Eo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){_e(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ka(Xt.bind(null,e,Ee,pt),t);break}Xt(e,Ee,pt);break;case 4:if(Mt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-tt(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*kf(r/1960))-r,10<r){e.timeoutHandle=ka(Xt.bind(null,e,Ee,pt),r);break}Xt(e,Ee,pt);break;case 5:Xt(e,Ee,pt);break;default:throw Error(j(329))}}}return Ne(e,ne()),e.callbackNode===n?Nd.bind(null,e):null}function Ba(e,t){var n=wr;return e.current.memoizedState.isDehydrated&&(on(e,t).flags|=256),e=Go(e,t),e!==2&&(t=Ee,Ee=n,t!==null&&Wa(t)),e}function Wa(e){Ee===null?Ee=e:Ee.push.apply(Ee,e)}function qf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!ot(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mt(e,t){for(t&=~Ms,t&=~ci,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-tt(t),r=1<<n;e[n]=-1,t&=~r}}function au(e){if(z&6)throw Error(j(327));Rn();var t=Eo(e,0);if(!(t&1))return Ne(e,ne()),null;var n=Go(e,t);if(e.tag!==0&&n===2){var r=fa(e);r!==0&&(t=r,n=Ba(e,r))}if(n===1)throw n=Fr,on(e,0),Mt(e,t),Ne(e,ne()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Xt(e,Ee,pt),Ne(e,ne()),null}function Ls(e,t){var n=z;z|=1;try{return e(t)}finally{z=n,z===0&&(Hn=ne()+500,ai&&Qt())}}function dn(e){Lt!==null&&Lt.tag===0&&!(z&6)&&Rn();var t=z;z|=1;var n=Ve.transition,r=B;try{if(Ve.transition=null,B=1,e)return e()}finally{B=r,Ve.transition=n,z=t,!(z&6)&&Qt()}}function Os(){Le=Mn.current,K(Mn)}function on(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Zp(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(gs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Lo();break;case 3:Wn(),K(Ie),K(qe),Ss();break;case 5:qs(r);break;case 4:Wn();break;case 13:K(J);break;case 19:K(J);break;case 10:ws(r.type._context);break;case 22:case 23:Os()}n=n.return}if(de=e,oe=e=Wt(e.current,null),me=Le=t,se=0,Fr=null,Ms=ci=cn=0,Ee=wr=null,nn!==null){for(t=0;t<nn.length;t++)if(n=nn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}nn=null}return e}function Ld(e,t){do{var n=oe;try{if(vs(),wo.current=Wo,Bo){for(var r=Y.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Bo=!1}if(un=0,ue=ie=Y=null,yr=!1,Lr=0,Is.current=null,n===null||n.return===null){se=1,Fr=t,oe=null;break}e:{var i=e,s=n.return,l=n,u=t;if(t=me,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,p=l,f=p.tag;if(!(p.mode&1)&&(f===0||f===11||f===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var x=Gl(s);if(x!==null){x.flags&=-257,Kl(x,s,l,i,t),x.mode&1&&Vl(i,d,t),t=x,u=d;var S=t.updateQueue;if(S===null){var b=new Set;b.add(u),t.updateQueue=b}else S.add(u);break e}else{if(!(t&1)){Vl(i,d,t),Ps();break e}u=Error(j(426))}}else if(Q&&l.mode&1){var _=Gl(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Kl(_,s,l,i,t),ms(Un(u,l));break e}}i=u=Un(u,l),se!==4&&(se=2),wr===null?wr=[i]:wr.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=yd(i,u,t);Dl(i,g);break e;case 1:l=u;var c=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&($t===null||!$t.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=vd(i,l,t);Dl(i,y);break e}}i=i.return}while(i!==null)}Fd(n)}catch(v){t=v,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(!0)}function Od(){var e=Uo.current;return Uo.current=Wo,e===null?Wo:e}function Ps(){(se===0||se===3||se===2)&&(se=4),de===null||!(cn&268435455)&&!(ci&268435455)||Mt(de,me)}function Go(e,t){var n=z;z|=2;var r=Od();(de!==e||me!==t)&&(pt=null,on(e,t));do try{Sf();break}catch(o){Ld(e,o)}while(!0);if(vs(),z=n,Uo.current=r,oe!==null)throw Error(j(261));return de=null,me=0,se}function Sf(){for(;oe!==null;)Pd(oe)}function _f(){for(;oe!==null&&!Qh();)Pd(oe)}function Pd(e){var t=zd(e.alternate,e,Le);e.memoizedProps=e.pendingProps,t===null?Fd(e):oe=t,Is.current=null}function Fd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=vf(n,t),n!==null){n.flags&=32767,oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,oe=null;return}}else if(n=yf(n,t,Le),n!==null){oe=n;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);se===0&&(se=5)}function Xt(e,t,n){var r=B,o=Ve.transition;try{Ve.transition=null,B=1,jf(e,t,n,r)}finally{Ve.transition=o,B=r}return null}function jf(e,t,n,r){do Rn();while(Lt!==null);if(z&6)throw Error(j(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(ip(e,i),e===de&&(oe=de=null,me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||uo||(uo=!0,Dd(Co,function(){return Rn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ve.transition,Ve.transition=null;var s=B;B=1;var l=z;z|=4,Is.current=null,xf(e,n),Id(n,e),Hp(xa),To=!!wa,xa=wa=null,e.current=n,bf(n),Jh(),z=l,B=s,Ve.transition=i}else e.current=n;if(uo&&(uo=!1,Lt=e,Vo=o),i=e.pendingLanes,i===0&&($t=null),Xh(n.stateNode),Ne(e,ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ho)throw Ho=!1,e=Da,Da=null,e;return Vo&1&&e.tag!==0&&Rn(),i=e.pendingLanes,i&1?e===$a?xr++:(xr=0,$a=e):xr=0,Qt(),null}function Rn(){if(Lt!==null){var e=yc(Vo),t=Ve.transition,n=B;try{if(Ve.transition=null,B=16>e?16:e,Lt===null)var r=!1;else{if(e=Lt,Lt=null,Vo=0,z&6)throw Error(j(331));var o=z;for(z|=4,T=e.current;T!==null;){var i=T,s=i.child;if(T.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(T=d;T!==null;){var p=T;switch(p.tag){case 0:case 11:case 15:vr(8,p,i)}var f=p.child;if(f!==null)f.return=p,T=f;else for(;T!==null;){p=T;var m=p.sibling,x=p.return;if(Cd(p),p===d){T=null;break}if(m!==null){m.return=x,T=m;break}T=x}}}var S=i.alternate;if(S!==null){var b=S.child;if(b!==null){S.child=null;do{var _=b.sibling;b.sibling=null,b=_}while(b!==null)}}T=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,T=s;else e:for(;T!==null;){if(i=T,i.flags&2048)switch(i.tag){case 0:case 11:case 15:vr(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,T=g;break e}T=i.return}}var c=e.current;for(T=c;T!==null;){s=T;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,T=h;else e:for(s=c;T!==null;){if(l=T,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ui(9,l)}}catch(v){ee(l,l.return,v)}if(l===s){T=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,T=y;break e}T=l.return}}if(z=o,Qt(),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(ti,e)}catch{}r=!0}return r}finally{B=n,Ve.transition=t}}return!1}function su(e,t,n){t=Un(n,t),t=yd(e,t,1),e=Dt(e,t,1),t=_e(),e!==null&&($r(e,1,t),Ne(e,t))}function ee(e,t,n){if(e.tag===3)su(e,e,n);else for(;t!==null;){if(t.tag===3){su(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($t===null||!$t.has(r))){e=Un(n,e),e=vd(t,e,1),t=Dt(t,e,1),e=_e(),t!==null&&($r(t,1,e),Ne(t,e));break}}t=t.return}}function Af(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=_e(),e.pingedLanes|=e.suspendedLanes&n,de===e&&(me&n)===n&&(se===4||se===3&&(me&130023424)===me&&500>ne()-Ns?on(e,0):Ms|=n),Ne(e,t)}function Rd(e,t){t===0&&(e.mode&1?(t=Xr,Xr<<=1,!(Xr&130023424)&&(Xr=4194304)):t=1);var n=_e();e=kt(e,t),e!==null&&($r(e,t,n),Ne(e,n))}function Cf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rd(e,n)}function Ef(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),Rd(e,n)}var zd;zd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ie.current)Te=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Te=!1,mf(e,t,n);Te=!!(e.flags&131072)}else Te=!1,Q&&t.flags&1048576&&Wc(t,Fo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;bo(e,t),e=t.pendingProps;var o=Dn(t,qe.current);Fn(t,n),o=js(null,t,r,e,o,n);var i=As();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Me(r)?(i=!0,Oo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,bs(t),o.updater=li,t.stateNode=o,o._reactInternals=t,Ea(t,r,e,n),t=Ma(null,t,r,!0,i,n)):(t.tag=0,Q&&i&&fs(t),Se(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(bo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=If(r),e=Ze(r,e),o){case 0:t=Ia(null,t,r,e,n);break e;case 1:t=Yl(null,t,r,e,n);break e;case 11:t=Ql(null,t,r,e,n);break e;case 14:t=Jl(null,t,r,Ze(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ze(r,o),Ia(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ze(r,o),Yl(e,t,r,o,n);case 3:e:{if(kd(t),e===null)throw Error(j(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Qc(e,t),Do(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Un(Error(j(423)),t),t=Zl(e,t,r,n,o);break e}else if(r!==o){o=Un(Error(j(424)),t),t=Zl(e,t,r,n,o);break e}else for(Oe=zt(t.stateNode.containerInfo.firstChild),Pe=t,Q=!0,et=null,n=Gc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($n(),r===o){t=qt(e,t,n);break e}Se(e,t,r,n)}t=t.child}return t;case 5:return Jc(t),e===null&&ja(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,ba(r,o)?s=null:i!==null&&ba(r,i)&&(t.flags|=32),bd(e,t),Se(e,t,s,n),t.child;case 6:return e===null&&ja(t),null;case 13:return qd(e,t,n);case 4:return ks(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Bn(t,null,r,n):Se(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ze(r,o),Ql(e,t,r,o,n);case 7:return Se(e,t,t.pendingProps,n),t.child;case 8:return Se(e,t,t.pendingProps.children,n),t.child;case 12:return Se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,H(Ro,r._currentValue),r._currentValue=s,i!==null)if(ot(i.value,s)){if(i.children===o.children&&!Ie.current){t=qt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){s=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=wt(-1,n&-n),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?u.next=u:(u.next=p.next,p.next=u),d.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Aa(i.return,n,t),l.lanes|=n;break}u=u.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(j(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Aa(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}Se(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Fn(t,n),o=Ge(o),r=r(o),t.flags|=1,Se(e,t,r,n),t.child;case 14:return r=t.type,o=Ze(r,t.pendingProps),o=Ze(r.type,o),Jl(e,t,r,o,n);case 15:return wd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ze(r,o),bo(e,t),t.tag=1,Me(r)?(e=!0,Oo(t)):e=!1,Fn(t,n),md(t,r,o),Ea(t,r,o,n),Ma(null,t,r,!0,e,n);case 19:return Sd(e,t,n);case 22:return xd(e,t,n)}throw Error(j(156,t.tag))};function Dd(e,t){return pc(e,t)}function Tf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function He(e,t,n,r){return new Tf(e,t,n,r)}function Fs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function If(e){if(typeof e=="function")return Fs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ns)return 11;if(e===rs)return 14}return 2}function Wt(e,t){var n=e.alternate;return n===null?(n=He(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function So(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")Fs(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case kn:return an(n.children,o,i,t);case ts:s=8,o|=8;break;case Xi:return e=He(12,n,t,o|2),e.elementType=Xi,e.lanes=i,e;case ea:return e=He(13,n,t,o),e.elementType=ea,e.lanes=i,e;case ta:return e=He(19,n,t,o),e.elementType=ta,e.lanes=i,e;case Ju:return di(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ku:s=10;break e;case Qu:s=9;break e;case ns:s=11;break e;case rs:s=14;break e;case Ct:s=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=He(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function an(e,t,n,r){return e=He(7,e,r,t),e.lanes=n,e}function di(e,t,n,r){return e=He(22,e,r,t),e.elementType=Ju,e.lanes=n,e.stateNode={isHidden:!1},e}function Gi(e,t,n){return e=He(6,e,null,t),e.lanes=n,e}function Ki(e,t,n){return t=He(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Mf(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ci(0),this.expirationTimes=Ci(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ci(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Rs(e,t,n,r,o,i,s,l,u){return e=new Mf(e,t,n,l,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=He(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bs(i),e}function Nf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function $d(e){if(!e)return Vt;e=e._reactInternals;e:{if(fn(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(Me(n))return $c(e,n,t)}return t}function Bd(e,t,n,r,o,i,s,l,u){return e=Rs(n,r,!0,e,o,i,s,l,u),e.context=$d(null),n=e.current,r=_e(),o=Bt(n),i=wt(r,o),i.callback=t??null,Dt(n,i,o),e.current.lanes=o,$r(e,o,r),Ne(e,r),e}function hi(e,t,n,r){var o=t.current,i=_e(),s=Bt(o);return n=$d(n),t.context===null?t.context=n:t.pendingContext=n,t=wt(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Dt(o,t,s),e!==null&&(nt(e,o,s,i),vo(e,o,s)),s}function Ko(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function lu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function zs(e,t){lu(e,t),(e=e.alternate)&&lu(e,t)}function Lf(){return null}var Wd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ds(e){this._internalRoot=e}pi.prototype.render=Ds.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));hi(e,t,null,null)};pi.prototype.unmount=Ds.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dn(function(){hi(null,e,null,null)}),t[bt]=null}};function pi(e){this._internalRoot=e}pi.prototype.unstable_scheduleHydration=function(e){if(e){var t=xc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<It.length&&t!==0&&t<It[n].priority;n++);It.splice(n,0,e),n===0&&kc(e)}};function $s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function fi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function uu(){}function Of(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var d=Ko(s);i.call(d)}}var s=Bd(t,r,e,0,null,!1,!1,"",uu);return e._reactRootContainer=s,e[bt]=s.current,Er(e.nodeType===8?e.parentNode:e),dn(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var d=Ko(u);l.call(d)}}var u=Rs(e,0,!1,null,null,!1,!1,"",uu);return e._reactRootContainer=u,e[bt]=u.current,Er(e.nodeType===8?e.parentNode:e),dn(function(){hi(t,u,n,r)}),u}function gi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var l=o;o=function(){var u=Ko(s);l.call(u)}}hi(t,s,e,o)}else s=Of(n,t,e,o,r);return Ko(s)}vc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=cr(t.pendingLanes);n!==0&&(as(t,n|1),Ne(t,ne()),!(z&6)&&(Hn=ne()+500,Qt()))}break;case 13:dn(function(){var r=kt(e,1);if(r!==null){var o=_e();nt(r,e,1,o)}}),zs(e,1)}};ss=function(e){if(e.tag===13){var t=kt(e,134217728);if(t!==null){var n=_e();nt(t,e,134217728,n)}zs(e,134217728)}};wc=function(e){if(e.tag===13){var t=Bt(e),n=kt(e,t);if(n!==null){var r=_e();nt(n,e,t,r)}zs(e,t)}};xc=function(){return B};bc=function(e,t){var n=B;try{return B=e,t()}finally{B=n}};da=function(e,t,n){switch(t){case"input":if(oa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ii(r);if(!o)throw Error(j(90));Zu(r),oa(r,o)}}}break;case"textarea":ec(e,n);break;case"select":t=n.value,t!=null&&Nn(e,!!n.multiple,t,!1)}};sc=Ls;lc=dn;var Pf={usingClientEntryPoint:!1,Events:[Wr,jn,ii,ic,ac,Ls]},ar={findFiberByHostInstance:tn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ff={bundleType:ar.bundleType,version:ar.version,rendererPackageName:ar.rendererPackageName,rendererConfig:ar.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:St.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=dc(e),e===null?null:e.stateNode},findFiberByHostInstance:ar.findFiberByHostInstance||Lf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var co=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!co.isDisabled&&co.supportsFiber)try{ti=co.inject(Ff),lt=co}catch{}}Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pf;Re.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$s(t))throw Error(j(200));return Nf(e,t,null,n)};Re.createRoot=function(e,t){if(!$s(e))throw Error(j(299));var n=!1,r="",o=Wd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Rs(e,1,!1,null,null,n,!1,r,o),e[bt]=t.current,Er(e.nodeType===8?e.parentNode:e),new Ds(t)};Re.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=dc(t),e=e===null?null:e.stateNode,e};Re.flushSync=function(e){return dn(e)};Re.hydrate=function(e,t,n){if(!fi(t))throw Error(j(200));return gi(null,e,t,!0,n)};Re.hydrateRoot=function(e,t,n){if(!$s(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=Wd;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Bd(t,null,e,1,n??null,o,!1,i,s),e[bt]=t.current,Er(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new pi(t)};Re.render=function(e,t,n){if(!fi(t))throw Error(j(200));return gi(null,e,t,!1,n)};Re.unmountComponentAtNode=function(e){if(!fi(e))throw Error(j(40));return e._reactRootContainer?(dn(function(){gi(null,null,e,!1,function(){e._reactRootContainer=null,e[bt]=null})}),!0):!1};Re.unstable_batchedUpdates=Ls;Re.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!fi(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return gi(e,t,n,!1,r)};Re.version="18.3.1-next-f1338f8080-20240426";function Ud(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ud)}catch(e){console.error(e)}}Ud(),Uu.exports=Re;var Rf=Uu.exports,cu=Rf;Yi.createRoot=cu.createRoot,Yi.hydrateRoot=cu.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rr(){return Rr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Rr.apply(this,arguments)}var Ot;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ot||(Ot={}));const du="popstate";function zf(e){e===void 0&&(e={});function t(o,i){let{pathname:s="/",search:l="",hash:u=""}=gn(o.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),Ua("",{pathname:s,search:l,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(o,i){let s=o.document.querySelector("base"),l="";if(s&&s.getAttribute("href")){let u=o.location.href,d=u.indexOf("#");l=d===-1?u:u.slice(0,d)}return l+"#"+(typeof i=="string"?i:Qo(i))}function r(o,i){mi(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return $f(t,n,r,e)}function re(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function mi(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Df(){return Math.random().toString(36).substr(2,8)}function hu(e,t){return{usr:e.state,key:e.key,idx:t}}function Ua(e,t,n,r){return n===void 0&&(n=null),Rr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?gn(t):t,{state:n,key:t&&t.key||r||Df()})}function Qo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function gn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function $f(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,s=o.history,l=Ot.Pop,u=null,d=p();d==null&&(d=0,s.replaceState(Rr({},s.state,{idx:d}),""));function p(){return(s.state||{idx:null}).idx}function f(){l=Ot.Pop;let _=p(),g=_==null?null:_-d;d=_,u&&u({action:l,location:b.location,delta:g})}function m(_,g){l=Ot.Push;let c=Ua(b.location,_,g);n&&n(c,_),d=p()+1;let h=hu(c,d),y=b.createHref(c);try{s.pushState(h,"",y)}catch(v){if(v instanceof DOMException&&v.name==="DataCloneError")throw v;o.location.assign(y)}i&&u&&u({action:l,location:b.location,delta:1})}function x(_,g){l=Ot.Replace;let c=Ua(b.location,_,g);n&&n(c,_),d=p();let h=hu(c,d),y=b.createHref(c);s.replaceState(h,"",y),i&&u&&u({action:l,location:b.location,delta:0})}function S(_){let g=o.location.origin!=="null"?o.location.origin:o.location.href,c=typeof _=="string"?_:Qo(_);return c=c.replace(/ $/,"%20"),re(g,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,g)}let b={get action(){return l},get location(){return e(o,s)},listen(_){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(du,f),u=_,()=>{o.removeEventListener(du,f),u=null}},createHref(_){return t(o,_)},createURL:S,encodeLocation(_){let g=S(_);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:m,replace:x,go(_){return s.go(_)}};return b}var pu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(pu||(pu={}));function Bf(e,t,n){return n===void 0&&(n="/"),Wf(e,t,n)}function Wf(e,t,n,r){let o=typeof t=="string"?gn(t):t,i=Bs(o.pathname||"/",n);if(i==null)return null;let s=Hd(e);Uf(s);let l=null;for(let u=0;l==null&&u<s.length;++u){let d=ng(i);l=Xf(s[u],d)}return l}function Hd(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,s,l)=>{let u={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};u.relativePath.startsWith("/")&&(re(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let d=Ut([r,u.relativePath]),p=n.concat(u);i.children&&i.children.length>0&&(re(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Hd(i.children,t,p,d)),!(i.path==null&&!i.index)&&t.push({path:d,score:Yf(d,i.index),routesMeta:p})};return e.forEach((i,s)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))o(i,s);else for(let u of Vd(i.path))o(i,s,u)}),t}function Vd(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let s=Vd(r.join("/")),l=[];return l.push(...s.map(u=>u===""?i:[i,u].join("/"))),o&&l.push(...s),l.map(u=>e.startsWith("/")&&u===""?"/":u)}function Uf(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Zf(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Hf=/^:[\w-]+$/,Vf=3,Gf=2,Kf=1,Qf=10,Jf=-2,fu=e=>e==="*";function Yf(e,t){let n=e.split("/"),r=n.length;return n.some(fu)&&(r+=Jf),t&&(r+=Gf),n.filter(o=>!fu(o)).reduce((o,i)=>o+(Hf.test(i)?Vf:i===""?Kf:Qf),r)}function Zf(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Xf(e,t,n){let{routesMeta:r}=e,o={},i="/",s=[];for(let l=0;l<r.length;++l){let u=r[l],d=l===r.length-1,p=i==="/"?t:t.slice(i.length)||"/",f=eg({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},p),m=u.route;if(!f)return null;Object.assign(o,f.params),s.push({params:o,pathname:Ut([i,f.pathname]),pathnameBase:sg(Ut([i,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(i=Ut([i,f.pathnameBase]))}return s}function eg(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=tg(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((d,p,f)=>{let{paramName:m,isOptional:x}=p;if(m==="*"){let b=l[f]||"";s=i.slice(0,i.length-b.length).replace(/(.)\/+$/,"$1")}const S=l[f];return x&&!S?d[m]=void 0:d[m]=(S||"").replace(/%2F/g,"/"),d},{}),pathname:i,pathnameBase:s,pattern:e}}function tg(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),mi(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function ng(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return mi(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Bs(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const rg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,og=e=>rg.test(e);function ig(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?gn(e):e,i;if(n)if(og(n))i=n;else{if(n.includes("//")){let s=n;n=n.replace(/\/\/+/g,"/"),mi(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?i=gu(n.substring(1),"/"):i=gu(n,t)}else i=t;return{pathname:i,search:lg(r),hash:ug(o)}}function gu(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Qi(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ag(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ws(e,t){let n=ag(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Us(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=gn(e):(o=Rr({},e),re(!o.pathname||!o.pathname.includes("?"),Qi("?","pathname","search",o)),re(!o.pathname||!o.pathname.includes("#"),Qi("#","pathname","hash",o)),re(!o.search||!o.search.includes("#"),Qi("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,l;if(s==null)l=n;else{let f=t.length-1;if(!r&&s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),f-=1;o.pathname=m.join("/")}l=f>=0?t[f]:"/"}let u=ig(o,l),d=s&&s!=="/"&&s.endsWith("/"),p=(i||s===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(d||p)&&(u.pathname+="/"),u}const Ut=e=>e.join("/").replace(/\/\/+/g,"/"),sg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),lg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ug=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function cg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Gd=["post","put","patch","delete"];new Set(Gd);const dg=["get",...Gd];new Set(dg);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zr(){return zr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zr.apply(this,arguments)}const Hs=q.createContext(null),hg=q.createContext(null),Jt=q.createContext(null),yi=q.createContext(null),_t=q.createContext({outlet:null,matches:[],isDataRoute:!1}),Kd=q.createContext(null);function pg(e,t){let{relative:n}=t===void 0?{}:t;Jn()||re(!1);let{basename:r,navigator:o}=q.useContext(Jt),{hash:i,pathname:s,search:l}=Jd(e,{relative:n}),u=s;return r!=="/"&&(u=s==="/"?r:Ut([r,s])),o.createHref({pathname:u,search:l,hash:i})}function Jn(){return q.useContext(yi)!=null}function mn(){return Jn()||re(!1),q.useContext(yi).location}function Qd(e){q.useContext(Jt).static||q.useLayoutEffect(e)}function Vs(){let{isDataRoute:e}=q.useContext(_t);return e?Ag():fg()}function fg(){Jn()||re(!1);let e=q.useContext(Hs),{basename:t,future:n,navigator:r}=q.useContext(Jt),{matches:o}=q.useContext(_t),{pathname:i}=mn(),s=JSON.stringify(Ws(o,n.v7_relativeSplatPath)),l=q.useRef(!1);return Qd(()=>{l.current=!0}),q.useCallback(function(d,p){if(p===void 0&&(p={}),!l.current)return;if(typeof d=="number"){r.go(d);return}let f=Us(d,JSON.parse(s),i,p.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Ut([t,f.pathname])),(p.replace?r.replace:r.push)(f,p.state,p)},[t,r,s,i,e])}function gg(){let{matches:e}=q.useContext(_t),t=e[e.length-1];return t?t.params:{}}function Jd(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=q.useContext(Jt),{matches:o}=q.useContext(_t),{pathname:i}=mn(),s=JSON.stringify(Ws(o,r.v7_relativeSplatPath));return q.useMemo(()=>Us(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function mg(e,t){return yg(e,t)}function yg(e,t,n,r){Jn()||re(!1);let{navigator:o}=q.useContext(Jt),{matches:i}=q.useContext(_t),s=i[i.length-1],l=s?s.params:{};s&&s.pathname;let u=s?s.pathnameBase:"/";s&&s.route;let d=mn(),p;if(t){var f;let _=typeof t=="string"?gn(t):t;u==="/"||(f=_.pathname)!=null&&f.startsWith(u)||re(!1),p=_}else p=d;let m=p.pathname||"/",x=m;if(u!=="/"){let _=u.replace(/^\//,"").split("/");x="/"+m.replace(/^\//,"").split("/").slice(_.length).join("/")}let S=Bf(e,{pathname:x}),b=kg(S&&S.map(_=>Object.assign({},_,{params:Object.assign({},l,_.params),pathname:Ut([u,o.encodeLocation?o.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?u:Ut([u,o.encodeLocation?o.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n,r);return t&&b?q.createElement(yi.Provider,{value:{location:zr({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Ot.Pop}},b):b}function vg(){let e=jg(),t=cg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return q.createElement(q.Fragment,null,q.createElement("h2",null,"Unexpected Application Error!"),q.createElement("h3",{style:{fontStyle:"italic"}},t),n?q.createElement("pre",{style:o},n):null,null)}const wg=q.createElement(vg,null);class xg extends q.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?q.createElement(_t.Provider,{value:this.props.routeContext},q.createElement(Kd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function bg(e){let{routeContext:t,match:n,children:r}=e,o=q.useContext(Hs);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),q.createElement(_t.Provider,{value:t},r)}function kg(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,l=(o=n)==null?void 0:o.errors;if(l!=null){let p=s.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);p>=0||re(!1),s=s.slice(0,Math.min(s.length,p+1))}let u=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<s.length;p++){let f=s[p];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(d=p),f.route.id){let{loaderData:m,errors:x}=n,S=f.route.loader&&m[f.route.id]===void 0&&(!x||x[f.route.id]===void 0);if(f.route.lazy||S){u=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((p,f,m)=>{let x,S=!1,b=null,_=null;n&&(x=l&&f.route.id?l[f.route.id]:void 0,b=f.route.errorElement||wg,u&&(d<0&&m===0?(Cg("route-fallback"),S=!0,_=null):d===m&&(S=!0,_=f.route.hydrateFallbackElement||null)));let g=t.concat(s.slice(0,m+1)),c=()=>{let h;return x?h=b:S?h=_:f.route.Component?h=q.createElement(f.route.Component,null):f.route.element?h=f.route.element:h=p,q.createElement(bg,{match:f,routeContext:{outlet:p,matches:g,isDataRoute:n!=null},children:h})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?q.createElement(xg,{location:n.location,revalidation:n.revalidation,component:b,error:x,children:c(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):c()},null)}var Yd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Yd||{}),Zd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Zd||{});function qg(e){let t=q.useContext(Hs);return t||re(!1),t}function Sg(e){let t=q.useContext(hg);return t||re(!1),t}function _g(e){let t=q.useContext(_t);return t||re(!1),t}function Xd(e){let t=_g(),n=t.matches[t.matches.length-1];return n.route.id||re(!1),n.route.id}function jg(){var e;let t=q.useContext(Kd),n=Sg(),r=Xd();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Ag(){let{router:e}=qg(Yd.UseNavigateStable),t=Xd(Zd.UseNavigateStable),n=q.useRef(!1);return Qd(()=>{n.current=!0}),q.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,zr({fromRouteId:t},i)))},[e,t])}const mu={};function Cg(e,t,n){mu[e]||(mu[e]=!0)}function Eg(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Tg(e){let{to:t,replace:n,state:r,relative:o}=e;Jn()||re(!1);let{future:i,static:s}=q.useContext(Jt),{matches:l}=q.useContext(_t),{pathname:u}=mn(),d=Vs(),p=Us(t,Ws(l,i.v7_relativeSplatPath),u,o==="path"),f=JSON.stringify(p);return q.useEffect(()=>d(JSON.parse(f),{replace:n,state:r,relative:o}),[d,f,o,n,r]),null}function en(e){re(!1)}function Ig(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Ot.Pop,navigator:i,static:s=!1,future:l}=e;Jn()&&re(!1);let u=t.replace(/^\/*/,"/"),d=q.useMemo(()=>({basename:u,navigator:i,static:s,future:zr({v7_relativeSplatPath:!1},l)}),[u,l,i,s]);typeof r=="string"&&(r=gn(r));let{pathname:p="/",search:f="",hash:m="",state:x=null,key:S="default"}=r,b=q.useMemo(()=>{let _=Bs(p,u);return _==null?null:{location:{pathname:_,search:f,hash:m,state:x,key:S},navigationType:o}},[u,p,f,m,x,S,o]);return b==null?null:q.createElement(Jt.Provider,{value:d},q.createElement(yi.Provider,{children:n,value:b}))}function Mg(e){let{children:t,location:n}=e;return mg(Ha(t),n)}new Promise(()=>{});function Ha(e,t){t===void 0&&(t=[]);let n=[];return q.Children.forEach(e,(r,o)=>{if(!q.isValidElement(r))return;let i=[...t,o];if(r.type===q.Fragment){n.push.apply(n,Ha(r.props.children,i));return}r.type!==en&&re(!1),!r.props.index||!r.props.children||re(!1);let s={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Ha(r.props.children,i)),n.push(s)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Va(){return Va=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Va.apply(this,arguments)}function Ng(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Lg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Og(e,t){return e.button===0&&(!t||t==="_self")&&!Lg(e)}const Pg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Fg="6";try{window.__reactRouterVersion=Fg}catch{}const Rg="startTransition",yu=jh[Rg];function zg(e){let{basename:t,children:n,future:r,window:o}=e,i=q.useRef();i.current==null&&(i.current=zf({window:o,v5Compat:!0}));let s=i.current,[l,u]=q.useState({action:s.action,location:s.location}),{v7_startTransition:d}=r||{},p=q.useCallback(f=>{d&&yu?yu(()=>u(f)):u(f)},[u,d]);return q.useLayoutEffect(()=>s.listen(p),[s,p]),q.useEffect(()=>Eg(r),[r]),q.createElement(Ig,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}const Dg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",$g=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,rt=q.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:s,state:l,target:u,to:d,preventScrollReset:p,viewTransition:f}=t,m=Ng(t,Pg),{basename:x}=q.useContext(Jt),S,b=!1;if(typeof d=="string"&&$g.test(d)&&(S=d,Dg))try{let h=new URL(window.location.href),y=d.startsWith("//")?new URL(h.protocol+d):new URL(d),v=Bs(y.pathname,x);y.origin===h.origin&&v!=null?d=v+y.search+y.hash:b=!0}catch{}let _=pg(d,{relative:o}),g=Bg(d,{replace:s,state:l,target:u,preventScrollReset:p,relative:o,viewTransition:f});function c(h){r&&r(h),h.defaultPrevented||g(h)}return q.createElement("a",Va({},m,{href:S||_,onClick:b||i?r:c,ref:n,target:u}))});var vu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(vu||(vu={}));var wu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(wu||(wu={}));function Bg(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:s,viewTransition:l}=t===void 0?{}:t,u=Vs(),d=mn(),p=Jd(e,{relative:s});return q.useCallback(f=>{if(Og(f,n)){f.preventDefault();let m=r!==void 0?r:Qo(d)===Qo(p);u(e,{replace:m,state:o,preventScrollReset:i,relative:s,viewTransition:l})}},[d,u,p,r,o,n,e,i,s,l])}/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Wg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=(e,t)=>{const n=q.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:u,...d},p)=>q.createElement("svg",{ref:p,...Wg,width:o,height:o,stroke:r,strokeWidth:s?Number(i)*24/Number(o):i,className:["lucide",`lucide-${Ug(e)}`,l].join(" "),...d},[...t.map(([f,m])=>q.createElement(f,m)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=De("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=De("FlaskConical",[["path",{d:"M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2",key:"pzvekw"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M7 16h10",key:"wp8him"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=De("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=De("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=De("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=De("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=De("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=De("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=De("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=De("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=De("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=De("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=De("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Gs="M50 12 C56 24 56 34 50 44 C44 34 44 24 50 12 Z",rm="M50 28 C54 35 54 41 50 46 C46 41 46 35 50 28 Z",xu=e=>e*Math.PI/180,Ks=(e,t)=>[50+e*Math.cos(xu(t)),50+e*Math.sin(xu(t))];function om(){return a.jsxs(a.Fragment,{children:[a.jsx("circle",{cx:"50",cy:"50",r:"47.5",strokeOpacity:"0.22",strokeWidth:"0.6",strokeDasharray:"2 3"}),a.jsx("circle",{cx:"50",cy:"50",r:"40",strokeOpacity:"0.45",strokeWidth:"0.7"}),Array.from({length:8},(e,t)=>a.jsx("path",{d:Gs,transform:`rotate(${t*45} 50 50)`,strokeOpacity:"0.85"},`o${t}`)),Array.from({length:8},(e,t)=>{const[n,r]=Ks(33,t*45+22.5);return a.jsx("circle",{cx:n,cy:r,r:"1.3",fill:"currentColor",stroke:"none",fillOpacity:"0.55"},`d${t}`)}),Array.from({length:8},(e,t)=>a.jsx("path",{d:rm,transform:`rotate(${t*45+22.5} 50 50)`,strokeOpacity:"0.7"},`i${t}`)),a.jsx("circle",{cx:"50",cy:"50",r:"8",strokeOpacity:"0.85"}),a.jsx("circle",{cx:"50",cy:"50",r:"3",fill:"currentColor",stroke:"none",fillOpacity:"0.8"})]})}function im(){return a.jsxs(a.Fragment,{children:[a.jsx("rect",{x:"10",y:"10",width:"80",height:"80",strokeOpacity:"0.25",strokeWidth:"0.7",strokeDasharray:"3 3"}),Array.from({length:4},(e,t)=>a.jsx("path",{d:Gs,transform:`rotate(${t*90} 50 50)`,strokeOpacity:"0.85"},`q${t}`)),Array.from({length:4},(e,t)=>{const[n,r]=Ks(33,t*90+45);return a.jsx("path",{d:"M0 -4.5 L4.5 0 0 4.5 -4.5 0 Z",transform:`translate(${n} ${r})`,strokeOpacity:"0.6"},`s${t}`)}),a.jsx("circle",{cx:"50",cy:"50",r:"7",strokeOpacity:"0.85"}),a.jsx("circle",{cx:"50",cy:"50",r:"2.5",fill:"currentColor",stroke:"none",fillOpacity:"0.8"})]})}function am(){return a.jsxs(a.Fragment,{children:[a.jsx("circle",{cx:"50",cy:"50",r:"47.5",strokeOpacity:"0.22",strokeWidth:"0.6",strokeDasharray:"2 3"}),a.jsx("circle",{cx:"50",cy:"50",r:"41",strokeOpacity:"0.5",strokeWidth:"0.7"}),Array.from({length:12},(e,t)=>a.jsx("path",{d:Gs,transform:`rotate(${t*30} 50 50)`,strokeOpacity:"0.8"},`r${t}`)),a.jsx("circle",{cx:"50",cy:"50",r:"22",strokeOpacity:"0.6"}),a.jsx("circle",{cx:"50",cy:"50",r:"8",strokeOpacity:"0.8"}),a.jsx("circle",{cx:"50",cy:"50",r:"2.5",fill:"currentColor",stroke:"none",fillOpacity:"0.75"})]})}function sm(){const e=Array.from({length:6},(t,n)=>Ks(27,-90+n*60));return a.jsxs(a.Fragment,{children:[a.jsx("circle",{cx:"50",cy:"50",r:"46",strokeOpacity:"0.5",strokeWidth:"0.8"}),a.jsx("circle",{cx:"50",cy:"50",r:"47.5",strokeOpacity:"0.2",strokeWidth:"0.6",strokeDasharray:"2 3"}),e.map((t,n)=>{const r=e[(n+2)%6];return a.jsx("line",{x1:t[0],y1:t[1],x2:r[0],y2:r[1],strokeOpacity:"0.85"},`a${n}`)}),a.jsx("circle",{cx:"50",cy:"50",r:"6",strokeOpacity:"0.7"})]})}function Jo({variant:e="rosette",className:t="",spin:n=!1}){return a.jsx("svg",{viewBox:"0 0 100 100","aria-hidden":!0,className:`${n?"rosette-spin ":""}${t}`,children:a.jsx("g",{fill:"none",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round",children:e==="quad"?a.jsx(im,{}):e==="ring"?a.jsx(am,{}):e==="aperture"?a.jsx(sm,{}):a.jsx(om,{})})})}var th={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},bu=vt.createContext&&vt.createContext(th),lm=["attr","size","title"];function um(e,t){if(e==null)return{};var n=cm(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function cm(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Yo(){return Yo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yo.apply(this,arguments)}function ku(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Zo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ku(Object(n),!0).forEach(function(r){dm(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ku(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function dm(e,t,n){return t=hm(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function hm(e){var t=pm(e,"string");return typeof t=="symbol"?t:t+""}function pm(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function nh(e){return e&&e.map((t,n)=>vt.createElement(t.tag,Zo({key:n},t.attr),nh(t.child)))}function Qs(e){return t=>vt.createElement(fm,Yo({attr:Zo({},e.attr)},t),nh(e.child))}function fm(e){var t=n=>{var{attr:r,size:o,title:i}=e,s=um(e,lm),l=o||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),vt.createElement("svg",Yo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:u,style:Zo(Zo({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),i&&vt.createElement("title",null,i),e.children)};return bu!==void 0?vt.createElement(bu.Consumer,null,n=>t(n)):t(th)}function gm(e){return Qs({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"},child:[]}]})(e)}function mm(e){return Qs({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function ym(e){return Qs({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M564.7 230.1V803h60l25.2 71.4L756.3 803h131.5V230.1H564.7zm247.7 497h-59.9l-75.1 50.4-17.8-50.4h-18V308.3h170.7v418.8zM526.1 486.9H393.3c2.1-44.9 4.3-104.3 6.6-172.9h130.9l-.1-8.1c0-.6-.2-14.7-2.3-29.1-2.1-15-6.6-34.9-21-34.9H287.8c4.4-20.6 15.7-69.7 29.4-93.8l6.4-11.2-12.9-.7c-.8 0-19.6-.9-41.4 10.6-35.7 19-51.7 56.4-58.7 84.4-18.4 73.1-44.6 123.9-55.7 145.6-3.3 6.4-5.3 10.2-6.2 12.8-1.8 4.9-.8 9.8 2.8 13 10.5 9.5 38.2-2.9 38.5-3 .6-.3 1.3-.6 2.2-1 13.9-6.3 55.1-25 69.8-84.5h56.7c.7 32.2 3.1 138.4 2.9 172.9h-141l-2.1 1.5c-23.1 16.9-30.5 63.2-30.8 65.2l-1.4 9.2h167c-12.3 78.3-26.5 113.4-34 127.4-3.7 7-7.3 14-10.7 20.8-21.3 42.2-43.4 85.8-126.3 153.6-3.6 2.8-7 8-4.8 13.7 2.4 6.3 9.3 9.1 24.6 9.1 5.4 0 11.8-.3 19.4-1 49.9-4.4 100.8-18 135.1-87.6 17-35.1 31.7-71.7 43.9-108.9L497 850l5-12c.8-1.9 19-46.3 5.1-95.9l-.5-1.8-108.1-123-22 16.6c6.4-26.1 10.6-49.9 12.5-71.1h158.7v-8c0-40.1-18.5-63.9-19.2-64.9l-2.4-3z"},child:[]}]})(e)}const vm="/assets/avatar-edinburgh-Cx24FfGO.jpg",Be={name:"Levi Wang",headline:{en:"Levi Wang",zh:"Levi Wang"},status:{en:"Founding engineer @ HUMANLAYA AI",zh:"HUMANLAYA AI 创始工程师"},description:{en:"AI algorithm & infra engineer and project manager: focused on building high-quality training and evaluation data, designing data-synthesis algorithms around an Expert-in-the-Loop philosophy, and building enterprise AI infrastructure — evaluation, data-synthesis, and data-delivery platforms. Off the clock: photography, cycling, and trekking.",zh:"AI 算法 & Infra 工程师 & 项目经理：主攻高质量训练与评测数据构建，以 Expert-in-Loop 为理念设计数据合成算法，同时负责企业 AI Infra 设施搭建，包括评测平台、数据合成平台、数据交付平台等；闲暇时间热爱摄影、骑行与徒步。"},bio:{en:"AI algorithm engineer working on evaluation science, synthetic/RL data, and agentic systems, with the infrastructure background to run them at scale. Founding engineer @ HUMANLAYA AI; previously @ Fintopia, ByteDance (Doubao VLM evals), and PwC.",zh:"AI 算法工程师，方向为评测科学、合成/RL 数据与智能体系统，也有把它们跑在生产规模上的基础设施功底。现任 HUMANLAYA AI 创始工程师；此前在 Fintopia、字节跳动（豆包 VLM 评测）与普华永道。"},location:{en:"Beijing, China",zh:"中国 · 北京"},resumeEmail:"wang.z.levi@gmail.com",startDate:"2026-01-01",avatar:vm,social:[{name:"GitHub",url:"https://github.com/levizwang",icon:mm,size:20},{name:"LinkedIn",url:"https://www.linkedin.com/in/levizwang",icon:Jg,size:20},{name:"X",url:"https://x.com/Levi2Crypto",icon:gm,size:16},{name:"Zhihu",url:"https://www.zhihu.com/people/levi.eth",icon:ym,size:20},{name:"Email",url:"mailto:wang.z.levi@gmail.com",icon:Yg,size:20}],nav:[{name:{en:"Home",zh:"首页"},path:"/"},{name:{en:"Projects",zh:"项目"},path:"/projects"},{name:{en:"Writing",zh:"文章"},path:"/posts"},{name:{en:"Optics",zh:"光影"},path:"/optics"}]};function wm(e,t){return t==null?"":typeof t=="string"?t:t[e]}const rh=q.createContext({lang:"en",setLang:()=>{},toggle:()=>{}});function xm(){var e;try{const t=new URLSearchParams(window.location.search).get("lang");if(t==="en"||t==="zh")return t;const n=localStorage.getItem("lang");if(n==="en"||n==="zh")return n}catch{}return typeof navigator<"u"&&((e=navigator.language)!=null&&e.toLowerCase().startsWith("zh"))?"zh":"en"}function bm({children:e}){const[t,n]=q.useState(xm);q.useEffect(()=>{try{localStorage.setItem("lang",t)}catch{}document.documentElement.lang=t==="zh"?"zh-CN":"en"},[t]);const r=()=>n(o=>o==="en"?"zh":"en");return a.jsx(rh.Provider,{value:{lang:t,setLang:n,toggle:r},children:e})}function Hr(){return q.useContext(rh)}function he(){const{lang:e}=Hr();return t=>wm(e,t)}function Js(e,t){return e[t]??{en:t,zh:t}}const P={viewWork:{en:"Selected work",zh:"精选项目"},readWriting:{en:"Read writing",zh:"阅读文章"},readDeepDive:{en:"Read the deep dive",zh:"阅读深度文章"},atScale:{en:"At scale",zh:"规模"},atScaleTitle:{en:"Evaluation science and synthetic-data algorithms, run at production scale.",zh:"评测科学与合成数据算法，跑在生产规模上。"},buildEyebrow:{en:"What I build",zh:"我做什么"},buildTitle:{en:"Four problems I keep coming back to.",zh:"长期投入的四类问题。"},expEyebrow:{en:"Career",zh:"履历"},workEyebrow:{en:"Work",zh:"项目"},writingEyebrow:{en:"Writing",zh:"文章"},eduEyebrow:{en:"Background",zh:"背景"},experience:{en:"Experience",zh:"工作经历"},experienceSub:{en:"Evaluation science · synthetic data · agents.",zh:"评测科学 · 合成数据 · Agent"},selectedWork:{en:"Selected Work",zh:"精选项目"},viewAllProjects:{en:"View All Projects",zh:"查看全部项目"},writing:{en:"Writing",zh:"文章"},viewAllArticles:{en:"View All Articles",zh:"查看全部文章"},noArticles:{en:"No matching articles",zh:"没有符合条件的文章"},education:{en:"Education",zh:"教育经历"},skillsInterests:{en:"Skills & Interests",zh:"技能与兴趣"},beyondWork:{en:"Beyond Work",zh:"工作之外"},runningFor:{en:"Running for",zh:"已运行"},days:{en:"days",zh:"天"},projectsTitle:{en:"Projects",zh:"项目"},opticsTitle:{en:"Optics",zh:"光影"},opticsSub:{en:"Capturing light in the Dark Forest. 35mm & Digital.",zh:"在黑暗森林中捕捉光。35mm 与数码。"},articleNotFound:{en:"Article Not Found",zh:"文章未找到"},toc:{en:"Contents",zh:"目录"},tocEmpty:{en:"No headings",zh:"暂无目录"},loadMore:{en:"Load More",zh:"加载更多"},closeLightbox:{en:"Close",zh:"关闭"},techSpecs:{en:"Technical Specifications",zh:"技术参数"},story:{en:"The Story",zh:"拍摄手记"},camera:{en:"Camera",zh:"机身"},lens:{en:"Lens",zh:"镜头"},iso:{en:"ISO",zh:"ISO"},aperture:{en:"Aperture",zh:"光圈"},shutter:{en:"Shutter",zh:"快门"}},oh={"AI Evaluation":{en:"AI Evaluation",zh:"AI 评测"},Web3:{en:"Web3",zh:"Web3"}},km={All:{en:"All",zh:"全部"},Street:{en:"Street",zh:"街拍"},Urban:{en:"Urban",zh:"城市"},Nature:{en:"Nature",zh:"自然"}},qu=["rosette","quad","ring","aperture"];function qm(){const{lang:e,toggle:t}=Hr(),n=he(),{pathname:r}=mn(),[o,i]=q.useState(!1),[s,l]=q.useState(!1),[u,d]=q.useState(()=>typeof window<"u"&&document.documentElement.classList.contains("dark"));q.useEffect(()=>{const m=()=>l(window.scrollY>12);return m(),window.addEventListener("scroll",m,{passive:!0}),()=>window.removeEventListener("scroll",m)},[]),q.useEffect(()=>{document.documentElement.classList.toggle("dark",u);try{localStorage.setItem("theme",u?"dark":"light")}catch{}},[u]),q.useEffect(()=>i(!1),[r]);const p=m=>m==="/"?r==="/":r.startsWith(m),f="inline-flex h-9 items-center justify-center border border-line bg-surface/70 text-muted-foreground backdrop-blur transition-colors hover:text-foreground hover:border-foreground/50";return a.jsxs("header",{className:"fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3",children:[a.jsxs("div",{className:`flex w-full max-w-content items-center justify-between px-3 py-2 pl-5 transition-all duration-300 ${s||o?"glass border border-line shadow-soft":"border border-transparent"}`,children:[a.jsxs(rt,{to:"/",className:"flex items-baseline gap-2.5",children:[a.jsx("span",{className:"text-[15px] font-semibold tracking-tight",children:"Levi Wang"}),a.jsx("span",{className:"hidden font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground md:inline",children:"Field Notes 001"})]}),a.jsxs("div",{className:"flex items-center gap-1.5",children:[a.jsx("nav",{className:"mr-1 hidden items-center gap-0.5 sm:flex",children:Be.nav.map((m,x)=>a.jsxs(rt,{to:m.path,className:`inline-flex items-center px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors ${p(m.path)?"text-foreground":"text-muted-foreground hover:text-foreground"}`,children:[a.jsx(Jo,{variant:qu[x],className:"mr-1.5 h-4 w-4"}),n(m.name)]},m.path))}),a.jsxs("button",{type:"button","aria-label":e==="en"?"切换到中文":"Switch to English",onClick:t,className:`${f} gap-1 px-2.5 font-mono text-xs font-medium`,children:[a.jsx(Kg,{className:"h-3.5 w-3.5"}),e==="en"?"中":"EN"]}),a.jsx("button",{type:"button","aria-label":u?"Light mode":"Dark mode",onClick:()=>d(m=>!m),className:`${f} w-9`,children:u?a.jsx(tm,{className:"h-4 w-4"}):a.jsx(em,{className:"h-4 w-4"})}),a.jsx("button",{type:"button","aria-label":"Menu",onClick:()=>i(m=>!m),className:`${f} w-9 sm:hidden`,children:o?a.jsx(eh,{className:"h-4 w-4"}):a.jsx(Xg,{className:"h-4 w-4"})})]})]}),o&&a.jsx("div",{className:"glass absolute inset-x-4 top-[4.5rem] border border-line p-2 shadow-float sm:hidden",children:Be.nav.map((m,x)=>a.jsxs(rt,{to:m.path,className:`flex items-center px-4 py-3 font-mono text-[13px] uppercase tracking-[0.12em] ${p(m.path)?"bg-secondary text-foreground":"text-muted-foreground"}`,children:[a.jsx(Jo,{variant:qu[x],className:"mr-2.5 h-4 w-4"}),n(m.name)]},m.path))})]})}const Sm="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";function _m(e){const[t,n]=q.useState(!1),r=()=>{n(!0)},{src:o,alt:i,className:s,...l}=e;return t?a.jsx("div",{className:`inline-block bg-gray-100 text-center align-middle ${s??""}`,children:a.jsx("div",{className:"flex items-center justify-center w-full h-full",children:a.jsx("img",{src:Sm,alt:"Error loading image",...l,"data-original-url":o})})}):a.jsx("img",{src:o,alt:i,className:s,...l,onError:r})}function ih({className:e=""}){return a.jsx("div",{className:`flex items-center gap-5 ${e}`,children:Be.social.map(t=>a.jsx("a",{href:t.url,target:"_blank",rel:"noopener noreferrer","aria-label":t.name,className:"text-muted-foreground transition-colors hover:text-foreground",children:a.jsx(t.icon,{size:t.size})},t.name))})}function ho({className:e}){return a.jsx("svg",{"aria-hidden":!0,viewBox:"0 0 12 12",className:`pointer-events-none absolute z-10 h-3 w-3 text-foreground/45 ${e}`,children:a.jsx("path",{d:"M6 0.5V11.5M0.5 6H11.5",stroke:"currentColor",strokeWidth:"1"})})}function Xo({className:e="",marks:t=!0,children:n}){return a.jsxs("div",{className:`relative ${e}`,children:[t&&a.jsxs(a.Fragment,{children:[a.jsx(ho,{className:"-left-2 -top-2"}),a.jsx(ho,{className:"-right-2 -top-2"}),a.jsx(ho,{className:"-bottom-2 -left-2"}),a.jsx(ho,{className:"-bottom-2 -right-2"})]}),a.jsx("div",{className:"surface h-full overflow-hidden",children:n})]})}function Vn({left:e,right:t}){return a.jsxs("div",{className:"strip",children:[a.jsx("span",{className:"truncate",children:e}),t!=null&&a.jsx("span",{className:"shrink-0 text-right",children:t})]})}const R="SF Mono, JetBrains Mono, ui-monospace, Menlo, monospace";function jm(e){let t=e>>>0;return()=>{t|=0,t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function ah({x:e,y:t,text:n}){return a.jsxs("g",{stroke:"currentColor",fill:"none",children:[a.jsx("text",{x:e,y:t,fontFamily:R,fontSize:"11",letterSpacing:"2",fill:"currentColor",stroke:"none",fillOpacity:"0.85",children:n}),a.jsx("path",{d:`M${e},${t+6}H${e+n.length*8.6}`,strokeOpacity:"0.6",strokeWidth:"1"})]})}function sh({x:e,y:t,deg:n,opacity:r=.85}){return a.jsx("path",{d:"M0,0 L-7,3 L-7,-3 Z",fill:"currentColor",stroke:"none",fillOpacity:r,transform:`translate(${e},${t}) rotate(${n})`})}function Tt({x1:e,y1:t,x2:n,y2:r,dashed:o=!1,opacity:i=.8}){const s=Math.atan2(r-t,n-e)*180/Math.PI,l=Math.hypot(n-e,r-t),u=(l-6)/l,d=e+(n-e)*u,p=t+(r-t)*u;return a.jsxs("g",{stroke:"currentColor",fill:"none",strokeOpacity:i,children:[a.jsx("path",{d:`M${e},${t}L${d},${p}`,strokeWidth:"1",strokeDasharray:o?"4 4":void 0}),a.jsx(sh,{x:n,y:r,deg:s,opacity:i})]})}const Am=[["SUBJECT:","LLM-JUDGED BENCHMARK"],["MEDIUM:","134 LEGAL ITEMS"],["UNITS:","SCORE 0–1"],["ANALYST:","L. WANG"],["REV:","A1"],["FILE:","EB01"]];function Cm(){return a.jsxs("g",{stroke:"currentColor",fill:"none",children:[a.jsx("rect",{x:856,y:26,width:318,height:138,className:"fill-surface",strokeOpacity:"0.7",strokeWidth:"1"}),Am.map(([e,t],n)=>a.jsxs("g",{children:[a.jsx("text",{x:868,y:50+n*20.5,fontFamily:R,fontSize:"10.5",fill:"currentColor",stroke:"none",fillOpacity:"0.6",children:e}),a.jsx("text",{x:1e3,y:50+n*20.5,fontFamily:R,fontSize:"10.5",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.9",children:t})]},e))]})}function Em(){return a.jsxs("g",{stroke:"currentColor",fill:"none",children:[a.jsx("text",{x:28,y:130,fontFamily:R,fontSize:"10",letterSpacing:"2",fill:"currentColor",stroke:"none",fillOpacity:"0.85",children:"NOTES"}),a.jsx("path",{d:"M28,136H76",strokeOpacity:"0.6",strokeWidth:"1"}),["** 132 / 134 ITEMS TRACK RUBRIC HITS","** 2 ITEMS ZEROED BY JUDGE MISREAD","** SEE FATAL-ZERO CALLOUT, LOWER RIGHT"].map((e,t)=>a.jsx("text",{x:28,y:156+t*16,fontFamily:R,fontSize:"8.5",letterSpacing:"0.5",fill:"currentColor",stroke:"none",fillOpacity:"0.7",children:e},e))]})}const N={x0:320,y0:480,w:480,h:360},Ye=e=>N.x0+e*N.w,pe=e=>N.y0-e*N.h;function Tm(){const e=jm(134),t=[];for(let n=0;n<132;n++){const r=.05+.9*((e()+e())/2),o=Math.min(.985,Math.max(.03,r+(e()+e()-1)*.15));t.push({x:Ye(r),y:pe(o),o:.35+e()*.35})}return a.jsx("g",{fill:"currentColor",stroke:"none",children:t.map((n,r)=>a.jsx("circle",{cx:n.x.toFixed(1),cy:n.y.toFixed(1),r:"1.8",fillOpacity:n.o.toFixed(2)},r))})}function Im(){const e=[[.91,.04],[.93,.02]];return a.jsxs("g",{stroke:"currentColor",fill:"none",children:[[.2,.4,.6,.8].map(t=>a.jsx("path",{d:`M${Ye(t)},${N.y0}V${N.y0-N.h}M${N.x0},${pe(t)}H${N.x0+N.w}`,strokeOpacity:"0.14",strokeWidth:"0.7",strokeDasharray:"2 4"},`g${t}`)),a.jsx("rect",{x:N.x0,y:pe(.7),width:N.w,height:pe(.5)-pe(.7),fill:"url(#ff-band)",stroke:"none"}),a.jsx("path",{d:`M${N.x0},${pe(.5)}H${N.x0+N.w}M${N.x0},${pe(.7)}H${N.x0+N.w}`,strokeOpacity:"0.5",strokeWidth:"1",strokeDasharray:"4 4"}),a.jsx("text",{x:N.x0+8,y:pe(.7)-8,fontFamily:R,fontSize:"8",letterSpacing:"1.5",fill:"currentColor",stroke:"none",fillOpacity:"0.7",children:"ACCEPTANCE BAND 0.5–0.7"}),a.jsx("path",{d:`M${N.x0},${N.y0}L${N.x0+N.w},${N.y0-N.h}`,strokeOpacity:"0.5",strokeWidth:"1",strokeDasharray:"5 5"}),a.jsx("text",{x:0,y:0,textAnchor:"middle",fontFamily:R,fontSize:"8.5",letterSpacing:"1.5",fill:"currentColor",stroke:"none",fillOpacity:"0.65",transform:"translate(553,287) rotate(-36.87)",children:"EXPECTED AGREEMENT"}),a.jsx(Tm,{}),a.jsx("path",{d:`M${Ye(.648)-10},${pe(.648)}H${Ye(.648)+10}M${Ye(.648)},${pe(.648)-10}V${pe(.648)+10}`,strokeOpacity:"0.9",strokeWidth:"1.2"}),a.jsx("circle",{cx:Ye(.648),cy:pe(.648),r:"2.2",fill:"currentColor",stroke:"none",fillOpacity:"0.9"}),a.jsx("text",{x:Ye(.648)+14,y:pe(.648)+18,fontFamily:R,fontSize:"8.5",letterSpacing:"1.5",fill:"currentColor",stroke:"none",fillOpacity:"0.85",children:"FINAL MEAN 0.648"}),e.map(([t,n])=>a.jsxs("g",{children:[a.jsx("circle",{cx:Ye(t),cy:pe(n),r:"6.5",strokeOpacity:"0.9",strokeWidth:"1"}),a.jsx("text",{x:Ye(t),y:pe(n)+3.5,textAnchor:"middle",fontFamily:R,fontSize:"9",fill:"currentColor",stroke:"none",fillOpacity:"0.9",children:"✗"})]},t)),a.jsx("path",{d:"M749,461 L586,429",strokeOpacity:"0.55",strokeWidth:"0.7"}),a.jsx("circle",{cx:749,cy:461,r:"1.6",fill:"currentColor",stroke:"none",fillOpacity:"0.7"}),a.jsx("text",{x:340,y:420,fontFamily:R,fontSize:"8.5",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.85",children:"FATAL ZERO ×2 —"}),a.jsx("text",{x:340,y:433,fontFamily:R,fontSize:"8.5",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.85",children:"IN-MATERIAL CITATION MISREAD AS LEAKAGE"}),a.jsx("path",{d:`M${N.x0},${N.y0}H${N.x0+N.w}M${N.x0},${N.y0}V${N.y0-N.h}`,strokeOpacity:"0.85",strokeWidth:"1.2"}),[0,.2,.4,.6,.8,1].map(t=>a.jsxs("g",{children:[a.jsx("path",{d:`M${Ye(t)},${N.y0}V${N.y0+5}`,strokeOpacity:"0.7",strokeWidth:"1"}),a.jsx("path",{d:`M${N.x0-5},${pe(t)}H${N.x0}`,strokeOpacity:"0.7",strokeWidth:"1"}),a.jsx("text",{x:Ye(t),y:N.y0+16,textAnchor:"middle",fontFamily:R,fontSize:"8.5",fill:"currentColor",stroke:"none",fillOpacity:"0.65",children:t.toFixed(1)}),a.jsx("text",{x:N.x0-9,y:pe(t)+3,textAnchor:"end",fontFamily:R,fontSize:"8.5",fill:"currentColor",stroke:"none",fillOpacity:"0.65",children:t.toFixed(1)})]},`a${t}`)),a.jsx("text",{x:N.x0+N.w/2,y:N.y0+34,textAnchor:"middle",fontFamily:R,fontSize:"9",letterSpacing:"2",fill:"currentColor",stroke:"none",fillOpacity:"0.75",children:"RUBRIC POSITIVE-HIT RATE"}),a.jsx("text",{x:284,y:N.y0-N.h/2,textAnchor:"middle",fontFamily:R,fontSize:"9",letterSpacing:"2",fill:"currentColor",stroke:"none",fillOpacity:"0.75",transform:`rotate(-90 284 ${N.y0-N.h/2})`,children:"JUDGE SCORE"})]})}const te={x0:860,x1:1160,base:300,top:215},Je=e=>te.base-(e-.4)*((te.base-te.top)/.5),Yt=[{x:890,v:.821,label:"ROUND 0"},{x:1010,v:.73,label:"ROUND 1"},{x:1130,v:.648,label:"ROUND 2"}];function Mm(){return a.jsxs("g",{stroke:"currentColor",fill:"none",children:[a.jsx(ah,{x:840,y:200,text:"REWORK TRAJECTORY"}),a.jsx("path",{d:`M${te.x0},${Je(.5)}H${te.x1}M${te.x0},${Je(.7)}H${te.x1}`,strokeOpacity:"0.5",strokeWidth:"1",strokeDasharray:"4 4"}),a.jsx("text",{x:te.x0+2,y:Je(.7)-4,fontFamily:R,fontSize:"7",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.6",children:"ACCEPTANCE BAND"}),a.jsx("text",{x:te.x0-4,y:Je(.5)+3,textAnchor:"end",fontFamily:R,fontSize:"7",fill:"currentColor",stroke:"none",fillOpacity:"0.55",children:"0.5"}),a.jsx("text",{x:te.x0-4,y:Je(.7)+3,textAnchor:"end",fontFamily:R,fontSize:"7",fill:"currentColor",stroke:"none",fillOpacity:"0.55",children:"0.7"}),a.jsx("path",{d:`M${te.x0},${te.base}H${te.x1}M${te.x0},${te.base}V${te.top}`,strokeOpacity:"0.85",strokeWidth:"1.2"}),a.jsx("path",{d:`M${Yt[0].x},${Je(Yt[0].v)} L${Yt[1].x},${Je(Yt[1].v)} L${Yt[2].x},${Je(Yt[2].v)}`,strokeOpacity:"0.9",strokeWidth:"1.4"}),Yt.map((e,t)=>a.jsxs("g",{children:[a.jsx("circle",{cx:e.x,cy:Je(e.v),r:"3",fill:"currentColor",stroke:"none",fillOpacity:"0.9"}),a.jsx("path",{d:`M${e.x},${te.base}V${te.base+4}`,strokeOpacity:"0.7",strokeWidth:"1"}),a.jsx("text",{x:e.x,y:te.base+14,textAnchor:"middle",fontFamily:R,fontSize:"7.5",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.65",children:e.label}),a.jsx("text",{x:e.x,y:t===2?Je(e.v)+14:Je(e.v)-9,textAnchor:"middle",fontFamily:R,fontSize:"8.5",fill:"currentColor",stroke:"none",fillOpacity:"0.85",children:e.v.toFixed(3)})]},e.label)),a.jsx(Tt,{x1:1150,y1:232,x2:1150,y2:254,opacity:.7}),a.jsx(Tt,{x1:868,y1:254,x2:868,y2:232,opacity:.7}),a.jsx("text",{x:te.x0,y:330,fontFamily:R,fontSize:"8.5",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.75",children:"▼ −0.139 REWORK / ROUND"}),a.jsx("text",{x:te.x0,y:346,fontFamily:R,fontSize:"8.5",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.75",children:"▲ +0.159 EFFORT (CONTROL)"})]})}const Nm=[{x:850,y:420,label:"READ"},{x:930,y:420,label:"QUOTE"},{x:1010,y:420,label:"CALC"},{x:1090,y:420,label:"FINAL"},{x:950,y:466,label:"REASON"},{x:850,y:466,label:"HURDLE",gate:!0}];function Lm(){return a.jsxs("g",{stroke:"currentColor",fill:"none",children:[a.jsx(ah,{x:840,y:395,text:"RUBRIC DAG — PROCESS-AWARE"}),Nm.map(e=>a.jsxs("g",{children:[a.jsx("rect",{x:e.x,y:e.y,width:60,height:20,className:"fill-surface",strokeOpacity:"0.8",strokeWidth:"1"}),e.gate&&a.jsx("rect",{x:e.x+2.5,y:e.y+2.5,width:55,height:15,strokeOpacity:"0.55",strokeWidth:"0.8"}),a.jsx("text",{x:e.x+30,y:e.y+13.5,textAnchor:"middle",fontFamily:R,fontSize:"7",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.9",children:e.label})]},e.label)),a.jsx(Tt,{x1:912,y1:430,x2:928,y2:430}),a.jsx(Tt,{x1:992,y1:430,x2:1008,y2:430}),a.jsx(Tt,{x1:1072,y1:430,x2:1088,y2:430}),a.jsx(Tt,{x1:962,y1:442,x2:968,y2:464}),a.jsx(Tt,{x1:1012,y1:470,x2:1098,y2:444}),a.jsx(Tt,{x1:880,y1:442,x2:880,y2:464}),a.jsx("path",{d:"M880,486 V502",strokeOpacity:"0.6",strokeWidth:"1",strokeDasharray:"4 4"}),a.jsx("text",{x:880,y:514,textAnchor:"middle",fontFamily:R,fontSize:"9",fill:"currentColor",stroke:"none",fillOpacity:"0.8",children:"✗"}),a.jsx("text",{x:892,y:514,fontFamily:R,fontSize:"7",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.7",children:"FAIL"}),a.jsx("text",{x:918,y:530,fontFamily:R,fontSize:"7",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.6",children:"HURDLE — MUST PASS"})]})}const Om=[{sym:"dots",label:"BENCHMARK ITEM (N=134)"},{sym:"text",symText:"⊗",label:"FATAL ZERO (JUDGE DEFECT)"},{sym:"dash",label:"ACCEPTANCE BAND 0.5–0.7"},{sym:"arrow",label:"REWORK TRAJECTORY"},{sym:"text",symText:"▲",label:"CONTROL-GROUP CONFOUND"}];function Pm(){return a.jsxs("g",{stroke:"currentColor",fill:"none",children:[a.jsx("rect",{x:28,y:350,width:252,height:150,className:"fill-surface",strokeOpacity:"0.7",strokeWidth:"1"}),a.jsx("text",{x:40,y:370,fontFamily:R,fontSize:"10",letterSpacing:"2",fill:"currentColor",stroke:"none",fillOpacity:"0.85",children:"LEGEND"}),a.jsx("path",{d:"M40,376H104",strokeOpacity:"0.6",strokeWidth:"1"}),Om.map((r,o)=>{const i=394+o*17;return a.jsxs("g",{children:[r.sym==="dots"&&a.jsx("g",{fill:"currentColor",fillOpacity:"0.6",stroke:"none",children:[0,1,2,3,4,5,6,7].map(s=>a.jsx("circle",{cx:42+s*5.4,cy:i-3-s%2*2,r:"1"},s))}),r.sym==="text"&&a.jsx("text",{x:40,y:i,fontFamily:R,fontSize:"10",fill:"currentColor",stroke:"none",fillOpacity:"0.8",children:r.symText}),r.sym==="dash"&&a.jsx("path",{d:`M40,${i-3}H80`,strokeOpacity:"0.6",strokeWidth:"1",strokeDasharray:"4 4"}),r.sym==="arrow"&&a.jsxs("g",{children:[a.jsx("path",{d:`M40,${i-3}H73`,strokeOpacity:"0.8",strokeWidth:"1"}),a.jsx(sh,{x:80,y:i-3,deg:0,opacity:.8})]}),a.jsx("text",{x:92,y:i,fontFamily:R,fontSize:"8.5",letterSpacing:"0.5",fill:"currentColor",stroke:"none",fillOpacity:"0.75",children:r.label})]},r.label)})]})}function Fm(){const e=[];for(let t=N.x0;t<=N.x0+N.w;t+=24){const n=(t-N.x0)%96===0;e.push(a.jsx("path",{d:`M${t},550V${n?540:545}`,strokeOpacity:n?.6:.35,strokeWidth:"1"},t))}return a.jsxs("g",{stroke:"currentColor",fill:"none",children:[e,[0,.2,.4,.6,.8,1].map((t,n)=>a.jsx("text",{x:N.x0+n*96,y:534,textAnchor:"middle",fontFamily:R,fontSize:"8.5",fill:"currentColor",stroke:"none",fillOpacity:"0.65",children:t.toFixed(1)},t)),a.jsx("text",{x:N.x0+N.w+12,y:534,fontFamily:R,fontSize:"8.5",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.65",children:"SCORE"})]})}function Rm({className:e=""}){return a.jsxs("svg",{"aria-hidden":!0,viewBox:"0 0 1200 560",className:`block h-auto w-full text-foreground ${e}`,preserveAspectRatio:"xMidYMid meet",children:[a.jsxs("defs",{children:[a.jsx("pattern",{id:"fs-grid",width:"40",height:"40",patternUnits:"userSpaceOnUse",children:a.jsx("path",{d:"M0 0.5H40M0.5 0V40",fill:"none",stroke:"currentColor",strokeOpacity:"0.14",strokeDasharray:"2 4",strokeWidth:"0.7"})}),a.jsx("pattern",{id:"ff-band",width:"9",height:"9",patternUnits:"userSpaceOnUse",children:a.jsx("circle",{cx:"4.5",cy:"4.5",r:"1",fill:"currentColor",fillOpacity:"0.12"})})]}),a.jsx("rect",{x:"11",y:"11",width:"1178",height:"538",fill:"url(#fs-grid)"}),a.jsxs("g",{fill:"currentColor",stroke:"none",children:[a.jsx("text",{x:30,y:58,fontFamily:R,fontSize:"25",fontWeight:"600",letterSpacing:"6",fillOpacity:"0.9",children:"FIELD STUDY 01"}),a.jsx("text",{x:30,y:80,fontFamily:R,fontSize:"11.5",letterSpacing:"3",fillOpacity:"0.65",children:"JUDGE AUDIT & DIFFICULTY CALIBRATION 001"})]}),a.jsx(Cm,{}),a.jsx(Em,{}),a.jsx(Im,{}),a.jsx(Mm,{}),a.jsx(Lm,{}),a.jsx(Pm,{}),a.jsx(Fm,{}),a.jsx("rect",{x:"10",y:"10",width:"1180",height:"540",fill:"none",stroke:"currentColor",strokeOpacity:"0.8",strokeWidth:"1.4"})]})}const Su=["0","20","40","60","80","100","120","140","mm"];function zm({className:e=""}){return a.jsx("div",{"aria-hidden":!0,className:`ruler ${e}`,children:Su.map((t,n)=>a.jsx("span",{style:{left:`${n/(Su.length-1)*100}%`},children:t},t))})}function Dm(){const e=he(),t=e(Be.headline),n=new RegExp("\\p{Script=Han}","u").test(t);return a.jsxs("section",{className:"relative z-10 mx-auto max-w-content px-6 pt-10 md:pt-16",children:[a.jsxs("div",{className:"reveal is-visible flex items-end justify-between gap-4",children:[a.jsxs("p",{className:"eyebrow",children:["Field Study 01 — ",e({en:"Evaluation Science",zh:"评测科学"})]}),a.jsx("p",{className:"hidden font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:block",children:"File: LW01 · Rev A1"})]}),a.jsx(zm,{className:"mt-3"}),a.jsxs("div",{className:"mt-10 grid items-center gap-12 md:grid-cols-[1.35fr_1fr] md:gap-16",children:[a.jsxs("div",{className:"reveal is-visible",children:[a.jsxs("a",{href:"https://www.linkedin.com/in/levizwang",target:"_blank",rel:"noopener noreferrer",className:"group inline-flex items-center gap-2 border border-line bg-surface/70 py-1.5 pl-2 pr-3 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground backdrop-blur transition-colors hover:text-foreground",children:[a.jsxs("span",{className:"relative flex h-2 w-2",children:[a.jsx("span",{className:"absolute inline-flex h-full w-full animate-ping bg-brand opacity-60"}),a.jsx("span",{className:"relative inline-flex h-2 w-2 bg-brand"})]}),e(Be.status),a.jsx("span",{className:"translate-x-0 text-muted-foreground/60 transition-transform group-hover:translate-x-0.5",children:"↗"})]}),a.jsx("h1",{className:`mt-7 font-semibold text-balance ${n?"leading-[1.15] tracking-tightest text-[2.15rem] sm:text-5xl md:text-[3.8rem]":"font-mono leading-[1.18] tracking-tight text-[1.65rem] sm:text-4xl md:text-[2.7rem]"}`,children:t.split(`
`).map((r,o)=>a.jsx("span",{className:"block",children:r},o))}),a.jsx("p",{className:"mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground",children:e(Be.description)}),a.jsxs("div",{className:"mt-9 flex flex-wrap items-center gap-3",children:[a.jsxs(rt,{to:"/projects",className:"inline-flex items-center gap-2 border border-foreground bg-foreground px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-background transition-colors hover:bg-background hover:text-foreground",children:[e(P.viewWork),a.jsx("span",{"aria-hidden":!0,children:"→"})]}),a.jsx(rt,{to:"/posts",className:"inline-flex items-center gap-2 border border-line px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-foreground transition-colors hover:border-foreground/60",children:e(P.readWriting)})]}),a.jsx(ih,{className:"mt-9"})]}),a.jsxs("div",{className:"reveal reveal-delay-120 is-visible order-first md:order-none",children:[a.jsxs(Xo,{className:"mx-auto w-48 sm:w-64 md:ml-auto md:mr-0 md:w-full md:max-w-[280px]",children:[a.jsx(Vn,{left:"Subject: Levi Wang",right:"No. 001"}),a.jsxs("div",{className:"relative",children:[a.jsx(_m,{src:Be.avatar,alt:Be.name,className:"h-auto w-full grayscale-[0.25] brightness-[1.06] contrast-[1.02]"}),a.jsx("div",{"aria-hidden":!0,className:"absolute inset-0 bg-brand/10 mix-blend-multiply dark:mix-blend-screen"})]}),a.jsxs("div",{className:"strip border-b-0 border-t",children:[a.jsx("span",{className:"truncate",children:e(Be.location)}),a.jsx("span",{className:"shrink-0",children:"Scale 1:1"})]})]}),a.jsx("p",{className:"mt-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground md:text-right",children:Be.resumeEmail})]})]}),a.jsx("div",{className:"reveal is-visible mt-14",children:a.jsxs(Xo,{children:[a.jsx(Vn,{left:"Fig. 01 — Evaluation Science",right:"Units: score"}),a.jsx(Rm,{})]})})]})}function ae({children:e,delay:t=0,className:n="",as:r="div"}){const o=q.useRef(null),[i,s]=q.useState(!1);q.useEffect(()=>{const d=o.current;if(!d)return;if(typeof IntersectionObserver>"u"){s(!0);return}const p=new IntersectionObserver(f=>{for(const m of f)m.isIntersecting&&(s(!0),p.unobserve(m.target))},{rootMargin:"0px 0px -10% 0px",threshold:.08});return p.observe(d),()=>p.disconnect()},[]);const l=r,u=t?`reveal-delay-${t}`:"";return a.jsx(l,{ref:o,className:`reveal ${u} ${i?"is-visible":""} ${n}`,children:e})}const M="SF Mono, JetBrains Mono, ui-monospace, Menlo, monospace";function Ys(e){let t=e>>>0;return()=>{t|=0,t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function $m(e){if(e.length<=10||!e.includes(" "))return[e];const t=e.split(" ");let n=1,r=1/0;for(let o=1;o<t.length;o++){const i=t.slice(0,o).join(" ").length,s=t.slice(o).join(" ").length,l=Math.abs(i-s);l<r&&(r=l,n=o)}return[t.slice(0,n).join(" "),t.slice(n).join(" ")]}function ct({text:e,x:t=30,y:n=34}){return a.jsxs("g",{stroke:"currentColor",fill:"none",children:[a.jsx("text",{x:t,y:n,fontFamily:M,fontSize:"12",letterSpacing:"2",fill:"currentColor",stroke:"none",fillOpacity:"0.85",children:e}),a.jsx("path",{d:`M${t},${n+7}H${t+e.length*9.4}`,strokeOpacity:"0.6",strokeWidth:"1"})]})}function hn({x:e,y:t,deg:n,opacity:r=.85}){return a.jsx("path",{d:"M0,0 L-7,3 L-7,-3 Z",fill:"currentColor",stroke:"none",fillOpacity:r,transform:`translate(${e},${t}) rotate(${n})`})}function be({x1:e,y1:t,x2:n,y2:r,dashed:o=!1,opacity:i=.8}){const s=Math.atan2(r-t,n-e)*180/Math.PI,l=Math.hypot(n-e,r-t),u=(l-6)/l,d=e+(n-e)*u,p=t+(r-t)*u;return a.jsxs("g",{stroke:"currentColor",fill:"none",strokeOpacity:i,children:[a.jsx("path",{d:`M${e},${t}L${d},${p}`,strokeWidth:"1",strokeDasharray:o?"4 4":void 0}),a.jsx(hn,{x:n,y:r,deg:s,opacity:i})]})}function ce({x:e,y:t,w:n,h:r,label:o,sub:i,double:s=!1,fontSize:l=9}){const u=$m(o),d=u.length*11+(i?10:0),p=t+r/2-d/2+8;return a.jsxs("g",{stroke:"currentColor",fill:"none",children:[a.jsx("rect",{x:e,y:t,width:n,height:r,className:"fill-surface",strokeOpacity:"0.8",strokeWidth:"1.1"}),s&&a.jsx("rect",{x:e+3,y:t+3,width:n-6,height:r-6,strokeOpacity:"0.55",strokeWidth:"0.8"}),u.map((f,m)=>a.jsx("text",{x:e+n/2,y:p+m*11,textAnchor:"middle",fontFamily:M,fontSize:l,letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.9",children:f},f)),i&&a.jsx("text",{x:e+n/2,y:p+u.length*11+1,textAnchor:"middle",fontFamily:M,fontSize:"7",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.6",children:i})]})}const G={x0:90,x1:690,base:228,top:64},fe=e=>G.x0+e*(G.x1-G.x0);function Bm(){const e=Ys(134648),t=new Map,n=[];for(let r=0;r<134;r++){const o=(e()+e()+e()+e()-2)/2,i=Math.min(.985,Math.max(.03,.66+o*.17)),s=Math.round(fe(i)/9),l=t.get(s)??0;t.set(s,l+1),n.push({x:s*9+(e()-.5)*4,y:G.base-5-l*6.2,o:.45+e()*.4})}return a.jsx("g",{fill:"currentColor",stroke:"none",children:n.map((r,o)=>a.jsx("circle",{cx:r.x.toFixed(1),cy:r.y.toFixed(1),r:"1.9",fillOpacity:r.o.toFixed(2)},o))})}function Wm({className:e=""}){return a.jsxs("svg",{"aria-hidden":!0,viewBox:"0 0 800 300",className:`block h-auto w-full text-foreground ${e}`,preserveAspectRatio:"xMidYMid meet",children:[a.jsx("defs",{children:a.jsx("pattern",{id:"figdist-dots",width:"9",height:"9",patternUnits:"userSpaceOnUse",children:a.jsx("circle",{cx:"4.5",cy:"4.5",r:"1",fill:"currentColor",fillOpacity:"0.16"})})}),a.jsxs("g",{stroke:"currentColor",fill:"none",children:[a.jsx(ct,{text:"DIFFICULTY DISTRIBUTION — 134-TASK LEGAL BENCHMARK"}),a.jsx("rect",{x:fe(.5),y:G.top,width:fe(.7)-fe(.5),height:G.base-G.top,fill:"url(#figdist-dots)",stroke:"none"}),a.jsx("path",{d:`M${fe(.5)},${G.top}V${G.base}M${fe(.7)},${G.top}V${G.base}`,strokeOpacity:"0.55",strokeWidth:"1",strokeDasharray:"4 4"}),a.jsx("text",{x:(fe(.5)+fe(.7))/2,y:G.top-8,textAnchor:"middle",fontFamily:M,fontSize:"9",letterSpacing:"1.5",fill:"currentColor",stroke:"none",fillOpacity:"0.75",children:"ACCEPTANCE BAND 0.5–0.7"}),a.jsx("path",{d:`M${fe(.648)},${G.top}V${G.base}`,strokeOpacity:"0.9",strokeWidth:"1.4"}),a.jsx("text",{x:fe(.648)-6,y:120,textAnchor:"middle",fontFamily:M,fontSize:"8.5",letterSpacing:"1.5",fill:"currentColor",stroke:"none",fillOpacity:"0.85",transform:`rotate(-90 ${fe(.648)-6} 120)`,children:"FINAL MEAN 0.648"}),a.jsx("path",{d:`M${fe(.648)},${G.base} l-4,7 h8 Z`,fill:"currentColor",stroke:"none",fillOpacity:"0.85"}),a.jsx(Bm,{}),a.jsx("circle",{cx:fe(.821),cy:"60",r:"3.5",fill:"currentColor",stroke:"none",fillOpacity:"0.9"}),a.jsx("text",{x:fe(.821)+10,y:56,fontFamily:M,fontSize:"9",letterSpacing:"1.5",fill:"currentColor",stroke:"none",fillOpacity:"0.85",children:"INITIAL MEAN 0.821"}),a.jsx("path",{d:`M${fe(.821)-7},67 C556,86 534,92 514,96`,strokeOpacity:"0.8",strokeWidth:"1"}),a.jsx(hn,{x:514,y:96,deg:169}),a.jsx("text",{x:544,y:116,textAnchor:"middle",fontFamily:M,fontSize:"8.5",letterSpacing:"1.5",fill:"currentColor",stroke:"none",fillOpacity:"0.7",children:"2 REWORK ROUNDS"}),a.jsx("path",{d:`M${G.x0},${G.base}H${G.x1}`,strokeOpacity:"0.9",strokeWidth:"1.2"}),Array.from({length:11},(t,n)=>n).map(t=>a.jsx("path",{d:`M${fe(t/10)},${G.base}V${G.base+(t%2===0?7:4)}`,strokeOpacity:"0.7",strokeWidth:"1"},t)),[0,.2,.4,.6,.8,1].map(t=>a.jsx("text",{x:fe(t),y:G.base+20,textAnchor:"middle",fontFamily:M,fontSize:"8.5",fill:"currentColor",stroke:"none",fillOpacity:"0.65",children:t.toFixed(1)},t)),a.jsx("text",{x:(G.x0+G.x1)/2,y:G.base+40,textAnchor:"middle",fontFamily:M,fontSize:"9",letterSpacing:"2",fill:"currentColor",stroke:"none",fillOpacity:"0.75",children:"SOLVER SCORE"}),a.jsx("text",{x:775,y:G.base+40,textAnchor:"end",fontFamily:M,fontSize:"8.5",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.6",children:"EFFORT CONFOUND +0.159 / REWORK −0.139 PER ROUND"})]})]})}const D={x0:120,x1:680,y:150},le=e=>D.x0+e*(D.x1-D.x0);function Um({className:e=""}){return a.jsxs("svg",{"aria-hidden":!0,viewBox:"0 0 800 300",className:`block h-auto w-full text-foreground ${e}`,preserveAspectRatio:"xMidYMid meet",children:[a.jsx("defs",{children:a.jsx("pattern",{id:"figcal-hatch",width:"7",height:"7",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:a.jsx("path",{d:"M0,0V7",stroke:"currentColor",strokeOpacity:"0.16",strokeWidth:"1.6",fill:"none"})})}),a.jsxs("g",{stroke:"currentColor",fill:"none",children:[a.jsx(ct,{text:"DIFFICULTY CALIBRATION"}),a.jsx("rect",{x:le(.5),y:D.y-32,width:le(.7)-le(.5),height:"64",fill:"url(#figcal-hatch)",stroke:"none"}),a.jsx("path",{d:`M${le(.5)},${D.y-38}V${D.y+38}M${le(.7)},${D.y-38}V${D.y+38}`,strokeOpacity:"0.55",strokeWidth:"1",strokeDasharray:"4 4"}),a.jsx("text",{x:(le(.5)+le(.7))/2,y:D.y-46,textAnchor:"middle",fontFamily:M,fontSize:"9",letterSpacing:"1.5",fill:"currentColor",stroke:"none",fillOpacity:"0.75",children:"ACCEPTANCE BAND 0.5–0.7"}),a.jsx("path",{d:`M${D.x0},${D.y}H${D.x1-6}`,strokeOpacity:"0.9",strokeWidth:"1.2"}),a.jsx(hn,{x:D.x1,y:D.y,deg:0,opacity:.9}),Array.from({length:11},(t,n)=>n).map(t=>a.jsx("path",{d:`M${le(t/10)},${D.y}V${D.y+(t%2===0?7:4)}`,strokeOpacity:"0.7",strokeWidth:"1"},t)),[0,.2,.4,.6,.8,1].map(t=>a.jsx("text",{x:le(t),y:D.y+20,textAnchor:"middle",fontFamily:M,fontSize:"8.5",fill:"currentColor",stroke:"none",fillOpacity:"0.65",children:t.toFixed(1)},t)),a.jsx("text",{x:(D.x0+D.x1)/2,y:D.y+42,textAnchor:"middle",fontFamily:M,fontSize:"9",letterSpacing:"2",fill:"currentColor",stroke:"none",fillOpacity:"0.75",children:"SOLVER SCORE"}),a.jsx("path",{d:`M${le(.821)-8},${D.y-10} L${le(.73)},${D.y-52} L${le(.665)},${D.y-10}`,strokeOpacity:"0.85",strokeWidth:"1.2"}),a.jsx(hn,{x:le(.665),y:D.y-10,deg:131}),a.jsx("text",{x:le(.745),y:D.y-60,textAnchor:"middle",fontFamily:M,fontSize:"8.5",letterSpacing:"1.5",fill:"currentColor",stroke:"none",fillOpacity:"0.75",children:"2 REWORK ROUNDS"}),a.jsx("circle",{cx:le(.821),cy:D.y,r:"5",fill:"currentColor",stroke:"none",fillOpacity:"0.9"}),a.jsx("text",{x:le(.821)+12,y:D.y-12,fontFamily:M,fontSize:"8.5",letterSpacing:"1.5",fill:"currentColor",stroke:"none",fillOpacity:"0.85",children:"START 0.821"}),a.jsx("circle",{cx:le(.648),cy:D.y,r:"5",fill:"currentColor",stroke:"none",fillOpacity:"0.9"}),a.jsx("text",{x:le(.648),y:D.y+58,textAnchor:"middle",fontFamily:M,fontSize:"8.5",letterSpacing:"1.5",fill:"currentColor",stroke:"none",fillOpacity:"0.85",children:"FINAL 0.648"}),a.jsx("text",{x:D.x0,y:246,fontFamily:M,fontSize:"8.5",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.65",children:"CONTROL: EFFORT +0.159"}),a.jsx("text",{x:D.x1,y:246,textAnchor:"end",fontFamily:M,fontSize:"8.5",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.65",children:"REWORK EFFECT −0.139/ROUND"})]})]})}function _u({steps:e=["SOURCE FILES","EVIDENCE LEDGER","DRAFT","CRITIQUE","VERIFY","PACKAGE"],gates:t=["QUOTE GATE","CROSS-MODEL","LEAK CHECK","ANTI-GUESS"],className:n=""}){const u=(748-(e.length-1)*26)/e.length,d=p=>36+p*(u+26);return a.jsx("svg",{"aria-hidden":!0,viewBox:"0 0 800 300",className:`block h-auto w-full text-foreground ${n}`,preserveAspectRatio:"xMidYMid meet",children:a.jsxs("g",{stroke:"currentColor",fill:"none",children:[a.jsx(ct,{text:"SYNTHESIS PIPELINE"}),[0,1,2].map(p=>a.jsx("rect",{x:44+p*5,y:92-p*5,width:"26",height:"16",className:"fill-surface",strokeOpacity:"0.75",strokeWidth:"0.9"},p)),a.jsx("path",{d:"M74,82 l6,6",strokeOpacity:"0.6",strokeWidth:"0.8"}),a.jsx("path",{d:"M58,88 h12 M58,92 h9",strokeOpacity:"0.45",strokeWidth:"0.8"}),e.map((p,f)=>a.jsx(ce,{x:d(f),y:118,w:u,h:44,label:p},`${p}-${f}`)),e.slice(0,-1).map((p,f)=>a.jsxs("g",{children:[a.jsx(be,{x1:d(f)+u+2,y1:118+44/2,x2:d(f+1)-2,y2:118+44/2}),a.jsx("text",{x:d(f)+u+26/2,y:182,textAnchor:"middle",fontFamily:M,fontSize:"7",letterSpacing:"0.5",fill:"currentColor",stroke:"none",fillOpacity:"0.6",children:t[f%t.length]})]},`gate-${f}`)),e.length>1&&a.jsx("g",{fill:"currentColor",stroke:"none",fillOpacity:"0.5",children:Array.from({length:Math.floor((u-14)/7)},(p,f)=>a.jsx("circle",{cx:d(1)+7+f*7,cy:171,r:"1.1"},f))})]})})}const Hm={2:"CITATION MISREAD AS LEAKAGE",5:"DAG DEPENDENCY FIELDS DROPPED"};function Vm({className:e=""}){const t=Ys(88),n=Array.from({length:8},()=>.88+t()*.07),r=100,o=440,i=68,s=22;return a.jsx("svg",{"aria-hidden":!0,viewBox:"0 0 800 300",className:`block h-auto w-full text-foreground ${e}`,preserveAspectRatio:"xMidYMid meet",children:a.jsxs("g",{stroke:"currentColor",fill:"none",children:[a.jsx(ct,{text:"JUDGE AUDIT — FATAL-ZERO REVIEW"}),[0,.5,1].map(l=>a.jsx("text",{x:r+l*o,y:52,textAnchor:"middle",fontFamily:M,fontSize:"7.5",fill:"currentColor",stroke:"none",fillOpacity:"0.55",children:l*100},l)),[.5,1].map(l=>a.jsx("path",{d:`M${r+l*o},58 V230`,strokeOpacity:"0.22",strokeWidth:"0.8",strokeDasharray:"3 4"},l)),n.map((l,u)=>{const d=i+u*s,p=r+l*o,f=Hm[u];return a.jsxs("g",{children:[a.jsx("text",{x:36,y:d+3.5,fontFamily:M,fontSize:"9",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.8",children:`Q-0${u+1}`}),a.jsx("path",{d:`M${r},${d}H${r+o}`,strokeOpacity:"0.3",strokeWidth:"1"}),a.jsx("rect",{x:r,y:d-3,width:l*o,height:"6",fill:"currentColor",stroke:"none",fillOpacity:"0.28"}),f?a.jsxs("g",{children:[a.jsx("text",{x:p,y:d+4,textAnchor:"middle",fontFamily:M,fontSize:"11",fill:"currentColor",stroke:"none",fillOpacity:"0.9",children:"✗"}),a.jsx("text",{x:556,y:d-6,fontFamily:M,fontSize:"8",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.85",children:"FATAL ZERO"}),a.jsx("path",{d:`M614,${d}H632`,strokeOpacity:"0.55",strokeWidth:"0.8"}),a.jsx("circle",{cx:614,cy:d,r:"1.4",fill:"currentColor",stroke:"none",fillOpacity:"0.7"}),a.jsx("rect",{x:636,y:d-10,width:"150",height:"20",className:"fill-surface",strokeOpacity:"0.7",strokeWidth:"0.9"}),a.jsx("text",{x:711,y:d+3,textAnchor:"middle",fontFamily:M,fontSize:"7",letterSpacing:"0.5",fill:"currentColor",stroke:"none",fillOpacity:"0.85",children:f})]}):a.jsxs("g",{children:[a.jsx("circle",{cx:p,cy:d,r:"3",fill:"currentColor",stroke:"none",fillOpacity:"0.85"}),a.jsx("text",{x:556,y:d+3,fontFamily:M,fontSize:"8.5",fill:"currentColor",stroke:"none",fillOpacity:"0.75",children:`${Math.round(l*100)}%`})]})]},u)}),a.jsx("path",{d:`M36,${i+8*s+6}H764`,strokeOpacity:"0.5",strokeWidth:"1"}),a.jsx("text",{x:36,y:i+8*s+28,fontFamily:M,fontSize:"8.5",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.75",children:"DEFENSES: SCHEMA ROUND-TRIP · ORACLE FULL-MARK · LINE-BY-LINE RE-CHECK"})]})})}function Gm({className:e=""}){const t=[46,84,122,160,198,236],n=[96,140,184];return a.jsx("svg",{"aria-hidden":!0,viewBox:"0 0 800 300",className:`block h-auto w-full text-foreground ${e}`,preserveAspectRatio:"xMidYMid meet",children:a.jsxs("g",{stroke:"currentColor",fill:"none",children:[a.jsx(ct,{text:"51-AGENT ADVERSARIAL REVIEW"}),a.jsx("text",{x:776,y:30,textAnchor:"end",fontFamily:M,fontSize:"8.5",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.6",children:"~59 MIN WALL-CLOCK"}),a.jsx(ce,{x:24,y:130,w:110,h:44,label:"DIFF · 216 FILES",sub:"17 COMMITS"}),t.map(r=>a.jsx("path",{d:`M134,152 C172,152 178,${r+12} 215,${r+12}`,strokeOpacity:"0.55",strokeWidth:"0.9"},r)),t.map((r,o)=>a.jsx(ce,{x:215,y:r,w:88,h:24,label:`FINDER 0${o+1}`,fontSize:8.5},r)),t.map(r=>a.jsx("path",{d:`M303,${r+12} C340,${r+12} 352,152 392,152`,strokeOpacity:"0.55",strokeWidth:"0.9"},r)),a.jsx("path",{d:"M392,118V186",strokeOpacity:"0.8",strokeWidth:"1.4"}),a.jsx("circle",{cx:392,cy:152,r:"3",fill:"currentColor",stroke:"none",fillOpacity:"0.85"}),a.jsx("text",{x:392,y:106,textAnchor:"middle",fontFamily:M,fontSize:"8",letterSpacing:"1.5",fill:"currentColor",stroke:"none",fillOpacity:"0.75",children:"45 CANDIDATES"}),n.map((r,o)=>a.jsxs("g",{children:[a.jsx(be,{x1:398,y1:152,x2:466,y2:r+12,opacity:.7}),a.jsx(ce,{x:470,y:r,w:112,h:24,label:`EXEC VERIFIER ${o+1}`,fontSize:8})]},r)),n.map(r=>a.jsx(be,{x1:586,y1:r+12,x2:644,y2:152,opacity:.7},r)),a.jsx(ce,{x:648,y:130,w:132,h:44,label:"40 CONFIRMED",sub:"git log -S"})]})})}function Km({rows:e=["GPT","CLAUDE","GEMINI","QWEN","DEEPSEEK","LLAMA"],cols:t=["HARNESS A","HARNESS B","HARNESS C","HARNESS D","HARNESS E"],title:n="MODEL × HARNESS MATRIX",className:r=""}){const o=Ys(42),i=e.map(()=>t.map(()=>o()<.85)),s=84,l=28,u=150,d=84,p=t.length*s,f=e.length*l;return a.jsx("svg",{"aria-hidden":!0,viewBox:"0 0 800 300",className:`block h-auto w-full text-foreground ${r}`,preserveAspectRatio:"xMidYMid meet",children:a.jsxs("g",{stroke:"currentColor",fill:"none",children:[a.jsx(ct,{text:n}),a.jsx("rect",{x:u,y:d,width:p,height:f,strokeOpacity:"0.8",strokeWidth:"1.1"}),t.slice(1).map((m,x)=>a.jsx("path",{d:`M${u+(x+1)*s},${d}V${d+f}`,strokeOpacity:"0.3",strokeWidth:"0.8"},x)),e.slice(1).map((m,x)=>a.jsx("path",{d:`M${u},${d+(x+1)*l}H${u+p}`,strokeOpacity:"0.3",strokeWidth:"0.8"},x)),t.map((m,x)=>a.jsx("text",{x:u+x*s+s/2,y:d-10,textAnchor:"middle",fontFamily:M,fontSize:"8",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.7",children:m},m)),e.map((m,x)=>a.jsx("text",{x:u-10,y:d+x*l+l/2+3,textAnchor:"end",fontFamily:M,fontSize:"8.5",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.7",children:m},m)),i.map((m,x)=>m.map((S,b)=>a.jsx("text",{x:u+b*s+s/2,y:d+x*l+l/2+4,textAnchor:"middle",fontFamily:M,fontSize:S?"11":"13",fill:"currentColor",stroke:"none",fillOpacity:S?.8:.45,children:S?"✓":"·"},`${x}-${b}`))),a.jsx("text",{x:u+p+40,y:d+32,fontFamily:M,fontSize:"9",fill:"currentColor",stroke:"none",fillOpacity:"0.8",children:"✓"}),a.jsx("text",{x:u+p+56,y:d+32,fontFamily:M,fontSize:"8",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.7",children:"PASS"}),a.jsx("text",{x:u+p+40,y:d+50,fontFamily:M,fontSize:"11",fill:"currentColor",stroke:"none",fillOpacity:"0.5",children:"·"}),a.jsx("text",{x:u+p+56,y:d+50,fontFamily:M,fontSize:"8",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.7",children:"SKIP"}),a.jsx("text",{x:u+p,y:d+f+24,textAnchor:"end",fontFamily:M,fontSize:"8.5",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.6",children:`${e.length*t.length} CONTAINERIZED COMBOS`})]})})}function Qm({className:e=""}){return a.jsx("svg",{"aria-hidden":!0,viewBox:"0 0 800 300",className:`block h-auto w-full text-foreground ${e}`,preserveAspectRatio:"xMidYMid meet",children:a.jsxs("g",{stroke:"currentColor",fill:"none",children:[a.jsx(ct,{text:"ADVERSARIAL QC LOOP"}),a.jsx(ce,{x:340,y:58,w:120,h:44,label:"ACTOR",sub:"GENERATE"}),a.jsx(ce,{x:120,y:194,w:120,h:44,label:"CRITIC",sub:"FINDINGS"}),a.jsx(ce,{x:560,y:194,w:120,h:44,label:"MONITOR",sub:"ARBITRATE"}),a.jsx(be,{x1:352,y1:106,x2:212,y2:190}),a.jsx("text",{x:248,y:140,textAnchor:"middle",fontFamily:M,fontSize:"8",letterSpacing:"1.5",fill:"currentColor",stroke:"none",fillOpacity:"0.7",children:"CASE"}),a.jsx(be,{x1:246,y1:216,x2:554,y2:216}),a.jsx("text",{x:400,y:206,textAnchor:"middle",fontFamily:M,fontSize:"8",letterSpacing:"1.5",fill:"currentColor",stroke:"none",fillOpacity:"0.7",children:"STRUCTURED FINDINGS"}),a.jsx(be,{x1:592,y1:190,x2:452,y2:106}),a.jsx("text",{x:556,y:140,textAnchor:"middle",fontFamily:M,fontSize:"8",letterSpacing:"1.5",fill:"currentColor",stroke:"none",fillOpacity:"0.7",children:"REVISE / REWORK"}),a.jsx(be,{x1:686,y1:216,x2:768,y2:216}),a.jsx("text",{x:727,y:204,textAnchor:"middle",fontFamily:M,fontSize:"8",letterSpacing:"1.5",fill:"currentColor",stroke:"none",fillOpacity:"0.7",children:"PASS → DELIVERY"}),a.jsx(ce,{x:345,y:256,w:110,h:28,label:"MEMORY"}),a.jsx("path",{d:"M180,238 V270 H341",strokeOpacity:"0.6",strokeWidth:"1",strokeDasharray:"4 4"}),a.jsx("text",{x:258,y:262,textAnchor:"middle",fontFamily:M,fontSize:"7.5",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.6",children:"BAD-PATTERN DETECTORS"})]})})}const gt={cx:300,cy:172,r:104},sr=[{name:"FAITHFULNESS",value:.87},{name:"ANSWER REL.",value:.82},{name:"CONTEXT PREC.",value:.85},{name:"CONTEXT RECALL",value:.78},{name:"HALLUCINATION †",value:.93}];function xn(e,t){const n=(-90+t*72)*Math.PI/180;return[gt.cx+e*gt.r*Math.cos(n),gt.cy+e*gt.r*Math.sin(n)]}function Jm({className:e=""}){const t=["middle","start","start","end","end"],n=r=>sr.map((o,i)=>xn(r,i).join(",")).join(" ");return a.jsx("svg",{"aria-hidden":!0,viewBox:"0 0 800 300",className:`block h-auto w-full text-foreground ${e}`,preserveAspectRatio:"xMidYMid meet",children:a.jsxs("g",{stroke:"currentColor",fill:"none",children:[a.jsx(ct,{text:"RAG EVALUATION PROFILE"}),[.33,.66,1].map(r=>a.jsx("polygon",{points:n(r),strokeOpacity:r===1?.45:.28,strokeWidth:"0.9",strokeDasharray:"3 4"},r)),sr.map((r,o)=>{const[i,s]=xn(1,o);return a.jsx("path",{d:`M${gt.cx},${gt.cy}L${i},${s}`,strokeOpacity:"0.4",strokeWidth:"0.8"},r.name)}),[.33,.66,1].map(r=>a.jsx("text",{x:gt.cx+6,y:gt.cy-r*gt.r+3,fontFamily:M,fontSize:"7",fill:"currentColor",stroke:"none",fillOpacity:"0.5",children:r.toFixed(2)},r)),sr.map((r,o)=>{const[i,s]=xn(1.22,o);return a.jsx("text",{x:i,y:s+3,textAnchor:t[o],fontFamily:M,fontSize:"8.5",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.75",children:r.name},r.name)}),a.jsx("polygon",{points:sr.map((r,o)=>xn(r.value,o).join(",")).join(" "),fill:"currentColor",fillOpacity:"0.08",strokeOpacity:"0.9",strokeWidth:"1.4"}),sr.map((r,o)=>{const[i,s]=xn(r.value,o),[l,u]=xn(r.value+.15,o);return a.jsxs("g",{children:[a.jsx("circle",{cx:i,cy:s,r:"2.6",fill:"currentColor",stroke:"none",fillOpacity:"0.9"}),a.jsx("text",{x:l,y:u+3,textAnchor:"middle",fontFamily:M,fontSize:"8.5",fill:"currentColor",stroke:"none",fillOpacity:"0.85",children:r.value.toFixed(2)})]},r.name)}),a.jsx("rect",{x:520,y:110,width:248,height:104,className:"fill-surface",strokeOpacity:"0.7",strokeWidth:"1"}),a.jsx("text",{x:536,y:134,fontFamily:M,fontSize:"8.5",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.75",children:"SCALE 0.0–1.0"}),a.jsx("text",{x:536,y:152,fontFamily:M,fontSize:"8.5",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.75",children:"GRID 0.33 / 0.66 / 1.00"}),a.jsx("text",{x:536,y:170,fontFamily:M,fontSize:"8.5",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.75",children:"MEAN 0.85"}),a.jsx("text",{x:536,y:194,fontFamily:M,fontSize:"8.5",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.6",children:"† HALLUCINATION INVERTED"})]})})}const ju=[{label:"SCOUT",sub:"(SUB-MS)",param:"MEMPOOL + LANDED TX",above:!1},{label:"PRICING",sub:"(AMM)",param:"xy = k REQUOTE",above:!0},{label:"CROSS-DEX ARB",param:"ΔP > FEES + TIP",above:!1},{label:"JITO BUNDLE",param:"TIP AUCTION · 1 SLOT",above:!0}];function Ym({className:e=""}){const s=l=>36+l*172;return a.jsx("svg",{"aria-hidden":!0,viewBox:"0 0 800 300",className:`block h-auto w-full text-foreground ${e}`,preserveAspectRatio:"xMidYMid meet",children:a.jsxs("g",{stroke:"currentColor",fill:"none",children:[a.jsx(ct,{text:"MEV SEARCHER PIPELINE"}),ju.map((l,u)=>a.jsxs("g",{children:[a.jsx(ce,{x:s(u),y:104,w:140,h:44,label:l.label,sub:l.sub}),a.jsx("text",{x:s(u)+140/2,y:l.above?94:164,textAnchor:"middle",fontFamily:M,fontSize:"7.5",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.6",children:l.param}),u<ju.length-1&&a.jsx(be,{x1:s(u)+140+2,y1:104+44/2,x2:s(u+1)-2,y2:104+44/2})]},l.label)),a.jsx(be,{x1:s(3)+140+2,y1:104+44/2,x2:722,y2:104+44/2}),a.jsx("rect",{x:724,y:108,width:"52",height:"36",className:"fill-surface",strokeOpacity:"0.8",strokeWidth:"1.1"}),a.jsx("text",{x:750,y:131,textAnchor:"middle",fontFamily:M,fontSize:"15",fill:"currentColor",stroke:"none",fillOpacity:"0.9",children:"$"}),a.jsx("text",{x:750,y:164,textAnchor:"middle",fontFamily:M,fontSize:"8",letterSpacing:"1.5",fill:"currentColor",stroke:"none",fillOpacity:"0.7",children:"PROFIT"}),a.jsx("path",{d:"M36,210 H770",strokeOpacity:"0.55",strokeWidth:"1",strokeDasharray:"4 4"}),a.jsx(hn,{x:776,y:210,deg:0,opacity:.7}),[0,1,2,3].map(l=>a.jsx("path",{d:`M${s(l)+140/2},206 V214`,strokeOpacity:"0.55",strokeWidth:"1"},l)),a.jsx("path",{d:"M750,206V214",strokeOpacity:"0.55",strokeWidth:"1"}),a.jsx("text",{x:36,y:232,fontFamily:M,fontSize:"8.5",letterSpacing:"1.5",fill:"currentColor",stroke:"none",fillOpacity:"0.65",children:"SLOT TIME"})]})})}function Zm({className:e=""}){return a.jsx("svg",{"aria-hidden":!0,viewBox:"0 0 800 300",className:`block h-auto w-full text-foreground ${e}`,preserveAspectRatio:"xMidYMid meet",children:a.jsxs("g",{stroke:"currentColor",fill:"none",children:[a.jsx(ct,{text:"RUBRIC AS DAG"}),a.jsx(ce,{x:36,y:56,w:132,h:28,label:"READ FILE"}),a.jsx(ce,{x:206,y:56,w:132,h:28,label:"QUOTE EVIDENCE",fontSize:8.5}),a.jsx(ce,{x:376,y:56,w:132,h:28,label:"CALC VALUE"}),a.jsx(ce,{x:546,y:56,w:132,h:28,label:"FINAL ANSWER"}),a.jsx(be,{x1:170,y1:70,x2:204,y2:70}),a.jsx(be,{x1:340,y1:70,x2:374,y2:70}),a.jsx(be,{x1:510,y1:70,x2:544,y2:70}),a.jsx(ce,{x:291,y:124,w:132,h:28,label:"REASON STEP"}),a.jsx(be,{x1:292,y1:86,x2:334,y2:122}),a.jsx(be,{x1:423,y1:132,x2:566,y2:90}),a.jsx(ce,{x:546,y:124,w:132,h:28,label:"FORMAT"}),a.jsx(be,{x1:612,y1:86,x2:612,y2:122}),a.jsx(ce,{x:36,y:124,w:132,h:28,label:"NO LEAK"}),a.jsx(be,{x1:102,y1:86,x2:102,y2:122}),a.jsx(ce,{x:206,y:196,w:132,h:28,label:"HURDLE",double:!0}),a.jsx("text",{x:348,y:208,fontFamily:M,fontSize:"8",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.7",children:"HURDLE — MUST PASS"}),a.jsx("path",{d:"M612,152 V214 H344",strokeOpacity:"0.8",strokeWidth:"1"}),a.jsx(hn,{x:340,y:214,deg:180}),a.jsx("path",{d:"M102,152 V210 H198",strokeOpacity:"0.8",strokeWidth:"1"}),a.jsx(hn,{x:202,y:210,deg:0}),a.jsx("path",{d:"M60,152 V186",strokeOpacity:"0.6",strokeWidth:"1",strokeDasharray:"4 4"}),a.jsx("text",{x:60,y:200,textAnchor:"middle",fontFamily:M,fontSize:"10",fill:"currentColor",stroke:"none",fillOpacity:"0.8",children:"✗"}),a.jsx("text",{x:72,y:200,fontFamily:M,fontSize:"8",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.7",children:"FAIL"}),a.jsx("path",{d:"M272,224 V252",strokeOpacity:"0.6",strokeWidth:"1",strokeDasharray:"4 4"}),a.jsx("text",{x:272,y:266,textAnchor:"middle",fontFamily:M,fontSize:"10",fill:"currentColor",stroke:"none",fillOpacity:"0.8",children:"✗"}),a.jsx("text",{x:284,y:266,fontFamily:M,fontSize:"8",letterSpacing:"1",fill:"currentColor",stroke:"none",fillOpacity:"0.7",children:"FAIL → REWORK"})]})})}function vi({id:e,className:t=""}){switch(e){case"benchmark-synthesis":return a.jsx(_u,{steps:["WORKSPACE","EVIDENCE","DRAFT","TRIAL-SOLVER","REVIEW","EXPORT"],gates:["QUOTE GATE","EMBEDDING ROUTE","BLIND→HINT","QA GATE"],className:t});case"difficulty-calibration":case"benchmark-difficulty":return a.jsx(Um,{className:t});case"eval-platform":case"office-harnesses":case"judge-reliability":case"agent-as-judge":case"eval-validity":return a.jsx(Vm,{className:t});case"adversarial-verification":case"adversarial-code-review":case"nvwa":return a.jsx(Gm,{className:t});case"harbor-eval":case"eval-plumbing":return a.jsx(Km,{className:t});case"medical-acm":case"adversarial-qc":return a.jsx(Qm,{className:t});case"rag-eval":return a.jsx(Jm,{className:t});case"solana-mev":case"solana-mev-guide":case"9":return a.jsx(Ym,{className:t});case"rubric-dags":return a.jsx(Zm,{className:t});case"syndata-pipeline":case"toolathlon-mcp":case"evidence-ledger":default:return a.jsx(_u,{className:t})}}const Xm=[{value:134,label:{en:"benchmark questions difficulty-calibrated into a target band",zh:"道基准题被校准进目标难度带"}},{value:51,label:{en:"agents in one adversarial code review",zh:"个 Agent 完成同一次代码审查"}},{value:18,label:{en:"stages in the benchmark-synthesis pipeline",zh:"个阶段的基准合成流水线"}},{value:6,label:{en:"model families benchmarked on one harness",zh:"个模型族在同一套 Harness 上横评"}}],Au=["Difficulty Calibration","Judge Reliability","DAG Rubrics","Evidence Ledger","Adversarial QC","Verifier","Agent-as-Judge","Anti-Guessing Probes","RL Data","Agent Harnesses","GDPval","Toolathlon","MCP","RAGAS","Cloud Fan-out","OpenHands","Stirrup","Codex","OpenRouter","Oracle Validation","Rubric Design"];function ey(e,t,n=1100){const[r,o]=q.useState(0);return q.useEffect(()=>{var u;if(!t)return;if(typeof window<"u"&&((u=window.matchMedia)!=null&&u.call(window,"(prefers-reduced-motion: reduce)").matches)){o(e);return}let i=0;const s=performance.now(),l=d=>{const p=Math.min(1,(d-s)/n),f=1-Math.pow(1-p,3);o(Math.round(f*e)),p<1&&(i=requestAnimationFrame(l))};return i=requestAnimationFrame(l),()=>cancelAnimationFrame(i)},[e,t,n]),r}function ty({stat:e,active:t,index:n}){const r=he(),o=ey(e.value,t);return a.jsxs("div",{children:[a.jsx("div",{className:"font-mono text-[11px] tracking-[0.18em] text-muted-foreground/70",children:String(n+1).padStart(2,"0")}),a.jsxs("div",{className:"mt-1.5 font-mono text-5xl font-semibold tracking-tight tabular-nums sm:text-6xl",children:[o,e.suffix?a.jsx("span",{className:"text-brand",children:e.suffix}):null]}),a.jsx("div",{className:"mt-2 text-sm text-muted-foreground",children:r(e.label)})]})}function ny(){const e=he(),{lang:t}=Hr(),n=q.useRef(null),[r,o]=q.useState(!1);return q.useEffect(()=>{const i=n.current;if(!i||typeof IntersectionObserver>"u"){o(!0);return}const s=new IntersectionObserver(l=>l.forEach(u=>u.isIntersecting&&(o(!0),s.disconnect())),{threshold:.3});return s.observe(i),()=>s.disconnect()},[]),a.jsxs("section",{className:"mx-auto mt-28 max-w-content px-6 md:mt-36",children:[a.jsxs(ae,{children:[a.jsx("p",{className:"eyebrow",children:e(P.atScale)}),a.jsx("h2",{className:`mt-3 max-w-2xl font-semibold text-balance ${t==="en"?"font-mono uppercase tracking-wide text-xl sm:text-2xl":"tracking-tight text-3xl sm:text-4xl"}`,children:e(P.atScaleTitle)})]}),a.jsx(ae,{delay:80,children:a.jsxs(Xo,{className:"mt-12",children:[a.jsx(Vn,{left:"Measured values",right:"Units: count"}),a.jsx("div",{ref:n,className:"grid grid-cols-2 gap-x-6 gap-y-12 p-7 md:grid-cols-4 md:p-9",children:Xm.map((i,s)=>a.jsx(ty,{stat:i,active:r,index:s},s))})]})}),a.jsxs("div",{className:"mt-6 grid gap-6 md:grid-cols-2",children:[a.jsx(ae,{delay:120,children:a.jsxs(Xo,{className:"h-full",children:[a.jsx(Vn,{left:"Fig. 02 — Difficulty distribution",right:"134 items"}),a.jsx(Wm,{className:"w-full p-4"})]})}),a.jsx(ae,{delay:160,children:a.jsx("div",{className:"relative flex h-full items-center overflow-hidden py-8 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",children:a.jsx("div",{className:"flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]",children:[...Au,...Au].map((i,s)=>a.jsx("span",{className:"chip whitespace-nowrap",children:i},s))})})})]})]})}function Vr({eyebrow:e,title:t,sub:n,size:r="section",narrow:o=!1}){const i=he(),{lang:s}=Hr();return a.jsxs(a.Fragment,{children:[a.jsx("p",{className:"eyebrow",children:i(e)}),a.jsx("h2",{className:`mt-3 font-semibold ${s==="en"?`font-mono uppercase tracking-wide text-xl ${r==="page"?"sm:text-3xl":"sm:text-2xl"}`:`tracking-tight text-3xl ${r==="page"?"sm:text-5xl":"sm:text-4xl"}`}${o?" max-w-2xl":""}`,children:i(t)}),n&&a.jsx("p",{className:"mt-3 text-muted-foreground",children:i(n)})]})}function Zs({children:e}){return a.jsx("span",{className:"chip",children:e})}const ry=[{icon:"gauge",title:{en:"Evaluation science",zh:"评测科学"},body:{en:"Difficulty calibration with control-group experiments, anti-guessing probes, leakage control, and systematic testing of the LLM judge itself.",zh:"带对照组的难度校准、防蒙探针、泄漏控制，以及对 LLM Judge 本身的系统性测试。"},tags:["Difficulty calibration","Judge reliability","Anti-guessing gates"]},{icon:"flask",title:{en:"Synthetic & RL data",zh:"合成与 RL 数据"},body:{en:"Evidence-grounded task synthesis in expert domains: dual-model fact confirmation, adversarial QC, and DAG rubrics that score the reasoning process as well as the outcome.",zh:"专家领域的证据约束任务合成：双模型事实互证、对抗式 QC，以及过程与结果都打分的 DAG Rubric。"},tags:["Evidence ledger","DAG rubrics","Adversarial QC"]},{icon:"workflow",title:{en:"Agentic systems",zh:"智能体系统"},body:{en:"Multi-agent pipelines built and operated as production software: role-isolated model routing, blind-then-hinted solver protocols, and verification agents that reproduce findings by execution.",zh:"按生产软件标准搭建并维护 Multi-Agent Pipeline：角色隔离的模型路由、先盲解后提示的试做协议、必须执行复现才算数的验证 Agent。"},tags:["Multi-agent pipelines","Verification fleets","MCP"]},{icon:"layers",title:{en:"Eval infrastructure",zh:"评测基础设施"},body:{en:"Containerized eval execution across model families and harnesses, with cloud fan-out, cost governance, and delivery-grade QA gates.",zh:"跨模型族、跨 Harness 的容器化评测执行，含云端 fan-out、成本治理与交付级 QA 门控。"},tags:["Model×harness matrices","Cloud fan-out","Delivery QA"]}],oy={workflow:nm,gauge:Gg,flask:Vg,layers:Qg};function iy(){const e=he();return a.jsxs("section",{className:"mx-auto mt-28 max-w-content px-6 md:mt-36",children:[a.jsx(ae,{children:a.jsx(Vr,{eyebrow:P.buildEyebrow,title:P.buildTitle,narrow:!0})}),a.jsx("div",{className:"mt-12 grid gap-5 sm:grid-cols-2",children:ry.map((t,n)=>{const r=oy[t.icon];return a.jsx(ae,{delay:n*70,children:a.jsxs("article",{className:"surface lift group h-full p-7 md:p-8",children:[a.jsxs("div",{className:"flex items-start justify-between",children:[a.jsx("span",{className:"inline-flex h-11 w-11 items-center justify-center border border-line bg-background text-foreground transition-colors group-hover:border-brand/60",children:a.jsx(r,{className:"h-5 w-5",strokeWidth:1.6})}),a.jsx("span",{className:"font-mono text-[11px] tracking-[0.18em] text-muted-foreground/70",children:String(n+1).padStart(2,"0")})]}),a.jsx("h3",{className:"mt-5 text-xl font-semibold tracking-tight",children:e(t.title)}),a.jsx("p",{className:"mt-2.5 leading-relaxed text-muted-foreground",children:e(t.body)}),a.jsx("div",{className:"mt-5 flex flex-wrap gap-2",children:t.tags.map(o=>a.jsx(Zs,{children:o},o))})]})},n)})})]})}function ay(e){const[t,n]=e.split(" – "),r=new Date(t),o=!n||/present/i.test(n)?new Date:new Date(n);if(Number.isNaN(r.getTime())||Number.isNaN(o.getTime()))return 1;const i=(o.getFullYear()-r.getFullYear())*12+(o.getMonth()-r.getMonth());return Math.max(1,i)}function sy(e){if(e<12)return`${e} MO`;const t=Math.floor(e/12),n=e%12;return n?`${t} YR ${n} MO`:`${t} YR`}function ly({items:e}){return a.jsx("div",{className:"overflow-x-auto pb-1",children:a.jsx("div",{className:"flex min-w-[640px]",children:e.map((t,n)=>{const r=ay(t.period);return a.jsxs("div",{className:"flex-1 text-center",style:{flexGrow:r,flexBasis:0},children:[a.jsx("div",{className:"px-1 font-mono text-[9px] tracking-[0.14em] text-brand",children:sy(r)}),a.jsxs("div",{className:"relative mt-1 h-3 text-foreground/45",children:[a.jsx("div",{className:"absolute inset-x-0 top-1/2 h-px bg-foreground/45"}),a.jsx("div",{className:"absolute left-0 top-0 h-full w-px bg-foreground/45"}),n===0&&a.jsx("span",{className:"absolute left-0 top-1/2 -translate-y-1/2",style:{borderTop:"3px solid transparent",borderBottom:"3px solid transparent",borderRight:"5px solid currentColor"}}),n===e.length-1&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"absolute right-0 top-0 h-full w-px bg-foreground/45"}),a.jsx("span",{className:"absolute right-0 top-1/2 -translate-y-1/2",style:{borderTop:"3px solid transparent",borderBottom:"3px solid transparent",borderLeft:"5px solid currentColor"}})]})]}),a.jsx("div",{className:"mt-1 truncate px-1 font-mono text-[8.5px] uppercase tracking-[0.12em] text-muted-foreground",children:t.label})]},n)})})})}const Cu=[{company:"HUMANLAYA AI",role:{en:"AI Algorithm Engineer · Infra Engineer · Project Manager",zh:"AI 算法工程师 · Infra 工程师 · 项目经理"},location:{en:"Beijing, China",zh:"中国 · 北京"},period:"Apr 2026 – Present",summary:{en:"One of the founding engineers — owning capability evaluation and benchmark design for leading US and Chinese models, leading HIL data-synthesis and Agent-as-a-Judge evaluation algorithms as algorithm lead, and building the company's evaluation, synthesis, and delivery platforms.",zh:"作为创始工程师之一，负责中美前沿模型能力评测与高质量 Benchmark 设计；作为算法负责人，设计 HIL 数据合成与 Agent-as-Judger 评测算法；并搭建评测、合成、交付三大 AI Infra 平台。"},highlights:[{title:{en:"High-quality benchmark design & expert training-data construction",zh:"高质量 Benchmark 设计与专家训练数据构造"},items:[{en:"Foundation-model evaluation: run reproducible benchmarks for the leading US and Chinese models on a unified containerized harness — spanning public benchmarks such as GDPval and office-productivity tasks — reporting score, cost, and latency to map each model’s capability gaps, including full-precision vs. quantized comparisons.",zh:"基模能力评测：在统一容器化 harness 上对中美领先模型执行可复现的基准评测，覆盖 GDPval 等公开基准与 Office 生产力任务，从分数、成本、时延三个维度绘制各家模型的能力缺口图谱，并延伸到全精度 vs 量化等部署变量的对比。"},{en:"Agentic capability evaluation: drive models through long-horizon real-world tasks under harnesses including Claude Code, Codex, OpenHands, Stirrup, OpenCode, and Gemini CLI, with per-rubric-row grading; diagnose LLM–harness compatibility defects (e.g., reasoning models silently ending tasks early) and deliver per-model capability findings to enterprise clients.",zh:"Agentic 能力评测：以 Claude Code、Codex、Openhands、Stirrup、Opencode、Gemini Cli 等 harness 驱动被测模型完成长程真实任务并逐条 rubric 判分；诊断 llm 与 harness 之间的兼容性缺陷（如推理模型静默提前结束任务），向企业客户输出分模型能力结论。"},{en:"VLM capability evaluation: build evaluation paths for multimodal document tasks — charts, scanned files, screenshots — and audit vendors’ real visual capability side by side.",zh:"VLM 能力评测：面向 Chart、扫描件、截图等多模态文档任务构建评测路径，横向审计各厂商模型的真实视觉能力。"},{en:"Professional post-train / SFT data: construct high-quality post-training and SFT data in expert domains — finance, law, medicine, and industry — targeting the capability gaps surfaced by evaluation to precisely strengthen each model’s weaknesses; ranked No. 1 in China for GDPval-style productivity tasks and long-horizon agentic training / eval data.",zh:"专业 Post-train / SFT 数据构造：针对评测暴露的能力缺口，构造金融、法律、医疗、工业等专家领域的高质量 Post-train 与 SFT 数据，精确补强各家模型的短板能力；在 GDPval 类生产力任务与 Long-Horizon Agentic 训练/ eval 数据方向做到国内第一。"},{en:"Data commercialization: datasets procured as high-quality SFT data by Tencent, Alibaba, Ant Group, ByteDance, MiniMax, GLM (Zhipu), DeepSeek, Meituan, and Xiaohongshu, supporting stronger next-generation model releases across these vendors.",zh:"数据商业化：数据被腾讯、阿里、蚂蚁、字节、MiniMax、GLM、DeepSeek、美团、小红书等厂商采购为高质量 SFT 数据，助力各家发布更优的新一代模型。"}]},{title:{en:"Algorithm design",zh:"算法设计"},items:[{en:"HIL high-quality data synthesis: design expert-in-the-loop multi-agent synthesis algorithms that turn experts’ real workspaces into hard, evidence-grounded agentic training data across investment banking (primary and secondary markets), management consulting, corporate law, clinical medicine, and bioinformatics — with validity enforced by cross-vendor model independence, locator-bound evidence ledgers, Actor-Critic-Monitor adversarial QC, and expert review panels.",zh:"HIL 高质量数据合成算法：设计 Expert-in-Loop 的 Multi-Agent 合成算法，将专家真实 Workspace 转化为投行金融（一级市场、二级市场等）、管理咨询、公司法、临床医学、生物信息学等领域中以证据为依据的高难度 Agent 训练数据；以跨厂商模型独立性、带定位符的证据账本与 Actor-Critic-Monitor 对抗式质检、专家评审团等手段保证数据有效性。"},{en:"DAG rubrics: design DAG-structured rubric systems that restructure traditional “flat” rubrics into three row types — Process, Result, and Hurdle — enabling narrative grading of each task item that precisely measures the correctness of a model’s checkpoints and intermediate steps, improving RL effectiveness.",zh:"DAG Rubric：设计 DAG 结构的 rubric 体系，将传统“平铺”式 Rubrics 重构为 Process-Result-Hurdle 三类型 Rubrics ，实现题目“叙事性”判分，能精确衡量模型完成任务的 ckp、steps 的正确性，提高 RL 效果"},{en:"LLM/Agent-as-a-Judge evaluation algorithms: design fine-grained LLM judging metrics for stable, efficient grading of model responses, output files, and trajectories; abstract the core metric methods into function calls / skills, leveraging Agent-as-a-Judge flexibility to deliver a large lift in accuracy, recall, and precision on complex agentic-task evaluation.",zh:"LLM/Agent-as-Judger 评测算法：设计精细化 llm 评测 metric，实现稳定且高效模型 response/output_files/trajectory 评判，同时将 llm metric 中核心方法抽象为 function-call/skills，借助 Agent-as-Judge 的灵活性，实现复杂 Agentic Task 评估 Acc/Recall/Precision 大幅上升。"}]},{title:{en:"AI infrastructure",zh:"AI Infra"},items:[{en:"Evaluation platform: adopted the open-source Harbor framework as the unified data format and built batch-evaluation orchestration on Daytona cloud sandboxes — normalizing heterogeneous tasks into a standard eval format with high-concurrency fan-out, smoke-test gating, and in-place failure reruns — supporting free combination of model families (Anthropic, OpenAI, Gemini, Qwen, HY, Seed, GLM, Kimi, etc.) × agent harnesses (Claude Code, Codex, Stirrup, etc.).",zh:"评测平台搭建：基于开源 Harbor 框架作为统一数据格式，并通过 Daytona 云沙箱搭建批量评测编排系统，将异构任务统一为标准评测格式，支持高并发扇出、冒烟门控与失败原地重跑，覆盖 Anthropic、OpenAI、Gemini、Qwen、HY、seed、GLM、KIMI 等多个模型族 × Claude Code、Codex、Stirrup 等多种 agent harness 的自由组合评测。"},{en:"Data-synthesis platform: productionized the multi-agent synthesis pipeline — per-node cross-vendor model swapping, gate monitoring, resumable runs, and human-review windows — plus MCP operations tooling and a visual console, covering the full path from seed data to finished items.",zh:"数据合成平台搭建：将多智能体合成 pipeline 产品化，提供每个 Agents 节点跨厂商替换、门控监控、断点续跑、人工复核窗口等能力，同时配套 MCP 运维工具与可视化控制台，支撑从种子数据到成题的全链路生产。"},{en:"Data-delivery platform: manage delivered data as versioned assets — SKUs and version lineage across the full delivery chain — with pre-delivery audits of data structure and per-component QA over prompts, rubrics, reference answers, and judge prompts, emitting agent-readable issue codes for automated repair to guarantee the correctness and consistency of every delivery.",zh:"数据交付平台搭建：把交付数据资产化，利用 SKU、版本血缘等方式全链路管理数据交付，并在交付前自动审计数据结构、对Prompt、Rubrics、Ref、judge prompt 等组件分别进行 qa，输出 Agent 可读的问题码供自动修复，保证交付数据正确性、一致性。"}]},{title:{en:"Data delivery",zh:"数据交付"},items:[{en:"Delivery gating: harden constraints such as “oracle runs must score full marks” and conflict-free prompt–rubrics–reference alignment into delivery invariants; run full pre-delivery checks with production-identical judges and block any batch that misses the red lines; refine failures under a minimal-change rule and re-judge until every delivery requirement is met, retaining full meta information so each delivery is reproducible and auditable.",zh:"交付准出：把 Oracle 实验必须满分、prompt & rubrics & reference 无冲突等约束固化为交付不变量，交付前以生产同配置的裁判做全量预检，未过红线的批次一律不出库；失败项按最小改动原则 Refine 后重判，直至满足所有交付要求，同时会保留所有相关 meta 信息，保证每次交付可复现、可审计。"},{en:"Feedback loop: own the enterprise-client feedback loop — reproduce every reported issue, triage it P0–P3, separate real defects from version drift and spec-alignment gaps, and close each one with a fix and a client-facing response.",zh:"反馈闭环：负责企业客户反馈闭环，对上报问题逐条复现并按 P0–P3 分级，区分真实缺陷、版本漂移与口径对齐三类问题，逐一完成修复与对客回复。"},{en:"Client relationships & institutionalization: serve as the R&D-side technical interface to enterprise clients and maintain long-term relationships; distill client feedback into delivery red lines and SOPs that teammates and automated agents alike execute against, feeding back into data quality and platform iteration.",zh:"客户关系与沉淀：作为研发侧对客技术接口，长期维护企业客户关系；将客户反馈沉淀为交付红线与 SOP，让团队成员与自动化 Agent 都按同一套标准执行交付检查，反哺数据质量与平台迭代。"}]}],tags:["Evaluation Science","Benchmark Design","Expert SFT / RL Data","Agent-as-a-Judge","DAG Rubrics","Multi-Agent Systems","Data Delivery"]},{company:"Fintopia",role:{en:"Machine Learning Engineer (AI R&D)",zh:"Machine Learning Engineer（AI 研发）"},location:{en:"Beijing, China",zh:"中国 · 北京"},period:"Nov 2025 – Apr 2026",summary:{en:"Led end-to-end development, observability, and evaluation of AI infrastructure for the cross-border lending business across China, Indonesia, Mexico, and the Philippines.",zh:"负责跨境借贷业务（中国、印尼、墨西哥、菲律宾）AI 基础设施的端到端开发、可观测性与评测。"},highlights:[{en:"Enterprise agentic ecosystem: architected a scalable agent ecosystem on Volcengine AgentKit and VeADK, integrating Anthropic Agent Skills, MCP, and advanced tool-use; achieved deep binding between agents and corporate data warehouses for real-time, data-driven decisions.",zh:"企业级 Agent 生态：基于火山引擎 AgentKit、VeADK 搭建可扩展 Agent 体系，集成 Anthropic Agent Skills、MCP 与 Tool-use 能力，并打通企业数仓，支撑实时数据驱动决策。"},{en:"Unified AI evaluation infrastructure: built a platform supporting rule-based (code) and LLM-as-a-judge scoring, with specialized metric suites for regression, classification, RAG, and agents (e.g., trajectory quality, tool precision) — powering QA and release gating for all internal AI products.",zh:"统一评测平台：搭建同时支持 Rule-based（代码）与 LLM-as-a-Judge 的评分平台，针对回归、分类、RAG、Agent 分别设计 Metric 套件（Trajectory 质量、工具调用准确率等），承载公司内部 AI 产品的 QA 与准出。"},{en:"Agent observability: instrumented OpenTelemetry spans with Kafka and ClickHouse for near-real-time aggregation of enterprise agent traces and real-time behavioral diagnostics.",zh:"Agent 可观测：基于 OpenTelemetry 接入 Span 埋点，通过 Kafka + ClickHouse 实现企业 Agent Trace 准实时聚合与实时行为诊断。"},{en:"Enterprise RAG system: built a highly available internal RAG system on the open-source Haystack framework, ingesting Lark sheets and offline PDF/DOCX/XLSX/PPTX files into the knowledge base with high-quality reranking over recalled passages; wired in RAGAS for fine-grained quality evaluation, serving as the release-gate baseline before every launch.",zh:"企业级 RAG 系统：基于 Haystack 开源框架搭建企业内部高可用 RAG 系统，打通飞书表格与线下 PDF/DOCX/XLSX/PPTX 等多种数据格式上传为知识库，并对召回结果做高质量精排；接入 RAGAS 对 RAG 效果做精细化评测，作为每次上线前的准出基准。"},{en:"Multilingual voice bots: fine-tuned Whisper into an ASR model on precisely labeled data in business-market languages such as Indonesian and Spanish, fine-tuned Qwen-14B for semantic understanding, and sourced premium third-party TTS voices — assembling the full ASR + NLU + TTS voice-bot stack, deployed across pre-loan customer acquisition, post-loan customer service, and collections scenarios.",zh:"多语种语音机器人：基于印尼语、西班牙语等业务国家的精标数据微调 Whisper 得到 ASR 模型，微调 Qwen 14B 承担语义识别，并外采高质量音色厂商的 TTS，组装出 ASR + 语义识别 + TTS 的完整语音机器人链路，用于贷前引流、贷后客服、贷后催收等场景。"},{en:"Risk AI: deployed SLMs in the Mexican and Philippine markets for risk-feature mining and fraud-pattern detection, distilling model-ready risk features from unstructured data such as call dialogues; collected features at the face-recognition step to build customer profiles on fully de-identified data; and correlated voice-bot dialogue features with recovery rates to quantify the business impact of speech strategies.",zh:"AI 风控：面向墨西哥、菲律宾等市场部署 SLM 做风控特征挖掘与欺诈模式识别，从通话对话等非结构化数据中提炼可入模的风险特征；在人脸识别环节采集相关特征，在脱敏前提下构建客户画像；并将语音机器人的对话特征与回收率做关联分析，量化语音策略对业务指标的影响。"}],tags:["Agents · AgentKit","MCP","RAG / RAGAS","OTel · Kafka · ClickHouse","Voice AI · Whisper","Risk AI / SLM","FinTech"]},{company:"ByteDance",role:{en:"Algorithm Engineer · Doubao (VLM) Evaluation",zh:"算法工程师 · 豆包（VLM）评测"},location:{en:"Beijing, China",zh:"中国 · 北京"},period:"Mar 2025 – Nov 2025",summary:{en:"Owned evaluation-algorithm design and evaluation-platform infrastructure for the Doubao vision-language model.",zh:"负责豆包 VLM 评测算法设计及模型评测平台 Infra 工作"},highlights:[{en:"Framework architecture: contributed to building the Merlin evaluation platform, standardizing the “evals” workflow into 5 modular components — Datacard, Exercise, PE Template, Arena, and Insight — enabling one-click benchmarking and visualization for proprietary and open-source models.",zh:"评测框架：参与评测平台 Merlin 构建，把 Evals 流程标准化为 5 个模块（Datacard、Exercise、PE Template、Arena、Insight），支持自研与开源模型一键执行 Benchmark 并输出可视化。"},{en:"Metric system: built a hybrid scoring system combining rule-based (RegEx) and LLM-as-a-judge metrics — spanning CoT-pattern analysis, grounding, and complex-instruction evaluation — and integrated/aligned 20+ public VLM benchmarks (ChartQA, HRBench, SciAssess, FinMME, etc.) via automated pipelines that cut evaluation deployment time by 95%.",zh:"Metric 体系：设计 Rule-based（RegEx）+ LLM-as-a-Judge 混合判分体系，覆盖 CoT 模式分析、Grounding、复杂指令等评估类型；接入并对齐 ChartQA、HRBench、SciAssess、FinMME 等 20+ 公开VLM Benchmark，自动化流水线将评测部署时间缩短 95%。"},{en:"Eval-set construction: led LLM-to-VLM evaluation sets that convert long-document benchmarks into images to probe models in many-image, multi-turn scenarios, unifying understanding and generation in a single pipeline; produced multilingual versions of the eval suite to measure cross-lingual performance drift.",zh:"评测集建设：主导 LLM 转 VLM 专项评测集，通过长文 benchmark 转图片考察模型超多图、多轮交互场景下的综合能力，将理解与生成统一进同一条评测流程；并完成评测集多语种化，度量模型跨语种的性能波动。"},{en:"Team engineering efficiency: automated large-scale evaluation via platform APIs and MCP tools, and built custom Lark productivity suites that significantly raised team throughput.",zh:"团队工程提效：通过平台 API 与 MCP 工具实现大规模评测自动化，并自研多款飞书效率工具，提升团队吞吐。"},{en:"Leadership & honors: led a 30-member cross-functional team to curate a “Visual Hard Problems” dataset — 1,000+ cases across expert domains such as art history, medical anatomy, and geology — surfacing critical multimodal failure cases and benchmarking 20+ frontier LLMs with 92% subjective-scoring agreement. Awarded a quarterly individual SPOT Bonus (Top 1% departmental honor) and an M+ performance rating (Top 10%).",zh:"团队与荣誉：带领 30 人跨职能团队构建「Visual Hard Problems」数据集，在艺术史、医学解剖、地质学等专家领域设计 1000+ 高难用例，定位前沿模型的多模态 Failure Case，对 20+ 前沿模型完成大规模基准测试，主观评分一致性达 92%；获季度个人 SPOT Bonus 奖项（部门前 1%）与 M+ 绩效（前 10%）。"}],tags:["VLM Eval","Benchmark Design","LLM-as-a-Judge","Eval Platform Infra","MCP","Team Lead"]},{company:"PwC China",role:{en:"Risk Assurance Associate",zh:"Risk Assurance Associate（风险与鉴证服务）"},location:{en:"Beijing, China",zh:"中国 · 北京"},period:"Nov 2024 – Mar 2025",summary:{en:"Served TMT and pre-IPO clients at the intersection of professional audit standards and AI, delivering IT audit, IT consulting, IT due diligence, and business-risk-analysis services.",zh:"面向 TMT 与 pre-IPO 客户，结合专业审计标准与 AI 技术，负责给客户提供专业 IT Audit、IT Consulting、IT Due Diligence、Business Risk Analysis等服务。"},highlights:[{en:"AI-driven audit: as tech lead of the PwC–Baidu AICA program, developed a RAG-based financial-audit assistant on Baidu ERNIE to automate retrieval and insight extraction from massive financial datasets, earning the Baidu Chief AI Architect certification.",zh:"AI 审计：作为普华永道-百度 AICA 技术负责人，基于百度文心（ERNIE）开发 RAG 财务审计助手，实现海量财务数据的自动检索与洞察抽取，获得百度首席 AI 架构师认证。"},{en:"Audit-standards agent: built an agent assistant for the engagement partner grounded in PwC internal and ISA auditing standards — DeepSeek R1 as the base model, with document vectorization and retrieval tuning — targeted for deployment inside the PwC network.",zh:"审计准则 Agent：对接主管合伙人需求，以 DeepSeek R1 为基座构建基于普华永道内部审计准则与 ISA 准则的 Agent 智能助手，完成文档向量化嵌入与检索调优，面向普华永道网络内部署。"},{en:"IT general controls (ITGC): led ITGC audits for US- and HK-listed internet companies such as Meituan and Weibo, across six control domains — control environment, access management, computer operations, program changes, program development, and cybersecurity — running interviews, walkthroughs, and control testing through to full workpapers; reviewed the OS and database layers spanning Linux/Windows, MySQL/TiDB/SQL Server, HBase/MongoDB, data warehouses, and distributed components.",zh:"ITGC 审计：负责美团、微博等多家美股、港股上市互联网公司的 IT 一般控制审计，覆盖控制环境、访问管理、计算机运行、程序变更、程序开发与网络安全六大控制域，完成访谈、穿行测试、控制测试到底稿编写的全流程；并执行操作系统与数据库层审查，涵盖 Linux/Windows、MySQL/TiDB/SQL Server、HBase/MongoDB、数据仓库与各类分布式组件。"},{en:"IT application controls (ITAC): owned ITAC across multiple TMT business lines — mapping business processes and data flows, identifying key automated-control points, drafting PBC lists, and executing walkthroughs and control tests to verify system integrity — including end-to-end security testing over complex capital flows for financial institutions.",zh:"ITAC 审计：负责多家 TMT 公司多条业务线的 IT 应用控制，包括绘制业务流程图与数据流转图、识别关键自动化控制点、起草 PBC 清单、执行穿行测试与控制测试以验证系统完整性；含对金融机构复杂资金流的端到端安全测试。"},{en:"Risk analytics & due diligence: ran business-risk analysis (BRA) and IT due diligence (ITDD) for TMT and pre-IPO clients, applying machine-learning, deep-learning, and econometric methods (Python, Power BI, Stata) to anti-fraud data and anomaly detection for risk insights.",zh:"风险分析与尽调：为 TMT 与拟 IPO 企业执行业务风险分析（BRA）与 IT 尽职调查（ITDD），应用机器学习、深度学习与计量经济学方法（Python、Power BI、Stata）分析反欺诈数据与异常情况，输出业务风险洞察。"},{en:"Digital & AI consulting: advised enterprises across construction, environmental, and internet sectors on AI-transformation roadmaps — designing digitalization scenario cards from real business needs and delivering end-to-end implementation plans with IT cost optimization and infrastructure scaling.",zh:"数字化与 AI 咨询：为建筑、环保、互联网等行业企业提供 AI 转型咨询——根据实际业务需求设计数字化场景卡片，制定端到端落地方案，并覆盖 IT 成本优化与基础设施扩容。"}],tags:["ITGC / ITAC","ITDD / BRA","RAG · Agent","CyberSecurity","IT/AI Consulting"]},{company:"PwC China",role:{en:"Global Technology Support Engineer (Internship)",zh:"Global Technology Support Engineer（实习）"},location:{en:"Beijing, China",zh:"中国 · 北京"},period:"Jul 2023 – Oct 2023",highlights:[{en:"Firmwide Corporate Services: provided infrastructure support (server maintenance, VPN, internal network protocols) and managed enterprise IT asset lifecycle to corporate security and scalability standards.",zh:"企业服务：维护全所基础设施（服务器、VPN、内网协议），按企业安全与扩展性标准管理 IT 资产全生命周期。"},{en:"Process automation: built automated workflows for employee offboarding, streamlining data backup and migration to improve data security and operational efficiency.",zh:"流程自动化：将员工离职流程自动化，规范数据备份与迁移，提升数据安全与运营效率。"},{en:"Security operations: took part in employee-device security reviews and firmwide anti-phishing drills, helping enforce endpoint-compliance baselines and raise security awareness across the firm.",zh:"安全运营：参与公司员工设备安全审查与防钓鱼演练等安全治理工作，协助落实终端安全合规基线，提升全员安全意识。"}],tags:["IT Infrastructure","Automation","Enterprise Security"]},{company:"National University of Singapore",role:{en:"Machine Learning Intern (Academic Exchange)",zh:"Machine Learning Intern（学术交流）"},location:{en:"Singapore",zh:"新加坡"},period:"Nov 2021 – Mar 2022",highlights:[{en:"Selected through competitive admission into the NUS machine-learning academic-exchange program; studied classical ML algorithms in depth — regression, SVM, decision trees, ensemble methods, clustering, and dimensionality reduction — down to their mathematical foundations.",zh:"入选 NUS 机器学习学术交流项目，系统深入学习回归、SVM、决策树、集成学习、聚类、降维等经典机器学习算法及其数学原理。"},{en:"Completed algorithm experiments by hand-writing implementations from scratch rather than calling libraries, validating each against real datasets — building a rigorous foundation in algorithm engineering.",zh:"以“不调库 + 手写实现”的方式完成各类机器学习算法实验，从零实现核心算法并在真实数据集上验证效果，打下扎实的算法工程基本功。"},{en:"Built an LSTM time-series temperature-prediction model end-to-end — from preprocessing and feature engineering of climate data through training and evaluation — completed independently.",zh:"端到端独立实现 LSTM 气温时间序列预测模型，覆盖气候数据清洗、特征工程、模型训练与评估全流程。"},{en:"Final research project graded with Distinction; ranked first in GPA among program participants.",zh:"结题项目获 Distinction 荣誉结项，个人 GPA 位列项目第一。"}],tags:["Classical ML","From-scratch Implementations","LSTM · Deep Learning"]}],uy=[{school:{en:"Ocean University of China",zh:"中国海洋大学"},degree:{en:"B.S. in Computer Science (GPA 3.2/4.0)",zh:"计算机科学与技术 学士（GPA 3.2/4.0）"},location:{en:"Qingdao, China",zh:"中国 · 青岛"},period:"Sep 2020 – Jul 2024",details:[{en:"Selected coursework: Machine Learning, Computer Vision, Data Analysis & Data Mining, Parallel & Distributed Computing, Scientific Computing in Python, Numerical Analysis, Linear Algebra, Operating Systems, Data Visualization, and Big Data Technologies.",zh:"主修课程：机器学习、计算机视觉、数据分析与数据挖掘、并行与分布式计算、Python 科学计算、数值分析、线性代数、操作系统、可视化技术、大数据技术原理与应用等。"},{en:"Honors: Academic Excellence Scholarship (Top 5%), Innovation & Entrepreneurship Scholarship, Excellent Graduation Thesis (Top 1%).",zh:"荣誉：学业优秀奖学金（前 5%）、创新创业奖学金、优秀毕业论文（前 1%）。"},{en:"Leadership: served four consecutive years as class monitor, organizing academic and extracurricular activities; named “Outstanding Student” and “Outstanding Student Leader”.",zh:"领导力：连续四年担任班长，组织学术与课外活动增强班级凝聚力；获「优秀学生」「优秀干部」称号。"},{en:"Thesis: “Blockchain-based Encrypted Cross-modal Retrieval Framework” — built a cross-modal neural network mapping text and image features into a shared hash space; implemented triple-hash encryption combining image/text MD5 digests with hybrid hashing; and enabled encrypted storage with privacy-preserving retrieval via Solidity smart contracts (PyTorch + Solidity).",zh:"毕业论文：《基于区块链的加密跨模态检索框架》——构建跨模态神经网络，将文本与图像特征映射至共享哈希空间；实现三重哈希加密，将图像/文本的 MD5 摘要与混合哈希结合；基于 Solidity 智能合约实现加密存储与隐私保护检索（PyTorch + Solidity）。"}]}],Ji=[{label:{en:"AI / ML",zh:"AI / ML"},items:[{en:"Benchmark design · model capability-gap mapping (foundation / agentic / VLM)",zh:"Benchmark 设计 · 模型能力缺口图谱（基模 / Agentic / VLM）"},{en:"Expert SFT / post-train / RL data construction · evidence-grounded multi-agent synthesis",zh:"专家 SFT / Post-train / RL 数据构造 · 证据依据的多智能体合成"},{en:"LLM / Agent-as-a-Judge · fine-grained judging metrics (response / files / trajectory)",zh:"LLM / Agent-as-a-Judge · 精细化判分 Metric（response / files / trajectory）"},{en:"DAG rubrics (Process / Result / Hurdle · narrative grading)",zh:"DAG Rubric（Process / Result / Hurdle · 叙事性判分）"},{en:"Adversarial QC (Actor-Critic-Monitor) · expert review loops",zh:"对抗式质检（Actor-Critic-Monitor）· 专家评审闭环"},{en:"Agent systems & harnesses (Claude Code, Codex, OpenHands…) · MCP",zh:"Agent 系统与 Harness（Claude Code、Codex、OpenHands 等）· MCP"},{en:"RAG architecture · model fine-tuning & deployment (Whisper, Qwen)",zh:"RAG 架构 · 模型微调与部署（Whisper、Qwen）"}]},{label:{en:"Infrastructure",zh:"基础设施"},items:[{en:"Eval orchestration & cloud-sandbox fan-out (Harbor · Daytona)",zh:"评测编排与云沙箱扇出（Harbor · Daytona）"},{en:"Data-delivery engineering: SKU / version lineage · QA gating & automated repair",zh:"数据交付工程：SKU / 版本血缘 · QA 门控与自动修复"},"OpenTelemetry · Kafka · ClickHouse","Elasticsearch · Haystack","Docker · Linux · Git"]},{label:{en:"Languages",zh:"编程语言"},items:["Python","Rust","C / C++","TypeScript / React"],columns:2},{label:{en:"Certifications",zh:"证书"},items:[{en:"PCAP — Certified Associate Python Programmer (Python Institute)",zh:"PCAP — Python Institute 认证 Python 工程师"},{en:"Alibaba Cloud Certified Professional — LLM (ACP)",zh:"阿里云 ACP 认证专业工程师 — 大模型（LLM）"}]},{label:{en:"Spoken",zh:"语言"},items:[{en:"Mandarin (native)",zh:"中文（母语）"},{en:"English (CEFR B2)",zh:"English（CEFR B2）"},{en:"Japanese (JLPT N2 · CEFR B2)",zh:"日语（JLPT N2 · CEFR B2）"},{en:"German (B1, learning)",zh:"德语（B1，在学）"}],columns:2}],cy=[{en:"Web3 security & MEV research (see Writing)",zh:"Web3 安全与 MEV 研究（见文章）"},{en:"ZK-ML research",zh:"ZK-ML 研究"},{en:"High-altitude trekking (5000 m+)",zh:"高海拔徒步（5000 米+）"},{en:"Alpine skiing",zh:"高山滑雪"},{en:"Cycling",zh:"骑行"},{en:"Landscape photography (see Optics)",zh:"风光摄影（见光影）"}],dy=["HUMANLAYA","FINTOPIA","BYTEDANCE","PWC","PWC INT.","NUS"];function hy(){const e=he();return a.jsxs("section",{id:"experience",className:"mx-auto mt-28 max-w-content px-6 md:mt-36",children:[a.jsx(ae,{children:a.jsx(Vr,{eyebrow:P.expEyebrow,title:P.experience,sub:P.experienceSub})}),a.jsx(ae,{delay:60,children:a.jsx("div",{className:"mt-8",children:a.jsx(ly,{items:Cu.map((t,n)=>({label:dy[n]??t.company.toUpperCase(),period:t.period})).reverse()})})}),a.jsx("div",{className:"mt-10 space-y-5",children:Cu.map((t,n)=>a.jsx(ae,{delay:Math.min(n,3)*60,children:a.jsxs("article",{className:"surface lift",children:[a.jsx(Vn,{left:`File: EXP-${String(n+1).padStart(2,"0")}`,right:`${t.period} · ${e(t.location)}`}),a.jsxs("div",{className:"p-7 md:p-9",children:[a.jsxs("div",{className:"flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between",children:[a.jsxs("h3",{className:"text-xl tracking-tight",children:[a.jsx("span",{className:"font-semibold",children:t.company}),a.jsxs("span",{className:"text-muted-foreground",children:[" · ",e(t.role)]})]}),a.jsx("p",{className:"shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-brand sm:text-right",children:"Rev A1"})]}),t.summary&&a.jsx("p",{className:"mt-4 leading-relaxed text-muted-foreground [text-wrap:pretty]",children:e(t.summary)}),a.jsx("div",{className:"mt-4 md:columns-2 md:gap-10",children:t.highlights.map((r,o)=>typeof r=="object"&&"items"in r?a.jsxs("section",{className:"mb-5 break-inside-avoid",children:[a.jsxs("h4",{className:"font-mono text-xs font-semibold tracking-[0.08em] text-brand",children:[a.jsx("span",{className:"mr-1.5 opacity-60",children:"//"}),e(r.title)]}),a.jsx("ul",{className:"mt-2.5 space-y-2.5",children:r.items.map((i,s)=>a.jsx("li",{className:"relative pl-5 text-[0.95rem] leading-relaxed text-foreground/85 before:absolute before:left-0 before:top-[0.62em] before:h-1.5 before:w-1.5 before:bg-brand/80",children:e(i)},s))})]},o):a.jsx("div",{className:"relative mb-2.5 max-w-3xl pl-5 text-[0.95rem] leading-relaxed text-foreground/85 before:absolute before:left-0 before:top-[0.62em] before:h-1.5 before:w-1.5 before:bg-brand/80",children:e(r)},o))}),a.jsx("div",{className:"mt-6 flex flex-wrap gap-2",children:t.tags.map(r=>a.jsx(Zs,{children:r},r))})]})]})},`${t.company}-${t.period}`))})]})}function py(){const e=he(),{lang:t}=Hr();return a.jsxs("section",{id:"education",className:"mx-auto mt-28 max-w-content px-6 md:mt-36",children:[a.jsx(ae,{children:a.jsx(Vr,{eyebrow:P.eduEyebrow,title:P.education})}),a.jsx("div",{className:"mt-12 space-y-5",children:uy.map((n,r)=>a.jsx(ae,{children:a.jsxs("article",{className:"surface",children:[a.jsx(Vn,{left:`File: EDU-${String(r+1).padStart(2,"0")}`,right:`${n.period} · ${e(n.location)}`}),a.jsxs("div",{className:"p-7 md:p-9",children:[a.jsx("h3",{className:"text-xl font-semibold tracking-tight",children:e(n.school)}),a.jsx("p",{className:"mt-1.5 text-muted-foreground",children:e(n.degree)}),a.jsx("div",{className:"mt-4 grid gap-x-10 gap-y-2.5 md:grid-cols-2",children:[n.details.slice(0,Math.ceil(n.details.length/2)),n.details.slice(Math.ceil(n.details.length/2))].map((o,i)=>a.jsx("ul",{className:"space-y-2.5",children:o.map((s,l)=>a.jsx("li",{className:"relative pl-5 text-[0.95rem] leading-relaxed text-foreground/80 before:absolute before:left-0 before:top-[0.62em] before:h-1.5 before:w-1.5 before:bg-brand/80",children:e(s)},l))},i))})]})]})},r))}),a.jsx(ae,{children:a.jsx("h2",{className:`mt-16 font-semibold ${t==="en"?"font-mono uppercase tracking-wide text-xl sm:text-2xl":"tracking-tight text-3xl sm:text-4xl"}`,children:e(P.skillsInterests)})}),a.jsxs("div",{className:"mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2",children:[Ji.map((n,r)=>a.jsx(ae,{delay:r%2*60,children:a.jsxs("div",{className:"surface h-full p-7",children:[a.jsxs("h3",{className:"font-mono text-xs uppercase tracking-[0.18em] text-brand",children:[String(r+1).padStart(2,"0")," · ",e(n.label)]}),a.jsx("ul",{className:n.columns===2?"mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2":"mt-4 space-y-2",children:n.items.map((o,i)=>a.jsx("li",{className:"text-[0.95rem] text-foreground/85",children:e(o)},i))})]})},r)),a.jsx(ae,{delay:Ji.length%2*60,children:a.jsxs("div",{className:"surface h-full p-7",children:[a.jsxs("h3",{className:"font-mono text-xs uppercase tracking-[0.18em] text-brand",children:[String(Ji.length+1).padStart(2,"0")," · ",e(P.beyondWork)]}),a.jsx("div",{className:"mt-4 flex flex-wrap gap-2",children:cy.map((n,r)=>a.jsx("span",{className:"chip",children:e(n)},r))})]})})]})]})}function fy(){const e=he(),t=new Date().getFullYear(),n=new Date(Be.startDate),r=Math.floor((Date.now()-n.getTime())/864e5);return a.jsxs("footer",{className:"mx-auto mt-32 max-w-content px-6 pb-16 md:mt-40",children:[a.jsx("div",{className:"hr-line"}),a.jsxs("div",{className:"flex flex-col items-start gap-8 pt-12 sm:flex-row sm:items-center sm:justify-between",children:[a.jsxs("div",{children:[a.jsx(rt,{to:"/",className:"text-lg font-semibold tracking-tight",children:"Levi Wang"}),a.jsx("p",{className:"mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground",children:e(Be.bio)})]}),a.jsx(ih,{})]}),a.jsxs("div",{className:"mt-10 flex items-center justify-between gap-4",children:[a.jsxs("div",{className:"flex flex-col gap-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground sm:flex-row sm:items-center sm:gap-4",children:[a.jsxs("span",{children:["© ",t," Levi Wang"]}),a.jsx("span",{className:"hidden sm:inline opacity-40",children:"·"}),a.jsxs("span",{children:[e(P.runningFor)," ",r," ",e(P.days)]})]}),a.jsx(Jo,{spin:!0,className:"h-10 w-10 shrink-0 text-brand/60"})]})]})}function gy(){return a.jsxs("div",{"aria-hidden":!0,className:"pointer-events-none fixed inset-0 -z-10 overflow-hidden",children:[a.jsx("div",{className:"ref-grid tech-grid absolute inset-0"}),a.jsxs("svg",{className:"absolute -bottom-40 -right-40 h-[36rem] w-[36rem] text-foreground",viewBox:"0 0 600 600",fill:"none",children:[[280,220,160,100].map(e=>a.jsx("circle",{cx:"300",cy:"300",r:e,stroke:"currentColor",strokeOpacity:"0.08",strokeDasharray:"4 6"},e)),a.jsx("path",{d:"M20 300H580M300 20V580",stroke:"currentColor",strokeOpacity:"0.06"})]}),a.jsx("div",{className:"grain-overlay absolute inset-0 opacity-[0.035] dark:opacity-[0.05] mix-blend-overlay"})]})}function my(){const{pathname:e}=mn();return q.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[e]),null}function Xs({to:e,children:t}){return a.jsx(rt,{to:e,className:"inline-flex items-center gap-2 border border-line px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] transition-colors hover:border-foreground/60 hover:bg-surface",children:t})}const Eu=[{id:"benchmark-synthesis",name:{en:"Benchmark-Synthesis Pipeline (18 Stages)",zh:"基准合成流水线（18 阶段）"},description:{en:"Solo-architected, greenfield 18-stage pipeline that turns expert workspaces into hard agentic benchmark items: dual-model evidence extraction with intersection confirmation and a deterministic quote gate, an embedding-routed 76-pack/5-domain skill corpus, DAG rubrics, a blind-then-hinted trial-solver stage, human review windows, and QA-gated export — end-to-end closed ~27 hours after git init, 362 passing unit tests.",zh:"独立搭建 18 阶段合成流水线，将专家 Workspace 转为高难度 Agentic 考题：双模型证据抽取取交集、确定性引用门、Embedding 路由的 76 包/5 领域技能语料、DAG Rubric、先盲解后提示重解、人工复核窗口与 QA 门控导出。git init 后约 27 小时端到端跑通，362 个单测全绿。"},tag:{en:"Flagship · Synthesis",zh:"旗舰 · 合成"}},{id:"difficulty-calibration",name:{en:"Benchmark Difficulty Calibration",zh:"基准难度校准"},description:{en:"A closed calibration loop for benchmark difficulty: a leak-proof isolated eval harness, a 0.5–0.7 acceptance band, and controlled experiments (solver-effort confound +0.159 on a control group; rework effect −0.139 per round) steered a 134-question legal benchmark from a mean of 0.821 to 0.648. Two judge bugs were found and fixed during the campaign.",zh:"难度校准闭环：隔离防泄漏评测 Harness、0.5–0.7 验收带、对照实验（对照组分离解题档位混淆 +0.159、单轮返修净效应 −0.139），将 134 题法律基准均分从 0.821 校准至 0.648；过程中修复两个 Judge 缺陷。"},tag:{en:"Evaluation Science",zh:"评测科学"}},{id:"eval-platform",name:{en:"Verifier System & Agent-as-Judge Research",zh:"Verifier 系统与 Agent-as-Judge 研究"},description:{en:"Rubric-based grading infrastructure for office-document agent tasks. Combined deterministic metrics, visual evidence collection, and LLM/agent judges; ran a controlled judge-vs-metric study on precision, recall, agreement, cost, and latency before product delivery.",zh:"面向 Office 文档 Agent 任务的 Rubric 评分基础设施：组合确定性 Metric、视觉证据采集与 LLM/Agent Judge；交付前完成 Judge vs Metric 对照实验，比较准确率、召回率、一致率、成本与时延。"},link:"/Agentkit.html",tag:{en:"Verifier · Evaluation",zh:"Verifier · 评测"}},{id:"adversarial-verification",name:{en:"Adversarial Verification at Scale",zh:"规模化对抗式验证"},description:{en:"Reusable multi-agent verification workflows: a 51-agent code review (6 independent finders, 45 candidates, execution-backed verification, 40 confirmed defects with introducing-commit attribution), and a 207-worker repair pipeline that checks reference answers score full marks against their own rubrics.",zh:"可复用的 Multi-Agent 验证流程：51 个 Agent 的代码审查（6 个独立 finder、45 个候选缺陷、执行复现确认 40 个并定位引入 commit），以及 207-worker 修复流水线，强制「参考答案在自身 Rubric 上必须满分」的不变量。"},tag:{en:"Multi-Agent Systems",zh:"多智能体系统"}},{id:"syndata-pipeline",name:{en:"Synthetic Eval-Data Pipeline (Gen 1)",zh:"合成评测数据流水线（第一代）"},description:{en:"The first-generation multi-agent synthesis system that converts expert workspaces into hard, evidence-grounded agentic exam items across finance, consulting, and legal domains — evidence ledgers, cross-model separation, anti-leakage review, and delivery gates. Later superseded by the 18-stage rewrite above.",zh:"第一代 Multi-Agent 合成系统：将专家 Workspace 转为金融、咨询、法律领域的高难度证据约束考题，含证据账本、跨模型隔离、防泄漏审查与交付门控；后被 18 阶段重写版取代。"},tag:{en:"Synthetic Data",zh:"合成数据"}},{id:"harbor-eval",name:{en:"Harbor — Eval Execution Framework",zh:"Harbor — 评测执行框架"},description:{en:"Operated and extended a containerized eval framework across six model families and five agent harnesses, with cloud fan-out, smoke-test gates, rerun-in-place handling, and cost/latency accounting. A reusable agent integration was re-landed cleanly on upstream v0.17.0 — one 766-insertion commit, 12 unit tests, touching upstream code in exactly 2 registry lines.",zh:"维护并扩展容器化评测框架：覆盖六个模型族 × 五种 Agent Harness，支持云端 fan-out、冒烟门控、失败原地重跑与成本/时延核算；一个可复用 Agent 集成干净落回上游 v0.17.0（单 commit 766 行插入、12 个单测、仅改 2 行注册代码）。"},link:"https://github.com/levizwang/harbor",tag:{en:"Open Source",zh:"开源"}},{id:"medical-acm",name:{en:"Adversarial QC for Synthetic Clinical Data",zh:"合成临床数据的对抗式质检"},description:{en:"Designed an Actor-Critic-Monitor loop for synthetic medical-record cases: generator, adversarial reviewer, and arbiter. The durable output is the defect taxonomy: derived-value drift, cross-file conflict, timeline impossibility, template contamination, metadata leakage, and rubric answerability.",zh:"设计合成病历的 Actor-Critic-Monitor 闭环：生成、对抗审查、仲裁；沉淀缺陷分类体系——派生值漂移、跨文件冲突、时间线不可能、模板污染、元数据泄漏与 Rubric 可回答性。"},tag:{en:"Adversarial QC",zh:"对抗式质检"}},{id:"office-harnesses",name:{en:"Multi-modal Office Evaluation Harnesses",zh:"多模态 Office 评测 Harness"},description:{en:"Built per-modality evaluation paths for Excel, Word, PPT, and PDF tasks with multi-vendor judge backends, screenshot/evidence collection, output reconstruction for models without native files-out, and reason guards for missing or unreadable evidence.",zh:"为 Excel、Word、PPT、PDF 四类任务分别搭建评测路径：多厂商 Judge 后端、截图与证据采集、无原生 files-out 模型的输出重建、证据缺失时的 Reason Guard 兜底。"},tag:{en:"Office Agents",zh:"Office 智能体"}},{id:"toolathlon-mcp",name:{en:"MCP Tool Mocking for RL Agents",zh:"面向 RL Agent 的 MCP 工具 Mock"},description:{en:"Adapted a tool-use benchmark for large-scale RL by replacing credential-heavy live MCP services with realistic mocks. The design goal was trajectory-level parity: enough behavioral fidelity for training and evaluation without exposing accounts or live systems.",zh:"将 Tool-use Benchmark 改造为可跑大规模 RL 的版本：以高保真 Mock 替代需真实凭据的在线 MCP 服务，目标轨迹级一致——训练与评测照常运行，不接触真实账号与线上系统。"},tag:{en:"RL Infrastructure",zh:"RL 基础设施"}},{id:"rag-eval",name:{en:"RAG Evaluation (RAGAS)",zh:"RAG 评测（RAGAS）"},description:{en:"Cross-border RAG systems with an automated RAGAS evaluation loop keeping faithfulness and retrieval precision honest in production; includes a visualization report of the evaluation run.",zh:"跨境业务 RAG 系统，配 RAGAS 自动评测闭环，监控线上忠实度与检索精度；附评测项目可视化报告。"},link:"/ragas.html",tag:{en:"RAG",zh:"RAG"}},{id:"nvwa",name:{en:"Office-Document Synthesis Framework",zh:"Office 文档合成框架"},description:{en:"A layered “1 seed → N tasks” office-document synthesis framework with automated checkers, LLM QC/repair, and seed-provenance tracing, built to beat the low-diversity failure mode of single-shot generation.",zh:"分层「1 种子 → N 题」Office 文档合成框架：自动 Checker、LLM 质检/修复与种子溯源，解决单轮生成的低多样性失效。"},tag:{en:"Synthetic Data",zh:"合成数据"}},{id:"solana-mev",name:{en:"Solana MEV Bot",zh:"Solana MEV 机器人"},description:{en:"A personal Web3 side-project: a Solana MEV searcher (scout → pricing → cross-DEX arbitrage → Jito bundles). Written up as an 8-part technical series — see Writing.",zh:"业余 Web3 项目：Solana MEV Searcher（监听 → 定价 → 跨 DEX 套利 → Jito Bundle）；复盘为 8 篇技术系列，见文章。"},link:"https://github.com/levizwang/Solana-MEV",tag:{en:"Web3 · interest",zh:"Web3 · 兴趣"}}];function yy({project:e}){return a.jsx("div",{className:"aspect-[16/10] w-full overflow-hidden rounded-[2px] border border-line bg-surface",children:a.jsx(vi,{id:e.id,className:"h-full w-full"})})}function vy({project:e,expanded:t=!1}){var l;const n=he(),r=n(e.name),o=(l=e.link)==null?void 0:l.startsWith("http"),i=a.jsxs(a.Fragment,{children:[a.jsx(yy,{project:e}),a.jsxs("div",{className:"mt-5 flex items-baseline justify-between gap-3",children:[a.jsx("h3",{className:"text-lg font-semibold tracking-tight",children:r}),e.link&&a.jsx("span",{className:"shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5",children:"↗"})]}),e.tag&&a.jsx("span",{className:"mt-1 block font-mono text-[11px] text-brand",children:n(e.tag)}),a.jsx("p",{className:`mt-2 text-sm leading-relaxed text-muted-foreground ${t?"":"line-clamp-4"}`,children:n(e.description)})]}),s="surface lift group flex h-full flex-col p-5";return e.link?a.jsx("a",{href:e.link,target:o?"_blank":void 0,rel:o?"noopener noreferrer":void 0,className:s,children:i}):a.jsx("div",{className:s,children:i})}function wy({limit:e,showViewAll:t=!0}){const n=he(),r=e?Eu.slice(0,e):Eu;return a.jsxs("section",{id:"projects",className:`mx-auto max-w-content px-6 ${t?"mt-28 md:mt-36":"mt-8 md:mt-12"}`,children:[a.jsx(ae,{children:a.jsx(Vr,{eyebrow:P.workEyebrow,title:t?P.selectedWork:P.projectsTitle,size:"page"})}),a.jsx("div",{className:"mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",children:r.map((o,i)=>a.jsx(ae,{delay:i%3*70,children:a.jsx(vy,{project:o,expanded:!t})},o.id))}),t&&a.jsx("div",{className:"mt-12 flex justify-center",children:a.jsxs(Xs,{to:"/projects",children:[n(P.viewAllProjects)," ",a.jsx("span",{"aria-hidden":!0,children:"→"})]})})]})}function xy(){return a.jsx(wy,{showViewAll:!1})}const by=[{eyebrow:{en:"Evaluation science",zh:"评测科学"},title:{en:"Calibrating benchmark difficulty with controlled experiments.",zh:"用对照实验校准 Benchmark 难度。"},body:{en:"Every synthesis team gets told its output is too easy and too templated, and reworking on feel rarely converges. I set a quantitative acceptance band (solver mean 0.5–0.7), built an isolated eval harness that keeps rubrics and reference answers out of the sandbox by construction, and used a control group of untouched packs to separate real difficulty changes from measurement drift: the solver effort setting alone moved scores by +0.159, while one rework round contributed −0.139. After two rounds, a 134-question legal benchmark finished at a mean of 0.648, inside the band. The judge bugs found during the campaign were fixed with regression tests.",zh:"将验收标准量化为解题均分 0.5–0.7 的验收带，搭建从构造上隔离 Rubric 与参考答案的评测 Harness，并以不返修的题包作对照组，分离真实难度变化与测量漂移：解题档位混淆 +0.159，单轮返修净效应 −0.139。两轮返修后，134 题法律基准均分 0.648 落入带内；过程中发现的两处 Judge 缺陷均修复并补回归测试。"},specs:[{k:"0.5–0.7",v:{en:"the acceptance band difficulty must land in",zh:"难度必须落进的验收带"}},{k:"+0.159",v:{en:"solver-effort confound measured on a control group",zh:"对照组测出的解题档位混淆"}},{k:"−0.139",v:{en:"isolated net effect of one rework round",zh:"单轮返修的隔离净效应"}},{k:"0.648",v:{en:"final mean of the 134-question benchmark",zh:"134 题基准的最终均分"}}],figure:"difficulty-calibration",figRight:"n = 134 · units: score",article:"benchmark-difficulty",tags:["Difficulty calibration","Controlled experiments","Leak-proof harness"]},{eyebrow:{en:"Judge reliability",zh:"Judge 可靠性"},title:{en:"Testing the judge before trusting its scores.",zh:"先测 Judge，再信分数。"},body:{en:"In an LLM-judged eval, a judge defect looks exactly like a model defect in the score data. Two cases from production: the judge zeroed items whose rubrics were 91–93% satisfied because it read legitimate in-material citations as answer leakage, and for a stretch it silently dropped rubric dependency fields without anything crashing. The standing defenses now include false-kill arbitration, schema round-trip tests, line-by-line re-checks of scores against the actual artifact, and an oracle check that reference answers score full marks against their own rubrics.",zh:"LLM 判分的评测里，Judge 缺陷在分数数据上与模型缺陷无法区分。生产中发现并修复两类缺陷：Rubric 正向命中 91–93% 的题被误判为答案泄漏而归零；Rubric DAG 依赖字段被静默丢弃且无任何报错。现行防线包括防误杀仲裁、Schema 往返测试、对照产物逐行复核判分，以及「参考答案必须满分」的 Oracle 检查。"},specs:[{k:"False-kill",v:{en:"audit fatal zeroes before trusting them",zh:"归零分数先经仲裁再采信"}},{k:"Round-trip",v:{en:"test that the judge sees every rubric field",zh:"确认 Judge 读到每个 Rubric 字段"}},{k:"Re-check",v:{en:"re-verify scored rows against the artifact",zh:"对照产物逐行复核判分"}},{k:"Oracle",v:{en:"reference answers must score full marks",zh:"参考答案必须满分"}}],figure:"judge-reliability",figRight:"Units: rubric hits",article:"judge-reliability",tags:["Judge debugging","Hallucination re-check","Oracle validation"]},{eyebrow:{en:"Evidence-grounded synthesis",zh:"证据约束合成"},title:{en:"Turning expert files into eval tasks that cannot be guessed.",zh:"基于证据约束生成无法蒙对的评测任务。"},body:{en:"The core idea: the generator is not trusted. Source files are first converted into locator-bound evidence, then independent roles draft, critique, verify, and package the task. Before delivery, the task is checked for answer leakage, unsupported claims, and guessability. The contract is what matters: every answerable claim must point back to source evidence, and removing the files should make the task fail.",zh:"核心原则是不信任生成器：源文件先抽取为绑定 Locator 的证据，再由相互独立的角色分别出题、挑刺、核验与打包；交付前过答案泄漏、无证据断言、可蒙性三道检查。内部节点结构与 prompt 配方不公开，对外重要的是契约：每个可回答的断言必须能指回源证据，抽走文件则任务必然失败。"},specs:[{k:"Evidence first",v:{en:"locator-bound facts before prompt drafting",zh:"先绑定证据，再写题面"}},{k:"Role separation",v:{en:"author, verifier, judge, and QC kept independent",zh:"出题、核验、判分、质检角色隔离"}},{k:"Anti-guessing",v:{en:"tasks must depend on reading the files",zh:"题目必须依赖真实读文件"}},{k:"Delivery gate",v:{en:"leakage, unsupported-claim, and rubric checks",zh:"泄漏、无证据断言与 Rubric 门控"}}],figure:"evidence-ledger",figRight:"Units: claims",article:"evidence-ledger",tags:["Evidence ledger","Anti-leakage","Synthetic eval data"]},{eyebrow:{en:"Multi-agent verification",zh:"Multi-Agent 验证"},title:{en:"Reviewing 17 commits with 51 agents.",zh:"用 51 个 Agent 审 17 个 commit。"},body:{en:"A teammate landed a 17-commit hardening series on a fork of my pipeline. Instead of reading the 216-file diff by hand, I ran a review workflow: six finders with different focuses proposed 45 candidate defects, and each candidate went to an independent verifier that had to reproduce it by execution (a failing test or a real exception) before it counted. 40 were confirmed, and each was attributed to its introducing commit with git log -S. The most useful finding was that the hardening commits themselves had introduced fail-open regressions and answer leakage, the defect classes they were meant to remove.",zh:"同事在我的 Pipeline fork 上提交 17 个加固 commit，审查不走人工通读：6 个关注点不同的 finder 提出 45 个候选缺陷，每个候选由独立 verifier 执行复现（失败测试或真实异常）才计数，最终确认 40 个，并用 git log -S 定位到引入 commit。最有价值的发现是这批加固 commit 自身引入了 fail-open 回归与答案泄漏——正是它要消除的那类缺陷。"},specs:[{k:"6 finders",v:{en:"independent lenses over the same diff",zh:"同一份 diff 的 6 个独立审查视角"}},{k:"45 → 40",v:{en:"candidates confirmed by execution, not plausibility",zh:"候选缺陷以执行复现确认"}},{k:"git log -S",v:{en:"every defect attributed to its introducing commit",zh:"每个缺陷定位到引入 commit"}},{k:"~59 min",v:{en:"wall-clock for the full review",zh:"整个审查的墙钟时间"}}],figure:"adversarial-code-review",figRight:"n = 51 agents",article:"adversarial-code-review",tags:["Finder/verifier split","Execution-backed repro","Adversarial review"]},{eyebrow:{en:"Adversarial QC",zh:"对抗式 QC"},title:{en:"Adversarial QC for self-generated data.",zh:"对自生成数据做对抗式 QC。"},body:{en:"For synthetic clinical and office-document data, I used an adversarial loop rather than trusting one generator pass. A generator creates the case, a critic turns defects into structured findings, and an arbiter decides whether to revise, rework, or pass. The durable part is not the medical content itself; it is the defect taxonomy and the feedback loop: derived-value drift, cross-file contradictions, impossible timelines, template contamination, metadata leakage, and rubrics that cannot be answered from the files.",zh:"合成临床与 Office 文档数据不信任单次生成：Actor 产出病例或任务，Critic 将缺陷转为结构化 findings，Monitor 裁定修订、返工或放行。可复用的产出是缺陷分类与反馈闭环：派生值漂移、跨文件矛盾、时间线不可能、模板污染、元数据泄漏，以及无法从文件回答的 Rubric。"},specs:[{k:"Actor",v:{en:"generate realistic document cases",zh:"生成真实感文档案例"}},{k:"Critic",v:{en:"convert defects into structured findings",zh:"把缺陷转成结构化 findings"}},{k:"Monitor",v:{en:"decide revise, rework, or pass",zh:"裁定修订、返工或放行"}},{k:"Memory",v:{en:"turn repeated failures into reusable detectors",zh:"将高频缺陷固化为检测器"}}],figure:"adversarial-qc",figRight:"Loop: Actor · Critic · Monitor",article:"adversarial-qc",tags:["Actor-Critic-Monitor","Bad-pattern detectors","Synthetic data"]}];function ky(){const e=he();return a.jsx("section",{className:"mx-auto mt-28 max-w-content px-6 md:mt-40",children:a.jsx("div",{className:"space-y-6",children:by.map((t,n)=>a.jsx(ae,{children:a.jsxs("article",{className:"surface overflow-hidden",children:[a.jsxs("div",{className:"strip",children:[a.jsxs("span",{className:"truncate",children:["Fig. ",String(n+3).padStart(2,"0")," — ",e(t.eyebrow)]}),a.jsx("span",{className:"shrink-0",children:t.figRight})]}),a.jsx("div",{className:"ref-grid flex justify-center border-b border-line px-6 py-7 md:py-9",children:a.jsx(vi,{id:t.figure,className:"max-h-[300px] w-full max-w-[52rem] md:max-h-[340px]"})}),a.jsxs("div",{className:"grid gap-px md:grid-cols-[1.35fr_1fr]",children:[a.jsxs("div",{className:"p-8 md:p-11",children:[a.jsx("p",{className:"eyebrow",children:e(t.eyebrow)}),a.jsx("h3",{className:"mt-3 text-2xl font-semibold leading-tight tracking-tight text-balance sm:text-[1.7rem]",children:e(t.title)}),a.jsx("p",{className:"mt-4 leading-relaxed text-muted-foreground",children:e(t.body)}),a.jsx("div",{className:"mt-6 flex flex-wrap items-center gap-2",children:t.tags.map(r=>a.jsx(Zs,{children:r},r))}),a.jsxs("div",{className:"mt-6 flex flex-wrap items-center gap-x-6 gap-y-2",children:[t.article&&a.jsxs(rt,{to:`/post/${t.article}`,className:"group/link inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-foreground",children:[e(P.readDeepDive),a.jsx("span",{"aria-hidden":!0,className:"transition-transform group-hover/link:translate-x-0.5",children:"→"})]}),t.link&&a.jsxs("a",{href:t.link.href,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-foreground",children:[e(t.link.label)," ",a.jsx("span",{"aria-hidden":!0,children:"↗"})]})]})]}),a.jsxs("div",{className:"border-t border-line bg-background/40 md:border-l md:border-t-0",children:[a.jsxs("div",{className:"strip",children:[a.jsx("span",{children:"Spec sheet"}),a.jsx("span",{children:"Rev A1"})]}),a.jsx("dl",{className:"space-y-6 p-8 md:p-9",children:t.specs.map((r,o)=>a.jsxs("div",{children:[a.jsx("dt",{className:"font-mono text-xl font-semibold tracking-tight tabular-nums",children:r.k}),a.jsx("dd",{className:"mt-1 text-sm text-muted-foreground",children:e(r.v)})]},o))})]})]})]})},n))})})}const qy=`<h1>Benchmark Difficulty Is a Measurable Property</h1>
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
`,Sy=`<h1>基准难度是一个可测量的属性</h1>
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
`,_y=`<h1>Your Judge Is Part of the System Under Test</h1>
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
`,jy=`<h1>裁判也是被测系统的一部分</h1>
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
`,Ay=`<h1>The 51-Agent Code Review</h1>
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
`,Cy=`<h1>51 个 Agent 的代码审查</h1>
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
`,Ey=`<h1>Rubrics as DAGs: Scoring Process, Not Just Outcomes</h1>
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
`,Ty=`<h1>把 Rubric 做成 DAG：给过程打分，而不只是结果</h1>
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
`,Iy=`<h1>The Evidence Ledger: Making an LLM Write Questions It Can't Fabricate</h1>
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
`,My=`<h1>证据账本：让 LLM 写出它无法编造的题目</h1>
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
`,Ny=`<h1>Don't Trust Data You Generated Yourself: Adversarial QC for Synthetic Data</h1>
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
`,Ly=`<h1>别信你自己生成的数据：合成数据的对抗式质检</h1>
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
`,Oy=`<h1>Your Benchmark Is Lying to You: Validity Failure Modes in Agentic Eval Data</h1>
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
`,Py=`<h1>Agent-as-Judge vs. a Metric You Wrote by Hand</h1>
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
`,Fy=`<h1>The Plumbing of LLM Evaluation: Running Six Model Families on One Harness</h1>
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
`,Ry=`<h1>你的基准在骗你：智能体评测数据的有效性失效模式</h1>
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
`,zy=`<h1>Agent-as-Judge 还是你手写的 Metric？一次诚实的对比</h1>
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
`,Dy=`<h1>大模型评测的「管道工程」：在一个 harness 上跑六个模型族</h1>
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
`,$y=`<p>This is a consolidated, eight-part deep dive into building a <strong>Solana MEV searcher</strong> — from the &quot;Dark Forest&quot; laws of the chain down to a working architecture. It walks through the control plane, the network-wide inventory, sub-millisecond monitoring (scout), AMM pricing models, the cross-DEX arbitrage strategy, Jito bundles, and risk control. Each part below began as a standalone article; they're collected here as a single guide.</p>
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
`,By=`<h1>Detailed Explanation of Blockchain</h1>
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
`,Ga=[{id:"benchmark-difficulty",title:{en:"Benchmark Difficulty Is a Measurable Property",zh:"基准难度是可以测出来的"},excerpt:{en:"How we calibrated a legal benchmark into a 0.5–0.7 acceptance band: an isolated leak-proof eval harness, control-group experiments that separate rework effects from solver-effort confounds, and the judge bugs found on the way.",zh:"将 134 题法律基准校准进 0.5–0.7 验收带的全过程：隔离防泄漏评测 Harness、对照实验分离返修效应与解题档位混淆，以及途中发现的两个 Judge 缺陷。"},content:{en:qy,zh:Sy},date:"Jul 10, 2026",category:"AI Evaluation",tags:["LLM Eval","Evaluation Science","Benchmarks"]},{id:"judge-reliability",title:{en:"Your Judge Is Part of the System Under Test",zh:"裁判也是被测系统的一部分"},excerpt:{en:"Four judge failures from production: fatal false-kills on legitimate citations, silently dropped rubric fields, scores citing evidence that does not exist, and a harness configuration that changed model behavior. Plus the checks we now run for each.",zh:"生产中的四类 Judge 失效：合法引用被误杀归零、Rubric 字段被静默丢弃、引用不存在的证据判分、一处改变模型行为的 Harness 配置；以及对应的常驻检查。"},content:{en:_y,zh:jy},date:"Jul 06, 2026",category:"AI Evaluation",tags:["LLM-as-judge","LLM Eval","Reliability"]},{id:"adversarial-code-review",title:{en:"The 51-Agent Code Review",zh:"51 个 Agent 的代码审查"},excerpt:{en:"How I reviewed a teammate's 17-commit series with a 51-agent workflow: six finders proposed 45 candidate defects, independent verifiers reproduced each one by execution, and 40 were confirmed with introducing-commit attribution.",zh:"用 51 个 Agent 审查同事的 17 个 commit：6 个 finder 提出 45 个候选缺陷，独立 verifier 逐个执行复现，确认 40 个并定位引入 commit。"},content:{en:Ay,zh:Cy},date:"Jul 02, 2026",category:"AI Evaluation",tags:["Multi-Agent","Code Review","Verification"]},{id:"rubric-dags",title:{en:"Rubrics as DAGs: Scoring Process, Not Just Outcomes",zh:"把 Rubric 做成 DAG：给过程打分，而不只是结果"},excerpt:{en:"Flat rubrics give points to guessed numbers and hallucinated steps. A schema with process/outcome typing, dependency gating, hurdle rows, and code-enforced floors fixes most of that. This post walks through the design and the repair semantics.",zh:"平铺 Rubric 会给蒙对的数字和幻觉步骤发分。过程/结果分型、依赖门控、Hurdle 行与代码强制下限能解决大部分问题；本文讲这套 Schema 的设计与修复语义。"},content:{en:Ey,zh:Ty},date:"Jun 30, 2026",category:"AI Evaluation",tags:["Rubric Design","LLM Eval","LLM-as-judge"]},{id:"evidence-ledger",title:{en:"The Evidence Ledger: Making an LLM Write Questions It Can't Fabricate",zh:"证据账本：让 LLM 写出它编不了的题目"},excerpt:{en:"Hallucinating answers is bad; hallucinating questions silently rots your benchmark. How a locator-bound, cross-vendor-verified evidence ledger makes anti-hallucination structural instead of hopeful.",zh:"答案编错能查出来，题目编错会让 Benchmark 悄悄失效。证据账本将每条证据绑定 Locator 并跨厂商核验，把防幻觉变成结构保证。"},content:{en:Iy,zh:My},date:"Jun 13, 2026",category:"AI Evaluation",tags:["LLM Eval","Synthetic Data","Anti-Hallucination"]},{id:"eval-validity",title:{en:"Your Benchmark Is Lying to You: Validity Failure Modes in Agentic Eval Data",zh:"你的基准在骗你：智能体评测数据的有效性失效模式"},excerpt:{en:"Generation is easy; validity is hard. The three quiet failure modes — guessability, prompt↔rubric leakage, judge noise — and how to defend against each.",zh:"生成容易，有效难。三种静默失效模式：可蒙对、题面与 Rubric 互相泄漏、Judge 噪声，以及各自的防法。"},content:{en:Oy,zh:Ry},date:"Jun 12, 2026",category:"AI Evaluation",tags:["LLM Eval","Agents","Synthetic Data"]},{id:"adversarial-qc",title:{en:"Don't Trust Data You Generated Yourself: Adversarial QC for Synthetic Data",zh:"别信你自己生成的数据：合成数据的对抗式质检"},excerpt:{en:"Synthetic data is plausible by construction — which is exactly the failure. The Actor-Critic-Monitor loop, and the concrete taxonomy of lies self-generated data tells: derived-value drift, cross-file conflicts, impossible timelines, template contamination, provenance leakage.",zh:"合成数据的问题在于看起来总是合理。本文讲 Actor-Critic-Monitor 闭环，以及自生成数据的缺陷分类：派生值漂移、跨文件冲突、时间线不可能、模板污染、来源泄漏。"},content:{en:Ny,zh:Ly},date:"Jun 09, 2026",category:"AI Evaluation",tags:["Synthetic Data","Adversarial QC","Agents"]},{id:"agent-as-judge",title:{en:"Agent-as-Judge vs. a Metric You Wrote by Hand",zh:"Agent-as-Judge 还是手写的 Metric？一次摆数据的对比"},excerpt:{en:"A measured comparison: LLM judge vs. a deterministic metric on precision, recall, agreement, cost, and latency — and how to choose per task.",zh:"LLM Judge 对比手写确定性 Metric：准确率、召回、一致率、成本、时延的实测对比，以及按任务选型的结论。"},content:{en:Py,zh:zy},date:"Jun 06, 2026",category:"AI Evaluation",tags:["LLM Eval","LLM-as-judge"]},{id:"eval-plumbing",title:{en:"The Plumbing of LLM Evaluation: Six Model Families on One Harness",zh:"大模型评测的「管道工程」：在一个 harness 上跑六个模型族"},excerpt:{en:"Eval is infrastructure, not a script. File-output gaps, reasoning-only turns, judge hallucination, harness diversity, cost accounting — and an upstream OSS contribution.",zh:"评测是基础设施，不是一次性脚本：文件输出缺口、纯推理回合、Judge 幻觉、Harness 多样性、成本核算，以及一次上游开源贡献。"},content:{en:Fy,zh:Dy},date:"May 28, 2026",category:"AI Evaluation",tags:["LLM Eval","Infrastructure","Open Source"]},{id:"9",title:{en:"Detailed Explanation of Blockchain",zh:"区块链详解"},excerpt:{en:"From the trust model to a working dApp: accounts, contracts, stablecoins, lending, indexing — and which parts of the stack belong off-chain.",zh:"从信任模型到一个能跑的 dApp：账户、合约、稳定币、借贷、索引，以及哪些部分本就该留在链下。"},content:By,date:"Feb 04, 2026",category:"Web3",tags:["Web3","Blockchain"]},{id:"solana-mev-guide",title:{en:"Building a Solana MEV Searcher: A Complete Technical Guide",zh:"Solana MEV Searcher 完整技术指南"},excerpt:{en:"An eight-part deep dive — Dark Forest rules, searcher architecture, the control plane, network-wide inventory, sub-millisecond scout, AMM pricing models, cross-DEX arbitrage, Jito bundles, and risk control.",zh:"共八篇：暗黑森林生存法则、Searcher 架构、Control Plane、全网 Inventory、亚毫秒 Scout、AMM 定价模型、跨 DEX 套利、Jito Bundle 与风控。"},content:$y,date:"Jan 20, 2026",category:"Web3",tags:["MEV","Solana","Rust"]}];function Wy({limit:e,showViewAll:t=!0}){const n=he(),r=p=>n(Js(oh,p)),o=Vs(),[i,s]=q.useState(null),l=q.useMemo(()=>{const p={};return Ga.forEach(f=>p[f.category]=(p[f.category]||0)+1),Object.entries(p).sort((f,m)=>m[1]-f[1])},[]),u=q.useMemo(()=>Ga.filter(p=>!i||p.category===i),[i]),d=e?u.slice(0,e):u;return a.jsxs("section",{id:"articles",className:`mx-auto max-w-content px-6 ${t?"mt-28 md:mt-36":"mt-8 md:mt-12"}`,children:[a.jsx(ae,{children:a.jsxs("div",{className:"flex flex-wrap items-end justify-between gap-4",children:[a.jsx("div",{children:a.jsx(Vr,{eyebrow:P.writingEyebrow,title:P.writing,size:t?"section":"page"})}),!t&&a.jsxs("div",{className:"flex flex-wrap gap-2",children:[a.jsx("button",{onClick:()=>s(null),className:`border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] transition-colors ${i===null?"border-foreground bg-foreground text-background":"border-line text-muted-foreground hover:text-foreground"}`,children:n({en:"All",zh:"全部"})}),l.map(([p,f])=>a.jsxs("button",{onClick:()=>s(m=>m===p?null:p),className:`border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] transition-colors ${i===p?"border-foreground bg-foreground text-background":"border-line text-muted-foreground hover:text-foreground"}`,children:[r(p)," ",a.jsx("span",{className:"opacity-50",children:f})]},p))]})]})}),a.jsxs("div",{className:"mt-12 space-y-4",children:[d.map((p,f)=>a.jsx(ae,{delay:Math.min(f,4)*55,children:a.jsxs("article",{onClick:()=>o(`/post/${p.id}`),className:"surface lift group flex cursor-pointer items-center gap-6 p-5 md:p-6",children:[a.jsxs("div",{className:"min-w-0 flex-1",children:[a.jsxs("div",{className:"flex items-center gap-2.5 font-mono text-[11px] text-muted-foreground",children:[a.jsx("span",{children:p.date}),a.jsx("span",{className:"h-1 w-1 rounded-full bg-muted-foreground/50"}),a.jsx("span",{className:"text-brand",children:r(p.category)})]}),a.jsx("h3",{className:"mt-2 text-lg font-semibold leading-snug tracking-tight transition-colors group-hover:text-foreground",children:a.jsx(rt,{to:`/post/${p.id}`,onClick:m=>m.stopPropagation(),children:n(p.title)})}),a.jsx("p",{className:"mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground",children:n(p.excerpt)})]}),a.jsx("div",{className:"hidden size-24 shrink-0 items-center justify-center overflow-hidden rounded-[2px] border border-line bg-surface md:flex",children:a.jsx(vi,{id:p.id,className:"h-full w-auto max-w-none"})}),a.jsx("span",{className:"hidden shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 sm:block",children:"→"})]})},p.id)),d.length===0&&a.jsx("div",{className:"py-10 text-center text-muted-foreground",children:n(P.noArticles)})]}),t&&a.jsx("div",{className:"mt-12 flex justify-center",children:a.jsxs(Xs,{to:"/posts",children:[n(P.viewAllArticles)," ",a.jsx("span",{"aria-hidden":!0,children:"→"})]})})]})}function Uy(){return a.jsxs(a.Fragment,{children:[a.jsx(ky,{}),a.jsx(Wy,{showViewAll:!1})]})}const Hy="repeating-linear-gradient(to right, hsl(var(--foreground) / 0.4) 0 1px, transparent 1px 80px)",Vy="repeating-linear-gradient(to right, hsl(var(--foreground) / 0.2) 0 1px, transparent 1px 16px)",Gy="linear-gradient(to right, transparent 4px, hsl(var(--muted-foreground) / 0.9) 4px 5px, transparent 5px 8px, hsl(var(--muted-foreground) / 0.9) 8px 9px, transparent 9px)";function Ky(){const[e,t]=q.useState(0);q.useEffect(()=>{let o=0;const i=()=>{const l=document.documentElement,u=l.scrollHeight-l.clientHeight;t(u>0?Math.min(1,Math.max(0,l.scrollTop/u)):0)},s=()=>{cancelAnimationFrame(o),o=requestAnimationFrame(i)};return i(),window.addEventListener("scroll",s,{passive:!0}),window.addEventListener("resize",s),()=>{cancelAnimationFrame(o),window.removeEventListener("scroll",s),window.removeEventListener("resize",s)}},[]);const n=Math.round(e*100),r=`clamp(7px, ${e*100}%, calc(100% - 7px))`;return a.jsxs("div",{"aria-hidden":!0,className:"pointer-events-none fixed inset-x-0 top-0 z-[60]",children:[a.jsx("div",{className:"h-2 w-full border-b border-line bg-background/85 backdrop-blur-sm",style:{backgroundImage:`${Hy}, ${Vy}`,backgroundSize:"100% 5px, 100% 3px",backgroundRepeat:"no-repeat",backgroundPosition:"bottom left, bottom left"}}),a.jsx("div",{className:"absolute top-0 h-2 w-[14px] border border-line bg-surface",style:{left:r,transform:"translateX(-50%)",backgroundImage:Gy}}),a.jsxs("div",{className:"absolute top-2 hidden -translate-x-1/2 flex-col items-center sm:flex",style:{left:r},children:[a.jsx("span",{className:"h-1.5 w-px bg-line"}),a.jsxs("span",{className:"bg-background/85 px-0.5 font-mono text-[8px] tracking-[0.08em] text-muted-foreground backdrop-blur-sm",children:[String(n).padStart(3,"0"),"%"]})]})]})}function Tu({children:e,className:t="",width:n="max-w-content"}){return a.jsx("div",{className:`relative z-10 mx-auto w-full ${n} px-6 pt-6 md:pt-10 ${t}`,children:e})}var lh={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(r){var o=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,i=0,s={},l={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function c(h){return h instanceof u?new u(h.type,c(h.content),h.alias):Array.isArray(h)?h.map(c):h.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(c){return Object.prototype.toString.call(c).slice(8,-1)},objId:function(c){return c.__id||Object.defineProperty(c,"__id",{value:++i}),c.__id},clone:function c(h,y){y=y||{};var v,w;switch(l.util.type(h)){case"Object":if(w=l.util.objId(h),y[w])return y[w];v={},y[w]=v;for(var k in h)h.hasOwnProperty(k)&&(v[k]=c(h[k],y));return v;case"Array":return w=l.util.objId(h),y[w]?y[w]:(v=[],y[w]=v,h.forEach(function(A,E){v[E]=c(A,y)}),v);default:return h}},getLanguage:function(c){for(;c;){var h=o.exec(c.className);if(h)return h[1].toLowerCase();c=c.parentElement}return"none"},setLanguage:function(c,h){c.className=c.className.replace(RegExp(o,"gi"),""),c.classList.add("language-"+h)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(v){var c=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(v.stack)||[])[1];if(c){var h=document.getElementsByTagName("script");for(var y in h)if(h[y].src==c)return h[y]}return null}},isActive:function(c,h,y){for(var v="no-"+h;c;){var w=c.classList;if(w.contains(h))return!0;if(w.contains(v))return!1;c=c.parentElement}return!!y}},languages:{plain:s,plaintext:s,text:s,txt:s,extend:function(c,h){var y=l.util.clone(l.languages[c]);for(var v in h)y[v]=h[v];return y},insertBefore:function(c,h,y,v){v=v||l.languages;var w=v[c],k={};for(var A in w)if(w.hasOwnProperty(A)){if(A==h)for(var E in y)y.hasOwnProperty(E)&&(k[E]=y[E]);y.hasOwnProperty(A)||(k[A]=w[A])}var I=v[c];return v[c]=k,l.languages.DFS(l.languages,function(W,Ce){Ce===I&&W!=c&&(this[W]=k)}),k},DFS:function c(h,y,v,w){w=w||{};var k=l.util.objId;for(var A in h)if(h.hasOwnProperty(A)){y.call(h,A,h[A],v||A);var E=h[A],I=l.util.type(E);I==="Object"&&!w[k(E)]?(w[k(E)]=!0,c(E,y,null,w)):I==="Array"&&!w[k(E)]&&(w[k(E)]=!0,c(E,y,A,w))}}},plugins:{},highlightAll:function(c,h){l.highlightAllUnder(document,c,h)},highlightAllUnder:function(c,h,y){var v={callback:y,container:c,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};l.hooks.run("before-highlightall",v),v.elements=Array.prototype.slice.apply(v.container.querySelectorAll(v.selector)),l.hooks.run("before-all-elements-highlight",v);for(var w=0,k;k=v.elements[w++];)l.highlightElement(k,h===!0,v.callback)},highlightElement:function(c,h,y){var v=l.util.getLanguage(c),w=l.languages[v];l.util.setLanguage(c,v);var k=c.parentElement;k&&k.nodeName.toLowerCase()==="pre"&&l.util.setLanguage(k,v);var A=c.textContent,E={element:c,language:v,grammar:w,code:A};function I(Ce){E.highlightedCode=Ce,l.hooks.run("before-insert",E),E.element.innerHTML=E.highlightedCode,l.hooks.run("after-highlight",E),l.hooks.run("complete",E),y&&y.call(E.element)}if(l.hooks.run("before-sanity-check",E),k=E.element.parentElement,k&&k.nodeName.toLowerCase()==="pre"&&!k.hasAttribute("tabindex")&&k.setAttribute("tabindex","0"),!E.code){l.hooks.run("complete",E),y&&y.call(E.element);return}if(l.hooks.run("before-highlight",E),!E.grammar){I(l.util.encode(E.code));return}if(h&&r.Worker){var W=new Worker(l.filename);W.onmessage=function(Ce){I(Ce.data)},W.postMessage(JSON.stringify({language:E.language,code:E.code,immediateClose:!0}))}else I(l.highlight(E.code,E.grammar,E.language))},highlight:function(c,h,y){var v={code:c,grammar:h,language:y};if(l.hooks.run("before-tokenize",v),!v.grammar)throw new Error('The language "'+v.language+'" has no grammar.');return v.tokens=l.tokenize(v.code,v.grammar),l.hooks.run("after-tokenize",v),u.stringify(l.util.encode(v.tokens),v.language)},tokenize:function(c,h){var y=h.rest;if(y){for(var v in y)h[v]=y[v];delete h.rest}var w=new f;return m(w,w.head,c),p(c,w,h,w.head,0),S(w)},hooks:{all:{},add:function(c,h){var y=l.hooks.all;y[c]=y[c]||[],y[c].push(h)},run:function(c,h){var y=l.hooks.all[c];if(!(!y||!y.length))for(var v=0,w;w=y[v++];)w(h)}},Token:u};r.Prism=l;function u(c,h,y,v){this.type=c,this.content=h,this.alias=y,this.length=(v||"").length|0}u.stringify=function c(h,y){if(typeof h=="string")return h;if(Array.isArray(h)){var v="";return h.forEach(function(I){v+=c(I,y)}),v}var w={type:h.type,content:c(h.content,y),tag:"span",classes:["token",h.type],attributes:{},language:y},k=h.alias;k&&(Array.isArray(k)?Array.prototype.push.apply(w.classes,k):w.classes.push(k)),l.hooks.run("wrap",w);var A="";for(var E in w.attributes)A+=" "+E+'="'+(w.attributes[E]||"").replace(/"/g,"&quot;")+'"';return"<"+w.tag+' class="'+w.classes.join(" ")+'"'+A+">"+w.content+"</"+w.tag+">"};function d(c,h,y,v){c.lastIndex=h;var w=c.exec(y);if(w&&v&&w[1]){var k=w[1].length;w.index+=k,w[0]=w[0].slice(k)}return w}function p(c,h,y,v,w,k){for(var A in y)if(!(!y.hasOwnProperty(A)||!y[A])){var E=y[A];E=Array.isArray(E)?E:[E];for(var I=0;I<E.length;++I){if(k&&k.cause==A+","+I)return;var W=E[I],Ce=W.inside,jt=!!W.lookbehind,Yn=!!W.greedy,wi=W.alias;if(Yn&&!W.pattern.global){var Zn=W.pattern.toString().match(/[imsuy]*$/)[0];W.pattern=RegExp(W.pattern.source,Zn+"g")}for(var yn=W.pattern||W,C=v.next,L=w;C!==h.tail&&!(k&&L>=k.reach);L+=C.value.length,C=C.next){var O=C.value;if(h.length>c.length)return;if(!(O instanceof u)){var U=1,$;if(Yn){if($=d(yn,L,c,jt),!$||$.index>=c.length)break;var $e=$.index,vn=$.index+$[0].length,ve=L;for(ve+=C.value.length;$e>=ve;)C=C.next,ve+=C.value.length;if(ve-=C.value.length,L=ve,C.value instanceof u)continue;for(var dt=C;dt!==h.tail&&(ve<vn||typeof dt.value=="string");dt=dt.next)U++,ve+=dt.value.length;U--,O=c.slice(L,ve),$.index-=L}else if($=d(yn,0,O,jt),!$)continue;var $e=$.index,ht=$[0],xi=O.slice(0,$e),el=O.slice($e+ht.length),bi=L+O.length;k&&bi>k.reach&&(k.reach=bi);var Gr=C.prev;xi&&(Gr=m(h,Gr,xi),L+=xi.length),x(h,Gr,U);var uh=new u(A,Ce?l.tokenize(ht,Ce):ht,wi,ht);if(C=m(h,Gr,uh),el&&m(h,C,el),U>1){var ki={cause:A+","+I,reach:bi};p(c,h,y,C.prev,L,ki),k&&ki.reach>k.reach&&(k.reach=ki.reach)}}}}}}function f(){var c={value:null,prev:null,next:null},h={value:null,prev:c,next:null};c.next=h,this.head=c,this.tail=h,this.length=0}function m(c,h,y){var v=h.next,w={value:y,prev:h,next:v};return h.next=w,v.prev=w,c.length++,w}function x(c,h,y){for(var v=h.next,w=0;w<y&&v!==c.tail;w++)v=v.next;h.next=v,v.prev=h,c.length-=w}function S(c){for(var h=[],y=c.head.next;y!==c.tail;)h.push(y.value),y=y.next;return h}if(!r.document)return r.addEventListener&&(l.disableWorkerMessageHandler||r.addEventListener("message",function(c){var h=JSON.parse(c.data),y=h.language,v=h.code,w=h.immediateClose;r.postMessage(l.highlight(v,l.languages[y],y)),w&&r.close()},!1)),l;var b=l.util.currentScript();b&&(l.filename=b.src,b.hasAttribute("data-manual")&&(l.manual=!0));function _(){l.manual||l.highlightAll()}if(!l.manual){var g=document.readyState;g==="loading"||g==="interactive"&&b&&b.defer?document.addEventListener("DOMContentLoaded",_):window.requestAnimationFrame?window.requestAnimationFrame(_):window.setTimeout(_,16)}return l}(t);e.exports&&(e.exports=n),typeof tl<"u"&&(tl.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(o,i){var s={};s["language-"+i]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[i]},s.cdata=/^<!\[CDATA\[|\]\]>$/i;var l={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:s}};l["language-"+i]={pattern:/[\s\S]+/,inside:n.languages[i]};var u={};u[o]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return o}),"i"),lookbehind:!0,greedy:!0,inside:l},n.languages.insertBefore("markup","cdata",u)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(r,o){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+r+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[o,"language-"+o],inside:n.languages[o]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(r){var o=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+o.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+o.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+o.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+o.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:o,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;var i=r.languages.markup;i&&(i.tag.addInlined("style","css"),i.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var r="Loading…",o=function(b,_){return"✖ Error "+b+" while fetching file: "+_},i="✖ Error: File does not exist or is empty",s={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},l="data-src-status",u="loading",d="loaded",p="failed",f="pre[data-src]:not(["+l+'="'+d+'"]):not(['+l+'="'+u+'"])';function m(b,_,g){var c=new XMLHttpRequest;c.open("GET",b,!0),c.onreadystatechange=function(){c.readyState==4&&(c.status<400&&c.responseText?_(c.responseText):c.status>=400?g(o(c.status,c.statusText)):g(i))},c.send(null)}function x(b){var _=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(b||"");if(_){var g=Number(_[1]),c=_[2],h=_[3];return c?h?[g,Number(h)]:[g,void 0]:[g,g]}}n.hooks.add("before-highlightall",function(b){b.selector+=", "+f}),n.hooks.add("before-sanity-check",function(b){var _=b.element;if(_.matches(f)){b.code="",_.setAttribute(l,u);var g=_.appendChild(document.createElement("CODE"));g.textContent=r;var c=_.getAttribute("data-src"),h=b.language;if(h==="none"){var y=(/\.(\w+)$/.exec(c)||[,"none"])[1];h=s[y]||y}n.util.setLanguage(g,h),n.util.setLanguage(_,h);var v=n.plugins.autoloader;v&&v.loadLanguages(h),m(c,function(w){_.setAttribute(l,d);var k=x(_.getAttribute("data-range"));if(k){var A=w.split(/\r\n?|\n/g),E=k[0],I=k[1]==null?A.length:k[1];E<0&&(E+=A.length),E=Math.max(0,Math.min(E-1,A.length)),I<0&&(I+=A.length),I=Math.max(0,Math.min(I,A.length)),w=A.slice(E,I).join(`
`),_.hasAttribute("data-start")||_.setAttribute("data-start",String(E+1))}g.textContent=w,n.highlightElement(g)},function(w){_.setAttribute(l,p),g.textContent=w})}}),n.plugins.fileHighlight={highlight:function(_){for(var g=(_||document).querySelectorAll(f),c=0,h;h=g[c++];)n.highlightElement(h)}};var S=!1;n.fileHighlight=function(){S||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),S=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(lh);var Qy=lh.exports;const Jy=Mu(Qy);(function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},r={bash:n,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:r},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:r},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:r.entity}}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:r.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=e.languages.bash;for(var o=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],i=r.variable[1].inside,s=0;s<o.length;s++)i[o[s]]=e.languages.bash[o[s]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash})(Prism);Prism.languages.go=Prism.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/});Prism.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}});delete Prism.languages.go["class-name"];Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;(function(e){var t=e.util.clone(e.languages.javascript),n=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,r=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,o=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function i(u,d){return u=u.replace(/<S>/g,function(){return n}).replace(/<BRACES>/g,function(){return r}).replace(/<SPREAD>/g,function(){return o}),RegExp(u,d)}o=i(o).source,e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=i(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=t.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:i(/<SPREAD>/.source),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:i(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var s=function(u){return u?typeof u=="string"?u:typeof u.content=="string"?u.content:u.content.map(s).join(""):""},l=function(u){for(var d=[],p=0;p<u.length;p++){var f=u[p],m=!1;if(typeof f!="string"&&(f.type==="tag"&&f.content[0]&&f.content[0].type==="tag"?f.content[0].content[0].content==="</"?d.length>0&&d[d.length-1].tagName===s(f.content[0].content[1])&&d.pop():f.content[f.content.length-1].content==="/>"||d.push({tagName:s(f.content[0].content[1]),openedBraces:0}):d.length>0&&f.type==="punctuation"&&f.content==="{"?d[d.length-1].openedBraces++:d.length>0&&d[d.length-1].openedBraces>0&&f.type==="punctuation"&&f.content==="}"?d[d.length-1].openedBraces--:m=!0),(m||typeof f=="string")&&d.length>0&&d[d.length-1].openedBraces===0){var x=s(f);p<u.length-1&&(typeof u[p+1]=="string"||u[p+1].type==="plain-text")&&(x+=s(u[p+1]),u.splice(p+1,1)),p>0&&(typeof u[p-1]=="string"||u[p-1].type==="plain-text")&&(x=s(u[p-1])+x,u.splice(p-1,1),p--),u[p]=new e.Token("plain-text",x,null,x)}f.content&&typeof f.content!="string"&&l(f.content)}};e.hooks.add("after-tokenize",function(u){u.language!=="jsx"&&u.language!=="tsx"||l(u.tokens)})})(Prism);Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}};Prism.languages.webmanifest=Prism.languages.json;Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/};Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python;Prism.languages.py=Prism.languages.python;(function(e){for(var t=/\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source,n=0;n<2;n++)t=t.replace(/<self>/g,function(){return t});t=t.replace(/<self>/g,function(){return/[^\s\S]/.source}),e.languages.rust={comment:[{pattern:RegExp(/(^|[^\\])/.source+t),lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,greedy:!0},char:{pattern:/b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,greedy:!0},attribute:{pattern:/#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,greedy:!0,alias:"attr-name",inside:{string:null}},"closure-params":{pattern:/([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,lookbehind:!0,greedy:!0,inside:{"closure-punctuation":{pattern:/^\||\|$/,alias:"punctuation"},rest:null}},"lifetime-annotation":{pattern:/'\w+/,alias:"symbol"},"fragment-specifier":{pattern:/(\$\w+:)[a-z]+/,lookbehind:!0,alias:"punctuation"},variable:/\$\w+/,"function-definition":{pattern:/(\bfn\s+)\w+/,lookbehind:!0,alias:"function"},"type-definition":{pattern:/(\b(?:enum|struct|trait|type|union)\s+)\w+/,lookbehind:!0,alias:"class-name"},"module-declaration":[{pattern:/(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,lookbehind:!0,alias:"namespace"},{pattern:/(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,lookbehind:!0,alias:"namespace",inside:{punctuation:/::/}}],keyword:[/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,/\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,macro:{pattern:/\b\w+!/,alias:"property"},constant:/\b[A-Z_][A-Z_\d]+\b/,"class-name":/\b[A-Z]\w*\b/,namespace:{pattern:/(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,inside:{punctuation:/::/}},number:/\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,boolean:/\b(?:false|true)\b/,punctuation:/->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,operator:/[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/},e.languages.rust["closure-params"].inside.rest=e.languages.rust,e.languages.rust.attribute.inside.string=e.languages.rust.string})(Prism);(function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var t=e.languages.extend("typescript",{});delete t["class-name"],e.languages.typescript["class-name"].inside=t,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),e.languages.ts=e.languages.typescript})(Prism);(function(e){var t=e.util.clone(e.languages.typescript);e.languages.tsx=e.languages.extend("jsx",t),delete e.languages.tsx.parameter,delete e.languages.tsx["literal-property"];var n=e.languages.tsx.tag;n.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+n.pattern.source+")",n.pattern.flags),n.lookbehind=!0})(Prism);(function(e){var t=/[*&][^\s[\]{},]+/,n=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,r="(?:"+n.source+"(?:[ 	]+"+t.source+")?|"+t.source+"(?:[ 	]+"+n.source+")?)",o=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),i=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function s(l,u){u=(u||"").replace(/m/g,"")+"m";var d=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return r}).replace(/<<value>>/g,function(){return l});return RegExp(d,u)}e.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return r})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return r}).replace(/<<key>>/g,function(){return"(?:"+o+"|"+i+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:s(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:s(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:s(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:s(i),lookbehind:!0,greedy:!0},number:{pattern:s(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:n,important:t,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},e.languages.yml=e.languages.yaml})(Prism);function Yy(){const e=he(),t=u=>e(Js(oh,u)),{id:n}=gg(),r=Ga.find(u=>u.id===n),o=r!=null&&r.content?e(r.content):"",{contentHtml:i,tocItems:s}=q.useMemo(()=>{if(!o||typeof window>"u")return{contentHtml:o,tocItems:[]};const d=new DOMParser().parseFromString(o,"text/html"),p=d.body.querySelector("h1");p&&p.remove();const f=Array.from(d.querySelectorAll("h2, h3")),m=new Map,x=b=>b.trim().toLowerCase().replace(/[^\w一-鿿\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").replace(/^-+|-+$/g,""),S=f.map((b,_)=>{var v;const g=((v=b.textContent)==null?void 0:v.trim())??"",c=x(g)||`section-${_}`,h=m.get(c)??0;m.set(c,h+1);const y=h===0?c:`${c}-${h}`;return b.id=y,{id:y,text:g,level:b.tagName==="H2"?2:3}}).filter(b=>b.text.length>0);return{contentHtml:d.body.innerHTML,tocItems:S}},[o]);q.useEffect(()=>{Jy.highlightAll()},[i]);const l=u=>{const d=document.getElementById(u);d&&d.scrollIntoView({behavior:"smooth",block:"start"})};return r?a.jsxs(Tu,{width:"max-w-[1280px]",children:[a.jsx(Ky,{}),a.jsxs(rt,{to:"/posts",className:"inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground",children:[a.jsx("span",{"aria-hidden":!0,children:"←"})," ",e(P.writing)]}),a.jsxs("div",{className:"mt-8 grid gap-10 lg:grid-cols-[190px_minmax(0,52rem)] lg:justify-center xl:grid-cols-[200px_minmax(0,54rem)] xl:gap-12",children:[a.jsx("aside",{className:"hidden lg:block",children:a.jsxs("div",{className:"sticky top-28",children:[a.jsx("div",{className:"eyebrow mb-4",children:e(P.toc)}),a.jsx("nav",{className:"space-y-2.5 text-sm",children:s.length>0?s.map(u=>a.jsx("button",{type:"button",onClick:()=>l(u.id),className:`block w-full text-left leading-snug text-muted-foreground transition-colors hover:text-foreground ${u.level===3?"pl-3.5 text-[0.8rem]":""}`,children:u.text},u.id)):a.jsx("div",{className:"text-muted-foreground",children:e(P.tocEmpty)})})]})}),a.jsxs("div",{className:"min-w-0",children:[a.jsxs("header",{className:"mb-9",children:[a.jsxs("div",{className:"flex items-center gap-2.5 font-mono text-xs text-muted-foreground",children:[a.jsx("span",{className:"text-brand",children:t(r.category)}),a.jsx("span",{className:"h-1 w-1 rounded-full bg-muted-foreground/50"}),a.jsx("span",{children:r.date})]}),a.jsx("h1",{className:"mt-4 text-3xl font-semibold leading-[1.1] tracking-tight text-balance md:text-[2.55rem]",children:e(r.title)}),a.jsx("p",{className:"mt-5 text-lg leading-relaxed text-muted-foreground",children:e(r.excerpt)})]}),a.jsx("div",{className:"mx-auto mb-10 max-w-[46rem] overflow-hidden rounded-[2px] border border-line bg-surface",children:a.jsx(vi,{id:r.id,className:"h-auto w-full"})}),a.jsx("article",{className:`prose prose-neutral dark:prose-invert lg:prose-lg mb-16 max-w-none
              prose-headings:tracking-tight prose-headings:font-semibold
              prose-a:text-foreground prose-a:underline prose-a:decoration-brand prose-a:underline-offset-4
              prose-code:font-mono prose-code:text-[0.85em] prose-pre:rounded prose-pre:border prose-pre:border-line
              prose-img:rounded prose-th:text-left`,children:i?a.jsx("div",{dangerouslySetInnerHTML:{__html:i}}):a.jsx("p",{className:"text-muted-foreground",children:"…"})}),a.jsx("div",{className:"hr-line"}),a.jsxs("div",{className:"mt-10 flex flex-col items-center gap-5",children:[a.jsx(Jo,{spin:!0,className:"h-11 w-11 text-muted-foreground/50"}),a.jsxs(Xs,{to:"/posts",children:[e(P.viewAllArticles)," ",a.jsx("span",{"aria-hidden":!0,children:"→"})]})]})]})]})]}):a.jsx(Tu,{children:a.jsxs("div",{className:"min-h-[50vh] flex flex-col items-center justify-center",children:[a.jsx("h1",{className:"text-2xl font-bold mb-4 dark:text-neutral-100",children:e(P.articleNotFound)}),a.jsx(rt,{to:"/posts",className:"text-blue-500 hover:underline",children:e(P.viewAllArticles)})]})})}function Zy(){const e=he();return a.jsxs("section",{className:"mx-auto max-w-content px-6 pb-10 pt-8 md:pt-12",children:[a.jsx("p",{className:"eyebrow",children:"Optics"}),a.jsx("h1",{className:"mt-3 text-4xl font-semibold tracking-tight sm:text-5xl",children:e(P.opticsTitle)}),a.jsx("p",{className:"mt-3 max-w-prose text-muted-foreground",children:e(P.opticsSub)})]})}const Xy=["All","Nature","Urban","Street"];function ev({selectedFilter:e,onFilterChange:t}){const n=he();return a.jsx("div",{className:"px-6 pb-10",children:a.jsx("div",{className:"max-w-content mx-auto flex gap-2.5 flex-wrap",children:Xy.map(r=>a.jsx("button",{onClick:()=>t(r),className:`border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] transition-colors ${e===r?"border-foreground bg-foreground text-background":"border-line text-muted-foreground hover:text-foreground"}`,children:n(Js(km,r))},r))})})}function tv({photo:e,onClick:t}){const[n,r]=q.useState(!1),o=q.useRef(null);return q.useEffect(()=>{var i;(i=o.current)!=null&&i.complete&&r(!0)},[]),a.jsxs("div",{className:"lift group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-[2px] border border-line",onClick:t,children:[!n&&a.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 dark:from-[#0A0A0A] dark:via-[#1A1A1A] dark:to-[#0A0A0A] animate-pulse"}),a.jsx("img",{ref:o,src:e.url,alt:e.title,loading:"lazy",decoding:"async",className:`w-full h-full object-cover transition-all duration-500 ${n?"opacity-100 scale-100":"opacity-0 scale-95"}`,onLoad:()=>r(!0)}),a.jsx("div",{className:"absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6",children:a.jsxs("div",{className:"space-y-2",children:[a.jsx("h3",{className:"text-white font-semibold text-lg",children:e.title}),a.jsxs("div",{className:"font-mono text-xs text-[#CCFF00] space-y-1",children:[a.jsxs("div",{children:[e.camera," | ",e.lens]}),a.jsxs("div",{children:[e.iso," | ",e.aperture," | ",e.shutter]})]})]})})]})}const nv={"Yuanbao_In_Bed.webp":{camera:"NIKON Z 6_2",lens:"NIKKOR Z 50mm f/1.8 S",iso:"1000",aperture:"f/1.8",shutter:"1/13s",focalLength:"50mm"},"Snow_Plow.webp":{camera:"NIKON Z 6_2",lens:"NIKKOR Z 50mm f/1.8 S",iso:"100",aperture:"f/1.8",shutter:"1/3200s",focalLength:"50mm"},"Snow_Amusement_Park.webp":{camera:"NIKON Z 6_2",lens:"NIKKOR Z 50mm f/1.8 S",iso:"100",aperture:"f/1.8",shutter:"1/8000s",focalLength:"50mm"},"Olympic_Tower.webp":{camera:"NIKON Z 6_2",lens:"NIKKOR Z 50mm f/1.8 S",iso:"100",aperture:"f/1.8",shutter:"1/4000s",focalLength:"50mm"},"Olympic_Forest_White_Flower_1.webp":{camera:"NIKON Z 6_2",lens:"NIKKOR Z 50mm f/1.8 S",iso:"100",aperture:"f/1.8",shutter:"1/640s",focalLength:"50mm"},"Olympic_Forest_Sunflower_2.webp":{camera:"NIKON Z 6_2",lens:"NIKKOR Z 50mm f/1.8 S",iso:"100",aperture:"f/1.8",shutter:"1/2500s",focalLength:"50mm"},"Olympic_Forest_Sunflower_1.webp":{camera:"NIKON Z 6_2",lens:"NIKKOR Z 50mm f/1.8 S",iso:"100",aperture:"f/1.8",shutter:"1/2000s",focalLength:"50mm"},"Olympic_Forest_Pink_Grass_1.webp":{camera:"NIKON Z 6_2",lens:"NIKKOR Z 50mm f/1.8 S",iso:"100",aperture:"f/1.8",shutter:"1/1600s",focalLength:"50mm"},"Olympic_Forest_Ginkgo.webp":{camera:"NIKON Z 6_2",lens:"NIKKOR Z 50mm f/1.8 S",iso:"100",aperture:"f/1.8",shutter:"1/3200s",focalLength:"50mm"},"Olympic_Forest_Autumn_Leaves_2.webp":{camera:"NIKON Z 6_2",lens:"NIKKOR Z 50mm f/1.8 S",iso:"100",aperture:"f/1.8",shutter:"1/3200s",focalLength:"50mm"},"Olympic_Forest_Autumn_Leaves.webp":{camera:"NIKON Z 6_2",lens:"NIKKOR Z 50mm f/1.8 S",iso:"100",aperture:"f/1.8",shutter:"1/800s",focalLength:"50mm"},"Longma_Mountain_Windmill.webp":{camera:"NIKON Z 6_2",lens:"NIKKOR Z 50mm f/1.8 S",iso:"100",aperture:"f/2.5",shutter:"1/640s",focalLength:"50mm"},"Longma_Mountain_Moss_1.webp":{camera:"NIKON Z 6_2",lens:"NIKKOR Z 50mm f/1.8 S",iso:"100",aperture:"f/1.8",shutter:"1/50s",focalLength:"50mm"},"Longma_Mountain_Hydrangea_1.webp":{camera:"NIKON Z 6_2",lens:"NIKKOR Z 50mm f/1.8 S",iso:"100",aperture:"f/1.8",shutter:"1/800s",focalLength:"50mm"},"Horohira_Bridge.webp":{camera:"NIKON Z 6_2",lens:"NIKKOR Z 50mm f/1.8 S",iso:"100",aperture:"f/1.8",shutter:"1/250s",focalLength:"50mm"},"Fountain.webp":{camera:"NIKON Z 6_2",lens:"NIKKOR Z 24-200mm f/4-6.3 VR",iso:"2500",aperture:"f/6.3",shutter:"1/13s",focalLength:"34.5mm"},"Chengjiang_Lakeside_2.webp":{camera:"NIKON Z 6_2",lens:"NIKKOR Z 50mm f/1.8 S",iso:"100",aperture:"f/1.8",shutter:"1/8000s",focalLength:"50mm"},"Chengjiang_Lakeside.webp":{camera:"NIKON Z 6_2",lens:"NIKKOR Z 50mm f/1.8 S",iso:"100",aperture:"f/1.8",shutter:"1/3200s",focalLength:"50mm"},"Chengjiang_Lake_1.webp":{camera:"NIKON Z 6_2",lens:"NIKKOR Z 50mm f/1.8 S",iso:"100",aperture:"f/2.8",shutter:"1/6400s",focalLength:"50mm"},"Cat_In_Snow.webp":{camera:"NIKON Z 6_2",lens:"NIKKOR Z 50mm f/1.8 S",iso:"100",aperture:"f/1.8",shutter:"1/8000s",focalLength:"50mm"},"Baiwang_Mountain_Night.webp":{camera:"NIKON Z 6_2",lens:"NIKKOR Z 24-200mm f/4-6.3 VR",iso:"640",aperture:"f/6.3",shutter:"1/20s",focalLength:"200mm"},"Baiwang_Mountain.webp":{camera:"NIKON Z 6_2",lens:"NIKKOR Z 24-200mm f/4-6.3 VR",iso:"900",aperture:"f/6.3",shutter:"1/100s",focalLength:"82mm"}},rv="/assets/Yuanbao_In_Bed-D00iVsSv.webp",ov="/assets/Fountain-BnHHTAuA.webp",iv="/assets/Olympic_Tower-DvXJg9Vg.webp",av="/assets/Olympic_Forest_Sunflower_1-dlJ3grwZ.webp",sv="/assets/Olympic_Forest_Sunflower_2-DBuMLQgI.webp",lv="/assets/Olympic_Forest_White_Flower_1-Hr2Ux-Wj.webp",uv="/assets/Olympic_Forest_Autumn_Leaves-CQgS0oew.webp",cv="/assets/Olympic_Forest_Autumn_Leaves_2-xTN1As1V.webp",dv="/assets/Olympic_Forest_Pink_Grass_1-f25VsoTN.webp",hv="/assets/Olympic_Forest_Ginkgo-coubr25Q.webp",pv="/assets/Horohira_Bridge-FIHXvUJP.webp",fv="/assets/Chengjiang_Lake_1-RgzUQbM3.webp",gv="/assets/Chengjiang_Lakeside-DWlk8BNT.webp",mv="/assets/Chengjiang_Lakeside_2-Bf8MeW2D.webp",yv="/assets/Baiwang_Mountain-FLZhYxFQ.webp",vv="/assets/Baiwang_Mountain_Night-nwWH10PD.webp",wv="/assets/Snow_Plow-D1ubAYzk.webp",xv="/assets/Snow_Amusement_Park-B8AWg3iX.webp",bv="/assets/Cat_In_Snow-BGY4AZ18.webp",kv="/assets/Longma_Mountain_Hydrangea_1-CsoiXulp.webp",qv="/assets/Longma_Mountain_Moss_1-D-_2cbWU.webp",Sv="/assets/Longma_Mountain_Windmill-ChF6YyPs.webp",X=nv,Iu=[{id:"1",url:rv,...X["Yuanbao_In_Bed.webp"],category:"Nature",location:"Home",title:"Yuanbao In Bed",story:"A cozy moment captured at home."},{id:"2",url:ov,...X["Fountain.webp"],category:"Urban",location:"City Park",title:"Fountain",story:"Water dancing in the city light."},{id:"3",url:iv,...X["Olympic_Tower.webp"],category:"Urban",location:"Olympic Park",title:"Olympic Tower",story:"A towering structure against the sky."},{id:"4",url:av,...X["Olympic_Forest_Sunflower_1.webp"],category:"Nature",location:"Olympic Forest Park",title:"Sunflower Bloom",story:"Bright yellow petals facing the sun."},{id:"5",url:sv,...X["Olympic_Forest_Sunflower_2.webp"],category:"Nature",location:"Olympic Forest Park",title:"Sunflower Field",story:"A field of golden sunflowers."},{id:"6",url:lv,...X["Olympic_Forest_White_Flower_1.webp"],category:"Nature",location:"Olympic Forest Park",title:"White Blossom",story:"Delicate white flowers in bloom."},{id:"7",url:uv,...X["Olympic_Forest_Autumn_Leaves.webp"],category:"Nature",location:"Olympic Forest Park",title:"Autumn Leaves",story:"The colors of fall."},{id:"8",url:cv,...X["Olympic_Forest_Autumn_Leaves_2.webp"],category:"Nature",location:"Olympic Forest Park",title:"Golden Canopy",story:"Sunlight filtering through autumn leaves."},{id:"9",url:dv,...X["Olympic_Forest_Pink_Grass_1.webp"],category:"Nature",location:"Olympic Forest Park",title:"Pink Muhly Grass",story:"Soft pink waves in the breeze."},{id:"10",url:hv,...X["Olympic_Forest_Ginkgo.webp"],category:"Nature",location:"Olympic Forest Park",title:"Ginkgo Avenue",story:"Golden ginkgo leaves covering the path."},{id:"11",url:pv,...X["Horohira_Bridge.webp"],category:"Urban",location:"Sapporo",title:"Horohira Bridge",story:"Architecture spanning the water."},{id:"12",url:fv,...X["Chengjiang_Lake_1.webp"],category:"Nature",location:"Chengjiang",title:"Chengjiang Lake",story:"Serene waters and distant mountains."},{id:"13",url:gv,...X["Chengjiang_Lakeside.webp"],category:"Nature",location:"Chengjiang",title:"Lakeside View",story:"Peaceful moments by the lake."},{id:"14",url:mv,...X["Chengjiang_Lakeside_2.webp"],category:"Nature",location:"Chengjiang",title:"Water's Edge",story:"Where the water meets the land."},{id:"15",url:yv,...X["Baiwang_Mountain.webp"],category:"Nature",location:"Baiwang Mountain",title:"Baiwang Mountain",story:"A view from the top."},{id:"16",url:vv,...X["Baiwang_Mountain_Night.webp"],category:"Urban",location:"Baiwang Mountain",title:"Baiwang Night",story:"City lights seen from the mountain."},{id:"17",url:wv,...X["Snow_Plow.webp"],category:"Street",location:"City Streets",title:"Snow Plow",story:"Clearing the way in winter."},{id:"18",url:xv,...X["Snow_Amusement_Park.webp"],category:"Urban",location:"Amusement Park",title:"Snowy Park",story:"A winter wonderland in the amusement park."},{id:"19",url:bv,...X["Cat_In_Snow.webp"],category:"Nature",location:"Outdoors",title:"Cat in Snow",story:"A cat exploring the snowy landscape."},{id:"20",url:kv,...X["Longma_Mountain_Hydrangea_1.webp"],category:"Nature",location:"Longma Mountain",title:"Hydrangea",story:"Vibrant hydrangeas in bloom."},{id:"21",url:qv,...X["Longma_Mountain_Moss_1.webp"],category:"Nature",location:"Longma Mountain",title:"Mountain Moss",story:"Detailed texture of moss."},{id:"22",url:Sv,...X["Longma_Mountain_Windmill.webp"],category:"Nature",location:"Longma Mountain",title:"Windmill",story:"Windmill turning in the mountain breeze."}];function _v({filter:e,onPhotoClick:t}){const n=he(),[r,o]=q.useState(9);q.useEffect(()=>{o(9)},[e]);const i=e==="All"?Iu:Iu.filter(u=>u.category===e),s=i.slice(0,r),l=r<i.length;return a.jsx("div",{className:"px-6 pb-16",children:a.jsxs("div",{className:"max-w-content mx-auto",children:[a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:s.map(u=>a.jsx(tv,{photo:u,onClick:()=>t(u)},u.id))}),l&&a.jsx("div",{className:"flex justify-center mt-12",children:a.jsx("button",{onClick:()=>o(u=>u+6),className:"border border-line px-6 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",children:n(P.loadMore)})})]})})}function jv({photo:e,onClose:t}){const n=he(),r=q.useRef(null);return q.useEffect(()=>{var l;const o=document.activeElement,i=()=>{var u;return Array.from(((u=r.current)==null?void 0:u.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])'))??[])};(l=i()[0])==null||l.focus();const s=u=>{if(u.key==="Escape"){t();return}if(u.key==="Tab"){const d=i();if(d.length===0){u.preventDefault();return}const p=d[0],f=d[d.length-1];u.shiftKey&&document.activeElement===p?(u.preventDefault(),f.focus()):!u.shiftKey&&document.activeElement===f&&(u.preventDefault(),p.focus())}};return window.addEventListener("keydown",s),document.body.classList.add("scroll-locked"),()=>{var u;window.removeEventListener("keydown",s),document.body.classList.remove("scroll-locked"),(u=o==null?void 0:o.focus)==null||u.call(o)}},[t]),a.jsxs("div",{ref:r,role:"dialog","aria-modal":"true","aria-label":e.title,className:"fixed inset-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn",children:[a.jsx("button",{onClick:t,className:"absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20 transition-colors z-10 text-gray-900 dark:text-white","aria-label":n(P.closeLightbox),children:a.jsx(eh,{className:"w-5 h-5"})}),a.jsxs("div",{className:"max-w-7xl w-full grid md:grid-cols-[1fr_400px] gap-8 max-h-[90vh]",children:[a.jsx("div",{className:"flex items-center justify-center",children:a.jsx("img",{src:e.url,alt:e.title,className:"max-h-[85vh] w-auto rounded-lg shadow-2xl"})}),a.jsxs("div",{className:"flex flex-col gap-6 overflow-y-auto pr-4",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"text-3xl font-bold mb-2 text-gray-900 dark:text-white",children:e.title}),a.jsxs("div",{className:"flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm",children:[a.jsx(Zg,{className:"w-4 h-4"}),a.jsx("span",{children:e.location})]})]}),a.jsxs("div",{className:"bg-gray-50 dark:bg-[#0A0A0A] border border-gray-200 dark:border-[#1A1A1A] rounded-lg p-4",children:[a.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[a.jsx(Hg,{className:"w-4 h-4 text-[#CCFF00]"}),a.jsx("h3",{className:"font-semibold text-sm text-gray-900 dark:text-white",children:n(P.techSpecs)})]}),a.jsxs("div",{className:"font-mono text-xs space-y-2 text-gray-700 dark:text-gray-300",children:[a.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[a.jsx("span",{className:"text-gray-400 dark:text-gray-500",children:n(P.camera)}),a.jsx("span",{children:e.camera})]}),a.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[a.jsx("span",{className:"text-gray-400 dark:text-gray-500",children:n(P.lens)}),a.jsx("span",{children:e.lens})]}),a.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[a.jsx("span",{className:"text-gray-400 dark:text-gray-500",children:n(P.iso)}),a.jsx("span",{children:e.iso})]}),a.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[a.jsx("span",{className:"text-gray-400 dark:text-gray-500",children:n(P.aperture)}),a.jsx("span",{children:e.aperture})]}),a.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[a.jsx("span",{className:"text-gray-400 dark:text-gray-500",children:n(P.shutter)}),a.jsx("span",{children:e.shutter})]})]})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"font-semibold mb-2 text-gray-900 dark:text-white",children:n(P.story)}),a.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm leading-relaxed",children:e.story})]})]})]})]})}function Av(){const[e,t]=q.useState("All"),[n,r]=q.useState(null);return a.jsxs("div",{className:"min-h-screen bg-background text-foreground transition-colors duration-300",children:[a.jsx(Zy,{}),a.jsx(ev,{selectedFilter:e,onFilterChange:t}),a.jsx(_v,{filter:e,onPhotoClick:r}),n&&a.jsx(jv,{photo:n,onClose:()=>r(null)})]})}function Cv(){return a.jsxs(a.Fragment,{children:[a.jsx(Dm,{}),a.jsx(ny,{}),a.jsx(hy,{}),a.jsx(py,{}),a.jsx(iy,{})]})}function Ev(){return a.jsxs(zg,{children:[a.jsx(my,{}),a.jsxs("div",{className:"relative min-h-screen bg-background text-foreground antialiased",children:[a.jsx(gy,{}),a.jsx(qm,{}),a.jsx("div",{className:"h-16 sm:h-20"}),a.jsxs(Mg,{children:[a.jsx(en,{path:"/",element:a.jsx(Cv,{})}),a.jsx(en,{path:"/projects",element:a.jsx(xy,{})}),a.jsx(en,{path:"/posts",element:a.jsx(Uy,{})}),a.jsx(en,{path:"/post/:id",element:a.jsx(Yy,{})}),a.jsx(en,{path:"/optics",element:a.jsx(Av,{})}),a.jsx(en,{path:"*",element:a.jsx(Tg,{to:"/",replace:!0})})]}),a.jsx(fy,{})]})]})}Yi.createRoot(document.getElementById("root")).render(a.jsx(vt.StrictMode,{children:a.jsx(bm,{children:a.jsx(Ev,{})})}));
