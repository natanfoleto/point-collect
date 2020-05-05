import * as Yup from 'yup';
import Collector from '../models/Collector';
import User from '../models/User';

class CollectorControler {
  async index(req, res) {
    const collectors = await Collector.findAll();

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
      latitude: Yup.number(),
      longitude: Yup.number(),
      entity: Yup.string(),
      telephone: Yup.string(),
      whatsapp: Yup.string(),
      site: Yup.string(),
      materials: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação' });
    }

    const { email, oldPassword } = req.body;

    console.log(req.collectorId);

    const collector = await Collector.findByPk(req.userId);

    if (email !== collector.email) {
      const collectorExists = await Collector.findOne({ 
        where: { email }
      });

      if (collectorExists) {
        return res.status(400).json({ error: 'Ja existe uma coletora com este email.' });
      }
    }

    if (oldPassword && !(await collector.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'A senha está incorreta.' });
    }

    const { 
      id, 
      name,
      latitude, 
      longitude, 
      entity,
      telephone,
      whatsapp,
      site,
      materials
    } = await collector.update(req.body);

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
}

export default new CollectorControler();