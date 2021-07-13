export class InvalidParameterError extends Error {
  constructor(msg) {
    super(msg);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, InvalidParameterError);
    }
  }
}

export class RequiredParameterError extends Error {
  constructor(param) {
    super(`param can not be null or undefined.`)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, RequiredParameterError)
    }
  }
}

export class InvalidResponseError extends Error {
  constructor(msg) {
    super(msg);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, InvalidResponseError);
    }
  }
}

