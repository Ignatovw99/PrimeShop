import { replacePlaceholders } from "./utils/common.js";

export class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }

    static throwError(messageTemplate, replacements) {
        const message = replacePlaceholders(messageTemplate, replacements);
        throw new NotFoundError(message);
    }
}

export class DuplicateError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }

    static throwError(messageTemplate, replacements) {
        const message = replacePlaceholders(messageTemplate, replacements);
        throw new NotFoundError(message);
    }
}

export class ServerError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }

    static throwError(messageTemplate, replacements) {
        const message = replacePlaceholders(messageTemplate, replacements);
        throw new ServerError(message);
    }
}

export class UnauthorizedError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }

    static throwError(messageTemplate, replacements) {
        const message = replacePlaceholders(messageTemplate, replacements);
        throw new UnauthorizedError(message);
    }
}

export class ForbiddenError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }

    static throwError(messageTemplate, replacements) {
        const message = replacePlaceholders(messageTemplate, replacements);
        throw new ForbiddenError(message);
    }
}
