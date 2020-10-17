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
      return res.json({ 
        error: 1,
        msg: 'Falha na validação dos campos' 
      });
    }

    const userExists = await User.findOne({ 
        where: { email: req.body.email }
    });

    const collectorExists = await Collecotr.findOne({ 
      where: { email: req.body.email }
    });

    if (userExists || collectorExists) {
      return res.json({ 
        error: 1,
        msg: 'Um usuário com este e-mail já existe.' 
      });
    }

    const user = await User.create(req.body);

    return res.json({
      error: 0,
      user
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
      return res.json({ error: 'Falha na validação' });
    }

    const { id, email, oldPassword } = req.body;

    const user = await User.findByPk(id);

    if (email !== user.email) {
      const userExists = await User.findOne({ 
        where: { email }
      });

      const collectorExists = await Collecotr.findOne({ 
        where: { email }
      });

      if (userExists || collectorExists) {
        return res.json({ error: 'Um usuário com este e-mail já existe.' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.json({ error: 'A senha está incorreta.' });
    }

    const { name } = await user.update(req.body);

    const data = {
      id,
      name,
      email
    };

    return res.json({
      error: 0,
      user: data
    });
  }
}

export default new UserController();