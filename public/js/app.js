!function(){var e,t={122:function(e,t,o){"use strict";var n=o(277);n.ZP.use([n.W_,n.gI]),window.addEventListener("DOMContentLoaded",(function(){var e,t,o,r;e="(max-width: 575px) and (orientation: portrait)",t={slidesPerView:1,speed:600,effect:"creative",creativeEffect:{prev:{shadow:!1,translate:["-120%",0,-500]},next:{shadow:!1,translate:["120%",0,-500]}},navigation:{nextEl:".access__carousel-nav_btn.--next",prevEl:".access__carousel-nav_btn.--prev"}},r=function(){return e.matches?(r=t,void(o=new n.ZP(".access__carousel",r))):void(void 0!==o&&o.destroy(!0,!0));var r},(e=window.matchMedia(e)).addEventListener("change",r),r()})),(new(o(75).Z)).init(),document.querySelector(".layout").classList.contains("removeSmoothScroll")||window.addEventListener("optimizedScroll",(function(){(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0)>10?document.body.classList.add("is-scrolled"):document.body.classList.remove("is-scrolled")}));var r,i=!1;"ontouchstart"in document.documentElement&&(i=!0),document.body.className+=i?" touch":" no-touch",o(282),(r=o(289)).keys().forEach(r)},75:function(e,t,o){"use strict";var n=o(161),r=o(811),i=o(138);e=o.hmd(e);var a=function(){function t(){(0,r.Z)(this,t)}return(0,i.Z)(t,[{key:"init",value:function(){var t,r,i,a,l={frameRate:150,animationTime:400,stepSize:100,pulseAlgorithm:!0,pulseScale:4,pulseNormalize:1,accelerationDelta:50,accelerationMax:3,keyboardSupport:!0,arrowScroll:50,fixedBackground:!0,excluded:""},s=l,c=!1,d={x:0,y:0},u=!1,f=document.documentElement,p=[],C=/^Mac/.test(navigator.platform),w={37:1,38:1,39:1,40:1};function h(){if(!u&&document.body){u=!0;var e=document.body,o=document.documentElement,n=window.innerHeight,a=e.scrollHeight;if(f=document.compatMode.indexOf("CSS")>=0?o:e,t=e,s.keyboardSupport&&P("keydown",L),top!=self)c=!0;else if(ee&&a>n&&(e.offsetHeight<=n||o.offsetHeight<=n)){var l,d=document.createElement("div");if(d.style.cssText="position:absolute; z-index:-10000; top:0; left:0; right:0; height:"+f.scrollHeight+"px",document.body.appendChild(d),i=function(){l||(l=setTimeout((function(){d.style.height="0",d.style.height=f.scrollHeight+"px",l=null}),500))},setTimeout(i,10),P("resize",i),(r=new X(i)).observe(e,{attributes:!0,childList:!0,characterData:!1}),f.offsetHeight<=n){var p=document.createElement("div");p.style.clear="both",e.appendChild(p)}}s.fixedBackground||(e.style.backgroundAttachment="scroll",o.style.backgroundAttachment="scroll")}}var m=[],v=!1,y=Date.now();function g(e,t,o){var n,r;if(n=(n=t)>0?1:-1,r=(r=o)>0?1:-1,(d.x!==n||d.y!==r)&&(d.x=n,d.y=r,m=[],y=0),1!=s.accelerationMax){var i=Date.now()-y;if(i<s.accelerationDelta){var a=(1+50/i)/2;a>1&&(a=Math.min(a,s.accelerationMax),t*=a,o*=a)}y=Date.now()}if(m.push({x:t,y:o,lastX:t<0?.99:-.99,lastY:o<0?.99:-.99,start:Date.now()}),!v){var l=A(),c=e===l||e===document.body;null==e.$scrollBehavior&&function(e){var t=S(e);if(null==F[t]){var o=getComputedStyle(e,"")["scroll-behavior"];F[t]="smooth"==o}return F[t]}(e)&&(e.$scrollBehavior=e.style.scrollBehavior,e.style.scrollBehavior="auto"),Y((function n(r){for(var i=Date.now(),a=0,l=0,d=0;d<m.length;d++){var u=m[d],f=i-u.start,p=f>=s.animationTime,C=p?1:f/s.animationTime;s.pulseAlgorithm&&(C=R(C));var w=u.x*C-u.lastX>>0,h=u.y*C-u.lastY>>0;a+=w,l+=h,u.lastX+=w,u.lastY+=h,p&&(m.splice(d,1),d--)}c?window.scrollBy(a,l):(a&&(e.scrollLeft+=a),l&&(e.scrollTop+=l)),t||o||(m=[]),m.length?Y(n,e,1e3/s.frameRate+1):(v=!1,null!=e.$scrollBehavior&&(e.style.scrollBehavior=e.$scrollBehavior,e.$scrollBehavior=null))}),e,0),v=!0}}function b(e){u||h();var o=e.target;if(e.defaultPrevented||e.ctrlKey)return!0;if(U(t,"embed")||U(o,"embed")&&/\.pdf/i.test(o.src)||U(t,"object")||o.shadowRoot)return!0;var n=-e.wheelDeltaX||e.deltaX||0,r=-e.wheelDeltaY||e.deltaY||0;C&&(e.wheelDeltaX&&V(e.wheelDeltaX,120)&&(n=e.wheelDeltaX/Math.abs(e.wheelDeltaX)*-120),e.wheelDeltaY&&V(e.wheelDeltaY,120)&&(r=e.wheelDeltaY/Math.abs(e.wheelDeltaY)*-120)),n||r||(r=-e.wheelDelta||0),1===e.deltaMode&&(n*=40,r*=40);var i=D(o);return i?!!function(e){if(e){p.length||(p=[e,e,e]),e=Math.abs(e),p.push(e),p.shift(),clearTimeout(a),a=setTimeout((function(){try{localStorage.SS_deltaBuffer=p.join(",")}catch(e){}}),1e3);var t=e>120&&N(e),o=!N(120)&&!N(100)&&!t;return e<50||o}}(r)||(Math.abs(n)>1.2&&(n*=s.stepSize/120),Math.abs(r)>1.2&&(r*=s.stepSize/120),g(i,n,r),e.preventDefault(),void Z()):!c||!I||(Object.defineProperty(e,"target",{value:window.frameElement}),parent.wheel(e))}function L(e){var o=e.target,n=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&32!==e.keyCode;document.body.contains(t)||(t=document.activeElement);var r=/^(button|submit|radio|checkbox|file|color|image)$/i;if(e.defaultPrevented||/^(textarea|select|embed|object)$/i.test(o.nodeName)||U(o,"input")&&!r.test(o.type)||U(t,"video")||function(e){var t=e.target,o=!1;if(-1!=document.URL.indexOf("www.youtube.com/watch"))do{if(o=t.classList&&t.classList.contains("html5-video-controls"))break}while(t=t.parentNode);return o}(e)||o.isContentEditable||n)return!0;if((U(o,"button")||U(o,"input")&&r.test(o.type))&&32===e.keyCode)return!0;if(U(o,"input")&&"radio"==o.type&&w[e.keyCode])return!0;var i=0,a=0,l=D(t);if(!l)return!c||!I||parent.keydown(e);var d=l.clientHeight;switch(l==document.body&&(d=window.innerHeight),e.keyCode){case 38:a=-s.arrowScroll;break;case 40:a=s.arrowScroll;break;case 32:a=-(e.shiftKey?1:-1)*d*.9;break;case 33:a=.9*-d;break;case 34:a=.9*d;break;case 36:l==document.body&&document.scrollingElement&&(l=document.scrollingElement),a=-l.scrollTop;break;case 35:var u=l.scrollHeight-l.scrollTop-d;a=u>0?u+10:0;break;case 37:i=-s.arrowScroll;break;case 39:i=s.arrowScroll;break;default:return!0}g(l,i,a),e.preventDefault(),Z()}function x(e){t=e.target}var M,_,S=(M=0,function(e){return e.uniqueID||(e.uniqueID=M++)}),E={},k={},F={};function Z(){clearTimeout(_),_=setInterval((function(){E=k=F={}}),1e3)}function O(e,t,o){for(var n=o?E:k,r=e.length;r--;)n[S(e[r])]=t;return t}function B(e,t){return(t?E:k)[S(e)]}function D(e){var t=[],o=document.body,n=f.scrollHeight;do{var r=B(e,!1);if(r)return O(t,r);if(t.push(e),n===e.scrollHeight){var i=H(f)&&H(o)||j(f);if(c&&T(f)||!c&&i)return O(t,A())}else if(T(e)&&j(e))return O(t,e)}while(e=e.parentElement)}function T(e){return e.clientHeight+10<e.scrollHeight}function H(e){return"hidden"!==getComputedStyle(e,"").getPropertyValue("overflow-y")}function j(e){var t=getComputedStyle(e,"").getPropertyValue("overflow-y");return"scroll"===t||"auto"===t}function P(e,t,o){window.addEventListener(e,t,o||!1)}function z(e,t,o){window.removeEventListener(e,t,o||!1)}function U(e,t){return e&&(e.nodeName||"").toLowerCase()===t.toLowerCase()}if(window.localStorage&&localStorage.SS_deltaBuffer)try{p=localStorage.SS_deltaBuffer.split(",")}catch(e){}function V(e,t){return Math.floor(e/t)==e/t}function N(e){return V(p[0],e)&&V(p[1],e)&&V(p[2],e)}var G,Y=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e,t,o){window.setTimeout(e,o||1e3/60)},X=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,A=(G=document.scrollingElement,function(){if(!G){var e=document.createElement("div");e.style.cssText="height:10000px;width:1px;",document.body.appendChild(e);var t=document.body.scrollTop;document.documentElement.scrollTop,window.scrollBy(0,3),G=document.body.scrollTop!=t?document.body:document.documentElement,window.scrollBy(0,-3),document.body.removeChild(e)}return G});function K(e){var t,o;return(e*=s.pulseScale)<1?t=e-(1-Math.exp(-e)):(e-=1,t=(o=Math.exp(-1))+(1-Math.exp(-e))*(1-o)),t*s.pulseNormalize}function R(e){return e>=1?1:e<=0?0:(1==s.pulseNormalize&&(s.pulseNormalize/=K(1)),K(e))}var $=window.navigator.userAgent,q=/Edge/.test($),I=/chrome/i.test($)&&!q,W=/safari/i.test($)&&!q,J=/mobile/i.test($),Q=/Windows NT 6.1/i.test($)&&/rv:11/i.test($),ee=W&&(/Version\/8/i.test($)||/Version\/9/i.test($)),te=(I||W||Q)&&!J,oe=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){oe=!0}}))}catch(e){}var ne=!!oe&&{passive:!1},re="onwheel"in document.createElement("div")?"wheel":"mousewheel";function ie(e){for(var t in e)l.hasOwnProperty(t)&&(s[t]=e[t])}re&&te&&(P(re,b,ne),P("mousedown",x),P("load",h)),ie.destroy=function(){r&&r.disconnect(),z(re,b),z("mousedown",x),z("keydown",L),z("resize",i),z("load",h)},window.SmoothScrollOptions&&ie(window.SmoothScrollOptions),"function"==typeof define&&o.amdO?define((function(){return ie})):"object"==("undefined"==typeof exports?"undefined":(0,n.Z)(exports))?e.exports=ie:window.SmoothScroll=ie,ie({frameRate:150,animationTime:700,stepSize:100})}}]),t}();t.Z=a},945:function(){},282:function(e,t,o){var n=o(379),r=o(945);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.id,r,""]]);n(r,{insert:"head",singleton:!1}),e.exports=r.locals||{}},819:function(e,t,o){"use strict";o.r(t);var n=o(589),r=o.n(n),i=o(875),a=o.n(i),l=new(r())({id:"0rub",use:"0rub-usage",viewBox:"0 0 83 83",content:'<symbol viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg" id="0rub">\n<path d="M8.06453 63.8352C-5.85806 48.5349 12.7903 15.6675 24.8591 12.929C36.9609 10.1606 64.2127 40.2415 60.3544 51.937C56.4925 63.6946 22.0164 79.1678 8.06453 63.8352Z" fill="url(#0rub_paint0_linear_516_47)" />\n<path d="M8.06453 63.8352C-5.85806 48.5349 12.7903 15.6675 24.8591 12.929C36.9609 10.1606 64.2127 40.2415 60.3544 51.937C56.4925 63.6946 22.0164 79.1678 8.06453 63.8352Z" fill="white" fill-opacity="0.5" />\n<path d="M30.4003 60.5716C28.7103 60.4554 27.1602 59.9992 25.7501 59.2031C24.3753 58.3761 23.209 57.1806 22.2512 55.6165C21.3288 54.0216 20.6479 52.0604 20.2087 49.733C19.7717 47.3724 19.6626 44.6016 19.8814 41.4204C20.1001 38.2393 20.5863 35.5261 21.34 33.2806C22.096 31.0021 23.0388 29.1526 24.1686 27.732C25.3315 26.3138 26.6493 25.3057 28.1221 24.7079C29.6279 24.1122 31.2259 23.8725 32.9158 23.9887C34.6058 24.105 36.1393 24.56 37.5163 25.3538C38.8933 26.1477 40.0442 27.3255 40.9689 28.8873C41.8959 30.4159 42.5624 32.3428 42.9685 34.668C43.4078 36.9955 43.518 39.7497 43.2993 42.9309C43.0805 46.112 42.5932 48.8418 41.8372 51.1204C41.1167 53.3681 40.1904 55.2187 39.0583 56.6724C37.9263 58.126 36.6227 59.1684 35.1477 59.7994C33.6727 60.4304 32.0902 60.6878 30.4003 60.5716ZM30.6206 56.6415C31.7472 56.719 32.7584 56.5388 33.6541 56.101C34.5499 55.6632 35.3347 54.9015 36.0086 53.8158C36.6826 52.7302 37.2313 51.2864 37.6549 49.4844C38.1138 47.6515 38.4345 45.4096 38.6167 42.7587C38.799 40.1078 38.8037 37.8608 38.6308 36.0178C38.4602 34.1416 38.1154 32.6197 37.5964 31.452C37.0774 30.2844 36.4042 29.4224 35.5768 28.8661C34.7495 28.3098 33.7725 27.9929 32.6458 27.9154C31.5192 27.838 30.4914 28.017 29.5625 28.4525C28.6668 28.8903 27.8654 29.6509 27.1583 30.7343C26.4844 31.8199 25.918 33.2791 25.459 35.112C25.0354 36.914 24.7325 39.1405 24.5502 41.7914C24.3679 44.4424 24.3621 46.7059 24.5327 48.5821C24.7388 50.4274 25.1013 51.9339 25.6203 53.1015C26.1393 54.2692 26.8125 55.1311 27.6398 55.6874C28.5004 56.246 29.4939 56.564 30.6206 56.6415Z" fill="#21201F" />\n<path d="M54.3102 41.99L55.4107 25.985L63.8109 26.5627C67.5222 26.8179 70.3493 27.8279 72.2921 29.5929C74.268 31.3602 75.1432 33.884 74.9177 37.1646C74.8014 38.8545 74.403 40.292 73.7222 41.4771C73.0746 42.6644 72.1766 43.6181 71.0285 44.3382C69.9157 45.0274 68.6 45.5196 67.0815 45.8147C65.5653 46.0767 63.896 46.145 62.0734 46.0197L58.7432 45.7907L58.4527 50.0156L68.841 50.7299L68.6018 54.2093L58.2134 53.4949L57.6324 61.9448L52.9601 61.6235L53.5412 53.1737L49.4654 52.8934L49.7046 49.414L53.7804 49.6943L54.0709 45.4694L49.9951 45.1891L50.2344 41.7098L54.3102 41.99ZM59.8062 30.3324L58.9825 42.3113L62.3127 42.5403C64.7317 42.7067 66.6049 42.3361 67.9325 41.4285C69.2954 40.4902 70.0498 38.9606 70.1957 36.8399C70.3301 34.8848 69.8659 33.4046 68.8031 32.3993C67.7756 31.3632 66.0193 30.7596 63.534 30.5888L59.8062 30.3324Z" fill="#21201F" />\n<defs>\n<linearGradient id="0rub_paint0_linear_516_47" x1="8.07898" y1="63.8514" x2="48.5806" y2="26.997" gradientUnits="userSpaceOnUse">\n<stop stop-color="#FF5C4D" />\n<stop offset="0.25" stop-color="#EB469F" />\n<stop offset="0.72" stop-color="#8341EF" />\n<stop offset="1" stop-color="#3F68F9" />\n</linearGradient>\n</defs>\n</symbol>'});a().add(l),t.default=l},661:function(e,t,o){"use strict";o.r(t);var n=o(589),r=o.n(n),i=o(875),a=o.n(i),l=new(r())({id:"arrow-left",use:"arrow-left-usage",viewBox:"0 0 49 48",content:'<symbol viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg" id="arrow-left">\n<g id="arrow-left_Group 120868">\n<circle id="arrow-left_Ellipse 1837" cx="24" cy="24" r="24" transform="matrix(-1 0 0 1 48.5 0)" fill="#FFDE40" />\n<path id="arrow-left_Vector 252" d="M35.75 22.5C36.5784 22.5 37.25 23.1716 37.25 24C37.25 24.8284 36.5784 25.5 35.75 25.5L35.75 22.5ZM12.1893 25.0607C11.6036 24.4749 11.6036 23.5251 12.1893 22.9393L21.7353 13.3934C22.3211 12.8076 23.2708 12.8076 23.8566 13.3934C24.4424 13.9792 24.4424 14.9289 23.8566 15.5147L15.3713 24L23.8566 32.4853C24.4424 33.0711 24.4424 34.0208 23.8566 34.6066C23.2708 35.1924 22.3211 35.1924 21.7353 34.6066L12.1893 25.0607ZM35.75 25.5L13.25 25.5L13.25 22.5L35.75 22.5L35.75 25.5Z" fill="#21201F" />\n</g>\n</symbol>'});a().add(l),t.default=l},422:function(e,t,o){"use strict";o.r(t);var n=o(589),r=o.n(n),i=o(875),a=o.n(i),l=new(r())({id:"arrow-right",use:"arrow-right-usage",viewBox:"0 0 49 48",content:'<symbol viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg" id="arrow-right">\n<g id="arrow-right_Group 120867">\n<circle id="arrow-right_Ellipse 1837" cx="24.5" cy="24" r="24" fill="#FFDE40" />\n<path id="arrow-right_Vector 252" d="M13.25 22.5C12.4216 22.5 11.75 23.1716 11.75 24C11.75 24.8284 12.4216 25.5 13.25 25.5L13.25 22.5ZM36.8107 25.0607C37.3964 24.4749 37.3964 23.5251 36.8107 22.9393L27.2647 13.3934C26.6789 12.8076 25.7292 12.8076 25.1434 13.3934C24.5576 13.9792 24.5576 14.9289 25.1434 15.5147L33.6287 24L25.1434 32.4853C24.5576 33.0711 24.5576 34.0208 25.1434 34.6066C25.7292 35.1924 26.6789 35.1924 27.2647 34.6066L36.8107 25.0607ZM13.25 25.5L35.75 25.5L35.75 22.5L13.25 22.5L13.25 25.5Z" fill="#21201F" />\n</g>\n</symbol>'});a().add(l),t.default=l},856:function(e,t,o){"use strict";o.r(t);var n=o(589),r=o.n(n),i=o(875),a=o.n(i),l=new(r())({id:"battery",use:"battery-usage",viewBox:"0 0 83 83",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 83 83" fill="none" id="battery">\n    <path d="M0.859306 53.5427C-6.16149 30.1404 31.7016 1.98502 46.7354 19.4287C56.6772 30.9618 55.941 58.6047 41.5275 69.3227C27.1141 80.0407 5.50028 69.0175 0.859306 53.5427Z" fill="url(#battery_paint0_linear_516_65)" />\n    <path d="M0.859306 53.5427C-6.16149 30.1404 31.7016 1.98502 46.7354 19.4287C56.6772 30.9618 55.941 58.6047 41.5275 69.3227C27.1141 80.0407 5.50028 69.0175 0.859306 53.5427Z" fill="white" fill-opacity="0.5" />\n    <path d="M22.8016 40.8173C22.4292 36.5606 25.578 32.808 29.8347 32.4356L60.1787 29.7809C64.4353 29.4084 68.188 32.5573 68.5604 36.8139L69.4199 46.6383C69.7923 50.895 66.6435 54.6476 62.3868 55.02L32.0428 57.6747C27.7861 58.0471 24.0335 54.8983 23.6611 50.6417L22.8016 40.8173Z" stroke="#21201F" stroke-width="3.50169" />\n    <defs>\n        <linearGradient id="battery_paint0_linear_516_65" x1="51.8561" y1="27.8978" x2="1.22539" y2="55.2356" gradientUnits="userSpaceOnUse">\n            <stop stop-color="#FF5C4D" />\n            <stop offset="0.25" stop-color="#EB469F" />\n            <stop offset="0.72" stop-color="#8341EF" />\n            <stop offset="1" stop-color="#3F68F9" />\n        </linearGradient>\n    </defs>\n</symbol>'});a().add(l),t.default=l},618:function(e,t,o){"use strict";o.r(t);var n=o(589),r=o.n(n),i=o(875),a=o.n(i),l=new(r())({id:"clock",use:"clock-usage",viewBox:"0 0 83 83",content:'<symbol viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg" id="clock">\n<path d="M11.6919 50.1964C6.03863 32.9173 36.5269 12.1287 48.6324 25.0083C56.6378 33.5238 56.0449 53.9339 44.4389 61.8476C32.8329 69.7612 15.429 61.6222 11.6919 50.1964Z" fill="url(#clock_paint0_linear_516_60)" />\n<path d="M11.6919 50.1964C6.03863 32.9173 36.5269 12.1287 48.6324 25.0083C56.6378 33.5238 56.0449 53.9339 44.4389 61.8476C32.8329 69.7612 15.429 61.6222 11.6919 50.1964Z" fill="white" fill-opacity="0.5" />\n<path d="M45.329 67.8812C32.5912 68.8642 22.9999 60.6472 22.0169 47.9094C21.034 35.1716 29.2509 25.5803 41.9888 24.5973C47.0592 24.206 51.7422 25.2442 55.5933 27.5906C61.2734 31.071 64.7234 37.0872 65.3008 44.5691C66.2838 57.307 58.0668 66.8982 45.329 67.8812ZM40.6863 27.8702C30.5028 29.3092 24.2927 37.0972 25.1087 47.6708C25.9652 58.77 33.9912 65.646 45.0904 64.7895C56.1896 63.933 63.0656 55.907 62.2091 44.8077C61.7105 38.3461 58.791 33.1598 53.9624 30.2357C51.0581 28.4693 47.5689 27.5878 43.778 27.6316L45.46 49.4281L31.3309 50.5185L31.0756 47.2103L42.113 46.3586L40.6863 27.8702ZM66.1064 32.4397L64.3245 29.9025L68.4263 27.0357L70.2083 29.5729L66.1064 32.4397ZM59.4478 25.1472L56.8598 23.4497L61.8738 15.8784L64.4618 17.5759L59.4478 25.1472ZM49.1512 20.6857L46.0522 20.4272C46.102 19.8635 45.9069 19.3499 45.4359 18.8886C43.7492 17.1838 39.0498 17.5465 37.6448 19.4899C37.281 20.0155 37.167 20.5531 37.3003 21.0715L34.2777 21.8024C33.9182 20.3684 34.2389 18.8819 35.14 17.6616C36.3763 15.9489 38.652 14.8092 41.1872 14.6135C43.7533 14.4155 46.146 15.195 47.6305 16.6977C48.7414 17.7938 49.2864 19.2135 49.1512 20.6857Z" fill="#21201F" />\n<defs>\n<linearGradient id="clock_paint0_linear_516_60" x1="52.7557" y1="31.2615" x2="13.6578" y2="54.2842" gradientUnits="userSpaceOnUse">\n<stop stop-color="#FF5C4D" />\n<stop offset="0.25" stop-color="#EB469F" />\n<stop offset="0.72" stop-color="#8341EF" />\n<stop offset="1" stop-color="#3F68F9" />\n</linearGradient>\n</defs>\n</symbol>'});a().add(l),t.default=l},107:function(e,t,o){"use strict";o.r(t);var n=o(589),r=o.n(n),i=o(875),a=o.n(i),l=new(r())({id:"scooter",use:"scooter-usage",viewBox:"0 0 94 83",content:'<symbol viewBox="0 0 94 83" fill="none" xmlns="http://www.w3.org/2000/svg" id="scooter">\n<path d="M24.4163 32.8198C24.4163 16.3927 52.325 7.05517 60.6942 11.8968C69.0979 16.7385 69.0288 48.9702 60.6942 53.7773C52.325 58.6189 24.4163 49.2814 24.4163 32.8198Z" fill="url(#scooter_paint0_linear_516_53)" />\n<path d="M24.4163 32.8198C24.4163 16.3927 52.325 7.05517 60.6942 11.8968C69.0979 16.7385 69.0288 48.9702 60.6942 53.7773C52.325 58.6189 24.4163 49.2814 24.4163 32.8198Z" fill="white" fill-opacity="0.5" />\n<path d="M63.8412 67.506C59.5528 67.506 55.1953 64.5318 55.1953 58.8601C55.1953 55.3326 57.0974 52.4276 60.0024 51.0443L51.5987 19.4006C46.9645 19.3314 43.0566 19.4351 39.4253 19.7118L39.1487 16.2535C43.2295 15.9422 47.587 15.8385 52.9474 15.9422L54.2616 15.9768L63.3224 50.2143C68.3716 49.9722 72.4524 53.7418 72.4524 58.8601C72.487 63.8056 68.752 67.506 63.8412 67.506ZM63.8412 53.6726C60.8324 53.6726 58.6537 55.8514 58.6537 58.8601C58.6537 62.6989 61.4549 64.0476 63.8412 64.0476C66.8499 64.0476 69.0287 61.8689 69.0287 58.8601C69.0287 55.8514 66.8499 53.6726 63.8412 53.6726ZM19.1595 67.506C14.8712 67.506 10.5137 64.5318 10.5137 58.8601C10.5137 53.9147 14.2141 50.2143 19.1595 50.2143C23.4824 50.2143 26.8716 53.0847 27.6324 57.131H37.5924C41.5695 57.131 43.437 56.3701 46.3074 53.6726C48.7628 51.321 51.1145 48.831 53.2933 46.2372L55.9562 48.4506C53.7083 51.1481 51.2528 53.7418 48.6937 56.1626C45.1662 59.5172 42.4687 60.5893 37.5924 60.5893H27.667C26.9062 64.6356 23.517 67.506 19.1595 67.506ZM19.1595 53.6726C16.1508 53.6726 13.972 55.8514 13.972 58.8601C13.972 62.6989 16.7733 64.0476 19.1595 64.0476C22.1683 64.0476 24.347 61.8689 24.347 58.8601C24.347 55.8514 22.1683 53.6726 19.1595 53.6726ZM62.9074 24.0347H60.6595C59.4145 24.0347 58.377 23.0318 58.377 21.7522C58.377 20.5072 59.3799 19.5043 60.6595 19.5043H62.9074V24.0347Z" fill="#21201F" />\n<path d="M78.1241 16.4158L67.6919 5.53254L69.4179 3.74031L79.8755 14.6236L78.1241 16.4158ZM69.4179 16.4158L67.6919 14.6236L78.1749 3.74031L79.8755 5.53254L69.4179 16.4158Z" fill="#21201F" />\n<path d="M84.8656 10.5975V7.79231H87.2008C87.7761 7.79231 88.2753 7.69707 88.6984 7.50659C89.1214 7.2988 89.4514 7.00442 89.6883 6.62346C89.9252 6.22519 90.0436 5.74899 90.0436 5.19487C90.0436 4.67538 89.9252 4.23382 89.6883 3.87018C89.4683 3.50654 89.1383 3.22948 88.6984 3.039C88.2584 2.8312 87.7169 2.72731 87.0739 2.72731C86.2786 2.72731 85.5171 2.87449 84.7895 3.16887C84.0787 3.44593 83.3173 3.90481 82.505 4.54551V1.53249C82.9788 1.18616 83.4696 0.900444 83.9772 0.675333C84.4849 0.450221 85.0348 0.285717 85.6271 0.18182C86.2193 0.0606066 86.8539 0 87.5308 0C88.7153 0 89.7391 0.207795 90.6021 0.623385C91.4651 1.03897 92.1335 1.61907 92.6073 2.36367C93.0811 3.10827 93.318 3.96542 93.318 4.93513C93.318 5.55851 93.208 6.12129 92.988 6.62346C92.768 7.12563 92.4804 7.54988 92.125 7.89621C91.7697 8.24253 91.3635 8.51959 90.9067 8.72739C90.4498 8.93518 89.9844 9.06505 89.5106 9.117V9.0131C90.086 9.06505 90.6359 9.20358 91.1605 9.42869C91.702 9.63649 92.1842 9.93086 92.6073 10.3118C93.0303 10.6928 93.3603 11.1517 93.5972 11.6885C93.851 12.2253 93.9779 12.84 93.9779 13.5326C93.9779 14.6582 93.6987 15.6452 93.1403 16.4937C92.5819 17.3249 91.8035 17.9743 90.8051 18.4418C89.8067 18.892 88.6391 19.1171 87.3023 19.1171C86.6255 19.1171 85.974 19.0565 85.3479 18.9353C84.7218 18.8314 84.138 18.6669 83.5965 18.4418C83.055 18.1994 82.5558 17.9137 82.0989 17.5846V14.5716C82.8942 15.195 83.6895 15.6539 84.4849 15.9483C85.2802 16.2426 86.1347 16.3898 87.0485 16.3898C87.8269 16.3898 88.4784 16.2686 89.003 16.0262C89.5275 15.7838 89.9167 15.4461 90.1706 15.0132C90.4413 14.563 90.5767 14.0262 90.5767 13.4028C90.5767 12.7794 90.4498 12.2599 90.1959 11.8443C89.9421 11.4287 89.5614 11.117 89.0537 10.9092C88.5461 10.7014 87.8946 10.5975 87.0993 10.5975H84.8656Z" fill="#21201F" />\n<defs>\n<linearGradient id="scooter_paint0_linear_516_53" x1="24.4163" y1="32.8369" x2="66.9711" y2="32.8369" gradientUnits="userSpaceOnUse">\n<stop stop-color="#FF5C4D" />\n<stop offset="0.25" stop-color="#EB469F" />\n<stop offset="0.72" stop-color="#8341EF" />\n<stop offset="1" stop-color="#3F68F9" />\n</linearGradient>\n</defs>\n</symbol>'});a().add(l),t.default=l},289:function(e,t,o){var n={"./0rub.svg":819,"./arrow-left.svg":661,"./arrow-right.svg":422,"./battery.svg":856,"./clock.svg":618,"./scooter.svg":107};function r(e){var t=i(e);return o(t)}function i(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=289}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var i=o[e]={id:e,loaded:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=t,n.amdO={},e=[],n.O=function(t,o,r,i){if(!o){var a=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],i=e[c][2];for(var l=!0,s=0;s<o.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(l=!1,i<a&&(a=i));l&&(e.splice(c--,1),t=r())}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,r,i]},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.hmd=function(e){return(e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],l=o[1],s=o[2],c=0;for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(s)var d=s(n);for(t&&t(o);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[a[c]]=0;return n.O(d)},o=self.webpackChunkyandex_go=self.webpackChunkyandex_go||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var r=n.O(void 0,[216],(function(){return n(122)}));r=n.O(r)}();
//# sourceMappingURL=app.js.map