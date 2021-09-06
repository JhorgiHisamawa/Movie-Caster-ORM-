'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Cast", deps: []
 * createTable "Movies", deps: []
 * createTable "MovieCast", deps: [Cast, Movies]
 *
 **/

var info = {
    "revision": 1,
    "name": "noname",
    "created": "2021-09-06T18:48:06.985Z",
    "comment": ""
};

var migrationCommands = function(transaction) {
    return [{
            fn: "createTable",
            params: [
                "Cast",
                {
                    "id": {
                        "type": Sequelize.INTEGER,
                        "field": "id",
                        "autoIncrement": true,
                        "primaryKey": true,
                        "allowNull": false
                    },
                    "name": {
                        "type": Sequelize.STRING,
                        "field": "name"
                    },
                    "birthday": {
                        "type": Sequelize.DATE,
                        "field": "birthday"
                    },
                    "deadday": {
                        "type": Sequelize.DATE,
                        "field": "deadday",
                        "allowNull": false
                    },
                    "rating": {
                        "type": Sequelize.ENUM('1', '2', '3', '4', '5'),
                        "field": "rating"
                    },
                    "createdAt": {
                        "type": Sequelize.DATE,
                        "field": "createdAt",
                        "allowNull": false
                    },
                    "updatedAt": {
                        "type": Sequelize.DATE,
                        "field": "updatedAt",
                        "allowNull": false
                    },
                    "deletedAt": {
                        "type": Sequelize.DATE,
                        "field": "deletedAt"
                    }
                },
                {
                    "transaction": transaction
                }
            ]
        },
        {
            fn: "createTable",
            params: [
                "Movies",
                {
                    "id": {
                        "type": Sequelize.INTEGER,
                        "field": "id",
                        "autoIncrement": true,
                        "primaryKey": true,
                        "allowNull": false
                    },
                    "name": {
                        "type": Sequelize.STRING,
                        "field": "name"
                    },
                    "language": {
                        "type": Sequelize.STRING,
                        "field": "language"
                    },
                    "status": {
                        "type": Sequelize.STRING,
                        "field": "status"
                    },
                    "rating": {
                        "type": Sequelize.ENUM('1', '2', '3', '4', '5'),
                        "field": "rating"
                    },
                    "createdAt": {
                        "type": Sequelize.DATE,
                        "field": "createdAt",
                        "allowNull": false
                    },
                    "updatedAt": {
                        "type": Sequelize.DATE,
                        "field": "updatedAt",
                        "allowNull": false
                    },
                    "deletedAt": {
                        "type": Sequelize.DATE,
                        "field": "deletedAt"
                    }
                },
                {
                    "transaction": transaction
                }
            ]
        },
        {
            fn: "createTable",
            params: [
                "MovieCast",
                {
                    "id": {
                        "type": Sequelize.INTEGER,
                        "field": "id",
                        "autoIncrement": true,
                        "primaryKey": true,
                        "allowNull": false
                    },
                    "movie_id": {
                        "type": Sequelize.INTEGER,
                        "unique": "MovieCast_cast_id_movie_id_unique",
                        "onUpdate": "CASCADE",
                        "onDelete": "CASCADE",
                        "references": {
                            "model": "Movies",
                            "key": "id"
                        },
                        "primaryKey": false,
                        "field": "movie_id"
                    },
                    "cast_id": {
                        "type": Sequelize.INTEGER,
                        "unique": "MovieCast_cast_id_movie_id_unique",
                        "onUpdate": "CASCADE",
                        "onDelete": "CASCADE",
                        "references": {
                            "model": "Cast",
                            "key": "id"
                        },
                        "primaryKey": false,
                        "field": "cast_id"
                    },
                    "createdAt": {
                        "type": Sequelize.DATE,
                        "field": "createdAt",
                        "allowNull": false
                    },
                    "updatedAt": {
                        "type": Sequelize.DATE,
                        "field": "updatedAt",
                        "allowNull": false
                    },
                    "deletedAt": {
                        "type": Sequelize.DATE,
                        "field": "deletedAt"
                    }
                },
                {
                    "transaction": transaction
                }
            ]
        }
    ];
};
var rollbackCommands = function(transaction) {
    return [{
            fn: "dropTable",
            params: ["Cast", {
                transaction: transaction
            }]
        },
        {
            fn: "dropTable",
            params: ["Movies", {
                transaction: transaction
            }]
        },
        {
            fn: "dropTable",
            params: ["MovieCast", {
                transaction: transaction
            }]
        }
    ];
};

module.exports = {
    pos: 0,
    useTransaction: true,
    execute: function(queryInterface, Sequelize, _commands)
    {
        var index = this.pos;
        function run(transaction) {
            const commands = _commands(transaction);
            return new Promise(function(resolve, reject) {
                function next() {
                    if (index < commands.length)
                    {
                        let command = commands[index];
                        console.log("[#"+index+"] execute: " + command.fn);
                        index++;
                        queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                    }
                    else
                        resolve();
                }
                next();
            });
        }
        if (this.useTransaction) {
            return queryInterface.sequelize.transaction(run);
        } else {
            return run(null);
        }
    },
    up: function(queryInterface, Sequelize)
    {
        return this.execute(queryInterface, Sequelize, migrationCommands);
    },
    down: function(queryInterface, Sequelize)
    {
        return this.execute(queryInterface, Sequelize, rollbackCommands);
    },
    info: info
};
