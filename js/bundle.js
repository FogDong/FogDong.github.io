function updateStar(){setting.content.clearRect(0,0,setting.width,setting.height),setting.content.save();for(var t=0;t<setting.starArr.length;t++){var e=.35*setting.starArr[t].scale;if(setting.starArr[t].x+=Math.tan(setting.starArr[t].deg*Math.PI/180)*e/2,setting.starArr[t].y=setting.starArr[t].y+e,setting.starArr[t].x<0||setting.starArr[t].x>setting.width||setting.starArr[t].y>setting.height)setting.starArr.splice(t--,1);else{setting.content.beginPath();for(var n=0;n<5;n++)setting.content.lineTo(10*Math.cos((18+72*n)/180*Math.PI)+setting.starArr[t].x,10*-Math.sin((18+72*n)/180*Math.PI)+setting.starArr[t].y),setting.content.lineTo(5*Math.cos((54+72*n)/180*Math.PI)+setting.starArr[t].x,5*-Math.sin((54+72*n)/180*Math.PI)+setting.starArr[t].y);setting.content.closePath(),setting.content.globalAlpha=setting.starArr[t].alpha,setting.content.shadowOffsetX=2,setting.content.shadowOffsetY=2,setting.content.shadowBlur=4,setting.content.shadowColor="rgba(0, 0, 0, 0.15)",setting.content.fillStyle=color[setting.starArr[t].c],setting.content.fill()}}setting.content.restore(),window.requestAnimationFrame(updateStar)}function createNewStar(){setTimeout(function(){if(setting.starArr.length<50)for(var t=0;t<6;t++){var e=Math.random()<.5?-1:1;setting.starArr.push({x:Math.random()*w,y:0,c:Math.floor(6*Math.random()),deg:6*Math.random()*e,scale:3+3*Math.random(),alpha:.5+.1*Math.random()})}createNewStar()},200*Math.random()+500)}!function(){"use strict";function t(e,o){function i(t,e){return function(){return t.apply(e,arguments)}}var r;if(o=o||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=o.touchBoundary||10,this.layer=e,this.tapDelay=o.tapDelay||200,this.tapTimeout=o.tapTimeout||700,!t.notNeeded(e)){for(var a=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],s=this,c=0,l=a.length;c<l;c++)s[a[c]]=i(s[a[c]],s);n&&(e.addEventListener("mouseover",this.onMouse,!0),e.addEventListener("mousedown",this.onMouse,!0),e.addEventListener("mouseup",this.onMouse,!0)),e.addEventListener("click",this.onClick,!0),e.addEventListener("touchstart",this.onTouchStart,!1),e.addEventListener("touchmove",this.onTouchMove,!1),e.addEventListener("touchend",this.onTouchEnd,!1),e.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(e.removeEventListener=function(t,n,o){var i=Node.prototype.removeEventListener;"click"===t?i.call(e,t,n.hijacked||n,o):i.call(e,t,n,o)},e.addEventListener=function(t,n,o){var i=Node.prototype.addEventListener;"click"===t?i.call(e,t,n.hijacked||(n.hijacked=function(t){t.propagationStopped||n(t)}),o):i.call(e,t,n,o)}),"function"==typeof e.onclick&&(r=e.onclick,e.addEventListener("click",function(t){r(t)},!1),e.onclick=null)}}var e=navigator.userAgent.indexOf("Windows Phone")>=0,n=navigator.userAgent.indexOf("Android")>0&&!e,o=/iP(ad|hone|od)/.test(navigator.userAgent)&&!e,i=o&&/OS 4_\d(_\d)?/.test(navigator.userAgent),r=o&&/OS [6-7]_\d/.test(navigator.userAgent),a=navigator.userAgent.indexOf("BB10")>0;t.prototype.needsClick=function(t){switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0;break;case"input":if(o&&"file"===t.type||t.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(t.className)},t.prototype.needsFocus=function(t){switch(t.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!n;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},t.prototype.sendClick=function(t,e){var n,o;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),o=e.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(t),!0,!0,window,1,o.screenX,o.screenY,o.clientX,o.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,t.dispatchEvent(n)},t.prototype.determineEventType=function(t){return n&&"select"===t.tagName.toLowerCase()?"mousedown":"click"},t.prototype.focus=function(t){var e;o&&t.setSelectionRange&&0!==t.type.indexOf("date")&&"time"!==t.type&&"month"!==t.type?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},t.prototype.updateScrollParent=function(t){var e,n;if(e=t.fastClickScrollParent,!e||!e.contains(t)){n=t;do{if(n.scrollHeight>n.offsetHeight){e=n,t.fastClickScrollParent=n;break}n=n.parentElement}while(n)}e&&(e.fastClickLastScrollTop=e.scrollTop)},t.prototype.getTargetElementFromEventTarget=function(t){return t.nodeType===Node.TEXT_NODE?t.parentNode:t},t.prototype.onTouchStart=function(t){var e,n,r;if(t.targetTouches.length>1)return!0;if(e=this.getTargetElementFromEventTarget(t.target),n=t.targetTouches[0],o){if(r=window.getSelection(),r.rangeCount&&!r.isCollapsed)return!0;if(!i){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return t.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(e)}}return this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=n.pageX,this.touchStartY=n.pageY,t.timeStamp-this.lastClickTime<this.tapDelay&&t.preventDefault(),!0},t.prototype.touchHasMoved=function(t){var e=t.changedTouches[0],n=this.touchBoundary;return Math.abs(e.pageX-this.touchStartX)>n||Math.abs(e.pageY-this.touchStartY)>n},t.prototype.onTouchMove=function(t){return!this.trackingClick||((this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0)},t.prototype.findControl=function(t){return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},t.prototype.onTouchEnd=function(t){var e,a,s,c,l,u=this.targetElement;if(!this.trackingClick)return!0;if(t.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(t.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,a=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,r&&(l=t.changedTouches[0],u=document.elementFromPoint(l.pageX-window.pageXOffset,l.pageY-window.pageYOffset)||u,u.fastClickScrollParent=this.targetElement.fastClickScrollParent),s=u.tagName.toLowerCase(),"label"===s){if(e=this.findControl(u)){if(this.focus(u),n)return!1;u=e}}else if(this.needsFocus(u))return t.timeStamp-a>100||o&&window.top!==window&&"input"===s?(this.targetElement=null,!1):(this.focus(u),this.sendClick(u,t),o&&"select"===s||(this.targetElement=null,t.preventDefault()),!1);return!(!o||i||(c=u.fastClickScrollParent,!c||c.fastClickLastScrollTop===c.scrollTop))||(this.needsClick(u)||(t.preventDefault(),this.sendClick(u,t)),!1)},t.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},t.prototype.onMouse=function(t){return!this.targetElement||(!!t.forwardedTouchEvent||(!t.cancelable||(!(!this.needsClick(this.targetElement)||this.cancelNextClick)||(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.preventDefault(),!1))))},t.prototype.onClick=function(t){var e;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail||(e=this.onMouse(t),e||(this.targetElement=null),e)},t.prototype.destroy=function(){var t=this.layer;n&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},t.notNeeded=function(t){var e,o,i,r;if("undefined"==typeof window.ontouchstart)return!0;if(o=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!n)return!0;if(e=document.querySelector("meta[name=viewport]")){if(e.content.indexOf("user-scalable=no")!==-1)return!0;if(o>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(a&&(i=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),i[1]>=10&&i[2]>=3&&(e=document.querySelector("meta[name=viewport]")))){if(e.content.indexOf("user-scalable=no")!==-1)return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===t.style.msTouchAction||"manipulation"===t.style.touchAction||(r=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],!!(r>=27&&(e=document.querySelector("meta[name=viewport]"),e&&(e.content.indexOf("user-scalable=no")!==-1||document.documentElement.scrollWidth<=window.outerWidth)))||("none"===t.style.touchAction||"manipulation"===t.style.touchAction))},t.attach=function(e,n){return new t(e,n)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return t}):"undefined"!=typeof module&&module.exports?(module.exports=t.attach,module.exports.FastClick=t):window.FastClick=t}(),function t(e,n,o){function i(a,s){if(!n[a]){if(!e[a]){var c="function"==typeof require&&require;if(!s&&c)return c(a,!0);if(r)return r(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[a]={exports:{}};e[a][0].call(u.exports,function(t){var n=e[a][1][t];return i(n?n:t)},u,u.exports,t,e,n,o)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<o.length;a++)i(o[a]);return i}({1:[function(t,e,n){"use strict";e.exports=function(t){var e=t.getBoundingClientRect(),n=document.body,o=document.documentElement,i=window.pageYOffset||o.scrollTop||n.scrollTop,r=window.pageXOffset||o.scrollLeft||n.scrollLeft,a=o.clientTop||n.clientTop||0,s=o.clientLeft||n.clientLeft||0,c=e.top+i-a,l=e.left+r-s;return{top:Math.round(c),left:Math.round(l)}}},{}],2:[function(t,e,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},i=t("./scroll-spy");!function(t){"function"==typeof define&&define.amd?define([],t):"object"===("undefined"==typeof window?"undefined":o(window))&&(window.scrollSpy=t())}(function(){return i})},{"./scroll-spy":3}],3:[function(t,e,n){"use strict";function o(t){for(var e=[],n=0,o=t.length;n<o;n++){var i=t[n].hash.replace(/^#/,""),a=document.getElementById(i),s=r(a),c=window.getComputedStyle(document.getElementById(i)).height;e[n]={height:parseInt(c),top:s.top,elem:t[n]}}return e}function i(t,e){for(var n=0,o=0,i=t.length;o<i;o++)if(s.scrollTop<t[o].top-t[o].height/3){n=o;break}for(var r=0,c=t.length;r<c;r++)a.removeClass(t[r].elem,e);n>0&&a.addClass(t[n-1].elem,e)}var r=t("./getOffsetRect"),a=t("./util"),s=document.body;e.exports={init:function(t){var e=t.activeClassName||"active",n=t.scrollTarget||document,r=Array.prototype.slice.call(t.nodeList),s=o(r);i(s,e),a.bind(n,"scroll",function(){i(s,e)})}}},{"./getOffsetRect":1,"./util":4}],4:[function(t,e,n){"use strict";e.exports={bind:function(t,e,n){t.addEventListener(e,n,!1)},addClass:function(t,e){var n=t.className.split(" ");return n.indexOf(e)<0&&n.push(e),t.className=n.join(" "),t},removeClass:function(t,e){var n=t.className.split(" "),o=n.indexOf(e);return o>-1&&n.splice(o,1),t.className=n.join(" "),t}}},{}]},{},[2]),function(t,e){"function"==typeof define&&define.amd?define([],e()):"object"==typeof module&&module.exports?module.exports=e():t.zenscroll=e()}(this,function(){"use strict";var t=function(t,e,n){e=e||500,n&&0===n||(n=9);var o,i=document.documentElement,r=function(){return"getComputedStyle"in window&&"smooth"===window.getComputedStyle(t?t:document.body)["scroll-behavior"]},a=function(){return t?t.scrollTop:window.scrollY||i.scrollTop},s=function(){return t?Math.min(t.offsetHeight,window.innerHeight):window.innerHeight||i.clientHeight},c=function(e){return t?e.offsetTop-t.offsetTop:e.getBoundingClientRect().top+a()-i.offsetTop},l=function(){clearTimeout(o),o=0},u=function(n,c){if(l(),r())(t||window).scrollTo(0,n);else{var u=a(),d=Math.max(n,0)-u;c=c||Math.min(Math.abs(d),e);var h=(new Date).getTime();!function f(){o=setTimeout(function(){var e=Math.min(((new Date).getTime()-h)/c,1),n=Math.max(Math.floor(u+d*(e<.5?2*e*e:e*(4-2*e)-1)),0);t?t.scrollTop=n:window.scrollTo(0,n),e<1&&s()+n<(t||i).scrollHeight?f():setTimeout(l,99)},5)}()}},d=function(t,e){u(c(t)-n,e)},h=function(t,e){var o=t.getBoundingClientRect().height+2*n,i=s(),r=c(t),l=r+o,h=a();r-h<n||o>i?d(t,e):h+i-l<n&&u(l-i,e)},f=function(t,e,n){u(Math.max(c(t)-s()/2+(n||t.getBoundingClientRect().height/2),0),e)},m=function(t,o){t&&(e=t),(0===o||o)&&(n=o)};return{setup:m,to:d,toY:u,intoView:h,center:f,stop:l,moving:function(){return!!o}}},e=t();if("addEventListener"in window&&"smooth"!==document.body.style.scrollBehavior&&!window.noZensmooth){var n=function(t){try{history.replaceState({},"",window.location.href.split("#")[0]+t)}catch(e){}};window.addEventListener("click",function(t){for(var o=t.target;o&&"A"!==o.tagName;)o=o.parentNode;if(!(!o||1!==t.which||t.shiftKey||t.metaKey||t.ctrlKey||t.altKey)){var i=o.getAttribute("href")||"";if(0===i.indexOf("#"))if("#"===i)t.preventDefault(),e.toY(0),n("");else{var r=o.hash.substring(1),a=document.getElementById(r);a&&(t.preventDefault(),e.to(a),n("#"+r))}}},!1)}return{createScroller:t,setup:e.setup,to:e.to,toY:e.toY,intoView:e.intoView,center:e.center,stop:e.stop,moving:e.moving}});var Util={bind:function(t,e,n){t.addEventListener(e,n,!1)},addClass:function(t,e){var n=t.className?t.className.split(" "):[];return n.indexOf(e)<0&&n.push(e),t.className=n.join(" "),t},removeClass:function(t,e){var n=t.className?t.className.split(" "):[],o=n.indexOf(e);return o>-1&&n.splice(o,1),t.className=n.join(" "),t},request:function(t,e,n,o){var i=new XMLHttpRequest;"function"==typeof n&&(o=n,n=null),i.open(t,e);var r=new FormData;if("POST"===t&&n)for(var a in n)r.append(a,JSON.stringify(n[a]));i.onload=function(){o(JSON.parse(i.response))},i.send(n?r:null)}};!function(){"use strict";function t(t,e){var n=[];return t.forEach(function(t){var o=!1,i=[];t.content=t.content.replace(/<[^>]*>/g,""),e.forEach(function(e){var n=new RegExp(e,"i"),r=t.title.search(n),a=t.content.search(n);(r>-1||a>-1)&&(o=!0,i.push(e))}),o&&(t.matchKeyWords=i,n.push(t))}),n}function e(t){var e="";return t.forEach(function(t){var i;i=o(t.content,t.matchKeyWords),i=n(i,t.matchKeyWords),t.title=o(t.title,t.matchKeyWords),t='<li class="item"><a href="'+t.url+'"" target="_blank"><h3 class="title">'+t.title+'</h3></a><p class="post-content">'+i+"</h3></li>",e+=t}),e}function n(t,e){var n=!1,o=0;return e.forEach(function(e){var i=new RegExp(e,"i");o=t.search(i),o<0||(n=!0)}),t=n?o<120?t.substr(0,140):t.substr(o-60,200):t.substr(0,120)}function o(t,e){return t=t.replace(/<[^>]*>/g,""),e.forEach(function(e){var n=new RegExp("("+e+")","ig");t=t.replace(n,'<span class="color-hightlight">$1</span>')}),t}function i(){Util.addClass(d,"hide-dialog"),Util.removeClass(d,"show-dialog"),Util.addClass(l,"hide"),Util.removeClass(l,"show")}var r=(document.documentElement,document.body),a=document.getElementById("toc"),s=document.getElementById("backTop"),c=document.getElementById("toolbox-mobile"),l=document.getElementById("cover"),u=document.getElementById("close"),d=document.getElementById("modal-dialog"),h=0;if(function(){if(s&&(r.scrollTop>10?Util.addClass(s,"show"):Util.removeClass(s,"show")),a){var t=parseInt(window.getComputedStyle(a).height,10),e=document.documentElement.clientHeight;if(t+20>e)return;r.scrollTop>180?Util.addClass(a,"fixed"):Util.removeClass(a,"fixed")}}(),document.addEventListener("DOMContentLoaded",function(){FastClick.attach(document.body)},!1),window.noZensmooth=!0,scrollSpy.init({nodeList:document.querySelectorAll(".toc-link"),scrollTarget:window}),Util.bind(window,"scroll",function(){if(h=r.scrollTop,a){var t=parseInt(window.getComputedStyle(a).height,10),e=document.documentElement.clientHeight;if(t+20>e)return;h>180?Util.addClass(a,"fixed"):Util.removeClass(a,"fixed")}s&&(h>10?Util.addClass(s,"show"):Util.removeClass(s,"show"))}),s&&Util.bind(s,"click",function(){zenscroll.to(r)}),a){var a=document.getElementById("toc"),f=document.querySelectorAll(".toc-link"),m=Array.prototype.slice.call(f);m.forEach(function(t){Util.bind(t,"click",function(t){var e=document.getElementById(this.hash.substring(1));zenscroll.to(e),t.preventDefault()})})}c&&(Util.bind(c,"click",function(){Util.addClass(d,"show-dialog"),Util.removeClass(d,"hide-dialog"),Util.addClass(l,"show"),Util.removeClass(l,"hide")}),Util.bind(l,"click",i),Util.bind(u,"click",i)),"/search/"===location.pathname&&Util.request("GET","/search.json",function(n){var o=document.getElementById("input-search");Util.bind(o,"keyup",function(){var o=this.value.trim().toLowerCase().split(/[\s\-]+/);if(!(this.value.trim().length<=0)){var i=t(n,o),r=document.getElementById("list-search");r.innerHTML=e(i)}})})}();var w=screen.width,h=screen.height/2,colors=[["#b03941","#843f43","#c56077","#f27c73","#e6c4c1"],["#74af9d","#6dd2c5","#b3c3c3","#c1cec4","#cdeeed"],["#599af5","#375aa6","#2c3c6c","#54478f","#090b18"],["#0d4b74","#6691ab","#213a55","#bed0cb","#7f486b"],["#642329","#671b23","#984d4a","#6d4f40","#251a19"],["#402b21","#966a57","#934a3f","#24201c","#d1987e"],["#161114","#333433","#424348","#9d9d97","#ababaa"],["#27424d","#344243","#364143","#203f49","#021623"]],color=colors[Math.floor(8*Math.random())],setting={width:screen.width,height:screen.height/2,canvas:document.getElementById("starlight"),content:null,starArr:[],number:50};setting.canvas.setAttribute("width",setting.width),setting.canvas.setAttribute("height",setting.height),setting.content=setting.canvas.getContext("2d");for(var i=0;i<setting.number;i++){var minus=Math.random()<.5?-1:1;setting.starArr.push({x:Math.random()*w,y:Math.random()*h,c:Math.floor(6*Math.random()),deg:6*Math.random()*minus,scale:3+3*Math.random(),alpha:.5+.1*Math.random()})}updateStar(),createNewStar();