(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{38:function(e,n,t){},59:function(e,n,t){},60:function(e,n,t){"use strict";t.r(n);var r,a,c=t(0),i=t.n(c),s=t(8),o=t.n(s),d=(t(38),t(9)),l=t(1),j=t(3),f=t(29),h=t.n(f),b=t(30),u=t(31),p=t(6),m=t.n(p),x=t(16),O=t(33),w=t(12),g=t(5),v=t(32),y=t.n(v),F=t(2),k=function(e){var n=e.addLocation,t=Object(c.useState)(""),r=Object(g.a)(t,2),a=r[0],i=r[1],s=function(){var e=Object(w.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a.length<1)){e.next=2;break}return e.abrupt("return");case 2:window.localStorage.setItem("zipcode",a),n(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(F.jsxs)(j.f,{style:{minWidth:"400px"},children:[Object(F.jsx)(j.h,{className:"window-header",children:Object(F.jsx)("span",{children:"Weather"})}),Object(F.jsx)(j.g,{children:Object(F.jsxs)(j.b,{label:"Add a location",children:[Object(F.jsx)("span",{children:"Enter a zipcode:"}),Object(F.jsx)("div",{children:Object(F.jsxs)("div",{style:{display:"flex"},children:[Object(F.jsx)(j.e,{value:a,placeholder:"Type here...",onChange:function(e){return i(e.target.value)},fullWidth:!0}),Object(F.jsx)(j.a,{onClick:s,style:{marginLeft:4},children:"Add"})]})})]})})]})},C=l.d.div(r||(r=Object(d.a)(['\n  .window-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n  .close-icon {\n    display: inline-block;\n    width: 16px;\n    height: 16px;\n    margin-left: -1px;\n    margin-top: -1px;\n    transform: rotateZ(45deg);\n    position: relative;\n    &:before,\n    &:after {\n      content: "";\n      position: absolute;\n      background: rgb(10, 10, 10);\n    }\n    &:before {\n      height: 100%;\n      width: 3px;\n      left: 50%;\n      transform: translateX(-50%);\n    }\n    &:after {\n      height: 3px;\n      width: 100%;\n      left: 0px;\n      top: 50%;\n      transform: translateY(-50%);\n    }\n  }\n  .window {\n    min-height: 200px;\n    min-width:400px;\n    margin: 1rem 1rem 0 0;\n  }\n']))),_=function(e){var n=e.forecasts,t=e.removeForecast;return Object(F.jsx)(C,{children:n.map((function(e){var n=e.name,r=e.zipCode,a=e.dt,c=e.main,i=c.temp,s=c.feels_like,o=c.temp_min,d=c.temp_max,l=Object(g.a)(e.weather,1)[0],f=l.description,h=l.icon;return Object(F.jsxs)(j.f,{className:"window",children:[Object(F.jsxs)(j.h,{className:"window-header",children:[Object(F.jsxs)("span",{children:[n," (",r,") at ",new Intl.DateTimeFormat("en-US",{timeStyle:"short"}).format(new Date(1e3*a))]}),Object(F.jsx)(j.a,{onClick:function(){return t(n,a)},children:Object(F.jsx)("span",{className:"close-icon"})})]}),Object(F.jsxs)(j.c,{shadow:!1,fullWidth:!0,children:[Object(F.jsx)(j.d,{children:f}),Object(F.jsx)(j.d,{children:Object(F.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(h,"@2x.png"),alt:""})}),Object(F.jsxs)(j.d,{children:["Current temperature: ",i,"\xb0F"]}),Object(F.jsxs)(j.d,{children:["Feels like: ",s,"\xb0F"]}),Object(F.jsxs)(j.d,{children:["Today - min: ",o,"\xb0F max: ",d,"\xb0F"]})]})]},n+a)}))})},S=function(){var e=Object(c.useState)([]),n=Object(g.a)(e,2),t=n[0],r=n[1],a=function(){var e=Object(w.a)(m.a.mark((function e(n){var a,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("https://api.openweathermap.org/data/2.5/weather?zip=".concat(n,"&appid=***REMOVED***&units=imperial"));case 2:if(a=e.sent,c=a.data,!t.find((function(e){var n=e.name,t=e.dt;return c.name===n&&c.dt===t}))){e.next=6;break}return e.abrupt("return");case 6:r([].concat(Object(O.a)(t),[Object(x.a)(Object(x.a)({},c),{},{zipCode:n})]));case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(k,{addLocation:a}),Object(F.jsx)(_,{forecasts:t,removeForecast:function(e,n){r(t.filter((function(t){return t.name!==e&&t.dt!==n})))}})]})},z=(t(59),Object(l.b)(a||(a=Object(d.a)(["\n  @font-face {\n    font-family: 'ms_sans_serif';\n    src: url('","') format('woff2');\n    font-weight: 400;\n    font-style: normal\n  }\n  @font-face {\n    font-family: 'ms_sans_serif';\n    src: url('","') format('woff2');\n    font-weight: bold;\n    font-style: normal\n  }\n  body {\n    font-family: 'ms_sans_serif';\n  }\n  ","\n"])),b.a,u.a,j.i)),L=function(){return Object(F.jsx)("div",{children:Object(F.jsxs)("div",{style:{padding:"4rem 0 1rem 4rem"},children:[Object(F.jsx)(z,{}),Object(F.jsx)(l.a,{theme:h.a,children:Object(F.jsx)(S,{})})]})})},T=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,61)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),r(e),a(e),c(e),i(e)}))};o.a.render(Object(F.jsx)(i.a.StrictMode,{children:Object(F.jsx)(L,{})}),document.getElementById("root")),T()}},[[60,1,2]]]);
//# sourceMappingURL=main.76563adb.chunk.js.map