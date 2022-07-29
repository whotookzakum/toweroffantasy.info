import i from "./ingredients";

const recipes = [
    {
        name: 'Жареные грибы',
        imgSrc: "friedmushrooms.png",
        chinaOnly: false,
        rarity: 1,
        stars: 1,
        effect: 
            `Восстанавливает **5** сытости  
            Восстанавливает **10% + 1500** здоровья`,
        ingredients: [
            { item: i.mushroom, amount: 2 }
        ]
    },
    {
        name: 'Рыба на гриле',
        imgSrc: "crispygrilledfish.png",
        chinaOnly: false,
        rarity: 1,
        stars: 1,
        effect: 'Восстанавливает **10** сытости',
        ingredients: [
            { item: i.silverbass, amount: 1 }
        ]
    },
    {
        name: 'Цельнозерновой хлеб',
        imgSrc: "wholegrainbread.png",
        chinaOnly: false,
        rarity: 1,
        stars: 1,
        effect: 'Восстанавливает **10** сытости',
        ingredients: [
            { item: i.homigrain, amount: 2 }
        ]
    },
    {
        name: 'Обжигающее мясо',
        imgSrc: "sizzlingmeat.png",
        chinaOnly: false,
        rarity: 1,
        stars: 1,
        effect: 'Восстанавливает **10** сытости',
        ingredients: [
            { item: i.gamemeat, amount: 2 }
        ]
    },
    {
        name: 'Салат',
        imgSrc: "lettucesalad.png",
        chinaOnly: false,
        rarity: 1,
        stars: 1,
        effect: 
            `Восстанавливает **5** сытости  
            Восстанавливает **10% + 1500** здоровья`,
        ingredients: [
            { item: i.lettuce, amount: 2 },
            { item: i.saladdressing, amount: 1 }
        ]
    },
    {
        name: 'Яичница',
        imgSrc: "friedegg.png",
        chinaOnly: false,
        rarity: 1,
        stars: 1,
        effect: 
            `Восстанавливает **5** сытости  
            Восстанавливает **10% + 1500** здоровья`,
        ingredients: [
            { item: i.poultryegg, amount: 2 }
        ]
    },
    {
        name: 'Запечённый песчаный лук',
        imgSrc: "grilledsandonion.png",
        chinaOnly: true,
        rarity: 1,
        stars: 1,
        effect: 'Восстанавливает **10** сытости',
        ingredients: [
            { item: i.sandonion, amount: 2 }
        ]
    },
    {
        name: 'Особый кактусовый коктейл',
        imgSrc: "specialcactusdrink.png",
        chinaOnly: true,
        rarity: 1,
        stars: 1,
        effect: 
            `Восстанавливает **5** сытости
            Восстанавливает **10% + 1500** здоровья`,
        ingredients: [
            { item: i.cactusball, amount: 2 }
        ]
    },
    {
        name: 'Суп из водорослей и яиц',
        imgSrc: "seaweedandeggsoup.png",
        chinaOnly: false,
        rarity: 2,
        stars: 1,
        effect: 
            `Восстанавливает **7** сытости
            Восстанавливает **12% + 3300** здоровья`,
        ingredients: [
            { item: i.laver, amount: 2 },
            { item: i.poultryegg, amount: 1 }
        ]
    },
    {
        name: 'Сухой завтрак',
        imgSrc: "breakfastcereal.png",
        chinaOnly: false,
        rarity: 2,
        stars: 1,
        effect: 'Восстанавливает **14** сытости',
        ingredients: [
            { item: i.homigrain, amount: 2 },
            { item: i.milk, amount: 1 }
        ]
    },
    {
        name: 'Хрустящий куриный бургер',
        imgSrc: "crispychickenburger.png",
        chinaOnly: false,
        rarity: 2,
        stars: 1,
        effect: 
            `Восстанавливает **7** сытости  
            Восстанавливает **12% + 3300** здоровья`,
        ingredients: [
            { item: i.homigrain, amount: 1 },
            { item: i.poultrymeat, amount: 1 },
            { item: i.lettuce, amount: 1 }
        ]
    },
    {
        name: 'Рис с жареным яйцом',
        imgSrc: "eggfriedrice.png",
        chinaOnly: false,
        rarity: 2,
        stars: 1,
        effect: 'Восстанавливает **14** сытости',
        ingredients: [
            { item: i.rice, amount: 2 },
            { item: i.poultryegg, amount: 1 }
        ]
    },
    {
        name: 'Томаты с яичным желтком',
        imgSrc: "goldeneggandtomato.png",
        chinaOnly: false,
        rarity: 2,
        stars: 1,
        effect: 
            `Восстанавливает **7** сытости  
            Восстанавливает **12% + 3300** здоровья`,
        ingredients: [
            { item: i.thornmato, amount: 2 },
            { item: i.poultryegg, amount: 2 }
        ]
    },
    {
        name: 'Грибной суп',
        imgSrc: "mushroomsoup.png",
        chinaOnly: false,
        rarity: 2,
        stars: 1,
        effect: 
            `Восстанавливает **7** сытости  
            Восстанавливает **12% + 3300** здоровья`,
        ingredients: [
            { item: i.mushroom, amount: 2 },
            { item: i.lettuce, amount: 2 }
        ]
    },
    {
        name: 'Раковина на пару',
        imgSrc: "steamedconch.png",
        chinaOnly: false,
        rarity: 2,
        stars: 1,
        effect: 
            `Восстанавливает **7** сытости  
            Восстанавливает **12% + 3300** здоровья`,
        ingredients: [
            { item: i.conch, amount: 2 },
            { item: i.lettuce, amount: 1 }
        ]
    },
    {
        name: 'Рагу',
        imgSrc: "meatandpotatostew.png",
        chinaOnly: false,
        rarity: 2,
        stars: 1,
        effect: 'Восстанавливает **14** сытости',
        ingredients: [
            { item: i.potato, amount: 1 },
            { item: i.gamemeat, amount: 1 }
        ]
    },
    {
        name: 'Картофель фри',
        imgSrc: "fries.png",
        chinaOnly: false,
        rarity: 2,
        stars: 1,
        effect: 'Восстанавливает **14** сытости',
        ingredients: [
            { item: i.potato, amount: 1 },
            { item: i.saladdressing, amount: 1 }
        ]
    },
    {
        name: 'Овощной салат',
        imgSrc: "vegetablesalad.png",
        chinaOnly: false,
        rarity: 2,
        stars: 1,
        effect: 
            `Восстанавливает **7** сытости  
            Восстанавливает **12% + 3300** здоровья`,
        ingredients: [
            { item: i.fallenfruit, amount: 1 },
            { item: i.thornmato, amount: 1 },
            { item: i.lettuce, amount: 1 },
            { item: i.saladdressing, amount: 1 }
        ]
    },
    {
        name: 'Жареная курочка',
        imgSrc: "friedchicken.png",
        chinaOnly: false,
        rarity: 2,
        stars: 1,
        effect: 
            `Восстанавливает **7** сытости  
            Восстанавливает **12% + 3300** здоровья`,
        ingredients: [
            { item: i.poultrymeat, amount: 2 },
            { item: i.homigrain, amount: 1 }
        ]
    },
    {
        name: 'Медово-фруктовый сок',
        imgSrc: "honeyedfruitjuice.png",
        chinaOnly: false,
        rarity: 2,
        stars: 1,
        effect: 
            `Восстанавливает **300** выносливости  
            Восстанавливает **12% + 3300** здоровья`,
        ingredients: [
            { item: i.fallenfruit, amount: 2 },
            { item: i.honey, amount: 1 },
            { item: i.carbonatedwater, amount: 1 }
        ]
    },
    {
        name: 'Ледяная орхидея',
        imgSrc: "icedorchidsurprise.png",
        chinaOnly: false,
        rarity: 2,
        stars: 1,
        effect: 
            `Восстанавливает **300** выносливости  
            Восстанавливает **12% + 3300** здоровья`,
        ingredients: [
            { item: i.ghostmushroom, amount: 2 },
            { item: i.milk, amount: 1 },
            { item: i.carbonatedwater, amount: 1 }
        ]
    },
    {
        name: 'Жареная брокколи',
        imgSrc: "stir-friedbroccoli.png",
        chinaOnly: false,
        rarity: 2,
        stars: 1,
        effect: 'Восстанавливает **14** сытости',
        ingredients: [
            { item: i.broccoli, amount: 2 }
        ]
    },
    {
        name: 'Пирожки с мясом',
        imgSrc: "meatbun.png",
        chinaOnly: false,
        rarity: 2,
        stars: 1,
        effect: 'Восстанавливает **14** сытости',
        ingredients: [
            { item: i.homigrain, amount: 2 },
            { item: i.gamemeat, amount: 1 }
        ]
    },
    {
        name: 'Sliced Fish with Mushroom',
        imgSrc: "slicedfishwithmushroom.png",
        chinaOnly: false,
        rarity: 2,
        stars: 1,
        effect: 
            `Восстанавливает **7** сытости  
            Восстанавливает **12% + 3300** здоровья`,
        ingredients: [
            { item: i.mushroom, amount: 2 },
            { item: i.silverbass, amount: 1 }
        ]
    },
    {
        name: 'Грибной суп с одуванчиками',
        imgSrc: "dandelionmushroomsoup.png",
        chinaOnly: false,
        rarity: 2,
        stars: 1,
        effect: 
            `Восстанавливает **7** сытости  
            Восстанавливает **12% + 3300** здоровья`,
        ingredients: [
            { item: i.dandelionseed, amount: 1 },
            { item: i.mushroom, amount: 2 }
        ]
    },
    {
        name: 'Прибой и дёрн',
        imgSrc: "surfandturf.png",
        chinaOnly: false,
        rarity: 2,
        stars: 2,
        effect: 
            `Восстанавливает **8** сытости  
            Восстанавливает **13% + 10000** здоровья`,
        ingredients: [
            { item: i.darbyssturgeon, amount: 1 },
            { item: i.poultryegg, amount: 2 }
        ]
    },
    {
        name: 'Хлеб из красной пшеницы',
        imgSrc: "redwheatbread.png",
        chinaOnly: false,
        rarity: 2,
        stars: 2,
        effect: 'Восстанавливает **16** сытости',
        ingredients: [
            { item: i.brownrice, amount: 2 }
        ]
    },
    {
        name: 'Суп из огнегрибов',
        imgSrc: "firecapmushroomsoup.png",
        chinaOnly: false,
        rarity: 2,
        stars: 2,
        effect: 
            `Восстанавливает **400** выносливости  
            Восстанавливает **13% + 10000** здоровья`,
        ingredients: [
            { item: i.firecap, amount: 2 },
            { item: i.lettuce, amount: 2 }
        ]
    },
    {
        name: 'Суп из чёрного мха',
        imgSrc: "blackmosssoup.png",
        chinaOnly: false,
        rarity: 2,
        stars: 2,
        effect: 
            `Восстанавливает **8** сытости  
            Восстанавливает **13% + 10000** здоровья`,
        ingredients: [
            { item: i.blackmoss, amount: 2 },
            { item: i.lettuce, amount: 2 }
        ]
    },
    {
        name: 'Борщ',
        imgSrc: "beetrootsoup.png",
        chinaOnly: true,
        rarity: 2,
        stars: 1,
        effect: 
            `Восстанавливает **7** сытости  
            Восстанавливает **12% + 3300** здоровья`,
        ingredients: [
            { item: i.beetroot, amount: 2 }
        ]
    },
    {
        name: 'Жареный тофу',
        imgSrc: "deep-friedtofu.png",
        chinaOnly: true,
        rarity: 2,
        stars: 1,
        effect: 'Восстанавливает **14** сытости',
        ingredients: [
            { item: i.soybeans, amount: 2 }
        ]
    },
    {
        name: 'Солёная кукуруза',
        imgSrc: "saltedcorn.png",
        chinaOnly: true,
        rarity: 2,
        stars: 1,
        effect: 'Восстанавливает **14** сытости',
        ingredients: [
            { item: i.corn, amount: 2 }
        ]
    },
    {
        name: 'Жареный хвост ящерицы',
        imgSrc: "grilledlizardtail.png",
        chinaOnly: true,
        rarity: 2,
        stars: 1,
        effect: 
            `Восстанавливает **7** сытости  
            Восстанавливает **12% + 3300** здоровья`,
        ingredients: [
            { item: i.fleshytail, amount: 2 }
        ]
    },
    {
        name: 'Кремовый суп из кукурузы',
        imgSrc: "creamycornsoup.png",
        chinaOnly: true,
        rarity: 2,
        stars: 1,
        effect: 
            `Восстанавливает **7** сытости  
            Восстанавливает **12% + 3300** здоровья`,
        ingredients: [
            { item: i.corn, amount: 2 },
            { item: i.milk, amount: 1 },
            { item: i.mushroom, amount: 1 }
        ]
    },
    {
        name: 'Суп из морепродуктов',
        imgSrc: "seafoodsoup.png",
        chinaOnly: false,
        rarity: 3,
        stars: 1,
        effect: 
            `Восстанавливает **10** сытости  
            **АТК Холодом +1%  
            АТК Холодом +45**  
            Длится **900** секунд`,
        ingredients: [
            { item: i.conch, amount: 3 },
            { item: i.scallop, amount: 2 },
            { item: i.lettuce, amount: 1 }
        ]
    },
    {
        name: 'Пряный бургер',
        imgSrc: "spicyburger.png",
        chinaOnly: false,
        rarity: 3,
        stars: 1,
        effect: 
            `Восстанавливает **10** сытости  
            **Физическое АТК +1%  
            Физическое АТК +45**  
            Длится **900** секунд`,
        ingredients: [
            { item: i.homigrain, amount: 3 },
            { item: i.rearhock, amount: 2 },
            { item: i.lettuce, amount: 1 }
        ]
    },
    {
        name: 'Краб на пару',
        imgSrc: "steamedcrab.png",
        chinaOnly: false,
        rarity: 3,
        stars: 1,
        effect: 
            `Восстанавливает **10** сытости  
            Recovers **15% + 20000** здоровья`,
        ingredients: [
            { item: i.portunid, amount: 2 },
            { item: i.lettuce, amount: 2 }
        ]
    },
    {
        name: 'Клубничная содовая со льдом',
        imgSrc: "icedstrawberrysoda.png",
        chinaOnly: false,
        rarity: 3,
        stars: 1,
        effect: 
            `Восстанавливает **10** сытости  
            **Сопротивление Огню +10%  
            Сопротивление Огню +170**  
            Длится **900** секунд`,
        ingredients: [
            { item: i.strawberry, amount: 2 },
            { item: i.honey, amount: 2 },
            { item: i.carbonatedwater, amount: 1 }
        ]
    },
    {
        name: 'Содовая «Грозовая туча»',
        imgSrc: "thundercloudblueberrysoda.png",
        chinaOnly: false,
        rarity: 3,
        stars: 1,
        effect: 
            `Восстанавливает **10** сытости  
            **Сопротивление Напряжению +10%  
            Сопротивление Напряжению +170**  
            Длится **900** sec`,
        ingredients: [
            { item: i.smallblueberryjar, amount: 1 },
            { item: i.honey, amount: 2 },
            { item: i.carbonatedwater, amount: 1 }
        ]
    },
    {
        name: 'Энергетический салат',
        imgSrc: "simplepowersalad.png",
        chinaOnly: false,
        rarity: 3,
        stars: 1,
        effect: 
            `Восстанавливает **10** сытости  
            **Физическое сопротивление +10%  
            Физическое сопротивление +170**  
            Длится **900** секунд`,
        ingredients: [
            { item: i.broccoli, amount: 1 },
            { item: i.thornmato, amount: 1 },
            { item: i.lettuce, amount: 1 },
            { item: i.poultryegg, amount: 1 },
            { item: i.saladdressing, amount: 1 }
        ]
    },
    {
        name: 'Морской ёж с яйцом на пару',
        imgSrc: "steamedeggwithseaurchin.png",
        chinaOnly: false,
        rarity: 3,
        stars: 1,
        effect: 
            `Восстанавливает **10** сытости  
            Recovers **15% + 20000** здоровья`,
        ingredients: [
            { item: i.seaurchin, amount: 2 },
            { item: i.poultryegg, amount: 2 }
        ]
    },
    {
        name: 'Тост с джемом',
        imgSrc: "jamontoast.png",
        chinaOnly: false,
        rarity: 3,
        stars: 1,
        effect: 
            `Восстанавливает **10** сытости  
            **Урон Напряжением +1%  
            Урон Напряжением +45**  
            Длится **900** секунд`,
        ingredients: [
            { item: i.smallblueberryjar, amount: 1 },
            { item: i.strawberry, amount: 1 },
            { item: i.homigrain, amount: 3 }
        ]
    },
    {
        name: 'Паста с яйцом и томатами',
        imgSrc: "tomatoandfriedeggpasta.png",
        chinaOnly: false,
        rarity: 3,
        stars: 1,
        effect: 
            `Восстанавливает **10** сытости  
            **АТК Огнём +1%  
            АТК Огнём +45**  
            Длится **900** секунд`,
        ingredients: [
            { item: i.thornmato, amount: 4 },
            { item: i.homigrain, amount: 3 },
            { item: i.poultryegg, amount: 1 }
        ]
    },
    {
        name: 'Фруктовый торт',
        imgSrc: "fruitcake.png",
        chinaOnly: false,
        rarity: 3,
        stars: 1,
        effect: 
            `Восстанавливает **10** сытости  
            Восстанавливает **15% + 20000** здоровья`,
        ingredients: [
            { item: i.strawberry, amount: 2 },
            { item: i.homigrain, amount: 1 },
            { item: i.fallenfruit, amount: 1 },
            { item: i.poultryegg, amount: 1 }
        ]
    },
    {
        name: 'Вареные гребешки',
        imgSrc: "boiledscallops.png",
        chinaOnly: false,
        rarity: 3,
        stars: 1,
        effect: 
            `Восстанавливает **10** сытости  
            Восстанавливает **15% + 20000** Здоровья`,
        ingredients: [
            { item: i.scallop, amount: 2 },
            { item: i.lettuce, amount: 3 }
        ]
    },
    {
        name: 'Жареная ножка',
        imgSrc: "roastrump.png",
        chinaOnly: false,
        rarity: 3,
        stars: 1,
        effect: 
            `Восстанавливает **500** выносливости  
            Восстанавливает **15% + 20000** здоровья`,
        ingredients: [
            { item: i.rearhock, amount: 2 }
        ]
    },
    {
        name: 'Рахисовый пирог',
        imgSrc: "fiddleheadpie.png",
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: 
            `Восстанавливает **10** сытости  
            Восстанавливает **16% + 34000** здоровья`,
        ingredients: [
            { item: i.fiddlehead, amount: 2 },
            { item: i.brownrice, amount: 2 }
        ]
    },
    {
        name: 'Шоколадный хлеб',
        imgSrc: "chocolatebread.png",
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: 
            `Восстанавливает **10** сытости  
            Восстанавливает **16% + 34000** здоровья`,
        ingredients: [
            { item: i.cocoabeans, amount: 2 },
            { item: i.brownrice, amount: 2 }
        ]
    },
    {
        name: 'Салат из шарообразных фруктов',
        imgSrc: "balloonfruitsalad.png",
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: 
            `Восстанавливает **10** сытости  
            Восстанавливает **16% + 34000** здоровья`,
        ingredients: [
            { item: i.balloonfruit, amount: 2 },
            { item: i.thornmato, amount: 2 },
            { item: i.saladdressing, amount: 1 }
        ]
    },
    {
        name: 'Рахисовый суп',
        imgSrc: "fiddleheadsoup.png",
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: 
            `Восстанавливает **10** сытости  
            Восстанавливает **16% + 34000** здоровья`,
        ingredients: [
            { item: i.fiddlehead, amount: 2 },
            { item: i.lettuce, amount: 4 }
        ]
    },
    {
        name: 'Пряный угорь',
        imgSrc: "spicyeel.png",
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: 
            `Восстанавливает **10** сытости  
            **Сопротивление Напряжению +10%  
            Сопротивление Напряжению +290**  
            Длится **900** секунд`,
        ingredients: [
            { item: i.electriceel, amount: 1 }
        ]
    },
    {
        name: 'Грибной суп с угрём',
        imgSrc: "eelandmushroomsoup.png",
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: 
            `Восстанавливает **10** сытости  
            **АТК Напряжением +1%  
            АТК Напряжением +80**  
            Длится **900** секунд`,
        ingredients: [
            { item: i.electriceel, amount: 1 },
            { item: i.firecap, amount: 2 }
        ]
    },
    {
        name: 'Крабовый суп',
        imgSrc: "seacrabsoup.png",
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: 
            `Восстанавливает **10** сытости  
            **Сопротивление Огню +10%  
            Сопротивление Огню +290**  
            Длится **900** секунд`,
        ingredients: [
            { item: i.hermitcrab, amount: 2 },
            { item: i.mushroom, amount: 4 }
        ]
    },
    {
        name: 'Сладкий гранатовый сок',
        imgSrc: "sweetpomegranatejuice.png",
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: 
            `Восстанавливает **600** выносливости  
            Восстанавливает **16% + 34000** здоровья`,
        ingredients: [
            { item: i.phosphogranate, amount: 2 },
            { item: i.honey, amount: 2 },
            { item: i.carbonatedwater, amount: 1 }
        ]
    },
    {
        name: 'Шоколадное молоко',
        imgSrc: "cocoamilk.png",
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: 
            `Восстанавливает **10** сытости  
            **Сопротивление Холоду +10%  
            Сопротивление Холоду +290**  
            Длится **900** секунд`,
        ingredients: [
            { item: i.cocoabeans, amount: 2 },
            { item: i.honey, amount: 2 },
            { item: i.milk, amount: 1 }
        ]
    },
    {
        name: 'Чай из питахайи',
        imgSrc: "firedragonfruittea.png",
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: 
            `Восстанавливает **10** сытости  
            **АТК Огнём +1%  
            АТК Огнём +80**  
            Длится **900** секунд`,
        ingredients: [
            { item: i.firedragonfruit, amount: 2 },
            { item: i.honey, amount: 2 }
        ]
    },
    {
        name: 'Рагу из моллюсков',
        imgSrc: "barnaclestew.png",
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: 
            `Восстанавливает **10** сытости  
            **Физическое Сопротивление +10%  
            Физическое Сопротивление +290**  
            Длится **900** секунд`,
        ingredients: [
            { item: i.barnacle, amount: 2 },
            { item: i.lettuce, amount: 4 }
        ]
    },
    {
        name: 'Пицца с морепродуктами',
        imgSrc: "barnacleseafoodpizza.png",
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: 
            `Восстанавливает **10** сытости  
            Восстанавливает **16% + 34000** здоровья`,
        ingredients: [
            { item: i.barnacle, amount: 1 },
            { item: i.brownrice, amount: 2 },
            { item: i.onion, amount: 1 }
        ]
    },
    {
        name: 'Чай из снежной азалии',
        imgSrc: "snowazaleatea.png",
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: 
            `Восстанавливает **10** сытости  
            **АТК Холодом +1%  
            АТК Холодом +80**  
            Длится **900** секунд`,
        ingredients: [
            { item: i.snowazalea, amount: 1 },
            { item: i.milk, amount: 1 },
            { item: i.honey, amount: 2 }
        ]
    },
    {
        name: 'Сосновое какао',
        imgSrc: "pinecocoa.png",
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: 
            `Восстанавливает **10** сытости  
            Восстанавливает **16% + 34000** здоровья`,
        ingredients: [
            { item: i.pinecone, amount: 1 },
            { item: i.cocoabeans, amount: 1 },
            { item: i.milk, amount: 2 }
        ]
    },
    {
        name: 'Суши с икрой',
        imgSrc: "caviarsushi.png",
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: 
            `Восстанавливает **10** сытости  
            Восстанавливает **16% + 34000** здоровья`,
        ingredients: [
            { item: i.caviar, amount: 1 },
            { item: i.rice, amount: 2 },
            { item: i.laver, amount: 2 }
        ]
    },
    {
        name: 'Картофельные шарики с икрой',
        imgSrc: "caviarpotatoballs.png",
        chinaOnly: false,
        rarity: 3,
        stars: 2,
        effect: 
            `Восстанавливает **10** сытости  
            **Физическое АТК +1%  
            Физическое АТК +80**  
            Длится **900** секунд`,
        ingredients: [
            { item: i.caviar, amount: 1 },
            { item: i.potato, amount: 2 }
        ]
    },
    {
        name: 'Жареные перцы',
        imgSrc: "stir-friedpeppers.png",
        chinaOnly: true,
        rarity: 3,
        stars: 1,
        effect: 
            `Восстанавливает **10** сытости  
            **Сопротивление Холоду +10%  
            Сопротивление Холоду 170**  
            Длится **900** секунд`,
        ingredients: [
            { item: i.pepper, amount: 2 },
            { item: i.onion, amount: 2 }
        ]
    },
    {
        name: 'Салат из дыни',
        imgSrc: "melonsalad.png",
        chinaOnly: true,
        rarity: 3,
        stars: 1,
        effect: 
            `Восстанавливает **10** сытости  
            **Сопротивление Огню +10%  
            Сопротивление Огню 170**  
            Длится **900** секунд`,
        ingredients: [
            { item: i.desertmelon, amount: 2 },
            { item: i.saladdressing, amount: 2 }
        ]
    },
    {
        name: 'Тыквенная каша',
        imgSrc: "pumpkinporridge.png",
        chinaOnly: true,
        rarity: 3,
        stars: 1,
        effect: 
            `Восстанавливает **10** сытости  
            Восстанавливает **15% + 20000** здоровья`,
        ingredients: [
            { item: i.pumpkin, amount: 2 },
            { item: i.rice, amount: 3 }
        ]
    },
    {
        name: 'Рёбрышки на гриле',
        imgSrc: "grilledribs.png",
        chinaOnly: true,
        rarity: 3,
        stars: 1,
        effect: 
            `Восстанавливает **10** сытости  
            Восстанавливает **15% + 20000** здоровья`,
        ingredients: [
            { item: i.ribs, amount: 1 },
            { item: i.honey, amount: 2 }
        ]
    },
    {
        name: 'Шоколадное соевое молоко',
        imgSrc: "chocolatesoymilk.png",
        chinaOnly: true,
        rarity: 3,
        stars: 1,
        effect: 
            `Восстанавливает **500** выносливости  
            Восстанавливает **15% + 20000** здоровья`,
        ingredients: [
            { item: i.cocoabeans, amount: 2 },
            { item: i.soybeans, amount: 1 },
            { item: i.honey, amount: 1 }
        ]
    },
    {
        name: 'Свекольный папоротник',
        imgSrc: "beetrootfern.png",
        chinaOnly: true,
        rarity: 3,
        stars: 1,
        effect: 
            `Восстанавливает **10** сытости 
            Восстанавливает **15% + 20000** здоровья`,
        ingredients: [
            { item: i.fiddlehead, amount: 2 },
            { item: i.beetroot, amount: 2 }
        ]
    },
    {
        name: 'Медовый хлеб с дыней',
        imgSrc: "honeydewmelonbread.png",
        chinaOnly: true,
        rarity: 3,
        stars: 1,
        effect: 
            `Восстанавливает **10** сытости  
            **АТК Холодом +1%  
            АТК Холодом 45**  
            Длится **900** секунд`,
        ingredients: [
            { item: i.desertmelon, amount: 2 },
            { item: i.honey, amount: 1 },
            { item: i.homigrain, amount: 2 }
        ]
    },
    {
        name: 'Каша из разных злаков',
        imgSrc: "mixedgrainporridge.png",
        chinaOnly: true,
        rarity: 3,
        stars: 1,
        effect: 
            `Восстанавливает **500** выносливости 
            Восстанавливает **15% + 20000** здоровья`,
        ingredients: [
            { item: i.pumpkin, amount: 2 },
            { item: i.corn, amount: 1 },
            { item: i.rice, amount: 2 }
        ]
    },
    {
        name: 'Пирожки с морепродуктами и кукурузой',
        imgSrc: "cornandseafoodpie.png",
        chinaOnly: true,
        rarity: 3,
        stars: 1,
        effect: 
            `Восстанавливает **10** сытости 
            Восстанавливает **15% + 20000** здоровья`,
        ingredients: [
            { item: i.scallop, amount: 2 },
            { item: i.corn, amount: 1 },
            { item: i.homigrain, amount: 2 }
        ]
    },
    {
        name: 'Тыква на пару',
        imgSrc: "steamedpumpkin.png",
        chinaOnly: true,
        rarity: 3,
        stars: 1,
        effect: 
            `Восстанавливает **10** сытости 
            Восстанавливает **15% + 20000** здоровья`,
        ingredients: [
            { item: i.pumpkin, amount: 2 },
            { item: i.homigrain, amount: 3 }
        ]
    },
    {
        name: 'Острый жареный рис',
        imgSrc: "spicyfriedrice.png",
        chinaOnly: true,
        rarity: 3,
        stars: 1,
        effect: 
            `Восстанавливает **10** сытости  
            **АТК Огнём +1%  
            АТК Огнём 45**  
            Длится **900** секунл`,
        ingredients: [
            { item: i.pepper, amount: 1 },
            { item: i.fleshytail, amount: 1 },
            { item: i.poultryegg, amount: 1 },
            { item: i.rice, amount: 2 }
        ]
    },
    {
        name: 'Жареные устрицы',
        imgSrc: "grilledoysters.png",
        chinaOnly: true,
        rarity: 3,
        stars: 2,
        effect: 
            `Восстанавливает **10** сытости  
            Восстанавливает **16% + 34000** здоровья`,
        ingredients: [
            { item: i.oyster, amount: 2 }
        ]
    },
    {
        name: 'Холодные рыбные палочки',
        imgSrc: "coldfishleaf.png",
        chinaOnly: true,
        rarity: 3,
        stars: 2,
        effect: 
            `Восстанавливает **10** сытости  
            Восстанавливает **16% + 34000** здоровья`,
        ingredients: [
            { item: i.fishleaf, amount: 2 }
        ]
    },
    {
        name: 'Устричный суп с тофу',
        imgSrc: "oystertofusoup.png",
        chinaOnly: true,
        rarity: 3,
        stars: 2,
        effect: 
            `Восстанавливает **600** выносливости  
            Восстанавливает **16% + 34000** здоровья`,
        ingredients: [
            { item: i.oyster, amount: 2 },
            { item: i.soybeans, amount: 2 }
        ]
    },
    {
        name: 'Яичница-болтунья с рыбными палочками',
        imgSrc: "fishleafscrambledeggs.png",
        chinaOnly: true,
        rarity: 3,
        stars: 2,
        effect: 
            `Восстанавливает **600** выносливости  
            Восстанавливает **16% + 34000** здоровья`,
        ingredients: [
            { item: i.fishleaf, amount: 2 },
            { item: i.poultryegg, amount: 3 }
        ]
    },
    {
        name: 'Ореховый чай',
        imgSrc: "nuttea.png",
        chinaOnly: false,
        rarity: 4,
        stars: 2,
        effect: 
            `Восстанавливает **20** сытости  
            Восстанавливает **20% + 60000** здоровья`,
        ingredients: [
            { item: i.hazelnut, amount: 1 },
            { item: i.pinecone, amount: 2 },
            { item: i.honey, amount: 2 }
        ]
    },
    {
        name: "Пирожки с фиолетовым ямсом",
        imgSrc: "purpleyampie.png",
        chinaOnly: false,
        rarity: 4,
        stars: 2,
        effect: 
            `Восстанавливает **20** сытости  
            **АТК Напряжением +2%  
            АТК Напряжением +150**  
            Длится **1200** секунл`,
        ingredients: [
            { item: i.purpleyam, amount: 1 },
            { item: i.brownrice, amount: 3 }
        ]
    },
    {
        name: 'Суп из снежного лотуса',
        imgSrc: "snowlotussoup.png",
        chinaOnly: false,
        rarity: 4,
        stars: 2,
        effect: 
            `Восстанавливает **800** выносливости  
            Восстанавливает **20% + 60000** здоровья`,
        ingredients: [
            { item: i.snowlotus, amount: 1 },
            { item: i.honey, amount: 2 }
        ]
    },
    {
        name: 'Жареный рис с трюфелем',
        imgSrc: "trufflefriedrice.png",
        chinaOnly: false,
        rarity: 4,
        stars: 2,
        effect: 
            `Восстанавливает **20** сытости  
            **Физическое АТК +2%  
            Физическое АТК +150**  
            Длится **1200** секунд`,
        ingredients: [
            { item: i.blacktruffle, amount: 1 },
            { item: i.onion, amount: 1 },
            { item: i.rice, amount: 2 }
        ]
    },
    {
        name: 'Лапша с гусеничным грибом',
        imgSrc: "caterpillarfungusnoodles.png",
        chinaOnly: false,
        rarity: 4,
        stars: 2,
        effect: 
            `Восстанавливает **20** сытости  
            Восстанавливает **20% + 60000** здоровья`,
        ingredients: [
            { item: i.caterpillarfungus, amount: 1 },
            { item: i.brownrice, amount: 3 }
        ]
    },
    {
        name: 'Стейк на гриле',
        imgSrc: "grilledsteak.png",
        chinaOnly: false,
        rarity: 4,
        stars: 2,
        effect: 
            `Восстанавливает **20** сытости  
            **Сопротивление Напряжению +15%  
            Сопротивление Напряжению +675**  
            Длится **1200** секунд`,
        ingredients: [
            { item: i.primecut, amount: 1 }
        ]
    },
    {
        name: 'Стейк с соусом',
        imgSrc: "steakwithsauce.png",
        chinaOnly: false,
        rarity: 4,
        stars: 2,
        effect: 
            `Восстанавливает **20** сытости  
            **Урон Огнём +2%  
            Урон Огнём +150**  
            Длится **1200** секунд`,
        ingredients: [
            { item: i.primecut, amount: 1 },
            { item: i.firecap, amount: 3 }
        ]
    },
    {
        name: 'Тушёное мясо',
        imgSrc: "braisedmeat.png",
        chinaOnly: false,
        rarity: 4,
        stars: 2,
        effect: 
            `Восстанавливает **20** сытости  
            **Сопротивление Холоду +15%  
            Сопротивление Холоду +675**  
            Длится **1200** sec`,
        ingredients: [
            { item: i.fattycut, amount: 1 }
        ]
    },
    {
        name: 'Сочный бутерброд',
        imgSrc: "juicyblt.png",
        chinaOnly: false,
        rarity: 4,
        stars: 2,
        effect: 
            `Восстанавливает **20** сытости  
            **Сопротивление Огню +15%  
            Сопротивление Огню +675**  
            Длится **1200** секунд`,
        ingredients: [
            { item: i.fattycut, amount: 1 },
            { item: i.brownrice, amount: 2 },
            { item: i.poultryegg, amount: 2 }
        ]
    },
    {
        name: 'Сашими из лосося',
        imgSrc: "salmonsashimi.png",
        chinaOnly: false,
        rarity: 4,
        stars: 2,
        effect: 
            `Восстанавливает **20** сытости  
            **АТК Холодом +2%  
            АТК Холодом +150**  
            Длится **1200** секунд`,
        ingredients: [
            { item: i.lakebass, amount: 1 }
        ]
    },
    {
        name: 'Snail Baked Rice',
        imgSrc: "snailbakedrice.png",
        chinaOnly: false,
        rarity: 4,
        stars: 2,
        effect: 
            `Восстанавливает **20** сытости  
            **Физическое Сопротивление +15%  
            Физическое Сопротивление +675**  
            Длится **1200** секунд`,
        ingredients: [
            { item: i.carrionsnail, amount: 1 },
            { item: i.rice, amount: 2 }
        ]
    },
    {
        name: 'Йогурт из алоэ вера',
        imgSrc: "aloeverayogurt.png",
        chinaOnly: true,
        rarity: 4,
        stars: 2,
        effect: 
            `Восстанавливает **20** сытости  
            Восстанавливает **20% + 60000** здоровья`,
        ingredients: [
            { item: i.aloevera, amount: 1 },
            { item: i.honey, amount: 1 },
            { item: i.milk, amount: 2 }
        ]
    },
    {
        name: 'Чай из роз',
        imgSrc: "rosetea.png",
        chinaOnly: true,
        rarity: 4,
        stars: 2,
        effect: 
            `Восстанавливает **800** выносливости  
            Восстанавливает **20% + 60000** здоровья`,
        ingredients: [
            { item: i.rosepetals, amount: 1 },
            { item: i.honey, amount: 2 }
        ]
    },
    {
        name: 'Суп из редьки',
        imgSrc: "radishsoup.png",
        chinaOnly: true,
        rarity: 4,
        stars: 2,
        effect: 
            `Восстанавливает **800** выносливости  
            Восстанавливает **20% + 60000** здоровья`,
        ingredients: [
            { item: i.radish, amount: 1 }
        ]
    },
    {
        name: 'Хлеб из роз',
        imgSrc: "rosebread.png",
        chinaOnly: true,
        rarity: 4,
        stars: 2,
        effect: 
            `Восстанавливает **20** сытости  
            **Сопротивление Напряжению +15%**  
            **Сопротивление Напряжению +675**  
            Длится **1200** секунд`,
        ingredients: [
            { item: i.rosepetals, amount: 1 },
            { item: i.brownrice, amount: 2 }
        ]
    },
    {
        name: 'Куриный суп с лапшой',
        imgSrc: "chickennoodlesoup.png",
        chinaOnly: true,
        rarity: 4,
        stars: 2,
        effect: 
            `Восстанавливает **20** сытости  
            **Физическое АТК +2%**  
            **Физическое АТК +150**  
            Длится **1200** секунд`,
        ingredients: [
            { item: i.radish, amount: 1 },
            { item: i.poultrymeat, amount: 1 },
            { item: i.homigrain, amount: 2 }
        ]
    },
    {
        name: 'Острая лапша со свининой',
        imgSrc: "spicyporknoodles.png",
        chinaOnly: true,
        rarity: 4,
        stars: 2,
        effect: 
            `Восстанавливает **20** сытости  
            **АТК Огнём +2%**  
            **АТК Огнём +150**  
            Длится **1200** секунд`,
        ingredients: [
            { item: i.fattycut, amount: 1 },
            { item: i.pepper, amount: 1 },
            { item: i.homigrain, amount: 2 }
        ]
    },
    {
        name: 'Тарелка барбекю',
        imgSrc: "barbecueplatter.png",
        chinaOnly: true,
        rarity: 4,
        stars: 2,
        effect: 
            `Восстанавливает **20** сытости  
            **Сопротивление Огню +15%**  
            **Сопротивление Огню +675**  
            Длится **1200** секунд`,
        ingredients: [
            { item: i.primecut, amount: 1 },
            { item: i.pepper, amount: 1 },
            { item: i.fleshytail, amount: 1 }
        ]
    },
    {
        name: 'Суп из редьки с рёбрышками',
        imgSrc: "radishribsoup.png",
        chinaOnly: true,
        rarity: 4,
        stars: 2,
        effect: 
            `Восстанавливает **20** сытости  
            **Физическое Сопротивление +15%**  
            **Физическое Сопротивление +675**  
            Длится **1200** секунд`,
        ingredients: [
            { item: i.radish, amount: 1 },
            { item: i.ribs, amount: 1 }
        ]
    },
    {
        name: 'Хрустящий масляный арбуз',
        imgSrc: "crispyoilmelon.png",
        chinaOnly: true,
        rarity: 4,
        stars: 2,
        effect: 
            `Восстанавливает **20** сытости  
            Восстанавливает **20% + 60000** здоровья`,
        ingredients: [
            { item: i.oilmelon, amount: 1 }
        ]
    },
    {
        name: 'Острые палочки из масляного арбуза',
        imgSrc: "spicyoilmelonsticks.png",
        chinaOnly: true,
        rarity: 4,
        stars: 2,
        effect: 
            `Восстанавливает **800** выносливости  
            Восстанавливает **20% + 60000** здоровья`,
        ingredients: [
            { item: i.oilmelon, amount: 1 },
            { item: i.pepper, amount: 2 }
        ]
    },
]

export default recipes;
