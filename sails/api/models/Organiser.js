module.exports = {

    tableName: 'organisers',

    attributes: {
        name         : 'STRING',
        address      : 'STRING',
        contact      : 'STRING',
        description  : 'STRING',
        competitions : {
            collection : 'competition',
            via        : 'organiser'
        }
    }
};
