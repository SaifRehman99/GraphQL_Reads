const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  genre: { type: String, required: true },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'author',
  },
});

module.exports = mongoose.model('book', bookSchema);
