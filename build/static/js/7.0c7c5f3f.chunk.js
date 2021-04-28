/*! For license information please see 7.0c7c5f3f.chunk.js.LICENSE.txt */
(this["webpackJsonpcoin-front"]=this["webpackJsonpcoin-front"]||[]).push([[7],{302:function(e,t,o){"use strict";var n=o(3),a=(o(0),o(324));o(303);t.a=function(){return Object(n.jsx)("div",{className:"loader-overlow",children:Object(n.jsx)(a.a,{animation:"border",role:"status",style:{position:"absolute",width:"100px",height:"100px",margin:"auto",display:"block"},children:Object(n.jsx)("span",{className:"sr-only",children:"Loading..."})})})}},303:function(e,t,o){},304:function(e,t,o){"use strict";var n=o(99),a=o(3),i=o(21),r=o(0),c=o(325),s=function(e){var t=e.variant,o=e.children,s=Object(r.useState)(!0),d=Object(i.a)(s,2),l=d[0],m=d[1];Object(r.useEffect)((function(){}));return Object(a.jsx)(c.a,Object(n.a)({show:l,variant:t,children:o,onClose:function(){m(!1)},dismissible:!0},"children",o))};s.defaultProps={variant:"info"},t.a=s},305:function(e,t,o){},306:function(e,t,o){"use strict";var n=o(3),a=(o(0),o(22)),i=o(295),r=o(298),c=o(31),s=o(302),d=o(304);o(307);t.a=function(e){var t=e.children,o=e.loading,l=e.title,m=e.setShowModal,u=e.activeBtn,f=e.filter,h=Object(a.c)((function(e){return e.successMsg})).message,p=Object(a.c)((function(e){return e.errorMsg})).error;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"panel-back",children:Object(n.jsxs)(i.a,{children:[!u&&Object(n.jsx)(c.Link,{to:"/",className:"btn btn-light my-3",children:"Go back"}),Object(n.jsx)("span",{children:l}),f&&Object(n.jsx)("i",{className:"fas fa-filter btn__filter",onClick:function(){return m(!0)}})]})}),o&&Object(n.jsx)(s.a,{}),p&&Object(n.jsx)(d.a,{variant:"danger",children:p}),h&&Object(n.jsx)(d.a,{variant:"success",children:h}),Object(n.jsx)(r.a,{children:t})]})}},307:function(e,t,o){},309:function(e,t,o){},310:function(e,t,o){"use strict";var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},a=function(e){return"IMG"===e.tagName},i=function(e){return e&&1===e.nodeType},r=function(e){return".svg"===(e.currentSrc||e.src).substr(-4).toLowerCase()},c=function(e){try{return Array.isArray(e)?e.filter(a):function(e){return NodeList.prototype.isPrototypeOf(e)}(e)?[].slice.call(e).filter(a):i(e)?[e].filter(a):"string"===typeof e?[].slice.call(document.querySelectorAll(e)).filter(a):[]}catch(t){throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom")}},s=function(e){var t=document.createElement("div");return t.classList.add("medium-zoom-overlay"),t.style.background=e,t},d=function(e){var t=e.getBoundingClientRect(),o=t.top,n=t.left,a=t.width,i=t.height,r=e.cloneNode(),c=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,s=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return r.removeAttribute("id"),r.style.position="absolute",r.style.top=o+c+"px",r.style.left=n+s+"px",r.style.width=a+"px",r.style.height=i+"px",r.style.transform="",r},l=function(e,t){var o=n({bubbles:!1,cancelable:!1,detail:void 0},t);if("function"===typeof window.CustomEvent)return new CustomEvent(e,o);var a=document.createEvent("CustomEvent");return a.initCustomEvent(e,o.bubbles,o.cancelable,o.detail),a};!function(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!==typeof document){var n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===o&&n.firstChild?n.insertBefore(a,n.firstChild):n.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}"),t.a=function e(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=window.Promise||function(e){function t(){}e(t,t)},m=function(e){var t=e.target;t!==T?-1!==w.indexOf(t)&&z({target:t}):O()},u=function(){if(!k&&S.original){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(H-e)>N.scrollOffset&&setTimeout(O,150)}},f=function(e){var t=e.key||e.keyCode;"Escape"!==t&&"Esc"!==t&&27!==t||O()},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e;if(e.background&&(T.style.background=e.background),e.container&&e.container instanceof Object&&(t.container=n({},N.container,e.container)),e.template){var o=i(e.template)?e.template:document.querySelector(e.template);t.template=o}return N=n({},N,t),w.forEach((function(e){e.dispatchEvent(l("medium-zoom:update",{detail:{zoom:A}}))})),A},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e(n({},N,t))},b=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];var n=t.reduce((function(e,t){return[].concat(e,c(t))}),[]);return n.filter((function(e){return-1===w.indexOf(e)})).forEach((function(e){w.push(e),e.classList.add("medium-zoom-image")})),L.forEach((function(e){var t=e.type,o=e.listener,a=e.options;n.forEach((function(e){e.addEventListener(t,o,a)}))})),A},v=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];S.zoomed&&O();var n=t.length>0?t.reduce((function(e,t){return[].concat(e,c(t))}),[]):w;return n.forEach((function(e){e.classList.remove("medium-zoom-image"),e.dispatchEvent(l("medium-zoom:detach",{detail:{zoom:A}}))})),w=w.filter((function(e){return-1===n.indexOf(e)})),A},g=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return w.forEach((function(n){n.addEventListener("medium-zoom:"+e,t,o)})),L.push({type:"medium-zoom:"+e,listener:t,options:o}),A},j=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return w.forEach((function(n){n.removeEventListener("medium-zoom:"+e,t,o)})),L=L.filter((function(o){return!(o.type==="medium-zoom:"+e&&o.listener.toString()===t.toString())})),A},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.target,o=function(){var e={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},t=void 0,o=void 0;if(N.container)if(N.container instanceof Object)t=(e=n({},e,N.container)).width-e.left-e.right-2*N.margin,o=e.height-e.top-e.bottom-2*N.margin;else{var a=(i(N.container)?N.container:document.querySelector(N.container)).getBoundingClientRect(),c=a.width,s=a.height,d=a.left,l=a.top;e=n({},e,{width:c,height:s,left:d,top:l})}t=t||e.width-2*N.margin,o=o||e.height-2*N.margin;var m=S.zoomedHd||S.original,u=r(m)?t:m.naturalWidth||t,f=r(m)?o:m.naturalHeight||o,h=m.getBoundingClientRect(),p=h.top,b=h.left,v=h.width,g=h.height,j=Math.min(u,t)/v,y=Math.min(f,o)/g,O=Math.min(j,y),z="scale("+O+") translate3d("+((t-v)/2-b+N.margin+e.left)/O+"px, "+((o-g)/2-p+N.margin+e.top)/O+"px, 0)";S.zoomed.style.transform=z,S.zoomedHd&&(S.zoomedHd.style.transform=z)};return new a((function(e){if(t&&-1===w.indexOf(t))e(A);else{if(S.zoomed)e(A);else{if(t)S.original=t;else{if(!(w.length>0))return void e(A);var n=w;S.original=n[0]}if(S.original.dispatchEvent(l("medium-zoom:open",{detail:{zoom:A}})),H=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,k=!0,S.zoomed=d(S.original),document.body.appendChild(T),N.template){var a=i(N.template)?N.template:document.querySelector(N.template);S.template=document.createElement("div"),S.template.appendChild(a.content.cloneNode(!0)),document.body.appendChild(S.template)}if(document.body.appendChild(S.zoomed),window.requestAnimationFrame((function(){document.body.classList.add("medium-zoom--opened")})),S.original.classList.add("medium-zoom-image--hidden"),S.zoomed.classList.add("medium-zoom-image--opened"),S.zoomed.addEventListener("click",O),S.zoomed.addEventListener("transitionend",(function t(){k=!1,S.zoomed.removeEventListener("transitionend",t),S.original.dispatchEvent(l("medium-zoom:opened",{detail:{zoom:A}})),e(A)})),S.original.getAttribute("data-zoom-src")){S.zoomedHd=S.zoomed.cloneNode(),S.zoomedHd.removeAttribute("srcset"),S.zoomedHd.removeAttribute("sizes"),S.zoomedHd.src=S.zoomed.getAttribute("data-zoom-src"),S.zoomedHd.onerror=function(){clearInterval(r),console.warn("Unable to reach the zoom image target "+S.zoomedHd.src),S.zoomedHd=null,o()};var r=setInterval((function(){S.zoomedHd.complete&&(clearInterval(r),S.zoomedHd.classList.add("medium-zoom-image--opened"),S.zoomedHd.addEventListener("click",O),document.body.appendChild(S.zoomedHd),o())}),10)}else if(S.original.hasAttribute("srcset")){S.zoomedHd=S.zoomed.cloneNode(),S.zoomedHd.removeAttribute("sizes"),S.zoomedHd.removeAttribute("loading");var c=S.zoomedHd.addEventListener("load",(function(){S.zoomedHd.removeEventListener("load",c),S.zoomedHd.classList.add("medium-zoom-image--opened"),S.zoomedHd.addEventListener("click",O),document.body.appendChild(S.zoomedHd),o()}))}else o()}}}))},O=function(){return new a((function(e){if(!k&&S.original){k=!0,document.body.classList.remove("medium-zoom--opened"),S.zoomed.style.transform="",S.zoomedHd&&(S.zoomedHd.style.transform=""),S.template&&(S.template.style.transition="opacity 150ms",S.template.style.opacity=0),S.original.dispatchEvent(l("medium-zoom:close",{detail:{zoom:A}})),S.zoomed.addEventListener("transitionend",(function t(){S.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(S.zoomed),S.zoomedHd&&document.body.removeChild(S.zoomedHd),document.body.removeChild(T),S.zoomed.classList.remove("medium-zoom-image--opened"),S.template&&document.body.removeChild(S.template),k=!1,S.zoomed.removeEventListener("transitionend",t),S.original.dispatchEvent(l("medium-zoom:closed",{detail:{zoom:A}})),S.original=null,S.zoomed=null,S.zoomedHd=null,S.template=null,e(A)}))}else e(A)}))},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.target;return S.original?O():y({target:t})},x=function(){return N},C=function(){return w},E=function(){return S.original},w=[],L=[],k=!1,H=0,N=o,S={original:null,zoomed:null,zoomedHd:null,template:null};"[object Object]"===Object.prototype.toString.call(t)?N=t:(t||"string"===typeof t)&&b(t),N=n({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},N);var T=s(N.background);document.addEventListener("click",m),document.addEventListener("keyup",f),document.addEventListener("scroll",u),window.addEventListener("resize",O);var A={open:y,close:O,toggle:z,update:h,clone:p,attach:b,detach:v,on:g,off:j,getOptions:x,getImages:C,getZoomedImage:E};return A}},311:function(e,t,o){"use strict";var n=o(3),a=o(21),i=o(11),r=o.n(i),c=o(28),s=o(0),d=o(324),l=o(310),m=o(296),u=function(e){var t=e.zoom,o=e.src,a=e.background,i=e.className,r=e.alt,c=Object(s.useRef)(t.clone({background:a}));return Object(n.jsx)(m.a,{src:o,className:i,ref:function(e){c.current.attach(e)},alt:r})};o(309),t.a=function(e){var t=e.photo,o=e.postTitle,i=(e.styleClass,t.route),m=t.user,f=t.name,h=t.link,p=Object(s.useState)(""),b=Object(a.a)(p,2),v=b[0],g=b[1],j=Object(s.useRef)(null),y=Object(s.useRef)(Object(l.a)());return Object(s.useEffect)((function(){null!==j.current&&function(e,t,o,n,a,i){new IntersectionObserver((function(e,t){e.forEach(function(){var e=Object(c.a)(r.a.mark((function e(o){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o.isIntersecting){e.next=2;break}return e.abrupt("return");case 2:i(a),t.disconnect();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())})).observe(e)}(j.current,0,0,0,h,g)}),[i,m,f,h]),v.length>0?Object(n.jsx)(u,{src:v,className:"image-style",zoom:y.current,background:"#000",alt:o}):Object(n.jsx)(d.a,{animation:"border",role:"status",ref:j,style:{width:"100px",height:"100px",margin:"auto",display:"block"},children:Object(n.jsx)("span",{className:"sr-only",children:"Loading..."})})}},317:function(e,t,o){"use strict";var n=o(3),a=o(0),i=o(342),r=o(299),c=o(146),s=o(101),d=o(59);o(305);t.a=function(e){var t=e.showModal,o=e.setShowModal,l=e.sendEmail,m=e.title;Object(a.useEffect)((function(){}),[t]);var u=Object(s.b)({initialValues:{emailContact:"",nameContact:"",messageContact:""},validationSchema:d.b({emailContact:d.c().email("* Email is invalid").min(11,"* Email must be least than 11 characters").max(50,"* Email must be shorter than 50 characters").required("* Email is required"),nameContact:d.c().min(3,"* Name must be least than 3 characters").max(30,"* Name must be shorter than 30 characters").required("* Name must be required").matches(/^([a-zA-Z]{3,30})+$/,"* This field cannot contain blankspaces or specific characters"),messageContact:d.c().min(3,"* Message must be least than 3 characters").max(30,"* Message must be shorter than 30 characters").required("* Message must be required")}),onSubmit:function(e,t){var o=t.resetForm;l(e),o({body:""}),j()}}),f=u.handleSubmit,h=u.handleChange,p=u.handleBlur,b=u.values,v=u.touched,g=u.errors,j=function(){o(!1)};return Object(n.jsxs)(i.a,{show:t,onHide:j,keyboard:!1,children:[Object(n.jsx)(i.a.Header,{closeButton:!0,children:Object(n.jsxs)(i.a.Title,{children:["Send email about ",m]})}),Object(n.jsx)(i.a.Body,{children:Object(n.jsxs)(r.a,{onSubmit:f,className:"contact-form",children:[Object(n.jsxs)(r.a.Group,{controlId:"emailContact",children:[Object(n.jsx)(r.a.Control,{type:"email",placeholder:"Enter your email",value:b.emailContact,onChange:h,onBlur:p}),v.emailContact&&g.emailContact?Object(n.jsx)("p",{children:g.emailContact}):null]}),Object(n.jsxs)(r.a.Group,{controlId:"nameContact",children:[Object(n.jsx)(r.a.Control,{type:"text",placeholder:"Enter your name",value:b.nameContact,onChange:h,onBlur:p}),v.nameContact&&g.nameContact?Object(n.jsx)("p",{children:g.nameContact}):null]}),Object(n.jsxs)(r.a.Group,{controlId:"messageContact",children:[Object(n.jsx)(r.a.Control,{as:"textarea",rows:3,placeholder:"Enter your message",value:b.messageContact,onChange:h,onBlur:p}),v.messageContact&&g.messageContact?Object(n.jsx)("p",{children:g.messageContact}):null]}),Object(n.jsx)(r.a.Label,{children:"In this form you send the message to the administrator to request information on the selected coin!"}),Object(n.jsxs)(i.a.Footer,{children:[Object(n.jsx)(c.a,{variant:"secondary",onClick:j,children:"Close"}),Object(n.jsx)(c.a,{type:"submit",variant:"primary",children:"SEND"})]})]})})]})}},337:function(e,t,o){},338:function(e,t,o){},348:function(e,t,o){"use strict";o.r(t);var n=o(3),a=o(21),i=o(0),r=o(22),c=o(306),s=o(311),d=o(317),l=o(68),m=(o(337),function(e){var t=e.favorite,o=e.doUnFavorite,c=Object(i.useState)(!1),m=Object(a.a)(c,2),u=m[0],f=m[1],h={route:"post",user:t.folderPhoto,link:t.link,name:t.photo},p=Object(r.b)();return Object(n.jsxs)("div",{className:"favorite",children:[Object(n.jsxs)("div",{className:"favorite-icons",children:[Object(n.jsx)("i",{className:"fas fa-envelope fa-2x",onClick:function(){return f(!0)}}),Object(n.jsx)("i",{className:"fas fa-star fa-2x",onClick:function(){return o(t)}})]}),Object(n.jsx)(s.a,{photo:h,postTitle:t.title,styleClass:"image"}),Object(n.jsx)("div",{className:"favorite-title",children:t.title}),Object(n.jsx)(d.a,{showModal:u,setShowModal:f,sendEmail:function(e){var t=e.emailContact,o=e.nameContact,n=e.messageContact;p(Object(l.j)({email:t,name:o,message:n}))},title:t.title})]})}),u=o(9);o(338),t.default=function(){var e=Object(i.useState)([]),t=Object(a.a)(e,2),o=t[0],s=t[1],d=Object(r.b)(),f=Object(r.c)((function(e){return e.profileInfo})),h=f.loading,p=f.user;Object(i.useEffect)((function(){return p&&0!==Object.keys(p).length?s(p.favorites):d(Object(l.d)()),function(){p&&d({type:u.l})}}),[d,p]);var b=function(e){d(Object(l.c)({favoriteId:e._id,postId:e.postId}))};return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(c.a,{loading:h,title:"Your favorites",children:Object(n.jsx)("div",{className:"main-favorite-page",children:o.length>0?o.map((function(e,t){return Object(n.jsx)(m,{favorite:e,doUnFavorite:b},t)})):Object(n.jsx)("div",{className:"not-favorites",children:Object(n.jsx)("h3",{children:"You don't have any favorites post"})})})})})}}}]);
//# sourceMappingURL=7.0c7c5f3f.chunk.js.map