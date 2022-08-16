const frigg = {
    name: "Фригг",
    banners: {
        cn: [
            {
                bannerNo: 7,
                start: "25 Марта 2022",
                end: "12 Апреля 2022",
                duration: "18д",
                week: "15~18"
            },
            {
                bannerNo: 14,
                subtext: "В ноябре уйдёт в стандарт",
                start: "23 Июня 2022",
                end: "9 Июля 2022",
                duration: "16д",
                week: "28~30"
            }
        ]
    },
    weapon: {
        name: "Бальмунг",
        bonusEffect: {
            effect1: {
                title: "Область льда",
                description: "При применении навыка *Фимбулвинтер* создаётся большая область льда, которая длится **25** секунд. Внутри этой области персонаж не будет тратить доступное количество уклонений при их использовании с Бальмунгом. Также внутри области льда персонаж получает эффект Замороженное царство I: при использовании ледяного оружия АТК Холодом увеличивается на **15%** и пробивание увеличивается на **25%**."
            }
        },
        advancement: {
            star1: `Внутри области льда получает **1** очко Мороза при нанесении урона любым элементом, равным **550%** от АТК Холодом, вплоть до максимума в **10** таких очков. Исчезая, область льда взрывается, нанося урон, равный ( Кол-ву Мороза &times; **95%** &times; АТК Холодом ) всем противникам в радиусе действия. Когда персонаж находится вне области льда, каждые **3** секунды теряется **1** накопленное очко Мороза.`,

            star2: `Базовый прирост к здоровью увеличивается на **16%**.`,

            star3: `Максимальное количество очков Мороза увеличивается до **15**. Применение навыка высвобождения ледяного оружия внутри области льда наносит урон, равный ( Кол-ву Мороза + 5 ) &times; **25%** &times АТК Холодом всем противникам в этой области.`,

            star4: `Базовый прирост АТК увеличивается на **32%**.`,

            star5: `Использование ледяного оружия для пробивания щита цели внутри области льда **замораживает** эту цель на **2** секунды и наносит дополнительный урон, равный ( Кол-ву Мороза &times; **35%** &times; АТК Холодом ). Дополнительный урон **удваивается**, если цель не может быть заморожена.`,

            star6: `При достижении **15** очков Мороза внутри области льда персонаж получает дополнительный эффект Замороженное царство II: при использовании ледяного оружия АТК Холодом увеличивается на **25%**.`
        },
        abilities: {
            normal: [
                {
                    name: "Обычная атака",
                    input: ["Атака x5"],
                    description: "Находясь на земле, нажимайте кнопку удара, чтобы провести серию до 5 атак.",
                    breakdown: [
                        'Наносит **62.1%** от АТК + **3** урона и несильно отталкивает цель.',
                        'Наносит **46.2%** от ATK + **2** урона и несильно отталкивает цель.',
                        'Наносит **91.1%** от ATK + **5** урона и несильно отталкивает цель.',
                        'Наносит **55.8%** от ATK + **3** урона и несильно отталкивает цель.',
                        'Наносит **218.4%** от ATK + **11** и сбивает цель.',
                    ]
                },
                {
                    name: "Воздушный шквал",
                    input: ["Прыжок", "Атака x5"],
                    description: "Находясь в воздухе, нажимайте кнопку удара, чтобы провести серию до 5 атак.",
                    breakdown: [
                        'Наносит **64.4%** от ATK + **3** урона.',
                        'Наносит **72.6%** от ATK + **4** урона.',
                        'Наносит **76.7%** от ATK + **4** урона.',
                        'Наносит **107.9%** от ATK + **6** урона.',
                        'Наносит **168.3%** от ATK + **9** урона.',
                    ]
                },
                {
                    name: "Парящий удар",
                    input: ["Атака", "Удерживание"],
                    description:
                        `Нажмите и удерживайте кнопку удара во время базовой атаки, чтобы совершить рывок вперёд с горизонтальным ударом, а затем подбросить цель и персонажа в воздух. Наносит до **134,3%** от АТК + **7** урона.`
                },
                {
                    name: "Спиральный удар",
                    input: ["Прыжок", "Удерживание"],
                    description:
                        `Находясь в воздухе, нажмите и удерживайте кнопку удара или просто нажмите её во время карабкания, прыжка назад или планирования на Джетпаке, чтобы применить атаку в падении, каждым ударом нанося **19,8%** от АТК + **1** урона. По приземлении наносит **185,7%** от АТК + **10** урона по площади.`
                }
            ],
            dodge: [
                {
                    name: "Уклонение",
                    description:
                        `Уклонение прямо перед получением удара создаёт зону ***Фантазии***, которая уменьшает скорость врагов. Перезарядка: **15** секунд. При уклонении персонаж получает неуязвимость к эффектам оглушения в течение **0,5** секунд.`
                },
                {
                    name: "Множественные удары",
                    input: ["Уклонение", "Атака"],
                    description:
                        `Нажмите кнопку удара в течение короткого периода после уклонения, чтобы провести множество ударов на определённом расстоянии впереди персонажа, нанося **143,9%** от АТК + **8** урона.`
                },
            ],
            skill: [
                {
                    name: "Фимбулвинтер",
                    description:
                        `Рассекает пространство вокруг Странника, нанося **577,5%** от АТК + **30** урона и подбрасывая противников. Во время применения навыка персонаж неуязвим к получению урона. Перезарядка: **30** секунд.
                        После применения навыка *Фимбулвинтер* создаётся большая область льда вокруг Странника на **25** секунд. Внутри этой области персонаж не будет тратить доступное количество уклонений при их использовании с Бальмунгом.  
                        Внутри области льда персонаж получает эффект "Замороженное царство I", и пробивание увеличивается на **25%** при использовании ледяного оружия.`
                },
            ],
            discharge: [
                {
                    name: "Морозный разрыв",
                    description: "Когда ***оружие полностью заряжено***, при смене оружия на это **сбрасывает все негативные эффекты с персонажа** и совершает рывок вперёд, временно контролируя врагов вокруг, а затем нанося удар, наносящий **618,2%** от АТК + **33** урона и подбрасывающий врагов в воздух."
                }
            ]
        },

    matrix: {
        set2: `При смене оружия с ледяного на ледяное АТК Холодом увеличивается на **15%/18%/21%/25%** в течение **10** секунд. Эффект набора действует в фоновом режиме, и при наличии нескольких таких наборов действовать будет лишь набор с самым большим числом звёзд.`,

        set4: `Находясь в созданной Бальмунгом области льда, противники будут каждую секунду получать урон, равный **60%/75%/90%/105%** от АТК Холодом.`
    },

    awakening: {
        trait1200: `При входе в бой АТК Холодом Фригг увеличивается на **1,5%** каждые **3** секунды. Эффект складывается до **10** раз и длится **5** секунд.`,

        trait4000: `При входе в бой АТК Холодом Фригг увеличивается на **2,4%** каждые **3** секунды. Эффект складывается до **10** раз и длится **5** секунд. В пределах области льда Фрейя неуязвима к эффектам контроля.`,
    },

    bio: {
        gender: 'Женский',
        height: '190 см',
        birthplace: '???',
        horoscope: 'Водолей',
        birthday: '1 Февраля',
        voiceActors: {
            jp: "伊藤静 (Сидзука Ито)",
            en: "",
            cn: "杨梦露 (Ян Монро)"
        }
    }
}

export default frigg;
