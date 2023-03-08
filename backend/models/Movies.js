const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    yearReleased: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    producer: {
        type: String,
        required: true
    },
    actors: {
        type: String,
        required: true
    },
    camera: {
        type: String,
        required: true
    },
    posterLink: {
        type: String
    },
    trailerLink: {
        type: String
    }

});

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;