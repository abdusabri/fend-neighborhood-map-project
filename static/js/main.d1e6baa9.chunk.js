(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e){e.exports=[{id:1,name:"Reichstag",latitude:52.518503,longitude:13.376062},{id:2,name:"Forst Grunewald",latitude:52.484452858289536,longitude:13.236808776855469},{id:3,name:"Tempelhofer Feld",latitude:52.472952199914666,longitude:13.40383529663086},{id:4,name:"Olympiastadion",latitude:52.514849775310154,longitude:13.23976993560791},{id:5,name:"Classic Remise Berlin",latitude:52.53026879229302,longitude:13.318734169006348},{id:6,name:"Berlin Hauptbahnhof",latitude:52.52514568279177,longitude:13.36933152981362},{id:7,name:"Botanischer Garten",latitude:52.45454489329064,longitude:13.304400444030762},{id:8,name:"Tiergarten",latitude:52.51462778550934,longitude:13.357207775115967},{id:9,name:"Dussmann das KulturKaufhaus",latitude:52.51839819531867,longitude:13.388788104057312}]},58:function(e,t,n){e.exports=n(87)},65:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),i=n(32),r=n.n(i),c=n(2),s=n(3),l=n(6),d=n(4),u=n(5),p=(n(63),n(65),function(){return o.a.createElement("header",null,o.a.createElement("div",{className:"navbar navbar-dark bg-dark",style:{zIndex:3}},o.a.createElement("h1",{className:"navbar-brand mb-0 h1"},"Neighborhood Map")))}),h=n(33),m=n(12),f=n(57),g=n(20),v=(n(75),n(53)),L=n(29),b=n.n(L),E=n(54),y=n(79)({clientID:"M2OA3VPPXF4NL4433X1MJI5FJZNB1KARIN4IITNY0TSRVHA0",clientSecret:"LJSSKQXYSE3CKHAX0OJ1LUQM13GUBFYRM1JZGBX5LQXFCUTF"}),w=function(e){return new Promise(function(t,n){y.venues.getVenues(function(e){return{ll:"".concat(e.longitude,",").concat(e.latitude),intent:"global",query:e.name}}(e)).then(function(a){a&&a.meta&&200===a.meta.code&&a.response&&a.response.venues&&Array.isArray(a.response.venues)?function(e,t,n,a){var o=t.find(function(t){return t.name===e.name});y.venues.getVenue({venue_id:o.id}).then(function(e){var t;e&&e.meta&&200===e.meta.code&&e.response&&e.response.venue?n({url:(t=e.response.venue).shortUrl&&t.shortUrl.length>0?t.shortUrl:"https://foursquare.com/",photo:function(e){var t="https://adcdl6asn.cloudimg.io/width/200/x/";if(e.photos&&e.photos.groups&&Array.isArray(e.photos.groups)&&e.photos.groups.length>0){var n=e.photos.groups,a=n.length>1?n[1].items:n[0].items;Array.isArray(a)&&a.length>0&&(t="".concat(a[0].prefix,"width220").concat(a[0].suffix))}return t}(t)}):a()}).catch(function(e){return a(e)})}(e,a.response.venues,t,n):n()}).catch(function(e){return n(e)})})};var S=function(e){return o.a.createElement("div",{className:e.isMain?"loader-container":"content-loader-container"},o.a.createElement("div",{className:"loader"}))},k=function(){return o.a.createElement("div",{className:"content-loader-container container-error"},o.a.createElement(m.a,{className:"error-icon text-warning"}),o.a.createElement("div",{className:"alert alert-warning alert-no-border text-center",role:"alert"},"Oops! ",o.a.createElement("br",null)," Something is not right :("))},O=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={isLoading:!0,hasError:!1,locationInfo:{}},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getLocationInfo(this.props.location)}},{key:"componentDidUpdate",value:function(e){e.location.id!==this.props.location.id&&(this.setState({locationInfo:{},isLoading:!0,hasError:!1}),this.getLocationInfo(this.props.location))}},{key:"getLocationInfo",value:function(){var e=Object(E.a)(b.a.mark(function e(t){var n=this;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:w(t).then(function(e){return n.setState({locationInfo:e,isLoading:!1})}).catch(function(){return n.setState({locationInfo:{},isLoading:!1,hasError:!0})});case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return o.a.createElement("section",{className:"location-info"},o.a.createElement("h3",{className:"h5 text-primary"},this.props.location.name),o.a.createElement("hr",null),this.state.isLoading&&o.a.createElement(S,{isMain:!1}),!this.state.isLoading&&this.state.hasError&&o.a.createElement(k,null),!this.state.isLoading&&!this.state.hasError&&o.a.createElement("div",null,o.a.createElement("img",{alt:this.state.locationInfo.name,src:this.state.locationInfo.photo}),o.a.createElement("div",null,o.a.createElement("a",{href:this.state.locationInfo.url,target:"_new"}," View on Foursquare "))))}}]),t}(a.Component),M=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={viewport:{latitude:52.492,longitude:13.344,zoom:11.5,bearing:0,pitch:0,width:600,height:600},hasError:!1,isMapLoaded:!1},n.resize=function(){var e=document.getElementById("map");n.setState({viewport:Object(f.a)({},n.state.viewport,{width:e.offsetWidth,height:e.offsetHeight})})},n.handleOnError=function(){n.setState({hasError:!0,isMapLoaded:!0}),n.props.onMapLoaded()},n.handleMapLoaded=function(){n.setState({isMapLoaded:!0}),n.props.onMapLoaded()},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;new v.a(this.resize).observe(document.getElementById("map")),document.getElementById("map").firstElementChild.tabIndex=-1,setTimeout(function(){e.state.isMapLoaded||(e.setState({isMapLoaded:!0,hasError:!0}),e.props.onMapLoaded())},15e3)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:"map",role:"application","aria-label":"Map with locations",style:{height:"100%",width:"100%"}},this.state.hasError&&o.a.createElement(k,null),!this.state.hasError&&o.a.createElement(g.d,Object.assign({mapboxApiAccessToken:"pk.eyJ1IjoiYWJkdXNhYnJpIiwiYSI6ImNqbmg0dG9vMzA5YnMzcHRsc3NyYW9pZ3MifQ.GznJS1gglPuQoa-3RGeGeA",mapStyle:"mapbox://styles/mapbox/streets-v10??optimize=true"},this.state.viewport,{onViewportChange:function(t){return e.setState({viewport:t})},onLoad:this.handleMapLoaded,onError:this.handleOnError,touchRotate:!0,getCursor:function(e){return e.isDragging?"move":"default"}}),this.props.locations.map(function(t){return o.a.createElement(g.a,{key:t.id,longitude:t.longitude,latitude:t.latitude},o.a.createElement("span",null,o.a.createElement(m.b,{className:e.props.selectedLocation&&e.props.selectedLocation.id===t.id?"map-marker map-marker--selected":"map-marker",onClick:function(){return e.props.onLocationSelected(t)}})))}),this.props.selectedLocation&&o.a.createElement(g.c,{tipSize:10,anchor:"top",longitude:this.props.selectedLocation.longitude,latitude:this.props.selectedLocation.latitude,onClose:function(){return e.props.onLocationSelected(null)},closeOnClick:!1},o.a.createElement(O,{location:this.props.selectedLocation})),o.a.createElement("div",{className:"nav map-nav-control"},o.a.createElement(g.b,{onViewportChange:function(t){return e.setState({viewport:t})}}))))}}]),t}(a.Component),x=n(55),I=n.n(x),C=n(56),N=n.n(C),j=n(30),A=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={filterText:""},n.handleTextChange=function(e){n.setState({filterText:e.target.value}),n.filterLocationsDebounced(e.target.value)},n.filterLocationsDebounced=I()(n.filterLocations,200),n.handleLocationClick=function(e){n.props.onLocationSelected(n.props.locations.find(function(t){return t.id===e.target.value}))},n.handleLocationKeyUp=function(e){32!==e.keyCode&&13!==e.keyCode||n.props.onLocationSelected(n.props.locations.find(function(t){return t.id===e.target.value}))},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.onLocationsFiltered(j)}},{key:"filterLocations",value:function(e){var t=this;if(0===e.length)this.props.onLocationsFiltered(j);else{var n=new RegExp(N()(e),"i"),a=this.props.locations.filter(function(e){return n.test(e.name)});this.props.selectedLocation&&-1===a.findIndex(function(e){return e.id===t.props.selectedLocation.id})&&this.props.onLocationSelected(null),this.props.onLocationsFiltered(a)}}},{key:"componentWillUnmount",value:function(){this.filterLocationsDebounced.cancel()}},{key:"render",value:function(){var e=this;return o.a.createElement("article",{className:"locations-list"},o.a.createElement("input",{className:"form-control form-control-lg",type:"text",placeholder:"Filter locations","aria-label":"Filter locations",onChange:this.handleTextChange,value:this.state.filterText}),o.a.createElement("ul",{className:"list-group list-group-flush"},this.props.locations.map(function(t){return o.a.createElement("li",{key:t.id,value:t.id,className:e.props.selectedLocation&&e.props.selectedLocation.id===t.id?"list-group-item list-group-item-action active":"list-group-item list-group-item-action",tabIndex:"0",onClick:e.handleLocationClick,onKeyUp:e.handleLocationKeyUp},t.name)})))}}]),t}(a.Component),R=n(90),D=n(91),U=n(92),B=n(89),F=window.matchMedia("(min-width: 650px)"),T={sidebar:{top:56,zIndex:3},content:{top:56},overlay:{top:56}},J=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={sidebarDocked:F.matches,sidebarOpen:!1,locations:[],selectedLocation:null,isMapLoading:!0,initialRender:!0},n.setSelectedLocationBasedOnPath=function(e){var t=e.pathname.substr(1);if(t&&t.length>0){var a=parseInt(t),o=n.state.locations.find(function(e){return e.id===a});o?n.handleLocationSelected(o,!1):n.handleLocationSelected(null,!0)}else n.handleLocationSelected(null,!1)},n.mediaQueryChanged=function(){n.setState({sidebarDocked:F.matches,sidebarOpen:!1})},n.onSetSidebarOpen=function(e){n.setState({sidebarOpen:e})},n.toggleOpen=function(e){n.setState({sidebarOpen:!n.state.sidebarOpen}),e&&e.preventDefault()},n.handleLocationSelected=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];JSON.stringify(e)!==JSON.stringify(n.state.selectedLocation)&&(null!==n.state.selectedLocation&&n.setState({selectedLocation:null}),n.setState({selectedLocation:e}),t&&n.routeRef.current.context.router.history.push(e?"/"+e.id:"/"))},n.routeRef=o.a.createRef(),n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;F.addListener(this.mediaQueryChanged),this.routeRef.current&&this.routeRef.current.context.router.history.listen(function(t,n){"POP"===n&&e.setSelectedLocationBasedOnPath(t)})}},{key:"componentDidUpdate",value:function(){!0===this.state.initialRender&&(this.setState({initialRender:!1}),this.setSelectedLocationBasedOnPath(this.routeRef.current.context.router.history.location))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(p,null),this.state.isMapLoading&&o.a.createElement(S,{isMain:!0}),!this.state.sidebarDocked&&!this.state.isMapLoading&&o.a.createElement("button",{type:"button",className:"btn btn-link menu-link",onClick:this.toggleOpen},o.a.createElement(m.c,null)),o.a.createElement("main",null,o.a.createElement(R.a,null,o.a.createElement(D.a,null,o.a.createElement(U.a,{ref:this.routeRef,exact:!0,path:"(/[1-9]?)",render:function(){return o.a.createElement(h.a,{open:e.state.sidebarOpen,docked:e.state.sidebarDocked,onSetOpen:e.onSetSidebarOpen,styles:T,sidebar:o.a.createElement(A,{locations:e.state.locations,onLocationsFiltered:function(t){return e.setState({locations:t})},onLocationSelected:e.handleLocationSelected,selectedLocation:e.state.selectedLocation})},o.a.createElement(M,{locations:e.state.locations,selectedLocation:e.state.selectedLocation,onLocationSelected:e.handleLocationSelected,onMapLoaded:function(){return e.setState({isMapLoading:!1})}}))}}),o.a.createElement(B.a,{from:"*",to:"/"})))))}}]),t}(a.Component),P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(J,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/fend-neighborhood-map",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/fend-neighborhood-map","/service-worker.js");P?(function(e,t){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):W(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):W(t,e)})}}()}},[[58,2,1]]]);
//# sourceMappingURL=main.d1e6baa9.chunk.js.map