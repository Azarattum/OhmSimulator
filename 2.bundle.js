(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{508:function(e,t,o){"use strict";o(11),o(12),o(13),o(37),o(52),o(27),o(8),o(85),o(56),o(30),o(17),o(18),o(5),o(31),o(40),o(16),o(63),o(9),o(480),o(84),o(10);var n=o(22),r=o(19),i=o(2),a=o(4),s=o(14);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e){return function(e){if(Array.isArray(e)){for(var t=0,o=new Array(e.length);t<e.length;t++)o[t]=e[t];return o}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e,t,o){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,o){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}(e,t);if(n){var r=Object.getOwnPropertyDescriptor(n,t);return r.get?r.get.call(o):r.value}})(e,t,o||e)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e,t,o,n,r){e.getCellMeta(t,o).isSearchResult=r},g=function(e,t){return!(Object(s.isUndefined)(e)||null===e||!e.toLowerCase||0===e.length)&&(!Object(s.isUndefined)(t)&&null!==t&&-1!==t.toString().toLowerCase().indexOf(e.toLowerCase()))},v=function(e){function t(e){var o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(o=h(this,f(t).call(this,e))).callback=y,o.queryMethod=g,o.searchResultClass="htSearchResult",o}var o,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),o=t,(n=[{key:"isEnabled",value:function(){return this.hot.getSettings().search}},{key:"enablePlugin",value:function(){var e=this;if(!this.enabled){var o=this.hot.getSettings().search;this.updatePluginSettings(o),this.addHook("beforeRenderer",(function(){return e.onBeforeRenderer.apply(e,arguments)})),d(f(t.prototype),"enablePlugin",this).call(this)}}},{key:"disablePlugin",value:function(){var e=this,o=function(){return e.onBeforeRenderer.apply(e,arguments)};this.hot.addHook("beforeRenderer",o),this.hot.addHookOnce("afterRender",(function(){e.hot.removeHook("beforeRenderer",o)})),d(f(t.prototype),"disablePlugin",this).call(this)}},{key:"updatePlugin",value:function(){this.disablePlugin(),this.enablePlugin(),d(f(t.prototype),"updatePlugin",this).call(this)}},{key:"query",value:function(e){var t=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.getCallback(),n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.getQueryMethod(),r=this.hot.countRows(),i=this.hot.countCols(),s=[],c=this.hot;return Object(a.rangeEach)(0,r-1,(function(r){Object(a.rangeEach)(0,i-1,(function(i){var a=t.hot.getDataAtCell(r,i),l=t.hot.getCellMeta(r,i),u=l.search.callback||o,h=(l.search.queryMethod||n)(e,a,l);if(h){var d={row:r,col:i,data:a};s.push(d)}u&&u(c,r,i,a,h)}))})),s}},{key:"getCallback",value:function(){return this.callback}},{key:"setCallback",value:function(e){this.callback=e}},{key:"getQueryMethod",value:function(){return this.queryMethod}},{key:"setQueryMethod",value:function(e){this.queryMethod=e}},{key:"getSearchResultClass",value:function(){return this.searchResultClass}},{key:"setSearchResultClass",value:function(e){this.searchResultClass=e}},{key:"updatePluginSettings",value:function(e){Object(i.isObject)(e)&&(e.searchResultClass&&this.setSearchResultClass(e.searchResultClass),e.queryMethod&&this.setQueryMethod(e.queryMethod),e.callback&&this.setCallback(e.callback))}},{key:"onBeforeRenderer",value:function(e,t,o,n,r,i){var a,s=i.className||[],c=[];"string"==typeof s?c=s.split(" "):(a=c).push.apply(a,l(s)),this.isEnabled()&&i.isSearchResult?c.includes(this.searchResultClass)||c.push("".concat(this.searchResultClass)):c.includes(this.searchResultClass)&&c.splice(c.indexOf(this.searchResultClass),1),i.className=c.join(" ")}},{key:"destroy",value:function(){d(f(t.prototype),"destroy",this).call(this)}}])&&u(o.prototype,n),r&&u(o,r),t}(n.a);Object(r.d)("search",v),t.a=v},509:function(e,t,o){"use strict";o(11),o(12),o(13),o(8),o(30),o(17),o(18),o(5),o(31),o(9),o(10),o(58);var n=o(0),r=o(1),i=o(22),a=o(19),s=o(46);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e,t,o){return(h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,o){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}(e,t);if(n){var r=Object.getOwnPropertyDescriptor(n,t);return r.get?r.get.call(o):r.value}})(e,t,o||e)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(e){var o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(o=u(this,d(t).call(this,e))).scrollbars=[],o.clones=[],o.lockedCollection=!1,o.freezeOverlays=!1,o}var o,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),o=t,(i=[{key:"isEnabled",value:function(){return Object(s.isTouchSupported)()}},{key:"enablePlugin",value:function(){var e=this;this.enabled||(this.addHook("afterRender",(function(){return e.onAfterRender()})),this.registerEvents(),h(d(t.prototype),"enablePlugin",this).call(this))}},{key:"updatePlugin",value:function(){this.lockedCollection=!1,h(d(t.prototype),"updatePlugin",this).call(this)}},{key:"disablePlugin",value:function(){h(d(t.prototype),"disablePlugin",this).call(this)}},{key:"registerEvents",value:function(){var e=this;this.addHook("beforeTouchScroll",(function(){return e.onBeforeTouchScroll()})),this.addHook("afterMomentumScroll",(function(){return e.onAfterMomentumScroll()}))}},{key:"onAfterRender",value:function(){if(!this.lockedCollection){var e=this.hot.view.wt.wtOverlays,t=e.topOverlay,o=e.bottomOverlay,n=e.leftOverlay,r=e.topLeftCornerOverlay,i=e.bottomLeftCornerOverlay;this.lockedCollection=!0,this.scrollbars.length=0,this.scrollbars.push(t),o.clone&&this.scrollbars.push(o),this.scrollbars.push(n),r&&this.scrollbars.push(r),i&&i.clone&&this.scrollbars.push(i),this.clones.length=0,t.needFullRender&&this.clones.push(t.clone.wtTable.holder.parentNode),o.needFullRender&&this.clones.push(o.clone.wtTable.holder.parentNode),n.needFullRender&&this.clones.push(n.clone.wtTable.holder.parentNode),r&&this.clones.push(r.clone.wtTable.holder.parentNode),i&&i.clone&&this.clones.push(i.clone.wtTable.holder.parentNode)}}},{key:"onBeforeTouchScroll",value:function(){this.freezeOverlays=!0,Object(r.arrayEach)(this.clones,(function(e){Object(n.addClass)(e,"hide-tween")}))}},{key:"onAfterMomentumScroll",value:function(){var e=this;this.freezeOverlays=!1,Object(r.arrayEach)(this.clones,(function(e){Object(n.removeClass)(e,"hide-tween"),Object(n.addClass)(e,"show-tween")})),setTimeout((function(){Object(r.arrayEach)(e.clones,(function(e){Object(n.removeClass)(e,"show-tween")}))}),400),Object(r.arrayEach)(this.scrollbars,(function(e){e.refresh(),e.resetFixedPosition()})),this.hot.view.wt.wtOverlays.syncScrollWithMaster()}}])&&l(o.prototype,i),a&&l(o,a),t}(i.a);Object(a.d)("touchScroll",p),t.a=p},510:function(e,t,o){"use strict";o(11),o(12),o(13),o(73),o(213),o(37),o(52),o(27),o(8),o(482),o(49),o(110),o(56),o(17),o(18),o(5),o(16),o(9),o(10);var n=o(20),r=o(1),i=o(4),a=o(2),s=o(15),c=o(23);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t,o){return t&&h(e.prototype,t),o&&h(e,o),e}function f(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){return function(e){if(Array.isArray(e)){for(var t=0,o=new Array(e.length);t<e.length;t++)o[t]=e[t];return o}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var o=[],n=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(o.push(a.value),!t||o.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}return o}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function b(e){var t=this;this.instance=e,this.doneActions=[],this.undoneActions=[],this.ignoreNewActions=!1,e.addHook("afterChange",(function(o,n){var i=o&&o.length;if(i&&!["UndoRedo.undo","UndoRedo.redo","MergeCells"].includes(n)&&o.find((function(e){var t=m(e,4);return t[2]!==t[3]}))){var a=o.reduce((function(e,t){return e.push(v(t)),e}),[]);Object(r.arrayEach)(a,(function(t){t[1]=e.propToCol(t[1])}));var s=i>1?this.getSelected():[[a[0][0],a[0][1]]];t.done(new b.ChangeAction(a,s))}})),e.addHook("afterCreateRow",(function(e,o,n){if("UndoRedo.undo"!==n&&"UndoRedo.undo"!==n&&"auto"!==n){var r=new b.CreateRowAction(e,o);t.done(r)}})),e.addHook("beforeRemoveRow",(function(o,n,r,i){if("UndoRedo.undo"!==i&&"UndoRedo.redo"!==i&&"auto"!==i){var s=t.instance.getSourceDataArray(),c=(s.length+o)%s.length,l=e.toPhysicalRow(c),u=Object(a.deepClone)(s.slice(l,l+n));t.done(new b.RemoveRowAction(c,u))}})),e.addHook("afterCreateCol",(function(e,o,n){"UndoRedo.undo"!==n&&"UndoRedo.redo"!==n&&"auto"!==n&&t.done(new b.CreateColumnAction(e,o))})),e.addHook("beforeRemoveCol",(function(o,n,r,a){if("UndoRedo.undo"!==a&&"UndoRedo.redo"!==a&&"auto"!==a){var s=t.instance.getSourceDataArray(),c=(t.instance.countCols()+o)%t.instance.countCols(),l=[],u=[],h=[];Object(i.rangeEach)(s.length-1,(function(t){var o=[],r=s[t];Object(i.rangeEach)(c,c+(n-1),(function(t){o.push(r[e.runHooks("modifyCol",t)])})),l.push(o)})),Object(i.rangeEach)(n-1,(function(t){h.push(e.runHooks("modifyCol",c+t))})),Array.isArray(e.getSettings().colHeaders)&&Object(i.rangeEach)(n-1,(function(t){u.push(e.getSettings().colHeaders[e.runHooks("modifyCol",c+t)]||null)}));var d=t.instance.getPlugin("manualColumnMove"),f=d.isEnabled()?d.columnsMapper.__arrayMap:[],p=new b.RemoveColumnAction(c,h,l,u,f);t.done(p)}})),e.addHook("beforeCellAlignment",(function(e,o,n,r){var i=new b.CellAlignmentAction(e,o,n,r);t.done(i)})),e.addHook("beforeFilter",(function(e){t.done(new b.FiltersAction(e))})),e.addHook("beforeRowMove",(function(e,o){!1!==e&&t.done(new b.RowMoveAction(e,o))})),e.addHook("beforeMergeCells",(function(o,n){n||t.done(new b.MergeCellsAction(e,o))})),e.addHook("afterUnmergeCells",(function(o,n){n||t.done(new b.UnmergeCellsAction(e,o))}))}b.prototype.done=function(e){this.ignoreNewActions||(this.doneActions.push(e),this.undoneActions.length=0)},b.prototype.undo=function(){if(this.isUndoAvailable()){var e=this.doneActions.pop(),t=Object(a.deepClone)(e),o=this.instance;if(!1===o.runHooks("beforeUndo",t))return;this.ignoreNewActions=!0;var n=this;e.undo(this.instance,(function(){n.ignoreNewActions=!1,n.undoneActions.push(e)})),o.runHooks("afterUndo",t)}},b.prototype.redo=function(){if(this.isRedoAvailable()){var e=this.undoneActions.pop(),t=Object(a.deepClone)(e),o=this.instance;if(!1===o.runHooks("beforeRedo",t))return;this.ignoreNewActions=!0;var n=this;e.redo(this.instance,(function(){n.ignoreNewActions=!1,n.doneActions.push(e)})),o.runHooks("afterRedo",t)}},b.prototype.isUndoAvailable=function(){return this.doneActions.length>0},b.prototype.isRedoAvailable=function(){return this.undoneActions.length>0},b.prototype.clear=function(){this.doneActions.length=0,this.undoneActions.length=0},b.Action=function(){},b.Action.prototype.undo=function(){},b.Action.prototype.redo=function(){},b.ChangeAction=function(e,t){this.changes=e,this.selected=t,this.actionType="change"},Object(a.inherit)(b.ChangeAction,b.Action),b.ChangeAction.prototype.undo=function(e,t){for(var o=Object(a.deepClone)(this.changes),n=e.countEmptyRows(!0),r=e.countEmptyCols(!0),i=0,s=o.length;i<s;i++)o[i].splice(3,1);e.addHookOnce("afterChange",t),e.setDataAtCell(o,null,null,"UndoRedo.undo");for(var c=0,l=o.length;c<l;c++){var u=m(o[c],2),h=u[0],d=u[1];e.getSettings().minSpareRows&&h+1+e.getSettings().minSpareRows===e.countRows()&&n===e.getSettings().minSpareRows&&(e.alter("remove_row",parseInt(h+1,10),e.getSettings().minSpareRows),e.undoRedo.doneActions.pop()),e.getSettings().minSpareCols&&d+1+e.getSettings().minSpareCols===e.countCols()&&r===e.getSettings().minSpareCols&&(e.alter("remove_col",parseInt(d+1,10),e.getSettings().minSpareCols),e.undoRedo.doneActions.pop())}e.selectCells(this.selected,!1,!1)},b.ChangeAction.prototype.redo=function(e,t){for(var o=Object(a.deepClone)(this.changes),n=0,r=o.length;n<r;n++)o[n].splice(2,1);e.addHookOnce("afterChange",t),e.setDataAtCell(o,null,null,"UndoRedo.redo"),this.selected&&e.selectCells(this.selected,!1,!1)},b.CreateRowAction=function(e,t){this.index=e,this.amount=t,this.actionType="insert_row"},Object(a.inherit)(b.CreateRowAction,b.Action),b.CreateRowAction.prototype.undo=function(e,t){var o=e.countRows(),n=e.getSettings().minSpareRows;this.index>=o&&this.index-n<o&&(this.index-=n),e.addHookOnce("afterRemoveRow",t),e.alter("remove_row",this.index,this.amount,"UndoRedo.undo")},b.CreateRowAction.prototype.redo=function(e,t){e.addHookOnce("afterCreateRow",t),e.alter("insert_row",this.index,this.amount,"UndoRedo.redo")},b.RemoveRowAction=function(e,t){this.index=e,this.data=t,this.actionType="remove_row"},Object(a.inherit)(b.RemoveRowAction,b.Action),b.RemoveRowAction.prototype.undo=function(e,t){e.alter("insert_row",this.index,this.data.length,"UndoRedo.undo"),e.addHookOnce("afterRender",t),e.populateFromArray(this.index,0,this.data,void 0,void 0,"UndoRedo.undo")},b.RemoveRowAction.prototype.redo=function(e,t){e.addHookOnce("afterRemoveRow",t),e.alter("remove_row",this.index,this.data.length,"UndoRedo.redo")},b.CreateColumnAction=function(e,t){this.index=e,this.amount=t,this.actionType="insert_col"},Object(a.inherit)(b.CreateColumnAction,b.Action),b.CreateColumnAction.prototype.undo=function(e,t){e.addHookOnce("afterRemoveCol",t),e.alter("remove_col",this.index,this.amount,"UndoRedo.undo")},b.CreateColumnAction.prototype.redo=function(e,t){e.addHookOnce("afterCreateCol",t),e.alter("insert_col",this.index,this.amount,"UndoRedo.redo")},b.RemoveColumnAction=function(e,t,o,n,r){this.index=e,this.indexes=t,this.data=o,this.amount=this.data[0].length,this.headers=n,this.columnPositions=r.slice(0),this.actionType="remove_col"},Object(a.inherit)(b.RemoveColumnAction,b.Action),b.RemoveColumnAction.prototype.undo=function(e,t){var o,n=this,a=this.indexes.slice(0).sort(),s=function(e,t,o){return o[n.indexes.indexOf(a[t])]},c=[];Object(i.rangeEach)(this.data.length-1,(function(e){c[e]=Object(r.arrayMap)(n.data[e],s)}));var l;l=Object(r.arrayMap)(this.headers,s);var u=[];e.runHooks("beforeCreateCol",this.indexes[0],this.indexes.length,"UndoRedo.undo"),Object(i.rangeEach)(this.data.length-1,(function(t){o=e.getSourceDataAtRow(t),Object(i.rangeEach)(a.length-1,(function(e){o.splice(a[e],0,c[t][e]),u.push([t,a[e],null,c[t][e]])}))})),e.getPlugin("formulas")&&e.getPlugin("formulas").onAfterSetDataAtCell(u),void 0!==this.headers&&Object(i.rangeEach)(l.length-1,(function(t){e.getSettings().colHeaders.splice(a[t],0,l[t])})),e.getPlugin("manualColumnMove")&&(e.getPlugin("manualColumnMove").columnsMapper.__arrayMap=this.columnPositions),e.addHookOnce("afterRender",t),e.runHooks("afterCreateCol",this.indexes[0],this.indexes.length,"UndoRedo.undo"),e.getPlugin("formulas")&&e.getPlugin("formulas").recalculateFull(),e.render()},b.RemoveColumnAction.prototype.redo=function(e,t){e.addHookOnce("afterRemoveCol",t),e.alter("remove_col",this.index,this.amount,"UndoRedo.redo")},b.CellAlignmentAction=function(e,t,o,n){this.stateBefore=e,this.range=t,this.type=o,this.alignment=n},b.CellAlignmentAction.prototype.undo=function(e,t){var o=this;Object(r.arrayEach)(this.range,(function(t){for(var n=t.from,r=t.to,i=n.row;i<=r.row;i+=1)for(var a=n.col;a<=r.col;a+=1)e.setCellMeta(i,a,"className",o.stateBefore[i][a]||" htLeft")})),e.addHookOnce("afterRender",t),e.render()},b.CellAlignmentAction.prototype.redo=function(e,t){Object(c.a)(this.range,this.type,this.alignment,(function(t,o){return e.getCellMeta(t,o)}),(function(t,o,n,r){return e.setCellMeta(t,o,n,r)})),e.addHookOnce("afterRender",t),e.render()},b.FiltersAction=function(e){this.conditionsStack=e,this.actionType="filter"},Object(a.inherit)(b.FiltersAction,b.Action),b.FiltersAction.prototype.undo=function(e,t){var o=e.getPlugin("filters");e.addHookOnce("afterRender",t),o.conditionCollection.importAllConditions(this.conditionsStack.slice(0,this.conditionsStack.length-1)),o.filter()},b.FiltersAction.prototype.redo=function(e,t){var o=e.getPlugin("filters");e.addHookOnce("afterRender",t),o.conditionCollection.importAllConditions(this.conditionsStack),o.filter()};var w=function(e){function t(e,o){var n;return u(this,t),(n=f(this,p(t).call(this))).cellRange=o,n.rangeData=e.getData(o.from.row,o.from.col,o.to.row,o.to.col),n}return y(t,e),d(t,[{key:"undo",value:function(e,t){var o=e.getPlugin("mergeCells");e.addHookOnce("afterRender",t),o.unmergeRange(this.cellRange,!0),e.populateFromArray(this.cellRange.from.row,this.cellRange.from.col,this.rangeData,void 0,void 0,"MergeCells")}},{key:"redo",value:function(e,t){var o=e.getPlugin("mergeCells");e.addHookOnce("afterRender",t),o.mergeRange(this.cellRange)}}]),t}(b.Action);b.MergeCellsAction=w;var R=function(e){function t(e,o){var n;return u(this,t),(n=f(this,p(t).call(this))).cellRange=o,n}return y(t,e),d(t,[{key:"undo",value:function(e,t){var o=e.getPlugin("mergeCells");e.addHookOnce("afterRender",t),o.mergeRange(this.cellRange,!0)}},{key:"redo",value:function(e,t){var o=e.getPlugin("mergeCells");e.addHookOnce("afterRender",t),o.unmergeRange(this.cellRange,!0),e.render()}}]),t}(b.Action);function C(){void 0===this.getSettings().undo||this.getSettings().undo?this.undoRedo||(this.undoRedo=new b(this),function(e){e.undo=function(){return e.undoRedo.undo()},e.redo=function(){return e.undoRedo.redo()},e.isUndoAvailable=function(){return e.undoRedo.isUndoAvailable()},e.isRedoAvailable=function(){return e.undoRedo.isRedoAvailable()},e.clearUndo=function(){return e.undoRedo.clear()}}(this),this.addHook("beforeKeyDown",O),this.addHook("afterChange",k)):this.undoRedo&&(delete this.undoRedo,function(e){delete e.undo,delete e.redo,delete e.isUndoAvailable,delete e.isRedoAvailable,delete e.clearUndo}(this),this.removeHook("beforeKeyDown",O),this.removeHook("afterChange",k))}function O(e){if(!Object(s.isImmediatePropagationStopped)(e)){var t=this.getActiveEditor();if(!t||!t.isOpened()){var o=e.altKey,n=e.ctrlKey,r=e.keyCode,i=e.metaKey,a=e.shiftKey;if((n||i)&&!o)89===r||a&&90===r?(this.undoRedo.redo(),Object(s.stopImmediatePropagation)(e)):90===r&&(this.undoRedo.undo(),Object(s.stopImmediatePropagation)(e))}}}function k(e,t){if("loadData"===t)return this.undoRedo.clear()}b.UnmergeCellsAction=R,b.RowMoveAction=function(e,t){this.rows=e.slice(),this.target=t},Object(a.inherit)(b.RowMoveAction,b.Action),b.RowMoveAction.prototype.undo=function(e,t){var o=e.getPlugin("manualRowMove");e.addHookOnce("afterRender",t);for(var n=this.rows[0]<this.target?-1*this.rows.length:0,r=this.rows[0]>this.target?this.rows[0]+this.rows.length:this.rows[0],i=[],a=this.rows.length+n,s=n;s<a;s+=1)i.push(this.target+s);o.moveRows(i.slice(),r),e.render(),e.selectCell(this.rows[0],0,this.rows[this.rows.length-1],e.countCols()-1,!1,!1)},b.RowMoveAction.prototype.redo=function(e,t){var o=e.getPlugin("manualRowMove");e.addHookOnce("afterRender",t),o.moveRows(this.rows.slice(),this.target),e.render();var n=this.rows[0]<this.target?this.target-this.rows.length:this.target;e.selectCell(n,0,n+this.rows.length-1,e.countCols()-1,!1,!1)};var A=n.a.getSingleton();A.add("afterInit",C),A.add("afterUpdateSettings",C),A.register("beforeUndo"),A.register("afterUndo"),A.register("beforeRedo"),A.register("afterRedo"),t.a=b},530:function(e,t,o){"use strict";o(11),o(12),o(13),o(33),o(144),o(73),o(37),o(52),o(8),o(123),o(124),o(30),o(17),o(18),o(5),o(31),o(125),o(63),o(9),o(10);var n=o(22),r=o(4),i=o(19),a=o(641),s=o(1);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t,o){return(h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,o){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}(e,t);if(n){var r=Object.getOwnPropertyDescriptor(n,t);return r.get?r.get.call(o):r.value}})(e,t,o||e)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(e){var o,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(o=!(r=d(t).call(this,e))||"object"!==c(r)&&"function"!=typeof r?u(n):r).trimmedRows=[],o.removedRows=[],o.rowsMapper=new a.a(u(o)),o}var o,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),o=t,(n=[{key:"isEnabled",value:function(){return!!this.hot.getSettings().trimRows}},{key:"enablePlugin",value:function(){var e=this;if(!this.enabled){var o=this.hot.getSettings().trimRows;Array.isArray(o)&&(this.trimmedRows=o),this.rowsMapper.createMap(this.hot.countSourceRows()),this.addHook("modifyRow",(function(t,o){return e.onModifyRow(t,o)})),this.addHook("unmodifyRow",(function(t,o){return e.onUnmodifyRow(t,o)})),this.addHook("beforeCreateRow",(function(t,o,n){return e.onBeforeCreateRow(t,o,n)})),this.addHook("afterCreateRow",(function(t,o){return e.onAfterCreateRow(t,o)})),this.addHook("beforeRemoveRow",(function(t,o){return e.onBeforeRemoveRow(t,o)})),this.addHook("afterRemoveRow",(function(){return e.onAfterRemoveRow()})),this.addHook("afterLoadData",(function(t){return e.onAfterLoadData(t)})),h(d(t.prototype),"enablePlugin",this).call(this)}}},{key:"updatePlugin",value:function(){var e=this.hot.getSettings().trimRows;Array.isArray(e)&&(this.disablePlugin(),this.enablePlugin()),h(d(t.prototype),"updatePlugin",this).call(this)}},{key:"disablePlugin",value:function(){this.trimmedRows=[],this.removedRows.length=0,this.rowsMapper.clearMap(),h(d(t.prototype),"disablePlugin",this).call(this)}},{key:"trimRows",value:function(e){var t=this.trimmedRows,o=this.isValidConfig(e),n=t;o&&(n=Array.from(new Set(t.concat(e)))),!1!==this.hot.runHooks("beforeTrimRow",t,n,o)&&(o&&(this.trimmedRows=n,this.hot.runHooks("skipLengthCache",100),this.rowsMapper.createMap(this.hot.countSourceRows())),this.hot.runHooks("afterTrimRow",t,n,o,o&&n.length>t.length))}},{key:"trimRow",value:function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];this.trimRows(t)}},{key:"untrimRows",value:function(e){var t=this.trimmedRows,o=this.isValidConfig(e),n=t;o&&(n=this.trimmedRows.filter((function(t){return!1===e.includes(t)}))),!1!==this.hot.runHooks("beforeUntrimRow",t,n,o)&&(o&&(this.trimmedRows=n,this.hot.runHooks("skipLengthCache",100),this.rowsMapper.createMap(this.hot.countSourceRows())),this.hot.runHooks("afterUntrimRow",t,n,o,o&&n.length<t.length))}},{key:"untrimRow",value:function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];this.untrimRows(t)}},{key:"isTrimmed",value:function(e){return this.trimmedRows.includes(e)}},{key:"untrimAll",value:function(){this.untrimRows([].concat(this.trimmedRows))}},{key:"isValidConfig",value:function(e){var t=this;return e.every((function(e){return Number.isInteger(e)&&e>=0&&e<t.hot.countSourceRows()}))}},{key:"onModifyRow",value:function(e,t){var o=e;return t!==this.pluginName&&(o=this.rowsMapper.getValueByIndex(o)),o}},{key:"onUnmodifyRow",value:function(e,t){var o=e;return t!==this.pluginName&&(o=this.rowsMapper.getIndexByValue(o)),o}},{key:"onBeforeCreateRow",value:function(e,t,o){if(this.isEnabled()&&this.trimmedRows.length>0&&"auto"===o)return!1}},{key:"onAfterCreateRow",value:function(e,t){var o=this;this.rowsMapper.shiftItems(e,t),this.trimmedRows=Object(s.arrayMap)(this.trimmedRows,(function(n){return n>=o.rowsMapper.getValueByIndex(e)?n+t:n}))}},{key:"onBeforeRemoveRow",value:function(e,t){var o=this;this.removedRows.length=0,!1!==e&&Object(r.rangeEach)(e,e+t-1,(function(e){o.removedRows.push(o.hot.runHooks("modifyRow",e,o.pluginName))}))}},{key:"onAfterRemoveRow",value:function(){var e=this;this.rowsMapper.unshiftItems(this.removedRows),this.trimmedRows=Object(s.arrayMap)(this.trimmedRows,(function(t){return t-e.removedRows.filter((function(e){return e<t})).length}))}},{key:"onAfterLoadData",value:function(e){e||this.rowsMapper.createMap(this.hot.countSourceRows())}},{key:"destroy",value:function(){this.rowsMapper.destroy(),h(d(t.prototype),"destroy",this).call(this)}}])&&l(o.prototype,n),i&&l(o,i),t}(n.a);Object(i.d)("trimRows",p),t.a=p},641:function(e,t,o){"use strict";var n=o(92),r=o(2),i=o(4);function a(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.trimRows=t}var t,o,n;return t=e,(o=[{key:"createMap",value:function(e){var t=this,o=0,n=void 0===e?this._arrayMap.length:e;this._arrayMap.length=0,Object(i.rangeEach)(n-1,(function(e){t.trimRows.isTrimmed(e)?o+=1:t._arrayMap[e-o]=e}))}},{key:"destroy",value:function(){this._arrayMap=null}}])&&a(t.prototype,o),n&&a(t,n),e}();Object(r.mixin)(s,n.a),t.a=s}}]);