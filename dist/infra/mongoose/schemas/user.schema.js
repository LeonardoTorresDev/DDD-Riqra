"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    supplier: {
        type: String,
        required: [true, 'Password is required']
    }
});
exports.UserModel = (0, mongoose_1.model)('User', UserSchema);
