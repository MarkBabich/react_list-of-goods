(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var s,r=n(4),i=n.n(r),o=n(5),c=n(6),a=n(9),l=n(7),u=n(8),d=n(1),h=n.n(d),b=(n(14),n(15),n(2)),j=n.n(b),p=n(0),v=function(e){var t=e.visibleGoods;return Object(p.jsx)("ul",{children:t.map((function(e){return Object(p.jsx)("li",{"data-cy":"Good",children:e},e)}))})},f=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(e){e[e.NONE=0]="NONE",e[e.ALPHABET=1]="ALPHABET",e[e.LENGTH=2]="LENGTH"}(s||(s={}));var N=function(e){Object(a.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={isReversed:!1,sortType:s.NONE},e.handleReset=function(){e.setState({isReversed:!1,sortType:s.NONE})},e.handleReverse=function(){e.setState((function(e){return{isReversed:!e.isReversed}}))},e.handleSort=function(t){e.setState({sortType:t})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.isReversed,r=t.sortType,i=function(e,t){var n=t.sortType,r=t.isReversed,i=Object(u.a)(e);return i.sort((function(e,t){switch(n){case s.ALPHABET:return e.localeCompare(t);case s.LENGTH:return e.length-t.length;default:return 0}})),r&&i.reverse(),i}(f,this.state),o=n||r!==s.NONE;return Object(p.jsxs)("div",{className:"section content",children:[Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsx)("button",{type:"button",className:j()("button is-info",{"is-light":r!==s.ALPHABET}),onClick:function(){return e.handleSort(s.ALPHABET)},children:"Sort alphabetically"}),Object(p.jsx)("button",{type:"button",className:j()("button is-success",{"is-light":r!==s.LENGTH}),onClick:function(){return e.handleSort(s.LENGTH)},children:"Sort by length"}),Object(p.jsx)("button",{type:"button",className:j()("button is-warning",{"is-light":!n}),onClick:this.handleReverse,children:"Reverse"}),o&&Object(p.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:this.handleReset,children:"Reset"})]}),Object(p.jsx)(v,{visibleGoods:i})]})}}]),n}(h.a.Component);i.a.render(Object(p.jsx)(N,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.d1eb48f9.chunk.js.map