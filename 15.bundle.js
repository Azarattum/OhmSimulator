(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{193:function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));o(5),o(16);function r(e,t,o,r){t?t.row===o&&t.col===r?(e.setAttribute("rowspan",t.rowspan.toString()),e.setAttribute("colspan",t.colspan.toString())):(e.removeAttribute("rowspan"),e.removeAttribute("colspan"),e.style.display="none"):(e.removeAttribute("rowspan"),e.removeAttribute("colspan"),e.style.display="")}},503:function(e,t,o){"use strict";o(11),o(12),o(13),o(33),o(71),o(37),o(52),o(8),o(55),o(30),o(17),o(18),o(5),o(31),o(16),o(62),o(9),o(39),o(10);var r=o(22),n=o(20),l=o(19),a=o(15),i=o(7),c=o(607),s=o(85),u=o(608),h=o(609),f=o(610),g=o(1),d=o(2),w=o(41),p=o(4),v=o(193);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var o=[],r=!0,n=!1,l=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(o.push(a.value),!t||o.length!==t);r=!0);}catch(e){n=!0,l=e}finally{try{r||null==i.return||i.return()}finally{if(n)throw l}}return o}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function m(e){return function(e){if(Array.isArray(e)){for(var t=0,o=new Array(e.length);t<e.length;t++)o[t]=e[t];return o}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function b(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e,t,o){return(O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,o){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}(e,t);if(r){var n=Object.getOwnPropertyDescriptor(r,t);return n.get?n.get.call(o):n.value}})(e,t,o||e)}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.a.getSingleton().register("beforeMergeCells"),n.a.getSingleton().register("afterMergeCells"),n.a.getSingleton().register("beforeUnmergeCells"),n.a.getSingleton().register("afterUnmergeCells");var A=new WeakMap,j=function(e){function t(e){var o,r,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=!(n=S(t).call(this,e))||"object"!==y(n)&&"function"!=typeof n?k(r):n,A.set(k(o),{lastDesiredCoords:null}),o.mergedCellsCollection=null,o.autofillCalculations=null,o.selectionCalculations=null,o}var o,r,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(t,e),o=t,(r=[{key:"isEnabled",value:function(){return!!this.hot.getSettings().mergeCells}},{key:"enablePlugin",value:function(){var e=this;this.enabled||(this.mergedCellsCollection=new c.a(this),this.autofillCalculations=new u.a(this),this.selectionCalculations=new h.a(this),this.addHook("afterInit",(function(){return e.onAfterInit.apply(e,arguments)})),this.addHook("beforeKeyDown",(function(){return e.onBeforeKeyDown.apply(e,arguments)})),this.addHook("modifyTransformStart",(function(){return e.onModifyTransformStart.apply(e,arguments)})),this.addHook("afterModifyTransformStart",(function(){return e.onAfterModifyTransformStart.apply(e,arguments)})),this.addHook("modifyTransformEnd",(function(){return e.onModifyTransformEnd.apply(e,arguments)})),this.addHook("modifyGetCellCoords",(function(){return e.onModifyGetCellCoords.apply(e,arguments)})),this.addHook("beforeSetRangeEnd",(function(){return e.onBeforeSetRangeEnd.apply(e,arguments)})),this.addHook("afterIsMultipleSelection",(function(){return e.onAfterIsMultipleSelection.apply(e,arguments)})),this.addHook("afterRenderer",(function(){return e.onAfterRenderer.apply(e,arguments)})),this.addHook("afterContextMenuDefaultOptions",(function(){return e.addMergeActionsToContextMenu.apply(e,arguments)})),this.addHook("afterGetCellMeta",(function(){return e.onAfterGetCellMeta.apply(e,arguments)})),this.addHook("afterViewportRowCalculatorOverride",(function(){return e.onAfterViewportRowCalculatorOverride.apply(e,arguments)})),this.addHook("afterViewportColumnCalculatorOverride",(function(){return e.onAfterViewportColumnCalculatorOverride.apply(e,arguments)})),this.addHook("modifyAutofillRange",(function(){return e.onModifyAutofillRange.apply(e,arguments)})),this.addHook("afterCreateCol",(function(){return e.onAfterCreateCol.apply(e,arguments)})),this.addHook("afterRemoveCol",(function(){return e.onAfterRemoveCol.apply(e,arguments)})),this.addHook("afterCreateRow",(function(){return e.onAfterCreateRow.apply(e,arguments)})),this.addHook("afterRemoveRow",(function(){return e.onAfterRemoveRow.apply(e,arguments)})),this.addHook("afterChange",(function(){return e.onAfterChange.apply(e,arguments)})),this.addHook("beforeDrawBorders",(function(){return e.onBeforeDrawAreaBorders.apply(e,arguments)})),this.addHook("afterDrawSelection",(function(){return e.onAfterDrawSelection.apply(e,arguments)})),this.addHook("beforeRemoveCellClassNames",(function(){return e.onBeforeRemoveCellClassNames.apply(e,arguments)})),O(S(t.prototype),"enablePlugin",this).call(this))}},{key:"disablePlugin",value:function(){this.clearCollections(),this.hot.render(),O(S(t.prototype),"disablePlugin",this).call(this)}},{key:"updatePlugin",value:function(){var e=this.hot.getSettings().mergeCells;this.disablePlugin(),this.enablePlugin(),this.generateFromSettings(e),O(S(t.prototype),"updatePlugin",this).call(this)}},{key:"validateSetting",value:function(e){var t=!0;return!!e&&(s.a.containsNegativeValues(e)?(Object(w.b)(s.a.NEGATIVE_VALUES_WARNING(e)),t=!1):s.a.isOutOfBounds(e,this.hot.countRows(),this.hot.countCols())?(Object(w.b)(s.a.IS_OUT_OF_BOUNDS_WARNING(e)),t=!1):s.a.isSingleCell(e)?(Object(w.b)(s.a.IS_SINGLE_CELL(e)),t=!1):s.a.containsZeroSpan(e)&&(Object(w.b)(s.a.ZERO_SPAN_WARNING(e)),t=!1),t)}},{key:"generateFromSettings",value:function(e){var t=this;if(Array.isArray(e)){var o,r=[];Object(g.arrayEach)(e,(function(e){if(t.validateSetting(e)){var o=new i.a(e.row,e.col),n=new i.a(e.row+e.rowspan-1,e.col+e.colspan-1),l=new i.b(o,o,n);r.push(t.mergeRange(l,!0,!0))}})),r=r.filter((function(e){return!0!==e}));var n=this.getBulkCollectionData(r);(o=this.hot).populateFromArray.apply(o,m(n))}}},{key:"getBulkCollectionData",value:function(e){var t,o=this.getBulkCollectionDataRange(e),r=(t=this.hot).getData.apply(t,m(o)).splice(0);return Object(g.arrayEach)(e,(function(e){var t=C(e,3),n=t[0],l=t[1],a=t[2];Object(g.arrayEach)(a,(function(e,t){Object(g.arrayEach)(e,(function(e,a){r[n-o[0]+t][l-o[1]+a]=e}))}))})),[o[0],o[1],r]}},{key:"getBulkCollectionDataRange",value:function(e){var t=[0,0],o=[0,0],r=null,n=null,l=null;return Object(g.arrayEach)(e,(function(e){r=e[0],n=e[1],l=e[2],t[0]=Math.min(r,t[0]),t[1]=Math.min(n,t[1]),o[0]=Math.max(r+l.length-1,o[0]),o[1]=Math.max(n+l[0].length-1,o[1])})),[].concat(t,o)}},{key:"clearCollections",value:function(){this.mergedCellsCollection.clear()}},{key:"canMergeRange",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!!t||this.validateSetting(e)}},{key:"toggleMergeOnSelection",value:function(){var e=this.hot.getSelectedRangeLast();if(e){e.setDirection("NW-SE");var t=e.from,o=e.to;this.toggleMerge(e),this.hot.selectCell(t.row,t.col,o.row,o.col,!1)}}},{key:"mergeSelection",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.hot.getSelectedRangeLast();if(e){e.setDirection("NW-SE");var t=e.from,o=e.to;this.unmergeRange(e,!0),this.mergeRange(e),this.hot.selectCell(t.row,t.col,o.row,o.col,!1)}}},{key:"unmergeSelection",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.hot.getSelectedRangeLast();if(e){var t=e.from,o=e.to;this.unmergeRange(e,!0),this.hot.selectCell(t.row,t.col,o.row,o.col,!1)}}},{key:"mergeRange",value:function(e){var t=this,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=e.getTopLeftCorner(),l=e.getBottomRightCorner(),a={row:n.row,col:n.col,rowspan:l.row-n.row+1,colspan:l.col-n.col+1},i=[],c=null;if(!this.canMergeRange(a,o))return!1;this.hot.runHooks("beforeMergeCells",e,o),Object(p.rangeEach)(0,a.rowspan-1,(function(e){Object(p.rangeEach)(0,a.colspan-1,(function(o){var r=null;i[e]||(i[e]=[]),0===e&&0===o?r=t.hot.getDataAtCell(a.row,a.col):t.hot.setCellMeta(a.row+e,a.col+o,"hidden",!0),i[e][o]=r}))})),this.hot.setCellMeta(a.row,a.col,"spanned",!0);var s=this.mergedCellsCollection.add(a);return!s||(r?c=[a.row,a.col,i]:this.hot.populateFromArray(a.row,a.col,i,void 0,void 0,this.pluginName),this.hot.runHooks("afterMergeCells",e,a,o),c)}},{key:"unmergeRange",value:function(e){var t=this,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this.mergedCellsCollection.getWithinRange(e);r&&(this.hot.runHooks("beforeUnmergeCells",e,o),Object(g.arrayEach)(r,(function(e){t.mergedCellsCollection.remove(e.row,e.col),Object(p.rangeEach)(0,e.rowspan-1,(function(o){Object(p.rangeEach)(0,e.colspan-1,(function(r){t.hot.removeCellMeta(e.row+o,e.col+r,"hidden")}))})),t.hot.removeCellMeta(e.row,e.col,"spanned")})),this.hot.render(),this.hot.runHooks("afterUnmergeCells",e,o))}},{key:"toggleMerge",value:function(e){var t=this.mergedCellsCollection.get(e.from.row,e.from.col);t.row===e.from.row&&t.col===e.from.col&&t.row+t.rowspan-1===e.to.row&&t.col+t.colspan-1===e.to.col?this.unmergeRange(e):this.mergeSelection(e)}},{key:"merge",value:function(e,t,o,r){var n=new i.a(e,t),l=new i.a(o,r);this.mergeRange(new i.b(n,n,l))}},{key:"unmerge",value:function(e,t,o,r){var n=new i.a(e,t),l=new i.a(o,r);this.unmergeRange(new i.b(n,n,l))}},{key:"onAfterInit",value:function(){this.generateFromSettings(this.hot.getSettings().mergeCells),this.hot.render()}},{key:"onBeforeKeyDown",value:function(e){(e.ctrlKey||e.metaKey)&&!e.altKey&&77===e.keyCode&&(this.toggleMerge(this.hot.getSelectedRangeLast()),this.hot.render(),Object(a.stopImmediatePropagation)(e))}},{key:"onAfterIsMultipleSelection",value:function(e){if(e)for(var t=this.mergedCellsCollection.mergedCells,o=this.hot.getSelectedRangeLast(),r=0;r<t.length;r+=1)if(o.highlight.row===t[r].row&&o.highlight.col===t[r].col&&o.to.row===t[r].row+t[r].rowspan-1&&o.to.col===t[r].col+t[r].colspan-1)return!1;return e}},{key:"onModifyTransformStart",value:function(e){var t,o=A.get(this),r=this.hot.getSelectedRangeLast(),n={row:e.row,col:e.col},l=new i.a(r.highlight.row,r.highlight.col),a=this.mergedCellsCollection.get(l.row,l.col);if(o.lastDesiredCoords||(o.lastDesiredCoords=new i.a(null,null)),a){var c=new i.a(a.row,a.col),s=new i.a(a.row+a.rowspan-1,a.col+a.colspan-1);new i.b(c,c,s).includes(o.lastDesiredCoords)||(o.lastDesiredCoords=new i.a(null,null)),n.row=o.lastDesiredCoords.row?o.lastDesiredCoords.row-l.row:n.row,n.col=o.lastDesiredCoords.col?o.lastDesiredCoords.col-l.col:n.col,e.row>0?n.row=a.row+a.rowspan-1-l.row+e.row:e.row<0&&(n.row=l.row-a.row+e.row),e.col>0?n.col=a.col+a.colspan-1-l.col+e.col:e.col<0&&(n.col=l.col-a.col+e.col)}t=new i.a(r.highlight.row+n.row,r.highlight.col+n.col);var u=this.mergedCellsCollection.get(t.row,t.col);u&&(o.lastDesiredCoords=t,n={row:u.row-l.row,col:u.col-l.col}),0!==n.row&&(e.row=n.row),0!==n.col&&(e.col=n.col)}},{key:"onModifyTransformEnd",value:function(e){var t=this,o=this.hot.getSelectedRangeLast(),r=Object(d.clone)(e),n=this.selectionCalculations.getUpdatedSelectionRange(o,e),l=Object(d.clone)(r),a=this.mergedCellsCollection.getWithinRange(n,!0);do{l=Object(d.clone)(r),this.selectionCalculations.getUpdatedSelectionRange(o,r),Object(g.arrayEach)(a,(function(e){t.selectionCalculations.snapDelta(r,o,e)}))}while(r.row!==l.row||r.col!==l.col);e.row=r.row,e.col=r.col}},{key:"onModifyGetCellCoords",value:function(e,t){var o=this.mergedCellsCollection.get(e,t);return o?[o.row,o.col,o.row+o.rowspan-1,o.col+o.colspan-1]:void 0}},{key:"addMergeActionsToContextMenu",value:function(e){e.items.push({name:"---------"},Object(f.a)(this))}},{key:"onAfterRenderer",value:function(e,t,o){var r=this.mergedCellsCollection.get(t,o);Object(v.a)(e,r,t,o)}},{key:"onBeforeSetRangeEnd",value:function(e){var t=this.hot.getSelectedRangeLast();t.highlight=new i.a(t.highlight.row,t.highlight.col),t.to=e;var o=!1;if(!this.hot.selection.isSelectedByColumnHeader()&&!this.hot.selection.isSelectedByRowHeader())do{o=!1;for(var r=0;r<this.mergedCellsCollection.mergedCells.length;r+=1){var n=this.mergedCellsCollection.mergedCells[r].getRange();t.expandByRange(n)&&(e.row=t.to.row,e.col=t.to.col,o=!0)}}while(o)}},{key:"onAfterGetCellMeta",value:function(e,t,o){var r=this.mergedCellsCollection.get(e,t);r&&(r.row!==e||r.col!==t?o.copyable=!1:(o.rowspan=r.rowspan,o.colspan=r.colspan))}},{key:"onAfterViewportRowCalculatorOverride",value:function(e){var t,o=this,r=this.hot.countCols();Object(p.rangeEach)(0,r-1,(function(r){if((t=o.mergedCellsCollection.get(e.startRow,r))&&t.row<e.startRow)return e.startRow=t.row,o.onAfterViewportRowCalculatorOverride.call(o,e);if(t=o.mergedCellsCollection.get(e.endRow,r)){var n=t.row+t.rowspan-1;if(n>e.endRow)return e.endRow=n,o.onAfterViewportRowCalculatorOverride.call(o,e)}return!0}))}},{key:"onAfterViewportColumnCalculatorOverride",value:function(e){var t,o=this,r=this.hot.countRows();Object(p.rangeEach)(0,r-1,(function(r){if((t=o.mergedCellsCollection.get(r,e.startColumn))&&t.col<e.startColumn)return e.startColumn=t.col,o.onAfterViewportColumnCalculatorOverride.call(o,e);if(t=o.mergedCellsCollection.get(r,e.endColumn)){var n=t.col+t.colspan-1;if(n>e.endColumn)return e.endColumn=n,o.onAfterViewportColumnCalculatorOverride.call(o,e)}return!0}))}},{key:"onModifyAutofillRange",value:function(e,t){this.autofillCalculations.correctSelectionAreaSize(t);var o=this.autofillCalculations.getDirection(t,e),r=e;if(this.autofillCalculations.dragAreaOverlapsCollections(t,r,o))return r=t;var n=this.mergedCellsCollection.getWithinRange({from:{row:t[0],col:t[1]},to:{row:t[2],col:t[3]}});return n?r=this.autofillCalculations.snapDragArea(t,r,o,n):r}},{key:"onAfterCreateCol",value:function(e,t){this.mergedCellsCollection.shiftCollections("right",e,t)}},{key:"onAfterRemoveCol",value:function(e,t){this.mergedCellsCollection.shiftCollections("left",e,t)}},{key:"onAfterCreateRow",value:function(e,t,o){"auto"!==o&&this.mergedCellsCollection.shiftCollections("down",e,t)}},{key:"onAfterRemoveRow",value:function(e,t){this.mergedCellsCollection.shiftCollections("up",e,t)}},{key:"onAfterChange",value:function(e,t){"Autofill.fill"===t&&this.autofillCalculations.recreateAfterDataPopulation(e)}},{key:"onBeforeDrawAreaBorders",value:function(e,t){if(t&&"area"===t){var o=this.hot.getSelectedRangeLast(),r=this.mergedCellsCollection.getWithinRange(o);Object(g.arrayEach)(r,(function(t){o.getBottomRightCorner().row===t.getLastRow()&&o.getBottomRightCorner().col===t.getLastColumn()&&(e[2]=t.row,e[3]=t.col)}))}}},{key:"onAfterModifyTransformStart",value:function(e,t,o){if(this.enabled){var r=this.mergedCellsCollection.get(e.row,e.col);if(r){var n=t>0,l=t<0,a=o<0,i=o>0,c=r.row+r.rowspan-1==this.hot.countRows()-1,s=0===r.row,u=r.col+r.colspan-1==this.hot.countCols()-1,h=0===r.col;(n&&c||l&&s||i&&u||a&&h)&&(e.row=r.row,e.col=r.col)}}}},{key:"onAfterDrawSelection",value:function(e,t,o,r){return this.selectionCalculations.getSelectedMergedCellClassName(e,t,o,r)}},{key:"onBeforeRemoveCellClassNames",value:function(){return this.selectionCalculations.getSelectedMergedCellClassNameToRemove()}}])&&b(o.prototype,r),n&&b(o,n),t}(r.a);Object(l.d)("mergeCells",j),t.a=j},607:function(e,t,o){"use strict";o(11),o(12),o(13),o(37),o(27),o(8),o(49),o(55),o(101),o(5),o(16),o(9),o(10);var r=o(85),n=o(7),l=o(4),a=o(41),i=o(1),c=o(193),s=o(45);function u(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["The merged cell declared at [",", ","], overlaps with the other declared merged \n    cell. The overlapping merged cell was not added to the table, please fix your setup."]);return u=function(){return e},e}function h(e){return function(e){if(Array.isArray(e)){for(var t=0,o=new Array(e.length);t<e.length;t++)o[t]=e[t];return o}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function f(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var g=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.plugin=t,this.mergedCells=[],this.hot=t.hot}var t,o,g;return t=e,g=[{key:"IS_OVERLAPPING_WARNING",value:function(e){return Object(s.a)(u(),e.row,e.col)}}],(o=[{key:"get",value:function(e,t){var o=this.mergedCells,r=!1;return Object(i.arrayEach)(o,(function(o){return!(o.row<=e&&o.row+o.rowspan-1>=e&&o.col<=t&&o.col+o.colspan-1>=t&&(r=o,1))})),r}},{key:"getByRange",value:function(e){var t=this.mergedCells,o=!1;return Object(i.arrayEach)(t,(function(t){return!(t.row<=e.from.row&&t.row+t.rowspan-1>=e.to.row&&t.col<=e.from.col&&t.col+t.colspan-1>=e.to.col)||(o=t)})),o}},{key:"getWithinRange",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=this.mergedCells,r=[],l=e;if(!l.includesRange){var a=new n.a(l.from.row,l.from.col),c=new n.a(l.to.row,l.to.col);l=new n.b(a,a,c)}return Object(i.arrayEach)(o,(function(e){var o=new n.a(e.row,e.col),a=new n.a(e.row+e.rowspan-1,e.col+e.colspan-1),i=new n.b(o,o,a);t?l.overlaps(i)&&r.push(e):l.includesRange(i)&&r.push(e)})),!!r.length&&r}},{key:"add",value:function(t){var o=this.mergedCells,n=t.row,l=t.col,i=t.rowspan,c=t.colspan,s=new r.a(n,l,i,c),u=this.get(n,l),h=this.isOverlapping(s);return u||h?(Object(a.b)(e.IS_OVERLAPPING_WARNING(s)),!1):(this.hot&&s.normalize(this.hot),o.push(s),s)}},{key:"remove",value:function(e,t){var o=this.mergedCells,r=this.get(e,t),n=r?this.mergedCells.indexOf(r):null;return!(!r||!1===n)&&(o.splice(n,1),r)}},{key:"clear",value:function(){var e=this,t=this.mergedCells,o=[],r=[];Object(i.arrayEach)(t,(function(t){var r=e.hot.getCell(t.row,t.col);r&&o.push([r,e.get(t.row,t.col),t.row,t.col])})),this.mergedCells.length=0,Object(i.arrayEach)(o,(function(t,n){Object(l.rangeEach)(0,t.rowspan-1,(function(o){Object(l.rangeEach)(0,t.colspan-1,(function(n){if(0!==n||0!==o){var l=e.hot.getCell(t.row+o,t.col+n);l&&r.push([l,null,null,null])}}))})),o[n][1]=null})),Object(i.arrayEach)(o,(function(e){c.a.apply(void 0,h(e))})),Object(i.arrayEach)(r,(function(e){c.a.apply(void 0,h(e))}))}},{key:"isOverlapping",value:function(e){var t=new n.b(null,new n.a(e.row,e.col),new n.a(e.row+e.rowspan-1,e.col+e.colspan-1)),o=!1;return Object(i.arrayEach)(this.mergedCells,(function(e){return!new n.b(null,new n.a(e.row,e.col),new n.a(e.row+e.rowspan-1,e.col+e.colspan-1)).overlaps(t)||(o=!0,!1)})),o}},{key:"isMergedParent",value:function(e,t){var o=this.mergedCells,r=!1;return Object(i.arrayEach)(o,(function(o){return o.row!==e||o.col!==t||(r=!0,!1)})),r}},{key:"shiftCollections",value:function(e,t,o){var r=this,n=[0,0];switch(e){case"right":n[0]+=o;break;case"left":n[0]-=o;break;case"down":n[1]+=o;break;case"up":n[1]-=o}Object(i.arrayEach)(this.mergedCells,(function(e){e.shift(n,t)})),Object(l.rangeEachReverse)(this.mergedCells.length-1,0,(function(e){var t=r.mergedCells[e];t&&t.removed&&r.mergedCells.splice(r.mergedCells.indexOf(t),1)}))}}])&&f(t.prototype,o),g&&f(t,g),e}();t.a=g},608:function(e,t,o){"use strict";o(11),o(12),o(13),o(27),o(8),o(49),o(5),o(16),o(9),o(10);var r=o(2),n=o(7),l=o(1);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var o=[],r=!0,n=!1,l=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(o.push(a.value),!t||o.length!==t);r=!0);}catch(e){n=!0,l=e}finally{try{r||null==i.return||i.return()}finally{if(n)throw l}}return o}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function i(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.plugin=t,this.mergedCellsCollection=this.plugin.mergedCellsCollection,this.currentFillData=null}var t,o,c;return t=e,(o=[{key:"correctSelectionAreaSize",value:function(e){if(e[0]===e[2]&&e[1]===e[3]){var t=this.mergedCellsCollection.get(e[0],e[1]);t&&(e[2]=e[0]+t.rowspan-1,e[3]=e[1]+t.colspan-1)}}},{key:"getDirection",value:function(e,t){return t[0]===e[0]&&t[1]===e[1]&&t[3]===e[3]?"down":t[2]===e[2]&&t[1]===e[1]&&t[3]===e[3]?"up":t[1]===e[1]&&t[2]===e[2]?"right":"left"}},{key:"snapDragArea",value:function(e,t,o,r){var n=t.slice(0),l=this.getAutofillSize(e,t,o),i=a(e,4),c=i[0],s=i[1],u=i[2],h=i[3],f=["up","down"].indexOf(o)>-1?u-c+1:h-s+1,g=l-Math.floor(l/f)*f,d=this.getFarthestCollection(e,t,o,r);if(d)if("down"===o){var w=d.row+d.rowspan-c-g;n[2]+w>=this.plugin.hot.countRows()?n[2]-=g:n[2]+=g?w:0}else if("right"===o){var p=d.col+d.colspan-s-g;n[3]+p>=this.plugin.hot.countCols()?n[3]-=g:n[3]+=g?p:0}else if("up"===o){var v=u-g-d.row+1;n[0]+v<0?n[0]+=g:n[0]-=g?v:0}else if("left"===o){var y=h-g-d.col+1;n[1]+y<0?n[1]+=g:n[1]-=g?y:0}return this.updateCurrentFillCache({baseArea:e,dragDirection:o,foundMergedCells:r,fillSize:l,dragArea:n,cycleLength:f}),n}},{key:"updateCurrentFillCache",value:function(e){this.currentFillData||(this.currentFillData={}),Object(r.extend)(this.currentFillData,e)}},{key:"getAutofillSize",value:function(e,t,o){var r=a(e,4),n=r[0],l=r[1],i=r[2],c=r[3],s=a(t,4),u=s[0],h=s[1],f=s[2],g=s[3];switch(o){case"up":return n-u;case"down":return f-i;case"left":return l-h;case"right":return g-c;default:return null}}},{key:"getDragArea",value:function(e,t,o){var r=a(e,4),n=r[0],l=r[1],i=r[2],c=r[3],s=a(t,4),u=s[0],h=s[1],f=s[2],g=s[3];switch(o){case"up":return[u,h,n-1,c];case"down":return[i+1,l,f,c];case"left":return[u,h,i,l-1];case"right":return[n,c+1,f,g];default:return null}}},{key:"getFarthestCollection",value:function(e,t,o,r){var n=a(e,4),i=n[0],c=n[1],s=n[2],u=n[3],h=["up","down"].indexOf(o)>-1,f=h?s:u,g=h?i:c,d=this.getAutofillSize(e,t,o),w=h?s-i+1:u-c+1,p=d-Math.floor(d/w)*w,v=null,y=null,C=null;switch(o){case"up":v="includesVertically",C=f-p+1;break;case"left":v="includesHorizontally",C=f-p+1;break;case"down":v="includesVertically",C=g+p-1;break;case"right":v="includesHorizontally",C=g+p-1}return Object(l.arrayEach)(r,(function(e){e[v](C)&&e.isFarther(y,o)&&(y=e)})),y}},{key:"recreateAfterDataPopulation",value:function(e){if(this.currentFillData){var t=this.getRangeFromChanges(e),o=this.currentFillData.foundMergedCells,r=this.currentFillData.dragDirection,n=function(e,o){switch(r){case"up":return e.row-o>=t.from.row;case"down":return e.row+e.rowspan-1+o<=t.to.row;case"left":return e.col-o>=t.from.column;case"right":return e.col+e.colspan-1+o<=t.to.column;default:return null}},l=0,a=null,i=1;do{for(var c=0;c<o.length;c+=1){if(n(a=o[c],l=i*this.currentFillData.cycleLength))switch(r){case"up":this.plugin.mergedCellsCollection.add({row:a.row-l,rowspan:a.rowspan,col:a.col,colspan:a.colspan});break;case"down":this.plugin.mergedCellsCollection.add({row:a.row+l,rowspan:a.rowspan,col:a.col,colspan:a.colspan});break;case"left":this.plugin.mergedCellsCollection.add({row:a.row,rowspan:a.rowspan,col:a.col-l,colspan:a.colspan});break;case"right":this.plugin.mergedCellsCollection.add({row:a.row,rowspan:a.rowspan,col:a.col+l,colspan:a.colspan})}c===o.length-1&&(i+=1)}}while(n(a,l));this.currentFillData=null,this.plugin.hot.render()}}},{key:"getRangeFromChanges",value:function(e){var t=this,o={min:null,max:null},r={min:null,max:null};return Object(l.arrayEach)(e,(function(e){var n=e[0],l=t.plugin.hot.propToCol(e[1]);(null===o.min||n<o.min)&&(o.min=n),(null===o.max||n>o.max)&&(o.max=n),(null===r.min||l<r.min)&&(r.min=l),(null===r.max||l>r.max)&&(r.max=l)})),{from:{row:o.min,column:r.min},to:{row:o.max,column:r.max}}}},{key:"dragAreaOverlapsCollections",value:function(e,t,o){var r=a(this.getDragArea(e,t,o),4),l=r[0],i=r[1],c=r[2],s=r[3],u=new n.a(l,i),h=new n.a(c,s),f=new n.b(u,u,h);return!!this.mergedCellsCollection.getWithinRange(f,!0)}}])&&i(t.prototype,o),c&&i(t,c),e}();t.a=c},609:function(e,t,o){"use strict";o(11),o(12),o(13),o(33),o(52),o(8),o(5),o(16),o(62),o(9),o(10);var r=o(7);function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var o=[],r=!0,n=!1,l=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(o.push(a.value),!t||o.length!==t);r=!0);}catch(e){n=!0,l=e}finally{try{r||null==i.return||i.return()}finally{if(n)throw l}}return o}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function l(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.plugin=t,this.fullySelectedMergedCellClassName="fullySelectedMergedCell"}var t,o,a;return t=e,(o=[{key:"snapDelta",value:function(e,t,o){var r=t.to,n=r.row+e.row,l=r.col+e.col;e.row?this.jumpOverMergedCell(e,o,n):e.col&&this.jumpOverMergedCell(e,o,l)}},{key:"jumpOverMergedCell",value:function(e,t,o){var r=e.row||e.col,n=null,l=null,a=null;e.row?(n=t.includesVertically(o),l=t.row,a=t.getLastRow()):e.col&&(n=t.includesHorizontally(o),l=t.col,a=t.getLastColumn()),0!==r&&(r>0?n&&o!==l&&(r+=a-o+1):n&&o!==a&&(r-=o-l+1),e.row?e.row=r:e.col&&(e.col=r))}},{key:"getUpdatedSelectionRange",value:function(e,t){return new r.b(e.highlight,e.from,new r.a(e.to.row+t.row,e.to.col+t.col))}},{key:"getSelectedMergedCellClassName",value:function(e,t,o,r){var l=n(o,4),a=l[0],i=l[1],c=l[2],s=l[3];if(void 0!==r&&e>=a&&e<=c&&t>=i&&t<=s){if(!this.plugin.mergedCellsCollection.isMergedParent(e,t))return;var u=this.plugin.mergedCellsCollection.get(e,t);if(!u)return;if(u.row+u.rowspan-1<=c&&u.col+u.colspan-1<=s)return"".concat(this.fullySelectedMergedCellClassName,"-").concat(r);if(this.plugin.selectionCalculations.isMergeCellFullySelected(u,this.plugin.hot.getSelectedRange()))return"".concat(this.fullySelectedMergedCellClassName,"-multiple")}}},{key:"isMergeCellFullySelected",value:function(e,t){var o=[];if(!t||!e)return!1;for(var n=0;n<e.rowspan;n+=1)for(var l=0;l<e.colspan;l+=1)o.push(new r.a(e.row+n,e.col+l));for(var a=0;a<o.length;a+=1){for(var i=[],c=0;c<t.length;c+=1)i[c]=t[c].includes(o[a]);if(!i.includes(!0))return!1}return!0}},{key:"getSelectedMergedCellClassNameToRemove",value:function(){for(var e=[],t=0;t<=7;t+=1)e.push("".concat(this.fullySelectedMergedCellClassName,"-").concat(t));return e.push("".concat(this.fullySelectedMergedCellClassName,"-multiple")),e}}])&&l(t.prototype,o),a&&l(t,a),e}();t.a=a},610:function(e,t,o){"use strict";o.d(t,"a",(function(){return l}));var r=o(3),n=o(85);function l(e){return{key:"mergeCells",name:function(){var t=this.getSelectedLast();if(t){var o=e.mergedCellsCollection.get(t[0],t[1]);if(o.row===t[0]&&o.col===t[1]&&o.row+o.rowspan-1===t[2]&&o.col+o.colspan-1===t[3])return this.getTranslatedPhrase(r.CONTEXTMENU_ITEMS_UNMERGE_CELLS)}return this.getTranslatedPhrase(r.CONTEXTMENU_ITEMS_MERGE_CELLS)},callback:function(){e.toggleMergeOnSelection()},disabled:function(){var e=this.getSelectedLast();return!e||(n.a.isSingleCell({row:e[0],col:e[1],rowspan:e[2]-e[0]+1,colspan:e[3]-e[1]+1})||this.selection.isSelectedByCorner())},hidden:!1}}},85:function(e,t,o){"use strict";o(49),o(101);var r=o(7),n=o(45);function l(){var e=s(["The merged cell declared at [",", ",'] has "rowspan" or "colspan" declared as \n      "0", which is not supported. It cannot be added to the collection.']);return l=function(){return e},e}function a(){var e=s(["The merged cell declared at [",", ",'] has both "rowspan" \n     and "colspan" declared as "1", which makes it a single cell. It cannot be added to the collection.']);return a=function(){return e},e}function i(){var e=s(["The merged cell declared at [",", ","] is positioned (or positioned partially) \n       outside of the table range. It was not added to the table, please fix your setup."]);return i=function(){return e},e}function c(){var e=s(["The merged cell declared with {row: ",", col: ",", rowspan: \n    ",", colspan: ","} contains negative values, which is not supported. It \n    will not be added to the collection."]);return c=function(){return e},e}function s(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function u(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(t,o,r,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.row=t,this.col=o,this.rowspan=r,this.colspan=n,this.removed=!1}var t,o,s;return t=e,s=[{key:"NEGATIVE_VALUES_WARNING",value:function(e){return Object(n.a)(c(),e.row,e.col,e.rowspan,e.colspan)}},{key:"IS_OUT_OF_BOUNDS_WARNING",value:function(e){return Object(n.a)(i(),e.row,e.col)}},{key:"IS_SINGLE_CELL",value:function(e){return Object(n.a)(a(),e.row,e.col)}},{key:"ZERO_SPAN_WARNING",value:function(e){return Object(n.a)(l(),e.row,e.col)}},{key:"containsNegativeValues",value:function(e){return e.row<0||e.col<0||e.rowspan<0||e.colspan<0}},{key:"isSingleCell",value:function(e){return 1===e.colspan&&1===e.rowspan}},{key:"containsZeroSpan",value:function(e){return 0===e.colspan||0===e.rowspan}},{key:"isOutOfBounds",value:function(e,t,o){return e.row<0||e.col<0||e.row>=t||e.row+e.rowspan-1>=t||e.col>=o||e.col+e.colspan-1>=o}}],(o=[{key:"normalize",value:function(e){var t=e.countRows(),o=e.countCols();this.row<0?this.row=0:this.row>t-1&&(this.row=t-1),this.col<0?this.col=0:this.col>o-1&&(this.col=o-1),this.row+this.rowspan>t-1&&(this.rowspan=t-this.row),this.col+this.colspan>o-1&&(this.colspan=o-this.col)}},{key:"includes",value:function(e,t){return this.row<=e&&this.col<=t&&this.row+this.rowspan-1>=e&&this.col+this.colspan-1>=t}},{key:"includesHorizontally",value:function(e){return this.col<=e&&this.col+this.colspan-1>=e}},{key:"includesVertically",value:function(e){return this.row<=e&&this.row+this.rowspan-1>=e}},{key:"shift",value:function(e,t){var o=e[0]||e[1],r=t+Math.abs(e[0]||e[1])-1,n=e[0]?"colspan":"rowspan",l=e[0]?"col":"row",a=Math.min(t,r),i=Math.max(t,r),c=this[l],s=this[l]+this[n]-1;if(c>=t&&(this[l]+=o),o>0)t<=s&&t>c&&(this[n]+=o);else if(o<0){if(a<=c&&i>=s)return this.removed=!0,!1;if(c>=a&&c<=i){var u=i-c+1,h=Math.abs(o)-u;this[l]-=h+o,this[n]-=u}else if(c<=a&&s>=i)this[n]+=o;else if(c<=a&&s>=a&&s<i){var f=s-a+1;this[n]-=f}}return!0}},{key:"isFarther",value:function(e,t){return!e||("down"===t?e.row+e.rowspan-1<this.row+this.rowspan-1:"up"===t?e.row>this.row:"right"===t?e.col+e.colspan-1<this.col+this.colspan-1:"left"===t?e.col>this.col:null)}},{key:"getLastRow",value:function(){return this.row+this.rowspan-1}},{key:"getLastColumn",value:function(){return this.col+this.colspan-1}},{key:"getRange",value:function(){return new r.b(new r.a(this.row,this.col),new r.a(this.row,this.col),new r.a(this.getLastRow(),this.getLastColumn()))}}])&&u(t.prototype,o),s&&u(t,s),e}();t.a=h}}]);