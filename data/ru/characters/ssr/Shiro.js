const shiro = {
    name: "Широ",
    weapon: {
        name: "Морской диск",
        advancement: {
            star1: `Увеличивает наносимый урон и пробивание на **30%** по целям, которые находятся в радиусе действия *Полного цветения*.`,
            
            star2: `Базовый прирост АТК увеличивается на 16%.`,
            
            star3: `Увеличивает пробивание на **15%** и сбрасывает время перезарядки всех активных навыков оружия при пробивании щита цели. Может сработать раз в **30** секунд.`,
           
            star4: `Базовый прирост к здоровью увеличивается на 32%.`,
            
            star5: `При попадании по цели с тяжёлыми ранами время действия этих тяжёлых ран увеличивается на **7** секунд. Может сработать лишь **1** раз на каждый такой эффект.`,
           
            star6: `При применении *Полного цветения* персонаж получает **100%** крит. шанса на следующие **8** секунд.`
        },
        abilities: {
            normal: [
                {
                    name: "Быстрый бросок",
                    input: ["Атака x5"],
                    description: `Находясь на земле, нажимайте кнопку атаки и бросайте диск, чтобы совершить до 5 возвращающихся атак в серии.`,
                    breakdown: [
                        'Наносит **23,6%** от АТК + **1** урона.',
                        'Наносит **18,3%** от АТК + **1** урона.',
                        'Наносит **26,2%** от АТК + **1** урона.',
                        'Наносит **23,6%** от АТК + **1** урона.',
                        'Наносит **41,4%** от АТК + **2** урона и несильно отталкивает цель.'
                    ]
                },
                {
                    name: "Воздушное высвобождение",
                    input: ["Прыжок","Атака x3"],
                    description: `Находясь в воздухе или после прыжка, нажимайте кнопку удара, чтобы совершить до 3 возвращающихся атак в серии.`,
                    breakdown: [
                        'Наносит **20,1%** от АТК + **1** урона.',
                        'Наносит **22,5%** от АТК + **1** урона.',
                        'Наносит **28,6%** от АТК + **2** урона.'
                    ]
                },
                {
                    name: "Разброс",
                    input: ["Атака x2","Удерживание"],
                    description: `Нажмите и удерживайте кнопку удара после второй совершённой базовой атаки, чтобы запустить вперёд пять пронзающих дисков, каждый из которых наносит **33,5%** * АТК + **2** урона и немного отталкивает цель.`
                },
                {
                    name: "Воздушное вращение",
                    input: ["Прыжок","Атака"],
                    description: `Находясь в воздухе, нажмите и удерживайте кнопку удара, чтобы выпустить мощный снаряд, наносящий **147,3%** от АТК + **8** урона цели и противникам поблизости, также подбрасывая их в воздух.`
                },
                {
                    name: "Скрытная атака",
                    input: ["Пригнуться","Атака"],
                    description: `Пригнувшись, подойдите к противнику сзади и нажмите кнопку удара, чтобы нанести **427,5%** от АТК + **23** урона.`
                }
            ],
            dodge: [
                {
                    name: "Убывающая луна",
                    input: ["Уклонение","Атака"],
                    description: `Нажмите кнопку удара в течение короткого периода после уклонения, чтобы запустить вперёд вращающийся диск, наносящий **102,2%** от АТК + **5** урона цели и **оглушающий** её на **0,5** секунды. Затем диск разделяется на **3** диска, что продолжают движение, нанося **14,6%** от АТК + **1** урона всем целям на своём пути. ***Разделённые диски будут отскакивать от границ Полного цветения***.`
                },
                {
                    name: "Уклонение",
                    description: `Уклонение прямо перед получением удара создаёт зону ***Фантазии***, которая уменьшает скорость врагов. Перезарядка: **15** секунд. При уклонении персонаж получает неуязвимость к эффектам оглушения в течение **0,5** секунд.`
                }
            ],
            skill: [
                {
                    name: "Полное цветение",
                    description: `Создаёт область со Странником в центре на **8** секунд, в течение которых область будет притягивать врагов и уменьшать их скорость на **30%**. Также запускает **5** дисков, которые **5** раз отскакивают от врага к врагу, нанося **14,3%** от АТК + **1** урона целям на своём пути. ***Разделённые диски, созданные Убывающей луной, также отскакивают до 5 раз***. Перезарядка: **60** секунд.`
                }
            ],
            discharge: [
                {
                    name: "Дух воздуха",
                    description: `Когда ***оружие полностью заряжено***, при смене оружия на это **сбрасывает все негативные эффекты с персонажа** и запускает Морской диск в цель, **оглушая** её и противников поблизости на **1** секунду. Затем Дух воздуха в течение **10** секунд будет каждую секунду совершать **1** атаку, поражая ей до **3** врагов (каждая атака с **10%** шансом будет **оглушать** цель на **1,5** секунды) и нанося **31,8%** * АТК + **2** урона.`
                }
            ]
        },
        recommendedMatrix: {
            set2: ["king", "shiro", "samir"],
            set3: ["sobek", "offensivelogic"]
        }
    },
    

    matrix: {
        set2: `Увеличивает наносимый урон и пробивание на **15%/19%/22,5%/26%** по целям, чьё здоровье выше **50%**.`,

        set4: `Начиная бой, персонаж наносит на **20%/25%/30%/35%** больше урона в течение **20** секунд. Эффект может быть получен снова через **5** секунд после выхода из боя.` 
    },

    awakening: {
        trait1200: `Когда Широ применяет активный навык оружия или навык высвобождения, все виды АТК увеличиваются на **10%**, а Физ. АТК ещё на **7%** дополнительно в течение **8** секунд. Перезарядка: **16** секунд.`,

        trait4000: `Когда Широ применяет активный навык оружия или навык высвобождения, все виды АТК увеличиваются на **16%**, а Физ. АТК ещё на **10%** дополнительно в течение **8** секунд. Перезарядка: **16** секунд.`,
    },

    bio: {
        gender: 'Женский',
        height: '163 см',
        birthplace: 'Уоррен',
        horoscope: 'Дева',
        birthday: '22 Сен',
        voiceActors: {
            jp: "小澤亜李 (Ари Одзава)",
            en: "Kristen McGuire (Кристен Макгуайр)",
            cn: "小耗 (Сяо Хао)"
        }
    },

    cnData: {
        matrix: {
            set4: `<abbr title='China Exclusive'></abbr> Начиная бой, персонаж наносит на **20%/25%/30%/35%** больше урона в течение **35** секунд. Эффект может быть получен снова через **5** секунд после выхода из боя.`
        },
    }
}

export default shiro;
