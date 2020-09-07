import File from '../models/File';

class FileController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;

    const url = "http://52.45.46.210:3333/files/" + path;

    const file = await File.create({
      name,
      path,
      url,
    });

    return res.json(file);
  }
}

export default new FileController();
