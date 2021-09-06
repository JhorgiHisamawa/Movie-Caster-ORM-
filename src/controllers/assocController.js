
const assoc = require("../models").Moviecast;// Import all models
const cast = require("../models").Cast;
const movie = require("../models").Movie;// Import all models

class MovieCastController {
    // Get All data from movie
    async getAll(req, res) {
        try {
            let data = await assoc.findAll({
                attributes: [
                    "id"
                ],
                include: [
                  {
                    model: movie,
                    attributes: ["id","name","language","status","rating"],
                  },
                ],
                include: [
                    {
                      model: cast,
                      attributes: ["id",
                      "name",
                      "birthday",
                      "deadday",
                      "rating",],
                    },
                  ],
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

    // Get One data from movie
    async getOne(req, res) {
        try {
            let data = await assoc.findOne({
                where: { id: `${req.params.id}` },
                attributes: [
                    "id"
                ],
                include: [
                  {
                    model: movie,
                    attributes: ["id","name","language","status","rating"],
                  },
                ],
                include: [
                    {
                      model: cast,
                      attributes: ["id",
                      "name",
                      "birthday",
                      "deadday",
                      "rating",],
                    },
                  ]
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

}

module.exports = new MovieCastController();
