const Note = require("../models/noteModel");

exports.getCategoryAnalytics = async (req, res) => {
  const result = await Note.aggregate([
    {
      $group: {
        _id: "$category",
        total: { $sum: 1 }
      }
    }
  ]);

  res.json(result);
};

exports.getMonthlyAnalytics = async (req, res) => {
  const result = await Note.aggregate([
    {
      $group: {
        _id: { $month: "$createdAt" },
        count: { $sum: 1 }
      }
    }
  ]);

  res.json(result);
};
