var Promise = require("bluebird");

module.exports = {

    tableName: 'competitions',

    attributes: {
        name         : 'STRING',
        description  : 'STRING',
        year         : 'STRING',
        organiser : {
            model      : 'organiser'
        }
    },
};
