/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/DS-DIGIB.TTF */ \"./src/assets/fonts/DS-DIGIB.TTF\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/field-cell-types/flag.svg */ \"./src/assets/field-cell-types/flag.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/field-cell-types/bomb.png */ \"./src/assets/field-cell-types/bomb.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box;\\n}\\n\\nul {\\n  list-style: none;\\n  padding: 0;\\n}\\n\\n@font-face {\\n  font-family: \\\"DS-Digital\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  font-weight: bold;\\n  font-style: normal;\\n}\\n* {\\n  font-family: \\\"Segoe UI\\\", Tahoma, Geneva, Verdana, sans-serif;\\n}\\n\\nbody {\\n  min-height: 100vh;\\n  padding-bottom: 5vh;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 40px;\\n  background-color: antiquewhite;\\n  scroll-behavior: smooth;\\n}\\n\\nh1 {\\n  color: grey;\\n}\\n\\n.main-header {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  gap: 20px;\\n}\\n\\n.options-list {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 10px;\\n  font-size: 20px;\\n}\\n\\n.number-of-mines-select,\\n.reset-btn {\\n  font-size: inherit;\\n}\\n\\n.options-list__item:first-of-type {\\n  display: flex;\\n  gap: 20px;\\n  align-items: center;\\n}\\n\\n.number-of-mines-wrapper {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 10px;\\n}\\n\\n.mines-field {\\n  max-width: 500px;\\n  width: 100%;\\n  display: grid;\\n  grid-template-columns: repeat(10, 1fr);\\n  grid-template-rows: repeat(10, 1fr);\\n  background-color: teal;\\n  border: 10px ridge #c1c1c1;\\n}\\n\\n.mines-field__cell {\\n  aspect-ratio: 1;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  background-color: transparent;\\n  background-size: contain;\\n  background-repeat: no-repeat;\\n  font-weight: bold;\\n  line-height: 100%;\\n}\\n.mines-field__cell.closed {\\n  border: 2px outset white;\\n  background-color: grey;\\n}\\n.mines-field__cell.flagged {\\n  border: 2px outset white;\\n  background-color: grey;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n}\\n.mines-field__cell.bomb {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n}\\n.mines-field__cell.bomb.bomb.exploded {\\n  background-color: red;\\n}\\n.mines-field__cell:hover {\\n  cursor: pointer;\\n}\\n\\n.end-game-msg {\\n  width: clamp(300px, 80vw, 500px);\\n  height: 300px;\\n  position: fixed;\\n  left: center;\\n  top: center;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  font-size: 40px;\\n  font-weight: bold;\\n  background-color: rgba(0, 128, 0, 0.587);\\n  border: 10px solid yellow;\\n  border-radius: 20px;\\n}\\n\\n@font-face {\\n  font-family: \\\"DS-Digital\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  font-weight: bold;\\n  font-style: normal;\\n}\\n.game-stats__list {\\n  width: 300px;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n.game-stats__list__item {\\n  display: flex;\\n  align-items: center;\\n}\\n.game-stats__list__item span {\\n  min-width: 75px;\\n  font-family: \\\"DS-Digital\\\";\\n  font-weight: bold;\\n  color: rgb(255, 160, 44);\\n  font-size: 20px;\\n  line-height: 100%;\\n  padding: 4px;\\n  letter-spacing: 4px;\\n  text-align: center;\\n  background-color: teal;\\n  border: 10px ridge #c1c1c1;\\n}\\n\\n@font-face {\\n  font-family: \\\"DS-Digital\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  font-weight: bold;\\n  font-style: normal;\\n}\\n.score-table {\\n  width: clamp(300px, 80vw, 500px);\\n  position: fixed;\\n  top: center;\\n  left: center;\\n  background-color: teal;\\n  border: 10px ridge #c1c1c1;\\n}\\n.score-table th {\\n  font-size: 40px;\\n}\\n\\n.score-table__tr td {\\n  font-size: 25px;\\n  text-align: center;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://minesweeper/./src/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://minesweeper/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://minesweeper/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://minesweeper/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"en\\\">\\r\\n\\r\\n<head>\\r\\n  <meta charset=\\\"UTF-8\\\">\\r\\n  <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\r\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\r\\n  <title>RSS Minesweeper</title>\\r\\n</head>\\r\\n\\r\\n<body>\\r\\n</body>\\r\\n\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://minesweeper/./src/index.html?");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://minesweeper/./src/index.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://minesweeper/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://minesweeper/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://minesweeper/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://minesweeper/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://minesweeper/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://minesweeper/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/app.js":
/*!*******************************!*\
  !*** ./src/components/app.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _global_global_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global/global-controller */ \"./src/components/global/global-controller.js\");\n/* harmony import */ var _heading_render_heading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./heading/render-heading */ \"./src/components/heading/render-heading.js\");\n/* eslint linebreak-style: [\"error\", \"windows\"] */\r\n\r\n\r\n\r\n\r\n(0,_heading_render_heading__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\nconst game = new _global_global_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\ngame.start();\r\n\n\n//# sourceURL=webpack://minesweeper/./src/components/app.js?");

