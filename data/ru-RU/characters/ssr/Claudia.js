const claudia = {
    name: "Клаудия",
    rarity: "SSR",
    chinaOnly: false,
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
        skills: [
            {
                name: "Quick Slash",
                type: "normal",
                desc: `While on the ground, swing the blade to attack 5 times in a row.  
                        First Attack: Deal damage equal to **39%** of ATK + **2** and knock the target back a short distance.  
                        Second Attack: Deal damage equal to **54.6%** of ATK + **3** and knock the target back a short distance.  
                        Third Attack: Deal damage equal to **49.4%** of ATK + **3** and knock the target back a short distance.  
                        Fourth Attack: Deal damage equal to **87%** of ATK + **5** and knock the target back a short distance.  
                        Fifth Attack: Deal damage equal to **148.1%** of ATK + **8** and **launch** the target.`,
            },
            {
                name: "Jumping Strike",
                type: "normal",
                desc: `While airborne, tap normal attack to attack 4 times in a row.  
                        First Attack: Deal damage equal to **23.2%** of ATK + **1**.  
                        Second Attack: Deal damage equal to **40.3%** of ATK + **2**.  
                        Third Attack: Deal damage equal to **95.4%** of ATK + **5**.  
                        Fourth Attack: Deal damage equal to **115.8%** of ATK + **6** and deliver a **knockdown**.`,
            },
            {
                name: "Cyclone",
                type: "normal",
                desc: `Hold the normal attack button after normal attacks to trigger Cyclone. Knock the target, suspending them in mid-air and deal **39.8%** of ATK + **2** to a single target.`,
            },
            {
                name: "Diving Edge",
                type: "normal",
                desc: `Tap and hold normal attack while airborne, or tap normal attack while climbing, jumping backward, or using the Jetpack to trigger Diving Edge. While falling, deal damage equal to **10%** of ATK + **1** each hit. Upon landing, deal damage equal to **63.6%** of ATK + **3** and knock the target back. The higher you are when cast, the higher the damage dealt, up to **600%** of ATK.`,
            },
            {
                name: "Sneak Attack",
                type: "normal",
                desc: `Approach the enemy from behind while crouching, then tap normal attack to use Sneak Attack, dealing damage equal to **570%** of ATK + **30**.`,
            },
            {
                name: "Dodge",
                type: "dodge",
                desc: `Dodge right before getting hit to activate a Phantasia, which reduces the speed of enemies within the area. Cooldown: 15 seconds. While dodging, you gain hitstun immunity for **0.5** seconds.`,
            },
            {
                name: "Leap Attack",
                type: "dodge",
                desc: `Tap normal attack during the short period after dodging to trigger Leap Attack. The Wanderer swings their blade and deals damage equal to **31.6%** of ATK + **2**, **knocking the target into the air** and becoming airborne, then deal additional damage equal to **47.3%** of ATK + **2**.`,
            },
            {
                name: "Roam",
                type: "skill",
                desc: `Dance through targets while swinging the blade, dealing damage equal to **348.5%** of ATK + **18** in total to up to **5** targets (attacks on the same target deal **20%** less damage). At the end of the ability, slash the space in front, dealing damage equal to **264%** of ATK + **14** to targets and knocking them into the air. Immune to crowd-control effects while ability is in use. Cooldown: **15** seconds.`,
            },
            {
                name: "Unbridled Flurry",
                type: "discharge",
                desc: `When a <b>weapon is fully charged</b> or triggers <b>Phantasia</b>, switching to this weapon from another weapon **removes all debuffs from the wielder**, who charges and **airbornes** a target to deal **436.2%** x ATK + **23** damage, leaving behind a bladestorm that deals **174.4%** x ATK + **9** damage to the target, while immunizing self to grievous/freeze/burn/electrify effects for **5** seconds.`,
            }
        ],
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