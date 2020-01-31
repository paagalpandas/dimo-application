function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"showLoader\" class=\"dimo-spinner\">\n  <mat-progress-spinner [color]=\"color\" [mode]=\"mode\">\n  </mat-progress-spinner>\n</div>\n\n<dimo-header *ngIf=\"showHeader\"></dimo-header>\n<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/views/dashboard.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/containers/views/dashboard.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContainersViewsDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"dashboard-caontainer\">\n  <div class=\"category-container\" *ngFor=\"let category of categories\">\n    <div class=\"category-title\">\n      <div class=\"title\">{{category.category}}</div>\n      <div class=\"see-all\">See All</div>\n    </div>\n    <div>\n      <mat-card class=\"custom-card\" *ngFor=\"let movie of category.movies\">\n        <mat-card-title>{{movie.name}}</mat-card-title>\n        <mat-card-subtitle>{{movie.description}}</mat-card-subtitle>\n        <img mat-card-image [attr.src]=\"movie.thumbNail\" (click)=\"moviedetails(movie.id)\">\n      </mat-card>\n    </div>\n  </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/views/entrypoint.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/containers/views/entrypoint.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContainersViewsEntrypointComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"entrypoint-container\">\n  <div class=\"container-item\">\n\n    <div class=\"login-dimo-logo\">\n      <img class=\"logo-img\" src=\"../../../assets/logo-white.png\">\n    </div>\n    <mat-tab-group>\n      <mat-tab label=\"Log In\">\n        <dimo-login></dimo-login>\n      </mat-tab>\n      <mat-tab label=\"Register\">\n        <dimo-signup></dimo-signup>\n      </mat-tab>\n    </mat-tab-group>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/views/header.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/containers/views/header.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContainersViewsHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"dimo-header\">\n  <div class=\"logo\">\n    <img class=\"logo-img\" (click)=\"goToDashboard()\" src=\"../../../assets/logo-white.png\">\n    <!-- <h3 >DIMO</h3> -->\n  </div>\n  <div class=\"search\">\n    <searchbox></searchbox>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/views/login.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/containers/views/login.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContainersViewsLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card class=\"login-container\" >\n  <form class=\"example-form\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n    <mat-card-content>\n      <p>\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Email\" name=\"email\" ngModel>\n      </mat-form-field>\n      </p>\n      <p>\n      <mat-form-field class=\"example-full-width\">\n        <input type=\"password\" matInput placeholder=\"Password\" name=\"password\" ngModel>\n        <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n          <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n        </button>\n      </mat-form-field>\n      </p>\n\n    </mat-card-content>\n    <p class=\"error-msg\" *ngIf=\"showErr\" >Invalid credentials.</p>\n    <button mat-raised-button color=\"primary\" class=\"login-btn\">Log In</button>\n  </form>\n</mat-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/views/moviedetails.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/containers/views/moviedetails.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContainersViewsMoviedetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\" *ngIf=\"moviedetails\">\n  <h2 class=\"title\">{{moviedetails.title}}</h2>\n  <h3>{{moviedetails.description}}</h3>\n  <h3>{{moviedetails.tagLine}}</h3>\n  <div>\n          <mat-card class=\"custom-card\">\n            <img mat-card-image [attr.src]=\"moviedetails.thumbNail\" class=\"image\">\n          </mat-card>\n  </div>\n</div>\n\n<!--<ng-template #errormsg>-->\n<!--  <h2>No Details found</h2>-->\n<!--</ng-template>-->\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/views/searchbox.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/containers/views/searchbox.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContainersViewsSearchboxComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"searchbox-container\">\n  <input class=\"search-box\" placeholder=\"Search here\" name=\"keyword\" [(ngModel)]=\"searchStr\">\n  <i class=\"material-icons search-icon\" (click)=\"onSearch()\">search</i>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/views/searchresults.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/containers/views/searchresults.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContainersViewsSearchresultsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"dashboard-caontainer\">\n  <div class=\"category-container\">\n    <div>\n      <mat-card class=\"custom-card\" *ngFor=\"let movie of movies\">\n        <mat-card-title>{{movie.title}}</mat-card-title>\n        <mat-card-subtitle>{{movie.tagline}}</mat-card-subtitle>\n        <img mat-card-image [attr.src]=\"movie.poster\" (click)=\"moviedetails(movie.id)\">\n      </mat-card>\n    </div>\n  </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/views/signup.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/containers/views/signup.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContainersViewsSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card class=\"box signup-container\">\n  <form [formGroup]=\"userForm\" class=\"example-form\" (ngSubmit)=\"onSignup()\">\n    <mat-card-content>\n\n      <mat-form-field class=\"dimo-field\">\n        <input type=\"text\" matInput placeholder=\"First Name\" name=\"firstName\" formControlName=\"firstName\" required=true\n          ngModel>\n        <mat-error>\n          Please enter your first name.\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field class=\"dimo-field\">\n        <input type=\"text\" matInput placeholder=\"Last Name\" name=\"lastName\" formControlName=\"lastName\" required=true\n          ngModel>\n        <mat-error>\n          Please enter your second name.\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field class=\"dimo-field\">\n        <input type=\"email\" matInput placeholder=\"Email\" name=\"email\" formControlName=\"email\" required=true ngModel>\n        <mat-error>\n          Please enter valid email address.\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field class=\"dimo-field\">\n        <input type=\"password\" matInput placeholder=\"Password\" name=\"password\" formControlName=\"password\" required=true\n          ngModel [type]=\"hide ? 'password' : 'text'\">\n        <mat-error>\n          Please enter a password with minimum 8 characters.\n        </mat-error>\n        <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\"\n          [attr.aria-pressed]=\"hide\">\n          <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n        </button>\n      </mat-form-field>\n\n      <mat-form-field class=\"dimo-field\">\n        <input type=\"password\" matInput placeholder=\"Confirm Password\" name=\"confirmPassword\"\n          formControlName=\"confirmPassword\" required=true ngModel [type]=\"hide ? 'password' : 'text'\">\n\n        <mat-error *ngIf=\"userForm.hasError('notSame')\">\n          Passwords do not match.\n        </mat-error>\n\n        <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\"\n          [attr.aria-pressed]=\"hide\">\n          <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n        </button>\n      </mat-form-field>\n\n    </mat-card-content>\n    <button class=\"signup-btn\" type=\"submit\" mat-raised-button color=\"primary\">Register</button>\n  </form>\n</mat-card>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _containers_components_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./containers/components/dashboard.component */
    "./src/app/containers/components/dashboard.component.ts");
    /* harmony import */


    var _containers_components_entrypoint_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./containers/components/entrypoint.component */
    "./src/app/containers/components/entrypoint.component.ts");
    /* harmony import */


    var _containers_components_searchresults_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./containers/components/searchresults.component */
    "./src/app/containers/components/searchresults.component.ts");
    /* harmony import */


    var _services_route_gaurd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/route-gaurd */
    "./src/app/services/route-gaurd.ts");
    /* harmony import */


    var _containers_components_moviedetails_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./containers/components/moviedetails.component */
    "./src/app/containers/components/moviedetails.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    }, {
      path: 'dashboard',
      component: _containers_components_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
      canActivate: [_services_route_gaurd__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: 'login',
      component: _containers_components_entrypoint_component__WEBPACK_IMPORTED_MODULE_4__["EntryPointComponent"]
    }, {
      path: 'searchresults',
      component: _containers_components_searchresults_component__WEBPACK_IMPORTED_MODULE_5__["SearchResultsComponent"],
      canActivate: [_services_route_gaurd__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: 'moviedetails/:id',
      component: _containers_components_moviedetails_component__WEBPACK_IMPORTED_MODULE_7__["MovieDetailsComponent"],
      canActivate: [_services_route_gaurd__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".dimo-spinner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aW5vZHNuL0lkZWFQcm9qZWN0cy9kaW1vLWFwcGxpY2F0aW9uL2RpbW8tYXBwbGljYXRpb24vZGltby11aS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaW1vLXNwaW5uZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHotaW5kZXg6IDEwO1xufVxuIiwiLmRpbW8tc3Bpbm5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgei1pbmRleDogMTA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_ProfileService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/ProfileService */
    "./src/app/services/ProfileService.ts");

    var AppComponent = function AppComponent(profileService) {
      var _this = this;

      _classCallCheck(this, AppComponent);

      this.profileService = profileService;
      this.title = 'Dimo';
      this.color = 'primary';
      this.mode = 'indeterminate';
      this.showHeader = false;
      this.showLoader = false;
      this.profileService.isAuthenticated.subscribe(function (authenticated) {
        _this.showHeader = authenticated;
      });
      this.profileService.showLoader.subscribe(function (show) {
        _this.showLoader = show;
      });
    };

    AppComponent.ctorParameters = function () {
      return [{
        type: _services_ProfileService__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _containers_components_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./containers/components/dashboard.component */
    "./src/app/containers/components/dashboard.component.ts");
    /* harmony import */


    var _containers_components_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./containers/components/login.component */
    "./src/app/containers/components/login.component.ts");
    /* harmony import */


    var _containers_components_entrypoint_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./containers/components/entrypoint.component */
    "./src/app/containers/components/entrypoint.component.ts");
    /* harmony import */


    var _containers_components_signup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./containers/components/signup.component */
    "./src/app/containers/components/signup.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _app_containers_components_searchbox_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../app/containers/components/searchbox.component */
    "./src/app/containers/components/searchbox.component.ts");
    /* harmony import */


    var _containers_components_searchresults_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./containers/components/searchresults.component */
    "./src/app/containers/components/searchresults.component.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _containers_components_header_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./containers/components/header.component */
    "./src/app/containers/components/header.component.ts");
    /* harmony import */


    var _containers_components_moviedetails_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./containers/components/moviedetails.component */
    "./src/app/containers/components/moviedetails.component.ts");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./interceptors/auth.interceptor */
    "./src/app/interceptors/auth.interceptor.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _containers_components_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"], _containers_components_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _app_containers_components_searchbox_component__WEBPACK_IMPORTED_MODULE_19__["SearchboxComponent"], _containers_components_searchresults_component__WEBPACK_IMPORTED_MODULE_20__["SearchResultsComponent"], _containers_components_entrypoint_component__WEBPACK_IMPORTED_MODULE_12__["EntryPointComponent"], _containers_components_signup_component__WEBPACK_IMPORTED_MODULE_13__["SignUpComponent"], _containers_components_header_component__WEBPACK_IMPORTED_MODULE_22__["HeaderComponent"], _containers_components_moviedetails_component__WEBPACK_IMPORTED_MODULE_23__["MovieDetailsComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__["MatSnackBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__["MatProgressSpinnerModule"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HTTP_INTERCEPTORS"],
        useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_25__["AuthInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/containers/components/dashboard.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/containers/components/dashboard.component.ts ***!
    \**************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppContainersComponentsDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_ProfileService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/ProfileService */
    "./src/app/services/ProfileService.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(http, profileService, router) {
        _classCallCheck(this, DashboardComponent);

        this.http = http;
        this.profileService = profileService;
        this.router = router;
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.http.get('/api/dashboard').subscribe(function (data) {
            _this2.categories = data;
          });
        }
      }, {
        key: "moviedetails",
        value: function moviedetails(movieid) {
          this.router.navigate(["moviedetails", movieid]);
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _services_ProfileService__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'dimo-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!../views/dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/views/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../styles/scss/dashboard.component.scss */
      "./src/app/containers/styles/scss/dashboard.component.scss")).default]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/containers/components/entrypoint.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/containers/components/entrypoint.component.ts ***!
    \***************************************************************/

  /*! exports provided: EntryPointComponent */

  /***/
  function srcAppContainersComponentsEntrypointComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EntryPointComponent", function () {
      return EntryPointComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_ProfileService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/ProfileService */
    "./src/app/services/ProfileService.ts");

    var EntryPointComponent = function EntryPointComponent(http, profileService) {
      _classCallCheck(this, EntryPointComponent);

      this.http = http;
      this.profileService = profileService;
    };

    EntryPointComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _services_ProfileService__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]
      }];
    };

    EntryPointComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "dimo-entrypoint",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!../views/entrypoint.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/views/entrypoint.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../styles/scss/entrypoint.component.scss */
      "./src/app/containers/styles/scss/entrypoint.component.scss")).default]
    })], EntryPointComponent);
    /***/
  },

  /***/
  "./src/app/containers/components/header.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/containers/components/header.component.ts ***!
    \***********************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppContainersComponentsHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(router) {
        _classCallCheck(this, HeaderComponent);

        this.router = router;
      }

      _createClass(HeaderComponent, [{
        key: "goToDashboard",
        value: function goToDashboard() {
          this.router.navigateByUrl('dashboard');
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "dimo-header",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!../views/header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/views/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../styles/scss/header.component.scss */
      "./src/app/containers/styles/scss/header.component.scss")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/containers/components/login.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/containers/components/login.component.ts ***!
    \**********************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppContainersComponentsLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_ProfileService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/ProfileService */
    "./src/app/services/ProfileService.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(http, profileService, router) {
        _classCallCheck(this, LoginComponent);

        this.http = http;
        this.profileService = profileService;
        this.router = router;
        this.hide = true;
        this.showErr = false;
      }

      _createClass(LoginComponent, [{
        key: "onSubmit",
        value: function onSubmit(form) {
          var _this3 = this;

          var credentials = {
            email: form.value.email,
            password: form.value.password
          };
          this.http.post("/api/users/login", credentials).subscribe(function (data) {
            var response = data;

            _this3.profileService.setToken(response.token);

            _this3.router.navigate(["dashboard"]);
          }, function (err) {
            _this3.showErr = true;
            console.log(err);
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _services_ProfileService__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "dimo-login",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!../views/login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/views/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../styles/scss/login.component.scss */
      "./src/app/containers/styles/scss/login.component.scss")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/containers/components/moviedetails.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/containers/components/moviedetails.component.ts ***!
    \*****************************************************************/

  /*! exports provided: MovieDetailsComponent */

  /***/
  function srcAppContainersComponentsMoviedetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovieDetailsComponent", function () {
      return MovieDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_ProfileService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/ProfileService */
    "./src/app/services/ProfileService.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var MovieDetailsComponent =
    /*#__PURE__*/
    function () {
      function MovieDetailsComponent(http, profileService, route, router) {
        var _this4 = this;

        _classCallCheck(this, MovieDetailsComponent);

        this.http = http;
        this.profileService = profileService;
        this.route = route;
        this.router = router;
        this.route.params.subscribe(function (params) {
          if (params['id']) {
            _this4.doSearch(params['id']);
          }
        });
      }

      _createClass(MovieDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "doSearch",
        value: function doSearch(id) {
          var _this5 = this;

          var url = "/api/movie/" + id;
          this.http.get(url).subscribe(function (data) {
            var response = data;
            var movieDetails = response && response.data ? response.data : null;
            console.log(movieDetails);
            _this5.moviedetails = movieDetails;
          });
        }
      }]);

      return MovieDetailsComponent;
    }();

    MovieDetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _services_ProfileService__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    MovieDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'dimo-moviedetails',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!../views/moviedetails.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/views/moviedetails.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../styles/scss/moviedetails.component.scss */
      "./src/app/containers/styles/scss/moviedetails.component.scss")).default]
    })], MovieDetailsComponent);
    /***/
  },

  /***/
  "./src/app/containers/components/searchbox.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/containers/components/searchbox.component.ts ***!
    \**************************************************************/

  /*! exports provided: SearchboxComponent */

  /***/
  function srcAppContainersComponentsSearchboxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchboxComponent", function () {
      return SearchboxComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_SearchResultStateService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/SearchResultStateService */
    "./src/app/services/SearchResultStateService.ts");

    var SearchboxComponent =
    /*#__PURE__*/
    function () {
      function SearchboxComponent(http, router, searchResultStateService) {
        _classCallCheck(this, SearchboxComponent);

        this.http = http;
        this.router = router;
        this.searchResultStateService = searchResultStateService;
        this.searchStr = '';
      }

      _createClass(SearchboxComponent, [{
        key: "onSearch",
        value: function onSearch() {
          var _this6 = this;

          var keyword = this.searchStr;
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('searchString', keyword);
          this.http.get("/api/search", {
            params: params
          }).subscribe(function (data) {
            var movies = data;

            _this6.router.navigate(["searchresults"]);

            _this6.searchResultStateService.subject.next(movies);
          });
        }
      }]);

      return SearchboxComponent;
    }();

    SearchboxComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_services_SearchResultStateService__WEBPACK_IMPORTED_MODULE_4__["SearchResultStateService"]
      }];
    };

    SearchboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "searchbox",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!../views/searchbox.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/views/searchbox.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../styles/scss/searchbox.component.scss */
      "./src/app/containers/styles/scss/searchbox.component.scss")).default]
    })], SearchboxComponent);
    /***/
  },

  /***/
  "./src/app/containers/components/searchresults.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/containers/components/searchresults.component.ts ***!
    \******************************************************************/

  /*! exports provided: SearchResultsComponent */

  /***/
  function srcAppContainersComponentsSearchresultsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchResultsComponent", function () {
      return SearchResultsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_SearchResultStateService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/SearchResultStateService */
    "./src/app/services/SearchResultStateService.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var SearchResultsComponent =
    /*#__PURE__*/
    function () {
      function SearchResultsComponent(searchResultStateService, router) {
        _classCallCheck(this, SearchResultsComponent);

        this.searchResultStateService = searchResultStateService;
        this.router = router;
      }

      _createClass(SearchResultsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.searchResultStateService.subject.subscribe(function (movieList) {
            _this7.movies = movieList;
          });
        }
      }, {
        key: "moviedetails",
        value: function moviedetails(movieid) {
          this.router.navigate(["moviedetails", movieid]);
        }
      }]);

      return SearchResultsComponent;
    }();

    SearchResultsComponent.ctorParameters = function () {
      return [{
        type: src_app_services_SearchResultStateService__WEBPACK_IMPORTED_MODULE_2__["SearchResultStateService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    SearchResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "searchresults",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!../views/searchresults.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/views/searchresults.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../styles/scss/searchresults.component.scss */
      "./src/app/containers/styles/scss/searchresults.component.scss")).default]
    })], SearchResultsComponent);
    /***/
  },

  /***/
  "./src/app/containers/components/signup.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/containers/components/signup.component.ts ***!
    \***********************************************************/

  /*! exports provided: SignUpComponent */

  /***/
  function srcAppContainersComponentsSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () {
      return SignUpComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_ProfileService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/ProfileService */
    "./src/app/services/ProfileService.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");

    var SignUpComponent =
    /*#__PURE__*/
    function () {
      function SignUpComponent(http, profileService, router, _snackBar) {
        _classCallCheck(this, SignUpComponent);

        this.http = http;
        this.profileService = profileService;
        this.router = router;
        this._snackBar = _snackBar;
        this.submitted = false;
        this.hide = true;
      }

      _createClass(SignUpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
          }, this.checkPasswords);
        }
      }, {
        key: "checkPasswords",
        value: function checkPasswords(userForm) {
          if (userForm) {
            var pass = userForm.get('password') && userForm.get('password').value ? userForm.get('password').value : '';
            var confirmPass = userForm.get('confirmPassword') && userForm.get('confirmPassword').value ? userForm.get('confirmPassword').value : '';
            return pass === confirmPass ? null : {
              notSame: true
            };
          }

          return null;
        }
      }, {
        key: "message",
        value: function message(_message) {
          this._snackBar.open(_message, null, {
            duration: 8000
          });
        }
      }, {
        key: "onSignup",
        value: function onSignup() {
          var _this8 = this;

          var user = {
            firstName: this.userForm.controls['firstName'].value,
            lastName: this.userForm.controls['lastName'].value,
            email: this.userForm.controls['email'].value,
            password: this.userForm.controls['password'].value
          };
          if (!(user.firstName && user.lastName && user.email && user.password)) return;
          var headers = {
            'Content-Type': 'application/json'
          };
          this.http.post("/api/users/register", user, {
            headers: headers
          }).subscribe(function () {
            _this8.router.navigateByUrl('/');

            _this8.message("User registered successfully. Please proceed to login.");
          }, function (err) {
            _this8.userForm.reset();

            _this8.message("User already exists. Please try with different email address.");
          });
        }
      }, {
        key: "isErrorState",
        value: function isErrorState(control, form) {
          return false;
        }
      }]);

      return SignUpComponent;
    }();

    SignUpComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _services_ProfileService__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
      }];
    };

    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "dimo-signup",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!../views/signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/views/signup.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../styles/scss/signup.component.scss */
      "./src/app/containers/styles/scss/signup.component.scss")).default]
    })], SignUpComponent);
    /***/
  },

  /***/
  "./src/app/containers/styles/scss/dashboard.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/containers/styles/scss/dashboard.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContainersStylesScssDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".dashboard-caontainer {\n  background: #efefef;\n}\n.dashboard-caontainer .category-container {\n  height: 50vh;\n  padding: 10px;\n}\n.dashboard-caontainer .category-container .category-title {\n  padding: 15px;\n}\n.dashboard-caontainer .category-container .category-title .title {\n  font-size: 23px;\n  color: gray;\n  font-weight: 500;\n  display: inline-block;\n  width: 50%;\n  text-transform: uppercase;\n}\n.dashboard-caontainer .category-container .category-title .see-all {\n  display: inline-block;\n  width: 50%;\n  text-align: right;\n  font-size: 16px;\n  text-transform: uppercase;\n}\n.dashboard-caontainer .category-container .custom-card {\n  width: 260px;\n  display: inline-block;\n  margin-top: 15px;\n  margin-left: 15px;\n  margin-right: 15px;\n}\n.dashboard-caontainer .category-container .custom-card .mat-card-title {\n  margin-top: 0;\n  height: 30px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.dashboard-caontainer .category-container .custom-card .mat-card-subtitle {\n  height: 15px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.dashboard-caontainer .category-container .custom-card img {\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aW5vZHNuL0lkZWFQcm9qZWN0cy9kaW1vLWFwcGxpY2F0aW9uL2RpbW8tYXBwbGljYXRpb24vZGltby11aS9zcmMvYXBwL2NvbnRhaW5lcnMvc3R5bGVzL3Njc3MvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWluZXJzL3N0eWxlcy9zY3NzL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0Y7QURDRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDQ0o7QURDSTtFQUNFLGFBQUE7QUNDTjtBREFNO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FDRVI7QURDTTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDQ1I7QURHSTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0ROO0FER007RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0RSO0FESU07RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDRlI7QURLTTtFQUNFLGFBQUE7QUNIUiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvc3R5bGVzL3Njc3MvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhc2hib2FyZC1jYW9udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcblxuICAuY2F0ZWdvcnktY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDUwdmg7XG4gICAgcGFkZGluZzogMTBweDtcblxuICAgIC5jYXRlZ29yeS10aXRsZSB7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgfVxuXG4gICAgICAuc2VlLWFsbCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY3VzdG9tLWNhcmQge1xuICAgICAgd2lkdGg6IDI2MHB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuXG4gICAgICAubWF0LWNhcmQtdGl0bGUge1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgfVxuXG4gICAgICAubWF0LWNhcmQtc3VidGl0bGUge1xuICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgfVxuXG4gICAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLmRhc2hib2FyZC1jYW9udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbn1cbi5kYXNoYm9hcmQtY2FvbnRhaW5lciAuY2F0ZWdvcnktY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA1MHZoO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmRhc2hib2FyZC1jYW9udGFpbmVyIC5jYXRlZ29yeS1jb250YWluZXIgLmNhdGVnb3J5LXRpdGxlIHtcbiAgcGFkZGluZzogMTVweDtcbn1cbi5kYXNoYm9hcmQtY2FvbnRhaW5lciAuY2F0ZWdvcnktY29udGFpbmVyIC5jYXRlZ29yeS10aXRsZSAudGl0bGUge1xuICBmb250LXNpemU6IDIzcHg7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXdlaWdodDogNTAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA1MCU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uZGFzaGJvYXJkLWNhb250YWluZXIgLmNhdGVnb3J5LWNvbnRhaW5lciAuY2F0ZWdvcnktdGl0bGUgLnNlZS1hbGwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA1MCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uZGFzaGJvYXJkLWNhb250YWluZXIgLmNhdGVnb3J5LWNvbnRhaW5lciAuY3VzdG9tLWNhcmQge1xuICB3aWR0aDogMjYwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5kYXNoYm9hcmQtY2FvbnRhaW5lciAuY2F0ZWdvcnktY29udGFpbmVyIC5jdXN0b20tY2FyZCAubWF0LWNhcmQtdGl0bGUge1xuICBtYXJnaW4tdG9wOiAwO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLmRhc2hib2FyZC1jYW9udGFpbmVyIC5jYXRlZ29yeS1jb250YWluZXIgLmN1c3RvbS1jYXJkIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XG4gIGhlaWdodDogMTVweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4uZGFzaGJvYXJkLWNhb250YWluZXIgLmNhdGVnb3J5LWNvbnRhaW5lciAuY3VzdG9tLWNhcmQgaW1nIHtcbiAgaGVpZ2h0OiAzMDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/containers/styles/scss/entrypoint.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/containers/styles/scss/entrypoint.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContainersStylesScssEntrypointComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  margin: auto;\n  width: 50%;\n  border: 3px solid green;\n  padding: 10px;\n}\n\n.entrypoint-container {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 100vh;\n  background: url('login.jpg');\n}\n\n.entrypoint-container .container-item {\n  border-radius: 7px;\n  width: 500px;\n  box-shadow: 0px 10px 20px 0px rgba(50, 50, 50, 0.52);\n  border-color: #ddd;\n  border: 1px solid transparent;\n  background: aliceblue;\n  height: 38%;\n  align-self: center;\n}\n\n.entrypoint-container .container-item .login-dimo-logo {\n  position: fixed;\n  top: 14%;\n  left: 44%;\n}\n\n.entrypoint-container .container-item .login-dimo-logo .logo-img {\n  height: 80px;\n}\n\n.entrypoint-container .container-item .mat-tab-labels .mat-tab-label {\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aW5vZHNuL0lkZWFQcm9qZWN0cy9kaW1vLWFwcGxpY2F0aW9uL2RpbW8tYXBwbGljYXRpb24vZGltby11aS9zcmMvYXBwL2NvbnRhaW5lcnMvc3R5bGVzL3Njc3MvZW50cnlwb2ludC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFpbmVycy9zdHlsZXMvc2Nzcy9lbnRyeXBvaW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsYUFBQTtFQUVBLDRCQUFBO0FDQUY7O0FERUU7RUFnQkUsa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0RBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNmSjs7QURQSTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQ1NOOztBRFBNO0VBQ0UsWUFBQTtBQ1NSOztBRExNO0VBQ0UsVUFBQTtBQ09SIiwiZmlsZSI6InNyYy9hcHAvY29udGFpbmVycy9zdHlsZXMvc2Nzcy9lbnRyeXBvaW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDUwJTtcbiAgYm9yZGVyOiAzcHggc29saWQgZ3JlZW47XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5lbnRyeXBvaW50LWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcblxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvbG9naW4uanBnXCIpO1xuXG4gIC5jb250YWluZXItaXRlbSB7XG4gICAgLmxvZ2luLWRpbW8tbG9nbyB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6IDE0JTtcbiAgICAgIGxlZnQ6IDQ0JTtcblxuICAgICAgLmxvZ28taW1nIHtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgfVxuICAgIH1cbiAgICAubWF0LXRhYi1sYWJlbHMge1xuICAgICAgLm1hdC10YWItbGFiZWwge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCAwcHggcmdiYSg1MCwgNTAsIDUwLCAwLjUyKTtcbiAgICBib3JkZXItY29sb3I6ICNkZGQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZDogYWxpY2VibHVlO1xuICAgIGhlaWdodDogMzglO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgfVxufVxuIiwiLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDUwJTtcbiAgYm9yZGVyOiAzcHggc29saWQgZ3JlZW47XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5lbnRyeXBvaW50LWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2xvZ2luLmpwZ1wiKTtcbn1cbi5lbnRyeXBvaW50LWNvbnRhaW5lciAuY29udGFpbmVyLWl0ZW0ge1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIHdpZHRoOiA1MDBweDtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCAwcHggcmdiYSg1MCwgNTAsIDUwLCAwLjUyKTtcbiAgYm9yZGVyLWNvbG9yOiAjZGRkO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZDogYWxpY2VibHVlO1xuICBoZWlnaHQ6IDM4JTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLmVudHJ5cG9pbnQtY29udGFpbmVyIC5jb250YWluZXItaXRlbSAubG9naW4tZGltby1sb2dvIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDE0JTtcbiAgbGVmdDogNDQlO1xufVxuLmVudHJ5cG9pbnQtY29udGFpbmVyIC5jb250YWluZXItaXRlbSAubG9naW4tZGltby1sb2dvIC5sb2dvLWltZyB7XG4gIGhlaWdodDogODBweDtcbn1cbi5lbnRyeXBvaW50LWNvbnRhaW5lciAuY29udGFpbmVyLWl0ZW0gLm1hdC10YWItbGFiZWxzIC5tYXQtdGFiLWxhYmVsIHtcbiAgd2lkdGg6IDUwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/containers/styles/scss/header.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/containers/styles/scss/header.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContainersStylesScssHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".dimo-header {\n  height: 60px;\n  background: black;\n  padding: 5px 15px;\n  color: white;\n}\n.dimo-header .logo {\n  display: inline-block;\n  width: 40%;\n}\n.dimo-header .logo .logo-img {\n  cursor: pointer;\n  height: 35px;\n}\n.dimo-header .search {\n  text-align: right;\n  display: inline-block;\n  width: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aW5vZHNuL0lkZWFQcm9qZWN0cy9kaW1vLWFwcGxpY2F0aW9uL2RpbW8tYXBwbGljYXRpb24vZGltby11aS9zcmMvYXBwL2NvbnRhaW5lcnMvc3R5bGVzL3Njc3MvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWluZXJzL3N0eWxlcy9zY3NzL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0NGO0FEQ0U7RUFDRSxxQkFBQTtFQUNBLFVBQUE7QUNDSjtBREFJO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNFTjtBREVFO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvc3R5bGVzL3Njc3MvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpbW8taGVhZGVyIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcblxuICAubG9nbyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA0MCU7XG4gICAgLmxvZ28taW1nIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGhlaWdodDogMzVweDtcbiAgICB9XG4gIH1cblxuICAuc2VhcmNoIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxufVxuIiwiLmRpbW8taGVhZGVyIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5kaW1vLWhlYWRlciAubG9nbyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDQwJTtcbn1cbi5kaW1vLWhlYWRlciAubG9nbyAubG9nby1pbWcge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMzVweDtcbn1cbi5kaW1vLWhlYWRlciAuc2VhcmNoIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDYwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/containers/styles/scss/login.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/containers/styles/scss/login.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContainersStylesScssLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".example-full-width {\n  display: inline-block;\n}\n\n.login-container {\n  height: 30vh;\n}\n\n.login-container .example-full-width {\n  width: 90%;\n  padding: 20px;\n}\n\n.login-container .login-btn {\n  position: absolute;\n  bottom: 20px;\n  margin-left: 20px;\n}\n\n.btn-block:hover, .btn-block:focus, .btn-block.focus, .btn-block:active, .btn-block.active, .open > .dropdown-toggle.btn-block {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #398439;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aW5vZHNuL0lkZWFQcm9qZWN0cy9kaW1vLWFwcGxpY2F0aW9uL2RpbW8tYXBwbGljYXRpb24vZGltby11aS9zcmMvYXBwL2NvbnRhaW5lcnMvc3R5bGVzL3Njc3MvbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbnRhaW5lcnMvc3R5bGVzL3Njc3MvbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQ0NGOztBREdBO0VBQ0UsWUFBQTtBQ0FGOztBREVFO0VBQ0UsVUFBQTtFQUNBLGFBQUE7QUNBSjs7QURHRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDREo7O0FETUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvY29udGFpbmVycy9zdHlsZXMvc2Nzcy9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZ1bGwtd2lkdGh7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuXG4ubG9naW4tY29udGFpbmVye1xuICBoZWlnaHQgOiAzMHZoO1xuXG4gIC5leGFtcGxlLWZ1bGwtd2lkdGh7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG5cbiAgLmxvZ2luLWJ0bntcbiAgICBwb3NpdGlvbiA6IGFic29sdXRlO1xuICAgIGJvdHRvbSA6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cbn1cblxuXG4uYnRuLWJsb2NrOmhvdmVyLCAuYnRuLWJsb2NrOmZvY3VzLCAuYnRuLWJsb2NrLmZvY3VzLCAuYnRuLWJsb2NrOmFjdGl2ZSwgLmJ0bi1ibG9jay5hY3RpdmUsIC5vcGVuID4gLmRyb3Bkb3duLXRvZ2dsZS5idG4tYmxvY2sge1xuICBjb2xvciA6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3IgOiAjNDQ5ZDQ0O1xuICBib3JkZXItY29sb3IgOiAjMzk4NDM5O1xufVxuIiwiLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmxvZ2luLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMzB2aDtcbn1cbi5sb2dpbi1jb250YWluZXIgLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiA5MCU7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4ubG9naW4tY29udGFpbmVyIC5sb2dpbi1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5idG4tYmxvY2s6aG92ZXIsIC5idG4tYmxvY2s6Zm9jdXMsIC5idG4tYmxvY2suZm9jdXMsIC5idG4tYmxvY2s6YWN0aXZlLCAuYnRuLWJsb2NrLmFjdGl2ZSwgLm9wZW4gPiAuZHJvcGRvd24tdG9nZ2xlLmJ0bi1ibG9jayB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ5ZDQ0O1xuICBib3JkZXItY29sb3I6ICMzOTg0Mzk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/containers/styles/scss/moviedetails.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/containers/styles/scss/moviedetails.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContainersStylesScssMoviedetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".image {\n  height: 500px;\n  width: 500px;\n}\n\n.container {\n  margin: 40px;\n}\n\n.title {\n  margin-bottom: 12px;\n  font-size: 35px;\n  line-height: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aW5vZHNuL0lkZWFQcm9qZWN0cy9kaW1vLWFwcGxpY2F0aW9uL2RpbW8tYXBwbGljYXRpb24vZGltby11aS9zcmMvYXBwL2NvbnRhaW5lcnMvc3R5bGVzL3Njc3MvbW92aWVkZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWluZXJzL3N0eWxlcy9zY3NzL21vdmllZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FERUE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29udGFpbmVycy9zdHlsZXMvc2Nzcy9tb3ZpZWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2V7XG4gIGhlaWdodDogNTAwcHg7XG4gIHdpZHRoOiA1MDBweDtcbn1cblxuXG4uY29udGFpbmVye1xuICBtYXJnaW46IDQwcHg7XG59XG4udGl0bGV7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG59XG4iLCIuaW1hZ2Uge1xuICBoZWlnaHQ6IDUwMHB4O1xuICB3aWR0aDogNTAwcHg7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW46IDQwcHg7XG59XG5cbi50aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/containers/styles/scss/searchbox.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/containers/styles/scss/searchbox.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContainersStylesScssSearchboxComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".searchbox-container .search-box {\n  width: 75%;\n  position: relative;\n  background: white;\n  height: 40px;\n  border: 1px solid lightgray;\n  border-radius: 4px;\n  margin-right: 12px;\n  padding-left: 5px;\n  font-size: 16px;\n}\n.searchbox-container .search-icon {\n  color: black;\n  font-size: 30px;\n  position: absolute;\n  right: 34px;\n  top: 20px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aW5vZHNuL0lkZWFQcm9qZWN0cy9kaW1vLWFwcGxpY2F0aW9uL2RpbW8tYXBwbGljYXRpb24vZGltby11aS9zcmMvYXBwL2NvbnRhaW5lcnMvc3R5bGVzL3Njc3Mvc2VhcmNoYm94LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWluZXJzL3N0eWxlcy9zY3NzL3NlYXJjaGJveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNLLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNDLGlCQUFBO0VBQ0QsZUFBQTtBQ0FQO0FER0U7RUFDRSxZQUFBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9jb250YWluZXJzL3N0eWxlcy9zY3NzL3NlYXJjaGJveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2hib3gtY29udGFpbmVye1xuICAuc2VhcmNoLWJveHtcbiAgICAgICB3aWR0aDogNzUlO1xuICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgICAgIHBhZGRpbmctbGVmdCA6IDVweDtcbiAgICAgICBmb250LXNpemUgOiAxNnB4O1xuICB9XG5cbiAgLnNlYXJjaC1pY29ue1xuICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAzNHB4O1xuICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuIiwiLnNlYXJjaGJveC1jb250YWluZXIgLnNlYXJjaC1ib3gge1xuICB3aWR0aDogNzUlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uc2VhcmNoYm94LWNvbnRhaW5lciAuc2VhcmNoLWljb24ge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMzRweDtcbiAgdG9wOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/containers/styles/scss/searchresults.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/containers/styles/scss/searchresults.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContainersStylesScssSearchresultsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".dashboard-caontainer {\n  background: #efefef;\n}\n.dashboard-caontainer .category-container {\n  height: 90vh;\n  overflow-y: auto;\n  padding: 10px;\n}\n.dashboard-caontainer .category-container .category-title {\n  padding: 15px;\n}\n.dashboard-caontainer .category-container .category-title .title {\n  font-size: 23px;\n  color: gray;\n  font-weight: 500;\n  display: inline-block;\n  width: 50%;\n  text-transform: uppercase;\n}\n.dashboard-caontainer .category-container .category-title .see-all {\n  display: inline-block;\n  width: 50%;\n  text-align: right;\n  font-size: 16px;\n  text-transform: uppercase;\n}\n.dashboard-caontainer .category-container .custom-card {\n  width: 260px;\n  display: inline-block;\n  margin-top: 15px;\n  margin-left: 15px;\n  margin-right: 15px;\n}\n.dashboard-caontainer .category-container .custom-card .mat-card-title {\n  margin-top: 0;\n  height: 30px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.dashboard-caontainer .category-container .custom-card .mat-card-subtitle {\n  height: 15px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.dashboard-caontainer .category-container .custom-card img {\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aW5vZHNuL0lkZWFQcm9qZWN0cy9kaW1vLWFwcGxpY2F0aW9uL2RpbW8tYXBwbGljYXRpb24vZGltby11aS9zcmMvYXBwL2NvbnRhaW5lcnMvc3R5bGVzL3Njc3Mvc2VhcmNocmVzdWx0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFpbmVycy9zdHlsZXMvc2Nzcy9zZWFyY2hyZXN1bHRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUNDRjtBRENFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0NKO0FEQ0k7RUFDRSxhQUFBO0FDQ047QURBTTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQ0VSO0FEQ007RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ0NSO0FER0k7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNETjtBREdNO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNEUjtBRElNO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0ZSO0FES007RUFDRSxhQUFBO0FDSFIiLCJmaWxlIjoic3JjL2FwcC9jb250YWluZXJzL3N0eWxlcy9zY3NzL3NlYXJjaHJlc3VsdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFzaGJvYXJkLWNhb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuXG4gIC5jYXRlZ29yeS1jb250YWluZXIge1xuICAgIGhlaWdodDogOTB2aDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICAuY2F0ZWdvcnktdGl0bGUge1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgIC50aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIH1cblxuICAgICAgLnNlZS1hbGwge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmN1c3RvbS1jYXJkIHtcbiAgICAgIHdpZHRoOiAyNjBweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcblxuICAgICAgLm1hdC1jYXJkLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIH1cblxuICAgICAgLm1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIH1cblxuICAgICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5kYXNoYm9hcmQtY2FvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG59XG4uZGFzaGJvYXJkLWNhb250YWluZXIgLmNhdGVnb3J5LWNvbnRhaW5lciB7XG4gIGhlaWdodDogOTB2aDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZzogMTBweDtcbn1cbi5kYXNoYm9hcmQtY2FvbnRhaW5lciAuY2F0ZWdvcnktY29udGFpbmVyIC5jYXRlZ29yeS10aXRsZSB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4uZGFzaGJvYXJkLWNhb250YWluZXIgLmNhdGVnb3J5LWNvbnRhaW5lciAuY2F0ZWdvcnktdGl0bGUgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmRhc2hib2FyZC1jYW9udGFpbmVyIC5jYXRlZ29yeS1jb250YWluZXIgLmNhdGVnb3J5LXRpdGxlIC5zZWUtYWxsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmRhc2hib2FyZC1jYW9udGFpbmVyIC5jYXRlZ29yeS1jb250YWluZXIgLmN1c3RvbS1jYXJkIHtcbiAgd2lkdGg6IDI2MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4uZGFzaGJvYXJkLWNhb250YWluZXIgLmNhdGVnb3J5LWNvbnRhaW5lciAuY3VzdG9tLWNhcmQgLm1hdC1jYXJkLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5kYXNoYm9hcmQtY2FvbnRhaW5lciAuY2F0ZWdvcnktY29udGFpbmVyIC5jdXN0b20tY2FyZCAubWF0LWNhcmQtc3VidGl0bGUge1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLmRhc2hib2FyZC1jYW9udGFpbmVyIC5jYXRlZ29yeS1jb250YWluZXIgLmN1c3RvbS1jYXJkIGltZyB7XG4gIGhlaWdodDogMzAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/containers/styles/scss/signup.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/containers/styles/scss/signup.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContainersStylesScssSignupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".signup-container .mat-form-field {\n  width: 45%;\n}\n.signup-container .signup-btn {\n  margin-left: 10px;\n}\n.dimo-field {\n  margin: 10px;\n  display: inline-block;\n}\n.btn-block {\n  cursor: pointer;\n  border-radius: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aW5vZHNuL0lkZWFQcm9qZWN0cy9kaW1vLWFwcGxpY2F0aW9uL2RpbW8tYXBwbGljYXRpb24vZGltby11aS9zcmMvYXBwL2NvbnRhaW5lcnMvc3R5bGVzL3Njc3Mvc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWluZXJzL3N0eWxlcy9zY3NzL3NpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFVBQUE7QUNBSjtBREdHO0VBQ0MsaUJBQUE7QUNESjtBREtBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0FDRkY7QURLQTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvY29udGFpbmVycy9zdHlsZXMvc2Nzcy9zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbnVwLWNvbnRhaW5lciB7XG4gIC5tYXQtZm9ybS1maWVsZHtcbiAgICB3aWR0aCA6IDQ1JTtcbiAgIH1cblxuICAgLnNpZ251cC1idG57XG4gICAgbWFyZ2luLWxlZnQgOiAxMHB4O1xuICAgfVxufVxuXG4uZGltby1maWVsZHtcbiAgbWFyZ2luOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5idG4tYmxvY2t7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xufVxuIiwiLnNpZ251cC1jb250YWluZXIgLm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDQ1JTtcbn1cbi5zaWdudXAtY29udGFpbmVyIC5zaWdudXAtYnRuIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5kaW1vLWZpZWxkIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5idG4tYmxvY2sge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/interceptors/auth.interceptor.ts":
  /*!**************************************************!*\
    !*** ./src/app/interceptors/auth.interceptor.ts ***!
    \**************************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppInterceptorsAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_ProfileService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/ProfileService */
    "./src/app/services/ProfileService.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AuthInterceptor =
    /*#__PURE__*/
    function () {
      function AuthInterceptor(profileService) {
        _classCallCheck(this, AuthInterceptor);

        this.profileService = profileService;
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this9 = this;

          this.profileService.showLoader.next(true);
          var token = this.profileService.getToken();
          var newHeaders = req.headers;

          if (token) {
            newHeaders = newHeaders.append('Authorization', 'Bearer ' + token);
          }

          var authReq = req.clone({
            headers: newHeaders
          });
          return next.handle(authReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
            _this9.profileService.showLoader.next(false);
          }));
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ctorParameters = function () {
      return [{
        type: _services_ProfileService__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]
      }];
    };

    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
      providedIn: 'root'
    })], AuthInterceptor);
    /***/
  },

  /***/
  "./src/app/services/ProfileService.ts":
  /*!********************************************!*\
    !*** ./src/app/services/ProfileService.ts ***!
    \********************************************/

  /*! exports provided: ProfileService */

  /***/
  function srcAppServicesProfileServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileService", function () {
      return ProfileService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ProfileService =
    /*#__PURE__*/
    function () {
      function ProfileService() {
        _classCallCheck(this, ProfileService);

        this.isAuthenticated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.showLoader = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(ProfileService, [{
        key: "setToken",
        value: function setToken(token) {
          this.token = token;
          this.isAuthenticated.next(true);
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return this.token;
        }
      }]);

      return ProfileService;
    }();

    ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProfileService);
    /***/
  },

  /***/
  "./src/app/services/SearchResultStateService.ts":
  /*!******************************************************!*\
    !*** ./src/app/services/SearchResultStateService.ts ***!
    \******************************************************/

  /*! exports provided: SearchResultStateService */

  /***/
  function srcAppServicesSearchResultStateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchResultStateService", function () {
      return SearchResultStateService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var SearchResultStateService = function SearchResultStateService() {
      _classCallCheck(this, SearchResultStateService);

      this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    };

    SearchResultStateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SearchResultStateService);
    /***/
  },

  /***/
  "./src/app/services/route-gaurd.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/route-gaurd.ts ***!
    \*****************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppServicesRouteGaurdTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ProfileService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ProfileService */
    "./src/app/services/ProfileService.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(proifileService, router) {
        _classCallCheck(this, AuthGuard);

        this.proifileService = proifileService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (this.proifileService.getToken()) {
            return true;
          }

          this.router.navigate(['/']);
          return false;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _ProfileService__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/vinodsn/IdeaProjects/dimo-application/dimo-application/dimo-ui/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map