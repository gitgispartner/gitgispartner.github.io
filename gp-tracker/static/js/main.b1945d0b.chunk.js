(this["webpackJsonpgp-tracker"]=this["webpackJsonpgp-tracker"]||[]).push([[0],{151:function(e,t,n){e.exports=n(179)},156:function(e,t,n){},172:function(e,t,n){},179:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(126),i=n.n(r),c=(n(156),n(132)),l=n(29),s=n(71),u=n.n(s),p=n(87),d=n(17),f=n(70),m=(n(117),n(40)),h=n(111),g=n(4),y=n(53),v=n(32),b=n(54);function x(){var e=Object(y.a)(["\n  cursor: pointer;\n  flex: 1;\n  padding: 0 5px;\n  border-radius: 2px;\n  color: ",";\n  :hover {\n    background-color: rgba(0, 0, 0, 0.3);\n  }\n"]);return x=function(){return e},e}function j(){var e=Object(y.a)(["\n  background-color: ",";\n  height: 12px;\n  border-radius: 50%;\n  -moz-border-radius: 50%;\n  -webkit-border-radius: 50%;\n  width: 12px;\n  position: absolute;\n  left: 50%;\n  top: ",";\n  transform: ",";\n"]);return j=function(){return e},e}function w(){var e=Object(y.a)(["\n  width: 4px;\n  background-color: ",";\n  align-self: stretch;\n  padding: 0;\n  margin: 0 5px 0 10px;\n  position: relative;\n"]);return w=function(){return e},e}var S=b.a.div(w(),(function(e){return e.isStationPassed?"white":"grey"})),E=b.a.div(j(),(function(e){return e.isStationPassed?"#fff":"grey"}),(function(e){var t=e.isFirstStation,n=e.isLastStation;return t?"0":n?"100%":"50%"}),(function(e){return e.isFirstStation?"translate(-50%,0)":"translate(-50%, -50%)"})),k=b.a.div(x(),(function(e){return e.isNotStation?"grey":"white"})),O=function(e){var t=e.map,n=e.station,o=e.isStationPassed,r=e.isNotStation,i=e.isFirstStation,c=e.isLastStation,l="center",s="5px 0";return i?(l="flex-start",s="0 0 5px 0"):c&&(l="flex-end",s="5px 0 0 0"),a.a.createElement("div",{style:{display:"flex",alignItems:l,justifyContent:"flex-start"}},a.a.createElement("div",{style:{width:"60px",padding:s}},i||r?null:a.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",flexWrap:"nowrap"}},o?null:a.a.createElement("span",{style:{marginRight:"5px",color:Object(v.b)(n.arrivalDelay)}},n.arrivalDelay?"+".concat(Object(m.b)(n.arrivalDelay)):"+0"),a.a.createElement("span",null,Object(m.c)(n.arrivalTime))),c||r?null:a.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",flexWrap:"nowrap"}},o?null:a.a.createElement("span",{style:{marginRight:"5px",color:Object(v.b)(n.arrivalDelay)}},n.departureDelay&&o?"+".concat(Object(m.b)(n.departureDelay)):"+0"),a.a.createElement("span",null,Object(m.c)(n.departureTime)))),a.a.createElement(S,{isStationPassed:o},a.a.createElement(E,{isFirstStation:i,isLastStation:c,isStationPassed:o})),a.a.createElement(k,{isNotStation:r,onClick:function(){t.flyTo({center:n.coordinates,essential:!0})}},n.stationName))};function L(){var e=Object(y.a)(["\n  left: 10px;\n  top: 14px;\n  position: absolute;\n  cursor: pointer;\n  display: inline-block;\n  border-right: 4px solid white;\n  border-bottom: 4px solid white;\n  opacity: 0.4;\n  width: 10px;\n  height: 10px;\n  &:hover {\n    opacity: 1;\n  }\n  &.hideChevron {\n    transform: rotate(-225deg);\n  }\n  &.expandChevron {\n    transform: rotate(-45deg);\n  }\n"]);return L=function(){return e},e}function P(){var e=Object(y.a)(["\n  position: absolute;\n  right: 5px;\n  top: 10px;\n  width: 32px;\n  height: 32px;\n  opacity: 0.4;\n  cursor: pointer;\n  &:hover {\n    opacity: 1;\n  }\n  &:before,\n  &:after {\n    position: absolute;\n    left: 15px;\n    content: ' ';\n    height: 20px;\n    width: 2px;\n    background-color: white;\n  }\n  &:before {\n    transform: rotate(45deg);\n  }\n  &:after {\n    transform: rotate(-45deg);\n  }\n"]);return P=function(){return e},e}function C(){var e=Object(y.a)(["\n  border-radius: 50%;\n  width: 40px;\n  min-width: 40px;\n  height: 40px;\n  border: solid black 2px;\n  display: inline-flex;\n  margin: 10px 15px 10px 0;\n  justify-content: center;\n  align-items: center;\n  font-weight: bold;\n"]);return C=function(){return e},e}function T(){var e=Object(y.a)(["\n  position: absolute;\n  height: 100%;\n  width: ",";\n  transform: ",";\n  padding: ",";\n  overflow: auto;\n  overflow-x: hidden;\n  top: auto;\n  right: auto;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.6);\n  z-index: 1000;\n  color: white;\n  transition: width 0.2s ease-in-out;\n"]);return T=function(){return e},e}function I(){var e=Object(y.a)(["\n  opacity: 0;\n  animation-name: ",";\n  animation-timing-function: ease;\n  animation-fill-mode: forwards;\n  animation-delay: 0.2s;\n  animation-duration: 1s;\n"]);return I=function(){return e},e}function R(){var e=Object(y.a)(["\nfrom{\n  opacity: 0;\n}\nto{\n  opacity: 1;\n}\n"]);return R=function(){return e},e}var N=Object(b.b)(R()),_=b.a.div(I(),N),D=b.a.div(T(),(function(e){return e.modalWidth}),(function(e){return e.translateStyle}),(function(e){return"0"!==e.modalWidth?"30px 20px 20px 20px":""})),F=b.a.span(C()),G=b.a.span(P()),z=b.a.div(L()),W=function(e){return!e.arrivalTime&&!e.departureTime},M=function(e,t){var n=e.departureTime||e.arrivalTime||0,o=e.departureDelay||e.arrivalDelay||0;return!W(e)&&n+o<=t},Z=function(e){var t,n=e.map,r=e.vehicle,i=e.trackerLayer,c=e.setSelectedVehicle,l=Object(o.useState)(!1),s=Object(d.a)(l,2),u=s[0],p=s[1];t=r?u?"40px":"350px":"0";return a.a.createElement(D,{modalWidth:t},"0"!==t?a.a.createElement(z,{className:u?"expandChevron":"hideChevron",onClick:function(){return p((function(e){return!e}))}}):null,"350px"===t?a.a.createElement(_,null,a.a.createElement(G,{onClick:function(){c(null),i.selectedVehicleId=null,i.map.getSource("routeLines")&&(i.map.removeLayer("routeLines"),i.map.removeSource("routeLines")),i.map.getSource("routePoints")&&(i.map.removeLayer("routePoints"),i.map.removeSource("routePoints"))}}),a.a.createElement("div",{style:{display:"flex"}},a.a.createElement(F,{style:{backgroundColor:(null===r||void 0===r?void 0:r.backgroundColor)?null===r||void 0===r?void 0:r.backgroundColor:"white",color:(null===r||void 0===r?void 0:r.color)?null===r||void 0===r?void 0:r.color:"black"}},r.shortName),a.a.createElement("div",null,a.a.createElement("div",{style:{fontWeight:"bold"}},r.longName),a.a.createElement("div",{style:{fontSize:"14px"}},a.a.createElement("div",null,r.shortName),a.a.createElement("div",null,v.h[r.vehicleType]),a.a.createElement("div",null,"Operator: ",r.operator)))),a.a.createElement("div",{style:{marginTop:"20px"}},r.stations.map((function(e,t){return a.a.createElement(O,{map:n,key:e.stationId,station:e,isStationPassed:M(e,i.currTime),isNotStation:W(e),isFirstStation:0===t,isLastStation:t===r.stations.length-1})})))):null)},A=(n(172),function(){var e=Object(o.useState)(null),t=Object(d.a)(e,2),n=t[0],r=t[1],i=Object(o.useState)(null),c=Object(d.a)(i,2),l=c[0],s=c[1],y=Object(o.useState)(null),v=Object(d.a)(y,2),b=v[0],x=v[1],j=Object(o.useRef)(b),w=function(e){j.current=e,x(e)};return Object(o.useEffect)((function(){var e;(function(){var t=Object(p.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://developer.geops.io/publickey").then((function(e){return e.json()})).then((function(t){e=t.key}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()().then((function(){var t=new f.Map({container:"map",style:"https://maps.geops.io/styles/travic/style.json?key=".concat(e),center:[21,52.25],zoom:8});t.addControl(new f.NavigationControl({showCompass:!1}),"bottom-right"),t.dragRotate.disable(),t.touchZoomRotate.disableRotation();var n=new h.a({url:"https://api.geops.io/tracker/v1",apiKey:e});n.highlightTrajectory=function(){n.api.fetchTrajectoryById(n.getParams({id:n.journeyId,time:Object(m.d)(n.currTime)})).then((function(e){var t=e.p,o=e.c,a=[];t.forEach((function(e){e.forEach((function(e){a.push(Object(g.n)([e.x,e.y],"EPSG:3857","EPSG:4326"))}))})),n.map.getSource("routeLines")&&(n.map.removeLayer("routeLines"),n.map.removeSource("routeLines")),n.map.getSource("routePoints")&&(n.map.removeLayer("routePoints"),n.map.removeSource("routePoints"));var r=n.stationsCoords.map((function(e){return Object(g.n)([e[0],e[1]],"EPSG:3857","EPSG:4326")}));r&&(n.map.addSource("routePoints",{type:"geojson",data:{type:"Feature",properties:{},geometry:{type:"MultiPoint",coordinates:r}}}),n.map.addLayer({id:"routePoints",type:"circle",source:"routePoints",paint:{"circle-radius":6,"circle-color":o?"#"+o:"#888"}},n.key)),a&&(n.map.addSource("routeLines",{type:"geojson",data:{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:a}}}),n.map.addLayer({id:"routeLines",type:"line",source:"routeLines",layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":o?"#"+o:"#888","line-width":5}},"routePoints"))})).catch((function(){}))},n.onClick((function(e){var t;e?(null===j||void 0===j||null===(t=j.current)||void 0===t?void 0:t.id)!==(null===e||void 0===e?void 0:e.id)&&(w(e),n.highlightTrajectory()):(w(null),n.map.getSource("routeLines")&&(n.map.removeLayer("routeLines"),n.map.removeSource("routeLines")),n.map.getSource("routePoints")&&(n.map.removeLayer("routePoints"),n.map.removeSource("routePoints")))})),r(n),t.on("load",Object(p.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.init(t);case 1:case"end":return e.stop()}}),e)})))),s(t)}))}),[]),a.a.createElement("div",null,a.a.createElement("div",{style:{display:"flex",height:"100vh",width:"100vw",position:"relative"}},a.a.createElement(Z,{map:l,trackerLayer:n,vehicle:b,setSelectedVehicle:w}),a.a.createElement("div",{id:"map",style:{flex:1},tabIndex:0})),a.a.createElement("div",{style:{position:"absolute",top:"10px",right:"10px",display:"block",width:"300px",zIndex:1e3}},a.a.createElement("a",{href:"./assets/system_transportowy.pdf",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("img",{style:{height:"66px"},src:"./assets/logo2.png",alt:""})),a.a.createElement("a",{href:"https://www.gispartner.pl/",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("img",{style:{height:"50px"},src:"./assets/logo1.png",alt:""}))))}),J=n(94),U=(n(175),n(130)),V=n.n(U);function B(){var e=Object(y.a)(["\n  background-color: ",";\n  border: 1px solid black;\n  border-radius: 2px;\n  outline: none;\n  padding: 5px 10px;\n  margin: 0px 5px 0px 0px;\n  cursor: pointer;\n"]);return B=function(){return e},e}var H="http://localhost:8080/onebusaway-api-webapp/api/where/",K="TEST",q=b.a.button(B(),(function(e){return e.isSelected?"rgba(0,0,0,0.4)":"rgba(0,0,0,0.1)"})),$=["trips-for-location","routes-for-location","stops-for-location","block","shape","stop","arrivals-and-departures-for-stop","schedule-for-stop","shape-ids-for-agency"],Q=function(){var e=Object(o.useState)(null),t=Object(d.a)(e,2),n=t[0],r=t[1],i=Object(o.useState)(null),c=Object(d.a)(i,2),l=c[0],s=c[1],u=Object(o.useState)(null),p=Object(d.a)(u,2),f=p[0],m=p[1],h=Object(o.useState)(null),g=Object(d.a)(h,2),y=(g[0],g[1]),v=function(e){var t;t=e.data.list?JSON.stringify(e.data.list,null,"    "):JSON.stringify(e.data.entry,null,"    ");var n=a.a.createElement(a.a.Fragment,null,a.a.createElement("pre",{style:{marginTop:"0px"},dangerouslySetInnerHTML:{__html:t}})),o=e.data.references,r=a.a.createElement(J.d,null,a.a.createElement(J.b,null,Object.keys(o).map((function(e){return a.a.createElement(J.a,{key:e},e,a.a.createElement("span",{style:{display:"inline-block",backgroundColor:o[e].length?"green":"grey",width:"10px",height:"10px",borderRadius:"50%",marginLeft:"5px"}}))}))),Object.keys(o).map((function(e){return a.a.createElement(J.c,{key:e},a.a.createElement("pre",{style:{marginTop:"0px"},dangerouslySetInnerHTML:{__html:JSON.stringify(o[e],null,"    ")}}))})));s(n),m(r)},b=function(){y(null),s(null),m(null)},x=function(){r("block"),b(),fetch("".concat("").concat(H,"block/1_5908633").concat(".json","?key=").concat(K)).then((function(e){return e.json()})).then((function(e){console.log("block",e),v(e)}))},j=function(){r("shape"),b(),fetch("".concat("").concat(H,"shape/1_11048006").concat(".json","?key=").concat(K)).then((function(e){return e.json()})).then((function(e){console.log("shape",e),console.log("decoded points",V.a.decode(e.data.entry.points).map((function(e){return e.reverse()}))),v(e)}))},w=function(){r("stop"),b(),fetch("".concat("").concat(H,"stop/1_29247").concat(".json","?key=").concat(K)).then((function(e){return e.json()})).then((function(e){console.log("stop",e),v(e)}))},S=function(){r("schedule-for-stop"),b(),fetch("".concat("").concat(H,"schedule-for-stop/1_29247").concat(".json","?key=").concat(K)).then((function(e){return e.json()})).then((function(e){console.log("schedule-for-stop",e),v(e)}))},E=function(){r("shape-ids-for-agency"),b(),fetch("".concat("").concat(H,"shape-ids-for-agency/1").concat(".json","?key=").concat(K)).then((function(e){return e.json()})).then((function(e){console.log("shape-ids-for-agency",e),v(e)}))},k=function(){r("routes-for-location"),b(),fetch("".concat("").concat(H,"routes-for-location").concat(".json","?key=").concat(K,"&lat=51&lon=17&latSpan=0.16&lonSpan=0.16")).then((function(e){return e.json()})).then((function(e){console.log("routes-for-location",e),v(e)}))},O=function(){r("trips-for-location"),b(),y(a.a.createElement("ul",null,a.a.createElement("li",null,"block ","->"," references: trips: blockId"),a.a.createElement("li",null,"shape ","->"," references: trips: shapeId"))),fetch("".concat("").concat(H,"trips-for-location").concat(".json","?key=").concat(K,"&lat=51&lon=17&latSpan=0.16&lonSpan=0.16&includeStatus=true&includeSchedule=false")).then((function(e){return e.json()})).then((function(e){console.log("trips-for-location",e),v(e)}))},L=function(){r("stops-for-location"),b(),fetch("".concat("").concat(H,"stops-for-location").concat(".json","?key=").concat(K,"&lat=51&lon=17&latSpan=0.16&lonSpan=0.16&includeSchedule=true")).then((function(e){return e.json()})).then((function(e){console.log("stops-for-location",e),v(e)}))},P=function(){r("arrivals-and-departures-for-stop"),b(),fetch("".concat("").concat(H,"arrivals-and-departures-for-stop/1_29247").concat(".json","?key=").concat(K)).then((function(e){return e.json()})).then((function(e){console.log("arrivals-and-departures-for-stop",e),v(e)}))},C=function(e){switch(e){case"trips-for-location":return O;case"routes-for-location":return k;case"stops-for-location":return L;case"stop":return w;case"block":return x;case"shape":return j;case"arrivals-and-departures-for-stop":return P;case"schedule-for-stop":return S;case"shape-ids-for-agency":return E}};return a.a.createElement("div",{style:{padding:"10px 5px"}},$.map((function(e){return a.a.createElement(q,{key:e,isSelected:n===e,onClick:C(e)},e)})),a.a.createElement("div",{style:{display:"flex"}},a.a.createElement("div",{style:{width:"50%"}},a.a.createElement("strong",null,"Response:"),l),a.a.createElement("div",{style:{width:"50%"}},a.a.createElement("strong",null,"References"),":",f)))},X=n(12),Y=n(13),ee=n(19),te=n(20),ne=n(95),oe=n(78),ae=window.globalConfig.apiKey,re=window.globalConfig.apiResponseFormat,ie=window.globalConfig.apiUrl,ce=function(e){Object(te.a)(n,e);var t=Object(ee.a)(n);function n(){var e;Object(X.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).fetchTrajectories=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.date,o=e.btime,a=e.etime,r=e.bbox,i=n.slice(0,4)+"-"+n.slice(4,6)+"-"+n.slice(6,8),c=Date.parse(i+" "+o+"Z"),l=Date.parse(i+" "+a+"Z"),s=r.split(","),u=[s[0],s[1]],p=[s[2],s[3]],d=Object(g.n)([u[0],u[1]],"EPSG:3857","EPSG:4326"),f=Object(g.n)([p[0],p[1]],"EPSG:3857","EPSG:4326"),m=d[1],h=d[0],y=f[1],v=f[0];return fetch("".concat(ie,"trajectories").concat(re,"?key=").concat(ae,"&startTime=").concat(c,"&endTime=").concat(l,"&latFrom=").concat(m,"&lonFrom=").concat(h,"&latTo=").concat(y,"&lonTo=").concat(v),{signal:t.signal}).then((function(e){return e.json()})).then((function(e){var t=e.data;return t.forEach((function(e){e.geometry=new oe.a(e.geometry.map((function(e){return Object(g.n)([e[1],e[0]],"EPSG:4326","EPSG:3857")}))),e.type=2})),t})).catch((function(e){console.log(e)}))},e}return Object(Y.a)(n,[{key:"fetchTrajectoryStations",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return fetch("".concat(ie,"trip-details/").concat(e.id).concat(re,"?key=").concat(ae,"&includeStatus=true&includeSchedule=true"),{signal:t.signal}).then((function(e){return e.json()})).then((function(e){var t=e.data.entry,n=t.tripId,o=t.schedule.stopTimes,a=t.serviceDate,r=e.data.references,i=r.agencies,c=r.trips,l=r.routes,s=r.stops,u=c.find((function(e){var t=e.id;return n==t})),p=u.routeId,d=u.tripHeadsign,f=l.find((function(e){var t=e.id;return p==t})),m=f.agencyId,h=f.color,g=f.textColor,y=f.type,v=i.find((function(e){var t=e.id;return m==t})),b=v.url,x=v.timezone,j=v.name,w=[];return o.forEach((function(e){var t=e.arrivalTime,n=e.departureTime,o=e.stopId,r=s.find((function(e){return e.id==o})),i=r.lat,c=r.lon,l=r.name,u=r.wheelchairBoarding;w.push({arrivalDelay:void 0,arrivalTime:a+1e3*t,cancelled:!1,coordinates:[c,i],departureDelay:void 0,departureTime:a+1e3*n,noDropOff:!0,noPickUp:!0,stationId:o,stationName:l,wheelchairAccessible:u})})),{bicyclesAllowed:!0,backgroundColor:h,color:g,destination:d,feedsId:287,id:n,longName:d,operatingInformations:{},operator:j,operatorTimeZone:x,operatorUrl:b,realTime:0,routeIdentifier:p,shortName:f.shortName,stations:w,vehicleType:y,wheelchairAccessible:!0}})).catch((function(t){console.log(t),console.log("".concat(ie,"trip-details/").concat(e.id).concat(re,"?key=").concat(ae,"&includeStatus=true&includeSchedule=true"))}))}}]),n}(ne.a),le=window.globalConfig.apiKey,se=window.globalConfig.apiResponseFormat,ue=window.globalConfig.apiUrl,pe=window.globalConfig.interval,de=function(){var e=Object(o.useState)(null),t=Object(d.a)(e,2),n=t[0],r=t[1],i=Object(o.useState)(null),c=Object(d.a)(i,2),l=c[0],s=c[1],u=Object(o.useState)(null),p=Object(d.a)(u,2),m=p[0],y=p[1],v=Object(o.useRef)(m),b=function(e){v.current=e,y(e)};return Object(o.useEffect)((function(){var e=new f.Map({container:"map",style:"https://api.maptiler.com/maps/streets/style.json?key=fxrAn6nevCCpCCxhndyU",center:[20,50],zoom:8});e.addControl(new f.NavigationControl({showCompass:!1}),"bottom-right"),e.dragRotate.disable(),e.touchZoomRotate.disableRotation();var t=new h.a({api:new ce});t.requestIntervalSeconds=pe,t.highlightTrajectory=function(e){e&&fetch("".concat(ue,"trip-shape/").concat(t.journeyId).concat(se,"?key=").concat(le)).then((function(e){return e.json()})).then((function(n){var o=n.data;t.map.getSource("routeLines")&&(t.map.removeLayer("routeLines"),t.map.removeSource("routeLines")),t.map.getSource("routePoints")&&(t.map.removeLayer("routePoints"),t.map.removeSource("routePoints"));var a=t.stationsCoords.map((function(e){return Object(g.n)([e[0],e[1]],"EPSG:3857","EPSG:4326")}));a&&(t.map.addSource("routePoints",{type:"geojson",data:{type:"Feature",properties:{},geometry:{type:"MultiPoint",coordinates:a}}}),t.map.addLayer({id:"routePoints",type:"circle",source:"routePoints",paint:{"circle-radius":6,"circle-color":e.color?"#"+e.color:"#888"}},t.key)),o&&(t.map.addSource("routeLines",{type:"geojson",data:{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:o}}}),t.map.addLayer({id:"routeLines",type:"line",source:"routeLines",layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":e.color?"#"+e.color:"#888","line-width":5}},"routePoints"))})).catch((function(e){return console.log(e)}))},t.onClick((function(e){var n;e?(null===v||void 0===v||null===(n=v.current)||void 0===n?void 0:n.id)!==(null===e||void 0===e?void 0:e.id)&&(b(e),t.highlightTrajectory(e)):(b(null),t.map.getSource("routeLines")&&(t.map.removeLayer("routeLines"),t.map.removeSource("routeLines")),t.map.getSource("routePoints")&&(t.map.removeLayer("routePoints"),t.map.removeSource("routePoints")))})),e.dragRotate.disable(),e.touchZoomRotate.disableRotation(),r(t),e.on("load",(function(){t.init(e)})),s(e)}),[]),a.a.createElement("div",null,a.a.createElement("div",{style:{display:"flex",height:"100vh",width:"100vw",position:"relative"}},a.a.createElement(Z,{map:l,trackerLayer:n,vehicle:m,setSelectedVehicle:b}),a.a.createElement("div",{id:"map",style:{flex:1},tabIndex:0})),a.a.createElement("div",{style:{position:"absolute",top:"10px",right:"10px",display:"block",width:"300px",zIndex:1e3}},a.a.createElement("a",{href:"./assets/system_transportowy.pdf",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("img",{style:{height:"66px"},src:"./assets/logo2.png",alt:""})),a.a.createElement("a",{href:"https://www.gispartner.pl/",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("img",{style:{height:"50px"},src:"./assets/logo1.png",alt:""}))))},fe=n(115),me=(n(176),n(112)),he=window.globalConfig.interval,ge=function(){var e=Object(o.useState)(null),t=Object(d.a)(e,2),n=t[0],r=(t[1],Object(o.useState)(null)),i=Object(d.a)(r,2),c=i[0],l=i[1],s=Object(o.useState)(null),f=Object(d.a)(s,2),m=f[0],h=f[1],y=Object(o.useRef)(m);return Object(o.useEffect)((function(){var e;(function(){var t=Object(p.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://developer.geops.io/publickey").then((function(e){return e.json()})).then((function(t){e=t.key}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()().then((function(){var t=new fe.a({target:"map",view:new me.a({center:Object(g.n)([17,51.06],"EPSG:4326","EPSG:3857"),zoom:13})}),n=new fe.c({api:new ce});n.requestIntervalSeconds=he;var o=new fe.b({url:"https://maps.geops.io/styles/travic/style.json?key=".concat(e)});t.addLayer(o),t.addLayer(n),l(t)}))}),[]),a.a.createElement("div",null,a.a.createElement("div",{style:{display:"flex",height:"100vh",width:"100vw",position:"relative"}},a.a.createElement(Z,{map:c,trackerLayer:n,vehicle:m,setSelectedVehicle:function(e){y.current=e,h(e)}}),a.a.createElement("div",{id:"map",style:{flex:1},tabIndex:0})),a.a.createElement("div",{style:{position:"absolute",top:"10px",right:"10px",display:"block",width:"300px",zIndex:1e3}},a.a.createElement("a",{href:"./assets/system_transportowy.pdf",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("img",{style:{height:"66px"},src:"./assets/logo2.png",alt:""})),a.a.createElement("a",{href:"https://www.gispartner.pl/",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("img",{style:{height:"50px"},src:"./assets/logo1.png",alt:""}))))},ye=function(){return a.a.createElement(c.a,null,a.a.createElement(l.c,null,a.a.createElement(l.a,{exact:!0,path:"/",component:de}),a.a.createElement(l.a,{exact:!0,path:"/ol",component:ge}),a.a.createElement(l.a,{exact:!0,path:"/docs",component:Q}),a.a.createElement(l.a,{exact:!0,path:"/dev",component:A})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(ye,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[151,1,2]]]);
//# sourceMappingURL=main.b1945d0b.chunk.js.map