/***/ }),

/***/ "./src/components/game-stats/game-timer.js":
/*!*************************************************!*\
  !*** ./src/components/game-stats/game-timer.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Timer)\n/* harmony export */ });\n/* eslint linebreak-style: [\"error\", \"windows\"] */\r\n\r\nclass Timer {\r\n  constructor() {\r\n    this.timerId = null;\r\n    this.internalTimerCtr = 0;\r\n    this.timerNode = document.getElementById('timer-node');\r\n  }\r\n\r\n  get time() {\r\n    return this.internalTimerCtr.toString().padStart(3, 0);\r\n  }\r\n\r\n  setToDefault() {\r\n    this.stop();\r\n    this.timerId = null;\r\n    this.internalTimerCtr = 0;\r\n    this.renderTimer();\r\n  }\r\n\r\n  start() {\r\n    this.timerId = setInterval(() => {\r\n      this.internalTimerCtr += 1;\r\n      this.renderTimer();\r\n    }, 1000);\r\n  }\r\n\r\n  stop() {\r\n    clearInterval(this.timerId);\r\n  }\r\n\r\n  renderTimer() {\r\n    this.timerNode.textContent = this.time;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/components/game-stats/game-timer.js?");

/***/ }),

/***/ "./src/components/game-stats/user-moves.js":
/*!*************************************************!*\
  !*** ./src/components/game-stats/user-moves.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MovesController)\n/* harmony export */ });\n/* eslint linebreak-style: [\"error\", \"windows\"] */\r\n\r\nclass MovesController {\r\n  constructor() {\r\n    this.movesCtrNode = document.getElementById('moves-counter-node');\r\n    this.internalMovesCtr = 0;\r\n  }\r\n\r\n  get moves() {\r\n    return this.internalMovesCtr.toString().padStart(3, 0);\r\n  }\r\n\r\n  setToDefault() {\r\n    this.internalMovesCtr = 0;\r\n    this.render();\r\n  }\r\n\r\n  addOneMove() {\r\n    this.internalMovesCtr += 1;\r\n  }\r\n\r\n  render() {\r\n    this.movesCtrNode.textContent = this.moves;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/components/game-stats/user-moves.js?");

/***/ }),

/***/ "./src/components/global/global-controller.js":
/*!****************************************************!*\
  !*** ./src/components/global/global-controller.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GlobalController)\n/* harmony export */ });\n/* harmony import */ var _interfaces_game_parameters_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/game-parameters-interface */ \"./src/components/interfaces/game-parameters-interface.js\");\n/* harmony import */ var _heading_heading_logics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../heading/heading-logics */ \"./src/components/heading/heading-logics.js\");\n/* harmony import */ var _minefield_fieldController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../minefield/fieldController */ \"./src/components/minefield/fieldController.js\");\n/* harmony import */ var _game_stats_game_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game-stats/game-timer */ \"./src/components/game-stats/game-timer.js\");\n/* harmony import */ var _game_stats_user_moves__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../game-stats/user-moves */ \"./src/components/game-stats/user-moves.js\");\n/* harmony import */ var _score_table_score_table_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../score-table/score-table-controller */ \"./src/components/score-table/score-table-controller.js\");\n/* harmony import */ var _interfaces_game_result_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../interfaces/game-result-interface */ \"./src/components/interfaces/game-result-interface.js\");\n/* eslint linebreak-style: [\"error\", \"windows\"] */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass GlobalController {\r\n  constructor() {\r\n    this.scoreTable = null;\r\n    this.timer = null;\r\n    this.movesCtr = null;\r\n    this.gameParams = null;\r\n    this.controls = null;\r\n    this.field = null;\r\n\r\n    this.addScoreOnWin = this.addScoreOnWin.bind(this);\r\n    this.restartGame = this.restartGame.bind(this);\r\n  }\r\n\r\n  addScoreOnWin(result) {\r\n    const scoreData = new _interfaces_game_result_interface__WEBPACK_IMPORTED_MODULE_6__[\"default\"](result);\r\n    this.scoreTable.addScore(scoreData);\r\n  }\r\n\r\n  start() {\r\n    this.scoreTable = new _score_table_score_table_controller__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\r\n    this.timer = new _game_stats_game_timer__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\n    this.movesCtr = new _game_stats_user_moves__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\r\n    this.gameParams = new _interfaces_game_parameters_interface__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    this.controls = new _heading_heading_logics__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.gameParams);\r\n    this.field = new _minefield_fieldController__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\r\n      params: this.gameParams,\r\n      timer: this.timer,\r\n      movesCtr: this.movesCtr,\r\n      addScoreOnWin: this.addScoreOnWin,\r\n    });\r\n\r\n    this.controls.fieldSize.addEventListener('input', this.restartGame);\r\n    this.controls.numberOfMines.addEventListener('change', this.restartGame);\r\n    this.controls.restart.addEventListener('click', this.restartGame);\r\n  }\r\n\r\n  restartGame() {\r\n    this.field.removeFieldView();\r\n    this.timer.setToDefault();\r\n    this.movesCtr.setToDefault();\r\n    this.field = new _minefield_fieldController__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\r\n      params: this.gameParams,\r\n      timer: this.timer,\r\n      movesCtr: this.movesCtr,\r\n      addScoreOnWin: this.addScoreOnWin,\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/components/global/global-controller.js?");

