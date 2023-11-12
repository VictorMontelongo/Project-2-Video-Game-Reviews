const { Game } = require('../models');

const gameData = [{

}

];

const seedGames = () => Game.bulkCreate(gameData);

module.exports = seedGames;
