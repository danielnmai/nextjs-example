webpackHotUpdate(4,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_MyLayout__ = __webpack_require__("./components/MyLayout.js");
var _jsxFileName = "/Users/danmai/projects/nextjs-example/pages/index.js";





function getPosts() {
  return [{
    id: 'hello-nextjs',
    title: 'Hello Next.js'
  }, {
    id: 'learn-nextjs',
    title: 'Learn Next.js is awesome'
  }, {
    id: 'deploy-nextjs',
    title: 'Deploy apps with ZEIT'
  }];
}

var Index = function Index() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_MyLayout__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    className: "jsx-1880509602"
  }, "My Blog"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    className: "jsx-1880509602"
  }, getPost().map(function (post) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
      key: post.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      className: "jsx-1880509602"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
      as: "/p/".concat(post.id),
      href: "/post?id=".concat(post.title),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      className: "jsx-1880509602"
    }, post.name)));
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1880509602",
    css: "h1.jsx-1880509602,a.jsx-1880509602{font-family:\"Arial\";}ul.jsx-1880509602{padding:0;}li.jsx-1880509602{list-style:none;margin:5px 0;}a.jsx-1880509602{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-1880509602:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCZ0IsQUFHeUMsQUFJVixBQUlNLEFBS0ssQUFLVCxVQWJkLEVBY0EsSUFWZSxJQVJmLFNBU0EscUJBSWEsV0FDYiIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZGFubWFpL3Byb2plY3RzL25leHRqcy1leGFtcGxlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0J1xuXG5mdW5jdGlvbiBnZXRQb3N0cygpe1xuICAgIHJldHVybiBbXG4gICAgICAgIHtpZDogJ2hlbGxvLW5leHRqcycsIHRpdGxlOiAnSGVsbG8gTmV4dC5qcyd9LFxuICAgICAgICB7aWQ6ICdsZWFybi1uZXh0anMnLCB0aXRsZTogJ0xlYXJuIE5leHQuanMgaXMgYXdlc29tZSd9LFxuICAgICAgICB7aWQ6ICdkZXBsb3ktbmV4dGpzJywgdGl0bGU6ICdEZXBsb3kgYXBwcyB3aXRoIFpFSVQnfSxcblxuICAgIF1cbn1cblxuY29uc3QgSW5kZXggPSAoKSA9PiAoXG4gICAgICAgPExheW91dCA+XG4gICAgICAgICAgIDxoMT5NeSBCbG9nPC9oMT5cbiAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAge2dldFBvc3QoKS5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtwb3N0LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvcC8ke3Bvc3QuaWR9YH0gaHJlZj17YC9wb3N0P2lkPSR7cG9zdC50aXRsZX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPntwb3N0Lm5hbWV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIGgxLCBhIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICA8L0xheW91dD5cbilcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXX0= */\n/*@ sourceURL=pages/index.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.04d59c986e41517f050b.hot-update.js.map