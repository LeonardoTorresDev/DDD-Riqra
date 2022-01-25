"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const suppliers_1 = require("./suppliers");
class User {
    constructor({ email, password, supplier }) {
        this.email = email;
        this.password = password;
        this.supplier = supplier ? supplier : suppliers_1.Suppliers[Math.floor(Math.random() * 5)];
    }
}
exports.User = User;
