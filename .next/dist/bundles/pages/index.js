module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_app__ = __webpack_require__("./src/app.tsx");
var _jsxFileName = "/Users/superMacBook4/Desktop/_development/pauliescanlon-io-2018/pages/index.tsx";


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__src_app__["a" /* App */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  });
});

/***/ }),

/***/ "./src/app.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globalStyles__ = __webpack_require__("./src/globalStyles.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles__ = __webpack_require__("./src/styles.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_theme__ = __webpack_require__("./src/styles/theme/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__containers_fetcher__ = __webpack_require__("./src/containers/fetcher/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__containers_user__ = __webpack_require__("./src/containers/user/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__containers_post__ = __webpack_require__("./src/containers/post/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_data_reducers__ = __webpack_require__("./src/utils/data-reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_emotion_theming__ = __webpack_require__("emotion-theming");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_emotion_theming___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_emotion_theming__);
var _jsxFileName = "/Users/superMacBook4/Desktop/_development/pauliescanlon-io-2018/src/app.tsx";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










var App = function App() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__styles__["a" /* AppWrapper */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "About")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__styles__["c" /* FullWidth */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_emotion_theming__["ThemeProvider"], {
    theme: __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* theme */],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__containers_fetcher__["a" /* Fetcher */], {
    endPoint: "users",
    dataReducer: __WEBPACK_IMPORTED_MODULE_8__utils_data_reducers__["c" /* usersHandler */],
    renderComponent: function renderComponent(data) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__containers_user__["a" /* User */], _extends({}, data, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__styles__["b" /* ContainedWidth */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_emotion_theming__["ThemeProvider"], {
    theme: __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* theme */],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__containers_fetcher__["a" /* Fetcher */], {
    endPoint: "posts",
    dataReducer: __WEBPACK_IMPORTED_MODULE_8__utils_data_reducers__["a" /* postsHandler */],
    renderComponent: function renderComponent(data) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__containers_post__["a" /* Post */], _extends({}, data, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }))));
};

/***/ }),

/***/ "./src/components/btn/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_emotion__ = __webpack_require__("react-emotion");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_emotion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_emotion__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polished__ = __webpack_require__("polished");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polished___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_polished__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_typography__ = __webpack_require__("./src/styles/typography/index.ts");



var Button =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()("button", {
  target: "ev13vne0"
})({
  label: 'button',
  borderRadius: '28px',
  fontFamily: __WEBPACK_IMPORTED_MODULE_2__styles_typography__["d" /* font */].fontFamily,
  fontSize: '20px',
  cursor: 'pointer',
  padding: '10px 20px 10px 20px',
  textDecoration: 'none',
  border: 'none',
  margin: "2rem 0",
  minWidth: 100,
  transition: 'all 0.2s linear 0s'
}, function (_ref) {
  var buttonColour = _ref.buttonColour,
      fontColour = _ref.fontColour;
  return {
    backgroundColor: buttonColour,
    color: fontColour,
    '&:hover': {
      background: Object(__WEBPACK_IMPORTED_MODULE_1_polished__["lighten"])(0.1, "".concat(buttonColour)),
      textDecoration: 'none'
    }
  };
});

/***/ }),

/***/ "./src/components/card/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Card; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles__ = __webpack_require__("./src/components/card/styles.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_typography__ = __webpack_require__("./src/styles/typography/index.ts");
var _jsxFileName = "/Users/superMacBook4/Desktop/_development/pauliescanlon-io-2018/src/components/card/index.tsx";




var Card = function Card(postData) {
  var customExcerpt = postData.customExcerpt,
      id = postData.id,
      title = postData.title;
  return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__styles__["a" /* CardWrapper */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__styles_typography__["b" /* H3 */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, title), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__styles_typography__["c" /* P */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, customExcerpt), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/asd?".concat(id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, id)));
};

/***/ }),

/***/ "./src/components/card/styles.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardWrapper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_emotion__ = __webpack_require__("react-emotion");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_emotion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_emotion__);

var CardWrapper =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()("div", {
  target: "eatwem80"
})({
  label: 'card-wrapper'
});

/***/ }),

/***/ "./src/components/error/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/superMacBook4/Desktop/_development/pauliescanlon-io-2018/src/components/error/index.tsx";

