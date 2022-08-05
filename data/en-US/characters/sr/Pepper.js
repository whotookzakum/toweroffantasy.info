const pepper = {
    name: "Pepper",
    uri: "pepper",
    imgSrc: "pepper.png",
    rarity: "SR",
    chinaOnly: false,
    weapon: {
        name: "Staff of Scars",
        element: "volt",
        type: "support",
        baseStats: ["attack", "defense", "health"],
        shatter: ["B", "4.00"],
        charge: ["A", "10.00"],
        materials: ["volt", "red", "black"],
        advancement: {
            star1: "Heal all teammates within **10** meters for **100%** of ATK after using a Dodge skill.",
            
            star2: "Increase the current weapon's base HP growth by **10%**.",
            
            star3: "Normal attacks also fire two missiles, each dealing damage equal to **5%** of ATK to the target and restoring **5** weapon charge points.",
            
            star4: "Increase the current weapon's base HP growth by **20%**.",
            
            star5: "Increase speed of obtaining weapon charge by **20%** (not applicable to missile attacks).",
            
            star6: "Grant all teammates within range of the skill **60%** damage reduction and immunity to crowd control effects."
        },
        abilities: {
            normal: [
                {
                    name: "Normal Attack",
                    input: ["Attack x5"],
                    description: `While on the ground, swing the staff to attack 5 times in a row.`,
                    breakdown: [
                        'Deal damage equal to **25.1%** of ATK + **1**.',
                        'Deal damage equal to **18.8%** of ATK + **1**.',
                        'Deal damage equal to **30.4%** of ATK + **2**.',
                        'Deal damage equal to **41.4%** of ATK + **2**.',
                        'Deal damage equal to **73.2%** of ATK + **4**.'
                    ]
                },
                {
                    name: "Soaring Barrage",
                    input: ["Jump","Attack x5"],
                    description: `While airborne or after jumping once, tap normal attack to attack 5 times in a row.`,
                    breakdown: [
                        'Deal damage equal to **32.5%** of ATK + **2**.',
                        'Deal damage equal to **23.5%** of ATK + **1**.',
                        'Deal damage equal to **25.5%** of ATK + **1**.',
                        'Deal damage equal to **45.6%** of ATK + **2**.',
                        'Deal damage equal to **47.7%** of ATK + **3**.'
                    ]
                },
                {
                    name: "Moonfall",
                    input: ["Jump","hold:Attack"],
                    description: `Tap and hold normal attack while airborne to trigger Moonfall. Upon landing, deal damage once every **0.2** seconds, for a total of **57.2%** of ATK + **3** damage.`
                },
                {
                    name: "Focused Assault",
                    input: ["Attack x3","hold:Attack"],
                    description: `After the third normal attack, hold the normal attack button to trigger branch attacks, consuming **300** points of endurance.`,
                    breakdown: [
                        'Pull in enemies in front of the user, knocking them **into the air** and dealing damage equal to **16.1%** of ATK + **1** every **0.3** seconds (up to **4** times).',
                        'Deal damage equal to **18.6%** of ATK + **1** at the target location and to nearby enemies every **0.3** seconds.'
                    ]
                }
            ],
            dodge: [
                {
                    name: "Dodge",
                    description: `Dodge right before getting hit to activate a Phantasia, which reduces the speed of enemies within the area. Cooldown: 15 seconds. While dodging, you gain hitstun immunity for **0.5** seconds.`
                },
                {
                    name: "Surge",
                    input: ["Arrow keys","Dodge","Attack"],
                    description: `Tap normal attack during the short perfect dodge window (tap an arrow button before dodging) to trigger Surge. Each wave of energy deals damage equal to **22.6%** of ATK + **1** to targets. Grant **75** weapon charge points upon use.`
                },
                {
                    name: "Tesseract",
                    input: ["Dodge","Attack"],
                    description: `Tap normal attack during the short period after dodging to trigger Evasive Blast. Fire an energy orb forward, dealing damage equal to **32.1%** of ATK + **2** to targets in its path every **0.3** seconds (up to 5 times). Grant **75** weapon charge points upon use.`
                }
            ],
            skill: [
                {
                    name: "Sanctuary",
                    description: `Create an energy shield at the Wanderer's location. Heal allies within the shield for **81.7%** of ATK + **4** every second and reduce their damage taken by **3%** for **10** seconds. **60**-second cooldown.`
                }
            ],
            discharge: [
                {
                    name: "Swift Deliverance",
                    description: `When a ***weapon is fully charged*** or triggers ***Phantasia***, switching to this weapon from another weapon **removes all debuffs from the wielder**, and the staff continues to remove debuffs from the Wanderer and allies, plus healing nearby Wanderers and allies for **79%** x ATK + **4** HP for **7** seconds.`
                }
            ]
        },
        abilitiesVideoSrc: "https://www.youtube.com/embed/VMC9pJ83Y0U?start=4",
        recommendedMatrix: {
            set2: ["coco-ritter"],
            set4: ["coco-ritter"],
            set3: ["pepper"]
        }
    },
    matrix: {
        set3: "Increase speed of obtaining weapon charge by **10%/12.5%/15%**."
    },

    awakening: {
        trait1200: "When Pepper spends satiety to restore HP, increase restoration effect by **100%**.",

        trait4000: "When Pepper spends satiety to restore HP, increase restoration effect by **200%**.",

        giftCategories: ['everyday-items', 'decorations', 'collectibles'],

        gifts: [
            [80, "peppaFigure"],
            [60, "seal", "tataCards", "foxFigure", "catFigure", "goldCoin", "snowglobe", "kitchenware", "princeTataFigure", "linyeFigure"],
            [30, "suit", "juicePouch", "necklace", "perfume", "spiderFigure", "elfFigure"],
            [15, "photoAlbum", "flowers", "plant", "scarf", "strangePlant"]
        ]
    },

    bio: {
        gender: 'Female',
        height: '160 cm',
        birthplace: 'Banges',
        horoscope: 'Cancer',
        birthday: '9 Jul',
        voiceActors: {
            jp: "能登麻美子 (Mamiko Noto)",
            en: "Kayli Mills",
            cn: ""
        }
    }
}

export default pepper;