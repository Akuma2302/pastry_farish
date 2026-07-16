// ─────────────────────────────────────────
//  SKU DEFINITIONS — edit to match your menu
//  `image` is served by the frontend static server at /assets/items/...
//  and reused by the Telegram bot when it prompts for each item.
// ─────────────────────────────────────────
const SKUS = [
  { id: 1,  name: 'Almond Pistachio Croissant', salePrice: 12.00, costPrice: 8.70,  image: '/assets/items/item-a.png' },
  { id: 2,  name: 'Korean Garlic Cheese',        salePrice: 10.00,  costPrice: 5.90,  image: '/assets/items/item-b.png' },
  { id: 3,  name: 'Strawberry Croissant',       salePrice: 12.00, costPrice: 8.80,  image: '/assets/items/item-c.png' },
  { id: 4,  name: 'Strawberry Danish',          salePrice: 10.00,  costPrice: 5.80,  image: '/assets/items/item-d.png' },
  { id: 5,  name: 'Blueberry Danish',           salePrice: 10.00,  costPrice: 6.90,  image: '/assets/items/item-e.png' },
  { id: 6,  name: 'Butter Croissant',          salePrice: 9.00, costPrice: 3.50,  image: '/assets/items/item-f.png' }
];

module.exports = SKUS;
