import { Tools } from '../repositories/Repository';

export default class ToolsControler {
    static async storage(req, res) {
        const newTool = await Tools.storage(req.body);

        res.json(newTool)
    }

    static async getAll(req, res) {
        const tools = await Tools.getAll();

        res.json(tools);
    }

    static async get(req, res) {
        const { tag } = req.params;

        const tool = await Tools.get(tag);

        res.json(tool);
    }

    static async delete(req, res) {
        const { id } = req.params;

        await Tools.delete(id);


        res.json({ message: "Deleted with success !!" });
    }
}