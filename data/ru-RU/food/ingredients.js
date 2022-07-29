const ingredients = {
    // Vera recipes (2.0) https://www.taptap.com/topic/20623166
    sandonion: {
        name: 'Песчаная луковица',
        imgSrc: "sandonion.png",
        rarity: 1,
        chinaOnly: true,
        source: ""
    },
    cactusball: {
        name: 'Кактусовый шар',
        imgSrc: "cactusball.png",
        rarity: 1,
        chinaOnly: true,
        source: ""
    },
    beetroot: {
        name: 'Свёкла',
        imgSrc: "beetroot.png",
        rarity: 2,
        chinaOnly: true,
        source: ""
    },
    soybeans: {
        name: 'Соевые бобы',
        imgSrc: "soybeans.png",
        rarity: 2,
        chinaOnly: true,
        source: "Можно приобрести в Миррории"
    },
    corn: {
        name: 'Кукуруза',
        imgSrc: "corn.png",
        rarity: 2,
        chinaOnly: true,
        source: "Можно приобрести в Миррории"
    },
    fleshytail: {
        name: 'Мясистый хвост',
        imgSrc: "fleshytail.png",
        rarity: 2,
        chinaOnly: true,
        source: "折跃门-绿洲峭壁附近的沙漠猎食者有几率出，还有芦荟"
    },
    pepper: {
        name: 'Перец',
        imgSrc: "pepper.png",
        rarity: 3,
        chinaOnly: true,
        source: ""
    },
    desertmelon: {
        name: 'Пустынная дыня',
        imgSrc: "desertmelon.png",
        rarity: 3,
        chinaOnly: true,
        source: "镜都哨站附近大漠甜瓜"
    },
    pumpkin: {
        name: 'Тыква',
        imgSrc: "pumpkin.png",
        rarity: 3,
        chinaOnly: true,
        source: "有流沙的地方边上都有流沙南瓜"
    },
    ribs: {
        name: 'Рёбра',
        imgSrc: "ribs.png",
        rarity: 3,
        chinaOnly: true,
        source: "折跃门-咸水绿洲附近的盾甲兽有几率出"
    },
    oyster: {
        name: 'Устрица',
        imgSrc: "oyster.png",
        rarity: 3,
        chinaOnly: true,
        source: ""
    },
    fishleaf: {
        name: 'Рыбные палочки',
        imgSrc: "fishleaf.png",
        rarity: 3,
        chinaOnly: true,
        source: ""
    },
    aloevera: {
        name: 'Алоэ вера',
        imgSrc: "aloevera.png",
        rarity: 4,
        chinaOnly: true,
        source: ""
    },
    rosepetals: {
        name: 'Лепестки роз',
        imgSrc: "rosepetals.png",
        rarity: 4,
        chinaOnly: true,
        source: ""
    },
    radish: {
        name: 'Редис',
        imgSrc: "radish.png",
        rarity: 4,
        chinaOnly: true,
        source: "折跃门-咸水绿洲，舒伯特附近的都是，还有辣椒"
    },
    oilmelon: {
        name: 'Масляный арбуз',
        imgSrc: "oilmelon.png",
        rarity: 4,
        chinaOnly: true,
        source: ""
    },
    
    mushroom: {
        name: 'Гриб',
        imgSrc: "mushroom.png",
        rarity: 1,
        chinaOnly: false,
        source: "Found on Astra (around giant mushrooms) and in Crown"
    },
    
    silverbass: {
        name: 'Серебристый окунь',
        imgSrc: "silverbass.png",
        rarity: 1,
        chinaOnly: false,
        source: 'Found in rivers'
    },
    
    homigrain: {
        name: 'Пшеница',
        imgSrc: "homigrain.png",
        rarity: 1,
        chinaOnly: false,
        source: 'Found on Astra (meadows) and Banges (meadows)'
    },
    
    gamemeat: {
        name: 'Мясо',
        imgSrc: "gamemeat.png",
        rarity: 1,
        chinaOnly: false,
        source: 'Obtained by hunting wild animals'
    },
    
    lettuce: {
        name: 'Латук',
        imgSrc: "lettuce.png",
        rarity: 1,
        chinaOnly: false,
        source: 'Found on Astra (meadows)'
    },
    
    saladdressing: {
        name: 'Салатная заправка',
        imgSrc: "saladdressing.png",
        rarity: 1,
        chinaOnly: false,
        source: 'Purchased at food vendor'
    },
    
    poultryegg: {
        name: 'Птичье яйцо',
        imgSrc: "poultryegg.png",
        rarity: 1,
        chinaOnly: false,
        source: 'Found in bird nests (high elevations)'
    },
    
    laver: {
        name: 'Водоросли',
        imgSrc: "laver.png",
        rarity: 2,
        chinaOnly: false,
        source: 'Found in Banges (North Sea Beach)'
    },
    
    milk: {
        name: 'Молоко',
        imgSrc: "milk.png",
        rarity: 1,
        chinaOnly: false,
        source: 'Purchased at food vendor'
    },
    
    poultrymeat: {
        name: 'Мясо птицы',
        imgSrc: "poultrymeat.png",
        rarity: 1,
        chinaOnly: false,
        source: 'Obtained by hunting birds'
    },
    
    rice: {
        name: 'Рис',
        imgSrc: "rice.png",
        rarity: 1,
        chinaOnly: false,
        source: 'Purchased at food vendor'
    },
    
    thornmato: {
        name: 'Иглотомат',
        imgSrc: "thornmato.png",
        rarity: 2,
        chinaOnly: false,
        source: 'Found on Astra (around alpine shrubs) and in Navia (around trees)'
    },
    
    conch: {
        name: 'Ракушка',
        imgSrc: "conch.png",
        rarity: 2,
        chinaOnly: false,
        source: 'Found in Bangis (South Sea Beach) and Navia (beach)'
    },
    
    potato: {
        name: 'Томат',
        imgSrc: "potato.png",
        rarity: 2,
        chinaOnly: false,
        source: 'Found in Banges (around bushes)'
    },
    
    fallenfruit: {
        name: 'Упавший фрукт',
        imgSrc: "fallenfruit.png",
        rarity: 2,
        chinaOnly: false,
        source: 'Found on Astra (around trees) and in Banges (around trees)'
    },
    
    honey: {
        name: 'Мёд',
        imgSrc: "honey.png",
        rarity: 2,
        chinaOnly: false,
        source: 'Obtained from hives and bees'
    },
    
    ghostmushroom: {
        name: 'Призрачный гриб',
        imgSrc: "ghostmushroom.png",
        rarity: 2,
        chinaOnly: false,
        source: 'Found on Astra (Keel, Graveyard)'
    },
    
    broccoli: {
        name: 'Брокколи',
        imgSrc: "broccoli.png",
        rarity: 2,
        chinaOnly: false,
        source: 'Found on Astra (meadows)'
    },
    
    dandelionseed: {
        name: 'Семена одуванчика',
        imgSrc: "dandelionseed.png",
        rarity: 1,
        chinaOnly: false,
        source: 'Obtained from dandelion pom-poms'
    },
    
    darbyssturgeon: {
        name: "Осётр Дарби",
        imgSrc: "darbyssturgeon.png",
        rarity: 2,
        chinaOnly: false,
        source: 'Found in rivers of Astra, Navia, and Warren'
    },
    
    brownrice: {
        name: 'Коричневый рис',
        imgSrc: "brownrice.png",
        rarity: 2,
        chinaOnly: false,
        source: 'Found in Navia (meadows)'
    },
    
    firecap: {
        name: 'Огнегриб',
        imgSrc: "firecap.png",
        rarity: 2,
        chinaOnly: false,
        source: 'Found in Crown'
    },
    
    blackmoss: {
        name: 'Чёрный мох',
        imgSrc: "blackmoss.png",
        rarity: 2,
        chinaOnly: false,
        source: 'Found in Crown'
    },
    
    scallop: {
        name: 'Гребешок',
        imgSrc: "scallop.png",
        rarity: 3,
        chinaOnly: false,
        source: 'Found in Banges (South Sea Beach)'
    },
    
    rearhock: {
        name: 'Задняя нога',
        imgSrc: "rearhock.png",
        rarity: 3,
        chinaOnly: false,
        source: 'Obtained by hunting rabbits, mountain hares, boars, bears, wolves, and honey badgers'
    },
    
    portunid: {
        name: 'Портунид',
        imgSrc: "portunid.png",
        rarity: 3,
        chinaOnly: false,
        source: 'Found on the beaches of Astra, Banges, and Crown'
    },
    
    strawberry: {
        name: 'Клубника',
        imgSrc: "strawberry.png",
        rarity: 3,
        chinaOnly: false,
        source: 'Found in Navia (around bushes)'
    },
    
    smallblueberryjar: {
        name: 'Баночка черники',
        imgSrc: "smallblueberryjar.png",
        rarity: 3,
        chinaOnly: false,
        source: 'Obtained from defeating the Sons of Aida (robotic enemies)'
    },
    
    carbonatedwater: {
        name: 'Газированная вода',
        imgSrc: "carbonatedwater.png",
        rarity: 1,
        chinaOnly: false,
        source: 'Purchased at food vendor'
    },
    
    seaurchin: {
        name: 'Морской ёж',
        imgSrc: "seaurchin.png",
        rarity: 3,
        chinaOnly: false,
        source: 'Found in Banges (North Sea Beach) and Crown (beach)'
    },
    
    fiddlehead: {
        name: 'Рахис',
        imgSrc: "fiddlehead.png",
        rarity: 3,
        chinaOnly: false,
        source: 'Found near the Banges factory'
    },
    
    cocoabeans: {
        name: 'Какао бобы',
        imgSrc: "cocoabeans.png",
        rarity: 3,
        chinaOnly: false,
        source: 'Found in Navia (Minyu Island)'
    },
    
    balloonfruit: {
        name: 'Шарообразный фрукт',
        imgSrc: "balloonfruit.png",
        rarity: 3,
        chinaOnly: false,
        source: 'Found on Astra and in Navia'
    },
    
    electriceel: {
        name: 'Электрический угорь',
        imgSrc: "electriceel.png",
        rarity: 3,
        chinaOnly: false,
        source: 'Found in the rivers of Banges, Navia, and Warren'
    },
    
    hermitcrab: {
        name: 'Рак-отшельник',
        imgSrc: "hermitcrab.png",
        rarity: 3,
        chinaOnly: false,
        source: 'Found on the beaches of Banges, Navia, and Crown'
    },
    
    phosphogranate: {
        name: 'Фосфогранат',
        imgSrc: "phosphogranate.png",
        rarity: 3,
        chinaOnly: false,
        source: 'Found in Navia (around rocks)'
    },
    
    firedragonfruit: {
        name: 'Питахайя',
        imgSrc: "firedragonfruit.png",
        rarity: 3,
        chinaOnly: false,
        source: 'Found near rivers in Navia and Crown'
    },
    
    barnacle: {
        name: 'Моллюск',
        imgSrc: "barnacle.png",
        rarity: 3,
        chinaOnly: false,
        source: 'Found near the sea in Warren'
    },
    
    onion: {
        name: 'Лук',
        imgSrc: "onion.png",
        rarity: 3,
        chinaOnly: false,
        source: 'Purchased at food vendor'
    },
    
    snowazalea: {
        name: 'Снежная азалия',
        imgSrc: "snowazalea.png",
        rarity: 3,
        chinaOnly: false,
        source: 'Found in Warren'
    },
    
    pinecone: {
        name: 'Сосновая шишка',
        imgSrc: "pinecone.png",
        rarity: 3,
        chinaOnly: false,
        source: 'Found in Warren (around pine trees)'
    },
    
    caviar: {
        name: 'Икра',
        imgSrc: "caviar.png",
        rarity: 3,
        chinaOnly: false,
        source: 'Obtained from raider camp enemies'
    },
    
    hazelnut: {
        name: 'Фундук',
        imgSrc: "hazelnut.png",
        rarity: 4,
        chinaOnly: false,
        source: 'Found in Navia'
    },
    
    purpleyam: {
        name: "Фиолетовый ямс",
        imgSrc: "purpleyam.png",
        rarity: 4,
        chinaOnly: false,
        source: 'Found in Warren'
    },
    
    snowlotus: {
        name: 'Снежный лотос',
        imgSrc: "snowlotus.png",
        rarity: 4,
        chinaOnly: false,
        source: 'Found in Warren'
    },
    
    blacktruffle: {
        name: 'Чёрный трюфель',
        imgSrc: "blacktruffle.png",
        rarity: 4,
        chinaOnly: false,
        source: 'Found in Warren'
    },
    
    caterpillarfungus: {
        name: 'Гусеничный гриб',
        imgSrc: "caterpillarfungus.png",
        rarity: 4,
        chinaOnly: false,
        source: 'Found in Warren'
    },
    
    primecut: {
        name: 'Премиальная вырезка',
        imgSrc: "primecut.png",
        rarity: 4,
        chinaOnly: false,
        source: 'Obtained by hunting wild animals'
    },
    
    fattycut: {
        name: 'Жировая вырезка',
        imgSrc: "fattycut.png",
        rarity: 4,
        chinaOnly: false,
        source: 'Obtained by hunting wild animals'
    },
    
    lakebass: {
        name: 'Озёрный лосось',
        imgSrc: "lakebass.png",
        rarity: 4,
        chinaOnly: false,
        source: 'Found in rivers in Crown and Warren'
    },
    
    carrionsnail: {
        name: 'Улитка-каррион',
        imgSrc: "carrionsnail.png",
        rarity: 4,
        chinaOnly: false,
        source: 'Found in Navia (beach)'
    }
    
}

export default ingredients;