/***/ }),

/***/ "./src/components/global/global-view.js":
/*!**********************************************!*\
  !*** ./src/components/global/global-view.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderEndGameMsg)\n/* harmony export */ });\n/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ \"./src/components/shared.js\");\n/* eslint linebreak-style: [\"error\", \"windows\"] */\r\n\r\n\r\n\r\nfunction makeEndGameString(params) {\r\n  if (!params) return 'Game over. Try again';\r\n  return `Hooray! You found all mines in ${params.time} seconds and ${params.moves} moves!`;\r\n}\r\n\r\nfunction renderEndGameMsg(params) {\r\n  const messageNode = (0,_shared__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'end-game-msg');\r\n  messageNode.textContent = makeEndGameString(params);\r\n  document.body.append(messageNode);\r\n\r\n  const removeMessage = () => {\r\n    messageNode.remove();\r\n    document.removeEventListener('click', removeMessage);\r\n  };\r\n\r\n  setTimeout(() => {\r\n    document.addEventListener('click', removeMessage);\r\n  }, 1000);\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/components/global/global-view.js?");

/***/ }),

/***/ "./src/components/heading/heading-logics.js":
/*!**************************************************!*\
  !*** ./src/components/heading/heading-logics.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Controls)\n/* harmony export */ });\n/* harmony import */ var _mines_number_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mines-number-logic */ \"./src/components/heading/mines-number-logic.js\");\n/* eslint-disable no-param-reassign */\r\n/* eslint-disable prefer-const */\r\n/* eslint-disable no-unused-vars */\r\n/* eslint linebreak-style: [\"error\", \"windows\"] */\r\n\r\n\r\n\r\nclass Controls {\r\n  constructor(gameParams) {\r\n    this.fieldSize = document.getElementById('field-size');\r\n    this.numberOfMines = document.getElementById('number-of-mines');\r\n    this.restart = document.getElementById('game-restart-btn');\r\n\r\n    this.fieldSize.addEventListener('input', () => {\r\n      gameParams.width = this.fieldSize.value;\r\n      gameParams.height = this.fieldSize.value;\r\n    });\r\n\r\n    this.numberOfMines.addEventListener('input', () => {\r\n      gameParams.bombsCtr = this.numberOfMines.value;\r\n    });\r\n\r\n    (0,_mines_number_logic__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.numberOfMines);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/components/heading/heading-logics.js?");

/***/ }),

/***/ "./src/components/heading/mines-number-logic.js":
/*!******************************************************!*\
  !*** ./src/components/heading/mines-number-logic.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handleMinesNumberInput)\n/* harmony export */ });\n/* eslint-disable no-param-reassign */\r\n/* eslint linebreak-style: [\"error\", \"windows\"] */\r\n\r\nfunction handleMinesNumberInput(numberOfMinesRange) {\r\n  const display = document.getElementById('display-number-of-mines');\r\n\r\n  numberOfMinesRange.oninput = () => {\r\n    display.textContent = numberOfMinesRange.value;\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/components/heading/mines-number-logic.js?");

/***/ }),

