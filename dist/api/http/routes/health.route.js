"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const health_controller_1 = require("../controllers/health.controller");
const register = (router) => {
    const healthController = new health_controller_1.HealthController();
    router.get('/health', (req, res) => healthController.healthCheck(req, res));
};
exports.register = register;
