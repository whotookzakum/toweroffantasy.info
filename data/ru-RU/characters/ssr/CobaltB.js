const cobalt = {
    name: "Кобальт-С",
    uri: "cobalt-b",
    imgSrc: "cobalt-b.png",
    rarity: "SSR",
    chinaOnly: false,
    banners: {
        cn: [
            {
                bannerNo: 2,
                start: "8 Янв 2022",
                end: "26 Янв 2022",
                duration: "18д",
                week: "4~7"
            },
            {
                bannerNo: 8,
                subtext: "Затем уходит в стандарт",
                start: "13 Апр 2022",
                end: "27 Апр 2022",
                duration: "14д",
                week: "18~20"
            }
        ]
    },
    weapon: {
        name: "Пылающий револьвер",
        element: "flame",
        type: "dps",
        baseStats: ["attack", "health", "crit"],
        shatter: ["B", "6.50"],
        charge: ["A", "10.00"],
        materials: ["flame", "red", "black"],
        advancement: {
            star1: "Каждое попадание активным навыком оружия наносит дополнительный урон, равный **2%** от текущего здоровья цели, но не более **200%** от АТК.",

            star2: "Базовый прирост АТК оружия увеличивается на **16%**.",

            star3: 'Взрывная граната и атака в уклонении на **10** секунд накладывают *Ионный ожог* на уже горящие цели, каждую секунду нанося урон, равный **90%** от АТК.',

            star4: "Базовый прирост АТК оружия увеличивается на **32%**.",

            star5: "Урон *Ионного ожога* увеличивается до **140%**. Попадание атакой в уклонении любого оружия обновляет время действия *Ионного ожога* на целях.",
            
            star6: "*Заградительный огонь* поджигает поражённые цели на **15** секунд. Время перезарядки активного навыка уменьшается на **4** секунды, когда атака в уклонении любого оружия попадает в цель (время перезарядки можно уменьшить раз в **1,5** секунды). Периодический урон от атак в уклонении также может активировать этот эффект."
        },
        abilities: [],
        recommendedMatrix: {
            set2: ["samir", "crow"],
            set4: ["cobalt-b", "samir"],
            set3: ["sobek"]
        }
    },

    matrix: {
        set2: `Восстанавливает **1** доступное уклонение за каждые **4** совершённых уклонения. Атаки в уклонении поджигают цель на **10** секунд, каждую секунду нанося урон, равный **13%/17%/21%/25%** от АТК.`,

        set4: `Увеличивает наносимый урон на **13%/17%/21%/25%** по целям с негативными эффектами.`
    },

    awakening: {
        trait1200: `Применяя навык высвобождения, Кобальт-С случайным образом восстанавливает **50** - **120** очков заряда оружия.`,

        trait4000: `Применяя навык высвобождения, Кобальт-С случайным образом восстанавливает **90** - **180** очков заряда оружия.`,

        giftCategories: ['metalware', 'collectibles', 'limited-edition'],

        gifts: [
            [80, "kitchenware", "goldCoin"],
            [60, "seal", "tataCards", "foxFigure", "catFigure", "bearFigure", "tataFigure", "present", "psp", "linyeFigure", "pearl"],
            [30, "necklace", "toolbox", "strangeFragment"],
            [15, "dumbbells", "snackBox", "strangePlant"]
        ],
    },

    bio: {
        gender: 'Женский',
        height: '157 см',
        birthplace: 'Крон',
        horoscope: 'Рак',
        birthday: '26 Июн',
        voiceActors: {
            jp: "川澄綾子 (Аяко Кавасуми)",
            en: "Stephanie Kerbis (Стефани Кербис)",
            cn: "陈睿婕 (Чен Жуйцзе)"
        }
    }
}

export default cobalt;
