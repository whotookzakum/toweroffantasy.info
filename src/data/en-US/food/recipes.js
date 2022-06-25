const recipes = [
    {
        id: 0,
        name: 'Fried Mushrooms',
        imgSrc: 'friedmushroom.png',
        rarity: 1,
        stars: 1,
        effect: 'Recovers **5** satiety<br>Recovers **10% + 1,500** HP',
        ingredients: [
            [mushroom, 2]
        ]
    },
    {
        id: 1,
        name: 'Crispy Grilled Fish',
        imgSrc: 'crispygrilledfish.png',
        rarity: 1,
        stars: 1,
        effect: 'Recovers **10** satiety',
        ingredients: [
            [silverperch, 1]
        ]
    },
    {
        id: 2,
        name: 'Wholegrain Bread',
        imgSrc: 'wheatbread.png',
        rarity: 1,
        stars: 1,
        effect: 'Recovers **10** satiety',
        ingredients: [
            [wheat, 2]
        ]
    },
    {
        id: 3,
        name: 'Sizzling Meat',
        imgSrc: 'sizzledbarbecuedmeat.png',
        rarity: 1,
        stars: 1,
        effect: 'Recovers **10** satiety',
        ingredients: [
            [meat, 2]
        ]
    },
    {
        id: 4,
        name: 'Lettuce Salad',
        imgSrc: 'lettucesalad.png',
        rarity: 1,
        stars: 1,
        effect: 'Recovers **5** satiety<br>Recovers **10% + 1,500** HP',
        ingredients: [
            [lettuce, 2],
            [dressing, 1]
        ]
    },
    {
        id: 5,
        name: 'Fried Egg',
        imgSrc: 'friedegg.png',
        rarity: 1,
        stars: 1,
        effect: 'Recovers **5** satiety<br>Recovers **10% + 1,500** HP',
        ingredients: [
            [egg, 2]
        ]
    },
    {
        id: 6,
        name: 'Seaweed and Egg Soup',
        imgSrc: 'vegetableeggsoup.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers **7** satiety<br>Recovers **12% + 3,300** HP',
        ingredients: [
            [seaweed, 2],
            [egg, 1]
        ]
    },
    {
        id: 7,
        name: 'Breakfast Cereal',
        imgSrc: 'milkoat.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers **14** satiety',
        ingredients: [
            [wheat, 2],
            [milk, 1]
        ]
    },
    {
        id: 8,
        name: 'Crispy Chicken Burger',
        imgSrc: 'crispychickendrumstickburger.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers **7** satiety<br>Recovers **12% + 3,300** HP',
        ingredients: [
            [wheat, 1],
            [drumstick, 1],
            [lettuce, 1]
        ]
    },
    {
        id: 9,
        name: 'Egg Fried Rice',
        imgSrc: 'eggfriedrice.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers **14** satiety',
        ingredients: [
            [rice, 2],
            [egg, 1]
        ]
    },
    {
        id: 10,
        name: 'Golden Egg and Tomato',
        imgSrc: 'goldenchoppedtomato.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers **7** satiety<br>Recovers **12% + 3,300** HP',
        ingredients: [
            [tomato, 2],
            [egg, 2]
        ]
    },
    {
        id: 11,
        name: 'Mushroom Soup',
        imgSrc: 'mushroomsoup.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers **7** satiety<br>Recovers **12% + 3,300** HP',
        ingredients: [
            [mushroom, 2],
            [lettuce, 2]
        ]
    },
    {
        id: 12,
        name: 'Steamed Conch',
        imgSrc: 'steamedsnails.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers **7** satiety<br>Recovers **12% + 3,300** HP',
        ingredients: [
            [hornedconch, 2],
            [lettuce, 1]
        ]
    },
    {
        id: 13,
        name: 'Meat and Potato Stew',
        imgSrc: 'potatostew.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers **14** satiety',
        ingredients: [
            [potato, 1],
            [meat, 1]
        ]
    },
    {
        id: 14,
        name: 'Fries',
        imgSrc: 'frenchfries.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers **14** satiety',
        ingredients: [
            [potato, 1],
            [dressing, 1]
        ]
    },
    {
        id: 15,
        name: 'Vegetable Salad',
        imgSrc: 'vegetablesalad.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers **7** satiety<br>Recovers **12% + 3,300** HP',
        ingredients: [
            [fruitdrop, 1],
            [tomato, 1],
            [lettuce, 1],
            [dressing, 1]
        ]
    },
    {
        id: 16,
        name: 'Fried Chicken',
        imgSrc: 'friedchicken.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers **7** satiety<br>Recovers **12% + 3,300** HP',
        ingredients: [
            [drumstick, 2],
            [wheat, 1]
        ]
    },
    {
        id: 17,
        name: 'Honeyed Fruit Juice',
        imgSrc: 'honeyfruitjuice.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers **300** stamina<br>Recovers **12% + 3,300** HP',
        ingredients: [
            [fruitdrop, 2],
            [honey, 1],
            [sparklingwater, 1]
        ]
    },
    {
        id: 18,
        name: 'Iced Orchid Surprise',
        imgSrc: 'cocktail.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers **300** stamina<br>Recovers **12% + 3,300** HP',
        ingredients: [
            [ghostmushroom, 2],
            [milk, 1],
            [sparklingwater, 1]
        ]
    },
    {
        id: 19,
        name: 'Stir-Fried Broccoli',
        imgSrc: 'stirfriedbroccoli.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers **14** satiety',
        ingredients: [
            [broccoli, 2]
        ]
    },
    {
        id: 20,
        name: 'Meat Bun',
        imgSrc: 'meatbuns.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers **14** satiety',
        ingredients: [
            [wheat, 2],
            [meat, 1]
        ]
    },
    {
        id: 21,
        name: 'Sliced Fish with Mushroom',
        imgSrc: 'mushroomfillet.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers **7** satiety<br>Recovers **12% + 3,300** HP',
        ingredients: [
            [mushroom, 2],
            [silverperch, 1]
        ]
    },
    {
        id: 22,
        name: 'Dandelion Mushroom Soup',
        imgSrc: 'dandelionmushroomsoup.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers **7** satiety<br>Recovers **12% + 3,300** HP',
        ingredients: [
            [dandelion, 1],
            [mushroom, 2]
        ]
    },
    {
        id: 23,
        name: 'Surf and Turf',
        imgSrc: 'pearlfish.png',
        rarity: 2,
        stars: 2,
        effect: 'Recovers **8** satiety<br>Recovers **13% + 10,000** HP',
        ingredients: [
            [sturgeon, 1],
            [egg, 2]
        ]
    },
    {
        id: 24,
        name: 'Red Wheat Bread',
        imgSrc: 'redwheatbread.png',
        rarity: 2,
        stars: 2,
        effect: 'Recovers **16** satiety',
        ingredients: [
            [redwheat, 2]
        ]
    },
    {
        id: 25,
        name: 'Firecap Mushroom Soup',
        imgSrc: 'fireearmushroomsoup.png',
        rarity: 2,
        stars: 2,
        effect: 'Recovers **400** stamina<br>Recovers **13% + 10,000** HP',
        ingredients: [
            [fireear, 2],
            [lettuce, 2]
        ]
    },
    {
        id: 26,
        name: 'Black Moss Soup',
        imgSrc: 'blackmosssoup.png',
        rarity: 2,
        stars: 2,
        effect: 'Recovers **8** satiety<br>Recovers **13% + 10,000** HP',
        ingredients: [
            [blackmoss, 2],
            [lettuce, 2]
        ]
    },
    {
        id: 27,
        name: 'Seafood Soup',
        imgSrc: 'seafoodsoup.png',
        rarity: 3,
        stars: 1,
        effect: `
            Recovers **10** satiety<br>
            **Ice Damage +1%<br>
            Ice Damage +45**<br>
            Duration **900** sec`,
        ingredients: [
            [hornedconch, 3],
            [seaconch, 2],
            [lettuce, 1]
        ]
    },
    {
        id: 28,
        name: 'Spicy Burger',
        imgSrc: 'spicythickmeatburger.png',
        rarity: 3,
        stars: 1,
        effect: `
            Recovers **10** satiety<br>
            **Physical Damage +1%<br>
            Physical Damage +45**<br>
            Duration **900** sec`,
        ingredients: [
            [wheat, 3],
            [hindleg, 2],
            [lettuce, 1]
        ]
    },
    {
        id: 29,
        name: 'Steamed Crab',
        imgSrc: 'steamedcrab.png',
        rarity: 3,
        stars: 1,
        effect: 'Recovers **10** satiety<br>Recovers **15% + 20,000** HP',
        ingredients: [
            [shuttlecrab, 2],
            [lettuce, 2]
        ]
    },
    {
        id: 30,
        name: 'Iced Strawberry Soda',
        imgSrc: 'strawberryicedsoda.png',
        rarity: 3,
        stars: 1,
        effect: `
            Recovers **10** satiety<br>
            **Fire Resistance +10%<br>
            Fire Resistance +170**<br>
            Duration **900** sec`,
        ingredients: [
            [strawberry, 2],
            [honey, 2],
            [sparklingwater, 1]
        ]
    },
    {
        id: 31,
        name: 'Thundercloud Blueberry Soda',
        imgSrc: 'lightningblueberrysoda.png',
        rarity: 3,
        stars: 1,
        effect: `
            Recovers **10** satiety<br>
            **Electric Resistance +10%<br>
            Electric Resistance +170**<br>
            Duration **900** sec`,
        ingredients: [
            [blueberry, 1],
            [honey, 2],
            [sparklingwater, 1]
        ]
    },
    {
        id: 32,
        name: 'Simple Power Salad',
        imgSrc: 'energysalad.png',
        rarity: 3,
        stars: 1,
        effect: `
            Recovers **10** satiety<br>
            **Physical Resistance +10%<br>
            Physical Resistance +170**<br>
            Duration **900** sec`,
        ingredients: [
            [broccoli, 1],
            [tomato, 1],
            [lettuce, 1],
            [egg, 1],
            [dressing, 1]
        ]
    },
    {
        id: 33,
        name: 'Steamed Egg with Sea Urchin',
        imgSrc: 'seaurchinomelette.png',
        rarity: 3,
        stars: 1,
        effect: 'Recovers **10** satiety<br>Recovers **15% + 20,000** HP',
        ingredients: [
            [seaurchin, 2],
            [egg, 2]
        ]
    },
    {
        id: 34,
        name: 'Jam on Toast',
        imgSrc: 'doubleberrysaucetoast.png',
        rarity: 3,
        stars: 1,
        effect: `
            Recovers **10** satiety<br>
            **Electric Damage +1%<br>
            Electric Damage +45**<br>
            Duration **900** sec`,
        ingredients: [
            [blueberry, 1],
            [strawberry, 1],
            [wheat, 3]
        ]
    },
    {
        id: 35,
        name: 'Tomato and Fried Egg Pasta',
        imgSrc: 'tomatospaghettiomelette.png',
        rarity: 3,
        stars: 1,
        effect: `
            Recovers **10** satiety<br>
            **Fire Damage +1%<br>
            Fire Damage +45**<br>
            Duration **900** sec`,
        ingredients: [
            [tomato, 4],
            [wheat, 3],
            [egg, 1]
        ]
    },
    {
        id: 36,
        name: 'Fruit Cake',
        imgSrc: 'fruitcake.png',
        rarity: 3,
        stars: 1,
        effect: 'Recovers **10** satiety<br>Recovers **15% + 20,000** HP',
        ingredients: [
            [strawberry, 2],
            [wheat, 1],
            [fruitdrop, 1],
            [egg, 1]
        ]
    },
    {
        id: 37,
        name: 'Boiled Scallops',
        imgSrc: 'boiledseaconch.png',
        rarity: 3,
        stars: 1,
        effect: 'Recovers **10** satiety<br>Recovers **15% + 20,000** HP',
        ingredients: [
            [seaconch, 2],
            [lettuce, 3]
        ]
    },
    {
        id: 38,
        name: 'Roast Rump',
        imgSrc: 'roastedham.png',
        rarity: 3,
        stars: 1,
        effect: 'Recovers **500** stamina<br>Recovers **15% + 20,000** HP',
        ingredients: [
            [hindleg, 2]
        ]
    },
    {
        id: 39,
        name: 'Fiddlehead Pie',
        imgSrc: 'spinachpie.png',
        rarity: 3,
        stars: 2,
        effect: 'Recovers **10** satiety<br>Recovers **16% + 34,000** HP',
        ingredients: [
            [spinach, 2],
            [redwheat, 2]
        ]
    },
    {
        id: 40,
        name: 'Chocolate Bread',
        imgSrc: 'chocolatebun.png',
        rarity: 3,
        stars: 2,
        effect: 'Recovers **10** satiety<br>Recovers **16% + 34,000** HP',
        ingredients: [
            [cocoabeans, 2],
            [redwheat, 2]
        ]
    },
    {
        id: 41,
        name: 'Balloon Fruit Salad',
        imgSrc: 'balloonfruitsalad.png',
        rarity: 3,
        stars: 2,
        effect: 'Recovers **10** satiety<br>Recovers **16% + 34,000** HP',
        ingredients: [
            [balloonfruit, 2],
            [tomato, 2],
            [dressing, 1]
        ]
    },
    {
        id: 42,
        name: 'Fiddlehead Soup',
        imgSrc: 'spinachsoup.png',
        rarity: 3,
        stars: 2,
        effect: 'Recovers **10** satiety<br>Recovers **16% + 34,000** HP',
        ingredients: [
            [spinach, 2],
            [lettuce, 4]
        ]
    },
    {
        id: 43,
        name: 'Spicy Eel',
        imgSrc: 'spicyeel.png',
        rarity: 3,
        stars: 2,
        effect: `
            Recovers **10** satiety<br>
            **Electric Resistance +10%<br>
            Electric Resistance +290**<br>
            Duration **900** sec`,
        ingredients: [
            [thundereel, 1]
        ]
    },
    {
        id: 44,
        name: 'Eel and Mushroom Soup',
        imgSrc: 'mushroomeelsoup.png',
        rarity: 3,
        stars: 2,
        effect: `
            Recovers **10** satiety<br>
            **Electric Damage +1%<br>
            Electric Damage +80**<br>
            Duration **900** sec`,
        ingredients: [
            [thundereel, 1],
            [fireear, 2]
        ]
    },
    {
        id: 45,
        name: 'Sea Crab Soup',
        imgSrc: 'seacrabsoup.png',
        rarity: 3,
        stars: 2,
        effect: `
            Recovers **10** satiety<br>
            **Fire Resistance +10%<br>
            Fire Resistance +290**<br>
            Duration **900** sec`,
        ingredients: [
            [hermitcrab, 2],
            [mushroom, 4]
        ]
    },
    {
        id: 46,
        name: 'Sweet Pomegranate Juice',
        imgSrc: 'sweetpomegranatejuice.png',
        rarity: 3,
        stars: 2,
        effect: 'Recovers **600** stamina<br>Recovers **16% + 34,000** HP',
        ingredients: [
            [pomegranate, 2],
            [honey, 2],
            [sparklingwater, 1]
        ]
    },
    {
        id: 47,
        name: 'Cocoa Milk',
        imgSrc: 'cocoamilk.png',
        rarity: 3,
        stars: 2,
        effect: `
            Recovers **10** satiety<br>
            **Ice Resistance +10%<br>
            Ice Resistance +290**<br>
            Duration **900** sec`,
        ingredients: [
            [cocoabeans, 2],
            [honey, 2],
            [milk, 1]
        ]
    },
    {
        id: 48,
        name: 'Firedragon Fruit Tea',
        imgSrc: 'dragonfruittea.png',
        rarity: 3,
        stars: 2,
        effect: `
            Recovers **10** satiety<br>
            **Fire Damage +1%<br>
            Fire Damage +80**<br>
            Duration **900** sec`,
        ingredients: [
            [dragonfruit, 2],
            [honey, 2]
        ]
    },
    {
        id: 49,
        name: 'Barnacle Stew',
        imgSrc: 'barnaclestew.png',
        rarity: 3,
        stars: 2,
        effect: `
            Recovers **10** satiety<br>
            **Physical Resistance +10%<br>
            Physical Resistance +290**<br>
            Duration **900** sec`,
        ingredients: [
            [barnacle, 2],
            [lettuce, 4]
        ]
    },
    {
        id: 50,
        name: 'Barnacle Seafood Pizza',
        imgSrc: 'barnacleseafoodpizza.png',
        rarity: 3,
        stars: 2,
        effect: 'Recovers **10** satiety<br>Recovers **16% + 34,000** HP',
        ingredients: [
            [barnacle, 1],
            [redwheat, 2],
            [onion, 1]
        ]
    },
    {
        id: 51,
        name: 'Snow Azalea Tea',
        imgSrc: 'snowcuckootea.png',
        rarity: 3,
        stars: 2,
        effect: `
            Recovers **10** satiety<br>
            **Ice Damage +1%<br>
            Ice Damage +80**<br>
            Duration **900** sec`,
        ingredients: [
            [snowblossom, 1],
            [milk, 1],
            [honey, 2]
        ]
    },
    {
        id: 52,
        name: 'Pine Cocoa',
        imgSrc: 'pinenutcocoa.png',
        rarity: 3,
        stars: 2,
        effect: 'Recovers **10** satiety<br>Recovers **16% + 34,000** HP',
        ingredients: [
            [pinecone, 1],
            [cocoabeans, 1],
            [milk, 2]
        ]
    },
    {
        id: 53,
        name: 'Caviar Sushi',
        imgSrc: 'caviarsushi.png',
        rarity: 3,
        stars: 2,
        effect: 'Recovers **10** satiety<br>Recovers **16% + 34,000** HP',
        ingredients: [
            [caviar, 1],
            [rice, 2],
            [seaweed, 2]
        ]
    },
    {
        id: 54,
        name: 'Caviar Potato Balls',
        imgSrc: 'caviarpotatoballs.png',
        rarity: 3,
        stars: 2,
        effect: `
            Recovers **10** satiety<br>
            **Physical Damage +1%<br>
            Physical Damage +80**<br>
            Duration **900** sec`,
        ingredients: [
            [caviar, 1],
            [potato, 2]
        ]
    },
    {
        id: 55,
        name: 'Nut Tea',
        imgSrc: 'nuttea.png',
        rarity: 4,
        stars: 2,
        effect: 'Recovers **20** satiety<br>Recovers **20% + 60,000** HP',
        ingredients: [
            [nut, 1],
            [pinecone, 2],
            [honey, 2]
        ]
    },
    {
        id: 56,
        name: "Purple Yam Pie",
        imgSrc: 'birdsheadpotatocake.png',
        rarity: 4,
        stars: 2,
        effect: `
            Recovers **20** satiety<br>
            **Electric Damage +2%<br>
            Electric Damage +150**<br>
            Duration **1200** sec`,
        ingredients: [
            [birdpotato, 1],
            [redwheat, 3]
        ]
    },
    {
        id: 57,
        name: 'Snow Lotus Soup',
        imgSrc: 'snowlotussoup.png',
        rarity: 4,
        stars: 2,
        effect: 'Recovers **800** stamina<br>Recovers **20% + 60,000** HP',
        ingredients: [
            [snowlotus, 1],
            [honey, 2]
        ]
    },
    {
        id: 58,
        name: 'Truffle Fried Rice',
        imgSrc: 'trufflefriedrice.png',
        rarity: 4,
        stars: 2,
        effect: `
            Recovers **20** satiety<br>
            **Physical Damage +2%<br>
            Physical Damage +150**<br>
            Duration **1200** sec`,
        ingredients: [
            [blacktruffle, 1],
            [onion, 1],
            [rice, 2]
        ]
    },
    {
        id: 59,
        name: 'Catepillar Fungus Noodles',
        imgSrc: 'cordycepsnoodles.png',
        rarity: 4,
        stars: 2,
        effect: 'Recovers **20** satiety<br>Recovers **20% + 60,000** HP',
        ingredients: [
            [cordyceps, 1],
            [redwheat, 3]
        ]
    },
    {
        id: 60,
        name: 'Grilled Steak',
        imgSrc: 'barbequesteak.png',
        rarity: 4,
        stars: 2,
        effect: `
            Recovers **20** satiety<br>
            **Electric Resistance +15%<br>
            Electric Resistance +675**<br>
            Duration **1200** sec`,
        ingredients: [
            [firmmeat, 1]
        ]
    },
    {
        id: 61,
        name: 'Steak w/ Sauce',
        imgSrc: 'mushroomsteak.png',
        rarity: 4,
        stars: 2,
        effect: `
            Recovers **20** satiety<br>
            **Fire Damage +2%<br>
            Fire Damage +150**<br>
            Duration **1200** sec`,
        ingredients: [
            [firmmeat, 1],
            [fireear, 3]
        ]
    },
    {
        id: 62,
        name: 'Braised Meat',
        imgSrc: 'braisedpork.png',
        rarity: 4,
        stars: 2,
        effect: `
            Recovers **20** satiety<br>
            **Ice Resistance +15%<br>
            Ice Resistance +675**<br>
            Duration **1200** sec`,
        ingredients: [
            [fattymeat, 1]
        ]
    },
    {
        id: 63,
        name: 'Juicy BLT',
        imgSrc: 'juicymeatsandwich.png',
        rarity: 4,
        stars: 2,
        effect: `
            Recovers **20** satiety<br>
            **Fire Resistance +15%<br>
            Fire Resistance +675**<br>
            Duration **1200** sec`,
        ingredients: [
            [fattymeat, 1],
            [redwheat, 2],
            [egg, 2]
        ]
    },
    {
        id: 64,
        name: 'Salmon Sashimi',
        imgSrc: 'salmonsashimi.png',
        rarity: 4,
        stars: 2,
        effect: `
            Recovers **20** satiety<br>
            **Ice Damage +2%<br>
            Ice Damage +150**<br>
            Duration **1200** sec`,
        ingredients: [
            [salmon, 1]
        ]
    },
    {
        id: 65,
        name: 'Snail Baked Rice',
        imgSrc: 'snailbakedrice.png',
        rarity: 4,
        stars: 2,
        effect: `
            Recovers **20** satiety<br>
            **Physical Resistance +15%<br>
            Physical Resistance +675**<br>
            Duration **1200** sec`,
        ingredients: [
            [snail, 1],
            [rice, 2]
        ]
    }
]

export default recipes;