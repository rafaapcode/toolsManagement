import modelTools from '../models/ToolModel';
import modelUsers from '../models/UserModel';

export class Tools {
    static async storage(body) {
        try {
            const newTools = await modelTools.create(body);

            return newTools;
        } catch (e) {
            const error = new Error(e.message);
            e.inner = e;

            throw error;
        }
    }

    static async getAll() {
        try {
            const tools = await modelTools.find();

            const toolsFiltered = tools.map(({ id, tags, title, description, link }) => {
                return { id, title, link, description, tags, link };
            })

            return toolsFiltered;
        } catch (e) {
            const error = new Error(e.message);
            e.inner = e;

            throw error;
        }
    }

    static async get(tag) {
        try {
            const tool = await modelTools.findOne({ tags: { $all: [tag] } });

            return tool;

        } catch (e) {

            const error = new Error(e.message);
            e.inner = e;

            throw error;

        }
    }

    static async delete(id) {
        try {

            await modelTools.findByIdAndDelete(id);

        } catch (e) {

            const error = new Error(e.message);
            e.inner = e;

            throw error;
        }
    }

    static async getOneTool(id) {
        try {

            const tool = await modelTools.findById(id);

            return tool;

        } catch (e) {

            const error = new Error(e.message);
            e.inner = e;

            throw error;
        }
    }

    static async updatedTool(id, body) {
        try {

            await modelTools.findOneAndUpdate({ id }, { tags: body }, {new: true});

        } catch (e) {

            const error = new Error(e.message);
            e.inner = e;

            throw error;
        }
    }

}

export class User{
    static storage(body){
        
    }
}