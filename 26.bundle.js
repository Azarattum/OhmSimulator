(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{107:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return c}));n(37),n(8),n(143),n(5),n(124),n(9),n(10);var r=n(24),i=n(21),o=new r.a,a=new Set,s=0;function l(e){0===s&&(o.addEventListener(e,"keydown",(function(e){a.has(e.keyCode)||a.add(e.keyCode)})),o.addEventListener(e,"keyup",(function(e){a.has(e.keyCode)&&a.delete(e.keyCode)})),o.addEventListener(e,"visibilitychange",(function(){e.hidden&&a.clear()})),o.addEventListener(e.defaultView,"blur",(function(){a.clear()}))),s+=1}function c(){s>0&&(s-=1),0===s&&(o.clearEvents(),a.clear(),s=0)}function u(){return Array.from(a.values()).some((function(e){return Object(i.isCtrlMetaKey)(e)}))}},114:function(e,t,n){"use strict";n.r(t),n.d(t,"instanceToHTML",(function(){return c})),n.d(t,"_dataToHTML",(function(){return u})),n.d(t,"htmlToGridSettings",(function(){return h}));n(11),n(12),n(13),n(33),n(72),n(690),n(37),n(52),n(8),n(85),n(691),n(214),n(482),n(56),n(95),n(5),n(181),n(40),n(16),n(63),n(9),n(182),n(67),n(10);var r=n(0),i=n(14);function o(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var a={"&nbsp;":" ","&amp;":"&","&lt;":"<","&gt;":">"},s=new RegExp(Object.keys(a).map((function(e){return"(".concat(e,")")})).join("|"),"gi");function l(e){return"TABLE"===(e&&e.nodeName||"")}function c(e){for(var t=e.hasColHeaders(),n=e.hasRowHeaders(),r=[t?-1:0,n?-1:0,e.countRows()-1,e.countCols()-1],o=e.getData.apply(e,r),a=o.length,s=a>0?o[0].length:0,l=["<table>","</table>"],c=t?["<thead>","</thead>"]:[],u=["<tbody>","</tbody>"],h=n?1:0,f=t?1:0,d=0;d<a;d+=1){for(var p=t&&0===d,v=[],m=0;m<s;m+=1){var g=!p&&n&&0===m,w="";if(p)w="<th>".concat(e.getColHeader(m-h),"</th>");else if(g)w="<th>".concat(e.getRowHeader(d-f),"</th>");else{var b=o[d][m],y=e.getCellMeta(d-h,m-f),C=y.hidden,k=y.rowspan,H=y.colspan;if(!C){var O=[];if(k&&O.push('rowspan="'.concat(k,'"')),H&&O.push('colspan="'.concat(H,'"')),Object(i.isEmpty)(b))w="<td ".concat(O.join(" "),"></td>");else{var E=b.toString().replace("<","&lt;").replace(">","&gt;").replace(/(<br(\s*|\/)>(\r\n|\n)?|\r\n|\n)/g,"<br>\r\n").replace(/\x20/gi,"&nbsp;").replace(/\t/gi,"&#9;");w="<td ".concat(O.join(" "),">").concat(E,"</td>")}}}v.push(w)}var S=["<tr>"].concat(v,["</tr>"]).join("");p?c.splice(1,0,S):u.splice(-1,0,S)}return l.splice(1,0,c.join(""),u.join("")),l.join("")}function u(e){for(var t=e.length,n=["<table>"],r=0;r<t;r+=1){var o=e[r],a=o.length,s=[];0===r&&n.push("<tbody>");for(var l=0;l<a;l+=1){var c=o[l],u=Object(i.isEmpty)(c)?"":c.toString().replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/(<br(\s*|\/)>(\r\n|\n)?|\r\n|\n)/g,"<br>\r\n").replace(/\x20/gi,"&nbsp;").replace(/\t/gi,"&#9;");s.push("<td>".concat(u,"</td>"))}n.push.apply(n,["<tr>"].concat(s,["</tr>"])),r+1===t&&n.push("</tbody>")}return n.push("</table>"),n.join("")}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document,n={},i=t.createDocumentFragment(),c=t.createElement("div");i.appendChild(c);var u=e;if("string"==typeof u){var h=u.replace(/<td\b[^>]*?>([\s\S]*?)<\/\s*td>/g,(function(e){var t=e.match(/<td\b[^>]*?>/g)[0],n=e.substring(t.length,e.lastIndexOf("<")).replace(/(<(?!br)([^>]+)>)/gi,"");return"".concat(t).concat(n).concat("</td>")}));c.insertAdjacentHTML("afterbegin","".concat(h)),u=c.querySelector("table")}if(u&&l(u)){var f=c.querySelector("style"),d=null,p=[];f&&(t.body.appendChild(f),f.disabled=!0,d=f.sheet,p=d?Array.from(d.cssRules):[],t.body.removeChild(f));var v=c.querySelector('meta[name$="enerator"]'),m=null!==u.querySelector("tbody th"),g=Array.from(u.querySelector("tr").cells).reduce((function(e,t){return e+t.colSpan}),0)-(m?1:0),w=u.tFoot&&Array.from(u.tFoot.rows)||[],b=[],y=!1,C=0,k=0;if(u.tHead){var H=Array.from(u.tHead.rows).filter((function(e){var t=null!==e.querySelector("td");return t&&b.push(e),!t}));y=(C=H.length)>0,C>1?n.nestedHeaders=Array.from(H).reduce((function(e,t){var n=Array.from(t.cells).reduce((function(e,t,n){if(m&&0===n)return e;var r=t.colSpan,i=t.innerHTML,o=r>1?{label:i,colspan:r}:i;return e.push(o),e}),[]);return e.push(n),e}),[]):y&&(n.colHeaders=Array.from(H[0].children).reduce((function(e,t,n){return m&&0===n||e.push(t.innerHTML),e}),[]))}b.length&&(n.fixedRowsTop=b.length),w.length&&(n.fixedRowsBottom=w.length);var O=[].concat(b,o(Array.from(u.tBodies).reduce((function(e,t){return e.push.apply(e,o(Array.from(t.rows))),e}),[])),o(w));k=O.length;for(var E=new Array(k),S=0;S<k;S++)E[S]=new Array(g);for(var R=[],j=[],D=0;D<k;D++)for(var M=O[D],T=Array.from(M.cells),x=T.length,A=function(e){var t=T[e],n=t.nodeName,i=t.innerHTML,o=t.rowSpan,l=t.colSpan,c=E[D].findIndex((function(e){return void 0===e}));if("TD"===n){if(o>1||l>1){for(var u=D;u<D+o;u++)if(u<k)for(var h=c;h<c+l;h++)E[u][h]=null;var f=t.getAttribute("style");f&&f.includes("mso-ignore:colspan")||R.push({col:c,row:D,rowspan:o,colspan:l})}var d="";d="nowrap"===p.reduce((function(e,n){if(Object(r.matchesCSSRules)(t,n)){var i=n.style.whiteSpace;i&&(e.whiteSpace=i)}return e}),{}).whiteSpace?i.replace(/[\r\n][\x20]{0,2}/gim," ").replace(/<br(\s*|\/)>/gim,"\r\n"):v&&/excel/gi.test(v.content)?i.replace(/[\r\n][\x20]{0,2}/g," ").replace(/<br(\s*|\/)>[\r\n]?[\x20]{0,3}/gim,"\r\n"):i.replace(/<br(\s*|\/)>[\r\n]?/gim,"\r\n"),E[D][c]=d.replace(s,(function(e){return a[e]}))}else j.push(i)},W=0;W<x;W++)A(W);return R.length&&(n.mergeCells=R),j.length&&(n.rowHeaders=j),E.length&&(n.data=E),n}}},128:function(e,t,n){!function(e){"use strict";function n(e){return e.split('"').length-1}var r=function(e){var t,r,i,o,a,s,l,c=[],u=0;for((i=e.replace(/\r\n|\r/g,"\n").split("\n")).length>1&&""===i[i.length-1]&&i.pop(),t=0,r=i.length;t<r;t+=1){for(i[t]=i[t].split("\t"),o=0,a=i[t].length;o<a;o+=1)c[u]||(c[u]=[]),s&&0===o?(l=c[u].length-1,c[u][l]=c[u][l]+"\n"+i[t][0],s&&1&n(i[t][0])&&(s=!1,c[u][l]=c[u][l].substring(0,c[u][l].length-1).replace(/""/g,'"'))):o===a-1&&0===i[t][o].indexOf('"')&&1&n(i[t][o])?(c[u].push(i[t][o].substring(1).replace(/""/g,'"')),s=!0):(c[u].push(i[t][o].replace(/""/g,'"')),s=!1);s||(u+=1)}return c},i=function(e){var t,n,r,i,o,a="";for(t=0,n=e.length;t<n;t+=1){for(i=e[t].length,r=0;r<i;r+=1)r>0&&(a+="\t"),"string"==typeof(o=e[t][r])?o.indexOf("\n")>-1?a+='"'+o.replace(/"/g,'""')+'"':a+=o:a+=null==o?"":o;t!==n-1&&(a+="\n")}return a};t.parse=r,t.stringify=i}(window)},129:function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return s}));n(11),n(12),n(8),n(5),n(9),n(39),n(10);var r=new WeakMap,i=Symbol("rootInstance");function o(e){r.set(e,!0)}function a(e){return e===i}function s(e){return r.has(e)}},148:function(e,t,n){"use strict";n(141),n(209),n(142);var r=n(0),i=n(1);function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.hot=t,this.container=null,this.injected=!1,this.rows=[],this.columns=[],this.samples=null,this.settings={useHeaders:!0}}var t,n,a;return t=e,(n=[{key:"addRow",value:function(e,t){if(this.columns.length)throw new Error("Doesn't support multi-dimensional table");this.rows.length||(this.container=this.createContainer(this.hot.rootElement.className));var n={row:e};this.rows.push(n),this.samples=t,this.table=this.createTable(this.hot.table.className),this.table.colGroup.appendChild(this.createColGroupsCol()),this.table.tr.appendChild(this.createRow(e)),this.container.container.appendChild(this.table.fragment),n.table=this.table.table}},{key:"addColumnHeadersRow",value:function(e){var t=this.hot.getColHeader(0);if(null!=t){var n={row:-1};this.rows.push(n),this.container=this.createContainer(this.hot.rootElement.className),this.samples=e,this.table=this.createTable(this.hot.table.className),this.table.colGroup.appendChild(this.createColGroupsCol()),this.table.tHead.appendChild(this.createColumnHeadersRow()),this.container.container.appendChild(this.table.fragment),n.table=this.table.table}}},{key:"addColumn",value:function(e,t){if(this.rows.length)throw new Error("Doesn't support multi-dimensional table");this.columns.length||(this.container=this.createContainer(this.hot.rootElement.className));var n={col:e};this.columns.push(n),this.samples=t,this.table=this.createTable(this.hot.table.className),this.getSetting("useHeaders")&&null!==this.hot.getColHeader(e)&&this.hot.view.appendColHeader(e,this.table.th),this.table.tBody.appendChild(this.createCol(e)),this.container.container.appendChild(this.table.fragment),n.table=this.table.table}},{key:"getHeights",value:function(e){this.injected||this.injectTable(),Object(i.arrayEach)(this.rows,(function(t){e(t.row,Object(r.outerHeight)(t.table)-1)}))}},{key:"getWidths",value:function(e){this.injected||this.injectTable(),Object(i.arrayEach)(this.columns,(function(t){e(t.col,Object(r.outerWidth)(t.table))}))}},{key:"setSettings",value:function(e){this.settings=e}},{key:"setSetting",value:function(e,t){this.settings||(this.settings={}),this.settings[e]=t}},{key:"getSettings",value:function(){return this.settings}},{key:"getSetting",value:function(e){return this.settings?this.settings[e]:null}},{key:"createColGroupsCol",value:function(){var e=this,t=this.hot.rootDocument.createDocumentFragment();return this.hot.hasRowHeaders()&&t.appendChild(this.createColElement(-1)),this.samples.forEach((function(n){Object(i.arrayEach)(n.strings,(function(n){t.appendChild(e.createColElement(n.col))}))})),t}},{key:"createRow",value:function(e){var t=this,n=this.hot.rootDocument,r=n.createDocumentFragment(),o=n.createElement("th");return this.hot.hasRowHeaders()&&(this.hot.view.appendRowHeader(e,o),r.appendChild(o)),this.samples.forEach((function(o){Object(i.arrayEach)(o.strings,(function(i){var o=i.col,a=t.hot.getCellMeta(e,o);a.col=o,a.row=e;var s=t.hot.getCellRenderer(a),l=n.createElement("td");l.setAttribute("ghost-table",1),s(t.hot,l,e,o,t.hot.colToProp(o),i.value,a),r.appendChild(l)}))})),r}},{key:"createColumnHeadersRow",value:function(){var e=this,t=this.hot.rootDocument,n=t.createDocumentFragment();if(this.hot.hasRowHeaders()){var r=t.createElement("th");this.hot.view.appendColHeader(-1,r),n.appendChild(r)}return this.samples.forEach((function(r){Object(i.arrayEach)(r.strings,(function(r){var i=r.col,o=t.createElement("th");e.hot.view.appendColHeader(i,o),n.appendChild(o)}))})),n}},{key:"createCol",value:function(e){var t=this,n=this.hot.rootDocument,r=n.createDocumentFragment();return this.samples.forEach((function(o){Object(i.arrayEach)(o.strings,(function(i){var o=i.row,a=t.hot.getCellMeta(o,e);a.col=e,a.row=o;var s=t.hot.getCellRenderer(a),l=n.createElement("td"),c=n.createElement("tr");l.setAttribute("ghost-table",1),s(t.hot,l,o,e,t.hot.colToProp(e),i.value,a),c.appendChild(l),r.appendChild(c)}))})),r}},{key:"clean",value:function(){this.rows.length=0,this.rows[-1]=void 0,this.columns.length=0,this.samples&&this.samples.clear(),this.samples=null,this.removeTable()}},{key:"injectTable",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.injected||((e||this.hot.rootElement).appendChild(this.container.fragment),this.injected=!0)}},{key:"removeTable",value:function(){this.injected&&this.container.container.parentNode&&(this.container.container.parentNode.removeChild(this.container.container),this.container=null,this.injected=!1)}},{key:"createColElement",value:function(e){var t=this.hot.rootDocument.createElement("col");return t.style.width="".concat(this.hot.view.wt.wtTable.getStretchedColumnWidth(e),"px"),t}},{key:"createTable",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=this.hot.rootDocument,n=t.createDocumentFragment(),i=t.createElement("table"),o=t.createElement("thead"),a=t.createElement("tbody"),s=t.createElement("colgroup"),l=t.createElement("tr"),c=t.createElement("th");return this.isVertical()&&i.appendChild(s),this.isHorizontal()&&(l.appendChild(c),o.appendChild(l),i.style.tableLayout="auto",i.style.width="auto"),i.appendChild(o),this.isVertical()&&a.appendChild(l),i.appendChild(a),Object(r.addClass)(i,e),n.appendChild(i),{fragment:n,table:i,tHead:o,tBody:a,colGroup:s,tr:l,th:c}}},{key:"createContainer",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=this.hot.rootDocument,n=t.createDocumentFragment(),i=t.createElement("div"),o="htGhostTable htAutoSize ".concat(e.trim());return Object(r.addClass)(i,o),n.appendChild(i),{fragment:n,container:i}}},{key:"isVertical",value:function(){return!(!this.rows.length||this.columns.length)}},{key:"isHorizontal",value:function(){return!(!this.columns.length||this.rows.length)}}])&&o(t.prototype,n),a&&o(t,a),e}();t.a=a},236:function(e,t,n){"use strict";n(27),n(8),n(101),n(95),n(5),n(9),n(10);var r=n(2),i=n(4),o=n(14);function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.samples=null,this.dataFactory=t,this.customSampleCount=null,this.allowDuplicates=!1}return s(e,null,[{key:"SAMPLE_COUNT",get:function(){return 3}}]),s(e,[{key:"getSampleCount",value:function(){return this.customSampleCount?this.customSampleCount:e.SAMPLE_COUNT}},{key:"setSampleCount",value:function(e){this.customSampleCount=e}},{key:"setAllowDuplicates",value:function(e){this.allowDuplicates=e}},{key:"generateRowSamples",value:function(e,t){return this.generateSamples("row",t,e)}},{key:"generateColumnSamples",value:function(e,t){return this.generateSamples("col",t,e)}},{key:"generateSamples",value:function(e,t,n){var r=this,o=new Map,a="number"==typeof n?{from:n,to:n}:n,s=a.from,l=a.to;return Object(i.rangeEach)(s,l,(function(n){var i=r.generateSample(e,t,n);o.set(n,i)})),o}},{key:"generateSample",value:function(e,t,n){var a=this;if("row"!==e&&"col"!==e)throw new Error("Unsupported sample type");var s=new Map,l="row"===e?"col":"row",c=[];return Object(i.rangeEach)(t.from,t.to,(function(t){var i,u="row"===e?a.dataFactory(n,t):a.dataFactory(t,n),h=u.value,f=u.bundleCountSeed,d=f>0;i=Object(r.isObject)(h)?Object.keys(h).length:Array.isArray(h)?h.length:Object(o.stringify)(h).length,d&&(i+=f),s.has(i)||s.set(i,{needed:a.getSampleCount(),strings:[]});var p=s.get(i);p.needed&&((!(c.indexOf(h)>-1)||a.allowDuplicates||d)&&(p.strings.push(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({value:h},l,t)),c.push(h),p.needed-=1))})),s}}]),e}();t.a=l},296:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function e(t){i(this,e),this.data=t,this.next=null,this.prev=null},a=function(){function e(){i(this,e),this.first=null,this.last=null}var t,n,a;return t=e,(n=[{key:"push",value:function(e){var t=new o(e);if(null===this.first)this.first=t,this.last=t;else{var n=this.last;this.last=t,t.prev=n,n.next=t}}},{key:"unshift",value:function(e){var t=new o(e);if(null===this.first)this.first=t,this.last=t;else{var n=this.first;this.first=t,t.next=n,n.prev=t}}},{key:"inorder",value:function(e){for(var t=this.first;t;)e(t),t=t.next}},{key:"remove",value:function(e){if(null===this.first)return!1;for(var t,n,r=this.first;r;){if(r.data===e)return t=r.next,n=r.prev,t&&(t.prev=n),n&&(n.next=t),r===this.first&&(this.first=t),r===this.last&&(this.last=n),!0;r=r.next}return!1}},{key:"hasCycle",value:function(){for(var e=this.first,t=this.first;;){if(null===e)return!1;if(null===(e=e.next))return!1;if((e=e.next)===(t=t.next))return!0}}},{key:"pop",value:function(){if(null===this.last)return null;var e=this.last;return this.last=this.last.prev,e}},{key:"shift",value:function(){if(null===this.first)return null;var e=this.first;return this.first=this.first.next,e}},{key:"recursiveReverse",value:function(){if(this.first){!function e(t,n){n&&(e(n,n.next),n.next=t)}(this.first,this.first.next),this.first.next=null;var e=this.first;this.first=this.last,this.last=e}}},{key:"reverse",value:function(){if(this.first&&this.first.next){for(var e,t=this.first.next,n=this.first;t;)e=t.next,t.next=n,n.prev=t,n=t,t=e;this.first.next=null,this.last.prev=null,e=this.first,this.first=n,this.last=e}}}])&&r(t.prototype,n),a&&r(t,a),e}();t.a=a},559:function(e,t,n){"use strict";function r(e,t){var n=e;null==n&&(n=""),this.allowEmpty&&""===n?t(!0):this.strict&&this.source?"function"==typeof this.source?this.source(n,i(n,t)):i(n,t)(this.source):t(!0)}function i(e,t){var n=e;return function(e){for(var r=!1,i=0,o=e.length;i<o;i++)if(n===e[i]){r=!0;break}t(r)}}n.d(t,"a",(function(){return r}))},560:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n(40),n(480);var r=n(6),i=n.n(r),o=n(233),a=n(44);function s(e,t){var n=Object(a.b)("date",this.instance),r=e,s=!0;null==r&&(r="");var l=i()(r,this.dateFormat||n.defaultDateFormat,!0).isValid(),c=i()(new Date(r)).isValid()||l;if(this.allowEmpty&&""===r&&(c=!0,l=!0),c||(s=!1),!c&&l&&(s=!0),c&&!l)if(!0===this.correctFormat){var u=function(e,t){var n,r=i()(Object(o.getNormalizedDate)(e)),a=i()(e,t),s=e.search(/[A-z]/g)>-1;n=r.isValid()&&r.format("x")===a.format("x")||!a.isValid()||s?r:a;return n.format(t)}(r,this.dateFormat),h=this.instance.runHooks("unmodifyRow",this.row),f=this.instance.runHooks("unmodifyCol",this.col);this.instance.setDataAtCell(h,f,u,"dateValidator"),s=!0}else s=!1;t(s)}},561:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(4);function i(e,t){var n=e;null==n&&(n=""),this.allowEmpty&&""===n?t(!0):t(""!==n&&Object(r.isNumeric)(e))}},562:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(6),i=n.n(r),o=["YYYY-MM-DDTHH:mm:ss.SSSZ","X","x"];function a(e,t){var n=this.timeFormat||"h:mm:ss a",r=!0,a=e;null===a&&(a=""),a=/^\d{3,}$/.test(a)?parseInt(a,10):a;var s=/^\d{1,2}$/.test(a);s&&(a+=":00");var l=i()(a,o,!0).isValid()?i()(a):i()(a,n),c=l.isValid(),u=i()(a,n,!0).isValid()&&!s;if(this.allowEmpty&&""===a&&(c=!0,u=!0),c||(r=!1),!c&&u&&(r=!0),c&&!u)if(!0===this.correctFormat){var h=l.format(n),f=this.instance.runHooks("unmodifyRow",this.row),d=this.instance.runHooks("unmodifyCol",this.col);this.instance.setDataAtCell(f,d,h,"timeValidator"),r=!0}else r=!1;t(r)}},573:function(e,t,n){"use strict";n(40),n(67);var r=n(46);function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}var a=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.timer=null,this.func=t,this.delay=function(e){var t=e;"string"==typeof t&&/fps$/.test(t)&&(t=1e3/parseInt(t.replace("fps","")||0,10));return t}(n),this.stopped=!0,this._then=null,this._callback=function(){return r.__callback()}}return o(e,null,[{key:"create",value:function(t,n){return new e(t,n)}}]),o(e,[{key:"start",value:function(){return this.stopped&&(this._then=Date.now(),this.stopped=!1,this.timer=Object(r.requestAnimationFrame)(this._callback)),this}},{key:"stop",value:function(){return this.stopped||(this.stopped=!0,Object(r.cancelAnimationFrame)(this.timer),this.timer=null),this}},{key:"__callback",value:function(){if(this.timer=Object(r.requestAnimationFrame)(this._callback),this.delay){var e=Date.now(),t=e-this._then;t>this.delay&&(this._then=e-t%this.delay,this.func())}else this.func()}}]),e}();t.a=a},575:function(e,t,n){"use strict";n(11),n(12),n(13),n(8),n(5),n(16),n(9),n(39),n(10);var r=n(0),i=n(24),o=n(15),a=n(7),s=n(188);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=new WeakMap,h=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.instance=t,this.eventManager=new i.a(t),this.settings=t.getSettings(),this.THEAD=void 0,this.TBODY=void 0,this.wt=void 0,this.activeWt=void 0,u.set(this,{selectionMouseDown:!1,mouseDown:void 0,table:void 0,lastWidth:0,lastHeight:0}),this.createElements(),this.registerEvents(),this.initializeWalkontable()}var t,n,h;return t=e,(n=[{key:"render",value:function(){this.wt.draw(!this.instance.forceFullRender),this.instance.forceFullRender=!1,this.instance.renderCall=!1}},{key:"getCellAtCoords",value:function(e,t){var n=this.wt.getCell(e,t);return n<0?null:n}},{key:"scrollViewport",value:function(e,t,n,r,i){return this.wt.scrollViewport(e,t,n,r,i)}},{key:"scrollViewportHorizontally",value:function(e,t,n){return this.wt.scrollViewportHorizontally(e,t,n)}},{key:"scrollViewportVertically",value:function(e,t,n){return this.wt.scrollViewportVertically(e,t,n)}},{key:"createElements",value:function(){var e=u.get(this),t=this.instance,n=t.rootElement,i=t.rootDocument,o=n.getAttribute("style");o&&n.setAttribute("data-originalstyle",o),Object(r.addClass)(n,"handsontable"),e.table=i.createElement("TABLE"),Object(r.addClass)(e.table,"htCore"),this.instance.getSettings().tableClassName&&Object(r.addClass)(e.table,this.instance.getSettings().tableClassName),this.THEAD=i.createElement("THEAD"),e.table.appendChild(this.THEAD),this.TBODY=i.createElement("TBODY"),e.table.appendChild(this.TBODY),this.instance.table=e.table,this.instance.container.insertBefore(e.table,this.instance.container.firstChild)}},{key:"registerEvents",value:function(){var e=this,t=u.get(this),n=this.instance,i=n.rootElement,a=n.rootDocument,s=a.documentElement;this.eventManager.addEventListener(i,"mousedown",(function(n){if(t.selectionMouseDown=!0,!e.isTextSelectionAllowed(n.target)){var i=e.instance.rootWindow;Object(r.clearTextSelection)(i),n.preventDefault(),i.focus()}})),this.eventManager.addEventListener(i,"mouseup",(function(){t.selectionMouseDown=!1})),this.eventManager.addEventListener(i,"mousemove",(function(n){t.selectionMouseDown&&!e.isTextSelectionAllowed(n.target)&&(e.settings.fragmentSelection&&Object(r.clearTextSelection)(e.instance.rootWindow),n.preventDefault())})),this.eventManager.addEventListener(s,"keyup",(function(t){e.instance.selection.isInProgress()&&!t.shiftKey&&e.instance.selection.finish()})),this.eventManager.addEventListener(s,"mouseup",(function(n){e.instance.selection.isInProgress()&&Object(o.isLeftClick)(n)&&e.instance.selection.finish(),t.mouseDown=!1,(Object(r.isOutsideInput)(a.activeElement)||!e.instance.selection.isSelected()&&!Object(o.isRightClick)(n))&&e.instance.unlisten()})),this.eventManager.addEventListener(s,"contextmenu",(function(n){e.instance.selection.isInProgress()&&Object(o.isRightClick)(n)&&(e.instance.selection.finish(),t.mouseDown=!1)})),this.eventManager.addEventListener(s,"touchend",(function(){e.instance.selection.isInProgress()&&e.instance.selection.finish(),t.mouseDown=!1})),this.eventManager.addEventListener(s,"mousedown",(function(n){var o=n.target,l=n.x||n.clientX,c=n.y||n.clientY,u=n.target;if(!t.mouseDown&&i&&e.instance.view){var h=e.instance.view.wt.wtTable.holder;if(u===h){var f=Object(r.getScrollbarWidth)(a);if(a.elementFromPoint(l+f,c)!==h||a.elementFromPoint(l,c+f)!==h)return}else for(;u!==s;){if(null===u){if(n.isTargetWebComponent)break;return}if(u===i)return;u=u.parentNode}("function"==typeof e.settings.outsideClickDeselects?e.settings.outsideClickDeselects(o):e.settings.outsideClickDeselects)?e.instance.deselectCell():e.instance.destroyEditor(!1,!1)}})),this.eventManager.addEventListener(t.table,"selectstart",(function(t){e.settings.fragmentSelection||Object(r.isInput)(t.target)||t.preventDefault()}))}},{key:"initializeWalkontable",value:function(){var e=this,t=u.get(this),n={debug:function(){return e.settings.debug},externalRowCalculator:this.instance.getPlugin("autoRowSize")&&this.instance.getPlugin("autoRowSize").isEnabled(),table:t.table,preventOverflow:function(){return e.settings.preventOverflow},preventWheel:function(){return e.settings.preventWheel},stretchH:function(){return e.settings.stretchH},data:this.instance.getDataAtCell,totalRows:function(){return e.instance.countRows()},totalColumns:function(){return e.instance.countCols()},fixedColumnsLeft:function(){return e.settings.fixedColumnsLeft},fixedRowsTop:function(){return e.settings.fixedRowsTop},fixedRowsBottom:function(){return e.settings.fixedRowsBottom},minSpareRows:function(){return e.settings.minSpareRows},renderAllRows:this.settings.renderAllRows,rowHeaders:function(){var t=[];return e.instance.hasRowHeaders()&&t.push((function(t,n){return e.appendRowHeader(t,n)})),e.instance.runHooks("afterGetRowHeaderRenderers",t),t},columnHeaders:function(){var t=[];return e.instance.hasColHeaders()&&t.push((function(t,n){e.appendColHeader(t,n)})),e.instance.runHooks("afterGetColumnHeaderRenderers",t),t},columnWidth:this.instance.getColWidth,rowHeight:this.instance.getRowHeight,cellRenderer:function(t,n,r){var i=e.instance.getCellMeta(t,n),o=e.instance.colToProp(n),a=e.instance.getDataAtRowProp(t,o);e.instance.hasHook("beforeValueRender")&&(a=e.instance.runHooks("beforeValueRender",a,i)),e.instance.runHooks("beforeRenderer",r,t,n,o,a,i),e.instance.getCellRenderer(i)(e.instance,r,t,n,o,a,i),e.instance.runHooks("afterRenderer",r,t,n,o,a,i)},selections:this.instance.selection.highlight,hideBorderOnMouseDownOver:function(){return e.settings.fragmentSelection},onWindowResize:function(){e.instance&&!e.instance.isDestroyed&&e.instance.refreshDimensions()},onCellMouseDown:function(n,r,i,a){var l={row:!1,column:!1,cell:!1};e.instance.listen(),e.activeWt=a,t.mouseDown=!0,e.instance.runHooks("beforeOnCellMouseDown",n,r,i,l),Object(o.isImmediatePropagationStopped)(n)||(Object(s.a)(n,{coords:r,selection:e.instance.selection,controller:l}),e.instance.runHooks("afterOnCellMouseDown",n,r,i),e.activeWt=e.wt)},onCellContextMenu:function(n,r,i,a){e.activeWt=a,t.mouseDown=!1,e.instance.selection.isInProgress()&&e.instance.selection.finish(),e.instance.runHooks("beforeOnCellContextMenu",n,r,i),Object(o.isImmediatePropagationStopped)(n)||(e.instance.runHooks("afterOnCellContextMenu",n,r,i),e.activeWt=e.wt)},onCellMouseOut:function(t,n,r,i){e.activeWt=i,e.instance.runHooks("beforeOnCellMouseOut",t,n,r),Object(o.isImmediatePropagationStopped)(t)||(e.instance.runHooks("afterOnCellMouseOut",t,n,r),e.activeWt=e.wt)},onCellMouseOver:function(n,r,i,a){var l={row:!1,column:!1,cell:!1};e.activeWt=a,e.instance.runHooks("beforeOnCellMouseOver",n,r,i,l),Object(o.isImmediatePropagationStopped)(n)||(t.mouseDown&&Object(s.a)(n,{coords:r,selection:e.instance.selection,controller:l}),e.instance.runHooks("afterOnCellMouseOver",n,r,i),e.activeWt=e.wt)},onCellMouseUp:function(t,n,r,i){e.activeWt=i,e.instance.runHooks("beforeOnCellMouseUp",t,n,r),Object(o.isImmediatePropagationStopped)(t)||(e.instance.runHooks("afterOnCellMouseUp",t,n,r),e.activeWt=e.wt)},onCellCornerMouseDown:function(t){t.preventDefault(),e.instance.runHooks("afterOnCellCornerMouseDown",t)},onCellCornerDblClick:function(t){t.preventDefault(),e.instance.runHooks("afterOnCellCornerDblClick",t)},beforeDraw:function(t,n){return e.beforeRender(t,n)},onDraw:function(t){return e.onDraw(t)},onScrollVertically:function(){return e.instance.runHooks("afterScrollVertically")},onScrollHorizontally:function(){return e.instance.runHooks("afterScrollHorizontally")},onBeforeRemoveCellClassNames:function(){return e.instance.runHooks("beforeRemoveCellClassNames")},onAfterDrawSelection:function(t,n,r,i){return e.instance.runHooks("afterDrawSelection",t,n,r,i)},onBeforeDrawBorders:function(t,n){return e.instance.runHooks("beforeDrawBorders",t,n)},onBeforeTouchScroll:function(){return e.instance.runHooks("beforeTouchScroll")},onAfterMomentumScroll:function(){return e.instance.runHooks("afterMomentumScroll")},onBeforeStretchingColumnWidth:function(t,n){return e.instance.runHooks("beforeStretchingColumnWidth",t,n)},onModifyRowHeaderWidth:function(t){return e.instance.runHooks("modifyRowHeaderWidth",t)},onModifyGetCellCoords:function(t,n,r){return e.instance.runHooks("modifyGetCellCoords",t,n,r)},viewportRowCalculatorOverride:function(t){var n=e.settings.viewportRowRenderingOffset;if("auto"===n&&e.settings.fixedRowsTop&&(n=10),n>0||"auto"===n){var r=e.instance.countRows();if("number"==typeof n)t.startRow=Math.max(t.startRow-n,0),t.endRow=Math.min(t.endRow+n,r-1);else if("auto"===n){var i=t.startRow+t.endRow-t.startRow,o=Math.ceil(i/r*12);t.startRow=Math.max(t.startRow-o,0),t.endRow=Math.min(t.endRow+o,r-1)}}e.instance.runHooks("afterViewportRowCalculatorOverride",t)},viewportColumnCalculatorOverride:function(t){var n=e.settings.viewportColumnRenderingOffset;if("auto"===n&&e.settings.fixedColumnsLeft&&(n=10),n>0||"auto"===n){var r=e.instance.countCols();if("number"==typeof n&&(t.startColumn=Math.max(t.startColumn-n,0),t.endColumn=Math.min(t.endColumn+n,r-1)),"auto"===n){var i=t.startColumn+t.endColumn-t.startColumn,o=Math.ceil(i/r*12);t.startRow=Math.max(t.startColumn-o,0),t.endColumn=Math.min(t.endColumn+o,r-1)}}e.instance.runHooks("afterViewportColumnCalculatorOverride",t)},rowHeaderWidth:function(){return e.settings.rowHeaderWidth},columnHeaderHeight:function(){var t=e.instance.runHooks("modifyColumnHeaderHeight");return e.settings.columnHeaderHeight||t}};this.instance.runHooks("beforeInitWalkontable",n),this.wt=new a.e(n),this.activeWt=this.wt;var r=this.wt.wtTable.spreader,i=this.instance.rootElement.getBoundingClientRect(),l=i.width,c=i.height;this.setLastSize(l,c),this.eventManager.addEventListener(r,"mousedown",(function(e){e.target===r&&3===e.which&&Object(o.stopPropagation)(e)})),this.eventManager.addEventListener(r,"contextmenu",(function(e){e.target===r&&3===e.which&&Object(o.stopPropagation)(e)})),this.eventManager.addEventListener(this.instance.rootDocument.documentElement,"click",(function(){e.settings.observeDOMVisibility&&e.wt.drawInterrupted&&(e.instance.forceFullRender=!0,e.render())}))}},{key:"isTextSelectionAllowed",value:function(e){if(Object(r.isInput)(e))return!0;var t=Object(r.isChildOf)(e,this.instance.view.wt.wtTable.spreader);return!(!0!==this.settings.fragmentSelection||!t)||!("cell"!==this.settings.fragmentSelection||!this.isSelectedOnlyCell()||!t)||!(this.settings.fragmentSelection||!this.isCellEdited()||!this.isSelectedOnlyCell())}},{key:"isMouseDown",value:function(){return u.get(this).mouseDown}},{key:"isSelectedOnlyCell",value:function(){var e=l(this.instance.getSelectedLast()||[],4),t=e[0],n=e[1],r=e[2],i=e[3];return void 0!==t&&t===r&&n===i}},{key:"isCellEdited",value:function(){var e=this.instance.getActiveEditor();return e&&e.isOpened()}},{key:"beforeRender",value:function(e,t){e&&this.instance.runHooks("beforeRender",this.instance.forceFullRender,t)}},{key:"onDraw",value:function(e){e&&this.instance.runHooks("afterRender",this.instance.forceFullRender)}},{key:"appendRowHeader",value:function(e,t){if(t.firstChild){var n=t.firstChild;if(!Object(r.hasClass)(n,"relative"))return Object(r.empty)(t),void this.appendRowHeader(e,t);this.updateCellHeader(n.querySelector(".rowHeader"),e,this.instance.getRowHeader)}else{var i=this.instance,o=i.rootDocument,a=i.getRowHeader,s=o.createElement("div"),l=o.createElement("span");s.className="relative",l.className="rowHeader",this.updateCellHeader(l,e,a),s.appendChild(l),t.appendChild(s)}this.instance.runHooks("afterGetRowHeader",e,t)}},{key:"appendColHeader",value:function(e,t){if(t.firstChild){var n=t.firstChild;Object(r.hasClass)(n,"relative")?this.updateCellHeader(n.querySelector(".colHeader"),e,this.instance.getColHeader):(Object(r.empty)(t),this.appendColHeader(e,t))}else{var i=this.instance.rootDocument,o=i.createElement("div"),a=i.createElement("span");o.className="relative",a.className="colHeader",this.updateCellHeader(a,e,this.instance.getColHeader),o.appendChild(a),t.appendChild(o)}this.instance.runHooks("afterGetColHeader",e,t)}},{key:"updateCellHeader",value:function(e,t,n){var i=t,o=this.wt.wtOverlays.getParentOverlay(e)||this.wt;e.parentNode&&(Object(r.hasClass)(e,"colHeader")?i=o.wtTable.columnFilter.sourceToRendered(t):Object(r.hasClass)(e,"rowHeader")&&(i=o.wtTable.rowFilter.sourceToRendered(t))),i>-1?Object(r.fastInnerHTML)(e,n(t)):(Object(r.fastInnerText)(e,String.fromCharCode(160)),Object(r.addClass)(e,"cornerHeader"))}},{key:"maximumVisibleElementWidth",value:function(e){var t=this.wt.wtViewport.getWorkspaceWidth()-e;return t>0?t:0}},{key:"maximumVisibleElementHeight",value:function(e){var t=this.wt.wtViewport.getWorkspaceHeight()-e;return t>0?t:0}},{key:"setLastSize",value:function(e,t){var n=u.get(this),r=[e,t];n.lastWidth=r[0],n.lastHeight=r[1]}},{key:"getLastSize",value:function(){var e=u.get(this);return{width:e.lastWidth,height:e.lastHeight}}},{key:"mainViewIsActive",value:function(){return this.wt===this.activeWt}},{key:"destroy",value:function(){this.wt.destroy(),this.eventManager.destroy()}}])&&c(t.prototype,n),h&&c(t,h),e}();t.a=h},592:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(5),n(16);var r=n(296),i=function(e,t){var n=e.toString(),r=t.toString();return n===r?0:n<r?-1:1};function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.length;if(Math.abs(r-n)<=1)return[];var s=Math.ceil((n+r)/2);return o(e,t,n,s),o(e,t,s,r),a(e,t,n,s,r)}function a(e,t,n,i,o){for(var a=new r.a,s=new r.a,l=i-n,c=o-i,u=Math.max(l,c),h=o-n,f=0;f<u;f+=1)f<l&&a.push(e[n+f]),f<c&&s.push(e[i+f]);for(var d=0;d<h;)a.first&&s.first?t(a.first.data,s.first.data)>0?e[n+d]=s.shift().data:e[n+d]=a.shift().data:a.first?e[n+d]=a.shift().data:e[n+d]=s.shift().data,d+=1;return e}},630:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];r(this,e),this.items=t}var t,n,o;return t=e,(n=[{key:"push",value:function(){var e;(e=this.items).push.apply(e,arguments)}},{key:"pop",value:function(){return this.items.pop()}},{key:"peek",value:function(){return this.isEmpty()?void 0:this.items[this.items.length-1]}},{key:"isEmpty",value:function(){return!this.size()}},{key:"size",value:function(){return this.items.length}}])&&i(t.prototype,n),o&&i(t,o),e}();t.a=o},65:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return f}));var r=n(70),i=n(559),o=n(560),a=n(561),s=n(562),l=Object(r.a)("validators"),c=l.register,u=l.getItem,h=l.hasItem,f=l.getNames;l.getValues;function d(e){if("function"==typeof e)return e;if(!h(e))throw Error('No registered validator found under "'.concat(e,'" name'));return u(e)}c("autocomplete",i.a),c("date",o.a),c("numeric",a.a),c("time",s.a)},70:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(11),n(12),n(13),n(37),n(8),n(101),n(5),n(16),n(9),n(10);function r(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var i=new Map;function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"common";i.has(e)||i.set(e,new Map);var t=i.get(e);function n(e,n){t.set(e,n)}function o(e){return t.get(e)}function a(e){return t.has(e)}function s(){return r(t.keys())}function l(){return r(t.values())}return{register:n,getItem:o,hasItem:a,getNames:s,getValues:l}}},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(8),n(5),n(9),n(39),n(10);var r=n(131),i=n(2);function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.hot=t}var t,n,r;return t=e,(n=[{key:"toVisualRow",value:function(e){return this.hot.runHooks("unmodifyRow",e)}},{key:"toVisualColumn",value:function(e){return this.hot.runHooks("unmodifyCol",e)}},{key:"toVisual",value:function(e,t){return Object(i.isObject)(e)?{row:this.toVisualRow(e.row),column:this.toVisualColumn(e.column)}:[this.toVisualRow(e),this.toVisualColumn(t)]}},{key:"toPhysicalRow",value:function(e){return this.hot.runHooks("modifyRow",e)}},{key:"toPhysicalColumn",value:function(e){return this.hot.runHooks("modifyCol",e)}},{key:"toPhysical",value:function(e,t){return Object(i.isObject)(e)?{row:this.toPhysicalRow(e.row),column:this.toPhysicalColumn(e.column)}:[this.toPhysicalRow(e),this.toPhysicalColumn(t)]}}])&&o(t.prototype,n),r&&o(t,r),e}(),s=new WeakMap,l=new WeakMap;function c(e){var t,n=e instanceof r.a?e:function(e){if(!s.has(e))throw Error("Record translator was not registered for this object identity");return s.get(e)}(e);return l.has(n)?t=l.get(n):(t=new a(n),l.set(n,t)),t}}}]);