import{g as bn}from"./react-vendor-DJG_os-6.js";import{R as Ne}from"./ui-components-Dg8HKmBR.js";/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function yn(t,e,n){return(e=xn(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Qt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Qt(Object(n),!0).forEach(function(a){yn(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Qt(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function vn(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function xn(t){var e=vn(t,"string");return typeof e=="symbol"?e:e+""}const Jt=()=>{};let Wt={},Te={},_e=null,Fe={mark:Jt,measure:Jt};try{typeof window<"u"&&(Wt=window),typeof document<"u"&&(Te=document),typeof MutationObserver<"u"&&(_e=MutationObserver),typeof performance<"u"&&(Fe=performance)}catch{}const{userAgent:Zt=""}=Wt.navigator||{},L=Wt,h=Te,te=_e,Z=Fe;L.document;const F=!!h.documentElement&&!!h.head&&typeof h.addEventListener=="function"&&typeof h.createElement=="function",Me=~Zt.indexOf("MSIE")||~Zt.indexOf("Trident/");var An=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,wn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Le={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Pn={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Re=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],A="classic",it="duotone",On="sharp",kn="sharp-duotone",ze=[A,it,On,kn],Sn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},En={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Cn=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),In={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Nn=["fak","fa-kit","fakd","fa-kit-duotone"],ee={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Tn=["kit"],_n={kit:{"fa-kit":"fak"}},Fn=["fak","fakd"],Mn={kit:{fak:"fa-kit"}},ne={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},tt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ln=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Rn=["fak","fa-kit","fakd","fa-kit-duotone"],zn={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Dn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},jn={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},At={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Wn=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],wt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Ln,...Wn],Yn=["solid","regular","light","thin","duotone","brands"],De=[1,2,3,4,5,6,7,8,9,10],Un=De.concat([11,12,13,14,15,16,17,18,19,20]),Hn=[...Object.keys(jn),...Yn,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",tt.GROUP,tt.SWAP_OPACITY,tt.PRIMARY,tt.SECONDARY].concat(De.map(t=>"".concat(t,"x"))).concat(Un.map(t=>"w-".concat(t))),Gn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const T="___FONT_AWESOME___",Pt=16,je="fa",We="svg-inline--fa",j="data-fa-i2svg",Ot="data-fa-pseudo-element",Xn="data-fa-pseudo-element-pending",Yt="data-prefix",Ut="data-icon",ae="fontawesome-i2svg",$n="async",Bn=["HTML","HEAD","STYLE","SCRIPT"],Ye=(()=>{try{return!0}catch{return!1}})();function Q(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[A]}})}const Ue=l({},Le);Ue[A]=l(l(l(l({},{"fa-duotone":"duotone"}),Le[A]),ee.kit),ee["kit-duotone"]);const Vn=Q(Ue),kt=l({},In);kt[A]=l(l(l(l({},{duotone:"fad"}),kt[A]),ne.kit),ne["kit-duotone"]);const re=Q(kt),St=l({},At);St[A]=l(l({},St[A]),Mn.kit);const Ht=Q(St),Et=l({},Dn);Et[A]=l(l({},Et[A]),_n.kit);Q(Et);const qn=An,He="fa-layers-text",Kn=wn,Qn=l({},Sn);Q(Qn);const Jn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],mt=Pn,Zn=[...Tn,...Hn],B=L.FontAwesomeConfig||{};function ta(t){var e=h.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function ea(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}h&&typeof h.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=ea(ta(n));r!=null&&(B[a]=r)});const Ge={styleDefault:"solid",familyDefault:A,cssPrefix:je,replacementClass:We,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};B.familyPrefix&&(B.cssPrefix=B.familyPrefix);const G=l(l({},Ge),B);G.autoReplaceSvg||(G.observeMutations=!1);const c={};Object.keys(Ge).forEach(t=>{Object.defineProperty(c,t,{enumerable:!0,set:function(e){G[t]=e,V.forEach(n=>n(c))},get:function(){return G[t]}})});Object.defineProperty(c,"familyPrefix",{enumerable:!0,set:function(t){G.cssPrefix=t,V.forEach(e=>e(c))},get:function(){return G.cssPrefix}});L.FontAwesomeConfig=c;const V=[];function na(t){return V.push(t),()=>{V.splice(V.indexOf(t),1)}}const M=Pt,C={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function aa(t){if(!t||!F)return;const e=h.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=h.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const o=n[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=o)}return h.head.insertBefore(e,a),t}const ra="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function q(){let t=12,e="";for(;t-- >0;)e+=ra[Math.random()*62|0];return e}function X(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Gt(t){return t.classList?X(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Xe(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function oa(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Xe(t[n]),'" '),"").trim()}function st(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Xt(t){return t.size!==C.size||t.x!==C.x||t.y!==C.y||t.rotate!==C.rotate||t.flipX||t.flipY}function ia(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(o," ").concat(i," ").concat(s)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:u,path:f}}function sa(t){let{transform:e,width:n=Pt,height:a=Pt,startCentered:r=!1}=t,o="";return r&&Me?o+="translate(".concat(e.x/M-n/2,"em, ").concat(e.y/M-a/2,"em) "):r?o+="translate(calc(-50% + ".concat(e.x/M,"em), calc(-50% + ").concat(e.y/M,"em)) "):o+="translate(".concat(e.x/M,"em, ").concat(e.y/M,"em) "),o+="scale(".concat(e.size/M*(e.flipX?-1:1),", ").concat(e.size/M*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var la=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function $e(){const t=je,e=We,n=c.cssPrefix,a=c.replacementClass;let r=la;if(n!==t||a!==e){const o=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(o,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(s,".".concat(a))}return r}let oe=!1;function dt(){c.autoAddCss&&!oe&&(aa($e()),oe=!0)}var fa={mixout(){return{dom:{css:$e,insertCss:dt}}},hooks(){return{beforeDOMElementCreation(){dt()},beforeI2svg(){dt()}}}};const _=L||{};_[T]||(_[T]={});_[T].styles||(_[T].styles={});_[T].hooks||(_[T].hooks={});_[T].shims||(_[T].shims=[]);var I=_[T];const Be=[],Ve=function(){h.removeEventListener("DOMContentLoaded",Ve),at=1,Be.map(t=>t())};let at=!1;F&&(at=(h.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(h.readyState),at||h.addEventListener("DOMContentLoaded",Ve));function ca(t){F&&(at?setTimeout(t,0):Be.push(t))}function J(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Xe(t):"<".concat(e," ").concat(oa(n),">").concat(a.map(J).join(""),"</").concat(e,">")}function ie(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var pt=function(e,n,a,r){var o=Object.keys(e),i=o.length,s=n,u,f,m;for(a===void 0?(u=1,m=e[o[0]]):(u=0,m=a);u<i;u++)f=o[u],m=s(m,e[f],f,e);return m};function ua(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const o=t.charCodeAt(n++);(o&64512)==56320?e.push(((r&1023)<<10)+(o&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Ct(t){const e=ua(t);return e.length===1?e[0].toString(16):null}function ma(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function se(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function It(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=se(e);typeof I.hooks.addPack=="function"&&!a?I.hooks.addPack(t,se(e)):I.styles[t]=l(l({},I.styles[t]||{}),r),t==="fas"&&It("fa",e)}const{styles:K,shims:da}=I,qe=Object.keys(Ht),pa=qe.reduce((t,e)=>(t[e]=Object.keys(Ht[e]),t),{});let $t=null,Ke={},Qe={},Je={},Ze={},tn={};function ga(t){return~Zn.indexOf(t)}function ha(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!ga(r)?r:null}const en=()=>{const t=a=>pt(K,(r,o,i)=>(r[i]=pt(o,a,{}),r),{});Ke=t((a,r,o)=>(r[3]&&(a[r[3]]=o),r[2]&&r[2].filter(s=>typeof s=="number").forEach(s=>{a[s.toString(16)]=o}),a)),Qe=t((a,r,o)=>(a[o]=o,r[2]&&r[2].filter(s=>typeof s=="string").forEach(s=>{a[s]=o}),a)),tn=t((a,r,o)=>{const i=r[2];return a[o]=o,i.forEach(s=>{a[s]=o}),a});const e="far"in K||c.autoFetchSvg,n=pt(da,(a,r)=>{const o=r[0];let i=r[1];const s=r[2];return i==="far"&&!e&&(i="fas"),typeof o=="string"&&(a.names[o]={prefix:i,iconName:s}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:i,iconName:s}),a},{names:{},unicodes:{}});Je=n.names,Ze=n.unicodes,$t=lt(c.styleDefault,{family:c.familyDefault})};na(t=>{$t=lt(t.styleDefault,{family:c.familyDefault})});en();function Bt(t,e){return(Ke[t]||{})[e]}function ba(t,e){return(Qe[t]||{})[e]}function D(t,e){return(tn[t]||{})[e]}function nn(t){return Je[t]||{prefix:null,iconName:null}}function ya(t){const e=Ze[t],n=Bt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function R(){return $t}const an=()=>({prefix:null,iconName:null,rest:[]});function va(t){let e=A;const n=qe.reduce((a,r)=>(a[r]="".concat(c.cssPrefix,"-").concat(r),a),{});return ze.forEach(a=>{(t.includes(n[a])||t.some(r=>pa[a].includes(r)))&&(e=a)}),e}function lt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=A}=e,a=Vn[n][t];if(n===it&&!t)return"fad";const r=re[n][t]||re[n][a],o=t in I.styles?t:null;return r||o||null}function xa(t){let e=[],n=null;return t.forEach(a=>{const r=ha(c.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function le(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function ft(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=wt.concat(Rn),o=le(t.filter(g=>r.includes(g))),i=le(t.filter(g=>!wt.includes(g))),s=o.filter(g=>(a=g,!Re.includes(g))),[u=null]=s,f=va(o),m=l(l({},xa(i)),{},{prefix:lt(u,{family:f})});return l(l(l({},m),Oa({values:t,family:f,styles:K,config:c,canonical:m,givenPrefix:a})),Aa(n,a,m))}function Aa(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const o=e==="fa"?nn(r):{},i=D(a,r);return r=o.iconName||i||r,a=o.prefix||a,a==="far"&&!K.far&&K.fas&&!c.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const wa=ze.filter(t=>t!==A||t!==it),Pa=Object.keys(At).filter(t=>t!==A).map(t=>Object.keys(At[t])).flat();function Oa(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:o={},config:i={}}=t,s=n===it,u=e.includes("fa-duotone")||e.includes("fad"),f=i.familyDefault==="duotone",m=a.prefix==="fad"||a.prefix==="fa-duotone";if(!s&&(u||f||m)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&wa.includes(n)&&(Object.keys(o).find(d=>Pa.includes(d))||i.autoFetchSvg)){const d=Cn.get(n).defaultShortPrefixId;a.prefix=d,a.iconName=D(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=R()||"fas"),a}class ka{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(o=>{this.definitions[o]=l(l({},this.definitions[o]||{}),r[o]),It(o,r[o]);const i=Ht[A][o];i&&It(i,r[o]),en()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:o,iconName:i,icon:s}=a[r],u=s[2];e[o]||(e[o]={}),u.length>0&&u.forEach(f=>{typeof f=="string"&&(e[o][f]=s)}),e[o][i]=s}),e}}let fe=[],Y={};const H={},Sa=Object.keys(H);function Ea(t,e){let{mixoutsTo:n}=e;return fe=t,Y={},Object.keys(H).forEach(a=>{Sa.indexOf(a)===-1&&delete H[a]}),fe.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(o=>{typeof r[o]=="function"&&(n[o]=r[o]),typeof r[o]=="object"&&Object.keys(r[o]).forEach(i=>{n[o]||(n[o]={}),n[o][i]=r[o][i]})}),a.hooks){const o=a.hooks();Object.keys(o).forEach(i=>{Y[i]||(Y[i]=[]),Y[i].push(o[i])})}a.provides&&a.provides(H)}),n}function Nt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(Y[t]||[]).forEach(i=>{e=i.apply(null,[e,...a])}),e}function W(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(Y[t]||[]).forEach(o=>{o.apply(null,n)})}function z(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return H[t]?H[t].apply(null,e):void 0}function Tt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||R();if(e)return e=D(n,e)||e,ie(rn.definitions,n,e)||ie(I.styles,n,e)}const rn=new ka,Ca=()=>{c.autoReplaceSvg=!1,c.observeMutations=!1,W("noAuto")},Ia={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return F?(W("beforeI2svg",t),z("pseudoElements2svg",t),z("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;c.autoReplaceSvg===!1&&(c.autoReplaceSvg=!0),c.observeMutations=!0,ca(()=>{Ta({autoReplaceSvgRoot:e}),W("watch",t)})}},Na={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:D(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=lt(t[0]);return{prefix:n,iconName:D(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(c.cssPrefix,"-"))>-1||t.match(qn))){const e=ft(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||R(),iconName:D(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=R();return{prefix:e,iconName:D(e,t)||t}}}},O={noAuto:Ca,config:c,dom:Ia,parse:Na,library:rn,findIconDefinition:Tt,toHtml:J},Ta=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=h}=t;(Object.keys(I.styles).length>0||c.autoFetchSvg)&&F&&c.autoReplaceSvg&&O.dom.i2svg({node:e})};function ct(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>J(n))}}),Object.defineProperty(t,"node",{get:function(){if(!F)return;const n=h.createElement("div");return n.innerHTML=t.html,n.children}}),t}function _a(t){let{children:e,main:n,mask:a,attributes:r,styles:o,transform:i}=t;if(Xt(i)&&n.found&&!a.found){const{width:s,height:u}=n,f={x:s/u/2,y:.5};r.style=st(l(l({},o),{},{"transform-origin":"".concat(f.x+i.x/16,"em ").concat(f.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Fa(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:o}=t;const i=o===!0?"".concat(e,"-").concat(c.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:i}),children:a}]}]}function Vt(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:o,symbol:i,title:s,maskId:u,titleId:f,extra:m,watchable:g=!1}=t,{width:d,height:y}=n.found?n:e,P=Fn.includes(a),k=[c.replacementClass,r?"".concat(c.cssPrefix,"-").concat(r):""].filter(S=>m.classes.indexOf(S)===-1).filter(S=>S!==""||!!S).concat(m.classes).join(" ");let b={children:[],attributes:l(l({},m.attributes),{},{"data-prefix":a,"data-icon":r,class:k,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(y)})};const x=P&&!~m.classes.indexOf("fa-fw")?{width:"".concat(d/y*16*.0625,"em")}:{};g&&(b.attributes[j]=""),s&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(f||q())},children:[s]}),delete b.attributes.title);const v=l(l({},b),{},{prefix:a,iconName:r,main:e,mask:n,maskId:u,transform:o,symbol:i,styles:l(l({},x),m.styles)}),{children:w,attributes:N}=n.found&&e.found?z("generateAbstractMask",v)||{children:[],attributes:{}}:z("generateAbstractIcon",v)||{children:[],attributes:{}};return v.children=w,v.attributes=N,i?Fa(v):_a(v)}function ce(t){const{content:e,width:n,height:a,transform:r,title:o,extra:i,watchable:s=!1}=t,u=l(l(l({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});s&&(u[j]="");const f=l({},i.styles);Xt(r)&&(f.transform=sa({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);const m=st(f);m.length>0&&(u.style=m);const g=[];return g.push({tag:"span",attributes:u,children:[e]}),o&&g.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),g}function Ma(t){const{content:e,title:n,extra:a}=t,r=l(l(l({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),o=st(a.styles);o.length>0&&(r.style=o);const i=[];return i.push({tag:"span",attributes:r,children:[e]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}const{styles:gt}=I;function _t(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(c.cssPrefix,"-").concat(mt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(c.cssPrefix,"-").concat(mt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(c.cssPrefix,"-").concat(mt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const La={found:!1,width:512,height:512};function Ra(t,e){!Ye&&!c.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ft(t,e){let n=e;return e==="fa"&&c.styleDefault!==null&&(e=R()),new Promise((a,r)=>{if(n==="fa"){const o=nn(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&gt[e]&&gt[e][t]){const o=gt[e][t];return a(_t(o))}Ra(t,e),a(l(l({},La),{},{icon:c.showMissingIcons&&t?z("missingIconAbstract")||{}:{}}))})}const ue=()=>{},Mt=c.measurePerformance&&Z&&Z.mark&&Z.measure?Z:{mark:ue,measure:ue},$='FA "6.7.2"',za=t=>(Mt.mark("".concat($," ").concat(t," begins")),()=>on(t)),on=t=>{Mt.mark("".concat($," ").concat(t," ends")),Mt.measure("".concat($," ").concat(t),"".concat($," ").concat(t," begins"),"".concat($," ").concat(t," ends"))};var qt={begin:za,end:on};const et=()=>{};function me(t){return typeof(t.getAttribute?t.getAttribute(j):null)=="string"}function Da(t){const e=t.getAttribute?t.getAttribute(Yt):null,n=t.getAttribute?t.getAttribute(Ut):null;return e&&n}function ja(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(c.replacementClass)}function Wa(){return c.autoReplaceSvg===!0?nt.replace:nt[c.autoReplaceSvg]||nt.replace}function Ya(t){return h.createElementNS("http://www.w3.org/2000/svg",t)}function Ua(t){return h.createElement(t)}function sn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Ya:Ua}=e;if(typeof t=="string")return h.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])}),(t.children||[]).forEach(function(o){a.appendChild(sn(o,{ceFn:n}))}),a}function Ha(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const nt={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(sn(n),e)}),e.getAttribute(j)===null&&c.keepOriginalSource){let n=h.createComment(Ha(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Gt(e).indexOf(c.replacementClass))return nt.replace(t);const a=new RegExp("".concat(c.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((i,s)=>(s===c.replacementClass||s.match(a)?i.toSvg.push(s):i.toNode.push(s),i),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}const r=n.map(o=>J(o)).join(`
`);e.setAttribute(j,""),e.innerHTML=r}};function de(t){t()}function ln(t,e){const n=typeof e=="function"?e:et;if(t.length===0)n();else{let a=de;c.mutateApproach===$n&&(a=L.requestAnimationFrame||de),a(()=>{const r=Wa(),o=qt.begin("mutate");t.map(r),o(),n()})}}let Kt=!1;function fn(){Kt=!0}function Lt(){Kt=!1}let rt=null;function pe(t){if(!te||!c.observeMutations)return;const{treeCallback:e=et,nodeCallback:n=et,pseudoElementsCallback:a=et,observeMutationsRoot:r=h}=t;rt=new te(o=>{if(Kt)return;const i=R();X(o).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!me(s.addedNodes[0])&&(c.searchPseudoElements&&a(s.target),e(s.target)),s.type==="attributes"&&s.target.parentNode&&c.searchPseudoElements&&a(s.target.parentNode),s.type==="attributes"&&me(s.target)&&~Jn.indexOf(s.attributeName))if(s.attributeName==="class"&&Da(s.target)){const{prefix:u,iconName:f}=ft(Gt(s.target));s.target.setAttribute(Yt,u||i),f&&s.target.setAttribute(Ut,f)}else ja(s.target)&&n(s.target)})}),F&&rt.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Ga(){rt&&rt.disconnect()}function Xa(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const o=r.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(a[i]=s.join(":").trim()),a},{})),n}function $a(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=ft(Gt(t));return r.prefix||(r.prefix=R()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=ba(r.prefix,t.innerText)||Bt(r.prefix,Ct(t.innerText))),!r.iconName&&c.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Ba(t){const e=X(t.attributes).reduce((r,o)=>(r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return c.autoA11y&&(n?e["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(a||q()):(e["aria-hidden"]="true",e.focusable="false")),e}function Va(){return{iconName:null,title:null,titleId:null,prefix:null,transform:C,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ge(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=$a(t),o=Ba(t),i=Nt("parseNodeAttributes",{},t);let s=e.styleParser?Xa(t):[];return l({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:C,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:s,attributes:o}},i)}const{styles:qa}=I;function cn(t){const e=c.autoReplaceSvg==="nest"?ge(t,{styleParser:!1}):ge(t);return~e.extra.classes.indexOf(He)?z("generateLayersText",t,e):z("generateSvgReplacementMutation",t,e)}function Ka(){return[...Nn,...wt]}function he(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!F)return Promise.resolve();const n=h.documentElement.classList,a=m=>n.add("".concat(ae,"-").concat(m)),r=m=>n.remove("".concat(ae,"-").concat(m)),o=c.autoFetchSvg?Ka():Re.concat(Object.keys(qa));o.includes("fa")||o.push("fa");const i=[".".concat(He,":not([").concat(j,"])")].concat(o.map(m=>".".concat(m,":not([").concat(j,"])"))).join(", ");if(i.length===0)return Promise.resolve();let s=[];try{s=X(t.querySelectorAll(i))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();const u=qt.begin("onTree"),f=s.reduce((m,g)=>{try{const d=cn(g);d&&m.push(d)}catch(d){Ye||d.name==="MissingIcon"&&console.error(d)}return m},[]);return new Promise((m,g)=>{Promise.all(f).then(d=>{ln(d,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),u(),m()})}).catch(d=>{u(),g(d)})})}function Qa(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;cn(t).then(n=>{n&&ln([n],e)})}function Ja(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:Tt(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Tt(r||{})),t(a,l(l({},n),{},{mask:r}))}}const Za=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=C,symbol:a=!1,mask:r=null,maskId:o=null,title:i=null,titleId:s=null,classes:u=[],attributes:f={},styles:m={}}=e;if(!t)return;const{prefix:g,iconName:d,icon:y}=t;return ct(l({type:"icon"},t),()=>(W("beforeDOMElementCreation",{iconDefinition:t,params:e}),c.autoA11y&&(i?f["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(s||q()):(f["aria-hidden"]="true",f.focusable="false")),Vt({icons:{main:_t(y),mask:r?_t(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:d,transform:l(l({},C),n),symbol:a,title:i,maskId:o,titleId:s,extra:{attributes:f,styles:m,classes:u}})))};var tr={mixout(){return{icon:Ja(Za)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=he,t.nodeCallback=Qa,t}}},provides(t){t.i2svg=function(e){const{node:n=h,callback:a=()=>{}}=e;return he(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:o,prefix:i,transform:s,symbol:u,mask:f,maskId:m,extra:g}=n;return new Promise((d,y)=>{Promise.all([Ft(a,i),f.iconName?Ft(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(P=>{let[k,b]=P;d([e,Vt({icons:{main:k,mask:b},prefix:i,iconName:a,transform:s,symbol:u,maskId:m,title:r,titleId:o,extra:g,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:o,styles:i}=e;const s=st(i);s.length>0&&(a.style=s);let u;return Xt(o)&&(u=z("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),n.push(u||r.icon),{children:n,attributes:a}}}},er={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return ct({type:"layer"},()=>{W("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(o=>{a=a.concat(o.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(c.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},nr={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:o={}}=e;return ct({type:"counter",content:t},()=>(W("beforeDOMElementCreation",{content:t,params:e}),Ma({content:t.toString(),title:n,extra:{attributes:r,styles:o,classes:["".concat(c.cssPrefix,"-layers-counter"),...a]}})))}}}},ar={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=C,title:a=null,classes:r=[],attributes:o={},styles:i={}}=e;return ct({type:"text",content:t},()=>(W("beforeDOMElementCreation",{content:t,params:e}),ce({content:t,transform:l(l({},C),n),title:a,extra:{attributes:o,styles:i,classes:["".concat(c.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:o}=n;let i=null,s=null;if(Me){const u=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();i=f.width/u,s=f.height/u}return c.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,ce({content:e.innerHTML,width:i,height:s,transform:r,title:a,extra:o,watchable:!0})])}}};const rr=new RegExp('"',"ug"),be=[1105920,1112319],ye=l(l(l(l({},{FontAwesome:{normal:"fas",400:"fas"}}),En),Gn),zn),Rt=Object.keys(ye).reduce((t,e)=>(t[e.toLowerCase()]=ye[e],t),{}),or=Object.keys(Rt).reduce((t,e)=>{const n=Rt[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function ir(t){const e=t.replace(rr,""),n=ma(e,0),a=n>=be[0]&&n<=be[1],r=e.length===2?e[0]===e[1]:!1;return{value:Ct(r?e[0]:e),isSecondary:a||r}}function sr(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(Rt[n]||{})[r]||or[n]}function ve(t,e){const n="".concat(Xn).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const i=X(t.children).filter(d=>d.getAttribute(Ot)===e)[0],s=L.getComputedStyle(t,e),u=s.getPropertyValue("font-family"),f=u.match(Kn),m=s.getPropertyValue("font-weight"),g=s.getPropertyValue("content");if(i&&!f)return t.removeChild(i),a();if(f&&g!=="none"&&g!==""){const d=s.getPropertyValue("content");let y=sr(u,m);const{value:P,isSecondary:k}=ir(d),b=f[0].startsWith("FontAwesome");let x=Bt(y,P),v=x;if(b){const w=ya(P);w.iconName&&w.prefix&&(x=w.iconName,y=w.prefix)}if(x&&!k&&(!i||i.getAttribute(Yt)!==y||i.getAttribute(Ut)!==v)){t.setAttribute(n,v),i&&t.removeChild(i);const w=Va(),{extra:N}=w;N.attributes[Ot]=e,Ft(x,y).then(S=>{const gn=Vt(l(l({},w),{},{icons:{main:S,mask:an()},prefix:y,iconName:v,extra:N,watchable:!0})),ut=h.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(ut,t.firstChild):t.appendChild(ut),ut.outerHTML=gn.map(hn=>J(hn)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function lr(t){return Promise.all([ve(t,"::before"),ve(t,"::after")])}function fr(t){return t.parentNode!==document.head&&!~Bn.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ot)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function xe(t){if(F)return new Promise((e,n)=>{const a=X(t.querySelectorAll("*")).filter(fr).map(lr),r=qt.begin("searchPseudoElements");fn(),Promise.all(a).then(()=>{r(),Lt(),e()}).catch(()=>{r(),Lt(),n()})})}var cr={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=xe,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=h}=e;c.searchPseudoElements&&xe(n)}}};let Ae=!1;var ur={mixout(){return{dom:{unwatch(){fn(),Ae=!0}}}},hooks(){return{bootstrap(){pe(Nt("mutationObserverCallbacks",{}))},noAuto(){Ga()},watch(t){const{observeMutationsRoot:e}=t;Ae?Lt():pe(Nt("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const we=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),o=r[0];let i=r.slice(1).join("-");if(o&&i==="h")return n.flipX=!0,n;if(o&&i==="v")return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(o){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i;break}return n},e)};var mr={mixout(){return{parse:{transform:t=>we(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=we(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:o}=e;const i={transform:"translate(".concat(r/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(s," ").concat(u," ").concat(f)},g={transform:"translate(".concat(o/2*-1," -256)")},d={outer:i,inner:m,path:g};return{tag:"g",attributes:l({},d.outer),children:[{tag:"g",attributes:l({},d.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:l(l({},n.icon.attributes),d.path)}]}]}}}};const ht={x:0,y:0,width:"100%",height:"100%"};function Pe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function dr(t){return t.tag==="g"?t.children:[t]}var pr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?ft(n.split(" ").map(r=>r.trim())):an();return a.prefix||(a.prefix=R()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:o,maskId:i,transform:s}=e;const{width:u,icon:f}=r,{width:m,icon:g}=o,d=ia({transform:s,containerWidth:m,iconWidth:u}),y={tag:"rect",attributes:l(l({},ht),{},{fill:"white"})},P=f.children?{children:f.children.map(Pe)}:{},k={tag:"g",attributes:l({},d.inner),children:[Pe(l({tag:f.tag,attributes:l(l({},f.attributes),d.path)},P))]},b={tag:"g",attributes:l({},d.outer),children:[k]},x="mask-".concat(i||q()),v="clip-".concat(i||q()),w={tag:"mask",attributes:l(l({},ht),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,b]},N={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:dr(g)},w]};return n.push(N,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(x,")")},ht)}),{children:n,attributes:a}}}},gr={provides(t){let e=!1;L.matchMedia&&(e=L.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:l(l({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const o=l(l({},r),{},{attributeName:"opacity"}),i={tag:"circle",attributes:l(l({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||i.children.push({tag:"animate",attributes:l(l({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(i),n.push({tag:"path",attributes:l(l({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:l(l({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:l(l({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},hr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},br=[fa,tr,er,nr,ar,cr,ur,mr,pr,gr,hr];Ea(br,{mixoutsTo:O});O.noAuto;O.config;O.library;O.dom;const zt=O.parse;O.findIconDefinition;O.toHtml;const yr=O.icon;O.layer;O.text;O.counter;var bt={exports:{}},yt,Oe;function vr(){if(Oe)return yt;Oe=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return yt=t,yt}var vt,ke;function xr(){if(ke)return vt;ke=1;var t=vr();function e(){}function n(){}return n.resetWarningCache=e,vt=function(){function a(i,s,u,f,m,g){if(g!==t){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}a.isRequired=a;function r(){return a}var o={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:r,element:a,elementType:a,instanceOf:r,node:a,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:n,resetWarningCache:e};return o.PropTypes=o,o},vt}var Se;function Ar(){return Se||(Se=1,bt.exports=xr()()),bt.exports}var wr=Ar();const p=bn(wr);function Ee(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ee(Object(n),!0).forEach(function(a){U(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ee(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function ot(t){"@babel/helpers - typeof";return ot=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ot(t)}function U(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Pr(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,o;for(o=0;o<a.length;o++)r=a[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Or(t,e){if(t==null)return{};var n=Pr(t,e),a,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function Dt(t){return kr(t)||Sr(t)||Er(t)||Cr()}function kr(t){if(Array.isArray(t))return jt(t)}function Sr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Er(t,e){if(t){if(typeof t=="string")return jt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return jt(t,e)}}function jt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function Cr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ir(t){var e,n=t.beat,a=t.fade,r=t.beatFade,o=t.bounce,i=t.shake,s=t.flash,u=t.spin,f=t.spinPulse,m=t.spinReverse,g=t.pulse,d=t.fixedWidth,y=t.inverse,P=t.border,k=t.listItem,b=t.flip,x=t.size,v=t.rotation,w=t.pull,N=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":o,"fa-shake":i,"fa-flash":s,"fa-spin":u,"fa-spin-reverse":m,"fa-spin-pulse":f,"fa-pulse":g,"fa-fw":d,"fa-inverse":y,"fa-border":P,"fa-li":k,"fa-flip":b===!0,"fa-flip-horizontal":b==="horizontal"||b==="both","fa-flip-vertical":b==="vertical"||b==="both"},U(e,"fa-".concat(x),typeof x<"u"&&x!==null),U(e,"fa-rotate-".concat(v),typeof v<"u"&&v!==null&&v!==0),U(e,"fa-pull-".concat(w),typeof w<"u"&&w!==null),U(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(N).map(function(S){return N[S]?S:null}).filter(function(S){return S})}function Nr(t){return t=t-0,t===t}function un(t){return Nr(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Tr=["style"];function _r(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Fr(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=un(n.slice(0,a)),o=n.slice(a+1).trim();return r.startsWith("webkit")?e[_r(r)]=o:e[r]=o,e},{})}function mn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(u){return mn(t,u)}),r=Object.keys(e.attributes||{}).reduce(function(u,f){var m=e.attributes[f];switch(f){case"class":u.attrs.className=m,delete e.attributes.class;break;case"style":u.attrs.style=Fr(m);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?u.attrs[f.toLowerCase()]=m:u.attrs[un(f)]=m}return u},{attrs:{}}),o=n.style,i=o===void 0?{}:o,s=Or(n,Tr);return r.attrs.style=E(E({},r.attrs.style),i),t.apply(void 0,[e.tag,E(E({},r.attrs),s)].concat(Dt(a)))}var dn=!1;try{dn=!0}catch{}function Mr(){if(!dn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Ce(t){if(t&&ot(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(zt.icon)return zt.icon(t);if(t===null)return null;if(t&&ot(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function xt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?U({},t,e):{}}var Ie={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},pn=Ne.forwardRef(function(t,e){var n=E(E({},Ie),t),a=n.icon,r=n.mask,o=n.symbol,i=n.className,s=n.title,u=n.titleId,f=n.maskId,m=Ce(a),g=xt("classes",[].concat(Dt(Ir(n)),Dt((i||"").split(" ")))),d=xt("transform",typeof n.transform=="string"?zt.transform(n.transform):n.transform),y=xt("mask",Ce(r)),P=yr(m,E(E(E(E({},g),d),y),{},{symbol:o,title:s,titleId:u,maskId:f}));if(!P)return Mr("Could not find icon",m),null;var k=P.abstract,b={ref:e};return Object.keys(n).forEach(function(x){Ie.hasOwnProperty(x)||(b[x]=n[x])}),Lr(k[0],b)});pn.displayName="FontAwesomeIcon";pn.propTypes={beat:p.bool,border:p.bool,beatFade:p.bool,bounce:p.bool,className:p.string,fade:p.bool,flash:p.bool,mask:p.oneOfType([p.object,p.array,p.string]),maskId:p.string,fixedWidth:p.bool,inverse:p.bool,flip:p.oneOf([!0,!1,"horizontal","vertical","both"]),icon:p.oneOfType([p.object,p.array,p.string]),listItem:p.bool,pull:p.oneOf(["right","left"]),pulse:p.bool,rotation:p.oneOf([0,90,180,270]),shake:p.bool,size:p.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:p.bool,spinPulse:p.bool,spinReverse:p.bool,symbol:p.oneOfType([p.bool,p.string]),title:p.string,titleId:p.string,transform:p.oneOfType([p.string,p.object]),swapOpacity:p.bool};var Lr=mn.bind(null,Ne.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Wr={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"]},Yr={prefix:"fas",iconName:"ban",icon:[512,512,[128683,"cancel"],"f05e","M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"]},Ur={prefix:"fas",iconName:"mug-hot",icon:[512,512,[9749],"f7b6","M88 0C74.7 0 64 10.7 64 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C120.5 112.3 128 119.9 128 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C119.5 47.7 112 40.1 112 24c0-13.3-10.7-24-24-24zM32 192c-17.7 0-32 14.3-32 32L0 416c0 53 43 96 96 96l192 0c53 0 96-43 96-96l16 0c61.9 0 112-50.1 112-112s-50.1-112-112-112l-48 0L32 192zm352 64l16 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-16 0 0-96zM224 24c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C232.5 112.3 240 119.9 240 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C231.5 47.7 224 40.1 224 24z"]},Hr={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]},Gr={prefix:"fas",iconName:"minus",icon:[448,512,[8211,8722,10134,"subtract"],"f068","M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]},Rr={prefix:"fas",iconName:"cart-shopping",icon:[576,512,[128722,"shopping-cart"],"f07a","M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},Xr=Rr,zr={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},$r=zr,Br={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},Vr={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]};export{pn as F,$r as a,Vr as b,Gr as c,Br as d,Yr as e,Ur as f,Hr as g,Xr as h,Wr as i};
