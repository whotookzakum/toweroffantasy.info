import i from "./ingredients";

const recipes = [
    {
        name: 'Fried Mushrooms',
        imgSrc: "friedmushrooms.webp",
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
        name: 'Crispy Grilled Fish',
        imgSrc: "crispygrilledfish.webp",
        chinaOnly: false,
        rarity: 1,
        stars: 1,
        effect: 'Recovers **10** satiety',
        ingredients: [
            { item: i.silverbass, amount: 1 }
        ]
    },
    {
        name: 'Wholegrain Bread',
        imgSrc: "wholegrainbread.webp",
        chinaOnly: false,
        rarity: 1,
        stars: 1,
        effect: 'Recovers **10** satiety',
        ingredients: [
            { item: i.homigrain, amount: 2 }
        ]
    },
    {
        name: 'Sizzling Meat',
        imgSrc: "sizzlingmeat.webp",
        chinaOnly: false,
        rarity: 1,
        stars: 1,
        effect: 'Recovers **10** satiety',
        ingredients: [
            { item: i.gamemeat, amount: 2 }
        ]
    },
    {
        name: 'Lettuce Salad',
        imgSrc: "lettucesalad.webp",
        chinaOnly: false,
        rarity: 1,
        stars: 1,
        effect: 
            `Recovers **5** satiety  
            Recovers **10% + 1,500** HP`,
        ingredients: [
            { item: i.lettuce, amount: 2 },
            { item: i.saladdressing, amount: 1 }
        ]
    },
    {
        name: 'Fried Egg',
        imgSrc: "friedegg.webp",
        chinaOnly: false,
        rarity: 1,
        stars: 1,
        effect: 
            `Recovers **5** satiety  
            Recovers **10% + 1,500** HP`,
        ingredients: [
            { item: i.poultryegg, amount: 2 }
        ]
    },
    {
        name: 'Grilled Sand Onion',
        imgSrc: "grilledsandonion.webp",
        chinaOnly: true,
        rarity: 1,
        stars: 1,
        effect: 'Recovers **10** satiety',
        ingredients: [
            { item: i.sandonion, amount: 2 }
        ]
    },
    {
        name: 'Special Cactus Drink',
        imgSrc: "specialcactusdrink.webp",
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
        name: 'Seaweed and Egg Soup',
        imgSrc: "seaweedandeggsoup.webp",
        chinaOnly: false,
        rarity: 2,
        stars: 1,
        effect: 
            `Recovers **7** satiety  
            Recovers **12% + 3,300** HP`,
        ingredients: [
            { item: i.laver, amount: 2 },
            { item: i.poultryegg, amount: 1 }
        ]
    },
    {
        name: 'Breakfast Cereal',
        imgSrc: "breakfastcereal.webp",
        chinaOnly: false,
        rarity: 2,
        stars: 1,
        effect: 'Recovers **14** satiety',
        ingredients: [
            { item: i.homigrain, amount: 2 },
            { item: i.milk, amount: 1 }
        ]
    },
    {
        name: 'Crispy Chicken Burger',
        imgSrc: "crispychickenburger.webp",
        chinaOnly: false,
        rarity: 2,
        stars: 1,
        effect: 
            `Recovers **7** satiety  
            Recovers **12% + 3,300** HP`,
        ingredients: [
            { item: i.homigrain, amount: 1 },
            { item: i.poultrymeat, amount: 1 },
            { item: i.lettuce, amount: 1 }
        ]
    },
    {
        name: 'Egg Fried Rice',
        imgSrc: "eggfriedrice.webp",
        chinaOnly: false,
        rarity: 2,
        stars: 1,
        effect: 'Recovers **14** satiety',
        ingredients: [
            { item: i.rice, amount: 2 },
            { item: i.poultryegg, amount: 1 }
        ]
    },
    {
        name: 'Golden Egg and Tomato',
        imgSrc: "goldeneggandtomato.webp",
        chinaOnly: false,
        rarity: 2,
        stars: 1,
        effect: 
            `Recovers **7** satiety  
            Recovers **12% + 3,300** HP`,
        ingredients: [
            { item: i.thornmato, amount: 2 },
            { item: i.poultryegg, amount: 2 }
        ]
    },
    {
        name: 'Mushroom Soup',
        imgSrc: "mushroomsoup.webp",
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
        name: 'Steamed Conch',
        imgSrc: "steamedconch.webp",
        chinaOnly: false,
        rarity: 2,
        stars: 1,
        effect: 
            `Recovers **7** satiety  
            Recovers **12% + 3,300** HP`,
        ingredients: [
            { item: i.conch, amount: 2 },
            { item: i.lettuce, amount: 1 }
        ]
    },
    {
        name: 'Meat and Potato Stew',
        imgSrc: "meatandpotatostew.webp",
        chinaOnly: false,
        rarity: 2,
        stars: 1,
        effect: 'Recovers **14** satiety',
        ingredients: [
            { item: i.potato, amount: 1 },
            { item: i.gamemeat, amount: 1 }
        ]
    },
    {
        name: 'Fries',
        imgSrc: "fries.webp",
        chinaOnly: false,
        rarity: 2,
        stars: 1,
        effect: 'Recovers **14** satiety',
        ingredients: [
            { item: i.potato, amount: 1 },
            { item: i.saladdressing, amount: 1 }
        ]
    },
    {
        name: 'Vegetable Salad',
        imgSrc: "vegetablesalad.webp",
        chinaOnly: false,
        rarity: 2,
        stars: 1,
        effect: 
            `Recovers **7** satiety  
            Recovers **12% + 3,300** HP`,
        ingredients: [
            { item: i.fallenfruit, amount: 1 },
            { item: i.thornmato, amount: 1 },
            { item: i.lettuce, amount: 1 },
            { item: i.saladdressing, amount: 1 }
        ]
    },
    {
        name: 'Fried Chicken',
        imgSrc: "friedchicken.webp",
        chinaOnly: false,
        rarity: 2,
        stars: 1,
        effect: 
            `Recovers **7** satiety  
            Recovers **12% + 3,300** HP`,
        ingredients: [
            { item: i.poultrymeat, amount: 2 },
            { item: i.homigrain, amount: 1 }
        ]
    },
    {
        name: 'Honeyed Fruit Juice',
        imgSrc: "honeyedfruitjuice.webp",
        chinaOnly: false,
        rarity: 2,
        stars: 1,
        effect: 
            `Recovers **300** stamina  
            Recovers **12% + 3,300** HP`,
        ingredients: [
            { item: i.fallenfruit, amount: 2 },
            { item: i.honey, amount: 1 },
            { item: i.carbonatedwater, amount: 1 }
        ]
    },
    {
        name: 'Iced Orchid Surprise',
        imgSrc: "icedorchidsurprise.webp",
        chinaOnly: false,
        rarity: 2,
        stars: 1,
        effect: 
            `Recovers **300** stamina  
            Recovers **12% + 3,300** HP`,
        ingredients: [
            { item: i.ghostmushroom, amount: 2 },
            { item: i.milk, amount: 1 },
            { item: i.carbonatedwater, amount: 1 }
        ]
    },
    {
        name: 'Stir-Fried Broccoli',
        imgSrc: "stir-friedbroccoli.webp",
        chinaOnly: false,
        rarity: 2,
        stars: 1,
        effect: 'Recovers **14** satiety',
        ingredients: [
            { item: i.broccoli, amount: 2 }
        ]
    },
    {
        name: 'Meat Bun',
        imgSrc: "meatbun.webp",
        chinaOnly: false,
        rarity: 2,
        stars: 1,
        effect: 'Recovers **14** satiety',
        ingredients: [
            { item: i.homigrain, amount: 2 },
            { item: i.gamemeat, amount: 1 }
        ]
    },
    {
        name: 'Sliced Fish with Mushroom',
        imgSrc: "slicedfishwithmushroom.webp",
        chinaOnly: false,
        rarity: 2,
        stars: 1,
        effect: 
            `Recovers **7** satiety  
            Recovers **12% + 3,300** HP`,
        ingredients: [
            { item: i.mushroom, amount: 2 },
            { item: i.silverbass, amount: 1 }
        ]
    },
    {
        name: 'Dandelion Mushroom Soup',
        imgSrc: "dandelionmushroomsoup.webp",
        chinaOnly: false,
        rarity: 2,
        stars: 1,
        effect: 
            `Recovers **7** satiety  
            Recovers **12% + 3,300** HP`,
        ingredients: [
            { item: i.dandelionseed, amount: 1 },
            { item: i.mushroom, amount: 2 }
        ]
    },
    {
        name: 'Surf and Turf',
        imgSrc: "surfandturf.webp",
        chinaOnly: false,
        rarity: 2,
        stars: 2,
        effect: 
            `Recovers **8** satiety  
            Recovers **13% + 10,000** HP`,
        ingredients: [
            { item: i.darbyssturgeon, amount: 1 },
            { item: i.poultryegg, amount: 2 }
        ]
    },
    {
        name: 'Red Wheat Bread',
        imgSrc: "redwheatbread.webp",
        chinaOnly: false,
        rarity: 2,
        stars: 2,
        effect: 'Recovers **16** satiety',
        ingredients: [
            { item: i.brownrice, amount: 2 }
        ]
    },
    {
        name: 'Firecap Mushroom Soup',
        imgSrc: "firecapmushroomsoup.webp",
        chinaOnly: false,
        rarity: 2,
        stars: 2,
        effect: 
            `Recovers **400** stamina  
            Recovers **13% + 10,000** HP`,
        ingredients: [
            { item: i.firecap, amount: 2 },
            { item: i.lettuce, amount: 2 }
        ]
    },
    {
        name: 'Black Moss Soup',
        imgSrc: "blackmosssoup.webp",
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
        name: 'Beet Soup',
        imgSrc: "beetrootsoup.webp",
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
        name: 'Deep-fried Tofu',
        imgSrc: "deep-friedtofu.webp",
        chinaOnly: true,
        rarity: 2,
        stars: 1,
        effect: 'Recovers **14** satiety',
        ingredients: [
            { item: i.soybeans, amount: 2 }
        ]
    },
    {
        name: 'Salted Corn',
        imgSrc: "saltedcorn.webp",
        chinaOnly: true,
        rarity: 2,
        stars: 1,
        effect: 'Recovers **14** satiety',
        ingredients: [
            { item: i.corn, amount: 2 }
        ]
    },
    {
        name: 'Grilled Lizard Tail',
        imgSrc: "grilledlizardtail.webp",
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
        name: 'Creamy Corn Soup',
        imgSrc: "creamycornsoup.webp",
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
        name: 'Seafood Soup',
        imgSrc: "seafoodsoup.webp",
        chinaOnly: false,
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety  
            **Ice Attack +1%  
            Ice Attack +45**  
            Duration **900** sec`,
        ingredients: [
            { item: i.conch, amount: 3 },
            { item: i.scallop, amount: 2 },
            { item: i.lettuce, amount: 1 }
        ]
    },
    {
        name: 'Spicy Burger',
        imgSrc: "spicyburger.webp",
        chinaOnly: false,
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety  
            **Physical Attack +1%  
            Physical Attack +45**  
            Duration **900** sec`,
        ingredients: [
            { item: i.homigrain, amount: 3 },
            { item: i.rearhock, amount: 2 },
            { item: i.lettuce, amount: 1 }
        ]
    },
    {
        name: 'Steamed Crab',
        imgSrc: "steamedcrab.webp",
        chinaOnly: false,
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety  
            Recovers **15% + 20,000** HP`,
        ingredients: [
            { item: i.portunid, amount: 2 },
            { item: i.lettuce, amount: 2 }
        ]
    },
    {
        name: 'Iced Strawberry Soda',
        imgSrc: "icedstrawberrysoda.webp",
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
            { item: i.carbonatedwater, amount: 1 }
        ]
    },
    {
        name: 'Thundercloud Blueberry Soda',
        imgSrc: "thundercloudblueberrysoda.webp",
        chinaOnly: false,
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety  
            **Volt Resistance +10%  
            Volt Resistance +170**  
            Duration **900** sec`,
        ingredients: [
            { item: i.smallblueberryjar, amount: 1 },
            { item: i.honey, amount: 2 },
            { item: i.carbonatedwater, amount: 1 }
        ]
    },
    {
        name: 'Simple Power Salad',
        imgSrc: "simplepowersalad.webp",
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
            { item: i.thornmato, amount: 1 },
            { item: i.lettuce, amount: 1 },
            { item: i.poultryegg, amount: 1 },
            { item: i.saladdressing, amount: 1 }
        ]
    },
    {
        name: 'Steamed Egg with Sea Urchin',
        imgSrc: "steamedeggwithseaurchin.webp",
        chinaOnly: false,
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety  
            Recovers **15% + 20,000** HP`,
        ingredients: [
            { item: i.seaurchin, amount: 2 },
            { item: i.poultryegg, amount: 2 }
        ]
    },
    {
        name: 'Jam on Toast',
        imgSrc: "jamontoast.webp",
        chinaOnly: false,
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety  
            **Volt Attack +1%  
            Volt Attack +45**  
            Duration **900** sec`,
        ingredients: [
            { item: i.smallblueberryjar, amount: 1 },
            { item: i.strawberry, amount: 1 },
            { item: i.homigrain, amount: 3 }
        ]
    },
    {
        name: 'Tomato and Fried Egg Pasta',
        imgSrc: "tomatoandfriedeggpasta.webp",
        chinaOnly: false,
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety  
            **Flame Attack +1%  
            Flame Attack +45**  
            Duration **900** sec`,
        ingredients: [
            { item: i.thornmato, amount: 4 },
            { item: i.homigrain, amount: 3 },
            { item: i.poultryegg, amount: 1 }
        ]
    },
    {
        name: 'Fruit Cake',
        imgSrc: "fruitcake.webp",
        chinaOnly: false,
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety  
            Recovers **15% + 20,000** HP`,
        ingredients: [
            { item: i.strawberry, amount: 2 },
            { item: i.homigrain, amount: 1 },
            { item: i.fallenfruit, amount: 1 },
            { item: i.poultryegg, amount: 1 }
        ]
    },
    {
        name: 'Boiled Scallops',
        imgSrc: "boiledscallops.webp",
        chinaOnly: false,
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety  
            Recovers **15% + 20,000** HP`,
        ingredients: [
            { item: i.scallop, amount: 2 },
            { item: i.lettuce, amount: 3 }
        ]
    },
    {
        name: 'Roast Rump',
        imgSrc: "roastrump.webp",
        chinaOnly: false,
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **500** stamina  
            Recovers **15% + 20,000** HP`,
        ingredients: [
            { item: i.rearhock, amount: 2 }
        ]
    },
    {
        name: 'Fiddlehead Pie',
        imgSrc: "fiddleheadpie.webp",
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **10** satiety  
            Recovers **16% + 34,000** HP`,
        ingredients: [
            { item: i.fiddlehead, amount: 2 },
            { item: i.brownrice, amount: 2 }
        ]
    },
    {
        name: 'Chocolate Bread',
        imgSrc: "chocolatebread.webp",
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **10** satiety  
            Recovers **16% + 34,000** HP`,
        ingredients: [
            { item: i.cocoabeans, amount: 2 },
            { item: i.brownrice, amount: 2 }
        ]
    },
    {
        name: 'Balloon Fruit Salad',
        imgSrc: "balloonfruitsalad.webp",
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **10** satiety  
            Recovers **16% + 34,000** HP`,
        ingredients: [
            { item: i.balloonfruit, amount: 2 },
            { item: i.thornmato, amount: 2 },
            { item: i.saladdressing, amount: 1 }
        ]
    },
    {
        name: 'Fiddlehead Soup',
        imgSrc: "fiddleheadsoup.webp",
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **10** satiety  
            Recovers **16% + 34,000** HP`,
        ingredients: [
            { item: i.fiddlehead, amount: 2 },
            { item: i.lettuce, amount: 4 }
        ]
    },
    {
        name: 'Spicy Eel',
        imgSrc: "spicyeel.webp",
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **10** satiety  
            **Volt Resistance +10%  
            Volt Resistance +290**  
            Duration **900** sec`,
        ingredients: [
            { item: i.electriceel, amount: 1 }
        ]
    },
    {
        name: 'Eel and Mushroom Soup',
        imgSrc: "eelandmushroomsoup.webp",
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **10** satiety  
            **Volt Attack +1%  
            Volt Attack +80**  
            Duration **900** sec`,
        ingredients: [
            { item: i.electriceel, amount: 1 },
            { item: i.firecap, amount: 2 }
        ]
    },
    {
        name: 'Sea Crab Soup',
        imgSrc: "seacrabsoup.webp",
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
        name: 'Sweet Pomegranate Juice',
        imgSrc: "sweetpomegranatejuice.webp",
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **600** stamina  
            Recovers **16% + 34,000** HP`,
        ingredients: [
            { item: i.phosphogranate, amount: 2 },
            { item: i.honey, amount: 2 },
            { item: i.carbonatedwater, amount: 1 }
        ]
    },
    {
        name: 'Cocoa Milk',
        imgSrc: "cocoamilk.webp",
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
        name: 'Firedragon Fruit Tea',
        imgSrc: "firedragonfruittea.webp",
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **10** satiety  
            **Flame Attack +1%  
            Flame Attack +80**  
            Duration **900** sec`,
        ingredients: [
            { item: i.firedragonfruit, amount: 2 },
            { item: i.honey, amount: 2 }
        ]
    },
    {
        name: 'Barnacle Stew',
        imgSrc: "barnaclestew.webp",
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
        name: 'Barnacle Seafood Pizza',
        imgSrc: "barnacleseafoodpizza.webp",
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **10** satiety  
            Recovers **16% + 34,000** HP`,
        ingredients: [
            { item: i.barnacle, amount: 1 },
            { item: i.brownrice, amount: 2 },
            { item: i.onion, amount: 1 }
        ]
    },
    {
        name: 'Snow Azalea Tea',
        imgSrc: "snowazaleatea.webp",
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **10** satiety  
            **Ice Attack +1%  
            Ice Attack +80**  
            Duration **900** sec`,
        ingredients: [
            { item: i.snowazalea, amount: 1 },
            { item: i.milk, amount: 1 },
            { item: i.honey, amount: 2 }
        ]
    },
    {
        name: 'Pine Cocoa',
        imgSrc: "pinecocoa.webp",
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
        name: 'Caviar Sushi',
        imgSrc: "caviarsushi.webp",
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **10** satiety  
            Recovers **16% + 34,000** HP`,
        ingredients: [
            { item: i.caviar, amount: 1 },
            { item: i.rice, amount: 2 },
            { item: i.laver, amount: 2 }
        ]
    },
    {
        name: 'Caviar Potato Balls',
        imgSrc: "caviarpotatoballs.webp",
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
        name: 'Stir-fried Peppers',
        imgSrc: "stir-friedpeppers.webp",
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
        name: 'Melon Salad',
        imgSrc: "melonsalad.webp",
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
            { item: i.saladdressing, amount: 2 }
        ]
    },
    {
        name: 'Pumpkin Porridge',
        imgSrc: "pumpkinporridge.webp",
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
        name: 'Grilled Ribs',
        imgSrc: "grilledribs.webp",
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
        name: 'Chocolate Soymilk',
        imgSrc: "chocolatesoymilk.webp",
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
        name: 'Beetroot Fern',
        imgSrc: "beetrootfern.webp",
        chinaOnly: true,
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety 
            Recovers **15% + 20,000** HP`,
        ingredients: [
            { item: i.fiddlehead, amount: 2 },
            { item: i.beetroot, amount: 2 }
        ]
    },
    {
        name: 'Honeydew Melon Bread',
        imgSrc: "honeydewmelonbread.webp",
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
            { item: i.homigrain, amount: 2 }
        ]
    },
    {
        name: 'Mixed Grain Porridge',
        imgSrc: "mixedgrainporridge.webp",
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
        name: 'Corn and Seafood Pie',
        imgSrc: "cornandseafoodpie.webp",
        chinaOnly: true,
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety 
            Recovers **15% + 20,000** HP`,
        ingredients: [
            { item: i.scallop, amount: 2 },
            { item: i.corn, amount: 1 },
            { item: i.homigrain, amount: 2 }
        ]
    },
    {
        name: 'Steamed Pumpkin',
        imgSrc: "steamedpumpkin.webp",
        chinaOnly: true,
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety 
            Recovers **15% + 20,000** HP`,
        ingredients: [
            { item: i.pumpkin, amount: 2 },
            { item: i.homigrain, amount: 3 }
        ]
    },
    {
        name: 'Spicy Fried Rice',
        imgSrc: "spicyfriedrice.webp",
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
            { item: i.poultryegg, amount: 1 },
            { item: i.rice, amount: 2 }
        ]
    },
    {
        name: 'Grilled Oysters',
        imgSrc: "grilledoysters.webp",
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
        name: 'Cold Fish Leaf',
        imgSrc: "coldfishleaf.webp",
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
        name: 'Oyster Tofu Soup',
        imgSrc: "oystertofusoup.webp",
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
        name: 'Fishleaf Scrambled Eggs',
        imgSrc: "fishleafscrambledeggs.webp",
        chinaOnly: true,
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **600** stamina  
            Recovers **16% + 34,000** HP`,
        ingredients: [
            { item: i.fishleaf, amount: 2 },
            { item: i.poultryegg, amount: 3 }
        ]
    },
    {
        name: 'Nut Tea',
        imgSrc: "nuttea.webp",
        chinaOnly: false,
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **20** satiety  
            Recovers **20% + 60,000** HP`,
        ingredients: [
            { item: i.hazelnut, amount: 1 },
            { item: i.pinecone, amount: 2 },
            { item: i.honey, amount: 2 }
        ]
    },
    {
        name: "Purple Yam Pie",
        imgSrc: "purpleyampie.webp",
        chinaOnly: false,
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **20** satiety  
            **Volt Attack +2%  
            Volt Attack +150**  
            Duration **1200** sec`,
        ingredients: [
            { item: i.purpleyam, amount: 1 },
            { item: i.brownrice, amount: 3 }
        ]
    },
    {
        name: 'Snow Lotus Soup',
        imgSrc: "snowlotussoup.webp",
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
        name: 'Truffle Fried Rice',
        imgSrc: "trufflefriedrice.webp",
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
        name: 'Caterpillar Fungus Noodles',
        imgSrc: "caterpillarfungusnoodles.webp",
        chinaOnly: false,
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **20** satiety  
            Recovers **20% + 60,000** HP`,
        ingredients: [
            { item: i.caterpillarfungus, amount: 1 },
            { item: i.brownrice, amount: 3 }
        ]
    },
    {
        name: 'Grilled Steak',
        imgSrc: "grilledsteak.webp",
        chinaOnly: false,
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **20** satiety  
            **Volt Resistance +15%  
            Volt Resistance +675**  
            Duration **1200** sec`,
        ingredients: [
            { item: i.primecut, amount: 1 }
        ]
    },
    {
        name: 'Steak with Sauce',
        imgSrc: "steakwithsauce.webp",
        chinaOnly: false,
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **20** satiety  
            **Flame Attack +2%  
            Flame Attack +150**  
            Duration **1200** sec`,
        ingredients: [
            { item: i.primecut, amount: 1 },
            { item: i.firecap, amount: 3 }
        ]
    },
    {
        name: 'Braised Meat',
        imgSrc: "braisedmeat.webp",
        chinaOnly: false,
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **20** satiety  
            **Ice Resistance +15%  
            Ice Resistance +675**  
            Duration **1200** sec`,
        ingredients: [
            { item: i.fattycut, amount: 1 }
        ]
    },
    {
        name: 'Juicy Meat Sandwich',
        imgSrc: "juicyblt.webp",
        chinaOnly: false,
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **20** satiety  
            **Flame Resistance +15%  
            Flame Resistance +675**  
            Duration **1200** sec`,
        ingredients: [
            { item: i.fattycut, amount: 1 },
            { item: i.brownrice, amount: 2 },
            { item: i.poultryegg, amount: 2 }
        ]
    },
    {
        name: 'Salmon Sashimi',
        imgSrc: "salmonsashimi.webp",
        chinaOnly: false,
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **20** satiety  
            **Ice Attack +2%  
            Ice Attack +150**  
            Duration **1200** sec`,
        ingredients: [
            { item: i.lakebass, amount: 1 }
        ]
    },
    {
        name: 'Snail Baked Rice',
        imgSrc: "snailbakedrice.webp",
        chinaOnly: false,
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **20** satiety  
            **Physical Resistance +15%  
            Physical Resistance +675**  
            Duration **1200** sec`,
        ingredients: [
            { item: i.carrionsnail, amount: 1 },
            { item: i.rice, amount: 2 }
        ]
    },
    {
        name: 'Aloe Vera Yogurt',
        imgSrc: "aloeverayogurt.webp",
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
        name: 'Rose Tea',
        imgSrc: "rosetea.webp",
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
        name: 'Radish Soup',
        imgSrc: "radishsoup.webp",
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
        name: 'Rose Bread',
        imgSrc: "rosebread.webp",
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
            { item: i.brownrice, amount: 2 }
        ]
    },
    {
        name: 'Chicken Noodle Soup',
        imgSrc: "chickennoodlesoup.webp",
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
            { item: i.poultrymeat, amount: 1 },
            { item: i.homigrain, amount: 2 }
        ]
    },
    {
        name: 'Spicy Pork Noodles',
        imgSrc: "spicyporknoodles.webp",
        chinaOnly: true,
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **20** satiety  
            **Flame Attack +2%**  
            **Flame Attack +150**  
            Duration **1200** sec`,
        ingredients: [
            { item: i.fattycut, amount: 1 },
            { item: i.pepper, amount: 1 },
            { item: i.homigrain, amount: 2 }
        ]
    },
    {
        name: 'Barbecue Platter',
        imgSrc: "barbecueplatter.webp",
        chinaOnly: true,
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **20** satiety  
            **Flame Resistance +15%**  
            **Flame Resistance +675**  
            Duration **1200** sec`,
        ingredients: [
            { item: i.primecut, amount: 1 },
            { item: i.pepper, amount: 1 },
            { item: i.fleshytail, amount: 1 }
        ]
    },
    {
        name: 'Radish Rib Soup',
        imgSrc: "radishribsoup.webp",
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
        name: 'Crispy Oil Melon',
        imgSrc: "crispyoilmelon.webp",
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
        name: 'Spicy Oil Melon Sticks',
        imgSrc: "spicyoilmelonsticks.webp",
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