/***/ "./src/components/heading/render-heading.js":
/*!**************************************************!*\
  !*** ./src/components/heading/render-heading.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderHeading)\n/* harmony export */ });\n/* eslint linebreak-style: [\"error\", \"windows\"] */\r\n\r\nconst heading = `\r\n<header class=\"main-header\">\r\n<h1>Minesweeper</h1>\r\n<button type=\"button\" id=\"show-score-btn\">Show top ten players</button>\r\n<ul class=\"options-list\">\r\n  <li class=\"options-list__item\">\r\n    <div class=\"number-of-mines-wrapper\">\r\n      <label for=\"number-of-mines\">Number of mines</label>\r\n      <input name=\"number-of-mines\" id=\"number-of-mines\" type=\"range\" value=\"10\" step=\"1\" min=\"10\" max=\"99\">\r\n    </div>\r\n    <div id=\"display-number-of-mines\">10</div>\r\n  </li>\r\n  <li class=\"options-list__item\">\r\n    <select class=\"field-size-select\" name=\"field-size\" id=\"field-size\">\r\n      <option value=\"10\" chosen>Easy</option>\r\n      <option value=\"15\">Medium</option>\r\n      <option value=\"25\">Hard</option>\r\n    </select>\r\n  </li>\r\n</ul>\r\n<button class=\"reset-btn\" type=\"button\" id=\"game-restart-btn\">RESTART</button>\r\n\r\n<div class=\"game-stats\">\r\n  <ul class=\"game-stats__list\">\r\n    <li class=\"game-stats__list__item\">\r\n      Time: <span id=\"timer-node\">000</span>\r\n    </li>\r\n    <li class=\"game-stats__list__item\">\r\n      Moves: <span id=\"moves-counter-node\">000</span>\r\n    </li>\r\n  </ul>\r\n</div>\r\n</header>\r\n`;\r\n\r\nfunction renderHeading() {\r\n  document.body.insertAdjacentHTML('afterbegin', heading);\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/components/heading/render-heading.js?");

/***/ }),

/***/ "./src/components/interfaces/game-parameters-interface.js":
/*!****************************************************************!*\
  !*** ./src/components/interfaces/game-parameters-interface.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameParameters)\n/* harmony export */ });\n/* eslint linebreak-style: [\"error\", \"windows\"] */\r\n\r\nclass GameParameters {\r\n  constructor() {\r\n    this.width = 10;\r\n    this.height = 10;\r\n    this.bombsCtr = 10;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/components/interfaces/game-parameters-interface.js?");

/***/ }),

/***/ "./src/components/interfaces/game-result-interface.js":
/*!************************************************************!*\
  !*** ./src/components/interfaces/game-result-interface.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameResult)\n/* harmony export */ });\n/* eslint linebreak-style: [\"error\", \"windows\"] */\r\n\r\nclass GameResult {\r\n  constructor({ time, moves }) {\r\n    // eslint-disable-next-line no-alert\r\n    this.playerName = prompt('Please, enter your name', 'Anonimous Player');\r\n    this.time = time;\r\n    this.moves = moves;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/components/interfaces/game-result-interface.js?");

/***/ }),

/***/ "./src/components/minefield/cell-interface.js":
/*!****************************************************!*\
  !*** ./src/components/minefield/cell-interface.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Cell)\n/* harmony export */ });\n/* eslint linebreak-style: [\"error\", \"windows\"] */\r\n\r\nclass Cell {\r\n  constructor(cellNode) {\r\n    this.node = cellNode;\r\n    this.isClosed = true;\r\n    this.isBomb = false;\r\n    this.isFlag = false;\r\n    this.bombsAround = 0;\r\n  }\r\n\r\n  plantBomb() {\r\n    this.isBomb = true;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/components/minefield/cell-interface.js?");

/***/ }),

