(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{166:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return u}));n(27),n(94);var o=n(2),i=n(14),r=n(7),a={horizontal:"horizontal",vertical:"vertical"};function l(t,e,n,o){var i=n.length,r=n?n[0].length:0,a=[],l=e.row-t.row,s=e.col-t.col;if(-1!==["down","up"].indexOf(o)){for(var u=[],h=0;h<s;h++){var c=parseInt(n[0][h],10),f=parseInt(n[i-1][h],10),d=("down"===o?f-c:c-f)/(i-1)||0;u.push(d)}a.push(u)}if(-1!==["right","left"].indexOf(o))for(var g=0;g<l;g++){var v=parseInt(n[g][0],10),p=parseInt(n[g][r-1],10),b=("right"===o?p-v:v-p)/(r-1)||0;a.push([b])}return a}function s(t,e){var n,o,i;return e[0]===t[0]&&e[1]<t[1]?(i="left",n=new r.a(e[0],e[1]),o=new r.a(e[2],t[1]-1)):e[2]===t[2]&&e[0]===t[0]&&e[3]>t[3]?(i="right",n=new r.a(e[0],t[3]+1),o=new r.a(e[2],e[3])):e[0]<t[0]&&e[1]===t[1]?(i="up",n=new r.a(e[0],e[1]),o=new r.a(t[0]-1,e[3])):e[2]>t[2]&&e[1]===t[1]&&(i="down",n=new r.a(t[2]+1,e[1]),o=new r.a(e[2],e[3])),{directionOfDrag:i,startOfDragCoords:n,endOfDragCoords:o}}function u(t){var e={};return!0===t?(e.directions=Object.keys(a),e.autoInsertRow=!0):Object(o.isObject)(t)?(Object(i.isDefined)(t.autoInsertRow)?t.direction===a.horizontal?e.autoInsertRow=!1:e.autoInsertRow=t.autoInsertRow:e.autoInsertRow=!1,Object(i.isDefined)(t.direction)?e.directions=[t.direction]:e.directions=Object.keys(a)):"string"==typeof t?(e.directions=[t],e.autoInsertRow=!0):(e.directions=[],e.autoInsertRow=!1),e}},19:function(t,e,n){"use strict";n.d(e,"d",(function(){return l})),n.d(e,"a",(function(){return s})),n.d(e,"c",(function(){return u})),n.d(e,"b",(function(){return h}));n(8),n(94),n(5),n(9),n(39),n(10);var o=n(20),i=n(2),r=n(51),a=new WeakMap;function l(t,e){var n=Object(r.toUpperCaseFirst)(t);o.a.getSingleton().add("construct",(function(){a.has(this)||a.set(this,{});var t=a.get(this);t[n]||(t[n]=new e(this))})),o.a.getSingleton().add("afterDestroy",(function(){if(a.has(this)){var t=a.get(this);Object(i.objectEach)(t,(function(t){return t.destroy()})),a.delete(this)}}))}function s(t,e){if("string"!=typeof e)throw Error('Only strings can be passed as "plugin" parameter');var n=Object(r.toUpperCaseFirst)(e);if(a.has(t)&&a.get(t)[n])return a.get(t)[n]}function u(t){return a.has(t)?Object.keys(a.get(t)):[]}function h(t,e){var n=null;return a.has(t)&&Object(i.objectEach)(a.get(t),(function(t,o){t===e&&(n=o)})),n}},22:function(t,e,n){"use strict";n(27),n(8),n(55),n(5),n(9),n(39),n(10);var o=n(2),i=n(1),r=n(90),a=n(19);function l(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var s=new WeakMap,u=null,h=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),Object(o.defineGetter)(this,"hot",e,{writable:!1}),Object(o.defineGetter)(this,"t",Object(r.a)(e),{writable:!1}),s.set(this,{hooks:{}}),u=null,this.pluginName=null,this.pluginsInitializedCallbacks=[],this.isPluginsReady=!1,this.enabled=!1,this.initialized=!1,this.hot.addHook("afterPluginsInitialized",(function(){return n.onAfterPluginsInitialized()})),this.hot.addHook("afterUpdateSettings",(function(t){return n.onUpdateSettings(t)})),this.hot.addHook("beforeInit",(function(){return n.init()}))}var e,n,h;return e=t,(n=[{key:"init",value:function(){this.pluginName=Object(a.b)(this.hot,this),this.isEnabled&&this.isEnabled()&&this.enablePlugin(),u||(u=Object(a.c)(this.hot)),u.indexOf(this.pluginName)>=0&&u.splice(u.indexOf(this.pluginName),1),u.length||this.hot.runHooks("afterPluginsInitialized"),this.initialized=!0}},{key:"enablePlugin",value:function(){this.enabled=!0}},{key:"disablePlugin",value:function(){this.eventManager&&this.eventManager.clear(),this.clearHooks(),this.enabled=!1}},{key:"addHook",value:function(t,e){s.get(this).hooks[t]=s.get(this).hooks[t]||[];var n=s.get(this).hooks[t];this.hot.addHook(t,e),n.push(e),s.get(this).hooks[t]=n}},{key:"removeHooks",value:function(t){var e=this;Object(i.arrayEach)(s.get(this).hooks[t]||[],(function(n){e.hot.removeHook(t,n)}))}},{key:"clearHooks",value:function(){var t=this,e=s.get(this).hooks;Object(o.objectEach)(e,(function(e,n){return t.removeHooks(n)})),e.length=0}},{key:"callOnPluginsReady",value:function(t){this.isPluginsReady?t():this.pluginsInitializedCallbacks.push(t)}},{key:"onAfterPluginsInitialized",value:function(){Object(i.arrayEach)(this.pluginsInitializedCallbacks,(function(t){return t()})),this.pluginsInitializedCallbacks.length=0,this.isPluginsReady=!0}},{key:"onUpdateSettings",value:function(){this.isEnabled&&(this.enabled&&!this.isEnabled()&&this.disablePlugin(),!this.enabled&&this.isEnabled()&&this.enablePlugin(),this.enabled&&this.isEnabled()&&this.updatePlugin())}},{key:"updatePlugin",value:function(){}},{key:"destroy",value:function(){var t=this;this.eventManager&&this.eventManager.destroy(),this.clearHooks(),Object(o.objectEach)(this,(function(e,n){"hot"!==n&&"t"!==n&&(t[n]=null)})),delete this.t,delete this.hot}}])&&l(e.prototype,n),h&&l(e,h),t}();e.a=h},484:function(t,e,n){"use strict";n(11),n(12),n(13),n(8),n(30),n(17),n(18),n(5),n(31),n(16),n(9),n(39),n(10),n(57);var o=n(22),i=n(1),r=n(46),a=n(148),l=n(2),s=n(4),u=n(19),h=n(236),c=n(51),f=n(7);function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function g(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t))&&"[object Arguments]"!==Object.prototype.toString.call(t))return;var n=[],o=!0,i=!1,r=void 0;try{for(var a,l=t[Symbol.iterator]();!(o=(a=l.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){i=!0,r=t}finally{try{o||null==l.return||l.return()}finally{if(i)throw r}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t,e,n){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=b(t)););return t}(t,e);if(o){var i=Object.getOwnPropertyDescriptor(o,e);return i.get?i.get.call(n):i.value}})(t,e,n||t)}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function w(t,e,n){return e&&y(t.prototype,e),n&&y(t,n),t}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var C=new WeakMap,O=function(t){function e(t){var n,o,i;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),o=this,i=b(e).call(this,t),n=!i||"object"!==d(i)&&"function"!=typeof i?v(o):i,C.set(v(n),{cachedColumnHeaders:[]}),n.widths=[],n.ghostTable=new a.a(n.hot),n.samplesGenerator=new h.a((function(t,e){var o=n.hot.getCellMeta(t,e),i="";o.spanned||(i=n.hot.getDataAtCell(t,e));var r=0;if(o.label){var a=o.label,l=a.value,s=a.property,u="";if(l)u="function"==typeof l?l(t,e,n.hot.colToProp(e),i):l;else if(s){var h=n.hot.getDataAtRowProp(t,s);u=null!==h?h:""}r=u.length}return{value:i,bundleCountSeed:r}})),n.firstCalculation=!0,n.inProgress=!1,n.addHook("beforeColumnResize",(function(t,e,o){return n.onBeforeColumnResize(t,e,o)})),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(e,t),w(e,null,[{key:"CALCULATION_STEP",get:function(){return 50}},{key:"SYNC_CALCULATION_LIMIT",get:function(){return 50}}]),w(e,[{key:"isEnabled",value:function(){return!1!==this.hot.getSettings().autoColumnSize&&!this.hot.getSettings().colWidths}},{key:"enablePlugin",value:function(){var t=this;if(!this.enabled){var n=this.hot.getSettings().autoColumnSize;n&&null!==n.useHeaders&&void 0!==n.useHeaders&&this.ghostTable.setSetting("useHeaders",n.useHeaders),this.setSamplingOptions(),this.addHook("afterLoadData",(function(){return t.onAfterLoadData()})),this.addHook("beforeChange",(function(e){return t.onBeforeChange(e)})),this.addHook("beforeRender",(function(e){return t.onBeforeRender(e)})),this.addHook("modifyColWidth",(function(e,n){return t.getColumnWidth(n,e)})),this.addHook("afterInit",(function(){return t.onAfterInit()})),p(b(e.prototype),"enablePlugin",this).call(this)}}},{key:"updatePlugin",value:function(){var t=this.findColumnsWhereHeaderWasChanged();t.length&&this.clearCache(t),p(b(e.prototype),"updatePlugin",this).call(this)}},{key:"disablePlugin",value:function(){p(b(e.prototype),"disablePlugin",this).call(this)}},{key:"calculateColumnsWidth",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{from:0,to:this.hot.countCols()-1},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{from:0,to:this.hot.countRows()-1},o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r="number"==typeof e?{from:e,to:e}:e,a="number"==typeof n?{from:n,to:n}:n;Object(s.rangeEach)(r.from,r.to,(function(e){if(o||void 0===t.widths[e]&&!t.hot._getColWidthFromSettings(e)){var n=t.samplesGenerator.generateColumnSamples(e,a);Object(i.arrayEach)(n,(function(e){var n=g(e,2),o=n[0],i=n[1];return t.ghostTable.addColumn(o,i)}))}})),this.ghostTable.columns.length&&(this.ghostTable.getWidths((function(e,n){t.widths[e]=n})),this.ghostTable.clean())}},{key:"calculateAllColumnsWidth",value:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{from:0,to:this.hot.countRows()-1},o=0,i=this.hot.countCols()-1,a=null;this.inProgress=!0;var l=function l(){if(!t.hot)return Object(r.cancelAnimationFrame)(a),void(t.inProgress=!1);t.calculateColumnsWidth({from:o,to:Math.min(o+e.CALCULATION_STEP,i)},n),(o=o+e.CALCULATION_STEP+1)<i?a=Object(r.requestAnimationFrame)(l):(Object(r.cancelAnimationFrame)(a),t.inProgress=!1,t.hot.view.wt.wtOverlays.adjustElementsSize())},s=this.getSyncCalculationLimit();this.firstCalculation&&s>=0&&(this.calculateColumnsWidth({from:0,to:s},n),this.firstCalculation=!1,o=s+1),o<i?l():this.inProgress=!1}},{key:"setSamplingOptions",value:function(){var t=this.hot.getSettings().autoColumnSize,e=t&&Object(l.hasOwnProperty)(t,"samplingRatio")?this.hot.getSettings().autoColumnSize.samplingRatio:void 0,n=t&&Object(l.hasOwnProperty)(t,"allowSampleDuplicates")?this.hot.getSettings().autoColumnSize.allowSampleDuplicates:void 0;e&&!isNaN(e)&&this.samplesGenerator.setSampleCount(parseInt(e,10)),n&&this.samplesGenerator.setAllowDuplicates(n)}},{key:"recalculateAllColumnsWidth",value:function(){this.hot.view&&this.hot.view.wt.wtTable.isVisible()&&(this.clearCache(),this.calculateAllColumnsWidth())}},{key:"getSyncCalculationLimit",value:function(){var t=e.SYNC_CALCULATION_LIMIT,n=this.hot.countCols()-1;return Object(l.isObject)(this.hot.getSettings().autoColumnSize)&&(t=this.hot.getSettings().autoColumnSize.syncLimit,Object(c.isPercentValue)(t)?t=Object(s.valueAccordingPercent)(n,t):t>>=0),Math.min(t,n)}},{key:"getColumnWidth",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=e;return void 0===o&&(o=this.widths[t],n&&"number"==typeof o&&(o=Math.max(o,f.d.DEFAULT_WIDTH))),o}},{key:"getFirstVisibleColumn",value:function(){var t=this.hot.view.wt;return t.wtViewport.columnsVisibleCalculator?t.wtTable.getFirstVisibleColumn():t.wtViewport.columnsRenderCalculator?t.wtTable.getFirstRenderedColumn():-1}},{key:"getLastVisibleColumn",value:function(){var t=this.hot.view.wt;return t.wtViewport.columnsVisibleCalculator?t.wtTable.getLastVisibleColumn():t.wtViewport.columnsRenderCalculator?t.wtTable.getLastRenderedColumn():-1}},{key:"findColumnsWhereHeaderWasChanged",value:function(){var t=this.hot.getColHeader(),e=C.get(this).cachedColumnHeaders;return Object(i.arrayReduce)(t,(function(t,n,o){var i=e.length;return(i-1<o||e[o]!==n)&&t.push(o),i-1<o?e.push(n):e[o]=n,t}),[])}},{key:"clearCache",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];e.length?Object(i.arrayEach)(e,(function(e){t.widths[e]=void 0})):this.widths.length=0}},{key:"isNeedRecalculate",value:function(){return!!Object(i.arrayFilter)(this.widths,(function(t){return void 0===t})).length}},{key:"onBeforeRender",value:function(){var t=this.hot.renderCall,e=this.hot.countRows(),n=this.getFirstVisibleColumn(),o=this.getLastVisibleColumn();-1!==n&&-1!==o&&e&&(this.calculateColumnsWidth({from:n,to:o},void 0,t),this.isNeedRecalculate()&&!this.inProgress&&this.calculateAllColumnsWidth())}},{key:"onAfterLoadData",value:function(){var t=this;this.hot.view?this.recalculateAllColumnsWidth():setTimeout((function(){t.hot&&t.recalculateAllColumnsWidth()}),0)}},{key:"onBeforeChange",value:function(t){var e=this,n=Object(i.arrayMap)(t,(function(t){var n=g(t,2)[1];return e.hot.propToCol(n)}));this.clearCache(n)}},{key:"onBeforeColumnResize",value:function(t,e,n){var o=e;return n&&(this.calculateColumnsWidth(t,void 0,!0),o=this.getColumnWidth(t,void 0,!1)),o}},{key:"onAfterInit",value:function(){C.get(this).cachedColumnHeaders=this.hot.getColHeader()}},{key:"destroy",value:function(){this.ghostTable.clean(),p(b(e.prototype),"destroy",this).call(this)}}]),e}(o.a);Object(u.d)("autoColumnSize",O),e.a=O},485:function(t,e,n){"use strict";n(11),n(12),n(13),n(33),n(37),n(52),n(27),n(8),n(30),n(17),n(18),n(5),n(31),n(16),n(62),n(9),n(10),n(57);var o=n(22),i=n(20),r=n(0),a=n(1),l=n(4),s=n(24),u=n(19),h=n(7),c=n(166);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function g(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t,e,n){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=b(t)););return t}(t,e);if(o){var i=Object.getOwnPropertyDescriptor(o,e);return i.get?i.get.call(n):i.value}})(t,e,n||t)}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}i.a.getSingleton().register("modifyAutofillRange"),i.a.getSingleton().register("beforeAutofill");var w=function(t){function e(t){var n,o,i;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),o=this,(n=!(i=b(e).call(this,t))||"object"!==f(i)&&"function"!=typeof i?v(o):i).eventManager=new s.a(v(n)),n.addingStarted=!1,n.mouseDownOnCellCorner=!1,n.mouseDragOutside=!1,n.handleDraggedCells=0,n.directions=[],n.autoInsertRow=!1,n}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(e,t),n=e,(o=[{key:"isEnabled",value:function(){return this.hot.getSettings().fillHandle}},{key:"enablePlugin",value:function(){var t=this;this.enabled||(this.mapSettings(),this.registerEvents(),this.addHook("afterOnCellCornerMouseDown",(function(e){return t.onAfterCellCornerMouseDown(e)})),this.addHook("afterOnCellCornerDblClick",(function(e){return t.onCellCornerDblClick(e)})),this.addHook("beforeOnCellMouseOver",(function(e,n){return t.onBeforeCellMouseOver(n)})),p(b(e.prototype),"enablePlugin",this).call(this))}},{key:"updatePlugin",value:function(){this.disablePlugin(),this.enablePlugin(),p(b(e.prototype),"updatePlugin",this).call(this)}},{key:"disablePlugin",value:function(){this.clearMappedSettings(),p(b(e.prototype),"disablePlugin",this).call(this)}},{key:"getCopyableRanges",value:function(){var t=this.hot.getSelectedRangeLast(),e=t.getTopLeftCorner(),n=t.getBottomRightCorner(),o=e.row,i=e.col,r=n.row,a=n.col,l=[];return l.push({startRow:o,startCol:i,endRow:r,endCol:a}),l=this.hot.runHooks("modifyCopyableRange",l)}},{key:"getSelectionData",value:function(){var t=this,e=this.getCopyableRanges(),n=[],o=[],i=[];return Object(a.arrayEach)(e,(function(t){Object(l.rangeEach)(t.startRow,t.endRow,(function(t){-1===n.indexOf(t)&&n.push(t)})),Object(l.rangeEach)(t.startCol,t.endCol,(function(t){-1===o.indexOf(t)&&o.push(t)}))})),Object(a.arrayEach)(n,(function(e){var n=[];Object(a.arrayEach)(o,(function(o){n.push(t.hot.getCopyableData(e,o))})),i.push(n)})),i}},{key:"fillIn",value:function(){if(this.hot.selection.highlight.getFill().isEmpty())return!1;var t=this.hot.selection.highlight.getFill().getCorners();this.resetSelectionOfDraggedArea();var e=this.getCornersOfSelectedCells();t=this.hot.runHooks("modifyAutofillRange",t,e);var n=Object(c.c)(e,t),o=n.directionOfDrag,i=n.startOfDragCoords,r=n.endOfDragCoords;if(i&&i.row>-1&&i.col>-1){var a=this.getSelectionData();this.hot.runHooks("beforeAutofill",i,r,a);var l=Object(c.b)(i,r,a,o),s=a;if(["up","left"].indexOf(o)>-1){s=[];var u=null,h=null;if("up"===o){h=(u=r.row-i.row+1)%a.length;for(var f=0;f<u;f++)s.push(a[(f+(a.length-h))%a.length])}else{h=(u=r.col-i.col+1)%a[0].length;for(var d=0;d<a.length;d++){s.push([]);for(var g=0;g<u;g++)s[d].push(a[d][(g+(a[d].length-h))%a[d].length])}}}this.hot.populateFromArray(i.row,i.col,s,r.row,r.col,"".concat(this.pluginName,".fill"),null,o,l),this.setSelection(t)}else this.hot._refreshBorders();return!0}},{key:"reduceSelectionAreaIfNeeded",value:function(t){return t.row<0&&(t.row=0),t.col<0&&(t.col=0),t}},{key:"getCoordsOfDragAndDropBorders",value:function(t){var e,n=this.hot.getSelectedRangeLast().getTopLeftCorner(),o=this.hot.getSelectedRangeLast().getBottomRightCorner();if(this.directions.includes(c.a.vertical)&&(o.row<t.row||n.row>t.row))e=new h.a(t.row,o.col);else{if(!this.directions.includes(c.a.horizontal))return;e=new h.a(o.row,t.col)}return this.reduceSelectionAreaIfNeeded(e)}},{key:"showBorder",value:function(t){var e=this.getCoordsOfDragAndDropBorders(t);e&&this.redrawBorders(e)}},{key:"addRow",value:function(){var t=this;this.hot._registerTimeout(setTimeout((function(){t.hot.alter("insert_row",void 0,1,"".concat(t.pluginName,".fill")),t.addingStarted=!1}),200))}},{key:"addNewRowIfNeeded",value:function(){if(this.hot.selection.highlight.getFill().cellRange&&!1===this.addingStarted&&this.autoInsertRow){var t=this.hot.getSelectedLast(),e=this.hot.selection.highlight.getFill().getCorners(),n=this.hot.countRows();t[2]<n-1&&e[2]===n-1&&(this.addingStarted=!0,this.addRow())}}},{key:"getCornersOfSelectedCells",value:function(){return this.hot.selection.isMultiple()?this.hot.selection.highlight.createOrGetArea().getCorners():this.hot.selection.highlight.getCell().getCorners()}},{key:"getIndexOfLastAdjacentFilledInRow",value:function(t){for(var e,n=this.hot.getData(),o=this.hot.countRows(),i=t[2]+1;i<o;i++){for(var r=t[1];r<=t[3];r++)if(n[i][r])return-1;var a=n[i][t[1]-1],l=n[i][t[3]+1];(a||l)&&(e=i)}return e}},{key:"addSelectionFromStartAreaToSpecificRowIndex",value:function(t,e){this.hot.selection.highlight.getFill().clear().add(new h.a(t[0],t[1])).add(new h.a(e,t[3]))}},{key:"setSelection",value:function(t){var e;(e=this.hot).selectCell.apply(e,d(t).concat([!1,!1]))}},{key:"selectAdjacent",value:function(){var t=this.getCornersOfSelectedCells(),e=this.getIndexOfLastAdjacentFilledInRow(t);return-1!==e&&void 0!==e&&(this.addSelectionFromStartAreaToSpecificRowIndex(t,e),!0)}},{key:"resetSelectionOfDraggedArea",value:function(){this.handleDraggedCells=0,this.hot.selection.highlight.getFill().clear()}},{key:"redrawBorders",value:function(t){this.hot.selection.highlight.getFill().clear().add(this.hot.getSelectedRangeLast().from).add(this.hot.getSelectedRangeLast().to).add(t),this.hot.view.render()}},{key:"getIfMouseWasDraggedOutside",value:function(t){var e=this.hot.rootDocument.documentElement,n=Object(r.offset)(this.hot.table).top-(this.hot.rootWindow.pageYOffset||e.scrollTop)+Object(r.outerHeight)(this.hot.table),o=Object(r.offset)(this.hot.table).left-(this.hot.rootWindow.pageXOffset||e.scrollLeft)+Object(r.outerWidth)(this.hot.table);return t.clientY>n&&t.clientX<=o}},{key:"registerEvents",value:function(){var t=this,e=this.hot.rootDocument.documentElement;this.eventManager.addEventListener(e,"mouseup",(function(){return t.onMouseUp()})),this.eventManager.addEventListener(e,"mousemove",(function(e){return t.onMouseMove(e)}))}},{key:"onCellCornerDblClick",value:function(){this.selectAdjacent()&&this.fillIn()}},{key:"onAfterCellCornerMouseDown",value:function(){this.handleDraggedCells=1,this.mouseDownOnCellCorner=!0}},{key:"onBeforeCellMouseOver",value:function(t){this.mouseDownOnCellCorner&&!this.hot.view.isMouseDown()&&this.handleDraggedCells&&(this.handleDraggedCells+=1,this.showBorder(t),this.addNewRowIfNeeded())}},{key:"onMouseUp",value:function(){this.handleDraggedCells&&(this.handleDraggedCells>1&&this.fillIn(),this.handleDraggedCells=0,this.mouseDownOnCellCorner=!1)}},{key:"onMouseMove",value:function(t){var e=this.getIfMouseWasDraggedOutside(t);!1===this.addingStarted&&this.handleDraggedCells>0&&e?(this.mouseDragOutside=!0,this.addingStarted=!0):this.mouseDragOutside=!1,this.mouseDragOutside&&this.autoInsertRow&&this.addRow()}},{key:"clearMappedSettings",value:function(){this.directions.length=0,this.autoInsertRow=!1}},{key:"mapSettings",value:function(){var t=Object(c.d)(this.hot.getSettings().fillHandle);this.directions=t.directions,this.autoInsertRow=t.autoInsertRow}},{key:"destroy",value:function(){p(b(e.prototype),"destroy",this).call(this)}}])&&g(n.prototype,o),i&&g(n,i),e}(o.a);Object(u.d)("autofill",w),e.a=w},486:function(t,e,n){"use strict";n(11),n(12),n(13),n(8),n(30),n(17),n(18),n(5),n(31),n(16),n(9),n(10),n(57);var o=n(22),i=n(1),r=n(46),a=n(0),l=n(148),s=n(2),u=n(4),h=n(19),c=n(236),f=n(51);function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function g(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t))&&"[object Arguments]"!==Object.prototype.toString.call(t))return;var n=[],o=!0,i=!1,r=void 0;try{for(var a,l=t[Symbol.iterator]();!(o=(a=l.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){i=!0,r=t}finally{try{o||null==l.return||l.return()}finally{if(i)throw r}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function v(t,e){return!e||"object"!==d(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t,e,n){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=b(t)););return t}(t,e);if(o){var i=Object.getOwnPropertyDescriptor(o,e);return i.get?i.get.call(n):i.value}})(t,e,n||t)}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function w(t,e,n){return e&&y(t.prototype,e),n&&y(t,n),t}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var C=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=v(this,b(e).call(this,t))).heights=[],n.ghostTable=new l.a(n.hot),n.samplesGenerator=new c.a((function(t,e){var o;return t>=0?o=n.hot.getDataAtCell(t,e):-1===t&&(o=n.hot.getColHeader(e)),{value:o}})),n.firstCalculation=!0,n.inProgress=!1,n.addHook("beforeRowResize",(function(t,e,o){return n.onBeforeRowResize(t,e,o)})),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(e,t),w(e,null,[{key:"CALCULATION_STEP",get:function(){return 50}},{key:"SYNC_CALCULATION_LIMIT",get:function(){return 500}}]),w(e,[{key:"isEnabled",value:function(){return!0===this.hot.getSettings().autoRowSize||Object(s.isObject)(this.hot.getSettings().autoRowSize)}},{key:"enablePlugin",value:function(){var t=this;this.enabled||(this.setSamplingOptions(),this.addHook("afterLoadData",(function(){return t.onAfterLoadData()})),this.addHook("beforeChange",(function(e){return t.onBeforeChange(e)})),this.addHook("beforeColumnMove",(function(){return t.recalculateAllRowsHeight()})),this.addHook("beforeColumnResize",(function(){return t.recalculateAllRowsHeight()})),this.addHook("beforeColumnSort",(function(){return t.clearCache()})),this.addHook("beforeRender",(function(e){return t.onBeforeRender(e)})),this.addHook("beforeRowMove",(function(e,n){return t.onBeforeRowMove(e,n)})),this.addHook("modifyRowHeight",(function(e,n){return t.getRowHeight(n,e)})),this.addHook("modifyColumnHeaderHeight",(function(){return t.getColumnHeaderHeight()})),p(b(e.prototype),"enablePlugin",this).call(this))}},{key:"disablePlugin",value:function(){p(b(e.prototype),"disablePlugin",this).call(this)}},{key:"calculateRowsHeight",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{from:0,to:this.hot.countRows()-1},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{from:0,to:this.hot.countCols()-1},o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r="number"==typeof e?{from:e,to:e}:e,a="number"==typeof n?{from:n,to:n}:n;if(null!==this.hot.getColHeader(0)){var l=this.samplesGenerator.generateRowSamples(-1,a);this.ghostTable.addColumnHeadersRow(l.get(-1))}Object(u.rangeEach)(r.from,r.to,(function(e){if(o||void 0===t.heights[e]){var n=t.samplesGenerator.generateRowSamples(e,a);Object(i.arrayEach)(n,(function(e){var n=g(e,2),o=n[0],i=n[1];return t.ghostTable.addRow(o,i)}))}})),this.ghostTable.rows.length&&(this.ghostTable.getHeights((function(e,n){t.heights[e]=n})),this.ghostTable.clean())}},{key:"calculateAllRowsHeight",value:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{from:0,to:this.hot.countCols()-1},o=0,i=this.hot.countRows()-1,a=null;this.inProgress=!0;var l=function l(){if(!t.hot)return Object(r.cancelAnimationFrame)(a),void(t.inProgress=!1);t.calculateRowsHeight({from:o,to:Math.min(o+e.CALCULATION_STEP,i)},n),(o=o+e.CALCULATION_STEP+1)<i?a=Object(r.requestAnimationFrame)(l):(Object(r.cancelAnimationFrame)(a),t.inProgress=!1,t.hot.view.wt.wtOverlays.adjustElementsSize(!0),t.hot.view.wt.wtOverlays.leftOverlay.needFullRender&&t.hot.view.wt.wtOverlays.leftOverlay.clone.draw())},s=this.getSyncCalculationLimit();this.firstCalculation&&s>=0&&(this.calculateRowsHeight({from:0,to:s},n),this.firstCalculation=!1,o=s+1),o<i?l():(this.inProgress=!1,this.hot.view.wt.wtOverlays.adjustElementsSize(!1))}},{key:"setSamplingOptions",value:function(){var t=this.hot.getSettings().autoRowSize,e=t&&Object(s.hasOwnProperty)(t,"samplingRatio")?this.hot.getSettings().autoRowSize.samplingRatio:void 0,n=t&&Object(s.hasOwnProperty)(t,"allowSampleDuplicates")?this.hot.getSettings().autoRowSize.allowSampleDuplicates:void 0;e&&!isNaN(e)&&this.samplesGenerator.setSampleCount(parseInt(e,10)),n&&this.samplesGenerator.setAllowDuplicates(n)}},{key:"recalculateAllRowsHeight",value:function(){Object(a.isVisible)(this.hot.view.wt.wtTable.TABLE)&&(this.clearCache(),this.calculateAllRowsHeight())}},{key:"getSyncCalculationLimit",value:function(){var t=e.SYNC_CALCULATION_LIMIT,n=this.hot.countRows()-1;return Object(s.isObject)(this.hot.getSettings().autoRowSize)&&(t=this.hot.getSettings().autoRowSize.syncLimit,Object(f.isPercentValue)(t)?t=Object(u.valueAccordingPercent)(n,t):t>>=0),Math.min(t,n)}},{key:"getRowHeight",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=e;return void 0!==this.heights[t]&&this.heights[t]>(e||0)&&(n=this.heights[t]),n}},{key:"getColumnHeaderHeight",value:function(){return this.heights[-1]}},{key:"getFirstVisibleRow",value:function(){var t=this.hot.view.wt;return t.wtViewport.rowsVisibleCalculator?t.wtTable.getFirstVisibleRow():t.wtViewport.rowsRenderCalculator?t.wtTable.getFirstRenderedRow():-1}},{key:"getLastVisibleRow",value:function(){var t=this.hot.view.wt;return t.wtViewport.rowsVisibleCalculator?t.wtTable.getLastVisibleRow():t.wtViewport.rowsRenderCalculator?t.wtTable.getLastRenderedRow():-1}},{key:"clearCache",value:function(){this.heights.length=0,this.heights[-1]=void 0}},{key:"clearCacheByRange",value:function(t){var e=this,n="number"==typeof t?{from:t,to:t}:t,o=n.from,i=n.to;Object(u.rangeEach)(Math.min(o,i),Math.max(o,i),(function(t){e.heights[t]=void 0}))}},{key:"isNeedRecalculate",value:function(){return!!Object(i.arrayFilter)(this.heights,(function(t){return void 0===t})).length}},{key:"onBeforeRender",value:function(){var t=this.hot.renderCall,e=this.hot.getSettings().fixedRowsBottom,n=this.getFirstVisibleRow(),o=this.getLastVisibleRow();if(-1!==n&&-1!==o){if(this.calculateRowsHeight({from:n,to:o},void 0,t),e){var i=this.hot.countRows()-1;this.calculateRowsHeight({from:i-e,to:i})}this.isNeedRecalculate()&&!this.inProgress&&this.calculateAllRowsHeight()}}},{key:"onBeforeRowMove",value:function(t,e){this.clearCacheByRange({from:t,to:e}),this.calculateAllRowsHeight()}},{key:"onBeforeRowResize",value:function(t,e,n){var o=e;return n&&(this.calculateRowsHeight(t,void 0,!0),o=this.getRowHeight(t)),o}},{key:"onAfterLoadData",value:function(){var t=this;this.hot.view?this.recalculateAllRowsHeight():setTimeout((function(){t.hot&&t.recalculateAllRowsHeight()}),0)}},{key:"onBeforeChange",value:function(t){var e=null;1===t.length?e=t[0][0]:t.length>1&&(e={from:t[0][0],to:t[t.length-1][0]}),null!==e&&this.clearCacheByRange(e)}},{key:"destroy",value:function(){this.ghostTable.clean(),p(b(e.prototype),"destroy",this).call(this)}}]),e}(o.a);Object(h.d)("autoRowSize",C),e.a=C}}]);