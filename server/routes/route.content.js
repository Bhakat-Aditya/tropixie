import express from 'express'
import {
  getAllContent,
  updateHero,
  updateAbout,
  updateStats,
  updateServices,
  updateShowreel,
  updateTeam,
  updateContact,
  uploadImage,
  deleteImage,
  seedContent,
} from '../controllers/controller.content.js'
import { authMiddleware } from '../middleware/middleware.auth.js'
import { upload } from '../middleware/middleware.upload.js'

const router = express.Router()

// Public
router.get('/', getAllContent)

// Protected content updates
router.put('/hero', authMiddleware, updateHero)
router.put('/about', authMiddleware, updateAbout)
router.put('/stats', authMiddleware, updateStats)
router.put('/services', authMiddleware, updateServices)
router.put('/showreel', authMiddleware, updateShowreel)
router.put('/team', authMiddleware, updateTeam)
router.put('/contact', authMiddleware, updateContact)

// Image upload/delete
router.post('/upload', authMiddleware, upload.single('image'), uploadImage)
router.delete('/upload/:publicId', authMiddleware, deleteImage)

// Seed default content (run once)
router.post('/seed', authMiddleware, seedContent)

export default router
