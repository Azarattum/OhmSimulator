(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{131:function(t,e,o){"use strict";(function(t,n){o.d(e,"a",(function(){return L}));o(11),o(12),o(13),o(33),o(37),o(27),o(8),o(110),o(55),o(122),o(123),o(5),o(40),o(16),o(9),o(66),o(10),o(686),o(57);var r=o(0),i=o(127),s=o(36),l=o(41),a=o(14),c=o(50),u=o(571),d=o(573),f=o(24),g=o(2),h=o(1),w=o(114),m=o(19),v=o(35),p=o(64),y=o(51),b=o(4),C=o(574),R=o(575),S=o(92),j=o(90),O=o(129),E=o(7),H=o(20),A=o(234),T=o(113),k=o(235),D=o(96),M=o(165),_=o(107),I=o(135);function x(t){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function P(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t))&&"[object Arguments]"!==Object.prototype.toString.call(t))return;var o=[],n=!0,r=!1,i=void 0;try{for(var s,l=t[Symbol.iterator]();!(n=(s=l.next()).done)&&(o.push(s.value),!e||o.length!==e);n=!0);}catch(t){r=!0,i=t}finally{try{n||null==l.return||l.return()}finally{if(r)throw i}}return o}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function F(t){return function(t){if(Array.isArray(t)){for(var e=0,o=new Array(t.length);e<t.length;e++)o[e]=t[e];return o}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var V=null;function L(e,o){var L,N,B,Q,z,W=this,U=arguments.length>2&&void 0!==arguments[2]&&arguments[2],q=!1,G=this,J=function(){},K=new f.a(G);Object(g.extend)(J.prototype,A.a.prototype),Object(g.extend)(J.prototype,o),Object(g.extend)(J.prototype,rt(o)),Object(M.a)(J.prototype,o.language),Object(O.a)(U)&&Object(O.c)(this),this.rootElement=e,this.rootDocument=e.ownerDocument,this.rootWindow=this.rootDocument.defaultView,Object(_.b)(this.rootDocument),this.isDestroyed=!1,this.isHotTableEnv=Object(r.isChildOfWebComponentTable)(this.rootElement),f.a.isHotTableEnv=this.isHotTableEnv,this.container=this.rootDocument.createElement("div"),this.renderCall=!1,e.insertBefore(this.container,e.firstChild),Object(O.b)(this)&&Object(a._injectProductInfo)(o.licenseKey,e),this.guid="ht_".concat(Object(y.randomString)());var Y=Object(j.a)(G);B=new R.a(G),this.rootElement.id&&"ht_"!==this.rootElement.id.substring(0,3)||(this.rootElement.id=this.guid),L={cellSettings:[],columnSettings:[],columnsSettingConflicts:["data","width","language"],settings:new J,selRange:null,isPopulated:null,scrollable:null,firstRun:!0};var $=new I.a(L.settings,{countCols:function(){return G.countCols()},countRows:function(){return G.countRows()},propToCol:function(t){return N.propToCol(t)},isEditorOpened:function(){return!!G.getActiveEditor()&&G.getActiveEditor().isOpened()}});function X(t){var e=Object(M.c)(t);Object(D.d)(e)?(G.runHooks("beforeLanguageChange",e),J.prototype.language=e,G.runHooks("afterLanguageChange",e)):Object(M.d)(t)}function Z(){var t=!1;return{validatorsInQueue:0,valid:!0,addValidatorToQueue:function(){this.validatorsInQueue+=1,t=!1},removeValidatorFormQueue:function(){this.validatorsInQueue=this.validatorsInQueue-1<0?0:this.validatorsInQueue-1,this.checkIfQueueIsEmpty()},onQueueEmpty:function(){},checkIfQueueIsEmpty:function(){0===this.validatorsInQueue&&!1===t&&(t=!0,this.onQueueEmpty(this.valid))}}}function tt(t){var e=t.replace(",",".");return!1===isNaN(parseFloat(e))?parseFloat(e):t}function et(t,e,o){if(t.length){var n=G.getActiveEditor(),i=G.runHooks("beforeChange",t,e||"edit"),a=!0;if(Object(s.isFunction)(i))Object(l.b)("Your beforeChange callback returns a function. It's not supported since Handsontable 0.12.1 (and the returned function will not be executed).");else if(!1===i)return void(n&&n.cancelChanges());var c,u=new Z;u.onQueueEmpty=function(t){n&&a&&n.cancelChanges(),o(t)};for(var d=t.length-1;d>=0;d--)if(null===t[d])t.splice(d,1);else{var f=P(t[d],4),g=f[0],h=f[1],w=f[3],m=N.propToCol(h),v=G.getCellMeta(g,m);"numeric"===v.type&&"string"==typeof w&&((c=w).length>0&&/^\s*[+-.]?\s*(?:(?:\d+(?:(\.|,)\d+)?(?:e[+-]?\d+)?)|(?:0x[a-f\d]+))\s*$/.test(c))&&(t[d][3]=tt(w)),G.getCellValidator(v)&&(u.addValidatorToQueue(),G.validateCell(t[d][3],v,function(e,o){return function(n){if("boolean"!=typeof n)throw new Error("Validation error: result is not boolean");if(!1===n&&!1===o.allowInvalid){a=!1,t.splice(e,1),o.valid=!0;var i=G.getCell(o.visualRow,o.visualCol);null!==i&&Object(r.removeClass)(i,G.getSettings().invalidCellClassName)}u.removeValidatorFormQueue()}}(d,v),e))}u.checkIfQueueIsEmpty()}}function ot(t,e){var o=t.length-1;if(!(o<0)){for(;o>=0;o--){var n=!1;if(null!==t[o]){if(null!==t[o][2]&&void 0!==t[o][2]||null!==t[o][3]&&void 0!==t[o][3]){if(L.settings.allowInsertRow)for(;t[o][0]>G.countRows()-1;){if(0===N.createRow(void 0,void 0,e)){n=!0;break}}if("array"===G.dataType&&(!L.settings.columns||0===L.settings.columns.length)&&L.settings.allowInsertColumn)for(;N.propToCol(t[o][1])>G.countCols()-1;){if(0===N.createCol(void 0,void 0,e)){n=!0;break}}n||N.set(t[o][0],t[o][1],t[o][3])}}else t.splice(o,1)}G.forceFullRender=!0,Q.adjustRowsAndCols(),G.runHooks("beforeChangeRender",t,e),z.lockEditor(),G._refreshBorders(null),z.unlockEditor(),G.view.wt.wtOverlays.adjustElementsSize(),G.runHooks("afterChange",t,e||"edit");var r=G.getActiveEditor();r&&Object(a.isDefined)(r.refreshValue)&&r.refreshValue()}}function nt(t,e,o){return"object"===x(t)?t:[[t,e,o]]}function rt(t){if(Object(g.hasOwnProperty)(t,"type")){var e,o={};for(var n in"object"===x(t.type)?e=t.type:"string"==typeof t.type&&(e=Object(T.a)(t.type)),e)Object(g.hasOwnProperty)(e,n)&&!Object(g.hasOwnProperty)(t,n)&&(o[n]=e[n]);return o}}this.selection=$,this.selection.addLocalHook("beforeSetRangeStart",(function(t){W.runHooks("beforeSetRangeStart",t)})),this.selection.addLocalHook("beforeSetRangeStartOnly",(function(t){W.runHooks("beforeSetRangeStartOnly",t)})),this.selection.addLocalHook("beforeSetRangeEnd",(function(t){W.runHooks("beforeSetRangeEnd",t),t.row<0&&(t.row=W.view.wt.wtTable.getFirstVisibleRow()),t.col<0&&(t.col=W.view.wt.wtTable.getFirstVisibleColumn())})),this.selection.addLocalHook("afterSetRangeEnd",(function(t){var e=Object(g.createObjectPropListener)(!1),o=W.selection.getSelectedRange(),n=o.current(),i=n.from,s=n.to,l=o.size()-1;W.runHooks("afterSelection",i.row,i.col,s.row,s.col,e,l),W.runHooks("afterSelectionByProp",i.row,G.colToProp(i.col),s.row,G.colToProp(s.col),e,l);var a=W.selection.isSelectedByAnyHeader(),c=W.selection.selectedRange.current(),u=!0;q&&(u=!1),e.isTouched()&&(u=!e.value);var d=W.selection.isSelectedByRowHeader(),f=W.selection.isSelectedByColumnHeader();!1!==u&&(a?d?W.view.scrollViewportVertically(t.row):f&&W.view.scrollViewportHorizontally(t.col):c&&!W.selection.isMultiple()?W.view.scrollViewport(c.from):W.view.scrollViewport(t)),d&&f?Object(r.addClass)(W.rootElement,["ht__selection--rows","ht__selection--columns"]):d?(Object(r.removeClass)(W.rootElement,"ht__selection--columns"),Object(r.addClass)(W.rootElement,"ht__selection--rows")):f?(Object(r.removeClass)(W.rootElement,"ht__selection--rows"),Object(r.addClass)(W.rootElement,"ht__selection--columns")):Object(r.removeClass)(W.rootElement,["ht__selection--rows","ht__selection--columns"]),W._refreshBorders(null)})),this.selection.addLocalHook("afterSelectionFinished",(function(t){var e=t.length-1,o=t[e],n=o.from,r=o.to;W.runHooks("afterSelectionEnd",n.row,n.col,r.row,r.col,e),W.runHooks("afterSelectionEndByProp",n.row,G.colToProp(n.col),r.row,G.colToProp(r.col),e)})),this.selection.addLocalHook("afterIsMultipleSelection",(function(t){var e=W.runHooks("afterIsMultipleSelection",t.value);t.value&&(t.value=e)})),this.selection.addLocalHook("beforeModifyTransformStart",(function(t){W.runHooks("modifyTransformStart",t)})),this.selection.addLocalHook("afterModifyTransformStart",(function(t,e,o){W.runHooks("afterModifyTransformStart",t,e,o)})),this.selection.addLocalHook("beforeModifyTransformEnd",(function(t){W.runHooks("modifyTransformEnd",t)})),this.selection.addLocalHook("afterModifyTransformEnd",(function(t,e,o){W.runHooks("afterModifyTransformEnd",t,e,o)})),this.selection.addLocalHook("afterDeselect",(function(){z.destroyEditor(),W._refreshBorders(),Object(r.removeClass)(W.rootElement,["ht__selection--rows","ht__selection--columns"]),W.runHooks("afterDeselect")})),this.selection.addLocalHook("insertRowRequire",(function(t){W.alter("insert_row",t,1,"auto")})),this.selection.addLocalHook("insertColRequire",(function(t){W.alter("insert_col",t,1,"auto")})),Q={alter:function(t,e){var o,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;function s(t,e,o,n){var r=Object(h.arrayMap)(new Array(o),(function(){return"array"===n?t=[]:"object"===n&&(t={}),t;var t}));r.unshift(e,0),t.splice.apply(t,F(r))}var l=function(t){if(0===t.length)return[];var e=F(t);return e.sort((function(t,e){var o=P(t,1)[0],n=P(e,1)[0];return o===n?0:o>n?1:-1})),Object(h.arrayReduce)(e,(function(t,e){var o=P(e,2),n=o[0],r=o[1],i=t[t.length-1],s=P(i,2),l=s[0]+s[1];if(n<=l){var a=Math.max(r-(l-n),0);i[1]+=a}else t.push([n,r]);return t}),[e[0]])};switch(t){case"insert_row":var c=G.countSourceRows();if(G.getSettings().maxRows===c)return;e=Object(a.isDefined)(e)?e:c,o=N.createRow(e,n,r),s(L.cellSettings,e,n,"array"),o&&($.isSelected()&&$.selectedRange.current().from.row>=e?($.selectedRange.current().from.row+=o,$.transformEnd(o,0)):G._refreshBorders());break;case"insert_col":o=N.createCol(e,n,r);for(var u=0,d=G.countSourceRows();u<d;u++)L.cellSettings[u]&&s(L.cellSettings[u],e,n);if(o){if(Array.isArray(G.getSettings().colHeaders)){var f=[e,0];f.length+=o,Array.prototype.splice.apply(G.getSettings().colHeaders,f)}$.isSelected()&&$.selectedRange.current().from.col>=e?($.selectedRange.current().from.col+=o,$.transformEnd(0,o)):G._refreshBorders()}break;case"remove_row":var g=function(t){var e=0;Object(h.arrayEach)(t,(function(t){var o=P(t,2),i=o[0],s=o[1],l=Object(a.isEmpty)(i)?G.countRows()-1:Math.max(i-e,0);Number.isInteger(i)&&(i=Math.max(i-e,0)),N.removeRow(i,s,r),L.cellSettings.splice(l,n);var c=G.countRows(),u=G.getSettings().fixedRowsTop;u>=l+1&&(G.getSettings().fixedRowsTop-=Math.min(s,u-l));var d=G.getSettings().fixedRowsBottom;d&&l>=c-d&&(G.getSettings().fixedRowsBottom-=Math.min(s,d)),e+=s}))};Array.isArray(e)?g(l(e)):g([[e,n]]),Q.adjustRowsAndCols(),G._refreshBorders();break;case"remove_col":var w=function(t){var e=0;Object(h.arrayEach)(t,(function(t){var o=P(t,2),n=o[0],i=o[1],s=Object(a.isEmpty)(n)?G.countCols()-1:Math.max(n-e,0),l=Y.toPhysicalColumn(s);Number.isInteger(n)&&(n=Math.max(n-e,0)),N.removeCol(n,i,r);for(var c=0,u=G.countSourceRows();c<u;c++)L.cellSettings[c]&&L.cellSettings[c].splice(l,i);var d=G.getSettings().fixedColumnsLeft;d>=s+1&&(G.getSettings().fixedColumnsLeft-=Math.min(i,d-s)),Array.isArray(G.getSettings().colHeaders)&&(void 0===l&&(l=-1),G.getSettings().colHeaders.splice(l,i)),e+=i}))};Array.isArray(e)?w(l(e)):w([[e,n]]),Q.adjustRowsAndCols(),G._refreshBorders();break;default:throw new Error('There is no such action "'.concat(t,'"'))}i||Q.adjustRowsAndCols()},adjustRowsAndCols:function(){if(L.settings.minRows){var t=G.countRows();if(t<L.settings.minRows)for(var e=0,o=L.settings.minRows;e<o-t;e++)N.createRow(G.countRows(),1,"auto")}if(L.settings.minSpareRows){var n=G.countEmptyRows(!0);if(n<L.settings.minSpareRows)for(;n<L.settings.minSpareRows&&G.countSourceRows()<L.settings.maxRows;n++)N.createRow(G.countRows(),1,"auto")}var r;if((L.settings.minCols||L.settings.minSpareCols)&&(r=G.countEmptyCols(!0)),L.settings.minCols&&!L.settings.columns&&G.countCols()<L.settings.minCols)for(;G.countCols()<L.settings.minCols;r++)N.createCol(G.countCols(),1,"auto");if(L.settings.minSpareCols&&!L.settings.columns&&"array"===G.dataType&&r<L.settings.minSpareCols)for(;r<L.settings.minSpareCols&&G.countCols()<L.settings.maxCols;r++)N.createCol(G.countCols(),1,"auto");var i=G.countRows(),s=G.countCols();0!==i&&0!==s||$.deselect(),$.isSelected()&&Object(h.arrayEach)($.selectedRange,(function(t){var e=!1,o=t.from.row,n=t.from.col,r=t.to.row,l=t.to.col;o>i-1?(e=!0,r>(o=i-1)&&(r=o)):r>i-1&&(e=!0,o>(r=i-1)&&(o=r)),n>s-1?(e=!0,l>(n=s-1)&&(l=n)):l>s-1&&(e=!0,n>(l=s-1)&&(n=l)),e&&G.selectCell(o,n,r,l)})),G.view&&G.view.wt.wtOverlays.adjustElementsSize()},populateFromArray:function(t,e,o,n,r,i,s){var l,c,u,d,f,h,w,m,v=[],p={};if(0===(c=e.length))return!1;switch(r){case"shift_down":for(f=o?o.col-t.col+1:0,h=o?o.row-t.row+1:0,u=0,d=(e=Object(S.translateRowsToColumns)(e)).length,w=Math.max(d,f);u<w;u++)if(u<d){var y;for(l=0,c=e[u].length;l<h-c;l++)e[u].push(e[u][l%c]);e[u].unshift(t.col+u,t.row,0),(y=G).spliceCol.apply(y,F(e[u]))}else{var b;e[u%d][0]=t.col+u,(b=G).spliceCol.apply(b,F(e[u%d]))}break;case"shift_right":for(f=o?o.col-t.col+1:0,h=o?o.row-t.row+1:0,l=0,c=e.length,m=Math.max(c,h);l<m;l++)if(l<c){var C;for(u=0,d=e[l].length;u<f-d;u++)e[l].push(e[l][u%d]);e[l].unshift(t.row+l,t.col,0),(C=G).spliceRow.apply(C,F(e[l]))}else{var R;e[l%c][0]=t.row+l,(R=G).spliceRow.apply(R,F(e[l%c]))}break;case"overwrite":default:p.row=t.row,p.col=t.col;var j,O={row:o&&t?o.row-t.row+1:1,col:o&&t?o.col-t.col+1:1},E=0,H=0,A=!0,T=function(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=e[t%e.length];return null!==o?n[o%n.length]:n},k=e.length,D=o?o.row-t.row+1:0;for(c=o?D:Math.max(k,D),l=0;l<c&&!(o&&p.row>o.row&&D>k||!L.settings.allowInsertRow&&p.row>G.countRows()-1||p.row>=L.settings.maxRows);l++){var M=l-E,_=T(M).length,I=o?o.col-t.col+1:0;if(d=o?I:Math.max(_,I),p.col=t.col,j=G.getCellMeta(p.row,p.col),"CopyPaste.paste"!==n&&"Autofill.fill"!==n||!j.skipRowOnPaste){for(H=0,u=0;u<d&&!(o&&p.col>o.col&&I>_||!L.settings.allowInsertColumn&&p.col>G.countCols()-1||p.col>=L.settings.maxCols);u++)if(j=G.getCellMeta(p.row,p.col),"CopyPaste.paste"!==n&&"Autofill.fill"!==n||!j.skipColumnOnPaste)if(j.readOnly)p.col+=1;else{var P=u-H,V=T(M,P),N=G.getDataAtCell(p.row,p.col),B={row:M,col:P};if("Autofill.fill"===n){var Q=G.runHooks("beforeAutofillInsidePopulate",B,i,e,s,{},O);Q&&(V=Object(a.isUndefined)(Q.value)?V:Q.value)}if(null!==V&&"object"===x(V))if(Array.isArray(V)&&null===N&&(N=[]),null===N||"object"!==x(N))A=!1;else{var z=Object(g.duckSchema)(Array.isArray(N)?N:N[0]||N),W=Object(g.duckSchema)(Array.isArray(V)?V:V[0]||V);Object(g.isObjectEqual)(z,W)?V=Object(g.deepClone)(V):A=!1}else null!==N&&"object"===x(N)&&(A=!1);A&&v.push([p.row,p.col,V]),A=!0,p.col+=1}else H+=1,p.col+=1,d+=1;p.row+=1}else E+=1,p.row+=1,c+=1}G.setDataAtCell(v,null,null,n||"populateFromArray")}}},this.init=function(){B.setData(L.settings.data),G.runHooks("beforeInit"),Object(c.isMobileBrowser)()&&Object(r.addClass)(G.rootElement,"mobile"),this.updateSettings(L.settings,!0),this.view=new C.a(this),z=d.a.getInstance(G,L,$,N),this.forceFullRender=!0,G.runHooks("init"),this.view.render(),"object"===x(L.firstRun)&&(G.runHooks("afterChange",L.firstRun[0],L.firstRun[1]),L.firstRun=!1),G.runHooks("afterInit")},this.validateCell=function(t,e,o,n){var r,i=G.getCellValidator(e);function l(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(n&&!0!==e.hidden){var r=e.visualCol,i=e.visualRow,s=G.getCell(i,r,!0);s&&"TH"!==s.nodeName&&G.view.wt.wtSettings.settings.cellRenderer(i,r,s),o(t)}else o(t)}Object(a.isRegExp)(i)&&(r=i,i=function(t,e){e(r.test(t))}),Object(s.isFunction)(i)?(t=G.runHooks("beforeValidate",t,e.visualRow,e.prop,n),G._registerImmediate((function(){i.call(e,t,(function(o){G&&(o=G.runHooks("afterValidate",o,t,e.visualRow,e.prop,n),e.valid=o,l(o),G.runHooks("postAfterValidate",o,t,e.visualRow,e.prop,n))}))}))):G._registerImmediate((function(){e.valid=!0,l(e.valid,!1)}))},this.setDataAtCell=function(t,e,o,n){var r,i,s,l=nt(t,e,o),a=[],c=n;for(r=0,i=l.length;r<i;r++){if("object"!==x(l[r]))throw new Error("Method `setDataAtCell` accepts row number or changes array of arrays as its first parameter");if("number"!=typeof l[r][1])throw new Error("Method `setDataAtCell` accepts row and column number as its parameters. If you want to use object property name, use method `setDataAtRowProp`");var u=Y.toPhysicalRow(l[r][0]);s=N.colToProp(l[r][1]),a.push([l[r][0],s,B.getAtCell(u,l[r][1]),l[r][2]])}c||"object"!==x(t)||(c=e),G.runHooks("afterSetDataAtCell",a,c),et(a,c,(function(){ot(a,c)}))},this.setDataAtRowProp=function(t,e,o,n){var r,i,s=nt(t,e,o),l=[],a=n;for(r=0,i=s.length;r<i;r++){var c=Y.toPhysicalRow(s[r][0]);l.push([s[r][0],s[r][1],B.getAtCell(c,s[r][1]),s[r][2]])}a||"object"!==x(t)||(a=e),G.runHooks("afterSetDataAtRowProp",l,a),et(l,a,(function(){ot(l,a)}))},this.listen=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=G,o=e.rootDocument;if(t){var n=!o.activeElement||o.activeElement&&void 0===o.activeElement.nodeName;o.activeElement&&o.activeElement!==o.body&&!n?o.activeElement.blur():n&&o.body.focus()}G&&!G.isListening()&&(V=G.guid,G.runHooks("afterListen"))},this.unlisten=function(){this.isListening()&&(V=null,G.runHooks("afterUnlisten"))},this.isListening=function(){return V===G.guid},this.destroyEditor=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];G._refreshBorders(t,e)},this.populateFromArray=function(t,e,o,n,r,i,s,l,a){if("object"!==x(o)||"object"!==x(o[0]))throw new Error("populateFromArray parameter `input` must be an array of arrays");var c="number"==typeof n?new E.a(n,r):null;return Q.populateFromArray(new E.a(t,e),o,c,i,s,l,a)},this.spliceCol=function(t,e,o){for(var n,r=arguments.length,i=new Array(r>3?r-3:0),s=3;s<r;s++)i[s-3]=arguments[s];return(n=N).spliceCol.apply(n,[t,e,o].concat(i))},this.spliceRow=function(t,e,o){for(var n,r=arguments.length,i=new Array(r>3?r-3:0),s=3;s<r;s++)i[s-3]=arguments[s];return(n=N).spliceRow.apply(n,[t,e,o].concat(i))},this.getSelected=function(){if($.isSelected())return Object(h.arrayMap)($.getSelectedRange(),(function(t){var e=t.from,o=t.to;return[e.row,e.col,o.row,o.col]}))},this.getSelectedLast=function(){var t,e=this.getSelected();return e&&e.length>0&&(t=e[e.length-1]),t},this.getSelectedRange=function(){if($.isSelected())return Array.from($.getSelectedRange())},this.getSelectedRangeLast=function(){var t,e=this.getSelectedRange();return e&&e.length>0&&(t=e[e.length-1]),t},this.emptySelectedCells=function(t){var e=this;if($.isSelected()){var o=[];Object(h.arrayEach)($.getSelectedRange(),(function(t){var n=t.getTopLeftCorner(),r=t.getBottomRightCorner();Object(b.rangeEach)(n.row,r.row,(function(t){Object(b.rangeEach)(n.col,r.col,(function(n){e.getCellMeta(t,n).readOnly||o.push([t,n,null])}))}))})),o.length>0&&this.setDataAtCell(o,t)}},this.render=function(){G.view&&(G.renderCall=!0,G.forceFullRender=!0,z.lockEditor(),G._refreshBorders(null),z.unlockEditor())},this.refreshDimensions=function(){if(G.view){var t=G.view.getLastSize(),e=t.width,o=t.height,n=G.rootElement.getBoundingClientRect(),r=n.width,i=n.height,s=r!==e||i!==o;!1===G.runHooks("beforeRefreshDimensions",{width:e,height:o},{width:r,height:i},s)||((s||G.view.wt.wtOverlays.scrollableElement===G.rootWindow)&&(G.view.setLastSize(r,i),G.render()),G.runHooks("afterRefreshDimensions",{width:e,height:o},{width:r,height:i},s))}},this.loadData=function(t){if(Array.isArray(L.settings.dataSchema)?G.dataType="array":Object(s.isFunction)(L.settings.dataSchema)?G.dataType="function":G.dataType="object",N&&N.destroy(),N=new u.a(G,L,J),"object"===x(t)&&null!==t)t.push&&t.splice||(t=[t]);else{if(null!==t)throw new Error("loadData only accepts array of objects or array of arrays (".concat(x(t)," given)"));var e,o=N.getSchema();t=[];var n,r=0;for(r=0,n=L.settings.startRows;r<n;r++)if("object"!==G.dataType&&"function"!==G.dataType||!L.settings.dataSchema)if("array"===G.dataType)e=Object(g.deepClone)(o[0]),t.push(e);else{e=[];for(var i=0,l=L.settings.startCols;i<l;i++)e.push(null);t.push(e)}else e=Object(g.deepClone)(o),t.push(e)}L.isPopulated=!1,J.prototype.data=t,Array.isArray(t[0])&&(G.dataType="array"),N.dataSource=t,B.data=t,B.dataType=G.dataType,B.colToProp=N.colToProp.bind(N),B.propToCol=N.propToCol.bind(N),L.cellSettings.length=0,Q.adjustRowsAndCols(),G.runHooks("afterLoadData",L.firstRun),L.firstRun?L.firstRun=[null,"loadData"]:(G.runHooks("afterChange",null,"loadData"),G.render()),L.isPopulated=!0},this.getData=function(t,e,o,n){return Object(a.isUndefined)(t)?N.getAll():N.getRange(new E.a(t,e),new E.a(o,n),N.DESTINATION_RENDERER)},this.getCopyableText=function(t,e,o,n){return N.getCopyableText(new E.a(t,e),new E.a(o,n))},this.getCopyableData=function(t,e){return N.getCopyable(t,N.colToProp(e))},this.getSchema=function(){return N.getSchema()},this.updateSettings=function(t){var e,o,n,l=arguments.length>1&&void 0!==arguments[1]&&arguments[1],c=!1;if(Object(a.isDefined)(t.rows))throw new Error('"rows" setting is no longer supported. do you mean startRows, minRows or maxRows?');if(Object(a.isDefined)(t.cols))throw new Error('"cols" setting is no longer supported. do you mean startCols, minCols or maxCols?');for(e in t)"data"!==e&&("language"!==e?H.a.getSingleton().getRegistered().indexOf(e)>-1?(Object(s.isFunction)(t[e])||Array.isArray(t[e]))&&(t[e].initialHook=!0,G.addHook(e,t[e])):!l&&Object(g.hasOwnProperty)(t,e)&&(J.prototype[e]=t[e]):X(t.language));void 0===t.data&&void 0===L.settings.data?G.loadData(null):void 0!==t.data?G.loadData(t.data):void 0!==t.columns&&N.createMap(),n=G.countCols();var u,d,f=t.columns||J.prototype.columns;if(f&&Object(s.isFunction)(f)&&(n=G.countSourceCols(),c=!0),void 0===t.cell&&void 0===t.cells&&void 0===t.columns||(L.cellSettings.length=0),n>0)for(e=0,o=0;e<n;e++)c&&!f(e)||(L.columnSettings[o]=Object(i.columnFactory)(J,L.columnsSettingConflicts),u=L.columnSettings[o].prototype,f&&(d=c?f(e):f[o])&&(Object(g.extend)(u,d),Object(g.extend)(u,rt(d))),o+=1);Object(a.isDefined)(t.cell)&&Object(g.objectEach)(t.cell,(function(t){G.setCellMetaObject(t.row,t.col,t)})),G.runHooks("afterCellMetaReset"),Object(a.isDefined)(t.className)&&(J.prototype.className&&Object(r.removeClass)(G.rootElement,J.prototype.className),t.className&&Object(r.addClass)(G.rootElement,t.className));var h=G.rootElement.style.height;""!==h&&(h=parseInt(G.rootElement.style.height,10));var w=t.height;if(Object(s.isFunction)(w)&&(w=w()),l){var m=G.rootElement.getAttribute("style");m&&G.rootElement.setAttribute("data-initialstyle",G.rootElement.getAttribute("style"))}if(null===w){var v=G.rootElement.getAttribute("data-initialstyle");v&&(v.indexOf("height")>-1||v.indexOf("overflow")>-1)?G.rootElement.setAttribute("style",v):(G.rootElement.style.height="",G.rootElement.style.overflow="")}else void 0!==w&&(G.rootElement.style.height=isNaN(w)?"".concat(w):"".concat(w,"px"),G.rootElement.style.overflow="hidden");if(void 0!==t.width){var p=t.width;Object(s.isFunction)(p)&&(p=p()),G.rootElement.style.width=isNaN(p)?"".concat(p):"".concat(p,"px")}l||(N.clearLengthCache(),G.view&&G.view.wt.wtViewport.resetHasOversizedColumnHeadersMarked(),G.runHooks("afterUpdateSettings",t)),Q.adjustRowsAndCols(),G.view&&!L.firstRun&&(G.forceFullRender=!0,z.lockEditor(),G._refreshBorders(null),z.unlockEditor()),l||!G.view||""!==h&&""!==w&&void 0!==w||h===w||G.view.wt.wtOverlays.updateMainScrollableElements()},this.getValue=function(){var t=G.getSelectedLast();if(J.prototype.getValue){if(Object(s.isFunction)(J.prototype.getValue))return J.prototype.getValue.call(G);if(t)return G.getData()[t[0][0]][J.prototype.getValue]}else if(t)return G.getDataAtCell(t[0],t[1])},this.getSettings=function(){return L.settings},this.clear=function(){this.selectAll(),this.emptySelectedCells()},this.alter=function(t,e,o,n,r){Q.alter(t,e,o,n,r)},this.getCell=function(t,e){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return G.view.getCellAtCoords(new E.a(t,e),o)},this.getCoords=function(t){return this.view.wt.wtTable.getCoords.call(this.view.wt.wtTable,t)},this.colToProp=function(t){return N.colToProp(t)},this.propToCol=function(t){return N.propToCol(t)},this.toVisualRow=function(t){return Y.toVisualRow(t)},this.toVisualColumn=function(t){return Y.toVisualColumn(t)},this.toPhysicalRow=function(t){return Y.toPhysicalRow(t)},this.toPhysicalColumn=function(t){return Y.toPhysicalColumn(t)},this.getDataAtCell=function(t,e){return N.get(t,N.colToProp(e))},this.getDataAtRowProp=function(t,e){return N.get(t,e)},this.getDataAtCol=function(t){var e;return(e=[]).concat.apply(e,F(N.getRange(new E.a(0,t),new E.a(L.settings.data.length-1,t),N.DESTINATION_RENDERER)))},this.getDataAtProp=function(t){var e,o=N.getRange(new E.a(0,N.propToCol(t)),new E.a(L.settings.data.length-1,N.propToCol(t)),N.DESTINATION_RENDERER);return(e=[]).concat.apply(e,F(o))},this.getSourceData=function(t,e,o,n){return void 0===t?B.getData():B.getByRange(new E.a(t,e),new E.a(o,n))},this.getSourceDataArray=function(t,e,o,n){return void 0===t?B.getData(!0):B.getByRange(new E.a(t,e),new E.a(o,n),!0)},this.getSourceDataAtCol=function(t){return B.getAtColumn(t)},this.getSourceDataAtRow=function(t){return B.getAtRow(t)},this.getSourceDataAtCell=function(t,e){return B.getAtCell(t,e)},this.getDataAtRow=function(t){return N.getRange(new E.a(t,0),new E.a(t,this.countCols()-1),N.DESTINATION_RENDERER)[0]||[]},this.getDataType=function(t,e,o,n){var r=this,i=void 0===t?[0,0,this.countRows(),this.countCols()]:[t,e,o,n],s=i[0],l=i[1],a=i[2],c=i[3],u=null,d=null;void 0===a&&(a=s),void 0===c&&(c=l);var f="mixed";return Object(b.rangeEach)(Math.min(s,a),Math.max(s,a),(function(t){var e=!0;return Object(b.rangeEach)(Math.min(l,c),Math.max(l,c),(function(o){var n=r.getCellMeta(t,o);return d=n.type,u?e=u===d:u=d,e})),f=e?d:"mixed",e})),f},this.removeCellMeta=function(t,e,o){var n=P(Y.toPhysical(t,e),2),r=n[0],i=n[1],s=L.cellSettings[r][i][o];!1!==G.runHooks("beforeRemoveCellMeta",t,e,o,s)&&(delete L.cellSettings[r][i][o],G.runHooks("afterRemoveCellMeta",t,e,o,s)),s=null},this.spliceCellsMeta=function(t,e){for(var o,n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];(o=L.cellSettings).splice.apply(o,[t,e].concat(r))},this.setCellMetaObject=function(t,e,o){var n=this;"object"===x(o)&&Object(g.objectEach)(o,(function(o,r){n.setCellMeta(t,e,r,o)}))},this.setCellMeta=function(t,e,o,n){var r=P(Y.toPhysical(t,e),2),s=r[0],l=r[1];L.columnSettings[l]||(L.columnSettings[l]=Object(i.columnFactory)(J,L.columnsSettingConflicts)),L.cellSettings[s]||(L.cellSettings[s]=[]),L.cellSettings[s][l]||(L.cellSettings[s][l]=new L.columnSettings[l]),L.cellSettings[s][l][o]=n,G.runHooks("afterSetCellMeta",t,e,o,n)},this.getCellsMeta=function(){return Object(h.arrayFlatten)(L.cellSettings)},this.getCellMeta=function(t,e){var o=N.colToProp(e),n=P(Y.toPhysical(t,e),2),r=n[0],s=n[1],l=r;null===l&&(l=t),L.columnSettings[s]||(L.columnSettings[s]=Object(i.columnFactory)(J,L.columnsSettingConflicts)),L.cellSettings[l]||(L.cellSettings[l]=[]),L.cellSettings[l][s]||(L.cellSettings[l][s]=new L.columnSettings[s]);var a=L.cellSettings[l][s];if(a.row=l,a.col=s,a.visualRow=t,a.visualCol=e,a.prop=o,a.instance=G,G.runHooks("beforeGetCellMeta",t,e,a),Object(g.extend)(a,rt(a)),a.cells){var c=a.cells.call(a,l,s,o);c&&(Object(g.extend)(a,c),Object(g.extend)(a,rt(c)))}return G.runHooks("afterGetCellMeta",t,e,a),a},this.getCellMetaAtRow=function(t){return L.cellSettings[t]},this.isColumnModificationAllowed=function(){return!("object"===G.dataType||G.getSettings().columns)};var it=Object(S.cellMethodLookupFactory)("renderer");this.getCellRenderer=function(t,e){return Object(v.b)(it.call(this,t,e))},this.getCellEditor=Object(S.cellMethodLookupFactory)("editor");var st=Object(S.cellMethodLookupFactory)("validator");function lt(t){return function(){throw new Error('The "'.concat(t,'" method cannot be called because this Handsontable instance has been destroyed'))}}this.getCellValidator=function(t,e){var o=st.call(this,t,e);return"string"==typeof o&&(o=Object(p.b)(o)),o},this.validateCells=function(t){this._validateCells(t)},this.validateRows=function(t,e){if(!Array.isArray(t))throw new Error("validateRows parameter `rows` must be an array");this._validateCells(e,t)},this.validateColumns=function(t,e){if(!Array.isArray(t))throw new Error("validateColumns parameter `columns` must be an array");this._validateCells(e,void 0,t)},this._validateCells=function(t,e,o){var n=new Z;t&&(n.onQueueEmpty=t);for(var r=G.countRows()-1;r>=0;)if(void 0===e||-1!==e.indexOf(r)){for(var i=G.countCols()-1;i>=0;)void 0===o||-1!==o.indexOf(i)?(n.addValidatorToQueue(),G.validateCell(G.getDataAtCell(r,i),G.getCellMeta(r,i),(function(t){if("boolean"!=typeof t)throw new Error("Validation error: result is not boolean");!1===t&&(n.valid=!1),n.removeValidatorFormQueue()}),"validateCells"),i-=1):i-=1;r-=1}else r-=1;n.checkIfQueueIsEmpty()},this.getRowHeader=function(t){var e=L.settings.rowHeaders,o=t;return void 0!==o&&(o=G.runHooks("modifyRowHeader",o)),void 0===o?(e=[],Object(b.rangeEach)(G.countRows()-1,(function(t){e.push(G.getRowHeader(t))}))):Array.isArray(e)&&void 0!==e[o]?e=e[o]:Object(s.isFunction)(e)?e=e(o):e&&"string"!=typeof e&&"number"!=typeof e&&(e=o+1),e},this.hasRowHeaders=function(){return!!L.settings.rowHeaders},this.hasColHeaders=function(){if(void 0!==L.settings.colHeaders&&null!==L.settings.colHeaders)return!!L.settings.colHeaders;for(var t=0,e=G.countCols();t<e;t++)if(G.getColHeader(t))return!0;return!1},this.getColHeader=function(t){var e=L.settings.columns&&Object(s.isFunction)(L.settings.columns),o=G.runHooks("modifyColHeader",t),n=L.settings.colHeaders;if(void 0===o){for(var r=[],i=e?G.countSourceCols():G.countCols(),l=0;l<i;l++)r.push(G.getColHeader(l));n=r}else{var a=o,c=G.runHooks("modifyCol",a),u=function(t){for(var e=[],o=G.countSourceCols(),n=0;n<o;n++)Object(s.isFunction)(G.getSettings().columns)&&G.getSettings().columns(n)&&e.push(n);return e[t]}(c);!1===L.settings.colHeaders?n=null:L.settings.columns&&Object(s.isFunction)(L.settings.columns)&&L.settings.columns(u)&&L.settings.columns(u).title?n=L.settings.columns(u).title:L.settings.columns&&L.settings.columns[c]&&L.settings.columns[c].title?n=L.settings.columns[c].title:Array.isArray(L.settings.colHeaders)&&void 0!==L.settings.colHeaders[c]?n=L.settings.colHeaders[c]:Object(s.isFunction)(L.settings.colHeaders)?n=L.settings.colHeaders(c):L.settings.colHeaders&&"string"!=typeof L.settings.colHeaders&&"number"!=typeof L.settings.colHeaders&&(n=Object(S.spreadsheetColumnLabel)(a))}return n},this._getColWidthFromSettings=function(t){var e=G.getCellMeta(0,t),o=e.width;if(void 0!==o&&o!==L.settings.width||(o=e.colWidths),null!=o){switch(x(o)){case"object":o=o[t];break;case"function":o=o(t)}"string"==typeof o&&(o=parseInt(o,10))}return o},this.getColWidth=function(t){var e=G._getColWidthFromSettings(t);return void 0===(e=G.runHooks("modifyColWidth",e,t))&&(e=E.d.DEFAULT_WIDTH),e},this._getRowHeightFromSettings=function(t){var e=L.settings.rowHeights;if(null!=e){switch(x(e)){case"object":e=e[t];break;case"function":e=e(t)}"string"==typeof e&&(e=parseInt(e,10))}return e},this.getRowHeight=function(t){var e=G._getRowHeightFromSettings(t);return e=G.runHooks("modifyRowHeight",e,t)},this.countSourceRows=function(){return G.runHooks("modifySourceLength")||(G.getSourceData()?G.getSourceData().length:0)},this.countSourceCols=function(){var t=G.getSourceData()&&G.getSourceData()[0]?G.getSourceData()[0]:[];return Object(g.isObject)(t)?Object(g.deepObjectSize)(t):t.length||0},this.countRows=function(){return N.getLength()},this.countCols=function(){var t=this.getSettings().maxCols,e=!1,o=0;if("array"===G.dataType&&(e=L.settings.data&&L.settings.data[0]&&L.settings.data[0].length),e&&(o=L.settings.data[0].length),L.settings.columns)if(Object(s.isFunction)(L.settings.columns))if("array"===G.dataType){for(var n=0,r=0;r<o;r++)L.settings.columns(r)&&(n+=1);o=n}else"object"!==G.dataType&&"function"!==G.dataType||(o=N.colToPropCache.length);else o=L.settings.columns.length;else"object"!==G.dataType&&"function"!==G.dataType||(o=N.colToPropCache.length);return Math.min(t,o)},this.rowOffset=function(){return G.view.wt.wtTable.getFirstRenderedRow()},this.colOffset=function(){return G.view.wt.wtTable.getFirstRenderedColumn()},this.countRenderedRows=function(){return G.view.wt.drawn?G.view.wt.wtTable.getRenderedRowsCount():-1},this.countVisibleRows=function(){return G.view.wt.drawn?G.view.wt.wtTable.getVisibleRowsCount():-1},this.countRenderedCols=function(){return G.view.wt.drawn?G.view.wt.wtTable.getRenderedColumnsCount():-1},this.countVisibleCols=function(){return G.view.wt.drawn?G.view.wt.wtTable.getVisibleColumnsCount():-1},this.countEmptyRows=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=0;return Object(b.rangeEachReverse)(G.countRows()-1,(function(o){if(G.isEmptyRow(o))e+=1;else if(!0===t)return!1})),e},this.countEmptyCols=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(G.countRows()<1)return 0;var e=0;return Object(b.rangeEachReverse)(G.countCols()-1,(function(o){if(G.isEmptyCol(o))e+=1;else if(!0===t)return!1})),e},this.isEmptyRow=function(t){return L.settings.isEmptyRow.call(G,t)},this.isEmptyCol=function(t){return L.settings.isEmptyCol.call(G,t)},this.selectCell=function(t,e,o,n){var r=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],i=!(arguments.length>5&&void 0!==arguments[5])||arguments[5];return!Object(a.isUndefined)(t)&&!Object(a.isUndefined)(e)&&this.selectCells([[t,e,o,n]],r,i)},this.selectCells=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[[]],e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];!1===e&&(q=!0);var n=$.selectCells(t);return n&&o&&G.listen(),q=!1,n},this.selectColumns=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;return $.selectColumns(t,e)},this.selectRows=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;return $.selectRows(t,e)},this.deselectCell=function(){$.deselect()},this.selectAll=function(){q=!0,$.selectAll(),q=!1},this.scrollViewportTo=function(t,e){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=!o,i=!n,s=!1;return void 0!==t&&void 0!==e&&(s=G.view.scrollViewport(new E.a(t,e),r,n,o,i)),"number"==typeof t&&"number"!=typeof e&&(s=G.view.scrollViewportVertically(t,r,o)),"number"==typeof e&&"number"!=typeof t&&(s=G.view.scrollViewportHorizontally(e,n,i)),s},this.destroy=function(){if(G._clearTimeouts(),G._clearImmediates(),G.view&&G.view.destroy(),B&&B.destroy(),B=null,Object(_.c)(),Object(O.b)(G)){var t=this.rootDocument.querySelector("#hot-display-license-info");t&&t.parentNode.removeChild(t)}Object(r.empty)(G.rootElement),K.destroy(),z&&z.destroy(),G.runHooks("afterDestroy"),H.a.getSingleton().destroy(G),Object(g.objectEach)(G,(function(t,e,o){Object(s.isFunction)(t)?o[e]=lt(e):"guid"!==e&&(o[e]=null)})),G.isDestroyed=!0,N&&N.destroy(),N=null,L=null,Q=null,$=null,z=null,G=null,J=null},this.getActiveEditor=function(){return z.getActiveEditor()},this.getPlugin=function(t){return Object(m.a)(this,t)},this.getInstance=function(){return G},this.addHook=function(t,e){H.a.getSingleton().add(t,e,G)},this.hasHook=function(t){return H.a.getSingleton().has(t,G)},this.addHookOnce=function(t,e){H.a.getSingleton().once(t,e,G)},this.removeHook=function(t,e){H.a.getSingleton().remove(t,e,G)},this.runHooks=function(t,e,o,n,r,i,s){return H.a.getSingleton().run(G,t,e,o,n,r,i,s)},this.getTranslatedPhrase=function(t,e){return Object(k.a)(L.settings.language,t,e)},this.toHTML=function(){return Object(w.instanceToHTML)(W)},this.toTableElement=function(){var t=W.rootDocument.createElement("div");return t.insertAdjacentHTML("afterbegin",Object(w.instanceToHTML)(W)),t.firstElementChild},this.timeouts=[],this._registerTimeout=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=t;"function"==typeof o&&(o=setTimeout(o,e)),this.timeouts.push(o)},this._clearTimeouts=function(){Object(h.arrayEach)(this.timeouts,(function(t){clearTimeout(t)}))},this.immediates=[],this._registerImmediate=function(e){this.immediates.push(t(e))},this._clearImmediates=function(){Object(h.arrayEach)(this.immediates,(function(t){n(t)}))},this._refreshBorders=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];z.destroyEditor(t),G.view.render(),e&&$.isSelected()&&z.prepareEditor()},H.a.getSingleton().run(G,"construct")}}).call(this,o(479).setImmediate,o(479).clearImmediate)}}]);