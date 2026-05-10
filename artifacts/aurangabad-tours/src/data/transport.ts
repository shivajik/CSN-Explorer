export interface TransportOption {
  id: number;
  from: string;
  to: string;
  vehicleType: string;
  capacity: number;
  pricePerPerson: number;
  duration: string;
  description?: string | null;
}

export const transportOptions: TransportOption[] = [
  {
    id: 1,
    from: "Mumbai",
    to: "Chhatrapati Sambhajinagar",
    vehicleType: "Sedan",
    capacity: 4,
    pricePerPerson: 1800,
    duration: "5-6 hours",
    description:
      "Comfortable sedan car with AC, ideal for small families or couples. Door-to-door pickup from anywhere in Mumbai.",
  },
  {
    id: 2,
    from: "Mumbai",
    to: "Chhatrapati Sambhajinagar",
    vehicleType: "SUV",
    capacity: 6,
    pricePerPerson: 1400,
    duration: "5-6 hours",
    description:
      "Spacious SUV with ample luggage space. Perfect for families with children. Experienced driver with Chhatrapati Sambhajinagar route expertise.",
  },
  {
    id: 3,
    from: "Mumbai",
    to: "Chhatrapati Sambhajinagar",
    vehicleType: "Tempo Traveller",
    capacity: 12,
    pricePerPerson: 900,
    duration: "6-7 hours",
    description:
      "Mini bus ideal for group tours. Reclining seats, overhead luggage, and comfortable journey from Mumbai to Chhatrapati Sambhajinagar (335 km).",
  },
  {
    id: 4,
    from: "Mumbai",
    to: "Chhatrapati Sambhajinagar",
    vehicleType: "Luxury Coach",
    capacity: 30,
    pricePerPerson: 750,
    duration: "6-7 hours",
    description:
      "Premium air-conditioned coach with push-back seats, ideal for large tour groups. Includes onboard entertainment and rest stop.",
  },
  {
    id: 5,
    from: "Pune",
    to: "Chhatrapati Sambhajinagar",
    vehicleType: "Sedan",
    capacity: 4,
    pricePerPerson: 1400,
    duration: "4-5 hours",
    description:
      "Comfortable sedan car with AC. Quick and convenient pickup from anywhere in Pune for your Chhatrapati Sambhajinagar heritage tour (235 km).",
  },
  {
    id: 6,
    from: "Pune",
    to: "Chhatrapati Sambhajinagar",
    vehicleType: "SUV",
    capacity: 6,
    pricePerPerson: 1100,
    duration: "4-5 hours",
    description:
      "Spacious SUV with luggage space. Perfect for families. The Pune-Chhatrapati Sambhajinagar route (NH 65) is one of the smoothest drives in Maharashtra.",
  },
  {
    id: 7,
    from: "Pune",
    to: "Chhatrapati Sambhajinagar",
    vehicleType: "Tempo Traveller",
    capacity: 12,
    pricePerPerson: 750,
    duration: "5-6 hours",
    description:
      "Mini bus for group tours from Pune. Comfortable reclining seats with ample storage. Well-suited for college trips and family pilgrimages.",
  },
  {
    id: 8,
    from: "Chhatrapati Sambhajinagar",
    to: "Mumbai",
    vehicleType: "Sedan",
    capacity: 4,
    pricePerPerson: 1800,
    duration: "5-6 hours",
    description:
      "Drop service from Chhatrapati Sambhajinagar to Mumbai after your heritage tour. Comfortable AC sedan with experienced driver.",
  },
  {
    id: 9,
    from: "Chhatrapati Sambhajinagar",
    to: "Mumbai",
    vehicleType: "SUV",
    capacity: 6,
    pricePerPerson: 1400,
    duration: "5-6 hours",
    description:
      "Group drop from Chhatrapati Sambhajinagar to Mumbai in a spacious SUV. Flexible departure times to suit your return schedule.",
  },
  {
    id: 10,
    from: "Chhatrapati Sambhajinagar",
    to: "Pune",
    vehicleType: "Sedan",
    capacity: 4,
    pricePerPerson: 1400,
    duration: "4-5 hours",
    description:
      "Drop service from Chhatrapati Sambhajinagar to Pune. Comfortable and timely return journey after exploring all the heritage sites.",
  },
  {
    id: 11,
    from: "Chhatrapati Sambhajinagar",
    to: "Pune",
    vehicleType: "SUV",
    capacity: 6,
    pricePerPerson: 1100,
    duration: "4-5 hours",
    description:
      "Group drop to Pune in a comfortable SUV. Great way to end your Chhatrapati Sambhajinagar trip with a relaxed drive back.",
  },
];
