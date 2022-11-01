import { Tools } from '../repositories/Repository';

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

        if (!req.body.title) {
            return res.status(400).json({ message: 'Mande um título válido' });
        } else if (!req.body.link) {
            return res.status(400).json({ message: 'Mande um link válido' });
        } else if (!req.body.description) {
            return res.status(400).json({ message: 'Mande uma descrição válida' });
        } else if (!req.body.tags.length) {
            return res.status(400).json({ message: 'Sua ferramenta deve ter pelo menos 1 TAG !' });
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