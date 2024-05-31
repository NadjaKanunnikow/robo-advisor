"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./components/Depot.js":
/*!*****************************!*\
  !*** ./components/Depot.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar Depot = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), depotData = _useState[0], setDepotData = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), error = _useState1[0], setError = _useState1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var fetchDepotData = function() {\n            var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_3__._)(function() {\n                var token, response, data, err;\n                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_4__._)(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            token = localStorage.getItem(\"token\");\n                            if (!token) {\n                                setError(\"No token found, please login first\");\n                                return [\n                                    2\n                                ];\n                            }\n                            _state.label = 1;\n                        case 1:\n                            _state.trys.push([\n                                1,\n                                6,\n                                ,\n                                7\n                            ]);\n                            return [\n                                4,\n                                fetch(\"https://probetag.vercel.app/api/depot?token=\".concat(token))\n                            ];\n                        case 2:\n                            response = _state.sent();\n                            if (!(response.status === 200)) return [\n                                3,\n                                4\n                            ];\n                            return [\n                                4,\n                                response.json()\n                            ];\n                        case 3:\n                            data = _state.sent();\n                            setDepotData(data);\n                            return [\n                                3,\n                                5\n                            ];\n                        case 4:\n                            if (response.status === 403) {\n                                setError(\"Access denied: Invalid token\");\n                            } else {\n                                setError(\"An error occurred\");\n                            }\n                            _state.label = 5;\n                        case 5:\n                            return [\n                                3,\n                                7\n                            ];\n                        case 6:\n                            err = _state.sent();\n                            console.error(\"Error fetching depot data:\", err);\n                            setError(\"An error occurred while fetching data\");\n                            return [\n                                3,\n                                7\n                            ];\n                        case 7:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function fetchDepotData() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchDepotData();\n    }, []);\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: error\n        }, void 0, false, {\n            fileName: \"/Users/nadja/smavesto/robo-advisor/components/Depot.js\",\n            lineNumber: 37,\n            columnNumber: 12\n        }, _this);\n    }\n    return depotData ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Depot Number: \",\n                    depotData.depotnumber\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nadja/smavesto/robo-advisor/components/Depot.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Name: \",\n                    depotData.name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nadja/smavesto/robo-advisor/components/Depot.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Balance: \",\n                    depotData.balance\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nadja/smavesto/robo-advisor/components/Depot.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"BalanceFuture: \",\n                    depotData.balanceFuture\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nadja/smavesto/robo-advisor/components/Depot.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Performance: \",\n                    depotData.performance\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nadja/smavesto/robo-advisor/components/Depot.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nadja/smavesto/robo-advisor/components/Depot.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/nadja/smavesto/robo-advisor/components/Depot.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, _this);\n};\n_s(Depot, \"TngU7P93SAE6LQe5np+pMZG2oEU=\");\n_c = Depot;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Depot); //first try\n // import React, { useState } from \"react\";\n // function Depot() {\n //   const [depotData, setDepotData] = useState(null);\n //   const [error, setError] = useState(null);\n //   const [loading, setLoading] = useState(false);\n //   const fetchDepotData = async () => {\n //     const token = localStorage.getItem(\"token\");\n //     if (!token) {\n //       setError(\"No token found, please login first\");\n //       return;\n //     }\n //     setLoading(true);\n //     try {\n //       const response = await fetch(\n //         `https://probetag.vercel.app/api/depot?token=${token}`\n //       );\n //       if (response.status === 200) {\n //         const data = await response.json();\n //         setDepotData(data);\n //         setError(null);\n //       } else if (response.status === 403) {\n //         setError(\"Access denied: Invalid token\");\n //         setDepotData(null);\n //       } else {\n //         setError(\"An error occurred\");\n //         setDepotData(null);\n //       }\n //     } catch (err) {\n //       console.error(\"Error fetching depot data:\", err);\n //       setError(\"An error occurred while fetching data\");\n //       setDepotData(null);\n //     }\n //     setLoading(false);\n //   };\n //   return (\n //     <div className=\"Depot\">\n //       <button onClick={fetchDepotData}>Fetch Depot data</button>\n //       {loading && <p>Loading...</p>}\n //       {error && <p>{error}</p>}\n //       {depotData && (\n //         <div>\n //           <p>Depot Number: {depotData.depotnumber}</p>\n //           <p>Name: {depotData.name}</p>\n //           <p>Balance: {depotData.balance}</p>\n //           <p>BalanceFuture: {depotData.balanceFuture}</p>\n //           <p>Performance: {depotData.performance}</p>\n //         </div>\n //       )}\n //     </div>\n //   );\n // }\n // export default Depot;\nvar _c;\n$RefreshReg$(_c, \"Depot\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cz8zNjEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IERlcG90ID0gKCkgPT4ge1xuICBjb25zdCBbZGVwb3REYXRhLCBzZXREZXBvdERhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERlcG90RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcbiAgICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgc2V0RXJyb3IoXCJObyB0b2tlbiBmb3VuZCwgcGxlYXNlIGxvZ2luIGZpcnN0XCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgYGh0dHBzOi8vcHJvYmV0YWcudmVyY2VsLmFwcC9hcGkvZGVwb3Q/dG9rZW49JHt0b2tlbn1gXG4gICAgICAgICk7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgc2V0RGVwb3REYXRhKGRhdGEpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAzKSB7XG4gICAgICAgICAgc2V0RXJyb3IoXCJBY2Nlc3MgZGVuaWVkOiBJbnZhbGlkIHRva2VuXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldEVycm9yKFwiQW4gZXJyb3Igb2NjdXJyZWRcIik7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGVwb3QgZGF0YTpcIiwgZXJyKTtcbiAgICAgICAgc2V0RXJyb3IoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBmZXRjaGluZyBkYXRhXCIpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaERlcG90RGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIDxwPntlcnJvcn08L3A+O1xuICB9XG5cbiAgcmV0dXJuIGRlcG90RGF0YSA/IChcbiAgICA8ZGl2PlxuICAgICAgPHA+RGVwb3QgTnVtYmVyOiB7ZGVwb3REYXRhLmRlcG90bnVtYmVyfTwvcD5cbiAgICAgIDxwPk5hbWU6IHtkZXBvdERhdGEubmFtZX08L3A+XG4gICAgICA8cD5CYWxhbmNlOiB7ZGVwb3REYXRhLmJhbGFuY2V9PC9wPlxuICAgICAgPHA+QmFsYW5jZUZ1dHVyZToge2RlcG90RGF0YS5iYWxhbmNlRnV0dXJlfTwvcD5cbiAgICAgIDxwPlBlcmZvcm1hbmNlOiB7ZGVwb3REYXRhLnBlcmZvcm1hbmNlfTwvcD5cbiAgICA8L2Rpdj5cbiAgKSA6IChcbiAgICA8cD5Mb2FkaW5nLi4uPC9wPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGVwb3Q7XG5cbi8vZmlyc3QgdHJ5XG5cbi8vIGltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBmdW5jdGlvbiBEZXBvdCgpIHtcbi8vICAgY29uc3QgW2RlcG90RGF0YSwgc2V0RGVwb3REYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuLy8gICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuLy8gICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbi8vICAgY29uc3QgZmV0Y2hEZXBvdERhdGEgPSBhc3luYyAoKSA9PiB7XG4vLyAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xuLy8gICAgIGlmICghdG9rZW4pIHtcbi8vICAgICAgIHNldEVycm9yKFwiTm8gdG9rZW4gZm91bmQsIHBsZWFzZSBsb2dpbiBmaXJzdFwiKTtcbi8vICAgICAgIHJldHVybjtcbi8vICAgICB9XG5cbi8vICAgICBzZXRMb2FkaW5nKHRydWUpO1xuXG4vLyAgICAgdHJ5IHtcbi8vICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4vLyAgICAgICAgIGBodHRwczovL3Byb2JldGFnLnZlcmNlbC5hcHAvYXBpL2RlcG90P3Rva2VuPSR7dG9rZW59YFxuLy8gICAgICAgKTtcblxuLy8gICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4vLyAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4vLyAgICAgICAgIHNldERlcG90RGF0YShkYXRhKTtcbi8vICAgICAgICAgc2V0RXJyb3IobnVsbCk7XG4vLyAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAzKSB7XG4vLyAgICAgICAgIHNldEVycm9yKFwiQWNjZXNzIGRlbmllZDogSW52YWxpZCB0b2tlblwiKTtcbi8vICAgICAgICAgc2V0RGVwb3REYXRhKG51bGwpO1xuLy8gICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgc2V0RXJyb3IoXCJBbiBlcnJvciBvY2N1cnJlZFwiKTtcbi8vICAgICAgICAgc2V0RGVwb3REYXRhKG51bGwpO1xuLy8gICAgICAgfVxuLy8gICAgIH0gY2F0Y2ggKGVycikge1xuLy8gICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRlcG90IGRhdGE6XCIsIGVycik7XG4vLyAgICAgICBzZXRFcnJvcihcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGZldGNoaW5nIGRhdGFcIik7XG4vLyAgICAgICBzZXREZXBvdERhdGEobnVsbCk7XG4vLyAgICAgfVxuXG4vLyAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4vLyAgIH07XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT1cIkRlcG90XCI+XG4vLyAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2ZldGNoRGVwb3REYXRhfT5GZXRjaCBEZXBvdCBkYXRhPC9idXR0b24+XG4vLyAgICAgICB7bG9hZGluZyAmJiA8cD5Mb2FkaW5nLi4uPC9wPn1cbi8vICAgICAgIHtlcnJvciAmJiA8cD57ZXJyb3J9PC9wPn1cbi8vICAgICAgIHtkZXBvdERhdGEgJiYgKFxuLy8gICAgICAgICA8ZGl2PlxuLy8gICAgICAgICAgIDxwPkRlcG90IE51bWJlcjoge2RlcG90RGF0YS5kZXBvdG51bWJlcn08L3A+XG4vLyAgICAgICAgICAgPHA+TmFtZToge2RlcG90RGF0YS5uYW1lfTwvcD5cbi8vICAgICAgICAgICA8cD5CYWxhbmNlOiB7ZGVwb3REYXRhLmJhbGFuY2V9PC9wPlxuLy8gICAgICAgICAgIDxwPkJhbGFuY2VGdXR1cmU6IHtkZXBvdERhdGEuYmFsYW5jZUZ1dHVyZX08L3A+XG4vLyAgICAgICAgICAgPHA+UGVyZm9ybWFuY2U6IHtkZXBvdERhdGEucGVyZm9ybWFuY2V9PC9wPlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICAgICl9XG4vLyAgICAgPC9kaXY+XG4vLyAgICk7XG4vLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IERlcG90O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJEZXBvdCIsImRlcG90RGF0YSIsInNldERlcG90RGF0YSIsImVycm9yIiwic2V0RXJyb3IiLCJmZXRjaERlcG90RGF0YSIsInRva2VuIiwicmVzcG9uc2UiLCJkYXRhIiwiZXJyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoIiwic3RhdHVzIiwianNvbiIsImNvbnNvbGUiLCJwIiwiZGl2IiwiZGVwb3RudW1iZXIiLCJuYW1lIiwiYmFsYW5jZSIsImJhbGFuY2VGdXR1cmUiLCJwZXJmb3JtYW5jZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Depot.js\n"));

/***/ })

});