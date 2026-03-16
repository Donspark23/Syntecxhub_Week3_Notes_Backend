const Note = require("../models/noteModel");

exports.createNote = async (req, res) => {

  const note = await Note.create({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    user: req.user._id
  });

  res.json(note);
};

exports.getMyNotes = async (req, res) => {

  const notes = await Note.find({
    user: req.user._id,
    archived: false
  }).populate("user", "name email");

  res.json(notes);
};

exports.getNote = async (req, res) => {

  const note = await Note.findOne({
    _id: req.params.id,
    user: req.user._id
  });

  res.json(note);
};

exports.updateNote = async (req, res) => {

  const note = await Note.findOneAndUpdate(
    { _id: req.params.id, user: req.user._id },
    req.body,
    { new: true }
  );

  res.json(note);
};

exports.archiveNote = async (req, res) => {

  const note = await Note.findOneAndUpdate(
    { _id: req.params.id, user: req.user._id },
    { archived: true },
    { new: true }
  );

  res.json(note);
};

exports.searchNotes = async (req, res) => {

  const results = await Note.find(
    { $text: { $search: req.query.q } },
    { score: { $meta: "textScore" } }
  ).sort({ score: { $meta: "textScore" } });

  res.json(results);
};
