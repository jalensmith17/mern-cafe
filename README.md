<h1>Game Basement</h1>
<p>An ecommerce website with the most popular games, accessories, and gifts in stock!</p>

<h2>Seed file with all of the categories and items</h2>
```require('dotenv').config();
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
    /*-- Nintendo --*/
    {name: 'Nintendo Switch', image: 'https://m.media-amazon.com/images/I/51Gz7IimgoL._AC_UF894,1000_QL80_.jpg', category: categories[0], price: 299.95},
    {name: 'Super Mario Bros. Wonder', image: 'https://pbs.twimg.com/media/FzJ_4B-XsAAg40-.jpg:large', category: categories[0], price: 59.95},
    {name: 'The Legend of Zelda: Tears of the Kingdom', image: 'https://imageio.forbes.com/specials-images/imageserve/63220c5a654e79ab76c1fa09/Zelda-Tears-of-the-Kingdom-boxart/960x0.png?height=1004&width=620&fit=bounds', category: categories[0], price: 59.95},
    {name: 'Mario Party Superstars', image: 'https://media.gamestop.com/i/gamestop/11149254/Mario-Party-Superstars---Nintendo-Switch', category: categories[0], price: 39.95},
    {name: 'Super Mario Odyssey', image: 'https://gamerant.com/wp-content/uploads/super-mario-odyssey-box-art-sombrero.jpeg', category: categories[0], price: 49.95},
    {name: 'Super Smash Bros. Ultimate', image: 'https://gamingbolt.com/wp-content/uploads/2018/08/super-smash-bros-ultimate-box-art.jpg', category: categories[0], price: 59.95},
    {name: 'Animal Crossing: New Horizons', image: 'https://animalcrossingworld.com/wp-content/uploads/2020/01/new-horizons-box-art-english-og-1080-clean.png', category: categories[0], price: 59.95},
    {name: 'Pokémon Scarlet', image: 'https://m.media-amazon.com/images/I/81EyjDeArUL.jpg', category: categories[0], price: 59.95},
    {name: 'Pokémon Violet', image: 'https://m.media-amazon.com/images/I/81+dv1EgXiL._AC_UF1000,1000_QL80_.jpg', category: categories[0], price: 59.95},
    {name: 'Mario Kart 8 Deluxe', image: 'https://m.media-amazon.com/images/I/81iJG2js5-S._AC_UF1000,1000_QL80_.jpg', category: categories[0], price: 59.95},
    /*-- Playstation --*/
    {name: 'Playstation 5', image: 'https://m.media-amazon.com/images/I/51fM0CKG+HL._AC_UF1000,1000_QL80_.jpg', category: categories[1], price: 499.95},
    {name: 'Helldivers II', image: 'https://image.api.playstation.com/vulcan/ap/rnd/202309/0718/ca77865b4bc8a1ea110fbe1492f7de8f80234dd079fc181a.png', category: categories[1], price: 39.95},
    {name: 'Elden Ring', image: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg', category: categories[1], price: 49.95},
    {name: 'Horizon Forbidden West', image: 'https://assets-prd.ignimgs.com/2021/09/02/horizon-forbidden-west-1630599294431.jpeg?fit=bounds&width=1280&height=720', category: categories[1], price: 49.95},
    {name: 'Spider-Man 2', image: 'https://m.media-amazon.com/images/I/81VGpLvXQuL._AC_UF1000,1000_QL80_.jpg', category: categories[1], price: 59.95},
    {name: `Baldur's Gate 3`, image: 'https://images.pushsquare.com/053e2eba1c3b7/baldurs-gate-3-cover.cover_large.jpg', category: categories[1], price: 59.95},
    {name: 'God of War Ragnarok', image: 'https://upload.wikimedia.org/wikipedia/en/e/ee/God_of_War_Ragnar%C3%B6k_cover.jpg', category: categories[1], price: 59.95},
    {name: 'Rachet & Clank: Rift Apart', image: 'https://m.media-amazon.com/images/I/8163O-hji+S._AC_UF1000,1000_QL80_.jpg', category: categories[1], price: 39.95},
    {name: 'Ghost of Tsushima', image: 'https://static.slickdealscdn.com/attachment/6/8/2/7/5/5/300x300/10822396.thumb', category: categories[1], price: 39.95},
    {name: 'Gran Turismo 7', image: 'https://image.api.playstation.com/vulcan/ap/rnd/202109/1321/yZ7dpmjtHr1olhutHT57IFRh.png', category: categories[1], price: 59.95},
    /*-- Xbox --*/
    {name: 'Xbox Series X', image: 'https://i5.walmartimages.com/seo/Xbox-Series-X-Video-Game-Console-Black_9f8c06f5-7953-426d-9b68-ab914839cef4.5f15be430800ce4d7c3bb5694d4ab798.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF', category: categories[2], price: 499.95},
    {name: 'Forza Motorsport', image: 'https://pbs.twimg.com/media/Fw67HSUWcAQHnCP.jpg', category: categories[2], price: 59.95},
    {name: 'Hogwarts Legacy', image: 'https://image.api.playstation.com/vulcan/ap/rnd/202208/0921/Ah7Ar9MU0r1BBlzAUflmhyQP.png', category: categories[2], price: 49.95},
    {name: 'Grand Theft Auto V', image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6503/6503673_sd.jpg;maxHeight=640;maxWidth=550', category: categories[2], price: 29.95},
    {name: `Tom Clancy's Rainbow Six Siege`, image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/7341/7341028_sd.jpg;maxHeight=640;maxWidth=550', category: categories[2], price: 19.95},
    {name: 'Rocket League', image: 'https://cdn2.steamgriddb.com/grid/0e765b51996b81c6ccf9a63e943a2dc7.png', category: categories[2], price: 19.95},
    {name: 'Halo Infinite', image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6414/6414163_sd.jpg;maxHeight=640;maxWidth=550', category: categories[2], price: 49.95},
    {name: 'Starfield', image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6548/6548060_sd.jpg;maxHeight=640;maxWidth=550', category: categories[2], price: 59.95},
    {name: 'Madden NFL 24', image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6547/6547579_sd.jpg;maxHeight=640;maxWidth=550', category: categories[2], price: 59.95},
    {name: 'Day Z', image: 'https://i.ebayimg.com/images/g/07YAAOSwGyVihkja/s-l1200.jpg', category: categories[2], price: 39.95},
    /*-- PC --*/
    {name: 'Red Dead Redemption II', image: 'https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png', category: categories[3], price: 59.95},
    {name: 'Palworld', image: 'https://assets-prd.ignimgs.com/2024/01/19/palworld-1705691572614.jpg', category: categories[3], price: 35.95},
    {name: 'Stardew Valley', image: 'https://upload.wikimedia.org/wikipedia/en/f/fd/Logo_of_Stardew_Valley.png', category: categories[3], price: 10.95},
    {name: 'The Witcher 3: Wild Hunt', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Witcher_3_cover_art.jpg/220px-Witcher_3_cover_art.jpg', category: categories[3], price: 29.95},
    {name: 'Minecraft', image: 'https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png', category: categories[3], price: 19.95},
    {name: 'Prey', image: 'https://upload.wikimedia.org/wikipedia/en/2/29/Prey_cover_art.jpg', category: categories[3], price: 19.95},
    {name: 'Hollow Knight', image: 'https://upload.wikimedia.org/wikipedia/en/0/04/Hollow_Knight_first_cover_art.webp', category: categories[3], price: 9.95},
    {name: 'Alan Wake 2', image: 'https://upload.wikimedia.org/wikipedia/en/e/ed/Alan_Wake_2_box_art.jpg', category: categories[3], price: 49.95},
    {name: 'Armored Core 6: Fires of Rubicon', image: 'https://image.api.playstation.com/vulcan/ap/rnd/202304/2800/09d5b936da100fb0b96a2cdaa96a835e143b41b3e3ae0054.png', category: categories[3], price: 49.95},
    {name: 'Cyberpunk 2077', image: 'https://howlongtobeat.com/games/Cyberpunk-2077-2.jpg', category: categories[3], price: 29.95},
    /*-- VR --*/
    {name: 'Meta Quest 3', image: 'https://www.techspot.com/images/products/2023/audio-video/org/2023-10-13-product-4.jpg', category: categories[4], price: 499.95},
    {name: 'Beat Saber', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Beat_Saber_logo.jpg/220px-Beat_Saber_logo.jpg', category: categories[4], price: 29.95},
    {name: `Five Nights at Freddy's: Help Wanted`, image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/732690/capsule_616x353.jpg?t=1686587846', category: categories[4], price: 29.95},
    {name: `Half-Life: Alyx`, image: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/49/Half-Life_Alyx_Cover_Art.jpg/220px-Half-Life_Alyx_Cover_Art.jpg', category: categories[4], price: 59.95},
    {name: `Bonelab`, image: 'https://m.media-amazon.com/images/M/MV5BMzk5MmYwNWMtODk2Yy00MGEwLTgwNDUtZmNlMjcxYjg4NDJlXkEyXkFqcGdeQXVyMTE4NDEyNDk@._V1_.jpg', category: categories[4], price: 39.95},
    {name: `No Man's Sky`, image: 'https://assets1.ignimgs.com/2019/08/14/no-mans-sky---beyond-version---button-1565744905061.jpg', category: categories[4], price: 59.95},
    /*-- Accessories --*/
    {name: 'Playstation 5 DualSense Wireless Controller', image: 'https://m.media-amazon.com/images/I/61uQKdWCfAL._AC_UF1000,1000_QL80_.jpg', category: categories[5], price: 54.95},
    {name: 'Xbox Series X|S Wireless Controller', image: 'https://target.scene7.com/is/image/Target/GUEST_bdc70c48-04c9-4341-84ba-92e2614807ec?wid=488&hei=488&fmt=pjpeg', category: categories[5], price: 54.95},
    {name: 'Astro Gaming A50 Wireless Headset', image: 'https://m.media-amazon.com/images/I/71Pfow1d1-L.jpg', category: categories[5], price: 299.95},
    {name: 'Logitech - G PRO TKL Wired Keyboard', image: 'https://resource.logitechg.com/d_transparent.gif/content/dam/gaming/en/products/pro-keyboard/pro-keyboard-gallery/deu-pro-gaming-keyboard-gallery-topdown.png', category: categories[5], price: 99.95},
    {name: 'Joy-Con (L/R)', image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5730/5730704_rd.jpg', category: categories[5], price: 79.95},
    {name: 'GUNNAR - Blue Light Gaming & Computer Glasses', image: 'https://m.media-amazon.com/images/I/81LIseFe-sL._AC_UY1000_.jpg', category: categories[5], price: 29.95},
    /*-- Gift Cards --*/
    {name: 'Nintendo $50 eShop Gift Card', image: 'https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&itemId=1273321-847&recipeName=680', category: categories[6], price: 50.00},
    {name: 'Playstation $50 Store Gift Card', image: 'https://m.media-amazon.com/images/I/713o75gVqqL._AC_UF1000,1000_QL80_.jpg', category: categories[6], price: 50.00},
    {name: 'Xbox $50 Gift Card', image: 'https://m.media-amazon.com/images/I/61b6jmkkBDL._AC_UF1000,1000_QL80_.jpg', category: categories[6], price: 50.00},
    {name: 'Meta Quest $50 Gift Card', image: 'https://cdn.mall.adeptmind.ai/https%3A%2F%2Ftarget.scene7.com%2Fis%2Fimage%2FTarget%2FGUEST_53a5c8f4-fa0e-49ca-92d5-c0f243550b9c%3Fwid%3D1000%26hei%3D1000_large.jpg', category: categories[6], price: 50.00},
    {name: 'Steam $50 Gift Card', image: 'https://m.media-amazon.com/images/I/815jDkv65fL._AC_UF1000,1000_QL80_.jpg', category: categories[6], price: 50.00}
  ]);

  console.log(items)

  process.exit();

})();
```