(this["webpackJsonpcreate-react-app-antd"]=this["webpackJsonpcreate-react-app-antd"]||[]).push([[0],{109:function(e,t,a){},113:function(e,t,a){},156:function(e,t,a){},157:function(e,t,a){},159:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),i=a(26),l=(a(91),a(3)),s=a(19),u=a(72),m="GET_INFO_REQUEST",p="GET_INFO_SUCCESS",d="GET_INFO_FAILURE",b=a(42),f=a.n(b),v=a(73),j=a(74),E=a.n(j).a.create({baseURL:"https://bartokyo.yode.pro",timeout:2e4,headers:{Accept:"application/json","Content-type":"application/json"}});E.interceptors.response.use((function(e){return e.data}),(function(e){var t;return Promise.reject(null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.data)}));var O,h="/api_front",g=a(15),y=a(12),_=a(81),N={data:void 0,loading:!1},w=Object(_.a)(N,(O={},Object(g.a)(O,m,(function(e,t){return Object(y.a)(Object(y.a)({},e),{},{loading:!0})})),Object(g.a)(O,p,(function(e,t){return Object(y.a)(Object(y.a)({},e),{},{loading:!1,info:t.data})})),Object(g.a)(O,d,(function(e,t){return Object(y.a)(Object(y.a)({},e),{},{loading:!1})})),O)),k=Object(l.c)({temp:w}),I=Object(u.createLogger)(),x=Object(l.e)(k,Object(l.a)(s.a,I)),C=(a(109),a(23)),S=a(24),F=a(28),T=a(27),U=a(167),G=a(6),L=Object(G.a)(),R=a(13),z=a(43),A=a(45),B=a(164),J=a(165),M=a(166),W=(a(113),Object(R.withNaming)({n:"",e:"__",m:"_",v:"_"})("site-header")),D=function(e){Object(F.a)(a,e);var t=Object(T.a)(a);function a(){return Object(C.a)(this,a),t.apply(this,arguments)}return Object(S.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.getInfo)()}},{key:"render",value:function(){return r.a.createElement("header",{className:W()},r.a.createElement("div",{className:W("place-wrapper")},r.a.createElement(z.a,{icon:A.a,size:"lg",className:W("map-icon")}),r.a.createElement("span",{className:W("city-name")},"\u0419\u043e\u0448\u043a\u0430\u0440-\u041e\u043b\u0430")),r.a.createElement("div",{className:W("user-wrapper")},r.a.createElement(B.a,{icon:r.a.createElement(M.a,null),className:W("avatar")}),r.a.createElement("div",{className:W("user-name")},"\u0420\u043e\u043c\u0430\u043d")),r.a.createElement(J.a,{type:"link",icon:r.a.createElement(z.a,{icon:A.b,size:"lg"}),className:W("logout-button")},r.a.createElement("span",{className:"visually-hidden"},"\u0412\u044b\u0439\u0442\u0438")))}}]),a}(r.a.Component);var P=Object(i.b)((function(e){return{}}),(function(e){return{getInfo:function(){return e(function(){var e=m,t=p,a=d,n=function(e){return{type:t,data:e}};return function(){var t=Object(v.a)(f.a.mark((function t(r){var c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:e}),t.prev=1,t.next=4,E.get("".concat(h));case 4:c=t.sent,console.log("data =",c),r(n("")),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),r({type:a});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}())}}}))(D),Q=(a(156),Object(R.withNaming)({n:"",e:"__",m:"_",v:"_"})("inner-layout")),$=function(e){var t=e.children;return r.a.createElement("div",{className:Q()},r.a.createElement(P,null),r.a.createElement("main",{className:Q("main-container")},t))},q=(a(157),Object(R.withNaming)({n:"",e:"__",m:"_",v:"_"})("app")),H=function(e){Object(F.a)(a,e);var t=Object(T.a)(a);function a(){return Object(C.a)(this,a),t.apply(this,arguments)}return Object(S.a)(a,[{key:"render",value:function(){return r.a.createElement(U.b,{history:L},r.a.createElement("div",{className:q()},r.a.createElement(U.c,null,r.a.createElement($,null,r.a.createElement(U.a,{exact:!0,path:"/",render:function(e){return r.a.createElement("div",null,"hello world")}})))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:x},r.a.createElement(H,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},82:function(e,t,a){e.exports=a(159)}},[[82,1,2]]]);
//# sourceMappingURL=main.e96f9a69.chunk.js.map