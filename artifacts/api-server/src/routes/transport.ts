import { Router } from "express";

const router = Router();

const transportOptions = [
  { id: 1, from: "Mumbai", to: "Chhatrapati Sambhajinagar", vehicleType: "Sedan", capacity: 4, pricePerPerson: 1800, duration: "5-6 hours" },
  { id: 2, from: "Mumbai", to: "Chhatrapati Sambhajinagar", vehicleType: "SUV", capacity: 6, pricePerPerson: 1400, duration: "5-6 hours" },
  { id: 3, from: "Mumbai", to: "Chhatrapati Sambhajinagar", vehicleType: "Tempo Traveller", capacity: 12, pricePerPerson: 900, duration: "6-7 hours" },
  { id: 4, from: "Pune", to: "Chhatrapati Sambhajinagar", vehicleType: "Sedan", capacity: 4, pricePerPerson: 1400, duration: "4-5 hours" },
  { id: 5, from: "Pune", to: "Chhatrapati Sambhajinagar", vehicleType: "SUV", capacity: 6, pricePerPerson: 1100, duration: "4-5 hours" },
];

router.get("/transport", (_req, res) => {
  res.json(transportOptions);
});

export default router;
