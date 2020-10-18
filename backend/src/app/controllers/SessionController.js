import * as Yup from 'yup';
import jwt from 'jsonwebtoken';

import User from '../models/User';
import File from '../models/File';
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
      return res.json({ 
        error: 1,
        msg: 'Falha na validação' 
      });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ 
      where: { email },
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url']
        }
      ]
    });

    const collector = await Collector.findOne({ 
      where: { email },
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url']
        }
      ]
    });

    if (user) {
      if (!(await user.checkPassword(password))) {
        return res.json({ 
          error: 1,
          msg: 'A senha está incorreta.' 
        });
      }

      const { id, name, avatar } = user;

      return res.json({
        error: 0,
        user: {
          id,
          name,
          email,
          avatar,
        },
        token: jwt.sign({ id }, authConfig.secret, {
          expiresIn: authConfig.expiresIn,
        }),
      });
    } else if (collector) {
      if (!(await collector.checkPassword(password))) {
        return res.json({ 
          error: 1,
          msg: 'A senha está incorreta.' 
        });
      }

      const { 
        id,
        name,
        email,
        latitude, 
        longitude, 
        logradouro,
        numero,
        bairro,
        localidade,
        uf,
        entity, 
        telephone, 
        whatsapp,
        site,
        materials,
        avatar
      } = collector;

      return res.json({
        collector: {
          id,
          name,
          email,
          name, 
          latitude, 
          longitude, 
          logradouro,
          numero,
          bairro,
          localidade,
          uf,
          entity, 
          telephone, 
          whatsapp,
          site,
          materials,
          avatar,
        },
        token: jwt.sign({ id }, authConfig.secret, {
          expiresIn: authConfig.expiresIn,
        }),
      });
    } else {
      return res.json({ 
        error: 1,
        msg: 'Usuário não encontrado.' 
      });
    }  
  }
}

export default new SessionController();