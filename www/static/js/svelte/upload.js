!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("../../../../../../../../../static/vendor/jschardet/jschardet.min.js"),require("../../../../../../../../../static/vendor/xlsx/xlsx.full.min.js")):"function"==typeof define&&define.amd?define("svelte/upload",["../../../../../../../../../static/vendor/jschardet/jschardet.min.js","../../../../../../../../../static/vendor/xlsx/xlsx.full.min.js"],e):(t=t||self).upload=e(t.jschardet)}(this,(function(t){"use strict";function e(){}function n(t,e){for(var n in e)t[n]=e[n];return t}function a(t,e){e.appendChild(t)}function r(t,e,n){e.insertBefore(t,n)}function s(t){t.parentNode.removeChild(t)}function o(t){for(;t.nextSibling;)t.parentNode.removeChild(t.nextSibling)}function i(t){for(var e=0;e<t.length;e+=1)t[e]&&t[e].d()}function c(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function d(t,e,n){t.addEventListener(e,n,!1)}function l(t,e,n){t.removeEventListener(e,n,!1)}function h(t,e,n){t.setAttribute(e,n)}function f(t,e){for(var n=0;n<t.options.length;n+=1){var a=t.options[n];if(a.__value===e)return void(a.selected=!0)}}function v(t){var e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function p(){return Object.create(null)}function _(t){this.destroy=e,this.fire("destroy"),this.set=this.get=e,!1!==t&&this._fragment.u(),this._fragment.d(),this._fragment=this._state=null}function g(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function m(t,e){return t!=t?e==e:t!==e}function y(t,e){var n=t in this._handlers&&this._handlers[t].slice();if(n)for(var a=0;a<n.length;a+=1){var r=n[a];r.__calling||(r.__calling=!0,r.call(this,e),r.__calling=!1)}}function b(t){return t?this._state[t]:this._state}function w(t,e){t._handlers=p(),t._bind=e._bind,t.options=e,t.root=e.root||t,t.store=t.root.store||e.store}function x(t,e,n){var a=e.bind(this);return n&&!1===n.init||a(this.get()[t],void 0),this.on(n&&n.defer?"update":"state",(function(e){e.changed[t]&&a(e.current[t],e.previous&&e.previous[t])}))}function D(t,e){if("teardown"===t)return this.on("destroy",e);var n=this._handlers[t]||(this._handlers[t]=[]);return n.push(e),{cancel:function(){var t=n.indexOf(e);~t&&n.splice(t,1)}}}function T(t){for(;t&&t.length;)t.shift()()}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var N={destroy:_,get:b,fire:y,observe:x,on:D,set:function(t){this._set(n({},t)),this.root._lock||(this.root._lock=!0,T(this.root._beforecreate),T(this.root._oncreate),T(this.root._aftercreate),this.root._lock=!1)},teardown:_,_recompute:e,_set:function(t){var e=this._state,a={},r=!1;for(var s in t)this._differs(t[s],e[s])&&(a[s]=r=!0);r&&(this._state=n(n({},e),t),this._recompute(a,this._state),this._bind&&this._bind(a,this._state),this._fragment&&(this.fire("state",{changed:a,current:this._state,previous:e}),this._fragment.p(a,this._state),this.fire("update",{changed:a,current:this._state,previous:e})))},_mount:function(t,e){this._fragment[this._fragment.i?"i":"m"](t,e||null)},_unmount:function(){this._fragment&&this._fragment.u()},_differs:g};function k(t,e,n){return function(t,e,n,a,r){var s={method:e,body:a,mode:"cors",credentials:n};return window.fetch(t,s).then((function(t){if(!t.ok)throw new Error(t.statusText);return t.text()})).then((function(t){try{return JSON.parse(t)}catch(e){return console.warn("malformed json input",t),t}})).then((function(t){return r&&r(t),t})).catch((function(t){if(!r)throw t;console.error(t)}))}(t,"PUT","include",e,n)}var A=Date.now||function(){return(new Date).getTime()};var S,j={};function C(t){void 0===t&&(t="core"),"chart"===t?window.__dw&&window.__dw.vis&&window.__dw.vis.meta&&(j[t]=window.__dw.vis.meta.locale||{}):j[t]="core"===t?dw.backend.__messages.core:Object.assign({},dw.backend.__messages.core,dw.backend.__messages[t])}function P(t,e){var n=arguments;if(void 0===e&&(e="core"),t=t.trim(),j[e]||C(e),!j[e][t])return"MISSING:"+t;var a=j[e][t];return"string"==typeof a&&arguments.length>2&&(a=a.replace(/\$(\d)/g,(function(t,e){return e=2+Number(e),void 0===n[e]?t:n[e]}))),a}var M,F=dw.backend.currentChart,L=function(t,e,n){var a,r,s,o,i=0;n||(n={});var c=function(){i=!1===n.leading?0:A(),a=null,o=t.apply(r,s),a||(r=s=null)},u=function(){var u=A();i||!1!==n.leading||(i=u);var d=e-(u-i);return r=this,s=arguments,d<=0||d>e?(a&&(clearTimeout(a),a=null),i=u,o=t.apply(r,s),a||(r=s=null)):a||!1===n.trailing||(a=setTimeout(c,d)),o};return u.cancel=function(){clearTimeout(a),i=0,a=r=s=null},u}((function(){var t=S.get().chartData;k("/api/charts/"+F.get("id")+"/data",t)}),1e3);function H(){S=this}function U(t){var e=t.changed,n=t.current,a=t.previous;e.chartData&&n.chartData&&a&&a.chartData!==n.chartData&&L()}function O(t){w(this,t),this._state=n({placeholder:P("upload / paste here")},t.data),this._handlers.update=[U];var e=this;t.root||(this._oncreate=[]),this._fragment=function(t,e){var n,o,i,u=!1;function h(){u=!0,t.set({chartData:i.value}),u=!1}return{c:function(){n=c("form"),o=c("div"),i=c("textarea"),this.h()},h:function(){var t,a;d(i,"input",h),i.readOnly=e.readonly,i.id="upload-data-text",t="resize",a="none",i.style.setProperty(t,a),i.placeholder=e.placeholder,i.className="svelte-kl1kny",o.className="control-group",n.className="upload-form"},m:function(t,s){r(n,t,s),a(o,n),a(i,o),i.value=e.chartData},p:function(t,e){u||(i.value=e.chartData),t.readonly&&(i.readOnly=e.readonly),t.placeholder&&(i.placeholder=e.placeholder)},u:function(){s(n)},d:function(){l(i,"input",h)}}}(this,this._state),this.root._oncreate.push((function(){H.call(e),e.fire("update",{changed:{chartData:1,readonly:1,placeholder:1},current:e._state})})),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),T(this._oncreate))}function E(t){var e=t.changed,n=t.current;if(e.selectedDataset&&"--"!==n.selectedDataset){var a=n.selectedDataset;this.set({chartData:a.data}),a.presets&&Object.keys(a.presets).forEach((function(t){dw.backend.currentChart.set(t,a.presets[t])}))}}function R(t,e){for(var a,o,u=e.group,d=(e.each_value,e.group_index,u.datasets),l=[],f=0;f<d.length;f+=1)l[f]=q(t,n(n({},e),{each_value_1:d,dataset:d[f],dataset_index:f}));return{c:function(){a=c("optgroup");for(var t=0;t<l.length;t+=1)l[t].c();this.h()},h:function(){h(a,"label",o=u.type)},m:function(t,e){r(a,t,e);for(var n=0;n<l.length;n+=1)l[n].m(a,null)},p:function(e,r){u=r.group,r.each_value,r.group_index;var s=u.datasets;if(e.datasetsArray){for(var i=0;i<s.length;i+=1){var c=n(n({},r),{each_value_1:s,dataset:s[i],dataset_index:i});l[i]?l[i].p(e,c):(l[i]=q(t,c),l[i].c(),l[i].m(a,null))}for(;i<l.length;i+=1)l[i].u(),l[i].d();l.length=s.length}e.datasetsArray&&o!==(o=u.type)&&h(a,"label",o)},u:function(){s(a);for(var t=0;t<l.length;t+=1)l[t].u()},d:function(){i(l)}}}function q(t,n){n.group,n.each_value,n.group_index;var o,i,d,l=n.dataset,h=(n.each_value_1,n.dataset_index,l.title);return{c:function(){o=c("option"),i=u(h),this.h()},h:function(){o.__value=d=l,o.value=o.__value,o.className="demo-dataset"},m:function(t,e){r(o,t,e),a(i,o)},p:function(t,e){e.group,e.each_value,e.group_index,l=e.dataset,e.each_value_1,e.dataset_index,t.datasetsArray&&h!==(h=l.title)&&(i.data=h),t.datasetsArray&&d!==(d=l)&&(o.__value=d),o.value=o.__value},u:function(){s(o)},d:e}}function B(t){w(this,t),this._state=n({selectedDataset:"--"},t.data),this._recompute({datasets:1},this._state),this._handlers.update=[E];var e=this;t.root||(this._oncreate=[],this._beforecreate=[]),this._fragment=function(t,e){for(var o,h,p,_,g,m,y,b,w,x,D=P("upload / quick help"),T=P("upload / try a dataset"),N=P("upload / sample dataset"),k=!1,A=e.datasetsArray,S=[],j=0;j<A.length;j+=1)S[j]=R(t,n(n({},e),{each_value:A,group:A[j],group_index:j}));function C(){k=!0,t.set({selectedDataset:v(b)}),k=!1}return{c:function(){o=c("p"),h=u(D),p=u("\n\n"),_=c("div"),g=c("p"),m=u(T),y=u("\n    "),b=c("select"),w=c("option"),x=u(N);for(var t=0;t<S.length;t+=1)S[t].c();this.h()},h:function(){w.__value="--",w.value=w.__value,d(b,"change",C),"selectedDataset"in e||t.root._beforecreate.push(C),b.disabled=e.readonly,b.id="demo-datasets",b.className="svelte-16u58l0",_.className="demo-datasets"},m:function(t,n){r(o,t,n),a(h,o),r(p,t,n),r(_,t,n),a(g,_),a(m,g),a(y,_),a(b,_),a(w,b),a(x,w);for(var s=0;s<S.length;s+=1)S[s].m(b,null);f(b,e.selectedDataset)},p:function(e,a){var r=a.datasetsArray;if(e.datasetsArray){for(var s=0;s<r.length;s+=1){var o=n(n({},a),{each_value:r,group:r[s],group_index:s});S[s]?S[s].p(e,o):(S[s]=R(t,o),S[s].c(),S[s].m(b,null))}for(;s<S.length;s+=1)S[s].u(),S[s].d();S.length=r.length}k||f(b,a.selectedDataset),e.readonly&&(b.disabled=a.readonly)},u:function(){s(o),s(p),s(_);for(var t=0;t<S.length;t+=1)S[t].u()},d:function(){i(S),l(b,"change",C)}}}(this,this._state),this.root._oncreate.push((function(){e.fire("update",{changed:{datasets:1,readonly:1,selectedDataset:1,datasetsArray:1},current:e._state})})),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),T(this._beforecreate),T(this._oncreate))}function I(t){var e=this,n=t.changed,a=t.current;n.sheets&&a.sheets.length>1?setTimeout((function(){e.set({selected:a.sheets[0]})}),300):n.sheets&&1===a.sheets.length&&k("/api/charts/"+dw.backend.currentChart.get("id")+"/data",a.sheets[0].csv,(function(){window.location.href="describe"})),n.selected&&this.set({chartData:a.selected.csv})}function X(t,n){var o,i,d,l=n.sheet,h=(n.each_value,n.sheet_index,l.name);return{c:function(){o=c("option"),i=u(h),this.h()},h:function(){o.__value=d=l,o.value=o.__value},m:function(t,e){r(o,t,e),a(i,o)},p:function(t,e){l=e.sheet,e.each_value,e.sheet_index,t.sheets&&h!==(h=l.name)&&(i.data=h),t.sheets&&d!==(d=l)&&(o.__value=d),o.value=o.__value},u:function(){s(o)},d:e}}function $(t,n){var a,o=P("upload / parsing-xls");return{c:function(){a=c("div"),this.h()},h:function(){a.className="alert alert-info"},m:function(t,e){r(a,t,e),a.innerHTML=o},p:e,u:function(){a.innerHTML="",s(a)},d:e}}function z(t,e){for(var o,h,p,_,g,m=P("upload / select sheet"),y=!1,b=e.sheets,w=[],x=0;x<b.length;x+=1)w[x]=X(0,n(n({},e),{each_value:b,sheet:b[x],sheet_index:x}));function D(){y=!0,t.set({selected:v(_)}),y=!1}return{c:function(){o=c("p"),h=u(m),p=u("\n    "),_=c("select");for(var t=0;t<w.length;t+=1)w[t].c();this.h()},h:function(){d(_,"change",D),"selected"in e||t.root._beforecreate.push(D),_.disabled=g=!e.sheets.length,_.className="svelte-16u58l0"},m:function(t,n){r(o,t,n),a(h,o),r(p,t,n),r(_,t,n);for(var s=0;s<w.length;s+=1)w[s].m(_,null);f(_,e.selected)},p:function(t,e){var a=e.sheets;if(t.sheets){for(var r=0;r<a.length;r+=1){var s=n(n({},e),{each_value:a,sheet:a[r],sheet_index:r});w[r]?w[r].p(t,s):(w[r]=X(0,s),w[r].c(),w[r].m(_,null))}for(;r<w.length;r+=1)w[r].u(),w[r].d();w.length=a.length}y||f(_,e.selected),t.sheets&&g!==(g=!e.sheets.length)&&(_.disabled=g)},u:function(){s(o),s(p),s(_);for(var t=0;t<w.length;t+=1)w[t].u()},d:function(){i(w),l(_,"change",D)}}}function G(t,n){var a,o=P("upload / xls / uploading data");return{c:function(){a=c("p")},m:function(t,e){r(a,t,e),a.innerHTML=o},p:e,u:function(){a.innerHTML="",s(a)},d:e}}function J(t){w(this,t),this._state=n({selected:!1,sheets:[]},t.data),this._handlers.update=[I];var e=this;t.root||(this._oncreate=[],this._beforecreate=[]),this._fragment=function(t,e){var n;function a(t){return t.sheets.length?t.sheets.length>1?z:G:$}var o=a(e),i=o(t,e);return{c:function(){n=c("div"),i.c()},m:function(t,e){r(n,t,e),i.m(n,null)},p:function(e,r){o===(o=a(r))&&i?i.p(e,r):(i.u(),i.d(),(i=o(t,r)).c(),i.m(n,null))},u:function(){s(n),i.u()},d:function(){i.d()}}}(this,this._state),this.root._oncreate.push((function(){e.fire("update",{changed:{sheets:1,selected:1},current:e._state})})),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),T(this._beforecreate),T(this._oncreate))}function K(e,n){var a=new FileReader;a.onload=function(){try{for(var r=new Uint8Array(a.result),s="",o=0,i=0;i<r.length;++i)r[i]>122&&o++,s+=String.fromCharCode(r[i]);var c=t.detect(s);c.confidence<=.95&&o<10&&(c.encoding="utf-8"),(a=new FileReader).onload=function(){return n(null,a.result)},a.readAsText(e,c.encoding)}catch(t){console.warn(t),n(null,a.result)}},a.readAsArrayBuffer(e)}n(O.prototype,N),n(B.prototype,N),B.prototype._recompute=function(t,e){var n;t.datasets&&this._differs(e.datasetsArray,e.datasetsArray=(n=e.datasets,Object.keys(n).map((function(t){return n[t]}))))&&(t.datasetsArray=!0)},n(J.prototype,N);var Q=[{id:"copy",title:P("upload / copy-paste"),longTitle:P("upload / copy-paste / long"),icon:"fa fa-clipboard",mainPanel:O,sidebar:B,action:function(){}},{id:"upload",title:P("upload / upload-csv"),longTitle:P("upload / upload-csv / long"),icon:"fa-file-excel-o fa",mainPanel:O,sidebar:B,isFileUpload:!0,onFileUpload:function(t){var e=t.target.files[0];"text/"===e.type.substr(0,5)||".csv"===e.name.substr(e.name.length-4)?(M.set({Sidebar:B}),K(e,(function(t,e){if(t)return console.error("could not read file",t);k("/api/charts/"+dw.backend.currentChart.get("id")+"/data",e,(function(){window.location.href="describe"}))}))):"application/"===e.type.substr(0,12)?(M.set({Sidebar:J,sheets:[]}),function(t,e){var n="undefined"!=typeof FileReader&&(FileReader.prototype||{}).readAsBinaryString,a=new FileReader;a.onload=function(){try{var t=n?a.result:new Uint8Array(a.result),r=XLSX.read(t,{type:n?"binary":"array"});e(null,r.SheetNames.map((function(t){return{name:t,sheet:r.Sheets[t],csv:XLSX.utils.sheet_to_csv(r.Sheets[t])}})))}catch(t){console.error(t),e(null,a.result)}},a.readAsBinaryString(t)}(e,(function(t,e){if(t)return M.set({error:t});M.set({sheets:e})}))):(console.error(e.type),console.error(e),M.set({error:P("upload / csv-required")}))},action:function(){}}];var V={addButton:function(t){Q.push(t),this.set({buttons:Q});var e=this.get().defaultMethod;t.id===e&&this.btnAction(t)},btnAction:function(t){if(this.set({active:t}),"copy"===t.id){var e=this.store.get().dw_chart;e.get("externalData")&&(e.set("externalData",""),setTimeout((function(){dw.backend.currentChart.save()}),1e3))}var n=t.id;"upload"===t.id&&(n="copy",setTimeout((function(){}),1e3)),this.store.get().dw_chart.set("metadata.data.upload-method",n),t.action&&t.action(),t.mainPanel&&this.set({MainPanel:t.mainPanel}),t.sidebar&&this.set({Sidebar:t.sidebar})},btnUpload:function(t,e){t.onFileUpload&&t.onFileUpload(e)},dragStart:function(t){"copy"===this.get().active.id&&(t.preventDefault(),this.set({dragover:!0}))},resetDrag:function(){this.set({dragover:!1})},onFileDrop:function(t){if("copy"===this.get().active.id){this.resetDrag(),t.preventDefault();var e=[];if(t.dataTransfer.items){for(var n=0;n<t.dataTransfer.items.length;n++)"file"===t.dataTransfer.items[n].kind&&e.push(t.dataTransfer.items[n].getAsFile());t.dataTransfer.items.clear()}else{for(var a=0;a<t.dataTransfer.files.length;a++)e.push(t.dataTransfer.files[a]);t.dataTransfer.items.clear()}for(var r=0;r<e.length;r++)if("text/"===e[r].type.substr(0,5))return K(e[r],(function(t,e){if(t)return console.error("could not read file",t);k("/api/charts/"+dw.backend.currentChart.get("id")+"/data",e,(function(){window.location.href="describe"}))}))}}};function W(){var t=this;M=this;var e=this.store.get().dw_chart.get("metadata.data.upload-method","copy");this.set({defaultMethod:e}),Q.forEach((function(n){n.id===e&&t.set({active:n})}))}function Y(t,n){var a,o=P("upload / drag-csv-here");return{c:function(){a=c("div"),this.h()},h:function(){a.className="draginfo svelte-oe6wy4"},m:function(t,e){r(a,t,e),a.innerHTML=o},u:function(){a.innerHTML="",s(a)},d:e}}function Z(t,e){var n,o,i,h,f,v,p,_,g,m=e.btn,y=(e.each_value,e.btn_index,m.title),b=m.isFileUpload&&tt(t,e);return{c:function(){n=c("li"),o=c("label"),b&&b.c(),i=u("\n                            "),h=c("i"),v=u("\n                            "),p=c("span"),_=u(y),this.h()},h:function(){h.className=f=m.icon+" svelte-oe6wy4",p.className="svelte-oe6wy4",o.className="svelte-oe6wy4",d(n,"click",at),n.className=g="action "+(e.active==m?"active":"")+" svelte-oe6wy4",n._svelte={component:t,each_value:e.each_value,btn_index:e.btn_index}},m:function(t,e){r(n,t,e),a(o,n),b&&b.m(o,null),a(i,o),a(h,o),a(v,o),a(p,o),a(_,p)},p:function(e,a){m=a.btn,a.each_value,a.btn_index,m.isFileUpload?b?b.p(e,a):((b=tt(t,a)).c(),b.m(o,i)):b&&(b.u(),b.d(),b=null),e.buttons&&f!==(f=m.icon+" svelte-oe6wy4")&&(h.className=f),e.buttons&&y!==(y=m.title)&&(_.data=y),(e.active||e.buttons)&&g!==(g="action "+(a.active==m?"active":"")+" svelte-oe6wy4")&&(n.className=g),n._svelte.each_value=a.each_value,n._svelte.btn_index=a.btn_index},u:function(){s(n),b&&b.u()},d:function(){b&&b.d(),l(n,"click",at)}}}function tt(t,e){var n;e.btn,e.each_value,e.btn_index;return{c:function(){n=c("input"),this.h()},h:function(){d(n,"change",nt),n.accept=".csv, .tsv, .txt, .xlsx, .xls, .ods, .dbf",n.className="file-upload svelte-oe6wy4",h(n,"type","file"),n._svelte={component:t,each_value:e.each_value,btn_index:e.btn_index}},m:function(t,e){r(n,t,e)},p:function(t,e){e.btn,e.each_value,e.btn_index,n._svelte.each_value=e.each_value,n._svelte.btn_index=e.btn_index},u:function(){s(n)},d:function(){l(n,"change",nt)}}}function et(t,e){var n,i,h,f;function v(e){t.set({error:!1})}return{c:function(){n=c("div"),(i=c("div")).textContent="✕",h=u("\n                    "),f=c("noscript"),this.h()},h:function(){d(i,"click",v),i.className="action close",n.className="alert alert-error"},m:function(t,s){r(n,t,s),a(i,n),a(h,n),a(f,n),f.insertAdjacentHTML("afterend",e.error)},p:function(t,e){t.error&&(o(f),f.insertAdjacentHTML("afterend",e.error))},u:function(){o(f),s(n)},d:function(){l(i,"click",v)}}}function nt(t){var e=this._svelte.component,n=this._svelte.each_value[this._svelte.btn_index];e.btnUpload(n,t)}function at(t){var e=this._svelte.component,n=this._svelte.each_value[this._svelte.btn_index];e.btnAction(n)}function rt(t){w(this,t),this._state=n({dragover:!1,MainPanel:O,Sidebar:B,active:Q[0],buttons:Q,sheets:[],chart:{id:""},readonly:!1,chartData:"",transpose:!1,firstRowIsHeader:!0,skipRows:0},t.data);var e=this;t.root||(this._oncreate=[],this._beforecreate=[],this._aftercreate=[]),this._fragment=function(t,e){for(var o,h,f,v,p,_,g,m,y,b,w,x,D,T,N,k,A,S,j,C,M,F,L=P("upload / title"),H=e.active.longTitle||e.active.title,U={},O={},E=P("Proceed"),R=e.dragover&&Y(),q=e.buttons,B=[],I=0;I<q.length;I+=1)B[I]=Z(t,n(n({},e),{each_value:q,btn:q[I],btn_index:I}));var X=e.error&&et(t,e),$=e.Sidebar;function z(e){var n={};return"chartData"in e&&(n.chartData=e.chartData,U.chartData=!0),"readonly"in e&&(n.readonly=e.readonly,U.readonly=!0),"sheets"in e&&(n.sheets=e.sheets,U.sheets=!0),"datasets"in e&&(n.datasets=e.datasets,U.datasets=!0),{root:t.root,data:n,_bind:function(e,n){t.get();var a={};!U.chartData&&e.chartData&&(a.chartData=n.chartData),!U.readonly&&e.readonly&&(a.readonly=n.readonly),!U.sheets&&e.sheets&&(a.sheets=n.sheets),!U.datasets&&e.datasets&&(a.datasets=n.datasets),t._set(a),U={}}}}if($){var G=new $(z(e));t.root._beforecreate.push((function(){G._bind({chartData:1,readonly:1,sheets:1,datasets:1},G.get())}))}var J=e.MainPanel;function K(e){var n={};return"chartData"in e&&(n.chartData=e.chartData,O.chartData=!0),"readonly"in e&&(n.readonly=e.readonly,O.readonly=!0),{root:t.root,data:n,_bind:function(e,n){t.get();var a={};!O.chartData&&e.chartData&&(a.chartData=n.chartData),!O.readonly&&e.readonly&&(a.readonly=n.readonly),t._set(a),O={}}}}if(J){var Q=new J(K(e));t.root._beforecreate.push((function(){Q._bind({chartData:1,readonly:1},Q.get())}))}function V(e){t.onFileDrop(e)}function W(e){t.dragStart(e)}function tt(e){t.dragStart(e)}function nt(e){t.resetDrag()}function at(e){t.resetDrag()}return{c:function(){o=c("div"),R&&R.c(),h=u("\n    "),f=c("div"),v=c("div"),p=c("div"),_=c("h3"),g=u("\n\n                "),m=c("ul");for(var t=0;t<B.length;t+=1)B[t].c();y=u("\n\n                "),X&&X.c(),b=u("\n\n                "),w=c("h4"),x=u(H),D=u("\n\n                "),G&&G._fragment.c(),T=u("\n        "),N=c("div"),Q&&Q._fragment.c(),k=u("\n\n            "),A=c("div"),S=c("a"),j=u(E),C=u(" "),M=c("i"),this.h()},h:function(){m.className="import-methods svelte-oe6wy4",p.className="sidebar",v.className="span5",M.className="icon-chevron-right icon-white",S.href="describe",S.className="submit btn btn-primary",S.id="describe-proceed",A.className="buttons pull-right",N.className="span7",f.className="row",f.style.cssText=F=e.dragover?"opacity: 0.5;filter:blur(6px);background:white;pointer-events:none":"",d(o,"drop",V),d(o,"dragover",W),d(o,"dragenter",tt),d(o,"dragend",nt),d(o,"dragleave",at),o.className="chart-editor dw-create-upload upload-data"},m:function(t,e){r(o,t,e),R&&R.m(o,null),a(h,o),a(f,o),a(v,f),a(p,v),a(_,p),_.innerHTML=L,a(g,p),a(m,p);for(var n=0;n<B.length;n+=1)B[n].m(m,null);a(y,p),X&&X.m(p,null),a(b,p),a(w,p),a(x,w),a(D,p),G&&G._mount(p,null),a(T,f),a(N,f),Q&&Q._mount(N,null),a(k,N),a(A,N),a(S,A),a(j,S),a(C,S),a(M,S)},p:function(e,a){a.dragover?R||((R=Y()).c(),R.m(o,h)):R&&(R.u(),R.d(),R=null);var r=a.buttons;if(e.buttons||e.active){for(var s=0;s<r.length;s+=1){var i=n(n({},a),{each_value:r,btn:r[s],btn_index:s});B[s]?B[s].p(e,i):(B[s]=Z(t,i),B[s].c(),B[s].m(m,null))}for(;s<B.length;s+=1)B[s].u(),B[s].d();B.length=r.length}if(a.error?X?X.p(e,a):((X=et(t,a)).c(),X.m(p,b)):X&&(X.u(),X.d(),X=null),e.active&&H!==(H=a.active.longTitle||a.active.title)&&(x.data=H),$!==($=a.Sidebar))G&&G.destroy(),$&&((G=new $(z(a)))._fragment.c(),G._mount(p,null));else{var c={};!U.chartData&&e.chartData&&(c.chartData=a.chartData,U.chartData=!0),!U.readonly&&e.readonly&&(c.readonly=a.readonly,U.readonly=!0),!U.sheets&&e.sheets&&(c.sheets=a.sheets,U.sheets=!0),!U.datasets&&e.datasets&&(c.datasets=a.datasets,U.datasets=!0),G._set(c),U={}}if(J!==(J=a.MainPanel))Q&&Q.destroy(),J&&((Q=new J(K(a)))._fragment.c(),Q._mount(N,k));else{var u={};!O.chartData&&e.chartData&&(u.chartData=a.chartData,O.chartData=!0),!O.readonly&&e.readonly&&(u.readonly=a.readonly,O.readonly=!0),Q._set(u),O={}}e.dragover&&F!==(F=a.dragover?"opacity: 0.5;filter:blur(6px);background:white;pointer-events:none":"")&&(f.style.cssText=F)},u:function(){_.innerHTML="",s(o),R&&R.u();for(var t=0;t<B.length;t+=1)B[t].u();X&&X.u()},d:function(){R&&R.d(),i(B),X&&X.d(),G&&G.destroy(!1),Q&&Q.destroy(!1),l(o,"drop",V),l(o,"dragover",W),l(o,"dragenter",tt),l(o,"dragend",nt),l(o,"dragleave",at)}}}(this,this._state),this.root._oncreate.push((function(){W.call(e),e.fire("update",{changed:{dragover:1,buttons:1,active:1,error:1,Sidebar:1,chartData:1,readonly:1,sheets:1,datasets:1,MainPanel:1},current:e._state})})),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),this._lock=!0,T(this._beforecreate),T(this._oncreate),T(this._aftercreate),this._lock=!1)}function st(t,e){this._observers={pre:p(),post:p()},this._handlers={},this._dependents=[],this._computed=p(),this._sortedComputedProperties=[],this._state=n({},t),this._differs=e&&e.immutable?m:g}n(rt.prototype,N),n(rt.prototype,V),n(st.prototype,{_add:function(t,e){this._dependents.push({component:t,props:e})},_init:function(t){for(var e={},n=0;n<t.length;n+=1){var a=t[n];e["$"+a]=this._state[a]}return e},_remove:function(t){for(var e=this._dependents.length;e--;)if(this._dependents[e].component===t)return void this._dependents.splice(e,1)},_sortComputedProperties:function(){var t,e=this._computed,n=this._sortedComputedProperties=[],a=p();function r(s){if(t[s])throw new Error("Cyclical dependency detected");if(!a[s]){a[s]=!0;var o=e[s];o&&(t[s]=!0,o.deps.forEach(r),n.push(o))}}for(var s in this._computed)t=p(),r(s)},compute:function(t,e,n){var a,r=this,s={deps:e,update:function(s,o,i){var c=e.map((function(t){return t in o&&(i=!0),s[t]}));if(i){var u=n.apply(null,c);r._differs(u,a)&&(a=u,o[t]=!0,s[t]=a)}}};s.update(this._state,{},!0),this._computed[t]=s,this._sortComputedProperties()},fire:y,get:b,observe:x,on:D,onchange:function(t){return console.warn("store.onchange is deprecated in favour of store.on('state', event => {...})"),this.on("state",(function(e){t(e.current,e.changed)}))},set:function(t){var e=this._state,a=this._changed={},r=!1;for(var s in t){if(this._computed[s])throw new Error("'"+s+"' is a read-only property");this._differs(t[s],e[s])&&(a[s]=r=!0)}if(r){this._state=n(n({},e),t);for(var o=0;o<this._sortedComputedProperties.length;o+=1)this._sortedComputedProperties[o].update(this._state,a);this.fire("state",{changed:a,current:this._state,previous:e});var i=this._dependents.slice();for(o=0;o<i.length;o+=1){var c=i[o],u={};r=!1;for(var d=0;d<c.props.length;d+=1){var l=c.props[d];l in a&&(u["$"+l]=this._state[l],r=!0)}r&&c.component.set(u)}this.fire("update",{changed:a,current:this._state,previous:e})}}});return{App:rt,data:{chart:{id:""},readonly:!1,chartData:"",transpose:!1,firstRowIsHeader:!0,skipRows:0},store:new st({})}}));