var Error = function Error() {
  return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, "Error :-(");
};

/***/ }),

/***/ "./src/components/flex-grid/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlexGrid; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles__ = __webpack_require__("./src/components/flex-grid/styles.ts");
var _jsxFileName = "/Users/superMacBook4/Desktop/_development/pauliescanlon-io-2018/src/components/flex-grid/index.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var FlexGrid =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FlexGrid, _React$Component);

  function FlexGrid() {
    _classCallCheck(this, FlexGrid);

    return _possibleConstructorReturn(this, (FlexGrid.__proto__ || Object.getPrototypeOf(FlexGrid)).apply(this, arguments));
  }

  _createClass(FlexGrid, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          cols = _props.cols,
          renderContent = _props.renderContent,
          dataArray = _props.dataArray;
      var items = dataArray.map(function (dataItem, i) {
        var props = _objectSpread({}, dataItem);

        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__styles__["b" /* FlexItem */], {
          key: i,
          xs: cols.xs,
          sm: cols.sm,
          md: cols.md,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        }, renderContent(props));
      });
      return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__styles__["a" /* FlexContainer */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, items);
    }
  }]);

  return FlexGrid;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),

/***/ "./src/components/flex-grid/styles.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlexContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FlexItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_emotion__ = __webpack_require__("react-emotion");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_emotion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_emotion__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_breakpoints__ = __webpack_require__("./src/styles/breakpoints/index.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import { IPx } from '../../styles/breakpoints';


var FlexContainer =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()("div", {
  target: "e1cw9dem0"
})({
  label: 'flex-container',
  display: 'flex',
  flexWrap: 'wrap'
});
var FlexItem =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()("div", {
  target: "e1cw9dem1"
})({
  label: 'flex-item',
  position: 'relative',
  boxSizing: 'border-box',
  border: '1px solid grey',
  width: '100%'
}, function (_ref) {
  var _ref2;

  var xs = _ref.xs,
      sm = _ref.sm,
      md = _ref.md;
  return _ref2 = {}, _defineProperty(_ref2, __WEBPACK_IMPORTED_MODULE_1__styles_breakpoints__["a" /* mq */][0], {
    border: '1px solid red',
    width: "calc(".concat(100 / xs, "% - ", 0, "px)")
  }), _defineProperty(_ref2, __WEBPACK_IMPORTED_MODULE_1__styles_breakpoints__["a" /* mq */][1], {
    border: '1px solid blue',
    width: "calc(".concat(100 / sm, "% - ", 0, "px)")
  }), _defineProperty(_ref2, __WEBPACK_IMPORTED_MODULE_1__styles_breakpoints__["a" /* mq */][2], {
    border: '1px solid yellow',
    width: "calc(".concat(100 / md, "% - ", 0, "px)")
  }), _ref2;
});

/***/ }),

/***/ "./src/components/loading/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Loading; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/superMacBook4/Desktop/_development/pauliescanlon-io-2018/src/components/loading/index.tsx";

var Loading = function Loading() {
  return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, "Loading...");
};

/***/ }),

/***/ "./src/containers/fetcher/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fetcher; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_loading__ = __webpack_require__("./src/components/loading/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_error__ = __webpack_require__("./src/components/error/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_fetch__ = __webpack_require__("./src/utils/fetch.ts");
var _jsxFileName = "/Users/superMacBook4/Desktop/_development/pauliescanlon-io-2018/src/containers/fetcher/index.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Fetcher =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Fetcher, _React$Component);

  function Fetcher(props) {
    var _this;

    _classCallCheck(this, Fetcher);

    _this = _possibleConstructorReturn(this, (Fetcher.__proto__ || Object.getPrototypeOf(Fetcher)).call(this, props));
    _this.state = {
      isLoading: true,
      data: null,
      hasErrored: false
    };
    return _this;
  }

  _createClass(Fetcher, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var dataFetch = __WEBPACK_IMPORTED_MODULE_3__utils_fetch__["a" /* fetchType */][this.props.endPoint]();
      dataFetch.then(function (res) {
        _this2.setState({
          isLoading: res.isLoading,
          data: res.data ? _this2.props.dataReducer(res.data) : null,
          hasErrored: res.hasErrored
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          isLoading = _state.isLoading,
          data = _state.data,
          hasErrored = _state.hasErrored;
      var renderComponent = this.props.renderComponent;

      if (isLoading) {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__components_loading__["a" /* Loading */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        });
      }

      return hasErrored ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__components_error__["a" /* Error */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }) : renderComponent(data);
    }
  }]);

  return Fetcher;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),

