const echo = {
    name: "Эхо",
    uri: "echo",
    imgSrc: "echo.png",
    rarity: "SR",
    chinaOnly: false,
    weapon: {
        name: "Громовая алебарда",
        element: "volt",
        type: "dps",
        baseStats: ["attack", "defense", "health"],
        shatter: ["11.00", "s"],
        charge: ["7.00", "b"],
        materials: ["volt", "red", "black"],
        advancement: {
            star1: `Эффективность пробивания увеличивается на **15%**. При пробивании щита цели увеличивает АТК всех союзников на **15%** в течение **30** секунд. Эффект не складывается.`,

            star2: `Базовый прирост к здоровью от оружия увеличивается на **10%**.`,

            star3: `При попадании навыком *Лунный охотник* уменьшает АТК поражённых целей на **5%** и увеличивает АТК персонажа на **5%** в течение **15** секунд (эффект складывается до **3** раз при задевании навыком больше одной цели). Сила эффекта удваивается на целях с эффектом Тяжёлых ран.`,

            star4: `Базовый прирост АТК оружия увеличивается на **20%**.`,

            star5: `Удваивает продолжительность оглушения навыков уклонения.  
                <abbr title='China Exclusive'/> Удваивает продолжительность оглушения навыков уклонения вперёд.`,

            star6: `Навык высвобождения наносит тем больше урона, чем дальше пролетит, вплоть до максимального бонуса урона в **100%**.`
        },
        abilities: {
            normal: [
                {
                    name: "Напор",
                    description: `Находясь на земле, нажимайте кнопку удара, чтобы совершить серию до 5 атак.`,
                    breakdown: [
                        'Наносит **24,7%** от АТК + **1** урона и несильно отталкивает цель.',
                        'Наносит **22,6%** от АТК + **1** урона и несильно отталкивает цель.',
                        'Наносит **47,2%** от АТК + **2** урона и несильно отталкивает цель.',
                        'Наносит **65,%** от АТК + **3** урона и несильно отталкивает цель.',
                        'Наносит **114,95%** от АТК + **6** урона и отталкивает цель.'
                    ]
                },
                {
                    name: "Удар в прыжке",
                    description: `Находясь в воздухе, нажимайте кнопку удара, чтобы совершить серию до 4 атак.`,
                    breakdown: [
                        'Наносит **27,4%** от АТК + **1** урона.',
                        'Наносит **23,2%** от АТК + **1** урона.',
                        'Наносит **45,%** от АТК + **2** урона.',
                        'Наносит **110%** от АТК + **6** урона.'
                    ]
                },
                {
                    name: "Атака в падении",
                    description: `Находясь в воздухе, нажмите и удерживайте кнопку удара или просто нажмите её во время карабкания, прыжка назад или планирования на Джетпаке, чтобы применить атаку в падении, каждым ударом нанося **8%** от АТК + **1** урона. По приземлении наносит урон, равный **48,5%** от ATK + **3**, и сбивает цель с ног. Чем выше персонаж при применении атаки в падении, тем выше будет наносимый урон, вплоть до максимального в **600%** от АТК.`,
                },
                {
                    name: "Шквал копий",
                    description: `Нажмите и удерживайте кнопку удара после третьей совершённой базовой атаки, чтобы **подбросить цель в воздух**, нанося **49,2%** от АТК + **3** урона. Нажмите снова, чтобы продолжить атаковать цель в воздухе, нанося **98%** от АТК + **5** урона.`,
                },
                {
                    name: "Скрытная атака",
                    description: `Пригнувшись, подойдите к противнику сзади и нажмите кнопку удара, чтобы нанести **570%** от АТК + **30** урона.`,
                }
            ],
            dodge: [
                {
                    name: "Летящий пинок",
                    description: `Нажмите кнопку удара в течение короткого периода после уклонения в сторону, чтобы нанести **72%** от АТК + **4** урона, отбросить цель и **оглушить** её на 1 секунду (против обычных врагов) или 0,5 секунд (против других Странников).`,
                },
                {
                    name: "Стремительный удар",
                    description: `Нажмите кнопку удара в течение короткого периода после уклонения, чтобы нанести **52,8%** от АТК + **3** урона и **подбросить врагов в воздух**.`,
                },
                {
                    name: "Уклонение",
                    description: `Уклонение прямо перед получением удара создаёт зону ***Фантазии***, которая уменьшает скорость врагов. Перезарядка: **15** секунд. При уклонении персонаж получает неуязвимость к эффектам оглушения в течение 0,5 секунд.`,
                }
            ],
            skill: [
                {
                    name: "Лунный охотник",
                    description: `Подбрасывает цель и себя в воздух, нанося **127,5%** от АТК + **7** урона. Перезарядка: **25** секунд.`,
                }
            ],
            discharge: [
                {
                    name: "Раскат грома",
                    description: `Когда ***оружие полностью заряжено***, при смене оружия на это **сбрасывает все негативные эффекты с персонажа**, который взмывает в воздух и бросает в цель громовое копьё, нанося **296,7%** от АТК + **16** урона по площади, также **парализуя** цель на 1 секунду.`,
                }
            ]
        },
        recommendedMatrix: {
            set2: ["samir", "king", "shiro"],
            set3: ["sobek", "offensivelogic"]
        }
    },
    
    matrix: {
        set3: "При использовании навыка высвобождения этого оружия восстанавливается **80/100/120** очков заряда."
    },

    awakening: {
        trait1200: "Союзники в радиусе **10** метров от Эхо получают бонус урона в **4%** (кроме самой Эхо).",

        trait4000: "Союзники в радиусе **10** метров от Эхо получают бонус урона в **6%** (кроме самой Эхо).",

        giftCategories: ['everyday-items', 'limited-edition', 'games'],

        gifts: [
            [80, "psp", "tataCards"],
            [60, "goldCoin", "ufo", "peppaFigure", "catFigure", "pearl", "tataFigure"],
            [30, "chessSet", "suit", "juicePouch", "diary", "perfume"],
            [15, "flowers", "snackBox", "tradingCard", "harmonica", "scarf"]
        ]
    },

    bio: {
        gender: 'Женский',
        height: '162 см',
        birthplace: 'Уоррен',
        horoscope: 'лев',
        birthday: '14 Авг',
        voiceActors: {
            jp: "大久保瑠美 (Руми Окубо)",
            en: "Jeannie Tirado (Джинни Тирадо)",
            cn: ""
        }
    }
}

export default echo;
