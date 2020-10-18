import Collector from '../models/Collector';
import File from '../models/File';

import parseStringAsArray from '../utils/parseStringAsArray';

class SearchController {
  async index(req, res) {
    const { materials } = req.body;
    
    if (!materials) {
      return res.json({
        msg: "Nenhum material especificado"
      });
    } 
    
    const materialsArray = parseStringAsArray(materials);

    const collectors = await Collector.findAll({
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    const indexes = [];

    collectors.map(collector => {
      const collectorMaterials = parseStringAsArray(collector.materials);

      for (var i = 0; i < collectorMaterials.length; i++) {
        if (materialsArray.indexOf(collectorMaterials[i]) > -1) {
          indexes.push(collector);
          break;
        } 
      }
    });

    return res.json(indexes);
  }
}

export default new SearchController();
