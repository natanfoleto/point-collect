import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Collector extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        latitude: Sequelize.DECIMAL,
        longitude: Sequelize.DECIMAL,
        entity: Sequelize.STRING,
        telephone: Sequelize.STRING,
        whatsapp: Sequelize.STRING,
        site: Sequelize.STRING,
        materials: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async (collector) => {
      if (collector.password) {
        collector.password_hash = await bcrypt.hash(collector.password, 8);
      }
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'avatar_id' });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default Collector;