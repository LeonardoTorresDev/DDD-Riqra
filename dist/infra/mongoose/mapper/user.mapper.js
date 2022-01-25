"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMapper = void 0;
const user_1 = require("../../../domain/user");
class UserMapper {
    static toDomain(user) {
        const { email, password, supplier } = user;
        return new user_1.User({ email, password, supplier });
    }
}
exports.UserMapper = UserMapper;
