import express from "express";
import { getProducts } from "../controllers/client";
const router = express.Router();

router.get("/prodcuts", getProducts);

export default router;
