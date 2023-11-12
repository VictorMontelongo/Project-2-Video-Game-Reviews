const { Feedback } = require('../models');

const feedbackData = [
  {
    // we pull for the api data?

    review: ''

  }
];

const seedCategories = () => Feedback.bulkCreate(feedbackData);

module.exports = seedCategories;
