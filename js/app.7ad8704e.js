(function(){"use strict";var e={2452:function(e,n,t){var o=t(9242),r=t(3396),u=t(4870),a=t(3153),i=t.n(a),c={__name:"LeafLetMap",setup(e){const n=(0,u.iH)(""),t=(0,u.iH)(""),o=(0,u.iH)(!1),a=(0,u.iH)(null),c=[{houseName:"BUAGSONG House sample 1",coord:[10.250984,123.939499]},{houseName:"ALEGRIA House sample 2",coord:[10.257239,123.959788]},{houseName:"BANG BANG House sample 3",coord:[10.259351,123.942876]},{houseName:"DAPITAN House sample 4",coord:[10.266107,123.949229]},{houseName:"GABI House sample 5",coord:[10.263067,123.962449]}];function l(){const e=i().map(a.value).setView([n.value,t.value],13);i().tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(e),c.forEach((n=>{const t=i().marker([n.coord[0],n.coord[1]],{icon:s}).addTo(e);t.bindPopup(`<b> Hello from ${n.houseName}! </b> <br> I'm a popup!`),e.on("click",f)}))}function f(e){alert("You clicked the map at "+e.latlng)}(0,r.bv)((async()=>{navigator.geolocation.getCurrentPosition((e=>{console.log(e),n.value=e.coords.latitude,t.value=e.coords.longitude,o.value=!0})),(0,r.YP)(o,(()=>{l()}))}));var s=i().icon({iconUrl:"https://leafletjs.com/examples/custom-icons/leaf-green.png",shadowUrl:"https://leafletjs.com/examples/custom-icons/leaf-shadow.png",iconSize:[38,95],shadowSize:[50,64],iconAnchor:[22,94],shadowAnchor:[4,62],popupAnchor:[-3,-76]});return(e,n)=>((0,r.wg)(),(0,r.iD)("div",{class:"leaflet-container",ref_key:"mapContainer",ref:a},null,512))}},l=t(89);const f=(0,l.Z)(c,[["__scopeId","data-v-2f373531"]]);var s=f,p=t(7718),d=t(4615),m={__name:"App",setup(e){return(e,n)=>{const t=(0,r.up)("HelloWorld");return(0,r.wg)(),(0,r.j4)(p.q,null,{default:(0,r.w5)((()=>[(0,r.Wm)(d.O,null,{default:(0,r.w5)((()=>[(0,r.Wm)(t),(0,r.Wm)(s)])),_:1})])),_:1})}}};const v=m;var h=v,b=(t(9773),t(2642)),g=(0,b.Rd)();async function y(){const e=await t.e(461).then(t.t.bind(t,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}y(),(0,o.ri)(h).use(g).mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var u=n[o]={exports:{}};return e[o].call(u.exports,u,u.exports,t),u.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,u){if(!o){var a=1/0;for(f=0;f<e.length;f++){o=e[f][0],r=e[f][1],u=e[f][2];for(var i=!0,c=0;c<o.length;c++)(!1&u||a>=u)&&Object.keys(t.O).every((function(e){return t.O[e](o[c])}))?o.splice(c--,1):(i=!1,u<a&&(a=u));if(i){e.splice(f--,1);var l=r();void 0!==l&&(n=l)}}return n}u=u||0;for(var f=e.length;f>0&&e[f-1][2]>u;f--)e[f]=e[f-1];e[f]=[o,r,u]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){var e,n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};t.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"===typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"===typeof o.then)return o}var u=Object.create(null);t.r(u);var a={};e=e||[null,n({}),n([]),n(n)];for(var i=2&r&&o;"object"==typeof i&&!~e.indexOf(i);i=n(i))Object.getOwnPropertyNames(i).forEach((function(e){a[e]=function(){return o[e]}}));return a["default"]=function(){return o},t.d(u,a),u}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/webfontloader.067f4850.js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="map_api_sample:";t.l=function(o,r,u,a){if(e[o])e[o].push(r);else{var i,c;if(void 0!==u)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var s=l[f];if(s.getAttribute("src")==o||s.getAttribute("data-webpack")==n+u){i=s;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,t.nc&&i.setAttribute("nonce",t.nc),i.setAttribute("data-webpack",n+u),i.src=o),e[o]=[r];var p=function(n,t){i.onerror=i.onload=null,clearTimeout(d);var r=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(t)})),n)return n(t)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var u=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=u);var a=t.p+t.u(n),i=new Error,c=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var u=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;i.message="Loading chunk "+n+" failed.\n("+u+": "+a+")",i.name="ChunkLoadError",i.type=u,i.request=a,r[1](i)}};t.l(a,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,u,a=o[0],i=o[1],c=o[2],l=0;if(a.some((function(n){return 0!==e[n]}))){for(r in i)t.o(i,r)&&(t.m[r]=i[r]);if(c)var f=c(t)}for(n&&n(o);l<a.length;l++)u=a[l],t.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return t.O(f)},o=self["webpackChunkmap_api_sample"]=self["webpackChunkmap_api_sample"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(2452)}));o=t.O(o)})();
//# sourceMappingURL=app.7ad8704e.js.map