/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/board.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/board.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n.board {\n  position: relative;\n  width: 300px;\n  height: 300px;\n  background-color: #ffffff;\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  border: solid #273547e7 1px; }\n\n#board1::before,\n#board2::before {\n  display: none;\n  content: \"\";\n  font-size: 0.9rem;\n  text-align: center;\n  line-height: 27.5;\n  color: #0065d8;\n  text-shadow: white 0px 0 5px;\n  position: absolute;\n  top: -5px;\n  bottom: -5px;\n  left: -5px;\n  right: -5px;\n  backdrop-filter: blur(1px);\n  -webkit-backdrop-filter: blur(1px); }\n\n#board1.notStarted::before,\n#board2.notStarted::before {\n  display: block;\n  opacity: 100;\n  z-index: 7; }\n\n.row-p1,\n.row-p2 {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr); }\n\n.cell-p1,\n.cell-p2,\n.res {\n  z-index: 0;\n  position: relative; }\n  .cell-p1::after,\n  .cell-p2::after,\n  .res::after {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin-top: -1px;\n    margin-left: -1px;\n    border-top: solid #0065d83b 1px;\n    border-left: solid #0065d83b 1px;\n    z-index: 1; }\n\n.cell-p1 {\n  cursor: crosshair; }\n  .cell-p1:hover {\n    background-color: #8585851c; }\n\n.fleet {\n  position: relative;\n  box-shadow: #0065d8 0 0 0 2px;\n  z-index: auto;\n  margin: 0; }\n  .fleet::before {\n    content: \"\";\n    position: absolute;\n    border-top: solid #0065d83b 1px;\n    border-left: solid #0065d83b 1px;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: #f0f5ff;\n    border: none;\n    box-shadow: none;\n    z-index: 1; }\n\n.miss {\n  position: relative;\n  margin-top: -1px;\n  margin-left: -1px;\n  border-top: solid #0065d83b 1px;\n  border-left: solid #0065d83b 1px; }\n  .miss::after {\n    content: \"\";\n    width: 6px;\n    height: 6px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin: -4px;\n    border-radius: 50%;\n    background-color: #000000a9; }\n  .miss:hover {\n    cursor: default; }\n  .miss:active {\n    cursor: not-allowed; }\n\n.hit {\n  position: relative;\n  z-index: auto;\n  box-shadow: #0065d8 0 0 0 2px; }\n  .hit::before {\n    content: \"\";\n    text-align: center;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: #f0f5ff;\n    z-index: 3; }\n  .hit::after {\n    content: \"✕\";\n    color: #004fa8;\n    font-size: 1.5em;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 5; }\n  .hit:active {\n    cursor: not-allowed; }\n  .hit:hover {\n    cursor: default; }\n\n.sunk {\n  position: relative;\n  z-index: auto;\n  border: none;\n  cursor: default; }\n  .sunk::before {\n    content: \"\";\n    text-align: center;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: #6097d6;\n    z-index: 4; }\n  .sunk::after {\n    content: \"✕\";\n    color: white;\n    font-size: 1.5em;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 6; }\n  .sunk:active {\n    cursor: not-allowed; }\n\n.board-buttons {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  width: 100%; }\n\n.main-reset,\n.main-random,\n.main-start {\n  width: 7rem;\n  transition: 100ms;\n  color: white;\n  font-size: 0.8rem;\n  padding: 0.3rem 0.6rem;\n  background: #0065d8;\n  border: none;\n  border-radius: 1rem;\n  box-shadow: #00000033 0 2px 2px; }\n  .main-reset:hover,\n  .main-random:hover,\n  .main-start:hover {\n    background-color: #1d75da;\n    box-shadow: #00000033 0 3px 3px;\n    transform: scale(1.05); }\n  .main-reset:active,\n  .main-random:active,\n  .main-start:active {\n    background-color: #307ed8;\n    box-shadow: #00000033 0 2px 2px;\n    transform: none; }\n\n.main-start {\n  z-index: 7;\n  font-size: 1.5rem;\n  position: absolute;\n  align-self: center;\n  justify-self: center;\n  padding: 0.5rem 1.5rem;\n  border-radius: 2rem; }\n", "",{"version":3,"sources":["webpack://./src/styles/board.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAAhB;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,aAAa;EACb,mCAAmC;EACnC,2BAA2B,EAAA;;AAE7B;;EAEE,aAAa;EACb,WAAW;EACX,iBAAiB;EACjB,kBAAkB;EAClB,iBAAiB;EACjB,cAAc;EACd,4BAAyC;EACzC,kBAAkB;EAClB,SAAS;EACT,YAAY;EACZ,UAAU;EACV,WAAW;EACX,0BAA0B;EAC1B,kCAAkC,EAAA;;AAEpC;;EAEE,cAAc;EACd,YAAY;EACZ,UAAU,EAAA;;AAEZ;;EAEE,aAAa;EACb,sCAAsC,EAAA;;AAExC;;;EAGE,UAAU;EACV,kBAAkB,EAAA;EAJpB;;;IAOI,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,OAAO;IACP,QAAQ;IACR,gBAAgB;IAChB,iBAAiB;IACjB,+BAA+B;IAC/B,gCAAgC;IAChC,UAAU,EAAA;;AAGd;EACE,iBAAiB,EAAA;EADnB;IAGI,2BAA2B,EAAA;;AAG/B;EACE,kBAAkB;EAClB,6BAA6B;EAC7B,aAAa;EACb,SAAS,EAAA;EAJX;IAMI,WAAW;IACX,kBAAkB;IAGlB,+BAA+B;IAC/B,gCAAgC;IAChC,MAAM;IACN,SAAS;IACT,OAAO;IACP,QAAQ;IACR,yBAAyB;IACzB,YAAY;IACZ,gBAAgB;IAChB,UAAU,EAAA;;AAGd;EACE,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,+BAA+B;EAC/B,gCAAgC,EAAA;EALlC;IAOI,WAAW;IACX,UAAU;IACV,WAAW;IACX,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,YAAY;IACZ,kBAAkB;IAClB,2BAA2B,EAAA;EAf/B;IAkBI,eAAe,EAAA;EAlBnB;IAqBI,mBAAmB,EAAA;;AAGvB;EACE,kBAAkB;EAClB,aAAa;EACb,6BAA6B,EAAA;EAH/B;IAMI,WAAW;IACX,kBAAkB;IAClB,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,OAAO;IACP,QAAQ;IACR,yBAAyB;IACzB,UAAU,EAAA;EAdd;IAiBI,YAAS;IACT,cAAc;IACd,gBAAgB;IAChB,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,UAAU,EAAA;EA1Bd;IA6BI,mBAAmB,EAAA;EA7BvB;IAgCI,eAAe,EAAA;;AAGnB;EACE,kBAAkB;EAClB,aAAa;EAEb,YAAY;EACZ,eAAe,EAAA;EALjB;IAOI,WAAW;IACX,kBAAkB;IAClB,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,OAAO;IACP,QAAQ;IACR,yBAAyB;IACzB,UAAU,EAAA;EAfd;IAkBI,YAAS;IACT,YAAY;IACZ,gBAAgB;IAChB,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,UAAU,EAAA;EA3Bd;IA8BI,mBAAmB,EAAA;;AAGvB;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;EACT,WAAW,EAAA;;AAEb;;;EAGE,WAAW;EACX,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;EACjB,sBAAsB;EACtB,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;EACnB,+BAA+B,EAAA;EAXjC;;;IAaI,yBAAyB;IACzB,+BAA+B;IAC/B,sBAAsB,EAAA;EAf1B;;;IAkBI,yBAAyB;IACzB,+BAA+B;IAC/B,eAAe,EAAA;;AAGnB;EACE,UAAU;EACV,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,oBAAoB;EACpB,sBAAsB;EACtB,mBAAmB,EAAA","sourcesContent":[".board {\r\n  position: relative;\r\n  width: 300px;\r\n  height: 300px;\r\n  background-color: #ffffff;\r\n  display: grid;\r\n  grid-template-rows: repeat(10, 1fr);\r\n  border: solid #273547e7 1px;\r\n}\r\n#board1::before,\r\n#board2::before {\r\n  display: none;\r\n  content: \"\";\r\n  font-size: 0.9rem;\r\n  text-align: center;\r\n  line-height: 27.5;\r\n  color: #0065d8;\r\n  text-shadow: rgb(255, 255, 255) 0px 0 5px;\r\n  position: absolute;\r\n  top: -5px;\r\n  bottom: -5px;\r\n  left: -5px;\r\n  right: -5px;\r\n  backdrop-filter: blur(1px);\r\n  -webkit-backdrop-filter: blur(1px);\r\n}\r\n#board1.notStarted::before,\r\n#board2.notStarted::before {\r\n  display: block;\r\n  opacity: 100;\r\n  z-index: 7;\r\n}\r\n.row-p1,\r\n.row-p2 {\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n}\r\n.cell-p1,\r\n.cell-p2,\r\n.res {\r\n  z-index: 0;\r\n  position: relative;\r\n  // transition: 200ms ease;\r\n  &::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    margin-top: -1px;\r\n    margin-left: -1px;\r\n    border-top: solid #0065d83b 1px;\r\n    border-left: solid #0065d83b 1px;\r\n    z-index: 1;\r\n  }\r\n}\r\n.cell-p1 {\r\n  cursor: crosshair;\r\n  &:hover {\r\n    background-color: #8585851c;\r\n  }\r\n}\r\n.fleet {\r\n  position: relative;\r\n  box-shadow: #0065d8 0 0 0 2px;\r\n  z-index: auto;\r\n  margin: 0;\r\n  &::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    // margin-top: -1px;\r\n    // margin-left: -1px;\r\n    border-top: solid #0065d83b 1px;\r\n    border-left: solid #0065d83b 1px;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background-color: #f0f5ff;\r\n    border: none;\r\n    box-shadow: none;\r\n    z-index: 1;\r\n  }\r\n}\r\n.miss {\r\n  position: relative;\r\n  margin-top: -1px;\r\n  margin-left: -1px;\r\n  border-top: solid #0065d83b 1px;\r\n  border-left: solid #0065d83b 1px;\r\n  &::after {\r\n    content: \"\";\r\n    width: 6px;\r\n    height: 6px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin: -4px;\r\n    border-radius: 50%;\r\n    background-color: #000000a9;\r\n  }\r\n  &:hover {\r\n    cursor: default;\r\n  }\r\n  &:active {\r\n    cursor: not-allowed;\r\n  }\r\n}\r\n.hit {\r\n  position: relative;\r\n  z-index: auto;\r\n  box-shadow: #0065d8 0 0 0 2px;\r\n\r\n  &::before {\r\n    content: \"\";\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background-color: #f0f5ff;\r\n    z-index: 3;\r\n  }\r\n  &::after {\r\n    content: \"✕\";\r\n    color: #004fa8;\r\n    font-size: 1.5em;\r\n    height: 100%;\r\n    width: 100%;\r\n    position: absolute;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: 5;\r\n  }\r\n  &:active {\r\n    cursor: not-allowed;\r\n  }\r\n  &:hover {\r\n    cursor: default;\r\n  }\r\n}\r\n.sunk {\r\n  position: relative;\r\n  z-index: auto;\r\n  // background-color: #b39898;\r\n  border: none;\r\n  cursor: default;\r\n  &::before {\r\n    content: \"\";\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background-color: #6097d6;\r\n    z-index: 4;\r\n  }\r\n  &::after {\r\n    content: \"✕\";\r\n    color: white;\r\n    font-size: 1.5em;\r\n    height: 100%;\r\n    width: 100%;\r\n    position: absolute;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: 6;\r\n  }\r\n  &:active {\r\n    cursor: not-allowed;\r\n  }\r\n}\r\n.board-buttons {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 1rem;\r\n  width: 100%;\r\n}\r\n.main-reset,\r\n.main-random,\r\n.main-start {\r\n  width: 7rem;\r\n  transition: 100ms;\r\n  color: white;\r\n  font-size: 0.8rem;\r\n  padding: 0.3rem 0.6rem;\r\n  background: #0065d8;\r\n  border: none;\r\n  border-radius: 1rem;\r\n  box-shadow: #00000033 0 2px 2px;\r\n  &:hover {\r\n    background-color: #1d75da;\r\n    box-shadow: #00000033 0 3px 3px;\r\n    transform: scale(1.05);\r\n  }\r\n  &:active {\r\n    background-color: #307ed8;\r\n    box-shadow: #00000033 0 2px 2px;\r\n    transform: none;\r\n  }\r\n}\r\n.main-start {\r\n  z-index: 7;\r\n  font-size: 1.5rem;\r\n  position: absolute;\r\n  align-self: center;\r\n  justify-self: center;\r\n  padding: 0.5rem 1.5rem;\r\n  border-radius: 2rem;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/drag-and-drop.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/drag-and-drop.scss ***!
  \********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".ships {\n  height: 10rem;\n  width: 15rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap; }\n\n.ship-container {\n  position: absolute;\n  background: white;\n  height: 10rem;\n  width: 10rem;\n  display: flex;\n  gap: 0.5rem;\n  flex-direction: column;\n  align-items: center; }\n  .ship-container span {\n    cursor: default;\n    justify-self: flex-start;\n    color: #273547e7; }\n\n.ship {\n  display: flex;\n  justify-content: center;\n  align-self: center;\n  align-items: center;\n  cursor: grab;\n  border: solid 2px #0065d8; }\n  .ship:active {\n    cursor: grabbing; }\n\n@media only screen and (max-width: 750px) {\n  .ships {\n    display: none; } }\n\n.rotated {\n  transition: 0.2s ease-in-out;\n  flex-direction: column; }\n\n.ship-cell {\n  background-color: #f0f5ff56;\n  width: 1.9em;\n  height: 1.9em;\n  border-left: 1px solid #0065d8;\n  border-top: 1px solid #0065d8;\n  margin-left: -1px;\n  margin-top: -1px;\n  transition: 0.1s; }\n  .ship-cell:hover {\n    background-color: #c8dbff; }\n  .ship-cell:active {\n    background-color: #c8dbff; }\n\n.not-available {\n  background-color: #ff004c17; }\n", "",{"version":3,"sources":["webpack://./src/styles/drag-and-drop.scss"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,eAAe,EAAA;;AAEjB;EACE,kBAAkB;EAClB,iBAA8B;EAC9B,aAAa;EACb,YAAY;EACZ,aAAa;EACb,WAAW;EACX,sBAAsB;EACtB,mBAAmB,EAAA;EARrB;IAUI,eAAe;IACf,wBAAwB;IACxB,gBAAgB,EAAA;;AAGpB;EACE,aAAa;EACb,uBAAuB;EACvB,kBAAkB;EAClB,mBAAmB;EACnB,YAAY;EACZ,yBAAyB,EAAA;EAN3B;IAQI,gBAAgB,EAAA;;AAGpB;EACE;IACE,aAAa,EAAA,EACd;;AAGH;EACE,4BAA4B;EAC5B,sBAAsB,EAAA;;AAGxB;EACE,2BAA2B;EAC3B,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,6BAA6B;EAC7B,iBAAiB;EACjB,gBAAgB;EAChB,gBAAgB,EAAA;EARlB;IAUI,yBAAyB,EAAA;EAV7B;IAaI,yBAAyB,EAAA;;AAG7B;EACE,2BAA2B,EAAA","sourcesContent":[".ships {\r\n  height: 10rem;\r\n  width: 15rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  flex-wrap: wrap;\r\n}\r\n.ship-container {\r\n  position: absolute;\r\n  background: rgb(255, 255, 255);\r\n  height: 10rem;\r\n  width: 10rem;\r\n  display: flex;\r\n  gap: 0.5rem;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  span {\r\n    cursor: default;\r\n    justify-self: flex-start;\r\n    color: #273547e7;\r\n  }\r\n}\r\n.ship {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-self: center;\r\n  align-items: center;\r\n  cursor: grab;\r\n  border: solid 2px #0065d8;\r\n  &:active {\r\n    cursor: grabbing;\r\n  }\r\n}\r\n@media only screen and (max-width: 750px) {\r\n  .ships {\r\n    display: none;\r\n  }\r\n}\r\n\r\n.rotated {\r\n  transition: 0.2s ease-in-out;\r\n  flex-direction: column;\r\n}\r\n\r\n.ship-cell {\r\n  background-color: #f0f5ff56;\r\n  width: 1.9em;\r\n  height: 1.9em;\r\n  border-left: 1px solid #0065d8;\r\n  border-top: 1px solid #0065d8;\r\n  margin-left: -1px;\r\n  margin-top: -1px;\r\n  transition: 0.1s;\r\n  &:hover {\r\n    background-color: #c8dbff;\r\n  }\r\n  &:active {\r\n    background-color: #c8dbff;\r\n  }\r\n}\r\n.not-available {\r\n  background-color: #ff004c17;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/how-to-play.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/how-to-play.scss ***!
  \******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".how-to-play {\n  display: none;\n  transform: translateY(100vh);\n  transition: 300ms ease-in-out;\n  opacity: 0;\n  flex-direction: column;\n  width: 100vw;\n  margin: 0;\n  background-color: #fff;\n  align-items: center;\n  z-index: 9;\n  padding-bottom: 5rem; }\n  .how-to-play.active {\n    transform: none;\n    opacity: 100%; }\n  .how-to-play .how-to-play-container1 {\n    display: flex;\n    justify-content: space-evenly;\n    gap: 1rem;\n    padding: 1rem;\n    max-width: 100%;\n    flex-wrap: wrap; }\n    .how-to-play .how-to-play-container1 .rules,\n    .how-to-play .how-to-play-container1 .controls {\n      display: flex;\n      flex-direction: column;\n      max-width: 25rem;\n      min-width: 10rem;\n      background-color: #ebebeb;\n      padding: 2rem;\n      border-radius: 2rem;\n      box-shadow: rgba(0, 0, 0, 0.158) 0 5px 5px; }\n      .how-to-play .how-to-play-container1 .rules h2,\n      .how-to-play .how-to-play-container1 .controls h2 {\n        margin-top: 0;\n        align-self: center; }\n      .how-to-play .how-to-play-container1 .rules p,\n      .how-to-play .how-to-play-container1 .controls p {\n        margin: 0.5rem; }\n      .how-to-play .how-to-play-container1 .rules li,\n      .how-to-play .how-to-play-container1 .controls li {\n        margin-top: 0.5rem; }\n      .how-to-play .how-to-play-container1 .rules b,\n      .how-to-play .how-to-play-container1 .controls b {\n        padding: 0 0.4rem;\n        border-radius: 1rem;\n        background-color: #0065d8;\n        box-shadow: rgba(0, 0, 0, 0.158) 0 2px 2px;\n        color: white; }\n\n@media only screen and (max-width: 750px) {\n  .how-to-play {\n    padding-bottom: 0; }\n  .how-to-play-container1 {\n    padding: none; } }\n", "",{"version":3,"sources":["webpack://./src/styles/how-to-play.scss"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,4BAA4B;EAC5B,6BAA6B;EAC7B,UAAU;EACV,sBAAsB;EACtB,YAAY;EACZ,SAAS;EACT,sBAAsB;EACtB,mBAAmB;EACnB,UAAU;EACV,oBAAoB,EAAA;EAXtB;IAaI,eAAe;IACf,aAAa,EAAA;EAdjB;IAiBI,aAAa;IACb,6BAA6B;IAC7B,SAAS;IACT,aAAa;IACb,eAAe;IACf,eAAe,EAAA;IAtBnB;;MAyBM,aAAa;MACb,sBAAsB;MACtB,gBAAgB;MAChB,gBAAgB;MAChB,yBAAoC;MACpC,aAAa;MACb,mBAAmB;MACnB,0CAA0C,EAAA;MAhChD;;QAkCQ,aAAa;QACb,kBAAkB,EAAA;MAnC1B;;QAsCQ,cAAc,EAAA;MAtCtB;;QAyCQ,kBAAkB,EAAA;MAzC1B;;QA4CQ,iBAAiB;QACjB,mBAAmB;QACnB,yBAAyB;QACzB,0CAA0C;QAC1C,YAAY,EAAA;;AAMpB;EACE;IACE,iBAAiB,EAAA;EAEnB;IACE,aAAa,EAAA,EACd","sourcesContent":[".how-to-play {\r\n  display: none;\r\n  transform: translateY(100vh);\r\n  transition: 300ms ease-in-out;\r\n  opacity: 0;\r\n  flex-direction: column;\r\n  width: 100vw;\r\n  margin: 0;\r\n  background-color: #fff;\r\n  align-items: center;\r\n  z-index: 9;\r\n  padding-bottom: 5rem;\r\n  &.active {\r\n    transform: none;\r\n    opacity: 100%;\r\n  }\r\n  .how-to-play-container1 {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    gap: 1rem;\r\n    padding: 1rem;\r\n    max-width: 100%;\r\n    flex-wrap: wrap;\r\n    .rules,\r\n    .controls {\r\n      display: flex;\r\n      flex-direction: column;\r\n      max-width: 25rem;\r\n      min-width: 10rem;\r\n      background-color: rgb(235, 235, 235);\r\n      padding: 2rem;\r\n      border-radius: 2rem;\r\n      box-shadow: rgba(0, 0, 0, 0.158) 0 5px 5px;\r\n      h2 {\r\n        margin-top: 0;\r\n        align-self: center;\r\n      }\r\n      p {\r\n        margin: 0.5rem;\r\n      }\r\n      li {\r\n        margin-top: 0.5rem;\r\n      }\r\n      b {\r\n        padding: 0 0.4rem;\r\n        border-radius: 1rem;\r\n        background-color: #0065d8;\r\n        box-shadow: rgba(0, 0, 0, 0.158) 0 2px 2px;\r\n        color: white;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 750px) {\r\n  .how-to-play {\r\n    padding-bottom: 0;\r\n  }\r\n  .how-to-play-container1 {\r\n    padding: none;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  width: 100%; }\n\nbody {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen,\r Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  background-color: #fff;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  height: 100vh;\n  max-width: 100vw;\n  gap: 1rem;\n  overflow-x: hidden; }\n\nheader {\n  width: 100%;\n  min-height: 3rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 10; }\n  header a {\n    text-decoration: none; }\n    header a h2 {\n      margin: 0 1rem;\n      color: #182636;\n      cursor: pointer;\n      position: relative;\n      z-index: 5; }\n      header a h2::after {\n        content: \"\";\n        position: absolute;\n        width: 90%;\n        height: 3px;\n        bottom: 0;\n        border-radius: 20px;\n        left: 1px;\n        background: #182636;\n        transform: scaleX(1);\n        transform-origin: bottom right;\n        transition: transform 300ms cubic-bezier(0.65, 0.01, 0.73, 0.33); }\n      header a h2:hover:after {\n        transform: scaleX(0);\n        transform-origin: bottom right; }\n  header .menu {\n    display: flex;\n    gap: 1.5rem;\n    margin: 0 1rem;\n    z-index: 5; }\n    header .menu span {\n      color: #273547e7;\n      cursor: pointer; }\n    header .menu .header-btn {\n      color: #182636;\n      text-decoration: none;\n      padding: 0;\n      font-size: 1rem;\n      background: none;\n      border: none;\n      transition: 200ms;\n      text-decoration: underline 0.11em #000;\n      display: inline-block;\n      position: relative; }\n      header .menu .header-btn:after {\n        content: \"\";\n        position: absolute;\n        width: 100%;\n        transform: scaleX(0);\n        height: 2px;\n        bottom: -3px;\n        left: 0;\n        background-color: #0000008c;\n        transform-origin: bottom right;\n        transition: transform 200ms ease-out; }\n      header .menu .header-btn:hover:after {\n        transform: scaleX(1);\n        transform-origin: bottom left; }\n      header .menu .header-btn:hover {\n        color: #2e2e2e; }\n\n.content {\n  transform: translateY(-100vw);\n  opacity: 0;\n  transition: 300ms ease-in-out;\n  display: flex;\n  justify-content: flex-start;\n  gap: 5rem;\n  margin-top: 6rem; }\n  .content.active {\n    transform: none;\n    opacity: 100%; }\n\n.container1,\n.container2 {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 1rem; }\n  .container1 h3,\n  .container2 h3 {\n    color: #273547e7;\n    cursor: pointer;\n    margin: 0; }\n\nfooter {\n  position: relative;\n  bottom: 0;\n  min-height: 2rem;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  footer a {\n    text-decoration: none;\n    color: black;\n    font-weight: 600;\n    transition: transform 100ms ease-in-out; }\n    footer a:hover {\n      transform: translateY(-3px); }\n  footer .bottom-waves {\n    z-index: -1;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    overflow: hidden;\n    line-height: 0;\n    transform: rotate(180deg); }\n  footer .bottom-waves svg {\n    position: relative;\n    display: block;\n    width: calc(200% + 1.3px);\n    height: 64px;\n    transform: rotateY(180deg); }\n  footer .bottom-waves .shape-fill {\n    fill: #c1c7d1; }\n\n@media only screen and (max-width: 750px) {\n  body {\n    justify-content: flex-start; }\n  .content {\n    flex-direction: column;\n    width: auto;\n    padding: 0;\n    margin: 0;\n    gap: 1rem;\n    padding-bottom: 1rem; }\n  footer {\n    display: none; } }\n\n@media only screen and (max-height: 790px) {\n  body {\n    justify-content: flex-start; }\n  footer {\n    display: none; } }\n", "",{"version":3,"sources":["webpack://./src/styles/index.scss"],"names":[],"mappings":"AAAA;EACE,WAAW,EAAA;;AAGb;EACE,yIAC8D;EAC9D,sBAAsB;EACtB,SAAS;EACT,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,mBAAmB;EACnB,aAAa;EACb,gBAAgB;EAChB,SAAS;EACT,kBAAkB,EAAA;;AAGpB;EACE,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,WAAW,EAAA;EANb;IAQI,qBAAqB,EAAA;IARzB;MAUM,cAAc;MACd,cAAc;MACd,eAAe;MACf,kBAAkB;MAClB,UAAU,EAAA;MAdhB;QAgBQ,WAAW;QACX,kBAAkB;QAClB,UAAU;QACV,WAAW;QACX,SAAS;QACT,mBAAmB;QACnB,SAAS;QACT,mBAAmB;QACnB,oBAAoB;QACpB,8BAA8B;QAC9B,gEAAgE,EAAA;MA1BxE;QA6BQ,oBAAoB;QACpB,8BAA8B,EAAA;EA9BtC;IAmCI,aAAa;IACb,WAAW;IACX,cAAc;IACd,UAAU,EAAA;IAtCd;MAwCM,gBAAgB;MAChB,eAAe,EAAA;IAzCrB;MA4CM,cAAc;MACd,qBAAqB;MACrB,UAAU;MACV,eAAe;MACf,gBAAgB;MAChB,YAAY;MACZ,iBAAiB;MACjB,sCAAsC;MACtC,qBAAqB;MACrB,kBAAkB,EAAA;MArDxB;QAuDQ,WAAW;QACX,kBAAkB;QAClB,WAAW;QACX,oBAAoB;QACpB,WAAW;QACX,YAAY;QACZ,OAAO;QACP,2BAA2B;QAC3B,8BAA8B;QAC9B,oCAAoC,EAAA;MAhE5C;QAmEQ,oBAAoB;QACpB,6BAA6B,EAAA;MApErC;QAuEQ,cAAc,EAAA;;AAKtB;EACE,6BAA6B;EAC7B,UAAU;EACV,6BAA6B;EAC7B,aAAa;EACb,2BAA2B;EAC3B,SAAS;EACT,gBAAgB,EAAA;EAPlB;IASI,eAAe;IACf,aAAa,EAAA;;AAIjB;;EAEE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,mBAAmB;EACnB,SAAS,EAAA;EANX;;IAQI,gBAAgB;IAChB,eAAe;IACf,SAAS,EAAA;;AAIb;EACE,kBAAkB;EAClB,SAAS;EACT,gBAAgB;EAChB,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB,EAAA;EAPrB;IASI,qBAAqB;IACrB,YAAY;IACZ,gBAAgB;IAChB,uCAAuC,EAAA;IAZ3C;MAcM,2BAA2B,EAAA;EAdjC;IAkBI,WAAW;IACX,kBAAkB;IAClB,SAAS;IACT,OAAO;IACP,WAAW;IACX,gBAAgB;IAChB,cAAc;IACd,yBAAyB,EAAA;EAzB7B;IA4BI,kBAAkB;IAClB,cAAc;IACd,yBAAyB;IACzB,YAAY;IACZ,0BAA0B,EAAA;EAhC9B;IAmCI,aAAa,EAAA;;AAIjB;EACE;IACE,2BAA2B,EAAA;EAE7B;IACE,sBAAsB;IACtB,WAAW;IACX,UAAU;IACV,SAAS;IACT,SAAS;IACT,oBAAoB,EAAA;EAEtB;IACE,aAAa,EAAA,EACd;;AAGH;EACE;IACE,2BAA2B,EAAA;EAE7B;IACE,aAAa,EAAA,EACd","sourcesContent":["html {\r\n  width: 100%;\r\n}\r\n\r\nbody {\r\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen,\r\n    Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\r\n  background-color: #fff;\r\n  margin: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 100vh;\r\n  max-width: 100vw;\r\n  gap: 1rem;\r\n  overflow-x: hidden;\r\n}\r\n\r\nheader {\r\n  width: 100%;\r\n  min-height: 3rem;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  z-index: 10;\r\n  a {\r\n    text-decoration: none;\r\n    h2 {\r\n      margin: 0 1rem;\r\n      color: #182636;\r\n      cursor: pointer;\r\n      position: relative;\r\n      z-index: 5;\r\n      &::after {\r\n        content: \"\";\r\n        position: absolute;\r\n        width: 90%;\r\n        height: 3px;\r\n        bottom: 0;\r\n        border-radius: 20px;\r\n        left: 1px;\r\n        background: #182636;\r\n        transform: scaleX(1);\r\n        transform-origin: bottom right;\r\n        transition: transform 300ms cubic-bezier(0.65, 0.01, 0.73, 0.33);\r\n      }\r\n      &:hover:after {\r\n        transform: scaleX(0);\r\n        transform-origin: bottom right;\r\n      }\r\n    }\r\n  }\r\n  .menu {\r\n    display: flex;\r\n    gap: 1.5rem;\r\n    margin: 0 1rem;\r\n    z-index: 5;\r\n    span {\r\n      color: #273547e7;\r\n      cursor: pointer;\r\n    }\r\n    .header-btn {\r\n      color: #182636;\r\n      text-decoration: none;\r\n      padding: 0;\r\n      font-size: 1rem;\r\n      background: none;\r\n      border: none;\r\n      transition: 200ms;\r\n      text-decoration: underline 0.11em #000;\r\n      display: inline-block;\r\n      position: relative;\r\n      &:after {\r\n        content: \"\";\r\n        position: absolute;\r\n        width: 100%;\r\n        transform: scaleX(0);\r\n        height: 2px;\r\n        bottom: -3px;\r\n        left: 0;\r\n        background-color: #0000008c;\r\n        transform-origin: bottom right;\r\n        transition: transform 200ms ease-out;\r\n      }\r\n      &:hover:after {\r\n        transform: scaleX(1);\r\n        transform-origin: bottom left;\r\n      }\r\n      &:hover {\r\n        color: #2e2e2e;\r\n      }\r\n    }\r\n  }\r\n}\r\n.content {\r\n  transform: translateY(-100vw);\r\n  opacity: 0;\r\n  transition: 300ms ease-in-out;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  gap: 5rem;\r\n  margin-top: 6rem;\r\n  &.active {\r\n    transform: none;\r\n    opacity: 100%;\r\n  }\r\n}\r\n\r\n.container1,\r\n.container2 {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  h3 {\r\n    color: #273547e7;\r\n    cursor: pointer;\r\n    margin: 0;\r\n  }\r\n}\r\n\r\nfooter {\r\n  position: relative;\r\n  bottom: 0;\r\n  min-height: 2rem;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  a {\r\n    text-decoration: none;\r\n    color: black;\r\n    font-weight: 600;\r\n    transition: transform 100ms ease-in-out;\r\n    &:hover {\r\n      transform: translateY(-3px);\r\n    }\r\n  }\r\n  .bottom-waves {\r\n    z-index: -1;\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    overflow: hidden;\r\n    line-height: 0;\r\n    transform: rotate(180deg);\r\n  }\r\n  .bottom-waves svg {\r\n    position: relative;\r\n    display: block;\r\n    width: calc(200% + 1.3px);\r\n    height: 64px;\r\n    transform: rotateY(180deg);\r\n  }\r\n  .bottom-waves .shape-fill {\r\n    fill: #c1c7d1;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 750px) {\r\n  body {\r\n    justify-content: flex-start;\r\n  }\r\n  .content {\r\n    flex-direction: column;\r\n    width: auto;\r\n    padding: 0;\r\n    margin: 0;\r\n    gap: 1rem;\r\n    padding-bottom: 1rem;\r\n  }\r\n  footer {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media only screen and (max-height: 790px) {\r\n  body {\r\n    justify-content: flex-start;\r\n  }\r\n  footer {\r\n    display: none;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/win-screen.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/win-screen.scss ***!
  \*****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".win-screen {\n  display: none;\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  background-color: #0000001a;\n  justify-content: center;\n  align-items: center;\n  z-index: 10;\n  backdrop-filter: blur(3px); }\n  .win-screen .win-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    gap: 2rem;\n    padding: 3rem;\n    background-color: #fff;\n    border-radius: 1rem;\n    margin: 1rem; }\n    .win-screen .win-container h1 {\n      margin: 0;\n      font-weight: 600;\n      text-shadow: rgba(0, 0, 0, 0.205) 0 5px 5px; }\n    .win-screen .win-container button {\n      font-size: 1.5rem;\n      width: fit-content;\n      padding: 0.5em 1em;\n      border-radius: 2rem;\n      border-style: none;\n      background-color: #0065d8;\n      color: #fff;\n      box-shadow: rgba(0, 0, 0, 0.171) 0 5px 5px;\n      transition: 100ms; }\n      .win-screen .win-container button:hover {\n        background-color: #1e73d4;\n        transform: scale(1.05); }\n      .win-screen .win-container button:active {\n        background-color: #2979d4;\n        transform: none; }\n", "",{"version":3,"sources":["webpack://./src/styles/win-screen.scss"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,eAAe;EACf,aAAa;EACb,YAAY;EACZ,2BAA2B;EAC3B,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,0BAA0B,EAAA;EAT5B;IAWI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;IACnB,SAAS;IACT,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,YAAY,EAAA;IAnBhB;MAqBM,SAAS;MACT,gBAAgB;MAChB,2CAA2C,EAAA;IAvBjD;MA0BM,iBAAiB;MACjB,kBAAkB;MAClB,kBAAkB;MAClB,mBAAmB;MACnB,kBAAkB;MAClB,yBAAyB;MACzB,WAAW;MACX,0CAA0C;MAC1C,iBAAiB,EAAA;MAlCvB;QAoCQ,yBAAyB;QACzB,sBAAsB,EAAA;MArC9B;QAwCQ,yBAAyB;QACzB,eAAe,EAAA","sourcesContent":[".win-screen {\r\n  display: none;\r\n  position: fixed;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  background-color: #0000001a;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 10;\r\n  backdrop-filter: blur(3px);\r\n  .win-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    gap: 2rem;\r\n    padding: 3rem;\r\n    background-color: #fff;\r\n    border-radius: 1rem;\r\n    margin: 1rem;\r\n    h1 {\r\n      margin: 0;\r\n      font-weight: 600;\r\n      text-shadow: rgba(0, 0, 0, 0.205) 0 5px 5px;\r\n    }\r\n    button {\r\n      font-size: 1.5rem;\r\n      width: fit-content;\r\n      padding: 0.5em 1em;\r\n      border-radius: 2rem;\r\n      border-style: none;\r\n      background-color: #0065d8;\r\n      color: #fff;\r\n      box-shadow: rgba(0, 0, 0, 0.171) 0 5px 5px;\r\n      transition: 100ms;\r\n      &:hover {\r\n        background-color: #1e73d4;\r\n        transform: scale(1.05);\r\n      }\r\n      &:active {\r\n        background-color: #2979d4;\r\n        transform: none;\r\n      }\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/board.scss":
/*!*******************************!*\
  !*** ./src/styles/board.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_board_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./board.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/board.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_board_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_board_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_board_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_board_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/drag-and-drop.scss":
/*!***************************************!*\
  !*** ./src/styles/drag-and-drop.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_drag_and_drop_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./drag-and-drop.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/drag-and-drop.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_drag_and_drop_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_drag_and_drop_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_drag_and_drop_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_drag_and_drop_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/how-to-play.scss":
/*!*************************************!*\
  !*** ./src/styles/how-to-play.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_how_to_play_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./how-to-play.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/how-to-play.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_how_to_play_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_how_to_play_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_how_to_play_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_how_to_play_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/win-screen.scss":
/*!************************************!*\
  !*** ./src/styles/win-screen.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_win_screen_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./win-screen.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/win-screen.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_win_screen_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_win_screen_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_win_screen_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_win_screen_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/scripts/botAI.js":
/*!******************************!*\
  !*** ./src/scripts/botAI.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aiPlay": () => (/* binding */ aiPlay),
/* harmony export */   "getWasHit": () => (/* binding */ getWasHit),
/* harmony export */   "lastHitPos": () => (/* binding */ lastHitPos),
/* harmony export */   "setWasHit": () => (/* binding */ setWasHit),
/* harmony export */   "surroundingPos": () => (/* binding */ surroundingPos)
/* harmony export */ });
/* harmony import */ var _domFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domFunctions */ "./src/scripts/domFunctions.js");


let wasHit = false;
let status = false;
let lastHitPos = [];
let firstHitPos = [];
let secondHitPos = [];
let surroundingPos = [];
let attackDirection;

function setWasHit(value, stat, pos1, pos2) {
  wasHit = value;
  if (stat !== undefined) status = stat;
  if (pos1 !== undefined) lastHitPos = [pos1, pos2];
  if (firstHitPos.length == 0 && pos1 !== undefined) firstHitPos = [pos1, pos2];
  else if (
    firstHitPos.length !== 0 &&
    secondHitPos.length == 0 &&
    pos1 !== undefined
  )
    secondHitPos = [pos1, pos2];
}

function getWasHit() {
  return [wasHit, lastHitPos, status];
}

function registerSurroundingPos(pos1, pos2) {
  surroundingPos = [];
  if (pos2 !== 0) surroundingPos.push([pos1, pos2 - 1]);
  if (pos2 !== 9) surroundingPos.push([pos1, pos2 + 1]);
  if (pos1 !== 0) surroundingPos.push([pos1 - 1, pos2]);
  if (pos1 !== 9) surroundingPos.push([pos1 + 1, pos2]);
  return surroundingPos;
}

function aiPlay(repeat, p1, p2, isSunk) {
  let pos, pos1, pos2;
  if (isSunk === true) {
    lastHitPos = [];
    firstHitPos = [];
    secondHitPos = [];
    surroundingPos = [];
    wasHit = false;
    status = false;
    attackDirection = "";
  }
  if (!status && !wasHit) {
    pos = p1.randomPos();
    return (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.renderAttackP2)(p1, p2, pos[0], pos[1]);
  } else if (secondHitPos.length !== 0 && wasHit && !repeat) {
    let newPos;
    if (firstHitPos[0] == secondHitPos[0] - 1) newPos = attackTowards("down");
    if (firstHitPos[0] == secondHitPos[0] + 1) newPos = attackTowards("up");
    if (firstHitPos[1] == secondHitPos[1] - 1) newPos = attackTowards("right");
    if (firstHitPos[1] == secondHitPos[1] + 1) newPos = attackTowards("left");
    if (newPos[0] >= 0 && newPos[0] <= 9 && newPos[1] >= 0 && newPos[1] <= 9)
      return (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.renderAttackP2)(p1, p2, newPos[0], newPos[1]);
  } else if (secondHitPos.length !== 0 && status && !wasHit) {
    lastHitPos = firstHitPos;
    secondHitPos = [];
    let newPos;
    if (attackDirection === "up") newPos = attackTowards("down");
    if (attackDirection === "down") newPos = attackTowards("up");
    if (attackDirection === "right") newPos = attackTowards("left");
    if (attackDirection === "left") newPos = attackTowards("right");
    if (newPos[0] >= 0 && newPos[0] <= 9 && newPos[1] >= 0 && newPos[1] <= 9)
      return (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.renderAttackP2)(p1, p2, newPos[0], newPos[1]);
  } else if (status) {
    if (surroundingPos.length == 0)
      registerSurroundingPos(lastHitPos[0], lastHitPos[1]);
    if (surroundingPos.length == 0 && status == true)
      registerSurroundingPos(firstHitPos[0].firstHitPos[1]);
    let newPos = surroundingPos.pop();
    return (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.renderAttackP2)(p1, p2, newPos[0], newPos[1]);
  }
}

// get pos of attack based on direction
function attackTowards(dir) {
  if (dir === "left") {
    attackDirection = "left";
    return [lastHitPos[0], lastHitPos[1] - 1];
  }
  if (dir === "right") {
    attackDirection = "right";
    return [lastHitPos[0], lastHitPos[1] + 1];
  }
  if (dir === "down") {
    attackDirection = "down";
    return [lastHitPos[0] + 1, lastHitPos[1]];
  }
  if (dir === "up") {
    attackDirection = "up";
    return [lastHitPos[0] - 1, lastHitPos[1]];
  }
}




/***/ }),

/***/ "./src/scripts/domFunctions.js":
/*!*************************************!*\
  !*** ./src/scripts/domFunctions.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDragAndDropFleet": () => (/* binding */ createDragAndDropFleet),
/* harmony export */   "initHeaderBtn": () => (/* binding */ initHeaderBtn),
/* harmony export */   "renderAttackP2": () => (/* binding */ renderAttackP2),
/* harmony export */   "renderBoards": () => (/* binding */ renderBoards),
/* harmony export */   "renderButtons": () => (/* binding */ renderButtons),
/* harmony export */   "renderPlayerFleet": () => (/* binding */ renderPlayerFleet),
/* harmony export */   "resetBoards": () => (/* binding */ resetBoards)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/scripts/game.js");
/* harmony import */ var _drag_and_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drag-and-drop */ "./src/scripts/drag-and-drop.js");
/* harmony import */ var _botAI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./botAI */ "./src/scripts/botAI.js");




function renderBoards(p1, p2) {
  for (let i = 0; i < 10; i++) {
    let row = document.createElement("div");
    row.classList.add("row-p1");
    row.setAttribute("id", `p1-row${i}`);
    document.getElementById("board1").appendChild(row);

    p1.board.board[i].forEach((e, j) => {
      let cell = document.createElement("div");
      cell.classList.add("cell-p1");
      cell.setAttribute("id", `p1-row${i}-cell${j}`);
      row.appendChild(cell);

      // event listener for p1 clicks on p2 board
      cell.addEventListener("click", (e) => {
        if (!p1.turn.get() || !p1.board.isStartAllowed.get()) return;
        renderAttackP1(e, i, j, p1, p2);
      });
    });
  }
  for (let i = 0; i < 10; i++) {
    let row = document.createElement("div");
    row.classList.add("row-p2");
    row.setAttribute("id", `p2-row${i}`);
    document.getElementById("board2").appendChild(row);

    p2.board.board[i].forEach((e, j) => {
      let cell = document.createElement("div");
      cell.classList.add("cell-p2");
      cell.setAttribute("id", `p2-row${i}-cell${j}`);
      row.appendChild(cell);
    });
  }
}

// resets the board
function resetBoards() {
  document.querySelector(".board-buttons").innerHTML = "";
  document.querySelector(".ships").innerHTML = "";
  document
    .querySelectorAll(".board")
    .forEach((board) => (board.innerHTML = ""));
  (0,_game__WEBPACK_IMPORTED_MODULE_0__.initGame)();
}

// render buttons and add event listeners
function renderButtons(player) {
  const boardButtons = document.querySelector(".board-buttons");
  const board1 = document.getElementById("board1");
  const board2 = document.getElementById("board2");

  boardButtons.innerHTML = `
        <button class="main-random">Random board</button>
        <button class="main-reset">Reset board</button>
    `;

  document.querySelector(".main-reset").addEventListener("click", () => {
    // prevents bug when clicking reset during enemy's turn
    if (!player.turn.get()) return;

    // resets board and sets blur
    resetBoards(player);
    board1.classList.add("notStarted");
  });

  // creates a random fleet for p1
  document.querySelector(".main-random").addEventListener("click", () => {
    resetBoards();
    _game__WEBPACK_IMPORTED_MODULE_0__.p1.randomFleet();
    renderPlayerFleet(_game__WEBPACK_IMPORTED_MODULE_0__.p1);
    _game__WEBPACK_IMPORTED_MODULE_0__.p1.board.isStartAllowed.set(true);
    document.querySelector(".ships").innerHTML = "";
  });

  board1.innerHTML += `<button class="main-start">Start</button>`;
  document.querySelector(".main-start").addEventListener("click", (e) => {
    // prevent starting when not all ships are placed on the board
    if (player.board.isStartAllowed.get() === false) return;

    // blur toggles before and after start
    board1.classList.remove("notStarted");
    player.board.hasStarted.set(true);

    // removes start button when game starts
    board1.removeChild(e.target);
    boardButtons.removeChild(document.querySelector(".main-random"));
  });
}

// renders p1 fleet on board
function renderPlayerFleet(player) {
  document.querySelectorAll(".cell-p2").forEach((e, i) => {
    let pos1, pos2;
    let pos = "" + i;

    // transform index string to array of pos1 and pos2
    if (i < 10) {
      pos1 = 0;
      pos2 = i;
    } else {
      pos = pos.split("");
      pos1 = pos[0];
      pos2 = pos[1];
    }

    if (!player.board.board[pos1][pos2]) return;
    if (player.board.board[pos1][pos2] === "res") e.classList.add("res");
    else e.classList.add("fleet");
  });
}

// renders attacks for p1
async function renderAttackP1(e, pos1, pos2, p1, p2) {
  document.getElementById("board1").classList.toggle("current-turn");
  let attack = p1.attack(p2, pos1, pos2);
  if (!attack) return; //attacking the same tile doesn't pass turn
  if (attack === "miss") e.target.classList.add("miss");
  if (attack === "hit") {
    e.target.classList.add("hit");
    p2.board.board[pos1][pos2].ship.domTargets.push(e.target);

    //adds "sunk" class to all tiles of sunk ship
    if (p2.board.board[pos1][pos2].ship.isSunk())
      p2.board.board[pos1][pos2].ship.domTargets.forEach((e) =>
        e.classList.add("sunk")
      );
    return;
  }
  p2.isTurn(p1); // sets turn to P2

  await delay(700);
  // next player attack or stops game if areAllSunk()
  return p2.board.areAllSunk(p2.board.board) === true
    ? renderWin(p1)
    : (0,_botAI__WEBPACK_IMPORTED_MODULE_2__.aiPlay)(false, p1, p2);
}

// renders attack for p2 (AI)
async function renderAttackP2(p1, p2, pos1, pos2) {
  let isSunk = false;
  let e = document.getElementById(`p2-row${pos1}-cell${pos2}`);
  let attack = p2.attack(p1, pos1, pos2);

  if (!attack) {
    let repeat = true;
    (0,_botAI__WEBPACK_IMPORTED_MODULE_2__.aiPlay)(repeat, p1, p2);
  }
  if (attack === "miss") {
    (0,_botAI__WEBPACK_IMPORTED_MODULE_2__.setWasHit)(false);
    e.classList.add("miss");
  }
  if (attack === "hit") {
    (0,_botAI__WEBPACK_IMPORTED_MODULE_2__.setWasHit)(true, true, pos1, pos2);
    e.classList.add("hit");
    p1.board.board[pos1][pos2].ship.domTargets.push(e);
    // if ship is sunk, add "sunk" class
    if (p1.board.board[pos1][pos2].ship.isSunk()) {
      p1.board.board[pos1][pos2].ship.domTargets.forEach((e) =>
        e.classList.add("sunk")
      );
      isSunk = true;
      if (p1.board.areAllSunk(p1.board.board) === true) return renderWin(p2);
    }
    await delay(1000);
    return (0,_botAI__WEBPACK_IMPORTED_MODULE_2__.aiPlay)(false, p1, p2, isSunk);
  }

  p1.isTurn(p2); // gives turn to P1
}

// render win screen
function renderWin(player) {
  const winScreen = document.querySelector(".win-screen");
  const winText = document.querySelector(".win-text");
  const restartBtn = document.querySelector(".restart");

  winScreen.style.display = "flex";
  winText.textContent = player.name + " won the game!";
  restartBtn.addEventListener("click", () => {
    winScreen.style.display = "none";
    resetBoards();
  });
}

// renders how to play screen
async function renderHowToPlay() {
  const home = document.querySelector(".content");
  const howToPlay = document.querySelector(".how-to-play");
  home.classList.toggle("active");
  await delay(140);
  home.style.display = "none";
  howToPlay.style.display = "flex";
  await delay(140);
  howToPlay.classList.toggle("active");

  window.location.href = "#how-to-play";
}

// renders home screen
async function renderHome() {
  const home = document.querySelector(".content");
  const howToPlay = document.querySelector(".how-to-play");
  howToPlay.classList.toggle("active");
  await delay(140);

  howToPlay.style.display = "none";
  home.style.display = "flex";
  await delay(140);

  home.classList.toggle("active");

  window.location.href = "#home";
}

// renders about screen
function renderAbout() {
  const home = document.querySelector(".content");
  const howToPlay = document.querySelector(".how-to-play");
  home.style.display = "flex";
  howToPlay.style.display = "none";
  window.location.href = "#home";
}

// event listeners for header btn
function initHeaderBtn() {
  const homeBtn = document.querySelector(".home-btn");
  const howToPlayBtn = document.querySelector(".how-to-play-btn");
  let homeActive = true;
  let howToPlayActive = false;

  howToPlayBtn.addEventListener("click", () => {
    if (howToPlayActive) return;
    howToPlayActive = true;
    homeActive = false;
    renderHowToPlay();
  });
  homeBtn.addEventListener("click", () => {
    if (homeActive) return;
    homeActive = true;
    howToPlayActive = false;
    renderHome();
  });
}

// creates a delay to be used in an async function
function delay(delayInMs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, delayInMs);
  });
}

