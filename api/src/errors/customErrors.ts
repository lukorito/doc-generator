/* eslint-disable max-classes-per-file */

type ErrorData = { [key: string]: any };

export class CustomError extends Error {
  constructor(
    public message: string,
    public code: string | number = 'INTERNAL_ERROR',
    public status: number = 500,
    public data: ErrorData = {},
  ) {
    super();
  }
}

export class Error404Route extends CustomError {
  constructor(originalUrl: string) {
    super(`Route ${originalUrl} does not exist.`, 'NOT_FOUND', 404);
  }
}

export class ValidationError extends CustomError {
  constructor(errorData: ErrorData) {
    super('Validation error', 'VALIDATION_ERROR', 400, errorData);
  }
}

export class InvalidToken extends CustomError {
  constructor(message = 'Auth token is invalid') {
    super(message, 'INVALID_TOKEN', 401);
  }
}
