module.exports = {
  dialect: 'postgres',
  host: 'ec2-52-45-46-210.compute-1.amazonaws.com',
  username: 'postgres',
  password: 'pointcollect',
  database: 'pointcollect',
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};