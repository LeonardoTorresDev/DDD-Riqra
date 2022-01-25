"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const container_1 = require("../container");
const types_1 = require("../types");
const server = container_1.container.get(types_1.TYPES.Server);
server.start();
