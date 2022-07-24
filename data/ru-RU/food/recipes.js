const recipes = [
    {
        id: 0,
        name: 'Fried Mushrooms',
        chinaOnly: false,
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
        chinaOnly: false,
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
        chinaOnly: false,
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
        chinaOnly: false,
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
        chinaOnly: false,
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
        chinaOnly: false,
        rarity: 1,
        stars: 1,
        effect: 'Recovers **5** satiety<br>Recovers **10% + 1,500** HP',
        ingredients: [
            [egg, 2]
        ]
    },
    {
        id: 5,
        name: 'Grilled Sand Onion',
        chinaOnly: true,
        rarity: 1,
        stars: 1,
        effect: 'Recovers **10** satiety',
        ingredients: [
            [sandonion, 2]
        ]
    },
    {
        id: 5,
        name: 'Special Cactus Drink',
        chinaOnly: true,
        rarity: 1,
        stars: 1,
        effect: 
            `Recovers **5** satiety  
            Recovers **10% + 1,500** HP`,
        ingredients: [
            [cactusball, 2]
        ]
    },
    {
        id: 6,
        name: 'Seaweed and Egg Soup',
        chinaOnly: false,
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
        chinaOnly: false,
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
        chinaOnly: false,
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
        chinaOnly: false,
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
        chinaOnly: false,
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
        chinaOnly: false,
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
        chinaOnly: false,
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
        chinaOnly: false,
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
        chinaOnly: false,
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
        chinaOnly: false,
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
        chinaOnly: false,
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
        chinaOnly: false,
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
        chinaOnly: false,
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
        chinaOnly: false,
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
        chinaOnly: false,
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
        chinaOnly: false,
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
        chinaOnly: false,
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
        chinaOnly: false,
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
        chinaOnly: false,
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
        chinaOnly: false,
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
        chinaOnly: false,
        rarity: 2,
        stars: 2,
        effect: 'Recovers **8** satiety<br>Recovers **13% + 10,000** HP',
        ingredients: [
            [blackmoss, 2],
            [lettuce, 2]
        ]
    },
    {
        id: 26,
        name: 'Beetroot Soup',
        chinaOnly: true,
        rarity: 2,
        stars: 1,
        effect: 
            `Recovers **7** satiety  
            Recovers **12% + 3,300** HP`,
        ingredients: [
            [beetroot, 2]
        ]
    },
    {
        id: 26,
        name: 'Deep-fried Tofu',
        chinaOnly: true,
        rarity: 2,
        stars: 1,
        effect: 'Recovers **14** satiety',
        ingredients: [
            [soybeans, 2]
        ]
    },
    {
        id: 26,
        name: 'Salted Corn',
        chinaOnly: true,
        rarity: 2,
        stars: 1,
        effect: 'Recovers **14** satiety',
        ingredients: [
            [corn, 2]
        ]
    },
    {
        id: 26,
        name: 'Grilled Lizard Tail',
        chinaOnly: true,
        rarity: 2,
        stars: 1,
        effect: 
            `Recovers **7** satiety  
            Recovers **12% + 3,300** HP`,
        ingredients: [
            [fleshytail, 2]
        ]
    },
    {
        id: 26,
        name: 'Creamy Corn Soup',
        chinaOnly: true,
        rarity: 2,
        stars: 1,
        effect: 
            `Recovers **7** satiety  
            Recovers **12% + 3,300** HP`,
        ingredients: [
            [corn, 2],
            [milk, 1],
            [mushroom, 1]
        ]
    },
    {
        id: 27,
        name: 'Seafood Soup',
        chinaOnly: false,
        rarity: 3,
        stars: 1,
        effect: `
            Recovers **10** satiety<br>
            **Ice Attack +1%<br>
            Ice Attack +45**<br>
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
        chinaOnly: false,
        rarity: 3,
        stars: 1,
        effect: `
            Recovers **10** satiety<br>
            **Physical Attack +1%<br>
            Physical Attack +45**<br>
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
        chinaOnly: false,
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
        chinaOnly: false,
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
        chinaOnly: false,
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
        chinaOnly: false,
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
        chinaOnly: false,
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
        chinaOnly: false,
        rarity: 3,
        stars: 1,
        effect: `
            Recovers **10** satiety<br>
            **Electric Attack +1%<br>
            Electric Attack +45**<br>
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
        chinaOnly: false,
        rarity: 3,
        stars: 1,
        effect: `
            Recovers **10** satiety<br>
            **Fire Attack +1%<br>
            Fire Attack +45**<br>
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
        chinaOnly: false,
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
        chinaOnly: false,
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
        chinaOnly: false,
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
        chinaOnly: false,
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
        chinaOnly: false,
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
        chinaOnly: false,
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
        chinaOnly: false,
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
        chinaOnly: false,
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
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: `
            Recovers **10** satiety<br>
            **Electric Attack +1%<br>
            Electric Attack +80**<br>
            Duration **900** sec`,
        ingredients: [
            [thundereel, 1],
            [fireear, 2]
        ]
    },
    {
        id: 45,
        name: 'Sea Crab Soup',
        chinaOnly: false,
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
        chinaOnly: false,
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
        chinaOnly: false,
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
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: `
            Recovers **10** satiety<br>
            **Fire Attack +1%<br>
            Fire Attack +80**<br>
            Duration **900** sec`,
        ingredients: [
            [dragonfruit, 2],
            [honey, 2]
        ]
    },
    {
        id: 49,
        name: 'Barnacle Stew',
        chinaOnly: false,
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
        chinaOnly: false,
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
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: `
            Recovers **10** satiety<br>
            **Ice Attack +1%<br>
            Ice Attack +80**<br>
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
        chinaOnly: false,
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
        chinaOnly: false,
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
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: `
            Recovers **10** satiety<br>
            **Physical Attack +1%<br>
            Physical Attack +80**<br>
            Duration **900** sec`,
        ingredients: [
            [caviar, 1],
            [potato, 2]
        ]
    },
    {
        id: 54,
        name: 'Stir-fried Peppers',
        chinaOnly: true,
        rarity: 3,
        stars: 1,
        effect: `
            Recovers **10** satiety<br>
            **Ice Resistance +10%<br>
            Ice Resistance 170**<br>
            Duration **900** sec`,
        ingredients: [
            [pepper, 2],
            [onion, 2]
        ]
    },
    {
        id: 54,
        name: 'Melon Salad',
        chinaOnly: true,
        rarity: 3,
        stars: 1,
        effect: `
            Recovers **10** satiety<br>
            **Fire Resistance +10%<br>
            Fire Resistance 170**<br>
            Duration **900** sec`,
        ingredients: [
            [desertmelon, 2],
            [dressing, 2]
        ]
    },
    {
        id: 54,
        name: 'Pumpkin Porridge',
        chinaOnly: true,
        rarity: 3,
        stars: 1,
        effect: `
            Recovers **10** satiety  
            Recovers **15% + 20,000** HP`,
        ingredients: [
            [pumpkin, 2],
            [rice, 3]
        ]
    },
    {
        id: 54,
        name: 'Grilled Ribs',
        chinaOnly: true,
        rarity: 3,
        stars: 1,
        effect: `
            Recovers **10** satiety  
            Recovers **15% + 20,000** HP`,
        ingredients: [
            [ribs, 1],
            [honey, 2]
        ]
    },
    {
        id: 54,
        name: 'Chocolate Soymilk',
        chinaOnly: true,
        rarity: 3,
        stars: 1,
        effect: `
            Recovers **500** stamina  
            Recovers **15% + 20,000** HP`,
        ingredients: [
            [cocoabeans, 2],
            [soybeans, 1],
            [honey, 1]
        ]
    },
    {
        id: 54,
        name: 'Beetroot Fern',
        chinaOnly: true,
        rarity: 3,
        stars: 1,
        effect: `
            Recovers **10** satiety 
            Recovers **15% + 20,000** HP`,
        ingredients: [
            [spinach, 2],
            [beetroot, 2]
        ]
    },
    {
        id: 54,
        name: 'Honeydew Melon Bread',
        chinaOnly: true,
        rarity: 3,
        stars: 1,
        effect: `
            Recovers **10** satiety<br>
            **Ice Attack +1%<br>
            Ice Attack 45**<br>
            Duration **900** sec`,
        ingredients: [
            [desertmelon, 2],
            [honey, 1],
            [wheat, 2]
        ]
    },
    {
        id: 54,
        name: 'Mixed Grain Porridge',
        chinaOnly: true,
        rarity: 3,
        stars: 1,
        effect: `
            Recovers **500** stamina 
            Recovers **15% + 20,000** HP`,
        ingredients: [
            [pumpkin, 2],
            [corn, 1],
            [rice, 2]
        ]
    },
    {
        id: 54,
        name: 'Corn & Seafood Pie',
        chinaOnly: true,
        rarity: 3,
        stars: 1,
        effect: `
            Recovers **10** satiety 
            Recovers **15% + 20,000** HP`,
        ingredients: [
            [seaconch, 2],
            [corn, 1],
            [wheat, 2]
        ]
    },
    {
        id: 54,
        name: 'Steamed Pumpkin',
        chinaOnly: true,
        rarity: 3,
        stars: 1,
        effect: `
            Recovers **10** satiety 
            Recovers **15% + 20,000** HP`,
        ingredients: [
            [pumpkin, 2],
            [wheat, 3]
        ]
    },
    {
        id: 54,
        name: 'Spicy Fried Rice',
        chinaOnly: true,
        rarity: 3,
        stars: 1,
        effect: `
            Recovers **10** satiety<br>
            **Fire Attack +1%<br>
            Fire Attack 45**<br>
            Duration **900** sec`,
        ingredients: [
            [pepper, 1],
            [fleshytail, 1],
            [egg, 1],
            [rice, 2]
        ]
    },
    {
        id: 54,
        name: 'Grilled Oysters',
        chinaOnly: true,
        rarity: 3,
        stars: 2,
        effect: `
            Recovers **10** satiety<br>
            Recovers **16% + 34,000** HP`,
        ingredients: [
            [oyster, 2]
        ]
    },
    {
        id: 54,
        name: 'Cold Fish Leaf',
        chinaOnly: true,
        rarity: 3,
        stars: 2,
        effect: `
            Recovers **10** satiety<br>
            Recovers **16% + 34,000** HP`,
        ingredients: [
            [fishleaf, 2]
        ]
    },
    {
        id: 54,
        name: 'Oyster Tofu Soup',
        chinaOnly: true,
        rarity: 3,
        stars: 2,
        effect: `
            Recovers **600** stamina<br>
            Recovers **16% + 34,000** HP`,
        ingredients: [
            [oyster, 2],
            [soybeans, 2]
        ]
    },
    {
        id: 54,
        name: 'Fishleaf Scrambled Eggs',
        chinaOnly: true,
        rarity: 3,
        stars: 2,
        effect: `
            Recovers **600** stamina<br>
            Recovers **16% + 34,000** HP`,
        ingredients: [
            [fishleaf, 2],
            [egg, 3]
        ]
    },
    {
        id: 55,
        name: 'Nut Tea',
        chinaOnly: false,
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
        chinaOnly: false,
        rarity: 4,
        stars: 2,
        effect: `
            Recovers **20** satiety<br>
            **Electric Attack +2%<br>
            Electric Attack +150**<br>
            Duration **1200** sec`,
        ingredients: [
            [birdpotato, 1],
            [redwheat, 3]
        ]
    },
    {
        id: 57,
        name: 'Snow Lotus Soup',
        chinaOnly: false,
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
        chinaOnly: false,
        rarity: 4,
        stars: 2,
        effect: `
            Recovers **20** satiety<br>
            **Physical Attack +2%<br>
            Physical Attack +150**<br>
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
        chinaOnly: false,
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
        chinaOnly: false,
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
        chinaOnly: false,
        rarity: 4,
        stars: 2,
        effect: `
            Recovers **20** satiety<br>
            **Fire Attack +2%<br>
            Fire Attack +150**<br>
            Duration **1200** sec`,
        ingredients: [
            [firmmeat, 1],
            [fireear, 3]
        ]
    },
    {
        id: 62,
        name: 'Braised Meat',
        chinaOnly: false,
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
        chinaOnly: false,
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
        chinaOnly: false,
        rarity: 4,
        stars: 2,
        effect: `
            Recovers **20** satiety<br>
            **Ice Attack +2%<br>
            Ice Attack +150**<br>
            Duration **1200** sec`,
        ingredients: [
            [salmon, 1]
        ]
    },
    {
        id: 65,
        name: 'Snail Baked Rice',
        chinaOnly: false,
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
    },
    {
        id: 65,
        name: 'Aloe Vera Yogurt',
        chinaOnly: true,
        rarity: 4,
        stars: 2,
        effect: `
            Recovers **20** satiety  
            Recovers **20% + 60,000** HP`,
        ingredients: [
            [aloevera, 1],
            [honey, 1],
            [milk, 2]
        ]
    },
    {
        id: 65,
        name: 'Rose Tea',
        chinaOnly: true,
        rarity: 4,
        stars: 2,
        effect: `
            Recovers **800** stamina  
            Recovers **20% + 60,000** HP`,
        ingredients: [
            [rosepetals, 1],
            [honey, 2]
        ]
    },
    {
        id: 65,
        name: 'Radish Soup',
        chinaOnly: true,
        rarity: 4,
        stars: 2,
        effect: `
            Recovers **800** stamina  
            Recovers **20% + 60,000** HP`,
        ingredients: [
            [radish, 1]
        ]
    },
    {
        id: 65,
        name: 'Rose Bread',
        chinaOnly: true,
        rarity: 4,
        stars: 2,
        effect: `
            Recovers **20** satiety  
            **Volt Resistance +15%**  
            **Volt Resistance +675**  
            Duration **1200** sec`,
        ingredients: [
            [rosepetals, 1],
            [redwheat, 2]
        ]
    },
    {
        id: 65,
        name: 'Chicken Noodle Soup',
        chinaOnly: true,
        rarity: 4,
        stars: 2,
        effect: `
            Recovers **20** satiety  
            **Physical Attack +2%**  
            **Physical Attack +150**  
            Duration **1200** sec`,
        ingredients: [
            [radish, 1],
            [drumstick, 1],
            [wheat, 2]
        ]
    },
    {
        id: 65,
        name: 'Spicy Pork Noodles',
        chinaOnly: true,
        rarity: 4,
        stars: 2,
        effect: `
            Recovers **20** satiety  
            **Fire Attack +2%**  
            **Fire Attack +150**  
            Duration **1200** sec`,
        ingredients: [
            [fattymeat, 1],
            [pepper, 1],
            [wheat, 2]
        ]
    },
    {
        id: 65,
        name: 'Barbecue Platter',
        chinaOnly: true,
        rarity: 4,
        stars: 2,
        effect: `
            Recovers **20** satiety  
            **Fire Resistance +15%**  
            **Fire Resistance +675**  
            Duration **1200** sec`,
        ingredients: [
            [firmmeat, 1],
            [pepper, 1],
            [fleshytail, 1]
        ]
    },
    {
        id: 65,
        name: 'Radish Rib Soup',
        chinaOnly: true,
        rarity: 4,
        stars: 2,
        effect: `
            Recovers **20** satiety  
            **Physical Resistance +15%**  
            **Physical Resistance +675**  
            Duration **1200** sec`,
        ingredients: [
            [radish, 1],
            [rib, 1]
        ]
    },
    {
        id: 65,
        name: 'Crispy Oil Melon',
        chinaOnly: true,
        rarity: 4,
        stars: 2,
        effect: `
            Recovers **20** satiety  
            Recovers **20% + 60,000** HP`,
        ingredients: [
            [oilmelon, 1]
        ]
    },
    {
        id: 65,
        name: 'Spicy Oil Melon Sticks',
        chinaOnly: true,
        rarity: 4,
        stars: 2,
        effect: `
            Recovers **800** stamina  
            Recovers **20% + 60,000** HP`,
        ingredients: [
            [oilmelon, 1],
            [pepper, 2]
        ]
    },
]

export default recipes;