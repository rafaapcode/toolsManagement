import { Tools } from '../repositories/Repository';
import ValidationsTool from '../utils/ValidationTool';

export class ErrorsTools {

    static async getErrorgHandling(req, res, next) {
        const { tag } = req.params;

        const tool = await Tools.get(tag);

        if (!tool) {
            return res.status(404).json({
                message: 'Ferramenta não existe.',
            });
        }

        next();

    }

    static async storageErrorgHandling(req, res, next) {

        const { error } = ValidationsTool.storageValidation(req.body);

        if (error) {
            return res.status(400).json({ message: 'Dados faltando ou incorretos.' });
        }

        const { title, link, description, tags } = req.body;

        req.body = { title, link, description, tags }

        next();
    }

    static async deleteErrorgHandling(req, res, next) {
        try {
            const { id } = req.params;

            const tool = await Tools.getOneTool(id);

            if (!tool) {
                return res.status(404).json({
                    message: 'Ferramenta não existe.'
                });
            }

            next();
        } catch (error) {
            return res.status(404).json({ message: 'Ferramenta não encontrada .' })
        }
    }

    static async updateErrorgHandling(req, res, next) {
        try {
            const { id } = req.params;
            const { tags } = req.body;

            const { error } = ValidationsTool.tagValidation(tags);

            if (error) {
                return res.status(400).json({ message: 'Dados incorretos' });
            }

            const tool = await Tools.getOneTool(id);

            if (!tool) {
                return res.status(404).json({
                    message: 'Ferramenta não encontrada.'
                });
            }

            if (!tags[0]) {
                return res.status(400).json({ message: 'Envie algum conteúdo para atualizar a ferramenta.' });
            }

            next();
        } catch (error) {
            return res.status(404).json({ message: 'Ferramenta não encontrada .' })
        }
    }
} 