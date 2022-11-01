import { User } from '../repositories/Repository';

export default class UserController {
    static get(req, res) {
        res.send('teste');
    }
}