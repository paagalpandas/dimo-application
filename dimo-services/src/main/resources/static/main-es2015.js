(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <mat-tab-group>\n  <mat-tab label=\"Register\">\n    <form>\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Use name\">\n      </mat-form-field>\n\n      <mat-form-field class=\"example-full-width\">\n        <input matInput=\"email\" placeholder=\"Email\">\n      </mat-form-field>\n\n      <mat-form-field class=\"example-full-width\">\n        <input matInput=\"password\" placeholder=\"Email\">\n      </mat-form-field>\n    </form>\n  </mat-tab>\n  <mat-tab label=\"Sign in\">\n    <mat-form-field class=\"example-full-width\">\n      <input matInput=\"search\" placeholder=\"Search here\">\n      <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">cross</mat-icon>\n    </mat-form-field>\n  </mat-tab>\n</mat-tab-group> -->\n\n\n<div class=\"dimo-header\">\n  <div class=\"logo\">\n    <h4>DIMO</h4>\n  </div>\n  <div class=\"search\">\n    <mat-form-field class=\"example-full-width\">\n      <input matInput=\"search\" placeholder=\"Search here\">\n      <mat-icon aria-hidden=\"false\" aria-label=\"Search icon\">search</mat-icon>\n    </mat-form-field>\n  </div>\n</div>\n<!--<dimo-dashboard></dimo-dashboard>-->\n<router-outlet></router-outlet>\n\n<!--<dimo-login></dimo-login>-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/views/dashboard.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/containers/views/dashboard.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dashboard-caontainer\">\n  <div class=\"category-container\" *ngFor=\"let category of categories\">\n    <div class=\"category-title\">\n      <div class=\"title\">{{category.category}}</div>\n      <div class=\"see-all\">See All</div>\n    </div>\n    <div>\n      <mat-card class=\"custom-card\" *ngFor=\"let movie of category.movies\">\n        <mat-card-title>{{movie.name}}</mat-card-title>\n        <mat-card-subtitle>{{movie.description}}</mat-card-subtitle>\n        <img mat-card-image [attr.src]=\"movie.thumbNail\">\n      </mat-card>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/views/entrypoint.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/containers/views/entrypoint.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"entrypoint-container\">\n  <mat-tab-group dynamicHeight>\n  <mat-tab label=\"Register\">\n      <dimo-signup></dimo-signup>\n  </mat-tab>\n\n  <mat-tab label=\"Log in\">\n    <dimo-login></dimo-login>\n  </mat-tab>\n</mat-tab-group>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/views/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/containers/views/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"box\">\n  <form class=\"example-form\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n    <mat-card-content>\n      <p>\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Email\" name=\"email\" ngModel>\n      </mat-form-field>\n      </p>\n      <p>\n      <mat-form-field class=\"example-full-width\">\n        <input type=\"password\" matInput placeholder=\"Password\" name=\"password\" ngModel>\n        <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n          <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n        </button>\n      </mat-form-field>\n      </p>\n\n    </mat-card-content>\n    <button mat-stroked-button color=\"accent\" class=\"btn-block\">Log in</button>\n  </form>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/views/signup.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/containers/views/signup.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"example-form\" #f=\"ngForm\" (ngSubmit)=\"onSignup(f)\">\n    <mat-card-content>\n      <p>\n      <mat-form-field class=\"dimo-field\">\n        <input matInput placeholder=\"Name\" name=\"name\"  required=true ngModel>\n      </mat-form-field>\n      </p>\n\n      <p>\n        <mat-form-field class=\"dimo-field\">\n          <input type=\"email\" matInput placeholder=\"Email\" name=\"email\" required=true [formControl]=\"emailFormControl\" ngModel>\n          <mat-error *ngIf=\"emailFormControl.hasError('email')\">\n              Please enter a valid email address\n            </mat-error>\n        </mat-form-field>\n      </p>\n\n      <p>\n        <mat-form-field class=\"dimo-field\">\n          <input type=\"password\" matInput placeholder=\"Password\" name=\"password\" [formControl]=\"passwordFormControl\" required = true ngModel [type]=\"hide ? 'password' : 'text'\" >\n          <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n            <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n            </button>\n            <mat-error *ngIf=\"passwordFormControl.hasError('password')\">\n              Please enter a password with minimum 8 characters.\n            </mat-error>\n        </mat-form-field>\n      </p>\n\n      <p>\n        <mat-form-field class=\"dimo-field\">\n          <input type=\"password\" matInput placeholder=\"Confirm Password\" name=\"confirmPassword\" [formControl]=\"passwordFormControl\" required = true>\n          <mat-error *ngIf=\"passwordFormControl.hasError('confirmPassword')\">\n            Please enter a valid email address\n          </mat-error>\n        </mat-form-field>\n      </p>\n\n    </mat-card-content>\n  <button mat-raised-button color=\"primary\">Register</button>\n  </form>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _containers_components_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/components/dashboard.component */ "./src/app/containers/components/dashboard.component.ts");
/* harmony import */ var _containers_components_entrypoint_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/components/entrypoint.component */ "./src/app/containers/components/entrypoint.component.ts");





