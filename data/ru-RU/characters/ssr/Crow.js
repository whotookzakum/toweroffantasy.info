const crow = {
    name: "Ворон",
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
            
            star6: `При попадании в цель активным навыком оружия Урон Молнией по этой цели увеличивается на **20%** в течение **20** секунд.`
        },
        skills: [
            {
                name: "Twin Blades",
                type: "normal",
                desc: `While on the ground, swing the blades to attack 5 times in a row.  
                        First Attack: Deal damage equal to **42.9%** of ATK + **2** and knock the target back a short distance.  
                        Second Attack: Deal damage equal to **52.2%** of ATK + **3** and knock the target back a short distance.  
                        Third Attack: Deal damage equal to **64.8%** of ATK + **3** and knock the target back a short distance.  
                        Fourth Attack: Deal damage equal to **69.2%** of ATK + **4** and knock the target back a short distance.  
                        Fifth Attack: Deal damage equal to **144.3%** of ATK + **8** and knock the target back a short distance.`,
            },
            {
                name: "Sky Flurry",
                type: "normal",
                desc: `While airborne or after jumping once, tap normal attack to attack 4 times in a row.  
                        First Attack: Deal damage equal to **46.8%** of ATK + **2**.  
                        Second Attack: Deal damage equal to **27.5%** of ATK + **1**.  
                        Third Attack: Deal damage equal to **65.8%** of ATK + **3**.  
                        Fourth Attack: Deal damage equal to **98.5%** of ATK + **5**.`,
            },
            {
                name: "Rapid Lunge",
                type: "normal",
                desc: `After the third normal attack, hold the normal attack button to trigger Rapid Lunge. Strike the target and knock them **into the air**, dealing total damage equal to **83.4%** of ATK + **4**.`,
            },
            {
                name: "Spiral Drive",
                type: "normal",
                desc: `Tap and hold normal attack while airborne (or tap when a target is selected), or tap normal attack while climbing, jumping backward, or using the Jetpack to trigger Spiral Drive. While falling, deal damage equal to **42%** of ATK + **2** each hit.`,
            },
            {
                name: "Sneak Attack",
                type: "normal",
                desc: `Approach the enemy from behind while crouching, then tap normal attack to use Sneak Attack, dealing damage equal to **570%** of ATK + **30**.`,
            },
            {
                name: "Flying Blades",
                type: "dodge",
                desc: `Tap normal attack during the short perfect dodge window (tap an arrow button before dodging) to trigger Flying Blades. Slash a target **5** times, each dealing damage equal to **18.8%** of ATK + **1**. Grant immunity to control effects while phasing.`,
            },
            {
                name: "Dodge",
                type: "dodge",
                desc: `Dodge right before getting hit to activate a Phantasia, which reduces the speed of enemies within the red area. Cooldown: 15 seconds. While dodging, you gain hitstun immunity for **0.5** seconds.`,
            },
            {
                name: "Returning Blades",
                type: "skill",
                desc: `Fires 6 returning blades, each dealing damage equal to **20.7%** of ATK + **1**. Gains **hyperbody** for up to **8** seconds, and the effect is removed when the blades return. **45**-second cooldown.`,
            },
            {
                name: "Orbiting Blades",
                type: "discharge",
                desc: `When <b>weapon charge is full</b> or <b>Phantasia</b> is triggered, **remove all debuffs from the wielder** and blink to the target location upon switching to this weapon and attack, dealing damage equal to **62.1%** of ATK + **3** and electrocuting the target (after **5** seconds, deals volt damage equal to **15%** of damage dealt, up to **350%** of the Wanderer's ATK. This is an abnormal status that can be dispelled). Also spawn 3 blades that orbit around the Wanderer, dealing damage equal to **46.5%** of ATK + **2** to those that touch them.`,
            }
        ],
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
        birthday: '17 Декабря',
        voiceActors: {
            jp: "岡本信彦 (Нобухико Окамото)",
            en: "Casey Mongillo (Кейси Монгилло)",
            cn: "翟巍 (Вэй Чжай)"
        }
    }
}

export default crow;
