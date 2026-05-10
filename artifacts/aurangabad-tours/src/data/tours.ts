export interface Tour {
  id: number;
  name: string;
  category: string;
  description: string;
  location: string;
  duration: string;
  highlights: string[];
  imageUrl: string;
  featured: boolean;
  rating?: number | null;
  price?: number | null;
}

export const tours: Tour[] = [
  {
    id: 1,
    name: "Ajanta Caves",
    category: "cave",
    description:
      "A UNESCO World Heritage Site featuring 30 rock-cut Buddhist cave monuments dating from the 2nd century BCE to 480 CE. The caves are renowned for their exquisite paintings and sculptures depicting the life of Buddha and Jataka tales — considered masterpieces of Buddhist religious art.",
    location: "Ajanta, Chhatrapati Sambhajinagar District",
    duration: "Full Day (6-8 hrs)",
    highlights: [
      "UNESCO World Heritage Site",
      "30 rock-cut caves",
      "Ancient Buddhist paintings",
      "Jataka tale sculptures",
      "Dating back to 2nd century BCE",
    ],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Ajanta_%2863%29.jpg",
    featured: true,
    rating: 4.8,
    price: 1200,
  },
  {
    id: 2,
    name: "Ellora Caves",
    category: "cave",
    description:
      "Another UNESCO World Heritage Site showcasing 34 monasteries and temples carved into the Charanandri Hills between the 6th and 11th centuries. Ellora uniquely represents Buddhist, Hindu, and Jain faiths — a testament to religious harmony in ancient India. The Kailasa Temple (Cave 16) is a highlight.",
    location: "Ellora, 30 km from Chhatrapati Sambhajinagar",
    duration: "Full Day (7-8 hrs)",
    highlights: [
      "UNESCO World Heritage Site",
      "34 multi-religion caves",
      "Kailasa Temple monolith",
      "Buddhist Hindu Jain heritage",
      "6th to 11th century art",
    ],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Kailash_Temple%2C_Ellora.jpg",
    featured: true,
    rating: 4.9,
    price: 1100,
  },
  {
    id: 3,
    name: "Daulatabad Fort",
    category: "fort",
    description:
      "One of the most formidable forts in India, Daulatabad Fort sits atop a 200-metre conical hill and dates back to 1187 CE. Built by the Yadava king Bhillama V, it was later fortified by Muhammad bin Tughluq who relocated his capital here from Delhi. The fort features multiple concentric walls, a moat, and an intricate defense system.",
    location: "Daulatabad, 15 km from Chhatrapati Sambhajinagar",
    duration: "3-4 hours",
    highlights: [
      "900-year-old fortification",
      "Panoramic hilltop views",
      "Multi-layered defense system",
      "Historical moat and drawbridge",
      "Chand Minar tower",
    ],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/00/Daulatabad_Fort.jpg",
    featured: true,
    rating: 4.5,
    price: 800,
  },
  {
    id: 4,
    name: "Bibi Ka Maqbara",
    category: "mausoleum",
    description:
      'Often called the "Taj of the Deccan," Bibi Ka Maqbara was built in 1678 by Azam Shah for his mother Dilras Banu Begum, wife of Emperor Aurangzeb. Designed by architect Ata-ullah and engineer Hanspat Rai, it closely resembles the Taj Mahal in Agra, though on a smaller scale, making it a must-visit Mughal monument.',
    location: "Chhatrapati Sambhajinagar City",
    duration: "2-3 hours",
    highlights: [
      "Taj Mahal of the Deccan",
      "1678 Mughal architecture",
      "Beautiful marble mausoleum",
      "Persian garden layout",
      "Aurangzeb era heritage",
    ],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/78/The_Tomb_of_Dilras_Banu_Begum.jpg",
    featured: true,
    rating: 4.6,
    price: 500,
  },
  {
    id: 5,
    name: "Grishneshwar Temple",
    category: "temple",
    description:
      "One of the 12 Jyotirlinga shrines dedicated to Lord Shiva and among the most sacred temples in India. Located near the Ellora Caves, the temple was rebuilt in the 18th century by Ahilyabai Holkar of Indore. The red stone structure with a beautiful shikhara (tower) is a masterpiece of Hemadpanthi architecture.",
    location: "Verul, near Ellora, 30 km from Chhatrapati Sambhajinagar",
    duration: "2 hours",
    highlights: [
      "12th Jyotirlinga shrine",
      "18th century Hemadpanthi architecture",
      "Red stone sculpted walls",
      "Sacred Shiva shrine",
      "Built by Ahilyabai Holkar",
    ],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Grishneshwar_temple_in_Aurangabad_district.jpg",
    featured: true,
    rating: 4.7,
    price: 0,
  },
  {
    id: 6,
    name: "Panchakki",
    category: "monument",
    description:
      "A 17th-century water mill and garden complex built around the dargah of Sufi saint Hazrat Shah Musafir. The hydraulic mechanism powering the mill uses water channeled through an aqueduct from mountains 8 km away — a remarkable feat of medieval engineering. The large garden tank and fish pond add to its serene beauty.",
    location: "Chhatrapati Sambhajinagar City",
    duration: "1-2 hours",
    highlights: [
      "17th century water mill",
      "Sufi dargah heritage",
      "Medieval hydraulic engineering",
      "Beautiful fish tank",
      "Peaceful garden complex",
    ],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/37/Panchakki_fountain%2C_Aurangabad.jpg",
    featured: false,
    rating: 4.3,
    price: 300,
  },
  {
    id: 7,
    name: "Aurangabad Caves",
    category: "cave",
    description:
      "A group of 12 rock-cut Buddhist caves dating from the 3rd to 7th centuries CE, divided into two groups on the north side of the Aurangabad city. These caves contain some of the finest examples of early Tantric Buddhist art, including intricately carved panels of feminine figures that show a unique blend of sensuousness and spirituality.",
    location: "Aurangabad City",
    duration: "2-3 hours",
    highlights: [
      "3rd to 7th century caves",
      "Early Tantric Buddhist art",
      "Intricate feminine carvings",
      "Two distinct cave groups",
      "Less crowded than Ajanta/Ellora",
    ],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/df/Aurangabad_cave2.jpg",
    featured: false,
    rating: 4.2,
    price: 400,
  },
  {
    id: 8,
    name: "Soneri Mahal",
    category: "monument",
    description:
      "A beautiful 17th-century palace within the Chhatrapati Shivaji Maharaj Museum premises, Soneri Mahal (Golden Palace) was built by the Nizam of Hyderabad. The palace once featured golden frescoes on its walls — giving it its name. It now houses a museum of local art, antiquities, and the history of Chhatrapati Sambhajinagar.",
    location: "Chhatrapati Sambhajinagar City",
    duration: "1-2 hours",
    highlights: [
      "17th century Nizam palace",
      "Golden frescoes heritage",
      "Museum of local antiquities",
      "Mughal-Maratha architecture",
      "Well-preserved historical structure",
    ],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/45/Soneri_Mahal.jpg",
    featured: false,
    rating: 4.0,
    price: 200,
  },
  {
    id: 9,
    name: "Siddharth Garden",
    category: "garden",
    description:
      "A popular public garden named after Gautam Buddha (Siddharth) spread across 21 acres in the heart of Chhatrapati Sambhajinagar. The garden features a mini zoo, musical fountain, well-maintained lawns, and beautiful flower beds. It is a favorite weekend retreat for families and an ideal spot for a leisurely evening stroll.",
    location: "Chhatrapati Sambhajinagar City",
    duration: "1-2 hours",
    highlights: [
      "21-acre public garden",
      "Mini zoo with animals",
      "Musical fountain show",
      "Beautiful flower gardens",
      "Ideal for family picnics",
    ],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/37/Gate_of_Siddharth_Garden_and_Zoo%2C_Aurangabad.jpg",
    featured: false,
    rating: 4.1,
    price: 0,
  },
  {
    id: 10,
    name: "Jayakwadi Dam",
    category: "lake",
    description:
      "The largest reservoir in Maharashtra, Jayakwadi Dam (also known as Nathsagar) is built across the Godavari River and serves as a lifeline for the Marathwada region. The backwaters spread over 350 sq km, creating a scenic landscape that attracts migratory birds in winter and offers beautiful sunsets year-round.",
    location: "Paithan, 50 km from Chhatrapati Sambhajinagar",
    duration: "3-4 hours",
    highlights: [
      "Largest dam in Maharashtra",
      "Godavari River reservoir",
      "350 sq km backwaters",
      "Migratory bird sanctuary",
      "Beautiful sunset views",
    ],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/12/Jayakwadi_Dam.jpg",
    featured: false,
    rating: 4.3,
    price: 0,
  },
  {
    id: 11,
    name: "Mhaismal Hill Station",
    category: "hill",
    description:
      "A picturesque hill station located about 55 km from Chhatrapati Sambhajinagar at an elevation of 900 metres, Mhaismal offers breathtaking views of the Sahyadri ranges and a cool climate year-round. The hill features a Mahadev temple, a scenic viewpoint, and lush green forests that come alive during the monsoon season.",
    location: "Mhaismal, 55 km from Chhatrapati Sambhajinagar",
    duration: "Full Day",
    highlights: [
      "900-metre altitude hill station",
      "Panoramic Sahyadri views",
      "Ancient Mahadev temple",
      "Lush monsoon greenery",
      "Cool weather year-round",
    ],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Mhaismal_Aurangabaad.jpg",
    featured: false,
    rating: 4.4,
    price: 0,
  },
  {
    id: 12,
    name: "Bhadra Maruti Temple",
    category: "temple",
    description:
      "A unique and rare temple where Lord Hanuman is depicted in a reclining (sleeping) posture — one of only three such temples in India. Located in Khuldabad, this ancient temple draws thousands of devotees especially on Tuesdays and Saturdays. The temple complex has a peaceful atmosphere and a beautiful inner sanctum.",
    location: "Khuldabad, 24 km from Chhatrapati Sambhajinagar",
    duration: "1-2 hours",
    highlights: [
      "Reclining Hanuman idol (rare)",
      "One of 3 such temples in India",
      "Ancient religious heritage",
      "Peaceful temple complex",
      "Major pilgrimage destination",
    ],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Bhadra_Maruti_Temple.jpg",
    featured: false,
    rating: 4.6,
    price: 0,
  },
  {
    id: 13,
    name: "Goga Baba Hill",
    category: "hill",
    description:
      "A prominent hill in Chhatrapati Sambhajinagar offering a stunning 360-degree panoramic view of the city and the surrounding Deccan landscape. At the summit stands the ancient Goga Baba dargah, a revered Sufi shrine. The hilltop is especially magical at sunset and provides perfect viewpoints for photography enthusiasts.",
    location: "Chhatrapati Sambhajinagar City",
    duration: "1-2 hours",
    highlights: [
      "360-degree city panorama",
      "Ancient Sufi dargah",
      "Stunning sunset viewpoint",
      "Easy accessible hilltop",
      "Great photography spot",
    ],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/19/Goga_Baba_Tekdi.jpg",
    featured: false,
    rating: 4.2,
    price: 0,
  },
  {
    id: 14,
    name: "Salim Ali Lake",
    category: "lake",
    description:
      "Named after the legendary Indian ornithologist Salim Ali, this serene lake near Chhatrapati Sambhajinagar is a haven for birdwatchers and nature lovers. The lake attracts numerous migratory and resident bird species including flamingos, painted storks, and various herons, especially during winter months. A peaceful spot for morning and evening walks.",
    location: "Chhatrapati Sambhajinagar City outskirts",
    duration: "1-2 hours",
    highlights: [
      "Named after legendary ornithologist",
      "Migratory bird paradise",
      "Flamingos and painted storks",
      "Peaceful lakeside walking trails",
      "Best visited October to March",
    ],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Salim_Ali_Lake.jpg",
    featured: false,
    rating: 4.1,
    price: 0,
  },
  {
    id: 15,
    name: "Khuldabad",
    category: "mausoleum",
    description:
      'Known as the "Valley of Saints," Khuldabad is a historic town 24 km from Chhatrapati Sambhajinagar housing the tombs of several Sufi saints and Mughal emperors, including Emperor Aurangzeb. Aurangzeb\'s tomb is notably simple and unadorned — in stark contrast to other Mughal monuments — buried in an open-air grave as per his own wishes.',
    location: "Khuldabad, 24 km from Chhatrapati Sambhajinagar",
    duration: "2-3 hours",
    highlights: [
      "Tomb of Emperor Aurangzeb",
      "Valley of Saints heritage",
      "Multiple Sufi saint shrines",
      "Simple open-air royal tomb",
      "24 km from Aurangabad",
    ],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c3/A_tomb_in_Khuldabad%2C_near_Ellora_in_India_%28c._1900%29_-_1.jpg",
    featured: false,
    rating: 4.0,
    price: 0,
  },
];

export const featuredTours = tours.filter((t) => t.featured);

export function getTourById(id: number): Tour | undefined {
  return tours.find((t) => t.id === id);
}
