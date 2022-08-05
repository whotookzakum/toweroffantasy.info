const echo = {
    name: "Echo",
    uri: "echo",
    imgSrc: "echo.png",
    rarity: "SR",
    chinaOnly: false,
    weapon: {
        name: "Thunderous Halberd",
        element: "volt",
        type: "dps",
        baseStats: ["attack", "defense", "health"],
        shatter: ["S", "11.00"],
        charge: ["B", "7.00"],
        materials: ["volt", "red", "black"],
        advancement: {
            star1: `Increase shatter by **15%**. After shattering the target's shield, increase all teammates' ATK by **15%** for **30** seconds. This cannot be stacked.`,

            star2: `Increase the current weapon's base HP growth by **10%**.`,

            star3: `After hitting a target with *Moonchase*, reduce their ATK by **5%** and increase the user's ATK by **5%** for **15** seconds (effect can be stacked up to **3** times by hitting multiple targets). Effect is doubled to grievous targets.`,

            star4: `Increase the current weapon's base ATK growth by **20%**.`,

            star5: `Double stun duration from dodge skills.  
                <abbr title='China Exclusive'/> Double stun duration from forward dodge skills.`,

            star6: `Discharge deals more damage the further it travels, up to **100%** more damage.`
        },
        abilities: {
            normal: [
                {
                    name: "Thrust",
                    input: ["Attack x5"],
                    description: `While on the ground, swing the spear to attack 5 times in a row.`,
                    breakdown: [
                        'Deal damage equal to **24.7%** of ATK + **1** and knock the target back a short distance.',
                        'Deal damage equal to **22.6%** of ATK + **1** and knock the target back a short distance.',
                        'Deal damage equal to **47.2%** of ATK + **2** and knock the target back a short distance.',
                        'Deal damage equal to **65.2%** of ATK + **3** and knock the target back a short distance.',
                        'Deal damage equal to **114.95%** of ATK + **6** and knock the target back a significant distance.'
                    ]
                },
                {
                    name: "Jumping Strike",
                    input: ["Jump","Attack x4"],
                    description: `While airborne, tap normal attack to attack 4 times in a row in the air.`,
                    breakdown: [
                        'Deal damage equal to **27.4%** of ATK + **1**.',
                        'Deal damage equal to **23.2%** of ATK + **1**.',
                        'Deal damage equal to **45.8%** of ATK + **2**.',
                        'Deal damage equal to **110%** of ATK + **6**.'
                    ]
                },
                {
                    name: "Crashing Drive",
                    input: ["Jump","hold:Attack"],
                    description: `Tap and hold normal attack while airborne (or tap when a target is selected), or tap normal attack while climbing, jumping backward, or using the Jetpack to trigger Crashing Drive. While falling, deal damage equal to **8%** of ATK + **1** each hit. Upon landing, deal damage equal to **48.5%** of ATK + **3** and knock the target down. The higher the location is when triggered, the higher the damage dealt, up to **600%** of ATK.`,
                },
                {
                    name: "Spear Flurry",
                    input: ["Attack x3","hold:Attack"],
                    description: `After the third normal attack, hold the normal attack button to trigger Spear Flurry. Strike the target and knock them **into the air**, dealing damage equal to **49.2%** of ATK + **3**. Tap again to continue attacking the airborne target, dealing up to **98%** of ATK + **5** damage to a single target.`,
                },
                {
                    name: "Sneak Attack",
                    input: ["Crouch","Attack"],
                    description: `Thrust the spear forward, dealing damage equal to **570%** of ATK + **30**.`,
                }
            ],
            dodge: [
                {
                    name: "Flying Kick",
                    input: ["Arrow keys","Dodge","Attack"],
                    description: `Tap normal attack during the short perfect dodge window (tap an arrow button before dodging) to trigger Flying Kick. Once hit the target, deal damage equal to **72%** of ATK + **4**, knock the target back significantly, and stun them for **1** second (non-Wanderer targets) or **0.5** seconds (Wanderers).`,
                },
                {
                    name: "Lunging Smash",
                    input: ["Dodge","Attack"],
                    description: `Tap normal attack during the short period after dodging to trigger Lunging Smash. Slam the long spear into the ground, dealing damage equal to **52.8%** of ATK + **3** and knocking targets **into the air**.`,
                },
                {
                    name: "Dodge",
                    description: `Dodge right before getting hit to trigger a Phantasia, reducing the speed of enemies within an area. Become immune to hitstun for **0.5** seconds while dodging.`,
                }
            ],
            skill: [
                {
                    name: "Moonchaser",
                    description: `Launch the target into the air and go airborne, dealing damage equal to **127.5%** + **7** ATK. **25**-second cooldown.`,
                }
            ],
            discharge: [
                {
                    name: "Thunderclap",
                    description: `When a ***weapon is fully charged*** or triggers ***Phantasia***, switching to this weapon from another weapon **removes all debuffs from the wielder**, who jumps in the air and throws a lightning spear that causes area explosion to deal **296.7%** x ATK + **16** damage plus **paralyzing** the target for **1** second.`,
                }
            ]
        },
        abilitiesVideoSrc: "https://www.youtube.com/embed/a-SWBWfrFDA?start=5",
        recommendedMatrix: {
            set2: ["samir", "king", "shiro"],
            set3: ["sobek"]
        }
    },
    
    matrix: {
        set3: "Using a discharge skill to switch to the current weapon grants **80/100/120** weapon charge."
    },

    awakening: {
        trait1200: "When teamed up with Echo, allies within **10** meters around Echo gain a damage boost of **4%** (excluding Echo).",

        trait4000: "When teamed up with Echo, allies within **10** meters around Echo gain a damage boost of **6%** (excluding Echo).",

        giftCategories: ['everyday-items', 'limited-edition', 'games'],

        gifts: [
            [80, "psp", "tataCards"],
            [60, "goldCoin", "ufo", "peppaFigure", "catFigure", "pearl", "tataFigure"],
            [30, "chessSet", "suit", "juicePouch", "diary", "perfume"],
            [15, "flowers", "snackBox", "tradingCard", "harmonica", "scarf"]
        ]
    },

    bio: {
        gender: 'Female',
        height: '162 cm',
        birthplace: 'Warren',
        horoscope: 'Leo',
        birthday: '14 Aug',
        voiceActors: {
            jp: "大久保瑠美 (Rumi Okubo)",
            en: "Jeannie Tirado",
            cn: ""
        }
    }
}

export default echo;