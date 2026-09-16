(()=>{var Ny=Object.create;var{getPrototypeOf:zy,defineProperty:u0,getOwnPropertyNames:Oy}=Object;var d0=Object.prototype.hasOwnProperty;function Ry(e){return this[e]}var By,Hy,kt=(e,t,n)=>{var l=e!=null&&typeof e==="object";if(l){var o=t?By??=new WeakMap:Hy??=new WeakMap,a=o.get(e);if(a)return a}n=e!=null?Ny(zy(e)):{};let i=t||!e||!e.__esModule||!d0.call(e,"default")?u0(n,"default",{value:e,enumerable:!0}):n;if(e&&typeof e==="object"||typeof e==="function"){for(let r of Oy(e))if(!d0.call(i,r))u0(i,r,{get:Ry.bind(e,r),enumerable:!0})}if(l)o.set(e,i);return i};var Ml=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var w0=Ml(function(Ne){var Eu=Symbol.for("react.transitional.element"),$y=Symbol.for("react.portal"),Uy=Symbol.for("react.fragment"),Yy=Symbol.for("react.strict_mode"),jy=Symbol.for("react.profiler"),Iy=Symbol.for("react.consumer"),Xy=Symbol.for("react.context"),qy=Symbol.for("react.forward_ref"),Wy=Symbol.for("react.suspense"),Qy=Symbol.for("react.memo"),g0=Symbol.for("react.lazy"),Gy=Symbol.for("react.activity"),_0=Symbol.iterator;function Vy(e){if(e===null||typeof e!=="object")return null;return e=_0&&e[_0]||e["@@iterator"],typeof e==="function"?e:null}var p0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y0=Object.assign,b0={};function Na(e,t,n){this.props=e,this.context=t,this.refs=b0,this.updater=n||p0}Na.prototype.isReactComponent={};Na.prototype.setState=function(e,t){if(typeof e!=="object"&&typeof e!=="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Na.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function x0(){}x0.prototype=Na.prototype;function Tu(e,t,n){this.props=e,this.context=t,this.refs=b0,this.updater=n||p0}var Au=Tu.prototype=new x0;Au.constructor=Tu;y0(Au,Na.prototype);Au.isPureReactComponent=!0;var f0=Array.isArray;function Mu(){}var Ct={H:null,A:null,T:null,S:null},v0=Object.prototype.hasOwnProperty;function Lu(e,t,n){var l=n.ref;return{$$typeof:Eu,type:e,key:t,ref:l!==void 0?l:null,props:n}}function Zy(e,t){return Lu(e.type,t,e.props)}function Du(e){return typeof e==="object"&&e!==null&&e.$$typeof===Eu}function Ky(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var h0=/\/+/g;function Cu(e,t){return typeof e==="object"&&e!==null&&e.key!=null?Ky(""+e.key):t.toString(36)}function Fy(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status==="string"?e.then(Mu,Mu):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Da(e,t,n,l,o){var a=typeof e;if(a==="undefined"||a==="boolean")e=null;var i=!1;if(e===null)i=!0;else switch(a){case"bigint":case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Eu:case $y:i=!0;break;case g0:return i=e._init,Da(i(e._payload),t,n,l,o)}}if(i)return o=o(e),i=l===""?"."+Cu(e,0):l,f0(o)?(n="",i!=null&&(n=i.replace(h0,"$&/")+"/"),Da(o,t,n,"",function(g){return g})):o!=null&&(Du(o)&&(o=Zy(o,n+(o.key==null||e&&e.key===o.key?"":(""+o.key).replace(h0,"$&/")+"/")+i)),t.push(o)),1;i=0;var r=l===""?".":l+":";if(f0(e))for(var s=0;s<e.length;s++)l=e[s],a=r+Cu(l,s),i+=Da(l,t,n,a,o);else if(s=Vy(e),typeof s==="function")for(e=s.call(e),s=0;!(l=e.next()).done;)l=l.value,a=r+Cu(l,s++),i+=Da(l,t,n,a,o);else if(a==="object"){if(typeof e.then==="function")return Da(Fy(e),t,n,l,o);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return i}function gs(e,t,n){if(e==null)return e;var l=[],o=0;return Da(e,l,"","",function(a){return t.call(n,a,o++)}),l}function Jy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){if(e._status===0||e._status===-1)e._status=1,e._result=n},function(n){if(e._status===0||e._status===-1)e._status=2,e._result=n}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var m0=typeof reportError==="function"?reportError:function(e){if(typeof window==="object"&&typeof window.ErrorEvent==="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e==="object"&&e!==null&&typeof e.message==="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==="object"&&typeof process.emit==="function"){process.emit("uncaughtException",e);return}console.error(e)},Py={map:gs,forEach:function(e,t,n){gs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return gs(e,function(){t++}),t},toArray:function(e){return gs(e,function(t){return t})||[]},only:function(e){if(!Du(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ne.Activity=Gy;Ne.Children=Py;Ne.Component=Na;Ne.Fragment=Uy;Ne.Profiler=jy;Ne.PureComponent=Tu;Ne.StrictMode=Yy;Ne.Suspense=Wy;Ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ct;Ne.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Ct.H.useMemoCache(e)}};Ne.cache=function(e){return function(){return e.apply(null,arguments)}};Ne.cacheSignal=function(){return null};Ne.cloneElement=function(e,t,n){if(e===null||e===void 0)throw Error("The argument must be a React element, but you passed "+e+".");var l=y0({},e.props),o=e.key;if(t!=null)for(a in t.key!==void 0&&(o=""+t.key),t)!v0.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(l[a]=t[a]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var i=Array(a),r=0;r<a;r++)i[r]=arguments[r+2];l.children=i}return Lu(e.type,o,l)};Ne.createContext=function(e){return e={$$typeof:Xy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:Iy,_context:e},e};Ne.createElement=function(e,t,n){var l,o={},a=null;if(t!=null)for(l in t.key!==void 0&&(a=""+t.key),t)v0.call(t,l)&&l!=="key"&&l!=="__self"&&l!=="__source"&&(o[l]=t[l]);var i=arguments.length-2;if(i===1)o.children=n;else if(1<i){for(var r=Array(i),s=0;s<i;s++)r[s]=arguments[s+2];o.children=r}if(e&&e.defaultProps)for(l in i=e.defaultProps,i)o[l]===void 0&&(o[l]=i[l]);return Lu(e,a,o)};Ne.createRef=function(){return{current:null}};Ne.forwardRef=function(e){return{$$typeof:qy,render:e}};Ne.isValidElement=Du;Ne.lazy=function(e){return{$$typeof:g0,_payload:{_status:-1,_result:e},_init:Jy}};Ne.memo=function(e,t){return{$$typeof:Qy,type:e,compare:t===void 0?null:t}};Ne.startTransition=function(e){var t=Ct.T,n={};Ct.T=n;try{var l=e(),o=Ct.S;o!==null&&o(n,l),typeof l==="object"&&l!==null&&typeof l.then==="function"&&l.then(Mu,m0)}catch(a){m0(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),Ct.T=t}};Ne.unstable_useCacheRefresh=function(){return Ct.H.useCacheRefresh()};Ne.use=function(e){return Ct.H.use(e)};Ne.useActionState=function(e,t,n){return Ct.H.useActionState(e,t,n)};Ne.useCallback=function(e,t){return Ct.H.useCallback(e,t)};Ne.useContext=function(e){return Ct.H.useContext(e)};Ne.useDebugValue=function(){};Ne.useDeferredValue=function(e,t){return Ct.H.useDeferredValue(e,t)};Ne.useEffect=function(e,t){return Ct.H.useEffect(e,t)};Ne.useEffectEvent=function(e){return Ct.H.useEffectEvent(e)};Ne.useId=function(){return Ct.H.useId()};Ne.useImperativeHandle=function(e,t,n){return Ct.H.useImperativeHandle(e,t,n)};Ne.useInsertionEffect=function(e,t){return Ct.H.useInsertionEffect(e,t)};Ne.useLayoutEffect=function(e,t){return Ct.H.useLayoutEffect(e,t)};Ne.useMemo=function(e,t){return Ct.H.useMemo(e,t)};Ne.useOptimistic=function(e,t){return Ct.H.useOptimistic(e,t)};Ne.useReducer=function(e,t,n){return Ct.H.useReducer(e,t,n)};Ne.useRef=function(e){return Ct.H.useRef(e)};Ne.useState=function(e){return Ct.H.useState(e)};Ne.useSyncExternalStore=function(e,t,n){return Ct.H.useSyncExternalStore(e,t,n)};Ne.useTransition=function(){return Ct.H.useTransition()};Ne.version="19.2.8"});var hl=Ml(function(e5,k0){k0.exports=w0()});var C0=Ml(function(yn){var t5=hl();function S0(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function _o(){}var pn={d:{f:_o,r:function(){throw Error(S0(522))},D:_o,C:_o,L:_o,m:_o,X:_o,S:_o,M:_o},p:0,findDOMNode:null},n5=Symbol.for("react.portal");function l5(e,t,n){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:n5,key:l==null?null:""+l,children:e,containerInfo:t,implementation:n}}var Xi=t5.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function ps(e,t){if(e==="font")return"";if(typeof t==="string")return t==="use-credentials"?t:""}yn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=pn;yn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(S0(299));return l5(e,t,null,n)};yn.flushSync=function(e){var t=Xi.T,n=pn.p;try{if(Xi.T=null,pn.p=2,e)return e()}finally{Xi.T=t,pn.p=n,pn.d.f()}};yn.preconnect=function(e,t){typeof e==="string"&&(t?(t=t.crossOrigin,t=typeof t==="string"?t==="use-credentials"?t:"":void 0):t=null,pn.d.C(e,t))};yn.prefetchDNS=function(e){typeof e==="string"&&pn.d.D(e)};yn.preinit=function(e,t){if(typeof e==="string"&&t&&typeof t.as==="string"){var n=t.as,l=ps(n,t.crossOrigin),o=typeof t.integrity==="string"?t.integrity:void 0,a=typeof t.fetchPriority==="string"?t.fetchPriority:void 0;n==="style"?pn.d.S(e,typeof t.precedence==="string"?t.precedence:void 0,{crossOrigin:l,integrity:o,fetchPriority:a}):n==="script"&&pn.d.X(e,{crossOrigin:l,integrity:o,fetchPriority:a,nonce:typeof t.nonce==="string"?t.nonce:void 0})}};yn.preinitModule=function(e,t){if(typeof e==="string")if(typeof t==="object"&&t!==null){if(t.as==null||t.as==="script"){var n=ps(t.as,t.crossOrigin);pn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==="string"?t.integrity:void 0,nonce:typeof t.nonce==="string"?t.nonce:void 0})}}else t==null&&pn.d.M(e)};yn.preload=function(e,t){if(typeof e==="string"&&typeof t==="object"&&t!==null&&typeof t.as==="string"){var n=t.as,l=ps(n,t.crossOrigin);pn.d.L(e,n,{crossOrigin:l,integrity:typeof t.integrity==="string"?t.integrity:void 0,nonce:typeof t.nonce==="string"?t.nonce:void 0,type:typeof t.type==="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority==="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==="string"?t.imageSizes:void 0,media:typeof t.media==="string"?t.media:void 0})}};yn.preloadModule=function(e,t){if(typeof e==="string")if(t){var n=ps(t.as,t.crossOrigin);pn.d.m(e,{as:typeof t.as==="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==="string"?t.integrity:void 0})}else pn.d.m(e)};yn.requestFormReset=function(e){pn.d.r(e)};yn.unstable_batchedUpdates=function(e,t){return e(t)};yn.useFormState=function(e,t,n){return Xi.H.useFormState(e,t,n)};yn.useFormStatus=function(){return Xi.H.useHostTransitionStatus()};yn.version="19.2.8"});var ys=Ml(function(o5,E0){function M0(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=="function")return;try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M0)}catch(e){console.error(e)}}M0(),E0.exports=C0()});var A0=Ml(function(bs){var a5=Symbol.for("react.transitional.element"),i5=Symbol.for("react.fragment");function T0(e,t,n){var l=null;if(n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),"key"in t){n={};for(var o in t)o!=="key"&&(n[o]=t[o])}else n=t;return t=n.ref,{$$typeof:a5,type:e,key:l,ref:t!==void 0?t:null,props:n}}bs.Fragment=i5;bs.jsx=T0;bs.jsxs=T0});var hn=Ml(function(r5,L0){L0.exports=A0()});var Th=Ml(function(Lt){function nd(e,t){var n=e.length;e.push(t);e:for(;0<n;){var l=n-1>>>1,o=e[l];if(0<Rs(o,t))e[l]=t,e[n]=o,n=l;else break e}}function Al(e){return e.length===0?null:e[0]}function Us(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var l=0,o=e.length,a=o>>>1;l<a;){var i=2*(l+1)-1,r=e[i],s=i+1,g=e[s];if(0>Rs(r,n))s<o&&0>Rs(g,r)?(e[l]=g,e[s]=n,l=s):(e[l]=r,e[i]=n,l=i);else if(s<o&&0>Rs(g,n))e[l]=g,e[s]=n,l=s;else break e}}return t}function Rs(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Lt.unstable_now=void 0;if(typeof performance==="object"&&typeof performance.now==="function")ld=performance,Lt.unstable_now=function(){return ld.now()};else Bs=Date,od=Bs.now(),Lt.unstable_now=function(){return Bs.now()-od};var ld,Bs,od,Yl=[],ho=[],Cx=1,Kn=null,mn=3,ad=!1,er=!1,tr=!1,rd=!1,kh=typeof setTimeout==="function"?setTimeout:null,Sh=typeof clearTimeout==="function"?clearTimeout:null,wh=typeof setImmediate<"u"?setImmediate:null;function Hs(e){for(var t=Al(ho);t!==null;){if(t.callback===null)Us(ho);else if(t.startTime<=e)Us(ho),t.sortIndex=t.expirationTime,nd(Yl,t);else break;t=Al(ho)}}function sd(e){if(tr=!1,Hs(e),!er)if(Al(Yl)!==null)er=!0,Ia||(Ia=!0,ja());else{var t=Al(ho);t!==null&&cd(sd,t.startTime-e)}}var Ia=!1,nr=-1,Ch=5,Mh=-1;function Eh(){return rd?!0:Lt.unstable_now()-Mh<Ch?!1:!0}function td(){if(rd=!1,Ia){var e=Lt.unstable_now();Mh=e;var t=!0;try{e:{er=!1,tr&&(tr=!1,Sh(nr),nr=-1),ad=!0;var n=mn;try{t:{Hs(e);for(Kn=Al(Yl);Kn!==null&&!(Kn.expirationTime>e&&Eh());){var l=Kn.callback;if(typeof l==="function"){Kn.callback=null,mn=Kn.priorityLevel;var o=l(Kn.expirationTime<=e);if(e=Lt.unstable_now(),typeof o==="function"){Kn.callback=o,Hs(e),t=!0;break t}Kn===Al(Yl)&&Us(Yl),Hs(e)}else Us(Yl);Kn=Al(Yl)}if(Kn!==null)t=!0;else{var a=Al(ho);a!==null&&cd(sd,a.startTime-e),t=!1}}break e}finally{Kn=null,mn=n,ad=!1}t=void 0}}finally{t?ja():Ia=!1}}}var ja;if(typeof wh==="function")ja=function(){wh(td)};else if(typeof MessageChannel<"u")$s=new MessageChannel,id=$s.port2,$s.port1.onmessage=td,ja=function(){id.postMessage(null)};else ja=function(){kh(td,0)};var $s,id;function cd(e,t){nr=kh(function(){e(Lt.unstable_now())},t)}Lt.unstable_IdlePriority=5;Lt.unstable_ImmediatePriority=1;Lt.unstable_LowPriority=4;Lt.unstable_NormalPriority=3;Lt.unstable_Profiling=null;Lt.unstable_UserBlockingPriority=2;Lt.unstable_cancelCallback=function(e){e.callback=null};Lt.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ch=0<e?Math.floor(1000/e):5};Lt.unstable_getCurrentPriorityLevel=function(){return mn};Lt.unstable_next=function(e){switch(mn){case 1:case 2:case 3:var t=3;break;default:t=mn}var n=mn;mn=t;try{return e()}finally{mn=n}};Lt.unstable_requestPaint=function(){rd=!0};Lt.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=mn;mn=e;try{return t()}finally{mn=n}};Lt.unstable_scheduleCallback=function(e,t,n){var l=Lt.unstable_now();switch(typeof n==="object"&&n!==null?(n=n.delay,n=typeof n==="number"&&0<n?l+n:l):n=l,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5000}return o=n+o,e={id:Cx++,callback:t,priorityLevel:e,startTime:n,expirationTime:o,sortIndex:-1},n>l?(e.sortIndex=n,nd(ho,e),Al(Yl)===null&&e===Al(ho)&&(tr?(Sh(nr),nr=-1):tr=!0,cd(sd,n-l))):(e.sortIndex=o,nd(Yl,e),er||ad||(er=!0,Ia||(Ia=!0,ja()))),e};Lt.unstable_shouldYield=Eh;Lt.unstable_wrapCallback=function(e){var t=mn;return function(){var n=mn;mn=t;try{return e.apply(this,arguments)}finally{mn=n}}}});var Lh=Ml(function(Mx,Ah){Ah.exports=Th()});var Yp=Ml(function(ru){var tn=Lh(),em=hl(),Ex=ys();function B(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function tm(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Wr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function nm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function lm(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Dh(e){if(Wr(e)!==e)throw Error(B(188))}function Tx(e){var t=e.alternate;if(!t){if(t=Wr(e),t===null)throw Error(B(188));return t!==e?null:e}for(var n=e,l=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(l=o.return,l!==null){n=l;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return Dh(o),e;if(a===l)return Dh(o),t;a=a.sibling}throw Error(B(188))}if(n.return!==l.return)n=o,l=a;else{for(var i=!1,r=o.child;r;){if(r===n){i=!0,n=o,l=a;break}if(r===l){i=!0,l=o,n=a;break}r=r.sibling}if(!i){for(r=a.child;r;){if(r===n){i=!0,n=a,l=o;break}if(r===l){i=!0,l=a,n=o;break}r=r.sibling}if(!i)throw Error(B(189))}}if(n.alternate!==l)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?e:t}function om(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=om(e),t!==null)return t;e=e.sibling}return null}var Tt=Object.assign,Ax=Symbol.for("react.element"),Ys=Symbol.for("react.transitional.element"),cr=Symbol.for("react.portal"),Va=Symbol.for("react.fragment"),am=Symbol.for("react.strict_mode"),Id=Symbol.for("react.profiler"),im=Symbol.for("react.consumer"),Vl=Symbol.for("react.context"),U_=Symbol.for("react.forward_ref"),Xd=Symbol.for("react.suspense"),qd=Symbol.for("react.suspense_list"),Y_=Symbol.for("react.memo"),mo=Symbol.for("react.lazy"),Wd=Symbol.for("react.activity"),Lx=Symbol.for("react.memo_cache_sentinel"),Nh=Symbol.iterator;function lr(e){if(e===null||typeof e!=="object")return null;return e=Nh&&e[Nh]||e["@@iterator"],typeof e==="function"?e:null}var Dx=Symbol.for("react.client.reference");function Qd(e){if(e==null)return null;if(typeof e==="function")return e.$$typeof===Dx?null:e.displayName||e.name||null;if(typeof e==="string")return e;switch(e){case Va:return"Fragment";case Id:return"Profiler";case am:return"StrictMode";case Xd:return"Suspense";case qd:return"SuspenseList";case Wd:return"Activity"}if(typeof e==="object")switch(e.$$typeof){case cr:return"Portal";case Vl:return e.displayName||"Context";case im:return(e._context.displayName||"Context")+".Consumer";case U_:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Y_:return t=e.displayName||null,t!==null?t:Qd(e.type)||"Memo";case mo:t=e._payload,e=e._init;try{return Qd(e(t))}catch(n){}}return null}var ur=Array.isArray,Se=em.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,it=Ex.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ra={pending:!1,data:null,method:null,action:null},Gd=[],Za=-1;function Ol(e){return{current:e}}function an(e){0>Za||(e.current=Gd[Za],Gd[Za]=null,Za--)}function St(e,t){Za++,Gd[Za]=e.current,e.current=t}var zl=Ol(null),Dr=Ol(null),Mo=Ol(null),gc=Ol(null);function pc(e,t){switch(St(Mo,t),St(Dr,e),St(zl,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)?(e=e.namespaceURI)?H1(e):0:0;break;default:if(e=t.tagName,t=t.namespaceURI)t=H1(t),e=Mp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}an(zl),St(zl,e)}function fi(){an(zl),an(Dr),an(Mo)}function Vd(e){e.memoizedState!==null&&St(gc,e);var t=zl.current,n=Mp(t,e.type);t!==n&&(St(Dr,e),St(zl,n))}function yc(e){Dr.current===e&&(an(zl),an(Dr)),gc.current===e&&(an(gc),Ir._currentValue=ra)}var ud,zh;function na(e){if(ud===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ud=t&&t[1]||"",zh=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ud+e+zh}var dd=!1;function _d(e,t){if(!e||dd)return"";dd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var b=function(){throw Error()};if(Object.defineProperty(b.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==="object"&&Reflect.construct){try{Reflect.construct(b,[])}catch(w){var f=w}Reflect.construct(e,[],b)}else{try{b.call()}catch(w){f=w}e.call(b.prototype)}}else{try{throw Error()}catch(w){f=w}(b=e())&&typeof b.catch==="function"&&b.catch(function(){})}}catch(w){if(w&&f&&typeof w.stack==="string")return[w.stack,f.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=l.DetermineComponentFrameRoot(),i=a[0],r=a[1];if(i&&r){var s=i.split(`
`),g=r.split(`
`);for(o=l=0;l<s.length&&!s[l].includes("DetermineComponentFrameRoot");)l++;for(;o<g.length&&!g[o].includes("DetermineComponentFrameRoot");)o++;if(l===s.length||o===g.length)for(l=s.length-1,o=g.length-1;1<=l&&0<=o&&s[l]!==g[o];)o--;for(;1<=l&&0<=o;l--,o--)if(s[l]!==g[o]){if(l!==1||o!==1)do if(l--,o--,0>o||s[l]!==g[o]){var _=`
`+s[l].replace(" at new "," at ");return e.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",e.displayName)),_}while(1<=l&&0<=o);break}}}finally{dd=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?na(n):""}function Nx(e,t){switch(e.tag){case 26:case 27:case 5:return na(e.type);case 16:return na("Lazy");case 13:return e.child!==t&&t!==null?na("Suspense Fallback"):na("Suspense");case 19:return na("SuspenseList");case 0:case 15:return _d(e.type,!1);case 11:return _d(e.type.render,!1);case 1:return _d(e.type,!0);case 31:return na("Activity");default:return""}}function Oh(e){try{var t="",n=null;do t+=Nx(e,n),n=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Zd=Object.prototype.hasOwnProperty,{unstable_scheduleCallback:j_,unstable_cancelCallback:fd,unstable_shouldYield:zx,unstable_requestPaint:Ox,unstable_now:Un,unstable_getCurrentPriorityLevel:Rx,unstable_ImmediatePriority:rm,unstable_UserBlockingPriority:sm,unstable_NormalPriority:bc,unstable_LowPriority:Bx,unstable_IdlePriority:cm,log:Hx,unstable_setDisableYieldValue:$x}=tn,Qr=null,Yn=null;function vo(e){if(typeof Hx==="function"&&$x(e),Yn&&typeof Yn.setStrictMode==="function")try{Yn.setStrictMode(Qr,e)}catch(t){}}var jn=Math.clz32?Math.clz32:jx,{log:Ux,LN2:Yx}=Math;function jx(e){return e>>>=0,e===0?32:31-(Ux(e)/Yx|0)|0}var js=256,Is=262144,Xs=4194304;function la(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Wc(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var o=0,a=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var r=l&134217727;return r!==0?(l=r&~a,l!==0?o=la(l):(i&=r,i!==0?o=la(i):n||(n=r&~e,n!==0&&(o=la(n))))):(r=l&~a,r!==0?o=la(r):i!==0?o=la(i):n||(n=l&~e,n!==0&&(o=la(n)))),o===0?0:t!==0&&t!==o&&(t&a)===0&&(a=o&-o,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:o}function Gr(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ix(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5000;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function um(){var e=Xs;return Xs<<=1,(Xs&62914560)===0&&(Xs=4194304),e}function hd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Vr(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Xx(e,t,n,l,o,a){var i=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var{entanglements:r,expirationTimes:s,hiddenUpdates:g}=e;for(n=i&~n;0<n;){var _=31-jn(n),b=1<<_;r[_]=0,s[_]=-1;var f=g[_];if(f!==null)for(g[_]=null,_=0;_<f.length;_++){var w=f[_];w!==null&&(w.lane&=-536870913)}n&=~b}l!==0&&dm(e,l,0),a!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=a&~(i&~t))}function dm(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-jn(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&261930}function _m(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-jn(n),o=1<<l;o&t|e[l]&t&&(e[l]|=t),n&=~o}}function fm(e,t){var n=t&-t;return n=(n&42)!==0?1:I_(n),(n&(e.suspendedLanes|t))!==0?0:n}function I_(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function X_(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function hm(){var e=it.p;if(e!==0)return e;return e=window.event,e===void 0?32:Hp(e.type)}function Rh(e,t){var n=it.p;try{return it.p=e,t()}finally{it.p=n}}var Uo=Math.random().toString(36).slice(2),cn="__reactFiber$"+Uo,Ln="__reactProps$"+Uo,Si="__reactContainer$"+Uo,Kd="__reactEvents$"+Uo,qx="__reactListeners$"+Uo,Wx="__reactHandles$"+Uo,Bh="__reactResources$"+Uo,Zr="__reactMarker$"+Uo;function q_(e){delete e[cn],delete e[Ln],delete e[Kd],delete e[qx],delete e[Wx]}function Ka(e){var t=e[cn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Si]||n[cn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=I1(e);e!==null;){if(n=e[cn])return n;e=I1(e)}return t}e=n,n=e.parentNode}return null}function Ci(e){if(e=e[cn]||e[Si]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function dr(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(B(33))}function ii(e){var t=e[Bh];return t||(t=e[Bh]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function on(e){e[Zr]=!0}var mm=new Set,gm={};function pa(e,t){hi(e,t),hi(e+"Capture",t)}function hi(e,t){gm[e]=t;for(e=0;e<t.length;e++)mm.add(t[e])}var Qx=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Hh={},$h={};function Gx(e){if(Zd.call($h,e))return!0;if(Zd.call(Hh,e))return!1;if(Qx.test(e))return $h[e]=!0;return Hh[e]=!0,!1}function ec(e,t,n){if(Gx(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function qs(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function jl(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}function Jn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vx(e,t,n){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get==="function"&&typeof l.set==="function"){var{get:o,set:a}=l;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){n=""+i,a.call(this,i)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(i){n=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fd(e){if(!e._valueTracker){var t=pm(e)?"checked":"value";e._valueTracker=Vx(e,t,""+e[t])}}function ym(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=pm(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function xc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch(t){return e.body}}var Zx=/[\n"\\]/g;function tl(e){return e.replace(Zx,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Jd(e,t,n,l,o,a,i,r){if(e.name="",i!=null&&typeof i!=="function"&&typeof i!=="symbol"&&typeof i!=="boolean"?e.type=i:e.removeAttribute("type"),t!=null)if(i==="number"){if(t===0&&e.value===""||e.value!=t)e.value=""+Jn(t)}else e.value!==""+Jn(t)&&(e.value=""+Jn(t));else i!=="submit"&&i!=="reset"||e.removeAttribute("value");t!=null?Pd(e,i,Jn(t)):n!=null?Pd(e,i,Jn(n)):l!=null&&e.removeAttribute("value"),o==null&&a!=null&&(e.defaultChecked=!!a),o!=null&&(e.checked=o&&typeof o!=="function"&&typeof o!=="symbol"),r!=null&&typeof r!=="function"&&typeof r!=="symbol"&&typeof r!=="boolean"?e.name=""+Jn(r):e.removeAttribute("name")}function bm(e,t,n,l,o,a,i,r){if(a!=null&&typeof a!=="function"&&typeof a!=="symbol"&&typeof a!=="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!==void 0&&t!==null)){Fd(e);return}n=n!=null?""+Jn(n):"",t=t!=null?""+Jn(t):n,r||t===e.value||(e.value=t),e.defaultValue=t}l=l!=null?l:o,l=typeof l!=="function"&&typeof l!=="symbol"&&!!l,e.checked=r?e.checked:!!l,e.defaultChecked=!!l,i!=null&&typeof i!=="function"&&typeof i!=="symbol"&&typeof i!=="boolean"&&(e.name=i),Fd(e)}function Pd(e,t,n){t==="number"&&xc(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ri(e,t,n,l){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&l&&(e[n].defaultSelected=!0)}else{n=""+Jn(n),t=null;for(o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,l&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function xm(e,t,n){if(t!=null&&(t=""+Jn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Jn(n):""}function vm(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(B(92));if(ur(l)){if(1<l.length)throw Error(B(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=Jn(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l),Fd(e)}function mi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Kx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Uh(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n==="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!=="number"||n===0||Kx.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function wm(e,t,n){if(t!=null&&typeof t!=="object")throw Error(B(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var o in t)l=t[o],t.hasOwnProperty(o)&&n[o]!==l&&Uh(e,o,l)}else for(var a in t)t.hasOwnProperty(a)&&Uh(e,a,t[a])}function W_(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Jx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function tc(e){return Jx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zl(){}var e_=null;function Q_(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fa=null,si=null;function Yh(e){var t=Ci(e);if(t&&(e=t.stateNode)){var n=e[Ln]||null;e:switch(e=t.stateNode,t.type){case"input":if(Jd(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;n=n.querySelectorAll('input[name="'+tl(""+t)+'"][type="radio"]');for(t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var o=l[Ln]||null;if(!o)throw Error(B(90));Jd(l,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&ym(l)}break e;case"textarea":xm(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ri(e,!!n.multiple,t,!1)}}}var md=!1;function km(e,t,n){if(md)return e(t,n);md=!0;try{var l=e(t);return l}finally{if(md=!1,Fa!==null||si!==null){if(lu(),Fa&&(t=Fa,e=si,si=Fa=null,Yh(t),e))for(t=0;t<e.length;t++)Yh(e[t])}}}function Nr(e,t){var n=e.stateNode;if(n===null)return null;var l=n[Ln]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!=="function")throw Error(B(231,t,typeof n));return n}var eo=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),t_=!1;if(eo)try{oa={},Object.defineProperty(oa,"passive",{get:function(){t_=!0}}),window.addEventListener("test",oa,oa),window.removeEventListener("test",oa,oa)}catch(e){t_=!1}var oa,wo=null,G_=null,nc=null;function Sm(){if(nc)return nc;var e,t=G_,n=t.length,l,o="value"in wo?wo.value:wo.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(l=1;l<=i&&t[n-l]===o[a-l];l++);return nc=o.slice(e,1<l?1-l:void 0)}function lc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ws(){return!0}function jh(){return!1}function Dn(e){function t(n,l,o,a,i){this._reactName=n,this._targetInst=o,this.type=l,this.nativeEvent=a,this.target=i,this.currentTarget=null;for(var r in e)e.hasOwnProperty(r)&&(n=e[r],this[r]=n?n(a):a[r]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Ws:jh,this.isPropagationStopped=jh,this}return Tt(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!=="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ws)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!=="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ws)},persist:function(){},isPersistent:Ws}),t}var ya={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qc=Dn(ya),Kr=Tt({},ya,{view:0,detail:0}),Px=Dn(Kr),gd,pd,or,Gc=Tt({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:V_,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){if("movementX"in e)return e.movementX;return e!==or&&(or&&e.type==="mousemove"?(gd=e.screenX-or.screenX,pd=e.screenY-or.screenY):pd=gd=0,or=e),gd},movementY:function(e){return"movementY"in e?e.movementY:pd}}),Ih=Dn(Gc),ev=Tt({},Gc,{dataTransfer:0}),tv=Dn(ev),nv=Tt({},Kr,{relatedTarget:0}),yd=Dn(nv),lv=Tt({},ya,{animationName:0,elapsedTime:0,pseudoElement:0}),ov=Dn(lv),av=Tt({},ya,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),iv=Dn(av),rv=Tt({},ya,{data:0}),Xh=Dn(rv),sv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=uv[e])?!!t[e]:!1}function V_(){return dv}var _v=Tt({},Kr,{key:function(e){if(e.key){var t=sv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=lc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:V_,charCode:function(e){return e.type==="keypress"?lc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?lc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fv=Dn(_v),hv=Tt({},Gc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qh=Dn(hv),mv=Tt({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:V_}),gv=Dn(mv),pv=Tt({},ya,{propertyName:0,elapsedTime:0,pseudoElement:0}),yv=Dn(pv),bv=Tt({},Gc,{deltaX:function(e){return"deltaX"in e?e.deltaX:("wheelDeltaX"in e)?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:("wheelDeltaY"in e)?-e.wheelDeltaY:("wheelDelta"in e)?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xv=Dn(bv),vv=Tt({},ya,{newState:0,oldState:0}),wv=Dn(vv),kv=[9,13,27,32],Z_=eo&&"CompositionEvent"in window,yr=null;eo&&"documentMode"in document&&(yr=document.documentMode);var Sv=eo&&"TextEvent"in window&&!yr,Cm=eo&&(!Z_||yr&&8<yr&&11>=yr),Wh=String.fromCharCode(32),Qh=!1;function Mm(e,t){switch(e){case"keyup":return kv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Em(e){return e=e.detail,typeof e==="object"&&"data"in e?e.data:null}var Ja=!1;function Cv(e,t){switch(e){case"compositionend":return Em(t);case"keypress":if(t.which!==32)return null;return Qh=!0,Wh;case"textInput":return e=t.data,e===Wh&&Qh?null:e;default:return null}}function Mv(e,t){if(Ja)return e==="compositionend"||!Z_&&Mm(e,t)?(e=Sm(),nc=G_=wo=null,Ja=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cm&&t.locale!=="ko"?null:t.data;default:return null}}var Ev={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ev[e.type]:t==="textarea"?!0:!1}function Tm(e,t,n,l){Fa?si?si.push(l):si=[l]:Fa=l,t=$c(t,"onChange"),0<t.length&&(n=new Qc("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var br=null,zr=null;function Tv(e){kp(e,0)}function Vc(e){var t=dr(e);if(ym(t))return e}function Vh(e,t){if(e==="change")return t}var Am=!1;if(eo){if(eo){if(fr="oninput"in document,!fr)oc=document.createElement("div"),oc.setAttribute("oninput","return;"),fr=typeof oc.oninput==="function";_r=fr}else _r=!1;Am=_r&&(!document.documentMode||9<document.documentMode)}var _r,fr,oc;function Zh(){br&&(br.detachEvent("onpropertychange",Lm),zr=br=null)}function Lm(e){if(e.propertyName==="value"&&Vc(zr)){var t=[];Tm(t,zr,e,Q_(e)),km(Tv,t)}}function Av(e,t,n){e==="focusin"?(Zh(),br=t,zr=n,br.attachEvent("onpropertychange",Lm)):e==="focusout"&&Zh()}function Lv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vc(zr)}function Dv(e,t){if(e==="click")return Vc(t)}function Nv(e,t){if(e==="input"||e==="change")return Vc(t)}function zv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Xn=typeof Object.is==="function"?Object.is:zv;function Or(e,t){if(Xn(e,t))return!0;if(typeof e!=="object"||e===null||typeof t!=="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var o=n[l];if(!Zd.call(t,o)||!Xn(e[o],t[o]))return!1}return!0}function Kh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fh(e,t){var n=Kh(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Kh(n)}}function Dm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Dm(e,t.parentNode):("contains"in e)?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=xc(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==="string"}catch(l){n=!1}if(n)e=t.contentWindow;else break;t=xc(e.document)}return t}function K_(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Ov=eo&&"documentMode"in document&&11>=document.documentMode,Pa=null,n_=null,xr=null,l_=!1;function Jh(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;l_||Pa==null||Pa!==xc(l)||(l=Pa,("selectionStart"in l)&&K_(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),xr&&Or(xr,l)||(xr=l,l=$c(n_,"onSelect"),0<l.length&&(t=new Qc("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=Pa)))}function ta(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ei={animationend:ta("Animation","AnimationEnd"),animationiteration:ta("Animation","AnimationIteration"),animationstart:ta("Animation","AnimationStart"),transitionrun:ta("Transition","TransitionRun"),transitionstart:ta("Transition","TransitionStart"),transitioncancel:ta("Transition","TransitionCancel"),transitionend:ta("Transition","TransitionEnd")},bd={},zm={};eo&&(zm=document.createElement("div").style,("AnimationEvent"in window)||(delete ei.animationend.animation,delete ei.animationiteration.animation,delete ei.animationstart.animation),("TransitionEvent"in window)||delete ei.transitionend.transition);function ba(e){if(bd[e])return bd[e];if(!ei[e])return e;var t=ei[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in zm)return bd[e]=t[n];return e}var Om=ba("animationend"),Rm=ba("animationiteration"),Bm=ba("animationstart"),Rv=ba("transitionrun"),Bv=ba("transitionstart"),Hv=ba("transitioncancel"),Hm=ba("transitionend"),$m=new Map,o_="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");o_.push("scrollEnd");function yl(e,t){$m.set(e,t),pa(t,[e])}var vc=typeof reportError==="function"?reportError:function(e){if(typeof window==="object"&&typeof window.ErrorEvent==="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e==="object"&&e!==null&&typeof e.message==="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==="object"&&typeof process.emit==="function"){process.emit("uncaughtException",e);return}console.error(e)},Fn=[],ti=0,F_=0;function Zc(){for(var e=ti,t=F_=ti=0;t<e;){var n=Fn[t];Fn[t++]=null;var l=Fn[t];Fn[t++]=null;var o=Fn[t];Fn[t++]=null;var a=Fn[t];if(Fn[t++]=null,l!==null&&o!==null){var i=l.pending;i===null?o.next=o:(o.next=i.next,i.next=o),l.pending=o}a!==0&&Um(n,o,a)}}function Kc(e,t,n,l){Fn[ti++]=e,Fn[ti++]=t,Fn[ti++]=n,Fn[ti++]=l,F_|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function J_(e,t,n,l){return Kc(e,t,n,l),wc(e)}function xa(e,t){return Kc(e,null,null,t),wc(e)}function Um(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var o=!1,a=e.return;a!==null;)a.childLanes|=n,l=a.alternate,l!==null&&(l.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(o=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,o&&t!==null&&(o=31-jn(n),e=a.hiddenUpdates,l=e[o],l===null?e[o]=[t]:l.push(t),t.lane=n|536870912),a):null}function wc(e){if(50<Ar)throw Ar=0,C_=null,Error(B(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ni={};function $v(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(e,t,n,l){return new $v(e,t,n,l)}function P_(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fl(e,t){var n=e.alternate;return n===null?(n=Hn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ym(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ac(e,t,n,l,o,a){var i=0;if(l=e,typeof e==="function")P_(e)&&(i=1);else if(typeof e==="string")i=j4(e,n,zl.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Wd:return e=Hn(31,n,t,o),e.elementType=Wd,e.lanes=a,e;case Va:return sa(n.children,o,a,t);case am:i=8,o|=24;break;case Id:return e=Hn(12,n,t,o|2),e.elementType=Id,e.lanes=a,e;case Xd:return e=Hn(13,n,t,o),e.elementType=Xd,e.lanes=a,e;case qd:return e=Hn(19,n,t,o),e.elementType=qd,e.lanes=a,e;default:if(typeof e==="object"&&e!==null)switch(e.$$typeof){case Vl:i=10;break e;case im:i=9;break e;case U_:i=11;break e;case Y_:i=14;break e;case mo:i=16,l=null;break e}i=29,n=Error(B(130,e===null?"null":typeof e,"")),l=null}return t=Hn(i,n,t,o),t.elementType=e,t.type=l,t.lanes=a,t}function sa(e,t,n,l){return e=Hn(7,e,l,t),e.lanes=n,e}function xd(e,t,n){return e=Hn(6,e,null,t),e.lanes=n,e}function jm(e){var t=Hn(18,null,null,0);return t.stateNode=e,t}function vd(e,t,n){return t=Hn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ph=new WeakMap;function nl(e,t){if(typeof e==="object"&&e!==null){var n=Ph.get(e);if(n!==void 0)return n;return t={value:e,source:t,stack:Oh(t)},Ph.set(e,t),t}return{value:e,source:t,stack:Oh(t)}}var li=[],oi=0,kc=null,Rr=0,Pn=[],el=0,Ro=null,Ll=1,Dl="";function Ql(e,t){li[oi++]=Rr,li[oi++]=kc,kc=e,Rr=t}function Im(e,t,n){Pn[el++]=Ll,Pn[el++]=Dl,Pn[el++]=Ro,Ro=e;var l=Ll;e=Dl;var o=32-jn(l)-1;l&=~(1<<o),n+=1;var a=32-jn(t)+o;if(30<a){var i=o-o%5;a=(l&(1<<i)-1).toString(32),l>>=i,o-=i,Ll=1<<32-jn(t)+o|n<<o|l,Dl=a+e}else Ll=1<<a|n<<o|l,Dl=e}function ef(e){e.return!==null&&(Ql(e,1),Im(e,1,0))}function tf(e){for(;e===kc;)kc=li[--oi],li[oi]=null,Rr=li[--oi],li[oi]=null;for(;e===Ro;)Ro=Pn[--el],Pn[el]=null,Dl=Pn[--el],Pn[el]=null,Ll=Pn[--el],Pn[el]=null}function Xm(e,t){Pn[el++]=Ll,Pn[el++]=Dl,Pn[el++]=Ro,Ll=t.id,Dl=t.overflow,Ro=e}var un=null,Et=null,Ge=!1,Eo=null,ll=!1,a_=Error(B(519));function Bo(e){var t=Error(B(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Br(nl(t,e)),a_}function e1(e){var{stateNode:t,type:n,memoizedProps:l}=e;switch(t[cn]=e,t[Ln]=l,n){case"dialog":Ie("cancel",t),Ie("close",t);break;case"iframe":case"object":case"embed":Ie("load",t);break;case"video":case"audio":for(n=0;n<Yr.length;n++)Ie(Yr[n],t);break;case"source":Ie("error",t);break;case"img":case"image":case"link":Ie("error",t),Ie("load",t);break;case"details":Ie("toggle",t);break;case"input":Ie("invalid",t),bm(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Ie("invalid",t);break;case"textarea":Ie("invalid",t),vm(t,l.value,l.defaultValue,l.children)}n=l.children,typeof n!=="string"&&typeof n!=="number"&&typeof n!=="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||Cp(t.textContent,n)?(l.popover!=null&&(Ie("beforetoggle",t),Ie("toggle",t)),l.onScroll!=null&&Ie("scroll",t),l.onScrollEnd!=null&&Ie("scrollend",t),l.onClick!=null&&(t.onclick=Zl),t=!0):t=!1,t||Bo(e,!0)}function t1(e){for(un=e.return;un;)switch(un.tag){case 5:case 31:case 13:ll=!1;return;case 27:case 3:ll=!0;return;default:un=un.return}}function Xa(e){if(e!==un)return!1;if(!Ge)return t1(e),Ge=!0,!1;var t=e.tag,n;if(n=t!==3&&t!==27){if(n=t===5)n=e.type,n=!(n!=="form"&&n!=="button")||N_(e.type,e.memoizedProps);n=!n}if(n&&Et&&Bo(e),t1(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(B(317));Et=j1(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(B(317));Et=j1(e)}else t===27?(t=Et,Yo(e.type)?(e=B_,B_=null,Et=e):Et=t):Et=un?al(e.stateNode.nextSibling):null;return!0}function _a(){Et=un=null,Ge=!1}function wd(){var e=Eo;return e!==null&&(Tn===null?Tn=e:Tn.push.apply(Tn,e),Eo=null),e}function Br(e){Eo===null?Eo=[e]:Eo.push(e)}var i_=Ol(null),va=null,Kl=null;function po(e,t,n){St(i_,t._currentValue),t._currentValue=n}function Jl(e){e._currentValue=i_.current,an(i_)}function r_(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function s_(e,t,n,l){var o=e.child;o!==null&&(o.return=e);for(;o!==null;){var a=o.dependencies;if(a!==null){var i=o.child;a=a.firstContext;e:for(;a!==null;){var r=a;a=o;for(var s=0;s<t.length;s++)if(r.context===t[s]){a.lanes|=n,r=a.alternate,r!==null&&(r.lanes|=n),r_(a.return,n,e),l||(i=null);break e}a=r.next}}else if(o.tag===18){if(i=o.return,i===null)throw Error(B(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),r_(i,n,e),i=null}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===e){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}}function Mi(e,t,n,l){e=null;for(var o=t,a=!1;o!==null;){if(!a){if((o.flags&524288)!==0)a=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var i=o.alternate;if(i===null)throw Error(B(387));if(i=i.memoizedProps,i!==null){var r=o.type;Xn(o.pendingProps.value,i.value)||(e!==null?e.push(r):e=[r])}}else if(o===gc.current){if(i=o.alternate,i===null)throw Error(B(387));i.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(Ir):e=[Ir])}o=o.return}e!==null&&s_(t,e,n,l),t.flags|=262144}function Sc(e){for(e=e.firstContext;e!==null;){if(!Xn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function fa(e){va=e,Kl=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function dn(e){return qm(va,e)}function Qs(e,t){return va===null&&fa(e),qm(e,t)}function qm(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Kl===null){if(e===null)throw Error(B(308));Kl=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Kl=Kl.next=t;return n}var Uv=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},{unstable_scheduleCallback:Yv,unstable_NormalPriority:jv}=tn,Kt={$$typeof:Vl,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function nf(){return{controller:new Uv,data:new Map,refCount:0}}function Fr(e){e.refCount--,e.refCount===0&&Yv(jv,function(){e.controller.abort()})}var vr=null,c_=0,gi=0,ci=null;function Iv(e,t){if(vr===null){var n=vr=[];c_=0,gi=Tf(),ci={status:"pending",value:void 0,then:function(l){n.push(l)}}}return c_++,t.then(n1,n1),t}function n1(){if(--c_===0&&vr!==null){ci!==null&&(ci.status="fulfilled");var e=vr;vr=null,gi=0,ci=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Xv(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(o){n.push(o)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var o=0;o<n.length;o++)(0,n[o])(t)},function(o){l.status="rejected",l.reason=o;for(o=0;o<n.length;o++)(0,n[o])(void 0)}),l}var l1=Se.S;Se.S=function(e,t){op=Un(),typeof t==="object"&&t!==null&&typeof t.then==="function"&&Iv(e,t),l1!==null&&l1(e,t)};var ca=Ol(null);function lf(){var e=ca.current;return e!==null?e:vt.pooledCache}function ic(e,t){t===null?St(ca,ca.current):St(ca,t.pool)}function Wm(){var e=lf();return e===null?null:{parent:Kt._currentValue,pool:e}}var Ei=Error(B(460)),of=Error(B(474)),Fc=Error(B(542)),Cc={then:function(){}};function o1(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Qm(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Zl,Zl),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,i1(e),e;default:if(typeof t.status==="string")t.then(Zl,Zl);else{if(e=vt,e!==null&&100<e.shellSuspendCounter)throw Error(B(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=l}},function(l){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,i1(e),e}throw ua=t,Ei}}function aa(e){try{var t=e._init;return t(e._payload)}catch(n){if(n!==null&&typeof n==="object"&&typeof n.then==="function")throw ua=n,Ei;throw n}}var ua=null;function a1(){if(ua===null)throw Error(B(459));var e=ua;return ua=null,e}function i1(e){if(e===Ei||e===Fc)throw Error(B(483))}var ui=null,Hr=0;function Gs(e){var t=Hr;return Hr+=1,ui===null&&(ui=[]),Qm(ui,e,t)}function ar(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Vs(e,t){if(t.$$typeof===Ax)throw Error(B(525));throw e=Object.prototype.toString.call(t),Error(B(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Gm(e){function t(h,y){if(e){var k=h.deletions;k===null?(h.deletions=[y],h.flags|=16):k.push(y)}}function n(h,y){if(!e)return null;for(;y!==null;)t(h,y),y=y.sibling;return null}function l(h){for(var y=new Map;h!==null;)h.key!==null?y.set(h.key,h):y.set(h.index,h),h=h.sibling;return y}function o(h,y){return h=Fl(h,y),h.index=0,h.sibling=null,h}function a(h,y,k){if(h.index=k,!e)return h.flags|=1048576,y;if(k=h.alternate,k!==null)return k=k.index,k<y?(h.flags|=67108866,y):k;return h.flags|=67108866,y}function i(h){return e&&h.alternate===null&&(h.flags|=67108866),h}function r(h,y,k,E){if(y===null||y.tag!==6)return y=xd(k,h.mode,E),y.return=h,y;return y=o(y,k),y.return=h,y}function s(h,y,k,E){var Q=k.type;if(Q===Va)return _(h,y,k.props.children,E,k.key);if(y!==null&&(y.elementType===Q||typeof Q==="object"&&Q!==null&&Q.$$typeof===mo&&aa(Q)===y.type))return y=o(y,k.props),ar(y,k),y.return=h,y;return y=ac(k.type,k.key,k.props,null,h.mode,E),ar(y,k),y.return=h,y}function g(h,y,k,E){if(y===null||y.tag!==4||y.stateNode.containerInfo!==k.containerInfo||y.stateNode.implementation!==k.implementation)return y=vd(k,h.mode,E),y.return=h,y;return y=o(y,k.children||[]),y.return=h,y}function _(h,y,k,E,Q){if(y===null||y.tag!==7)return y=sa(k,h.mode,E,Q),y.return=h,y;return y=o(y,k),y.return=h,y}function b(h,y,k){if(typeof y==="string"&&y!==""||typeof y==="number"||typeof y==="bigint")return y=xd(""+y,h.mode,k),y.return=h,y;if(typeof y==="object"&&y!==null){switch(y.$$typeof){case Ys:return k=ac(y.type,y.key,y.props,null,h.mode,k),ar(k,y),k.return=h,k;case cr:return y=vd(y,h.mode,k),y.return=h,y;case mo:return y=aa(y),b(h,y,k)}if(ur(y)||lr(y))return y=sa(y,h.mode,k,null),y.return=h,y;if(typeof y.then==="function")return b(h,Gs(y),k);if(y.$$typeof===Vl)return b(h,Qs(h,y),k);Vs(h,y)}return null}function f(h,y,k,E){var Q=y!==null?y.key:null;if(typeof k==="string"&&k!==""||typeof k==="number"||typeof k==="bigint")return Q!==null?null:r(h,y,""+k,E);if(typeof k==="object"&&k!==null){switch(k.$$typeof){case Ys:return k.key===Q?s(h,y,k,E):null;case cr:return k.key===Q?g(h,y,k,E):null;case mo:return k=aa(k),f(h,y,k,E)}if(ur(k)||lr(k))return Q!==null?null:_(h,y,k,E,null);if(typeof k.then==="function")return f(h,y,Gs(k),E);if(k.$$typeof===Vl)return f(h,y,Qs(h,k),E);Vs(h,k)}return null}function w(h,y,k,E,Q){if(typeof E==="string"&&E!==""||typeof E==="number"||typeof E==="bigint")return h=h.get(k)||null,r(y,h,""+E,Q);if(typeof E==="object"&&E!==null){switch(E.$$typeof){case Ys:return h=h.get(E.key===null?k:E.key)||null,s(y,h,E,Q);case cr:return h=h.get(E.key===null?k:E.key)||null,g(y,h,E,Q);case mo:return E=aa(E),w(h,y,k,E,Q)}if(ur(E)||lr(E))return h=h.get(k)||null,_(y,h,E,Q,null);if(typeof E.then==="function")return w(h,y,k,Gs(E),Q);if(E.$$typeof===Vl)return w(h,y,k,Qs(y,E),Q);Vs(y,E)}return null}function C(h,y,k,E){for(var Q=null,ae=null,z=y,F=y=0,te=null;z!==null&&F<k.length;F++){z.index>F?(te=z,z=null):te=z.sibling;var J=f(h,z,k[F],E);if(J===null){z===null&&(z=te);break}e&&z&&J.alternate===null&&t(h,z),y=a(J,y,F),ae===null?Q=J:ae.sibling=J,ae=J,z=te}if(F===k.length)return n(h,z),Ge&&Ql(h,F),Q;if(z===null){for(;F<k.length;F++)z=b(h,k[F],E),z!==null&&(y=a(z,y,F),ae===null?Q=z:ae.sibling=z,ae=z);return Ge&&Ql(h,F),Q}for(z=l(z);F<k.length;F++)te=w(z,h,F,k[F],E),te!==null&&(e&&te.alternate!==null&&z.delete(te.key===null?F:te.key),y=a(te,y,F),ae===null?Q=te:ae.sibling=te,ae=te);return e&&z.forEach(function(me){return t(h,me)}),Ge&&Ql(h,F),Q}function D(h,y,k,E){if(k==null)throw Error(B(151));for(var Q=null,ae=null,z=y,F=y=0,te=null,J=k.next();z!==null&&!J.done;F++,J=k.next()){z.index>F?(te=z,z=null):te=z.sibling;var me=f(h,z,J.value,E);if(me===null){z===null&&(z=te);break}e&&z&&me.alternate===null&&t(h,z),y=a(me,y,F),ae===null?Q=me:ae.sibling=me,ae=me,z=te}if(J.done)return n(h,z),Ge&&Ql(h,F),Q;if(z===null){for(;!J.done;F++,J=k.next())J=b(h,J.value,E),J!==null&&(y=a(J,y,F),ae===null?Q=J:ae.sibling=J,ae=J);return Ge&&Ql(h,F),Q}for(z=l(z);!J.done;F++,J=k.next())J=w(z,h,F,J.value,E),J!==null&&(e&&J.alternate!==null&&z.delete(J.key===null?F:J.key),y=a(J,y,F),ae===null?Q=J:ae.sibling=J,ae=J);return e&&z.forEach(function(tt){return t(h,tt)}),Ge&&Ql(h,F),Q}function A(h,y,k,E){if(typeof k==="object"&&k!==null&&k.type===Va&&k.key===null&&(k=k.props.children),typeof k==="object"&&k!==null){switch(k.$$typeof){case Ys:e:{for(var Q=k.key;y!==null;){if(y.key===Q){if(Q=k.type,Q===Va){if(y.tag===7){n(h,y.sibling),E=o(y,k.props.children),E.return=h,h=E;break e}}else if(y.elementType===Q||typeof Q==="object"&&Q!==null&&Q.$$typeof===mo&&aa(Q)===y.type){n(h,y.sibling),E=o(y,k.props),ar(E,k),E.return=h,h=E;break e}n(h,y);break}else t(h,y);y=y.sibling}k.type===Va?(E=sa(k.props.children,h.mode,E,k.key),E.return=h,h=E):(E=ac(k.type,k.key,k.props,null,h.mode,E),ar(E,k),E.return=h,h=E)}return i(h);case cr:e:{for(Q=k.key;y!==null;){if(y.key===Q)if(y.tag===4&&y.stateNode.containerInfo===k.containerInfo&&y.stateNode.implementation===k.implementation){n(h,y.sibling),E=o(y,k.children||[]),E.return=h,h=E;break e}else{n(h,y);break}else t(h,y);y=y.sibling}E=vd(k,h.mode,E),E.return=h,h=E}return i(h);case mo:return k=aa(k),A(h,y,k,E)}if(ur(k))return C(h,y,k,E);if(lr(k)){if(Q=lr(k),typeof Q!=="function")throw Error(B(150));return k=Q.call(k),D(h,y,k,E)}if(typeof k.then==="function")return A(h,y,Gs(k),E);if(k.$$typeof===Vl)return A(h,y,Qs(h,k),E);Vs(h,k)}return typeof k==="string"&&k!==""||typeof k==="number"||typeof k==="bigint"?(k=""+k,y!==null&&y.tag===6?(n(h,y.sibling),E=o(y,k),E.return=h,h=E):(n(h,y),E=xd(k,h.mode,E),E.return=h,h=E),i(h)):n(h,y)}return function(h,y,k,E){try{Hr=0;var Q=A(h,y,k,E);return ui=null,Q}catch(z){if(z===Ei||z===Fc)throw z;var ae=Hn(29,z,null,h.mode);return ae.lanes=E,ae.return=h,ae}finally{}}}var ha=Gm(!0),Vm=Gm(!1),go=!1;function af(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function u_(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function To(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ao(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(at&2)!==0){var o=l.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),l.pending=t,t=wc(e),Um(e,null,n),t}return Kc(e,l,t,n),wc(e)}function wr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,_m(e,n)}}function kd(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var i={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?o=a=i:a=a.next=i,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:l.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var d_=!1;function kr(){if(d_){var e=ci;if(e!==null)throw e}}function Sr(e,t,n,l){d_=!1;var o=e.updateQueue;go=!1;var{firstBaseUpdate:a,lastBaseUpdate:i}=o,r=o.shared.pending;if(r!==null){o.shared.pending=null;var s=r,g=s.next;s.next=null,i===null?a=g:i.next=g,i=s;var _=e.alternate;_!==null&&(_=_.updateQueue,r=_.lastBaseUpdate,r!==i&&(r===null?_.firstBaseUpdate=g:r.next=g,_.lastBaseUpdate=s))}if(a!==null){var b=o.baseState;i=0,_=g=s=null,r=a;do{var f=r.lane&-536870913,w=f!==r.lane;if(w?(Qe&f)===f:(l&f)===f){f!==0&&f===gi&&(d_=!0),_!==null&&(_=_.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});e:{var C=e,D=r;f=t;var A=n;switch(D.tag){case 1:if(C=D.payload,typeof C==="function"){b=C.call(A,b,f);break e}b=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=D.payload,f=typeof C==="function"?C.call(A,b,f):C,f===null||f===void 0)break e;b=Tt({},b,f);break e;case 2:go=!0}}f=r.callback,f!==null&&(e.flags|=64,w&&(e.flags|=8192),w=o.callbacks,w===null?o.callbacks=[f]:w.push(f))}else w={lane:f,tag:r.tag,payload:r.payload,callback:r.callback,next:null},_===null?(g=_=w,s=b):_=_.next=w,i|=f;if(r=r.next,r===null)if(r=o.shared.pending,r===null)break;else w=r,r=w.next,w.next=null,o.lastBaseUpdate=w,o.shared.pending=null}while(1);_===null&&(s=b),o.baseState=s,o.firstBaseUpdate=g,o.lastBaseUpdate=_,a===null&&(o.shared.lanes=0),$o|=i,e.lanes=i,e.memoizedState=b}}function Zm(e,t){if(typeof e!=="function")throw Error(B(191,e));e.call(t)}function Km(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Zm(n[e],t)}var pi=Ol(null),Mc=Ol(0);function r1(e,t){e=oo,St(Mc,e),St(pi,t),oo=e|t.baseLanes}function __(){St(Mc,oo),St(pi,pi.current)}function rf(){oo=Mc.current,an(pi),an(Mc)}var qn=Ol(null),ol=null;function yo(e){var t=e.alternate;St(qt,qt.current&1),St(qn,e),ol===null&&(t===null||pi.current!==null?ol=e:t.memoizedState!==null&&(ol=e))}function f_(e){St(qt,qt.current),St(qn,e),ol===null&&(ol=e)}function Fm(e){e.tag===22?(St(qt,qt.current),St(qn,e),ol===null&&(ol=e)):bo(e)}function bo(){St(qt,qt.current),St(qn,qn.current)}function Bn(e){an(qn),ol===e&&(ol=null),an(qt)}var qt=Ol(0);function Ec(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||O_(n)||R_(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var to=0,Oe=null,yt=null,Vt=null,Tc=!1,di=!1,ma=!1,Ac=0,$r=0,_i=null,qv=0;function $t(){throw Error(B(321))}function sf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Xn(e[n],t[n]))return!1;return!0}function cf(e,t,n,l,o,a){return to=a,Oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Se.H=e===null||e.memoizedState===null?Tg:xf,ma=!1,a=n(l,o),ma=!1,di&&(a=Pm(t,n,l,o)),Jm(e),a}function Jm(e){Se.H=Ur;var t=yt!==null&&yt.next!==null;if(to=0,Vt=yt=Oe=null,Tc=!1,$r=0,_i=null,t)throw Error(B(300));e===null||Ft||(e=e.dependencies,e!==null&&Sc(e)&&(Ft=!0))}function Pm(e,t,n,l){Oe=e;var o=0;do{if(di&&(_i=null),$r=0,di=!1,25<=o)throw Error(B(301));if(o+=1,Vt=yt=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Se.H=Ag,a=t(n,l)}while(di);return a}function Wv(){var e=Se.H,t=e.useState()[0];return t=typeof t.then==="function"?Jr(t):t,e=e.useState()[0],(yt!==null?yt.memoizedState:null)!==e&&(Oe.flags|=1024),t}function uf(){var e=Ac!==0;return Ac=0,e}function df(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function _f(e){if(Tc){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Tc=!1}to=0,Vt=yt=Oe=null,di=!1,$r=Ac=0,_i=null}function vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Vt===null?Oe.memoizedState=Vt=e:Vt=Vt.next=e,Vt}function Wt(){if(yt===null){var e=Oe.alternate;e=e!==null?e.memoizedState:null}else e=yt.next;var t=Vt===null?Oe.memoizedState:Vt.next;if(t!==null)Vt=t,yt=e;else{if(e===null){if(Oe.alternate===null)throw Error(B(467));throw Error(B(310))}yt=e,e={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},Vt===null?Oe.memoizedState=Vt=e:Vt=Vt.next=e}return Vt}function Jc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Jr(e){var t=$r;return $r+=1,_i===null&&(_i=[]),e=Qm(_i,e,t),t=Oe,(Vt===null?t.memoizedState:Vt.next)===null&&(t=t.alternate,Se.H=t===null||t.memoizedState===null?Tg:xf),e}function Pc(e){if(e!==null&&typeof e==="object"){if(typeof e.then==="function")return Jr(e);if(e.$$typeof===Vl)return dn(e)}throw Error(B(438,String(e)))}function ff(e){var t=null,n=Oe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=Oe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Jc(),Oe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=Lx;return t.index++,n}function no(e,t){return typeof t==="function"?t(e):t}function rc(e){var t=Wt();return hf(t,yt,e)}function hf(e,t,n){var l=e.queue;if(l===null)throw Error(B(311));l.lastRenderedReducer=n;var o=e.baseQueue,a=l.pending;if(a!==null){if(o!==null){var i=o.next;o.next=a.next,a.next=i}t.baseQueue=o=a,l.pending=null}if(a=e.baseState,o===null)e.memoizedState=a;else{t=o.next;var r=i=null,s=null,g=t,_=!1;do{var b=g.lane&-536870913;if(b!==g.lane?(Qe&b)===b:(to&b)===b){var f=g.revertLane;if(f===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),b===gi&&(_=!0);else if((to&f)===f){g=g.next,f===gi&&(_=!0);continue}else b={lane:0,revertLane:g.revertLane,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},s===null?(r=s=b,i=a):s=s.next=b,Oe.lanes|=f,$o|=f;b=g.action,ma&&n(a,b),a=g.hasEagerState?g.eagerState:n(a,b)}else f={lane:b,revertLane:g.revertLane,gesture:g.gesture,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},s===null?(r=s=f,i=a):s=s.next=f,Oe.lanes|=b,$o|=b;g=g.next}while(g!==null&&g!==t);if(s===null?i=a:s.next=r,!Xn(a,e.memoizedState)&&(Ft=!0,_&&(n=ci,n!==null)))throw n;e.memoizedState=a,e.baseState=i,e.baseQueue=s,l.lastRenderedState=a}return o===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Sd(e){var t=Wt(),n=t.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=e;var{dispatch:l,pending:o}=n,a=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do a=e(a,i.action),i=i.next;while(i!==o);Xn(a,t.memoizedState)||(Ft=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,l]}function eg(e,t,n){var l=Oe,o=Wt(),a=Ge;if(a){if(n===void 0)throw Error(B(407));n=n()}else n=t();var i=!Xn((yt||o).memoizedState,n);if(i&&(o.memoizedState=n,Ft=!0),o=o.queue,mf(lg.bind(null,l,o,e),[e]),o.getSnapshot!==t||i||Vt!==null&&Vt.memoizedState.tag&1){if(l.flags|=2048,yi(9,{destroy:void 0},ng.bind(null,l,o,n,t),null),vt===null)throw Error(B(349));a||(to&127)!==0||tg(l,t,n)}return n}function tg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Oe.updateQueue,t===null?(t=Jc(),Oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ng(e,t,n,l){t.value=n,t.getSnapshot=l,og(t)&&ag(e)}function lg(e,t,n){return n(function(){og(t)&&ag(e)})}function og(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Xn(e,n)}catch(l){return!0}}function ag(e){var t=xa(e,2);t!==null&&An(t,e,2)}function h_(e){var t=vn();if(typeof e==="function"){var n=e;if(e=n(),ma){vo(!0);try{n()}finally{vo(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:no,lastRenderedState:e},t}function ig(e,t,n,l){return e.baseState=n,hf(e,yt,typeof l==="function"?l:no)}function Qv(e,t,n,l,o){if(tu(e))throw Error(B(485));if(e=t.action,e!==null){var a={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){a.listeners.push(i)}};Se.T!==null?n(!0):a.isTransition=!1,l(a),n=t.pending,n===null?(a.next=t.pending=a,rg(t,a)):(a.next=n.next,t.pending=n.next=a)}}function rg(e,t){var{action:n,payload:l}=t,o=e.state;if(t.isTransition){var a=Se.T,i={};Se.T=i;try{var r=n(o,l),s=Se.S;s!==null&&s(i,r),s1(e,t,r)}catch(g){m_(e,t,g)}finally{a!==null&&i.types!==null&&(a.types=i.types),Se.T=a}}else try{a=n(o,l),s1(e,t,a)}catch(g){m_(e,t,g)}}function s1(e,t,n){n!==null&&typeof n==="object"&&typeof n.then==="function"?n.then(function(l){c1(e,t,l)},function(l){return m_(e,t,l)}):c1(e,t,n)}function c1(e,t,n){t.status="fulfilled",t.value=n,sg(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,rg(e,n)))}function m_(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,sg(t),t=t.next;while(t!==l)}e.action=null}function sg(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function cg(e,t){return t}function u1(e,t){if(Ge){var n=vt.formState;if(n!==null){e:{var l=Oe;if(Ge){if(Et){t:{var o=Et;for(var a=ll;o.nodeType!==8;){if(!a){o=null;break t}if(o=al(o.nextSibling),o===null){o=null;break t}}a=o.data,o=a==="F!"||a==="F"?o:null}if(o){Et=al(o.nextSibling),l=o.data==="F!";break e}}Bo(l)}l=!1}l&&(t=n[0])}}return n=vn(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cg,lastRenderedState:t},n.queue=l,n=Cg.bind(null,Oe,l),l.dispatch=n,l=h_(!1),a=bf.bind(null,Oe,!1,l.queue),l=vn(),o={state:t,dispatch:null,action:e,pending:null},l.queue=o,n=Qv.bind(null,Oe,o,a,n),o.dispatch=n,l.memoizedState=e,[t,n,!1]}function d1(e){var t=Wt();return ug(t,yt,e)}function ug(e,t,n){if(t=hf(e,t,cg)[0],e=rc(no)[0],typeof t==="object"&&t!==null&&typeof t.then==="function")try{var l=Jr(t)}catch(i){if(i===Ei)throw Fc;throw i}else l=t;t=Wt();var o=t.queue,a=o.dispatch;return n!==t.memoizedState&&(Oe.flags|=2048,yi(9,{destroy:void 0},Gv.bind(null,o,n),null)),[l,a,e]}function Gv(e,t){e.action=t}function _1(e){var t=Wt(),n=yt;if(n!==null)return ug(t,n,e);Wt(),t=t.memoizedState,n=Wt();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function yi(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=Oe.updateQueue,t===null&&(t=Jc(),Oe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function dg(){return Wt().memoizedState}function sc(e,t,n,l){var o=vn();Oe.flags|=e,o.memoizedState=yi(1|t,{destroy:void 0},n,l===void 0?null:l)}function eu(e,t,n,l){var o=Wt();l=l===void 0?null:l;var a=o.memoizedState.inst;yt!==null&&l!==null&&sf(l,yt.memoizedState.deps)?o.memoizedState=yi(t,a,n,l):(Oe.flags|=e,o.memoizedState=yi(1|t,a,n,l))}function f1(e,t){sc(8390656,8,e,t)}function mf(e,t){eu(2048,8,e,t)}function Vv(e){Oe.flags|=4;var t=Oe.updateQueue;if(t===null)t=Jc(),Oe.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function _g(e){var t=Wt().memoizedState;return Vv({ref:t,nextImpl:e}),function(){if((at&2)!==0)throw Error(B(440));return t.impl.apply(void 0,arguments)}}function fg(e,t){return eu(4,2,e,t)}function hg(e,t){return eu(4,4,e,t)}function mg(e,t){if(typeof t==="function"){e=e();var n=t(e);return function(){typeof n==="function"?n():t(null)}}if(t!==null&&t!==void 0)return e=e(),t.current=e,function(){t.current=null}}function gg(e,t,n){n=n!==null&&n!==void 0?n.concat([e]):null,eu(4,4,mg.bind(null,t,e),n)}function gf(){}function pg(e,t){var n=Wt();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&sf(t,l[1]))return l[0];return n.memoizedState=[e,t],e}function yg(e,t){var n=Wt();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&sf(t,l[1]))return l[0];if(l=e(),ma){vo(!0);try{e()}finally{vo(!1)}}return n.memoizedState=[l,t],l}function pf(e,t,n){if(n===void 0||(to&1073741824)!==0&&(Qe&261930)===0)return e.memoizedState=t;return e.memoizedState=n,e=ip(),Oe.lanes|=e,$o|=e,n}function bg(e,t,n,l){if(Xn(n,t))return n;if(pi.current!==null)return e=pf(e,n,l),Xn(e,t)||(Ft=!0),e;if((to&42)===0||(to&1073741824)!==0&&(Qe&261930)===0)return Ft=!0,e.memoizedState=n;return e=ip(),Oe.lanes|=e,$o|=e,t}function xg(e,t,n,l,o){var a=it.p;it.p=a!==0&&8>a?a:8;var i=Se.T,r={};Se.T=r,bf(e,!1,t,n);try{var s=o(),g=Se.S;if(g!==null&&g(r,s),s!==null&&typeof s==="object"&&typeof s.then==="function"){var _=Xv(s,l);Cr(e,t,_,In(e))}else Cr(e,t,l,In(e))}catch(b){Cr(e,t,{then:function(){},status:"rejected",reason:b},In())}finally{it.p=a,i!==null&&r.types!==null&&(i.types=r.types),Se.T=i}}function Zv(){}function g_(e,t,n,l){if(e.tag!==5)throw Error(B(476));var o=vg(e).queue;xg(e,o,t,ra,n===null?Zv:function(){return wg(e),n(l)})}function vg(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ra,baseState:ra,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:no,lastRenderedState:ra},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:no,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function wg(e){var t=vg(e);t.next===null&&(t=e.alternate.memoizedState),Cr(e,t.next.queue,{},In())}function yf(){return dn(Ir)}function kg(){return Wt().memoizedState}function Sg(){return Wt().memoizedState}function Kv(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=In();e=To(n);var l=Ao(t,e,n);l!==null&&(An(l,t,n),wr(l,t,n)),t={cache:nf()},e.payload=t;return}t=t.return}}function Fv(e,t,n){var l=In();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},tu(e)?Mg(t,n):(n=J_(e,t,n,l),n!==null&&(An(n,e,l),Eg(n,t,l)))}function Cg(e,t,n){var l=In();Cr(e,t,n,l)}function Cr(e,t,n,l){var o={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(tu(e))Mg(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var i=t.lastRenderedState,r=a(i,n);if(o.hasEagerState=!0,o.eagerState=r,Xn(r,i))return Kc(e,t,o,0),vt===null&&Zc(),!1}catch(s){}finally{}if(n=J_(e,t,o,l),n!==null)return An(n,e,l),Eg(n,t,l),!0}return!1}function bf(e,t,n,l){if(l={lane:2,revertLane:Tf(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},tu(e)){if(t)throw Error(B(479))}else t=J_(e,n,l,2),t!==null&&An(t,e,2)}function tu(e){var t=e.alternate;return e===Oe||t!==null&&t===Oe}function Mg(e,t){di=Tc=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Eg(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,_m(e,n)}}var Ur={readContext:dn,use:Pc,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useLayoutEffect:$t,useInsertionEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useSyncExternalStore:$t,useId:$t,useHostTransitionStatus:$t,useFormState:$t,useActionState:$t,useOptimistic:$t,useMemoCache:$t,useCacheRefresh:$t};Ur.useEffectEvent=$t;var Tg={readContext:dn,use:Pc,useCallback:function(e,t){return vn().memoizedState=[e,t===void 0?null:t],e},useContext:dn,useEffect:f1,useImperativeHandle:function(e,t,n){n=n!==null&&n!==void 0?n.concat([e]):null,sc(4194308,4,mg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return sc(4194308,4,e,t)},useInsertionEffect:function(e,t){sc(4,2,e,t)},useMemo:function(e,t){var n=vn();t=t===void 0?null:t;var l=e();if(ma){vo(!0);try{e()}finally{vo(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=vn();if(n!==void 0){var o=n(t);if(ma){vo(!0);try{n(t)}finally{vo(!1)}}}else o=t;return l.memoizedState=l.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},l.queue=e,e=e.dispatch=Fv.bind(null,Oe,e),[l.memoizedState,e]},useRef:function(e){var t=vn();return e={current:e},t.memoizedState=e},useState:function(e){e=h_(e);var t=e.queue,n=Cg.bind(null,Oe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:gf,useDeferredValue:function(e,t){var n=vn();return pf(n,e,t)},useTransition:function(){var e=h_(!1);return e=xg.bind(null,Oe,e.queue,!0,!1),vn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=Oe,o=vn();if(Ge){if(n===void 0)throw Error(B(407));n=n()}else{if(n=t(),vt===null)throw Error(B(349));(Qe&127)!==0||tg(l,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,f1(lg.bind(null,l,a,e),[e]),l.flags|=2048,yi(9,{destroy:void 0},ng.bind(null,l,a,n,t),null),n},useId:function(){var e=vn(),t=vt.identifierPrefix;if(Ge){var n=Dl,l=Ll;n=(l&~(1<<32-jn(l)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Ac++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=qv++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:yf,useFormState:u1,useActionState:u1,useOptimistic:function(e){var t=vn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=bf.bind(null,Oe,!0,n),n.dispatch=t,[e,t]},useMemoCache:ff,useCacheRefresh:function(){return vn().memoizedState=Kv.bind(null,Oe)},useEffectEvent:function(e){var t=vn(),n={impl:e};return t.memoizedState=n,function(){if((at&2)!==0)throw Error(B(440));return n.impl.apply(void 0,arguments)}}},xf={readContext:dn,use:Pc,useCallback:pg,useContext:dn,useEffect:mf,useImperativeHandle:gg,useInsertionEffect:fg,useLayoutEffect:hg,useMemo:yg,useReducer:rc,useRef:dg,useState:function(){return rc(no)},useDebugValue:gf,useDeferredValue:function(e,t){var n=Wt();return bg(n,yt.memoizedState,e,t)},useTransition:function(){var e=rc(no)[0],t=Wt().memoizedState;return[typeof e==="boolean"?e:Jr(e),t]},useSyncExternalStore:eg,useId:kg,useHostTransitionStatus:yf,useFormState:d1,useActionState:d1,useOptimistic:function(e,t){var n=Wt();return ig(n,yt,e,t)},useMemoCache:ff,useCacheRefresh:Sg};xf.useEffectEvent=_g;var Ag={readContext:dn,use:Pc,useCallback:pg,useContext:dn,useEffect:mf,useImperativeHandle:gg,useInsertionEffect:fg,useLayoutEffect:hg,useMemo:yg,useReducer:Sd,useRef:dg,useState:function(){return Sd(no)},useDebugValue:gf,useDeferredValue:function(e,t){var n=Wt();return yt===null?pf(n,e,t):bg(n,yt.memoizedState,e,t)},useTransition:function(){var e=Sd(no)[0],t=Wt().memoizedState;return[typeof e==="boolean"?e:Jr(e),t]},useSyncExternalStore:eg,useId:kg,useHostTransitionStatus:yf,useFormState:_1,useActionState:_1,useOptimistic:function(e,t){var n=Wt();if(yt!==null)return ig(n,yt,e,t);return n.baseState=e,[e,n.queue.dispatch]},useMemoCache:ff,useCacheRefresh:Sg};Ag.useEffectEvent=_g;function Cd(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n===null||n===void 0?t:Tt({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var p_={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=In(),o=To(l);o.payload=t,n!==void 0&&n!==null&&(o.callback=n),t=Ao(e,o,l),t!==null&&(An(t,e,l),wr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=In(),o=To(l);o.tag=1,o.payload=t,n!==void 0&&n!==null&&(o.callback=n),t=Ao(e,o,l),t!==null&&(An(t,e,l),wr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=In(),l=To(n);l.tag=2,t!==void 0&&t!==null&&(l.callback=t),t=Ao(e,l,n),t!==null&&(An(t,e,n),wr(t,e,n))}};function h1(e,t,n,l,o,a,i){return e=e.stateNode,typeof e.shouldComponentUpdate==="function"?e.shouldComponentUpdate(l,a,i):t.prototype&&t.prototype.isPureReactComponent?!Or(n,l)||!Or(o,a):!0}function m1(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps==="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps==="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&p_.enqueueReplaceState(t,t.state,null)}function ga(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=Tt({},n));for(var o in e)n[o]===void 0&&(n[o]=e[o])}return n}function Lg(e){vc(e)}function Dg(e){console.error(e)}function Ng(e){vc(e)}function Lc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function g1(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function y_(e,t,n){return n=To(n),n.tag=3,n.payload={element:null},n.callback=function(){Lc(e,t)},n}function zg(e){return e=To(e),e.tag=3,e}function Og(e,t,n,l){var o=n.type.getDerivedStateFromError;if(typeof o==="function"){var a=l.value;e.payload=function(){return o(a)},e.callback=function(){g1(t,n,l)}}var i=n.stateNode;i!==null&&typeof i.componentDidCatch==="function"&&(e.callback=function(){g1(t,n,l),typeof o!=="function"&&(Lo===null?Lo=new Set([this]):Lo.add(this));var r=l.stack;this.componentDidCatch(l.value,{componentStack:r!==null?r:""})})}function Jv(e,t,n,l,o){if(n.flags|=32768,l!==null&&typeof l==="object"&&typeof l.then==="function"){if(t=n.alternate,t!==null&&Mi(t,n,o,!0),n=qn.current,n!==null){switch(n.tag){case 31:case 13:return ol===null?Rc():n.alternate===null&&Ut===0&&(Ut=3),n.flags&=-257,n.flags|=65536,n.lanes=o,l===Cc?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),Bd(e,l,o)),!1;case 22:return n.flags|=65536,l===Cc?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),Bd(e,l,o)),!1}throw Error(B(435,n.tag))}return Bd(e,l,o),Rc(),!1}if(Ge)return t=qn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=o,l!==a_&&(e=Error(B(422),{cause:l}),Br(nl(e,n)))):(l!==a_&&(t=Error(B(423),{cause:l}),Br(nl(t,n))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,l=nl(l,n),o=y_(e.stateNode,l,o),kd(e,o),Ut!==4&&(Ut=2)),!1;var a=Error(B(520),{cause:l});if(a=nl(a,n),Tr===null?Tr=[a]:Tr.push(a),Ut!==4&&(Ut=2),t===null)return!0;l=nl(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=o&-o,n.lanes|=e,e=y_(n.stateNode,l,e),kd(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError==="function"||a!==null&&typeof a.componentDidCatch==="function"&&(Lo===null||!Lo.has(a))))return n.flags|=65536,o&=-o,n.lanes|=o,o=zg(o),Og(o,e,n,l),kd(n,o),!1}n=n.return}while(n!==null);return!1}var vf=Error(B(461)),Ft=!1;function sn(e,t,n,l){t.child=e===null?Vm(t,null,n,l):ha(t,e.child,n,l)}function p1(e,t,n,l,o){n=n.render;var a=t.ref;if("ref"in l){var i={};for(var r in l)r!=="ref"&&(i[r]=l[r])}else i=l;if(fa(t),l=cf(e,t,n,i,a,o),r=uf(),e!==null&&!Ft)return df(e,t,o),lo(e,t,o);return Ge&&r&&ef(t),t.flags|=1,sn(e,t,l,o),t.child}function y1(e,t,n,l,o){if(e===null){var a=n.type;if(typeof a==="function"&&!P_(a)&&a.defaultProps===void 0&&n.compare===null)return t.tag=15,t.type=a,Rg(e,t,a,l,o);return e=ac(n.type,null,l,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e}if(a=e.child,!wf(e,o)){var i=a.memoizedProps;if(n=n.compare,n=n!==null?n:Or,n(i,l)&&e.ref===t.ref)return lo(e,t,o)}return t.flags|=1,e=Fl(a,l),e.ref=t.ref,e.return=t,t.child=e}function Rg(e,t,n,l,o){if(e!==null){var a=e.memoizedProps;if(Or(a,l)&&e.ref===t.ref)if(Ft=!1,t.pendingProps=l=a,wf(e,o))(e.flags&131072)!==0&&(Ft=!0);else return t.lanes=e.lanes,lo(e,t,o)}return b_(e,t,n,l,o)}function Bg(e,t,n,l){var o=l.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){l=t.child=e.child;for(o=0;l!==null;)o=o|l.lanes|l.childLanes,l=l.sibling;l=o&~a}else l=0,t.child=null;return b1(e,t,a,n,l)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ic(t,a!==null?a.cachePool:null),a!==null?r1(t,a):__(),Fm(t);else return l=t.lanes=536870912,b1(e,t,a!==null?a.baseLanes|n:n,n,l)}else a!==null?(ic(t,a.cachePool),r1(t,a),bo(t),t.memoizedState=null):(e!==null&&ic(t,null),__(),bo(t));return sn(e,t,o,n),t.child}function hr(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function b1(e,t,n,l,o){var a=lf();return a=a===null?null:{parent:Kt._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ic(t,null),__(),Fm(t),e!==null&&Mi(e,t,l,!0),t.childLanes=o,null}function cc(e,t){return t=Dc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function x1(e,t,n){return ha(t,e.child,null,n),e=cc(t,t.pendingProps),e.flags|=2,Bn(t),t.memoizedState=null,e}function Pv(e,t,n){var l=t.pendingProps,o=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ge){if(l.mode==="hidden")return e=cc(t,l),t.lanes=536870912,hr(null,e);if(f_(t),(e=Et)?(e=Tp(e,ll),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ro!==null?{id:Ll,overflow:Dl}:null,retryLane:536870912,hydrationErrors:null},n=jm(e),n.return=t,t.child=n,un=t,Et=null)):e=null,e===null)throw Bo(t);return t.lanes=536870912,null}return cc(t,l)}var a=e.memoizedState;if(a!==null){var i=a.dehydrated;if(f_(t),o)if(t.flags&256)t.flags&=-257,t=x1(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(B(558));else if(Ft||Mi(e,t,n,!1),o=(n&e.childLanes)!==0,Ft||o){if(l=vt,l!==null&&(i=fm(l,n),i!==0&&i!==a.retryLane))throw a.retryLane=i,xa(e,i),An(l,e,i),vf;Rc(),t=x1(e,t,n)}else e=a.treeContext,Et=al(i.nextSibling),un=t,Ge=!0,Eo=null,ll=!1,e!==null&&Xm(t,e),t=cc(t,l),t.flags|=4096;return t}return e=Fl(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function uc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=="function"&&typeof n!=="object")throw Error(B(284));if(e===null||e.ref!==n)t.flags|=4194816}}function b_(e,t,n,l,o){if(fa(t),n=cf(e,t,n,l,void 0,o),l=uf(),e!==null&&!Ft)return df(e,t,o),lo(e,t,o);return Ge&&l&&ef(t),t.flags|=1,sn(e,t,n,o),t.child}function v1(e,t,n,l,o,a){if(fa(t),t.updateQueue=null,n=Pm(t,l,n,o),Jm(e),l=uf(),e!==null&&!Ft)return df(e,t,a),lo(e,t,a);return Ge&&l&&ef(t),t.flags|=1,sn(e,t,n,a),t.child}function w1(e,t,n,l,o){if(fa(t),t.stateNode===null){var a=ni,i=n.contextType;typeof i==="object"&&i!==null&&(a=dn(i)),a=new n(l,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=p_,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=l,a.state=t.memoizedState,a.refs={},af(t),i=n.contextType,a.context=typeof i==="object"&&i!==null?dn(i):ni,a.state=t.memoizedState,i=n.getDerivedStateFromProps,typeof i==="function"&&(Cd(t,n,i,l),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==="function"||typeof a.getSnapshotBeforeUpdate==="function"||typeof a.UNSAFE_componentWillMount!=="function"&&typeof a.componentWillMount!=="function"||(i=a.state,typeof a.componentWillMount==="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==="function"&&a.UNSAFE_componentWillMount(),i!==a.state&&p_.enqueueReplaceState(a,a.state,null),Sr(t,l,a,o),kr(),a.state=t.memoizedState),typeof a.componentDidMount==="function"&&(t.flags|=4194308),l=!0}else if(e===null){a=t.stateNode;var r=t.memoizedProps,s=ga(n,r);a.props=s;var g=a.context,_=n.contextType;i=ni,typeof _==="object"&&_!==null&&(i=dn(_));var b=n.getDerivedStateFromProps;_=typeof b==="function"||typeof a.getSnapshotBeforeUpdate==="function",r=t.pendingProps!==r,_||typeof a.UNSAFE_componentWillReceiveProps!=="function"&&typeof a.componentWillReceiveProps!=="function"||(r||g!==i)&&m1(t,a,l,i),go=!1;var f=t.memoizedState;a.state=f,Sr(t,l,a,o),kr(),g=t.memoizedState,r||f!==g||go?(typeof b==="function"&&(Cd(t,n,b,l),g=t.memoizedState),(s=go||h1(t,n,s,l,f,g,i))?(_||typeof a.UNSAFE_componentWillMount!=="function"&&typeof a.componentWillMount!=="function"||(typeof a.componentWillMount==="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==="function"&&(t.flags|=4194308)):(typeof a.componentDidMount==="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=g),a.props=l,a.state=g,a.context=i,l=s):(typeof a.componentDidMount==="function"&&(t.flags|=4194308),l=!1)}else{a=t.stateNode,u_(e,t),i=t.memoizedProps,_=ga(n,i),a.props=_,b=t.pendingProps,f=a.context,g=n.contextType,s=ni,typeof g==="object"&&g!==null&&(s=dn(g)),r=n.getDerivedStateFromProps,(g=typeof r==="function"||typeof a.getSnapshotBeforeUpdate==="function")||typeof a.UNSAFE_componentWillReceiveProps!=="function"&&typeof a.componentWillReceiveProps!=="function"||(i!==b||f!==s)&&m1(t,a,l,s),go=!1,f=t.memoizedState,a.state=f,Sr(t,l,a,o),kr();var w=t.memoizedState;i!==b||f!==w||go||e!==null&&e.dependencies!==null&&Sc(e.dependencies)?(typeof r==="function"&&(Cd(t,n,r,l),w=t.memoizedState),(_=go||h1(t,n,_,l,f,w,s)||e!==null&&e.dependencies!==null&&Sc(e.dependencies))?(g||typeof a.UNSAFE_componentWillUpdate!=="function"&&typeof a.componentWillUpdate!=="function"||(typeof a.componentWillUpdate==="function"&&a.componentWillUpdate(l,w,s),typeof a.UNSAFE_componentWillUpdate==="function"&&a.UNSAFE_componentWillUpdate(l,w,s)),typeof a.componentDidUpdate==="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!=="function"||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=="function"||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=w),a.props=l,a.state=w,a.context=s,l=_):(typeof a.componentDidUpdate!=="function"||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=="function"||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),l=!1)}return a=l,uc(e,t),l=(t.flags&128)!==0,a||l?(a=t.stateNode,n=l&&typeof n.getDerivedStateFromError!=="function"?null:a.render(),t.flags|=1,e!==null&&l?(t.child=ha(t,e.child,null,o),t.child=ha(t,null,n,o)):sn(e,t,n,o),t.memoizedState=a.state,e=t.child):e=lo(e,t,o),e}function k1(e,t,n,l){return _a(),t.flags|=256,sn(e,t,n,l),t.child}var Md={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ed(e){return{baseLanes:e,cachePool:Wm()}}function Td(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=$n),e}function Hg(e,t,n){var l=t.pendingProps,o=!1,a=(t.flags&128)!==0,i;if((i=a)||(i=e!==null&&e.memoizedState===null?!1:(qt.current&2)!==0),i&&(o=!0,t.flags&=-129),i=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ge){if(o?yo(t):bo(t),(e=Et)?(e=Tp(e,ll),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ro!==null?{id:Ll,overflow:Dl}:null,retryLane:536870912,hydrationErrors:null},n=jm(e),n.return=t,t.child=n,un=t,Et=null)):e=null,e===null)throw Bo(t);return R_(e)?t.lanes=32:t.lanes=536870912,null}var r=l.children;if(l=l.fallback,o)return bo(t),o=t.mode,r=Dc({mode:"hidden",children:r},o),l=sa(l,o,n,null),r.return=t,l.return=t,r.sibling=l,t.child=r,l=t.child,l.memoizedState=Ed(n),l.childLanes=Td(e,i,n),t.memoizedState=Md,hr(null,l);return yo(t),x_(t,r)}var s=e.memoizedState;if(s!==null&&(r=s.dehydrated,r!==null)){if(a)t.flags&256?(yo(t),t.flags&=-257,t=Ad(e,t,n)):t.memoizedState!==null?(bo(t),t.child=e.child,t.flags|=128,t=null):(bo(t),r=l.fallback,o=t.mode,l=Dc({mode:"visible",children:l.children},o),r=sa(r,o,n,null),r.flags|=2,l.return=t,r.return=t,l.sibling=r,t.child=l,ha(t,e.child,null,n),l=t.child,l.memoizedState=Ed(n),l.childLanes=Td(e,i,n),t.memoizedState=Md,t=hr(null,l));else if(yo(t),R_(r)){if(i=r.nextSibling&&r.nextSibling.dataset,i)var g=i.dgst;i=g,l=Error(B(419)),l.stack="",l.digest=i,Br({value:l,source:null,stack:null}),t=Ad(e,t,n)}else if(Ft||Mi(e,t,n,!1),i=(n&e.childLanes)!==0,Ft||i){if(i=vt,i!==null&&(l=fm(i,n),l!==0&&l!==s.retryLane))throw s.retryLane=l,xa(e,l),An(i,e,l),vf;O_(r)||Rc(),t=Ad(e,t,n)}else O_(r)?(t.flags|=192,t.child=e.child,t=null):(e=s.treeContext,Et=al(r.nextSibling),un=t,Ge=!0,Eo=null,ll=!1,e!==null&&Xm(t,e),t=x_(t,l.children),t.flags|=4096);return t}if(o)return bo(t),r=l.fallback,o=t.mode,s=e.child,g=s.sibling,l=Fl(s,{mode:"hidden",children:l.children}),l.subtreeFlags=s.subtreeFlags&65011712,g!==null?r=Fl(g,r):(r=sa(r,o,n,null),r.flags|=2),r.return=t,l.return=t,l.sibling=r,t.child=l,hr(null,l),l=t.child,r=e.child.memoizedState,r===null?r=Ed(n):(o=r.cachePool,o!==null?(s=Kt._currentValue,o=o.parent!==s?{parent:s,pool:s}:o):o=Wm(),r={baseLanes:r.baseLanes|n,cachePool:o}),l.memoizedState=r,l.childLanes=Td(e,i,n),t.memoizedState=Md,hr(e.child,l);return yo(t),n=e.child,e=n.sibling,n=Fl(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=n,t.memoizedState=null,n}function x_(e,t){return t=Dc({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Dc(e,t){return e=Hn(22,e,null,t),e.lanes=0,e}function Ad(e,t,n){return ha(t,e.child,null,n),e=x_(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function S1(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),r_(e.return,t,n)}function Ld(e,t,n,l,o,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:o,treeForkCount:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=n,i.tailMode=o,i.treeForkCount=a)}function $g(e,t,n){var l=t.pendingProps,o=l.revealOrder,a=l.tail;l=l.children;var i=qt.current,r=(i&2)!==0;if(r?(i=i&1|2,t.flags|=128):i&=1,St(qt,i),sn(e,t,l,n),l=Ge?Rr:0,!r&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&S1(e,n,t);else if(e.tag===19)S1(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"forwards":n=t.child;for(o=null;n!==null;)e=n.alternate,e!==null&&Ec(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ld(t,!1,o,n,a,l);break;case"backwards":case"unstable_legacy-backwards":n=null,o=t.child;for(t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ec(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ld(t,!0,n,null,a,l);break;case"together":Ld(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function lo(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),$o|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Mi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(B(153));if(t.child!==null){e=t.child,n=Fl(e,e.pendingProps),t.child=n;for(n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Fl(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function wf(e,t){if((e.lanes&t)!==0)return!0;return e=e.dependencies,e!==null&&Sc(e)?!0:!1}function e4(e,t,n){switch(t.tag){case 3:pc(t,t.stateNode.containerInfo),po(t,Kt,e.memoizedState.cache),_a();break;case 27:case 5:Vd(t);break;case 4:pc(t,t.stateNode.containerInfo);break;case 10:po(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,f_(t),null;break;case 13:var l=t.memoizedState;if(l!==null){if(l.dehydrated!==null)return yo(t),t.flags|=128,null;if((n&t.child.childLanes)!==0)return Hg(e,t,n);return yo(t),e=lo(e,t,n),e!==null?e.sibling:null}yo(t);break;case 19:var o=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(Mi(e,t,n,!1),l=(n&t.childLanes)!==0),o){if(l)return $g(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),St(qt,qt.current),l)break;else return null;case 22:return t.lanes=0,Bg(e,t,n,t.pendingProps);case 24:po(t,Kt,e.memoizedState.cache)}return lo(e,t,n)}function Ug(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ft=!0;else{if(!wf(e,n)&&(t.flags&128)===0)return Ft=!1,e4(e,t,n);Ft=(e.flags&131072)!==0?!0:!1}else Ft=!1,Ge&&(t.flags&1048576)!==0&&Im(t,Rr,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=aa(t.elementType),t.type=e,typeof e==="function")P_(e)?(l=ga(e,l),t.tag=1,t=w1(null,t,e,l,n)):(t.tag=0,t=b_(null,t,e,l,n));else{if(e!==void 0&&e!==null){var o=e.$$typeof;if(o===U_){t.tag=11,t=p1(null,t,e,l,n);break e}else if(o===Y_){t.tag=14,t=y1(null,t,e,l,n);break e}}throw t=Qd(e)||e,Error(B(306,t,""))}}return t;case 0:return b_(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,o=ga(l,t.pendingProps),w1(e,t,l,o,n);case 3:e:{if(pc(t,t.stateNode.containerInfo),e===null)throw Error(B(387));l=t.pendingProps;var a=t.memoizedState;o=a.element,u_(e,t),Sr(t,l,null,n);var i=t.memoizedState;if(l=i.cache,po(t,Kt,l),l!==a.cache&&s_(t,[Kt],n,!0),kr(),l=i.element,a.isDehydrated)if(a={element:l,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=k1(e,t,l,n);break e}else if(l!==o){o=nl(Error(B(424)),t),Br(o),t=k1(e,t,l,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}Et=al(e.firstChild),un=t,Ge=!0,Eo=null,ll=!0,n=Vm(t,null,l,n);for(t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(_a(),l===o){t=lo(e,t,n);break e}sn(e,t,l,n)}t=t.child}return t;case 26:return uc(e,t),e===null?(n=q1(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ge||(n=t.type,e=t.pendingProps,l=Uc(Mo.current).createElement(n),l[cn]=t,l[Ln]=e,_n(l,n,e),on(l),t.stateNode=l):t.memoizedState=q1(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Vd(t),e===null&&Ge&&(l=t.stateNode=Ap(t.type,t.pendingProps,Mo.current),un=t,ll=!0,o=Et,Yo(t.type)?(B_=o,Et=al(l.firstChild)):Et=o),sn(e,t,t.pendingProps.children,n),uc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:if(e===null&&Ge){if(o=l=Et)l=T4(l,t.type,t.pendingProps,ll),l!==null?(t.stateNode=l,un=t,Et=al(l.firstChild),ll=!1,o=!0):o=!1;o||Bo(t)}return Vd(t),o=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,l=a.children,N_(o,a)?l=null:i!==null&&N_(o,i)&&(t.flags|=32),t.memoizedState!==null&&(o=cf(e,t,Wv,null,null,n),Ir._currentValue=o),uc(e,t),sn(e,t,l,n),t.child;case 6:if(e===null&&Ge){if(e=n=Et)n=A4(n,t.pendingProps,ll),n!==null?(t.stateNode=n,un=t,Et=null,e=!0):e=!1;e||Bo(t)}return null;case 13:return Hg(e,t,n);case 4:return pc(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=ha(t,null,l,n):sn(e,t,l,n),t.child;case 11:return p1(e,t,t.type,t.pendingProps,n);case 7:return sn(e,t,t.pendingProps,n),t.child;case 8:return sn(e,t,t.pendingProps.children,n),t.child;case 12:return sn(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,po(t,t.type,l.value),sn(e,t,l.children,n),t.child;case 9:return o=t.type._context,l=t.pendingProps.children,fa(t),o=dn(o),l=l(o),t.flags|=1,sn(e,t,l,n),t.child;case 14:return y1(e,t,t.type,t.pendingProps,n);case 15:return Rg(e,t,t.type,t.pendingProps,n);case 19:return $g(e,t,n);case 31:return Pv(e,t,n);case 22:return Bg(e,t,n,t.pendingProps);case 24:return fa(t),l=dn(Kt),e===null?(o=lf(),o===null&&(o=vt,a=nf(),o.pooledCache=a,a.refCount++,a!==null&&(o.pooledCacheLanes|=n),o=a),t.memoizedState={parent:l,cache:o},af(t),po(t,Kt,o)):((e.lanes&n)!==0&&(u_(e,t),Sr(t,null,null,n),kr()),o=e.memoizedState,a=t.memoizedState,o.parent!==l?(o={parent:l,cache:l},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),po(t,Kt,l)):(l=a.cache,po(t,Kt,l),l!==o.cache&&s_(t,[Kt],n,!0))),sn(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(B(156,t.tag))}function Il(e){e.flags|=4}function Dd(e,t,n,l,o){if(t=(e.mode&32)!==0)t=!1;if(t){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(cp())e.flags|=8192;else throw ua=Cc,of}else e.flags&=-16777217}function C1(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Np(t))if(cp())e.flags|=8192;else throw ua=Cc,of}function Zs(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?um():536870912,e.lanes|=t,bi|=t)}function ir(e,t){if(!Ge)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Mt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,l|=o.subtreeFlags&65011712,l|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,l|=o.subtreeFlags,l|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function t4(e,t,n){var l=t.pendingProps;switch(tf(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(t),null;case 1:return Mt(t),null;case 3:if(n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Jl(Kt),fi(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),e===null||e.child===null)Xa(t)?Il(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,wd());return Mt(t),null;case 26:var{type:o,memoizedState:a}=t;return e===null?(Il(t),a!==null?(Mt(t),C1(t,a)):(Mt(t),Dd(t,o,null,l,n))):a?a!==e.memoizedState?(Il(t),Mt(t),C1(t,a)):(Mt(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Il(t),Mt(t),Dd(t,o,e,l,n)),null;case 27:if(yc(t),n=Mo.current,o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Il(t);else{if(!l){if(t.stateNode===null)throw Error(B(166));return Mt(t),null}e=zl.current,Xa(t)?e1(t,e):(e=Ap(o,l,n),t.stateNode=e,Il(t))}return Mt(t),null;case 5:if(yc(t),o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Il(t);else{if(!l){if(t.stateNode===null)throw Error(B(166));return Mt(t),null}if(a=zl.current,Xa(t))e1(t,a);else{var i=Uc(Mo.current);switch(a){case 1:a=i.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:a=i.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":a=i.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":a=i.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":a=i.createElement("div"),a.innerHTML="<script></script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof l.is==="string"?i.createElement("select",{is:l.is}):i.createElement("select"),l.multiple?a.multiple=!0:l.size&&(a.size=l.size);break;default:a=typeof l.is==="string"?i.createElement(o,{is:l.is}):i.createElement(o)}}a[cn]=t,a[Ln]=l;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)a.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=a;e:switch(_n(a,o,l),o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Il(t)}}return Mt(t),Dd(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Il(t);else{if(typeof l!=="string"&&t.stateNode===null)throw Error(B(166));if(e=Mo.current,Xa(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,o=un,o!==null)switch(o.tag){case 27:case 5:l=o.memoizedProps}e[cn]=t,e=e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||Cp(e.nodeValue,n)?!0:!1,e||Bo(t,!0)}else e=Uc(e).createTextNode(l),e[cn]=t,t.stateNode=e}return Mt(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(l=Xa(t),n!==null){if(e===null){if(!l)throw Error(B(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(B(557));e[cn]=t}else _a(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Mt(t),e=!1}else n=wd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e){if(t.flags&256)return Bn(t),t;return Bn(t),null}if((t.flags&128)!==0)throw Error(B(558))}return Mt(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=Xa(t),l!==null&&l.dehydrated!==null){if(e===null){if(!o)throw Error(B(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(B(317));o[cn]=t}else _a(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Mt(t),o=!1}else o=wd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o){if(t.flags&256)return Bn(t),t;return Bn(t),null}}if(Bn(t),(t.flags&128)!==0)return t.lanes=n,t;return n=l!==null,e=e!==null&&e.memoizedState!==null,n&&(l=t.child,o=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(o=l.alternate.memoizedState.cachePool.pool),a=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(a=l.memoizedState.cachePool.pool),a!==o&&(l.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Zs(t,t.updateQueue),Mt(t),null;case 4:return fi(),e===null&&Af(t.stateNode.containerInfo),Mt(t),null;case 10:return Jl(t.type),Mt(t),null;case 19:if(an(qt),l=t.memoizedState,l===null)return Mt(t),null;if(o=(t.flags&128)!==0,a=l.rendering,a===null)if(o)ir(l,!1);else{if(Ut!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Ec(e),a!==null){t.flags|=128,ir(l,!1),e=a.updateQueue,t.updateQueue=e,Zs(t,e),t.subtreeFlags=0,e=n;for(n=t.child;n!==null;)Ym(n,e),n=n.sibling;return St(qt,qt.current&1|2),Ge&&Ql(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&Un()>zc&&(t.flags|=128,o=!0,ir(l,!1),t.lanes=4194304)}else{if(!o)if(e=Ec(a),e!==null){if(t.flags|=128,o=!0,e=e.updateQueue,t.updateQueue=e,Zs(t,e),ir(l,!0),l.tail===null&&l.tailMode==="hidden"&&!a.alternate&&!Ge)return Mt(t),null}else 2*Un()-l.renderingStartTime>zc&&n!==536870912&&(t.flags|=128,o=!0,ir(l,!1),t.lanes=4194304);l.isBackwards?(a.sibling=t.child,t.child=a):(e=l.last,e!==null?e.sibling=a:t.child=a,l.last=a)}if(l.tail!==null)return e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Un(),e.sibling=null,n=qt.current,St(qt,o?n&1|2:n&1),Ge&&Ql(t,l.treeForkCount),e;return Mt(t),null;case 22:case 23:return Bn(t),rf(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(Mt(t),t.subtreeFlags&6&&(t.flags|=8192)):Mt(t),n=t.updateQueue,n!==null&&Zs(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&an(ca),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Jl(Kt),Mt(t),null;case 25:return null;case 30:return null}throw Error(B(156,t.tag))}function n4(e,t){switch(tf(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Jl(Kt),fi(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return yc(t),null;case 31:if(t.memoizedState!==null){if(Bn(t),t.alternate===null)throw Error(B(340));_a()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Bn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(B(340));_a()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return an(qt),null;case 4:return fi(),null;case 10:return Jl(t.type),null;case 22:case 23:return Bn(t),rf(),e!==null&&an(ca),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Jl(Kt),null;case 25:return null;default:return null}}function Yg(e,t){switch(tf(t),t.tag){case 3:Jl(Kt),fi();break;case 26:case 27:case 5:yc(t);break;case 4:fi();break;case 31:t.memoizedState!==null&&Bn(t);break;case 13:Bn(t);break;case 19:an(qt);break;case 10:Jl(t.type);break;case 22:case 23:Bn(t),rf(),e!==null&&an(ca);break;case 24:Jl(Kt)}}function Pr(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var o=l.next;n=o;do{if((n.tag&e)===e){l=void 0;var a=n.create,i=n.inst;l=a(),i.destroy=l}n=n.next}while(n!==o)}}catch(r){ft(t,t.return,r)}}function Ho(e,t,n){try{var l=t.updateQueue,o=l!==null?l.lastEffect:null;if(o!==null){var a=o.next;l=a;do{if((l.tag&e)===e){var i=l.inst,r=i.destroy;if(r!==void 0){i.destroy=void 0,o=t;var s=n,g=r;try{g()}catch(_){ft(o,s,_)}}}l=l.next}while(l!==a)}}catch(_){ft(t,t.return,_)}}function jg(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Km(t,n)}catch(l){ft(e,e.return,l)}}}function Ig(e,t,n){n.props=ga(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){ft(e,t,l)}}function Mr(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n==="function"?e.refCleanup=n(l):n.current=l}}catch(o){ft(e,t,o)}}function Nl(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l==="function")try{l()}catch(o){ft(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==="function")try{n(null)}catch(o){ft(e,t,o)}else n.current=null}function Xg(e){var{type:t,memoizedProps:n,stateNode:l}=e;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(o){ft(e,e.return,o)}}function Nd(e,t,n){try{var l=e.stateNode;w4(l,e.type,n,t),l[Ln]=t}catch(o){ft(e,e.return,o)}}function qg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Yo(e.type)||e.tag===4}function zd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||qg(e.return))return null;e=e.return}e.sibling.return=e.return;for(e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Yo(e.type))continue e;if(e.flags&2)continue e;if(e.child===null||e.tag===4)continue e;else e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function v_(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!==null&&n!==void 0||t.onclick!==null||(t.onclick=Zl));else if(l!==4&&(l===27&&Yo(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(v_(e,t,n),e=e.sibling;e!==null;)v_(e,t,n),e=e.sibling}function Nc(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&Yo(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Nc(e,t,n),e=e.sibling;e!==null;)Nc(e,t,n),e=e.sibling}function Wg(e){var{stateNode:t,memoizedProps:n}=e;try{for(var l=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);_n(t,l,n),t[cn]=e,t[Ln]=n}catch(a){ft(e,e.return,a)}}var Gl=!1,Zt=!1,Od=!1,M1=typeof WeakSet==="function"?WeakSet:Set,ln=null;function l4(e,t){if(e=e.containerInfo,L_=Xc,e=Nm(e),K_(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var o=l.anchorOffset,a=l.focusNode;l=l.focusOffset;try{n.nodeType,a.nodeType}catch(D){n=null;break e}var i=0,r=-1,s=-1,g=0,_=0,b=e,f=null;t:for(;;){for(var w;;){if(b!==n||o!==0&&b.nodeType!==3||(r=i+o),b!==a||l!==0&&b.nodeType!==3||(s=i+l),b.nodeType===3&&(i+=b.nodeValue.length),(w=b.firstChild)===null)break;f=b,b=w}for(;;){if(b===e)break t;if(f===n&&++g===o&&(r=i),f===a&&++_===l&&(s=i),(w=b.nextSibling)!==null)break;b=f,f=b.parentNode}b=w}n=r===-1||s===-1?null:{start:r,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;D_={focusedElem:e,selectionRange:n},Xc=!1;for(ln=t;ln!==null;)if(t=ln,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ln=e;else for(;ln!==null;){switch(t=ln,a=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)o=e[n],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&a!==null){e=void 0,n=t,o=a.memoizedProps,a=a.memoizedState,l=n.stateNode;try{var C=ga(n.type,o);e=l.getSnapshotBeforeUpdate(C,a),l.__reactInternalSnapshotBeforeUpdate=e}catch(D){ft(n,n.return,D)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)z_(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":z_(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(B(163))}if(e=t.sibling,e!==null){e.return=t.return,ln=e;break}ln=t.return}}function Qg(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:ql(e,n),l&4&&Pr(5,n);break;case 1:if(ql(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(i){ft(n,n.return,i)}else{var o=ga(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(i){ft(n,n.return,i)}}l&64&&jg(n),l&512&&Mr(n,n.return);break;case 3:if(ql(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Km(e,t)}catch(i){ft(n,n.return,i)}}break;case 27:t===null&&l&4&&Wg(n);case 26:case 5:ql(e,n),t===null&&l&4&&Xg(n),l&512&&Mr(n,n.return);break;case 12:ql(e,n);break;case 31:ql(e,n),l&4&&Zg(e,n);break;case 13:ql(e,n),l&4&&Kg(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=_4.bind(null,n),L4(e,n))));break;case 22:if(l=n.memoizedState!==null||Gl,!l){t=t!==null&&t.memoizedState!==null||Zt,o=Gl;var a=Zt;Gl=l,(Zt=t)&&!a?Wl(e,n,(n.subtreeFlags&8772)!==0):ql(e,n),Gl=o,Zt=a}break;case 30:break;default:ql(e,n)}}function Gg(e){var t=e.alternate;t!==null&&(e.alternate=null,Gg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&q_(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Dt=null,En=!1;function Xl(e,t,n){for(n=n.child;n!==null;)Vg(e,t,n),n=n.sibling}function Vg(e,t,n){if(Yn&&typeof Yn.onCommitFiberUnmount==="function")try{Yn.onCommitFiberUnmount(Qr,n)}catch(a){}switch(n.tag){case 26:Zt||Nl(n,t),Xl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Zt||Nl(n,t);var l=Dt,o=En;Yo(n.type)&&(Dt=n.stateNode,En=!1),Xl(e,t,n),Lr(n.stateNode),Dt=l,En=o;break;case 5:Zt||Nl(n,t);case 6:if(l=Dt,o=En,Dt=null,Xl(e,t,n),Dt=l,En=o,Dt!==null)if(En)try{(Dt.nodeType===9?Dt.body:Dt.nodeName==="HTML"?Dt.ownerDocument.body:Dt).removeChild(n.stateNode)}catch(a){ft(n,t,a)}else try{Dt.removeChild(n.stateNode)}catch(a){ft(n,t,a)}break;case 18:Dt!==null&&(En?(e=Dt,U1(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ki(e)):U1(Dt,n.stateNode));break;case 4:l=Dt,o=En,Dt=n.stateNode.containerInfo,En=!0,Xl(e,t,n),Dt=l,En=o;break;case 0:case 11:case 14:case 15:Ho(2,n,t),Zt||Ho(4,n,t),Xl(e,t,n);break;case 1:Zt||(Nl(n,t),l=n.stateNode,typeof l.componentWillUnmount==="function"&&Ig(n,t,l)),Xl(e,t,n);break;case 21:Xl(e,t,n);break;case 22:Zt=(l=Zt)||n.memoizedState!==null,Xl(e,t,n),Zt=l;break;default:Xl(e,t,n)}}function Zg(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ki(e)}catch(n){ft(t,t.return,n)}}}function Kg(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ki(e)}catch(n){ft(t,t.return,n)}}function o4(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new M1),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new M1),t;default:throw Error(B(435,e.tag))}}function Ks(e,t){var n=o4(e);t.forEach(function(l){if(!n.has(l)){n.add(l);var o=f4.bind(null,e,l);l.then(o,o)}})}function Cn(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var o=n[l],a=e,i=t,r=i;e:for(;r!==null;){switch(r.tag){case 27:if(Yo(r.type)){Dt=r.stateNode,En=!1;break e}break;case 5:Dt=r.stateNode,En=!1;break e;case 3:case 4:Dt=r.stateNode.containerInfo,En=!0;break e}r=r.return}if(Dt===null)throw Error(B(160));Vg(a,i,o),Dt=null,En=!1,a=o.alternate,a!==null&&(a.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Fg(t,e),t=t.sibling}var pl=null;function Fg(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Cn(t,e),Mn(e),l&4&&(Ho(3,e,e.return),Pr(3,e),Ho(5,e,e.return));break;case 1:Cn(t,e),Mn(e),l&512&&(Zt||n===null||Nl(n,n.return)),l&64&&Gl&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var o=pl;if(Cn(t,e),Mn(e),l&512&&(Zt||n===null||Nl(n,n.return)),l&4){var a=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,o=o.ownerDocument||o;t:switch(l){case"title":if(a=o.getElementsByTagName("title")[0],!a||a[Zr]||a[cn]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))a=o.createElement(l),o.head.insertBefore(a,o.querySelector("head > title"));_n(a,l,n),a[cn]=e,on(a),l=a;break e;case"link":var i=Q1("link","href",o).get(l+(n.href||""));if(i){for(var r=0;r<i.length;r++)if(a=i[r],a.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){i.splice(r,1);break t}}a=o.createElement(l),_n(a,l,n),o.head.appendChild(a);break;case"meta":if(i=Q1("meta","content",o).get(l+(n.content||""))){for(r=0;r<i.length;r++)if(a=i[r],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){i.splice(r,1);break t}}a=o.createElement(l),_n(a,l,n),o.head.appendChild(a);break;default:throw Error(B(468,l))}a[cn]=e,on(a),l=a}e.stateNode=l}else G1(o,e.type,e.stateNode);else e.stateNode=W1(o,l,e.memoizedProps);else a!==l?(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,l===null?G1(o,e.type,e.stateNode):W1(o,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Nd(e,e.memoizedProps,n.memoizedProps)}break;case 27:Cn(t,e),Mn(e),l&512&&(Zt||n===null||Nl(n,n.return)),n!==null&&l&4&&Nd(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Cn(t,e),Mn(e),l&512&&(Zt||n===null||Nl(n,n.return)),e.flags&32){o=e.stateNode;try{mi(o,"")}catch(C){ft(e,e.return,C)}}l&4&&e.stateNode!=null&&(o=e.memoizedProps,Nd(e,o,n!==null?n.memoizedProps:o)),l&1024&&(Od=!0);break;case 6:if(Cn(t,e),Mn(e),l&4){if(e.stateNode===null)throw Error(B(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(C){ft(e,e.return,C)}}break;case 3:if(fc=null,o=pl,pl=Yc(t.containerInfo),Cn(t,e),pl=o,Mn(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{ki(t.containerInfo)}catch(C){ft(e,e.return,C)}Od&&(Od=!1,Jg(e));break;case 4:l=pl,pl=Yc(e.stateNode.containerInfo),Cn(t,e),Mn(e),pl=l;break;case 12:Cn(t,e),Mn(e);break;case 31:Cn(t,e),Mn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ks(e,l)));break;case 13:Cn(t,e),Mn(e),e.child.flags&8192&&e.memoizedState!==null!==(n!==null&&n.memoizedState!==null)&&(nu=Un()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ks(e,l)));break;case 22:o=e.memoizedState!==null;var s=n!==null&&n.memoizedState!==null,g=Gl,_=Zt;if(Gl=g||o,Zt=_||s,Cn(t,e),Zt=_,Gl=g,Mn(e),l&8192)e:for(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,o&&(n===null||s||Gl||Zt||ia(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){s=n=t;try{if(a=s.stateNode,o)i=a.style,typeof i.setProperty==="function"?i.setProperty("display","none","important"):i.display="none";else{r=s.stateNode;var b=s.memoizedProps.style,f=b!==void 0&&b!==null&&b.hasOwnProperty("display")?b.display:null;r.style.display=f==null||typeof f==="boolean"?"":(""+f).trim()}}catch(C){ft(s,s.return,C)}}}else if(t.tag===6){if(n===null){s=t;try{s.stateNode.nodeValue=o?"":s.memoizedProps}catch(C){ft(s,s.return,C)}}}else if(t.tag===18){if(n===null){s=t;try{var w=s.stateNode;o?Y1(w,!0):Y1(s.stateNode,!1)}catch(C){ft(s,s.return,C)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,Ks(e,n))));break;case 19:Cn(t,e),Mn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ks(e,l)));break;case 30:break;case 21:break;default:Cn(t,e),Mn(e)}}function Mn(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(qg(l)){n=l;break}l=l.return}if(n==null)throw Error(B(160));switch(n.tag){case 27:var o=n.stateNode,a=zd(e);Nc(e,a,o);break;case 5:var i=n.stateNode;n.flags&32&&(mi(i,""),n.flags&=-33);var r=zd(e);Nc(e,r,i);break;case 3:case 4:var s=n.stateNode.containerInfo,g=zd(e);v_(e,g,s);break;default:throw Error(B(161))}}catch(_){ft(e,e.return,_)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Jg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Jg(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ql(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Qg(e,t.alternate,t),t=t.sibling}function ia(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ho(4,t,t.return),ia(t);break;case 1:Nl(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==="function"&&Ig(t,t.return,n),ia(t);break;case 27:Lr(t.stateNode);case 26:case 5:Nl(t,t.return),ia(t);break;case 22:t.memoizedState===null&&ia(t);break;case 30:ia(t);break;default:ia(t)}e=e.sibling}}function Wl(e,t,n){n=n&&(t.subtreeFlags&8772)!==0;for(t=t.child;t!==null;){var l=t.alternate,o=e,a=t,i=a.flags;switch(a.tag){case 0:case 11:case 15:Wl(o,a,n),Pr(4,a);break;case 1:if(Wl(o,a,n),l=a,o=l.stateNode,typeof o.componentDidMount==="function")try{o.componentDidMount()}catch(g){ft(l,l.return,g)}if(l=a,o=l.updateQueue,o!==null){var r=l.stateNode;try{var s=o.shared.hiddenCallbacks;if(s!==null)for(o.shared.hiddenCallbacks=null,o=0;o<s.length;o++)Zm(s[o],r)}catch(g){ft(l,l.return,g)}}n&&i&64&&jg(a),Mr(a,a.return);break;case 27:Wg(a);case 26:case 5:Wl(o,a,n),n&&l===null&&i&4&&Xg(a),Mr(a,a.return);break;case 12:Wl(o,a,n);break;case 31:Wl(o,a,n),n&&i&4&&Zg(o,a);break;case 13:Wl(o,a,n),n&&i&4&&Kg(o,a);break;case 22:a.memoizedState===null&&Wl(o,a,n),Mr(a,a.return);break;case 30:break;default:Wl(o,a,n)}t=t.sibling}}function kf(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Fr(n))}function Sf(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Fr(e))}function gl(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Pg(e,t,n,l),t=t.sibling}function Pg(e,t,n,l){var o=t.flags;switch(t.tag){case 0:case 11:case 15:gl(e,t,n,l),o&2048&&Pr(9,t);break;case 1:gl(e,t,n,l);break;case 3:gl(e,t,n,l),o&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Fr(e)));break;case 12:if(o&2048){gl(e,t,n,l),e=t.stateNode;try{var a=t.memoizedProps,i=a.id,r=a.onPostCommit;typeof r==="function"&&r(i,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(s){ft(t,t.return,s)}}else gl(e,t,n,l);break;case 31:gl(e,t,n,l);break;case 13:gl(e,t,n,l);break;case 23:break;case 22:a=t.stateNode,i=t.alternate,t.memoizedState!==null?a._visibility&2?gl(e,t,n,l):Er(e,t):a._visibility&2?gl(e,t,n,l):(a._visibility|=2,Wa(e,t,n,l,(t.subtreeFlags&10256)!==0||!1)),o&2048&&kf(i,t);break;case 24:gl(e,t,n,l),o&2048&&Sf(t.alternate,t);break;default:gl(e,t,n,l)}}function Wa(e,t,n,l,o){o=o&&((t.subtreeFlags&10256)!==0||!1);for(t=t.child;t!==null;){var a=e,i=t,r=n,s=l,g=i.flags;switch(i.tag){case 0:case 11:case 15:Wa(a,i,r,s,o),Pr(8,i);break;case 23:break;case 22:var _=i.stateNode;i.memoizedState!==null?_._visibility&2?Wa(a,i,r,s,o):Er(a,i):(_._visibility|=2,Wa(a,i,r,s,o)),o&&g&2048&&kf(i.alternate,i);break;case 24:Wa(a,i,r,s,o),o&&g&2048&&Sf(i.alternate,i);break;default:Wa(a,i,r,s,o)}t=t.sibling}}function Er(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,o=l.flags;switch(l.tag){case 22:Er(n,l),o&2048&&kf(l.alternate,l);break;case 24:Er(n,l),o&2048&&Sf(l.alternate,l);break;default:Er(n,l)}t=t.sibling}}var mr=8192;function qa(e,t,n){if(e.subtreeFlags&mr)for(e=e.child;e!==null;)ep(e,t,n),e=e.sibling}function ep(e,t,n){switch(e.tag){case 26:qa(e,t,n),e.flags&mr&&e.memoizedState!==null&&I4(n,pl,e.memoizedState,e.memoizedProps);break;case 5:qa(e,t,n);break;case 3:case 4:var l=pl;pl=Yc(e.stateNode.containerInfo),qa(e,t,n),pl=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=mr,mr=16777216,qa(e,t,n),mr=l):qa(e,t,n));break;default:qa(e,t,n)}}function tp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function rr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];ln=l,lp(l,e)}tp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)np(e),e=e.sibling}function np(e){switch(e.tag){case 0:case 11:case 15:rr(e),e.flags&2048&&Ho(9,e,e.return);break;case 3:rr(e);break;case 12:rr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,dc(e)):rr(e);break;default:rr(e)}}function dc(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];ln=l,lp(l,e)}tp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ho(8,t,t.return),dc(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,dc(t));break;default:dc(t)}e=e.sibling}}function lp(e,t){for(;ln!==null;){var n=ln;switch(n.tag){case 0:case 11:case 15:Ho(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Fr(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,ln=l;else e:for(n=e;ln!==null;){l=ln;var o=l.sibling,a=l.return;if(Gg(l),l===n){ln=null;break e}if(o!==null){o.return=a,ln=o;break e}ln=a}}}var a4={getCacheForType:function(e){var t=dn(Kt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return dn(Kt).controller.signal}},i4=typeof WeakMap==="function"?WeakMap:Map,at=0,vt=null,Xe=null,Qe=0,_t=0,Rn=null,ko=!1,Ti=!1,Cf=!1,oo=0,Ut=0,$o=0,da=0,Mf=0,$n=0,bi=0,Tr=null,Tn=null,w_=!1,nu=0,op=0,zc=1/0,Oc=null,Lo=null,en=0,Do=null,xi=null,Pl=0,k_=0,S_=null,ap=null,Ar=0,C_=null;function In(){return(at&2)!==0&&Qe!==0?Qe&-Qe:Se.T!==null?Tf():hm()}function ip(){if($n===0)if((Qe&536870912)===0||Ge){var e=Is;Is<<=1,(Is&3932160)===0&&(Is=262144),$n=e}else $n=536870912;return e=qn.current,e!==null&&(e.flags|=32),$n}function An(e,t,n){if(e===vt&&(_t===2||_t===9)||e.cancelPendingCommit!==null)vi(e,0),So(e,Qe,$n,!1);if(Vr(e,n),(at&2)===0||e!==vt)e===vt&&((at&2)===0&&(da|=n),Ut===4&&So(e,Qe,$n,!1)),Rl(e)}function rp(e,t,n){if((at&6)!==0)throw Error(B(327));var l=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Gr(e,t),o=l?c4(e,t):Rd(e,t,!0),a=l;do{if(o===0){Ti&&!l&&So(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!r4(n)){o=Rd(e,t,!1),a=!1;continue}if(o===2){if(a=t,e.errorRecoveryDisabledLanes&a)var i=0;else i=e.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){t=i;e:{var r=e;o=Tr;var s=r.current.memoizedState.isDehydrated;if(s&&(vi(r,i).flags|=256),i=Rd(r,i,!1),i!==2){if(Cf&&!s){r.errorRecoveryDisabledLanes|=a,da|=a,o=4;break e}a=Tn,Tn=o,a!==null&&(Tn===null?Tn=a:Tn.push.apply(Tn,a))}o=i}if(a=!1,o!==2)continue}}if(o===1){vi(e,0),So(e,t,0,!0);break}e:{switch(l=e,a=o,a){case 0:case 1:throw Error(B(345));case 4:if((t&4194048)!==t)break;case 6:So(l,t,$n,!ko);break e;case 2:Tn=null;break;case 3:case 5:break;default:throw Error(B(329))}if((t&62914560)===t&&(o=nu+300-Un(),10<o)){if(So(l,t,$n,!ko),Wc(l,0,!0)!==0)break e;Pl=t,l.timeoutHandle=Ep(E1.bind(null,l,n,Tn,Oc,w_,t,$n,da,bi,ko,a,"Throttled",-0,0),o);break e}E1(l,n,Tn,Oc,w_,t,$n,da,bi,ko,a,null,-0,0)}}break}while(1);Rl(e)}function E1(e,t,n,l,o,a,i,r,s,g,_,b,f,w){if(e.timeoutHandle=-1,b=t.subtreeFlags,b&8192||(b&16785408)===16785408){b={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zl},ep(t,a,b);var C=(a&62914560)===a?nu-Un():(a&4194048)===a?op-Un():0;if(C=X4(b,C),C!==null){Pl=a,e.cancelPendingCommit=C(A1.bind(null,e,t,a,n,l,o,i,r,s,_,b,null,f,w)),So(e,a,i,!g);return}}A1(e,t,a,n,l,o,i,r,s)}function r4(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var o=n[l],a=o.getSnapshot;o=o.value;try{if(!Xn(a(),o))return!1}catch(i){return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function So(e,t,n,l){t&=~Mf,t&=~da,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var o=t;0<o;){var a=31-jn(o),i=1<<a;l[a]=-1,o&=~i}n!==0&&dm(e,n,t)}function lu(){return(at&6)===0?(es(0,!1),!1):!0}function Ef(){if(Xe!==null){if(_t===0)var e=Xe.return;else e=Xe,Kl=va=null,_f(e),ui=null,Hr=0,e=Xe;for(;e!==null;)Yg(e.alternate,e),e=e.return;Xe=null}}function vi(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,C4(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Pl=0,Ef(),vt=e,Xe=n=Fl(e.current,null),Qe=t,_t=0,Rn=null,ko=!1,Ti=Gr(e,t),Cf=!1,bi=$n=Mf=da=$o=Ut=0,Tn=Tr=null,w_=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var o=31-jn(l),a=1<<o;t|=e[o],l&=~a}return oo=t,Zc(),n}function sp(e,t){Oe=null,Se.H=Ur,t===Ei||t===Fc?(t=a1(),_t=3):t===of?(t=a1(),_t=4):_t=t===vf?8:t!==null&&typeof t==="object"&&typeof t.then==="function"?6:1,Rn=t,Xe===null&&(Ut=1,Lc(e,nl(t,e.current)))}function cp(){var e=qn.current;return e===null?!0:(Qe&4194048)===Qe?ol===null?!0:!1:(Qe&62914560)===Qe||(Qe&536870912)!==0?e===ol:!1}function up(){var e=Se.H;return Se.H=Ur,e===null?Ur:e}function dp(){var e=Se.A;return Se.A=a4,e}function Rc(){Ut=4,ko||(Qe&4194048)!==Qe&&qn.current!==null||(Ti=!0),($o&134217727)===0&&(da&134217727)===0||vt===null||So(vt,Qe,$n,!1)}function Rd(e,t,n){var l=at;at|=2;var o=up(),a=dp();if(vt!==e||Qe!==t)Oc=null,vi(e,t);t=!1;var i=Ut;e:do try{if(_t!==0&&Xe!==null){var r=Xe,s=Rn;switch(_t){case 8:Ef(),i=6;break e;case 3:case 2:case 9:case 6:qn.current===null&&(t=!0);var g=_t;if(_t=0,Rn=null,ai(e,r,s,g),n&&Ti){i=0;break e}break;default:g=_t,_t=0,Rn=null,ai(e,r,s,g)}}s4(),i=Ut;break}catch(_){sp(e,_)}while(1);return t&&e.shellSuspendCounter++,Kl=va=null,at=l,Se.H=o,Se.A=a,Xe===null&&(vt=null,Qe=0,Zc()),i}function s4(){for(;Xe!==null;)_p(Xe)}function c4(e,t){var n=at;at|=2;var l=up(),o=dp();vt!==e||Qe!==t?(Oc=null,zc=Un()+500,vi(e,t)):Ti=Gr(e,t);e:do try{if(_t!==0&&Xe!==null){t=Xe;var a=Rn;t:switch(_t){case 1:_t=0,Rn=null,ai(e,t,a,1);break;case 2:case 9:if(o1(a)){_t=0,Rn=null,T1(t);break}t=function(){_t!==2&&_t!==9||vt!==e||(_t=7),Rl(e)},a.then(t,t);break e;case 3:_t=7;break e;case 4:_t=5;break e;case 7:o1(a)?(_t=0,Rn=null,T1(t)):(_t=0,Rn=null,ai(e,t,a,7));break;case 5:var i=null;switch(Xe.tag){case 26:i=Xe.memoizedState;case 5:case 27:var r=Xe;if(i?Np(i):r.stateNode.complete){_t=0,Rn=null;var s=r.sibling;if(s!==null)Xe=s;else{var g=r.return;g!==null?(Xe=g,ou(g)):Xe=null}break t}}_t=0,Rn=null,ai(e,t,a,5);break;case 6:_t=0,Rn=null,ai(e,t,a,6);break;case 8:Ef(),Ut=6;break e;default:throw Error(B(462))}}u4();break}catch(_){sp(e,_)}while(1);if(Kl=va=null,Se.H=l,Se.A=o,at=n,Xe!==null)return 0;return vt=null,Qe=0,Zc(),Ut}function u4(){for(;Xe!==null&&!zx();)_p(Xe)}function _p(e){var t=Ug(e.alternate,e,oo);e.memoizedProps=e.pendingProps,t===null?ou(e):Xe=t}function T1(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=v1(n,t,t.pendingProps,t.type,void 0,Qe);break;case 11:t=v1(n,t,t.pendingProps,t.type.render,t.ref,Qe);break;case 5:_f(t);default:Yg(n,t),t=Xe=Ym(t,oo),t=Ug(n,t,oo)}e.memoizedProps=e.pendingProps,t===null?ou(e):Xe=t}function ai(e,t,n,l){Kl=va=null,_f(t),ui=null,Hr=0;var o=t.return;try{if(Jv(e,o,t,n,Qe)){Ut=1,Lc(e,nl(n,e.current)),Xe=null;return}}catch(a){if(o!==null)throw Xe=o,a;Ut=1,Lc(e,nl(n,e.current)),Xe=null;return}if(t.flags&32768){if(Ge||l===1)e=!0;else if(Ti||(Qe&536870912)!==0)e=!1;else if(ko=e=!0,l===2||l===9||l===3||l===6)l=qn.current,l!==null&&l.tag===13&&(l.flags|=16384);fp(t,e)}else ou(t)}function ou(e){var t=e;do{if((t.flags&32768)!==0){fp(t,ko);return}e=t.return;var n=t4(t.alternate,t,oo);if(n!==null){Xe=n;return}if(t=t.sibling,t!==null){Xe=t;return}Xe=t=e}while(t!==null);Ut===0&&(Ut=5)}function fp(e,t){do{var n=n4(e.alternate,e);if(n!==null){n.flags&=32767,Xe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Xe=e;return}Xe=e=n}while(e!==null);Ut=6,Xe=null}function A1(e,t,n,l,o,a,i,r,s){e.cancelPendingCommit=null;do au();while(en!==0);if((at&6)!==0)throw Error(B(327));if(t!==null){if(t===e.current)throw Error(B(177));if(a=t.lanes|t.childLanes,a|=F_,Xx(e,n,a,i,r,s),e===vt&&(Xe=vt=null,Qe=0),xi=t,Do=e,Pl=n,k_=a,S_=o,ap=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,h4(bc,function(){return yp(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=Se.T,Se.T=null,o=it.p,it.p=2,i=at,at|=4;try{l4(e,t,n)}finally{at=i,it.p=o,Se.T=l}}en=1,hp(),mp(),gp()}}function hp(){if(en===1){en=0;var e=Do,t=xi,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=Se.T,Se.T=null;var l=it.p;it.p=2;var o=at;at|=4;try{Fg(t,e);var a=D_,i=Nm(e.containerInfo),{focusedElem:r,selectionRange:s}=a;if(i!==r&&r&&r.ownerDocument&&Dm(r.ownerDocument.documentElement,r)){if(s!==null&&K_(r)){var{start:g,end:_}=s;if(_===void 0&&(_=g),"selectionStart"in r)r.selectionStart=g,r.selectionEnd=Math.min(_,r.value.length);else{var b=r.ownerDocument||document,f=b&&b.defaultView||window;if(f.getSelection){var w=f.getSelection(),C=r.textContent.length,D=Math.min(s.start,C),A=s.end===void 0?D:Math.min(s.end,C);!w.extend&&D>A&&(i=A,A=D,D=i);var h=Fh(r,D),y=Fh(r,A);if(h&&y&&(w.rangeCount!==1||w.anchorNode!==h.node||w.anchorOffset!==h.offset||w.focusNode!==y.node||w.focusOffset!==y.offset)){var k=b.createRange();k.setStart(h.node,h.offset),w.removeAllRanges(),D>A?(w.addRange(k),w.extend(y.node,y.offset)):(k.setEnd(y.node,y.offset),w.addRange(k))}}}}b=[];for(w=r;w=w.parentNode;)w.nodeType===1&&b.push({element:w,left:w.scrollLeft,top:w.scrollTop});typeof r.focus==="function"&&r.focus();for(r=0;r<b.length;r++){var E=b[r];E.element.scrollLeft=E.left,E.element.scrollTop=E.top}}Xc=!!L_,D_=L_=null}finally{at=o,it.p=l,Se.T=n}}e.current=t,en=2}}function mp(){if(en===2){en=0;var e=Do,t=xi,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Se.T,Se.T=null;var l=it.p;it.p=2;var o=at;at|=4;try{Qg(e,t.alternate,t)}finally{at=o,it.p=l,Se.T=n}}en=3}}function gp(){if(en===4||en===3){en=0,Ox();var e=Do,t=xi,n=Pl,l=ap;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?en=5:(en=0,xi=Do=null,pp(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(Lo=null),X_(n),t=t.stateNode,Yn&&typeof Yn.onCommitFiberRoot==="function")try{Yn.onCommitFiberRoot(Qr,t,void 0,(t.current.flags&128)===128)}catch(s){}if(l!==null){t=Se.T,o=it.p,it.p=2,Se.T=null;try{for(var a=e.onRecoverableError,i=0;i<l.length;i++){var r=l[i];a(r.value,{componentStack:r.stack})}}finally{Se.T=t,it.p=o}}(Pl&3)!==0&&au(),Rl(e),o=e.pendingLanes,(n&261930)!==0&&(o&42)!==0?e===C_?Ar++:(Ar=0,C_=e):Ar=0,es(0,!1)}}function pp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Fr(t)))}function au(){return hp(),mp(),gp(),yp()}function yp(){if(en!==5)return!1;var e=Do,t=k_;k_=0;var n=X_(Pl),l=Se.T,o=it.p;try{it.p=32>n?32:n,Se.T=null,n=S_,S_=null;var a=Do,i=Pl;if(en=0,xi=Do=null,Pl=0,(at&6)!==0)throw Error(B(331));var r=at;if(at|=4,np(a.current),Pg(a,a.current,i,n),at=r,es(0,!1),Yn&&typeof Yn.onPostCommitFiberRoot==="function")try{Yn.onPostCommitFiberRoot(Qr,a)}catch(s){}return!0}finally{it.p=o,Se.T=l,pp(e,t)}}function L1(e,t,n){t=nl(n,t),t=y_(e.stateNode,t,2),e=Ao(e,t,2),e!==null&&(Vr(e,2),Rl(e))}function ft(e,t,n){if(e.tag===3)L1(e,e,n);else for(;t!==null;){if(t.tag===3){L1(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError==="function"||typeof l.componentDidCatch==="function"&&(Lo===null||!Lo.has(l))){e=nl(n,e),n=zg(2),l=Ao(t,n,2),l!==null&&(Og(n,l,t,e),Vr(l,2),Rl(l));break}}t=t.return}}function Bd(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new i4;var o=new Set;l.set(t,o)}else o=l.get(t),o===void 0&&(o=new Set,l.set(t,o));o.has(n)||(Cf=!0,o.add(n),e=d4.bind(null,e,t,n),t.then(e,e))}function d4(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,vt===e&&(Qe&n)===n&&(Ut===4||Ut===3&&(Qe&62914560)===Qe&&300>Un()-nu?(at&2)===0&&vi(e,0):Mf|=n,bi===Qe&&(bi=0)),Rl(e)}function bp(e,t){t===0&&(t=um()),e=xa(e,t),e!==null&&(Vr(e,t),Rl(e))}function _4(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),bp(e,n)}function f4(e,t){var n=0;switch(e.tag){case 31:case 13:var{stateNode:l,memoizedState:o}=e;o!==null&&(n=o.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(B(314))}l!==null&&l.delete(t),bp(e,n)}function h4(e,t){return j_(e,t)}var Bc=null,Qa=null,M_=!1,Hc=!1,Hd=!1,Co=0;function Rl(e){e!==Qa&&e.next===null&&(Qa===null?Bc=Qa=e:Qa=Qa.next=e),Hc=!0,M_||(M_=!0,g4())}function es(e,t){if(!Hd&&Hc){Hd=!0;do{var n=!1;for(var l=Bc;l!==null;){if(!t)if(e!==0){var o=l.pendingLanes;if(o===0)var a=0;else{var i=l.suspendedLanes,r=l.pingedLanes;a=(1<<31-jn(42|e)+1)-1,a&=o&~(i&~r),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,D1(l,a))}else a=Qe,a=Wc(l,l===vt?a:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(a&3)===0||Gr(l,a)||(n=!0,D1(l,a));l=l.next}}while(n);Hd=!1}}function m4(){xp()}function xp(){Hc=M_=!1;var e=0;Co!==0&&S4()&&(e=Co);for(var t=Un(),n=null,l=Bc;l!==null;){var o=l.next,a=vp(l,t);if(a===0)l.next=null,n===null?Bc=o:n.next=o,o===null&&(Qa=n);else if(n=l,e!==0||(a&3)!==0)Hc=!0;l=o}en!==0&&en!==5||es(e,!1),Co!==0&&(Co=0)}function vp(e,t){for(var{suspendedLanes:n,pingedLanes:l,expirationTimes:o}=e,a=e.pendingLanes&-62914561;0<a;){var i=31-jn(a),r=1<<i,s=o[i];if(s===-1){if((r&n)===0||(r&l)!==0)o[i]=Ix(r,t)}else s<=t&&(e.expiredLanes|=r);a&=~r}if(t=vt,n=Qe,n=Wc(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(_t===2||_t===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&fd(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Gr(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&fd(l),X_(n)){case 2:case 8:n=sm;break;case 32:n=bc;break;case 268435456:n=cm;break;default:n=bc}return l=wp.bind(null,e),n=j_(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&fd(l),e.callbackPriority=2,e.callbackNode=null,2}function wp(e,t){if(en!==0&&en!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(au()&&e.callbackNode!==n)return null;var l=Qe;if(l=Wc(e,e===vt?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0)return null;return rp(e,l,t),vp(e,Un()),e.callbackNode!=null&&e.callbackNode===n?wp.bind(null,e):null}function D1(e,t){if(au())return null;rp(e,t,!0)}function g4(){M4(function(){(at&6)!==0?j_(rm,m4):xp()})}function Tf(){if(Co===0){var e=gi;e===0&&(e=js,js<<=1,(js&261888)===0&&(js=256)),Co=e}return Co}function N1(e){return e==null||typeof e==="symbol"||typeof e==="boolean"?null:typeof e==="function"?e:tc(""+e)}function z1(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function p4(e,t,n,l,o){if(t==="submit"&&n&&n.stateNode===o){var a=N1((o[Ln]||null).action),i=l.submitter;i&&(t=(t=i[Ln]||null)?N1(t.formAction):i.getAttribute("formAction"),t!==null&&(a=t,i=null));var r=new Qc("action","action",null,l,o);e.push({event:r,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Co!==0){var s=i?z1(o,i):new FormData(o);g_(n,{pending:!0,data:s,method:o.method,action:a},null,s)}}else typeof a==="function"&&(r.preventDefault(),s=i?z1(o,i):new FormData(o),g_(n,{pending:!0,data:s,method:o.method,action:a},a,s))},currentTarget:o}]})}}for(gr=0;gr<o_.length;gr++)pr=o_[gr],E_=pr.toLowerCase(),T_=pr[0].toUpperCase()+pr.slice(1),yl(E_,"on"+T_);var pr,E_,T_,gr;yl(Om,"onAnimationEnd");yl(Rm,"onAnimationIteration");yl(Bm,"onAnimationStart");yl("dblclick","onDoubleClick");yl("focusin","onFocus");yl("focusout","onBlur");yl(Rv,"onTransitionRun");yl(Bv,"onTransitionStart");yl(Hv,"onTransitionCancel");yl(Hm,"onTransitionEnd");hi("onMouseEnter",["mouseout","mouseover"]);hi("onMouseLeave",["mouseout","mouseover"]);hi("onPointerEnter",["pointerout","pointerover"]);hi("onPointerLeave",["pointerout","pointerover"]);pa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pa("onBeforeInput",["compositionend","keypress","textInput","paste"]);pa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),y4=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Yr));function kp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],o=l.event;l=l.listeners;e:{var a=void 0;if(t)for(var i=l.length-1;0<=i;i--){var r=l[i],s=r.instance,g=r.currentTarget;if(r=r.listener,s!==a&&o.isPropagationStopped())break e;a=r,o.currentTarget=g;try{a(o)}catch(_){vc(_)}o.currentTarget=null,a=s}else for(i=0;i<l.length;i++){if(r=l[i],s=r.instance,g=r.currentTarget,r=r.listener,s!==a&&o.isPropagationStopped())break e;a=r,o.currentTarget=g;try{a(o)}catch(_){vc(_)}o.currentTarget=null,a=s}}}}function Ie(e,t){var n=t[Kd];n===void 0&&(n=t[Kd]=new Set);var l=e+"__bubble";n.has(l)||(Sp(t,e,2,!1),n.add(l))}function $d(e,t,n){var l=0;t&&(l|=4),Sp(n,e,l,t)}var Fs="_reactListening"+Math.random().toString(36).slice(2);function Af(e){if(!e[Fs]){e[Fs]=!0,mm.forEach(function(n){n!=="selectionchange"&&(y4.has(n)||$d(n,!1,e),$d(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fs]||(t[Fs]=!0,$d("selectionchange",!1,t))}}function Sp(e,t,n,l){switch(Hp(t)){case 2:var o=Q4;break;case 8:o=G4;break;default:o=zf}n=o.bind(null,t,n,e),o=void 0,!t_||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),l?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ud(e,t,n,l,o){var a=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var i=l.tag;if(i===3||i===4){var r=l.stateNode.containerInfo;if(r===o)break;if(i===4)for(i=l.return;i!==null;){var s=i.tag;if((s===3||s===4)&&i.stateNode.containerInfo===o)return;i=i.return}for(;r!==null;){if(i=Ka(r),i===null)return;if(s=i.tag,s===5||s===6||s===26||s===27){l=a=i;continue e}r=r.parentNode}}l=l.return}km(function(){var g=a,_=Q_(n),b=[];e:{var f=$m.get(e);if(f!==void 0){var w=Qc,C=e;switch(e){case"keypress":if(lc(n)===0)break e;case"keydown":case"keyup":w=fv;break;case"focusin":C="focus",w=yd;break;case"focusout":C="blur",w=yd;break;case"beforeblur":case"afterblur":w=yd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Ih;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=tv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=gv;break;case Om:case Rm:case Bm:w=ov;break;case Hm:w=yv;break;case"scroll":case"scrollend":w=Px;break;case"wheel":w=xv;break;case"copy":case"cut":case"paste":w=iv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=qh;break;case"toggle":case"beforetoggle":w=wv}var D=(t&4)!==0,A=!D&&(e==="scroll"||e==="scrollend"),h=D?f!==null?f+"Capture":null:f;D=[];for(var y=g,k;y!==null;){var E=y;if(k=E.stateNode,E=E.tag,E!==5&&E!==26&&E!==27||k===null||h===null||(E=Nr(y,h),E!=null&&D.push(jr(y,E,k))),A)break;y=y.return}0<D.length&&(f=new w(f,C,null,n,_),b.push({event:f,listeners:D}))}}if((t&7)===0){e:{if(f=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",f&&n!==e_&&(C=n.relatedTarget||n.fromElement)&&(Ka(C)||C[Si]))break e;if(w||f){if(f=_.window===_?_:(f=_.ownerDocument)?f.defaultView||f.parentWindow:window,w){if(C=n.relatedTarget||n.toElement,w=g,C=C?Ka(C):null,C!==null&&(A=Wr(C),D=C.tag,C!==A||D!==5&&D!==27&&D!==6))C=null}else w=null,C=g;if(w!==C){if(D=Ih,E="onMouseLeave",h="onMouseEnter",y="mouse",e==="pointerout"||e==="pointerover")D=qh,E="onPointerLeave",h="onPointerEnter",y="pointer";if(A=w==null?f:dr(w),k=C==null?f:dr(C),f=new D(E,y+"leave",w,n,_),f.target=A,f.relatedTarget=k,E=null,Ka(_)===g&&(D=new D(h,y+"enter",C,n,_),D.target=k,D.relatedTarget=A,E=D),A=E,w&&C)t:{D=b4,h=w,y=C,k=0;for(E=h;E;E=D(E))k++;E=0;for(var Q=y;Q;Q=D(Q))E++;for(;0<k-E;)h=D(h),k--;for(;0<E-k;)y=D(y),E--;for(;k--;){if(h===y||y!==null&&h===y.alternate){D=h;break t}h=D(h),y=D(y)}D=null}else D=null;w!==null&&O1(b,f,w,D,!1),C!==null&&A!==null&&O1(b,A,C,D,!0)}}}e:{if(f=g?dr(g):window,w=f.nodeName&&f.nodeName.toLowerCase(),w==="select"||w==="input"&&f.type==="file")var ae=Vh;else if(Gh(f))if(Am)ae=Nv;else{ae=Lv;var z=Av}else w=f.nodeName,!w||w.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?g&&W_(g.elementType)&&(ae=Vh):ae=Dv;if(ae&&(ae=ae(e,g))){Tm(b,ae,n,_);break e}z&&z(e,f,g),e==="focusout"&&g&&f.type==="number"&&g.memoizedProps.value!=null&&Pd(f,"number",f.value)}switch(z=g?dr(g):window,e){case"focusin":if(Gh(z)||z.contentEditable==="true")Pa=z,n_=g,xr=null;break;case"focusout":xr=n_=Pa=null;break;case"mousedown":l_=!0;break;case"contextmenu":case"mouseup":case"dragend":l_=!1,Jh(b,n,_);break;case"selectionchange":if(Ov)break;case"keydown":case"keyup":Jh(b,n,_)}var F;if(Z_)e:{switch(e){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else Ja?Mm(e,n)&&(te="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(te="onCompositionStart");if(te&&(Cm&&n.locale!=="ko"&&(Ja||te!=="onCompositionStart"?te==="onCompositionEnd"&&Ja&&(F=Sm()):(wo=_,G_=("value"in wo)?wo.value:wo.textContent,Ja=!0)),z=$c(g,te),0<z.length&&(te=new Xh(te,e,null,n,_),b.push({event:te,listeners:z}),F?te.data=F:(F=Em(n),F!==null&&(te.data=F)))),F=Sv?Cv(e,n):Mv(e,n))te=$c(g,"onBeforeInput"),0<te.length&&(z=new Xh("onBeforeInput","beforeinput",null,n,_),b.push({event:z,listeners:te}),z.data=F);p4(b,e,g,n,_)}kp(b,t)})}function jr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $c(e,t){for(var n=t+"Capture",l=[];e!==null;){var o=e,a=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||a===null||(o=Nr(e,n),o!=null&&l.unshift(jr(e,o,a)),o=Nr(e,t),o!=null&&l.push(jr(e,o,a))),e.tag===3)return l;e=e.return}return[]}function b4(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e?e:null}function O1(e,t,n,l,o){for(var a=t._reactName,i=[];n!==null&&n!==l;){var r=n,s=r.alternate,g=r.stateNode;if(r=r.tag,s!==null&&s===l)break;r!==5&&r!==26&&r!==27||g===null||(s=g,o?(g=Nr(n,a),g!=null&&i.unshift(jr(n,g,s))):o||(g=Nr(n,a),g!=null&&i.push(jr(n,g,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var x4=/\r\n?/g,v4=/\u0000|\uFFFD/g;function R1(e){return(typeof e==="string"?e:""+e).replace(x4,`
`).replace(v4,"")}function Cp(e,t){return t=R1(t),R1(e)===t?!0:!1}function pt(e,t,n,l,o,a){switch(n){case"children":typeof l==="string"?t==="body"||t==="textarea"&&l===""||mi(e,l):(typeof l==="number"||typeof l==="bigint")&&t!=="body"&&mi(e,""+l);break;case"className":qs(e,"class",l);break;case"tabIndex":qs(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":qs(e,n,l);break;case"style":wm(e,l,a);break;case"data":if(t!=="object"){qs(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l==="function"||typeof l==="symbol"||typeof l==="boolean"){e.removeAttribute(n);break}l=tc(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l==="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a==="function"&&(n==="formAction"?(t!=="input"&&pt(e,t,"name",o.name,o,null),pt(e,t,"formEncType",o.formEncType,o,null),pt(e,t,"formMethod",o.formMethod,o,null),pt(e,t,"formTarget",o.formTarget,o,null)):(pt(e,t,"encType",o.encType,o,null),pt(e,t,"method",o.method,o,null),pt(e,t,"target",o.target,o,null)));if(l==null||typeof l==="symbol"||typeof l==="boolean"){e.removeAttribute(n);break}l=tc(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=Zl);break;case"onScroll":l!=null&&Ie("scroll",e);break;case"onScrollEnd":l!=null&&Ie("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!=="object"||!("__html"in l))throw Error(B(61));if(n=l.__html,n!=null){if(o.children!=null)throw Error(B(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!=="function"&&typeof l!=="symbol";break;case"muted":e.muted=l&&typeof l!=="function"&&typeof l!=="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l==="function"||typeof l==="boolean"||typeof l==="symbol"){e.removeAttribute("xlink:href");break}n=tc(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!=="function"&&typeof l!=="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!=="function"&&typeof l!=="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!=="function"&&typeof l!=="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!=="function"&&typeof l!=="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l==="function"||typeof l==="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":Ie("beforetoggle",e),Ie("toggle",e),ec(e,"popover",l);break;case"xlinkActuate":jl(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":jl(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":jl(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":jl(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":jl(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":jl(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":jl(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":jl(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":jl(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ec(e,"is",l);break;case"innerText":case"textContent":break;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=Fx.get(n)||n,ec(e,n,l)}}function A_(e,t,n,l,o,a){switch(n){case"style":wm(e,l,a);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!=="object"||!("__html"in l))throw Error(B(61));if(n=l.__html,n!=null){if(o.children!=null)throw Error(B(60));e.innerHTML=n}}break;case"children":typeof l==="string"?mi(e,l):(typeof l==="number"||typeof l==="bigint")&&mi(e,""+l);break;case"onScroll":l!=null&&Ie("scroll",e);break;case"onScrollEnd":l!=null&&Ie("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Zl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!gm.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(o=n.endsWith("Capture"),t=n.slice(2,o?n.length-7:void 0),a=e[Ln]||null,a=a!=null?a[n]:null,typeof a==="function"&&e.removeEventListener(t,a,o),typeof l==="function")){typeof a!=="function"&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,o);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):ec(e,n,l)}}}function _n(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ie("error",e),Ie("load",e);var l=!1,o=!1,a;for(a in n)if(n.hasOwnProperty(a)){var i=n[a];if(i!=null)switch(a){case"src":l=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(B(137,t));default:pt(e,t,a,i,n,null)}}o&&pt(e,t,"srcSet",n.srcSet,n,null),l&&pt(e,t,"src",n.src,n,null);return;case"input":Ie("invalid",e);var r=a=i=o=null,s=null,g=null;for(l in n)if(n.hasOwnProperty(l)){var _=n[l];if(_!=null)switch(l){case"name":o=_;break;case"type":i=_;break;case"checked":s=_;break;case"defaultChecked":g=_;break;case"value":a=_;break;case"defaultValue":r=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(B(137,t));break;default:pt(e,t,l,_,n,null)}}bm(e,a,r,s,g,i,o,!1);return;case"select":Ie("invalid",e),l=i=a=null;for(o in n)if(n.hasOwnProperty(o)&&(r=n[o],r!=null))switch(o){case"value":a=r;break;case"defaultValue":i=r;break;case"multiple":l=r;default:pt(e,t,o,r,n,null)}t=a,n=i,e.multiple=!!l,t!=null?ri(e,!!l,t,!1):n!=null&&ri(e,!!l,n,!0);return;case"textarea":Ie("invalid",e),a=o=l=null;for(i in n)if(n.hasOwnProperty(i)&&(r=n[i],r!=null))switch(i){case"value":l=r;break;case"defaultValue":o=r;break;case"children":a=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(B(91));break;default:pt(e,t,i,r,n,null)}vm(e,l,o,a);return;case"option":for(s in n)if(n.hasOwnProperty(s)&&(l=n[s],l!=null))switch(s){case"selected":e.selected=l&&typeof l!=="function"&&typeof l!=="symbol";break;default:pt(e,t,s,l,n,null)}return;case"dialog":Ie("beforetoggle",e),Ie("toggle",e),Ie("cancel",e),Ie("close",e);break;case"iframe":case"object":Ie("load",e);break;case"video":case"audio":for(l=0;l<Yr.length;l++)Ie(Yr[l],e);break;case"image":Ie("error",e),Ie("load",e);break;case"details":Ie("toggle",e);break;case"embed":case"source":case"link":Ie("error",e),Ie("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(g in n)if(n.hasOwnProperty(g)&&(l=n[g],l!=null))switch(g){case"children":case"dangerouslySetInnerHTML":throw Error(B(137,t));default:pt(e,t,g,l,n,null)}return;default:if(W_(t)){for(_ in n)n.hasOwnProperty(_)&&(l=n[_],l!==void 0&&A_(e,t,_,l,n,void 0));return}}for(r in n)n.hasOwnProperty(r)&&(l=n[r],l!=null&&pt(e,t,r,l,n,null))}function w4(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,a=null,i=null,r=null,s=null,g=null,_=null;for(w in n){var b=n[w];if(n.hasOwnProperty(w)&&b!=null)switch(w){case"checked":break;case"value":break;case"defaultValue":s=b;default:l.hasOwnProperty(w)||pt(e,t,w,null,l,b)}}for(var f in l){var w=l[f];if(b=n[f],l.hasOwnProperty(f)&&(w!=null||b!=null))switch(f){case"type":a=w;break;case"name":o=w;break;case"checked":g=w;break;case"defaultChecked":_=w;break;case"value":i=w;break;case"defaultValue":r=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(B(137,t));break;default:w!==b&&pt(e,t,f,w,l,b)}}Jd(e,i,r,s,g,_,a,o);return;case"select":w=i=r=f=null;for(a in n)if(s=n[a],n.hasOwnProperty(a)&&s!=null)switch(a){case"value":break;case"multiple":w=s;default:l.hasOwnProperty(a)||pt(e,t,a,null,l,s)}for(o in l)if(a=l[o],s=n[o],l.hasOwnProperty(o)&&(a!=null||s!=null))switch(o){case"value":f=a;break;case"defaultValue":r=a;break;case"multiple":i=a;default:a!==s&&pt(e,t,o,a,l,s)}t=r,n=i,l=w,f!=null?ri(e,!!n,f,!1):!!l!==!!n&&(t!=null?ri(e,!!n,t,!0):ri(e,!!n,n?[]:"",!1));return;case"textarea":w=f=null;for(r in n)if(o=n[r],n.hasOwnProperty(r)&&o!=null&&!l.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:pt(e,t,r,null,l,o)}for(i in l)if(o=l[i],a=n[i],l.hasOwnProperty(i)&&(o!=null||a!=null))switch(i){case"value":f=o;break;case"defaultValue":w=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(B(91));break;default:o!==a&&pt(e,t,i,o,l,a)}xm(e,f,w);return;case"option":for(var C in n)if(f=n[C],n.hasOwnProperty(C)&&f!=null&&!l.hasOwnProperty(C))switch(C){case"selected":e.selected=!1;break;default:pt(e,t,C,null,l,f)}for(s in l)if(f=l[s],w=n[s],l.hasOwnProperty(s)&&f!==w&&(f!=null||w!=null))switch(s){case"selected":e.selected=f&&typeof f!=="function"&&typeof f!=="symbol";break;default:pt(e,t,s,f,l,w)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var D in n)f=n[D],n.hasOwnProperty(D)&&f!=null&&!l.hasOwnProperty(D)&&pt(e,t,D,null,l,f);for(g in l)if(f=l[g],w=n[g],l.hasOwnProperty(g)&&f!==w&&(f!=null||w!=null))switch(g){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(B(137,t));break;default:pt(e,t,g,f,l,w)}return;default:if(W_(t)){for(var A in n)f=n[A],n.hasOwnProperty(A)&&f!==void 0&&!l.hasOwnProperty(A)&&A_(e,t,A,void 0,l,f);for(_ in l)f=l[_],w=n[_],!l.hasOwnProperty(_)||f===w||f===void 0&&w===void 0||A_(e,t,_,f,l,w);return}}for(var h in n)f=n[h],n.hasOwnProperty(h)&&f!=null&&!l.hasOwnProperty(h)&&pt(e,t,h,null,l,f);for(b in l)f=l[b],w=n[b],!l.hasOwnProperty(b)||f===w||f==null&&w==null||pt(e,t,b,f,l,w)}function B1(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function k4(){if(typeof performance.getEntriesByType==="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var o=n[l],{transferSize:a,initiatorType:i,duration:r}=o;if(a&&r&&B1(i)){i=0,r=o.responseEnd;for(l+=1;l<n.length;l++){var s=n[l],g=s.startTime;if(g>r)break;var _=s.transferSize,b=s.initiatorType;_&&B1(b)&&(s=s.responseEnd,i+=_*(s<r?1:(r-g)/(s-g)))}if(--l,t+=8*(a+i)/(o.duration/1000),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==="number")?e:5}var L_=null,D_=null;function Uc(e){return e.nodeType===9?e:e.ownerDocument}function H1(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Mp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function N_(e,t){return e==="textarea"||e==="noscript"||typeof t.children==="string"||typeof t.children==="number"||typeof t.children==="bigint"||typeof t.dangerouslySetInnerHTML==="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Yd=null;function S4(){var e=window.event;if(e&&e.type==="popstate"){if(e===Yd)return!1;return Yd=e,!0}return Yd=null,!1}var Ep=typeof setTimeout==="function"?setTimeout:void 0,C4=typeof clearTimeout==="function"?clearTimeout:void 0,$1=typeof Promise==="function"?Promise:void 0,M4=typeof queueMicrotask==="function"?queueMicrotask:typeof $1<"u"?function(e){return $1.resolve(null).then(e).catch(E4)}:Ep;function E4(e){setTimeout(function(){throw e})}function Yo(e){return e==="head"}function U1(e,t){var n=t,l=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"||n==="/&"){if(l===0){e.removeChild(o),ki(t);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")Lr(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Lr(n);for(var a=n.firstChild;a;){var i=a.nextSibling,r=a.nodeName;a[Zr]||r==="SCRIPT"||r==="STYLE"||r==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=i}}else n==="body"&&Lr(e.ownerDocument.body);n=o}while(n);ki(t)}function Y1(e,t){var n=e;e=0;do{var l=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$")if(e===0)break;else e--;else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=l}while(n)}function z_(e){var t=e.firstChild;t&&t.nodeType===10&&(t=t.nextSibling);for(;t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":z_(n),q_(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function T4(e,t,n,l){for(;e.nodeType===1;){var o=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(!l)if(t==="input"&&e.type==="hidden"){var a=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;else if(!e[Zr])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;else if(a!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}if(e=al(e.nextSibling),e===null)break}return null}function A4(e,t,n){if(t==="")return null;for(;e.nodeType!==3;){if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n)return null;if(e=al(e.nextSibling),e===null)return null}return e}function Tp(e,t){for(;e.nodeType!==8;){if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t)return null;if(e=al(e.nextSibling),e===null)return null}return e}function O_(e){return e.data==="$?"||e.data==="$~"}function R_(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function L4(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function al(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var B_=null;function j1(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return al(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function I1(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Ap(e,t,n){switch(t=Uc(n),e){case"html":if(e=t.documentElement,!e)throw Error(B(452));return e;case"head":if(e=t.head,!e)throw Error(B(453));return e;case"body":if(e=t.body,!e)throw Error(B(454));return e;default:throw Error(B(451))}}function Lr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);q_(e)}var il=new Map,X1=new Set;function Yc(e){return typeof e.getRootNode==="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ao=it.d;it.d={f:D4,r:N4,D:z4,C:O4,L:R4,m:B4,X:$4,S:H4,M:U4};function D4(){var e=ao.f(),t=lu();return e||t}function N4(e){var t=Ci(e);t!==null&&t.tag===5&&t.type==="form"?wg(t):ao.r(e)}var Ai=typeof document>"u"?null:document;function Lp(e,t,n){var l=Ai;if(l&&typeof t==="string"&&t){var o=tl(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof n==="string"&&(o+='[crossorigin="'+n+'"]'),X1.has(o)||(X1.add(o),e={rel:e,crossOrigin:n,href:t},l.querySelector(o)===null&&(t=l.createElement("link"),_n(t,"link",e),on(t),l.head.appendChild(t)))}}function z4(e){ao.D(e),Lp("dns-prefetch",e,null)}function O4(e,t){ao.C(e,t),Lp("preconnect",e,t)}function R4(e,t,n){ao.L(e,t,n);var l=Ai;if(l&&e&&t){var o='link[rel="preload"][as="'+tl(t)+'"]';t==="image"?n&&n.imageSrcSet?(o+='[imagesrcset="'+tl(n.imageSrcSet)+'"]',typeof n.imageSizes==="string"&&(o+='[imagesizes="'+tl(n.imageSizes)+'"]')):o+='[href="'+tl(e)+'"]':o+='[href="'+tl(e)+'"]';var a=o;switch(t){case"style":a=wi(e);break;case"script":a=Li(e)}il.has(a)||(e=Tt({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),il.set(a,e),l.querySelector(o)!==null||t==="style"&&l.querySelector(ts(a))||t==="script"&&l.querySelector(ns(a))||(t=l.createElement("link"),_n(t,"link",e),on(t),l.head.appendChild(t)))}}function B4(e,t){ao.m(e,t);var n=Ai;if(n&&e){var l=t&&typeof t.as==="string"?t.as:"script",o='link[rel="modulepreload"][as="'+tl(l)+'"][href="'+tl(e)+'"]',a=o;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Li(e)}if(!il.has(a)&&(e=Tt({rel:"modulepreload",href:e},t),il.set(a,e),n.querySelector(o)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ns(a)))return}l=n.createElement("link"),_n(l,"link",e),on(l),n.head.appendChild(l)}}}function H4(e,t,n){ao.S(e,t,n);var l=Ai;if(l&&e){var o=ii(l).hoistableStyles,a=wi(e);t=t||"default";var i=o.get(a);if(!i){var r={loading:0,preload:null};if(i=l.querySelector(ts(a)))r.loading=5;else{e=Tt({rel:"stylesheet",href:e,"data-precedence":t},n),(n=il.get(a))&&Lf(e,n);var s=i=l.createElement("link");on(s),_n(s,"link",e),s._p=new Promise(function(g,_){s.onload=g,s.onerror=_}),s.addEventListener("load",function(){r.loading|=1}),s.addEventListener("error",function(){r.loading|=2}),r.loading|=4,_c(i,t,l)}i={type:"stylesheet",instance:i,count:1,state:r},o.set(a,i)}}}function $4(e,t){ao.X(e,t);var n=Ai;if(n&&e){var l=ii(n).hoistableScripts,o=Li(e),a=l.get(o);a||(a=n.querySelector(ns(o)),a||(e=Tt({src:e,async:!0},t),(t=il.get(o))&&Df(e,t),a=n.createElement("script"),on(a),_n(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},l.set(o,a))}}function U4(e,t){ao.M(e,t);var n=Ai;if(n&&e){var l=ii(n).hoistableScripts,o=Li(e),a=l.get(o);a||(a=n.querySelector(ns(o)),a||(e=Tt({src:e,async:!0,type:"module"},t),(t=il.get(o))&&Df(e,t),a=n.createElement("script"),on(a),_n(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},l.set(o,a))}}function q1(e,t,n,l){var o=(o=Mo.current)?Yc(o):null;if(!o)throw Error(B(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence==="string"&&typeof n.href==="string"?(t=wi(n.href),n=ii(o).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href==="string"&&typeof n.precedence==="string"){e=wi(n.href);var a=ii(o).hoistableStyles,i=a.get(e);if(i||(o=o.ownerDocument||o,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,i),(a=o.querySelector(ts(e)))&&!a._p&&(i.instance=a,i.state.loading=5),il.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},il.set(e,n),a||Y4(o,e,n,i.state))),t&&l===null)throw Error(B(528,""));return i}if(t&&l!==null)throw Error(B(529,""));return null;case"script":return t=n.async,n=n.src,typeof n==="string"&&t&&typeof t!=="function"&&typeof t!=="symbol"?(t=Li(n),n=ii(o).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(B(444,e))}}function wi(e){return'href="'+tl(e)+'"'}function ts(e){return'link[rel="stylesheet"]['+e+"]"}function Dp(e){return Tt({},e,{"data-precedence":e.precedence,precedence:null})}function Y4(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),_n(t,"link",n),on(t),e.head.appendChild(t))}function Li(e){return'[src="'+tl(e)+'"]'}function ns(e){return"script[async]"+e}function W1(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+tl(n.href)+'"]');if(l)return t.instance=l,on(l),l;var o=Tt({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),on(l),_n(l,"style",o),_c(l,n.precedence,e),t.instance=l;case"stylesheet":o=wi(n.href);var a=e.querySelector(ts(o));if(a)return t.state.loading|=4,t.instance=a,on(a),a;l=Dp(n),(o=il.get(o))&&Lf(l,o),a=(e.ownerDocument||e).createElement("link"),on(a);var i=a;return i._p=new Promise(function(r,s){i.onload=r,i.onerror=s}),_n(a,"link",l),t.state.loading|=4,_c(a,n.precedence,e),t.instance=a;case"script":if(a=Li(n.src),o=e.querySelector(ns(a)))return t.instance=o,on(o),o;if(l=n,o=il.get(a))l=Tt({},n),Df(l,o);return e=e.ownerDocument||e,o=e.createElement("script"),on(o),_n(o,"link",l),e.head.appendChild(o),t.instance=o;case"void":return null;default:throw Error(B(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,_c(l,n.precedence,e));return t.instance}function _c(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=l.length?l[l.length-1]:null,a=o,i=0;i<l.length;i++){var r=l[i];if(r.dataset.precedence===t)a=r;else if(a!==o)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Lf(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Df(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var fc=null;function Q1(e,t,n){if(fc===null){var l=new Map,o=fc=new Map;o.set(n,l)}else o=fc,l=o.get(n),l||(l=new Map,o.set(n,l));if(l.has(e))return l;l.set(e,null),n=n.getElementsByTagName(e);for(o=0;o<n.length;o++){var a=n[o];if(!(a[Zr]||a[cn]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var i=a.getAttribute(t)||"";i=e+i;var r=l.get(i);r?r.push(a):l.set(i,[a])}}return l}function G1(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function j4(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!=="string"||typeof t.href!=="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!=="string"||typeof t.href!=="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence==="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!=="function"&&typeof t.async!=="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==="string")return!0}return!1}function Np(e){return e.type==="stylesheet"&&(e.state.loading&3)===0?!1:!0}function I4(e,t,n,l){if(n.type==="stylesheet"&&(typeof l.media!=="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var o=wi(l.href),a=t.querySelector(ts(o));if(a){t=a._p,t!==null&&typeof t==="object"&&typeof t.then==="function"&&(e.count++,e=jc.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,on(a);return}a=t.ownerDocument||t,l=Dp(l),(o=il.get(o))&&Lf(l,o),a=a.createElement("link"),on(a);var i=a;i._p=new Promise(function(r,s){i.onload=r,i.onerror=s}),_n(a,"link",l),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=jc.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var jd=0;function X4(e,t){return e.stylesheets&&e.count===0&&hc(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var l=setTimeout(function(){if(e.stylesheets&&hc(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},60000+t);0<e.imgBytes&&jd===0&&(jd=62500*k4());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&hc(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>jd?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(o)}}:null}function jc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)hc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ic=null;function hc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ic=new Map,t.forEach(q4,e),Ic=null,jc.call(e))}function q4(e,t){if(!(t.state.loading&4)){var n=Ic.get(e);if(n)var l=n.get(null);else{n=new Map,Ic.set(e,n);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<o.length;a++){var i=o[a];if(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")n.set(i.dataset.precedence,i),l=i}l&&n.set(null,l)}o=t.instance,i=o.getAttribute("data-precedence"),a=n.get(i)||l,a===l&&n.set(null,o),n.set(i,o),this.count++,l=jc.bind(this),o.addEventListener("load",l),o.addEventListener("error",l),a?a.parentNode.insertBefore(o,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var Ir={$$typeof:Vl,Provider:null,Consumer:null,_currentValue:ra,_currentValue2:ra,_threadCount:0};function W4(e,t,n,l,o,a,i,r,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=hd(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hd(0),this.hiddenUpdates=hd(null),this.identifierPrefix=l,this.onUncaughtError=o,this.onCaughtError=a,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function zp(e,t,n,l,o,a,i,r,s,g,_,b){return e=new W4(e,t,n,i,s,g,_,b,r),t=1,a===!0&&(t|=24),a=Hn(3,null,null,t),e.current=a,a.stateNode=e,t=nf(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:l,isDehydrated:n,cache:t},af(a),e}function Op(e){if(!e)return ni;return e=ni,e}function Rp(e,t,n,l,o,a){o=Op(o),l.context===null?l.context=o:l.pendingContext=o,l=To(t),l.payload={element:n},a=a===void 0?null:a,a!==null&&(l.callback=a),n=Ao(e,l,t),n!==null&&(An(n,e,t),wr(n,e,t))}function V1(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Nf(e,t){V1(e,t),(e=e.alternate)&&V1(e,t)}function Bp(e){if(e.tag===13||e.tag===31){var t=xa(e,67108864);t!==null&&An(t,e,67108864),Nf(e,67108864)}}function Z1(e){if(e.tag===13||e.tag===31){var t=In();t=I_(t);var n=xa(e,t);n!==null&&An(n,e,t),Nf(e,t)}}var Xc=!0;function Q4(e,t,n,l){var o=Se.T;Se.T=null;var a=it.p;try{it.p=2,zf(e,t,n,l)}finally{it.p=a,Se.T=o}}function G4(e,t,n,l){var o=Se.T;Se.T=null;var a=it.p;try{it.p=8,zf(e,t,n,l)}finally{it.p=a,Se.T=o}}function zf(e,t,n,l){if(Xc){var o=H_(l);if(o===null)Ud(e,t,l,qc,n),K1(e,l);else if(Z4(o,e,t,n,l))l.stopPropagation();else if(K1(e,l),t&4&&-1<V4.indexOf(e)){for(;o!==null;){var a=Ci(o);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var i=la(a.pendingLanes);if(i!==0){var r=a;r.pendingLanes|=2;for(r.entangledLanes|=2;i;){var s=1<<31-jn(i);r.entanglements[1]|=s,i&=~s}Rl(a),(at&6)===0&&(zc=Un()+500,es(0,!1))}}break;case 31:case 13:r=xa(a,2),r!==null&&An(r,a,2),lu(),Nf(a,2)}if(a=H_(l),a===null&&Ud(e,t,l,qc,n),a===o)break;o=a}o!==null&&l.stopPropagation()}else Ud(e,t,l,null,n)}}function H_(e){return e=Q_(e),Of(e)}var qc=null;function Of(e){if(qc=null,e=Ka(e),e!==null){var t=Wr(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=nm(t),e!==null)return e;e=null}else if(n===31){if(e=lm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return qc=e,null}function Hp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Rx()){case rm:return 2;case sm:return 8;case bc:case Bx:return 32;case cm:return 268435456;default:return 32}default:return 32}}var $_=!1,No=null,zo=null,Oo=null,Xr=new Map,qr=new Map,xo=[],V4="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function K1(e,t){switch(e){case"focusin":case"focusout":No=null;break;case"dragenter":case"dragleave":zo=null;break;case"mouseover":case"mouseout":Oo=null;break;case"pointerover":case"pointerout":Xr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qr.delete(t.pointerId)}}function sr(e,t,n,l,o,a){if(e===null||e.nativeEvent!==a)return e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:a,targetContainers:[o]},t!==null&&(t=Ci(t),t!==null&&Bp(t)),e;return e.eventSystemFlags|=l,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e}function Z4(e,t,n,l,o){switch(t){case"focusin":return No=sr(No,e,t,n,l,o),!0;case"dragenter":return zo=sr(zo,e,t,n,l,o),!0;case"mouseover":return Oo=sr(Oo,e,t,n,l,o),!0;case"pointerover":var a=o.pointerId;return Xr.set(a,sr(Xr.get(a)||null,e,t,n,l,o)),!0;case"gotpointercapture":return a=o.pointerId,qr.set(a,sr(qr.get(a)||null,e,t,n,l,o)),!0}return!1}function $p(e){var t=Ka(e.target);if(t!==null){var n=Wr(t);if(n!==null){if(t=n.tag,t===13){if(t=nm(n),t!==null){e.blockedOn=t,Rh(e.priority,function(){Z1(n)});return}}else if(t===31){if(t=lm(n),t!==null){e.blockedOn=t,Rh(e.priority,function(){Z1(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=H_(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);e_=l,n.target.dispatchEvent(l),e_=null}else return t=Ci(n),t!==null&&Bp(t),e.blockedOn=n,!1;t.shift()}return!0}function F1(e,t,n){mc(e)&&n.delete(t)}function K4(){$_=!1,No!==null&&mc(No)&&(No=null),zo!==null&&mc(zo)&&(zo=null),Oo!==null&&mc(Oo)&&(Oo=null),Xr.forEach(F1),qr.forEach(F1)}function Js(e,t){e.blockedOn===t&&(e.blockedOn=null,$_||($_=!0,tn.unstable_scheduleCallback(tn.unstable_NormalPriority,K4)))}var Ps=null;function J1(e){Ps!==e&&(Ps=e,tn.unstable_scheduleCallback(tn.unstable_NormalPriority,function(){Ps===e&&(Ps=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],o=e[t+2];if(typeof l!=="function")if(Of(l||n)===null)continue;else break;var a=Ci(n);a!==null&&(e.splice(t,3),t-=3,g_(a,{pending:!0,data:o,method:n.method,action:l},l,o))}}))}function ki(e){function t(s){return Js(s,e)}No!==null&&Js(No,e),zo!==null&&Js(zo,e),Oo!==null&&Js(Oo,e),Xr.forEach(t),qr.forEach(t);for(var n=0;n<xo.length;n++){var l=xo[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<xo.length&&(n=xo[0],n.blockedOn===null);)$p(n),n.blockedOn===null&&xo.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var o=n[l],a=n[l+1],i=o[Ln]||null;if(typeof a==="function")i||J1(n);else if(i){var r=null;if(a&&a.hasAttribute("formAction")){if(o=a,i=a[Ln]||null)r=i.formAction;else if(Of(o)!==null)continue}else r=i.action;typeof r==="function"?n[l+1]=r:(n.splice(l,3),l-=3),J1(n)}}}function Up(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(i){return o=i})},focusReset:"manual",scroll:"manual"})}function t(){o!==null&&(o(),o=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation==="object"){var l=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),o!==null&&(o(),o=null)}}}function Rf(e){this._internalRoot=e}iu.prototype.render=Rf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(B(409));var n=t.current,l=In();Rp(n,l,e,t,null,null)};iu.prototype.unmount=Rf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Rp(e.current,2,null,e,null,null),lu(),t[Si]=null}};function iu(e){this._internalRoot=e}iu.prototype.unstable_scheduleHydration=function(e){if(e){var t=hm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xo.length&&t!==0&&t<xo[n].priority;n++);xo.splice(n,0,e),n===0&&$p(e)}};var P1=em.version;if(P1!=="19.2.8")throw Error(B(527,P1,"19.2.8"));it.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0){if(typeof e.render==="function")throw Error(B(188));throw e=Object.keys(e).join(","),Error(B(268,e))}return e=Tx(t),e=e!==null?om(e):null,e=e===null?null:e.stateNode,e};var F4={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:Se,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){if(Ga=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Ga.isDisabled&&Ga.supportsFiber)try{Qr=Ga.inject(F4),Yn=Ga}catch(e){}}var Ga;ru.createRoot=function(e,t){if(!tm(e))throw Error(B(299));var n=!1,l="",o=Lg,a=Dg,i=Ng;return t!==null&&t!==void 0&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=zp(e,1,!1,null,null,n,l,null,o,a,i,Up),e[Si]=t.current,Af(e),new Rf(t)};ru.hydrateRoot=function(e,t,n){if(!tm(e))throw Error(B(299));var l=!1,o="",a=Lg,i=Dg,r=Ng,s=null;return n!==null&&n!==void 0&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(i=n.onCaughtError),n.onRecoverableError!==void 0&&(r=n.onRecoverableError),n.formState!==void 0&&(s=n.formState)),t=zp(e,1,!0,t,n!=null?n:null,l,o,s,a,i,r,Up),t.context=Op(null),n=t.current,l=In(),l=I_(l),o=To(l),o.callback=null,Ao(n,o,l),n=l,t.current.lanes=n,Vr(t,n),Rl(t),e[Si]=t.current,Af(e),new iu(t)};ru.version="19.2.8"});var Xp=Ml(function(J4,Ip){function jp(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=="function")return;try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jp)}catch(e){console.error(e)}}jp(),Ip.exports=Yp()});var T=kt(hl(),1),nh=kt(ys(),1),Ot=kt(hl(),1),V=kt(hn(),1),At=kt(hn(),1),Tl=kt(hl(),1),ah=kt(ys(),1),Po=kt(hn(),1),qu=kt(hn(),1),Pe=kt(hl(),1),u=kt(hn(),1);var xt=kt(hn(),1),Rt=kt(hl(),1),c=kt(hn(),1),ke=kt(hl(),1),Ze=kt(hn(),1);var bh=kt(hl(),1),On=kt(hn(),1),Pi=kt(hn(),1),xh=kt(hl(),1),$a=kt(hn(),1),Ua=kt(hn(),1),K=kt(hn(),1);var I=kt(hn(),1),s5=`.styles-module__popup___IhzrD svg[fill=none] {
  fill: none !important;
}
.styles-module__popup___IhzrD svg[fill=none] :not([fill]) {
  fill: none !important;
}

@keyframes styles-module__popupEnter___AuQDN {
  from {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
}
@keyframes styles-module__popupExit___JJKQX {
  from {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
}
@keyframes styles-module__shake___jdbWe {
  0%, 100% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(0);
  }
  20% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-3px);
  }
  40% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(3px);
  }
  60% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-2px);
  }
  80% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(2px);
  }
}
.styles-module__popup___IhzrD {
  position: fixed;
  transform: translateX(-50%);
  width: 280px;
  padding: 0.75rem 1rem 14px;
  background: #1a1a1a;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  z-index: 100001;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  will-change: transform, opacity;
  opacity: 0;
}
.styles-module__popup___IhzrD.styles-module__enter___L7U7N {
  animation: styles-module__popupEnter___AuQDN 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w {
  opacity: 1;
  transform: translateX(-50%) scale(1) translateY(0);
}
.styles-module__popup___IhzrD.styles-module__exit___5eGjE {
  animation: styles-module__popupExit___JJKQX 0.15s ease-in forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w.styles-module__shake___jdbWe {
  animation: styles-module__shake___jdbWe 0.25s ease-out;
}

.styles-module__header___wWsSi {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5625rem;
}

.styles-module__element___fTV2z {
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}

.styles-module__headerToggle___WpW0b {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  flex: 1;
  min-width: 0;
  text-align: left;
}
.styles-module__headerToggle___WpW0b .styles-module__element___fTV2z {
  flex: 1;
}

.styles-module__chevron___ZZJlR {
  color: rgba(255, 255, 255, 0.5);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  flex-shrink: 0;
}
.styles-module__chevron___ZZJlR.styles-module__expanded___2Hxgv {
  transform: rotate(90deg);
}

.styles-module__stylesWrapper___pnHgy {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.styles-module__stylesWrapper___pnHgy.styles-module__expanded___2Hxgv {
  grid-template-rows: 1fr;
}

.styles-module__stylesInner___YYZe2 {
  overflow: hidden;
}

.styles-module__stylesBlock___VfQKn {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.375rem;
  padding: 0.5rem 0.625rem;
  margin-bottom: 0.5rem;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.6875rem;
  line-height: 1.5;
}

.styles-module__styleLine___1YQiD {
  color: rgba(255, 255, 255, 0.85);
  word-break: break-word;
}

.styles-module__styleProperty___84L1i {
  color: #c792ea;
}

.styles-module__styleValue___q51-h {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__timestamp___Dtpsv {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.35);
  font-variant-numeric: tabular-nums;
  margin-left: 0.5rem;
  flex-shrink: 0;
}

.styles-module__quote___mcMmQ {
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
  padding: 0.4rem 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.25rem;
  line-height: 1.45;
}

.styles-module__textarea___jrSae {
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem 0.625rem;
  font-size: 0.8125rem;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
}
.styles-module__textarea___jrSae:focus {
  border-color: var(--agentation-color-blue);
}
.styles-module__textarea___jrSae.styles-module__green___99l3h:focus {
  border-color: var(--agentation-color-green);
}
.styles-module__textarea___jrSae::placeholder {
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__textarea___jrSae::-webkit-scrollbar {
  width: 6px;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-track {
  background: transparent;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.styles-module__actions___D6x3f {
  display: flex;
  justify-content: flex-end;
  gap: 0.375rem;
  margin-top: 0.5rem;
}

.styles-module__cancel___hRjnL,
.styles-module__submit___K-mIR {
  padding: 0.4rem 0.875rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
}

.styles-module__cancel___hRjnL {
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__cancel___hRjnL:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}

.styles-module__submit___K-mIR {
  color: white;
}
.styles-module__submit___K-mIR:hover:not(:disabled) {
  filter: brightness(0.9);
}
.styles-module__submit___K-mIR:disabled {
  cursor: not-allowed;
}

.styles-module__deleteWrapper___oSjdo {
  margin-right: auto;
}

.styles-module__deleteButton___4VuAE {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease;
}
.styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__deleteButton___4VuAE:active {
  transform: scale(0.92);
}

.styles-module__light___6AaSQ.styles-module__popup___IhzrD {
  background: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.styles-module__light___6AaSQ .styles-module__element___fTV2z {
  color: rgba(0, 0, 0, 0.6);
}
.styles-module__light___6AaSQ .styles-module__timestamp___Dtpsv {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__chevron___ZZJlR {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__stylesBlock___VfQKn {
  background: rgba(0, 0, 0, 0.03);
}
.styles-module__light___6AaSQ .styles-module__styleLine___1YQiD {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__styleProperty___84L1i {
  color: #7c3aed;
}
.styles-module__light___6AaSQ .styles-module__styleValue___q51-h {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__quote___mcMmQ {
  color: rgba(0, 0, 0, 0.55);
  background: rgba(0, 0, 0, 0.04);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae {
  background: rgba(0, 0, 0, 0.03);
  color: #1a1a1a;
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::placeholder {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}`,c5={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",popupEnter:"styles-module__popupEnter___AuQDN",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",popupExit:"styles-module__popupExit___JJKQX",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",green:"styles-module__green___99l3h",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");if(!e)e=document.createElement("style"),e.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(e);e.textContent=s5}var bt=c5,u5=`.icon-transitions-module__iconState___uqK9J {
  transition: opacity 0.2s ease, transform 0.2s ease;
  transform-origin: center;
}

.icon-transitions-module__iconStateFast___HxlMm {
  transition: opacity 0.15s ease, transform 0.15s ease;
  transform-origin: center;
}

.icon-transitions-module__iconFade___nPwXg {
  transition: opacity 0.2s ease;
}

.icon-transitions-module__iconFadeFast___Ofb2t {
  transition: opacity 0.15s ease;
}

.icon-transitions-module__visible___PlHsU {
  opacity: 1 !important;
}

.icon-transitions-module__visibleScaled___8Qog- {
  opacity: 1 !important;
  transform: scale(1);
}

.icon-transitions-module__hidden___ETykt {
  opacity: 0 !important;
}

.icon-transitions-module__hiddenScaled___JXn-m {
  opacity: 0 !important;
  transform: scale(0.8);
}

.icon-transitions-module__sending___uaLN- {
  opacity: 0.5 !important;
  transform: scale(0.8);
}`,d5={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-components-icon-transitions");if(!e)e=document.createElement("style"),e.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(e);e.textContent=u5}var gt=d5;var _5=({size:e=16})=>V.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",children:V.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})});var f5=({size:e=24,style:t={}})=>V.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:t,children:[V.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[V.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),V.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),V.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),V.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),V.jsx("defs",{children:V.jsx("clipPath",{id:"clip0_list_sparkle",children:V.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),h5=({size:e=20,...t})=>V.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:[V.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),V.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),V.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]});var m5=({size:e=24,copied:t=!1,tint:n})=>V.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:n?{color:n,transition:"color 0.3s ease"}:void 0,children:[V.jsxs("g",{className:`${gt.iconState} ${t?gt.hiddenScaled:gt.visibleScaled}`,children:[V.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),V.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),V.jsxs("g",{className:`${gt.iconState} ${t?gt.visibleScaled:gt.hiddenScaled}`,children:[V.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),V.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),g5=({size:e=24,state:t="idle"})=>{let n=t==="idle",l=t==="sent",o=t==="failed",a=t==="sending";return V.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[V.jsx("g",{className:`${gt.iconStateFast} ${n?gt.visibleScaled:a?gt.sending:gt.hiddenScaled}`,children:V.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),V.jsxs("g",{className:`${gt.iconStateFast} ${l?gt.visibleScaled:gt.hiddenScaled}`,children:[V.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),V.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),V.jsxs("g",{className:`${gt.iconStateFast} ${o?gt.visibleScaled:gt.hiddenScaled}`,children:[V.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),V.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),V.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})};var p5=({size:e=24,isOpen:t=!0})=>V.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[V.jsxs("g",{className:`${gt.iconFade} ${t?gt.visible:gt.hidden}`,children:[V.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),V.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),V.jsxs("g",{className:`${gt.iconFade} ${t?gt.hidden:gt.visible}`,children:[V.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),V.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),y5=({size:e=24,isPaused:t=!1})=>V.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[V.jsxs("g",{className:`${gt.iconFadeFast} ${t?gt.hidden:gt.visible}`,children:[V.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),V.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),V.jsx("path",{className:`${gt.iconFadeFast} ${t?gt.visible:gt.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]});var b5=({size:e=16})=>V.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[V.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),V.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]});var x5=({size:e=16})=>V.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:V.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})});var lh=({size:e=16})=>V.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[V.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[V.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),V.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),V.jsx("defs",{children:V.jsx("clipPath",{id:"clip0_2_53",children:V.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),v5=({size:e=24})=>V.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:V.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),w5=({size:e=16})=>V.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",children:[V.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),V.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),V.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),V.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),V.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),V.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),V.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),V.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),V.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),k5=({size:e=16})=>V.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",children:V.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),S5=({size:e=16})=>V.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:V.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),C5=({size:e=24})=>V.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:V.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),M5=({size:e=16})=>V.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:V.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})});var E5=({size:e=24})=>V.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[V.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),V.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),V.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),oh=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],Nu=oh.flatMap((e)=>[`:not([${e}])`,`:not([${e}] *)`]).join(""),Xu="feedback-freeze-styles",zu="__agentation_freeze";function T5(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:(t)=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};let e=window;if(!e[zu])e[zu]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};return e[zu]}var Ue=T5();if(typeof window<"u"&&!Ue.installed)Ue.origSetTimeout=window.setTimeout.bind(window),Ue.origSetInterval=window.setInterval.bind(window),Ue.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(e,t,...n)=>{if(typeof e==="string")return Ue.origSetTimeout(e,t);return Ue.origSetTimeout((...l)=>{if(Ue.frozen)Ue.frozenTimeoutQueue.push(()=>e(...l));else e(...l)},t,...n)},window.setInterval=(e,t,...n)=>{if(typeof e==="string")return Ue.origSetInterval(e,t);return Ue.origSetInterval((...l)=>{if(!Ue.frozen)e(...l)},t,...n)},window.requestAnimationFrame=(e)=>Ue.origRAF((t)=>{if(Ue.frozen)Ue.frozenRAFQueue.push(e);else e(t)}),Ue.installed=!0;var{origSetTimeout:he,origSetInterval:A5,origRAF:Ba}=Ue;function L5(e){if(!e)return!1;return oh.some((t)=>!!e.closest?.(`[${t}]`))}function D5(){if(typeof document>"u")return;if(Ue.frozen)return;Ue.frozen=!0,Ue.frozenTimeoutQueue=[],Ue.frozenRAFQueue=[];let e=document.getElementById(Xu);if(!e)e=document.createElement("style"),e.id=Xu;e.textContent=`
    *${Nu},
    *${Nu}::before,
    *${Nu}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(e),Ue.pausedAnimations=[];try{document.getAnimations().forEach((t)=>{if(t.playState!=="running")return;let n=t.effect?.target;if(!L5(n))t.pause(),Ue.pausedAnimations.push(t)})}catch{}document.querySelectorAll("video").forEach((t)=>{if(!t.paused)t.dataset.wasPaused="false",t.pause()})}function D0(){if(typeof document>"u")return;if(!Ue.frozen)return;Ue.frozen=!1;let e=Ue.frozenTimeoutQueue;Ue.frozenTimeoutQueue=[];for(let n of e)Ue.origSetTimeout(()=>{if(Ue.frozen){Ue.frozenTimeoutQueue.push(n);return}try{n()}catch(l){console.warn("[agentation] Error replaying queued timeout:",l)}},0);let t=Ue.frozenRAFQueue;Ue.frozenRAFQueue=[];for(let n of t)Ue.origRAF((l)=>{if(Ue.frozen){Ue.frozenRAFQueue.push(n);return}n(l)});for(let n of Ue.pausedAnimations)try{n.play()}catch(l){console.warn("[agentation] Error resuming animation:",l)}Ue.pausedAnimations=[],document.getElementById(Xu)?.remove(),document.querySelectorAll("video").forEach((n)=>{if(n.dataset.wasPaused==="false")n.play().catch(()=>{}),delete n.dataset.wasPaused})}function Ou(e){if(!e)return;let t=(n)=>n.stopImmediatePropagation();document.addEventListener("focusin",t,!0),document.addEventListener("focusout",t,!0);try{e.focus()}finally{document.removeEventListener("focusin",t,!0),document.removeEventListener("focusout",t,!0)}}var Ns=Ot.forwardRef(function({element:t,timestamp:n,selectedText:l,placeholder:o="What should change?",initialValue:a="",submitLabel:i="Add",onSubmit:r,onCancel:s,onDelete:g,style:_,accentColor:b="#3c82f7",isExiting:f=!1,lightMode:w=!1,computedStyles:C},D){let[A,h]=Ot.useState(a),[y,k]=Ot.useState(!1),[E,Q]=Ot.useState("initial"),[ae,z]=Ot.useState(!1),[F,te]=Ot.useState(!1),J=Ot.useRef(null),me=Ot.useRef(null),tt=Ot.useRef(null),ht=Ot.useRef(null);Ot.useEffect(()=>{if(f&&E!=="exit")Q("exit")},[f,E]),Ot.useEffect(()=>{he(()=>{Q("enter")},0);let pe=he(()=>{Q("entered")},200),Ke=he(()=>{let Bt=J.current;if(Bt)Ou(Bt),Bt.selectionStart=Bt.selectionEnd=Bt.value.length,Bt.scrollTop=Bt.scrollHeight},50);return()=>{if(clearTimeout(pe),clearTimeout(Ke),tt.current)clearTimeout(tt.current);if(ht.current)clearTimeout(ht.current)}},[]);let Re=Ot.useCallback(()=>{if(ht.current)clearTimeout(ht.current);k(!0),ht.current=he(()=>{k(!1),Ou(J.current)},250)},[]);Ot.useImperativeHandle(D,()=>({shake:Re}),[Re]);let qe=Ot.useCallback(()=>{Q("exit"),tt.current=he(()=>{s()},150)},[s]),Te=Ot.useCallback(()=>{if(!A.trim())return;r(A.trim())},[A,r]),et=Ot.useCallback((pe)=>{if(pe.stopPropagation(),pe.nativeEvent.isComposing)return;if(pe.key==="Enter"&&!pe.shiftKey)pe.preventDefault(),Te();if(pe.key==="Escape")qe()},[Te,qe]),G=[bt.popup,w?bt.light:"",E==="enter"?bt.enter:"",E==="entered"?bt.entered:"",E==="exit"?bt.exit:"",y?bt.shake:""].filter(Boolean).join(" ");return At.jsxs("div",{ref:me,className:G,"data-annotation-popup":!0,style:_,onClick:(pe)=>pe.stopPropagation(),children:[At.jsxs("div",{className:bt.header,children:[C&&Object.keys(C).length>0?At.jsxs("button",{className:bt.headerToggle,onClick:()=>{let pe=F;if(te(!F),pe)he(()=>Ou(J.current),0)},type:"button",children:[At.jsx("svg",{className:`${bt.chevron} ${F?bt.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:At.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),At.jsx("span",{className:bt.element,children:t})]}):At.jsx("span",{className:bt.element,children:t}),n&&At.jsx("span",{className:bt.timestamp,children:n})]}),C&&Object.keys(C).length>0&&At.jsx("div",{className:`${bt.stylesWrapper} ${F?bt.expanded:""}`,children:At.jsx("div",{className:bt.stylesInner,children:At.jsx("div",{className:bt.stylesBlock,children:Object.entries(C).map(([pe,Ke])=>At.jsxs("div",{className:bt.styleLine,children:[At.jsx("span",{className:bt.styleProperty,children:pe.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",At.jsx("span",{className:bt.styleValue,children:Ke}),";"]},pe))})})}),l&&At.jsxs("div",{className:bt.quote,children:["“",l.slice(0,80),l.length>80?"...":"","”"]}),At.jsx("textarea",{ref:J,className:bt.textarea,style:{borderColor:ae?b:void 0},placeholder:o,value:A,onChange:(pe)=>h(pe.target.value),onFocus:()=>z(!0),onBlur:()=>z(!1),rows:2,onKeyDown:et}),At.jsxs("div",{className:bt.actions,children:[g&&At.jsx("div",{className:bt.deleteWrapper,children:At.jsx("button",{className:bt.deleteButton,onClick:g,type:"button",children:At.jsx(C5,{size:22})})}),At.jsx("button",{className:bt.cancel,onClick:qe,children:"Cancel"}),At.jsx("button",{className:bt.submit,style:{backgroundColor:b,opacity:A.trim()?1:0.4},onClick:Te,disabled:!A.trim(),children:i})]})]})}),N5=({content:e,children:t,...n})=>{let[l,o]=Tl.useState(!1),[a,i]=Tl.useState(!1),[r,s]=Tl.useState({top:0,right:0}),g=Tl.useRef(null),_=Tl.useRef(null),b=Tl.useRef(null),f=()=>{if(g.current){let D=g.current.getBoundingClientRect();s({top:D.top+D.height/2,right:window.innerWidth-D.left+8})}},w=()=>{if(i(!0),b.current)clearTimeout(b.current),b.current=null;f(),_.current=he(()=>{o(!0)},500)},C=()=>{if(_.current)clearTimeout(_.current),_.current=null;o(!1),b.current=he(()=>{i(!1)},150)};return Tl.useEffect(()=>()=>{if(_.current)clearTimeout(_.current);if(b.current)clearTimeout(b.current)},[]),Po.jsxs(Po.Fragment,{children:[Po.jsx("span",{ref:g,onMouseEnter:w,onMouseLeave:C,...n,children:t}),a&&ah.createPortal(Po.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:r.top,right:r.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:l?1:0,transition:"opacity 0.15s ease"},children:e}),document.body)]})},z5=`.styles-module__tooltip___mcXL2 {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: help;
}

.styles-module__tooltipIcon___Nq2nD {
  transform: translateY(0.5px);
  color: #fff;
  opacity: 0.2;
  transition: opacity 0.15s ease;
  will-change: transform;
}
.styles-module__tooltip___mcXL2:hover .styles-module__tooltipIcon___Nq2nD {
  opacity: 0.5;
}
[data-agentation-theme=light] .styles-module__tooltipIcon___Nq2nD {
  color: #000;
}`,O5={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-help-tooltip-styles");if(!e)e=document.createElement("style"),e.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(e);e.textContent=z5}var N0=O5,Jo=({content:e})=>qu.jsx(N5,{className:N0.tooltip,content:e,children:qu.jsx(h5,{className:N0.tooltipIcon})}),ee={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},ih=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...ee.navigation},{type:"header",label:"Header",...ee.header},{type:"hero",label:"Hero",...ee.hero},{type:"section",label:"Section",...ee.section},{type:"sidebar",label:"Sidebar",...ee.sidebar},{type:"footer",label:"Footer",...ee.footer},{type:"modal",label:"Modal",...ee.modal},{type:"banner",label:"Banner",...ee.banner},{type:"drawer",label:"Drawer",...ee.drawer},{type:"popover",label:"Popover",...ee.popover},{type:"divider",label:"Divider",...ee.divider}]},{section:"Content",items:[{type:"card",label:"Card",...ee.card},{type:"text",label:"Text",...ee.text},{type:"image",label:"Image",...ee.image},{type:"video",label:"Video",...ee.video},{type:"table",label:"Table",...ee.table},{type:"grid",label:"Grid",...ee.grid},{type:"list",label:"List",...ee.list},{type:"chart",label:"Chart",...ee.chart},{type:"codeBlock",label:"Code Block",...ee.codeBlock},{type:"map",label:"Map",...ee.map},{type:"timeline",label:"Timeline",...ee.timeline},{type:"calendar",label:"Calendar",...ee.calendar},{type:"accordion",label:"Accordion",...ee.accordion},{type:"carousel",label:"Carousel",...ee.carousel},{type:"logo",label:"Logo",...ee.logo},{type:"faq",label:"FAQ",...ee.faq},{type:"gallery",label:"Gallery",...ee.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...ee.button},{type:"input",label:"Input",...ee.input},{type:"search",label:"Search",...ee.search},{type:"form",label:"Form",...ee.form},{type:"tabs",label:"Tabs",...ee.tabs},{type:"dropdown",label:"Dropdown",...ee.dropdown},{type:"toggle",label:"Toggle",...ee.toggle},{type:"stepper",label:"Stepper",...ee.stepper},{type:"rating",label:"Rating",...ee.rating},{type:"fileUpload",label:"File Upload",...ee.fileUpload},{type:"checkbox",label:"Checkbox",...ee.checkbox},{type:"radio",label:"Radio",...ee.radio},{type:"slider",label:"Slider",...ee.slider},{type:"datePicker",label:"Date Picker",...ee.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...ee.avatar},{type:"badge",label:"Badge",...ee.badge},{type:"tag",label:"Tag",...ee.tag},{type:"breadcrumb",label:"Breadcrumb",...ee.breadcrumb},{type:"pagination",label:"Pagination",...ee.pagination},{type:"progress",label:"Progress",...ee.progress},{type:"alert",label:"Alert",...ee.alert},{type:"toast",label:"Toast",...ee.toast},{type:"notification",label:"Notification",...ee.notification},{type:"tooltip",label:"Tooltip",...ee.tooltip},{type:"stat",label:"Stat",...ee.stat},{type:"skeleton",label:"Skeleton",...ee.skeleton},{type:"chip",label:"Chip",...ee.chip},{type:"icon",label:"Icon",...ee.icon},{type:"spinner",label:"Spinner",...ee.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...ee.pricing},{type:"testimonial",label:"Testimonial",...ee.testimonial},{type:"cta",label:"CTA",...ee.cta},{type:"productCard",label:"Product Card",...ee.productCard},{type:"profile",label:"Profile",...ee.profile},{type:"feature",label:"Feature",...ee.feature},{type:"team",label:"Team",...ee.team},{type:"login",label:"Login",...ee.login},{type:"contact",label:"Contact",...ee.contact}]}],ml={};for(let e of ih)for(let t of e.items)ml[t.type]=t;function U({w:e,h:t=3,strong:n}){return u.jsx("div",{style:{width:typeof e==="number"?`${e}px`:e,height:t,borderRadius:2,background:n?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function dt({w:e,h:t,radius:n=3,style:l}){return u.jsx("div",{style:{width:typeof e==="number"?`${e}px`:e,height:typeof t==="number"?`${t}px`:t,borderRadius:n,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...l}})}function xn({size:e}){return u.jsx("div",{style:{width:e,height:e,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function R5({width:e,height:t}){let n=Math.max(8,t*0.2);return u.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${n}px`,gap:e*0.02},children:[u.jsx(dt,{w:Math.max(20,t*0.5),h:Math.max(12,t*0.4),radius:2}),u.jsxs("div",{style:{flex:1,display:"flex",gap:e*0.03,marginLeft:e*0.04},children:[u.jsx(U,{w:e*0.06}),u.jsx(U,{w:e*0.07}),u.jsx(U,{w:e*0.05}),u.jsx(U,{w:e*0.06})]}),u.jsx(dt,{w:e*0.1,h:Math.min(28,t*0.5),radius:4})]})}function B5({width:e,height:t,text:n}){return u.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:t*0.05},children:[n?u.jsx("span",{style:{fontSize:Math.min(20,t*0.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:n}):u.jsx(U,{w:e*0.5,h:Math.max(6,t*0.04),strong:!0}),u.jsx(U,{w:e*0.6}),u.jsx(U,{w:e*0.4}),u.jsx(dt,{w:Math.min(140,e*0.2),h:Math.min(36,t*0.12),radius:6,style:{marginTop:t*0.06}})]})}function H5({width:e,height:t}){let n=Math.max(3,Math.floor(t/36));return u.jsxs("div",{style:{padding:e*0.08,display:"flex",flexDirection:"column",gap:t*0.03},children:[u.jsx(U,{w:e*0.6,h:4,strong:!0}),Array.from({length:n},(l,o)=>u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[u.jsx(dt,{w:10,h:10,radius:2}),u.jsx(U,{w:e*(0.4+o*17%30/100)})]},o))]})}function $5({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/160)));return u.jsx("div",{style:{display:"flex",padding:`${t*0.12}px ${e*0.03}px`,gap:e*0.05},children:Array.from({length:n},(l,o)=>u.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[u.jsx(U,{w:"60%",h:3,strong:!0}),u.jsx(U,{w:"80%",h:2}),u.jsx(U,{w:"70%",h:2}),u.jsx(U,{w:"60%",h:2})]},o))})}function U5({width:e,height:t}){return u.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[u.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[u.jsx(U,{w:e*0.3,h:4,strong:!0}),u.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),u.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[u.jsx(U,{w:"90%"}),u.jsx(U,{w:"70%"}),u.jsx(U,{w:"80%"})]}),u.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[u.jsx(dt,{w:70,h:26,radius:4}),u.jsx(dt,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function Y5({width:e,height:t}){return u.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[u.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),u.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[u.jsx(U,{w:"70%",h:4,strong:!0}),u.jsx(U,{w:"95%",h:2}),u.jsx(U,{w:"85%",h:2}),u.jsx(U,{w:"50%",h:2})]})]})}function j5({width:e,height:t,text:n}){if(n)return u.jsx("div",{style:{padding:4,fontSize:Math.min(14,t*0.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:n});let l=Math.max(2,Math.floor(t/18));return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[u.jsx(U,{w:e*0.6,h:5,strong:!0}),Array.from({length:l},(o,a)=>u.jsx(U,{w:`${70+a*13%25}%`,h:2},a))]})}function I5({width:e,height:t}){return u.jsx("div",{style:{height:"100%",position:"relative"},children:u.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,preserveAspectRatio:"none",fill:"none",children:[u.jsx("line",{x1:"0",y1:"0",x2:e,y2:t,stroke:"var(--agd-stroke)",strokeWidth:"1"}),u.jsx("line",{x1:e,y1:"0",x2:"0",y2:t,stroke:"var(--agd-stroke)",strokeWidth:"1"}),u.jsx("circle",{cx:e*0.3,cy:t*0.3,r:Math.min(e,t)*0.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function X5({width:e,height:t}){let n=Math.max(2,Math.min(5,Math.floor(e/100))),l=Math.max(2,Math.min(6,Math.floor(t/32)));return u.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[u.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:n},(o,a)=>u.jsx("div",{style:{flex:1,padding:"0 8px"},children:u.jsx(U,{w:"70%",h:3,strong:!0})},a))}),Array.from({length:l},(o,a)=>u.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:n},(i,r)=>u.jsx("div",{style:{flex:1,padding:"0 8px"},children:u.jsx(U,{w:`${50+(a*7+r*13)%40}%`,h:2})},r))},a))]})}function q5({width:e,height:t}){let n=Math.max(2,Math.floor(t/28));return u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:n},(l,o)=>u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[u.jsx(xn,{size:8}),u.jsx(U,{w:`${55+o*17%35}%`,h:2})]},o))})}function W5({width:e,height:t,text:n}){return u.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,t/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:n?u.jsx("span",{style:{fontSize:Math.min(13,t*0.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:n}):u.jsx(U,{w:Math.max(20,e*0.5),h:3,strong:!0})})}function Q5({width:e,height:t}){return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[u.jsx(U,{w:Math.min(80,e*0.3),h:2}),u.jsx("div",{style:{height:Math.min(36,t*0.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:u.jsx(U,{w:"40%",h:2})})]})}function G5({width:e,height:t}){let n=Math.max(2,Math.min(5,Math.floor(t/56)));return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:t*0.04,padding:8},children:[Array.from({length:n},(l,o)=>u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[u.jsx(U,{w:60+o*17%30,h:2}),u.jsx(dt,{w:"100%",h:28,radius:4})]},o)),u.jsx(dt,{w:Math.min(120,e*0.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function V5({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/120)));return u.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[u.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:n},(l,o)=>u.jsx("div",{style:{padding:"8px 12px",borderBottom:o===0?"2px solid var(--agd-bar-strong)":"none"},children:u.jsx(U,{w:60,h:3,strong:o===0})},o))}),u.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[u.jsx(U,{w:"80%",h:2}),u.jsx(U,{w:"65%",h:2}),u.jsx(U,{w:"75%",h:2})]})]})}function Z5({width:e,height:t}){let n=Math.min(e,t)/2;return u.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[u.jsx("circle",{cx:e/2,cy:t/2,r:n-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),u.jsx("circle",{cx:e/2,cy:t*0.38,r:n*0.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),u.jsx("path",{d:`M${e/2-n*0.55} ${t*0.78} C${e/2-n*0.55} ${t*0.55} ${e/2+n*0.55} ${t*0.55} ${e/2+n*0.55} ${t*0.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function K5({width:e,height:t}){return u.jsx("div",{style:{height:"100%",borderRadius:t/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:u.jsx(U,{w:Math.max(16,e*0.5),h:2,strong:!0})})}function F5({width:e,height:t}){return u.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:t*0.08},children:[u.jsx(U,{w:e*0.5,h:Math.max(5,t*0.06),strong:!0}),u.jsx(U,{w:e*0.35})]})}function J5({width:e,height:t}){return u.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:t*0.04,padding:e*0.04},children:[u.jsx(U,{w:e*0.3,h:4,strong:!0}),u.jsx(U,{w:e*0.7}),u.jsx(U,{w:e*0.5}),u.jsxs("div",{style:{flex:1,display:"flex",gap:e*0.03,marginTop:t*0.06},children:[u.jsx(dt,{w:"33%",h:"100%",radius:4}),u.jsx(dt,{w:"33%",h:"100%",radius:4}),u.jsx(dt,{w:"33%",h:"100%",radius:4})]})]})}function P5({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/140))),l=Math.max(1,Math.min(3,Math.floor(t/120)));return u.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${n}, 1fr)`,gridTemplateRows:`repeat(${l}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:n*l},(o,a)=>u.jsx(dt,{w:"100%",h:"100%",radius:4},a))})}function e2({width:e,height:t}){let n=Math.max(2,Math.floor((t-32)/28));return u.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[u.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:u.jsx(U,{w:e*0.5,h:3,strong:!0})}),u.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:n},(l,o)=>u.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:o===0?"var(--agd-fill)":"transparent"},children:u.jsx(U,{w:`${50+o*17%35}%`,h:2,strong:o===0})},o))})]})}function t2({width:e,height:t}){let n=Math.min(e,t)/2;return u.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[u.jsx("rect",{x:"1",y:"1",width:e-2,height:t-2,rx:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),u.jsx("circle",{cx:e-n,cy:t/2,r:n*0.7,fill:"var(--agd-bar)"})]})}function n2({width:e,height:t}){let n=Math.min(t/2,20);return u.jsxs("div",{style:{height:"100%",borderRadius:n,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*0.6}px`,gap:6},children:[u.jsx(xn,{size:Math.min(14,t*0.4)}),u.jsx(U,{w:"50%",h:2})]})}function l2({width:e,height:t}){return u.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[u.jsx(xn,{size:Math.min(20,t*0.5)}),u.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[u.jsx(U,{w:"60%",h:3,strong:!0}),u.jsx(U,{w:"80%",h:2})]}),u.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function o2({width:e,height:t}){return u.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[u.jsx("rect",{x:"0",y:"0",width:e,height:t,rx:t/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),u.jsx("rect",{x:"1",y:"1",width:e*0.65,height:t-2,rx:(t-2)/2,fill:"var(--agd-bar)"})]})}function a2({width:e,height:t}){let n=Math.max(3,Math.min(7,Math.floor(e/50))),l=e/(n*2);return u.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:n},(o,a)=>{let i=30+(a*37+17)%55;return u.jsx(dt,{w:l,h:`${i}%`,radius:2},a)})})}function i2({width:e,height:t}){let n=Math.min(e,t)*0.12;return u.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[u.jsx(dt,{w:"100%",h:"100%",radius:4}),u.jsx("div",{style:{position:"absolute",width:n*2,height:n*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:u.jsx("div",{style:{width:0,height:0,borderLeft:`${n*0.6}px solid var(--agd-bar-strong)`,borderTop:`${n*0.4}px solid transparent`,borderBottom:`${n*0.4}px solid transparent`,marginLeft:n*0.15}})})]})}function r2({width:e,height:t}){return u.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[u.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:u.jsx(U,{w:"60%",h:2})}),u.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function s2({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/80)));return u.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:n},(l,o)=>u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[o>0&&u.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),u.jsx(U,{w:40+o*13%20,h:2,strong:o===n-1})]},o))})}function c2({width:e,height:t}){let n=Math.max(3,Math.min(5,Math.floor(e/40))),l=Math.min(28,t*0.8);return u.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:n},(o,a)=>u.jsx(dt,{w:l,h:l,radius:4,style:a===1?{background:"var(--agd-bar)"}:void 0},a))})}function u2({width:e}){return u.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:u.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function d2({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(t/40)));return u.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:n},(l,o)=>u.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:o===0?2:1},children:[u.jsx(U,{w:`${40+o*17%25}%`,h:3,strong:!0}),u.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:o===0?"▼":"▶"})]},o))})}function _2({width:e,height:t}){return u.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[u.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[u.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),u.jsx(dt,{w:"100%",h:"100%",radius:4}),u.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),u.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[u.jsx(xn,{size:5}),u.jsx(xn,{size:5}),u.jsx(xn,{size:5})]})]})}function f2({width:e,height:t}){return u.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:t*0.04},children:[u.jsx(U,{w:e*0.4,h:3,strong:!0}),u.jsx(U,{w:e*0.3,h:6,strong:!0}),u.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(n,l)=>u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[u.jsx(xn,{size:5}),u.jsx(U,{w:`${50+l*17%35}%`,h:2})]},l))}),u.jsx(dt,{w:e*0.7,h:Math.min(32,t*0.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function h2({width:e,height:t}){return u.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[u.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),u.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[u.jsx(U,{w:"90%",h:2}),u.jsx(U,{w:"75%",h:2}),u.jsx(U,{w:"60%",h:2})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[u.jsx(xn,{size:20}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[u.jsx(U,{w:60,h:3,strong:!0}),u.jsx(U,{w:40,h:2})]})]})]})}function m2({width:e,height:t}){return u.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:t*0.08},children:[u.jsx(U,{w:e*0.5,h:Math.max(4,t*0.05),strong:!0}),u.jsx(U,{w:e*0.35}),u.jsx(dt,{w:Math.min(140,e*0.25),h:Math.min(32,t*0.15),radius:6,style:{marginTop:t*0.04,background:"var(--agd-bar)"}})]})}function g2({width:e,height:t}){return u.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[u.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:u.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),u.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[u.jsx(U,{w:"40%",h:3,strong:!0}),u.jsx(U,{w:"70%",h:2})]})]})}function p2({width:e,height:t}){return u.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[u.jsx(U,{w:e*0.4,h:3,strong:!0}),u.jsx(dt,{w:60,h:Math.min(24,t*0.6),radius:4})]})}function y2({width:e,height:t}){return u.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:t*0.06},children:[u.jsx(U,{w:e*0.5,h:2}),u.jsx(U,{w:e*0.4,h:Math.max(8,t*0.18),strong:!0}),u.jsx(U,{w:e*0.3,h:2})]})}function b2({width:e,height:t}){let n=Math.max(3,Math.min(5,Math.floor(e/100))),l=Math.min(12,t*0.35);return u.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:n},(o,a)=>u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[u.jsx("div",{style:{width:l,height:l,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:a===0?"var(--agd-bar)":"transparent",flexShrink:0}}),a<n-1&&u.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},a))})}function x2({width:e,height:t}){return u.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[u.jsx(U,{w:Math.max(16,e*0.5),h:2,strong:!0}),u.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function v2({width:e,height:t}){let l=Math.min(t*0.7,e/7.5);return u.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:l*0.2},children:Array.from({length:5},(o,a)=>u.jsx("svg",{width:l,height:l,viewBox:"0 0 16 16",fill:"none",children:u.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:a<3?"var(--agd-bar)":"none"})},a))})}function w2({width:e,height:t}){return u.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[u.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",style:{position:"absolute",inset:0},children:[u.jsx("line",{x1:0,y1:t*0.3,x2:e,y2:t*0.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),u.jsx("line",{x1:0,y1:t*0.6,x2:e,y2:t*0.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),u.jsx("line",{x1:e*0.4,y1:0,x2:e*0.6,y2:t,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),u.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:u.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[u.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),u.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function k2({width:e,height:t}){let n=Math.max(3,Math.min(5,Math.floor(t/60)));return u.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[u.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:n},(l,o)=>u.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[u.jsx(xn,{size:8}),o<n-1&&u.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},o))}),u.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:n},(l,o)=>u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[u.jsx(U,{w:`${35+o*13%25}%`,h:3,strong:!0}),u.jsx(U,{w:`${50+o*17%30}%`,h:2})]},o))})]})}function S2({width:e,height:t}){return u.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:t*0.06},children:[u.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[u.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),u.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),u.jsx(U,{w:e*0.4,h:2}),u.jsx(U,{w:e*0.25,h:2})]})}function C2({width:e,height:t}){let n=Math.max(3,Math.min(8,Math.floor(t/20)));return u.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[u.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[u.jsx(xn,{size:6}),u.jsx(xn,{size:6}),u.jsx(xn,{size:6})]}),Array.from({length:n},(l,o)=>u.jsx("div",{style:{display:"flex",gap:6,paddingLeft:o>0&&o<n-1?12:0},children:u.jsx(U,{w:`${25+o*23%50}%`,h:2,strong:o===0})},o))]})}function M2({width:e,height:t}){let o=Math.min((e-16)/7,(t-40)/6);return u.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[u.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),u.jsx(U,{w:e*0.3,h:3,strong:!0}),u.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(a,i)=>u.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:o*0.6},children:u.jsx(U,{w:o*0.5,h:2})},`h${i}`)),Array.from({length:35},(a,i)=>u.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:o},children:u.jsx("div",{style:{width:o*0.6,height:o*0.6,borderRadius:"50%",background:i===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:u.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:i===12?1:0.3}})})},i))]})]})}function E2({width:e,height:t}){return u.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[u.jsx(xn,{size:Math.min(32,t*0.55)}),u.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[u.jsx(U,{w:"50%",h:3,strong:!0}),u.jsx(U,{w:"75%",h:2})]}),u.jsx(U,{w:30,h:2})]})}function T2({width:e,height:t}){return u.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[u.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),u.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[u.jsx(U,{w:"65%",h:4,strong:!0}),u.jsx(U,{w:"40%",h:3}),u.jsx("div",{style:{flex:1}}),u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[u.jsx(U,{w:"30%",h:5,strong:!0}),u.jsx(dt,{w:Math.min(70,e*0.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function A2({width:e,height:t}){let n=Math.min(48,t*0.3);return u.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:t*0.06},children:[u.jsx(xn,{size:n}),u.jsx(U,{w:e*0.45,h:4,strong:!0}),u.jsx(U,{w:e*0.3,h:2}),u.jsxs("div",{style:{display:"flex",gap:e*0.08,marginTop:t*0.04},children:[u.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[u.jsx(U,{w:20,h:3,strong:!0}),u.jsx(U,{w:28,h:2})]}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[u.jsx(U,{w:20,h:3,strong:!0}),u.jsx(U,{w:28,h:2})]}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[u.jsx(U,{w:20,h:3,strong:!0}),u.jsx(U,{w:28,h:2})]})]})]})}function L2({width:e,height:t}){let n=Math.max(e*0.6,80),l=Math.max(3,Math.floor(t/40));return u.jsxs("div",{style:{height:"100%",display:"flex"},children:[u.jsx("div",{style:{width:e-n,background:"var(--agd-fill)",opacity:0.3}}),u.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:e*0.04},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:t*0.06},children:[u.jsx(U,{w:n*0.4,h:4,strong:!0}),u.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:l},(o,a)=>u.jsx("div",{style:{padding:"6px 0"},children:u.jsx(U,{w:`${50+a*17%35}%`,h:2,strong:a===0})},a))]})]})}function D2({width:e,height:t}){return u.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[u.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[u.jsx(U,{w:"70%",h:3,strong:!0}),u.jsx(U,{w:"90%",h:2}),u.jsx(U,{w:"60%",h:2})]}),u.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function N2({width:e,height:t}){let n=Math.min(t*0.7,e*0.3);return u.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:e*0.08},children:[u.jsx(dt,{w:n,h:n,radius:n*0.25}),u.jsx(U,{w:e*0.45,h:Math.max(4,t*0.2),strong:!0})]})}function z2({width:e,height:t}){let n=Math.max(2,Math.min(5,Math.floor(t/56)));return u.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:n},(l,o)=>u.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:o===0?2:1},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[u.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),u.jsx(U,{w:e*(0.3+o*13%25/100),h:3,strong:!0})]}),u.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:o===0?"▼":"▶"})]},o))})}function O2({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/120))),l=Math.max(1,Math.min(3,Math.floor(t/120)));return u.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${n}, 1fr)`,gridTemplateRows:`repeat(${l}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:n*l},(o,a)=>u.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:u.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[u.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),u.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},a))})}function R2({width:e,height:t}){let n=Math.min(e,t);return u.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[u.jsx("rect",{x:"1",y:(t-n+2)/2,width:n-2,height:n-2,rx:n*0.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),u.jsx("path",{d:`M${n*0.25} ${t/2}l${n*0.2} ${n*0.2} ${n*0.3}-${n*0.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function B2({width:e,height:t}){let n=Math.min(e,t)/2-1;return u.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[u.jsx("circle",{cx:e/2,cy:t/2,r:n,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),u.jsx("circle",{cx:e/2,cy:t/2,r:n*0.45,fill:"var(--agd-bar)"})]})}function H2({width:e,height:t}){let n=Math.max(2,t*0.12),l=Math.min(t*0.35,10),o=e*0.55;return u.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[u.jsx("div",{style:{width:"100%",height:n,borderRadius:n/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:u.jsx("div",{style:{width:o,height:"100%",borderRadius:n/2,background:"var(--agd-bar)"}})}),u.jsx("div",{style:{position:"absolute",left:o-l,width:l*2,height:l*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function $2({width:e,height:t}){let n=Math.min(36,t*0.15),l=7,o=4,a=Math.min((e-16)/7,(t-n-40)/5);return u.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[u.jsxs("div",{style:{height:n,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[u.jsx(U,{w:"40%",h:2}),u.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[u.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),u.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),u.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[u.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),u.jsx(U,{w:e*0.25,h:2,strong:!0}),u.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),u.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:1,padding:"0 4px",flex:1},children:Array.from({length:28},(i,r)=>u.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:a},children:u.jsx("div",{style:{width:a*0.5,height:a*0.5,borderRadius:"50%",background:r===10?"var(--agd-bar)":"transparent"},children:u.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:u.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:r===10?1:0.25}})})})},r))})]})]})}function U2({width:e,height:t}){return u.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:t*0.08,padding:4},children:[u.jsx("div",{style:{width:"100%",height:t*0.2,borderRadius:4,background:"var(--agd-fill)"}}),u.jsx("div",{style:{width:"70%",height:Math.max(6,t*0.1),borderRadius:3,background:"var(--agd-fill)"}}),u.jsx("div",{style:{width:"90%",height:Math.max(4,t*0.06),borderRadius:3,background:"var(--agd-fill)"}}),u.jsx("div",{style:{width:"50%",height:Math.max(4,t*0.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function Y2({width:e,height:t}){return u.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:u.jsxs("div",{style:{height:"100%",flex:1,borderRadius:t/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${t*0.3}px`,gap:4},children:[u.jsx(U,{w:"60%",h:2,strong:!0}),u.jsx("div",{style:{width:Math.max(6,t*0.3),height:Math.max(6,t*0.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function j2({width:e,height:t}){let n=Math.min(e,t);return u.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:u.jsx("path",{d:`M${e/2} ${(t-n)/2+n*0.1}l${n*0.12} ${n*0.25} ${n*0.28} ${n*0.04}-${n*0.2} ${n*0.2} ${n*0.05} ${n*0.28}-${n*0.25}-${n*0.12}-${n*0.25} ${n*0.12} ${n*0.05}-${n*0.28}-${n*0.2}-${n*0.2} ${n*0.28}-${n*0.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function I2({width:e,height:t}){let n=Math.min(e,t)/2-2;return u.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[u.jsx("circle",{cx:e/2,cy:t/2,r:n,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),u.jsx("path",{d:`M${e/2} ${t/2-n}a${n} ${n} 0 0 1 ${n} ${n}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function X2({width:e,height:t}){let n=Math.min(36,t*0.25,e*0.12),l=Math.max(1,Math.min(3,Math.floor(t/80)));return u.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:l},(o,a)=>u.jsxs("div",{style:{display:"flex",gap:e*0.04,alignItems:"flex-start"},children:[u.jsx(dt,{w:n,h:n,radius:n*0.25}),u.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[u.jsx(U,{w:`${40+a*13%20}%`,h:3,strong:!0}),u.jsx(U,{w:`${60+a*17%25}%`,h:2})]})]},a))})}function q2({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/120))),l=Math.min(36,t*0.25);return u.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:t*0.06,padding:t*0.06},children:[u.jsx(U,{w:e*0.3,h:4,strong:!0}),u.jsx("div",{style:{display:"flex",gap:e*0.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:n},(o,a)=>u.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[u.jsx(xn,{size:l}),u.jsx(U,{w:e*0.12,h:3,strong:!0}),u.jsx(U,{w:e*0.08,h:2})]},a))})]})}function W2({width:e,height:t}){let n=Math.max(2,Math.min(3,Math.floor(t/80)));return u.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:e*0.06,gap:t*0.04},children:[u.jsx(U,{w:e*0.5,h:Math.max(5,t*0.04),strong:!0}),u.jsx(U,{w:e*0.35,h:2}),u.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:t*0.03,marginTop:t*0.04},children:Array.from({length:n},(l,o)=>u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[u.jsx(U,{w:Math.min(60,e*0.2),h:2}),u.jsx(dt,{w:"100%",h:Math.min(32,t*0.1),radius:4})]},o))}),u.jsx(dt,{w:"100%",h:Math.min(36,t*0.12),radius:6,style:{marginTop:t*0.03,background:"var(--agd-bar)"}}),u.jsx(U,{w:e*0.4,h:2})]})}function Q2({width:e,height:t}){return u.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:e*0.04,gap:t*0.03},children:[u.jsx(U,{w:e*0.4,h:4,strong:!0}),u.jsx(U,{w:e*0.6,h:2}),u.jsxs("div",{style:{display:"flex",gap:6,marginTop:t*0.03},children:[u.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[u.jsx(U,{w:50,h:2}),u.jsx(dt,{w:"100%",h:Math.min(28,t*0.1),radius:4})]}),u.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[u.jsx(U,{w:40,h:2}),u.jsx(dt,{w:"100%",h:Math.min(28,t*0.1),radius:4})]})]}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[u.jsx(U,{w:50,h:2}),u.jsx(dt,{w:"100%",h:Math.min(28,t*0.1),radius:4})]}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[u.jsx(U,{w:60,h:2}),u.jsx(dt,{w:"100%",h:"100%",radius:4})]}),u.jsx(dt,{w:Math.min(120,e*0.3),h:Math.min(30,t*0.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var G2={navigation:R5,hero:B5,sidebar:H5,footer:$5,modal:U5,card:Y5,text:j5,image:I5,table:X5,list:q5,button:W5,input:Q5,form:G5,tabs:V5,avatar:Z5,badge:K5,header:F5,section:J5,grid:P5,dropdown:e2,toggle:t2,search:n2,toast:l2,progress:o2,chart:a2,video:i2,tooltip:r2,breadcrumb:s2,pagination:c2,divider:u2,accordion:d2,carousel:_2,pricing:f2,testimonial:h2,cta:m2,alert:g2,banner:p2,stat:y2,stepper:b2,tag:x2,rating:v2,map:w2,timeline:k2,fileUpload:S2,codeBlock:C2,calendar:M2,notification:E2,productCard:T2,profile:A2,drawer:L2,popover:D2,logo:N2,faq:z2,gallery:O2,checkbox:R2,radio:B2,slider:H2,datePicker:$2,skeleton:U2,chip:Y2,icon:j2,spinner:I2,feature:X2,team:q2,login:W2,contact:Q2};function V2({type:e,width:t,height:n,text:l}){let o=G2[e];if(!o)return u.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:u.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:0.5},children:e})});return u.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:u.jsx(o,{width:t,height:n,text:l})})}var Z2=`svg[fill=none] {
  fill: none !important;
}

.styles-module__overlayExiting___iEmYr {
  opacity: 0 !important;
  transition: opacity 0.25s ease !important;
  pointer-events: none !important;
}

.styles-module__overlay___aWh-q {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: auto;
  cursor: default;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
  --agd-stroke: rgba(59, 130, 246, 0.35);
  --agd-fill: rgba(59, 130, 246, 0.06);
  --agd-bar: rgba(59, 130, 246, 0.18);
  --agd-bar-strong: rgba(59, 130, 246, 0.28);
  --agd-text-3: rgba(255, 255, 255, 0.6);
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q.styles-module__light___ORIft {
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) {
  --agd-surface: #141414;
}
.styles-module__overlay___aWh-q.styles-module__wireframe___itvQU {
  --agd-stroke: rgba(249, 115, 22, 0.35);
  --agd-fill: rgba(249, 115, 22, 0.06);
  --agd-bar: rgba(249, 115, 22, 0.18);
  --agd-bar-strong: rgba(249, 115, 22, 0.28);
}
.styles-module__overlay___aWh-q.styles-module__placing___45yD8 {
  cursor: crosshair;
}
.styles-module__overlay___aWh-q.styles-module__passthrough___xaFeE {
  pointer-events: none;
}

.styles-module__blankCanvas___t2Eue {
  position: fixed;
  inset: 0;
  z-index: 99994;
  background: #fff;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__visible___OKKqX {
  opacity: var(--canvas-opacity, 1);
  pointer-events: auto;
}
.styles-module__blankCanvas___t2Eue::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.08) 1px, transparent 1px);
  background-size: 24px 24px;
  background-position: 12px 12px;
  pointer-events: none;
  transition: opacity 0.2s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__gridActive___OZ-cf::after {
  opacity: 1;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.22) 1px, transparent 1px);
}

.styles-module__paletteHeader___-Q5gQ {
  padding: 0 1rem 0.375rem;
}

.styles-module__paletteHeaderTitle___oHqZC {
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  letter-spacing: -0.0094em;
}
.styles-module__light___ORIft .styles-module__paletteHeaderTitle___oHqZC {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__paletteHeaderDesc___6i74T {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.45);
  margin-top: 2px;
  line-height: 14px;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T {
  color: rgba(0, 0, 0, 0.45);
}
.styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__paletteHeaderDesc___6i74T a:hover {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__wireframePurposeWrap___To-tS {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__wireframePurposeWrap___To-tS.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__wireframePurposeInner___Lrahs {
  overflow: hidden;
}

.styles-module__wireframePurposeInput___7EtBN {
  display: block;
  width: calc(100% - 2rem);
  margin: 0.25rem 1rem 0.375rem;
  padding: 0.375rem 0.5rem;
  font-size: 0.8125rem;
  font-family: inherit;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.375rem;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN {
  color: rgba(0, 0, 0, 0.7);
  background: rgba(0, 0, 0, 0.03);
  border-color: rgba(0, 0, 0, 0.1);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__canvasToggle___-QqSy {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  margin: 0.25rem 1rem 0.25rem;
  padding: 0.375rem 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 1px dashed rgba(255, 255, 255, 0.1);
  background: transparent;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.styles-module__canvasToggle___-QqSy:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.15);
}
.styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy {
  border-color: rgba(0, 0, 0, 0.08);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy:hover {
  background: rgba(0, 0, 0, 0.02);
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}

.styles-module__canvasToggleIcon___7pJ82 {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}
.styles-module__light___ORIft .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(0, 0, 0, 0.25);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__canvasToggleLabel___OanpY {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: -0.0094em;
}
.styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__canvasToggleLabel___OanpY {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}

.styles-module__canvasPurposeWrap___hj6zk {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__canvasPurposeWrap___hj6zk.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__canvasPurposeInner___VWiyu {
  overflow: hidden;
}

.styles-module__canvasPurposeToggle___byDH2 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  margin: 0.375rem 1rem 0.375rem 1.1875rem;
}
.styles-module__canvasPurposeToggle___byDH2 input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.styles-module__canvasPurposeCheck___xqd7l {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.25s ease, border-color 0.25s ease;
}
.styles-module__canvasPurposeCheck___xqd7l svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
.styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH svg {
  color: #fff;
}

.styles-module__canvasPurposeLabel___Zu-tD {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.styles-module__light___ORIft .styles-module__canvasPurposeLabel___Zu-tD {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__canvasPurposeHelp___jijwR {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: help;
}
.styles-module__canvasPurposeHelp___jijwR svg {
  color: rgba(255, 255, 255, 0.2);
  transform: translateY(2px);
  transition: color 0.15s ease;
}
.styles-module__canvasPurposeHelp___jijwR:hover svg {
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__canvasPurposeHelp___jijwR svg {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__canvasPurposeHelp___jijwR:hover svg {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__placement___zcxv8 {
  position: absolute;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.08);
  cursor: grab;
  transition: box-shadow 0.15s, border-color 0.15s, opacity 0.15s ease, transform 0.15s ease;
  user-select: none;
  pointer-events: auto;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  animation: styles-module__placementEnter___TdRhf 0.25s cubic-bezier(0.34, 1.2, 0.64, 1);
}
.styles-module__placement___zcxv8:active {
  cursor: grabbing;
}
.styles-module__placement___zcxv8:hover {
  border-color: rgba(59, 130, 246, 0.5);
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.12);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #3c82f7;
  border-style: solid;
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8 {
  border-color: rgba(249, 115, 22, 0.4);
  background: rgba(249, 115, 22, 0.08);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8:hover {
  border-color: rgba(249, 115, 22, 0.5);
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.12);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__placement___zcxv8.styles-module__dragging___le6KZ {
  opacity: 0.85;
  z-index: 50;
}
.styles-module__placement___zcxv8.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__placementContent___f64A4 {
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.styles-module__placementLabel___0KvWl {
  position: absolute;
  top: -18px;
  left: 0;
  font-size: 10px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.7);
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.8), 0 0 8px rgba(255, 255, 255, 0.5);
}
.styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__placementLabel___0KvWl {
  color: rgba(249, 115, 22, 0.7);
}
.styles-module__wireframe___itvQU .styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #f97316;
}

.styles-module__placementAnnotation___78pTr {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(0, 0, 0, 0.5);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__placementAnnotation___78pTr.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__sectionAnnotation___aUIs0 {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(59, 130, 246, 0.6);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__sectionAnnotation___aUIs0.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__handle___Ikbxm {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #fff;
  border: 1.5px solid #3c82f7;
  border-radius: 2px;
  z-index: 12;
  box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.12);
  opacity: 0;
  transform: scale(0.3);
  pointer-events: none;
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.styles-module__placement___zcxv8:hover .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:hover .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:hover .styles-module__handle___Ikbxm, .styles-module__placement___zcxv8:active .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:active .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:active .styles-module__handle___Ikbxm, .styles-module__selected___6yrp6 .styles-module__handle___Ikbxm {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__sectionOutline___s0hy- .styles-module__handle___Ikbxm {
  border-color: inherit;
}
.styles-module__wireframe___itvQU .styles-module__handle___Ikbxm {
  border-color: #f97316;
}

.styles-module__handleNw___4TMIj {
  top: -4px;
  left: -4px;
  cursor: nw-resize;
}

.styles-module__handleNe___mnsTh {
  top: -4px;
  right: -4px;
  cursor: ne-resize;
}

.styles-module__handleSe___oSFnk {
  bottom: -4px;
  right: -4px;
  cursor: se-resize;
}

.styles-module__handleSw___pi--Z {
  bottom: -4px;
  left: -4px;
  cursor: sw-resize;
}

.styles-module__handleN___aBA-Q, .styles-module__handleE___0hM5u, .styles-module__handleS___JjDRv, .styles-module__handleW___ERWGQ {
  opacity: 0 !important;
  pointer-events: none !important;
}

.styles-module__edgeHandle___XxXdT {
  position: absolute;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__edgeHandle___XxXdT::after {
  content: "";
  position: absolute;
  border-radius: 4px;
  background: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__edgeHandle___XxXdT::after {
  background: #f97316;
}
.styles-module__edgeHandle___XxXdT::after {
  opacity: 0;
  transition: opacity 0.1s ease, transform 0.1s ease;
  transform: scale(0.8);
}
.styles-module__edgeHandle___XxXdT:hover::after {
  opacity: 0.85;
  transform: scale(1);
}
.styles-module__edgeHandle___XxXdT svg {
  position: relative;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.1s ease;
  filter: drop-shadow(0 0 2px var(--agd-surface));
}
.styles-module__edgeHandle___XxXdT:hover svg {
  opacity: 1;
}

.styles-module__edgeN___-JJDj, .styles-module__edgeS___66lMX {
  left: 12px;
  right: 12px;
  height: 12px;
  cursor: n-resize;
}
.styles-module__edgeN___-JJDj::after, .styles-module__edgeS___66lMX::after {
  width: 24px;
  height: 4px;
}

.styles-module__edgeN___-JJDj {
  top: -6px;
}

.styles-module__edgeS___66lMX {
  bottom: -6px;
  cursor: s-resize;
}

.styles-module__edgeE___1bGDa, .styles-module__edgeW___lHQNo {
  top: 12px;
  bottom: 12px;
  width: 12px;
  cursor: e-resize;
}
.styles-module__edgeE___1bGDa::after, .styles-module__edgeW___lHQNo::after {
  width: 4px;
  height: 24px;
}

.styles-module__edgeE___1bGDa {
  right: -6px;
}

.styles-module__edgeW___lHQNo {
  left: -6px;
  cursor: w-resize;
}

.styles-module__deleteButton___LkGCb {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  line-height: 1;
  z-index: 15;
  pointer-events: none;
  opacity: 0;
  transform: scale(0.8);
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.12s ease, color 0.12s ease, border-color 0.12s ease, box-shadow 0.12s ease;
}
.styles-module__placement___zcxv8:hover .styles-module__deleteButton___LkGCb, .styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-:hover .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO:hover .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
  box-shadow: 0 1px 4px rgba(239, 68, 68, 0.3);
  transform: scale(1.1);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb {
  background: rgba(40, 40, 40, 0.9);
  border-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
}

.styles-module__drawBox___BrVAa {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 2px solid #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.15);
}

.styles-module__selectBox___Iu8kB {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 1px dashed #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  border-radius: 2px;
}

.styles-module__sizeIndicator___7zJ4y {
  position: fixed;
  pointer-events: none;
  z-index: 100001;
  font-size: 10px;
  color: #fff;
  background: #3c82f7;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.styles-module__guideLine___DUQY2 {
  pointer-events: none;
  z-index: 100001;
  background: #f0f;
  opacity: 0.5;
}

.styles-module__dragPreview___onPbU {
  position: fixed;
  z-index: 100002;
  pointer-events: none;
  border: 1.5px dashed #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.1);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: 600;
  color: #3c82f7;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.15);
  transition: width 0.08s ease, height 0.08s ease, opacity 0.08s ease;
}

.styles-module__dragPreviewWireframe___jsg0G {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  color: #f97316;
  box-shadow: 0 4px 16px rgba(249, 115, 22, 0.15);
}

.styles-module__palette___C7iSH {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  width: 256px;
  overflow: hidden;
  background: #1c1c1c;
  border: none;
  border-radius: 1rem;
  padding: 13px 0 16px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  z-index: 100001;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  cursor: default;
  opacity: 0;
  filter: blur(5px);
}
.styles-module__palette___C7iSH .styles-module__paletteItem___6TlnA,
.styles-module__palette___C7iSH .styles-module__paletteItemLabel___6ncO4,
.styles-module__palette___C7iSH .styles-module__paletteSectionTitle___PqnjX,
.styles-module__palette___C7iSH .styles-module__paletteFooter___QYnAG {
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__palette___C7iSH.styles-module__enter___6LYk5 {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__palette___C7iSH.styles-module__exit___iSGRw {
  opacity: 0;
  transform: translateY(6px);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
.styles-module__palette___C7iSH.styles-module__light___ORIft {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}

.styles-module__paletteSection___V8DEA {
  padding: 0 1rem;
}
.styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteSectionTitle___PqnjX {
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  padding: 0 0 3px 3px;
}
.styles-module__light___ORIft .styles-module__paletteSectionTitle___PqnjX {
  color: rgba(0, 0, 0, 0.4);
}

.styles-module__paletteItem___6TlnA {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.25rem;
  margin-bottom: 1px;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease;
  border: 1px solid transparent;
  user-select: none;
  min-height: 24px;
}
.styles-module__paletteItem___6TlnA:hover {
  background: rgba(255, 255, 255, 0.1);
}
.styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}

.styles-module__paletteItemIcon___0NPQK {
  width: 20px;
  height: 16px;
  border-radius: 2px;
  border: 1px dashed rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.45);
}
.styles-module__paletteItemIcon___0NPQK svg {
  display: block;
  width: 20px;
  height: 16px;
}
.styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(0, 0, 0, 0.12);
  background: rgba(0, 0, 0, 0.02);
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__paletteItemLabel___6ncO4 {
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: -0.0094em;
  line-height: 1;
  min-width: 0;
}
.styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}
.styles-module__light___ORIft .styles-module__paletteItemLabel___6ncO4 {
  color: rgba(0, 0, 0, 0.7);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}

.styles-module__placeScroll___7sClM {
  max-height: 240px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 0.25rem;
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px);
}
.styles-module__placeScroll___7sClM.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar {
  width: 3px;
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 2px;
}
.styles-module__light___ORIft .styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
}

.styles-module__paletteFooterWrap___71-fI {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.25s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__paletteFooterWrap___71-fI.styles-module__footerHidden___fJUik {
  grid-template-rows: 0fr;
}

.styles-module__paletteFooterInnerContent___VC26h {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__footerHidden___fJUik .styles-module__paletteFooterInnerContent___VC26h {
  opacity: 0;
  transform: translateY(4px);
}

.styles-module__paletteFooterInner___dfylY {
  overflow: hidden;
}

.styles-module__paletteFooter___QYnAG {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  padding: 0 1rem;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteFooter___QYnAG {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteFooterCount___D3Fia {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterCount___D3Fia {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__paletteFooterClear___ybBoa {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  transition: color 0.15s ease;
}
.styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__paletteFooterActions___fLzv8 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.styles-module__rollingWrap___S75jM {
  display: inline-block;
  overflow: hidden;
  height: 1.15em;
  position: relative;
  vertical-align: bottom;
}

.styles-module__rollingNum___1RKDx {
  position: absolute;
  left: 0;
  top: 0;
}

.styles-module__exitUp___AFDRW {
  animation: styles-module__numExitUp___FRQqx 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterUp___CPlXb {
  animation: styles-module__numEnterUp___2Yd-w 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__exitDown___-1yAy {
  animation: styles-module__numExitDown___xm5by 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterDown___DDuFR {
  animation: styles-module__numEnterDown___hpxBk 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

@keyframes styles-module__numExitUp___FRQqx {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterUp___2Yd-w {
  from {
    transform: translateY(110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes styles-module__numExitDown___xm5by {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterDown___hpxBk {
  from {
    transform: translateY(-110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.styles-module__rearrangeOverlay___-3R3t {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: none;
  cursor: default;
  user-select: none;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
}

.styles-module__hoverHighlight___8eT-v {
  position: fixed;
  pointer-events: none;
  z-index: 99994;
  border: 2px dashed rgba(59, 130, 246, 0.5);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.06);
  animation: styles-module__highlightFadeIn___Lg7KY 0.12s ease;
}

.styles-module__sectionOutline___s0hy- {
  position: fixed;
  border: 2px solid;
  border-radius: 4px;
  cursor: grab;
}
.styles-module__sectionOutline___s0hy-:active {
  cursor: grabbing;
}
.styles-module__sectionOutline___s0hy- {
  transition: box-shadow 0.15s, border-color 0.3s, background-color 0.3s, border-style 0s;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}
.styles-module__sectionOutline___s0hy-:hover {
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 4px 12px rgba(0, 0, 0, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 {
  border-style: solid;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) {
  border: 1.5px dashed rgba(150, 150, 150, 0.35);
  background-color: transparent !important;
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover {
  border-color: rgba(150, 150, 150, 0.6);
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionLabel___F80HQ {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionLabel___F80HQ {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__movedBadge___s8z-q,
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionDimensions___RcJSL {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionDimensions___RcJSL {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__sectionLabel___F80HQ {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 10px;
  font-weight: 600;
  color: #fff;
  padding: 2px 8px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  max-width: calc(100% - 8px);
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__movedBadge___s8z-q {
  position: absolute;
  bottom: 22px;
  right: 4px;
  font-size: 9px;
  font-weight: 700;
  color: #fff;
  background: #22c55e;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__movedBadge___s8z-q.styles-module__badgeVisible___npbdS {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.2s cubic-bezier(0.34, 1.2, 0.64, 1), transform 0.2s cubic-bezier(0.34, 1.2, 0.64, 1);
}

.styles-module__resizedBadge___u51V8 {
  background: #3c82f7;
  bottom: 40px;
}

.styles-module__sectionDimensions___RcJSL {
  position: absolute;
  bottom: 4px;
  right: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(0, 0, 0, 0.5);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
.styles-module__light___ORIft .styles-module__sectionDimensions___RcJSL {
  color: rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.7);
}

.styles-module__wireframeNotice___4GJyB {
  position: fixed;
  bottom: 16px;
  left: 24px;
  z-index: 99995;
  font-size: 9.5px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: auto;
  animation: styles-module__overlayFadeIn___aECVy 0.3s ease;
  line-height: 1.5;
  max-width: 280px;
}

.styles-module__wireframeOpacityRow___CJXzi {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.styles-module__wireframeOpacityLabel___afkfT {
  font-size: 9px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.32);
  letter-spacing: 0.02em;
  white-space: nowrap;
  user-select: none;
}

.styles-module__wireframeOpacitySlider___YcoEs {
  -webkit-appearance: none;
  appearance: none;
  width: 56px;
  height: 4px;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs:hover {
  background: rgba(0, 0, 0, 0.13);
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  cursor: pointer;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb:hover {
  background: rgb(224.4209205021, 95.3548117155, 5.7790794979);
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-thumb {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  border: none;
  cursor: pointer;
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-track {
  background: rgba(0, 0, 0, 0.08);
  height: 4px;
  border-radius: 2px;
}

.styles-module__wireframeNoticeTitleRow___PJqyG {
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 2px;
}

.styles-module__wireframeNoticeTitle___okr08 {
  font-weight: 600;
  color: rgba(0, 0, 0, 0.55);
}

.styles-module__wireframeNoticeDivider___PNKQ6 {
  width: 1px;
  height: 8px;
  background: rgba(0, 0, 0, 0.12);
  margin: 0 8px;
  flex-shrink: 0;
}

.styles-module__wireframeStartOver___YFk-I {
  font-size: 9.5px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
  text-decoration: none;
  transition: color 0.12s ease;
  white-space: nowrap;
}
.styles-module__wireframeStartOver___YFk-I:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__ghostOutline___po-kO {
  position: fixed;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.04);
  cursor: grab;
  opacity: 0.5;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__ghostEnter___EC3Mb 0.25s ease;
  transition: box-shadow 0.15s, border-color 0.3s, opacity 0.25s;
}
.styles-module__ghostOutline___po-kO:active {
  cursor: grabbing;
}
.styles-module__ghostOutline___po-kO:hover {
  opacity: 0.7;
  box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.1), 0 4px 12px rgba(0, 0, 0, 0.08);
}
.styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 {
  opacity: 1;
  border-style: solid;
  border-width: 2px;
  border-color: #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__ghostOutline___po-kO.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__ghostBadge___tsQUK {
  position: absolute;
  bottom: calc(100% + 4px);
  left: -1px;
  font-size: 9px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.9);
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.2);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  letter-spacing: 0.02em;
  line-height: 1.2;
  animation: styles-module__badgeSlideIn___typJ7 0.2s ease both;
}

@keyframes styles-module__badgeSlideIn___typJ7 {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__ghostBadgeExtra___6CVoD {
  display: inline;
  animation: styles-module__badgeExtraIn___i4W8F 0.2s ease both;
}

@keyframes styles-module__badgeExtraIn___i4W8F {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.styles-module__originalOutline___Y6DD1 {
  position: fixed;
  border: 1.5px dashed rgba(150, 150, 150, 0.3);
  border-radius: 4px;
  background: transparent;
  pointer-events: none;
  user-select: none;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}

.styles-module__originalLabel___HqI9g {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(150, 150, 150, 0.5);
  padding: 1px 6px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: rgba(150, 150, 150, 0.08);
}

.styles-module__connectorSvg___Lovld {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__connectorLine___XeWh- {
  transition: opacity 0.2s ease;
  animation: styles-module__connectorDraw___8sK5I 0.3s ease both;
}

.styles-module__connectorDot___yvf7C {
  transform-box: fill-box;
  transform-origin: center;
  animation: styles-module__connectorDotIn___NwTUq 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s both;
}

@keyframes styles-module__connectorDraw___8sK5I {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__connectorDotIn___NwTUq {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.styles-module__connectorExiting___2lLOs {
  animation: styles-module__connectorOut___5QoPl 0.2s ease forwards;
}
.styles-module__connectorExiting___2lLOs .styles-module__connectorDot___yvf7C {
  animation: styles-module__connectorDotOut___FEq7e 0.2s ease forwards;
}

@keyframes styles-module__connectorOut___5QoPl {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__connectorDotOut___FEq7e {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
}
@keyframes styles-module__placementEnter___TdRhf {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__sectionEnter___-8BXT {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__highlightFadeIn___Lg7KY {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__overlayFadeIn___aECVy {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__ghostEnter___EC3Mb {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 0.6;
    transform: scale(1);
  }
}`,K2={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-design-mode-styles");if(!e)e=document.createElement("style"),e.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(e);e.textContent=Z2}var O=K2,za=24,xs=5;function z0(e,t,n,l,o){let a=1/0,i=1/0,r=e.x,s=e.x+e.width,g=e.x+e.width/2,_=e.y,b=e.y+e.height,f=e.y+e.height/2,w=!l,C=w?[r,s,g]:[...l.left?[r]:[],...l.right?[s]:[]],D=w?[_,b,f]:[...l.top?[_]:[],...l.bottom?[b]:[]],A=[];for(let me of t)if(!n.has(me.id))A.push(me);if(o)A.push(...o);for(let me of A){let tt=me.x,ht=me.x+me.width,Re=me.x+me.width/2,qe=me.y,Te=me.y+me.height,et=me.y+me.height/2;for(let G of C)for(let pe of[tt,ht,Re]){let Ke=pe-G;if(Math.abs(Ke)<xs&&Math.abs(Ke)<Math.abs(a))a=Ke}for(let G of D)for(let pe of[qe,Te,et]){let Ke=pe-G;if(Math.abs(Ke)<xs&&Math.abs(Ke)<Math.abs(i))i=Ke}}let h=Math.abs(a)<xs?a:0,y=Math.abs(i)<xs?i:0,k=[],E=new Set,Q=r+h,ae=s+h,z=g+h,F=_+y,te=b+y,J=f+y;for(let me of A){let tt=me.x,ht=me.x+me.width,Re=me.x+me.width/2,qe=me.y,Te=me.y+me.height,et=me.y+me.height/2;for(let G of[tt,Re,ht])for(let pe of[Q,z,ae])if(Math.abs(pe-G)<0.5){let Ke=`x:${Math.round(G)}`;if(!E.has(Ke))E.add(Ke),k.push({axis:"x",pos:G})}for(let G of[qe,et,Te])for(let pe of[F,J,te])if(Math.abs(pe-G)<0.5){let Ke=`y:${Math.round(G)}`;if(!E.has(Ke))E.add(Ke),k.push({axis:"y",pos:G})}}return{dx:h,dy:y,guides:k}}function O0(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function F2({placements:e,onChange:t,activeComponent:n,onActiveComponentChange:l,isDarkMode:o,exiting:a,onInteractionChange:i,className:r,passthrough:s,extraSnapRects:g,onSelectionChange:_,deselectSignal:b,onDragMove:f,onDragEnd:w,clearSignal:C,wireframe:D}){let[A,h]=Pe.useState(new Set),[y,k]=Pe.useState(null),[E,Q]=Pe.useState(null),[ae,z]=Pe.useState(null),[F,te]=Pe.useState([]),[J,me]=Pe.useState(null),[tt,ht]=Pe.useState(!1),Re=Pe.useRef(!1),[qe,Te]=Pe.useState(new Set),et=Pe.useRef(new Map),G=Pe.useRef(null),pe=Pe.useRef(null),Ke=Pe.useRef(e);Ke.current=e;let Bt=Pe.useRef(_);Bt.current=_;let wn=Pe.useRef(f);wn.current=f;let gn=Pe.useRef(w);gn.current=w;let io=Pe.useRef(b);Pe.useEffect(()=>{if(b!==io.current)io.current=b,h(new Set)},[b]);let Wn=Pe.useRef(C);Pe.useEffect(()=>{if(C!==void 0&&C!==Wn.current){Wn.current=C;let q=new Set(Ke.current.map((_e)=>_e.id));if(q.size>0)Te(q),h(new Set),pe.current=null,he(()=>{t([]),Te(new Set)},180)}},[C,t]),Pe.useEffect(()=>{let q=(_e)=>{let be=_e.target;if(be.tagName==="INPUT"||be.tagName==="TEXTAREA"||be.isContentEditable)return;if((_e.key==="Backspace"||_e.key==="Delete")&&A.size>0){_e.preventDefault();let xe=new Set(A);Te(xe),h(new Set),he(()=>{t(Ke.current.filter((nt)=>!xe.has(nt.id))),Te(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(_e.key)&&A.size>0){_e.preventDefault();let xe=_e.shiftKey?20:1,nt=_e.key==="ArrowLeft"?-xe:_e.key==="ArrowRight"?xe:0,rt=_e.key==="ArrowUp"?-xe:_e.key==="ArrowDown"?xe:0;t(e.map((Fe)=>A.has(Fe.id)?{...Fe,x:Math.max(0,Fe.x+nt),y:Math.max(0,Fe.y+rt)}:Fe));return}if(_e.key==="Escape"){if(n)l(null);else if(A.size>0)h(new Set);return}};return document.addEventListener("keydown",q),()=>document.removeEventListener("keydown",q)},[A,n,e,t,l]);let ro=Pe.useCallback((q)=>{if(q.button!==0)return;if(s)return;if(q.target.closest(`.${O.placement}`))return;q.preventDefault(),q.stopPropagation();let be=window.scrollY,{clientX:ze,clientY:xe}=q;if(n){pe.current="place",i?.(!0);let nt=!1,rt=ze,Fe=xe,Ye=(M)=>{rt=M.clientX,Fe=M.clientY;let L=Math.abs(rt-ze),H=Math.abs(Fe-xe);if(L>5||H>5)nt=!0;if(nt){let Y=Math.min(ze,rt),P=Math.min(xe,Fe),ie=Math.abs(rt-ze),X=Math.abs(Fe-xe);k({x:Y,y:P,w:ie,h:X}),z({x:M.clientX+12,y:M.clientY+12,text:`${Math.round(ie)} × ${Math.round(X)}`})}},ge=(M)=>{window.removeEventListener("mousemove",Ye),window.removeEventListener("mouseup",ge),k(null),z(null),pe.current=null,i?.(!1);let L=ee[n],H,Y,P,ie;if(nt)H=Math.min(ze,rt),Y=Math.min(xe,Fe)+be,P=Math.max(za,Math.abs(rt-ze)),ie=Math.max(za,Math.abs(Fe-xe));else P=L.width,ie=L.height,H=ze-P/2,Y=xe+be-ie/2;H=Math.max(0,H),Y=Math.max(0,Y);let X={id:O0(),type:n,x:H,y:Y,width:P,height:ie,scrollY:be,timestamp:Date.now()},se=[...e,X];t(se),h(new Set([X.id])),l(null)};window.addEventListener("mousemove",Ye),window.addEventListener("mouseup",ge)}else{if(!q.shiftKey)h(new Set);pe.current="select";let nt=!1,rt=(Ye)=>{let ge=Math.abs(Ye.clientX-ze),M=Math.abs(Ye.clientY-xe);if(ge>4||M>4)nt=!0;if(nt){let L=Math.min(ze,Ye.clientX),H=Math.min(xe,Ye.clientY);Q({x:L,y:H,w:Math.abs(Ye.clientX-ze),h:Math.abs(Ye.clientY-xe)})}},Fe=(Ye)=>{if(window.removeEventListener("mousemove",rt),window.removeEventListener("mouseup",Fe),pe.current=null,nt){let ge=Math.min(ze,Ye.clientX),M=Math.min(xe,Ye.clientY)+be,L=Math.abs(Ye.clientX-ze),H=Math.abs(Ye.clientY-xe),Y=new Set(q.shiftKey?A:new Set);for(let P of e){let ie=P.y-be;if(P.x+P.width>ge&&P.x<ge+L&&P.y+P.height>M&&P.y<M+H)Y.add(P.id)}h(Y)}Q(null)};window.addEventListener("mousemove",rt),window.addEventListener("mouseup",Fe)}},[n,s,e,t,A]),rl=Pe.useCallback((q,_e)=>{if(q.button!==0)return;let be=q.target;if(be.closest(`.${O.handle}`)||be.closest(`.${O.deleteButton}`))return;q.preventDefault(),q.stopPropagation();let ze;if(q.shiftKey)if(ze=new Set(A),ze.has(_e))ze.delete(_e);else ze.add(_e);else if(!A.has(_e))ze=new Set([_e]);else ze=new Set(A);if(h(ze),ze.size!==A.size||[...ze].some((se)=>!A.has(se)))Bt.current?.(ze,q.shiftKey);let nt=window.scrollY,{clientX:rt,clientY:Fe}=q,Ye=new Map;for(let se of e)if(ze.has(se.id))Ye.set(se.id,{x:se.x,y:se.y});pe.current="move",i?.(!0);let ge=!1,M=!1,L=e,H=0,Y=0,P=new Map;for(let se of e)if(Ye.has(se.id))P.set(se.id,{w:se.width,h:se.height});let ie=(se)=>{let Me=se.clientX-rt,We=se.clientY-Fe;if(Math.abs(Me)>2||Math.abs(We)>2)ge=!0;if(!ge)return;if(se.altKey&&!M){M=!0;let ve=[];for(let wt of e)if(Ye.has(wt.id))ve.push({...wt,id:O0(),timestamp:Date.now()});L=[...e,...ve]}let lt=1/0,ce=1/0,st=-1/0,He=-1/0;for(let[ve,wt]of Ye){let nn=P.get(ve);if(!nn)continue;lt=Math.min(lt,wt.x+Me),ce=Math.min(ce,wt.y+We),st=Math.max(st,wt.x+Me+nn.w),He=Math.max(He,wt.y+We+nn.h)}let Ae={x:lt,y:ce,width:st-lt,height:He-ce},{dx:ue,dy:ct,guides:Ve}=z0(Ae,L,new Set(Ye.keys()),void 0,g);te(Ve);let Le=Me+ue,Je=We+ct;H=Le,Y=Je,t(L.map((ve)=>{let wt=Ye.get(ve.id);if(!wt)return ve;return{...ve,x:Math.max(0,wt.x+Le),y:Math.max(0,wt.y+Je)}})),wn.current?.(Le,Je)},X=()=>{window.removeEventListener("mousemove",ie),window.removeEventListener("mouseup",X),pe.current=null,i?.(!1),te([]),gn.current?.(H,Y,ge)};window.addEventListener("mousemove",ie),window.addEventListener("mouseup",X)},[A,e,t,i]),Bl=Pe.useCallback((q,_e,be)=>{q.preventDefault(),q.stopPropagation();let ze=e.find((Y)=>Y.id===_e);if(!ze)return;h(new Set([_e])),pe.current="resize",i?.(!0);let{clientX:xe,clientY:nt}=q,{width:rt,height:Fe,x:Ye,y:ge}=ze,M={left:be.includes("w"),right:be.includes("e"),top:be.includes("n"),bottom:be.includes("s")},L=(Y)=>{let P=Y.clientX-xe,ie=Y.clientY-nt,X=rt,se=Fe,Me=Ye,We=ge;if(be.includes("e"))X=Math.max(za,rt+P);if(be.includes("w"))X=Math.max(za,rt-P),Me=Ye+rt-X;if(be.includes("s"))se=Math.max(za,Fe+ie);if(be.includes("n"))se=Math.max(za,Fe-ie),We=ge+Fe-se;let lt={x:Me,y:We,width:X,height:se},{dx:ce,dy:st,guides:He}=z0(lt,Ke.current,new Set([_e]),M,g);if(te(He),ce!==0){if(M.right)X+=ce;else if(M.left)Me+=ce,X-=ce}if(st!==0){if(M.bottom)se+=st;else if(M.top)We+=st,se-=st}t(Ke.current.map((Ae)=>Ae.id===_e?{...Ae,x:Me,y:We,width:X,height:se}:Ae)),z({x:Y.clientX+12,y:Y.clientY+12,text:`${Math.round(X)} × ${Math.round(se)}`})},H=()=>{window.removeEventListener("mousemove",L),window.removeEventListener("mouseup",H),z(null),pe.current=null,i?.(!1),te([])};window.addEventListener("mousemove",L),window.addEventListener("mouseup",H)},[e,t,i]),so=Pe.useCallback((q)=>{pe.current=null,Te((_e)=>{let be=new Set(_e);return be.add(q),be}),h((_e)=>{let be=new Set(_e);return be.delete(q),be}),he(()=>{t(Ke.current.filter((_e)=>_e.id!==q)),Te((_e)=>{let be=new Set(_e);return be.delete(q),be})},180)},[t]),jo=new Set(["text","hero","button","badge","cta","toast","modal","card","navigation","tabs","input","search","breadcrumb","pricing","testimonial","alert","banner","tag","notification","stat","productCard"]),zn={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},sl=Pe.useCallback((q)=>{let _e=e.find((be)=>be.id===q);if(!_e)return;Re.current=!!_e.text,me(q),ht(!1)},[e]),kn=Pe.useCallback(()=>{if(!J)return;ht(!0),he(()=>{me(null),ht(!1)},150)},[J]);Pe.useEffect(()=>{if(a&&J)kn()},[a]);let bl=Pe.useCallback((q)=>{if(!J)return;t(e.map((_e)=>_e.id===J?{..._e,text:q.trim()||void 0}:_e)),kn()},[J,e,t,kn]),xl=typeof window<"u"?window.scrollY:0,ka=["nw","ne","se","sw"],cl=D?"#f97316":"#3c82f7",Be=[{dir:"n",cls:O.edgeN,arrow:xt.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:xt.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:cl})})},{dir:"e",cls:O.edgeE,arrow:xt.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:xt.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:cl})})},{dir:"s",cls:O.edgeS,arrow:xt.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:xt.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:cl})})},{dir:"w",cls:O.edgeW,arrow:xt.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:xt.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:cl})})}];return xt.jsxs(xt.Fragment,{children:[xt.jsx("div",{ref:G,className:`${O.overlay} ${!o?O.light:""} ${n?O.placing:""} ${s?O.passthrough:""} ${a?O.overlayExiting:""} ${D?O.wireframe:""}${r?` ${r}`:""}`,"data-feedback-toolbar":!0,onMouseDown:ro,children:e.map((q)=>{let _e=A.has(q.id),be=ml[q.type]?.label||q.type,ze=q.y-xl;return xt.jsxs("div",{"data-design-placement":q.id,className:`${O.placement} ${_e?O.selected:""} ${qe.has(q.id)?O.exiting:""}`,style:{left:q.x,top:ze,width:q.width,height:q.height,position:"fixed"},onMouseDown:(xe)=>rl(xe,q.id),onDoubleClick:()=>sl(q.id),children:[xt.jsx("span",{className:O.placementLabel,children:be}),xt.jsx("span",{className:`${O.placementAnnotation} ${q.text?O.annotationVisible:""}`,children:(()=>{if(q.text)et.current.set(q.id,q.text);return q.text||et.current.get(q.id)||""})()}),xt.jsx("div",{className:O.placementContent,children:xt.jsx(V2,{type:q.type,width:q.width,height:q.height,text:q.text})}),xt.jsx("div",{className:O.deleteButton,onMouseDown:(xe)=>xe.stopPropagation(),onClick:()=>so(q.id),children:"✕"}),ka.map((xe)=>xt.jsx("div",{className:`${O.handle} ${O[`handle${xe.charAt(0).toUpperCase()}${xe.slice(1)}`]}`,onMouseDown:(nt)=>Bl(nt,q.id,xe)},xe)),Be.map(({dir:xe,cls:nt,arrow:rt})=>xt.jsx("div",{className:`${O.edgeHandle} ${nt}`,onMouseDown:(Fe)=>Bl(Fe,q.id,xe),children:rt},xe))]},q.id)})}),J&&(()=>{let q=e.find((ge)=>ge.id===J);if(!q)return null;let _e=q.y-xl,be=q.x+q.width/2,ze=_e-8,xe=_e+q.height+8,nt=ze>200,rt=xe<window.innerHeight-100,Fe=Math.max(160,Math.min(window.innerWidth-160,be)),Ye;if(nt)Ye={left:Fe,bottom:window.innerHeight-ze};else if(rt)Ye={left:Fe,top:xe};else Ye={left:Fe,top:Math.max(80,window.innerHeight/2-80)};return xt.jsx(Ns,{element:ml[q.type]?.label||q.type,placeholder:zn[q.type]||"Label or content text",initialValue:q.text??"",submitLabel:Re.current?"Save":"Set",onSubmit:bl,onCancel:kn,onDelete:Re.current?()=>{bl("")}:void 0,isExiting:tt,lightMode:!o,style:Ye})})(),y&&xt.jsx("div",{className:O.drawBox,style:{left:y.x,top:y.y,width:y.w,height:y.h},"data-feedback-toolbar":!0}),E&&xt.jsx("div",{className:O.selectBox,style:{left:E.x,top:E.y,width:E.w,height:E.h},"data-feedback-toolbar":!0}),ae&&xt.jsx("div",{className:O.sizeIndicator,style:{left:ae.x,top:ae.y},"data-feedback-toolbar":!0,children:ae.text}),F.map((q,_e)=>xt.jsx("div",{className:O.guideLine,style:q.axis==="x"?{position:"fixed",left:q.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:q.pos-xl,right:0,height:1},"data-feedback-toolbar":!0},`${q.axis}-${q.pos}-${_e}`))]})}function J2(e){if(!e)return"";let t=e.scrollTop>2,n=e.scrollTop+e.clientHeight<e.scrollHeight-2;return`${t?O.fadeTop:""} ${n?O.fadeBottom:""}`}var m="currentColor",N="0.5";function P2({type:e}){switch(e){case"navigation":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:m,opacity:".4"}),c.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:m,opacity:".25"}),c.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:m,opacity:".25"})]});case"header":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:m,opacity:".35"}),c.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:m,opacity:".15"})]});case"hero":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:m,opacity:".35"}),c.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:m,opacity:".15"}),c.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:m,strokeWidth:N})]});case"section":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:m,opacity:".3"}),c.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:m,opacity:".15"}),c.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:m,opacity:".15"})]});case"sidebar":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:m,opacity:".3"}),c.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:m,opacity:".15"}),c.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:m,opacity:".15"})]});case"footer":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:m,opacity:".25"}),c.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:m,opacity:".25"}),c.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:m,opacity:".2"})]});case"modal":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:m,opacity:".3"}),c.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:m,opacity:".15"}),c.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:m,strokeWidth:N})]});case"divider":return c.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:c.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:m,strokeWidth:"0.5",opacity:".3"})});case"card":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:m,opacity:".04"}),c.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:m,opacity:".25"}),c.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:m,opacity:".12"})]});case"text":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:m,opacity:".3"}),c.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:m,opacity:".15"}),c.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:m,opacity:".15"}),c.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:m,opacity:".12"})]});case"image":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:m,strokeWidth:N}),c.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:m,strokeWidth:".3",opacity:".25"}),c.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:m,strokeWidth:".3",opacity:".25"})]});case"video":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:m,strokeWidth:N}),c.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:m,strokeWidth:N,fill:m,opacity:".15"})]});case"table":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:m,strokeWidth:N}),c.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:m,strokeWidth:".3",opacity:".25"}),c.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:m,strokeWidth:".3",opacity:".25"}),c.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:m,strokeWidth:".3",opacity:".25"}),c.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:m,strokeWidth:".3",opacity:".25"})]});case"grid":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:m,strokeWidth:N})]});case"list":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:m,opacity:".2"}),c.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:m,opacity:".2"}),c.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:m,opacity:".2"})]});case"chart":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:m,opacity:".2"}),c.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:m,opacity:".25"}),c.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:m,opacity:".3"}),c.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:m,opacity:".2"})]});case"accordion":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:m,opacity:".25"}),c.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:m,strokeWidth:N})]});case"carousel":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:m,strokeWidth:N}),c.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:m,strokeWidth:N,opacity:".35"}),c.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:m,strokeWidth:N,opacity:".35"}),c.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:m,opacity:".35"}),c.jsx("circle",{cx:"10",cy:"14",r:".6",fill:m,opacity:".15"}),c.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:m,opacity:".15"})]});case"button":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:m,opacity:".25"})]});case"input":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:m,opacity:".25"}),c.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:m,opacity:".12"})]});case"search":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:m,strokeWidth:N}),c.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:m,strokeWidth:N,opacity:".3"}),c.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:m,strokeWidth:N,opacity:".3"}),c.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:m,opacity:".12"})]});case"form":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:m,opacity:".25"}),c.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:m,opacity:".25"}),c.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:m,strokeWidth:N})]});case"tabs":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:m,opacity:".25"}),c.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:m,strokeWidth:N})]});case"dropdown":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:m,opacity:".2"}),c.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:m,strokeWidth:N,opacity:".3"}),c.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:m,strokeWidth:N,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:m,strokeWidth:N}),c.jsx("circle",{cx:"13",cy:"8",r:"2",fill:m,opacity:".3"})]});case"avatar":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:m,strokeWidth:N}),c.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:m,strokeWidth:N}),c.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:m,strokeWidth:N})]});case"badge":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:m,opacity:".25"})]});case"breadcrumb":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:m,opacity:".3"}),c.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:m,strokeWidth:N,opacity:".2"}),c.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:m,opacity:".2"}),c.jsx("path",{d:"M14 7l1 1-1 1",stroke:m,strokeWidth:N,opacity:".2"}),c.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:m,opacity:".15"})]});case"pagination":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:m,opacity:".15",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:m,strokeWidth:N})]});case"progress":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:m,opacity:".2"})]});case"toast":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:m,strokeWidth:N}),c.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:m,strokeWidth:N,opacity:".3"}),c.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:m,opacity:".25"}),c.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:m,opacity:".12"})]});case"tooltip":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:m,opacity:".25"}),c.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:m,strokeWidth:N})]});case"pricing":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:m,opacity:".25"}),c.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:m,opacity:".15"}),c.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:m,opacity:".1"}),c.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:m,opacity:".1"}),c.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:m,opacity:".2"})]});case"testimonial":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:m,strokeWidth:N}),c.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:m,opacity:".2",fontFamily:"serif",children:"“"}),c.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:m,opacity:".15"}),c.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:m,opacity:".12"}),c.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:m,strokeWidth:N,opacity:".25"}),c.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:m,opacity:".15"})]});case"cta":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:m,opacity:".3"}),c.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:m,opacity:".15"}),c.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:m,strokeWidth:N})]});case"alert":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:m,strokeWidth:N}),c.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:m,strokeWidth:N,opacity:".3"}),c.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:m,strokeWidth:"0.6",opacity:".5"}),c.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:m,opacity:".5"}),c.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:m,opacity:".2"})]});case"banner":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:m,opacity:".25"}),c.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:m,strokeWidth:N})]});case"stat":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:m,opacity:".15"}),c.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:m,opacity:".3"}),c.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:m,opacity:".12"})]});case"stepper":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("circle",{cx:"4",cy:"8",r:"2",fill:m,opacity:".2",stroke:m,strokeWidth:N}),c.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:m,strokeWidth:".4",opacity:".3"}),c.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:m,strokeWidth:N}),c.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:m,strokeWidth:".4",opacity:".3"}),c.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:m,strokeWidth:N})]});case"tag":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:m,opacity:".25"}),c.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:m,strokeWidth:N,opacity:".2"}),c.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:m,strokeWidth:N,opacity:".2"})]});case"rating":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:m,opacity:".25"}),c.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:m,opacity:".25"}),c.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:m,strokeWidth:N,opacity:".25"})]});case"map":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:m,strokeWidth:N}),c.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:m,strokeWidth:".3",opacity:".15"}),c.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:m,strokeWidth:".3",opacity:".15"}),c.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:m,opacity:".15",stroke:m,strokeWidth:N})]});case"timeline":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:m,strokeWidth:".4",opacity:".25"}),c.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:m,opacity:".2",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:m,opacity:".25"}),c.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:m,opacity:".15"}),c.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:m,opacity:".15"})]});case"fileUpload":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:m,strokeWidth:N,strokeDasharray:"2 1"}),c.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:m,strokeWidth:N,opacity:".3"}),c.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:m,opacity:".15"})]});case"codeBlock":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:m,strokeWidth:N}),c.jsx("circle",{cx:"4",cy:"4",r:".6",fill:m,opacity:".3"}),c.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:m,opacity:".3"}),c.jsx("circle",{cx:"7",cy:"4",r:".6",fill:m,opacity:".3"}),c.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:m,opacity:".2"}),c.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:m,opacity:".15"}),c.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:m,opacity:".12"})]});case"calendar":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:m,strokeWidth:N}),c.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:m,strokeWidth:".4",opacity:".25"}),c.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:m,opacity:".2"}),c.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:m,opacity:".2"}),c.jsx("circle",{cx:"7",cy:"9",r:".6",fill:m,opacity:".2"}),c.jsx("circle",{cx:"10",cy:"9",r:".6",fill:m,opacity:".2"}),c.jsx("circle",{cx:"13",cy:"9",r:".6",fill:m,opacity:".3"}),c.jsx("circle",{cx:"7",cy:"12",r:".6",fill:m,opacity:".2"}),c.jsx("circle",{cx:"10",cy:"12",r:".6",fill:m,opacity:".2"})]});case"notification":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:m,strokeWidth:N}),c.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:m,strokeWidth:N,opacity:".25"}),c.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:m,opacity:".25"}),c.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:m,opacity:".12"}),c.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:m,opacity:".25"})]});case"productCard":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:m,opacity:".04"}),c.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:m,opacity:".25"}),c.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:m,opacity:".15"}),c.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:m,strokeWidth:N})]});case"profile":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:m,opacity:".25"}),c.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:m,opacity:".12"})]});case"drawer":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:m,opacity:".25"}),c.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:m,opacity:".15"}),c.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:m,opacity:".15"}),c.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:m,strokeWidth:N,opacity:".15"})]});case"popover":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:m,opacity:".25"}),c.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:m,opacity:".15"}),c.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:m,strokeWidth:N})]});case"logo":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:m,strokeWidth:N}),c.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:m,strokeWidth:N,opacity:".3"}),c.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:m,opacity:".2"}),c.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:m,opacity:".12"})]});case"faq":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:m,opacity:".3",fontWeight:"bold",children:"?"}),c.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:m,opacity:".25"}),c.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:m,opacity:".12"}),c.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:m,opacity:".3",fontWeight:"bold",children:"?"}),c.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:m,opacity:".25"}),c.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:m,opacity:".12"})]});case"gallery":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:m,strokeWidth:N})]});case"checkbox":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:m,strokeWidth:N}),c.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:m,strokeWidth:N,opacity:".35"})]});case"radio":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:m,strokeWidth:N}),c.jsx("circle",{cx:"10",cy:"8",r:"2",fill:m,opacity:".3"})]});case"slider":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:m,opacity:".15"}),c.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:m,opacity:".25"}),c.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:m,strokeWidth:N})]});case"datePicker":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:m,opacity:".2"}),c.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:m,opacity:".12"}),c.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:m,strokeWidth:N,strokeDasharray:"2 1",opacity:".3"}),c.jsx("circle",{cx:"6",cy:"10",r:".6",fill:m,opacity:".2"}),c.jsx("circle",{cx:"10",cy:"10",r:".6",fill:m,opacity:".3"}),c.jsx("circle",{cx:"14",cy:"10",r:".6",fill:m,opacity:".2"}),c.jsx("circle",{cx:"6",cy:"13",r:".6",fill:m,opacity:".2"}),c.jsx("circle",{cx:"10",cy:"13",r:".6",fill:m,opacity:".2"})]});case"skeleton":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:m,opacity:".08"}),c.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:m,opacity:".08"}),c.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:m,opacity:".08"})]});case"chip":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:m,opacity:".08",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:m,opacity:".25"}),c.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:m,strokeWidth:N,opacity:".2"}),c.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:m,strokeWidth:N,opacity:".2"}),c.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:m,strokeWidth:N,opacity:".25"})]});case"icon":return c.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:c.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:m,strokeWidth:N,opacity:".3"})});case"spinner":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:m,strokeWidth:N,opacity:".12"}),c.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:m,strokeWidth:N,opacity:".35",strokeLinecap:"round"})]});case"feature":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:m,strokeWidth:N}),c.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:m,strokeWidth:N,opacity:".25"}),c.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:m,opacity:".25"}),c.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:m,opacity:".12"}),c.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:m,opacity:".25"}),c.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:m,opacity:".12"})]});case"team":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:m,opacity:".2"}),c.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:m,opacity:".2"}),c.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:m,strokeWidth:N,opacity:".5"}),c.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:m,opacity:".15"}),c.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:m,opacity:".1"})]});case"login":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:m,opacity:".25"}),c.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:m,opacity:".2"})]});case"contact":return c.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[c.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:m,opacity:".2"}),c.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:m,strokeWidth:N}),c.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:m,opacity:".2"})]});default:return null}}function eb({activeType:e,onSelect:t,onDragStart:n,scrollRef:l,fadeClass:o,blankCanvas:a}){return c.jsx("div",{ref:l,className:`${O.placeScroll} ${o||""}`,children:ih.map((i)=>c.jsxs("div",{className:O.paletteSection,children:[c.jsx("div",{className:O.paletteSectionTitle,children:i.section}),i.items.map((r)=>c.jsxs("div",{className:`${O.paletteItem} ${e===r.type?O.active:""} ${a?O.wireframe:""}`,onClick:()=>t(r.type),onMouseDown:(s)=>{if(s.button===0)n(r.type,s)},children:[c.jsx("div",{className:O.paletteItemIcon,children:c.jsx(P2,{type:r.type})}),c.jsx("span",{className:O.paletteItemLabel,children:r.label})]},r.type))]},i.section))})}function tb({value:e,suffix:t}){let[n,l]=Rt.useState(null),[o,a]=Rt.useState(t),[i,r]=Rt.useState("up"),s=Rt.useRef(e),g=Rt.useRef(t),_=Rt.useRef(),b=n!==null&&o!==t;if(Rt.useEffect(()=>{if(e!==s.current){if(e===0){s.current=e,g.current=t,l(null);return}r(e>s.current?"up":"down"),l(s.current),a(g.current),s.current=e,g.current=t,clearTimeout(_.current),_.current=he(()=>l(null),250)}else g.current=t},[e,t]),n===null)return c.jsxs(c.Fragment,{children:[e,t?` ${t}`:""]});if(b)return c.jsxs("span",{className:O.rollingWrap,children:[c.jsxs("span",{style:{visibility:"hidden"},children:[e," ",t]}),c.jsxs("span",{className:`${O.rollingNum} ${i==="up"?O.exitUp:O.exitDown}`,children:[n," ",o]},`o${n}-${e}`),c.jsxs("span",{className:`${O.rollingNum} ${i==="up"?O.enterUp:O.enterDown}`,children:[e," ",t]},`n${e}`)]});return c.jsxs(c.Fragment,{children:[c.jsxs("span",{className:O.rollingWrap,children:[c.jsx("span",{style:{visibility:"hidden"},children:e}),c.jsx("span",{className:`${O.rollingNum} ${i==="up"?O.exitUp:O.exitDown}`,children:n},`o${n}-${e}`),c.jsx("span",{className:`${O.rollingNum} ${i==="up"?O.enterUp:O.enterDown}`,children:e},`n${e}`)]}),t?` ${t}`:""]})}function nb({activeType:e,onSelect:t,isDarkMode:n,sectionCount:l,onDetectSections:o,visible:a,onExited:i,placementCount:r,onClearPlacements:s,onDragStart:g,blankCanvas:_,onBlankCanvasChange:b,wireframePurpose:f,onWireframePurposeChange:w,Tooltip:C}){let[D,A]=Rt.useState(!1),[h,y]=Rt.useState("exit"),[k,E]=Rt.useState(!1),[Q,ae]=Rt.useState(!0),z=Rt.useRef(0),F=Rt.useRef(""),te=Rt.useRef(0),J=Rt.useRef(),me=Rt.useRef(null),[tt,ht]=Rt.useState("");Rt.useEffect(()=>{if(a)A(!0),clearTimeout(J.current),cancelAnimationFrame(te.current),te.current=Ba(()=>{te.current=Ba(()=>{y("enter")})});else cancelAnimationFrame(te.current),y("exit"),clearTimeout(J.current),J.current=he(()=>{A(!1),i?.()},200);return()=>cancelAnimationFrame(te.current)},[a]);let Re=r>0||l>0,qe=r+l;if(qe>0)z.current=qe,F.current=_?qe===1?"Component":"Components":qe===1?"Change":"Changes";if(Rt.useEffect(()=>{if(Re)if(!k)ae(!0),E(!0),Ba(()=>{Ba(()=>{ae(!1)})});else ae(!1);else{ae(!0);let et=he(()=>E(!1),300);return()=>clearTimeout(et)}},[Re]),Rt.useEffect(()=>{if(!D)return;let et=me.current;if(!et)return;let G=()=>ht(J2(et));G(),et.addEventListener("scroll",G,{passive:!0});let pe=new ResizeObserver(G);return pe.observe(et),()=>{et.removeEventListener("scroll",G),pe.disconnect()}},[D]),!D)return null;let Te=[];if(r>0)Te.push("placed");if(l>0)Te.push("captured");return c.jsxs("div",{className:`${O.palette} ${O[h]} ${!n?O.light:""}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:(et)=>et.stopPropagation(),onMouseDown:(et)=>et.stopPropagation(),onTransitionEnd:(et)=>{if(et.target!==et.currentTarget)return;if(!a)clearTimeout(J.current),A(!1),y("exit"),i?.()},children:[c.jsxs("div",{className:O.paletteHeader,children:[c.jsx("div",{className:O.paletteHeaderTitle,children:"Layout Mode"}),c.jsxs("div",{className:O.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",c.jsx("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),c.jsxs("div",{className:`${O.canvasToggle} ${_?O.active:""}`,onClick:()=>b(!_),children:[c.jsx("span",{className:O.canvasToggleIcon,children:c.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[c.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),c.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),c.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),c.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),c.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),c.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),c.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),c.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),c.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),c.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),c.jsx("span",{className:O.canvasToggleLabel,children:"Wireframe New Page"})]}),c.jsx("div",{className:`${O.wireframePurposeWrap} ${!_?O.collapsed:""}`,children:c.jsx("div",{className:O.wireframePurposeInner,children:c.jsx("textarea",{className:O.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:f,onChange:(et)=>w(et.target.value),rows:2})})}),c.jsx(eb,{activeType:e,onSelect:t,onDragStart:g,scrollRef:me,fadeClass:tt,blankCanvas:_}),k&&c.jsx("div",{className:`${O.paletteFooterWrap} ${Q?O.footerHidden:""}`,children:c.jsx("div",{className:O.paletteFooterInner,children:c.jsx("div",{className:O.paletteFooterInnerContent,children:c.jsxs("div",{className:O.paletteFooter,children:[c.jsx("span",{className:O.paletteFooterCount,children:c.jsx(tb,{value:z.current,suffix:F.current})}),c.jsx("button",{className:O.paletteFooterClear,onClick:s,children:"Clear"})]})})})})]})}function Ya(e){if(e.parentElement)return e.parentElement;let t=e.getRootNode();if(t instanceof ShadowRoot)return t.host;return null}function bn(e,t){let n=e;while(n){if(n.matches(t))return n;n=Ya(n)}return null}function lb(e,t=4){let n=[],l=e,o=0;while(l&&o<t){let a=l.tagName.toLowerCase();if(a==="html"||a==="body")break;let i=a;if(l.id)i=`#${l.id}`;else if(l.className&&typeof l.className==="string"){let s=l.className.split(/\s+/).find((g)=>g.length>2&&!g.match(/^[a-z]{1,2}$/)&&!g.match(/[A-Z0-9]{5,}/));if(s)i=`.${s.split("_")[0]}`}let r=Ya(l);if(!l.parentElement&&r)i=`⟨shadow⟩ ${i}`;n.unshift(i),l=r,o++}return n.join(" > ")}function Ha(e){let t=lb(e);if(e.dataset.element)return{name:e.dataset.element,path:t};let n=e.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(n)){let l=bn(e,"svg");if(l){let o=Ya(l);if(o instanceof HTMLElement)return{name:`graphic in ${Ha(o).name}`,path:t}}return{name:"graphic element",path:t}}if(n==="svg"){let l=Ya(e);if(l?.tagName.toLowerCase()==="button"){let o=l.textContent?.trim();return{name:o?`icon in "${o}" button`:"button icon",path:t}}return{name:"icon",path:t}}if(n==="button"){let l=e.textContent?.trim(),o=e.getAttribute("aria-label");if(o)return{name:`button [${o}]`,path:t};return{name:l?`button "${l.slice(0,25)}"`:"button",path:t}}if(n==="a"){let l=e.textContent?.trim(),o=e.getAttribute("href");if(l)return{name:`link "${l.slice(0,25)}"`,path:t};if(o)return{name:`link to ${o.slice(0,30)}`,path:t};return{name:"link",path:t}}if(n==="input"){let l=e.getAttribute("type")||"text",o=e.getAttribute("placeholder"),a=e.getAttribute("name");if(o)return{name:`input "${o}"`,path:t};if(a)return{name:`input [${a}]`,path:t};return{name:`${l} input`,path:t}}if(["h1","h2","h3","h4","h5","h6"].includes(n)){let l=e.textContent?.trim();return{name:l?`${n} "${l.slice(0,35)}"`:n,path:t}}if(n==="p"){let l=e.textContent?.trim();if(l)return{name:`paragraph: "${l.slice(0,40)}${l.length>40?"...":""}"`,path:t};return{name:"paragraph",path:t}}if(n==="span"||n==="label"){let l=e.textContent?.trim();if(l&&l.length<40)return{name:`"${l}"`,path:t};return{name:n,path:t}}if(n==="li"){let l=e.textContent?.trim();if(l&&l.length<40)return{name:`list item: "${l.slice(0,35)}"`,path:t};return{name:"list item",path:t}}if(n==="blockquote")return{name:"blockquote",path:t};if(n==="code"){let l=e.textContent?.trim();if(l&&l.length<30)return{name:`code: \`${l}\``,path:t};return{name:"code",path:t}}if(n==="pre")return{name:"code block",path:t};if(n==="img"){let l=e.getAttribute("alt");return{name:l?`image "${l.slice(0,30)}"`:"image",path:t}}if(n==="video")return{name:"video",path:t};if(["div","section","article","nav","header","footer","aside","main"].includes(n)){let l=e.className,o=e.getAttribute("role"),a=e.getAttribute("aria-label");if(a)return{name:`${n} [${a}]`,path:t};if(o)return{name:`${o}`,path:t};if(typeof l==="string"&&l){let i=l.split(/[\s_-]+/).map((r)=>r.replace(/[A-Z0-9]{5,}.*$/,"")).filter((r)=>r.length>2&&!/^[a-z]{1,2}$/.test(r)).slice(0,2);if(i.length>0)return{name:i.join(" "),path:t}}return{name:n==="div"?"container":n,path:t}}return{name:n,path:t}}function qi(e){let t=[],n=e.textContent?.trim();if(n&&n.length<100)t.push(n);let l=e.previousElementSibling;if(l){let a=l.textContent?.trim();if(a&&a.length<50)t.unshift(`[before: "${a.slice(0,40)}"]`)}let o=e.nextElementSibling;if(o){let a=o.textContent?.trim();if(a&&a.length<50)t.push(`[after: "${a.slice(0,40)}"]`)}return t.join(" ")}function vs(e){let t=Ya(e);if(!t)return"";let o=(e.getRootNode()instanceof ShadowRoot&&e.parentElement?Array.from(e.parentElement.children):Array.from(t.children)).filter((_)=>_!==e&&_ instanceof HTMLElement);if(o.length===0)return"";let a=o.slice(0,4).map((_)=>{let b=_.tagName.toLowerCase(),f=_.className,w="";if(typeof f==="string"&&f){let C=f.split(/\s+/).map((D)=>D.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find((D)=>D.length>2&&!/^[a-z]{1,2}$/.test(D));if(C)w=`.${C}`}if(b==="button"||b==="a"){let C=_.textContent?.trim().slice(0,15);if(C)return`${b}${w} "${C}"`}return`${b}${w}`}),r=t.tagName.toLowerCase();if(typeof t.className==="string"&&t.className){let _=t.className.split(/\s+/).map((b)=>b.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find((b)=>b.length>2&&!/^[a-z]{1,2}$/.test(b));if(_)r=`.${_}`}let s=t.children.length,g=s>a.length+1?` (${s} total in ${r})`:"";return a.join(", ")+g}function Wi(e){let t=e.className;if(typeof t!=="string"||!t)return"";return t.split(/\s+/).filter((l)=>l.length>0).map((l)=>{let o=l.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return o?o[1]:l}).filter((l,o,a)=>a.indexOf(l)===o).join(", ")}var rh=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),ob=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),ab=new Set(["input","textarea","select"]),ib=new Set(["img","video","canvas","svg"]),rb=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function ws(e){if(typeof window>"u")return{};let t=window.getComputedStyle(e),n={},l=e.tagName.toLowerCase(),o;if(ob.has(l))o=["color","fontSize","fontWeight","fontFamily","lineHeight"];else if(l==="button"||l==="a"&&e.getAttribute("role")==="button")o=["backgroundColor","color","padding","borderRadius","fontSize"];else if(ab.has(l))o=["backgroundColor","color","padding","borderRadius","fontSize"];else if(ib.has(l))o=["width","height","objectFit","borderRadius"];else if(rb.has(l))o=["display","padding","margin","gap","backgroundColor"];else o=["color","fontSize","margin","padding","backgroundColor"];for(let a of o){let i=a.replace(/([A-Z])/g,"-$1").toLowerCase(),r=t.getPropertyValue(i);if(r&&!rh.has(r))n[a]=r}return n}var sb=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function ks(e){if(typeof window>"u")return"";let t=window.getComputedStyle(e),n=[];for(let l of sb){let o=l.replace(/([A-Z])/g,"-$1").toLowerCase(),a=t.getPropertyValue(o);if(a&&!rh.has(a))n.push(`${o}: ${a}`)}return n.join("; ")}function cb(e){if(!e)return;let t={},n=e.split(";").map((l)=>l.trim()).filter(Boolean);for(let l of n){let o=l.indexOf(":");if(o>0){let a=l.slice(0,o).trim(),i=l.slice(o+1).trim();if(a&&i)t[a]=i}}return Object.keys(t).length>0?t:void 0}function Ss(e){let t=[],n=e.getAttribute("role"),l=e.getAttribute("aria-label"),o=e.getAttribute("aria-describedby"),a=e.getAttribute("tabindex"),i=e.getAttribute("aria-hidden");if(n)t.push(`role="${n}"`);if(l)t.push(`aria-label="${l}"`);if(o)t.push(`aria-describedby="${o}"`);if(a)t.push(`tabindex=${a}`);if(i==="true")t.push("aria-hidden");if(e.matches("a, button, input, select, textarea, [tabindex]"))t.push("focusable");return t.join(", ")}function Cs(e){let t=[],n=e;while(n&&n.tagName.toLowerCase()!=="html"){let l=n.tagName.toLowerCase(),o=l;if(n.id)o=`${l}#${n.id}`;else if(n.className&&typeof n.className==="string"){let i=n.className.split(/\s+/).map((r)=>r.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find((r)=>r.length>2);if(i)o=`${l}.${i}`}let a=Ya(n);if(!n.parentElement&&a)o=`⟨shadow⟩ ${o}`;t.unshift(o),n=a}return t.join(" > ")}var ub=new Set(["nav","header","main","section","article","footer","aside"]),Wu={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},R0={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},db=new Set(["script","style","noscript","link","meta"]),_b=40;function sh(e){let t=e;while(t&&t!==document.body&&t!==document.documentElement){let n=window.getComputedStyle(t).position;if(n==="fixed"||n==="sticky")return!0;t=t.parentElement}return!1}function ea(e){let t=e.tagName.toLowerCase();if(["nav","header","footer","main"].includes(t)){if(document.querySelectorAll(t).length===1)return t}if(e.id)return`#${CSS.escape(e.id)}`;if(e.className&&typeof e.className==="string"){let o=e.className.split(/\s+/).filter((a)=>a.length>0).find((a)=>a.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(a)&&!/^[a-z]{1,2}$/.test(a));if(o){let a=`${t}.${CSS.escape(o)}`;if(document.querySelectorAll(a).length===1)return a}}let n=e.parentElement;if(n){let o=Array.from(n.children).indexOf(e)+1;return`${n===document.body?"body":ea(n)} > ${t}:nth-child(${o})`}return t}function zs(e){let t=e.tagName.toLowerCase(),n=e.getAttribute("aria-label");if(n)return n;let l=e.getAttribute("role");if(l&&Wu[l])return Wu[l];if(R0[t])return R0[t];let o=e.querySelector("h1, h2, h3, h4, h5, h6");if(o){let i=o.textContent?.trim();if(i&&i.length<=50)return i;if(i)return i.slice(0,47)+"..."}let{name:a}=Ha(e);return a.charAt(0).toUpperCase()+a.slice(1)}function ch(e){let t=e.className;if(typeof t!=="string"||!t)return null;return t.split(/\s+/).map((l)=>l.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find((l)=>l.length>2&&!/^[a-z]{1,2}$/.test(l))||null}function uh(e){let t=e.textContent?.trim();if(!t)return null;let n=t.replace(/\s+/g," ");if(n.length<=30)return n;return n.slice(0,30)+"…"}function fb(){let e=document.querySelector("main")||document.body,t=Array.from(e.children),n=t;if(e!==document.body&&t.length<3)n=Array.from(document.body.children);let l=[];return n.forEach((o,a)=>{if(!(o instanceof HTMLElement))return;let i=o.tagName.toLowerCase();if(db.has(i))return;if(o.hasAttribute("data-feedback-toolbar"))return;if(o.closest("[data-feedback-toolbar]"))return;let r=window.getComputedStyle(o);if(r.display==="none"||r.visibility==="hidden")return;let s=o.getBoundingClientRect();if(s.height<_b)return;let g=ub.has(i),_=o.getAttribute("role")&&Wu[o.getAttribute("role")],b=i==="div"&&s.height>=60;if(!g&&!_&&!b)return;let f=window.scrollY,w=sh(o),C={x:s.x,y:w?s.y:s.y+f,width:s.width,height:s.height};l.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:zs(o),tagName:i,selector:ea(o),role:o.getAttribute("role"),className:ch(o),textSnippet:uh(o),originalRect:C,currentRect:{...C},originalIndex:a,isFixed:w})}),l}function hb(e){let t=window.scrollY,n=e.getBoundingClientRect(),l=sh(e),o={x:n.x,y:l?n.y:n.y+t,width:n.width,height:n.height},a=e.parentElement,i=0;if(a)i=Array.from(a.children).indexOf(e);return{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:zs(e),tagName:e.tagName.toLowerCase(),selector:ea(e),role:e.getAttribute("role"),className:ch(e),textSnippet:uh(e),originalRect:o,currentRect:{...o},originalIndex:i,isFixed:l}}var B0={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},H0=["nw","n","ne","e","se","s","sw","w"],Ms=24,$0=16,Es=5;function U0(e,t,n,l){let o=1/0,a=1/0,i=e.x,r=e.x+e.width,s=e.x+e.width/2,g=e.y,_=e.y+e.height,b=e.y+e.height/2,f=[];for(let z of t)if(!n.has(z.id))f.push(z.currentRect);if(l)f.push(...l);for(let z of f){let F=z.x,te=z.x+z.width,J=z.x+z.width/2,me=z.y,tt=z.y+z.height,ht=z.y+z.height/2;for(let Re of[i,r,s])for(let qe of[F,te,J]){let Te=qe-Re;if(Math.abs(Te)<Es&&Math.abs(Te)<Math.abs(o))o=Te}for(let Re of[g,_,b])for(let qe of[me,tt,ht]){let Te=qe-Re;if(Math.abs(Te)<Es&&Math.abs(Te)<Math.abs(a))a=Te}}let w=Math.abs(o)<Es?o:0,C=Math.abs(a)<Es?a:0,D=[],A=new Set,h=i+w,y=r+w,k=s+w,E=g+C,Q=_+C,ae=b+C;for(let z of f){let F=z.x,te=z.x+z.width,J=z.x+z.width/2,me=z.y,tt=z.y+z.height,ht=z.y+z.height/2;for(let Re of[F,J,te])for(let qe of[h,k,y])if(Math.abs(qe-Re)<0.5){let Te=`x:${Math.round(Re)}`;if(!A.has(Te))A.add(Te),D.push({axis:"x",pos:Re})}for(let Re of[me,ht,tt])for(let qe of[E,ae,Q])if(Math.abs(qe-Re)<0.5){let Te=`y:${Math.round(Re)}`;if(!A.has(Te))A.add(Te),D.push({axis:"y",pos:Re})}}return{dx:w,dy:C,guides:D}}var mb=new Set(["script","style","noscript","link","meta","br","hr"]);function Y0(e){let t=e;while(t&&t!==document.body&&t!==document.documentElement){if(t.closest("[data-feedback-toolbar]"))return null;if(mb.has(t.tagName.toLowerCase())){t=t.parentElement;continue}let n=t.getBoundingClientRect();if(n.width>=$0&&n.height>=$0)return t;t=t.parentElement}return null}function gb({rearrangeState:e,onChange:t,isDarkMode:n,exiting:l,className:o,blankCanvas:a,extraSnapRects:i,onSelectionChange:r,deselectSignal:s,onDragMove:g,onDragEnd:_,clearSignal:b}){let{sections:f}=e,w=ke.useRef(e);w.current=e;let[C,D]=ke.useState(new Set),[A,h]=ke.useState(!1),y=ke.useRef(b);ke.useEffect(()=>{if(b!==void 0&&b!==y.current){if(y.current=b,f.length>0)h(!0)}},[b,f.length]);let k=ke.useRef(s);ke.useEffect(()=>{if(s!==k.current)k.current=s,D(new Set)},[s]);let[E,Q]=ke.useState(null),[ae,z]=ke.useState(!1),F=ke.useRef(!1),te=ke.useCallback((M)=>{let L=f.find((H)=>H.id===M);if(!L)return;F.current=!!L.note,Q(M),z(!1)},[f]),J=ke.useCallback(()=>{if(!E)return;z(!0),he(()=>{Q(null),z(!1)},150)},[E]),me=ke.useCallback((M)=>{if(!E)return;t({...e,sections:f.map((L)=>L.id===E?{...L,note:M.trim()||void 0}:L)}),J()},[E,f,e,t,J]);ke.useEffect(()=>{if(l&&E)J()},[l]);let[tt,ht]=ke.useState(new Set),Re=ke.useRef(new Map),[qe,Te]=ke.useState(null),[et,G]=ke.useState(null),[pe,Ke]=ke.useState([]),[Bt,wn]=ke.useState(0),gn=ke.useRef(null),io=ke.useRef(new Set),Wn=ke.useRef(new Map),[ro,rl]=ke.useState(new Map),[Bl,so]=ke.useState(new Map),jo=ke.useRef(new Set),zn=ke.useRef(new Map),sl=ke.useRef(r);sl.current=r;let kn=ke.useRef(g);kn.current=g;let bl=ke.useRef(_);bl.current=_,ke.useEffect(()=>{if(a)D(new Set)},[a]);let[xl,ka]=ke.useState(()=>!e.sections.some((M)=>{let{originalRect:L,currentRect:H}=M;return Math.abs(L.x-H.x)>1||Math.abs(L.y-H.y)>1||Math.abs(L.width-H.width)>1||Math.abs(L.height-H.height)>1}));ke.useEffect(()=>{if(!xl){let M=he(()=>ka(!0),380);return()=>clearTimeout(M)}},[]);let cl=ke.useRef(new Set);ke.useEffect(()=>{cl.current=new Set(f.map((M)=>M.selector))},[f]),ke.useEffect(()=>{let M=()=>wn(window.scrollY);return M(),window.addEventListener("scroll",M,{passive:!0}),window.addEventListener("resize",M,{passive:!0}),()=>{window.removeEventListener("scroll",M),window.removeEventListener("resize",M)}},[]),ke.useEffect(()=>{let M=(L)=>{if(gn.current){Te(null);return}let H=document.elementFromPoint(L.clientX,L.clientY);if(!H){Te(null);return}if(H.closest("[data-feedback-toolbar]")){Te(null);return}if(H.closest("[data-design-placement]")){Te(null);return}if(H.closest("[data-annotation-popup]")){Te(null);return}let Y=Y0(H);if(!Y){Te(null);return}for(let ie of cl.current)try{let X=document.querySelector(ie);if(X&&(X===Y||Y.contains(X))){Te(null);return}}catch{}let P=Y.getBoundingClientRect();Te({x:P.x,y:P.y,w:P.width,h:P.height})};return document.addEventListener("mousemove",M,{passive:!0}),()=>document.removeEventListener("mousemove",M)},[f]),ke.useEffect(()=>{let M=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=M}},[]),ke.useEffect(()=>{let M=(L)=>{if(gn.current)return;if(L.button!==0)return;let H=L.target;if(!H||H.closest("[data-feedback-toolbar]"))return;if(H.closest("[data-design-placement]"))return;if(H.closest("[data-annotation-popup]"))return;let Y=Y0(H),P=!1;if(Y)for(let X of cl.current)try{let se=document.querySelector(X);if(se&&(se===Y||Y.contains(se))){P=!0;break}}catch{}let ie=!!(L.shiftKey||L.metaKey||L.ctrlKey);if(Y&&!P){L.preventDefault(),L.stopPropagation();let X=hb(Y),se=[...f,X],Me=[...e.originalOrder,X.id];t({...e,sections:se,originalOrder:Me});let We=new Set([X.id]);D(We),sl.current?.(We,ie),Te(null);let{clientX:lt,clientY:ce}=L,st={x:X.currentRect.x,y:X.currentRect.y},He=X.originalRect,Ae=!1,ue=0,ct=0;gn.current="move";let Ve=(Je)=>{let ve=Je.clientX-lt,wt=Je.clientY-ce;if(!Ae&&(Math.abs(ve)>2||Math.abs(wt)>2))Ae=!0;if(!Ae)return;let nn={x:st.x+ve,y:st.y+wt,width:X.currentRect.width,height:X.currentRect.height},Qn=U0(nn,se,new Set([X.id]),i);Ke(Qn.guides);let vl=ve+Qn.dx,Sn=wt+Qn.dy;ue=vl,ct=Sn;let Hl=document.querySelector(`[data-rearrange-section="${X.id}"]`);if(Hl)Hl.style.transform=`translate(${vl}px, ${Sn}px)`;rl(new Map([[X.id,{x:st.x+vl,y:st.y+Sn,width:X.currentRect.width,height:X.currentRect.height}]])),kn.current?.(vl,Sn)},Le=()=>{window.removeEventListener("mousemove",Ve),window.removeEventListener("mouseup",Le),gn.current=null,Ke([]),rl(new Map);let Je=document.querySelector(`[data-rearrange-section="${X.id}"]`);if(Je)Je.style.transform="";if(Ae)t({...e,sections:se.map((ve)=>ve.id===X.id?{...ve,currentRect:{...ve.currentRect,x:Math.max(0,st.x+ue),y:Math.max(0,st.y+ct)}}:ve),originalOrder:Me});bl.current?.(ue,ct,Ae)};window.addEventListener("mousemove",Ve),window.addEventListener("mouseup",Le)}else if(P&&Y){L.preventDefault();for(let X of f)try{let se=document.querySelector(X.selector);if(se&&se===Y){let Me=new Set([X.id]);D(Me),sl.current?.(Me,ie);return}}catch{}if(!ie)D(new Set),sl.current?.(new Set,!1)}else if(!ie)D(new Set),sl.current?.(new Set,!1)};return document.addEventListener("mousedown",M,!0),()=>document.removeEventListener("mousedown",M,!0)},[f,e,t]),ke.useEffect(()=>{let M=(L)=>{let H=L.target;if(H.tagName==="INPUT"||H.tagName==="TEXTAREA"||H.isContentEditable)return;if((L.key==="Backspace"||L.key==="Delete")&&C.size>0){L.preventDefault();let Y=new Set(C);ht((P)=>{let ie=new Set(P);for(let X of Y)ie.add(X);return ie}),D(new Set),he(()=>{let P=w.current;t({...P,sections:P.sections.filter((ie)=>!Y.has(ie.id)),originalOrder:P.originalOrder.filter((ie)=>!Y.has(ie))}),ht((ie)=>{let X=new Set(ie);for(let se of Y)X.delete(se);return X})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(L.key)&&C.size>0){L.preventDefault();let Y=L.shiftKey?20:1,P=L.key==="ArrowLeft"?-Y:L.key==="ArrowRight"?Y:0,ie=L.key==="ArrowUp"?-Y:L.key==="ArrowDown"?Y:0;t({...e,sections:f.map((X)=>C.has(X.id)?{...X,currentRect:{...X.currentRect,x:Math.max(0,X.currentRect.x+P),y:Math.max(0,X.currentRect.y+ie)}}:X)});return}if(L.key==="Escape"&&C.size>0)D(new Set)};return document.addEventListener("keydown",M),()=>document.removeEventListener("keydown",M)},[C,f,e,t]);let Be=ke.useCallback((M,L)=>{if(M.button!==0)return;let H=M.target;if(H.closest(`.${O.handle}`)||H.closest(`.${O.deleteButton}`))return;M.preventDefault(),M.stopPropagation();let Y;if(M.shiftKey||M.metaKey||M.ctrlKey)if(Y=new Set(C),Y.has(L))Y.delete(L);else Y.add(L);else if(!C.has(L))Y=new Set([L]);else Y=new Set(C);if(D(Y),Y.size!==C.size||[...Y].some((Ae)=>!C.has(Ae)))sl.current?.(Y,!!(M.shiftKey||M.metaKey||M.ctrlKey));let{clientX:ie,clientY:X}=M,se=new Map;for(let Ae of f)if(Y.has(Ae.id))se.set(Ae.id,{x:Ae.currentRect.x,y:Ae.currentRect.y});gn.current="move";let Me=!1,We=0,lt=0,ce=new Map;for(let Ae of f)if(Y.has(Ae.id)){let ue=document.querySelector(`[data-rearrange-section="${Ae.id}"]`);ce.set(Ae.id,{outlineEl:ue,curW:Ae.currentRect.width,curH:Ae.currentRect.height})}let st=(Ae)=>{let ue=Ae.clientX-ie,ct=Ae.clientY-X;if(ue===0&&ct===0)return;Me=!0;let Ve=1/0,Le=1/0,Je=-1/0,ve=-1/0;for(let[Sn,{curW:Hl,curH:os}]of ce){let Yt=se.get(Sn);if(!Yt)continue;let $l=Yt.x+ue,as=Yt.y+ct;Ve=Math.min(Ve,$l),Le=Math.min(Le,as),Je=Math.max(Je,$l+Hl),ve=Math.max(ve,as+os)}let wt=U0({x:Ve,y:Le,width:Je-Ve,height:ve-Le},f,Y,i),nn=ue+wt.dx,Qn=ct+wt.dy;We=nn,lt=Qn,Ke(wt.guides);for(let[,{outlineEl:Sn}]of ce)if(Sn)Sn.style.transform=`translate(${nn}px, ${Qn}px)`;let vl=new Map;for(let[Sn,{curW:Hl,curH:os}]of ce){let Yt=se.get(Sn);if(Yt){let $l={x:Math.max(0,Yt.x+nn),y:Math.max(0,Yt.y+Qn),width:Hl,height:os};vl.set(Sn,$l)}}rl(vl),kn.current?.(nn,Qn)},He=(Ae)=>{window.removeEventListener("mousemove",st),window.removeEventListener("mouseup",He),gn.current=null,Ke([]),rl(new Map);for(let[,{outlineEl:ue}]of ce)if(ue)ue.style.transform="";if(Me){let ue=Ae.clientX-ie,ct=Ae.clientY-X;if(Math.abs(ue)<5&&Math.abs(ct)<5)t({...e,sections:f.map((Ve)=>{let Le=se.get(Ve.id);if(!Le)return Ve;return{...Ve,currentRect:{...Ve.currentRect,x:Le.x,y:Le.y}}})});else{t({...e,sections:f.map((Ve)=>{let Le=se.get(Ve.id);if(!Le)return Ve;return{...Ve,currentRect:{...Ve.currentRect,x:Math.max(0,Le.x+We),y:Math.max(0,Le.y+lt)}}})}),bl.current?.(We,lt,!0);return}}bl.current?.(0,0,!1)};window.addEventListener("mousemove",st),window.addEventListener("mouseup",He)},[C,f,e,t]),q=ke.useCallback((M,L,H)=>{M.preventDefault(),M.stopPropagation();let Y=f.find((He)=>He.id===L);if(!Y)return;D(new Set([L])),gn.current="resize";let{clientX:P,clientY:ie}=M,X={...Y.currentRect},se=Y.originalRect,Me=X.width/X.height,We={...X},lt=document.querySelector(`[data-rearrange-section="${L}"]`),ce=(He)=>{let Ae=He.clientX-P,ue=He.clientY-ie,{x:ct,y:Ve,width:Le,height:Je}=X;if(H.includes("e"))Le=Math.max(Ms,X.width+Ae);if(H.includes("w"))Le=Math.max(Ms,X.width-Ae),ct=X.x+X.width-Le;if(H.includes("s"))Je=Math.max(Ms,X.height+ue);if(H.includes("n"))Je=Math.max(Ms,X.height-ue),Ve=X.y+X.height-Je;if(He.shiftKey)if(H.length===2){let wt=Math.abs(Le-X.width),nn=Math.abs(Je-X.height);if(wt>nn)Je=Le/Me;else Le=Je*Me;if(H.includes("w"))ct=X.x+X.width-Le;if(H.includes("n"))Ve=X.y+X.height-Je}else{if(H==="e"||H==="w")Je=Le/Me;else Le=Je*Me;if(H==="w")ct=X.x+X.width-Le;if(H==="n")Ve=X.y+X.height-Je}if(We={x:ct,y:Ve,width:Le,height:Je},lt)lt.style.left=`${ct}px`,lt.style.top=`${Ve-Bt}px`,lt.style.width=`${Le}px`,lt.style.height=`${Je}px`;G({x:He.clientX+12,y:He.clientY+12,text:`${Math.round(Le)} × ${Math.round(Je)}`}),rl(new Map([[L,We]]))},st=()=>{window.removeEventListener("mousemove",ce),window.removeEventListener("mouseup",st),G(null),gn.current=null,rl(new Map),t({...e,sections:f.map((He)=>He.id===L?{...He,currentRect:We}:He)})};window.addEventListener("mousemove",ce),window.addEventListener("mouseup",st)},[f,e,t,Bt]),_e=ke.useCallback((M)=>{ht((L)=>{let H=new Set(L);return H.add(M),H}),D((L)=>{let H=new Set(L);return H.delete(M),H}),he(()=>{let L=w.current;t({...L,sections:L.sections.filter((H)=>H.id!==M),originalOrder:L.originalOrder.filter((H)=>H!==M)}),ht((H)=>{let Y=new Set(H);return Y.delete(M),Y})},180)},[t]),be=(M)=>{let{originalRect:L,currentRect:H}=M;return Math.abs(L.x-H.x)>1||Math.abs(L.y-H.y)>1||Math.abs(L.width-H.width)>1||Math.abs(L.height-H.height)>1},ze=(M)=>{let{originalRect:L,currentRect:H}=M;return Math.abs(L.x-H.x)>1||Math.abs(L.y-H.y)>1},xe=(M)=>{let{originalRect:L,currentRect:H}=M;return Math.abs(L.width-H.width)>1||Math.abs(L.height-H.height)>1};for(let M of f)if(!Wn.current.has(M.id)){if(ze(M))Wn.current.set(M.id,"move");else if(xe(M))Wn.current.set(M.id,"resize")}for(let M of Wn.current.keys())if(!f.some((L)=>L.id===M))Wn.current.delete(M);let nt=f.filter((M)=>{try{if(tt.has(M.id))return!0;if(C.has(M.id))return!0;let L=document.querySelector(M.selector);if(!L)return!1;let H=L.getBoundingClientRect(),Y=M.originalRect;return Math.abs(H.width-Y.width)+Math.abs(H.height-Y.height)<200}catch{return!1}}),rt=nt.filter((M)=>be(M)),Fe=nt.filter((M)=>!be(M)),Ye=new Set(rt.map((M)=>M.id));for(let M of io.current)if(!Ye.has(M))io.current.delete(M);let ge=[...Ye].sort().join(",");for(let M of rt)zn.current.set(M.id,{currentRect:M.currentRect,originalRect:M.originalRect,isFixed:M.isFixed});return ke.useEffect(()=>{let M=jo.current;jo.current=Ye;let L=new Map;for(let H of M)if(!Ye.has(H)){if(!f.some((P)=>P.id===H))continue;let Y=zn.current.get(H);if(Y)L.set(H,{orig:Y.originalRect,target:Y.currentRect,isFixed:Y.isFixed}),zn.current.delete(H)}if(L.size>0){so((Y)=>{let P=new Map(Y);for(let[ie,X]of L)P.set(ie,X);return P});let H=he(()=>{so((Y)=>{let P=new Map(Y);for(let ie of L.keys())P.delete(ie);return P})},250);return()=>clearTimeout(H)}},[ge,f]),Ze.jsxs(Ze.Fragment,{children:[Ze.jsxs("div",{className:`${O.rearrangeOverlay} ${!n?O.light:""} ${l?O.overlayExiting:""}${o?` ${o}`:""}`,"data-feedback-toolbar":!0,children:[qe&&Ze.jsx("div",{className:O.hoverHighlight,style:{left:qe.x,top:qe.y,width:qe.w,height:qe.h}}),Fe.map((M)=>{let L=M.currentRect,H=M.isFixed?L.y:L.y-Bt,Y=B0,P=C.has(M.id);return Ze.jsxs("div",{"data-rearrange-section":M.id,className:`${O.sectionOutline} ${P?O.selected:""} ${A||l||tt.has(M.id)?O.exiting:""}`,style:{left:L.x,top:H,width:L.width,height:L.height,borderColor:Y.border,backgroundColor:Y.bg,...xl?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:(ie)=>Be(ie,M.id),onDoubleClick:()=>te(M.id),children:[Ze.jsx("span",{className:O.sectionLabel,style:{backgroundColor:Y.pill},children:M.label}),Ze.jsx("span",{className:`${O.sectionAnnotation} ${M.note?O.annotationVisible:""}`,children:(()=>{if(M.note)Re.current.set(M.id,M.note);return M.note||Re.current.get(M.id)||""})()}),Ze.jsxs("span",{className:O.sectionDimensions,children:[Math.round(L.width)," × ",Math.round(L.height)]}),Ze.jsx("div",{className:O.deleteButton,onMouseDown:(ie)=>ie.stopPropagation(),onClick:()=>_e(M.id),children:"✕"}),H0.map((ie)=>Ze.jsx("div",{className:`${O.handle} ${O[`handle${ie.charAt(0).toUpperCase()}${ie.slice(1)}`]}`,onMouseDown:(X)=>q(X,M.id,ie)},ie))]},M.id)}),rt.map((M)=>{let L=M.currentRect,H=M.isFixed?L.y:L.y-Bt,Y=C.has(M.id),P=ze(M),ie=xe(M);if(a&&!Y)return null;let se=!io.current.has(M.id);if(se)io.current.add(M.id);return Ze.jsxs("div",{"data-rearrange-section":M.id,className:`${O.ghostOutline} ${Y?O.selected:""} ${A||l||tt.has(M.id)?O.exiting:""}`,style:{left:L.x,top:H,width:L.width,height:L.height,...xl?{}:{opacity:0,animation:"none",transition:"none"},...!se?{animation:"none"}:{}},onMouseDown:(Me)=>Be(Me,M.id),onDoubleClick:()=>te(M.id),children:[Ze.jsx("span",{className:O.sectionLabel,style:{backgroundColor:B0.pill},children:M.label}),Ze.jsx("span",{className:`${O.sectionAnnotation} ${M.note?O.annotationVisible:""}`,children:(()=>{if(M.note)Re.current.set(M.id,M.note);return M.note||Re.current.get(M.id)||""})()}),Ze.jsxs("span",{className:O.sectionDimensions,children:[Math.round(L.width)," × ",Math.round(L.height)]}),Ze.jsx("div",{className:O.deleteButton,onMouseDown:(Me)=>Me.stopPropagation(),onClick:()=>_e(M.id),children:"✕"}),H0.map((Me)=>Ze.jsx("div",{className:`${O.handle} ${O[`handle${Me.charAt(0).toUpperCase()}${Me.slice(1)}`]}`,onMouseDown:(We)=>q(We,M.id,Me)},Me)),Ze.jsx("span",{className:O.ghostBadge,children:(()=>{let Me=Wn.current.get(M.id);if(P&&ie){let[We,lt]=Me==="resize"?["Resize","Move"]:["Move","Resize"];return Ze.jsxs(Ze.Fragment,{children:["Suggested ",We," ",Ze.jsxs("span",{className:O.ghostBadgeExtra,children:["& ",lt]})]})}return`Suggested ${ie?"Resize":"Move"}`})()})]},M.id)})]}),!a&&(()=>{let M=[];for(let L of rt){let H=ro.get(L.id);M.push({id:L.id,orig:L.originalRect,target:H||L.currentRect,isFixed:L.isFixed,isSelected:C.has(L.id),isExiting:tt.has(L.id)})}for(let[L,H]of ro)if(!M.some((Y)=>Y.id===L)){let Y=f.find((P)=>P.id===L);if(Y)M.push({id:L,orig:Y.originalRect,target:H,isFixed:Y.isFixed,isSelected:C.has(L)})}for(let[L,H]of Bl)if(!M.some((Y)=>Y.id===L))M.push({id:L,orig:H.orig,target:H.target,isFixed:H.isFixed,isSelected:!1,isExiting:!0});if(M.length===0)return null;return Ze.jsxs("svg",{className:`${O.connectorSvg} ${A||l?O.connectorExiting:""}`,children:[M.map(({id:L,orig:H,target:Y,isFixed:P,isSelected:ie,isExiting:X})=>{let se=H.x+H.width/2,Me=(P?H.y:H.y-Bt)+H.height/2,We=Y.x+Y.width/2,lt=(P?Y.y:Y.y-Bt)+Y.height/2,ce=We-se,st=lt-Me,He=Math.sqrt(ce*ce+st*st);if(He<2)return null;let Ae=Math.min(1,He/40),ue=Math.min(He*0.3,60),ct=He>0?-st/He:0,Ve=He>0?ce/He:0,Le=(se+We)/2+ct*ue,Je=(Me+lt)/2+Ve*ue,ve=ro.has(L),wt=ve||ie?1:0.4,nn=ve||ie?1:0.5;return Ze.jsxs("g",{className:X?O.connectorExiting:"",children:[Ze.jsx("path",{className:O.connectorLine,d:`M ${se} ${Me} Q ${Le} ${Je} ${We} ${lt}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:wt*Ae}),Ze.jsx("circle",{className:O.connectorDot,cx:se,cy:Me,r:4*Ae,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:nn*Ae,filter:"url(#connDotShadow)"}),Ze.jsx("circle",{className:O.connectorDot,cx:We,cy:lt,r:4*Ae,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:nn*Ae,filter:"url(#connDotShadow)"})]},`conn-${L}`)}),Ze.jsx("defs",{children:Ze.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:Ze.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),E&&(()=>{let M=f.find((lt)=>lt.id===E);if(!M)return null;let L=M.currentRect,H=M.isFixed?L.y:L.y-Bt,Y=L.x+L.width/2,P=H-8,ie=H+L.height+8,X=P>200,se=ie<window.innerHeight-100,Me=Math.max(160,Math.min(window.innerWidth-160,Y)),We;if(X)We={left:Me,bottom:window.innerHeight-P};else if(se)We={left:Me,top:ie};else We={left:Me,top:Math.max(80,window.innerHeight/2-80)};return Ze.jsx(Ns,{element:M.label,placeholder:"Add a note about this section",initialValue:M.note??"",submitLabel:F.current?"Save":"Set",onSubmit:me,onCancel:J,onDelete:F.current?()=>{me("")}:void 0,isExiting:ae,lightMode:!n,style:We})})(),et&&Ze.jsx("div",{className:O.sizeIndicator,style:{left:et.x,top:et.y},"data-feedback-toolbar":!0,children:et.text}),pe.map((M,L)=>Ze.jsx("div",{className:O.guideLine,style:M.axis==="x"?{position:"fixed",left:M.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:M.pos-Bt,width:"100vw",height:1}},`${M.axis}-${M.pos}-${L}`))]})}var Qu=new Set(["script","style","noscript","link","meta","br","hr"]);function pb(){let e=document.querySelector("main")||document.body,t=[],n=Array.from(e.children),l=e!==document.body&&n.length<3?Array.from(document.body.children):n;for(let o of l){if(!(o instanceof HTMLElement))continue;if(Qu.has(o.tagName.toLowerCase()))continue;if(o.hasAttribute("data-feedback-toolbar"))continue;let a=window.getComputedStyle(o);if(a.display==="none"||a.visibility==="hidden")continue;let i=o.getBoundingClientRect();if(i.height<10||i.width<10)continue;t.push({label:zs(o),selector:ea(o),top:i.top,bottom:i.bottom,left:i.left,right:i.right,area:i.width*i.height});for(let r of Array.from(o.children)){if(!(r instanceof HTMLElement))continue;if(Qu.has(r.tagName.toLowerCase()))continue;if(r.hasAttribute("data-feedback-toolbar"))continue;let s=window.getComputedStyle(r);if(s.display==="none"||s.visibility==="hidden")continue;let g=r.getBoundingClientRect();if(g.height<10||g.width<10)continue;t.push({label:zs(r),selector:ea(r),top:g.top,bottom:g.bottom,left:g.left,right:g.right,area:g.width*g.height})}}return t}function yb(e){let t=window.scrollY;return e.map(({label:n,selector:l,rect:o})=>{let a=o.y-t;return{label:n,selector:l,top:a,bottom:a+o.height,left:o.x,right:o.x+o.width,area:o.width*o.height}})}function bb(e){let t=window.scrollY,n=e.y-t,l=e.x;return{top:n,bottom:n+e.height,left:l,right:l+e.width,area:e.width*e.height}}function Gu(e,t){let n=t?yb(t):pb(),l=bb(e),o=null,a=null,i=null,r=null,s=null;for(let C of n){if(Math.abs(C.left-l.left)<2&&Math.abs(C.top-l.top)<2&&Math.abs(C.right-C.left-e.width)<2&&Math.abs(C.bottom-C.top-e.height)<2)continue;if(C.left<=l.left+2&&C.right>=l.right-2&&C.top<=l.top+2&&C.bottom>=l.bottom-2&&C.area>l.area*1.5){if(!s||C.area<s._area)s={label:C.label,selector:C.selector,_area:C.area}}let D=l.right>C.left+5&&l.left<C.right-5,A=l.bottom>C.top+5&&l.top<C.bottom-5;if(D&&C.bottom<=l.top+5){let h=Math.round(l.top-C.bottom);if(!o||h<o._dist)o={label:C.label,selector:C.selector,gap:Math.max(0,h),_dist:h}}if(D&&C.top>=l.bottom-5){let h=Math.round(C.top-l.bottom);if(!a||h<a._dist)a={label:C.label,selector:C.selector,gap:Math.max(0,h),_dist:h}}if(A&&C.right<=l.left+5){let h=Math.round(l.left-C.right);if(!i||h<i._dist)i={label:C.label,selector:C.selector,gap:Math.max(0,h),_dist:h}}if(A&&C.left>=l.right-5){let h=Math.round(C.left-l.right);if(!r||h<r._dist)r={label:C.label,selector:C.selector,gap:Math.max(0,h),_dist:h}}}let{innerWidth:g,innerHeight:_}=window,b=vb(e,g),f=(C)=>{if(!C)return null;return{label:C.label,selector:C.selector,gap:C.gap}},w=xb(l,e,g,_,s?{label:s.label,selector:s.selector,_area:s._area}:null,n);return{above:f(o),below:f(a),left:f(i),right:f(r),alignment:b,containedIn:s?{label:s.label,selector:s.selector}:null,outOfBounds:w}}function xb(e,t,n,l,o,a){let i={},r=!1,s=[];if(e.left<-2)s.push("left");if(e.right>n+2)s.push("right");if(e.top<-2)s.push("top");if(e.bottom>l+2)s.push("bottom");if(s.length>0)i.viewport=s,r=!0;if(o){let g=a.find((_)=>_.label===o.label&&_.selector===o.selector&&Math.abs(_.area-o._area)<10);if(g){let _=[];if(e.left<g.left-2)_.push("left");if(e.right>g.right+2)_.push("right");if(e.top<g.top-2)_.push("top");if(e.bottom>g.bottom+2)_.push("bottom");if(_.length>0)i.container={label:o.label,edges:_},r=!0}}return r?i:null}function vb(e,t){if(e.width/t>0.85)return"full-width";let l=e.x+e.width/2,o=t/2,a=l-o,i=t*0.08;if(Math.abs(a)<i)return"center";if(a<0)return"left";return"right"}function dh(e){switch(e){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function _h(e,t={}){let n=[];if(e.above)n.push(`Below \`${e.above.label}\`${e.above.gap>0?` (${e.above.gap}px gap)`:""}`);if(e.below)n.push(`Above \`${e.below.label}\`${e.below.gap>0?` (${e.below.gap}px gap)`:""}`);if(t.includeLeftRight){if(e.left)n.push(`Right of \`${e.left.label}\`${e.left.gap>0?` (${e.left.gap}px gap)`:""}`);if(e.right)n.push(`Left of \`${e.right.label}\`${e.right.gap>0?` (${e.right.gap}px gap)`:""}`)}let l=dh(e.alignment);if(e.containedIn)n.push(`${l.charAt(0).toUpperCase()+l.slice(1)} in \`${e.containedIn.label}\``);else n.push(`${l.charAt(0).toUpperCase()+l.slice(1)} in page`);if(t.includePixelRef&&t.pixelRef)n.push(`Pixel ref: \`${t.pixelRef}\``);if(e.outOfBounds){if(e.outOfBounds.viewport)n.push(`**Outside viewport** (${e.outOfBounds.viewport.join(", ")} edge${e.outOfBounds.viewport.length>1?"s":""})`);if(e.outOfBounds.container)n.push(`**Outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(", ")} edge${e.outOfBounds.container.edges.length>1?"s":""})`)}return n}function wb(e,t,n){let l=[];if(e.above)l.push(`below \`${e.above.label}\``);if(e.below)l.push(`above \`${e.below.label}\``);if(e.left)l.push(`right of \`${e.left.label}\``);if(e.right)l.push(`left of \`${e.right.label}\``);if(e.containedIn)l.push(`inside \`${e.containedIn.label}\``);if(l.push(dh(e.alignment)),e.outOfBounds?.viewport)l.push(`**outside viewport** (${e.outOfBounds.viewport.join(", ")})`);if(e.outOfBounds?.container)l.push(`**outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(", ")})`);let o=n?`, ${Math.round(n.width)}×${Math.round(n.height)}px`:"";return`at (${Math.round(t.x)}, ${Math.round(t.y)})${o}: ${l.join(", ")}`}var j0=15;function I0(e){if(e.length<2)return[];let t=[],n=new Set;for(let l=0;l<e.length;l++){if(n.has(l))continue;let o=[l];for(let a=l+1;a<e.length;a++){if(n.has(a))continue;if(Math.abs(e[l].rect.y-e[a].rect.y)<j0)o.push(a)}if(o.length>=2){let a=o.map((s)=>e[s]);a.sort((s,g)=>s.rect.x-g.rect.x);let i=[];for(let s=0;s<a.length-1;s++)i.push(Math.round(a[s+1].rect.x-(a[s].rect.x+a[s].rect.width)));let r=Math.round(a.reduce((s,g)=>s+g.rect.y,0)/a.length);t.push({labels:a.map((s)=>s.label),type:"row",sharedEdge:r,gaps:i,avgGap:i.length?Math.round(i.reduce((s,g)=>s+g,0)/i.length):0}),o.forEach((s)=>n.add(s))}}for(let l=0;l<e.length;l++){if(n.has(l))continue;let o=[l];for(let a=l+1;a<e.length;a++){if(n.has(a))continue;if(Math.abs(e[l].rect.x-e[a].rect.x)<j0)o.push(a)}if(o.length>=2){let a=o.map((s)=>e[s]);a.sort((s,g)=>s.rect.y-g.rect.y);let i=[];for(let s=0;s<a.length-1;s++)i.push(Math.round(a[s+1].rect.y-(a[s].rect.y+a[s].rect.height)));let r=Math.round(a.reduce((s,g)=>s+g.rect.x,0)/a.length);t.push({labels:a.map((s)=>s.label),type:"column",sharedEdge:r,gaps:i,avgGap:i.length?Math.round(i.reduce((s,g)=>s+g,0)/i.length):0}),o.forEach((s)=>n.add(s))}}return t}function kb(e){if(e.length<2)return[];let t=I0(e.map((i)=>({label:i.label,rect:i.originalRect}))),n=I0(e.map((i)=>({label:i.label,rect:i.currentRect}))),l=[],o=new Set;for(let i of t){let r=new Set(i.labels),s=null,g=0;for(let _ of n){let b=_.labels.filter((f)=>r.has(f)).length;if(b>=2&&b>g)s=_,g=b}if(s){let _=s.labels.filter((f)=>r.has(f)),b=_.join(", ");if(s.type!==i.type){let f=i.type==="row"?"y":"x",w=s.type==="row"?"y":"x";l.push(`**${b}**: ${i.type} (${f}≈${i.sharedEdge}, ${i.avgGap}px gaps) → ${s.type} (${w}≈${s.sharedEdge}, ${s.avgGap}px gaps)`)}else if(Math.abs(i.sharedEdge-s.sharedEdge)>20||Math.abs(i.avgGap-s.avgGap)>5){let f=i.type==="row"?"y":"x",w=Math.abs(i.sharedEdge-s.sharedEdge)>20?` ${f}: ${i.sharedEdge} → ${s.sharedEdge}`:"",C=Math.abs(i.avgGap-s.avgGap)>5?` gaps: ${i.avgGap}px → ${s.avgGap}px`:"";l.push(`**${b}**: ${i.type} shifted —${w}${C}`)}_.forEach((f)=>o.add(f))}else{let _=i.labels.join(", "),b=i.type==="row"?"y":"x";l.push(`**${_}**: ${i.type} (${b}≈${i.sharedEdge}) dissolved`),i.labels.forEach((f)=>o.add(f))}}for(let i of n){if(i.labels.every((g)=>o.has(g)))continue;if(i.labels.filter((g)=>!o.has(g)).length<2)continue;if(!t.some((g)=>g.labels.filter((b)=>i.labels.includes(b)).length>=2)){let g=i.type==="row"?"y":"x";l.push(`**${i.labels.join(", ")}**: new ${i.type} (${g}≈${i.sharedEdge}, ${i.avgGap}px gaps)`),i.labels.forEach((_)=>o.add(_))}}let a=e.filter((i)=>!o.has(i.label));if(a.length>=2){let i={};for(let r of a){let s=Math.round(r.currentRect.x/5)*5;(i[s]??(i[s]=[])).push(r.label)}for(let[r,s]of Object.entries(i))if(s.length>=2)l.push(`**${s.join(", ")}**: shared left edge at x≈${r}`)}return l}function fh(e){if(typeof document>"u")return{viewport:e,contentArea:null};let t=[],n=new Set,l=(r)=>{if(n.has(r))return;if(!(r instanceof HTMLElement))return;if(r.hasAttribute("data-feedback-toolbar"))return;if(Qu.has(r.tagName.toLowerCase()))return;n.add(r),t.push(r)},o=document.querySelector("main");if(o)l(o);let a=document.querySelector("[role='main']");if(a)l(a);for(let r of Array.from(document.body.children))if(l(r),r.children){for(let s of Array.from(r.children))if(l(s),s.children)for(let g of Array.from(s.children))l(g)}let i=null;for(let r of t){let s=r.getBoundingClientRect();if(s.height<50)continue;let g=getComputedStyle(r);if(g.maxWidth&&g.maxWidth!=="none"&&g.maxWidth!=="0px"){if(!i||s.width<i.rect.width)i={el:r,rect:s};continue}if(!i&&s.width<e.width-20&&s.width>100)i={el:r,rect:s}}if(i){let{el:r,rect:s}=i;return{viewport:e,contentArea:{width:Math.round(s.width),left:Math.round(s.left),right:Math.round(s.right),centerX:Math.round(s.left+s.width/2),selector:ea(r)}}}return{viewport:e,contentArea:null}}function Sb(e){if(typeof document>"u")return null;let t=document.querySelector(e);if(!t?.parentElement)return null;let n=getComputedStyle(t.parentElement),l={parentDisplay:n.display,parentSelector:ea(t.parentElement)};if(n.display.includes("flex"))l.flexDirection=n.flexDirection;if(n.display.includes("grid")&&n.gridTemplateColumns!=="none")l.gridCols=n.gridTemplateColumns;if(n.gap&&n.gap!=="normal"&&n.gap!=="0px")l.gap=n.gap;return l}function hh(e,t){let n=t.contentArea,l=n?n.width:t.viewport.width,o=n?n.left:0,a=n?n.centerX:Math.round(t.viewport.width/2),i=Math.round(e.x-o),r=Math.round(o+l-(e.x+e.width)),s=(e.width/l*100).toFixed(1),g=e.x+e.width/2,_=Math.abs(g-a)<20,b=e.width/l>0.95,f=[];if(b)f.push("`width: 100%` of container");else f.push(`left \`${i}px\` in container, right \`${r}px\`, width \`${s}%\` (\`${Math.round(e.width)}px\`)`);if(_&&!b)f.push("centered — `margin-inline: auto`");return f.join(" — ")}function mh(e){let{viewport:t,contentArea:n}=e,l=`### Reference Frame
`;if(l+=`- Viewport: \`${t.width}×${t.height}px\`
`,n){let o=n;l+=`- Content area: \`${o.width}px\` wide, left edge at \`x=${o.left}\`, right at \`x=${o.right}\` (\`${o.selector}\`)
`,l+=`- Pixel → CSS translation:
`,l+=`  - **Horizontal position in container**: \`element.x - ${o.left}\` → use as \`margin-left\` or \`left\`
`,l+=`  - **Width as % of container**: \`element.width / ${o.width} × 100\` → use as \`width: X%\`
`,l+="  - **Vertical gap between elements**: `nextElement.y - (prevElement.y + prevElement.height)` → use as `margin-top` or `gap`\n",l+=`  - **Centered**: if \`|element.centerX - ${o.centerX}| < 20px\` → use \`margin-inline: auto\`
`}else l+=`- No distinct content container — elements positioned relative to full viewport
`,l+=`- Pixel → CSS translation:
`,l+=`  - **Width as % of viewport**: \`element.width / ${t.width} × 100\` → use as \`width: X%\`
`,l+=`  - **Centered**: if \`|(element.x + element.width/2) - ${Math.round(t.width/2)}| < 20px\` → use \`margin-inline: auto\`
`;return l+=`
`,l}function Cb(e){let t=Sb(e);if(!t)return null;let n=`\`${t.parentDisplay}\``;if(t.flexDirection)n+=`, flex-direction: \`${t.flexDirection}\``;if(t.gridCols)n+=`, grid-template-columns: \`${t.gridCols}\``;if(t.gap)n+=`, gap: \`${t.gap}\``;return`Parent: ${n} (\`${t.parentSelector}\`)`}function X0(e,t,n,l="standard"){if(e.length===0)return"";let o=[...e].sort((A,h)=>{if(Math.abs(A.y-h.y)<20)return A.x-h.x;return A.y-h.y}),a="";if(n?.blankCanvas){if(a+=`## Wireframe: New Page

`,n.wireframePurpose)a+=`> **Purpose:** ${n.wireframePurpose}
>
`;a+=`> ${e.length} component${e.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`}else a+=`## Design Layout

> ${e.length} component${e.length!==1?"s":""} placed

`;if(l==="compact")return a+=`### Components
`,o.forEach((A,h)=>{let y=ml[A.type]?.label||A.type;a+=`${h+1}. **${y}** — \`${Math.round(A.width)}×${Math.round(A.height)}px\` at \`(${Math.round(A.x)}, ${Math.round(A.y)})\`
`}),a;let i=fh(t);a+=mh(i),a+=`### Components
`,o.forEach((A,h)=>{let y=ml[A.type]?.label||A.type,k={x:A.x,y:A.y,width:A.width,height:A.height};a+=`${h+1}. **${y}** — \`${Math.round(A.width)}×${Math.round(A.height)}px\` at \`(${Math.round(A.x)}, ${Math.round(A.y)})\`
`;let E=Gu(k),ae=_h(E,{includeLeftRight:l==="detailed"||l==="forensic"});for(let F of ae)a+=`   - ${F}
`;let z=hh(k,i);if(z)a+=`   - CSS: ${z}
`}),a+=`
### Layout Analysis
`;let r=[];for(let A of o){let h=r.find((y)=>Math.abs(y.y-A.y)<30);if(h)h.items.push(A);else r.push({y:A.y,items:[A]})}if(r.sort((A,h)=>A.y-h.y),r.forEach((A,h)=>{A.items.sort((k,E)=>k.x-E.x);let y=A.items.map((k)=>ml[k.type]?.label||k.type);if(A.items.length===1){let E=A.items[0].width>t.width*0.8;a+=`- Row ${h+1} (y≈${Math.round(A.y)}): ${y[0]}${E?" — full width":""}
`}else a+=`- Row ${h+1} (y≈${Math.round(A.y)}): ${y.join(" | ")} — ${A.items.length} items side by side
`}),l==="detailed"||l==="forensic"){a+=`
### Spacing & Gaps
`;for(let A=0;A<o.length-1;A++){let h=o[A],y=o[A+1],k=ml[h.type]?.label||h.type,E=ml[y.type]?.label||y.type,Q=Math.round(y.y-(h.y+h.height)),ae=Math.round(y.x-(h.x+h.width));if(Math.abs(h.y-y.y)<30)a+=`- ${k} → ${E}: \`${ae}px\` horizontal gap
`;else a+=`- ${k} → ${E}: \`${Q}px\` vertical gap
`}if(l==="forensic"&&o.length>2){a+=`
### All Pairwise Gaps
`;for(let A=0;A<o.length;A++)for(let h=A+1;h<o.length;h++){let y=o[A],k=o[h],E=ml[y.type]?.label||y.type,Q=ml[k.type]?.label||k.type,ae=Math.round(k.y-(y.y+y.height)),z=Math.round(k.x-(y.x+y.width));a+=`- ${E} ↔ ${Q}: h=\`${z}px\` v=\`${ae}px\`
`}}if(l==="forensic")a+=`
### Z-Order (placement order)
`,e.forEach((A,h)=>{let y=ml[A.type]?.label||A.type;a+=`${h}. ${y} at \`(${Math.round(A.x)}, ${Math.round(A.y)})\`
`})}a+=`
### Suggested Implementation
`;let s=o.some((A)=>A.type==="navigation"),g=o.some((A)=>A.type==="hero"),_=o.some((A)=>A.type==="sidebar"),b=o.some((A)=>A.type==="footer"),f=o.filter((A)=>A.type==="card"),w=o.filter((A)=>A.type==="form"),C=o.filter((A)=>A.type==="table"),D=o.filter((A)=>A.type==="modal");if(s)a+=`- Top navigation bar with logo + nav links + CTA
`;if(g)a+=`- Hero section with heading, subtext, and call-to-action
`;if(_)a+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`;if(f.length>1)a+=`- ${f.length}-column card grid — use CSS Grid or Flexbox
`;else if(f.length===1)a+=`- Card component with image + content area
`;if(w.length>0)a+=`- ${w.length} form${w.length>1?"s":""} — add proper labels, validation, and submit handling
`;if(C.length>0)a+=`- Data table — consider sortable columns and pagination
`;if(D.length>0)a+=`- Modal dialog — add overlay backdrop and focus trapping
`;if(b)a+=`- Multi-column footer with links
`;if(l==="detailed"||l==="forensic"){if(a+=`
### CSS Suggestions
`,_){let A=o.find((h)=>h.type==="sidebar");a+=`- \`display: grid; grid-template-columns: ${Math.round(A.width)}px 1fr;\`
`}if(f.length>1){let A=Math.round(f[0].width);a+=`- \`display: grid; grid-template-columns: repeat(${f.length}, ${A}px); gap: 16px;\`
`}if(s)a+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n"}return a}function q0(e,t="standard",n){let{sections:l}=e,o=[];for(let _ of l){let{originalRect:b,currentRect:f}=_,w=Math.abs(b.x-f.x)>1||Math.abs(b.y-f.y)>1,C=Math.abs(b.width-f.width)>1||Math.abs(b.height-f.height)>1;if(!w&&!C){if(t==="forensic")o.push({section:_,posMoved:!1,sizeChanged:!1});continue}o.push({section:_,posMoved:w,sizeChanged:C})}if(o.length===0)return"";if(t!=="forensic"&&o.every((_)=>!_.posMoved&&!_.sizeChanged))return"";let a=`## Suggested Layout Changes

`,i=n?n.width:typeof window<"u"?window.innerWidth:0,r=n?n.height:typeof window<"u"?window.innerHeight:0,s=fh({width:i,height:r});if(t!=="compact")a+=mh(s);if(t==="forensic")a+=`> Detected at: \`${new Date(e.detectedAt).toISOString()}\`
`,a+=`> Total sections: ${l.length}

`;let g=(_)=>l.map((b)=>({label:b.label,selector:b.selector,rect:_==="original"?b.originalRect:b.currentRect}));a+=`**Changes:**
`;for(let{section:_,posMoved:b,sizeChanged:f}of o){let{originalRect:w,currentRect:C}=_;if(!b&&!f){a+=`- ${_.label} — unchanged at (${Math.round(C.x)}, ${Math.round(C.y)}) ${Math.round(C.width)}×${Math.round(C.height)}px
`;continue}if(t==="compact"){if(b&&f)a+=`- Suggested: move **${_.label}** to (${Math.round(C.x)}, ${Math.round(C.y)}) ${Math.round(C.width)}×${Math.round(C.height)}px
`;else if(b)a+=`- Suggested: move **${_.label}** to (${Math.round(C.x)}, ${Math.round(C.y)})
`;else a+=`- Suggested: resize **${_.label}** to ${Math.round(C.width)}×${Math.round(C.height)}px
`;continue}if(b&&f)a+=`- Suggested: move and resize **${_.label}**
`;else if(b)a+=`- Suggested: move **${_.label}**
`;else a+=`- Suggested: resize **${_.label}** from ${Math.round(w.width)}×${Math.round(w.height)}px to ${Math.round(C.width)}×${Math.round(C.height)}px
`;if(b){let A=Gu(w,g("original")),h=Gu(C,g("current")),y=f?{width:w.width,height:w.height}:void 0;a+=`  - Currently ${wb(A,{x:w.x,y:w.y},y)}
`;let k=f?{width:C.width,height:C.height}:void 0,E=`at (${Math.round(C.x)}, ${Math.round(C.y)})`,Q=k?`, ${Math.round(k.width)}×${Math.round(k.height)}px`:"",z=_h(h,{includeLeftRight:t==="detailed"||t==="forensic"});if(z.length>0){a+=`  - Suggested position ${E}${Q}: ${z[0]}
`;for(let te=1;te<z.length;te++)a+=`    ${z[te]}
`}else a+=`  - Suggested position ${E}${Q}
`;let F=hh(C,s);if(F)a+=`  - CSS: ${F}
`}let D=Cb(_.selector);if(D)a+=`  - ${D}
`;if(a+=`  - Selector: \`${_.selector}\`
`,t==="detailed"||t==="forensic"){let A=_.className?`${_.tagName}.${_.className.split(" ")[0]}`:_.tagName;if(A!==_.selector)a+=`  - Element: \`${A}\`
`;if(_.role)a+=`  - Role: \`${_.role}\`
`;if(t==="forensic"&&_.textSnippet)a+=`  - Text: "${_.textSnippet}"
`}if(t==="forensic")a+=`  - Original rect: \`{ x: ${Math.round(w.x)}, y: ${Math.round(w.y)}, w: ${Math.round(w.width)}, h: ${Math.round(w.height)} }\`
`,a+=`  - Current rect: \`{ x: ${Math.round(C.x)}, y: ${Math.round(C.y)}, w: ${Math.round(C.width)}, h: ${Math.round(C.height)} }\`
`}if(t!=="compact"){let _=o.filter((f)=>f.posMoved).map((f)=>({label:f.section.label,originalRect:f.section.originalRect,currentRect:f.section.currentRect})),b=kb(_);if(b.length>0){a+=`
### Layout Summary
`;for(let f of b)a+=`- ${f}
`}}if(t!=="compact"&&l.length>1){a+=`
### All Sections (current positions)
`;let _=[...l].sort((b,f)=>{if(Math.abs(b.currentRect.y-f.currentRect.y)<20)return b.currentRect.x-f.currentRect.x;return b.currentRect.y-f.currentRect.y});for(let b of _){let f=b.currentRect,w=Math.abs(f.x-b.originalRect.x)>1||Math.abs(f.y-b.originalRect.y)>1||Math.abs(f.width-b.originalRect.width)>1||Math.abs(f.height-b.originalRect.height)>1;a+=`- ${b.label}: \`${Math.round(f.width)}×${Math.round(f.height)}px\` at \`(${Math.round(f.x)}, ${Math.round(f.y)})\`${w?" ← suggested":""}
`}}return a}var Vu="feedback-annotations-",gh=7;function Os(e){return`${Vu}${e}`}function Ki(e){if(typeof window>"u")return[];try{let t=localStorage.getItem(Os(e));if(!t)return[];let n=JSON.parse(t),l=Date.now()-gh*24*60*60*1000;return n.filter((o)=>!o.timestamp||o.timestamp>l)}catch{return[]}}function ph(e,t){if(typeof window>"u")return;try{localStorage.setItem(Os(e),JSON.stringify(t))}catch{}}function Mb(){let e=new Map;if(typeof window>"u")return e;try{let t=Date.now()-gh*24*60*60*1000;for(let n=0;n<localStorage.length;n++){let l=localStorage.key(n);if(l?.startsWith(Vu)){let o=l.slice(Vu.length),a=localStorage.getItem(l);if(a){let r=JSON.parse(a).filter((s)=>!s.timestamp||s.timestamp>t);if(r.length>0)e.set(o,r)}}}}catch{}return e}function Qi(e,t,n){let l=t.map((o)=>({...o,_syncedTo:n}));ph(e,l)}var Fu="agentation-design-";function Eb(e){if(typeof window>"u")return[];try{let t=localStorage.getItem(`${Fu}${e}`);if(!t)return[];return JSON.parse(t)}catch{return[]}}function Tb(e,t){if(typeof window>"u")return;try{localStorage.setItem(`${Fu}${e}`,JSON.stringify(t))}catch{}}function Ab(e){if(typeof window>"u")return;try{localStorage.removeItem(`${Fu}${e}`)}catch{}}var Ju="agentation-rearrange-";function Lb(e){if(typeof window>"u")return null;try{let t=localStorage.getItem(`${Ju}${e}`);if(!t)return null;return JSON.parse(t)}catch{return null}}function Db(e,t){if(typeof window>"u")return;try{localStorage.setItem(`${Ju}${e}`,JSON.stringify(t))}catch{}}function Nb(e){if(typeof window>"u")return;try{localStorage.removeItem(`${Ju}${e}`)}catch{}}var Pu="agentation-wireframe-";function zb(e){if(typeof window>"u")return null;try{let t=localStorage.getItem(`${Pu}${e}`);if(!t)return null;return JSON.parse(t)}catch{return null}}function W0(e,t){if(typeof window>"u")return;try{localStorage.setItem(`${Pu}${e}`,JSON.stringify(t))}catch{}}function Ts(e){if(typeof window>"u")return;try{localStorage.removeItem(`${Pu}${e}`)}catch{}}var yh="agentation-session-";function ed(e){return`${yh}${e}`}function Ob(e){if(typeof window>"u")return null;try{return localStorage.getItem(ed(e))}catch{return null}}function Ru(e,t){if(typeof window>"u")return;try{localStorage.setItem(ed(e),t)}catch{}}function Rb(e){if(typeof window>"u")return;try{localStorage.removeItem(ed(e))}catch{}}var Zu=`${yh}toolbar-hidden`;function Bb(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(Zu)==="1"}catch{return!1}}function Hb(e){if(typeof window>"u")return;try{if(e)sessionStorage.setItem(Zu,"1");else sessionStorage.removeItem(Zu)}catch{}}async function Bu(e,t){let n=await fetch(`${e}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:t})});if(!n.ok)throw Error(`Failed to create session: ${n.status}`);return n.json()}async function Q0(e,t){let n=await fetch(`${e}/sessions/${t}`);if(!n.ok)throw Error(`Failed to get session: ${n.status}`);return n.json()}async function Oa(e,t,n){let l=await fetch(`${e}/sessions/${t}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!l.ok)throw Error(`Failed to sync annotation: ${l.status}`);return l.json()}async function G0(e,t,n){let l=await fetch(`${e}/annotations/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!l.ok)throw Error(`Failed to update annotation: ${l.status}`);return l.json()}async function fo(e,t){let n=await fetch(`${e}/annotations/${t}`,{method:"DELETE"});if(!n.ok)throw Error(`Failed to delete annotation: ${n.status}`)}var ot={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},V0=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),Z0=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],$b=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function Ub(e){let t=e?.mode??"filtered",n=V0;if(e?.skipExact){let l=e.skipExact instanceof Set?e.skipExact:new Set(e.skipExact);n=new Set([...V0,...l])}return{maxComponents:e?.maxComponents??6,maxDepth:e?.maxDepth??30,mode:t,skipExact:n,skipPatterns:e?.skipPatterns?[...Z0,...e.skipPatterns]:Z0,userPatterns:e?.userPatterns??$b,filter:e?.filter}}function Yb(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function jb(e,t=10){let n=new Set,l=e,o=0;while(l&&o<t){if(l.className&&typeof l.className==="string")l.className.split(/\s+/).forEach((a)=>{if(a.length>1){let i=a.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();if(i.length>1)n.add(i)}});l=l.parentElement,o++}return n}function Ib(e,t){let n=Yb(e);for(let l of t){if(l===n)return!0;let o=n.split("-").filter((i)=>i.length>2),a=l.split("-").filter((i)=>i.length>2);for(let i of o)for(let r of a)if(i===r||i.includes(r)||r.includes(i))return!0}return!1}function Xb(e,t,n,l){if(n.filter)return n.filter(e,t);switch(n.mode){case"all":return!0;case"filtered":if(n.skipExact.has(e))return!1;if(n.skipPatterns.some((o)=>o.test(e)))return!1;return!0;case"smart":if(n.skipExact.has(e))return!1;if(n.skipPatterns.some((o)=>o.test(e)))return!1;if(l&&Ib(e,l))return!0;if(n.userPatterns.some((o)=>o.test(e)))return!0;return!1;default:return!0}}var Ra=null,qb=new WeakMap;function Hu(e){return Object.keys(e).some((t)=>t.startsWith("__reactFiber$")||t.startsWith("__reactInternalInstance$")||t.startsWith("__reactProps$"))}function Wb(){if(Ra!==null)return Ra;if(typeof document>"u")return!1;if(document.body&&Hu(document.body))return Ra=!0,!0;let e=["#root","#app","#__next","[data-reactroot]"];for(let t of e){let n=document.querySelector(t);if(n&&Hu(n))return Ra=!0,!0}if(document.body){for(let t of document.body.children)if(Hu(t))return Ra=!0,!0}return Ra=!1,!1}var Gi={map:qb};function Qb(e){return Object.keys(e).find((n)=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$"))||null}function Gb(e){let t=Qb(e);if(!t)return null;return e[t]}function Zo(e){if(!e)return null;if(e.displayName)return e.displayName;if(e.name)return e.name;return null}function Vb(e){let{tag:t,type:n,elementType:l}=e;if(t===ot.HostComponent||t===ot.HostText||t===ot.HostHoistable||t===ot.HostSingleton)return null;if(t===ot.Fragment||t===ot.Mode||t===ot.Profiler||t===ot.DehydratedFragment)return null;if(t===ot.HostRoot||t===ot.HostPortal||t===ot.ScopeComponent||t===ot.OffscreenComponent||t===ot.LegacyHiddenComponent||t===ot.CacheComponent||t===ot.TracingMarkerComponent||t===ot.Throw||t===ot.ViewTransitionComponent||t===ot.ActivityComponent)return null;if(t===ot.ForwardRef){let o=l;if(o?.render){let a=Zo(o.render);if(a)return a}if(o?.displayName)return o.displayName;return Zo(n)}if(t===ot.MemoComponent||t===ot.SimpleMemoComponent){let o=l;if(o?.type){let a=Zo(o.type);if(a)return a}if(o?.displayName)return o.displayName;return Zo(n)}if(t===ot.ContextProvider){let o=n;if(o?._context?.displayName)return`${o._context.displayName}.Provider`;return null}if(t===ot.ContextConsumer){let o=n;if(o?.displayName)return`${o.displayName}.Consumer`;return null}if(t===ot.LazyComponent){let o=l;if(o?._status===1&&o._result)return Zo(o._result);return null}if(t===ot.SuspenseComponent||t===ot.SuspenseListComponent)return null;if(t===ot.IncompleteClassComponent||t===ot.IncompleteFunctionComponent)return Zo(n);if(t===ot.FunctionComponent||t===ot.ClassComponent||t===ot.IndeterminateComponent)return Zo(n);return null}function Zb(e){if(e.length<=2)return!0;if(e.length<=3&&e===e.toLowerCase())return!0;return!1}function Kb(e,t){let n=Ub(t),l=n.mode==="all";if(l){let s=Gi.map.get(e);if(s!==void 0)return s}if(!Wb()){let s={path:null,components:[]};if(l)Gi.map.set(e,s);return s}let o=n.mode==="smart"?jb(e):void 0,a=[];try{let s=Gb(e),g=0;while(s&&g<n.maxDepth&&a.length<n.maxComponents){let _=Vb(s);if(_&&!Zb(_)&&Xb(_,g,n,o))a.push(_);s=s.return,g++}}catch{let s={path:null,components:[]};if(l)Gi.map.set(e,s);return s}if(a.length===0){let s={path:null,components:[]};if(l)Gi.map.set(e,s);return s}let r={path:a.slice().reverse().map((s)=>`<${s}>`).join(" "),components:a};if(l)Gi.map.set(e,r);return r}var Vi={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16};function Fb(e){if(!e||typeof e!=="object")return null;let t=Object.keys(e),n=t.find((a)=>a.startsWith("__reactFiber$"));if(n)return e[n]||null;let l=t.find((a)=>a.startsWith("__reactInternalInstance$"));if(l)return e[l]||null;let o=t.find((a)=>{if(!a.startsWith("__react"))return!1;let i=e[a];return i&&typeof i==="object"&&"_debugSource"in i});if(o)return e[o]||null;return null}function Ji(e){if(!e.type)return null;if(typeof e.type==="string")return null;if(typeof e.type==="object"||typeof e.type==="function"){let t=e.type;if(t.displayName)return t.displayName;if(t.name)return t.name}return null}function Jb(e,t=50){let n=e,l=0;while(n&&l<t){if(n._debugSource)return{source:n._debugSource,componentName:Ji(n)};if(n._debugOwner?._debugSource)return{source:n._debugOwner._debugSource,componentName:Ji(n._debugOwner)};n=n.return,l++}return null}function Pb(e){let t=e,n=0,l=50;while(t&&n<l){let o=t,a=["_debugSource","__source","_source","debugSource"];for(let i of a){let r=o[i];if(r&&typeof r==="object"&&"fileName"in r)return{source:r,componentName:Ji(t)}}if(t.memoizedProps){let i=t.memoizedProps;if(i.__source&&typeof i.__source==="object"){let r=i.__source;if(r.fileName&&r.lineNumber)return{source:{fileName:r.fileName,lineNumber:r.lineNumber,columnNumber:r.columnNumber},componentName:Ji(t)}}}t=t.return,n++}return null}var As=new Map;function ex(e){let{tag:t,type:n,elementType:l}=e;if(typeof n==="string"||n==null)return null;if(typeof n==="function"&&n.prototype?.isReactComponent)return null;if((t===Vi.FunctionComponent||t===Vi.IndeterminateComponent)&&typeof n==="function")return n;if(t===Vi.ForwardRef&&l){let o=l.render;if(typeof o==="function")return o}if((t===Vi.MemoComponent||t===Vi.SimpleMemoComponent)&&l){let o=l.type;if(typeof o==="function")return o}if(typeof n==="function")return n;return null}function tx(){let e=bh.default,t=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(t&&"H"in t)return{get:()=>t.H,set:(l)=>{t.H=l}};let n=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(n){let l=n.ReactCurrentDispatcher;if(l&&"current"in l)return{get:()=>l.current,set:(o)=>{l.current=o}}}return null}function nx(e){let t=e.split(`
`),n=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],l=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,o=/^[^@]*@(.+?):(\d+):(\d+)$/;for(let a of t){let i=a.trim();if(!i)continue;if(n.some((s)=>s.test(i)))continue;let r=l.exec(i)||o.exec(i);if(r)return{fileName:r[1],line:parseInt(r[2],10),column:parseInt(r[3],10)}}return null}function lx(e){let t=e;return t=t.replace(/[?#].*$/,""),t=t.replace(/^turbopack:\/\/\/\[project\]\//,""),t=t.replace(/^webpack-internal:\/\/\/\.\//,""),t=t.replace(/^webpack-internal:\/\/\//,""),t=t.replace(/^webpack:\/\/\/\.\//,""),t=t.replace(/^webpack:\/\/\//,""),t=t.replace(/^turbopack:\/\/\//,""),t=t.replace(/^https?:\/\/[^/]+\//,""),t=t.replace(/^file:\/\/\//,"/"),t=t.replace(/^\([^)]+\)\/\.\//,""),t=t.replace(/^\.\//,""),t}function ox(e){let t=ex(e);if(!t)return null;if(As.has(t))return As.get(t);let n=tx();if(!n)return As.set(t,null),null;let l=n.get(),o=null;try{let a=new Proxy({},{get(){throw Error("probe")}});n.set(a);try{t({})}catch(i){if(i instanceof Error&&i.message==="probe"&&i.stack){let r=nx(i.stack);if(r)o={fileName:lx(r.fileName),lineNumber:r.line,columnNumber:r.column,componentName:Ji(e)||void 0}}}}finally{n.set(l)}return As.set(t,o),o}function ax(e,t=15){let n=e,l=0;while(n&&l<t){let o=ox(n);if(o)return o;n=n.return,l++}return null}function Ku(e){let t=Fb(e);if(!t)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let n=Jb(t);if(!n)n=Pb(t);if(n?.source)return{found:!0,source:{fileName:n.source.fileName,lineNumber:n.source.lineNumber,columnNumber:n.source.columnNumber,componentName:n.componentName||void 0},isReactApp:!0,isProduction:!1};let l=ax(t);if(l)return{found:!0,source:l,isReactApp:!0,isProduction:!1};return{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function ix(e,t="path"){let{fileName:n,lineNumber:l,columnNumber:o}=e,a=`${n}:${l}`;if(o!==void 0)a+=`:${o}`;if(t==="vscode")return`vscode://file${n.startsWith("/")?"":"/"}${a}`;return a}function rx(e,t=10){let n=e,l=0;while(n&&l<t){let o=Ku(n);if(o.found)return o;n=n.parentElement,l++}return Ku(e)}var sx=`.styles-module__toolbar___wNsdK svg[fill=none],
.styles-module__markersLayer___-25j1 svg[fill=none],
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] {
  fill: none !important;
}
.styles-module__toolbar___wNsdK svg[fill=none] :not([fill]),
.styles-module__markersLayer___-25j1 svg[fill=none] :not([fill]),
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] :not([fill]) {
  fill: none !important;
}

.styles-module__controlsContent___9GJWU :where(button, input, select, textarea, label) {
  background: unset;
  border: unset;
  border-radius: unset;
  padding: unset;
  margin: unset;
  color: unset;
  font-family: unset;
  font-weight: unset;
  font-style: unset;
  line-height: unset;
  letter-spacing: unset;
  text-transform: unset;
  text-decoration: unset;
  box-shadow: unset;
  outline: unset;
}

@keyframes styles-module__toolbarEnter___u8RRu {
  from {
    opacity: 0;
    transform: scale(0.5) rotate(90deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
@keyframes styles-module__toolbarHide___y8kaT {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.8);
  }
}
@keyframes styles-module__badgeEnter___mVQLj {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleIn___c-r1K {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleOut___Wctwz {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.85);
  }
}
@keyframes styles-module__slideUp___kgD36 {
  from {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes styles-module__slideDown___zcdje {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
}
@keyframes styles-module__fadeIn___b9qmf {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__fadeOut___6Ut6- {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__hoverHighlightIn___6WYHY {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__hoverTooltipIn___FYGQx {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
.styles-module__disableTransitions___EopxO :is(*, *::before, *::after) {
  transition: none !important;
}

.styles-module__toolbar___wNsdK {
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  width: 337px;
  z-index: 100000;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: none;
  transition: left 0s, top 0s, right 0s, bottom 0s;
}

:where(.styles-module__toolbar___wNsdK) {
  bottom: 1.25rem;
  right: 1.25rem;
}

.styles-module__toolbarContainer___dIhma {
  position: relative;
  user-select: none;
  margin-left: auto;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  color: #fff;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toolbarContainer___dIhma.styles-module__entrance___sgHd8 {
  animation: styles-module__toolbarEnter___u8RRu 0.5s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
}
.styles-module__toolbarContainer___dIhma.styles-module__hiding___1td44 {
  animation: styles-module__toolbarHide___y8kaT 0.4s cubic-bezier(0.4, 0, 1, 1) forwards;
  pointer-events: none;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn {
  width: 44px;
  height: 44px;
  border-radius: 22px;
  padding: 0;
  cursor: pointer;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn svg {
  margin-top: -1px;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #2a2a2a;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:active {
  transform: scale(0.95);
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx {
  height: 44px;
  border-radius: 1.5rem;
  padding: 0.375rem;
  width: 297px;
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx.styles-module__serverConnected___Gfbou {
  width: 337px;
}

.styles-module__toggleContent___0yfyP {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.1s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toggleContent___0yfyP.styles-module__visible___KHwEW {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.styles-module__toggleContent___0yfyP.styles-module__hidden___Ae8H4 {
  opacity: 0;
  pointer-events: none;
}

.styles-module__controlsContent___9GJWU {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  transition: filter 0.8s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.8s cubic-bezier(0.19, 1, 0.22, 1), transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW {
  opacity: 1;
  filter: blur(0px);
  transform: scale(1);
  visibility: visible;
  pointer-events: auto;
}
.styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {
  pointer-events: none;
  opacity: 0;
  filter: blur(10px);
  transform: scale(0.4);
}

.styles-module__badge___2XsgF {
  position: absolute;
  top: -13px;
  right: -13px;
  user-select: none;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.04);
  opacity: 1;
  transition: transform 0.3s ease, opacity 0.2s ease;
  transform: scale(1);
}
.styles-module__badge___2XsgF.styles-module__fadeOut___6Ut6- {
  opacity: 0;
  transform: scale(0);
  pointer-events: none;
}
.styles-module__badge___2XsgF.styles-module__entrance___sgHd8 {
  animation: styles-module__badgeEnter___mVQLj 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) 0.4s both;
}

.styles-module__controlButton___8Q0jc {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease, opacity 0.2s ease;
}
.styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}
.styles-module__controlButton___8Q0jc:active:not(:disabled) {
  transform: scale(0.92);
}
.styles-module__controlButton___8Q0jc:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background-color: color-mix(in srgb, var(--agentation-color-blue) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__controlButton___8Q0jc[data-no-hover=true], .styles-module__controlButton___8Q0jc.styles-module__statusShowing___te6iu {
  cursor: default;
  pointer-events: none;
  background: transparent !important;
}
.styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
  cursor: default;
}
.styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}

.styles-module__buttonBadge___NeFWb {
  position: absolute;
  top: 0px;
  right: 0px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 8px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px #1a1a1a, 0 1px 3px rgba(0, 0, 0, 0.2);
  pointer-events: none;
}
[data-agentation-theme=light] .styles-module__buttonBadge___NeFWb {
  box-shadow: 0 0 0 2px #fff, 0 1px 3px rgba(0, 0, 0, 0.2);
}

@keyframes styles-module__mcpIndicatorPulseConnected___EDodZ {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpIndicatorPulseConnecting___cCYte {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-yellow) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-yellow) 0%, transparent);
  }
}
.styles-module__mcpIndicator___zGJeL {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  pointer-events: none;
  transition: background-color 0.3s ease, opacity 0.15s ease, transform 0.15s ease;
  opacity: 1;
  transform: scale(1);
}
.styles-module__mcpIndicator___zGJeL.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpIndicatorPulseConnected___EDodZ 2.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpIndicatorPulseConnecting___cCYte 1.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__hidden___Ae8H4 {
  opacity: 0;
  transform: scale(0);
  animation: none;
}

@keyframes styles-module__connectionPulse___-Zycw {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.9);
  }
}
.styles-module__connectionIndicatorWrapper___L-e-3 {
  width: 8px;
  height: 34px;
  margin-left: 6px;
  margin-right: 6px;
}

.styles-module__connectionIndicator___afk9p {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease, background-color 0.3s ease;
  cursor: default;
}

.styles-module__connectionIndicatorVisible___C-i5B {
  opacity: 1;
}

.styles-module__connectionIndicatorConnected___IY8pR {
  background-color: var(--agentation-color-green);
  animation: styles-module__connectionPulse___-Zycw 2.5s ease-in-out infinite;
}

.styles-module__connectionIndicatorDisconnected___kmpaZ {
  background-color: var(--agentation-color-red);
  animation: none;
}

.styles-module__connectionIndicatorConnecting___QmSLH {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__connectionPulse___-Zycw 1s ease-in-out infinite;
}

.styles-module__buttonWrapper___rBcdv {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) scale(1);
  transition-delay: 0.85s;
}
.styles-module__buttonWrapper___rBcdv:has(.styles-module__controlButton___8Q0jc:disabled):hover .styles-module__buttonTooltip___Burd9 {
  opacity: 0;
  visibility: hidden;
}

.styles-module__tooltipsInSession___-0lHH .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transition-delay: 0s;
}

.styles-module__sendButtonWrapper___UUxG6 {
  width: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  margin-left: -0.375rem;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.3s cubic-bezier(0.19, 1, 0.22, 1), margin 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6 .styles-module__controlButton___8Q0jc {
  transform: scale(0.8);
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU {
  width: 34px;
  opacity: 1;
  overflow: visible;
  pointer-events: auto;
  margin-left: 0;
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU .styles-module__controlButton___8Q0jc {
  transform: scale(1);
}

.styles-module__buttonTooltip___Burd9 {
  position: absolute;
  bottom: calc(100% + 14px);
  left: 50%;
  transform: translateX(-50%) scale(0.95);
  padding: 6px 10px;
  background: #1a1a1a;
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 100001;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: opacity 0.135s ease, transform 0.135s ease, visibility 0.135s ease;
}
.styles-module__buttonTooltip___Burd9::after {
  content: "";
  position: absolute;
  top: calc(100% - 4px);
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 8px;
  height: 8px;
  background: #1a1a1a;
  border-radius: 0 0 2px 0;
}

.styles-module__shortcut___lEAQk {
  margin-left: 4px;
  opacity: 0.5;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9 {
  bottom: auto;
  top: calc(100% + 14px);
  transform: translateX(-50%) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9::after {
  top: -4px;
  bottom: auto;
  border-radius: 2px 0 0 0;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-50%) scale(1);
}

.styles-module__tooltipsHidden___VtLJG .styles-module__buttonTooltip___Burd9 {
  opacity: 0 !important;
  visibility: hidden !important;
  transition: none !important;
}

.styles-module__tooltipVisible___0jcCv,
.styles-module__tooltipsHidden___VtLJG .styles-module__tooltipVisible___0jcCv {
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateX(-50%) scale(1) !important;
  transition-delay: 0s !important;
}

.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(-12px) scale(0.95);
}
.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9::after {
  left: 16px;
}
.styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9::after {
  left: auto;
  right: 8px;
}
.styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__divider___c--s1 {
  width: 1px;
  height: 12px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 0.125rem;
}

.styles-module__overlay___Q1O9y {
  position: fixed;
  inset: 0;
  z-index: 99997;
  pointer-events: none;
}
.styles-module__overlay___Q1O9y > * {
  pointer-events: auto;
}

.styles-module__hoverHighlight___ogakW {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-accent) 50%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-accent) 4%, transparent);
  pointer-events: none !important;
  box-sizing: border-box;
  will-change: opacity;
  contain: layout style;
}
.styles-module__hoverHighlight___ogakW.styles-module__enter___WFIki {
  animation: styles-module__hoverHighlightIn___6WYHY 0.12s ease-out forwards;
}

.styles-module__multiSelectOutline___cSJ-m {
  position: fixed;
  border: 2px dashed color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-green) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__singleSelectOutline___QhX-O {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-blue) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-blue) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__hoverTooltip___bvLk7 {
  position: fixed;
  font-size: 0.6875rem;
  font-weight: 500;
  color: #fff;
  background: rgba(0, 0, 0, 0.85);
  padding: 0.35rem 0.6rem;
  border-radius: 0.375rem;
  pointer-events: none !important;
  white-space: nowrap;
  max-width: 280px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.styles-module__hoverTooltip___bvLk7.styles-module__enter___WFIki {
  animation: styles-module__hoverTooltipIn___FYGQx 0.1s ease-out forwards;
}

.styles-module__hoverReactPath___gx1IJ {
  font-size: 0.625rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__hoverElementName___QMLMl {
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markersLayer___-25j1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__markersLayer___-25j1 > * {
  pointer-events: auto;
}

.styles-module__fixedMarkersLayer___ffyX6 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__fixedMarkersLayer___ffyX6 > * {
  pointer-events: auto;
}

.styles-module__marker___6sQrs {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___6sQrs:hover {
  z-index: 2;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___6sQrs.styles-module__enter___WFIki {
  animation: styles-module__markerIn___5FaAP 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___6sQrs.styles-module__exit___fyOJ0 {
  animation: styles-module__markerOut___GU5jX 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs.styles-module__clearing___FQ--7 {
  animation: styles-module__markerOut___GU5jX 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___6sQrs.styles-module__pending___2IHLC {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___6sQrs.styles-module__fixed___dBMHC {
  position: fixed;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz.styles-module__pending___2IHLC {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___6sQrs.styles-module__hovered___ZgXIy {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___nCTxD {
  display: block;
  animation: styles-module__renumberRoll___Wgbq3 0.2s ease-out;
}

@keyframes styles-module__renumberRoll___Wgbq3 {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__markerTooltip___aLJID {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___aLJID.styles-module__enter___WFIki {
  animation: styles-module__tooltipIn___0N31w 0.1s ease-out forwards;
}

.styles-module__markerQuote___FHmrz {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___QkrrS {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

.styles-module__markerHint___2iF-6 {
  display: block;
  font-size: 0.625rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.375rem;
  white-space: nowrap;
}

.styles-module__settingsPanel___OxX3Y {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 1rem;
  padding: 13px 0 16px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y::before, .styles-module__settingsPanel___OxX3Y::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___OxX3Y::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrandSlash___uTG18,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY,
.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz,
.styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa,
.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax,
.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr,
.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp,
.styles-module__settingsPanel___OxX3Y .styles-module__themeToggle___2rUjA {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__enter___WFIki {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__exit___fyOJ0 {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12 {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__settingsPanelContainer___Xksv8 {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 1rem;
}

.styles-module__settingsPage___6YfHH {
  min-width: 100%;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___6YfHH.styles-module__slideLeft___Ps01J {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 3px 1rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6.styles-module__slideIn___4-qXe {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsNavLink___wCzJt {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(255, 255, 255, 0.9);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(0, 0, 0, 0.8);
}
.styles-module__settingsNavLink___wCzJt svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___ZWwhj {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__mcpNavIndicator___cl9pO {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s ease-in-out infinite;
}

.styles-module__settingsBackButton___bIe2j {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 0 12px 0;
  margin: -6px 0 0.5rem 0;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 0;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(255, 255, 255, 0.07);
}
.styles-module__settingsBackButton___bIe2j:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___InP0r {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___InP0r {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___NKlmo {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___NKlmo {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___8xv-x {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___8xv-x:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendRow___UblX5 {
  display: flex;
  align-items: center;
  gap: 8px;
}

.styles-module__autoSendLabel___icDc2 {
  font-size: 0.6875rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: var(--agentation-color-blue);
}

.styles-module__webhookUrlInput___2375C {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__settingsHeader___pwDY9 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  margin-bottom: 0.5rem;
  padding-bottom: 9px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.styles-module__settingsBrand___0gJeM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___uTG18 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___TUcFq {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__settingsSection___m-YM2 + .styles-module__settingsSection___m-YM2 {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__settingsSection___m-YM2.styles-module__settingsSectionExtraPadding___jdhFV {
  padding-top: calc(0.5rem + 4px);
}

.styles-module__settingsSectionGrow___h-5HZ {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___3sdhc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___3sdhc.styles-module__settingsRowMarginTop___zA0Sp {
  margin-top: 8px;
}

.styles-module__dropdownContainer___BVnxe {
  position: relative;
}

.styles-module__dropdownButton___16NPz {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownButton___16NPz:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownButton___16NPz svg {
  opacity: 0.6;
}

.styles-module__cycleButton___FMKfw {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___FMKfw {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___FMKfw:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__settingsRowDisabled___EgS0V .styles-module__toggleSwitch___l4Ygm {
  opacity: 0.4;
  cursor: not-allowed;
}

@keyframes styles-module__cycleTextIn___Q6zJf {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__cycleButtonText___fD1LR {
  display: inline-block;
  animation: styles-module__cycleTextIn___Q6zJf 0.2s ease-out;
}

.styles-module__cycleDots___LWuoQ {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___nPgLY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__dropdownMenu___k73ER {
  position: absolute;
  right: 0;
  top: calc(100% + 0.25rem);
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 0.25rem;
  min-width: 120px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
  z-index: 10;
  animation: styles-module__scaleIn___c-r1K 0.15s ease-out;
}

.styles-module__dropdownItem___ylsLj {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.625rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  text-align: left;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownItem___ylsLj:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownItem___ylsLj.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-weight: 600;
}

.styles-module__settingsLabel___8UjfX {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  gap: 0.125rem;
}
[data-agentation-theme=light] .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__settingsLabelMarker___ewdtV {
  padding-top: 3px;
  margin-bottom: 10px;
}

.styles-module__settingsOptions___LyrBA {
  display: flex;
  gap: 0.25rem;
}

.styles-module__settingsOption___UNa12 {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.styles-module__settingsOption___UNa12:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
  color: var(--agentation-color-blue);
}

.styles-module__sliderContainer___ducXj {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.styles-module__slider___GLdxp {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}
.styles-module__slider___GLdxp::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp:hover::-webkit-slider-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}
.styles-module__slider___GLdxp:hover::-moz-range-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

.styles-module__sliderLabels___FhLDB {
  display: flex;
  justify-content: space-between;
}

.styles-module__sliderLabel___U8sPr {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__sliderLabel___U8sPr:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {
  color: rgba(255, 255, 255, 0.9);
}

.styles-module__colorOptions___iHCNX {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.375rem;
  margin-bottom: 1px;
}

.styles-module__colorOption___IodiY {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid transparent;
  background-color: var(--swatch);
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___IodiY {
    background-color: var(--swatch-p3);
  }
}
.styles-module__colorOption___IodiY:hover {
  transform: scale(1.15);
}
.styles-module__colorOption___IodiY.styles-module__selected___OwRqP {
  transform: scale(0.83);
}

.styles-module__colorOptionRing___U2xpo {
  display: flex;
  width: 24px;
  height: 24px;
  border: 2px solid transparent;
  border-radius: 50%;
  transition: border-color 0.3s ease;
}
.styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
  border-color: var(--swatch);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
    border-color: var(--swatch-p3);
  }
}

.styles-module__settingsToggle___fBrFn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}
.styles-module__settingsToggle___fBrFn + .styles-module__settingsToggle___fBrFn {
  margin-top: calc(0.5rem + 6px);
}
.styles-module__settingsToggle___fBrFn input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__settingsToggle___fBrFn.styles-module__settingsToggleMarginBottom___MZUyF {
  margin-bottom: calc(0.5rem + 6px);
}

.styles-module__customCheckbox___U39ax {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background-color 0.25s ease, border-color 0.25s ease;
}
.styles-module__customCheckbox___U39ax svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
input[type=checkbox]:checked + .styles-module__customCheckbox___U39ax {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo svg {
  color: #fff;
}

.styles-module__toggleLabel___Xm8Aa {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
[data-agentation-theme=light] .styles-module__toggleLabel___Xm8Aa {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__toggleSwitch___l4Ygm {
  position: relative;
  display: inline-block;
  width: 24px;
  height: 16px;
  flex-shrink: 0;
  cursor: pointer;
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.styles-module__toggleSwitch___l4Ygm input {
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn {
  background-color: var(--agentation-color-blue);
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn::before {
  transform: translateX(8px);
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw {
  opacity: 0.4;
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw .styles-module__toggleSlider___wprIn {
  cursor: not-allowed;
}

.styles-module__toggleSlider___wprIn {
  position: absolute;
  cursor: pointer;
  inset: 0;
  border-radius: 16px;
  background: #484848;
}
[data-agentation-theme=light] .styles-module__toggleSlider___wprIn {
  background: #dddddd;
}
.styles-module__toggleSlider___wprIn::before {
  content: "";
  position: absolute;
  height: 12px;
  width: 12px;
  left: 2px;
  bottom: 2px;
  background: white;
  border-radius: 50%;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes styles-module__mcpPulse___uNggr {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___fov9B {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
.styles-module__mcpStatusDot___ibgkc {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__disconnected___cHPxR {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___fov9B 2s infinite;
}

.styles-module__drawCanvas___7cG9U {
  position: fixed;
  inset: 0;
  z-index: 99996;
  pointer-events: none !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6 {
  pointer-events: auto !important;
  cursor: crosshair !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6[data-stroke-hover] {
  cursor: pointer !important;
}

.styles-module__dragSelection___kZLq2 {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-green) 8%, transparent);
  pointer-events: none;
  z-index: 99997;
  will-change: transform, width, height;
  contain: layout style;
}

.styles-module__dragCount___KM90j {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--agentation-color-green);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  min-width: 1.5rem;
  text-align: center;
}

.styles-module__highlightsContainer___-0xzG {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__selectedElementHighlight___fyVlI {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  border-radius: 4px;
  background: color-mix(in srgb, var(--agentation-color-green) 6%, transparent);
  pointer-events: none;
  will-change: transform, width, height;
  contain: layout style;
}

[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #f5f5f5;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9 {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9::after {
  background: #fff;
}
[data-agentation-theme=light] .styles-module__divider___c--s1 {
  background: rgba(0, 0, 0, 0.1);
}`;var cx={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");if(!e)e=document.createElement("style"),e.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(e);e.textContent=sx}var j=cx,Zi=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function K0(e,t,n="standard"){if(e.length===0)return"";let l=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown",o=`## Page Feedback: ${t}
`;if(n==="forensic"){if(o+=`
**Environment:**
`,o+=`- Viewport: ${l}
`,typeof window<"u")o+=`- URL: ${window.location.href}
`,o+=`- User Agent: ${navigator.userAgent}
`,o+=`- Timestamp: ${new Date().toISOString()}
`,o+=`- Device Pixel Ratio: ${window.devicePixelRatio}
`;o+=`
---
`}else if(n!=="compact")o+=`**Viewport:** ${l}
`;return o+=`
`,e.forEach((a,i)=>{if(n==="compact"){if(o+=`${i+1}. **${a.element}**${a.sourceFile?` (${a.sourceFile})`:""}: ${a.comment}`,a.selectedText)o+=` (re: "${a.selectedText.slice(0,30)}${a.selectedText.length>30?"...":""}")`;o+=`
`}else if(n==="forensic"){if(o+=`### ${i+1}. ${a.element}
`,a.isMultiSelect&&a.fullPath)o+=`*Forensic data shown for first element of selection*
`;if(a.fullPath)o+=`**Full DOM Path:** ${a.fullPath}
`;if(a.cssClasses)o+=`**CSS Classes:** ${a.cssClasses}
`;if(a.boundingBox)o+=`**Position:** x:${Math.round(a.boundingBox.x)}, y:${Math.round(a.boundingBox.y)} (${Math.round(a.boundingBox.width)}×${Math.round(a.boundingBox.height)}px)
`;if(o+=`**Annotation at:** ${a.x.toFixed(1)}% from left, ${Math.round(a.y)}px from top
`,a.selectedText)o+=`**Selected text:** "${a.selectedText}"
`;if(a.nearbyText&&!a.selectedText)o+=`**Context:** ${a.nearbyText.slice(0,100)}
`;if(a.computedStyles)o+=`**Computed Styles:** ${a.computedStyles}
`;if(a.accessibility)o+=`**Accessibility:** ${a.accessibility}
`;if(a.nearbyElements)o+=`**Nearby Elements:** ${a.nearbyElements}
`;if(a.sourceFile)o+=`**Source:** ${a.sourceFile}
`;if(a.reactComponents)o+=`**React:** ${a.reactComponents}
`;o+=`**Feedback:** ${a.comment}

`}else{if(o+=`### ${i+1}. ${a.element}
`,o+=`**Location:** ${a.elementPath}
`,a.sourceFile)o+=`**Source:** ${a.sourceFile}
`;if(a.reactComponents)o+=`**React:** ${a.reactComponents}
`;if(n==="detailed"){if(a.cssClasses)o+=`**Classes:** ${a.cssClasses}
`;if(a.boundingBox)o+=`**Position:** ${Math.round(a.boundingBox.x)}px, ${Math.round(a.boundingBox.y)}px (${Math.round(a.boundingBox.width)}×${Math.round(a.boundingBox.height)}px)
`}if(a.selectedText)o+=`**Selected text:** "${a.selectedText}"
`;if(n==="detailed"&&a.nearbyText&&!a.selectedText)o+=`**Context:** ${a.nearbyText.slice(0,100)}
`;o+=`**Feedback:** ${a.comment}

`}}),o.trim()}var ux=`@keyframes styles-module__markerIn___x4G8D {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes styles-module__markerOut___6VhQN {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
}
@keyframes styles-module__tooltipIn___aJslQ {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(2px) scale(0.891);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(0.909);
  }
}
@keyframes styles-module__renumberRoll___akV9B {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__marker___9CKF7 {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___9CKF7:hover {
  z-index: 2;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___9CKF7.styles-module__enter___8kI3q {
  animation: styles-module__markerIn___x4G8D 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___9CKF7.styles-module__exit___KBdR3 {
  animation: styles-module__markerOut___6VhQN 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7.styles-module__clearing___8rM7K {
  animation: styles-module__markerOut___6VhQN 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___9CKF7.styles-module__pending___BiY-U {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___9CKF7.styles-module__fixed___aKrQO {
  position: fixed;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC.styles-module__pending___BiY-U {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___9CKF7.styles-module__hovered___-mg2N {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___16lvD {
  display: block;
  animation: styles-module__renumberRoll___akV9B 0.2s ease-out;
}

.styles-module__markerTooltip___-VUm- {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___-VUm-.styles-module__enter___8kI3q {
  animation: styles-module__tooltipIn___aJslQ 0.1s ease-out forwards;
}

.styles-module__markerQuote___tQake {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___Rh4eI {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- {
  background: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- .styles-module__markerQuote___tQake {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- .styles-module__markerNote___Rh4eI {
  color: rgba(0, 0, 0, 0.85);
}`,dx={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",markerIn:"styles-module__markerIn___x4G8D",markerOut:"styles-module__markerOut___6VhQN",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",renumberRoll:"styles-module__renumberRoll___akV9B",markerTooltip:"styles-module__markerTooltip___-VUm-",tooltipIn:"styles-module__tooltipIn___aJslQ",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-annotation-marker-styles");if(!e)e=document.createElement("style"),e.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(e);e.textContent=ux}var Xt=dx;function F0({annotation:e,globalIndex:t,layerIndex:n,layerSize:l,isExiting:o,isClearing:a,isAnimated:i,isHovered:r,isDeleting:s,isEditingAny:g,renumberFrom:_,markerClickBehavior:b,tooltipStyle:f,onHoverEnter:w,onHoverLeave:C,onClick:D,onContextMenu:A}){let h=(r||s)&&!g,y=h&&b==="delete",k=e.isMultiSelect,E=k?"var(--agentation-color-green)":"var(--agentation-color-accent)",Q=o?Xt.exit:a?Xt.clearing:!i?Xt.enter:"",ae=o?`${(l-1-n)*20}ms`:`${n*20}ms`;return On.jsxs("div",{className:`${Xt.marker} ${k?Xt.multiSelect:""} ${Q} ${y?Xt.hovered:""}`,"data-annotation-marker":!0,style:{left:`${e.x}%`,top:e.y,backgroundColor:y?void 0:E,animationDelay:ae},onMouseEnter:()=>w(e),onMouseLeave:C,onClick:(z)=>{if(z.stopPropagation(),!o)D(e)},onContextMenu:A?(z)=>{if(b==="delete"){if(z.preventDefault(),z.stopPropagation(),!o)A(e)}}:void 0,children:[h?y?On.jsx(lh,{size:k?18:16}):On.jsx(S5,{size:16}):On.jsx("span",{className:_!==null&&t>=_?Xt.renumber:void 0,children:t+1}),r&&!g&&On.jsxs("div",{className:`${Xt.markerTooltip} ${Xt.enter}`,style:f,children:[On.jsxs("span",{className:Xt.markerQuote,children:[e.element,e.selectedText&&` "${e.selectedText.slice(0,30)}${e.selectedText.length>30?"...":""}"`]}),On.jsx("span",{className:Xt.markerNote,children:e.comment})]})]})}function _x({x:e,y:t,isMultiSelect:n,isExiting:l}){return On.jsx("div",{className:`${Xt.marker} ${Xt.pending} ${n?Xt.multiSelect:""} ${l?Xt.exit:Xt.enter}`,style:{left:`${e}%`,top:t,backgroundColor:n?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:On.jsx(_5,{size:12})})}function J0({annotation:e,fixed:t}){let n=e.isMultiSelect;return On.jsx("div",{className:`${Xt.marker} ${t?Xt.fixed:""} ${Xt.hovered} ${n?Xt.multiSelect:""} ${Xt.exit}`,"data-annotation-marker":!0,style:{left:`${e.x}%`,top:e.y},children:On.jsx(lh,{size:n?12:10})})}var fx=`.styles-module__switchContainer___Ka-AB {
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px;
  width: 24px;
  height: 16px;
  border-radius: 8px;
  background-color: #cdcdcd;
  transition: background-color 0.15s, opacity 0.15s;
}
[data-agentation-theme=dark] .styles-module__switchContainer___Ka-AB {
  background-color: #484848;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) {
  background-color: var(--agentation-color-blue);
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:disabled) {
  opacity: 0.3;
}

.styles-module__switchInput___kYDSD {
  position: absolute;
  z-index: 1;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}
.styles-module__switchInput___kYDSD:disabled {
  cursor: not-allowed;
}

.styles-module__switchThumb___4sCPH {
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: #fff;
  transition: transform 0.15s;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) .styles-module__switchThumb___4sCPH {
  transform: translateX(8px);
}`,hx={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-switch-styles");if(!e)e=document.createElement("style"),e.id="feedback-tool-styles-switch-styles",document.head.appendChild(e);e.textContent=fx}var $u=hx,Uu=({className:e="",...t})=>Pi.jsxs("div",{className:`${$u.switchContainer} ${e}`,children:[Pi.jsx("input",{className:$u.switchInput,type:"checkbox",...t}),Pi.jsx("div",{className:$u.switchThumb})]}),mx=`.styles-module__checkboxContainer___joqZk {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid rgba(26, 26, 26, 0.2);
  border-radius: 4px;
  width: 14px;
  height: 14px;
  background-color: #fff;
  transition: background-color 0.2s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk {
  border-color: rgba(255, 255, 255, 0.2);
  background-color: #252525;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #1a1a1a;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #fff;
}

.styles-module__checkboxInput___ECzzO {
  position: absolute;
  z-index: 1;
  inset: -1px;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}

.styles-module__checkboxCheck___fUXpr {
  color: #fafafa;
}
[data-agentation-theme=dark] .styles-module__checkboxCheck___fUXpr {
  color: #1a1a1a;
}

.styles-module__checkboxCheckPath___cDyh8 {
  stroke-dasharray: 9.29px;
  stroke-dashoffset: 9.29px;
  color: #fafafa;
  transition: stroke-dashoffset 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxCheckPath___cDyh8 {
  color: #1a1a1a;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) .styles-module__checkboxCheckPath___cDyh8 {
  transition-duration: 0.2s;
  stroke-dashoffset: 0;
}`,gx={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-checkbox-styles");if(!e)e=document.createElement("style"),e.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(e);e.textContent=mx}var Ls=gx,px=({className:e="",...t})=>$a.jsxs("div",{className:`${Ls.checkboxContainer} ${e}`,children:[$a.jsx("input",{className:Ls.checkboxInput,type:"checkbox",...t}),$a.jsx("svg",{className:Ls.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:$a.jsx("path",{className:Ls.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),yx=`.styles-module__container___w8eAF {
  display: flex;
  align-items: center;
  height: 24px;
}

.styles-module__label___J5mxE {
  padding-inline: 8px 2px;
  line-height: 20px;
  font-size: 13px;
  letter-spacing: -0.15px;
  color: rgba(26, 26, 26, 0.5);
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__label___J5mxE {
  color: rgba(255, 255, 255, 0.5);
}`,bx={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-checkbox-field-styles");if(!e)e=document.createElement("style"),e.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(e);e.textContent=yx}var P0=bx,eh=({className:e="",label:t,tooltip:n,checked:l,onChange:o,...a})=>{let i=xh.useId();return Ua.jsxs("div",{className:`${P0.container} ${e}`,...a,children:[Ua.jsx(px,{id:i,onChange:o,checked:l}),Ua.jsx("label",{className:P0.label,htmlFor:i,children:t}),n&&Ua.jsx(Jo,{content:n})]})},xx=`@keyframes styles-module__cycleTextIn___VBNTi {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes styles-module__scaleIn___QpQ8E {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__mcpPulse___5Q3Jj {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___VHxhx {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
@keyframes styles-module__themeIconIn___qUWMV {
  0% {
    opacity: 0;
    transform: scale(0.8) rotate(-30deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
.styles-module__settingsPanel___qNkn- {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 16px;
  padding: 12px 0;
  width: 100%;
  max-width: 253px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___qNkn-::before, .styles-module__settingsPanel___qNkn-::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___qNkn-::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn-::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrandSlash___Q-AU9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4,
.styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ,
.styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3,
.styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY,
.styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8,
.styles-module__settingsPanel___qNkn- .styles-module__sliderLabel___6K5v1,
.styles-module__settingsPanel___qNkn- .styles-module__slider___v5z-c,
.styles-module__settingsPanel___qNkn- .styles-module__themeToggle___3imlT {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___qNkn-.styles-module__enter___wginS {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___qNkn-.styles-module__exit___A4iJc {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH- {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-.styles-module__selected___k1-Vq {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__settingsPanelContainer___5it-H {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 16px;
}

.styles-module__settingsPage___BMn-3 {
  min-width: 100%;
  flex-basis: 0;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___BMn-3.styles-module__slideLeft___qUvW4 {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 0 16px 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0.styles-module__slideIn___uXDSu {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsHeader___Fn1DP {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
}

.styles-module__settingsBrand___OoKlM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___Q-AU9 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___rXmL9 {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__themeToggle___3imlT {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-left: 8px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease;
  cursor: pointer;
}
.styles-module__themeToggle___3imlT:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.7);
}

.styles-module__themeIconWrapper___pyaYa {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 20px;
  height: 20px;
}

.styles-module__themeIcon___w7lAm {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: styles-module__themeIconIn___qUWMV 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.styles-module__settingsSectionGrow___eZTRw {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___y-tDE {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___y-tDE.styles-module__settingsRowMarginTop___uLpGb {
  margin-top: 8px;
}

.styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.2);
}

.styles-module__settingsLabel___VCVOQ {
  display: flex;
  align-items: center;
  column-gap: 2px;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.15px;
  color: rgba(255, 255, 255, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__cycleButton___XMBx3 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___XMBx3:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__cycleButtonText___mbbnD {
  display: inline-block;
  animation: styles-module__cycleTextIn___VBNTi 0.2s ease-out;
}

.styles-module__cycleDots___ehp6i {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___zgSXY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__colorOptions___pbxZx {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
  height: 26px;
}

.styles-module__colorOption___Co955 {
  padding: 0;
  position: relative;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: #fff;
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__colorOption___Co955 {
  background-color: #1a1a1a;
}
.styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background-color: var(--swatch);
  transition: opacity 0.2s, transform 0.2s;
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
    --color: var(--swatch-p3);
  }
}
.styles-module__colorOption___Co955::after {
  z-index: -1;
  transform: scale(1.2);
  opacity: 0;
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::before {
  transform: scale(0.8);
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::after {
  opacity: 1;
}

.styles-module__settingsNavLink___uYIwM {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.15s ease;
  cursor: pointer;
}
.styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(255, 255, 255, 0.9);
}
.styles-module__settingsNavLink___uYIwM svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___uYIwM:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(0, 0, 0, 0.8);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___XBUzC {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__settingsBackButton___fflll {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 24px;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___fflll {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___Avra9 {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___Avra9 {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___vFTmJ {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___vFTmJ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___cG7OI {
  color: rgba(255, 255, 255, 0.8);
  text-decoration-line: underline;
  text-decoration-style: dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___cG7OI:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendContainer___VpkXk {
  display: flex;
  align-items: center;
}

.styles-module__autoSendLabel___ngNdC {
  padding-inline-end: 8px;
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s, opacity 0.15s;
  cursor: pointer;
}
.styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: var(--agentation-color-blue);
}
.styles-module__autoSendLabel___ngNdC.styles-module__disabled___9AZYS {
  opacity: 0.3;
  cursor: not-allowed;
}

.styles-module__mcpStatusDot___8AMxP {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__disconnected___mvmvQ {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___VHxhx 2s infinite;
}

.styles-module__mcpNavIndicator___auBHI {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s ease-in-out infinite;
}

.styles-module__webhookUrlInput___WDDDC {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::before {
  background: linear-gradient(to right, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::after {
  background: linear-gradient(to left, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM {
  color: #E5484D;
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4 {
  border-top-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8:hover {
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__checkboxField___ZrSqv:not(:first-child) {
  margin-top: 8px;
}

.styles-module__divider___h6Yux {
  margin-block: 8px;
  width: 100%;
  height: 1px;
  background-color: rgba(26, 26, 26, 0.07);
}
[data-agentation-theme=dark] .styles-module__divider___h6Yux {
  background-color: rgba(255, 255, 255, 0.07);
}`,vx={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-settings-panel-styles");if(!e)e=document.createElement("style"),e.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(e);e.textContent=xx}var le=vx;function wx({settings:e,onSettingsChange:t,isDarkMode:n,onToggleTheme:l,isDevMode:o,connectionStatus:a,endpoint:i,isVisible:r,toolbarNearBottom:s,settingsPage:g,onSettingsPageChange:_,onHideToolbar:b}){return K.jsx("div",{className:`${le.settingsPanel} ${r?le.enter:le.exit}`,style:s?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:K.jsxs("div",{className:le.settingsPanelContainer,children:[K.jsxs("div",{className:`${le.settingsPage} ${g==="automations"?le.slideLeft:""}`,children:[K.jsxs("div",{className:le.settingsHeader,children:[K.jsx("a",{className:le.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:K.jsx("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:K.jsx("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),K.jsxs("p",{className:le.settingsVersion,children:["v","3.0.2"]}),K.jsx("button",{className:le.themeToggle,onClick:l,title:n?"Switch to light mode":"Switch to dark mode",children:K.jsx("span",{className:le.themeIconWrapper,children:K.jsx("span",{className:le.themeIcon,children:n?K.jsx(w5,{size:20}):K.jsx(k5,{size:20})},n?"sun":"moon")})})]}),K.jsx("div",{className:le.divider}),K.jsxs("div",{className:le.settingsSection,children:[K.jsxs("div",{className:le.settingsRow,children:[K.jsxs("div",{className:le.settingsLabel,children:["Output Detail",K.jsx(Jo,{content:"Controls how much detail is included in the copied output"})]}),K.jsxs("button",{className:le.cycleButton,onClick:()=>{let w=(Zi.findIndex((C)=>C.value===e.outputDetail)+1)%Zi.length;t({outputDetail:Zi[w].value})},children:[K.jsx("span",{className:le.cycleButtonText,children:Zi.find((f)=>f.value===e.outputDetail)?.label},e.outputDetail),K.jsx("span",{className:le.cycleDots,children:Zi.map((f)=>K.jsx("span",{className:`${le.cycleDot} ${e.outputDetail===f.value?le.active:""}`},f.value))})]})]}),K.jsxs("div",{className:`${le.settingsRow} ${le.settingsRowMarginTop} ${!o?le.settingsRowDisabled:""}`,children:[K.jsxs("div",{className:le.settingsLabel,children:["React Components",K.jsx(Jo,{content:!o?"Disabled — production builds minify component names, making detection unreliable. Use in development mode.":"Include React component names in annotations"})]}),K.jsx(Uu,{checked:o&&e.reactEnabled,onChange:(f)=>t({reactEnabled:f.target.checked}),disabled:!o})]}),K.jsxs("div",{className:`${le.settingsRow} ${le.settingsRowMarginTop}`,children:[K.jsxs("div",{className:le.settingsLabel,children:["Hide Until Restart",K.jsx(Jo,{content:"Hides the toolbar until you open a new tab"})]}),K.jsx(Uu,{checked:!1,onChange:(f)=>{if(f.target.checked)b()}})]})]}),K.jsx("div",{className:le.divider}),K.jsxs("div",{className:le.settingsSection,children:[K.jsx("div",{className:`${le.settingsLabel} ${le.settingsLabelMarker}`,children:"Marker Color"}),K.jsx("div",{className:le.colorOptions,children:Fi.map((f)=>K.jsx("button",{className:`${le.colorOption} ${e.annotationColorId===f.id?le.selected:""}`,style:{"--swatch":f.srgb,"--swatch-p3":f.p3},onClick:()=>t({annotationColorId:f.id}),title:f.label,type:"button"},f.id))})]}),K.jsx("div",{className:le.divider}),K.jsxs("div",{className:le.settingsSection,children:[K.jsx(eh,{className:"checkbox-field",label:"Clear on copy/send",checked:e.autoClearAfterCopy,onChange:(f)=>t({autoClearAfterCopy:f.target.checked}),tooltip:"Automatically clear annotations after copying"}),K.jsx(eh,{className:le.checkboxField,label:"Block page interactions",checked:e.blockInteractions,onChange:(f)=>t({blockInteractions:f.target.checked})})]}),K.jsx("div",{className:le.divider}),K.jsxs("button",{className:le.settingsNavLink,onClick:()=>_("automations"),children:[K.jsx("span",{children:"Manage MCP & Webhooks"}),K.jsxs("span",{className:le.settingsNavLinkRight,children:[i&&a!=="disconnected"&&K.jsx("span",{className:`${le.mcpNavIndicator} ${le[a]}`}),K.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:K.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),K.jsxs("div",{className:`${le.settingsPage} ${le.automationsPage} ${g==="automations"?le.slideIn:""}`,children:[K.jsxs("button",{className:le.settingsBackButton,onClick:()=>_("main"),children:[K.jsx(M5,{size:16}),K.jsx("span",{children:"Manage MCP & Webhooks"})]}),K.jsx("div",{className:le.divider}),K.jsxs("div",{className:le.settingsSection,children:[K.jsxs("div",{className:le.settingsRow,children:[K.jsxs("span",{className:le.automationHeader,children:["MCP Connection",K.jsx(Jo,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),i&&K.jsx("div",{className:`${le.mcpStatusDot} ${le[a]}`,title:a==="connected"?"Connected":a==="connecting"?"Connecting...":"Disconnected"})]}),K.jsxs("p",{className:le.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",K.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:le.learnMoreLink,children:"Learn more"})]})]}),K.jsx("div",{className:le.divider}),K.jsxs("div",{className:`${le.settingsSection} ${le.settingsSectionGrow}`,children:[K.jsxs("div",{className:le.settingsRow,children:[K.jsxs("span",{className:le.automationHeader,children:["Webhooks",K.jsx(Jo,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),K.jsxs("div",{className:le.autoSendContainer,children:[K.jsx("label",{htmlFor:"agentation-auto-send",className:`${le.autoSendLabel} ${e.webhooksEnabled?le.active:""} ${!e.webhookUrl?le.disabled:""}`,children:"Auto-Send"}),K.jsx(Uu,{id:"agentation-auto-send",checked:e.webhooksEnabled,onChange:(f)=>t({webhooksEnabled:f.target.checked}),disabled:!e.webhookUrl})]})]}),K.jsx("p",{className:le.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),K.jsx("textarea",{className:le.webhookUrlInput,placeholder:"Webhook URL",value:e.webhookUrl,onKeyDown:(f)=>f.stopPropagation(),onChange:(f)=>t({webhookUrl:f.target.value})})]})]})]})})}function Yu(e,t="filtered"){let{name:n,path:l}=Ha(e);if(t==="off")return{name:n,elementName:n,path:l,reactComponents:null};let o=Kb(e,{mode:t});return{name:o.path?`${o.path} ${n}`:n,elementName:n,path:l,reactComponents:o.path}}var th=!1,ju={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},El=(e)=>{if(!e||!e.trim())return!1;try{let t=new URL(e.trim());return t.protocol==="http:"||t.protocol==="https:"}catch{return!1}},kx={compact:"off",standard:"filtered",detailed:"smart",forensic:"all"},Fi=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],Sx=()=>{if(typeof document>"u")return;if(document.getElementById("agentation-color-tokens"))return;let e=document.createElement("style");e.id="agentation-color-tokens",e.textContent=[...Fi.map((t)=>`
      [data-agentation-accent="${t.id}"] {
        --agentation-color-accent: ${t.srgb};
      }

      @supports (color: color(display-p3 0 0 0)) {
        [data-agentation-accent="${t.id}"] {
          --agentation-color-accent: ${t.p3};
        }
      }
    `),`:root {
      ${Fi.map((t)=>`--agentation-color-${t.id}: ${t.srgb};`).join(`
`)}
    }`,`@supports (color: color(display-p3 0 0 0)) {
      :root {
        ${Fi.map((t)=>`--agentation-color-${t.id}: ${t.p3};`).join(`
`)}
      }
    }`].join(""),document.head.appendChild(e)};Sx();function Ko(e,t){let n=document.elementFromPoint(e,t);if(!n)return null;while(n?.shadowRoot){let l=n.shadowRoot.elementFromPoint(e,t);if(!l||l===n)break;n=l}return n}function Iu(e){let t=e;while(t&&t!==document.body){let l=window.getComputedStyle(t).position;if(l==="fixed"||l==="sticky")return!0;t=t.parentElement}return!1}function Fo(e){return e.status!=="resolved"&&e.status!=="dismissed"}function Ds(e){let t=Ku(e),n=t.found?t:rx(e);if(n.found&&n.source)return ix(n.source,"path");return}function vh({demoAnnotations:e,demoDelay:t=1000,enableDemoMode:n=!1,onAnnotationAdd:l,onAnnotationDelete:o,onAnnotationUpdate:a,onAnnotationsClear:i,onCopy:r,onSubmit:s,copyToClipboard:g=!0,endpoint:_,sessionId:b,onSessionCreated:f,webhookUrl:w,className:C}={}){let[D,A]=T.useState(!1),[h,y]=T.useState([]),[k,E]=T.useState(!0),[Q,ae]=T.useState(()=>Bb()),[z,F]=T.useState(!1),te=T.useRef(null);T.useEffect(()=>{let d=(x)=>{let v=te.current;if(v&&v.contains(x.target))x.stopPropagation()},p=["mousedown","click","pointerdown"];return p.forEach((x)=>document.body.addEventListener(x,d)),()=>{p.forEach((x)=>document.body.removeEventListener(x,d))}},[]);let[J,me]=T.useState(!1),[tt,ht]=T.useState(!1),[Re,qe]=T.useState(null),[Te,et]=T.useState({x:0,y:0}),[G,pe]=T.useState(null),[Ke,Bt]=T.useState(!1),[wn,gn]=T.useState("idle"),[io,Wn]=T.useState(!1),[ro,rl]=T.useState(!1),[Bl,so]=T.useState(null),[jo,zn]=T.useState(null),[sl,kn]=T.useState([]),[bl,xl]=T.useState(null),[ka,cl]=T.useState(null),[Be,q]=T.useState(null),[_e,be]=T.useState(null),[ze,xe]=T.useState([]),[nt,rt]=T.useState(0),[Fe,Ye]=T.useState(!1),[ge,M]=T.useState(!1),[L,H]=T.useState(!1),[Y,P]=T.useState(!1),[ie,X]=T.useState(!1),[se,Me]=T.useState("main"),[We,lt]=T.useState(!1),[ce,st]=T.useState(!1),[He,Ae]=T.useState(!1),[ue,ct]=T.useState([]),[Ve,Le]=T.useState(null),Je=T.useRef(!1),[ve,wt]=T.useState(!1),[nn,Qn]=T.useState(!1),[vl,Sn]=T.useState(1),[Hl,os]=T.useState("new-page"),[Yt,$l]=T.useState(""),[as,ry]=T.useState(!1),[Ce,Gn]=T.useState(null),cu=T.useRef(!1),uu=T.useRef({rearrange:null,placements:[]}),Io=T.useRef({rearrange:null,placements:[]}),[sy,$f]=T.useState(0),[cy,uy]=T.useState(0),[dy,du]=T.useState(0),[_y,Uf]=T.useState(0),Ni=T.useRef(new Set),is=T.useRef(new Set),ul=T.useRef(null),rs=T.useRef(),Yf=ce&&D&&!He&&ve;T.useEffect(()=>{if(Yf){Qn(!1);let d=Ba(()=>{Qn(!0)});return()=>cancelAnimationFrame(d)}else Qn(!1)},[Yf]);let zi=T.useRef(new Map),Oi=T.useRef(new Map),Ri=T.useRef(),[dl,_u]=T.useState(!1),[Vn,fy]=T.useState([]),hy=T.useRef(Vn);hy.current=Vn;let[jf,T6]=T.useState(null),fu=T.useRef(null),A6=T.useRef(!1),L6=T.useRef([]),D6=T.useRef(0),N6=T.useRef(null),z6=T.useRef(null),O6=T.useRef(1),[If,Xf]=T.useState(!1),Sa=T.useRef(null),[Qt,Ca]=T.useState([]),wl=T.useRef({cmd:!1,shift:!1}),fn=()=>{lt(!0)},my=()=>{lt(!1)},gy=()=>{if(!If)Sa.current=he(()=>Xf(!0),850)},py=()=>{if(Sa.current)clearTimeout(Sa.current),Sa.current=null;Xf(!1),my()};T.useEffect(()=>()=>{if(Sa.current)clearTimeout(Sa.current)},[]);let[$e,yy]=T.useState(()=>{try{let d=JSON.parse(localStorage.getItem("feedback-toolbar-settings")??"");return{...ju,...d,annotationColorId:Fi.find((p)=>p.id===d.annotationColorId)?d.annotationColorId:ju.annotationColorId}}catch{return ju}}),[kl,qf]=T.useState(!0),[Wf,Qf]=T.useState(!1),by=()=>{te.current?.classList.add(j.disableTransitions),qf((d)=>!d),Ba(()=>{te.current?.classList.remove(j.disableTransitions)})},Gf=!1,Xo=Gf&&$e.reactEnabled?kx[$e.outputDetail]:"off",[Jt,hu]=T.useState(b??null),Vf=T.useRef(!1),[_l,qo]=T.useState(_?"connecting":"disconnected"),[Nt,mu]=T.useState(null),[Wo,Zf]=T.useState(!1),[Ma,Kf]=T.useState(null),gu=T.useRef(!1),[Ff,Bi]=T.useState(new Set),[Jf,ss]=T.useState(new Set),[Hi,cs]=T.useState(!1),[xy,Ea]=T.useState(!1),[Ul,Pf]=T.useState(!1),Ta=T.useRef(null),Sl=T.useRef(null),$i=T.useRef(null),Ui=T.useRef(null),us=T.useRef(!1),e0=T.useRef(0),ds=T.useRef(null),t0=T.useRef(null),pu=8,vy=50,n0=T.useRef(null),l0=T.useRef(null),Yi=T.useRef(null),ye=typeof window<"u"?window.location.pathname:"/";T.useEffect(()=>{if(Y)X(!0);else{lt(!1),Me("main");let d=he(()=>X(!1),0);return()=>clearTimeout(d)}},[Y]);let yu=D&&k&&!ce;T.useEffect(()=>{if(yu){ht(!1),me(!0),Bi(new Set);let d=he(()=>{Bi((p)=>{let x=new Set(p);return h.forEach((v)=>x.add(v.id)),x})},350);return()=>clearTimeout(d)}else if(J){ht(!0);let d=he(()=>{me(!1),ht(!1)},250);return()=>clearTimeout(d)}},[yu]),T.useEffect(()=>{M(!0),rt(window.scrollY);let d=Ki(ye);if(y(d.filter(Fo)),!th)Qf(!0),th=!0,he(()=>Qf(!1),750);try{let p=localStorage.getItem("feedback-toolbar-theme");if(p!==null)qf(p==="dark")}catch(p){}try{let p=localStorage.getItem("feedback-toolbar-position");if(p){let x=JSON.parse(p);if(typeof x.x==="number"&&typeof x.y==="number")mu(x)}}catch(p){}},[ye]),T.useEffect(()=>{if(ge)localStorage.setItem("feedback-toolbar-settings",JSON.stringify($e))},[$e,ge]),T.useEffect(()=>{if(ge)localStorage.setItem("feedback-toolbar-theme",kl?"dark":"light")},[kl,ge]);let o0=T.useRef(!1);T.useEffect(()=>{let d=o0.current;if(o0.current=Wo,d&&!Wo&&Nt&&ge)localStorage.setItem("feedback-toolbar-position",JSON.stringify(Nt))},[Wo,Nt,ge]),T.useEffect(()=>{if(!_||!ge||Vf.current)return;Vf.current=!0,qo("connecting"),(async()=>{try{let p=Ob(ye),x=b||p,v=!1;if(x)try{let S=await Q0(_,x);hu(S.id),qo("connected"),Ru(ye,S.id),v=!0;let R=Ki(ye),W=new Set(S.annotations.map((oe)=>oe.id)),Z=R.filter((oe)=>{if(W.has(oe.id))return!1;return!0});if(Z.length>0){let re=`${typeof window<"u"?window.location.origin:""}${ye}`,Ee=(await Promise.allSettled(Z.map((fe)=>Oa(_,S.id,{...fe,sessionId:S.id,url:re})))).map((fe,ne)=>{if(fe.status==="fulfilled")return fe.value;return console.warn("[Agentation] Failed to sync annotation:",fe.reason),Z[ne]}),je=[...S.annotations,...Ee];y(je.filter(Fo)),Qi(ye,je.filter(Fo),S.id)}else y(S.annotations.filter(Fo)),Qi(ye,S.annotations.filter(Fo),S.id)}catch(S){console.warn("[Agentation] Could not join session, creating new:",S),Rb(ye)}if(!v){let S=typeof window<"u"?window.location.href:"/",R=await Bu(_,S);hu(R.id),qo("connected"),Ru(ye,R.id),f?.(R.id);let W=Mb(),Z=typeof window<"u"?window.location.origin:"",oe=[];for(let[re,de]of W){let Ee=de.filter((ne)=>!ne._syncedTo);if(Ee.length===0)continue;let je=`${Z}${re}`,fe=re===ye;oe.push((async()=>{try{let ne=fe?R:await Bu(_,je),Pt=(await Promise.allSettled(Ee.map((ut)=>Oa(_,ne.id,{...ut,sessionId:ne.id,url:je})))).map((ut,It)=>{if(ut.status==="fulfilled")return ut.value;return console.warn("[Agentation] Failed to sync annotation:",ut.reason),Ee[It]}).filter(Fo);if(Qi(re,Pt,ne.id),fe){let ut=new Set(Ee.map((It)=>It.id));y((It)=>{let we=It.filter((De)=>!ut.has(De.id));return[...Pt,...we]})}}catch(ne){console.warn(`[Agentation] Failed to sync annotations for ${re}:`,ne)}})())}await Promise.allSettled(oe)}}catch(p){qo("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",p)}})()},[_,b,ge,f,ye]),T.useEffect(()=>{if(!_||!ge)return;let d=async()=>{try{if((await fetch(`${_}/health`)).ok)qo("connected");else qo("disconnected")}catch{qo("disconnected")}};d();let p=A5(d,1e4);return()=>clearInterval(p)},[_,ge]),T.useEffect(()=>{if(!_||!ge||!Jt)return;let d=new EventSource(`${_}/sessions/${Jt}/events`),p=["resolved","dismissed"],x=(v)=>{try{let S=JSON.parse(v.data);if(p.includes(S.payload?.status)){let R=S.payload.id,W=S.payload.kind;if(W==="placement"){for(let[Z,oe]of zi.current)if(oe===R){zi.current.delete(Z),ct((re)=>re.filter((de)=>de.id!==Z));break}}else if(W==="rearrange"){for(let[Z,oe]of Oi.current)if(oe===R){Oi.current.delete(Z),Gn((re)=>{if(!re)return null;let de=re.sections.filter((Ee)=>Ee.id!==Z);if(de.length===0)return null;return{...re,sections:de}});break}}else ss((Z)=>new Set(Z).add(R)),he(()=>{y((Z)=>Z.filter((oe)=>oe.id!==R)),ss((Z)=>{let oe=new Set(Z);return oe.delete(R),oe})},150)}}catch{}};return d.addEventListener("annotation.updated",x),()=>{d.removeEventListener("annotation.updated",x),d.close()}},[_,ge,Jt]),T.useEffect(()=>{if(!_||!ge)return;let d=t0.current==="disconnected",p=_l==="connected";if(t0.current=_l,d&&p)(async()=>{try{let v=Ki(ye);if(v.length===0)return;let R=`${typeof window<"u"?window.location.origin:""}${ye}`,W=Jt,Z=[];if(W)try{Z=(await Q0(_,W)).annotations}catch{W=null}if(!W)W=(await Bu(_,R)).id,hu(W),Ru(ye,W);let oe=new Set(Z.map((de)=>de.id)),re=v.filter((de)=>!oe.has(de.id));if(re.length>0){let Ee=(await Promise.allSettled(re.map((ne)=>Oa(_,W,{...ne,sessionId:W,url:R})))).map((ne,jt)=>{if(ne.status==="fulfilled")return ne.value;return console.warn("[Agentation] Failed to sync annotation on reconnect:",ne.reason),re[jt]}),fe=[...Z,...Ee].filter(Fo);y(fe),Qi(ye,fe,W)}}catch(v){console.warn("[Agentation] Failed to sync on reconnect:",v)}})()},[_l,_,ge,Jt,ye]);let wy=T.useCallback(()=>{if(z)return;F(!0),P(!1),A(!1),he(()=>{Hb(!0),ae(!0),F(!1)},400)},[z]);T.useEffect(()=>{if(!n)return;if(!ge||!e||e.length===0)return;if(h.length>0)return;let d=[];return d.push(he(()=>{A(!0)},t-200)),e.forEach((p,x)=>{let v=t+x*300;d.push(he(()=>{let S=document.querySelector(p.selector);if(!S)return;let R=S.getBoundingClientRect(),{name:W,path:Z}=Ha(S),oe={id:`demo-${Date.now()}-${x}`,x:(R.left+R.width/2)/window.innerWidth*100,y:R.top+R.height/2+window.scrollY,comment:p.comment,element:W,elementPath:Z,timestamp:Date.now(),selectedText:p.selectedText,boundingBox:{x:R.left,y:R.top+window.scrollY,width:R.width,height:R.height},nearbyText:qi(S),cssClasses:Wi(S)};y((re)=>[...re,oe])},v))}),()=>{d.forEach(clearTimeout)}},[n,ge,e,t]),T.useEffect(()=>{let d=()=>{if(rt(window.scrollY),Ye(!0),Yi.current)clearTimeout(Yi.current);Yi.current=he(()=>{Ye(!1)},150)};return window.addEventListener("scroll",d,{passive:!0}),()=>{if(window.removeEventListener("scroll",d),Yi.current)clearTimeout(Yi.current)}},[]),T.useEffect(()=>{if(ge&&h.length>0)if(Jt)Qi(ye,h,Jt);else ph(ye,h);else if(ge&&h.length===0)localStorage.removeItem(Os(ye))},[h,ye,ge,Jt]),T.useEffect(()=>{if(ge&&!Je.current){Je.current=!0;let d=Eb(ye);if(d.length>0)ct(d)}},[ge,ye]),T.useEffect(()=>{if(ge&&Je.current&&!ve)if(ue.length>0)Tb(ye,ue);else Ab(ye)},[ue,ye,ge,ve]),T.useEffect(()=>{if(ge&&!cu.current){cu.current=!0;let d=Lb(ye);if(d){let p={...d,sections:d.sections.map((x)=>({...x,currentRect:x.currentRect??{...x.originalRect}}))};Gn(p)}}},[ge,ye]),T.useEffect(()=>{if(ge&&cu.current&&!ve)if(Ce)Db(ye,Ce);else Nb(ye)},[Ce,ye,ge,ve]);let bu=T.useRef(!1);T.useEffect(()=>{if(ge&&!bu.current){bu.current=!0;let d=zb(ye);if(d){if(Io.current={rearrange:d.rearrange,placements:d.placements||[]},d.purpose)$l(d.purpose)}}},[ge,ye]),T.useEffect(()=>{if(!ge||!bu.current)return;let d=Io.current;if(ve)if((Ce?.sections?.length??0)>0||ue.length>0||Yt)W0(ye,{rearrange:Ce,placements:ue,purpose:Yt});else Ts(ye);else if((d.rearrange?.sections?.length??0)>0||d.placements.length>0||Yt)W0(ye,{rearrange:d.rearrange,placements:d.placements,purpose:Yt});else Ts(ye)},[Ce,ue,Yt,ve,ye,ge]),T.useEffect(()=>{if(ce&&!Ce)Gn({sections:[],originalOrder:[],detectedAt:Date.now()})},[ce,Ce]),T.useEffect(()=>{if(!_||!Jt)return;let d=zi.current,p=new Set(ue.map((x)=>x.id));for(let x of ue){if(d.has(x.id))continue;d.set(x.id,"");let v=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:ye;Oa(_,Jt,{id:x.id,x:x.x/window.innerWidth*100,y:x.y,comment:`Place ${x.type} at (${Math.round(x.x)}, ${Math.round(x.y)}), ${x.width}×${x.height}px${x.text?` — "${x.text}"`:""}`,element:`[design:${x.type}]`,elementPath:"[placement]",timestamp:x.timestamp,url:v,intent:"change",severity:"important",kind:"placement",placement:{componentType:x.type,width:x.width,height:x.height,scrollY:x.scrollY,text:x.text}}).then((S)=>{if(d.has(x.id))d.set(x.id,S.id)}).catch((S)=>{console.warn("[Agentation] Failed to sync placement annotation:",S),d.delete(x.id)})}for(let[x,v]of d)if(!p.has(x)){if(d.delete(x),v)fo(_,v).catch(()=>{})}},[ue,_,Jt,ye]),T.useEffect(()=>{if(!_||!Jt)return;if(Ri.current)clearTimeout(Ri.current);return Ri.current=he(()=>{let d=Oi.current;if(!Ce||Ce.sections.length===0){for(let[,v]of d)if(v)fo(_,v).catch(()=>{});d.clear();return}let p=new Set(Ce.sections.map((v)=>v.id)),x=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:ye;for(let v of Ce.sections){let{originalRect:S,currentRect:R}=v;if(!(Math.abs(S.x-R.x)>1||Math.abs(S.y-R.y)>1||Math.abs(S.width-R.width)>1||Math.abs(S.height-R.height)>1)){let oe=d.get(v.id);if(oe)d.delete(v.id),fo(_,oe).catch(()=>{});continue}let Z=d.get(v.id);if(Z)G0(_,Z,{comment:`Move ${v.label} section (${v.tagName}) — from (${Math.round(S.x)},${Math.round(S.y)}) ${Math.round(S.width)}×${Math.round(S.height)} to (${Math.round(R.x)},${Math.round(R.y)}) ${Math.round(R.width)}×${Math.round(R.height)}`}).catch((oe)=>{console.warn("[Agentation] Failed to update rearrange annotation:",oe)});else d.set(v.id,""),Oa(_,Jt,{id:v.id,x:R.x/window.innerWidth*100,y:R.y,comment:`Move ${v.label} section (${v.tagName}) — from (${Math.round(S.x)},${Math.round(S.y)}) ${Math.round(S.width)}×${Math.round(S.height)} to (${Math.round(R.x)},${Math.round(R.y)}) ${Math.round(R.width)}×${Math.round(R.height)}`,element:v.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:x,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:v.selector,label:v.label,tagName:v.tagName,originalRect:S,currentRect:R}}).then((oe)=>{if(d.has(v.id))d.set(v.id,oe.id)}).catch((oe)=>{console.warn("[Agentation] Failed to sync rearrange annotation:",oe),d.delete(v.id)})}for(let[v,S]of d)if(!p.has(v)){if(d.delete(v),S)fo(_,S).catch(()=>{})}},300),()=>{if(Ri.current)clearTimeout(Ri.current)}},[Ce,_,Jt,ye]);let Aa=T.useRef(new Map);T.useLayoutEffect(()=>{let d=Ce?.sections??[],p=new Set;if((ce||He)&&D)for(let x of d){p.add(x.id);try{let v=document.querySelector(x.selector);if(!v)continue;if(!Aa.current.has(x.id)){let S={transform:v.style.transform,transformOrigin:v.style.transformOrigin,opacity:v.style.opacity,position:v.style.position,zIndex:v.style.zIndex,display:v.style.display},R=[],W=v.parentElement;while(W&&W!==document.body){let oe=getComputedStyle(W);if(oe.overflow!=="visible"||oe.overflowX!=="visible"||oe.overflowY!=="visible")R.push({el:W,overflow:W.style.overflow}),W.style.overflow="visible";W=W.parentElement}if(getComputedStyle(v).display==="inline")v.style.display="inline-block";Aa.current.set(x.id,{el:v,origStyles:S,ancestors:R}),v.style.transformOrigin="top left",v.style.zIndex="9999"}}catch{}}for(let[x,v]of Aa.current)if(!p.has(x)){let{el:S,origStyles:R,ancestors:W}=v;S.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",S.style.transform=R.transform,S.style.transformOrigin=R.transformOrigin,S.style.opacity=R.opacity,S.style.position=R.position,S.style.zIndex=R.zIndex,Aa.current.delete(x),he(()=>{S.style.transition="",S.style.display=R.display;for(let Z of W)Z.el.style.overflow=Z.overflow},450)}},[Ce,ce,He,D]),T.useEffect(()=>()=>{for(let[,d]of Aa.current){let{el:p,origStyles:x,ancestors:v}=d;p.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",p.style.transform=x.transform,p.style.transformOrigin=x.transformOrigin,p.style.opacity=x.opacity,p.style.position=x.position,p.style.zIndex=x.zIndex,he(()=>{p.style.transition="",p.style.display=x.display;for(let S of v)S.el.style.overflow=S.overflow},450)}Aa.current.clear()},[]);let _s=T.useCallback(()=>{Ae(!0),st(!1),Le(null),clearTimeout(rs.current),rs.current=he(()=>{Ae(!1)},300)},[]),a0=T.useCallback(()=>{if(ce)Ae(!0),st(!1),Le(null),clearTimeout(rs.current),rs.current=he(()=>{Ae(!1)},300);A(!1)},[ce]),i0=T.useCallback(()=>{if(L)return;D5(),H(!0)},[L]),fs=T.useCallback(()=>{if(!L)return;D0(),H(!1)},[L]),xu=T.useCallback(()=>{if(L)fs();else i0()},[L,i0,fs]),r0=T.useCallback(()=>{if(Qt.length===0)return;let d=Qt[0],p=d.element,x=Qt.length>1,v=Qt.map((S)=>S.element.getBoundingClientRect());if(!x){let S=v[0],R=Iu(p);pe({x:S.left/window.innerWidth*100,y:R?S.top:S.top+window.scrollY,clientY:S.top,element:d.name,elementPath:d.path,boundingBox:{x:S.left,y:R?S.top:S.top+window.scrollY,width:S.width,height:S.height},isFixed:R,fullPath:Cs(p),accessibility:Ss(p),computedStyles:ks(p),computedStylesObj:ws(p),nearbyElements:vs(p),cssClasses:Wi(p),nearbyText:qi(p),reactComponents:d.reactComponents,sourceFile:Ds(p)})}else{let S={left:Math.min(...v.map((ne)=>ne.left)),top:Math.min(...v.map((ne)=>ne.top)),right:Math.max(...v.map((ne)=>ne.right)),bottom:Math.max(...v.map((ne)=>ne.bottom))},R=Qt.slice(0,5).map((ne)=>ne.name).join(", "),W=Qt.length>5?` +${Qt.length-5} more`:"",Z=v.map((ne)=>({x:ne.left,y:ne.top+window.scrollY,width:ne.width,height:ne.height})),re=Qt[Qt.length-1].element,de=v[v.length-1],Ee=de.left+de.width/2,je=de.top+de.height/2,fe=Iu(re);pe({x:Ee/window.innerWidth*100,y:fe?je:je+window.scrollY,clientY:je,element:`${Qt.length} elements: ${R}${W}`,elementPath:"multi-select",boundingBox:{x:S.left,y:S.top+window.scrollY,width:S.right-S.left,height:S.bottom-S.top},isMultiSelect:!0,isFixed:fe,elementBoundingBoxes:Z,multiSelectElements:Qt.map((ne)=>ne.element),targetElement:re,fullPath:Cs(p),accessibility:Ss(p),computedStyles:ks(p),computedStylesObj:ws(p),nearbyElements:vs(p),cssClasses:Wi(p),nearbyText:qi(p),sourceFile:Ds(p)})}Ca([]),qe(null)},[Qt]);T.useEffect(()=>{if(!D){if(pe(null),q(null),be(null),xe([]),qe(null),P(!1),Ca([]),wl.current={cmd:!1,shift:!1},L)fs()}},[D,L,fs]),T.useEffect(()=>()=>{D0()},[]),T.useEffect(()=>{if(!D)return;let d=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),p=":not([data-agentation-root]):not([data-agentation-root] *)",x=document.createElement("style");return x.id="feedback-cursor-styles",x.textContent=`
      body ${p} {
        cursor: crosshair !important;
      }

      body :is(${d})${p} {
        cursor: text !important;
      }
    `,document.head.appendChild(x),()=>{let v=document.getElementById("feedback-cursor-styles");if(v)v.remove()}},[D]),T.useEffect(()=>{if(jf!==null&&D)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[jf,D]),T.useEffect(()=>{if(!D||G||dl||ce)return;let d=(p)=>{let x=p.composedPath()[0]||p.target;if(bn(x,"[data-feedback-toolbar]")){qe(null);return}let v=Ko(p.clientX,p.clientY);if(!v||bn(v,"[data-feedback-toolbar]")){qe(null);return}let{name:S,elementName:R,path:W,reactComponents:Z}=Yu(v,Xo),oe=v.getBoundingClientRect();qe({element:S,elementName:R,elementPath:W,rect:oe,reactComponents:Z}),et({x:p.clientX,y:p.clientY})};return document.addEventListener("mousemove",d),()=>document.removeEventListener("mousemove",d)},[D,G,dl,ce,Xo,Vn]);let hs=T.useCallback((d)=>{if(q(d),so(null),zn(null),kn([]),d.elementBoundingBoxes?.length){let p=[];for(let x of d.elementBoundingBoxes){let v=x.x+x.width/2,S=x.y+x.height/2-window.scrollY,R=Ko(v,S);if(R)p.push(R)}xe(p),be(null)}else if(d.boundingBox){let p=d.boundingBox,x=p.x+p.width/2,v=d.isFixed?p.y+p.height/2:p.y+p.height/2-window.scrollY,S=Ko(x,v);if(S){let R=S.getBoundingClientRect(),W=R.width/p.width,Z=R.height/p.height;if(W<0.5||Z<0.5)be(null);else be(S)}else be(null);xe([])}else be(null),xe([])},[]);T.useEffect(()=>{if(!D||dl||ce)return;let d=(p)=>{if(us.current){us.current=!1;return}let x=p.composedPath()[0]||p.target;if(bn(x,"[data-feedback-toolbar]"))return;if(bn(x,"[data-annotation-popup]"))return;if(bn(x,"[data-annotation-marker]"))return;if(p.metaKey&&p.shiftKey&&!G&&!Be){p.preventDefault(),p.stopPropagation();let mt=Ko(p.clientX,p.clientY);if(!mt)return;let Pt=mt.getBoundingClientRect(),{name:ut,path:It,reactComponents:we}=Yu(mt,Xo),De=Qt.findIndex((zt)=>zt.element===mt);if(De>=0)Ca((zt)=>zt.filter((Ht,fl)=>fl!==De));else Ca((zt)=>[...zt,{element:mt,rect:Pt,name:ut,path:It,reactComponents:we??void 0}]);return}let v=bn(x,"button, a, input, select, textarea, [role='button'], [onclick]");if($e.blockInteractions&&v)p.preventDefault(),p.stopPropagation();if(G){if(v&&!$e.blockInteractions)return;p.preventDefault(),n0.current?.shake();return}if(Be){if(v&&!$e.blockInteractions)return;p.preventDefault(),l0.current?.shake();return}p.preventDefault();let S=Ko(p.clientX,p.clientY);if(!S)return;let{name:R,path:W,reactComponents:Z}=Yu(S,Xo),oe=S.getBoundingClientRect(),re=p.clientX/window.innerWidth*100,de=Iu(S),Ee=de?p.clientY:p.clientY+window.scrollY,je=window.getSelection(),fe;if(je&&je.toString().trim().length>0)fe=je.toString().trim().slice(0,500);let ne=ws(S),jt=ks(S);pe({x:re,y:Ee,clientY:p.clientY,element:R,elementPath:W,selectedText:fe,boundingBox:{x:oe.left,y:de?oe.top:oe.top+window.scrollY,width:oe.width,height:oe.height},nearbyText:qi(S),cssClasses:Wi(S),isFixed:de,fullPath:Cs(S),accessibility:Ss(S),computedStyles:jt,computedStylesObj:ne,nearbyElements:vs(S),reactComponents:Z??void 0,sourceFile:Ds(S),targetElement:S}),qe(null)};return document.addEventListener("click",d,!0),()=>document.removeEventListener("click",d,!0)},[D,dl,ce,G,Be,$e.blockInteractions,Xo,Qt]),T.useEffect(()=>{if(!D)return;let d=(v)=>{if(v.key==="Meta")wl.current.cmd=!0;if(v.key==="Shift")wl.current.shift=!0},p=(v)=>{let S=wl.current.cmd&&wl.current.shift;if(v.key==="Meta")wl.current.cmd=!1;if(v.key==="Shift")wl.current.shift=!1;let R=wl.current.cmd&&wl.current.shift;if(S&&!R&&Qt.length>0)r0()},x=()=>{wl.current={cmd:!1,shift:!1},Ca([])};return document.addEventListener("keydown",d),document.addEventListener("keyup",p),window.addEventListener("blur",x),()=>{document.removeEventListener("keydown",d),document.removeEventListener("keyup",p),window.removeEventListener("blur",x)}},[D,Qt,r0]),T.useEffect(()=>{if(!D||G||dl||ce)return;let d=(p)=>{let x=p.composedPath()[0]||p.target;if(bn(x,"[data-feedback-toolbar]"))return;if(bn(x,"[data-annotation-marker]"))return;if(bn(x,"[data-annotation-popup]"))return;if(new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(x.tagName)||x.isContentEditable)return;p.preventDefault(),Ta.current={x:p.clientX,y:p.clientY}};return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[D,G,dl,ce]),T.useEffect(()=>{if(!D||G)return;let d=(p)=>{if(!Ta.current)return;let x=p.clientX-Ta.current.x,v=p.clientY-Ta.current.y,S=x*x+v*v,R=pu*pu;if(!Ul&&S>=R)Sl.current=Ta.current,Pf(!0),p.preventDefault();if((Ul||S>=R)&&Sl.current){if($i.current){let we=Math.min(Sl.current.x,p.clientX),De=Math.min(Sl.current.y,p.clientY),zt=Math.abs(p.clientX-Sl.current.x),Ht=Math.abs(p.clientY-Sl.current.y);$i.current.style.transform=`translate(${we}px, ${De}px)`,$i.current.style.width=`${zt}px`,$i.current.style.height=`${Ht}px`}let W=Date.now();if(W-e0.current<vy)return;e0.current=W;let Z=Sl.current.x,oe=Sl.current.y,re=Math.min(Z,p.clientX),de=Math.min(oe,p.clientY),Ee=Math.max(Z,p.clientX),je=Math.max(oe,p.clientY),fe=(re+Ee)/2,ne=(de+je)/2,jt=new Set,mt=[[re,de],[Ee,de],[re,je],[Ee,je],[fe,ne],[fe,de],[fe,je],[re,ne],[Ee,ne]];for(let[we,De]of mt){let zt=document.elementsFromPoint(we,De);for(let Ht of zt)if(Ht instanceof HTMLElement)jt.add(Ht)}let Pt=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(let we of Pt)if(we instanceof HTMLElement){let De=we.getBoundingClientRect(),zt=De.left+De.width/2,Ht=De.top+De.height/2,fl=zt>=re&&zt<=Ee&&Ht>=de&&Ht<=je,Zn=Math.min(De.right,Ee)-Math.max(De.left,re),rn=Math.min(De.bottom,je)-Math.max(De.top,de),Ii=Zn>0&&rn>0?Zn*rn:0,Go=De.width*De.height,co=Go>0?Ii/Go:0;if(fl||co>0.5)jt.add(we)}let ut=[],It=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(let we of jt){if(bn(we,"[data-feedback-toolbar]")||bn(we,"[data-annotation-marker]"))continue;let De=we.getBoundingClientRect();if(De.width>window.innerWidth*0.8&&De.height>window.innerHeight*0.5)continue;if(De.width<10||De.height<10)continue;if(De.left<Ee&&De.right>re&&De.top<je&&De.bottom>de){let zt=we.tagName,Ht=It.has(zt);if(!Ht&&(zt==="DIV"||zt==="SPAN")){let fl=we.textContent&&we.textContent.trim().length>0,Zn=we.onclick!==null||we.getAttribute("role")==="button"||we.getAttribute("role")==="link"||we.classList.contains("clickable")||we.hasAttribute("data-clickable");if((fl||Zn)&&!we.querySelector("p, h1, h2, h3, h4, h5, h6, button, a"))Ht=!0}if(Ht){let fl=!1;for(let Zn of ut)if(Zn.left<=De.left&&Zn.right>=De.right&&Zn.top<=De.top&&Zn.bottom>=De.bottom){fl=!0;break}if(!fl)ut.push(De)}}}if(Ui.current){let we=Ui.current;while(we.children.length>ut.length)we.removeChild(we.lastChild);ut.forEach((De,zt)=>{let Ht=we.children[zt];if(!Ht)Ht=document.createElement("div"),Ht.className=j.selectedElementHighlight,we.appendChild(Ht);Ht.style.transform=`translate(${De.left}px, ${De.top}px)`,Ht.style.width=`${De.width}px`,Ht.style.height=`${De.height}px`})}}};return document.addEventListener("mousemove",d,{passive:!0}),()=>document.removeEventListener("mousemove",d)},[D,G,Ul,pu]),T.useEffect(()=>{if(!D)return;let d=(p)=>{let x=Ul,v=Sl.current;if(Ul&&v){us.current=!0;let S=Math.min(v.x,p.clientX),R=Math.min(v.y,p.clientY),W=Math.max(v.x,p.clientX),Z=Math.max(v.y,p.clientY),oe=[],re="button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th";document.querySelectorAll(re).forEach((fe)=>{if(!(fe instanceof HTMLElement))return;if(bn(fe,"[data-feedback-toolbar]")||bn(fe,"[data-annotation-marker]"))return;let ne=fe.getBoundingClientRect();if(ne.width>window.innerWidth*0.8&&ne.height>window.innerHeight*0.5)return;if(ne.width<10||ne.height<10)return;if(ne.left<W&&ne.right>S&&ne.top<Z&&ne.bottom>R)oe.push({element:fe,rect:ne})});let de=oe.filter(({element:fe})=>!oe.some(({element:ne})=>ne!==fe&&fe.contains(ne))),Ee=p.clientX/window.innerWidth*100,je=p.clientY+window.scrollY;if(de.length>0){let fe=de.reduce((It,{rect:we})=>({left:Math.min(It.left,we.left),top:Math.min(It.top,we.top),right:Math.max(It.right,we.right),bottom:Math.max(It.bottom,we.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),ne=de.slice(0,5).map(({element:It})=>Ha(It).name).join(", "),jt=de.length>5?` +${de.length-5} more`:"",mt=de[0].element,Pt=ws(mt),ut=ks(mt);pe({x:Ee,y:je,clientY:p.clientY,element:`${de.length} elements: ${ne}${jt}`,elementPath:"multi-select",boundingBox:{x:fe.left,y:fe.top+window.scrollY,width:fe.right-fe.left,height:fe.bottom-fe.top},isMultiSelect:!0,fullPath:Cs(mt),accessibility:Ss(mt),computedStyles:ut,computedStylesObj:Pt,nearbyElements:vs(mt),cssClasses:Wi(mt),nearbyText:qi(mt),sourceFile:Ds(mt)})}else{let fe=Math.abs(W-S),ne=Math.abs(Z-R);if(fe>20&&ne>20)pe({x:Ee,y:je,clientY:p.clientY,element:"Area selection",elementPath:`region at (${Math.round(S)}, ${Math.round(R)})`,boundingBox:{x:S,y:R+window.scrollY,width:fe,height:ne},isMultiSelect:!0})}qe(null)}else if(x)us.current=!0;if(Ta.current=null,Sl.current=null,Pf(!1),Ui.current)Ui.current.innerHTML=""};return document.addEventListener("mouseup",d),()=>document.removeEventListener("mouseup",d)},[D,Ul]);let Cl=T.useCallback(async(d,p,x)=>{let v=$e.webhookUrl||w;if(!v||!$e.webhooksEnabled&&!x)return!1;try{return(await fetch(v,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:d,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...p})})).ok}catch(S){return console.warn("[Agentation] Webhook failed:",S),!1}},[w,$e.webhookUrl,$e.webhooksEnabled]),ky=T.useCallback((d)=>{if(!G)return;let p={id:Date.now().toString(),x:G.x,y:G.y,comment:d,element:G.element,elementPath:G.elementPath,timestamp:Date.now(),selectedText:G.selectedText,boundingBox:G.boundingBox,nearbyText:G.nearbyText,cssClasses:G.cssClasses,isMultiSelect:G.isMultiSelect,isFixed:G.isFixed,fullPath:G.fullPath,accessibility:G.accessibility,computedStyles:G.computedStyles,nearbyElements:G.nearbyElements,reactComponents:G.reactComponents,sourceFile:G.sourceFile,elementBoundingBoxes:G.elementBoundingBoxes,..._&&Jt?{sessionId:Jt,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};if(y((x)=>[...x,p]),ds.current=p.id,he(()=>{ds.current=null},300),he(()=>{Bi((x)=>new Set(x).add(p.id))},250),l?.(p),Cl("annotation.add",{annotation:p}),cs(!0),he(()=>{pe(null),cs(!1)},150),window.getSelection()?.removeAllRanges(),_&&Jt)Oa(_,Jt,p).then((x)=>{if(x.id!==p.id)y((v)=>v.map((S)=>S.id===p.id?{...S,id:x.id}:S)),Bi((v)=>{let S=new Set(v);return S.delete(p.id),S.add(x.id),S})}).catch((x)=>{console.warn("[Agentation] Failed to sync annotation:",x)})},[G,l,Cl,_,Jt]),vu=T.useCallback(()=>{cs(!0),he(()=>{pe(null),cs(!1)},150)},[]),wu=T.useCallback((d)=>{let p=h.findIndex((v)=>v.id===d),x=h[p];if(Be?.id===d)Ea(!0),he(()=>{q(null),be(null),xe([]),Ea(!1)},150);if(xl(d),ss((v)=>new Set(v).add(d)),x)o?.(x),Cl("annotation.delete",{annotation:x});if(_)fo(_,d).catch((v)=>{console.warn("[Agentation] Failed to delete annotation from server:",v)});he(()=>{if(y((v)=>v.filter((S)=>S.id!==d)),ss((v)=>{let S=new Set(v);return S.delete(d),S}),xl(null),p<h.length-1)cl(p),he(()=>cl(null),200)},150)},[h,Be,o,Cl,_]),ms=T.useCallback((d)=>{if(!d){so(null),zn(null),kn([]);return}if(so(d.id),d.elementBoundingBoxes?.length){let p=[];for(let x of d.elementBoundingBoxes){let v=x.x+x.width/2,S=x.y+x.height/2-window.scrollY,W=document.elementsFromPoint(v,S).find((Z)=>!Z.closest("[data-annotation-marker]")&&!Z.closest("[data-agentation-root]"));if(W)p.push(W)}kn(p),zn(null)}else if(d.boundingBox){let p=d.boundingBox,x=p.x+p.width/2,v=d.isFixed?p.y+p.height/2:p.y+p.height/2-window.scrollY,S=Ko(x,v);if(S){let R=S.getBoundingClientRect(),W=R.width/p.width,Z=R.height/p.height;if(W<0.5||Z<0.5)zn(null);else zn(S)}else zn(null);kn([])}else zn(null),kn([])},[]),Sy=T.useCallback((d)=>{if(!Be)return;let p={...Be,comment:d};if(y((x)=>x.map((v)=>v.id===Be.id?p:v)),a?.(p),Cl("annotation.update",{annotation:p}),_)G0(_,Be.id,{comment:d}).catch((x)=>{console.warn("[Agentation] Failed to update annotation on server:",x)});Ea(!0),he(()=>{q(null),be(null),xe([]),Ea(!1)},150)},[Be,a,Cl,_]),Cy=T.useCallback(()=>{Ea(!0),he(()=>{q(null),be(null),xe([]),Ea(!1)},150)},[]),Qo=T.useCallback(()=>{let d=h.length,p=ue.length>0||!!Ce;if(d===0&&Vn.length===0&&!p)return;if(i?.(h),Cl("annotations.clear",{annotations:h}),_){Promise.all(h.map((S)=>fo(_,S.id).catch((R)=>{console.warn("[Agentation] Failed to delete annotation from server:",R)})));for(let[,S]of zi.current)if(S)fo(_,S).catch(()=>{});zi.current.clear();for(let[,S]of Oi.current)if(S)fo(_,S).catch(()=>{});Oi.current.clear()}rl(!0),Wn(!0),fy([]);let x=fu.current;if(x){let S=x.getContext("2d");if(S)S.clearRect(0,0,x.width,x.height)}if(ue.length>0||Ce)du((S)=>S+1),Uf((S)=>S+1),he(()=>{ct([]),Gn(null)},200);if(ve)wt(!1);if(Yt)$l("");Io.current={rearrange:null,placements:[]},Ts(ye);let v=d*30+200;he(()=>{y([]),Bi(new Set),localStorage.removeItem(Os(ye)),rl(!1)},v),he(()=>Wn(!1),1500)},[ye,h,Vn,ue,Ce,ve,Yt,i,Cl,_]),ku=T.useCallback(async()=>{let d=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:ye,p=ce&&ve,x;if(p){if(ue.length===0&&!Ce&&!Yt)return;x=""}else{if(x=K0(h,d,$e.outputDetail),!x&&Vn.length===0&&ue.length===0&&!Ce)return;if(!x)x=`## Page Feedback: ${d}
`}if(!p&&Vn.length>0){let v=new Set;for(let Z of h)if(Z.drawingIndex!=null)v.add(Z.drawingIndex);let S=fu.current;if(S)S.style.visibility="hidden";let R=[],W=window.scrollY;for(let Z=0;Z<Vn.length;Z++){if(v.has(Z))continue;let oe=Vn[Z];if(oe.points.length<2)continue;let re=oe.fixed?oe.points:oe.points.map((Gt)=>({x:Gt.x,y:Gt.y-W})),de=1/0,Ee=1/0,je=-1/0,fe=-1/0;for(let Gt of re)de=Math.min(de,Gt.x),Ee=Math.min(Ee,Gt.y),je=Math.max(je,Gt.x),fe=Math.max(fe,Gt.y);let ne=je-de,jt=fe-Ee,mt=Math.hypot(ne,jt),Pt=re[0],ut=re[re.length-1],It=Math.hypot(ut.x-Pt.x,ut.y-Pt.y),we,De=It<mt*0.35,zt=ne/Math.max(jt,1);if(De&&mt>20){let Gt=Math.max(ne,jt)*0.15,uo=0;for(let Vo of re){let Ty=Vo.x-de<Gt,Ay=je-Vo.x<Gt,Ly=Vo.y-Ee<Gt,Dy=fe-Vo.y<Gt;if((Ty||Ay)&&(Ly||Dy))uo++}we=uo>re.length*0.15?"box":"circle"}else if(zt>3&&jt<40)we="underline";else if(It>mt*0.5)we="arrow";else we="drawing";let Ht=Math.min(10,re.length),fl=Math.max(1,Math.floor(re.length/Ht)),Zn=new Set,rn=[],Ii=[Pt];for(let Gt=fl;Gt<re.length-1;Gt+=fl)Ii.push(re[Gt]);Ii.push(ut);for(let Gt of Ii){let uo=Ko(Gt.x,Gt.y);if(!uo||Zn.has(uo))continue;if(bn(uo,"[data-feedback-toolbar]"))continue;Zn.add(uo);let{name:Vo}=Ha(uo);if(!rn.includes(Vo))rn.push(Vo)}let Go=`${Math.round(de)},${Math.round(Ee)} → ${Math.round(je)},${Math.round(fe)}`,co;if((we==="circle"||we==="box")&&rn.length>0)co=`${we==="box"?"Boxed":"Circled"} **${rn[0]}**${rn.length>1?` (and ${rn.slice(1).join(", ")})`:""} (region: ${Go})`;else if(we==="underline"&&rn.length>0)co=`Underlined **${rn[0]}** (${Go})`;else if(we==="arrow"&&rn.length>=2)co=`Arrow from **${rn[0]}** to **${rn[rn.length-1]}** (${Math.round(Pt.x)},${Math.round(Pt.y)} → ${Math.round(ut.x)},${Math.round(ut.y)})`;else if(rn.length>0)co=`${we==="arrow"?"Arrow":"Drawing"} near **${rn.join("**, **")}** (region: ${Go})`;else co=`Drawing at ${Go}`;R.push(co)}if(S)S.style.visibility="";if(R.length>0)x+=`
**Drawings:**
`,R.forEach((Z,oe)=>{x+=`${oe+1}. ${Z}
`})}if(ue.length>0||p&&Yt)x+=`
`+X0(ue,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:ve,wireframePurpose:Yt||void 0},$e.outputDetail);if(Ce){let v=q0(Ce,$e.outputDetail,{width:window.innerWidth,height:window.innerHeight});if(v)x+=`
`+v}if(g)try{await navigator.clipboard.writeText(x)}catch{}if(r?.(x),Bt(!0),he(()=>Bt(!1),2000),$e.autoClearAfterCopy)he(()=>Qo(),500)},[h,Vn,ue,Ce,ve,ce,Hl,Yt,ye,$e.outputDetail,Xo,$e.autoClearAfterCopy,Qo,g,r]),Su=T.useCallback(async()=>{let d=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:ye,p=K0(h,d,$e.outputDetail);if(!p&&ue.length===0&&!Ce)return;if(!p)p=`## Page Feedback: ${d}
`;if(ue.length>0)p+=`
`+X0(ue,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:ve,wireframePurpose:Yt||void 0},$e.outputDetail);if(Ce){let v=q0(Ce,$e.outputDetail,{width:window.innerWidth,height:window.innerHeight});if(v)p+=`
`+v}if(s)s(p,h);gn("sending"),await new Promise((v)=>he(v,150));let x=await Cl("submit",{output:p,annotations:h},!0);if(gn(x?"sent":"failed"),he(()=>gn("idle"),2500),x&&$e.autoClearAfterCopy)he(()=>Qo(),500)},[s,Cl,h,ue,Ce,ve,Hl,ye,$e.outputDetail,Xo,$e.autoClearAfterCopy,Qo]);T.useEffect(()=>{if(!Ma)return;let d=10,p=(v)=>{let S=v.clientX-Ma.x,R=v.clientY-Ma.y,W=Math.sqrt(S*S+R*R);if(!Wo&&W>d)Zf(!0);if(Wo||W>d){let Z=Ma.toolbarX+S,oe=Ma.toolbarY+R,re=20,de=337,Ee=44,fe=de-(D?_l==="connected"?297:257:44),ne=re-fe,jt=window.innerWidth-re-de;Z=Math.max(ne,Math.min(jt,Z)),oe=Math.max(re,Math.min(window.innerHeight-Ee-re,oe)),mu({x:Z,y:oe})}},x=()=>{if(Wo)gu.current=!0;Zf(!1),Kf(null)};return document.addEventListener("mousemove",p),document.addEventListener("mouseup",x),()=>{document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",x)}},[Ma,Wo,D,_l]);let My=T.useCallback((d)=>{if(d.target.closest("button")||d.target.closest("[data-agentation-settings-panel]"))return;let p=d.currentTarget.parentElement;if(!p)return;let x=p.getBoundingClientRect(),v=Nt?.x??x.left,S=Nt?.y??x.top;Kf({x:d.clientX,y:d.clientY,toolbarX:v,toolbarY:S})},[Nt]);if(T.useEffect(()=>{if(!Nt)return;let d=()=>{let{x:S,y:R}=Nt,oe=20-(337-(D?_l==="connected"?297:257:44)),re=window.innerWidth-20-337;if(S=Math.max(oe,Math.min(re,S)),R=Math.max(20,Math.min(window.innerHeight-44-20,R)),S!==Nt.x||R!==Nt.y)mu({x:S,y:R})};return d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[Nt,D,_l]),T.useEffect(()=>{let d=(p)=>{let x=p.target,v=x.tagName==="INPUT"||x.tagName==="TEXTAREA"||x.isContentEditable;if(p.key==="Escape"){if(ce){if(Ve)Le(null);else _s();return}if(dl){_u(!1);return}if(Qt.length>0){Ca([]);return}if(G);else if(D)fn(),A(!1)}if((p.metaKey||p.ctrlKey)&&p.shiftKey&&(p.key==="f"||p.key==="F")){if(p.preventDefault(),fn(),D)a0();else A(!0);return}if(v||p.metaKey||p.ctrlKey)return;if(p.key==="p"||p.key==="P")p.preventDefault(),fn(),xu();if(p.key==="l"||p.key==="L"){if(p.preventDefault(),fn(),dl)_u(!1);if(Y)P(!1);if(G)vu();if(ce)_s();else st(!0)}if(p.key==="h"||p.key==="H"){if(h.length>0)p.preventDefault(),fn(),E((S)=>!S)}if(p.key==="c"||p.key==="C"){if(h.length>0||ue.length>0||Ce)p.preventDefault(),fn(),ku()}if(p.key==="x"||p.key==="X"){if(h.length>0||ue.length>0||Ce){if(p.preventDefault(),fn(),Qo(),ue.length>0)ct([]);if(Ce)Gn(null)}}if(p.key==="s"||p.key==="S"){let S=El($e.webhookUrl)||El(w||"");if(h.length>0&&S&&wn==="idle")p.preventDefault(),fn(),Su()}};return document.addEventListener("keydown",d),()=>document.removeEventListener("keydown",d)},[D,dl,ce,Ve,ue,Ce,G,h.length,$e.webhookUrl,w,wn,Su,xu,ku,Qo,Qt]),!ge)return null;if(Q)return null;let ji=h.length>0,La=h.filter((d)=>!Jf.has(d.id)&&d.kind!=="placement"&&d.kind!=="rearrange"),Ey=La.length>0,s0=h.filter((d)=>Jf.has(d.id)),c0=(d)=>{let R=d.x/100*window.innerWidth,W=typeof d.y==="string"?parseFloat(d.y):d.y,Z={};if(window.innerHeight-W-22-10<80)Z.top="auto",Z.bottom="calc(100% + 10px)";let re=R-100,de=10;if(re<de){let Ee=de-re;Z.left=`calc(50% + ${Ee}px)`}else if(re+200>window.innerWidth-de){let Ee=re+200-(window.innerWidth-de);Z.left=`calc(50% - ${Ee}px)`}return Z};return nh.createPortal(I.jsxs("div",{ref:te,style:{display:"contents"},"data-agentation-theme":kl?"dark":"light","data-agentation-accent":$e.annotationColorId,"data-agentation-root":"",children:[I.jsx("div",{className:`${j.toolbar}${C?` ${C}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:Nt?{left:Nt.x,top:Nt.y,right:"auto",bottom:"auto"}:void 0,children:I.jsxs("div",{className:`${j.toolbarContainer} ${D?j.expanded:j.collapsed} ${Wf?j.entrance:""} ${z?j.hiding:""} ${!$e.webhooksEnabled&&(El($e.webhookUrl)||El(w||""))?j.serverConnected:""}`,onClick:!D?(d)=>{if(gu.current){gu.current=!1,d.preventDefault();return}A(!0)}:void 0,onMouseDown:My,role:!D?"button":void 0,tabIndex:!D?0:-1,title:!D?"Start feedback mode":void 0,children:[I.jsxs("div",{className:`${j.toggleContent} ${!D?j.visible:j.hidden}`,children:[I.jsx(f5,{size:24}),Ey&&I.jsx("span",{className:`${j.badge} ${D?j.fadeOut:""} ${Wf?j.entrance:""}`,children:La.length})]}),I.jsxs("div",{className:`${j.controlsContent} ${D?j.visible:j.hidden} ${Nt&&Nt.y<100?j.tooltipBelow:""} ${We||Y?j.tooltipsHidden:""} ${If?j.tooltipsInSession:""}`,onMouseEnter:gy,onMouseLeave:py,children:[I.jsxs("div",{className:`${j.buttonWrapper} ${Nt&&Nt.x<120?j.buttonWrapperAlignLeft:""}`,children:[I.jsx("button",{className:j.controlButton,onClick:(d)=>{d.stopPropagation(),fn(),xu()},"data-active":L,children:I.jsx(y5,{size:24,isPaused:L})}),I.jsxs("span",{className:j.buttonTooltip,children:[L?"Resume animations":"Pause animations",I.jsx("span",{className:j.shortcut,children:"P"})]})]}),I.jsxs("div",{className:j.buttonWrapper,children:[I.jsx("button",{className:`${j.controlButton} ${!kl?j.light:""}`,onClick:(d)=>{if(d.stopPropagation(),fn(),dl)_u(!1);if(Y)P(!1);if(G)vu();if(ce)_s();else st(!0)},"data-active":ce,style:ce&&ve?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:I.jsx(E5,{size:21})}),I.jsxs("span",{className:j.buttonTooltip,children:[ce?"Exit layout mode":"Layout mode",I.jsx("span",{className:j.shortcut,children:"L"})]})]}),I.jsxs("div",{className:j.buttonWrapper,children:[I.jsx("button",{className:j.controlButton,onClick:(d)=>{d.stopPropagation(),fn(),E(!k)},disabled:!ji||ce,children:I.jsx(p5,{size:24,isOpen:k})}),I.jsxs("span",{className:j.buttonTooltip,children:[k?"Hide markers":"Show markers",I.jsx("span",{className:j.shortcut,children:"H"})]})]}),I.jsxs("div",{className:j.buttonWrapper,children:[I.jsx("button",{className:`${j.controlButton} ${Ke?j.statusShowing:""}`,onClick:(d)=>{d.stopPropagation(),fn(),ku()},disabled:ce&&ve?ue.length===0&&!Ce?.sections?.length:!ji&&Vn.length===0&&ue.length===0&&!Ce?.sections?.length,"data-active":Ke,children:I.jsx(m5,{size:24,copied:Ke,tint:ce&&ve&&(ue.length>0||!!Ce?.sections?.length)?"#f97316":void 0})}),I.jsxs("span",{className:j.buttonTooltip,children:[ce&&ve?"Copy layout":"Copy feedback",I.jsx("span",{className:j.shortcut,children:"C"})]})]}),I.jsxs("div",{className:`${j.buttonWrapper} ${j.sendButtonWrapper} ${D&&!$e.webhooksEnabled&&(El($e.webhookUrl)||El(w||""))?j.sendButtonVisible:""}`,children:[I.jsxs("button",{className:`${j.controlButton} ${wn==="sent"||wn==="failed"?j.statusShowing:""}`,onClick:(d)=>{d.stopPropagation(),fn(),Su()},disabled:!ji||!El($e.webhookUrl)&&!El(w||"")||wn==="sending","data-no-hover":wn==="sent"||wn==="failed",tabIndex:El($e.webhookUrl)||El(w||"")?0:-1,children:[I.jsx(g5,{size:24,state:wn}),ji&&wn==="idle"&&I.jsx("span",{className:j.buttonBadge,children:h.length})]}),I.jsxs("span",{className:j.buttonTooltip,children:["Send Annotations",I.jsx("span",{className:j.shortcut,children:"S"})]})]}),I.jsxs("div",{className:j.buttonWrapper,children:[I.jsx("button",{className:j.controlButton,onClick:(d)=>{d.stopPropagation(),fn(),Qo()},disabled:!ji&&Vn.length===0&&ue.length===0&&!Ce?.sections?.length,"data-danger":!0,children:I.jsx(x5,{size:24})}),I.jsxs("span",{className:j.buttonTooltip,children:["Clear all",I.jsx("span",{className:j.shortcut,children:"X"})]})]}),I.jsxs("div",{className:j.buttonWrapper,children:[I.jsx("button",{className:j.controlButton,onClick:(d)=>{if(d.stopPropagation(),fn(),ce)_s();P(!Y)},children:I.jsx(b5,{size:24})}),_&&_l!=="disconnected"&&I.jsx("span",{className:`${j.mcpIndicator} ${j[_l]} ${Y?j.hidden:""}`,title:_l==="connected"?"MCP Connected":"MCP Connecting..."}),I.jsx("span",{className:j.buttonTooltip,children:"Settings"})]}),I.jsx("div",{className:j.divider}),I.jsxs("div",{className:`${j.buttonWrapper} ${Nt&&typeof window<"u"&&Nt.x>window.innerWidth-120?j.buttonWrapperAlignRight:""}`,children:[I.jsx("button",{className:j.controlButton,onClick:(d)=>{d.stopPropagation(),fn(),a0()},children:I.jsx(v5,{size:24})}),I.jsxs("span",{className:j.buttonTooltip,children:["Exit",I.jsx("span",{className:j.shortcut,children:"Esc"})]})]})]}),I.jsx(nb,{visible:ce&&D,activeType:Ve,onSelect:(d)=>{Le(Ve===d?null:d)},isDarkMode:kl,sectionCount:Ce?.sections.length??0,onDetectSections:()=>{let d=fb(),p=Ce?.sections??[],x=new Set(p.map((W)=>W.selector)),v=d.filter((W)=>!x.has(W.selector)),S=[...p,...v],R=[...Ce?.originalOrder??[],...v.map((W)=>W.id)];Gn({sections:S,originalOrder:R,detectedAt:Date.now()})},placementCount:ue.length,onClearPlacements:()=>{du((d)=>d+1),Uf((d)=>d+1),he(()=>{Gn({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:ve,onBlankCanvasChange:(d)=>{let p={sections:[],originalOrder:[],detectedAt:Date.now()};if(d)uu.current={rearrange:Ce,placements:ue},Gn(Io.current.rearrange||p),ct(Io.current.placements),Le(null);else Io.current={rearrange:Ce,placements:ue},Gn(uu.current.rearrange||p),ct(uu.current.placements);wt(d)},wireframePurpose:Yt,onWireframePurposeChange:$l,Tooltip:Jo,onDragStart:(d,p)=>{p.preventDefault();let x=ee[d],v=null,S=!1,{clientX:R,clientY:W}=p,oe=p.target.closest("[data-feedback-toolbar]")?.getBoundingClientRect().top??window.innerHeight,re=(Ee)=>{let je=Ee.clientX-R,fe=Ee.clientY-W;if(!S&&(Math.abs(je)>4||Math.abs(fe)>4))S=!0,v=document.createElement("div"),v.className=`${O.dragPreview}${ve?` ${O.dragPreviewWireframe}`:""}`,document.body.appendChild(v);if(!v)return;let ne=Math.max(0,oe-Ee.clientY),jt=Math.min(1,ne/180),mt=1-Math.pow(1-jt,2),Pt=28,ut=20,It=Math.min(140,x.width*0.18),we=Math.min(90,x.height*0.18),De=Pt+(It-Pt)*mt,zt=ut+(we-ut)*mt;v.style.width=`${De}px`,v.style.height=`${zt}px`,v.style.left=`${Ee.clientX-De/2}px`,v.style.top=`${Ee.clientY-zt/2}px`,v.style.opacity=`${0.5+0.5*mt}`,v.textContent=mt>0.25?d:""},de=(Ee)=>{if(window.removeEventListener("mousemove",re),window.removeEventListener("mouseup",de),v)document.body.removeChild(v);if(S){let{width:je,height:fe}=x,ne=window.scrollY,jt=Math.max(0,Ee.clientX-je/2),mt=Math.max(0,Ee.clientY+ne-fe/2),Pt={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:d,x:jt,y:mt,width:je,height:fe,scrollY:ne,timestamp:Date.now()};ct((ut)=>[...ut,Pt]),Le(null),Ni.current=new Set,$f((ut)=>ut+1)}};window.addEventListener("mousemove",re),window.addEventListener("mouseup",de)}}),I.jsx(wx,{settings:$e,onSettingsChange:(d)=>yy((p)=>({...p,...d})),isDarkMode:kl,onToggleTheme:by,isDevMode:Gf,connectionStatus:_l,endpoint:_,isVisible:ie,toolbarNearBottom:!!Nt&&Nt.y<230,settingsPage:se,onSettingsPageChange:Me,onHideToolbar:wy})]})}),(ce||He)&&I.jsx("div",{className:`${O.blankCanvas} ${nn?O.visible:""} ${as?O.gridActive:""}`,style:{"--canvas-opacity":vl},"data-feedback-toolbar":!0}),ce&&ve&&nn&&I.jsxs("div",{className:O.wireframeNotice,"data-feedback-toolbar":!0,children:[I.jsxs("div",{className:O.wireframeOpacityRow,children:[I.jsx("span",{className:O.wireframeOpacityLabel,children:"Toggle Opacity"}),I.jsx("input",{type:"range",className:O.wireframeOpacitySlider,min:0,max:1,step:0.01,value:vl,onChange:(d)=>Sn(Number(d.target.value))})]}),I.jsxs("div",{className:O.wireframeNoticeTitleRow,children:[I.jsx("span",{className:O.wireframeNoticeTitle,children:"Wireframe Mode"}),I.jsx("span",{className:O.wireframeNoticeDivider}),I.jsx("button",{className:O.wireframeStartOver,onClick:()=>{du((d)=>d+1),Gn({sections:[],originalOrder:[],detectedAt:Date.now()}),Io.current={rearrange:null,placements:[]},$l(""),Ts(ye)},children:"Start Over"})]}),"Drag components onto the canvas.",I.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(ce||He)&&I.jsx(F2,{placements:ue,onChange:ct,activeComponent:He?null:Ve,onActiveComponentChange:Le,isDarkMode:kl,exiting:He,onInteractionChange:ry,passthrough:!Ve,extraSnapRects:Ce?.sections.map((d)=>d.currentRect),deselectSignal:sy,clearSignal:dy,wireframe:ve,onSelectionChange:(d,p)=>{if(Ni.current=d,!p)is.current=new Set,uy((x)=>x+1)},onDragMove:(d,p)=>{let x=is.current;if(!x.size||!Ce)return;if(!ul.current){ul.current=new Map;for(let v of Ce.sections)if(x.has(v.id))ul.current.set(v.id,{x:v.currentRect.x,y:v.currentRect.y})}for(let v of Ce.sections){if(!x.has(v.id))continue;if(!ul.current.get(v.id))continue;let R=document.querySelector(`[data-rearrange-section="${v.id}"]`);if(R)R.style.transform=`translate(${d}px, ${p}px)`}},onDragEnd:(d,p,x)=>{let v=is.current,S=ul.current;if(ul.current=null,!v.size||!Ce||!S)return;for(let R of v){let W=document.querySelector(`[data-rearrange-section="${R}"]`);if(W)W.style.transform=""}if(x)Gn((R)=>{if(!R)return R;return{...R,sections:R.sections.map((W)=>{let Z=S.get(W.id);if(!Z)return W;return{...W,currentRect:{...W.currentRect,x:Math.max(0,Z.x+d),y:Math.max(0,Z.y+p)}}})}})}}),(ce||He)&&Ce&&I.jsx(gb,{rearrangeState:Ce,onChange:Gn,isDarkMode:kl,exiting:He,blankCanvas:ve,extraSnapRects:ue.map((d)=>({x:d.x,y:d.y,width:d.width,height:d.height})),clearSignal:_y,deselectSignal:cy,onSelectionChange:(d,p)=>{if(is.current=d,!p)Ni.current=new Set,$f((x)=>x+1)},onDragMove:(d,p)=>{let x=Ni.current;if(!x.size)return;if(!ul.current){ul.current=new Map;for(let v of ue)if(x.has(v.id))ul.current.set(v.id,{x:v.x,y:v.y})}for(let v of x){let S=document.querySelector(`[data-design-placement="${v}"]`);if(S)S.style.transform=`translate(${d}px, ${p}px)`}},onDragEnd:(d,p,x)=>{let v=Ni.current,S=ul.current;if(ul.current=null,!v.size||!S)return;for(let R of v){let W=document.querySelector(`[data-design-placement="${R}"]`);if(W)W.style.transform=""}if(x)ct((R)=>R.map((W)=>{let Z=S.get(W.id);if(!Z)return W;return{...W,x:Math.max(0,Z.x+d),y:Math.max(0,Z.y+p)}}))}}),I.jsx("canvas",{ref:fu,className:`${j.drawCanvas} ${dl?j.active:""}`,style:{opacity:yu?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),I.jsxs("div",{className:j.markersLayer,"data-feedback-toolbar":!0,children:[J&&La.filter((d)=>!d.isFixed).map((d,p,x)=>I.jsx(F0,{annotation:d,globalIndex:La.findIndex((v)=>v.id===d.id),layerIndex:p,layerSize:x.length,isExiting:tt,isClearing:ro,isAnimated:Ff.has(d.id),isHovered:!tt&&Bl===d.id,isDeleting:bl===d.id,isEditingAny:!!Be,renumberFrom:ka,markerClickBehavior:$e.markerClickBehavior,tooltipStyle:c0(d),onHoverEnter:(v)=>!tt&&v.id!==ds.current&&ms(v),onHoverLeave:()=>ms(null),onClick:(v)=>$e.markerClickBehavior==="delete"?wu(v.id):hs(v),onContextMenu:hs},d.id)),J&&!tt&&s0.filter((d)=>!d.isFixed).map((d)=>I.jsx(J0,{annotation:d},d.id))]}),I.jsxs("div",{className:j.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[J&&La.filter((d)=>d.isFixed).map((d,p,x)=>I.jsx(F0,{annotation:d,globalIndex:La.findIndex((v)=>v.id===d.id),layerIndex:p,layerSize:x.length,isExiting:tt,isClearing:ro,isAnimated:Ff.has(d.id),isHovered:!tt&&Bl===d.id,isDeleting:bl===d.id,isEditingAny:!!Be,renumberFrom:ka,markerClickBehavior:$e.markerClickBehavior,tooltipStyle:c0(d),onHoverEnter:(v)=>!tt&&v.id!==ds.current&&ms(v),onHoverLeave:()=>ms(null),onClick:(v)=>$e.markerClickBehavior==="delete"?wu(v.id):hs(v),onContextMenu:hs},d.id)),J&&!tt&&s0.filter((d)=>d.isFixed).map((d)=>I.jsx(J0,{annotation:d,fixed:!0},d.id))]}),D&&I.jsxs("div",{className:j.overlay,"data-feedback-toolbar":!0,style:G||Be?{zIndex:99999}:void 0,children:[Re?.rect&&!G&&!Fe&&!Ul&&I.jsx("div",{className:`${j.hoverHighlight} ${j.enter}`,style:{left:Re.rect.left,top:Re.rect.top,width:Re.rect.width,height:Re.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),Qt.filter((d)=>document.contains(d.element)).map((d,p)=>{let x=d.element.getBoundingClientRect(),v=Qt.length>1;return I.jsx("div",{className:v?j.multiSelectOutline:j.singleSelectOutline,style:{position:"fixed",left:x.left,top:x.top,width:x.width,height:x.height,...v?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},p)}),Bl&&!G&&(()=>{let d=h.find((S)=>S.id===Bl);if(!d?.boundingBox)return null;if(d.elementBoundingBoxes?.length){if(sl.length>0)return sl.filter((S)=>document.contains(S)).map((S,R)=>{let W=S.getBoundingClientRect();return I.jsx("div",{className:`${j.multiSelectOutline} ${j.enter}`,style:{left:W.left,top:W.top,width:W.width,height:W.height}},`hover-outline-live-${R}`)});return d.elementBoundingBoxes.map((S,R)=>I.jsx("div",{className:`${j.multiSelectOutline} ${j.enter}`,style:{left:S.x,top:S.y-nt,width:S.width,height:S.height}},`hover-outline-${R}`))}let p=jo&&document.contains(jo)?jo.getBoundingClientRect():null,x=p?{x:p.left,y:p.top,width:p.width,height:p.height}:{x:d.boundingBox.x,y:d.isFixed?d.boundingBox.y:d.boundingBox.y-nt,width:d.boundingBox.width,height:d.boundingBox.height},v=d.isMultiSelect;return I.jsx("div",{className:`${v?j.multiSelectOutline:j.singleSelectOutline} ${j.enter}`,style:{left:x.x,top:x.y,width:x.width,height:x.height,...v?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),Re&&!G&&!Fe&&!Ul&&I.jsxs("div",{className:`${j.hoverTooltip} ${j.enter}`,style:{left:Math.max(8,Math.min(Te.x,window.innerWidth-100)),top:Math.max(Te.y-(Re.reactComponents?48:32),8)},children:[Re.reactComponents&&I.jsx("div",{className:j.hoverReactPath,children:Re.reactComponents}),I.jsx("div",{className:j.hoverElementName,children:Re.elementName})]}),G&&I.jsxs(I.Fragment,{children:[G.multiSelectElements?.length?G.multiSelectElements.filter((d)=>document.contains(d)).map((d,p)=>{let x=d.getBoundingClientRect();return I.jsx("div",{className:`${j.multiSelectOutline} ${Hi?j.exit:j.enter}`,style:{left:x.left,top:x.top,width:x.width,height:x.height}},`pending-multi-${p}`)}):G.targetElement&&document.contains(G.targetElement)?(()=>{let d=G.targetElement.getBoundingClientRect();return I.jsx("div",{className:`${j.singleSelectOutline} ${Hi?j.exit:j.enter}`,style:{left:d.left,top:d.top,width:d.width,height:d.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():G.boundingBox&&I.jsx("div",{className:`${G.isMultiSelect?j.multiSelectOutline:j.singleSelectOutline} ${Hi?j.exit:j.enter}`,style:{left:G.boundingBox.x,top:G.boundingBox.y-nt,width:G.boundingBox.width,height:G.boundingBox.height,...G.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{let d=G.x,p=G.isFixed?G.y:G.y-nt;return I.jsxs(I.Fragment,{children:[I.jsx(_x,{x:d,y:p,isMultiSelect:G.isMultiSelect,isExiting:Hi}),I.jsx(Ns,{ref:n0,element:G.element,selectedText:G.selectedText,computedStyles:G.computedStylesObj,placeholder:G.element==="Area selection"?"What should change in this area?":G.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:ky,onCancel:vu,isExiting:Hi,lightMode:!kl,accentColor:G.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,d/100*window.innerWidth)),...p>window.innerHeight-290?{bottom:window.innerHeight-p+20}:{top:p+20}}})]})})()]}),Be&&I.jsxs(I.Fragment,{children:[Be.elementBoundingBoxes?.length?(()=>{if(ze.length>0)return ze.filter((d)=>document.contains(d)).map((d,p)=>{let x=d.getBoundingClientRect();return I.jsx("div",{className:`${j.multiSelectOutline} ${j.enter}`,style:{left:x.left,top:x.top,width:x.width,height:x.height}},`edit-multi-live-${p}`)});return Be.elementBoundingBoxes.map((d,p)=>I.jsx("div",{className:`${j.multiSelectOutline} ${j.enter}`,style:{left:d.x,top:d.y-nt,width:d.width,height:d.height}},`edit-multi-${p}`))})():(()=>{let d=_e&&document.contains(_e)?_e.getBoundingClientRect():null,p=d?{x:d.left,y:d.top,width:d.width,height:d.height}:Be.boundingBox?{x:Be.boundingBox.x,y:Be.isFixed?Be.boundingBox.y:Be.boundingBox.y-nt,width:Be.boundingBox.width,height:Be.boundingBox.height}:null;if(!p)return null;return I.jsx("div",{className:`${Be.isMultiSelect?j.multiSelectOutline:j.singleSelectOutline} ${j.enter}`,style:{left:p.x,top:p.y,width:p.width,height:p.height,...Be.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),I.jsx(Ns,{ref:l0,element:Be.element,selectedText:Be.selectedText,computedStyles:cb(Be.computedStyles),placeholder:"Edit your feedback...",initialValue:Be.comment,submitLabel:"Save",onSubmit:Sy,onCancel:Cy,onDelete:()=>wu(Be.id),isExiting:xy,lightMode:!kl,accentColor:Be.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{let d=Be.isFixed?Be.y:Be.y-nt;return{left:Math.max(160,Math.min(window.innerWidth-160,Be.x/100*window.innerWidth)),...d>window.innerHeight-290?{bottom:window.innerHeight-d+20}:{top:d+20}}})()})]}),Ul&&I.jsxs(I.Fragment,{children:[I.jsx("div",{ref:$i,className:j.dragSelection}),I.jsx("div",{ref:Ui,className:j.highlightsContainer})]})]})]}),document.body)}var ay=kt(Xp(),1),iy=kt(hn(),1);var P4=["audio/webm;codecs=opus","audio/ogg;codecs=opus"];function Gp(e){return e?.provider==="diction"&&Boolean(e.wsUrl)}function e6(){if(typeof MediaRecorder>"u"||typeof MediaRecorder.isTypeSupported!=="function")return null;return P4.find((e)=>MediaRecorder.isTypeSupported(e))??null}async function Vp(e){let t=await n6(),{abortSignal:n,stopSignal:l}=e;try{Bf(n);let o=t6(e.codec),{socket:a,useOpus:i}=await l6(e.wsUrl,o!==null);try{if(Bf(n),i&&o)await a6(t,a,o,l,n);else await r6(t,a,l,n);return Bf(n),a.send(JSON.stringify({action:"done"})),await c6(a,n)}finally{u6(a)}}finally{d6(t)}}function t6(e){if(e==="pcm")return null;let t=e6();if(e==="opus"&&!t)return null;return t}async function n6(){if(!navigator.mediaDevices?.getUserMedia)throw new Nn("Microphone is not available in this browser.","unsupported");try{return await navigator.mediaDevices.getUserMedia({audio:{channelCount:1,echoCancellation:!0,noiseSuppression:!0}})}catch(e){if(e instanceof DOMException&&(e.name==="NotAllowedError"||e.name==="PermissionDeniedError"))throw new Nn("Microphone access was denied.","denied");throw new Nn("Could not start the microphone.","mic")}}async function l6(e,t){if(t)try{let n=await qp(Wp(e,"opus"),["diction.opus.v1"]),l=n.protocol==="diction.opus.v1";return{socket:n,useOpus:l}}catch{}return{socket:await qp(Wp(e,"pcm")),useOpus:!1}}async function qp(e,t){let n=t?new WebSocket(e,t):new WebSocket(e);return n.binaryType="arraybuffer",await o6(n),n}function Wp(e,t){try{let n=new URL(e);if(!n.searchParams.has("codec"))n.searchParams.set("codec",t);return n.toString()}catch{let n=e.includes("?")?"&":"?";return`${e}${n}codec=${t}`}}function o6(e){if(e.readyState===WebSocket.OPEN)return Promise.resolve();return new Promise((t,n)=>{let l=window.setTimeout(()=>{i(),e.close(),n(new Nn("Could not reach the dictation service.","ws"))},8000),o=()=>{i(),t()},a=()=>{i(),n(new Nn("Could not reach the dictation service.","ws"))},i=()=>{window.clearTimeout(l),e.removeEventListener("open",o),e.removeEventListener("error",a)};e.addEventListener("open",o),e.addEventListener("error",a)})}async function a6(e,t,n,l,o){let a=new MediaRecorder(e,{mimeType:n,audioBitsPerSecond:24000}),i=[];a.addEventListener("dataavailable",(r)=>{if(r.data.size===0||t.readyState!==WebSocket.OPEN)return;i.push(r.data.arrayBuffer().then((s)=>{if(t.readyState===WebSocket.OPEN)t.send(s)}))}),a.start(250);try{await Zp(t,l,o)}finally{if(a.state!=="inactive")await i6(a);await Promise.all(i)}}function i6(e){return new Promise((t)=>{e.addEventListener("stop",()=>t(),{once:!0}),e.stop()})}async function r6(e,t,n,l){let o=window.AudioContext||window.webkitAudioContext;if(!o)throw new Nn("This browser cannot capture PCM audio.","unsupported");let a=new o,i=a.createMediaStreamSource(e),r=a.createScriptProcessor(4096,1,1),s=a.createGain();if(s.gain.value=0,r.onaudioprocess=(g)=>{if(t.readyState!==WebSocket.OPEN)return;let _=g.inputBuffer.getChannelData(0),b=s6(_,a.sampleRate,16000);if(b.byteLength>0)t.send(b)},i.connect(r),r.connect(s),s.connect(a.destination),a.state==="suspended")await a.resume();try{await Zp(t,n,l)}finally{r.onaudioprocess=null,r.disconnect(),i.disconnect(),s.disconnect(),await a.close().catch(()=>{return})}}function s6(e,t,n){if(e.length===0)return new ArrayBuffer(0);let l=t/n,o=l<=1?e.length:Math.round(e.length/l),a=new DataView(new ArrayBuffer(o*2));if(l<=1){for(let i=0;i<e.length;i++)a.setInt16(i*2,Qp(e[i]??0),!0);return a.buffer}for(let i=0;i<o;i++){let r=i*l,s=Math.floor(r),g=Math.min(s+1,e.length-1),_=r-s,b=(e[s]??0)*(1-_)+(e[g]??0)*_;a.setInt16(i*2,Qp(b),!0)}return a.buffer}function Qp(e){let t=Math.max(-1,Math.min(1,e));return t<0?Math.round(t*32768):Math.round(t*32767)}function Zp(e,t,n){return new Promise((l,o)=>{if(n?.aborted){o(new DOMException("Aborted","AbortError"));return}if(t?.aborted){l();return}let a=()=>{g(),l()},i=()=>{g(),o(new DOMException("Aborted","AbortError"))},r=()=>{g(),o(new Nn("The dictation connection closed unexpectedly.","ws"))},s=()=>{g(),o(new Nn("The dictation connection failed.","ws"))},g=()=>{t?.removeEventListener("abort",a),n?.removeEventListener("abort",i),e.removeEventListener("close",r),e.removeEventListener("error",s)};t?.addEventListener("abort",a,{once:!0}),n?.addEventListener("abort",i,{once:!0}),e.addEventListener("close",r),e.addEventListener("error",s)})}function c6(e,t){return new Promise((n,l)=>{let o=window.setTimeout(()=>{s(),l(new Nn("Dictation timed out waiting for a transcript.","timeout"))},20000),a=(g)=>{if(typeof g.data!=="string")return;let _;try{_=JSON.parse(g.data)}catch{return}if(typeof _.error==="string"&&_.error!==""){s(),l(new Nn(_.error,"ws"));return}if(typeof _.text==="string")s(),n(_.text)},i=()=>{s(),l(new Nn("The dictation service closed before sending a transcript.","ws"))},r=()=>{s(),l(new DOMException("Aborted","AbortError"))},s=()=>{window.clearTimeout(o),e.removeEventListener("message",a),e.removeEventListener("close",i),t?.removeEventListener("abort",r)};if(t?.aborted){s(),l(new DOMException("Aborted","AbortError"));return}t?.addEventListener("abort",r,{once:!0}),e.addEventListener("message",a),e.addEventListener("close",i)})}function u6(e){try{e.close()}catch{}}function d6(e){for(let t of e.getTracks())t.stop()}function Bf(e){if(e?.aborted)throw new DOMException("Aborted","AbortError")}class Nn extends Error{code;constructor(e,t){super(e);this.name="DictationError",this.code=t}}var Jp="toolbar-agentation-root",Hf="data-toolbar-dictation",Kp="toolbar-agentation-dictation-styles",_6='textarea[class*="styles-module__textarea___"]',f6='[class*="styles-module__actions___"]',ls=new WeakMap,su=new Set;function Pp(e){if(!Gp(e)||!e?.wsUrl)return;C6();let t=()=>{if(!document.getElementById(Jp))return;document.querySelectorAll(_6).forEach((o)=>{if(h6(o))g6(o,e)});for(let o of su)if(!document.body.contains(o))ls.get(o)?.abort.abort(),su.delete(o)};new MutationObserver(t).observe(document.documentElement,{childList:!0,subtree:!0}),t()}function h6(e){return Boolean(e.closest(`#${Jp}`)||e.closest('[class*="styles-module__popup___"]'))}function m6(e){let t=e.parentElement;for(let n=0;n<4&&t;n++){let l=t.querySelector(f6);if(l)return l;t=t.parentElement}return null}function ey(e){let t=e.nextElementSibling;return t instanceof HTMLElement&&t.classList.contains("toolbar-agentation-dictation-error")?t:null}function g6(e,t){let n=m6(e);if(!n)return;let l=n.querySelector(`[${Hf}]`);if(!l){if(l=document.createElement("button"),l.type="button",l.setAttribute(Hf,"idle"),l.className="toolbar-agentation-dictation",l.innerHTML=ty(),!n.querySelector('[class*="styles-module__deleteWrapper___"]'))l.setAttribute("data-toolbar-dictation-lead","1");l.addEventListener("click",(a)=>{a.preventDefault(),a.stopPropagation(),p6(e,l,t)}),l.addEventListener("pointerdown",(a)=>a.stopPropagation()),l.addEventListener("mousedown",(a)=>a.stopPropagation()),n.insertBefore(l,n.firstChild)}if(!ey(e)){let a=document.createElement("p");a.className="toolbar-agentation-dictation-error",a.hidden=!0,e.insertAdjacentElement("afterend",a)}let o=ls.get(e);if(o)o.button=l,wa(l,o.state);else wa(l,"idle")}function p6(e,t,n){let l=ls.get(e);if(l){l.state="transcribing",wa(l.button,"transcribing"),l.stop.abort();return}y6(e,t,n)}async function y6(e,t,n){let l=ey(e),o=new AbortController,a=new AbortController,i={stop:o,abort:a,button:t,state:"recording"};ls.set(e,i),su.add(e),v6(l),wa(t,"recording");try{let r=await Vp({wsUrl:n.wsUrl,codec:n.codec,stopSignal:o.signal,abortSignal:a.signal});if(r.trim()==="")Fp(l,"No speech detected.");else x6(e,b6(e.value,r)),e.focus();wa(i.button,"idle")}catch(r){if(w6(r)){wa(i.button,"idle");return}let s=r instanceof Nn?r.message:"Dictation failed. You can still type.";Fp(l,s),wa(i.button,"idle")}finally{ls.delete(e),su.delete(e)}}function b6(e,t){let n=t.trim();if(n==="")return e;let l=e.trimEnd();if(l==="")return n;let o=/[\s\n]$/.test(e)?"":" ";return l+o+n}function x6(e,t){let n=Object.getPrototypeOf(e),l=Object.getOwnPropertyDescriptor(n,"value")??Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype,"value");if(l?.set)l.set.call(e,t);else e.value=t;e.dispatchEvent(new Event("input",{bubbles:!0})),e.dispatchEvent(new Event("change",{bubbles:!0}))}function wa(e,t){if(e.setAttribute(Hf,t),e.classList.toggle("is-recording",t==="recording"),e.classList.toggle("is-busy",t==="transcribing"),e.setAttribute("aria-pressed",t==="recording"?"true":"false"),t==="recording")e.setAttribute("aria-label","Stop dictation"),e.setAttribute("title","Stop dictation"),e.innerHTML=k6();else if(t==="transcribing")e.setAttribute("aria-label","Transcribing"),e.setAttribute("title","Transcribing…"),e.innerHTML=S6();else e.setAttribute("aria-label","Dictate comment"),e.setAttribute("title","Dictate comment"),e.innerHTML=ty()}function Fp(e,t){if(!e)return;e.textContent=t,e.hidden=!1}function v6(e){if(!e)return;e.hidden=!0,e.textContent=""}function w6(e){return e instanceof DOMException&&e.name==="AbortError"}function ty(){return'<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M6 11a6 6 0 0 0 12 0"/><path d="M12 17v3"/><path d="M8 20h8"/></svg>'}function k6(){return'<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor"><rect x="7" y="7" width="10" height="10" rx="1.5"/></svg>'}function S6(){return'<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" class="toolbar-agentation-dictation-spinner" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="8" opacity="0.25"/><path d="M12 4a8 8 0 0 1 8 8"/></svg>'}function C6(){if(document.getElementById(Kp))return;let e=document.createElement("style");e.id=Kp,e.textContent=`
        .toolbar-agentation-dictation {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 28px;
            height: 28px;
            margin-right: 0;
            padding: 0;
            border: none;
            border-radius: 50%;
            background: transparent;
            color: rgba(255, 255, 255, 0.55);
            cursor: pointer;
            transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease;
        }
        .toolbar-agentation-dictation[data-toolbar-dictation-lead="1"] {
            margin-right: auto;
        }
        .toolbar-agentation-dictation:hover {
            background: rgba(255, 255, 255, 0.1);
            color: rgba(255, 255, 255, 0.9);
        }
        .toolbar-agentation-dictation.is-recording {
            color: #f43f5e;
            background: color-mix(in srgb, #f43f5e 18%, transparent);
            animation: toolbar-agentation-dictation-pulse 1.2s ease-in-out infinite;
        }
        .toolbar-agentation-dictation.is-busy {
            color: rgba(255, 255, 255, 0.7);
            cursor: progress;
        }
        .toolbar-agentation-dictation-error {
            margin: 0.35rem 0 0;
            font-size: 0.6875rem;
            line-height: 1.35;
            color: #fb7185;
        }
        .toolbar-agentation-dictation-spinner {
            animation: toolbar-agentation-dictation-spin 0.7s linear infinite;
        }
        [class*="styles-module__light___"] .toolbar-agentation-dictation {
            color: rgba(0, 0, 0, 0.45);
        }
        [class*="styles-module__light___"] .toolbar-agentation-dictation:hover {
            background: rgba(0, 0, 0, 0.06);
            color: rgba(0, 0, 0, 0.8);
        }
        [class*="styles-module__light___"] .toolbar-agentation-dictation.is-recording {
            color: #e11d48;
            background: color-mix(in srgb, #e11d48 14%, transparent);
        }
        [class*="styles-module__light___"] .toolbar-agentation-dictation-error {
            color: #e11d48;
        }
        @keyframes toolbar-agentation-dictation-pulse {
            0%, 100% { box-shadow: 0 0 0 0 color-mix(in srgb, #f43f5e 45%, transparent); }
            50% { box-shadow: 0 0 0 5px transparent; }
        }
        @keyframes toolbar-agentation-dictation-spin {
            to { transform: rotate(360deg); }
        }
    `,document.head.appendChild(e)}var M6="toolbar-agentation-root",ny="toolbar-agentation-styles";function E6(){if(document.getElementById(ny))return;let e=document.createElement("style");e.id=ny,e.textContent=`
        [data-agentation-toolbar] { display: none !important; }
        [data-agentation-toolbar].agentation-visible { display: block !important; }
        #laravel-toolbar-shadow-host.toolbar-external-active {
            opacity: 0 !important;
            pointer-events: none !important;
            transition: opacity 0.15s ease;
        }
    `,document.head.appendChild(e)}function ly(){try{return Ki(window.location.pathname).length}catch{return 0}}function Di(e){window.dispatchEvent(new CustomEvent("toolbar:agentation:state",{detail:{annotationCount:e}}))}function oy(){if(window.__TOOLBAR_AGENTATION_MOUNTED__)return;window.__TOOLBAR_AGENTATION_MOUNTED__=!0,E6();let e=window.__TOOLBAR_AGENTATION__?.endpoint||void 0,t=document.createElement("div");t.id=M6,document.body.appendChild(t);let n=ay.createRoot(t),l=ly(),o=()=>n.render(iy.jsx(vh,{key:window.location.pathname,endpoint:e,onAnnotationAdd:()=>Di(++l),onAnnotationDelete:()=>Di(--l),onAnnotationsClear:()=>Di(l=0)})),a=()=>{l=ly(),Di(l),o()};o(),Di(l),Pp(window.__TOOLBAR_AGENTATION__?.dictation),window.addEventListener("popstate",a),document.addEventListener("inertia:navigate",a),window.addEventListener("toolbar:agentation:request-state",()=>Di(l))}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",oy,{once:!0});else oy();})();