/***/ "./src/containers/post/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles__ = __webpack_require__("./src/containers/post/styles.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_flex_grid__ = __webpack_require__("./src/components/flex-grid/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_card__ = __webpack_require__("./src/components/card/index.tsx");
var _jsxFileName = "/Users/superMacBook4/Desktop/_development/pauliescanlon-io-2018/src/containers/post/index.tsx";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var Post = function Post(props) {
  var posts = Object.values(props).map(function (post) {
    return post;
  });
  return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__styles__["a" /* PostWrapper */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__components_flex_grid__["a" /* FlexGrid */], {
    dataArray: posts,
    cols: {
      xs: 2,
      sm: 3,
      md: 4
    },
    renderContent: function renderContent(props) {
      return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__components_card__["a" /* Card */], _extends({}, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }));
};

/***/ }),

/***/ "./src/containers/post/styles.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostWrapper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_emotion__ = __webpack_require__("react-emotion");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_emotion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_emotion__);

var PostWrapper =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()("div", {
  target: "e1gnkykk0"
})({
  label: 'post-wrapper'
});

/***/ }),

/***/ "./src/containers/user/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles__ = __webpack_require__("./src/containers/user/styles.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_btn__ = __webpack_require__("./src/components/btn/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_typography__ = __webpack_require__("./src/styles/typography/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_theme__ = __webpack_require__("./src/styles/theme/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_breakpoints__ = __webpack_require__("./src/styles/breakpoints/index.ts");
var _jsxFileName = "/Users/superMacBook4/Desktop/_development/pauliescanlon-io-2018/src/containers/user/index.tsx";






var User = function User(props) {
  // export const User: React.SFC<IUserData> = props => {
  var bio = props.bio,
      coverImage = props.coverImage,
      name = props.name,
      profileImage = props.profileImage;
  return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__styles__["c" /* UserWrapper */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__styles__["a" /* UserDetails */], {
    backgroundSrc: "".concat(process && process.env && process.env.GHOST_CMS || "http://138.68.162.135").concat(coverImage),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__styles__["b" /* UserProfile */], {
    src: "".concat(process && process.env && process.env.GHOST_CMS || "http://138.68.162.135").concat(profileImage),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__styles_typography__["a" /* H2 */], {
    fontColour: __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* theme */].white,
    fontAlign: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, name), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__styles_typography__["c" /* P */], {
    maxWidth: __WEBPACK_IMPORTED_MODULE_5__styles_breakpoints__["b" /* px */].sm,
    fontColour: __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* theme */].white,
    fontAlign: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, bio), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__components_btn__["a" /* Button */], {
    buttonColour: __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* theme */].pink,
    fontColour: __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* theme */].white,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "CV")));
};

/***/ }),

/***/ "./src/containers/user/styles.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UserWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserProfile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_emotion__ = __webpack_require__("react-emotion");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_emotion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_emotion__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_theme__ = __webpack_require__("./src/styles/theme/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_common__ = __webpack_require__("./src/styles/common.ts");



var UserWrapper =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()("div", {
  target: "ejpu0hx0"
})({
  label: 'user-wrapper',
  position: 'relative',
  width: '100%',
  height: '100%'
});
var UserDetails =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()("div", {
  target: "ejpu0hx1"
})({
  label: 'user-details',
  minHeight: 300,
  textAlign: 'center',
  padding: __WEBPACK_IMPORTED_MODULE_2__styles_common__["a" /* common */].padding,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  '& h2': {
    marginTop: '1rem'
  }
}, function (_ref) {
  var backgroundSrc = _ref.backgroundSrc;
  return {
    backgroundImage: "url(".concat(backgroundSrc, ")")
  };
});
var UserProfile =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()("img", {
  target: "ejpu0hx2"
})({
  label: 'user-profile',
  width: 100,
  height: 'auto',
  marginTop: '3rem',
  borderRadius: '50%',
  boxSizing: 'border-box',
  border: "3px solid ".concat(__WEBPACK_IMPORTED_MODULE_1__styles_theme__["a" /* theme */].white)
});

