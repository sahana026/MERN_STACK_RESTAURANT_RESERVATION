import express from "express";
import send_reservation from "../controller/reservation.js";
import { Reservation } from "../models/reservation.js";

const router = express.Router();

router.post("/send", send_reservation);

// Get all reservations
router.get("/all", async (req, res) => {
  try {
    const reservations = await Reservation.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      count: reservations.length,
      data: reservations,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching reservations",
      error: error.message,
    });
  }
});

export default router;
