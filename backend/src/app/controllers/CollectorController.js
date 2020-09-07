import * as Yup from 'yup';
import File from '../models/File';
import Collector from '../models/Collector';
import User from '../models/User';

class CollectorControler {
  async index(req, res) {
    const collectors = await Collector.findAll({
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json(collectors);
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
        .min(6),
        latitude: Yup.number()
        .required(),
      longitude: Yup.number()
        .required(),
      entity: Yup.string()
        .required(),
      telephone: Yup.string()
        .required(),
      whatsapp: Yup.string()
        .required(),
      materials: Yup.string()
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação' });
    }

    const collectorExists = await Collector.findOne({ 
        where: { email: req.body.email }
    });

    const userExists = await User.findOne({ 
      where: { email: req.body.email }
    });

    if (collectorExists || userExists) {
      return res.status(400).json({ error: 'Ja existe uma coletora com este email.' });
    }

    const { 
      id, 
      name, 
      email, 
      latitude, 
      longitude, 
      entity,
      telephone,
      whatsapp,
      site,
      materials
    } = await Collector.create(req.body);

    return res.json({
      id, 
      name, 
      email, 
      latitude, 
      longitude,
      entity,
      telephone,
      whatsapp,
      site,
      materials
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

    const collector = await Collector.findByPk(req.id);

    if (email !== collector.email) {
      const collectorExists = await Collector.findOne({ 
        where: { email }
      });

      const userExists = await User.findOne({ 
        where: { email }
      });

      if (collectorExists || userExists) {
        return res.status(400).json({ error: 'Um usuário com este e-mail já existe.' });
      }
    }

    if (oldPassword && !(await collector.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'A senha está incorreta.' });
    }

    await collector.update(req.body);

    const { 
      id, 
      name,
      latitude, 
      longitude, 
      entity,
      telephone,
      whatsapp,
      site,
      materials,
      avatar,
    } = await Collector.findByPk(req.id, {
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json({
      id, 
      name, 
      email, 
      latitude, 
      longitude, 
      entity,
      telephone,
      whatsapp,
      site,
      materials,
      avatar,
    });
  }
}

export default new CollectorControler();