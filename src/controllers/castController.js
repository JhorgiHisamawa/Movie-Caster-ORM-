const cast = require("../models").Cast;
const movie = require("../models").Movie;// Import all models

class CastController {
    // Get All data from cast
    async getAll(req, res) {
        try {
            let data = await cast.findAll({
                attributes: [
                    "id",
                    "name",
                    "birthday",
                    "deadday",
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

    // Get One data from cast
    async getOne(req, res) {
        try {
            let data = await cast.findOne({
                where: { id: `${req.params.id}` },
                attributes: [
                    "id",
                    "name",
                    "birthday",
                    "deadday",
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

    // create data for cast
    async create(req, res) {
        try {
            let created = await cast.create({
                name: req.body.name,
                birthday: req.body.birthday,
                deadday: req.body.deadday,
                rating: req.body.rating
            });
            let data = await cast.findOne({
                where: { id: created.id },
                attributes: [
                    "id",
                    "name",
                    "birthday",
                    "deadday",
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

    // update data in cast
    async update(req, res) {
        try {
            let update = {
                name: req.body.name,
                birthday: req.body.birthday,
                deadday: req.body.deadday,
                rating: req.body.rating
            };
            let updateData = await cast.update(update, {
                where: {
                    id: `${req.params.id}`,
                }
            });

            if (!updateData) {
                return res.status(404).json({
                    message: `Data Not Found`,
                });
            }

            let data = await cast.findOne({
                where: {
                    id: `${req.params.id}`,
                },
                attributes: [
                    "id",
                    "name",
                    "birthday",
                    "deadday",
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

    // delete one cast from table
    async delete(req, res) {
        try {
            // Delete data
            let data = await cast.destroy({
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

module.exports = new CastController();
