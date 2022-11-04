import jwt from 'jsonwebtoken';
import { User } from '../repositories/Repository.js';
import dotenv from 'dotenv';


dotenv.config();

export default async function authUser(req, res, next) {

    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(400).json({ message: 'Credenciais inválidas.' });
    }

    const [, token] = authorization.split(' ');

    try {
        const { email } = jwt.verify(token, process.env.SECRET);

        const { id } = await User.getUserEmail(email);

        req.userId = id;

        next();
    } catch (error) {
        return res.status(401).json({ message: 'Token inválido' })
    }

}