/***/ }),

/***/ "./src/globalStyles.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_emotion__ = __webpack_require__("react-emotion");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_emotion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_emotion__);

Object(__WEBPACK_IMPORTED_MODULE_0_react_emotion__["injectGlobal"])("html,body,#root{width:100%;min-width:320px;height:100%;padding:0;margin:0;}");

/***/ }),

/***/ "./src/styles.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FullWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ContainedWidth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_emotion__ = __webpack_require__("react-emotion");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_emotion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_emotion__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_styles_breakpoints__ = __webpack_require__("./src/styles/breakpoints/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_common__ = __webpack_require__("./src/styles/common.ts");



var AppWrapper =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()("div", {
  target: "e1v25kk20"
})({
  label: 'app'
});
var FullWidth =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()("div", {
  target: "e1v25kk21"
})({
  label: 'full-width',
  width: '100%'
});
var ContainedWidth =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()("div", {
  target: "e1v25kk22"
})({
  label: 'contained-width',
  margin: '0 auto',
  padding: "0px ".concat(__WEBPACK_IMPORTED_MODULE_2__styles_common__["a" /* common */].padding, "px 0px ").concat(__WEBPACK_IMPORTED_MODULE_2__styles_common__["a" /* common */].padding, "px"),
  maxWidth: "".concat(__WEBPACK_IMPORTED_MODULE_1__src_styles_breakpoints__["b" /* px */].lg)
});

/***/ }),

/***/ "./src/styles/breakpoints/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return px; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mq; });
//Bootstrap:
// xs < 576
// sm > 576 < md 768
// md > 768 < 992
// lg > 992 < 1200
var px = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200
};
var breakpoints = [px.xs, px.sm, px.md, px.lg];
var mq = breakpoints.map(function (bp) {
  return "@media (min-width: ".concat(bp, "px)");
}); // useage
// const aDiv = styled.div({
//   color: 'green',
//   [mq[0]]: {
//     color: 'gray'
//   },
//   [mq[1]]: {
//     color: 'hotpink'
//   }
// })

/***/ }),

/***/ "./src/styles/common.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return common; });
var common = {
  padding: 10
};

/***/ }),

/***/ "./src/styles/theme/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export colours */
/* unused harmony export shades */
/* unused harmony export lights */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return theme; });
var colours = {
  pink: '#f605a5',
  blue: '#00a4ff',
  purple: '#7c60ff',
  haze: '#2d3446'
};
var shades = {
  darkest: '#151618',
  darker: '#1a1a1c',
  dark: '#1e2225',
  darkish: '#2b2e33'
};
var lights = {
  lightish: '#cccccc',
  lighter: '#dedede',
  light: '#f7f7f7',
  white: '#ffffff'
};
var theme = {
  pink: colours.pink,
  blue: colours.blue,
  purple: colours.purple,
  haze: colours.haze,
  darkest: shades.darkest,
  darker: shades.darker,
  dark: shades.dark,
  darkish: shades.darkish,
  lightish: lights.lightish,
  lighter: lights.lighter,
  light: lights.light,
  white: lights.white
};

/***/ }),

/***/ "./src/styles/typography/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return font; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return P; });
/* unused harmony export UL */
/* unused harmony export OL */
/* unused harmony export LI */
/* unused harmony export BLOCKQUOTE */
/* unused harmony export H1 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return H2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return H3; });
/* unused harmony export H4 */
/* unused harmony export H5 */
/* unused harmony export H6 */
/* unused harmony export TABLE */
/* unused harmony export TD */
/* unused harmony export TH */
/* unused harmony export CODE */
/* unused harmony export LEAD */
/* unused harmony export HUG */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_emotion__ = __webpack_require__("react-emotion");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_emotion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_emotion__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme___ = __webpack_require__("./src/styles/theme/index.ts");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/*! Typebase.less v0.1.0 | MIT License */

/* Types */

