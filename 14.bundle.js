(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{292:function(e,t,n){"use strict";n.r(t);var o=n(485);n.d(t,"PersistentState",(function(){return o.a}));var r=n(486);n.d(t,"AutoColumnSize",(function(){return r.a}));var i=n(487);n.d(t,"AutoFill",(function(){return i.a}));var a=n(488);n.d(t,"AutoRowSize",(function(){return a.a}));var s=n(226);n.d(t,"ColumnSorting",(function(){return s.a}));var u=n(490);n.d(t,"Comments",(function(){return u.a}));var l=n(491);n.d(t,"ContextMenu",(function(){return l.a}));var c=n(492);n.d(t,"CopyPaste",(function(){return c.a}));var d=n(493);n.d(t,"CustomBorders",(function(){return d.a}));var h=n(499);n.d(t,"DragToScroll",(function(){return h.a}));var f=n(500);n.d(t,"ManualColumnFreeze",(function(){return f.a}));var y=n(501);n.d(t,"ManualColumnMove",(function(){return y.a}));var v=n(502);n.d(t,"ManualColumnResize",(function(){return v.a}));var b=n(503);n.d(t,"ManualRowMove",(function(){return b.a}));var g=n(504);n.d(t,"ManualRowResize",(function(){return g.a}));var w=n(505);n.d(t,"MergeCells",(function(){return w.a}));var p=n(506);n.d(t,"MultipleSelectionHandles",(function(){return p.a}));var m=n(507);n.d(t,"ObserveChanges",(function(){return m.a}));var C=n(508);n.d(t,"Search",(function(){return C.a}));var R=n(509);n.d(t,"TouchScroll",(function(){return R.a}));var H=n(510);n.d(t,"UndoRedo",(function(){return H.a}));var O=n(22);n.d(t,"Base",(function(){return O.a}));var S=n(511);n.d(t,"BindRowsWithHeaders",(function(){return S.a}));var k=n(514);n.d(t,"CollapsibleColumns",(function(){return k.a}));var j=n(515);n.d(t,"ColumnSummary",(function(){return j.a}));var E=n(516);n.d(t,"DropdownMenu",(function(){return E.a}));var A=n(517);n.d(t,"ExportFile",(function(){return A.a}));var P=n(518);n.d(t,"MultiColumnSorting",(function(){return P.a}));var M=n(519);n.d(t,"Filters",(function(){return M.a}));var N=n(523);n.d(t,"Formulas",(function(){return N.a}));var T=n(524);n.d(t,"GanttChart",(function(){return T.a}));var _=n(525);n.d(t,"HeaderTooltips",(function(){return _.a}));var x=n(526);n.d(t,"NestedHeaders",(function(){return x.a}));var D=n(527);n.d(t,"NestedRows",(function(){return D.a}));var G=n(528);n.d(t,"HiddenColumns",(function(){return G.a}));var B=n(529);n.d(t,"HiddenRows",(function(){return B.a}));var I=n(530);n.d(t,"TrimRows",(function(){return I.a}))},525:function(e,t,n){"use strict";n(11),n(12),n(13),n(8),n(30),n(17),n(18),n(5),n(31),n(9),n(10);var o=n(0),r=n(19),i=n(4);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e,t,n){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=u(this,c(t).call(this,e))).settings=null,n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(r=[{key:"isEnabled",value:function(){return!!this.hot.getSettings().headerTooltips}},{key:"enablePlugin",value:function(){var e=this;this.enabled||(this.settings=this.hot.getSettings().headerTooltips,this.parseSettings(),this.addHook("afterGetColHeader",(function(t,n){return e.onAfterGetHeader(t,n)})),this.addHook("afterGetRowHeader",(function(t,n){return e.onAfterGetHeader(t,n)})),l(c(t.prototype),"enablePlugin",this).call(this))}},{key:"disablePlugin",value:function(){this.settings=null,this.clearTitleAttributes(),l(c(t.prototype),"disablePlugin",this).call(this)}},{key:"parseSettings",value:function(){"boolean"==typeof this.settings&&(this.settings={rows:!0,columns:!0,onlyTrimmed:!1})}},{key:"clearTitleAttributes",value:function(){var e=this.hot.view.wt.getSetting("columnHeaders").length,t=this.hot.view.wt.wtTable.THEAD,n=this.hot.view.wt.wtOverlays.topOverlay.clone.wtTable.THEAD,o=this.hot.view.wt.wtOverlays.topLeftCornerOverlay,r=o?o.clone.wtTable.THEAD:null;Object(i.rangeEach)(0,e-1,(function(e){var o=t.childNodes[e],a=n.childNodes[e],s=r?r.childNodes[e]:null;Object(i.rangeEach)(0,o.childNodes.length-1,(function(e){o.childNodes[e].removeAttribute("title"),a&&a.childNodes[e]&&a.childNodes[e].removeAttribute("title"),r&&s&&s.childNodes[e]&&s.childNodes[e].removeAttribute("title")}))}),!0)}},{key:"onAfterGetHeader",value:function(e,t){var n=t.querySelector("span"),r="THEAD"===t.parentNode.parentNode.nodeName;(r&&this.settings.columns||!r&&this.settings.rows)&&(this.settings.onlyTrimmed?Object(o.outerWidth)(n)>=Object(o.outerWidth)(t)&&0!==Object(o.outerWidth)(n)&&t.setAttribute("title",n.textContent):t.setAttribute("title",n.textContent))}},{key:"destroy",value:function(){this.settings=null,l(c(t.prototype),"destroy",this).call(this)}}])&&s(n.prototype,r),a&&s(n,a),t}(n(22).a);Object(r.d)("headerTooltips",h),t.a=h},528:function(e,t,n){"use strict";n(11),n(12),n(13),n(33),n(144),n(73),n(37),n(52),n(27),n(8),n(85),n(56),n(123),n(124),n(30),n(17),n(18),n(5),n(31),n(40),n(125),n(63),n(9),n(84),n(10);var o=n(22),r=n(0),i=n(4),a=n(1),s=n(19),u=n(25),l=n(20),c=n(637),d=n(638);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function y(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e,t,n){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}l.a.getSingleton().register("beforeHideColumns"),l.a.getSingleton().register("afterHideColumns"),l.a.getSingleton().register("beforeUnhideColumns"),l.a.getSingleton().register("afterUnhideColumns");var w=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=y(this,b(t).call(this,e))).settings={},n.hiddenColumns=[],n.lastSelectedColumn=-1,n}var n,o,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,e),n=t,(o=[{key:"isEnabled",value:function(){return!!this.hot.getSettings().hiddenColumns}},{key:"enablePlugin",value:function(){var e=this;this.enabled||(this.hot.hasColHeaders()?this.addHook("afterGetColHeader",(function(t,n){return e.onAfterGetColHeader(t,n)})):this.addHook("afterRenderer",(function(t,n,o){return e.onAfterGetColHeader(o,t)})),this.addHook("afterContextMenuDefaultOptions",(function(t){return e.onAfterContextMenuDefaultOptions(t)})),this.addHook("afterGetCellMeta",(function(t,n,o){return e.onAfterGetCellMeta(t,n,o)})),this.addHook("modifyColWidth",(function(t,n){return e.onModifyColWidth(t,n)})),this.addHook("beforeSetRangeStartOnly",(function(t){return e.onBeforeSetRangeStart(t)})),this.addHook("beforeSetRangeEnd",(function(t){return e.onBeforeSetRangeEnd(t)})),this.addHook("hiddenColumn",(function(t){return e.isHidden(t)})),this.addHook("beforeStretchingColumnWidth",(function(t,n){return e.onBeforeStretchingColumnWidth(t,n)})),this.addHook("afterCreateCol",(function(t,n){return e.onAfterCreateCol(t,n)})),this.addHook("afterRemoveCol",(function(t,n){return e.onAfterRemoveCol(t,n)})),this.addHook("init",(function(){return e.onInit()})),this.hot.view&&this.onInit(),v(b(t.prototype),"enablePlugin",this).call(this))}},{key:"updatePlugin",value:function(){this.disablePlugin(),this.enablePlugin(),v(b(t.prototype),"updatePlugin",this).call(this)}},{key:"disablePlugin",value:function(){this.settings={},this.hiddenColumns=[],this.lastSelectedColumn=-1,this.hot.render(),v(b(t.prototype),"disablePlugin",this).call(this),this.resetCellsMeta()}},{key:"showColumns",value:function(e){var t=this.hiddenColumns,n=this.isColumnDataValid(e),o=t;n&&(o=this.hiddenColumns.filter((function(t){return!1===e.includes(t)}))),!1!==this.hot.runHooks("beforeUnhideColumns",t,o,n)&&(n&&(this.hiddenColumns=o),this.hot.runHooks("afterUnhideColumns",t,o,n,n&&o.length<t.length))}},{key:"showColumn",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.showColumns(t)}},{key:"hideColumns",value:function(e){var t=this.hiddenColumns,n=this.isColumnDataValid(e),o=t;n&&(o=Array.from(new Set(t.concat(e)))),!1!==this.hot.runHooks("beforeHideColumns",t,o,n)&&(n&&(this.hiddenColumns=o),this.hot.runHooks("afterHideColumns",t,o,n,n&&o.length>t.length))}},{key:"hideColumn",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.hideColumns(t)}},{key:"isHidden",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e;return t||(n=this.hot.toPhysicalColumn(e)),this.hiddenColumns.includes(n)}},{key:"isColumnDataValid",value:function(e){var t=this;return e.every((function(e){return Number.isInteger(e)&&e>=0&&e<t.hot.countCols()}))}},{key:"resetCellsMeta",value:function(){Object(a.arrayEach)(this.hot.getCellsMeta(),(function(e){e&&(e.skipColumnOnPaste=!1,null!==e.baseRenderer&&(e.renderer=e.baseRenderer,e.baseRenderer=null))}))}},{key:"onBeforeStretchingColumnWidth",value:function(e,t){var n=e;return this.isHidden(t)&&(n=0),n}},{key:"onModifyColWidth",value:function(e,t){return this.isHidden(t)?.1:this.settings.indicators&&(this.isHidden(t+1)||this.isHidden(t-1))?e+(this.hot.hasColHeaders()?15:0):void 0}},{key:"onAfterGetCellMeta",value:function(e,t,n){var o=this.hot.runHooks("unmodifyCol",t);if(!1===this.settings.copyPasteEnabled&&this.isHidden(t)&&(n.skipColumnOnPaste=!0),this.isHidden(o)?(n.renderer!==p&&(n.baseRenderer=n.renderer),n.renderer=p):null!==n.baseRenderer&&(n.renderer=n.baseRenderer,n.baseRenderer=null),this.isHidden(n.visualCol-1)){var r=!0,i=n.visualCol-1;n.className=n.className||"",-1===n.className.indexOf("afterHiddenColumn")&&(n.className+=" afterHiddenColumn");do{if(!this.isHidden(i)){r=!1;break}i-=1}while(i>=0);r&&-1===n.className.indexOf("firstVisibleColumn")&&(n.className+=" firstVisibleColumn")}else if(n.className){var a=n.className.split(" ");if(a.length){var s=a.indexOf("afterHiddenColumn");s>-1&&a.splice(s,1);var u=a.indexOf("firstVisibleColumn");u>-1&&a.splice(u,1),n.className=a.join(" ")}}}},{key:"onModifyCopyableRange",value:function(e){var t=this,n=[],o=function(e,t,o,r){n.push({startRow:e,endRow:t,startCol:o,endCol:r})};return Object(a.arrayEach)(e,(function(e){var n=!0,r=0;Object(i.rangeEach)(e.startCol,e.endCol,(function(i){t.isHidden(i)?(n||o(e.startRow,e.endRow,r,i-1),n=!0):(n&&(r=i),i===e.endCol&&o(e.startRow,e.endRow,r,i),n=!1)}))})),n}},{key:"onAfterGetColHeader",value:function(e,t){if(!this.isHidden(e)){var n=!0,o=e-1;do{if(!this.isHidden(o)){n=!1;break}o-=1}while(o>=0);n&&Object(r.addClass)(t,"firstVisibleColumn"),this.settings.indicators&&(this.isHidden(e-1)&&Object(r.addClass)(t,"afterHiddenColumn"),this.isHidden(e+1)&&e>-1&&Object(r.addClass)(t,"beforeHiddenColumn"))}}},{key:"onBeforeSetRangeStart",value:function(e){var t=this;e.col>0||(e.col=0,e.col=function e(n){var o=n,r=t.hot.toPhysicalColumn(o);return t.isHidden(r,!0)&&(o=e(o+=1)),o}(e.col))}},{key:"onBeforeSetRangeEnd",value:function(e){var t=this,n=this.hot.countCols();e.col=function o(r){var a=r,s=t.hot.toPhysicalColumn(a);return t.isHidden(s,!0)&&(t.lastSelectedColumn>a||e.col===n-1?a>0?a=o(a-=1):Object(i.rangeEach)(0,t.lastSelectedColumn,(function(e){if(!t.isHidden(e))return a=e,!1})):a=o(a+=1)),a}(e.col),this.lastSelectedColumn=e.col}},{key:"onAfterContextMenuDefaultOptions",value:function(e){e.items.push({name:u.m},Object(c.a)(this),Object(d.a)(this))}},{key:"onAfterCreateCol",value:function(e,t){var n=[];Object(a.arrayEach)(this.hiddenColumns,(function(o){var r=o;r>=e&&(r+=t),n.push(r)})),this.hiddenColumns=n}},{key:"onAfterRemoveCol",value:function(e,t){var n=[];Object(a.arrayEach)(this.hiddenColumns,(function(o){var r=o;r>=e&&(r-=t),n.push(r)})),this.hiddenColumns=n}},{key:"onInit",value:function(){var e=this,t=this.hot.getSettings().hiddenColumns;"object"===h(t)&&(this.settings=t,void 0===t.copyPasteEnabled&&(t.copyPasteEnabled=!0),Array.isArray(t.columns)&&this.hideColumns(t.columns),t.copyPasteEnabled||this.addHook("modifyCopyableRange",(function(t){return e.onModifyCopyableRange(t)})))}},{key:"destroy",value:function(){v(b(t.prototype),"destroy",this).call(this)}}])&&f(n.prototype,o),s&&f(n,s),t}(o.a);function p(e,t){t.textContent=""}Object(s.d)("hiddenColumns",w),t.a=w},529:function(e,t,n){"use strict";n(11),n(12),n(13),n(33),n(144),n(73),n(37),n(52),n(27),n(8),n(85),n(56),n(123),n(124),n(30),n(17),n(18),n(5),n(31),n(40),n(125),n(63),n(9),n(84),n(10);var o=n(22),r=n(0),i=n(4),a=n(1),s=n(19),u=n(20),l=n(639),c=n(640);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e,t,n){return(y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}u.a.getSingleton().register("beforeHideRows"),u.a.getSingleton().register("afterHideRows"),u.a.getSingleton().register("beforeUnhideRows"),u.a.getSingleton().register("afterUnhideRows");var g=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=f(this,v(t).call(this,e))).settings={},n.hiddenRows=[],n.lastSelectedRow=-1,n}var n,o,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),n=t,(o=[{key:"isEnabled",value:function(){return!!this.hot.getSettings().hiddenRows}},{key:"enablePlugin",value:function(){var e=this;this.enabled||(this.hot.hasRowHeaders()?this.addHook("afterGetRowHeader",(function(t,n){return e.onAfterGetRowHeader(t,n)})):this.addHook("afterRenderer",(function(t,n){return e.onAfterGetRowHeader(n,t)})),this.addHook("afterContextMenuDefaultOptions",(function(t){return e.onAfterContextMenuDefaultOptions(t)})),this.addHook("afterGetCellMeta",(function(t,n,o){return e.onAfterGetCellMeta(t,n,o)})),this.addHook("modifyRowHeight",(function(t,n){return e.onModifyRowHeight(t,n)})),this.addHook("beforeSetRangeStartOnly",(function(t){return e.onBeforeSetRangeStartOnly(t)})),this.addHook("beforeSetRangeStart",(function(t){return e.onBeforeSetRangeStart(t)})),this.addHook("beforeSetRangeEnd",(function(t){return e.onBeforeSetRangeEnd(t)})),this.addHook("hiddenRow",(function(t){return e.isHidden(t)})),this.addHook("afterCreateRow",(function(t,n){return e.onAfterCreateRow(t,n)})),this.addHook("afterRemoveRow",(function(t,n){return e.onAfterRemoveRow(t,n)})),this.addHook("init",(function(){return e.onInit()})),this.hot.view&&this.onInit(),y(v(t.prototype),"enablePlugin",this).call(this))}},{key:"updatePlugin",value:function(){this.disablePlugin(),this.enablePlugin(),this.onInit(),y(v(t.prototype),"updatePlugin",this).call(this)}},{key:"disablePlugin",value:function(){this.settings={},this.hiddenRows=[],this.lastSelectedRow=-1,y(v(t.prototype),"disablePlugin",this).call(this),this.resetCellsMeta()}},{key:"showRows",value:function(e){var t=this,n=this.hiddenRows,o=this.isRowDataValid(e),r=Object(a.arrayMap)(e,(function(e){return t.hot.toPhysicalRow(e)})),i=n;o&&(i=this.hiddenRows.filter((function(e){return!1===r.includes(e)}))),!1!==this.hot.runHooks("beforeUnhideRows",n,i,o)&&(o&&(this.hiddenRows=i),this.hot.runHooks("afterUnhideRows",n,i,o,o&&i.length<n.length))}},{key:"showRow",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.showRows(t)}},{key:"hideRows",value:function(e){var t=this,n=this.hiddenRows,o=this.isRowDataValid(e),r=Object(a.arrayMap)(e,(function(e){return t.hot.toPhysicalRow(e)})),i=n;o&&(i=Array.from(new Set(n.concat(r)))),!1!==this.hot.runHooks("beforeHideRows",n,i,o)&&(o&&(this.hiddenRows=i),this.hot.runHooks("afterHideRows",n,i,o,o&&i.length>n.length))}},{key:"hideRow",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.hideRows(t)}},{key:"isHidden",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e;return t||(n=this.hot.toPhysicalRow(e)),this.hiddenRows.includes(n)}},{key:"isRowDataValid",value:function(e){var t=this;return e.every((function(e){return Number.isInteger(e)&&e>=0&&e<t.hot.countRows()}))}},{key:"resetCellsMeta",value:function(){Object(a.arrayEach)(this.hot.getCellsMeta(),(function(e){e&&(e.skipRowOnPaste=!1)}))}},{key:"onAfterGetCellMeta",value:function(e,t,n){var o=this.hot.runHooks("unmodifyRow",e);if(!1===this.settings.copyPasteEnabled&&this.isHidden(o)?n.skipRowOnPaste=!0:n.skipRowOnPaste=!1,this.isHidden(o-1)){var r=!0,i=o-1;n.className=n.className||"",-1===n.className.indexOf("afterHiddenRow")&&(n.className+=" afterHiddenRow");do{if(!this.isHidden(i)){r=!1;break}i-=1}while(i>=0);r&&-1===n.className.indexOf("firstVisibleRow")&&(n.className+=" firstVisibleRow")}else if(n.className){var a=n.className.split(" ");if(a.length){var s=a.indexOf("afterHiddenRow");s>-1&&a.splice(s,1);var u=a.indexOf("firstVisibleRow");u>-1&&a.splice(u,1),n.className=a.join(" ")}}}},{key:"onAfterGetRowHeader",value:function(e,t){var n=t.parentNode;n&&(this.isHidden(e)?Object(r.addClass)(n,"hide"):Object(r.removeClass)(n,"hide"));var o=!0,i=e-1;do{if(!this.isHidden(i)){o=!1;break}i-=1}while(i>=0);o&&Object(r.addClass)(t,"firstVisibleRow"),this.settings.indicators&&this.hot.hasRowHeaders()&&(this.isHidden(e-1)&&Object(r.addClass)(t,"afterHiddenRow"),this.isHidden(e+1)&&Object(r.addClass)(t,"beforeHiddenRow"))}},{key:"onModifyRowHeight",value:function(e,t){return this.isHidden(t)?.1:e}},{key:"onModifyCopyableRange",value:function(e){var t=this,n=[],o=function(e,t,o,r){n.push({startRow:e,endRow:t,startCol:o,endCol:r})};return Object(a.arrayEach)(e,(function(e){var n=!0,r=0;Object(i.rangeEach)(e.startRow,e.endRow,(function(i){t.isHidden(i)?(n||o(r,i-1,e.startCol,e.endCol),n=!0):(n&&(r=i),i===e.endRow&&o(r,i,e.startCol,e.endCol),n=!1)}))})),n}},{key:"onBeforeSetRangeStart",value:function(e){var t=this,n=this.hot.getSelectedLast()||!1,o=this.hot.countRows()-1;e.row=function e(r){var i=0,a=r;return n&&(i=a>n[0]?1:-1,t.lastSelectedRow=n[0]),o<a||a<0?t.lastSelectedRow:(t.isHidden(a)&&(a=e(a+i)),a)}(e.row)}},{key:"onBeforeSetRangeStartOnly",value:function(e){var t=this;e.row>0||(e.row=0,e.row=function e(n){var o=n;return t.isHidden(o)&&(o=e(o+=1)),o}(e.row))}},{key:"onBeforeSetRangeEnd",value:function(e){var t=this,n=this.hot.countRows();e.row=function o(r){var a=r;return t.isHidden(a)&&(t.lastSelectedRow>a||e.row===n-1?a>0?a=o(a-=1):Object(i.rangeEach)(0,t.lastSelectedRow,(function(e){if(!t.isHidden(e))return a=e,!1})):a=o(a+=1)),a}(e.row),this.lastSelectedRow=e.row}},{key:"onAfterContextMenuDefaultOptions",value:function(e){e.items.push({name:"---------"},Object(l.a)(this),Object(c.a)(this))}},{key:"onAfterCreateRow",value:function(e,t){var n=[];Object(a.arrayEach)(this.hiddenRows,(function(o){var r=o;r>=e&&(r+=t),n.push(r)})),this.hiddenRows=n}},{key:"onAfterRemoveRow",value:function(e,t){var n=[];Object(a.arrayEach)(this.hiddenRows,(function(o){var r=o;r>=e&&(r-=t),n.push(r)})),this.hiddenRows=n}},{key:"onInit",value:function(){var e=this,t=this.hot.getSettings().hiddenRows;"object"===d(t)&&(this.settings=t,void 0===t.copyPasteEnabled&&(t.copyPasteEnabled=!0),Array.isArray(t.rows)&&this.hideRows(t.rows),t.copyPasteEnabled||this.addHook("modifyCopyableRange",(function(t){return e.onModifyCopyableRange(t)})))}},{key:"destroy",value:function(){y(v(t.prototype),"destroy",this).call(this)}}])&&h(n.prototype,o),s&&h(n,s),t}(o.a);Object(s.d)("hiddenRows",g),t.a=g},637:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(11),n(12),n(13),n(8),n(5),n(16),n(9),n(10);var o=n(4),r=n(3);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==s.return||s.return()}finally{if(r)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function a(e){return{key:"hidden_columns_hide",name:function(){var e=this.getSelectedLast(),t=0;if(Array.isArray(e)){var n=i(e,4);n[1]-n[3]!=0&&(t=1)}return this.getTranslatedPhrase(r.CONTEXTMENU_ITEMS_HIDE_COLUMN,t)},callback:function(){var t=this.getSelectedRangeLast(),n=t.from,r=t.to,i=Math.min(n.col,r.col),a=Math.max(n.col,r.col);Object(o.rangeEach)(i,a,(function(t){return e.hideColumn(t)})),this.render(),this.view.wt.wtOverlays.adjustElementsSize(!0)},disabled:!1,hidden:function(){return!this.selection.isSelectedByColumnHeader()}}}},638:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(11),n(12),n(13),n(8),n(5),n(16),n(9),n(10);var o=n(4),r=n(3);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==s.return||s.return()}finally{if(r)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function a(e){var t=[],n=[];return{key:"hidden_columns_show",name:function(){var a=this.getSelectedLast(),s=0;if(Array.isArray(a)){var u=i(a,4),l=u[1],c=u[3];if(l>c){var d=[c,l];l=d[0],c=d[1]}var h=0;l===c?h=t.length+n.length:Object(o.rangeEach)(l,c,(function(t){e.isHidden(t)&&(h+=1)})),s=h<=1?0:1}return this.getTranslatedPhrase(r.CONTEXTMENU_ITEMS_SHOW_COLUMN,s)},callback:function(){var r=this.getSelectedRangeLast(),i=r.from,a=r.to,s=Math.min(i.col,a.col),u=Math.max(i.col,a.col);s===u?(t.length===s&&(e.showColumns(t),t.length=0),n.length===this.countSourceCols()-(s+1)&&(e.showColumns(n),n.length=0)):Object(o.rangeEach)(s,u,(function(t){return e.showColumn(t)})),this.render(),this.view.wt.wtOverlays.adjustElementsSize(!0)},disabled:!1,hidden:function(){if(!e.hiddenColumns.length||!this.selection.isSelectedByColumnHeader())return!0;t.length=0,n.length=0;var r=this.getSelectedRangeLast(),i=r.from,a=r.to,s=Math.min(i.col,a.col),u=Math.max(i.col,a.col),l=!1;if(s===u){var c=this.countSourceCols();Object(o.rangeEach)(0,c,(function(o){if(t.length+n.length===e.hiddenColumns.length)return!1;o<s&&e.isHidden(o)?t.push(o):e.isHidden(o)&&n.push(o)})),c-=1,(t.length===s&&s>0||n.length===c-s&&s<c)&&(l=!0)}else Object(o.rangeEach)(s,u,(function(t){if(e.isHidden(t))return l=!0,!1}));return!l}}}},639:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(11),n(12),n(13),n(8),n(5),n(16),n(9),n(10);var o=n(4),r=n(3);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==s.return||s.return()}finally{if(r)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function a(e){return{key:"hidden_rows_hide",name:function(){var e=this.getSelectedLast(),t=0;if(Array.isArray(e)){var n=i(e,3);n[0]-n[2]!=0&&(t=1)}return this.getTranslatedPhrase(r.CONTEXTMENU_ITEMS_HIDE_ROW,t)},callback:function(){var t=this.getSelectedRangeLast(),n=t.from,r=t.to,i=Math.min(n.row,r.row),a=Math.max(n.row,r.row);Object(o.rangeEach)(i,a,(function(t){return e.hideRow(t)})),this.render(),this.view.wt.wtOverlays.adjustElementsSize(!0)},disabled:!1,hidden:function(){return!this.selection.isSelectedByRowHeader()}}}},640:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(11),n(12),n(13),n(8),n(5),n(16),n(9),n(10);var o=n(4),r=n(3);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==s.return||s.return()}finally{if(r)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function a(e){var t=[],n=[];return{key:"hidden_rows_show",name:function(){var a=this.getSelectedLast(),s=0;if(Array.isArray(a)){var u=i(a,3),l=u[0],c=u[2];if(l>c){var d=[c,l];l=d[0],c=d[1]}var h=0;l===c?h=t.length+n.length:Object(o.rangeEach)(l,c,(function(t){e.isHidden(t)&&(h+=1)})),s=h<=1?0:1}return this.getTranslatedPhrase(r.CONTEXTMENU_ITEMS_SHOW_ROW,s)},callback:function(){var r=this.getSelectedRangeLast(),i=r.from,a=r.to,s=Math.min(i.row,a.row),u=Math.max(i.row,a.row);s===u?(t.length===s&&(e.showRows(t),t.length=0),n.length===this.countSourceRows()-(s+1)&&(e.showRows(n),n.length=0)):Object(o.rangeEach)(s,u,(function(t){return e.showRow(t)})),this.render(),this.view.wt.wtOverlays.adjustElementsSize(!0)},disabled:!1,hidden:function(){if(!e.hiddenRows.length||!this.selection.isSelectedByRowHeader())return!0;t.length=0,n.length=0;var r=this.getSelectedRangeLast(),i=r.from,a=r.to,s=Math.min(i.row,a.row),u=Math.max(i.row,a.row),l=!1;if(s===u){var c=this.countSourceRows();Object(o.rangeEach)(0,c,(function(o){if(t.length+n.length===e.hiddenRows.length)return!1;o<s?e.isHidden(o)&&t.push(o):e.isHidden(o)&&n.push(o)})),c-=1,(t.length===s&&s>0||n.length===c-s&&s<c)&&(l=!0)}else Object(o.rangeEach)(s,u,(function(t){if(e.isHidden(t))return l=!0,!1}));return!l}}}}}]);