const routes = [
    { path: '', redirectTo: '/entrypoint', pathMatch: 'full' },
    { path: 'dashboard', component: _containers_components_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'entrypoint', component: _containers_components_entrypoint_component__WEBPACK_IMPORTED_MODULE_4__["EntryPointComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dimo-header {\n  height: 65px;\n  background: black;\n  color: white;\n  padding: 0 15px;\n}\n.dimo-header .logo {\n  display: inline-block;\n  width: 40%;\n}\n.dimo-header .search {\n  display: inline-block;\n  width: 60%;\n  text-align: right;\n}\n.dimo-header .search mat-icon {\n  position: absolute;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFoYXQudGFuZWphL0Rvd25sb2Fkcy9kaW1vLWFwcGxpY2F0aW9uL2RpbW8tdWkvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ0Y7QURBRTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtBQ0VKO0FEQUU7RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQ0VKO0FEQUk7RUFDRSxrQkFBQTtFQUNBLFFBQUE7QUNFTiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaW1vLWhlYWRlciB7XG4gIGhlaWdodDogNjVweDtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMCAxNXB4O1xuICAubG9nbyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbiAgLnNlYXJjaCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG5cbiAgICBtYXQtaWNvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMDtcbiAgICB9XG4gIH1cbn1cblxuIiwiLmRpbW8taGVhZGVyIHtcbiAgaGVpZ2h0OiA2NXB4O1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG4uZGltby1oZWFkZXIgLmxvZ28ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA0MCU7XG59XG4uZGltby1oZWFkZXIgLnNlYXJjaCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDYwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uZGltby1oZWFkZXIgLnNlYXJjaCBtYXQtaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'DimoUi';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _containers_components_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./containers/components/dashboard.component */ "./src/app/containers/components/dashboard.component.ts");
/* harmony import */ var _containers_components_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./containers/components/login.component */ "./src/app/containers/components/login.component.ts");
/* harmony import */ var _containers_components_entrypoint_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./containers/components/entrypoint.component */ "./src/app/containers/components/entrypoint.component.ts");
/* harmony import */ var _containers_components_signup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./containers/components/signup.component */ "./src/app/containers/components/signup.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _containers_components_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
            _containers_components_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
            _containers_components_entrypoint_component__WEBPACK_IMPORTED_MODULE_12__["EntryPointComponent"],
            _containers_components_signup_component__WEBPACK_IMPORTED_MODULE_13__["SignUpComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/containers/components/dashboard.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/containers/components/dashboard.component.ts ***!
  \**************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_ProfileService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/ProfileService */ "./src/app/services/ProfileService.ts");




let DashboardComponent = class DashboardComponent {
    constructor(http, profileService) {
        this.http = http;
        this.profileService = profileService;
    }
    ngOnInit() {
        let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        header = header.append('Authorization', 'Bearer ' + this.profileService.getToken());
        this.http.get("/api/dashboard", { headers: header }).subscribe(data => {
            this.categories = data;
        });
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _services_ProfileService__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "dimo-dashboard",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!../views/dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/views/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../styles/scss/dashboard.component.scss */ "./src/app/containers/styles/scss/dashboard.component.scss")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/containers/components/entrypoint.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/containers/components/entrypoint.component.ts ***!
  \***************************************************************/
/*! exports provided: EntryPointComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryPointComponent", function() { return EntryPointComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_ProfileService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/ProfileService */ "./src/app/services/ProfileService.ts");




let EntryPointComponent = class EntryPointComponent {
    constructor(http, profileService) {
        this.http = http;
        this.profileService = profileService;
    }
};
EntryPointComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _services_ProfileService__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] }
];
EntryPointComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "dimo-entrypoint",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!../views/entrypoint.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/views/entrypoint.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../styles/scss/entrypoint.component.scss */ "./src/app/containers/styles/scss/entrypoint.component.scss")).default]
    })
], EntryPointComponent);



