const baiyuekui = {
    name: "Бай Юэкуй",
    uri: "baiyuekui",
    imgSrc: "baiyuekui.png",
    rarity: "SSR",
    chinaOnly: true,
    banners: {
        cn: [
            {
                bannerNo: 3,
                subtext: "Коллаборация",
                start: "26 Янв 2022",
                end: "13 Фев 2022",
                duration: "18д",
                week: "7~9"
            },
            {
                bannerNo: 10,
                subtext: "Коллаборация",
                start: "13 Мая 2022",
                end: "23 Мая 2022",
                duration: "10д",
                week: "22~24"
            }
        ]
    },
    weapon: {
        name: "Ала́я",
        element: "volt",
        type: "dps",
        baseStats: ["attack", "defense", "health"],
        shatter: ["S", "12.50"],
        charge: ["A", "8.00"],
        materials: ["volt", "green", "blue"],
        bonusEffect: {
            effect1: {
                title: "Боевой дух",
                description: "При входе в бой финальный урон увеличивается на **15%**, но персонаж получает эффект Распада клеток: персонаж теряет **1%** от текущего здоровья каждые **5** секунд. Распад клеток останавливается, когда здоровье падает ниже **50%**, при этом сохраняя увеличение урона от Боевого духа. Смена оружия на другое отменяет эффект Боевого духа."
            }
        },
        advancement: {
            star1: `**Клинковый разрез** наносит дополнительный урон, равный **80%** от АТК + **2,5%** от потерянного здоровья.  
                **Подавление дракона** наносит дополнительный урон, равный **160%** от АТК + **5%** от потерянного здоровья.  
                **Силовое поле** наносит дополнительный урон, равный **160%** of ATK + **5%** от потерянного здоровья (не активируется периодическим уроном).`,

            star2: `Базовый прирост АТК оружия увеличивается на **16%**.`,

            star3: `Эффективность пробивания увеличивается на **15%**. При пробивании щита цели на её месте создаётся Подавляющая бомба, мгновенно наносящая урон, равный **680%** от АТК всем целям поблизости. Если в радиусе взрыва только один враг, наносит урон, равный **1500%** от АТК.`,

            star4: `Базовый прирост к здоровью от оружия увеличивается на **32%**.`,

            star5: `Будучи атакованным, персонаж автоматически выполняет блок в течение **1** секунды. При активации мгновенно сбрасывает все негативные эффекты с персонажа, также блокируя один следующий удар по персонажу, который бы нанёс урон, равный менее **20%** от максимального здоровья персонажа. Во время блокирования нажмите кнопку удара, чтобы выполнить Ответный удар, нанося по цели урон, равный **240%** от АТК, и **подбрасывая цель в воздух**. Перезарядка: **18** секунд.`,

            star6: `При входе в зону действия **Силового поля** или **Фантазии** усиливает действие Боевого духа на **7** секунд, увеличивая финальный урон на **40%** и останавливая эффект Распада клеток. Смена оружия на другое отменяет эффект.`
        },
        abilities: [],
        recommendedMatrix: {
            set2: ["king", "shiro", "samir", "crow"],
            set3: ["sobek"]
        }
    },

    matrix: {
        set2: `Если при смене на это оружие у персонажа есть **200~999** очков заряда, то **200** очков заряда тратится на увеличение АТК в **15%/18%/21%/25%** на **15** секунд. Эффект не складывается. Перезарядка: **5** секунд.`,

        set4: `За каждые **0,6** секунд выполнения серии комбо-ударов **следующая** серия нанесёт **первому** поражённому врагу в радиусе **5** метров дополнительный урон, равный **106%/122%/140%/160%** от АТК, вплоть до максимума в **530%/610%/700%/800%** от АТК. После этого эффективность пробивания увеличивается на **7%/14%/21%/28%** в течение **4** секунд (эффект не может складываться). Эффект набора действует в фоновом режиме, и при наличии нескольких таких наборов действовать будет лишь набор с самым большим числом звёзд.`
    },
    
    awakening: {
        trait1200: `Когда Бай Юэкуй вступает в бой, АТК Молнией увеличивается на **21%**. Эффект увеличения ослабевает со временем и длится **120** секунд. Эффект сбрасывается спустя **5** секунд после выхода из боя. Наносимый по Колючему угрю и Земляному рою урон увеличивается на **50%**.`,

        trait4000: `Когда Бай Юэкуй вступает в бой, АТК Молнией увеличивается на **33%**. Эффект увеличения ослабевает со временем и длится **120** секунд. Эффект сбрасывается спустя **5** секунд после выхода из боя. Наносимый по Колючему угрю и Земляному рою урон увеличивается на **50%**.`,

        giftCategories: ['collectibles', 'limited-edition', 'decorations'],

        gifts: [
            [80, "goldCoin", "catFigure"],
            [60, "kitchenware", "tataFigure", "tataCards", "peppaFigure", "snowglobe", "psp", "foxFigure", "seal", "princeTataFigure", "linyeFigure"],
            [30, "necklace", "elfFigure", "spiderFigure"],
            [15, "photoAlbum", "snackBox", "plant", "strangePlant"]
        ]
    },
    
    bio: {
        gender: 'Женский',
        height: '172 см',
        birthplace: '???',
        horoscope: '???',
        birthday: '???',
        voiceActors: {
            jp: "",
            en: "",
            cn: "夏一可 (Ся Ике)"
        }
    }
}

export default baiyuekui;
