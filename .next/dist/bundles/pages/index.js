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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_styles___ = __webpack_require__("./src/styles/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_containers_fetcher__ = __webpack_require__("./src/containers/fetcher/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_components_user__ = __webpack_require__("./src/components/user/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_styles__);
var _jsxFileName = "/Users/superMacBook4/Desktop/_development/pauliescanlon-io-2018/pages/index.tsx";






/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_styles__["MuiThemeProvider"], {
    theme: __WEBPACK_IMPORTED_MODULE_2__src_styles___["a" /* theme */],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Hello World.", ' ', __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "About")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__src_containers_fetcher__["a" /* Fetcher */], {
    endPoint: "users",
    renderComponent: function renderComponent(path, data) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__src_components_user__["a" /* User */], {
        path: path,
        data: data,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }));
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

/***/ "./src/components/user/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles__ = __webpack_require__("./src/components/user/styles.ts");
var _jsxFileName = "/Users/superMacBook4/Desktop/_development/pauliescanlon-io-2018/src/components/user/index.tsx";


var User = function User(_ref) {
  var path = _ref.path,
      data = _ref.data;
  var _data$ = data[0],
      bio = _data$.bio,
      cover_image = _data$.cover_image,
      name = _data$.name,
      profile_image = _data$.profile_image;
  return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__styles__["a" /* UserWrapper */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, bio), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", {
    style: {
      width: 100
    },
    src: "".concat(path).concat(cover_image),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, name), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", {
    style: {
      width: 50
    },
    src: "".concat(path).concat(profile_image),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }));
};

/***/ }),

/***/ "./src/components/user/styles.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserWrapper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_glamorous__ = __webpack_require__("glamorous");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_glamorous___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_glamorous__);

var UserWrapper = __WEBPACK_IMPORTED_MODULE_0_glamorous___default.a.div({
  label: 'user-wrapper'
});

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
      hasErrored: false,
      path: ''
    };
    return _this;
  }

  _createClass(Fetcher, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var userFetch = __WEBPACK_IMPORTED_MODULE_3__utils_fetch__["a" /* goFetch */][this.props.endPoint]();
      userFetch.then(function (res) {
        _this2.setState({
          isLoading: res.isLoading,
          data: res.data ? res.data[_this2.props.endPoint] : null,
          hasErrored: res.hasErrored
        }, function () {
          _this2.setPath(res.url);
        });
      });
    }
  }, {
    key: "setPath",
    value: function setPath(url) {
      var pathname = url.split('/');
      this.setState({
        path: "http://".concat(pathname[2])
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          isLoading = _state.isLoading,
          data = _state.data,
          hasErrored = _state.hasErrored,
          path = _state.path;
      var renderComponent = this.props.renderComponent;

      if (isLoading) {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__components_loading__["a" /* Loading */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        });
      }

      return hasErrored ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__components_error__["a" /* Error */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }) : renderComponent(path, data);
    }
  }]);

  return Fetcher;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),

/***/ "./src/styles/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return theme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_glamor__ = __webpack_require__("glamor");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_glamor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_glamor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__);


__WEBPACK_IMPORTED_MODULE_0_glamor__["css"].global('html, body, #root', {
  margin: 0,
  padding: 0,
  fontFamily: 'sans-serif'
});
var theme = Object(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__["createMuiTheme"])({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#fb2e69' // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contast with palette.primary.main

    },
    secondary: {
      // light: will be calculated from palette.secondary.main,
      main: '#00b5fe' // dark: will be calculated from palette.secondary.main,
      // contrastText: will be calculated to contast with palette.secondary.main
      // error: will use the default color

    }
  }
});

/***/ }),

/***/ "./src/utils/fetch.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return goFetch; });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var goFetch = {
  users: function users() {
    return triggerFetch({
      endPoint: 'users/1'
    });
  },
  posts: function posts() {
    return triggerFetch({
      endPoint: 'posts',
      params: {
        include: 'tags'
      }
    });
  },
  tags: function tags() {
    return triggerFetch({
      endPoint: 'tags',
      params: {
        include: 'count.posts'
      }
    });
  },
  sections: function sections() {
    return triggerFetch({
      endPoint: 'posts',
      params: {
        filter: 'page:true',
        order: 'title dsc'
      }
    });
  }
};

var triggerFetch = function triggerFetch(_ref) {
  var endPoint = _ref.endPoint,
      params = _ref.params;
  return fetch(window['ghost'].url.api("".concat(endPoint), _objectSpread({}, params))).then(function (res) {
    return res.json();
  }).then(function (data) {
    // console.log('data: ', data);
    return {
      isLoading: false,
      data: data,
      hasErrored: false,
      url: window['ghost'].url.api()
    };
  }).catch(function () {
    // console.log('error: ', error);
    return {
      isLoading: false,
      data: null,
      hasErrored: true
    };
  });
};

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.tsx");


/***/ }),

/***/ "@material-ui/core/styles":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "glamor":
/***/ (function(module, exports) {

module.exports = require("glamor");

/***/ }),

/***/ "glamorous":
/***/ (function(module, exports) {

module.exports = require("glamorous");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map