(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{17:function(t,e,n){"use strict";n.r(e);var r=n(5),c=n.n(r),a=n(1),s=n.n(a),o=n(2),i=n(6),u=n(7),l=n(9),d=n(8),j=n(3),b=n.n(j),h=n(0),p=function(t){var e=t.goods;return Object(h.jsxs)("table",{className:"table mx-auto mt-4",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"ID"}),Object(h.jsx)("th",{children:"Name"}),Object(h.jsx)("th",{children:"Color"})]})}),Object(h.jsx)("tbody",{children:e.map((function(t){var e=t.id,n=t.name,r=t.color;return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e}),Object(h.jsx)("td",{style:{color:r},children:n}),Object(h.jsx)("td",{style:{color:r},children:r})]},e)}))})]})},f="https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json",m=function(){var t=Object(o.a)(s.a.mark((function t(){var e,n,r=arguments;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:"",t.prev=1,t.next=4,fetch("".concat(f).concat(e));case 4:return n=t.sent,t.next=7,n.json();case 7:return t.abrupt("return",t.sent);case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",Error("Request has failed."));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(){return t.apply(this,arguments)}}(),x=function(){return m()},O=function(){var t=Object(o.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:return e=t.sent,t.abrupt("return",e.sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=Object(o.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:return e=t.sent,t.abrupt("return",e.filter((function(t){return"red"===t.color})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),y=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={goods:null},t.getGoods=function(){var e=Object(o.a)(s.a.mark((function e(n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:r=e.sent,t.setState({goods:r});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e=this.state.goods,n=x,r=O,c=v;return Object(h.jsx)("section",{className:"section",children:Object(h.jsxs)("div",{style:{textAlign:"center"},className:"container",children:[Object(h.jsxs)("div",{className:"box",children:[Object(h.jsx)("h1",{className:"title",children:"Goods"}),Object(h.jsx)("button",{className:"button is-primary mr-3",type:"button",onClick:function(){return t.getGoods(n)},children:"Load all goods"}),Object(h.jsx)("button",{className:"button is-primary mr-3",type:"button",onClick:function(){return t.getGoods(r)},children:"Load 5 first goods"}),Object(h.jsx)("button",{className:"button is-primary mr-3",type:"button",onClick:function(){return t.getGoods(c)},children:"Load red goods"})]}),e&&Object(h.jsx)(p,{goods:e})]})})}}]),n}(b.a.Component),g=y;n(16);c.a.render(Object(h.jsx)(g,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.59476b0d.chunk.js.map