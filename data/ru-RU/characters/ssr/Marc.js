const marc = {
    name: "Марк",
    uri: "marc",
    imgSrc: "marc.png",
    rarity: "SSR",
    chinaOnly: true,
    banners: {
        cn: [
            {
                bannerNo: 4,
                subtext: "Коллаборация",
                start: "14 Фев 2022",
                end: "4 Мар 2022",
                duration: "18д",
                week: "10~12"
            },
            {
                bannerNo: 11,
                subtext: "Коллаборация",
                start: "24 Мая 2022",
                end: "3 Июн 2022",
                duration: "10д",
                week: "24~25"
            }
        ]
    },
    weapon: {
        name: "Рассвет",
        element: "physical",
        type: "defense",
        baseStats: ["attack", "defense", "health"],
        shatter: ["A", "9.00"],
        charge: ["S", "12.00"],
        materials: ["physical", "red", "black"],
        // Omni Shield? Mecha Shield? Heavy Dimensional/3D Shield?????
        bonusEffect: {
            effect1: {
                title: `Страж`,
                description: `**[В КОМАНДЕ]** При применении Вызова мехи, Смены формы или Бомбардировки наносит **40%** урона союзнику с меньшим запасом здоровья в течение **10** секунд, после чего восстанавливает **10%** от потерянного урона. Эффект может быть активирован только при активном Резонансе Стойкости, а также эффект не может быть снят и активирован снова до тех пор, пока он действует.`
            },
            effect2: {
                title: `Усиление`,
                description: `**[БЕЗ КОМАНДЫ]** Меха-броня уменьшает получаемый Физический Урон на **50%**.`
            },
            effect3: {
                title: `Пространственный щит`,
                description: `Попадания Двойным ударом, Штурмом и базовыми атаками в мехе будут давать **1** очко Пространственной энергии. При **20** таких очках персонаж конвертирует **20%** от текущего здоровья в **1,5-кратный** [Пространственный щит], итоговая прочность которого не может **1,5-кратно** превышать количество максимального здоровья персонажа. Пока активен [Пространственный щит] всё лечение будет уменьшено на **50%**. Щит длится **15** секунд и не может быть получен, если здоровье персонажа меньше **10%**.  
                &nbsp;   
                При окончании времени действия **66,7%** оставшейся прочности щита будет конвертировано в здоровье для персонажа, а при попадании в слабые цели будет даваться **2** очка Пространственной энергии.  
                &nbsp;  
                При активации [Пространственного щита] поглощает все активные щиты от здоровья в дополнительную прочность [Пространственного щита]. Персонаж не может получить новые щиты от здоровья, пока активен [Пространственный щит].`
            }
        },
        advancement: {
            star1: `Применение Вызова мехи, Смены формы или Бомбардировки моментально создаёт [Пространственный щит].`,

            star2: `Базовый прирост к здоровью от оружия увеличивается на **16%**.`,

            star3: `Когда [Пространственный щит] разрушается или обновляется, финальный урон персонажа увеличивается на **35%** в течение **20** секунд. Эффект не может складываться.`,

            star4: `Базовый прирост к здоровью от оружия увеличивается на **32%**.`,

            star5: `Когда [Пространственный щит] разрушается или обновляется, наносит урон ближайшим целям, равный **160%** от АТК + **5%** от оставшегося здоровья, также получая **50** заряда оружия при попадании.`,

            star6: `Когда [Пространственный щит] активен, Физическое Сопротивление **удваивается**, и персонаж также получает эффект Гипертела. [Пространственный щит] может быть получен, когда активный навык или навык высвобождения другого оружия попадает в цель при активном щите.`
        },
        abilities: [],
        recommendedMatrix: {
            set2: ["marc", "king", "shiro"],
            set4: ["marc"],
            set3: ["sobek"]
        }
    },

    matrix: {
        set2: `Атакуя противника, накладывает на **15** секунд щит от здоровья на всех союзников, прочность которого равна **15%** от текущего здоровья персонажа. Сбрасывается спустя **10** секунд после выхода из боя. Если на союзниках были другие щиты от здоровья, их прочность прибавляется к прочности нового щита. При получении щита весь входящий урон уменьшается на **11%/13%/15%/17%** в течение **15** секунд, этот эффект не может складываться. Эффект набора действует в фоновом режиме, и при наличии нескольких таких наборов действовать будет лишь набор с самым большим числом звёзд.`,

        set4: `При получении щита от здоровья АТК персонажа увеличивается на **6%/7,5%/9%/11,5%** и АТК союзников увеличивается на **3%/3,5%/4,5%/5,75%** в течение **15** секунд. Эффект складывается до **3** раз. Эффект набора действует в фоновом режиме, и при наличии нескольких таких наборов действовать будет лишь набор с самым большим числом звёзд.`
    },

    awakening: {
        trait1200: `Получая летальный урон от противника, Марк не умирает, вместо этого возрождаясь и провоцируя ближайших противников в течение **5** секунд. Во время возрождения персонаж не может получать урон и не может совершать никаких действий, в то же время восстанавливая **1%** от максимального здоровья каждую секунду и увеличивая получаемое лечение на **20%**. Перезарядка: **10** минут. Получаемый урон от Колючего угря и Земного рёва уменьшается на **50%**.`,

        trait4000: `Получая летальный урон от противника, Марк не умирает, вместо этого возрождаясь и провоцируя ближайших противников в течение **5** секунд. Во время возрождения персонаж не может получать урон и не может совершать никаких действий, в то же время восстанавливая **2%** от максимального здоровья каждую секунду и увеличивая получаемое лечение на **50%**. Перезарядка: **5** минут. Получаемый урон от Колючего угря и Земного рёва уменьшается на **50%**.`,

        giftCategories: ['metalware'],

        gifts: [
            [60, "kitchenware", "present", "pearl", "bearFigure"],
            [30, "toolbox", "strangeFragment"],
            [15, "dumbbells"]
        ],
    },

    bio: {
        gender: 'Мужской',
        height: '192 см',
        birthplace: '???',
        horoscope: '???',
        birthday: '???',
        voiceActors: {
            jp: "",
            en: "",
            cn: "赵铭 (Чжао Мин)"
        }
    }
}

export default marc;