/***/ "./src/components/minefield/field-model.js":
/*!*************************************************!*\
  !*** ./src/components/minefield/field-model.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FieldModel)\n/* harmony export */ });\n/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ \"./src/components/shared.js\");\n/* harmony import */ var _cell_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cell-interface */ \"./src/components/minefield/cell-interface.js\");\n/* eslint-disable no-param-reassign */\r\n/* eslint-disable class-methods-use-this */\r\n/* eslint linebreak-style: [\"error\", \"windows\"] */\r\n\r\n\r\n\r\n\r\nfunction generateCells(cellRows, width, height) {\r\n  for (let rowIdx = 0; rowIdx < height; rowIdx += 1) {\r\n    const row = [];\r\n    for (let cellIdx = 0; cellIdx < width; cellIdx += 1) {\r\n      const cellNode = (0,_shared__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'mines-field__cell');\r\n      const cell = new _cell_interface__WEBPACK_IMPORTED_MODULE_1__[\"default\"](cellNode);\r\n      row.push(cell);\r\n    }\r\n    cellRows.push(row);\r\n  }\r\n}\r\n\r\nfunction getRandomCell(cellRows) {\r\n  const rowCtr = cellRows.length;\r\n  const currentRowIdx = Math.floor(Math.random() * rowCtr);\r\n  const currentCellIdx = Math.floor(Math.random() * cellRows[currentRowIdx].length);\r\n  const cell = cellRows[currentRowIdx][currentCellIdx];\r\n  return cell;\r\n}\r\n\r\nfunction getRandomEmptyCell(cellRows, excluded) {\r\n  const rowsWithPlantableCells = cellRows\r\n    .map((row, rowIdx) => row\r\n      .filter((cell, cellIdx) => !(cell.isBomb\r\n        || (cellIdx === excluded.x && rowIdx === excluded.y))))\r\n    .filter((row) => row.length !== 0);\r\n  const cell = getRandomCell(rowsWithPlantableCells);\r\n  return cell;\r\n}\r\n\r\nclass FieldModel {\r\n  constructor() {\r\n    this.cellRows = [];\r\n    this.bombsCtr = null;\r\n    this.flagsCtr = 0;\r\n  }\r\n\r\n  get closedEmptyCells() {\r\n    const res = this.cellRows.reduce((acc, row) => acc + row.reduce((cellAcc, cell) => {\r\n      const isCellEmptyAndClosed = cell.isClosed && !cell.isBomb;\r\n      return isCellEmptyAndClosed ? cellAcc + 1 : cellAcc;\r\n    }, 0), 0);\r\n    return res;\r\n  }\r\n\r\n  openNearCells(coords) {\r\n    for (let y = coords.y - 1; y <= coords.y + 1; y += 1) {\r\n      // eslint-disable-next-line no-continue\r\n      if (y < 0 || y >= this.cellRows.length) continue;\r\n      for (let x = coords.x - 1; x <= coords.x + 1; x += 1) {\r\n        // eslint-disable-next-line no-continue\r\n        if (x < 0 || x >= this.cellRows[0].length) continue;\r\n        this.markOpenBomblessCell({ y, x });\r\n      }\r\n    }\r\n  }\r\n\r\n  markOpenBomblessCell(coords) {\r\n    const currentCell = this.cellRows[coords.y][coords.x];\r\n    if (currentCell.isFlag || !currentCell.isClosed) return;\r\n    this.markOpen(currentCell);\r\n    if (currentCell.bombsAround === 0) {\r\n      this.openNearCells(coords);\r\n    }\r\n  }\r\n\r\n  eraseCellRows() {\r\n    this.cellRows = null;\r\n  }\r\n\r\n  countMinesAround(cellCoords) {\r\n    let minesAround = 0;\r\n    for (let y = cellCoords.y - 1; y <= cellCoords.y + 1; y += 1) {\r\n      // eslint-disable-next-line no-continue\r\n      if (y < 0 || y >= this.cellRows.length) continue;\r\n      for (let x = cellCoords.x - 1; x <= cellCoords.x + 1; x += 1) {\r\n        // eslint-disable-next-line no-continue\r\n        if (x < 0 || x >= this.cellRows[0].length) continue;\r\n        const currentCell = this.cellRows[y][x];\r\n        if (currentCell.isBomb) minesAround += 1;\r\n      }\r\n    }\r\n\r\n    return minesAround;\r\n  }\r\n\r\n  markOpen(cell) {\r\n    cell.isClosed = false;\r\n  }\r\n\r\n  toggleIsFlag(cell) {\r\n    cell.isFlag = !cell.isFlag;\r\n  }\r\n\r\n  makeNewFieldData({ width, height, bombsCtr }) {\r\n    this.bombsCtr = bombsCtr;\r\n    generateCells(this.cellRows, width, height);\r\n  }\r\n\r\n  scatterBombs(coords) {\r\n    for (let i = 0; i < this.bombsCtr; i += 1) {\r\n      const cell = getRandomEmptyCell(this.cellRows, coords);\r\n      cell.plantBomb();\r\n    }\r\n  }\r\n\r\n  calculateMinesAroundEachCell() {\r\n    for (let y = 0; y < this.cellRows.length; y += 1) {\r\n      for (let x = 0; x < this.cellRows[y].length; x += 1) {\r\n        const currentCell = this.cellRows[y][x];\r\n        currentCell.bombsAround = this.countMinesAround({ y, x });\r\n      }\r\n    }\r\n  }\r\n\r\n  getCellDataByNode(node) {\r\n    let res = null;\r\n    let isFound = false;\r\n    for (let rowIdx = 0; rowIdx < this.cellRows.length && !isFound; rowIdx += 1) {\r\n      for (let cellIdx = 0; cellIdx < this.cellRows[rowIdx].length && !isFound; cellIdx += 1) {\r\n        const currentCell = this.cellRows[rowIdx][cellIdx];\r\n        if (currentCell.node === node) {\r\n          res = {\r\n            cellData: currentCell,\r\n            coords: {\r\n              x: cellIdx,\r\n              y: rowIdx,\r\n            },\r\n          };\r\n          isFound = true;\r\n        }\r\n      }\r\n    }\r\n\r\n    return res;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/components/minefield/field-model.js?");

