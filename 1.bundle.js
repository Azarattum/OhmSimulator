(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{167:function(t,e,n){"use strict";var o=n(494);n.d(e,"a",(function(){return o.a}));var r=n(495);n.d(e,"b",(function(){return r.a}));var i=n(496);n.d(e,"c",(function(){return i.a}));var a=n(497);n.d(e,"d",(function(){return a.a}));var c=n(498);n.d(e,"e",(function(){return c.a}))},298:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return u}));var o=n(617);var r,i,a,c=(r={},i="csv",a=o.a,i in r?Object.defineProperty(r,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[i]=a,r);function u(t,e,n){return"function"==typeof c[t]?new c[t](e,n):null}},493:function(t,e,n){"use strict";n(11),n(12),n(13),n(27),n(8),n(56),n(489),n(30),n(17),n(95),n(18),n(5),n(479),n(31),n(16),n(9),n(10);var o=n(22),r=n(19),i=n(2),a=n(4),c=n(1),u=n(7),s=n(3),l=n(167),f=n(54),h=n(135);function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t))&&"[object Arguments]"!==Object.prototype.toString.call(t))return;var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function b(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function y(t,e){return!e||"object"!==d(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function v(t,e,n){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=g(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var O=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=y(this,g(e).call(this,t))).savedBorders=[],n}var n,o,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(e,t),n=e,(o=[{key:"isEnabled",value:function(){return!!this.hot.getSettings().customBorders}},{key:"enablePlugin",value:function(){var t=this;this.enabled||(this.addHook("afterContextMenuDefaultOptions",(function(e){return t.onAfterContextMenuDefaultOptions(e)})),this.addHook("init",(function(){return t.onAfterInit()})),v(g(e.prototype),"enablePlugin",this).call(this))}},{key:"disablePlugin",value:function(){this.hideBorders(),v(g(e.prototype),"disablePlugin",this).call(this)}},{key:"updatePlugin",value:function(){this.disablePlugin(),this.enablePlugin(),this.changeBorderSettings(),v(g(e.prototype),"updatePlugin",this).call(this)}},{key:"setBorders",value:function(t,e){var n=this,o=e?Object.keys(e):["top","right","bottom","left"],r=Object(h.b)(t),i=Object(h.c)(r);Object(c.arrayEach)(t,(function(t){for(var r=p(i(t),4),a=r[0],u=r[1],s=r[2],l=r[3],f=function(t){for(var r=function(r){Object(c.arrayEach)(o,(function(o){n.prepareBorderFromCustomAdded(t,r,e,o)}))},i=u;i<=l;i+=1)r(i)},h=a;h<=s;h+=1)f(h)})),this.hot.view.render()}},{key:"getBorders",value:function(t){var e=this;if(!Array.isArray(t))return this.savedBorders;var n=Object(h.b)(t),o=Object(h.c)(n),r=[];return Object(c.arrayEach)(t,(function(t){for(var n=p(o(t),4),i=n[0],a=n[1],u=n[2],s=n[3],l=function(t){for(var n=function(n){Object(c.arrayEach)(e.savedBorders,(function(e){e.row===t&&e.col===n&&r.push(e)}))},o=a;o<=s;o+=1)n(o)},f=i;f<=u;f+=1)l(f)})),r}},{key:"clearBorders",value:function(t){var e=this;t?this.setBorders(t):(Object(c.arrayEach)(this.savedBorders,(function(t){e.clearBordersFromSelectionSettings(t.id),e.clearNullCellRange(),e.hot.removeCellMeta(t.row,t.col,"borders")})),this.savedBorders.length=0)}},{key:"insertBorderIntoSettings",value:function(t,e){this.checkSavedBorders(t)||this.savedBorders.push(t);var n={row:t.row,col:t.col},o=new u.b(n,n,n);this.checkCustomSelections(t,o,e)||this.hot.selection.highlight.addCustomSelection({border:t,cellRange:o})}},{key:"prepareBorderFromCustomAdded",value:function(t,e,n,o){var r=Object(f.c)(t,e);n&&(r=Object(f.f)(r,n),Object(c.arrayEach)(this.hot.selection.highlight.customSelections,(function(t){if(r.id===t.settings.id)return Object.assign(t.settings,n),r=t.settings,!1}))),this.hot.setCellMeta(t,e,"borders",r),this.insertBorderIntoSettings(r,o)}},{key:"prepareBorderFromCustomAddedRange",value:function(t){var e=this,n=t.range;Object(a.rangeEach)(n.from.row,n.to.row,(function(o){Object(a.rangeEach)(n.from.col,n.to.col,(function(r){var a=Object(f.c)(o,r),c=0;o===n.from.row&&Object(i.hasOwnProperty)(t,"top")&&(c+=1,a.top=t.top),o===n.to.row&&Object(i.hasOwnProperty)(t,"bottom")&&(c+=1,a.bottom=t.bottom),r===n.from.col&&Object(i.hasOwnProperty)(t,"left")&&(c+=1,a.left=t.left),r===n.to.col&&Object(i.hasOwnProperty)(t,"right")&&(c+=1,a.right=t.right),c>0&&(e.hot.setCellMeta(o,r,"borders",a),e.insertBorderIntoSettings(a))}))}))}},{key:"removeAllBorders",value:function(t,e){var n=Object(f.d)(t,e);this.spliceBorder(n),this.clearBordersFromSelectionSettings(n),this.clearNullCellRange(),this.hot.removeCellMeta(t,e,"borders")}},{key:"setBorder",value:function(t,e,n,o){var r=this.hot.getCellMeta(t,e).borders;r&&void 0!==r.border||(r=Object(f.c)(t,e)),o?(r[n]=Object(f.e)(),4===this.countHide(r)?this.removeAllBorders(t,e):(this.checkCustomSelectionsFromContextMenu(r,n,o)||this.insertBorderIntoSettings(r),this.hot.setCellMeta(t,e,"borders",r))):(r[n]=Object(f.b)(),this.checkCustomSelectionsFromContextMenu(r,n,o)||this.insertBorderIntoSettings(r),this.hot.setCellMeta(t,e,"borders",r))}},{key:"prepareBorder",value:function(t,e,n){var o=this;Object(c.arrayEach)(t,(function(t){var r=t.start,i=t.end;if(r.row===i.row&&r.col===i.col)"noBorders"===e?o.removeAllBorders(r.row,r.col):o.setBorder(r.row,r.col,e,n);else switch(e){case"noBorders":Object(a.rangeEach)(r.col,i.col,(function(t){Object(a.rangeEach)(r.row,i.row,(function(e){o.removeAllBorders(e,t)}))}));break;case"top":Object(a.rangeEach)(r.col,i.col,(function(t){o.setBorder(r.row,t,e,n)}));break;case"right":Object(a.rangeEach)(r.row,i.row,(function(t){o.setBorder(t,i.col,e,n)}));break;case"bottom":Object(a.rangeEach)(r.col,i.col,(function(t){o.setBorder(i.row,t,e,n)}));break;case"left":Object(a.rangeEach)(r.row,i.row,(function(t){o.setBorder(t,r.col,e,n)}))}}))}},{key:"createCustomBorders",value:function(t){var e=this;Object(c.arrayEach)(t,(function(t){t.range?e.prepareBorderFromCustomAddedRange(t):e.prepareBorderFromCustomAdded(t.row,t.col,t)}))}},{key:"countHide",value:function(t){var e=Object.values(t);return Object(c.arrayReduce)(e,(function(t,e){var n=t;return e.hide&&(n+=1),n}),0)}},{key:"clearBordersFromSelectionSettings",value:function(t){var e=Object(c.arrayMap)(this.hot.selection.highlight.customSelections,(function(t){return t.settings.id})).indexOf(t);e>-1&&this.hot.selection.highlight.customSelections[e].clear()}},{key:"clearNullCellRange",value:function(){var t=this;Object(c.arrayEach)(this.hot.selection.highlight.customSelections,(function(e,n){if(null===e.cellRange)return t.hot.selection.highlight.customSelections[n].destroy(),t.hot.selection.highlight.customSelections.splice(n,1),!1}))}},{key:"hideBorders",value:function(){var t=this;Object(c.arrayEach)(this.savedBorders,(function(e){t.clearBordersFromSelectionSettings(e.id),t.clearNullCellRange()}))}},{key:"spliceBorder",value:function(t){var e=Object(c.arrayMap)(this.savedBorders,(function(t){return t.id})).indexOf(t);e>-1&&this.savedBorders.splice(e,1)}},{key:"checkSavedBorders",value:function(t){var e=this,n=!1;return 4===this.countHide(t)?(this.spliceBorder(t.id),n=!0):Object(c.arrayEach)(this.savedBorders,(function(o,r){if(t.id===o.id)return e.savedBorders[r]=t,n=!0,!1})),n}},{key:"checkCustomSelectionsFromContextMenu",value:function(t,e,n){var o=!1;return Object(c.arrayEach)(this.hot.selection.highlight.customSelections,(function(r){if(t.id===r.settings.id)return Object(i.objectEach)(r.instanceBorders,(function(t){t.toggleHiddenClass(e,n)})),o=!0,!1})),o}},{key:"checkCustomSelections",value:function(t,e,n){var o=this.countHide(t),r=!1;return 4===o?(this.removeAllBorders(t.row,t.col),r=!0):Object(c.arrayEach)(this.hot.selection.highlight.customSelections,(function(o){if(t.id===o.settings.id)return o.cellRange=e,n&&Object(i.objectEach)(o.instanceBorders,(function(e){e.changeBorderStyle(n,t)})),r=!0,!1})),r}},{key:"changeBorderSettings",value:function(){var t=this.hot.getSettings().customBorders;Array.isArray(t)?(t.length||(this.savedBorders=t),this.createCustomBorders(t)):void 0!==t&&this.createCustomBorders(this.savedBorders)}},{key:"onAfterContextMenuDefaultOptions",value:function(t){this.hot.getSettings().customBorders&&t.items.push({name:"---------"},{key:"borders",name:function(){return this.getTranslatedPhrase(s.CONTEXTMENU_ITEMS_BORDERS)},disabled:function(){return this.selection.isSelectedByCorner()},submenu:{items:[Object(l.e)(this),Object(l.d)(this),Object(l.a)(this),Object(l.b)(this),Object(l.c)(this)]}})}},{key:"onAfterInit",value:function(){this.changeBorderSettings()}},{key:"destroy",value:function(){v(g(e.prototype),"destroy",this).call(this)}}])&&b(n.prototype,o),r&&b(n,r),e}(o.a);Object(r.d)("customBorders",O),e.a=O},494:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n(3),r=n(54);function i(t){return{key:"borders:bottom",name:function(){var t=this.getTranslatedPhrase(o.CONTEXTMENU_ITEMS_BORDERS_BOTTOM);return Object(r.a)(this,"bottom")&&(t=Object(r.g)(t)),t},callback:function(e,n){var o=Object(r.a)(this,"bottom");t.prepareBorder(n,"bottom",o)}}}},495:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n(3),r=n(54);function i(t){return{key:"borders:left",name:function(){var t=this.getTranslatedPhrase(o.CONTEXTMENU_ITEMS_BORDERS_LEFT);return Object(r.a)(this,"left")&&(t=Object(r.g)(t)),t},callback:function(e,n){var o=Object(r.a)(this,"left");t.prepareBorder(n,"left",o)}}}},496:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n(3),r=n(54);function i(t){return{key:"borders:no_borders",name:function(){return this.getTranslatedPhrase(o.CONTEXTMENU_ITEMS_REMOVE_BORDERS)},callback:function(e,n){t.prepareBorder(n,"noBorders")},disabled:function(){return!Object(r.a)(this)}}}},497:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n(3),r=n(54);function i(t){return{key:"borders:right",name:function(){var t=this.getTranslatedPhrase(o.CONTEXTMENU_ITEMS_BORDERS_RIGHT);return Object(r.a)(this,"right")&&(t=Object(r.g)(t)),t},callback:function(e,n){var o=Object(r.a)(this,"right");t.prepareBorder(n,"right",o)}}}},498:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n(3),r=n(54);function i(t){return{key:"borders:top",name:function(){var t=this.getTranslatedPhrase(o.CONTEXTMENU_ITEMS_BORDERS_TOP);return Object(r.a)(this,"top")&&(t=Object(r.g)(t)),t},callback:function(e,n){var o=Object(r.a)(this,"top");t.prepareBorder(n,"top",o)}}}},499:function(t,e,n){"use strict";n(11),n(12),n(13),n(8),n(30),n(17),n(18),n(5),n(31),n(9),n(10);var o=n(22),r=n(24),i=n(19),a=n(15),c=n(0);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t,e,n){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=h(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var p=function(t){function e(t){var n,o,i;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),o=this,(n=!(i=h(e).call(this,t))||"object"!==u(i)&&"function"!=typeof i?l(o):i).eventManager=new r.a(l(n)),n.boundaries=null,n.callback=null,n.listening=!1,n}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(e,t),n=e,(o=[{key:"isEnabled",value:function(){return!!this.hot.getSettings().dragToScroll}},{key:"enablePlugin",value:function(){var t=this;this.enabled||(this.addHook("afterOnCellMouseDown",(function(e){return t.setupListening(e)})),this.addHook("afterOnCellCornerMouseDown",(function(e){return t.setupListening(e)})),this.registerEvents(),f(h(e.prototype),"enablePlugin",this).call(this))}},{key:"updatePlugin",value:function(){this.disablePlugin(),this.enablePlugin(),f(h(e.prototype),"updatePlugin",this).call(this)}},{key:"disablePlugin",value:function(){this.unregisterEvents(),f(h(e.prototype),"disablePlugin",this).call(this)}},{key:"setBoundaries",value:function(t){this.boundaries=t}},{key:"setCallback",value:function(t){this.callback=t}},{key:"check",value:function(t,e){var n=0,o=0;e<this.boundaries.top?o=e-this.boundaries.top:e>this.boundaries.bottom&&(o=e-this.boundaries.bottom),t<this.boundaries.left?n=t-this.boundaries.left:t>this.boundaries.right&&(n=t-this.boundaries.right),this.callback(n,o)}},{key:"listen",value:function(){this.listening=!0}},{key:"unlisten",value:function(){this.listening=!1}},{key:"isListening",value:function(){return this.listening}},{key:"registerEvents",value:function(){for(var t=this,e=this.hot.rootWindow;e;)this.eventManager.addEventListener(e.document,"contextmenu",(function(){return t.unlisten()})),this.eventManager.addEventListener(e.document,"mouseup",(function(){return t.unlisten()})),this.eventManager.addEventListener(e.document,"mousemove",(function(e){return t.onMouseMove(e)})),e=Object(c.getParentWindow)(e)}},{key:"unregisterEvents",value:function(){this.eventManager.clear()}},{key:"setupListening",value:function(t){if(!Object(a.isRightClick)(t)){var e=this.hot.view.wt.wtTable.holder;e!==this.hot.rootWindow&&(this.setBoundaries(e.getBoundingClientRect()),this.setCallback((function(t,n){t<0?e.scrollLeft-=50:t>0&&(e.scrollLeft+=50),n<0?e.scrollTop-=20:n>0&&(e.scrollTop+=20)})),this.listen())}}},{key:"onMouseMove",value:function(t){this.isListening()&&this.check(t.clientX,t.clientY)}},{key:"destroy",value:function(){f(h(e.prototype),"destroy",this).call(this)}}])&&s(n.prototype,o),i&&s(n,i),e}(o.a);Object(i.d)("dragToScroll",p),e.a=p},516:function(t,e,n){"use strict";n(11),n(12),n(13),n(33),n(27),n(8),n(30),n(17),n(18),n(5),n(31),n(9),n(10);var o=n(22),r=n(1),i=n(237),a=n(24),c=n(0),u=n(238),s=n(161),l=n(19),f=n(20),h=n(15),d=n(25);function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t,e,n){return(y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=v(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function g(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function m(t,e,n){return e&&g(t.prototype,e),n&&g(t,n),t}function O(t,e){return(O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}f.a.getSingleton().register("afterDropdownMenuDefaultOptions"),f.a.getSingleton().register("beforeDropdownMenuShow"),f.a.getSingleton().register("afterDropdownMenuShow"),f.a.getSingleton().register("afterDropdownMenuHide"),f.a.getSingleton().register("afterDropdownMenuExecute");var w=function(t){function e(t){var n,o,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),o=this,r=v(e).call(this,t),(n=!r||"object"!==p(r)&&"function"!=typeof r?b(o):r).eventManager=new a.a(b(n)),n.commandExecutor=new i.a(n.hot),n.itemsFactory=null,n.menu=null,n.hot.addHook("afterGetColHeader",(function(t,e){return n.onAfterGetColHeader(t,e)})),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&O(t,e)}(e,t),m(e,null,[{key:"DEFAULT_ITEMS",get:function(){return[d.c,d.d,d.m,d.i,d.m,d.b,d.m,d.g,d.m,d.a]}}]),m(e,[{key:"isEnabled",value:function(){return this.hot.getSettings().dropdownMenu}},{key:"enablePlugin",value:function(){var t=this;if(!this.enabled){this.itemsFactory=new u.a(this.hot,e.DEFAULT_ITEMS);var n=this.hot.getSettings().dropdownMenu,o={items:this.itemsFactory.getItems(n)};this.registerEvents(),"function"==typeof n.callback&&this.commandExecutor.setCommonCallback(n.callback),y(v(e.prototype),"enablePlugin",this).call(this),this.callOnPluginsReady((function(){t.hot.runHooks("afterDropdownMenuDefaultOptions",o),t.itemsFactory.setPredefinedItems(o.items);var e=t.itemsFactory.getItems(n);t.menu&&t.menu.destroy(),t.menu=new s.a(t.hot,{className:"htDropdownMenu",keepInViewport:!0,container:n.uiContainer||t.hot.rootDocument.body}),t.hot.runHooks("beforeDropdownMenuSetItems",e),t.menu.setMenuItems(e),t.menu.addLocalHook("beforeOpen",(function(){return t.onMenuBeforeOpen()})),t.menu.addLocalHook("afterOpen",(function(){return t.onMenuAfterOpen()})),t.menu.addLocalHook("afterClose",(function(){return t.onMenuAfterClose()})),t.menu.addLocalHook("executeCommand",(function(){for(var e,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.executeCommand).call.apply(e,[t].concat(o))})),Object(r.arrayEach)(e,(function(e){return t.commandExecutor.registerCommand(e.key,e)}))}))}}},{key:"updatePlugin",value:function(){this.disablePlugin(),this.enablePlugin(),y(v(e.prototype),"updatePlugin",this).call(this)}},{key:"disablePlugin",value:function(){this.close(),this.menu&&this.menu.destroy(),y(v(e.prototype),"disablePlugin",this).call(this)}},{key:"registerEvents",value:function(){var t=this;this.eventManager.addEventListener(this.hot.rootElement,"click",(function(e){return t.onTableClick(e)}))}},{key:"open",value:function(t){this.menu&&(this.menu.open(),t.width&&this.menu.setOffset("left",t.width),this.menu.setPosition(t),this.menu.hotMenu.isHotTableEnv=this.hot.isHotTableEnv)}},{key:"close",value:function(){this.menu&&this.menu.close()}},{key:"executeCommand",value:function(t){for(var e,n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];(e=this.commandExecutor).execute.apply(e,[t].concat(o))}},{key:"setListening",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.menu.isOpened()&&(t?this.menu.hotMenu.listen():this.menu.hotMenu.unlisten())}},{key:"onTableClick",value:function(t){if(Object(h.stopPropagation)(t),Object(c.hasClass)(t.target,"changeType")&&!this.menu.isOpened()){var e=0,n=0;if(this.hot.rootDocument!==this.menu.container.ownerDocument){var o=this.hot.rootWindow.frameElement.getBoundingClientRect();e=o.top,n=o.left}var r=t.target.getBoundingClientRect();this.open({left:r.left+n,top:r.top+t.target.offsetHeight+3+e,width:r.width,height:r.height})}}},{key:"onAfterGetColHeader",value:function(t,e){var n=e.parentNode;if(n){var o=n.parentNode.childNodes,r=Array.prototype.indexOf.call(o,n);if(!(t<0||r!==o.length-1)){var i=e.querySelector(".".concat("changeType"));if(!this.enabled||!i)if(this.enabled){var a=this.hot.rootDocument.createElement("button");a.className="changeType",a.onclick=function(){return!1},e.firstChild.insertBefore(a,e.firstChild.firstChild)}else i&&i.parentNode.removeChild(i)}}}},{key:"onMenuBeforeOpen",value:function(){this.hot.runHooks("beforeDropdownMenuShow",this)}},{key:"onMenuAfterOpen",value:function(){this.hot.runHooks("afterDropdownMenuShow",this)}},{key:"onMenuAfterClose",value:function(){this.hot.listen(),this.hot.runHooks("afterDropdownMenuHide",this)}},{key:"destroy",value:function(){this.close(),this.menu&&this.menu.destroy(),y(v(e.prototype),"destroy",this).call(this)}}]),e}(o.a);w.SEPARATOR={name:d.m},Object(l.d)("dropdownMenu",w),e.a=w},517:function(t,e,n){"use strict";n(11),n(12),n(13),n(33),n(8),n(17),n(18),n(5),n(9),n(10),n(58);var o=n(22),r=n(19),i=n(616),a=n(298);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function l(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var d=function(t){function e(){return u(this,e),l(this,f(e).apply(this,arguments))}var n,o,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(e,t),n=e,(o=[{key:"isEnabled",value:function(){return!0}},{key:"exportAsString",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._createTypeFormatter(t,e).export()}},{key:"exportAsBlob",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._createBlob(this._createTypeFormatter(t,e))}},{key:"downloadFile",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.hot,o=n.rootDocument,r=n.rootWindow,i=this._createTypeFormatter(t,e),a=this._createBlob(i),c=r.URL||r.webkitURL,u=o.createElement("a"),s="".concat(i.options.filename,".").concat(i.options.fileExtension);if(void 0!==u.download){var l=c.createObjectURL(a);u.style.display="none",u.setAttribute("href",l),u.setAttribute("download",s),o.body.appendChild(u),u.dispatchEvent(new MouseEvent("click")),o.body.removeChild(u),setTimeout((function(){c.revokeObjectURL(l)}),100)}else navigator.msSaveOrOpenBlob&&navigator.msSaveOrOpenBlob(a,s)}},{key:"_createTypeFormatter",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!a.a[t])throw new Error('Export format type "'.concat(t,'" is not supported.'));return Object(a.b)(t,new i.a(this.hot),e)}},{key:"_createBlob",value:function(t){var e=null;return"undefined"!=typeof Blob&&(e=new Blob([t.export()],{type:"".concat(t.options.mimeType,";charset=").concat(t.options.encoding)})),e}}])&&s(n.prototype,o),r&&s(n,r),e}(o.a);Object(r.d)("exportFile",d),e.a=d},54:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"b",(function(){return a})),n.d(e,"e",(function(){return c})),n.d(e,"c",(function(){return u})),n.d(e,"f",(function(){return s})),n.d(e,"a",(function(){return l})),n.d(e,"g",(function(){return f}));n(33);var o=n(2),r=n(1);function i(t,e){return"border_row".concat(t,"col").concat(e)}function a(){return{width:1,color:"#000"}}function c(){return{hide:!0}}function u(t,e){return{id:i(t,e),border:{width:1,color:"#000",cornerVisible:!1},row:t,col:e,top:{hide:!0},right:{hide:!0},bottom:{hide:!0},left:{hide:!0}}}function s(t,e){return Object(o.hasOwnProperty)(e,"border")&&(t.border=e.border),Object(o.hasOwnProperty)(e,"top")&&(e.top?(Object(o.isObject)(e.top)||(e.top={width:1,color:"#000"}),t.top=e.top):(e.top={hide:!0},t.top=e.top)),Object(o.hasOwnProperty)(e,"right")&&(e.right?(Object(o.isObject)(e.right)||(e.right={width:1,color:"#000"}),t.right=e.right):(e.right={hide:!0},t.right=e.right)),Object(o.hasOwnProperty)(e,"bottom")&&(e.bottom?(Object(o.isObject)(e.bottom)||(e.bottom={width:1,color:"#000"}),t.bottom=e.bottom):(e.bottom={hide:!0},t.bottom=e.bottom)),Object(o.hasOwnProperty)(e,"left")&&(e.left?(Object(o.isObject)(e.left)||(e.left={width:1,color:"#000"}),t.left=e.left):(e.left={hide:!0},t.left=e.left)),t}function l(t,e){var n=!1;return Object(r.arrayEach)(t.getSelectedRange(),(function(r){r.forAll((function(r,i){var a=t.getCellMeta(r,i).borders;if(a){if(!e)return n=!0,!1;if(!Object(o.hasOwnProperty)(a[e],"hide")||!1===a[e].hide)return n=!0,!1}}))})),n}function f(t){return'<span class="selected">'.concat(String.fromCharCode(10003),"</span>").concat(t)}},616:function(t,e,n){"use strict";n(11),n(12),n(13),n(8),n(5),n(16),n(9),n(10);var o=n(4);function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t))&&"[object Arguments]"!==Object.prototype.toString.call(t))return;var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.hot=e,this.options={}}var e,n,a;return e=t,(n=[{key:"setOptions",value:function(t){this.options=t}},{key:"getData",value:function(){var t=this,e=this._getDataRange(),n=e.startRow,r=e.startCol,i=e.endRow,a=e.endCol,c=this.options,u=[];return Object(o.rangeEach)(n,i,(function(e){var n=[];!c.exportHiddenRows&&t._isHiddenRow(e)||(Object(o.rangeEach)(r,a,(function(o){!c.exportHiddenColumns&&t._isHiddenColumn(o)||n.push(t.hot.getDataAtCell(e,o))})),u.push(n))})),u}},{key:"getRowHeaders",value:function(){var t=this,e=[];if(this.options.rowHeaders){var n=this._getDataRange(),r=n.startRow,i=n.endRow,a=this.hot.getRowHeader();Object(o.rangeEach)(r,i,(function(n){!t.options.exportHiddenRows&&t._isHiddenRow(n)||e.push(a[n])}))}return e}},{key:"getColumnHeaders",value:function(){var t=this,e=[];if(this.options.columnHeaders){var n=this._getDataRange(),r=n.startCol,i=n.endCol,a=this.hot.getColHeader();Object(o.rangeEach)(r,i,(function(n){!t.options.exportHiddenColumns&&t._isHiddenColumn(n)||e.push(a[n])}))}return e}},{key:"_getDataRange",value:function(){var t=this.hot.countCols()-1,e=this.hot.countRows()-1,n=r(this.options.range,4),o=n[0],i=void 0===o?0:o,a=n[1],c=void 0===a?0:a,u=n[2],s=void 0===u?e:u,l=n[3],f=void 0===l?t:l;return{startRow:i=Math.max(i,0),startCol:c=Math.max(c,0),endRow:s=Math.min(s,e),endCol:f=Math.min(f,t)}}},{key:"_isHiddenRow",value:function(t){return this.hot.hasHook("hiddenRow")&&this.hot.runHooks("hiddenRow",t)}},{key:"_isHiddenColumn",value:function(t){return this.hot.hasHook("hiddenColumn")&&this.hot.runHooks("hiddenColumn",t)}}])&&i(e.prototype,n),a&&i(e,a),t}();e.a=a},617:function(t,e,n){"use strict";n(11),n(12),n(13),n(27),n(8),n(85),n(214),n(17),n(18),n(5),n(181),n(40),n(16),n(9),n(68),n(10);var o=n(1),r=n(14),i=n(618);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var h=String.fromCharCode(13),d=String.fromCharCode(34),p=String.fromCharCode(10),b=function(t){function e(){return c(this,e),s(this,l(e).apply(this,arguments))}var n,i,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(e,t),n=e,a=[{key:"DEFAULT_OPTIONS",get:function(){return{mimeType:"text/csv",fileExtension:"csv",bom:!0,columnDelimiter:",",rowDelimiter:"\r\n"}}}],(i=[{key:"export",value:function(){var t=this,e=this.options,n=this.dataProvider.getData(),r=this.dataProvider.getColumnHeaders(),i=r.length>0,a=this.dataProvider.getRowHeaders(),c=a.length>0,u=e.bom?String.fromCharCode(65279):"";return i&&(r=Object(o.arrayMap)(r,(function(e){return t._escapeCell(e,!0)})),c&&(u+=e.columnDelimiter),u+=r.join(e.columnDelimiter),u+=e.rowDelimiter),Object(o.arrayEach)(n,(function(n,o){o>0&&(u+=e.rowDelimiter),c&&(u+=t._escapeCell(a[o])+e.columnDelimiter),u+=n.map((function(e){return t._escapeCell(e)})).join(e.columnDelimiter)})),u}},{key:"_escapeCell",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(r.stringify)(t);return""!==n&&(e||n.indexOf(h)>=0||n.indexOf(d)>=0||n.indexOf(p)>=0||n.indexOf(this.options.columnDelimiter)>=0)&&(n=n.replace(new RegExp('"',"g"),'""'),n='"'.concat(n,'"')),n}}])&&u(n.prototype,i),a&&u(n,a),e}(i.a);e.a=b},618:function(t,e,n){"use strict";n(343);var o=n(2),r=n(51);function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function a(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}var c=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.dataProvider=e,this.options=this._mergeOptions(n),this.dataProvider.setOptions(this.options)}return a(t,null,[{key:"DEFAULT_OPTIONS",get:function(){return{mimeType:"text/plain",fileExtension:"txt",filename:"Handsontable [YYYY]-[MM]-[DD]",encoding:"utf-8",bom:!1,columnHeaders:!1,rowHeaders:!1,exportHiddenColumns:!1,exportHiddenRows:!1,range:[]}}}]),a(t,[{key:"_mergeOptions",value:function(e){var n=Object(o.clone)(this.constructor.DEFAULT_OPTIONS),i=new Date;return n=Object(o.extend)(Object(o.clone)(t.DEFAULT_OPTIONS),n),(n=Object(o.extend)(n,e)).filename=Object(r.substitute)(n.filename,{YYYY:i.getFullYear(),MM:"".concat(i.getMonth()+1).padStart(2,"0"),DD:"".concat(i.getDate()).padStart(2,"0")}),n}}]),t}();e.a=c}}]);