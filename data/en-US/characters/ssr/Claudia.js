const claudia = {
    name: "Claudia",
    uri: "claudia",
    imgSrc: "claudia.webp",
    rarity: "SSR",
    chinaOnly: false,
    banners: {
        cn: [
            {
                bannerNo: 1,
                start: "22 Dec 2021",
                end: "5 Jan 2022",
                duration: "14d",
                week: "2~4"
            },
            {
                bannerNo: 6,
                subtext: "Standard afterwards",
                start: "19 Mar 2022",
                end: "21 Mar 2022",
                duration: "2d",
                week: "14/15",
                standardAfterwards: true
            }
        ],
        glob: [
            {
                bannerNo: 3,
                start: "15 Sep 2022",
                end: "5 Oct 2022",
                duration: "20d",
                week: "6~9"
            }
        ]
    },
    weapon: {
        name: "Guren Blade",
        element: "physical",
        type: "dps",
        baseStats: ["attack", "resistance", "health"],
        shatter: ["A", "7.50"],
        charge: ["S", "12.00"],
        materials: ["physical", "red", "blue"],
        bonusEffect: {
            effect1: {
                title: "Physical Resonance",
                description: 
                    `Increase physical ATK by **15%** and physical resistance by **25%**. Activate by equipping **2** or more physical-damage weapons. This set also works with weapons in the off-hand slot. This effect does not stack repeatedly.`
            }
        },
        advancement: {
            star1: `After hitting a target with a skill or discharge skill, grant 1 stack of the following buff: Increase damage dealt by **8%** for **25** seconds, stacking up to **3** times for a maximum of 1 stack per skill use.`,
            
            star2: `Increase the current weapon's base ATK growth by **16%**.`,

            star3: `When hitting a target with a skill or discharge skill, apply 1 stack of War Wounds to the target: Increase incoming physical damage and shatter from physical weapons by **10%** for **15** seconds. Stack up to **1** time.`,

            star4: `Increase the current weapon's base HP growth by **32%**.`,

            star5: `Hitting targets with skills or discharge skills grants Skill Damage Boost, which increases all weapon skill damage by **20%** for **25** seconds. This effect cannot be stacked.`,

            star6: `Skills hitting the same target no longer have reduced damage. After using Guren Blade's skills or discharge skill, all targets with War Wounds within 8 meters gain another **1** stack of War Wounds.`
        },
        abilities: {
            normal: [
                {
                    name: "Quick Slash",
                    input: ["Attack x5"],
                    description: `While on the ground, swing the blade to attack 5 times in a row.`,
                    breakdown: [
                        'Deal damage equal to **59.2%** of ATK + **2** and knock the target back a short distance.',
                        'Deal damage equal to **82.9%** of ATK + **3** and knock the target back a short distance.',
                        'Deal damage equal to **75%** of ATK + **3** and knock the target back a short distance.',
                        'Deal damage equal to **131.7%** of ATK + **7** and knock the target back a short distance.',
                        'Deal damage equal to **225%** of ATK + **11** and **launch** the target.'
                    ]
                },
                {
                    name: "Jumping Strike",
                    input: ["Jump","Attack x4"],
                    description: `While airborne, use normal attack to attack 4 times in a row.`,
                    breakdown: [
                        'Deal damage equal to **35.3%** of ATK + **1**.',
                        'Deal damage equal to **61.3%** of ATK + **3**.',
                        'Deal damage equal to **145%** of ATK + **8**.',
                        'Deal damage equal to **175.9%** of ATK + **9** and deliver a **knockdown**.'
                    ]
                },
                {
                    name: "Cyclone",
                    input: ["Attack","hold:Attack"],
                    description: `Hold the normal attack button after normal attacks to trigger Cyclone. Upon hit, suspend the target. Cyclone can deal **47.8%** of ATK + **3** to a single target.`,
                },
                {
                    name: "Diving Edge",
                    input: ["Jump","hold:Attack"],
                    description: `Tap and hold normal attack while airborne, or use normal attack while climbing, jumping backward, or using the Jetpack to trigger Diving Edge. While falling, deal damage equal to **10%** of ATK + **1** each hit. Upon landing, deal damage equal to **76.4%** of ATK + **4** and knock the target back.  
                    The higher the altitude when triggering the attack, the greater the damage dealt, up to **600%** of ATK.`,
                },
                {
                    name: "Sneak Attack",
                    input: ["Crouch","Attack"],
                    description: `Approach the enemy from behind while crouching, then use normal attack to trigger Sneak Attack, dealing damage equal to **570%** of ATK + **30**.`,
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
                    description: `Tap normal attack during the short period after dodging to trigger Leap Attack.  
                    The Wanderer swings their blade and deals damage equal to **37.9%** of ATK + **2**, **strongly suspending** them while going airborne. Then, deal additional damage equal to **56.8%** of ATK + **3**.`,
                }
            ],
            skill: [
                {
                    name: "Roam",
                    description: `Dance through targets while swinging the blade, dealing damage equal to **418%** of ATK + **22** to up to **5** targets (consecutive hits on the same target deal **20%** less damage). At Roam has concluded, slash the space in front, dealing damage equal to **264%** of ATK + **14** to surrounding targets and suspend them. Immune to control effects while skill is in use, and all damage taken is reduced by **50%**. Cooldown: **15** seconds.`,
                }
            ],
            discharge: [
                {
                    name: "Unbridled Flurry",
                    description: `When ***weapon charge*** is full or ***Phantasia*** is triggered, switching to this weapon from another weapon **removes all debuffs from the Wanderer**, who then rushes to and **strongly suspends** a target, dealing **523.3%** of ATK + **28** damage, leaving behind a Bladestorm that deals **209.6%** x ATK + **11** damage, while gaining immunity to to grievous/freeze/burn/electrify effects for **5** seconds.`,
                }
            ]
        },
        abilitiesVideoSrc: "https://www.youtube.com/embed/lna3oINWXLs?start=6",
        recommendedMatrices: [
            {
                name: "Shiro",
                pieces: 2,
                description: "Good option for boosting damage and shatter (Guren Blade does a fair amount of shatter with the skill and discharge)."
            },
            {
                name: "Crow",
                pieces: 2,
                description: "Good option for boosting damage when at high crit rate."
            },
            {
                name: "Claudia",
                pieces: 4,
                description: "Slightly decent option that increases damage of other weapons and increases aerial attack damage."
            },
            {
                name: "Sobek",
                pieces: 3,
                description: "A good substitute for SSR damage chips if you don't have them. Very useful against groups of mobs, i.e. in Bygone Phantasm."
            }
        ]
    },

    matrix: {
        set2: `Increase damage by **13%/17%/20%/23%** when hitting a target in mid-air or initiating an aerial attack. Reset double-jump upon hitting the target in mid-air.`,

        set4: `Hitting an enemy with a skill reduces the cooldowns of all weapon skills by **1.5/2/2.5/3** seconds and increases the damage of discharge skills by **58%/80%/103%/126%** for **15** seconds.`,
    },

    awakening: {
        trait1200: `Go invisible for **1** seconds upon dodging.`,

        trait4000: `Go invisible for **1.5** seconds upon dodging.`,

        giftCategories: ['everyday-items', 'rare-items', 'decorations'],

        gifts: [
            [80, "snowglobe", "peppaFigure"],
            [60, "seal", "tataCards", "miaFigure", "catFigure", "princeTataFigure", "ufo"],
            [30, "suit", "juicePouch", "vial", "perfume", "spiderFigure", "elfFigure"],
            [15, "flowers", "photoAlbum", "photo", "scarf", "plant", "harmonica"]
        ]
    },

    bio: {
        gender: 'Female',
        height: '170 cm',
        birthplace: 'Hagarge',
        horoscope: 'Capricorn',
        birthday: '16 Jan',
        voiceActors: {
            jp: "小松未可子 (Mikako Komatsu)",
            en: "Elizabeth Simmons",
            cn: "文小"
        }
    },

    cnData: {
        weapon: {
            bonusEffect: {
                effect1: {
                    title: "",
                    description: ``
                }
            },
            abilities: {
                normal: [
                    {
                        name: "Quick Slash",
                        input: ["Attack x5"],
                        description: `While on the ground, swing the blade to attack 5 times in a row.`,
                        breakdown: [
                            'Deal damage equal to **42.9%** of ATK + **2** and knock the target back a short distance.',
                            'Deal damage equal to **60%** of ATK + **3** and knock the target back a short distance.',
                            'Deal damage equal to **54.4%** of ATK + **3** and knock the target back a short distance.',
                            'Deal damage equal to **95.7%** of ATK + **5** and knock the target back a short distance.',
                            'Deal damage equal to **163%** of ATK + **8** and **launch** the target.'
                        ]
                    },
                    {
                        name: "Jumping Strike",
                        input: ["Jump","Attack x4"],
                        description: `While airborne, tap normal attack to attack 4 times in a row.`,
                        breakdown: [
                            'Deal damage equal to **25.5%** of ATK + **1**.',
                            'Deal damage equal to **44.4%** of ATK + **2**.',
                            'Deal damage equal to **105%** of ATK + **5**.',
                            'Deal damage equal to **127.4%** of ATK + **6** and deliver a **knockdown**.'
                        ]
                    },
                    {
                        name: "Cyclone",
                        input: ["Attack","hold:Attack"],
                        description: `Hold the normal attack button after normal attacks to trigger Cyclone. Knock the target, suspending them in mid-air and deal **43.8%** of ATK + **2** to a single target.`,
                    },
                    {
                        name: "Diving Edge",
                        input: ["Jump","hold:Attack"],
                        description: `Tap and hold normal attack while airborne, or tap normal attack while climbing, jumping backward, or using the Jetpack to trigger Diving Edge. While falling, deal damage equal to **10%** of ATK + **1** each hit. Upon landing, deal damage equal to **70%** of ATK + **3** and knock the target back. The higher you are when cast, the higher the damage dealt, up to **600%** of ATK.`,
                    },
                    {
                        name: "Sneak Attack",
                        input: ["Crouch","Attack"],
                        description: `Approach the enemy from behind while crouching, then tap normal attack to use Sneak Attack, dealing damage equal to **570%** of ATK + **30**.`,
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
                        description: `Tap normal attack during the short period after dodging to trigger Leap Attack. The Wanderer swings their blade and deals damage equal to **34.7%** of ATK + **2**, **knocking the target into the air** and becoming airborne, then deal additional damage equal to **52.1%** of ATK + **2**.`,
                    }
                ],
                skill: [
                    {
                        name: "Roam",
                        description: `Dance through targets while swinging the blade, dealing damage equal to **383%** of ATK + **18** in total to up to **5** targets (attacks on the same target deal **20%** less damage). At the end of the ability, slash the space in front, dealing damage equal to **290.4%** of ATK + **14** to targets and knocking them into the air. Immune to crowd-control effects and gain a damage reduction of **50%** while ability is in use. Cooldown: **15** seconds.`,
                    }
                ],
                discharge: [
                    {
                        name: "Unbridled Flurry",
                        description: `When a ***weapon is fully charged*** or triggers ***Phantasia***, switching to this weapon from another weapon **removes all debuffs from the wielder**, who charges and **airbornes** a target to deal **479.8%** x ATK + **23** damage, leaving behind a bladestorm that deals **192%** x ATK + **9** damage to the target, while immunizing self to grievous/freeze/burn/electrify effects for **5** seconds.`,
                    }
                ]
            },
        },
        matrix: {
            set4: `Hitting an enemy with a skill reduces the cooldowns of all weapon skills by **1.5/2/2.5/3** seconds and increases the damage of discharge skills by **36%/45%/54%/63%** for **15** seconds.`,
        }
    }
}

export default claudia;