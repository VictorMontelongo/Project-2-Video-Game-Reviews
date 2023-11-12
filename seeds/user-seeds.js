const { UserTag } = require('../models');

const userData = [{

}
];

const seedUser = () => UserTag.bulkCreate(userData);

module.exports = seedUser;
