const crow = {
    name: "Ворон",
    uri: "crow",
    imgSrc: "crow.png",
    rarity: "SSR",
    chinaOnly: false,
    weapon: {
        name: "Громовые клинки",
        element: "volt",
        type: "dps",
        baseStats: ["attack", "health", "crit"],
        shatter: ["B", "6.00"],
        charge: ["A", "8.00"],
        materials: ["volt", "red", "blue"],
        advancement: {
            star1: `Крит. шанс всех двойных атак клинками увеличивается на **40%** при ударах в спину цели. При атаке в спину наэлектризованной цели крит. шанс и крит. урон увеличиваются на **100%** и **30%** соответственно.`,
           
            star2: `Базовый прирост АТК оружия увеличивается на **16%**.`,
           
            star3: `Наносимый урон увеличивается на **30%** по целям, чьё здоровье ниже **60%**.`,
           
            star4: `Базовый прирост к здоровью от оружия увеличивается на **32%**.`,
           
            star5: `Попадание в спину на **4** секунды увеличивает крит. шанс и крит. урон на **100%** и **50%** соответственно. Перезарядка: **10** секунд.`,
            
            star6: `При попадании в цель активным навыком оружия Урон Напряжением по этой цели увеличивается на **20%** в течение **20** секунд.`
        },
        abilities: {
            normal: [
                {
                    name: "Парные клинки",
                    type: "normal",
                    description: `Находясь на земле, нажимайте кнопку атаки, чтобы провести серию до 5 атак.`,
                    breakdown: [
                        'Наносит **42,9%** от АТК + **2** урона и несильно отбрасывает цель.',
                        'Наносит **52,2%** от АТК + **3** урона и несильно отбрасывает цель.',
                        'Наносит **64,8%** от АТК + **3** урона и несильно отбрасывает цель.',
                        'Наносит **69,2%** от АТК + **4** урона и несильно отбрасывает цель.',
                        'Наносит **144,3%** от АТК + **8** урона и несильно отбрасывает цель.'
                    ]
                },
                {
                    name: "Небесный шквал",
                    type: "normal",
                    description: `Находясь в воздухе или после прыжка, нажимайте кнопку атаки, чтобы совершить серию до 4 атак.`,
                    breakdown: [
                        'Наносит **46,8%** от АТК + **2** урона.',
                        'Наносит **27,5%** от АТК + **1** урона.',
                        'Наносит **65,8%** от АТК + **3** урона.',
                        'Наносит **98,5%** от АТК + **5** урона.'
                    ]
                },
                {
                    name: "Стремительный рывок",
                    description: `Нажмите и удерживайте кнопку удара после третьей совершённой базовой атаки, чтобы атаковать цель и **подбросить её в воздух**, нанося **83,4%** от АТК + **4** суммарного урона.`,
                },
                {
                    name: "Спиральный удар",
                    description: `Находясь в воздухе, нажмите и удерживайте кнопку удара (или просто нажмите, когда выбрана цель, во время карабкания, прыжка назад или планирования на Джетпаке), чтобы применить атаку в падении. Каждым ударом наносит **42%** от АТК + **2** урона.`,
                },
                {
                    name: "Скрытная атака",
                    description: `Пригнувшись, подойдите к противнику сзади и нажмите кнопку удара, чтобы нанести **570%** от АТК + **30** урона.`,
                }
            ],
            dodge: [
                {
                    name: "Летающие клинки",
                    description: `Нажмите кнопку удара в течение короткого периода после уклонения в сторону, чтобы разрезать цель **5** раз, каждым попаданием нанося **18,8%** от АТК + **1** урона. Во время применения навыка получает иммунитет к эффектам контроля.`,
                },
                {
                    name: "Dodge",
                    description: `Уклонение прямо перед получением удара создаёт зону ***Фантазии***, которая уменьшает скорость врагов. Перезарядка: **15** секунд. При уклонении персонаж получает неуязвимость к эффектам оглушения в течение **0,5** секунд.`,
                }
            ],
            skill: [
                {
                    name: "Возвращающиеся клинки",
                    description: `Запускает 6 вращающихся клинков, каждый из которых наносит **20,7%** от АТК + **1** урона. Персонаж получает эффект **Гипертела** на **8** секунд. Этот эффект пропадает, когда клинки возвращаются к персонажу. Перезарядка: **45** секунд.`,
                }
            ],
            discharge: [
                {
                    name: "Орбитальные клинки",
                    description: `Когда ***оружие полностью заряжено***, при смене оружия на это **сбрасывает все негативные эффекты с персонажа** и перемещается к своей цели, нанося **62,1%** от ATK + **3** урона и поражая её электрическим током (через **5** секунд наносит Урон Напряжением, равный **15%** нанесённого персонажем за это время урона. Итоговый урон поражения не может превышать **350%** от АТК Странника. Этот эффект считается негативным, и он не может быть сброшен). Также создаёт 3 клинка, которые вращаются вокруг Странника и наносят **46,5%** от ATK + **2** урона при касании.`,
                }
            ]
        },
        recommendedMatrix: {
            set2: ["samir", "claudia", "crow"],
            set4: ["samir"],
            set3: ["pepper", "sobek"]
        }
    },

    matrix: {
        set2: `Крит. урон увеличивается на **24%/30%/36%/42%** против целей, чьё здоровье ниже **60%**.  
            <abbr title='China Exclusive' class='cn-flag'>CN</abbr> Increase crit damage to targets with less than **60%** HP by **33%/42%/50%/58%**.`,

        set4: `Крит. удары на **5** секунд накладывают эффект периодического урона, каждую секунду наносящий урон, равный **18%/22%/26%/30%** от АТК. Эффект не складывается.  
            <abbr title='China Exclusive' class='cn-flag'>CN</abbr> Крит. удары на **5** секунд накладывают эффект периодического урона, каждую секунду наносящий урон, равный **12%/15%/18%/21%** от АТК. Эффект не складывается.`
    },

    awakening: {
        trait1200: `Когда Ворон не находится в команде, его урон и сопротивление урону увеличиваются на **6%** и **4%** соответственно.`,

        trait4000: `Когда Ворон не находится в команде, его урон и сопротивление урону увеличиваются на **10%** и **6%** соответственно. При входе в бой наносимый урон Ворона увеличивается на **12%** в течение **12** секунд.`,

        giftCategories: ['everyday-items', 'figurines', 'limited-edition'],

        gifts: [
            [80, "tataCards", "tataFigure"],
            [60, "goldCoin", "catFigure", "miaFigure", "peppaFigure", "bearFigure", "psp", "linyeFigure"],
            [30, "suit", "juicePouch", "perfume", "pumpkinFigure", "androidFigure"],
            [15, "flowers", "snackBox", "scarf"]
        ]
    },

    bio: {
        gender: 'Мужской',
        height: '162 см',
        birthplace: 'Астра',
        horoscope: 'Стрелец',
        birthday: '17 Дек',
        voiceActors: {
            jp: "岡本信彦 (Нобухико Окамото)",
            en: "Casey Mongillo (Кейси Монгилло)",
            cn: "翟巍 (Вэй Чжай)"
        }
    }
}

export default crow;
