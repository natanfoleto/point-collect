import * as Yup from 'yup';
import User from '../models/User';
import Collecotr from '../models/Collector';

class UserController {
  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string()
        .required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6)
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação' });
    }

    const userExists = await User.findOne({ 
        where: { email: req.body.email }
    });

    const collectorExists = await Collecotr.findOne({ 
      where: { email: req.body.email }
    });

    if (userExists || collectorExists) {
      return res.status(400).json({ error: 'Um usuário com este e-mail já existe.' });
    }

    const { id, name, email } = await User.create(req.body);

    return res.json({
      id, 
      name, 
      email
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string()
        .email(),
      oldPassword: Yup.string()
        .min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação' });
    }

    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.id);

    if (email !== user.email) {
      const userExists = await User.findOne({ 
        where: { email }
      });

      const collectorExists = await Collecotr.findOne({ 
        where: { email }
      });

      if (userExists || collectorExists) {
        return res.status(400).json({ error: 'Um usuário com este e-mail já existe.' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'A senha está incorreta.' });
    }

    const { id, name } = await user.update(req.body);

    return res.json({
      id,
      name,
      email
    });
  }
}

export default new UserController();