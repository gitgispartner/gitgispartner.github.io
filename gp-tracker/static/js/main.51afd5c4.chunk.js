(this["webpackJsonplive-tracker"]=this["webpackJsonplive-tracker"]||[]).push([[0],{29:function(e,t,n){e.exports=n(51)},34:function(e,t,n){},48:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(23),o=n.n(i),c=(n(34),n(7)),l=n(24),s=(n(35),n(9)),u=n(28),d=n(5),p=(n(48),n(14)),m=n(15);function v(){var e=Object(p.a)(["\n  color: ",";\n"]);return v=function(){return e},e}function f(){var e=Object(p.a)(["\n  width: 5px;\n  background-color: ",";\n  align-self: stretch;\n  margin: 0 10px;\n"]);return f=function(){return e},e}var y=m.a.div(f(),(function(e){return e.isStationPassed?"black":"grey"})),g=m.a.div(v(),(function(e){return e.isNotStation?"grey":"black"})),h=function(e){var t=e.station,n=e.isStationPassed,a=e.isNotStation,i=e.isFirstStation,o=e.isLastStation,c=e.arrivalTime,l=e.departureTime;return r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement("div",{style:{width:"42px",padding:"5px 0"}},i?null:r.a.createElement("div",null,c),o?null:r.a.createElement("div",null,l)),r.a.createElement(y,{isStationPassed:n}),r.a.createElement(g,{isNotStation:a},t.stationName))};function b(){var e=Object(p.a)(["\n  height: 100%;\n  padding: 10px;\n  overflow: auto;\n"]);return b=function(){return e},e}var E=m.a.div(b()),w=function(e){return!e.arrivalTime&&!e.departureTime},S=function(e,t){var n=e.departureTime||e.arrivalTime||0,a=e.departureDelay||e.arrivalDelay||0;return!w(e)&&n+a<=t},k=function(e){var t=e.vehicle,n=e.trackerLayer;return r.a.createElement(E,null,r.a.createElement("div",null,t.destination),r.a.createElement("div",null,t.longName),r.a.createElement("div",{style:{marginTop:"20px"}},t.stations.map((function(e,a){return r.a.createElement(h,{key:e.stationId,station:e,isStationPassed:S(e,n.currTime),isNotStation:w(e),isFirstStation:0===a,isLastStation:a===t.stations.length-1,arrivalTime:Object(s.b)(e.arrivalTime),departureTime:Object(s.b)(e.departureTime)})}))))},j=function(){var e=Object(a.useState)(null),t=Object(c.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)(null),p=Object(c.a)(o,2),m=p[0],v=p[1],f=Object(a.useRef)(m),y=function(e){f.current=e,v(e)};return Object(a.useEffect)((function(){var e="5cc87b12d7c5370001c1d655dc2238655d5c4099bbbadfd75f44cb34",t=new l.Map({container:"map",style:"https://maps.geops.io/styles/travic/style.json?key=".concat(e),center:[21,52.25],zoom:8}),n=new u.a({url:"https://api.geops.io/tracker/v1",apiKey:e});n.onClick((function(e){var a;t.getSource("route")&&(t.removeLayer("route"),t.removeSource("route")),(null===f||void 0===f||null===(a=f.current)||void 0===a?void 0:a.id)!==(null===e||void 0===e?void 0:e.id)&&e?(y(e),n.api.fetchTrajectoryById(n.getParams({id:n.journeyId,time:Object(s.c)(new Date)})).then((function(n){var a=n.p,r=[];a.forEach((function(e){e.forEach((function(e){r.push(Object(d.f)([e.x,e.y],"EPSG:3857","EPSG:4326"))}))})),t.addSource("route",{type:"geojson",data:{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:r}}}),t.addLayer({id:"route",type:"line",source:"route",layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":e.backgroundColor?e.backgroundColor:"#888","line-width":5}})}))):y(null)})),i(n),t.on("load",(function(){n.init(t,"waterway-name")}))}),[]),r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex",height:"100vh",width:"100vw"}},m?r.a.createElement(k,{trackerLayer:n,vehicle:m}):null,r.a.createElement("div",{id:"map",style:{flex:1},tabIndex:0})),r.a.createElement("div",{style:{position:"absolute",top:"10px",right:"10px",display:"block",width:"300px",zIndex:1e3}},r.a.createElement("a",{href:"./assets/system_transportowy.pdf",target:"_blank"},r.a.createElement("img",{style:{height:"66px"},src:"./assets/logo2.png",alt:""})),r.a.createElement("a",{href:"https://www.gispartner.pl/",target:"_blank"},r.a.createElement("img",{style:{height:"50px"},src:"./assets/logo1.png",alt:""}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.51afd5c4.chunk.js.map