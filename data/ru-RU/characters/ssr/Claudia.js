const claudia = {
    name: "Клаудия",
    uri: "claudia",
    imgSrc: "claudia.png",
    rarity: "SSR",
    chinaOnly: false,
    banners: {
        cn: [
            {
                bannerNo: 1,
                start: "22 Дек 2021",
                end: "5 Янв 2022",
                duration: "14д",
                week: "2~4"
            },
            {
                bannerNo: 6,
                subtext: "Затем уходит в стандарт",
                start: "19 Мар 2022",
                end: "21 Мар 2022",
                duration: "2д",
                week: "14/15"
            }
        ]
    },
    weapon: {
        name: "Клинок Гурэн",
        element: "physical",
        type: "dps",
        baseStats: ["attack", "defense", "health"],
        shatter: ["A", "7.50"],
        charge: ["S", "12.00"],
        materials: ["physical", "red", "blue"],
        advancement: {
            star1: `Попадание активным навыком или навыком высвобождения накладывают на персонажа эффект, увеличивающий наносимый урон на **8%** в течение **25** секунд. Эффект складывается до **3** раз. За одно применение активного навыка или навыка высвобождения можно получить только один такой эффект.`,

            star2: `Базовый прирост АТК оружия увеличивается на **16%**.`,

            star3: `Попадание активным навыком или навыком высвобождения накладывают на цель эффект Боевых ран, увеличивая входящий Физический Урон и эффективность пробивания по этой цели на **10%** в течение **15** секунд. Складывается до **1** раза.`,

            star4: `Базовый прирост к здоровью от оружия увеличивается на **32%**.`,

            star5: `Попадание навыком высвобождения увеличивает урон активных навыков любого оружия на **20%** в течение **15** секунд. Эффект не складывается.`,

            star6: `Урон активного навыка больше не уменьшается при попадании по одной и той же цели. Применение активного навыка или навыка высвобождения накладывает **1** эффект Боевых ран на всех врагов в радиусе 8 метров.`
        },
        abilities: {
            normal: [
                {
                    name: "Быстрый выпад",
                    description: `Находясь на земле, нажимайте кнопку удара, чтобы совершить серию до 5 атак.`,
                    breakdown: [
                        'Наносит урон, равный **39%** от АТК + **2**, и несильно отбрасывает цель.',
                        'Наносит урон, равный **54,6%** of ATK + **3**, и несильно отбрасывает цель.',
                        'Наносит урон, равный **49,4%** of ATK + **3**, и несильно отбрасывает цель.',
                        'Наносит урон, равный **87%** of ATK + **5**, и несильно отбрасывает цель.',
                        'Наносит урон, равный **148,1%** of ATK + **8**, и **подбрасывает** цель.'
                    ]
                },
                {
                    name: "Удар в прыжке",
                    description: `Находясь в воздухе, нажимайте кнопку удара, чтобы совершить серию до 4 атак.`,
                    breakdown: [
                        'Наносит урон, равный **23,2%** от АТК + **1**.',
                        'Наносит урон, равный **40,3%** от АТК + **2**.',
                        'Наносит урон, равный **95,4%** от АТК + **5**.',
                        'Наносит урон, равный **115,8%** от АТК + **6** и **сбивает** цель.'
                    ]
                },
                {
                    name: "Циклон",
                    description: `Нажмите и удерживайте кнопку удара после совершённой базовой атаки, чтобы подбросить цель, подвешивая её в воздухе и нанося урон по одиночной цели, равный **39,8%** от АТК + **2**
                    .`,
                },
                {
                    name: "Пикирующий клинок",
                    description: `Находясь в воздухе, нажмите и удерживайте кнопку удара или просто нажмите её во время карабкания, прыжка назад или планирования на Джетпаке, чтобы применить атаку в падении, каждым ударом нанося **10%** от АТК + **1** урона. По приземлении наносит урон, равный **63,6%** от АТК + **3** и отбрасывает цели. Чем выше персонаж при применении атаки в падении, тем выше будет наносимый урон, вплоть до максимального в **600%** от АТК.`,
                },
                {
                    name: "Скрытная атака",
                    description: `Пригнувшись, подойдите к противнику сзади и нажмите кнопку удара, чтобы нанести **570%** от АТК + **30** урона.`,
                }
            ],
            dodge: [
                {
                    name: "Уклонение",
                    description: `Уклонение прямо перед получением удара создаёт зону Фантазии, которая уменьшает скорость врагов. Перезарядка: **15** секунд. При уклонении персонаж получает неуязвимость к эффектам оглушения в течение **0,5** секунд.`,
                },
                {
                    name: "Атака в подскоке",
                    description: `Нажмите кнопку удара в течение короткого периода после уклонения, чтобы нанести **31,6%** от АТК + **2** урона и **подбросить цель вместе с собой в воздух**, затем дополнительно нанося **47,3%** от АТК + **2** урона.`,
                }
            ],
            skill: [
                {
                    name: "Скитание",
                    description: `Танцует сквозь цели с клинком в руках, нанося **348,5%** от АТК + **18** суммарного урона до **5** целям (атаки по одной и той же цели наносят на **20%** меньше урона). В конце разрубает пространство перед собой, нанося **264%** от АТК + **14** урона целям и подбрасывая их в воздух. Во время применения навыка персонаж неуязвим к эффектам контроля. Перезарядка: **15** секунд.`,
                }
            ],
            discharge: [
                {
                    name: "Безудержный шквал",
                    description: `Когда ***оружие полностью заряжено***, при смене оружия на это **сбрасывает все негативные эффекты с персонажа**, который совершает рывок и **подбрасывает** цель, нанося **436,2%** x АТК + **23** урона и оставляя позади себя бурю клинков, наносящую **174,4%** x ATK + **9** урона по цели. Применение навыка даёт персонажу иммунитет к эффектам Тяжёлых ран/Заморозки/Горения/Электризации в течение **5** секунд.`,
                }
            ]
        },
        recommendedMatrix: {
            set2: ["claudia", "samir", "crow"],
            set4: ["claudia"],
            set3: ["pepper", "sobek"]
        }
    },
    
    matrix: {
        set2: `При попадании по цели в воздухе или применении атак в воздухе наносимый урон увеличивается на **13%/17%/20%/23%**. Сбрасывает возможность двойного прыжка после попадания по цели в воздухе.`,

        set4: `Применение активного навыка оружия уменьшает время перезарядки активных навыков любого оружия на **1,5/2/2,5/3** секунды и увеличивает урон навыков высвобождения любого оружия на **36%/45%/54%/63%** в течение **15** секунд.`,
    },

    awakening: {
        trait1200: `Скрывается на **1** секунду после уклонения.`,

        trait4000: `Скрывается на **1,5** секунды после уклонения.`,

        giftCategories: ['everyday-items', 'rare-items', 'decorations'],
        
        gifts: [
            [80, "snowglobe", "peppaFigure"],
            [60, "seal", "tataCards", "miaFigure", "catFigure", "princeTataFigure", "ufo"],
            [30, "suit", "juicePouch", "vial", "perfume", "spiderFigure", "elfFigure"],
            [15, "flowers", "photoAlbum", "photo", "scarf", "plant", "harmonica"]
        ]
    },

    bio: {
        gender: 'Женский',
        height: '170 см',
        birthplace: 'Хайкрос',
        horoscope: 'Козерог',
        birthday: '16 Января',
        voiceActors: {
            jp: "小松未可子 (Микако Комацу)",
            en: "",
            cn: "文小 (Вэнь Сяо)"
        }
    }
}

export default claudia;
