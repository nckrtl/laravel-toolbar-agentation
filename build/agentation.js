(()=>{var q_=Object.create;var{getPrototypeOf:W_,defineProperty:GX,getOwnPropertyNames:U_}=Object;var A_=Object.prototype.hasOwnProperty;function Q_(G){return this[G]}var __,L_,DG=(G,Z,z)=>{var J=G!=null&&typeof G==="object";if(J){var B=Z?__??=new WeakMap:L_??=new WeakMap,Y=B.get(G);if(Y)return Y}z=G!=null?q_(W_(G)):{};let j=Z||!G||!G.__esModule?GX(z,"default",{value:G,enumerable:!0}):z;for(let H of U_(G))if(!A_.call(j,H))GX(j,H,{get:Q_.bind(G,H),enumerable:!0});if(J)B.set(G,j);return j};var K7=(G,Z)=>()=>(Z||G((Z={exports:{}}).exports,Z),Z.exports);var UX=K7((S0)=>{var wY=Symbol.for("react.transitional.element"),O_=Symbol.for("react.portal"),M_=Symbol.for("react.fragment"),F_=Symbol.for("react.strict_mode"),R_=Symbol.for("react.profiler"),w_=Symbol.for("react.consumer"),V_=Symbol.for("react.context"),D_=Symbol.for("react.forward_ref"),K_=Symbol.for("react.suspense"),I_=Symbol.for("react.memo"),YX=Symbol.for("react.lazy"),f_=Symbol.for("react.activity"),ZX=Symbol.iterator;function T_(G){if(G===null||typeof G!=="object")return null;return G=ZX&&G[ZX]||G["@@iterator"],typeof G==="function"?G:null}var jX={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},HX=Object.assign,XX={};function Nz(G,Z,z){this.props=G,this.context=Z,this.refs=XX,this.updater=z||jX}Nz.prototype.isReactComponent={};Nz.prototype.setState=function(G,Z){if(typeof G!=="object"&&typeof G!=="function"&&G!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,G,Z,"setState")};Nz.prototype.forceUpdate=function(G){this.updater.enqueueForceUpdate(this,G,"forceUpdate")};function qX(){}qX.prototype=Nz.prototype;function VY(G,Z,z){this.props=G,this.context=Z,this.refs=XX,this.updater=z||jX}var DY=VY.prototype=new qX;DY.constructor=VY;HX(DY,Nz.prototype);DY.isPureReactComponent=!0;var zX=Array.isArray;function RY(){}var IG={H:null,A:null,T:null,S:null},WX=Object.prototype.hasOwnProperty;function KY(G,Z,z){var J=z.ref;return{$$typeof:wY,type:G,key:Z,ref:J!==void 0?J:null,props:z}}function N_(G,Z){return KY(G.type,Z,G.props)}function IY(G){return typeof G==="object"&&G!==null&&G.$$typeof===wY}function $_(G){var Z={"=":"=0",":":"=2"};return"$"+G.replace(/[=:]/g,function(z){return Z[z]})}var JX=/\/+/g;function FY(G,Z){return typeof G==="object"&&G!==null&&G.key!=null?$_(""+G.key):Z.toString(36)}function C_(G){switch(G.status){case"fulfilled":return G.value;case"rejected":throw G.reason;default:switch(typeof G.status==="string"?G.then(RY,RY):(G.status="pending",G.then(function(Z){G.status==="pending"&&(G.status="fulfilled",G.value=Z)},function(Z){G.status==="pending"&&(G.status="rejected",G.reason=Z)})),G.status){case"fulfilled":return G.value;case"rejected":throw G.reason}}throw G}function Tz(G,Z,z,J,B){var Y=typeof G;if(Y==="undefined"||Y==="boolean")G=null;var j=!1;if(G===null)j=!0;else switch(Y){case"bigint":case"string":case"number":j=!0;break;case"object":switch(G.$$typeof){case wY:case O_:j=!0;break;case YX:return j=G._init,Tz(j(G._payload),Z,z,J,B)}}if(j)return B=B(G),j=J===""?"."+FY(G,0):J,zX(B)?(z="",j!=null&&(z=j.replace(JX,"$&/")+"/"),Tz(B,Z,z,"",function(F){return F})):B!=null&&(IY(B)&&(B=N_(B,z+(B.key==null||G&&G.key===B.key?"":(""+B.key).replace(JX,"$&/")+"/")+j)),Z.push(B)),1;j=0;var H=J===""?".":J+":";if(zX(G))for(var X=0;X<G.length;X++)J=G[X],Y=H+FY(J,X),j+=Tz(J,Z,z,Y,B);else if(X=T_(G),typeof X==="function")for(G=X.call(G),X=0;!(J=G.next()).done;)J=J.value,Y=H+FY(J,X++),j+=Tz(J,Z,z,Y,B);else if(Y==="object"){if(typeof G.then==="function")return Tz(C_(G),Z,z,J,B);throw Z=String(G),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(G).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return j}function WB(G,Z,z){if(G==null)return G;var J=[],B=0;return Tz(G,J,"","",function(Y){return Z.call(z,Y,B++)}),J}function x_(G){if(G._status===-1){var Z=G._result;Z=Z(),Z.then(function(z){if(G._status===0||G._status===-1)G._status=1,G._result=z},function(z){if(G._status===0||G._status===-1)G._status=2,G._result=z}),G._status===-1&&(G._status=0,G._result=Z)}if(G._status===1)return G._result.default;throw G._result}var BX=typeof reportError==="function"?reportError:function(G){if(typeof window==="object"&&typeof window.ErrorEvent==="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof G==="object"&&G!==null&&typeof G.message==="string"?String(G.message):String(G),error:G});if(!window.dispatchEvent(Z))return}else if(typeof process==="object"&&typeof process.emit==="function"){process.emit("uncaughtException",G);return}console.error(G)},S_={map:WB,forEach:function(G,Z,z){WB(G,function(){Z.apply(this,arguments)},z)},count:function(G){var Z=0;return WB(G,function(){Z++}),Z},toArray:function(G){return WB(G,function(Z){return Z})||[]},only:function(G){if(!IY(G))throw Error("React.Children.only expected to receive a single React element child.");return G}};S0.Activity=f_;S0.Children=S_;S0.Component=Nz;S0.Fragment=M_;S0.Profiler=R_;S0.PureComponent=VY;S0.StrictMode=F_;S0.Suspense=K_;S0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=IG;S0.__COMPILER_RUNTIME={__proto__:null,c:function(G){return IG.H.useMemoCache(G)}};S0.cache=function(G){return function(){return G.apply(null,arguments)}};S0.cacheSignal=function(){return null};S0.cloneElement=function(G,Z,z){if(G===null||G===void 0)throw Error("The argument must be a React element, but you passed "+G+".");var J=HX({},G.props),B=G.key;if(Z!=null)for(Y in Z.key!==void 0&&(B=""+Z.key),Z)!WX.call(Z,Y)||Y==="key"||Y==="__self"||Y==="__source"||Y==="ref"&&Z.ref===void 0||(J[Y]=Z[Y]);var Y=arguments.length-2;if(Y===1)J.children=z;else if(1<Y){for(var j=Array(Y),H=0;H<Y;H++)j[H]=arguments[H+2];J.children=j}return KY(G.type,B,J)};S0.createContext=function(G){return G={$$typeof:V_,_currentValue:G,_currentValue2:G,_threadCount:0,Provider:null,Consumer:null},G.Provider=G,G.Consumer={$$typeof:w_,_context:G},G};S0.createElement=function(G,Z,z){var J,B={},Y=null;if(Z!=null)for(J in Z.key!==void 0&&(Y=""+Z.key),Z)WX.call(Z,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(B[J]=Z[J]);var j=arguments.length-2;if(j===1)B.children=z;else if(1<j){for(var H=Array(j),X=0;X<j;X++)H[X]=arguments[X+2];B.children=H}if(G&&G.defaultProps)for(J in j=G.defaultProps,j)B[J]===void 0&&(B[J]=j[J]);return KY(G,Y,B)};S0.createRef=function(){return{current:null}};S0.forwardRef=function(G){return{$$typeof:D_,render:G}};S0.isValidElement=IY;S0.lazy=function(G){return{$$typeof:YX,_payload:{_status:-1,_result:G},_init:x_}};S0.memo=function(G,Z){return{$$typeof:I_,type:G,compare:Z===void 0?null:Z}};S0.startTransition=function(G){var Z=IG.T,z={};IG.T=z;try{var J=G(),B=IG.S;B!==null&&B(z,J),typeof J==="object"&&J!==null&&typeof J.then==="function"&&J.then(RY,BX)}catch(Y){BX(Y)}finally{Z!==null&&z.types!==null&&(Z.types=z.types),IG.T=Z}};S0.unstable_useCacheRefresh=function(){return IG.H.useCacheRefresh()};S0.use=function(G){return IG.H.use(G)};S0.useActionState=function(G,Z,z){return IG.H.useActionState(G,Z,z)};S0.useCallback=function(G,Z){return IG.H.useCallback(G,Z)};S0.useContext=function(G){return IG.H.useContext(G)};S0.useDebugValue=function(){};S0.useDeferredValue=function(G,Z){return IG.H.useDeferredValue(G,Z)};S0.useEffect=function(G,Z){return IG.H.useEffect(G,Z)};S0.useEffectEvent=function(G){return IG.H.useEffectEvent(G)};S0.useId=function(){return IG.H.useId()};S0.useImperativeHandle=function(G,Z,z){return IG.H.useImperativeHandle(G,Z,z)};S0.useInsertionEffect=function(G,Z){return IG.H.useInsertionEffect(G,Z)};S0.useLayoutEffect=function(G,Z){return IG.H.useLayoutEffect(G,Z)};S0.useMemo=function(G,Z){return IG.H.useMemo(G,Z)};S0.useOptimistic=function(G,Z){return IG.H.useOptimistic(G,Z)};S0.useReducer=function(G,Z,z){return IG.H.useReducer(G,Z,z)};S0.useRef=function(G){return IG.H.useRef(G)};S0.useState=function(G){return IG.H.useState(G)};S0.useSyncExternalStore=function(G,Z,z){return IG.H.useSyncExternalStore(G,Z,z)};S0.useTransition=function(){return IG.H.useTransition()};S0.version="19.2.8"});var U7=K7((gM,AX)=>{AX.exports=UX()});var _X=K7((OZ)=>{var k_=U7();function QX(G){var Z="https://react.dev/errors/"+G;if(1<arguments.length){Z+="?args[]="+encodeURIComponent(arguments[1]);for(var z=2;z<arguments.length;z++)Z+="&args[]="+encodeURIComponent(arguments[z])}return"Minified React error #"+G+"; visit "+Z+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function X6(){}var LZ={d:{f:X6,r:function(){throw Error(QX(522))},D:X6,C:X6,L:X6,m:X6,X:X6,S:X6,M:X6},p:0,findDOMNode:null},b_=Symbol.for("react.portal");function P_(G,Z,z){var J=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:b_,key:J==null?null:""+J,children:G,containerInfo:Z,implementation:z}}var yJ=k_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function UB(G,Z){if(G==="font")return"";if(typeof Z==="string")return Z==="use-credentials"?Z:""}OZ.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=LZ;OZ.createPortal=function(G,Z){var z=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Z||Z.nodeType!==1&&Z.nodeType!==9&&Z.nodeType!==11)throw Error(QX(299));return P_(G,Z,null,z)};OZ.flushSync=function(G){var Z=yJ.T,z=LZ.p;try{if(yJ.T=null,LZ.p=2,G)return G()}finally{yJ.T=Z,LZ.p=z,LZ.d.f()}};OZ.preconnect=function(G,Z){typeof G==="string"&&(Z?(Z=Z.crossOrigin,Z=typeof Z==="string"?Z==="use-credentials"?Z:"":void 0):Z=null,LZ.d.C(G,Z))};OZ.prefetchDNS=function(G){typeof G==="string"&&LZ.d.D(G)};OZ.preinit=function(G,Z){if(typeof G==="string"&&Z&&typeof Z.as==="string"){var z=Z.as,J=UB(z,Z.crossOrigin),B=typeof Z.integrity==="string"?Z.integrity:void 0,Y=typeof Z.fetchPriority==="string"?Z.fetchPriority:void 0;z==="style"?LZ.d.S(G,typeof Z.precedence==="string"?Z.precedence:void 0,{crossOrigin:J,integrity:B,fetchPriority:Y}):z==="script"&&LZ.d.X(G,{crossOrigin:J,integrity:B,fetchPriority:Y,nonce:typeof Z.nonce==="string"?Z.nonce:void 0})}};OZ.preinitModule=function(G,Z){if(typeof G==="string")if(typeof Z==="object"&&Z!==null){if(Z.as==null||Z.as==="script"){var z=UB(Z.as,Z.crossOrigin);LZ.d.M(G,{crossOrigin:z,integrity:typeof Z.integrity==="string"?Z.integrity:void 0,nonce:typeof Z.nonce==="string"?Z.nonce:void 0})}}else Z==null&&LZ.d.M(G)};OZ.preload=function(G,Z){if(typeof G==="string"&&typeof Z==="object"&&Z!==null&&typeof Z.as==="string"){var z=Z.as,J=UB(z,Z.crossOrigin);LZ.d.L(G,z,{crossOrigin:J,integrity:typeof Z.integrity==="string"?Z.integrity:void 0,nonce:typeof Z.nonce==="string"?Z.nonce:void 0,type:typeof Z.type==="string"?Z.type:void 0,fetchPriority:typeof Z.fetchPriority==="string"?Z.fetchPriority:void 0,referrerPolicy:typeof Z.referrerPolicy==="string"?Z.referrerPolicy:void 0,imageSrcSet:typeof Z.imageSrcSet==="string"?Z.imageSrcSet:void 0,imageSizes:typeof Z.imageSizes==="string"?Z.imageSizes:void 0,media:typeof Z.media==="string"?Z.media:void 0})}};OZ.preloadModule=function(G,Z){if(typeof G==="string")if(Z){var z=UB(Z.as,Z.crossOrigin);LZ.d.m(G,{as:typeof Z.as==="string"&&Z.as!=="script"?Z.as:void 0,crossOrigin:z,integrity:typeof Z.integrity==="string"?Z.integrity:void 0})}else LZ.d.m(G)};OZ.requestFormReset=function(G){LZ.d.r(G)};OZ.unstable_batchedUpdates=function(G,Z){return G(Z)};OZ.useFormState=function(G,Z,z){return yJ.H.useFormState(G,Z,z)};OZ.useFormStatus=function(){return yJ.H.useHostTransitionStatus()};OZ.version="19.2.8"});var AB=K7((vM,OX)=>{function LX(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=="function")return;try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(LX)}catch(G){console.error(G)}}LX(),OX.exports=_X()});var FX=K7((QB)=>{var E_=Symbol.for("react.transitional.element"),h_=Symbol.for("react.fragment");function MX(G,Z,z){var J=null;if(z!==void 0&&(J=""+z),Z.key!==void 0&&(J=""+Z.key),"key"in Z){z={};for(var B in Z)B!=="key"&&(z[B]=Z[B])}else z=Z;return Z=z.ref,{$$typeof:E_,type:G,key:J,ref:Z!==void 0?Z:null,props:z}}QB.Fragment=h_;QB.jsx=MX;QB.jsxs=MX});var AZ=K7((mM,RX)=>{RX.exports=FX()});var Mq=K7((CG)=>{function oY(G,Z){var z=G.length;G.push(Z);G:for(;0<z;){var J=z-1>>>1,B=G[J];if(0<CB(B,Z))G[J]=Z,G[z]=B,z=J;else break G}}function T7(G){return G.length===0?null:G[0]}function bB(G){if(G.length===0)return null;var Z=G[0],z=G.pop();if(z!==Z){G[0]=z;G:for(var J=0,B=G.length,Y=B>>>1;J<Y;){var j=2*(J+1)-1,H=G[j],X=j+1,F=G[X];if(0>CB(H,z))X<B&&0>CB(F,H)?(G[J]=F,G[X]=z,J=X):(G[J]=H,G[j]=z,J=j);else if(X<B&&0>CB(F,z))G[J]=F,G[X]=z,J=X;else break G}}return Z}function CB(G,Z){var z=G.sortIndex-Z.sortIndex;return z!==0?z:G.id-Z.id}CG.unstable_now=void 0;if(typeof performance==="object"&&typeof performance.now==="function")aY=performance,CG.unstable_now=function(){return aY.now()};else xB=Date,nY=xB.now(),CG.unstable_now=function(){return xB.now()-nY};var aY,xB,nY,g7=[],W6=[],G1=1,sZ=null,QZ=3,tY=!1,oJ=!1,aJ=!1,G4=!1,Aq=typeof setTimeout==="function"?setTimeout:null,Qq=typeof clearTimeout==="function"?clearTimeout:null,Uq=typeof setImmediate<"u"?setImmediate:null;function SB(G){for(var Z=T7(W6);Z!==null;){if(Z.callback===null)bB(W6);else if(Z.startTime<=G)bB(W6),Z.sortIndex=Z.expirationTime,oY(g7,Z);else break;Z=T7(W6)}}function Z4(G){if(aJ=!1,SB(G),!oJ)if(T7(g7)!==null)oJ=!0,gz||(gz=!0,hz());else{var Z=T7(W6);Z!==null&&z4(Z4,Z.startTime-G)}}var gz=!1,nJ=-1,_q=5,Lq=-1;function Oq(){return G4?!0:CG.unstable_now()-Lq<_q?!1:!0}function rY(){if(G4=!1,gz){var G=CG.unstable_now();Lq=G;var Z=!0;try{G:{oJ=!1,aJ&&(aJ=!1,Qq(nJ),nJ=-1),tY=!0;var z=QZ;try{Z:{SB(G);for(sZ=T7(g7);sZ!==null&&!(sZ.expirationTime>G&&Oq());){var J=sZ.callback;if(typeof J==="function"){sZ.callback=null,QZ=sZ.priorityLevel;var B=J(sZ.expirationTime<=G);if(G=CG.unstable_now(),typeof B==="function"){sZ.callback=B,SB(G),Z=!0;break Z}sZ===T7(g7)&&bB(g7),SB(G)}else bB(g7);sZ=T7(g7)}if(sZ!==null)Z=!0;else{var Y=T7(W6);Y!==null&&z4(Z4,Y.startTime-G),Z=!1}}break G}finally{sZ=null,QZ=z,tY=!1}Z=void 0}}finally{Z?hz():gz=!1}}}var hz;if(typeof Uq==="function")hz=function(){Uq(rY)};else if(typeof MessageChannel<"u")kB=new MessageChannel,eY=kB.port2,kB.port1.onmessage=rY,hz=function(){eY.postMessage(null)};else hz=function(){Aq(rY,0)};var kB,eY;function z4(G,Z){nJ=Aq(function(){G(CG.unstable_now())},Z)}CG.unstable_IdlePriority=5;CG.unstable_ImmediatePriority=1;CG.unstable_LowPriority=4;CG.unstable_NormalPriority=3;CG.unstable_Profiling=null;CG.unstable_UserBlockingPriority=2;CG.unstable_cancelCallback=function(G){G.callback=null};CG.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_q=0<G?Math.floor(1000/G):5};CG.unstable_getCurrentPriorityLevel=function(){return QZ};CG.unstable_next=function(G){switch(QZ){case 1:case 2:case 3:var Z=3;break;default:Z=QZ}var z=QZ;QZ=Z;try{return G()}finally{QZ=z}};CG.unstable_requestPaint=function(){G4=!0};CG.unstable_runWithPriority=function(G,Z){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var z=QZ;QZ=G;try{return Z()}finally{QZ=z}};CG.unstable_scheduleCallback=function(G,Z,z){var J=CG.unstable_now();switch(typeof z==="object"&&z!==null?(z=z.delay,z=typeof z==="number"&&0<z?J+z:J):z=J,G){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5000}return B=z+B,G={id:G1++,callback:Z,priorityLevel:G,startTime:z,expirationTime:B,sortIndex:-1},z>J?(G.sortIndex=z,oY(W6,G),T7(g7)===null&&G===T7(W6)&&(aJ?(Qq(nJ),nJ=-1):aJ=!0,z4(Z4,z-J))):(G.sortIndex=B,oY(g7,G),oJ||tY||(oJ=!0,gz||(gz=!0,hz()))),G};CG.unstable_shouldYield=Oq;CG.unstable_wrapCallback=function(G){var Z=QZ;return function(){var z=QZ;QZ=Z;try{return G.apply(this,arguments)}finally{QZ=z}}}});var Rq=K7((lM,Fq)=>{Fq.exports=Mq()});var CQ=K7((ZY)=>{var GZ=Rq(),cW=U7(),Z1=AB();function h(G){var Z="https://react.dev/errors/"+G;if(1<arguments.length){Z+="?args[]="+encodeURIComponent(arguments[1]);for(var z=2;z<arguments.length;z++)Z+="&args[]="+encodeURIComponent(arguments[z])}return"Minified React error #"+G+"; visit "+Z+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function lW(G){return!(!G||G.nodeType!==1&&G.nodeType!==9&&G.nodeType!==11)}function u8(G){var Z=G,z=G;if(G.alternate)for(;Z.return;)Z=Z.return;else{G=Z;do Z=G,(Z.flags&4098)!==0&&(z=Z.return),G=Z.return;while(G)}return Z.tag===3?z:null}function pW(G){if(G.tag===13){var Z=G.memoizedState;if(Z===null&&(G=G.alternate,G!==null&&(Z=G.memoizedState)),Z!==null)return Z.dehydrated}return null}function iW(G){if(G.tag===31){var Z=G.memoizedState;if(Z===null&&(G=G.alternate,G!==null&&(Z=G.memoizedState)),Z!==null)return Z.dehydrated}return null}function wq(G){if(u8(G)!==G)throw Error(h(188))}function z1(G){var Z=G.alternate;if(!Z){if(Z=u8(G),Z===null)throw Error(h(188));return Z!==G?null:G}for(var z=G,J=Z;;){var B=z.return;if(B===null)break;var Y=B.alternate;if(Y===null){if(J=B.return,J!==null){z=J;continue}break}if(B.child===Y.child){for(Y=B.child;Y;){if(Y===z)return wq(B),G;if(Y===J)return wq(B),Z;Y=Y.sibling}throw Error(h(188))}if(z.return!==J.return)z=B,J=Y;else{for(var j=!1,H=B.child;H;){if(H===z){j=!0,z=B,J=Y;break}if(H===J){j=!0,J=B,z=Y;break}H=H.sibling}if(!j){for(H=Y.child;H;){if(H===z){j=!0,z=Y,J=B;break}if(H===J){j=!0,J=Y,z=B;break}H=H.sibling}if(!j)throw Error(h(189))}}if(z.alternate!==J)throw Error(h(190))}if(z.tag!==3)throw Error(h(188));return z.stateNode.current===z?G:Z}function sW(G){var Z=G.tag;if(Z===5||Z===26||Z===27||Z===6)return G;for(G=G.child;G!==null;){if(Z=sW(G),Z!==null)return Z;G=G.sibling}return null}var NG=Object.assign,J1=Symbol.for("react.element"),PB=Symbol.for("react.transitional.element"),B8=Symbol.for("react.portal"),cz=Symbol.for("react.fragment"),rW=Symbol.for("react.strict_mode"),E4=Symbol.for("react.profiler"),oW=Symbol.for("react.consumer"),p7=Symbol.for("react.context"),kj=Symbol.for("react.forward_ref"),h4=Symbol.for("react.suspense"),g4=Symbol.for("react.suspense_list"),bj=Symbol.for("react.memo"),U6=Symbol.for("react.lazy"),y4=Symbol.for("react.activity"),B1=Symbol.for("react.memo_cache_sentinel"),Vq=Symbol.iterator;function tJ(G){if(G===null||typeof G!=="object")return null;return G=Vq&&G[Vq]||G["@@iterator"],typeof G==="function"?G:null}var Y1=Symbol.for("react.client.reference");function v4(G){if(G==null)return null;if(typeof G==="function")return G.$$typeof===Y1?null:G.displayName||G.name||null;if(typeof G==="string")return G;switch(G){case cz:return"Fragment";case E4:return"Profiler";case rW:return"StrictMode";case h4:return"Suspense";case g4:return"SuspenseList";case y4:return"Activity"}if(typeof G==="object")switch(G.$$typeof){case B8:return"Portal";case p7:return G.displayName||"Context";case oW:return(G._context.displayName||"Context")+".Consumer";case kj:var Z=G.render;return G=G.displayName,G||(G=Z.displayName||Z.name||"",G=G!==""?"ForwardRef("+G+")":"ForwardRef"),G;case bj:return Z=G.displayName||null,Z!==null?Z:v4(G.type)||"Memo";case U6:Z=G._payload,G=G._init;try{return v4(G(Z))}catch(z){}}return null}var Y8=Array.isArray,K0=cW.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,YG=Z1.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Jz={pending:!1,data:null,method:null,action:null},u4=[],lz=-1;function S7(G){return{current:G}}function BZ(G){0>lz||(G.current=u4[lz],u4[lz]=null,lz--)}function KG(G,Z){lz++,u4[lz]=G.current,G.current=Z}var x7=S7(null),T8=S7(null),D6=S7(null),W9=S7(null);function U9(G,Z){switch(KG(D6,Z),KG(T8,G),KG(x7,null),Z.nodeType){case 9:case 11:G=(G=Z.documentElement)?(G=G.namespaceURI)?TW(G):0:0;break;default:if(G=Z.tagName,Z=Z.namespaceURI)Z=TW(Z),G=LQ(Z,G);else switch(G){case"svg":G=1;break;case"math":G=2;break;default:G=0}}BZ(x7),KG(x7,G)}function XJ(){BZ(x7),BZ(T8),BZ(D6)}function m4(G){G.memoizedState!==null&&KG(W9,G);var Z=x7.current,z=LQ(Z,G.type);Z!==z&&(KG(T8,G),KG(x7,z))}function A9(G){T8.current===G&&(BZ(x7),BZ(T8)),W9.current===G&&(BZ(W9),g8._currentValue=Jz)}var J4,Dq;function t6(G){if(J4===void 0)try{throw Error()}catch(z){var Z=z.stack.trim().match(/\n( *(at )?)/);J4=Z&&Z[1]||"",Dq=-1<z.stack.indexOf(`
    at`)?" (<anonymous>)":-1<z.stack.indexOf("@")?"@unknown:0:0":""}return`
`+J4+G+Dq}var B4=!1;function Y4(G,Z){if(!G||B4)return"";B4=!0;var z=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var J={DetermineComponentFrameRoot:function(){try{if(Z){var R=function(){throw Error()};if(Object.defineProperty(R.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==="object"&&Reflect.construct){try{Reflect.construct(R,[])}catch(D){var A=D}Reflect.construct(G,[],R)}else{try{R.call()}catch(D){A=D}G.call(R.prototype)}}else{try{throw Error()}catch(D){A=D}(R=G())&&typeof R.catch==="function"&&R.catch(function(){})}}catch(D){if(D&&A&&typeof D.stack==="string")return[D.stack,A.stack]}return[null,null]}};J.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var B=Object.getOwnPropertyDescriptor(J.DetermineComponentFrameRoot,"name");B&&B.configurable&&Object.defineProperty(J.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var Y=J.DetermineComponentFrameRoot(),j=Y[0],H=Y[1];if(j&&H){var X=j.split(`
`),F=H.split(`
`);for(B=J=0;J<X.length&&!X[J].includes("DetermineComponentFrameRoot");)J++;for(;B<F.length&&!F[B].includes("DetermineComponentFrameRoot");)B++;if(J===X.length||B===F.length)for(J=X.length-1,B=F.length-1;1<=J&&0<=B&&X[J]!==F[B];)B--;for(;1<=J&&0<=B;J--,B--)if(X[J]!==F[B]){if(J!==1||B!==1)do if(J--,B--,0>B||X[J]!==F[B]){var Q=`
`+X[J].replace(" at new "," at ");return G.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",G.displayName)),Q}while(1<=J&&0<=B);break}}}finally{B4=!1,Error.prepareStackTrace=z}return(z=G?G.displayName||G.name:"")?t6(z):""}function j1(G,Z){switch(G.tag){case 26:case 27:case 5:return t6(G.type);case 16:return t6("Lazy");case 13:return G.child!==Z&&Z!==null?t6("Suspense Fallback"):t6("Suspense");case 19:return t6("SuspenseList");case 0:case 15:return Y4(G.type,!1);case 11:return Y4(G.type.render,!1);case 1:return Y4(G.type,!0);case 31:return t6("Activity");default:return""}}function Kq(G){try{var Z="",z=null;do Z+=j1(G,z),z=G,G=G.return;while(G);return Z}catch(J){return`
Error generating stack: `+J.message+`
`+J.stack}}var d4=Object.prototype.hasOwnProperty,Pj=GZ.unstable_scheduleCallback,j4=GZ.unstable_cancelCallback,H1=GZ.unstable_shouldYield,X1=GZ.unstable_requestPaint,hZ=GZ.unstable_now,q1=GZ.unstable_getCurrentPriorityLevel,aW=GZ.unstable_ImmediatePriority,nW=GZ.unstable_UserBlockingPriority,Q9=GZ.unstable_NormalPriority,W1=GZ.unstable_LowPriority,tW=GZ.unstable_IdlePriority,U1=GZ.log,A1=GZ.unstable_setDisableYieldValue,m8=null,gZ=null;function M6(G){if(typeof U1==="function"&&A1(G),gZ&&typeof gZ.setStrictMode==="function")try{gZ.setStrictMode(m8,G)}catch(Z){}}var yZ=Math.clz32?Math.clz32:L1,Q1=Math.log,_1=Math.LN2;function L1(G){return G>>>=0,G===0?32:31-(Q1(G)/_1|0)|0}var EB=256,hB=262144,gB=4194304;function e6(G){var Z=G&42;if(Z!==0)return Z;switch(G&-G){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return G&261888;case 262144:case 524288:case 1048576:case 2097152:return G&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return G&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return G}}function v9(G,Z,z){var J=G.pendingLanes;if(J===0)return 0;var B=0,Y=G.suspendedLanes,j=G.pingedLanes;G=G.warmLanes;var H=J&134217727;return H!==0?(J=H&~Y,J!==0?B=e6(J):(j&=H,j!==0?B=e6(j):z||(z=H&~G,z!==0&&(B=e6(z))))):(H=J&~Y,H!==0?B=e6(H):j!==0?B=e6(j):z||(z=J&~G,z!==0&&(B=e6(z)))),B===0?0:Z!==0&&Z!==B&&(Z&Y)===0&&(Y=B&-B,z=Z&-Z,Y>=z||Y===32&&(z&4194048)!==0)?Z:B}function d8(G,Z){return(G.pendingLanes&~(G.suspendedLanes&~G.pingedLanes)&Z)===0}function O1(G,Z){switch(G){case 1:case 2:case 4:case 8:case 64:return Z+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return Z+5000;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function eW(){var G=gB;return gB<<=1,(gB&62914560)===0&&(gB=4194304),G}function H4(G){for(var Z=[],z=0;31>z;z++)Z.push(G);return Z}function c8(G,Z){G.pendingLanes|=Z,Z!==268435456&&(G.suspendedLanes=0,G.pingedLanes=0,G.warmLanes=0)}function M1(G,Z,z,J,B,Y){var j=G.pendingLanes;G.pendingLanes=z,G.suspendedLanes=0,G.pingedLanes=0,G.warmLanes=0,G.expiredLanes&=z,G.entangledLanes&=z,G.errorRecoveryDisabledLanes&=z,G.shellSuspendCounter=0;var{entanglements:H,expirationTimes:X,hiddenUpdates:F}=G;for(z=j&~z;0<z;){var Q=31-yZ(z),R=1<<Q;H[Q]=0,X[Q]=-1;var A=F[Q];if(A!==null)for(F[Q]=null,Q=0;Q<A.length;Q++){var D=A[Q];D!==null&&(D.lane&=-536870913)}z&=~R}J!==0&&GU(G,J,0),Y!==0&&B===0&&G.tag!==0&&(G.suspendedLanes|=Y&~(j&~Z))}function GU(G,Z,z){G.pendingLanes|=Z,G.suspendedLanes&=~Z;var J=31-yZ(Z);G.entangledLanes|=Z,G.entanglements[J]=G.entanglements[J]|1073741824|z&261930}function ZU(G,Z){var z=G.entangledLanes|=Z;for(G=G.entanglements;z;){var J=31-yZ(z),B=1<<J;B&Z|G[J]&Z&&(G[J]|=Z),z&=~B}}function zU(G,Z){var z=Z&-Z;return z=(z&42)!==0?1:Ej(z),(z&(G.suspendedLanes|Z))!==0?0:z}function Ej(G){switch(G){case 2:G=1;break;case 8:G=4;break;case 32:G=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:G=128;break;case 268435456:G=134217728;break;default:G=0}return G}function hj(G){return G&=-G,2<G?8<G?(G&134217727)!==0?32:268435456:8:2}function JU(){var G=YG.p;if(G!==0)return G;return G=window.event,G===void 0?32:TQ(G.type)}function Iq(G,Z){var z=YG.p;try{return YG.p=G,Z()}finally{YG.p=z}}var E6=Math.random().toString(36).slice(2),HZ="__reactFiber$"+E6,$Z="__reactProps$"+E6,RJ="__reactContainer$"+E6,c4="__reactEvents$"+E6,F1="__reactListeners$"+E6,R1="__reactHandles$"+E6,fq="__reactResources$"+E6,l8="__reactMarker$"+E6;function gj(G){delete G[HZ],delete G[$Z],delete G[c4],delete G[F1],delete G[R1]}function pz(G){var Z=G[HZ];if(Z)return Z;for(var z=G.parentNode;z;){if(Z=z[RJ]||z[HZ]){if(z=Z.alternate,Z.child!==null||z!==null&&z.child!==null)for(G=SW(G);G!==null;){if(z=G[HZ])return z;G=SW(G)}return Z}G=z,z=G.parentNode}return null}function wJ(G){if(G=G[HZ]||G[RJ]){var Z=G.tag;if(Z===5||Z===6||Z===13||Z===31||Z===26||Z===27||Z===3)return G}return null}function j8(G){var Z=G.tag;if(Z===5||Z===26||Z===27||Z===6)return G.stateNode;throw Error(h(33))}function ZJ(G){var Z=G[fq];return Z||(Z=G[fq]={hoistableStyles:new Map,hoistableScripts:new Map}),Z}function JZ(G){G[l8]=!0}var BU=new Set,YU={};function Qz(G,Z){qJ(G,Z),qJ(G+"Capture",Z)}function qJ(G,Z){YU[G]=Z;for(G=0;G<Z.length;G++)BU.add(Z[G])}var w1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Tq={},Nq={};function V1(G){if(d4.call(Nq,G))return!0;if(d4.call(Tq,G))return!1;if(w1.test(G))return Nq[G]=!0;return Tq[G]=!0,!1}function rB(G,Z,z){if(V1(Z))if(z===null)G.removeAttribute(Z);else{switch(typeof z){case"undefined":case"function":case"symbol":G.removeAttribute(Z);return;case"boolean":var J=Z.toLowerCase().slice(0,5);if(J!=="data-"&&J!=="aria-"){G.removeAttribute(Z);return}}G.setAttribute(Z,""+z)}}function yB(G,Z,z){if(z===null)G.removeAttribute(Z);else{switch(typeof z){case"undefined":case"function":case"symbol":case"boolean":G.removeAttribute(Z);return}G.setAttribute(Z,""+z)}}function y7(G,Z,z,J){if(J===null)G.removeAttribute(z);else{switch(typeof J){case"undefined":case"function":case"symbol":case"boolean":G.removeAttribute(z);return}G.setAttributeNS(Z,z,""+J)}}function oZ(G){switch(typeof G){case"bigint":case"boolean":case"number":case"string":case"undefined":return G;case"object":return G;default:return""}}function jU(G){var Z=G.type;return(G=G.nodeName)&&G.toLowerCase()==="input"&&(Z==="checkbox"||Z==="radio")}function D1(G,Z,z){var J=Object.getOwnPropertyDescriptor(G.constructor.prototype,Z);if(!G.hasOwnProperty(Z)&&typeof J<"u"&&typeof J.get==="function"&&typeof J.set==="function"){var{get:B,set:Y}=J;return Object.defineProperty(G,Z,{configurable:!0,get:function(){return B.call(this)},set:function(j){z=""+j,Y.call(this,j)}}),Object.defineProperty(G,Z,{enumerable:J.enumerable}),{getValue:function(){return z},setValue:function(j){z=""+j},stopTracking:function(){G._valueTracker=null,delete G[Z]}}}}function l4(G){if(!G._valueTracker){var Z=jU(G)?"checked":"value";G._valueTracker=D1(G,Z,""+G[Z])}}function HU(G){if(!G)return!1;var Z=G._valueTracker;if(!Z)return!0;var z=Z.getValue(),J="";return G&&(J=jU(G)?G.checked?"true":"false":G.value),G=J,G!==z?(Z.setValue(G),!0):!1}function _9(G){if(G=G||(typeof document<"u"?document:void 0),typeof G>"u")return null;try{return G.activeElement||G.body}catch(Z){return G.body}}var K1=/[\n"\\]/g;function tZ(G){return G.replace(K1,function(Z){return"\\"+Z.charCodeAt(0).toString(16)+" "})}function p4(G,Z,z,J,B,Y,j,H){if(G.name="",j!=null&&typeof j!=="function"&&typeof j!=="symbol"&&typeof j!=="boolean"?G.type=j:G.removeAttribute("type"),Z!=null)if(j==="number"){if(Z===0&&G.value===""||G.value!=Z)G.value=""+oZ(Z)}else G.value!==""+oZ(Z)&&(G.value=""+oZ(Z));else j!=="submit"&&j!=="reset"||G.removeAttribute("value");Z!=null?i4(G,j,oZ(Z)):z!=null?i4(G,j,oZ(z)):J!=null&&G.removeAttribute("value"),B==null&&Y!=null&&(G.defaultChecked=!!Y),B!=null&&(G.checked=B&&typeof B!=="function"&&typeof B!=="symbol"),H!=null&&typeof H!=="function"&&typeof H!=="symbol"&&typeof H!=="boolean"?G.name=""+oZ(H):G.removeAttribute("name")}function XU(G,Z,z,J,B,Y,j,H){if(Y!=null&&typeof Y!=="function"&&typeof Y!=="symbol"&&typeof Y!=="boolean"&&(G.type=Y),Z!=null||z!=null){if(!(Y!=="submit"&&Y!=="reset"||Z!==void 0&&Z!==null)){l4(G);return}z=z!=null?""+oZ(z):"",Z=Z!=null?""+oZ(Z):z,H||Z===G.value||(G.value=Z),G.defaultValue=Z}J=J!=null?J:B,J=typeof J!=="function"&&typeof J!=="symbol"&&!!J,G.checked=H?G.checked:!!J,G.defaultChecked=!!J,j!=null&&typeof j!=="function"&&typeof j!=="symbol"&&typeof j!=="boolean"&&(G.name=j),l4(G)}function i4(G,Z,z){Z==="number"&&_9(G.ownerDocument)===G||G.defaultValue===""+z||(G.defaultValue=""+z)}function zJ(G,Z,z,J){if(G=G.options,Z){Z={};for(var B=0;B<z.length;B++)Z["$"+z[B]]=!0;for(z=0;z<G.length;z++)B=Z.hasOwnProperty("$"+G[z].value),G[z].selected!==B&&(G[z].selected=B),B&&J&&(G[z].defaultSelected=!0)}else{z=""+oZ(z),Z=null;for(B=0;B<G.length;B++){if(G[B].value===z){G[B].selected=!0,J&&(G[B].defaultSelected=!0);return}Z!==null||G[B].disabled||(Z=G[B])}Z!==null&&(Z.selected=!0)}}function qU(G,Z,z){if(Z!=null&&(Z=""+oZ(Z),Z!==G.value&&(G.value=Z),z==null)){G.defaultValue!==Z&&(G.defaultValue=Z);return}G.defaultValue=z!=null?""+oZ(z):""}function WU(G,Z,z,J){if(Z==null){if(J!=null){if(z!=null)throw Error(h(92));if(Y8(J)){if(1<J.length)throw Error(h(93));J=J[0]}z=J}z==null&&(z=""),Z=z}z=oZ(Z),G.defaultValue=z,J=G.textContent,J===z&&J!==""&&J!==null&&(G.value=J),l4(G)}function WJ(G,Z){if(Z){var z=G.firstChild;if(z&&z===G.lastChild&&z.nodeType===3){z.nodeValue=Z;return}}G.textContent=Z}var I1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $q(G,Z,z){var J=Z.indexOf("--")===0;z==null||typeof z==="boolean"||z===""?J?G.setProperty(Z,""):Z==="float"?G.cssFloat="":G[Z]="":J?G.setProperty(Z,z):typeof z!=="number"||z===0||I1.has(Z)?Z==="float"?G.cssFloat=z:G[Z]=(""+z).trim():G[Z]=z+"px"}function UU(G,Z,z){if(Z!=null&&typeof Z!=="object")throw Error(h(62));if(G=G.style,z!=null){for(var J in z)!z.hasOwnProperty(J)||Z!=null&&Z.hasOwnProperty(J)||(J.indexOf("--")===0?G.setProperty(J,""):J==="float"?G.cssFloat="":G[J]="");for(var B in Z)J=Z[B],Z.hasOwnProperty(B)&&z[B]!==J&&$q(G,B,J)}else for(var Y in Z)Z.hasOwnProperty(Y)&&$q(G,Y,Z[Y])}function yj(G){if(G.indexOf("-")===-1)return!1;switch(G){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var f1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),T1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function oB(G){return T1.test(""+G)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":G}function i7(){}var s4=null;function vj(G){return G=G.target||G.srcElement||window,G.correspondingUseElement&&(G=G.correspondingUseElement),G.nodeType===3?G.parentNode:G}var iz=null,JJ=null;function Cq(G){var Z=wJ(G);if(Z&&(G=Z.stateNode)){var z=G[$Z]||null;G:switch(G=Z.stateNode,Z.type){case"input":if(p4(G,z.value,z.defaultValue,z.defaultValue,z.checked,z.defaultChecked,z.type,z.name),Z=z.name,z.type==="radio"&&Z!=null){for(z=G;z.parentNode;)z=z.parentNode;z=z.querySelectorAll('input[name="'+tZ(""+Z)+'"][type="radio"]');for(Z=0;Z<z.length;Z++){var J=z[Z];if(J!==G&&J.form===G.form){var B=J[$Z]||null;if(!B)throw Error(h(90));p4(J,B.value,B.defaultValue,B.defaultValue,B.checked,B.defaultChecked,B.type,B.name)}}for(Z=0;Z<z.length;Z++)J=z[Z],J.form===G.form&&HU(J)}break G;case"textarea":qU(G,z.value,z.defaultValue);break G;case"select":Z=z.value,Z!=null&&zJ(G,!!z.multiple,Z,!1)}}}var X4=!1;function AU(G,Z,z){if(X4)return G(Z,z);X4=!0;try{var J=G(Z);return J}finally{if(X4=!1,iz!==null||JJ!==null){if(n9(),iz&&(Z=iz,G=JJ,JJ=iz=null,Cq(Z),G))for(Z=0;Z<G.length;Z++)Cq(G[Z])}}}function N8(G,Z){var z=G.stateNode;if(z===null)return null;var J=z[$Z]||null;if(J===null)return null;z=J[Z];G:switch(Z){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(J=!J.disabled)||(G=G.type,J=!(G==="button"||G==="input"||G==="select"||G==="textarea")),G=!J;break G;default:G=!1}if(G)return null;if(z&&typeof z!=="function")throw Error(h(231,Z,typeof z));return z}var n7=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),r4=!1;if(n7)try{Gz={},Object.defineProperty(Gz,"passive",{get:function(){r4=!0}}),window.addEventListener("test",Gz,Gz),window.removeEventListener("test",Gz,Gz)}catch(G){r4=!1}var Gz,F6=null,uj=null,aB=null;function QU(){if(aB)return aB;var G,Z=uj,z=Z.length,J,B="value"in F6?F6.value:F6.textContent,Y=B.length;for(G=0;G<z&&Z[G]===B[G];G++);var j=z-G;for(J=1;J<=j&&Z[z-J]===B[Y-J];J++);return aB=B.slice(G,1<J?1-J:void 0)}function nB(G){var Z=G.keyCode;return"charCode"in G?(G=G.charCode,G===0&&Z===13&&(G=13)):G=Z,G===10&&(G=13),32<=G||G===13?G:0}function vB(){return!0}function xq(){return!1}function CZ(G){function Z(z,J,B,Y,j){this._reactName=z,this._targetInst=B,this.type=J,this.nativeEvent=Y,this.target=j,this.currentTarget=null;for(var H in G)G.hasOwnProperty(H)&&(z=G[H],this[H]=z?z(Y):Y[H]);return this.isDefaultPrevented=(Y.defaultPrevented!=null?Y.defaultPrevented:Y.returnValue===!1)?vB:xq,this.isPropagationStopped=xq,this}return NG(Z.prototype,{preventDefault:function(){this.defaultPrevented=!0;var z=this.nativeEvent;z&&(z.preventDefault?z.preventDefault():typeof z.returnValue!=="unknown"&&(z.returnValue=!1),this.isDefaultPrevented=vB)},stopPropagation:function(){var z=this.nativeEvent;z&&(z.stopPropagation?z.stopPropagation():typeof z.cancelBubble!=="unknown"&&(z.cancelBubble=!0),this.isPropagationStopped=vB)},persist:function(){},isPersistent:vB}),Z}var _z={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(G){return G.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},u9=CZ(_z),p8=NG({},_z,{view:0,detail:0}),N1=CZ(p8),q4,W4,eJ,m9=NG({},p8,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mj,button:0,buttons:0,relatedTarget:function(G){return G.relatedTarget===void 0?G.fromElement===G.srcElement?G.toElement:G.fromElement:G.relatedTarget},movementX:function(G){if("movementX"in G)return G.movementX;return G!==eJ&&(eJ&&G.type==="mousemove"?(q4=G.screenX-eJ.screenX,W4=G.screenY-eJ.screenY):W4=q4=0,eJ=G),q4},movementY:function(G){return"movementY"in G?G.movementY:W4}}),Sq=CZ(m9),$1=NG({},m9,{dataTransfer:0}),C1=CZ($1),x1=NG({},p8,{relatedTarget:0}),U4=CZ(x1),S1=NG({},_z,{animationName:0,elapsedTime:0,pseudoElement:0}),k1=CZ(S1),b1=NG({},_z,{clipboardData:function(G){return"clipboardData"in G?G.clipboardData:window.clipboardData}}),P1=CZ(b1),E1=NG({},_z,{data:0}),kq=CZ(E1),h1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},g1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},y1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function v1(G){var Z=this.nativeEvent;return Z.getModifierState?Z.getModifierState(G):(G=y1[G])?!!Z[G]:!1}function mj(){return v1}var u1=NG({},p8,{key:function(G){if(G.key){var Z=h1[G.key]||G.key;if(Z!=="Unidentified")return Z}return G.type==="keypress"?(G=nB(G),G===13?"Enter":String.fromCharCode(G)):G.type==="keydown"||G.type==="keyup"?g1[G.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mj,charCode:function(G){return G.type==="keypress"?nB(G):0},keyCode:function(G){return G.type==="keydown"||G.type==="keyup"?G.keyCode:0},which:function(G){return G.type==="keypress"?nB(G):G.type==="keydown"||G.type==="keyup"?G.keyCode:0}}),m1=CZ(u1),d1=NG({},m9,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bq=CZ(d1),c1=NG({},p8,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mj}),l1=CZ(c1),p1=NG({},_z,{propertyName:0,elapsedTime:0,pseudoElement:0}),i1=CZ(p1),s1=NG({},m9,{deltaX:function(G){return"deltaX"in G?G.deltaX:("wheelDeltaX"in G)?-G.wheelDeltaX:0},deltaY:function(G){return"deltaY"in G?G.deltaY:("wheelDeltaY"in G)?-G.wheelDeltaY:("wheelDelta"in G)?-G.wheelDelta:0},deltaZ:0,deltaMode:0}),r1=CZ(s1),o1=NG({},_z,{newState:0,oldState:0}),a1=CZ(o1),n1=[9,13,27,32],dj=n7&&"CompositionEvent"in window,Q8=null;n7&&"documentMode"in document&&(Q8=document.documentMode);var t1=n7&&"TextEvent"in window&&!Q8,_U=n7&&(!dj||Q8&&8<Q8&&11>=Q8),Pq=String.fromCharCode(32),Eq=!1;function LU(G,Z){switch(G){case"keyup":return n1.indexOf(Z.keyCode)!==-1;case"keydown":return Z.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function OU(G){return G=G.detail,typeof G==="object"&&"data"in G?G.data:null}var sz=!1;function e1(G,Z){switch(G){case"compositionend":return OU(Z);case"keypress":if(Z.which!==32)return null;return Eq=!0,Pq;case"textInput":return G=Z.data,G===Pq&&Eq?null:G;default:return null}}function GO(G,Z){if(sz)return G==="compositionend"||!dj&&LU(G,Z)?(G=QU(),aB=uj=F6=null,sz=!1,G):null;switch(G){case"paste":return null;case"keypress":if(!(Z.ctrlKey||Z.altKey||Z.metaKey)||Z.ctrlKey&&Z.altKey){if(Z.char&&1<Z.char.length)return Z.char;if(Z.which)return String.fromCharCode(Z.which)}return null;case"compositionend":return _U&&Z.locale!=="ko"?null:Z.data;default:return null}}var ZO={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hq(G){var Z=G&&G.nodeName&&G.nodeName.toLowerCase();return Z==="input"?!!ZO[G.type]:Z==="textarea"?!0:!1}function MU(G,Z,z,J){iz?JJ?JJ.push(J):JJ=[J]:iz=J,Z=k9(Z,"onChange"),0<Z.length&&(z=new u9("onChange","change",null,z,J),G.push({event:z,listeners:Z}))}var _8=null,$8=null;function zO(G){AQ(G,0)}function d9(G){var Z=j8(G);if(HU(Z))return G}function gq(G,Z){if(G==="change")return Z}var FU=!1;if(n7){if(n7){if(X8="oninput"in document,!X8)tB=document.createElement("div"),tB.setAttribute("oninput","return;"),X8=typeof tB.oninput==="function";H8=X8}else H8=!1;FU=H8&&(!document.documentMode||9<document.documentMode)}var H8,X8,tB;function yq(){_8&&(_8.detachEvent("onpropertychange",RU),$8=_8=null)}function RU(G){if(G.propertyName==="value"&&d9($8)){var Z=[];MU(Z,$8,G,vj(G)),AU(zO,Z)}}function JO(G,Z,z){G==="focusin"?(yq(),_8=Z,$8=z,_8.attachEvent("onpropertychange",RU)):G==="focusout"&&yq()}function BO(G){if(G==="selectionchange"||G==="keyup"||G==="keydown")return d9($8)}function YO(G,Z){if(G==="click")return d9(Z)}function jO(G,Z){if(G==="input"||G==="change")return d9(Z)}function HO(G,Z){return G===Z&&(G!==0||1/G===1/Z)||G!==G&&Z!==Z}var uZ=typeof Object.is==="function"?Object.is:HO;function C8(G,Z){if(uZ(G,Z))return!0;if(typeof G!=="object"||G===null||typeof Z!=="object"||Z===null)return!1;var z=Object.keys(G),J=Object.keys(Z);if(z.length!==J.length)return!1;for(J=0;J<z.length;J++){var B=z[J];if(!d4.call(Z,B)||!uZ(G[B],Z[B]))return!1}return!0}function vq(G){for(;G&&G.firstChild;)G=G.firstChild;return G}function uq(G,Z){var z=vq(G);G=0;for(var J;z;){if(z.nodeType===3){if(J=G+z.textContent.length,G<=Z&&J>=Z)return{node:z,offset:Z-G};G=J}G:{for(;z;){if(z.nextSibling){z=z.nextSibling;break G}z=z.parentNode}z=void 0}z=vq(z)}}function wU(G,Z){return G&&Z?G===Z?!0:G&&G.nodeType===3?!1:Z&&Z.nodeType===3?wU(G,Z.parentNode):("contains"in G)?G.contains(Z):G.compareDocumentPosition?!!(G.compareDocumentPosition(Z)&16):!1:!1}function VU(G){G=G!=null&&G.ownerDocument!=null&&G.ownerDocument.defaultView!=null?G.ownerDocument.defaultView:window;for(var Z=_9(G.document);Z instanceof G.HTMLIFrameElement;){try{var z=typeof Z.contentWindow.location.href==="string"}catch(J){z=!1}if(z)G=Z.contentWindow;else break;Z=_9(G.document)}return Z}function cj(G){var Z=G&&G.nodeName&&G.nodeName.toLowerCase();return Z&&(Z==="input"&&(G.type==="text"||G.type==="search"||G.type==="tel"||G.type==="url"||G.type==="password")||Z==="textarea"||G.contentEditable==="true")}var XO=n7&&"documentMode"in document&&11>=document.documentMode,rz=null,o4=null,L8=null,a4=!1;function mq(G,Z,z){var J=z.window===z?z.document:z.nodeType===9?z:z.ownerDocument;a4||rz==null||rz!==_9(J)||(J=rz,("selectionStart"in J)&&cj(J)?J={start:J.selectionStart,end:J.selectionEnd}:(J=(J.ownerDocument&&J.ownerDocument.defaultView||window).getSelection(),J={anchorNode:J.anchorNode,anchorOffset:J.anchorOffset,focusNode:J.focusNode,focusOffset:J.focusOffset}),L8&&C8(L8,J)||(L8=J,J=k9(o4,"onSelect"),0<J.length&&(Z=new u9("onSelect","select",null,Z,z),G.push({event:Z,listeners:J}),Z.target=rz)))}function n6(G,Z){var z={};return z[G.toLowerCase()]=Z.toLowerCase(),z["Webkit"+G]="webkit"+Z,z["Moz"+G]="moz"+Z,z}var oz={animationend:n6("Animation","AnimationEnd"),animationiteration:n6("Animation","AnimationIteration"),animationstart:n6("Animation","AnimationStart"),transitionrun:n6("Transition","TransitionRun"),transitionstart:n6("Transition","TransitionStart"),transitioncancel:n6("Transition","TransitionCancel"),transitionend:n6("Transition","TransitionEnd")},A4={},DU={};n7&&(DU=document.createElement("div").style,("AnimationEvent"in window)||(delete oz.animationend.animation,delete oz.animationiteration.animation,delete oz.animationstart.animation),("TransitionEvent"in window)||delete oz.transitionend.transition);function Lz(G){if(A4[G])return A4[G];if(!oz[G])return G;var Z=oz[G],z;for(z in Z)if(Z.hasOwnProperty(z)&&z in DU)return A4[G]=Z[z];return G}var KU=Lz("animationend"),IU=Lz("animationiteration"),fU=Lz("animationstart"),qO=Lz("transitionrun"),WO=Lz("transitionstart"),UO=Lz("transitioncancel"),TU=Lz("transitionend"),NU=new Map,n4="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");n4.push("scrollEnd");function L7(G,Z){NU.set(G,Z),Qz(Z,[G])}var L9=typeof reportError==="function"?reportError:function(G){if(typeof window==="object"&&typeof window.ErrorEvent==="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof G==="object"&&G!==null&&typeof G.message==="string"?String(G.message):String(G),error:G});if(!window.dispatchEvent(Z))return}else if(typeof process==="object"&&typeof process.emit==="function"){process.emit("uncaughtException",G);return}console.error(G)},rZ=[],az=0,lj=0;function c9(){for(var G=az,Z=lj=az=0;Z<G;){var z=rZ[Z];rZ[Z++]=null;var J=rZ[Z];rZ[Z++]=null;var B=rZ[Z];rZ[Z++]=null;var Y=rZ[Z];if(rZ[Z++]=null,J!==null&&B!==null){var j=J.pending;j===null?B.next=B:(B.next=j.next,j.next=B),J.pending=B}Y!==0&&$U(z,B,Y)}}function l9(G,Z,z,J){rZ[az++]=G,rZ[az++]=Z,rZ[az++]=z,rZ[az++]=J,lj|=J,G.lanes|=J,G=G.alternate,G!==null&&(G.lanes|=J)}function pj(G,Z,z,J){return l9(G,Z,z,J),O9(G)}function Oz(G,Z){return l9(G,null,null,Z),O9(G)}function $U(G,Z,z){G.lanes|=z;var J=G.alternate;J!==null&&(J.lanes|=z);for(var B=!1,Y=G.return;Y!==null;)Y.childLanes|=z,J=Y.alternate,J!==null&&(J.childLanes|=z),Y.tag===22&&(G=Y.stateNode,G===null||G._visibility&1||(B=!0)),G=Y,Y=Y.return;return G.tag===3?(Y=G.stateNode,B&&Z!==null&&(B=31-yZ(z),G=Y.hiddenUpdates,J=G[B],J===null?G[B]=[Z]:J.push(Z),Z.lane=z|536870912),Y):null}function O9(G){if(50<I8)throw I8=0,Fj=null,Error(h(185));for(var Z=G.return;Z!==null;)G=Z,Z=G.return;return G.tag===3?G.stateNode:null}var nz={};function AO(G,Z,z,J){this.tag=G,this.key=z,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=Z,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=J,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function PZ(G,Z,z,J){return new AO(G,Z,z,J)}function ij(G){return G=G.prototype,!(!G||!G.isReactComponent)}function r7(G,Z){var z=G.alternate;return z===null?(z=PZ(G.tag,Z,G.key,G.mode),z.elementType=G.elementType,z.type=G.type,z.stateNode=G.stateNode,z.alternate=G,G.alternate=z):(z.pendingProps=Z,z.type=G.type,z.flags=0,z.subtreeFlags=0,z.deletions=null),z.flags=G.flags&65011712,z.childLanes=G.childLanes,z.lanes=G.lanes,z.child=G.child,z.memoizedProps=G.memoizedProps,z.memoizedState=G.memoizedState,z.updateQueue=G.updateQueue,Z=G.dependencies,z.dependencies=Z===null?null:{lanes:Z.lanes,firstContext:Z.firstContext},z.sibling=G.sibling,z.index=G.index,z.ref=G.ref,z.refCleanup=G.refCleanup,z}function CU(G,Z){G.flags&=65011714;var z=G.alternate;return z===null?(G.childLanes=0,G.lanes=Z,G.child=null,G.subtreeFlags=0,G.memoizedProps=null,G.memoizedState=null,G.updateQueue=null,G.dependencies=null,G.stateNode=null):(G.childLanes=z.childLanes,G.lanes=z.lanes,G.child=z.child,G.subtreeFlags=0,G.deletions=null,G.memoizedProps=z.memoizedProps,G.memoizedState=z.memoizedState,G.updateQueue=z.updateQueue,G.type=z.type,Z=z.dependencies,G.dependencies=Z===null?null:{lanes:Z.lanes,firstContext:Z.firstContext}),G}function eB(G,Z,z,J,B,Y){var j=0;if(J=G,typeof G==="function")ij(G)&&(j=1);else if(typeof G==="string")j=LM(G,z,x7.current)?26:G==="html"||G==="head"||G==="body"?27:5;else G:switch(G){case y4:return G=PZ(31,z,Z,B),G.elementType=y4,G.lanes=Y,G;case cz:return Bz(z.children,B,Y,Z);case rW:j=8,B|=24;break;case E4:return G=PZ(12,z,Z,B|2),G.elementType=E4,G.lanes=Y,G;case h4:return G=PZ(13,z,Z,B),G.elementType=h4,G.lanes=Y,G;case g4:return G=PZ(19,z,Z,B),G.elementType=g4,G.lanes=Y,G;default:if(typeof G==="object"&&G!==null)switch(G.$$typeof){case p7:j=10;break G;case oW:j=9;break G;case kj:j=11;break G;case bj:j=14;break G;case U6:j=16,J=null;break G}j=29,z=Error(h(130,G===null?"null":typeof G,"")),J=null}return Z=PZ(j,z,Z,B),Z.elementType=G,Z.type=J,Z.lanes=Y,Z}function Bz(G,Z,z,J){return G=PZ(7,G,J,Z),G.lanes=z,G}function Q4(G,Z,z){return G=PZ(6,G,null,Z),G.lanes=z,G}function xU(G){var Z=PZ(18,null,null,0);return Z.stateNode=G,Z}function _4(G,Z,z){return Z=PZ(4,G.children!==null?G.children:[],G.key,Z),Z.lanes=z,Z.stateNode={containerInfo:G.containerInfo,pendingChildren:null,implementation:G.implementation},Z}var dq=new WeakMap;function eZ(G,Z){if(typeof G==="object"&&G!==null){var z=dq.get(G);if(z!==void 0)return z;return Z={value:G,source:Z,stack:Kq(Z)},dq.set(G,Z),Z}return{value:G,source:Z,stack:Kq(Z)}}var tz=[],ez=0,M9=null,x8=0,aZ=[],nZ=0,S6=null,N7=1,$7="";function c7(G,Z){tz[ez++]=x8,tz[ez++]=M9,M9=G,x8=Z}function SU(G,Z,z){aZ[nZ++]=N7,aZ[nZ++]=$7,aZ[nZ++]=S6,S6=G;var J=N7;G=$7;var B=32-yZ(J)-1;J&=~(1<<B),z+=1;var Y=32-yZ(Z)+B;if(30<Y){var j=B-B%5;Y=(J&(1<<j)-1).toString(32),J>>=j,B-=j,N7=1<<32-yZ(Z)+B|z<<B|J,$7=Y+G}else N7=1<<Y|z<<B|J,$7=G}function sj(G){G.return!==null&&(c7(G,1),SU(G,1,0))}function rj(G){for(;G===M9;)M9=tz[--ez],tz[ez]=null,x8=tz[--ez],tz[ez]=null;for(;G===S6;)S6=aZ[--nZ],aZ[nZ]=null,$7=aZ[--nZ],aZ[nZ]=null,N7=aZ[--nZ],aZ[nZ]=null}function kU(G,Z){aZ[nZ++]=N7,aZ[nZ++]=$7,aZ[nZ++]=S6,N7=Z.id,$7=Z.overflow,S6=G}var XZ=null,TG=null,i0=!1,K6=null,G7=!1,t4=Error(h(519));function k6(G){var Z=Error(h(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw S8(eZ(Z,G)),t4}function cq(G){var{stateNode:Z,type:z,memoizedProps:J}=G;switch(Z[HZ]=G,Z[$Z]=J,z){case"dialog":m0("cancel",Z),m0("close",Z);break;case"iframe":case"object":case"embed":m0("load",Z);break;case"video":case"audio":for(z=0;z<E8.length;z++)m0(E8[z],Z);break;case"source":m0("error",Z);break;case"img":case"image":case"link":m0("error",Z),m0("load",Z);break;case"details":m0("toggle",Z);break;case"input":m0("invalid",Z),XU(Z,J.value,J.defaultValue,J.checked,J.defaultChecked,J.type,J.name,!0);break;case"select":m0("invalid",Z);break;case"textarea":m0("invalid",Z),WU(Z,J.value,J.defaultValue,J.children)}z=J.children,typeof z!=="string"&&typeof z!=="number"&&typeof z!=="bigint"||Z.textContent===""+z||J.suppressHydrationWarning===!0||_Q(Z.textContent,z)?(J.popover!=null&&(m0("beforetoggle",Z),m0("toggle",Z)),J.onScroll!=null&&m0("scroll",Z),J.onScrollEnd!=null&&m0("scrollend",Z),J.onClick!=null&&(Z.onclick=i7),Z=!0):Z=!1,Z||k6(G,!0)}function lq(G){for(XZ=G.return;XZ;)switch(XZ.tag){case 5:case 31:case 13:G7=!1;return;case 27:case 3:G7=!0;return;default:XZ=XZ.return}}function yz(G){if(G!==XZ)return!1;if(!i0)return lq(G),i0=!0,!1;var Z=G.tag,z;if(z=Z!==3&&Z!==27){if(z=Z===5)z=G.type,z=!(z!=="form"&&z!=="button")||fj(G.type,G.memoizedProps);z=!z}if(z&&TG&&k6(G),lq(G),Z===13){if(G=G.memoizedState,G=G!==null?G.dehydrated:null,!G)throw Error(h(317));TG=xW(G)}else if(Z===31){if(G=G.memoizedState,G=G!==null?G.dehydrated:null,!G)throw Error(h(317));TG=xW(G)}else Z===27?(Z=TG,h6(G.type)?(G=Cj,Cj=null,TG=G):TG=Z):TG=XZ?z7(G.stateNode.nextSibling):null;return!0}function Xz(){TG=XZ=null,i0=!1}function L4(){var G=K6;return G!==null&&(TZ===null?TZ=G:TZ.push.apply(TZ,G),K6=null),G}function S8(G){K6===null?K6=[G]:K6.push(G)}var e4=S7(null),Mz=null,s7=null;function Q6(G,Z,z){KG(e4,Z._currentValue),Z._currentValue=z}function o7(G){G._currentValue=e4.current,BZ(e4)}function Gj(G,Z,z){for(;G!==null;){var J=G.alternate;if((G.childLanes&Z)!==Z?(G.childLanes|=Z,J!==null&&(J.childLanes|=Z)):J!==null&&(J.childLanes&Z)!==Z&&(J.childLanes|=Z),G===z)break;G=G.return}}function Zj(G,Z,z,J){var B=G.child;B!==null&&(B.return=G);for(;B!==null;){var Y=B.dependencies;if(Y!==null){var j=B.child;Y=Y.firstContext;G:for(;Y!==null;){var H=Y;Y=B;for(var X=0;X<Z.length;X++)if(H.context===Z[X]){Y.lanes|=z,H=Y.alternate,H!==null&&(H.lanes|=z),Gj(Y.return,z,G),J||(j=null);break G}Y=H.next}}else if(B.tag===18){if(j=B.return,j===null)throw Error(h(341));j.lanes|=z,Y=j.alternate,Y!==null&&(Y.lanes|=z),Gj(j,z,G),j=null}else j=B.child;if(j!==null)j.return=B;else for(j=B;j!==null;){if(j===G){j=null;break}if(B=j.sibling,B!==null){B.return=j.return,j=B;break}j=j.return}B=j}}function VJ(G,Z,z,J){G=null;for(var B=Z,Y=!1;B!==null;){if(!Y){if((B.flags&524288)!==0)Y=!0;else if((B.flags&262144)!==0)break}if(B.tag===10){var j=B.alternate;if(j===null)throw Error(h(387));if(j=j.memoizedProps,j!==null){var H=B.type;uZ(B.pendingProps.value,j.value)||(G!==null?G.push(H):G=[H])}}else if(B===W9.current){if(j=B.alternate,j===null)throw Error(h(387));j.memoizedState.memoizedState!==B.memoizedState.memoizedState&&(G!==null?G.push(g8):G=[g8])}B=B.return}G!==null&&Zj(Z,G,z,J),Z.flags|=262144}function F9(G){for(G=G.firstContext;G!==null;){if(!uZ(G.context._currentValue,G.memoizedValue))return!0;G=G.next}return!1}function qz(G){Mz=G,s7=null,G=G.dependencies,G!==null&&(G.firstContext=null)}function qZ(G){return bU(Mz,G)}function uB(G,Z){return Mz===null&&qz(G),bU(G,Z)}function bU(G,Z){var z=Z._currentValue;if(Z={context:Z,memoizedValue:z,next:null},s7===null){if(G===null)throw Error(h(308));s7=Z,G.dependencies={lanes:0,firstContext:Z},G.flags|=524288}else s7=s7.next=Z;return z}var QO=typeof AbortController<"u"?AbortController:function(){var G=[],Z=this.signal={aborted:!1,addEventListener:function(z,J){G.push(J)}};this.abort=function(){Z.aborted=!0,G.forEach(function(z){return z()})}},_O=GZ.unstable_scheduleCallback,LO=GZ.unstable_NormalPriority,oG={$$typeof:p7,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function oj(){return{controller:new QO,data:new Map,refCount:0}}function i8(G){G.refCount--,G.refCount===0&&_O(LO,function(){G.controller.abort()})}var O8=null,zj=0,UJ=0,BJ=null;function OO(G,Z){if(O8===null){var z=O8=[];zj=0,UJ=wH(),BJ={status:"pending",value:void 0,then:function(J){z.push(J)}}}return zj++,Z.then(pq,pq),Z}function pq(){if(--zj===0&&O8!==null){BJ!==null&&(BJ.status="fulfilled");var G=O8;O8=null,UJ=0,BJ=null;for(var Z=0;Z<G.length;Z++)(0,G[Z])()}}function MO(G,Z){var z=[],J={status:"pending",value:null,reason:null,then:function(B){z.push(B)}};return G.then(function(){J.status="fulfilled",J.value=Z;for(var B=0;B<z.length;B++)(0,z[B])(Z)},function(B){J.status="rejected",J.reason=B;for(B=0;B<z.length;B++)(0,z[B])(void 0)}),J}var iq=K0.S;K0.S=function(G,Z){sA=hZ(),typeof Z==="object"&&Z!==null&&typeof Z.then==="function"&&OO(G,Z),iq!==null&&iq(G,Z)};var Yz=S7(null);function aj(){var G=Yz.current;return G!==null?G:wG.pooledCache}function G9(G,Z){Z===null?KG(Yz,Yz.current):KG(Yz,Z.pool)}function PU(){var G=aj();return G===null?null:{parent:oG._currentValue,pool:G}}var DJ=Error(h(460)),nj=Error(h(474)),p9=Error(h(542)),R9={then:function(){}};function sq(G){return G=G.status,G==="fulfilled"||G==="rejected"}function EU(G,Z,z){switch(z=G[z],z===void 0?G.push(Z):z!==Z&&(Z.then(i7,i7),Z=z),Z.status){case"fulfilled":return Z.value;case"rejected":throw G=Z.reason,oq(G),G;default:if(typeof Z.status==="string")Z.then(i7,i7);else{if(G=wG,G!==null&&100<G.shellSuspendCounter)throw Error(h(482));G=Z,G.status="pending",G.then(function(J){if(Z.status==="pending"){var B=Z;B.status="fulfilled",B.value=J}},function(J){if(Z.status==="pending"){var B=Z;B.status="rejected",B.reason=J}})}switch(Z.status){case"fulfilled":return Z.value;case"rejected":throw G=Z.reason,oq(G),G}throw jz=Z,DJ}}function Zz(G){try{var Z=G._init;return Z(G._payload)}catch(z){if(z!==null&&typeof z==="object"&&typeof z.then==="function")throw jz=z,DJ;throw z}}var jz=null;function rq(){if(jz===null)throw Error(h(459));var G=jz;return jz=null,G}function oq(G){if(G===DJ||G===p9)throw Error(h(483))}var YJ=null,k8=0;function mB(G){var Z=k8;return k8+=1,YJ===null&&(YJ=[]),EU(YJ,G,Z)}function G8(G,Z){Z=Z.props.ref,G.ref=Z!==void 0?Z:null}function dB(G,Z){if(Z.$$typeof===J1)throw Error(h(525));throw G=Object.prototype.toString.call(Z),Error(h(31,G==="[object Object]"?"object with keys {"+Object.keys(Z).join(", ")+"}":G))}function hU(G){function Z(_,M){if(G){var K=_.deletions;K===null?(_.deletions=[M],_.flags|=16):K.push(M)}}function z(_,M){if(!G)return null;for(;M!==null;)Z(_,M),M=M.sibling;return null}function J(_){for(var M=new Map;_!==null;)_.key!==null?M.set(_.key,_):M.set(_.index,_),_=_.sibling;return M}function B(_,M){return _=r7(_,M),_.index=0,_.sibling=null,_}function Y(_,M,K){if(_.index=K,!G)return _.flags|=1048576,M;if(K=_.alternate,K!==null)return K=K.index,K<M?(_.flags|=67108866,M):K;return _.flags|=67108866,M}function j(_){return G&&_.alternate===null&&(_.flags|=67108866),_}function H(_,M,K,N){if(M===null||M.tag!==6)return M=Q4(K,_.mode,N),M.return=_,M;return M=B(M,K),M.return=_,M}function X(_,M,K,N){var p=K.type;if(p===cz)return Q(_,M,K.props.children,N,K.key);if(M!==null&&(M.elementType===p||typeof p==="object"&&p!==null&&p.$$typeof===U6&&Zz(p)===M.type))return M=B(M,K.props),G8(M,K),M.return=_,M;return M=eB(K.type,K.key,K.props,null,_.mode,N),G8(M,K),M.return=_,M}function F(_,M,K,N){if(M===null||M.tag!==4||M.stateNode.containerInfo!==K.containerInfo||M.stateNode.implementation!==K.implementation)return M=_4(K,_.mode,N),M.return=_,M;return M=B(M,K.children||[]),M.return=_,M}function Q(_,M,K,N,p){if(M===null||M.tag!==7)return M=Bz(K,_.mode,N,p),M.return=_,M;return M=B(M,K),M.return=_,M}function R(_,M,K){if(typeof M==="string"&&M!==""||typeof M==="number"||typeof M==="bigint")return M=Q4(""+M,_.mode,K),M.return=_,M;if(typeof M==="object"&&M!==null){switch(M.$$typeof){case PB:return K=eB(M.type,M.key,M.props,null,_.mode,K),G8(K,M),K.return=_,K;case B8:return M=_4(M,_.mode,K),M.return=_,M;case U6:return M=Zz(M),R(_,M,K)}if(Y8(M)||tJ(M))return M=Bz(M,_.mode,K,null),M.return=_,M;if(typeof M.then==="function")return R(_,mB(M),K);if(M.$$typeof===p7)return R(_,uB(_,M),K);dB(_,M)}return null}function A(_,M,K,N){var p=M!==null?M.key:null;if(typeof K==="string"&&K!==""||typeof K==="number"||typeof K==="bigint")return p!==null?null:H(_,M,""+K,N);if(typeof K==="object"&&K!==null){switch(K.$$typeof){case PB:return K.key===p?X(_,M,K,N):null;case B8:return K.key===p?F(_,M,K,N):null;case U6:return K=Zz(K),A(_,M,K,N)}if(Y8(K)||tJ(K))return p!==null?null:Q(_,M,K,N,null);if(typeof K.then==="function")return A(_,M,mB(K),N);if(K.$$typeof===p7)return A(_,M,uB(_,K),N);dB(_,K)}return null}function D(_,M,K,N,p){if(typeof N==="string"&&N!==""||typeof N==="number"||typeof N==="bigint")return _=_.get(K)||null,H(M,_,""+N,p);if(typeof N==="object"&&N!==null){switch(N.$$typeof){case PB:return _=_.get(N.key===null?K:N.key)||null,X(M,_,N,p);case B8:return _=_.get(N.key===null?K:N.key)||null,F(M,_,N,p);case U6:return N=Zz(N),D(_,M,K,N,p)}if(Y8(N)||tJ(N))return _=_.get(K)||null,Q(M,_,N,p,null);if(typeof N.then==="function")return D(_,M,K,mB(N),p);if(N.$$typeof===p7)return D(_,M,K,uB(M,N),p);dB(M,N)}return null}function f(_,M,K,N){for(var p=null,B0=null,b=M,a=M=0,G0=null;b!==null&&a<K.length;a++){b.index>a?(G0=b,b=null):G0=b.sibling;var n=A(_,b,K[a],N);if(n===null){b===null&&(b=G0);break}G&&b&&n.alternate===null&&Z(_,b),M=Y(n,M,a),B0===null?p=n:B0.sibling=n,B0=n,b=G0}if(a===K.length)return z(_,b),i0&&c7(_,a),p;if(b===null){for(;a<K.length;a++)b=R(_,K[a],N),b!==null&&(M=Y(b,M,a),B0===null?p=b:B0.sibling=b,B0=b);return i0&&c7(_,a),p}for(b=J(b);a<K.length;a++)G0=D(b,_,a,K[a],N),G0!==null&&(G&&G0.alternate!==null&&b.delete(G0.key===null?a:G0.key),M=Y(G0,M,a),B0===null?p=G0:B0.sibling=G0,B0=G0);return G&&b.forEach(function(_0){return Z(_,_0)}),i0&&c7(_,a),p}function S(_,M,K,N){if(K==null)throw Error(h(151));for(var p=null,B0=null,b=M,a=M=0,G0=null,n=K.next();b!==null&&!n.done;a++,n=K.next()){b.index>a?(G0=b,b=null):G0=b.sibling;var _0=A(_,b,n.value,N);if(_0===null){b===null&&(b=G0);break}G&&b&&_0.alternate===null&&Z(_,b),M=Y(_0,M,a),B0===null?p=_0:B0.sibling=_0,B0=_0,b=G0}if(n.done)return z(_,b),i0&&c7(_,a),p;if(b===null){for(;!n.done;a++,n=K.next())n=R(_,n.value,N),n!==null&&(M=Y(n,M,a),B0===null?p=n:B0.sibling=n,B0=n);return i0&&c7(_,a),p}for(b=J(b);!n.done;a++,n=K.next())n=D(b,_,a,n.value,N),n!==null&&(G&&n.alternate!==null&&b.delete(n.key===null?a:n.key),M=Y(n,M,a),B0===null?p=n:B0.sibling=n,B0=n);return G&&b.forEach(function(GG){return Z(_,GG)}),i0&&c7(_,a),p}function C(_,M,K,N){if(typeof K==="object"&&K!==null&&K.type===cz&&K.key===null&&(K=K.props.children),typeof K==="object"&&K!==null){switch(K.$$typeof){case PB:G:{for(var p=K.key;M!==null;){if(M.key===p){if(p=K.type,p===cz){if(M.tag===7){z(_,M.sibling),N=B(M,K.props.children),N.return=_,_=N;break G}}else if(M.elementType===p||typeof p==="object"&&p!==null&&p.$$typeof===U6&&Zz(p)===M.type){z(_,M.sibling),N=B(M,K.props),G8(N,K),N.return=_,_=N;break G}z(_,M);break}else Z(_,M);M=M.sibling}K.type===cz?(N=Bz(K.props.children,_.mode,N,K.key),N.return=_,_=N):(N=eB(K.type,K.key,K.props,null,_.mode,N),G8(N,K),N.return=_,_=N)}return j(_);case B8:G:{for(p=K.key;M!==null;){if(M.key===p)if(M.tag===4&&M.stateNode.containerInfo===K.containerInfo&&M.stateNode.implementation===K.implementation){z(_,M.sibling),N=B(M,K.children||[]),N.return=_,_=N;break G}else{z(_,M);break}else Z(_,M);M=M.sibling}N=_4(K,_.mode,N),N.return=_,_=N}return j(_);case U6:return K=Zz(K),C(_,M,K,N)}if(Y8(K))return f(_,M,K,N);if(tJ(K)){if(p=tJ(K),typeof p!=="function")throw Error(h(150));return K=p.call(K),S(_,M,K,N)}if(typeof K.then==="function")return C(_,M,mB(K),N);if(K.$$typeof===p7)return C(_,M,uB(_,K),N);dB(_,K)}return typeof K==="string"&&K!==""||typeof K==="number"||typeof K==="bigint"?(K=""+K,M!==null&&M.tag===6?(z(_,M.sibling),N=B(M,K),N.return=_,_=N):(z(_,M),N=Q4(K,_.mode,N),N.return=_,_=N),j(_)):z(_,M)}return function(_,M,K,N){try{k8=0;var p=C(_,M,K,N);return YJ=null,p}catch(b){if(b===DJ||b===p9)throw b;var B0=PZ(29,b,null,_.mode);return B0.lanes=N,B0.return=_,B0}finally{}}}var Wz=hU(!0),gU=hU(!1),A6=!1;function tj(G){G.updateQueue={baseState:G.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Jj(G,Z){G=G.updateQueue,Z.updateQueue===G&&(Z.updateQueue={baseState:G.baseState,firstBaseUpdate:G.firstBaseUpdate,lastBaseUpdate:G.lastBaseUpdate,shared:G.shared,callbacks:null})}function I6(G){return{lane:G,tag:0,payload:null,callback:null,next:null}}function f6(G,Z,z){var J=G.updateQueue;if(J===null)return null;if(J=J.shared,(BG&2)!==0){var B=J.pending;return B===null?Z.next=Z:(Z.next=B.next,B.next=Z),J.pending=Z,Z=O9(G),$U(G,null,z),Z}return l9(G,J,Z,z),O9(G)}function M8(G,Z,z){if(Z=Z.updateQueue,Z!==null&&(Z=Z.shared,(z&4194048)!==0)){var J=Z.lanes;J&=G.pendingLanes,z|=J,Z.lanes=z,ZU(G,z)}}function O4(G,Z){var{updateQueue:z,alternate:J}=G;if(J!==null&&(J=J.updateQueue,z===J)){var B=null,Y=null;if(z=z.firstBaseUpdate,z!==null){do{var j={lane:z.lane,tag:z.tag,payload:z.payload,callback:null,next:null};Y===null?B=Y=j:Y=Y.next=j,z=z.next}while(z!==null);Y===null?B=Y=Z:Y=Y.next=Z}else B=Y=Z;z={baseState:J.baseState,firstBaseUpdate:B,lastBaseUpdate:Y,shared:J.shared,callbacks:J.callbacks},G.updateQueue=z;return}G=z.lastBaseUpdate,G===null?z.firstBaseUpdate=Z:G.next=Z,z.lastBaseUpdate=Z}var Bj=!1;function F8(){if(Bj){var G=BJ;if(G!==null)throw G}}function R8(G,Z,z,J){Bj=!1;var B=G.updateQueue;A6=!1;var{firstBaseUpdate:Y,lastBaseUpdate:j}=B,H=B.shared.pending;if(H!==null){B.shared.pending=null;var X=H,F=X.next;X.next=null,j===null?Y=F:j.next=F,j=X;var Q=G.alternate;Q!==null&&(Q=Q.updateQueue,H=Q.lastBaseUpdate,H!==j&&(H===null?Q.firstBaseUpdate=F:H.next=F,Q.lastBaseUpdate=X))}if(Y!==null){var R=B.baseState;j=0,Q=F=X=null,H=Y;do{var A=H.lane&-536870913,D=A!==H.lane;if(D?(p0&A)===A:(J&A)===A){A!==0&&A===UJ&&(Bj=!0),Q!==null&&(Q=Q.next={lane:0,tag:H.tag,payload:H.payload,callback:null,next:null});G:{var f=G,S=H;A=Z;var C=z;switch(S.tag){case 1:if(f=S.payload,typeof f==="function"){R=f.call(C,R,A);break G}R=f;break G;case 3:f.flags=f.flags&-65537|128;case 0:if(f=S.payload,A=typeof f==="function"?f.call(C,R,A):f,A===null||A===void 0)break G;R=NG({},R,A);break G;case 2:A6=!0}}A=H.callback,A!==null&&(G.flags|=64,D&&(G.flags|=8192),D=B.callbacks,D===null?B.callbacks=[A]:D.push(A))}else D={lane:A,tag:H.tag,payload:H.payload,callback:H.callback,next:null},Q===null?(F=Q=D,X=R):Q=Q.next=D,j|=A;if(H=H.next,H===null)if(H=B.shared.pending,H===null)break;else D=H,H=D.next,D.next=null,B.lastBaseUpdate=D,B.shared.pending=null}while(1);Q===null&&(X=R),B.baseState=X,B.firstBaseUpdate=F,B.lastBaseUpdate=Q,Y===null&&(B.shared.lanes=0),P6|=j,G.lanes=j,G.memoizedState=R}}function yU(G,Z){if(typeof G!=="function")throw Error(h(191,G));G.call(Z)}function vU(G,Z){var z=G.callbacks;if(z!==null)for(G.callbacks=null,G=0;G<z.length;G++)yU(z[G],Z)}var AJ=S7(null),w9=S7(0);function aq(G,Z){G=Z6,KG(w9,G),KG(AJ,Z),Z6=G|Z.baseLanes}function Yj(){KG(w9,Z6),KG(AJ,AJ.current)}function ej(){Z6=w9.current,BZ(AJ),BZ(w9)}var mZ=S7(null),Z7=null;function _6(G){var Z=G.alternate;KG(cG,cG.current&1),KG(mZ,G),Z7===null&&(Z===null||AJ.current!==null?Z7=G:Z.memoizedState!==null&&(Z7=G))}function jj(G){KG(cG,cG.current),KG(mZ,G),Z7===null&&(Z7=G)}function uU(G){G.tag===22?(KG(cG,cG.current),KG(mZ,G),Z7===null&&(Z7=G)):L6(G)}function L6(){KG(cG,cG.current),KG(mZ,mZ.current)}function bZ(G){BZ(mZ),Z7===G&&(Z7=null),BZ(cG)}var cG=S7(0);function V9(G){for(var Z=G;Z!==null;){if(Z.tag===13){var z=Z.memoizedState;if(z!==null&&(z=z.dehydrated,z===null||Nj(z)||$j(z)))return Z}else if(Z.tag===19&&(Z.memoizedProps.revealOrder==="forwards"||Z.memoizedProps.revealOrder==="backwards"||Z.memoizedProps.revealOrder==="unstable_legacy-backwards"||Z.memoizedProps.revealOrder==="together")){if((Z.flags&128)!==0)return Z}else if(Z.child!==null){Z.child.return=Z,Z=Z.child;continue}if(Z===G)break;for(;Z.sibling===null;){if(Z.return===null||Z.return===G)return null;Z=Z.return}Z.sibling.return=Z.return,Z=Z.sibling}return null}var t7=0,b0=null,MG=null,sG=null,D9=!1,jJ=!1,Uz=!1,K9=0,b8=0,HJ=null,FO=0;function gG(){throw Error(h(321))}function GH(G,Z){if(Z===null)return!1;for(var z=0;z<Z.length&&z<G.length;z++)if(!uZ(G[z],Z[z]))return!1;return!0}function ZH(G,Z,z,J,B,Y){return t7=Y,b0=Z,Z.memoizedState=null,Z.updateQueue=null,Z.lanes=0,K0.H=G===null||G.memoizedState===null?MA:AH,Uz=!1,Y=z(J,B),Uz=!1,jJ&&(Y=dU(Z,z,J,B)),mU(G),Y}function mU(G){K0.H=P8;var Z=MG!==null&&MG.next!==null;if(t7=0,sG=MG=b0=null,D9=!1,b8=0,HJ=null,Z)throw Error(h(300));G===null||aG||(G=G.dependencies,G!==null&&F9(G)&&(aG=!0))}function dU(G,Z,z,J){b0=G;var B=0;do{if(jJ&&(HJ=null),b8=0,jJ=!1,25<=B)throw Error(h(301));if(B+=1,sG=MG=null,G.updateQueue!=null){var Y=G.updateQueue;Y.lastEffect=null,Y.events=null,Y.stores=null,Y.memoCache!=null&&(Y.memoCache.index=0)}K0.H=FA,Y=Z(z,J)}while(jJ);return Y}function RO(){var G=K0.H,Z=G.useState()[0];return Z=typeof Z.then==="function"?s8(Z):Z,G=G.useState()[0],(MG!==null?MG.memoizedState:null)!==G&&(b0.flags|=1024),Z}function zH(){var G=K9!==0;return K9=0,G}function JH(G,Z,z){Z.updateQueue=G.updateQueue,Z.flags&=-2053,G.lanes&=~z}function BH(G){if(D9){for(G=G.memoizedState;G!==null;){var Z=G.queue;Z!==null&&(Z.pending=null),G=G.next}D9=!1}t7=0,sG=MG=b0=null,jJ=!1,b8=K9=0,HJ=null}function RZ(){var G={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sG===null?b0.memoizedState=sG=G:sG=sG.next=G,sG}function lG(){if(MG===null){var G=b0.alternate;G=G!==null?G.memoizedState:null}else G=MG.next;var Z=sG===null?b0.memoizedState:sG.next;if(Z!==null)sG=Z,MG=G;else{if(G===null){if(b0.alternate===null)throw Error(h(467));throw Error(h(310))}MG=G,G={memoizedState:MG.memoizedState,baseState:MG.baseState,baseQueue:MG.baseQueue,queue:MG.queue,next:null},sG===null?b0.memoizedState=sG=G:sG=sG.next=G}return sG}function i9(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function s8(G){var Z=b8;return b8+=1,HJ===null&&(HJ=[]),G=EU(HJ,G,Z),Z=b0,(sG===null?Z.memoizedState:sG.next)===null&&(Z=Z.alternate,K0.H=Z===null||Z.memoizedState===null?MA:AH),G}function s9(G){if(G!==null&&typeof G==="object"){if(typeof G.then==="function")return s8(G);if(G.$$typeof===p7)return qZ(G)}throw Error(h(438,String(G)))}function YH(G){var Z=null,z=b0.updateQueue;if(z!==null&&(Z=z.memoCache),Z==null){var J=b0.alternate;J!==null&&(J=J.updateQueue,J!==null&&(J=J.memoCache,J!=null&&(Z={data:J.data.map(function(B){return B.slice()}),index:0})))}if(Z==null&&(Z={data:[],index:0}),z===null&&(z=i9(),b0.updateQueue=z),z.memoCache=Z,z=Z.data[Z.index],z===void 0)for(z=Z.data[Z.index]=Array(G),J=0;J<G;J++)z[J]=B1;return Z.index++,z}function e7(G,Z){return typeof Z==="function"?Z(G):Z}function Z9(G){var Z=lG();return jH(Z,MG,G)}function jH(G,Z,z){var J=G.queue;if(J===null)throw Error(h(311));J.lastRenderedReducer=z;var B=G.baseQueue,Y=J.pending;if(Y!==null){if(B!==null){var j=B.next;B.next=Y.next,Y.next=j}Z.baseQueue=B=Y,J.pending=null}if(Y=G.baseState,B===null)G.memoizedState=Y;else{Z=B.next;var H=j=null,X=null,F=Z,Q=!1;do{var R=F.lane&-536870913;if(R!==F.lane?(p0&R)===R:(t7&R)===R){var A=F.revertLane;if(A===0)X!==null&&(X=X.next={lane:0,revertLane:0,gesture:null,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),R===UJ&&(Q=!0);else if((t7&A)===A){F=F.next,A===UJ&&(Q=!0);continue}else R={lane:0,revertLane:F.revertLane,gesture:null,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null},X===null?(H=X=R,j=Y):X=X.next=R,b0.lanes|=A,P6|=A;R=F.action,Uz&&z(Y,R),Y=F.hasEagerState?F.eagerState:z(Y,R)}else A={lane:R,revertLane:F.revertLane,gesture:F.gesture,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null},X===null?(H=X=A,j=Y):X=X.next=A,b0.lanes|=R,P6|=R;F=F.next}while(F!==null&&F!==Z);if(X===null?j=Y:X.next=H,!uZ(Y,G.memoizedState)&&(aG=!0,Q&&(z=BJ,z!==null)))throw z;G.memoizedState=Y,G.baseState=j,G.baseQueue=X,J.lastRenderedState=Y}return B===null&&(J.lanes=0),[G.memoizedState,J.dispatch]}function M4(G){var Z=lG(),z=Z.queue;if(z===null)throw Error(h(311));z.lastRenderedReducer=G;var{dispatch:J,pending:B}=z,Y=Z.memoizedState;if(B!==null){z.pending=null;var j=B=B.next;do Y=G(Y,j.action),j=j.next;while(j!==B);uZ(Y,Z.memoizedState)||(aG=!0),Z.memoizedState=Y,Z.baseQueue===null&&(Z.baseState=Y),z.lastRenderedState=Y}return[Y,J]}function cU(G,Z,z){var J=b0,B=lG(),Y=i0;if(Y){if(z===void 0)throw Error(h(407));z=z()}else z=Z();var j=!uZ((MG||B).memoizedState,z);if(j&&(B.memoizedState=z,aG=!0),B=B.queue,HH(iU.bind(null,J,B,G),[G]),B.getSnapshot!==Z||j||sG!==null&&sG.memoizedState.tag&1){if(J.flags|=2048,QJ(9,{destroy:void 0},pU.bind(null,J,B,z,Z),null),wG===null)throw Error(h(349));Y||(t7&127)!==0||lU(J,Z,z)}return z}function lU(G,Z,z){G.flags|=16384,G={getSnapshot:Z,value:z},Z=b0.updateQueue,Z===null?(Z=i9(),b0.updateQueue=Z,Z.stores=[G]):(z=Z.stores,z===null?Z.stores=[G]:z.push(G))}function pU(G,Z,z,J){Z.value=z,Z.getSnapshot=J,sU(Z)&&rU(G)}function iU(G,Z,z){return z(function(){sU(Z)&&rU(G)})}function sU(G){var Z=G.getSnapshot;G=G.value;try{var z=Z();return!uZ(G,z)}catch(J){return!0}}function rU(G){var Z=Oz(G,2);Z!==null&&NZ(Z,G,2)}function Hj(G){var Z=RZ();if(typeof G==="function"){var z=G;if(G=z(),Uz){M6(!0);try{z()}finally{M6(!1)}}}return Z.memoizedState=Z.baseState=G,Z.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e7,lastRenderedState:G},Z}function oU(G,Z,z,J){return G.baseState=z,jH(G,MG,typeof J==="function"?J:e7)}function wO(G,Z,z,J,B){if(o9(G))throw Error(h(485));if(G=Z.action,G!==null){var Y={payload:B,action:G,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(j){Y.listeners.push(j)}};K0.T!==null?z(!0):Y.isTransition=!1,J(Y),z=Z.pending,z===null?(Y.next=Z.pending=Y,aU(Z,Y)):(Y.next=z.next,Z.pending=z.next=Y)}}function aU(G,Z){var{action:z,payload:J}=Z,B=G.state;if(Z.isTransition){var Y=K0.T,j={};K0.T=j;try{var H=z(B,J),X=K0.S;X!==null&&X(j,H),nq(G,Z,H)}catch(F){Xj(G,Z,F)}finally{Y!==null&&j.types!==null&&(Y.types=j.types),K0.T=Y}}else try{Y=z(B,J),nq(G,Z,Y)}catch(F){Xj(G,Z,F)}}function nq(G,Z,z){z!==null&&typeof z==="object"&&typeof z.then==="function"?z.then(function(J){tq(G,Z,J)},function(J){return Xj(G,Z,J)}):tq(G,Z,z)}function tq(G,Z,z){Z.status="fulfilled",Z.value=z,nU(Z),G.state=z,Z=G.pending,Z!==null&&(z=Z.next,z===Z?G.pending=null:(z=z.next,Z.next=z,aU(G,z)))}function Xj(G,Z,z){var J=G.pending;if(G.pending=null,J!==null){J=J.next;do Z.status="rejected",Z.reason=z,nU(Z),Z=Z.next;while(Z!==J)}G.action=null}function nU(G){G=G.listeners;for(var Z=0;Z<G.length;Z++)(0,G[Z])()}function tU(G,Z){return Z}function eq(G,Z){if(i0){var z=wG.formState;if(z!==null){G:{var J=b0;if(i0){if(TG){Z:{var B=TG;for(var Y=G7;B.nodeType!==8;){if(!Y){B=null;break Z}if(B=z7(B.nextSibling),B===null){B=null;break Z}}Y=B.data,B=Y==="F!"||Y==="F"?B:null}if(B){TG=z7(B.nextSibling),J=B.data==="F!";break G}}k6(J)}J=!1}J&&(Z=z[0])}}return z=RZ(),z.memoizedState=z.baseState=Z,J={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tU,lastRenderedState:Z},z.queue=J,z=_A.bind(null,b0,J),J.dispatch=z,J=Hj(!1),Y=UH.bind(null,b0,!1,J.queue),J=RZ(),B={state:Z,dispatch:null,action:G,pending:null},J.queue=B,z=wO.bind(null,b0,B,Y,z),B.dispatch=z,J.memoizedState=G,[Z,z,!1]}function GW(G){var Z=lG();return eU(Z,MG,G)}function eU(G,Z,z){if(Z=jH(G,Z,tU)[0],G=Z9(e7)[0],typeof Z==="object"&&Z!==null&&typeof Z.then==="function")try{var J=s8(Z)}catch(j){if(j===DJ)throw p9;throw j}else J=Z;Z=lG();var B=Z.queue,Y=B.dispatch;return z!==Z.memoizedState&&(b0.flags|=2048,QJ(9,{destroy:void 0},VO.bind(null,B,z),null)),[J,Y,G]}function VO(G,Z){G.action=Z}function ZW(G){var Z=lG(),z=MG;if(z!==null)return eU(Z,z,G);lG(),Z=Z.memoizedState,z=lG();var J=z.queue.dispatch;return z.memoizedState=G,[Z,J,!1]}function QJ(G,Z,z,J){return G={tag:G,create:z,deps:J,inst:Z,next:null},Z=b0.updateQueue,Z===null&&(Z=i9(),b0.updateQueue=Z),z=Z.lastEffect,z===null?Z.lastEffect=G.next=G:(J=z.next,z.next=G,G.next=J,Z.lastEffect=G),G}function GA(){return lG().memoizedState}function z9(G,Z,z,J){var B=RZ();b0.flags|=G,B.memoizedState=QJ(1|Z,{destroy:void 0},z,J===void 0?null:J)}function r9(G,Z,z,J){var B=lG();J=J===void 0?null:J;var Y=B.memoizedState.inst;MG!==null&&J!==null&&GH(J,MG.memoizedState.deps)?B.memoizedState=QJ(Z,Y,z,J):(b0.flags|=G,B.memoizedState=QJ(1|Z,Y,z,J))}function zW(G,Z){z9(8390656,8,G,Z)}function HH(G,Z){r9(2048,8,G,Z)}function DO(G){b0.flags|=4;var Z=b0.updateQueue;if(Z===null)Z=i9(),b0.updateQueue=Z,Z.events=[G];else{var z=Z.events;z===null?Z.events=[G]:z.push(G)}}function ZA(G){var Z=lG().memoizedState;return DO({ref:Z,nextImpl:G}),function(){if((BG&2)!==0)throw Error(h(440));return Z.impl.apply(void 0,arguments)}}function zA(G,Z){return r9(4,2,G,Z)}function JA(G,Z){return r9(4,4,G,Z)}function BA(G,Z){if(typeof Z==="function"){G=G();var z=Z(G);return function(){typeof z==="function"?z():Z(null)}}if(Z!==null&&Z!==void 0)return G=G(),Z.current=G,function(){Z.current=null}}function YA(G,Z,z){z=z!==null&&z!==void 0?z.concat([G]):null,r9(4,4,BA.bind(null,Z,G),z)}function XH(){}function jA(G,Z){var z=lG();Z=Z===void 0?null:Z;var J=z.memoizedState;if(Z!==null&&GH(Z,J[1]))return J[0];return z.memoizedState=[G,Z],G}function HA(G,Z){var z=lG();Z=Z===void 0?null:Z;var J=z.memoizedState;if(Z!==null&&GH(Z,J[1]))return J[0];if(J=G(),Uz){M6(!0);try{G()}finally{M6(!1)}}return z.memoizedState=[J,Z],J}function qH(G,Z,z){if(z===void 0||(t7&1073741824)!==0&&(p0&261930)===0)return G.memoizedState=Z;return G.memoizedState=z,G=oA(),b0.lanes|=G,P6|=G,z}function XA(G,Z,z,J){if(uZ(z,Z))return z;if(AJ.current!==null)return G=qH(G,z,J),uZ(G,Z)||(aG=!0),G;if((t7&42)===0||(t7&1073741824)!==0&&(p0&261930)===0)return aG=!0,G.memoizedState=z;return G=oA(),b0.lanes|=G,P6|=G,Z}function qA(G,Z,z,J,B){var Y=YG.p;YG.p=Y!==0&&8>Y?Y:8;var j=K0.T,H={};K0.T=H,UH(G,!1,Z,z);try{var X=B(),F=K0.S;if(F!==null&&F(H,X),X!==null&&typeof X==="object"&&typeof X.then==="function"){var Q=MO(X,J);w8(G,Z,Q,vZ(G))}else w8(G,Z,J,vZ(G))}catch(R){w8(G,Z,{then:function(){},status:"rejected",reason:R},vZ())}finally{YG.p=Y,j!==null&&H.types!==null&&(j.types=H.types),K0.T=j}}function KO(){}function qj(G,Z,z,J){if(G.tag!==5)throw Error(h(476));var B=WA(G).queue;qA(G,B,Z,Jz,z===null?KO:function(){return UA(G),z(J)})}function WA(G){var Z=G.memoizedState;if(Z!==null)return Z;Z={memoizedState:Jz,baseState:Jz,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:e7,lastRenderedState:Jz},next:null};var z={};return Z.next={memoizedState:z,baseState:z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:e7,lastRenderedState:z},next:null},G.memoizedState=Z,G=G.alternate,G!==null&&(G.memoizedState=Z),Z}function UA(G){var Z=WA(G);Z.next===null&&(Z=G.alternate.memoizedState),w8(G,Z.next.queue,{},vZ())}function WH(){return qZ(g8)}function AA(){return lG().memoizedState}function QA(){return lG().memoizedState}function IO(G){for(var Z=G.return;Z!==null;){switch(Z.tag){case 24:case 3:var z=vZ();G=I6(z);var J=f6(Z,G,z);J!==null&&(NZ(J,Z,z),M8(J,Z,z)),Z={cache:oj()},G.payload=Z;return}Z=Z.return}}function fO(G,Z,z){var J=vZ();z={lane:J,revertLane:0,gesture:null,action:z,hasEagerState:!1,eagerState:null,next:null},o9(G)?LA(Z,z):(z=pj(G,Z,z,J),z!==null&&(NZ(z,G,J),OA(z,Z,J)))}function _A(G,Z,z){var J=vZ();w8(G,Z,z,J)}function w8(G,Z,z,J){var B={lane:J,revertLane:0,gesture:null,action:z,hasEagerState:!1,eagerState:null,next:null};if(o9(G))LA(Z,B);else{var Y=G.alternate;if(G.lanes===0&&(Y===null||Y.lanes===0)&&(Y=Z.lastRenderedReducer,Y!==null))try{var j=Z.lastRenderedState,H=Y(j,z);if(B.hasEagerState=!0,B.eagerState=H,uZ(H,j))return l9(G,Z,B,0),wG===null&&c9(),!1}catch(X){}finally{}if(z=pj(G,Z,B,J),z!==null)return NZ(z,G,J),OA(z,Z,J),!0}return!1}function UH(G,Z,z,J){if(J={lane:2,revertLane:wH(),gesture:null,action:J,hasEagerState:!1,eagerState:null,next:null},o9(G)){if(Z)throw Error(h(479))}else Z=pj(G,z,J,2),Z!==null&&NZ(Z,G,2)}function o9(G){var Z=G.alternate;return G===b0||Z!==null&&Z===b0}function LA(G,Z){jJ=D9=!0;var z=G.pending;z===null?Z.next=Z:(Z.next=z.next,z.next=Z),G.pending=Z}function OA(G,Z,z){if((z&4194048)!==0){var J=Z.lanes;J&=G.pendingLanes,z|=J,Z.lanes=z,ZU(G,z)}}var P8={readContext:qZ,use:s9,useCallback:gG,useContext:gG,useEffect:gG,useImperativeHandle:gG,useLayoutEffect:gG,useInsertionEffect:gG,useMemo:gG,useReducer:gG,useRef:gG,useState:gG,useDebugValue:gG,useDeferredValue:gG,useTransition:gG,useSyncExternalStore:gG,useId:gG,useHostTransitionStatus:gG,useFormState:gG,useActionState:gG,useOptimistic:gG,useMemoCache:gG,useCacheRefresh:gG};P8.useEffectEvent=gG;var MA={readContext:qZ,use:s9,useCallback:function(G,Z){return RZ().memoizedState=[G,Z===void 0?null:Z],G},useContext:qZ,useEffect:zW,useImperativeHandle:function(G,Z,z){z=z!==null&&z!==void 0?z.concat([G]):null,z9(4194308,4,BA.bind(null,Z,G),z)},useLayoutEffect:function(G,Z){return z9(4194308,4,G,Z)},useInsertionEffect:function(G,Z){z9(4,2,G,Z)},useMemo:function(G,Z){var z=RZ();Z=Z===void 0?null:Z;var J=G();if(Uz){M6(!0);try{G()}finally{M6(!1)}}return z.memoizedState=[J,Z],J},useReducer:function(G,Z,z){var J=RZ();if(z!==void 0){var B=z(Z);if(Uz){M6(!0);try{z(Z)}finally{M6(!1)}}}else B=Z;return J.memoizedState=J.baseState=B,G={pending:null,lanes:0,dispatch:null,lastRenderedReducer:G,lastRenderedState:B},J.queue=G,G=G.dispatch=fO.bind(null,b0,G),[J.memoizedState,G]},useRef:function(G){var Z=RZ();return G={current:G},Z.memoizedState=G},useState:function(G){G=Hj(G);var Z=G.queue,z=_A.bind(null,b0,Z);return Z.dispatch=z,[G.memoizedState,z]},useDebugValue:XH,useDeferredValue:function(G,Z){var z=RZ();return qH(z,G,Z)},useTransition:function(){var G=Hj(!1);return G=qA.bind(null,b0,G.queue,!0,!1),RZ().memoizedState=G,[!1,G]},useSyncExternalStore:function(G,Z,z){var J=b0,B=RZ();if(i0){if(z===void 0)throw Error(h(407));z=z()}else{if(z=Z(),wG===null)throw Error(h(349));(p0&127)!==0||lU(J,Z,z)}B.memoizedState=z;var Y={value:z,getSnapshot:Z};return B.queue=Y,zW(iU.bind(null,J,Y,G),[G]),J.flags|=2048,QJ(9,{destroy:void 0},pU.bind(null,J,Y,z,Z),null),z},useId:function(){var G=RZ(),Z=wG.identifierPrefix;if(i0){var z=$7,J=N7;z=(J&~(1<<32-yZ(J)-1)).toString(32)+z,Z="_"+Z+"R_"+z,z=K9++,0<z&&(Z+="H"+z.toString(32)),Z+="_"}else z=FO++,Z="_"+Z+"r_"+z.toString(32)+"_";return G.memoizedState=Z},useHostTransitionStatus:WH,useFormState:eq,useActionState:eq,useOptimistic:function(G){var Z=RZ();Z.memoizedState=Z.baseState=G;var z={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return Z.queue=z,Z=UH.bind(null,b0,!0,z),z.dispatch=Z,[G,Z]},useMemoCache:YH,useCacheRefresh:function(){return RZ().memoizedState=IO.bind(null,b0)},useEffectEvent:function(G){var Z=RZ(),z={impl:G};return Z.memoizedState=z,function(){if((BG&2)!==0)throw Error(h(440));return z.impl.apply(void 0,arguments)}}},AH={readContext:qZ,use:s9,useCallback:jA,useContext:qZ,useEffect:HH,useImperativeHandle:YA,useInsertionEffect:zA,useLayoutEffect:JA,useMemo:HA,useReducer:Z9,useRef:GA,useState:function(){return Z9(e7)},useDebugValue:XH,useDeferredValue:function(G,Z){var z=lG();return XA(z,MG.memoizedState,G,Z)},useTransition:function(){var G=Z9(e7)[0],Z=lG().memoizedState;return[typeof G==="boolean"?G:s8(G),Z]},useSyncExternalStore:cU,useId:AA,useHostTransitionStatus:WH,useFormState:GW,useActionState:GW,useOptimistic:function(G,Z){var z=lG();return oU(z,MG,G,Z)},useMemoCache:YH,useCacheRefresh:QA};AH.useEffectEvent=ZA;var FA={readContext:qZ,use:s9,useCallback:jA,useContext:qZ,useEffect:HH,useImperativeHandle:YA,useInsertionEffect:zA,useLayoutEffect:JA,useMemo:HA,useReducer:M4,useRef:GA,useState:function(){return M4(e7)},useDebugValue:XH,useDeferredValue:function(G,Z){var z=lG();return MG===null?qH(z,G,Z):XA(z,MG.memoizedState,G,Z)},useTransition:function(){var G=M4(e7)[0],Z=lG().memoizedState;return[typeof G==="boolean"?G:s8(G),Z]},useSyncExternalStore:cU,useId:AA,useHostTransitionStatus:WH,useFormState:ZW,useActionState:ZW,useOptimistic:function(G,Z){var z=lG();if(MG!==null)return oU(z,MG,G,Z);return z.baseState=G,[G,z.queue.dispatch]},useMemoCache:YH,useCacheRefresh:QA};FA.useEffectEvent=ZA;function F4(G,Z,z,J){Z=G.memoizedState,z=z(J,Z),z=z===null||z===void 0?Z:NG({},Z,z),G.memoizedState=z,G.lanes===0&&(G.updateQueue.baseState=z)}var Wj={enqueueSetState:function(G,Z,z){G=G._reactInternals;var J=vZ(),B=I6(J);B.payload=Z,z!==void 0&&z!==null&&(B.callback=z),Z=f6(G,B,J),Z!==null&&(NZ(Z,G,J),M8(Z,G,J))},enqueueReplaceState:function(G,Z,z){G=G._reactInternals;var J=vZ(),B=I6(J);B.tag=1,B.payload=Z,z!==void 0&&z!==null&&(B.callback=z),Z=f6(G,B,J),Z!==null&&(NZ(Z,G,J),M8(Z,G,J))},enqueueForceUpdate:function(G,Z){G=G._reactInternals;var z=vZ(),J=I6(z);J.tag=2,Z!==void 0&&Z!==null&&(J.callback=Z),Z=f6(G,J,z),Z!==null&&(NZ(Z,G,z),M8(Z,G,z))}};function JW(G,Z,z,J,B,Y,j){return G=G.stateNode,typeof G.shouldComponentUpdate==="function"?G.shouldComponentUpdate(J,Y,j):Z.prototype&&Z.prototype.isPureReactComponent?!C8(z,J)||!C8(B,Y):!0}function BW(G,Z,z,J){G=Z.state,typeof Z.componentWillReceiveProps==="function"&&Z.componentWillReceiveProps(z,J),typeof Z.UNSAFE_componentWillReceiveProps==="function"&&Z.UNSAFE_componentWillReceiveProps(z,J),Z.state!==G&&Wj.enqueueReplaceState(Z,Z.state,null)}function Az(G,Z){var z=Z;if("ref"in Z){z={};for(var J in Z)J!=="ref"&&(z[J]=Z[J])}if(G=G.defaultProps){z===Z&&(z=NG({},z));for(var B in G)z[B]===void 0&&(z[B]=G[B])}return z}function RA(G){L9(G)}function wA(G){console.error(G)}function VA(G){L9(G)}function I9(G,Z){try{var z=G.onUncaughtError;z(Z.value,{componentStack:Z.stack})}catch(J){setTimeout(function(){throw J})}}function YW(G,Z,z){try{var J=G.onCaughtError;J(z.value,{componentStack:z.stack,errorBoundary:Z.tag===1?Z.stateNode:null})}catch(B){setTimeout(function(){throw B})}}function Uj(G,Z,z){return z=I6(z),z.tag=3,z.payload={element:null},z.callback=function(){I9(G,Z)},z}function DA(G){return G=I6(G),G.tag=3,G}function KA(G,Z,z,J){var B=z.type.getDerivedStateFromError;if(typeof B==="function"){var Y=J.value;G.payload=function(){return B(Y)},G.callback=function(){YW(Z,z,J)}}var j=z.stateNode;j!==null&&typeof j.componentDidCatch==="function"&&(G.callback=function(){YW(Z,z,J),typeof B!=="function"&&(T6===null?T6=new Set([this]):T6.add(this));var H=J.stack;this.componentDidCatch(J.value,{componentStack:H!==null?H:""})})}function TO(G,Z,z,J,B){if(z.flags|=32768,J!==null&&typeof J==="object"&&typeof J.then==="function"){if(Z=z.alternate,Z!==null&&VJ(Z,z,B,!0),z=mZ.current,z!==null){switch(z.tag){case 31:case 13:return Z7===null?C9():z.alternate===null&&yG===0&&(yG=3),z.flags&=-257,z.flags|=65536,z.lanes=B,J===R9?z.flags|=16384:(Z=z.updateQueue,Z===null?z.updateQueue=new Set([J]):Z.add(J),C4(G,J,B)),!1;case 22:return z.flags|=65536,J===R9?z.flags|=16384:(Z=z.updateQueue,Z===null?(Z={transitions:null,markerInstances:null,retryQueue:new Set([J])},z.updateQueue=Z):(z=Z.retryQueue,z===null?Z.retryQueue=new Set([J]):z.add(J)),C4(G,J,B)),!1}throw Error(h(435,z.tag))}return C4(G,J,B),C9(),!1}if(i0)return Z=mZ.current,Z!==null?((Z.flags&65536)===0&&(Z.flags|=256),Z.flags|=65536,Z.lanes=B,J!==t4&&(G=Error(h(422),{cause:J}),S8(eZ(G,z)))):(J!==t4&&(Z=Error(h(423),{cause:J}),S8(eZ(Z,z))),G=G.current.alternate,G.flags|=65536,B&=-B,G.lanes|=B,J=eZ(J,z),B=Uj(G.stateNode,J,B),O4(G,B),yG!==4&&(yG=2)),!1;var Y=Error(h(520),{cause:J});if(Y=eZ(Y,z),K8===null?K8=[Y]:K8.push(Y),yG!==4&&(yG=2),Z===null)return!0;J=eZ(J,z),z=Z;do{switch(z.tag){case 3:return z.flags|=65536,G=B&-B,z.lanes|=G,G=Uj(z.stateNode,J,G),O4(z,G),!1;case 1:if(Z=z.type,Y=z.stateNode,(z.flags&128)===0&&(typeof Z.getDerivedStateFromError==="function"||Y!==null&&typeof Y.componentDidCatch==="function"&&(T6===null||!T6.has(Y))))return z.flags|=65536,B&=-B,z.lanes|=B,B=DA(B),KA(B,G,z,J),O4(z,B),!1}z=z.return}while(z!==null);return!1}var QH=Error(h(461)),aG=!1;function jZ(G,Z,z,J){Z.child=G===null?gU(Z,null,z,J):Wz(Z,G.child,z,J)}function jW(G,Z,z,J,B){z=z.render;var Y=Z.ref;if("ref"in J){var j={};for(var H in J)H!=="ref"&&(j[H]=J[H])}else j=J;if(qz(Z),J=ZH(G,Z,z,j,Y,B),H=zH(),G!==null&&!aG)return JH(G,Z,B),G6(G,Z,B);return i0&&H&&sj(Z),Z.flags|=1,jZ(G,Z,J,B),Z.child}function HW(G,Z,z,J,B){if(G===null){var Y=z.type;if(typeof Y==="function"&&!ij(Y)&&Y.defaultProps===void 0&&z.compare===null)return Z.tag=15,Z.type=Y,IA(G,Z,Y,J,B);return G=eB(z.type,null,J,Z,Z.mode,B),G.ref=Z.ref,G.return=Z,Z.child=G}if(Y=G.child,!_H(G,B)){var j=Y.memoizedProps;if(z=z.compare,z=z!==null?z:C8,z(j,J)&&G.ref===Z.ref)return G6(G,Z,B)}return Z.flags|=1,G=r7(Y,J),G.ref=Z.ref,G.return=Z,Z.child=G}function IA(G,Z,z,J,B){if(G!==null){var Y=G.memoizedProps;if(C8(Y,J)&&G.ref===Z.ref)if(aG=!1,Z.pendingProps=J=Y,_H(G,B))(G.flags&131072)!==0&&(aG=!0);else return Z.lanes=G.lanes,G6(G,Z,B)}return Aj(G,Z,z,J,B)}function fA(G,Z,z,J){var B=J.children,Y=G!==null?G.memoizedState:null;if(G===null&&Z.stateNode===null&&(Z.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),J.mode==="hidden"){if((Z.flags&128)!==0){if(Y=Y!==null?Y.baseLanes|z:z,G!==null){J=Z.child=G.child;for(B=0;J!==null;)B=B|J.lanes|J.childLanes,J=J.sibling;J=B&~Y}else J=0,Z.child=null;return XW(G,Z,Y,z,J)}if((z&536870912)!==0)Z.memoizedState={baseLanes:0,cachePool:null},G!==null&&G9(Z,Y!==null?Y.cachePool:null),Y!==null?aq(Z,Y):Yj(),uU(Z);else return J=Z.lanes=536870912,XW(G,Z,Y!==null?Y.baseLanes|z:z,z,J)}else Y!==null?(G9(Z,Y.cachePool),aq(Z,Y),L6(Z),Z.memoizedState=null):(G!==null&&G9(Z,null),Yj(),L6(Z));return jZ(G,Z,B,z),Z.child}function q8(G,Z){return G!==null&&G.tag===22||Z.stateNode!==null||(Z.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),Z.sibling}function XW(G,Z,z,J,B){var Y=aj();return Y=Y===null?null:{parent:oG._currentValue,pool:Y},Z.memoizedState={baseLanes:z,cachePool:Y},G!==null&&G9(Z,null),Yj(),uU(Z),G!==null&&VJ(G,Z,J,!0),Z.childLanes=B,null}function J9(G,Z){return Z=f9({mode:Z.mode,children:Z.children},G.mode),Z.ref=G.ref,G.child=Z,Z.return=G,Z}function qW(G,Z,z){return Wz(Z,G.child,null,z),G=J9(Z,Z.pendingProps),G.flags|=2,bZ(Z),Z.memoizedState=null,G}function NO(G,Z,z){var J=Z.pendingProps,B=(Z.flags&128)!==0;if(Z.flags&=-129,G===null){if(i0){if(J.mode==="hidden")return G=J9(Z,J),Z.lanes=536870912,q8(null,G);if(jj(Z),(G=TG)?(G=MQ(G,G7),G=G!==null&&G.data==="&"?G:null,G!==null&&(Z.memoizedState={dehydrated:G,treeContext:S6!==null?{id:N7,overflow:$7}:null,retryLane:536870912,hydrationErrors:null},z=xU(G),z.return=Z,Z.child=z,XZ=Z,TG=null)):G=null,G===null)throw k6(Z);return Z.lanes=536870912,null}return J9(Z,J)}var Y=G.memoizedState;if(Y!==null){var j=Y.dehydrated;if(jj(Z),B)if(Z.flags&256)Z.flags&=-257,Z=qW(G,Z,z);else if(Z.memoizedState!==null)Z.child=G.child,Z.flags|=128,Z=null;else throw Error(h(558));else if(aG||VJ(G,Z,z,!1),B=(z&G.childLanes)!==0,aG||B){if(J=wG,J!==null&&(j=zU(J,z),j!==0&&j!==Y.retryLane))throw Y.retryLane=j,Oz(G,j),NZ(J,G,j),QH;C9(),Z=qW(G,Z,z)}else G=Y.treeContext,TG=z7(j.nextSibling),XZ=Z,i0=!0,K6=null,G7=!1,G!==null&&kU(Z,G),Z=J9(Z,J),Z.flags|=4096;return Z}return G=r7(G.child,{mode:J.mode,children:J.children}),G.ref=Z.ref,Z.child=G,G.return=Z,G}function B9(G,Z){var z=Z.ref;if(z===null)G!==null&&G.ref!==null&&(Z.flags|=4194816);else{if(typeof z!=="function"&&typeof z!=="object")throw Error(h(284));if(G===null||G.ref!==z)Z.flags|=4194816}}function Aj(G,Z,z,J,B){if(qz(Z),z=ZH(G,Z,z,J,void 0,B),J=zH(),G!==null&&!aG)return JH(G,Z,B),G6(G,Z,B);return i0&&J&&sj(Z),Z.flags|=1,jZ(G,Z,z,B),Z.child}function WW(G,Z,z,J,B,Y){if(qz(Z),Z.updateQueue=null,z=dU(Z,J,z,B),mU(G),J=zH(),G!==null&&!aG)return JH(G,Z,Y),G6(G,Z,Y);return i0&&J&&sj(Z),Z.flags|=1,jZ(G,Z,z,Y),Z.child}function UW(G,Z,z,J,B){if(qz(Z),Z.stateNode===null){var Y=nz,j=z.contextType;typeof j==="object"&&j!==null&&(Y=qZ(j)),Y=new z(J,Y),Z.memoizedState=Y.state!==null&&Y.state!==void 0?Y.state:null,Y.updater=Wj,Z.stateNode=Y,Y._reactInternals=Z,Y=Z.stateNode,Y.props=J,Y.state=Z.memoizedState,Y.refs={},tj(Z),j=z.contextType,Y.context=typeof j==="object"&&j!==null?qZ(j):nz,Y.state=Z.memoizedState,j=z.getDerivedStateFromProps,typeof j==="function"&&(F4(Z,z,j,J),Y.state=Z.memoizedState),typeof z.getDerivedStateFromProps==="function"||typeof Y.getSnapshotBeforeUpdate==="function"||typeof Y.UNSAFE_componentWillMount!=="function"&&typeof Y.componentWillMount!=="function"||(j=Y.state,typeof Y.componentWillMount==="function"&&Y.componentWillMount(),typeof Y.UNSAFE_componentWillMount==="function"&&Y.UNSAFE_componentWillMount(),j!==Y.state&&Wj.enqueueReplaceState(Y,Y.state,null),R8(Z,J,Y,B),F8(),Y.state=Z.memoizedState),typeof Y.componentDidMount==="function"&&(Z.flags|=4194308),J=!0}else if(G===null){Y=Z.stateNode;var H=Z.memoizedProps,X=Az(z,H);Y.props=X;var F=Y.context,Q=z.contextType;j=nz,typeof Q==="object"&&Q!==null&&(j=qZ(Q));var R=z.getDerivedStateFromProps;Q=typeof R==="function"||typeof Y.getSnapshotBeforeUpdate==="function",H=Z.pendingProps!==H,Q||typeof Y.UNSAFE_componentWillReceiveProps!=="function"&&typeof Y.componentWillReceiveProps!=="function"||(H||F!==j)&&BW(Z,Y,J,j),A6=!1;var A=Z.memoizedState;Y.state=A,R8(Z,J,Y,B),F8(),F=Z.memoizedState,H||A!==F||A6?(typeof R==="function"&&(F4(Z,z,R,J),F=Z.memoizedState),(X=A6||JW(Z,z,X,J,A,F,j))?(Q||typeof Y.UNSAFE_componentWillMount!=="function"&&typeof Y.componentWillMount!=="function"||(typeof Y.componentWillMount==="function"&&Y.componentWillMount(),typeof Y.UNSAFE_componentWillMount==="function"&&Y.UNSAFE_componentWillMount()),typeof Y.componentDidMount==="function"&&(Z.flags|=4194308)):(typeof Y.componentDidMount==="function"&&(Z.flags|=4194308),Z.memoizedProps=J,Z.memoizedState=F),Y.props=J,Y.state=F,Y.context=j,J=X):(typeof Y.componentDidMount==="function"&&(Z.flags|=4194308),J=!1)}else{Y=Z.stateNode,Jj(G,Z),j=Z.memoizedProps,Q=Az(z,j),Y.props=Q,R=Z.pendingProps,A=Y.context,F=z.contextType,X=nz,typeof F==="object"&&F!==null&&(X=qZ(F)),H=z.getDerivedStateFromProps,(F=typeof H==="function"||typeof Y.getSnapshotBeforeUpdate==="function")||typeof Y.UNSAFE_componentWillReceiveProps!=="function"&&typeof Y.componentWillReceiveProps!=="function"||(j!==R||A!==X)&&BW(Z,Y,J,X),A6=!1,A=Z.memoizedState,Y.state=A,R8(Z,J,Y,B),F8();var D=Z.memoizedState;j!==R||A!==D||A6||G!==null&&G.dependencies!==null&&F9(G.dependencies)?(typeof H==="function"&&(F4(Z,z,H,J),D=Z.memoizedState),(Q=A6||JW(Z,z,Q,J,A,D,X)||G!==null&&G.dependencies!==null&&F9(G.dependencies))?(F||typeof Y.UNSAFE_componentWillUpdate!=="function"&&typeof Y.componentWillUpdate!=="function"||(typeof Y.componentWillUpdate==="function"&&Y.componentWillUpdate(J,D,X),typeof Y.UNSAFE_componentWillUpdate==="function"&&Y.UNSAFE_componentWillUpdate(J,D,X)),typeof Y.componentDidUpdate==="function"&&(Z.flags|=4),typeof Y.getSnapshotBeforeUpdate==="function"&&(Z.flags|=1024)):(typeof Y.componentDidUpdate!=="function"||j===G.memoizedProps&&A===G.memoizedState||(Z.flags|=4),typeof Y.getSnapshotBeforeUpdate!=="function"||j===G.memoizedProps&&A===G.memoizedState||(Z.flags|=1024),Z.memoizedProps=J,Z.memoizedState=D),Y.props=J,Y.state=D,Y.context=X,J=Q):(typeof Y.componentDidUpdate!=="function"||j===G.memoizedProps&&A===G.memoizedState||(Z.flags|=4),typeof Y.getSnapshotBeforeUpdate!=="function"||j===G.memoizedProps&&A===G.memoizedState||(Z.flags|=1024),J=!1)}return Y=J,B9(G,Z),J=(Z.flags&128)!==0,Y||J?(Y=Z.stateNode,z=J&&typeof z.getDerivedStateFromError!=="function"?null:Y.render(),Z.flags|=1,G!==null&&J?(Z.child=Wz(Z,G.child,null,B),Z.child=Wz(Z,null,z,B)):jZ(G,Z,z,B),Z.memoizedState=Y.state,G=Z.child):G=G6(G,Z,B),G}function AW(G,Z,z,J){return Xz(),Z.flags|=256,jZ(G,Z,z,J),Z.child}var R4={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function w4(G){return{baseLanes:G,cachePool:PU()}}function V4(G,Z,z){return G=G!==null?G.childLanes&~z:0,Z&&(G|=EZ),G}function TA(G,Z,z){var J=Z.pendingProps,B=!1,Y=(Z.flags&128)!==0,j;if((j=Y)||(j=G!==null&&G.memoizedState===null?!1:(cG.current&2)!==0),j&&(B=!0,Z.flags&=-129),j=(Z.flags&32)!==0,Z.flags&=-33,G===null){if(i0){if(B?_6(Z):L6(Z),(G=TG)?(G=MQ(G,G7),G=G!==null&&G.data!=="&"?G:null,G!==null&&(Z.memoizedState={dehydrated:G,treeContext:S6!==null?{id:N7,overflow:$7}:null,retryLane:536870912,hydrationErrors:null},z=xU(G),z.return=Z,Z.child=z,XZ=Z,TG=null)):G=null,G===null)throw k6(Z);return $j(G)?Z.lanes=32:Z.lanes=536870912,null}var H=J.children;if(J=J.fallback,B)return L6(Z),B=Z.mode,H=f9({mode:"hidden",children:H},B),J=Bz(J,B,z,null),H.return=Z,J.return=Z,H.sibling=J,Z.child=H,J=Z.child,J.memoizedState=w4(z),J.childLanes=V4(G,j,z),Z.memoizedState=R4,q8(null,J);return _6(Z),Qj(Z,H)}var X=G.memoizedState;if(X!==null&&(H=X.dehydrated,H!==null)){if(Y)Z.flags&256?(_6(Z),Z.flags&=-257,Z=D4(G,Z,z)):Z.memoizedState!==null?(L6(Z),Z.child=G.child,Z.flags|=128,Z=null):(L6(Z),H=J.fallback,B=Z.mode,J=f9({mode:"visible",children:J.children},B),H=Bz(H,B,z,null),H.flags|=2,J.return=Z,H.return=Z,J.sibling=H,Z.child=J,Wz(Z,G.child,null,z),J=Z.child,J.memoizedState=w4(z),J.childLanes=V4(G,j,z),Z.memoizedState=R4,Z=q8(null,J));else if(_6(Z),$j(H)){if(j=H.nextSibling&&H.nextSibling.dataset,j)var F=j.dgst;j=F,J=Error(h(419)),J.stack="",J.digest=j,S8({value:J,source:null,stack:null}),Z=D4(G,Z,z)}else if(aG||VJ(G,Z,z,!1),j=(z&G.childLanes)!==0,aG||j){if(j=wG,j!==null&&(J=zU(j,z),J!==0&&J!==X.retryLane))throw X.retryLane=J,Oz(G,J),NZ(j,G,J),QH;Nj(H)||C9(),Z=D4(G,Z,z)}else Nj(H)?(Z.flags|=192,Z.child=G.child,Z=null):(G=X.treeContext,TG=z7(H.nextSibling),XZ=Z,i0=!0,K6=null,G7=!1,G!==null&&kU(Z,G),Z=Qj(Z,J.children),Z.flags|=4096);return Z}if(B)return L6(Z),H=J.fallback,B=Z.mode,X=G.child,F=X.sibling,J=r7(X,{mode:"hidden",children:J.children}),J.subtreeFlags=X.subtreeFlags&65011712,F!==null?H=r7(F,H):(H=Bz(H,B,z,null),H.flags|=2),H.return=Z,J.return=Z,J.sibling=H,Z.child=J,q8(null,J),J=Z.child,H=G.child.memoizedState,H===null?H=w4(z):(B=H.cachePool,B!==null?(X=oG._currentValue,B=B.parent!==X?{parent:X,pool:X}:B):B=PU(),H={baseLanes:H.baseLanes|z,cachePool:B}),J.memoizedState=H,J.childLanes=V4(G,j,z),Z.memoizedState=R4,q8(G.child,J);return _6(Z),z=G.child,G=z.sibling,z=r7(z,{mode:"visible",children:J.children}),z.return=Z,z.sibling=null,G!==null&&(j=Z.deletions,j===null?(Z.deletions=[G],Z.flags|=16):j.push(G)),Z.child=z,Z.memoizedState=null,z}function Qj(G,Z){return Z=f9({mode:"visible",children:Z},G.mode),Z.return=G,G.child=Z}function f9(G,Z){return G=PZ(22,G,null,Z),G.lanes=0,G}function D4(G,Z,z){return Wz(Z,G.child,null,z),G=Qj(Z,Z.pendingProps.children),G.flags|=2,Z.memoizedState=null,G}function QW(G,Z,z){G.lanes|=Z;var J=G.alternate;J!==null&&(J.lanes|=Z),Gj(G.return,Z,z)}function K4(G,Z,z,J,B,Y){var j=G.memoizedState;j===null?G.memoizedState={isBackwards:Z,rendering:null,renderingStartTime:0,last:J,tail:z,tailMode:B,treeForkCount:Y}:(j.isBackwards=Z,j.rendering=null,j.renderingStartTime=0,j.last=J,j.tail=z,j.tailMode=B,j.treeForkCount=Y)}function NA(G,Z,z){var J=Z.pendingProps,B=J.revealOrder,Y=J.tail;J=J.children;var j=cG.current,H=(j&2)!==0;if(H?(j=j&1|2,Z.flags|=128):j&=1,KG(cG,j),jZ(G,Z,J,z),J=i0?x8:0,!H&&G!==null&&(G.flags&128)!==0)G:for(G=Z.child;G!==null;){if(G.tag===13)G.memoizedState!==null&&QW(G,z,Z);else if(G.tag===19)QW(G,z,Z);else if(G.child!==null){G.child.return=G,G=G.child;continue}if(G===Z)break G;for(;G.sibling===null;){if(G.return===null||G.return===Z)break G;G=G.return}G.sibling.return=G.return,G=G.sibling}switch(B){case"forwards":z=Z.child;for(B=null;z!==null;)G=z.alternate,G!==null&&V9(G)===null&&(B=z),z=z.sibling;z=B,z===null?(B=Z.child,Z.child=null):(B=z.sibling,z.sibling=null),K4(Z,!1,B,z,Y,J);break;case"backwards":case"unstable_legacy-backwards":z=null,B=Z.child;for(Z.child=null;B!==null;){if(G=B.alternate,G!==null&&V9(G)===null){Z.child=B;break}G=B.sibling,B.sibling=z,z=B,B=G}K4(Z,!0,z,null,Y,J);break;case"together":K4(Z,!1,null,null,void 0,J);break;default:Z.memoizedState=null}return Z.child}function G6(G,Z,z){if(G!==null&&(Z.dependencies=G.dependencies),P6|=Z.lanes,(z&Z.childLanes)===0)if(G!==null){if(VJ(G,Z,z,!1),(z&Z.childLanes)===0)return null}else return null;if(G!==null&&Z.child!==G.child)throw Error(h(153));if(Z.child!==null){G=Z.child,z=r7(G,G.pendingProps),Z.child=z;for(z.return=Z;G.sibling!==null;)G=G.sibling,z=z.sibling=r7(G,G.pendingProps),z.return=Z;z.sibling=null}return Z.child}function _H(G,Z){if((G.lanes&Z)!==0)return!0;return G=G.dependencies,G!==null&&F9(G)?!0:!1}function $O(G,Z,z){switch(Z.tag){case 3:U9(Z,Z.stateNode.containerInfo),Q6(Z,oG,G.memoizedState.cache),Xz();break;case 27:case 5:m4(Z);break;case 4:U9(Z,Z.stateNode.containerInfo);break;case 10:Q6(Z,Z.type,Z.memoizedProps.value);break;case 31:if(Z.memoizedState!==null)return Z.flags|=128,jj(Z),null;break;case 13:var J=Z.memoizedState;if(J!==null){if(J.dehydrated!==null)return _6(Z),Z.flags|=128,null;if((z&Z.child.childLanes)!==0)return TA(G,Z,z);return _6(Z),G=G6(G,Z,z),G!==null?G.sibling:null}_6(Z);break;case 19:var B=(G.flags&128)!==0;if(J=(z&Z.childLanes)!==0,J||(VJ(G,Z,z,!1),J=(z&Z.childLanes)!==0),B){if(J)return NA(G,Z,z);Z.flags|=128}if(B=Z.memoizedState,B!==null&&(B.rendering=null,B.tail=null,B.lastEffect=null),KG(cG,cG.current),J)break;else return null;case 22:return Z.lanes=0,fA(G,Z,z,Z.pendingProps);case 24:Q6(Z,oG,G.memoizedState.cache)}return G6(G,Z,z)}function $A(G,Z,z){if(G!==null)if(G.memoizedProps!==Z.pendingProps)aG=!0;else{if(!_H(G,z)&&(Z.flags&128)===0)return aG=!1,$O(G,Z,z);aG=(G.flags&131072)!==0?!0:!1}else aG=!1,i0&&(Z.flags&1048576)!==0&&SU(Z,x8,Z.index);switch(Z.lanes=0,Z.tag){case 16:G:{var J=Z.pendingProps;if(G=Zz(Z.elementType),Z.type=G,typeof G==="function")ij(G)?(J=Az(G,J),Z.tag=1,Z=UW(null,Z,G,J,z)):(Z.tag=0,Z=Aj(null,Z,G,J,z));else{if(G!==void 0&&G!==null){var B=G.$$typeof;if(B===kj){Z.tag=11,Z=jW(null,Z,G,J,z);break G}else if(B===bj){Z.tag=14,Z=HW(null,Z,G,J,z);break G}}throw Z=v4(G)||G,Error(h(306,Z,""))}}return Z;case 0:return Aj(G,Z,Z.type,Z.pendingProps,z);case 1:return J=Z.type,B=Az(J,Z.pendingProps),UW(G,Z,J,B,z);case 3:G:{if(U9(Z,Z.stateNode.containerInfo),G===null)throw Error(h(387));J=Z.pendingProps;var Y=Z.memoizedState;B=Y.element,Jj(G,Z),R8(Z,J,null,z);var j=Z.memoizedState;if(J=j.cache,Q6(Z,oG,J),J!==Y.cache&&Zj(Z,[oG],z,!0),F8(),J=j.element,Y.isDehydrated)if(Y={element:J,isDehydrated:!1,cache:j.cache},Z.updateQueue.baseState=Y,Z.memoizedState=Y,Z.flags&256){Z=AW(G,Z,J,z);break G}else if(J!==B){B=eZ(Error(h(424)),Z),S8(B),Z=AW(G,Z,J,z);break G}else{switch(G=Z.stateNode.containerInfo,G.nodeType){case 9:G=G.body;break;default:G=G.nodeName==="HTML"?G.ownerDocument.body:G}TG=z7(G.firstChild),XZ=Z,i0=!0,K6=null,G7=!0,z=gU(Z,null,J,z);for(Z.child=z;z;)z.flags=z.flags&-3|4096,z=z.sibling}else{if(Xz(),J===B){Z=G6(G,Z,z);break G}jZ(G,Z,J,z)}Z=Z.child}return Z;case 26:return B9(G,Z),G===null?(z=bW(Z.type,null,Z.pendingProps,null))?Z.memoizedState=z:i0||(z=Z.type,G=Z.pendingProps,J=b9(D6.current).createElement(z),J[HZ]=Z,J[$Z]=G,WZ(J,z,G),JZ(J),Z.stateNode=J):Z.memoizedState=bW(Z.type,G.memoizedProps,Z.pendingProps,G.memoizedState),null;case 27:return m4(Z),G===null&&i0&&(J=Z.stateNode=FQ(Z.type,Z.pendingProps,D6.current),XZ=Z,G7=!0,B=TG,h6(Z.type)?(Cj=B,TG=z7(J.firstChild)):TG=B),jZ(G,Z,Z.pendingProps.children,z),B9(G,Z),G===null&&(Z.flags|=4194304),Z.child;case 5:if(G===null&&i0){if(B=J=TG)J=zM(J,Z.type,Z.pendingProps,G7),J!==null?(Z.stateNode=J,XZ=Z,TG=z7(J.firstChild),G7=!1,B=!0):B=!1;B||k6(Z)}return m4(Z),B=Z.type,Y=Z.pendingProps,j=G!==null?G.memoizedProps:null,J=Y.children,fj(B,Y)?J=null:j!==null&&fj(B,j)&&(Z.flags|=32),Z.memoizedState!==null&&(B=ZH(G,Z,RO,null,null,z),g8._currentValue=B),B9(G,Z),jZ(G,Z,J,z),Z.child;case 6:if(G===null&&i0){if(G=z=TG)z=JM(z,Z.pendingProps,G7),z!==null?(Z.stateNode=z,XZ=Z,TG=null,G=!0):G=!1;G||k6(Z)}return null;case 13:return TA(G,Z,z);case 4:return U9(Z,Z.stateNode.containerInfo),J=Z.pendingProps,G===null?Z.child=Wz(Z,null,J,z):jZ(G,Z,J,z),Z.child;case 11:return jW(G,Z,Z.type,Z.pendingProps,z);case 7:return jZ(G,Z,Z.pendingProps,z),Z.child;case 8:return jZ(G,Z,Z.pendingProps.children,z),Z.child;case 12:return jZ(G,Z,Z.pendingProps.children,z),Z.child;case 10:return J=Z.pendingProps,Q6(Z,Z.type,J.value),jZ(G,Z,J.children,z),Z.child;case 9:return B=Z.type._context,J=Z.pendingProps.children,qz(Z),B=qZ(B),J=J(B),Z.flags|=1,jZ(G,Z,J,z),Z.child;case 14:return HW(G,Z,Z.type,Z.pendingProps,z);case 15:return IA(G,Z,Z.type,Z.pendingProps,z);case 19:return NA(G,Z,z);case 31:return NO(G,Z,z);case 22:return fA(G,Z,z,Z.pendingProps);case 24:return qz(Z),J=qZ(oG),G===null?(B=aj(),B===null&&(B=wG,Y=oj(),B.pooledCache=Y,Y.refCount++,Y!==null&&(B.pooledCacheLanes|=z),B=Y),Z.memoizedState={parent:J,cache:B},tj(Z),Q6(Z,oG,B)):((G.lanes&z)!==0&&(Jj(G,Z),R8(Z,null,null,z),F8()),B=G.memoizedState,Y=Z.memoizedState,B.parent!==J?(B={parent:J,cache:J},Z.memoizedState=B,Z.lanes===0&&(Z.memoizedState=Z.updateQueue.baseState=B),Q6(Z,oG,J)):(J=Y.cache,Q6(Z,oG,J),J!==B.cache&&Zj(Z,[oG],z,!0))),jZ(G,Z,Z.pendingProps.children,z),Z.child;case 29:throw Z.pendingProps}throw Error(h(156,Z.tag))}function v7(G){G.flags|=4}function I4(G,Z,z,J,B){if(Z=(G.mode&32)!==0)Z=!1;if(Z){if(G.flags|=16777216,(B&335544128)===B)if(G.stateNode.complete)G.flags|=8192;else if(tA())G.flags|=8192;else throw jz=R9,nj}else G.flags&=-16777217}function _W(G,Z){if(Z.type!=="stylesheet"||(Z.state.loading&4)!==0)G.flags&=-16777217;else if(G.flags|=16777216,!VQ(Z))if(tA())G.flags|=8192;else throw jz=R9,nj}function cB(G,Z){Z!==null&&(G.flags|=4),G.flags&16384&&(Z=G.tag!==22?eW():536870912,G.lanes|=Z,_J|=Z)}function Z8(G,Z){if(!i0)switch(G.tailMode){case"hidden":Z=G.tail;for(var z=null;Z!==null;)Z.alternate!==null&&(z=Z),Z=Z.sibling;z===null?G.tail=null:z.sibling=null;break;case"collapsed":z=G.tail;for(var J=null;z!==null;)z.alternate!==null&&(J=z),z=z.sibling;J===null?Z||G.tail===null?G.tail=null:G.tail.sibling=null:J.sibling=null}}function fG(G){var Z=G.alternate!==null&&G.alternate.child===G.child,z=0,J=0;if(Z)for(var B=G.child;B!==null;)z|=B.lanes|B.childLanes,J|=B.subtreeFlags&65011712,J|=B.flags&65011712,B.return=G,B=B.sibling;else for(B=G.child;B!==null;)z|=B.lanes|B.childLanes,J|=B.subtreeFlags,J|=B.flags,B.return=G,B=B.sibling;return G.subtreeFlags|=J,G.childLanes=z,Z}function CO(G,Z,z){var J=Z.pendingProps;switch(rj(Z),Z.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fG(Z),null;case 1:return fG(Z),null;case 3:if(z=Z.stateNode,J=null,G!==null&&(J=G.memoizedState.cache),Z.memoizedState.cache!==J&&(Z.flags|=2048),o7(oG),XJ(),z.pendingContext&&(z.context=z.pendingContext,z.pendingContext=null),G===null||G.child===null)yz(Z)?v7(Z):G===null||G.memoizedState.isDehydrated&&(Z.flags&256)===0||(Z.flags|=1024,L4());return fG(Z),null;case 26:var{type:B,memoizedState:Y}=Z;return G===null?(v7(Z),Y!==null?(fG(Z),_W(Z,Y)):(fG(Z),I4(Z,B,null,J,z))):Y?Y!==G.memoizedState?(v7(Z),fG(Z),_W(Z,Y)):(fG(Z),Z.flags&=-16777217):(G=G.memoizedProps,G!==J&&v7(Z),fG(Z),I4(Z,B,G,J,z)),null;case 27:if(A9(Z),z=D6.current,B=Z.type,G!==null&&Z.stateNode!=null)G.memoizedProps!==J&&v7(Z);else{if(!J){if(Z.stateNode===null)throw Error(h(166));return fG(Z),null}G=x7.current,yz(Z)?cq(Z,G):(G=FQ(B,J,z),Z.stateNode=G,v7(Z))}return fG(Z),null;case 5:if(A9(Z),B=Z.type,G!==null&&Z.stateNode!=null)G.memoizedProps!==J&&v7(Z);else{if(!J){if(Z.stateNode===null)throw Error(h(166));return fG(Z),null}if(Y=x7.current,yz(Z))cq(Z,Y);else{var j=b9(D6.current);switch(Y){case 1:Y=j.createElementNS("http://www.w3.org/2000/svg",B);break;case 2:Y=j.createElementNS("http://www.w3.org/1998/Math/MathML",B);break;default:switch(B){case"svg":Y=j.createElementNS("http://www.w3.org/2000/svg",B);break;case"math":Y=j.createElementNS("http://www.w3.org/1998/Math/MathML",B);break;case"script":Y=j.createElement("div"),Y.innerHTML="<script></script>",Y=Y.removeChild(Y.firstChild);break;case"select":Y=typeof J.is==="string"?j.createElement("select",{is:J.is}):j.createElement("select"),J.multiple?Y.multiple=!0:J.size&&(Y.size=J.size);break;default:Y=typeof J.is==="string"?j.createElement(B,{is:J.is}):j.createElement(B)}}Y[HZ]=Z,Y[$Z]=J;G:for(j=Z.child;j!==null;){if(j.tag===5||j.tag===6)Y.appendChild(j.stateNode);else if(j.tag!==4&&j.tag!==27&&j.child!==null){j.child.return=j,j=j.child;continue}if(j===Z)break G;for(;j.sibling===null;){if(j.return===null||j.return===Z)break G;j=j.return}j.sibling.return=j.return,j=j.sibling}Z.stateNode=Y;G:switch(WZ(Y,B,J),B){case"button":case"input":case"select":case"textarea":J=!!J.autoFocus;break G;case"img":J=!0;break G;default:J=!1}J&&v7(Z)}}return fG(Z),I4(Z,Z.type,G===null?null:G.memoizedProps,Z.pendingProps,z),null;case 6:if(G&&Z.stateNode!=null)G.memoizedProps!==J&&v7(Z);else{if(typeof J!=="string"&&Z.stateNode===null)throw Error(h(166));if(G=D6.current,yz(Z)){if(G=Z.stateNode,z=Z.memoizedProps,J=null,B=XZ,B!==null)switch(B.tag){case 27:case 5:J=B.memoizedProps}G[HZ]=Z,G=G.nodeValue===z||J!==null&&J.suppressHydrationWarning===!0||_Q(G.nodeValue,z)?!0:!1,G||k6(Z,!0)}else G=b9(G).createTextNode(J),G[HZ]=Z,Z.stateNode=G}return fG(Z),null;case 31:if(z=Z.memoizedState,G===null||G.memoizedState!==null){if(J=yz(Z),z!==null){if(G===null){if(!J)throw Error(h(318));if(G=Z.memoizedState,G=G!==null?G.dehydrated:null,!G)throw Error(h(557));G[HZ]=Z}else Xz(),(Z.flags&128)===0&&(Z.memoizedState=null),Z.flags|=4;fG(Z),G=!1}else z=L4(),G!==null&&G.memoizedState!==null&&(G.memoizedState.hydrationErrors=z),G=!0;if(!G){if(Z.flags&256)return bZ(Z),Z;return bZ(Z),null}if((Z.flags&128)!==0)throw Error(h(558))}return fG(Z),null;case 13:if(J=Z.memoizedState,G===null||G.memoizedState!==null&&G.memoizedState.dehydrated!==null){if(B=yz(Z),J!==null&&J.dehydrated!==null){if(G===null){if(!B)throw Error(h(318));if(B=Z.memoizedState,B=B!==null?B.dehydrated:null,!B)throw Error(h(317));B[HZ]=Z}else Xz(),(Z.flags&128)===0&&(Z.memoizedState=null),Z.flags|=4;fG(Z),B=!1}else B=L4(),G!==null&&G.memoizedState!==null&&(G.memoizedState.hydrationErrors=B),B=!0;if(!B){if(Z.flags&256)return bZ(Z),Z;return bZ(Z),null}}if(bZ(Z),(Z.flags&128)!==0)return Z.lanes=z,Z;return z=J!==null,G=G!==null&&G.memoizedState!==null,z&&(J=Z.child,B=null,J.alternate!==null&&J.alternate.memoizedState!==null&&J.alternate.memoizedState.cachePool!==null&&(B=J.alternate.memoizedState.cachePool.pool),Y=null,J.memoizedState!==null&&J.memoizedState.cachePool!==null&&(Y=J.memoizedState.cachePool.pool),Y!==B&&(J.flags|=2048)),z!==G&&z&&(Z.child.flags|=8192),cB(Z,Z.updateQueue),fG(Z),null;case 4:return XJ(),G===null&&VH(Z.stateNode.containerInfo),fG(Z),null;case 10:return o7(Z.type),fG(Z),null;case 19:if(BZ(cG),J=Z.memoizedState,J===null)return fG(Z),null;if(B=(Z.flags&128)!==0,Y=J.rendering,Y===null)if(B)Z8(J,!1);else{if(yG!==0||G!==null&&(G.flags&128)!==0)for(G=Z.child;G!==null;){if(Y=V9(G),Y!==null){Z.flags|=128,Z8(J,!1),G=Y.updateQueue,Z.updateQueue=G,cB(Z,G),Z.subtreeFlags=0,G=z;for(z=Z.child;z!==null;)CU(z,G),z=z.sibling;return KG(cG,cG.current&1|2),i0&&c7(Z,J.treeForkCount),Z.child}G=G.sibling}J.tail!==null&&hZ()>N9&&(Z.flags|=128,B=!0,Z8(J,!1),Z.lanes=4194304)}else{if(!B)if(G=V9(Y),G!==null){if(Z.flags|=128,B=!0,G=G.updateQueue,Z.updateQueue=G,cB(Z,G),Z8(J,!0),J.tail===null&&J.tailMode==="hidden"&&!Y.alternate&&!i0)return fG(Z),null}else 2*hZ()-J.renderingStartTime>N9&&z!==536870912&&(Z.flags|=128,B=!0,Z8(J,!1),Z.lanes=4194304);J.isBackwards?(Y.sibling=Z.child,Z.child=Y):(G=J.last,G!==null?G.sibling=Y:Z.child=Y,J.last=Y)}if(J.tail!==null)return G=J.tail,J.rendering=G,J.tail=G.sibling,J.renderingStartTime=hZ(),G.sibling=null,z=cG.current,KG(cG,B?z&1|2:z&1),i0&&c7(Z,J.treeForkCount),G;return fG(Z),null;case 22:case 23:return bZ(Z),ej(),J=Z.memoizedState!==null,G!==null?G.memoizedState!==null!==J&&(Z.flags|=8192):J&&(Z.flags|=8192),J?(z&536870912)!==0&&(Z.flags&128)===0&&(fG(Z),Z.subtreeFlags&6&&(Z.flags|=8192)):fG(Z),z=Z.updateQueue,z!==null&&cB(Z,z.retryQueue),z=null,G!==null&&G.memoizedState!==null&&G.memoizedState.cachePool!==null&&(z=G.memoizedState.cachePool.pool),J=null,Z.memoizedState!==null&&Z.memoizedState.cachePool!==null&&(J=Z.memoizedState.cachePool.pool),J!==z&&(Z.flags|=2048),G!==null&&BZ(Yz),null;case 24:return z=null,G!==null&&(z=G.memoizedState.cache),Z.memoizedState.cache!==z&&(Z.flags|=2048),o7(oG),fG(Z),null;case 25:return null;case 30:return null}throw Error(h(156,Z.tag))}function xO(G,Z){switch(rj(Z),Z.tag){case 1:return G=Z.flags,G&65536?(Z.flags=G&-65537|128,Z):null;case 3:return o7(oG),XJ(),G=Z.flags,(G&65536)!==0&&(G&128)===0?(Z.flags=G&-65537|128,Z):null;case 26:case 27:case 5:return A9(Z),null;case 31:if(Z.memoizedState!==null){if(bZ(Z),Z.alternate===null)throw Error(h(340));Xz()}return G=Z.flags,G&65536?(Z.flags=G&-65537|128,Z):null;case 13:if(bZ(Z),G=Z.memoizedState,G!==null&&G.dehydrated!==null){if(Z.alternate===null)throw Error(h(340));Xz()}return G=Z.flags,G&65536?(Z.flags=G&-65537|128,Z):null;case 19:return BZ(cG),null;case 4:return XJ(),null;case 10:return o7(Z.type),null;case 22:case 23:return bZ(Z),ej(),G!==null&&BZ(Yz),G=Z.flags,G&65536?(Z.flags=G&-65537|128,Z):null;case 24:return o7(oG),null;case 25:return null;default:return null}}function CA(G,Z){switch(rj(Z),Z.tag){case 3:o7(oG),XJ();break;case 26:case 27:case 5:A9(Z);break;case 4:XJ();break;case 31:Z.memoizedState!==null&&bZ(Z);break;case 13:bZ(Z);break;case 19:BZ(cG);break;case 10:o7(Z.type);break;case 22:case 23:bZ(Z),ej(),G!==null&&BZ(Yz);break;case 24:o7(oG)}}function r8(G,Z){try{var z=Z.updateQueue,J=z!==null?z.lastEffect:null;if(J!==null){var B=J.next;z=B;do{if((z.tag&G)===G){J=void 0;var{create:Y,inst:j}=z;J=Y(),j.destroy=J}z=z.next}while(z!==B)}}catch(H){AG(Z,Z.return,H)}}function b6(G,Z,z){try{var J=Z.updateQueue,B=J!==null?J.lastEffect:null;if(B!==null){var Y=B.next;J=Y;do{if((J.tag&G)===G){var j=J.inst,H=j.destroy;if(H!==void 0){j.destroy=void 0,B=Z;var X=z,F=H;try{F()}catch(Q){AG(B,X,Q)}}}J=J.next}while(J!==Y)}}catch(Q){AG(Z,Z.return,Q)}}function xA(G){var Z=G.updateQueue;if(Z!==null){var z=G.stateNode;try{vU(Z,z)}catch(J){AG(G,G.return,J)}}}function SA(G,Z,z){z.props=Az(G.type,G.memoizedProps),z.state=G.memoizedState;try{z.componentWillUnmount()}catch(J){AG(G,Z,J)}}function V8(G,Z){try{var z=G.ref;if(z!==null){switch(G.tag){case 26:case 27:case 5:var J=G.stateNode;break;case 30:J=G.stateNode;break;default:J=G.stateNode}typeof z==="function"?G.refCleanup=z(J):z.current=J}}catch(B){AG(G,Z,B)}}function C7(G,Z){var{ref:z,refCleanup:J}=G;if(z!==null)if(typeof J==="function")try{J()}catch(B){AG(G,Z,B)}finally{G.refCleanup=null,G=G.alternate,G!=null&&(G.refCleanup=null)}else if(typeof z==="function")try{z(null)}catch(B){AG(G,Z,B)}else z.current=null}function kA(G){var{type:Z,memoizedProps:z,stateNode:J}=G;try{G:switch(Z){case"button":case"input":case"select":case"textarea":z.autoFocus&&J.focus();break G;case"img":z.src?J.src=z.src:z.srcSet&&(J.srcset=z.srcSet)}}catch(B){AG(G,G.return,B)}}function f4(G,Z,z){try{var J=G.stateNode;aO(J,G.type,z,Z),J[$Z]=Z}catch(B){AG(G,G.return,B)}}function bA(G){return G.tag===5||G.tag===3||G.tag===26||G.tag===27&&h6(G.type)||G.tag===4}function T4(G){G:for(;;){for(;G.sibling===null;){if(G.return===null||bA(G.return))return null;G=G.return}G.sibling.return=G.return;for(G=G.sibling;G.tag!==5&&G.tag!==6&&G.tag!==18;){if(G.tag===27&&h6(G.type))continue G;if(G.flags&2)continue G;if(G.child===null||G.tag===4)continue G;else G.child.return=G,G=G.child}if(!(G.flags&2))return G.stateNode}}function _j(G,Z,z){var J=G.tag;if(J===5||J===6)G=G.stateNode,Z?(z.nodeType===9?z.body:z.nodeName==="HTML"?z.ownerDocument.body:z).insertBefore(G,Z):(Z=z.nodeType===9?z.body:z.nodeName==="HTML"?z.ownerDocument.body:z,Z.appendChild(G),z=z._reactRootContainer,z!==null&&z!==void 0||Z.onclick!==null||(Z.onclick=i7));else if(J!==4&&(J===27&&h6(G.type)&&(z=G.stateNode,Z=null),G=G.child,G!==null))for(_j(G,Z,z),G=G.sibling;G!==null;)_j(G,Z,z),G=G.sibling}function T9(G,Z,z){var J=G.tag;if(J===5||J===6)G=G.stateNode,Z?z.insertBefore(G,Z):z.appendChild(G);else if(J!==4&&(J===27&&h6(G.type)&&(z=G.stateNode),G=G.child,G!==null))for(T9(G,Z,z),G=G.sibling;G!==null;)T9(G,Z,z),G=G.sibling}function PA(G){var{stateNode:Z,memoizedProps:z}=G;try{for(var J=G.type,B=Z.attributes;B.length;)Z.removeAttributeNode(B[0]);WZ(Z,J,z),Z[HZ]=G,Z[$Z]=z}catch(Y){AG(G,G.return,Y)}}var l7=!1,rG=!1,N4=!1,LW=typeof WeakSet==="function"?WeakSet:Set,zZ=null;function SO(G,Z){if(G=G.containerInfo,Kj=g9,G=VU(G),cj(G)){if("selectionStart"in G)var z={start:G.selectionStart,end:G.selectionEnd};else G:{z=(z=G.ownerDocument)&&z.defaultView||window;var J=z.getSelection&&z.getSelection();if(J&&J.rangeCount!==0){z=J.anchorNode;var{anchorOffset:B,focusNode:Y}=J;J=J.focusOffset;try{z.nodeType,Y.nodeType}catch(S){z=null;break G}var j=0,H=-1,X=-1,F=0,Q=0,R=G,A=null;Z:for(;;){for(var D;;){if(R!==z||B!==0&&R.nodeType!==3||(H=j+B),R!==Y||J!==0&&R.nodeType!==3||(X=j+J),R.nodeType===3&&(j+=R.nodeValue.length),(D=R.firstChild)===null)break;A=R,R=D}for(;;){if(R===G)break Z;if(A===z&&++F===B&&(H=j),A===Y&&++Q===J&&(X=j),(D=R.nextSibling)!==null)break;R=A,A=R.parentNode}R=D}z=H===-1||X===-1?null:{start:H,end:X}}else z=null}z=z||{start:0,end:0}}else z=null;Ij={focusedElem:G,selectionRange:z},g9=!1;for(zZ=Z;zZ!==null;)if(Z=zZ,G=Z.child,(Z.subtreeFlags&1028)!==0&&G!==null)G.return=Z,zZ=G;else for(;zZ!==null;){switch(Z=zZ,Y=Z.alternate,G=Z.flags,Z.tag){case 0:if((G&4)!==0&&(G=Z.updateQueue,G=G!==null?G.events:null,G!==null))for(z=0;z<G.length;z++)B=G[z],B.ref.impl=B.nextImpl;break;case 11:case 15:break;case 1:if((G&1024)!==0&&Y!==null){G=void 0,z=Z,B=Y.memoizedProps,Y=Y.memoizedState,J=z.stateNode;try{var f=Az(z.type,B);G=J.getSnapshotBeforeUpdate(f,Y),J.__reactInternalSnapshotBeforeUpdate=G}catch(S){AG(z,z.return,S)}}break;case 3:if((G&1024)!==0){if(G=Z.stateNode.containerInfo,z=G.nodeType,z===9)Tj(G);else if(z===1)switch(G.nodeName){case"HEAD":case"HTML":case"BODY":Tj(G);break;default:G.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((G&1024)!==0)throw Error(h(163))}if(G=Z.sibling,G!==null){G.return=Z.return,zZ=G;break}zZ=Z.return}}function EA(G,Z,z){var J=z.flags;switch(z.tag){case 0:case 11:case 15:m7(G,z),J&4&&r8(5,z);break;case 1:if(m7(G,z),J&4)if(G=z.stateNode,Z===null)try{G.componentDidMount()}catch(j){AG(z,z.return,j)}else{var B=Az(z.type,Z.memoizedProps);Z=Z.memoizedState;try{G.componentDidUpdate(B,Z,G.__reactInternalSnapshotBeforeUpdate)}catch(j){AG(z,z.return,j)}}J&64&&xA(z),J&512&&V8(z,z.return);break;case 3:if(m7(G,z),J&64&&(G=z.updateQueue,G!==null)){if(Z=null,z.child!==null)switch(z.child.tag){case 27:case 5:Z=z.child.stateNode;break;case 1:Z=z.child.stateNode}try{vU(G,Z)}catch(j){AG(z,z.return,j)}}break;case 27:Z===null&&J&4&&PA(z);case 26:case 5:m7(G,z),Z===null&&J&4&&kA(z),J&512&&V8(z,z.return);break;case 12:m7(G,z);break;case 31:m7(G,z),J&4&&yA(G,z);break;case 13:m7(G,z),J&4&&vA(G,z),J&64&&(G=z.memoizedState,G!==null&&(G=G.dehydrated,G!==null&&(z=uO.bind(null,z),BM(G,z))));break;case 22:if(J=z.memoizedState!==null||l7,!J){Z=Z!==null&&Z.memoizedState!==null||rG,B=l7;var Y=rG;l7=J,(rG=Z)&&!Y?d7(G,z,(z.subtreeFlags&8772)!==0):m7(G,z),l7=B,rG=Y}break;case 30:break;default:m7(G,z)}}function hA(G){var Z=G.alternate;Z!==null&&(G.alternate=null,hA(Z)),G.child=null,G.deletions=null,G.sibling=null,G.tag===5&&(Z=G.stateNode,Z!==null&&gj(Z)),G.stateNode=null,G.return=null,G.dependencies=null,G.memoizedProps=null,G.memoizedState=null,G.pendingProps=null,G.stateNode=null,G.updateQueue=null}var xG=null,fZ=!1;function u7(G,Z,z){for(z=z.child;z!==null;)gA(G,Z,z),z=z.sibling}function gA(G,Z,z){if(gZ&&typeof gZ.onCommitFiberUnmount==="function")try{gZ.onCommitFiberUnmount(m8,z)}catch(Y){}switch(z.tag){case 26:rG||C7(z,Z),u7(G,Z,z),z.memoizedState?z.memoizedState.count--:z.stateNode&&(z=z.stateNode,z.parentNode.removeChild(z));break;case 27:rG||C7(z,Z);var J=xG,B=fZ;h6(z.type)&&(xG=z.stateNode,fZ=!1),u7(G,Z,z),f8(z.stateNode),xG=J,fZ=B;break;case 5:rG||C7(z,Z);case 6:if(J=xG,B=fZ,xG=null,u7(G,Z,z),xG=J,fZ=B,xG!==null)if(fZ)try{(xG.nodeType===9?xG.body:xG.nodeName==="HTML"?xG.ownerDocument.body:xG).removeChild(z.stateNode)}catch(Y){AG(z,Z,Y)}else try{xG.removeChild(z.stateNode)}catch(Y){AG(z,Z,Y)}break;case 18:xG!==null&&(fZ?(G=xG,$W(G.nodeType===9?G.body:G.nodeName==="HTML"?G.ownerDocument.body:G,z.stateNode),FJ(G)):$W(xG,z.stateNode));break;case 4:J=xG,B=fZ,xG=z.stateNode.containerInfo,fZ=!0,u7(G,Z,z),xG=J,fZ=B;break;case 0:case 11:case 14:case 15:b6(2,z,Z),rG||b6(4,z,Z),u7(G,Z,z);break;case 1:rG||(C7(z,Z),J=z.stateNode,typeof J.componentWillUnmount==="function"&&SA(z,Z,J)),u7(G,Z,z);break;case 21:u7(G,Z,z);break;case 22:rG=(J=rG)||z.memoizedState!==null,u7(G,Z,z),rG=J;break;default:u7(G,Z,z)}}function yA(G,Z){if(Z.memoizedState===null&&(G=Z.alternate,G!==null&&(G=G.memoizedState,G!==null))){G=G.dehydrated;try{FJ(G)}catch(z){AG(Z,Z.return,z)}}}function vA(G,Z){if(Z.memoizedState===null&&(G=Z.alternate,G!==null&&(G=G.memoizedState,G!==null&&(G=G.dehydrated,G!==null))))try{FJ(G)}catch(z){AG(Z,Z.return,z)}}function kO(G){switch(G.tag){case 31:case 13:case 19:var Z=G.stateNode;return Z===null&&(Z=G.stateNode=new LW),Z;case 22:return G=G.stateNode,Z=G._retryCache,Z===null&&(Z=G._retryCache=new LW),Z;default:throw Error(h(435,G.tag))}}function lB(G,Z){var z=kO(G);Z.forEach(function(J){if(!z.has(J)){z.add(J);var B=mO.bind(null,G,J);J.then(B,B)}})}function KZ(G,Z){var z=Z.deletions;if(z!==null)for(var J=0;J<z.length;J++){var B=z[J],Y=G,j=Z,H=j;G:for(;H!==null;){switch(H.tag){case 27:if(h6(H.type)){xG=H.stateNode,fZ=!1;break G}break;case 5:xG=H.stateNode,fZ=!1;break G;case 3:case 4:xG=H.stateNode.containerInfo,fZ=!0;break G}H=H.return}if(xG===null)throw Error(h(160));gA(Y,j,B),xG=null,fZ=!1,Y=B.alternate,Y!==null&&(Y.return=null),B.return=null}if(Z.subtreeFlags&13886)for(Z=Z.child;Z!==null;)uA(Z,G),Z=Z.sibling}var _7=null;function uA(G,Z){var{alternate:z,flags:J}=G;switch(G.tag){case 0:case 11:case 14:case 15:KZ(Z,G),IZ(G),J&4&&(b6(3,G,G.return),r8(3,G),b6(5,G,G.return));break;case 1:KZ(Z,G),IZ(G),J&512&&(rG||z===null||C7(z,z.return)),J&64&&l7&&(G=G.updateQueue,G!==null&&(J=G.callbacks,J!==null&&(z=G.shared.hiddenCallbacks,G.shared.hiddenCallbacks=z===null?J:z.concat(J))));break;case 26:var B=_7;if(KZ(Z,G),IZ(G),J&512&&(rG||z===null||C7(z,z.return)),J&4){var Y=z!==null?z.memoizedState:null;if(J=G.memoizedState,z===null)if(J===null)if(G.stateNode===null){G:{J=G.type,z=G.memoizedProps,B=B.ownerDocument||B;Z:switch(J){case"title":if(Y=B.getElementsByTagName("title")[0],!Y||Y[l8]||Y[HZ]||Y.namespaceURI==="http://www.w3.org/2000/svg"||Y.hasAttribute("itemprop"))Y=B.createElement(J),B.head.insertBefore(Y,B.querySelector("head > title"));WZ(Y,J,z),Y[HZ]=G,JZ(Y),J=Y;break G;case"link":var j=EW("link","href",B).get(J+(z.href||""));if(j){for(var H=0;H<j.length;H++)if(Y=j[H],Y.getAttribute("href")===(z.href==null||z.href===""?null:z.href)&&Y.getAttribute("rel")===(z.rel==null?null:z.rel)&&Y.getAttribute("title")===(z.title==null?null:z.title)&&Y.getAttribute("crossorigin")===(z.crossOrigin==null?null:z.crossOrigin)){j.splice(H,1);break Z}}Y=B.createElement(J),WZ(Y,J,z),B.head.appendChild(Y);break;case"meta":if(j=EW("meta","content",B).get(J+(z.content||""))){for(H=0;H<j.length;H++)if(Y=j[H],Y.getAttribute("content")===(z.content==null?null:""+z.content)&&Y.getAttribute("name")===(z.name==null?null:z.name)&&Y.getAttribute("property")===(z.property==null?null:z.property)&&Y.getAttribute("http-equiv")===(z.httpEquiv==null?null:z.httpEquiv)&&Y.getAttribute("charset")===(z.charSet==null?null:z.charSet)){j.splice(H,1);break Z}}Y=B.createElement(J),WZ(Y,J,z),B.head.appendChild(Y);break;default:throw Error(h(468,J))}Y[HZ]=G,JZ(Y),J=Y}G.stateNode=J}else hW(B,G.type,G.stateNode);else G.stateNode=PW(B,J,G.memoizedProps);else Y!==J?(Y===null?z.stateNode!==null&&(z=z.stateNode,z.parentNode.removeChild(z)):Y.count--,J===null?hW(B,G.type,G.stateNode):PW(B,J,G.memoizedProps)):J===null&&G.stateNode!==null&&f4(G,G.memoizedProps,z.memoizedProps)}break;case 27:KZ(Z,G),IZ(G),J&512&&(rG||z===null||C7(z,z.return)),z!==null&&J&4&&f4(G,G.memoizedProps,z.memoizedProps);break;case 5:if(KZ(Z,G),IZ(G),J&512&&(rG||z===null||C7(z,z.return)),G.flags&32){B=G.stateNode;try{WJ(B,"")}catch(f){AG(G,G.return,f)}}J&4&&G.stateNode!=null&&(B=G.memoizedProps,f4(G,B,z!==null?z.memoizedProps:B)),J&1024&&(N4=!0);break;case 6:if(KZ(Z,G),IZ(G),J&4){if(G.stateNode===null)throw Error(h(162));J=G.memoizedProps,z=G.stateNode;try{z.nodeValue=J}catch(f){AG(G,G.return,f)}}break;case 3:if(H9=null,B=_7,_7=P9(Z.containerInfo),KZ(Z,G),_7=B,IZ(G),J&4&&z!==null&&z.memoizedState.isDehydrated)try{FJ(Z.containerInfo)}catch(f){AG(G,G.return,f)}N4&&(N4=!1,mA(G));break;case 4:J=_7,_7=P9(G.stateNode.containerInfo),KZ(Z,G),IZ(G),_7=J;break;case 12:KZ(Z,G),IZ(G);break;case 31:KZ(Z,G),IZ(G),J&4&&(J=G.updateQueue,J!==null&&(G.updateQueue=null,lB(G,J)));break;case 13:KZ(Z,G),IZ(G),G.child.flags&8192&&G.memoizedState!==null!==(z!==null&&z.memoizedState!==null)&&(a9=hZ()),J&4&&(J=G.updateQueue,J!==null&&(G.updateQueue=null,lB(G,J)));break;case 22:B=G.memoizedState!==null;var X=z!==null&&z.memoizedState!==null,F=l7,Q=rG;if(l7=F||B,rG=Q||X,KZ(Z,G),rG=Q,l7=F,IZ(G),J&8192)G:for(Z=G.stateNode,Z._visibility=B?Z._visibility&-2:Z._visibility|1,B&&(z===null||X||l7||rG||zz(G)),z=null,Z=G;;){if(Z.tag===5||Z.tag===26){if(z===null){X=z=Z;try{if(Y=X.stateNode,B)j=Y.style,typeof j.setProperty==="function"?j.setProperty("display","none","important"):j.display="none";else{H=X.stateNode;var R=X.memoizedProps.style,A=R!==void 0&&R!==null&&R.hasOwnProperty("display")?R.display:null;H.style.display=A==null||typeof A==="boolean"?"":(""+A).trim()}}catch(f){AG(X,X.return,f)}}}else if(Z.tag===6){if(z===null){X=Z;try{X.stateNode.nodeValue=B?"":X.memoizedProps}catch(f){AG(X,X.return,f)}}}else if(Z.tag===18){if(z===null){X=Z;try{var D=X.stateNode;B?CW(D,!0):CW(X.stateNode,!1)}catch(f){AG(X,X.return,f)}}}else if((Z.tag!==22&&Z.tag!==23||Z.memoizedState===null||Z===G)&&Z.child!==null){Z.child.return=Z,Z=Z.child;continue}if(Z===G)break G;for(;Z.sibling===null;){if(Z.return===null||Z.return===G)break G;z===Z&&(z=null),Z=Z.return}z===Z&&(z=null),Z.sibling.return=Z.return,Z=Z.sibling}J&4&&(J=G.updateQueue,J!==null&&(z=J.retryQueue,z!==null&&(J.retryQueue=null,lB(G,z))));break;case 19:KZ(Z,G),IZ(G),J&4&&(J=G.updateQueue,J!==null&&(G.updateQueue=null,lB(G,J)));break;case 30:break;case 21:break;default:KZ(Z,G),IZ(G)}}function IZ(G){var Z=G.flags;if(Z&2){try{for(var z,J=G.return;J!==null;){if(bA(J)){z=J;break}J=J.return}if(z==null)throw Error(h(160));switch(z.tag){case 27:var B=z.stateNode,Y=T4(G);T9(G,Y,B);break;case 5:var j=z.stateNode;z.flags&32&&(WJ(j,""),z.flags&=-33);var H=T4(G);T9(G,H,j);break;case 3:case 4:var X=z.stateNode.containerInfo,F=T4(G);_j(G,F,X);break;default:throw Error(h(161))}}catch(Q){AG(G,G.return,Q)}G.flags&=-3}Z&4096&&(G.flags&=-4097)}function mA(G){if(G.subtreeFlags&1024)for(G=G.child;G!==null;){var Z=G;mA(Z),Z.tag===5&&Z.flags&1024&&Z.stateNode.reset(),G=G.sibling}}function m7(G,Z){if(Z.subtreeFlags&8772)for(Z=Z.child;Z!==null;)EA(G,Z.alternate,Z),Z=Z.sibling}function zz(G){for(G=G.child;G!==null;){var Z=G;switch(Z.tag){case 0:case 11:case 14:case 15:b6(4,Z,Z.return),zz(Z);break;case 1:C7(Z,Z.return);var z=Z.stateNode;typeof z.componentWillUnmount==="function"&&SA(Z,Z.return,z),zz(Z);break;case 27:f8(Z.stateNode);case 26:case 5:C7(Z,Z.return),zz(Z);break;case 22:Z.memoizedState===null&&zz(Z);break;case 30:zz(Z);break;default:zz(Z)}G=G.sibling}}function d7(G,Z,z){z=z&&(Z.subtreeFlags&8772)!==0;for(Z=Z.child;Z!==null;){var J=Z.alternate,B=G,Y=Z,j=Y.flags;switch(Y.tag){case 0:case 11:case 15:d7(B,Y,z),r8(4,Y);break;case 1:if(d7(B,Y,z),J=Y,B=J.stateNode,typeof B.componentDidMount==="function")try{B.componentDidMount()}catch(F){AG(J,J.return,F)}if(J=Y,B=J.updateQueue,B!==null){var H=J.stateNode;try{var X=B.shared.hiddenCallbacks;if(X!==null)for(B.shared.hiddenCallbacks=null,B=0;B<X.length;B++)yU(X[B],H)}catch(F){AG(J,J.return,F)}}z&&j&64&&xA(Y),V8(Y,Y.return);break;case 27:PA(Y);case 26:case 5:d7(B,Y,z),z&&J===null&&j&4&&kA(Y),V8(Y,Y.return);break;case 12:d7(B,Y,z);break;case 31:d7(B,Y,z),z&&j&4&&yA(B,Y);break;case 13:d7(B,Y,z),z&&j&4&&vA(B,Y);break;case 22:Y.memoizedState===null&&d7(B,Y,z),V8(Y,Y.return);break;case 30:break;default:d7(B,Y,z)}Z=Z.sibling}}function LH(G,Z){var z=null;G!==null&&G.memoizedState!==null&&G.memoizedState.cachePool!==null&&(z=G.memoizedState.cachePool.pool),G=null,Z.memoizedState!==null&&Z.memoizedState.cachePool!==null&&(G=Z.memoizedState.cachePool.pool),G!==z&&(G!=null&&G.refCount++,z!=null&&i8(z))}function OH(G,Z){G=null,Z.alternate!==null&&(G=Z.alternate.memoizedState.cache),Z=Z.memoizedState.cache,Z!==G&&(Z.refCount++,G!=null&&i8(G))}function Q7(G,Z,z,J){if(Z.subtreeFlags&10256)for(Z=Z.child;Z!==null;)dA(G,Z,z,J),Z=Z.sibling}function dA(G,Z,z,J){var B=Z.flags;switch(Z.tag){case 0:case 11:case 15:Q7(G,Z,z,J),B&2048&&r8(9,Z);break;case 1:Q7(G,Z,z,J);break;case 3:Q7(G,Z,z,J),B&2048&&(G=null,Z.alternate!==null&&(G=Z.alternate.memoizedState.cache),Z=Z.memoizedState.cache,Z!==G&&(Z.refCount++,G!=null&&i8(G)));break;case 12:if(B&2048){Q7(G,Z,z,J),G=Z.stateNode;try{var Y=Z.memoizedProps,j=Y.id,H=Y.onPostCommit;typeof H==="function"&&H(j,Z.alternate===null?"mount":"update",G.passiveEffectDuration,-0)}catch(X){AG(Z,Z.return,X)}}else Q7(G,Z,z,J);break;case 31:Q7(G,Z,z,J);break;case 13:Q7(G,Z,z,J);break;case 23:break;case 22:Y=Z.stateNode,j=Z.alternate,Z.memoizedState!==null?Y._visibility&2?Q7(G,Z,z,J):D8(G,Z):Y._visibility&2?Q7(G,Z,z,J):(Y._visibility|=2,uz(G,Z,z,J,(Z.subtreeFlags&10256)!==0||!1)),B&2048&&LH(j,Z);break;case 24:Q7(G,Z,z,J),B&2048&&OH(Z.alternate,Z);break;default:Q7(G,Z,z,J)}}function uz(G,Z,z,J,B){B=B&&((Z.subtreeFlags&10256)!==0||!1);for(Z=Z.child;Z!==null;){var Y=G,j=Z,H=z,X=J,F=j.flags;switch(j.tag){case 0:case 11:case 15:uz(Y,j,H,X,B),r8(8,j);break;case 23:break;case 22:var Q=j.stateNode;j.memoizedState!==null?Q._visibility&2?uz(Y,j,H,X,B):D8(Y,j):(Q._visibility|=2,uz(Y,j,H,X,B)),B&&F&2048&&LH(j.alternate,j);break;case 24:uz(Y,j,H,X,B),B&&F&2048&&OH(j.alternate,j);break;default:uz(Y,j,H,X,B)}Z=Z.sibling}}function D8(G,Z){if(Z.subtreeFlags&10256)for(Z=Z.child;Z!==null;){var z=G,J=Z,B=J.flags;switch(J.tag){case 22:D8(z,J),B&2048&&LH(J.alternate,J);break;case 24:D8(z,J),B&2048&&OH(J.alternate,J);break;default:D8(z,J)}Z=Z.sibling}}var W8=8192;function vz(G,Z,z){if(G.subtreeFlags&W8)for(G=G.child;G!==null;)cA(G,Z,z),G=G.sibling}function cA(G,Z,z){switch(G.tag){case 26:vz(G,Z,z),G.flags&W8&&G.memoizedState!==null&&OM(z,_7,G.memoizedState,G.memoizedProps);break;case 5:vz(G,Z,z);break;case 3:case 4:var J=_7;_7=P9(G.stateNode.containerInfo),vz(G,Z,z),_7=J;break;case 22:G.memoizedState===null&&(J=G.alternate,J!==null&&J.memoizedState!==null?(J=W8,W8=16777216,vz(G,Z,z),W8=J):vz(G,Z,z));break;default:vz(G,Z,z)}}function lA(G){var Z=G.alternate;if(Z!==null&&(G=Z.child,G!==null)){Z.child=null;do Z=G.sibling,G.sibling=null,G=Z;while(G!==null)}}function z8(G){var Z=G.deletions;if((G.flags&16)!==0){if(Z!==null)for(var z=0;z<Z.length;z++){var J=Z[z];zZ=J,iA(J,G)}lA(G)}if(G.subtreeFlags&10256)for(G=G.child;G!==null;)pA(G),G=G.sibling}function pA(G){switch(G.tag){case 0:case 11:case 15:z8(G),G.flags&2048&&b6(9,G,G.return);break;case 3:z8(G);break;case 12:z8(G);break;case 22:var Z=G.stateNode;G.memoizedState!==null&&Z._visibility&2&&(G.return===null||G.return.tag!==13)?(Z._visibility&=-3,Y9(G)):z8(G);break;default:z8(G)}}function Y9(G){var Z=G.deletions;if((G.flags&16)!==0){if(Z!==null)for(var z=0;z<Z.length;z++){var J=Z[z];zZ=J,iA(J,G)}lA(G)}for(G=G.child;G!==null;){switch(Z=G,Z.tag){case 0:case 11:case 15:b6(8,Z,Z.return),Y9(Z);break;case 22:z=Z.stateNode,z._visibility&2&&(z._visibility&=-3,Y9(Z));break;default:Y9(Z)}G=G.sibling}}function iA(G,Z){for(;zZ!==null;){var z=zZ;switch(z.tag){case 0:case 11:case 15:b6(8,z,Z);break;case 23:case 22:if(z.memoizedState!==null&&z.memoizedState.cachePool!==null){var J=z.memoizedState.cachePool.pool;J!=null&&J.refCount++}break;case 24:i8(z.memoizedState.cache)}if(J=z.child,J!==null)J.return=z,zZ=J;else G:for(z=G;zZ!==null;){J=zZ;var{sibling:B,return:Y}=J;if(hA(J),J===z){zZ=null;break G}if(B!==null){B.return=Y,zZ=B;break G}zZ=Y}}}var bO={getCacheForType:function(G){var Z=qZ(oG),z=Z.data.get(G);return z===void 0&&(z=G(),Z.data.set(G,z)),z},cacheSignal:function(){return qZ(oG).controller.signal}},PO=typeof WeakMap==="function"?WeakMap:Map,BG=0,wG=null,d0=null,p0=0,UG=0,kZ=null,R6=!1,KJ=!1,MH=!1,Z6=0,yG=0,P6=0,Hz=0,FH=0,EZ=0,_J=0,K8=null,TZ=null,Lj=!1,a9=0,sA=0,N9=1/0,$9=null,T6=null,eG=0,N6=null,LJ=null,a7=0,Oj=0,Mj=null,rA=null,I8=0,Fj=null;function vZ(){return(BG&2)!==0&&p0!==0?p0&-p0:K0.T!==null?wH():JU()}function oA(){if(EZ===0)if((p0&536870912)===0||i0){var G=hB;hB<<=1,(hB&3932160)===0&&(hB=262144),EZ=G}else EZ=536870912;return G=mZ.current,G!==null&&(G.flags|=32),EZ}function NZ(G,Z,z){if(G===wG&&(UG===2||UG===9)||G.cancelPendingCommit!==null)OJ(G,0),w6(G,p0,EZ,!1);if(c8(G,z),(BG&2)===0||G!==wG)G===wG&&((BG&2)===0&&(Hz|=z),yG===4&&w6(G,p0,EZ,!1)),k7(G)}function aA(G,Z,z){if((BG&6)!==0)throw Error(h(327));var J=!z&&(Z&127)===0&&(Z&G.expiredLanes)===0||d8(G,Z),B=J?gO(G,Z):$4(G,Z,!0),Y=J;do{if(B===0){KJ&&!J&&w6(G,Z,0,!1);break}else{if(z=G.current.alternate,Y&&!EO(z)){B=$4(G,Z,!1),Y=!1;continue}if(B===2){if(Y=Z,G.errorRecoveryDisabledLanes&Y)var j=0;else j=G.pendingLanes&-536870913,j=j!==0?j:j&536870912?536870912:0;if(j!==0){Z=j;G:{var H=G;B=K8;var X=H.current.memoizedState.isDehydrated;if(X&&(OJ(H,j).flags|=256),j=$4(H,j,!1),j!==2){if(MH&&!X){H.errorRecoveryDisabledLanes|=Y,Hz|=Y,B=4;break G}Y=TZ,TZ=B,Y!==null&&(TZ===null?TZ=Y:TZ.push.apply(TZ,Y))}B=j}if(Y=!1,B!==2)continue}}if(B===1){OJ(G,0),w6(G,Z,0,!0);break}G:{switch(J=G,Y=B,Y){case 0:case 1:throw Error(h(345));case 4:if((Z&4194048)!==Z)break;case 6:w6(J,Z,EZ,!R6);break G;case 2:TZ=null;break;case 3:case 5:break;default:throw Error(h(329))}if((Z&62914560)===Z&&(B=a9+300-hZ(),10<B)){if(w6(J,Z,EZ,!R6),v9(J,0,!0)!==0)break G;a7=Z,J.timeoutHandle=OQ(OW.bind(null,J,z,TZ,$9,Lj,Z,EZ,Hz,_J,R6,Y,"Throttled",-0,0),B);break G}OW(J,z,TZ,$9,Lj,Z,EZ,Hz,_J,R6,Y,null,-0,0)}}break}while(1);k7(G)}function OW(G,Z,z,J,B,Y,j,H,X,F,Q,R,A,D){if(G.timeoutHandle=-1,R=Z.subtreeFlags,R&8192||(R&16785408)===16785408){R={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:i7},cA(Z,Y,R);var f=(Y&62914560)===Y?a9-hZ():(Y&4194048)===Y?sA-hZ():0;if(f=MM(R,f),f!==null){a7=Y,G.cancelPendingCommit=f(FW.bind(null,G,Z,Y,z,J,B,j,H,X,Q,R,null,A,D)),w6(G,Y,j,!F);return}}FW(G,Z,Y,z,J,B,j,H,X)}function EO(G){for(var Z=G;;){var z=Z.tag;if((z===0||z===11||z===15)&&Z.flags&16384&&(z=Z.updateQueue,z!==null&&(z=z.stores,z!==null)))for(var J=0;J<z.length;J++){var B=z[J],Y=B.getSnapshot;B=B.value;try{if(!uZ(Y(),B))return!1}catch(j){return!1}}if(z=Z.child,Z.subtreeFlags&16384&&z!==null)z.return=Z,Z=z;else{if(Z===G)break;for(;Z.sibling===null;){if(Z.return===null||Z.return===G)return!0;Z=Z.return}Z.sibling.return=Z.return,Z=Z.sibling}}return!0}function w6(G,Z,z,J){Z&=~FH,Z&=~Hz,G.suspendedLanes|=Z,G.pingedLanes&=~Z,J&&(G.warmLanes|=Z),J=G.expirationTimes;for(var B=Z;0<B;){var Y=31-yZ(B),j=1<<Y;J[Y]=-1,B&=~j}z!==0&&GU(G,z,Z)}function n9(){return(BG&6)===0?(o8(0,!1),!1):!0}function RH(){if(d0!==null){if(UG===0)var G=d0.return;else G=d0,s7=Mz=null,BH(G),YJ=null,k8=0,G=d0;for(;G!==null;)CA(G.alternate,G),G=G.return;d0=null}}function OJ(G,Z){var z=G.timeoutHandle;z!==-1&&(G.timeoutHandle=-1,eO(z)),z=G.cancelPendingCommit,z!==null&&(G.cancelPendingCommit=null,z()),a7=0,RH(),wG=G,d0=z=r7(G.current,null),p0=Z,UG=0,kZ=null,R6=!1,KJ=d8(G,Z),MH=!1,_J=EZ=FH=Hz=P6=yG=0,TZ=K8=null,Lj=!1,(Z&8)!==0&&(Z|=Z&32);var J=G.entangledLanes;if(J!==0)for(G=G.entanglements,J&=Z;0<J;){var B=31-yZ(J),Y=1<<B;Z|=G[B],J&=~Y}return Z6=Z,c9(),z}function nA(G,Z){b0=null,K0.H=P8,Z===DJ||Z===p9?(Z=rq(),UG=3):Z===nj?(Z=rq(),UG=4):UG=Z===QH?8:Z!==null&&typeof Z==="object"&&typeof Z.then==="function"?6:1,kZ=Z,d0===null&&(yG=1,I9(G,eZ(Z,G.current)))}function tA(){var G=mZ.current;return G===null?!0:(p0&4194048)===p0?Z7===null?!0:!1:(p0&62914560)===p0||(p0&536870912)!==0?G===Z7:!1}function eA(){var G=K0.H;return K0.H=P8,G===null?P8:G}function GQ(){var G=K0.A;return K0.A=bO,G}function C9(){yG=4,R6||(p0&4194048)!==p0&&mZ.current!==null||(KJ=!0),(P6&134217727)===0&&(Hz&134217727)===0||wG===null||w6(wG,p0,EZ,!1)}function $4(G,Z,z){var J=BG;BG|=2;var B=eA(),Y=GQ();if(wG!==G||p0!==Z)$9=null,OJ(G,Z);Z=!1;var j=yG;G:do try{if(UG!==0&&d0!==null){var H=d0,X=kZ;switch(UG){case 8:RH(),j=6;break G;case 3:case 2:case 9:case 6:mZ.current===null&&(Z=!0);var F=UG;if(UG=0,kZ=null,GJ(G,H,X,F),z&&KJ){j=0;break G}break;default:F=UG,UG=0,kZ=null,GJ(G,H,X,F)}}hO(),j=yG;break}catch(Q){nA(G,Q)}while(1);return Z&&G.shellSuspendCounter++,s7=Mz=null,BG=J,K0.H=B,K0.A=Y,d0===null&&(wG=null,p0=0,c9()),j}function hO(){for(;d0!==null;)ZQ(d0)}function gO(G,Z){var z=BG;BG|=2;var J=eA(),B=GQ();wG!==G||p0!==Z?($9=null,N9=hZ()+500,OJ(G,Z)):KJ=d8(G,Z);G:do try{if(UG!==0&&d0!==null){Z=d0;var Y=kZ;Z:switch(UG){case 1:UG=0,kZ=null,GJ(G,Z,Y,1);break;case 2:case 9:if(sq(Y)){UG=0,kZ=null,MW(Z);break}Z=function(){UG!==2&&UG!==9||wG!==G||(UG=7),k7(G)},Y.then(Z,Z);break G;case 3:UG=7;break G;case 4:UG=5;break G;case 7:sq(Y)?(UG=0,kZ=null,MW(Z)):(UG=0,kZ=null,GJ(G,Z,Y,7));break;case 5:var j=null;switch(d0.tag){case 26:j=d0.memoizedState;case 5:case 27:var H=d0;if(j?VQ(j):H.stateNode.complete){UG=0,kZ=null;var X=H.sibling;if(X!==null)d0=X;else{var F=H.return;F!==null?(d0=F,t9(F)):d0=null}break Z}}UG=0,kZ=null,GJ(G,Z,Y,5);break;case 6:UG=0,kZ=null,GJ(G,Z,Y,6);break;case 8:RH(),yG=6;break G;default:throw Error(h(462))}}yO();break}catch(Q){nA(G,Q)}while(1);if(s7=Mz=null,K0.H=J,K0.A=B,BG=z,d0!==null)return 0;return wG=null,p0=0,c9(),yG}function yO(){for(;d0!==null&&!H1();)ZQ(d0)}function ZQ(G){var Z=$A(G.alternate,G,Z6);G.memoizedProps=G.pendingProps,Z===null?t9(G):d0=Z}function MW(G){var Z=G,z=Z.alternate;switch(Z.tag){case 15:case 0:Z=WW(z,Z,Z.pendingProps,Z.type,void 0,p0);break;case 11:Z=WW(z,Z,Z.pendingProps,Z.type.render,Z.ref,p0);break;case 5:BH(Z);default:CA(z,Z),Z=d0=CU(Z,Z6),Z=$A(z,Z,Z6)}G.memoizedProps=G.pendingProps,Z===null?t9(G):d0=Z}function GJ(G,Z,z,J){s7=Mz=null,BH(Z),YJ=null,k8=0;var B=Z.return;try{if(TO(G,B,Z,z,p0)){yG=1,I9(G,eZ(z,G.current)),d0=null;return}}catch(Y){if(B!==null)throw d0=B,Y;yG=1,I9(G,eZ(z,G.current)),d0=null;return}if(Z.flags&32768){if(i0||J===1)G=!0;else if(KJ||(p0&536870912)!==0)G=!1;else if(R6=G=!0,J===2||J===9||J===3||J===6)J=mZ.current,J!==null&&J.tag===13&&(J.flags|=16384);zQ(Z,G)}else t9(Z)}function t9(G){var Z=G;do{if((Z.flags&32768)!==0){zQ(Z,R6);return}G=Z.return;var z=CO(Z.alternate,Z,Z6);if(z!==null){d0=z;return}if(Z=Z.sibling,Z!==null){d0=Z;return}d0=Z=G}while(Z!==null);yG===0&&(yG=5)}function zQ(G,Z){do{var z=xO(G.alternate,G);if(z!==null){z.flags&=32767,d0=z;return}if(z=G.return,z!==null&&(z.flags|=32768,z.subtreeFlags=0,z.deletions=null),!Z&&(G=G.sibling,G!==null)){d0=G;return}d0=G=z}while(G!==null);yG=6,d0=null}function FW(G,Z,z,J,B,Y,j,H,X){G.cancelPendingCommit=null;do e9();while(eG!==0);if((BG&6)!==0)throw Error(h(327));if(Z!==null){if(Z===G.current)throw Error(h(177));if(Y=Z.lanes|Z.childLanes,Y|=lj,M1(G,z,Y,j,H,X),G===wG&&(d0=wG=null,p0=0),LJ=Z,N6=G,a7=z,Oj=Y,Mj=B,rA=J,(Z.subtreeFlags&10256)!==0||(Z.flags&10256)!==0?(G.callbackNode=null,G.callbackPriority=0,dO(Q9,function(){return HQ(),null})):(G.callbackNode=null,G.callbackPriority=0),J=(Z.flags&13878)!==0,(Z.subtreeFlags&13878)!==0||J){J=K0.T,K0.T=null,B=YG.p,YG.p=2,j=BG,BG|=4;try{SO(G,Z,z)}finally{BG=j,YG.p=B,K0.T=J}}eG=1,JQ(),BQ(),YQ()}}function JQ(){if(eG===1){eG=0;var G=N6,Z=LJ,z=(Z.flags&13878)!==0;if((Z.subtreeFlags&13878)!==0||z){z=K0.T,K0.T=null;var J=YG.p;YG.p=2;var B=BG;BG|=4;try{uA(Z,G);var Y=Ij,j=VU(G.containerInfo),H=Y.focusedElem,X=Y.selectionRange;if(j!==H&&H&&H.ownerDocument&&wU(H.ownerDocument.documentElement,H)){if(X!==null&&cj(H)){var{start:F,end:Q}=X;if(Q===void 0&&(Q=F),"selectionStart"in H)H.selectionStart=F,H.selectionEnd=Math.min(Q,H.value.length);else{var R=H.ownerDocument||document,A=R&&R.defaultView||window;if(A.getSelection){var D=A.getSelection(),f=H.textContent.length,S=Math.min(X.start,f),C=X.end===void 0?S:Math.min(X.end,f);!D.extend&&S>C&&(j=C,C=S,S=j);var _=uq(H,S),M=uq(H,C);if(_&&M&&(D.rangeCount!==1||D.anchorNode!==_.node||D.anchorOffset!==_.offset||D.focusNode!==M.node||D.focusOffset!==M.offset)){var K=R.createRange();K.setStart(_.node,_.offset),D.removeAllRanges(),S>C?(D.addRange(K),D.extend(M.node,M.offset)):(K.setEnd(M.node,M.offset),D.addRange(K))}}}}R=[];for(D=H;D=D.parentNode;)D.nodeType===1&&R.push({element:D,left:D.scrollLeft,top:D.scrollTop});typeof H.focus==="function"&&H.focus();for(H=0;H<R.length;H++){var N=R[H];N.element.scrollLeft=N.left,N.element.scrollTop=N.top}}g9=!!Kj,Ij=Kj=null}finally{BG=B,YG.p=J,K0.T=z}}G.current=Z,eG=2}}function BQ(){if(eG===2){eG=0;var G=N6,Z=LJ,z=(Z.flags&8772)!==0;if((Z.subtreeFlags&8772)!==0||z){z=K0.T,K0.T=null;var J=YG.p;YG.p=2;var B=BG;BG|=4;try{EA(G,Z.alternate,Z)}finally{BG=B,YG.p=J,K0.T=z}}eG=3}}function YQ(){if(eG===4||eG===3){eG=0,X1();var G=N6,Z=LJ,z=a7,J=rA;(Z.subtreeFlags&10256)!==0||(Z.flags&10256)!==0?eG=5:(eG=0,LJ=N6=null,jQ(G,G.pendingLanes));var B=G.pendingLanes;if(B===0&&(T6=null),hj(z),Z=Z.stateNode,gZ&&typeof gZ.onCommitFiberRoot==="function")try{gZ.onCommitFiberRoot(m8,Z,void 0,(Z.current.flags&128)===128)}catch(X){}if(J!==null){Z=K0.T,B=YG.p,YG.p=2,K0.T=null;try{for(var Y=G.onRecoverableError,j=0;j<J.length;j++){var H=J[j];Y(H.value,{componentStack:H.stack})}}finally{K0.T=Z,YG.p=B}}(a7&3)!==0&&e9(),k7(G),B=G.pendingLanes,(z&261930)!==0&&(B&42)!==0?G===Fj?I8++:(I8=0,Fj=G):I8=0,o8(0,!1)}}function jQ(G,Z){(G.pooledCacheLanes&=Z)===0&&(Z=G.pooledCache,Z!=null&&(G.pooledCache=null,i8(Z)))}function e9(){return JQ(),BQ(),YQ(),HQ()}function HQ(){if(eG!==5)return!1;var G=N6,Z=Oj;Oj=0;var z=hj(a7),J=K0.T,B=YG.p;try{YG.p=32>z?32:z,K0.T=null,z=Mj,Mj=null;var Y=N6,j=a7;if(eG=0,LJ=N6=null,a7=0,(BG&6)!==0)throw Error(h(331));var H=BG;if(BG|=4,pA(Y.current),dA(Y,Y.current,j,z),BG=H,o8(0,!1),gZ&&typeof gZ.onPostCommitFiberRoot==="function")try{gZ.onPostCommitFiberRoot(m8,Y)}catch(X){}return!0}finally{YG.p=B,K0.T=J,jQ(G,Z)}}function RW(G,Z,z){Z=eZ(z,Z),Z=Uj(G.stateNode,Z,2),G=f6(G,Z,2),G!==null&&(c8(G,2),k7(G))}function AG(G,Z,z){if(G.tag===3)RW(G,G,z);else for(;Z!==null;){if(Z.tag===3){RW(Z,G,z);break}else if(Z.tag===1){var J=Z.stateNode;if(typeof Z.type.getDerivedStateFromError==="function"||typeof J.componentDidCatch==="function"&&(T6===null||!T6.has(J))){G=eZ(z,G),z=DA(2),J=f6(Z,z,2),J!==null&&(KA(z,J,Z,G),c8(J,2),k7(J));break}}Z=Z.return}}function C4(G,Z,z){var J=G.pingCache;if(J===null){J=G.pingCache=new PO;var B=new Set;J.set(Z,B)}else B=J.get(Z),B===void 0&&(B=new Set,J.set(Z,B));B.has(z)||(MH=!0,B.add(z),G=vO.bind(null,G,Z,z),Z.then(G,G))}function vO(G,Z,z){var J=G.pingCache;J!==null&&J.delete(Z),G.pingedLanes|=G.suspendedLanes&z,G.warmLanes&=~z,wG===G&&(p0&z)===z&&(yG===4||yG===3&&(p0&62914560)===p0&&300>hZ()-a9?(BG&2)===0&&OJ(G,0):FH|=z,_J===p0&&(_J=0)),k7(G)}function XQ(G,Z){Z===0&&(Z=eW()),G=Oz(G,Z),G!==null&&(c8(G,Z),k7(G))}function uO(G){var Z=G.memoizedState,z=0;Z!==null&&(z=Z.retryLane),XQ(G,z)}function mO(G,Z){var z=0;switch(G.tag){case 31:case 13:var{stateNode:J,memoizedState:B}=G;B!==null&&(z=B.retryLane);break;case 19:J=G.stateNode;break;case 22:J=G.stateNode._retryCache;break;default:throw Error(h(314))}J!==null&&J.delete(Z),XQ(G,z)}function dO(G,Z){return Pj(G,Z)}var x9=null,mz=null,Rj=!1,S9=!1,x4=!1,V6=0;function k7(G){G!==mz&&G.next===null&&(mz===null?x9=mz=G:mz=mz.next=G),S9=!0,Rj||(Rj=!0,lO())}function o8(G,Z){if(!x4&&S9){x4=!0;do{var z=!1;for(var J=x9;J!==null;){if(!Z)if(G!==0){var B=J.pendingLanes;if(B===0)var Y=0;else{var{suspendedLanes:j,pingedLanes:H}=J;Y=(1<<31-yZ(42|G)+1)-1,Y&=B&~(j&~H),Y=Y&201326741?Y&201326741|1:Y?Y|2:0}Y!==0&&(z=!0,wW(J,Y))}else Y=p0,Y=v9(J,J===wG?Y:0,J.cancelPendingCommit!==null||J.timeoutHandle!==-1),(Y&3)===0||d8(J,Y)||(z=!0,wW(J,Y));J=J.next}}while(z);x4=!1}}function cO(){qQ()}function qQ(){S9=Rj=!1;var G=0;V6!==0&&tO()&&(G=V6);for(var Z=hZ(),z=null,J=x9;J!==null;){var B=J.next,Y=WQ(J,Z);if(Y===0)J.next=null,z===null?x9=B:z.next=B,B===null&&(mz=z);else if(z=J,G!==0||(Y&3)!==0)S9=!0;J=B}eG!==0&&eG!==5||o8(G,!1),V6!==0&&(V6=0)}function WQ(G,Z){for(var{suspendedLanes:z,pingedLanes:J,expirationTimes:B}=G,Y=G.pendingLanes&-62914561;0<Y;){var j=31-yZ(Y),H=1<<j,X=B[j];if(X===-1){if((H&z)===0||(H&J)!==0)B[j]=O1(H,Z)}else X<=Z&&(G.expiredLanes|=H);Y&=~H}if(Z=wG,z=p0,z=v9(G,G===Z?z:0,G.cancelPendingCommit!==null||G.timeoutHandle!==-1),J=G.callbackNode,z===0||G===Z&&(UG===2||UG===9)||G.cancelPendingCommit!==null)return J!==null&&J!==null&&j4(J),G.callbackNode=null,G.callbackPriority=0;if((z&3)===0||d8(G,z)){if(Z=z&-z,Z===G.callbackPriority)return Z;switch(J!==null&&j4(J),hj(z)){case 2:case 8:z=nW;break;case 32:z=Q9;break;case 268435456:z=tW;break;default:z=Q9}return J=UQ.bind(null,G),z=Pj(z,J),G.callbackPriority=Z,G.callbackNode=z,Z}return J!==null&&J!==null&&j4(J),G.callbackPriority=2,G.callbackNode=null,2}function UQ(G,Z){if(eG!==0&&eG!==5)return G.callbackNode=null,G.callbackPriority=0,null;var z=G.callbackNode;if(e9()&&G.callbackNode!==z)return null;var J=p0;if(J=v9(G,G===wG?J:0,G.cancelPendingCommit!==null||G.timeoutHandle!==-1),J===0)return null;return aA(G,J,Z),WQ(G,hZ()),G.callbackNode!=null&&G.callbackNode===z?UQ.bind(null,G):null}function wW(G,Z){if(e9())return null;aA(G,Z,!0)}function lO(){GM(function(){(BG&6)!==0?Pj(aW,cO):qQ()})}function wH(){if(V6===0){var G=UJ;G===0&&(G=EB,EB<<=1,(EB&261888)===0&&(EB=256)),V6=G}return V6}function VW(G){return G==null||typeof G==="symbol"||typeof G==="boolean"?null:typeof G==="function"?G:oB(""+G)}function DW(G,Z){var z=Z.ownerDocument.createElement("input");return z.name=Z.name,z.value=Z.value,G.id&&z.setAttribute("form",G.id),Z.parentNode.insertBefore(z,Z),G=new FormData(G),z.parentNode.removeChild(z),G}function pO(G,Z,z,J,B){if(Z==="submit"&&z&&z.stateNode===B){var Y=VW((B[$Z]||null).action),j=J.submitter;j&&(Z=(Z=j[$Z]||null)?VW(Z.formAction):j.getAttribute("formAction"),Z!==null&&(Y=Z,j=null));var H=new u9("action","action",null,J,B);G.push({event:H,listeners:[{instance:null,listener:function(){if(J.defaultPrevented){if(V6!==0){var X=j?DW(B,j):new FormData(B);qj(z,{pending:!0,data:X,method:B.method,action:Y},null,X)}}else typeof Y==="function"&&(H.preventDefault(),X=j?DW(B,j):new FormData(B),qj(z,{pending:!0,data:X,method:B.method,action:Y},Y,X))},currentTarget:B}]})}}for(U8=0;U8<n4.length;U8++)A8=n4[U8],wj=A8.toLowerCase(),Vj=A8[0].toUpperCase()+A8.slice(1),L7(wj,"on"+Vj);var A8,wj,Vj,U8;L7(KU,"onAnimationEnd");L7(IU,"onAnimationIteration");L7(fU,"onAnimationStart");L7("dblclick","onDoubleClick");L7("focusin","onFocus");L7("focusout","onBlur");L7(qO,"onTransitionRun");L7(WO,"onTransitionStart");L7(UO,"onTransitionCancel");L7(TU,"onTransitionEnd");qJ("onMouseEnter",["mouseout","mouseover"]);qJ("onMouseLeave",["mouseout","mouseover"]);qJ("onPointerEnter",["pointerout","pointerover"]);qJ("onPointerLeave",["pointerout","pointerover"]);Qz("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qz("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qz("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qz("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qz("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qz("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var E8="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iO=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(E8));function AQ(G,Z){Z=(Z&4)!==0;for(var z=0;z<G.length;z++){var J=G[z],B=J.event;J=J.listeners;G:{var Y=void 0;if(Z)for(var j=J.length-1;0<=j;j--){var H=J[j],X=H.instance,F=H.currentTarget;if(H=H.listener,X!==Y&&B.isPropagationStopped())break G;Y=H,B.currentTarget=F;try{Y(B)}catch(Q){L9(Q)}B.currentTarget=null,Y=X}else for(j=0;j<J.length;j++){if(H=J[j],X=H.instance,F=H.currentTarget,H=H.listener,X!==Y&&B.isPropagationStopped())break G;Y=H,B.currentTarget=F;try{Y(B)}catch(Q){L9(Q)}B.currentTarget=null,Y=X}}}}function m0(G,Z){var z=Z[c4];z===void 0&&(z=Z[c4]=new Set);var J=G+"__bubble";z.has(J)||(QQ(Z,G,2,!1),z.add(J))}function S4(G,Z,z){var J=0;Z&&(J|=4),QQ(z,G,J,Z)}var pB="_reactListening"+Math.random().toString(36).slice(2);function VH(G){if(!G[pB]){G[pB]=!0,BU.forEach(function(z){z!=="selectionchange"&&(iO.has(z)||S4(z,!1,G),S4(z,!0,G))});var Z=G.nodeType===9?G:G.ownerDocument;Z===null||Z[pB]||(Z[pB]=!0,S4("selectionchange",!1,Z))}}function QQ(G,Z,z,J){switch(TQ(Z)){case 2:var B=wM;break;case 8:B=VM;break;default:B=fH}z=B.bind(null,Z,z,G),B=void 0,!r4||Z!=="touchstart"&&Z!=="touchmove"&&Z!=="wheel"||(B=!0),J?B!==void 0?G.addEventListener(Z,z,{capture:!0,passive:B}):G.addEventListener(Z,z,!0):B!==void 0?G.addEventListener(Z,z,{passive:B}):G.addEventListener(Z,z,!1)}function k4(G,Z,z,J,B){var Y=J;if((Z&1)===0&&(Z&2)===0&&J!==null)G:for(;;){if(J===null)return;var j=J.tag;if(j===3||j===4){var H=J.stateNode.containerInfo;if(H===B)break;if(j===4)for(j=J.return;j!==null;){var X=j.tag;if((X===3||X===4)&&j.stateNode.containerInfo===B)return;j=j.return}for(;H!==null;){if(j=pz(H),j===null)return;if(X=j.tag,X===5||X===6||X===26||X===27){J=Y=j;continue G}H=H.parentNode}}J=J.return}AU(function(){var F=Y,Q=vj(z),R=[];G:{var A=NU.get(G);if(A!==void 0){var D=u9,f=G;switch(G){case"keypress":if(nB(z)===0)break G;case"keydown":case"keyup":D=m1;break;case"focusin":f="focus",D=U4;break;case"focusout":f="blur",D=U4;break;case"beforeblur":case"afterblur":D=U4;break;case"click":if(z.button===2)break G;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=Sq;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=C1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=l1;break;case KU:case IU:case fU:D=k1;break;case TU:D=i1;break;case"scroll":case"scrollend":D=N1;break;case"wheel":D=r1;break;case"copy":case"cut":case"paste":D=P1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=bq;break;case"toggle":case"beforetoggle":D=a1}var S=(Z&4)!==0,C=!S&&(G==="scroll"||G==="scrollend"),_=S?A!==null?A+"Capture":null:A;S=[];for(var M=F,K;M!==null;){var N=M;if(K=N.stateNode,N=N.tag,N!==5&&N!==26&&N!==27||K===null||_===null||(N=N8(M,_),N!=null&&S.push(h8(M,N,K))),C)break;M=M.return}0<S.length&&(A=new D(A,f,null,z,Q),R.push({event:A,listeners:S}))}}if((Z&7)===0){G:{if(A=G==="mouseover"||G==="pointerover",D=G==="mouseout"||G==="pointerout",A&&z!==s4&&(f=z.relatedTarget||z.fromElement)&&(pz(f)||f[RJ]))break G;if(D||A){if(A=Q.window===Q?Q:(A=Q.ownerDocument)?A.defaultView||A.parentWindow:window,D){if(f=z.relatedTarget||z.toElement,D=F,f=f?pz(f):null,f!==null&&(C=u8(f),S=f.tag,f!==C||S!==5&&S!==27&&S!==6))f=null}else D=null,f=F;if(D!==f){if(S=Sq,N="onMouseLeave",_="onMouseEnter",M="mouse",G==="pointerout"||G==="pointerover")S=bq,N="onPointerLeave",_="onPointerEnter",M="pointer";if(C=D==null?A:j8(D),K=f==null?A:j8(f),A=new S(N,M+"leave",D,z,Q),A.target=C,A.relatedTarget=K,N=null,pz(Q)===F&&(S=new S(_,M+"enter",f,z,Q),S.target=K,S.relatedTarget=C,N=S),C=N,D&&f)Z:{S=sO,_=D,M=f,K=0;for(N=_;N;N=S(N))K++;N=0;for(var p=M;p;p=S(p))N++;for(;0<K-N;)_=S(_),K--;for(;0<N-K;)M=S(M),N--;for(;K--;){if(_===M||M!==null&&_===M.alternate){S=_;break Z}_=S(_),M=S(M)}S=null}else S=null;D!==null&&KW(R,A,D,S,!1),f!==null&&C!==null&&KW(R,C,f,S,!0)}}}G:{if(A=F?j8(F):window,D=A.nodeName&&A.nodeName.toLowerCase(),D==="select"||D==="input"&&A.type==="file")var B0=gq;else if(hq(A))if(FU)B0=jO;else{B0=BO;var b=JO}else D=A.nodeName,!D||D.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?F&&yj(F.elementType)&&(B0=gq):B0=YO;if(B0&&(B0=B0(G,F))){MU(R,B0,z,Q);break G}b&&b(G,A,F),G==="focusout"&&F&&A.type==="number"&&F.memoizedProps.value!=null&&i4(A,"number",A.value)}switch(b=F?j8(F):window,G){case"focusin":if(hq(b)||b.contentEditable==="true")rz=b,o4=F,L8=null;break;case"focusout":L8=o4=rz=null;break;case"mousedown":a4=!0;break;case"contextmenu":case"mouseup":case"dragend":a4=!1,mq(R,z,Q);break;case"selectionchange":if(XO)break;case"keydown":case"keyup":mq(R,z,Q)}var a;if(dj)G:{switch(G){case"compositionstart":var G0="onCompositionStart";break G;case"compositionend":G0="onCompositionEnd";break G;case"compositionupdate":G0="onCompositionUpdate";break G}G0=void 0}else sz?LU(G,z)&&(G0="onCompositionEnd"):G==="keydown"&&z.keyCode===229&&(G0="onCompositionStart");if(G0&&(_U&&z.locale!=="ko"&&(sz||G0!=="onCompositionStart"?G0==="onCompositionEnd"&&sz&&(a=QU()):(F6=Q,uj=("value"in F6)?F6.value:F6.textContent,sz=!0)),b=k9(F,G0),0<b.length&&(G0=new kq(G0,G,null,z,Q),R.push({event:G0,listeners:b}),a?G0.data=a:(a=OU(z),a!==null&&(G0.data=a)))),a=t1?e1(G,z):GO(G,z))G0=k9(F,"onBeforeInput"),0<G0.length&&(b=new kq("onBeforeInput","beforeinput",null,z,Q),R.push({event:b,listeners:G0}),b.data=a);pO(R,G,F,z,Q)}AQ(R,Z)})}function h8(G,Z,z){return{instance:G,listener:Z,currentTarget:z}}function k9(G,Z){for(var z=Z+"Capture",J=[];G!==null;){var B=G,Y=B.stateNode;if(B=B.tag,B!==5&&B!==26&&B!==27||Y===null||(B=N8(G,z),B!=null&&J.unshift(h8(G,B,Y)),B=N8(G,Z),B!=null&&J.push(h8(G,B,Y))),G.tag===3)return J;G=G.return}return[]}function sO(G){if(G===null)return null;do G=G.return;while(G&&G.tag!==5&&G.tag!==27);return G?G:null}function KW(G,Z,z,J,B){for(var Y=Z._reactName,j=[];z!==null&&z!==J;){var H=z,X=H.alternate,F=H.stateNode;if(H=H.tag,X!==null&&X===J)break;H!==5&&H!==26&&H!==27||F===null||(X=F,B?(F=N8(z,Y),F!=null&&j.unshift(h8(z,F,X))):B||(F=N8(z,Y),F!=null&&j.push(h8(z,F,X)))),z=z.return}j.length!==0&&G.push({event:Z,listeners:j})}var rO=/\r\n?/g,oO=/\u0000|\uFFFD/g;function IW(G){return(typeof G==="string"?G:""+G).replace(rO,`
`).replace(oO,"")}function _Q(G,Z){return Z=IW(Z),IW(G)===Z?!0:!1}function OG(G,Z,z,J,B,Y){switch(z){case"children":typeof J==="string"?Z==="body"||Z==="textarea"&&J===""||WJ(G,J):(typeof J==="number"||typeof J==="bigint")&&Z!=="body"&&WJ(G,""+J);break;case"className":yB(G,"class",J);break;case"tabIndex":yB(G,"tabindex",J);break;case"dir":case"role":case"viewBox":case"width":case"height":yB(G,z,J);break;case"style":UU(G,J,Y);break;case"data":if(Z!=="object"){yB(G,"data",J);break}case"src":case"href":if(J===""&&(Z!=="a"||z!=="href")){G.removeAttribute(z);break}if(J==null||typeof J==="function"||typeof J==="symbol"||typeof J==="boolean"){G.removeAttribute(z);break}J=oB(""+J),G.setAttribute(z,J);break;case"action":case"formAction":if(typeof J==="function"){G.setAttribute(z,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof Y==="function"&&(z==="formAction"?(Z!=="input"&&OG(G,Z,"name",B.name,B,null),OG(G,Z,"formEncType",B.formEncType,B,null),OG(G,Z,"formMethod",B.formMethod,B,null),OG(G,Z,"formTarget",B.formTarget,B,null)):(OG(G,Z,"encType",B.encType,B,null),OG(G,Z,"method",B.method,B,null),OG(G,Z,"target",B.target,B,null)));if(J==null||typeof J==="symbol"||typeof J==="boolean"){G.removeAttribute(z);break}J=oB(""+J),G.setAttribute(z,J);break;case"onClick":J!=null&&(G.onclick=i7);break;case"onScroll":J!=null&&m0("scroll",G);break;case"onScrollEnd":J!=null&&m0("scrollend",G);break;case"dangerouslySetInnerHTML":if(J!=null){if(typeof J!=="object"||!("__html"in J))throw Error(h(61));if(z=J.__html,z!=null){if(B.children!=null)throw Error(h(60));G.innerHTML=z}}break;case"multiple":G.multiple=J&&typeof J!=="function"&&typeof J!=="symbol";break;case"muted":G.muted=J&&typeof J!=="function"&&typeof J!=="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(J==null||typeof J==="function"||typeof J==="boolean"||typeof J==="symbol"){G.removeAttribute("xlink:href");break}z=oB(""+J),G.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",z);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":J!=null&&typeof J!=="function"&&typeof J!=="symbol"?G.setAttribute(z,""+J):G.removeAttribute(z);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":J&&typeof J!=="function"&&typeof J!=="symbol"?G.setAttribute(z,""):G.removeAttribute(z);break;case"capture":case"download":J===!0?G.setAttribute(z,""):J!==!1&&J!=null&&typeof J!=="function"&&typeof J!=="symbol"?G.setAttribute(z,J):G.removeAttribute(z);break;case"cols":case"rows":case"size":case"span":J!=null&&typeof J!=="function"&&typeof J!=="symbol"&&!isNaN(J)&&1<=J?G.setAttribute(z,J):G.removeAttribute(z);break;case"rowSpan":case"start":J==null||typeof J==="function"||typeof J==="symbol"||isNaN(J)?G.removeAttribute(z):G.setAttribute(z,J);break;case"popover":m0("beforetoggle",G),m0("toggle",G),rB(G,"popover",J);break;case"xlinkActuate":y7(G,"http://www.w3.org/1999/xlink","xlink:actuate",J);break;case"xlinkArcrole":y7(G,"http://www.w3.org/1999/xlink","xlink:arcrole",J);break;case"xlinkRole":y7(G,"http://www.w3.org/1999/xlink","xlink:role",J);break;case"xlinkShow":y7(G,"http://www.w3.org/1999/xlink","xlink:show",J);break;case"xlinkTitle":y7(G,"http://www.w3.org/1999/xlink","xlink:title",J);break;case"xlinkType":y7(G,"http://www.w3.org/1999/xlink","xlink:type",J);break;case"xmlBase":y7(G,"http://www.w3.org/XML/1998/namespace","xml:base",J);break;case"xmlLang":y7(G,"http://www.w3.org/XML/1998/namespace","xml:lang",J);break;case"xmlSpace":y7(G,"http://www.w3.org/XML/1998/namespace","xml:space",J);break;case"is":rB(G,"is",J);break;case"innerText":case"textContent":break;default:if(!(2<z.length)||z[0]!=="o"&&z[0]!=="O"||z[1]!=="n"&&z[1]!=="N")z=f1.get(z)||z,rB(G,z,J)}}function Dj(G,Z,z,J,B,Y){switch(z){case"style":UU(G,J,Y);break;case"dangerouslySetInnerHTML":if(J!=null){if(typeof J!=="object"||!("__html"in J))throw Error(h(61));if(z=J.__html,z!=null){if(B.children!=null)throw Error(h(60));G.innerHTML=z}}break;case"children":typeof J==="string"?WJ(G,J):(typeof J==="number"||typeof J==="bigint")&&WJ(G,""+J);break;case"onScroll":J!=null&&m0("scroll",G);break;case"onScrollEnd":J!=null&&m0("scrollend",G);break;case"onClick":J!=null&&(G.onclick=i7);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!YU.hasOwnProperty(z))G:{if(z[0]==="o"&&z[1]==="n"&&(B=z.endsWith("Capture"),Z=z.slice(2,B?z.length-7:void 0),Y=G[$Z]||null,Y=Y!=null?Y[z]:null,typeof Y==="function"&&G.removeEventListener(Z,Y,B),typeof J==="function")){typeof Y!=="function"&&Y!==null&&(z in G?G[z]=null:G.hasAttribute(z)&&G.removeAttribute(z)),G.addEventListener(Z,J,B);break G}z in G?G[z]=J:J===!0?G.setAttribute(z,""):rB(G,z,J)}}}function WZ(G,Z,z){switch(Z){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":m0("error",G),m0("load",G);var J=!1,B=!1,Y;for(Y in z)if(z.hasOwnProperty(Y)){var j=z[Y];if(j!=null)switch(Y){case"src":J=!0;break;case"srcSet":B=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(h(137,Z));default:OG(G,Z,Y,j,z,null)}}B&&OG(G,Z,"srcSet",z.srcSet,z,null),J&&OG(G,Z,"src",z.src,z,null);return;case"input":m0("invalid",G);var H=Y=j=B=null,X=null,F=null;for(J in z)if(z.hasOwnProperty(J)){var Q=z[J];if(Q!=null)switch(J){case"name":B=Q;break;case"type":j=Q;break;case"checked":X=Q;break;case"defaultChecked":F=Q;break;case"value":Y=Q;break;case"defaultValue":H=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(h(137,Z));break;default:OG(G,Z,J,Q,z,null)}}XU(G,Y,H,X,F,j,B,!1);return;case"select":m0("invalid",G),J=j=Y=null;for(B in z)if(z.hasOwnProperty(B)&&(H=z[B],H!=null))switch(B){case"value":Y=H;break;case"defaultValue":j=H;break;case"multiple":J=H;default:OG(G,Z,B,H,z,null)}Z=Y,z=j,G.multiple=!!J,Z!=null?zJ(G,!!J,Z,!1):z!=null&&zJ(G,!!J,z,!0);return;case"textarea":m0("invalid",G),Y=B=J=null;for(j in z)if(z.hasOwnProperty(j)&&(H=z[j],H!=null))switch(j){case"value":J=H;break;case"defaultValue":B=H;break;case"children":Y=H;break;case"dangerouslySetInnerHTML":if(H!=null)throw Error(h(91));break;default:OG(G,Z,j,H,z,null)}WU(G,J,B,Y);return;case"option":for(X in z)if(z.hasOwnProperty(X)&&(J=z[X],J!=null))switch(X){case"selected":G.selected=J&&typeof J!=="function"&&typeof J!=="symbol";break;default:OG(G,Z,X,J,z,null)}return;case"dialog":m0("beforetoggle",G),m0("toggle",G),m0("cancel",G),m0("close",G);break;case"iframe":case"object":m0("load",G);break;case"video":case"audio":for(J=0;J<E8.length;J++)m0(E8[J],G);break;case"image":m0("error",G),m0("load",G);break;case"details":m0("toggle",G);break;case"embed":case"source":case"link":m0("error",G),m0("load",G);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(F in z)if(z.hasOwnProperty(F)&&(J=z[F],J!=null))switch(F){case"children":case"dangerouslySetInnerHTML":throw Error(h(137,Z));default:OG(G,Z,F,J,z,null)}return;default:if(yj(Z)){for(Q in z)z.hasOwnProperty(Q)&&(J=z[Q],J!==void 0&&Dj(G,Z,Q,J,z,void 0));return}}for(H in z)z.hasOwnProperty(H)&&(J=z[H],J!=null&&OG(G,Z,H,J,z,null))}function aO(G,Z,z,J){switch(Z){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var B=null,Y=null,j=null,H=null,X=null,F=null,Q=null;for(D in z){var R=z[D];if(z.hasOwnProperty(D)&&R!=null)switch(D){case"checked":break;case"value":break;case"defaultValue":X=R;default:J.hasOwnProperty(D)||OG(G,Z,D,null,J,R)}}for(var A in J){var D=J[A];if(R=z[A],J.hasOwnProperty(A)&&(D!=null||R!=null))switch(A){case"type":Y=D;break;case"name":B=D;break;case"checked":F=D;break;case"defaultChecked":Q=D;break;case"value":j=D;break;case"defaultValue":H=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(h(137,Z));break;default:D!==R&&OG(G,Z,A,D,J,R)}}p4(G,j,H,X,F,Q,Y,B);return;case"select":D=j=H=A=null;for(Y in z)if(X=z[Y],z.hasOwnProperty(Y)&&X!=null)switch(Y){case"value":break;case"multiple":D=X;default:J.hasOwnProperty(Y)||OG(G,Z,Y,null,J,X)}for(B in J)if(Y=J[B],X=z[B],J.hasOwnProperty(B)&&(Y!=null||X!=null))switch(B){case"value":A=Y;break;case"defaultValue":H=Y;break;case"multiple":j=Y;default:Y!==X&&OG(G,Z,B,Y,J,X)}Z=H,z=j,J=D,A!=null?zJ(G,!!z,A,!1):!!J!==!!z&&(Z!=null?zJ(G,!!z,Z,!0):zJ(G,!!z,z?[]:"",!1));return;case"textarea":D=A=null;for(H in z)if(B=z[H],z.hasOwnProperty(H)&&B!=null&&!J.hasOwnProperty(H))switch(H){case"value":break;case"children":break;default:OG(G,Z,H,null,J,B)}for(j in J)if(B=J[j],Y=z[j],J.hasOwnProperty(j)&&(B!=null||Y!=null))switch(j){case"value":A=B;break;case"defaultValue":D=B;break;case"children":break;case"dangerouslySetInnerHTML":if(B!=null)throw Error(h(91));break;default:B!==Y&&OG(G,Z,j,B,J,Y)}qU(G,A,D);return;case"option":for(var f in z)if(A=z[f],z.hasOwnProperty(f)&&A!=null&&!J.hasOwnProperty(f))switch(f){case"selected":G.selected=!1;break;default:OG(G,Z,f,null,J,A)}for(X in J)if(A=J[X],D=z[X],J.hasOwnProperty(X)&&A!==D&&(A!=null||D!=null))switch(X){case"selected":G.selected=A&&typeof A!=="function"&&typeof A!=="symbol";break;default:OG(G,Z,X,A,J,D)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var S in z)A=z[S],z.hasOwnProperty(S)&&A!=null&&!J.hasOwnProperty(S)&&OG(G,Z,S,null,J,A);for(F in J)if(A=J[F],D=z[F],J.hasOwnProperty(F)&&A!==D&&(A!=null||D!=null))switch(F){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(h(137,Z));break;default:OG(G,Z,F,A,J,D)}return;default:if(yj(Z)){for(var C in z)A=z[C],z.hasOwnProperty(C)&&A!==void 0&&!J.hasOwnProperty(C)&&Dj(G,Z,C,void 0,J,A);for(Q in J)A=J[Q],D=z[Q],!J.hasOwnProperty(Q)||A===D||A===void 0&&D===void 0||Dj(G,Z,Q,A,J,D);return}}for(var _ in z)A=z[_],z.hasOwnProperty(_)&&A!=null&&!J.hasOwnProperty(_)&&OG(G,Z,_,null,J,A);for(R in J)A=J[R],D=z[R],!J.hasOwnProperty(R)||A===D||A==null&&D==null||OG(G,Z,R,A,J,D)}function fW(G){switch(G){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function nO(){if(typeof performance.getEntriesByType==="function"){for(var G=0,Z=0,z=performance.getEntriesByType("resource"),J=0;J<z.length;J++){var B=z[J],Y=B.transferSize,j=B.initiatorType,H=B.duration;if(Y&&H&&fW(j)){j=0,H=B.responseEnd;for(J+=1;J<z.length;J++){var X=z[J],F=X.startTime;if(F>H)break;var{transferSize:Q,initiatorType:R}=X;Q&&fW(R)&&(X=X.responseEnd,j+=Q*(X<H?1:(H-F)/(X-F)))}if(--J,Z+=8*(Y+j)/(B.duration/1000),G++,10<G)break}}if(0<G)return Z/G/1e6}return navigator.connection&&(G=navigator.connection.downlink,typeof G==="number")?G:5}var Kj=null,Ij=null;function b9(G){return G.nodeType===9?G:G.ownerDocument}function TW(G){switch(G){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function LQ(G,Z){if(G===0)switch(Z){case"svg":return 1;case"math":return 2;default:return 0}return G===1&&Z==="foreignObject"?0:G}function fj(G,Z){return G==="textarea"||G==="noscript"||typeof Z.children==="string"||typeof Z.children==="number"||typeof Z.children==="bigint"||typeof Z.dangerouslySetInnerHTML==="object"&&Z.dangerouslySetInnerHTML!==null&&Z.dangerouslySetInnerHTML.__html!=null}var b4=null;function tO(){var G=window.event;if(G&&G.type==="popstate"){if(G===b4)return!1;return b4=G,!0}return b4=null,!1}var OQ=typeof setTimeout==="function"?setTimeout:void 0,eO=typeof clearTimeout==="function"?clearTimeout:void 0,NW=typeof Promise==="function"?Promise:void 0,GM=typeof queueMicrotask==="function"?queueMicrotask:typeof NW<"u"?function(G){return NW.resolve(null).then(G).catch(ZM)}:OQ;function ZM(G){setTimeout(function(){throw G})}function h6(G){return G==="head"}function $W(G,Z){var z=Z,J=0;do{var B=z.nextSibling;if(G.removeChild(z),B&&B.nodeType===8)if(z=B.data,z==="/$"||z==="/&"){if(J===0){G.removeChild(B),FJ(Z);return}J--}else if(z==="$"||z==="$?"||z==="$~"||z==="$!"||z==="&")J++;else if(z==="html")f8(G.ownerDocument.documentElement);else if(z==="head"){z=G.ownerDocument.head,f8(z);for(var Y=z.firstChild;Y;){var{nextSibling:j,nodeName:H}=Y;Y[l8]||H==="SCRIPT"||H==="STYLE"||H==="LINK"&&Y.rel.toLowerCase()==="stylesheet"||z.removeChild(Y),Y=j}}else z==="body"&&f8(G.ownerDocument.body);z=B}while(z);FJ(Z)}function CW(G,Z){var z=G;G=0;do{var J=z.nextSibling;if(z.nodeType===1?Z?(z._stashedDisplay=z.style.display,z.style.display="none"):(z.style.display=z._stashedDisplay||"",z.getAttribute("style")===""&&z.removeAttribute("style")):z.nodeType===3&&(Z?(z._stashedText=z.nodeValue,z.nodeValue=""):z.nodeValue=z._stashedText||""),J&&J.nodeType===8)if(z=J.data,z==="/$")if(G===0)break;else G--;else z!=="$"&&z!=="$?"&&z!=="$~"&&z!=="$!"||G++;z=J}while(z)}function Tj(G){var Z=G.firstChild;Z&&Z.nodeType===10&&(Z=Z.nextSibling);for(;Z;){var z=Z;switch(Z=Z.nextSibling,z.nodeName){case"HTML":case"HEAD":case"BODY":Tj(z),gj(z);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(z.rel.toLowerCase()==="stylesheet")continue}G.removeChild(z)}}function zM(G,Z,z,J){for(;G.nodeType===1;){var B=z;if(G.nodeName.toLowerCase()!==Z.toLowerCase()){if(!J&&(G.nodeName!=="INPUT"||G.type!=="hidden"))break}else if(!J)if(Z==="input"&&G.type==="hidden"){var Y=B.name==null?null:""+B.name;if(B.type==="hidden"&&G.getAttribute("name")===Y)return G}else return G;else if(!G[l8])switch(Z){case"meta":if(!G.hasAttribute("itemprop"))break;return G;case"link":if(Y=G.getAttribute("rel"),Y==="stylesheet"&&G.hasAttribute("data-precedence"))break;else if(Y!==B.rel||G.getAttribute("href")!==(B.href==null||B.href===""?null:B.href)||G.getAttribute("crossorigin")!==(B.crossOrigin==null?null:B.crossOrigin)||G.getAttribute("title")!==(B.title==null?null:B.title))break;return G;case"style":if(G.hasAttribute("data-precedence"))break;return G;case"script":if(Y=G.getAttribute("src"),(Y!==(B.src==null?null:B.src)||G.getAttribute("type")!==(B.type==null?null:B.type)||G.getAttribute("crossorigin")!==(B.crossOrigin==null?null:B.crossOrigin))&&Y&&G.hasAttribute("async")&&!G.hasAttribute("itemprop"))break;return G;default:return G}if(G=z7(G.nextSibling),G===null)break}return null}function JM(G,Z,z){if(Z==="")return null;for(;G.nodeType!==3;){if((G.nodeType!==1||G.nodeName!=="INPUT"||G.type!=="hidden")&&!z)return null;if(G=z7(G.nextSibling),G===null)return null}return G}function MQ(G,Z){for(;G.nodeType!==8;){if((G.nodeType!==1||G.nodeName!=="INPUT"||G.type!=="hidden")&&!Z)return null;if(G=z7(G.nextSibling),G===null)return null}return G}function Nj(G){return G.data==="$?"||G.data==="$~"}function $j(G){return G.data==="$!"||G.data==="$?"&&G.ownerDocument.readyState!=="loading"}function BM(G,Z){var z=G.ownerDocument;if(G.data==="$~")G._reactRetry=Z;else if(G.data!=="$?"||z.readyState!=="loading")Z();else{var J=function(){Z(),z.removeEventListener("DOMContentLoaded",J)};z.addEventListener("DOMContentLoaded",J),G._reactRetry=J}}function z7(G){for(;G!=null;G=G.nextSibling){var Z=G.nodeType;if(Z===1||Z===3)break;if(Z===8){if(Z=G.data,Z==="$"||Z==="$!"||Z==="$?"||Z==="$~"||Z==="&"||Z==="F!"||Z==="F")break;if(Z==="/$"||Z==="/&")return null}}return G}var Cj=null;function xW(G){G=G.nextSibling;for(var Z=0;G;){if(G.nodeType===8){var z=G.data;if(z==="/$"||z==="/&"){if(Z===0)return z7(G.nextSibling);Z--}else z!=="$"&&z!=="$!"&&z!=="$?"&&z!=="$~"&&z!=="&"||Z++}G=G.nextSibling}return null}function SW(G){G=G.previousSibling;for(var Z=0;G;){if(G.nodeType===8){var z=G.data;if(z==="$"||z==="$!"||z==="$?"||z==="$~"||z==="&"){if(Z===0)return G;Z--}else z!=="/$"&&z!=="/&"||Z++}G=G.previousSibling}return null}function FQ(G,Z,z){switch(Z=b9(z),G){case"html":if(G=Z.documentElement,!G)throw Error(h(452));return G;case"head":if(G=Z.head,!G)throw Error(h(453));return G;case"body":if(G=Z.body,!G)throw Error(h(454));return G;default:throw Error(h(451))}}function f8(G){for(var Z=G.attributes;Z.length;)G.removeAttributeNode(Z[0]);gj(G)}var J7=new Map,kW=new Set;function P9(G){return typeof G.getRootNode==="function"?G.getRootNode():G.nodeType===9?G:G.ownerDocument}var z6=YG.d;YG.d={f:YM,r:jM,D:HM,C:XM,L:qM,m:WM,X:AM,S:UM,M:QM};function YM(){var G=z6.f(),Z=n9();return G||Z}function jM(G){var Z=wJ(G);Z!==null&&Z.tag===5&&Z.type==="form"?UA(Z):z6.r(G)}var IJ=typeof document>"u"?null:document;function RQ(G,Z,z){var J=IJ;if(J&&typeof Z==="string"&&Z){var B=tZ(Z);B='link[rel="'+G+'"][href="'+B+'"]',typeof z==="string"&&(B+='[crossorigin="'+z+'"]'),kW.has(B)||(kW.add(B),G={rel:G,crossOrigin:z,href:Z},J.querySelector(B)===null&&(Z=J.createElement("link"),WZ(Z,"link",G),JZ(Z),J.head.appendChild(Z)))}}function HM(G){z6.D(G),RQ("dns-prefetch",G,null)}function XM(G,Z){z6.C(G,Z),RQ("preconnect",G,Z)}function qM(G,Z,z){z6.L(G,Z,z);var J=IJ;if(J&&G&&Z){var B='link[rel="preload"][as="'+tZ(Z)+'"]';Z==="image"?z&&z.imageSrcSet?(B+='[imagesrcset="'+tZ(z.imageSrcSet)+'"]',typeof z.imageSizes==="string"&&(B+='[imagesizes="'+tZ(z.imageSizes)+'"]')):B+='[href="'+tZ(G)+'"]':B+='[href="'+tZ(G)+'"]';var Y=B;switch(Z){case"style":Y=MJ(G);break;case"script":Y=fJ(G)}J7.has(Y)||(G=NG({rel:"preload",href:Z==="image"&&z&&z.imageSrcSet?void 0:G,as:Z},z),J7.set(Y,G),J.querySelector(B)!==null||Z==="style"&&J.querySelector(a8(Y))||Z==="script"&&J.querySelector(n8(Y))||(Z=J.createElement("link"),WZ(Z,"link",G),JZ(Z),J.head.appendChild(Z)))}}function WM(G,Z){z6.m(G,Z);var z=IJ;if(z&&G){var J=Z&&typeof Z.as==="string"?Z.as:"script",B='link[rel="modulepreload"][as="'+tZ(J)+'"][href="'+tZ(G)+'"]',Y=B;switch(J){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":Y=fJ(G)}if(!J7.has(Y)&&(G=NG({rel:"modulepreload",href:G},Z),J7.set(Y,G),z.querySelector(B)===null)){switch(J){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(z.querySelector(n8(Y)))return}J=z.createElement("link"),WZ(J,"link",G),JZ(J),z.head.appendChild(J)}}}function UM(G,Z,z){z6.S(G,Z,z);var J=IJ;if(J&&G){var B=ZJ(J).hoistableStyles,Y=MJ(G);Z=Z||"default";var j=B.get(Y);if(!j){var H={loading:0,preload:null};if(j=J.querySelector(a8(Y)))H.loading=5;else{G=NG({rel:"stylesheet",href:G,"data-precedence":Z},z),(z=J7.get(Y))&&DH(G,z);var X=j=J.createElement("link");JZ(X),WZ(X,"link",G),X._p=new Promise(function(F,Q){X.onload=F,X.onerror=Q}),X.addEventListener("load",function(){H.loading|=1}),X.addEventListener("error",function(){H.loading|=2}),H.loading|=4,j9(j,Z,J)}j={type:"stylesheet",instance:j,count:1,state:H},B.set(Y,j)}}}function AM(G,Z){z6.X(G,Z);var z=IJ;if(z&&G){var J=ZJ(z).hoistableScripts,B=fJ(G),Y=J.get(B);Y||(Y=z.querySelector(n8(B)),Y||(G=NG({src:G,async:!0},Z),(Z=J7.get(B))&&KH(G,Z),Y=z.createElement("script"),JZ(Y),WZ(Y,"link",G),z.head.appendChild(Y)),Y={type:"script",instance:Y,count:1,state:null},J.set(B,Y))}}function QM(G,Z){z6.M(G,Z);var z=IJ;if(z&&G){var J=ZJ(z).hoistableScripts,B=fJ(G),Y=J.get(B);Y||(Y=z.querySelector(n8(B)),Y||(G=NG({src:G,async:!0,type:"module"},Z),(Z=J7.get(B))&&KH(G,Z),Y=z.createElement("script"),JZ(Y),WZ(Y,"link",G),z.head.appendChild(Y)),Y={type:"script",instance:Y,count:1,state:null},J.set(B,Y))}}function bW(G,Z,z,J){var B=(B=D6.current)?P9(B):null;if(!B)throw Error(h(446));switch(G){case"meta":case"title":return null;case"style":return typeof z.precedence==="string"&&typeof z.href==="string"?(Z=MJ(z.href),z=ZJ(B).hoistableStyles,J=z.get(Z),J||(J={type:"style",instance:null,count:0,state:null},z.set(Z,J)),J):{type:"void",instance:null,count:0,state:null};case"link":if(z.rel==="stylesheet"&&typeof z.href==="string"&&typeof z.precedence==="string"){G=MJ(z.href);var Y=ZJ(B).hoistableStyles,j=Y.get(G);if(j||(B=B.ownerDocument||B,j={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},Y.set(G,j),(Y=B.querySelector(a8(G)))&&!Y._p&&(j.instance=Y,j.state.loading=5),J7.has(G)||(z={rel:"preload",as:"style",href:z.href,crossOrigin:z.crossOrigin,integrity:z.integrity,media:z.media,hrefLang:z.hrefLang,referrerPolicy:z.referrerPolicy},J7.set(G,z),Y||_M(B,G,z,j.state))),Z&&J===null)throw Error(h(528,""));return j}if(Z&&J!==null)throw Error(h(529,""));return null;case"script":return Z=z.async,z=z.src,typeof z==="string"&&Z&&typeof Z!=="function"&&typeof Z!=="symbol"?(Z=fJ(z),z=ZJ(B).hoistableScripts,J=z.get(Z),J||(J={type:"script",instance:null,count:0,state:null},z.set(Z,J)),J):{type:"void",instance:null,count:0,state:null};default:throw Error(h(444,G))}}function MJ(G){return'href="'+tZ(G)+'"'}function a8(G){return'link[rel="stylesheet"]['+G+"]"}function wQ(G){return NG({},G,{"data-precedence":G.precedence,precedence:null})}function _M(G,Z,z,J){G.querySelector('link[rel="preload"][as="style"]['+Z+"]")?J.loading=1:(Z=G.createElement("link"),J.preload=Z,Z.addEventListener("load",function(){return J.loading|=1}),Z.addEventListener("error",function(){return J.loading|=2}),WZ(Z,"link",z),JZ(Z),G.head.appendChild(Z))}function fJ(G){return'[src="'+tZ(G)+'"]'}function n8(G){return"script[async]"+G}function PW(G,Z,z){if(Z.count++,Z.instance===null)switch(Z.type){case"style":var J=G.querySelector('style[data-href~="'+tZ(z.href)+'"]');if(J)return Z.instance=J,JZ(J),J;var B=NG({},z,{"data-href":z.href,"data-precedence":z.precedence,href:null,precedence:null});return J=(G.ownerDocument||G).createElement("style"),JZ(J),WZ(J,"style",B),j9(J,z.precedence,G),Z.instance=J;case"stylesheet":B=MJ(z.href);var Y=G.querySelector(a8(B));if(Y)return Z.state.loading|=4,Z.instance=Y,JZ(Y),Y;J=wQ(z),(B=J7.get(B))&&DH(J,B),Y=(G.ownerDocument||G).createElement("link"),JZ(Y);var j=Y;return j._p=new Promise(function(H,X){j.onload=H,j.onerror=X}),WZ(Y,"link",J),Z.state.loading|=4,j9(Y,z.precedence,G),Z.instance=Y;case"script":if(Y=fJ(z.src),B=G.querySelector(n8(Y)))return Z.instance=B,JZ(B),B;if(J=z,B=J7.get(Y))J=NG({},z),KH(J,B);return G=G.ownerDocument||G,B=G.createElement("script"),JZ(B),WZ(B,"link",J),G.head.appendChild(B),Z.instance=B;case"void":return null;default:throw Error(h(443,Z.type))}else Z.type==="stylesheet"&&(Z.state.loading&4)===0&&(J=Z.instance,Z.state.loading|=4,j9(J,z.precedence,G));return Z.instance}function j9(G,Z,z){for(var J=z.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),B=J.length?J[J.length-1]:null,Y=B,j=0;j<J.length;j++){var H=J[j];if(H.dataset.precedence===Z)Y=H;else if(Y!==B)break}Y?Y.parentNode.insertBefore(G,Y.nextSibling):(Z=z.nodeType===9?z.head:z,Z.insertBefore(G,Z.firstChild))}function DH(G,Z){G.crossOrigin==null&&(G.crossOrigin=Z.crossOrigin),G.referrerPolicy==null&&(G.referrerPolicy=Z.referrerPolicy),G.title==null&&(G.title=Z.title)}function KH(G,Z){G.crossOrigin==null&&(G.crossOrigin=Z.crossOrigin),G.referrerPolicy==null&&(G.referrerPolicy=Z.referrerPolicy),G.integrity==null&&(G.integrity=Z.integrity)}var H9=null;function EW(G,Z,z){if(H9===null){var J=new Map,B=H9=new Map;B.set(z,J)}else B=H9,J=B.get(z),J||(J=new Map,B.set(z,J));if(J.has(G))return J;J.set(G,null),z=z.getElementsByTagName(G);for(B=0;B<z.length;B++){var Y=z[B];if(!(Y[l8]||Y[HZ]||G==="link"&&Y.getAttribute("rel")==="stylesheet")&&Y.namespaceURI!=="http://www.w3.org/2000/svg"){var j=Y.getAttribute(Z)||"";j=G+j;var H=J.get(j);H?H.push(Y):J.set(j,[Y])}}return J}function hW(G,Z,z){G=G.ownerDocument||G,G.head.insertBefore(z,Z==="title"?G.querySelector("head > title"):null)}function LM(G,Z,z){if(z===1||Z.itemProp!=null)return!1;switch(G){case"meta":case"title":return!0;case"style":if(typeof Z.precedence!=="string"||typeof Z.href!=="string"||Z.href==="")break;return!0;case"link":if(typeof Z.rel!=="string"||typeof Z.href!=="string"||Z.href===""||Z.onLoad||Z.onError)break;switch(Z.rel){case"stylesheet":return G=Z.disabled,typeof Z.precedence==="string"&&G==null;default:return!0}case"script":if(Z.async&&typeof Z.async!=="function"&&typeof Z.async!=="symbol"&&!Z.onLoad&&!Z.onError&&Z.src&&typeof Z.src==="string")return!0}return!1}function VQ(G){return G.type==="stylesheet"&&(G.state.loading&3)===0?!1:!0}function OM(G,Z,z,J){if(z.type==="stylesheet"&&(typeof J.media!=="string"||matchMedia(J.media).matches!==!1)&&(z.state.loading&4)===0){if(z.instance===null){var B=MJ(J.href),Y=Z.querySelector(a8(B));if(Y){Z=Y._p,Z!==null&&typeof Z==="object"&&typeof Z.then==="function"&&(G.count++,G=E9.bind(G),Z.then(G,G)),z.state.loading|=4,z.instance=Y,JZ(Y);return}Y=Z.ownerDocument||Z,J=wQ(J),(B=J7.get(B))&&DH(J,B),Y=Y.createElement("link"),JZ(Y);var j=Y;j._p=new Promise(function(H,X){j.onload=H,j.onerror=X}),WZ(Y,"link",J),z.instance=Y}G.stylesheets===null&&(G.stylesheets=new Map),G.stylesheets.set(z,Z),(Z=z.state.preload)&&(z.state.loading&3)===0&&(G.count++,z=E9.bind(G),Z.addEventListener("load",z),Z.addEventListener("error",z))}}var P4=0;function MM(G,Z){return G.stylesheets&&G.count===0&&X9(G,G.stylesheets),0<G.count||0<G.imgCount?function(z){var J=setTimeout(function(){if(G.stylesheets&&X9(G,G.stylesheets),G.unsuspend){var Y=G.unsuspend;G.unsuspend=null,Y()}},60000+Z);0<G.imgBytes&&P4===0&&(P4=62500*nO());var B=setTimeout(function(){if(G.waitingForImages=!1,G.count===0&&(G.stylesheets&&X9(G,G.stylesheets),G.unsuspend)){var Y=G.unsuspend;G.unsuspend=null,Y()}},(G.imgBytes>P4?50:800)+Z);return G.unsuspend=z,function(){G.unsuspend=null,clearTimeout(J),clearTimeout(B)}}:null}function E9(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)X9(this,this.stylesheets);else if(this.unsuspend){var G=this.unsuspend;this.unsuspend=null,G()}}}var h9=null;function X9(G,Z){G.stylesheets=null,G.unsuspend!==null&&(G.count++,h9=new Map,Z.forEach(FM,G),h9=null,E9.call(G))}function FM(G,Z){if(!(Z.state.loading&4)){var z=h9.get(G);if(z)var J=z.get(null);else{z=new Map,h9.set(G,z);for(var B=G.querySelectorAll("link[data-precedence],style[data-precedence]"),Y=0;Y<B.length;Y++){var j=B[Y];if(j.nodeName==="LINK"||j.getAttribute("media")!=="not all")z.set(j.dataset.precedence,j),J=j}J&&z.set(null,J)}B=Z.instance,j=B.getAttribute("data-precedence"),Y=z.get(j)||J,Y===J&&z.set(null,B),z.set(j,B),this.count++,J=E9.bind(this),B.addEventListener("load",J),B.addEventListener("error",J),Y?Y.parentNode.insertBefore(B,Y.nextSibling):(G=G.nodeType===9?G.head:G,G.insertBefore(B,G.firstChild)),Z.state.loading|=4}}var g8={$$typeof:p7,Provider:null,Consumer:null,_currentValue:Jz,_currentValue2:Jz,_threadCount:0};function RM(G,Z,z,J,B,Y,j,H,X){this.tag=1,this.containerInfo=G,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=H4(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=H4(0),this.hiddenUpdates=H4(null),this.identifierPrefix=J,this.onUncaughtError=B,this.onCaughtError=Y,this.onRecoverableError=j,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=X,this.incompleteTransitions=new Map}function DQ(G,Z,z,J,B,Y,j,H,X,F,Q,R){return G=new RM(G,Z,z,j,X,F,Q,R,H),Z=1,Y===!0&&(Z|=24),Y=PZ(3,null,null,Z),G.current=Y,Y.stateNode=G,Z=oj(),Z.refCount++,G.pooledCache=Z,Z.refCount++,Y.memoizedState={element:J,isDehydrated:z,cache:Z},tj(Y),G}function KQ(G){if(!G)return nz;return G=nz,G}function IQ(G,Z,z,J,B,Y){B=KQ(B),J.context===null?J.context=B:J.pendingContext=B,J=I6(Z),J.payload={element:z},Y=Y===void 0?null:Y,Y!==null&&(J.callback=Y),z=f6(G,J,Z),z!==null&&(NZ(z,G,Z),M8(z,G,Z))}function gW(G,Z){if(G=G.memoizedState,G!==null&&G.dehydrated!==null){var z=G.retryLane;G.retryLane=z!==0&&z<Z?z:Z}}function IH(G,Z){gW(G,Z),(G=G.alternate)&&gW(G,Z)}function fQ(G){if(G.tag===13||G.tag===31){var Z=Oz(G,67108864);Z!==null&&NZ(Z,G,67108864),IH(G,67108864)}}function yW(G){if(G.tag===13||G.tag===31){var Z=vZ();Z=Ej(Z);var z=Oz(G,Z);z!==null&&NZ(z,G,Z),IH(G,Z)}}var g9=!0;function wM(G,Z,z,J){var B=K0.T;K0.T=null;var Y=YG.p;try{YG.p=2,fH(G,Z,z,J)}finally{YG.p=Y,K0.T=B}}function VM(G,Z,z,J){var B=K0.T;K0.T=null;var Y=YG.p;try{YG.p=8,fH(G,Z,z,J)}finally{YG.p=Y,K0.T=B}}function fH(G,Z,z,J){if(g9){var B=xj(J);if(B===null)k4(G,Z,J,y9,z),vW(G,J);else if(KM(B,G,Z,z,J))J.stopPropagation();else if(vW(G,J),Z&4&&-1<DM.indexOf(G)){for(;B!==null;){var Y=wJ(B);if(Y!==null)switch(Y.tag){case 3:if(Y=Y.stateNode,Y.current.memoizedState.isDehydrated){var j=e6(Y.pendingLanes);if(j!==0){var H=Y;H.pendingLanes|=2;for(H.entangledLanes|=2;j;){var X=1<<31-yZ(j);H.entanglements[1]|=X,j&=~X}k7(Y),(BG&6)===0&&(N9=hZ()+500,o8(0,!1))}}break;case 31:case 13:H=Oz(Y,2),H!==null&&NZ(H,Y,2),n9(),IH(Y,2)}if(Y=xj(J),Y===null&&k4(G,Z,J,y9,z),Y===B)break;B=Y}B!==null&&J.stopPropagation()}else k4(G,Z,J,null,z)}}function xj(G){return G=vj(G),TH(G)}var y9=null;function TH(G){if(y9=null,G=pz(G),G!==null){var Z=u8(G);if(Z===null)G=null;else{var z=Z.tag;if(z===13){if(G=pW(Z),G!==null)return G;G=null}else if(z===31){if(G=iW(Z),G!==null)return G;G=null}else if(z===3){if(Z.stateNode.current.memoizedState.isDehydrated)return Z.tag===3?Z.stateNode.containerInfo:null;G=null}else Z!==G&&(G=null)}}return y9=G,null}function TQ(G){switch(G){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q1()){case aW:return 2;case nW:return 8;case Q9:case W1:return 32;case tW:return 268435456;default:return 32}default:return 32}}var Sj=!1,$6=null,C6=null,x6=null,y8=new Map,v8=new Map,O6=[],DM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function vW(G,Z){switch(G){case"focusin":case"focusout":$6=null;break;case"dragenter":case"dragleave":C6=null;break;case"mouseover":case"mouseout":x6=null;break;case"pointerover":case"pointerout":y8.delete(Z.pointerId);break;case"gotpointercapture":case"lostpointercapture":v8.delete(Z.pointerId)}}function J8(G,Z,z,J,B,Y){if(G===null||G.nativeEvent!==Y)return G={blockedOn:Z,domEventName:z,eventSystemFlags:J,nativeEvent:Y,targetContainers:[B]},Z!==null&&(Z=wJ(Z),Z!==null&&fQ(Z)),G;return G.eventSystemFlags|=J,Z=G.targetContainers,B!==null&&Z.indexOf(B)===-1&&Z.push(B),G}function KM(G,Z,z,J,B){switch(Z){case"focusin":return $6=J8($6,G,Z,z,J,B),!0;case"dragenter":return C6=J8(C6,G,Z,z,J,B),!0;case"mouseover":return x6=J8(x6,G,Z,z,J,B),!0;case"pointerover":var Y=B.pointerId;return y8.set(Y,J8(y8.get(Y)||null,G,Z,z,J,B)),!0;case"gotpointercapture":return Y=B.pointerId,v8.set(Y,J8(v8.get(Y)||null,G,Z,z,J,B)),!0}return!1}function NQ(G){var Z=pz(G.target);if(Z!==null){var z=u8(Z);if(z!==null){if(Z=z.tag,Z===13){if(Z=pW(z),Z!==null){G.blockedOn=Z,Iq(G.priority,function(){yW(z)});return}}else if(Z===31){if(Z=iW(z),Z!==null){G.blockedOn=Z,Iq(G.priority,function(){yW(z)});return}}else if(Z===3&&z.stateNode.current.memoizedState.isDehydrated){G.blockedOn=z.tag===3?z.stateNode.containerInfo:null;return}}}G.blockedOn=null}function q9(G){if(G.blockedOn!==null)return!1;for(var Z=G.targetContainers;0<Z.length;){var z=xj(G.nativeEvent);if(z===null){z=G.nativeEvent;var J=new z.constructor(z.type,z);s4=J,z.target.dispatchEvent(J),s4=null}else return Z=wJ(z),Z!==null&&fQ(Z),G.blockedOn=z,!1;Z.shift()}return!0}function uW(G,Z,z){q9(G)&&z.delete(Z)}function IM(){Sj=!1,$6!==null&&q9($6)&&($6=null),C6!==null&&q9(C6)&&(C6=null),x6!==null&&q9(x6)&&(x6=null),y8.forEach(uW),v8.forEach(uW)}function iB(G,Z){G.blockedOn===Z&&(G.blockedOn=null,Sj||(Sj=!0,GZ.unstable_scheduleCallback(GZ.unstable_NormalPriority,IM)))}var sB=null;function mW(G){sB!==G&&(sB=G,GZ.unstable_scheduleCallback(GZ.unstable_NormalPriority,function(){sB===G&&(sB=null);for(var Z=0;Z<G.length;Z+=3){var z=G[Z],J=G[Z+1],B=G[Z+2];if(typeof J!=="function")if(TH(J||z)===null)continue;else break;var Y=wJ(z);Y!==null&&(G.splice(Z,3),Z-=3,qj(Y,{pending:!0,data:B,method:z.method,action:J},J,B))}}))}function FJ(G){function Z(X){return iB(X,G)}$6!==null&&iB($6,G),C6!==null&&iB(C6,G),x6!==null&&iB(x6,G),y8.forEach(Z),v8.forEach(Z);for(var z=0;z<O6.length;z++){var J=O6[z];J.blockedOn===G&&(J.blockedOn=null)}for(;0<O6.length&&(z=O6[0],z.blockedOn===null);)NQ(z),z.blockedOn===null&&O6.shift();if(z=(G.ownerDocument||G).$$reactFormReplay,z!=null)for(J=0;J<z.length;J+=3){var B=z[J],Y=z[J+1],j=B[$Z]||null;if(typeof Y==="function")j||mW(z);else if(j){var H=null;if(Y&&Y.hasAttribute("formAction")){if(B=Y,j=Y[$Z]||null)H=j.formAction;else if(TH(B)!==null)continue}else H=j.action;typeof H==="function"?z[J+1]=H:(z.splice(J,3),J-=3),mW(z)}}}function $Q(){function G(Y){Y.canIntercept&&Y.info==="react-transition"&&Y.intercept({handler:function(){return new Promise(function(j){return B=j})},focusReset:"manual",scroll:"manual"})}function Z(){B!==null&&(B(),B=null),J||setTimeout(z,20)}function z(){if(!J&&!navigation.transition){var Y=navigation.currentEntry;Y&&Y.url!=null&&navigation.navigate(Y.url,{state:Y.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation==="object"){var J=!1,B=null;return navigation.addEventListener("navigate",G),navigation.addEventListener("navigatesuccess",Z),navigation.addEventListener("navigateerror",Z),setTimeout(z,100),function(){J=!0,navigation.removeEventListener("navigate",G),navigation.removeEventListener("navigatesuccess",Z),navigation.removeEventListener("navigateerror",Z),B!==null&&(B(),B=null)}}}function NH(G){this._internalRoot=G}GY.prototype.render=NH.prototype.render=function(G){var Z=this._internalRoot;if(Z===null)throw Error(h(409));var z=Z.current,J=vZ();IQ(z,J,G,Z,null,null)};GY.prototype.unmount=NH.prototype.unmount=function(){var G=this._internalRoot;if(G!==null){this._internalRoot=null;var Z=G.containerInfo;IQ(G.current,2,null,G,null,null),n9(),Z[RJ]=null}};function GY(G){this._internalRoot=G}GY.prototype.unstable_scheduleHydration=function(G){if(G){var Z=JU();G={blockedOn:null,target:G,priority:Z};for(var z=0;z<O6.length&&Z!==0&&Z<O6[z].priority;z++);O6.splice(z,0,G),z===0&&NQ(G)}};var dW=cW.version;if(dW!=="19.2.8")throw Error(h(527,dW,"19.2.8"));YG.findDOMNode=function(G){var Z=G._reactInternals;if(Z===void 0){if(typeof G.render==="function")throw Error(h(188));throw G=Object.keys(G).join(","),Error(h(268,G))}return G=z1(Z),G=G!==null?sW(G):null,G=G===null?null:G.stateNode,G};var fM={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:K0,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){if(dz=__REACT_DEVTOOLS_GLOBAL_HOOK__,!dz.isDisabled&&dz.supportsFiber)try{m8=dz.inject(fM),gZ=dz}catch(G){}}var dz;ZY.createRoot=function(G,Z){if(!lW(G))throw Error(h(299));var z=!1,J="",B=RA,Y=wA,j=VA;return Z!==null&&Z!==void 0&&(Z.unstable_strictMode===!0&&(z=!0),Z.identifierPrefix!==void 0&&(J=Z.identifierPrefix),Z.onUncaughtError!==void 0&&(B=Z.onUncaughtError),Z.onCaughtError!==void 0&&(Y=Z.onCaughtError),Z.onRecoverableError!==void 0&&(j=Z.onRecoverableError)),Z=DQ(G,1,!1,null,null,z,J,null,B,Y,j,$Q),G[RJ]=Z.current,VH(G),new NH(Z)};ZY.hydrateRoot=function(G,Z,z){if(!lW(G))throw Error(h(299));var J=!1,B="",Y=RA,j=wA,H=VA,X=null;return z!==null&&z!==void 0&&(z.unstable_strictMode===!0&&(J=!0),z.identifierPrefix!==void 0&&(B=z.identifierPrefix),z.onUncaughtError!==void 0&&(Y=z.onUncaughtError),z.onCaughtError!==void 0&&(j=z.onCaughtError),z.onRecoverableError!==void 0&&(H=z.onRecoverableError),z.formState!==void 0&&(X=z.formState)),Z=DQ(G,1,!0,Z,z!=null?z:null,J,B,X,Y,j,H,$Q),Z.context=KQ(null),z=Z.current,J=vZ(),J=Ej(J),B=I6(J),B.callback=null,f6(z,B,J),z=J,Z.current.lanes=z,c8(Z,z),k7(Z),G[RJ]=Z.current,VH(G),new GY(Z)};ZY.version="19.2.8"});var kQ=K7((iM,SQ)=>{function xQ(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=="function")return;try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xQ)}catch(G){console.error(G)}}xQ(),SQ.exports=CQ()});var $=DG(U7(),1),pX=DG(AB(),1),bG=DG(U7(),1),s=DG(AZ(),1),$G=DG(AZ(),1),f7=DG(U7(),1),rX=DG(AB(),1),o6=DG(AZ(),1),gY=DG(AZ(),1),t0=DG(U7(),1),W=DG(AZ(),1),RG=DG(AZ(),1),PG=DG(U7(),1),q=DG(AZ(),1),D0=DG(U7(),1),r0=DG(AZ(),1),Xq=DG(U7(),1),SZ=DG(AZ(),1),rJ=DG(AZ(),1),qq=DG(U7(),1),bz=DG(AZ(),1),Pz=DG(AZ(),1),o=DG(AZ(),1),m=DG(AZ(),1),g_=`.styles-module__popup___IhzrD svg[fill=none] {
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
}`,y_={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",popupEnter:"styles-module__popupEnter___AuQDN",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",popupExit:"styles-module__popupExit___JJKQX",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",green:"styles-module__green___99l3h",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let G=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");if(!G)G=document.createElement("style"),G.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(G);G.textContent=g_}var FG=y_,v_=`.icon-transitions-module__iconState___uqK9J {
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
}`,u_={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let G=document.getElementById("feedback-tool-styles-components-icon-transitions");if(!G)G=document.createElement("style"),G.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(G);G.textContent=v_}var LG=u_;var m_=({size:G=16})=>s.jsx("svg",{width:G,height:G,viewBox:"0 0 16 16",fill:"none",children:s.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})});var d_=({size:G=24,style:Z={}})=>s.jsxs("svg",{width:G,height:G,viewBox:"0 0 24 24",fill:"none",style:Z,children:[s.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[s.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),s.jsx("defs",{children:s.jsx("clipPath",{id:"clip0_list_sparkle",children:s.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),c_=({size:G=20,...Z})=>s.jsxs("svg",{width:G,height:G,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...Z,children:[s.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),s.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]});var l_=({size:G=24,copied:Z=!1,tint:z})=>s.jsxs("svg",{width:G,height:G,viewBox:"0 0 24 24",fill:"none",style:z?{color:z,transition:"color 0.3s ease"}:void 0,children:[s.jsxs("g",{className:`${LG.iconState} ${Z?LG.hiddenScaled:LG.visibleScaled}`,children:[s.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),s.jsxs("g",{className:`${LG.iconState} ${Z?LG.visibleScaled:LG.hiddenScaled}`,children:[s.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),p_=({size:G=24,state:Z="idle"})=>{let z=Z==="idle",J=Z==="sent",B=Z==="failed",Y=Z==="sending";return s.jsxs("svg",{width:G,height:G,viewBox:"0 0 24 24",fill:"none",children:[s.jsx("g",{className:`${LG.iconStateFast} ${z?LG.visibleScaled:Y?LG.sending:LG.hiddenScaled}`,children:s.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),s.jsxs("g",{className:`${LG.iconStateFast} ${J?LG.visibleScaled:LG.hiddenScaled}`,children:[s.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),s.jsxs("g",{className:`${LG.iconStateFast} ${B?LG.visibleScaled:LG.hiddenScaled}`,children:[s.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})};var i_=({size:G=24,isOpen:Z=!0})=>s.jsxs("svg",{width:G,height:G,viewBox:"0 0 24 24",fill:"none",children:[s.jsxs("g",{className:`${LG.iconFade} ${Z?LG.visible:LG.hidden}`,children:[s.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),s.jsxs("g",{className:`${LG.iconFade} ${Z?LG.hidden:LG.visible}`,children:[s.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),s.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),s_=({size:G=24,isPaused:Z=!1})=>s.jsxs("svg",{width:G,height:G,viewBox:"0 0 24 24",fill:"none",children:[s.jsxs("g",{className:`${LG.iconFadeFast} ${Z?LG.hidden:LG.visible}`,children:[s.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),s.jsx("path",{className:`${LG.iconFadeFast} ${Z?LG.visible:LG.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]});var r_=({size:G=16})=>s.jsxs("svg",{width:G,height:G,viewBox:"0 0 24 24",fill:"none",children:[s.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]});var o_=({size:G=16})=>s.jsx("svg",{width:G,height:G,viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})});var iX=({size:G=16})=>s.jsxs("svg",{width:G,height:G,viewBox:"0 0 24 24",fill:"none",children:[s.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[s.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),s.jsx("defs",{children:s.jsx("clipPath",{id:"clip0_2_53",children:s.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),a_=({size:G=24})=>s.jsx("svg",{width:G,height:G,viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),n_=({size:G=16})=>s.jsxs("svg",{width:G,height:G,viewBox:"0 0 20 20",fill:"none",children:[s.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),t_=({size:G=16})=>s.jsx("svg",{width:G,height:G,viewBox:"0 0 20 20",fill:"none",children:s.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),e_=({size:G=16})=>s.jsx("svg",{width:G,height:G,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),GL=({size:G=24})=>s.jsx("svg",{width:G,height:G,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),ZL=({size:G=16})=>s.jsx("svg",{width:G,height:G,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})});var zL=({size:G=24})=>s.jsxs("svg",{width:G,height:G,viewBox:"0 0 24 24",fill:"none",children:[s.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),sX=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],fY=sX.flatMap((G)=>[`:not([${G}])`,`:not([${G}] *)`]).join(""),hY="feedback-freeze-styles",TY="__agentation_freeze";function JL(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:(Z)=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};let G=window;if(!G[TY])G[TY]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};return G[TY]}var y0=JL();if(typeof window<"u"&&!y0.installed)y0.origSetTimeout=window.setTimeout.bind(window),y0.origSetInterval=window.setInterval.bind(window),y0.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(G,Z,...z)=>{if(typeof G==="string")return y0.origSetTimeout(G,Z);return y0.origSetTimeout((...J)=>{if(y0.frozen)y0.frozenTimeoutQueue.push(()=>G(...J));else G(...J)},Z,...z)},window.setInterval=(G,Z,...z)=>{if(typeof G==="string")return y0.origSetInterval(G,Z);return y0.origSetInterval((...J)=>{if(!y0.frozen)G(...J)},Z,...z)},window.requestAnimationFrame=(G)=>{return y0.origRAF((Z)=>{if(y0.frozen)y0.frozenRAFQueue.push(G);else G(Z)})},y0.installed=!0;var{origSetTimeout:Q0,origSetInterval:BL,origRAF:Sz}=y0;function YL(G){if(!G)return!1;return sX.some((Z)=>!!G.closest?.(`[${Z}]`))}function jL(){if(typeof document>"u")return;if(y0.frozen)return;y0.frozen=!0,y0.frozenTimeoutQueue=[],y0.frozenRAFQueue=[];let G=document.getElementById(hY);if(!G)G=document.createElement("style"),G.id=hY;G.textContent=`
    *${fY},
    *${fY}::before,
    *${fY}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(G),y0.pausedAnimations=[];try{document.getAnimations().forEach((Z)=>{if(Z.playState!=="running")return;let z=Z.effect?.target;if(!YL(z))Z.pause(),y0.pausedAnimations.push(Z)})}catch{}document.querySelectorAll("video").forEach((Z)=>{if(!Z.paused)Z.dataset.wasPaused="false",Z.pause()})}function wX(){if(typeof document>"u")return;if(!y0.frozen)return;y0.frozen=!1;let G=y0.frozenTimeoutQueue;y0.frozenTimeoutQueue=[];for(let z of G)y0.origSetTimeout(()=>{if(y0.frozen){y0.frozenTimeoutQueue.push(z);return}try{z()}catch(J){console.warn("[agentation] Error replaying queued timeout:",J)}},0);let Z=y0.frozenRAFQueue;y0.frozenRAFQueue=[];for(let z of Z)y0.origRAF((J)=>{if(y0.frozen){y0.frozenRAFQueue.push(z);return}z(J)});for(let z of y0.pausedAnimations)try{z.play()}catch(J){console.warn("[agentation] Error resuming animation:",J)}y0.pausedAnimations=[],document.getElementById(hY)?.remove(),document.querySelectorAll("video").forEach((z)=>{if(z.dataset.wasPaused==="false")z.play().catch(()=>{}),delete z.dataset.wasPaused})}function NY(G){if(!G)return;let Z=(z)=>z.stopImmediatePropagation();document.addEventListener("focusin",Z,!0),document.addEventListener("focusout",Z,!0);try{G.focus()}finally{document.removeEventListener("focusin",Z,!0),document.removeEventListener("focusout",Z,!0)}}var TB=bG.forwardRef(function({element:Z,timestamp:z,selectedText:J,placeholder:B="What should change?",initialValue:Y="",submitLabel:j="Add",onSubmit:H,onCancel:X,onDelete:F,style:Q,accentColor:R="#3c82f7",isExiting:A=!1,lightMode:D=!1,computedStyles:f},S){let[C,_]=bG.useState(Y),[M,K]=bG.useState(!1),[N,p]=bG.useState("initial"),[B0,b]=bG.useState(!1),[a,G0]=bG.useState(!1),n=bG.useRef(null),_0=bG.useRef(null),GG=bG.useRef(null),QG=bG.useRef(null);bG.useEffect(()=>{if(A&&N!=="exit")p("exit")},[A,N]),bG.useEffect(()=>{Q0(()=>{p("enter")},0);let O0=Q0(()=>{p("entered")},200),o0=Q0(()=>{let EG=n.current;if(EG)NY(EG),EG.selectionStart=EG.selectionEnd=EG.value.length,EG.scrollTop=EG.scrollHeight},50);return()=>{if(clearTimeout(O0),clearTimeout(o0),GG.current)clearTimeout(GG.current);if(QG.current)clearTimeout(QG.current)}},[]);let P0=bG.useCallback(()=>{if(QG.current)clearTimeout(QG.current);K(!0),QG.current=Q0(()=>{K(!1),NY(n.current)},250)},[]);bG.useImperativeHandle(S,()=>({shake:P0}),[P0]);let c0=bG.useCallback(()=>{p("exit"),GG.current=Q0(()=>{X()},150)},[X]),N0=bG.useCallback(()=>{if(!C.trim())return;H(C.trim())},[C,H]),e0=bG.useCallback((O0)=>{if(O0.stopPropagation(),O0.nativeEvent.isComposing)return;if(O0.key==="Enter"&&!O0.shiftKey)O0.preventDefault(),N0();if(O0.key==="Escape")c0()},[N0,c0]),i=[FG.popup,D?FG.light:"",N==="enter"?FG.enter:"",N==="entered"?FG.entered:"",N==="exit"?FG.exit:"",M?FG.shake:""].filter(Boolean).join(" ");return $G.jsxs("div",{ref:_0,className:i,"data-annotation-popup":!0,style:Q,onClick:(O0)=>O0.stopPropagation(),children:[$G.jsxs("div",{className:FG.header,children:[f&&Object.keys(f).length>0?$G.jsxs("button",{className:FG.headerToggle,onClick:()=>{let O0=a;if(G0(!a),O0)Q0(()=>NY(n.current),0)},type:"button",children:[$G.jsx("svg",{className:`${FG.chevron} ${a?FG.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:$G.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),$G.jsx("span",{className:FG.element,children:Z})]}):$G.jsx("span",{className:FG.element,children:Z}),z&&$G.jsx("span",{className:FG.timestamp,children:z})]}),f&&Object.keys(f).length>0&&$G.jsx("div",{className:`${FG.stylesWrapper} ${a?FG.expanded:""}`,children:$G.jsx("div",{className:FG.stylesInner,children:$G.jsx("div",{className:FG.stylesBlock,children:Object.entries(f).map(([O0,o0])=>$G.jsxs("div",{className:FG.styleLine,children:[$G.jsx("span",{className:FG.styleProperty,children:O0.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",$G.jsx("span",{className:FG.styleValue,children:o0}),";"]},O0))})})}),J&&$G.jsxs("div",{className:FG.quote,children:["“",J.slice(0,80),J.length>80?"...":"","”"]}),$G.jsx("textarea",{ref:n,className:FG.textarea,style:{borderColor:B0?R:void 0},placeholder:B,value:C,onChange:(O0)=>_(O0.target.value),onFocus:()=>b(!0),onBlur:()=>b(!1),rows:2,onKeyDown:e0}),$G.jsxs("div",{className:FG.actions,children:[F&&$G.jsx("div",{className:FG.deleteWrapper,children:$G.jsx("button",{className:FG.deleteButton,onClick:F,type:"button",children:$G.jsx(GL,{size:22})})}),$G.jsx("button",{className:FG.cancel,onClick:c0,children:"Cancel"}),$G.jsx("button",{className:FG.submit,style:{backgroundColor:R,opacity:C.trim()?1:0.4},onClick:N0,disabled:!C.trim(),children:j})]})]})}),HL=({content:G,children:Z,...z})=>{let[J,B]=f7.useState(!1),[Y,j]=f7.useState(!1),[H,X]=f7.useState({top:0,right:0}),F=f7.useRef(null),Q=f7.useRef(null),R=f7.useRef(null),A=()=>{if(F.current){let S=F.current.getBoundingClientRect();X({top:S.top+S.height/2,right:window.innerWidth-S.left+8})}},D=()=>{if(j(!0),R.current)clearTimeout(R.current),R.current=null;A(),Q.current=Q0(()=>{B(!0)},500)},f=()=>{if(Q.current)clearTimeout(Q.current),Q.current=null;B(!1),R.current=Q0(()=>{j(!1)},150)};return f7.useEffect(()=>{return()=>{if(Q.current)clearTimeout(Q.current);if(R.current)clearTimeout(R.current)}},[]),o6.jsxs(o6.Fragment,{children:[o6.jsx("span",{ref:F,onMouseEnter:D,onMouseLeave:f,...z,children:Z}),Y&&rX.createPortal(o6.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:H.top,right:H.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:J?1:0,transition:"opacity 0.15s ease"},children:G}),document.body)]})},XL=`.styles-module__tooltip___mcXL2 {
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
}`,qL={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let G=document.getElementById("feedback-tool-styles-help-tooltip-styles");if(!G)G=document.createElement("style"),G.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(G);G.textContent=XL}var VX=qL,r6=({content:G})=>{return gY.jsx(HL,{className:VX.tooltip,content:G,children:gY.jsx(c_,{className:VX.tooltipIcon})})},e={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},oX=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...e.navigation},{type:"header",label:"Header",...e.header},{type:"hero",label:"Hero",...e.hero},{type:"section",label:"Section",...e.section},{type:"sidebar",label:"Sidebar",...e.sidebar},{type:"footer",label:"Footer",...e.footer},{type:"modal",label:"Modal",...e.modal},{type:"banner",label:"Banner",...e.banner},{type:"drawer",label:"Drawer",...e.drawer},{type:"popover",label:"Popover",...e.popover},{type:"divider",label:"Divider",...e.divider}]},{section:"Content",items:[{type:"card",label:"Card",...e.card},{type:"text",label:"Text",...e.text},{type:"image",label:"Image",...e.image},{type:"video",label:"Video",...e.video},{type:"table",label:"Table",...e.table},{type:"grid",label:"Grid",...e.grid},{type:"list",label:"List",...e.list},{type:"chart",label:"Chart",...e.chart},{type:"codeBlock",label:"Code Block",...e.codeBlock},{type:"map",label:"Map",...e.map},{type:"timeline",label:"Timeline",...e.timeline},{type:"calendar",label:"Calendar",...e.calendar},{type:"accordion",label:"Accordion",...e.accordion},{type:"carousel",label:"Carousel",...e.carousel},{type:"logo",label:"Logo",...e.logo},{type:"faq",label:"FAQ",...e.faq},{type:"gallery",label:"Gallery",...e.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...e.button},{type:"input",label:"Input",...e.input},{type:"search",label:"Search",...e.search},{type:"form",label:"Form",...e.form},{type:"tabs",label:"Tabs",...e.tabs},{type:"dropdown",label:"Dropdown",...e.dropdown},{type:"toggle",label:"Toggle",...e.toggle},{type:"stepper",label:"Stepper",...e.stepper},{type:"rating",label:"Rating",...e.rating},{type:"fileUpload",label:"File Upload",...e.fileUpload},{type:"checkbox",label:"Checkbox",...e.checkbox},{type:"radio",label:"Radio",...e.radio},{type:"slider",label:"Slider",...e.slider},{type:"datePicker",label:"Date Picker",...e.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...e.avatar},{type:"badge",label:"Badge",...e.badge},{type:"tag",label:"Tag",...e.tag},{type:"breadcrumb",label:"Breadcrumb",...e.breadcrumb},{type:"pagination",label:"Pagination",...e.pagination},{type:"progress",label:"Progress",...e.progress},{type:"alert",label:"Alert",...e.alert},{type:"toast",label:"Toast",...e.toast},{type:"notification",label:"Notification",...e.notification},{type:"tooltip",label:"Tooltip",...e.tooltip},{type:"stat",label:"Stat",...e.stat},{type:"skeleton",label:"Skeleton",...e.skeleton},{type:"chip",label:"Chip",...e.chip},{type:"icon",label:"Icon",...e.icon},{type:"spinner",label:"Spinner",...e.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...e.pricing},{type:"testimonial",label:"Testimonial",...e.testimonial},{type:"cta",label:"CTA",...e.cta},{type:"productCard",label:"Product Card",...e.productCard},{type:"profile",label:"Profile",...e.profile},{type:"feature",label:"Feature",...e.feature},{type:"team",label:"Team",...e.team},{type:"login",label:"Login",...e.login},{type:"contact",label:"Contact",...e.contact}]}],A7={};for(let G of oX)for(let Z of G.items)A7[Z.type]=Z;function y({w:G,h:Z=3,strong:z}){return W.jsx("div",{style:{width:typeof G==="number"?`${G}px`:G,height:Z,borderRadius:2,background:z?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function WG({w:G,h:Z,radius:z=3,style:J}){return W.jsx("div",{style:{width:typeof G==="number"?`${G}px`:G,height:typeof Z==="number"?`${Z}px`:Z,borderRadius:z,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...J}})}function FZ({size:G}){return W.jsx("div",{style:{width:G,height:G,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function WL({width:G,height:Z}){let z=Math.max(8,Z*0.2);return W.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${z}px`,gap:G*0.02},children:[W.jsx(WG,{w:Math.max(20,Z*0.5),h:Math.max(12,Z*0.4),radius:2}),W.jsxs("div",{style:{flex:1,display:"flex",gap:G*0.03,marginLeft:G*0.04},children:[W.jsx(y,{w:G*0.06}),W.jsx(y,{w:G*0.07}),W.jsx(y,{w:G*0.05}),W.jsx(y,{w:G*0.06})]}),W.jsx(WG,{w:G*0.1,h:Math.min(28,Z*0.5),radius:4})]})}function UL({width:G,height:Z,text:z}){return W.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:Z*0.05},children:[z?W.jsx("span",{style:{fontSize:Math.min(20,Z*0.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:z}):W.jsx(y,{w:G*0.5,h:Math.max(6,Z*0.04),strong:!0}),W.jsx(y,{w:G*0.6}),W.jsx(y,{w:G*0.4}),W.jsx(WG,{w:Math.min(140,G*0.2),h:Math.min(36,Z*0.12),radius:6,style:{marginTop:Z*0.06}})]})}function AL({width:G,height:Z}){let z=Math.max(3,Math.floor(Z/36));return W.jsxs("div",{style:{padding:G*0.08,display:"flex",flexDirection:"column",gap:Z*0.03},children:[W.jsx(y,{w:G*0.6,h:4,strong:!0}),Array.from({length:z},(J,B)=>W.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[W.jsx(WG,{w:10,h:10,radius:2}),W.jsx(y,{w:G*(0.4+B*17%30/100)})]},B))]})}function QL({width:G,height:Z}){let z=Math.max(2,Math.min(4,Math.floor(G/160)));return W.jsx("div",{style:{display:"flex",padding:`${Z*0.12}px ${G*0.03}px`,gap:G*0.05},children:Array.from({length:z},(J,B)=>W.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[W.jsx(y,{w:"60%",h:3,strong:!0}),W.jsx(y,{w:"80%",h:2}),W.jsx(y,{w:"70%",h:2}),W.jsx(y,{w:"60%",h:2})]},B))})}function _L({width:G,height:Z}){return W.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[W.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[W.jsx(y,{w:G*0.3,h:4,strong:!0}),W.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),W.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[W.jsx(y,{w:"90%"}),W.jsx(y,{w:"70%"}),W.jsx(y,{w:"80%"})]}),W.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[W.jsx(WG,{w:70,h:26,radius:4}),W.jsx(WG,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function LL({width:G,height:Z}){return W.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[W.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),W.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[W.jsx(y,{w:"70%",h:4,strong:!0}),W.jsx(y,{w:"95%",h:2}),W.jsx(y,{w:"85%",h:2}),W.jsx(y,{w:"50%",h:2})]})]})}function OL({width:G,height:Z,text:z}){if(z)return W.jsx("div",{style:{padding:4,fontSize:Math.min(14,Z*0.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:z});let J=Math.max(2,Math.floor(Z/18));return W.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[W.jsx(y,{w:G*0.6,h:5,strong:!0}),Array.from({length:J},(B,Y)=>W.jsx(y,{w:`${70+Y*13%25}%`,h:2},Y))]})}function ML({width:G,height:Z}){return W.jsx("div",{style:{height:"100%",position:"relative"},children:W.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${G} ${Z}`,preserveAspectRatio:"none",fill:"none",children:[W.jsx("line",{x1:"0",y1:"0",x2:G,y2:Z,stroke:"var(--agd-stroke)",strokeWidth:"1"}),W.jsx("line",{x1:G,y1:"0",x2:"0",y2:Z,stroke:"var(--agd-stroke)",strokeWidth:"1"}),W.jsx("circle",{cx:G*0.3,cy:Z*0.3,r:Math.min(G,Z)*0.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function FL({width:G,height:Z}){let z=Math.max(2,Math.min(5,Math.floor(G/100))),J=Math.max(2,Math.min(6,Math.floor(Z/32)));return W.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[W.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:z},(B,Y)=>W.jsx("div",{style:{flex:1,padding:"0 8px"},children:W.jsx(y,{w:"70%",h:3,strong:!0})},Y))}),Array.from({length:J},(B,Y)=>W.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:z},(j,H)=>W.jsx("div",{style:{flex:1,padding:"0 8px"},children:W.jsx(y,{w:`${50+(Y*7+H*13)%40}%`,h:2})},H))},Y))]})}function RL({width:G,height:Z}){let z=Math.max(2,Math.floor(Z/28));return W.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:z},(J,B)=>W.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[W.jsx(FZ,{size:8}),W.jsx(y,{w:`${55+B*17%35}%`,h:2})]},B))})}function wL({width:G,height:Z,text:z}){return W.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,Z/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:z?W.jsx("span",{style:{fontSize:Math.min(13,Z*0.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:z}):W.jsx(y,{w:Math.max(20,G*0.5),h:3,strong:!0})})}function VL({width:G,height:Z}){return W.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[W.jsx(y,{w:Math.min(80,G*0.3),h:2}),W.jsx("div",{style:{height:Math.min(36,Z*0.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:W.jsx(y,{w:"40%",h:2})})]})}function DL({width:G,height:Z}){let z=Math.max(2,Math.min(5,Math.floor(Z/56)));return W.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:Z*0.04,padding:8},children:[Array.from({length:z},(J,B)=>W.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[W.jsx(y,{w:60+B*17%30,h:2}),W.jsx(WG,{w:"100%",h:28,radius:4})]},B)),W.jsx(WG,{w:Math.min(120,G*0.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function KL({width:G,height:Z}){let z=Math.max(2,Math.min(4,Math.floor(G/120)));return W.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[W.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:z},(J,B)=>W.jsx("div",{style:{padding:"8px 12px",borderBottom:B===0?"2px solid var(--agd-bar-strong)":"none"},children:W.jsx(y,{w:60,h:3,strong:B===0})},B))}),W.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[W.jsx(y,{w:"80%",h:2}),W.jsx(y,{w:"65%",h:2}),W.jsx(y,{w:"75%",h:2})]})]})}function IL({width:G,height:Z}){let z=Math.min(G,Z)/2;return W.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${G} ${Z}`,fill:"none",children:[W.jsx("circle",{cx:G/2,cy:Z/2,r:z-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),W.jsx("circle",{cx:G/2,cy:Z*0.38,r:z*0.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),W.jsx("path",{d:`M${G/2-z*0.55} ${Z*0.78} C${G/2-z*0.55} ${Z*0.55} ${G/2+z*0.55} ${Z*0.55} ${G/2+z*0.55} ${Z*0.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function fL({width:G,height:Z}){return W.jsx("div",{style:{height:"100%",borderRadius:Z/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:W.jsx(y,{w:Math.max(16,G*0.5),h:2,strong:!0})})}function TL({width:G,height:Z}){return W.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:Z*0.08},children:[W.jsx(y,{w:G*0.5,h:Math.max(5,Z*0.06),strong:!0}),W.jsx(y,{w:G*0.35})]})}function NL({width:G,height:Z}){return W.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:Z*0.04,padding:G*0.04},children:[W.jsx(y,{w:G*0.3,h:4,strong:!0}),W.jsx(y,{w:G*0.7}),W.jsx(y,{w:G*0.5}),W.jsxs("div",{style:{flex:1,display:"flex",gap:G*0.03,marginTop:Z*0.06},children:[W.jsx(WG,{w:"33%",h:"100%",radius:4}),W.jsx(WG,{w:"33%",h:"100%",radius:4}),W.jsx(WG,{w:"33%",h:"100%",radius:4})]})]})}function $L({width:G,height:Z}){let z=Math.max(2,Math.min(4,Math.floor(G/140))),J=Math.max(1,Math.min(3,Math.floor(Z/120)));return W.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${z}, 1fr)`,gridTemplateRows:`repeat(${J}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:z*J},(B,Y)=>W.jsx(WG,{w:"100%",h:"100%",radius:4},Y))})}function CL({width:G,height:Z}){let z=Math.max(2,Math.floor((Z-32)/28));return W.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[W.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:W.jsx(y,{w:G*0.5,h:3,strong:!0})}),W.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:z},(J,B)=>W.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:B===0?"var(--agd-fill)":"transparent"},children:W.jsx(y,{w:`${50+B*17%35}%`,h:2,strong:B===0})},B))})]})}function xL({width:G,height:Z}){let z=Math.min(G,Z)/2;return W.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${G} ${Z}`,fill:"none",children:[W.jsx("rect",{x:"1",y:"1",width:G-2,height:Z-2,rx:z,stroke:"var(--agd-stroke)",strokeWidth:"1"}),W.jsx("circle",{cx:G-z,cy:Z/2,r:z*0.7,fill:"var(--agd-bar)"})]})}function SL({width:G,height:Z}){let z=Math.min(Z/2,20);return W.jsxs("div",{style:{height:"100%",borderRadius:z,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${z*0.6}px`,gap:6},children:[W.jsx(FZ,{size:Math.min(14,Z*0.4)}),W.jsx(y,{w:"50%",h:2})]})}function kL({width:G,height:Z}){return W.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[W.jsx(FZ,{size:Math.min(20,Z*0.5)}),W.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[W.jsx(y,{w:"60%",h:3,strong:!0}),W.jsx(y,{w:"80%",h:2})]}),W.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function bL({width:G,height:Z}){return W.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${G} ${Z}`,fill:"none",children:[W.jsx("rect",{x:"0",y:"0",width:G,height:Z,rx:Z/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),W.jsx("rect",{x:"1",y:"1",width:G*0.65,height:Z-2,rx:(Z-2)/2,fill:"var(--agd-bar)"})]})}function PL({width:G,height:Z}){let z=Math.max(3,Math.min(7,Math.floor(G/50))),J=G/(z*2);return W.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:z},(B,Y)=>{let j=30+(Y*37+17)%55;return W.jsx(WG,{w:J,h:`${j}%`,radius:2},Y)})})}function EL({width:G,height:Z}){let z=Math.min(G,Z)*0.12;return W.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[W.jsx(WG,{w:"100%",h:"100%",radius:4}),W.jsx("div",{style:{position:"absolute",width:z*2,height:z*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:W.jsx("div",{style:{width:0,height:0,borderLeft:`${z*0.6}px solid var(--agd-bar-strong)`,borderTop:`${z*0.4}px solid transparent`,borderBottom:`${z*0.4}px solid transparent`,marginLeft:z*0.15}})})]})}function hL({width:G,height:Z}){return W.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[W.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:W.jsx(y,{w:"60%",h:2})}),W.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function gL({width:G,height:Z}){let z=Math.max(2,Math.min(4,Math.floor(G/80)));return W.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:z},(J,B)=>W.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[B>0&&W.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),W.jsx(y,{w:40+B*13%20,h:2,strong:B===z-1})]},B))})}function yL({width:G,height:Z}){let z=Math.max(3,Math.min(5,Math.floor(G/40))),J=Math.min(28,Z*0.8);return W.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:z},(B,Y)=>W.jsx(WG,{w:J,h:J,radius:4,style:Y===1?{background:"var(--agd-bar)"}:void 0},Y))})}function vL({width:G}){return W.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:W.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function uL({width:G,height:Z}){let z=Math.max(2,Math.min(4,Math.floor(Z/40)));return W.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:z},(J,B)=>W.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:B===0?2:1},children:[W.jsx(y,{w:`${40+B*17%25}%`,h:3,strong:!0}),W.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:B===0?"▼":"▶"})]},B))})}function mL({width:G,height:Z}){return W.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[W.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[W.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),W.jsx(WG,{w:"100%",h:"100%",radius:4}),W.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),W.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[W.jsx(FZ,{size:5}),W.jsx(FZ,{size:5}),W.jsx(FZ,{size:5})]})]})}function dL({width:G,height:Z}){return W.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:Z*0.04},children:[W.jsx(y,{w:G*0.4,h:3,strong:!0}),W.jsx(y,{w:G*0.3,h:6,strong:!0}),W.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(z,J)=>W.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[W.jsx(FZ,{size:5}),W.jsx(y,{w:`${50+J*17%35}%`,h:2})]},J))}),W.jsx(WG,{w:G*0.7,h:Math.min(32,Z*0.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function cL({width:G,height:Z}){return W.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[W.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),W.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[W.jsx(y,{w:"90%",h:2}),W.jsx(y,{w:"75%",h:2}),W.jsx(y,{w:"60%",h:2})]}),W.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[W.jsx(FZ,{size:20}),W.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[W.jsx(y,{w:60,h:3,strong:!0}),W.jsx(y,{w:40,h:2})]})]})]})}function lL({width:G,height:Z}){return W.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:Z*0.08},children:[W.jsx(y,{w:G*0.5,h:Math.max(4,Z*0.05),strong:!0}),W.jsx(y,{w:G*0.35}),W.jsx(WG,{w:Math.min(140,G*0.25),h:Math.min(32,Z*0.15),radius:6,style:{marginTop:Z*0.04,background:"var(--agd-bar)"}})]})}function pL({width:G,height:Z}){return W.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[W.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:W.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),W.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[W.jsx(y,{w:"40%",h:3,strong:!0}),W.jsx(y,{w:"70%",h:2})]})]})}function iL({width:G,height:Z}){return W.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[W.jsx(y,{w:G*0.4,h:3,strong:!0}),W.jsx(WG,{w:60,h:Math.min(24,Z*0.6),radius:4})]})}function sL({width:G,height:Z}){return W.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:Z*0.06},children:[W.jsx(y,{w:G*0.5,h:2}),W.jsx(y,{w:G*0.4,h:Math.max(8,Z*0.18),strong:!0}),W.jsx(y,{w:G*0.3,h:2})]})}function rL({width:G,height:Z}){let z=Math.max(3,Math.min(5,Math.floor(G/100))),J=Math.min(12,Z*0.35);return W.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:z},(B,Y)=>W.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[W.jsx("div",{style:{width:J,height:J,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:Y===0?"var(--agd-bar)":"transparent",flexShrink:0}}),Y<z-1&&W.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},Y))})}function oL({width:G,height:Z}){return W.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[W.jsx(y,{w:Math.max(16,G*0.5),h:2,strong:!0}),W.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function aL({width:G,height:Z}){let J=Math.min(Z*0.7,G/7.5);return W.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:J*0.2},children:Array.from({length:5},(B,Y)=>W.jsx("svg",{width:J,height:J,viewBox:"0 0 16 16",fill:"none",children:W.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:Y<3?"var(--agd-bar)":"none"})},Y))})}function nL({width:G,height:Z}){return W.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[W.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${G} ${Z}`,fill:"none",style:{position:"absolute",inset:0},children:[W.jsx("line",{x1:0,y1:Z*0.3,x2:G,y2:Z*0.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),W.jsx("line",{x1:0,y1:Z*0.6,x2:G,y2:Z*0.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),W.jsx("line",{x1:G*0.4,y1:0,x2:G*0.6,y2:Z,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),W.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:W.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[W.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),W.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function tL({width:G,height:Z}){let z=Math.max(3,Math.min(5,Math.floor(Z/60)));return W.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[W.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:z},(J,B)=>W.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[W.jsx(FZ,{size:8}),B<z-1&&W.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},B))}),W.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:z},(J,B)=>W.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[W.jsx(y,{w:`${35+B*13%25}%`,h:3,strong:!0}),W.jsx(y,{w:`${50+B*17%30}%`,h:2})]},B))})]})}function eL({width:G,height:Z}){return W.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:Z*0.06},children:[W.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[W.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),W.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),W.jsx(y,{w:G*0.4,h:2}),W.jsx(y,{w:G*0.25,h:2})]})}function G5({width:G,height:Z}){let z=Math.max(3,Math.min(8,Math.floor(Z/20)));return W.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[W.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[W.jsx(FZ,{size:6}),W.jsx(FZ,{size:6}),W.jsx(FZ,{size:6})]}),Array.from({length:z},(J,B)=>W.jsx("div",{style:{display:"flex",gap:6,paddingLeft:B>0&&B<z-1?12:0},children:W.jsx(y,{w:`${25+B*23%50}%`,h:2,strong:B===0})},B))]})}function Z5({width:G,height:Z}){let B=Math.min((G-16)/7,(Z-40)/6);return W.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[W.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[W.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),W.jsx(y,{w:G*0.3,h:3,strong:!0}),W.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),W.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(Y,j)=>W.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:B*0.6},children:W.jsx(y,{w:B*0.5,h:2})},`h${j}`)),Array.from({length:35},(Y,j)=>W.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:B},children:W.jsx("div",{style:{width:B*0.6,height:B*0.6,borderRadius:"50%",background:j===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:W.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:j===12?1:0.3}})})},j))]})]})}function z5({width:G,height:Z}){return W.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[W.jsx(FZ,{size:Math.min(32,Z*0.55)}),W.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[W.jsx(y,{w:"50%",h:3,strong:!0}),W.jsx(y,{w:"75%",h:2})]}),W.jsx(y,{w:30,h:2})]})}function J5({width:G,height:Z}){return W.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[W.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),W.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[W.jsx(y,{w:"65%",h:4,strong:!0}),W.jsx(y,{w:"40%",h:3}),W.jsx("div",{style:{flex:1}}),W.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[W.jsx(y,{w:"30%",h:5,strong:!0}),W.jsx(WG,{w:Math.min(70,G*0.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function B5({width:G,height:Z}){let z=Math.min(48,Z*0.3);return W.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:Z*0.06},children:[W.jsx(FZ,{size:z}),W.jsx(y,{w:G*0.45,h:4,strong:!0}),W.jsx(y,{w:G*0.3,h:2}),W.jsxs("div",{style:{display:"flex",gap:G*0.08,marginTop:Z*0.04},children:[W.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[W.jsx(y,{w:20,h:3,strong:!0}),W.jsx(y,{w:28,h:2})]}),W.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[W.jsx(y,{w:20,h:3,strong:!0}),W.jsx(y,{w:28,h:2})]}),W.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[W.jsx(y,{w:20,h:3,strong:!0}),W.jsx(y,{w:28,h:2})]})]})]})}function Y5({width:G,height:Z}){let z=Math.max(G*0.6,80),J=Math.max(3,Math.floor(Z/40));return W.jsxs("div",{style:{height:"100%",display:"flex"},children:[W.jsx("div",{style:{width:G-z,background:"var(--agd-fill)",opacity:0.3}}),W.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:G*0.04},children:[W.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:Z*0.06},children:[W.jsx(y,{w:z*0.4,h:4,strong:!0}),W.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:J},(B,Y)=>W.jsx("div",{style:{padding:"6px 0"},children:W.jsx(y,{w:`${50+Y*17%35}%`,h:2,strong:Y===0})},Y))]})]})}function j5({width:G,height:Z}){return W.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[W.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[W.jsx(y,{w:"70%",h:3,strong:!0}),W.jsx(y,{w:"90%",h:2}),W.jsx(y,{w:"60%",h:2})]}),W.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function H5({width:G,height:Z}){let z=Math.min(Z*0.7,G*0.3);return W.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:G*0.08},children:[W.jsx(WG,{w:z,h:z,radius:z*0.25}),W.jsx(y,{w:G*0.45,h:Math.max(4,Z*0.2),strong:!0})]})}function X5({width:G,height:Z}){let z=Math.max(2,Math.min(5,Math.floor(Z/56)));return W.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:z},(J,B)=>W.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:B===0?2:1},children:[W.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[W.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),W.jsx(y,{w:G*(0.3+B*13%25/100),h:3,strong:!0})]}),W.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:B===0?"▼":"▶"})]},B))})}function q5({width:G,height:Z}){let z=Math.max(2,Math.min(4,Math.floor(G/120))),J=Math.max(1,Math.min(3,Math.floor(Z/120)));return W.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${z}, 1fr)`,gridTemplateRows:`repeat(${J}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:z*J},(B,Y)=>W.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:W.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[W.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),W.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},Y))})}function W5({width:G,height:Z}){let z=Math.min(G,Z);return W.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${G} ${Z}`,fill:"none",children:[W.jsx("rect",{x:"1",y:(Z-z+2)/2,width:z-2,height:z-2,rx:z*0.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),W.jsx("path",{d:`M${z*0.25} ${Z/2}l${z*0.2} ${z*0.2} ${z*0.3}-${z*0.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function U5({width:G,height:Z}){let z=Math.min(G,Z)/2-1;return W.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${G} ${Z}`,fill:"none",children:[W.jsx("circle",{cx:G/2,cy:Z/2,r:z,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),W.jsx("circle",{cx:G/2,cy:Z/2,r:z*0.45,fill:"var(--agd-bar)"})]})}function A5({width:G,height:Z}){let z=Math.max(2,Z*0.12),J=Math.min(Z*0.35,10),B=G*0.55;return W.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[W.jsx("div",{style:{width:"100%",height:z,borderRadius:z/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:W.jsx("div",{style:{width:B,height:"100%",borderRadius:z/2,background:"var(--agd-bar)"}})}),W.jsx("div",{style:{position:"absolute",left:B-J,width:J*2,height:J*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function Q5({width:G,height:Z}){let z=Math.min(36,Z*0.15),J=7,B=4,Y=Math.min((G-16)/7,(Z-z-40)/5);return W.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[W.jsxs("div",{style:{height:z,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[W.jsx(y,{w:"40%",h:2}),W.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[W.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),W.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),W.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[W.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[W.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),W.jsx(y,{w:G*0.25,h:2,strong:!0}),W.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),W.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:1,padding:"0 4px",flex:1},children:Array.from({length:28},(j,H)=>W.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:Y},children:W.jsx("div",{style:{width:Y*0.5,height:Y*0.5,borderRadius:"50%",background:H===10?"var(--agd-bar)":"transparent"},children:W.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:W.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:H===10?1:0.25}})})})},H))})]})]})}function _5({width:G,height:Z}){return W.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:Z*0.08,padding:4},children:[W.jsx("div",{style:{width:"100%",height:Z*0.2,borderRadius:4,background:"var(--agd-fill)"}}),W.jsx("div",{style:{width:"70%",height:Math.max(6,Z*0.1),borderRadius:3,background:"var(--agd-fill)"}}),W.jsx("div",{style:{width:"90%",height:Math.max(4,Z*0.06),borderRadius:3,background:"var(--agd-fill)"}}),W.jsx("div",{style:{width:"50%",height:Math.max(4,Z*0.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function L5({width:G,height:Z}){return W.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:W.jsxs("div",{style:{height:"100%",flex:1,borderRadius:Z/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${Z*0.3}px`,gap:4},children:[W.jsx(y,{w:"60%",h:2,strong:!0}),W.jsx("div",{style:{width:Math.max(6,Z*0.3),height:Math.max(6,Z*0.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function O5({width:G,height:Z}){let z=Math.min(G,Z);return W.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${G} ${Z}`,fill:"none",children:W.jsx("path",{d:`M${G/2} ${(Z-z)/2+z*0.1}l${z*0.12} ${z*0.25} ${z*0.28} ${z*0.04}-${z*0.2} ${z*0.2} ${z*0.05} ${z*0.28}-${z*0.25}-${z*0.12}-${z*0.25} ${z*0.12} ${z*0.05}-${z*0.28}-${z*0.2}-${z*0.2} ${z*0.28}-${z*0.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function M5({width:G,height:Z}){let z=Math.min(G,Z)/2-2;return W.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${G} ${Z}`,fill:"none",children:[W.jsx("circle",{cx:G/2,cy:Z/2,r:z,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),W.jsx("path",{d:`M${G/2} ${Z/2-z}a${z} ${z} 0 0 1 ${z} ${z}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function F5({width:G,height:Z}){let z=Math.min(36,Z*0.25,G*0.12),J=Math.max(1,Math.min(3,Math.floor(Z/80)));return W.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:J},(B,Y)=>W.jsxs("div",{style:{display:"flex",gap:G*0.04,alignItems:"flex-start"},children:[W.jsx(WG,{w:z,h:z,radius:z*0.25}),W.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[W.jsx(y,{w:`${40+Y*13%20}%`,h:3,strong:!0}),W.jsx(y,{w:`${60+Y*17%25}%`,h:2})]})]},Y))})}function R5({width:G,height:Z}){let z=Math.max(2,Math.min(4,Math.floor(G/120))),J=Math.min(36,Z*0.25);return W.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:Z*0.06,padding:Z*0.06},children:[W.jsx(y,{w:G*0.3,h:4,strong:!0}),W.jsx("div",{style:{display:"flex",gap:G*0.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:z},(B,Y)=>W.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[W.jsx(FZ,{size:J}),W.jsx(y,{w:G*0.12,h:3,strong:!0}),W.jsx(y,{w:G*0.08,h:2})]},Y))})]})}function w5({width:G,height:Z}){let z=Math.max(2,Math.min(3,Math.floor(Z/80)));return W.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:G*0.06,gap:Z*0.04},children:[W.jsx(y,{w:G*0.5,h:Math.max(5,Z*0.04),strong:!0}),W.jsx(y,{w:G*0.35,h:2}),W.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:Z*0.03,marginTop:Z*0.04},children:Array.from({length:z},(J,B)=>W.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[W.jsx(y,{w:Math.min(60,G*0.2),h:2}),W.jsx(WG,{w:"100%",h:Math.min(32,Z*0.1),radius:4})]},B))}),W.jsx(WG,{w:"100%",h:Math.min(36,Z*0.12),radius:6,style:{marginTop:Z*0.03,background:"var(--agd-bar)"}}),W.jsx(y,{w:G*0.4,h:2})]})}function V5({width:G,height:Z}){return W.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:G*0.04,gap:Z*0.03},children:[W.jsx(y,{w:G*0.4,h:4,strong:!0}),W.jsx(y,{w:G*0.6,h:2}),W.jsxs("div",{style:{display:"flex",gap:6,marginTop:Z*0.03},children:[W.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[W.jsx(y,{w:50,h:2}),W.jsx(WG,{w:"100%",h:Math.min(28,Z*0.1),radius:4})]}),W.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[W.jsx(y,{w:40,h:2}),W.jsx(WG,{w:"100%",h:Math.min(28,Z*0.1),radius:4})]})]}),W.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[W.jsx(y,{w:50,h:2}),W.jsx(WG,{w:"100%",h:Math.min(28,Z*0.1),radius:4})]}),W.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[W.jsx(y,{w:60,h:2}),W.jsx(WG,{w:"100%",h:"100%",radius:4})]}),W.jsx(WG,{w:Math.min(120,G*0.3),h:Math.min(30,Z*0.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var D5={navigation:WL,hero:UL,sidebar:AL,footer:QL,modal:_L,card:LL,text:OL,image:ML,table:FL,list:RL,button:wL,input:VL,form:DL,tabs:KL,avatar:IL,badge:fL,header:TL,section:NL,grid:$L,dropdown:CL,toggle:xL,search:SL,toast:kL,progress:bL,chart:PL,video:EL,tooltip:hL,breadcrumb:gL,pagination:yL,divider:vL,accordion:uL,carousel:mL,pricing:dL,testimonial:cL,cta:lL,alert:pL,banner:iL,stat:sL,stepper:rL,tag:oL,rating:aL,map:nL,timeline:tL,fileUpload:eL,codeBlock:G5,calendar:Z5,notification:z5,productCard:J5,profile:B5,drawer:Y5,popover:j5,logo:H5,faq:X5,gallery:q5,checkbox:W5,radio:U5,slider:A5,datePicker:Q5,skeleton:_5,chip:L5,icon:O5,spinner:M5,feature:F5,team:R5,login:w5,contact:V5};function K5({type:G,width:Z,height:z,text:J}){let B=D5[G];if(!B)return W.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:W.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:0.5},children:G})});return W.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:W.jsx(B,{width:Z,height:z,text:J})})}var I5=`svg[fill=none] {
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
}`,f5={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let G=document.getElementById("feedback-tool-styles-design-mode-styles");if(!G)G=document.createElement("style"),G.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(G);G.textContent=I5}var P=f5,$z=24,_B=5;function DX(G,Z,z,J,B){let Y=1/0,j=1/0,H=G.x,X=G.x+G.width,F=G.x+G.width/2,Q=G.y,R=G.y+G.height,A=G.y+G.height/2,D=!J,f=D?[H,X,F]:[...J.left?[H]:[],...J.right?[X]:[]],S=D?[Q,R,A]:[...J.top?[Q]:[],...J.bottom?[R]:[]],C=[];for(let _0 of Z)if(!z.has(_0.id))C.push(_0);if(B)C.push(...B);for(let _0 of C){let GG=_0.x,QG=_0.x+_0.width,P0=_0.x+_0.width/2,c0=_0.y,N0=_0.y+_0.height,e0=_0.y+_0.height/2;for(let i of f)for(let O0 of[GG,QG,P0]){let o0=O0-i;if(Math.abs(o0)<_B&&Math.abs(o0)<Math.abs(Y))Y=o0}for(let i of S)for(let O0 of[c0,N0,e0]){let o0=O0-i;if(Math.abs(o0)<_B&&Math.abs(o0)<Math.abs(j))j=o0}}let _=Math.abs(Y)<_B?Y:0,M=Math.abs(j)<_B?j:0,K=[],N=new Set,p=H+_,B0=X+_,b=F+_,a=Q+M,G0=R+M,n=A+M;for(let _0 of C){let GG=_0.x,QG=_0.x+_0.width,P0=_0.x+_0.width/2,c0=_0.y,N0=_0.y+_0.height,e0=_0.y+_0.height/2;for(let i of[GG,P0,QG])for(let O0 of[p,b,B0])if(Math.abs(O0-i)<0.5){let o0=`x:${Math.round(i)}`;if(!N.has(o0))N.add(o0),K.push({axis:"x",pos:i})}for(let i of[c0,e0,N0])for(let O0 of[a,n,G0])if(Math.abs(O0-i)<0.5){let o0=`y:${Math.round(i)}`;if(!N.has(o0))N.add(o0),K.push({axis:"y",pos:i})}}return{dx:_,dy:M,guides:K}}function KX(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function T5({placements:G,onChange:Z,activeComponent:z,onActiveComponentChange:J,isDarkMode:B,exiting:Y,onInteractionChange:j,className:H,passthrough:X,extraSnapRects:F,onSelectionChange:Q,deselectSignal:R,onDragMove:A,onDragEnd:D,clearSignal:f,wireframe:S}){let[C,_]=t0.useState(new Set),[M,K]=t0.useState(null),[N,p]=t0.useState(null),[B0,b]=t0.useState(null),[a,G0]=t0.useState([]),[n,_0]=t0.useState(null),[GG,QG]=t0.useState(!1),P0=t0.useRef(!1),[c0,N0]=t0.useState(new Set),e0=t0.useRef(new Map),i=t0.useRef(null),O0=t0.useRef(null),o0=t0.useRef(G);o0.current=G;let EG=t0.useRef(Q);EG.current=Q;let wZ=t0.useRef(A);wZ.current=A;let _Z=t0.useRef(D);_Z.current=D;let J6=t0.useRef(R);t0.useEffect(()=>{if(R!==J6.current)J6.current=R,_(new Set)},[R]);let dZ=t0.useRef(f);t0.useEffect(()=>{if(f!==void 0&&f!==dZ.current){dZ.current=f;let c=new Set(o0.current.map((U0)=>U0.id));if(c.size>0)N0(c),_(new Set),O0.current=null,Q0(()=>{Z([]),N0(new Set)},180)}},[f,Z]),t0.useEffect(()=>{let c=(U0)=>{let F0=U0.target;if(F0.tagName==="INPUT"||F0.tagName==="TEXTAREA"||F0.isContentEditable)return;if((U0.key==="Backspace"||U0.key==="Delete")&&C.size>0){U0.preventDefault();let R0=new Set(C);N0(R0),_(new Set),Q0(()=>{Z(o0.current.filter((ZG)=>!R0.has(ZG.id))),N0(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(U0.key)&&C.size>0){U0.preventDefault();let R0=U0.shiftKey?20:1,ZG=U0.key==="ArrowLeft"?-R0:U0.key==="ArrowRight"?R0:0,jG=U0.key==="ArrowUp"?-R0:U0.key==="ArrowDown"?R0:0;Z(G.map((a0)=>C.has(a0.id)?{...a0,x:Math.max(0,a0.x+ZG),y:Math.max(0,a0.y+jG)}:a0));return}if(U0.key==="Escape"){if(z)J(null);else if(C.size>0)_(new Set);return}};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[C,z,G,Z,J]);let B6=t0.useCallback((c)=>{if(c.button!==0)return;if(X)return;if(c.target.closest(`.${P.placement}`))return;c.preventDefault(),c.stopPropagation();let F0=window.scrollY,k0=c.clientX,R0=c.clientY;if(z){O0.current="place",j?.(!0);let ZG=!1,jG=k0,a0=R0,v0=(T)=>{jG=T.clientX,a0=T.clientY;let x=Math.abs(jG-k0),g=Math.abs(a0-R0);if(x>5||g>5)ZG=!0;if(ZG){let v=Math.min(k0,jG),t=Math.min(R0,a0),Y0=Math.abs(jG-k0),d=Math.abs(a0-R0);K({x:v,y:t,w:Y0,h:d}),b({x:T.clientX+12,y:T.clientY+12,text:`${Math.round(Y0)} × ${Math.round(d)}`})}},L0=(T)=>{window.removeEventListener("mousemove",v0),window.removeEventListener("mouseup",L0),K(null),b(null),O0.current=null,j?.(!1);let x=e[z],g,v,t,Y0;if(ZG)g=Math.min(k0,jG),v=Math.min(R0,a0)+F0,t=Math.max($z,Math.abs(jG-k0)),Y0=Math.max($z,Math.abs(a0-R0));else t=x.width,Y0=x.height,g=k0-t/2,v=R0+F0-Y0/2;g=Math.max(0,g),v=Math.max(0,v);let d={id:KX(),type:z,x:g,y:v,width:t,height:Y0,scrollY:F0,timestamp:Date.now()},H0=[...G,d];Z(H0),_(new Set([d.id])),J(null)};window.addEventListener("mousemove",v0),window.addEventListener("mouseup",L0)}else{if(!c.shiftKey)_(new Set);O0.current="select";let ZG=!1,jG=(v0)=>{let L0=Math.abs(v0.clientX-k0),T=Math.abs(v0.clientY-R0);if(L0>4||T>4)ZG=!0;if(ZG){let x=Math.min(k0,v0.clientX),g=Math.min(R0,v0.clientY);p({x,y:g,w:Math.abs(v0.clientX-k0),h:Math.abs(v0.clientY-R0)})}},a0=(v0)=>{if(window.removeEventListener("mousemove",jG),window.removeEventListener("mouseup",a0),O0.current=null,ZG){let L0=Math.min(k0,v0.clientX),T=Math.min(R0,v0.clientY)+F0,x=Math.abs(v0.clientX-k0),g=Math.abs(v0.clientY-R0),v=new Set(c.shiftKey?C:new Set);for(let t of G){let Y0=t.y-F0;if(t.x+t.width>L0&&t.x<L0+x&&t.y+t.height>T&&t.y<T+g)v.add(t.id)}_(v)}p(null)};window.addEventListener("mousemove",jG),window.addEventListener("mouseup",a0)}},[z,X,G,Z,C]),B7=t0.useCallback((c,U0)=>{if(c.button!==0)return;let F0=c.target;if(F0.closest(`.${P.handle}`)||F0.closest(`.${P.deleteButton}`))return;c.preventDefault(),c.stopPropagation();let k0;if(c.shiftKey)if(k0=new Set(C),k0.has(U0))k0.delete(U0);else k0.add(U0);else if(!C.has(U0))k0=new Set([U0]);else k0=new Set(C);if(_(k0),k0.size!==C.size||[...k0].some((H0)=>!C.has(H0)))EG.current?.(k0,c.shiftKey);let ZG=window.scrollY,jG=c.clientX,a0=c.clientY,v0=new Map;for(let H0 of G)if(k0.has(H0.id))v0.set(H0.id,{x:H0.x,y:H0.y});O0.current="move",j?.(!0);let L0=!1,T=!1,x=G,g=0,v=0,t=new Map;for(let H0 of G)if(v0.has(H0.id))t.set(H0.id,{w:H0.width,h:H0.height});let Y0=(H0)=>{let f0=H0.clientX-jG,l0=H0.clientY-a0;if(Math.abs(f0)>2||Math.abs(l0)>2)L0=!0;if(!L0)return;if(H0.altKey&&!T){T=!0;let w0=[];for(let VG of G)if(v0.has(VG.id))w0.push({...VG,id:KX(),timestamp:Date.now()});x=[...G,...w0]}let zG=1/0,X0=1/0,HG=-1/0,h0=-1/0;for(let[w0,VG]of v0){let ZZ=t.get(w0);if(!ZZ)continue;zG=Math.min(zG,VG.x+f0),X0=Math.min(X0,VG.y+l0),HG=Math.max(HG,VG.x+f0+ZZ.w),h0=Math.max(h0,VG.y+l0+ZZ.h)}let $0={x:zG,y:X0,width:HG-zG,height:h0-X0},{dx:q0,dy:XG,guides:s0}=DX($0,x,new Set(v0.keys()),void 0,F);G0(s0);let C0=f0+q0,n0=l0+XG;g=C0,v=n0,Z(x.map((w0)=>{let VG=v0.get(w0.id);if(!VG)return w0;return{...w0,x:Math.max(0,VG.x+C0),y:Math.max(0,VG.y+n0)}})),wZ.current?.(C0,n0)},d=()=>{window.removeEventListener("mousemove",Y0),window.removeEventListener("mouseup",d),O0.current=null,j?.(!1),G0([]),_Z.current?.(g,v,L0)};window.addEventListener("mousemove",Y0),window.addEventListener("mouseup",d)},[C,G,Z,j]),b7=t0.useCallback((c,U0,F0)=>{c.preventDefault(),c.stopPropagation();let k0=G.find((v)=>v.id===U0);if(!k0)return;_(new Set([U0])),O0.current="resize",j?.(!0);let{clientX:R0,clientY:ZG}=c,jG=k0.width,a0=k0.height,v0=k0.x,L0=k0.y,T={left:F0.includes("w"),right:F0.includes("e"),top:F0.includes("n"),bottom:F0.includes("s")},x=(v)=>{let t=v.clientX-R0,Y0=v.clientY-ZG,d=jG,H0=a0,f0=v0,l0=L0;if(F0.includes("e"))d=Math.max($z,jG+t);if(F0.includes("w"))d=Math.max($z,jG-t),f0=v0+jG-d;if(F0.includes("s"))H0=Math.max($z,a0+Y0);if(F0.includes("n"))H0=Math.max($z,a0-Y0),l0=L0+a0-H0;let zG={x:f0,y:l0,width:d,height:H0},{dx:X0,dy:HG,guides:h0}=DX(zG,o0.current,new Set([U0]),T,F);if(G0(h0),X0!==0){if(T.right)d+=X0;else if(T.left)f0+=X0,d-=X0}if(HG!==0){if(T.bottom)H0+=HG;else if(T.top)l0+=HG,H0-=HG}Z(o0.current.map(($0)=>$0.id===U0?{...$0,x:f0,y:l0,width:d,height:H0}:$0)),b({x:v.clientX+12,y:v.clientY+12,text:`${Math.round(d)} × ${Math.round(H0)}`})},g=()=>{window.removeEventListener("mousemove",x),window.removeEventListener("mouseup",g),b(null),O0.current=null,j?.(!1),G0([])};window.addEventListener("mousemove",x),window.addEventListener("mouseup",g)},[G,Z,j]),Y6=t0.useCallback((c)=>{O0.current=null,N0((U0)=>{let F0=new Set(U0);return F0.add(c),F0}),_((U0)=>{let F0=new Set(U0);return F0.delete(c),F0}),Q0(()=>{Z(o0.current.filter((U0)=>U0.id!==c)),N0((U0)=>{let F0=new Set(U0);return F0.delete(c),F0})},180)},[Z]),g6=new Set(["text","hero","button","badge","cta","toast","modal","card","navigation","tabs","input","search","breadcrumb","pricing","testimonial","alert","banner","tag","notification","stat","productCard"]),xZ={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},Y7=t0.useCallback((c)=>{let U0=G.find((F0)=>F0.id===c);if(!U0)return;P0.current=!!U0.text,_0(c),QG(!1)},[G]),VZ=t0.useCallback(()=>{if(!n)return;QG(!0),Q0(()=>{_0(null),QG(!1)},150)},[n]);t0.useEffect(()=>{if(Y&&n)VZ()},[Y]);let O7=t0.useCallback((c)=>{if(!n)return;Z(G.map((U0)=>U0.id===n?{...U0,text:c.trim()||void 0}:U0)),VZ()},[n,G,Z,VZ]),M7=typeof window<"u"?window.scrollY:0,Fz=["nw","ne","se","sw"],j7=S?"#f97316":"#3c82f7",E0=[{dir:"n",cls:P.edgeN,arrow:RG.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:RG.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:j7})})},{dir:"e",cls:P.edgeE,arrow:RG.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:RG.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:j7})})},{dir:"s",cls:P.edgeS,arrow:RG.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:RG.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:j7})})},{dir:"w",cls:P.edgeW,arrow:RG.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:RG.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:j7})})}];return RG.jsxs(RG.Fragment,{children:[RG.jsx("div",{ref:i,className:`${P.overlay} ${!B?P.light:""} ${z?P.placing:""} ${X?P.passthrough:""} ${Y?P.overlayExiting:""} ${S?P.wireframe:""}${H?` ${H}`:""}`,"data-feedback-toolbar":!0,onMouseDown:B6,children:G.map((c)=>{let U0=C.has(c.id),F0=A7[c.type]?.label||c.type,k0=c.y-M7;return RG.jsxs("div",{"data-design-placement":c.id,className:`${P.placement} ${U0?P.selected:""} ${c0.has(c.id)?P.exiting:""}`,style:{left:c.x,top:k0,width:c.width,height:c.height,position:"fixed"},onMouseDown:(R0)=>B7(R0,c.id),onDoubleClick:()=>Y7(c.id),children:[RG.jsx("span",{className:P.placementLabel,children:F0}),RG.jsx("span",{className:`${P.placementAnnotation} ${c.text?P.annotationVisible:""}`,children:(()=>{if(c.text)e0.current.set(c.id,c.text);return c.text||e0.current.get(c.id)||""})()}),RG.jsx("div",{className:P.placementContent,children:RG.jsx(K5,{type:c.type,width:c.width,height:c.height,text:c.text})}),RG.jsx("div",{className:P.deleteButton,onMouseDown:(R0)=>R0.stopPropagation(),onClick:()=>Y6(c.id),children:"✕"}),Fz.map((R0)=>RG.jsx("div",{className:`${P.handle} ${P[`handle${R0.charAt(0).toUpperCase()}${R0.slice(1)}`]}`,onMouseDown:(ZG)=>b7(ZG,c.id,R0)},R0)),E0.map(({dir:R0,cls:ZG,arrow:jG})=>RG.jsx("div",{className:`${P.edgeHandle} ${ZG}`,onMouseDown:(a0)=>b7(a0,c.id,R0),children:jG},R0))]},c.id)})}),n&&(()=>{let c=G.find((L0)=>L0.id===n);if(!c)return null;let U0=c.y-M7,F0=c.x+c.width/2,k0=U0-8,R0=U0+c.height+8,ZG=k0>200,jG=R0<window.innerHeight-100,a0=Math.max(160,Math.min(window.innerWidth-160,F0)),v0;if(ZG)v0={left:a0,bottom:window.innerHeight-k0};else if(jG)v0={left:a0,top:R0};else v0={left:a0,top:Math.max(80,window.innerHeight/2-80)};return RG.jsx(TB,{element:A7[c.type]?.label||c.type,placeholder:xZ[c.type]||"Label or content text",initialValue:c.text??"",submitLabel:P0.current?"Save":"Set",onSubmit:O7,onCancel:VZ,onDelete:P0.current?()=>{O7("")}:void 0,isExiting:GG,lightMode:!B,style:v0})})(),M&&RG.jsx("div",{className:P.drawBox,style:{left:M.x,top:M.y,width:M.w,height:M.h},"data-feedback-toolbar":!0}),N&&RG.jsx("div",{className:P.selectBox,style:{left:N.x,top:N.y,width:N.w,height:N.h},"data-feedback-toolbar":!0}),B0&&RG.jsx("div",{className:P.sizeIndicator,style:{left:B0.x,top:B0.y},"data-feedback-toolbar":!0,children:B0.text}),a.map((c,U0)=>RG.jsx("div",{className:P.guideLine,style:c.axis==="x"?{position:"fixed",left:c.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:c.pos-M7,right:0,height:1},"data-feedback-toolbar":!0},`${c.axis}-${c.pos}-${U0}`))]})}function N5(G){if(!G)return"";let Z=G.scrollTop>2,z=G.scrollTop+G.clientHeight<G.scrollHeight-2;return`${Z?P.fadeTop:""} ${z?P.fadeBottom:""}`}var L="currentColor",k="0.5";function $5({type:G}){switch(G){case"navigation":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:L,opacity:".4"}),q.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:L,opacity:".25"}),q.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:L,opacity:".25"})]});case"header":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:L,opacity:".35"}),q.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:L,opacity:".15"})]});case"hero":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:L,opacity:".35"}),q.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:L,opacity:".15"}),q.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:L,strokeWidth:k})]});case"section":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:L,opacity:".3"}),q.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:L,opacity:".15"}),q.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:L,opacity:".15"})]});case"sidebar":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:L,opacity:".3"}),q.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:L,opacity:".15"}),q.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:L,opacity:".15"})]});case"footer":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:L,opacity:".25"}),q.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:L,opacity:".25"}),q.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:L,opacity:".2"})]});case"modal":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:L,opacity:".3"}),q.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:L,opacity:".15"}),q.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:L,strokeWidth:k})]});case"divider":return q.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:q.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:L,strokeWidth:"0.5",opacity:".3"})});case"card":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:L,opacity:".04"}),q.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:L,opacity:".25"}),q.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:L,opacity:".12"})]});case"text":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:L,opacity:".3"}),q.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:L,opacity:".15"}),q.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:L,opacity:".15"}),q.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:L,opacity:".12"})]});case"image":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:L,strokeWidth:k}),q.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:L,strokeWidth:".3",opacity:".25"}),q.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:L,strokeWidth:".3",opacity:".25"})]});case"video":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:L,strokeWidth:k}),q.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:L,strokeWidth:k,fill:L,opacity:".15"})]});case"table":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:L,strokeWidth:k}),q.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:L,strokeWidth:".3",opacity:".25"}),q.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:L,strokeWidth:".3",opacity:".25"}),q.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:L,strokeWidth:".3",opacity:".25"}),q.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:L,strokeWidth:".3",opacity:".25"})]});case"grid":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:L,strokeWidth:k})]});case"list":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:L,opacity:".2"}),q.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:L,opacity:".2"}),q.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:L,opacity:".2"})]});case"chart":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:L,opacity:".2"}),q.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:L,opacity:".25"}),q.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:L,opacity:".3"}),q.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:L,opacity:".2"})]});case"accordion":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:L,opacity:".25"}),q.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:L,strokeWidth:k})]});case"carousel":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:L,strokeWidth:k}),q.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:L,strokeWidth:k,opacity:".35"}),q.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:L,strokeWidth:k,opacity:".35"}),q.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:L,opacity:".35"}),q.jsx("circle",{cx:"10",cy:"14",r:".6",fill:L,opacity:".15"}),q.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:L,opacity:".15"})]});case"button":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:L,opacity:".25"})]});case"input":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:L,opacity:".25"}),q.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:L,opacity:".12"})]});case"search":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:L,strokeWidth:k}),q.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:L,strokeWidth:k,opacity:".3"}),q.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:L,strokeWidth:k,opacity:".3"}),q.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:L,opacity:".12"})]});case"form":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:L,opacity:".25"}),q.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:L,opacity:".25"}),q.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:L,strokeWidth:k})]});case"tabs":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:L,opacity:".25"}),q.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:L,strokeWidth:k})]});case"dropdown":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:L,opacity:".2"}),q.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:L,strokeWidth:k,opacity:".3"}),q.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:L,strokeWidth:k,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:L,strokeWidth:k}),q.jsx("circle",{cx:"13",cy:"8",r:"2",fill:L,opacity:".3"})]});case"avatar":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:L,strokeWidth:k}),q.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:L,strokeWidth:k}),q.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:L,strokeWidth:k})]});case"badge":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:L,opacity:".25"})]});case"breadcrumb":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:L,opacity:".3"}),q.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:L,strokeWidth:k,opacity:".2"}),q.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:L,opacity:".2"}),q.jsx("path",{d:"M14 7l1 1-1 1",stroke:L,strokeWidth:k,opacity:".2"}),q.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:L,opacity:".15"})]});case"pagination":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:L,opacity:".15",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:L,strokeWidth:k})]});case"progress":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:L,opacity:".2"})]});case"toast":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:L,strokeWidth:k}),q.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:L,strokeWidth:k,opacity:".3"}),q.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:L,opacity:".25"}),q.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:L,opacity:".12"})]});case"tooltip":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:L,opacity:".25"}),q.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:L,strokeWidth:k})]});case"pricing":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:L,opacity:".25"}),q.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:L,opacity:".15"}),q.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:L,opacity:".1"}),q.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:L,opacity:".1"}),q.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:L,opacity:".2"})]});case"testimonial":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:L,strokeWidth:k}),q.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:L,opacity:".2",fontFamily:"serif",children:"“"}),q.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:L,opacity:".15"}),q.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:L,opacity:".12"}),q.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:L,strokeWidth:k,opacity:".25"}),q.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:L,opacity:".15"})]});case"cta":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:L,opacity:".3"}),q.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:L,opacity:".15"}),q.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:L,strokeWidth:k})]});case"alert":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:L,strokeWidth:k}),q.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:L,strokeWidth:k,opacity:".3"}),q.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:L,strokeWidth:"0.6",opacity:".5"}),q.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:L,opacity:".5"}),q.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:L,opacity:".2"})]});case"banner":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:L,opacity:".25"}),q.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:L,strokeWidth:k})]});case"stat":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:L,opacity:".15"}),q.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:L,opacity:".3"}),q.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:L,opacity:".12"})]});case"stepper":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("circle",{cx:"4",cy:"8",r:"2",fill:L,opacity:".2",stroke:L,strokeWidth:k}),q.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:L,strokeWidth:".4",opacity:".3"}),q.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:L,strokeWidth:k}),q.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:L,strokeWidth:".4",opacity:".3"}),q.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:L,strokeWidth:k})]});case"tag":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:L,opacity:".25"}),q.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:L,strokeWidth:k,opacity:".2"}),q.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:L,strokeWidth:k,opacity:".2"})]});case"rating":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:L,opacity:".25"}),q.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:L,opacity:".25"}),q.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:L,strokeWidth:k,opacity:".25"})]});case"map":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:L,strokeWidth:k}),q.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:L,strokeWidth:".3",opacity:".15"}),q.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:L,strokeWidth:".3",opacity:".15"}),q.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:L,opacity:".15",stroke:L,strokeWidth:k})]});case"timeline":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:L,strokeWidth:".4",opacity:".25"}),q.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:L,opacity:".2",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:L,opacity:".25"}),q.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:L,opacity:".15"}),q.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:L,opacity:".15"})]});case"fileUpload":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:L,strokeWidth:k,strokeDasharray:"2 1"}),q.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:L,strokeWidth:k,opacity:".3"}),q.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:L,opacity:".15"})]});case"codeBlock":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:L,strokeWidth:k}),q.jsx("circle",{cx:"4",cy:"4",r:".6",fill:L,opacity:".3"}),q.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:L,opacity:".3"}),q.jsx("circle",{cx:"7",cy:"4",r:".6",fill:L,opacity:".3"}),q.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:L,opacity:".2"}),q.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:L,opacity:".15"}),q.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:L,opacity:".12"})]});case"calendar":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:L,strokeWidth:k}),q.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:L,strokeWidth:".4",opacity:".25"}),q.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:L,opacity:".2"}),q.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:L,opacity:".2"}),q.jsx("circle",{cx:"7",cy:"9",r:".6",fill:L,opacity:".2"}),q.jsx("circle",{cx:"10",cy:"9",r:".6",fill:L,opacity:".2"}),q.jsx("circle",{cx:"13",cy:"9",r:".6",fill:L,opacity:".3"}),q.jsx("circle",{cx:"7",cy:"12",r:".6",fill:L,opacity:".2"}),q.jsx("circle",{cx:"10",cy:"12",r:".6",fill:L,opacity:".2"})]});case"notification":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:L,strokeWidth:k}),q.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:L,strokeWidth:k,opacity:".25"}),q.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:L,opacity:".25"}),q.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:L,opacity:".12"}),q.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:L,opacity:".25"})]});case"productCard":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:L,opacity:".04"}),q.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:L,opacity:".25"}),q.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:L,opacity:".15"}),q.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:L,strokeWidth:k})]});case"profile":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:L,opacity:".25"}),q.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:L,opacity:".12"})]});case"drawer":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:L,opacity:".25"}),q.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:L,opacity:".15"}),q.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:L,opacity:".15"}),q.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:L,strokeWidth:k,opacity:".15"})]});case"popover":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:L,opacity:".25"}),q.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:L,opacity:".15"}),q.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:L,strokeWidth:k})]});case"logo":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:L,strokeWidth:k}),q.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:L,strokeWidth:k,opacity:".3"}),q.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:L,opacity:".2"}),q.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:L,opacity:".12"})]});case"faq":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:L,opacity:".3",fontWeight:"bold",children:"?"}),q.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:L,opacity:".25"}),q.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:L,opacity:".12"}),q.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:L,opacity:".3",fontWeight:"bold",children:"?"}),q.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:L,opacity:".25"}),q.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:L,opacity:".12"})]});case"gallery":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:L,strokeWidth:k})]});case"checkbox":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:L,strokeWidth:k}),q.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:L,strokeWidth:k,opacity:".35"})]});case"radio":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:L,strokeWidth:k}),q.jsx("circle",{cx:"10",cy:"8",r:"2",fill:L,opacity:".3"})]});case"slider":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:L,opacity:".15"}),q.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:L,opacity:".25"}),q.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:L,strokeWidth:k})]});case"datePicker":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:L,opacity:".2"}),q.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:L,opacity:".12"}),q.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:L,strokeWidth:k,strokeDasharray:"2 1",opacity:".3"}),q.jsx("circle",{cx:"6",cy:"10",r:".6",fill:L,opacity:".2"}),q.jsx("circle",{cx:"10",cy:"10",r:".6",fill:L,opacity:".3"}),q.jsx("circle",{cx:"14",cy:"10",r:".6",fill:L,opacity:".2"}),q.jsx("circle",{cx:"6",cy:"13",r:".6",fill:L,opacity:".2"}),q.jsx("circle",{cx:"10",cy:"13",r:".6",fill:L,opacity:".2"})]});case"skeleton":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:L,opacity:".08"}),q.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:L,opacity:".08"}),q.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:L,opacity:".08"})]});case"chip":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:L,opacity:".08",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:L,opacity:".25"}),q.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:L,strokeWidth:k,opacity:".2"}),q.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:L,strokeWidth:k,opacity:".2"}),q.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:L,strokeWidth:k,opacity:".25"})]});case"icon":return q.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:q.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:L,strokeWidth:k,opacity:".3"})});case"spinner":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:L,strokeWidth:k,opacity:".12"}),q.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:L,strokeWidth:k,opacity:".35",strokeLinecap:"round"})]});case"feature":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:L,strokeWidth:k}),q.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:L,strokeWidth:k,opacity:".25"}),q.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:L,opacity:".25"}),q.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:L,opacity:".12"}),q.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:L,opacity:".25"}),q.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:L,opacity:".12"})]});case"team":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:L,opacity:".2"}),q.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:L,opacity:".2"}),q.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:L,strokeWidth:k,opacity:".5"}),q.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:L,opacity:".15"}),q.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:L,opacity:".1"})]});case"login":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:L,opacity:".25"}),q.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:L,opacity:".2"})]});case"contact":return q.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[q.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:L,opacity:".2"}),q.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:L,strokeWidth:k}),q.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:L,opacity:".2"})]});default:return null}}function C5({activeType:G,onSelect:Z,onDragStart:z,scrollRef:J,fadeClass:B,blankCanvas:Y}){return q.jsx("div",{ref:J,className:`${P.placeScroll} ${B||""}`,children:oX.map((j)=>q.jsxs("div",{className:P.paletteSection,children:[q.jsx("div",{className:P.paletteSectionTitle,children:j.section}),j.items.map((H)=>q.jsxs("div",{className:`${P.paletteItem} ${G===H.type?P.active:""} ${Y?P.wireframe:""}`,onClick:()=>Z(H.type),onMouseDown:(X)=>{if(X.button===0)z(H.type,X)},children:[q.jsx("div",{className:P.paletteItemIcon,children:q.jsx($5,{type:H.type})}),q.jsx("span",{className:P.paletteItemLabel,children:H.label})]},H.type))]},j.section))})}function x5({value:G,suffix:Z}){let[z,J]=PG.useState(null),[B,Y]=PG.useState(Z),[j,H]=PG.useState("up"),X=PG.useRef(G),F=PG.useRef(Z),Q=PG.useRef(),R=z!==null&&B!==Z;if(PG.useEffect(()=>{if(G!==X.current){if(G===0){X.current=G,F.current=Z,J(null);return}H(G>X.current?"up":"down"),J(X.current),Y(F.current),X.current=G,F.current=Z,clearTimeout(Q.current),Q.current=Q0(()=>J(null),250)}else F.current=Z},[G,Z]),z===null)return q.jsxs(q.Fragment,{children:[G,Z?` ${Z}`:""]});if(R)return q.jsxs("span",{className:P.rollingWrap,children:[q.jsxs("span",{style:{visibility:"hidden"},children:[G," ",Z]}),q.jsxs("span",{className:`${P.rollingNum} ${j==="up"?P.exitUp:P.exitDown}`,children:[z," ",B]},`o${z}-${G}`),q.jsxs("span",{className:`${P.rollingNum} ${j==="up"?P.enterUp:P.enterDown}`,children:[G," ",Z]},`n${G}`)]});return q.jsxs(q.Fragment,{children:[q.jsxs("span",{className:P.rollingWrap,children:[q.jsx("span",{style:{visibility:"hidden"},children:G}),q.jsx("span",{className:`${P.rollingNum} ${j==="up"?P.exitUp:P.exitDown}`,children:z},`o${z}-${G}`),q.jsx("span",{className:`${P.rollingNum} ${j==="up"?P.enterUp:P.enterDown}`,children:G},`n${G}`)]}),Z?` ${Z}`:""]})}function S5({activeType:G,onSelect:Z,isDarkMode:z,sectionCount:J,onDetectSections:B,visible:Y,onExited:j,placementCount:H,onClearPlacements:X,onDragStart:F,blankCanvas:Q,onBlankCanvasChange:R,wireframePurpose:A,onWireframePurposeChange:D,Tooltip:f}){let[S,C]=PG.useState(!1),[_,M]=PG.useState("exit"),[K,N]=PG.useState(!1),[p,B0]=PG.useState(!0),b=PG.useRef(0),a=PG.useRef(""),G0=PG.useRef(0),n=PG.useRef(),_0=PG.useRef(null),[GG,QG]=PG.useState("");PG.useEffect(()=>{if(Y)C(!0),clearTimeout(n.current),cancelAnimationFrame(G0.current),G0.current=Sz(()=>{G0.current=Sz(()=>{M("enter")})});else cancelAnimationFrame(G0.current),M("exit"),clearTimeout(n.current),n.current=Q0(()=>{C(!1),j?.()},200);return()=>cancelAnimationFrame(G0.current)},[Y]);let P0=H>0||J>0,c0=H+J;if(c0>0)b.current=c0,a.current=Q?c0===1?"Component":"Components":c0===1?"Change":"Changes";if(PG.useEffect(()=>{if(P0)if(!K)B0(!0),N(!0),Sz(()=>{Sz(()=>{B0(!1)})});else B0(!1);else{B0(!0);let e0=Q0(()=>N(!1),300);return()=>clearTimeout(e0)}},[P0]),PG.useEffect(()=>{if(!S)return;let e0=_0.current;if(!e0)return;let i=()=>QG(N5(e0));i(),e0.addEventListener("scroll",i,{passive:!0});let O0=new ResizeObserver(i);return O0.observe(e0),()=>{e0.removeEventListener("scroll",i),O0.disconnect()}},[S]),!S)return null;let N0=[];if(H>0)N0.push("placed");if(J>0)N0.push("captured");return q.jsxs("div",{className:`${P.palette} ${P[_]} ${!z?P.light:""}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:(e0)=>e0.stopPropagation(),onMouseDown:(e0)=>e0.stopPropagation(),onTransitionEnd:(e0)=>{if(e0.target!==e0.currentTarget)return;if(!Y)clearTimeout(n.current),C(!1),M("exit"),j?.()},children:[q.jsxs("div",{className:P.paletteHeader,children:[q.jsx("div",{className:P.paletteHeaderTitle,children:"Layout Mode"}),q.jsxs("div",{className:P.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",q.jsx("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),q.jsxs("div",{className:`${P.canvasToggle} ${Q?P.active:""}`,onClick:()=>R(!Q),children:[q.jsx("span",{className:P.canvasToggleIcon,children:q.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[q.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),q.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),q.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),q.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),q.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),q.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),q.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),q.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),q.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),q.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),q.jsx("span",{className:P.canvasToggleLabel,children:"Wireframe New Page"})]}),q.jsx("div",{className:`${P.wireframePurposeWrap} ${!Q?P.collapsed:""}`,children:q.jsx("div",{className:P.wireframePurposeInner,children:q.jsx("textarea",{className:P.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:A,onChange:(e0)=>D(e0.target.value),rows:2})})}),q.jsx(C5,{activeType:G,onSelect:Z,onDragStart:F,scrollRef:_0,fadeClass:GG,blankCanvas:Q}),K&&q.jsx("div",{className:`${P.paletteFooterWrap} ${p?P.footerHidden:""}`,children:q.jsx("div",{className:P.paletteFooterInner,children:q.jsx("div",{className:P.paletteFooterInnerContent,children:q.jsxs("div",{className:P.paletteFooter,children:[q.jsx("span",{className:P.paletteFooterCount,children:q.jsx(x5,{value:b.current,suffix:a.current})}),q.jsx("button",{className:P.paletteFooterClear,onClick:X,children:"Clear"})]})})})})]})}function Ez(G){if(G.parentElement)return G.parentElement;let Z=G.getRootNode();if(Z instanceof ShadowRoot)return Z.host;return null}function MZ(G,Z){let z=G;while(z){if(z.matches(Z))return z;z=Ez(z)}return null}function k5(G,Z=4){let z=[],J=G,B=0;while(J&&B<Z){let Y=J.tagName.toLowerCase();if(Y==="html"||Y==="body")break;let j=Y;if(J.id)j=`#${J.id}`;else if(J.className&&typeof J.className==="string"){let X=J.className.split(/\s+/).find((F)=>F.length>2&&!F.match(/^[a-z]{1,2}$/)&&!F.match(/[A-Z0-9]{5,}/));if(X)j=`.${X.split("_")[0]}`}let H=Ez(J);if(!J.parentElement&&H)j=`⟨shadow⟩ ${j}`;z.unshift(j),J=H,B++}return z.join(" > ")}function kz(G){let Z=k5(G);if(G.dataset.element)return{name:G.dataset.element,path:Z};let z=G.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(z)){let J=MZ(G,"svg");if(J){let B=Ez(J);if(B instanceof HTMLElement)return{name:`graphic in ${kz(B).name}`,path:Z}}return{name:"graphic element",path:Z}}if(z==="svg"){let J=Ez(G);if(J?.tagName.toLowerCase()==="button"){let B=J.textContent?.trim();return{name:B?`icon in "${B}" button`:"button icon",path:Z}}return{name:"icon",path:Z}}if(z==="button"){let J=G.textContent?.trim(),B=G.getAttribute("aria-label");if(B)return{name:`button [${B}]`,path:Z};return{name:J?`button "${J.slice(0,25)}"`:"button",path:Z}}if(z==="a"){let J=G.textContent?.trim(),B=G.getAttribute("href");if(J)return{name:`link "${J.slice(0,25)}"`,path:Z};if(B)return{name:`link to ${B.slice(0,30)}`,path:Z};return{name:"link",path:Z}}if(z==="input"){let J=G.getAttribute("type")||"text",B=G.getAttribute("placeholder"),Y=G.getAttribute("name");if(B)return{name:`input "${B}"`,path:Z};if(Y)return{name:`input [${Y}]`,path:Z};return{name:`${J} input`,path:Z}}if(["h1","h2","h3","h4","h5","h6"].includes(z)){let J=G.textContent?.trim();return{name:J?`${z} "${J.slice(0,35)}"`:z,path:Z}}if(z==="p"){let J=G.textContent?.trim();if(J)return{name:`paragraph: "${J.slice(0,40)}${J.length>40?"...":""}"`,path:Z};return{name:"paragraph",path:Z}}if(z==="span"||z==="label"){let J=G.textContent?.trim();if(J&&J.length<40)return{name:`"${J}"`,path:Z};return{name:z,path:Z}}if(z==="li"){let J=G.textContent?.trim();if(J&&J.length<40)return{name:`list item: "${J.slice(0,35)}"`,path:Z};return{name:"list item",path:Z}}if(z==="blockquote")return{name:"blockquote",path:Z};if(z==="code"){let J=G.textContent?.trim();if(J&&J.length<30)return{name:`code: \`${J}\``,path:Z};return{name:"code",path:Z}}if(z==="pre")return{name:"code block",path:Z};if(z==="img"){let J=G.getAttribute("alt");return{name:J?`image "${J.slice(0,30)}"`:"image",path:Z}}if(z==="video")return{name:"video",path:Z};if(["div","section","article","nav","header","footer","aside","main"].includes(z)){let J=G.className,B=G.getAttribute("role"),Y=G.getAttribute("aria-label");if(Y)return{name:`${z} [${Y}]`,path:Z};if(B)return{name:`${B}`,path:Z};if(typeof J==="string"&&J){let j=J.split(/[\s_-]+/).map((H)=>H.replace(/[A-Z0-9]{5,}.*$/,"")).filter((H)=>H.length>2&&!/^[a-z]{1,2}$/.test(H)).slice(0,2);if(j.length>0)return{name:j.join(" "),path:Z}}return{name:z==="div"?"container":z,path:Z}}return{name:z,path:Z}}function vJ(G){let Z=[],z=G.textContent?.trim();if(z&&z.length<100)Z.push(z);let J=G.previousElementSibling;if(J){let Y=J.textContent?.trim();if(Y&&Y.length<50)Z.unshift(`[before: "${Y.slice(0,40)}"]`)}let B=G.nextElementSibling;if(B){let Y=B.textContent?.trim();if(Y&&Y.length<50)Z.push(`[after: "${Y.slice(0,40)}"]`)}return Z.join(" ")}function LB(G){let Z=Ez(G);if(!Z)return"";let B=(G.getRootNode()instanceof ShadowRoot&&G.parentElement?Array.from(G.parentElement.children):Array.from(Z.children)).filter((Q)=>Q!==G&&Q instanceof HTMLElement);if(B.length===0)return"";let Y=B.slice(0,4).map((Q)=>{let R=Q.tagName.toLowerCase(),A=Q.className,D="";if(typeof A==="string"&&A){let f=A.split(/\s+/).map((S)=>S.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find((S)=>S.length>2&&!/^[a-z]{1,2}$/.test(S));if(f)D=`.${f}`}if(R==="button"||R==="a"){let f=Q.textContent?.trim().slice(0,15);if(f)return`${R}${D} "${f}"`}return`${R}${D}`}),H=Z.tagName.toLowerCase();if(typeof Z.className==="string"&&Z.className){let Q=Z.className.split(/\s+/).map((R)=>R.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find((R)=>R.length>2&&!/^[a-z]{1,2}$/.test(R));if(Q)H=`.${Q}`}let X=Z.children.length,F=X>Y.length+1?` (${X} total in ${H})`:"";return Y.join(", ")+F}function uJ(G){let Z=G.className;if(typeof Z!=="string"||!Z)return"";return Z.split(/\s+/).filter((J)=>J.length>0).map((J)=>{let B=J.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return B?B[1]:J}).filter((J,B,Y)=>Y.indexOf(J)===B).join(", ")}var aX=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),b5=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),P5=new Set(["input","textarea","select"]),E5=new Set(["img","video","canvas","svg"]),h5=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function OB(G){if(typeof window>"u")return{};let Z=window.getComputedStyle(G),z={},J=G.tagName.toLowerCase(),B;if(b5.has(J))B=["color","fontSize","fontWeight","fontFamily","lineHeight"];else if(J==="button"||J==="a"&&G.getAttribute("role")==="button")B=["backgroundColor","color","padding","borderRadius","fontSize"];else if(P5.has(J))B=["backgroundColor","color","padding","borderRadius","fontSize"];else if(E5.has(J))B=["width","height","objectFit","borderRadius"];else if(h5.has(J))B=["display","padding","margin","gap","backgroundColor"];else B=["color","fontSize","margin","padding","backgroundColor"];for(let Y of B){let j=Y.replace(/([A-Z])/g,"-$1").toLowerCase(),H=Z.getPropertyValue(j);if(H&&!aX.has(H))z[Y]=H}return z}var g5=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function MB(G){if(typeof window>"u")return"";let Z=window.getComputedStyle(G),z=[];for(let J of g5){let B=J.replace(/([A-Z])/g,"-$1").toLowerCase(),Y=Z.getPropertyValue(B);if(Y&&!aX.has(Y))z.push(`${B}: ${Y}`)}return z.join("; ")}function y5(G){if(!G)return;let Z={},z=G.split(";").map((J)=>J.trim()).filter(Boolean);for(let J of z){let B=J.indexOf(":");if(B>0){let Y=J.slice(0,B).trim(),j=J.slice(B+1).trim();if(Y&&j)Z[Y]=j}}return Object.keys(Z).length>0?Z:void 0}function FB(G){let Z=[],z=G.getAttribute("role"),J=G.getAttribute("aria-label"),B=G.getAttribute("aria-describedby"),Y=G.getAttribute("tabindex"),j=G.getAttribute("aria-hidden");if(z)Z.push(`role="${z}"`);if(J)Z.push(`aria-label="${J}"`);if(B)Z.push(`aria-describedby="${B}"`);if(Y)Z.push(`tabindex=${Y}`);if(j==="true")Z.push("aria-hidden");if(G.matches("a, button, input, select, textarea, [tabindex]"))Z.push("focusable");return Z.join(", ")}function RB(G){let Z=[],z=G;while(z&&z.tagName.toLowerCase()!=="html"){let J=z.tagName.toLowerCase(),B=J;if(z.id)B=`${J}#${z.id}`;else if(z.className&&typeof z.className==="string"){let j=z.className.split(/\s+/).map((H)=>H.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find((H)=>H.length>2);if(j)B=`${J}.${j}`}let Y=Ez(z);if(!z.parentElement&&Y)B=`⟨shadow⟩ ${B}`;Z.unshift(B),z=Y}return Z.join(" > ")}var v5=new Set(["nav","header","main","section","article","footer","aside"]),yY={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},IX={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},u5=new Set(["script","style","noscript","link","meta"]),m5=40;function nX(G){let Z=G;while(Z&&Z!==document.body&&Z!==document.documentElement){let z=window.getComputedStyle(Z).position;if(z==="fixed"||z==="sticky")return!0;Z=Z.parentElement}return!1}function a6(G){let Z=G.tagName.toLowerCase();if(["nav","header","footer","main"].includes(Z)){if(document.querySelectorAll(Z).length===1)return Z}if(G.id)return`#${CSS.escape(G.id)}`;if(G.className&&typeof G.className==="string"){let B=G.className.split(/\s+/).filter((Y)=>Y.length>0).find((Y)=>Y.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(Y)&&!/^[a-z]{1,2}$/.test(Y));if(B){let Y=`${Z}.${CSS.escape(B)}`;if(document.querySelectorAll(Y).length===1)return Y}}let z=G.parentElement;if(z){let B=Array.from(z.children).indexOf(G)+1;return`${z===document.body?"body":a6(z)} > ${Z}:nth-child(${B})`}return Z}function NB(G){let Z=G.tagName.toLowerCase(),z=G.getAttribute("aria-label");if(z)return z;let J=G.getAttribute("role");if(J&&yY[J])return yY[J];if(IX[Z])return IX[Z];let B=G.querySelector("h1, h2, h3, h4, h5, h6");if(B){let j=B.textContent?.trim();if(j&&j.length<=50)return j;if(j)return j.slice(0,47)+"..."}let{name:Y}=kz(G);return Y.charAt(0).toUpperCase()+Y.slice(1)}function tX(G){let Z=G.className;if(typeof Z!=="string"||!Z)return null;return Z.split(/\s+/).map((J)=>J.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find((J)=>J.length>2&&!/^[a-z]{1,2}$/.test(J))||null}function eX(G){let Z=G.textContent?.trim();if(!Z)return null;let z=Z.replace(/\s+/g," ");if(z.length<=30)return z;return z.slice(0,30)+"…"}function d5(){let G=document.querySelector("main")||document.body,Z=Array.from(G.children),z=Z;if(G!==document.body&&Z.length<3)z=Array.from(document.body.children);let J=[];return z.forEach((B,Y)=>{if(!(B instanceof HTMLElement))return;let j=B.tagName.toLowerCase();if(u5.has(j))return;if(B.hasAttribute("data-feedback-toolbar"))return;if(B.closest("[data-feedback-toolbar]"))return;let H=window.getComputedStyle(B);if(H.display==="none"||H.visibility==="hidden")return;let X=B.getBoundingClientRect();if(X.height<m5)return;let F=v5.has(j),Q=B.getAttribute("role")&&yY[B.getAttribute("role")],R=j==="div"&&X.height>=60;if(!F&&!Q&&!R)return;let A=window.scrollY,D=nX(B),f={x:X.x,y:D?X.y:X.y+A,width:X.width,height:X.height};J.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:NB(B),tagName:j,selector:a6(B),role:B.getAttribute("role"),className:tX(B),textSnippet:eX(B),originalRect:f,currentRect:{...f},originalIndex:Y,isFixed:D})}),J}function c5(G){let Z=window.scrollY,z=G.getBoundingClientRect(),J=nX(G),B={x:z.x,y:J?z.y:z.y+Z,width:z.width,height:z.height},Y=G.parentElement,j=0;if(Y)j=Array.from(Y.children).indexOf(G);return{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:NB(G),tagName:G.tagName.toLowerCase(),selector:a6(G),role:G.getAttribute("role"),className:tX(G),textSnippet:eX(G),originalRect:B,currentRect:{...B},originalIndex:j,isFixed:J}}var fX={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},TX=["nw","n","ne","e","se","s","sw","w"],wB=24,NX=16,VB=5;function $X(G,Z,z,J){let B=1/0,Y=1/0,j=G.x,H=G.x+G.width,X=G.x+G.width/2,F=G.y,Q=G.y+G.height,R=G.y+G.height/2,A=[];for(let b of Z)if(!z.has(b.id))A.push(b.currentRect);if(J)A.push(...J);for(let b of A){let a=b.x,G0=b.x+b.width,n=b.x+b.width/2,_0=b.y,GG=b.y+b.height,QG=b.y+b.height/2;for(let P0 of[j,H,X])for(let c0 of[a,G0,n]){let N0=c0-P0;if(Math.abs(N0)<VB&&Math.abs(N0)<Math.abs(B))B=N0}for(let P0 of[F,Q,R])for(let c0 of[_0,GG,QG]){let N0=c0-P0;if(Math.abs(N0)<VB&&Math.abs(N0)<Math.abs(Y))Y=N0}}let D=Math.abs(B)<VB?B:0,f=Math.abs(Y)<VB?Y:0,S=[],C=new Set,_=j+D,M=H+D,K=X+D,N=F+f,p=Q+f,B0=R+f;for(let b of A){let a=b.x,G0=b.x+b.width,n=b.x+b.width/2,_0=b.y,GG=b.y+b.height,QG=b.y+b.height/2;for(let P0 of[a,n,G0])for(let c0 of[_,K,M])if(Math.abs(c0-P0)<0.5){let N0=`x:${Math.round(P0)}`;if(!C.has(N0))C.add(N0),S.push({axis:"x",pos:P0})}for(let P0 of[_0,QG,GG])for(let c0 of[N,B0,p])if(Math.abs(c0-P0)<0.5){let N0=`y:${Math.round(P0)}`;if(!C.has(N0))C.add(N0),S.push({axis:"y",pos:P0})}}return{dx:D,dy:f,guides:S}}var l5=new Set(["script","style","noscript","link","meta","br","hr"]);function CX(G){let Z=G;while(Z&&Z!==document.body&&Z!==document.documentElement){if(Z.closest("[data-feedback-toolbar]"))return null;if(l5.has(Z.tagName.toLowerCase())){Z=Z.parentElement;continue}let z=Z.getBoundingClientRect();if(z.width>=NX&&z.height>=NX)return Z;Z=Z.parentElement}return null}function p5({rearrangeState:G,onChange:Z,isDarkMode:z,exiting:J,className:B,blankCanvas:Y,extraSnapRects:j,onSelectionChange:H,deselectSignal:X,onDragMove:F,onDragEnd:Q,clearSignal:R}){let{sections:A}=G,D=D0.useRef(G);D.current=G;let[f,S]=D0.useState(new Set),[C,_]=D0.useState(!1),M=D0.useRef(R);D0.useEffect(()=>{if(R!==void 0&&R!==M.current){if(M.current=R,A.length>0)_(!0)}},[R,A.length]);let K=D0.useRef(X);D0.useEffect(()=>{if(X!==K.current)K.current=X,S(new Set)},[X]);let[N,p]=D0.useState(null),[B0,b]=D0.useState(!1),a=D0.useRef(!1),G0=D0.useCallback((T)=>{let x=A.find((g)=>g.id===T);if(!x)return;a.current=!!x.note,p(T),b(!1)},[A]),n=D0.useCallback(()=>{if(!N)return;b(!0),Q0(()=>{p(null),b(!1)},150)},[N]),_0=D0.useCallback((T)=>{if(!N)return;Z({...G,sections:A.map((x)=>x.id===N?{...x,note:T.trim()||void 0}:x)}),n()},[N,A,G,Z,n]);D0.useEffect(()=>{if(J&&N)n()},[J]);let[GG,QG]=D0.useState(new Set),P0=D0.useRef(new Map),[c0,N0]=D0.useState(null),[e0,i]=D0.useState(null),[O0,o0]=D0.useState([]),[EG,wZ]=D0.useState(0),_Z=D0.useRef(null),J6=D0.useRef(new Set),dZ=D0.useRef(new Map),[B6,B7]=D0.useState(new Map),[b7,Y6]=D0.useState(new Map),g6=D0.useRef(new Set),xZ=D0.useRef(new Map),Y7=D0.useRef(H);Y7.current=H;let VZ=D0.useRef(F);VZ.current=F;let O7=D0.useRef(Q);O7.current=Q,D0.useEffect(()=>{if(Y)S(new Set)},[Y]);let[M7,Fz]=D0.useState(()=>!G.sections.some((T)=>{let{originalRect:x,currentRect:g}=T;return Math.abs(x.x-g.x)>1||Math.abs(x.y-g.y)>1||Math.abs(x.width-g.width)>1||Math.abs(x.height-g.height)>1}));D0.useEffect(()=>{if(!M7){let T=Q0(()=>Fz(!0),380);return()=>clearTimeout(T)}},[]);let j7=D0.useRef(new Set);D0.useEffect(()=>{j7.current=new Set(A.map((T)=>T.selector))},[A]),D0.useEffect(()=>{let T=()=>wZ(window.scrollY);return T(),window.addEventListener("scroll",T,{passive:!0}),window.addEventListener("resize",T,{passive:!0}),()=>{window.removeEventListener("scroll",T),window.removeEventListener("resize",T)}},[]),D0.useEffect(()=>{let T=(x)=>{if(_Z.current){N0(null);return}let g=document.elementFromPoint(x.clientX,x.clientY);if(!g){N0(null);return}if(g.closest("[data-feedback-toolbar]")){N0(null);return}if(g.closest("[data-design-placement]")){N0(null);return}if(g.closest("[data-annotation-popup]")){N0(null);return}let v=CX(g);if(!v){N0(null);return}for(let Y0 of j7.current)try{let d=document.querySelector(Y0);if(d&&(d===v||v.contains(d))){N0(null);return}}catch{}let t=v.getBoundingClientRect();N0({x:t.x,y:t.y,w:t.width,h:t.height})};return document.addEventListener("mousemove",T,{passive:!0}),()=>document.removeEventListener("mousemove",T)},[A]),D0.useEffect(()=>{let T=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=T}},[]),D0.useEffect(()=>{let T=(x)=>{if(_Z.current)return;if(x.button!==0)return;let g=x.target;if(!g||g.closest("[data-feedback-toolbar]"))return;if(g.closest("[data-design-placement]"))return;if(g.closest("[data-annotation-popup]"))return;let v=CX(g),t=!1;if(v)for(let d of j7.current)try{let H0=document.querySelector(d);if(H0&&(H0===v||v.contains(H0))){t=!0;break}}catch{}let Y0=!!(x.shiftKey||x.metaKey||x.ctrlKey);if(v&&!t){x.preventDefault(),x.stopPropagation();let d=c5(v),H0=[...A,d],f0=[...G.originalOrder,d.id];Z({...G,sections:H0,originalOrder:f0});let l0=new Set([d.id]);S(l0),Y7.current?.(l0,Y0),N0(null);let{clientX:zG,clientY:X0}=x,HG={x:d.currentRect.x,y:d.currentRect.y},h0=d.originalRect,$0=!1,q0=0,XG=0;_Z.current="move";let s0=(n0)=>{let w0=n0.clientX-zG,VG=n0.clientY-X0;if(!$0&&(Math.abs(w0)>2||Math.abs(VG)>2))$0=!0;if(!$0)return;let ZZ={x:HG.x+w0,y:HG.y+VG,width:d.currentRect.width,height:d.currentRect.height},cZ=$X(ZZ,H0,new Set([d.id]),j);o0(cZ.guides);let F7=w0+cZ.dx,DZ=VG+cZ.dy;q0=F7,XG=DZ;let P7=document.querySelector(`[data-rearrange-section="${d.id}"]`);if(P7)P7.style.transform=`translate(${F7}px, ${DZ}px)`;B7(new Map([[d.id,{x:HG.x+F7,y:HG.y+DZ,width:d.currentRect.width,height:d.currentRect.height}]])),VZ.current?.(F7,DZ)},C0=()=>{window.removeEventListener("mousemove",s0),window.removeEventListener("mouseup",C0),_Z.current=null,o0([]),B7(new Map);let n0=document.querySelector(`[data-rearrange-section="${d.id}"]`);if(n0)n0.style.transform="";if($0)Z({...G,sections:H0.map((w0)=>w0.id===d.id?{...w0,currentRect:{...w0.currentRect,x:Math.max(0,HG.x+q0),y:Math.max(0,HG.y+XG)}}:w0),originalOrder:f0});O7.current?.(q0,XG,$0)};window.addEventListener("mousemove",s0),window.addEventListener("mouseup",C0)}else if(t&&v){x.preventDefault();for(let d of A)try{let H0=document.querySelector(d.selector);if(H0&&H0===v){let f0=new Set([d.id]);S(f0),Y7.current?.(f0,Y0);return}}catch{}if(!Y0)S(new Set),Y7.current?.(new Set,!1)}else if(!Y0)S(new Set),Y7.current?.(new Set,!1)};return document.addEventListener("mousedown",T,!0),()=>document.removeEventListener("mousedown",T,!0)},[A,G,Z]),D0.useEffect(()=>{let T=(x)=>{let g=x.target;if(g.tagName==="INPUT"||g.tagName==="TEXTAREA"||g.isContentEditable)return;if((x.key==="Backspace"||x.key==="Delete")&&f.size>0){x.preventDefault();let v=new Set(f);QG((t)=>{let Y0=new Set(t);for(let d of v)Y0.add(d);return Y0}),S(new Set),Q0(()=>{let t=D.current;Z({...t,sections:t.sections.filter((Y0)=>!v.has(Y0.id)),originalOrder:t.originalOrder.filter((Y0)=>!v.has(Y0))}),QG((Y0)=>{let d=new Set(Y0);for(let H0 of v)d.delete(H0);return d})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(x.key)&&f.size>0){x.preventDefault();let v=x.shiftKey?20:1,t=x.key==="ArrowLeft"?-v:x.key==="ArrowRight"?v:0,Y0=x.key==="ArrowUp"?-v:x.key==="ArrowDown"?v:0;Z({...G,sections:A.map((d)=>f.has(d.id)?{...d,currentRect:{...d.currentRect,x:Math.max(0,d.currentRect.x+t),y:Math.max(0,d.currentRect.y+Y0)}}:d)});return}if(x.key==="Escape"&&f.size>0)S(new Set)};return document.addEventListener("keydown",T),()=>document.removeEventListener("keydown",T)},[f,A,G,Z]);let E0=D0.useCallback((T,x)=>{if(T.button!==0)return;let g=T.target;if(g.closest(`.${P.handle}`)||g.closest(`.${P.deleteButton}`))return;T.preventDefault(),T.stopPropagation();let v;if(T.shiftKey||T.metaKey||T.ctrlKey)if(v=new Set(f),v.has(x))v.delete(x);else v.add(x);else if(!f.has(x))v=new Set([x]);else v=new Set(f);if(S(v),v.size!==f.size||[...v].some(($0)=>!f.has($0)))Y7.current?.(v,!!(T.shiftKey||T.metaKey||T.ctrlKey));let{clientX:Y0,clientY:d}=T,H0=new Map;for(let $0 of A)if(v.has($0.id))H0.set($0.id,{x:$0.currentRect.x,y:$0.currentRect.y});_Z.current="move";let f0=!1,l0=0,zG=0,X0=new Map;for(let $0 of A)if(v.has($0.id)){let q0=document.querySelector(`[data-rearrange-section="${$0.id}"]`);X0.set($0.id,{outlineEl:q0,curW:$0.currentRect.width,curH:$0.currentRect.height})}let HG=($0)=>{let q0=$0.clientX-Y0,XG=$0.clientY-d;if(q0===0&&XG===0)return;f0=!0;let s0=1/0,C0=1/0,n0=-1/0,w0=-1/0;for(let[DZ,{curW:P7,curH:t8}]of X0){let vG=H0.get(DZ);if(!vG)continue;let E7=vG.x+q0,e8=vG.y+XG;s0=Math.min(s0,E7),C0=Math.min(C0,e8),n0=Math.max(n0,E7+P7),w0=Math.max(w0,e8+t8)}let VG=$X({x:s0,y:C0,width:n0-s0,height:w0-C0},A,v,j),ZZ=q0+VG.dx,cZ=XG+VG.dy;l0=ZZ,zG=cZ,o0(VG.guides);for(let[,{outlineEl:DZ}]of X0)if(DZ)DZ.style.transform=`translate(${ZZ}px, ${cZ}px)`;let F7=new Map;for(let[DZ,{curW:P7,curH:t8}]of X0){let vG=H0.get(DZ);if(vG){let E7={x:Math.max(0,vG.x+ZZ),y:Math.max(0,vG.y+cZ),width:P7,height:t8};F7.set(DZ,E7)}}B7(F7),VZ.current?.(ZZ,cZ)},h0=($0)=>{window.removeEventListener("mousemove",HG),window.removeEventListener("mouseup",h0),_Z.current=null,o0([]),B7(new Map);for(let[,{outlineEl:q0}]of X0)if(q0)q0.style.transform="";if(f0){let q0=$0.clientX-Y0,XG=$0.clientY-d;if(Math.abs(q0)<5&&Math.abs(XG)<5)Z({...G,sections:A.map((s0)=>{let C0=H0.get(s0.id);if(!C0)return s0;return{...s0,currentRect:{...s0.currentRect,x:C0.x,y:C0.y}}})});else{Z({...G,sections:A.map((s0)=>{let C0=H0.get(s0.id);if(!C0)return s0;return{...s0,currentRect:{...s0.currentRect,x:Math.max(0,C0.x+l0),y:Math.max(0,C0.y+zG)}}})}),O7.current?.(l0,zG,!0);return}}O7.current?.(0,0,!1)};window.addEventListener("mousemove",HG),window.addEventListener("mouseup",h0)},[f,A,G,Z]),c=D0.useCallback((T,x,g)=>{T.preventDefault(),T.stopPropagation();let v=A.find((h0)=>h0.id===x);if(!v)return;S(new Set([x])),_Z.current="resize";let{clientX:t,clientY:Y0}=T,d={...v.currentRect},H0=v.originalRect,f0=d.width/d.height,l0={...d},zG=document.querySelector(`[data-rearrange-section="${x}"]`),X0=(h0)=>{let $0=h0.clientX-t,q0=h0.clientY-Y0,XG=d.x,s0=d.y,C0=d.width,n0=d.height;if(g.includes("e"))C0=Math.max(wB,d.width+$0);if(g.includes("w"))C0=Math.max(wB,d.width-$0),XG=d.x+d.width-C0;if(g.includes("s"))n0=Math.max(wB,d.height+q0);if(g.includes("n"))n0=Math.max(wB,d.height-q0),s0=d.y+d.height-n0;if(h0.shiftKey)if(g.length===2){let VG=Math.abs(C0-d.width),ZZ=Math.abs(n0-d.height);if(VG>ZZ)n0=C0/f0;else C0=n0*f0;if(g.includes("w"))XG=d.x+d.width-C0;if(g.includes("n"))s0=d.y+d.height-n0}else{if(g==="e"||g==="w")n0=C0/f0;else C0=n0*f0;if(g==="w")XG=d.x+d.width-C0;if(g==="n")s0=d.y+d.height-n0}if(l0={x:XG,y:s0,width:C0,height:n0},zG)zG.style.left=`${XG}px`,zG.style.top=`${s0-EG}px`,zG.style.width=`${C0}px`,zG.style.height=`${n0}px`;i({x:h0.clientX+12,y:h0.clientY+12,text:`${Math.round(C0)} × ${Math.round(n0)}`}),B7(new Map([[x,l0]]))},HG=()=>{window.removeEventListener("mousemove",X0),window.removeEventListener("mouseup",HG),i(null),_Z.current=null,B7(new Map),Z({...G,sections:A.map((h0)=>h0.id===x?{...h0,currentRect:l0}:h0)})};window.addEventListener("mousemove",X0),window.addEventListener("mouseup",HG)},[A,G,Z,EG]),U0=D0.useCallback((T)=>{QG((x)=>{let g=new Set(x);return g.add(T),g}),S((x)=>{let g=new Set(x);return g.delete(T),g}),Q0(()=>{let x=D.current;Z({...x,sections:x.sections.filter((g)=>g.id!==T),originalOrder:x.originalOrder.filter((g)=>g!==T)}),QG((g)=>{let v=new Set(g);return v.delete(T),v})},180)},[Z]),F0=(T)=>{let{originalRect:x,currentRect:g}=T;return Math.abs(x.x-g.x)>1||Math.abs(x.y-g.y)>1||Math.abs(x.width-g.width)>1||Math.abs(x.height-g.height)>1},k0=(T)=>{let{originalRect:x,currentRect:g}=T;return Math.abs(x.x-g.x)>1||Math.abs(x.y-g.y)>1},R0=(T)=>{let{originalRect:x,currentRect:g}=T;return Math.abs(x.width-g.width)>1||Math.abs(x.height-g.height)>1};for(let T of A)if(!dZ.current.has(T.id)){if(k0(T))dZ.current.set(T.id,"move");else if(R0(T))dZ.current.set(T.id,"resize")}for(let T of dZ.current.keys())if(!A.some((x)=>x.id===T))dZ.current.delete(T);let ZG=A.filter((T)=>{try{if(GG.has(T.id))return!0;if(f.has(T.id))return!0;let x=document.querySelector(T.selector);if(!x)return!1;let g=x.getBoundingClientRect(),v=T.originalRect;return Math.abs(g.width-v.width)+Math.abs(g.height-v.height)<200}catch{return!1}}),jG=ZG.filter((T)=>F0(T)),a0=ZG.filter((T)=>!F0(T)),v0=new Set(jG.map((T)=>T.id));for(let T of J6.current)if(!v0.has(T))J6.current.delete(T);let L0=[...v0].sort().join(",");for(let T of jG)xZ.current.set(T.id,{currentRect:T.currentRect,originalRect:T.originalRect,isFixed:T.isFixed});return D0.useEffect(()=>{let T=g6.current;g6.current=v0;let x=new Map;for(let g of T)if(!v0.has(g)){if(!A.some((t)=>t.id===g))continue;let v=xZ.current.get(g);if(v)x.set(g,{orig:v.originalRect,target:v.currentRect,isFixed:v.isFixed}),xZ.current.delete(g)}if(x.size>0){Y6((v)=>{let t=new Map(v);for(let[Y0,d]of x)t.set(Y0,d);return t});let g=Q0(()=>{Y6((v)=>{let t=new Map(v);for(let Y0 of x.keys())t.delete(Y0);return t})},250);return()=>clearTimeout(g)}},[L0,A]),r0.jsxs(r0.Fragment,{children:[r0.jsxs("div",{className:`${P.rearrangeOverlay} ${!z?P.light:""} ${J?P.overlayExiting:""}${B?` ${B}`:""}`,"data-feedback-toolbar":!0,children:[c0&&r0.jsx("div",{className:P.hoverHighlight,style:{left:c0.x,top:c0.y,width:c0.w,height:c0.h}}),a0.map((T)=>{let x=T.currentRect,g=T.isFixed?x.y:x.y-EG,v=fX,t=f.has(T.id);return r0.jsxs("div",{"data-rearrange-section":T.id,className:`${P.sectionOutline} ${t?P.selected:""} ${C||J||GG.has(T.id)?P.exiting:""}`,style:{left:x.x,top:g,width:x.width,height:x.height,borderColor:v.border,backgroundColor:v.bg,...M7?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:(Y0)=>E0(Y0,T.id),onDoubleClick:()=>G0(T.id),children:[r0.jsx("span",{className:P.sectionLabel,style:{backgroundColor:v.pill},children:T.label}),r0.jsx("span",{className:`${P.sectionAnnotation} ${T.note?P.annotationVisible:""}`,children:(()=>{if(T.note)P0.current.set(T.id,T.note);return T.note||P0.current.get(T.id)||""})()}),r0.jsxs("span",{className:P.sectionDimensions,children:[Math.round(x.width)," × ",Math.round(x.height)]}),r0.jsx("div",{className:P.deleteButton,onMouseDown:(Y0)=>Y0.stopPropagation(),onClick:()=>U0(T.id),children:"✕"}),TX.map((Y0)=>r0.jsx("div",{className:`${P.handle} ${P[`handle${Y0.charAt(0).toUpperCase()}${Y0.slice(1)}`]}`,onMouseDown:(d)=>c(d,T.id,Y0)},Y0))]},T.id)}),jG.map((T)=>{let x=T.currentRect,g=T.isFixed?x.y:x.y-EG,v=f.has(T.id),t=k0(T),Y0=R0(T);if(Y&&!v)return null;let H0=!J6.current.has(T.id);if(H0)J6.current.add(T.id);return r0.jsxs("div",{"data-rearrange-section":T.id,className:`${P.ghostOutline} ${v?P.selected:""} ${C||J||GG.has(T.id)?P.exiting:""}`,style:{left:x.x,top:g,width:x.width,height:x.height,...M7?{}:{opacity:0,animation:"none",transition:"none"},...!H0?{animation:"none"}:{}},onMouseDown:(f0)=>E0(f0,T.id),onDoubleClick:()=>G0(T.id),children:[r0.jsx("span",{className:P.sectionLabel,style:{backgroundColor:fX.pill},children:T.label}),r0.jsx("span",{className:`${P.sectionAnnotation} ${T.note?P.annotationVisible:""}`,children:(()=>{if(T.note)P0.current.set(T.id,T.note);return T.note||P0.current.get(T.id)||""})()}),r0.jsxs("span",{className:P.sectionDimensions,children:[Math.round(x.width)," × ",Math.round(x.height)]}),r0.jsx("div",{className:P.deleteButton,onMouseDown:(f0)=>f0.stopPropagation(),onClick:()=>U0(T.id),children:"✕"}),TX.map((f0)=>r0.jsx("div",{className:`${P.handle} ${P[`handle${f0.charAt(0).toUpperCase()}${f0.slice(1)}`]}`,onMouseDown:(l0)=>c(l0,T.id,f0)},f0)),r0.jsx("span",{className:P.ghostBadge,children:(()=>{let f0=dZ.current.get(T.id);if(t&&Y0){let[l0,zG]=f0==="resize"?["Resize","Move"]:["Move","Resize"];return r0.jsxs(r0.Fragment,{children:["Suggested ",l0," ",r0.jsxs("span",{className:P.ghostBadgeExtra,children:["& ",zG]})]})}return`Suggested ${Y0?"Resize":"Move"}`})()})]},T.id)})]}),!Y&&(()=>{let T=[];for(let x of jG){let g=B6.get(x.id);T.push({id:x.id,orig:x.originalRect,target:g||x.currentRect,isFixed:x.isFixed,isSelected:f.has(x.id),isExiting:GG.has(x.id)})}for(let[x,g]of B6)if(!T.some((v)=>v.id===x)){let v=A.find((t)=>t.id===x);if(v)T.push({id:x,orig:v.originalRect,target:g,isFixed:v.isFixed,isSelected:f.has(x)})}for(let[x,g]of b7)if(!T.some((v)=>v.id===x))T.push({id:x,orig:g.orig,target:g.target,isFixed:g.isFixed,isSelected:!1,isExiting:!0});if(T.length===0)return null;return r0.jsxs("svg",{className:`${P.connectorSvg} ${C||J?P.connectorExiting:""}`,children:[T.map(({id:x,orig:g,target:v,isFixed:t,isSelected:Y0,isExiting:d})=>{let H0=g.x+g.width/2,f0=(t?g.y:g.y-EG)+g.height/2,l0=v.x+v.width/2,zG=(t?v.y:v.y-EG)+v.height/2,X0=l0-H0,HG=zG-f0,h0=Math.sqrt(X0*X0+HG*HG);if(h0<2)return null;let $0=Math.min(1,h0/40),q0=Math.min(h0*0.3,60),XG=h0>0?-HG/h0:0,s0=h0>0?X0/h0:0,C0=(H0+l0)/2+XG*q0,n0=(f0+zG)/2+s0*q0,w0=B6.has(x),VG=w0||Y0?1:0.4,ZZ=w0||Y0?1:0.5;return r0.jsxs("g",{className:d?P.connectorExiting:"",children:[r0.jsx("path",{className:P.connectorLine,d:`M ${H0} ${f0} Q ${C0} ${n0} ${l0} ${zG}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:VG*$0}),r0.jsx("circle",{className:P.connectorDot,cx:H0,cy:f0,r:4*$0,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:ZZ*$0,filter:"url(#connDotShadow)"}),r0.jsx("circle",{className:P.connectorDot,cx:l0,cy:zG,r:4*$0,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:ZZ*$0,filter:"url(#connDotShadow)"})]},`conn-${x}`)}),r0.jsx("defs",{children:r0.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:r0.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),N&&(()=>{let T=A.find((zG)=>zG.id===N);if(!T)return null;let x=T.currentRect,g=T.isFixed?x.y:x.y-EG,v=x.x+x.width/2,t=g-8,Y0=g+x.height+8,d=t>200,H0=Y0<window.innerHeight-100,f0=Math.max(160,Math.min(window.innerWidth-160,v)),l0;if(d)l0={left:f0,bottom:window.innerHeight-t};else if(H0)l0={left:f0,top:Y0};else l0={left:f0,top:Math.max(80,window.innerHeight/2-80)};return r0.jsx(TB,{element:T.label,placeholder:"Add a note about this section",initialValue:T.note??"",submitLabel:a.current?"Save":"Set",onSubmit:_0,onCancel:n,onDelete:a.current?()=>{_0("")}:void 0,isExiting:B0,lightMode:!z,style:l0})})(),e0&&r0.jsx("div",{className:P.sizeIndicator,style:{left:e0.x,top:e0.y},"data-feedback-toolbar":!0,children:e0.text}),O0.map((T,x)=>r0.jsx("div",{className:P.guideLine,style:T.axis==="x"?{position:"fixed",left:T.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:T.pos-EG,width:"100vw",height:1}},`${T.axis}-${T.pos}-${x}`))]})}var vY=new Set(["script","style","noscript","link","meta","br","hr"]);function i5(){let G=document.querySelector("main")||document.body,Z=[],z=Array.from(G.children),J=G!==document.body&&z.length<3?Array.from(document.body.children):z;for(let B of J){if(!(B instanceof HTMLElement))continue;if(vY.has(B.tagName.toLowerCase()))continue;if(B.hasAttribute("data-feedback-toolbar"))continue;let Y=window.getComputedStyle(B);if(Y.display==="none"||Y.visibility==="hidden")continue;let j=B.getBoundingClientRect();if(j.height<10||j.width<10)continue;Z.push({label:NB(B),selector:a6(B),top:j.top,bottom:j.bottom,left:j.left,right:j.right,area:j.width*j.height});for(let H of Array.from(B.children)){if(!(H instanceof HTMLElement))continue;if(vY.has(H.tagName.toLowerCase()))continue;if(H.hasAttribute("data-feedback-toolbar"))continue;let X=window.getComputedStyle(H);if(X.display==="none"||X.visibility==="hidden")continue;let F=H.getBoundingClientRect();if(F.height<10||F.width<10)continue;Z.push({label:NB(H),selector:a6(H),top:F.top,bottom:F.bottom,left:F.left,right:F.right,area:F.width*F.height})}}return Z}function s5(G){let Z=window.scrollY;return G.map(({label:z,selector:J,rect:B})=>{let Y=B.y-Z;return{label:z,selector:J,top:Y,bottom:Y+B.height,left:B.x,right:B.x+B.width,area:B.width*B.height}})}function r5(G){let Z=window.scrollY,z=G.y-Z,J=G.x;return{top:z,bottom:z+G.height,left:J,right:J+G.width,area:G.width*G.height}}function uY(G,Z){let z=Z?s5(Z):i5(),J=r5(G),B=null,Y=null,j=null,H=null,X=null;for(let f of z){if(Math.abs(f.left-J.left)<2&&Math.abs(f.top-J.top)<2&&Math.abs(f.right-f.left-G.width)<2&&Math.abs(f.bottom-f.top-G.height)<2)continue;if(f.left<=J.left+2&&f.right>=J.right-2&&f.top<=J.top+2&&f.bottom>=J.bottom-2&&f.area>J.area*1.5){if(!X||f.area<X._area)X={label:f.label,selector:f.selector,_area:f.area}}let S=J.right>f.left+5&&J.left<f.right-5,C=J.bottom>f.top+5&&J.top<f.bottom-5;if(S&&f.bottom<=J.top+5){let _=Math.round(J.top-f.bottom);if(!B||_<B._dist)B={label:f.label,selector:f.selector,gap:Math.max(0,_),_dist:_}}if(S&&f.top>=J.bottom-5){let _=Math.round(f.top-J.bottom);if(!Y||_<Y._dist)Y={label:f.label,selector:f.selector,gap:Math.max(0,_),_dist:_}}if(C&&f.right<=J.left+5){let _=Math.round(J.left-f.right);if(!j||_<j._dist)j={label:f.label,selector:f.selector,gap:Math.max(0,_),_dist:_}}if(C&&f.left>=J.right-5){let _=Math.round(f.left-J.right);if(!H||_<H._dist)H={label:f.label,selector:f.selector,gap:Math.max(0,_),_dist:_}}}let{innerWidth:F,innerHeight:Q}=window,R=a5(G,F),A=(f)=>{if(!f)return null;return{label:f.label,selector:f.selector,gap:f.gap}},D=o5(J,G,F,Q,X?{label:X.label,selector:X.selector,_area:X._area}:null,z);return{above:A(B),below:A(Y),left:A(j),right:A(H),alignment:R,containedIn:X?{label:X.label,selector:X.selector}:null,outOfBounds:D}}function o5(G,Z,z,J,B,Y){let j={},H=!1,X=[];if(G.left<-2)X.push("left");if(G.right>z+2)X.push("right");if(G.top<-2)X.push("top");if(G.bottom>J+2)X.push("bottom");if(X.length>0)j.viewport=X,H=!0;if(B){let F=Y.find((Q)=>Q.label===B.label&&Q.selector===B.selector&&Math.abs(Q.area-B._area)<10);if(F){let Q=[];if(G.left<F.left-2)Q.push("left");if(G.right>F.right+2)Q.push("right");if(G.top<F.top-2)Q.push("top");if(G.bottom>F.bottom+2)Q.push("bottom");if(Q.length>0)j.container={label:B.label,edges:Q},H=!0}}return H?j:null}function a5(G,Z){if(G.width/Z>0.85)return"full-width";let J=G.x+G.width/2,B=Z/2,Y=J-B,j=Z*0.08;if(Math.abs(Y)<j)return"center";if(Y<0)return"left";return"right"}function Gq(G){switch(G){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function Zq(G,Z={}){let z=[];if(G.above)z.push(`Below \`${G.above.label}\`${G.above.gap>0?` (${G.above.gap}px gap)`:""}`);if(G.below)z.push(`Above \`${G.below.label}\`${G.below.gap>0?` (${G.below.gap}px gap)`:""}`);if(Z.includeLeftRight){if(G.left)z.push(`Right of \`${G.left.label}\`${G.left.gap>0?` (${G.left.gap}px gap)`:""}`);if(G.right)z.push(`Left of \`${G.right.label}\`${G.right.gap>0?` (${G.right.gap}px gap)`:""}`)}let J=Gq(G.alignment);if(G.containedIn)z.push(`${J.charAt(0).toUpperCase()+J.slice(1)} in \`${G.containedIn.label}\``);else z.push(`${J.charAt(0).toUpperCase()+J.slice(1)} in page`);if(Z.includePixelRef&&Z.pixelRef)z.push(`Pixel ref: \`${Z.pixelRef}\``);if(G.outOfBounds){if(G.outOfBounds.viewport)z.push(`**Outside viewport** (${G.outOfBounds.viewport.join(", ")} edge${G.outOfBounds.viewport.length>1?"s":""})`);if(G.outOfBounds.container)z.push(`**Outside \`${G.outOfBounds.container.label}\`** (${G.outOfBounds.container.edges.join(", ")} edge${G.outOfBounds.container.edges.length>1?"s":""})`)}return z}function n5(G,Z,z){let J=[];if(G.above)J.push(`below \`${G.above.label}\``);if(G.below)J.push(`above \`${G.below.label}\``);if(G.left)J.push(`right of \`${G.left.label}\``);if(G.right)J.push(`left of \`${G.right.label}\``);if(G.containedIn)J.push(`inside \`${G.containedIn.label}\``);if(J.push(Gq(G.alignment)),G.outOfBounds?.viewport)J.push(`**outside viewport** (${G.outOfBounds.viewport.join(", ")})`);if(G.outOfBounds?.container)J.push(`**outside \`${G.outOfBounds.container.label}\`** (${G.outOfBounds.container.edges.join(", ")})`);let B=z?`, ${Math.round(z.width)}×${Math.round(z.height)}px`:"";return`at (${Math.round(Z.x)}, ${Math.round(Z.y)})${B}: ${J.join(", ")}`}var xX=15;function SX(G){if(G.length<2)return[];let Z=[],z=new Set;for(let J=0;J<G.length;J++){if(z.has(J))continue;let B=[J];for(let Y=J+1;Y<G.length;Y++){if(z.has(Y))continue;if(Math.abs(G[J].rect.y-G[Y].rect.y)<xX)B.push(Y)}if(B.length>=2){let Y=B.map((X)=>G[X]);Y.sort((X,F)=>X.rect.x-F.rect.x);let j=[];for(let X=0;X<Y.length-1;X++)j.push(Math.round(Y[X+1].rect.x-(Y[X].rect.x+Y[X].rect.width)));let H=Math.round(Y.reduce((X,F)=>X+F.rect.y,0)/Y.length);Z.push({labels:Y.map((X)=>X.label),type:"row",sharedEdge:H,gaps:j,avgGap:j.length?Math.round(j.reduce((X,F)=>X+F,0)/j.length):0}),B.forEach((X)=>z.add(X))}}for(let J=0;J<G.length;J++){if(z.has(J))continue;let B=[J];for(let Y=J+1;Y<G.length;Y++){if(z.has(Y))continue;if(Math.abs(G[J].rect.x-G[Y].rect.x)<xX)B.push(Y)}if(B.length>=2){let Y=B.map((X)=>G[X]);Y.sort((X,F)=>X.rect.y-F.rect.y);let j=[];for(let X=0;X<Y.length-1;X++)j.push(Math.round(Y[X+1].rect.y-(Y[X].rect.y+Y[X].rect.height)));let H=Math.round(Y.reduce((X,F)=>X+F.rect.x,0)/Y.length);Z.push({labels:Y.map((X)=>X.label),type:"column",sharedEdge:H,gaps:j,avgGap:j.length?Math.round(j.reduce((X,F)=>X+F,0)/j.length):0}),B.forEach((X)=>z.add(X))}}return Z}function t5(G){if(G.length<2)return[];let Z=SX(G.map((j)=>({label:j.label,rect:j.originalRect}))),z=SX(G.map((j)=>({label:j.label,rect:j.currentRect}))),J=[],B=new Set;for(let j of Z){let H=new Set(j.labels),X=null,F=0;for(let Q of z){let R=Q.labels.filter((A)=>H.has(A)).length;if(R>=2&&R>F)X=Q,F=R}if(X){let Q=X.labels.filter((A)=>H.has(A)),R=Q.join(", ");if(X.type!==j.type){let A=j.type==="row"?"y":"x",D=X.type==="row"?"y":"x";J.push(`**${R}**: ${j.type} (${A}≈${j.sharedEdge}, ${j.avgGap}px gaps) → ${X.type} (${D}≈${X.sharedEdge}, ${X.avgGap}px gaps)`)}else if(Math.abs(j.sharedEdge-X.sharedEdge)>20||Math.abs(j.avgGap-X.avgGap)>5){let A=j.type==="row"?"y":"x",D=Math.abs(j.sharedEdge-X.sharedEdge)>20?` ${A}: ${j.sharedEdge} → ${X.sharedEdge}`:"",f=Math.abs(j.avgGap-X.avgGap)>5?` gaps: ${j.avgGap}px → ${X.avgGap}px`:"";J.push(`**${R}**: ${j.type} shifted —${D}${f}`)}Q.forEach((A)=>B.add(A))}else{let Q=j.labels.join(", "),R=j.type==="row"?"y":"x";J.push(`**${Q}**: ${j.type} (${R}≈${j.sharedEdge}) dissolved`),j.labels.forEach((A)=>B.add(A))}}for(let j of z){if(j.labels.every((F)=>B.has(F)))continue;if(j.labels.filter((F)=>!B.has(F)).length<2)continue;if(!Z.some((F)=>{return F.labels.filter((R)=>j.labels.includes(R)).length>=2})){let F=j.type==="row"?"y":"x";J.push(`**${j.labels.join(", ")}**: new ${j.type} (${F}≈${j.sharedEdge}, ${j.avgGap}px gaps)`),j.labels.forEach((Q)=>B.add(Q))}}let Y=G.filter((j)=>!B.has(j.label));if(Y.length>=2){let j={};for(let H of Y){let X=Math.round(H.currentRect.x/5)*5;(j[X]??(j[X]=[])).push(H.label)}for(let[H,X]of Object.entries(j))if(X.length>=2)J.push(`**${X.join(", ")}**: shared left edge at x≈${H}`)}return J}function zq(G){if(typeof document>"u")return{viewport:G,contentArea:null};let Z=[],z=new Set,J=(H)=>{if(z.has(H))return;if(!(H instanceof HTMLElement))return;if(H.hasAttribute("data-feedback-toolbar"))return;if(vY.has(H.tagName.toLowerCase()))return;z.add(H),Z.push(H)},B=document.querySelector("main");if(B)J(B);let Y=document.querySelector("[role='main']");if(Y)J(Y);for(let H of Array.from(document.body.children))if(J(H),H.children){for(let X of Array.from(H.children))if(J(X),X.children)for(let F of Array.from(X.children))J(F)}let j=null;for(let H of Z){let X=H.getBoundingClientRect();if(X.height<50)continue;let F=getComputedStyle(H);if(F.maxWidth&&F.maxWidth!=="none"&&F.maxWidth!=="0px"){if(!j||X.width<j.rect.width)j={el:H,rect:X};continue}if(!j&&X.width<G.width-20&&X.width>100)j={el:H,rect:X}}if(j){let{el:H,rect:X}=j;return{viewport:G,contentArea:{width:Math.round(X.width),left:Math.round(X.left),right:Math.round(X.right),centerX:Math.round(X.left+X.width/2),selector:a6(H)}}}return{viewport:G,contentArea:null}}function e5(G){if(typeof document>"u")return null;let Z=document.querySelector(G);if(!Z?.parentElement)return null;let z=getComputedStyle(Z.parentElement),J={parentDisplay:z.display,parentSelector:a6(Z.parentElement)};if(z.display.includes("flex"))J.flexDirection=z.flexDirection;if(z.display.includes("grid")&&z.gridTemplateColumns!=="none")J.gridCols=z.gridTemplateColumns;if(z.gap&&z.gap!=="normal"&&z.gap!=="0px")J.gap=z.gap;return J}function Jq(G,Z){let z=Z.contentArea,J=z?z.width:Z.viewport.width,B=z?z.left:0,Y=z?z.centerX:Math.round(Z.viewport.width/2),j=Math.round(G.x-B),H=Math.round(B+J-(G.x+G.width)),X=(G.width/J*100).toFixed(1),F=G.x+G.width/2,Q=Math.abs(F-Y)<20,R=G.width/J>0.95,A=[];if(R)A.push("`width: 100%` of container");else A.push(`left \`${j}px\` in container, right \`${H}px\`, width \`${X}%\` (\`${Math.round(G.width)}px\`)`);if(Q&&!R)A.push("centered — `margin-inline: auto`");return A.join(" — ")}function Bq(G){let{viewport:Z,contentArea:z}=G,J=`### Reference Frame
`;if(J+=`- Viewport: \`${Z.width}×${Z.height}px\`
`,z){let B=z;J+=`- Content area: \`${B.width}px\` wide, left edge at \`x=${B.left}\`, right at \`x=${B.right}\` (\`${B.selector}\`)
`,J+=`- Pixel → CSS translation:
`,J+=`  - **Horizontal position in container**: \`element.x - ${B.left}\` → use as \`margin-left\` or \`left\`
`,J+=`  - **Width as % of container**: \`element.width / ${B.width} × 100\` → use as \`width: X%\`
`,J+="  - **Vertical gap between elements**: `nextElement.y - (prevElement.y + prevElement.height)` → use as `margin-top` or `gap`\n",J+=`  - **Centered**: if \`|element.centerX - ${B.centerX}| < 20px\` → use \`margin-inline: auto\`
`}else J+=`- No distinct content container — elements positioned relative to full viewport
`,J+=`- Pixel → CSS translation:
`,J+=`  - **Width as % of viewport**: \`element.width / ${Z.width} × 100\` → use as \`width: X%\`
`,J+=`  - **Centered**: if \`|(element.x + element.width/2) - ${Math.round(Z.width/2)}| < 20px\` → use \`margin-inline: auto\`
`;return J+=`
`,J}function G2(G){let Z=e5(G);if(!Z)return null;let z=`\`${Z.parentDisplay}\``;if(Z.flexDirection)z+=`, flex-direction: \`${Z.flexDirection}\``;if(Z.gridCols)z+=`, grid-template-columns: \`${Z.gridCols}\``;if(Z.gap)z+=`, gap: \`${Z.gap}\``;return`Parent: ${z} (\`${Z.parentSelector}\`)`}function kX(G,Z,z,J="standard"){if(G.length===0)return"";let B=[...G].sort((C,_)=>{if(Math.abs(C.y-_.y)<20)return C.x-_.x;return C.y-_.y}),Y="";if(z?.blankCanvas){if(Y+=`## Wireframe: New Page

`,z.wireframePurpose)Y+=`> **Purpose:** ${z.wireframePurpose}
>
`;Y+=`> ${G.length} component${G.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`}else Y+=`## Design Layout

> ${G.length} component${G.length!==1?"s":""} placed

`;if(J==="compact")return Y+=`### Components
`,B.forEach((C,_)=>{let M=A7[C.type]?.label||C.type;Y+=`${_+1}. **${M}** — \`${Math.round(C.width)}×${Math.round(C.height)}px\` at \`(${Math.round(C.x)}, ${Math.round(C.y)})\`
`}),Y;let j=zq(Z);Y+=Bq(j),Y+=`### Components
`,B.forEach((C,_)=>{let M=A7[C.type]?.label||C.type,K={x:C.x,y:C.y,width:C.width,height:C.height};Y+=`${_+1}. **${M}** — \`${Math.round(C.width)}×${Math.round(C.height)}px\` at \`(${Math.round(C.x)}, ${Math.round(C.y)})\`
`;let N=uY(K),B0=Zq(N,{includeLeftRight:J==="detailed"||J==="forensic"});for(let a of B0)Y+=`   - ${a}
`;let b=Jq(K,j);if(b)Y+=`   - CSS: ${b}
`}),Y+=`
### Layout Analysis
`;let H=[];for(let C of B){let _=H.find((M)=>Math.abs(M.y-C.y)<30);if(_)_.items.push(C);else H.push({y:C.y,items:[C]})}if(H.sort((C,_)=>C.y-_.y),H.forEach((C,_)=>{C.items.sort((K,N)=>K.x-N.x);let M=C.items.map((K)=>A7[K.type]?.label||K.type);if(C.items.length===1){let N=C.items[0].width>Z.width*0.8;Y+=`- Row ${_+1} (y≈${Math.round(C.y)}): ${M[0]}${N?" — full width":""}
`}else Y+=`- Row ${_+1} (y≈${Math.round(C.y)}): ${M.join(" | ")} — ${C.items.length} items side by side
`}),J==="detailed"||J==="forensic"){Y+=`
### Spacing & Gaps
`;for(let C=0;C<B.length-1;C++){let _=B[C],M=B[C+1],K=A7[_.type]?.label||_.type,N=A7[M.type]?.label||M.type,p=Math.round(M.y-(_.y+_.height)),B0=Math.round(M.x-(_.x+_.width));if(Math.abs(_.y-M.y)<30)Y+=`- ${K} → ${N}: \`${B0}px\` horizontal gap
`;else Y+=`- ${K} → ${N}: \`${p}px\` vertical gap
`}if(J==="forensic"&&B.length>2){Y+=`
### All Pairwise Gaps
`;for(let C=0;C<B.length;C++)for(let _=C+1;_<B.length;_++){let M=B[C],K=B[_],N=A7[M.type]?.label||M.type,p=A7[K.type]?.label||K.type,B0=Math.round(K.y-(M.y+M.height)),b=Math.round(K.x-(M.x+M.width));Y+=`- ${N} ↔ ${p}: h=\`${b}px\` v=\`${B0}px\`
`}}if(J==="forensic")Y+=`
### Z-Order (placement order)
`,G.forEach((C,_)=>{let M=A7[C.type]?.label||C.type;Y+=`${_}. ${M} at \`(${Math.round(C.x)}, ${Math.round(C.y)})\`
`})}Y+=`
### Suggested Implementation
`;let X=B.some((C)=>C.type==="navigation"),F=B.some((C)=>C.type==="hero"),Q=B.some((C)=>C.type==="sidebar"),R=B.some((C)=>C.type==="footer"),A=B.filter((C)=>C.type==="card"),D=B.filter((C)=>C.type==="form"),f=B.filter((C)=>C.type==="table"),S=B.filter((C)=>C.type==="modal");if(X)Y+=`- Top navigation bar with logo + nav links + CTA
`;if(F)Y+=`- Hero section with heading, subtext, and call-to-action
`;if(Q)Y+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`;if(A.length>1)Y+=`- ${A.length}-column card grid — use CSS Grid or Flexbox
`;else if(A.length===1)Y+=`- Card component with image + content area
`;if(D.length>0)Y+=`- ${D.length} form${D.length>1?"s":""} — add proper labels, validation, and submit handling
`;if(f.length>0)Y+=`- Data table — consider sortable columns and pagination
`;if(S.length>0)Y+=`- Modal dialog — add overlay backdrop and focus trapping
`;if(R)Y+=`- Multi-column footer with links
`;if(J==="detailed"||J==="forensic"){if(Y+=`
### CSS Suggestions
`,Q){let C=B.find((_)=>_.type==="sidebar");Y+=`- \`display: grid; grid-template-columns: ${Math.round(C.width)}px 1fr;\`
`}if(A.length>1){let C=Math.round(A[0].width);Y+=`- \`display: grid; grid-template-columns: repeat(${A.length}, ${C}px); gap: 16px;\`
`}if(X)Y+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n"}return Y}function bX(G,Z="standard",z){let{sections:J}=G,B=[];for(let Q of J){let{originalRect:R,currentRect:A}=Q,D=Math.abs(R.x-A.x)>1||Math.abs(R.y-A.y)>1,f=Math.abs(R.width-A.width)>1||Math.abs(R.height-A.height)>1;if(!D&&!f){if(Z==="forensic")B.push({section:Q,posMoved:!1,sizeChanged:!1});continue}B.push({section:Q,posMoved:D,sizeChanged:f})}if(B.length===0)return"";if(Z!=="forensic"&&B.every((Q)=>!Q.posMoved&&!Q.sizeChanged))return"";let Y=`## Suggested Layout Changes

`,j=z?z.width:typeof window<"u"?window.innerWidth:0,H=z?z.height:typeof window<"u"?window.innerHeight:0,X=zq({width:j,height:H});if(Z!=="compact")Y+=Bq(X);if(Z==="forensic")Y+=`> Detected at: \`${new Date(G.detectedAt).toISOString()}\`
`,Y+=`> Total sections: ${J.length}

`;let F=(Q)=>J.map((R)=>({label:R.label,selector:R.selector,rect:Q==="original"?R.originalRect:R.currentRect}));Y+=`**Changes:**
`;for(let{section:Q,posMoved:R,sizeChanged:A}of B){let{originalRect:D,currentRect:f}=Q;if(!R&&!A){Y+=`- ${Q.label} — unchanged at (${Math.round(f.x)}, ${Math.round(f.y)}) ${Math.round(f.width)}×${Math.round(f.height)}px
`;continue}if(Z==="compact"){if(R&&A)Y+=`- Suggested: move **${Q.label}** to (${Math.round(f.x)}, ${Math.round(f.y)}) ${Math.round(f.width)}×${Math.round(f.height)}px
`;else if(R)Y+=`- Suggested: move **${Q.label}** to (${Math.round(f.x)}, ${Math.round(f.y)})
`;else Y+=`- Suggested: resize **${Q.label}** to ${Math.round(f.width)}×${Math.round(f.height)}px
`;continue}if(R&&A)Y+=`- Suggested: move and resize **${Q.label}**
`;else if(R)Y+=`- Suggested: move **${Q.label}**
`;else Y+=`- Suggested: resize **${Q.label}** from ${Math.round(D.width)}×${Math.round(D.height)}px to ${Math.round(f.width)}×${Math.round(f.height)}px
`;if(R){let C=uY(D,F("original")),_=uY(f,F("current")),M=A?{width:D.width,height:D.height}:void 0;Y+=`  - Currently ${n5(C,{x:D.x,y:D.y},M)}
`;let K=A?{width:f.width,height:f.height}:void 0,N=`at (${Math.round(f.x)}, ${Math.round(f.y)})`,p=K?`, ${Math.round(K.width)}×${Math.round(K.height)}px`:"",b=Zq(_,{includeLeftRight:Z==="detailed"||Z==="forensic"});if(b.length>0){Y+=`  - Suggested position ${N}${p}: ${b[0]}
`;for(let G0=1;G0<b.length;G0++)Y+=`    ${b[G0]}
`}else Y+=`  - Suggested position ${N}${p}
`;let a=Jq(f,X);if(a)Y+=`  - CSS: ${a}
`}let S=G2(Q.selector);if(S)Y+=`  - ${S}
`;if(Y+=`  - Selector: \`${Q.selector}\`
`,Z==="detailed"||Z==="forensic"){let C=Q.className?`${Q.tagName}.${Q.className.split(" ")[0]}`:Q.tagName;if(C!==Q.selector)Y+=`  - Element: \`${C}\`
`;if(Q.role)Y+=`  - Role: \`${Q.role}\`
`;if(Z==="forensic"&&Q.textSnippet)Y+=`  - Text: "${Q.textSnippet}"
`}if(Z==="forensic")Y+=`  - Original rect: \`{ x: ${Math.round(D.x)}, y: ${Math.round(D.y)}, w: ${Math.round(D.width)}, h: ${Math.round(D.height)} }\`
`,Y+=`  - Current rect: \`{ x: ${Math.round(f.x)}, y: ${Math.round(f.y)}, w: ${Math.round(f.width)}, h: ${Math.round(f.height)} }\`
`}if(Z!=="compact"){let Q=B.filter((A)=>A.posMoved).map((A)=>({label:A.section.label,originalRect:A.section.originalRect,currentRect:A.section.currentRect})),R=t5(Q);if(R.length>0){Y+=`
### Layout Summary
`;for(let A of R)Y+=`- ${A}
`}}if(Z!=="compact"&&J.length>1){Y+=`
### All Sections (current positions)
`;let Q=[...J].sort((R,A)=>{if(Math.abs(R.currentRect.y-A.currentRect.y)<20)return R.currentRect.x-A.currentRect.x;return R.currentRect.y-A.currentRect.y});for(let R of Q){let A=R.currentRect,D=Math.abs(A.x-R.originalRect.x)>1||Math.abs(A.y-R.originalRect.y)>1||Math.abs(A.width-R.originalRect.width)>1||Math.abs(A.height-R.originalRect.height)>1;Y+=`- ${R.label}: \`${Math.round(A.width)}×${Math.round(A.height)}px\` at \`(${Math.round(A.x)}, ${Math.round(A.y)})\`${D?" ← suggested":""}
`}}return Y}var mY="feedback-annotations-",Yq=7;function $B(G){return`${mY}${G}`}function pJ(G){if(typeof window>"u")return[];try{let Z=localStorage.getItem($B(G));if(!Z)return[];let z=JSON.parse(Z),J=Date.now()-Yq*24*60*60*1000;return z.filter((B)=>!B.timestamp||B.timestamp>J)}catch{return[]}}function jq(G,Z){if(typeof window>"u")return;try{localStorage.setItem($B(G),JSON.stringify(Z))}catch{}}function Z2(){let G=new Map;if(typeof window>"u")return G;try{let Z=Date.now()-Yq*24*60*60*1000;for(let z=0;z<localStorage.length;z++){let J=localStorage.key(z);if(J?.startsWith(mY)){let B=J.slice(mY.length),Y=localStorage.getItem(J);if(Y){let H=JSON.parse(Y).filter((X)=>!X.timestamp||X.timestamp>Z);if(H.length>0)G.set(B,H)}}}}catch{}return G}function mJ(G,Z,z){let J=Z.map((B)=>({...B,_syncedTo:z}));jq(G,J)}var lY="agentation-design-";function z2(G){if(typeof window>"u")return[];try{let Z=localStorage.getItem(`${lY}${G}`);if(!Z)return[];return JSON.parse(Z)}catch{return[]}}function J2(G,Z){if(typeof window>"u")return;try{localStorage.setItem(`${lY}${G}`,JSON.stringify(Z))}catch{}}function B2(G){if(typeof window>"u")return;try{localStorage.removeItem(`${lY}${G}`)}catch{}}var pY="agentation-rearrange-";function Y2(G){if(typeof window>"u")return null;try{let Z=localStorage.getItem(`${pY}${G}`);if(!Z)return null;return JSON.parse(Z)}catch{return null}}function j2(G,Z){if(typeof window>"u")return;try{localStorage.setItem(`${pY}${G}`,JSON.stringify(Z))}catch{}}function H2(G){if(typeof window>"u")return;try{localStorage.removeItem(`${pY}${G}`)}catch{}}var iY="agentation-wireframe-";function X2(G){if(typeof window>"u")return null;try{let Z=localStorage.getItem(`${iY}${G}`);if(!Z)return null;return JSON.parse(Z)}catch{return null}}function PX(G,Z){if(typeof window>"u")return;try{localStorage.setItem(`${iY}${G}`,JSON.stringify(Z))}catch{}}function DB(G){if(typeof window>"u")return;try{localStorage.removeItem(`${iY}${G}`)}catch{}}var Hq="agentation-session-";function sY(G){return`${Hq}${G}`}function q2(G){if(typeof window>"u")return null;try{return localStorage.getItem(sY(G))}catch{return null}}function $Y(G,Z){if(typeof window>"u")return;try{localStorage.setItem(sY(G),Z)}catch{}}function W2(G){if(typeof window>"u")return;try{localStorage.removeItem(sY(G))}catch{}}var dY=`${Hq}toolbar-hidden`;function U2(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(dY)==="1"}catch{return!1}}function A2(G){if(typeof window>"u")return;try{if(G)sessionStorage.setItem(dY,"1");else sessionStorage.removeItem(dY)}catch{}}async function CY(G,Z){let z=await fetch(`${G}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:Z})});if(!z.ok)throw Error(`Failed to create session: ${z.status}`);return z.json()}async function EX(G,Z){let z=await fetch(`${G}/sessions/${Z}`);if(!z.ok)throw Error(`Failed to get session: ${z.status}`);return z.json()}async function Cz(G,Z,z){let J=await fetch(`${G}/sessions/${Z}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(z)});if(!J.ok)throw Error(`Failed to sync annotation: ${J.status}`);return J.json()}async function hX(G,Z,z){let J=await fetch(`${G}/annotations/${Z}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(z)});if(!J.ok)throw Error(`Failed to update annotation: ${J.status}`);return J.json()}async function q6(G,Z){let z=await fetch(`${G}/annotations/${Z}`,{method:"DELETE"});if(!z.ok)throw Error(`Failed to delete annotation: ${z.status}`)}var JG={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},gX=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),yX=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],Q2=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function _2(G){let Z=G?.mode??"filtered",z=gX;if(G?.skipExact){let J=G.skipExact instanceof Set?G.skipExact:new Set(G.skipExact);z=new Set([...gX,...J])}return{maxComponents:G?.maxComponents??6,maxDepth:G?.maxDepth??30,mode:Z,skipExact:z,skipPatterns:G?.skipPatterns?[...yX,...G.skipPatterns]:yX,userPatterns:G?.userPatterns??Q2,filter:G?.filter}}function L2(G){return G.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function O2(G,Z=10){let z=new Set,J=G,B=0;while(J&&B<Z){if(J.className&&typeof J.className==="string")J.className.split(/\s+/).forEach((Y)=>{if(Y.length>1){let j=Y.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();if(j.length>1)z.add(j)}});J=J.parentElement,B++}return z}function M2(G,Z){let z=L2(G);for(let J of Z){if(J===z)return!0;let B=z.split("-").filter((j)=>j.length>2),Y=J.split("-").filter((j)=>j.length>2);for(let j of B)for(let H of Y)if(j===H||j.includes(H)||H.includes(j))return!0}return!1}function F2(G,Z,z,J){if(z.filter)return z.filter(G,Z);switch(z.mode){case"all":return!0;case"filtered":if(z.skipExact.has(G))return!1;if(z.skipPatterns.some((B)=>B.test(G)))return!1;return!0;case"smart":if(z.skipExact.has(G))return!1;if(z.skipPatterns.some((B)=>B.test(G)))return!1;if(J&&M2(G,J))return!0;if(z.userPatterns.some((B)=>B.test(G)))return!0;return!1;default:return!0}}var xz=null,R2=new WeakMap;function xY(G){return Object.keys(G).some((Z)=>Z.startsWith("__reactFiber$")||Z.startsWith("__reactInternalInstance$")||Z.startsWith("__reactProps$"))}function w2(){if(xz!==null)return xz;if(typeof document>"u")return!1;if(document.body&&xY(document.body))return xz=!0,!0;let G=["#root","#app","#__next","[data-reactroot]"];for(let Z of G){let z=document.querySelector(Z);if(z&&xY(z))return xz=!0,!0}if(document.body){for(let Z of document.body.children)if(xY(Z))return xz=!0,!0}return xz=!1,!1}var dJ={map:R2};function V2(G){return Object.keys(G).find((z)=>z.startsWith("__reactFiber$")||z.startsWith("__reactInternalInstance$"))||null}function D2(G){let Z=V2(G);if(!Z)return null;return G[Z]}function p6(G){if(!G)return null;if(G.displayName)return G.displayName;if(G.name)return G.name;return null}function K2(G){let{tag:Z,type:z,elementType:J}=G;if(Z===JG.HostComponent||Z===JG.HostText||Z===JG.HostHoistable||Z===JG.HostSingleton)return null;if(Z===JG.Fragment||Z===JG.Mode||Z===JG.Profiler||Z===JG.DehydratedFragment)return null;if(Z===JG.HostRoot||Z===JG.HostPortal||Z===JG.ScopeComponent||Z===JG.OffscreenComponent||Z===JG.LegacyHiddenComponent||Z===JG.CacheComponent||Z===JG.TracingMarkerComponent||Z===JG.Throw||Z===JG.ViewTransitionComponent||Z===JG.ActivityComponent)return null;if(Z===JG.ForwardRef){let B=J;if(B?.render){let Y=p6(B.render);if(Y)return Y}if(B?.displayName)return B.displayName;return p6(z)}if(Z===JG.MemoComponent||Z===JG.SimpleMemoComponent){let B=J;if(B?.type){let Y=p6(B.type);if(Y)return Y}if(B?.displayName)return B.displayName;return p6(z)}if(Z===JG.ContextProvider){let B=z;if(B?._context?.displayName)return`${B._context.displayName}.Provider`;return null}if(Z===JG.ContextConsumer){let B=z;if(B?.displayName)return`${B.displayName}.Consumer`;return null}if(Z===JG.LazyComponent){let B=J;if(B?._status===1&&B._result)return p6(B._result);return null}if(Z===JG.SuspenseComponent||Z===JG.SuspenseListComponent)return null;if(Z===JG.IncompleteClassComponent||Z===JG.IncompleteFunctionComponent)return p6(z);if(Z===JG.FunctionComponent||Z===JG.ClassComponent||Z===JG.IndeterminateComponent)return p6(z);return null}function I2(G){if(G.length<=2)return!0;if(G.length<=3&&G===G.toLowerCase())return!0;return!1}function f2(G,Z){let z=_2(Z),J=z.mode==="all";if(J){let X=dJ.map.get(G);if(X!==void 0)return X}if(!w2()){let X={path:null,components:[]};if(J)dJ.map.set(G,X);return X}let B=z.mode==="smart"?O2(G):void 0,Y=[];try{let X=D2(G),F=0;while(X&&F<z.maxDepth&&Y.length<z.maxComponents){let Q=K2(X);if(Q&&!I2(Q)&&F2(Q,F,z,B))Y.push(Q);X=X.return,F++}}catch{let X={path:null,components:[]};if(J)dJ.map.set(G,X);return X}if(Y.length===0){let X={path:null,components:[]};if(J)dJ.map.set(G,X);return X}let H={path:Y.slice().reverse().map((X)=>`<${X}>`).join(" "),components:Y};if(J)dJ.map.set(G,H);return H}var cJ={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16};function T2(G){if(!G||typeof G!=="object")return null;let Z=Object.keys(G),z=Z.find((Y)=>Y.startsWith("__reactFiber$"));if(z)return G[z]||null;let J=Z.find((Y)=>Y.startsWith("__reactInternalInstance$"));if(J)return G[J]||null;let B=Z.find((Y)=>{if(!Y.startsWith("__react"))return!1;let j=G[Y];return j&&typeof j==="object"&&"_debugSource"in j});if(B)return G[B]||null;return null}function sJ(G){if(!G.type)return null;if(typeof G.type==="string")return null;if(typeof G.type==="object"||typeof G.type==="function"){let Z=G.type;if(Z.displayName)return Z.displayName;if(Z.name)return Z.name}return null}function N2(G,Z=50){let z=G,J=0;while(z&&J<Z){if(z._debugSource)return{source:z._debugSource,componentName:sJ(z)};if(z._debugOwner?._debugSource)return{source:z._debugOwner._debugSource,componentName:sJ(z._debugOwner)};z=z.return,J++}return null}function $2(G){let Z=G,z=0,J=50;while(Z&&z<J){let B=Z,Y=["_debugSource","__source","_source","debugSource"];for(let j of Y){let H=B[j];if(H&&typeof H==="object"&&"fileName"in H)return{source:H,componentName:sJ(Z)}}if(Z.memoizedProps){let j=Z.memoizedProps;if(j.__source&&typeof j.__source==="object"){let H=j.__source;if(H.fileName&&H.lineNumber)return{source:{fileName:H.fileName,lineNumber:H.lineNumber,columnNumber:H.columnNumber},componentName:sJ(Z)}}}Z=Z.return,z++}return null}var KB=new Map;function C2(G){let{tag:Z,type:z,elementType:J}=G;if(typeof z==="string"||z==null)return null;if(typeof z==="function"&&z.prototype?.isReactComponent)return null;if((Z===cJ.FunctionComponent||Z===cJ.IndeterminateComponent)&&typeof z==="function")return z;if(Z===cJ.ForwardRef&&J){let B=J.render;if(typeof B==="function")return B}if((Z===cJ.MemoComponent||Z===cJ.SimpleMemoComponent)&&J){let B=J.type;if(typeof B==="function")return B}if(typeof z==="function")return z;return null}function x2(){let G=Xq.default,Z=G.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(Z&&"H"in Z)return{get:()=>Z.H,set:(J)=>{Z.H=J}};let z=G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(z){let J=z.ReactCurrentDispatcher;if(J&&"current"in J)return{get:()=>J.current,set:(B)=>{J.current=B}}}return null}function S2(G){let Z=G.split(`
`),z=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],J=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,B=/^[^@]*@(.+?):(\d+):(\d+)$/;for(let Y of Z){let j=Y.trim();if(!j)continue;if(z.some((X)=>X.test(j)))continue;let H=J.exec(j)||B.exec(j);if(H)return{fileName:H[1],line:parseInt(H[2],10),column:parseInt(H[3],10)}}return null}function k2(G){let Z=G;return Z=Z.replace(/[?#].*$/,""),Z=Z.replace(/^turbopack:\/\/\/\[project\]\//,""),Z=Z.replace(/^webpack-internal:\/\/\/\.\//,""),Z=Z.replace(/^webpack-internal:\/\/\//,""),Z=Z.replace(/^webpack:\/\/\/\.\//,""),Z=Z.replace(/^webpack:\/\/\//,""),Z=Z.replace(/^turbopack:\/\/\//,""),Z=Z.replace(/^https?:\/\/[^/]+\//,""),Z=Z.replace(/^file:\/\/\//,"/"),Z=Z.replace(/^\([^)]+\)\/\.\//,""),Z=Z.replace(/^\.\//,""),Z}function b2(G){let Z=C2(G);if(!Z)return null;if(KB.has(Z))return KB.get(Z);let z=x2();if(!z)return KB.set(Z,null),null;let J=z.get(),B=null;try{let Y=new Proxy({},{get(){throw Error("probe")}});z.set(Y);try{Z({})}catch(j){if(j instanceof Error&&j.message==="probe"&&j.stack){let H=S2(j.stack);if(H)B={fileName:k2(H.fileName),lineNumber:H.line,columnNumber:H.column,componentName:sJ(G)||void 0}}}}finally{z.set(J)}return KB.set(Z,B),B}function P2(G,Z=15){let z=G,J=0;while(z&&J<Z){let B=b2(z);if(B)return B;z=z.return,J++}return null}function cY(G){let Z=T2(G);if(!Z)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let z=N2(Z);if(!z)z=$2(Z);if(z?.source)return{found:!0,source:{fileName:z.source.fileName,lineNumber:z.source.lineNumber,columnNumber:z.source.columnNumber,componentName:z.componentName||void 0},isReactApp:!0,isProduction:!1};let J=P2(Z);if(J)return{found:!0,source:J,isReactApp:!0,isProduction:!1};return{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function E2(G,Z="path"){let{fileName:z,lineNumber:J,columnNumber:B}=G,Y=`${z}:${J}`;if(B!==void 0)Y+=`:${B}`;if(Z==="vscode")return`vscode://file${z.startsWith("/")?"":"/"}${Y}`;return Y}function h2(G,Z=10){let z=G,J=0;while(z&&J<Z){let B=cY(z);if(B.found)return B;z=z.parentElement,J++}return cY(G)}var g2=`.styles-module__toolbar___wNsdK svg[fill=none],
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
}`,y2={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let G=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");if(!G)G=document.createElement("style"),G.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(G);G.textContent=g2}var u=y2,lJ=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function vX(G,Z,z="standard"){if(G.length===0)return"";let J=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown",B=`## Page Feedback: ${Z}
`;if(z==="forensic"){if(B+=`
**Environment:**
`,B+=`- Viewport: ${J}
`,typeof window<"u")B+=`- URL: ${window.location.href}
`,B+=`- User Agent: ${navigator.userAgent}
`,B+=`- Timestamp: ${new Date().toISOString()}
`,B+=`- Device Pixel Ratio: ${window.devicePixelRatio}
`;B+=`
---
`}else if(z!=="compact")B+=`**Viewport:** ${J}
`;return B+=`
`,G.forEach((Y,j)=>{if(z==="compact"){if(B+=`${j+1}. **${Y.element}**${Y.sourceFile?` (${Y.sourceFile})`:""}: ${Y.comment}`,Y.selectedText)B+=` (re: "${Y.selectedText.slice(0,30)}${Y.selectedText.length>30?"...":""}")`;B+=`
`}else if(z==="forensic"){if(B+=`### ${j+1}. ${Y.element}
`,Y.isMultiSelect&&Y.fullPath)B+=`*Forensic data shown for first element of selection*
`;if(Y.fullPath)B+=`**Full DOM Path:** ${Y.fullPath}
`;if(Y.cssClasses)B+=`**CSS Classes:** ${Y.cssClasses}
`;if(Y.boundingBox)B+=`**Position:** x:${Math.round(Y.boundingBox.x)}, y:${Math.round(Y.boundingBox.y)} (${Math.round(Y.boundingBox.width)}×${Math.round(Y.boundingBox.height)}px)
`;if(B+=`**Annotation at:** ${Y.x.toFixed(1)}% from left, ${Math.round(Y.y)}px from top
`,Y.selectedText)B+=`**Selected text:** "${Y.selectedText}"
`;if(Y.nearbyText&&!Y.selectedText)B+=`**Context:** ${Y.nearbyText.slice(0,100)}
`;if(Y.computedStyles)B+=`**Computed Styles:** ${Y.computedStyles}
`;if(Y.accessibility)B+=`**Accessibility:** ${Y.accessibility}
`;if(Y.nearbyElements)B+=`**Nearby Elements:** ${Y.nearbyElements}
`;if(Y.sourceFile)B+=`**Source:** ${Y.sourceFile}
`;if(Y.reactComponents)B+=`**React:** ${Y.reactComponents}
`;B+=`**Feedback:** ${Y.comment}

`}else{if(B+=`### ${j+1}. ${Y.element}
`,B+=`**Location:** ${Y.elementPath}
`,Y.sourceFile)B+=`**Source:** ${Y.sourceFile}
`;if(Y.reactComponents)B+=`**React:** ${Y.reactComponents}
`;if(z==="detailed"){if(Y.cssClasses)B+=`**Classes:** ${Y.cssClasses}
`;if(Y.boundingBox)B+=`**Position:** ${Math.round(Y.boundingBox.x)}px, ${Math.round(Y.boundingBox.y)}px (${Math.round(Y.boundingBox.width)}×${Math.round(Y.boundingBox.height)}px)
`}if(Y.selectedText)B+=`**Selected text:** "${Y.selectedText}"
`;if(z==="detailed"&&Y.nearbyText&&!Y.selectedText)B+=`**Context:** ${Y.nearbyText.slice(0,100)}
`;B+=`**Feedback:** ${Y.comment}

`}}),B.trim()}var v2=`@keyframes styles-module__markerIn___x4G8D {
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
}`,u2={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",markerIn:"styles-module__markerIn___x4G8D",markerOut:"styles-module__markerOut___6VhQN",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",renumberRoll:"styles-module__renumberRoll___akV9B",markerTooltip:"styles-module__markerTooltip___-VUm-",tooltipIn:"styles-module__tooltipIn___aJslQ",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let G=document.getElementById("feedback-tool-styles-annotation-marker-styles");if(!G)G=document.createElement("style"),G.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(G);G.textContent=v2}var dG=u2;function uX({annotation:G,globalIndex:Z,layerIndex:z,layerSize:J,isExiting:B,isClearing:Y,isAnimated:j,isHovered:H,isDeleting:X,isEditingAny:F,renumberFrom:Q,markerClickBehavior:R,tooltipStyle:A,onHoverEnter:D,onHoverLeave:f,onClick:S,onContextMenu:C}){let _=(H||X)&&!F,M=_&&R==="delete",K=G.isMultiSelect,N=K?"var(--agentation-color-green)":"var(--agentation-color-accent)",p=B?dG.exit:Y?dG.clearing:!j?dG.enter:"",B0=B?`${(J-1-z)*20}ms`:`${z*20}ms`;return SZ.jsxs("div",{className:`${dG.marker} ${K?dG.multiSelect:""} ${p} ${M?dG.hovered:""}`,"data-annotation-marker":!0,style:{left:`${G.x}%`,top:G.y,backgroundColor:M?void 0:N,animationDelay:B0},onMouseEnter:()=>D(G),onMouseLeave:f,onClick:(b)=>{if(b.stopPropagation(),!B)S(G)},onContextMenu:C?(b)=>{if(R==="delete"){if(b.preventDefault(),b.stopPropagation(),!B)C(G)}}:void 0,children:[_?M?SZ.jsx(iX,{size:K?18:16}):SZ.jsx(e_,{size:16}):SZ.jsx("span",{className:Q!==null&&Z>=Q?dG.renumber:void 0,children:Z+1}),H&&!F&&SZ.jsxs("div",{className:`${dG.markerTooltip} ${dG.enter}`,style:A,children:[SZ.jsxs("span",{className:dG.markerQuote,children:[G.element,G.selectedText&&` "${G.selectedText.slice(0,30)}${G.selectedText.length>30?"...":""}"`]}),SZ.jsx("span",{className:dG.markerNote,children:G.comment})]})]})}function m2({x:G,y:Z,isMultiSelect:z,isExiting:J}){return SZ.jsx("div",{className:`${dG.marker} ${dG.pending} ${z?dG.multiSelect:""} ${J?dG.exit:dG.enter}`,style:{left:`${G}%`,top:Z,backgroundColor:z?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:SZ.jsx(m_,{size:12})})}function mX({annotation:G,fixed:Z}){let z=G.isMultiSelect;return SZ.jsx("div",{className:`${dG.marker} ${Z?dG.fixed:""} ${dG.hovered} ${z?dG.multiSelect:""} ${dG.exit}`,"data-annotation-marker":!0,style:{left:`${G.x}%`,top:G.y},children:SZ.jsx(iX,{size:z?12:10})})}var d2=`.styles-module__switchContainer___Ka-AB {
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
}`,c2={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let G=document.getElementById("feedback-tool-styles-switch-styles");if(!G)G=document.createElement("style"),G.id="feedback-tool-styles-switch-styles",document.head.appendChild(G);G.textContent=d2}var SY=c2,kY=({className:G="",...Z})=>{return rJ.jsxs("div",{className:`${SY.switchContainer} ${G}`,children:[rJ.jsx("input",{className:SY.switchInput,type:"checkbox",...Z}),rJ.jsx("div",{className:SY.switchThumb})]})},l2=`.styles-module__checkboxContainer___joqZk {
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
}`,p2={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let G=document.getElementById("feedback-tool-styles-checkbox-styles");if(!G)G=document.createElement("style"),G.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(G);G.textContent=l2}var IB=p2,i2=({className:G="",...Z})=>{return bz.jsxs("div",{className:`${IB.checkboxContainer} ${G}`,children:[bz.jsx("input",{className:IB.checkboxInput,type:"checkbox",...Z}),bz.jsx("svg",{className:IB.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:bz.jsx("path",{className:IB.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})},s2=`.styles-module__container___w8eAF {
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
}`,r2={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let G=document.getElementById("feedback-tool-styles-checkbox-field-styles");if(!G)G=document.createElement("style"),G.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(G);G.textContent=s2}var dX=r2,cX=({className:G="",label:Z,tooltip:z,checked:J,onChange:B,...Y})=>{let j=qq.useId();return Pz.jsxs("div",{className:`${dX.container} ${G}`,...Y,children:[Pz.jsx(i2,{id:j,onChange:B,checked:J}),Pz.jsx("label",{className:dX.label,htmlFor:j,children:Z}),z&&Pz.jsx(r6,{content:z})]})},o2=`@keyframes styles-module__cycleTextIn___VBNTi {
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
}`,a2={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let G=document.getElementById("feedback-tool-styles-settings-panel-styles");if(!G)G=document.createElement("style"),G.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(G);G.textContent=o2}var z0=a2;function n2({settings:G,onSettingsChange:Z,isDarkMode:z,onToggleTheme:J,isDevMode:B,connectionStatus:Y,endpoint:j,isVisible:H,toolbarNearBottom:X,settingsPage:F,onSettingsPageChange:Q,onHideToolbar:R}){return o.jsx("div",{className:`${z0.settingsPanel} ${H?z0.enter:z0.exit}`,style:X?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:o.jsxs("div",{className:z0.settingsPanelContainer,children:[o.jsxs("div",{className:`${z0.settingsPage} ${F==="automations"?z0.slideLeft:""}`,children:[o.jsxs("div",{className:z0.settingsHeader,children:[o.jsx("a",{className:z0.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:o.jsx("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),o.jsxs("p",{className:z0.settingsVersion,children:["v","3.0.2"]}),o.jsx("button",{className:z0.themeToggle,onClick:J,title:z?"Switch to light mode":"Switch to dark mode",children:o.jsx("span",{className:z0.themeIconWrapper,children:o.jsx("span",{className:z0.themeIcon,children:z?o.jsx(n_,{size:20}):o.jsx(t_,{size:20})},z?"sun":"moon")})})]}),o.jsx("div",{className:z0.divider}),o.jsxs("div",{className:z0.settingsSection,children:[o.jsxs("div",{className:z0.settingsRow,children:[o.jsxs("div",{className:z0.settingsLabel,children:["Output Detail",o.jsx(r6,{content:"Controls how much detail is included in the copied output"})]}),o.jsxs("button",{className:z0.cycleButton,onClick:()=>{let D=(lJ.findIndex((f)=>f.value===G.outputDetail)+1)%lJ.length;Z({outputDetail:lJ[D].value})},children:[o.jsx("span",{className:z0.cycleButtonText,children:lJ.find((A)=>A.value===G.outputDetail)?.label},G.outputDetail),o.jsx("span",{className:z0.cycleDots,children:lJ.map((A)=>o.jsx("span",{className:`${z0.cycleDot} ${G.outputDetail===A.value?z0.active:""}`},A.value))})]})]}),o.jsxs("div",{className:`${z0.settingsRow} ${z0.settingsRowMarginTop} ${!B?z0.settingsRowDisabled:""}`,children:[o.jsxs("div",{className:z0.settingsLabel,children:["React Components",o.jsx(r6,{content:!B?"Disabled — production builds minify component names, making detection unreliable. Use in development mode.":"Include React component names in annotations"})]}),o.jsx(kY,{checked:B&&G.reactEnabled,onChange:(A)=>Z({reactEnabled:A.target.checked}),disabled:!B})]}),o.jsxs("div",{className:`${z0.settingsRow} ${z0.settingsRowMarginTop}`,children:[o.jsxs("div",{className:z0.settingsLabel,children:["Hide Until Restart",o.jsx(r6,{content:"Hides the toolbar until you open a new tab"})]}),o.jsx(kY,{checked:!1,onChange:(A)=>{if(A.target.checked)R()}})]})]}),o.jsx("div",{className:z0.divider}),o.jsxs("div",{className:z0.settingsSection,children:[o.jsx("div",{className:`${z0.settingsLabel} ${z0.settingsLabelMarker}`,children:"Marker Color"}),o.jsx("div",{className:z0.colorOptions,children:iJ.map((A)=>o.jsx("button",{className:`${z0.colorOption} ${G.annotationColorId===A.id?z0.selected:""}`,style:{"--swatch":A.srgb,"--swatch-p3":A.p3},onClick:()=>Z({annotationColorId:A.id}),title:A.label,type:"button"},A.id))})]}),o.jsx("div",{className:z0.divider}),o.jsxs("div",{className:z0.settingsSection,children:[o.jsx(cX,{className:"checkbox-field",label:"Clear on copy/send",checked:G.autoClearAfterCopy,onChange:(A)=>Z({autoClearAfterCopy:A.target.checked}),tooltip:"Automatically clear annotations after copying"}),o.jsx(cX,{className:z0.checkboxField,label:"Block page interactions",checked:G.blockInteractions,onChange:(A)=>Z({blockInteractions:A.target.checked})})]}),o.jsx("div",{className:z0.divider}),o.jsxs("button",{className:z0.settingsNavLink,onClick:()=>Q("automations"),children:[o.jsx("span",{children:"Manage MCP & Webhooks"}),o.jsxs("span",{className:z0.settingsNavLinkRight,children:[j&&Y!=="disconnected"&&o.jsx("span",{className:`${z0.mcpNavIndicator} ${z0[Y]}`}),o.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),o.jsxs("div",{className:`${z0.settingsPage} ${z0.automationsPage} ${F==="automations"?z0.slideIn:""}`,children:[o.jsxs("button",{className:z0.settingsBackButton,onClick:()=>Q("main"),children:[o.jsx(ZL,{size:16}),o.jsx("span",{children:"Manage MCP & Webhooks"})]}),o.jsx("div",{className:z0.divider}),o.jsxs("div",{className:z0.settingsSection,children:[o.jsxs("div",{className:z0.settingsRow,children:[o.jsxs("span",{className:z0.automationHeader,children:["MCP Connection",o.jsx(r6,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),j&&o.jsx("div",{className:`${z0.mcpStatusDot} ${z0[Y]}`,title:Y==="connected"?"Connected":Y==="connecting"?"Connecting...":"Disconnected"})]}),o.jsxs("p",{className:z0.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",o.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:z0.learnMoreLink,children:"Learn more"})]})]}),o.jsx("div",{className:z0.divider}),o.jsxs("div",{className:`${z0.settingsSection} ${z0.settingsSectionGrow}`,children:[o.jsxs("div",{className:z0.settingsRow,children:[o.jsxs("span",{className:z0.automationHeader,children:["Webhooks",o.jsx(r6,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),o.jsxs("div",{className:z0.autoSendContainer,children:[o.jsx("label",{htmlFor:"agentation-auto-send",className:`${z0.autoSendLabel} ${G.webhooksEnabled?z0.active:""} ${!G.webhookUrl?z0.disabled:""}`,children:"Auto-Send"}),o.jsx(kY,{id:"agentation-auto-send",checked:G.webhooksEnabled,onChange:(A)=>Z({webhooksEnabled:A.target.checked}),disabled:!G.webhookUrl})]})]}),o.jsx("p",{className:z0.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),o.jsx("textarea",{className:z0.webhookUrlInput,placeholder:"Webhook URL",value:G.webhookUrl,onKeyDown:(A)=>A.stopPropagation(),onChange:(A)=>Z({webhookUrl:A.target.value})})]})]})]})})}function bY(G,Z="filtered"){let{name:z,path:J}=kz(G);if(Z==="off")return{name:z,elementName:z,path:J,reactComponents:null};let B=f2(G,{mode:Z});return{name:B.path?`${B.path} ${z}`:z,elementName:z,path:J,reactComponents:B.path}}var lX=!1,PY={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},I7=(G)=>{if(!G||!G.trim())return!1;try{let Z=new URL(G.trim());return Z.protocol==="http:"||Z.protocol==="https:"}catch{return!1}},t2={compact:"off",standard:"filtered",detailed:"smart",forensic:"all"},iJ=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],e2=()=>{if(typeof document>"u")return;if(document.getElementById("agentation-color-tokens"))return;let G=document.createElement("style");G.id="agentation-color-tokens",G.textContent=[...iJ.map((Z)=>`
      [data-agentation-accent="${Z.id}"] {
        --agentation-color-accent: ${Z.srgb};
      }

      @supports (color: color(display-p3 0 0 0)) {
        [data-agentation-accent="${Z.id}"] {
          --agentation-color-accent: ${Z.p3};
        }
      }
    `),`:root {
      ${iJ.map((Z)=>`--agentation-color-${Z.id}: ${Z.srgb};`).join(`
`)}
    }`,`@supports (color: color(display-p3 0 0 0)) {
      :root {
        ${iJ.map((Z)=>`--agentation-color-${Z.id}: ${Z.p3};`).join(`
`)}
      }
    }`].join(""),document.head.appendChild(G)};e2();function i6(G,Z){let z=document.elementFromPoint(G,Z);if(!z)return null;while(z?.shadowRoot){let J=z.shadowRoot.elementFromPoint(G,Z);if(!J||J===z)break;z=J}return z}function EY(G){let Z=G;while(Z&&Z!==document.body){let J=window.getComputedStyle(Z).position;if(J==="fixed"||J==="sticky")return!0;Z=Z.parentElement}return!1}function s6(G){return G.status!=="resolved"&&G.status!=="dismissed"}function fB(G){let Z=cY(G),z=Z.found?Z:h2(G);if(z.found&&z.source)return E2(z.source,"path");return}function Wq({demoAnnotations:G,demoDelay:Z=1000,enableDemoMode:z=!1,onAnnotationAdd:J,onAnnotationDelete:B,onAnnotationUpdate:Y,onAnnotationsClear:j,onCopy:H,onSubmit:X,copyToClipboard:F=!0,endpoint:Q,sessionId:R,onSessionCreated:A,webhookUrl:D,className:f}={}){let[S,C]=$.useState(!1),[_,M]=$.useState([]),[K,N]=$.useState(!0),[p,B0]=$.useState(()=>U2()),[b,a]=$.useState(!1),G0=$.useRef(null);$.useEffect(()=>{let U=(w)=>{let V=G0.current;if(V&&V.contains(w.target))w.stopPropagation()},O=["mousedown","click","pointerdown"];return O.forEach((w)=>document.body.addEventListener(w,U)),()=>{O.forEach((w)=>document.body.removeEventListener(w,U))}},[]);let[n,_0]=$.useState(!1),[GG,QG]=$.useState(!1),[P0,c0]=$.useState(null),[N0,e0]=$.useState({x:0,y:0}),[i,O0]=$.useState(null),[o0,EG]=$.useState(!1),[wZ,_Z]=$.useState("idle"),[J6,dZ]=$.useState(!1),[B6,B7]=$.useState(!1),[b7,Y6]=$.useState(null),[g6,xZ]=$.useState(null),[Y7,VZ]=$.useState([]),[O7,M7]=$.useState(null),[Fz,j7]=$.useState(null),[E0,c]=$.useState(null),[U0,F0]=$.useState(null),[k0,R0]=$.useState([]),[ZG,jG]=$.useState(0),[a0,v0]=$.useState(!1),[L0,T]=$.useState(!1),[x,g]=$.useState(!1),[v,t]=$.useState(!1),[Y0,d]=$.useState(!1),[H0,f0]=$.useState("main"),[l0,zG]=$.useState(!1),[X0,HG]=$.useState(!1),[h0,$0]=$.useState(!1),[q0,XG]=$.useState([]),[s0,C0]=$.useState(null),n0=$.useRef(!1),[w0,VG]=$.useState(!1),[ZZ,cZ]=$.useState(!1),[F7,DZ]=$.useState(1),[P7,t8]=$.useState("new-page"),[vG,E7]=$.useState(""),[e8,yQ]=$.useState(!1),[I0,lZ]=$.useState(null),zY=$.useRef(!1),JY=$.useRef({rearrange:null,placements:[]}),y6=$.useRef({rearrange:null,placements:[]}),[vQ,$H]=$.useState(0),[uQ,mQ]=$.useState(0),[dQ,BY]=$.useState(0),[cQ,CH]=$.useState(0),NJ=$.useRef(new Set),GB=$.useRef(new Set),H7=$.useRef(null),ZB=$.useRef(),xH=X0&&S&&!h0&&w0;$.useEffect(()=>{if(xH){cZ(!1);let U=Sz(()=>{cZ(!0)});return()=>cancelAnimationFrame(U)}else cZ(!1)},[xH]);let $J=$.useRef(new Map),CJ=$.useRef(new Map),xJ=$.useRef(),[X7,YY]=$.useState(!1),[pZ,lQ]=$.useState([]),pQ=$.useRef(pZ);pQ.current=pZ;let[SH,$M]=$.useState(null),jY=$.useRef(null),CM=$.useRef(!1),xM=$.useRef([]),SM=$.useRef(0),kM=$.useRef(null),bM=$.useRef(null),PM=$.useRef(1),[kH,bH]=$.useState(!1),Rz=$.useRef(null),[pG,wz]=$.useState([]),R7=$.useRef({cmd:!1,shift:!1}),UZ=()=>{zG(!0)},iQ=()=>{zG(!1)},sQ=()=>{if(!kH)Rz.current=Q0(()=>bH(!0),850)},rQ=()=>{if(Rz.current)clearTimeout(Rz.current),Rz.current=null;bH(!1),iQ()};$.useEffect(()=>{return()=>{if(Rz.current)clearTimeout(Rz.current)}},[]);let[g0,oQ]=$.useState(()=>{try{let U=JSON.parse(localStorage.getItem("feedback-toolbar-settings")??"");return{...PY,...U,annotationColorId:iJ.find((O)=>O.id===U.annotationColorId)?U.annotationColorId:PY.annotationColorId}}catch{return PY}}),[w7,PH]=$.useState(!0),[EH,hH]=$.useState(!1),aQ=()=>{G0.current?.classList.add(u.disableTransitions),PH((U)=>!U),Sz(()=>{G0.current?.classList.remove(u.disableTransitions)})},gH=!1,v6=gH&&g0.reactEnabled?t2[g0.outputDetail]:"off",[nG,HY]=$.useState(R??null),yH=$.useRef(!1),[q7,u6]=$.useState(Q?"connecting":"disconnected"),[SG,XY]=$.useState(null),[m6,vH]=$.useState(!1),[Vz,uH]=$.useState(null),qY=$.useRef(!1),[mH,SJ]=$.useState(new Set),[dH,zB]=$.useState(new Set),[kJ,JB]=$.useState(!1),[nQ,Dz]=$.useState(!1),[h7,cH]=$.useState(!1),Kz=$.useRef(null),V7=$.useRef(null),bJ=$.useRef(null),PJ=$.useRef(null),BB=$.useRef(!1),lH=$.useRef(0),YB=$.useRef(null),pH=$.useRef(null),WY=8,tQ=50,iH=$.useRef(null),sH=$.useRef(null),EJ=$.useRef(null),M0=typeof window<"u"?window.location.pathname:"/";$.useEffect(()=>{if(v)d(!0);else{zG(!1),f0("main");let U=Q0(()=>d(!1),0);return()=>clearTimeout(U)}},[v]);let UY=S&&K&&!X0;$.useEffect(()=>{if(UY){QG(!1),_0(!0),SJ(new Set);let U=Q0(()=>{SJ((O)=>{let w=new Set(O);return _.forEach((V)=>w.add(V.id)),w})},350);return()=>clearTimeout(U)}else if(n){QG(!0);let U=Q0(()=>{_0(!1),QG(!1)},250);return()=>clearTimeout(U)}},[UY]),$.useEffect(()=>{T(!0),jG(window.scrollY);let U=pJ(M0);if(M(U.filter(s6)),!lX)hH(!0),lX=!0,Q0(()=>hH(!1),750);try{let O=localStorage.getItem("feedback-toolbar-theme");if(O!==null)PH(O==="dark")}catch(O){}try{let O=localStorage.getItem("feedback-toolbar-position");if(O){let w=JSON.parse(O);if(typeof w.x==="number"&&typeof w.y==="number")XY(w)}}catch(O){}},[M0]),$.useEffect(()=>{if(L0)localStorage.setItem("feedback-toolbar-settings",JSON.stringify(g0))},[g0,L0]),$.useEffect(()=>{if(L0)localStorage.setItem("feedback-toolbar-theme",w7?"dark":"light")},[w7,L0]);let rH=$.useRef(!1);$.useEffect(()=>{let U=rH.current;if(rH.current=m6,U&&!m6&&SG&&L0)localStorage.setItem("feedback-toolbar-position",JSON.stringify(SG))},[m6,SG,L0]),$.useEffect(()=>{if(!Q||!L0||yH.current)return;yH.current=!0,u6("connecting"),(async()=>{try{let O=q2(M0),w=R||O,V=!1;if(w)try{let I=await EX(Q,w);HY(I.id),u6("connected"),$Y(M0,I.id),V=!0;let E=pJ(M0),l=new Set(I.annotations.map((J0)=>J0.id)),r=E.filter((J0)=>{if(l.has(J0.id))return!1;return!0});if(r.length>0){let j0=`${typeof window<"u"?window.location.origin:""}${M0}`,T0=(await Promise.allSettled(r.map((A0)=>Cz(Q,I.id,{...A0,sessionId:I.id,url:j0})))).map((A0,Z0)=>{if(A0.status==="fulfilled")return A0.value;return console.warn("[Agentation] Failed to sync annotation:",A0.reason),r[Z0]}),u0=[...I.annotations,...T0];M(u0.filter(s6)),mJ(M0,u0.filter(s6),I.id)}else M(I.annotations.filter(s6)),mJ(M0,I.annotations.filter(s6),I.id)}catch(I){console.warn("[Agentation] Could not join session, creating new:",I),W2(M0)}if(!V){let I=typeof window<"u"?window.location.href:"/",E=await CY(Q,I);HY(E.id),u6("connected"),$Y(M0,E.id),A?.(E.id);let l=Z2(),r=typeof window<"u"?window.location.origin:"",J0=[];for(let[j0,W0]of l){let T0=W0.filter((Z0)=>!Z0._syncedTo);if(T0.length===0)continue;let u0=`${r}${j0}`,A0=j0===M0;J0.push((async()=>{try{let Z0=A0?E:await CY(Q,u0),tG=(await Promise.allSettled(T0.map((qG)=>Cz(Q,Z0.id,{...qG,sessionId:Z0.id,url:u0})))).map((qG,mG)=>{if(qG.status==="fulfilled")return qG.value;return console.warn("[Agentation] Failed to sync annotation:",qG.reason),T0[mG]}).filter(s6);if(mJ(j0,tG,Z0.id),A0){let qG=new Set(T0.map((mG)=>mG.id));M((mG)=>{let V0=mG.filter((x0)=>!qG.has(x0.id));return[...tG,...V0]})}}catch(Z0){console.warn(`[Agentation] Failed to sync annotations for ${j0}:`,Z0)}})())}await Promise.allSettled(J0)}}catch(O){u6("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",O)}})()},[Q,R,L0,A,M0]),$.useEffect(()=>{if(!Q||!L0)return;let U=async()=>{try{if((await fetch(`${Q}/health`)).ok)u6("connected");else u6("disconnected")}catch{u6("disconnected")}};U();let O=BL(U,1e4);return()=>clearInterval(O)},[Q,L0]),$.useEffect(()=>{if(!Q||!L0||!nG)return;let U=new EventSource(`${Q}/sessions/${nG}/events`),O=["resolved","dismissed"],w=(V)=>{try{let I=JSON.parse(V.data);if(O.includes(I.payload?.status)){let E=I.payload.id,l=I.payload.kind;if(l==="placement"){for(let[r,J0]of $J.current)if(J0===E){$J.current.delete(r),XG((j0)=>j0.filter((W0)=>W0.id!==r));break}}else if(l==="rearrange"){for(let[r,J0]of CJ.current)if(J0===E){CJ.current.delete(r),lZ((j0)=>{if(!j0)return null;let W0=j0.sections.filter((T0)=>T0.id!==r);if(W0.length===0)return null;return{...j0,sections:W0}});break}}else zB((r)=>new Set(r).add(E)),Q0(()=>{M((r)=>r.filter((J0)=>J0.id!==E)),zB((r)=>{let J0=new Set(r);return J0.delete(E),J0})},150)}}catch{}};return U.addEventListener("annotation.updated",w),()=>{U.removeEventListener("annotation.updated",w),U.close()}},[Q,L0,nG]),$.useEffect(()=>{if(!Q||!L0)return;let U=pH.current==="disconnected",O=q7==="connected";if(pH.current=q7,U&&O)(async()=>{try{let V=pJ(M0);if(V.length===0)return;let E=`${typeof window<"u"?window.location.origin:""}${M0}`,l=nG,r=[];if(l)try{r=(await EX(Q,l)).annotations}catch{l=null}if(!l)l=(await CY(Q,E)).id,HY(l),$Y(M0,l);let J0=new Set(r.map((W0)=>W0.id)),j0=V.filter((W0)=>!J0.has(W0.id));if(j0.length>0){let T0=(await Promise.allSettled(j0.map((Z0)=>Cz(Q,l,{...Z0,sessionId:l,url:E})))).map((Z0,uG)=>{if(Z0.status==="fulfilled")return Z0.value;return console.warn("[Agentation] Failed to sync annotation on reconnect:",Z0.reason),j0[uG]}),A0=[...r,...T0].filter(s6);M(A0),mJ(M0,A0,l)}}catch(V){console.warn("[Agentation] Failed to sync on reconnect:",V)}})()},[q7,Q,L0,nG,M0]);let eQ=$.useCallback(()=>{if(b)return;a(!0),t(!1),C(!1),Q0(()=>{A2(!0),B0(!0),a(!1)},400)},[b]);$.useEffect(()=>{if(!z)return;if(!L0||!G||G.length===0)return;if(_.length>0)return;let U=[];return U.push(Q0(()=>{C(!0)},Z-200)),G.forEach((O,w)=>{let V=Z+w*300;U.push(Q0(()=>{let I=document.querySelector(O.selector);if(!I)return;let E=I.getBoundingClientRect(),{name:l,path:r}=kz(I),J0={id:`demo-${Date.now()}-${w}`,x:(E.left+E.width/2)/window.innerWidth*100,y:E.top+E.height/2+window.scrollY,comment:O.comment,element:l,elementPath:r,timestamp:Date.now(),selectedText:O.selectedText,boundingBox:{x:E.left,y:E.top+window.scrollY,width:E.width,height:E.height},nearbyText:vJ(I),cssClasses:uJ(I)};M((j0)=>[...j0,J0])},V))}),()=>{U.forEach(clearTimeout)}},[z,L0,G,Z]),$.useEffect(()=>{let U=()=>{if(jG(window.scrollY),v0(!0),EJ.current)clearTimeout(EJ.current);EJ.current=Q0(()=>{v0(!1)},150)};return window.addEventListener("scroll",U,{passive:!0}),()=>{if(window.removeEventListener("scroll",U),EJ.current)clearTimeout(EJ.current)}},[]),$.useEffect(()=>{if(L0&&_.length>0)if(nG)mJ(M0,_,nG);else jq(M0,_);else if(L0&&_.length===0)localStorage.removeItem($B(M0))},[_,M0,L0,nG]),$.useEffect(()=>{if(L0&&!n0.current){n0.current=!0;let U=z2(M0);if(U.length>0)XG(U)}},[L0,M0]),$.useEffect(()=>{if(L0&&n0.current&&!w0)if(q0.length>0)J2(M0,q0);else B2(M0)},[q0,M0,L0,w0]),$.useEffect(()=>{if(L0&&!zY.current){zY.current=!0;let U=Y2(M0);if(U){let O={...U,sections:U.sections.map((w)=>({...w,currentRect:w.currentRect??{...w.originalRect}}))};lZ(O)}}},[L0,M0]),$.useEffect(()=>{if(L0&&zY.current&&!w0)if(I0)j2(M0,I0);else H2(M0)},[I0,M0,L0,w0]);let AY=$.useRef(!1);$.useEffect(()=>{if(L0&&!AY.current){AY.current=!0;let U=X2(M0);if(U){if(y6.current={rearrange:U.rearrange,placements:U.placements||[]},U.purpose)E7(U.purpose)}}},[L0,M0]),$.useEffect(()=>{if(!L0||!AY.current)return;let U=y6.current;if(w0)if((I0?.sections?.length??0)>0||q0.length>0||vG)PX(M0,{rearrange:I0,placements:q0,purpose:vG});else DB(M0);else if((U.rearrange?.sections?.length??0)>0||U.placements.length>0||vG)PX(M0,{rearrange:U.rearrange,placements:U.placements,purpose:vG});else DB(M0)},[I0,q0,vG,w0,M0,L0]),$.useEffect(()=>{if(X0&&!I0)lZ({sections:[],originalOrder:[],detectedAt:Date.now()})},[X0,I0]),$.useEffect(()=>{if(!Q||!nG)return;let U=$J.current,O=new Set(q0.map((w)=>w.id));for(let w of q0){if(U.has(w.id))continue;U.set(w.id,"");let V=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:M0;Cz(Q,nG,{id:w.id,x:w.x/window.innerWidth*100,y:w.y,comment:`Place ${w.type} at (${Math.round(w.x)}, ${Math.round(w.y)}), ${w.width}×${w.height}px${w.text?` — "${w.text}"`:""}`,element:`[design:${w.type}]`,elementPath:"[placement]",timestamp:w.timestamp,url:V,intent:"change",severity:"important",kind:"placement",placement:{componentType:w.type,width:w.width,height:w.height,scrollY:w.scrollY,text:w.text}}).then((I)=>{if(U.has(w.id))U.set(w.id,I.id)}).catch((I)=>{console.warn("[Agentation] Failed to sync placement annotation:",I),U.delete(w.id)})}for(let[w,V]of U)if(!O.has(w)){if(U.delete(w),V)q6(Q,V).catch(()=>{})}},[q0,Q,nG,M0]),$.useEffect(()=>{if(!Q||!nG)return;if(xJ.current)clearTimeout(xJ.current);return xJ.current=Q0(()=>{let U=CJ.current;if(!I0||I0.sections.length===0){for(let[,V]of U)if(V)q6(Q,V).catch(()=>{});U.clear();return}let O=new Set(I0.sections.map((V)=>V.id)),w=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:M0;for(let V of I0.sections){let{originalRect:I,currentRect:E}=V;if(!(Math.abs(I.x-E.x)>1||Math.abs(I.y-E.y)>1||Math.abs(I.width-E.width)>1||Math.abs(I.height-E.height)>1)){let J0=U.get(V.id);if(J0)U.delete(V.id),q6(Q,J0).catch(()=>{});continue}let r=U.get(V.id);if(r)hX(Q,r,{comment:`Move ${V.label} section (${V.tagName}) — from (${Math.round(I.x)},${Math.round(I.y)}) ${Math.round(I.width)}×${Math.round(I.height)} to (${Math.round(E.x)},${Math.round(E.y)}) ${Math.round(E.width)}×${Math.round(E.height)}`}).catch((J0)=>{console.warn("[Agentation] Failed to update rearrange annotation:",J0)});else U.set(V.id,""),Cz(Q,nG,{id:V.id,x:E.x/window.innerWidth*100,y:E.y,comment:`Move ${V.label} section (${V.tagName}) — from (${Math.round(I.x)},${Math.round(I.y)}) ${Math.round(I.width)}×${Math.round(I.height)} to (${Math.round(E.x)},${Math.round(E.y)}) ${Math.round(E.width)}×${Math.round(E.height)}`,element:V.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:w,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:V.selector,label:V.label,tagName:V.tagName,originalRect:I,currentRect:E}}).then((J0)=>{if(U.has(V.id))U.set(V.id,J0.id)}).catch((J0)=>{console.warn("[Agentation] Failed to sync rearrange annotation:",J0),U.delete(V.id)})}for(let[V,I]of U)if(!O.has(V)){if(U.delete(V),I)q6(Q,I).catch(()=>{})}},300),()=>{if(xJ.current)clearTimeout(xJ.current)}},[I0,Q,nG,M0]);let Iz=$.useRef(new Map);$.useLayoutEffect(()=>{let U=I0?.sections??[],O=new Set;if((X0||h0)&&S)for(let w of U){O.add(w.id);try{let V=document.querySelector(w.selector);if(!V)continue;if(!Iz.current.has(w.id)){let I={transform:V.style.transform,transformOrigin:V.style.transformOrigin,opacity:V.style.opacity,position:V.style.position,zIndex:V.style.zIndex,display:V.style.display},E=[],l=V.parentElement;while(l&&l!==document.body){let J0=getComputedStyle(l);if(J0.overflow!=="visible"||J0.overflowX!=="visible"||J0.overflowY!=="visible")E.push({el:l,overflow:l.style.overflow}),l.style.overflow="visible";l=l.parentElement}if(getComputedStyle(V).display==="inline")V.style.display="inline-block";Iz.current.set(w.id,{el:V,origStyles:I,ancestors:E}),V.style.transformOrigin="top left",V.style.zIndex="9999"}}catch{}}for(let[w,V]of Iz.current)if(!O.has(w)){let{el:I,origStyles:E,ancestors:l}=V;I.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",I.style.transform=E.transform,I.style.transformOrigin=E.transformOrigin,I.style.opacity=E.opacity,I.style.position=E.position,I.style.zIndex=E.zIndex,Iz.current.delete(w),Q0(()=>{I.style.transition="",I.style.display=E.display;for(let r of l)r.el.style.overflow=r.overflow},450)}},[I0,X0,h0,S]),$.useEffect(()=>{return()=>{for(let[,U]of Iz.current){let{el:O,origStyles:w,ancestors:V}=U;O.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",O.style.transform=w.transform,O.style.transformOrigin=w.transformOrigin,O.style.opacity=w.opacity,O.style.position=w.position,O.style.zIndex=w.zIndex,Q0(()=>{O.style.transition="",O.style.display=w.display;for(let I of V)I.el.style.overflow=I.overflow},450)}Iz.current.clear()}},[]);let jB=$.useCallback(()=>{$0(!0),HG(!1),C0(null),clearTimeout(ZB.current),ZB.current=Q0(()=>{$0(!1)},300)},[]),oH=$.useCallback(()=>{if(X0)$0(!0),HG(!1),C0(null),clearTimeout(ZB.current),ZB.current=Q0(()=>{$0(!1)},300);C(!1)},[X0]),aH=$.useCallback(()=>{if(x)return;jL(),g(!0)},[x]),HB=$.useCallback(()=>{if(!x)return;wX(),g(!1)},[x]),QY=$.useCallback(()=>{if(x)HB();else aH()},[x,aH,HB]),nH=$.useCallback(()=>{if(pG.length===0)return;let U=pG[0],O=U.element,w=pG.length>1,V=pG.map((I)=>I.element.getBoundingClientRect());if(!w){let I=V[0],E=EY(O);O0({x:I.left/window.innerWidth*100,y:E?I.top:I.top+window.scrollY,clientY:I.top,element:U.name,elementPath:U.path,boundingBox:{x:I.left,y:E?I.top:I.top+window.scrollY,width:I.width,height:I.height},isFixed:E,fullPath:RB(O),accessibility:FB(O),computedStyles:MB(O),computedStylesObj:OB(O),nearbyElements:LB(O),cssClasses:uJ(O),nearbyText:vJ(O),reactComponents:U.reactComponents,sourceFile:fB(O)})}else{let I={left:Math.min(...V.map((Z0)=>Z0.left)),top:Math.min(...V.map((Z0)=>Z0.top)),right:Math.max(...V.map((Z0)=>Z0.right)),bottom:Math.max(...V.map((Z0)=>Z0.bottom))},E=pG.slice(0,5).map((Z0)=>Z0.name).join(", "),l=pG.length>5?` +${pG.length-5} more`:"",r=V.map((Z0)=>({x:Z0.left,y:Z0.top+window.scrollY,width:Z0.width,height:Z0.height})),j0=pG[pG.length-1].element,W0=V[V.length-1],T0=W0.left+W0.width/2,u0=W0.top+W0.height/2,A0=EY(j0);O0({x:T0/window.innerWidth*100,y:A0?u0:u0+window.scrollY,clientY:u0,element:`${pG.length} elements: ${E}${l}`,elementPath:"multi-select",boundingBox:{x:I.left,y:I.top+window.scrollY,width:I.right-I.left,height:I.bottom-I.top},isMultiSelect:!0,isFixed:A0,elementBoundingBoxes:r,multiSelectElements:pG.map((Z0)=>Z0.element),targetElement:j0,fullPath:RB(O),accessibility:FB(O),computedStyles:MB(O),computedStylesObj:OB(O),nearbyElements:LB(O),cssClasses:uJ(O),nearbyText:vJ(O),sourceFile:fB(O)})}wz([]),c0(null)},[pG]);$.useEffect(()=>{if(!S){if(O0(null),c(null),F0(null),R0([]),c0(null),t(!1),wz([]),R7.current={cmd:!1,shift:!1},x)HB()}},[S,x,HB]),$.useEffect(()=>{return()=>{wX()}},[]),$.useEffect(()=>{if(!S)return;let U=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),O=":not([data-agentation-root]):not([data-agentation-root] *)",w=document.createElement("style");return w.id="feedback-cursor-styles",w.textContent=`
      body ${O} {
        cursor: crosshair !important;
      }

      body :is(${U})${O} {
        cursor: text !important;
      }
    `,document.head.appendChild(w),()=>{let V=document.getElementById("feedback-cursor-styles");if(V)V.remove()}},[S]),$.useEffect(()=>{if(SH!==null&&S)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[SH,S]),$.useEffect(()=>{if(!S||i||X7||X0)return;let U=(O)=>{let w=O.composedPath()[0]||O.target;if(MZ(w,"[data-feedback-toolbar]")){c0(null);return}let V=i6(O.clientX,O.clientY);if(!V||MZ(V,"[data-feedback-toolbar]")){c0(null);return}let{name:I,elementName:E,path:l,reactComponents:r}=bY(V,v6),J0=V.getBoundingClientRect();c0({element:I,elementName:E,elementPath:l,rect:J0,reactComponents:r}),e0({x:O.clientX,y:O.clientY})};return document.addEventListener("mousemove",U),()=>document.removeEventListener("mousemove",U)},[S,i,X7,X0,v6,pZ]);let XB=$.useCallback((U)=>{if(c(U),Y6(null),xZ(null),VZ([]),U.elementBoundingBoxes?.length){let O=[];for(let w of U.elementBoundingBoxes){let V=w.x+w.width/2,I=w.y+w.height/2-window.scrollY,E=i6(V,I);if(E)O.push(E)}R0(O),F0(null)}else if(U.boundingBox){let O=U.boundingBox,w=O.x+O.width/2,V=U.isFixed?O.y+O.height/2:O.y+O.height/2-window.scrollY,I=i6(w,V);if(I){let E=I.getBoundingClientRect(),l=E.width/O.width,r=E.height/O.height;if(l<0.5||r<0.5)F0(null);else F0(I)}else F0(null);R0([])}else F0(null),R0([])},[]);$.useEffect(()=>{if(!S||X7||X0)return;let U=(O)=>{if(BB.current){BB.current=!1;return}let w=O.composedPath()[0]||O.target;if(MZ(w,"[data-feedback-toolbar]"))return;if(MZ(w,"[data-annotation-popup]"))return;if(MZ(w,"[data-annotation-marker]"))return;if(O.metaKey&&O.shiftKey&&!i&&!E0){O.preventDefault(),O.stopPropagation();let _G=i6(O.clientX,O.clientY);if(!_G)return;let tG=_G.getBoundingClientRect(),{name:qG,path:mG,reactComponents:V0}=bY(_G,v6),x0=pG.findIndex((kG)=>kG.element===_G);if(x0>=0)wz((kG)=>kG.filter((hG,W7)=>W7!==x0));else wz((kG)=>[...kG,{element:_G,rect:tG,name:qG,path:mG,reactComponents:V0??void 0}]);return}let V=MZ(w,"button, a, input, select, textarea, [role='button'], [onclick]");if(g0.blockInteractions&&V)O.preventDefault(),O.stopPropagation();if(i){if(V&&!g0.blockInteractions)return;O.preventDefault(),iH.current?.shake();return}if(E0){if(V&&!g0.blockInteractions)return;O.preventDefault(),sH.current?.shake();return}O.preventDefault();let I=i6(O.clientX,O.clientY);if(!I)return;let{name:E,path:l,reactComponents:r}=bY(I,v6),J0=I.getBoundingClientRect(),j0=O.clientX/window.innerWidth*100,W0=EY(I),T0=W0?O.clientY:O.clientY+window.scrollY,u0=window.getSelection(),A0;if(u0&&u0.toString().trim().length>0)A0=u0.toString().trim().slice(0,500);let Z0=OB(I),uG=MB(I);O0({x:j0,y:T0,clientY:O.clientY,element:E,elementPath:l,selectedText:A0,boundingBox:{x:J0.left,y:W0?J0.top:J0.top+window.scrollY,width:J0.width,height:J0.height},nearbyText:vJ(I),cssClasses:uJ(I),isFixed:W0,fullPath:RB(I),accessibility:FB(I),computedStyles:uG,computedStylesObj:Z0,nearbyElements:LB(I),reactComponents:r??void 0,sourceFile:fB(I),targetElement:I}),c0(null)};return document.addEventListener("click",U,!0),()=>document.removeEventListener("click",U,!0)},[S,X7,X0,i,E0,g0.blockInteractions,v6,pG]),$.useEffect(()=>{if(!S)return;let U=(V)=>{if(V.key==="Meta")R7.current.cmd=!0;if(V.key==="Shift")R7.current.shift=!0},O=(V)=>{let I=R7.current.cmd&&R7.current.shift;if(V.key==="Meta")R7.current.cmd=!1;if(V.key==="Shift")R7.current.shift=!1;let E=R7.current.cmd&&R7.current.shift;if(I&&!E&&pG.length>0)nH()},w=()=>{R7.current={cmd:!1,shift:!1},wz([])};return document.addEventListener("keydown",U),document.addEventListener("keyup",O),window.addEventListener("blur",w),()=>{document.removeEventListener("keydown",U),document.removeEventListener("keyup",O),window.removeEventListener("blur",w)}},[S,pG,nH]),$.useEffect(()=>{if(!S||i||X7||X0)return;let U=(O)=>{let w=O.composedPath()[0]||O.target;if(MZ(w,"[data-feedback-toolbar]"))return;if(MZ(w,"[data-annotation-marker]"))return;if(MZ(w,"[data-annotation-popup]"))return;if(new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(w.tagName)||w.isContentEditable)return;O.preventDefault(),Kz.current={x:O.clientX,y:O.clientY}};return document.addEventListener("mousedown",U),()=>document.removeEventListener("mousedown",U)},[S,i,X7,X0]),$.useEffect(()=>{if(!S||i)return;let U=(O)=>{if(!Kz.current)return;let w=O.clientX-Kz.current.x,V=O.clientY-Kz.current.y,I=w*w+V*V,E=WY*WY;if(!h7&&I>=E)V7.current=Kz.current,cH(!0),O.preventDefault();if((h7||I>=E)&&V7.current){if(bJ.current){let V0=Math.min(V7.current.x,O.clientX),x0=Math.min(V7.current.y,O.clientY),kG=Math.abs(O.clientX-V7.current.x),hG=Math.abs(O.clientY-V7.current.y);bJ.current.style.transform=`translate(${V0}px, ${x0}px)`,bJ.current.style.width=`${kG}px`,bJ.current.style.height=`${hG}px`}let l=Date.now();if(l-lH.current<tQ)return;lH.current=l;let r=V7.current.x,J0=V7.current.y,j0=Math.min(r,O.clientX),W0=Math.min(J0,O.clientY),T0=Math.max(r,O.clientX),u0=Math.max(J0,O.clientY),A0=(j0+T0)/2,Z0=(W0+u0)/2,uG=new Set,_G=[[j0,W0],[T0,W0],[j0,u0],[T0,u0],[A0,Z0],[A0,W0],[A0,u0],[j0,Z0],[T0,Z0]];for(let[V0,x0]of _G){let kG=document.elementsFromPoint(V0,x0);for(let hG of kG)if(hG instanceof HTMLElement)uG.add(hG)}let tG=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(let V0 of tG)if(V0 instanceof HTMLElement){let x0=V0.getBoundingClientRect(),kG=x0.left+x0.width/2,hG=x0.top+x0.height/2,W7=kG>=j0&&kG<=T0&&hG>=W0&&hG<=u0,iZ=Math.min(x0.right,T0)-Math.max(x0.left,j0),YZ=Math.min(x0.bottom,u0)-Math.max(x0.top,W0),gJ=iZ>0&&YZ>0?iZ*YZ:0,c6=x0.width*x0.height,j6=c6>0?gJ/c6:0;if(W7||j6>0.5)uG.add(V0)}let qG=[],mG=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(let V0 of uG){if(MZ(V0,"[data-feedback-toolbar]")||MZ(V0,"[data-annotation-marker]"))continue;let x0=V0.getBoundingClientRect();if(x0.width>window.innerWidth*0.8&&x0.height>window.innerHeight*0.5)continue;if(x0.width<10||x0.height<10)continue;if(x0.left<T0&&x0.right>j0&&x0.top<u0&&x0.bottom>W0){let kG=V0.tagName,hG=mG.has(kG);if(!hG&&(kG==="DIV"||kG==="SPAN")){let W7=V0.textContent&&V0.textContent.trim().length>0,iZ=V0.onclick!==null||V0.getAttribute("role")==="button"||V0.getAttribute("role")==="link"||V0.classList.contains("clickable")||V0.hasAttribute("data-clickable");if((W7||iZ)&&!V0.querySelector("p, h1, h2, h3, h4, h5, h6, button, a"))hG=!0}if(hG){let W7=!1;for(let iZ of qG)if(iZ.left<=x0.left&&iZ.right>=x0.right&&iZ.top<=x0.top&&iZ.bottom>=x0.bottom){W7=!0;break}if(!W7)qG.push(x0)}}}if(PJ.current){let V0=PJ.current;while(V0.children.length>qG.length)V0.removeChild(V0.lastChild);qG.forEach((x0,kG)=>{let hG=V0.children[kG];if(!hG)hG=document.createElement("div"),hG.className=u.selectedElementHighlight,V0.appendChild(hG);hG.style.transform=`translate(${x0.left}px, ${x0.top}px)`,hG.style.width=`${x0.width}px`,hG.style.height=`${x0.height}px`})}}};return document.addEventListener("mousemove",U,{passive:!0}),()=>document.removeEventListener("mousemove",U)},[S,i,h7,WY]),$.useEffect(()=>{if(!S)return;let U=(O)=>{let w=h7,V=V7.current;if(h7&&V){BB.current=!0;let I=Math.min(V.x,O.clientX),E=Math.min(V.y,O.clientY),l=Math.max(V.x,O.clientX),r=Math.max(V.y,O.clientY),J0=[],j0="button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th";document.querySelectorAll(j0).forEach((A0)=>{if(!(A0 instanceof HTMLElement))return;if(MZ(A0,"[data-feedback-toolbar]")||MZ(A0,"[data-annotation-marker]"))return;let Z0=A0.getBoundingClientRect();if(Z0.width>window.innerWidth*0.8&&Z0.height>window.innerHeight*0.5)return;if(Z0.width<10||Z0.height<10)return;if(Z0.left<l&&Z0.right>I&&Z0.top<r&&Z0.bottom>E)J0.push({element:A0,rect:Z0})});let W0=J0.filter(({element:A0})=>!J0.some(({element:Z0})=>Z0!==A0&&A0.contains(Z0))),T0=O.clientX/window.innerWidth*100,u0=O.clientY+window.scrollY;if(W0.length>0){let A0=W0.reduce((mG,{rect:V0})=>({left:Math.min(mG.left,V0.left),top:Math.min(mG.top,V0.top),right:Math.max(mG.right,V0.right),bottom:Math.max(mG.bottom,V0.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),Z0=W0.slice(0,5).map(({element:mG})=>kz(mG).name).join(", "),uG=W0.length>5?` +${W0.length-5} more`:"",_G=W0[0].element,tG=OB(_G),qG=MB(_G);O0({x:T0,y:u0,clientY:O.clientY,element:`${W0.length} elements: ${Z0}${uG}`,elementPath:"multi-select",boundingBox:{x:A0.left,y:A0.top+window.scrollY,width:A0.right-A0.left,height:A0.bottom-A0.top},isMultiSelect:!0,fullPath:RB(_G),accessibility:FB(_G),computedStyles:qG,computedStylesObj:tG,nearbyElements:LB(_G),cssClasses:uJ(_G),nearbyText:vJ(_G),sourceFile:fB(_G)})}else{let A0=Math.abs(l-I),Z0=Math.abs(r-E);if(A0>20&&Z0>20)O0({x:T0,y:u0,clientY:O.clientY,element:"Area selection",elementPath:`region at (${Math.round(I)}, ${Math.round(E)})`,boundingBox:{x:I,y:E+window.scrollY,width:A0,height:Z0},isMultiSelect:!0})}c0(null)}else if(w)BB.current=!0;if(Kz.current=null,V7.current=null,cH(!1),PJ.current)PJ.current.innerHTML=""};return document.addEventListener("mouseup",U),()=>document.removeEventListener("mouseup",U)},[S,h7]);let D7=$.useCallback(async(U,O,w)=>{let V=g0.webhookUrl||D;if(!V||!g0.webhooksEnabled&&!w)return!1;try{return(await fetch(V,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:U,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...O})})).ok}catch(I){return console.warn("[Agentation] Webhook failed:",I),!1}},[D,g0.webhookUrl,g0.webhooksEnabled]),G_=$.useCallback((U)=>{if(!i)return;let O={id:Date.now().toString(),x:i.x,y:i.y,comment:U,element:i.element,elementPath:i.elementPath,timestamp:Date.now(),selectedText:i.selectedText,boundingBox:i.boundingBox,nearbyText:i.nearbyText,cssClasses:i.cssClasses,isMultiSelect:i.isMultiSelect,isFixed:i.isFixed,fullPath:i.fullPath,accessibility:i.accessibility,computedStyles:i.computedStyles,nearbyElements:i.nearbyElements,reactComponents:i.reactComponents,sourceFile:i.sourceFile,elementBoundingBoxes:i.elementBoundingBoxes,...Q&&nG?{sessionId:nG,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};if(M((w)=>[...w,O]),YB.current=O.id,Q0(()=>{YB.current=null},300),Q0(()=>{SJ((w)=>new Set(w).add(O.id))},250),J?.(O),D7("annotation.add",{annotation:O}),JB(!0),Q0(()=>{O0(null),JB(!1)},150),window.getSelection()?.removeAllRanges(),Q&&nG)Cz(Q,nG,O).then((w)=>{if(w.id!==O.id)M((V)=>V.map((I)=>I.id===O.id?{...I,id:w.id}:I)),SJ((V)=>{let I=new Set(V);return I.delete(O.id),I.add(w.id),I})}).catch((w)=>{console.warn("[Agentation] Failed to sync annotation:",w)})},[i,J,D7,Q,nG]),_Y=$.useCallback(()=>{JB(!0),Q0(()=>{O0(null),JB(!1)},150)},[]),LY=$.useCallback((U)=>{let O=_.findIndex((V)=>V.id===U),w=_[O];if(E0?.id===U)Dz(!0),Q0(()=>{c(null),F0(null),R0([]),Dz(!1)},150);if(M7(U),zB((V)=>new Set(V).add(U)),w)B?.(w),D7("annotation.delete",{annotation:w});if(Q)q6(Q,U).catch((V)=>{console.warn("[Agentation] Failed to delete annotation from server:",V)});Q0(()=>{if(M((V)=>V.filter((I)=>I.id!==U)),zB((V)=>{let I=new Set(V);return I.delete(U),I}),M7(null),O<_.length-1)j7(O),Q0(()=>j7(null),200)},150)},[_,E0,B,D7,Q]),qB=$.useCallback((U)=>{if(!U){Y6(null),xZ(null),VZ([]);return}if(Y6(U.id),U.elementBoundingBoxes?.length){let O=[];for(let w of U.elementBoundingBoxes){let V=w.x+w.width/2,I=w.y+w.height/2-window.scrollY,l=document.elementsFromPoint(V,I).find((r)=>!r.closest("[data-annotation-marker]")&&!r.closest("[data-agentation-root]"));if(l)O.push(l)}VZ(O),xZ(null)}else if(U.boundingBox){let O=U.boundingBox,w=O.x+O.width/2,V=U.isFixed?O.y+O.height/2:O.y+O.height/2-window.scrollY,I=i6(w,V);if(I){let E=I.getBoundingClientRect(),l=E.width/O.width,r=E.height/O.height;if(l<0.5||r<0.5)xZ(null);else xZ(I)}else xZ(null);VZ([])}else xZ(null),VZ([])},[]),Z_=$.useCallback((U)=>{if(!E0)return;let O={...E0,comment:U};if(M((w)=>w.map((V)=>V.id===E0.id?O:V)),Y?.(O),D7("annotation.update",{annotation:O}),Q)hX(Q,E0.id,{comment:U}).catch((w)=>{console.warn("[Agentation] Failed to update annotation on server:",w)});Dz(!0),Q0(()=>{c(null),F0(null),R0([]),Dz(!1)},150)},[E0,Y,D7,Q]),z_=$.useCallback(()=>{Dz(!0),Q0(()=>{c(null),F0(null),R0([]),Dz(!1)},150)},[]),d6=$.useCallback(()=>{let U=_.length,O=q0.length>0||!!I0;if(U===0&&pZ.length===0&&!O)return;if(j?.(_),D7("annotations.clear",{annotations:_}),Q){Promise.all(_.map((I)=>q6(Q,I.id).catch((E)=>{console.warn("[Agentation] Failed to delete annotation from server:",E)})));for(let[,I]of $J.current)if(I)q6(Q,I).catch(()=>{});$J.current.clear();for(let[,I]of CJ.current)if(I)q6(Q,I).catch(()=>{});CJ.current.clear()}B7(!0),dZ(!0),lQ([]);let w=jY.current;if(w){let I=w.getContext("2d");if(I)I.clearRect(0,0,w.width,w.height)}if(q0.length>0||I0)BY((I)=>I+1),CH((I)=>I+1),Q0(()=>{XG([]),lZ(null)},200);if(w0)VG(!1);if(vG)E7("");y6.current={rearrange:null,placements:[]},DB(M0);let V=U*30+200;Q0(()=>{M([]),SJ(new Set),localStorage.removeItem($B(M0)),B7(!1)},V),Q0(()=>dZ(!1),1500)},[M0,_,pZ,q0,I0,w0,vG,j,D7,Q]),OY=$.useCallback(async()=>{let U=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:M0,O=X0&&w0,w;if(O){if(q0.length===0&&!I0&&!vG)return;w=""}else{if(w=vX(_,U,g0.outputDetail),!w&&pZ.length===0&&q0.length===0&&!I0)return;if(!w)w=`## Page Feedback: ${U}
`}if(!O&&pZ.length>0){let V=new Set;for(let r of _)if(r.drawingIndex!=null)V.add(r.drawingIndex);let I=jY.current;if(I)I.style.visibility="hidden";let E=[],l=window.scrollY;for(let r=0;r<pZ.length;r++){if(V.has(r))continue;let J0=pZ[r];if(J0.points.length<2)continue;let j0=J0.fixed?J0.points:J0.points.map((iG)=>({x:iG.x,y:iG.y-l})),W0=1/0,T0=1/0,u0=-1/0,A0=-1/0;for(let iG of j0)W0=Math.min(W0,iG.x),T0=Math.min(T0,iG.y),u0=Math.max(u0,iG.x),A0=Math.max(A0,iG.y);let Z0=u0-W0,uG=A0-T0,_G=Math.hypot(Z0,uG),tG=j0[0],qG=j0[j0.length-1],mG=Math.hypot(qG.x-tG.x,qG.y-tG.y),V0,x0=mG<_G*0.35,kG=Z0/Math.max(uG,1);if(x0&&_G>20){let iG=Math.max(Z0,uG)*0.15,H6=0;for(let l6 of j0){let Y_=l6.x-W0<iG,j_=u0-l6.x<iG,H_=l6.y-T0<iG,X_=A0-l6.y<iG;if((Y_||j_)&&(H_||X_))H6++}V0=H6>j0.length*0.15?"box":"circle"}else if(kG>3&&uG<40)V0="underline";else if(mG>_G*0.5)V0="arrow";else V0="drawing";let hG=Math.min(10,j0.length),W7=Math.max(1,Math.floor(j0.length/hG)),iZ=new Set,YZ=[],gJ=[tG];for(let iG=W7;iG<j0.length-1;iG+=W7)gJ.push(j0[iG]);gJ.push(qG);for(let iG of gJ){let H6=i6(iG.x,iG.y);if(!H6||iZ.has(H6))continue;if(MZ(H6,"[data-feedback-toolbar]"))continue;iZ.add(H6);let{name:l6}=kz(H6);if(!YZ.includes(l6))YZ.push(l6)}let c6=`${Math.round(W0)},${Math.round(T0)} → ${Math.round(u0)},${Math.round(A0)}`,j6;if((V0==="circle"||V0==="box")&&YZ.length>0)j6=`${V0==="box"?"Boxed":"Circled"} **${YZ[0]}**${YZ.length>1?` (and ${YZ.slice(1).join(", ")})`:""} (region: ${c6})`;else if(V0==="underline"&&YZ.length>0)j6=`Underlined **${YZ[0]}** (${c6})`;else if(V0==="arrow"&&YZ.length>=2)j6=`Arrow from **${YZ[0]}** to **${YZ[YZ.length-1]}** (${Math.round(tG.x)},${Math.round(tG.y)} → ${Math.round(qG.x)},${Math.round(qG.y)})`;else if(YZ.length>0)j6=`${V0==="arrow"?"Arrow":"Drawing"} near **${YZ.join("**, **")}** (region: ${c6})`;else j6=`Drawing at ${c6}`;E.push(j6)}if(I)I.style.visibility="";if(E.length>0)w+=`
**Drawings:**
`,E.forEach((r,J0)=>{w+=`${J0+1}. ${r}
`})}if(q0.length>0||O&&vG)w+=`
`+kX(q0,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:w0,wireframePurpose:vG||void 0},g0.outputDetail);if(I0){let V=bX(I0,g0.outputDetail,{width:window.innerWidth,height:window.innerHeight});if(V)w+=`
`+V}if(F)try{await navigator.clipboard.writeText(w)}catch{}if(H?.(w),EG(!0),Q0(()=>EG(!1),2000),g0.autoClearAfterCopy)Q0(()=>d6(),500)},[_,pZ,q0,I0,w0,X0,P7,vG,M0,g0.outputDetail,v6,g0.autoClearAfterCopy,d6,F,H]),MY=$.useCallback(async()=>{let U=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:M0,O=vX(_,U,g0.outputDetail);if(!O&&q0.length===0&&!I0)return;if(!O)O=`## Page Feedback: ${U}
`;if(q0.length>0)O+=`
`+kX(q0,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:w0,wireframePurpose:vG||void 0},g0.outputDetail);if(I0){let V=bX(I0,g0.outputDetail,{width:window.innerWidth,height:window.innerHeight});if(V)O+=`
`+V}if(X)X(O,_);_Z("sending"),await new Promise((V)=>Q0(V,150));let w=await D7("submit",{output:O,annotations:_},!0);if(_Z(w?"sent":"failed"),Q0(()=>_Z("idle"),2500),w&&g0.autoClearAfterCopy)Q0(()=>d6(),500)},[X,D7,_,q0,I0,w0,P7,M0,g0.outputDetail,v6,g0.autoClearAfterCopy,d6]);$.useEffect(()=>{if(!Vz)return;let U=10,O=(V)=>{let I=V.clientX-Vz.x,E=V.clientY-Vz.y,l=Math.sqrt(I*I+E*E);if(!m6&&l>U)vH(!0);if(m6||l>U){let r=Vz.toolbarX+I,J0=Vz.toolbarY+E,j0=20,W0=337,T0=44,A0=W0-(S?q7==="connected"?297:257:44),Z0=j0-A0,uG=window.innerWidth-j0-W0;r=Math.max(Z0,Math.min(uG,r)),J0=Math.max(j0,Math.min(window.innerHeight-T0-j0,J0)),XY({x:r,y:J0})}},w=()=>{if(m6)qY.current=!0;vH(!1),uH(null)};return document.addEventListener("mousemove",O),document.addEventListener("mouseup",w),()=>{document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",w)}},[Vz,m6,S,q7]);let J_=$.useCallback((U)=>{if(U.target.closest("button")||U.target.closest("[data-agentation-settings-panel]"))return;let O=U.currentTarget.parentElement;if(!O)return;let w=O.getBoundingClientRect(),V=SG?.x??w.left,I=SG?.y??w.top;uH({x:U.clientX,y:U.clientY,toolbarX:V,toolbarY:I})},[SG]);if($.useEffect(()=>{if(!SG)return;let U=()=>{let{x:I,y:E}=SG,J0=20-(337-(S?q7==="connected"?297:257:44)),j0=window.innerWidth-20-337;if(I=Math.max(J0,Math.min(j0,I)),E=Math.max(20,Math.min(window.innerHeight-44-20,E)),I!==SG.x||E!==SG.y)XY({x:I,y:E})};return U(),window.addEventListener("resize",U),()=>window.removeEventListener("resize",U)},[SG,S,q7]),$.useEffect(()=>{let U=(O)=>{let w=O.target,V=w.tagName==="INPUT"||w.tagName==="TEXTAREA"||w.isContentEditable;if(O.key==="Escape"){if(X0){if(s0)C0(null);else jB();return}if(X7){YY(!1);return}if(pG.length>0){wz([]);return}if(i);else if(S)UZ(),C(!1)}if((O.metaKey||O.ctrlKey)&&O.shiftKey&&(O.key==="f"||O.key==="F")){if(O.preventDefault(),UZ(),S)oH();else C(!0);return}if(V||O.metaKey||O.ctrlKey)return;if(O.key==="p"||O.key==="P")O.preventDefault(),UZ(),QY();if(O.key==="l"||O.key==="L"){if(O.preventDefault(),UZ(),X7)YY(!1);if(v)t(!1);if(i)_Y();if(X0)jB();else HG(!0)}if(O.key==="h"||O.key==="H"){if(_.length>0)O.preventDefault(),UZ(),N((I)=>!I)}if(O.key==="c"||O.key==="C"){if(_.length>0||q0.length>0||I0)O.preventDefault(),UZ(),OY()}if(O.key==="x"||O.key==="X"){if(_.length>0||q0.length>0||I0){if(O.preventDefault(),UZ(),d6(),q0.length>0)XG([]);if(I0)lZ(null)}}if(O.key==="s"||O.key==="S"){let I=I7(g0.webhookUrl)||I7(D||"");if(_.length>0&&I&&wZ==="idle")O.preventDefault(),UZ(),MY()}};return document.addEventListener("keydown",U),()=>document.removeEventListener("keydown",U)},[S,X7,X0,s0,q0,I0,i,_.length,g0.webhookUrl,D,wZ,MY,QY,OY,d6,pG]),!L0)return null;if(p)return null;let hJ=_.length>0,fz=_.filter((U)=>!dH.has(U.id)&&U.kind!=="placement"&&U.kind!=="rearrange"),B_=fz.length>0,tH=_.filter((U)=>dH.has(U.id)),eH=(U)=>{let E=U.x/100*window.innerWidth,l=typeof U.y==="string"?parseFloat(U.y):U.y,r={};if(window.innerHeight-l-22-10<80)r.top="auto",r.bottom="calc(100% + 10px)";let j0=E-100,W0=10;if(j0<W0){let T0=W0-j0;r.left=`calc(50% + ${T0}px)`}else if(j0+200>window.innerWidth-W0){let T0=j0+200-(window.innerWidth-W0);r.left=`calc(50% - ${T0}px)`}return r};return pX.createPortal(m.jsxs("div",{ref:G0,style:{display:"contents"},"data-agentation-theme":w7?"dark":"light","data-agentation-accent":g0.annotationColorId,"data-agentation-root":"",children:[m.jsx("div",{className:`${u.toolbar}${f?` ${f}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:SG?{left:SG.x,top:SG.y,right:"auto",bottom:"auto"}:void 0,children:m.jsxs("div",{className:`${u.toolbarContainer} ${S?u.expanded:u.collapsed} ${EH?u.entrance:""} ${b?u.hiding:""} ${!g0.webhooksEnabled&&(I7(g0.webhookUrl)||I7(D||""))?u.serverConnected:""}`,onClick:!S?(U)=>{if(qY.current){qY.current=!1,U.preventDefault();return}C(!0)}:void 0,onMouseDown:J_,role:!S?"button":void 0,tabIndex:!S?0:-1,title:!S?"Start feedback mode":void 0,children:[m.jsxs("div",{className:`${u.toggleContent} ${!S?u.visible:u.hidden}`,children:[m.jsx(d_,{size:24}),B_&&m.jsx("span",{className:`${u.badge} ${S?u.fadeOut:""} ${EH?u.entrance:""}`,children:fz.length})]}),m.jsxs("div",{className:`${u.controlsContent} ${S?u.visible:u.hidden} ${SG&&SG.y<100?u.tooltipBelow:""} ${l0||v?u.tooltipsHidden:""} ${kH?u.tooltipsInSession:""}`,onMouseEnter:sQ,onMouseLeave:rQ,children:[m.jsxs("div",{className:`${u.buttonWrapper} ${SG&&SG.x<120?u.buttonWrapperAlignLeft:""}`,children:[m.jsx("button",{className:u.controlButton,onClick:(U)=>{U.stopPropagation(),UZ(),QY()},"data-active":x,children:m.jsx(s_,{size:24,isPaused:x})}),m.jsxs("span",{className:u.buttonTooltip,children:[x?"Resume animations":"Pause animations",m.jsx("span",{className:u.shortcut,children:"P"})]})]}),m.jsxs("div",{className:u.buttonWrapper,children:[m.jsx("button",{className:`${u.controlButton} ${!w7?u.light:""}`,onClick:(U)=>{if(U.stopPropagation(),UZ(),X7)YY(!1);if(v)t(!1);if(i)_Y();if(X0)jB();else HG(!0)},"data-active":X0,style:X0&&w0?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:m.jsx(zL,{size:21})}),m.jsxs("span",{className:u.buttonTooltip,children:[X0?"Exit layout mode":"Layout mode",m.jsx("span",{className:u.shortcut,children:"L"})]})]}),m.jsxs("div",{className:u.buttonWrapper,children:[m.jsx("button",{className:u.controlButton,onClick:(U)=>{U.stopPropagation(),UZ(),N(!K)},disabled:!hJ||X0,children:m.jsx(i_,{size:24,isOpen:K})}),m.jsxs("span",{className:u.buttonTooltip,children:[K?"Hide markers":"Show markers",m.jsx("span",{className:u.shortcut,children:"H"})]})]}),m.jsxs("div",{className:u.buttonWrapper,children:[m.jsx("button",{className:`${u.controlButton} ${o0?u.statusShowing:""}`,onClick:(U)=>{U.stopPropagation(),UZ(),OY()},disabled:X0&&w0?q0.length===0&&!I0?.sections?.length:!hJ&&pZ.length===0&&q0.length===0&&!I0?.sections?.length,"data-active":o0,children:m.jsx(l_,{size:24,copied:o0,tint:X0&&w0&&(q0.length>0||!!I0?.sections?.length)?"#f97316":void 0})}),m.jsxs("span",{className:u.buttonTooltip,children:[X0&&w0?"Copy layout":"Copy feedback",m.jsx("span",{className:u.shortcut,children:"C"})]})]}),m.jsxs("div",{className:`${u.buttonWrapper} ${u.sendButtonWrapper} ${S&&!g0.webhooksEnabled&&(I7(g0.webhookUrl)||I7(D||""))?u.sendButtonVisible:""}`,children:[m.jsxs("button",{className:`${u.controlButton} ${wZ==="sent"||wZ==="failed"?u.statusShowing:""}`,onClick:(U)=>{U.stopPropagation(),UZ(),MY()},disabled:!hJ||!I7(g0.webhookUrl)&&!I7(D||"")||wZ==="sending","data-no-hover":wZ==="sent"||wZ==="failed",tabIndex:I7(g0.webhookUrl)||I7(D||"")?0:-1,children:[m.jsx(p_,{size:24,state:wZ}),hJ&&wZ==="idle"&&m.jsx("span",{className:u.buttonBadge,children:_.length})]}),m.jsxs("span",{className:u.buttonTooltip,children:["Send Annotations",m.jsx("span",{className:u.shortcut,children:"S"})]})]}),m.jsxs("div",{className:u.buttonWrapper,children:[m.jsx("button",{className:u.controlButton,onClick:(U)=>{U.stopPropagation(),UZ(),d6()},disabled:!hJ&&pZ.length===0&&q0.length===0&&!I0?.sections?.length,"data-danger":!0,children:m.jsx(o_,{size:24})}),m.jsxs("span",{className:u.buttonTooltip,children:["Clear all",m.jsx("span",{className:u.shortcut,children:"X"})]})]}),m.jsxs("div",{className:u.buttonWrapper,children:[m.jsx("button",{className:u.controlButton,onClick:(U)=>{if(U.stopPropagation(),UZ(),X0)jB();t(!v)},children:m.jsx(r_,{size:24})}),Q&&q7!=="disconnected"&&m.jsx("span",{className:`${u.mcpIndicator} ${u[q7]} ${v?u.hidden:""}`,title:q7==="connected"?"MCP Connected":"MCP Connecting..."}),m.jsx("span",{className:u.buttonTooltip,children:"Settings"})]}),m.jsx("div",{className:u.divider}),m.jsxs("div",{className:`${u.buttonWrapper} ${SG&&typeof window<"u"&&SG.x>window.innerWidth-120?u.buttonWrapperAlignRight:""}`,children:[m.jsx("button",{className:u.controlButton,onClick:(U)=>{U.stopPropagation(),UZ(),oH()},children:m.jsx(a_,{size:24})}),m.jsxs("span",{className:u.buttonTooltip,children:["Exit",m.jsx("span",{className:u.shortcut,children:"Esc"})]})]})]}),m.jsx(S5,{visible:X0&&S,activeType:s0,onSelect:(U)=>{C0(s0===U?null:U)},isDarkMode:w7,sectionCount:I0?.sections.length??0,onDetectSections:()=>{let U=d5(),O=I0?.sections??[],w=new Set(O.map((l)=>l.selector)),V=U.filter((l)=>!w.has(l.selector)),I=[...O,...V],E=[...I0?.originalOrder??[],...V.map((l)=>l.id)];lZ({sections:I,originalOrder:E,detectedAt:Date.now()})},placementCount:q0.length,onClearPlacements:()=>{BY((U)=>U+1),CH((U)=>U+1),Q0(()=>{lZ({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:w0,onBlankCanvasChange:(U)=>{let O={sections:[],originalOrder:[],detectedAt:Date.now()};if(U)JY.current={rearrange:I0,placements:q0},lZ(y6.current.rearrange||O),XG(y6.current.placements),C0(null);else y6.current={rearrange:I0,placements:q0},lZ(JY.current.rearrange||O),XG(JY.current.placements);VG(U)},wireframePurpose:vG,onWireframePurposeChange:E7,Tooltip:r6,onDragStart:(U,O)=>{O.preventDefault();let w=e[U],V=null,I=!1,E=O.clientX,l=O.clientY,J0=O.target.closest("[data-feedback-toolbar]")?.getBoundingClientRect().top??window.innerHeight,j0=(T0)=>{let u0=T0.clientX-E,A0=T0.clientY-l;if(!I&&(Math.abs(u0)>4||Math.abs(A0)>4))I=!0,V=document.createElement("div"),V.className=`${P.dragPreview}${w0?` ${P.dragPreviewWireframe}`:""}`,document.body.appendChild(V);if(!V)return;let Z0=Math.max(0,J0-T0.clientY),uG=Math.min(1,Z0/180),_G=1-Math.pow(1-uG,2),tG=28,qG=20,mG=Math.min(140,w.width*0.18),V0=Math.min(90,w.height*0.18),x0=tG+(mG-tG)*_G,kG=qG+(V0-qG)*_G;V.style.width=`${x0}px`,V.style.height=`${kG}px`,V.style.left=`${T0.clientX-x0/2}px`,V.style.top=`${T0.clientY-kG/2}px`,V.style.opacity=`${0.5+0.5*_G}`,V.textContent=_G>0.25?U:""},W0=(T0)=>{if(window.removeEventListener("mousemove",j0),window.removeEventListener("mouseup",W0),V)document.body.removeChild(V);if(I){let{width:u0,height:A0}=w,Z0=window.scrollY,uG=Math.max(0,T0.clientX-u0/2),_G=Math.max(0,T0.clientY+Z0-A0/2),tG={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:U,x:uG,y:_G,width:u0,height:A0,scrollY:Z0,timestamp:Date.now()};XG((qG)=>[...qG,tG]),C0(null),NJ.current=new Set,$H((qG)=>qG+1)}};window.addEventListener("mousemove",j0),window.addEventListener("mouseup",W0)}}),m.jsx(n2,{settings:g0,onSettingsChange:(U)=>oQ((O)=>({...O,...U})),isDarkMode:w7,onToggleTheme:aQ,isDevMode:gH,connectionStatus:q7,endpoint:Q,isVisible:Y0,toolbarNearBottom:!!SG&&SG.y<230,settingsPage:H0,onSettingsPageChange:f0,onHideToolbar:eQ})]})}),(X0||h0)&&m.jsx("div",{className:`${P.blankCanvas} ${ZZ?P.visible:""} ${e8?P.gridActive:""}`,style:{"--canvas-opacity":F7},"data-feedback-toolbar":!0}),X0&&w0&&ZZ&&m.jsxs("div",{className:P.wireframeNotice,"data-feedback-toolbar":!0,children:[m.jsxs("div",{className:P.wireframeOpacityRow,children:[m.jsx("span",{className:P.wireframeOpacityLabel,children:"Toggle Opacity"}),m.jsx("input",{type:"range",className:P.wireframeOpacitySlider,min:0,max:1,step:0.01,value:F7,onChange:(U)=>DZ(Number(U.target.value))})]}),m.jsxs("div",{className:P.wireframeNoticeTitleRow,children:[m.jsx("span",{className:P.wireframeNoticeTitle,children:"Wireframe Mode"}),m.jsx("span",{className:P.wireframeNoticeDivider}),m.jsx("button",{className:P.wireframeStartOver,onClick:()=>{BY((U)=>U+1),lZ({sections:[],originalOrder:[],detectedAt:Date.now()}),y6.current={rearrange:null,placements:[]},E7(""),DB(M0)},children:"Start Over"})]}),"Drag components onto the canvas.",m.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(X0||h0)&&m.jsx(T5,{placements:q0,onChange:XG,activeComponent:h0?null:s0,onActiveComponentChange:C0,isDarkMode:w7,exiting:h0,onInteractionChange:yQ,passthrough:!s0,extraSnapRects:I0?.sections.map((U)=>U.currentRect),deselectSignal:vQ,clearSignal:dQ,wireframe:w0,onSelectionChange:(U,O)=>{if(NJ.current=U,!O)GB.current=new Set,mQ((w)=>w+1)},onDragMove:(U,O)=>{let w=GB.current;if(!w.size||!I0)return;if(!H7.current){H7.current=new Map;for(let V of I0.sections)if(w.has(V.id))H7.current.set(V.id,{x:V.currentRect.x,y:V.currentRect.y})}for(let V of I0.sections){if(!w.has(V.id))continue;if(!H7.current.get(V.id))continue;let E=document.querySelector(`[data-rearrange-section="${V.id}"]`);if(E)E.style.transform=`translate(${U}px, ${O}px)`}},onDragEnd:(U,O,w)=>{let V=GB.current,I=H7.current;if(H7.current=null,!V.size||!I0||!I)return;for(let E of V){let l=document.querySelector(`[data-rearrange-section="${E}"]`);if(l)l.style.transform=""}if(w)lZ((E)=>{if(!E)return E;return{...E,sections:E.sections.map((l)=>{let r=I.get(l.id);if(!r)return l;return{...l,currentRect:{...l.currentRect,x:Math.max(0,r.x+U),y:Math.max(0,r.y+O)}}})}})}}),(X0||h0)&&I0&&m.jsx(p5,{rearrangeState:I0,onChange:lZ,isDarkMode:w7,exiting:h0,blankCanvas:w0,extraSnapRects:q0.map((U)=>({x:U.x,y:U.y,width:U.width,height:U.height})),clearSignal:cQ,deselectSignal:uQ,onSelectionChange:(U,O)=>{if(GB.current=U,!O)NJ.current=new Set,$H((w)=>w+1)},onDragMove:(U,O)=>{let w=NJ.current;if(!w.size)return;if(!H7.current){H7.current=new Map;for(let V of q0)if(w.has(V.id))H7.current.set(V.id,{x:V.x,y:V.y})}for(let V of w){let I=document.querySelector(`[data-design-placement="${V}"]`);if(I)I.style.transform=`translate(${U}px, ${O}px)`}},onDragEnd:(U,O,w)=>{let V=NJ.current,I=H7.current;if(H7.current=null,!V.size||!I)return;for(let E of V){let l=document.querySelector(`[data-design-placement="${E}"]`);if(l)l.style.transform=""}if(w)XG((E)=>E.map((l)=>{let r=I.get(l.id);if(!r)return l;return{...l,x:Math.max(0,r.x+U),y:Math.max(0,r.y+O)}}))}}),m.jsx("canvas",{ref:jY,className:`${u.drawCanvas} ${X7?u.active:""}`,style:{opacity:UY?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),m.jsxs("div",{className:u.markersLayer,"data-feedback-toolbar":!0,children:[n&&fz.filter((U)=>!U.isFixed).map((U,O,w)=>m.jsx(uX,{annotation:U,globalIndex:fz.findIndex((V)=>V.id===U.id),layerIndex:O,layerSize:w.length,isExiting:GG,isClearing:B6,isAnimated:mH.has(U.id),isHovered:!GG&&b7===U.id,isDeleting:O7===U.id,isEditingAny:!!E0,renumberFrom:Fz,markerClickBehavior:g0.markerClickBehavior,tooltipStyle:eH(U),onHoverEnter:(V)=>!GG&&V.id!==YB.current&&qB(V),onHoverLeave:()=>qB(null),onClick:(V)=>g0.markerClickBehavior==="delete"?LY(V.id):XB(V),onContextMenu:XB},U.id)),n&&!GG&&tH.filter((U)=>!U.isFixed).map((U)=>m.jsx(mX,{annotation:U},U.id))]}),m.jsxs("div",{className:u.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[n&&fz.filter((U)=>U.isFixed).map((U,O,w)=>m.jsx(uX,{annotation:U,globalIndex:fz.findIndex((V)=>V.id===U.id),layerIndex:O,layerSize:w.length,isExiting:GG,isClearing:B6,isAnimated:mH.has(U.id),isHovered:!GG&&b7===U.id,isDeleting:O7===U.id,isEditingAny:!!E0,renumberFrom:Fz,markerClickBehavior:g0.markerClickBehavior,tooltipStyle:eH(U),onHoverEnter:(V)=>!GG&&V.id!==YB.current&&qB(V),onHoverLeave:()=>qB(null),onClick:(V)=>g0.markerClickBehavior==="delete"?LY(V.id):XB(V),onContextMenu:XB},U.id)),n&&!GG&&tH.filter((U)=>U.isFixed).map((U)=>m.jsx(mX,{annotation:U,fixed:!0},U.id))]}),S&&m.jsxs("div",{className:u.overlay,"data-feedback-toolbar":!0,style:i||E0?{zIndex:99999}:void 0,children:[P0?.rect&&!i&&!a0&&!h7&&m.jsx("div",{className:`${u.hoverHighlight} ${u.enter}`,style:{left:P0.rect.left,top:P0.rect.top,width:P0.rect.width,height:P0.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),pG.filter((U)=>document.contains(U.element)).map((U,O)=>{let w=U.element.getBoundingClientRect(),V=pG.length>1;return m.jsx("div",{className:V?u.multiSelectOutline:u.singleSelectOutline,style:{position:"fixed",left:w.left,top:w.top,width:w.width,height:w.height,...V?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},O)}),b7&&!i&&(()=>{let U=_.find((I)=>I.id===b7);if(!U?.boundingBox)return null;if(U.elementBoundingBoxes?.length){if(Y7.length>0)return Y7.filter((I)=>document.contains(I)).map((I,E)=>{let l=I.getBoundingClientRect();return m.jsx("div",{className:`${u.multiSelectOutline} ${u.enter}`,style:{left:l.left,top:l.top,width:l.width,height:l.height}},`hover-outline-live-${E}`)});return U.elementBoundingBoxes.map((I,E)=>m.jsx("div",{className:`${u.multiSelectOutline} ${u.enter}`,style:{left:I.x,top:I.y-ZG,width:I.width,height:I.height}},`hover-outline-${E}`))}let O=g6&&document.contains(g6)?g6.getBoundingClientRect():null,w=O?{x:O.left,y:O.top,width:O.width,height:O.height}:{x:U.boundingBox.x,y:U.isFixed?U.boundingBox.y:U.boundingBox.y-ZG,width:U.boundingBox.width,height:U.boundingBox.height},V=U.isMultiSelect;return m.jsx("div",{className:`${V?u.multiSelectOutline:u.singleSelectOutline} ${u.enter}`,style:{left:w.x,top:w.y,width:w.width,height:w.height,...V?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),P0&&!i&&!a0&&!h7&&m.jsxs("div",{className:`${u.hoverTooltip} ${u.enter}`,style:{left:Math.max(8,Math.min(N0.x,window.innerWidth-100)),top:Math.max(N0.y-(P0.reactComponents?48:32),8)},children:[P0.reactComponents&&m.jsx("div",{className:u.hoverReactPath,children:P0.reactComponents}),m.jsx("div",{className:u.hoverElementName,children:P0.elementName})]}),i&&m.jsxs(m.Fragment,{children:[i.multiSelectElements?.length?i.multiSelectElements.filter((U)=>document.contains(U)).map((U,O)=>{let w=U.getBoundingClientRect();return m.jsx("div",{className:`${u.multiSelectOutline} ${kJ?u.exit:u.enter}`,style:{left:w.left,top:w.top,width:w.width,height:w.height}},`pending-multi-${O}`)}):i.targetElement&&document.contains(i.targetElement)?(()=>{let U=i.targetElement.getBoundingClientRect();return m.jsx("div",{className:`${u.singleSelectOutline} ${kJ?u.exit:u.enter}`,style:{left:U.left,top:U.top,width:U.width,height:U.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():i.boundingBox&&m.jsx("div",{className:`${i.isMultiSelect?u.multiSelectOutline:u.singleSelectOutline} ${kJ?u.exit:u.enter}`,style:{left:i.boundingBox.x,top:i.boundingBox.y-ZG,width:i.boundingBox.width,height:i.boundingBox.height,...i.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{let U=i.x,O=i.isFixed?i.y:i.y-ZG;return m.jsxs(m.Fragment,{children:[m.jsx(m2,{x:U,y:O,isMultiSelect:i.isMultiSelect,isExiting:kJ}),m.jsx(TB,{ref:iH,element:i.element,selectedText:i.selectedText,computedStyles:i.computedStylesObj,placeholder:i.element==="Area selection"?"What should change in this area?":i.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:G_,onCancel:_Y,isExiting:kJ,lightMode:!w7,accentColor:i.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,U/100*window.innerWidth)),...O>window.innerHeight-290?{bottom:window.innerHeight-O+20}:{top:O+20}}})]})})()]}),E0&&m.jsxs(m.Fragment,{children:[E0.elementBoundingBoxes?.length?(()=>{if(k0.length>0)return k0.filter((U)=>document.contains(U)).map((U,O)=>{let w=U.getBoundingClientRect();return m.jsx("div",{className:`${u.multiSelectOutline} ${u.enter}`,style:{left:w.left,top:w.top,width:w.width,height:w.height}},`edit-multi-live-${O}`)});return E0.elementBoundingBoxes.map((U,O)=>m.jsx("div",{className:`${u.multiSelectOutline} ${u.enter}`,style:{left:U.x,top:U.y-ZG,width:U.width,height:U.height}},`edit-multi-${O}`))})():(()=>{let U=U0&&document.contains(U0)?U0.getBoundingClientRect():null,O=U?{x:U.left,y:U.top,width:U.width,height:U.height}:E0.boundingBox?{x:E0.boundingBox.x,y:E0.isFixed?E0.boundingBox.y:E0.boundingBox.y-ZG,width:E0.boundingBox.width,height:E0.boundingBox.height}:null;if(!O)return null;return m.jsx("div",{className:`${E0.isMultiSelect?u.multiSelectOutline:u.singleSelectOutline} ${u.enter}`,style:{left:O.x,top:O.y,width:O.width,height:O.height,...E0.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),m.jsx(TB,{ref:sH,element:E0.element,selectedText:E0.selectedText,computedStyles:y5(E0.computedStyles),placeholder:"Edit your feedback...",initialValue:E0.comment,submitLabel:"Save",onSubmit:Z_,onCancel:z_,onDelete:()=>LY(E0.id),isExiting:nQ,lightMode:!w7,accentColor:E0.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{let U=E0.isFixed?E0.y:E0.y-ZG;return{left:Math.max(160,Math.min(window.innerWidth-160,E0.x/100*window.innerWidth)),...U>window.innerHeight-290?{bottom:window.innerHeight-U+20}:{top:U+20}}})()})]}),h7&&m.jsxs(m.Fragment,{children:[m.jsx("div",{ref:bJ,className:u.dragSelection}),m.jsx("div",{ref:PJ,className:u.highlightsContainer})]})]})]}),document.body)}var hQ=DG(kQ(),1),gQ=DG(AZ(),1),TM="toolbar-agentation-root",bQ="toolbar-agentation-styles";function NM(){if(document.getElementById(bQ))return;let G=document.createElement("style");G.id=bQ,G.textContent=`
        [data-agentation-toolbar] { display: none !important; }
        [data-agentation-toolbar].agentation-visible { display: block !important; }
        #laravel-toolbar-shadow-host.toolbar-external-active {
            opacity: 0 !important;
            pointer-events: none !important;
            transition: opacity 0.15s ease;
        }
    `,document.head.appendChild(G)}function PQ(){try{return pJ(window.location.pathname).length}catch{return 0}}function TJ(G){window.dispatchEvent(new CustomEvent("toolbar:agentation:state",{detail:{annotationCount:G}}))}function EQ(){if(window.__TOOLBAR_AGENTATION_MOUNTED__)return;window.__TOOLBAR_AGENTATION_MOUNTED__=!0,NM();let G=window.__TOOLBAR_AGENTATION__?.endpoint||void 0,Z=document.createElement("div");Z.id=TM,document.body.appendChild(Z);let z=hQ.createRoot(Z),J=PQ(),B=()=>z.render(gQ.jsx(Wq,{key:window.location.pathname,endpoint:G,onAnnotationAdd:()=>TJ(++J),onAnnotationDelete:()=>TJ(--J),onAnnotationsClear:()=>TJ(J=0)})),Y=()=>{J=PQ(),TJ(J),B()};B(),TJ(J),window.addEventListener("popstate",Y),document.addEventListener("inertia:navigate",Y),window.addEventListener("toolbar:agentation:request-state",()=>TJ(J))}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",EQ,{once:!0});else EQ();})();
