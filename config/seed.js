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
    {name: 'Nintendo Switch', image: 'https://m.media-amazon.com/images/I/51Gz7IimgoL._AC_UF894,1000_QL80_.jpg', category: categories[0], price: 299.95},
    {name: 'Super Mario Bros. Wonder', image: 'https://upload.wikimedia.org/wikipedia/en/a/a3/Mariowonder.png', category: categories[0], price: 59.95},
    {name: 'The Legend of Zelda: Tears of the Kingdom', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/The_Legend_of_Zelda_Tears_of_the_Kingdom_cover.jpg/220px-The_Legend_of_Zelda_Tears_of_the_Kingdom_cover.jpg', category: categories[0], price: 59.95},
    {name: 'Playstation 5', image: 'https://m.media-amazon.com/images/I/51fM0CKG+HL._AC_UF1000,1000_QL80_.jpg', category: categories[1], price: 499.95},
    {name: 'Helldivers II', image: 'https://image.api.playstation.com/vulcan/ap/rnd/202309/0718/ca77865b4bc8a1ea110fbe1492f7de8f80234dd079fc181a.png', category: categories[1], price: 39.95},
    {name: 'Elden Ring', image: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg', category: categories[1], price: 49.95},
    {name: 'Xbox Series X', image: 'https://i5.walmartimages.com/seo/Xbox-Series-X-Video-Game-Console-Black_9f8c06f5-7953-426d-9b68-ab914839cef4.5f15be430800ce4d7c3bb5694d4ab798.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF', category: categories[2], price: 499.95},
    {name: 'Forza Motorsport', image: 'https://pbs.twimg.com/media/Fw67HSUWcAQHnCP.jpg', category: categories[2], price: 59.95},
    {name: 'Hogwarts Legacy', image: 'https://image.api.playstation.com/vulcan/ap/rnd/202208/0921/Ah7Ar9MU0r1BBlzAUflmhyQP.png', category: categories[2], price: 49.95},
    {name: 'Red Dead Redemption II', image: 'https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png', category: categories[3], price: 59.95},
    {name: 'Palworld', image: 'https://assets-prd.ignimgs.com/2024/01/19/palworld-1705691572614.jpg', category: categories[3], price: 35.95},
    {name: 'Stardew Valley', image: 'https://upload.wikimedia.org/wikipedia/en/f/fd/Logo_of_Stardew_Valley.png', category: categories[3], price: 10.95},
    {name: 'Meta Quest 3', image: 'https://www.techspot.com/images/products/2023/audio-video/org/2023-10-13-product-4.jpg', category: categories[4], price: 499.95},
    {name: 'Beat Saber', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Beat_Saber_logo.jpg/220px-Beat_Saber_logo.jpg', category: categories[4], price: 29.95},
    {name: `Five Nights at Freddy's: Help Wanted`, image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/732690/capsule_616x353.jpg?t=1686587846', category: categories[4], price: 29.95},
    {name: 'Playstation 5 DualSense Wireless Controller', image: 'https://m.media-amazon.com/images/I/61uQKdWCfAL._AC_UF1000,1000_QL80_.jpg', category: categories[5], price: 54.95},
    {name: 'Xbox Series X|S Wireless Controller', image: 'https://target.scene7.com/is/image/Target/GUEST_bdc70c48-04c9-4341-84ba-92e2614807ec?wid=488&hei=488&fmt=pjpeg', category: categories[5], price: 54.95},
    {name: 'Astro Gaming A50 Wireless Headset', image: 'https://m.media-amazon.com/images/I/71Pfow1d1-L.jpg', category: categories[5], price: 299.95},
    {name: 'Logitech - G PRO TKL Wired Keyboard', image: 'https://resource.logitechg.com/d_transparent.gif/content/dam/gaming/en/products/pro-keyboard/pro-keyboard-gallery/deu-pro-gaming-keyboard-gallery-topdown.png', category: categories[5], price: 99.95},
    {name: 'Nintendo $50 eShop Gift Card', image: 'https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&itemId=1273321-847&recipeName=680', category: categories[6], price: 50.00},
    {name: 'Playstation $50 Store Gift Card', image: 'https://m.media-amazon.com/images/I/713o75gVqqL._AC_UF1000,1000_QL80_.jpg', category: categories[6], price: 50.00},
    {name: 'Xbox $50 Gift Card', image: 'https://m.media-amazon.com/images/I/61b6jmkkBDL._AC_UF1000,1000_QL80_.jpg', category: categories[6], price: 50.00},
    {name: 'Meta Quest $50 Gift Card', image: 'https://cdn.mall.adeptmind.ai/https%3A%2F%2Ftarget.scene7.com%2Fis%2Fimage%2FTarget%2FGUEST_53a5c8f4-fa0e-49ca-92d5-c0f243550b9c%3Fwid%3D1000%26hei%3D1000_large.jpg', category: categories[6], price: 50.00},
    {name: 'Steam $50 Gift Card', image: 'https://m.media-amazon.com/images/I/815jDkv65fL._AC_UF1000,1000_QL80_.jpg', category: categories[6], price: 50.00},
  ]);

  console.log(items)

  process.exit();

})();