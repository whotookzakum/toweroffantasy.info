const echo = {
    name: "Эхо",
    rarity: "SR",
    chinaOnly: false,
    weapon: {
        name: "Громовая алебарда",
        element: "volt",
        type: "dps",
        baseStats: ["attack", "defense", "health"],
        shatter: ["11.00", "s"],
        charge: ["7.00", "b"],
        materials: ["volt", "red", "black"],
        advancement: {
            star1: `Эффективность пробивания увеличивается на **15%**. При пробивании щита цели увеличивает АТК всех союзников на **15%** в течение **30** секунд. Эффект не складывается.`,

            star2: `Базовый прирост к здоровью от оружия увеличивается на **10%**.`,

            star3: `При попадании навыком <strong class='text-green'>Лунный охотник** уменьшает АТК поражённых целей на **5%** and увеличивает АТК персонажа на **5%** в течение **15** секунд (эффект складывается до **3** раз при задевании навыком больше одной цели). Сила эффекта удваивается на целях с эффектом Тяжёлых ран.`,

            star4: `Базовый прирост АТК оружия увеличивается на **20%**.`,

            star5: `Удваивает продолжительность оглушения навыков уклонения.  
                <abbr title='China Exclusive' class='cn-flag'>CN</abbr> Удваивает продолжительность оглушения навыков уклонения вперёд.`,

            star6: `Навык высвобождения наносит тем больше урона, чем дальше пролетит, вплоть до максимального бонуса урона в **100%**.`
        },
        skills: [
            {
                name: "Thrust",
                type: "normal",
                desc: `While on the ground, swing the spear to attack 5 times in a row.  
                        First Attack: Deal damage equal to **24.7%** of ATK + **1** and knock the target back a short distance.  
                        Second Attack: Deal damage equal to **22.6%** of ATK + **1** and knock the target back a short distance.  
                        Third Attack: Deal damage equal to **47.2%** of ATK + **2** and knock the target back a short distance.  
                        Fourth Attack: Deal damage equal to **65.2%** of ATK + **3** and knock the target back a short distance.  
                        Fifth Attack: Deal damage equal to **114.95%** of ATK + **6** and knock the target back a significant distance.`,
            },
            {
                name: "Jumping Strike",
                type: "normal",
                desc: `While airborne, tap normal attack to attack 4 times in a row in the air.  
                        First Attack: Deal damage equal to **27.4%** of ATK + **1**.  
                        Second Attack: Deal damage equal to **23.2%** of ATK + **1**.  
                        Third Attack: Deal damage equal to **45.8%** of ATK + **2**.  
                        Fourth Attack: Deal damage equal to **110%** of ATK + **6**.`,
            },
            {
                name: "Crashing Drive",
                type: "normal",
                desc: `Tap and hold normal attack while airborne (or tap when a target is selected), or tap normal attack while climbing, jumping backward, or using the Jetpack to trigger Crashing Drive. While falling, deal damage equal to **8%** of ATK + **1** each hit. Upon landing, deal damage equal to **48.5%** of ATK + **3** and knock the target down. The higher the location is when triggered, the higher the damage dealt, up to **600%** of ATK.`,
            },
            {
                name: "Spear Flurry",
                type: "normal",
                desc: `After the third normal attack, hold the normal attack button to trigger Spear Flurry. Strike the target and knock them **into the air**, dealing damage equal to **49.2%** of ATK + **3**. Tap again to continue attacking the airborne target, dealing up to **98%** of ATK + **5** damage to a single target.`,
            },
            {
                name: "Sneak Attack",
                type: "normal",
                desc: `Thrust the spear forward, dealing damage equal to **570%** of ATK + **30**.`,
            },
            {
                name: "Flying Kick",
                type: "dodge",
                desc: `Tap normal attack during the short perfect dodge window (tap an arrow button before dodging) to trigger Flying Kick. Once hit the target, deal damage equal to **72%** of ATK + **4**, knock the target back significantly, and stun them for **1** second (non-Wanderer targets) or **0.5** seconds (Wanderers).`,
            },
            {
                name: "Lunging Smash",
                type: "dodge",
                desc: `Tap normal attack during the short period after dodging to trigger Lunging Smash. Slam the long spear into the ground, dealing damage equal to **52.8%** of ATK + **3** and knocking targets **into the air**.`,
            },
            {
                name: "Dodge",
                type: "dodge",
                desc: `Dodge right before getting hit to trigger a Phantasia, reducing the speed of enemies within an area. Become immune to hitstun for **0.5** seconds while dodging.`,
            },
            {
                name: "Лунный охотник",
                type: "skill",
                desc: `Launch the target into the air and go airborne, dealing damage equal to **127.5%** of ATK + **7**. **25**-second cooldown.`,
            },
            {
                name: "Thunderclap",
                type: "discharge",
                desc: `When a <b>weapon is fully charged</b> or triggers <b>Phantasia</b>, switching to this weapon from another weapon **removes all debuffs from the wielder**, who jumps in the air and throws a lightning spear that causes area explosion to deal **296.7%** x ATK + **16** damage plus **paralyzing** the target for **1** second.`,
            }
        ],
        recommendedMatrix: {
            set2: ["samir", "king", "shiro"],
            set3: ["sobek", "offensivelogic"]
        }
    },
    
    matrix: {
        set3: "При использовании навыка высвобождения этого оружия восстанавливается **80/100/120** очков заряда."
    },

    awakening: {
        trait1200: "Союзники в радиусе **10** метров от Эхо получают бонус урона в **4%** (кроме самой Эхо).",

        trait4000: "Союзники в радиусе **10** метров от Эхо получают бонус урона в **6%** (кроме самой Эхо).",

        giftCategories: ['everyday-items', 'limited-edition', 'games'],

        gifts: [
            [80, "psp", "tataCards"],
            [60, "goldCoin", "ufo", "peppaFigure", "catFigure", "pearl", "tataFigure"],
            [30, "chessSet", "suit", "juicePouch", "diary", "perfume"],
            [15, "flowers", "snackBox", "tradingCard", "harmonica", "scarf"]
        ]
    },

    bio: {
        gender: 'Женский',
        height: '162 см',
        birthplace: 'Уоррен',
        horoscope: 'лев',
        birthday: '14 Августа',
        voiceActors: {
            jp: "大久保瑠美 (Руми Окубо)",
            en: "Jeannie Tirado (Джинни Тирадо)",
            cn: ""
        }
    }
}

export default echo;