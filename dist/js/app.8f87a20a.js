(function(t){function e(e){for(var o,n,s=e[0],u=e[1],l=e[2],p=0,h=[];p<s.length;p++)n=s[p],r[n]&&h.push(r[n][0]),r[n]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);c&&c(e);while(h.length)h.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],o=!0,s=1;s<a.length;s++){var u=a[s];0!==r[u]&&(o=!1)}o&&(i.splice(e--,1),t=n(n.s=a[0]))}return t}var o={},r={app:0},i=[];function n(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=o,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(a,o,function(e){return t[e]}.bind(null,o));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var c=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var o=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"image-gallery"},[a("p",[t._v("\n      Pick an image to preview:\n    ")]),t._l(t.images,function(e){return a("div",{key:e.large,staticClass:"image-preview",on:{click:function(a){t.selectedImage=e}}},[a("img",{attrs:{src:e.thumb,alt:"image.text"}})])})],2),t.selectedImage?[a("ImageBlur",{attrs:{image:t.selectedImage.large,thumb:t.selectedImage.thumb}}),a("p",[a("a",{attrs:{href:t.selectedImage.link,target:"_blank"}},[t._v("Photo by "+t._s(t.selectedImage.author)+" on Unsplash")])])]:t._e(),t._m(0)],2)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h4",[a("a",{attrs:{href:"https://github.com/DJanoskova/Vue.js-BlurryImageLoad",target:"_blank"}},[t._v("BlurryImageLoad @ GitHub")])])}],n=[{thumb:"https://images.unsplash.com/photo-1548681528-6a5c45b66b42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=60",large:"https://images.unsplash.com/photo-1548681528-6a5c45b66b42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60",author:"Ramiz Dedaković",link:"https://unsplash.com/photos/9SWHIgu8A8k"},{thumb:"https://images.unsplash.com/photo-1548678881-0c2e984f9dad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=60",large:"https://images.unsplash.com/photo-1548678881-0c2e984f9dad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60",author:"Max van den Oetelaar",link:"https://unsplash.com/photos/0ta9IhdKFgI"},{thumb:"https://images.unsplash.com/photo-1548692853-5a1e712fae28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",large:"https://images.unsplash.com/photo-1548692853-5a1e712fae28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1834&q=80",author:"Bastien Hervé",link:"https://unsplash.com/photos/FzAXZSGlftI"},{thumb:"https://images.unsplash.com/photo-1548638529-67ae36df7aa8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",large:"https://images.unsplash.com/photo-1548638529-67ae36df7aa8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80",author:"Nathan Ansell",link:"https://unsplash.com/photos/JvbNsRCXXic"},{thumb:"https://images.unsplash.com/photo-1548692972-dd5753b37b9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",large:"https://images.unsplash.com/photo-1548692972-dd5753b37b9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80",author:"Hugo Aitken",link:"https://unsplash.com/photos/nmpi584DlCo"}],s=a("aab7"),u={data:function(){return{images:n,selectedImage:null}},components:{ImageBlur:s["a"]}},l=u,c=(a("5c0b"),a("2877")),p=Object(c["a"])(l,r,i,!1,null,null,null),h=p.exports;a("a0d8");o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(h)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var o=a("5e27"),r=a.n(o);r.a},"5e27":function(t,e,a){},a0d8:function(t,e,a){}});
//# sourceMappingURL=app.8f87a20a.js.map