class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}

class ValidationError extends AppError {
    constructor(message) {
        super(message, 400);
    }
}

class UnauthorizedError extends AppError {
    constructor(message) {
        super(message, 401);
    }
}

class NotFoundError extends AppError {
    constructor(message) {
        super(message, 404);
    }
}

class InternalServerError extends AppError {
    constructor(message) {
        super(message, 500);
    }
}

export {
    AppError,
     ValidationError, 
     UnauthorizedError, 
     NotFoundError, 
     InternalServerError 
};