import i from "./ingredients";

const recipes = [
    {
        id: 0,
        name: 'Fried Mushrooms',
        chinaOnly: false,
        rarity: 1,
        stars: 1,
        effect: 
            `Recovers **5** satiety  
            Recovers **10% + 1,500** HP`,
        ingredients: [
            { item: i.mushroom, amount: 2 }
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
            { item: i.silverperch, amount: 1 }
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
            { item: i.wheat, amount: 2 }
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
            { item: i.meat, amount: 2 }
        ]
    },
    {
        id: 4,
        name: 'Lettuce Salad',
        chinaOnly: false,
        rarity: 1,
        stars: 1,
        effect: 
            `Recovers **5** satiety  
            Recovers **10% + 1,500** HP`,
        ingredients: [
            { item: i.lettuce, amount: 2 },
            { item: i.dressing, amount: 1 }
        ]
    },
    {
        id: 5,
        name: 'Fried Egg',
        chinaOnly: false,
        rarity: 1,
        stars: 1,
        effect: 
            `Recovers **5** satiety  
            Recovers **10% + 1,500** HP`,
        ingredients: [
            { item: i.egg, amount: 2 }
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
            { item: i.sandonion, amount: 2 }
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
            { item: i.cactusball, amount: 2 }
        ]
    },
    {
        id: 6,
        name: 'Seaweed and Egg Soup',
        chinaOnly: false,
        rarity: 2,
        stars: 1,
        effect: 
            `Recovers **7** satiety  
            Recovers **12% + 3,300** HP`,
        ingredients: [
            { item: i.seaweed, amount: 2 },
            { item: i.egg, amount: 1 }
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
            { item: i.wheat, amount: 2 },
            { item: i.milk, amount: 1 }
        ]
    },
    {
        id: 8,
        name: 'Crispy Chicken Burger',
        chinaOnly: false,
        rarity: 2,
        stars: 1,
        effect: 
            `Recovers **7** satiety  
            Recovers **12% + 3,300** HP`,
        ingredients: [
            { item: i.wheat, amount: 1 },
            { item: i.drumstick, amount: 1 },
            { item: i.lettuce, amount: 1 }
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
            { item: i.rice, amount: 2 },
            { item: i.egg, amount: 1 }
        ]
    },
    {
        id: 10,
        name: 'Golden Egg and Tomato',
        chinaOnly: false,
        rarity: 2,
        stars: 1,
        effect: 
            `Recovers **7** satiety  
            Recovers **12% + 3,300** HP`,
        ingredients: [
            { item: i.tomato, amount: 2 },
            { item: i.egg, amount: 2 }
        ]
    },
    {
        id: 11,
        name: 'Mushroom Soup',
        chinaOnly: false,
        rarity: 2,
        stars: 1,
        effect: 
            `Recovers **7** satiety  
            Recovers **12% + 3,300** HP`,
        ingredients: [
            { item: i.mushroom, amount: 2 },
            { item: i.lettuce, amount: 2 }
        ]
    },
    {
        id: 12,
        name: 'Steamed Conch',
        chinaOnly: false,
        rarity: 2,
        stars: 1,
        effect: 
            `Recovers **7** satiety  
            Recovers **12% + 3,300** HP`,
        ingredients: [
            { item: i.hornedconch, amount: 2 },
            { item: i.lettuce, amount: 1 }
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
            { item: i.potato, amount: 1 },
            { item: i.meat, amount: 1 }
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
            { item: i.potato, amount: 1 },
            { item: i.dressing, amount: 1 }
        ]
    },
    {
        id: 15,
        name: 'Vegetable Salad',
        chinaOnly: false,
        rarity: 2,
        stars: 1,
        effect: 
            `Recovers **7** satiety  
            Recovers **12% + 3,300** HP`,
        ingredients: [
            { item: i.fruitdrop, amount: 1 },
            { item: i.tomato, amount: 1 },
            { item: i.lettuce, amount: 1 },
            { item: i.dressing, amount: 1 }
        ]
    },
    {
        id: 16,
        name: 'Fried Chicken',
        chinaOnly: false,
        rarity: 2,
        stars: 1,
        effect: 
            `Recovers **7** satiety  
            Recovers **12% + 3,300** HP`,
        ingredients: [
            { item: i.drumstick, amount: 2 },
            { item: i.wheat, amount: 1 }
        ]
    },
    {
        id: 17,
        name: 'Honeyed Fruit Juice',
        chinaOnly: false,
        rarity: 2,
        stars: 1,
        effect: 
            `Recovers **300** stamina  
            Recovers **12% + 3,300** HP`,
        ingredients: [
            { item: i.fruitdrop, amount: 2 },
            { item: i.honey, amount: 1 },
            { item: i.sparklingwater, amount: 1 }
        ]
    },
    {
        id: 18,
        name: 'Iced Orchid Surprise',
        chinaOnly: false,
        rarity: 2,
        stars: 1,
        effect: 
            `Recovers **300** stamina  
            Recovers **12% + 3,300** HP`,
        ingredients: [
            { item: i.ghostmushroom, amount: 2 },
            { item: i.milk, amount: 1 },
            { item: i.sparklingwater, amount: 1 }
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
            { item: i.broccoli, amount: 2 }
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
            { item: i.wheat, amount: 2 },
            { item: i.meat, amount: 1 }
        ]
    },
    {
        id: 21,
        name: 'Sliced Fish with Mushroom',
        chinaOnly: false,
        rarity: 2,
        stars: 1,
        effect: 
            `Recovers **7** satiety  
            Recovers **12% + 3,300** HP`,
        ingredients: [
            { item: i.mushroom, amount: 2 },
            { item: i.silverperch, amount: 1 }
        ]
    },
    {
        id: 22,
        name: 'Dandelion Mushroom Soup',
        chinaOnly: false,
        rarity: 2,
        stars: 1,
        effect: 
            `Recovers **7** satiety  
            Recovers **12% + 3,300** HP`,
        ingredients: [
            { item: i.dandelion, amount: 1 },
            { item: i.mushroom, amount: 2 }
        ]
    },
    {
        id: 23,
        name: 'Surf and Turf',
        chinaOnly: false,
        rarity: 2,
        stars: 2,
        effect: 
            `Recovers **8** satiety  
            Recovers **13% + 10,000** HP`,
        ingredients: [
            { item: i.sturgeon, amount: 1 },
            { item: i.egg, amount: 2 }
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
            { item: i.redwheat, amount: 2 }
        ]
    },
    {
        id: 25,
        name: 'Firecap Mushroom Soup',
        chinaOnly: false,
        rarity: 2,
        stars: 2,
        effect: 
            `Recovers **400** stamina  
            Recovers **13% + 10,000** HP`,
        ingredients: [
            { item: i.fireear, amount: 2 },
            { item: i.lettuce, amount: 2 }
        ]
    },
    {
        id: 26,
        name: 'Black Moss Soup',
        chinaOnly: false,
        rarity: 2,
        stars: 2,
        effect: 
            `Recovers **8** satiety  
            Recovers **13% + 10,000** HP`,
        ingredients: [
            { item: i.blackmoss, amount: 2 },
            { item: i.lettuce, amount: 2 }
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
            { item: i.beetroot, amount: 2 }
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
            { item: i.soybeans, amount: 2 }
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
            { item: i.corn, amount: 2 }
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
            { item: i.fleshytail, amount: 2 }
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
            { item: i.corn, amount: 2 },
            { item: i.milk, amount: 1 },
            { item: i.mushroom, amount: 1 }
        ]
    },
    {
        id: 27,
        name: 'Seafood Soup',
        chinaOnly: false,
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety  
            **Ice Attack +1%  
            Ice Attack +45**  
            Duration **900** sec`,
        ingredients: [
            { item: i.hornedconch, amount: 3 },
            { item: i.seaconch, amount: 2 },
            { item: i.lettuce, amount: 1 }
        ]
    },
    {
        id: 28,
        name: 'Spicy Burger',
        chinaOnly: false,
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety  
            **Physical Attack +1%  
            Physical Attack +45**  
            Duration **900** sec`,
        ingredients: [
            { item: i.wheat, amount: 3 },
            { item: i.hindleg, amount: 2 },
            { item: i.lettuce, amount: 1 }
        ]
    },
    {
        id: 29,
        name: 'Steamed Crab',
        chinaOnly: false,
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety  
            Recovers **15% + 20,000** HP`,
        ingredients: [
            { item: i.shuttlecrab, amount: 2 },
            { item: i.lettuce, amount: 2 }
        ]
    },
    {
        id: 30,
        name: 'Iced Strawberry Soda',
        chinaOnly: false,
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety  
            **Flame Resistance +10%  
            Flame Resistance +170**  
            Duration **900** sec`,
        ingredients: [
            { item: i.strawberry, amount: 2 },
            { item: i.honey, amount: 2 },
            { item: i.sparklingwater, amount: 1 }
        ]
    },
    {
        id: 31,
        name: 'Thundercloud Blueberry Soda',
        chinaOnly: false,
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety  
            **Volt Resistance +10%  
            Volt Resistance +170**  
            Duration **900** sec`,
        ingredients: [
            { item: i.blueberry, amount: 1 },
            { item: i.honey, amount: 2 },
            { item: i.sparklingwater, amount: 1 }
        ]
    },
    {
        id: 32,
        name: 'Simple Power Salad',
        chinaOnly: false,
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety  
            **Physical Resistance +10%  
            Physical Resistance +170**  
            Duration **900** sec`,
        ingredients: [
            { item: i.broccoli, amount: 1 },
            { item: i.tomato, amount: 1 },
            { item: i.lettuce, amount: 1 },
            { item: i.egg, amount: 1 },
            { item: i.dressing, amount: 1 }
        ]
    },
    {
        id: 33,
        name: 'Steamed Egg with Sea Urchin',
        chinaOnly: false,
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety  
            Recovers **15% + 20,000** HP`,
        ingredients: [
            { item: i.seaurchin, amount: 2 },
            { item: i.egg, amount: 2 }
        ]
    },
    {
        id: 34,
        name: 'Jam on Toast',
        chinaOnly: false,
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety  
            **Volt Attack +1%  
            Volt Attack +45**  
            Duration **900** sec`,
        ingredients: [
            { item: i.blueberry, amount: 1 },
            { item: i.strawberry, amount: 1 },
            { item: i.wheat, amount: 3 }
        ]
    },
    {
        id: 35,
        name: 'Tomato and Fried Egg Pasta',
        chinaOnly: false,
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety  
            **Flame Attack +1%  
            Flame Attack +45**  
            Duration **900** sec`,
        ingredients: [
            { item: i.tomato, amount: 4 },
            { item: i.wheat, amount: 3 },
            { item: i.egg, amount: 1 }
        ]
    },
    {
        id: 36,
        name: 'Fruit Cake',
        chinaOnly: false,
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety  
            Recovers **15% + 20,000** HP`,
        ingredients: [
            { item: i.strawberry, amount: 2 },
            { item: i.wheat, amount: 1 },
            { item: i.fruitdrop, amount: 1 },
            { item: i.egg, amount: 1 }
        ]
    },
    {
        id: 37,
        name: 'Boiled Scallops',
        chinaOnly: false,
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety  
            Recovers **15% + 20,000** HP`,
        ingredients: [
            { item: i.seaconch, amount: 2 },
            { item: i.lettuce, amount: 3 }
        ]
    },
    {
        id: 38,
        name: 'Roast Rump',
        chinaOnly: false,
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **500** stamina  
            Recovers **15% + 20,000** HP`,
        ingredients: [
            { item: i.hindleg, amount: 2 }
        ]
    },
    {
        id: 39,
        name: 'Fiddlehead Pie',
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **10** satiety  
            Recovers **16% + 34,000** HP`,
        ingredients: [
            { item: i.spinach, amount: 2 },
            { item: i.redwheat, amount: 2 }
        ]
    },
    {
        id: 40,
        name: 'Chocolate Bread',
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **10** satiety  
            Recovers **16% + 34,000** HP`,
        ingredients: [
            { item: i.cocoabeans, amount: 2 },
            { item: i.redwheat, amount: 2 }
        ]
    },
    {
        id: 41,
        name: 'Balloon Fruit Salad',
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **10** satiety  
            Recovers **16% + 34,000** HP`,
        ingredients: [
            { item: i.balloonfruit, amount: 2 },
            { item: i.tomato, amount: 2 },
            { item: i.dressing, amount: 1 }
        ]
    },
    {
        id: 42,
        name: 'Fiddlehead Soup',
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **10** satiety  
            Recovers **16% + 34,000** HP`,
        ingredients: [
            { item: i.spinach, amount: 2 },
            { item: i.lettuce, amount: 4 }
        ]
    },
    {
        id: 43,
        name: 'Spicy Eel',
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **10** satiety  
            **Volt Resistance +10%  
            Volt Resistance +290**  
            Duration **900** sec`,
        ingredients: [
            { item: i.thundereel, amount: 1 }
        ]
    },
    {
        id: 44,
        name: 'Eel and Mushroom Soup',
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **10** satiety  
            **Volt Attack +1%  
            Volt Attack +80**  
            Duration **900** sec`,
        ingredients: [
            { item: i.thundereel, amount: 1 },
            { item: i.fireear, amount: 2 }
        ]
    },
    {
        id: 45,
        name: 'Sea Crab Soup',
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **10** satiety  
            **Flame Resistance +10%  
            Flame Resistance +290**  
            Duration **900** sec`,
        ingredients: [
            { item: i.hermitcrab, amount: 2 },
            { item: i.mushroom, amount: 4 }
        ]
    },
    {
        id: 46,
        name: 'Sweet Pomegranate Juice',
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **600** stamina  
            Recovers **16% + 34,000** HP`,
        ingredients: [
            { item: i.pomegranate, amount: 2 },
            { item: i.honey, amount: 2 },
            { item: i.sparklingwater, amount: 1 }
        ]
    },
    {
        id: 47,
        name: 'Cocoa Milk',
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **10** satiety  
            **Ice Resistance +10%  
            Ice Resistance +290**  
            Duration **900** sec`,
        ingredients: [
            { item: i.cocoabeans, amount: 2 },
            { item: i.honey, amount: 2 },
            { item: i.milk, amount: 1 }
        ]
    },
    {
        id: 48,
        name: 'Firedragon Fruit Tea',
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **10** satiety  
            **Flame Attack +1%  
            Flame Attack +80**  
            Duration **900** sec`,
        ingredients: [
            { item: i.dragonfruit, amount: 2 },
            { item: i.honey, amount: 2 }
        ]
    },
    {
        id: 49,
        name: 'Barnacle Stew',
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **10** satiety  
            **Physical Resistance +10%  
            Physical Resistance +290**  
            Duration **900** sec`,
        ingredients: [
            { item: i.barnacle, amount: 2 },
            { item: i.lettuce, amount: 4 }
        ]
    },
    {
        id: 50,
        name: 'Barnacle Seafood Pizza',
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **10** satiety  
            Recovers **16% + 34,000** HP`,
        ingredients: [
            { item: i.barnacle, amount: 1 },
            { item: i.redwheat, amount: 2 },
            { item: i.onion, amount: 1 }
        ]
    },
    {
        id: 51,
        name: 'Snow Azalea Tea',
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **10** satiety  
            **Ice Attack +1%  
            Ice Attack +80**  
            Duration **900** sec`,
        ingredients: [
            { item: i.snowblossom, amount: 1 },
            { item: i.milk, amount: 1 },
            { item: i.honey, amount: 2 }
        ]
    },
    {
        id: 52,
        name: 'Pine Cocoa',
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **10** satiety  
            Recovers **16% + 34,000** HP`,
        ingredients: [
            { item: i.pinecone, amount: 1 },
            { item: i.cocoabeans, amount: 1 },
            { item: i.milk, amount: 2 }
        ]
    },
    {
        id: 53,
        name: 'Caviar Sushi',
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **10** satiety  
            Recovers **16% + 34,000** HP`,
        ingredients: [
            { item: i.caviar, amount: 1 },
            { item: i.rice, amount: 2 },
            { item: i.seaweed, amount: 2 }
        ]
    },
    {
        id: 54,
        name: 'Caviar Potato Balls',
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **10** satiety  
            **Physical Attack +1%  
            Physical Attack +80**  
            Duration **900** sec`,
        ingredients: [
            { item: i.caviar, amount: 1 },
            { item: i.potato, amount: 2 }
        ]
    },
    {
        id: 54,
        name: 'Stir-fried Peppers',
        chinaOnly: true,
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety  
            **Ice Resistance +10%  
            Ice Resistance 170**  
            Duration **900** sec`,
        ingredients: [
            { item: i.pepper, amount: 2 },
            { item: i.onion, amount: 2 }
        ]
    },
    {
        id: 54,
        name: 'Melon Salad',
        chinaOnly: true,
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety  
            **Flame Resistance +10%  
            Flame Resistance 170**  
            Duration **900** sec`,
        ingredients: [
            { item: i.desertmelon, amount: 2 },
            { item: i.dressing, amount: 2 }
        ]
    },
    {
        id: 54,
        name: 'Pumpkin Porridge',
        chinaOnly: true,
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety  
            Recovers **15% + 20,000** HP`,
        ingredients: [
            { item: i.pumpkin, amount: 2 },
            { item: i.rice, amount: 3 }
        ]
    },
    {
        id: 54,
        name: 'Grilled Ribs',
        chinaOnly: true,
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety  
            Recovers **15% + 20,000** HP`,
        ingredients: [
            { item: i.ribs, amount: 1 },
            { item: i.honey, amount: 2 }
        ]
    },
    {
        id: 54,
        name: 'Chocolate Soymilk',
        chinaOnly: true,
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **500** stamina  
            Recovers **15% + 20,000** HP`,
        ingredients: [
            { item: i.cocoabeans, amount: 2 },
            { item: i.soybeans, amount: 1 },
            { item: i.honey, amount: 1 }
        ]
    },
    {
        id: 54,
        name: 'Beetroot Fern',
        chinaOnly: true,
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety 
            Recovers **15% + 20,000** HP`,
        ingredients: [
            { item: i.spinach, amount: 2 },
            { item: i.beetroot, amount: 2 }
        ]
    },
    {
        id: 54,
        name: 'Honeydew Melon Bread',
        chinaOnly: true,
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety  
            **Ice Attack +1%  
            Ice Attack 45**  
            Duration **900** sec`,
        ingredients: [
            { item: i.desertmelon, amount: 2 },
            { item: i.honey, amount: 1 },
            { item: i.wheat, amount: 2 }
        ]
    },
    {
        id: 54,
        name: 'Mixed Grain Porridge',
        chinaOnly: true,
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **500** stamina 
            Recovers **15% + 20,000** HP`,
        ingredients: [
            { item: i.pumpkin, amount: 2 },
            { item: i.corn, amount: 1 },
            { item: i.rice, amount: 2 }
        ]
    },
    {
        id: 54,
        name: 'Corn and Seafood Pie',
        chinaOnly: true,
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety 
            Recovers **15% + 20,000** HP`,
        ingredients: [
            { item: i.seaconch, amount: 2 },
            { item: i.corn, amount: 1 },
            { item: i.wheat, amount: 2 }
        ]
    },
    {
        id: 54,
        name: 'Steamed Pumpkin',
        chinaOnly: true,
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety 
            Recovers **15% + 20,000** HP`,
        ingredients: [
            { item: i.pumpkin, amount: 2 },
            { item: i.wheat, amount: 3 }
        ]
    },
    {
        id: 54,
        name: 'Spicy Fried Rice',
        chinaOnly: true,
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety  
            **Flame Attack +1%  
            Flame Attack 45**  
            Duration **900** sec`,
        ingredients: [
            { item: i.pepper, amount: 1 },
            { item: i.fleshytail, amount: 1 },
            { item: i.egg, amount: 1 },
            { item: i.rice, amount: 2 }
        ]
    },
    {
        id: 54,
        name: 'Grilled Oysters',
        chinaOnly: true,
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **10** satiety  
            Recovers **16% + 34,000** HP`,
        ingredients: [
            { item: i.oyster, amount: 2 }
        ]
    },
    {
        id: 54,
        name: 'Cold Fish Leaf',
        chinaOnly: true,
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **10** satiety  
            Recovers **16% + 34,000** HP`,
        ingredients: [
            { item: i.fishleaf, amount: 2 }
        ]
    },
    {
        id: 54,
        name: 'Oyster Tofu Soup',
        chinaOnly: true,
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **600** stamina  
            Recovers **16% + 34,000** HP`,
        ingredients: [
            { item: i.oyster, amount: 2 },
            { item: i.soybeans, amount: 2 }
        ]
    },
    {
        id: 54,
        name: 'Fishleaf Scrambled Eggs',
        chinaOnly: true,
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **600** stamina  
            Recovers **16% + 34,000** HP`,
        ingredients: [
            { item: i.fishleaf, amount: 2 },
            { item: i.egg, amount: 3 }
        ]
    },
    {
        id: 55,
        name: 'Nut Tea',
        chinaOnly: false,
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **20** satiety  
            Recovers **20% + 60,000** HP`,
        ingredients: [
            { item: i.nut, amount: 1 },
            { item: i.pinecone, amount: 2 },
            { item: i.honey, amount: 2 }
        ]
    },
    {
        id: 56,
        name: "Purple Yam Pie",
        chinaOnly: false,
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **20** satiety  
            **Volt Attack +2%  
            Volt Attack +150**  
            Duration **1200** sec`,
        ingredients: [
            { item: i.birdpotato, amount: 1 },
            { item: i.redwheat, amount: 3 }
        ]
    },
    {
        id: 57,
        name: 'Snow Lotus Soup',
        chinaOnly: false,
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **800** stamina  
            Recovers **20% + 60,000** HP`,
        ingredients: [
            { item: i.snowlotus, amount: 1 },
            { item: i.honey, amount: 2 }
        ]
    },
    {
        id: 58,
        name: 'Truffle Fried Rice',
        chinaOnly: false,
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **20** satiety  
            **Physical Attack +2%  
            Physical Attack +150**  
            Duration **1200** sec`,
        ingredients: [
            { item: i.blacktruffle, amount: 1 },
            { item: i.onion, amount: 1 },
            { item: i.rice, amount: 2 }
        ]
    },
    {
        id: 59,
        name: 'Catepillar Fungus Noodles',
        chinaOnly: false,
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **20** satiety  
            Recovers **20% + 60,000** HP`,
        ingredients: [
            { item: i.cordyceps, amount: 1 },
            { item: i.redwheat, amount: 3 }
        ]
    },
    {
        id: 60,
        name: 'Grilled Steak',
        chinaOnly: false,
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **20** satiety  
            **Volt Resistance +15%  
            Volt Resistance +675**  
            Duration **1200** sec`,
        ingredients: [
            { item: i.firmmeat, amount: 1 }
        ]
    },
    {
        id: 61,
        name: 'Steak with Sauce',
        chinaOnly: false,
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **20** satiety  
            **Flame Attack +2%  
            Flame Attack +150**  
            Duration **1200** sec`,
        ingredients: [
            { item: i.firmmeat, amount: 1 },
            { item: i.fireear, amount: 3 }
        ]
    },
    {
        id: 62,
        name: 'Braised Meat',
        chinaOnly: false,
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **20** satiety  
            **Ice Resistance +15%  
            Ice Resistance +675**  
            Duration **1200** sec`,
        ingredients: [
            { item: i.fattymeat, amount: 1 }
        ]
    },
    {
        id: 63,
        name: 'Juicy BLT',
        chinaOnly: false,
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **20** satiety  
            **Flame Resistance +15%  
            Flame Resistance +675**  
            Duration **1200** sec`,
        ingredients: [
            { item: i.fattymeat, amount: 1 },
            { item: i.redwheat, amount: 2 },
            { item: i.egg, amount: 2 }
        ]
    },
    {
        id: 64,
        name: 'Salmon Sashimi',
        chinaOnly: false,
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **20** satiety  
            **Ice Attack +2%  
            Ice Attack +150**  
            Duration **1200** sec`,
        ingredients: [
            { item: i.salmon, amount: 1 }
        ]
    },
    {
        id: 65,
        name: 'Snail Baked Rice',
        chinaOnly: false,
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **20** satiety  
            **Physical Resistance +15%  
            Physical Resistance +675**  
            Duration **1200** sec`,
        ingredients: [
            { item: i.snail, amount: 1 },
            { item: i.rice, amount: 2 }
        ]
    },
    {
        id: 65,
        name: 'Aloe Vera Yogurt',
        chinaOnly: true,
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **20** satiety  
            Recovers **20% + 60,000** HP`,
        ingredients: [
            { item: i.aloevera, amount: 1 },
            { item: i.honey, amount: 1 },
            { item: i.milk, amount: 2 }
        ]
    },
    {
        id: 65,
        name: 'Rose Tea',
        chinaOnly: true,
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **800** stamina  
            Recovers **20% + 60,000** HP`,
        ingredients: [
            { item: i.rosepetals, amount: 1 },
            { item: i.honey, amount: 2 }
        ]
    },
    {
        id: 65,
        name: 'Radish Soup',
        chinaOnly: true,
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **800** stamina  
            Recovers **20% + 60,000** HP`,
        ingredients: [
            { item: i.radish, amount: 1 }
        ]
    },
    {
        id: 65,
        name: 'Rose Bread',
        chinaOnly: true,
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **20** satiety  
            **Volt Resistance +15%**  
            **Volt Resistance +675**  
            Duration **1200** sec`,
        ingredients: [
            { item: i.rosepetals, amount: 1 },
            { item: i.redwheat, amount: 2 }
        ]
    },
    {
        id: 65,
        name: 'Chicken Noodle Soup',
        chinaOnly: true,
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **20** satiety  
            **Physical Attack +2%**  
            **Physical Attack +150**  
            Duration **1200** sec`,
        ingredients: [
            { item: i.radish, amount: 1 },
            { item: i.drumstick, amount: 1 },
            { item: i.wheat, amount: 2 }
        ]
    },
    {
        id: 65,
        name: 'Spicy Pork Noodles',
        chinaOnly: true,
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **20** satiety  
            **Flame Attack +2%**  
            **Flame Attack +150**  
            Duration **1200** sec`,
        ingredients: [
            { item: i.fattymeat, amount: 1 },
            { item: i.pepper, amount: 1 },
            { item: i.wheat, amount: 2 }
        ]
    },
    {
        id: 65,
        name: 'Barbecue Platter',
        chinaOnly: true,
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **20** satiety  
            **Flame Resistance +15%**  
            **Flame Resistance +675**  
            Duration **1200** sec`,
        ingredients: [
            { item: i.firmmeat, amount: 1 },
            { item: i.pepper, amount: 1 },
            { item: i.fleshytail, amount: 1 }
        ]
    },
    {
        id: 65,
        name: 'Radish Rib Soup',
        chinaOnly: true,
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **20** satiety  
            **Physical Resistance +15%**  
            **Physical Resistance +675**  
            Duration **1200** sec`,
        ingredients: [
            { item: i.radish, amount: 1 },
            { item: i.ribs, amount: 1 }
        ]
    },
    {
        id: 65,
        name: 'Crispy Oil Melon',
        chinaOnly: true,
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **20** satiety  
            Recovers **20% + 60,000** HP`,
        ingredients: [
            { item: i.oilmelon, amount: 1 }
        ]
    },
    {
        id: 65,
        name: 'Spicy Oil Melon Sticks',
        chinaOnly: true,
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **800** stamina  
            Recovers **20% + 60,000** HP`,
        ingredients: [
            { item: i.oilmelon, amount: 1 },
            { item: i.pepper, amount: 2 }
        ]
    },
]

export default recipes;