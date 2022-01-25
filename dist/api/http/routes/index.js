"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
const glob_1 = __importDefault(require("glob"));
function registerRoutes(router) {
    const routes = glob_1.default.sync(__dirname + '/**/*.route.*');
    routes.map(route => register(route, router));
}
exports.registerRoutes = registerRoutes;
function register(routePath, router) {
    const route = require(routePath);
    route.register(router);
}
