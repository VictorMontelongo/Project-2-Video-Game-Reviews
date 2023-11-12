const seedFeedback = require('./feedback-seeds');
const seedGames = require('./game-seeds');
const seedUser = require('./user-seeds');
const seedGameFeedback = require('./game-feedback-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedFeedback();
  console.log('\n----- FEEDBACK SEEDED -----\n');

  await seedGames();
  console.log('\n----- GAMES SEEDED -----\n');

  await seedUser();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedGameFeedback();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();
