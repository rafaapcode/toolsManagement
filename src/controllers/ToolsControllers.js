import { Tools } from '../repositories/Repository';

export default class ToolsControler {
    static async storage(req, res) {
        const newTool = await Tools.storage(req.body);

        res.status(201).json(newTool)
    }

    static async getAll(req, res) {
        const tools = await Tools.getAll();

        res.json(tools);
    }

    static async get(req, res) {
        const { tag } = req.params;

        const tool = await Tools.get(tag);

        res.header('Content-Type', 'application/json');
        return res.json(tool);
    }

    static async delete(req, res) {
        const { id } = req.params;

        await Tools.delete(id);


        res.json({ message: "Ferramenta deletada com sucesso !" });
    }

    static async updatedTags(req, res) {
        const { id } = req.params;
        const { tags: newTags } = req.body;

        const tool = await Tools.getOneTool(id);

        const newBody = [...tool.tags, ...newTags];

        await Tools.updatedTool(id, newBody);

        res.json({ message: 'Tags adicionadas' });
    }
}