// renders the draggable ships under the board
function createDragAndDropFleet(player) {
  renderShipSelection(1, 1);
  renderShipSelection(2, 2);
  renderShipSelection(3, 3);
  renderShipSelection(4, 4);

  function renderShipSelection(i, length) {
    const container = document.querySelector(".ships");
    const shipContainer = document.createElement("div");
    shipContainer.classList.add("ship-container");
    container.appendChild(shipContainer);

    const shipInfo = document.createElement("span");
    shipInfo.classList.add(`info-${i}`);
    shipInfo.textContent = "2x";
    shipContainer.appendChild(shipInfo);

    const ship = document.createElement("div");
    ship.classList.add("ship");
    ship.classList.add(`ship-${i}`);
    ship.setAttribute("draggable", "true");
    shipContainer.appendChild(ship);

    for (let i = 0; i < length; i++) {
      const cell = document.createElement("div");
      cell.classList.add("ship-cell");
      ship.appendChild(cell);
    }
  }

  for (let i = 1; i < 5; i++) (0,_drag_and_drop__WEBPACK_IMPORTED_MODULE_1__.shipDrag)(player, `.ship-${i}`);
}




/***/ }),

/***/ "./src/scripts/drag-and-drop.js":
/*!**************************************!*\
  !*** ./src/scripts/drag-and-drop.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shipDrag": () => (/* binding */ shipDrag),
