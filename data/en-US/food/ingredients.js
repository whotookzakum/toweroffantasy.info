const ingredients = {
    // Vera recipes (2.0) https://www.taptap.com/topic/20623166
    sandonion: {
        name: 'Sand Onion',
        imgSrc: "sandonion.webp",
        rarity: 1,
        chinaOnly: true,
        source: ""
    },
    cactusball: {
        name: 'Cactus Ball',
        imgSrc: "cactusball.webp",
        rarity: 1,
        chinaOnly: true,
        source: ""
    },
    beetroot: {
        name: 'Beetroot',
        imgSrc: "beetroot.webp",
        rarity: 2,
        chinaOnly: true,
        source: ""
    },
    soybeans: {
        name: 'Soybeans',
        imgSrc: "soybeans.webp",
        rarity: 2,
        chinaOnly: true,
        source: "Purchased at Mirroria food vendor"
    },
    corn: {
        name: 'Corn',
        imgSrc: "corn.webp",
        rarity: 2,
        chinaOnly: true,
        source: "Purchased at Mirroria food vendor"
    },
    fleshytail: {
        name: 'Fleshy Tail',
        imgSrc: "fleshytail.webp",
        rarity: 2,
        chinaOnly: true,
        source: "折跃门-绿洲峭壁附近的沙漠猎食者有几率出，还有芦荟"
    },
    pepper: {
        name: 'Pepper',
        imgSrc: "pepper.webp",
        rarity: 3,
        chinaOnly: true,
        source: ""
    },
    desertmelon: {
        name: 'Desert Melon',
        imgSrc: "desertmelon.webp",
        rarity: 3,
        chinaOnly: true,
        source: "镜都哨站附近大漠甜瓜"
    },
    pumpkin: {
        name: 'Pumpkin',
        imgSrc: "pumpkin.webp",
        rarity: 3,
        chinaOnly: true,
        source: "有流沙的地方边上都有流沙南瓜"
    },
    ribs: {
        name: 'Ribs',
        imgSrc: "ribs.webp",
        rarity: 3,
        chinaOnly: true,
        source: "折跃门-咸水绿洲附近的盾甲兽有几率出"
    },
    oyster: {
        name: 'Oyster',
        imgSrc: "oyster.webp",
        rarity: 3,
        chinaOnly: true,
        source: ""
    },
    fishleaf: {
        name: 'Fish Leaf',
        imgSrc: "fishleaf.webp",
        rarity: 3,
        chinaOnly: true,
        source: ""
    },
    aloevera: {
        name: 'Aloe Vera',
        imgSrc: "aloevera.webp",
        rarity: 4,
        chinaOnly: true,
        source: ""
    },
    rosepetals: {
        name: 'Rose Petals',
        imgSrc: "rosepetals.webp",
        rarity: 4,
        chinaOnly: true,
        source: ""
    },
    radish: {
        name: 'Radish',
        imgSrc: "radish.webp",
        rarity: 4,
        chinaOnly: true,
        source: "折跃门-咸水绿洲，舒伯特附近的都是，还有辣椒"
    },
    oilmelon: {
        name: 'Oil Melon',
        imgSrc: "oilmelon.webp",
        rarity: 4,
        chinaOnly: true,
        source: ""
    },
    
    mushroom: {
        name: 'Mushroom',
        imgSrc: "mushroom.webp",
        rarity: 1,
        chinaOnly: false,
        source: "Found on Astra (around giant mushrooms) and in Crown"
    },
    
    silverbass: {
        name: 'Silver Bass',
        imgSrc: "silverbass.webp",
        rarity: 1,
        chinaOnly: false,
        source: 'Found in rivers'
    },
    
    homigrain: {
        name: 'Homi Grain',
        imgSrc: "homigrain.webp",
        rarity: 1,
        chinaOnly: false,
        source: 'Found on Astra (meadows) and Banges (meadows)'
    },
    
    gamemeat: {
        name: 'Game Meat',
        imgSrc: "gamemeat.webp",
        rarity: 1,
        chinaOnly: false,
        source: 'Obtained by hunting wild animals'
    },
    
    lettuce: {
        name: 'Lettuce',
        imgSrc: "lettuce.webp",
        rarity: 1,
        chinaOnly: false,
        source: 'Found on Astra (meadows)'
    },
    
    saladdressing: {
        name: 'Salad Dressing',
        imgSrc: "saladdressing.webp",
        rarity: 1,
        chinaOnly: false,
        source: 'Purchased at food vendor'
    },
    
    poultryegg: {
        name: 'Poultry Egg',
        imgSrc: "poultryegg.webp",
        rarity: 1,
        chinaOnly: false,
        source: 'Found in bird nests (high elevations)'
    },
    
    laver: {
        name: 'Laver',
        imgSrc: "laver.webp",
        rarity: 2,
        chinaOnly: false,
        source: 'Found in Banges (North Sea Beach)'
    },
    
    milk: {
        name: 'Milk',
        imgSrc: "milk.webp",
        rarity: 1,
        chinaOnly: false,
        source: 'Purchased at food vendor'
    },
    
    poultrymeat: {
        name: 'Poultry Meat',
        imgSrc: "poultrymeat.webp",
        rarity: 1,
        chinaOnly: false,
        source: 'Obtained by hunting birds'
    },
    
    rice: {
        name: 'Rice',
        imgSrc: "rice.webp",
        rarity: 1,
        chinaOnly: false,
        source: 'Purchased at food vendor'
    },
    
    thornmato: {
        name: 'Thornmato',
        imgSrc: "thornmato.webp",
        rarity: 2,
        chinaOnly: false,
        source: 'Found on Astra (around alpine shrubs) and in Navia (around trees)'
    },
    
    conch: {
        name: 'Conch',
        imgSrc: "conch.webp",
        rarity: 2,
        chinaOnly: false,
        source: 'Found in Bangis (South Sea Beach) and Navia (beach)'
    },
    
    potato: {
        name: 'Potato',
        imgSrc: "potato.webp",
        rarity: 2,
        chinaOnly: false,
        source: 'Found in Banges (around bushes)'
    },
    
    fallenfruit: {
        name: 'Fallen Fruit',
        imgSrc: "fallenfruit.webp",
        rarity: 2,
        chinaOnly: false,
        source: 'Found on Astra (around trees) and in Banges (around trees)'
    },
    
    honey: {
        name: 'Honey',
        imgSrc: "honey.webp",
        rarity: 2,
        chinaOnly: false,
        source: 'Obtained from hives and bees'
    },
    
    ghostmushroom: {
        name: 'Ghost Mushroom',
        imgSrc: "ghostmushroom.webp",
        rarity: 2,
        chinaOnly: false,
        source: 'Found on Astra (Keel, Graveyard)'
    },
    
    broccoli: {
        name: 'Broccoli',
        imgSrc: "broccoli.webp",
        rarity: 2,
        chinaOnly: false,
        source: 'Found on Astra (meadows)'
    },
    
    dandelionseed: {
        name: 'Dandelion Seed',
        imgSrc: "dandelionseed.webp",
        rarity: 1,
        chinaOnly: false,
        source: 'Obtained from dandelion pom-poms'
    },
    
    darbyssturgeon: {
        name: "Darby's Sturgeon",
        imgSrc: "darbyssturgeon.webp",
        rarity: 2,
        chinaOnly: false,
        source: 'Found in rivers of Astra, Navia, and Warren'
    },
    
    brownrice: {
        name: 'Brown Rice',
        imgSrc: "brownrice.webp",
        rarity: 2,
        chinaOnly: false,
        source: 'Found in Navia (meadows)'
    },
    
    firecap: {
        name: 'Firecap',
        imgSrc: "firecap.webp",
        rarity: 2,
        chinaOnly: false,
        source: 'Found in Crown'
    },
    
    blackmoss: {
        name: 'Black Moss',
        imgSrc: "blackmoss.webp",
        rarity: 2,
        chinaOnly: false,
        source: 'Found in Crown'
    },
    
    scallop: {
        name: 'Scallop',
        imgSrc: "scallop.webp",
        rarity: 3,
        chinaOnly: false,
        source: 'Found in Banges (South Sea Beach)'
    },
    
    rearhock: {
        name: 'Rear Hock',
        imgSrc: "rearhock.webp",
        rarity: 3,
        chinaOnly: false,
        source: 'Obtained by hunting rabbits, mountain hares, boars, bears, wolves, and honey badgers'
    },
    
    portunid: {
        name: 'Portunid',
        imgSrc: "portunid.webp",
        rarity: 3,
        chinaOnly: false,
        source: 'Found on the beaches of Astra, Banges, and Crown'
    },
    
    strawberry: {
        name: 'Strawberry',
        imgSrc: "strawberry.webp",
        rarity: 3,
        chinaOnly: false,
        source: 'Found in Navia (around bushes)'
    },
    
    smallblueberryjar: {
        name: 'Small Blueberry Jar',
        imgSrc: "smallblueberryjar.webp",
        rarity: 3,
        chinaOnly: false,
        source: 'Obtained from defeating the Sons of Aida (robotic enemies)'
    },
    
    carbonatedwater: {
        name: 'Carbonated Water',
        imgSrc: "carbonatedwater.webp",
        rarity: 1,
        chinaOnly: false,
        source: 'Purchased at food vendor'
    },
    
    seaurchin: {
        name: 'Sea Urchin',
        imgSrc: "seaurchin.webp",
        rarity: 3,
        chinaOnly: false,
        source: 'Found in Banges (North Sea Beach) and Crown (beach)'
    },
    
    fiddlehead: {
        name: 'Fiddlehead',
        imgSrc: "fiddlehead.webp",
        rarity: 3,
        chinaOnly: false,
        source: 'Found near the Banges factory'
    },
    
    cocoabeans: {
        name: 'Cocoa Beans',
        imgSrc: "cocoabeans.webp",
        rarity: 3,
        chinaOnly: false,
        source: 'Found in Navia (Minyu Island)'
    },
    
    balloonfruit: {
        name: 'Balloon Fruit',
        imgSrc: "balloonfruit.webp",
        rarity: 3,
        chinaOnly: false,
        source: 'Found on Astra and in Navia'
    },
    
    electriceel: {
        name: 'Electric Eel',
        imgSrc: "electriceel.webp",
        rarity: 3,
        chinaOnly: false,
        source: 'Found in the rivers of Banges, Navia, and Warren'
    },
    
    hermitcrab: {
        name: 'Hermit Crab',
        imgSrc: "hermitcrab.webp",
        rarity: 3,
        chinaOnly: false,
        source: 'Found on the beaches of Banges, Navia, and Crown'
    },
    
    phosphogranate: {
        name: 'Phosphogranate',
        imgSrc: "phosphogranate.webp",
        rarity: 3,
        chinaOnly: false,
        source: 'Found in Navia (around rocks)'
    },
    
    firedragonfruit: {
        name: 'Firedragon Fruit',
        imgSrc: "firedragonfruit.webp",
        rarity: 3,
        chinaOnly: false,
        source: 'Found near rivers in Navia and Crown'
    },
    
    barnacle: {
        name: 'Barnacle',
        imgSrc: "barnacle.webp",
        rarity: 3,
        chinaOnly: false,
        source: 'Found near the sea in Warren'
    },
    
    onion: {
        name: 'Onion',
        imgSrc: "onion.webp",
        rarity: 2,
        chinaOnly: false,
        source: 'Purchased at food vendor'
    },
    
    snowazalea: {
        name: 'Snow Azalea',
        imgSrc: "snowazalea.webp",
        rarity: 3,
        chinaOnly: false,
        source: 'Found in Warren'
    },
    
    pinecone: {
        name: 'Pinecone',
        imgSrc: "pinecone.webp",
        rarity: 3,
        chinaOnly: false,
        source: 'Found in Warren (around pine trees)'
    },
    
    caviar: {
        name: 'Caviar',
        imgSrc: "caviar.webp",
        rarity: 3,
        chinaOnly: false,
        source: 'Obtained from raider camp enemies'
    },
    
    hazelnut: {
        name: 'Hazelnut',
        imgSrc: "hazelnut.webp",
        rarity: 4,
        chinaOnly: false,
        source: 'Found in Navia'
    },
    
    purpleyam: {
        name: "Purple Yam",
        imgSrc: "purpleyam.webp",
        rarity: 4,
        chinaOnly: false,
        source: 'Found in Warren'
    },
    
    snowlotus: {
        name: 'Snow Lotus',
        imgSrc: "snowlotus.webp",
        rarity: 4,
        chinaOnly: false,
        source: 'Found in Warren'
    },
    
    blacktruffle: {
        name: 'Black Truffle',
        imgSrc: "blacktruffle.webp",
        rarity: 4,
        chinaOnly: false,
        source: 'Found in Warren'
    },
    
    caterpillarfungus: {
        name: 'Caterpillar Fungus',
        imgSrc: "caterpillarfungus.webp",
        rarity: 4,
        chinaOnly: false,
        source: 'Found in Warren'
    },
    
    primecut: {
        name: 'Prime Cut',
        imgSrc: "primecut.webp",
        rarity: 4,
        chinaOnly: false,
        source: 'Obtained by hunting wild animals'
    },
    
    fattycut: {
        name: 'Fatty Cut',
        imgSrc: "fattycut.webp",
        rarity: 4,
        chinaOnly: false,
        source: 'Obtained by hunting wild animals'
    },
    
    lakebass: {
        name: 'Lake Bass',
        imgSrc: "lakebass.webp",
        rarity: 4,
        chinaOnly: false,
        source: 'Found in rivers in Crown and Warren'
    },
    
    carrionsnail: {
        name: 'Carrion Snail',
        imgSrc: "carrionsnail.webp",
        rarity: 4,
        chinaOnly: false,
        source: 'Found in Navia (beach)'
    }
    
}

export default ingredients;