/* Setup */
var font = {
  fontFamily: "Roboto, sans-serif",
  color: __WEBPACK_IMPORTED_MODULE_1__theme___["a" /* theme */].darkest,
  textAlign: 'left',
  margin: '0 auto',
  maxWidth: '100%'
};
var headingFont = {
  fontFamily: "Nunito, sans-serif",
  color: __WEBPACK_IMPORTED_MODULE_1__theme___["a" /* theme */].darkest,
  textAlign: 'left'
};

var lis = _objectSpread({}, font, {
  lineHeight: '1.5rem'
});

var headings = _objectSpread({}, headingFont, {
  marginTop: '1.5rem',
  marginBottom: 0,
  lineHeight: '1.5rem'
});

var tables = {
  padding: 0,
  lineHeight: 33
};
/* Copy & Lists */

var P =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()("p", {
  target: "e6mhnvd0"
})(_objectSpread({}, font, {
  label: 'p',
  lineHeight: '1.5rem',
  marginTop: '1.5rem',
  marginBottom: 0
}), function (_ref) {
  var fontColour = _ref.fontColour,
      fontAlign = _ref.fontAlign,
      maxWidth = _ref.maxWidth;
  return {
    color: fontColour ? fontColour : font.color,
    textAlign: fontAlign ? fontAlign : font.textAlign,
    width: maxWidth ? maxWidth : font.maxWidth
  };
});
var UL =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()("ul", {
  target: "e6mhnvd1"
})(_objectSpread({}, font, {
  label: 'ul',
  marginTop: '1.5rem',
  marginBottom: '1.5rem'
}));
var OL =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()(UL, {
  target: "e6mhnvd2"
})(_objectSpread({}, font, {
  label: 'ol',
  marginTop: 0,
  marginBottom: 0,
  '& li': _objectSpread({}, lis)
}));
var LI =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()("li", {
  target: "e6mhnvd3"
})(_objectSpread({}, lis, {
  label: 'li'
}));
var BLOCKQUOTE =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()("blockquote", {
  target: "e6mhnvd4"
})({
  label: 'block-quote',
  lineHeight: '1.5rem',
  marginTop: '1.5rem',
  marginBottom: '1.5rem'
});
/* Headings */

var H1 =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()("h1", {
  target: "e6mhnvd5"
})(_objectSpread({}, headings, {
  label: 'h1',
  fontSize: '4.242rem',
  lineHeight: '4.5rem',
  marginTop: '3rem'
}), function (_ref2) {
  var fontColour = _ref2.fontColour,
      fontAlign = _ref2.fontAlign;
  return {
    color: fontColour ? fontColour : headingFont.color,
    textAlign: fontAlign ? fontAlign : headingFont.textAlign
  };
});
var H2 =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()("h2", {
  target: "e6mhnvd6"
})(_objectSpread({}, headings, {
  label: 'h2',
  fontSize: '2.828rem',
  lineHeight: '3rem',
  marginTop: '3rem'
}), function (_ref3) {
  var fontColour = _ref3.fontColour,
      fontAlign = _ref3.fontAlign;
  return {
    color: fontColour ? fontColour : headingFont.color,
    textAlign: fontAlign ? fontAlign : headingFont.textAlign
  };
});
var H3 =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()("h3", {
  target: "e6mhnvd7"
})(_objectSpread({}, headings, {
  label: 'h3',
  fontSize: '1.414rem'
}), function (_ref4) {
  var fontColour = _ref4.fontColour,
      fontAlign = _ref4.fontAlign;
  return {
    color: fontColour ? fontColour : headingFont.color,
    textAlign: fontAlign ? fontAlign : headingFont.textAlign
  };
});
var H4 =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()("h4", {
  target: "e6mhnvd8"
})(_objectSpread({}, headings, {
  label: 'h4',
  fontSize: '0.707rem'
}), function (_ref5) {
  var fontColour = _ref5.fontColour,
      fontAlign = _ref5.fontAlign;
  return {
    color: fontColour ? fontColour : headingFont.color,
    textAlign: fontAlign ? fontAlign : headingFont.textAlign
  };
});
var H5 =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()("h5", {
  target: "e6mhnvd9"
})(_objectSpread({}, headings, {
  label: 'h5',
  fontSize: '0.4713333333333333rem'
}), function (_ref6) {
  var fontColour = _ref6.fontColour,
      fontAlign = _ref6.fontAlign;
  return {
    color: fontColour ? fontColour : headingFont.color,
    textAlign: fontAlign ? fontAlign : headingFont.textAlign
  };
});
var H6 =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()("h6", {
  target: "e6mhnvd10"
})(_objectSpread({}, headings, {
  label: 'h6',
  fontSize: '0.3535rem'
}), function (_ref7) {
  var fontColour = _ref7.fontColour,
      fontAlign = _ref7.fontAlign;
  return {
    color: fontColour ? fontColour : headingFont.color,
    textAlign: fontAlign ? fontAlign : headingFont.textAlign
  };
});
/* Tables */