/***/ }),

/***/ "./src/app/containers/components/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/containers/components/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_ProfileService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/ProfileService */ "./src/app/services/ProfileService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let LoginComponent = class LoginComponent {
    constructor(http, profileService, router) {
        this.http = http;
        this.profileService = profileService;
        this.router = router;
        this.hide = true;
    }
    onSubmit(form) {
        console.log(form.value.password);
        console.log(form.value.email);
        var credentials = {
            email: form.value.email,
            password: form.value.password
        };
        this.http.post("http://localhost:5000/api/users/login", credentials)
            .subscribe(data => {
            let response = data;
            this.profileService.setToken(response.token);
            this.router.navigate(["dashboard"]);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _services_ProfileService__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "dimo-login",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!../views/login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/views/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../styles/scss/dashboard.component.scss */ "./src/app/containers/styles/scss/dashboard.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/containers/components/signup.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/containers/components/signup.component.ts ***!
  \***********************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_ProfileService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/ProfileService */ "./src/app/services/ProfileService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let SignUpComponent = class SignUpComponent {
    constructor(http, profileService, router) {
        this.http = http;
        this.profileService = profileService;
        this.router = router;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email);
        this.passwordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]);
        this.hide = true;
    }
    checkPasswords(signupgroup) {
        let pass = signupgroup.get('password').value;
        let confirmPass = signupgroup.get('confirmPass').value;
        return pass === confirmPass ? null : { notSame: true };
    }
    onSignup(form) {
        console.log(form.value);
        let User;
        this.http.post("http://localhost:5000/api/users/register", (User)).subscribe(data => {
            let response = data;
            this.profileService.setToken(response.token);
            // this.router.navigate(["dashboard"]);
        });
    }
};
SignUpComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _services_ProfileService__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "dimo-signup",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!../views/signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/views/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../styles/scss/signup.component.scss */ "./src/app/containers/styles/scss/signup.component.scss")).default]
    })
], SignUpComponent);



/***/ }),