/* harmony export */   "totalAmountShips": () => (/* binding */ totalAmountShips)
/* harmony export */ });
/* harmony import */ var _domFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domFunctions */ "./src/scripts/domFunctions.js");


let totalAmountShips = 0;
function shipDrag(player, shipName) {
  let amountLeft = 2;
  const ship = document.querySelector(shipName);
  const body = document.querySelector("body");
  const cells = document.querySelectorAll(".cell-p2");
  const child = ship.childNodes;
  let dragSelection;
  let offset;
  let dir = "h";

  // offset for ship selection
  if (child[0]) child[0].addEventListener("mouseenter", () => (offset = 0));
  if (child[1]) child[1].addEventListener("mouseenter", () => (offset = -1));
  if (child[2]) child[2].addEventListener("mouseenter", () => (offset = -2));
  if (child[3]) child[3].addEventListener("mouseenter", () => (offset = -3));

  // click changes ship dir
  ship.addEventListener("click", (e) => changeDir(e));

  ship.addEventListener("dragstart", (e) => {
    //shows position reserved
    for (let i = 0; i < 10; i++)
      player.board.board[i].forEach((e, j) => {
        if (e === "res")
          document
            .getElementById(`p2-row${i}-cell${j}`)
            .classList.toggle("not-available");
      });
  });
  ship.addEventListener("dragend", (e, i) => {
    // removes reserved cell display
    document
      .querySelectorAll(".not-available")
      .forEach((e) => e.classList.remove("not-available"));

    if (dragSelection === -1) return; // prevents offset error
    let pos1;
    let pos2;
    let pos = "" + dragSelection;

    // transform index string to array of pos1 and pos2
    if (dragSelection < 10) {
      pos1 = 0;
      pos2 = dragSelection;
    } else {
      pos = pos.split("");
      pos1 = pos[0] * 1;
      pos2 = pos[1] * 1;
    }

    // place ships with proper offset
    if (dir === "h") pos2 += offset;
    if (dir === "v") pos1 += offset;
    if (pos2 < 0) return;
    if (shipName === ".ship-1")
      if (player.board.placeShip(pos1, pos2, 1, dir) === false) return;
    if (shipName === ".ship-2")
      if (player.board.placeShip(pos1, pos2, 2, dir) === false) return;
    if (shipName === ".ship-3")
      if (player.board.placeShip(pos1, pos2, 3, dir) === false) return;
    if (shipName === ".ship-4")
      if (player.board.placeShip(pos1, pos2, 4, dir) === false) return;
    (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.renderPlayerFleet)(player); // renders fleet

    //removes ship div after 2 have been placed
    amountLeft -= 1;
    totalAmountShips++;
    if (totalAmountShips === 8) player.board.isStartAllowed.set(true);
    ship.parentNode.firstChild.textContent = amountLeft + "x";
    if (amountLeft === 0) ship.parentNode.style.display = "none";
  });

  //event listeners for drag on cells
  cells.forEach((e, i) => {
    e.addEventListener("dragover", (e) => {
      e.preventDefault();
      dragSelection = i;
    });
  });

  // removes index if drop outside of cells
  body.addEventListener("dragenter", () => {
    dragSelection = -1;
  });

  //changes direction of ship on click
  function changeDir(e) {
    if (dir === "h") {
      dir = "v";
      e.target.parentNode.classList.toggle("rotated");
    } else {
      dir = "h";
      e.target.parentNode.classList.toggle("rotated");
    }
  }
}




/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initGame": () => (/* binding */ initGame),
/* harmony export */   "p1": () => (/* binding */ p1),
/* harmony export */   "p2": () => (/* binding */ p2)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/scripts/player.js");
/* harmony import */ var _domFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domFunctions */ "./src/scripts/domFunctions.js");



let p1, p2; // need p1 and p2 to be exported for button listeners

function initGame() {
  p1 = (0,_player__WEBPACK_IMPORTED_MODULE_0__.Player)("You");
  p2 = (0,_player__WEBPACK_IMPORTED_MODULE_0__.Player)("Enemy");
  p1.isTurn(p2); // sets turn to p1
  p2.randomFleet(); // random fleet for p2

  (0,_domFunctions__WEBPACK_IMPORTED_MODULE_1__.renderButtons)(p1); // renders "start", "random" and "reset" buttons
  (0,_domFunctions__WEBPACK_IMPORTED_MODULE_1__.renderBoards)(p1, p2);
  (0,_domFunctions__WEBPACK_IMPORTED_MODULE_1__.createDragAndDropFleet)(p1);
}




/***/ }),

