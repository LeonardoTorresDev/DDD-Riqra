"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceNotFound = exports.ValidationError = exports.InternalError = void 0;
class ExtendableError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}
class InternalError extends ExtendableError {
    constructor(message, data) {
        super(message);
        this.data = data;
    }
}
exports.InternalError = InternalError;
class ValidationError extends ExtendableError {
}
exports.ValidationError = ValidationError;
class ResourceNotFound extends ExtendableError {
    constructor(resource, query) {
        super(`Resource ${resource} was not found.`);
        this.data = { resource, query };
    }
}
exports.ResourceNotFound = ResourceNotFound;