/***/ "./src/app/containers/styles/scss/dashboard.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/containers/styles/scss/dashboard.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dashboard-caontainer {\n  background: #efefef;\n}\n.dashboard-caontainer .category-container {\n  padding: 10px;\n}\n.dashboard-caontainer .category-container .category-title {\n  padding: 15px;\n}\n.dashboard-caontainer .category-container .category-title .title {\n  font-size: 23px;\n  color: gray;\n  font-weight: 500;\n  display: inline-block;\n  width: 50%;\n  text-transform: uppercase;\n}\n.dashboard-caontainer .category-container .category-title .see-all {\n  display: inline-block;\n  width: 50%;\n  text-align: right;\n  font-size: 16px;\n  text-transform: uppercase;\n}\n.dashboard-caontainer .category-container .custom-card {\n  width: 270px;\n  display: inline-block;\n  margin-left: 15px;\n  margin-right: 15px;\n}\n.dashboard-caontainer .category-container .custom-card img {\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFoYXQudGFuZWphL0Rvd25sb2Fkcy9kaW1vLWFwcGxpY2F0aW9uL2RpbW8tdWkvc3JjL2FwcC9jb250YWluZXJzL3N0eWxlcy9zY3NzL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFpbmVycy9zdHlsZXMvc2Nzcy9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxhQUFBO0FDQ0o7QURDSTtFQUNFLGFBQUE7QUNDTjtBREFNO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FDRVI7QURDTTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDQ1I7QURHSTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNETjtBREdNO0VBQ0UsYUFBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvY29udGFpbmVycy9zdHlsZXMvc2Nzcy9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFzaGJvYXJkLWNhb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuXG4gIC5jYXRlZ29yeS1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICAuY2F0ZWdvcnktdGl0bGUge1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgIC50aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIH1cblxuICAgICAgLnNlZS1hbGwge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmN1c3RvbS1jYXJkIHtcbiAgICAgIHdpZHRoOiAyNzBweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuXG4gICAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLmRhc2hib2FyZC1jYW9udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbn1cbi5kYXNoYm9hcmQtY2FvbnRhaW5lciAuY2F0ZWdvcnktY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5kYXNoYm9hcmQtY2FvbnRhaW5lciAuY2F0ZWdvcnktY29udGFpbmVyIC5jYXRlZ29yeS10aXRsZSB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4uZGFzaGJvYXJkLWNhb250YWluZXIgLmNhdGVnb3J5LWNvbnRhaW5lciAuY2F0ZWdvcnktdGl0bGUgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmRhc2hib2FyZC1jYW9udGFpbmVyIC5jYXRlZ29yeS1jb250YWluZXIgLmNhdGVnb3J5LXRpdGxlIC5zZWUtYWxsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmRhc2hib2FyZC1jYW9udGFpbmVyIC5jYXRlZ29yeS1jb250YWluZXIgLmN1c3RvbS1jYXJkIHtcbiAgd2lkdGg6IDI3MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4uZGFzaGJvYXJkLWNhb250YWluZXIgLmNhdGVnb3J5LWNvbnRhaW5lciAuY3VzdG9tLWNhcmQgaW1nIHtcbiAgaGVpZ2h0OiAzMDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/containers/styles/scss/entrypoint.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/containers/styles/scss/entrypoint.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  margin: auto;\n  width: 50%;\n  border: 3px solid green;\n  padding: 10px;\n}\n\n.entrypoint-container {\n  width: 500px;\n  box-shadow: 0px 10px 20px 0px rgba(50, 50, 50, 0.52);\n  border-color: #ddd;\n  border: 1px solid transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFoYXQudGFuZWphL0Rvd25sb2Fkcy9kaW1vLWFwcGxpY2F0aW9uL2RpbW8tdWkvc3JjL2FwcC9jb250YWluZXJzL3N0eWxlcy9zY3NzL2VudHJ5cG9pbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbnRhaW5lcnMvc3R5bGVzL3Njc3MvZW50cnlwb2ludC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDSSxZQUFBO0VBQ0Ysb0RBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb250YWluZXJzL3N0eWxlcy9zY3NzL2VudHJ5cG9pbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA1MCU7XG4gIGJvcmRlcjogM3B4IHNvbGlkIGdyZWVuO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uZW50cnlwb2ludC1jb250YWluZXJ7XG4gICAgd2lkdGg6NTAwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggMHB4IHJnYmEoNTAsIDUwLCA1MCwgMC41Mik7XG4gIGJvcmRlci1jb2xvcjogI2RkZDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4iLCIuY29udGFpbmVyIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNTAlO1xuICBib3JkZXI6IDNweCBzb2xpZCBncmVlbjtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmVudHJ5cG9pbnQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDUwMHB4O1xuICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IDBweCByZ2JhKDUwLCA1MCwgNTAsIDAuNTIpO1xuICBib3JkZXItY29sb3I6ICNkZGQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/containers/styles/scss/signup.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/containers/styles/scss/signup.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  position: relative;\n  width: 100%;\n  max-width: 33rem;\n  margin: 0 auto;\n  padding: 0 0.75rem;\n}\n\n.dimo-field {\n  margin: 10px;\n  display: inline-block;\n}\n\n.btn-block {\n  cursor: pointer;\n  border-radius: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFoYXQudGFuZWphL0Rvd25sb2Fkcy9kaW1vLWFwcGxpY2F0aW9uL2RpbW8tdWkvc3JjL2FwcC9jb250YWluZXJzL3N0eWxlcy9zY3NzL3NpZ251cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFpbmVycy9zdHlsZXMvc2Nzcy9zaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvc3R5bGVzL3Njc3Mvc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzNyZW07XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIC43NXJlbTtcbn1cblxuLmRpbW8tZmllbGR7XG4gIG1hcmdpbjogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYnRuLWJsb2Nre1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbn1cbiIsIi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDMzcmVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCAwLjc1cmVtO1xufVxuXG4uZGltby1maWVsZCB7XG4gIG1hcmdpbjogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYnRuLWJsb2NrIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/services/ProfileService.ts":
/*!********************************************!*\
  !*** ./src/app/services/ProfileService.ts ***!
  \********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProfileService = class ProfileService {
    constructor() {
    }
    setToken(token) {
        console.log("setting token - " + token);
        this.token = token;
    }
    getToken() {
        return this.token;
    }
    isAuthenticated() {
        return this.token == null;
    }
};
ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], ProfileService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/chahat.taneja/Downloads/dimo-application/dimo-ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map