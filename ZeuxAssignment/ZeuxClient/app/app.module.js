"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const http_1 = require("@angular/common/http");
const app_component_1 = require("./app.component");
const assets_component_1 = require("./assets.component");
const opportunities_component_1 = require("./opportunities.component");
const common_1 = require("@angular/common");
const router_1 = require("@angular/router");
const appRoutes = [
    {
        path: 'assets',
        loadChildren: () => Promise.resolve().then(() => require('./assets.module')).then(mod => mod.AssetsModule),
    },
    {
        path: 'opportunities',
        loadChildren: () => Promise.resolve().then(() => require('./opportunities.module')).then(mod => mod.OpportunitiesModule),
    },
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpClientModule,
            common_1.CommonModule,
            router_1.RouterModule.forRoot(appRoutes, {
                enableTracing: false,
            })
        ],
        declarations: [app_component_1.AppComponent, assets_component_1.AssetsComponent, opportunities_component_1.OpportunitiesComponent],
        bootstrap: [app_component_1.AppComponent, assets_component_1.AssetsComponent, opportunities_component_1.OpportunitiesComponent],
        exports: [
            router_1.RouterModule
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map