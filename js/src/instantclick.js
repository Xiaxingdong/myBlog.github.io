// build time:Mon Feb 10 2020 22:05:00 GMT+0800 (GMT+08:00)
var InstantClick=function(e,t){var r=navigator.userAgent,n=r.indexOf(" CriOS/")>-1,a="createTouch"in e,f,s,o,l,u={},d,c=false,h=false,v=false,p=false,m={},y=false,b=false,g=[],T,w,E,L={fetch:[],receive:[],wait:[],change:[]};function A(e){var t=e.indexOf("#");if(t<0){return e}return e.substr(0,t)}function x(e){while(e&&e.nodeName!="A"){e=e.parentNode}return e}function k(e){do{if(!e.hasAttribute){break}if(e.hasAttribute("data-instant")){return false}if(e.hasAttribute("data-no-instant")){return true}}while(e=e.parentNode);return false}function C(e){do{if(!e.hasAttribute){break}if(e.hasAttribute("data-no-instant")){return false}if(e.hasAttribute("data-instant")){return true}}while(e=e.parentNode);return false}function M(e){var r=t.protocol+"//"+t.host;if(e.target||e.hasAttribute("download")||e.href.indexOf(r+"/")!=0||e.href.indexOf("#")>-1&&A(e.href)==f||(T?!C(e):k(e))){return false}return true}function O(e,t,r,n){var i=false;for(var a=0;a<L[e].length;a++){if(e=="receive"){var f=L[e][a](t,r,n);if(f){if("body"in f){r=f.body}if("title"in f){n=f.title}i=f}}else{L[e][a](t,r,n)}}return i}function H(t,r,i,a){e.documentElement.replaceChild(r,e.body);if(i){history.pushState(null,null,i);var s=i.indexOf("#"),o=s>-1&&e.getElementById(i.substr(s+1)),l=0;if(o){while(o.offsetParent){l+=o.offsetTop;o=o.offsetParent}}scrollTo(0,l);f=A(i)}else{scrollTo(0,a)}if(n&&e.title==t){e.title=t+String.fromCharCode(160)}else{e.title=t}K();X.done();O("change",false);var u=e.createEvent("HTMLEvents");u.initEvent("instantclick:newpage",true,true);dispatchEvent(u)}function Y(){y=false;b=false}function D(e){return e.replace(/<noscript[\s\S]+<\/noscript>/gi,"")}function B(e){if(l>+new Date-500){return}var t=x(e.target);if(!t||!M(t)){return}P(t.href)}function N(e){if(l>+new Date-500){return}var t=x(e.target);if(!t||!M(t)){return}t.addEventListener("mouseout",z);if(!E){P(t.href)}else{s=t.href;o=setTimeout(P,E)}}function S(e){l=+new Date;var t=x(e.target);if(!t||!M(t)){return}if(w){t.removeEventListener("mousedown",B)}else{t.removeEventListener("mouseover",N)}P(t.href)}function I(e){var t=x(e.target);if(!t||!M(t)){return}if(e.which>1||e.metaKey||e.ctrlKey){return}e.preventDefault();R(t.href)}function z(){if(o){clearTimeout(o);o=false;return}if(!y||b){return}d.abort();Y()}function W(){if(d.readyState<4){return}if(d.status==0){return}m.ready=+new Date-m.start;if(d.getResponseHeader("Content-Type").match(/\/(x|ht|xht)ml/)){var t=e.implementation.createHTMLDocument("");t.documentElement.innerHTML=D(d.responseText);h=t.title;p=t.body;var r=O("receive",c,p,h);if(r){if("body"in r){p=r.body}if("title"in r){h=r.title}}var n=A(c);u[n]={body:p,title:h,scrollY:n in u?u[n].scrollY:0};var i=t.head.children,a=0,f,s;for(var o=i.length-1;o>=0;o--){f=i[o];if(f.hasAttribute("data-instant-track")){s=f.getAttribute("href")||f.getAttribute("src")||f.innerHTML;for(var l=g.length-1;l>=0;l--){if(g[l]==s){a++}}}}if(a!=g.length){v=true}}else{v=true}if(b){b=false;R(c)}}function K(t){e.body.addEventListener("touchstart",S,true);if(w){e.body.addEventListener("mousedown",B,true)}else{e.body.addEventListener("mouseover",N,true)}e.body.addEventListener("click",I,true);if(!t){var r=e.body.getElementsByTagName("script"),n,a,f,s;for(i=0,j=r.length;i<j;i++){n=r[i];if(n.hasAttribute("data-no-instant")){continue}a=e.createElement("script");if(n.src){a.src=n.src}if(n.innerHTML){a.innerHTML=n.innerHTML}f=n.parentNode;s=n.nextSibling;f.removeChild(n);f.insertBefore(a,s)}}}function P(e){if(!w&&"display"in m&&+new Date-(m.start+m.display)<100){return}if(o){clearTimeout(o);o=false}if(!e){e=s}if(y&&(e==c||b)){return}y=true;b=false;c=e;p=false;v=false;m={start:+new Date};O("fetch");d.open("GET",e);d.send()}function R(e){if(!("display"in m)){m.display=+new Date-m.start}if(o||!y){if(o&&c&&c!=e){t.href=e;return}P(e);X.start(0,true);O("wait");b=true;return}if(b){t.href=e;return}if(v){t.href=c;return}if(!p){X.start(0,true);O("wait");b=true;return}u[f].scrollY=pageYOffset;Y();H(h,p,c)}var X=function(){var t,r,n,i,f;function s(){t=e.createElement("div");t.id="instantclick";r=e.createElement("div");r.id="instantclick-bar";r.className="instantclick-bar";t.appendChild(r);var i=["Webkit","Moz","O"];n="transform";if(!(n in r.style)){for(var f=0;f<3;f++){if(i[f]+"Transform"in r.style){n=i[f]+"Transform"}}}var s="transition";if(!(s in r.style)){for(var f=0;f<3;f++){if(i[f]+"Transition"in r.style){s="-"+i[f].toLowerCase()+"-"+s}}}var o=e.createElement("style");o.innerHTML="#instantclick{position:"+(a?"absolute":"fixed")+";top:0;left:0;width:100%;pointer-events:none;z-index:2147483647;"+s+":opacity .25s .1s}"+".instantclick-bar{background:#29d;width:100%;margin-left:-100%;height:2px;"+s+":all .25s}";e.head.appendChild(o);if(a){h();addEventListener("resize",h);addEventListener("scroll",h)}}function o(r,n){i=r;if(e.getElementById(t.id)){e.body.removeChild(t)}t.style.opacity="1";if(e.getElementById(t.id)){e.body.removeChild(t)}d();if(n){setTimeout(l,0)}clearTimeout(f);f=setTimeout(u,500)}function l(){i=10;d()}function u(){i+=1+Math.random()*2;if(i>=98){i=98}else{f=setTimeout(u,500)}d()}function d(){r.style[n]="translate("+i+"%)";if(!e.getElementById(t.id)){e.body.appendChild(t)}}function c(){if(e.getElementById(t.id)){clearTimeout(f);i=100;d();t.style.opacity="0";return}o(i==100?0:i);setTimeout(c,0)}function h(){t.style.left=pageXOffset+"px";t.style.width=innerWidth+"px";t.style.top=pageYOffset+"px";var e="orientation"in window&&Math.abs(orientation)==90,r=innerWidth/screen[e?"height":"width"]*2;t.style[n]="scaleY("+r+")"}return{init:s,start:o,done:c}}();var q="pushState"in history&&(!r.match("Android")||r.match("Chrome/"))&&t.protocol!="file:";function G(){if(f){return}if(!q){O("change",true);return}for(var r=arguments.length-1;r>=0;r--){var n=arguments[r];if(n===true){T=true}else if(n=="mousedown"){w=true}else if(typeof n=="number"){E=n}}f=A(t.href);u[f]={body:e.body,title:e.title,scrollY:pageYOffset};var i=e.head.children,a,s;for(var r=i.length-1;r>=0;r--){a=i[r];if(a.hasAttribute("data-instant-track")){s=a.getAttribute("href")||a.getAttribute("src")||a.innerHTML;g.push(s)}}d=new XMLHttpRequest;d.addEventListener("readystatechange",W);K(true);X.init();O("change",true);addEventListener("popstate",function(){var e=A(t.href);if(e==f){return}if(!(e in u)){t.href=t.href;return}u[f].scrollY=pageYOffset;f=e;H(u[e].title,u[e].body,false,u[e].scrollY)})}function F(e,t){L[e].push(t)}return{supported:q,init:G,on:F}}(document,location);
//rebuild by neat 