"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const inversify_1 = require("inversify");
const routes_1 = require("./routes");
const types_1 = require("../../types");
let Server = class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = String(process.env.PORT);
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
    routes() {
        const router = express_1.default.Router();
        this.app.use(router);
        (0, routes_1.registerRoutes)(router);
    }
    start() {
        const logger = this.logger.get();
        this.app.listen(this.port, () => {
            logger.info(`Running on port ${this.port}`);
        });
    }
};
__decorate([
    (0, inversify_1.inject)(types_1.TYPES.Logger)
], Server.prototype, "logger", void 0);
__decorate([
    (0, inversify_1.inject)(types_1.TYPES.HealthController)
], Server.prototype, "healthController", void 0);
Server = __decorate([
    (0, inversify_1.injectable)()
], Server);
exports.Server = Server;
