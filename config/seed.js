require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Nintendo', sortOrder: 10},
    {name: 'Playstation', sortOrder: 20},
    {name: 'Xbox', sortOrder: 30},
    {name: 'PC', sortOrder: 40},
    {name: 'VR', sortOrder: 50},
    {name: 'Accessories', sortOrder: 60},
    {name: 'Gift Cards', sortOrder: 70},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Nintendo Switch', emoji: '🍔', category: categories[0], price: 299.95},
    {name: 'Super Mario Bros. Wonder', emoji: '🥪', category: categories[0], price: 59.95},
    {name: 'The Legend of Zelda: Tears of the Kingdom', emoji: '🌭', category: categories[0], price: 59.95},
    {name: 'Playstation 5', emoji: '🦀', category: categories[1], price: 499.95},
    {name: 'Helldivers II', emoji: '🍤', category: categories[1], price: 39.95},
    {name: 'Elden Ring', emoji: '🦞', category: categories[1], price: 49.95},
    {name: 'Xbox Series X', emoji: '🌮', category: categories[2], price: 499.95},
    {name: 'Forza Motorsport', emoji: '🌯', category: categories[2], price: 59.95},
    {name: 'Hogwarts Legacy', emoji: '🍕', category: categories[2], price: 49.95},
    {name: 'Red Dead Redemption II', emoji: '🍝', category: categories[3], price: 59.95},
    {name: 'Palworld', emoji: '🍝', category: categories[3], price: 35.95},
    {name: 'Stardew Valley', emoji: '🍞', category: categories[3], price: 10.95},
    {name: 'Meta Quest 3', emoji: '🍟', category: categories[4], price: 499.95},
    {name: 'Beat Saber', emoji: '🥗', category: categories[4], price: 29.95},
    {name: `Five Nights at Freddy's: Help Wanted`, emoji: '🥗', category: categories[4], price: 29.95},
    {name: 'Playstation 5 DualSense Wireless Controller', emoji: '🍨', category: categories[5], price: 54.95},
    {name: 'Xbox Series X|S Wireless Controller', emoji: '🧁', category: categories[5], price: 54.95},
    {name: 'Astro Gaming A50 Wireless Headset', emoji: '🍮', category: categories[5], price: 299.95},
    {name: 'Logitech - G PRO TKL Wired Keyboard', emoji: '🍰', category: categories[5], price: 99.95},
    {name: 'Nintendo $50 eShop Gift Card', emoji: '🥛', category: categories[6], price: 50.00},
    {name: 'Playstation $50 Store Gift Card', emoji: '☕', category: categories[6], price: 50.00},
    {name: 'Xbox $50 Gift Card', emoji: '🍹', category: categories[6], price: 50.00},
    {name: 'Meta Quest $50 Gift Card', emoji: '🍺', category: categories[6], price: 50.00},
    {name: 'Steam $50 Gift Card', emoji: '🍷', category: categories[6], price: 50.00},
  ]);

  console.log(items)

  process.exit();

})();