"use strict";(self.webpackChunkcoin_site=self.webpackChunkcoin_site||[]).push([[742],{3742:function(e,s,n){n.r(s),n.d(s,{default:function(){return w}});var i=n(8152),t=n(7313),a=n(3222),r=n(5861),c=n(7757),d=n.n(c),l=n(1881),o=n.n(l),h=n(8976),u=function(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"data",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1;return e.sort((function(e,i){return e["".concat(s)].points<i["".concat(s)].points?-1*n:e["".concat(s)].points>i["".concat(s)].points?1*n:0}))},x=n(2578),p=n(6417),j=function(e){var s=e.showModal,n=e.setShowModal,i=e.item,a=i.firstname,r=i.lastname,c=i.picture,d=i.sex,l=i.country,o=l.code,h=l.picture,u=i.data,j=u.rank,m=u.points,f=u.age,v=u.weight,_=u.height;(0,t.useEffect)((function(){}),[s]);return(0,p.jsxs)(x.Z,{show:s,onHide:function(){n(!1)},keyboard:!1,className:"custom__modal",children:[(0,p.jsx)(x.Z.Header,{closeButton:!0}),(0,p.jsxs)(x.Z.Body,{children:[(0,p.jsx)("div",{className:"border-photo",children:(0,p.jsx)("img",{src:c,alt:"photo of tenises"})}),(0,p.jsxs)("div",{className:"modal-body-upper",children:[(0,p.jsxs)("div",{className:"tenises__name",children:[(0,p.jsx)("span",{children:a}),(0,p.jsx)("p",{children:r})]}),(0,p.jsxs)("div",{className:"tenises__flag",children:[(0,p.jsx)("img",{src:h,alt:"flag of country"}),(0,p.jsx)("span",{children:o})]})]}),(0,p.jsxs)("div",{className:"modal-body-down",children:[(0,p.jsxs)("div",{className:"body-down-info",children:[(0,p.jsxs)("div",{className:"one",children:[(0,p.jsx)("span",{children:"Rank"}),(0,p.jsxs)("p",{children:["#",j]})]}),(0,p.jsxs)("div",{className:"two",children:[(0,p.jsx)("span",{children:"Points"}),(0,p.jsx)("p",{children:m})]}),(0,p.jsxs)("div",{className:"three",children:[(0,p.jsx)("span",{children:"Country"}),(0,p.jsx)("p",{children:o})]}),(0,p.jsxs)("div",{className:"four",children:[(0,p.jsx)("span",{children:"Sex"}),(0,p.jsx)("p",{children:d})]}),(0,p.jsxs)("div",{className:"five",children:[(0,p.jsx)("span",{children:"Age"}),(0,p.jsx)("p",{children:f})]}),(0,p.jsxs)("div",{className:"six",children:[(0,p.jsx)("span",{children:"Weight"}),(0,p.jsxs)("p",{children:[function(e){return e/1e3}(v)," kg"]})]}),(0,p.jsxs)("div",{className:"seven",children:[(0,p.jsx)("span",{children:"Height"}),(0,p.jsxs)("p",{children:[_," cm"]})]})]}),(0,p.jsxs)("div",{className:"body-down-career",children:[(0,p.jsx)("span",{children:"Career Title"}),(0,p.jsx)("p",{})]})]})]})]})},m=(0,t.memo)(j),f=function(e){var s=e.item,n=(0,t.useState)(!1),a=(0,i.Z)(n,2),r=a[0],c=a[1],d=s.firstname,l=s.lastname,o=s.picture,h=s.country.code,u=s.data,x=u.rank,j=u.points;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:"card",onClick:function(){return c(!0)},children:[(0,p.jsx)("div",{className:"card__photo",children:(0,p.jsx)("img",{src:o,className:"card__photo_player"})}),(0,p.jsxs)("div",{className:"card__content",children:[(0,p.jsx)("div",{className:"card__content_name",children:(0,p.jsxs)("span",{children:[d," ",l]})}),(0,p.jsxs)("div",{className:"card__content_info",children:[(0,p.jsxs)("div",{className:"title__info",children:[(0,p.jsx)("span",{children:"Rank"}),(0,p.jsxs)("p",{children:["#",x]})]}),(0,p.jsxs)("div",{className:"title__info",children:[(0,p.jsx)("span",{children:"Points"}),(0,p.jsx)("p",{children:j})]}),(0,p.jsxs)("div",{className:"title__info",children:[(0,p.jsx)("span",{children:"Country"}),(0,p.jsx)("p",{children:h})]})]})]})]}),(0,p.jsx)(m,{showModal:r,setShowModal:c,item:s})]})},v=(0,t.memo)(f),_=function(){var e=(0,t.useState)({width:window.innerWidth,height:window.innerHeight}),s=(0,i.Z)(e,2),n=s[0],a=s[1],r=function(){a({width:window.innerWidth,height:window.innerHeight})};return(0,t.useEffect)((function(){return window.addEventListener("resize",r),function(){window.removeEventListener("resize",r)}}),[]),n},w=function(){var e=(0,a.v9)((function(e){return e.tenisesList})).tenisesList,s=(0,t.useState)(640),n=(0,i.Z)(s,2),c=n[0],l=n[1],x=(0,t.useState)(!0),j=(0,i.Z)(x,2),m=j[0],f=j[1],w=_().width,g=(0,a.I0)();(0,t.useEffect)((function(){g(function(){var e=(0,r.Z)(d().mark((function e(s,n){var i,t;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s({type:h.Mb}),e.next=4,o().get("https://data.latelier.co/training/tennis_stats/headtohead.json");case 4:i=e.sent,t=i.data.players,s({type:h.hg,payload:u(t)}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),s({type:h.QE,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(s,n){return e.apply(this,arguments)}}()),N(),function(e,s,n){e<1920&&n(e/1920*s)}(w,640,l)}),[w]);var N=function(){return f(!(w<768))};return(0,p.jsxs)("div",{className:"home",children:[(0,p.jsxs)("div",{className:"home_players",children:[(0,p.jsx)("input",{placeholder:"Rechercher un joueur"}),(0,p.jsx)("div",{className:"home_players_content",children:e.map((function(e,s){return(0,p.jsx)(v,{item:e},s)}))})]}),m&&(0,p.jsx)("div",{className:"home_logo",children:(0,p.jsx)("img",{src:"tenisball.png",alt:"tenis ball",width:c,height:c})})]})}}}]);