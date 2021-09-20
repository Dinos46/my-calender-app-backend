(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{107:function(e,t,n){},108:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(25),s=n.n(r),o=n(42),i=n(8),u=n(33),l=n(11),d=n(18),b=n(14),f=n(70),j=n(13),h=n.n(j),v=n(20),p=n(34),O=n.n(p),m={query:function(){return g.apply(this,arguments)},getById:function(e){return k.apply(this,arguments)},save:function(e){return w.apply(this,arguments)},remove:function(e){return y.apply(this,arguments)}},x="/api/";function g(){return(g=Object(v.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat(x,"event/"));case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.error("cant get events",e.t0);case 11:case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function k(){return(k=Object(v.a)(h.a.mark((function e(t){var n,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat(x,"event/").concat(t));case 3:return n=e.sent,c=n.data,e.abrupt("return",c);case 8:e.prev=8,e.t0=e.catch(0),console.error("cant get stay",e.t0);case 11:case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function w(){return(w=Object(v.a)(h.a.mark((function e(t){var n,c,a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t._id){e.next=9;break}return e.next=4,O.a.put("".concat(x,"event/").concat(t._id),t);case 4:return n=e.sent,c=n.data,e.abrupt("return",c);case 9:return e.next=11,O.a.post("".concat(x,"event/"),t);case 11:return a=e.sent,r=a.data,e.abrupt("return",r);case 14:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.error("cant save event",e.t0);case 20:case 21:case"end":return e.stop()}}),e,null,[[0,17]])})))).apply(this,arguments)}function y(){return(y=Object(v.a)(h.a.mark((function e(t){var n,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.delete("".concat(x,"event/").concat(t));case 3:return n=e.sent,c=n.data,e.abrupt("return",c);case 8:e.prev=8,e.t0=e.catch(0),console.error("cant remove event ".concat(t),e.t0);case 11:case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var D,N=Object(d.b)("events/getAllEvents",Object(v.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.query();case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),new Error("cant get events",e.t0);case 9:case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))),C=Object(d.b)("events/addEvent",function(){var e=Object(v.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.save(t);case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.error("cant add event",e.t0);case 9:case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()),S=Object(d.b)("events/editEvent",function(){var e=Object(v.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.save(t);case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.error("cant edit event",e.t0);case 9:case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()),M=Object(d.b)("events/removeEvent",function(){var e=Object(v.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.remove(t);case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.error("cant remove event",e.t0);case 9:case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()),E=(D={},Object(b.a)(D,N.pending,(function(e){e.status="loading"})),Object(b.a)(D,N.fulfilled,(function(e,t){var n=t.payload;e.events=n,e.status="success"})),Object(b.a)(D,N.rejected,(function(e){e.status="failed"})),Object(b.a)(D,C.pending,(function(e){e.status="loading"})),Object(b.a)(D,C.fulfilled,(function(e,t){var n=t.payload;e.events.push(n),e.status="success"})),Object(b.a)(D,C.rejected,(function(e){e.status="failed"})),Object(b.a)(D,M.pending,(function(e){e.status="loading"})),Object(b.a)(D,M.fulfilled,(function(e,t){var n=t.payload,c=e.events.filter((function(e){return n._id!==e._id}));e.events=Object(f.a)(c),e.status="success"})),Object(b.a)(D,M.rejected,(function(e){e.status="failed"})),Object(b.a)(D,S.pending,(function(e){e.status="loading"})),Object(b.a)(D,S.fulfilled,(function(e,t){var n=t.payload,c=e.events.findIndex((function(e){var t;return(null===(t=n.data)||void 0===t?void 0:t._id)===e._id}));e.events.splice(c,1,n.data),e.status="success"})),Object(b.a)(D,S.rejected,(function(e){e.status="failed"})),D),L=Object(d.c)({name:"events",initialState:{events:[],status:null,selectedEv:null},reducers:{setSelectedEv:function(e,t){var n=t.payload;e.selectedEv=n}},extraReducers:E}),z=L.actions.setSelectedEv,_=L.reducer,I=n(62),B=n.n(I),A=n(63),R=n.n(A),T=n(2),q=function(e){var t=e.date,n=e.onNext,c=e.onPrev;return Object(T.jsxs)("section",{className:"calendar-header flex",children:[Object(T.jsx)("button",{className:"btn",onClick:c,children:Object(T.jsx)(B.a,{})}),Object(T.jsx)("h2",{children:t}),Object(T.jsx)("button",{className:"btn",onClick:n,children:Object(T.jsx)(R.a,{})})]})},F=function(e){var t=e.day,n=t.value,c=t.isCurrDay,a=t.date,r=t.event,s=e.onSelect,o=e.isDark,u=Object(i.f)().push;return Object(T.jsx)("button",{className:"btn",onClick:function(){a&&u("/save/".concat((null===r||void 0===r?void 0:r._id)||""))},children:Object(T.jsxs)("div",{className:"day-tile ".concat(n," ").concat(c&&"current"," flex ").concat(o?"dark":""),onClick:function(){return s(a)},children:[n,r&&Object(T.jsx)("span",{className:"ev-title",children:r.description})]})})},P=n(132),V=function(){return Object(T.jsx)("div",{className:"loader",children:Object(T.jsx)(P.a,{size:100})})},J=n(46),U=n(66),X=n.n(U),Y=n(65),G=n.n(Y),H=n(67),K=n.n(H),Q=[{path:"/save/:_id?",component:function(){var e=Object(c.useState)({description:""}),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(l.c)((function(e){return e.event.selectedEv})),s=Object(l.c)((function(e){return e.event.status})),o=Object(l.b)(),d=Object(i.g)()._id,b=Object(i.f)();Object(c.useEffect)((function(){d&&m.getById(d).then((function(e){return a(e)}))}),[d]);return Object(T.jsx)("section",{className:"add-edit",children:Object(T.jsxs)("form",{className:"flex",onSubmit:function(e){e.preventDefault();var t={date:r,description:n},c=Object(J.a)({},n);o(d?S(c):C(t)),"success"===s&&b.push("/")},children:[Object(T.jsxs)("div",{className:"content-container flex",children:[Object(T.jsx)("label",{htmlFor:"des",children:d?"edit description":"add description"}),Object(T.jsx)("input",{type:"text",name:"des",id:"des",required:!0,value:null===n||void 0===n?void 0:n.description,onChange:function(e){var t=e.target;a((function(e){return Object(J.a)(Object(J.a)({},e),{},{description:t.value})}))}})]}),Object(T.jsxs)("div",{className:"btn-container flex",children:[Object(T.jsx)("button",{className:"btn",children:d?Object(T.jsx)(G.a,{}):Object(T.jsx)(X.a,{})}),Object(T.jsx)("button",{className:"btn",onClick:function(e){e.preventDefault(),o(M(d)),"success"===s&&b.push("/")},children:Object(T.jsx)(K.a,{})})]})]})})}},{path:"/",component:function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.event.events})),n=Object(l.c)((function(e){return e.event.status})),a=Object(l.c)((function(e){return e.theme.isDark})),r=function(e){if(e)return null===t||void 0===t?void 0:t.find((function(t){return(null===t||void 0===t?void 0:t.date)===e}))},s=Object(c.useState)(0),o=Object(u.a)(s,2),i=o[0],d=o[1],b=Object(c.useState)([]),f=Object(u.a)(b,2),j=f[0],h=f[1],v=Object(c.useState)(""),p=Object(u.a)(v,2),O=p[0],m=p[1],x=["sunday","monday","tuseday","wednesday","thursday","friday","saturday"];Object(c.useEffect)((function(){e(N()),a?(document.body.classList.remove("light"),document.body.classList.add("dark")):(document.body.classList.remove("dark"),document.body.classList.add("light"))}),[e,a]),Object(c.useEffect)((function(){var e=new Date;0!==i&&e.setMonth((new Date).getMonth()+i);var t=e.getMonth(),n=e.getFullYear(),c=new Date(n,t,1).toLocaleDateString("en-us",{weekday:"long",year:"numeric",month:"numeric",day:"numeric"});m("".concat(e.toLocaleDateString("en-us",{month:"long"})," ").concat(n));var a=function(e,t,n){for(var c=new Date,a=c.getMonth(),r=c.getDate(),s=c.getFullYear(),o=new Date(s,a+1,0).getDate(),i=[],u=1;u<=e+o;u++){var l="".concat(a+1+n,"/").concat(u-e,"/").concat(s);u>e?i.push({value:u-e,isCurrDay:u-e===r&&0===n,date:l,event:t(l)}):i.push({value:"empty",isCurrDay:null,date:"",event:null})}return i}(x.indexOf(c.split(", ")[0].toLocaleLowerCase()),r,i);h(a)}),[t,i]);var g=function(t){e(z(t))};return"failed"===n?Object(T.jsx)("h2",{children:"cant get data, somthing went wrong"}):"loading"===n?Object(T.jsx)(V,{}):Object(T.jsxs)("section",{className:"calendar-app",children:[Object(T.jsx)(q,{date:O,onNext:function(){return d(i+1)},onPrev:function(){return d(i-1)}}),Object(T.jsxs)("div",{className:"calendar grid",children:[x.map((function(e){var t=e[0]+e[1]+e[2];return Object(T.jsx)("h3",{className:"day ".concat(e," ").concat(a?"dark":""),children:t},e)})),null===j||void 0===j?void 0:j.map((function(e,t){return Object(T.jsx)(F,{day:e,onSelect:g,isDark:a},e.value+t)}))]})]})}}],W=n(134),Z=n(139),$=n(135),ee=n(72),te=n(138),ne=n(133),ce=n(137),ae=Object(d.c)({name:"theme",initialState:{isDark:!0},reducers:{changeToLight:function(e){e.isDark=!1},changeToDark:function(e){e.isDark=!0}}}),re=ae.actions,se=re.changeToDark,oe=re.changeToLight,ie=ae.reducer,ue=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.theme.isDark})),n=Object(te.a)(ce.a)((function(e){var t=e.theme;return{width:62,height:34,padding:7,"& .MuiSwitch-switchBase":{margin:1,padding:0,transform:"translateX(6px)","&.Mui-checked":{color:"#fff",transform:"translateX(22px)","& .MuiSwitch-thumb:before":{backgroundImage:'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="'.concat(encodeURIComponent("#fff"),'" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>\')')},"& + .MuiSwitch-track":{opacity:1,backgroundColor:"light"===t.palette.mode?"#8796A5":"#aab4be"}}},"& .MuiSwitch-thumb":{backgroundColor:"light"===t.palette.mode?"#003892":"#001e3c",width:32,height:32,"&:before":{content:"''",position:"absolute",width:"100%",height:"100%",left:0,top:0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundImage:'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="'.concat(encodeURIComponent("#fff"),'" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>\')')}},"& .MuiSwitch-track":{opacity:1,backgroundColor:"light"===t.palette.mode?"#8796A5":"#aab4be",borderRadius:10}}}));return Object(T.jsx)("div",{children:Object(T.jsx)(ne.a,{control:Object(T.jsx)(n,{sx:{m:1},defaultChecked:t}),onChange:function(){e(oe()),t||e(se())}})})},le=function(){var e=Object(l.c)((function(e){return e.theme.isDark})),t=Object(i.f)(),n=Object(W.a)((function(t){return{dark:{backgroundColor:"#a513d8",color:"#fbfbfb"},light:{backgroundColor:"#fbfbfb",color:"#191011"},menuButton:{color:e?"#fbfbfb":"#191011",marginRight:t.spacing(2)},title:{color:e?"#fbfbfb":"#191011",flexGrow:1},backgroundColor:{backgroundColor:"inherit"}}}))();return Object(T.jsx)("header",{className:e?n.dark:n.light,children:Object(T.jsx)(Z.a,{position:"static",className:n.backgroundColor,children:Object(T.jsxs)($.a,{children:[Object(T.jsx)(ee.a,{variant:"h4",className:n.title,children:Object(T.jsx)("button",{className:"btn",onClick:function(){t.push("/")},children:"MyCalendar"})}),Object(T.jsx)(ue,{})]})})})},de=n(69),be=n.n(de),fe=n(68),je=n.n(fe),he=n(136),ve=function(){var e=Object(l.c)((function(e){return e.theme.isDark}));return Object(T.jsxs)("footer",{className:"full flex ".concat(e?"dark":""),children:[Object(T.jsx)("h3",{children:"<devDin>"}),Object(T.jsxs)("div",{className:"links flex",children:[Object(T.jsx)(he.a,{href:"https://www.linkedin.com/in/din-ben-elisha-5b476a211/",children:Object(T.jsx)(je.a,{})}),Object(T.jsx)(he.a,{href:"https://github.com/Dinos46",align:"center",children:Object(T.jsx)(be.a,{})})]})]})},pe=function(){return Object(T.jsx)("div",{className:"",children:Object(T.jsxs)(o.a,{children:[Object(T.jsx)(le,{}),Object(T.jsx)("main",{className:"full main-container",children:Object(T.jsx)(i.c,{children:Q.map((function(e){var t=e.path,n=e.component;return Object(T.jsx)(i.a,{path:t,component:n},t)}))})}),Object(T.jsx)(ve,{})]})})},Oe=Object(d.a)({reducer:{event:_,theme:ie}});n(107);s.a.render(Object(T.jsx)(a.a.StrictMode,{children:Object(T.jsx)(l.a,{store:Oe,children:Object(T.jsx)(pe,{})})}),document.getElementById("root"))}},[[108,1,2]]]);
//# sourceMappingURL=main.89c567a4.chunk.js.map