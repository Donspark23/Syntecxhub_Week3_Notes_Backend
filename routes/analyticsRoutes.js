const router = require("express").Router();

const {
  getCategoryAnalytics,
  getMonthlyAnalytics
} = require("../controllers/analyticsController");

const { protect } = require("../middleware/authMiddleware");

/**
 * @swagger
 * tags:
 *   name: Analytics
 *   description: Notes analytics
 */

/**
 * @swagger
 * /api/analytics/category:
 *   get:
 *     summary: Get notes grouped by category
 *     tags: [Analytics]
 */
router.get("/category", protect, getCategoryAnalytics);

/**
 * @swagger
 * /api/analytics/monthly:
 *   get:
 *     summary: Get notes created per month
 *     tags: [Analytics]
 */
router.get("/monthly", protect, getMonthlyAnalytics);

module.exports = router;
