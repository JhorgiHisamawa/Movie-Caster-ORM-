const caster = require("../models").Cast;
const movie = require("../models").Movie;// Import all models


class MovieController {
    // Get All data from movie
    async getAll(req, res) {
        try {
            let data = await movie.findAll({
                attributes: [
                    "id",
                    "name",
                    "language",
                    "status",
                    "rating",
                ],
                // include: [
                //   {
                //     model: pemasok,
                //     attributes: ["id"],
                //   },
                // ],
            });
            if (data.length === 0) {
                return res.status(404).json({
                    message: "Data Not Found",
                });
            }
            return res.status(200).json({
                message: "Success",
                data: data,
            });
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                message: "Internal Server Error",
                error: err,
            });
        }
    }

    async getMovieActor(req, res) {
        console.log(req.params.id + "ini params");
        try {
            // const actor = await sequelize.define('Casts', { id: DataTypes.INTEGER }, { name: DataTypes.STRING }, { birthday: DataTypes.DATE }, { deadday: DataTypes.DATE }, { rating: DataTypes.INTEGER });
            // const movie = await sequelize.define('Movies', { id: DataTypes.INTEGER }, { name: DataTypes.STRING }, { language: DataTypes.STRING }, { status: DataTypes.STRING }, { rating: DataTypes.INTEGER });
            // const assoc = await sequelize.define('MovieCasts', {
            //     id : DataTypes.INTEGER,
            //     movie_id : DataTypes.INTEGER,
            //     cast_id : DataTypes.INTEGER
            //   }, { timestamps: true });

            let data = await movie.findOne({
                where: { id: `${req.params.id}` },
                include: [
                    {
                        model: caster
                    },
                ],
            })

            return res.status(200).json({
                message: "Success",
                data: data,
            });
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                message: "Internal Server Error",
                error: err,
            });
        }
    }
    // Get One data from movie
    async getOne(req, res) {
        try {
            let data = await movie.findOne({
                where: { id: `${req.params.id}` },
                attributes: [
                    "id",
                    "name",
                    "language",
                    "status",
                    "rating",
                ],
                // include: [
                //   {
                //     model: pemasok,
                //     attributes: ["id"],
                //   },
                // ],
            });
            if (!data) {
                return res.status(404).json({
                    message: "Data Not Found",
                });
            }
            return res.status(200).json({
                message: "Success",
                data: data,
            });
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                message: "Internal Server Error",
                error: err,
            });
        }
    }

    // create data for movie
    async create(req, res) {
        try {
            let created = await movie.create({
                name: req.body.name,
                language: req.body.language,
                status: req.body.status,
                rating: req.body.rating
            });
            let data = await movie.findOne({
                where: { id: created.id },
                attributes: [
                    "id",
                    "name",
                    "language",
                    "status",
                    "rating",
                ]
            });
            return res.status(200).json({
                message: "Success",
                data: data,
            });
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                message: "Internal Server Error",
                error: err,
            });
        } //
    } // end of Create

    // update data in movie
    async update(req, res) {
        try {
            let update = {
                name: req.body.name,
                language: req.body.language,
                status: req.body.status,
                rating: req.body.rating
            };
            let updateData = await movie.update(update, {
                where: {
                    id: `${req.params.id}`,
                }
            });

            if (!updateData) {
                return res.status(404).json({
                    message: `Data Not Found`,
                });
            }

            let data = await movie.findOne({
                where: {
                    id: `${req.params.id}`,
                },
                attributes: [
                    "id",
                    "name",
                    "language",
                    "status",
                    "rating",
                ]
            });

            return res.status(200).json({
                message: "Success",
                data: data,
            });
        } catch (err) {
            // If error
            console.log(err);
            return res.status(500).json({
                message: "Internal Server Error",
                error: err,
            });
        }
    }

    // delete one movie from table
    async delete(req, res) {
        try {
            // Delete data
            let data = await movie.destroy({
                where: {
                    id: `${req.params.id}`,
                },
            });
            // If data deleted is null
            if (!data) {
                return res.status(404).json({
                    message: "Data Not Found",
                });
            }
            // If success
            return res.status(200).json({
                message: "Success",
            });
        } catch (err) {
            // If error
            console.log(err);
            return res.status(500).json({
                message: "Internal Server Error",
                error: err,
            });
        }
    }
}

module.exports = new MovieController();