/***/ }),

/***/ "./src/components/minefield/field-view.js":
/*!************************************************!*\
  !*** ./src/components/minefield/field-view.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FieldView)\n/* harmony export */ });\n/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ \"./src/components/shared.js\");\n/* eslint-disable no-param-reassign */\r\n/* eslint-disable class-methods-use-this */\r\n/* eslint linebreak-style: [\"error\", \"windows\"] */\r\n\r\n\r\n\r\nfunction addCellNodes(fieldNode, cellRows) {\r\n  cellRows.forEach((row) => {\r\n    row.forEach((cell) => {\r\n      if (cell.isClosed) cell.node.classList.add('closed');\r\n      if (cell.isFlag) cell.node.classList.add('flagged');\r\n      fieldNode.append(cell.node);\r\n    });\r\n  });\r\n}\r\n\r\nfunction setFontSizeDependOnFromCellSize() {\r\n  const cellNodes = document.querySelectorAll('.mines-field__cell');\r\n  const cellSize = cellNodes[0].clientWidth;\r\n  cellNodes.forEach((cellNode) => {\r\n    cellNode.style.fontSize = `${(cellSize / 3) * 2.3}px`;\r\n  });\r\n}\r\n\r\nclass FieldView {\r\n  constructor() {\r\n    this.fieldNode = (0,_shared__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'mines-field');\r\n  }\r\n\r\n  removeField() {\r\n    this.fieldNode.remove();\r\n  }\r\n\r\n  renderOpen(cellNode) {\r\n    cellNode.classList.remove('closed');\r\n  }\r\n\r\n  renderNumberOfNearBombs(cellNode, num) {\r\n    const cellInscription = num === 0 ? '' : num;\r\n    cellNode.style.color = num !== 0 ? _shared__WEBPACK_IMPORTED_MODULE_0__.FigColor[num - 1] : '';\r\n    cellNode.textContent = cellInscription;\r\n  }\r\n\r\n  toggleRenderFlag(cellNode) {\r\n    cellNode.classList.toggle('flagged');\r\n  }\r\n\r\n  renderBomb(cell) {\r\n    cell.node.classList.add('bomb');\r\n  }\r\n\r\n  renderField(cellRows) {\r\n    this.fieldNode.style.gridTemplateRows = `repeat(${cellRows.length}, 1fr)`;\r\n    this.fieldNode.style.gridTemplateColumns = `repeat(${cellRows[0].length}, 1fr)`;\r\n    document.body.append(this.fieldNode);\r\n    addCellNodes(this.fieldNode, cellRows);\r\n    setFontSizeDependOnFromCellSize();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/components/minefield/field-view.js?");

/***/ }),

