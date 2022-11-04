import { User } from '../repositories/Repository';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export default class UserController {
    static async storage(req, res) {
        const { id, email, password } = await User.storage(req.body);

        const hateoas = [
            {
                href: "http://localhost:3000/users",
                method: "GET",
                ref: "get_user"
            },
            {
                href: `http://localhost:3000/users`,
                method: "PUT",
                ref: "update_user"
            },
            {
                href: `http://localhost:3000/users`,
                method: "DELETE",
                ref: "delete_user"
            },
            {
                href: `http://localhost:3000/users/login`,
                method: "DELETE",
                ref: "login_user"
            },
        ];


        res.status(201).json({ id, email, password, _link: hateoas });
    }

    static async getUser(req, res) {
        const user = await User.getUser(req.userId);

        const hateoas = [
            {
                href: "http://localhost:3000/users",
                method: "POST",
                ref: "create_user"
            },
            {
                href: `http://localhost:3000/users`,
                method: "PUT",
                ref: "update_user"
            },
            {
                href: `http://localhost:3000/users`,
                method: "DELETE",
                ref: "delete_user"
            },
        ];

        res.json({ email: user.email, id: user.id, _link: hateoas });
    }

    static async update(req, res) {
        if (req.body.password) {
            const salt = bcryptjs.genSaltSync(8);
            req.body.password = bcryptjs.hashSync(req.body.password, salt);
        }

        const userUpdate = await User.update(req.userId, req.body);

        const hateoas = [
            {
                href: "http://localhost:3000/users",
                method: "POST",
                ref: "create_user"
            },
            {
                href: `http://localhost:3000/users`,
                method: "GET",
                ref: "get_user"
            },
            {
                href: `http://localhost:3000/users`,
                method: "DELETE",
                ref: "delete_user"
            },
        ];

        res.json({ id: userUpdate.id, email: userUpdate.email, _link: hateoas });
    }

    static async delete(req, res) {
        await User.delete(req.userId);

        const hateoas = [
            {
                href: "http://localhost:3000/users",
                method: "POST",
                ref: "create_user"
            }
        ];

        res.json({ message: 'Usuário deletado.', _link: hateoas });
    }

    static async login(req, res) {
        const { email } = req.body;

        const token = jwt.sign({ email }, process.env.SECRET, {
            expiresIn: '1d'
        });

        const hateoas = [
            {
                href: "http://localhost:3000/users",
                method: "GET",
                ref: "get_user"
            },
            {
                href: "http://localhost:3000/users",
                method: "PUT",
                ref: "update_user"
            },
            {
                href: "http://localhost:3000/users",
                method: "DELETE",
                ref: "delete_user"
            },
            {
                href: "http://localhost:3000/users",
                method: "POST",
                ref: "create_user"
            }
        ];

        res.header('Authorization', `Bearer ${token}`);
        res.json({ message: 'Usuário Logado', _link: hateoas });
    }
}