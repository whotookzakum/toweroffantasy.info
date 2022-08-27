const cobalt = {
    name: "Cobalt-B",
    uri: "cobalt-b",
    imgSrc: "cobalt-b.webp",
    rarity: "SSR",
    chinaOnly: true,
    banners: {
        cn: [
            {
                bannerNo: 2,
                start: "8 Jan 2022",
                end: "26 Jan 2022",
                duration: "18d",
                week: "4~7"
            },
            {
                bannerNo: 8,
                subtext: "Standard afterwards",
                start: "13 Apr 2022",
                end: "27 Apr 2022",
                duration: "14d",
                week: "18~20",
                standardAfterwards: true
            }
        ]
    },
    weapon: {
        name: "Blazing Revolver",
        element: "flame",
        type: "dps",
        baseStats: ["attack", "health", "crit"],
        shatter: ["B", "6.50"],
        charge: ["A", "10.00"],
        materials: ["flame", "red", "black"],
        bonusEffect: {
            effect1: {
                title: "Flame Resonance",
                description: 
                    `Increase flame ATK by **15%** and flame resistance by **25%**. Activate by equipping **2** or more flame weapons. This set effect also works with weapons in the off-hand slot. Effect cannot be stacked.`
            }
        },
        advancement: {
            star1: "When using the weapon skill, add **2%** of the enemy's max HP as bonus damage, up to **200%** of ATK.",

            star2: "Increase the current weapon's base ATK growth by **16%**.",

            star3: 'Using the skill or dodge attack on burning targets will additionally apply *Ionic Burn*, dealing **90%** of ATK as Flame damage every second for **10** seconds.',

            star4: "Increase the current weapon's base ATK growth by **32%**.",

            star5: "*Ionic Burn* damage increased to **140%** and dodge attacks from any weapon will refresh the burn's duration.",

            star6: "The skill *Barrage* has a burning effect that lasts for **15** seconds. Hitting a target with any weapon's dodge attack reduces the cooldown of *Barrage* by **4** seconds, up to once every **1.5** seconds. Damage over time effects trigged from a dodge attack can also trigger the effect."
        },
        abilities: {
            normal: [
                {
                    name: "Normal Attack",
                    input: ["Attack x5"],
                    description: `While on the ground, perform 5 basic attacks in a row.`,
                    breakdown: [
                        'Deal damage equal to **54.9%** of ATK + **3**.',
                        'Deal damage equal to **79.2%** of ATK + **4**.',
                        'Deal damage equal to **99.2%** of ATK + **5**.',
                        'Deal damage equal to **149.7%** of ATK + **8**.',
                        'Deal damage equal to **144.7%** of ATK + **7**.'
                    ]
                },
                {
                    name: "Charge Attack",
                    input: ["hold:Attack"],
                    description: `Tap and hold basic attack to enter the charging attack state, when the charging time increases, the damage increases, up to **100.2%** of ATK + **5** damage to the target; explodes three seconds later (or when the target dies), dealing **25%** of ATK + **1** ranged damage to nearby enemy units, during which every time the target takes damage, the ranged damage is doubled (up to 4 times) and the damage is increased.`,
                },
                {
                    name: "Jump Attack",
                    input: ["Jump","Attack"],
                    description: `When in the air or after using a jump, you can launch an air attack. Throwing a bomb forward, dealing damage to enemies in a circular area ahead. Dealing **95.3%** of ATK + **5** damage, and knocks back the target slightly, consuming **250** stamina.`,
                },
                {
                    name: "Air Attack",
                    input: ["Jump","Jump","Attack"],
                    description: `Press double jump to launch a jump attack in the air. Fires a ray of primal energy downwards and strafes forward, dealing damage to enemies equal to **35.5%** of ATK + **2** damage.`,
                },
                {
                    name: "Demolition Grenade",
                    input: ["Attack","hold:Attack"],
                    description: `During a normal attack, hold the basic attack to sweep forward, dealing **107.2%** of ATK + **5** ranged damage to enemies swept through.`,
                }
            ],
            dodge: [
                {
                    name: "Dodge",
                    description: `Dodge right before getting hit to activate a Phantasia, which reduces the speed of enemies within the area. Cooldown: 15 seconds. While dodging, you gain hitstun immunity for **0.5** seconds.`,
                },
                {
                    name: "Leap Attack",
                    input: ["Dodge","Attack"],
                    description: `Use a basic attack immediately after dodging to trigger a melee break attack. Inflicts damage to targets in the skill range with **163.9%** of ATK + **8** damage.`,
                }
            ],
            skill: [
                {
                    name: "Barrage",
                    description: `Continuously fires at targets within the skill range, causing a total of 700% of ATK + 35 damage, cooldown 60 second.`,
                }
            ],
            discharge: [
                {
                    name: "Multiple Grenade",
                    description: `When a ***weapon is fully charged*** or triggers ***Phantasia***, switching to this weapon from another weapon **removes all debuffs from the wielder** and launches 3 grenades. Hitting a target deals **598.5%** of ATK + **30** damage, with knock-up effect.`,
                }
            ]
        },
        recommendedMatrix: {
            set2: ["samir", "crow"],
            set4: ["cobalt-b", "samir"],
            set3: ["sobek"]
        }
    },

    matrix: {
        set2: `Restore 1 dodge every **4** dodges. Dodge attacks add burn to the target, dealing **13%/17%/21%/25%** attack damage per second for **10** seconds.`,

        set4: `Increases damage by **13%/17%/21%/25%** to targets with abnormal statuses.`
    },

    awakening: {
        trait1200: `When Cobalt-B releases a discharge skill, restore **50** - **120** points of energy charge at random.`,

        trait4000: `When Cobalt-B releases a discharge skill, restore **90** - **180** points of energy charge at random.`,

        giftCategories: ['metalware', 'collectibles', 'limited-edition'],

        gifts: [
            [80, "kitchenware", "goldCoin"],
            [60, "seal", "tataCards", "foxFigure", "catFigure", "bearFigure", "tataFigure", "present", "psp", "linyeFigure", "pearl"],
            [30, "necklace", "toolbox", "strangeFragment"],
            [15, "dumbbells", "snackBox", "strangePlant"]
        ],
    },

    bio: {
        gender: 'Female',
        height: '157 cm',
        birthplace: 'Crown',
        horoscope: 'Cancer',
        birthday: '26 Jun',
        voiceActors: {
            jp: "川澄綾子 (Ayako Kawasumi)",
            en: "Stephanie Kerbis",
            cn: "陈睿婕"
        }
    },

    cnData: {
        weapon: {
            bonusEffect: {
                effect1: {
                    title: "",
                    description: ``
                }
            }
        }
    }
}

export default cobalt;