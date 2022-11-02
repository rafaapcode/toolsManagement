import { User } from '../repositories/Repository';
import bcryptjs from 'bcryptjs';

export default class UserController {
    static async storage(req, res) {
        const { id, email, password } = await User.storage(req.body);

        res.status(201).json({ id, email, password });
    }

    static async getUser(req, res) {
        const { id } = req.params;
        const user = await User.getUser(id);

        res.json(user);
    }

    static async update(req, res) {
        if (req.body.password) {
            const salt = bcryptjs.genSaltSync(8);
            req.body.password = bcryptjs.hashSync(req.body.password, salt);
        }

        const { id } = req.params;

        if (!(await User.getUser(id))) {
            return res.status(400).json({ message: 'Usuário não existe.' })
        }

        const userUpdate = await User.update(id, req.body);

        res.json(userUpdate);
    }

    static async delete(req, res) {
        const { id } = req.params;
        await User.delete(id);

        res.json({ message: 'Usuário deletado.' });
    }
}