"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/table.tsx":
/*!***************************!*\
  !*** ./src/app/table.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Table; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Table() {\n    _s();\n    const [persons, setPersons] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getPersons();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getPersons();\n    }, [\n        persons\n    ]);\n    async function getPersons() {\n        await fetch(\"http://127.0.0.1:4400/person\").then((response)=>response.json()).then((data)=>{\n            setPersons(data);\n            console.log(data.length);\n        }).catch((error)=>{\n            console.error(\"Error fetching data:\", error);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            margin: \"0 auto\",\n            width: \"1000px\",\n            marginTop: \"50px\"\n        },\n        children: persons.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            className: \"table caption-top table-striped table-hover\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                children: \"S.No\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\nextjs-app\\\\client\\\\src\\\\app\\\\table.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                children: \"FirstName\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\nextjs-app\\\\client\\\\src\\\\app\\\\table.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                children: \"LastName\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\nextjs-app\\\\client\\\\src\\\\app\\\\table.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                children: \"Phone\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\nextjs-app\\\\client\\\\src\\\\app\\\\table.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                children: \"Email\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\nextjs-app\\\\client\\\\src\\\\app\\\\table.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\nextjs-app\\\\client\\\\src\\\\app\\\\table.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\nextjs-app\\\\client\\\\src\\\\app\\\\table.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 11\n                }, this),\n                persons.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    scope: \"row\",\n                                    children: index + 1\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\nextjs-app\\\\client\\\\src\\\\app\\\\table.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: item.firstname\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\nextjs-app\\\\client\\\\src\\\\app\\\\table.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: item.lastname\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\nextjs-app\\\\client\\\\src\\\\app\\\\table.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: item.phone\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\nextjs-app\\\\client\\\\src\\\\app\\\\table.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: item.Email\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\nextjs-app\\\\client\\\\src\\\\app\\\\table.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\nextjs-app\\\\client\\\\src\\\\app\\\\table.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 15\n                        }, this)\n                    }, index + 1, false, {\n                        fileName: \"E:\\\\nextjs-app\\\\client\\\\src\\\\app\\\\table.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, this))\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\nextjs-app\\\\client\\\\src\\\\app\\\\table.tsx\",\n            lineNumber: 28,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            style: {\n                textAlign\n            },\n            children: \"no reacord founds\"\n        }, void 0, false, {\n            fileName: \"E:\\\\nextjs-app\\\\client\\\\src\\\\app\\\\table.tsx\",\n            lineNumber: 51,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\nextjs-app\\\\client\\\\src\\\\app\\\\table.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(Table, \"cBVmoKZ3YTuhz8E2a6L4xwi4O/U=\");\n_c = Table;\nvar _c;\n$RefreshReg$(_c, \"Table\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdGFibGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUM0QztBQUU3QixTQUFTRTs7SUFDdEIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdKLCtDQUFRQSxDQUFDLEVBQUU7SUFFekNDLGdEQUFTQSxDQUFDO1FBQ1JJO0lBQ0YsR0FBRyxFQUFFO0lBQ0xKLGdEQUFTQSxDQUFDO1FBQ1JJO0lBQ0YsR0FBRztRQUFDRjtLQUFRO0lBQ1osZUFBZUU7UUFDYixNQUFNQyxNQUFNLGdDQUNUQyxJQUFJLENBQUMsQ0FBQ0MsV0FBa0JBLFNBQVNDLElBQUksSUFDckNGLElBQUksQ0FBQyxDQUFDRztZQUNMTixXQUFXTTtZQUNYQyxRQUFRQyxHQUFHLENBQUNGLEtBQUtHLE1BQU07UUFDekIsR0FDQ0MsS0FBSyxDQUFDLENBQUNDO1lBQ05KLFFBQVFJLEtBQUssQ0FBQyx3QkFBd0JBO1FBQ3hDO0lBQ0o7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsT0FBTztZQUFDQyxRQUFPO1lBQVNDLE9BQU07WUFBU0MsV0FBVTtRQUFNO2tCQUN6RGpCLFFBQVFVLE1BQU0sR0FBRyxrQkFDaEIsOERBQUNRO1lBQU1DLFdBQVU7OzhCQUNmLDhEQUFDQzs4QkFDQyw0RUFBQ0M7OzBDQUNDLDhEQUFDQztnQ0FBR0MsT0FBTTswQ0FBTTs7Ozs7OzBDQUNoQiw4REFBQ0Q7Z0NBQUdDLE9BQU07MENBQU07Ozs7OzswQ0FDaEIsOERBQUNEO2dDQUFHQyxPQUFNOzBDQUFNOzs7Ozs7MENBQ2hCLDhEQUFDRDtnQ0FBR0MsT0FBTTswQ0FBTTs7Ozs7OzBDQUNoQiw4REFBQ0Q7Z0NBQUdDLE9BQU07MENBQU07Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQUduQnZCLFFBQVF3QixHQUFHLENBQUMsQ0FBQ0MsTUFBV0Msc0JBQ3ZCLDhEQUFDQztrQ0FDQyw0RUFBQ047OzhDQUNDLDhEQUFDQztvQ0FBR0MsT0FBTTs4Q0FBT0csUUFBUTs7Ozs7OzhDQUN6Qiw4REFBQ0U7OENBQUlILEtBQUtJLFNBQVM7Ozs7Ozs4Q0FDbkIsOERBQUNEOzhDQUFJSCxLQUFLSyxRQUFROzs7Ozs7OENBQ2xCLDhEQUFDRjs4Q0FBSUgsS0FBS00sS0FBSzs7Ozs7OzhDQUNmLDhEQUFDSDs4Q0FBSUgsS0FBS08sS0FBSzs7Ozs7Ozs7Ozs7O3VCQU5QTixRQUFROzs7Ozs7Ozs7O2lDQVl4Qiw4REFBQ087WUFBR25CLE9BQU87Z0JBQUNvQjtZQUFTO3NCQUFHOzs7Ozs7Ozs7OztBQUloQztHQW5Ed0JuQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3RhYmxlLnRzeD9jNjAxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWJsZSgpIHtcclxuICBjb25zdCBbcGVyc29ucywgc2V0UGVyc29uc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRQZXJzb25zKCk7XHJcbiAgfSwgW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRQZXJzb25zKCk7XHJcbiAgfSwgW3BlcnNvbnNdKTtcclxuICBhc3luYyBmdW5jdGlvbiBnZXRQZXJzb25zKCkge1xyXG4gICAgYXdhaXQgZmV0Y2goXCJodHRwOi8vMTI3LjAuMC4xOjQ0MDAvcGVyc29uXCIpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZTogYW55KSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICBzZXRQZXJzb25zKGRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEubGVuZ3RoKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRhdGE6XCIsIGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17e21hcmdpbjpcIjAgYXV0b1wiLHdpZHRoOicxMDAwcHgnLG1hcmdpblRvcDonNTBweCd9fT5cclxuICAgICAge3BlcnNvbnMubGVuZ3RoID4gMD8gKFxyXG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSBjYXB0aW9uLXRvcCB0YWJsZS1zdHJpcGVkIHRhYmxlLWhvdmVyXCI+XHJcbiAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5TLk5vPC90aD5cclxuICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5GaXJzdE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkxhc3ROYW1lPC90aD5cclxuICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5QaG9uZTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+RW1haWw8L3RoPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgIHtwZXJzb25zLm1hcCgoaXRlbTogYW55LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8dGJvZHkga2V5PXtpbmRleCArIDF9PlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPntpbmRleCArIDF9PC90aD5cclxuICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5maXJzdG5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5sYXN0bmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPntpdGVtLnBob25lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0uRW1haWx9PC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8aDEgc3R5bGU9e3t0ZXh0QWxpZ259fT5ubyByZWFjb3JkIGZvdW5kczwvaDE+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlRhYmxlIiwicGVyc29ucyIsInNldFBlcnNvbnMiLCJnZXRQZXJzb25zIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJjYXRjaCIsImVycm9yIiwiZGl2Iiwic3R5bGUiLCJtYXJnaW4iLCJ3aWR0aCIsIm1hcmdpblRvcCIsInRhYmxlIiwiY2xhc3NOYW1lIiwidGhlYWQiLCJ0ciIsInRoIiwic2NvcGUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJ0Ym9keSIsInRkIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJwaG9uZSIsIkVtYWlsIiwiaDEiLCJ0ZXh0QWxpZ24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/table.tsx\n"));

/***/ })

});