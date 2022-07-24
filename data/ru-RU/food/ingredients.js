const ingredients = {
    // Vera recipes (2.0) https://www.taptap.com/topic/20623166
    sandonion: {
        name: 'Sand Onion',
        rarity: 1,
        chinaOnly: true,
        source: ""
    },
    cactusball: {
        name: 'Cactus Ball',
        rarity: 1,
        chinaOnly: true,
        source: ""
    },
    beetroot: {
        name: 'Beetroot',
        rarity: 2,
        chinaOnly: true,
        source: ""
    },
    soybeans: {
        name: 'Soybeans',
        rarity: 2,
        chinaOnly: true,
        source: "Purchased at Mirror City food vendor"
    },
    corn: {
        name: 'Corn',
        rarity: 2,
        chinaOnly: true,
        source: "Purchased at Mirror City food vendor"
    },
    fleshytail: {
        name: 'Fleshy Tail',
        rarity: 2,
        chinaOnly: true,
        source: "折跃门-绿洲峭壁附近的沙漠猎食者有几率出，还有芦荟"
    },
    pepper: {
        name: 'Pepper',
        rarity: 3,
        chinaOnly: true,
        source: ""
    },
    desertmelon: {
        name: 'Desert Melon',
        rarity: 3,
        chinaOnly: true,
        source: "镜都哨站附近大漠甜瓜"
    },
    pumpkin: {
        name: 'Pumpkin',
        rarity: 3,
        chinaOnly: true,
        source: "有流沙的地方边上都有流沙南瓜"
    },
    ribs: {
        name: 'Ribs',
        rarity: 3,
        chinaOnly: true,
        source: "折跃门-咸水绿洲附近的盾甲兽有几率出"
    },
    oyster: {
        name: 'Oyster',
        rarity: 3,
        chinaOnly: true,
        source: ""
    },
    fishleaf: {
        name: 'Fish Leaf',
        rarity: 3,
        chinaOnly: true,
        source: ""
    },
    aloevera: {
        name: 'Aloe Vera',
        rarity: 4,
        chinaOnly: true,
        source: ""
    },
    rosepetals: {
        name: 'Rose Petals',
        rarity: 4,
        chinaOnly: true,
        source: ""
    },
    radish: {
        name: 'Radish',
        rarity: 4,
        chinaOnly: true,
        source: "折跃门-咸水绿洲，舒伯特附近的都是，还有辣椒"
    },
    oilmelon: {
        name: 'Oil Melon',
        rarity: 4,
        chinaOnly: true,
        source: ""
    },
    
    mushroom: {
        name: 'Mushroom',
        rarity: 1,
        chinaOnly: false,
        source: "Found on Astra (around giant mushrooms) and in Crown"
    },
    
    silverperch: {
        name: 'Silver Bass',
        rarity: 1,
        chinaOnly: false,
        source: 'Found in rivers'
    },
    
    wheat: {
        name: 'Homi Grain',
        rarity: 1,
        chinaOnly: false,
        source: 'Found on Astra (meadows) and Banges (meadows)'
    },
    
    meat: {
        name: 'Game Meat',
        rarity: 1,
        chinaOnly: false,
        source: 'Obtained by hunting wild animals'
    },
    
    lettuce: {
        name: 'Lettuce',
        rarity: 1,
        chinaOnly: false,
        source: 'Found on Astra (meadows)'
    },
    
    dressing: {
        name: 'Salad Dressing',
        rarity: 1,
        chinaOnly: false,
        source: 'Purchased at food vendor'
    },
    
    egg: {
        name: 'Poultry Egg',
        rarity: 1,
        chinaOnly: false,
        source: 'Found in bird nests (high elevations)'
    },
    
    seaweed: {
        name: 'Laver',
        rarity: 2,
        chinaOnly: false,
        source: 'Found in Banges (North Sea Beach)'
    },
    
    milk: {
        name: 'Milk',
        rarity: 1,
        chinaOnly: false,
        source: 'Purchased at food vendor'
    },
    
    drumstick: {
        name: 'Poultry Meat',
        rarity: 1,
        chinaOnly: false,
        source: 'Obtained by hunting birds'
    },
    
    rice: {
        name: 'Rice',
        rarity: 1,
        chinaOnly: false,
        source: 'Purchased at food vendor'
    },
    
    tomato: {
        name: 'Thornmato',
        rarity: 2,
        chinaOnly: false,
        source: 'Found on Astra (around alpine shrubs) and in Navia (around trees)'
    },
    
    hornedconch: {
        name: 'Conch',
        rarity: 2,
        chinaOnly: false,
        source: 'Found in Bangis (South Sea Beach) and Navia (beach)'
    },
    
    potato: {
        name: 'Potato',
        rarity: 2,
        chinaOnly: false,
        source: 'Found in Banges (around bushes)'
    },
    
    fruitdrop: {
        name: 'Fallen Fruit',
        rarity: 2,
        chinaOnly: false,
        source: 'Found on Astra (around trees) and in Banges (around trees)'
    },
    
    honey: {
        name: 'Honey',
        rarity: 2,
        chinaOnly: false,
        source: 'Obtained from hives and bees'
    },
    
    ghostmushroom: {
        name: 'Ghost Mushroom',
        rarity: 2,
        chinaOnly: false,
        source: 'Found on Astra (Keel, Graveyard)'
    },
    
    broccoli: {
        name: 'Broccoli',
        rarity: 2,
        chinaOnly: false,
        source: 'Found on Astra (meadows)'
    },
    
    dandelion: {
        name: 'Dandelion Seed',
        rarity: 1,
        chinaOnly: false,
        source: 'Obtained from dandelion pom-poms'
    },
    
    sturgeon: {
        name: "Darby's Sturgeon",
        rarity: 2,
        chinaOnly: false,
        source: 'Found in rivers of Astra, Navia, and Warren'
    },
    
    redwheat: {
        name: 'Brown Rice',
        rarity: 2,
        chinaOnly: false,
        source: 'Found in Navia (meadows)'
    },
    
    fireear: {
        name: 'Firecap',
        rarity: 2,
        chinaOnly: false,
        source: 'Found in Crown'
    },
    
    blackmoss: {
        name: 'Black Moss',
        rarity: 2,
        chinaOnly: false,
        source: 'Found in Crown'
    },
    
    seaconch: {
        name: 'Scallop',
        rarity: 3,
        chinaOnly: false,
        source: 'Found in Banges (South Sea Beach)'
    },
    
    hindleg: {
        name: 'Rear Hock',
        rarity: 3,
        chinaOnly: false,
        source: 'Obtained by hunting rabbits, mountain hares, boars, bears, wolves, and honey badgers'
    },
    
    shuttlecrab: {
        name: 'Portunid',
        rarity: 3,
        chinaOnly: false,
        source: 'Found on the beaches of Astra, Banges, and Crown'
    },
    
    strawberry: {
        name: 'Strawberry',
        rarity: 3,
        chinaOnly: false,
        source: 'Found in Navia (around bushes)'
    },
    
    blueberry: {
        name: 'Small Blueberry Jar',
        rarity: 3,
        chinaOnly: false,
        source: 'Obtained from defeating the Sons of Aida (robotic enemies)'
    },
    
    sparklingwater: {
        name: 'Carbonated Water',
        rarity: 1,
        chinaOnly: false,
        source: 'Purchased at food vendor'
    },
    
    seaurchin: {
        name: 'Sea Urchin',
        rarity: 3,
        chinaOnly: false,
        source: 'Found in Banges (North Sea Beach) and Crown (beach)'
    },
    
    spinach: {
        name: 'Fiddlehead',
        rarity: 3,
        chinaOnly: false,
        source: 'Found near the Banges factory'
    },
    
    cocoabeans: {
        name: 'Cocoa Beans',
        rarity: 3,
        chinaOnly: false,
        source: 'Found in Navia (Minyu Island)'
    },
    
    balloonfruit: {
        name: 'Balloon Fruit',
        rarity: 3,
        chinaOnly: false,
        source: 'Found on Astra and in Navia'
    },
    
    thundereel: {
        name: 'Electric Eel',
        rarity: 3,
        chinaOnly: false,
        source: 'Found in the rivers of Banges, Navia, and Warren'
    },
    
    hermitcrab: {
        name: 'Hermit Crab',
        rarity: 3,
        chinaOnly: false,
        source: 'Found on the beaches of Banges, Navia, and Crown'
    },
    
    pomegranate: {
        name: 'Phosphogranate',
        rarity: 3,
        chinaOnly: false,
        source: 'Found in Navia (around rocks)'
    },
    
    dragonfruit: {
        name: 'Firedragon Fruit',
        rarity: 3,
        chinaOnly: false,
        source: 'Found near rivers in Navia and Crown'
    },
    
    barnacle: {
        name: 'Barnacle',
        rarity: 3,
        chinaOnly: false,
        source: 'Found near the sea in Warren'
    },
    
    onion: {
        name: 'Onion',
        rarity: 3,
        chinaOnly: false,
        source: 'Purchased at food vendor'
    },
    
    snowblossom: {
        name: 'Snow Azalea',
        rarity: 3,
        chinaOnly: false,
        source: 'Found in Warren'
    },
    
    pinecone: {
        name: 'Pinecone',
        rarity: 3,
        chinaOnly: false,
        source: 'Found in Warren (around pine trees)'
    },
    
    caviar: {
        name: 'Caviar',
        rarity: 3,
        chinaOnly: false,
        source: 'Obtained from raider camp enemies'
    },
    
    nut: {
        name: 'Hazelnut',
        rarity: 4,
        chinaOnly: false,
        source: 'Found in Navia'
    },
    
    birdpotato: {
        name: "Purple Yam",
        rarity: 4,
        chinaOnly: false,
        source: 'Found in Warren'
    },
    
    snowlotus: {
        name: 'Snow Lotus',
        rarity: 4,
        chinaOnly: false,
        source: 'Found in Warren'
    },
    
    blacktruffle: {
        name: 'Black Truffle',
        rarity: 4,
        chinaOnly: false,
        source: 'Found in Warren'
    },
    
    cordyceps: {
        name: 'Caterpillar Fungus',
        rarity: 4,
        chinaOnly: false,
        source: 'Found in Warren'
    },
    
    firmmeat: {
        name: 'Prime Cut',
        rarity: 4,
        chinaOnly: false,
        source: 'Obtained by hunting wild animals'
    },
    
    fattymeat: {
        name: 'Fatty Cut',
        rarity: 4,
        chinaOnly: false,
        source: 'Obtained by hunting wild animals'
    },
    
    salmon: {
        name: 'Lake Bass',
        rarity: 4,
        chinaOnly: false,
        source: 'Found in rivers in Crown and Warren'
    },
    
    snail: {
        name: 'Carrion Snail',
        rarity: 4,
        chinaOnly: false,
        source: 'Found in Navia (beach)'
    }
    
}

export default ingredients;