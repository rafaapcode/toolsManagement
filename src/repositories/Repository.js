import modelTools from '../models/ToolModel';

export class Tools {
    static async storage(body) {
        const newTools = await modelTools.create(body);

        return newTools;
    }

    static async getAll() {
        const tools = await modelTools.find();

        const toolsFiltered = tools.map(({ id, tags, title, description, link }) => {
            return { id, title, link, description, tags };
        })

        return toolsFiltered;
    }

    static async get(tag) {
        const tool = await modelTools.findOne({ tags: { $all: [tag] } });

        return tool;
    }

    static async delete(id) {
        await modelTools.findByIdAndDelete(id);
    }
}