var TABLE =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()("table", {
  target: "e6mhnvd11"
})(_objectSpread({}, font, tables, {
  label: 'table',
  marginTop: '1.5rem',
  borderSpacing: 0,
  borderCollapse: 'collapse'
}));
var TD =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()("td", {
  target: "e6mhnvd12"
})(_objectSpread({}, tables, {
  label: 'td'
}));
var TH =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()("th", {
  target: "e6mhnvd13"
})(_objectSpread({}, font, tables, {
  label: 'th'
}));
/* Code blocks */

var CODE =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()("code", {
  target: "e6mhnvd14"
})({
  label: 'code',
  verticalAlign: 'bottom'
});
/* Leading paragraph text */

var LEAD = _objectSpread({}, font, {
  label: 'lead',
  fontSize: '1.414rem'
});
/* Hug the block above you */

var HUG = {
  label: 'hug',
  marginTop: 0
};

/***/ }),

/***/ "./src/utils/data-reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return usersHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return thingHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return postsHandler; });
var mapTags = function mapTags(tags) {
  var tagNames = tags.map(function (tag) {
    return tag.name;
  });
  return tagNames;
};

var usersHandler = function usersHandler(data) {
  var userData = {
    bio: data.users[0].bio,
    coverImage: data.users[0].cover_image,
    //TODO return with process.env.GHOST_CMS
    name: data.users[0].name,
    profileImage: data.users[0].profile_image //TODO return with process.env.GHOST_CMS

  };
  return userData;
};
var thingHandler = function thingHandler(data) {
  // console.log("thingHandler:", data);
  return data;
};
var postsHandler = function postsHandler(data) {
  var posts = data.posts.map(function (data) {
    return {
      customExcerpt: data.custom_excerpt,
      featureImage: data.feature_image,
      //TODO return with process.env.GHOST_CMS
      featured: data.featured,
      html: data.html,
      id: data.id,
      publishedAt: data.published_at,
      slug: data.slug,
      tags: mapTags(data.tags),
      title: data.title,
      url: data.url //TODO return with process.env.GHOST_CMS ?

    };
  });
  return posts;
};

/***/ }),

/***/ "./src/utils/fetch.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetchType; });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fetchType = {
  //these are the endPoint 'props' for Fetcher
  users: function users() {
    return goFetch({
      endPoint: "users/1"
    });
  },
  posts: function posts() {
    return goFetch({
      endPoint: "posts",
      params: {
        include: "tags"
      }
    });
  },
  thing: function thing() {
    return goFetch({
      endPoint: "posts",
      params: {
        include: "tags"
      }
    });
  } // tags: () => {
  //   return goFetch({
  //     endPoint: 'tags',
  //     params: { include: 'count.posts' }
  //   });
  // },
  // sections: () => {
  //   return goFetch({
  //     endPoint: 'posts',
  //     params: {
  //       filter: 'page:true',
  //       order: 'title dsc'
  //     }
  //   });
  // }

};

var goFetch = function goFetch(_ref) {
  var endPoint = _ref.endPoint,
      params = _ref.params;
  return fetch(window["ghost"].url.api("".concat(endPoint), _objectSpread({}, params))).then(function (res) {
    return res.json();
  }).then(function (data) {
    return {
      isLoading: false,
      data: data,
      hasErrored: false
    };
  }).catch(function () {
    return {
      isLoading: false,
      data: null,
      hasErrored: true
    };
  });
};

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.tsx");


/***/ }),

/***/ "emotion-theming":
/***/ (function(module, exports) {

module.exports = require("emotion-theming");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "polished":
/***/ (function(module, exports) {

module.exports = require("polished");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-emotion":
/***/ (function(module, exports) {

module.exports = require("react-emotion");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map