/***/ "./src/components/minefield/fieldController.js":
/*!*****************************************************!*\
  !*** ./src/components/minefield/fieldController.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FieldController)\n/* harmony export */ });\n/* harmony import */ var _global_global_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global/global-view */ \"./src/components/global/global-view.js\");\n/* harmony import */ var _field_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./field-model */ \"./src/components/minefield/field-model.js\");\n/* harmony import */ var _field_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./field-view */ \"./src/components/minefield/field-view.js\");\n/* eslint linebreak-style: [\"error\", \"windows\"] */\r\n\r\n\r\n\r\n\r\n\r\n// eslint-disable-next-line no-unused-vars\r\nfunction checkArrElemPropState(rows, prop) {\r\n  return rows.map((row) => row.map((cell) => cell[prop]));\r\n}\r\n\r\nclass FieldController {\r\n  constructor({\r\n    params,\r\n    timer,\r\n    movesCtr,\r\n    addScoreOnWin,\r\n  }) {\r\n    this.model = new _field_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n    this.view = new _field_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n    this.timer = timer;\r\n    this.movesCtr = movesCtr;\r\n    this.onWinCallback = addScoreOnWin;\r\n\r\n    this.handleCellClick = this.handleCellClick.bind(this);\r\n    this.handleRightMouseBtnClick = this.handleRightMouseBtnClick.bind(this);\r\n\r\n    this.model.makeNewFieldData(params);\r\n    this.view.renderField(this.model.cellRows);\r\n    this.view.fieldNode.addEventListener('click', this.handleCellClick);\r\n    this.view.fieldNode.addEventListener('contextmenu', this.handleCellClick);\r\n  }\r\n\r\n  handleRightMouseBtnClick(cellData, cellNode) {\r\n    this.model.toggleIsFlag(cellData);\r\n    this.view.toggleRenderFlag(cellNode);\r\n  }\r\n\r\n  handleLeftMouseBtnClick(cellData, coords) {\r\n    if (cellData.isFlag) return;\r\n\r\n    // console.log(checkArrElemPropState(this.model.cellRows, 'isClosed'));\r\n\r\n    if (cellData.isBomb) {\r\n      const cellNode = cellData.node;\r\n      this.model.markOpen(cellData);\r\n      this.view.renderOpen(cellNode);\r\n      cellNode.style.backgroundColor = 'red';\r\n      this.view.renderBomb(cellData);\r\n      this.handleLoose();\r\n    } else {\r\n      this.model.markOpenBomblessCell(coords);\r\n      this.updateField();\r\n    }\r\n\r\n    if (this.model.closedEmptyCells === 0) this.handleWin();\r\n  }\r\n\r\n  handleCellClick(e) {\r\n    e.preventDefault();\r\n    const cellNode = e.target.closest('.mines-field__cell');\r\n    if (!cellNode) return;\r\n    const { cellData, coords } = this.model.getCellDataByNode(cellNode);\r\n    if (this.movesCtr.moves === '000') {\r\n      this.model.scatterBombs(coords);\r\n      this.model.calculateMinesAroundEachCell();\r\n    }\r\n    if (!cellData.isClosed) return;\r\n    if (this.timer.timerId === null) this.timer.start();\r\n    if (e.isTrusted) {\r\n      this.movesCtr.addOneMove();\r\n      this.movesCtr.render();\r\n    }\r\n\r\n    if (e.type === 'click') this.handleLeftMouseBtnClick(cellData, coords);\r\n    else this.handleRightMouseBtnClick(cellData, cellNode);\r\n  }\r\n\r\n  updateField() {\r\n    this.model.cellRows.forEach((row) => {\r\n      row.forEach((cell) => {\r\n        if (cell.isClosed) return;\r\n        this.view.renderOpen(cell.node);\r\n        this.view.renderNumberOfNearBombs(cell.node, cell.bombsAround);\r\n      });\r\n    });\r\n  }\r\n\r\n  removeClickEventListeners() {\r\n    this.view.fieldNode.removeEventListener('click', this.handleCellClick);\r\n    this.view.fieldNode.removeEventListener('contextmenu', this.handleCellClick);\r\n  }\r\n\r\n  handleLoose() {\r\n    this.timer.stop();\r\n    this.removeClickEventListeners();\r\n    (0,_global_global_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  }\r\n\r\n  handleWin() {\r\n    this.timer.stop();\r\n    this.removeClickEventListeners();\r\n    const { time } = this.timer;\r\n    const { moves } = this.movesCtr;\r\n    (0,_global_global_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ time, moves });\r\n    this.onWinCallback({ time, moves });\r\n  }\r\n\r\n  removeFieldView() {\r\n    this.view.fieldNode.remove();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/components/minefield/fieldController.js?");

/***/ }),

/***/ "./src/components/score-table/score-table-controller.js":
/*!**************************************************************!*\
  !*** ./src/components/score-table/score-table-controller.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScoreTable)\n/* harmony export */ });\n/* harmony import */ var _score_table_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./score-table-model */ \"./src/components/score-table/score-table-model.js\");\n/* harmony import */ var _score_table_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./score-table-view */ \"./src/components/score-table/score-table-view.js\");\n/* eslint linebreak-style: [\"error\", \"windows\"] */\r\n\r\n\r\n\r\n\r\nclass ScoreTable {\r\n  constructor() {\r\n    this.tableShowBtn = document.getElementById('show-score-btn');\r\n    this.model = new _score_table_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    this.view = new _score_table_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n\r\n    this.showTable = this.showTable.bind(this);\r\n    this.hideTable = this.hideTable.bind(this);\r\n\r\n    this.tableShowBtn.addEventListener('click', this.showTable);\r\n  }\r\n\r\n  showTable() {\r\n    this.view.render(this.model.topTenScores);\r\n    setTimeout(() => document.addEventListener('click', this.hideTable), 1000);\r\n  }\r\n\r\n  hideTable() {\r\n    this.view.remove();\r\n    document.removeEventListener('click', this.hideTable);\r\n  }\r\n\r\n  addScore(gameResult) {\r\n    this.model.addScore(gameResult);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/components/score-table/score-table-controller.js?");

/***/ }),

