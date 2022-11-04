import modelTools from '../models/ToolModel';
import modelUsers from '../models/UserModel';
import bcryptjs from 'bcryptjs';

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
            const tool = await modelTools.find({ tags: { $all: [tag] } });

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

            await modelTools.findOneAndUpdate({ id }, { tags: body }, { new: true });

        } catch (e) {

            const error = new Error(e.message);
            e.inner = e;

            throw error;
        }
    }

}

export class User {
    static async storage(body) {
        try {
            let { email, password } = body;

            const salt = bcryptjs.genSaltSync(8);
            password = bcryptjs.hashSync(password, salt);

            const { id, email: emailUser } = await modelUsers.create({ email, password });

            return { id, email: emailUser };
        } catch (e) {
            const error = new Error(e.message);
            e.inner = e;

            throw error;
        }
    }

    static async getUser(idUser) {
        try {

            const user = await modelUsers.findById(idUser);

            return user;

        } catch (e) {
            const error = new Error(e.message);
            e.inner = e;

            throw error;
        }
    }

    static async update(idUser, body) {
        try {
            const { id, email, password } = await modelUsers.findOneAndUpdate({ id: idUser }, body, { new: true });

            return { id, email, password };
        } catch (e) {
            const error = new Error(e.message);
            e.inner = e;

            throw error;
        }
    }

    static async delete(id) {
        try {
            await modelUsers.findByIdAndDelete(id);
        } catch (e) {
            const error = new Error(e.message);
            e.inner = e;

            throw error;
        }
    }

    static async getUserEmail(email) {
        try {
            const user = await modelUsers.findOne({ email });

            return user;
        } catch (e) {
            const error = new Error(e.message);
            e.inner = e;

            throw error;
        }

    }
}