import { Router } from "express";
import type { RequestHandler } from "express";

const router = Router();

const tours = [
  { id: 1, name: "Ajanta Caves", category: "cave", description: "A UNESCO World Heritage Site featuring 30 rock-cut Buddhist cave monuments.", location: "Ajanta, Chhatrapati Sambhajinagar District", duration: "Full Day (6-8 hrs)", highlights: ["UNESCO World Heritage Site", "30 rock-cut caves", "Ancient Buddhist paintings"], imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Ajanta_%2863%29.jpg", featured: true, rating: 4.8, price: 1200 },
  { id: 2, name: "Ellora Caves", category: "cave", description: "UNESCO World Heritage Site showcasing 34 monasteries and temples.", location: "Ellora, 30 km from Chhatrapati Sambhajinagar", duration: "Full Day (7-8 hrs)", highlights: ["UNESCO World Heritage Site", "Kailasa Temple monolith"], imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Kailash_Temple%2C_Ellora.jpg", featured: true, rating: 4.9, price: 1100 },
  { id: 3, name: "Daulatabad Fort", category: "fort", description: "One of the most formidable forts in India, atop a 200-metre conical hill.", location: "Daulatabad, 15 km from Chhatrapati Sambhajinagar", duration: "3-4 hours", highlights: ["900-year-old fortification", "Panoramic hilltop views"], imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/00/Daulatabad_Fort.jpg", featured: true, rating: 4.5, price: 800 },
  { id: 4, name: "Bibi Ka Maqbara", category: "mausoleum", description: "The Taj of the Deccan, built in 1678 by Azam Shah.", location: "Chhatrapati Sambhajinagar City", duration: "2-3 hours", highlights: ["Taj Mahal of the Deccan", "Mughal architecture"], imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/78/The_Tomb_of_Dilras_Banu_Begum.jpg", featured: true, rating: 4.6, price: 500 },
  { id: 5, name: "Grishneshwar Temple", category: "temple", description: "One of the 12 Jyotirlinga shrines dedicated to Lord Shiva.", location: "Verul, near Ellora", duration: "2 hours", highlights: ["12th Jyotirlinga shrine"], imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Grishneshwar_temple_in_Aurangabad_district.jpg", featured: true, rating: 4.7, price: 0 },
];

const getAllTours: RequestHandler = (_req, res) => {
  res.json(tours);
};

const getFeaturedTours: RequestHandler = (_req, res) => {
  res.json(tours.filter((t) => t.featured));
};

const getTourById: RequestHandler = (req, res) => {
  const id = Number(req.params["id"]);
  const tour = tours.find((t) => t.id === id);
  if (!tour) {
    res.status(404).json({ error: "Tour not found" });
    return;
  }
  res.json(tour);
};

router.get("/tours", getAllTours);
router.get("/tours/featured", getFeaturedTours);
router.get("/tours/:id", getTourById);

export default router;