/***/ "./src/components/score-table/score-table-model.js":
/*!*********************************************************!*\
  !*** ./src/components/score-table/score-table-model.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScoreTableModel)\n/* harmony export */ });\n/* eslint linebreak-style: [\"error\", \"windows\"] */\r\n\r\nclass ScoreTableModel {\r\n  constructor() {\r\n    const savedTable = localStorage.getItem('scoreTable');\r\n    this.topTenScores = savedTable ? JSON.parse(savedTable) : [];\r\n\r\n    this.saveToLocalStorage = this.saveToLocalStorage.bind(this);\r\n\r\n    window.onunload = this.saveToLocalStorage;\r\n  }\r\n\r\n  addScore(gameResult) {\r\n    if (this.topTenScores.length >= 10) this.topTenScores.shift();\r\n    this.topTenScores.push(gameResult);\r\n  }\r\n\r\n  saveToLocalStorage() {\r\n    localStorage.setItem('scoreTable', JSON.stringify(this.topTenScores));\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/components/score-table/score-table-model.js?");

/***/ }),

/***/ "./src/components/score-table/score-table-view.js":
/*!********************************************************!*\
  !*** ./src/components/score-table/score-table-view.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScoreTableView)\n/* harmony export */ });\n/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ \"./src/components/shared.js\");\n/* eslint linebreak-style: [\"error\", \"windows\"] */\r\n\r\n\r\n\r\nfunction makeScoreTable() {\r\n  const node = (0,_shared__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('table', ['score-table']);\r\n  const template = `\r\n  <thead>\r\n    <tr>\r\n      <th>Name</th>\r\n      <th>Moves</th>\r\n      <th>Time</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody id=\"score-table-body\">\r\n  </tbody>\r\n  `;\r\n  node.insertAdjacentHTML('afterbegin', template);\r\n  return node;\r\n}\r\n\r\nfunction insertResultsInTable(tableNode, results) {\r\n  results.forEach(({ playerName, moves, time }) => {\r\n    const trNode = (0,_shared__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('tr', ['score-table__tr']);\r\n    const tdName = (0,_shared__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('td', ['player-name']);\r\n    tdName.textContent = playerName;\r\n    const tdMoves = (0,_shared__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('td', ['player-moves']);\r\n    tdMoves.textContent = moves;\r\n    const tdTime = (0,_shared__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('td', ['player-time']);\r\n    tdTime.textContent = time;\r\n    trNode.append(tdName, tdMoves, tdTime);\r\n    tableNode.append(trNode);\r\n  });\r\n}\r\n\r\nclass ScoreTableView {\r\n  constructor() {\r\n    this.tableNode = null;\r\n  }\r\n\r\n  render(results) {\r\n    this.tableNode = makeScoreTable();\r\n    insertResultsInTable(this.tableNode, results);\r\n    document.body.append(this.tableNode);\r\n  }\r\n\r\n  remove() {\r\n    this.tableNode.remove();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/components/score-table/score-table-view.js?");

/***/ }),

/***/ "./src/components/shared.js":
/*!**********************************!*\
  !*** ./src/components/shared.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FigColor\": () => (/* binding */ FigColor),\n/* harmony export */   \"default\": () => (/* binding */ makeElementNode)\n/* harmony export */ });\n/* eslint linebreak-style: [\"error\", \"windows\"] */\r\n\r\nfunction makeElementNode(type, ...classNames) {\r\n  const elem = document.createElement(type);\r\n  elem.classList.add(...classNames);\r\n  return elem;\r\n}\r\n\r\nconst FigColor = ['blue', 'purple', 'red', 'orange', 'green', 'yellow', 'white', 'violet'];\r\n\n\n//# sourceURL=webpack://minesweeper/./src/components/shared.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./src/index.scss\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _components_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/app */ \"./src/components/app.js\");\n/* eslint linebreak-style: [\"error\", \"windows\"] */\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://minesweeper/./src/index.js?");

/***/ }),

/***/ "./src/assets/field-cell-types/bomb.png":
/*!**********************************************!*\
  !*** ./src/assets/field-cell-types/bomb.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"01879805f65fb160a0e5.png\";\n\n//# sourceURL=webpack://minesweeper/./src/assets/field-cell-types/bomb.png?");

/***/ }),

/***/ "./src/assets/field-cell-types/flag.svg":
/*!**********************************************!*\
  !*** ./src/assets/field-cell-types/flag.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2ad212ba022310c4ca65.svg\";\n\n//# sourceURL=webpack://minesweeper/./src/assets/field-cell-types/flag.svg?");

/***/ }),

/***/ "./src/assets/fonts/DS-DIGIB.TTF":
/*!***************************************!*\
  !*** ./src/assets/fonts/DS-DIGIB.TTF ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"81b4bd9230069b72f5e8.TTF\";\n\n//# sourceURL=webpack://minesweeper/./src/assets/fonts/DS-DIGIB.TTF?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;