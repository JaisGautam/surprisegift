// Server-side fallback catalogue for curated packages and demo shop items.
// Database-backed products always take their price from MongoDB instead.
module.exports = {
  packages: {
    "home-pkg": { title: "Cute Budget Box", price: 499 },
    "normal-pkg": { title: "Classic Gift Package", price: 999 },
    "surprise-box": { title: "Mystery Surprise Box", price: 1499 },
    "dad-special": { title: "Thoughtful Gift Box", price: 1899 },
    "mom-special": { title: "Heartfelt Hamper", price: 1999 },
    "luxury-pkg": { title: "Luxury Celebration Box", price: 2499 },
  },
  products: {
    "gift-teddy": { title: "Classic Teddy Bear", price: 599 },
    "gift-flowers": { title: "Romantic Flower Bouquet", price: 799 },
    "gift-chocolate": { title: "Chocolate Gift Hamper", price: 699 },
    "gift-frame": { title: "Personalized Photo Frame", price: 499 },
  },
};
