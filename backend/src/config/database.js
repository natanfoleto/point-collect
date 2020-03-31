module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gorecicle',
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};