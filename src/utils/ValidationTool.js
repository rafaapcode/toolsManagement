import joi from 'joi';

export class ValidationsTool {
    static storageValidation(data) {
        const storage = joi.object({
            title: joi.string().required(),
            link: joi.string().required(),
            description: joi.string().required(),
            tags: joi.array().required()
        })

        return storage.validate(data);
    }
}

export class ValidationsUsers {
    static storageValidation(data) {
        const storage = joi.object({
            email: joi.string().email().required(),
            password: joi.string().min(4).max(12).required(),
        });

        return storage.validate(data);
    }
}