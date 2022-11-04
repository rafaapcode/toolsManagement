import { Tools } from '../repositories/Repository';

export default class ToolsControler {
    static async storage(req, res) {
        const newTool = await Tools.storage(req.body);

        const hateoas = [
            {
                href: "http://localhost:3000/tools",
                method: "GET",
                ref: "get_all_tools"
            },
            {
                href: `http://localhost:3000/tools/${newTool.id}`,
                method: "DELETE",
                ref: "delete_tool"
            },
            {
                href: `http://localhost:3000/tools/addTag/${newTool.id}`,
                method: "PUT",
                ref: "add_tag_to_tool"
            },
        ];

        res.status(201).json({ tool: newTool, _link: hateoas })
    }

    static async getAll(req, res) {
        const tools = await Tools.getAll();

        const hateoas = [
            {
                href: "http://localhost:3000/tools",
                method: "POST",
                ref: "create_tool"
            },
            {
                href: `http://localhost:3000/tools/tag`,
                method: "GET",
                ref: "get_tool_for_tag"
            }
        ]

        res.json({ tools: tools, _link: hateoas });
    }

    static async get(req, res) {
        const { tag } = req.params;

        const tool = await Tools.get(tag);

        const hateoas = [
            {
                href: "http://localhost:3000/tools",
                method: "GET",
                ref: "get_all_tools"
            },
            {
                href: `http://localhost:3000/tools`,
                method: "POST",
                ref: "create_tool"
            },
            {
                href: `http://localhost:3000/tools/addTag/${tool.id}`,
                method: "PUT",
                ref: "add_tag_to_tool"
            },
            {
                href: `http://localhost:3000/tools/${tool.id}`,
                method: "DELETE",
                ref: "delete_tool"
            }
        ]

        res.header('Content-Type', 'application/json');
        return res.json({ tool, _link: hateoas });
    }

    static async delete(req, res) {
        const { id } = req.params;

        await Tools.delete(id);

        const hateoas = [
            {
                href: "http://localhost:3000/tools",
                method: "POST",
                ref: "create_tool"
            },
            {
                href: `http://localhost:3000/tools`,
                method: "GET",
                ref: "get_tools"
            }
        ]

        res.json({ message: "Ferramenta deletada com sucesso !", _link: hateoas });
    }

    static async updatedTags(req, res) {
        const { id } = req.params;
        const { tags: newTags } = req.body;

        const tool = await Tools.getOneTool(id);

        const newBody = [...tool.tags, ...newTags];

        await Tools.updatedTool(id, newBody);

        const hateoas = [
            {
                href: "http://localhost:3000/tools/tag",
                method: "GET",
                ref: "get_tool_for_tag"
            },
            {
                href: `http://localhost:3000/tools`,
                method: "GET",
                ref: "get_tools"
            }
        ]

        res.json({ message: 'Tags adicionadas' });
    }
}