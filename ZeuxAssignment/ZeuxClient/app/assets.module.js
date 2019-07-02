"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const common_1 = require("@angular/common");
const assets_component_1 = require("./assets.component");
let AssetsModule = class AssetsModule {
};
AssetsModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        exports: [
            router_1.RouterModule
        ],
        declarations: [
            assets_component_1.AssetsComponent
        ]
    })
], AssetsModule);
exports.AssetsModule = AssetsModule;
//# sourceMappingURL=assets.module.js.map