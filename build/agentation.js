(()=>{var g5=Object.create;var{getPrototypeOf:v5,defineProperty:_q,getOwnPropertyNames:u5}=Object;var m5=Object.prototype.hasOwnProperty;function d5(G){return this[G]}var c5,l5,DG=(G,Z,z)=>{var J=G!=null&&typeof G==="object";if(J){var Y=Z?c5??=new WeakMap:l5??=new WeakMap,B=Y.get(G);if(B)return B}z=G!=null?g5(v5(G)):{};let H=Z||!G||!G.__esModule?_q(z,"default",{value:G,enumerable:!0}):z;for(let X of u5(G))if(!m5.call(H,X))_q(H,X,{get:d5.bind(G,X),enumerable:!0});if(J)Y.set(G,H);return H};var I6=(G,Z)=>()=>(Z||G((Z={exports:{}}).exports,Z),Z.exports);var fq=I6((x0)=>{var C4=Symbol.for("react.transitional.element"),p5=Symbol.for("react.portal"),i5=Symbol.for("react.fragment"),s5=Symbol.for("react.strict_mode"),r5=Symbol.for("react.profiler"),o5=Symbol.for("react.consumer"),a5=Symbol.for("react.context"),n5=Symbol.for("react.forward_ref"),t5=Symbol.for("react.suspense"),e5=Symbol.for("react.memo"),Vq=Symbol.for("react.lazy"),G_=Symbol.for("react.activity"),Aq=Symbol.iterator;function Z_(G){if(G===null||typeof G!=="object")return null;return G=Aq&&G[Aq]||G["@@iterator"],typeof G==="function"?G:null}var Rq={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wq=Object.assign,Dq={};function xz(G,Z,z){this.props=G,this.context=Z,this.refs=Dq,this.updater=z||Rq}xz.prototype.isReactComponent={};xz.prototype.setState=function(G,Z){if(typeof G!=="object"&&typeof G!=="function"&&G!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,G,Z,"setState")};xz.prototype.forceUpdate=function(G){this.updater.enqueueForceUpdate(this,G,"forceUpdate")};function Kq(){}Kq.prototype=xz.prototype;function T4(G,Z,z){this.props=G,this.context=Z,this.refs=Dq,this.updater=z||Rq}var S4=T4.prototype=new Kq;S4.constructor=T4;wq(S4,xz.prototype);S4.isPureReactComponent=!0;var Fq=Array.isArray;function $4(){}var IG={H:null,A:null,T:null,S:null},Iq=Object.prototype.hasOwnProperty;function x4(G,Z,z){var J=z.ref;return{$$typeof:C4,type:G,key:Z,ref:J!==void 0?J:null,props:z}}function z_(G,Z){return x4(G.type,Z,G.props)}function P4(G){return typeof G==="object"&&G!==null&&G.$$typeof===C4}function J_(G){var Z={"=":"=0",":":"=2"};return"$"+G.replace(/[=:]/g,function(z){return Z[z]})}var Mq=/\/+/g;function N4(G,Z){return typeof G==="object"&&G!==null&&G.key!=null?J_(""+G.key):Z.toString(36)}function Y_(G){switch(G.status){case"fulfilled":return G.value;case"rejected":throw G.reason;default:switch(typeof G.status==="string"?G.then($4,$4):(G.status="pending",G.then(function(Z){G.status==="pending"&&(G.status="fulfilled",G.value=Z)},function(Z){G.status==="pending"&&(G.status="rejected",G.reason=Z)})),G.status){case"fulfilled":return G.value;case"rejected":throw G.reason}}throw G}function Sz(G,Z,z,J,Y){var B=typeof G;if(B==="undefined"||B==="boolean")G=null;var H=!1;if(G===null)H=!0;else switch(B){case"bigint":case"string":case"number":H=!0;break;case"object":switch(G.$$typeof){case C4:case p5:H=!0;break;case Vq:return H=G._init,Sz(H(G._payload),Z,z,J,Y)}}if(H)return Y=Y(G),H=J===""?"."+N4(G,0):J,Fq(Y)?(z="",H!=null&&(z=H.replace(Mq,"$&/")+"/"),Sz(Y,Z,z,"",function(A){return A})):Y!=null&&(P4(Y)&&(Y=z_(Y,z+(Y.key==null||G&&G.key===Y.key?"":(""+Y.key).replace(Mq,"$&/")+"/")+H)),Z.push(Y)),1;H=0;var X=J===""?".":J+":";if(Fq(G))for(var q=0;q<G.length;q++)J=G[q],B=X+N4(J,q),H+=Sz(J,Z,z,B,Y);else if(q=Z_(G),typeof q==="function")for(G=q.call(G),q=0;!(J=G.next()).done;)J=J.value,B=X+N4(J,q++),H+=Sz(J,Z,z,B,Y);else if(B==="object"){if(typeof G.then==="function")return Sz(Y_(G),Z,z,J,Y);throw Z=String(G),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(G).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return H}function M9(G,Z,z){if(G==null)return G;var J=[],Y=0;return Sz(G,J,"","",function(B){return Z.call(z,B,Y++)}),J}function B_(G){if(G._status===-1){var Z=G._result;Z=Z(),Z.then(function(z){if(G._status===0||G._status===-1)G._status=1,G._result=z},function(z){if(G._status===0||G._status===-1)G._status=2,G._result=z}),G._status===-1&&(G._status=0,G._result=Z)}if(G._status===1)return G._result.default;throw G._result}var Oq=typeof reportError==="function"?reportError:function(G){if(typeof window==="object"&&typeof window.ErrorEvent==="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof G==="object"&&G!==null&&typeof G.message==="string"?String(G.message):String(G),error:G});if(!window.dispatchEvent(Z))return}else if(typeof process==="object"&&typeof process.emit==="function"){process.emit("uncaughtException",G);return}console.error(G)},H_={map:M9,forEach:function(G,Z,z){M9(G,function(){Z.apply(this,arguments)},z)},count:function(G){var Z=0;return M9(G,function(){Z++}),Z},toArray:function(G){return M9(G,function(Z){return Z})||[]},only:function(G){if(!P4(G))throw Error("React.Children.only expected to receive a single React element child.");return G}};x0.Activity=G_;x0.Children=H_;x0.Component=xz;x0.Fragment=i5;x0.Profiler=r5;x0.PureComponent=T4;x0.StrictMode=s5;x0.Suspense=t5;x0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=IG;x0.__COMPILER_RUNTIME={__proto__:null,c:function(G){return IG.H.useMemoCache(G)}};x0.cache=function(G){return function(){return G.apply(null,arguments)}};x0.cacheSignal=function(){return null};x0.cloneElement=function(G,Z,z){if(G===null||G===void 0)throw Error("The argument must be a React element, but you passed "+G+".");var J=wq({},G.props),Y=G.key;if(Z!=null)for(B in Z.key!==void 0&&(Y=""+Z.key),Z)!Iq.call(Z,B)||B==="key"||B==="__self"||B==="__source"||B==="ref"&&Z.ref===void 0||(J[B]=Z[B]);var B=arguments.length-2;if(B===1)J.children=z;else if(1<B){for(var H=Array(B),X=0;X<B;X++)H[X]=arguments[X+2];J.children=H}return x4(G.type,Y,J)};x0.createContext=function(G){return G={$$typeof:a5,_currentValue:G,_currentValue2:G,_threadCount:0,Provider:null,Consumer:null},G.Provider=G,G.Consumer={$$typeof:o5,_context:G},G};x0.createElement=function(G,Z,z){var J,Y={},B=null;if(Z!=null)for(J in Z.key!==void 0&&(B=""+Z.key),Z)Iq.call(Z,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(Y[J]=Z[J]);var H=arguments.length-2;if(H===1)Y.children=z;else if(1<H){for(var X=Array(H),q=0;q<H;q++)X[q]=arguments[q+2];Y.children=X}if(G&&G.defaultProps)for(J in H=G.defaultProps,H)Y[J]===void 0&&(Y[J]=H[J]);return x4(G,B,Y)};x0.createRef=function(){return{current:null}};x0.forwardRef=function(G){return{$$typeof:n5,render:G}};x0.isValidElement=P4;x0.lazy=function(G){return{$$typeof:Vq,_payload:{_status:-1,_result:G},_init:B_}};x0.memo=function(G,Z){return{$$typeof:e5,type:G,compare:Z===void 0?null:Z}};x0.startTransition=function(G){var Z=IG.T,z={};IG.T=z;try{var J=G(),Y=IG.S;Y!==null&&Y(z,J),typeof J==="object"&&J!==null&&typeof J.then==="function"&&J.then($4,Oq)}catch(B){Oq(B)}finally{Z!==null&&z.types!==null&&(Z.types=z.types),IG.T=Z}};x0.unstable_useCacheRefresh=function(){return IG.H.useCacheRefresh()};x0.use=function(G){return IG.H.use(G)};x0.useActionState=function(G,Z,z){return IG.H.useActionState(G,Z,z)};x0.useCallback=function(G,Z){return IG.H.useCallback(G,Z)};x0.useContext=function(G){return IG.H.useContext(G)};x0.useDebugValue=function(){};x0.useDeferredValue=function(G,Z){return IG.H.useDeferredValue(G,Z)};x0.useEffect=function(G,Z){return IG.H.useEffect(G,Z)};x0.useEffectEvent=function(G){return IG.H.useEffectEvent(G)};x0.useId=function(){return IG.H.useId()};x0.useImperativeHandle=function(G,Z,z){return IG.H.useImperativeHandle(G,Z,z)};x0.useInsertionEffect=function(G,Z){return IG.H.useInsertionEffect(G,Z)};x0.useLayoutEffect=function(G,Z){return IG.H.useLayoutEffect(G,Z)};x0.useMemo=function(G,Z){return IG.H.useMemo(G,Z)};x0.useOptimistic=function(G,Z){return IG.H.useOptimistic(G,Z)};x0.useReducer=function(G,Z,z){return IG.H.useReducer(G,Z,z)};x0.useRef=function(G){return IG.H.useRef(G)};x0.useState=function(G){return IG.H.useState(G)};x0.useSyncExternalStore=function(G,Z,z){return IG.H.useSyncExternalStore(G,Z,z)};x0.useTransition=function(){return IG.H.useTransition()};x0.version="19.2.8"});var U6=I6((rO,Nq)=>{Nq.exports=fq()});var Cq=I6((FZ)=>{var X_=U6();function $q(G){var Z="https://react.dev/errors/"+G;if(1<arguments.length){Z+="?args[]="+encodeURIComponent(arguments[1]);for(var z=2;z<arguments.length;z++)Z+="&args[]="+encodeURIComponent(arguments[z])}return"Minified React error #"+G+"; visit "+Z+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Q7(){}var AZ={d:{f:Q7,r:function(){throw Error($q(522))},D:Q7,C:Q7,L:Q7,m:Q7,X:Q7,S:Q7,M:Q7},p:0,findDOMNode:null},q_=Symbol.for("react.portal");function W_(G,Z,z){var J=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:q_,key:J==null?null:""+J,children:G,containerInfo:Z,implementation:z}}var lJ=X_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function O9(G,Z){if(G==="font")return"";if(typeof Z==="string")return Z==="use-credentials"?Z:""}FZ.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=AZ;FZ.createPortal=function(G,Z){var z=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Z||Z.nodeType!==1&&Z.nodeType!==9&&Z.nodeType!==11)throw Error($q(299));return W_(G,Z,null,z)};FZ.flushSync=function(G){var Z=lJ.T,z=AZ.p;try{if(lJ.T=null,AZ.p=2,G)return G()}finally{lJ.T=Z,AZ.p=z,AZ.d.f()}};FZ.preconnect=function(G,Z){typeof G==="string"&&(Z?(Z=Z.crossOrigin,Z=typeof Z==="string"?Z==="use-credentials"?Z:"":void 0):Z=null,AZ.d.C(G,Z))};FZ.prefetchDNS=function(G){typeof G==="string"&&AZ.d.D(G)};FZ.preinit=function(G,Z){if(typeof G==="string"&&Z&&typeof Z.as==="string"){var z=Z.as,J=O9(z,Z.crossOrigin),Y=typeof Z.integrity==="string"?Z.integrity:void 0,B=typeof Z.fetchPriority==="string"?Z.fetchPriority:void 0;z==="style"?AZ.d.S(G,typeof Z.precedence==="string"?Z.precedence:void 0,{crossOrigin:J,integrity:Y,fetchPriority:B}):z==="script"&&AZ.d.X(G,{crossOrigin:J,integrity:Y,fetchPriority:B,nonce:typeof Z.nonce==="string"?Z.nonce:void 0})}};FZ.preinitModule=function(G,Z){if(typeof G==="string")if(typeof Z==="object"&&Z!==null){if(Z.as==null||Z.as==="script"){var z=O9(Z.as,Z.crossOrigin);AZ.d.M(G,{crossOrigin:z,integrity:typeof Z.integrity==="string"?Z.integrity:void 0,nonce:typeof Z.nonce==="string"?Z.nonce:void 0})}}else Z==null&&AZ.d.M(G)};FZ.preload=function(G,Z){if(typeof G==="string"&&typeof Z==="object"&&Z!==null&&typeof Z.as==="string"){var z=Z.as,J=O9(z,Z.crossOrigin);AZ.d.L(G,z,{crossOrigin:J,integrity:typeof Z.integrity==="string"?Z.integrity:void 0,nonce:typeof Z.nonce==="string"?Z.nonce:void 0,type:typeof Z.type==="string"?Z.type:void 0,fetchPriority:typeof Z.fetchPriority==="string"?Z.fetchPriority:void 0,referrerPolicy:typeof Z.referrerPolicy==="string"?Z.referrerPolicy:void 0,imageSrcSet:typeof Z.imageSrcSet==="string"?Z.imageSrcSet:void 0,imageSizes:typeof Z.imageSizes==="string"?Z.imageSizes:void 0,media:typeof Z.media==="string"?Z.media:void 0})}};FZ.preloadModule=function(G,Z){if(typeof G==="string")if(Z){var z=O9(Z.as,Z.crossOrigin);AZ.d.m(G,{as:typeof Z.as==="string"&&Z.as!=="script"?Z.as:void 0,crossOrigin:z,integrity:typeof Z.integrity==="string"?Z.integrity:void 0})}else AZ.d.m(G)};FZ.requestFormReset=function(G){AZ.d.r(G)};FZ.unstable_batchedUpdates=function(G,Z){return G(Z)};FZ.useFormState=function(G,Z,z){return lJ.H.useFormState(G,Z,z)};FZ.useFormStatus=function(){return lJ.H.useHostTransitionStatus()};FZ.version="19.2.8"});var V9=I6((aO,Sq)=>{function Tq(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=="function")return;try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tq)}catch(G){console.error(G)}}Tq(),Sq.exports=Cq()});var Pq=I6((R9)=>{var j_=Symbol.for("react.transitional.element"),Q_=Symbol.for("react.fragment");function xq(G,Z,z){var J=null;if(z!==void 0&&(J=""+z),Z.key!==void 0&&(J=""+Z.key),"key"in Z){z={};for(var Y in Z)Y!=="key"&&(z[Y]=Z[Y])}else z=Z;return Z=z.ref,{$$typeof:j_,type:G,key:J,ref:Z!==void 0?Z:null,props:z}}R9.Fragment=Q_;R9.jsx=xq;R9.jsxs=xq});var UZ=I6((tO,kq)=>{kq.exports=Pq()});var xW=I6((TG)=>{function JB(G,Z){var z=G.length;G.push(Z);G:for(;0<z;){var J=z-1>>>1,Y=G[J];if(0<h9(Y,Z))G[J]=Z,G[z]=Y,z=J;else break G}}function $6(G){return G.length===0?null:G[0]}function u9(G){if(G.length===0)return null;var Z=G[0],z=G.pop();if(z!==Z){G[0]=z;G:for(var J=0,Y=G.length,B=Y>>>1;J<B;){var H=2*(J+1)-1,X=G[H],q=H+1,A=G[q];if(0>h9(X,z))q<Y&&0>h9(A,X)?(G[J]=A,G[q]=z,J=q):(G[J]=X,G[H]=z,J=H);else if(q<Y&&0>h9(A,z))G[J]=A,G[q]=z,J=q;else break G}}return Z}function h9(G,Z){var z=G.sortIndex-Z.sortIndex;return z!==0?z:G.id-Z.id}TG.unstable_now=void 0;if(typeof performance==="object"&&typeof performance.now==="function")YB=performance,TG.unstable_now=function(){return YB.now()};else y9=Date,BB=y9.now(),TG.unstable_now=function(){return y9.now()-BB};var YB,y9,BB,v6=[],L7=[],T2=1,rZ=null,LZ=3,HB=!1,Z8=!1,z8=!1,qB=!1,NW=typeof setTimeout==="function"?setTimeout:null,$W=typeof clearTimeout==="function"?clearTimeout:null,fW=typeof setImmediate<"u"?setImmediate:null;function g9(G){for(var Z=$6(L7);Z!==null;){if(Z.callback===null)u9(L7);else if(Z.startTime<=G)u9(L7),Z.sortIndex=Z.expirationTime,JB(v6,Z);else break;Z=$6(L7)}}function WB(G){if(z8=!1,g9(G),!Z8)if($6(v6)!==null)Z8=!0,mz||(mz=!0,uz());else{var Z=$6(L7);Z!==null&&jB(WB,Z.startTime-G)}}var mz=!1,J8=-1,CW=5,TW=-1;function SW(){return qB?!0:TG.unstable_now()-TW<CW?!1:!0}function zB(){if(qB=!1,mz){var G=TG.unstable_now();TW=G;var Z=!0;try{G:{Z8=!1,z8&&(z8=!1,$W(J8),J8=-1),HB=!0;var z=LZ;try{Z:{g9(G);for(rZ=$6(v6);rZ!==null&&!(rZ.expirationTime>G&&SW());){var J=rZ.callback;if(typeof J==="function"){rZ.callback=null,LZ=rZ.priorityLevel;var Y=J(rZ.expirationTime<=G);if(G=TG.unstable_now(),typeof Y==="function"){rZ.callback=Y,g9(G),Z=!0;break Z}rZ===$6(v6)&&u9(v6),g9(G)}else u9(v6);rZ=$6(v6)}if(rZ!==null)Z=!0;else{var B=$6(L7);B!==null&&jB(WB,B.startTime-G),Z=!1}}break G}finally{rZ=null,LZ=z,HB=!1}Z=void 0}}finally{Z?uz():mz=!1}}}var uz;if(typeof fW==="function")uz=function(){fW(zB)};else if(typeof MessageChannel<"u")v9=new MessageChannel,XB=v9.port2,v9.port1.onmessage=zB,uz=function(){XB.postMessage(null)};else uz=function(){NW(zB,0)};var v9,XB;function jB(G,Z){J8=NW(function(){G(TG.unstable_now())},Z)}TG.unstable_IdlePriority=5;TG.unstable_ImmediatePriority=1;TG.unstable_LowPriority=4;TG.unstable_NormalPriority=3;TG.unstable_Profiling=null;TG.unstable_UserBlockingPriority=2;TG.unstable_cancelCallback=function(G){G.callback=null};TG.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):CW=0<G?Math.floor(1000/G):5};TG.unstable_getCurrentPriorityLevel=function(){return LZ};TG.unstable_next=function(G){switch(LZ){case 1:case 2:case 3:var Z=3;break;default:Z=LZ}var z=LZ;LZ=Z;try{return G()}finally{LZ=z}};TG.unstable_requestPaint=function(){qB=!0};TG.unstable_runWithPriority=function(G,Z){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var z=LZ;LZ=G;try{return Z()}finally{LZ=z}};TG.unstable_scheduleCallback=function(G,Z,z){var J=TG.unstable_now();switch(typeof z==="object"&&z!==null?(z=z.delay,z=typeof z==="number"&&0<z?J+z:J):z=J,G){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5000}return Y=z+Y,G={id:T2++,callback:Z,priorityLevel:G,startTime:z,expirationTime:Y,sortIndex:-1},z>J?(G.sortIndex=z,JB(L7,G),$6(v6)===null&&G===$6(L7)&&(z8?($W(J8),J8=-1):z8=!0,jB(WB,z-J))):(G.sortIndex=Y,JB(v6,G),Z8||HB||(Z8=!0,mz||(mz=!0,uz()))),G};TG.unstable_shouldYield=SW;TG.unstable_wrapCallback=function(G){var Z=LZ;return function(){var z=LZ;LZ=Z;try{return G.apply(this,arguments)}finally{LZ=z}}}});var kW=I6((ZV,PW)=>{PW.exports=xW()});var cL=I6((q4)=>{var GZ=kW(),JQ=U6(),S2=V9();function h(G){var Z="https://react.dev/errors/"+G;if(1<arguments.length){Z+="?args[]="+encodeURIComponent(arguments[1]);for(var z=2;z<arguments.length;z++)Z+="&args[]="+encodeURIComponent(arguments[z])}return"Minified React error #"+G+"; visit "+Z+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function YQ(G){return!(!G||G.nodeType!==1&&G.nodeType!==9&&G.nodeType!==11)}function i8(G){var Z=G,z=G;if(G.alternate)for(;Z.return;)Z=Z.return;else{G=Z;do Z=G,(Z.flags&4098)!==0&&(z=Z.return),G=Z.return;while(G)}return Z.tag===3?z:null}function BQ(G){if(G.tag===13){var Z=G.memoizedState;if(Z===null&&(G=G.alternate,G!==null&&(Z=G.memoizedState)),Z!==null)return Z.dehydrated}return null}function HQ(G){if(G.tag===31){var Z=G.memoizedState;if(Z===null&&(G=G.alternate,G!==null&&(Z=G.memoizedState)),Z!==null)return Z.dehydrated}return null}function bW(G){if(i8(G)!==G)throw Error(h(188))}function x2(G){var Z=G.alternate;if(!Z){if(Z=i8(G),Z===null)throw Error(h(188));return Z!==G?null:G}for(var z=G,J=Z;;){var Y=z.return;if(Y===null)break;var B=Y.alternate;if(B===null){if(J=Y.return,J!==null){z=J;continue}break}if(Y.child===B.child){for(B=Y.child;B;){if(B===z)return bW(Y),G;if(B===J)return bW(Y),Z;B=B.sibling}throw Error(h(188))}if(z.return!==J.return)z=Y,J=B;else{for(var H=!1,X=Y.child;X;){if(X===z){H=!0,z=Y,J=B;break}if(X===J){H=!0,J=Y,z=B;break}X=X.sibling}if(!H){for(X=B.child;X;){if(X===z){H=!0,z=B,J=Y;break}if(X===J){H=!0,J=B,z=Y;break}X=X.sibling}if(!H)throw Error(h(189))}}if(z.alternate!==J)throw Error(h(190))}if(z.tag!==3)throw Error(h(188));return z.stateNode.current===z?G:Z}function XQ(G){var Z=G.tag;if(Z===5||Z===26||Z===27||Z===6)return G;for(G=G.child;G!==null;){if(Z=XQ(G),Z!==null)return Z;G=G.sibling}return null}var $G=Object.assign,P2=Symbol.for("react.element"),m9=Symbol.for("react.transitional.element"),j8=Symbol.for("react.portal"),sz=Symbol.for("react.fragment"),qQ=Symbol.for("react.strict_mode"),cB=Symbol.for("react.profiler"),WQ=Symbol.for("react.consumer"),s6=Symbol.for("react.context"),uH=Symbol.for("react.forward_ref"),lB=Symbol.for("react.suspense"),pB=Symbol.for("react.suspense_list"),mH=Symbol.for("react.memo"),_7=Symbol.for("react.lazy"),iB=Symbol.for("react.activity"),k2=Symbol.for("react.memo_cache_sentinel"),EW=Symbol.iterator;function Y8(G){if(G===null||typeof G!=="object")return null;return G=EW&&G[EW]||G["@@iterator"],typeof G==="function"?G:null}var b2=Symbol.for("react.client.reference");function sB(G){if(G==null)return null;if(typeof G==="function")return G.$$typeof===b2?null:G.displayName||G.name||null;if(typeof G==="string")return G;switch(G){case sz:return"Fragment";case cB:return"Profiler";case qQ:return"StrictMode";case lB:return"Suspense";case pB:return"SuspenseList";case iB:return"Activity"}if(typeof G==="object")switch(G.$$typeof){case j8:return"Portal";case s6:return G.displayName||"Context";case WQ:return(G._context.displayName||"Context")+".Consumer";case uH:var Z=G.render;return G=G.displayName,G||(G=Z.displayName||Z.name||"",G=G!==""?"ForwardRef("+G+")":"ForwardRef"),G;case mH:return Z=G.displayName||null,Z!==null?Z:sB(G.type)||"Memo";case _7:Z=G._payload,G=G._init;try{return sB(G(Z))}catch(z){}}return null}var Q8=Array.isArray,K0=JQ.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,BG=S2.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Hz={pending:!1,data:null,method:null,action:null},rB=[],rz=-1;function P6(G){return{current:G}}function YZ(G){0>rz||(G.current=rB[rz],rB[rz]=null,rz--)}function KG(G,Z){rz++,rB[rz]=G.current,G.current=Z}var x6=P6(null),P8=P6(null),f7=P6(null),MY=P6(null);function OY(G,Z){switch(KG(f7,Z),KG(P8,G),KG(x6,null),Z.nodeType){case 9:case 11:G=(G=Z.documentElement)?(G=G.namespaceURI)?uj(G):0:0;break;default:if(G=Z.tagName,Z=Z.namespaceURI)Z=uj(Z),G=TL(Z,G);else switch(G){case"svg":G=1;break;case"math":G=2;break;default:G=0}}YZ(x6),KG(x6,G)}function UJ(){YZ(x6),YZ(P8),YZ(f7)}function oB(G){G.memoizedState!==null&&KG(MY,G);var Z=x6.current,z=TL(Z,G.type);Z!==z&&(KG(P8,G),KG(x6,z))}function VY(G){P8.current===G&&(YZ(x6),YZ(P8)),MY.current===G&&(YZ(MY),c8._currentValue=Hz)}var QB,hW;function Zz(G){if(QB===void 0)try{throw Error()}catch(z){var Z=z.stack.trim().match(/\n( *(at )?)/);QB=Z&&Z[1]||"",hW=-1<z.stack.indexOf(`
    at`)?" (<anonymous>)":-1<z.stack.indexOf("@")?"@unknown:0:0":""}return`
`+QB+G+hW}var UB=!1;function LB(G,Z){if(!G||UB)return"";UB=!0;var z=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var J={DetermineComponentFrameRoot:function(){try{if(Z){var V=function(){throw Error()};if(Object.defineProperty(V.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==="object"&&Reflect.construct){try{Reflect.construct(V,[])}catch(D){var L=D}Reflect.construct(G,[],V)}else{try{V.call()}catch(D){L=D}G.call(V.prototype)}}else{try{throw Error()}catch(D){L=D}(V=G())&&typeof V.catch==="function"&&V.catch(function(){})}}catch(D){if(D&&L&&typeof D.stack==="string")return[D.stack,L.stack]}return[null,null]}};J.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var Y=Object.getOwnPropertyDescriptor(J.DetermineComponentFrameRoot,"name");Y&&Y.configurable&&Object.defineProperty(J.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var B=J.DetermineComponentFrameRoot(),H=B[0],X=B[1];if(H&&X){var q=H.split(`
`),A=X.split(`
`);for(Y=J=0;J<q.length&&!q[J].includes("DetermineComponentFrameRoot");)J++;for(;Y<A.length&&!A[Y].includes("DetermineComponentFrameRoot");)Y++;if(J===q.length||Y===A.length)for(J=q.length-1,Y=A.length-1;1<=J&&0<=Y&&q[J]!==A[Y];)Y--;for(;1<=J&&0<=Y;J--,Y--)if(q[J]!==A[Y]){if(J!==1||Y!==1)do if(J--,Y--,0>Y||q[J]!==A[Y]){var U=`
`+q[J].replace(" at new "," at ");return G.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",G.displayName)),U}while(1<=J&&0<=Y);break}}}finally{UB=!1,Error.prepareStackTrace=z}return(z=G?G.displayName||G.name:"")?Zz(z):""}function E2(G,Z){switch(G.tag){case 26:case 27:case 5:return Zz(G.type);case 16:return Zz("Lazy");case 13:return G.child!==Z&&Z!==null?Zz("Suspense Fallback"):Zz("Suspense");case 19:return Zz("SuspenseList");case 0:case 15:return LB(G.type,!1);case 11:return LB(G.type.render,!1);case 1:return LB(G.type,!0);case 31:return Zz("Activity");default:return""}}function yW(G){try{var Z="",z=null;do Z+=E2(G,z),z=G,G=G.return;while(G);return Z}catch(J){return`
Error generating stack: `+J.message+`
`+J.stack}}var aB=Object.prototype.hasOwnProperty,dH=GZ.unstable_scheduleCallback,_B=GZ.unstable_cancelCallback,h2=GZ.unstable_shouldYield,y2=GZ.unstable_requestPaint,yZ=GZ.unstable_now,g2=GZ.unstable_getCurrentPriorityLevel,jQ=GZ.unstable_ImmediatePriority,QQ=GZ.unstable_UserBlockingPriority,RY=GZ.unstable_NormalPriority,v2=GZ.unstable_LowPriority,UQ=GZ.unstable_IdlePriority,u2=GZ.log,m2=GZ.unstable_setDisableYieldValue,s8=null,gZ=null;function R7(G){if(typeof u2==="function"&&m2(G),gZ&&typeof gZ.setStrictMode==="function")try{gZ.setStrictMode(s8,G)}catch(Z){}}var vZ=Math.clz32?Math.clz32:l2,d2=Math.log,c2=Math.LN2;function l2(G){return G>>>=0,G===0?32:31-(d2(G)/c2|0)|0}var d9=256,c9=262144,l9=4194304;function zz(G){var Z=G&42;if(Z!==0)return Z;switch(G&-G){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return G&261888;case 262144:case 524288:case 1048576:case 2097152:return G&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return G&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return G}}function iY(G,Z,z){var J=G.pendingLanes;if(J===0)return 0;var Y=0,B=G.suspendedLanes,H=G.pingedLanes;G=G.warmLanes;var X=J&134217727;return X!==0?(J=X&~B,J!==0?Y=zz(J):(H&=X,H!==0?Y=zz(H):z||(z=X&~G,z!==0&&(Y=zz(z))))):(X=J&~B,X!==0?Y=zz(X):H!==0?Y=zz(H):z||(z=J&~G,z!==0&&(Y=zz(z)))),Y===0?0:Z!==0&&Z!==Y&&(Z&B)===0&&(B=Y&-Y,z=Z&-Z,B>=z||B===32&&(z&4194048)!==0)?Z:Y}function r8(G,Z){return(G.pendingLanes&~(G.suspendedLanes&~G.pingedLanes)&Z)===0}function p2(G,Z){switch(G){case 1:case 2:case 4:case 8:case 64:return Z+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return Z+5000;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function LQ(){var G=l9;return l9<<=1,(l9&62914560)===0&&(l9=4194304),G}function AB(G){for(var Z=[],z=0;31>z;z++)Z.push(G);return Z}function o8(G,Z){G.pendingLanes|=Z,Z!==268435456&&(G.suspendedLanes=0,G.pingedLanes=0,G.warmLanes=0)}function i2(G,Z,z,J,Y,B){var H=G.pendingLanes;G.pendingLanes=z,G.suspendedLanes=0,G.pingedLanes=0,G.warmLanes=0,G.expiredLanes&=z,G.entangledLanes&=z,G.errorRecoveryDisabledLanes&=z,G.shellSuspendCounter=0;var{entanglements:X,expirationTimes:q,hiddenUpdates:A}=G;for(z=H&~z;0<z;){var U=31-vZ(z),V=1<<U;X[U]=0,q[U]=-1;var L=A[U];if(L!==null)for(A[U]=null,U=0;U<L.length;U++){var D=L[U];D!==null&&(D.lane&=-536870913)}z&=~V}J!==0&&_Q(G,J,0),B!==0&&Y===0&&G.tag!==0&&(G.suspendedLanes|=B&~(H&~Z))}function _Q(G,Z,z){G.pendingLanes|=Z,G.suspendedLanes&=~Z;var J=31-vZ(Z);G.entangledLanes|=Z,G.entanglements[J]=G.entanglements[J]|1073741824|z&261930}function AQ(G,Z){var z=G.entangledLanes|=Z;for(G=G.entanglements;z;){var J=31-vZ(z),Y=1<<J;Y&Z|G[J]&Z&&(G[J]|=Z),z&=~Y}}function FQ(G,Z){var z=Z&-Z;return z=(z&42)!==0?1:cH(z),(z&(G.suspendedLanes|Z))!==0?0:z}function cH(G){switch(G){case 2:G=1;break;case 8:G=4;break;case 32:G=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:G=128;break;case 268435456:G=134217728;break;default:G=0}return G}function lH(G){return G&=-G,2<G?8<G?(G&134217727)!==0?32:268435456:8:2}function MQ(){var G=BG.p;if(G!==0)return G;return G=window.event,G===void 0?32:uL(G.type)}function gW(G,Z){var z=BG.p;try{return BG.p=G,Z()}finally{BG.p=z}}var g7=Math.random().toString(36).slice(2),XZ="__reactFiber$"+g7,CZ="__reactProps$"+g7,KJ="__reactContainer$"+g7,nB="__reactEvents$"+g7,s2="__reactListeners$"+g7,r2="__reactHandles$"+g7,vW="__reactResources$"+g7,a8="__reactMarker$"+g7;function pH(G){delete G[XZ],delete G[CZ],delete G[nB],delete G[s2],delete G[r2]}function oz(G){var Z=G[XZ];if(Z)return Z;for(var z=G.parentNode;z;){if(Z=z[KJ]||z[XZ]){if(z=Z.alternate,Z.child!==null||z!==null&&z.child!==null)for(G=pj(G);G!==null;){if(z=G[XZ])return z;G=pj(G)}return Z}G=z,z=G.parentNode}return null}function IJ(G){if(G=G[XZ]||G[KJ]){var Z=G.tag;if(Z===5||Z===6||Z===13||Z===31||Z===26||Z===27||Z===3)return G}return null}function U8(G){var Z=G.tag;if(Z===5||Z===26||Z===27||Z===6)return G.stateNode;throw Error(h(33))}function BJ(G){var Z=G[vW];return Z||(Z=G[vW]={hoistableStyles:new Map,hoistableScripts:new Map}),Z}function JZ(G){G[a8]=!0}var OQ=new Set,VQ={};function Fz(G,Z){LJ(G,Z),LJ(G+"Capture",Z)}function LJ(G,Z){VQ[G]=Z;for(G=0;G<Z.length;G++)OQ.add(Z[G])}var o2=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),uW={},mW={};function a2(G){if(aB.call(mW,G))return!0;if(aB.call(uW,G))return!1;if(o2.test(G))return mW[G]=!0;return uW[G]=!0,!1}function ZY(G,Z,z){if(a2(Z))if(z===null)G.removeAttribute(Z);else{switch(typeof z){case"undefined":case"function":case"symbol":G.removeAttribute(Z);return;case"boolean":var J=Z.toLowerCase().slice(0,5);if(J!=="data-"&&J!=="aria-"){G.removeAttribute(Z);return}}G.setAttribute(Z,""+z)}}function p9(G,Z,z){if(z===null)G.removeAttribute(Z);else{switch(typeof z){case"undefined":case"function":case"symbol":case"boolean":G.removeAttribute(Z);return}G.setAttribute(Z,""+z)}}function u6(G,Z,z,J){if(J===null)G.removeAttribute(z);else{switch(typeof J){case"undefined":case"function":case"symbol":case"boolean":G.removeAttribute(z);return}G.setAttributeNS(Z,z,""+J)}}function aZ(G){switch(typeof G){case"bigint":case"boolean":case"number":case"string":case"undefined":return G;case"object":return G;default:return""}}function RQ(G){var Z=G.type;return(G=G.nodeName)&&G.toLowerCase()==="input"&&(Z==="checkbox"||Z==="radio")}function n2(G,Z,z){var J=Object.getOwnPropertyDescriptor(G.constructor.prototype,Z);if(!G.hasOwnProperty(Z)&&typeof J<"u"&&typeof J.get==="function"&&typeof J.set==="function"){var{get:Y,set:B}=J;return Object.defineProperty(G,Z,{configurable:!0,get:function(){return Y.call(this)},set:function(H){z=""+H,B.call(this,H)}}),Object.defineProperty(G,Z,{enumerable:J.enumerable}),{getValue:function(){return z},setValue:function(H){z=""+H},stopTracking:function(){G._valueTracker=null,delete G[Z]}}}}function tB(G){if(!G._valueTracker){var Z=RQ(G)?"checked":"value";G._valueTracker=n2(G,Z,""+G[Z])}}function wQ(G){if(!G)return!1;var Z=G._valueTracker;if(!Z)return!0;var z=Z.getValue(),J="";return G&&(J=RQ(G)?G.checked?"true":"false":G.value),G=J,G!==z?(Z.setValue(G),!0):!1}function wY(G){if(G=G||(typeof document<"u"?document:void 0),typeof G>"u")return null;try{return G.activeElement||G.body}catch(Z){return G.body}}var t2=/[\n"\\]/g;function eZ(G){return G.replace(t2,function(Z){return"\\"+Z.charCodeAt(0).toString(16)+" "})}function eB(G,Z,z,J,Y,B,H,X){if(G.name="",H!=null&&typeof H!=="function"&&typeof H!=="symbol"&&typeof H!=="boolean"?G.type=H:G.removeAttribute("type"),Z!=null)if(H==="number"){if(Z===0&&G.value===""||G.value!=Z)G.value=""+aZ(Z)}else G.value!==""+aZ(Z)&&(G.value=""+aZ(Z));else H!=="submit"&&H!=="reset"||G.removeAttribute("value");Z!=null?GH(G,H,aZ(Z)):z!=null?GH(G,H,aZ(z)):J!=null&&G.removeAttribute("value"),Y==null&&B!=null&&(G.defaultChecked=!!B),Y!=null&&(G.checked=Y&&typeof Y!=="function"&&typeof Y!=="symbol"),X!=null&&typeof X!=="function"&&typeof X!=="symbol"&&typeof X!=="boolean"?G.name=""+aZ(X):G.removeAttribute("name")}function DQ(G,Z,z,J,Y,B,H,X){if(B!=null&&typeof B!=="function"&&typeof B!=="symbol"&&typeof B!=="boolean"&&(G.type=B),Z!=null||z!=null){if(!(B!=="submit"&&B!=="reset"||Z!==void 0&&Z!==null)){tB(G);return}z=z!=null?""+aZ(z):"",Z=Z!=null?""+aZ(Z):z,X||Z===G.value||(G.value=Z),G.defaultValue=Z}J=J!=null?J:Y,J=typeof J!=="function"&&typeof J!=="symbol"&&!!J,G.checked=X?G.checked:!!J,G.defaultChecked=!!J,H!=null&&typeof H!=="function"&&typeof H!=="symbol"&&typeof H!=="boolean"&&(G.name=H),tB(G)}function GH(G,Z,z){Z==="number"&&wY(G.ownerDocument)===G||G.defaultValue===""+z||(G.defaultValue=""+z)}function HJ(G,Z,z,J){if(G=G.options,Z){Z={};for(var Y=0;Y<z.length;Y++)Z["$"+z[Y]]=!0;for(z=0;z<G.length;z++)Y=Z.hasOwnProperty("$"+G[z].value),G[z].selected!==Y&&(G[z].selected=Y),Y&&J&&(G[z].defaultSelected=!0)}else{z=""+aZ(z),Z=null;for(Y=0;Y<G.length;Y++){if(G[Y].value===z){G[Y].selected=!0,J&&(G[Y].defaultSelected=!0);return}Z!==null||G[Y].disabled||(Z=G[Y])}Z!==null&&(Z.selected=!0)}}function KQ(G,Z,z){if(Z!=null&&(Z=""+aZ(Z),Z!==G.value&&(G.value=Z),z==null)){G.defaultValue!==Z&&(G.defaultValue=Z);return}G.defaultValue=z!=null?""+aZ(z):""}function IQ(G,Z,z,J){if(Z==null){if(J!=null){if(z!=null)throw Error(h(92));if(Q8(J)){if(1<J.length)throw Error(h(93));J=J[0]}z=J}z==null&&(z=""),Z=z}z=aZ(Z),G.defaultValue=z,J=G.textContent,J===z&&J!==""&&J!==null&&(G.value=J),tB(G)}function _J(G,Z){if(Z){var z=G.firstChild;if(z&&z===G.lastChild&&z.nodeType===3){z.nodeValue=Z;return}}G.textContent=Z}var e2=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function dW(G,Z,z){var J=Z.indexOf("--")===0;z==null||typeof z==="boolean"||z===""?J?G.setProperty(Z,""):Z==="float"?G.cssFloat="":G[Z]="":J?G.setProperty(Z,z):typeof z!=="number"||z===0||e2.has(Z)?Z==="float"?G.cssFloat=z:G[Z]=(""+z).trim():G[Z]=z+"px"}function fQ(G,Z,z){if(Z!=null&&typeof Z!=="object")throw Error(h(62));if(G=G.style,z!=null){for(var J in z)!z.hasOwnProperty(J)||Z!=null&&Z.hasOwnProperty(J)||(J.indexOf("--")===0?G.setProperty(J,""):J==="float"?G.cssFloat="":G[J]="");for(var Y in Z)J=Z[Y],Z.hasOwnProperty(Y)&&z[Y]!==J&&dW(G,Y,J)}else for(var B in Z)Z.hasOwnProperty(B)&&dW(G,B,Z[B])}function iH(G){if(G.indexOf("-")===-1)return!1;switch(G){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var GF=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ZF=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zY(G){return ZF.test(""+G)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":G}function r6(){}var ZH=null;function sH(G){return G=G.target||G.srcElement||window,G.correspondingUseElement&&(G=G.correspondingUseElement),G.nodeType===3?G.parentNode:G}var az=null,XJ=null;function cW(G){var Z=IJ(G);if(Z&&(G=Z.stateNode)){var z=G[CZ]||null;G:switch(G=Z.stateNode,Z.type){case"input":if(eB(G,z.value,z.defaultValue,z.defaultValue,z.checked,z.defaultChecked,z.type,z.name),Z=z.name,z.type==="radio"&&Z!=null){for(z=G;z.parentNode;)z=z.parentNode;z=z.querySelectorAll('input[name="'+eZ(""+Z)+'"][type="radio"]');for(Z=0;Z<z.length;Z++){var J=z[Z];if(J!==G&&J.form===G.form){var Y=J[CZ]||null;if(!Y)throw Error(h(90));eB(J,Y.value,Y.defaultValue,Y.defaultValue,Y.checked,Y.defaultChecked,Y.type,Y.name)}}for(Z=0;Z<z.length;Z++)J=z[Z],J.form===G.form&&wQ(J)}break G;case"textarea":KQ(G,z.value,z.defaultValue);break G;case"select":Z=z.value,Z!=null&&HJ(G,!!z.multiple,Z,!1)}}}var FB=!1;function NQ(G,Z,z){if(FB)return G(Z,z);FB=!0;try{var J=G(Z);return J}finally{if(FB=!1,az!==null||XJ!==null){if(Y4(),az&&(Z=az,G=XJ,XJ=az=null,cW(Z),G))for(Z=0;Z<G.length;Z++)cW(G[Z])}}}function k8(G,Z){var z=G.stateNode;if(z===null)return null;var J=z[CZ]||null;if(J===null)return null;z=J[Z];G:switch(Z){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(J=!J.disabled)||(G=G.type,J=!(G==="button"||G==="input"||G==="select"||G==="textarea")),G=!J;break G;default:G=!1}if(G)return null;if(z&&typeof z!=="function")throw Error(h(231,Z,typeof z));return z}var e6=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zH=!1;if(e6)try{Jz={},Object.defineProperty(Jz,"passive",{get:function(){zH=!0}}),window.addEventListener("test",Jz,Jz),window.removeEventListener("test",Jz,Jz)}catch(G){zH=!1}var Jz,w7=null,rH=null,JY=null;function $Q(){if(JY)return JY;var G,Z=rH,z=Z.length,J,Y="value"in w7?w7.value:w7.textContent,B=Y.length;for(G=0;G<z&&Z[G]===Y[G];G++);var H=z-G;for(J=1;J<=H&&Z[z-J]===Y[B-J];J++);return JY=Y.slice(G,1<J?1-J:void 0)}function YY(G){var Z=G.keyCode;return"charCode"in G?(G=G.charCode,G===0&&Z===13&&(G=13)):G=Z,G===10&&(G=13),32<=G||G===13?G:0}function i9(){return!0}function lW(){return!1}function TZ(G){function Z(z,J,Y,B,H){this._reactName=z,this._targetInst=Y,this.type=J,this.nativeEvent=B,this.target=H,this.currentTarget=null;for(var X in G)G.hasOwnProperty(X)&&(z=G[X],this[X]=z?z(B):B[X]);return this.isDefaultPrevented=(B.defaultPrevented!=null?B.defaultPrevented:B.returnValue===!1)?i9:lW,this.isPropagationStopped=lW,this}return $G(Z.prototype,{preventDefault:function(){this.defaultPrevented=!0;var z=this.nativeEvent;z&&(z.preventDefault?z.preventDefault():typeof z.returnValue!=="unknown"&&(z.returnValue=!1),this.isDefaultPrevented=i9)},stopPropagation:function(){var z=this.nativeEvent;z&&(z.stopPropagation?z.stopPropagation():typeof z.cancelBubble!=="unknown"&&(z.cancelBubble=!0),this.isPropagationStopped=i9)},persist:function(){},isPersistent:i9}),Z}var Mz={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(G){return G.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sY=TZ(Mz),n8=$G({},Mz,{view:0,detail:0}),zF=TZ(n8),MB,OB,B8,rY=$G({},n8,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oH,button:0,buttons:0,relatedTarget:function(G){return G.relatedTarget===void 0?G.fromElement===G.srcElement?G.toElement:G.fromElement:G.relatedTarget},movementX:function(G){if("movementX"in G)return G.movementX;return G!==B8&&(B8&&G.type==="mousemove"?(MB=G.screenX-B8.screenX,OB=G.screenY-B8.screenY):OB=MB=0,B8=G),MB},movementY:function(G){return"movementY"in G?G.movementY:OB}}),pW=TZ(rY),JF=$G({},rY,{dataTransfer:0}),YF=TZ(JF),BF=$G({},n8,{relatedTarget:0}),VB=TZ(BF),HF=$G({},Mz,{animationName:0,elapsedTime:0,pseudoElement:0}),XF=TZ(HF),qF=$G({},Mz,{clipboardData:function(G){return"clipboardData"in G?G.clipboardData:window.clipboardData}}),WF=TZ(qF),jF=$G({},Mz,{data:0}),iW=TZ(jF),QF={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},UF={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},LF={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _F(G){var Z=this.nativeEvent;return Z.getModifierState?Z.getModifierState(G):(G=LF[G])?!!Z[G]:!1}function oH(){return _F}var AF=$G({},n8,{key:function(G){if(G.key){var Z=QF[G.key]||G.key;if(Z!=="Unidentified")return Z}return G.type==="keypress"?(G=YY(G),G===13?"Enter":String.fromCharCode(G)):G.type==="keydown"||G.type==="keyup"?UF[G.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oH,charCode:function(G){return G.type==="keypress"?YY(G):0},keyCode:function(G){return G.type==="keydown"||G.type==="keyup"?G.keyCode:0},which:function(G){return G.type==="keypress"?YY(G):G.type==="keydown"||G.type==="keyup"?G.keyCode:0}}),FF=TZ(AF),MF=$G({},rY,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sW=TZ(MF),OF=$G({},n8,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oH}),VF=TZ(OF),RF=$G({},Mz,{propertyName:0,elapsedTime:0,pseudoElement:0}),wF=TZ(RF),DF=$G({},rY,{deltaX:function(G){return"deltaX"in G?G.deltaX:("wheelDeltaX"in G)?-G.wheelDeltaX:0},deltaY:function(G){return"deltaY"in G?G.deltaY:("wheelDeltaY"in G)?-G.wheelDeltaY:("wheelDelta"in G)?-G.wheelDelta:0},deltaZ:0,deltaMode:0}),KF=TZ(DF),IF=$G({},Mz,{newState:0,oldState:0}),fF=TZ(IF),NF=[9,13,27,32],aH=e6&&"CompositionEvent"in window,V8=null;e6&&"documentMode"in document&&(V8=document.documentMode);var $F=e6&&"TextEvent"in window&&!V8,CQ=e6&&(!aH||V8&&8<V8&&11>=V8),rW=String.fromCharCode(32),oW=!1;function TQ(G,Z){switch(G){case"keyup":return NF.indexOf(Z.keyCode)!==-1;case"keydown":return Z.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function SQ(G){return G=G.detail,typeof G==="object"&&"data"in G?G.data:null}var nz=!1;function CF(G,Z){switch(G){case"compositionend":return SQ(Z);case"keypress":if(Z.which!==32)return null;return oW=!0,rW;case"textInput":return G=Z.data,G===rW&&oW?null:G;default:return null}}function TF(G,Z){if(nz)return G==="compositionend"||!aH&&TQ(G,Z)?(G=$Q(),JY=rH=w7=null,nz=!1,G):null;switch(G){case"paste":return null;case"keypress":if(!(Z.ctrlKey||Z.altKey||Z.metaKey)||Z.ctrlKey&&Z.altKey){if(Z.char&&1<Z.char.length)return Z.char;if(Z.which)return String.fromCharCode(Z.which)}return null;case"compositionend":return CQ&&Z.locale!=="ko"?null:Z.data;default:return null}}var SF={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function aW(G){var Z=G&&G.nodeName&&G.nodeName.toLowerCase();return Z==="input"?!!SF[G.type]:Z==="textarea"?!0:!1}function xQ(G,Z,z,J){az?XJ?XJ.push(J):XJ=[J]:az=J,Z=vY(Z,"onChange"),0<Z.length&&(z=new sY("onChange","change",null,z,J),G.push({event:z,listeners:Z}))}var R8=null,b8=null;function xF(G){NL(G,0)}function oY(G){var Z=U8(G);if(wQ(Z))return G}function nW(G,Z){if(G==="change")return Z}var PQ=!1;if(e6){if(e6){if(_8="oninput"in document,!_8)BY=document.createElement("div"),BY.setAttribute("oninput","return;"),_8=typeof BY.oninput==="function";L8=_8}else L8=!1;PQ=L8&&(!document.documentMode||9<document.documentMode)}var L8,_8,BY;function tW(){R8&&(R8.detachEvent("onpropertychange",kQ),b8=R8=null)}function kQ(G){if(G.propertyName==="value"&&oY(b8)){var Z=[];xQ(Z,b8,G,sH(G)),NQ(xF,Z)}}function PF(G,Z,z){G==="focusin"?(tW(),R8=Z,b8=z,R8.attachEvent("onpropertychange",kQ)):G==="focusout"&&tW()}function kF(G){if(G==="selectionchange"||G==="keyup"||G==="keydown")return oY(b8)}function bF(G,Z){if(G==="click")return oY(Z)}function EF(G,Z){if(G==="input"||G==="change")return oY(Z)}function hF(G,Z){return G===Z&&(G!==0||1/G===1/Z)||G!==G&&Z!==Z}var mZ=typeof Object.is==="function"?Object.is:hF;function E8(G,Z){if(mZ(G,Z))return!0;if(typeof G!=="object"||G===null||typeof Z!=="object"||Z===null)return!1;var z=Object.keys(G),J=Object.keys(Z);if(z.length!==J.length)return!1;for(J=0;J<z.length;J++){var Y=z[J];if(!aB.call(Z,Y)||!mZ(G[Y],Z[Y]))return!1}return!0}function eW(G){for(;G&&G.firstChild;)G=G.firstChild;return G}function Gj(G,Z){var z=eW(G);G=0;for(var J;z;){if(z.nodeType===3){if(J=G+z.textContent.length,G<=Z&&J>=Z)return{node:z,offset:Z-G};G=J}G:{for(;z;){if(z.nextSibling){z=z.nextSibling;break G}z=z.parentNode}z=void 0}z=eW(z)}}function bQ(G,Z){return G&&Z?G===Z?!0:G&&G.nodeType===3?!1:Z&&Z.nodeType===3?bQ(G,Z.parentNode):("contains"in G)?G.contains(Z):G.compareDocumentPosition?!!(G.compareDocumentPosition(Z)&16):!1:!1}function EQ(G){G=G!=null&&G.ownerDocument!=null&&G.ownerDocument.defaultView!=null?G.ownerDocument.defaultView:window;for(var Z=wY(G.document);Z instanceof G.HTMLIFrameElement;){try{var z=typeof Z.contentWindow.location.href==="string"}catch(J){z=!1}if(z)G=Z.contentWindow;else break;Z=wY(G.document)}return Z}function nH(G){var Z=G&&G.nodeName&&G.nodeName.toLowerCase();return Z&&(Z==="input"&&(G.type==="text"||G.type==="search"||G.type==="tel"||G.type==="url"||G.type==="password")||Z==="textarea"||G.contentEditable==="true")}var yF=e6&&"documentMode"in document&&11>=document.documentMode,tz=null,JH=null,w8=null,YH=!1;function Zj(G,Z,z){var J=z.window===z?z.document:z.nodeType===9?z:z.ownerDocument;YH||tz==null||tz!==wY(J)||(J=tz,("selectionStart"in J)&&nH(J)?J={start:J.selectionStart,end:J.selectionEnd}:(J=(J.ownerDocument&&J.ownerDocument.defaultView||window).getSelection(),J={anchorNode:J.anchorNode,anchorOffset:J.anchorOffset,focusNode:J.focusNode,focusOffset:J.focusOffset}),w8&&E8(w8,J)||(w8=J,J=vY(JH,"onSelect"),0<J.length&&(Z=new sY("onSelect","select",null,Z,z),G.push({event:Z,listeners:J}),Z.target=tz)))}function Gz(G,Z){var z={};return z[G.toLowerCase()]=Z.toLowerCase(),z["Webkit"+G]="webkit"+Z,z["Moz"+G]="moz"+Z,z}var ez={animationend:Gz("Animation","AnimationEnd"),animationiteration:Gz("Animation","AnimationIteration"),animationstart:Gz("Animation","AnimationStart"),transitionrun:Gz("Transition","TransitionRun"),transitionstart:Gz("Transition","TransitionStart"),transitioncancel:Gz("Transition","TransitionCancel"),transitionend:Gz("Transition","TransitionEnd")},RB={},hQ={};e6&&(hQ=document.createElement("div").style,("AnimationEvent"in window)||(delete ez.animationend.animation,delete ez.animationiteration.animation,delete ez.animationstart.animation),("TransitionEvent"in window)||delete ez.transitionend.transition);function Oz(G){if(RB[G])return RB[G];if(!ez[G])return G;var Z=ez[G],z;for(z in Z)if(Z.hasOwnProperty(z)&&z in hQ)return RB[G]=Z[z];return G}var yQ=Oz("animationend"),gQ=Oz("animationiteration"),vQ=Oz("animationstart"),gF=Oz("transitionrun"),vF=Oz("transitionstart"),uF=Oz("transitioncancel"),uQ=Oz("transitionend"),mQ=new Map,BH="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");BH.push("scrollEnd");function F6(G,Z){mQ.set(G,Z),Fz(Z,[G])}var DY=typeof reportError==="function"?reportError:function(G){if(typeof window==="object"&&typeof window.ErrorEvent==="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof G==="object"&&G!==null&&typeof G.message==="string"?String(G.message):String(G),error:G});if(!window.dispatchEvent(Z))return}else if(typeof process==="object"&&typeof process.emit==="function"){process.emit("uncaughtException",G);return}console.error(G)},oZ=[],GJ=0,tH=0;function aY(){for(var G=GJ,Z=tH=GJ=0;Z<G;){var z=oZ[Z];oZ[Z++]=null;var J=oZ[Z];oZ[Z++]=null;var Y=oZ[Z];oZ[Z++]=null;var B=oZ[Z];if(oZ[Z++]=null,J!==null&&Y!==null){var H=J.pending;H===null?Y.next=Y:(Y.next=H.next,H.next=Y),J.pending=Y}B!==0&&dQ(z,Y,B)}}function nY(G,Z,z,J){oZ[GJ++]=G,oZ[GJ++]=Z,oZ[GJ++]=z,oZ[GJ++]=J,tH|=J,G.lanes|=J,G=G.alternate,G!==null&&(G.lanes|=J)}function eH(G,Z,z,J){return nY(G,Z,z,J),KY(G)}function Vz(G,Z){return nY(G,null,null,Z),KY(G)}function dQ(G,Z,z){G.lanes|=z;var J=G.alternate;J!==null&&(J.lanes|=z);for(var Y=!1,B=G.return;B!==null;)B.childLanes|=z,J=B.alternate,J!==null&&(J.childLanes|=z),B.tag===22&&(G=B.stateNode,G===null||G._visibility&1||(Y=!0)),G=B,B=B.return;return G.tag===3?(B=G.stateNode,Y&&Z!==null&&(Y=31-vZ(z),G=B.hiddenUpdates,J=G[Y],J===null?G[Y]=[Z]:J.push(Z),Z.lane=z|536870912),B):null}function KY(G){if(50<S8)throw S8=0,NH=null,Error(h(185));for(var Z=G.return;Z!==null;)G=Z,Z=G.return;return G.tag===3?G.stateNode:null}var ZJ={};function mF(G,Z,z,J){this.tag=G,this.key=z,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=Z,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=J,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function EZ(G,Z,z,J){return new mF(G,Z,z,J)}function GX(G){return G=G.prototype,!(!G||!G.isReactComponent)}function a6(G,Z){var z=G.alternate;return z===null?(z=EZ(G.tag,Z,G.key,G.mode),z.elementType=G.elementType,z.type=G.type,z.stateNode=G.stateNode,z.alternate=G,G.alternate=z):(z.pendingProps=Z,z.type=G.type,z.flags=0,z.subtreeFlags=0,z.deletions=null),z.flags=G.flags&65011712,z.childLanes=G.childLanes,z.lanes=G.lanes,z.child=G.child,z.memoizedProps=G.memoizedProps,z.memoizedState=G.memoizedState,z.updateQueue=G.updateQueue,Z=G.dependencies,z.dependencies=Z===null?null:{lanes:Z.lanes,firstContext:Z.firstContext},z.sibling=G.sibling,z.index=G.index,z.ref=G.ref,z.refCleanup=G.refCleanup,z}function cQ(G,Z){G.flags&=65011714;var z=G.alternate;return z===null?(G.childLanes=0,G.lanes=Z,G.child=null,G.subtreeFlags=0,G.memoizedProps=null,G.memoizedState=null,G.updateQueue=null,G.dependencies=null,G.stateNode=null):(G.childLanes=z.childLanes,G.lanes=z.lanes,G.child=z.child,G.subtreeFlags=0,G.deletions=null,G.memoizedProps=z.memoizedProps,G.memoizedState=z.memoizedState,G.updateQueue=z.updateQueue,G.type=z.type,Z=z.dependencies,G.dependencies=Z===null?null:{lanes:Z.lanes,firstContext:Z.firstContext}),G}function HY(G,Z,z,J,Y,B){var H=0;if(J=G,typeof G==="function")GX(G)&&(H=1);else if(typeof G==="string")H=lM(G,z,x6.current)?26:G==="html"||G==="head"||G==="body"?27:5;else G:switch(G){case iB:return G=EZ(31,z,Z,Y),G.elementType=iB,G.lanes=B,G;case sz:return Xz(z.children,Y,B,Z);case qQ:H=8,Y|=24;break;case cB:return G=EZ(12,z,Z,Y|2),G.elementType=cB,G.lanes=B,G;case lB:return G=EZ(13,z,Z,Y),G.elementType=lB,G.lanes=B,G;case pB:return G=EZ(19,z,Z,Y),G.elementType=pB,G.lanes=B,G;default:if(typeof G==="object"&&G!==null)switch(G.$$typeof){case s6:H=10;break G;case WQ:H=9;break G;case uH:H=11;break G;case mH:H=14;break G;case _7:H=16,J=null;break G}H=29,z=Error(h(130,G===null?"null":typeof G,"")),J=null}return Z=EZ(H,z,Z,Y),Z.elementType=G,Z.type=J,Z.lanes=B,Z}function Xz(G,Z,z,J){return G=EZ(7,G,J,Z),G.lanes=z,G}function wB(G,Z,z){return G=EZ(6,G,null,Z),G.lanes=z,G}function lQ(G){var Z=EZ(18,null,null,0);return Z.stateNode=G,Z}function DB(G,Z,z){return Z=EZ(4,G.children!==null?G.children:[],G.key,Z),Z.lanes=z,Z.stateNode={containerInfo:G.containerInfo,pendingChildren:null,implementation:G.implementation},Z}var zj=new WeakMap;function G6(G,Z){if(typeof G==="object"&&G!==null){var z=zj.get(G);if(z!==void 0)return z;return Z={value:G,source:Z,stack:yW(Z)},zj.set(G,Z),Z}return{value:G,source:Z,stack:yW(Z)}}var zJ=[],JJ=0,IY=null,h8=0,nZ=[],tZ=0,b7=null,C6=1,T6="";function p6(G,Z){zJ[JJ++]=h8,zJ[JJ++]=IY,IY=G,h8=Z}function pQ(G,Z,z){nZ[tZ++]=C6,nZ[tZ++]=T6,nZ[tZ++]=b7,b7=G;var J=C6;G=T6;var Y=32-vZ(J)-1;J&=~(1<<Y),z+=1;var B=32-vZ(Z)+Y;if(30<B){var H=Y-Y%5;B=(J&(1<<H)-1).toString(32),J>>=H,Y-=H,C6=1<<32-vZ(Z)+Y|z<<Y|J,T6=B+G}else C6=1<<B|z<<Y|J,T6=G}function ZX(G){G.return!==null&&(p6(G,1),pQ(G,1,0))}function zX(G){for(;G===IY;)IY=zJ[--JJ],zJ[JJ]=null,h8=zJ[--JJ],zJ[JJ]=null;for(;G===b7;)b7=nZ[--tZ],nZ[tZ]=null,T6=nZ[--tZ],nZ[tZ]=null,C6=nZ[--tZ],nZ[tZ]=null}function iQ(G,Z){nZ[tZ++]=C6,nZ[tZ++]=T6,nZ[tZ++]=b7,C6=Z.id,T6=Z.overflow,b7=G}var qZ=null,NG=null,i0=!1,N7=null,Z6=!1,HH=Error(h(519));function E7(G){var Z=Error(h(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw y8(G6(Z,G)),HH}function Jj(G){var{stateNode:Z,type:z,memoizedProps:J}=G;switch(Z[XZ]=G,Z[CZ]=J,z){case"dialog":m0("cancel",Z),m0("close",Z);break;case"iframe":case"object":case"embed":m0("load",Z);break;case"video":case"audio":for(z=0;z<m8.length;z++)m0(m8[z],Z);break;case"source":m0("error",Z);break;case"img":case"image":case"link":m0("error",Z),m0("load",Z);break;case"details":m0("toggle",Z);break;case"input":m0("invalid",Z),DQ(Z,J.value,J.defaultValue,J.checked,J.defaultChecked,J.type,J.name,!0);break;case"select":m0("invalid",Z);break;case"textarea":m0("invalid",Z),IQ(Z,J.value,J.defaultValue,J.children)}z=J.children,typeof z!=="string"&&typeof z!=="number"&&typeof z!=="bigint"||Z.textContent===""+z||J.suppressHydrationWarning===!0||CL(Z.textContent,z)?(J.popover!=null&&(m0("beforetoggle",Z),m0("toggle",Z)),J.onScroll!=null&&m0("scroll",Z),J.onScrollEnd!=null&&m0("scrollend",Z),J.onClick!=null&&(Z.onclick=r6),Z=!0):Z=!1,Z||E7(G,!0)}function Yj(G){for(qZ=G.return;qZ;)switch(qZ.tag){case 5:case 31:case 13:Z6=!1;return;case 27:case 3:Z6=!0;return;default:qZ=qZ.return}}function dz(G){if(G!==qZ)return!1;if(!i0)return Yj(G),i0=!0,!1;var Z=G.tag,z;if(z=Z!==3&&Z!==27){if(z=Z===5)z=G.type,z=!(z!=="form"&&z!=="button")||kH(G.type,G.memoizedProps);z=!z}if(z&&NG&&E7(G),Yj(G),Z===13){if(G=G.memoizedState,G=G!==null?G.dehydrated:null,!G)throw Error(h(317));NG=lj(G)}else if(Z===31){if(G=G.memoizedState,G=G!==null?G.dehydrated:null,!G)throw Error(h(317));NG=lj(G)}else Z===27?(Z=NG,v7(G.type)?(G=yH,yH=null,NG=G):NG=Z):NG=qZ?J6(G.stateNode.nextSibling):null;return!0}function Qz(){NG=qZ=null,i0=!1}function KB(){var G=N7;return G!==null&&(NZ===null?NZ=G:NZ.push.apply(NZ,G),N7=null),G}function y8(G){N7===null?N7=[G]:N7.push(G)}var XH=P6(null),Rz=null,o6=null;function F7(G,Z,z){KG(XH,Z._currentValue),Z._currentValue=z}function n6(G){G._currentValue=XH.current,YZ(XH)}function qH(G,Z,z){for(;G!==null;){var J=G.alternate;if((G.childLanes&Z)!==Z?(G.childLanes|=Z,J!==null&&(J.childLanes|=Z)):J!==null&&(J.childLanes&Z)!==Z&&(J.childLanes|=Z),G===z)break;G=G.return}}function WH(G,Z,z,J){var Y=G.child;Y!==null&&(Y.return=G);for(;Y!==null;){var B=Y.dependencies;if(B!==null){var H=Y.child;B=B.firstContext;G:for(;B!==null;){var X=B;B=Y;for(var q=0;q<Z.length;q++)if(X.context===Z[q]){B.lanes|=z,X=B.alternate,X!==null&&(X.lanes|=z),qH(B.return,z,G),J||(H=null);break G}B=X.next}}else if(Y.tag===18){if(H=Y.return,H===null)throw Error(h(341));H.lanes|=z,B=H.alternate,B!==null&&(B.lanes|=z),qH(H,z,G),H=null}else H=Y.child;if(H!==null)H.return=Y;else for(H=Y;H!==null;){if(H===G){H=null;break}if(Y=H.sibling,Y!==null){Y.return=H.return,H=Y;break}H=H.return}Y=H}}function fJ(G,Z,z,J){G=null;for(var Y=Z,B=!1;Y!==null;){if(!B){if((Y.flags&524288)!==0)B=!0;else if((Y.flags&262144)!==0)break}if(Y.tag===10){var H=Y.alternate;if(H===null)throw Error(h(387));if(H=H.memoizedProps,H!==null){var X=Y.type;mZ(Y.pendingProps.value,H.value)||(G!==null?G.push(X):G=[X])}}else if(Y===MY.current){if(H=Y.alternate,H===null)throw Error(h(387));H.memoizedState.memoizedState!==Y.memoizedState.memoizedState&&(G!==null?G.push(c8):G=[c8])}Y=Y.return}G!==null&&WH(Z,G,z,J),Z.flags|=262144}function fY(G){for(G=G.firstContext;G!==null;){if(!mZ(G.context._currentValue,G.memoizedValue))return!0;G=G.next}return!1}function Uz(G){Rz=G,o6=null,G=G.dependencies,G!==null&&(G.firstContext=null)}function WZ(G){return sQ(Rz,G)}function s9(G,Z){return Rz===null&&Uz(G),sQ(G,Z)}function sQ(G,Z){var z=Z._currentValue;if(Z={context:Z,memoizedValue:z,next:null},o6===null){if(G===null)throw Error(h(308));o6=Z,G.dependencies={lanes:0,firstContext:Z},G.flags|=524288}else o6=o6.next=Z;return z}var dF=typeof AbortController<"u"?AbortController:function(){var G=[],Z=this.signal={aborted:!1,addEventListener:function(z,J){G.push(J)}};this.abort=function(){Z.aborted=!0,G.forEach(function(z){return z()})}},cF=GZ.unstable_scheduleCallback,lF=GZ.unstable_NormalPriority,oG={$$typeof:s6,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function JX(){return{controller:new dF,data:new Map,refCount:0}}function t8(G){G.refCount--,G.refCount===0&&cF(lF,function(){G.controller.abort()})}var D8=null,jH=0,AJ=0,qJ=null;function pF(G,Z){if(D8===null){var z=D8=[];jH=0,AJ=CX(),qJ={status:"pending",value:void 0,then:function(J){z.push(J)}}}return jH++,Z.then(Bj,Bj),Z}function Bj(){if(--jH===0&&D8!==null){qJ!==null&&(qJ.status="fulfilled");var G=D8;D8=null,AJ=0,qJ=null;for(var Z=0;Z<G.length;Z++)(0,G[Z])()}}function iF(G,Z){var z=[],J={status:"pending",value:null,reason:null,then:function(Y){z.push(Y)}};return G.then(function(){J.status="fulfilled",J.value=Z;for(var Y=0;Y<z.length;Y++)(0,z[Y])(Z)},function(Y){J.status="rejected",J.reason=Y;for(Y=0;Y<z.length;Y++)(0,z[Y])(void 0)}),J}var Hj=K0.S;K0.S=function(G,Z){XL=yZ(),typeof Z==="object"&&Z!==null&&typeof Z.then==="function"&&pF(G,Z),Hj!==null&&Hj(G,Z)};var qz=P6(null);function YX(){var G=qz.current;return G!==null?G:RG.pooledCache}function XY(G,Z){Z===null?KG(qz,qz.current):KG(qz,Z.pool)}function rQ(){var G=YX();return G===null?null:{parent:oG._currentValue,pool:G}}var NJ=Error(h(460)),BX=Error(h(474)),tY=Error(h(542)),NY={then:function(){}};function Xj(G){return G=G.status,G==="fulfilled"||G==="rejected"}function oQ(G,Z,z){switch(z=G[z],z===void 0?G.push(Z):z!==Z&&(Z.then(r6,r6),Z=z),Z.status){case"fulfilled":return Z.value;case"rejected":throw G=Z.reason,Wj(G),G;default:if(typeof Z.status==="string")Z.then(r6,r6);else{if(G=RG,G!==null&&100<G.shellSuspendCounter)throw Error(h(482));G=Z,G.status="pending",G.then(function(J){if(Z.status==="pending"){var Y=Z;Y.status="fulfilled",Y.value=J}},function(J){if(Z.status==="pending"){var Y=Z;Y.status="rejected",Y.reason=J}})}switch(Z.status){case"fulfilled":return Z.value;case"rejected":throw G=Z.reason,Wj(G),G}throw Wz=Z,NJ}}function Yz(G){try{var Z=G._init;return Z(G._payload)}catch(z){if(z!==null&&typeof z==="object"&&typeof z.then==="function")throw Wz=z,NJ;throw z}}var Wz=null;function qj(){if(Wz===null)throw Error(h(459));var G=Wz;return Wz=null,G}function Wj(G){if(G===NJ||G===tY)throw Error(h(483))}var WJ=null,g8=0;function r9(G){var Z=g8;return g8+=1,WJ===null&&(WJ=[]),oQ(WJ,G,Z)}function H8(G,Z){Z=Z.props.ref,G.ref=Z!==void 0?Z:null}function o9(G,Z){if(Z.$$typeof===P2)throw Error(h(525));throw G=Object.prototype.toString.call(Z),Error(h(31,G==="[object Object]"?"object with keys {"+Object.keys(Z).join(", ")+"}":G))}function aQ(G){function Z(_,O){if(G){var K=_.deletions;K===null?(_.deletions=[O],_.flags|=16):K.push(O)}}function z(_,O){if(!G)return null;for(;O!==null;)Z(_,O),O=O.sibling;return null}function J(_){for(var O=new Map;_!==null;)_.key!==null?O.set(_.key,_):O.set(_.index,_),_=_.sibling;return O}function Y(_,O){return _=a6(_,O),_.index=0,_.sibling=null,_}function B(_,O,K){if(_.index=K,!G)return _.flags|=1048576,O;if(K=_.alternate,K!==null)return K=K.index,K<O?(_.flags|=67108866,O):K;return _.flags|=67108866,O}function H(_){return G&&_.alternate===null&&(_.flags|=67108866),_}function X(_,O,K,$){if(O===null||O.tag!==6)return O=wB(K,_.mode,$),O.return=_,O;return O=Y(O,K),O.return=_,O}function q(_,O,K,$){var p=K.type;if(p===sz)return U(_,O,K.props.children,$,K.key);if(O!==null&&(O.elementType===p||typeof p==="object"&&p!==null&&p.$$typeof===_7&&Yz(p)===O.type))return O=Y(O,K.props),H8(O,K),O.return=_,O;return O=HY(K.type,K.key,K.props,null,_.mode,$),H8(O,K),O.return=_,O}function A(_,O,K,$){if(O===null||O.tag!==4||O.stateNode.containerInfo!==K.containerInfo||O.stateNode.implementation!==K.implementation)return O=DB(K,_.mode,$),O.return=_,O;return O=Y(O,K.children||[]),O.return=_,O}function U(_,O,K,$,p){if(O===null||O.tag!==7)return O=Xz(K,_.mode,$,p),O.return=_,O;return O=Y(O,K),O.return=_,O}function V(_,O,K){if(typeof O==="string"&&O!==""||typeof O==="number"||typeof O==="bigint")return O=wB(""+O,_.mode,K),O.return=_,O;if(typeof O==="object"&&O!==null){switch(O.$$typeof){case m9:return K=HY(O.type,O.key,O.props,null,_.mode,K),H8(K,O),K.return=_,K;case j8:return O=DB(O,_.mode,K),O.return=_,O;case _7:return O=Yz(O),V(_,O,K)}if(Q8(O)||Y8(O))return O=Xz(O,_.mode,K,null),O.return=_,O;if(typeof O.then==="function")return V(_,r9(O),K);if(O.$$typeof===s6)return V(_,s9(_,O),K);o9(_,O)}return null}function L(_,O,K,$){var p=O!==null?O.key:null;if(typeof K==="string"&&K!==""||typeof K==="number"||typeof K==="bigint")return p!==null?null:X(_,O,""+K,$);if(typeof K==="object"&&K!==null){switch(K.$$typeof){case m9:return K.key===p?q(_,O,K,$):null;case j8:return K.key===p?A(_,O,K,$):null;case _7:return K=Yz(K),L(_,O,K,$)}if(Q8(K)||Y8(K))return p!==null?null:U(_,O,K,$,null);if(typeof K.then==="function")return L(_,O,r9(K),$);if(K.$$typeof===s6)return L(_,O,s9(_,K),$);o9(_,K)}return null}function D(_,O,K,$,p){if(typeof $==="string"&&$!==""||typeof $==="number"||typeof $==="bigint")return _=_.get(K)||null,X(O,_,""+$,p);if(typeof $==="object"&&$!==null){switch($.$$typeof){case m9:return _=_.get($.key===null?K:$.key)||null,q(O,_,$,p);case j8:return _=_.get($.key===null?K:$.key)||null,A(O,_,$,p);case _7:return $=Yz($),D(_,O,K,$,p)}if(Q8($)||Y8($))return _=_.get(K)||null,U(O,_,$,p,null);if(typeof $.then==="function")return D(_,O,K,r9($),p);if($.$$typeof===s6)return D(_,O,K,s9(O,$),p);o9(O,$)}return null}function f(_,O,K,$){for(var p=null,Y0=null,k=O,a=O=0,G0=null;k!==null&&a<K.length;a++){k.index>a?(G0=k,k=null):G0=k.sibling;var n=L(_,k,K[a],$);if(n===null){k===null&&(k=G0);break}G&&k&&n.alternate===null&&Z(_,k),O=B(n,O,a),Y0===null?p=n:Y0.sibling=n,Y0=n,k=G0}if(a===K.length)return z(_,k),i0&&p6(_,a),p;if(k===null){for(;a<K.length;a++)k=V(_,K[a],$),k!==null&&(O=B(k,O,a),Y0===null?p=k:Y0.sibling=k,Y0=k);return i0&&p6(_,a),p}for(k=J(k);a<K.length;a++)G0=D(k,_,a,K[a],$),G0!==null&&(G&&G0.alternate!==null&&k.delete(G0.key===null?a:G0.key),O=B(G0,O,a),Y0===null?p=G0:Y0.sibling=G0,Y0=G0);return G&&k.forEach(function(_0){return Z(_,_0)}),i0&&p6(_,a),p}function x(_,O,K,$){if(K==null)throw Error(h(151));for(var p=null,Y0=null,k=O,a=O=0,G0=null,n=K.next();k!==null&&!n.done;a++,n=K.next()){k.index>a?(G0=k,k=null):G0=k.sibling;var _0=L(_,k,n.value,$);if(_0===null){k===null&&(k=G0);break}G&&k&&_0.alternate===null&&Z(_,k),O=B(_0,O,a),Y0===null?p=_0:Y0.sibling=_0,Y0=_0,k=G0}if(n.done)return z(_,k),i0&&p6(_,a),p;if(k===null){for(;!n.done;a++,n=K.next())n=V(_,n.value,$),n!==null&&(O=B(n,O,a),Y0===null?p=n:Y0.sibling=n,Y0=n);return i0&&p6(_,a),p}for(k=J(k);!n.done;a++,n=K.next())n=D(k,_,a,n.value,$),n!==null&&(G&&n.alternate!==null&&k.delete(n.key===null?a:n.key),O=B(n,O,a),Y0===null?p=n:Y0.sibling=n,Y0=n);return G&&k.forEach(function(GG){return Z(_,GG)}),i0&&p6(_,a),p}function T(_,O,K,$){if(typeof K==="object"&&K!==null&&K.type===sz&&K.key===null&&(K=K.props.children),typeof K==="object"&&K!==null){switch(K.$$typeof){case m9:G:{for(var p=K.key;O!==null;){if(O.key===p){if(p=K.type,p===sz){if(O.tag===7){z(_,O.sibling),$=Y(O,K.props.children),$.return=_,_=$;break G}}else if(O.elementType===p||typeof p==="object"&&p!==null&&p.$$typeof===_7&&Yz(p)===O.type){z(_,O.sibling),$=Y(O,K.props),H8($,K),$.return=_,_=$;break G}z(_,O);break}else Z(_,O);O=O.sibling}K.type===sz?($=Xz(K.props.children,_.mode,$,K.key),$.return=_,_=$):($=HY(K.type,K.key,K.props,null,_.mode,$),H8($,K),$.return=_,_=$)}return H(_);case j8:G:{for(p=K.key;O!==null;){if(O.key===p)if(O.tag===4&&O.stateNode.containerInfo===K.containerInfo&&O.stateNode.implementation===K.implementation){z(_,O.sibling),$=Y(O,K.children||[]),$.return=_,_=$;break G}else{z(_,O);break}else Z(_,O);O=O.sibling}$=DB(K,_.mode,$),$.return=_,_=$}return H(_);case _7:return K=Yz(K),T(_,O,K,$)}if(Q8(K))return f(_,O,K,$);if(Y8(K)){if(p=Y8(K),typeof p!=="function")throw Error(h(150));return K=p.call(K),x(_,O,K,$)}if(typeof K.then==="function")return T(_,O,r9(K),$);if(K.$$typeof===s6)return T(_,O,s9(_,K),$);o9(_,K)}return typeof K==="string"&&K!==""||typeof K==="number"||typeof K==="bigint"?(K=""+K,O!==null&&O.tag===6?(z(_,O.sibling),$=Y(O,K),$.return=_,_=$):(z(_,O),$=wB(K,_.mode,$),$.return=_,_=$),H(_)):z(_,O)}return function(_,O,K,$){try{g8=0;var p=T(_,O,K,$);return WJ=null,p}catch(k){if(k===NJ||k===tY)throw k;var Y0=EZ(29,k,null,_.mode);return Y0.lanes=$,Y0.return=_,Y0}finally{}}}var Lz=aQ(!0),nQ=aQ(!1),A7=!1;function HX(G){G.updateQueue={baseState:G.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function QH(G,Z){G=G.updateQueue,Z.updateQueue===G&&(Z.updateQueue={baseState:G.baseState,firstBaseUpdate:G.firstBaseUpdate,lastBaseUpdate:G.lastBaseUpdate,shared:G.shared,callbacks:null})}function $7(G){return{lane:G,tag:0,payload:null,callback:null,next:null}}function C7(G,Z,z){var J=G.updateQueue;if(J===null)return null;if(J=J.shared,(YG&2)!==0){var Y=J.pending;return Y===null?Z.next=Z:(Z.next=Y.next,Y.next=Z),J.pending=Z,Z=KY(G),dQ(G,null,z),Z}return nY(G,J,Z,z),KY(G)}function K8(G,Z,z){if(Z=Z.updateQueue,Z!==null&&(Z=Z.shared,(z&4194048)!==0)){var J=Z.lanes;J&=G.pendingLanes,z|=J,Z.lanes=z,AQ(G,z)}}function IB(G,Z){var{updateQueue:z,alternate:J}=G;if(J!==null&&(J=J.updateQueue,z===J)){var Y=null,B=null;if(z=z.firstBaseUpdate,z!==null){do{var H={lane:z.lane,tag:z.tag,payload:z.payload,callback:null,next:null};B===null?Y=B=H:B=B.next=H,z=z.next}while(z!==null);B===null?Y=B=Z:B=B.next=Z}else Y=B=Z;z={baseState:J.baseState,firstBaseUpdate:Y,lastBaseUpdate:B,shared:J.shared,callbacks:J.callbacks},G.updateQueue=z;return}G=z.lastBaseUpdate,G===null?z.firstBaseUpdate=Z:G.next=Z,z.lastBaseUpdate=Z}var UH=!1;function I8(){if(UH){var G=qJ;if(G!==null)throw G}}function f8(G,Z,z,J){UH=!1;var Y=G.updateQueue;A7=!1;var{firstBaseUpdate:B,lastBaseUpdate:H}=Y,X=Y.shared.pending;if(X!==null){Y.shared.pending=null;var q=X,A=q.next;q.next=null,H===null?B=A:H.next=A,H=q;var U=G.alternate;U!==null&&(U=U.updateQueue,X=U.lastBaseUpdate,X!==H&&(X===null?U.firstBaseUpdate=A:X.next=A,U.lastBaseUpdate=q))}if(B!==null){var V=Y.baseState;H=0,U=A=q=null,X=B;do{var L=X.lane&-536870913,D=L!==X.lane;if(D?(p0&L)===L:(J&L)===L){L!==0&&L===AJ&&(UH=!0),U!==null&&(U=U.next={lane:0,tag:X.tag,payload:X.payload,callback:null,next:null});G:{var f=G,x=X;L=Z;var T=z;switch(x.tag){case 1:if(f=x.payload,typeof f==="function"){V=f.call(T,V,L);break G}V=f;break G;case 3:f.flags=f.flags&-65537|128;case 0:if(f=x.payload,L=typeof f==="function"?f.call(T,V,L):f,L===null||L===void 0)break G;V=$G({},V,L);break G;case 2:A7=!0}}L=X.callback,L!==null&&(G.flags|=64,D&&(G.flags|=8192),D=Y.callbacks,D===null?Y.callbacks=[L]:D.push(L))}else D={lane:L,tag:X.tag,payload:X.payload,callback:X.callback,next:null},U===null?(A=U=D,q=V):U=U.next=D,H|=L;if(X=X.next,X===null)if(X=Y.shared.pending,X===null)break;else D=X,X=D.next,D.next=null,Y.lastBaseUpdate=D,Y.shared.pending=null}while(1);U===null&&(q=V),Y.baseState=q,Y.firstBaseUpdate=A,Y.lastBaseUpdate=U,B===null&&(Y.shared.lanes=0),y7|=H,G.lanes=H,G.memoizedState=V}}function tQ(G,Z){if(typeof G!=="function")throw Error(h(191,G));G.call(Z)}function eQ(G,Z){var z=G.callbacks;if(z!==null)for(G.callbacks=null,G=0;G<z.length;G++)tQ(z[G],Z)}var FJ=P6(null),$Y=P6(0);function jj(G,Z){G=J7,KG($Y,G),KG(FJ,Z),J7=G|Z.baseLanes}function LH(){KG($Y,J7),KG(FJ,FJ.current)}function XX(){J7=$Y.current,YZ(FJ),YZ($Y)}var dZ=P6(null),z6=null;function M7(G){var Z=G.alternate;KG(cG,cG.current&1),KG(dZ,G),z6===null&&(Z===null||FJ.current!==null?z6=G:Z.memoizedState!==null&&(z6=G))}function _H(G){KG(cG,cG.current),KG(dZ,G),z6===null&&(z6=G)}function GU(G){G.tag===22?(KG(cG,cG.current),KG(dZ,G),z6===null&&(z6=G)):O7(G)}function O7(){KG(cG,cG.current),KG(dZ,dZ.current)}function bZ(G){YZ(dZ),z6===G&&(z6=null),YZ(cG)}var cG=P6(0);function CY(G){for(var Z=G;Z!==null;){if(Z.tag===13){var z=Z.memoizedState;if(z!==null&&(z=z.dehydrated,z===null||EH(z)||hH(z)))return Z}else if(Z.tag===19&&(Z.memoizedProps.revealOrder==="forwards"||Z.memoizedProps.revealOrder==="backwards"||Z.memoizedProps.revealOrder==="unstable_legacy-backwards"||Z.memoizedProps.revealOrder==="together")){if((Z.flags&128)!==0)return Z}else if(Z.child!==null){Z.child.return=Z,Z=Z.child;continue}if(Z===G)break;for(;Z.sibling===null;){if(Z.return===null||Z.return===G)return null;Z=Z.return}Z.sibling.return=Z.return,Z=Z.sibling}return null}var G7=0,k0=null,MG=null,sG=null,TY=!1,jJ=!1,_z=!1,SY=0,v8=0,QJ=null,sF=0;function yG(){throw Error(h(321))}function qX(G,Z){if(Z===null)return!1;for(var z=0;z<Z.length&&z<G.length;z++)if(!mZ(G[z],Z[z]))return!1;return!0}function WX(G,Z,z,J,Y,B){return G7=B,k0=Z,Z.memoizedState=null,Z.updateQueue=null,Z.lanes=0,K0.H=G===null||G.memoizedState===null?xU:RX,_z=!1,B=z(J,Y),_z=!1,jJ&&(B=zU(Z,z,J,Y)),ZU(G),B}function ZU(G){K0.H=u8;var Z=MG!==null&&MG.next!==null;if(G7=0,sG=MG=k0=null,TY=!1,v8=0,QJ=null,Z)throw Error(h(300));G===null||aG||(G=G.dependencies,G!==null&&fY(G)&&(aG=!0))}function zU(G,Z,z,J){k0=G;var Y=0;do{if(jJ&&(QJ=null),v8=0,jJ=!1,25<=Y)throw Error(h(301));if(Y+=1,sG=MG=null,G.updateQueue!=null){var B=G.updateQueue;B.lastEffect=null,B.events=null,B.stores=null,B.memoCache!=null&&(B.memoCache.index=0)}K0.H=PU,B=Z(z,J)}while(jJ);return B}function rF(){var G=K0.H,Z=G.useState()[0];return Z=typeof Z.then==="function"?e8(Z):Z,G=G.useState()[0],(MG!==null?MG.memoizedState:null)!==G&&(k0.flags|=1024),Z}function jX(){var G=SY!==0;return SY=0,G}function QX(G,Z,z){Z.updateQueue=G.updateQueue,Z.flags&=-2053,G.lanes&=~z}function UX(G){if(TY){for(G=G.memoizedState;G!==null;){var Z=G.queue;Z!==null&&(Z.pending=null),G=G.next}TY=!1}G7=0,sG=MG=k0=null,jJ=!1,v8=SY=0,QJ=null}function VZ(){var G={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sG===null?k0.memoizedState=sG=G:sG=sG.next=G,sG}function lG(){if(MG===null){var G=k0.alternate;G=G!==null?G.memoizedState:null}else G=MG.next;var Z=sG===null?k0.memoizedState:sG.next;if(Z!==null)sG=Z,MG=G;else{if(G===null){if(k0.alternate===null)throw Error(h(467));throw Error(h(310))}MG=G,G={memoizedState:MG.memoizedState,baseState:MG.baseState,baseQueue:MG.baseQueue,queue:MG.queue,next:null},sG===null?k0.memoizedState=sG=G:sG=sG.next=G}return sG}function eY(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function e8(G){var Z=v8;return v8+=1,QJ===null&&(QJ=[]),G=oQ(QJ,G,Z),Z=k0,(sG===null?Z.memoizedState:sG.next)===null&&(Z=Z.alternate,K0.H=Z===null||Z.memoizedState===null?xU:RX),G}function G4(G){if(G!==null&&typeof G==="object"){if(typeof G.then==="function")return e8(G);if(G.$$typeof===s6)return WZ(G)}throw Error(h(438,String(G)))}function LX(G){var Z=null,z=k0.updateQueue;if(z!==null&&(Z=z.memoCache),Z==null){var J=k0.alternate;J!==null&&(J=J.updateQueue,J!==null&&(J=J.memoCache,J!=null&&(Z={data:J.data.map(function(Y){return Y.slice()}),index:0})))}if(Z==null&&(Z={data:[],index:0}),z===null&&(z=eY(),k0.updateQueue=z),z.memoCache=Z,z=Z.data[Z.index],z===void 0)for(z=Z.data[Z.index]=Array(G),J=0;J<G;J++)z[J]=k2;return Z.index++,z}function Z7(G,Z){return typeof Z==="function"?Z(G):Z}function qY(G){var Z=lG();return _X(Z,MG,G)}function _X(G,Z,z){var J=G.queue;if(J===null)throw Error(h(311));J.lastRenderedReducer=z;var Y=G.baseQueue,B=J.pending;if(B!==null){if(Y!==null){var H=Y.next;Y.next=B.next,B.next=H}Z.baseQueue=Y=B,J.pending=null}if(B=G.baseState,Y===null)G.memoizedState=B;else{Z=Y.next;var X=H=null,q=null,A=Z,U=!1;do{var V=A.lane&-536870913;if(V!==A.lane?(p0&V)===V:(G7&V)===V){var L=A.revertLane;if(L===0)q!==null&&(q=q.next={lane:0,revertLane:0,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),V===AJ&&(U=!0);else if((G7&L)===L){A=A.next,L===AJ&&(U=!0);continue}else V={lane:0,revertLane:A.revertLane,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},q===null?(X=q=V,H=B):q=q.next=V,k0.lanes|=L,y7|=L;V=A.action,_z&&z(B,V),B=A.hasEagerState?A.eagerState:z(B,V)}else L={lane:V,revertLane:A.revertLane,gesture:A.gesture,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},q===null?(X=q=L,H=B):q=q.next=L,k0.lanes|=V,y7|=V;A=A.next}while(A!==null&&A!==Z);if(q===null?H=B:q.next=X,!mZ(B,G.memoizedState)&&(aG=!0,U&&(z=qJ,z!==null)))throw z;G.memoizedState=B,G.baseState=H,G.baseQueue=q,J.lastRenderedState=B}return Y===null&&(J.lanes=0),[G.memoizedState,J.dispatch]}function fB(G){var Z=lG(),z=Z.queue;if(z===null)throw Error(h(311));z.lastRenderedReducer=G;var{dispatch:J,pending:Y}=z,B=Z.memoizedState;if(Y!==null){z.pending=null;var H=Y=Y.next;do B=G(B,H.action),H=H.next;while(H!==Y);mZ(B,Z.memoizedState)||(aG=!0),Z.memoizedState=B,Z.baseQueue===null&&(Z.baseState=B),z.lastRenderedState=B}return[B,J]}function JU(G,Z,z){var J=k0,Y=lG(),B=i0;if(B){if(z===void 0)throw Error(h(407));z=z()}else z=Z();var H=!mZ((MG||Y).memoizedState,z);if(H&&(Y.memoizedState=z,aG=!0),Y=Y.queue,AX(HU.bind(null,J,Y,G),[G]),Y.getSnapshot!==Z||H||sG!==null&&sG.memoizedState.tag&1){if(J.flags|=2048,MJ(9,{destroy:void 0},BU.bind(null,J,Y,z,Z),null),RG===null)throw Error(h(349));B||(G7&127)!==0||YU(J,Z,z)}return z}function YU(G,Z,z){G.flags|=16384,G={getSnapshot:Z,value:z},Z=k0.updateQueue,Z===null?(Z=eY(),k0.updateQueue=Z,Z.stores=[G]):(z=Z.stores,z===null?Z.stores=[G]:z.push(G))}function BU(G,Z,z,J){Z.value=z,Z.getSnapshot=J,XU(Z)&&qU(G)}function HU(G,Z,z){return z(function(){XU(Z)&&qU(G)})}function XU(G){var Z=G.getSnapshot;G=G.value;try{var z=Z();return!mZ(G,z)}catch(J){return!0}}function qU(G){var Z=Vz(G,2);Z!==null&&$Z(Z,G,2)}function AH(G){var Z=VZ();if(typeof G==="function"){var z=G;if(G=z(),_z){R7(!0);try{z()}finally{R7(!1)}}}return Z.memoizedState=Z.baseState=G,Z.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Z7,lastRenderedState:G},Z}function WU(G,Z,z,J){return G.baseState=z,_X(G,MG,typeof J==="function"?J:Z7)}function oF(G,Z,z,J,Y){if(z4(G))throw Error(h(485));if(G=Z.action,G!==null){var B={payload:Y,action:G,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(H){B.listeners.push(H)}};K0.T!==null?z(!0):B.isTransition=!1,J(B),z=Z.pending,z===null?(B.next=Z.pending=B,jU(Z,B)):(B.next=z.next,Z.pending=z.next=B)}}function jU(G,Z){var{action:z,payload:J}=Z,Y=G.state;if(Z.isTransition){var B=K0.T,H={};K0.T=H;try{var X=z(Y,J),q=K0.S;q!==null&&q(H,X),Qj(G,Z,X)}catch(A){FH(G,Z,A)}finally{B!==null&&H.types!==null&&(B.types=H.types),K0.T=B}}else try{B=z(Y,J),Qj(G,Z,B)}catch(A){FH(G,Z,A)}}function Qj(G,Z,z){z!==null&&typeof z==="object"&&typeof z.then==="function"?z.then(function(J){Uj(G,Z,J)},function(J){return FH(G,Z,J)}):Uj(G,Z,z)}function Uj(G,Z,z){Z.status="fulfilled",Z.value=z,QU(Z),G.state=z,Z=G.pending,Z!==null&&(z=Z.next,z===Z?G.pending=null:(z=z.next,Z.next=z,jU(G,z)))}function FH(G,Z,z){var J=G.pending;if(G.pending=null,J!==null){J=J.next;do Z.status="rejected",Z.reason=z,QU(Z),Z=Z.next;while(Z!==J)}G.action=null}function QU(G){G=G.listeners;for(var Z=0;Z<G.length;Z++)(0,G[Z])()}function UU(G,Z){return Z}function Lj(G,Z){if(i0){var z=RG.formState;if(z!==null){G:{var J=k0;if(i0){if(NG){Z:{var Y=NG;for(var B=Z6;Y.nodeType!==8;){if(!B){Y=null;break Z}if(Y=J6(Y.nextSibling),Y===null){Y=null;break Z}}B=Y.data,Y=B==="F!"||B==="F"?Y:null}if(Y){NG=J6(Y.nextSibling),J=Y.data==="F!";break G}}E7(J)}J=!1}J&&(Z=z[0])}}return z=VZ(),z.memoizedState=z.baseState=Z,J={pending:null,lanes:0,dispatch:null,lastRenderedReducer:UU,lastRenderedState:Z},z.queue=J,z=CU.bind(null,k0,J),J.dispatch=z,J=AH(!1),B=VX.bind(null,k0,!1,J.queue),J=VZ(),Y={state:Z,dispatch:null,action:G,pending:null},J.queue=Y,z=oF.bind(null,k0,Y,B,z),Y.dispatch=z,J.memoizedState=G,[Z,z,!1]}function _j(G){var Z=lG();return LU(Z,MG,G)}function LU(G,Z,z){if(Z=_X(G,Z,UU)[0],G=qY(Z7)[0],typeof Z==="object"&&Z!==null&&typeof Z.then==="function")try{var J=e8(Z)}catch(H){if(H===NJ)throw tY;throw H}else J=Z;Z=lG();var Y=Z.queue,B=Y.dispatch;return z!==Z.memoizedState&&(k0.flags|=2048,MJ(9,{destroy:void 0},aF.bind(null,Y,z),null)),[J,B,G]}function aF(G,Z){G.action=Z}function Aj(G){var Z=lG(),z=MG;if(z!==null)return LU(Z,z,G);lG(),Z=Z.memoizedState,z=lG();var J=z.queue.dispatch;return z.memoizedState=G,[Z,J,!1]}function MJ(G,Z,z,J){return G={tag:G,create:z,deps:J,inst:Z,next:null},Z=k0.updateQueue,Z===null&&(Z=eY(),k0.updateQueue=Z),z=Z.lastEffect,z===null?Z.lastEffect=G.next=G:(J=z.next,z.next=G,G.next=J,Z.lastEffect=G),G}function _U(){return lG().memoizedState}function WY(G,Z,z,J){var Y=VZ();k0.flags|=G,Y.memoizedState=MJ(1|Z,{destroy:void 0},z,J===void 0?null:J)}function Z4(G,Z,z,J){var Y=lG();J=J===void 0?null:J;var B=Y.memoizedState.inst;MG!==null&&J!==null&&qX(J,MG.memoizedState.deps)?Y.memoizedState=MJ(Z,B,z,J):(k0.flags|=G,Y.memoizedState=MJ(1|Z,B,z,J))}function Fj(G,Z){WY(8390656,8,G,Z)}function AX(G,Z){Z4(2048,8,G,Z)}function nF(G){k0.flags|=4;var Z=k0.updateQueue;if(Z===null)Z=eY(),k0.updateQueue=Z,Z.events=[G];else{var z=Z.events;z===null?Z.events=[G]:z.push(G)}}function AU(G){var Z=lG().memoizedState;return nF({ref:Z,nextImpl:G}),function(){if((YG&2)!==0)throw Error(h(440));return Z.impl.apply(void 0,arguments)}}function FU(G,Z){return Z4(4,2,G,Z)}function MU(G,Z){return Z4(4,4,G,Z)}function OU(G,Z){if(typeof Z==="function"){G=G();var z=Z(G);return function(){typeof z==="function"?z():Z(null)}}if(Z!==null&&Z!==void 0)return G=G(),Z.current=G,function(){Z.current=null}}function VU(G,Z,z){z=z!==null&&z!==void 0?z.concat([G]):null,Z4(4,4,OU.bind(null,Z,G),z)}function FX(){}function RU(G,Z){var z=lG();Z=Z===void 0?null:Z;var J=z.memoizedState;if(Z!==null&&qX(Z,J[1]))return J[0];return z.memoizedState=[G,Z],G}function wU(G,Z){var z=lG();Z=Z===void 0?null:Z;var J=z.memoizedState;if(Z!==null&&qX(Z,J[1]))return J[0];if(J=G(),_z){R7(!0);try{G()}finally{R7(!1)}}return z.memoizedState=[J,Z],J}function MX(G,Z,z){if(z===void 0||(G7&1073741824)!==0&&(p0&261930)===0)return G.memoizedState=Z;return G.memoizedState=z,G=WL(),k0.lanes|=G,y7|=G,z}function DU(G,Z,z,J){if(mZ(z,Z))return z;if(FJ.current!==null)return G=MX(G,z,J),mZ(G,Z)||(aG=!0),G;if((G7&42)===0||(G7&1073741824)!==0&&(p0&261930)===0)return aG=!0,G.memoizedState=z;return G=WL(),k0.lanes|=G,y7|=G,Z}function KU(G,Z,z,J,Y){var B=BG.p;BG.p=B!==0&&8>B?B:8;var H=K0.T,X={};K0.T=X,VX(G,!1,Z,z);try{var q=Y(),A=K0.S;if(A!==null&&A(X,q),q!==null&&typeof q==="object"&&typeof q.then==="function"){var U=iF(q,J);N8(G,Z,U,uZ(G))}else N8(G,Z,J,uZ(G))}catch(V){N8(G,Z,{then:function(){},status:"rejected",reason:V},uZ())}finally{BG.p=B,H!==null&&X.types!==null&&(H.types=X.types),K0.T=H}}function tF(){}function MH(G,Z,z,J){if(G.tag!==5)throw Error(h(476));var Y=IU(G).queue;KU(G,Y,Z,Hz,z===null?tF:function(){return fU(G),z(J)})}function IU(G){var Z=G.memoizedState;if(Z!==null)return Z;Z={memoizedState:Hz,baseState:Hz,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Z7,lastRenderedState:Hz},next:null};var z={};return Z.next={memoizedState:z,baseState:z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Z7,lastRenderedState:z},next:null},G.memoizedState=Z,G=G.alternate,G!==null&&(G.memoizedState=Z),Z}function fU(G){var Z=IU(G);Z.next===null&&(Z=G.alternate.memoizedState),N8(G,Z.next.queue,{},uZ())}function OX(){return WZ(c8)}function NU(){return lG().memoizedState}function $U(){return lG().memoizedState}function eF(G){for(var Z=G.return;Z!==null;){switch(Z.tag){case 24:case 3:var z=uZ();G=$7(z);var J=C7(Z,G,z);J!==null&&($Z(J,Z,z),K8(J,Z,z)),Z={cache:JX()},G.payload=Z;return}Z=Z.return}}function GM(G,Z,z){var J=uZ();z={lane:J,revertLane:0,gesture:null,action:z,hasEagerState:!1,eagerState:null,next:null},z4(G)?TU(Z,z):(z=eH(G,Z,z,J),z!==null&&($Z(z,G,J),SU(z,Z,J)))}function CU(G,Z,z){var J=uZ();N8(G,Z,z,J)}function N8(G,Z,z,J){var Y={lane:J,revertLane:0,gesture:null,action:z,hasEagerState:!1,eagerState:null,next:null};if(z4(G))TU(Z,Y);else{var B=G.alternate;if(G.lanes===0&&(B===null||B.lanes===0)&&(B=Z.lastRenderedReducer,B!==null))try{var H=Z.lastRenderedState,X=B(H,z);if(Y.hasEagerState=!0,Y.eagerState=X,mZ(X,H))return nY(G,Z,Y,0),RG===null&&aY(),!1}catch(q){}finally{}if(z=eH(G,Z,Y,J),z!==null)return $Z(z,G,J),SU(z,Z,J),!0}return!1}function VX(G,Z,z,J){if(J={lane:2,revertLane:CX(),gesture:null,action:J,hasEagerState:!1,eagerState:null,next:null},z4(G)){if(Z)throw Error(h(479))}else Z=eH(G,z,J,2),Z!==null&&$Z(Z,G,2)}function z4(G){var Z=G.alternate;return G===k0||Z!==null&&Z===k0}function TU(G,Z){jJ=TY=!0;var z=G.pending;z===null?Z.next=Z:(Z.next=z.next,z.next=Z),G.pending=Z}function SU(G,Z,z){if((z&4194048)!==0){var J=Z.lanes;J&=G.pendingLanes,z|=J,Z.lanes=z,AQ(G,z)}}var u8={readContext:WZ,use:G4,useCallback:yG,useContext:yG,useEffect:yG,useImperativeHandle:yG,useLayoutEffect:yG,useInsertionEffect:yG,useMemo:yG,useReducer:yG,useRef:yG,useState:yG,useDebugValue:yG,useDeferredValue:yG,useTransition:yG,useSyncExternalStore:yG,useId:yG,useHostTransitionStatus:yG,useFormState:yG,useActionState:yG,useOptimistic:yG,useMemoCache:yG,useCacheRefresh:yG};u8.useEffectEvent=yG;var xU={readContext:WZ,use:G4,useCallback:function(G,Z){return VZ().memoizedState=[G,Z===void 0?null:Z],G},useContext:WZ,useEffect:Fj,useImperativeHandle:function(G,Z,z){z=z!==null&&z!==void 0?z.concat([G]):null,WY(4194308,4,OU.bind(null,Z,G),z)},useLayoutEffect:function(G,Z){return WY(4194308,4,G,Z)},useInsertionEffect:function(G,Z){WY(4,2,G,Z)},useMemo:function(G,Z){var z=VZ();Z=Z===void 0?null:Z;var J=G();if(_z){R7(!0);try{G()}finally{R7(!1)}}return z.memoizedState=[J,Z],J},useReducer:function(G,Z,z){var J=VZ();if(z!==void 0){var Y=z(Z);if(_z){R7(!0);try{z(Z)}finally{R7(!1)}}}else Y=Z;return J.memoizedState=J.baseState=Y,G={pending:null,lanes:0,dispatch:null,lastRenderedReducer:G,lastRenderedState:Y},J.queue=G,G=G.dispatch=GM.bind(null,k0,G),[J.memoizedState,G]},useRef:function(G){var Z=VZ();return G={current:G},Z.memoizedState=G},useState:function(G){G=AH(G);var Z=G.queue,z=CU.bind(null,k0,Z);return Z.dispatch=z,[G.memoizedState,z]},useDebugValue:FX,useDeferredValue:function(G,Z){var z=VZ();return MX(z,G,Z)},useTransition:function(){var G=AH(!1);return G=KU.bind(null,k0,G.queue,!0,!1),VZ().memoizedState=G,[!1,G]},useSyncExternalStore:function(G,Z,z){var J=k0,Y=VZ();if(i0){if(z===void 0)throw Error(h(407));z=z()}else{if(z=Z(),RG===null)throw Error(h(349));(p0&127)!==0||YU(J,Z,z)}Y.memoizedState=z;var B={value:z,getSnapshot:Z};return Y.queue=B,Fj(HU.bind(null,J,B,G),[G]),J.flags|=2048,MJ(9,{destroy:void 0},BU.bind(null,J,B,z,Z),null),z},useId:function(){var G=VZ(),Z=RG.identifierPrefix;if(i0){var z=T6,J=C6;z=(J&~(1<<32-vZ(J)-1)).toString(32)+z,Z="_"+Z+"R_"+z,z=SY++,0<z&&(Z+="H"+z.toString(32)),Z+="_"}else z=sF++,Z="_"+Z+"r_"+z.toString(32)+"_";return G.memoizedState=Z},useHostTransitionStatus:OX,useFormState:Lj,useActionState:Lj,useOptimistic:function(G){var Z=VZ();Z.memoizedState=Z.baseState=G;var z={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return Z.queue=z,Z=VX.bind(null,k0,!0,z),z.dispatch=Z,[G,Z]},useMemoCache:LX,useCacheRefresh:function(){return VZ().memoizedState=eF.bind(null,k0)},useEffectEvent:function(G){var Z=VZ(),z={impl:G};return Z.memoizedState=z,function(){if((YG&2)!==0)throw Error(h(440));return z.impl.apply(void 0,arguments)}}},RX={readContext:WZ,use:G4,useCallback:RU,useContext:WZ,useEffect:AX,useImperativeHandle:VU,useInsertionEffect:FU,useLayoutEffect:MU,useMemo:wU,useReducer:qY,useRef:_U,useState:function(){return qY(Z7)},useDebugValue:FX,useDeferredValue:function(G,Z){var z=lG();return DU(z,MG.memoizedState,G,Z)},useTransition:function(){var G=qY(Z7)[0],Z=lG().memoizedState;return[typeof G==="boolean"?G:e8(G),Z]},useSyncExternalStore:JU,useId:NU,useHostTransitionStatus:OX,useFormState:_j,useActionState:_j,useOptimistic:function(G,Z){var z=lG();return WU(z,MG,G,Z)},useMemoCache:LX,useCacheRefresh:$U};RX.useEffectEvent=AU;var PU={readContext:WZ,use:G4,useCallback:RU,useContext:WZ,useEffect:AX,useImperativeHandle:VU,useInsertionEffect:FU,useLayoutEffect:MU,useMemo:wU,useReducer:fB,useRef:_U,useState:function(){return fB(Z7)},useDebugValue:FX,useDeferredValue:function(G,Z){var z=lG();return MG===null?MX(z,G,Z):DU(z,MG.memoizedState,G,Z)},useTransition:function(){var G=fB(Z7)[0],Z=lG().memoizedState;return[typeof G==="boolean"?G:e8(G),Z]},useSyncExternalStore:JU,useId:NU,useHostTransitionStatus:OX,useFormState:Aj,useActionState:Aj,useOptimistic:function(G,Z){var z=lG();if(MG!==null)return WU(z,MG,G,Z);return z.baseState=G,[G,z.queue.dispatch]},useMemoCache:LX,useCacheRefresh:$U};PU.useEffectEvent=AU;function NB(G,Z,z,J){Z=G.memoizedState,z=z(J,Z),z=z===null||z===void 0?Z:$G({},Z,z),G.memoizedState=z,G.lanes===0&&(G.updateQueue.baseState=z)}var OH={enqueueSetState:function(G,Z,z){G=G._reactInternals;var J=uZ(),Y=$7(J);Y.payload=Z,z!==void 0&&z!==null&&(Y.callback=z),Z=C7(G,Y,J),Z!==null&&($Z(Z,G,J),K8(Z,G,J))},enqueueReplaceState:function(G,Z,z){G=G._reactInternals;var J=uZ(),Y=$7(J);Y.tag=1,Y.payload=Z,z!==void 0&&z!==null&&(Y.callback=z),Z=C7(G,Y,J),Z!==null&&($Z(Z,G,J),K8(Z,G,J))},enqueueForceUpdate:function(G,Z){G=G._reactInternals;var z=uZ(),J=$7(z);J.tag=2,Z!==void 0&&Z!==null&&(J.callback=Z),Z=C7(G,J,z),Z!==null&&($Z(Z,G,z),K8(Z,G,z))}};function Mj(G,Z,z,J,Y,B,H){return G=G.stateNode,typeof G.shouldComponentUpdate==="function"?G.shouldComponentUpdate(J,B,H):Z.prototype&&Z.prototype.isPureReactComponent?!E8(z,J)||!E8(Y,B):!0}function Oj(G,Z,z,J){G=Z.state,typeof Z.componentWillReceiveProps==="function"&&Z.componentWillReceiveProps(z,J),typeof Z.UNSAFE_componentWillReceiveProps==="function"&&Z.UNSAFE_componentWillReceiveProps(z,J),Z.state!==G&&OH.enqueueReplaceState(Z,Z.state,null)}function Az(G,Z){var z=Z;if("ref"in Z){z={};for(var J in Z)J!=="ref"&&(z[J]=Z[J])}if(G=G.defaultProps){z===Z&&(z=$G({},z));for(var Y in G)z[Y]===void 0&&(z[Y]=G[Y])}return z}function kU(G){DY(G)}function bU(G){console.error(G)}function EU(G){DY(G)}function xY(G,Z){try{var z=G.onUncaughtError;z(Z.value,{componentStack:Z.stack})}catch(J){setTimeout(function(){throw J})}}function Vj(G,Z,z){try{var J=G.onCaughtError;J(z.value,{componentStack:z.stack,errorBoundary:Z.tag===1?Z.stateNode:null})}catch(Y){setTimeout(function(){throw Y})}}function VH(G,Z,z){return z=$7(z),z.tag=3,z.payload={element:null},z.callback=function(){xY(G,Z)},z}function hU(G){return G=$7(G),G.tag=3,G}function yU(G,Z,z,J){var Y=z.type.getDerivedStateFromError;if(typeof Y==="function"){var B=J.value;G.payload=function(){return Y(B)},G.callback=function(){Vj(Z,z,J)}}var H=z.stateNode;H!==null&&typeof H.componentDidCatch==="function"&&(G.callback=function(){Vj(Z,z,J),typeof Y!=="function"&&(T7===null?T7=new Set([this]):T7.add(this));var X=J.stack;this.componentDidCatch(J.value,{componentStack:X!==null?X:""})})}function ZM(G,Z,z,J,Y){if(z.flags|=32768,J!==null&&typeof J==="object"&&typeof J.then==="function"){if(Z=z.alternate,Z!==null&&fJ(Z,z,Y,!0),z=dZ.current,z!==null){switch(z.tag){case 31:case 13:return z6===null?hY():z.alternate===null&&gG===0&&(gG=3),z.flags&=-257,z.flags|=65536,z.lanes=Y,J===NY?z.flags|=16384:(Z=z.updateQueue,Z===null?z.updateQueue=new Set([J]):Z.add(J),yB(G,J,Y)),!1;case 22:return z.flags|=65536,J===NY?z.flags|=16384:(Z=z.updateQueue,Z===null?(Z={transitions:null,markerInstances:null,retryQueue:new Set([J])},z.updateQueue=Z):(z=Z.retryQueue,z===null?Z.retryQueue=new Set([J]):z.add(J)),yB(G,J,Y)),!1}throw Error(h(435,z.tag))}return yB(G,J,Y),hY(),!1}if(i0)return Z=dZ.current,Z!==null?((Z.flags&65536)===0&&(Z.flags|=256),Z.flags|=65536,Z.lanes=Y,J!==HH&&(G=Error(h(422),{cause:J}),y8(G6(G,z)))):(J!==HH&&(Z=Error(h(423),{cause:J}),y8(G6(Z,z))),G=G.current.alternate,G.flags|=65536,Y&=-Y,G.lanes|=Y,J=G6(J,z),Y=VH(G.stateNode,J,Y),IB(G,Y),gG!==4&&(gG=2)),!1;var B=Error(h(520),{cause:J});if(B=G6(B,z),T8===null?T8=[B]:T8.push(B),gG!==4&&(gG=2),Z===null)return!0;J=G6(J,z),z=Z;do{switch(z.tag){case 3:return z.flags|=65536,G=Y&-Y,z.lanes|=G,G=VH(z.stateNode,J,G),IB(z,G),!1;case 1:if(Z=z.type,B=z.stateNode,(z.flags&128)===0&&(typeof Z.getDerivedStateFromError==="function"||B!==null&&typeof B.componentDidCatch==="function"&&(T7===null||!T7.has(B))))return z.flags|=65536,Y&=-Y,z.lanes|=Y,Y=hU(Y),yU(Y,G,z,J),IB(z,Y),!1}z=z.return}while(z!==null);return!1}var wX=Error(h(461)),aG=!1;function HZ(G,Z,z,J){Z.child=G===null?nQ(Z,null,z,J):Lz(Z,G.child,z,J)}function Rj(G,Z,z,J,Y){z=z.render;var B=Z.ref;if("ref"in J){var H={};for(var X in J)X!=="ref"&&(H[X]=J[X])}else H=J;if(Uz(Z),J=WX(G,Z,z,H,B,Y),X=jX(),G!==null&&!aG)return QX(G,Z,Y),z7(G,Z,Y);return i0&&X&&ZX(Z),Z.flags|=1,HZ(G,Z,J,Y),Z.child}function wj(G,Z,z,J,Y){if(G===null){var B=z.type;if(typeof B==="function"&&!GX(B)&&B.defaultProps===void 0&&z.compare===null)return Z.tag=15,Z.type=B,gU(G,Z,B,J,Y);return G=HY(z.type,null,J,Z,Z.mode,Y),G.ref=Z.ref,G.return=Z,Z.child=G}if(B=G.child,!DX(G,Y)){var H=B.memoizedProps;if(z=z.compare,z=z!==null?z:E8,z(H,J)&&G.ref===Z.ref)return z7(G,Z,Y)}return Z.flags|=1,G=a6(B,J),G.ref=Z.ref,G.return=Z,Z.child=G}function gU(G,Z,z,J,Y){if(G!==null){var B=G.memoizedProps;if(E8(B,J)&&G.ref===Z.ref)if(aG=!1,Z.pendingProps=J=B,DX(G,Y))(G.flags&131072)!==0&&(aG=!0);else return Z.lanes=G.lanes,z7(G,Z,Y)}return RH(G,Z,z,J,Y)}function vU(G,Z,z,J){var Y=J.children,B=G!==null?G.memoizedState:null;if(G===null&&Z.stateNode===null&&(Z.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),J.mode==="hidden"){if((Z.flags&128)!==0){if(B=B!==null?B.baseLanes|z:z,G!==null){J=Z.child=G.child;for(Y=0;J!==null;)Y=Y|J.lanes|J.childLanes,J=J.sibling;J=Y&~B}else J=0,Z.child=null;return Dj(G,Z,B,z,J)}if((z&536870912)!==0)Z.memoizedState={baseLanes:0,cachePool:null},G!==null&&XY(Z,B!==null?B.cachePool:null),B!==null?jj(Z,B):LH(),GU(Z);else return J=Z.lanes=536870912,Dj(G,Z,B!==null?B.baseLanes|z:z,z,J)}else B!==null?(XY(Z,B.cachePool),jj(Z,B),O7(Z),Z.memoizedState=null):(G!==null&&XY(Z,null),LH(),O7(Z));return HZ(G,Z,Y,z),Z.child}function A8(G,Z){return G!==null&&G.tag===22||Z.stateNode!==null||(Z.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),Z.sibling}function Dj(G,Z,z,J,Y){var B=YX();return B=B===null?null:{parent:oG._currentValue,pool:B},Z.memoizedState={baseLanes:z,cachePool:B},G!==null&&XY(Z,null),LH(),GU(Z),G!==null&&fJ(G,Z,J,!0),Z.childLanes=Y,null}function jY(G,Z){return Z=PY({mode:Z.mode,children:Z.children},G.mode),Z.ref=G.ref,G.child=Z,Z.return=G,Z}function Kj(G,Z,z){return Lz(Z,G.child,null,z),G=jY(Z,Z.pendingProps),G.flags|=2,bZ(Z),Z.memoizedState=null,G}function zM(G,Z,z){var J=Z.pendingProps,Y=(Z.flags&128)!==0;if(Z.flags&=-129,G===null){if(i0){if(J.mode==="hidden")return G=jY(Z,J),Z.lanes=536870912,A8(null,G);if(_H(Z),(G=NG)?(G=xL(G,Z6),G=G!==null&&G.data==="&"?G:null,G!==null&&(Z.memoizedState={dehydrated:G,treeContext:b7!==null?{id:C6,overflow:T6}:null,retryLane:536870912,hydrationErrors:null},z=lQ(G),z.return=Z,Z.child=z,qZ=Z,NG=null)):G=null,G===null)throw E7(Z);return Z.lanes=536870912,null}return jY(Z,J)}var B=G.memoizedState;if(B!==null){var H=B.dehydrated;if(_H(Z),Y)if(Z.flags&256)Z.flags&=-257,Z=Kj(G,Z,z);else if(Z.memoizedState!==null)Z.child=G.child,Z.flags|=128,Z=null;else throw Error(h(558));else if(aG||fJ(G,Z,z,!1),Y=(z&G.childLanes)!==0,aG||Y){if(J=RG,J!==null&&(H=FQ(J,z),H!==0&&H!==B.retryLane))throw B.retryLane=H,Vz(G,H),$Z(J,G,H),wX;hY(),Z=Kj(G,Z,z)}else G=B.treeContext,NG=J6(H.nextSibling),qZ=Z,i0=!0,N7=null,Z6=!1,G!==null&&iQ(Z,G),Z=jY(Z,J),Z.flags|=4096;return Z}return G=a6(G.child,{mode:J.mode,children:J.children}),G.ref=Z.ref,Z.child=G,G.return=Z,G}function QY(G,Z){var z=Z.ref;if(z===null)G!==null&&G.ref!==null&&(Z.flags|=4194816);else{if(typeof z!=="function"&&typeof z!=="object")throw Error(h(284));if(G===null||G.ref!==z)Z.flags|=4194816}}function RH(G,Z,z,J,Y){if(Uz(Z),z=WX(G,Z,z,J,void 0,Y),J=jX(),G!==null&&!aG)return QX(G,Z,Y),z7(G,Z,Y);return i0&&J&&ZX(Z),Z.flags|=1,HZ(G,Z,z,Y),Z.child}function Ij(G,Z,z,J,Y,B){if(Uz(Z),Z.updateQueue=null,z=zU(Z,J,z,Y),ZU(G),J=jX(),G!==null&&!aG)return QX(G,Z,B),z7(G,Z,B);return i0&&J&&ZX(Z),Z.flags|=1,HZ(G,Z,z,B),Z.child}function fj(G,Z,z,J,Y){if(Uz(Z),Z.stateNode===null){var B=ZJ,H=z.contextType;typeof H==="object"&&H!==null&&(B=WZ(H)),B=new z(J,B),Z.memoizedState=B.state!==null&&B.state!==void 0?B.state:null,B.updater=OH,Z.stateNode=B,B._reactInternals=Z,B=Z.stateNode,B.props=J,B.state=Z.memoizedState,B.refs={},HX(Z),H=z.contextType,B.context=typeof H==="object"&&H!==null?WZ(H):ZJ,B.state=Z.memoizedState,H=z.getDerivedStateFromProps,typeof H==="function"&&(NB(Z,z,H,J),B.state=Z.memoizedState),typeof z.getDerivedStateFromProps==="function"||typeof B.getSnapshotBeforeUpdate==="function"||typeof B.UNSAFE_componentWillMount!=="function"&&typeof B.componentWillMount!=="function"||(H=B.state,typeof B.componentWillMount==="function"&&B.componentWillMount(),typeof B.UNSAFE_componentWillMount==="function"&&B.UNSAFE_componentWillMount(),H!==B.state&&OH.enqueueReplaceState(B,B.state,null),f8(Z,J,B,Y),I8(),B.state=Z.memoizedState),typeof B.componentDidMount==="function"&&(Z.flags|=4194308),J=!0}else if(G===null){B=Z.stateNode;var X=Z.memoizedProps,q=Az(z,X);B.props=q;var A=B.context,U=z.contextType;H=ZJ,typeof U==="object"&&U!==null&&(H=WZ(U));var V=z.getDerivedStateFromProps;U=typeof V==="function"||typeof B.getSnapshotBeforeUpdate==="function",X=Z.pendingProps!==X,U||typeof B.UNSAFE_componentWillReceiveProps!=="function"&&typeof B.componentWillReceiveProps!=="function"||(X||A!==H)&&Oj(Z,B,J,H),A7=!1;var L=Z.memoizedState;B.state=L,f8(Z,J,B,Y),I8(),A=Z.memoizedState,X||L!==A||A7?(typeof V==="function"&&(NB(Z,z,V,J),A=Z.memoizedState),(q=A7||Mj(Z,z,q,J,L,A,H))?(U||typeof B.UNSAFE_componentWillMount!=="function"&&typeof B.componentWillMount!=="function"||(typeof B.componentWillMount==="function"&&B.componentWillMount(),typeof B.UNSAFE_componentWillMount==="function"&&B.UNSAFE_componentWillMount()),typeof B.componentDidMount==="function"&&(Z.flags|=4194308)):(typeof B.componentDidMount==="function"&&(Z.flags|=4194308),Z.memoizedProps=J,Z.memoizedState=A),B.props=J,B.state=A,B.context=H,J=q):(typeof B.componentDidMount==="function"&&(Z.flags|=4194308),J=!1)}else{B=Z.stateNode,QH(G,Z),H=Z.memoizedProps,U=Az(z,H),B.props=U,V=Z.pendingProps,L=B.context,A=z.contextType,q=ZJ,typeof A==="object"&&A!==null&&(q=WZ(A)),X=z.getDerivedStateFromProps,(A=typeof X==="function"||typeof B.getSnapshotBeforeUpdate==="function")||typeof B.UNSAFE_componentWillReceiveProps!=="function"&&typeof B.componentWillReceiveProps!=="function"||(H!==V||L!==q)&&Oj(Z,B,J,q),A7=!1,L=Z.memoizedState,B.state=L,f8(Z,J,B,Y),I8();var D=Z.memoizedState;H!==V||L!==D||A7||G!==null&&G.dependencies!==null&&fY(G.dependencies)?(typeof X==="function"&&(NB(Z,z,X,J),D=Z.memoizedState),(U=A7||Mj(Z,z,U,J,L,D,q)||G!==null&&G.dependencies!==null&&fY(G.dependencies))?(A||typeof B.UNSAFE_componentWillUpdate!=="function"&&typeof B.componentWillUpdate!=="function"||(typeof B.componentWillUpdate==="function"&&B.componentWillUpdate(J,D,q),typeof B.UNSAFE_componentWillUpdate==="function"&&B.UNSAFE_componentWillUpdate(J,D,q)),typeof B.componentDidUpdate==="function"&&(Z.flags|=4),typeof B.getSnapshotBeforeUpdate==="function"&&(Z.flags|=1024)):(typeof B.componentDidUpdate!=="function"||H===G.memoizedProps&&L===G.memoizedState||(Z.flags|=4),typeof B.getSnapshotBeforeUpdate!=="function"||H===G.memoizedProps&&L===G.memoizedState||(Z.flags|=1024),Z.memoizedProps=J,Z.memoizedState=D),B.props=J,B.state=D,B.context=q,J=U):(typeof B.componentDidUpdate!=="function"||H===G.memoizedProps&&L===G.memoizedState||(Z.flags|=4),typeof B.getSnapshotBeforeUpdate!=="function"||H===G.memoizedProps&&L===G.memoizedState||(Z.flags|=1024),J=!1)}return B=J,QY(G,Z),J=(Z.flags&128)!==0,B||J?(B=Z.stateNode,z=J&&typeof z.getDerivedStateFromError!=="function"?null:B.render(),Z.flags|=1,G!==null&&J?(Z.child=Lz(Z,G.child,null,Y),Z.child=Lz(Z,null,z,Y)):HZ(G,Z,z,Y),Z.memoizedState=B.state,G=Z.child):G=z7(G,Z,Y),G}function Nj(G,Z,z,J){return Qz(),Z.flags|=256,HZ(G,Z,z,J),Z.child}var $B={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function CB(G){return{baseLanes:G,cachePool:rQ()}}function TB(G,Z,z){return G=G!==null?G.childLanes&~z:0,Z&&(G|=hZ),G}function uU(G,Z,z){var J=Z.pendingProps,Y=!1,B=(Z.flags&128)!==0,H;if((H=B)||(H=G!==null&&G.memoizedState===null?!1:(cG.current&2)!==0),H&&(Y=!0,Z.flags&=-129),H=(Z.flags&32)!==0,Z.flags&=-33,G===null){if(i0){if(Y?M7(Z):O7(Z),(G=NG)?(G=xL(G,Z6),G=G!==null&&G.data!=="&"?G:null,G!==null&&(Z.memoizedState={dehydrated:G,treeContext:b7!==null?{id:C6,overflow:T6}:null,retryLane:536870912,hydrationErrors:null},z=lQ(G),z.return=Z,Z.child=z,qZ=Z,NG=null)):G=null,G===null)throw E7(Z);return hH(G)?Z.lanes=32:Z.lanes=536870912,null}var X=J.children;if(J=J.fallback,Y)return O7(Z),Y=Z.mode,X=PY({mode:"hidden",children:X},Y),J=Xz(J,Y,z,null),X.return=Z,J.return=Z,X.sibling=J,Z.child=X,J=Z.child,J.memoizedState=CB(z),J.childLanes=TB(G,H,z),Z.memoizedState=$B,A8(null,J);return M7(Z),wH(Z,X)}var q=G.memoizedState;if(q!==null&&(X=q.dehydrated,X!==null)){if(B)Z.flags&256?(M7(Z),Z.flags&=-257,Z=SB(G,Z,z)):Z.memoizedState!==null?(O7(Z),Z.child=G.child,Z.flags|=128,Z=null):(O7(Z),X=J.fallback,Y=Z.mode,J=PY({mode:"visible",children:J.children},Y),X=Xz(X,Y,z,null),X.flags|=2,J.return=Z,X.return=Z,J.sibling=X,Z.child=J,Lz(Z,G.child,null,z),J=Z.child,J.memoizedState=CB(z),J.childLanes=TB(G,H,z),Z.memoizedState=$B,Z=A8(null,J));else if(M7(Z),hH(X)){if(H=X.nextSibling&&X.nextSibling.dataset,H)var A=H.dgst;H=A,J=Error(h(419)),J.stack="",J.digest=H,y8({value:J,source:null,stack:null}),Z=SB(G,Z,z)}else if(aG||fJ(G,Z,z,!1),H=(z&G.childLanes)!==0,aG||H){if(H=RG,H!==null&&(J=FQ(H,z),J!==0&&J!==q.retryLane))throw q.retryLane=J,Vz(G,J),$Z(H,G,J),wX;EH(X)||hY(),Z=SB(G,Z,z)}else EH(X)?(Z.flags|=192,Z.child=G.child,Z=null):(G=q.treeContext,NG=J6(X.nextSibling),qZ=Z,i0=!0,N7=null,Z6=!1,G!==null&&iQ(Z,G),Z=wH(Z,J.children),Z.flags|=4096);return Z}if(Y)return O7(Z),X=J.fallback,Y=Z.mode,q=G.child,A=q.sibling,J=a6(q,{mode:"hidden",children:J.children}),J.subtreeFlags=q.subtreeFlags&65011712,A!==null?X=a6(A,X):(X=Xz(X,Y,z,null),X.flags|=2),X.return=Z,J.return=Z,J.sibling=X,Z.child=J,A8(null,J),J=Z.child,X=G.child.memoizedState,X===null?X=CB(z):(Y=X.cachePool,Y!==null?(q=oG._currentValue,Y=Y.parent!==q?{parent:q,pool:q}:Y):Y=rQ(),X={baseLanes:X.baseLanes|z,cachePool:Y}),J.memoizedState=X,J.childLanes=TB(G,H,z),Z.memoizedState=$B,A8(G.child,J);return M7(Z),z=G.child,G=z.sibling,z=a6(z,{mode:"visible",children:J.children}),z.return=Z,z.sibling=null,G!==null&&(H=Z.deletions,H===null?(Z.deletions=[G],Z.flags|=16):H.push(G)),Z.child=z,Z.memoizedState=null,z}function wH(G,Z){return Z=PY({mode:"visible",children:Z},G.mode),Z.return=G,G.child=Z}function PY(G,Z){return G=EZ(22,G,null,Z),G.lanes=0,G}function SB(G,Z,z){return Lz(Z,G.child,null,z),G=wH(Z,Z.pendingProps.children),G.flags|=2,Z.memoizedState=null,G}function $j(G,Z,z){G.lanes|=Z;var J=G.alternate;J!==null&&(J.lanes|=Z),qH(G.return,Z,z)}function xB(G,Z,z,J,Y,B){var H=G.memoizedState;H===null?G.memoizedState={isBackwards:Z,rendering:null,renderingStartTime:0,last:J,tail:z,tailMode:Y,treeForkCount:B}:(H.isBackwards=Z,H.rendering=null,H.renderingStartTime=0,H.last=J,H.tail=z,H.tailMode=Y,H.treeForkCount=B)}function mU(G,Z,z){var J=Z.pendingProps,Y=J.revealOrder,B=J.tail;J=J.children;var H=cG.current,X=(H&2)!==0;if(X?(H=H&1|2,Z.flags|=128):H&=1,KG(cG,H),HZ(G,Z,J,z),J=i0?h8:0,!X&&G!==null&&(G.flags&128)!==0)G:for(G=Z.child;G!==null;){if(G.tag===13)G.memoizedState!==null&&$j(G,z,Z);else if(G.tag===19)$j(G,z,Z);else if(G.child!==null){G.child.return=G,G=G.child;continue}if(G===Z)break G;for(;G.sibling===null;){if(G.return===null||G.return===Z)break G;G=G.return}G.sibling.return=G.return,G=G.sibling}switch(Y){case"forwards":z=Z.child;for(Y=null;z!==null;)G=z.alternate,G!==null&&CY(G)===null&&(Y=z),z=z.sibling;z=Y,z===null?(Y=Z.child,Z.child=null):(Y=z.sibling,z.sibling=null),xB(Z,!1,Y,z,B,J);break;case"backwards":case"unstable_legacy-backwards":z=null,Y=Z.child;for(Z.child=null;Y!==null;){if(G=Y.alternate,G!==null&&CY(G)===null){Z.child=Y;break}G=Y.sibling,Y.sibling=z,z=Y,Y=G}xB(Z,!0,z,null,B,J);break;case"together":xB(Z,!1,null,null,void 0,J);break;default:Z.memoizedState=null}return Z.child}function z7(G,Z,z){if(G!==null&&(Z.dependencies=G.dependencies),y7|=Z.lanes,(z&Z.childLanes)===0)if(G!==null){if(fJ(G,Z,z,!1),(z&Z.childLanes)===0)return null}else return null;if(G!==null&&Z.child!==G.child)throw Error(h(153));if(Z.child!==null){G=Z.child,z=a6(G,G.pendingProps),Z.child=z;for(z.return=Z;G.sibling!==null;)G=G.sibling,z=z.sibling=a6(G,G.pendingProps),z.return=Z;z.sibling=null}return Z.child}function DX(G,Z){if((G.lanes&Z)!==0)return!0;return G=G.dependencies,G!==null&&fY(G)?!0:!1}function JM(G,Z,z){switch(Z.tag){case 3:OY(Z,Z.stateNode.containerInfo),F7(Z,oG,G.memoizedState.cache),Qz();break;case 27:case 5:oB(Z);break;case 4:OY(Z,Z.stateNode.containerInfo);break;case 10:F7(Z,Z.type,Z.memoizedProps.value);break;case 31:if(Z.memoizedState!==null)return Z.flags|=128,_H(Z),null;break;case 13:var J=Z.memoizedState;if(J!==null){if(J.dehydrated!==null)return M7(Z),Z.flags|=128,null;if((z&Z.child.childLanes)!==0)return uU(G,Z,z);return M7(Z),G=z7(G,Z,z),G!==null?G.sibling:null}M7(Z);break;case 19:var Y=(G.flags&128)!==0;if(J=(z&Z.childLanes)!==0,J||(fJ(G,Z,z,!1),J=(z&Z.childLanes)!==0),Y){if(J)return mU(G,Z,z);Z.flags|=128}if(Y=Z.memoizedState,Y!==null&&(Y.rendering=null,Y.tail=null,Y.lastEffect=null),KG(cG,cG.current),J)break;else return null;case 22:return Z.lanes=0,vU(G,Z,z,Z.pendingProps);case 24:F7(Z,oG,G.memoizedState.cache)}return z7(G,Z,z)}function dU(G,Z,z){if(G!==null)if(G.memoizedProps!==Z.pendingProps)aG=!0;else{if(!DX(G,z)&&(Z.flags&128)===0)return aG=!1,JM(G,Z,z);aG=(G.flags&131072)!==0?!0:!1}else aG=!1,i0&&(Z.flags&1048576)!==0&&pQ(Z,h8,Z.index);switch(Z.lanes=0,Z.tag){case 16:G:{var J=Z.pendingProps;if(G=Yz(Z.elementType),Z.type=G,typeof G==="function")GX(G)?(J=Az(G,J),Z.tag=1,Z=fj(null,Z,G,J,z)):(Z.tag=0,Z=RH(null,Z,G,J,z));else{if(G!==void 0&&G!==null){var Y=G.$$typeof;if(Y===uH){Z.tag=11,Z=Rj(null,Z,G,J,z);break G}else if(Y===mH){Z.tag=14,Z=wj(null,Z,G,J,z);break G}}throw Z=sB(G)||G,Error(h(306,Z,""))}}return Z;case 0:return RH(G,Z,Z.type,Z.pendingProps,z);case 1:return J=Z.type,Y=Az(J,Z.pendingProps),fj(G,Z,J,Y,z);case 3:G:{if(OY(Z,Z.stateNode.containerInfo),G===null)throw Error(h(387));J=Z.pendingProps;var B=Z.memoizedState;Y=B.element,QH(G,Z),f8(Z,J,null,z);var H=Z.memoizedState;if(J=H.cache,F7(Z,oG,J),J!==B.cache&&WH(Z,[oG],z,!0),I8(),J=H.element,B.isDehydrated)if(B={element:J,isDehydrated:!1,cache:H.cache},Z.updateQueue.baseState=B,Z.memoizedState=B,Z.flags&256){Z=Nj(G,Z,J,z);break G}else if(J!==Y){Y=G6(Error(h(424)),Z),y8(Y),Z=Nj(G,Z,J,z);break G}else{switch(G=Z.stateNode.containerInfo,G.nodeType){case 9:G=G.body;break;default:G=G.nodeName==="HTML"?G.ownerDocument.body:G}NG=J6(G.firstChild),qZ=Z,i0=!0,N7=null,Z6=!0,z=nQ(Z,null,J,z);for(Z.child=z;z;)z.flags=z.flags&-3|4096,z=z.sibling}else{if(Qz(),J===Y){Z=z7(G,Z,z);break G}HZ(G,Z,J,z)}Z=Z.child}return Z;case 26:return QY(G,Z),G===null?(z=sj(Z.type,null,Z.pendingProps,null))?Z.memoizedState=z:i0||(z=Z.type,G=Z.pendingProps,J=uY(f7.current).createElement(z),J[XZ]=Z,J[CZ]=G,jZ(J,z,G),JZ(J),Z.stateNode=J):Z.memoizedState=sj(Z.type,G.memoizedProps,Z.pendingProps,G.memoizedState),null;case 27:return oB(Z),G===null&&i0&&(J=Z.stateNode=PL(Z.type,Z.pendingProps,f7.current),qZ=Z,Z6=!0,Y=NG,v7(Z.type)?(yH=Y,NG=J6(J.firstChild)):NG=Y),HZ(G,Z,Z.pendingProps.children,z),QY(G,Z),G===null&&(Z.flags|=4194304),Z.child;case 5:if(G===null&&i0){if(Y=J=NG)J=xM(J,Z.type,Z.pendingProps,Z6),J!==null?(Z.stateNode=J,qZ=Z,NG=J6(J.firstChild),Z6=!1,Y=!0):Y=!1;Y||E7(Z)}return oB(Z),Y=Z.type,B=Z.pendingProps,H=G!==null?G.memoizedProps:null,J=B.children,kH(Y,B)?J=null:H!==null&&kH(Y,H)&&(Z.flags|=32),Z.memoizedState!==null&&(Y=WX(G,Z,rF,null,null,z),c8._currentValue=Y),QY(G,Z),HZ(G,Z,J,z),Z.child;case 6:if(G===null&&i0){if(G=z=NG)z=PM(z,Z.pendingProps,Z6),z!==null?(Z.stateNode=z,qZ=Z,NG=null,G=!0):G=!1;G||E7(Z)}return null;case 13:return uU(G,Z,z);case 4:return OY(Z,Z.stateNode.containerInfo),J=Z.pendingProps,G===null?Z.child=Lz(Z,null,J,z):HZ(G,Z,J,z),Z.child;case 11:return Rj(G,Z,Z.type,Z.pendingProps,z);case 7:return HZ(G,Z,Z.pendingProps,z),Z.child;case 8:return HZ(G,Z,Z.pendingProps.children,z),Z.child;case 12:return HZ(G,Z,Z.pendingProps.children,z),Z.child;case 10:return J=Z.pendingProps,F7(Z,Z.type,J.value),HZ(G,Z,J.children,z),Z.child;case 9:return Y=Z.type._context,J=Z.pendingProps.children,Uz(Z),Y=WZ(Y),J=J(Y),Z.flags|=1,HZ(G,Z,J,z),Z.child;case 14:return wj(G,Z,Z.type,Z.pendingProps,z);case 15:return gU(G,Z,Z.type,Z.pendingProps,z);case 19:return mU(G,Z,z);case 31:return zM(G,Z,z);case 22:return vU(G,Z,z,Z.pendingProps);case 24:return Uz(Z),J=WZ(oG),G===null?(Y=YX(),Y===null&&(Y=RG,B=JX(),Y.pooledCache=B,B.refCount++,B!==null&&(Y.pooledCacheLanes|=z),Y=B),Z.memoizedState={parent:J,cache:Y},HX(Z),F7(Z,oG,Y)):((G.lanes&z)!==0&&(QH(G,Z),f8(Z,null,null,z),I8()),Y=G.memoizedState,B=Z.memoizedState,Y.parent!==J?(Y={parent:J,cache:J},Z.memoizedState=Y,Z.lanes===0&&(Z.memoizedState=Z.updateQueue.baseState=Y),F7(Z,oG,J)):(J=B.cache,F7(Z,oG,J),J!==Y.cache&&WH(Z,[oG],z,!0))),HZ(G,Z,Z.pendingProps.children,z),Z.child;case 29:throw Z.pendingProps}throw Error(h(156,Z.tag))}function m6(G){G.flags|=4}function PB(G,Z,z,J,Y){if(Z=(G.mode&32)!==0)Z=!1;if(Z){if(G.flags|=16777216,(Y&335544128)===Y)if(G.stateNode.complete)G.flags|=8192;else if(UL())G.flags|=8192;else throw Wz=NY,BX}else G.flags&=-16777217}function Cj(G,Z){if(Z.type!=="stylesheet"||(Z.state.loading&4)!==0)G.flags&=-16777217;else if(G.flags|=16777216,!EL(Z))if(UL())G.flags|=8192;else throw Wz=NY,BX}function a9(G,Z){Z!==null&&(G.flags|=4),G.flags&16384&&(Z=G.tag!==22?LQ():536870912,G.lanes|=Z,OJ|=Z)}function X8(G,Z){if(!i0)switch(G.tailMode){case"hidden":Z=G.tail;for(var z=null;Z!==null;)Z.alternate!==null&&(z=Z),Z=Z.sibling;z===null?G.tail=null:z.sibling=null;break;case"collapsed":z=G.tail;for(var J=null;z!==null;)z.alternate!==null&&(J=z),z=z.sibling;J===null?Z||G.tail===null?G.tail=null:G.tail.sibling=null:J.sibling=null}}function fG(G){var Z=G.alternate!==null&&G.alternate.child===G.child,z=0,J=0;if(Z)for(var Y=G.child;Y!==null;)z|=Y.lanes|Y.childLanes,J|=Y.subtreeFlags&65011712,J|=Y.flags&65011712,Y.return=G,Y=Y.sibling;else for(Y=G.child;Y!==null;)z|=Y.lanes|Y.childLanes,J|=Y.subtreeFlags,J|=Y.flags,Y.return=G,Y=Y.sibling;return G.subtreeFlags|=J,G.childLanes=z,Z}function YM(G,Z,z){var J=Z.pendingProps;switch(zX(Z),Z.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fG(Z),null;case 1:return fG(Z),null;case 3:if(z=Z.stateNode,J=null,G!==null&&(J=G.memoizedState.cache),Z.memoizedState.cache!==J&&(Z.flags|=2048),n6(oG),UJ(),z.pendingContext&&(z.context=z.pendingContext,z.pendingContext=null),G===null||G.child===null)dz(Z)?m6(Z):G===null||G.memoizedState.isDehydrated&&(Z.flags&256)===0||(Z.flags|=1024,KB());return fG(Z),null;case 26:var{type:Y,memoizedState:B}=Z;return G===null?(m6(Z),B!==null?(fG(Z),Cj(Z,B)):(fG(Z),PB(Z,Y,null,J,z))):B?B!==G.memoizedState?(m6(Z),fG(Z),Cj(Z,B)):(fG(Z),Z.flags&=-16777217):(G=G.memoizedProps,G!==J&&m6(Z),fG(Z),PB(Z,Y,G,J,z)),null;case 27:if(VY(Z),z=f7.current,Y=Z.type,G!==null&&Z.stateNode!=null)G.memoizedProps!==J&&m6(Z);else{if(!J){if(Z.stateNode===null)throw Error(h(166));return fG(Z),null}G=x6.current,dz(Z)?Jj(Z,G):(G=PL(Y,J,z),Z.stateNode=G,m6(Z))}return fG(Z),null;case 5:if(VY(Z),Y=Z.type,G!==null&&Z.stateNode!=null)G.memoizedProps!==J&&m6(Z);else{if(!J){if(Z.stateNode===null)throw Error(h(166));return fG(Z),null}if(B=x6.current,dz(Z))Jj(Z,B);else{var H=uY(f7.current);switch(B){case 1:B=H.createElementNS("http://www.w3.org/2000/svg",Y);break;case 2:B=H.createElementNS("http://www.w3.org/1998/Math/MathML",Y);break;default:switch(Y){case"svg":B=H.createElementNS("http://www.w3.org/2000/svg",Y);break;case"math":B=H.createElementNS("http://www.w3.org/1998/Math/MathML",Y);break;case"script":B=H.createElement("div"),B.innerHTML="<script></script>",B=B.removeChild(B.firstChild);break;case"select":B=typeof J.is==="string"?H.createElement("select",{is:J.is}):H.createElement("select"),J.multiple?B.multiple=!0:J.size&&(B.size=J.size);break;default:B=typeof J.is==="string"?H.createElement(Y,{is:J.is}):H.createElement(Y)}}B[XZ]=Z,B[CZ]=J;G:for(H=Z.child;H!==null;){if(H.tag===5||H.tag===6)B.appendChild(H.stateNode);else if(H.tag!==4&&H.tag!==27&&H.child!==null){H.child.return=H,H=H.child;continue}if(H===Z)break G;for(;H.sibling===null;){if(H.return===null||H.return===Z)break G;H=H.return}H.sibling.return=H.return,H=H.sibling}Z.stateNode=B;G:switch(jZ(B,Y,J),Y){case"button":case"input":case"select":case"textarea":J=!!J.autoFocus;break G;case"img":J=!0;break G;default:J=!1}J&&m6(Z)}}return fG(Z),PB(Z,Z.type,G===null?null:G.memoizedProps,Z.pendingProps,z),null;case 6:if(G&&Z.stateNode!=null)G.memoizedProps!==J&&m6(Z);else{if(typeof J!=="string"&&Z.stateNode===null)throw Error(h(166));if(G=f7.current,dz(Z)){if(G=Z.stateNode,z=Z.memoizedProps,J=null,Y=qZ,Y!==null)switch(Y.tag){case 27:case 5:J=Y.memoizedProps}G[XZ]=Z,G=G.nodeValue===z||J!==null&&J.suppressHydrationWarning===!0||CL(G.nodeValue,z)?!0:!1,G||E7(Z,!0)}else G=uY(G).createTextNode(J),G[XZ]=Z,Z.stateNode=G}return fG(Z),null;case 31:if(z=Z.memoizedState,G===null||G.memoizedState!==null){if(J=dz(Z),z!==null){if(G===null){if(!J)throw Error(h(318));if(G=Z.memoizedState,G=G!==null?G.dehydrated:null,!G)throw Error(h(557));G[XZ]=Z}else Qz(),(Z.flags&128)===0&&(Z.memoizedState=null),Z.flags|=4;fG(Z),G=!1}else z=KB(),G!==null&&G.memoizedState!==null&&(G.memoizedState.hydrationErrors=z),G=!0;if(!G){if(Z.flags&256)return bZ(Z),Z;return bZ(Z),null}if((Z.flags&128)!==0)throw Error(h(558))}return fG(Z),null;case 13:if(J=Z.memoizedState,G===null||G.memoizedState!==null&&G.memoizedState.dehydrated!==null){if(Y=dz(Z),J!==null&&J.dehydrated!==null){if(G===null){if(!Y)throw Error(h(318));if(Y=Z.memoizedState,Y=Y!==null?Y.dehydrated:null,!Y)throw Error(h(317));Y[XZ]=Z}else Qz(),(Z.flags&128)===0&&(Z.memoizedState=null),Z.flags|=4;fG(Z),Y=!1}else Y=KB(),G!==null&&G.memoizedState!==null&&(G.memoizedState.hydrationErrors=Y),Y=!0;if(!Y){if(Z.flags&256)return bZ(Z),Z;return bZ(Z),null}}if(bZ(Z),(Z.flags&128)!==0)return Z.lanes=z,Z;return z=J!==null,G=G!==null&&G.memoizedState!==null,z&&(J=Z.child,Y=null,J.alternate!==null&&J.alternate.memoizedState!==null&&J.alternate.memoizedState.cachePool!==null&&(Y=J.alternate.memoizedState.cachePool.pool),B=null,J.memoizedState!==null&&J.memoizedState.cachePool!==null&&(B=J.memoizedState.cachePool.pool),B!==Y&&(J.flags|=2048)),z!==G&&z&&(Z.child.flags|=8192),a9(Z,Z.updateQueue),fG(Z),null;case 4:return UJ(),G===null&&TX(Z.stateNode.containerInfo),fG(Z),null;case 10:return n6(Z.type),fG(Z),null;case 19:if(YZ(cG),J=Z.memoizedState,J===null)return fG(Z),null;if(Y=(Z.flags&128)!==0,B=J.rendering,B===null)if(Y)X8(J,!1);else{if(gG!==0||G!==null&&(G.flags&128)!==0)for(G=Z.child;G!==null;){if(B=CY(G),B!==null){Z.flags|=128,X8(J,!1),G=B.updateQueue,Z.updateQueue=G,a9(Z,G),Z.subtreeFlags=0,G=z;for(z=Z.child;z!==null;)cQ(z,G),z=z.sibling;return KG(cG,cG.current&1|2),i0&&p6(Z,J.treeForkCount),Z.child}G=G.sibling}J.tail!==null&&yZ()>bY&&(Z.flags|=128,Y=!0,X8(J,!1),Z.lanes=4194304)}else{if(!Y)if(G=CY(B),G!==null){if(Z.flags|=128,Y=!0,G=G.updateQueue,Z.updateQueue=G,a9(Z,G),X8(J,!0),J.tail===null&&J.tailMode==="hidden"&&!B.alternate&&!i0)return fG(Z),null}else 2*yZ()-J.renderingStartTime>bY&&z!==536870912&&(Z.flags|=128,Y=!0,X8(J,!1),Z.lanes=4194304);J.isBackwards?(B.sibling=Z.child,Z.child=B):(G=J.last,G!==null?G.sibling=B:Z.child=B,J.last=B)}if(J.tail!==null)return G=J.tail,J.rendering=G,J.tail=G.sibling,J.renderingStartTime=yZ(),G.sibling=null,z=cG.current,KG(cG,Y?z&1|2:z&1),i0&&p6(Z,J.treeForkCount),G;return fG(Z),null;case 22:case 23:return bZ(Z),XX(),J=Z.memoizedState!==null,G!==null?G.memoizedState!==null!==J&&(Z.flags|=8192):J&&(Z.flags|=8192),J?(z&536870912)!==0&&(Z.flags&128)===0&&(fG(Z),Z.subtreeFlags&6&&(Z.flags|=8192)):fG(Z),z=Z.updateQueue,z!==null&&a9(Z,z.retryQueue),z=null,G!==null&&G.memoizedState!==null&&G.memoizedState.cachePool!==null&&(z=G.memoizedState.cachePool.pool),J=null,Z.memoizedState!==null&&Z.memoizedState.cachePool!==null&&(J=Z.memoizedState.cachePool.pool),J!==z&&(Z.flags|=2048),G!==null&&YZ(qz),null;case 24:return z=null,G!==null&&(z=G.memoizedState.cache),Z.memoizedState.cache!==z&&(Z.flags|=2048),n6(oG),fG(Z),null;case 25:return null;case 30:return null}throw Error(h(156,Z.tag))}function BM(G,Z){switch(zX(Z),Z.tag){case 1:return G=Z.flags,G&65536?(Z.flags=G&-65537|128,Z):null;case 3:return n6(oG),UJ(),G=Z.flags,(G&65536)!==0&&(G&128)===0?(Z.flags=G&-65537|128,Z):null;case 26:case 27:case 5:return VY(Z),null;case 31:if(Z.memoizedState!==null){if(bZ(Z),Z.alternate===null)throw Error(h(340));Qz()}return G=Z.flags,G&65536?(Z.flags=G&-65537|128,Z):null;case 13:if(bZ(Z),G=Z.memoizedState,G!==null&&G.dehydrated!==null){if(Z.alternate===null)throw Error(h(340));Qz()}return G=Z.flags,G&65536?(Z.flags=G&-65537|128,Z):null;case 19:return YZ(cG),null;case 4:return UJ(),null;case 10:return n6(Z.type),null;case 22:case 23:return bZ(Z),XX(),G!==null&&YZ(qz),G=Z.flags,G&65536?(Z.flags=G&-65537|128,Z):null;case 24:return n6(oG),null;case 25:return null;default:return null}}function cU(G,Z){switch(zX(Z),Z.tag){case 3:n6(oG),UJ();break;case 26:case 27:case 5:VY(Z);break;case 4:UJ();break;case 31:Z.memoizedState!==null&&bZ(Z);break;case 13:bZ(Z);break;case 19:YZ(cG);break;case 10:n6(Z.type);break;case 22:case 23:bZ(Z),XX(),G!==null&&YZ(qz);break;case 24:n6(oG)}}function G9(G,Z){try{var z=Z.updateQueue,J=z!==null?z.lastEffect:null;if(J!==null){var Y=J.next;z=Y;do{if((z.tag&G)===G){J=void 0;var{create:B,inst:H}=z;J=B(),H.destroy=J}z=z.next}while(z!==Y)}}catch(X){UG(Z,Z.return,X)}}function h7(G,Z,z){try{var J=Z.updateQueue,Y=J!==null?J.lastEffect:null;if(Y!==null){var B=Y.next;J=B;do{if((J.tag&G)===G){var H=J.inst,X=H.destroy;if(X!==void 0){H.destroy=void 0,Y=Z;var q=z,A=X;try{A()}catch(U){UG(Y,q,U)}}}J=J.next}while(J!==B)}}catch(U){UG(Z,Z.return,U)}}function lU(G){var Z=G.updateQueue;if(Z!==null){var z=G.stateNode;try{eQ(Z,z)}catch(J){UG(G,G.return,J)}}}function pU(G,Z,z){z.props=Az(G.type,G.memoizedProps),z.state=G.memoizedState;try{z.componentWillUnmount()}catch(J){UG(G,Z,J)}}function $8(G,Z){try{var z=G.ref;if(z!==null){switch(G.tag){case 26:case 27:case 5:var J=G.stateNode;break;case 30:J=G.stateNode;break;default:J=G.stateNode}typeof z==="function"?G.refCleanup=z(J):z.current=J}}catch(Y){UG(G,Z,Y)}}function S6(G,Z){var{ref:z,refCleanup:J}=G;if(z!==null)if(typeof J==="function")try{J()}catch(Y){UG(G,Z,Y)}finally{G.refCleanup=null,G=G.alternate,G!=null&&(G.refCleanup=null)}else if(typeof z==="function")try{z(null)}catch(Y){UG(G,Z,Y)}else z.current=null}function iU(G){var{type:Z,memoizedProps:z,stateNode:J}=G;try{G:switch(Z){case"button":case"input":case"select":case"textarea":z.autoFocus&&J.focus();break G;case"img":z.src?J.src=z.src:z.srcSet&&(J.srcset=z.srcSet)}}catch(Y){UG(G,G.return,Y)}}function kB(G,Z,z){try{var J=G.stateNode;fM(J,G.type,z,Z),J[CZ]=Z}catch(Y){UG(G,G.return,Y)}}function sU(G){return G.tag===5||G.tag===3||G.tag===26||G.tag===27&&v7(G.type)||G.tag===4}function bB(G){G:for(;;){for(;G.sibling===null;){if(G.return===null||sU(G.return))return null;G=G.return}G.sibling.return=G.return;for(G=G.sibling;G.tag!==5&&G.tag!==6&&G.tag!==18;){if(G.tag===27&&v7(G.type))continue G;if(G.flags&2)continue G;if(G.child===null||G.tag===4)continue G;else G.child.return=G,G=G.child}if(!(G.flags&2))return G.stateNode}}function DH(G,Z,z){var J=G.tag;if(J===5||J===6)G=G.stateNode,Z?(z.nodeType===9?z.body:z.nodeName==="HTML"?z.ownerDocument.body:z).insertBefore(G,Z):(Z=z.nodeType===9?z.body:z.nodeName==="HTML"?z.ownerDocument.body:z,Z.appendChild(G),z=z._reactRootContainer,z!==null&&z!==void 0||Z.onclick!==null||(Z.onclick=r6));else if(J!==4&&(J===27&&v7(G.type)&&(z=G.stateNode,Z=null),G=G.child,G!==null))for(DH(G,Z,z),G=G.sibling;G!==null;)DH(G,Z,z),G=G.sibling}function kY(G,Z,z){var J=G.tag;if(J===5||J===6)G=G.stateNode,Z?z.insertBefore(G,Z):z.appendChild(G);else if(J!==4&&(J===27&&v7(G.type)&&(z=G.stateNode),G=G.child,G!==null))for(kY(G,Z,z),G=G.sibling;G!==null;)kY(G,Z,z),G=G.sibling}function rU(G){var{stateNode:Z,memoizedProps:z}=G;try{for(var J=G.type,Y=Z.attributes;Y.length;)Z.removeAttributeNode(Y[0]);jZ(Z,J,z),Z[XZ]=G,Z[CZ]=z}catch(B){UG(G,G.return,B)}}var i6=!1,rG=!1,EB=!1,Tj=typeof WeakSet==="function"?WeakSet:Set,zZ=null;function HM(G,Z){if(G=G.containerInfo,xH=lY,G=EQ(G),nH(G)){if("selectionStart"in G)var z={start:G.selectionStart,end:G.selectionEnd};else G:{z=(z=G.ownerDocument)&&z.defaultView||window;var J=z.getSelection&&z.getSelection();if(J&&J.rangeCount!==0){z=J.anchorNode;var{anchorOffset:Y,focusNode:B}=J;J=J.focusOffset;try{z.nodeType,B.nodeType}catch(x){z=null;break G}var H=0,X=-1,q=-1,A=0,U=0,V=G,L=null;Z:for(;;){for(var D;;){if(V!==z||Y!==0&&V.nodeType!==3||(X=H+Y),V!==B||J!==0&&V.nodeType!==3||(q=H+J),V.nodeType===3&&(H+=V.nodeValue.length),(D=V.firstChild)===null)break;L=V,V=D}for(;;){if(V===G)break Z;if(L===z&&++A===Y&&(X=H),L===B&&++U===J&&(q=H),(D=V.nextSibling)!==null)break;V=L,L=V.parentNode}V=D}z=X===-1||q===-1?null:{start:X,end:q}}else z=null}z=z||{start:0,end:0}}else z=null;PH={focusedElem:G,selectionRange:z},lY=!1;for(zZ=Z;zZ!==null;)if(Z=zZ,G=Z.child,(Z.subtreeFlags&1028)!==0&&G!==null)G.return=Z,zZ=G;else for(;zZ!==null;){switch(Z=zZ,B=Z.alternate,G=Z.flags,Z.tag){case 0:if((G&4)!==0&&(G=Z.updateQueue,G=G!==null?G.events:null,G!==null))for(z=0;z<G.length;z++)Y=G[z],Y.ref.impl=Y.nextImpl;break;case 11:case 15:break;case 1:if((G&1024)!==0&&B!==null){G=void 0,z=Z,Y=B.memoizedProps,B=B.memoizedState,J=z.stateNode;try{var f=Az(z.type,Y);G=J.getSnapshotBeforeUpdate(f,B),J.__reactInternalSnapshotBeforeUpdate=G}catch(x){UG(z,z.return,x)}}break;case 3:if((G&1024)!==0){if(G=Z.stateNode.containerInfo,z=G.nodeType,z===9)bH(G);else if(z===1)switch(G.nodeName){case"HEAD":case"HTML":case"BODY":bH(G);break;default:G.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((G&1024)!==0)throw Error(h(163))}if(G=Z.sibling,G!==null){G.return=Z.return,zZ=G;break}zZ=Z.return}}function oU(G,Z,z){var J=z.flags;switch(z.tag){case 0:case 11:case 15:c6(G,z),J&4&&G9(5,z);break;case 1:if(c6(G,z),J&4)if(G=z.stateNode,Z===null)try{G.componentDidMount()}catch(H){UG(z,z.return,H)}else{var Y=Az(z.type,Z.memoizedProps);Z=Z.memoizedState;try{G.componentDidUpdate(Y,Z,G.__reactInternalSnapshotBeforeUpdate)}catch(H){UG(z,z.return,H)}}J&64&&lU(z),J&512&&$8(z,z.return);break;case 3:if(c6(G,z),J&64&&(G=z.updateQueue,G!==null)){if(Z=null,z.child!==null)switch(z.child.tag){case 27:case 5:Z=z.child.stateNode;break;case 1:Z=z.child.stateNode}try{eQ(G,Z)}catch(H){UG(z,z.return,H)}}break;case 27:Z===null&&J&4&&rU(z);case 26:case 5:c6(G,z),Z===null&&J&4&&iU(z),J&512&&$8(z,z.return);break;case 12:c6(G,z);break;case 31:c6(G,z),J&4&&tU(G,z);break;case 13:c6(G,z),J&4&&eU(G,z),J&64&&(G=z.memoizedState,G!==null&&(G=G.dehydrated,G!==null&&(z=AM.bind(null,z),kM(G,z))));break;case 22:if(J=z.memoizedState!==null||i6,!J){Z=Z!==null&&Z.memoizedState!==null||rG,Y=i6;var B=rG;i6=J,(rG=Z)&&!B?l6(G,z,(z.subtreeFlags&8772)!==0):c6(G,z),i6=Y,rG=B}break;case 30:break;default:c6(G,z)}}function aU(G){var Z=G.alternate;Z!==null&&(G.alternate=null,aU(Z)),G.child=null,G.deletions=null,G.sibling=null,G.tag===5&&(Z=G.stateNode,Z!==null&&pH(Z)),G.stateNode=null,G.return=null,G.dependencies=null,G.memoizedProps=null,G.memoizedState=null,G.pendingProps=null,G.stateNode=null,G.updateQueue=null}var SG=null,fZ=!1;function d6(G,Z,z){for(z=z.child;z!==null;)nU(G,Z,z),z=z.sibling}function nU(G,Z,z){if(gZ&&typeof gZ.onCommitFiberUnmount==="function")try{gZ.onCommitFiberUnmount(s8,z)}catch(B){}switch(z.tag){case 26:rG||S6(z,Z),d6(G,Z,z),z.memoizedState?z.memoizedState.count--:z.stateNode&&(z=z.stateNode,z.parentNode.removeChild(z));break;case 27:rG||S6(z,Z);var J=SG,Y=fZ;v7(z.type)&&(SG=z.stateNode,fZ=!1),d6(G,Z,z),x8(z.stateNode),SG=J,fZ=Y;break;case 5:rG||S6(z,Z);case 6:if(J=SG,Y=fZ,SG=null,d6(G,Z,z),SG=J,fZ=Y,SG!==null)if(fZ)try{(SG.nodeType===9?SG.body:SG.nodeName==="HTML"?SG.ownerDocument.body:SG).removeChild(z.stateNode)}catch(B){UG(z,Z,B)}else try{SG.removeChild(z.stateNode)}catch(B){UG(z,Z,B)}break;case 18:SG!==null&&(fZ?(G=SG,dj(G.nodeType===9?G.body:G.nodeName==="HTML"?G.ownerDocument.body:G,z.stateNode),DJ(G)):dj(SG,z.stateNode));break;case 4:J=SG,Y=fZ,SG=z.stateNode.containerInfo,fZ=!0,d6(G,Z,z),SG=J,fZ=Y;break;case 0:case 11:case 14:case 15:h7(2,z,Z),rG||h7(4,z,Z),d6(G,Z,z);break;case 1:rG||(S6(z,Z),J=z.stateNode,typeof J.componentWillUnmount==="function"&&pU(z,Z,J)),d6(G,Z,z);break;case 21:d6(G,Z,z);break;case 22:rG=(J=rG)||z.memoizedState!==null,d6(G,Z,z),rG=J;break;default:d6(G,Z,z)}}function tU(G,Z){if(Z.memoizedState===null&&(G=Z.alternate,G!==null&&(G=G.memoizedState,G!==null))){G=G.dehydrated;try{DJ(G)}catch(z){UG(Z,Z.return,z)}}}function eU(G,Z){if(Z.memoizedState===null&&(G=Z.alternate,G!==null&&(G=G.memoizedState,G!==null&&(G=G.dehydrated,G!==null))))try{DJ(G)}catch(z){UG(Z,Z.return,z)}}function XM(G){switch(G.tag){case 31:case 13:case 19:var Z=G.stateNode;return Z===null&&(Z=G.stateNode=new Tj),Z;case 22:return G=G.stateNode,Z=G._retryCache,Z===null&&(Z=G._retryCache=new Tj),Z;default:throw Error(h(435,G.tag))}}function n9(G,Z){var z=XM(G);Z.forEach(function(J){if(!z.has(J)){z.add(J);var Y=FM.bind(null,G,J);J.then(Y,Y)}})}function KZ(G,Z){var z=Z.deletions;if(z!==null)for(var J=0;J<z.length;J++){var Y=z[J],B=G,H=Z,X=H;G:for(;X!==null;){switch(X.tag){case 27:if(v7(X.type)){SG=X.stateNode,fZ=!1;break G}break;case 5:SG=X.stateNode,fZ=!1;break G;case 3:case 4:SG=X.stateNode.containerInfo,fZ=!0;break G}X=X.return}if(SG===null)throw Error(h(160));nU(B,H,Y),SG=null,fZ=!1,B=Y.alternate,B!==null&&(B.return=null),Y.return=null}if(Z.subtreeFlags&13886)for(Z=Z.child;Z!==null;)GL(Z,G),Z=Z.sibling}var A6=null;function GL(G,Z){var{alternate:z,flags:J}=G;switch(G.tag){case 0:case 11:case 14:case 15:KZ(Z,G),IZ(G),J&4&&(h7(3,G,G.return),G9(3,G),h7(5,G,G.return));break;case 1:KZ(Z,G),IZ(G),J&512&&(rG||z===null||S6(z,z.return)),J&64&&i6&&(G=G.updateQueue,G!==null&&(J=G.callbacks,J!==null&&(z=G.shared.hiddenCallbacks,G.shared.hiddenCallbacks=z===null?J:z.concat(J))));break;case 26:var Y=A6;if(KZ(Z,G),IZ(G),J&512&&(rG||z===null||S6(z,z.return)),J&4){var B=z!==null?z.memoizedState:null;if(J=G.memoizedState,z===null)if(J===null)if(G.stateNode===null){G:{J=G.type,z=G.memoizedProps,Y=Y.ownerDocument||Y;Z:switch(J){case"title":if(B=Y.getElementsByTagName("title")[0],!B||B[a8]||B[XZ]||B.namespaceURI==="http://www.w3.org/2000/svg"||B.hasAttribute("itemprop"))B=Y.createElement(J),Y.head.insertBefore(B,Y.querySelector("head > title"));jZ(B,J,z),B[XZ]=G,JZ(B),J=B;break G;case"link":var H=oj("link","href",Y).get(J+(z.href||""));if(H){for(var X=0;X<H.length;X++)if(B=H[X],B.getAttribute("href")===(z.href==null||z.href===""?null:z.href)&&B.getAttribute("rel")===(z.rel==null?null:z.rel)&&B.getAttribute("title")===(z.title==null?null:z.title)&&B.getAttribute("crossorigin")===(z.crossOrigin==null?null:z.crossOrigin)){H.splice(X,1);break Z}}B=Y.createElement(J),jZ(B,J,z),Y.head.appendChild(B);break;case"meta":if(H=oj("meta","content",Y).get(J+(z.content||""))){for(X=0;X<H.length;X++)if(B=H[X],B.getAttribute("content")===(z.content==null?null:""+z.content)&&B.getAttribute("name")===(z.name==null?null:z.name)&&B.getAttribute("property")===(z.property==null?null:z.property)&&B.getAttribute("http-equiv")===(z.httpEquiv==null?null:z.httpEquiv)&&B.getAttribute("charset")===(z.charSet==null?null:z.charSet)){H.splice(X,1);break Z}}B=Y.createElement(J),jZ(B,J,z),Y.head.appendChild(B);break;default:throw Error(h(468,J))}B[XZ]=G,JZ(B),J=B}G.stateNode=J}else aj(Y,G.type,G.stateNode);else G.stateNode=rj(Y,J,G.memoizedProps);else B!==J?(B===null?z.stateNode!==null&&(z=z.stateNode,z.parentNode.removeChild(z)):B.count--,J===null?aj(Y,G.type,G.stateNode):rj(Y,J,G.memoizedProps)):J===null&&G.stateNode!==null&&kB(G,G.memoizedProps,z.memoizedProps)}break;case 27:KZ(Z,G),IZ(G),J&512&&(rG||z===null||S6(z,z.return)),z!==null&&J&4&&kB(G,G.memoizedProps,z.memoizedProps);break;case 5:if(KZ(Z,G),IZ(G),J&512&&(rG||z===null||S6(z,z.return)),G.flags&32){Y=G.stateNode;try{_J(Y,"")}catch(f){UG(G,G.return,f)}}J&4&&G.stateNode!=null&&(Y=G.memoizedProps,kB(G,Y,z!==null?z.memoizedProps:Y)),J&1024&&(EB=!0);break;case 6:if(KZ(Z,G),IZ(G),J&4){if(G.stateNode===null)throw Error(h(162));J=G.memoizedProps,z=G.stateNode;try{z.nodeValue=J}catch(f){UG(G,G.return,f)}}break;case 3:if(_Y=null,Y=A6,A6=mY(Z.containerInfo),KZ(Z,G),A6=Y,IZ(G),J&4&&z!==null&&z.memoizedState.isDehydrated)try{DJ(Z.containerInfo)}catch(f){UG(G,G.return,f)}EB&&(EB=!1,ZL(G));break;case 4:J=A6,A6=mY(G.stateNode.containerInfo),KZ(Z,G),IZ(G),A6=J;break;case 12:KZ(Z,G),IZ(G);break;case 31:KZ(Z,G),IZ(G),J&4&&(J=G.updateQueue,J!==null&&(G.updateQueue=null,n9(G,J)));break;case 13:KZ(Z,G),IZ(G),G.child.flags&8192&&G.memoizedState!==null!==(z!==null&&z.memoizedState!==null)&&(J4=yZ()),J&4&&(J=G.updateQueue,J!==null&&(G.updateQueue=null,n9(G,J)));break;case 22:Y=G.memoizedState!==null;var q=z!==null&&z.memoizedState!==null,A=i6,U=rG;if(i6=A||Y,rG=U||q,KZ(Z,G),rG=U,i6=A,IZ(G),J&8192)G:for(Z=G.stateNode,Z._visibility=Y?Z._visibility&-2:Z._visibility|1,Y&&(z===null||q||i6||rG||Bz(G)),z=null,Z=G;;){if(Z.tag===5||Z.tag===26){if(z===null){q=z=Z;try{if(B=q.stateNode,Y)H=B.style,typeof H.setProperty==="function"?H.setProperty("display","none","important"):H.display="none";else{X=q.stateNode;var V=q.memoizedProps.style,L=V!==void 0&&V!==null&&V.hasOwnProperty("display")?V.display:null;X.style.display=L==null||typeof L==="boolean"?"":(""+L).trim()}}catch(f){UG(q,q.return,f)}}}else if(Z.tag===6){if(z===null){q=Z;try{q.stateNode.nodeValue=Y?"":q.memoizedProps}catch(f){UG(q,q.return,f)}}}else if(Z.tag===18){if(z===null){q=Z;try{var D=q.stateNode;Y?cj(D,!0):cj(q.stateNode,!1)}catch(f){UG(q,q.return,f)}}}else if((Z.tag!==22&&Z.tag!==23||Z.memoizedState===null||Z===G)&&Z.child!==null){Z.child.return=Z,Z=Z.child;continue}if(Z===G)break G;for(;Z.sibling===null;){if(Z.return===null||Z.return===G)break G;z===Z&&(z=null),Z=Z.return}z===Z&&(z=null),Z.sibling.return=Z.return,Z=Z.sibling}J&4&&(J=G.updateQueue,J!==null&&(z=J.retryQueue,z!==null&&(J.retryQueue=null,n9(G,z))));break;case 19:KZ(Z,G),IZ(G),J&4&&(J=G.updateQueue,J!==null&&(G.updateQueue=null,n9(G,J)));break;case 30:break;case 21:break;default:KZ(Z,G),IZ(G)}}function IZ(G){var Z=G.flags;if(Z&2){try{for(var z,J=G.return;J!==null;){if(sU(J)){z=J;break}J=J.return}if(z==null)throw Error(h(160));switch(z.tag){case 27:var Y=z.stateNode,B=bB(G);kY(G,B,Y);break;case 5:var H=z.stateNode;z.flags&32&&(_J(H,""),z.flags&=-33);var X=bB(G);kY(G,X,H);break;case 3:case 4:var q=z.stateNode.containerInfo,A=bB(G);DH(G,A,q);break;default:throw Error(h(161))}}catch(U){UG(G,G.return,U)}G.flags&=-3}Z&4096&&(G.flags&=-4097)}function ZL(G){if(G.subtreeFlags&1024)for(G=G.child;G!==null;){var Z=G;ZL(Z),Z.tag===5&&Z.flags&1024&&Z.stateNode.reset(),G=G.sibling}}function c6(G,Z){if(Z.subtreeFlags&8772)for(Z=Z.child;Z!==null;)oU(G,Z.alternate,Z),Z=Z.sibling}function Bz(G){for(G=G.child;G!==null;){var Z=G;switch(Z.tag){case 0:case 11:case 14:case 15:h7(4,Z,Z.return),Bz(Z);break;case 1:S6(Z,Z.return);var z=Z.stateNode;typeof z.componentWillUnmount==="function"&&pU(Z,Z.return,z),Bz(Z);break;case 27:x8(Z.stateNode);case 26:case 5:S6(Z,Z.return),Bz(Z);break;case 22:Z.memoizedState===null&&Bz(Z);break;case 30:Bz(Z);break;default:Bz(Z)}G=G.sibling}}function l6(G,Z,z){z=z&&(Z.subtreeFlags&8772)!==0;for(Z=Z.child;Z!==null;){var J=Z.alternate,Y=G,B=Z,H=B.flags;switch(B.tag){case 0:case 11:case 15:l6(Y,B,z),G9(4,B);break;case 1:if(l6(Y,B,z),J=B,Y=J.stateNode,typeof Y.componentDidMount==="function")try{Y.componentDidMount()}catch(A){UG(J,J.return,A)}if(J=B,Y=J.updateQueue,Y!==null){var X=J.stateNode;try{var q=Y.shared.hiddenCallbacks;if(q!==null)for(Y.shared.hiddenCallbacks=null,Y=0;Y<q.length;Y++)tQ(q[Y],X)}catch(A){UG(J,J.return,A)}}z&&H&64&&lU(B),$8(B,B.return);break;case 27:rU(B);case 26:case 5:l6(Y,B,z),z&&J===null&&H&4&&iU(B),$8(B,B.return);break;case 12:l6(Y,B,z);break;case 31:l6(Y,B,z),z&&H&4&&tU(Y,B);break;case 13:l6(Y,B,z),z&&H&4&&eU(Y,B);break;case 22:B.memoizedState===null&&l6(Y,B,z),$8(B,B.return);break;case 30:break;default:l6(Y,B,z)}Z=Z.sibling}}function KX(G,Z){var z=null;G!==null&&G.memoizedState!==null&&G.memoizedState.cachePool!==null&&(z=G.memoizedState.cachePool.pool),G=null,Z.memoizedState!==null&&Z.memoizedState.cachePool!==null&&(G=Z.memoizedState.cachePool.pool),G!==z&&(G!=null&&G.refCount++,z!=null&&t8(z))}function IX(G,Z){G=null,Z.alternate!==null&&(G=Z.alternate.memoizedState.cache),Z=Z.memoizedState.cache,Z!==G&&(Z.refCount++,G!=null&&t8(G))}function _6(G,Z,z,J){if(Z.subtreeFlags&10256)for(Z=Z.child;Z!==null;)zL(G,Z,z,J),Z=Z.sibling}function zL(G,Z,z,J){var Y=Z.flags;switch(Z.tag){case 0:case 11:case 15:_6(G,Z,z,J),Y&2048&&G9(9,Z);break;case 1:_6(G,Z,z,J);break;case 3:_6(G,Z,z,J),Y&2048&&(G=null,Z.alternate!==null&&(G=Z.alternate.memoizedState.cache),Z=Z.memoizedState.cache,Z!==G&&(Z.refCount++,G!=null&&t8(G)));break;case 12:if(Y&2048){_6(G,Z,z,J),G=Z.stateNode;try{var B=Z.memoizedProps,H=B.id,X=B.onPostCommit;typeof X==="function"&&X(H,Z.alternate===null?"mount":"update",G.passiveEffectDuration,-0)}catch(q){UG(Z,Z.return,q)}}else _6(G,Z,z,J);break;case 31:_6(G,Z,z,J);break;case 13:_6(G,Z,z,J);break;case 23:break;case 22:B=Z.stateNode,H=Z.alternate,Z.memoizedState!==null?B._visibility&2?_6(G,Z,z,J):C8(G,Z):B._visibility&2?_6(G,Z,z,J):(B._visibility|=2,lz(G,Z,z,J,(Z.subtreeFlags&10256)!==0||!1)),Y&2048&&KX(H,Z);break;case 24:_6(G,Z,z,J),Y&2048&&IX(Z.alternate,Z);break;default:_6(G,Z,z,J)}}function lz(G,Z,z,J,Y){Y=Y&&((Z.subtreeFlags&10256)!==0||!1);for(Z=Z.child;Z!==null;){var B=G,H=Z,X=z,q=J,A=H.flags;switch(H.tag){case 0:case 11:case 15:lz(B,H,X,q,Y),G9(8,H);break;case 23:break;case 22:var U=H.stateNode;H.memoizedState!==null?U._visibility&2?lz(B,H,X,q,Y):C8(B,H):(U._visibility|=2,lz(B,H,X,q,Y)),Y&&A&2048&&KX(H.alternate,H);break;case 24:lz(B,H,X,q,Y),Y&&A&2048&&IX(H.alternate,H);break;default:lz(B,H,X,q,Y)}Z=Z.sibling}}function C8(G,Z){if(Z.subtreeFlags&10256)for(Z=Z.child;Z!==null;){var z=G,J=Z,Y=J.flags;switch(J.tag){case 22:C8(z,J),Y&2048&&KX(J.alternate,J);break;case 24:C8(z,J),Y&2048&&IX(J.alternate,J);break;default:C8(z,J)}Z=Z.sibling}}var F8=8192;function cz(G,Z,z){if(G.subtreeFlags&F8)for(G=G.child;G!==null;)JL(G,Z,z),G=G.sibling}function JL(G,Z,z){switch(G.tag){case 26:cz(G,Z,z),G.flags&F8&&G.memoizedState!==null&&pM(z,A6,G.memoizedState,G.memoizedProps);break;case 5:cz(G,Z,z);break;case 3:case 4:var J=A6;A6=mY(G.stateNode.containerInfo),cz(G,Z,z),A6=J;break;case 22:G.memoizedState===null&&(J=G.alternate,J!==null&&J.memoizedState!==null?(J=F8,F8=16777216,cz(G,Z,z),F8=J):cz(G,Z,z));break;default:cz(G,Z,z)}}function YL(G){var Z=G.alternate;if(Z!==null&&(G=Z.child,G!==null)){Z.child=null;do Z=G.sibling,G.sibling=null,G=Z;while(G!==null)}}function q8(G){var Z=G.deletions;if((G.flags&16)!==0){if(Z!==null)for(var z=0;z<Z.length;z++){var J=Z[z];zZ=J,HL(J,G)}YL(G)}if(G.subtreeFlags&10256)for(G=G.child;G!==null;)BL(G),G=G.sibling}function BL(G){switch(G.tag){case 0:case 11:case 15:q8(G),G.flags&2048&&h7(9,G,G.return);break;case 3:q8(G);break;case 12:q8(G);break;case 22:var Z=G.stateNode;G.memoizedState!==null&&Z._visibility&2&&(G.return===null||G.return.tag!==13)?(Z._visibility&=-3,UY(G)):q8(G);break;default:q8(G)}}function UY(G){var Z=G.deletions;if((G.flags&16)!==0){if(Z!==null)for(var z=0;z<Z.length;z++){var J=Z[z];zZ=J,HL(J,G)}YL(G)}for(G=G.child;G!==null;){switch(Z=G,Z.tag){case 0:case 11:case 15:h7(8,Z,Z.return),UY(Z);break;case 22:z=Z.stateNode,z._visibility&2&&(z._visibility&=-3,UY(Z));break;default:UY(Z)}G=G.sibling}}function HL(G,Z){for(;zZ!==null;){var z=zZ;switch(z.tag){case 0:case 11:case 15:h7(8,z,Z);break;case 23:case 22:if(z.memoizedState!==null&&z.memoizedState.cachePool!==null){var J=z.memoizedState.cachePool.pool;J!=null&&J.refCount++}break;case 24:t8(z.memoizedState.cache)}if(J=z.child,J!==null)J.return=z,zZ=J;else G:for(z=G;zZ!==null;){J=zZ;var{sibling:Y,return:B}=J;if(aU(J),J===z){zZ=null;break G}if(Y!==null){Y.return=B,zZ=Y;break G}zZ=B}}}var qM={getCacheForType:function(G){var Z=WZ(oG),z=Z.data.get(G);return z===void 0&&(z=G(),Z.data.set(G,z)),z},cacheSignal:function(){return WZ(oG).controller.signal}},WM=typeof WeakMap==="function"?WeakMap:Map,YG=0,RG=null,d0=null,p0=0,QG=0,kZ=null,D7=!1,$J=!1,fX=!1,J7=0,gG=0,y7=0,jz=0,NX=0,hZ=0,OJ=0,T8=null,NZ=null,KH=!1,J4=0,XL=0,bY=1/0,EY=null,T7=null,eG=0,S7=null,VJ=null,t6=0,IH=0,fH=null,qL=null,S8=0,NH=null;function uZ(){return(YG&2)!==0&&p0!==0?p0&-p0:K0.T!==null?CX():MQ()}function WL(){if(hZ===0)if((p0&536870912)===0||i0){var G=c9;c9<<=1,(c9&3932160)===0&&(c9=262144),hZ=G}else hZ=536870912;return G=dZ.current,G!==null&&(G.flags|=32),hZ}function $Z(G,Z,z){if(G===RG&&(QG===2||QG===9)||G.cancelPendingCommit!==null)RJ(G,0),K7(G,p0,hZ,!1);if(o8(G,z),(YG&2)===0||G!==RG)G===RG&&((YG&2)===0&&(jz|=z),gG===4&&K7(G,p0,hZ,!1)),k6(G)}function jL(G,Z,z){if((YG&6)!==0)throw Error(h(327));var J=!z&&(Z&127)===0&&(Z&G.expiredLanes)===0||r8(G,Z),Y=J?UM(G,Z):hB(G,Z,!0),B=J;do{if(Y===0){$J&&!J&&K7(G,Z,0,!1);break}else{if(z=G.current.alternate,B&&!jM(z)){Y=hB(G,Z,!1),B=!1;continue}if(Y===2){if(B=Z,G.errorRecoveryDisabledLanes&B)var H=0;else H=G.pendingLanes&-536870913,H=H!==0?H:H&536870912?536870912:0;if(H!==0){Z=H;G:{var X=G;Y=T8;var q=X.current.memoizedState.isDehydrated;if(q&&(RJ(X,H).flags|=256),H=hB(X,H,!1),H!==2){if(fX&&!q){X.errorRecoveryDisabledLanes|=B,jz|=B,Y=4;break G}B=NZ,NZ=Y,B!==null&&(NZ===null?NZ=B:NZ.push.apply(NZ,B))}Y=H}if(B=!1,Y!==2)continue}}if(Y===1){RJ(G,0),K7(G,Z,0,!0);break}G:{switch(J=G,B=Y,B){case 0:case 1:throw Error(h(345));case 4:if((Z&4194048)!==Z)break;case 6:K7(J,Z,hZ,!D7);break G;case 2:NZ=null;break;case 3:case 5:break;default:throw Error(h(329))}if((Z&62914560)===Z&&(Y=J4+300-yZ(),10<Y)){if(K7(J,Z,hZ,!D7),iY(J,0,!0)!==0)break G;t6=Z,J.timeoutHandle=SL(Sj.bind(null,J,z,NZ,EY,KH,Z,hZ,jz,OJ,D7,B,"Throttled",-0,0),Y);break G}Sj(J,z,NZ,EY,KH,Z,hZ,jz,OJ,D7,B,null,-0,0)}}break}while(1);k6(G)}function Sj(G,Z,z,J,Y,B,H,X,q,A,U,V,L,D){if(G.timeoutHandle=-1,V=Z.subtreeFlags,V&8192||(V&16785408)===16785408){V={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:r6},JL(Z,B,V);var f=(B&62914560)===B?J4-yZ():(B&4194048)===B?XL-yZ():0;if(f=iM(V,f),f!==null){t6=B,G.cancelPendingCommit=f(Pj.bind(null,G,Z,B,z,J,Y,H,X,q,U,V,null,L,D)),K7(G,B,H,!A);return}}Pj(G,Z,B,z,J,Y,H,X,q)}function jM(G){for(var Z=G;;){var z=Z.tag;if((z===0||z===11||z===15)&&Z.flags&16384&&(z=Z.updateQueue,z!==null&&(z=z.stores,z!==null)))for(var J=0;J<z.length;J++){var Y=z[J],B=Y.getSnapshot;Y=Y.value;try{if(!mZ(B(),Y))return!1}catch(H){return!1}}if(z=Z.child,Z.subtreeFlags&16384&&z!==null)z.return=Z,Z=z;else{if(Z===G)break;for(;Z.sibling===null;){if(Z.return===null||Z.return===G)return!0;Z=Z.return}Z.sibling.return=Z.return,Z=Z.sibling}}return!0}function K7(G,Z,z,J){Z&=~NX,Z&=~jz,G.suspendedLanes|=Z,G.pingedLanes&=~Z,J&&(G.warmLanes|=Z),J=G.expirationTimes;for(var Y=Z;0<Y;){var B=31-vZ(Y),H=1<<B;J[B]=-1,Y&=~H}z!==0&&_Q(G,z,Z)}function Y4(){return(YG&6)===0?(Z9(0,!1),!1):!0}function $X(){if(d0!==null){if(QG===0)var G=d0.return;else G=d0,o6=Rz=null,UX(G),WJ=null,g8=0,G=d0;for(;G!==null;)cU(G.alternate,G),G=G.return;d0=null}}function RJ(G,Z){var z=G.timeoutHandle;z!==-1&&(G.timeoutHandle=-1,CM(z)),z=G.cancelPendingCommit,z!==null&&(G.cancelPendingCommit=null,z()),t6=0,$X(),RG=G,d0=z=a6(G.current,null),p0=Z,QG=0,kZ=null,D7=!1,$J=r8(G,Z),fX=!1,OJ=hZ=NX=jz=y7=gG=0,NZ=T8=null,KH=!1,(Z&8)!==0&&(Z|=Z&32);var J=G.entangledLanes;if(J!==0)for(G=G.entanglements,J&=Z;0<J;){var Y=31-vZ(J),B=1<<Y;Z|=G[Y],J&=~B}return J7=Z,aY(),z}function QL(G,Z){k0=null,K0.H=u8,Z===NJ||Z===tY?(Z=qj(),QG=3):Z===BX?(Z=qj(),QG=4):QG=Z===wX?8:Z!==null&&typeof Z==="object"&&typeof Z.then==="function"?6:1,kZ=Z,d0===null&&(gG=1,xY(G,G6(Z,G.current)))}function UL(){var G=dZ.current;return G===null?!0:(p0&4194048)===p0?z6===null?!0:!1:(p0&62914560)===p0||(p0&536870912)!==0?G===z6:!1}function LL(){var G=K0.H;return K0.H=u8,G===null?u8:G}function _L(){var G=K0.A;return K0.A=qM,G}function hY(){gG=4,D7||(p0&4194048)!==p0&&dZ.current!==null||($J=!0),(y7&134217727)===0&&(jz&134217727)===0||RG===null||K7(RG,p0,hZ,!1)}function hB(G,Z,z){var J=YG;YG|=2;var Y=LL(),B=_L();if(RG!==G||p0!==Z)EY=null,RJ(G,Z);Z=!1;var H=gG;G:do try{if(QG!==0&&d0!==null){var X=d0,q=kZ;switch(QG){case 8:$X(),H=6;break G;case 3:case 2:case 9:case 6:dZ.current===null&&(Z=!0);var A=QG;if(QG=0,kZ=null,YJ(G,X,q,A),z&&$J){H=0;break G}break;default:A=QG,QG=0,kZ=null,YJ(G,X,q,A)}}QM(),H=gG;break}catch(U){QL(G,U)}while(1);return Z&&G.shellSuspendCounter++,o6=Rz=null,YG=J,K0.H=Y,K0.A=B,d0===null&&(RG=null,p0=0,aY()),H}function QM(){for(;d0!==null;)AL(d0)}function UM(G,Z){var z=YG;YG|=2;var J=LL(),Y=_L();RG!==G||p0!==Z?(EY=null,bY=yZ()+500,RJ(G,Z)):$J=r8(G,Z);G:do try{if(QG!==0&&d0!==null){Z=d0;var B=kZ;Z:switch(QG){case 1:QG=0,kZ=null,YJ(G,Z,B,1);break;case 2:case 9:if(Xj(B)){QG=0,kZ=null,xj(Z);break}Z=function(){QG!==2&&QG!==9||RG!==G||(QG=7),k6(G)},B.then(Z,Z);break G;case 3:QG=7;break G;case 4:QG=5;break G;case 7:Xj(B)?(QG=0,kZ=null,xj(Z)):(QG=0,kZ=null,YJ(G,Z,B,7));break;case 5:var H=null;switch(d0.tag){case 26:H=d0.memoizedState;case 5:case 27:var X=d0;if(H?EL(H):X.stateNode.complete){QG=0,kZ=null;var q=X.sibling;if(q!==null)d0=q;else{var A=X.return;A!==null?(d0=A,B4(A)):d0=null}break Z}}QG=0,kZ=null,YJ(G,Z,B,5);break;case 6:QG=0,kZ=null,YJ(G,Z,B,6);break;case 8:$X(),gG=6;break G;default:throw Error(h(462))}}LM();break}catch(U){QL(G,U)}while(1);if(o6=Rz=null,K0.H=J,K0.A=Y,YG=z,d0!==null)return 0;return RG=null,p0=0,aY(),gG}function LM(){for(;d0!==null&&!h2();)AL(d0)}function AL(G){var Z=dU(G.alternate,G,J7);G.memoizedProps=G.pendingProps,Z===null?B4(G):d0=Z}function xj(G){var Z=G,z=Z.alternate;switch(Z.tag){case 15:case 0:Z=Ij(z,Z,Z.pendingProps,Z.type,void 0,p0);break;case 11:Z=Ij(z,Z,Z.pendingProps,Z.type.render,Z.ref,p0);break;case 5:UX(Z);default:cU(z,Z),Z=d0=cQ(Z,J7),Z=dU(z,Z,J7)}G.memoizedProps=G.pendingProps,Z===null?B4(G):d0=Z}function YJ(G,Z,z,J){o6=Rz=null,UX(Z),WJ=null,g8=0;var Y=Z.return;try{if(ZM(G,Y,Z,z,p0)){gG=1,xY(G,G6(z,G.current)),d0=null;return}}catch(B){if(Y!==null)throw d0=Y,B;gG=1,xY(G,G6(z,G.current)),d0=null;return}if(Z.flags&32768){if(i0||J===1)G=!0;else if($J||(p0&536870912)!==0)G=!1;else if(D7=G=!0,J===2||J===9||J===3||J===6)J=dZ.current,J!==null&&J.tag===13&&(J.flags|=16384);FL(Z,G)}else B4(Z)}function B4(G){var Z=G;do{if((Z.flags&32768)!==0){FL(Z,D7);return}G=Z.return;var z=YM(Z.alternate,Z,J7);if(z!==null){d0=z;return}if(Z=Z.sibling,Z!==null){d0=Z;return}d0=Z=G}while(Z!==null);gG===0&&(gG=5)}function FL(G,Z){do{var z=BM(G.alternate,G);if(z!==null){z.flags&=32767,d0=z;return}if(z=G.return,z!==null&&(z.flags|=32768,z.subtreeFlags=0,z.deletions=null),!Z&&(G=G.sibling,G!==null)){d0=G;return}d0=G=z}while(G!==null);gG=6,d0=null}function Pj(G,Z,z,J,Y,B,H,X,q){G.cancelPendingCommit=null;do H4();while(eG!==0);if((YG&6)!==0)throw Error(h(327));if(Z!==null){if(Z===G.current)throw Error(h(177));if(B=Z.lanes|Z.childLanes,B|=tH,i2(G,z,B,H,X,q),G===RG&&(d0=RG=null,p0=0),VJ=Z,S7=G,t6=z,IH=B,fH=Y,qL=J,(Z.subtreeFlags&10256)!==0||(Z.flags&10256)!==0?(G.callbackNode=null,G.callbackPriority=0,MM(RY,function(){return wL(),null})):(G.callbackNode=null,G.callbackPriority=0),J=(Z.flags&13878)!==0,(Z.subtreeFlags&13878)!==0||J){J=K0.T,K0.T=null,Y=BG.p,BG.p=2,H=YG,YG|=4;try{HM(G,Z,z)}finally{YG=H,BG.p=Y,K0.T=J}}eG=1,ML(),OL(),VL()}}function ML(){if(eG===1){eG=0;var G=S7,Z=VJ,z=(Z.flags&13878)!==0;if((Z.subtreeFlags&13878)!==0||z){z=K0.T,K0.T=null;var J=BG.p;BG.p=2;var Y=YG;YG|=4;try{GL(Z,G);var B=PH,H=EQ(G.containerInfo),X=B.focusedElem,q=B.selectionRange;if(H!==X&&X&&X.ownerDocument&&bQ(X.ownerDocument.documentElement,X)){if(q!==null&&nH(X)){var{start:A,end:U}=q;if(U===void 0&&(U=A),"selectionStart"in X)X.selectionStart=A,X.selectionEnd=Math.min(U,X.value.length);else{var V=X.ownerDocument||document,L=V&&V.defaultView||window;if(L.getSelection){var D=L.getSelection(),f=X.textContent.length,x=Math.min(q.start,f),T=q.end===void 0?x:Math.min(q.end,f);!D.extend&&x>T&&(H=T,T=x,x=H);var _=Gj(X,x),O=Gj(X,T);if(_&&O&&(D.rangeCount!==1||D.anchorNode!==_.node||D.anchorOffset!==_.offset||D.focusNode!==O.node||D.focusOffset!==O.offset)){var K=V.createRange();K.setStart(_.node,_.offset),D.removeAllRanges(),x>T?(D.addRange(K),D.extend(O.node,O.offset)):(K.setEnd(O.node,O.offset),D.addRange(K))}}}}V=[];for(D=X;D=D.parentNode;)D.nodeType===1&&V.push({element:D,left:D.scrollLeft,top:D.scrollTop});typeof X.focus==="function"&&X.focus();for(X=0;X<V.length;X++){var $=V[X];$.element.scrollLeft=$.left,$.element.scrollTop=$.top}}lY=!!xH,PH=xH=null}finally{YG=Y,BG.p=J,K0.T=z}}G.current=Z,eG=2}}function OL(){if(eG===2){eG=0;var G=S7,Z=VJ,z=(Z.flags&8772)!==0;if((Z.subtreeFlags&8772)!==0||z){z=K0.T,K0.T=null;var J=BG.p;BG.p=2;var Y=YG;YG|=4;try{oU(G,Z.alternate,Z)}finally{YG=Y,BG.p=J,K0.T=z}}eG=3}}function VL(){if(eG===4||eG===3){eG=0,y2();var G=S7,Z=VJ,z=t6,J=qL;(Z.subtreeFlags&10256)!==0||(Z.flags&10256)!==0?eG=5:(eG=0,VJ=S7=null,RL(G,G.pendingLanes));var Y=G.pendingLanes;if(Y===0&&(T7=null),lH(z),Z=Z.stateNode,gZ&&typeof gZ.onCommitFiberRoot==="function")try{gZ.onCommitFiberRoot(s8,Z,void 0,(Z.current.flags&128)===128)}catch(q){}if(J!==null){Z=K0.T,Y=BG.p,BG.p=2,K0.T=null;try{for(var B=G.onRecoverableError,H=0;H<J.length;H++){var X=J[H];B(X.value,{componentStack:X.stack})}}finally{K0.T=Z,BG.p=Y}}(t6&3)!==0&&H4(),k6(G),Y=G.pendingLanes,(z&261930)!==0&&(Y&42)!==0?G===NH?S8++:(S8=0,NH=G):S8=0,Z9(0,!1)}}function RL(G,Z){(G.pooledCacheLanes&=Z)===0&&(Z=G.pooledCache,Z!=null&&(G.pooledCache=null,t8(Z)))}function H4(){return ML(),OL(),VL(),wL()}function wL(){if(eG!==5)return!1;var G=S7,Z=IH;IH=0;var z=lH(t6),J=K0.T,Y=BG.p;try{BG.p=32>z?32:z,K0.T=null,z=fH,fH=null;var B=S7,H=t6;if(eG=0,VJ=S7=null,t6=0,(YG&6)!==0)throw Error(h(331));var X=YG;if(YG|=4,BL(B.current),zL(B,B.current,H,z),YG=X,Z9(0,!1),gZ&&typeof gZ.onPostCommitFiberRoot==="function")try{gZ.onPostCommitFiberRoot(s8,B)}catch(q){}return!0}finally{BG.p=Y,K0.T=J,RL(G,Z)}}function kj(G,Z,z){Z=G6(z,Z),Z=VH(G.stateNode,Z,2),G=C7(G,Z,2),G!==null&&(o8(G,2),k6(G))}function UG(G,Z,z){if(G.tag===3)kj(G,G,z);else for(;Z!==null;){if(Z.tag===3){kj(Z,G,z);break}else if(Z.tag===1){var J=Z.stateNode;if(typeof Z.type.getDerivedStateFromError==="function"||typeof J.componentDidCatch==="function"&&(T7===null||!T7.has(J))){G=G6(z,G),z=hU(2),J=C7(Z,z,2),J!==null&&(yU(z,J,Z,G),o8(J,2),k6(J));break}}Z=Z.return}}function yB(G,Z,z){var J=G.pingCache;if(J===null){J=G.pingCache=new WM;var Y=new Set;J.set(Z,Y)}else Y=J.get(Z),Y===void 0&&(Y=new Set,J.set(Z,Y));Y.has(z)||(fX=!0,Y.add(z),G=_M.bind(null,G,Z,z),Z.then(G,G))}function _M(G,Z,z){var J=G.pingCache;J!==null&&J.delete(Z),G.pingedLanes|=G.suspendedLanes&z,G.warmLanes&=~z,RG===G&&(p0&z)===z&&(gG===4||gG===3&&(p0&62914560)===p0&&300>yZ()-J4?(YG&2)===0&&RJ(G,0):NX|=z,OJ===p0&&(OJ=0)),k6(G)}function DL(G,Z){Z===0&&(Z=LQ()),G=Vz(G,Z),G!==null&&(o8(G,Z),k6(G))}function AM(G){var Z=G.memoizedState,z=0;Z!==null&&(z=Z.retryLane),DL(G,z)}function FM(G,Z){var z=0;switch(G.tag){case 31:case 13:var{stateNode:J,memoizedState:Y}=G;Y!==null&&(z=Y.retryLane);break;case 19:J=G.stateNode;break;case 22:J=G.stateNode._retryCache;break;default:throw Error(h(314))}J!==null&&J.delete(Z),DL(G,z)}function MM(G,Z){return dH(G,Z)}var yY=null,pz=null,$H=!1,gY=!1,gB=!1,I7=0;function k6(G){G!==pz&&G.next===null&&(pz===null?yY=pz=G:pz=pz.next=G),gY=!0,$H||($H=!0,VM())}function Z9(G,Z){if(!gB&&gY){gB=!0;do{var z=!1;for(var J=yY;J!==null;){if(!Z)if(G!==0){var Y=J.pendingLanes;if(Y===0)var B=0;else{var{suspendedLanes:H,pingedLanes:X}=J;B=(1<<31-vZ(42|G)+1)-1,B&=Y&~(H&~X),B=B&201326741?B&201326741|1:B?B|2:0}B!==0&&(z=!0,bj(J,B))}else B=p0,B=iY(J,J===RG?B:0,J.cancelPendingCommit!==null||J.timeoutHandle!==-1),(B&3)===0||r8(J,B)||(z=!0,bj(J,B));J=J.next}}while(z);gB=!1}}function OM(){KL()}function KL(){gY=$H=!1;var G=0;I7!==0&&$M()&&(G=I7);for(var Z=yZ(),z=null,J=yY;J!==null;){var Y=J.next,B=IL(J,Z);if(B===0)J.next=null,z===null?yY=Y:z.next=Y,Y===null&&(pz=z);else if(z=J,G!==0||(B&3)!==0)gY=!0;J=Y}eG!==0&&eG!==5||Z9(G,!1),I7!==0&&(I7=0)}function IL(G,Z){for(var{suspendedLanes:z,pingedLanes:J,expirationTimes:Y}=G,B=G.pendingLanes&-62914561;0<B;){var H=31-vZ(B),X=1<<H,q=Y[H];if(q===-1){if((X&z)===0||(X&J)!==0)Y[H]=p2(X,Z)}else q<=Z&&(G.expiredLanes|=X);B&=~X}if(Z=RG,z=p0,z=iY(G,G===Z?z:0,G.cancelPendingCommit!==null||G.timeoutHandle!==-1),J=G.callbackNode,z===0||G===Z&&(QG===2||QG===9)||G.cancelPendingCommit!==null)return J!==null&&J!==null&&_B(J),G.callbackNode=null,G.callbackPriority=0;if((z&3)===0||r8(G,z)){if(Z=z&-z,Z===G.callbackPriority)return Z;switch(J!==null&&_B(J),lH(z)){case 2:case 8:z=QQ;break;case 32:z=RY;break;case 268435456:z=UQ;break;default:z=RY}return J=fL.bind(null,G),z=dH(z,J),G.callbackPriority=Z,G.callbackNode=z,Z}return J!==null&&J!==null&&_B(J),G.callbackPriority=2,G.callbackNode=null,2}function fL(G,Z){if(eG!==0&&eG!==5)return G.callbackNode=null,G.callbackPriority=0,null;var z=G.callbackNode;if(H4()&&G.callbackNode!==z)return null;var J=p0;if(J=iY(G,G===RG?J:0,G.cancelPendingCommit!==null||G.timeoutHandle!==-1),J===0)return null;return jL(G,J,Z),IL(G,yZ()),G.callbackNode!=null&&G.callbackNode===z?fL.bind(null,G):null}function bj(G,Z){if(H4())return null;jL(G,Z,!0)}function VM(){TM(function(){(YG&6)!==0?dH(jQ,OM):KL()})}function CX(){if(I7===0){var G=AJ;G===0&&(G=d9,d9<<=1,(d9&261888)===0&&(d9=256)),I7=G}return I7}function Ej(G){return G==null||typeof G==="symbol"||typeof G==="boolean"?null:typeof G==="function"?G:zY(""+G)}function hj(G,Z){var z=Z.ownerDocument.createElement("input");return z.name=Z.name,z.value=Z.value,G.id&&z.setAttribute("form",G.id),Z.parentNode.insertBefore(z,Z),G=new FormData(G),z.parentNode.removeChild(z),G}function RM(G,Z,z,J,Y){if(Z==="submit"&&z&&z.stateNode===Y){var B=Ej((Y[CZ]||null).action),H=J.submitter;H&&(Z=(Z=H[CZ]||null)?Ej(Z.formAction):H.getAttribute("formAction"),Z!==null&&(B=Z,H=null));var X=new sY("action","action",null,J,Y);G.push({event:X,listeners:[{instance:null,listener:function(){if(J.defaultPrevented){if(I7!==0){var q=H?hj(Y,H):new FormData(Y);MH(z,{pending:!0,data:q,method:Y.method,action:B},null,q)}}else typeof B==="function"&&(X.preventDefault(),q=H?hj(Y,H):new FormData(Y),MH(z,{pending:!0,data:q,method:Y.method,action:B},B,q))},currentTarget:Y}]})}}for(M8=0;M8<BH.length;M8++)O8=BH[M8],CH=O8.toLowerCase(),TH=O8[0].toUpperCase()+O8.slice(1),F6(CH,"on"+TH);var O8,CH,TH,M8;F6(yQ,"onAnimationEnd");F6(gQ,"onAnimationIteration");F6(vQ,"onAnimationStart");F6("dblclick","onDoubleClick");F6("focusin","onFocus");F6("focusout","onBlur");F6(gF,"onTransitionRun");F6(vF,"onTransitionStart");F6(uF,"onTransitionCancel");F6(uQ,"onTransitionEnd");LJ("onMouseEnter",["mouseout","mouseover"]);LJ("onMouseLeave",["mouseout","mouseover"]);LJ("onPointerEnter",["pointerout","pointerover"]);LJ("onPointerLeave",["pointerout","pointerover"]);Fz("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fz("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fz("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fz("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fz("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fz("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var m8="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(m8));function NL(G,Z){Z=(Z&4)!==0;for(var z=0;z<G.length;z++){var J=G[z],Y=J.event;J=J.listeners;G:{var B=void 0;if(Z)for(var H=J.length-1;0<=H;H--){var X=J[H],q=X.instance,A=X.currentTarget;if(X=X.listener,q!==B&&Y.isPropagationStopped())break G;B=X,Y.currentTarget=A;try{B(Y)}catch(U){DY(U)}Y.currentTarget=null,B=q}else for(H=0;H<J.length;H++){if(X=J[H],q=X.instance,A=X.currentTarget,X=X.listener,q!==B&&Y.isPropagationStopped())break G;B=X,Y.currentTarget=A;try{B(Y)}catch(U){DY(U)}Y.currentTarget=null,B=q}}}}function m0(G,Z){var z=Z[nB];z===void 0&&(z=Z[nB]=new Set);var J=G+"__bubble";z.has(J)||($L(Z,G,2,!1),z.add(J))}function vB(G,Z,z){var J=0;Z&&(J|=4),$L(z,G,J,Z)}var t9="_reactListening"+Math.random().toString(36).slice(2);function TX(G){if(!G[t9]){G[t9]=!0,OQ.forEach(function(z){z!=="selectionchange"&&(wM.has(z)||vB(z,!1,G),vB(z,!0,G))});var Z=G.nodeType===9?G:G.ownerDocument;Z===null||Z[t9]||(Z[t9]=!0,vB("selectionchange",!1,Z))}}function $L(G,Z,z,J){switch(uL(Z)){case 2:var Y=oM;break;case 8:Y=aM;break;default:Y=kX}z=Y.bind(null,Z,z,G),Y=void 0,!zH||Z!=="touchstart"&&Z!=="touchmove"&&Z!=="wheel"||(Y=!0),J?Y!==void 0?G.addEventListener(Z,z,{capture:!0,passive:Y}):G.addEventListener(Z,z,!0):Y!==void 0?G.addEventListener(Z,z,{passive:Y}):G.addEventListener(Z,z,!1)}function uB(G,Z,z,J,Y){var B=J;if((Z&1)===0&&(Z&2)===0&&J!==null)G:for(;;){if(J===null)return;var H=J.tag;if(H===3||H===4){var X=J.stateNode.containerInfo;if(X===Y)break;if(H===4)for(H=J.return;H!==null;){var q=H.tag;if((q===3||q===4)&&H.stateNode.containerInfo===Y)return;H=H.return}for(;X!==null;){if(H=oz(X),H===null)return;if(q=H.tag,q===5||q===6||q===26||q===27){J=B=H;continue G}X=X.parentNode}}J=J.return}NQ(function(){var A=B,U=sH(z),V=[];G:{var L=mQ.get(G);if(L!==void 0){var D=sY,f=G;switch(G){case"keypress":if(YY(z)===0)break G;case"keydown":case"keyup":D=FF;break;case"focusin":f="focus",D=VB;break;case"focusout":f="blur",D=VB;break;case"beforeblur":case"afterblur":D=VB;break;case"click":if(z.button===2)break G;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=pW;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=YF;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=VF;break;case yQ:case gQ:case vQ:D=XF;break;case uQ:D=wF;break;case"scroll":case"scrollend":D=zF;break;case"wheel":D=KF;break;case"copy":case"cut":case"paste":D=WF;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=sW;break;case"toggle":case"beforetoggle":D=fF}var x=(Z&4)!==0,T=!x&&(G==="scroll"||G==="scrollend"),_=x?L!==null?L+"Capture":null:L;x=[];for(var O=A,K;O!==null;){var $=O;if(K=$.stateNode,$=$.tag,$!==5&&$!==26&&$!==27||K===null||_===null||($=k8(O,_),$!=null&&x.push(d8(O,$,K))),T)break;O=O.return}0<x.length&&(L=new D(L,f,null,z,U),V.push({event:L,listeners:x}))}}if((Z&7)===0){G:{if(L=G==="mouseover"||G==="pointerover",D=G==="mouseout"||G==="pointerout",L&&z!==ZH&&(f=z.relatedTarget||z.fromElement)&&(oz(f)||f[KJ]))break G;if(D||L){if(L=U.window===U?U:(L=U.ownerDocument)?L.defaultView||L.parentWindow:window,D){if(f=z.relatedTarget||z.toElement,D=A,f=f?oz(f):null,f!==null&&(T=i8(f),x=f.tag,f!==T||x!==5&&x!==27&&x!==6))f=null}else D=null,f=A;if(D!==f){if(x=pW,$="onMouseLeave",_="onMouseEnter",O="mouse",G==="pointerout"||G==="pointerover")x=sW,$="onPointerLeave",_="onPointerEnter",O="pointer";if(T=D==null?L:U8(D),K=f==null?L:U8(f),L=new x($,O+"leave",D,z,U),L.target=T,L.relatedTarget=K,$=null,oz(U)===A&&(x=new x(_,O+"enter",f,z,U),x.target=K,x.relatedTarget=T,$=x),T=$,D&&f)Z:{x=DM,_=D,O=f,K=0;for($=_;$;$=x($))K++;$=0;for(var p=O;p;p=x(p))$++;for(;0<K-$;)_=x(_),K--;for(;0<$-K;)O=x(O),$--;for(;K--;){if(_===O||O!==null&&_===O.alternate){x=_;break Z}_=x(_),O=x(O)}x=null}else x=null;D!==null&&yj(V,L,D,x,!1),f!==null&&T!==null&&yj(V,T,f,x,!0)}}}G:{if(L=A?U8(A):window,D=L.nodeName&&L.nodeName.toLowerCase(),D==="select"||D==="input"&&L.type==="file")var Y0=nW;else if(aW(L))if(PQ)Y0=EF;else{Y0=kF;var k=PF}else D=L.nodeName,!D||D.toLowerCase()!=="input"||L.type!=="checkbox"&&L.type!=="radio"?A&&iH(A.elementType)&&(Y0=nW):Y0=bF;if(Y0&&(Y0=Y0(G,A))){xQ(V,Y0,z,U);break G}k&&k(G,L,A),G==="focusout"&&A&&L.type==="number"&&A.memoizedProps.value!=null&&GH(L,"number",L.value)}switch(k=A?U8(A):window,G){case"focusin":if(aW(k)||k.contentEditable==="true")tz=k,JH=A,w8=null;break;case"focusout":w8=JH=tz=null;break;case"mousedown":YH=!0;break;case"contextmenu":case"mouseup":case"dragend":YH=!1,Zj(V,z,U);break;case"selectionchange":if(yF)break;case"keydown":case"keyup":Zj(V,z,U)}var a;if(aH)G:{switch(G){case"compositionstart":var G0="onCompositionStart";break G;case"compositionend":G0="onCompositionEnd";break G;case"compositionupdate":G0="onCompositionUpdate";break G}G0=void 0}else nz?TQ(G,z)&&(G0="onCompositionEnd"):G==="keydown"&&z.keyCode===229&&(G0="onCompositionStart");if(G0&&(CQ&&z.locale!=="ko"&&(nz||G0!=="onCompositionStart"?G0==="onCompositionEnd"&&nz&&(a=$Q()):(w7=U,rH=("value"in w7)?w7.value:w7.textContent,nz=!0)),k=vY(A,G0),0<k.length&&(G0=new iW(G0,G,null,z,U),V.push({event:G0,listeners:k}),a?G0.data=a:(a=SQ(z),a!==null&&(G0.data=a)))),a=$F?CF(G,z):TF(G,z))G0=vY(A,"onBeforeInput"),0<G0.length&&(k=new iW("onBeforeInput","beforeinput",null,z,U),V.push({event:k,listeners:G0}),k.data=a);RM(V,G,A,z,U)}NL(V,Z)})}function d8(G,Z,z){return{instance:G,listener:Z,currentTarget:z}}function vY(G,Z){for(var z=Z+"Capture",J=[];G!==null;){var Y=G,B=Y.stateNode;if(Y=Y.tag,Y!==5&&Y!==26&&Y!==27||B===null||(Y=k8(G,z),Y!=null&&J.unshift(d8(G,Y,B)),Y=k8(G,Z),Y!=null&&J.push(d8(G,Y,B))),G.tag===3)return J;G=G.return}return[]}function DM(G){if(G===null)return null;do G=G.return;while(G&&G.tag!==5&&G.tag!==27);return G?G:null}function yj(G,Z,z,J,Y){for(var B=Z._reactName,H=[];z!==null&&z!==J;){var X=z,q=X.alternate,A=X.stateNode;if(X=X.tag,q!==null&&q===J)break;X!==5&&X!==26&&X!==27||A===null||(q=A,Y?(A=k8(z,B),A!=null&&H.unshift(d8(z,A,q))):Y||(A=k8(z,B),A!=null&&H.push(d8(z,A,q)))),z=z.return}H.length!==0&&G.push({event:Z,listeners:H})}var KM=/\r\n?/g,IM=/\u0000|\uFFFD/g;function gj(G){return(typeof G==="string"?G:""+G).replace(KM,`
`).replace(IM,"")}function CL(G,Z){return Z=gj(Z),gj(G)===Z?!0:!1}function FG(G,Z,z,J,Y,B){switch(z){case"children":typeof J==="string"?Z==="body"||Z==="textarea"&&J===""||_J(G,J):(typeof J==="number"||typeof J==="bigint")&&Z!=="body"&&_J(G,""+J);break;case"className":p9(G,"class",J);break;case"tabIndex":p9(G,"tabindex",J);break;case"dir":case"role":case"viewBox":case"width":case"height":p9(G,z,J);break;case"style":fQ(G,J,B);break;case"data":if(Z!=="object"){p9(G,"data",J);break}case"src":case"href":if(J===""&&(Z!=="a"||z!=="href")){G.removeAttribute(z);break}if(J==null||typeof J==="function"||typeof J==="symbol"||typeof J==="boolean"){G.removeAttribute(z);break}J=zY(""+J),G.setAttribute(z,J);break;case"action":case"formAction":if(typeof J==="function"){G.setAttribute(z,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof B==="function"&&(z==="formAction"?(Z!=="input"&&FG(G,Z,"name",Y.name,Y,null),FG(G,Z,"formEncType",Y.formEncType,Y,null),FG(G,Z,"formMethod",Y.formMethod,Y,null),FG(G,Z,"formTarget",Y.formTarget,Y,null)):(FG(G,Z,"encType",Y.encType,Y,null),FG(G,Z,"method",Y.method,Y,null),FG(G,Z,"target",Y.target,Y,null)));if(J==null||typeof J==="symbol"||typeof J==="boolean"){G.removeAttribute(z);break}J=zY(""+J),G.setAttribute(z,J);break;case"onClick":J!=null&&(G.onclick=r6);break;case"onScroll":J!=null&&m0("scroll",G);break;case"onScrollEnd":J!=null&&m0("scrollend",G);break;case"dangerouslySetInnerHTML":if(J!=null){if(typeof J!=="object"||!("__html"in J))throw Error(h(61));if(z=J.__html,z!=null){if(Y.children!=null)throw Error(h(60));G.innerHTML=z}}break;case"multiple":G.multiple=J&&typeof J!=="function"&&typeof J!=="symbol";break;case"muted":G.muted=J&&typeof J!=="function"&&typeof J!=="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(J==null||typeof J==="function"||typeof J==="boolean"||typeof J==="symbol"){G.removeAttribute("xlink:href");break}z=zY(""+J),G.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",z);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":J!=null&&typeof J!=="function"&&typeof J!=="symbol"?G.setAttribute(z,""+J):G.removeAttribute(z);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":J&&typeof J!=="function"&&typeof J!=="symbol"?G.setAttribute(z,""):G.removeAttribute(z);break;case"capture":case"download":J===!0?G.setAttribute(z,""):J!==!1&&J!=null&&typeof J!=="function"&&typeof J!=="symbol"?G.setAttribute(z,J):G.removeAttribute(z);break;case"cols":case"rows":case"size":case"span":J!=null&&typeof J!=="function"&&typeof J!=="symbol"&&!isNaN(J)&&1<=J?G.setAttribute(z,J):G.removeAttribute(z);break;case"rowSpan":case"start":J==null||typeof J==="function"||typeof J==="symbol"||isNaN(J)?G.removeAttribute(z):G.setAttribute(z,J);break;case"popover":m0("beforetoggle",G),m0("toggle",G),ZY(G,"popover",J);break;case"xlinkActuate":u6(G,"http://www.w3.org/1999/xlink","xlink:actuate",J);break;case"xlinkArcrole":u6(G,"http://www.w3.org/1999/xlink","xlink:arcrole",J);break;case"xlinkRole":u6(G,"http://www.w3.org/1999/xlink","xlink:role",J);break;case"xlinkShow":u6(G,"http://www.w3.org/1999/xlink","xlink:show",J);break;case"xlinkTitle":u6(G,"http://www.w3.org/1999/xlink","xlink:title",J);break;case"xlinkType":u6(G,"http://www.w3.org/1999/xlink","xlink:type",J);break;case"xmlBase":u6(G,"http://www.w3.org/XML/1998/namespace","xml:base",J);break;case"xmlLang":u6(G,"http://www.w3.org/XML/1998/namespace","xml:lang",J);break;case"xmlSpace":u6(G,"http://www.w3.org/XML/1998/namespace","xml:space",J);break;case"is":ZY(G,"is",J);break;case"innerText":case"textContent":break;default:if(!(2<z.length)||z[0]!=="o"&&z[0]!=="O"||z[1]!=="n"&&z[1]!=="N")z=GF.get(z)||z,ZY(G,z,J)}}function SH(G,Z,z,J,Y,B){switch(z){case"style":fQ(G,J,B);break;case"dangerouslySetInnerHTML":if(J!=null){if(typeof J!=="object"||!("__html"in J))throw Error(h(61));if(z=J.__html,z!=null){if(Y.children!=null)throw Error(h(60));G.innerHTML=z}}break;case"children":typeof J==="string"?_J(G,J):(typeof J==="number"||typeof J==="bigint")&&_J(G,""+J);break;case"onScroll":J!=null&&m0("scroll",G);break;case"onScrollEnd":J!=null&&m0("scrollend",G);break;case"onClick":J!=null&&(G.onclick=r6);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!VQ.hasOwnProperty(z))G:{if(z[0]==="o"&&z[1]==="n"&&(Y=z.endsWith("Capture"),Z=z.slice(2,Y?z.length-7:void 0),B=G[CZ]||null,B=B!=null?B[z]:null,typeof B==="function"&&G.removeEventListener(Z,B,Y),typeof J==="function")){typeof B!=="function"&&B!==null&&(z in G?G[z]=null:G.hasAttribute(z)&&G.removeAttribute(z)),G.addEventListener(Z,J,Y);break G}z in G?G[z]=J:J===!0?G.setAttribute(z,""):ZY(G,z,J)}}}function jZ(G,Z,z){switch(Z){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":m0("error",G),m0("load",G);var J=!1,Y=!1,B;for(B in z)if(z.hasOwnProperty(B)){var H=z[B];if(H!=null)switch(B){case"src":J=!0;break;case"srcSet":Y=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(h(137,Z));default:FG(G,Z,B,H,z,null)}}Y&&FG(G,Z,"srcSet",z.srcSet,z,null),J&&FG(G,Z,"src",z.src,z,null);return;case"input":m0("invalid",G);var X=B=H=Y=null,q=null,A=null;for(J in z)if(z.hasOwnProperty(J)){var U=z[J];if(U!=null)switch(J){case"name":Y=U;break;case"type":H=U;break;case"checked":q=U;break;case"defaultChecked":A=U;break;case"value":B=U;break;case"defaultValue":X=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(h(137,Z));break;default:FG(G,Z,J,U,z,null)}}DQ(G,B,X,q,A,H,Y,!1);return;case"select":m0("invalid",G),J=H=B=null;for(Y in z)if(z.hasOwnProperty(Y)&&(X=z[Y],X!=null))switch(Y){case"value":B=X;break;case"defaultValue":H=X;break;case"multiple":J=X;default:FG(G,Z,Y,X,z,null)}Z=B,z=H,G.multiple=!!J,Z!=null?HJ(G,!!J,Z,!1):z!=null&&HJ(G,!!J,z,!0);return;case"textarea":m0("invalid",G),B=Y=J=null;for(H in z)if(z.hasOwnProperty(H)&&(X=z[H],X!=null))switch(H){case"value":J=X;break;case"defaultValue":Y=X;break;case"children":B=X;break;case"dangerouslySetInnerHTML":if(X!=null)throw Error(h(91));break;default:FG(G,Z,H,X,z,null)}IQ(G,J,Y,B);return;case"option":for(q in z)if(z.hasOwnProperty(q)&&(J=z[q],J!=null))switch(q){case"selected":G.selected=J&&typeof J!=="function"&&typeof J!=="symbol";break;default:FG(G,Z,q,J,z,null)}return;case"dialog":m0("beforetoggle",G),m0("toggle",G),m0("cancel",G),m0("close",G);break;case"iframe":case"object":m0("load",G);break;case"video":case"audio":for(J=0;J<m8.length;J++)m0(m8[J],G);break;case"image":m0("error",G),m0("load",G);break;case"details":m0("toggle",G);break;case"embed":case"source":case"link":m0("error",G),m0("load",G);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in z)if(z.hasOwnProperty(A)&&(J=z[A],J!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(h(137,Z));default:FG(G,Z,A,J,z,null)}return;default:if(iH(Z)){for(U in z)z.hasOwnProperty(U)&&(J=z[U],J!==void 0&&SH(G,Z,U,J,z,void 0));return}}for(X in z)z.hasOwnProperty(X)&&(J=z[X],J!=null&&FG(G,Z,X,J,z,null))}function fM(G,Z,z,J){switch(Z){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var Y=null,B=null,H=null,X=null,q=null,A=null,U=null;for(D in z){var V=z[D];if(z.hasOwnProperty(D)&&V!=null)switch(D){case"checked":break;case"value":break;case"defaultValue":q=V;default:J.hasOwnProperty(D)||FG(G,Z,D,null,J,V)}}for(var L in J){var D=J[L];if(V=z[L],J.hasOwnProperty(L)&&(D!=null||V!=null))switch(L){case"type":B=D;break;case"name":Y=D;break;case"checked":A=D;break;case"defaultChecked":U=D;break;case"value":H=D;break;case"defaultValue":X=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(h(137,Z));break;default:D!==V&&FG(G,Z,L,D,J,V)}}eB(G,H,X,q,A,U,B,Y);return;case"select":D=H=X=L=null;for(B in z)if(q=z[B],z.hasOwnProperty(B)&&q!=null)switch(B){case"value":break;case"multiple":D=q;default:J.hasOwnProperty(B)||FG(G,Z,B,null,J,q)}for(Y in J)if(B=J[Y],q=z[Y],J.hasOwnProperty(Y)&&(B!=null||q!=null))switch(Y){case"value":L=B;break;case"defaultValue":X=B;break;case"multiple":H=B;default:B!==q&&FG(G,Z,Y,B,J,q)}Z=X,z=H,J=D,L!=null?HJ(G,!!z,L,!1):!!J!==!!z&&(Z!=null?HJ(G,!!z,Z,!0):HJ(G,!!z,z?[]:"",!1));return;case"textarea":D=L=null;for(X in z)if(Y=z[X],z.hasOwnProperty(X)&&Y!=null&&!J.hasOwnProperty(X))switch(X){case"value":break;case"children":break;default:FG(G,Z,X,null,J,Y)}for(H in J)if(Y=J[H],B=z[H],J.hasOwnProperty(H)&&(Y!=null||B!=null))switch(H){case"value":L=Y;break;case"defaultValue":D=Y;break;case"children":break;case"dangerouslySetInnerHTML":if(Y!=null)throw Error(h(91));break;default:Y!==B&&FG(G,Z,H,Y,J,B)}KQ(G,L,D);return;case"option":for(var f in z)if(L=z[f],z.hasOwnProperty(f)&&L!=null&&!J.hasOwnProperty(f))switch(f){case"selected":G.selected=!1;break;default:FG(G,Z,f,null,J,L)}for(q in J)if(L=J[q],D=z[q],J.hasOwnProperty(q)&&L!==D&&(L!=null||D!=null))switch(q){case"selected":G.selected=L&&typeof L!=="function"&&typeof L!=="symbol";break;default:FG(G,Z,q,L,J,D)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var x in z)L=z[x],z.hasOwnProperty(x)&&L!=null&&!J.hasOwnProperty(x)&&FG(G,Z,x,null,J,L);for(A in J)if(L=J[A],D=z[A],J.hasOwnProperty(A)&&L!==D&&(L!=null||D!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(h(137,Z));break;default:FG(G,Z,A,L,J,D)}return;default:if(iH(Z)){for(var T in z)L=z[T],z.hasOwnProperty(T)&&L!==void 0&&!J.hasOwnProperty(T)&&SH(G,Z,T,void 0,J,L);for(U in J)L=J[U],D=z[U],!J.hasOwnProperty(U)||L===D||L===void 0&&D===void 0||SH(G,Z,U,L,J,D);return}}for(var _ in z)L=z[_],z.hasOwnProperty(_)&&L!=null&&!J.hasOwnProperty(_)&&FG(G,Z,_,null,J,L);for(V in J)L=J[V],D=z[V],!J.hasOwnProperty(V)||L===D||L==null&&D==null||FG(G,Z,V,L,J,D)}function vj(G){switch(G){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function NM(){if(typeof performance.getEntriesByType==="function"){for(var G=0,Z=0,z=performance.getEntriesByType("resource"),J=0;J<z.length;J++){var Y=z[J],B=Y.transferSize,H=Y.initiatorType,X=Y.duration;if(B&&X&&vj(H)){H=0,X=Y.responseEnd;for(J+=1;J<z.length;J++){var q=z[J],A=q.startTime;if(A>X)break;var{transferSize:U,initiatorType:V}=q;U&&vj(V)&&(q=q.responseEnd,H+=U*(q<X?1:(X-A)/(q-A)))}if(--J,Z+=8*(B+H)/(Y.duration/1000),G++,10<G)break}}if(0<G)return Z/G/1e6}return navigator.connection&&(G=navigator.connection.downlink,typeof G==="number")?G:5}var xH=null,PH=null;function uY(G){return G.nodeType===9?G:G.ownerDocument}function uj(G){switch(G){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function TL(G,Z){if(G===0)switch(Z){case"svg":return 1;case"math":return 2;default:return 0}return G===1&&Z==="foreignObject"?0:G}function kH(G,Z){return G==="textarea"||G==="noscript"||typeof Z.children==="string"||typeof Z.children==="number"||typeof Z.children==="bigint"||typeof Z.dangerouslySetInnerHTML==="object"&&Z.dangerouslySetInnerHTML!==null&&Z.dangerouslySetInnerHTML.__html!=null}var mB=null;function $M(){var G=window.event;if(G&&G.type==="popstate"){if(G===mB)return!1;return mB=G,!0}return mB=null,!1}var SL=typeof setTimeout==="function"?setTimeout:void 0,CM=typeof clearTimeout==="function"?clearTimeout:void 0,mj=typeof Promise==="function"?Promise:void 0,TM=typeof queueMicrotask==="function"?queueMicrotask:typeof mj<"u"?function(G){return mj.resolve(null).then(G).catch(SM)}:SL;function SM(G){setTimeout(function(){throw G})}function v7(G){return G==="head"}function dj(G,Z){var z=Z,J=0;do{var Y=z.nextSibling;if(G.removeChild(z),Y&&Y.nodeType===8)if(z=Y.data,z==="/$"||z==="/&"){if(J===0){G.removeChild(Y),DJ(Z);return}J--}else if(z==="$"||z==="$?"||z==="$~"||z==="$!"||z==="&")J++;else if(z==="html")x8(G.ownerDocument.documentElement);else if(z==="head"){z=G.ownerDocument.head,x8(z);for(var B=z.firstChild;B;){var{nextSibling:H,nodeName:X}=B;B[a8]||X==="SCRIPT"||X==="STYLE"||X==="LINK"&&B.rel.toLowerCase()==="stylesheet"||z.removeChild(B),B=H}}else z==="body"&&x8(G.ownerDocument.body);z=Y}while(z);DJ(Z)}function cj(G,Z){var z=G;G=0;do{var J=z.nextSibling;if(z.nodeType===1?Z?(z._stashedDisplay=z.style.display,z.style.display="none"):(z.style.display=z._stashedDisplay||"",z.getAttribute("style")===""&&z.removeAttribute("style")):z.nodeType===3&&(Z?(z._stashedText=z.nodeValue,z.nodeValue=""):z.nodeValue=z._stashedText||""),J&&J.nodeType===8)if(z=J.data,z==="/$")if(G===0)break;else G--;else z!=="$"&&z!=="$?"&&z!=="$~"&&z!=="$!"||G++;z=J}while(z)}function bH(G){var Z=G.firstChild;Z&&Z.nodeType===10&&(Z=Z.nextSibling);for(;Z;){var z=Z;switch(Z=Z.nextSibling,z.nodeName){case"HTML":case"HEAD":case"BODY":bH(z),pH(z);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(z.rel.toLowerCase()==="stylesheet")continue}G.removeChild(z)}}function xM(G,Z,z,J){for(;G.nodeType===1;){var Y=z;if(G.nodeName.toLowerCase()!==Z.toLowerCase()){if(!J&&(G.nodeName!=="INPUT"||G.type!=="hidden"))break}else if(!J)if(Z==="input"&&G.type==="hidden"){var B=Y.name==null?null:""+Y.name;if(Y.type==="hidden"&&G.getAttribute("name")===B)return G}else return G;else if(!G[a8])switch(Z){case"meta":if(!G.hasAttribute("itemprop"))break;return G;case"link":if(B=G.getAttribute("rel"),B==="stylesheet"&&G.hasAttribute("data-precedence"))break;else if(B!==Y.rel||G.getAttribute("href")!==(Y.href==null||Y.href===""?null:Y.href)||G.getAttribute("crossorigin")!==(Y.crossOrigin==null?null:Y.crossOrigin)||G.getAttribute("title")!==(Y.title==null?null:Y.title))break;return G;case"style":if(G.hasAttribute("data-precedence"))break;return G;case"script":if(B=G.getAttribute("src"),(B!==(Y.src==null?null:Y.src)||G.getAttribute("type")!==(Y.type==null?null:Y.type)||G.getAttribute("crossorigin")!==(Y.crossOrigin==null?null:Y.crossOrigin))&&B&&G.hasAttribute("async")&&!G.hasAttribute("itemprop"))break;return G;default:return G}if(G=J6(G.nextSibling),G===null)break}return null}function PM(G,Z,z){if(Z==="")return null;for(;G.nodeType!==3;){if((G.nodeType!==1||G.nodeName!=="INPUT"||G.type!=="hidden")&&!z)return null;if(G=J6(G.nextSibling),G===null)return null}return G}function xL(G,Z){for(;G.nodeType!==8;){if((G.nodeType!==1||G.nodeName!=="INPUT"||G.type!=="hidden")&&!Z)return null;if(G=J6(G.nextSibling),G===null)return null}return G}function EH(G){return G.data==="$?"||G.data==="$~"}function hH(G){return G.data==="$!"||G.data==="$?"&&G.ownerDocument.readyState!=="loading"}function kM(G,Z){var z=G.ownerDocument;if(G.data==="$~")G._reactRetry=Z;else if(G.data!=="$?"||z.readyState!=="loading")Z();else{var J=function(){Z(),z.removeEventListener("DOMContentLoaded",J)};z.addEventListener("DOMContentLoaded",J),G._reactRetry=J}}function J6(G){for(;G!=null;G=G.nextSibling){var Z=G.nodeType;if(Z===1||Z===3)break;if(Z===8){if(Z=G.data,Z==="$"||Z==="$!"||Z==="$?"||Z==="$~"||Z==="&"||Z==="F!"||Z==="F")break;if(Z==="/$"||Z==="/&")return null}}return G}var yH=null;function lj(G){G=G.nextSibling;for(var Z=0;G;){if(G.nodeType===8){var z=G.data;if(z==="/$"||z==="/&"){if(Z===0)return J6(G.nextSibling);Z--}else z!=="$"&&z!=="$!"&&z!=="$?"&&z!=="$~"&&z!=="&"||Z++}G=G.nextSibling}return null}function pj(G){G=G.previousSibling;for(var Z=0;G;){if(G.nodeType===8){var z=G.data;if(z==="$"||z==="$!"||z==="$?"||z==="$~"||z==="&"){if(Z===0)return G;Z--}else z!=="/$"&&z!=="/&"||Z++}G=G.previousSibling}return null}function PL(G,Z,z){switch(Z=uY(z),G){case"html":if(G=Z.documentElement,!G)throw Error(h(452));return G;case"head":if(G=Z.head,!G)throw Error(h(453));return G;case"body":if(G=Z.body,!G)throw Error(h(454));return G;default:throw Error(h(451))}}function x8(G){for(var Z=G.attributes;Z.length;)G.removeAttributeNode(Z[0]);pH(G)}var Y6=new Map,ij=new Set;function mY(G){return typeof G.getRootNode==="function"?G.getRootNode():G.nodeType===9?G:G.ownerDocument}var Y7=BG.d;BG.d={f:bM,r:EM,D:hM,C:yM,L:gM,m:vM,X:mM,S:uM,M:dM};function bM(){var G=Y7.f(),Z=Y4();return G||Z}function EM(G){var Z=IJ(G);Z!==null&&Z.tag===5&&Z.type==="form"?fU(Z):Y7.r(G)}var CJ=typeof document>"u"?null:document;function kL(G,Z,z){var J=CJ;if(J&&typeof Z==="string"&&Z){var Y=eZ(Z);Y='link[rel="'+G+'"][href="'+Y+'"]',typeof z==="string"&&(Y+='[crossorigin="'+z+'"]'),ij.has(Y)||(ij.add(Y),G={rel:G,crossOrigin:z,href:Z},J.querySelector(Y)===null&&(Z=J.createElement("link"),jZ(Z,"link",G),JZ(Z),J.head.appendChild(Z)))}}function hM(G){Y7.D(G),kL("dns-prefetch",G,null)}function yM(G,Z){Y7.C(G,Z),kL("preconnect",G,Z)}function gM(G,Z,z){Y7.L(G,Z,z);var J=CJ;if(J&&G&&Z){var Y='link[rel="preload"][as="'+eZ(Z)+'"]';Z==="image"?z&&z.imageSrcSet?(Y+='[imagesrcset="'+eZ(z.imageSrcSet)+'"]',typeof z.imageSizes==="string"&&(Y+='[imagesizes="'+eZ(z.imageSizes)+'"]')):Y+='[href="'+eZ(G)+'"]':Y+='[href="'+eZ(G)+'"]';var B=Y;switch(Z){case"style":B=wJ(G);break;case"script":B=TJ(G)}Y6.has(B)||(G=$G({rel:"preload",href:Z==="image"&&z&&z.imageSrcSet?void 0:G,as:Z},z),Y6.set(B,G),J.querySelector(Y)!==null||Z==="style"&&J.querySelector(z9(B))||Z==="script"&&J.querySelector(J9(B))||(Z=J.createElement("link"),jZ(Z,"link",G),JZ(Z),J.head.appendChild(Z)))}}function vM(G,Z){Y7.m(G,Z);var z=CJ;if(z&&G){var J=Z&&typeof Z.as==="string"?Z.as:"script",Y='link[rel="modulepreload"][as="'+eZ(J)+'"][href="'+eZ(G)+'"]',B=Y;switch(J){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":B=TJ(G)}if(!Y6.has(B)&&(G=$G({rel:"modulepreload",href:G},Z),Y6.set(B,G),z.querySelector(Y)===null)){switch(J){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(z.querySelector(J9(B)))return}J=z.createElement("link"),jZ(J,"link",G),JZ(J),z.head.appendChild(J)}}}function uM(G,Z,z){Y7.S(G,Z,z);var J=CJ;if(J&&G){var Y=BJ(J).hoistableStyles,B=wJ(G);Z=Z||"default";var H=Y.get(B);if(!H){var X={loading:0,preload:null};if(H=J.querySelector(z9(B)))X.loading=5;else{G=$G({rel:"stylesheet",href:G,"data-precedence":Z},z),(z=Y6.get(B))&&SX(G,z);var q=H=J.createElement("link");JZ(q),jZ(q,"link",G),q._p=new Promise(function(A,U){q.onload=A,q.onerror=U}),q.addEventListener("load",function(){X.loading|=1}),q.addEventListener("error",function(){X.loading|=2}),X.loading|=4,LY(H,Z,J)}H={type:"stylesheet",instance:H,count:1,state:X},Y.set(B,H)}}}function mM(G,Z){Y7.X(G,Z);var z=CJ;if(z&&G){var J=BJ(z).hoistableScripts,Y=TJ(G),B=J.get(Y);B||(B=z.querySelector(J9(Y)),B||(G=$G({src:G,async:!0},Z),(Z=Y6.get(Y))&&xX(G,Z),B=z.createElement("script"),JZ(B),jZ(B,"link",G),z.head.appendChild(B)),B={type:"script",instance:B,count:1,state:null},J.set(Y,B))}}function dM(G,Z){Y7.M(G,Z);var z=CJ;if(z&&G){var J=BJ(z).hoistableScripts,Y=TJ(G),B=J.get(Y);B||(B=z.querySelector(J9(Y)),B||(G=$G({src:G,async:!0,type:"module"},Z),(Z=Y6.get(Y))&&xX(G,Z),B=z.createElement("script"),JZ(B),jZ(B,"link",G),z.head.appendChild(B)),B={type:"script",instance:B,count:1,state:null},J.set(Y,B))}}function sj(G,Z,z,J){var Y=(Y=f7.current)?mY(Y):null;if(!Y)throw Error(h(446));switch(G){case"meta":case"title":return null;case"style":return typeof z.precedence==="string"&&typeof z.href==="string"?(Z=wJ(z.href),z=BJ(Y).hoistableStyles,J=z.get(Z),J||(J={type:"style",instance:null,count:0,state:null},z.set(Z,J)),J):{type:"void",instance:null,count:0,state:null};case"link":if(z.rel==="stylesheet"&&typeof z.href==="string"&&typeof z.precedence==="string"){G=wJ(z.href);var B=BJ(Y).hoistableStyles,H=B.get(G);if(H||(Y=Y.ownerDocument||Y,H={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},B.set(G,H),(B=Y.querySelector(z9(G)))&&!B._p&&(H.instance=B,H.state.loading=5),Y6.has(G)||(z={rel:"preload",as:"style",href:z.href,crossOrigin:z.crossOrigin,integrity:z.integrity,media:z.media,hrefLang:z.hrefLang,referrerPolicy:z.referrerPolicy},Y6.set(G,z),B||cM(Y,G,z,H.state))),Z&&J===null)throw Error(h(528,""));return H}if(Z&&J!==null)throw Error(h(529,""));return null;case"script":return Z=z.async,z=z.src,typeof z==="string"&&Z&&typeof Z!=="function"&&typeof Z!=="symbol"?(Z=TJ(z),z=BJ(Y).hoistableScripts,J=z.get(Z),J||(J={type:"script",instance:null,count:0,state:null},z.set(Z,J)),J):{type:"void",instance:null,count:0,state:null};default:throw Error(h(444,G))}}function wJ(G){return'href="'+eZ(G)+'"'}function z9(G){return'link[rel="stylesheet"]['+G+"]"}function bL(G){return $G({},G,{"data-precedence":G.precedence,precedence:null})}function cM(G,Z,z,J){G.querySelector('link[rel="preload"][as="style"]['+Z+"]")?J.loading=1:(Z=G.createElement("link"),J.preload=Z,Z.addEventListener("load",function(){return J.loading|=1}),Z.addEventListener("error",function(){return J.loading|=2}),jZ(Z,"link",z),JZ(Z),G.head.appendChild(Z))}function TJ(G){return'[src="'+eZ(G)+'"]'}function J9(G){return"script[async]"+G}function rj(G,Z,z){if(Z.count++,Z.instance===null)switch(Z.type){case"style":var J=G.querySelector('style[data-href~="'+eZ(z.href)+'"]');if(J)return Z.instance=J,JZ(J),J;var Y=$G({},z,{"data-href":z.href,"data-precedence":z.precedence,href:null,precedence:null});return J=(G.ownerDocument||G).createElement("style"),JZ(J),jZ(J,"style",Y),LY(J,z.precedence,G),Z.instance=J;case"stylesheet":Y=wJ(z.href);var B=G.querySelector(z9(Y));if(B)return Z.state.loading|=4,Z.instance=B,JZ(B),B;J=bL(z),(Y=Y6.get(Y))&&SX(J,Y),B=(G.ownerDocument||G).createElement("link"),JZ(B);var H=B;return H._p=new Promise(function(X,q){H.onload=X,H.onerror=q}),jZ(B,"link",J),Z.state.loading|=4,LY(B,z.precedence,G),Z.instance=B;case"script":if(B=TJ(z.src),Y=G.querySelector(J9(B)))return Z.instance=Y,JZ(Y),Y;if(J=z,Y=Y6.get(B))J=$G({},z),xX(J,Y);return G=G.ownerDocument||G,Y=G.createElement("script"),JZ(Y),jZ(Y,"link",J),G.head.appendChild(Y),Z.instance=Y;case"void":return null;default:throw Error(h(443,Z.type))}else Z.type==="stylesheet"&&(Z.state.loading&4)===0&&(J=Z.instance,Z.state.loading|=4,LY(J,z.precedence,G));return Z.instance}function LY(G,Z,z){for(var J=z.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),Y=J.length?J[J.length-1]:null,B=Y,H=0;H<J.length;H++){var X=J[H];if(X.dataset.precedence===Z)B=X;else if(B!==Y)break}B?B.parentNode.insertBefore(G,B.nextSibling):(Z=z.nodeType===9?z.head:z,Z.insertBefore(G,Z.firstChild))}function SX(G,Z){G.crossOrigin==null&&(G.crossOrigin=Z.crossOrigin),G.referrerPolicy==null&&(G.referrerPolicy=Z.referrerPolicy),G.title==null&&(G.title=Z.title)}function xX(G,Z){G.crossOrigin==null&&(G.crossOrigin=Z.crossOrigin),G.referrerPolicy==null&&(G.referrerPolicy=Z.referrerPolicy),G.integrity==null&&(G.integrity=Z.integrity)}var _Y=null;function oj(G,Z,z){if(_Y===null){var J=new Map,Y=_Y=new Map;Y.set(z,J)}else Y=_Y,J=Y.get(z),J||(J=new Map,Y.set(z,J));if(J.has(G))return J;J.set(G,null),z=z.getElementsByTagName(G);for(Y=0;Y<z.length;Y++){var B=z[Y];if(!(B[a8]||B[XZ]||G==="link"&&B.getAttribute("rel")==="stylesheet")&&B.namespaceURI!=="http://www.w3.org/2000/svg"){var H=B.getAttribute(Z)||"";H=G+H;var X=J.get(H);X?X.push(B):J.set(H,[B])}}return J}function aj(G,Z,z){G=G.ownerDocument||G,G.head.insertBefore(z,Z==="title"?G.querySelector("head > title"):null)}function lM(G,Z,z){if(z===1||Z.itemProp!=null)return!1;switch(G){case"meta":case"title":return!0;case"style":if(typeof Z.precedence!=="string"||typeof Z.href!=="string"||Z.href==="")break;return!0;case"link":if(typeof Z.rel!=="string"||typeof Z.href!=="string"||Z.href===""||Z.onLoad||Z.onError)break;switch(Z.rel){case"stylesheet":return G=Z.disabled,typeof Z.precedence==="string"&&G==null;default:return!0}case"script":if(Z.async&&typeof Z.async!=="function"&&typeof Z.async!=="symbol"&&!Z.onLoad&&!Z.onError&&Z.src&&typeof Z.src==="string")return!0}return!1}function EL(G){return G.type==="stylesheet"&&(G.state.loading&3)===0?!1:!0}function pM(G,Z,z,J){if(z.type==="stylesheet"&&(typeof J.media!=="string"||matchMedia(J.media).matches!==!1)&&(z.state.loading&4)===0){if(z.instance===null){var Y=wJ(J.href),B=Z.querySelector(z9(Y));if(B){Z=B._p,Z!==null&&typeof Z==="object"&&typeof Z.then==="function"&&(G.count++,G=dY.bind(G),Z.then(G,G)),z.state.loading|=4,z.instance=B,JZ(B);return}B=Z.ownerDocument||Z,J=bL(J),(Y=Y6.get(Y))&&SX(J,Y),B=B.createElement("link"),JZ(B);var H=B;H._p=new Promise(function(X,q){H.onload=X,H.onerror=q}),jZ(B,"link",J),z.instance=B}G.stylesheets===null&&(G.stylesheets=new Map),G.stylesheets.set(z,Z),(Z=z.state.preload)&&(z.state.loading&3)===0&&(G.count++,z=dY.bind(G),Z.addEventListener("load",z),Z.addEventListener("error",z))}}var dB=0;function iM(G,Z){return G.stylesheets&&G.count===0&&AY(G,G.stylesheets),0<G.count||0<G.imgCount?function(z){var J=setTimeout(function(){if(G.stylesheets&&AY(G,G.stylesheets),G.unsuspend){var B=G.unsuspend;G.unsuspend=null,B()}},60000+Z);0<G.imgBytes&&dB===0&&(dB=62500*NM());var Y=setTimeout(function(){if(G.waitingForImages=!1,G.count===0&&(G.stylesheets&&AY(G,G.stylesheets),G.unsuspend)){var B=G.unsuspend;G.unsuspend=null,B()}},(G.imgBytes>dB?50:800)+Z);return G.unsuspend=z,function(){G.unsuspend=null,clearTimeout(J),clearTimeout(Y)}}:null}function dY(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)AY(this,this.stylesheets);else if(this.unsuspend){var G=this.unsuspend;this.unsuspend=null,G()}}}var cY=null;function AY(G,Z){G.stylesheets=null,G.unsuspend!==null&&(G.count++,cY=new Map,Z.forEach(sM,G),cY=null,dY.call(G))}function sM(G,Z){if(!(Z.state.loading&4)){var z=cY.get(G);if(z)var J=z.get(null);else{z=new Map,cY.set(G,z);for(var Y=G.querySelectorAll("link[data-precedence],style[data-precedence]"),B=0;B<Y.length;B++){var H=Y[B];if(H.nodeName==="LINK"||H.getAttribute("media")!=="not all")z.set(H.dataset.precedence,H),J=H}J&&z.set(null,J)}Y=Z.instance,H=Y.getAttribute("data-precedence"),B=z.get(H)||J,B===J&&z.set(null,Y),z.set(H,Y),this.count++,J=dY.bind(this),Y.addEventListener("load",J),Y.addEventListener("error",J),B?B.parentNode.insertBefore(Y,B.nextSibling):(G=G.nodeType===9?G.head:G,G.insertBefore(Y,G.firstChild)),Z.state.loading|=4}}var c8={$$typeof:s6,Provider:null,Consumer:null,_currentValue:Hz,_currentValue2:Hz,_threadCount:0};function rM(G,Z,z,J,Y,B,H,X,q){this.tag=1,this.containerInfo=G,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=AB(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=AB(0),this.hiddenUpdates=AB(null),this.identifierPrefix=J,this.onUncaughtError=Y,this.onCaughtError=B,this.onRecoverableError=H,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=q,this.incompleteTransitions=new Map}function hL(G,Z,z,J,Y,B,H,X,q,A,U,V){return G=new rM(G,Z,z,H,q,A,U,V,X),Z=1,B===!0&&(Z|=24),B=EZ(3,null,null,Z),G.current=B,B.stateNode=G,Z=JX(),Z.refCount++,G.pooledCache=Z,Z.refCount++,B.memoizedState={element:J,isDehydrated:z,cache:Z},HX(B),G}function yL(G){if(!G)return ZJ;return G=ZJ,G}function gL(G,Z,z,J,Y,B){Y=yL(Y),J.context===null?J.context=Y:J.pendingContext=Y,J=$7(Z),J.payload={element:z},B=B===void 0?null:B,B!==null&&(J.callback=B),z=C7(G,J,Z),z!==null&&($Z(z,G,Z),K8(z,G,Z))}function nj(G,Z){if(G=G.memoizedState,G!==null&&G.dehydrated!==null){var z=G.retryLane;G.retryLane=z!==0&&z<Z?z:Z}}function PX(G,Z){nj(G,Z),(G=G.alternate)&&nj(G,Z)}function vL(G){if(G.tag===13||G.tag===31){var Z=Vz(G,67108864);Z!==null&&$Z(Z,G,67108864),PX(G,67108864)}}function tj(G){if(G.tag===13||G.tag===31){var Z=uZ();Z=cH(Z);var z=Vz(G,Z);z!==null&&$Z(z,G,Z),PX(G,Z)}}var lY=!0;function oM(G,Z,z,J){var Y=K0.T;K0.T=null;var B=BG.p;try{BG.p=2,kX(G,Z,z,J)}finally{BG.p=B,K0.T=Y}}function aM(G,Z,z,J){var Y=K0.T;K0.T=null;var B=BG.p;try{BG.p=8,kX(G,Z,z,J)}finally{BG.p=B,K0.T=Y}}function kX(G,Z,z,J){if(lY){var Y=gH(J);if(Y===null)uB(G,Z,J,pY,z),ej(G,J);else if(tM(Y,G,Z,z,J))J.stopPropagation();else if(ej(G,J),Z&4&&-1<nM.indexOf(G)){for(;Y!==null;){var B=IJ(Y);if(B!==null)switch(B.tag){case 3:if(B=B.stateNode,B.current.memoizedState.isDehydrated){var H=zz(B.pendingLanes);if(H!==0){var X=B;X.pendingLanes|=2;for(X.entangledLanes|=2;H;){var q=1<<31-vZ(H);X.entanglements[1]|=q,H&=~q}k6(B),(YG&6)===0&&(bY=yZ()+500,Z9(0,!1))}}break;case 31:case 13:X=Vz(B,2),X!==null&&$Z(X,B,2),Y4(),PX(B,2)}if(B=gH(J),B===null&&uB(G,Z,J,pY,z),B===Y)break;Y=B}Y!==null&&J.stopPropagation()}else uB(G,Z,J,null,z)}}function gH(G){return G=sH(G),bX(G)}var pY=null;function bX(G){if(pY=null,G=oz(G),G!==null){var Z=i8(G);if(Z===null)G=null;else{var z=Z.tag;if(z===13){if(G=BQ(Z),G!==null)return G;G=null}else if(z===31){if(G=HQ(Z),G!==null)return G;G=null}else if(z===3){if(Z.stateNode.current.memoizedState.isDehydrated)return Z.tag===3?Z.stateNode.containerInfo:null;G=null}else Z!==G&&(G=null)}}return pY=G,null}function uL(G){switch(G){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(g2()){case jQ:return 2;case QQ:return 8;case RY:case v2:return 32;case UQ:return 268435456;default:return 32}default:return 32}}var vH=!1,x7=null,P7=null,k7=null,l8=new Map,p8=new Map,V7=[],nM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ej(G,Z){switch(G){case"focusin":case"focusout":x7=null;break;case"dragenter":case"dragleave":P7=null;break;case"mouseover":case"mouseout":k7=null;break;case"pointerover":case"pointerout":l8.delete(Z.pointerId);break;case"gotpointercapture":case"lostpointercapture":p8.delete(Z.pointerId)}}function W8(G,Z,z,J,Y,B){if(G===null||G.nativeEvent!==B)return G={blockedOn:Z,domEventName:z,eventSystemFlags:J,nativeEvent:B,targetContainers:[Y]},Z!==null&&(Z=IJ(Z),Z!==null&&vL(Z)),G;return G.eventSystemFlags|=J,Z=G.targetContainers,Y!==null&&Z.indexOf(Y)===-1&&Z.push(Y),G}function tM(G,Z,z,J,Y){switch(Z){case"focusin":return x7=W8(x7,G,Z,z,J,Y),!0;case"dragenter":return P7=W8(P7,G,Z,z,J,Y),!0;case"mouseover":return k7=W8(k7,G,Z,z,J,Y),!0;case"pointerover":var B=Y.pointerId;return l8.set(B,W8(l8.get(B)||null,G,Z,z,J,Y)),!0;case"gotpointercapture":return B=Y.pointerId,p8.set(B,W8(p8.get(B)||null,G,Z,z,J,Y)),!0}return!1}function mL(G){var Z=oz(G.target);if(Z!==null){var z=i8(Z);if(z!==null){if(Z=z.tag,Z===13){if(Z=BQ(z),Z!==null){G.blockedOn=Z,gW(G.priority,function(){tj(z)});return}}else if(Z===31){if(Z=HQ(z),Z!==null){G.blockedOn=Z,gW(G.priority,function(){tj(z)});return}}else if(Z===3&&z.stateNode.current.memoizedState.isDehydrated){G.blockedOn=z.tag===3?z.stateNode.containerInfo:null;return}}}G.blockedOn=null}function FY(G){if(G.blockedOn!==null)return!1;for(var Z=G.targetContainers;0<Z.length;){var z=gH(G.nativeEvent);if(z===null){z=G.nativeEvent;var J=new z.constructor(z.type,z);ZH=J,z.target.dispatchEvent(J),ZH=null}else return Z=IJ(z),Z!==null&&vL(Z),G.blockedOn=z,!1;Z.shift()}return!0}function GQ(G,Z,z){FY(G)&&z.delete(Z)}function eM(){vH=!1,x7!==null&&FY(x7)&&(x7=null),P7!==null&&FY(P7)&&(P7=null),k7!==null&&FY(k7)&&(k7=null),l8.forEach(GQ),p8.forEach(GQ)}function e9(G,Z){G.blockedOn===Z&&(G.blockedOn=null,vH||(vH=!0,GZ.unstable_scheduleCallback(GZ.unstable_NormalPriority,eM)))}var GY=null;function ZQ(G){GY!==G&&(GY=G,GZ.unstable_scheduleCallback(GZ.unstable_NormalPriority,function(){GY===G&&(GY=null);for(var Z=0;Z<G.length;Z+=3){var z=G[Z],J=G[Z+1],Y=G[Z+2];if(typeof J!=="function")if(bX(J||z)===null)continue;else break;var B=IJ(z);B!==null&&(G.splice(Z,3),Z-=3,MH(B,{pending:!0,data:Y,method:z.method,action:J},J,Y))}}))}function DJ(G){function Z(q){return e9(q,G)}x7!==null&&e9(x7,G),P7!==null&&e9(P7,G),k7!==null&&e9(k7,G),l8.forEach(Z),p8.forEach(Z);for(var z=0;z<V7.length;z++){var J=V7[z];J.blockedOn===G&&(J.blockedOn=null)}for(;0<V7.length&&(z=V7[0],z.blockedOn===null);)mL(z),z.blockedOn===null&&V7.shift();if(z=(G.ownerDocument||G).$$reactFormReplay,z!=null)for(J=0;J<z.length;J+=3){var Y=z[J],B=z[J+1],H=Y[CZ]||null;if(typeof B==="function")H||ZQ(z);else if(H){var X=null;if(B&&B.hasAttribute("formAction")){if(Y=B,H=B[CZ]||null)X=H.formAction;else if(bX(Y)!==null)continue}else X=H.action;typeof X==="function"?z[J+1]=X:(z.splice(J,3),J-=3),ZQ(z)}}}function dL(){function G(B){B.canIntercept&&B.info==="react-transition"&&B.intercept({handler:function(){return new Promise(function(H){return Y=H})},focusReset:"manual",scroll:"manual"})}function Z(){Y!==null&&(Y(),Y=null),J||setTimeout(z,20)}function z(){if(!J&&!navigation.transition){var B=navigation.currentEntry;B&&B.url!=null&&navigation.navigate(B.url,{state:B.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation==="object"){var J=!1,Y=null;return navigation.addEventListener("navigate",G),navigation.addEventListener("navigatesuccess",Z),navigation.addEventListener("navigateerror",Z),setTimeout(z,100),function(){J=!0,navigation.removeEventListener("navigate",G),navigation.removeEventListener("navigatesuccess",Z),navigation.removeEventListener("navigateerror",Z),Y!==null&&(Y(),Y=null)}}}function EX(G){this._internalRoot=G}X4.prototype.render=EX.prototype.render=function(G){var Z=this._internalRoot;if(Z===null)throw Error(h(409));var z=Z.current,J=uZ();gL(z,J,G,Z,null,null)};X4.prototype.unmount=EX.prototype.unmount=function(){var G=this._internalRoot;if(G!==null){this._internalRoot=null;var Z=G.containerInfo;gL(G.current,2,null,G,null,null),Y4(),Z[KJ]=null}};function X4(G){this._internalRoot=G}X4.prototype.unstable_scheduleHydration=function(G){if(G){var Z=MQ();G={blockedOn:null,target:G,priority:Z};for(var z=0;z<V7.length&&Z!==0&&Z<V7[z].priority;z++);V7.splice(z,0,G),z===0&&mL(G)}};var zQ=JQ.version;if(zQ!=="19.2.8")throw Error(h(527,zQ,"19.2.8"));BG.findDOMNode=function(G){var Z=G._reactInternals;if(Z===void 0){if(typeof G.render==="function")throw Error(h(188));throw G=Object.keys(G).join(","),Error(h(268,G))}return G=x2(Z),G=G!==null?XQ(G):null,G=G===null?null:G.stateNode,G};var GO={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:K0,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){if(iz=__REACT_DEVTOOLS_GLOBAL_HOOK__,!iz.isDisabled&&iz.supportsFiber)try{s8=iz.inject(GO),gZ=iz}catch(G){}}var iz;q4.createRoot=function(G,Z){if(!YQ(G))throw Error(h(299));var z=!1,J="",Y=kU,B=bU,H=EU;return Z!==null&&Z!==void 0&&(Z.unstable_strictMode===!0&&(z=!0),Z.identifierPrefix!==void 0&&(J=Z.identifierPrefix),Z.onUncaughtError!==void 0&&(Y=Z.onUncaughtError),Z.onCaughtError!==void 0&&(B=Z.onCaughtError),Z.onRecoverableError!==void 0&&(H=Z.onRecoverableError)),Z=hL(G,1,!1,null,null,z,J,null,Y,B,H,dL),G[KJ]=Z.current,TX(G),new EX(Z)};q4.hydrateRoot=function(G,Z,z){if(!YQ(G))throw Error(h(299));var J=!1,Y="",B=kU,H=bU,X=EU,q=null;return z!==null&&z!==void 0&&(z.unstable_strictMode===!0&&(J=!0),z.identifierPrefix!==void 0&&(Y=z.identifierPrefix),z.onUncaughtError!==void 0&&(B=z.onUncaughtError),z.onCaughtError!==void 0&&(H=z.onCaughtError),z.onRecoverableError!==void 0&&(X=z.onRecoverableError),z.formState!==void 0&&(q=z.formState)),Z=hL(G,1,!0,Z,z!=null?z:null,J,Y,q,B,H,X,dL),Z.context=yL(null),z=Z.current,J=uZ(),J=cH(J),Y=$7(J),Y.callback=null,C7(z,Y,J),z=J,Z.current.lanes=z,o8(Z,z),k6(Z),G[KJ]=Z.current,TX(G),new X4(Z)};q4.version="19.2.8"});var iL=I6((JV,pL)=>{function lL(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=="function")return;try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lL)}catch(G){console.error(G)}}lL(),pL.exports=cL()});var C=DG(U6(),1),BW=DG(V9(),1),kG=DG(U6(),1),s=DG(UZ(),1),CG=DG(UZ(),1),N6=DG(U6(),1),qW=DG(V9(),1),t7=DG(UZ(),1),p4=DG(UZ(),1),t0=DG(U6(),1),j=DG(UZ(),1),VG=DG(UZ(),1),bG=DG(U6(),1),W=DG(UZ(),1),D0=DG(U6(),1),r0=DG(UZ(),1),DW=DG(U6(),1),PZ=DG(UZ(),1),G8=DG(UZ(),1),KW=DG(U6(),1),yz=DG(UZ(),1),gz=DG(UZ(),1),o=DG(UZ(),1),m=DG(UZ(),1),U_=`.styles-module__popup___IhzrD svg[fill=none] {
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
}`,L_={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",popupEnter:"styles-module__popupEnter___AuQDN",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",popupExit:"styles-module__popupExit___JJKQX",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",green:"styles-module__green___99l3h",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let G=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");if(!G)G=document.createElement("style"),G.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(G);G.textContent=U_}var OG=L_,__=`.icon-transitions-module__iconState___uqK9J {
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
}`,A_={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let G=document.getElementById("feedback-tool-styles-components-icon-transitions");if(!G)G=document.createElement("style"),G.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(G);G.textContent=__}var AG=A_;var F_=({size:G=16})=>s.jsx("svg",{width:G,height:G,viewBox:"0 0 16 16",fill:"none",children:s.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})});var M_=({size:G=24,style:Z={}})=>s.jsxs("svg",{width:G,height:G,viewBox:"0 0 24 24",fill:"none",style:Z,children:[s.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[s.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),s.jsx("defs",{children:s.jsx("clipPath",{id:"clip0_list_sparkle",children:s.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),O_=({size:G=20,...Z})=>s.jsxs("svg",{width:G,height:G,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...Z,children:[s.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),s.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]});var V_=({size:G=24,copied:Z=!1,tint:z})=>s.jsxs("svg",{width:G,height:G,viewBox:"0 0 24 24",fill:"none",style:z?{color:z,transition:"color 0.3s ease"}:void 0,children:[s.jsxs("g",{className:`${AG.iconState} ${Z?AG.hiddenScaled:AG.visibleScaled}`,children:[s.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),s.jsxs("g",{className:`${AG.iconState} ${Z?AG.visibleScaled:AG.hiddenScaled}`,children:[s.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),R_=({size:G=24,state:Z="idle"})=>{let z=Z==="idle",J=Z==="sent",Y=Z==="failed",B=Z==="sending";return s.jsxs("svg",{width:G,height:G,viewBox:"0 0 24 24",fill:"none",children:[s.jsx("g",{className:`${AG.iconStateFast} ${z?AG.visibleScaled:B?AG.sending:AG.hiddenScaled}`,children:s.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),s.jsxs("g",{className:`${AG.iconStateFast} ${J?AG.visibleScaled:AG.hiddenScaled}`,children:[s.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),s.jsxs("g",{className:`${AG.iconStateFast} ${Y?AG.visibleScaled:AG.hiddenScaled}`,children:[s.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})};var w_=({size:G=24,isOpen:Z=!0})=>s.jsxs("svg",{width:G,height:G,viewBox:"0 0 24 24",fill:"none",children:[s.jsxs("g",{className:`${AG.iconFade} ${Z?AG.visible:AG.hidden}`,children:[s.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),s.jsxs("g",{className:`${AG.iconFade} ${Z?AG.hidden:AG.visible}`,children:[s.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),s.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),D_=({size:G=24,isPaused:Z=!1})=>s.jsxs("svg",{width:G,height:G,viewBox:"0 0 24 24",fill:"none",children:[s.jsxs("g",{className:`${AG.iconFadeFast} ${Z?AG.hidden:AG.visible}`,children:[s.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),s.jsx("path",{className:`${AG.iconFadeFast} ${Z?AG.visible:AG.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]});var K_=({size:G=16})=>s.jsxs("svg",{width:G,height:G,viewBox:"0 0 24 24",fill:"none",children:[s.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]});var I_=({size:G=16})=>s.jsx("svg",{width:G,height:G,viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})});var HW=({size:G=16})=>s.jsxs("svg",{width:G,height:G,viewBox:"0 0 24 24",fill:"none",children:[s.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[s.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),s.jsx("defs",{children:s.jsx("clipPath",{id:"clip0_2_53",children:s.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),f_=({size:G=24})=>s.jsx("svg",{width:G,height:G,viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),N_=({size:G=16})=>s.jsxs("svg",{width:G,height:G,viewBox:"0 0 20 20",fill:"none",children:[s.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),$_=({size:G=16})=>s.jsx("svg",{width:G,height:G,viewBox:"0 0 20 20",fill:"none",children:s.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),C_=({size:G=16})=>s.jsx("svg",{width:G,height:G,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),T_=({size:G=24})=>s.jsx("svg",{width:G,height:G,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),S_=({size:G=16})=>s.jsx("svg",{width:G,height:G,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})});var x_=({size:G=24})=>s.jsxs("svg",{width:G,height:G,viewBox:"0 0 24 24",fill:"none",children:[s.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),XW=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],k4=XW.flatMap((G)=>[`:not([${G}])`,`:not([${G}] *)`]).join(""),l4="feedback-freeze-styles",b4="__agentation_freeze";function P_(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:(Z)=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};let G=window;if(!G[b4])G[b4]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};return G[b4]}var g0=P_();if(typeof window<"u"&&!g0.installed)g0.origSetTimeout=window.setTimeout.bind(window),g0.origSetInterval=window.setInterval.bind(window),g0.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(G,Z,...z)=>{if(typeof G==="string")return g0.origSetTimeout(G,Z);return g0.origSetTimeout((...J)=>{if(g0.frozen)g0.frozenTimeoutQueue.push(()=>G(...J));else G(...J)},Z,...z)},window.setInterval=(G,Z,...z)=>{if(typeof G==="string")return g0.origSetInterval(G,Z);return g0.origSetInterval((...J)=>{if(!g0.frozen)G(...J)},Z,...z)},window.requestAnimationFrame=(G)=>{return g0.origRAF((Z)=>{if(g0.frozen)g0.frozenRAFQueue.push(G);else G(Z)})},g0.installed=!0;var{origSetTimeout:L0,origSetInterval:k_,origRAF:Ez}=g0;function b_(G){if(!G)return!1;return XW.some((Z)=>!!G.closest?.(`[${Z}]`))}function E_(){if(typeof document>"u")return;if(g0.frozen)return;g0.frozen=!0,g0.frozenTimeoutQueue=[],g0.frozenRAFQueue=[];let G=document.getElementById(l4);if(!G)G=document.createElement("style"),G.id=l4;G.textContent=`
    *${k4},
    *${k4}::before,
    *${k4}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(G),g0.pausedAnimations=[];try{document.getAnimations().forEach((Z)=>{if(Z.playState!=="running")return;let z=Z.effect?.target;if(!b_(z))Z.pause(),g0.pausedAnimations.push(Z)})}catch{}document.querySelectorAll("video").forEach((Z)=>{if(!Z.paused)Z.dataset.wasPaused="false",Z.pause()})}function bq(){if(typeof document>"u")return;if(!g0.frozen)return;g0.frozen=!1;let G=g0.frozenTimeoutQueue;g0.frozenTimeoutQueue=[];for(let z of G)g0.origSetTimeout(()=>{if(g0.frozen){g0.frozenTimeoutQueue.push(z);return}try{z()}catch(J){console.warn("[agentation] Error replaying queued timeout:",J)}},0);let Z=g0.frozenRAFQueue;g0.frozenRAFQueue=[];for(let z of Z)g0.origRAF((J)=>{if(g0.frozen){g0.frozenRAFQueue.push(z);return}z(J)});for(let z of g0.pausedAnimations)try{z.play()}catch(J){console.warn("[agentation] Error resuming animation:",J)}g0.pausedAnimations=[],document.getElementById(l4)?.remove(),document.querySelectorAll("video").forEach((z)=>{if(z.dataset.wasPaused==="false")z.play().catch(()=>{}),delete z.dataset.wasPaused})}function E4(G){if(!G)return;let Z=(z)=>z.stopImmediatePropagation();document.addEventListener("focusin",Z,!0),document.addEventListener("focusout",Z,!0);try{G.focus()}finally{document.removeEventListener("focusin",Z,!0),document.removeEventListener("focusout",Z,!0)}}var k9=kG.forwardRef(function({element:Z,timestamp:z,selectedText:J,placeholder:Y="What should change?",initialValue:B="",submitLabel:H="Add",onSubmit:X,onCancel:q,onDelete:A,style:U,accentColor:V="#3c82f7",isExiting:L=!1,lightMode:D=!1,computedStyles:f},x){let[T,_]=kG.useState(B),[O,K]=kG.useState(!1),[$,p]=kG.useState("initial"),[Y0,k]=kG.useState(!1),[a,G0]=kG.useState(!1),n=kG.useRef(null),_0=kG.useRef(null),GG=kG.useRef(null),LG=kG.useRef(null);kG.useEffect(()=>{if(L&&$!=="exit")p("exit")},[L,$]),kG.useEffect(()=>{L0(()=>{p("enter")},0);let F0=L0(()=>{p("entered")},200),o0=L0(()=>{let EG=n.current;if(EG)E4(EG),EG.selectionStart=EG.selectionEnd=EG.value.length,EG.scrollTop=EG.scrollHeight},50);return()=>{if(clearTimeout(F0),clearTimeout(o0),GG.current)clearTimeout(GG.current);if(LG.current)clearTimeout(LG.current)}},[]);let b0=kG.useCallback(()=>{if(LG.current)clearTimeout(LG.current);K(!0),LG.current=L0(()=>{K(!1),E4(n.current)},250)},[]);kG.useImperativeHandle(x,()=>({shake:b0}),[b0]);let c0=kG.useCallback(()=>{p("exit"),GG.current=L0(()=>{q()},150)},[q]),$0=kG.useCallback(()=>{if(!T.trim())return;X(T.trim())},[T,X]),e0=kG.useCallback((F0)=>{if(F0.stopPropagation(),F0.nativeEvent.isComposing)return;if(F0.key==="Enter"&&!F0.shiftKey)F0.preventDefault(),$0();if(F0.key==="Escape")c0()},[$0,c0]),i=[OG.popup,D?OG.light:"",$==="enter"?OG.enter:"",$==="entered"?OG.entered:"",$==="exit"?OG.exit:"",O?OG.shake:""].filter(Boolean).join(" ");return CG.jsxs("div",{ref:_0,className:i,"data-annotation-popup":!0,style:U,onClick:(F0)=>F0.stopPropagation(),children:[CG.jsxs("div",{className:OG.header,children:[f&&Object.keys(f).length>0?CG.jsxs("button",{className:OG.headerToggle,onClick:()=>{let F0=a;if(G0(!a),F0)L0(()=>E4(n.current),0)},type:"button",children:[CG.jsx("svg",{className:`${OG.chevron} ${a?OG.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:CG.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),CG.jsx("span",{className:OG.element,children:Z})]}):CG.jsx("span",{className:OG.element,children:Z}),z&&CG.jsx("span",{className:OG.timestamp,children:z})]}),f&&Object.keys(f).length>0&&CG.jsx("div",{className:`${OG.stylesWrapper} ${a?OG.expanded:""}`,children:CG.jsx("div",{className:OG.stylesInner,children:CG.jsx("div",{className:OG.stylesBlock,children:Object.entries(f).map(([F0,o0])=>CG.jsxs("div",{className:OG.styleLine,children:[CG.jsx("span",{className:OG.styleProperty,children:F0.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",CG.jsx("span",{className:OG.styleValue,children:o0}),";"]},F0))})})}),J&&CG.jsxs("div",{className:OG.quote,children:["“",J.slice(0,80),J.length>80?"...":"","”"]}),CG.jsx("textarea",{ref:n,className:OG.textarea,style:{borderColor:Y0?V:void 0},placeholder:Y,value:T,onChange:(F0)=>_(F0.target.value),onFocus:()=>k(!0),onBlur:()=>k(!1),rows:2,onKeyDown:e0}),CG.jsxs("div",{className:OG.actions,children:[A&&CG.jsx("div",{className:OG.deleteWrapper,children:CG.jsx("button",{className:OG.deleteButton,onClick:A,type:"button",children:CG.jsx(T_,{size:22})})}),CG.jsx("button",{className:OG.cancel,onClick:c0,children:"Cancel"}),CG.jsx("button",{className:OG.submit,style:{backgroundColor:V,opacity:T.trim()?1:0.4},onClick:$0,disabled:!T.trim(),children:H})]})]})}),h_=({content:G,children:Z,...z})=>{let[J,Y]=N6.useState(!1),[B,H]=N6.useState(!1),[X,q]=N6.useState({top:0,right:0}),A=N6.useRef(null),U=N6.useRef(null),V=N6.useRef(null),L=()=>{if(A.current){let x=A.current.getBoundingClientRect();q({top:x.top+x.height/2,right:window.innerWidth-x.left+8})}},D=()=>{if(H(!0),V.current)clearTimeout(V.current),V.current=null;L(),U.current=L0(()=>{Y(!0)},500)},f=()=>{if(U.current)clearTimeout(U.current),U.current=null;Y(!1),V.current=L0(()=>{H(!1)},150)};return N6.useEffect(()=>{return()=>{if(U.current)clearTimeout(U.current);if(V.current)clearTimeout(V.current)}},[]),t7.jsxs(t7.Fragment,{children:[t7.jsx("span",{ref:A,onMouseEnter:D,onMouseLeave:f,...z,children:Z}),B&&qW.createPortal(t7.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:X.top,right:X.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:J?1:0,transition:"opacity 0.15s ease"},children:G}),document.body)]})},y_=`.styles-module__tooltip___mcXL2 {
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
}`,g_={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let G=document.getElementById("feedback-tool-styles-help-tooltip-styles");if(!G)G=document.createElement("style"),G.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(G);G.textContent=y_}var Eq=g_,n7=({content:G})=>{return p4.jsx(h_,{className:Eq.tooltip,content:G,children:p4.jsx(O_,{className:Eq.tooltipIcon})})},e={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},WW=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...e.navigation},{type:"header",label:"Header",...e.header},{type:"hero",label:"Hero",...e.hero},{type:"section",label:"Section",...e.section},{type:"sidebar",label:"Sidebar",...e.sidebar},{type:"footer",label:"Footer",...e.footer},{type:"modal",label:"Modal",...e.modal},{type:"banner",label:"Banner",...e.banner},{type:"drawer",label:"Drawer",...e.drawer},{type:"popover",label:"Popover",...e.popover},{type:"divider",label:"Divider",...e.divider}]},{section:"Content",items:[{type:"card",label:"Card",...e.card},{type:"text",label:"Text",...e.text},{type:"image",label:"Image",...e.image},{type:"video",label:"Video",...e.video},{type:"table",label:"Table",...e.table},{type:"grid",label:"Grid",...e.grid},{type:"list",label:"List",...e.list},{type:"chart",label:"Chart",...e.chart},{type:"codeBlock",label:"Code Block",...e.codeBlock},{type:"map",label:"Map",...e.map},{type:"timeline",label:"Timeline",...e.timeline},{type:"calendar",label:"Calendar",...e.calendar},{type:"accordion",label:"Accordion",...e.accordion},{type:"carousel",label:"Carousel",...e.carousel},{type:"logo",label:"Logo",...e.logo},{type:"faq",label:"FAQ",...e.faq},{type:"gallery",label:"Gallery",...e.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...e.button},{type:"input",label:"Input",...e.input},{type:"search",label:"Search",...e.search},{type:"form",label:"Form",...e.form},{type:"tabs",label:"Tabs",...e.tabs},{type:"dropdown",label:"Dropdown",...e.dropdown},{type:"toggle",label:"Toggle",...e.toggle},{type:"stepper",label:"Stepper",...e.stepper},{type:"rating",label:"Rating",...e.rating},{type:"fileUpload",label:"File Upload",...e.fileUpload},{type:"checkbox",label:"Checkbox",...e.checkbox},{type:"radio",label:"Radio",...e.radio},{type:"slider",label:"Slider",...e.slider},{type:"datePicker",label:"Date Picker",...e.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...e.avatar},{type:"badge",label:"Badge",...e.badge},{type:"tag",label:"Tag",...e.tag},{type:"breadcrumb",label:"Breadcrumb",...e.breadcrumb},{type:"pagination",label:"Pagination",...e.pagination},{type:"progress",label:"Progress",...e.progress},{type:"alert",label:"Alert",...e.alert},{type:"toast",label:"Toast",...e.toast},{type:"notification",label:"Notification",...e.notification},{type:"tooltip",label:"Tooltip",...e.tooltip},{type:"stat",label:"Stat",...e.stat},{type:"skeleton",label:"Skeleton",...e.skeleton},{type:"chip",label:"Chip",...e.chip},{type:"icon",label:"Icon",...e.icon},{type:"spinner",label:"Spinner",...e.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...e.pricing},{type:"testimonial",label:"Testimonial",...e.testimonial},{type:"cta",label:"CTA",...e.cta},{type:"productCard",label:"Product Card",...e.productCard},{type:"profile",label:"Profile",...e.profile},{type:"feature",label:"Feature",...e.feature},{type:"team",label:"Team",...e.team},{type:"login",label:"Login",...e.login},{type:"contact",label:"Contact",...e.contact}]}],L6={};for(let G of WW)for(let Z of G.items)L6[Z.type]=Z;function g({w:G,h:Z=3,strong:z}){return j.jsx("div",{style:{width:typeof G==="number"?`${G}px`:G,height:Z,borderRadius:2,background:z?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function jG({w:G,h:Z,radius:z=3,style:J}){return j.jsx("div",{style:{width:typeof G==="number"?`${G}px`:G,height:typeof Z==="number"?`${Z}px`:Z,borderRadius:z,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...J}})}function OZ({size:G}){return j.jsx("div",{style:{width:G,height:G,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function v_({width:G,height:Z}){let z=Math.max(8,Z*0.2);return j.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${z}px`,gap:G*0.02},children:[j.jsx(jG,{w:Math.max(20,Z*0.5),h:Math.max(12,Z*0.4),radius:2}),j.jsxs("div",{style:{flex:1,display:"flex",gap:G*0.03,marginLeft:G*0.04},children:[j.jsx(g,{w:G*0.06}),j.jsx(g,{w:G*0.07}),j.jsx(g,{w:G*0.05}),j.jsx(g,{w:G*0.06})]}),j.jsx(jG,{w:G*0.1,h:Math.min(28,Z*0.5),radius:4})]})}function u_({width:G,height:Z,text:z}){return j.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:Z*0.05},children:[z?j.jsx("span",{style:{fontSize:Math.min(20,Z*0.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:z}):j.jsx(g,{w:G*0.5,h:Math.max(6,Z*0.04),strong:!0}),j.jsx(g,{w:G*0.6}),j.jsx(g,{w:G*0.4}),j.jsx(jG,{w:Math.min(140,G*0.2),h:Math.min(36,Z*0.12),radius:6,style:{marginTop:Z*0.06}})]})}function m_({width:G,height:Z}){let z=Math.max(3,Math.floor(Z/36));return j.jsxs("div",{style:{padding:G*0.08,display:"flex",flexDirection:"column",gap:Z*0.03},children:[j.jsx(g,{w:G*0.6,h:4,strong:!0}),Array.from({length:z},(J,Y)=>j.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[j.jsx(jG,{w:10,h:10,radius:2}),j.jsx(g,{w:G*(0.4+Y*17%30/100)})]},Y))]})}function d_({width:G,height:Z}){let z=Math.max(2,Math.min(4,Math.floor(G/160)));return j.jsx("div",{style:{display:"flex",padding:`${Z*0.12}px ${G*0.03}px`,gap:G*0.05},children:Array.from({length:z},(J,Y)=>j.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[j.jsx(g,{w:"60%",h:3,strong:!0}),j.jsx(g,{w:"80%",h:2}),j.jsx(g,{w:"70%",h:2}),j.jsx(g,{w:"60%",h:2})]},Y))})}function c_({width:G,height:Z}){return j.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[j.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[j.jsx(g,{w:G*0.3,h:4,strong:!0}),j.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),j.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[j.jsx(g,{w:"90%"}),j.jsx(g,{w:"70%"}),j.jsx(g,{w:"80%"})]}),j.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[j.jsx(jG,{w:70,h:26,radius:4}),j.jsx(jG,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function l_({width:G,height:Z}){return j.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[j.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),j.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[j.jsx(g,{w:"70%",h:4,strong:!0}),j.jsx(g,{w:"95%",h:2}),j.jsx(g,{w:"85%",h:2}),j.jsx(g,{w:"50%",h:2})]})]})}function p_({width:G,height:Z,text:z}){if(z)return j.jsx("div",{style:{padding:4,fontSize:Math.min(14,Z*0.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:z});let J=Math.max(2,Math.floor(Z/18));return j.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[j.jsx(g,{w:G*0.6,h:5,strong:!0}),Array.from({length:J},(Y,B)=>j.jsx(g,{w:`${70+B*13%25}%`,h:2},B))]})}function i_({width:G,height:Z}){return j.jsx("div",{style:{height:"100%",position:"relative"},children:j.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${G} ${Z}`,preserveAspectRatio:"none",fill:"none",children:[j.jsx("line",{x1:"0",y1:"0",x2:G,y2:Z,stroke:"var(--agd-stroke)",strokeWidth:"1"}),j.jsx("line",{x1:G,y1:"0",x2:"0",y2:Z,stroke:"var(--agd-stroke)",strokeWidth:"1"}),j.jsx("circle",{cx:G*0.3,cy:Z*0.3,r:Math.min(G,Z)*0.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function s_({width:G,height:Z}){let z=Math.max(2,Math.min(5,Math.floor(G/100))),J=Math.max(2,Math.min(6,Math.floor(Z/32)));return j.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[j.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:z},(Y,B)=>j.jsx("div",{style:{flex:1,padding:"0 8px"},children:j.jsx(g,{w:"70%",h:3,strong:!0})},B))}),Array.from({length:J},(Y,B)=>j.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:z},(H,X)=>j.jsx("div",{style:{flex:1,padding:"0 8px"},children:j.jsx(g,{w:`${50+(B*7+X*13)%40}%`,h:2})},X))},B))]})}function r_({width:G,height:Z}){let z=Math.max(2,Math.floor(Z/28));return j.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:z},(J,Y)=>j.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[j.jsx(OZ,{size:8}),j.jsx(g,{w:`${55+Y*17%35}%`,h:2})]},Y))})}function o_({width:G,height:Z,text:z}){return j.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,Z/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:z?j.jsx("span",{style:{fontSize:Math.min(13,Z*0.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:z}):j.jsx(g,{w:Math.max(20,G*0.5),h:3,strong:!0})})}function a_({width:G,height:Z}){return j.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[j.jsx(g,{w:Math.min(80,G*0.3),h:2}),j.jsx("div",{style:{height:Math.min(36,Z*0.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:j.jsx(g,{w:"40%",h:2})})]})}function n_({width:G,height:Z}){let z=Math.max(2,Math.min(5,Math.floor(Z/56)));return j.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:Z*0.04,padding:8},children:[Array.from({length:z},(J,Y)=>j.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[j.jsx(g,{w:60+Y*17%30,h:2}),j.jsx(jG,{w:"100%",h:28,radius:4})]},Y)),j.jsx(jG,{w:Math.min(120,G*0.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function t_({width:G,height:Z}){let z=Math.max(2,Math.min(4,Math.floor(G/120)));return j.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[j.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:z},(J,Y)=>j.jsx("div",{style:{padding:"8px 12px",borderBottom:Y===0?"2px solid var(--agd-bar-strong)":"none"},children:j.jsx(g,{w:60,h:3,strong:Y===0})},Y))}),j.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[j.jsx(g,{w:"80%",h:2}),j.jsx(g,{w:"65%",h:2}),j.jsx(g,{w:"75%",h:2})]})]})}function e_({width:G,height:Z}){let z=Math.min(G,Z)/2;return j.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${G} ${Z}`,fill:"none",children:[j.jsx("circle",{cx:G/2,cy:Z/2,r:z-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),j.jsx("circle",{cx:G/2,cy:Z*0.38,r:z*0.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),j.jsx("path",{d:`M${G/2-z*0.55} ${Z*0.78} C${G/2-z*0.55} ${Z*0.55} ${G/2+z*0.55} ${Z*0.55} ${G/2+z*0.55} ${Z*0.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function GA({width:G,height:Z}){return j.jsx("div",{style:{height:"100%",borderRadius:Z/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:j.jsx(g,{w:Math.max(16,G*0.5),h:2,strong:!0})})}function ZA({width:G,height:Z}){return j.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:Z*0.08},children:[j.jsx(g,{w:G*0.5,h:Math.max(5,Z*0.06),strong:!0}),j.jsx(g,{w:G*0.35})]})}function zA({width:G,height:Z}){return j.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:Z*0.04,padding:G*0.04},children:[j.jsx(g,{w:G*0.3,h:4,strong:!0}),j.jsx(g,{w:G*0.7}),j.jsx(g,{w:G*0.5}),j.jsxs("div",{style:{flex:1,display:"flex",gap:G*0.03,marginTop:Z*0.06},children:[j.jsx(jG,{w:"33%",h:"100%",radius:4}),j.jsx(jG,{w:"33%",h:"100%",radius:4}),j.jsx(jG,{w:"33%",h:"100%",radius:4})]})]})}function JA({width:G,height:Z}){let z=Math.max(2,Math.min(4,Math.floor(G/140))),J=Math.max(1,Math.min(3,Math.floor(Z/120)));return j.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${z}, 1fr)`,gridTemplateRows:`repeat(${J}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:z*J},(Y,B)=>j.jsx(jG,{w:"100%",h:"100%",radius:4},B))})}function YA({width:G,height:Z}){let z=Math.max(2,Math.floor((Z-32)/28));return j.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[j.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:j.jsx(g,{w:G*0.5,h:3,strong:!0})}),j.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:z},(J,Y)=>j.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:Y===0?"var(--agd-fill)":"transparent"},children:j.jsx(g,{w:`${50+Y*17%35}%`,h:2,strong:Y===0})},Y))})]})}function BA({width:G,height:Z}){let z=Math.min(G,Z)/2;return j.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${G} ${Z}`,fill:"none",children:[j.jsx("rect",{x:"1",y:"1",width:G-2,height:Z-2,rx:z,stroke:"var(--agd-stroke)",strokeWidth:"1"}),j.jsx("circle",{cx:G-z,cy:Z/2,r:z*0.7,fill:"var(--agd-bar)"})]})}function HA({width:G,height:Z}){let z=Math.min(Z/2,20);return j.jsxs("div",{style:{height:"100%",borderRadius:z,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${z*0.6}px`,gap:6},children:[j.jsx(OZ,{size:Math.min(14,Z*0.4)}),j.jsx(g,{w:"50%",h:2})]})}function XA({width:G,height:Z}){return j.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[j.jsx(OZ,{size:Math.min(20,Z*0.5)}),j.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[j.jsx(g,{w:"60%",h:3,strong:!0}),j.jsx(g,{w:"80%",h:2})]}),j.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function qA({width:G,height:Z}){return j.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${G} ${Z}`,fill:"none",children:[j.jsx("rect",{x:"0",y:"0",width:G,height:Z,rx:Z/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),j.jsx("rect",{x:"1",y:"1",width:G*0.65,height:Z-2,rx:(Z-2)/2,fill:"var(--agd-bar)"})]})}function WA({width:G,height:Z}){let z=Math.max(3,Math.min(7,Math.floor(G/50))),J=G/(z*2);return j.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:z},(Y,B)=>{let H=30+(B*37+17)%55;return j.jsx(jG,{w:J,h:`${H}%`,radius:2},B)})})}function jA({width:G,height:Z}){let z=Math.min(G,Z)*0.12;return j.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[j.jsx(jG,{w:"100%",h:"100%",radius:4}),j.jsx("div",{style:{position:"absolute",width:z*2,height:z*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:j.jsx("div",{style:{width:0,height:0,borderLeft:`${z*0.6}px solid var(--agd-bar-strong)`,borderTop:`${z*0.4}px solid transparent`,borderBottom:`${z*0.4}px solid transparent`,marginLeft:z*0.15}})})]})}function QA({width:G,height:Z}){return j.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[j.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:j.jsx(g,{w:"60%",h:2})}),j.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function UA({width:G,height:Z}){let z=Math.max(2,Math.min(4,Math.floor(G/80)));return j.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:z},(J,Y)=>j.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[Y>0&&j.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),j.jsx(g,{w:40+Y*13%20,h:2,strong:Y===z-1})]},Y))})}function LA({width:G,height:Z}){let z=Math.max(3,Math.min(5,Math.floor(G/40))),J=Math.min(28,Z*0.8);return j.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:z},(Y,B)=>j.jsx(jG,{w:J,h:J,radius:4,style:B===1?{background:"var(--agd-bar)"}:void 0},B))})}function _A({width:G}){return j.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:j.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function AA({width:G,height:Z}){let z=Math.max(2,Math.min(4,Math.floor(Z/40)));return j.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:z},(J,Y)=>j.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:Y===0?2:1},children:[j.jsx(g,{w:`${40+Y*17%25}%`,h:3,strong:!0}),j.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:Y===0?"▼":"▶"})]},Y))})}function FA({width:G,height:Z}){return j.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[j.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[j.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),j.jsx(jG,{w:"100%",h:"100%",radius:4}),j.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),j.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[j.jsx(OZ,{size:5}),j.jsx(OZ,{size:5}),j.jsx(OZ,{size:5})]})]})}function MA({width:G,height:Z}){return j.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:Z*0.04},children:[j.jsx(g,{w:G*0.4,h:3,strong:!0}),j.jsx(g,{w:G*0.3,h:6,strong:!0}),j.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(z,J)=>j.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[j.jsx(OZ,{size:5}),j.jsx(g,{w:`${50+J*17%35}%`,h:2})]},J))}),j.jsx(jG,{w:G*0.7,h:Math.min(32,Z*0.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function OA({width:G,height:Z}){return j.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[j.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),j.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[j.jsx(g,{w:"90%",h:2}),j.jsx(g,{w:"75%",h:2}),j.jsx(g,{w:"60%",h:2})]}),j.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[j.jsx(OZ,{size:20}),j.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[j.jsx(g,{w:60,h:3,strong:!0}),j.jsx(g,{w:40,h:2})]})]})]})}function VA({width:G,height:Z}){return j.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:Z*0.08},children:[j.jsx(g,{w:G*0.5,h:Math.max(4,Z*0.05),strong:!0}),j.jsx(g,{w:G*0.35}),j.jsx(jG,{w:Math.min(140,G*0.25),h:Math.min(32,Z*0.15),radius:6,style:{marginTop:Z*0.04,background:"var(--agd-bar)"}})]})}function RA({width:G,height:Z}){return j.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[j.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:j.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),j.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[j.jsx(g,{w:"40%",h:3,strong:!0}),j.jsx(g,{w:"70%",h:2})]})]})}function wA({width:G,height:Z}){return j.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[j.jsx(g,{w:G*0.4,h:3,strong:!0}),j.jsx(jG,{w:60,h:Math.min(24,Z*0.6),radius:4})]})}function DA({width:G,height:Z}){return j.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:Z*0.06},children:[j.jsx(g,{w:G*0.5,h:2}),j.jsx(g,{w:G*0.4,h:Math.max(8,Z*0.18),strong:!0}),j.jsx(g,{w:G*0.3,h:2})]})}function KA({width:G,height:Z}){let z=Math.max(3,Math.min(5,Math.floor(G/100))),J=Math.min(12,Z*0.35);return j.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:z},(Y,B)=>j.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[j.jsx("div",{style:{width:J,height:J,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:B===0?"var(--agd-bar)":"transparent",flexShrink:0}}),B<z-1&&j.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},B))})}function IA({width:G,height:Z}){return j.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[j.jsx(g,{w:Math.max(16,G*0.5),h:2,strong:!0}),j.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function fA({width:G,height:Z}){let J=Math.min(Z*0.7,G/7.5);return j.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:J*0.2},children:Array.from({length:5},(Y,B)=>j.jsx("svg",{width:J,height:J,viewBox:"0 0 16 16",fill:"none",children:j.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:B<3?"var(--agd-bar)":"none"})},B))})}function NA({width:G,height:Z}){return j.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[j.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${G} ${Z}`,fill:"none",style:{position:"absolute",inset:0},children:[j.jsx("line",{x1:0,y1:Z*0.3,x2:G,y2:Z*0.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),j.jsx("line",{x1:0,y1:Z*0.6,x2:G,y2:Z*0.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),j.jsx("line",{x1:G*0.4,y1:0,x2:G*0.6,y2:Z,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),j.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:j.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[j.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),j.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function $A({width:G,height:Z}){let z=Math.max(3,Math.min(5,Math.floor(Z/60)));return j.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[j.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:z},(J,Y)=>j.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[j.jsx(OZ,{size:8}),Y<z-1&&j.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},Y))}),j.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:z},(J,Y)=>j.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[j.jsx(g,{w:`${35+Y*13%25}%`,h:3,strong:!0}),j.jsx(g,{w:`${50+Y*17%30}%`,h:2})]},Y))})]})}function CA({width:G,height:Z}){return j.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:Z*0.06},children:[j.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[j.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),j.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),j.jsx(g,{w:G*0.4,h:2}),j.jsx(g,{w:G*0.25,h:2})]})}function TA({width:G,height:Z}){let z=Math.max(3,Math.min(8,Math.floor(Z/20)));return j.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[j.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[j.jsx(OZ,{size:6}),j.jsx(OZ,{size:6}),j.jsx(OZ,{size:6})]}),Array.from({length:z},(J,Y)=>j.jsx("div",{style:{display:"flex",gap:6,paddingLeft:Y>0&&Y<z-1?12:0},children:j.jsx(g,{w:`${25+Y*23%50}%`,h:2,strong:Y===0})},Y))]})}function SA({width:G,height:Z}){let Y=Math.min((G-16)/7,(Z-40)/6);return j.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[j.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[j.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),j.jsx(g,{w:G*0.3,h:3,strong:!0}),j.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),j.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(B,H)=>j.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:Y*0.6},children:j.jsx(g,{w:Y*0.5,h:2})},`h${H}`)),Array.from({length:35},(B,H)=>j.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:Y},children:j.jsx("div",{style:{width:Y*0.6,height:Y*0.6,borderRadius:"50%",background:H===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:j.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:H===12?1:0.3}})})},H))]})]})}function xA({width:G,height:Z}){return j.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[j.jsx(OZ,{size:Math.min(32,Z*0.55)}),j.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[j.jsx(g,{w:"50%",h:3,strong:!0}),j.jsx(g,{w:"75%",h:2})]}),j.jsx(g,{w:30,h:2})]})}function PA({width:G,height:Z}){return j.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[j.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),j.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[j.jsx(g,{w:"65%",h:4,strong:!0}),j.jsx(g,{w:"40%",h:3}),j.jsx("div",{style:{flex:1}}),j.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[j.jsx(g,{w:"30%",h:5,strong:!0}),j.jsx(jG,{w:Math.min(70,G*0.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function kA({width:G,height:Z}){let z=Math.min(48,Z*0.3);return j.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:Z*0.06},children:[j.jsx(OZ,{size:z}),j.jsx(g,{w:G*0.45,h:4,strong:!0}),j.jsx(g,{w:G*0.3,h:2}),j.jsxs("div",{style:{display:"flex",gap:G*0.08,marginTop:Z*0.04},children:[j.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[j.jsx(g,{w:20,h:3,strong:!0}),j.jsx(g,{w:28,h:2})]}),j.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[j.jsx(g,{w:20,h:3,strong:!0}),j.jsx(g,{w:28,h:2})]}),j.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[j.jsx(g,{w:20,h:3,strong:!0}),j.jsx(g,{w:28,h:2})]})]})]})}function bA({width:G,height:Z}){let z=Math.max(G*0.6,80),J=Math.max(3,Math.floor(Z/40));return j.jsxs("div",{style:{height:"100%",display:"flex"},children:[j.jsx("div",{style:{width:G-z,background:"var(--agd-fill)",opacity:0.3}}),j.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:G*0.04},children:[j.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:Z*0.06},children:[j.jsx(g,{w:z*0.4,h:4,strong:!0}),j.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:J},(Y,B)=>j.jsx("div",{style:{padding:"6px 0"},children:j.jsx(g,{w:`${50+B*17%35}%`,h:2,strong:B===0})},B))]})]})}function EA({width:G,height:Z}){return j.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[j.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[j.jsx(g,{w:"70%",h:3,strong:!0}),j.jsx(g,{w:"90%",h:2}),j.jsx(g,{w:"60%",h:2})]}),j.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function hA({width:G,height:Z}){let z=Math.min(Z*0.7,G*0.3);return j.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:G*0.08},children:[j.jsx(jG,{w:z,h:z,radius:z*0.25}),j.jsx(g,{w:G*0.45,h:Math.max(4,Z*0.2),strong:!0})]})}function yA({width:G,height:Z}){let z=Math.max(2,Math.min(5,Math.floor(Z/56)));return j.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:z},(J,Y)=>j.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:Y===0?2:1},children:[j.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[j.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),j.jsx(g,{w:G*(0.3+Y*13%25/100),h:3,strong:!0})]}),j.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:Y===0?"▼":"▶"})]},Y))})}function gA({width:G,height:Z}){let z=Math.max(2,Math.min(4,Math.floor(G/120))),J=Math.max(1,Math.min(3,Math.floor(Z/120)));return j.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${z}, 1fr)`,gridTemplateRows:`repeat(${J}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:z*J},(Y,B)=>j.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:j.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[j.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),j.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},B))})}function vA({width:G,height:Z}){let z=Math.min(G,Z);return j.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${G} ${Z}`,fill:"none",children:[j.jsx("rect",{x:"1",y:(Z-z+2)/2,width:z-2,height:z-2,rx:z*0.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),j.jsx("path",{d:`M${z*0.25} ${Z/2}l${z*0.2} ${z*0.2} ${z*0.3}-${z*0.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function uA({width:G,height:Z}){let z=Math.min(G,Z)/2-1;return j.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${G} ${Z}`,fill:"none",children:[j.jsx("circle",{cx:G/2,cy:Z/2,r:z,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),j.jsx("circle",{cx:G/2,cy:Z/2,r:z*0.45,fill:"var(--agd-bar)"})]})}function mA({width:G,height:Z}){let z=Math.max(2,Z*0.12),J=Math.min(Z*0.35,10),Y=G*0.55;return j.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[j.jsx("div",{style:{width:"100%",height:z,borderRadius:z/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:j.jsx("div",{style:{width:Y,height:"100%",borderRadius:z/2,background:"var(--agd-bar)"}})}),j.jsx("div",{style:{position:"absolute",left:Y-J,width:J*2,height:J*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function dA({width:G,height:Z}){let z=Math.min(36,Z*0.15),J=7,Y=4,B=Math.min((G-16)/7,(Z-z-40)/5);return j.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[j.jsxs("div",{style:{height:z,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[j.jsx(g,{w:"40%",h:2}),j.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[j.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),j.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),j.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[j.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[j.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),j.jsx(g,{w:G*0.25,h:2,strong:!0}),j.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),j.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:1,padding:"0 4px",flex:1},children:Array.from({length:28},(H,X)=>j.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:B},children:j.jsx("div",{style:{width:B*0.5,height:B*0.5,borderRadius:"50%",background:X===10?"var(--agd-bar)":"transparent"},children:j.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:j.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:X===10?1:0.25}})})})},X))})]})]})}function cA({width:G,height:Z}){return j.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:Z*0.08,padding:4},children:[j.jsx("div",{style:{width:"100%",height:Z*0.2,borderRadius:4,background:"var(--agd-fill)"}}),j.jsx("div",{style:{width:"70%",height:Math.max(6,Z*0.1),borderRadius:3,background:"var(--agd-fill)"}}),j.jsx("div",{style:{width:"90%",height:Math.max(4,Z*0.06),borderRadius:3,background:"var(--agd-fill)"}}),j.jsx("div",{style:{width:"50%",height:Math.max(4,Z*0.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function lA({width:G,height:Z}){return j.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:j.jsxs("div",{style:{height:"100%",flex:1,borderRadius:Z/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${Z*0.3}px`,gap:4},children:[j.jsx(g,{w:"60%",h:2,strong:!0}),j.jsx("div",{style:{width:Math.max(6,Z*0.3),height:Math.max(6,Z*0.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function pA({width:G,height:Z}){let z=Math.min(G,Z);return j.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${G} ${Z}`,fill:"none",children:j.jsx("path",{d:`M${G/2} ${(Z-z)/2+z*0.1}l${z*0.12} ${z*0.25} ${z*0.28} ${z*0.04}-${z*0.2} ${z*0.2} ${z*0.05} ${z*0.28}-${z*0.25}-${z*0.12}-${z*0.25} ${z*0.12} ${z*0.05}-${z*0.28}-${z*0.2}-${z*0.2} ${z*0.28}-${z*0.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function iA({width:G,height:Z}){let z=Math.min(G,Z)/2-2;return j.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${G} ${Z}`,fill:"none",children:[j.jsx("circle",{cx:G/2,cy:Z/2,r:z,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),j.jsx("path",{d:`M${G/2} ${Z/2-z}a${z} ${z} 0 0 1 ${z} ${z}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function sA({width:G,height:Z}){let z=Math.min(36,Z*0.25,G*0.12),J=Math.max(1,Math.min(3,Math.floor(Z/80)));return j.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:J},(Y,B)=>j.jsxs("div",{style:{display:"flex",gap:G*0.04,alignItems:"flex-start"},children:[j.jsx(jG,{w:z,h:z,radius:z*0.25}),j.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[j.jsx(g,{w:`${40+B*13%20}%`,h:3,strong:!0}),j.jsx(g,{w:`${60+B*17%25}%`,h:2})]})]},B))})}function rA({width:G,height:Z}){let z=Math.max(2,Math.min(4,Math.floor(G/120))),J=Math.min(36,Z*0.25);return j.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:Z*0.06,padding:Z*0.06},children:[j.jsx(g,{w:G*0.3,h:4,strong:!0}),j.jsx("div",{style:{display:"flex",gap:G*0.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:z},(Y,B)=>j.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[j.jsx(OZ,{size:J}),j.jsx(g,{w:G*0.12,h:3,strong:!0}),j.jsx(g,{w:G*0.08,h:2})]},B))})]})}function oA({width:G,height:Z}){let z=Math.max(2,Math.min(3,Math.floor(Z/80)));return j.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:G*0.06,gap:Z*0.04},children:[j.jsx(g,{w:G*0.5,h:Math.max(5,Z*0.04),strong:!0}),j.jsx(g,{w:G*0.35,h:2}),j.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:Z*0.03,marginTop:Z*0.04},children:Array.from({length:z},(J,Y)=>j.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[j.jsx(g,{w:Math.min(60,G*0.2),h:2}),j.jsx(jG,{w:"100%",h:Math.min(32,Z*0.1),radius:4})]},Y))}),j.jsx(jG,{w:"100%",h:Math.min(36,Z*0.12),radius:6,style:{marginTop:Z*0.03,background:"var(--agd-bar)"}}),j.jsx(g,{w:G*0.4,h:2})]})}function aA({width:G,height:Z}){return j.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:G*0.04,gap:Z*0.03},children:[j.jsx(g,{w:G*0.4,h:4,strong:!0}),j.jsx(g,{w:G*0.6,h:2}),j.jsxs("div",{style:{display:"flex",gap:6,marginTop:Z*0.03},children:[j.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[j.jsx(g,{w:50,h:2}),j.jsx(jG,{w:"100%",h:Math.min(28,Z*0.1),radius:4})]}),j.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[j.jsx(g,{w:40,h:2}),j.jsx(jG,{w:"100%",h:Math.min(28,Z*0.1),radius:4})]})]}),j.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[j.jsx(g,{w:50,h:2}),j.jsx(jG,{w:"100%",h:Math.min(28,Z*0.1),radius:4})]}),j.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[j.jsx(g,{w:60,h:2}),j.jsx(jG,{w:"100%",h:"100%",radius:4})]}),j.jsx(jG,{w:Math.min(120,G*0.3),h:Math.min(30,Z*0.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var nA={navigation:v_,hero:u_,sidebar:m_,footer:d_,modal:c_,card:l_,text:p_,image:i_,table:s_,list:r_,button:o_,input:a_,form:n_,tabs:t_,avatar:e_,badge:GA,header:ZA,section:zA,grid:JA,dropdown:YA,toggle:BA,search:HA,toast:XA,progress:qA,chart:WA,video:jA,tooltip:QA,breadcrumb:UA,pagination:LA,divider:_A,accordion:AA,carousel:FA,pricing:MA,testimonial:OA,cta:VA,alert:RA,banner:wA,stat:DA,stepper:KA,tag:IA,rating:fA,map:NA,timeline:$A,fileUpload:CA,codeBlock:TA,calendar:SA,notification:xA,productCard:PA,profile:kA,drawer:bA,popover:EA,logo:hA,faq:yA,gallery:gA,checkbox:vA,radio:uA,slider:mA,datePicker:dA,skeleton:cA,chip:lA,icon:pA,spinner:iA,feature:sA,team:rA,login:oA,contact:aA};function tA({type:G,width:Z,height:z,text:J}){let Y=nA[G];if(!Y)return j.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:j.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:0.5},children:G})});return j.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:j.jsx(Y,{width:Z,height:z,text:J})})}var eA=`svg[fill=none] {
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
}`,G1={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let G=document.getElementById("feedback-tool-styles-design-mode-styles");if(!G)G=document.createElement("style"),G.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(G);G.textContent=eA}var b=G1,Pz=24,w9=5;function hq(G,Z,z,J,Y){let B=1/0,H=1/0,X=G.x,q=G.x+G.width,A=G.x+G.width/2,U=G.y,V=G.y+G.height,L=G.y+G.height/2,D=!J,f=D?[X,q,A]:[...J.left?[X]:[],...J.right?[q]:[]],x=D?[U,V,L]:[...J.top?[U]:[],...J.bottom?[V]:[]],T=[];for(let _0 of Z)if(!z.has(_0.id))T.push(_0);if(Y)T.push(...Y);for(let _0 of T){let GG=_0.x,LG=_0.x+_0.width,b0=_0.x+_0.width/2,c0=_0.y,$0=_0.y+_0.height,e0=_0.y+_0.height/2;for(let i of f)for(let F0 of[GG,LG,b0]){let o0=F0-i;if(Math.abs(o0)<w9&&Math.abs(o0)<Math.abs(B))B=o0}for(let i of x)for(let F0 of[c0,$0,e0]){let o0=F0-i;if(Math.abs(o0)<w9&&Math.abs(o0)<Math.abs(H))H=o0}}let _=Math.abs(B)<w9?B:0,O=Math.abs(H)<w9?H:0,K=[],$=new Set,p=X+_,Y0=q+_,k=A+_,a=U+O,G0=V+O,n=L+O;for(let _0 of T){let GG=_0.x,LG=_0.x+_0.width,b0=_0.x+_0.width/2,c0=_0.y,$0=_0.y+_0.height,e0=_0.y+_0.height/2;for(let i of[GG,b0,LG])for(let F0 of[p,k,Y0])if(Math.abs(F0-i)<0.5){let o0=`x:${Math.round(i)}`;if(!$.has(o0))$.add(o0),K.push({axis:"x",pos:i})}for(let i of[c0,e0,$0])for(let F0 of[a,n,G0])if(Math.abs(F0-i)<0.5){let o0=`y:${Math.round(i)}`;if(!$.has(o0))$.add(o0),K.push({axis:"y",pos:i})}}return{dx:_,dy:O,guides:K}}function yq(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function Z1({placements:G,onChange:Z,activeComponent:z,onActiveComponentChange:J,isDarkMode:Y,exiting:B,onInteractionChange:H,className:X,passthrough:q,extraSnapRects:A,onSelectionChange:U,deselectSignal:V,onDragMove:L,onDragEnd:D,clearSignal:f,wireframe:x}){let[T,_]=t0.useState(new Set),[O,K]=t0.useState(null),[$,p]=t0.useState(null),[Y0,k]=t0.useState(null),[a,G0]=t0.useState([]),[n,_0]=t0.useState(null),[GG,LG]=t0.useState(!1),b0=t0.useRef(!1),[c0,$0]=t0.useState(new Set),e0=t0.useRef(new Map),i=t0.useRef(null),F0=t0.useRef(null),o0=t0.useRef(G);o0.current=G;let EG=t0.useRef(U);EG.current=U;let RZ=t0.useRef(L);RZ.current=L;let _Z=t0.useRef(D);_Z.current=D;let H7=t0.useRef(V);t0.useEffect(()=>{if(V!==H7.current)H7.current=V,_(new Set)},[V]);let cZ=t0.useRef(f);t0.useEffect(()=>{if(f!==void 0&&f!==cZ.current){cZ.current=f;let c=new Set(o0.current.map((Q0)=>Q0.id));if(c.size>0)$0(c),_(new Set),F0.current=null,L0(()=>{Z([]),$0(new Set)},180)}},[f,Z]),t0.useEffect(()=>{let c=(Q0)=>{let O0=Q0.target;if(O0.tagName==="INPUT"||O0.tagName==="TEXTAREA"||O0.isContentEditable)return;if((Q0.key==="Backspace"||Q0.key==="Delete")&&T.size>0){Q0.preventDefault();let V0=new Set(T);$0(V0),_(new Set),L0(()=>{Z(o0.current.filter((ZG)=>!V0.has(ZG.id))),$0(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(Q0.key)&&T.size>0){Q0.preventDefault();let V0=Q0.shiftKey?20:1,ZG=Q0.key==="ArrowLeft"?-V0:Q0.key==="ArrowRight"?V0:0,HG=Q0.key==="ArrowUp"?-V0:Q0.key==="ArrowDown"?V0:0;Z(G.map((a0)=>T.has(a0.id)?{...a0,x:Math.max(0,a0.x+ZG),y:Math.max(0,a0.y+HG)}:a0));return}if(Q0.key==="Escape"){if(z)J(null);else if(T.size>0)_(new Set);return}};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[T,z,G,Z,J]);let X7=t0.useCallback((c)=>{if(c.button!==0)return;if(q)return;if(c.target.closest(`.${b.placement}`))return;c.preventDefault(),c.stopPropagation();let O0=window.scrollY,P0=c.clientX,V0=c.clientY;if(z){F0.current="place",H?.(!0);let ZG=!1,HG=P0,a0=V0,v0=(N)=>{HG=N.clientX,a0=N.clientY;let S=Math.abs(HG-P0),y=Math.abs(a0-V0);if(S>5||y>5)ZG=!0;if(ZG){let v=Math.min(P0,HG),t=Math.min(V0,a0),B0=Math.abs(HG-P0),d=Math.abs(a0-V0);K({x:v,y:t,w:B0,h:d}),k({x:N.clientX+12,y:N.clientY+12,text:`${Math.round(B0)} × ${Math.round(d)}`})}},A0=(N)=>{window.removeEventListener("mousemove",v0),window.removeEventListener("mouseup",A0),K(null),k(null),F0.current=null,H?.(!1);let S=e[z],y,v,t,B0;if(ZG)y=Math.min(P0,HG),v=Math.min(V0,a0)+O0,t=Math.max(Pz,Math.abs(HG-P0)),B0=Math.max(Pz,Math.abs(a0-V0));else t=S.width,B0=S.height,y=P0-t/2,v=V0+O0-B0/2;y=Math.max(0,y),v=Math.max(0,v);let d={id:yq(),type:z,x:y,y:v,width:t,height:B0,scrollY:O0,timestamp:Date.now()},X0=[...G,d];Z(X0),_(new Set([d.id])),J(null)};window.addEventListener("mousemove",v0),window.addEventListener("mouseup",A0)}else{if(!c.shiftKey)_(new Set);F0.current="select";let ZG=!1,HG=(v0)=>{let A0=Math.abs(v0.clientX-P0),N=Math.abs(v0.clientY-V0);if(A0>4||N>4)ZG=!0;if(ZG){let S=Math.min(P0,v0.clientX),y=Math.min(V0,v0.clientY);p({x:S,y,w:Math.abs(v0.clientX-P0),h:Math.abs(v0.clientY-V0)})}},a0=(v0)=>{if(window.removeEventListener("mousemove",HG),window.removeEventListener("mouseup",a0),F0.current=null,ZG){let A0=Math.min(P0,v0.clientX),N=Math.min(V0,v0.clientY)+O0,S=Math.abs(v0.clientX-P0),y=Math.abs(v0.clientY-V0),v=new Set(c.shiftKey?T:new Set);for(let t of G){let B0=t.y-O0;if(t.x+t.width>A0&&t.x<A0+S&&t.y+t.height>N&&t.y<N+y)v.add(t.id)}_(v)}p(null)};window.addEventListener("mousemove",HG),window.addEventListener("mouseup",a0)}},[z,q,G,Z,T]),B6=t0.useCallback((c,Q0)=>{if(c.button!==0)return;let O0=c.target;if(O0.closest(`.${b.handle}`)||O0.closest(`.${b.deleteButton}`))return;c.preventDefault(),c.stopPropagation();let P0;if(c.shiftKey)if(P0=new Set(T),P0.has(Q0))P0.delete(Q0);else P0.add(Q0);else if(!T.has(Q0))P0=new Set([Q0]);else P0=new Set(T);if(_(P0),P0.size!==T.size||[...P0].some((X0)=>!T.has(X0)))EG.current?.(P0,c.shiftKey);let ZG=window.scrollY,HG=c.clientX,a0=c.clientY,v0=new Map;for(let X0 of G)if(P0.has(X0.id))v0.set(X0.id,{x:X0.x,y:X0.y});F0.current="move",H?.(!0);let A0=!1,N=!1,S=G,y=0,v=0,t=new Map;for(let X0 of G)if(v0.has(X0.id))t.set(X0.id,{w:X0.width,h:X0.height});let B0=(X0)=>{let f0=X0.clientX-HG,l0=X0.clientY-a0;if(Math.abs(f0)>2||Math.abs(l0)>2)A0=!0;if(!A0)return;if(X0.altKey&&!N){N=!0;let R0=[];for(let wG of G)if(v0.has(wG.id))R0.push({...wG,id:yq(),timestamp:Date.now()});S=[...G,...R0]}let zG=1/0,q0=1/0,XG=-1/0,h0=-1/0;for(let[R0,wG]of v0){let ZZ=t.get(R0);if(!ZZ)continue;zG=Math.min(zG,wG.x+f0),q0=Math.min(q0,wG.y+l0),XG=Math.max(XG,wG.x+f0+ZZ.w),h0=Math.max(h0,wG.y+l0+ZZ.h)}let C0={x:zG,y:q0,width:XG-zG,height:h0-q0},{dx:W0,dy:qG,guides:s0}=hq(C0,S,new Set(v0.keys()),void 0,A);G0(s0);let T0=f0+W0,n0=l0+qG;y=T0,v=n0,Z(S.map((R0)=>{let wG=v0.get(R0.id);if(!wG)return R0;return{...R0,x:Math.max(0,wG.x+T0),y:Math.max(0,wG.y+n0)}})),RZ.current?.(T0,n0)},d=()=>{window.removeEventListener("mousemove",B0),window.removeEventListener("mouseup",d),F0.current=null,H?.(!1),G0([]),_Z.current?.(y,v,A0)};window.addEventListener("mousemove",B0),window.addEventListener("mouseup",d)},[T,G,Z,H]),E6=t0.useCallback((c,Q0,O0)=>{c.preventDefault(),c.stopPropagation();let P0=G.find((v)=>v.id===Q0);if(!P0)return;_(new Set([Q0])),F0.current="resize",H?.(!0);let{clientX:V0,clientY:ZG}=c,HG=P0.width,a0=P0.height,v0=P0.x,A0=P0.y,N={left:O0.includes("w"),right:O0.includes("e"),top:O0.includes("n"),bottom:O0.includes("s")},S=(v)=>{let t=v.clientX-V0,B0=v.clientY-ZG,d=HG,X0=a0,f0=v0,l0=A0;if(O0.includes("e"))d=Math.max(Pz,HG+t);if(O0.includes("w"))d=Math.max(Pz,HG-t),f0=v0+HG-d;if(O0.includes("s"))X0=Math.max(Pz,a0+B0);if(O0.includes("n"))X0=Math.max(Pz,a0-B0),l0=A0+a0-X0;let zG={x:f0,y:l0,width:d,height:X0},{dx:q0,dy:XG,guides:h0}=hq(zG,o0.current,new Set([Q0]),N,A);if(G0(h0),q0!==0){if(N.right)d+=q0;else if(N.left)f0+=q0,d-=q0}if(XG!==0){if(N.bottom)X0+=XG;else if(N.top)l0+=XG,X0-=XG}Z(o0.current.map((C0)=>C0.id===Q0?{...C0,x:f0,y:l0,width:d,height:X0}:C0)),k({x:v.clientX+12,y:v.clientY+12,text:`${Math.round(d)} × ${Math.round(X0)}`})},y=()=>{window.removeEventListener("mousemove",S),window.removeEventListener("mouseup",y),k(null),F0.current=null,H?.(!1),G0([])};window.addEventListener("mousemove",S),window.addEventListener("mouseup",y)},[G,Z,H]),q7=t0.useCallback((c)=>{F0.current=null,$0((Q0)=>{let O0=new Set(Q0);return O0.add(c),O0}),_((Q0)=>{let O0=new Set(Q0);return O0.delete(c),O0}),L0(()=>{Z(o0.current.filter((Q0)=>Q0.id!==c)),$0((Q0)=>{let O0=new Set(Q0);return O0.delete(c),O0})},180)},[Z]),u7=new Set(["text","hero","button","badge","cta","toast","modal","card","navigation","tabs","input","search","breadcrumb","pricing","testimonial","alert","banner","tag","notification","stat","productCard"]),xZ={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},H6=t0.useCallback((c)=>{let Q0=G.find((O0)=>O0.id===c);if(!Q0)return;b0.current=!!Q0.text,_0(c),LG(!1)},[G]),wZ=t0.useCallback(()=>{if(!n)return;LG(!0),L0(()=>{_0(null),LG(!1)},150)},[n]);t0.useEffect(()=>{if(B&&n)wZ()},[B]);let M6=t0.useCallback((c)=>{if(!n)return;Z(G.map((Q0)=>Q0.id===n?{...Q0,text:c.trim()||void 0}:Q0)),wZ()},[n,G,Z,wZ]),O6=typeof window<"u"?window.scrollY:0,Dz=["nw","ne","se","sw"],X6=x?"#f97316":"#3c82f7",E0=[{dir:"n",cls:b.edgeN,arrow:VG.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:VG.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:X6})})},{dir:"e",cls:b.edgeE,arrow:VG.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:VG.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:X6})})},{dir:"s",cls:b.edgeS,arrow:VG.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:VG.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:X6})})},{dir:"w",cls:b.edgeW,arrow:VG.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:VG.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:X6})})}];return VG.jsxs(VG.Fragment,{children:[VG.jsx("div",{ref:i,className:`${b.overlay} ${!Y?b.light:""} ${z?b.placing:""} ${q?b.passthrough:""} ${B?b.overlayExiting:""} ${x?b.wireframe:""}${X?` ${X}`:""}`,"data-feedback-toolbar":!0,onMouseDown:X7,children:G.map((c)=>{let Q0=T.has(c.id),O0=L6[c.type]?.label||c.type,P0=c.y-O6;return VG.jsxs("div",{"data-design-placement":c.id,className:`${b.placement} ${Q0?b.selected:""} ${c0.has(c.id)?b.exiting:""}`,style:{left:c.x,top:P0,width:c.width,height:c.height,position:"fixed"},onMouseDown:(V0)=>B6(V0,c.id),onDoubleClick:()=>H6(c.id),children:[VG.jsx("span",{className:b.placementLabel,children:O0}),VG.jsx("span",{className:`${b.placementAnnotation} ${c.text?b.annotationVisible:""}`,children:(()=>{if(c.text)e0.current.set(c.id,c.text);return c.text||e0.current.get(c.id)||""})()}),VG.jsx("div",{className:b.placementContent,children:VG.jsx(tA,{type:c.type,width:c.width,height:c.height,text:c.text})}),VG.jsx("div",{className:b.deleteButton,onMouseDown:(V0)=>V0.stopPropagation(),onClick:()=>q7(c.id),children:"✕"}),Dz.map((V0)=>VG.jsx("div",{className:`${b.handle} ${b[`handle${V0.charAt(0).toUpperCase()}${V0.slice(1)}`]}`,onMouseDown:(ZG)=>E6(ZG,c.id,V0)},V0)),E0.map(({dir:V0,cls:ZG,arrow:HG})=>VG.jsx("div",{className:`${b.edgeHandle} ${ZG}`,onMouseDown:(a0)=>E6(a0,c.id,V0),children:HG},V0))]},c.id)})}),n&&(()=>{let c=G.find((A0)=>A0.id===n);if(!c)return null;let Q0=c.y-O6,O0=c.x+c.width/2,P0=Q0-8,V0=Q0+c.height+8,ZG=P0>200,HG=V0<window.innerHeight-100,a0=Math.max(160,Math.min(window.innerWidth-160,O0)),v0;if(ZG)v0={left:a0,bottom:window.innerHeight-P0};else if(HG)v0={left:a0,top:V0};else v0={left:a0,top:Math.max(80,window.innerHeight/2-80)};return VG.jsx(k9,{element:L6[c.type]?.label||c.type,placeholder:xZ[c.type]||"Label or content text",initialValue:c.text??"",submitLabel:b0.current?"Save":"Set",onSubmit:M6,onCancel:wZ,onDelete:b0.current?()=>{M6("")}:void 0,isExiting:GG,lightMode:!Y,style:v0})})(),O&&VG.jsx("div",{className:b.drawBox,style:{left:O.x,top:O.y,width:O.w,height:O.h},"data-feedback-toolbar":!0}),$&&VG.jsx("div",{className:b.selectBox,style:{left:$.x,top:$.y,width:$.w,height:$.h},"data-feedback-toolbar":!0}),Y0&&VG.jsx("div",{className:b.sizeIndicator,style:{left:Y0.x,top:Y0.y},"data-feedback-toolbar":!0,children:Y0.text}),a.map((c,Q0)=>VG.jsx("div",{className:b.guideLine,style:c.axis==="x"?{position:"fixed",left:c.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:c.pos-O6,right:0,height:1},"data-feedback-toolbar":!0},`${c.axis}-${c.pos}-${Q0}`))]})}function z1(G){if(!G)return"";let Z=G.scrollTop>2,z=G.scrollTop+G.clientHeight<G.scrollHeight-2;return`${Z?b.fadeTop:""} ${z?b.fadeBottom:""}`}var F="currentColor",P="0.5";function J1({type:G}){switch(G){case"navigation":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:F,opacity:".4"}),W.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:F,opacity:".25"}),W.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:F,opacity:".25"})]});case"header":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:F,opacity:".35"}),W.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:F,opacity:".15"})]});case"hero":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:F,opacity:".35"}),W.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:F,opacity:".15"}),W.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:F,strokeWidth:P})]});case"section":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:F,opacity:".3"}),W.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:F,opacity:".15"}),W.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:F,opacity:".15"})]});case"sidebar":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:F,opacity:".3"}),W.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:F,opacity:".15"}),W.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:F,opacity:".15"})]});case"footer":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:F,opacity:".25"}),W.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:F,opacity:".25"}),W.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:F,opacity:".2"})]});case"modal":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:F,opacity:".3"}),W.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:F,opacity:".15"}),W.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:F,strokeWidth:P})]});case"divider":return W.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:W.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:F,strokeWidth:"0.5",opacity:".3"})});case"card":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:F,opacity:".04"}),W.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:F,opacity:".25"}),W.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:F,opacity:".12"})]});case"text":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:F,opacity:".3"}),W.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:F,opacity:".15"}),W.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:F,opacity:".15"}),W.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:F,opacity:".12"})]});case"image":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:F,strokeWidth:P}),W.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:F,strokeWidth:".3",opacity:".25"}),W.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:F,strokeWidth:".3",opacity:".25"})]});case"video":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:F,strokeWidth:P}),W.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:F,strokeWidth:P,fill:F,opacity:".15"})]});case"table":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:F,strokeWidth:P}),W.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:F,strokeWidth:".3",opacity:".25"}),W.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:F,strokeWidth:".3",opacity:".25"}),W.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:F,strokeWidth:".3",opacity:".25"}),W.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:F,strokeWidth:".3",opacity:".25"})]});case"grid":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:F,strokeWidth:P})]});case"list":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:F,opacity:".2"}),W.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:F,opacity:".2"}),W.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:F,opacity:".2"})]});case"chart":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:F,opacity:".2"}),W.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:F,opacity:".25"}),W.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:F,opacity:".3"}),W.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:F,opacity:".2"})]});case"accordion":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:F,opacity:".25"}),W.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:F,strokeWidth:P})]});case"carousel":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:F,strokeWidth:P}),W.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:F,strokeWidth:P,opacity:".35"}),W.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:F,strokeWidth:P,opacity:".35"}),W.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:F,opacity:".35"}),W.jsx("circle",{cx:"10",cy:"14",r:".6",fill:F,opacity:".15"}),W.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:F,opacity:".15"})]});case"button":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:F,opacity:".25"})]});case"input":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:F,opacity:".25"}),W.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:F,opacity:".12"})]});case"search":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:F,strokeWidth:P}),W.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:F,strokeWidth:P,opacity:".3"}),W.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:F,strokeWidth:P,opacity:".3"}),W.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:F,opacity:".12"})]});case"form":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:F,opacity:".25"}),W.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:F,opacity:".25"}),W.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:F,strokeWidth:P})]});case"tabs":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:F,opacity:".25"}),W.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:F,strokeWidth:P})]});case"dropdown":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:F,opacity:".2"}),W.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:F,strokeWidth:P,opacity:".3"}),W.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:F,strokeWidth:P,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:F,strokeWidth:P}),W.jsx("circle",{cx:"13",cy:"8",r:"2",fill:F,opacity:".3"})]});case"avatar":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:F,strokeWidth:P}),W.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:F,strokeWidth:P}),W.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:F,strokeWidth:P})]});case"badge":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:F,opacity:".25"})]});case"breadcrumb":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:F,opacity:".3"}),W.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:F,strokeWidth:P,opacity:".2"}),W.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:F,opacity:".2"}),W.jsx("path",{d:"M14 7l1 1-1 1",stroke:F,strokeWidth:P,opacity:".2"}),W.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:F,opacity:".15"})]});case"pagination":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:F,opacity:".15",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:F,strokeWidth:P})]});case"progress":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:F,opacity:".2"})]});case"toast":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:F,strokeWidth:P}),W.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:F,strokeWidth:P,opacity:".3"}),W.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:F,opacity:".25"}),W.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:F,opacity:".12"})]});case"tooltip":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:F,opacity:".25"}),W.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:F,strokeWidth:P})]});case"pricing":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:F,opacity:".25"}),W.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:F,opacity:".15"}),W.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:F,opacity:".1"}),W.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:F,opacity:".1"}),W.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:F,opacity:".2"})]});case"testimonial":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:F,strokeWidth:P}),W.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:F,opacity:".2",fontFamily:"serif",children:"“"}),W.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:F,opacity:".15"}),W.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:F,opacity:".12"}),W.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:F,strokeWidth:P,opacity:".25"}),W.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:F,opacity:".15"})]});case"cta":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:F,opacity:".3"}),W.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:F,opacity:".15"}),W.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:F,strokeWidth:P})]});case"alert":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:F,strokeWidth:P}),W.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:F,strokeWidth:P,opacity:".3"}),W.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:F,strokeWidth:"0.6",opacity:".5"}),W.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:F,opacity:".5"}),W.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:F,opacity:".2"})]});case"banner":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:F,opacity:".25"}),W.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:F,strokeWidth:P})]});case"stat":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:F,opacity:".15"}),W.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:F,opacity:".3"}),W.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:F,opacity:".12"})]});case"stepper":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("circle",{cx:"4",cy:"8",r:"2",fill:F,opacity:".2",stroke:F,strokeWidth:P}),W.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:F,strokeWidth:".4",opacity:".3"}),W.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:F,strokeWidth:P}),W.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:F,strokeWidth:".4",opacity:".3"}),W.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:F,strokeWidth:P})]});case"tag":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:F,opacity:".25"}),W.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:F,strokeWidth:P,opacity:".2"}),W.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:F,strokeWidth:P,opacity:".2"})]});case"rating":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:F,opacity:".25"}),W.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:F,opacity:".25"}),W.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:F,strokeWidth:P,opacity:".25"})]});case"map":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:F,strokeWidth:P}),W.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:F,strokeWidth:".3",opacity:".15"}),W.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:F,strokeWidth:".3",opacity:".15"}),W.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:F,opacity:".15",stroke:F,strokeWidth:P})]});case"timeline":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:F,strokeWidth:".4",opacity:".25"}),W.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:F,opacity:".2",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:F,opacity:".25"}),W.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:F,opacity:".15"}),W.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:F,opacity:".15"})]});case"fileUpload":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:F,strokeWidth:P,strokeDasharray:"2 1"}),W.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:F,strokeWidth:P,opacity:".3"}),W.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:F,opacity:".15"})]});case"codeBlock":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:F,strokeWidth:P}),W.jsx("circle",{cx:"4",cy:"4",r:".6",fill:F,opacity:".3"}),W.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:F,opacity:".3"}),W.jsx("circle",{cx:"7",cy:"4",r:".6",fill:F,opacity:".3"}),W.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:F,opacity:".2"}),W.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:F,opacity:".15"}),W.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:F,opacity:".12"})]});case"calendar":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:F,strokeWidth:P}),W.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:F,strokeWidth:".4",opacity:".25"}),W.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:F,opacity:".2"}),W.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:F,opacity:".2"}),W.jsx("circle",{cx:"7",cy:"9",r:".6",fill:F,opacity:".2"}),W.jsx("circle",{cx:"10",cy:"9",r:".6",fill:F,opacity:".2"}),W.jsx("circle",{cx:"13",cy:"9",r:".6",fill:F,opacity:".3"}),W.jsx("circle",{cx:"7",cy:"12",r:".6",fill:F,opacity:".2"}),W.jsx("circle",{cx:"10",cy:"12",r:".6",fill:F,opacity:".2"})]});case"notification":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:F,strokeWidth:P}),W.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:F,strokeWidth:P,opacity:".25"}),W.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:F,opacity:".25"}),W.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:F,opacity:".12"}),W.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:F,opacity:".25"})]});case"productCard":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:F,opacity:".04"}),W.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:F,opacity:".25"}),W.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:F,opacity:".15"}),W.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:F,strokeWidth:P})]});case"profile":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:F,opacity:".25"}),W.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:F,opacity:".12"})]});case"drawer":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:F,opacity:".25"}),W.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:F,opacity:".15"}),W.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:F,opacity:".15"}),W.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:F,strokeWidth:P,opacity:".15"})]});case"popover":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:F,opacity:".25"}),W.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:F,opacity:".15"}),W.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:F,strokeWidth:P})]});case"logo":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:F,strokeWidth:P}),W.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:F,strokeWidth:P,opacity:".3"}),W.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:F,opacity:".2"}),W.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:F,opacity:".12"})]});case"faq":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:F,opacity:".3",fontWeight:"bold",children:"?"}),W.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:F,opacity:".25"}),W.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:F,opacity:".12"}),W.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:F,opacity:".3",fontWeight:"bold",children:"?"}),W.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:F,opacity:".25"}),W.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:F,opacity:".12"})]});case"gallery":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:F,strokeWidth:P})]});case"checkbox":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:F,strokeWidth:P}),W.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:F,strokeWidth:P,opacity:".35"})]});case"radio":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:F,strokeWidth:P}),W.jsx("circle",{cx:"10",cy:"8",r:"2",fill:F,opacity:".3"})]});case"slider":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:F,opacity:".15"}),W.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:F,opacity:".25"}),W.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:F,strokeWidth:P})]});case"datePicker":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:F,opacity:".2"}),W.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:F,opacity:".12"}),W.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:F,strokeWidth:P,strokeDasharray:"2 1",opacity:".3"}),W.jsx("circle",{cx:"6",cy:"10",r:".6",fill:F,opacity:".2"}),W.jsx("circle",{cx:"10",cy:"10",r:".6",fill:F,opacity:".3"}),W.jsx("circle",{cx:"14",cy:"10",r:".6",fill:F,opacity:".2"}),W.jsx("circle",{cx:"6",cy:"13",r:".6",fill:F,opacity:".2"}),W.jsx("circle",{cx:"10",cy:"13",r:".6",fill:F,opacity:".2"})]});case"skeleton":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:F,opacity:".08"}),W.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:F,opacity:".08"}),W.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:F,opacity:".08"})]});case"chip":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:F,opacity:".08",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:F,opacity:".25"}),W.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:F,strokeWidth:P,opacity:".2"}),W.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:F,strokeWidth:P,opacity:".2"}),W.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:F,strokeWidth:P,opacity:".25"})]});case"icon":return W.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:W.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:F,strokeWidth:P,opacity:".3"})});case"spinner":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:F,strokeWidth:P,opacity:".12"}),W.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:F,strokeWidth:P,opacity:".35",strokeLinecap:"round"})]});case"feature":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:F,strokeWidth:P}),W.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:F,strokeWidth:P,opacity:".25"}),W.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:F,opacity:".25"}),W.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:F,opacity:".12"}),W.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:F,opacity:".25"}),W.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:F,opacity:".12"})]});case"team":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:F,opacity:".2"}),W.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:F,opacity:".2"}),W.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:F,strokeWidth:P,opacity:".5"}),W.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:F,opacity:".15"}),W.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:F,opacity:".1"})]});case"login":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:F,opacity:".25"}),W.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:F,opacity:".2"})]});case"contact":return W.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[W.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:F,opacity:".2"}),W.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:F,strokeWidth:P}),W.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:F,opacity:".2"})]});default:return null}}function Y1({activeType:G,onSelect:Z,onDragStart:z,scrollRef:J,fadeClass:Y,blankCanvas:B}){return W.jsx("div",{ref:J,className:`${b.placeScroll} ${Y||""}`,children:WW.map((H)=>W.jsxs("div",{className:b.paletteSection,children:[W.jsx("div",{className:b.paletteSectionTitle,children:H.section}),H.items.map((X)=>W.jsxs("div",{className:`${b.paletteItem} ${G===X.type?b.active:""} ${B?b.wireframe:""}`,onClick:()=>Z(X.type),onMouseDown:(q)=>{if(q.button===0)z(X.type,q)},children:[W.jsx("div",{className:b.paletteItemIcon,children:W.jsx(J1,{type:X.type})}),W.jsx("span",{className:b.paletteItemLabel,children:X.label})]},X.type))]},H.section))})}function B1({value:G,suffix:Z}){let[z,J]=bG.useState(null),[Y,B]=bG.useState(Z),[H,X]=bG.useState("up"),q=bG.useRef(G),A=bG.useRef(Z),U=bG.useRef(),V=z!==null&&Y!==Z;if(bG.useEffect(()=>{if(G!==q.current){if(G===0){q.current=G,A.current=Z,J(null);return}X(G>q.current?"up":"down"),J(q.current),B(A.current),q.current=G,A.current=Z,clearTimeout(U.current),U.current=L0(()=>J(null),250)}else A.current=Z},[G,Z]),z===null)return W.jsxs(W.Fragment,{children:[G,Z?` ${Z}`:""]});if(V)return W.jsxs("span",{className:b.rollingWrap,children:[W.jsxs("span",{style:{visibility:"hidden"},children:[G," ",Z]}),W.jsxs("span",{className:`${b.rollingNum} ${H==="up"?b.exitUp:b.exitDown}`,children:[z," ",Y]},`o${z}-${G}`),W.jsxs("span",{className:`${b.rollingNum} ${H==="up"?b.enterUp:b.enterDown}`,children:[G," ",Z]},`n${G}`)]});return W.jsxs(W.Fragment,{children:[W.jsxs("span",{className:b.rollingWrap,children:[W.jsx("span",{style:{visibility:"hidden"},children:G}),W.jsx("span",{className:`${b.rollingNum} ${H==="up"?b.exitUp:b.exitDown}`,children:z},`o${z}-${G}`),W.jsx("span",{className:`${b.rollingNum} ${H==="up"?b.enterUp:b.enterDown}`,children:G},`n${G}`)]}),Z?` ${Z}`:""]})}function H1({activeType:G,onSelect:Z,isDarkMode:z,sectionCount:J,onDetectSections:Y,visible:B,onExited:H,placementCount:X,onClearPlacements:q,onDragStart:A,blankCanvas:U,onBlankCanvasChange:V,wireframePurpose:L,onWireframePurposeChange:D,Tooltip:f}){let[x,T]=bG.useState(!1),[_,O]=bG.useState("exit"),[K,$]=bG.useState(!1),[p,Y0]=bG.useState(!0),k=bG.useRef(0),a=bG.useRef(""),G0=bG.useRef(0),n=bG.useRef(),_0=bG.useRef(null),[GG,LG]=bG.useState("");bG.useEffect(()=>{if(B)T(!0),clearTimeout(n.current),cancelAnimationFrame(G0.current),G0.current=Ez(()=>{G0.current=Ez(()=>{O("enter")})});else cancelAnimationFrame(G0.current),O("exit"),clearTimeout(n.current),n.current=L0(()=>{T(!1),H?.()},200);return()=>cancelAnimationFrame(G0.current)},[B]);let b0=X>0||J>0,c0=X+J;if(c0>0)k.current=c0,a.current=U?c0===1?"Component":"Components":c0===1?"Change":"Changes";if(bG.useEffect(()=>{if(b0)if(!K)Y0(!0),$(!0),Ez(()=>{Ez(()=>{Y0(!1)})});else Y0(!1);else{Y0(!0);let e0=L0(()=>$(!1),300);return()=>clearTimeout(e0)}},[b0]),bG.useEffect(()=>{if(!x)return;let e0=_0.current;if(!e0)return;let i=()=>LG(z1(e0));i(),e0.addEventListener("scroll",i,{passive:!0});let F0=new ResizeObserver(i);return F0.observe(e0),()=>{e0.removeEventListener("scroll",i),F0.disconnect()}},[x]),!x)return null;let $0=[];if(X>0)$0.push("placed");if(J>0)$0.push("captured");return W.jsxs("div",{className:`${b.palette} ${b[_]} ${!z?b.light:""}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:(e0)=>e0.stopPropagation(),onMouseDown:(e0)=>e0.stopPropagation(),onTransitionEnd:(e0)=>{if(e0.target!==e0.currentTarget)return;if(!B)clearTimeout(n.current),T(!1),O("exit"),H?.()},children:[W.jsxs("div",{className:b.paletteHeader,children:[W.jsx("div",{className:b.paletteHeaderTitle,children:"Layout Mode"}),W.jsxs("div",{className:b.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",W.jsx("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),W.jsxs("div",{className:`${b.canvasToggle} ${U?b.active:""}`,onClick:()=>V(!U),children:[W.jsx("span",{className:b.canvasToggleIcon,children:W.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[W.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),W.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),W.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),W.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),W.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),W.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),W.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),W.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),W.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),W.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),W.jsx("span",{className:b.canvasToggleLabel,children:"Wireframe New Page"})]}),W.jsx("div",{className:`${b.wireframePurposeWrap} ${!U?b.collapsed:""}`,children:W.jsx("div",{className:b.wireframePurposeInner,children:W.jsx("textarea",{className:b.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:L,onChange:(e0)=>D(e0.target.value),rows:2})})}),W.jsx(Y1,{activeType:G,onSelect:Z,onDragStart:A,scrollRef:_0,fadeClass:GG,blankCanvas:U}),K&&W.jsx("div",{className:`${b.paletteFooterWrap} ${p?b.footerHidden:""}`,children:W.jsx("div",{className:b.paletteFooterInner,children:W.jsx("div",{className:b.paletteFooterInnerContent,children:W.jsxs("div",{className:b.paletteFooter,children:[W.jsx("span",{className:b.paletteFooterCount,children:W.jsx(B1,{value:k.current,suffix:a.current})}),W.jsx("button",{className:b.paletteFooterClear,onClick:q,children:"Clear"})]})})})})]})}function vz(G){if(G.parentElement)return G.parentElement;let Z=G.getRootNode();if(Z instanceof ShadowRoot)return Z.host;return null}function MZ(G,Z){let z=G;while(z){if(z.matches(Z))return z;z=vz(z)}return null}function X1(G,Z=4){let z=[],J=G,Y=0;while(J&&Y<Z){let B=J.tagName.toLowerCase();if(B==="html"||B==="body")break;let H=B;if(J.id)H=`#${J.id}`;else if(J.className&&typeof J.className==="string"){let q=J.className.split(/\s+/).find((A)=>A.length>2&&!A.match(/^[a-z]{1,2}$/)&&!A.match(/[A-Z0-9]{5,}/));if(q)H=`.${q.split("_")[0]}`}let X=vz(J);if(!J.parentElement&&X)H=`⟨shadow⟩ ${H}`;z.unshift(H),J=X,Y++}return z.join(" > ")}function hz(G){let Z=X1(G);if(G.dataset.element)return{name:G.dataset.element,path:Z};let z=G.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(z)){let J=MZ(G,"svg");if(J){let Y=vz(J);if(Y instanceof HTMLElement)return{name:`graphic in ${hz(Y).name}`,path:Z}}return{name:"graphic element",path:Z}}if(z==="svg"){let J=vz(G);if(J?.tagName.toLowerCase()==="button"){let Y=J.textContent?.trim();return{name:Y?`icon in "${Y}" button`:"button icon",path:Z}}return{name:"icon",path:Z}}if(z==="button"){let J=G.textContent?.trim(),Y=G.getAttribute("aria-label");if(Y)return{name:`button [${Y}]`,path:Z};return{name:J?`button "${J.slice(0,25)}"`:"button",path:Z}}if(z==="a"){let J=G.textContent?.trim(),Y=G.getAttribute("href");if(J)return{name:`link "${J.slice(0,25)}"`,path:Z};if(Y)return{name:`link to ${Y.slice(0,30)}`,path:Z};return{name:"link",path:Z}}if(z==="input"){let J=G.getAttribute("type")||"text",Y=G.getAttribute("placeholder"),B=G.getAttribute("name");if(Y)return{name:`input "${Y}"`,path:Z};if(B)return{name:`input [${B}]`,path:Z};return{name:`${J} input`,path:Z}}if(["h1","h2","h3","h4","h5","h6"].includes(z)){let J=G.textContent?.trim();return{name:J?`${z} "${J.slice(0,35)}"`:z,path:Z}}if(z==="p"){let J=G.textContent?.trim();if(J)return{name:`paragraph: "${J.slice(0,40)}${J.length>40?"...":""}"`,path:Z};return{name:"paragraph",path:Z}}if(z==="span"||z==="label"){let J=G.textContent?.trim();if(J&&J.length<40)return{name:`"${J}"`,path:Z};return{name:z,path:Z}}if(z==="li"){let J=G.textContent?.trim();if(J&&J.length<40)return{name:`list item: "${J.slice(0,35)}"`,path:Z};return{name:"list item",path:Z}}if(z==="blockquote")return{name:"blockquote",path:Z};if(z==="code"){let J=G.textContent?.trim();if(J&&J.length<30)return{name:`code: \`${J}\``,path:Z};return{name:"code",path:Z}}if(z==="pre")return{name:"code block",path:Z};if(z==="img"){let J=G.getAttribute("alt");return{name:J?`image "${J.slice(0,30)}"`:"image",path:Z}}if(z==="video")return{name:"video",path:Z};if(["div","section","article","nav","header","footer","aside","main"].includes(z)){let J=G.className,Y=G.getAttribute("role"),B=G.getAttribute("aria-label");if(B)return{name:`${z} [${B}]`,path:Z};if(Y)return{name:`${Y}`,path:Z};if(typeof J==="string"&&J){let H=J.split(/[\s_-]+/).map((X)=>X.replace(/[A-Z0-9]{5,}.*$/,"")).filter((X)=>X.length>2&&!/^[a-z]{1,2}$/.test(X)).slice(0,2);if(H.length>0)return{name:H.join(" "),path:Z}}return{name:z==="div"?"container":z,path:Z}}return{name:z,path:Z}}function pJ(G){let Z=[],z=G.textContent?.trim();if(z&&z.length<100)Z.push(z);let J=G.previousElementSibling;if(J){let B=J.textContent?.trim();if(B&&B.length<50)Z.unshift(`[before: "${B.slice(0,40)}"]`)}let Y=G.nextElementSibling;if(Y){let B=Y.textContent?.trim();if(B&&B.length<50)Z.push(`[after: "${B.slice(0,40)}"]`)}return Z.join(" ")}function D9(G){let Z=vz(G);if(!Z)return"";let Y=(G.getRootNode()instanceof ShadowRoot&&G.parentElement?Array.from(G.parentElement.children):Array.from(Z.children)).filter((U)=>U!==G&&U instanceof HTMLElement);if(Y.length===0)return"";let B=Y.slice(0,4).map((U)=>{let V=U.tagName.toLowerCase(),L=U.className,D="";if(typeof L==="string"&&L){let f=L.split(/\s+/).map((x)=>x.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find((x)=>x.length>2&&!/^[a-z]{1,2}$/.test(x));if(f)D=`.${f}`}if(V==="button"||V==="a"){let f=U.textContent?.trim().slice(0,15);if(f)return`${V}${D} "${f}"`}return`${V}${D}`}),X=Z.tagName.toLowerCase();if(typeof Z.className==="string"&&Z.className){let U=Z.className.split(/\s+/).map((V)=>V.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find((V)=>V.length>2&&!/^[a-z]{1,2}$/.test(V));if(U)X=`.${U}`}let q=Z.children.length,A=q>B.length+1?` (${q} total in ${X})`:"";return B.join(", ")+A}function iJ(G){let Z=G.className;if(typeof Z!=="string"||!Z)return"";return Z.split(/\s+/).filter((J)=>J.length>0).map((J)=>{let Y=J.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return Y?Y[1]:J}).filter((J,Y,B)=>B.indexOf(J)===Y).join(", ")}var jW=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),q1=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),W1=new Set(["input","textarea","select"]),j1=new Set(["img","video","canvas","svg"]),Q1=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function K9(G){if(typeof window>"u")return{};let Z=window.getComputedStyle(G),z={},J=G.tagName.toLowerCase(),Y;if(q1.has(J))Y=["color","fontSize","fontWeight","fontFamily","lineHeight"];else if(J==="button"||J==="a"&&G.getAttribute("role")==="button")Y=["backgroundColor","color","padding","borderRadius","fontSize"];else if(W1.has(J))Y=["backgroundColor","color","padding","borderRadius","fontSize"];else if(j1.has(J))Y=["width","height","objectFit","borderRadius"];else if(Q1.has(J))Y=["display","padding","margin","gap","backgroundColor"];else Y=["color","fontSize","margin","padding","backgroundColor"];for(let B of Y){let H=B.replace(/([A-Z])/g,"-$1").toLowerCase(),X=Z.getPropertyValue(H);if(X&&!jW.has(X))z[B]=X}return z}var U1=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function I9(G){if(typeof window>"u")return"";let Z=window.getComputedStyle(G),z=[];for(let J of U1){let Y=J.replace(/([A-Z])/g,"-$1").toLowerCase(),B=Z.getPropertyValue(Y);if(B&&!jW.has(B))z.push(`${Y}: ${B}`)}return z.join("; ")}function L1(G){if(!G)return;let Z={},z=G.split(";").map((J)=>J.trim()).filter(Boolean);for(let J of z){let Y=J.indexOf(":");if(Y>0){let B=J.slice(0,Y).trim(),H=J.slice(Y+1).trim();if(B&&H)Z[B]=H}}return Object.keys(Z).length>0?Z:void 0}function f9(G){let Z=[],z=G.getAttribute("role"),J=G.getAttribute("aria-label"),Y=G.getAttribute("aria-describedby"),B=G.getAttribute("tabindex"),H=G.getAttribute("aria-hidden");if(z)Z.push(`role="${z}"`);if(J)Z.push(`aria-label="${J}"`);if(Y)Z.push(`aria-describedby="${Y}"`);if(B)Z.push(`tabindex=${B}`);if(H==="true")Z.push("aria-hidden");if(G.matches("a, button, input, select, textarea, [tabindex]"))Z.push("focusable");return Z.join(", ")}function N9(G){let Z=[],z=G;while(z&&z.tagName.toLowerCase()!=="html"){let J=z.tagName.toLowerCase(),Y=J;if(z.id)Y=`${J}#${z.id}`;else if(z.className&&typeof z.className==="string"){let H=z.className.split(/\s+/).map((X)=>X.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find((X)=>X.length>2);if(H)Y=`${J}.${H}`}let B=vz(z);if(!z.parentElement&&B)Y=`⟨shadow⟩ ${Y}`;Z.unshift(Y),z=B}return Z.join(" > ")}var _1=new Set(["nav","header","main","section","article","footer","aside"]),i4={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},gq={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},A1=new Set(["script","style","noscript","link","meta"]),F1=40;function QW(G){let Z=G;while(Z&&Z!==document.body&&Z!==document.documentElement){let z=window.getComputedStyle(Z).position;if(z==="fixed"||z==="sticky")return!0;Z=Z.parentElement}return!1}function e7(G){let Z=G.tagName.toLowerCase();if(["nav","header","footer","main"].includes(Z)){if(document.querySelectorAll(Z).length===1)return Z}if(G.id)return`#${CSS.escape(G.id)}`;if(G.className&&typeof G.className==="string"){let Y=G.className.split(/\s+/).filter((B)=>B.length>0).find((B)=>B.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(B)&&!/^[a-z]{1,2}$/.test(B));if(Y){let B=`${Z}.${CSS.escape(Y)}`;if(document.querySelectorAll(B).length===1)return B}}let z=G.parentElement;if(z){let Y=Array.from(z.children).indexOf(G)+1;return`${z===document.body?"body":e7(z)} > ${Z}:nth-child(${Y})`}return Z}function b9(G){let Z=G.tagName.toLowerCase(),z=G.getAttribute("aria-label");if(z)return z;let J=G.getAttribute("role");if(J&&i4[J])return i4[J];if(gq[Z])return gq[Z];let Y=G.querySelector("h1, h2, h3, h4, h5, h6");if(Y){let H=Y.textContent?.trim();if(H&&H.length<=50)return H;if(H)return H.slice(0,47)+"..."}let{name:B}=hz(G);return B.charAt(0).toUpperCase()+B.slice(1)}function UW(G){let Z=G.className;if(typeof Z!=="string"||!Z)return null;return Z.split(/\s+/).map((J)=>J.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find((J)=>J.length>2&&!/^[a-z]{1,2}$/.test(J))||null}function LW(G){let Z=G.textContent?.trim();if(!Z)return null;let z=Z.replace(/\s+/g," ");if(z.length<=30)return z;return z.slice(0,30)+"…"}function M1(){let G=document.querySelector("main")||document.body,Z=Array.from(G.children),z=Z;if(G!==document.body&&Z.length<3)z=Array.from(document.body.children);let J=[];return z.forEach((Y,B)=>{if(!(Y instanceof HTMLElement))return;let H=Y.tagName.toLowerCase();if(A1.has(H))return;if(Y.hasAttribute("data-feedback-toolbar"))return;if(Y.closest("[data-feedback-toolbar]"))return;let X=window.getComputedStyle(Y);if(X.display==="none"||X.visibility==="hidden")return;let q=Y.getBoundingClientRect();if(q.height<F1)return;let A=_1.has(H),U=Y.getAttribute("role")&&i4[Y.getAttribute("role")],V=H==="div"&&q.height>=60;if(!A&&!U&&!V)return;let L=window.scrollY,D=QW(Y),f={x:q.x,y:D?q.y:q.y+L,width:q.width,height:q.height};J.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:b9(Y),tagName:H,selector:e7(Y),role:Y.getAttribute("role"),className:UW(Y),textSnippet:LW(Y),originalRect:f,currentRect:{...f},originalIndex:B,isFixed:D})}),J}function O1(G){let Z=window.scrollY,z=G.getBoundingClientRect(),J=QW(G),Y={x:z.x,y:J?z.y:z.y+Z,width:z.width,height:z.height},B=G.parentElement,H=0;if(B)H=Array.from(B.children).indexOf(G);return{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:b9(G),tagName:G.tagName.toLowerCase(),selector:e7(G),role:G.getAttribute("role"),className:UW(G),textSnippet:LW(G),originalRect:Y,currentRect:{...Y},originalIndex:H,isFixed:J}}var vq={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},uq=["nw","n","ne","e","se","s","sw","w"],$9=24,mq=16,C9=5;function dq(G,Z,z,J){let Y=1/0,B=1/0,H=G.x,X=G.x+G.width,q=G.x+G.width/2,A=G.y,U=G.y+G.height,V=G.y+G.height/2,L=[];for(let k of Z)if(!z.has(k.id))L.push(k.currentRect);if(J)L.push(...J);for(let k of L){let a=k.x,G0=k.x+k.width,n=k.x+k.width/2,_0=k.y,GG=k.y+k.height,LG=k.y+k.height/2;for(let b0 of[H,X,q])for(let c0 of[a,G0,n]){let $0=c0-b0;if(Math.abs($0)<C9&&Math.abs($0)<Math.abs(Y))Y=$0}for(let b0 of[A,U,V])for(let c0 of[_0,GG,LG]){let $0=c0-b0;if(Math.abs($0)<C9&&Math.abs($0)<Math.abs(B))B=$0}}let D=Math.abs(Y)<C9?Y:0,f=Math.abs(B)<C9?B:0,x=[],T=new Set,_=H+D,O=X+D,K=q+D,$=A+f,p=U+f,Y0=V+f;for(let k of L){let a=k.x,G0=k.x+k.width,n=k.x+k.width/2,_0=k.y,GG=k.y+k.height,LG=k.y+k.height/2;for(let b0 of[a,n,G0])for(let c0 of[_,K,O])if(Math.abs(c0-b0)<0.5){let $0=`x:${Math.round(b0)}`;if(!T.has($0))T.add($0),x.push({axis:"x",pos:b0})}for(let b0 of[_0,LG,GG])for(let c0 of[$,Y0,p])if(Math.abs(c0-b0)<0.5){let $0=`y:${Math.round(b0)}`;if(!T.has($0))T.add($0),x.push({axis:"y",pos:b0})}}return{dx:D,dy:f,guides:x}}var V1=new Set(["script","style","noscript","link","meta","br","hr"]);function cq(G){let Z=G;while(Z&&Z!==document.body&&Z!==document.documentElement){if(Z.closest("[data-feedback-toolbar]"))return null;if(V1.has(Z.tagName.toLowerCase())){Z=Z.parentElement;continue}let z=Z.getBoundingClientRect();if(z.width>=mq&&z.height>=mq)return Z;Z=Z.parentElement}return null}function R1({rearrangeState:G,onChange:Z,isDarkMode:z,exiting:J,className:Y,blankCanvas:B,extraSnapRects:H,onSelectionChange:X,deselectSignal:q,onDragMove:A,onDragEnd:U,clearSignal:V}){let{sections:L}=G,D=D0.useRef(G);D.current=G;let[f,x]=D0.useState(new Set),[T,_]=D0.useState(!1),O=D0.useRef(V);D0.useEffect(()=>{if(V!==void 0&&V!==O.current){if(O.current=V,L.length>0)_(!0)}},[V,L.length]);let K=D0.useRef(q);D0.useEffect(()=>{if(q!==K.current)K.current=q,x(new Set)},[q]);let[$,p]=D0.useState(null),[Y0,k]=D0.useState(!1),a=D0.useRef(!1),G0=D0.useCallback((N)=>{let S=L.find((y)=>y.id===N);if(!S)return;a.current=!!S.note,p(N),k(!1)},[L]),n=D0.useCallback(()=>{if(!$)return;k(!0),L0(()=>{p(null),k(!1)},150)},[$]),_0=D0.useCallback((N)=>{if(!$)return;Z({...G,sections:L.map((S)=>S.id===$?{...S,note:N.trim()||void 0}:S)}),n()},[$,L,G,Z,n]);D0.useEffect(()=>{if(J&&$)n()},[J]);let[GG,LG]=D0.useState(new Set),b0=D0.useRef(new Map),[c0,$0]=D0.useState(null),[e0,i]=D0.useState(null),[F0,o0]=D0.useState([]),[EG,RZ]=D0.useState(0),_Z=D0.useRef(null),H7=D0.useRef(new Set),cZ=D0.useRef(new Map),[X7,B6]=D0.useState(new Map),[E6,q7]=D0.useState(new Map),u7=D0.useRef(new Set),xZ=D0.useRef(new Map),H6=D0.useRef(X);H6.current=X;let wZ=D0.useRef(A);wZ.current=A;let M6=D0.useRef(U);M6.current=U,D0.useEffect(()=>{if(B)x(new Set)},[B]);let[O6,Dz]=D0.useState(()=>!G.sections.some((N)=>{let{originalRect:S,currentRect:y}=N;return Math.abs(S.x-y.x)>1||Math.abs(S.y-y.y)>1||Math.abs(S.width-y.width)>1||Math.abs(S.height-y.height)>1}));D0.useEffect(()=>{if(!O6){let N=L0(()=>Dz(!0),380);return()=>clearTimeout(N)}},[]);let X6=D0.useRef(new Set);D0.useEffect(()=>{X6.current=new Set(L.map((N)=>N.selector))},[L]),D0.useEffect(()=>{let N=()=>RZ(window.scrollY);return N(),window.addEventListener("scroll",N,{passive:!0}),window.addEventListener("resize",N,{passive:!0}),()=>{window.removeEventListener("scroll",N),window.removeEventListener("resize",N)}},[]),D0.useEffect(()=>{let N=(S)=>{if(_Z.current){$0(null);return}let y=document.elementFromPoint(S.clientX,S.clientY);if(!y){$0(null);return}if(y.closest("[data-feedback-toolbar]")){$0(null);return}if(y.closest("[data-design-placement]")){$0(null);return}if(y.closest("[data-annotation-popup]")){$0(null);return}let v=cq(y);if(!v){$0(null);return}for(let B0 of X6.current)try{let d=document.querySelector(B0);if(d&&(d===v||v.contains(d))){$0(null);return}}catch{}let t=v.getBoundingClientRect();$0({x:t.x,y:t.y,w:t.width,h:t.height})};return document.addEventListener("mousemove",N,{passive:!0}),()=>document.removeEventListener("mousemove",N)},[L]),D0.useEffect(()=>{let N=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=N}},[]),D0.useEffect(()=>{let N=(S)=>{if(_Z.current)return;if(S.button!==0)return;let y=S.target;if(!y||y.closest("[data-feedback-toolbar]"))return;if(y.closest("[data-design-placement]"))return;if(y.closest("[data-annotation-popup]"))return;let v=cq(y),t=!1;if(v)for(let d of X6.current)try{let X0=document.querySelector(d);if(X0&&(X0===v||v.contains(X0))){t=!0;break}}catch{}let B0=!!(S.shiftKey||S.metaKey||S.ctrlKey);if(v&&!t){S.preventDefault(),S.stopPropagation();let d=O1(v),X0=[...L,d],f0=[...G.originalOrder,d.id];Z({...G,sections:X0,originalOrder:f0});let l0=new Set([d.id]);x(l0),H6.current?.(l0,B0),$0(null);let{clientX:zG,clientY:q0}=S,XG={x:d.currentRect.x,y:d.currentRect.y},h0=d.originalRect,C0=!1,W0=0,qG=0;_Z.current="move";let s0=(n0)=>{let R0=n0.clientX-zG,wG=n0.clientY-q0;if(!C0&&(Math.abs(R0)>2||Math.abs(wG)>2))C0=!0;if(!C0)return;let ZZ={x:XG.x+R0,y:XG.y+wG,width:d.currentRect.width,height:d.currentRect.height},lZ=dq(ZZ,X0,new Set([d.id]),H);o0(lZ.guides);let V6=R0+lZ.dx,DZ=wG+lZ.dy;W0=V6,qG=DZ;let h6=document.querySelector(`[data-rearrange-section="${d.id}"]`);if(h6)h6.style.transform=`translate(${V6}px, ${DZ}px)`;B6(new Map([[d.id,{x:XG.x+V6,y:XG.y+DZ,width:d.currentRect.width,height:d.currentRect.height}]])),wZ.current?.(V6,DZ)},T0=()=>{window.removeEventListener("mousemove",s0),window.removeEventListener("mouseup",T0),_Z.current=null,o0([]),B6(new Map);let n0=document.querySelector(`[data-rearrange-section="${d.id}"]`);if(n0)n0.style.transform="";if(C0)Z({...G,sections:X0.map((R0)=>R0.id===d.id?{...R0,currentRect:{...R0.currentRect,x:Math.max(0,XG.x+W0),y:Math.max(0,XG.y+qG)}}:R0),originalOrder:f0});M6.current?.(W0,qG,C0)};window.addEventListener("mousemove",s0),window.addEventListener("mouseup",T0)}else if(t&&v){S.preventDefault();for(let d of L)try{let X0=document.querySelector(d.selector);if(X0&&X0===v){let f0=new Set([d.id]);x(f0),H6.current?.(f0,B0);return}}catch{}if(!B0)x(new Set),H6.current?.(new Set,!1)}else if(!B0)x(new Set),H6.current?.(new Set,!1)};return document.addEventListener("mousedown",N,!0),()=>document.removeEventListener("mousedown",N,!0)},[L,G,Z]),D0.useEffect(()=>{let N=(S)=>{let y=S.target;if(y.tagName==="INPUT"||y.tagName==="TEXTAREA"||y.isContentEditable)return;if((S.key==="Backspace"||S.key==="Delete")&&f.size>0){S.preventDefault();let v=new Set(f);LG((t)=>{let B0=new Set(t);for(let d of v)B0.add(d);return B0}),x(new Set),L0(()=>{let t=D.current;Z({...t,sections:t.sections.filter((B0)=>!v.has(B0.id)),originalOrder:t.originalOrder.filter((B0)=>!v.has(B0))}),LG((B0)=>{let d=new Set(B0);for(let X0 of v)d.delete(X0);return d})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(S.key)&&f.size>0){S.preventDefault();let v=S.shiftKey?20:1,t=S.key==="ArrowLeft"?-v:S.key==="ArrowRight"?v:0,B0=S.key==="ArrowUp"?-v:S.key==="ArrowDown"?v:0;Z({...G,sections:L.map((d)=>f.has(d.id)?{...d,currentRect:{...d.currentRect,x:Math.max(0,d.currentRect.x+t),y:Math.max(0,d.currentRect.y+B0)}}:d)});return}if(S.key==="Escape"&&f.size>0)x(new Set)};return document.addEventListener("keydown",N),()=>document.removeEventListener("keydown",N)},[f,L,G,Z]);let E0=D0.useCallback((N,S)=>{if(N.button!==0)return;let y=N.target;if(y.closest(`.${b.handle}`)||y.closest(`.${b.deleteButton}`))return;N.preventDefault(),N.stopPropagation();let v;if(N.shiftKey||N.metaKey||N.ctrlKey)if(v=new Set(f),v.has(S))v.delete(S);else v.add(S);else if(!f.has(S))v=new Set([S]);else v=new Set(f);if(x(v),v.size!==f.size||[...v].some((C0)=>!f.has(C0)))H6.current?.(v,!!(N.shiftKey||N.metaKey||N.ctrlKey));let{clientX:B0,clientY:d}=N,X0=new Map;for(let C0 of L)if(v.has(C0.id))X0.set(C0.id,{x:C0.currentRect.x,y:C0.currentRect.y});_Z.current="move";let f0=!1,l0=0,zG=0,q0=new Map;for(let C0 of L)if(v.has(C0.id)){let W0=document.querySelector(`[data-rearrange-section="${C0.id}"]`);q0.set(C0.id,{outlineEl:W0,curW:C0.currentRect.width,curH:C0.currentRect.height})}let XG=(C0)=>{let W0=C0.clientX-B0,qG=C0.clientY-d;if(W0===0&&qG===0)return;f0=!0;let s0=1/0,T0=1/0,n0=-1/0,R0=-1/0;for(let[DZ,{curW:h6,curH:B9}]of q0){let vG=X0.get(DZ);if(!vG)continue;let y6=vG.x+W0,H9=vG.y+qG;s0=Math.min(s0,y6),T0=Math.min(T0,H9),n0=Math.max(n0,y6+h6),R0=Math.max(R0,H9+B9)}let wG=dq({x:s0,y:T0,width:n0-s0,height:R0-T0},L,v,H),ZZ=W0+wG.dx,lZ=qG+wG.dy;l0=ZZ,zG=lZ,o0(wG.guides);for(let[,{outlineEl:DZ}]of q0)if(DZ)DZ.style.transform=`translate(${ZZ}px, ${lZ}px)`;let V6=new Map;for(let[DZ,{curW:h6,curH:B9}]of q0){let vG=X0.get(DZ);if(vG){let y6={x:Math.max(0,vG.x+ZZ),y:Math.max(0,vG.y+lZ),width:h6,height:B9};V6.set(DZ,y6)}}B6(V6),wZ.current?.(ZZ,lZ)},h0=(C0)=>{window.removeEventListener("mousemove",XG),window.removeEventListener("mouseup",h0),_Z.current=null,o0([]),B6(new Map);for(let[,{outlineEl:W0}]of q0)if(W0)W0.style.transform="";if(f0){let W0=C0.clientX-B0,qG=C0.clientY-d;if(Math.abs(W0)<5&&Math.abs(qG)<5)Z({...G,sections:L.map((s0)=>{let T0=X0.get(s0.id);if(!T0)return s0;return{...s0,currentRect:{...s0.currentRect,x:T0.x,y:T0.y}}})});else{Z({...G,sections:L.map((s0)=>{let T0=X0.get(s0.id);if(!T0)return s0;return{...s0,currentRect:{...s0.currentRect,x:Math.max(0,T0.x+l0),y:Math.max(0,T0.y+zG)}}})}),M6.current?.(l0,zG,!0);return}}M6.current?.(0,0,!1)};window.addEventListener("mousemove",XG),window.addEventListener("mouseup",h0)},[f,L,G,Z]),c=D0.useCallback((N,S,y)=>{N.preventDefault(),N.stopPropagation();let v=L.find((h0)=>h0.id===S);if(!v)return;x(new Set([S])),_Z.current="resize";let{clientX:t,clientY:B0}=N,d={...v.currentRect},X0=v.originalRect,f0=d.width/d.height,l0={...d},zG=document.querySelector(`[data-rearrange-section="${S}"]`),q0=(h0)=>{let C0=h0.clientX-t,W0=h0.clientY-B0,qG=d.x,s0=d.y,T0=d.width,n0=d.height;if(y.includes("e"))T0=Math.max($9,d.width+C0);if(y.includes("w"))T0=Math.max($9,d.width-C0),qG=d.x+d.width-T0;if(y.includes("s"))n0=Math.max($9,d.height+W0);if(y.includes("n"))n0=Math.max($9,d.height-W0),s0=d.y+d.height-n0;if(h0.shiftKey)if(y.length===2){let wG=Math.abs(T0-d.width),ZZ=Math.abs(n0-d.height);if(wG>ZZ)n0=T0/f0;else T0=n0*f0;if(y.includes("w"))qG=d.x+d.width-T0;if(y.includes("n"))s0=d.y+d.height-n0}else{if(y==="e"||y==="w")n0=T0/f0;else T0=n0*f0;if(y==="w")qG=d.x+d.width-T0;if(y==="n")s0=d.y+d.height-n0}if(l0={x:qG,y:s0,width:T0,height:n0},zG)zG.style.left=`${qG}px`,zG.style.top=`${s0-EG}px`,zG.style.width=`${T0}px`,zG.style.height=`${n0}px`;i({x:h0.clientX+12,y:h0.clientY+12,text:`${Math.round(T0)} × ${Math.round(n0)}`}),B6(new Map([[S,l0]]))},XG=()=>{window.removeEventListener("mousemove",q0),window.removeEventListener("mouseup",XG),i(null),_Z.current=null,B6(new Map),Z({...G,sections:L.map((h0)=>h0.id===S?{...h0,currentRect:l0}:h0)})};window.addEventListener("mousemove",q0),window.addEventListener("mouseup",XG)},[L,G,Z,EG]),Q0=D0.useCallback((N)=>{LG((S)=>{let y=new Set(S);return y.add(N),y}),x((S)=>{let y=new Set(S);return y.delete(N),y}),L0(()=>{let S=D.current;Z({...S,sections:S.sections.filter((y)=>y.id!==N),originalOrder:S.originalOrder.filter((y)=>y!==N)}),LG((y)=>{let v=new Set(y);return v.delete(N),v})},180)},[Z]),O0=(N)=>{let{originalRect:S,currentRect:y}=N;return Math.abs(S.x-y.x)>1||Math.abs(S.y-y.y)>1||Math.abs(S.width-y.width)>1||Math.abs(S.height-y.height)>1},P0=(N)=>{let{originalRect:S,currentRect:y}=N;return Math.abs(S.x-y.x)>1||Math.abs(S.y-y.y)>1},V0=(N)=>{let{originalRect:S,currentRect:y}=N;return Math.abs(S.width-y.width)>1||Math.abs(S.height-y.height)>1};for(let N of L)if(!cZ.current.has(N.id)){if(P0(N))cZ.current.set(N.id,"move");else if(V0(N))cZ.current.set(N.id,"resize")}for(let N of cZ.current.keys())if(!L.some((S)=>S.id===N))cZ.current.delete(N);let ZG=L.filter((N)=>{try{if(GG.has(N.id))return!0;if(f.has(N.id))return!0;let S=document.querySelector(N.selector);if(!S)return!1;let y=S.getBoundingClientRect(),v=N.originalRect;return Math.abs(y.width-v.width)+Math.abs(y.height-v.height)<200}catch{return!1}}),HG=ZG.filter((N)=>O0(N)),a0=ZG.filter((N)=>!O0(N)),v0=new Set(HG.map((N)=>N.id));for(let N of H7.current)if(!v0.has(N))H7.current.delete(N);let A0=[...v0].sort().join(",");for(let N of HG)xZ.current.set(N.id,{currentRect:N.currentRect,originalRect:N.originalRect,isFixed:N.isFixed});return D0.useEffect(()=>{let N=u7.current;u7.current=v0;let S=new Map;for(let y of N)if(!v0.has(y)){if(!L.some((t)=>t.id===y))continue;let v=xZ.current.get(y);if(v)S.set(y,{orig:v.originalRect,target:v.currentRect,isFixed:v.isFixed}),xZ.current.delete(y)}if(S.size>0){q7((v)=>{let t=new Map(v);for(let[B0,d]of S)t.set(B0,d);return t});let y=L0(()=>{q7((v)=>{let t=new Map(v);for(let B0 of S.keys())t.delete(B0);return t})},250);return()=>clearTimeout(y)}},[A0,L]),r0.jsxs(r0.Fragment,{children:[r0.jsxs("div",{className:`${b.rearrangeOverlay} ${!z?b.light:""} ${J?b.overlayExiting:""}${Y?` ${Y}`:""}`,"data-feedback-toolbar":!0,children:[c0&&r0.jsx("div",{className:b.hoverHighlight,style:{left:c0.x,top:c0.y,width:c0.w,height:c0.h}}),a0.map((N)=>{let S=N.currentRect,y=N.isFixed?S.y:S.y-EG,v=vq,t=f.has(N.id);return r0.jsxs("div",{"data-rearrange-section":N.id,className:`${b.sectionOutline} ${t?b.selected:""} ${T||J||GG.has(N.id)?b.exiting:""}`,style:{left:S.x,top:y,width:S.width,height:S.height,borderColor:v.border,backgroundColor:v.bg,...O6?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:(B0)=>E0(B0,N.id),onDoubleClick:()=>G0(N.id),children:[r0.jsx("span",{className:b.sectionLabel,style:{backgroundColor:v.pill},children:N.label}),r0.jsx("span",{className:`${b.sectionAnnotation} ${N.note?b.annotationVisible:""}`,children:(()=>{if(N.note)b0.current.set(N.id,N.note);return N.note||b0.current.get(N.id)||""})()}),r0.jsxs("span",{className:b.sectionDimensions,children:[Math.round(S.width)," × ",Math.round(S.height)]}),r0.jsx("div",{className:b.deleteButton,onMouseDown:(B0)=>B0.stopPropagation(),onClick:()=>Q0(N.id),children:"✕"}),uq.map((B0)=>r0.jsx("div",{className:`${b.handle} ${b[`handle${B0.charAt(0).toUpperCase()}${B0.slice(1)}`]}`,onMouseDown:(d)=>c(d,N.id,B0)},B0))]},N.id)}),HG.map((N)=>{let S=N.currentRect,y=N.isFixed?S.y:S.y-EG,v=f.has(N.id),t=P0(N),B0=V0(N);if(B&&!v)return null;let X0=!H7.current.has(N.id);if(X0)H7.current.add(N.id);return r0.jsxs("div",{"data-rearrange-section":N.id,className:`${b.ghostOutline} ${v?b.selected:""} ${T||J||GG.has(N.id)?b.exiting:""}`,style:{left:S.x,top:y,width:S.width,height:S.height,...O6?{}:{opacity:0,animation:"none",transition:"none"},...!X0?{animation:"none"}:{}},onMouseDown:(f0)=>E0(f0,N.id),onDoubleClick:()=>G0(N.id),children:[r0.jsx("span",{className:b.sectionLabel,style:{backgroundColor:vq.pill},children:N.label}),r0.jsx("span",{className:`${b.sectionAnnotation} ${N.note?b.annotationVisible:""}`,children:(()=>{if(N.note)b0.current.set(N.id,N.note);return N.note||b0.current.get(N.id)||""})()}),r0.jsxs("span",{className:b.sectionDimensions,children:[Math.round(S.width)," × ",Math.round(S.height)]}),r0.jsx("div",{className:b.deleteButton,onMouseDown:(f0)=>f0.stopPropagation(),onClick:()=>Q0(N.id),children:"✕"}),uq.map((f0)=>r0.jsx("div",{className:`${b.handle} ${b[`handle${f0.charAt(0).toUpperCase()}${f0.slice(1)}`]}`,onMouseDown:(l0)=>c(l0,N.id,f0)},f0)),r0.jsx("span",{className:b.ghostBadge,children:(()=>{let f0=cZ.current.get(N.id);if(t&&B0){let[l0,zG]=f0==="resize"?["Resize","Move"]:["Move","Resize"];return r0.jsxs(r0.Fragment,{children:["Suggested ",l0," ",r0.jsxs("span",{className:b.ghostBadgeExtra,children:["& ",zG]})]})}return`Suggested ${B0?"Resize":"Move"}`})()})]},N.id)})]}),!B&&(()=>{let N=[];for(let S of HG){let y=X7.get(S.id);N.push({id:S.id,orig:S.originalRect,target:y||S.currentRect,isFixed:S.isFixed,isSelected:f.has(S.id),isExiting:GG.has(S.id)})}for(let[S,y]of X7)if(!N.some((v)=>v.id===S)){let v=L.find((t)=>t.id===S);if(v)N.push({id:S,orig:v.originalRect,target:y,isFixed:v.isFixed,isSelected:f.has(S)})}for(let[S,y]of E6)if(!N.some((v)=>v.id===S))N.push({id:S,orig:y.orig,target:y.target,isFixed:y.isFixed,isSelected:!1,isExiting:!0});if(N.length===0)return null;return r0.jsxs("svg",{className:`${b.connectorSvg} ${T||J?b.connectorExiting:""}`,children:[N.map(({id:S,orig:y,target:v,isFixed:t,isSelected:B0,isExiting:d})=>{let X0=y.x+y.width/2,f0=(t?y.y:y.y-EG)+y.height/2,l0=v.x+v.width/2,zG=(t?v.y:v.y-EG)+v.height/2,q0=l0-X0,XG=zG-f0,h0=Math.sqrt(q0*q0+XG*XG);if(h0<2)return null;let C0=Math.min(1,h0/40),W0=Math.min(h0*0.3,60),qG=h0>0?-XG/h0:0,s0=h0>0?q0/h0:0,T0=(X0+l0)/2+qG*W0,n0=(f0+zG)/2+s0*W0,R0=X7.has(S),wG=R0||B0?1:0.4,ZZ=R0||B0?1:0.5;return r0.jsxs("g",{className:d?b.connectorExiting:"",children:[r0.jsx("path",{className:b.connectorLine,d:`M ${X0} ${f0} Q ${T0} ${n0} ${l0} ${zG}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:wG*C0}),r0.jsx("circle",{className:b.connectorDot,cx:X0,cy:f0,r:4*C0,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:ZZ*C0,filter:"url(#connDotShadow)"}),r0.jsx("circle",{className:b.connectorDot,cx:l0,cy:zG,r:4*C0,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:ZZ*C0,filter:"url(#connDotShadow)"})]},`conn-${S}`)}),r0.jsx("defs",{children:r0.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:r0.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),$&&(()=>{let N=L.find((zG)=>zG.id===$);if(!N)return null;let S=N.currentRect,y=N.isFixed?S.y:S.y-EG,v=S.x+S.width/2,t=y-8,B0=y+S.height+8,d=t>200,X0=B0<window.innerHeight-100,f0=Math.max(160,Math.min(window.innerWidth-160,v)),l0;if(d)l0={left:f0,bottom:window.innerHeight-t};else if(X0)l0={left:f0,top:B0};else l0={left:f0,top:Math.max(80,window.innerHeight/2-80)};return r0.jsx(k9,{element:N.label,placeholder:"Add a note about this section",initialValue:N.note??"",submitLabel:a.current?"Save":"Set",onSubmit:_0,onCancel:n,onDelete:a.current?()=>{_0("")}:void 0,isExiting:Y0,lightMode:!z,style:l0})})(),e0&&r0.jsx("div",{className:b.sizeIndicator,style:{left:e0.x,top:e0.y},"data-feedback-toolbar":!0,children:e0.text}),F0.map((N,S)=>r0.jsx("div",{className:b.guideLine,style:N.axis==="x"?{position:"fixed",left:N.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:N.pos-EG,width:"100vw",height:1}},`${N.axis}-${N.pos}-${S}`))]})}var s4=new Set(["script","style","noscript","link","meta","br","hr"]);function w1(){let G=document.querySelector("main")||document.body,Z=[],z=Array.from(G.children),J=G!==document.body&&z.length<3?Array.from(document.body.children):z;for(let Y of J){if(!(Y instanceof HTMLElement))continue;if(s4.has(Y.tagName.toLowerCase()))continue;if(Y.hasAttribute("data-feedback-toolbar"))continue;let B=window.getComputedStyle(Y);if(B.display==="none"||B.visibility==="hidden")continue;let H=Y.getBoundingClientRect();if(H.height<10||H.width<10)continue;Z.push({label:b9(Y),selector:e7(Y),top:H.top,bottom:H.bottom,left:H.left,right:H.right,area:H.width*H.height});for(let X of Array.from(Y.children)){if(!(X instanceof HTMLElement))continue;if(s4.has(X.tagName.toLowerCase()))continue;if(X.hasAttribute("data-feedback-toolbar"))continue;let q=window.getComputedStyle(X);if(q.display==="none"||q.visibility==="hidden")continue;let A=X.getBoundingClientRect();if(A.height<10||A.width<10)continue;Z.push({label:b9(X),selector:e7(X),top:A.top,bottom:A.bottom,left:A.left,right:A.right,area:A.width*A.height})}}return Z}function D1(G){let Z=window.scrollY;return G.map(({label:z,selector:J,rect:Y})=>{let B=Y.y-Z;return{label:z,selector:J,top:B,bottom:B+Y.height,left:Y.x,right:Y.x+Y.width,area:Y.width*Y.height}})}function K1(G){let Z=window.scrollY,z=G.y-Z,J=G.x;return{top:z,bottom:z+G.height,left:J,right:J+G.width,area:G.width*G.height}}function r4(G,Z){let z=Z?D1(Z):w1(),J=K1(G),Y=null,B=null,H=null,X=null,q=null;for(let f of z){if(Math.abs(f.left-J.left)<2&&Math.abs(f.top-J.top)<2&&Math.abs(f.right-f.left-G.width)<2&&Math.abs(f.bottom-f.top-G.height)<2)continue;if(f.left<=J.left+2&&f.right>=J.right-2&&f.top<=J.top+2&&f.bottom>=J.bottom-2&&f.area>J.area*1.5){if(!q||f.area<q._area)q={label:f.label,selector:f.selector,_area:f.area}}let x=J.right>f.left+5&&J.left<f.right-5,T=J.bottom>f.top+5&&J.top<f.bottom-5;if(x&&f.bottom<=J.top+5){let _=Math.round(J.top-f.bottom);if(!Y||_<Y._dist)Y={label:f.label,selector:f.selector,gap:Math.max(0,_),_dist:_}}if(x&&f.top>=J.bottom-5){let _=Math.round(f.top-J.bottom);if(!B||_<B._dist)B={label:f.label,selector:f.selector,gap:Math.max(0,_),_dist:_}}if(T&&f.right<=J.left+5){let _=Math.round(J.left-f.right);if(!H||_<H._dist)H={label:f.label,selector:f.selector,gap:Math.max(0,_),_dist:_}}if(T&&f.left>=J.right-5){let _=Math.round(f.left-J.right);if(!X||_<X._dist)X={label:f.label,selector:f.selector,gap:Math.max(0,_),_dist:_}}}let{innerWidth:A,innerHeight:U}=window,V=f1(G,A),L=(f)=>{if(!f)return null;return{label:f.label,selector:f.selector,gap:f.gap}},D=I1(J,G,A,U,q?{label:q.label,selector:q.selector,_area:q._area}:null,z);return{above:L(Y),below:L(B),left:L(H),right:L(X),alignment:V,containedIn:q?{label:q.label,selector:q.selector}:null,outOfBounds:D}}function I1(G,Z,z,J,Y,B){let H={},X=!1,q=[];if(G.left<-2)q.push("left");if(G.right>z+2)q.push("right");if(G.top<-2)q.push("top");if(G.bottom>J+2)q.push("bottom");if(q.length>0)H.viewport=q,X=!0;if(Y){let A=B.find((U)=>U.label===Y.label&&U.selector===Y.selector&&Math.abs(U.area-Y._area)<10);if(A){let U=[];if(G.left<A.left-2)U.push("left");if(G.right>A.right+2)U.push("right");if(G.top<A.top-2)U.push("top");if(G.bottom>A.bottom+2)U.push("bottom");if(U.length>0)H.container={label:Y.label,edges:U},X=!0}}return X?H:null}function f1(G,Z){if(G.width/Z>0.85)return"full-width";let J=G.x+G.width/2,Y=Z/2,B=J-Y,H=Z*0.08;if(Math.abs(B)<H)return"center";if(B<0)return"left";return"right"}function _W(G){switch(G){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function AW(G,Z={}){let z=[];if(G.above)z.push(`Below \`${G.above.label}\`${G.above.gap>0?` (${G.above.gap}px gap)`:""}`);if(G.below)z.push(`Above \`${G.below.label}\`${G.below.gap>0?` (${G.below.gap}px gap)`:""}`);if(Z.includeLeftRight){if(G.left)z.push(`Right of \`${G.left.label}\`${G.left.gap>0?` (${G.left.gap}px gap)`:""}`);if(G.right)z.push(`Left of \`${G.right.label}\`${G.right.gap>0?` (${G.right.gap}px gap)`:""}`)}let J=_W(G.alignment);if(G.containedIn)z.push(`${J.charAt(0).toUpperCase()+J.slice(1)} in \`${G.containedIn.label}\``);else z.push(`${J.charAt(0).toUpperCase()+J.slice(1)} in page`);if(Z.includePixelRef&&Z.pixelRef)z.push(`Pixel ref: \`${Z.pixelRef}\``);if(G.outOfBounds){if(G.outOfBounds.viewport)z.push(`**Outside viewport** (${G.outOfBounds.viewport.join(", ")} edge${G.outOfBounds.viewport.length>1?"s":""})`);if(G.outOfBounds.container)z.push(`**Outside \`${G.outOfBounds.container.label}\`** (${G.outOfBounds.container.edges.join(", ")} edge${G.outOfBounds.container.edges.length>1?"s":""})`)}return z}function N1(G,Z,z){let J=[];if(G.above)J.push(`below \`${G.above.label}\``);if(G.below)J.push(`above \`${G.below.label}\``);if(G.left)J.push(`right of \`${G.left.label}\``);if(G.right)J.push(`left of \`${G.right.label}\``);if(G.containedIn)J.push(`inside \`${G.containedIn.label}\``);if(J.push(_W(G.alignment)),G.outOfBounds?.viewport)J.push(`**outside viewport** (${G.outOfBounds.viewport.join(", ")})`);if(G.outOfBounds?.container)J.push(`**outside \`${G.outOfBounds.container.label}\`** (${G.outOfBounds.container.edges.join(", ")})`);let Y=z?`, ${Math.round(z.width)}×${Math.round(z.height)}px`:"";return`at (${Math.round(Z.x)}, ${Math.round(Z.y)})${Y}: ${J.join(", ")}`}var lq=15;function pq(G){if(G.length<2)return[];let Z=[],z=new Set;for(let J=0;J<G.length;J++){if(z.has(J))continue;let Y=[J];for(let B=J+1;B<G.length;B++){if(z.has(B))continue;if(Math.abs(G[J].rect.y-G[B].rect.y)<lq)Y.push(B)}if(Y.length>=2){let B=Y.map((q)=>G[q]);B.sort((q,A)=>q.rect.x-A.rect.x);let H=[];for(let q=0;q<B.length-1;q++)H.push(Math.round(B[q+1].rect.x-(B[q].rect.x+B[q].rect.width)));let X=Math.round(B.reduce((q,A)=>q+A.rect.y,0)/B.length);Z.push({labels:B.map((q)=>q.label),type:"row",sharedEdge:X,gaps:H,avgGap:H.length?Math.round(H.reduce((q,A)=>q+A,0)/H.length):0}),Y.forEach((q)=>z.add(q))}}for(let J=0;J<G.length;J++){if(z.has(J))continue;let Y=[J];for(let B=J+1;B<G.length;B++){if(z.has(B))continue;if(Math.abs(G[J].rect.x-G[B].rect.x)<lq)Y.push(B)}if(Y.length>=2){let B=Y.map((q)=>G[q]);B.sort((q,A)=>q.rect.y-A.rect.y);let H=[];for(let q=0;q<B.length-1;q++)H.push(Math.round(B[q+1].rect.y-(B[q].rect.y+B[q].rect.height)));let X=Math.round(B.reduce((q,A)=>q+A.rect.x,0)/B.length);Z.push({labels:B.map((q)=>q.label),type:"column",sharedEdge:X,gaps:H,avgGap:H.length?Math.round(H.reduce((q,A)=>q+A,0)/H.length):0}),Y.forEach((q)=>z.add(q))}}return Z}function $1(G){if(G.length<2)return[];let Z=pq(G.map((H)=>({label:H.label,rect:H.originalRect}))),z=pq(G.map((H)=>({label:H.label,rect:H.currentRect}))),J=[],Y=new Set;for(let H of Z){let X=new Set(H.labels),q=null,A=0;for(let U of z){let V=U.labels.filter((L)=>X.has(L)).length;if(V>=2&&V>A)q=U,A=V}if(q){let U=q.labels.filter((L)=>X.has(L)),V=U.join(", ");if(q.type!==H.type){let L=H.type==="row"?"y":"x",D=q.type==="row"?"y":"x";J.push(`**${V}**: ${H.type} (${L}≈${H.sharedEdge}, ${H.avgGap}px gaps) → ${q.type} (${D}≈${q.sharedEdge}, ${q.avgGap}px gaps)`)}else if(Math.abs(H.sharedEdge-q.sharedEdge)>20||Math.abs(H.avgGap-q.avgGap)>5){let L=H.type==="row"?"y":"x",D=Math.abs(H.sharedEdge-q.sharedEdge)>20?` ${L}: ${H.sharedEdge} → ${q.sharedEdge}`:"",f=Math.abs(H.avgGap-q.avgGap)>5?` gaps: ${H.avgGap}px → ${q.avgGap}px`:"";J.push(`**${V}**: ${H.type} shifted —${D}${f}`)}U.forEach((L)=>Y.add(L))}else{let U=H.labels.join(", "),V=H.type==="row"?"y":"x";J.push(`**${U}**: ${H.type} (${V}≈${H.sharedEdge}) dissolved`),H.labels.forEach((L)=>Y.add(L))}}for(let H of z){if(H.labels.every((A)=>Y.has(A)))continue;if(H.labels.filter((A)=>!Y.has(A)).length<2)continue;if(!Z.some((A)=>{return A.labels.filter((V)=>H.labels.includes(V)).length>=2})){let A=H.type==="row"?"y":"x";J.push(`**${H.labels.join(", ")}**: new ${H.type} (${A}≈${H.sharedEdge}, ${H.avgGap}px gaps)`),H.labels.forEach((U)=>Y.add(U))}}let B=G.filter((H)=>!Y.has(H.label));if(B.length>=2){let H={};for(let X of B){let q=Math.round(X.currentRect.x/5)*5;(H[q]??(H[q]=[])).push(X.label)}for(let[X,q]of Object.entries(H))if(q.length>=2)J.push(`**${q.join(", ")}**: shared left edge at x≈${X}`)}return J}function FW(G){if(typeof document>"u")return{viewport:G,contentArea:null};let Z=[],z=new Set,J=(X)=>{if(z.has(X))return;if(!(X instanceof HTMLElement))return;if(X.hasAttribute("data-feedback-toolbar"))return;if(s4.has(X.tagName.toLowerCase()))return;z.add(X),Z.push(X)},Y=document.querySelector("main");if(Y)J(Y);let B=document.querySelector("[role='main']");if(B)J(B);for(let X of Array.from(document.body.children))if(J(X),X.children){for(let q of Array.from(X.children))if(J(q),q.children)for(let A of Array.from(q.children))J(A)}let H=null;for(let X of Z){let q=X.getBoundingClientRect();if(q.height<50)continue;let A=getComputedStyle(X);if(A.maxWidth&&A.maxWidth!=="none"&&A.maxWidth!=="0px"){if(!H||q.width<H.rect.width)H={el:X,rect:q};continue}if(!H&&q.width<G.width-20&&q.width>100)H={el:X,rect:q}}if(H){let{el:X,rect:q}=H;return{viewport:G,contentArea:{width:Math.round(q.width),left:Math.round(q.left),right:Math.round(q.right),centerX:Math.round(q.left+q.width/2),selector:e7(X)}}}return{viewport:G,contentArea:null}}function C1(G){if(typeof document>"u")return null;let Z=document.querySelector(G);if(!Z?.parentElement)return null;let z=getComputedStyle(Z.parentElement),J={parentDisplay:z.display,parentSelector:e7(Z.parentElement)};if(z.display.includes("flex"))J.flexDirection=z.flexDirection;if(z.display.includes("grid")&&z.gridTemplateColumns!=="none")J.gridCols=z.gridTemplateColumns;if(z.gap&&z.gap!=="normal"&&z.gap!=="0px")J.gap=z.gap;return J}function MW(G,Z){let z=Z.contentArea,J=z?z.width:Z.viewport.width,Y=z?z.left:0,B=z?z.centerX:Math.round(Z.viewport.width/2),H=Math.round(G.x-Y),X=Math.round(Y+J-(G.x+G.width)),q=(G.width/J*100).toFixed(1),A=G.x+G.width/2,U=Math.abs(A-B)<20,V=G.width/J>0.95,L=[];if(V)L.push("`width: 100%` of container");else L.push(`left \`${H}px\` in container, right \`${X}px\`, width \`${q}%\` (\`${Math.round(G.width)}px\`)`);if(U&&!V)L.push("centered — `margin-inline: auto`");return L.join(" — ")}function OW(G){let{viewport:Z,contentArea:z}=G,J=`### Reference Frame
`;if(J+=`- Viewport: \`${Z.width}×${Z.height}px\`
`,z){let Y=z;J+=`- Content area: \`${Y.width}px\` wide, left edge at \`x=${Y.left}\`, right at \`x=${Y.right}\` (\`${Y.selector}\`)
`,J+=`- Pixel → CSS translation:
`,J+=`  - **Horizontal position in container**: \`element.x - ${Y.left}\` → use as \`margin-left\` or \`left\`
`,J+=`  - **Width as % of container**: \`element.width / ${Y.width} × 100\` → use as \`width: X%\`
`,J+="  - **Vertical gap between elements**: `nextElement.y - (prevElement.y + prevElement.height)` → use as `margin-top` or `gap`\n",J+=`  - **Centered**: if \`|element.centerX - ${Y.centerX}| < 20px\` → use \`margin-inline: auto\`
`}else J+=`- No distinct content container — elements positioned relative to full viewport
`,J+=`- Pixel → CSS translation:
`,J+=`  - **Width as % of viewport**: \`element.width / ${Z.width} × 100\` → use as \`width: X%\`
`,J+=`  - **Centered**: if \`|(element.x + element.width/2) - ${Math.round(Z.width/2)}| < 20px\` → use \`margin-inline: auto\`
`;return J+=`
`,J}function T1(G){let Z=C1(G);if(!Z)return null;let z=`\`${Z.parentDisplay}\``;if(Z.flexDirection)z+=`, flex-direction: \`${Z.flexDirection}\``;if(Z.gridCols)z+=`, grid-template-columns: \`${Z.gridCols}\``;if(Z.gap)z+=`, gap: \`${Z.gap}\``;return`Parent: ${z} (\`${Z.parentSelector}\`)`}function iq(G,Z,z,J="standard"){if(G.length===0)return"";let Y=[...G].sort((T,_)=>{if(Math.abs(T.y-_.y)<20)return T.x-_.x;return T.y-_.y}),B="";if(z?.blankCanvas){if(B+=`## Wireframe: New Page

`,z.wireframePurpose)B+=`> **Purpose:** ${z.wireframePurpose}
>
`;B+=`> ${G.length} component${G.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`}else B+=`## Design Layout

> ${G.length} component${G.length!==1?"s":""} placed

`;if(J==="compact")return B+=`### Components
`,Y.forEach((T,_)=>{let O=L6[T.type]?.label||T.type;B+=`${_+1}. **${O}** — \`${Math.round(T.width)}×${Math.round(T.height)}px\` at \`(${Math.round(T.x)}, ${Math.round(T.y)})\`
`}),B;let H=FW(Z);B+=OW(H),B+=`### Components
`,Y.forEach((T,_)=>{let O=L6[T.type]?.label||T.type,K={x:T.x,y:T.y,width:T.width,height:T.height};B+=`${_+1}. **${O}** — \`${Math.round(T.width)}×${Math.round(T.height)}px\` at \`(${Math.round(T.x)}, ${Math.round(T.y)})\`
`;let $=r4(K),Y0=AW($,{includeLeftRight:J==="detailed"||J==="forensic"});for(let a of Y0)B+=`   - ${a}
`;let k=MW(K,H);if(k)B+=`   - CSS: ${k}
`}),B+=`
### Layout Analysis
`;let X=[];for(let T of Y){let _=X.find((O)=>Math.abs(O.y-T.y)<30);if(_)_.items.push(T);else X.push({y:T.y,items:[T]})}if(X.sort((T,_)=>T.y-_.y),X.forEach((T,_)=>{T.items.sort((K,$)=>K.x-$.x);let O=T.items.map((K)=>L6[K.type]?.label||K.type);if(T.items.length===1){let $=T.items[0].width>Z.width*0.8;B+=`- Row ${_+1} (y≈${Math.round(T.y)}): ${O[0]}${$?" — full width":""}
`}else B+=`- Row ${_+1} (y≈${Math.round(T.y)}): ${O.join(" | ")} — ${T.items.length} items side by side
`}),J==="detailed"||J==="forensic"){B+=`
### Spacing & Gaps
`;for(let T=0;T<Y.length-1;T++){let _=Y[T],O=Y[T+1],K=L6[_.type]?.label||_.type,$=L6[O.type]?.label||O.type,p=Math.round(O.y-(_.y+_.height)),Y0=Math.round(O.x-(_.x+_.width));if(Math.abs(_.y-O.y)<30)B+=`- ${K} → ${$}: \`${Y0}px\` horizontal gap
`;else B+=`- ${K} → ${$}: \`${p}px\` vertical gap
`}if(J==="forensic"&&Y.length>2){B+=`
### All Pairwise Gaps
`;for(let T=0;T<Y.length;T++)for(let _=T+1;_<Y.length;_++){let O=Y[T],K=Y[_],$=L6[O.type]?.label||O.type,p=L6[K.type]?.label||K.type,Y0=Math.round(K.y-(O.y+O.height)),k=Math.round(K.x-(O.x+O.width));B+=`- ${$} ↔ ${p}: h=\`${k}px\` v=\`${Y0}px\`
`}}if(J==="forensic")B+=`
### Z-Order (placement order)
`,G.forEach((T,_)=>{let O=L6[T.type]?.label||T.type;B+=`${_}. ${O} at \`(${Math.round(T.x)}, ${Math.round(T.y)})\`
`})}B+=`
### Suggested Implementation
`;let q=Y.some((T)=>T.type==="navigation"),A=Y.some((T)=>T.type==="hero"),U=Y.some((T)=>T.type==="sidebar"),V=Y.some((T)=>T.type==="footer"),L=Y.filter((T)=>T.type==="card"),D=Y.filter((T)=>T.type==="form"),f=Y.filter((T)=>T.type==="table"),x=Y.filter((T)=>T.type==="modal");if(q)B+=`- Top navigation bar with logo + nav links + CTA
`;if(A)B+=`- Hero section with heading, subtext, and call-to-action
`;if(U)B+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`;if(L.length>1)B+=`- ${L.length}-column card grid — use CSS Grid or Flexbox
`;else if(L.length===1)B+=`- Card component with image + content area
`;if(D.length>0)B+=`- ${D.length} form${D.length>1?"s":""} — add proper labels, validation, and submit handling
`;if(f.length>0)B+=`- Data table — consider sortable columns and pagination
`;if(x.length>0)B+=`- Modal dialog — add overlay backdrop and focus trapping
`;if(V)B+=`- Multi-column footer with links
`;if(J==="detailed"||J==="forensic"){if(B+=`
### CSS Suggestions
`,U){let T=Y.find((_)=>_.type==="sidebar");B+=`- \`display: grid; grid-template-columns: ${Math.round(T.width)}px 1fr;\`
`}if(L.length>1){let T=Math.round(L[0].width);B+=`- \`display: grid; grid-template-columns: repeat(${L.length}, ${T}px); gap: 16px;\`
`}if(q)B+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n"}return B}function sq(G,Z="standard",z){let{sections:J}=G,Y=[];for(let U of J){let{originalRect:V,currentRect:L}=U,D=Math.abs(V.x-L.x)>1||Math.abs(V.y-L.y)>1,f=Math.abs(V.width-L.width)>1||Math.abs(V.height-L.height)>1;if(!D&&!f){if(Z==="forensic")Y.push({section:U,posMoved:!1,sizeChanged:!1});continue}Y.push({section:U,posMoved:D,sizeChanged:f})}if(Y.length===0)return"";if(Z!=="forensic"&&Y.every((U)=>!U.posMoved&&!U.sizeChanged))return"";let B=`## Suggested Layout Changes

`,H=z?z.width:typeof window<"u"?window.innerWidth:0,X=z?z.height:typeof window<"u"?window.innerHeight:0,q=FW({width:H,height:X});if(Z!=="compact")B+=OW(q);if(Z==="forensic")B+=`> Detected at: \`${new Date(G.detectedAt).toISOString()}\`
`,B+=`> Total sections: ${J.length}

`;let A=(U)=>J.map((V)=>({label:V.label,selector:V.selector,rect:U==="original"?V.originalRect:V.currentRect}));B+=`**Changes:**
`;for(let{section:U,posMoved:V,sizeChanged:L}of Y){let{originalRect:D,currentRect:f}=U;if(!V&&!L){B+=`- ${U.label} — unchanged at (${Math.round(f.x)}, ${Math.round(f.y)}) ${Math.round(f.width)}×${Math.round(f.height)}px
`;continue}if(Z==="compact"){if(V&&L)B+=`- Suggested: move **${U.label}** to (${Math.round(f.x)}, ${Math.round(f.y)}) ${Math.round(f.width)}×${Math.round(f.height)}px
`;else if(V)B+=`- Suggested: move **${U.label}** to (${Math.round(f.x)}, ${Math.round(f.y)})
`;else B+=`- Suggested: resize **${U.label}** to ${Math.round(f.width)}×${Math.round(f.height)}px
`;continue}if(V&&L)B+=`- Suggested: move and resize **${U.label}**
`;else if(V)B+=`- Suggested: move **${U.label}**
`;else B+=`- Suggested: resize **${U.label}** from ${Math.round(D.width)}×${Math.round(D.height)}px to ${Math.round(f.width)}×${Math.round(f.height)}px
`;if(V){let T=r4(D,A("original")),_=r4(f,A("current")),O=L?{width:D.width,height:D.height}:void 0;B+=`  - Currently ${N1(T,{x:D.x,y:D.y},O)}
`;let K=L?{width:f.width,height:f.height}:void 0,$=`at (${Math.round(f.x)}, ${Math.round(f.y)})`,p=K?`, ${Math.round(K.width)}×${Math.round(K.height)}px`:"",k=AW(_,{includeLeftRight:Z==="detailed"||Z==="forensic"});if(k.length>0){B+=`  - Suggested position ${$}${p}: ${k[0]}
`;for(let G0=1;G0<k.length;G0++)B+=`    ${k[G0]}
`}else B+=`  - Suggested position ${$}${p}
`;let a=MW(f,q);if(a)B+=`  - CSS: ${a}
`}let x=T1(U.selector);if(x)B+=`  - ${x}
`;if(B+=`  - Selector: \`${U.selector}\`
`,Z==="detailed"||Z==="forensic"){let T=U.className?`${U.tagName}.${U.className.split(" ")[0]}`:U.tagName;if(T!==U.selector)B+=`  - Element: \`${T}\`
`;if(U.role)B+=`  - Role: \`${U.role}\`
`;if(Z==="forensic"&&U.textSnippet)B+=`  - Text: "${U.textSnippet}"
`}if(Z==="forensic")B+=`  - Original rect: \`{ x: ${Math.round(D.x)}, y: ${Math.round(D.y)}, w: ${Math.round(D.width)}, h: ${Math.round(D.height)} }\`
`,B+=`  - Current rect: \`{ x: ${Math.round(f.x)}, y: ${Math.round(f.y)}, w: ${Math.round(f.width)}, h: ${Math.round(f.height)} }\`
`}if(Z!=="compact"){let U=Y.filter((L)=>L.posMoved).map((L)=>({label:L.section.label,originalRect:L.section.originalRect,currentRect:L.section.currentRect})),V=$1(U);if(V.length>0){B+=`
### Layout Summary
`;for(let L of V)B+=`- ${L}
`}}if(Z!=="compact"&&J.length>1){B+=`
### All Sections (current positions)
`;let U=[...J].sort((V,L)=>{if(Math.abs(V.currentRect.y-L.currentRect.y)<20)return V.currentRect.x-L.currentRect.x;return V.currentRect.y-L.currentRect.y});for(let V of U){let L=V.currentRect,D=Math.abs(L.x-V.originalRect.x)>1||Math.abs(L.y-V.originalRect.y)>1||Math.abs(L.width-V.originalRect.width)>1||Math.abs(L.height-V.originalRect.height)>1;B+=`- ${V.label}: \`${Math.round(L.width)}×${Math.round(L.height)}px\` at \`(${Math.round(L.x)}, ${Math.round(L.y)})\`${D?" ← suggested":""}
`}}return B}var o4="feedback-annotations-",VW=7;function E9(G){return`${o4}${G}`}function nJ(G){if(typeof window>"u")return[];try{let Z=localStorage.getItem(E9(G));if(!Z)return[];let z=JSON.parse(Z),J=Date.now()-VW*24*60*60*1000;return z.filter((Y)=>!Y.timestamp||Y.timestamp>J)}catch{return[]}}function RW(G,Z){if(typeof window>"u")return;try{localStorage.setItem(E9(G),JSON.stringify(Z))}catch{}}function S1(){let G=new Map;if(typeof window>"u")return G;try{let Z=Date.now()-VW*24*60*60*1000;for(let z=0;z<localStorage.length;z++){let J=localStorage.key(z);if(J?.startsWith(o4)){let Y=J.slice(o4.length),B=localStorage.getItem(J);if(B){let X=JSON.parse(B).filter((q)=>!q.timestamp||q.timestamp>Z);if(X.length>0)G.set(Y,X)}}}}catch{}return G}function sJ(G,Z,z){let J=Z.map((Y)=>({...Y,_syncedTo:z}));RW(G,J)}var t4="agentation-design-";function x1(G){if(typeof window>"u")return[];try{let Z=localStorage.getItem(`${t4}${G}`);if(!Z)return[];return JSON.parse(Z)}catch{return[]}}function P1(G,Z){if(typeof window>"u")return;try{localStorage.setItem(`${t4}${G}`,JSON.stringify(Z))}catch{}}function k1(G){if(typeof window>"u")return;try{localStorage.removeItem(`${t4}${G}`)}catch{}}var e4="agentation-rearrange-";function b1(G){if(typeof window>"u")return null;try{let Z=localStorage.getItem(`${e4}${G}`);if(!Z)return null;return JSON.parse(Z)}catch{return null}}function E1(G,Z){if(typeof window>"u")return;try{localStorage.setItem(`${e4}${G}`,JSON.stringify(Z))}catch{}}function h1(G){if(typeof window>"u")return;try{localStorage.removeItem(`${e4}${G}`)}catch{}}var GB="agentation-wireframe-";function y1(G){if(typeof window>"u")return null;try{let Z=localStorage.getItem(`${GB}${G}`);if(!Z)return null;return JSON.parse(Z)}catch{return null}}function rq(G,Z){if(typeof window>"u")return;try{localStorage.setItem(`${GB}${G}`,JSON.stringify(Z))}catch{}}function T9(G){if(typeof window>"u")return;try{localStorage.removeItem(`${GB}${G}`)}catch{}}var wW="agentation-session-";function ZB(G){return`${wW}${G}`}function g1(G){if(typeof window>"u")return null;try{return localStorage.getItem(ZB(G))}catch{return null}}function h4(G,Z){if(typeof window>"u")return;try{localStorage.setItem(ZB(G),Z)}catch{}}function v1(G){if(typeof window>"u")return;try{localStorage.removeItem(ZB(G))}catch{}}var a4=`${wW}toolbar-hidden`;function u1(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(a4)==="1"}catch{return!1}}function m1(G){if(typeof window>"u")return;try{if(G)sessionStorage.setItem(a4,"1");else sessionStorage.removeItem(a4)}catch{}}async function y4(G,Z){let z=await fetch(`${G}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:Z})});if(!z.ok)throw Error(`Failed to create session: ${z.status}`);return z.json()}async function oq(G,Z){let z=await fetch(`${G}/sessions/${Z}`);if(!z.ok)throw Error(`Failed to get session: ${z.status}`);return z.json()}async function kz(G,Z,z){let J=await fetch(`${G}/sessions/${Z}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(z)});if(!J.ok)throw Error(`Failed to sync annotation: ${J.status}`);return J.json()}async function aq(G,Z,z){let J=await fetch(`${G}/annotations/${Z}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(z)});if(!J.ok)throw Error(`Failed to update annotation: ${J.status}`);return J.json()}async function U7(G,Z){let z=await fetch(`${G}/annotations/${Z}`,{method:"DELETE"});if(!z.ok)throw Error(`Failed to delete annotation: ${z.status}`)}var JG={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},nq=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),tq=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],d1=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function c1(G){let Z=G?.mode??"filtered",z=nq;if(G?.skipExact){let J=G.skipExact instanceof Set?G.skipExact:new Set(G.skipExact);z=new Set([...nq,...J])}return{maxComponents:G?.maxComponents??6,maxDepth:G?.maxDepth??30,mode:Z,skipExact:z,skipPatterns:G?.skipPatterns?[...tq,...G.skipPatterns]:tq,userPatterns:G?.userPatterns??d1,filter:G?.filter}}function l1(G){return G.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function p1(G,Z=10){let z=new Set,J=G,Y=0;while(J&&Y<Z){if(J.className&&typeof J.className==="string")J.className.split(/\s+/).forEach((B)=>{if(B.length>1){let H=B.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();if(H.length>1)z.add(H)}});J=J.parentElement,Y++}return z}function i1(G,Z){let z=l1(G);for(let J of Z){if(J===z)return!0;let Y=z.split("-").filter((H)=>H.length>2),B=J.split("-").filter((H)=>H.length>2);for(let H of Y)for(let X of B)if(H===X||H.includes(X)||X.includes(H))return!0}return!1}function s1(G,Z,z,J){if(z.filter)return z.filter(G,Z);switch(z.mode){case"all":return!0;case"filtered":if(z.skipExact.has(G))return!1;if(z.skipPatterns.some((Y)=>Y.test(G)))return!1;return!0;case"smart":if(z.skipExact.has(G))return!1;if(z.skipPatterns.some((Y)=>Y.test(G)))return!1;if(J&&i1(G,J))return!0;if(z.userPatterns.some((Y)=>Y.test(G)))return!0;return!1;default:return!0}}var bz=null,r1=new WeakMap;function g4(G){return Object.keys(G).some((Z)=>Z.startsWith("__reactFiber$")||Z.startsWith("__reactInternalInstance$")||Z.startsWith("__reactProps$"))}function o1(){if(bz!==null)return bz;if(typeof document>"u")return!1;if(document.body&&g4(document.body))return bz=!0,!0;let G=["#root","#app","#__next","[data-reactroot]"];for(let Z of G){let z=document.querySelector(Z);if(z&&g4(z))return bz=!0,!0}if(document.body){for(let Z of document.body.children)if(g4(Z))return bz=!0,!0}return bz=!1,!1}var rJ={map:r1};function a1(G){return Object.keys(G).find((z)=>z.startsWith("__reactFiber$")||z.startsWith("__reactInternalInstance$"))||null}function n1(G){let Z=a1(G);if(!Z)return null;return G[Z]}function r7(G){if(!G)return null;if(G.displayName)return G.displayName;if(G.name)return G.name;return null}function t1(G){let{tag:Z,type:z,elementType:J}=G;if(Z===JG.HostComponent||Z===JG.HostText||Z===JG.HostHoistable||Z===JG.HostSingleton)return null;if(Z===JG.Fragment||Z===JG.Mode||Z===JG.Profiler||Z===JG.DehydratedFragment)return null;if(Z===JG.HostRoot||Z===JG.HostPortal||Z===JG.ScopeComponent||Z===JG.OffscreenComponent||Z===JG.LegacyHiddenComponent||Z===JG.CacheComponent||Z===JG.TracingMarkerComponent||Z===JG.Throw||Z===JG.ViewTransitionComponent||Z===JG.ActivityComponent)return null;if(Z===JG.ForwardRef){let Y=J;if(Y?.render){let B=r7(Y.render);if(B)return B}if(Y?.displayName)return Y.displayName;return r7(z)}if(Z===JG.MemoComponent||Z===JG.SimpleMemoComponent){let Y=J;if(Y?.type){let B=r7(Y.type);if(B)return B}if(Y?.displayName)return Y.displayName;return r7(z)}if(Z===JG.ContextProvider){let Y=z;if(Y?._context?.displayName)return`${Y._context.displayName}.Provider`;return null}if(Z===JG.ContextConsumer){let Y=z;if(Y?.displayName)return`${Y.displayName}.Consumer`;return null}if(Z===JG.LazyComponent){let Y=J;if(Y?._status===1&&Y._result)return r7(Y._result);return null}if(Z===JG.SuspenseComponent||Z===JG.SuspenseListComponent)return null;if(Z===JG.IncompleteClassComponent||Z===JG.IncompleteFunctionComponent)return r7(z);if(Z===JG.FunctionComponent||Z===JG.ClassComponent||Z===JG.IndeterminateComponent)return r7(z);return null}function e1(G){if(G.length<=2)return!0;if(G.length<=3&&G===G.toLowerCase())return!0;return!1}function G2(G,Z){let z=c1(Z),J=z.mode==="all";if(J){let q=rJ.map.get(G);if(q!==void 0)return q}if(!o1()){let q={path:null,components:[]};if(J)rJ.map.set(G,q);return q}let Y=z.mode==="smart"?p1(G):void 0,B=[];try{let q=n1(G),A=0;while(q&&A<z.maxDepth&&B.length<z.maxComponents){let U=t1(q);if(U&&!e1(U)&&s1(U,A,z,Y))B.push(U);q=q.return,A++}}catch{let q={path:null,components:[]};if(J)rJ.map.set(G,q);return q}if(B.length===0){let q={path:null,components:[]};if(J)rJ.map.set(G,q);return q}let X={path:B.slice().reverse().map((q)=>`<${q}>`).join(" "),components:B};if(J)rJ.map.set(G,X);return X}var oJ={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16};function Z2(G){if(!G||typeof G!=="object")return null;let Z=Object.keys(G),z=Z.find((B)=>B.startsWith("__reactFiber$"));if(z)return G[z]||null;let J=Z.find((B)=>B.startsWith("__reactInternalInstance$"));if(J)return G[J]||null;let Y=Z.find((B)=>{if(!B.startsWith("__react"))return!1;let H=G[B];return H&&typeof H==="object"&&"_debugSource"in H});if(Y)return G[Y]||null;return null}function eJ(G){if(!G.type)return null;if(typeof G.type==="string")return null;if(typeof G.type==="object"||typeof G.type==="function"){let Z=G.type;if(Z.displayName)return Z.displayName;if(Z.name)return Z.name}return null}function z2(G,Z=50){let z=G,J=0;while(z&&J<Z){if(z._debugSource)return{source:z._debugSource,componentName:eJ(z)};if(z._debugOwner?._debugSource)return{source:z._debugOwner._debugSource,componentName:eJ(z._debugOwner)};z=z.return,J++}return null}function J2(G){let Z=G,z=0,J=50;while(Z&&z<J){let Y=Z,B=["_debugSource","__source","_source","debugSource"];for(let H of B){let X=Y[H];if(X&&typeof X==="object"&&"fileName"in X)return{source:X,componentName:eJ(Z)}}if(Z.memoizedProps){let H=Z.memoizedProps;if(H.__source&&typeof H.__source==="object"){let X=H.__source;if(X.fileName&&X.lineNumber)return{source:{fileName:X.fileName,lineNumber:X.lineNumber,columnNumber:X.columnNumber},componentName:eJ(Z)}}}Z=Z.return,z++}return null}var S9=new Map;function Y2(G){let{tag:Z,type:z,elementType:J}=G;if(typeof z==="string"||z==null)return null;if(typeof z==="function"&&z.prototype?.isReactComponent)return null;if((Z===oJ.FunctionComponent||Z===oJ.IndeterminateComponent)&&typeof z==="function")return z;if(Z===oJ.ForwardRef&&J){let Y=J.render;if(typeof Y==="function")return Y}if((Z===oJ.MemoComponent||Z===oJ.SimpleMemoComponent)&&J){let Y=J.type;if(typeof Y==="function")return Y}if(typeof z==="function")return z;return null}function B2(){let G=DW.default,Z=G.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(Z&&"H"in Z)return{get:()=>Z.H,set:(J)=>{Z.H=J}};let z=G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(z){let J=z.ReactCurrentDispatcher;if(J&&"current"in J)return{get:()=>J.current,set:(Y)=>{J.current=Y}}}return null}function H2(G){let Z=G.split(`
`),z=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],J=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,Y=/^[^@]*@(.+?):(\d+):(\d+)$/;for(let B of Z){let H=B.trim();if(!H)continue;if(z.some((q)=>q.test(H)))continue;let X=J.exec(H)||Y.exec(H);if(X)return{fileName:X[1],line:parseInt(X[2],10),column:parseInt(X[3],10)}}return null}function X2(G){let Z=G;return Z=Z.replace(/[?#].*$/,""),Z=Z.replace(/^turbopack:\/\/\/\[project\]\//,""),Z=Z.replace(/^webpack-internal:\/\/\/\.\//,""),Z=Z.replace(/^webpack-internal:\/\/\//,""),Z=Z.replace(/^webpack:\/\/\/\.\//,""),Z=Z.replace(/^webpack:\/\/\//,""),Z=Z.replace(/^turbopack:\/\/\//,""),Z=Z.replace(/^https?:\/\/[^/]+\//,""),Z=Z.replace(/^file:\/\/\//,"/"),Z=Z.replace(/^\([^)]+\)\/\.\//,""),Z=Z.replace(/^\.\//,""),Z}function q2(G){let Z=Y2(G);if(!Z)return null;if(S9.has(Z))return S9.get(Z);let z=B2();if(!z)return S9.set(Z,null),null;let J=z.get(),Y=null;try{let B=new Proxy({},{get(){throw Error("probe")}});z.set(B);try{Z({})}catch(H){if(H instanceof Error&&H.message==="probe"&&H.stack){let X=H2(H.stack);if(X)Y={fileName:X2(X.fileName),lineNumber:X.line,columnNumber:X.column,componentName:eJ(G)||void 0}}}}finally{z.set(J)}return S9.set(Z,Y),Y}function W2(G,Z=15){let z=G,J=0;while(z&&J<Z){let Y=q2(z);if(Y)return Y;z=z.return,J++}return null}function n4(G){let Z=Z2(G);if(!Z)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let z=z2(Z);if(!z)z=J2(Z);if(z?.source)return{found:!0,source:{fileName:z.source.fileName,lineNumber:z.source.lineNumber,columnNumber:z.source.columnNumber,componentName:z.componentName||void 0},isReactApp:!0,isProduction:!1};let J=W2(Z);if(J)return{found:!0,source:J,isReactApp:!0,isProduction:!1};return{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function j2(G,Z="path"){let{fileName:z,lineNumber:J,columnNumber:Y}=G,B=`${z}:${J}`;if(Y!==void 0)B+=`:${Y}`;if(Z==="vscode")return`vscode://file${z.startsWith("/")?"":"/"}${B}`;return B}function Q2(G,Z=10){let z=G,J=0;while(z&&J<Z){let Y=n4(z);if(Y.found)return Y;z=z.parentElement,J++}return n4(G)}var U2=`.styles-module__toolbar___wNsdK svg[fill=none],
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
}`,L2={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let G=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");if(!G)G=document.createElement("style"),G.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(G);G.textContent=U2}var u=L2,aJ=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function eq(G,Z,z="standard"){if(G.length===0)return"";let J=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown",Y=`## Page Feedback: ${Z}
`;if(z==="forensic"){if(Y+=`
**Environment:**
`,Y+=`- Viewport: ${J}
`,typeof window<"u")Y+=`- URL: ${window.location.href}
`,Y+=`- User Agent: ${navigator.userAgent}
`,Y+=`- Timestamp: ${new Date().toISOString()}
`,Y+=`- Device Pixel Ratio: ${window.devicePixelRatio}
`;Y+=`
---
`}else if(z!=="compact")Y+=`**Viewport:** ${J}
`;return Y+=`
`,G.forEach((B,H)=>{if(z==="compact"){if(Y+=`${H+1}. **${B.element}**${B.sourceFile?` (${B.sourceFile})`:""}: ${B.comment}`,B.selectedText)Y+=` (re: "${B.selectedText.slice(0,30)}${B.selectedText.length>30?"...":""}")`;Y+=`
`}else if(z==="forensic"){if(Y+=`### ${H+1}. ${B.element}
`,B.isMultiSelect&&B.fullPath)Y+=`*Forensic data shown for first element of selection*
`;if(B.fullPath)Y+=`**Full DOM Path:** ${B.fullPath}
`;if(B.cssClasses)Y+=`**CSS Classes:** ${B.cssClasses}
`;if(B.boundingBox)Y+=`**Position:** x:${Math.round(B.boundingBox.x)}, y:${Math.round(B.boundingBox.y)} (${Math.round(B.boundingBox.width)}×${Math.round(B.boundingBox.height)}px)
`;if(Y+=`**Annotation at:** ${B.x.toFixed(1)}% from left, ${Math.round(B.y)}px from top
`,B.selectedText)Y+=`**Selected text:** "${B.selectedText}"
`;if(B.nearbyText&&!B.selectedText)Y+=`**Context:** ${B.nearbyText.slice(0,100)}
`;if(B.computedStyles)Y+=`**Computed Styles:** ${B.computedStyles}
`;if(B.accessibility)Y+=`**Accessibility:** ${B.accessibility}
`;if(B.nearbyElements)Y+=`**Nearby Elements:** ${B.nearbyElements}
`;if(B.sourceFile)Y+=`**Source:** ${B.sourceFile}
`;if(B.reactComponents)Y+=`**React:** ${B.reactComponents}
`;Y+=`**Feedback:** ${B.comment}

`}else{if(Y+=`### ${H+1}. ${B.element}
`,Y+=`**Location:** ${B.elementPath}
`,B.sourceFile)Y+=`**Source:** ${B.sourceFile}
`;if(B.reactComponents)Y+=`**React:** ${B.reactComponents}
`;if(z==="detailed"){if(B.cssClasses)Y+=`**Classes:** ${B.cssClasses}
`;if(B.boundingBox)Y+=`**Position:** ${Math.round(B.boundingBox.x)}px, ${Math.round(B.boundingBox.y)}px (${Math.round(B.boundingBox.width)}×${Math.round(B.boundingBox.height)}px)
`}if(B.selectedText)Y+=`**Selected text:** "${B.selectedText}"
`;if(z==="detailed"&&B.nearbyText&&!B.selectedText)Y+=`**Context:** ${B.nearbyText.slice(0,100)}
`;Y+=`**Feedback:** ${B.comment}

`}}),Y.trim()}var _2=`@keyframes styles-module__markerIn___x4G8D {
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
}`,A2={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",markerIn:"styles-module__markerIn___x4G8D",markerOut:"styles-module__markerOut___6VhQN",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",renumberRoll:"styles-module__renumberRoll___akV9B",markerTooltip:"styles-module__markerTooltip___-VUm-",tooltipIn:"styles-module__tooltipIn___aJslQ",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let G=document.getElementById("feedback-tool-styles-annotation-marker-styles");if(!G)G=document.createElement("style"),G.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(G);G.textContent=_2}var dG=A2;function GW({annotation:G,globalIndex:Z,layerIndex:z,layerSize:J,isExiting:Y,isClearing:B,isAnimated:H,isHovered:X,isDeleting:q,isEditingAny:A,renumberFrom:U,markerClickBehavior:V,tooltipStyle:L,onHoverEnter:D,onHoverLeave:f,onClick:x,onContextMenu:T}){let _=(X||q)&&!A,O=_&&V==="delete",K=G.isMultiSelect,$=K?"var(--agentation-color-green)":"var(--agentation-color-accent)",p=Y?dG.exit:B?dG.clearing:!H?dG.enter:"",Y0=Y?`${(J-1-z)*20}ms`:`${z*20}ms`;return PZ.jsxs("div",{className:`${dG.marker} ${K?dG.multiSelect:""} ${p} ${O?dG.hovered:""}`,"data-annotation-marker":!0,style:{left:`${G.x}%`,top:G.y,backgroundColor:O?void 0:$,animationDelay:Y0},onMouseEnter:()=>D(G),onMouseLeave:f,onClick:(k)=>{if(k.stopPropagation(),!Y)x(G)},onContextMenu:T?(k)=>{if(V==="delete"){if(k.preventDefault(),k.stopPropagation(),!Y)T(G)}}:void 0,children:[_?O?PZ.jsx(HW,{size:K?18:16}):PZ.jsx(C_,{size:16}):PZ.jsx("span",{className:U!==null&&Z>=U?dG.renumber:void 0,children:Z+1}),X&&!A&&PZ.jsxs("div",{className:`${dG.markerTooltip} ${dG.enter}`,style:L,children:[PZ.jsxs("span",{className:dG.markerQuote,children:[G.element,G.selectedText&&` "${G.selectedText.slice(0,30)}${G.selectedText.length>30?"...":""}"`]}),PZ.jsx("span",{className:dG.markerNote,children:G.comment})]})]})}function F2({x:G,y:Z,isMultiSelect:z,isExiting:J}){return PZ.jsx("div",{className:`${dG.marker} ${dG.pending} ${z?dG.multiSelect:""} ${J?dG.exit:dG.enter}`,style:{left:`${G}%`,top:Z,backgroundColor:z?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:PZ.jsx(F_,{size:12})})}function ZW({annotation:G,fixed:Z}){let z=G.isMultiSelect;return PZ.jsx("div",{className:`${dG.marker} ${Z?dG.fixed:""} ${dG.hovered} ${z?dG.multiSelect:""} ${dG.exit}`,"data-annotation-marker":!0,style:{left:`${G.x}%`,top:G.y},children:PZ.jsx(HW,{size:z?12:10})})}var M2=`.styles-module__switchContainer___Ka-AB {
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
}`,O2={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let G=document.getElementById("feedback-tool-styles-switch-styles");if(!G)G=document.createElement("style"),G.id="feedback-tool-styles-switch-styles",document.head.appendChild(G);G.textContent=M2}var v4=O2,u4=({className:G="",...Z})=>{return G8.jsxs("div",{className:`${v4.switchContainer} ${G}`,children:[G8.jsx("input",{className:v4.switchInput,type:"checkbox",...Z}),G8.jsx("div",{className:v4.switchThumb})]})},V2=`.styles-module__checkboxContainer___joqZk {
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
}`,R2={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let G=document.getElementById("feedback-tool-styles-checkbox-styles");if(!G)G=document.createElement("style"),G.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(G);G.textContent=V2}var x9=R2,w2=({className:G="",...Z})=>{return yz.jsxs("div",{className:`${x9.checkboxContainer} ${G}`,children:[yz.jsx("input",{className:x9.checkboxInput,type:"checkbox",...Z}),yz.jsx("svg",{className:x9.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:yz.jsx("path",{className:x9.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})},D2=`.styles-module__container___w8eAF {
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
}`,K2={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let G=document.getElementById("feedback-tool-styles-checkbox-field-styles");if(!G)G=document.createElement("style"),G.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(G);G.textContent=D2}var zW=K2,JW=({className:G="",label:Z,tooltip:z,checked:J,onChange:Y,...B})=>{let H=KW.useId();return gz.jsxs("div",{className:`${zW.container} ${G}`,...B,children:[gz.jsx(w2,{id:H,onChange:Y,checked:J}),gz.jsx("label",{className:zW.label,htmlFor:H,children:Z}),z&&gz.jsx(n7,{content:z})]})},I2=`@keyframes styles-module__cycleTextIn___VBNTi {
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
}`,f2={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let G=document.getElementById("feedback-tool-styles-settings-panel-styles");if(!G)G=document.createElement("style"),G.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(G);G.textContent=I2}var z0=f2;function N2({settings:G,onSettingsChange:Z,isDarkMode:z,onToggleTheme:J,isDevMode:Y,connectionStatus:B,endpoint:H,isVisible:X,toolbarNearBottom:q,settingsPage:A,onSettingsPageChange:U,onHideToolbar:V}){return o.jsx("div",{className:`${z0.settingsPanel} ${X?z0.enter:z0.exit}`,style:q?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:o.jsxs("div",{className:z0.settingsPanelContainer,children:[o.jsxs("div",{className:`${z0.settingsPage} ${A==="automations"?z0.slideLeft:""}`,children:[o.jsxs("div",{className:z0.settingsHeader,children:[o.jsx("a",{className:z0.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:o.jsx("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),o.jsxs("p",{className:z0.settingsVersion,children:["v","3.0.2"]}),o.jsx("button",{className:z0.themeToggle,onClick:J,title:z?"Switch to light mode":"Switch to dark mode",children:o.jsx("span",{className:z0.themeIconWrapper,children:o.jsx("span",{className:z0.themeIcon,children:z?o.jsx(N_,{size:20}):o.jsx($_,{size:20})},z?"sun":"moon")})})]}),o.jsx("div",{className:z0.divider}),o.jsxs("div",{className:z0.settingsSection,children:[o.jsxs("div",{className:z0.settingsRow,children:[o.jsxs("div",{className:z0.settingsLabel,children:["Output Detail",o.jsx(n7,{content:"Controls how much detail is included in the copied output"})]}),o.jsxs("button",{className:z0.cycleButton,onClick:()=>{let D=(aJ.findIndex((f)=>f.value===G.outputDetail)+1)%aJ.length;Z({outputDetail:aJ[D].value})},children:[o.jsx("span",{className:z0.cycleButtonText,children:aJ.find((L)=>L.value===G.outputDetail)?.label},G.outputDetail),o.jsx("span",{className:z0.cycleDots,children:aJ.map((L)=>o.jsx("span",{className:`${z0.cycleDot} ${G.outputDetail===L.value?z0.active:""}`},L.value))})]})]}),o.jsxs("div",{className:`${z0.settingsRow} ${z0.settingsRowMarginTop} ${!Y?z0.settingsRowDisabled:""}`,children:[o.jsxs("div",{className:z0.settingsLabel,children:["React Components",o.jsx(n7,{content:!Y?"Disabled — production builds minify component names, making detection unreliable. Use in development mode.":"Include React component names in annotations"})]}),o.jsx(u4,{checked:Y&&G.reactEnabled,onChange:(L)=>Z({reactEnabled:L.target.checked}),disabled:!Y})]}),o.jsxs("div",{className:`${z0.settingsRow} ${z0.settingsRowMarginTop}`,children:[o.jsxs("div",{className:z0.settingsLabel,children:["Hide Until Restart",o.jsx(n7,{content:"Hides the toolbar until you open a new tab"})]}),o.jsx(u4,{checked:!1,onChange:(L)=>{if(L.target.checked)V()}})]})]}),o.jsx("div",{className:z0.divider}),o.jsxs("div",{className:z0.settingsSection,children:[o.jsx("div",{className:`${z0.settingsLabel} ${z0.settingsLabelMarker}`,children:"Marker Color"}),o.jsx("div",{className:z0.colorOptions,children:tJ.map((L)=>o.jsx("button",{className:`${z0.colorOption} ${G.annotationColorId===L.id?z0.selected:""}`,style:{"--swatch":L.srgb,"--swatch-p3":L.p3},onClick:()=>Z({annotationColorId:L.id}),title:L.label,type:"button"},L.id))})]}),o.jsx("div",{className:z0.divider}),o.jsxs("div",{className:z0.settingsSection,children:[o.jsx(JW,{className:"checkbox-field",label:"Clear on copy/send",checked:G.autoClearAfterCopy,onChange:(L)=>Z({autoClearAfterCopy:L.target.checked}),tooltip:"Automatically clear annotations after copying"}),o.jsx(JW,{className:z0.checkboxField,label:"Block page interactions",checked:G.blockInteractions,onChange:(L)=>Z({blockInteractions:L.target.checked})})]}),o.jsx("div",{className:z0.divider}),o.jsxs("button",{className:z0.settingsNavLink,onClick:()=>U("automations"),children:[o.jsx("span",{children:"Manage MCP & Webhooks"}),o.jsxs("span",{className:z0.settingsNavLinkRight,children:[H&&B!=="disconnected"&&o.jsx("span",{className:`${z0.mcpNavIndicator} ${z0[B]}`}),o.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),o.jsxs("div",{className:`${z0.settingsPage} ${z0.automationsPage} ${A==="automations"?z0.slideIn:""}`,children:[o.jsxs("button",{className:z0.settingsBackButton,onClick:()=>U("main"),children:[o.jsx(S_,{size:16}),o.jsx("span",{children:"Manage MCP & Webhooks"})]}),o.jsx("div",{className:z0.divider}),o.jsxs("div",{className:z0.settingsSection,children:[o.jsxs("div",{className:z0.settingsRow,children:[o.jsxs("span",{className:z0.automationHeader,children:["MCP Connection",o.jsx(n7,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),H&&o.jsx("div",{className:`${z0.mcpStatusDot} ${z0[B]}`,title:B==="connected"?"Connected":B==="connecting"?"Connecting...":"Disconnected"})]}),o.jsxs("p",{className:z0.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",o.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:z0.learnMoreLink,children:"Learn more"})]})]}),o.jsx("div",{className:z0.divider}),o.jsxs("div",{className:`${z0.settingsSection} ${z0.settingsSectionGrow}`,children:[o.jsxs("div",{className:z0.settingsRow,children:[o.jsxs("span",{className:z0.automationHeader,children:["Webhooks",o.jsx(n7,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),o.jsxs("div",{className:z0.autoSendContainer,children:[o.jsx("label",{htmlFor:"agentation-auto-send",className:`${z0.autoSendLabel} ${G.webhooksEnabled?z0.active:""} ${!G.webhookUrl?z0.disabled:""}`,children:"Auto-Send"}),o.jsx(u4,{id:"agentation-auto-send",checked:G.webhooksEnabled,onChange:(L)=>Z({webhooksEnabled:L.target.checked}),disabled:!G.webhookUrl})]})]}),o.jsx("p",{className:z0.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),o.jsx("textarea",{className:z0.webhookUrlInput,placeholder:"Webhook URL",value:G.webhookUrl,onKeyDown:(L)=>L.stopPropagation(),onChange:(L)=>Z({webhookUrl:L.target.value})})]})]})]})})}function m4(G,Z="filtered"){let{name:z,path:J}=hz(G);if(Z==="off")return{name:z,elementName:z,path:J,reactComponents:null};let Y=G2(G,{mode:Z});return{name:Y.path?`${Y.path} ${z}`:z,elementName:z,path:J,reactComponents:Y.path}}var YW=!1,d4={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},f6=(G)=>{if(!G||!G.trim())return!1;try{let Z=new URL(G.trim());return Z.protocol==="http:"||Z.protocol==="https:"}catch{return!1}},$2={compact:"off",standard:"filtered",detailed:"smart",forensic:"all"},tJ=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],C2=()=>{if(typeof document>"u")return;if(document.getElementById("agentation-color-tokens"))return;let G=document.createElement("style");G.id="agentation-color-tokens",G.textContent=[...tJ.map((Z)=>`
      [data-agentation-accent="${Z.id}"] {
        --agentation-color-accent: ${Z.srgb};
      }

      @supports (color: color(display-p3 0 0 0)) {
        [data-agentation-accent="${Z.id}"] {
          --agentation-color-accent: ${Z.p3};
        }
      }
    `),`:root {
      ${tJ.map((Z)=>`--agentation-color-${Z.id}: ${Z.srgb};`).join(`
`)}
    }`,`@supports (color: color(display-p3 0 0 0)) {
      :root {
        ${tJ.map((Z)=>`--agentation-color-${Z.id}: ${Z.p3};`).join(`
`)}
      }
    }`].join(""),document.head.appendChild(G)};C2();function o7(G,Z){let z=document.elementFromPoint(G,Z);if(!z)return null;while(z?.shadowRoot){let J=z.shadowRoot.elementFromPoint(G,Z);if(!J||J===z)break;z=J}return z}function c4(G){let Z=G;while(Z&&Z!==document.body){let J=window.getComputedStyle(Z).position;if(J==="fixed"||J==="sticky")return!0;Z=Z.parentElement}return!1}function a7(G){return G.status!=="resolved"&&G.status!=="dismissed"}function P9(G){let Z=n4(G),z=Z.found?Z:Q2(G);if(z.found&&z.source)return j2(z.source,"path");return}function IW({demoAnnotations:G,demoDelay:Z=1000,enableDemoMode:z=!1,onAnnotationAdd:J,onAnnotationDelete:Y,onAnnotationUpdate:B,onAnnotationsClear:H,onCopy:X,onSubmit:q,copyToClipboard:A=!0,endpoint:U,sessionId:V,onSessionCreated:L,webhookUrl:D,className:f}={}){let[x,T]=C.useState(!1),[_,O]=C.useState([]),[K,$]=C.useState(!0),[p,Y0]=C.useState(()=>u1()),[k,a]=C.useState(!1),G0=C.useRef(null);C.useEffect(()=>{let Q=(R)=>{let w=G0.current;if(w&&w.contains(R.target))R.stopPropagation()},M=["mousedown","click","pointerdown"];return M.forEach((R)=>document.body.addEventListener(R,Q)),()=>{M.forEach((R)=>document.body.removeEventListener(R,Q))}},[]);let[n,_0]=C.useState(!1),[GG,LG]=C.useState(!1),[b0,c0]=C.useState(null),[$0,e0]=C.useState({x:0,y:0}),[i,F0]=C.useState(null),[o0,EG]=C.useState(!1),[RZ,_Z]=C.useState("idle"),[H7,cZ]=C.useState(!1),[X7,B6]=C.useState(!1),[E6,q7]=C.useState(null),[u7,xZ]=C.useState(null),[H6,wZ]=C.useState([]),[M6,O6]=C.useState(null),[Dz,X6]=C.useState(null),[E0,c]=C.useState(null),[Q0,O0]=C.useState(null),[P0,V0]=C.useState([]),[ZG,HG]=C.useState(0),[a0,v0]=C.useState(!1),[A0,N]=C.useState(!1),[S,y]=C.useState(!1),[v,t]=C.useState(!1),[B0,d]=C.useState(!1),[X0,f0]=C.useState("main"),[l0,zG]=C.useState(!1),[q0,XG]=C.useState(!1),[h0,C0]=C.useState(!1),[W0,qG]=C.useState([]),[s0,T0]=C.useState(null),n0=C.useRef(!1),[R0,wG]=C.useState(!1),[ZZ,lZ]=C.useState(!1),[V6,DZ]=C.useState(1),[h6,B9]=C.useState("new-page"),[vG,y6]=C.useState(""),[H9,L5]=C.useState(!1),[I0,pZ]=C.useState(null),j4=C.useRef(!1),Q4=C.useRef({rearrange:null,placements:[]}),m7=C.useRef({rearrange:null,placements:[]}),[_5,dX]=C.useState(0),[A5,F5]=C.useState(0),[M5,U4]=C.useState(0),[O5,cX]=C.useState(0),kJ=C.useRef(new Set),X9=C.useRef(new Set),q6=C.useRef(null),q9=C.useRef(),lX=q0&&x&&!h0&&R0;C.useEffect(()=>{if(lX){lZ(!1);let Q=Ez(()=>{lZ(!0)});return()=>cancelAnimationFrame(Q)}else lZ(!1)},[lX]);let bJ=C.useRef(new Map),EJ=C.useRef(new Map),hJ=C.useRef(),[W6,L4]=C.useState(!1),[iZ,V5]=C.useState([]),R5=C.useRef(iZ);R5.current=iZ;let[pX,vO]=C.useState(null),_4=C.useRef(null),uO=C.useRef(!1),mO=C.useRef([]),dO=C.useRef(0),cO=C.useRef(null),lO=C.useRef(null),pO=C.useRef(1),[iX,sX]=C.useState(!1),Kz=C.useRef(null),[pG,Iz]=C.useState([]),R6=C.useRef({cmd:!1,shift:!1}),QZ=()=>{zG(!0)},w5=()=>{zG(!1)},D5=()=>{if(!iX)Kz.current=L0(()=>sX(!0),850)},K5=()=>{if(Kz.current)clearTimeout(Kz.current),Kz.current=null;sX(!1),w5()};C.useEffect(()=>{return()=>{if(Kz.current)clearTimeout(Kz.current)}},[]);let[y0,I5]=C.useState(()=>{try{let Q=JSON.parse(localStorage.getItem("feedback-toolbar-settings")??"");return{...d4,...Q,annotationColorId:tJ.find((M)=>M.id===Q.annotationColorId)?Q.annotationColorId:d4.annotationColorId}}catch{return d4}}),[w6,rX]=C.useState(!0),[oX,aX]=C.useState(!1),f5=()=>{G0.current?.classList.add(u.disableTransitions),rX((Q)=>!Q),Ez(()=>{G0.current?.classList.remove(u.disableTransitions)})},nX=!1,d7=nX&&y0.reactEnabled?$2[y0.outputDetail]:"off",[nG,A4]=C.useState(V??null),tX=C.useRef(!1),[j6,c7]=C.useState(U?"connecting":"disconnected"),[xG,F4]=C.useState(null),[l7,eX]=C.useState(!1),[fz,Gq]=C.useState(null),M4=C.useRef(!1),[Zq,yJ]=C.useState(new Set),[zq,W9]=C.useState(new Set),[gJ,j9]=C.useState(!1),[N5,Nz]=C.useState(!1),[g6,Jq]=C.useState(!1),$z=C.useRef(null),D6=C.useRef(null),vJ=C.useRef(null),uJ=C.useRef(null),Q9=C.useRef(!1),Yq=C.useRef(0),U9=C.useRef(null),Bq=C.useRef(null),O4=8,$5=50,Hq=C.useRef(null),Xq=C.useRef(null),mJ=C.useRef(null),M0=typeof window<"u"?window.location.pathname:"/";C.useEffect(()=>{if(v)d(!0);else{zG(!1),f0("main");let Q=L0(()=>d(!1),0);return()=>clearTimeout(Q)}},[v]);let V4=x&&K&&!q0;C.useEffect(()=>{if(V4){LG(!1),_0(!0),yJ(new Set);let Q=L0(()=>{yJ((M)=>{let R=new Set(M);return _.forEach((w)=>R.add(w.id)),R})},350);return()=>clearTimeout(Q)}else if(n){LG(!0);let Q=L0(()=>{_0(!1),LG(!1)},250);return()=>clearTimeout(Q)}},[V4]),C.useEffect(()=>{N(!0),HG(window.scrollY);let Q=nJ(M0);if(O(Q.filter(a7)),!YW)aX(!0),YW=!0,L0(()=>aX(!1),750);try{let M=localStorage.getItem("feedback-toolbar-theme");if(M!==null)rX(M==="dark")}catch(M){}try{let M=localStorage.getItem("feedback-toolbar-position");if(M){let R=JSON.parse(M);if(typeof R.x==="number"&&typeof R.y==="number")F4(R)}}catch(M){}},[M0]),C.useEffect(()=>{if(A0)localStorage.setItem("feedback-toolbar-settings",JSON.stringify(y0))},[y0,A0]),C.useEffect(()=>{if(A0)localStorage.setItem("feedback-toolbar-theme",w6?"dark":"light")},[w6,A0]);let qq=C.useRef(!1);C.useEffect(()=>{let Q=qq.current;if(qq.current=l7,Q&&!l7&&xG&&A0)localStorage.setItem("feedback-toolbar-position",JSON.stringify(xG))},[l7,xG,A0]),C.useEffect(()=>{if(!U||!A0||tX.current)return;tX.current=!0,c7("connecting"),(async()=>{try{let M=g1(M0),R=V||M,w=!1;if(R)try{let I=await oq(U,R);A4(I.id),c7("connected"),h4(M0,I.id),w=!0;let E=nJ(M0),l=new Set(I.annotations.map((J0)=>J0.id)),r=E.filter((J0)=>{if(l.has(J0.id))return!1;return!0});if(r.length>0){let H0=`${typeof window<"u"?window.location.origin:""}${M0}`,N0=(await Promise.allSettled(r.map((U0)=>kz(U,I.id,{...U0,sessionId:I.id,url:H0})))).map((U0,Z0)=>{if(U0.status==="fulfilled")return U0.value;return console.warn("[Agentation] Failed to sync annotation:",U0.reason),r[Z0]}),u0=[...I.annotations,...N0];O(u0.filter(a7)),sJ(M0,u0.filter(a7),I.id)}else O(I.annotations.filter(a7)),sJ(M0,I.annotations.filter(a7),I.id)}catch(I){console.warn("[Agentation] Could not join session, creating new:",I),v1(M0)}if(!w){let I=typeof window<"u"?window.location.href:"/",E=await y4(U,I);A4(E.id),c7("connected"),h4(M0,E.id),L?.(E.id);let l=S1(),r=typeof window<"u"?window.location.origin:"",J0=[];for(let[H0,j0]of l){let N0=j0.filter((Z0)=>!Z0._syncedTo);if(N0.length===0)continue;let u0=`${r}${H0}`,U0=H0===M0;J0.push((async()=>{try{let Z0=U0?E:await y4(U,u0),tG=(await Promise.allSettled(N0.map((WG)=>kz(U,Z0.id,{...WG,sessionId:Z0.id,url:u0})))).map((WG,mG)=>{if(WG.status==="fulfilled")return WG.value;return console.warn("[Agentation] Failed to sync annotation:",WG.reason),N0[mG]}).filter(a7);if(sJ(H0,tG,Z0.id),U0){let WG=new Set(N0.map((mG)=>mG.id));O((mG)=>{let w0=mG.filter((S0)=>!WG.has(S0.id));return[...tG,...w0]})}}catch(Z0){console.warn(`[Agentation] Failed to sync annotations for ${H0}:`,Z0)}})())}await Promise.allSettled(J0)}}catch(M){c7("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",M)}})()},[U,V,A0,L,M0]),C.useEffect(()=>{if(!U||!A0)return;let Q=async()=>{try{if((await fetch(`${U}/health`)).ok)c7("connected");else c7("disconnected")}catch{c7("disconnected")}};Q();let M=k_(Q,1e4);return()=>clearInterval(M)},[U,A0]),C.useEffect(()=>{if(!U||!A0||!nG)return;let Q=new EventSource(`${U}/sessions/${nG}/events`),M=["resolved","dismissed"],R=(w)=>{try{let I=JSON.parse(w.data);if(M.includes(I.payload?.status)){let E=I.payload.id,l=I.payload.kind;if(l==="placement"){for(let[r,J0]of bJ.current)if(J0===E){bJ.current.delete(r),qG((H0)=>H0.filter((j0)=>j0.id!==r));break}}else if(l==="rearrange"){for(let[r,J0]of EJ.current)if(J0===E){EJ.current.delete(r),pZ((H0)=>{if(!H0)return null;let j0=H0.sections.filter((N0)=>N0.id!==r);if(j0.length===0)return null;return{...H0,sections:j0}});break}}else W9((r)=>new Set(r).add(E)),L0(()=>{O((r)=>r.filter((J0)=>J0.id!==E)),W9((r)=>{let J0=new Set(r);return J0.delete(E),J0})},150)}}catch{}};return Q.addEventListener("annotation.updated",R),()=>{Q.removeEventListener("annotation.updated",R),Q.close()}},[U,A0,nG]),C.useEffect(()=>{if(!U||!A0)return;let Q=Bq.current==="disconnected",M=j6==="connected";if(Bq.current=j6,Q&&M)(async()=>{try{let w=nJ(M0);if(w.length===0)return;let E=`${typeof window<"u"?window.location.origin:""}${M0}`,l=nG,r=[];if(l)try{r=(await oq(U,l)).annotations}catch{l=null}if(!l)l=(await y4(U,E)).id,A4(l),h4(M0,l);let J0=new Set(r.map((j0)=>j0.id)),H0=w.filter((j0)=>!J0.has(j0.id));if(H0.length>0){let N0=(await Promise.allSettled(H0.map((Z0)=>kz(U,l,{...Z0,sessionId:l,url:E})))).map((Z0,uG)=>{if(Z0.status==="fulfilled")return Z0.value;return console.warn("[Agentation] Failed to sync annotation on reconnect:",Z0.reason),H0[uG]}),U0=[...r,...N0].filter(a7);O(U0),sJ(M0,U0,l)}}catch(w){console.warn("[Agentation] Failed to sync on reconnect:",w)}})()},[j6,U,A0,nG,M0]);let C5=C.useCallback(()=>{if(k)return;a(!0),t(!1),T(!1),L0(()=>{m1(!0),Y0(!0),a(!1)},400)},[k]);C.useEffect(()=>{if(!z)return;if(!A0||!G||G.length===0)return;if(_.length>0)return;let Q=[];return Q.push(L0(()=>{T(!0)},Z-200)),G.forEach((M,R)=>{let w=Z+R*300;Q.push(L0(()=>{let I=document.querySelector(M.selector);if(!I)return;let E=I.getBoundingClientRect(),{name:l,path:r}=hz(I),J0={id:`demo-${Date.now()}-${R}`,x:(E.left+E.width/2)/window.innerWidth*100,y:E.top+E.height/2+window.scrollY,comment:M.comment,element:l,elementPath:r,timestamp:Date.now(),selectedText:M.selectedText,boundingBox:{x:E.left,y:E.top+window.scrollY,width:E.width,height:E.height},nearbyText:pJ(I),cssClasses:iJ(I)};O((H0)=>[...H0,J0])},w))}),()=>{Q.forEach(clearTimeout)}},[z,A0,G,Z]),C.useEffect(()=>{let Q=()=>{if(HG(window.scrollY),v0(!0),mJ.current)clearTimeout(mJ.current);mJ.current=L0(()=>{v0(!1)},150)};return window.addEventListener("scroll",Q,{passive:!0}),()=>{if(window.removeEventListener("scroll",Q),mJ.current)clearTimeout(mJ.current)}},[]),C.useEffect(()=>{if(A0&&_.length>0)if(nG)sJ(M0,_,nG);else RW(M0,_);else if(A0&&_.length===0)localStorage.removeItem(E9(M0))},[_,M0,A0,nG]),C.useEffect(()=>{if(A0&&!n0.current){n0.current=!0;let Q=x1(M0);if(Q.length>0)qG(Q)}},[A0,M0]),C.useEffect(()=>{if(A0&&n0.current&&!R0)if(W0.length>0)P1(M0,W0);else k1(M0)},[W0,M0,A0,R0]),C.useEffect(()=>{if(A0&&!j4.current){j4.current=!0;let Q=b1(M0);if(Q){let M={...Q,sections:Q.sections.map((R)=>({...R,currentRect:R.currentRect??{...R.originalRect}}))};pZ(M)}}},[A0,M0]),C.useEffect(()=>{if(A0&&j4.current&&!R0)if(I0)E1(M0,I0);else h1(M0)},[I0,M0,A0,R0]);let R4=C.useRef(!1);C.useEffect(()=>{if(A0&&!R4.current){R4.current=!0;let Q=y1(M0);if(Q){if(m7.current={rearrange:Q.rearrange,placements:Q.placements||[]},Q.purpose)y6(Q.purpose)}}},[A0,M0]),C.useEffect(()=>{if(!A0||!R4.current)return;let Q=m7.current;if(R0)if((I0?.sections?.length??0)>0||W0.length>0||vG)rq(M0,{rearrange:I0,placements:W0,purpose:vG});else T9(M0);else if((Q.rearrange?.sections?.length??0)>0||Q.placements.length>0||vG)rq(M0,{rearrange:Q.rearrange,placements:Q.placements,purpose:vG});else T9(M0)},[I0,W0,vG,R0,M0,A0]),C.useEffect(()=>{if(q0&&!I0)pZ({sections:[],originalOrder:[],detectedAt:Date.now()})},[q0,I0]),C.useEffect(()=>{if(!U||!nG)return;let Q=bJ.current,M=new Set(W0.map((R)=>R.id));for(let R of W0){if(Q.has(R.id))continue;Q.set(R.id,"");let w=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:M0;kz(U,nG,{id:R.id,x:R.x/window.innerWidth*100,y:R.y,comment:`Place ${R.type} at (${Math.round(R.x)}, ${Math.round(R.y)}), ${R.width}×${R.height}px${R.text?` — "${R.text}"`:""}`,element:`[design:${R.type}]`,elementPath:"[placement]",timestamp:R.timestamp,url:w,intent:"change",severity:"important",kind:"placement",placement:{componentType:R.type,width:R.width,height:R.height,scrollY:R.scrollY,text:R.text}}).then((I)=>{if(Q.has(R.id))Q.set(R.id,I.id)}).catch((I)=>{console.warn("[Agentation] Failed to sync placement annotation:",I),Q.delete(R.id)})}for(let[R,w]of Q)if(!M.has(R)){if(Q.delete(R),w)U7(U,w).catch(()=>{})}},[W0,U,nG,M0]),C.useEffect(()=>{if(!U||!nG)return;if(hJ.current)clearTimeout(hJ.current);return hJ.current=L0(()=>{let Q=EJ.current;if(!I0||I0.sections.length===0){for(let[,w]of Q)if(w)U7(U,w).catch(()=>{});Q.clear();return}let M=new Set(I0.sections.map((w)=>w.id)),R=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:M0;for(let w of I0.sections){let{originalRect:I,currentRect:E}=w;if(!(Math.abs(I.x-E.x)>1||Math.abs(I.y-E.y)>1||Math.abs(I.width-E.width)>1||Math.abs(I.height-E.height)>1)){let J0=Q.get(w.id);if(J0)Q.delete(w.id),U7(U,J0).catch(()=>{});continue}let r=Q.get(w.id);if(r)aq(U,r,{comment:`Move ${w.label} section (${w.tagName}) — from (${Math.round(I.x)},${Math.round(I.y)}) ${Math.round(I.width)}×${Math.round(I.height)} to (${Math.round(E.x)},${Math.round(E.y)}) ${Math.round(E.width)}×${Math.round(E.height)}`}).catch((J0)=>{console.warn("[Agentation] Failed to update rearrange annotation:",J0)});else Q.set(w.id,""),kz(U,nG,{id:w.id,x:E.x/window.innerWidth*100,y:E.y,comment:`Move ${w.label} section (${w.tagName}) — from (${Math.round(I.x)},${Math.round(I.y)}) ${Math.round(I.width)}×${Math.round(I.height)} to (${Math.round(E.x)},${Math.round(E.y)}) ${Math.round(E.width)}×${Math.round(E.height)}`,element:w.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:R,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:w.selector,label:w.label,tagName:w.tagName,originalRect:I,currentRect:E}}).then((J0)=>{if(Q.has(w.id))Q.set(w.id,J0.id)}).catch((J0)=>{console.warn("[Agentation] Failed to sync rearrange annotation:",J0),Q.delete(w.id)})}for(let[w,I]of Q)if(!M.has(w)){if(Q.delete(w),I)U7(U,I).catch(()=>{})}},300),()=>{if(hJ.current)clearTimeout(hJ.current)}},[I0,U,nG,M0]);let Cz=C.useRef(new Map);C.useLayoutEffect(()=>{let Q=I0?.sections??[],M=new Set;if((q0||h0)&&x)for(let R of Q){M.add(R.id);try{let w=document.querySelector(R.selector);if(!w)continue;if(!Cz.current.has(R.id)){let I={transform:w.style.transform,transformOrigin:w.style.transformOrigin,opacity:w.style.opacity,position:w.style.position,zIndex:w.style.zIndex,display:w.style.display},E=[],l=w.parentElement;while(l&&l!==document.body){let J0=getComputedStyle(l);if(J0.overflow!=="visible"||J0.overflowX!=="visible"||J0.overflowY!=="visible")E.push({el:l,overflow:l.style.overflow}),l.style.overflow="visible";l=l.parentElement}if(getComputedStyle(w).display==="inline")w.style.display="inline-block";Cz.current.set(R.id,{el:w,origStyles:I,ancestors:E}),w.style.transformOrigin="top left",w.style.zIndex="9999"}}catch{}}for(let[R,w]of Cz.current)if(!M.has(R)){let{el:I,origStyles:E,ancestors:l}=w;I.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",I.style.transform=E.transform,I.style.transformOrigin=E.transformOrigin,I.style.opacity=E.opacity,I.style.position=E.position,I.style.zIndex=E.zIndex,Cz.current.delete(R),L0(()=>{I.style.transition="",I.style.display=E.display;for(let r of l)r.el.style.overflow=r.overflow},450)}},[I0,q0,h0,x]),C.useEffect(()=>{return()=>{for(let[,Q]of Cz.current){let{el:M,origStyles:R,ancestors:w}=Q;M.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",M.style.transform=R.transform,M.style.transformOrigin=R.transformOrigin,M.style.opacity=R.opacity,M.style.position=R.position,M.style.zIndex=R.zIndex,L0(()=>{M.style.transition="",M.style.display=R.display;for(let I of w)I.el.style.overflow=I.overflow},450)}Cz.current.clear()}},[]);let L9=C.useCallback(()=>{C0(!0),XG(!1),T0(null),clearTimeout(q9.current),q9.current=L0(()=>{C0(!1)},300)},[]),Wq=C.useCallback(()=>{if(q0)C0(!0),XG(!1),T0(null),clearTimeout(q9.current),q9.current=L0(()=>{C0(!1)},300);T(!1)},[q0]),jq=C.useCallback(()=>{if(S)return;E_(),y(!0)},[S]),_9=C.useCallback(()=>{if(!S)return;bq(),y(!1)},[S]),w4=C.useCallback(()=>{if(S)_9();else jq()},[S,jq,_9]),Qq=C.useCallback(()=>{if(pG.length===0)return;let Q=pG[0],M=Q.element,R=pG.length>1,w=pG.map((I)=>I.element.getBoundingClientRect());if(!R){let I=w[0],E=c4(M);F0({x:I.left/window.innerWidth*100,y:E?I.top:I.top+window.scrollY,clientY:I.top,element:Q.name,elementPath:Q.path,boundingBox:{x:I.left,y:E?I.top:I.top+window.scrollY,width:I.width,height:I.height},isFixed:E,fullPath:N9(M),accessibility:f9(M),computedStyles:I9(M),computedStylesObj:K9(M),nearbyElements:D9(M),cssClasses:iJ(M),nearbyText:pJ(M),reactComponents:Q.reactComponents,sourceFile:P9(M)})}else{let I={left:Math.min(...w.map((Z0)=>Z0.left)),top:Math.min(...w.map((Z0)=>Z0.top)),right:Math.max(...w.map((Z0)=>Z0.right)),bottom:Math.max(...w.map((Z0)=>Z0.bottom))},E=pG.slice(0,5).map((Z0)=>Z0.name).join(", "),l=pG.length>5?` +${pG.length-5} more`:"",r=w.map((Z0)=>({x:Z0.left,y:Z0.top+window.scrollY,width:Z0.width,height:Z0.height})),H0=pG[pG.length-1].element,j0=w[w.length-1],N0=j0.left+j0.width/2,u0=j0.top+j0.height/2,U0=c4(H0);F0({x:N0/window.innerWidth*100,y:U0?u0:u0+window.scrollY,clientY:u0,element:`${pG.length} elements: ${E}${l}`,elementPath:"multi-select",boundingBox:{x:I.left,y:I.top+window.scrollY,width:I.right-I.left,height:I.bottom-I.top},isMultiSelect:!0,isFixed:U0,elementBoundingBoxes:r,multiSelectElements:pG.map((Z0)=>Z0.element),targetElement:H0,fullPath:N9(M),accessibility:f9(M),computedStyles:I9(M),computedStylesObj:K9(M),nearbyElements:D9(M),cssClasses:iJ(M),nearbyText:pJ(M),sourceFile:P9(M)})}Iz([]),c0(null)},[pG]);C.useEffect(()=>{if(!x){if(F0(null),c(null),O0(null),V0([]),c0(null),t(!1),Iz([]),R6.current={cmd:!1,shift:!1},S)_9()}},[x,S,_9]),C.useEffect(()=>{return()=>{bq()}},[]),C.useEffect(()=>{if(!x)return;let Q=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),M=":not([data-agentation-root]):not([data-agentation-root] *)",R=document.createElement("style");return R.id="feedback-cursor-styles",R.textContent=`
      body ${M} {
        cursor: crosshair !important;
      }

      body :is(${Q})${M} {
        cursor: text !important;
      }
    `,document.head.appendChild(R),()=>{let w=document.getElementById("feedback-cursor-styles");if(w)w.remove()}},[x]),C.useEffect(()=>{if(pX!==null&&x)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[pX,x]),C.useEffect(()=>{if(!x||i||W6||q0)return;let Q=(M)=>{let R=M.composedPath()[0]||M.target;if(MZ(R,"[data-feedback-toolbar]")){c0(null);return}let w=o7(M.clientX,M.clientY);if(!w||MZ(w,"[data-feedback-toolbar]")){c0(null);return}let{name:I,elementName:E,path:l,reactComponents:r}=m4(w,d7),J0=w.getBoundingClientRect();c0({element:I,elementName:E,elementPath:l,rect:J0,reactComponents:r}),e0({x:M.clientX,y:M.clientY})};return document.addEventListener("mousemove",Q),()=>document.removeEventListener("mousemove",Q)},[x,i,W6,q0,d7,iZ]);let A9=C.useCallback((Q)=>{if(c(Q),q7(null),xZ(null),wZ([]),Q.elementBoundingBoxes?.length){let M=[];for(let R of Q.elementBoundingBoxes){let w=R.x+R.width/2,I=R.y+R.height/2-window.scrollY,E=o7(w,I);if(E)M.push(E)}V0(M),O0(null)}else if(Q.boundingBox){let M=Q.boundingBox,R=M.x+M.width/2,w=Q.isFixed?M.y+M.height/2:M.y+M.height/2-window.scrollY,I=o7(R,w);if(I){let E=I.getBoundingClientRect(),l=E.width/M.width,r=E.height/M.height;if(l<0.5||r<0.5)O0(null);else O0(I)}else O0(null);V0([])}else O0(null),V0([])},[]);C.useEffect(()=>{if(!x||W6||q0)return;let Q=(M)=>{if(Q9.current){Q9.current=!1;return}let R=M.composedPath()[0]||M.target;if(MZ(R,"[data-feedback-toolbar]"))return;if(MZ(R,"[data-annotation-popup]"))return;if(MZ(R,"[data-annotation-marker]"))return;if(M.metaKey&&M.shiftKey&&!i&&!E0){M.preventDefault(),M.stopPropagation();let _G=o7(M.clientX,M.clientY);if(!_G)return;let tG=_G.getBoundingClientRect(),{name:WG,path:mG,reactComponents:w0}=m4(_G,d7),S0=pG.findIndex((PG)=>PG.element===_G);if(S0>=0)Iz((PG)=>PG.filter((hG,Q6)=>Q6!==S0));else Iz((PG)=>[...PG,{element:_G,rect:tG,name:WG,path:mG,reactComponents:w0??void 0}]);return}let w=MZ(R,"button, a, input, select, textarea, [role='button'], [onclick]");if(y0.blockInteractions&&w)M.preventDefault(),M.stopPropagation();if(i){if(w&&!y0.blockInteractions)return;M.preventDefault(),Hq.current?.shake();return}if(E0){if(w&&!y0.blockInteractions)return;M.preventDefault(),Xq.current?.shake();return}M.preventDefault();let I=o7(M.clientX,M.clientY);if(!I)return;let{name:E,path:l,reactComponents:r}=m4(I,d7),J0=I.getBoundingClientRect(),H0=M.clientX/window.innerWidth*100,j0=c4(I),N0=j0?M.clientY:M.clientY+window.scrollY,u0=window.getSelection(),U0;if(u0&&u0.toString().trim().length>0)U0=u0.toString().trim().slice(0,500);let Z0=K9(I),uG=I9(I);F0({x:H0,y:N0,clientY:M.clientY,element:E,elementPath:l,selectedText:U0,boundingBox:{x:J0.left,y:j0?J0.top:J0.top+window.scrollY,width:J0.width,height:J0.height},nearbyText:pJ(I),cssClasses:iJ(I),isFixed:j0,fullPath:N9(I),accessibility:f9(I),computedStyles:uG,computedStylesObj:Z0,nearbyElements:D9(I),reactComponents:r??void 0,sourceFile:P9(I),targetElement:I}),c0(null)};return document.addEventListener("click",Q,!0),()=>document.removeEventListener("click",Q,!0)},[x,W6,q0,i,E0,y0.blockInteractions,d7,pG]),C.useEffect(()=>{if(!x)return;let Q=(w)=>{if(w.key==="Meta")R6.current.cmd=!0;if(w.key==="Shift")R6.current.shift=!0},M=(w)=>{let I=R6.current.cmd&&R6.current.shift;if(w.key==="Meta")R6.current.cmd=!1;if(w.key==="Shift")R6.current.shift=!1;let E=R6.current.cmd&&R6.current.shift;if(I&&!E&&pG.length>0)Qq()},R=()=>{R6.current={cmd:!1,shift:!1},Iz([])};return document.addEventListener("keydown",Q),document.addEventListener("keyup",M),window.addEventListener("blur",R),()=>{document.removeEventListener("keydown",Q),document.removeEventListener("keyup",M),window.removeEventListener("blur",R)}},[x,pG,Qq]),C.useEffect(()=>{if(!x||i||W6||q0)return;let Q=(M)=>{let R=M.composedPath()[0]||M.target;if(MZ(R,"[data-feedback-toolbar]"))return;if(MZ(R,"[data-annotation-marker]"))return;if(MZ(R,"[data-annotation-popup]"))return;if(new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(R.tagName)||R.isContentEditable)return;M.preventDefault(),$z.current={x:M.clientX,y:M.clientY}};return document.addEventListener("mousedown",Q),()=>document.removeEventListener("mousedown",Q)},[x,i,W6,q0]),C.useEffect(()=>{if(!x||i)return;let Q=(M)=>{if(!$z.current)return;let R=M.clientX-$z.current.x,w=M.clientY-$z.current.y,I=R*R+w*w,E=O4*O4;if(!g6&&I>=E)D6.current=$z.current,Jq(!0),M.preventDefault();if((g6||I>=E)&&D6.current){if(vJ.current){let w0=Math.min(D6.current.x,M.clientX),S0=Math.min(D6.current.y,M.clientY),PG=Math.abs(M.clientX-D6.current.x),hG=Math.abs(M.clientY-D6.current.y);vJ.current.style.transform=`translate(${w0}px, ${S0}px)`,vJ.current.style.width=`${PG}px`,vJ.current.style.height=`${hG}px`}let l=Date.now();if(l-Yq.current<$5)return;Yq.current=l;let r=D6.current.x,J0=D6.current.y,H0=Math.min(r,M.clientX),j0=Math.min(J0,M.clientY),N0=Math.max(r,M.clientX),u0=Math.max(J0,M.clientY),U0=(H0+N0)/2,Z0=(j0+u0)/2,uG=new Set,_G=[[H0,j0],[N0,j0],[H0,u0],[N0,u0],[U0,Z0],[U0,j0],[U0,u0],[H0,Z0],[N0,Z0]];for(let[w0,S0]of _G){let PG=document.elementsFromPoint(w0,S0);for(let hG of PG)if(hG instanceof HTMLElement)uG.add(hG)}let tG=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(let w0 of tG)if(w0 instanceof HTMLElement){let S0=w0.getBoundingClientRect(),PG=S0.left+S0.width/2,hG=S0.top+S0.height/2,Q6=PG>=H0&&PG<=N0&&hG>=j0&&hG<=u0,sZ=Math.min(S0.right,N0)-Math.max(S0.left,H0),BZ=Math.min(S0.bottom,u0)-Math.max(S0.top,j0),cJ=sZ>0&&BZ>0?sZ*BZ:0,i7=S0.width*S0.height,W7=i7>0?cJ/i7:0;if(Q6||W7>0.5)uG.add(w0)}let WG=[],mG=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(let w0 of uG){if(MZ(w0,"[data-feedback-toolbar]")||MZ(w0,"[data-annotation-marker]"))continue;let S0=w0.getBoundingClientRect();if(S0.width>window.innerWidth*0.8&&S0.height>window.innerHeight*0.5)continue;if(S0.width<10||S0.height<10)continue;if(S0.left<N0&&S0.right>H0&&S0.top<u0&&S0.bottom>j0){let PG=w0.tagName,hG=mG.has(PG);if(!hG&&(PG==="DIV"||PG==="SPAN")){let Q6=w0.textContent&&w0.textContent.trim().length>0,sZ=w0.onclick!==null||w0.getAttribute("role")==="button"||w0.getAttribute("role")==="link"||w0.classList.contains("clickable")||w0.hasAttribute("data-clickable");if((Q6||sZ)&&!w0.querySelector("p, h1, h2, h3, h4, h5, h6, button, a"))hG=!0}if(hG){let Q6=!1;for(let sZ of WG)if(sZ.left<=S0.left&&sZ.right>=S0.right&&sZ.top<=S0.top&&sZ.bottom>=S0.bottom){Q6=!0;break}if(!Q6)WG.push(S0)}}}if(uJ.current){let w0=uJ.current;while(w0.children.length>WG.length)w0.removeChild(w0.lastChild);WG.forEach((S0,PG)=>{let hG=w0.children[PG];if(!hG)hG=document.createElement("div"),hG.className=u.selectedElementHighlight,w0.appendChild(hG);hG.style.transform=`translate(${S0.left}px, ${S0.top}px)`,hG.style.width=`${S0.width}px`,hG.style.height=`${S0.height}px`})}}};return document.addEventListener("mousemove",Q,{passive:!0}),()=>document.removeEventListener("mousemove",Q)},[x,i,g6,O4]),C.useEffect(()=>{if(!x)return;let Q=(M)=>{let R=g6,w=D6.current;if(g6&&w){Q9.current=!0;let I=Math.min(w.x,M.clientX),E=Math.min(w.y,M.clientY),l=Math.max(w.x,M.clientX),r=Math.max(w.y,M.clientY),J0=[],H0="button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th";document.querySelectorAll(H0).forEach((U0)=>{if(!(U0 instanceof HTMLElement))return;if(MZ(U0,"[data-feedback-toolbar]")||MZ(U0,"[data-annotation-marker]"))return;let Z0=U0.getBoundingClientRect();if(Z0.width>window.innerWidth*0.8&&Z0.height>window.innerHeight*0.5)return;if(Z0.width<10||Z0.height<10)return;if(Z0.left<l&&Z0.right>I&&Z0.top<r&&Z0.bottom>E)J0.push({element:U0,rect:Z0})});let j0=J0.filter(({element:U0})=>!J0.some(({element:Z0})=>Z0!==U0&&U0.contains(Z0))),N0=M.clientX/window.innerWidth*100,u0=M.clientY+window.scrollY;if(j0.length>0){let U0=j0.reduce((mG,{rect:w0})=>({left:Math.min(mG.left,w0.left),top:Math.min(mG.top,w0.top),right:Math.max(mG.right,w0.right),bottom:Math.max(mG.bottom,w0.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),Z0=j0.slice(0,5).map(({element:mG})=>hz(mG).name).join(", "),uG=j0.length>5?` +${j0.length-5} more`:"",_G=j0[0].element,tG=K9(_G),WG=I9(_G);F0({x:N0,y:u0,clientY:M.clientY,element:`${j0.length} elements: ${Z0}${uG}`,elementPath:"multi-select",boundingBox:{x:U0.left,y:U0.top+window.scrollY,width:U0.right-U0.left,height:U0.bottom-U0.top},isMultiSelect:!0,fullPath:N9(_G),accessibility:f9(_G),computedStyles:WG,computedStylesObj:tG,nearbyElements:D9(_G),cssClasses:iJ(_G),nearbyText:pJ(_G),sourceFile:P9(_G)})}else{let U0=Math.abs(l-I),Z0=Math.abs(r-E);if(U0>20&&Z0>20)F0({x:N0,y:u0,clientY:M.clientY,element:"Area selection",elementPath:`region at (${Math.round(I)}, ${Math.round(E)})`,boundingBox:{x:I,y:E+window.scrollY,width:U0,height:Z0},isMultiSelect:!0})}c0(null)}else if(R)Q9.current=!0;if($z.current=null,D6.current=null,Jq(!1),uJ.current)uJ.current.innerHTML=""};return document.addEventListener("mouseup",Q),()=>document.removeEventListener("mouseup",Q)},[x,g6]);let K6=C.useCallback(async(Q,M,R)=>{let w=y0.webhookUrl||D;if(!w||!y0.webhooksEnabled&&!R)return!1;try{return(await fetch(w,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:Q,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...M})})).ok}catch(I){return console.warn("[Agentation] Webhook failed:",I),!1}},[D,y0.webhookUrl,y0.webhooksEnabled]),T5=C.useCallback((Q)=>{if(!i)return;let M={id:Date.now().toString(),x:i.x,y:i.y,comment:Q,element:i.element,elementPath:i.elementPath,timestamp:Date.now(),selectedText:i.selectedText,boundingBox:i.boundingBox,nearbyText:i.nearbyText,cssClasses:i.cssClasses,isMultiSelect:i.isMultiSelect,isFixed:i.isFixed,fullPath:i.fullPath,accessibility:i.accessibility,computedStyles:i.computedStyles,nearbyElements:i.nearbyElements,reactComponents:i.reactComponents,sourceFile:i.sourceFile,elementBoundingBoxes:i.elementBoundingBoxes,...U&&nG?{sessionId:nG,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};if(O((R)=>[...R,M]),U9.current=M.id,L0(()=>{U9.current=null},300),L0(()=>{yJ((R)=>new Set(R).add(M.id))},250),J?.(M),K6("annotation.add",{annotation:M}),j9(!0),L0(()=>{F0(null),j9(!1)},150),window.getSelection()?.removeAllRanges(),U&&nG)kz(U,nG,M).then((R)=>{if(R.id!==M.id)O((w)=>w.map((I)=>I.id===M.id?{...I,id:R.id}:I)),yJ((w)=>{let I=new Set(w);return I.delete(M.id),I.add(R.id),I})}).catch((R)=>{console.warn("[Agentation] Failed to sync annotation:",R)})},[i,J,K6,U,nG]),D4=C.useCallback(()=>{j9(!0),L0(()=>{F0(null),j9(!1)},150)},[]),K4=C.useCallback((Q)=>{let M=_.findIndex((w)=>w.id===Q),R=_[M];if(E0?.id===Q)Nz(!0),L0(()=>{c(null),O0(null),V0([]),Nz(!1)},150);if(O6(Q),W9((w)=>new Set(w).add(Q)),R)Y?.(R),K6("annotation.delete",{annotation:R});if(U)U7(U,Q).catch((w)=>{console.warn("[Agentation] Failed to delete annotation from server:",w)});L0(()=>{if(O((w)=>w.filter((I)=>I.id!==Q)),W9((w)=>{let I=new Set(w);return I.delete(Q),I}),O6(null),M<_.length-1)X6(M),L0(()=>X6(null),200)},150)},[_,E0,Y,K6,U]),F9=C.useCallback((Q)=>{if(!Q){q7(null),xZ(null),wZ([]);return}if(q7(Q.id),Q.elementBoundingBoxes?.length){let M=[];for(let R of Q.elementBoundingBoxes){let w=R.x+R.width/2,I=R.y+R.height/2-window.scrollY,l=document.elementsFromPoint(w,I).find((r)=>!r.closest("[data-annotation-marker]")&&!r.closest("[data-agentation-root]"));if(l)M.push(l)}wZ(M),xZ(null)}else if(Q.boundingBox){let M=Q.boundingBox,R=M.x+M.width/2,w=Q.isFixed?M.y+M.height/2:M.y+M.height/2-window.scrollY,I=o7(R,w);if(I){let E=I.getBoundingClientRect(),l=E.width/M.width,r=E.height/M.height;if(l<0.5||r<0.5)xZ(null);else xZ(I)}else xZ(null);wZ([])}else xZ(null),wZ([])},[]),S5=C.useCallback((Q)=>{if(!E0)return;let M={...E0,comment:Q};if(O((R)=>R.map((w)=>w.id===E0.id?M:w)),B?.(M),K6("annotation.update",{annotation:M}),U)aq(U,E0.id,{comment:Q}).catch((R)=>{console.warn("[Agentation] Failed to update annotation on server:",R)});Nz(!0),L0(()=>{c(null),O0(null),V0([]),Nz(!1)},150)},[E0,B,K6,U]),x5=C.useCallback(()=>{Nz(!0),L0(()=>{c(null),O0(null),V0([]),Nz(!1)},150)},[]),p7=C.useCallback(()=>{let Q=_.length,M=W0.length>0||!!I0;if(Q===0&&iZ.length===0&&!M)return;if(H?.(_),K6("annotations.clear",{annotations:_}),U){Promise.all(_.map((I)=>U7(U,I.id).catch((E)=>{console.warn("[Agentation] Failed to delete annotation from server:",E)})));for(let[,I]of bJ.current)if(I)U7(U,I).catch(()=>{});bJ.current.clear();for(let[,I]of EJ.current)if(I)U7(U,I).catch(()=>{});EJ.current.clear()}B6(!0),cZ(!0),V5([]);let R=_4.current;if(R){let I=R.getContext("2d");if(I)I.clearRect(0,0,R.width,R.height)}if(W0.length>0||I0)U4((I)=>I+1),cX((I)=>I+1),L0(()=>{qG([]),pZ(null)},200);if(R0)wG(!1);if(vG)y6("");m7.current={rearrange:null,placements:[]},T9(M0);let w=Q*30+200;L0(()=>{O([]),yJ(new Set),localStorage.removeItem(E9(M0)),B6(!1)},w),L0(()=>cZ(!1),1500)},[M0,_,iZ,W0,I0,R0,vG,H,K6,U]),I4=C.useCallback(async()=>{let Q=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:M0,M=q0&&R0,R;if(M){if(W0.length===0&&!I0&&!vG)return;R=""}else{if(R=eq(_,Q,y0.outputDetail),!R&&iZ.length===0&&W0.length===0&&!I0)return;if(!R)R=`## Page Feedback: ${Q}
`}if(!M&&iZ.length>0){let w=new Set;for(let r of _)if(r.drawingIndex!=null)w.add(r.drawingIndex);let I=_4.current;if(I)I.style.visibility="hidden";let E=[],l=window.scrollY;for(let r=0;r<iZ.length;r++){if(w.has(r))continue;let J0=iZ[r];if(J0.points.length<2)continue;let H0=J0.fixed?J0.points:J0.points.map((iG)=>({x:iG.x,y:iG.y-l})),j0=1/0,N0=1/0,u0=-1/0,U0=-1/0;for(let iG of H0)j0=Math.min(j0,iG.x),N0=Math.min(N0,iG.y),u0=Math.max(u0,iG.x),U0=Math.max(U0,iG.y);let Z0=u0-j0,uG=U0-N0,_G=Math.hypot(Z0,uG),tG=H0[0],WG=H0[H0.length-1],mG=Math.hypot(WG.x-tG.x,WG.y-tG.y),w0,S0=mG<_G*0.35,PG=Z0/Math.max(uG,1);if(S0&&_G>20){let iG=Math.max(Z0,uG)*0.15,j7=0;for(let s7 of H0){let b5=s7.x-j0<iG,E5=u0-s7.x<iG,h5=s7.y-N0<iG,y5=U0-s7.y<iG;if((b5||E5)&&(h5||y5))j7++}w0=j7>H0.length*0.15?"box":"circle"}else if(PG>3&&uG<40)w0="underline";else if(mG>_G*0.5)w0="arrow";else w0="drawing";let hG=Math.min(10,H0.length),Q6=Math.max(1,Math.floor(H0.length/hG)),sZ=new Set,BZ=[],cJ=[tG];for(let iG=Q6;iG<H0.length-1;iG+=Q6)cJ.push(H0[iG]);cJ.push(WG);for(let iG of cJ){let j7=o7(iG.x,iG.y);if(!j7||sZ.has(j7))continue;if(MZ(j7,"[data-feedback-toolbar]"))continue;sZ.add(j7);let{name:s7}=hz(j7);if(!BZ.includes(s7))BZ.push(s7)}let i7=`${Math.round(j0)},${Math.round(N0)} → ${Math.round(u0)},${Math.round(U0)}`,W7;if((w0==="circle"||w0==="box")&&BZ.length>0)W7=`${w0==="box"?"Boxed":"Circled"} **${BZ[0]}**${BZ.length>1?` (and ${BZ.slice(1).join(", ")})`:""} (region: ${i7})`;else if(w0==="underline"&&BZ.length>0)W7=`Underlined **${BZ[0]}** (${i7})`;else if(w0==="arrow"&&BZ.length>=2)W7=`Arrow from **${BZ[0]}** to **${BZ[BZ.length-1]}** (${Math.round(tG.x)},${Math.round(tG.y)} → ${Math.round(WG.x)},${Math.round(WG.y)})`;else if(BZ.length>0)W7=`${w0==="arrow"?"Arrow":"Drawing"} near **${BZ.join("**, **")}** (region: ${i7})`;else W7=`Drawing at ${i7}`;E.push(W7)}if(I)I.style.visibility="";if(E.length>0)R+=`
**Drawings:**
`,E.forEach((r,J0)=>{R+=`${J0+1}. ${r}
`})}if(W0.length>0||M&&vG)R+=`
`+iq(W0,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:R0,wireframePurpose:vG||void 0},y0.outputDetail);if(I0){let w=sq(I0,y0.outputDetail,{width:window.innerWidth,height:window.innerHeight});if(w)R+=`
`+w}if(A)try{await navigator.clipboard.writeText(R)}catch{}if(X?.(R),EG(!0),L0(()=>EG(!1),2000),y0.autoClearAfterCopy)L0(()=>p7(),500)},[_,iZ,W0,I0,R0,q0,h6,vG,M0,y0.outputDetail,d7,y0.autoClearAfterCopy,p7,A,X]),f4=C.useCallback(async()=>{let Q=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:M0,M=eq(_,Q,y0.outputDetail);if(!M&&W0.length===0&&!I0)return;if(!M)M=`## Page Feedback: ${Q}
`;if(W0.length>0)M+=`
`+iq(W0,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:R0,wireframePurpose:vG||void 0},y0.outputDetail);if(I0){let w=sq(I0,y0.outputDetail,{width:window.innerWidth,height:window.innerHeight});if(w)M+=`
`+w}if(q)q(M,_);_Z("sending"),await new Promise((w)=>L0(w,150));let R=await K6("submit",{output:M,annotations:_},!0);if(_Z(R?"sent":"failed"),L0(()=>_Z("idle"),2500),R&&y0.autoClearAfterCopy)L0(()=>p7(),500)},[q,K6,_,W0,I0,R0,h6,M0,y0.outputDetail,d7,y0.autoClearAfterCopy,p7]);C.useEffect(()=>{if(!fz)return;let Q=10,M=(w)=>{let I=w.clientX-fz.x,E=w.clientY-fz.y,l=Math.sqrt(I*I+E*E);if(!l7&&l>Q)eX(!0);if(l7||l>Q){let r=fz.toolbarX+I,J0=fz.toolbarY+E,H0=20,j0=337,N0=44,U0=j0-(x?j6==="connected"?297:257:44),Z0=H0-U0,uG=window.innerWidth-H0-j0;r=Math.max(Z0,Math.min(uG,r)),J0=Math.max(H0,Math.min(window.innerHeight-N0-H0,J0)),F4({x:r,y:J0})}},R=()=>{if(l7)M4.current=!0;eX(!1),Gq(null)};return document.addEventListener("mousemove",M),document.addEventListener("mouseup",R),()=>{document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",R)}},[fz,l7,x,j6]);let P5=C.useCallback((Q)=>{if(Q.target.closest("button")||Q.target.closest("[data-agentation-settings-panel]"))return;let M=Q.currentTarget.parentElement;if(!M)return;let R=M.getBoundingClientRect(),w=xG?.x??R.left,I=xG?.y??R.top;Gq({x:Q.clientX,y:Q.clientY,toolbarX:w,toolbarY:I})},[xG]);if(C.useEffect(()=>{if(!xG)return;let Q=()=>{let{x:I,y:E}=xG,J0=20-(337-(x?j6==="connected"?297:257:44)),H0=window.innerWidth-20-337;if(I=Math.max(J0,Math.min(H0,I)),E=Math.max(20,Math.min(window.innerHeight-44-20,E)),I!==xG.x||E!==xG.y)F4({x:I,y:E})};return Q(),window.addEventListener("resize",Q),()=>window.removeEventListener("resize",Q)},[xG,x,j6]),C.useEffect(()=>{let Q=(M)=>{let R=M.target,w=R.tagName==="INPUT"||R.tagName==="TEXTAREA"||R.isContentEditable;if(M.key==="Escape"){if(q0){if(s0)T0(null);else L9();return}if(W6){L4(!1);return}if(pG.length>0){Iz([]);return}if(i);else if(x)QZ(),T(!1)}if((M.metaKey||M.ctrlKey)&&M.shiftKey&&(M.key==="f"||M.key==="F")){if(M.preventDefault(),QZ(),x)Wq();else T(!0);return}if(w||M.metaKey||M.ctrlKey)return;if(M.key==="p"||M.key==="P")M.preventDefault(),QZ(),w4();if(M.key==="l"||M.key==="L"){if(M.preventDefault(),QZ(),W6)L4(!1);if(v)t(!1);if(i)D4();if(q0)L9();else XG(!0)}if(M.key==="h"||M.key==="H"){if(_.length>0)M.preventDefault(),QZ(),$((I)=>!I)}if(M.key==="c"||M.key==="C"){if(_.length>0||W0.length>0||I0)M.preventDefault(),QZ(),I4()}if(M.key==="x"||M.key==="X"){if(_.length>0||W0.length>0||I0){if(M.preventDefault(),QZ(),p7(),W0.length>0)qG([]);if(I0)pZ(null)}}if(M.key==="s"||M.key==="S"){let I=f6(y0.webhookUrl)||f6(D||"");if(_.length>0&&I&&RZ==="idle")M.preventDefault(),QZ(),f4()}};return document.addEventListener("keydown",Q),()=>document.removeEventListener("keydown",Q)},[x,W6,q0,s0,W0,I0,i,_.length,y0.webhookUrl,D,RZ,f4,w4,I4,p7,pG]),!A0)return null;if(p)return null;let dJ=_.length>0,Tz=_.filter((Q)=>!zq.has(Q.id)&&Q.kind!=="placement"&&Q.kind!=="rearrange"),k5=Tz.length>0,Uq=_.filter((Q)=>zq.has(Q.id)),Lq=(Q)=>{let E=Q.x/100*window.innerWidth,l=typeof Q.y==="string"?parseFloat(Q.y):Q.y,r={};if(window.innerHeight-l-22-10<80)r.top="auto",r.bottom="calc(100% + 10px)";let H0=E-100,j0=10;if(H0<j0){let N0=j0-H0;r.left=`calc(50% + ${N0}px)`}else if(H0+200>window.innerWidth-j0){let N0=H0+200-(window.innerWidth-j0);r.left=`calc(50% - ${N0}px)`}return r};return BW.createPortal(m.jsxs("div",{ref:G0,style:{display:"contents"},"data-agentation-theme":w6?"dark":"light","data-agentation-accent":y0.annotationColorId,"data-agentation-root":"",children:[m.jsx("div",{className:`${u.toolbar}${f?` ${f}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:xG?{left:xG.x,top:xG.y,right:"auto",bottom:"auto"}:void 0,children:m.jsxs("div",{className:`${u.toolbarContainer} ${x?u.expanded:u.collapsed} ${oX?u.entrance:""} ${k?u.hiding:""} ${!y0.webhooksEnabled&&(f6(y0.webhookUrl)||f6(D||""))?u.serverConnected:""}`,onClick:!x?(Q)=>{if(M4.current){M4.current=!1,Q.preventDefault();return}T(!0)}:void 0,onMouseDown:P5,role:!x?"button":void 0,tabIndex:!x?0:-1,title:!x?"Start feedback mode":void 0,children:[m.jsxs("div",{className:`${u.toggleContent} ${!x?u.visible:u.hidden}`,children:[m.jsx(M_,{size:24}),k5&&m.jsx("span",{className:`${u.badge} ${x?u.fadeOut:""} ${oX?u.entrance:""}`,children:Tz.length})]}),m.jsxs("div",{className:`${u.controlsContent} ${x?u.visible:u.hidden} ${xG&&xG.y<100?u.tooltipBelow:""} ${l0||v?u.tooltipsHidden:""} ${iX?u.tooltipsInSession:""}`,onMouseEnter:D5,onMouseLeave:K5,children:[m.jsxs("div",{className:`${u.buttonWrapper} ${xG&&xG.x<120?u.buttonWrapperAlignLeft:""}`,children:[m.jsx("button",{className:u.controlButton,onClick:(Q)=>{Q.stopPropagation(),QZ(),w4()},"data-active":S,children:m.jsx(D_,{size:24,isPaused:S})}),m.jsxs("span",{className:u.buttonTooltip,children:[S?"Resume animations":"Pause animations",m.jsx("span",{className:u.shortcut,children:"P"})]})]}),m.jsxs("div",{className:u.buttonWrapper,children:[m.jsx("button",{className:`${u.controlButton} ${!w6?u.light:""}`,onClick:(Q)=>{if(Q.stopPropagation(),QZ(),W6)L4(!1);if(v)t(!1);if(i)D4();if(q0)L9();else XG(!0)},"data-active":q0,style:q0&&R0?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:m.jsx(x_,{size:21})}),m.jsxs("span",{className:u.buttonTooltip,children:[q0?"Exit layout mode":"Layout mode",m.jsx("span",{className:u.shortcut,children:"L"})]})]}),m.jsxs("div",{className:u.buttonWrapper,children:[m.jsx("button",{className:u.controlButton,onClick:(Q)=>{Q.stopPropagation(),QZ(),$(!K)},disabled:!dJ||q0,children:m.jsx(w_,{size:24,isOpen:K})}),m.jsxs("span",{className:u.buttonTooltip,children:[K?"Hide markers":"Show markers",m.jsx("span",{className:u.shortcut,children:"H"})]})]}),m.jsxs("div",{className:u.buttonWrapper,children:[m.jsx("button",{className:`${u.controlButton} ${o0?u.statusShowing:""}`,onClick:(Q)=>{Q.stopPropagation(),QZ(),I4()},disabled:q0&&R0?W0.length===0&&!I0?.sections?.length:!dJ&&iZ.length===0&&W0.length===0&&!I0?.sections?.length,"data-active":o0,children:m.jsx(V_,{size:24,copied:o0,tint:q0&&R0&&(W0.length>0||!!I0?.sections?.length)?"#f97316":void 0})}),m.jsxs("span",{className:u.buttonTooltip,children:[q0&&R0?"Copy layout":"Copy feedback",m.jsx("span",{className:u.shortcut,children:"C"})]})]}),m.jsxs("div",{className:`${u.buttonWrapper} ${u.sendButtonWrapper} ${x&&!y0.webhooksEnabled&&(f6(y0.webhookUrl)||f6(D||""))?u.sendButtonVisible:""}`,children:[m.jsxs("button",{className:`${u.controlButton} ${RZ==="sent"||RZ==="failed"?u.statusShowing:""}`,onClick:(Q)=>{Q.stopPropagation(),QZ(),f4()},disabled:!dJ||!f6(y0.webhookUrl)&&!f6(D||"")||RZ==="sending","data-no-hover":RZ==="sent"||RZ==="failed",tabIndex:f6(y0.webhookUrl)||f6(D||"")?0:-1,children:[m.jsx(R_,{size:24,state:RZ}),dJ&&RZ==="idle"&&m.jsx("span",{className:u.buttonBadge,children:_.length})]}),m.jsxs("span",{className:u.buttonTooltip,children:["Send Annotations",m.jsx("span",{className:u.shortcut,children:"S"})]})]}),m.jsxs("div",{className:u.buttonWrapper,children:[m.jsx("button",{className:u.controlButton,onClick:(Q)=>{Q.stopPropagation(),QZ(),p7()},disabled:!dJ&&iZ.length===0&&W0.length===0&&!I0?.sections?.length,"data-danger":!0,children:m.jsx(I_,{size:24})}),m.jsxs("span",{className:u.buttonTooltip,children:["Clear all",m.jsx("span",{className:u.shortcut,children:"X"})]})]}),m.jsxs("div",{className:u.buttonWrapper,children:[m.jsx("button",{className:u.controlButton,onClick:(Q)=>{if(Q.stopPropagation(),QZ(),q0)L9();t(!v)},children:m.jsx(K_,{size:24})}),U&&j6!=="disconnected"&&m.jsx("span",{className:`${u.mcpIndicator} ${u[j6]} ${v?u.hidden:""}`,title:j6==="connected"?"MCP Connected":"MCP Connecting..."}),m.jsx("span",{className:u.buttonTooltip,children:"Settings"})]}),m.jsx("div",{className:u.divider}),m.jsxs("div",{className:`${u.buttonWrapper} ${xG&&typeof window<"u"&&xG.x>window.innerWidth-120?u.buttonWrapperAlignRight:""}`,children:[m.jsx("button",{className:u.controlButton,onClick:(Q)=>{Q.stopPropagation(),QZ(),Wq()},children:m.jsx(f_,{size:24})}),m.jsxs("span",{className:u.buttonTooltip,children:["Exit",m.jsx("span",{className:u.shortcut,children:"Esc"})]})]})]}),m.jsx(H1,{visible:q0&&x,activeType:s0,onSelect:(Q)=>{T0(s0===Q?null:Q)},isDarkMode:w6,sectionCount:I0?.sections.length??0,onDetectSections:()=>{let Q=M1(),M=I0?.sections??[],R=new Set(M.map((l)=>l.selector)),w=Q.filter((l)=>!R.has(l.selector)),I=[...M,...w],E=[...I0?.originalOrder??[],...w.map((l)=>l.id)];pZ({sections:I,originalOrder:E,detectedAt:Date.now()})},placementCount:W0.length,onClearPlacements:()=>{U4((Q)=>Q+1),cX((Q)=>Q+1),L0(()=>{pZ({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:R0,onBlankCanvasChange:(Q)=>{let M={sections:[],originalOrder:[],detectedAt:Date.now()};if(Q)Q4.current={rearrange:I0,placements:W0},pZ(m7.current.rearrange||M),qG(m7.current.placements),T0(null);else m7.current={rearrange:I0,placements:W0},pZ(Q4.current.rearrange||M),qG(Q4.current.placements);wG(Q)},wireframePurpose:vG,onWireframePurposeChange:y6,Tooltip:n7,onDragStart:(Q,M)=>{M.preventDefault();let R=e[Q],w=null,I=!1,E=M.clientX,l=M.clientY,J0=M.target.closest("[data-feedback-toolbar]")?.getBoundingClientRect().top??window.innerHeight,H0=(N0)=>{let u0=N0.clientX-E,U0=N0.clientY-l;if(!I&&(Math.abs(u0)>4||Math.abs(U0)>4))I=!0,w=document.createElement("div"),w.className=`${b.dragPreview}${R0?` ${b.dragPreviewWireframe}`:""}`,document.body.appendChild(w);if(!w)return;let Z0=Math.max(0,J0-N0.clientY),uG=Math.min(1,Z0/180),_G=1-Math.pow(1-uG,2),tG=28,WG=20,mG=Math.min(140,R.width*0.18),w0=Math.min(90,R.height*0.18),S0=tG+(mG-tG)*_G,PG=WG+(w0-WG)*_G;w.style.width=`${S0}px`,w.style.height=`${PG}px`,w.style.left=`${N0.clientX-S0/2}px`,w.style.top=`${N0.clientY-PG/2}px`,w.style.opacity=`${0.5+0.5*_G}`,w.textContent=_G>0.25?Q:""},j0=(N0)=>{if(window.removeEventListener("mousemove",H0),window.removeEventListener("mouseup",j0),w)document.body.removeChild(w);if(I){let{width:u0,height:U0}=R,Z0=window.scrollY,uG=Math.max(0,N0.clientX-u0/2),_G=Math.max(0,N0.clientY+Z0-U0/2),tG={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:Q,x:uG,y:_G,width:u0,height:U0,scrollY:Z0,timestamp:Date.now()};qG((WG)=>[...WG,tG]),T0(null),kJ.current=new Set,dX((WG)=>WG+1)}};window.addEventListener("mousemove",H0),window.addEventListener("mouseup",j0)}}),m.jsx(N2,{settings:y0,onSettingsChange:(Q)=>I5((M)=>({...M,...Q})),isDarkMode:w6,onToggleTheme:f5,isDevMode:nX,connectionStatus:j6,endpoint:U,isVisible:B0,toolbarNearBottom:!!xG&&xG.y<230,settingsPage:X0,onSettingsPageChange:f0,onHideToolbar:C5})]})}),(q0||h0)&&m.jsx("div",{className:`${b.blankCanvas} ${ZZ?b.visible:""} ${H9?b.gridActive:""}`,style:{"--canvas-opacity":V6},"data-feedback-toolbar":!0}),q0&&R0&&ZZ&&m.jsxs("div",{className:b.wireframeNotice,"data-feedback-toolbar":!0,children:[m.jsxs("div",{className:b.wireframeOpacityRow,children:[m.jsx("span",{className:b.wireframeOpacityLabel,children:"Toggle Opacity"}),m.jsx("input",{type:"range",className:b.wireframeOpacitySlider,min:0,max:1,step:0.01,value:V6,onChange:(Q)=>DZ(Number(Q.target.value))})]}),m.jsxs("div",{className:b.wireframeNoticeTitleRow,children:[m.jsx("span",{className:b.wireframeNoticeTitle,children:"Wireframe Mode"}),m.jsx("span",{className:b.wireframeNoticeDivider}),m.jsx("button",{className:b.wireframeStartOver,onClick:()=>{U4((Q)=>Q+1),pZ({sections:[],originalOrder:[],detectedAt:Date.now()}),m7.current={rearrange:null,placements:[]},y6(""),T9(M0)},children:"Start Over"})]}),"Drag components onto the canvas.",m.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(q0||h0)&&m.jsx(Z1,{placements:W0,onChange:qG,activeComponent:h0?null:s0,onActiveComponentChange:T0,isDarkMode:w6,exiting:h0,onInteractionChange:L5,passthrough:!s0,extraSnapRects:I0?.sections.map((Q)=>Q.currentRect),deselectSignal:_5,clearSignal:M5,wireframe:R0,onSelectionChange:(Q,M)=>{if(kJ.current=Q,!M)X9.current=new Set,F5((R)=>R+1)},onDragMove:(Q,M)=>{let R=X9.current;if(!R.size||!I0)return;if(!q6.current){q6.current=new Map;for(let w of I0.sections)if(R.has(w.id))q6.current.set(w.id,{x:w.currentRect.x,y:w.currentRect.y})}for(let w of I0.sections){if(!R.has(w.id))continue;if(!q6.current.get(w.id))continue;let E=document.querySelector(`[data-rearrange-section="${w.id}"]`);if(E)E.style.transform=`translate(${Q}px, ${M}px)`}},onDragEnd:(Q,M,R)=>{let w=X9.current,I=q6.current;if(q6.current=null,!w.size||!I0||!I)return;for(let E of w){let l=document.querySelector(`[data-rearrange-section="${E}"]`);if(l)l.style.transform=""}if(R)pZ((E)=>{if(!E)return E;return{...E,sections:E.sections.map((l)=>{let r=I.get(l.id);if(!r)return l;return{...l,currentRect:{...l.currentRect,x:Math.max(0,r.x+Q),y:Math.max(0,r.y+M)}}})}})}}),(q0||h0)&&I0&&m.jsx(R1,{rearrangeState:I0,onChange:pZ,isDarkMode:w6,exiting:h0,blankCanvas:R0,extraSnapRects:W0.map((Q)=>({x:Q.x,y:Q.y,width:Q.width,height:Q.height})),clearSignal:O5,deselectSignal:A5,onSelectionChange:(Q,M)=>{if(X9.current=Q,!M)kJ.current=new Set,dX((R)=>R+1)},onDragMove:(Q,M)=>{let R=kJ.current;if(!R.size)return;if(!q6.current){q6.current=new Map;for(let w of W0)if(R.has(w.id))q6.current.set(w.id,{x:w.x,y:w.y})}for(let w of R){let I=document.querySelector(`[data-design-placement="${w}"]`);if(I)I.style.transform=`translate(${Q}px, ${M}px)`}},onDragEnd:(Q,M,R)=>{let w=kJ.current,I=q6.current;if(q6.current=null,!w.size||!I)return;for(let E of w){let l=document.querySelector(`[data-design-placement="${E}"]`);if(l)l.style.transform=""}if(R)qG((E)=>E.map((l)=>{let r=I.get(l.id);if(!r)return l;return{...l,x:Math.max(0,r.x+Q),y:Math.max(0,r.y+M)}}))}}),m.jsx("canvas",{ref:_4,className:`${u.drawCanvas} ${W6?u.active:""}`,style:{opacity:V4?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),m.jsxs("div",{className:u.markersLayer,"data-feedback-toolbar":!0,children:[n&&Tz.filter((Q)=>!Q.isFixed).map((Q,M,R)=>m.jsx(GW,{annotation:Q,globalIndex:Tz.findIndex((w)=>w.id===Q.id),layerIndex:M,layerSize:R.length,isExiting:GG,isClearing:X7,isAnimated:Zq.has(Q.id),isHovered:!GG&&E6===Q.id,isDeleting:M6===Q.id,isEditingAny:!!E0,renumberFrom:Dz,markerClickBehavior:y0.markerClickBehavior,tooltipStyle:Lq(Q),onHoverEnter:(w)=>!GG&&w.id!==U9.current&&F9(w),onHoverLeave:()=>F9(null),onClick:(w)=>y0.markerClickBehavior==="delete"?K4(w.id):A9(w),onContextMenu:A9},Q.id)),n&&!GG&&Uq.filter((Q)=>!Q.isFixed).map((Q)=>m.jsx(ZW,{annotation:Q},Q.id))]}),m.jsxs("div",{className:u.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[n&&Tz.filter((Q)=>Q.isFixed).map((Q,M,R)=>m.jsx(GW,{annotation:Q,globalIndex:Tz.findIndex((w)=>w.id===Q.id),layerIndex:M,layerSize:R.length,isExiting:GG,isClearing:X7,isAnimated:Zq.has(Q.id),isHovered:!GG&&E6===Q.id,isDeleting:M6===Q.id,isEditingAny:!!E0,renumberFrom:Dz,markerClickBehavior:y0.markerClickBehavior,tooltipStyle:Lq(Q),onHoverEnter:(w)=>!GG&&w.id!==U9.current&&F9(w),onHoverLeave:()=>F9(null),onClick:(w)=>y0.markerClickBehavior==="delete"?K4(w.id):A9(w),onContextMenu:A9},Q.id)),n&&!GG&&Uq.filter((Q)=>Q.isFixed).map((Q)=>m.jsx(ZW,{annotation:Q,fixed:!0},Q.id))]}),x&&m.jsxs("div",{className:u.overlay,"data-feedback-toolbar":!0,style:i||E0?{zIndex:99999}:void 0,children:[b0?.rect&&!i&&!a0&&!g6&&m.jsx("div",{className:`${u.hoverHighlight} ${u.enter}`,style:{left:b0.rect.left,top:b0.rect.top,width:b0.rect.width,height:b0.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),pG.filter((Q)=>document.contains(Q.element)).map((Q,M)=>{let R=Q.element.getBoundingClientRect(),w=pG.length>1;return m.jsx("div",{className:w?u.multiSelectOutline:u.singleSelectOutline,style:{position:"fixed",left:R.left,top:R.top,width:R.width,height:R.height,...w?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},M)}),E6&&!i&&(()=>{let Q=_.find((I)=>I.id===E6);if(!Q?.boundingBox)return null;if(Q.elementBoundingBoxes?.length){if(H6.length>0)return H6.filter((I)=>document.contains(I)).map((I,E)=>{let l=I.getBoundingClientRect();return m.jsx("div",{className:`${u.multiSelectOutline} ${u.enter}`,style:{left:l.left,top:l.top,width:l.width,height:l.height}},`hover-outline-live-${E}`)});return Q.elementBoundingBoxes.map((I,E)=>m.jsx("div",{className:`${u.multiSelectOutline} ${u.enter}`,style:{left:I.x,top:I.y-ZG,width:I.width,height:I.height}},`hover-outline-${E}`))}let M=u7&&document.contains(u7)?u7.getBoundingClientRect():null,R=M?{x:M.left,y:M.top,width:M.width,height:M.height}:{x:Q.boundingBox.x,y:Q.isFixed?Q.boundingBox.y:Q.boundingBox.y-ZG,width:Q.boundingBox.width,height:Q.boundingBox.height},w=Q.isMultiSelect;return m.jsx("div",{className:`${w?u.multiSelectOutline:u.singleSelectOutline} ${u.enter}`,style:{left:R.x,top:R.y,width:R.width,height:R.height,...w?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),b0&&!i&&!a0&&!g6&&m.jsxs("div",{className:`${u.hoverTooltip} ${u.enter}`,style:{left:Math.max(8,Math.min($0.x,window.innerWidth-100)),top:Math.max($0.y-(b0.reactComponents?48:32),8)},children:[b0.reactComponents&&m.jsx("div",{className:u.hoverReactPath,children:b0.reactComponents}),m.jsx("div",{className:u.hoverElementName,children:b0.elementName})]}),i&&m.jsxs(m.Fragment,{children:[i.multiSelectElements?.length?i.multiSelectElements.filter((Q)=>document.contains(Q)).map((Q,M)=>{let R=Q.getBoundingClientRect();return m.jsx("div",{className:`${u.multiSelectOutline} ${gJ?u.exit:u.enter}`,style:{left:R.left,top:R.top,width:R.width,height:R.height}},`pending-multi-${M}`)}):i.targetElement&&document.contains(i.targetElement)?(()=>{let Q=i.targetElement.getBoundingClientRect();return m.jsx("div",{className:`${u.singleSelectOutline} ${gJ?u.exit:u.enter}`,style:{left:Q.left,top:Q.top,width:Q.width,height:Q.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():i.boundingBox&&m.jsx("div",{className:`${i.isMultiSelect?u.multiSelectOutline:u.singleSelectOutline} ${gJ?u.exit:u.enter}`,style:{left:i.boundingBox.x,top:i.boundingBox.y-ZG,width:i.boundingBox.width,height:i.boundingBox.height,...i.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{let Q=i.x,M=i.isFixed?i.y:i.y-ZG;return m.jsxs(m.Fragment,{children:[m.jsx(F2,{x:Q,y:M,isMultiSelect:i.isMultiSelect,isExiting:gJ}),m.jsx(k9,{ref:Hq,element:i.element,selectedText:i.selectedText,computedStyles:i.computedStylesObj,placeholder:i.element==="Area selection"?"What should change in this area?":i.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:T5,onCancel:D4,isExiting:gJ,lightMode:!w6,accentColor:i.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,Q/100*window.innerWidth)),...M>window.innerHeight-290?{bottom:window.innerHeight-M+20}:{top:M+20}}})]})})()]}),E0&&m.jsxs(m.Fragment,{children:[E0.elementBoundingBoxes?.length?(()=>{if(P0.length>0)return P0.filter((Q)=>document.contains(Q)).map((Q,M)=>{let R=Q.getBoundingClientRect();return m.jsx("div",{className:`${u.multiSelectOutline} ${u.enter}`,style:{left:R.left,top:R.top,width:R.width,height:R.height}},`edit-multi-live-${M}`)});return E0.elementBoundingBoxes.map((Q,M)=>m.jsx("div",{className:`${u.multiSelectOutline} ${u.enter}`,style:{left:Q.x,top:Q.y-ZG,width:Q.width,height:Q.height}},`edit-multi-${M}`))})():(()=>{let Q=Q0&&document.contains(Q0)?Q0.getBoundingClientRect():null,M=Q?{x:Q.left,y:Q.top,width:Q.width,height:Q.height}:E0.boundingBox?{x:E0.boundingBox.x,y:E0.isFixed?E0.boundingBox.y:E0.boundingBox.y-ZG,width:E0.boundingBox.width,height:E0.boundingBox.height}:null;if(!M)return null;return m.jsx("div",{className:`${E0.isMultiSelect?u.multiSelectOutline:u.singleSelectOutline} ${u.enter}`,style:{left:M.x,top:M.y,width:M.width,height:M.height,...E0.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),m.jsx(k9,{ref:Xq,element:E0.element,selectedText:E0.selectedText,computedStyles:L1(E0.computedStyles),placeholder:"Edit your feedback...",initialValue:E0.comment,submitLabel:"Save",onSubmit:S5,onCancel:x5,onDelete:()=>K4(E0.id),isExiting:N5,lightMode:!w6,accentColor:E0.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{let Q=E0.isFixed?E0.y:E0.y-ZG;return{left:Math.max(160,Math.min(window.innerWidth-160,E0.x/100*window.innerWidth)),...Q>window.innerHeight-290?{bottom:window.innerHeight-Q+20}:{top:Q+20}}})()})]}),g6&&m.jsxs(m.Fragment,{children:[m.jsx("div",{ref:vJ,className:u.dragSelection}),m.jsx("div",{ref:uJ,className:u.highlightsContainer})]})]})]}),document.body)}var Q5=DG(iL(),1),U5=DG(UZ(),1);var ZO=["audio/webm;codecs=opus","audio/ogg;codecs=opus"];function aL(G){return G?.provider==="diction"&&Boolean(G.wsUrl)}function zO(){if(typeof MediaRecorder>"u"||typeof MediaRecorder.isTypeSupported!=="function")return null;return ZO.find((G)=>MediaRecorder.isTypeSupported(G))??null}async function nL(G){let Z=await YO(),z=G.abortSignal,J=G.stopSignal;try{hX(z);let Y=JO(G.codec),{socket:B,useOpus:H}=await BO(G.wsUrl,Y!==null);try{if(hX(z),H&&Y)await XO(Z,B,Y,J,z);else await WO(Z,B,J,z);return hX(z),B.send(JSON.stringify({action:"done"})),await QO(B,z)}finally{UO(B)}}finally{LO(Z)}}function JO(G){if(G==="pcm")return null;let Z=zO();if(G==="opus"&&!Z)return null;return Z}async function YO(){if(!navigator.mediaDevices?.getUserMedia)throw new SZ("Microphone is not available in this browser.","unsupported");try{return await navigator.mediaDevices.getUserMedia({audio:{channelCount:1,echoCancellation:!0,noiseSuppression:!0}})}catch(G){if(G instanceof DOMException&&(G.name==="NotAllowedError"||G.name==="PermissionDeniedError"))throw new SZ("Microphone access was denied.","denied");throw new SZ("Could not start the microphone.","mic")}}async function BO(G,Z){if(Z)try{let z=await sL(rL(G,"opus"),["diction.opus.v1"]),J=z.protocol==="diction.opus.v1";return{socket:z,useOpus:J}}catch{}return{socket:await sL(rL(G,"pcm")),useOpus:!1}}async function sL(G,Z){let z=Z?new WebSocket(G,Z):new WebSocket(G);return z.binaryType="arraybuffer",await HO(z),z}function rL(G,Z){try{let z=new URL(G);if(!z.searchParams.has("codec"))z.searchParams.set("codec",Z);return z.toString()}catch{let z=G.includes("?")?"&":"?";return`${G}${z}codec=${Z}`}}function HO(G){if(G.readyState===WebSocket.OPEN)return Promise.resolve();return new Promise((Z,z)=>{let J=window.setTimeout(()=>{H(),G.close(),z(new SZ("Could not reach the dictation service.","ws"))},8000),Y=()=>{H(),Z()},B=()=>{H(),z(new SZ("Could not reach the dictation service.","ws"))},H=()=>{window.clearTimeout(J),G.removeEventListener("open",Y),G.removeEventListener("error",B)};G.addEventListener("open",Y),G.addEventListener("error",B)})}async function XO(G,Z,z,J,Y){let B=new MediaRecorder(G,{mimeType:z,audioBitsPerSecond:24000}),H=[];B.addEventListener("dataavailable",(X)=>{if(X.data.size===0||Z.readyState!==WebSocket.OPEN)return;H.push(X.data.arrayBuffer().then((q)=>{if(Z.readyState===WebSocket.OPEN)Z.send(q)}))}),B.start(250);try{await tL(Z,J,Y)}finally{if(B.state!=="inactive")await qO(B);await Promise.all(H)}}function qO(G){return new Promise((Z)=>{G.addEventListener("stop",()=>Z(),{once:!0}),G.stop()})}async function WO(G,Z,z,J){let Y=window.AudioContext||window.webkitAudioContext;if(!Y)throw new SZ("This browser cannot capture PCM audio.","unsupported");let B=new Y,H=B.createMediaStreamSource(G),X=B.createScriptProcessor(4096,1,1),q=B.createGain();if(q.gain.value=0,X.onaudioprocess=(A)=>{if(Z.readyState!==WebSocket.OPEN)return;let U=A.inputBuffer.getChannelData(0),V=jO(U,B.sampleRate,16000);if(V.byteLength>0)Z.send(V)},H.connect(X),X.connect(q),q.connect(B.destination),B.state==="suspended")await B.resume();try{await tL(Z,z,J)}finally{X.onaudioprocess=null,X.disconnect(),H.disconnect(),q.disconnect(),await B.close().catch(()=>{return})}}function jO(G,Z,z){if(G.length===0)return new ArrayBuffer(0);let J=Z/z,Y=J<=1?G.length:Math.round(G.length/J),B=new DataView(new ArrayBuffer(Y*2));if(J<=1){for(let H=0;H<G.length;H++)B.setInt16(H*2,oL(G[H]??0),!0);return B.buffer}for(let H=0;H<Y;H++){let X=H*J,q=Math.floor(X),A=Math.min(q+1,G.length-1),U=X-q,V=(G[q]??0)*(1-U)+(G[A]??0)*U;B.setInt16(H*2,oL(V),!0)}return B.buffer}function oL(G){let Z=Math.max(-1,Math.min(1,G));return Z<0?Math.round(Z*32768):Math.round(Z*32767)}function tL(G,Z,z){return new Promise((J,Y)=>{if(z?.aborted){Y(new DOMException("Aborted","AbortError"));return}if(Z?.aborted){J();return}let B=()=>{A(),J()},H=()=>{A(),Y(new DOMException("Aborted","AbortError"))},X=()=>{A(),Y(new SZ("The dictation connection closed unexpectedly.","ws"))},q=()=>{A(),Y(new SZ("The dictation connection failed.","ws"))},A=()=>{Z?.removeEventListener("abort",B),z?.removeEventListener("abort",H),G.removeEventListener("close",X),G.removeEventListener("error",q)};Z?.addEventListener("abort",B,{once:!0}),z?.addEventListener("abort",H,{once:!0}),G.addEventListener("close",X),G.addEventListener("error",q)})}function QO(G,Z){return new Promise((z,J)=>{let Y=window.setTimeout(()=>{q(),J(new SZ("Dictation timed out waiting for a transcript.","timeout"))},20000),B=(A)=>{if(typeof A.data!=="string")return;let U;try{U=JSON.parse(A.data)}catch{return}if(typeof U.error==="string"&&U.error!==""){q(),J(new SZ(U.error,"ws"));return}if(typeof U.text==="string")q(),z(U.text)},H=()=>{q(),J(new SZ("The dictation service closed before sending a transcript.","ws"))},X=()=>{q(),J(new DOMException("Aborted","AbortError"))},q=()=>{window.clearTimeout(Y),G.removeEventListener("message",B),G.removeEventListener("close",H),Z?.removeEventListener("abort",X)};if(Z?.aborted){q(),J(new DOMException("Aborted","AbortError"));return}Z?.addEventListener("abort",X,{once:!0}),G.addEventListener("message",B),G.addEventListener("close",H)})}function UO(G){try{G.close()}catch{}}function LO(G){for(let Z of G.getTracks())Z.stop()}function hX(G){if(G?.aborted)throw new DOMException("Aborted","AbortError")}class SZ extends Error{code;constructor(G,Z){super(G);this.name="DictationError",this.code=Z}}var mX="toolbar-agentation-root",Y9="data-toolbar-dictation",eL="toolbar-agentation-dictation-styles",_O='textarea[class*="styles-module__textarea___"]',AO='[class*="styles-module__actions___"]',FO='[class*="styles-module__submit___"]',MO='[class*="styles-module__popup___"], [data-annotation-popup]',yX=`[${Y9}], .toolbar-agentation-dictation, .toolbar-agentation-dictation-error, .toolbar-agentation-dictation-autosubmit`,OO=5000,B7=new WeakMap,SJ=new Set,G5=new WeakSet,W4=new WeakMap,xJ=new Set;function z5(G){if(!aL(G)||!G?.wsUrl)return;hO(),VO(G);let Z=!1,z=0,J=()=>{if(!document.getElementById(mX))return;Z=!0;try{document.querySelectorAll(_O).forEach((X)=>{if(KO(X))IO(X,G)});for(let X of[...SJ])if(!document.body.contains(X))B7.get(X)?.abort.abort(),b6(X),SJ.delete(X);for(let X of[...xJ])if(!document.body.contains(X))b6(X);else TO(X,G)}finally{Z=!1}},Y=()=>{if(Z)return;window.clearTimeout(z),z=window.setTimeout(J,50)};new MutationObserver((H)=>{if(Z)return;for(let X of H){if(X.type!=="childList")continue;for(let q of X.addedNodes)if(!vX(q)){Y();return}for(let q of X.removedNodes)if(!vX(q)){Y();return}}}).observe(document.documentElement,{childList:!0,subtree:!0}),J()}function VO(G){if(window.__TOOLBAR_DICTATION_KEYS__)return;window.__TOOLBAR_DICTATION_KEYS__=!0,document.addEventListener("keydown",(Z)=>{if(Z.defaultPrevented||Z.isComposing)return;if(Z.key==="Enter"&&!Z.shiftKey&&!Z.metaKey&&!Z.ctrlKey&&!Z.altKey){if(!RO())return;if(wO(Z.target))return;if(DO())Z.preventDefault(),Z.stopPropagation();return}if(Z.key==="Escape"&&xJ.size>0)for(let z of[...xJ])b6(z)},!0)}function RO(){for(let G of SJ)if(B7.get(G)?.state==="recording")return!0;return!1}function wO(G){if(!(G instanceof Element))return!1;if(G.closest(MO)||G.closest(`#${mX}`)||G.closest(yX))return!1;let Z=G.closest('input, textarea, select, [contenteditable=""], [contenteditable=true]');return Boolean(Z)}function DO(){let G=document.activeElement;if(G instanceof HTMLTextAreaElement){let Z=B7.get(G);if(Z?.state==="recording")return gX(Z),!0}for(let Z of SJ){let z=B7.get(Z);if(z?.state==="recording")return gX(z),!0}return!1}function gX(G){G.state="transcribing",wz(G.button,"transcribing"),G.stop.abort()}function vX(G){if(G instanceof Element)return Boolean(G.matches(yX)||G.closest(yX));let Z=G.parentElement;return Z?vX(Z):!1}function KO(G){return Boolean(G.closest(`#${mX}`)||G.closest('[class*="styles-module__popup___"]')||G.closest("[data-annotation-popup]"))}function J5(G){let Z=G.parentElement;for(let z=0;z<4&&Z;z++){let J=Z.querySelector(AO);if(J)return J;Z=Z.parentElement}return null}function uX(G){let z=J5(G)?.querySelector(FO);return z instanceof HTMLButtonElement?z:null}function Y5(G){let Z=G.nextElementSibling;return Z instanceof HTMLElement&&Z.classList.contains("toolbar-agentation-dictation-error")?Z:null}function IO(G,Z){let z=J5(G);if(!z)return;let J=z.querySelector(`[${Y9}]`);if(!J){if(J=document.createElement("button"),J.type="button",J.setAttribute(Y9,"idle"),J.className="toolbar-agentation-dictation",J.innerHTML=X5(),!z.querySelector('[class*="styles-module__deleteWrapper___"]'))J.setAttribute("data-toolbar-dictation-lead","1");J.addEventListener("click",(H)=>{H.preventDefault(),H.stopPropagation(),NO(G,J,Z)}),J.addEventListener("pointerdown",(H)=>H.stopPropagation()),J.addEventListener("mousedown",(H)=>H.stopPropagation()),z.insertBefore(J,z.firstChild)}if(!Y5(G)){let H=document.createElement("p");H.className="toolbar-agentation-dictation-error",H.hidden=!0,G.insertAdjacentElement("afterend",H)}let Y=B7.get(G),B=Y?.state??"idle";if(Y)Y.button=J;if(J.getAttribute(Y9)!==B)wz(J,B);fO(G,J,Z)}function fO(G,Z,z){if(z.autoStart===!1)return;if(G5.has(G)||B7.has(G))return;G5.add(G),B5(G,Z,z)}function NO(G,Z,z){let J=B7.get(G);if(J){gX(J);return}B5(G,Z,z)}async function B5(G,Z,z){let J=Y5(G),Y=new AbortController,B=new AbortController,H={stop:Y,abort:B,button:Z,state:"recording"};b6(G),B7.set(G,H),SJ.add(G),PO(J),wz(Z,"recording");try{let X=await nL({wsUrl:z.wsUrl,codec:z.codec,stopSignal:Y.signal,abortSignal:B.signal});if(X.trim()==="")Z5(J,"No speech detected."),wz(H.button,"idle");else{xO(G,SO(G.value,X)),wz(H.button,"idle");let q=$O(z);if(q>0)CO(G,z,q);else G.focus()}}catch(X){if(kO(X)){wz(H.button,"idle");return}let q=X instanceof SZ?X.message:"Dictation failed. You can still type.";Z5(J,q),wz(H.button,"idle")}finally{B7.delete(G),SJ.delete(G)}}function $O(G){let Z=G.autoSubmitMs;if(typeof Z==="number"&&Number.isFinite(Z))return Math.max(0,Math.floor(Z));return OO}function CO(G,Z,z){b6(G);let J=uX(G);if(!J||J.disabled){G.focus();return}let Y=H5(J,z),B=()=>{b6(G)},H=(A)=>{if(A.key==="Escape")b6(G)},X=()=>{b6(G,{keepOverlay:!1,skipClickCleanup:!0})},q=window.setTimeout(()=>{let A=uX(G)??J;if(b6(G),document.body.contains(A)&&!A.disabled)A.click()},z);G.addEventListener("focusin",B),G.addEventListener("focus",B),J.addEventListener("click",X,{once:!0}),document.addEventListener("keydown",H,!0),W4.set(G,{timer:q,endsAt:Date.now()+z,overlay:Y,submit:J,onFocus:B,onKeyDown:H,onClick:X}),xJ.add(G)}function TO(G,Z){let z=W4.get(G);if(!z)return;let J=uX(G);if(!J)return;if(z.submit===J&&z.overlay&&J.contains(z.overlay))return;if(z.submit&&z.onClick)z.submit.removeEventListener("click",z.onClick);if(z.overlay)z.overlay.remove();let Y=Math.max(0,z.endsAt-Date.now());if(Y<=0)return;let B=H5(J,Y),H=()=>{b6(G,{keepOverlay:!1,skipClickCleanup:!0})};J.addEventListener("click",H,{once:!0}),z.submit=J,z.overlay=B,z.onClick=H}function H5(G,Z){let z=G.querySelector(".toolbar-agentation-dictation-autosubmit");if(z)z.remove();let J=window.getComputedStyle(G);if(J.position==="static")G.style.position="relative";if(J.overflow==="visible")G.style.overflow="hidden";let Y=document.createElement("span");return Y.className="toolbar-agentation-dictation-autosubmit",Y.setAttribute("aria-hidden","true"),Y.style.setProperty("--toolbar-dictation-autosubmit-ms",`${Z}ms`),G.appendChild(Y),Y}function b6(G,Z){let z=W4.get(G);if(!z){xJ.delete(G);return}if(window.clearTimeout(z.timer),G.removeEventListener("focusin",z.onFocus),G.removeEventListener("focus",z.onFocus),document.removeEventListener("keydown",z.onKeyDown,!0),!Z?.skipClickCleanup&&z.submit)z.submit.removeEventListener("click",z.onClick);if(!Z?.keepOverlay&&z.overlay)z.overlay.remove();W4.delete(G),xJ.delete(G)}function SO(G,Z){let z=Z.trim();if(z==="")return G;let J=G.trimEnd();if(J==="")return z;let Y=/[\s\n]$/.test(G)?"":" ";return J+Y+z}function xO(G,Z){let z=Object.getPrototypeOf(G),J=Object.getOwnPropertyDescriptor(z,"value")??Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype,"value");if(J?.set)J.set.call(G,Z);else G.value=Z;G.dispatchEvent(new Event("input",{bubbles:!0})),G.dispatchEvent(new Event("change",{bubbles:!0}))}function wz(G,Z){if(G.setAttribute(Y9,Z),G.classList.toggle("is-recording",Z==="recording"),G.classList.toggle("is-busy",Z==="transcribing"),G.setAttribute("aria-pressed",Z==="recording"?"true":"false"),Z==="recording")G.setAttribute("aria-label","Stop dictation"),G.setAttribute("title","Stop dictation"),G.innerHTML=bO();else if(Z==="transcribing")G.setAttribute("aria-label","Transcribing"),G.setAttribute("title","Transcribing…"),G.innerHTML=EO();else G.setAttribute("aria-label","Dictate comment"),G.setAttribute("title","Dictate comment"),G.innerHTML=X5()}function Z5(G,Z){if(!G)return;G.textContent=Z,G.hidden=!1}function PO(G){if(!G)return;G.hidden=!0,G.textContent=""}function kO(G){return G instanceof DOMException&&G.name==="AbortError"}function X5(){return'<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M6 11a6 6 0 0 0 12 0"/><path d="M12 17v3"/><path d="M8 20h8"/></svg>'}function bO(){return'<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor"><rect x="7" y="7" width="10" height="10" rx="1.5"/></svg>'}function EO(){return'<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" class="toolbar-agentation-dictation-spinner" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="8" opacity="0.25"/><path d="M12 4a8 8 0 0 1 8 8"/></svg>'}function hO(){if(document.getElementById(eL))return;let G=document.createElement("style");G.id=eL,G.textContent=`
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
        .toolbar-agentation-dictation-autosubmit {
            position: absolute;
            inset: 0;
            border-radius: inherit;
            pointer-events: none;
            overflow: hidden;
            z-index: 1;
        }
        .toolbar-agentation-dictation-autosubmit::before {
            content: "";
            display: block;
            width: 100%;
            height: 100%;
            transform: scaleX(0);
            transform-origin: left center;
            background: color-mix(in srgb, var(--agentation-color-blue, #3b82f6) 42%, transparent);
            animation: toolbar-agentation-dictation-wipe var(--toolbar-dictation-autosubmit-ms, 5000ms) linear forwards;
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
        [class*="styles-module__light___"] .toolbar-agentation-dictation-autosubmit::before {
            background: color-mix(in srgb, var(--agentation-color-blue, #2563eb) 32%, transparent);
        }
        @keyframes toolbar-agentation-dictation-pulse {
            0%, 100% { box-shadow: 0 0 0 0 color-mix(in srgb, #f43f5e 45%, transparent); }
            50% { box-shadow: 0 0 0 5px transparent; }
        }
        @keyframes toolbar-agentation-dictation-spin {
            to { transform: rotate(360deg); }
        }
        @keyframes toolbar-agentation-dictation-wipe {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
        }
    `,document.head.appendChild(G)}var yO="toolbar-agentation-root",q5="toolbar-agentation-styles";function gO(){if(document.getElementById(q5))return;let G=document.createElement("style");G.id=q5,G.textContent=`
        [data-agentation-toolbar] { display: none !important; }
        [data-agentation-toolbar].agentation-visible { display: block !important; }
        #laravel-toolbar-shadow-host.toolbar-external-active {
            opacity: 0 !important;
            pointer-events: none !important;
            transition: opacity 0.15s ease;
        }
    `,document.head.appendChild(G)}function W5(){try{return nJ(window.location.pathname).length}catch{return 0}}function PJ(G){window.dispatchEvent(new CustomEvent("toolbar:agentation:state",{detail:{annotationCount:G}}))}function j5(){if(window.__TOOLBAR_AGENTATION_MOUNTED__)return;window.__TOOLBAR_AGENTATION_MOUNTED__=!0,gO();let G=window.__TOOLBAR_AGENTATION__?.endpoint||void 0,Z=document.createElement("div");Z.id=yO,document.body.appendChild(Z);let z=Q5.createRoot(Z),J=W5(),Y=()=>z.render(U5.jsx(IW,{key:window.location.pathname,endpoint:G,onAnnotationAdd:()=>PJ(++J),onAnnotationDelete:()=>PJ(--J),onAnnotationsClear:()=>PJ(J=0)})),B=()=>{J=W5(),PJ(J),Y()};Y(),PJ(J),z5(window.__TOOLBAR_AGENTATION__?.dictation),window.addEventListener("popstate",B),document.addEventListener("inertia:navigate",B),window.addEventListener("toolbar:agentation:request-state",()=>PJ(J))}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",j5,{once:!0});else j5();})();
