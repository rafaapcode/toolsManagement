import { User } from '../repositories/Repository';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export default class UserController {
    static async storage(req, res) {
        const { id, email, password } = await User.storage(req.body);

        res.status(201).json({ id, email, password });
    }

    static async getUser(req, res) {
        const user = await User.getUser(req.userId);

        res.json(user);
    }

    static async update(req, res) {
        if (req.body.password) {
            const salt = bcryptjs.genSaltSync(8);
            req.body.password = bcryptjs.hashSync(req.body.password, salt);
        }
     
        const userUpdate = await User.update(req.userId, req.body);

        res.json(userUpdate);
    }

    static async delete(req, res) {
        await User.delete(req.userId);

        res.json({ message: 'Usuário deletado.' });
    }

    static async login(req, res) {
        const { email } = req.body;

        const token = jwt.sign({ email }, process.env.SECRET, {
            expiresIn: '1d'
        });

        res.header('Authorization', `Bearer ${token}`);
        res.json({ message: 'Usuário Logado' });
    }
}