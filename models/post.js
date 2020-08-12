const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String,
        require: true //указываем, что он обязателен
    },
    body: {
        type: String
    }
}, {
    timestamps: true
});

schema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('Post', schema);