const mongoose = require("mongoose");

const PostTestSchema = mongoose.Schema({
  creator: { type: String },
  content: { type: String },
  files: { type: String },
});

module.exports = mongoose.model("Post", PostTestSchema);
