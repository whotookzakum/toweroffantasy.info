const zero = {
    name: "Зеро",
    weapon: {
        name: "Куб отрицания",
        advancement: {
            star1: `Нанося урон, создаёт лечебную сферу, которая существует **20** секунд и восстанавливает любому её поднявшему союзнику здоровье, равное **60%** от АТК. Перезарядка: **2** секунды.`,

            star2: `Базовый прирост АТК увеличивается на **16%**.`,
            
            star3: `Уменьшает перезарядку активного навыка оружия с **60** секунд до **30** секунд. Когда активен щит, каждую секунду восстанавливает здоровье, равное **30%** от АТК.`,
            
            star4: `Базовый прирост здоровья увеличивается на **32%**.`,
            
            star5: `Нанося урон, создаёт усиливающую сферу, которая существует **20** секунд и увеличивает АТК вместе со всем лечением на **2%** любому её поднявшему союзнику в течение **30** секунд. Эффект складывается до **10** раз. Перезарядка навыка: **2,5** секунды.`,
            
            star6: `Использование активного навыка оружия дарует союзникам лечебные и усиливающие сферы в количестве, равном количеству активных Омниумовых кубов.`
        },
        abilities: {
            normal: [
                {
                    name: "Обычная атака",
                    input: ["Атака x5"],
                    description: `Находясь на земле, нажимайте кнопку удара, чтобы совершить серию до 5 атак.
                                **Пассивно: При попадании обычными атаками 6 раз, создаётся 1 куб. Максимум может существовать 5 кубов**.`,
                    breakdown: [
                        'Наносит **35,9%** от АТК + **2** урона.',
                        'Наносит **29,4%** от АТК + **2** урона.',
                        'Наносит **91,5%** от АТК + **5** урона.',
                        'Наносит **61,2%** от АТК + **3** урона.',
                        'Наносит **62,3%** от АТК + **3** урона до 3 раз и **подбрасывает** цель.'
                    ]
                },
                {
                    name: "Снаряд Омниума",
                    input: ["Прыжок","Удерживание"],
                    description: `Находясь в воздухе, нажмите кнопку удара, чтобы запустить до **5** снарядов и нанести всего до **45,6%** от АТК + **2** урона. Тратит до **250** выносливости.  
                    **Пассивно: Если у Странника есть активные кубы, затрачивает их все и запускает Снаряды Омниума**.`
                },
                {
                    name: "Переполнение энергии",
                    input: ["Прыжок","Атака"],
                    description: `Находясь в воздухе или после прыжка, нажмите кнопку удара, чтобы активировать Переполнение энергии. По приземлении создаёт идущую вперёд ударную волну, которая наносит до **18%** от АТК + **1** урона целям на своём пути.`
                },
                {
                    name: "Омниумовый удар",
                    input: ["Атака x3","Удерживание"],
                    description: `Нажмите и удерживайте кнопку удара после тртьей совершённой базовой атаки, чтобы создать энергетическую колонну, которая наносит **52,8%** от АТК + **3** урона. Колонна существует **5** секунд и каждую секунду дополнительно наносит **22%** от АТК + **1** урона целям поблизости.`
                },
                {
                    name: "Энергетический страж",
                    description: `Кубы, летающие вокруг Странника, наносят **7,5%** от АТК + **1** урона врагам.`
                },
                {
                    name: "Энергетический снаряд",
                    description: `Когда Странник запускает Снаряды Омниума или Переполнение энергии, его кубы так же запускаются в цель, нанося **37,3%** от АТК + **2** урона.`
                }
            ],
            dodge: [
                {
                    name: "Всплеск души",
                    description: `Уклонение прямо перед получением удара создаёт зону ***Фантазии***, которая уменьшает скорость врагов и даёт неуязвимость к эффектам оглушения в течение **0,5** секунд. Если у Странника меньше **5** активных кубов, каждое успешное уклонение с **40%** шансом восстановит 1 уклонение. Успешные уклонения не прерывают серии из обычных атак. **Пассивно: Создаёт куб за каждое успешное уклонение в воздухе**.`
                }
            ],
            skill: [
                {
                    name: "Омниумовый щит",
                    description: `Создаёт щит для себя и союзников на **10** секунд, способный заблокировать до **800%** x АТК входящего урона, и наносит **109,9%** x АТК + **6** урона ближайшим целям и **подбрасывает** их. Применение навыка тратит все активные кубы, за каждый куб добавляя **160%** от АТК к прочности щита. Перезарядка: **90** секунд.`
                }
            ],
            discharge: [
                {
                    name: "Волна Омниума",
                    description: `Когда ***оружие полностью заряжено***, при смене оружия на это **сбрасывает все негативные эффекты с персонажа** и создаёт 5 кубов, которые запускаются вместе с ударной волной. Ударная волна наносит **131,5%** от АТК + **7** урона целям поблизости и **подбрасывает** их в воздух. Каждый куб наносит дополнительно **37,3%** от АТК + **2** урона. Если поблизости есть союзники, они получают иммунитет к входящему урону на **3** секунды.`
                }
            ]
        },
    },

    matrix: {
        set2: `Использование навыка высвобождения этого оружия создаёт щит на **4** секунды, который способен заблокировать урон, равный **120%/150%/180%/210%** от АТК.`,

        set4: `До тех пор, пока активен щит, персонаж и его союзники наносят на **16%/20%/24%/28%** больше урона.`
    },

    awakening: {
        trait1200: `Когда Зеро применяет активный навык оружия, время перезарядки использованных Реликтов уменьшается на **1,5** секунды. Эффект может быть активирован одним и тем же оружием не чаще **1** раза каждые **5** секунд.`,

        trait4000: `Когда Зеро применяет активный навык оружия, время перезарядки использованных Реликтов уменьшается на **3** секунды. Эффект может быть активирован одним и тем же оружием не чаще **1** раза каждые **5** секунд.`,
    },

    bio: {
        gender: 'Мужской',
        height: '155 см',
        birthplace: 'Бангис',
        horoscope: 'Близнецы',
        birthday: '6 Июн',
        voiceActors: {
            jp: "村瀬歩 (Аюму Мурасэ)",
            en: "",
            cn: "幽幽"
        }
    },

    cnData: {
        weapon: {
            advancement: {
				star5: `<abbr title='China Exclusive'></abbr> Нанося урон, создаёт усиливающую сферу, которая существует **20** секунд и увеличивает АТК на **2%** любому её поднявшему союзнику в течение **45** секунд. Эффект складывается до **10** раз. Перезарядка навыка: **2,5** секунды.`,
            }
        },
        matrix: {
            set2: `<abbr title='China Exclusive'></abbr> Использование навыка высвобождения этого оружия создаёт щит на **6** секунд, который способен заблокировать урон, равный **150%/200%/250%/300%** от АТК.`,
`
        }
    }
}

export default zero;
