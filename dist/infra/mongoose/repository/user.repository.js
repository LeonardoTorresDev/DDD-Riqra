"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseUserRepository = void 0;
const mongoose_1 = require("mongoose");
const user_1 = require("../../../domain/user");
const user_mapper_1 = require("../mapper/user.mapper");
const user_schema_1 = require("../schemas/user.schema");
class MongooseUserRepository {
    create(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, mongoose_1.connect)("mongodb://localhost:27017/Riqra?retryWrites=false");
            const user = yield user_schema_1.UserModel.create(new user_1.User({ email, password }));
            return user_mapper_1.UserMapper.toDomain(user);
        });
    }
    getByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, mongoose_1.connect)("mongodb://localhost:27017/Riqra?retryWrites=false");
            const user = yield user_schema_1.UserModel.findOne({ email }).exec();
            if (user == null) {
                return null;
            }
            return user_mapper_1.UserMapper.toDomain(user);
        });
    }
}
exports.MongooseUserRepository = MongooseUserRepository;
