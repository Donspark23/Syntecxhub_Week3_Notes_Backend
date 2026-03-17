const router = require("express").Router();

const {
  createNote,
  getMyNotes,
  getNote,
  updateNote,
  archiveNote,
  searchNotes
} = require("../controllers/noteController");

const { protect } = require("../middleware/authMiddleware");

/**
 * @swagger
 * tags:
 *   name: Notes
 *   description: Notes management
 */

/**
 * @swagger
 * /api/notes:
 *   post:
 *     summary: Create a new note
 *     tags: [Notes]
    *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               {
                  title:
                     type: string
                  content:
                     type: string
                  category: 
                     type: string
 */
router.post("/", protect, createNote);

/**
 * @swagger
 * /api/notes:
 *   get:
 *     summary: Get all noted 
 *     tags: [Notes]
 */
router.get("/", protect, getMyNotes);

/**
 * @swagger
 * /api/notes/search:
 *   get:
 *     summary: Search notes
 *     tags: [Notes]
 */
router.get("/search", protect, searchNotes);

/**
 * @swagger
 * /api/notes/{id}:
 *   get:
 *     summary: Get a note by ID
 *     tags: [Notes]
 */
router.get("/:id", protect, getNote);

/**
 * @swagger
 * /api/notes/{id}:
 *   put:
 *     summary: Update a note
 *     tags: [Notes]
 */
router.put("/:id", protect, updateNote);

/**
 * @swagger
 * /api/notes/{id}:
 *   delete:
 *     summary: Archive a note
 *     tags: [Notes]
 */
router.delete("/:id", protect, archiveNote);

module.exports = router;
