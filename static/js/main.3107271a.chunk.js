(this.webpackJsonpnao=this.webpackJsonpnao||[]).push([[0],{22:function(e,a,t){e.exports=t(54)},27:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){"use strict";t.r(a);var n=t(0),d=t.n(n),r=t(21),c=t.n(r),l=(t(27),t(4)),i=t.n(l),m=t(5),b=t(3),o=t(6),s=t.n(o);t(45),t(46);var v=function(){return d.a.createElement("div",{className:"header","data-v-f0357042":""},d.a.createElement("span",{className:"title","data-v-f0357042":""},"Nao"))};t(47);var u=function(e){var a=Object(n.useState)(-1),t=Object(b.a)(a,2),r=t[0],c=t[1];return d.a.createElement("div",{className:"selecter","data-v-4f2e995e":""},d.a.createElement("ul",{"data-v-4f2e995e":""},e.icons&&e.idols.map((function(a,t){return d.a.createElement("li",{className:"idol"+(r===t?" selected":""),key:a.id,onClick:function(a){return function(a){c(a),e.selectIdol(a)}(t)},"data-v-4f2e995e":""},d.a.createElement("img",{src:"data:image/png;base64,".concat(e.icons[a.name]),alt:"",className:"icon","data-v-4f2e995e":""}),d.a.createElement("div",{className:"name","data-v-4f2e995e":""},a.name))}))))},E=(t(48),t(8)),f=t(10),h=(t(53),"https://api.matsurihi.me/mltd/v1/cards"),p="https://storage.matsurihi.me/mltd/card/";var w=function(e){var a=Object(n.useState)([]),t=Object(b.a)(a,2),r=t[0],c=t[1],l=Object(n.useState)(0),o=Object(b.a)(l,2),v=o[0],u=o[1],w=Object(n.useState)(!1),g=Object(b.a)(w,2),N=g[0],j=g[1],O=Object(n.useState)(!1),y=Object(b.a)(O,2),S=y[0],k=y[1];Object(n.useEffect)((function(){k(!1),u(0),j(!1),function(){var e=Object(m.a)(i.a.mark((function e(a){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("".concat(h,"?idolId=").concat(a));case 2:return t=e.sent,n=t.data.map((function(e){return{normalSrc:"".concat(p).concat(e.resourceId,"_0_a.png"),awakenedSrc:"".concat(p).concat(e.resourceId,"_1_a.png"),cardName:e.name,rarity:["","N","R","SR","SSR"][e.rarity]}})),c(n),e.abrupt("return",n[0].normalSrc);case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()(e.id).then((function(e){var a=new Image;a.src=e,a.onload=function(){return k(!0)}}))}),[e.id]);var x=function(e){var a=v+e;a<0&&(a=r.length-1),a>=r.length&&(a=0),u(a)};return d.a.createElement("div",{"data-v-e9dfe1e8":""},S?d.a.createElement("div",{className:"view-area","data-v-e9dfe1e8":""},d.a.createElement("div",{className:"button",onClick:function(e){return x(-1)},"data-v-e9dfe1e8":""},d.a.createElement(E.a,{icon:f.a,size:"lg","data-v-e9dfe1e8":""})),d.a.createElement("div",{className:"card-view","data-v-e9dfe1e8":""},d.a.createElement("div",{className:"card-name","data-v-e9dfe1e8":""},"[".concat(r[v].rarity,"] ").concat(r[v].cardName)),d.a.createElement("img",{src:N?r[v].awakenedSrc:r[v].normalSrc,alt:"",onClick:function(e){return j(!N)},"data-v-e9dfe1e8":""}),d.a.createElement("div",{className:"card-msg","data-v-e9dfe1e8":""},"\u30af\u30ea\u30c3\u30af\u3067\u899a\u9192\u524d/\u899a\u9192\u5f8c\u3092\u5207\u308a\u66ff\u3048\u3089\u308c\u307e\u3059\u3002")),d.a.createElement("div",{className:"button",onClick:function(e){return x(1)},"data-v-e9dfe1e8":""},d.a.createElement(E.a,{icon:f.b,size:"lg","data-v-e9dfe1e8":""}))):d.a.createElement("div",{className:"message","data-v-e9dfe1e8":""},"\u8aad\u307f\u8fbc\u307f\u4e2d..."))};var g=function(e){return d.a.createElement("div",{className:"detail","data-v-29d6b61b":""},d.a.createElement("div",{className:"container","data-v-29d6b61b":""},e.idol?d.a.createElement(d.a.Fragment,null,d.a.createElement(w,{id:e.idol.id,"data-v-29d6b61b":""}),d.a.createElement("table",{className:e.idol.type.toLowerCase(),"data-v-29d6b61b":""},d.a.createElement("tbody",{"data-v-29d6b61b":""},d.a.createElement("tr",{"data-v-29d6b61b":""},d.a.createElement("th",{"data-v-29d6b61b":""},"\u540d\u524d"),d.a.createElement("td",{"data-v-29d6b61b":""},e.idol.name)),d.a.createElement("tr",{"data-v-29d6b61b":""},d.a.createElement("th",{"data-v-29d6b61b":""},"\u5206\u985e"),d.a.createElement("td",{"data-v-29d6b61b":""},e.idol.group)),d.a.createElement("tr",{"data-v-29d6b61b":""},d.a.createElement("th",{"data-v-29d6b61b":""},"\u5c5e\u6027"),d.a.createElement("td",{"data-v-29d6b61b":""},e.idol.type)),d.a.createElement("tr",{"data-v-29d6b61b":""},d.a.createElement("th",{"data-v-29d6b61b":""},"\u5e74\u9f62"),d.a.createElement("td",{"data-v-29d6b61b":""},e.idol.age,"\u6b73")),d.a.createElement("tr",{"data-v-29d6b61b":""},d.a.createElement("th",{"data-v-29d6b61b":""},"\u8a95\u751f\u65e5"),d.a.createElement("td",{"data-v-29d6b61b":""},e.idol.birth)),d.a.createElement("tr",{"data-v-29d6b61b":""},d.a.createElement("th",{"data-v-29d6b61b":""},"\u8840\u6db2\u578b"),d.a.createElement("td",{"data-v-29d6b61b":""},e.idol.blood)),d.a.createElement("tr",{"data-v-29d6b61b":""},d.a.createElement("th",{"data-v-29d6b61b":""},"\u8eab\u9577"),d.a.createElement("td",{"data-v-29d6b61b":""},e.idol.height,"cm")),d.a.createElement("tr",{"data-v-29d6b61b":""},d.a.createElement("th",{"data-v-29d6b61b":""},"\u4f53\u91cd"),d.a.createElement("td",{"data-v-29d6b61b":""},e.idol.weight,"kg")),d.a.createElement("tr",{"data-v-29d6b61b":""},d.a.createElement("th",{"data-v-29d6b61b":""},"\u30d0\u30b9\u30c8"),d.a.createElement("td",{"data-v-29d6b61b":""},e.idol.bust,"cm")),d.a.createElement("tr",{"data-v-29d6b61b":""},d.a.createElement("th",{"data-v-29d6b61b":""},"\u30a6\u30a8\u30b9\u30c8"),d.a.createElement("td",{"data-v-29d6b61b":""},e.idol.waist,"cm")),d.a.createElement("tr",{"data-v-29d6b61b":""},d.a.createElement("th",{"data-v-29d6b61b":""},"\u30d2\u30c3\u30d7"),d.a.createElement("td",{"data-v-29d6b61b":""},e.idol.hip,"cm")),d.a.createElement("tr",{"data-v-29d6b61b":""},d.a.createElement("th",{"data-v-29d6b61b":""},"\u51fa\u8eab\u5730"),d.a.createElement("td",{"data-v-29d6b61b":""},e.idol.country)),d.a.createElement("tr",{"data-v-29d6b61b":""},d.a.createElement("th",{"data-v-29d6b61b":""},"\u8da3\u5473"),d.a.createElement("td",{"data-v-29d6b61b":""},e.idol.hobby)),d.a.createElement("tr",{"data-v-29d6b61b":""},d.a.createElement("th",{"data-v-29d6b61b":""},"\u7279\u6280"),d.a.createElement("td",{"data-v-29d6b61b":""},e.idol.skill)),d.a.createElement("tr",{"data-v-29d6b61b":""},d.a.createElement("th",{"data-v-29d6b61b":""},"\u597d\u304d\u306a\u3082\u306e"),d.a.createElement("td",{"data-v-29d6b61b":""},e.idol.favorite)),d.a.createElement("tr",{"data-v-29d6b61b":""},d.a.createElement("th",{"data-v-29d6b61b":""},"CV"),d.a.createElement("td",{"data-v-29d6b61b":""},e.idol.cv)))),d.a.createElement("div",{className:"annotation","data-v-29d6b61b":""},"\u753b\u50cf\u53d6\u5f97\u306b",d.a.createElement("a",{href:"https://www.matsurihi.me/","data-v-29d6b61b":""},"matsurihi.me"),"\u69d8\u306eAPI\u3092\u5229\u7528\u3057\u3066\u3044\u307e\u3059\u3002")):d.a.createElement("div",{className:"message","data-v-29d6b61b":""},"\u2190\u5de6\u306e\u4e00\u89a7\u304b\u3089\u30a2\u30a4\u30c9\u30eb\u3092\u9078\u3093\u3067\u304f\u3060\u3055\u3044")))};var N=function(){var e=Object(n.useState)([]),a=Object(b.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(),l=Object(b.a)(c,2),o=l[0],E=l[1],f=Object(n.useState)(),h=Object(b.a)(f,2),p=h[0],w=h[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(m.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("assets/icon.json");case 2:a=e.sent,E(a.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var e=Object(m.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("assets/idol.json");case 2:a=e.sent,r(a.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),a()}),[]),d.a.createElement("div",{className:"container","data-v-af52e1a5":""},d.a.createElement(v,{"data-v-af52e1a5":""}),d.a.createElement("div",{className:"main","data-v-af52e1a5":""},d.a.createElement(u,{idols:t,icons:o,selectIdol:function(e){w(t[e])},"data-v-af52e1a5":""}),d.a.createElement(g,{idol:p,"data-v-af52e1a5":""})))};c.a.render(d.a.createElement(d.a.StrictMode,null,window.innerWidth<768?d.a.createElement("div",{className:"error-msg"},"\u3053\u306e\u30b5\u30a4\u30c8\u306fPC/\u30bf\u30d6\u30ec\u30c3\u30c8\u5c02\u7528\u3067\u3059"):d.a.createElement(N,null)),document.getElementById("root")),window.onload=function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px")),window.addEventListener("resize",(function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))}))}}},[[22,1,2]]]);
//# sourceMappingURL=main.3107271a.chunk.js.map