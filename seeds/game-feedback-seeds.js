const { GameFeedback } = require('../models');

const GameFeedbackData = [{

}

];

const seedGameFeedback = () => GameFeedback.bulkCreate(GameFeedbackData);

module.exports = seedGameFeedback;
