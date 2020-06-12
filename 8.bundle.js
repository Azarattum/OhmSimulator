(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{128:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h})),r.d(t,"c",(function(){return f}));r(11),r(12),r(13),r(33),r(685),r(71),r(139),r(36),r(52),r(8),r(98),r(30),r(479),r(92),r(5),r(16),r(62),r(9),r(140),r(10);var n=r(132),a=r(1);function o(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var u="area",h="cell",f="header",d=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t,this.layerLevel=0,this.cell=Object(n.a)(h,t),this.fill=Object(n.a)("fill",t),this.areas=new Map,this.headers=new Map,this.activeHeaders=new Map,this.customSelections=[]}var t,r,i;return t=e,(r=[{key:"isEnabledFor",value:function(e){var t="current"===e?h:e,r=this.options.disableHighlight;return"string"==typeof r&&(r=[r]),!1===r||Array.isArray(r)&&!r.includes(t)}},{key:"useLayerLevel",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return this.layerLevel=e,this}},{key:"getCell",value:function(){return this.cell}},{key:"getFill",value:function(){return this.fill}},{key:"createOrGetArea",value:function(){var e,t=this.layerLevel;return this.areas.has(t)?e=this.areas.get(t):(e=Object(n.a)(u,s({layerLevel:t},this.options)),this.areas.set(t,e)),e}},{key:"getAreas",value:function(){return o(this.areas.values())}},{key:"createOrGetHeader",value:function(){var e,t=this.layerLevel;return this.headers.has(t)?e=this.headers.get(t):(e=Object(n.a)(f,s({},this.options)),this.headers.set(t,e)),e}},{key:"getHeaders",value:function(){return o(this.headers.values())}},{key:"createOrGetActiveHeader",value:function(){var e,t=this.layerLevel;return this.activeHeaders.has(t)?e=this.activeHeaders.get(t):(e=Object(n.a)("active-header",s({},this.options)),this.activeHeaders.set(t,e)),e}},{key:"getActiveHeaders",value:function(){return o(this.activeHeaders.values())}},{key:"getCustomSelections",value:function(){return o(this.customSelections.values())}},{key:"addCustomSelection",value:function(e){this.customSelections.push(Object(n.a)("custom-selection",s({},e)))}},{key:"clear",value:function(){this.cell.clear(),this.fill.clear(),Object(a.arrayEach)(this.areas.values(),(function(e){e.clear()})),Object(a.arrayEach)(this.headers.values(),(function(e){e.clear()})),Object(a.arrayEach)(this.activeHeaders.values(),(function(e){e.clear()}))}},{key:Symbol.iterator,value:function(){return[this.cell,this.fill].concat(o(this.areas.values()),o(this.headers.values()),o(this.activeHeaders.values()),o(this.customSelections))[Symbol.iterator]()}}])&&l(t.prototype,r),i&&l(t,i),e}();t.d=d},131:function(e,t,r){"use strict";r(128);var n=r(480);r.d(t,"a",(function(){return n.a}));r(186);var a=r(63);r.d(t,"b",(function(){return a.c})),r.d(t,"c",(function(){return a.e}))},132:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(69),a=r(582),o=r(583),i=r(584),s=r(585),c=r(586),l=r(587),u=Object(n.a)("highlight/types"),h=u.register,f=u.getItem;function d(e,t){return f(e)(t)}h("active-header",a.a),h("area",o.a),h("cell",i.a),h("custom-selection",s.a),h("fill",c.a),h("header",l.a)},186:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));r(8),r(98),r(5),r(9),r(10);var n=r(15),a=r(7);function o(e){var t=e.isShiftKey,r=e.isLeftClick,n=e.isRightClick,o=e.coords,i=e.selection,s=e.controller,c=i.isSelected()?i.getSelectedRange().current():null,l=i.isSelectedByCorner(),u=i.isSelectedByRowHeader();if(t&&c)o.row>=0&&o.col>=0&&!s.cells?i.setRangeEnd(o):(l||u)&&o.row>=0&&o.col>=0&&!s.cells?i.setRangeEnd(new a.a(o.row,o.col)):l&&o.row<0&&!s.column?i.setRangeEnd(new a.a(c.to.row,o.col)):u&&o.col<0&&!s.row?i.setRangeEnd(new a.a(o.row,c.to.col)):(!l&&!u&&o.col<0||l&&o.col<0)&&!s.row?i.selectRows(c.from.row,o.row):(!l&&!u&&o.row<0||u&&o.row<0)&&!s.column&&i.selectColumns(c.from.col,o.col);else{var h=new a.a(o.row,o.col);h.row<0&&(h.row=0),h.col<0&&(h.col=0);var f=!i.inInSelection(h),d=r||n&&f;o.row<0&&o.col>=0&&!s.column?d&&i.selectColumns(o.col):o.col<0&&o.row>=0&&!s.row?d&&i.selectRows(o.row):o.col>=0&&o.row>=0&&!s.cells?d&&i.setRangeStart(o):o.col<0&&o.row<0&&i.setRangeStart(o)}}var i=new Map([["mousedown",o],["mouseover",function(e){var t=e.isLeftClick,r=e.coords,n=e.selection,o=e.controller;if(t){var i=n.isSelectedByRowHeader(),s=n.isSelectedByColumnHeader(),c=n.tableProps.countCols(),l=n.tableProps.countRows();s&&!o.column?n.setRangeEnd(new a.a(l-1,r.col)):i&&!o.row?n.setRangeEnd(new a.a(r.row,c-1)):o.cell||n.setRangeEnd(r)}}],["touchstart",o]]);function s(e,t){var r=t.coords,a=t.selection,o=t.controller;i.get(e.type)({coords:r,selection:a,controller:o,isShiftKey:e.shiftKey,isLeftClick:Object(n.isLeftClick)(e)||"touchstart"===e.type,isRightClick:Object(n.isRightClick)(e)})}},34:function(e,t,r){"use strict";r.d(t,"c",(function(){return f})),r.d(t,"b",(function(){return p})),r.d(t,"a",(function(){return v}));var n=r(69),a=r(555),o=r(556),i=r(557),s=r(558),c=r(559),l=r(560),u=r(561),h=Object(n.a)("renderers"),f=h.register,d=h.getItem,g=h.hasItem,v=h.getNames;h.getValues;function p(e){if("function"==typeof e)return e;if(!g(e))throw Error('No registered renderer found under "'.concat(e,'" name'));return d(e)}f("base",a.a),f("autocomplete",o.a),f("checkbox",i.a),f("html",s.a),f("numeric",c.a),f("password",l.a),f("text",u.a)},480:function(e,t,r){"use strict";r(11),r(12),r(13),r(33),r(36),r(52),r(8),r(49),r(141),r(119),r(120),r(99),r(5),r(16),r(121),r(62),r(9),r(10);var n=r(128),a=r(588),o=r(7),i=r(105),s=r(2),c=r(14),l=r(1),u=r(53),h=r(589),f=r(63),d=r(45);function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==s.return||s.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function v(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["Unsupported format of the selection ranges was passed. To select cells pass \n        the coordinates as an array of arrays ([[rowStart, columnStart/columnPropStart, rowEnd, columnEnd/columnPropEnd]]) \n        or as an array of CellRange objects."]);return v=function(){return e},e}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var y=function(){function e(t,r){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.settings=t,this.tableProps=r,this.inProgress=!1,this.selectedByCorner=!1,this.selectedByRowHeader=new Set,this.selectedByColumnHeader=new Set,this.selectedRange=new a.a,this.highlight=new n.d({headerClassName:t.currentHeaderClassName,activeHeaderClassName:t.activeHeaderClassName,rowClassName:t.currentRowClassName,columnClassName:t.currentColClassName,disableHighlight:this.settings.disableVisualSelection,cellCornerVisible:function(){return o.isCellCornerVisible.apply(o,arguments)},areaCornerVisible:function(){return o.isAreaCornerVisible.apply(o,arguments)}}),this.transformation=new h.a(this.selectedRange,{countRows:function(){return o.tableProps.countRows()},countCols:function(){return o.tableProps.countCols()},fixedRowsBottom:function(){return t.fixedRowsBottom},minSpareRows:function(){return t.minSpareRows},minSpareCols:function(){return t.minSpareCols},autoWrapRow:function(){return t.autoWrapRow},autoWrapCol:function(){return t.autoWrapCol}}),this.transformation.addLocalHook("beforeTransformStart",(function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return o.runLocalHooks.apply(o,["beforeModifyTransformStart"].concat(t))})),this.transformation.addLocalHook("afterTransformStart",(function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return o.runLocalHooks.apply(o,["afterModifyTransformStart"].concat(t))})),this.transformation.addLocalHook("beforeTransformEnd",(function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return o.runLocalHooks.apply(o,["beforeModifyTransformEnd"].concat(t))})),this.transformation.addLocalHook("afterTransformEnd",(function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return o.runLocalHooks.apply(o,["afterModifyTransformEnd"].concat(t))})),this.transformation.addLocalHook("insertRowRequire",(function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return o.runLocalHooks.apply(o,["insertRowRequire"].concat(t))})),this.transformation.addLocalHook("insertColRequire",(function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return o.runLocalHooks.apply(o,["insertColRequire"].concat(t))}))}var t,r,u;return t=e,(r=[{key:"getSelectedRange",value:function(){return this.selectedRange}},{key:"begin",value:function(){this.inProgress=!0}},{key:"finish",value:function(){this.runLocalHooks("afterSelectionFinished",Array.from(this.selectedRange)),this.inProgress=!1}},{key:"isInProgress",value:function(){return this.inProgress}},{key:"setRangeStart",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n="multiple"===this.settings.selectionMode,a=Object(c.isUndefined)(t)?Object(i.a)():t,o=e.row<0,s=e.col<0,l=o&&s;o&&(e.row=0),s&&(e.col=0),this.selectedByCorner=l,this.runLocalHooks("beforeSetRangeStart".concat(r?"Only":""),e),(!n||n&&!a&&Object(c.isUndefined)(t))&&this.selectedRange.clear(),this.selectedRange.add(e),0===this.getLayerLevel()&&(this.selectedByRowHeader.clear(),this.selectedByColumnHeader.clear()),!l&&s&&this.selectedByRowHeader.add(this.getLayerLevel()),!l&&o&&this.selectedByColumnHeader.add(this.getLayerLevel()),r||this.setRangeEnd(e)}},{key:"setRangeStartOnly",value:function(e,t){this.setRangeStart(e,t,!0)}},{key:"setRangeEnd",value:function(e){if(!this.selectedRange.isEmpty()){this.runLocalHooks("beforeSetRangeEnd",e),this.begin();var t=this.selectedRange.current();"single"!==this.settings.selectionMode&&t.setTo(new o.a(e.row,e.col)),this.highlight.getCell().clear(),this.highlight.isEnabledFor(n.b)&&this.highlight.getCell().add(this.selectedRange.current().highlight);var r=this.getLayerLevel();r<this.highlight.layerLevel&&(Object(l.arrayEach)(this.highlight.getAreas(),(function(e){e.clear()})),Object(l.arrayEach)(this.highlight.getHeaders(),(function(e){e.clear()})),Object(l.arrayEach)(this.highlight.getActiveHeaders(),(function(e){e.clear()}))),this.highlight.useLayerLevel(r);var a=this.highlight.createOrGetArea(),i=this.highlight.createOrGetHeader(),s=this.highlight.createOrGetActiveHeader();a.clear(),i.clear(),s.clear(),this.highlight.isEnabledFor(n.a)&&(this.isMultiple()||r>=1)&&(a.add(t.from).add(t.to),1===r&&(this.highlight.useLayerLevel(r-1).createOrGetArea().add(this.selectedRange.previous().from),this.highlight.useLayerLevel(r))),this.highlight.isEnabledFor(n.c)&&("single"===this.settings.selectionMode?i.add(t.highlight):i.add(t.from).add(t.to)),this.isSelectedByRowHeader()&&this.tableProps.countCols()===t.getWidth()&&s.add(new o.a(t.from.row,-1)).add(new o.a(t.to.row,-1)),this.isSelectedByColumnHeader()&&this.tableProps.countRows()===t.getHeight()&&s.add(new o.a(-1,t.from.col)).add(new o.a(-1,t.to.col)),this.runLocalHooks("afterSetRangeEnd",e)}}},{key:"isMultiple",value:function(){var e=Object(s.createObjectPropListener)(!this.selectedRange.current().isSingle());return this.runLocalHooks("afterIsMultipleSelection",e),e.value}},{key:"transformStart",value:function(e,t,r){this.setRangeStart(this.transformation.transformStart(e,t,r))}},{key:"transformEnd",value:function(e,t){this.setRangeEnd(this.transformation.transformEnd(e,t))}},{key:"getLayerLevel",value:function(){return this.selectedRange.size()-1}},{key:"isSelected",value:function(){return!this.selectedRange.isEmpty()}},{key:"isSelectedByRowHeader",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getLayerLevel();return-1===e?this.selectedByRowHeader.size>0:this.selectedByRowHeader.has(e)}},{key:"isSelectedByColumnHeader",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getLayerLevel();return-1===e?this.selectedByColumnHeader.size>0:this.selectedByColumnHeader.has(e)}},{key:"isSelectedByAnyHeader",value:function(){return this.isSelectedByRowHeader(-1)||this.isSelectedByColumnHeader(-1)}},{key:"isSelectedByCorner",value:function(){return this.selectedByCorner}},{key:"inInSelection",value:function(e){return this.selectedRange.includes(e)}},{key:"isCellCornerVisible",value:function(){return this.settings.fillHandle&&!this.tableProps.isEditorOpened()&&!this.isMultiple()}},{key:"isAreaCornerVisible",value:function(e){return(!Number.isInteger(e)||e===this.getLayerLevel())&&this.settings.fillHandle&&!this.tableProps.isEditorOpened()&&this.isMultiple()}},{key:"clear",value:function(){this.selectedRange.clear(),this.highlight.clear()}},{key:"deselect",value:function(){this.isSelected()&&(this.inProgress=!1,this.clear(),this.runLocalHooks("afterDeselect"))}},{key:"selectAll",value:function(){this.clear(),this.setRangeStart(new o.a(-1,-1)),this.selectedByRowHeader.add(this.getLayerLevel()),this.selectedByColumnHeader.add(this.getLayerLevel()),this.setRangeEnd(new o.a(this.tableProps.countRows()-1,this.tableProps.countCols()-1))}},{key:"selectCells",value:function(e){var t=this,r=Object(f.c)(e);if(r===f.a)return!1;if(r===f.b)throw new Error(Object(d.a)(v()));var n=Object(f.e)(r,{propToCol:function(e){return t.tableProps.propToCol(e)},keepDirection:!0}),a=this.tableProps.countRows(),i=this.tableProps.countCols(),s=!e.some((function(e){var t=g(n(e),4),r=t[0],o=t[1],s=t[2],c=t[3];return!(Object(f.d)(r,a)&&Object(f.d)(o,i)&&Object(f.d)(s,a)&&Object(f.d)(c,i))}));return s&&(this.clear(),Object(l.arrayEach)(e,(function(e){var r=g(n(e),4),a=r[0],i=r[1],s=r[2],c=r[3];t.setRangeStartOnly(new o.a(a,i),!1),t.setRangeEnd(new o.a(s,c)),t.finish()}))),s}},{key:"selectColumns",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,r="string"==typeof e?this.tableProps.propToCol(e):e,n="string"==typeof t?this.tableProps.propToCol(t):t,a=this.tableProps.countCols(),i=Object(f.d)(r,a)&&Object(f.d)(n,a);return i&&(this.setRangeStartOnly(new o.a(-1,r)),this.setRangeEnd(new o.a(this.tableProps.countRows()-1,n)),this.finish()),i}},{key:"selectRows",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,r=this.tableProps.countRows(),n=Object(f.d)(e,r)&&Object(f.d)(t,r);return n&&(this.setRangeStartOnly(new o.a(e,-1)),this.setRangeEnd(new o.a(t,this.tableProps.countCols()-1)),this.finish()),n}}])&&p(t.prototype,r),u&&p(t,u),e}();Object(s.mixin)(y,u.a),t.a=y},555:function(e,t,r){"use strict";r(33);var n=r(0);t.a=function(e,t,r,a,o,i,s){var c=[],l=[];s.className&&(t.className?t.className="".concat(t.className," ").concat(s.className):t.className=s.className),s.readOnly&&c.push(s.readOnlyCellClassName),!1===s.valid&&s.invalidCellClassName?c.push(s.invalidCellClassName):l.push(s.invalidCellClassName),!1===s.wordWrap&&s.noWordWrapClassName&&c.push(s.noWordWrapClassName),!i&&s.placeholder&&c.push(s.placeholderCellClassName),Object(n.removeClass)(t,l),Object(n.addClass)(t,c)}},556:function(e,t,r){"use strict";r(33);var n=r(0),a=r(24),o=r(7),i=r(34);t.a=function(e,t,r,s,c,l,u){var h=e.rootDocument,f=u.allowHtml?"html":"text",d=h.createElement("DIV");d.className="htAutocompleteArrow",d.appendChild(h.createTextNode(String.fromCharCode(9660)));for(var g=arguments.length,v=new Array(g>7?g-7:0),p=7;p<g;p++)v[p-7]=arguments[p];if(Object(i.b)(f).apply(this,[e,t,r,s,c,l,u].concat(v)),t.firstChild||t.appendChild(h.createTextNode(String.fromCharCode(160))),t.insertBefore(d,t.firstChild),Object(n.addClass)(t,"htAutocomplete"),!e.acArrowListener){var y=new a.a(e);e.acArrowListener=function(a){Object(n.hasClass)(a.target,"htAutocompleteArrow")&&e.view.wt.getSetting("onCellDblClick",null,new o.a(r,s),t)},y.addEventListener(e.rootElement,"mousedown",e.acArrowListener),e.addHookOnce("afterDestroy",(function(){y.destroy()}))}}},557:function(e,t,r){"use strict";r(33),r(52),r(8),r(5),r(16),r(62),r(9),r(38),r(10),r(57);var n=r(0),a=r(51),o=r(24),i=r(21),s=r(35),c=r(15),l=r(34),u=new WeakMap,h=new WeakMap;function f(e){var t=h.get(e);if(!t){var r=e.rootElement;(t=new o.a(e)).addEventListener(r,"click",(function(t){return function(e,t){if(!v(e.target))return!1;var r=parseInt(e.target.getAttribute("data-row"),10),n=parseInt(e.target.getAttribute("data-col"),10);t.getCellMeta(r,n).readOnly&&e.preventDefault()}(t,e)})),t.addEventListener(r,"mouseup",(function(t){return function(e,t){if(!v(e.target))return;setTimeout(t.listen,10)}(t,e)})),t.addEventListener(r,"change",(function(t){return function(e,t){if(!v(e.target))return!1;var r=parseInt(e.target.getAttribute("data-row"),10),n=parseInt(e.target.getAttribute("data-col"),10),a=t.getCellMeta(r,n);if(!a.readOnly){var o=null;o=e.target.checked?void 0===a.uncheckedTemplate||a.checkedTemplate:void 0!==a.uncheckedTemplate&&a.uncheckedTemplate,t.setDataAtCell(r,n,o)}}(t,e)})),h.set(e,t)}return t}function d(e){var t=e.createElement("input");return t.className="htCheckboxRendererInput",t.type="checkbox",t.setAttribute("autocomplete","off"),t.setAttribute("tabindex","-1"),t.cloneNode(!1)}function g(e,t){var r=e.createElement("label");return r.className="htCheckboxRendererLabel",r.appendChild(e.createTextNode(t)),r.cloneNode(!0)}function v(e){return"INPUT"===e.tagName&&"checkbox"===e.getAttribute("type")}t.a=function(e,t,r,o,h,v,p){for(var y=e.rootDocument,m=arguments.length,b=new Array(m>7?m-7:0),w=7;w<m;w++)b[w-7]=arguments[w];Object(l.b)("base").apply(this,[e,t,r,o,h,v,p].concat(b)),f(e);var C=d(y),k=p.label,O=!1;if(void 0===p.checkedTemplate&&(p.checkedTemplate=!0),void 0===p.uncheckedTemplate&&(p.uncheckedTemplate=!1),Object(n.empty)(t),v===p.checkedTemplate||Object(a.equalsIgnoreCase)(v,p.checkedTemplate)?C.checked=!0:v===p.uncheckedTemplate||Object(a.equalsIgnoreCase)(v,p.uncheckedTemplate)?C.checked=!1:null===v?Object(n.addClass)(C,"noValue"):(C.style.display="none",Object(n.addClass)(C,"htBadValue"),O=!0),C.setAttribute("data-row",r),C.setAttribute("data-col",o),!O&&k){var R="";if(k.value)R="function"==typeof k.value?k.value.call(this,r,o,h,v):k.value;else if(k.property){var S=e.getDataAtRowProp(r,k.property);R=null!==S?S:""}var j=g(y,R);"before"===k.position?j.appendChild(C):j.insertBefore(C,j.firstChild),C=j}function E(t){var r=Object(s.partial)(i.isKey,t.keyCode);!e.getSettings().enterBeginsEditing&&r("ENTER")||(r("".concat("SPACE|ENTER","|").concat("DELETE|BACKSPACE"))&&!Object(c.isImmediatePropagationStopped)(t)&&H((function(){Object(c.stopImmediatePropagation)(t),t.preventDefault()})),r("SPACE|ENTER")&&L(),r("DELETE|BACKSPACE")&&L(!0))}function L(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=e.getSelectedRangeLast();if(r){for(var n=r.getTopLeftCorner(),a=n.row,o=n.col,i=r.getBottomRightCorner(),s=i.row,c=i.col,l=[],u=a;u<=s;u+=1)for(var h=o;h<=c;h+=1){var f=e.getCellMeta(u,h);if("checkbox"!==f.type)return;if(!0!==f.readOnly){void 0===f.checkedTemplate&&(f.checkedTemplate=!0),void 0===f.uncheckedTemplate&&(f.uncheckedTemplate=!1);var d=e.getDataAtCell(u,h);!1===t?[f.checkedTemplate,f.checkedTemplate.toString()].includes(d)?l.push([u,h,f.uncheckedTemplate]):[f.uncheckedTemplate,f.uncheckedTemplate.toString(),null,void 0].includes(d)&&l.push([u,h,f.checkedTemplate]):l.push([u,h,f.uncheckedTemplate])}}l.length>0&&e.setDataAtCell(l)}}function H(t){var r=e.getSelectedRangeLast();if(r)for(var n=r.getTopLeftCorner(),a=r.getBottomRightCorner(),o=n.row;o<=a.row;o++)for(var i=n.col;i<=a.col;i++){var s=e.getCellMeta(o,i);if("checkbox"!==s.type)return;var c=e.getCell(o,i);if(null==c)t(o,i,s);else{var l=c.querySelectorAll("input[type=checkbox]");l.length>0&&!s.readOnly&&t(l)}}}t.appendChild(C),O&&t.appendChild(y.createTextNode("#bad-value#")),u.has(e)||(u.set(e,!0),e.addHook("beforeKeyDown",E))}},558:function(e,t,r){"use strict";r(33);var n=r(0),a=r(34);t.a=function(e,t,r,o,i,s){for(var c=arguments.length,l=new Array(c>6?c-6:0),u=6;u<c;u++)l[u-6]=arguments[u];Object(a.b)("base").apply(this,[e,t,r,o,i,s].concat(l)),Object(n.fastInnerHTML)(t,null==s?"":s)}},559:function(e,t,r){"use strict";r(27),r(82),r(39),r(66),r(81);var n=r(126),a=r.n(n),o=r(34),i=r(4);t.a=function(e,t,r,n,s,c,l){var u=c;if(Object(i.isNumeric)(u)){var h=l.numericFormat,f=h&&h.culture||"-",d=h&&h.pattern,g=l.className||"",v=g.length?g.split(" "):[];if(void 0!==f&&!a.a.languages()[f]){var p=f.replace("-",""),y=a.a.allLanguages?a.a.allLanguages[f]:a.a[p];y&&a.a.registerLanguage(y)}a.a.setLanguage(f),u=a()(u).format(d||"0"),v.indexOf("htLeft")<0&&v.indexOf("htCenter")<0&&v.indexOf("htRight")<0&&v.indexOf("htJustify")<0&&v.push("htRight"),v.indexOf("htNumeric")<0&&v.push("htNumeric"),l.className=v.join(" ")}Object(o.b)("text")(e,t,r,n,s,u,l)}},560:function(e,t,r){"use strict";r(33);var n=r(0),a=r(34),o=r(4);t.a=function(e,t,r,i,s,c,l){for(var u=arguments.length,h=new Array(u>7?u-7:0),f=7;f<u;f++)h[f-7]=arguments[f];Object(a.b)("text").apply(this,[e,t,r,i,s,c,l].concat(h));var d=l.hashLength||t.innerHTML.length,g=l.hashSymbol||"*",v="";Object(o.rangeEach)(d-1,(function(){v+=g})),Object(n.fastInnerHTML)(t,v)}},561:function(e,t,r){"use strict";r(33),r(39),r(66);var n=r(0),a=r(14),o=r(34);t.a=function(e,t,r,i,s,c,l){for(var u=arguments.length,h=new Array(u>7?u-7:0),f=7;f<u;f++)h[f-7]=arguments[f];Object(o.b)("base").apply(this,[e,t,r,i,s,c,l].concat(h));var d=c;if(!d&&l.placeholder&&(d=l.placeholder),d=Object(a.stringify)(d),e.getSettings().trimWhitespace||(d=d.replace(/ /g,String.fromCharCode(160))),l.rendererTemplate){Object(n.empty)(t);var g=e.rootDocument.createElement("TEMPLATE");g.setAttribute("bind","{{}}"),g.innerHTML=l.rendererTemplate,HTMLTemplateElement.decorate(g),g.model=e.getSourceDataAtRow(r),t.appendChild(g)}else Object(n.fastInnerText)(t,d)}},582:function(e,t,r){"use strict";var n=r(7);t.a=function(e){var t=e.activeHeaderClassName;return new n.c({highlightHeaderClassName:t})}},583:function(e,t,r){"use strict";var n=r(7);t.a=function(e){var t=e.layerLevel,r=e.areaCornerVisible;return new n.c({className:"area",markIntersections:!0,layerLevel:Math.min(t,7),border:{width:1,color:"#4b89ff",cornerVisible:r}})}},584:function(e,t,r){"use strict";var n=r(7);t.a=function(e){var t=e.cellCornerVisible;return new n.c({className:"current",border:{width:2,color:"#4b89ff",cornerVisible:t}})}},585:function(e,t,r){"use strict";var n=r(7);t.a=function(e){var t=e.border,r=e.cellRange;return new n.c(t,r)}},586:function(e,t,r){"use strict";var n=r(7);t.a=function(){return new n.c({className:"fill",border:{width:1,color:"#ff0000"}})}},587:function(e,t,r){"use strict";var n=r(7);t.a=function(e){var t=e.headerClassName,r=e.rowClassName,a=e.columnClassName;return new n.c({className:"highlight",highlightHeaderClassName:t,highlightRowClassName:r,highlightColumnClassName:a})}},588:function(e,t,r){"use strict";r(11),r(12),r(13),r(52),r(8),r(141),r(5),r(62),r(9),r(10);var n=r(7);function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.ranges=[]}var t,r,o;return t=e,(r=[{key:"isEmpty",value:function(){return 0===this.size()}},{key:"set",value:function(e){return this.clear(),this.ranges.push(new n.b(e)),this}},{key:"add",value:function(e){return this.ranges.push(new n.b(e)),this}},{key:"current",value:function(){return this.peekByIndex(0)}},{key:"previous",value:function(){return this.peekByIndex(-1)}},{key:"includes",value:function(e){return this.ranges.some((function(t){return t.includes(e)}))}},{key:"clear",value:function(){return this.ranges.length=0,this}},{key:"size",value:function(){return this.ranges.length}},{key:"peekByIndex",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=this.size()+t-1;return r>=0&&(e=this.ranges[r]),e}},{key:Symbol.iterator,value:function(){return this.ranges[Symbol.iterator]()}}])&&a(t.prototype,r),o&&a(t,o),e}();t.a=o},589:function(e,t,r){"use strict";var n=r(7),a=r(2),o=r(53);function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var s=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.range=t,this.options=r}var t,r,a;return t=e,(r=[{key:"transformStart",value:function(e,t,r){var a=new n.a(e,t);this.runLocalHooks("beforeTransformStart",a);var o=this.options.countRows(),i=this.options.countCols(),s=this.options.fixedRowsBottom(),c=this.options.minSpareRows(),l=this.options.minSpareCols(),u=this.options.autoWrapRow(),h=this.options.autoWrapCol(),f=this.range.current().highlight;f.row+e>o-1?r&&c>0&&!(s&&f.row>=o-s-1)?(this.runLocalHooks("insertRowRequire",o),o=this.options.countRows()):h&&(a.row=1-o,a.col=f.col+a.col===i-1?1-i:1):h&&f.row+a.row<0&&f.col+a.col>=0&&(a.row=o-1,a.col=f.col+a.col===0?i-1:-1),f.col+a.col>i-1?r&&l>0?(this.runLocalHooks("insertColRequire",i),i=this.options.countCols()):u&&(a.row=f.row+a.row===o-1?1-o:1,a.col=1-i):u&&f.col+a.col<0&&f.row+a.row>=0&&(a.row=f.row+a.row===0?o-1:-1,a.col=i-1);var d=new n.a(f.row+a.row,f.col+a.col),g=0,v=0;return d.row<0?(g=-1,d.row=0):d.row>0&&d.row>=o&&(g=1,d.row=o-1),d.col<0?(v=-1,d.col=0):d.col>0&&d.col>=i&&(v=1,d.col=i-1),this.runLocalHooks("afterTransformStart",d,g,v),d}},{key:"transformEnd",value:function(e,t){var r=new n.a(e,t);this.runLocalHooks("beforeTransformEnd",r);var a=this.options.countRows(),o=this.options.countCols(),i=this.range.current(),s=new n.a(i.to.row+r.row,i.to.col+r.col),c=0,l=0;return s.row<0?(c=-1,s.row=0):s.row>0&&s.row>=a&&(c=1,s.row=a-1),s.col<0?(l=-1,s.col=0):s.col>0&&s.col>=o&&(l=1,s.col=o-1),this.runLocalHooks("afterTransformEnd",s,c,l),s}}])&&i(t.prototype,r),a&&i(t,a),e}();Object(a.mixin)(s,o.a),t.a=s},63:function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return l})),r.d(t,"c",(function(){return g})),r.d(t,"e",(function(){return v})),r.d(t,"f",(function(){return p})),r.d(t,"g",(function(){return y})),r.d(t,"d",(function(){return m}));r(11),r(12),r(13),r(36),r(52),r(8),r(141),r(109),r(5),r(16),r(121),r(62),r(9),r(10);var n=r(7),a=r(1),o=r(14);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==s.return||s.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=0,l=1,u=[3,2],h=[["number"],["number","string"],["number","undefined"],["number","string","undefined"]],f=Symbol("root"),d=Symbol("child");function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f;if(t!==f&&t!==d)throw new Error("The second argument is used internally only and cannot be overwritten.");var r=Array.isArray(e),a=t===f,o=c;if(r){var i=e[0];if(0===e.length)o=l;else if(a&&i instanceof n.b)o=3;else if(a&&Array.isArray(i))o=g(i,d);else if(e.length>=2&&e.length<=4){var u=!e.some((function(e,t){return!h[t].includes(s(e))}));u&&(o=2)}}return o}function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.keepDirection,n=void 0!==r&&r,a=t.propToCol;if(!u.includes(e))throw new Error("Unsupported selection ranges schema type was provided.");return function(t){var r=3===e,i=r?t.from.row:t[0],s=r?t.from.col:t[1],c=r?t.to.row:t[2],l=r?t.to.col:t[3];if("function"==typeof a&&("string"==typeof s&&(s=a(s)),"string"==typeof l&&(l=a(l))),Object(o.isUndefined)(c)&&(c=i),Object(o.isUndefined)(l)&&(l=s),!n){var u=i,h=s,f=c,d=l;i=Math.min(u,f),s=Math.min(h,d),c=Math.max(u,f),l=Math.max(h,d)}return[i,s,c,l]}}function p(e){var t=g(e);if(t===c||t===l)return[];var r=v(t),n=new Set;Object(a.arrayEach)(e,(function(e){var t=i(r(e),4),o=t[1],s=t[3]-o+1;Object(a.arrayEach)(Array.from(new Array(s),(function(e,t){return o+t})),(function(e){n.has(e)||n.add(e)}))}));var o=Array.from(n).sort((function(e,t){return e-t}));return Object(a.arrayReduce)(o,(function(e,t,r,n){return 0!==r&&t===n[r-1]+1?e[e.length-1][1]+=1:e.push([t,1]),e}),[])}function y(e){var t=g(e);if(t===c||t===l)return[];var r=v(t),n=new Set;Object(a.arrayEach)(e,(function(e){var t=i(r(e),3),o=t[0],s=t[2]-o+1;Object(a.arrayEach)(Array.from(new Array(s),(function(e,t){return o+t})),(function(e){n.has(e)||n.add(e)}))}));var o=Array.from(n).sort((function(e,t){return e-t}));return Object(a.arrayReduce)(o,(function(e,t,r,n){return 0!==r&&t===n[r-1]+1?e[e.length-1][1]+=1:e.push([t,1]),e}),[])}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1/0;return"number"==typeof e&&e>=0&&e<t}}}]);