/***/ "./src/scripts/gameboard.js":
/*!**********************************!*\
  !*** ./src/scripts/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/scripts/ship.js");


let Gameboard = () => {
  let isStartAllowed = false;
  let hasStarted = false;
  let board = [];

  //initialize a board (which would be displayed as 10x10)
  let init = (() => {
    for (let i = 0; i < 10; i++) {
      board[i] = [];
      for (let j = 0; j < 10; j++) {
        board[i].push(false);
      }
    }
  })();

  // place a ship on specific POS
  let placeShip = (pos1, pos2, length, dir) => {
    if (board[pos1][pos2]) return false;
    let ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(length);
    let shipPos = 0;

    if (dir === "h") {
      if (pos2 + ship.length > 10) return false; // checks if it overflows

      // checks if pos is reserved
      for (let i = 0; i < length; i++) {
        if (board[pos1][pos2 + i] === "res") return false;
      }

      for (let i = pos2; i < pos2 + ship.length; i++) {
        board[pos1].splice(i, 1, { ship, shipPos });
        reserveAround(pos1, pos2 + shipPos);
        shipPos++;
      }
    }
    if (dir === "v") {
      if (pos1 + ship.length > 10) return false; //checks if it overflows

      // checks if pos is reserved
      for (let i = 0; i < length; i++) {
        if (board[pos1 + i][pos2] === "res") return false;
      }

      for (let i = pos1; i < pos1 + ship.length; i++) {
        board[i].splice(pos2, 1, { ship, shipPos });
        reserveAround(pos1 + shipPos, pos2); //reserve pos
        shipPos++;
      }
    }
  };

  // makes tiles around ship "reserved"
  let reserveAround = (pos1, pos2) => {
    function cell(n1, n2) {
      if (pos1 + n1 > 9 || pos1 + n1 < 0) return;
      if (board[pos1 + n1][pos2 + n2] === false)
        board[pos1 + n1][pos2 + n2] = "res";
    }
    function reserveCell(row) {
      cell(row, -1);
      cell(row, 0);
      cell(row, 1);
    }
    reserveCell(-1);
    reserveCell(0);
    reserveCell(1);
  };

  // calls ship.hit() on specific POS, returns POS if ship missed
  let receiveAttack = (pos1, pos2) => {
    if (board[pos1][pos2] === "miss") return false;
    if (
      typeof board[pos1][pos2] == "object" &&
      board[pos1][pos2].ship.tiles[board[pos1][pos2].shipPos] === "hit"
    )
      return false;

    if (!board[pos1][pos2] || board[pos1][pos2] === "res") {
      board[pos1][pos2] = "miss";
      return board[pos1][pos2];
    } else {
      board[pos1][pos2].ship.hit(board[pos1][pos2].shipPos);
      return board[pos1][pos2].ship.tiles[board[pos1][pos2].shipPos];
    }
  };

  // calls Ship.isSunk to return if ship at pos is sunk
  let isSunk = (pos1, pos2) => {
    return board[pos1][pos2].ship.isSunk() === true ? true : false;
  };

  // returns true if all ships on the board sunk
  let areAllSunk = (board) => {
    let notSunk = false;
    for (let i = 0; i < 10; i++)
      board[i].forEach((e) => {
        if (!e || e === "miss" || e === "res") return;
        if (e.ship.isSunk() === false) notSunk = true;
      });
    return notSunk === true ? false : true;
  };
  return {
    board,
    placeShip,
    receiveAttack,
    isSunk,
    areAllSunk,
    isStartAllowed: {
      get: function () {
        return isStartAllowed;
      },
      set: function (value) {
        isStartAllowed = value;
      },
    },
    hasStarted: {
      get: function () {
        return hasStarted;
      },
      set: function (value) {
        hasStarted = value;
      },
    },
  };
};




/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/scripts/gameboard.js");


const Player = (n) => {
  const name = n;
  let board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();
  let turn = false;

  // sets player turn and removes enemy's turn
  let isTurn = (enemy) => {
    turn = true;
    enemy.turn.set(false);
  };
  // calls an attack on target
  let attack = (player, pos1, pos2) => {
    return player.board.receiveAttack(pos1, pos2);
  };
  // calls an random attack on target
  let randomPos = () => {
    let pos1 = Math.floor(Math.random() * 10);
    let pos2 = Math.floor(Math.random() * 10);
    return [pos1, pos2];
  };
  // creates a ship with random pos and orientation
  let randomShip = (length) => {
    let pos1 = Math.floor(Math.random() * 10);
    let pos2 = Math.floor(Math.random() * 10);
    let dir = Math.round(Math.random());

    if (dir === 0) {
      dir = "h";
      if (board.placeShip(pos1, pos2, length, dir) == false) return false;
    }

    if (dir === 1) {
      dir = "v";
      if (board.placeShip(pos1, pos2, length, dir) == false) return false;
    }
  };
  //creates a random fleet of 8 ships
  let randomFleet = () => {
    // create 2 ships of length 1
    for (let i = 0; i < 2; ) {
      if (randomShip(1) == false) continue;
      i++;
    }
    // create 2 ships of length 2
    for (let i = 0; i < 2; ) {
      if (randomShip(2) == false) continue;
      i++;
    }
    // create 2 ships of length 3
    for (let i = 0; i < 2; ) {
      if (randomShip(3) == false) continue;
      i++;
    }
    // create 1 ship of length 4
    for (let i = 0; i < 2; ) {
      if (randomShip(4) == false) continue;
      i++;
    }
    board.isStartAllowed.set(true);
  };

  return {
    name,
    board,
    attack,
    randomFleet,
    randomPos,
    turn: {
      get: function () {
        return turn;
      },
      set: function (value) {
        turn = value;
      },
    },
    isTurn,
  };
};




/***/ }),

/***/ "./src/scripts/ship.js":
/*!*****************************!*\
  !*** ./src/scripts/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });
let Ship = (l) => {
  //properties
  const length = l;
  let tiles = [...Array(l).keys()];
  let domTargets = [];

  // replace hit pos by "hit"
  let hit = (pos) => {
    if (tiles[pos] == "hit") return false;
    tiles.splice(pos, 1, "hit");
  };
  // checks if ship is sunk
  let isSunk = () => {
    let stillAlive = false;
    tiles.forEach((e) => {
      if (e !== "hit") stillAlive = true;
    });
    return stillAlive === true ? false : true;
  };

  return { tiles, length, hit, isSunk, domTargets };
};




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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_board_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/board.scss */ "./src/styles/board.scss");
/* harmony import */ var _styles_win_screen_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/win-screen.scss */ "./src/styles/win-screen.scss");
/* harmony import */ var _styles_how_to_play_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/how-to-play.scss */ "./src/styles/how-to-play.scss");
/* harmony import */ var _styles_drag_and_drop_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/drag-and-drop.scss */ "./src/styles/drag-and-drop.scss");
/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/game */ "./src/scripts/game.js");
/* harmony import */ var _scripts_domFunctions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/domFunctions */ "./src/scripts/domFunctions.js");








