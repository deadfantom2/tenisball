/*! For license information please see 1.ece88299.chunk.js.LICENSE.txt */
(this["webpackJsonpcoin-front"]=this["webpackJsonpcoin-front"]||[]).push([[1],{302:function(e,t,n){"use strict";var r=n(3),a=(n(0),n(324));n(303);t.a=function(){return Object(r.jsx)("div",{className:"loader-overlow",children:Object(r.jsx)(a.a,{animation:"border",role:"status",style:{position:"absolute",width:"100px",height:"100px",margin:"auto",display:"block"},children:Object(r.jsx)("span",{className:"sr-only",children:"Loading..."})})})}},303:function(e,t,n){},304:function(e,t,n){"use strict";var r=n(99),a=n(3),o=n(21),i=n(0),c=n(325),s=function(e){var t=e.variant,n=e.children,s=Object(i.useState)(!0),l=Object(o.a)(s,2),u=l[0],d=l[1];Object(i.useEffect)((function(){}));return Object(a.jsx)(c.a,Object(r.a)({show:u,variant:t,children:n,onClose:function(){d(!1)},dismissible:!0},"children",n))};s.defaultProps={variant:"info"},t.a=s},305:function(e,t,n){},306:function(e,t,n){"use strict";var r=n(3),a=(n(0),n(22)),o=n(295),i=n(298),c=n(31),s=n(302),l=n(304);n(307);t.a=function(e){var t=e.children,n=e.loading,u=e.title,d=e.setShowModal,p=e.activeBtn,m=e.filter,f=Object(a.c)((function(e){return e.successMsg})).message,b=Object(a.c)((function(e){return e.errorMsg})).error;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"panel-back",children:Object(r.jsxs)(o.a,{children:[!p&&Object(r.jsx)(c.Link,{to:"/",className:"btn btn-light my-3",children:"Go back"}),Object(r.jsx)("span",{children:u}),m&&Object(r.jsx)("i",{className:"fas fa-filter btn__filter",onClick:function(){return d(!0)}})]})}),n&&Object(r.jsx)(s.a,{}),b&&Object(r.jsx)(l.a,{variant:"danger",children:b}),f&&Object(r.jsx)(l.a,{variant:"success",children:f}),Object(r.jsx)(i.a,{children:t})]})}},307:function(e,t,n){},308:function(e,t,n){"use strict";n.d(t,"i",(function(){return p})),n.d(t,"j",(function(){return m})),n.d(t,"f",(function(){return f})),n.d(t,"c",(function(){return b})),n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return v})),n.d(t,"d",(function(){return j})),n.d(t,"e",(function(){return g})),n.d(t,"k",(function(){return O})),n.d(t,"g",(function(){return y})),n.d(t,"h",(function(){return x}));var r=n(13),a=n(11),o=n.n(a),i=n(28),c=n(20),s=n(24),l=n.n(s),u=function(e){var t=e().userLogin.userInfo;return d(t)},d=function(e){var t;return t=null!==e?e.token:e,{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}},p=function(){return function(){var e=Object(i.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:c.v}),e.next=4,l.a.get("/api/post/");case 4:n=e.sent,r=n.data,t({type:c.w,payload:r.posts}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:c.u,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(i.a)(o.a.mark((function t(n,r){var a,i,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=u(r),t.prev=1,n({type:c.y}),t.next=5,l.a.get("/api/post/"+e,a);case 5:i=t.sent,s=i.data,n({type:c.A,payload:s.post}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),n({type:c.x});case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}()},f=function(e,t){return function(){var n=Object(i.a)(o.a.mark((function n(a,i){var s,d,p,m,f,b,h,v,j,g,O,y;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s=u(i),d=i(),p=d.postOne.post,n.prev=2,a({type:c.q}),n.next=6,l.a.put("/api/post/edit-post/"+e,t,s);case 6:m=n.sent,f=m.data,a({type:c.r,payload:f.message}),p.title,p.certificate,p.description,p.bitkin,p.petrov,p.imperator,p.link_video,b=t.title,h=t.certificate,v=t.description,j=t.bitkin,g=t.petrov,O=t.imperator,y=t.link_video,a({type:c.A,payload:Object(r.a)(Object(r.a)({},p),{},{title:b,certificate:h,description:v,bitkin:j,petrov:g,imperator:O,link_video:y})}),n.next=23;break;case 20:n.prev=20,n.t0=n.catch(2),a({type:c.p});case 23:case"end":return n.stop()}}),n,null,[[2,20]])})));return function(e,t){return n.apply(this,arguments)}}()},b=function(e,t){return function(){var n=Object(i.a)(o.a.mark((function n(r,a){var i,s,d,p,m,f,b,h;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=u(a),s=a(),d=s.userLogin.userInfo,p=s.postList.posts,m=t._id,f=d.user.tokenUser.toString().split("").reverse().join(""),n.prev=4,r({type:c.e}),n.next=8,l.a.post("/api/post/like-post",e,i);case 8:b=n.sent,h=b.data,r({type:c.f,payload:h}),p.map((function(e){return e._id===m&&e.likes.unshift({userId:f,_id:1,name:d.user.name})})),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(4),r({type:c.d});case 17:case"end":return n.stop()}}),n,null,[[4,14]])})));return function(e,t){return n.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(i.a)(o.a.mark((function t(n,r){var a,i,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=u(r),t.prev=1,n({type:c.b}),t.next=5,l.a.post("/api/post/like-comment",e,a);case 5:i=t.sent,s=i.data,n({type:c.c,payload:s}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),n({type:c.a});case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(i.a)(o.a.mark((function t(n,a){var i,s,d,p,m,f;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=u(a),s=a(),d=s.postOne.post,t.prev=2,t.next=5,l.a.post("/api/post/add-comment",e,i);case 5:p=t.sent,m=p.data,f=d.comments.unshift({comment:m.comment}),n({type:c.A,payload:Object(r.a)(Object(r.a)({},d),{},{newComment:f})}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),n({type:c.x});case 14:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e,n){return t.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(i.a)(o.a.mark((function t(n,a){var i,s,d,p,m,f;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=u(a),s=a(),d=s.postOne.post,t.prev=2,n({type:c.l}),t.next=6,l.a.delete("/api/post/comment/delete/"+e,i);case 6:p=t.sent,m=p.data,n({type:c.m,payload:m}),f=d.comments.filter((function(t){return t.comment._id!==e})),n({type:c.A,payload:Object(r.a)(Object(r.a)({},d),{},{comments:f})}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(2),n({type:c.k});case 16:case"end":return t.stop()}}),t,null,[[2,13]])})));return function(e,n){return t.apply(this,arguments)}}()},g=function(e,t){return function(){var n=Object(i.a)(o.a.mark((function n(r,a){var i;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=u(a),n.prev=1,r({type:c.o}),n.next=5,l.a.put("/api/post/edit-comment/"+e,t,i);case 5:r({type:c.A}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),r({type:c.n});case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e,t){return n.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(i.a)(o.a.mark((function t(n,r){var a,i,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=u(r),t.prev=1,n({type:c.C}),t.next=5,l.a.post("/api/post/report-comment",e,a);case 5:i=t.sent,s=i.data,n({type:c.D,payload:s}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),n({type:c.B});case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}()},y=function(e){return function(t){t({type:c.s,payload:e})}},x=function(e){return function(t,n){var r=n().postList.posts.filter((function(t){return Object.keys(e).every((function(n){return e[n].some((function(e){return e===t[n]}))}))}));t({type:c.t,payload:r})}}},309:function(e,t,n){},310:function(e,t,n){"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(e){return"IMG"===e.tagName},o=function(e){return e&&1===e.nodeType},i=function(e){return".svg"===(e.currentSrc||e.src).substr(-4).toLowerCase()},c=function(e){try{return Array.isArray(e)?e.filter(a):function(e){return NodeList.prototype.isPrototypeOf(e)}(e)?[].slice.call(e).filter(a):o(e)?[e].filter(a):"string"===typeof e?[].slice.call(document.querySelectorAll(e)).filter(a):[]}catch(t){throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom")}},s=function(e){var t=document.createElement("div");return t.classList.add("medium-zoom-overlay"),t.style.background=e,t},l=function(e){var t=e.getBoundingClientRect(),n=t.top,r=t.left,a=t.width,o=t.height,i=e.cloneNode(),c=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,s=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return i.removeAttribute("id"),i.style.position="absolute",i.style.top=n+c+"px",i.style.left=r+s+"px",i.style.width=a+"px",i.style.height=o+"px",i.style.transform="",i},u=function(e,t){var n=r({bubbles:!1,cancelable:!1,detail:void 0},t);if("function"===typeof window.CustomEvent)return new CustomEvent(e,n);var a=document.createEvent("CustomEvent");return a.initCustomEvent(e,n.bubbles,n.cancelable,n.detail),a};!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!==typeof document){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}"),t.a=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=window.Promise||function(e){function t(){}e(t,t)},d=function(e){var t=e.target;t!==P?-1!==E.indexOf(t)&&x({target:t}):y()},p=function(){if(!N&&I.original){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(L-e)>S.scrollOffset&&setTimeout(y,150)}},m=function(e){var t=e.key||e.keyCode;"Escape"!==t&&"Esc"!==t&&27!==t||y()},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e;if(e.background&&(P.style.background=e.background),e.container&&e.container instanceof Object&&(t.container=r({},S.container,e.container)),e.template){var n=o(e.template)?e.template:document.querySelector(e.template);t.template=n}return S=r({},S,t),E.forEach((function(e){e.dispatchEvent(u("medium-zoom:update",{detail:{zoom:_}}))})),_},b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e(r({},S,t))},h=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.reduce((function(e,t){return[].concat(e,c(t))}),[]);return r.filter((function(e){return-1===E.indexOf(e)})).forEach((function(e){E.push(e),e.classList.add("medium-zoom-image")})),C.forEach((function(e){var t=e.type,n=e.listener,a=e.options;r.forEach((function(e){e.addEventListener(t,n,a)}))})),_},v=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];I.zoomed&&y();var r=t.length>0?t.reduce((function(e,t){return[].concat(e,c(t))}),[]):E;return r.forEach((function(e){e.classList.remove("medium-zoom-image"),e.dispatchEvent(u("medium-zoom:detach",{detail:{zoom:_}}))})),E=E.filter((function(e){return-1===r.indexOf(e)})),_},j=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return E.forEach((function(r){r.addEventListener("medium-zoom:"+e,t,n)})),C.push({type:"medium-zoom:"+e,listener:t,options:n}),_},g=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return E.forEach((function(r){r.removeEventListener("medium-zoom:"+e,t,n)})),C=C.filter((function(n){return!(n.type==="medium-zoom:"+e&&n.listener.toString()===t.toString())})),_},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.target,n=function(){var e={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},t=void 0,n=void 0;if(S.container)if(S.container instanceof Object)t=(e=r({},e,S.container)).width-e.left-e.right-2*S.margin,n=e.height-e.top-e.bottom-2*S.margin;else{var a=(o(S.container)?S.container:document.querySelector(S.container)).getBoundingClientRect(),c=a.width,s=a.height,l=a.left,u=a.top;e=r({},e,{width:c,height:s,left:l,top:u})}t=t||e.width-2*S.margin,n=n||e.height-2*S.margin;var d=I.zoomedHd||I.original,p=i(d)?t:d.naturalWidth||t,m=i(d)?n:d.naturalHeight||n,f=d.getBoundingClientRect(),b=f.top,h=f.left,v=f.width,j=f.height,g=Math.min(p,t)/v,O=Math.min(m,n)/j,y=Math.min(g,O),x="scale("+y+") translate3d("+((t-v)/2-h+S.margin+e.left)/y+"px, "+((n-j)/2-b+S.margin+e.top)/y+"px, 0)";I.zoomed.style.transform=x,I.zoomedHd&&(I.zoomedHd.style.transform=x)};return new a((function(e){if(t&&-1===E.indexOf(t))e(_);else{if(I.zoomed)e(_);else{if(t)I.original=t;else{if(!(E.length>0))return void e(_);var r=E;I.original=r[0]}if(I.original.dispatchEvent(u("medium-zoom:open",{detail:{zoom:_}})),L=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,N=!0,I.zoomed=l(I.original),document.body.appendChild(P),S.template){var a=o(S.template)?S.template:document.querySelector(S.template);I.template=document.createElement("div"),I.template.appendChild(a.content.cloneNode(!0)),document.body.appendChild(I.template)}if(document.body.appendChild(I.zoomed),window.requestAnimationFrame((function(){document.body.classList.add("medium-zoom--opened")})),I.original.classList.add("medium-zoom-image--hidden"),I.zoomed.classList.add("medium-zoom-image--opened"),I.zoomed.addEventListener("click",y),I.zoomed.addEventListener("transitionend",(function t(){N=!1,I.zoomed.removeEventListener("transitionend",t),I.original.dispatchEvent(u("medium-zoom:opened",{detail:{zoom:_}})),e(_)})),I.original.getAttribute("data-zoom-src")){I.zoomedHd=I.zoomed.cloneNode(),I.zoomedHd.removeAttribute("srcset"),I.zoomedHd.removeAttribute("sizes"),I.zoomedHd.src=I.zoomed.getAttribute("data-zoom-src"),I.zoomedHd.onerror=function(){clearInterval(i),console.warn("Unable to reach the zoom image target "+I.zoomedHd.src),I.zoomedHd=null,n()};var i=setInterval((function(){I.zoomedHd.complete&&(clearInterval(i),I.zoomedHd.classList.add("medium-zoom-image--opened"),I.zoomedHd.addEventListener("click",y),document.body.appendChild(I.zoomedHd),n())}),10)}else if(I.original.hasAttribute("srcset")){I.zoomedHd=I.zoomed.cloneNode(),I.zoomedHd.removeAttribute("sizes"),I.zoomedHd.removeAttribute("loading");var c=I.zoomedHd.addEventListener("load",(function(){I.zoomedHd.removeEventListener("load",c),I.zoomedHd.classList.add("medium-zoom-image--opened"),I.zoomedHd.addEventListener("click",y),document.body.appendChild(I.zoomedHd),n()}))}else n()}}}))},y=function(){return new a((function(e){if(!N&&I.original){N=!0,document.body.classList.remove("medium-zoom--opened"),I.zoomed.style.transform="",I.zoomedHd&&(I.zoomedHd.style.transform=""),I.template&&(I.template.style.transition="opacity 150ms",I.template.style.opacity=0),I.original.dispatchEvent(u("medium-zoom:close",{detail:{zoom:_}})),I.zoomed.addEventListener("transitionend",(function t(){I.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(I.zoomed),I.zoomedHd&&document.body.removeChild(I.zoomedHd),document.body.removeChild(P),I.zoomed.classList.remove("medium-zoom-image--opened"),I.template&&document.body.removeChild(I.template),N=!1,I.zoomed.removeEventListener("transitionend",t),I.original.dispatchEvent(u("medium-zoom:closed",{detail:{zoom:_}})),I.original=null,I.zoomed=null,I.zoomedHd=null,I.template=null,e(_)}))}else e(_)}))},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.target;return I.original?y():O({target:t})},k=function(){return S},z=function(){return E},w=function(){return I.original},E=[],C=[],N=!1,L=0,S=n,I={original:null,zoomed:null,zoomedHd:null,template:null};"[object Object]"===Object.prototype.toString.call(t)?S=t:(t||"string"===typeof t)&&h(t),S=r({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},S);var P=s(S.background);document.addEventListener("click",d),document.addEventListener("keyup",m),document.addEventListener("scroll",p),window.addEventListener("resize",y);var _={open:O,close:y,toggle:x,update:f,clone:b,attach:h,detach:v,on:j,off:g,getOptions:k,getImages:z,getZoomedImage:w};return _}},311:function(e,t,n){"use strict";var r=n(3),a=n(21),o=n(11),i=n.n(o),c=n(28),s=n(0),l=n(324),u=n(310),d=n(296),p=function(e){var t=e.zoom,n=e.src,a=e.background,o=e.className,i=e.alt,c=Object(s.useRef)(t.clone({background:a}));return Object(r.jsx)(d.a,{src:n,className:o,ref:function(e){c.current.attach(e)},alt:i})};n(309),t.a=function(e){var t=e.photo,n=e.postTitle,o=(e.styleClass,t.route),d=t.user,m=t.name,f=t.link,b=Object(s.useState)(""),h=Object(a.a)(b,2),v=h[0],j=h[1],g=Object(s.useRef)(null),O=Object(s.useRef)(Object(u.a)());return Object(s.useEffect)((function(){null!==g.current&&function(e,t,n,r,a,o){new IntersectionObserver((function(e,t){e.forEach(function(){var e=Object(c.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.isIntersecting){e.next=2;break}return e.abrupt("return");case 2:o(a),t.disconnect();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())})).observe(e)}(g.current,0,0,0,f,j)}),[o,d,m,f]),v.length>0?Object(r.jsx)(p,{src:v,className:"image-style",zoom:O.current,background:"#000",alt:n}):Object(r.jsx)(l.a,{animation:"border",role:"status",ref:g,style:{width:"100px",height:"100px",margin:"auto",display:"block"},children:Object(r.jsx)("span",{className:"sr-only",children:"Loading..."})})}},315:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=[{name:"Petr 1",imperator:"petr1",photoPath:"/images/petr1.jpg"},{name:"Ekaterina 1",imperator:"ekaterina1",photoPath:"/images/ekaterina1.jpg"},{name:"Petr 2",imperator:"petr2",photoPath:"/images/petr2.jpg"},{name:"Anna Ioannovna",imperator:"anna",photoPath:"/images/anna.jpg"},{name:"Ioann Antonovich",imperator:"anton",photoPath:"/images/anton.jpg"},{name:"Elizaveta",imperator:"elizaveta",photoPath:"/images/elizaveta.jpg"},{name:"Petr 3",imperator:"petr3",photoPath:"/images/petr3.jpg"},{name:"Ekaterina 2",imperator:"ekaterina2",photoPath:"/images/ekaterina2.jpg"},{name:"Pavel 1",imperator:"pavel1",photoPath:"/images/pavel1.jpg"},{name:"Aleksandr 1",imperator:"aleksandr1",photoPath:"/images/aleksandr1.jpg"},{name:"Nicolai 1",imperator:"nicolai1",photoPath:"/images/nicolas1.jpg"},{name:"Aleksandr 2",imperator:"aleksandr2",photoPath:"/images/aleksandr2.jpg"},{name:"Aleksandr 3",imperator:"aleksandr3",photoPath:"/images/aleksandr3.jpg"},{name:"Nicolai 2",imperator:"nicolai2",photoPath:"/images/nicolas2.jpg"},{name:"URSS",imperator:"urss",photoPath:"/images/urss.jpg"}]},316:function(e,t,n){"use strict";var r=n(3),a=n(21),o=n(0),i=n(342),c=n(299),s=n(146);n(305);t.a=function(e){var t=e.showModal,n=e.setShowModal,l=e.infoModal,u=e.executeInMenuItem,d=Object(o.useState)(""),p=Object(a.a)(d,2),m=p[0],f=p[1];Object(o.useEffect)((function(){f(l.body)}),[t,l.body]);var b=function(){n(!1)};return Object(r.jsxs)(i.a,{show:t,onHide:b,keyboard:!1,children:[Object(r.jsx)(i.a.Header,{closeButton:!0,children:Object(r.jsx)(i.a.Title,{children:l.header})}),Object(r.jsx)(i.a.Body,{children:2===l.position?l.body:Object(r.jsx)(c.a.Group,{controlId:"messageFooter",children:Object(r.jsx)(c.a.Control,{as:"textarea",rows:3,defaultValue:m,onChange:function(e){return f(e.target.value)}})})}),Object(r.jsxs)(i.a.Footer,{children:[Object(r.jsx)(s.a,{variant:"secondary",onClick:b,children:"Close"}),Object(r.jsx)(s.a,{variant:"primary",onClick:function(){return u(l.position,m)},children:l.footer})]})]})}},322:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(0),a=n.n(r);function o(e,t){var n=0;return a.a.Children.map(e,(function(e){return a.a.isValidElement(e)?t(e,n++):e}))}function i(e,t){var n=0;a.a.Children.forEach(e,(function(e){a.a.isValidElement(e)&&t(e,n++)}))}},334:function(e,t,n){},335:function(e,t,n){},336:function(e,t,n){},343:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n(21),o=n(0),i=n.n(o),c=n(22),s=n(308),l=n(20),u=n(11),d=n.n(u),p=n(13),m=n(28),f="DELETE_IMAGE_SUCCESS",b="DELETE_IMAGE_REQUEST",h="DELETE_IMAGE_FAIL",v=n(24),j=n.n(v),g=n(104),O=function(e){var t=e().userLogin.userInfo;return y(t)},y=function(e){var t;return t=null!==e?e.token:e,{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}},x=n(306),k=n(299),z=n(146),w=n(315),E=(n(334),function(e){var t=e.children,n=e.submitHandler,a=e.title,o=e.setTitle,i=e.bitkin,c=e.setBitkin,s=e.petrov,l=e.setPetrov,u=e.imperator,d=e.setImperator,p=e.link_video,m=e.setLink_video,f=e.certificate,b=e.setCertificate,h=e.description,v=e.setDescription,j=e.textBtn,g=e.type,O=function(e){if("edit"===g){if("certificate"===e)return f;if("imperator"===e)return u}else{if("certificate"===e)return"Choose certification";if("imperator"===e)return"Choose an Imperator"}};return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(k.a,{onSubmit:n,className:"createandedit__panel",children:[Object(r.jsxs)("div",{className:"createandedit__panel_left",children:[Object(r.jsxs)(k.a.Group,{controlId:"title",children:[Object(r.jsx)(k.a.Label,{children:"Title *"}),Object(r.jsx)(k.a.Control,{type:"text",placeholder:"Enter title",value:a,onChange:function(e){return o(e.target.value)}})]}),Object(r.jsxs)(k.a.Group,{controlId:"bitkin",children:[Object(r.jsx)(k.a.Label,{children:"Bitkin *"}),Object(r.jsx)(k.a.Control,{type:"text",placeholder:"Enter bitkin",value:i,onChange:function(e){return c(e.target.value)}})]}),Object(r.jsxs)(k.a.Group,{controlId:"petrov",children:[Object(r.jsx)(k.a.Label,{children:"Petrov *"}),Object(r.jsx)(k.a.Control,{type:"text",placeholder:"Enter petrov",value:s,onChange:function(e){return l(e.target.value)}})]}),Object(r.jsxs)(k.a.Group,{controlId:"link_video",children:[Object(r.jsx)(k.a.Label,{children:"Link video"}),Object(r.jsx)(k.a.Control,{type:"text",placeholder:"Enter link video",value:p,onChange:function(e){return m(e.target.value)}})]})]}),Object(r.jsxs)("div",{className:"createandedit__panel_right",children:[Object(r.jsxs)(k.a.Group,{controlId:"imperator",children:[Object(r.jsx)(k.a.Label,{children:"Imperators *"}),Object(r.jsxs)(k.a.Control,{as:"select",value:O("imperator"),onChange:function(e){return d(e.target.value)},children:[Object(r.jsx)("option",{disabled:!0,children:"Choose an Imperator"}),w.a.map((function(e,t){return Object(r.jsx)("option",{value:e.imperator,children:e.name},t)}))]})]}),Object(r.jsxs)(k.a.Group,{controlId:"certificate",children:[Object(r.jsx)(k.a.Label,{children:"Certificate *"}),Object(r.jsx)(k.a.Control,{as:"select",value:O("certificate"),onChange:function(e){return b(e.target.value)},children:[{name:"Choose certification",value:"choose"},{name:"No slabe",value:"None"},{name:"NGC",value:"NGC"},{name:"PCGS",value:"PCGS"}].map((function(e,t){return Object(r.jsx)("option",{value:e.value,children:e.name},t)}))})]}),Object(r.jsxs)(k.a.Group,{controlId:"description",children:[Object(r.jsx)(k.a.Label,{children:"Description *"}),Object(r.jsx)(k.a.Control,{as:"textarea",rows:2,placeholder:"Enter your description",value:h,onChange:function(e){return v(e.target.value)}})]}),Object(r.jsx)(z.a,{className:"btn__edit_post",type:"submit",variant:"primary",children:j}),Object(r.jsx)(k.a.Group,{children:t})]})]})})}),C=n(52),N=n(30),L=n(2),S=n(4),I=n(5),P=n.n(I),_=n(6),T=n(322);function H(e,t,n){var r=(e-t)/(n-t)*100;return Math.round(1e3*r)/1e3}function A(e,t){var n,r=e.min,a=e.now,o=e.max,c=e.label,s=e.srOnly,l=e.striped,u=e.animated,d=e.className,p=e.style,m=e.variant,f=e.bsPrefix,b=Object(S.a)(e,["min","now","max","label","srOnly","striped","animated","className","style","variant","bsPrefix"]);return i.a.createElement("div",Object(L.a)({ref:t},b,{role:"progressbar",className:P()(d,f+"-bar",(n={},n["bg-"+m]=m,n[f+"-bar-animated"]=u,n[f+"-bar-striped"]=u||l,n)),style:Object(L.a)({width:H(a,r,o)+"%"},p),"aria-valuenow":a,"aria-valuemin":r,"aria-valuemax":o}),s?i.a.createElement("span",{className:"sr-only"},c):c)}var M=i.a.forwardRef((function(e,t){var n=e.isChild,r=Object(S.a)(e,["isChild"]);if(r.bsPrefix=Object(_.a)(r.bsPrefix,"progress"),n)return A(r,t);var a=r.min,c=r.now,s=r.max,l=r.label,u=r.srOnly,d=r.striped,p=r.animated,m=r.bsPrefix,f=r.variant,b=r.className,h=r.children,v=Object(S.a)(r,["min","now","max","label","srOnly","striped","animated","bsPrefix","variant","className","children"]);return i.a.createElement("div",Object(L.a)({ref:t},v,{className:P()(b,m)}),h?Object(T.b)(h,(function(e){return Object(o.cloneElement)(e,{isChild:!0})})):A({min:a,now:c,max:s,label:l,srOnly:u,striped:d,animated:p,bsPrefix:m,variant:f},t))}));M.displayName="ProgressBar",M.defaultProps={min:0,max:100,animated:!1,isChild:!1,srOnly:!1,striped:!1};var B=M,D=(n(335),function(e){var t=e.id,n=Object(o.useState)(0),i=Object(a.a)(n,2),s=i[0],l=i[1],u=Object(o.useRef)(null),p=Object(o.useRef)(),f=Object(o.useRef)(),b=Object(o.useRef)(),h=Object(o.useRef)(),O=Object(o.useRef)(),y=Object(o.useState)([]),x=Object(a.a)(y,2),k=x[0],z=x[1],w=Object(o.useState)([]),E=Object(a.a)(w,2),L=E[0],S=E[1],I=Object(o.useState)([]),P=Object(a.a)(I,2),_=P[0],T=P[1],H=Object(o.useState)(""),A=Object(a.a)(H,2),M=A[0],D=A[1],G=Object(c.c)((function(e){return e.userLogin})).userInfo;Object(o.useEffect)((function(){var e=k.reduce((function(e,t){return e.find((function(e){return e.name===t.name}))?e:e.concat([t])}),[]);S(Object(N.a)(e))}),[k,t]);var R=function(e){for(var t=function(t){U(e[t])?z((function(n){return[].concat(Object(N.a)(n),[e[t]])})):(e[t].invalid=!0,z((function(n){return[].concat(Object(N.a)(n),[e[t]])})),D("File type not permitted"),T((function(n){return[].concat(Object(N.a)(n),[e[t]])})))},n=0;n<e.length;n++)t(n)},F=function(e){var t=L.findIndex((function(t){return t.name===e})),n=k.findIndex((function(t){return t.name===e})),r=_.findIndex((function(t){return t.name===e}));L.splice(t,1),k.splice(n,1),S(Object(N.a)(L)),z(Object(N.a)(k)),-1!==r&&(_.splice(r,1),T(Object(N.a)(_)))},U=function(e){return-1!==["image/jpeg","image/jpg","image/png","image/gif","image/x-icon"].indexOf(e.type)},q=function(e){if(0===e)return"0 Bytes";var t=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,t)).toFixed(2))+" "+["Bytes","KB","MB","GB","TB"][t]},Y=function(){var e=Object(m.a)(d.a.mark((function e(){var t,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.scrollTo({top:0,behavior:"smooth"}),O.current.style.display="block",h.current.innerHTML="File(s) Uploading...",t=Object(C.a)(L);try{for(t.s();!(n=t.n()).done;)r=n.value,W(r,V(r))}catch(a){t.e(a)}finally{t.f()}case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(e){return"post/".concat(G.user.tokenUser,"/").concat(e.name)},W=function(e,n){g.b.ref(n).put(e).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);t<100&&l(t)}),(function(e){}),(function(){g.b.ref("post/".concat(G.user.tokenUser)).child(e.name).getDownloadURL().then((function(n){var r={postId:t,imgName:e.name,link:n};j.a.post("/api/img/post/image",r,{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(G.token)},onUploadProgress:function(e){var t=Math.floor(e.loaded/e.total*100);t<100&&l(t)},cancelToken:new v.CancelToken((function(e){return u.current=e}))}).then((function(){l(100),h.current.innerHTML="File(s) Uploaded",L.length=0,S(Object(N.a)(L)),z(Object(N.a)(L)),T(Object(N.a)(L)),setTimeout((function(){l(0),O.current.style.display="none"}),2e3)})).catch((function(e){h.current.innerHTML='<span class="error">Error Uploading File(s)</span>'}))}))}))};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"container-zone",children:[0===_.length&&L.length?Object(r.jsx)("button",{className:"file-upload-btn",onClick:function(){return Y()},children:"Upload Files"}):"",_.length?Object(r.jsx)("p",{children:"Please remove all unsupported files."}):"",Object(r.jsxs)("div",{className:"drop-container",onDragOver:function(e){e.preventDefault()},onDragEnter:function(e){e.preventDefault()},onDragLeave:function(e){e.preventDefault()},onDrop:function(e){e.preventDefault();var t=e.dataTransfer.files;t.length&&R(t)},onClick:function(){p.current.click()},children:[Object(r.jsxs)("div",{className:"drop-message",children:[Object(r.jsx)("div",{className:"upload-icon"}),"Drag & Drop files here or click to select file(s)"]}),Object(r.jsx)("input",{type:"file",className:"file-input",multiple:!0,onChange:function(){p.current.files.length&&R(p.current.files)},ref:p})]}),Object(r.jsx)("div",{className:"file-display-container",children:L.map((function(e,t){return Object(r.jsxs)("div",{className:"file-status-bar",children:[Object(r.jsx)("div",{className:"file-type-logo"}),Object(r.jsx)("div",{className:"file-type-text",children:(n=e.name,n.substring(n.lastIndexOf(".")+1,n.length)||n)}),Object(r.jsx)("span",{onClick:e.invalid?function(){return F(e.name)}:function(){return function(e){window.scrollTo({top:0,behavior:"smooth"});var t=new FileReader;b.current.style.display="block",t.readAsDataURL(e),t.onload=function(e){f.current.style.backgroundImage="url(".concat(e.target.result,")")}}(e)},className:"file-name ".concat(e.invalid?"file-error":""),children:e.name}),Object(r.jsxs)("span",{className:"file-size",children:["(",q(e.size),")"]}),Object(r.jsx)("i",{className:"fas fa-trash file-remove",onClick:function(){return F(e.name)}}),e.invalid&&Object(r.jsxs)("span",{className:"file-error-message",children:["(",M,")"]})]},t);var n}))})]}),Object(r.jsxs)("div",{className:"display-image",ref:b,children:[Object(r.jsx)("div",{className:"overlay"}),Object(r.jsx)("div",{className:"modal-image",ref:f,children:Object(r.jsx)("span",{className:"close-dropzone",onClick:function(){return b.current.style.display="none",void(f.current.style.backgroundImage="none")},children:"X"})})]}),Object(r.jsxs)("div",{className:"upload-modal",ref:O,children:[Object(r.jsx)("div",{className:"overlay"}),Object(r.jsxs)("div",{className:"progress-container",children:[Object(r.jsx)("div",{className:"close-dropzone",onClick:function(){return u.current&&u.current("You cancelled uploading "),void(O.current.style.display="none")},children:"X"}),Object(r.jsx)("span",{ref:h}),Object(r.jsx)(B,{now:s,label:"".concat(s,"%"),variant:"info",striped:!0})]})]})]})}),G=n(311),R=n(316);n(336),t.default=function(e){var t=e.history,n=e.match.params.id,i=Object(o.useState)(null),u=Object(a.a)(i,2),v=u[0],y=u[1],k=Object(o.useState)(""),z=Object(a.a)(k,2),w=z[0],C=z[1],N=Object(o.useState)(""),L=Object(a.a)(N,2),S=L[0],I=L[1],P=Object(o.useState)(""),_=Object(a.a)(P,2),T=_[0],H=_[1],A=Object(o.useState)(""),M=Object(a.a)(A,2),B=M[0],F=M[1],U=Object(o.useState)(""),q=Object(a.a)(U,2),Y=q[0],V=q[1],W=Object(o.useState)(""),X=Object(a.a)(W,2),J=X[0],K=X[1],Q=Object(o.useState)(""),Z=Object(a.a)(Q,2),$=Z[0],ee=Z[1],te=Object(o.useState)(""),ne=Object(a.a)(te,2),re=ne[0],ae=ne[1],oe=Object(o.useState)([]),ie=Object(a.a)(oe,2),ce=ie[0],se=ie[1],le=Object(o.useState)(!1),ue=Object(a.a)(le,2),de=ue[0],pe=ue[1],me=Object(o.useState)({header:"",body:"",footer:""}),fe=Object(a.a)(me,2),be=fe[0],he=fe[1],ve=Object(o.useRef)(null),je=Object(c.b)(),ge=Object(c.c)((function(e){return e.userLogin})).userInfo,Oe=Object(c.c)((function(e){return e.postOne})),ye=Oe.loading,xe=Oe.post;Object(o.useEffect)((function(){return xe?(I(xe.title),H(xe.certificate),F(xe.description),V(xe.bitkin),K(xe.petrov),ee(xe.imperator),ae(xe.link_video),se(xe.photos)):je(Object(s.j)(n)),function(){return xe&&je({type:l.z})}}),[je,t,n,xe]);return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(x.a,{loading:ye,title:"Modification",children:Object(r.jsxs)("div",{className:"createandedit__post_form",ref:ve,children:[Object(r.jsx)(E,{submitHandler:function(e){e.preventDefault(),je(Object(s.f)(n,{title:S,certificate:T,description:B,bitkin:Y,petrov:J,imperator:$,link_video:re}))},title:S,setTitle:I,bitkin:Y,setBitkin:V,petrov:J,setPetrov:K,imperator:$,setImperator:ee,link_video:re,setLink_video:ae,certificate:T,setCertificate:H,description:B,setDescription:F,type:"edit",textBtn:"Edit post",children:Object(r.jsx)(D,{id:n})}),ce.length>0&&Object(r.jsx)("div",{className:"photos",children:ce.map((function(e,t){return Object(r.jsxs)("div",{className:"photos-edit",children:[Object(r.jsx)(G.a,{photo:e.photo,countNumberPhotos:ce.length,postTitle:"Photo coin"}),Object(r.jsx)("i",{className:"fas fa-trash-alt",onClick:function(){return function(e){var t=e.photo,n=t._id,r=t.route,a=t.name;pe(!0),he({position:2,header:"Warning Image",body:"Do you want delete this image?",footer:"Delete Image"}),y(n),C("".concat(r,"/").concat(ge.user.tokenUser,"/").concat(a))}(e)}})]},t)}))}),Object(r.jsx)(R.a,{showModal:de,setShowModal:pe,infoModal:be,executeInMenuItem:function(){var e,t;je((e={idPhoto:v},t=w,function(){var n=Object(m.a)(d.a.mark((function n(r,a){var o,i,c,s,l,u,m;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=O(a),i=e.idPhoto,c=a(),s=c.postOne.post,n.prev=3,r({type:b}),n.next=7,j.a.put("/api/img/delete/image",e,o);case 7:l=n.sent,u=l.data,r({type:f,payload:u.message}),m=s.photos.filter((function(e){return e.photo._id!==i})),r({type:"POST_ONE_SUCCESS",payload:Object(p.a)(Object(p.a)({},s),{},{photos:m})}),g.b.ref(t).delete().then((function(e){})).catch((function(e){})),n.next=19;break;case 16:n.prev=16,n.t0=n.catch(3),r({type:h,payload:n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message});case 19:case"end":return n.stop()}}),n,null,[[3,16]])})));return function(e,t){return n.apply(this,arguments)}}())),pe(!de)}})]})})})}}}]);
//# sourceMappingURL=1.ece88299.chunk.js.map