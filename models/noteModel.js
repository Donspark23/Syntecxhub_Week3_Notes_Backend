const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
{
  title: { type: String, required: true },
  content: String,

  category: {
    type: String,
    default: "general"
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  archived: {
    type: Boolean,
    default: false
  }
},
{ timestamps: true }
);

noteSchema.index({ title: "text", content: "text" });

module.exports = mongoose.model("Note", noteSchema);;
