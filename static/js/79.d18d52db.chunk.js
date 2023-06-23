"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[79],{79:function(t,n,e){e.r(n),e.d(n,{default:function(){return Z}});var r,a,u,c=e(861),s=e(439),i=e(757),o=e.n(i),p=e(791),l=e(689),f=e(721),h=e(88),v=e(168),d=e(444),x=d.ZP.ul(r||(r=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n\n  max-height: 500px;\n\n  padding: 10px;\n\n  list-style: none;\n\n  overflow: auto;\n\n"]))),m=d.ZP.li(a||(a=(0,v.Z)(["\n  &:not(:last-child) {\n    border-bottom: 1px solid #111111;\n  }\n"]))),w=d.ZP.p(u||(u=(0,v.Z)(["\n  text-align: justify;\n"]))),g=e(184),y=function(t){var n=t.movieReviews;if(n)return(0,g.jsx)(x,{children:n.map((function(t){var n=t.id,e=t.author,r=t.content;return(0,g.jsxs)(m,{children:[(0,g.jsxs)("h4",{children:["Author: ",e]}),(0,g.jsx)(w,{children:r})]},n)}))})},Z=function(){var t=(0,p.useState)(null),n=(0,s.Z)(t,2),e=n[0],r=n[1],a=(0,p.useState)(null),u=(0,s.Z)(a,2),i=u[0],v=u[1],d=(0,p.useState)(!1),x=(0,s.Z)(d,2),m=x[0],w=x[1],Z=(0,l.UO)().movieId;return(0,p.useEffect)((function(){var t=function(){var t=(0,c.Z)(o().mark((function t(){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,w(!0),t.next=4,(0,h.Jh)(Z);case 4:n=t.sent,r(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),"ERR_CANCELED"!==t.t0.code&&v(t.t0.message);case 11:return t.prev=11,w(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[Z]),(0,g.jsxs)(g.Fragment,{children:[m&&(0,g.jsx)(f.a,{}),i&&!m&&(0,g.jsxs)("p",{children:["Error: ",i]}),(0,g.jsx)(y,{movieReviews:e})]})}},88:function(t,n,e){e.d(n,{IQ:function(){return h},Jh:function(){return d},Pg:function(){return l},qF:function(){return o},wr:function(){return s}});var r=e(861),a=e(757),u=e.n(a),c=e(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"36aa473dfc5ec81fada547082bc4a5dd",language:"en-US"}});function s(){return i.apply(this,arguments)}function i(){return(i=(0,r.Z)(u().mark((function t(){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.get("/trending/movie/day");case 3:return n=t.sent,e=n.data,t.abrupt("return",e.results);case 8:throw t.prev=8,t.t0=t.catch(0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function o(t,n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(u().mark((function t(n,e){var r,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.get("/search/movie?query=".concat(n),{signal:e});case 3:return r=t.sent,a=r.data,t.abrupt("return",a.results);case 8:throw t.prev=8,t.t0=t.catch(0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function l(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.get("/movie/".concat(n));case 3:return e=t.sent,r=e.data,t.abrupt("return",r);case 8:throw t.prev=8,t.t0=t.catch(0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function h(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.get("/movie/".concat(n,"/credits"));case 3:return e=t.sent,r=e.data,t.abrupt("return",r.cast);case 8:throw t.prev=8,t.t0=t.catch(0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function d(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.get("/movie/".concat(n,"/reviews"));case 3:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 8:throw t.prev=8,t.t0=t.catch(0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=79.d18d52db.chunk.js.map