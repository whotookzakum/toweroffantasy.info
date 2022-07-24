const huma = {
    name: "Хума",
    rarity: "SSR",
    chinaOnly: false,
    weapon: {
        name: "Литой щит V2",
        element: "flame",
        type: "defense",
        baseStats: ["attack", "defense", "health"],
        shatter: ["A", "10.00"],
        charge: ["A", "10.00"],
        materials: ["flame", "green", "blue"],
        advancement: {
            star1: `Применение навыков уклонения или ответвления в форме щита даёт 1 эффект Прочного щита, увеличивающий сопротивление к урону на **10%** в течение **15** секунд. Эффект может складываться до **3** раз. При смене на форму топора конвертирует все эффекты Прочного щита в эффекты Острого топора, каждый из которых увеличивает наносимый урон на **15%** в течение **15** секунд. Этот эффект пропадает при смене на другое оружие.`,

            star2: `Базовый прирост к здоровью от оружия увеличивается на **16%**.`,

            star3: `Навыки уклонения или ответвления наносят дополнительный урон в форме щита, равный **4%** от текущего здоровья персонажа.`,

            star4: `Базовый прирост к здоровью от оружия увеличивается на **32%**.`,

            star5: `При смене на форму топора персонаж получает **30%** сопротивления к урону, которое уменьшается на **10%** каждые **3** секунды. Полученное сопротивление к урону не может опуститься ниже **10%**. Этот эффект пропадает при смене на другое оружие. Перезарядка: **30** секунд.`,

            star6: `Улучшает навыки смены формы.  
                Форма щита: Увеличивает наносимый навыком урон на **60%** и радиус зоны пламени на **30%**.  
                Форма топора: В течение **5** секунд после применения этого навыка весь получаемый урон превращается в лечение для персонажа (до **15%** от максимального здоровья).`
        },
        skills: [
            {
                name: "Обычная атака",
                type: "normal",
                desc: `While on the ground, swing the shield axe to attack 4 times in a row.  
                        First Attack in Shield Form: Deal damage equal to **70.6%** of ATK + **4** and knock the target back a short distance.  
                        Second Attack: Deal damage equal to **51.7%** of ATK + **3** and knock the target back a short distance.  
                        Third Attack: Deal damage equal to **57.1%** of ATK + **3** and knock the target back a short distance.  
                        Fourth Attack: Deal damage equal to **167.3%** of ATK + **9** and launch the target into the air.  
                        First Attack in Axe Form: Deal damage equal to **122.9%** of ATK + **6** and knock the target back a short distance.  
                        Second Attack: Deal damage equal to **72.2%** of ATK + **4** and knock the target back a short distance.  
                        Third Attack: Deal damage equal to **109%** of ATK + **6** and knock the target back a short distance.  
                        Fourth Attack: Deal damage equal to **201.1%** of ATK + **11** and knock the target back.`,
            },
            {
                name: "Воздушный удар",
                type: "normal",
                desc: `While airborne or after jumping once, attack 3 times in a row.  
                        First Attack in Shield Form: Deal damage equal to **69%** of ATK + **4**.  
                        Second Attack: Deal damage equal to **72.9%** of ATK + **4**.  
                        Third Attack: Deal damage equal to **93.7%** of ATK + **5**.  
                        First Attack in Axe Form: Deal damage equal to **107.8%** of ATK + **6**.  
                        Second Attack: Deal damage equal to **82.8%** of ATK + **4**.  
                        Third Attack: Deal damage equal to **252.7%** of ATK + **13**.`,
            },
            {
                name: "Предвкушение",
                type: "normal",
                desc: `Shield Form: While on the ground, tap and hold normal attack to enter shield form (release to exit) for **3** seconds, during which the Wanderer is unable to move, and all damage taken is reduced by **50%**. While in shield form, releasing the normal attack button after taking damage or after holding the button for **3** seconds, unleash fire crash, dealing damage equal to **152.1%** of ATK + **8** and inflicting a **1**-second **stun** effect on the target.  
                Axe Form: Smash the target, dealing damage equal to **111.1%** of ATK + **6** and knocking the target into the air.`,
            },
            {
                name: "Доблесть",
                type: "normal",
                desc: `Tap and hold normal attack while airborne (or tap when a target is selected), or tap normal attack while climbing, jumping backward, or using the Jetpack to trigger Air Branch attacks.  
                        Shield Form: While falling, deal damage equal to **12.5%** of ATK + **1** each hit. Upon landing, deal damage equal to **81.1%** of ATK + **4** and knock the target into the air.  
                        Axe Form: While falling, deal damage equal to **12.5%** of ATK + **1** each hit. Upon landing, deal damage equal to **116.6%** of ATK + **6** and knock the target into the air. The higher the location is when triggered, the higher the damage dealt, up to **600%** of ATK.`,
            },
            {
                name: "Извержение",
                type: "dodge",
                desc: `Tap normal attack during the short period after dodging to trigger a Dodge Attack.  
                        Shield Form: Unleash a flaming shield, dealing damage equal to **50.7%** of ATK + **3** and knocking back targets. In addition, trigger an explosion that deals damage equal to **50.7%** of ATK + **3**, stun targets for **0.5** seconds, and reduce incoming healing effects on targets by **30%** for **10** seconds.  
                        Axe Form: Swing an axe to deal damage equal to **205.8%** of ATK + **11**, and reduce incoming healing effects on targets by **30%** for **10** seconds.`,
            },
            {
                name: "Уклонение",
                type: "dodge",
                desc: `Dodge right before getting hit to activate a Phantasia, which reduces the speed of enemies within the area. Cooldown: 15 seconds. While dodging, you gain hitstun immunity for **0.5** seconds.`,
            },
            {
                name: "Расщепление",
                type: "skill",
                desc: `Shield Conversion: Switch from shield form to axe form and smash the ground, dealing damage equal to **339.9%** of ATK + **18** and knocking the target **into the air**. Leave a flame zone for **5** seconds that burns the target, dealing continuous damage equal to **212.4%** of ATK + **11**.  
                Axe Conversion: Switch from axe form to shield form and slam it to the ground, dealing damage equal to **281.4%** of ATK + **15** to the target and knocking them back. Prevent the target from switching weapons for **5** seconds. **45**-second cooldown, Shield Conversion and Axe Conversion share a cooldown.`,
            },
            {
                name: "Бурлящая ярость",
                type: "discharge",
                desc: `When <b>weapon charge</b> is full or when <b>Phantasia</b> is triggered, **remove all debuffs from the wielder** and unleash a flame shockwave upon switching to this weapon, dealing damage equal to **320%** of ATK + **17**. Taunt enemies for **5** seconds, during which gain **15%** damage reduction. Scatter shield-shaped objects based on the number of targets taunted. Objects last **20** seconds and provide **10** seconds of **5%** damage reduction (stackable), restoring dodge by 1.`,
            }
        ],
        recommendedMatrix: {
            set2: ["king", "shiro"],
            set4: ["huma"],
            set3: ["sobek", "offensivelogic"]
        }
    },
    
    matrix: {
        set2: `Попадания в цель навыками в уклонении накладывают кровотечение, каждую секунду наносящее урон, равный **15%/19%/22,5%/26%** от АТК в течение **5** секунд.`,

        set4: `Уменьшает АТК всех врагов в радиусе 8 метров, которые получают периодический урон, на **10%/12%/13%/15%**.`
    },

    awakening: {
        trait1200: `Получая урон, Хума получает **1** эффект Стойкости и ещё на **1** эффект Стойкости больше, если это Урон Огнём. Получить эффекты можно до **1** раза в **1** секунду. Эффекты складываются до **12** раз. При применении активного навыка оружия все эффекты Стойкости конвертируются в щит от здоровья на **12** секунд, прочность которого равна Кол-ву Стойкости * **0,4%** от здоровья. Если эффекты Стойкости были потрачены на максимальном их количестве, то итоговый щит от здоровья будет иметь прочность, равную Кол-ву Стойкости * **0.6%** от здоровья.`,

        trait4000: `Получая урон, Хума получает **1** эффект Стойкости и ещё на **1** эффект Стойкости больше, если это Урон Огнём. Получить эффекты можно до **1** раза в **1** секунду. Эффекты складываются до **12** раз. При применении активного навыка оружия все эффекты Стойкости конвертируются в щит от здоровья на **12** секунд, прочность которого равна Кол-ву Стойкости * **0,6%** от здоровья. Если эффекты Стойкости были потрачены на максимальном их количестве, то итоговый щит от здоровья будет иметь прочность, равную Кол-ву Стойкости * **0.9%** от здоровья.`,

        giftCategories: ['everyday-items', 'games', 'decorations'],

        gifts: [
            [80, "peppaFigure"],
            [60, "catFigure", "tataCards", "ufo", "psp", "pearl", "snowglobe", "princeTataFigure"],
            [30, "chessSet", "diary", "juicePouch", "suit", "perfume", "spiderFigure", "elfFigure"],
            [15, "flowers", "photoAlbum", "scarf", "tradingCard", "plant"]
        ]
    },

    bio: {
        gender: 'Женский',
        height: '167 см',
        birthplace: '???',
        horoscope: 'Козерог',
        birthday: '12 Января',
        voiceActors: {
            jp: "高橋李依 (Риэ Такахаси)",
            en: "",
            cn: "唐雅菁"
        }
    }
}

export default huma;