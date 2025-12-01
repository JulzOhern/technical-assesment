import { Router } from 'express'
import { searchTerm } from '../controllers/search-term'

export const router = Router()

router.get("/search", searchTerm)