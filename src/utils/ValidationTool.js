import joi from 'joi';

export default class ValidationsTool{
    static storageValidation(data){
        const storage = joi.object({
            title: joi.string().required(),
            link: joi.string().required(),
            description: joi.string().required(),
            tags: joi.array().required()
        })

        return storage.validate(data);
    }

    static tagValidation(tag){
        const tags = joi.object({
            tag: joi.array().required(),
        })

        return tags.validate(tag);
    }
}