(0,_scripts_domFunctions__WEBPACK_IMPORTED_MODULE_6__.initHeaderBtn)();
(0,_scripts_game__WEBPACK_IMPORTED_MODULE_5__.initGame)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ2tCOzs7Ozs7Ozs7Ozs7Ozs7QUNqRmxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ2dCOzs7Ozs7O1VDdkJoQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTZCO0FBQ0E7QUFDSztBQUNDO0FBQ0U7QUFDSztBQUNhO0FBQ3ZEO0FBQ0Esb0VBQWE7QUFDYix1REFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL2JvYXJkLnNjc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvZHJhZy1hbmQtZHJvcC5zY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL2hvdy10by1wbGF5LnNjc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy93aW4tc2NyZWVuLnNjc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL2JvYXJkLnNjc3M/ZGM0NiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9kcmFnLWFuZC1kcm9wLnNjc3M/YWVjNyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9ob3ctdG8tcGxheS5zY3NzP2Q2ZWYiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz80YzM3Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3dpbi1zY3JlZW4uc2Nzcz9iYTE2Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2JvdEFJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9kb21GdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2RyYWctYW5kLWRyb3AuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbi5ib2FyZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGJvcmRlcjogc29saWQgIzI3MzU0N2U3IDFweDsgfVxcblxcbiNib2FyZDE6OmJlZm9yZSxcXG4jYm9hcmQyOjpiZWZvcmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMjcuNTtcXG4gIGNvbG9yOiAjMDA2NWQ4O1xcbiAgdGV4dC1zaGFkb3c6IHdoaXRlIDBweCAwIDVweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTVweDtcXG4gIGJvdHRvbTogLTVweDtcXG4gIGxlZnQ6IC01cHg7XFxuICByaWdodDogLTVweDtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxcHgpO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMXB4KTsgfVxcblxcbiNib2FyZDEubm90U3RhcnRlZDo6YmVmb3JlLFxcbiNib2FyZDIubm90U3RhcnRlZDo6YmVmb3JlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgb3BhY2l0eTogMTAwO1xcbiAgei1pbmRleDogNzsgfVxcblxcbi5yb3ctcDEsXFxuLnJvdy1wMiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7IH1cXG5cXG4uY2VsbC1wMSxcXG4uY2VsbC1wMixcXG4ucmVzIHtcXG4gIHotaW5kZXg6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gIC5jZWxsLXAxOjphZnRlcixcXG4gIC5jZWxsLXAyOjphZnRlcixcXG4gIC5yZXM6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xcbiAgICBtYXJnaW4tbGVmdDogLTFweDtcXG4gICAgYm9yZGVyLXRvcDogc29saWQgIzAwNjVkODNiIDFweDtcXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkICMwMDY1ZDgzYiAxcHg7XFxuICAgIHotaW5kZXg6IDE7IH1cXG5cXG4uY2VsbC1wMSB7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjsgfVxcbiAgLmNlbGwtcDE6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODU4NTg1MWM7IH1cXG5cXG4uZmxlZXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm94LXNoYWRvdzogIzAwNjVkOCAwIDAgMCAycHg7XFxuICB6LWluZGV4OiBhdXRvO1xcbiAgbWFyZ2luOiAwOyB9XFxuICAuZmxlZXQ6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvcmRlci10b3A6IHNvbGlkICMwMDY1ZDgzYiAxcHg7XFxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAjMDA2NWQ4M2IgMXB4O1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGY1ZmY7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgei1pbmRleDogMTsgfVxcblxcbi5taXNzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi10b3A6IC0xcHg7XFxuICBtYXJnaW4tbGVmdDogLTFweDtcXG4gIGJvcmRlci10b3A6IHNvbGlkICMwMDY1ZDgzYiAxcHg7XFxuICBib3JkZXItbGVmdDogc29saWQgIzAwNjVkODNiIDFweDsgfVxcbiAgLm1pc3M6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHdpZHRoOiA2cHg7XFxuICAgIGhlaWdodDogNnB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIG1hcmdpbjogLTRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwYTk7IH1cXG4gIC5taXNzOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuICAubWlzczphY3RpdmUge1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XFxuXFxuLmhpdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiBhdXRvO1xcbiAgYm94LXNoYWRvdzogIzAwNjVkOCAwIDAgMCAycHg7IH1cXG4gIC5oaXQ6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmNWZmO1xcbiAgICB6LWluZGV4OiAzOyB9XFxuICAuaGl0OjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCLinJVcXFwiO1xcbiAgICBjb2xvcjogIzAwNGZhODtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgei1pbmRleDogNTsgfVxcbiAgLmhpdDphY3RpdmUge1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XFxuICAuaGl0OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuXFxuLnN1bmsge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogYXV0bztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogZGVmYXVsdDsgfVxcbiAgLnN1bms6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA5N2Q2O1xcbiAgICB6LWluZGV4OiA0OyB9XFxuICAuc3Vuazo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwi4pyVXFxcIjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB6LWluZGV4OiA2OyB9XFxuICAuc3VuazphY3RpdmUge1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XFxuXFxuLmJvYXJkLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4ubWFpbi1yZXNldCxcXG4ubWFpbi1yYW5kb20sXFxuLm1haW4tc3RhcnQge1xcbiAgd2lkdGg6IDdyZW07XFxuICB0cmFuc2l0aW9uOiAxMDBtcztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgcGFkZGluZzogMC4zcmVtIDAuNnJlbTtcXG4gIGJhY2tncm91bmQ6ICMwMDY1ZDg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgYm94LXNoYWRvdzogIzAwMDAwMDMzIDAgMnB4IDJweDsgfVxcbiAgLm1haW4tcmVzZXQ6aG92ZXIsXFxuICAubWFpbi1yYW5kb206aG92ZXIsXFxuICAubWFpbi1zdGFydDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZDc1ZGE7XFxuICAgIGJveC1zaGFkb3c6ICMwMDAwMDAzMyAwIDNweCAzcHg7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7IH1cXG4gIC5tYWluLXJlc2V0OmFjdGl2ZSxcXG4gIC5tYWluLXJhbmRvbTphY3RpdmUsXFxuICAubWFpbi1zdGFydDphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA3ZWQ4O1xcbiAgICBib3gtc2hhZG93OiAjMDAwMDAwMzMgMCAycHggMnB4O1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7IH1cXG5cXG4ubWFpbi1zdGFydCB7XFxuICB6LWluZGV4OiA3O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAycmVtOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9ib2FyZC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLDJCQUEyQixFQUFBOztBQUU3Qjs7RUFFRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCw0QkFBeUM7RUFDekMsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxZQUFZO0VBQ1osVUFBVTtFQUNWLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIsa0NBQWtDLEVBQUE7O0FBRXBDOztFQUVFLGNBQWM7RUFDZCxZQUFZO0VBQ1osVUFBVSxFQUFBOztBQUVaOztFQUVFLGFBQWE7RUFDYixzQ0FBc0MsRUFBQTs7QUFFeEM7OztFQUdFLFVBQVU7RUFDVixrQkFBa0IsRUFBQTtFQUpwQjs7O0lBT0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQiwrQkFBK0I7SUFDL0IsZ0NBQWdDO0lBQ2hDLFVBQVUsRUFBQTs7QUFHZDtFQUNFLGlCQUFpQixFQUFBO0VBRG5CO0lBR0ksMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0Usa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsU0FBUyxFQUFBO0VBSlg7SUFNSSxXQUFXO0lBQ1gsa0JBQWtCO0lBR2xCLCtCQUErQjtJQUMvQixnQ0FBZ0M7SUFDaEMsTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFVBQVUsRUFBQTs7QUFHZDtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLCtCQUErQjtFQUMvQixnQ0FBZ0MsRUFBQTtFQUxsQztJQU9JLFdBQVc7SUFDWCxVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsMkJBQTJCLEVBQUE7RUFmL0I7SUFrQkksZUFBZSxFQUFBO0VBbEJuQjtJQXFCSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDZCQUE2QixFQUFBO0VBSC9CO0lBTUksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLHlCQUF5QjtJQUN6QixVQUFVLEVBQUE7RUFkZDtJQWlCSSxZQUFTO0lBQ1QsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixVQUFVLEVBQUE7RUExQmQ7SUE2QkksbUJBQW1CLEVBQUE7RUE3QnZCO0lBZ0NJLGVBQWUsRUFBQTs7QUFHbkI7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUViLFlBQVk7RUFDWixlQUFlLEVBQUE7RUFMakI7SUFPSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IseUJBQXlCO0lBQ3pCLFVBQVUsRUFBQTtFQWZkO0lBa0JJLFlBQVM7SUFDVCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFVBQVUsRUFBQTtFQTNCZDtJQThCSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxXQUFXLEVBQUE7O0FBRWI7OztFQUdFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsK0JBQStCLEVBQUE7RUFYakM7OztJQWFJLHlCQUF5QjtJQUN6QiwrQkFBK0I7SUFDL0Isc0JBQXNCLEVBQUE7RUFmMUI7OztJQWtCSSx5QkFBeUI7SUFDekIsK0JBQStCO0lBQy9CLGVBQWUsRUFBQTs7QUFHbkI7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixtQkFBbUIsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYm9hcmQge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuICBib3JkZXI6IHNvbGlkICMyNzM1NDdlNyAxcHg7XFxyXFxufVxcclxcbiNib2FyZDE6OmJlZm9yZSxcXHJcXG4jYm9hcmQyOjpiZWZvcmUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBsaW5lLWhlaWdodDogMjcuNTtcXHJcXG4gIGNvbG9yOiAjMDA2NWQ4O1xcclxcbiAgdGV4dC1zaGFkb3c6IHJnYigyNTUsIDI1NSwgMjU1KSAwcHggMCA1cHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IC01cHg7XFxyXFxuICBib3R0b206IC01cHg7XFxyXFxuICBsZWZ0OiAtNXB4O1xcclxcbiAgcmlnaHQ6IC01cHg7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMXB4KTtcXHJcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDFweCk7XFxyXFxufVxcclxcbiNib2FyZDEubm90U3RhcnRlZDo6YmVmb3JlLFxcclxcbiNib2FyZDIubm90U3RhcnRlZDo6YmVmb3JlIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgb3BhY2l0eTogMTAwO1xcclxcbiAgei1pbmRleDogNztcXHJcXG59XFxyXFxuLnJvdy1wMSxcXHJcXG4ucm93LXAyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG59XFxyXFxuLmNlbGwtcDEsXFxyXFxuLmNlbGwtcDIsXFxyXFxuLnJlcyB7XFxyXFxuICB6LWluZGV4OiAwO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgLy8gdHJhbnNpdGlvbjogMjAwbXMgZWFzZTtcXHJcXG4gICY6OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTFweDtcXHJcXG4gICAgYm9yZGVyLXRvcDogc29saWQgIzAwNjVkODNiIDFweDtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkICMwMDY1ZDgzYiAxcHg7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcbi5jZWxsLXAxIHtcXHJcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcclxcbiAgJjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NTg1ODUxYztcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmZsZWV0IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJveC1zaGFkb3c6ICMwMDY1ZDggMCAwIDAgMnB4O1xcclxcbiAgei1pbmRleDogYXV0bztcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gICY6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIC8vIG1hcmdpbi10b3A6IC0xcHg7XFxyXFxuICAgIC8vIG1hcmdpbi1sZWZ0OiAtMXB4O1xcclxcbiAgICBib3JkZXItdG9wOiBzb2xpZCAjMDA2NWQ4M2IgMXB4O1xcclxcbiAgICBib3JkZXItbGVmdDogc29saWQgIzAwNjVkODNiIDFweDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmNWZmO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcbi5taXNzIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG1hcmdpbi10b3A6IC0xcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogLTFweDtcXHJcXG4gIGJvcmRlci10b3A6IHNvbGlkICMwMDY1ZDgzYiAxcHg7XFxyXFxuICBib3JkZXItbGVmdDogc29saWQgIzAwNjVkODNiIDFweDtcXHJcXG4gICY6OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIHdpZHRoOiA2cHg7XFxyXFxuICAgIGhlaWdodDogNnB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIG1hcmdpbjogLTRweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwYTk7XFxyXFxuICB9XFxyXFxuICAmOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgfVxcclxcbiAgJjphY3RpdmUge1xcclxcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcclxcbiAgfVxcclxcbn1cXHJcXG4uaGl0IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHotaW5kZXg6IGF1dG87XFxyXFxuICBib3gtc2hhZG93OiAjMDA2NWQ4IDAgMCAwIDJweDtcXHJcXG5cXHJcXG4gICY6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmNWZmO1xcclxcbiAgICB6LWluZGV4OiAzO1xcclxcbiAgfVxcclxcbiAgJjo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBcXFwi4pyVXFxcIjtcXHJcXG4gICAgY29sb3I6ICMwMDRmYTg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHotaW5kZXg6IDU7XFxyXFxuICB9XFxyXFxuICAmOmFjdGl2ZSB7XFxyXFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxyXFxuICB9XFxyXFxuICAmOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgfVxcclxcbn1cXHJcXG4uc3VuayB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB6LWluZGV4OiBhdXRvO1xcclxcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2IzOTg5ODtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gICY6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA5N2Q2O1xcclxcbiAgICB6LWluZGV4OiA0O1xcclxcbiAgfVxcclxcbiAgJjo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBcXFwi4pyVXFxcIjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDEuNWVtO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB6LWluZGV4OiA2O1xcclxcbiAgfVxcclxcbiAgJjphY3RpdmUge1xcclxcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcclxcbiAgfVxcclxcbn1cXHJcXG4uYm9hcmQtYnV0dG9ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLm1haW4tcmVzZXQsXFxyXFxuLm1haW4tcmFuZG9tLFxcclxcbi5tYWluLXN0YXJ0IHtcXHJcXG4gIHdpZHRoOiA3cmVtO1xcclxcbiAgdHJhbnNpdGlvbjogMTAwbXM7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuM3JlbSAwLjZyZW07XFxyXFxuICBiYWNrZ3JvdW5kOiAjMDA2NWQ4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIGJveC1zaGFkb3c6ICMwMDAwMDAzMyAwIDJweCAycHg7XFxyXFxuICAmOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFkNzVkYTtcXHJcXG4gICAgYm94LXNoYWRvdzogIzAwMDAwMDMzIDAgM3B4IDNweDtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG4gIH1cXHJcXG4gICY6YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwN2VkODtcXHJcXG4gICAgYm94LXNoYWRvdzogIzAwMDAwMDMzIDAgMnB4IDJweDtcXHJcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcclxcbiAgfVxcclxcbn1cXHJcXG4ubWFpbi1zdGFydCB7XFxyXFxuICB6LWluZGV4OiA3O1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc2hpcHMge1xcbiAgaGVpZ2h0OiAxMHJlbTtcXG4gIHdpZHRoOiAxNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBmbGV4LXdyYXA6IHdyYXA7IH1cXG5cXG4uc2hpcC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBoZWlnaHQ6IDEwcmVtO1xcbiAgd2lkdGg6IDEwcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gIC5zaGlwLWNvbnRhaW5lciBzcGFuIHtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIGNvbG9yOiAjMjczNTQ3ZTc7IH1cXG5cXG4uc2hpcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBncmFiO1xcbiAgYm9yZGVyOiBzb2xpZCAycHggIzAwNjVkODsgfVxcbiAgLnNoaXA6YWN0aXZlIHtcXG4gICAgY3Vyc29yOiBncmFiYmluZzsgfVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcXG4gIC5zaGlwcyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxcblxcbi5yb3RhdGVkIHtcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuXFxuLnNoaXAtY2VsbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmNWZmNTY7XFxuICB3aWR0aDogMS45ZW07XFxuICBoZWlnaHQ6IDEuOWVtO1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDA2NWQ4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDY1ZDg7XFxuICBtYXJnaW4tbGVmdDogLTFweDtcXG4gIG1hcmdpbi10b3A6IC0xcHg7XFxuICB0cmFuc2l0aW9uOiAwLjFzOyB9XFxuICAuc2hpcC1jZWxsOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZGJmZjsgfVxcbiAgLnNoaXAtY2VsbDphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhkYmZmOyB9XFxuXFxuLm5vdC1hdmFpbGFibGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDA0YzE3OyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9kcmFnLWFuZC1kcm9wLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxlQUFlLEVBQUE7O0FBRWpCO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUE4QjtFQUM5QixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLG1CQUFtQixFQUFBO0VBUnJCO0lBVUksZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHlCQUF5QixFQUFBO0VBTjNCO0lBUUksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0U7SUFDRSxhQUFhLEVBQUEsRUFDZDs7QUFHSDtFQUNFLDRCQUE0QjtFQUM1QixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7RUFSbEI7SUFVSSx5QkFBeUIsRUFBQTtFQVY3QjtJQWFJLHlCQUF5QixFQUFBOztBQUc3QjtFQUNFLDJCQUEyQixFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zaGlwcyB7XFxyXFxuICBoZWlnaHQ6IDEwcmVtO1xcclxcbiAgd2lkdGg6IDE1cmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuLnNoaXAtY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gIGhlaWdodDogMTByZW07XFxyXFxuICB3aWR0aDogMTByZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHNwYW4ge1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcXHJcXG4gICAgY29sb3I6ICMyNzM1NDdlNztcXHJcXG4gIH1cXHJcXG59XFxyXFxuLnNoaXAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogZ3JhYjtcXHJcXG4gIGJvcmRlcjogc29saWQgMnB4ICMwMDY1ZDg7XFxyXFxuICAmOmFjdGl2ZSB7XFxyXFxuICAgIGN1cnNvcjogZ3JhYmJpbmc7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcXHJcXG4gIC5zaGlwcyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5yb3RhdGVkIHtcXHJcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1jZWxsIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGY1ZmY1NjtcXHJcXG4gIHdpZHRoOiAxLjllbTtcXHJcXG4gIGhlaWdodDogMS45ZW07XFxyXFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMwMDY1ZDg7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwNjVkODtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xcclxcbiAgbWFyZ2luLXRvcDogLTFweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuMXM7XFxyXFxuICAmOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZGJmZjtcXHJcXG4gIH1cXHJcXG4gICY6YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZGJmZjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLm5vdC1hdmFpbGFibGUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDA0YzE3O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaG93LXRvLXBsYXkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDB2aCk7XFxuICB0cmFuc2l0aW9uOiAzMDBtcyBlYXNlLWluLW91dDtcXG4gIG9wYWNpdHk6IDA7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB6LWluZGV4OiA5O1xcbiAgcGFkZGluZy1ib3R0b206IDVyZW07IH1cXG4gIC5ob3ctdG8tcGxheS5hY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICAgIG9wYWNpdHk6IDEwMCU7IH1cXG4gIC5ob3ctdG8tcGxheSAuaG93LXRvLXBsYXktY29udGFpbmVyMSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgZmxleC13cmFwOiB3cmFwOyB9XFxuICAgIC5ob3ctdG8tcGxheSAuaG93LXRvLXBsYXktY29udGFpbmVyMSAucnVsZXMsXFxuICAgIC5ob3ctdG8tcGxheSAuaG93LXRvLXBsYXktY29udGFpbmVyMSAuY29udHJvbHMge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBtYXgtd2lkdGg6IDI1cmVtO1xcbiAgICAgIG1pbi13aWR0aDogMTByZW07XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcXG4gICAgICBwYWRkaW5nOiAycmVtO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1OCkgMCA1cHggNXB4OyB9XFxuICAgICAgLmhvdy10by1wbGF5IC5ob3ctdG8tcGxheS1jb250YWluZXIxIC5ydWxlcyBoMixcXG4gICAgICAuaG93LXRvLXBsYXkgLmhvdy10by1wbGF5LWNvbnRhaW5lcjEgLmNvbnRyb2xzIGgyIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7IH1cXG4gICAgICAuaG93LXRvLXBsYXkgLmhvdy10by1wbGF5LWNvbnRhaW5lcjEgLnJ1bGVzIHAsXFxuICAgICAgLmhvdy10by1wbGF5IC5ob3ctdG8tcGxheS1jb250YWluZXIxIC5jb250cm9scyBwIHtcXG4gICAgICAgIG1hcmdpbjogMC41cmVtOyB9XFxuICAgICAgLmhvdy10by1wbGF5IC5ob3ctdG8tcGxheS1jb250YWluZXIxIC5ydWxlcyBsaSxcXG4gICAgICAuaG93LXRvLXBsYXkgLmhvdy10by1wbGF5LWNvbnRhaW5lcjEgLmNvbnRyb2xzIGxpIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTsgfVxcbiAgICAgIC5ob3ctdG8tcGxheSAuaG93LXRvLXBsYXktY29udGFpbmVyMSAucnVsZXMgYixcXG4gICAgICAuaG93LXRvLXBsYXkgLmhvdy10by1wbGF5LWNvbnRhaW5lcjEgLmNvbnRyb2xzIGIge1xcbiAgICAgICAgcGFkZGluZzogMCAwLjRyZW07XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjVkODtcXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNTgpIDAgMnB4IDJweDtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTsgfVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcXG4gIC5ob3ctdG8tcGxheSB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwOyB9XFxuICAuaG93LXRvLXBsYXktY29udGFpbmVyMSB7XFxuICAgIHBhZGRpbmc6IG5vbmU7IH0gfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaG93LXRvLXBsYXkuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixvQkFBb0IsRUFBQTtFQVh0QjtJQWFJLGVBQWU7SUFDZixhQUFhLEVBQUE7RUFkakI7SUFpQkksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixTQUFTO0lBQ1QsYUFBYTtJQUNiLGVBQWU7SUFDZixlQUFlLEVBQUE7SUF0Qm5COztNQXlCTSxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLGdCQUFnQjtNQUNoQixnQkFBZ0I7TUFDaEIseUJBQW9DO01BQ3BDLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsMENBQTBDLEVBQUE7TUFoQ2hEOztRQWtDUSxhQUFhO1FBQ2Isa0JBQWtCLEVBQUE7TUFuQzFCOztRQXNDUSxjQUFjLEVBQUE7TUF0Q3RCOztRQXlDUSxrQkFBa0IsRUFBQTtNQXpDMUI7O1FBNENRLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIseUJBQXlCO1FBQ3pCLDBDQUEwQztRQUMxQyxZQUFZLEVBQUE7O0FBTXBCO0VBQ0U7SUFDRSxpQkFBaUIsRUFBQTtFQUVuQjtJQUNFLGFBQWEsRUFBQSxFQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5ob3ctdG8tcGxheSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHZoKTtcXHJcXG4gIHRyYW5zaXRpb246IDMwMG1zIGVhc2UtaW4tb3V0O1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHotaW5kZXg6IDk7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogNXJlbTtcXHJcXG4gICYuYWN0aXZlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcclxcbiAgICBvcGFjaXR5OiAxMDAlO1xcclxcbiAgfVxcclxcbiAgLmhvdy10by1wbGF5LWNvbnRhaW5lcjEge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgLnJ1bGVzLFxcclxcbiAgICAuY29udHJvbHMge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICBtYXgtd2lkdGg6IDI1cmVtO1xcclxcbiAgICAgIG1pbi13aWR0aDogMTByZW07XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUpO1xcclxcbiAgICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG4gICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTU4KSAwIDVweCA1cHg7XFxyXFxuICAgICAgaDIge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgcCB7XFxyXFxuICAgICAgICBtYXJnaW46IDAuNXJlbTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgbGkge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBiIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgMC40cmVtO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY1ZDg7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTU4KSAwIDJweCAycHg7XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcXHJcXG4gIC5ob3ctdG8tcGxheSB7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xcclxcbiAgfVxcclxcbiAgLmhvdy10by1wbGF5LWNvbnRhaW5lcjEge1xcclxcbiAgICBwYWRkaW5nOiBub25lO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIE94eWdlbixcXHIgVWJ1bnR1LCBDYW50YXJlbGwsIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgZ2FwOiAxcmVtO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuOyB9XFxuXFxuaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgei1pbmRleDogMTA7IH1cXG4gIGhlYWRlciBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuICAgIGhlYWRlciBhIGgyIHtcXG4gICAgICBtYXJnaW46IDAgMXJlbTtcXG4gICAgICBjb2xvcjogIzE4MjYzNjtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHotaW5kZXg6IDU7IH1cXG4gICAgICBoZWFkZXIgYSBoMjo6YWZ0ZXIge1xcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgaGVpZ2h0OiAzcHg7XFxuICAgICAgICBib3R0b206IDA7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICAgICAgbGVmdDogMXB4O1xcbiAgICAgICAgYmFja2dyb3VuZDogIzE4MjYzNjtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIHJpZ2h0O1xcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY1LCAwLjAxLCAwLjczLCAwLjMzKTsgfVxcbiAgICAgIGhlYWRlciBhIGgyOmhvdmVyOmFmdGVyIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIHJpZ2h0OyB9XFxuICBoZWFkZXIgLm1lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEuNXJlbTtcXG4gICAgbWFyZ2luOiAwIDFyZW07XFxuICAgIHotaW5kZXg6IDU7IH1cXG4gICAgaGVhZGVyIC5tZW51IHNwYW4ge1xcbiAgICAgIGNvbG9yOiAjMjczNTQ3ZTc7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgIGhlYWRlciAubWVudSAuaGVhZGVyLWJ0biB7XFxuICAgICAgY29sb3I6ICMxODI2MzY7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIHRyYW5zaXRpb246IDIwMG1zO1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIDAuMTFlbSAjMDAwO1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gICAgICBoZWFkZXIgLm1lbnUgLmhlYWRlci1idG46YWZ0ZXIge1xcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgICAgICAgaGVpZ2h0OiAycHg7XFxuICAgICAgICBib3R0b206IC0zcHg7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDhjO1xcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIHJpZ2h0O1xcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zIGVhc2Utb3V0OyB9XFxuICAgICAgaGVhZGVyIC5tZW51IC5oZWFkZXItYnRuOmhvdmVyOmFmdGVyIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7IH1cXG4gICAgICBoZWFkZXIgLm1lbnUgLmhlYWRlci1idG46aG92ZXIge1xcbiAgICAgICAgY29sb3I6ICMyZTJlMmU7IH1cXG5cXG4uY29udGVudCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHZ3KTtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiAzMDBtcyBlYXNlLWluLW91dDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDVyZW07XFxuICBtYXJnaW4tdG9wOiA2cmVtOyB9XFxuICAuY29udGVudC5hY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICAgIG9wYWNpdHk6IDEwMCU7IH1cXG5cXG4uY29udGFpbmVyMSxcXG4uY29udGFpbmVyMiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07IH1cXG4gIC5jb250YWluZXIxIGgzLFxcbiAgLmNvbnRhaW5lcjIgaDMge1xcbiAgICBjb2xvcjogIzI3MzU0N2U3O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbjogMDsgfVxcblxcbmZvb3RlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IDA7XFxuICBtaW4taGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICBmb290ZXIgYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbi1vdXQ7IH1cXG4gICAgZm9vdGVyIGE6aG92ZXIge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTsgfVxcbiAgZm9vdGVyIC5ib3R0b20td2F2ZXMge1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBsaW5lLWhlaWdodDogMDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTsgfVxcbiAgZm9vdGVyIC5ib3R0b20td2F2ZXMgc3ZnIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IGNhbGMoMjAwJSArIDEuM3B4KTtcXG4gICAgaGVpZ2h0OiA2NHB4O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTsgfVxcbiAgZm9vdGVyIC5ib3R0b20td2F2ZXMgLnNoYXBlLWZpbGwge1xcbiAgICBmaWxsOiAjYzFjN2QxOyB9XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xcbiAgYm9keSB7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxcbiAgLmNvbnRlbnQge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtOyB9XFxuICBmb290ZXIge1xcbiAgICBkaXNwbGF5OiBub25lOyB9IH1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA3OTBweCkge1xcbiAgYm9keSB7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxcbiAgZm9vdGVyIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfSB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UseUlBQzhEO0VBQzlELHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsV0FBVyxFQUFBO0VBTmI7SUFRSSxxQkFBcUIsRUFBQTtJQVJ6QjtNQVVNLGNBQWM7TUFDZCxjQUFjO01BQ2QsZUFBZTtNQUNmLGtCQUFrQjtNQUNsQixVQUFVLEVBQUE7TUFkaEI7UUFnQlEsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsV0FBVztRQUNYLFNBQVM7UUFDVCxtQkFBbUI7UUFDbkIsU0FBUztRQUNULG1CQUFtQjtRQUNuQixvQkFBb0I7UUFDcEIsOEJBQThCO1FBQzlCLGdFQUFnRSxFQUFBO01BMUJ4RTtRQTZCUSxvQkFBb0I7UUFDcEIsOEJBQThCLEVBQUE7RUE5QnRDO0lBbUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsY0FBYztJQUNkLFVBQVUsRUFBQTtJQXRDZDtNQXdDTSxnQkFBZ0I7TUFDaEIsZUFBZSxFQUFBO0lBekNyQjtNQTRDTSxjQUFjO01BQ2QscUJBQXFCO01BQ3JCLFVBQVU7TUFDVixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLFlBQVk7TUFDWixpQkFBaUI7TUFDakIsc0NBQXNDO01BQ3RDLHFCQUFxQjtNQUNyQixrQkFBa0IsRUFBQTtNQXJEeEI7UUF1RFEsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsb0JBQW9CO1FBQ3BCLFdBQVc7UUFDWCxZQUFZO1FBQ1osT0FBTztRQUNQLDJCQUEyQjtRQUMzQiw4QkFBOEI7UUFDOUIsb0NBQW9DLEVBQUE7TUFoRTVDO1FBbUVRLG9CQUFvQjtRQUNwQiw2QkFBNkIsRUFBQTtNQXBFckM7UUF1RVEsY0FBYyxFQUFBOztBQUt0QjtFQUNFLDZCQUE2QjtFQUM3QixVQUFVO0VBQ1YsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsU0FBUztFQUNULGdCQUFnQixFQUFBO0VBUGxCO0lBU0ksZUFBZTtJQUNmLGFBQWEsRUFBQTs7QUFJakI7O0VBRUUsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFNBQVMsRUFBQTtFQU5YOztJQVFJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsU0FBUyxFQUFBOztBQUliO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7RUFQckI7SUFTSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQix1Q0FBdUMsRUFBQTtJQVozQztNQWNNLDJCQUEyQixFQUFBO0VBZGpDO0lBa0JJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCx5QkFBeUIsRUFBQTtFQXpCN0I7SUE0Qkksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLDBCQUEwQixFQUFBO0VBaEM5QjtJQW1DSSxhQUFhLEVBQUE7O0FBSWpCO0VBQ0U7SUFDRSwyQkFBMkIsRUFBQTtFQUU3QjtJQUNFLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsVUFBVTtJQUNWLFNBQVM7SUFDVCxTQUFTO0lBQ1Qsb0JBQW9CLEVBQUE7RUFFdEI7SUFDRSxhQUFhLEVBQUEsRUFDZDs7QUFHSDtFQUNFO0lBQ0UsMkJBQTJCLEVBQUE7RUFFN0I7SUFDRSxhQUFhLEVBQUEsRUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgT3h5Z2VuLFxcclxcbiAgICBVYnVudHUsIENhbnRhcmVsbCwgXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIG1heC13aWR0aDogMTAwdnc7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDNyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbiAgYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgaDIge1xcclxcbiAgICAgIG1hcmdpbjogMCAxcmVtO1xcclxcbiAgICAgIGNvbG9yOiAjMTgyNjM2O1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgei1pbmRleDogNTtcXHJcXG4gICAgICAmOjphZnRlciB7XFxyXFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDNweDtcXHJcXG4gICAgICAgIGJvdHRvbTogMDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgICAgICBsZWZ0OiAxcHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAjMTgyNjM2O1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxyXFxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gcmlnaHQ7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjUsIDAuMDEsIDAuNzMsIDAuMzMpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAmOmhvdmVyOmFmdGVyIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcclxcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIHJpZ2h0O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgLm1lbnUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDEuNXJlbTtcXHJcXG4gICAgbWFyZ2luOiAwIDFyZW07XFxyXFxuICAgIHotaW5kZXg6IDU7XFxyXFxuICAgIHNwYW4ge1xcclxcbiAgICAgIGNvbG9yOiAjMjczNTQ3ZTc7XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxuICAgIC5oZWFkZXItYnRuIHtcXHJcXG4gICAgICBjb2xvcjogIzE4MjYzNjtcXHJcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogMjAwbXM7XFxyXFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgMC4xMWVtICMwMDA7XFxyXFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAmOmFmdGVyIHtcXHJcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXHJcXG4gICAgICAgIGhlaWdodDogMnB4O1xcclxcbiAgICAgICAgYm90dG9tOiAtM3B4O1xcclxcbiAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA4YztcXHJcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSByaWdodDtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLW91dDtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgJjpob3ZlcjphZnRlciB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIGNvbG9yOiAjMmUyZTJlO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG4uY29udGVudCB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHZ3KTtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICB0cmFuc2l0aW9uOiAzMDBtcyBlYXNlLWluLW91dDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBnYXA6IDVyZW07XFxyXFxuICBtYXJnaW4tdG9wOiA2cmVtO1xcclxcbiAgJi5hY3RpdmUge1xcclxcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxyXFxuICAgIG9wYWNpdHk6IDEwMCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIxLFxcclxcbi5jb250YWluZXIyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGgzIHtcXHJcXG4gICAgY29sb3I6ICMyNzM1NDdlNztcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBtaW4taGVpZ2h0OiAycmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgLmJvdHRvbS13YXZlcyB7XFxyXFxuICAgIHotaW5kZXg6IC0xO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAwO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcclxcbiAgfVxcclxcbiAgLmJvdHRvbS13YXZlcyBzdmcge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogY2FsYygyMDAlICsgMS4zcHgpO1xcclxcbiAgICBoZWlnaHQ6IDY0cHg7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xcclxcbiAgfVxcclxcbiAgLmJvdHRvbS13YXZlcyAuc2hhcGUtZmlsbCB7XFxyXFxuICAgIGZpbGw6ICNjMWM3ZDE7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcXHJcXG4gIGJvZHkge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICB9XFxyXFxuICAuY29udGVudCB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxyXFxuICB9XFxyXFxuICBmb290ZXIge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA3OTBweCkge1xcclxcbiAgYm9keSB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIH1cXHJcXG4gIGZvb3RlciB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi53aW4tc2NyZWVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDFhO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgei1pbmRleDogMTA7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTsgfVxcbiAgLndpbi1zY3JlZW4gLndpbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBwYWRkaW5nOiAzcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBtYXJnaW46IDFyZW07IH1cXG4gICAgLndpbi1zY3JlZW4gLndpbi1jb250YWluZXIgaDEge1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgIHRleHQtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjA1KSAwIDVweCA1cHg7IH1cXG4gICAgLndpbi1zY3JlZW4gLndpbi1jb250YWluZXIgYnV0dG9uIHtcXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgICAgcGFkZGluZzogMC41ZW0gMWVtO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY1ZDg7XFxuICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE3MSkgMCA1cHggNXB4O1xcbiAgICAgIHRyYW5zaXRpb246IDEwMG1zOyB9XFxuICAgICAgLndpbi1zY3JlZW4gLndpbi1jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTczZDQ7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpOyB9XFxuICAgICAgLndpbi1zY3JlZW4gLndpbi1jb250YWluZXIgYnV0dG9uOmFjdGl2ZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk3OWQ0O1xcbiAgICAgICAgdHJhbnNmb3JtOiBub25lOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy93aW4tc2NyZWVuLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGFBQWE7RUFDYixZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLDBCQUEwQixFQUFBO0VBVDVCO0lBV0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixZQUFZLEVBQUE7SUFuQmhCO01BcUJNLFNBQVM7TUFDVCxnQkFBZ0I7TUFDaEIsMkNBQTJDLEVBQUE7SUF2QmpEO01BMEJNLGlCQUFpQjtNQUNqQixrQkFBa0I7TUFDbEIsa0JBQWtCO01BQ2xCLG1CQUFtQjtNQUNuQixrQkFBa0I7TUFDbEIseUJBQXlCO01BQ3pCLFdBQVc7TUFDWCwwQ0FBMEM7TUFDMUMsaUJBQWlCLEVBQUE7TUFsQ3ZCO1FBb0NRLHlCQUF5QjtRQUN6QixzQkFBc0IsRUFBQTtNQXJDOUI7UUF3Q1EseUJBQXlCO1FBQ3pCLGVBQWUsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIud2luLXNjcmVlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAxYTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxyXFxuICAud2luLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDNyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAgIG1hcmdpbjogMXJlbTtcXHJcXG4gICAgaDEge1xcclxcbiAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICAgIHRleHQtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjA1KSAwIDVweCA1cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgYnV0dG9uIHtcXHJcXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgICAgcGFkZGluZzogMC41ZW0gMWVtO1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxyXFxuICAgICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY1ZDg7XFxyXFxuICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE3MSkgMCA1cHggNXB4O1xcclxcbiAgICAgIHRyYW5zaXRpb246IDEwMG1zO1xcclxcbiAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFlNzNkNDtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgICY6YWN0aXZlIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTc5ZDQ7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ib2FyZC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYm9hcmQuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZHJhZy1hbmQtZHJvcC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZHJhZy1hbmQtZHJvcC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob3ctdG8tcGxheS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG93LXRvLXBsYXkuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dpbi1zY3JlZW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dpbi1zY3JlZW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyByZW5kZXJBdHRhY2tQMiB9IGZyb20gXCIuL2RvbUZ1bmN0aW9uc1wiO1xyXG5cclxubGV0IHdhc0hpdCA9IGZhbHNlO1xyXG5sZXQgc3RhdHVzID0gZmFsc2U7XHJcbmxldCBsYXN0SGl0UG9zID0gW107XHJcbmxldCBmaXJzdEhpdFBvcyA9IFtdO1xyXG5sZXQgc2Vjb25kSGl0UG9zID0gW107XHJcbmxldCBzdXJyb3VuZGluZ1BvcyA9IFtdO1xyXG5sZXQgYXR0YWNrRGlyZWN0aW9uO1xyXG5cclxuZnVuY3Rpb24gc2V0V2FzSGl0KHZhbHVlLCBzdGF0LCBwb3MxLCBwb3MyKSB7XHJcbiAgd2FzSGl0ID0gdmFsdWU7XHJcbiAgaWYgKHN0YXQgIT09IHVuZGVmaW5lZCkgc3RhdHVzID0gc3RhdDtcclxuICBpZiAocG9zMSAhPT0gdW5kZWZpbmVkKSBsYXN0SGl0UG9zID0gW3BvczEsIHBvczJdO1xyXG4gIGlmIChmaXJzdEhpdFBvcy5sZW5ndGggPT0gMCAmJiBwb3MxICE9PSB1bmRlZmluZWQpIGZpcnN0SGl0UG9zID0gW3BvczEsIHBvczJdO1xyXG4gIGVsc2UgaWYgKFxyXG4gICAgZmlyc3RIaXRQb3MubGVuZ3RoICE9PSAwICYmXHJcbiAgICBzZWNvbmRIaXRQb3MubGVuZ3RoID09IDAgJiZcclxuICAgIHBvczEgIT09IHVuZGVmaW5lZFxyXG4gIClcclxuICAgIHNlY29uZEhpdFBvcyA9IFtwb3MxLCBwb3MyXTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0V2FzSGl0KCkge1xyXG4gIHJldHVybiBbd2FzSGl0LCBsYXN0SGl0UG9zLCBzdGF0dXNdO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZWdpc3RlclN1cnJvdW5kaW5nUG9zKHBvczEsIHBvczIpIHtcclxuICBzdXJyb3VuZGluZ1BvcyA9IFtdO1xyXG4gIGlmIChwb3MyICE9PSAwKSBzdXJyb3VuZGluZ1Bvcy5wdXNoKFtwb3MxLCBwb3MyIC0gMV0pO1xyXG4gIGlmIChwb3MyICE9PSA5KSBzdXJyb3VuZGluZ1Bvcy5wdXNoKFtwb3MxLCBwb3MyICsgMV0pO1xyXG4gIGlmIChwb3MxICE9PSAwKSBzdXJyb3VuZGluZ1Bvcy5wdXNoKFtwb3MxIC0gMSwgcG9zMl0pO1xyXG4gIGlmIChwb3MxICE9PSA5KSBzdXJyb3VuZGluZ1Bvcy5wdXNoKFtwb3MxICsgMSwgcG9zMl0pO1xyXG4gIHJldHVybiBzdXJyb3VuZGluZ1BvcztcclxufVxyXG5cclxuZnVuY3Rpb24gYWlQbGF5KHJlcGVhdCwgcDEsIHAyLCBpc1N1bmspIHtcclxuICBsZXQgcG9zLCBwb3MxLCBwb3MyO1xyXG4gIGlmIChpc1N1bmsgPT09IHRydWUpIHtcclxuICAgIGxhc3RIaXRQb3MgPSBbXTtcclxuICAgIGZpcnN0SGl0UG9zID0gW107XHJcbiAgICBzZWNvbmRIaXRQb3MgPSBbXTtcclxuICAgIHN1cnJvdW5kaW5nUG9zID0gW107XHJcbiAgICB3YXNIaXQgPSBmYWxzZTtcclxuICAgIHN0YXR1cyA9IGZhbHNlO1xyXG4gICAgYXR0YWNrRGlyZWN0aW9uID0gXCJcIjtcclxuICB9XHJcbiAgaWYgKCFzdGF0dXMgJiYgIXdhc0hpdCkge1xyXG4gICAgcG9zID0gcDEucmFuZG9tUG9zKCk7XHJcbiAgICByZXR1cm4gcmVuZGVyQXR0YWNrUDIocDEsIHAyLCBwb3NbMF0sIHBvc1sxXSk7XHJcbiAgfSBlbHNlIGlmIChzZWNvbmRIaXRQb3MubGVuZ3RoICE9PSAwICYmIHdhc0hpdCAmJiAhcmVwZWF0KSB7XHJcbiAgICBsZXQgbmV3UG9zO1xyXG4gICAgaWYgKGZpcnN0SGl0UG9zWzBdID09IHNlY29uZEhpdFBvc1swXSAtIDEpIG5ld1BvcyA9IGF0dGFja1Rvd2FyZHMoXCJkb3duXCIpO1xyXG4gICAgaWYgKGZpcnN0SGl0UG9zWzBdID09IHNlY29uZEhpdFBvc1swXSArIDEpIG5ld1BvcyA9IGF0dGFja1Rvd2FyZHMoXCJ1cFwiKTtcclxuICAgIGlmIChmaXJzdEhpdFBvc1sxXSA9PSBzZWNvbmRIaXRQb3NbMV0gLSAxKSBuZXdQb3MgPSBhdHRhY2tUb3dhcmRzKFwicmlnaHRcIik7XHJcbiAgICBpZiAoZmlyc3RIaXRQb3NbMV0gPT0gc2Vjb25kSGl0UG9zWzFdICsgMSkgbmV3UG9zID0gYXR0YWNrVG93YXJkcyhcImxlZnRcIik7XHJcbiAgICBpZiAobmV3UG9zWzBdID49IDAgJiYgbmV3UG9zWzBdIDw9IDkgJiYgbmV3UG9zWzFdID49IDAgJiYgbmV3UG9zWzFdIDw9IDkpXHJcbiAgICAgIHJldHVybiByZW5kZXJBdHRhY2tQMihwMSwgcDIsIG5ld1Bvc1swXSwgbmV3UG9zWzFdKTtcclxuICB9IGVsc2UgaWYgKHNlY29uZEhpdFBvcy5sZW5ndGggIT09IDAgJiYgc3RhdHVzICYmICF3YXNIaXQpIHtcclxuICAgIGxhc3RIaXRQb3MgPSBmaXJzdEhpdFBvcztcclxuICAgIHNlY29uZEhpdFBvcyA9IFtdO1xyXG4gICAgbGV0IG5ld1BvcztcclxuICAgIGlmIChhdHRhY2tEaXJlY3Rpb24gPT09IFwidXBcIikgbmV3UG9zID0gYXR0YWNrVG93YXJkcyhcImRvd25cIik7XHJcbiAgICBpZiAoYXR0YWNrRGlyZWN0aW9uID09PSBcImRvd25cIikgbmV3UG9zID0gYXR0YWNrVG93YXJkcyhcInVwXCIpO1xyXG4gICAgaWYgKGF0dGFja0RpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSBuZXdQb3MgPSBhdHRhY2tUb3dhcmRzKFwibGVmdFwiKTtcclxuICAgIGlmIChhdHRhY2tEaXJlY3Rpb24gPT09IFwibGVmdFwiKSBuZXdQb3MgPSBhdHRhY2tUb3dhcmRzKFwicmlnaHRcIik7XHJcbiAgICBpZiAobmV3UG9zWzBdID49IDAgJiYgbmV3UG9zWzBdIDw9IDkgJiYgbmV3UG9zWzFdID49IDAgJiYgbmV3UG9zWzFdIDw9IDkpXHJcbiAgICAgIHJldHVybiByZW5kZXJBdHRhY2tQMihwMSwgcDIsIG5ld1Bvc1swXSwgbmV3UG9zWzFdKTtcclxuICB9IGVsc2UgaWYgKHN0YXR1cykge1xyXG4gICAgaWYgKHN1cnJvdW5kaW5nUG9zLmxlbmd0aCA9PSAwKVxyXG4gICAgICByZWdpc3RlclN1cnJvdW5kaW5nUG9zKGxhc3RIaXRQb3NbMF0sIGxhc3RIaXRQb3NbMV0pO1xyXG4gICAgaWYgKHN1cnJvdW5kaW5nUG9zLmxlbmd0aCA9PSAwICYmIHN0YXR1cyA9PSB0cnVlKVxyXG4gICAgICByZWdpc3RlclN1cnJvdW5kaW5nUG9zKGZpcnN0SGl0UG9zWzBdLmZpcnN0SGl0UG9zWzFdKTtcclxuICAgIGxldCBuZXdQb3MgPSBzdXJyb3VuZGluZ1Bvcy5wb3AoKTtcclxuICAgIHJldHVybiByZW5kZXJBdHRhY2tQMihwMSwgcDIsIG5ld1Bvc1swXSwgbmV3UG9zWzFdKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIGdldCBwb3Mgb2YgYXR0YWNrIGJhc2VkIG9uIGRpcmVjdGlvblxyXG5mdW5jdGlvbiBhdHRhY2tUb3dhcmRzKGRpcikge1xyXG4gIGlmIChkaXIgPT09IFwibGVmdFwiKSB7XHJcbiAgICBhdHRhY2tEaXJlY3Rpb24gPSBcImxlZnRcIjtcclxuICAgIHJldHVybiBbbGFzdEhpdFBvc1swXSwgbGFzdEhpdFBvc1sxXSAtIDFdO1xyXG4gIH1cclxuICBpZiAoZGlyID09PSBcInJpZ2h0XCIpIHtcclxuICAgIGF0dGFja0RpcmVjdGlvbiA9IFwicmlnaHRcIjtcclxuICAgIHJldHVybiBbbGFzdEhpdFBvc1swXSwgbGFzdEhpdFBvc1sxXSArIDFdO1xyXG4gIH1cclxuICBpZiAoZGlyID09PSBcImRvd25cIikge1xyXG4gICAgYXR0YWNrRGlyZWN0aW9uID0gXCJkb3duXCI7XHJcbiAgICByZXR1cm4gW2xhc3RIaXRQb3NbMF0gKyAxLCBsYXN0SGl0UG9zWzFdXTtcclxuICB9XHJcbiAgaWYgKGRpciA9PT0gXCJ1cFwiKSB7XHJcbiAgICBhdHRhY2tEaXJlY3Rpb24gPSBcInVwXCI7XHJcbiAgICByZXR1cm4gW2xhc3RIaXRQb3NbMF0gLSAxLCBsYXN0SGl0UG9zWzFdXTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IGFpUGxheSwgZ2V0V2FzSGl0LCBzZXRXYXNIaXQsIGxhc3RIaXRQb3MsIHN1cnJvdW5kaW5nUG9zIH07XHJcbiIsImltcG9ydCB7IGluaXRHYW1lLCBwMSB9IGZyb20gXCIuL2dhbWVcIjtcclxuaW1wb3J0IHsgc2hpcERyYWcgfSBmcm9tIFwiLi9kcmFnLWFuZC1kcm9wXCI7XHJcbmltcG9ydCB7IGFpUGxheSwgc2V0V2FzSGl0IH0gZnJvbSBcIi4vYm90QUlcIjtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlckJvYXJkcyhwMSwgcDIpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcm93LmNsYXNzTGlzdC5hZGQoXCJyb3ctcDFcIik7XHJcbiAgICByb3cuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHAxLXJvdyR7aX1gKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9hcmQxXCIpLmFwcGVuZENoaWxkKHJvdyk7XHJcblxyXG4gICAgcDEuYm9hcmQuYm9hcmRbaV0uZm9yRWFjaCgoZSwgaikgPT4ge1xyXG4gICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGwtcDFcIik7XHJcbiAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHAxLXJvdyR7aX0tY2VsbCR7an1gKTtcclxuICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xyXG5cclxuICAgICAgLy8gZXZlbnQgbGlzdGVuZXIgZm9yIHAxIGNsaWNrcyBvbiBwMiBib2FyZFxyXG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmICghcDEudHVybi5nZXQoKSB8fCAhcDEuYm9hcmQuaXNTdGFydEFsbG93ZWQuZ2V0KCkpIHJldHVybjtcclxuICAgICAgICByZW5kZXJBdHRhY2tQMShlLCBpLCBqLCBwMSwgcDIpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcm93LmNsYXNzTGlzdC5hZGQoXCJyb3ctcDJcIik7XHJcbiAgICByb3cuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHAyLXJvdyR7aX1gKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9hcmQyXCIpLmFwcGVuZENoaWxkKHJvdyk7XHJcblxyXG4gICAgcDIuYm9hcmQuYm9hcmRbaV0uZm9yRWFjaCgoZSwgaikgPT4ge1xyXG4gICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGwtcDJcIik7XHJcbiAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHAyLXJvdyR7aX0tY2VsbCR7an1gKTtcclxuICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyByZXNldHMgdGhlIGJvYXJkXHJcbmZ1bmN0aW9uIHJlc2V0Qm9hcmRzKCkge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQtYnV0dG9uc1wiKS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcHNcIikuaW5uZXJIVE1MID0gXCJcIjtcclxuICBkb2N1bWVudFxyXG4gICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9hcmRcIilcclxuICAgIC5mb3JFYWNoKChib2FyZCkgPT4gKGJvYXJkLmlubmVySFRNTCA9IFwiXCIpKTtcclxuICBpbml0R2FtZSgpO1xyXG59XHJcblxyXG4vLyByZW5kZXIgYnV0dG9ucyBhbmQgYWRkIGV2ZW50IGxpc3RlbmVyc1xyXG5mdW5jdGlvbiByZW5kZXJCdXR0b25zKHBsYXllcikge1xyXG4gIGNvbnN0IGJvYXJkQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQtYnV0dG9uc1wiKTtcclxuICBjb25zdCBib2FyZDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvYXJkMVwiKTtcclxuICBjb25zdCBib2FyZDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvYXJkMlwiKTtcclxuXHJcbiAgYm9hcmRCdXR0b25zLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwibWFpbi1yYW5kb21cIj5SYW5kb20gYm9hcmQ8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwibWFpbi1yZXNldFwiPlJlc2V0IGJvYXJkPC9idXR0b24+XHJcbiAgICBgO1xyXG5cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tcmVzZXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIC8vIHByZXZlbnRzIGJ1ZyB3aGVuIGNsaWNraW5nIHJlc2V0IGR1cmluZyBlbmVteSdzIHR1cm5cclxuICAgIGlmICghcGxheWVyLnR1cm4uZ2V0KCkpIHJldHVybjtcclxuXHJcbiAgICAvLyByZXNldHMgYm9hcmQgYW5kIHNldHMgYmx1clxyXG4gICAgcmVzZXRCb2FyZHMocGxheWVyKTtcclxuICAgIGJvYXJkMS5jbGFzc0xpc3QuYWRkKFwibm90U3RhcnRlZFwiKTtcclxuICB9KTtcclxuXHJcbiAgLy8gY3JlYXRlcyBhIHJhbmRvbSBmbGVldCBmb3IgcDFcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tcmFuZG9tXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICByZXNldEJvYXJkcygpO1xyXG4gICAgcDEucmFuZG9tRmxlZXQoKTtcclxuICAgIHJlbmRlclBsYXllckZsZWV0KHAxKTtcclxuICAgIHAxLmJvYXJkLmlzU3RhcnRBbGxvd2VkLnNldCh0cnVlKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcHNcIikuaW5uZXJIVE1MID0gXCJcIjtcclxuICB9KTtcclxuXHJcbiAgYm9hcmQxLmlubmVySFRNTCArPSBgPGJ1dHRvbiBjbGFzcz1cIm1haW4tc3RhcnRcIj5TdGFydDwvYnV0dG9uPmA7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLXN0YXJ0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgLy8gcHJldmVudCBzdGFydGluZyB3aGVuIG5vdCBhbGwgc2hpcHMgYXJlIHBsYWNlZCBvbiB0aGUgYm9hcmRcclxuICAgIGlmIChwbGF5ZXIuYm9hcmQuaXNTdGFydEFsbG93ZWQuZ2V0KCkgPT09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgLy8gYmx1ciB0b2dnbGVzIGJlZm9yZSBhbmQgYWZ0ZXIgc3RhcnRcclxuICAgIGJvYXJkMS5jbGFzc0xpc3QucmVtb3ZlKFwibm90U3RhcnRlZFwiKTtcclxuICAgIHBsYXllci5ib2FyZC5oYXNTdGFydGVkLnNldCh0cnVlKTtcclxuXHJcbiAgICAvLyByZW1vdmVzIHN0YXJ0IGJ1dHRvbiB3aGVuIGdhbWUgc3RhcnRzXHJcbiAgICBib2FyZDEucmVtb3ZlQ2hpbGQoZS50YXJnZXQpO1xyXG4gICAgYm9hcmRCdXR0b25zLnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1yYW5kb21cIikpO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vLyByZW5kZXJzIHAxIGZsZWV0IG9uIGJvYXJkXHJcbmZ1bmN0aW9uIHJlbmRlclBsYXllckZsZWV0KHBsYXllcikge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2VsbC1wMlwiKS5mb3JFYWNoKChlLCBpKSA9PiB7XHJcbiAgICBsZXQgcG9zMSwgcG9zMjtcclxuICAgIGxldCBwb3MgPSBcIlwiICsgaTtcclxuXHJcbiAgICAvLyB0cmFuc2Zvcm0gaW5kZXggc3RyaW5nIHRvIGFycmF5IG9mIHBvczEgYW5kIHBvczJcclxuICAgIGlmIChpIDwgMTApIHtcclxuICAgICAgcG9zMSA9IDA7XHJcbiAgICAgIHBvczIgPSBpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcG9zID0gcG9zLnNwbGl0KFwiXCIpO1xyXG4gICAgICBwb3MxID0gcG9zWzBdO1xyXG4gICAgICBwb3MyID0gcG9zWzFdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghcGxheWVyLmJvYXJkLmJvYXJkW3BvczFdW3BvczJdKSByZXR1cm47XHJcbiAgICBpZiAocGxheWVyLmJvYXJkLmJvYXJkW3BvczFdW3BvczJdID09PSBcInJlc1wiKSBlLmNsYXNzTGlzdC5hZGQoXCJyZXNcIik7XHJcbiAgICBlbHNlIGUuY2xhc3NMaXN0LmFkZChcImZsZWV0XCIpO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vLyByZW5kZXJzIGF0dGFja3MgZm9yIHAxXHJcbmFzeW5jIGZ1bmN0aW9uIHJlbmRlckF0dGFja1AxKGUsIHBvczEsIHBvczIsIHAxLCBwMikge1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9hcmQxXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJjdXJyZW50LXR1cm5cIik7XHJcbiAgbGV0IGF0dGFjayA9IHAxLmF0dGFjayhwMiwgcG9zMSwgcG9zMik7XHJcbiAgaWYgKCFhdHRhY2spIHJldHVybjsgLy9hdHRhY2tpbmcgdGhlIHNhbWUgdGlsZSBkb2Vzbid0IHBhc3MgdHVyblxyXG4gIGlmIChhdHRhY2sgPT09IFwibWlzc1wiKSBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcclxuICBpZiAoYXR0YWNrID09PSBcImhpdFwiKSB7XHJcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xyXG4gICAgcDIuYm9hcmQuYm9hcmRbcG9zMV1bcG9zMl0uc2hpcC5kb21UYXJnZXRzLnB1c2goZS50YXJnZXQpO1xyXG5cclxuICAgIC8vYWRkcyBcInN1bmtcIiBjbGFzcyB0byBhbGwgdGlsZXMgb2Ygc3VuayBzaGlwXHJcbiAgICBpZiAocDIuYm9hcmQuYm9hcmRbcG9zMV1bcG9zMl0uc2hpcC5pc1N1bmsoKSlcclxuICAgICAgcDIuYm9hcmQuYm9hcmRbcG9zMV1bcG9zMl0uc2hpcC5kb21UYXJnZXRzLmZvckVhY2goKGUpID0+XHJcbiAgICAgICAgZS5jbGFzc0xpc3QuYWRkKFwic3Vua1wiKVxyXG4gICAgICApO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBwMi5pc1R1cm4ocDEpOyAvLyBzZXRzIHR1cm4gdG8gUDJcclxuXHJcbiAgYXdhaXQgZGVsYXkoNzAwKTtcclxuICAvLyBuZXh0IHBsYXllciBhdHRhY2sgb3Igc3RvcHMgZ2FtZSBpZiBhcmVBbGxTdW5rKClcclxuICByZXR1cm4gcDIuYm9hcmQuYXJlQWxsU3VuayhwMi5ib2FyZC5ib2FyZCkgPT09IHRydWVcclxuICAgID8gcmVuZGVyV2luKHAxKVxyXG4gICAgOiBhaVBsYXkoZmFsc2UsIHAxLCBwMik7XHJcbn1cclxuXHJcbi8vIHJlbmRlcnMgYXR0YWNrIGZvciBwMiAoQUkpXHJcbmFzeW5jIGZ1bmN0aW9uIHJlbmRlckF0dGFja1AyKHAxLCBwMiwgcG9zMSwgcG9zMikge1xyXG4gIGxldCBpc1N1bmsgPSBmYWxzZTtcclxuICBsZXQgZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwMi1yb3cke3BvczF9LWNlbGwke3BvczJ9YCk7XHJcbiAgbGV0IGF0dGFjayA9IHAyLmF0dGFjayhwMSwgcG9zMSwgcG9zMik7XHJcblxyXG4gIGlmICghYXR0YWNrKSB7XHJcbiAgICBsZXQgcmVwZWF0ID0gdHJ1ZTtcclxuICAgIGFpUGxheShyZXBlYXQsIHAxLCBwMik7XHJcbiAgfVxyXG4gIGlmIChhdHRhY2sgPT09IFwibWlzc1wiKSB7XHJcbiAgICBzZXRXYXNIaXQoZmFsc2UpO1xyXG4gICAgZS5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcclxuICB9XHJcbiAgaWYgKGF0dGFjayA9PT0gXCJoaXRcIikge1xyXG4gICAgc2V0V2FzSGl0KHRydWUsIHRydWUsIHBvczEsIHBvczIpO1xyXG4gICAgZS5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xyXG4gICAgcDEuYm9hcmQuYm9hcmRbcG9zMV1bcG9zMl0uc2hpcC5kb21UYXJnZXRzLnB1c2goZSk7XHJcbiAgICAvLyBpZiBzaGlwIGlzIHN1bmssIGFkZCBcInN1bmtcIiBjbGFzc1xyXG4gICAgaWYgKHAxLmJvYXJkLmJvYXJkW3BvczFdW3BvczJdLnNoaXAuaXNTdW5rKCkpIHtcclxuICAgICAgcDEuYm9hcmQuYm9hcmRbcG9zMV1bcG9zMl0uc2hpcC5kb21UYXJnZXRzLmZvckVhY2goKGUpID0+XHJcbiAgICAgICAgZS5jbGFzc0xpc3QuYWRkKFwic3Vua1wiKVxyXG4gICAgICApO1xyXG4gICAgICBpc1N1bmsgPSB0cnVlO1xyXG4gICAgICBpZiAocDEuYm9hcmQuYXJlQWxsU3VuayhwMS5ib2FyZC5ib2FyZCkgPT09IHRydWUpIHJldHVybiByZW5kZXJXaW4ocDIpO1xyXG4gICAgfVxyXG4gICAgYXdhaXQgZGVsYXkoMTAwMCk7XHJcbiAgICByZXR1cm4gYWlQbGF5KGZhbHNlLCBwMSwgcDIsIGlzU3Vuayk7XHJcbiAgfVxyXG5cclxuICBwMS5pc1R1cm4ocDIpOyAvLyBnaXZlcyB0dXJuIHRvIFAxXHJcbn1cclxuXHJcbi8vIHJlbmRlciB3aW4gc2NyZWVuXHJcbmZ1bmN0aW9uIHJlbmRlcldpbihwbGF5ZXIpIHtcclxuICBjb25zdCB3aW5TY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbi1zY3JlZW5cIik7XHJcbiAgY29uc3Qgd2luVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2luLXRleHRcIik7XHJcbiAgY29uc3QgcmVzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGFydFwiKTtcclxuXHJcbiAgd2luU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICB3aW5UZXh0LnRleHRDb250ZW50ID0gcGxheWVyLm5hbWUgKyBcIiB3b24gdGhlIGdhbWUhXCI7XHJcbiAgcmVzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgd2luU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIHJlc2V0Qm9hcmRzKCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIHJlbmRlcnMgaG93IHRvIHBsYXkgc2NyZWVuXHJcbmFzeW5jIGZ1bmN0aW9uIHJlbmRlckhvd1RvUGxheSgpIHtcclxuICBjb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xyXG4gIGNvbnN0IGhvd1RvUGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG93LXRvLXBsYXlcIik7XHJcbiAgaG9tZS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gIGF3YWl0IGRlbGF5KDE0MCk7XHJcbiAgaG9tZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgaG93VG9QbGF5LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICBhd2FpdCBkZWxheSgxNDApO1xyXG4gIGhvd1RvUGxheS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG5cclxuICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiI2hvdy10by1wbGF5XCI7XHJcbn1cclxuXHJcbi8vIHJlbmRlcnMgaG9tZSBzY3JlZW5cclxuYXN5bmMgZnVuY3Rpb24gcmVuZGVySG9tZSgpIHtcclxuICBjb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xyXG4gIGNvbnN0IGhvd1RvUGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG93LXRvLXBsYXlcIik7XHJcbiAgaG93VG9QbGF5LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgYXdhaXQgZGVsYXkoMTQwKTtcclxuXHJcbiAgaG93VG9QbGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICBob21lLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICBhd2FpdCBkZWxheSgxNDApO1xyXG5cclxuICBob21lLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcblxyXG4gIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIjaG9tZVwiO1xyXG59XHJcblxyXG4vLyByZW5kZXJzIGFib3V0IHNjcmVlblxyXG5mdW5jdGlvbiByZW5kZXJBYm91dCgpIHtcclxuICBjb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xyXG4gIGNvbnN0IGhvd1RvUGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG93LXRvLXBsYXlcIik7XHJcbiAgaG9tZS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgaG93VG9QbGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiI2hvbWVcIjtcclxufVxyXG5cclxuLy8gZXZlbnQgbGlzdGVuZXJzIGZvciBoZWFkZXIgYnRuXHJcbmZ1bmN0aW9uIGluaXRIZWFkZXJCdG4oKSB7XHJcbiAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZS1idG5cIik7XHJcbiAgY29uc3QgaG93VG9QbGF5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob3ctdG8tcGxheS1idG5cIik7XHJcbiAgbGV0IGhvbWVBY3RpdmUgPSB0cnVlO1xyXG4gIGxldCBob3dUb1BsYXlBY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgaG93VG9QbGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBpZiAoaG93VG9QbGF5QWN0aXZlKSByZXR1cm47XHJcbiAgICBob3dUb1BsYXlBY3RpdmUgPSB0cnVlO1xyXG4gICAgaG9tZUFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgcmVuZGVySG93VG9QbGF5KCk7XHJcbiAgfSk7XHJcbiAgaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgaWYgKGhvbWVBY3RpdmUpIHJldHVybjtcclxuICAgIGhvbWVBY3RpdmUgPSB0cnVlO1xyXG4gICAgaG93VG9QbGF5QWN0aXZlID0gZmFsc2U7XHJcbiAgICByZW5kZXJIb21lKCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIGNyZWF0ZXMgYSBkZWxheSB0byBiZSB1c2VkIGluIGFuIGFzeW5jIGZ1bmN0aW9uXHJcbmZ1bmN0aW9uIGRlbGF5KGRlbGF5SW5Ncykge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHJlc29sdmUoMik7XHJcbiAgICB9LCBkZWxheUluTXMpO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vLyByZW5kZXJzIHRoZSBkcmFnZ2FibGUgc2hpcHMgdW5kZXIgdGhlIGJvYXJkXHJcbmZ1bmN0aW9uIGNyZWF0ZURyYWdBbmREcm9wRmxlZXQocGxheWVyKSB7XHJcbiAgcmVuZGVyU2hpcFNlbGVjdGlvbigxLCAxKTtcclxuICByZW5kZXJTaGlwU2VsZWN0aW9uKDIsIDIpO1xyXG4gIHJlbmRlclNoaXBTZWxlY3Rpb24oMywgMyk7XHJcbiAgcmVuZGVyU2hpcFNlbGVjdGlvbig0LCA0KTtcclxuXHJcbiAgZnVuY3Rpb24gcmVuZGVyU2hpcFNlbGVjdGlvbihpLCBsZW5ndGgpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcHNcIik7XHJcbiAgICBjb25zdCBzaGlwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHNoaXBDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNoaXAtY29udGFpbmVyXCIpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBDb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IHNoaXBJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBzaGlwSW5mby5jbGFzc0xpc3QuYWRkKGBpbmZvLSR7aX1gKTtcclxuICAgIHNoaXBJbmZvLnRleHRDb250ZW50ID0gXCIyeFwiO1xyXG4gICAgc2hpcENvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwSW5mbyk7XHJcblxyXG4gICAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzaGlwLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xyXG4gICAgc2hpcC5jbGFzc0xpc3QuYWRkKGBzaGlwLSR7aX1gKTtcclxuICAgIHNoaXAuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIFwidHJ1ZVwiKTtcclxuICAgIHNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2hpcC1jZWxsXCIpO1xyXG4gICAgICBzaGlwLmFwcGVuZENoaWxkKGNlbGwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCA1OyBpKyspIHNoaXBEcmFnKHBsYXllciwgYC5zaGlwLSR7aX1gKTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICByZW5kZXJCb2FyZHMsXHJcbiAgcmVzZXRCb2FyZHMsXHJcbiAgcmVuZGVyUGxheWVyRmxlZXQsXHJcbiAgY3JlYXRlRHJhZ0FuZERyb3BGbGVldCxcclxuICByZW5kZXJCdXR0b25zLFxyXG4gIHJlbmRlckF0dGFja1AyLFxyXG4gIGluaXRIZWFkZXJCdG4sXHJcbn07XHJcbiIsImltcG9ydCB7IHJlbmRlclBsYXllckZsZWV0IH0gZnJvbSBcIi4vZG9tRnVuY3Rpb25zXCI7XHJcblxyXG5sZXQgdG90YWxBbW91bnRTaGlwcyA9IDA7XHJcbmZ1bmN0aW9uIHNoaXBEcmFnKHBsYXllciwgc2hpcE5hbWUpIHtcclxuICBsZXQgYW1vdW50TGVmdCA9IDI7XHJcbiAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2hpcE5hbWUpO1xyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2VsbC1wMlwiKTtcclxuICBjb25zdCBjaGlsZCA9IHNoaXAuY2hpbGROb2RlcztcclxuICBsZXQgZHJhZ1NlbGVjdGlvbjtcclxuICBsZXQgb2Zmc2V0O1xyXG4gIGxldCBkaXIgPSBcImhcIjtcclxuXHJcbiAgLy8gb2Zmc2V0IGZvciBzaGlwIHNlbGVjdGlvblxyXG4gIGlmIChjaGlsZFswXSkgY2hpbGRbMF0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4gKG9mZnNldCA9IDApKTtcclxuICBpZiAoY2hpbGRbMV0pIGNoaWxkWzFdLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IChvZmZzZXQgPSAtMSkpO1xyXG4gIGlmIChjaGlsZFsyXSkgY2hpbGRbMl0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4gKG9mZnNldCA9IC0yKSk7XHJcbiAgaWYgKGNoaWxkWzNdKSBjaGlsZFszXS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiAob2Zmc2V0ID0gLTMpKTtcclxuXHJcbiAgLy8gY2xpY2sgY2hhbmdlcyBzaGlwIGRpclxyXG4gIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiBjaGFuZ2VEaXIoZSkpO1xyXG5cclxuICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgKGUpID0+IHtcclxuICAgIC8vc2hvd3MgcG9zaXRpb24gcmVzZXJ2ZWRcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKylcclxuICAgICAgcGxheWVyLmJvYXJkLmJvYXJkW2ldLmZvckVhY2goKGUsIGopID0+IHtcclxuICAgICAgICBpZiAoZSA9PT0gXCJyZXNcIilcclxuICAgICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgIC5nZXRFbGVtZW50QnlJZChgcDItcm93JHtpfS1jZWxsJHtqfWApXHJcbiAgICAgICAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwibm90LWF2YWlsYWJsZVwiKTtcclxuICAgICAgfSk7XHJcbiAgfSk7XHJcbiAgc2hpcC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VuZFwiLCAoZSwgaSkgPT4ge1xyXG4gICAgLy8gcmVtb3ZlcyByZXNlcnZlZCBjZWxsIGRpc3BsYXlcclxuICAgIGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5vdC1hdmFpbGFibGVcIilcclxuICAgICAgLmZvckVhY2goKGUpID0+IGUuY2xhc3NMaXN0LnJlbW92ZShcIm5vdC1hdmFpbGFibGVcIikpO1xyXG5cclxuICAgIGlmIChkcmFnU2VsZWN0aW9uID09PSAtMSkgcmV0dXJuOyAvLyBwcmV2ZW50cyBvZmZzZXQgZXJyb3JcclxuICAgIGxldCBwb3MxO1xyXG4gICAgbGV0IHBvczI7XHJcbiAgICBsZXQgcG9zID0gXCJcIiArIGRyYWdTZWxlY3Rpb247XHJcblxyXG4gICAgLy8gdHJhbnNmb3JtIGluZGV4IHN0cmluZyB0byBhcnJheSBvZiBwb3MxIGFuZCBwb3MyXHJcbiAgICBpZiAoZHJhZ1NlbGVjdGlvbiA8IDEwKSB7XHJcbiAgICAgIHBvczEgPSAwO1xyXG4gICAgICBwb3MyID0gZHJhZ1NlbGVjdGlvbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBvcyA9IHBvcy5zcGxpdChcIlwiKTtcclxuICAgICAgcG9zMSA9IHBvc1swXSAqIDE7XHJcbiAgICAgIHBvczIgPSBwb3NbMV0gKiAxO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHBsYWNlIHNoaXBzIHdpdGggcHJvcGVyIG9mZnNldFxyXG4gICAgaWYgKGRpciA9PT0gXCJoXCIpIHBvczIgKz0gb2Zmc2V0O1xyXG4gICAgaWYgKGRpciA9PT0gXCJ2XCIpIHBvczEgKz0gb2Zmc2V0O1xyXG4gICAgaWYgKHBvczIgPCAwKSByZXR1cm47XHJcbiAgICBpZiAoc2hpcE5hbWUgPT09IFwiLnNoaXAtMVwiKVxyXG4gICAgICBpZiAocGxheWVyLmJvYXJkLnBsYWNlU2hpcChwb3MxLCBwb3MyLCAxLCBkaXIpID09PSBmYWxzZSkgcmV0dXJuO1xyXG4gICAgaWYgKHNoaXBOYW1lID09PSBcIi5zaGlwLTJcIilcclxuICAgICAgaWYgKHBsYXllci5ib2FyZC5wbGFjZVNoaXAocG9zMSwgcG9zMiwgMiwgZGlyKSA9PT0gZmFsc2UpIHJldHVybjtcclxuICAgIGlmIChzaGlwTmFtZSA9PT0gXCIuc2hpcC0zXCIpXHJcbiAgICAgIGlmIChwbGF5ZXIuYm9hcmQucGxhY2VTaGlwKHBvczEsIHBvczIsIDMsIGRpcikgPT09IGZhbHNlKSByZXR1cm47XHJcbiAgICBpZiAoc2hpcE5hbWUgPT09IFwiLnNoaXAtNFwiKVxyXG4gICAgICBpZiAocGxheWVyLmJvYXJkLnBsYWNlU2hpcChwb3MxLCBwb3MyLCA0LCBkaXIpID09PSBmYWxzZSkgcmV0dXJuO1xyXG4gICAgcmVuZGVyUGxheWVyRmxlZXQocGxheWVyKTsgLy8gcmVuZGVycyBmbGVldFxyXG5cclxuICAgIC8vcmVtb3ZlcyBzaGlwIGRpdiBhZnRlciAyIGhhdmUgYmVlbiBwbGFjZWRcclxuICAgIGFtb3VudExlZnQgLT0gMTtcclxuICAgIHRvdGFsQW1vdW50U2hpcHMrKztcclxuICAgIGlmICh0b3RhbEFtb3VudFNoaXBzID09PSA4KSBwbGF5ZXIuYm9hcmQuaXNTdGFydEFsbG93ZWQuc2V0KHRydWUpO1xyXG4gICAgc2hpcC5wYXJlbnROb2RlLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSBhbW91bnRMZWZ0ICsgXCJ4XCI7XHJcbiAgICBpZiAoYW1vdW50TGVmdCA9PT0gMCkgc2hpcC5wYXJlbnROb2RlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9KTtcclxuXHJcbiAgLy9ldmVudCBsaXN0ZW5lcnMgZm9yIGRyYWcgb24gY2VsbHNcclxuICBjZWxscy5mb3JFYWNoKChlLCBpKSA9PiB7XHJcbiAgICBlLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGRyYWdTZWxlY3Rpb24gPSBpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIHJlbW92ZXMgaW5kZXggaWYgZHJvcCBvdXRzaWRlIG9mIGNlbGxzXHJcbiAgYm9keS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VudGVyXCIsICgpID0+IHtcclxuICAgIGRyYWdTZWxlY3Rpb24gPSAtMTtcclxuICB9KTtcclxuXHJcbiAgLy9jaGFuZ2VzIGRpcmVjdGlvbiBvZiBzaGlwIG9uIGNsaWNrXHJcbiAgZnVuY3Rpb24gY2hhbmdlRGlyKGUpIHtcclxuICAgIGlmIChkaXIgPT09IFwiaFwiKSB7XHJcbiAgICAgIGRpciA9IFwidlwiO1xyXG4gICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC50b2dnbGUoXCJyb3RhdGVkXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGlyID0gXCJoXCI7XHJcbiAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LnRvZ2dsZShcInJvdGF0ZWRcIik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBzaGlwRHJhZywgdG90YWxBbW91bnRTaGlwcyB9O1xyXG4iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcclxuaW1wb3J0IHtcclxuICByZW5kZXJCb2FyZHMsXHJcbiAgY3JlYXRlRHJhZ0FuZERyb3BGbGVldCxcclxuICByZW5kZXJCdXR0b25zLFxyXG59IGZyb20gXCIuL2RvbUZ1bmN0aW9uc1wiO1xyXG5cclxubGV0IHAxLCBwMjsgLy8gbmVlZCBwMSBhbmQgcDIgdG8gYmUgZXhwb3J0ZWQgZm9yIGJ1dHRvbiBsaXN0ZW5lcnNcclxuXHJcbmZ1bmN0aW9uIGluaXRHYW1lKCkge1xyXG4gIHAxID0gUGxheWVyKFwiWW91XCIpO1xyXG4gIHAyID0gUGxheWVyKFwiRW5lbXlcIik7XHJcbiAgcDEuaXNUdXJuKHAyKTsgLy8gc2V0cyB0dXJuIHRvIHAxXHJcbiAgcDIucmFuZG9tRmxlZXQoKTsgLy8gcmFuZG9tIGZsZWV0IGZvciBwMlxyXG5cclxuICByZW5kZXJCdXR0b25zKHAxKTsgLy8gcmVuZGVycyBcInN0YXJ0XCIsIFwicmFuZG9tXCIgYW5kIFwicmVzZXRcIiBidXR0b25zXHJcbiAgcmVuZGVyQm9hcmRzKHAxLCBwMik7XHJcbiAgY3JlYXRlRHJhZ0FuZERyb3BGbGVldChwMSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGluaXRHYW1lLCBwMSwgcDIgfTtcclxuIiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcclxuXHJcbmxldCBHYW1lYm9hcmQgPSAoKSA9PiB7XHJcbiAgbGV0IGlzU3RhcnRBbGxvd2VkID0gZmFsc2U7XHJcbiAgbGV0IGhhc1N0YXJ0ZWQgPSBmYWxzZTtcclxuICBsZXQgYm9hcmQgPSBbXTtcclxuXHJcbiAgLy9pbml0aWFsaXplIGEgYm9hcmQgKHdoaWNoIHdvdWxkIGJlIGRpc3BsYXllZCBhcyAxMHgxMClcclxuICBsZXQgaW5pdCA9ICgoKSA9PiB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgYm9hcmRbaV0gPSBbXTtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgICAgYm9hcmRbaV0ucHVzaChmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KSgpO1xyXG5cclxuICAvLyBwbGFjZSBhIHNoaXAgb24gc3BlY2lmaWMgUE9TXHJcbiAgbGV0IHBsYWNlU2hpcCA9IChwb3MxLCBwb3MyLCBsZW5ndGgsIGRpcikgPT4ge1xyXG4gICAgaWYgKGJvYXJkW3BvczFdW3BvczJdKSByZXR1cm4gZmFsc2U7XHJcbiAgICBsZXQgc2hpcCA9IFNoaXAobGVuZ3RoKTtcclxuICAgIGxldCBzaGlwUG9zID0gMDtcclxuXHJcbiAgICBpZiAoZGlyID09PSBcImhcIikge1xyXG4gICAgICBpZiAocG9zMiArIHNoaXAubGVuZ3RoID4gMTApIHJldHVybiBmYWxzZTsgLy8gY2hlY2tzIGlmIGl0IG92ZXJmbG93c1xyXG5cclxuICAgICAgLy8gY2hlY2tzIGlmIHBvcyBpcyByZXNlcnZlZFxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGJvYXJkW3BvczFdW3BvczIgKyBpXSA9PT0gXCJyZXNcIikgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gcG9zMjsgaSA8IHBvczIgKyBzaGlwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgYm9hcmRbcG9zMV0uc3BsaWNlKGksIDEsIHsgc2hpcCwgc2hpcFBvcyB9KTtcclxuICAgICAgICByZXNlcnZlQXJvdW5kKHBvczEsIHBvczIgKyBzaGlwUG9zKTtcclxuICAgICAgICBzaGlwUG9zKys7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChkaXIgPT09IFwidlwiKSB7XHJcbiAgICAgIGlmIChwb3MxICsgc2hpcC5sZW5ndGggPiAxMCkgcmV0dXJuIGZhbHNlOyAvL2NoZWNrcyBpZiBpdCBvdmVyZmxvd3NcclxuXHJcbiAgICAgIC8vIGNoZWNrcyBpZiBwb3MgaXMgcmVzZXJ2ZWRcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChib2FyZFtwb3MxICsgaV1bcG9zMl0gPT09IFwicmVzXCIpIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IHBvczE7IGkgPCBwb3MxICsgc2hpcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGJvYXJkW2ldLnNwbGljZShwb3MyLCAxLCB7IHNoaXAsIHNoaXBQb3MgfSk7XHJcbiAgICAgICAgcmVzZXJ2ZUFyb3VuZChwb3MxICsgc2hpcFBvcywgcG9zMik7IC8vcmVzZXJ2ZSBwb3NcclxuICAgICAgICBzaGlwUG9zKys7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBtYWtlcyB0aWxlcyBhcm91bmQgc2hpcCBcInJlc2VydmVkXCJcclxuICBsZXQgcmVzZXJ2ZUFyb3VuZCA9IChwb3MxLCBwb3MyKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBjZWxsKG4xLCBuMikge1xyXG4gICAgICBpZiAocG9zMSArIG4xID4gOSB8fCBwb3MxICsgbjEgPCAwKSByZXR1cm47XHJcbiAgICAgIGlmIChib2FyZFtwb3MxICsgbjFdW3BvczIgKyBuMl0gPT09IGZhbHNlKVxyXG4gICAgICAgIGJvYXJkW3BvczEgKyBuMV1bcG9zMiArIG4yXSA9IFwicmVzXCI7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZXNlcnZlQ2VsbChyb3cpIHtcclxuICAgICAgY2VsbChyb3csIC0xKTtcclxuICAgICAgY2VsbChyb3csIDApO1xyXG4gICAgICBjZWxsKHJvdywgMSk7XHJcbiAgICB9XHJcbiAgICByZXNlcnZlQ2VsbCgtMSk7XHJcbiAgICByZXNlcnZlQ2VsbCgwKTtcclxuICAgIHJlc2VydmVDZWxsKDEpO1xyXG4gIH07XHJcblxyXG4gIC8vIGNhbGxzIHNoaXAuaGl0KCkgb24gc3BlY2lmaWMgUE9TLCByZXR1cm5zIFBPUyBpZiBzaGlwIG1pc3NlZFxyXG4gIGxldCByZWNlaXZlQXR0YWNrID0gKHBvczEsIHBvczIpID0+IHtcclxuICAgIGlmIChib2FyZFtwb3MxXVtwb3MyXSA9PT0gXCJtaXNzXCIpIHJldHVybiBmYWxzZTtcclxuICAgIGlmIChcclxuICAgICAgdHlwZW9mIGJvYXJkW3BvczFdW3BvczJdID09IFwib2JqZWN0XCIgJiZcclxuICAgICAgYm9hcmRbcG9zMV1bcG9zMl0uc2hpcC50aWxlc1tib2FyZFtwb3MxXVtwb3MyXS5zaGlwUG9zXSA9PT0gXCJoaXRcIlxyXG4gICAgKVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgaWYgKCFib2FyZFtwb3MxXVtwb3MyXSB8fCBib2FyZFtwb3MxXVtwb3MyXSA9PT0gXCJyZXNcIikge1xyXG4gICAgICBib2FyZFtwb3MxXVtwb3MyXSA9IFwibWlzc1wiO1xyXG4gICAgICByZXR1cm4gYm9hcmRbcG9zMV1bcG9zMl07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBib2FyZFtwb3MxXVtwb3MyXS5zaGlwLmhpdChib2FyZFtwb3MxXVtwb3MyXS5zaGlwUG9zKTtcclxuICAgICAgcmV0dXJuIGJvYXJkW3BvczFdW3BvczJdLnNoaXAudGlsZXNbYm9hcmRbcG9zMV1bcG9zMl0uc2hpcFBvc107XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gY2FsbHMgU2hpcC5pc1N1bmsgdG8gcmV0dXJuIGlmIHNoaXAgYXQgcG9zIGlzIHN1bmtcclxuICBsZXQgaXNTdW5rID0gKHBvczEsIHBvczIpID0+IHtcclxuICAgIHJldHVybiBib2FyZFtwb3MxXVtwb3MyXS5zaGlwLmlzU3VuaygpID09PSB0cnVlID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH07XHJcblxyXG4gIC8vIHJldHVybnMgdHJ1ZSBpZiBhbGwgc2hpcHMgb24gdGhlIGJvYXJkIHN1bmtcclxuICBsZXQgYXJlQWxsU3VuayA9IChib2FyZCkgPT4ge1xyXG4gICAgbGV0IG5vdFN1bmsgPSBmYWxzZTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKylcclxuICAgICAgYm9hcmRbaV0uZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgIGlmICghZSB8fCBlID09PSBcIm1pc3NcIiB8fCBlID09PSBcInJlc1wiKSByZXR1cm47XHJcbiAgICAgICAgaWYgKGUuc2hpcC5pc1N1bmsoKSA9PT0gZmFsc2UpIG5vdFN1bmsgPSB0cnVlO1xyXG4gICAgICB9KTtcclxuICAgIHJldHVybiBub3RTdW5rID09PSB0cnVlID8gZmFsc2UgOiB0cnVlO1xyXG4gIH07XHJcbiAgcmV0dXJuIHtcclxuICAgIGJvYXJkLFxyXG4gICAgcGxhY2VTaGlwLFxyXG4gICAgcmVjZWl2ZUF0dGFjayxcclxuICAgIGlzU3VuayxcclxuICAgIGFyZUFsbFN1bmssXHJcbiAgICBpc1N0YXJ0QWxsb3dlZDoge1xyXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gaXNTdGFydEFsbG93ZWQ7XHJcbiAgICAgIH0sXHJcbiAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgaXNTdGFydEFsbG93ZWQgPSB2YWx1ZTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBoYXNTdGFydGVkOiB7XHJcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBoYXNTdGFydGVkO1xyXG4gICAgICB9LFxyXG4gICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIGhhc1N0YXJ0ZWQgPSB2YWx1ZTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCB7IEdhbWVib2FyZCB9O1xyXG4iLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcclxuXHJcbmNvbnN0IFBsYXllciA9IChuKSA9PiB7XHJcbiAgY29uc3QgbmFtZSA9IG47XHJcbiAgbGV0IGJvYXJkID0gR2FtZWJvYXJkKCk7XHJcbiAgbGV0IHR1cm4gPSBmYWxzZTtcclxuXHJcbiAgLy8gc2V0cyBwbGF5ZXIgdHVybiBhbmQgcmVtb3ZlcyBlbmVteSdzIHR1cm5cclxuICBsZXQgaXNUdXJuID0gKGVuZW15KSA9PiB7XHJcbiAgICB0dXJuID0gdHJ1ZTtcclxuICAgIGVuZW15LnR1cm4uc2V0KGZhbHNlKTtcclxuICB9O1xyXG4gIC8vIGNhbGxzIGFuIGF0dGFjayBvbiB0YXJnZXRcclxuICBsZXQgYXR0YWNrID0gKHBsYXllciwgcG9zMSwgcG9zMikgPT4ge1xyXG4gICAgcmV0dXJuIHBsYXllci5ib2FyZC5yZWNlaXZlQXR0YWNrKHBvczEsIHBvczIpO1xyXG4gIH07XHJcbiAgLy8gY2FsbHMgYW4gcmFuZG9tIGF0dGFjayBvbiB0YXJnZXRcclxuICBsZXQgcmFuZG9tUG9zID0gKCkgPT4ge1xyXG4gICAgbGV0IHBvczEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICBsZXQgcG9zMiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgIHJldHVybiBbcG9zMSwgcG9zMl07XHJcbiAgfTtcclxuICAvLyBjcmVhdGVzIGEgc2hpcCB3aXRoIHJhbmRvbSBwb3MgYW5kIG9yaWVudGF0aW9uXHJcbiAgbGV0IHJhbmRvbVNoaXAgPSAobGVuZ3RoKSA9PiB7XHJcbiAgICBsZXQgcG9zMSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgIGxldCBwb3MyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgbGV0IGRpciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XHJcblxyXG4gICAgaWYgKGRpciA9PT0gMCkge1xyXG4gICAgICBkaXIgPSBcImhcIjtcclxuICAgICAgaWYgKGJvYXJkLnBsYWNlU2hpcChwb3MxLCBwb3MyLCBsZW5ndGgsIGRpcikgPT0gZmFsc2UpIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGlyID09PSAxKSB7XHJcbiAgICAgIGRpciA9IFwidlwiO1xyXG4gICAgICBpZiAoYm9hcmQucGxhY2VTaGlwKHBvczEsIHBvczIsIGxlbmd0aCwgZGlyKSA9PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgLy9jcmVhdGVzIGEgcmFuZG9tIGZsZWV0IG9mIDggc2hpcHNcclxuICBsZXQgcmFuZG9tRmxlZXQgPSAoKSA9PiB7XHJcbiAgICAvLyBjcmVhdGUgMiBzaGlwcyBvZiBsZW5ndGggMVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyApIHtcclxuICAgICAgaWYgKHJhbmRvbVNoaXAoMSkgPT0gZmFsc2UpIGNvbnRpbnVlO1xyXG4gICAgICBpKys7XHJcbiAgICB9XHJcbiAgICAvLyBjcmVhdGUgMiBzaGlwcyBvZiBsZW5ndGggMlxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyApIHtcclxuICAgICAgaWYgKHJhbmRvbVNoaXAoMikgPT0gZmFsc2UpIGNvbnRpbnVlO1xyXG4gICAgICBpKys7XHJcbiAgICB9XHJcbiAgICAvLyBjcmVhdGUgMiBzaGlwcyBvZiBsZW5ndGggM1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyApIHtcclxuICAgICAgaWYgKHJhbmRvbVNoaXAoMykgPT0gZmFsc2UpIGNvbnRpbnVlO1xyXG4gICAgICBpKys7XHJcbiAgICB9XHJcbiAgICAvLyBjcmVhdGUgMSBzaGlwIG9mIGxlbmd0aCA0XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7ICkge1xyXG4gICAgICBpZiAocmFuZG9tU2hpcCg0KSA9PSBmYWxzZSkgY29udGludWU7XHJcbiAgICAgIGkrKztcclxuICAgIH1cclxuICAgIGJvYXJkLmlzU3RhcnRBbGxvd2VkLnNldCh0cnVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbmFtZSxcclxuICAgIGJvYXJkLFxyXG4gICAgYXR0YWNrLFxyXG4gICAgcmFuZG9tRmxlZXQsXHJcbiAgICByYW5kb21Qb3MsXHJcbiAgICB0dXJuOiB7XHJcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0dXJuO1xyXG4gICAgICB9LFxyXG4gICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIHR1cm4gPSB2YWx1ZTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBpc1R1cm4sXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCB7IFBsYXllciB9O1xyXG4iLCJsZXQgU2hpcCA9IChsKSA9PiB7XHJcbiAgLy9wcm9wZXJ0aWVzXHJcbiAgY29uc3QgbGVuZ3RoID0gbDtcclxuICBsZXQgdGlsZXMgPSBbLi4uQXJyYXkobCkua2V5cygpXTtcclxuICBsZXQgZG9tVGFyZ2V0cyA9IFtdO1xyXG5cclxuICAvLyByZXBsYWNlIGhpdCBwb3MgYnkgXCJoaXRcIlxyXG4gIGxldCBoaXQgPSAocG9zKSA9PiB7XHJcbiAgICBpZiAodGlsZXNbcG9zXSA9PSBcImhpdFwiKSByZXR1cm4gZmFsc2U7XHJcbiAgICB0aWxlcy5zcGxpY2UocG9zLCAxLCBcImhpdFwiKTtcclxuICB9O1xyXG4gIC8vIGNoZWNrcyBpZiBzaGlwIGlzIHN1bmtcclxuICBsZXQgaXNTdW5rID0gKCkgPT4ge1xyXG4gICAgbGV0IHN0aWxsQWxpdmUgPSBmYWxzZTtcclxuICAgIHRpbGVzLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgaWYgKGUgIT09IFwiaGl0XCIpIHN0aWxsQWxpdmUgPSB0cnVlO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gc3RpbGxBbGl2ZSA9PT0gdHJ1ZSA/IGZhbHNlIDogdHJ1ZTtcclxuICB9O1xyXG5cclxuICByZXR1cm4geyB0aWxlcywgbGVuZ3RoLCBoaXQsIGlzU3VuaywgZG9tVGFyZ2V0cyB9O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgU2hpcCB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XHJcbmltcG9ydCBcIi4vc3R5bGVzL2JvYXJkLnNjc3NcIjtcclxuaW1wb3J0IFwiLi9zdHlsZXMvd2luLXNjcmVlbi5zY3NzXCI7XHJcbmltcG9ydCBcIi4vc3R5bGVzL2hvdy10by1wbGF5LnNjc3NcIjtcclxuaW1wb3J0IFwiLi9zdHlsZXMvZHJhZy1hbmQtZHJvcC5zY3NzXCI7XHJcbmltcG9ydCB7IGluaXRHYW1lIH0gZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCI7XHJcbmltcG9ydCB7IGluaXRIZWFkZXJCdG4gfSBmcm9tIFwiLi9zY3JpcHRzL2RvbUZ1bmN0aW9uc1wiO1xyXG5cclxuaW5pdEhlYWRlckJ0bigpO1xyXG5pbml0R2FtZSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=