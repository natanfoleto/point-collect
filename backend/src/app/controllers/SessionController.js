import * as Yup from 'yup';
import jwt from 'jsonwebtoken';

import User from '../models/User';
import Collector from '../models/Collector';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação' });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    const collector = await Collector.findOne({ where: { email } });

    if (user) {
      if (!(await user.checkPassword(password))) {
        return res.status(401).json({ error: 'A senha está incorreta.' });
      }

      const { id, name } = user;

      return res.json({
        user: {
          id,
          name,
          email,
        },
        token: jwt.sign({ id }, authConfig.secret, {
          expiresIn: authConfig.expiresIn,
        }),
      });
    } else if (collector) {
      if (!(await collector.checkPassword(password))) {
        return res.status(401).json({ error: 'A senha está incorreta.' });
      }

      const { id, name } = collector;

      return res.json({
        collector: {
          id,
          name,
          email,
        },
        token: jwt.sign({ id }, authConfig.secret, {
          expiresIn: authConfig.expiresIn,
        }),
      });
    } else {
      return res.status(401).json({ error: 'Usuário não encontrado.' });
    }  
  }
}

export default new SessionController();