import Collector from '../models/Collector';
import parseStringAsArray from '../utils/parseStringAsArray';

class SearchController {
  async index(req, res) {
    const { materials } = req.query;
    
    const materialsArray = parseStringAsArray(materials);

    const collectors = await Collector.findAll();

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
